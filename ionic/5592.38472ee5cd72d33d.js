"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5592],{5592:(J,p,r)=>{r.r(p),r.d(p,{HomePageModule:()=>H});var a=r(4755),u=r(9401),s=r(7002),d=r(9915),e=r(2504),f=r(7241),g=r(5591),m=r(5861),l=r(8175);function h(n,t){1&n&&e._UZ(0,"ion-spinner",3)}const v=function(n){return{"background-color":n}};function C(n,t){if(1&n&&(e.TgZ(0,"div",4),e._uU(1),e.qZA()),2&n){const i=t.$implicit;e.Q6J("ngStyle",e.VKq(3,v,i.color)),e.xp6(1),e.AsE(" ",i.fecha_p,"-",i.observacion," ")}}let R=(()=>{class n{set refreshResumen(i){this.seguridadService.UserGet()&&this.loadList()}constructor(i,o){this.myHttpService=i,this.seguridadService=o,this.lstAgenda=[],this.isLoading=!1}loadList(){var i=this;return(0,m.Z)(function*(){let o=new l.a("get","gestion-casa","agenda","getResumen");i.isLoading=!0,i.lstAgenda=[];const c=yield i.myHttpService.ejecuteURL(o);i.isLoading=!1,c&&(i.lstAgenda=c,i.isLoading=!1)})()}ngOnInit(){return(0,m.Z)(function*(){})()}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(l.y),e.Y36(g.F))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-resumen-agenda"]],inputs:{refreshResumen:"refreshResumen"},decls:7,vars:2,consts:[[1,"container"],["name","dots",4,"ngIf"],["class","item",3,"ngStyle",4,"ngFor","ngForOf"],["name","dots"],[1,"item",3,"ngStyle"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div"),e._uU(2,"Agenda"),e.qZA(),e.YNc(3,h,1,0,"ion-spinner",1),e.YNc(4,C,2,5,"div",2),e.TgZ(5,"div"),e._uU(6,"..."),e.qZA()()),2&i&&(e.xp6(3),e.Q6J("ngIf",o.isLoading),e.xp6(1),e.Q6J("ngForOf",o.lstAgenda))},dependencies:[a.sg,a.O5,a.PC,s.PQ],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:start;padding:2px}.item[_ngcontent-%COMP%]{border:solid 1px;padding:5px;margin:5px;border-radius:5px;font-size:12px;font-family:Cambria,Cochin,Georgia,Times,Times New Roman,serif}"]}),n})();function Z(n,t){1&n&&e._UZ(0,"ion-spinner",4)}function x(n,t){if(1&n&&(e.TgZ(0,"div",5),e._uU(1),e.qZA()),2&n){const i=t.$implicit;e.xp6(1),e.hij(" ",i.descripcion," ")}}function T(n,t){1&n&&(e.TgZ(0,"div"),e._uU(1,"..."),e.qZA())}let A=(()=>{class n{set refreshResumen(i){this.seguridadService.UserGet()&&this.loadList()}constructor(i,o){this.myHttpService=i,this.seguridadService=o,this.lstCompras=[],this.isLoading=!1,this.Total=0}loadList(){var i=this;return(0,m.Z)(function*(){let o=new l.a("get","gestion-casa","lista-compra");i.isLoading=!0,i.lstCompras=[];const c=yield i.myHttpService.ejecuteURL(o);i.isLoading=!1,c&&(i.Total=c.length,i.lstCompras=c.slice(0,3),i.isLoading=!1)})()}ngOnInit(){return(0,m.Z)(function*(){})()}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(l.y),e.Y36(g.F))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-resumen-compra"]],inputs:{refreshResumen:"refreshResumen"},decls:8,vars:4,consts:[[1,"container"],["name","dots",4,"ngIf"],["class","item",4,"ngFor","ngForOf"],[4,"ngIf"],["name","dots"],[1,"item"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div"),e._uU(2,"Compras "),e.TgZ(3,"sup"),e._uU(4),e.qZA()(),e.YNc(5,Z,1,0,"ion-spinner",1),e.YNc(6,x,2,1,"div",2),e.YNc(7,T,2,0,"div",3),e.qZA()),2&i&&(e.xp6(4),e.Oqu(o.Total),e.xp6(1),e.Q6J("ngIf",o.isLoading),e.xp6(1),e.Q6J("ngForOf",o.lstCompras),e.xp6(1),e.Q6J("ngIf",o.Total>3))},dependencies:[a.sg,a.O5,s.PQ],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:start;padding:2px}.item[_ngcontent-%COMP%]{border:solid 1px;padding:5px;margin:5px;background-color:#f8aeae;border-radius:5px}"]}),n})();function y(n,t){1&n&&(e.TgZ(0,"ion-grid")(1,"ion-row")(2,"ion-col",2)(3,"ion-card",3)(4,"ion-card-header")(5,"ion-card-title"),e._uU(6,"CONECTAR"),e.qZA(),e.TgZ(7,"ion-card-subtitle"),e._uU(8,"Conectate a la aplicaci\xf3n"),e.qZA()()()()(),e.TgZ(9,"ion-row")(10,"ion-col",2)(11,"ion-card",4)(12,"ion-card-header")(13,"ion-card-title"),e._uU(14,"REGISTRO"),e.qZA(),e.TgZ(15,"ion-card-subtitle"),e._uU(16,"registrate en la aplicaci\xf3n"),e.qZA()()()()()()),2&n&&(e.xp6(3),e.Q6J("routerLink","/gestion-casa/login"))}function S(n,t){if(1&n&&(e.TgZ(0,"ion-grid",5)(1,"ion-row")(2,"ion-col",6),e._UZ(3,"app-resumen-compra",7),e.qZA(),e.TgZ(4,"ion-col",8),e._UZ(5,"app-resumen-agenda",7),e.qZA()(),e.TgZ(6,"ion-row")(7,"ion-col",9)(8,"ion-chip",10),e._uU(9,"Servicios"),e.qZA()(),e.TgZ(10,"ion-col",9)(11,"ion-chip",10),e._uU(12,"Gastos"),e.qZA()()()()),2&n){const i=e.oxw();e.Q6J("fixed",!0),e.xp6(2),e.Q6J("routerLink","/gestion-casa/lista-compra"),e.xp6(1),e.Q6J("refreshResumen",i.refreshResumen),e.xp6(1),e.Q6J("routerLink","/gestion-casa/agenda"),e.xp6(1),e.Q6J("refreshResumen",i.refreshResumen),e.xp6(2),e.Q6J("routerLink","/gestion-casa/servicios"),e.xp6(1),e.Q6J("outline",!0),e.xp6(2),e.Q6J("routerLink","/gestion-casa/gastos"),e.xp6(1),e.Q6J("outline",!0)}}const L=[{path:"",component:(()=>{class n{constructor(i,o){this.utilService=i,this.seguridadService=o,this.refreshResumen=!1,this.seguridadService.subjectUser.subscribe(c=>{this.user=c,this.menuItems=this.utilService.MenuRefresh(),this.refreshResumen=null!=this.user})}ngOnInit(){this.seguridadService.AppGuardar("gestion-casa"),this.user=this.seguridadService.UserGet(),this.menuItems=this.utilService.MenuRefresh(),this.refreshResumen=!1}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(f.f),e.Y36(g.F))},n.\u0275cmp=e.Xpm({type:n,selectors:[["home-gestion-casa"]],decls:2,vars:2,consts:[[4,"ngIf"],[3,"fixed",4,"ngIf"],[1,"ion-align-self-start"],[2,"background-color","rgb(158, 238, 158)","color","white","cursor","pointer",3,"routerLink"],[2,"background-color","bisque","color","white","cursor","pointer"],[3,"fixed"],["size","4",1,"hand",3,"routerLink"],[3,"refreshResumen"],["size","8",1,"hand",3,"routerLink"],[1,"hand",3,"routerLink"],[3,"outline"]],template:function(i,o){1&i&&(e.YNc(0,y,17,1,"ion-grid",0),e.YNc(1,S,13,9,"ion-grid",1)),2&i&&(e.Q6J("ngIf",!o.user),e.xp6(1),e.Q6J("ngIf",o.user))},dependencies:[a.O5,s.PM,s.Zi,s.tO,s.Dq,s.hM,s.wI,s.jY,s.Nd,s.YI,d.rH,R,A]}),n})()}];let P=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(L),d.Bz]}),n})(),U=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[a.ez,s.Pc,u.u5,u.UX,d.Bz,u.u5]}),n})(),H=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[a.ez,u.u5,s.Pc,P,U]}),n})()}}]);