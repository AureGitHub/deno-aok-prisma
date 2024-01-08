// import { Validators } from "@angular/forms";
import { Validators } from "../../enums.ts";

/*
  tipoid               Int
*/

const entities = {

   Apuesta : 
   [
      { name: 'fecha', type: 'date', title: 'fecha', validators: [Validators.required] },         
      { name: 'apostado', type: 'number', title: 'Apostado', validators: [Validators.required], default: 0, disabled : true },
      { name: 'ganado', type: 'number', title: 'Ganado', validators: [Validators.required] , default: 0, disabled : true},
      { name: 'estadoid', type: 'select', title: 'Estado', validators: [Validators.required], multiple: false, coleccion: 'TC_ApuestaEstado', id: 'id', desc: 'descripcion', default: 1, disabled : true },
      { name: 'createdAt', type: 'date', title: 'createdAt', validators: [Validators.required], hide : true },         


   ],

   UserXMovimiento : 
   [
      { name: 'fecha', type: 'date', title: 'fecha', validators: [Validators.required] },         
      { name: 'importe', type: 'number', title: 'Importe', validators: [Validators.required] },
      { name: 'beforesaldo', type: 'number', title: 'Importe', validators: [Validators.required] },
      { name: 'actualsaldo', type: 'number', title: 'Importe', validators: [Validators.required] },      
      { name: 'bizumid', type: 'number', title: 'Importe', validators: [Validators.required] },      
      { name: 'userid', type: 'select', title: 'Usuario', validators: [Validators.required], multiple: false, noTC : true,  coleccion: 'user', id: 'id', desc: 'name', disabled : true, filterInit: ' "estadoid" <> 2' },
      { name: 'tipoid', type: 'select', title: 'Estado', validators: [Validators.required], multiple: false, coleccion: 'TC_MovimientoTipo', id: 'id', desc: 'descripcion', default: 1, disabled : true },
      { name: 'apuestaid', type: 'number', title: 'apuestaid', validators: [Validators.required] },      
      { name: 'createdAt', type: 'date', title: 'createdAt', validators: [Validators.required] },         
    

      
   ],


   User:
      [
         { name: 'name', type: 'text', title: 'Nombre', validators: [Validators.required] },
         { name: 'email', type: 'text', title: 'Email', validators: [Validators.required, Validators.email] },
         { name: 'password', type: 'password', title: 'Password', validators: [Validators.required] , default : '12345678'},
         { name: 'saldo', type: 'number', title: 'Saldo', validators: [Validators.required] },
         { name: 'estadoid', type: 'select', title: 'Estado', validators: [Validators.required], multiple: false, coleccion: 'TC_UserEstado', id: 'id', desc: 'descripcion', default: 3 },
         { name: 'roleid', type: 'select', title: 'Role', validators: [Validators.required], multiple: false, coleccion: 'TC_UserRole', id: 'id', desc: 'descripcion', default: 3  },
         { name: 'createdAt', type: 'date', title: 'createdAt', validators: [Validators.required], hide : true },         
         { name: 'updatedAt', type: 'date', title: 'updatedAt', validators: [Validators.required], hide : true },         


      ],

     

      userxbizum : 
      [
         { name: 'importe', type: 'number', title: 'Importe', validators: [Validators.required] },
         { name: 'estadoid', type: 'select', title: 'Estado', validators: [Validators.required], multiple: false, coleccion: 'TC_BizumEstado', id: 'id', desc: 'descripcion', default: 1, disabled : true },
         { name: 'userid', type: 'select', title: 'Usuario', validators: [Validators.required], multiple: false, noTC : true,  coleccion: 'user', id: 'id', desc: 'name', disabled : true, filterInit: ' "estadoid" <> 2' },

      ],

      TC_UserEstado : 
      [
         { name: 'descripcion', type: 'text', title: 'descripcion', validators: [Validators.required] },


      ],
      TC_UserRole: 
      [
         { name: 'descripcion', type: 'text', title: 'descripcion', validators: [Validators.required] },


      ],
      TC_ApuestaEstado: 
      [
         { name: 'descripcion', type: 'text', title: 'descripcion', validators: [Validators.required] },


      ],

      // UserXSaldoXTmp: 
      // [
      //    { name: 'saldo', type: 'number', title: 'Saldo', validators: [Validators.required] },
      //    { name: 'userid', type: 'select', title: 'Usuario', validators: [Validators.required], multiple: false, noTC : true,  coleccion: 'user', id: 'id', desc: 'name', disabled : true, filterInit: ' "estadoid" <> 2' },
      //    { name: 'movimientoid', type: 'number', title: 'Movimientoid', validators: [Validators.required] },
      // ],
      CodeSecure: 
      [
         { name: 'code', type: 'text', title: 'code', validators: [Validators.required] },
         { name: 'type', type: 'number', title: 'type', validators: [Validators.required] },
         { name: 'userid', type: 'select', title: 'Usuario', validators: [Validators.required], multiple: false, noTC : true,  coleccion: 'user', id: 'id', desc: 'name', disabled : true, filterInit: ' "estadoid" <> 2' },
         { name: 'updatedAt', type: 'date', title: 'updatedAt', validators: [Validators.required] },         

      ],

      UserXBizum : [
         { name: 'importe', type: 'number', title: 'importe', validators: [Validators.required] },
         { name: 'userid', type: 'select', title: 'Usuario', validators: [Validators.required], multiple: false, noTC : true,  coleccion: 'user', id: 'id', desc: 'name', disabled : true, filterInit: ' "estadoid" <> 2' },
         { name: 'estadoid', type: 'select', title: 'Estado', validators: [Validators.required], multiple: false, coleccion: 'TC_BizumEstado', id: 'id', desc: 'descripcion', default: 1, disabled : true },
         { name: 'createdAt', type: 'date', title: 'createdAt', validators: [Validators.required] },         

         
      ],
      // BizumXMovimiento : [
      //    { name: 'bizumid', type: 'number', title: 'bizumid', validators: [Validators.required] },
      //    { name: 'movimientoid', type: 'number', title: 'movimientoid', validators: [Validators.required] },

         
      // ],

      UserXApuesta : [
         { name: 'userid', type: 'number', title: 'userid', validators: [Validators.required] },
         { name: 'apuestaid', type: 'number', title: 'apuestaid', validators: [Validators.required] },

         
      ],
      
      TC_BizumEstado :[
         { name: 'descripcion', type: 'text', title: 'descripcion', validators: [Validators.required] },

      ]
};

export default entities;

/*
model BizumXMovimiento {
  id      Int @id @default(autoincrement())
  bizumid Int
  movimientoid    Int
  UserXBizum      UserXBizum      @relation(fields: [bizumid], references: [id])
  UserXMovimiento UserXMovimiento @relation(fields: [movimientoid], references: [id])
}
*/
