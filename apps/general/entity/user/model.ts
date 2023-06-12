export class userClass {
  id: number | undefined;
  name: string | undefined;
  email: string | undefined;
  role: string | undefined;
  estado: string | undefined;
  SessionexpiredIn: string | undefined;
  apps: any[];
  app: string | undefined;
  appId: number | undefined;
  isAdmin: boolean | undefined;
  isGod: boolean | undefined;
  ;

  constructor(usarFromDB: any) {
    this.apps = [];
    this.id = usarFromDB['id'];
    this.name = usarFromDB['name'];


    if (usarFromDB['apps'] && usarFromDB.apps.length == 1) {
      this.role = usarFromDB.apps[0]['role'];
      this.estado = usarFromDB.apps[0]['estado'];
      this.app = usarFromDB.apps[0].app['descripcion'];
      this.appId = usarFromDB.apps[0].app['id'];
      this.isAdmin =this.setIsAdmin(this.role ? this.role : '');
      this.isGod = this.setIsAdmin(this.role ? this.role : '');
    }
  
  }

  setIsAdmin(role: string): boolean {
    return role === 'ADMIN' || role === 'GOD';
  }
  setIsGod(role: string): boolean {
    return  role === 'GOD';
  }
};