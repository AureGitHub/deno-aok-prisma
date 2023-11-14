import {Role} from "../../../utils/enums.ts"

export class userClass {
  id: number | undefined;
  name: string | undefined;
  email: string | undefined;
  roleId: number | undefined;
  roleDescripcion: string | undefined;
  estadoId: number | undefined;
  SessionexpiredIn: string | undefined;
  isAdmin: boolean | undefined;
  isGod: boolean | undefined;
  isNormal: boolean | undefined;

  constructor(usarFromDB: any) {
    this.id = usarFromDB['id'];
    this.name = usarFromDB['name'];
    this.email = usarFromDB['email'];
    
    this.roleId = usarFromDB['roleId'];
    this.estadoId = usarFromDB['estadoId'];
    
    this.isGod = this.roleId ===Role.god;
    this.isAdmin = this.roleId ===Role.admin || this.roleId ===Role.god;    
    this.isNormal = this.roleId ===Role.normal;

    this.roleDescripcion = this.roleId ===Role.god ?  Role[Role.god] : (
      this.roleId ===Role.admin ? Role[Role.admin] : Role[Role.normal]
    );

  }
};
