// deno-lint-ignore-file no-explicit-any
import { Role } from "../../enums.ts";

export class userClass {
  id: number | undefined;
  name: string | undefined;
  email: string | undefined;
  roleid: number | undefined;
  roleDescripcion: string | undefined;
  estadoid: number | undefined;
  SessionexpiredIn: string | undefined;
  isAdmin: boolean | undefined;
  isGod: boolean | undefined;
  isNormal: boolean | undefined;

  saldo: number | undefined;


  constructor(usarFromDB: any) {
    this.id = usarFromDB['id'];
    this.name = usarFromDB['name'];
    this.email = usarFromDB['email'];
    
    this.roleid = usarFromDB['roleid'];
    this.estadoid = usarFromDB['estadoid'];
    
    this.isGod = this.roleid ===Role.god;
    this.isAdmin = this.roleid ===Role.admin || this.roleid ===Role.god;    
    this.isNormal = this.roleid ===Role.normal;

    this.saldo = usarFromDB['saldo'];

    this.roleDescripcion = this.roleid ===Role.god ?  Role[Role.god] : (
      this.roleid ===Role.admin ? Role[Role.admin] : Role[Role.normal]
    );

  }
};
