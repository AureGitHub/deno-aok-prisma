export class userClass   {
    id: number|undefined;
    name:  string|undefined;
    email: string|undefined;    
    role: string|undefined;    
    SessionexpiredIn: string|undefined; 

    constructor(param: any){
      this.id = param['id'];
      this.name = param['name'];
      this.role = param['role'];

    }
  };