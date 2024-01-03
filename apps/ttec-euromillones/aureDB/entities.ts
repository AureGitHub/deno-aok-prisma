// import { Validators } from "@angular/forms";
import { Validators } from "../enums.ts";

/*
  tipoid               Int
*/

const entities = {

   Apuesta : 
   [
      { name: 'fecha', type: 'date', title: 'fecha', validators: [Validators.required] },         
      { name: 'apostado', type: 'number', title: 'Apostado', validators: [Validators.required], default: 0, disabled : true },
      { name: 'ganado', type: 'number', title: 'Ganado', validators: [Validators.required] , default: 0, disabled : true},
      { name: 'estadoid', type: 'select', title: 'Estado', validators: [Validators.required], multiple: false, coleccion: 'ApuestaXEstado', id: 'id', desc: 'descripcion', default: 1, disabled : true },
      { name: 'createdAt', type: 'date', title: 'createdAt', validators: [Validators.required] },         


   ],

   UserXMovimiento : 
   [
      { name: 'fecha', type: 'date', title: 'fecha', validators: [Validators.required] },         
      { name: 'importe', type: 'number', title: 'Importe', validators: [Validators.required] },
      { name: 'userid', type: 'select', title: 'Usuario', validators: [Validators.required], multiple: false, noTC : true,  coleccion: 'user', id: 'id', desc: 'name', disabled : true, filterInit: ' "estadoid" <> 2' },
      { name: 'tipoid', type: 'select', title: 'Estado', validators: [Validators.required], multiple: false, coleccion: 'UserXMovimientoXTipo', id: 'id', desc: 'descripcion', default: 1, disabled : true },
      { name: 'createdAt', type: 'date', title: 'createdAt', validators: [Validators.required] },         
    

      
   ],


   User:
      [
         { name: 'name', type: 'text', title: 'Nombre', validators: [Validators.required] },
         { name: 'email', type: 'text', title: 'Email', validators: [Validators.required, Validators.email] },
         { name: 'password', type: 'password', title: 'Password', validators: [Validators.required] , default : '12345678'},
         { name: 'saldo', type: 'number', title: 'Saldo', validators: [Validators.required] },
         { name: 'estadoid', type: 'select', title: 'Estado', validators: [Validators.required], multiple: false, coleccion: 'UserXEstado', id: 'id', desc: 'descripcion', default: 3 },
         { name: 'roleid', type: 'select', title: 'Role', validators: [Validators.required], multiple: false, coleccion: 'UserXRole', id: 'id', desc: 'descripcion', default: 3  },
         { name: 'createdAt', type: 'date', title: 'createdAt', validators: [Validators.required] },         
         { name: 'updatedAt', type: 'date', title: 'updatedAt', validators: [Validators.required] },         


      ],

     

      userxbizum : 
      [
         { name: 'importe', type: 'number', title: 'Importe', validators: [Validators.required] },
         { name: 'estadoid', type: 'select', title: 'Estado', validators: [Validators.required], multiple: false, coleccion: 'UserXBizumXEstado', id: 'id', desc: 'descripcion', default: 1, disabled : true },
         { name: 'userid', type: 'select', title: 'Usuario', validators: [Validators.required], multiple: false, noTC : true,  coleccion: 'user', id: 'id', desc: 'name', disabled : true, filterInit: ' "estadoid" <> 2' },

      ],

      UserXEstado : 
      [
         { name: 'descripcion', type: 'text', title: 'descripcion', validators: [Validators.required] },


      ],
      UserXRole: 
      [
         { name: 'descripcion', type: 'text', title: 'descripcion', validators: [Validators.required] },


      ],
      ApuestaXEstado: 
      [
         { name: 'descripcion', type: 'text', title: 'descripcion', validators: [Validators.required] },


      ],

      

};

export default entities;