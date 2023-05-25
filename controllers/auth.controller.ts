import { RouterContext,prisma } from "../dep/deps.ts";
import { signJwt, verifyJwt } from "../utils/jwt.ts";
import { Prisma } from "../generated/client/deno/edge.ts";

import  { userClass } from "../dep/deps.ts";





const ACCESS_TOKEN_EXPIRES_IN = 15;
const REFRESH_TOKEN_EXPIRES_IN = 60;

const signUpUserController = async ({
  request,
  response,
}: RouterContext<string>) => {
  try {
    const user: Prisma.UserCreateInput = await request.body().value;
    const {email} = user;



   const userExists = await prisma.user.findUnique({where: {email}});
    if (userExists) {
      response.status = 409;
      response.body = {
        status: "fail",
        message: "User with that email already exists",
      };
      return;
    }

    const userAdded = await prisma.user.create({
      data: user
    });

    let userRet = new userClass(userAdded);


    response.status = 201;
    response.body = {
      status: "success",
      userRet,
    };
  } catch (error) {
    response.status = 500;
    response.body = { status: "error", message: error.message };
    return;
  }
};

const loginUserController = async ({
  request,
  response,
  cookies,
}: RouterContext<string>) => {
  try {
    const { email, password }: { email: string; password: string } =
      await request.body().value;

      const result = await prisma.user.findMany({where: {email,password }});

      const user = result ? result[0] : null;

    if (!user) {
      response.status = 401;
      response.body = {
        status: "fail",
        message: "Invalid email or password",
      };
      return;
    }

    const accessTokenExpiresIn = new Date(
      Date.now() + ACCESS_TOKEN_EXPIRES_IN * 60 * 1000
    );
    const refreshTokenExpiresIn = new Date(
      Date.now() + REFRESH_TOKEN_EXPIRES_IN * 60 * 1000
    );

    const { token: access_token } = await signJwt({
      user_id: user.id.toString(),
      privateKeyPem: "ACCESS_TOKEN_PRIVATE_KEY",
      expiresIn: accessTokenExpiresIn,
      issuer: "website.com",
    });
    const { token: refresh_token } = await signJwt({
      user_id: user.id.toString(),
      privateKeyPem: "REFRESH_TOKEN_PRIVATE_KEY",
      expiresIn: refreshTokenExpiresIn,
      issuer: "website.com",
    });

    cookies.set("access_token", access_token, {
      expires: accessTokenExpiresIn,
      maxAge: ACCESS_TOKEN_EXPIRES_IN * 60,
      httpOnly: true,
      secure: false,
    });
    cookies.set("refresh_token", refresh_token, {
      expires: refreshTokenExpiresIn,
      maxAge: REFRESH_TOKEN_EXPIRES_IN * 60,
      httpOnly: true,
      secure: false,
    });

    response.status = 200;
    response.body = { status: "success", access_token };
  } catch (error) {
    response.status = 500;
    response.body = { status: "error", message: error.message };
    return;
  }
};

const refreshAccessTokenController = async ({
  response,
  cookies,
}: RouterContext<string>) => {
  try {
    const refresh_token = await cookies.get("refresh_token");

    const message = "Could not refresh access token";

    if (!refresh_token) {
      response.status = 403;
      response.body = {
        status: "fail",
        message,
      };
      return;
    }

    const decoded = await verifyJwt<{ sub: string }>({
      token: refresh_token,
      publicKeyPem: "REFRESH_TOKEN_PUBLIC_KEY",
    });

    if (!decoded) {
      response.status = 403;
      response.body = {
        status: "fail",
        message,
      };
      return;
    }

    const accessTokenExpiresIn = new Date(
      Date.now() + ACCESS_TOKEN_EXPIRES_IN * 60 * 1000
    );

    const { token: access_token } = await signJwt({
      user_id: decoded.sub,
      issuer: "website.com",
      privateKeyPem: "ACCESS_TOKEN_PRIVATE_KEY",
      expiresIn: accessTokenExpiresIn,
    });

    cookies.set("access_token", access_token, {
      expires: accessTokenExpiresIn,
      maxAge: ACCESS_TOKEN_EXPIRES_IN * 60,
      httpOnly: true,
      secure: false,
    });

    response.status = 200;
    response.body = { status: "success", access_token };
  } catch (error) {
    response.status = 500;
    response.body = { status: "error", message: error.message };
    return;
  }
};

const logoutController = ({ response, cookies }: RouterContext<string>) => {
  cookies.set("access_token", "", {
    httpOnly: true,
    secure: false,
    maxAge: -1,
  });
  cookies.set("refresh_token", "", {
    httpOnly: true,
    secure: false,
    maxAge: -1,
  });

  response.status = 200;
  response.body = { status: "success" };
};
export default {
  signUpUserController,
  loginUserController,
  logoutController,
  refreshAccessTokenController,
};
