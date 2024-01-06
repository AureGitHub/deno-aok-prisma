
import { statusOK } from "../../../../utils/status.ts";
import entities from "./entities.ts";

const getByName = (ctx: any) => {
  const data = entities;
  statusOK(ctx, data);

};

export default {
  getByName,
};
