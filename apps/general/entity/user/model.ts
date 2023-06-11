export class userClass {
  id: number | undefined;
  name: string | undefined;
  email: string | undefined;
  role: string | undefined;
  estado: string | undefined;
  SessionexpiredIn: string | undefined;
  apps: any[];
  someApp: boolean;
  app: string | undefined;
  appId: number | undefined;
  isAdmin: boolean | undefined;
  isGod: boolean | undefined;
  ;

  constructor(usarFromDB: any) {
    this.apps = [];
    this.id = usarFromDB['id'];
    this.name = usarFromDB['name'];

    this.someApp = usarFromDB.apps.length > 1;


    // no tiene aplicaciones asociadas
    if (usarFromDB.apps.length == 0) {
      this.id = 0;
    }

    //solo tiene una aplicación asiciada
    if (usarFromDB.apps.length == 1) {
      this.role = usarFromDB.apps[0]['role'];
      this.estado = usarFromDB.apps[0]['estado'];
      this.app = usarFromDB.apps[0].app['descripcion'];
      this.appId = usarFromDB.apps[0].app['id'];
      this.isAdmin =this.setIsAdmin(this.role ? this.role : '');
      this.isGod = this.setIsAdmin(this.role ? this.role : '');

    }
    else {
      usarFromDB.apps.forEach((userXapp: { app: any; role: any; estado: any }) => {
        userXapp.app['role'] = userXapp.role;

        userXapp.app['isAdmin'] = this.setIsAdmin(userXapp.app['role']);
        userXapp.app['isGod'] = this.setIsGod(userXapp.app['role']);

        userXapp.app['estado'] = userXapp.estado;
        this.apps.push(userXapp.app);
      });
    }
  }
  setIsAdmin(role: string): boolean {
    return role === 'ADMIN' || role === 'GOD';
  }
  setIsGod(role: string): boolean {
    return  role === 'GOD';
  }
};