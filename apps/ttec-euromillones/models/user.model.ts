export class userClass {
  id: number | undefined;
  name: string | undefined;
  email: string | undefined;
  role: string | undefined;
  estado: string | undefined;
  SessionexpiredIn: string | undefined;
  isAdmin: boolean | undefined;
  isGod: boolean | undefined;
  ;

  constructor(usarFromDB: any) {
    this.id = usarFromDB['id'];
    this.name = usarFromDB['name'];
    this.email = usarFromDB['email'];
    
    this.role = usarFromDB['role'];
    this.estado = usarFromDB['estado'];
    
    this.isAdmin =this.setIsAdmin(this.role ? this.role : '');
    this.isGod = this.setIsAdmin(this.role ? this.role : '');
  }
  setIsAdmin(role: string): boolean {
    return role === 'ADMIN' || role === 'GOD';
  }
  setIsGod(role: string): boolean {
    return  role === 'GOD';
  }
};
