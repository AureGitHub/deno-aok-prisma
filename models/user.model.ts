export class userClass   {
    id: number|undefined;
    name:  string|undefined;
    email: string|undefined;    
    role: string|undefined;    
    SessionexpiredIn: string|undefined; 
    apps: any[]

    constructor(usarFromDB: any){
      this.apps = [];
      this.id = usarFromDB['id'];
      this.name = usarFromDB['name'];
      this.role = usarFromDB['role'];

      usarFromDB.apps.forEach((userXapp: { app: any; role : any; estado: any })  => {


        userXapp.app['role'] = userXapp.role;
        userXapp.app['estado'] = userXapp.estado;

        this.apps.push(userXapp.app);        
      });

    }
  };
  