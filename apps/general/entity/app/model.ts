export class appClass   {
    id: number|undefined;
    nombre:  string|undefined;

    constructor(param: any){
      this.id = param['id'];
      this.nombre = param['nombre'];
    }
  };