
import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";

const { DATABASE_URL_POST_TTEC_EUROMILLONES } = Deno.env.toObject();
const client = new Client(DATABASE_URL_POST_TTEC_EUROMILLONES);
await client.connect();

export default client;