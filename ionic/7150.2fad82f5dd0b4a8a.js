"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7150],{7150:(C,v,a)=>{a.r(v),a.d(v,{ServiciosPageModule:()=>b});var d=a(4755),p=a(9401),r=a(7002),_=a(9915),g=a(5861),m=a(1699),u=a(8175),e=a(2504),f=a(7241),Z=a(6014);function S(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"ion-button",10),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.add())}),e._UZ(1,"ion-icon",11),e.qZA()}}function h(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"ion-button",12),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.entityDescripcion=null)}),e._UZ(1,"ion-icon",13),e.qZA()}}function y(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"app-editor-entity",14),e.NdJ("saveEvent",function(n){e.CHM(t);const c=e.oxw();return e.KtG(c.save(n))})("deleteEvent",function(n){e.CHM(t);const c=e.oxw();return e.KtG(c.borrar(n))}),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("entity",t.entitySelected)("setEntity",t.entityDescripcion)("isSaving",t.isSaving)("isDeleting",t.isDeleting)}}function T(i,s){1&i&&(e.TgZ(0,"ion-row")(1,"ion-col"),e._UZ(2,"ion-spinner",15),e.qZA()())}function P(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"ion-row",16),e.NdJ("click",function(){const c=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.selectItem(c))}),e.TgZ(1,"ion-col"),e._uU(2),e.qZA(),e.TgZ(3,"ion-col"),e._uU(4),e.qZA(),e.TgZ(5,"ion-col"),e._uU(6),e.qZA(),e.TgZ(7,"ion-col"),e._uU(8),e.qZA(),e.TgZ(9,"ion-col"),e._uU(10),e.qZA()()}if(2&i){const t=s.$implicit,o=e.oxw();e.Q6J("ngClass",o.entitySelected&&t.id===o.entitySelected.id?"tableRowSeleded":"tableRow"),e.xp6(2),e.lnq(" ",t.fecha," ",t.horainicio,"-",t.horafin," "),e.xp6(2),e.Oqu(t.nombreempleada),e.xp6(2),e.Oqu(t.supllevantar),e.xp6(2),e.Oqu(t.pagado),e.xp6(2),e.AsE("",t.horas,"/",t.euros,"")}}function x(i,s){1&i&&(e.TgZ(0,"ion-row")(1,"ion-col"),e._UZ(2,"ion-spinner",15),e.qZA()())}function w(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"ion-row",17),e.NdJ("click",function(){const c=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.selectItemResumen(c))}),e.TgZ(1,"ion-col"),e._uU(2),e.qZA(),e.TgZ(3,"ion-col"),e._uU(4),e.qZA(),e.TgZ(5,"ion-col"),e._uU(6),e.qZA(),e.TgZ(7,"ion-col")(8,"ion-button",18),e._uU(9,"Pagado"),e.qZA()()()}if(2&i){const t=s.$implicit;e.xp6(2),e.Oqu(t.nombreempleada),e.xp6(2),e.Oqu(t.horas),e.xp6(2),e.Oqu(t.euros)}}const q=[{path:"",component:(()=>{class i{constructor(t,o){this.myHttpService=t,this.utilService=o,this.isLoading=!1,this.entityName="servicio",this.busquedaPagado="n"}ngOnInit(){var t=this;return(0,g.Z)(function*(){t.loadList()})()}handleChangeBusquedaPagado(t){this.loadList(this.busquedaPagado)}loadList(t=null){var o=this;return(0,g.Z)(function*(){let n="";t&&(n+=`pagado=${o.busquedaPagado}`);let c=new u.a("get","gestion-casa","servicios","getPresent",null,null,n);o.isLoading=!0,o.lstServicios=[],o.lstServicios=yield o.myHttpService.ejecuteURL(c),c=new u.a("get","gestion-casa","servicios","getResumenNoPagado"),o.lstResumenServicios=[],o.lstResumenServicios=yield o.myHttpService.ejecuteURL(c),o.isLoading=!1})()}add(){const t=this.utilService.toISOString(new Date);let o=new Date;o.setHours(10),o.setMinutes(0);let n=new Date;n.setHours(13),n.setMinutes(0);const c=this.utilService.toISOString(o),l=this.utilService.toISOString(n);this.entitySelected={fecha:t,horaInicio:c,horaFin:l},this.entityDescripcion=m.Z.giveMeEntity(this.entityName)}selectItem(t){var o=this;return(0,g.Z)(function*(){const n=new u.a("get","gestion-casa","servicios",null,null,t.id);o.entitySelected=yield o.myHttpService.ejecuteURL(n),o.entityDescripcion=m.Z.giveMeEntity(o.entityName)})()}selectItemResumen(t){}save(t){var o=this;return(0,g.Z)(function*(){o.isSaving=!0;const n=t.id?"put":"post",c=t.id?t.id.toString():null,l=new u.a(n,"gestion-casa","servicios",null,t,c);yield o.myHttpService.ejecuteURL(l),o.entityDescripcion=null,o.isSaving=!1,o.loadList()})()}borrar(t){var o=this;return(0,g.Z)(function*(){o.isDeleting=!0;const c=t.id.toString(),l=new u.a("delete","gestion-casa","servicios",null,null,c);yield o.myHttpService.ejecuteURL(l),o.entityDescripcion=null,o.isDeleting=!1,o.loadList()})()}cancel(){}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(u.y),e.Y36(f.f))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-servicios"]],decls:45,vars:8,consts:[["color","primary",3,"click",4,"ngIf"],["color","danger",3,"click",4,"ngIf"],[4,"ngIf"],["aria-label","Fruit","interface","popover",3,"ngModel","ngModelChange","ionChange"],["value","n"],["value","s"],["value","t"],[1,"tableTitle"],[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"click",4,"ngFor","ngForOf"],["color","primary",3,"click"],["slot","icon-only","name","add-outline"],["color","danger",3,"click"],["slot","icon-only","name","arrow-back-outline"],[3,"entity","setEntity","isSaving","isDeleting","saveEvent","deleteEvent"],["name","dots"],[3,"ngClass","click"],[3,"click"],["color","danger"]],template:function(t,o){1&t&&(e.YNc(0,S,2,0,"ion-button",0),e.YNc(1,h,2,0,"ion-button",1),e.YNc(2,y,2,4,"div",2),e.TgZ(3,"ion-card")(4,"ion-card-title"),e._uU(5,"Servicios "),e.TgZ(6,"ion-select",3),e.NdJ("ngModelChange",function(c){return o.busquedaPagado=c})("ionChange",function(c){return o.handleChangeBusquedaPagado(c)}),e.TgZ(7,"ion-select-option",4),e._uU(8,"No pagados"),e.qZA(),e.TgZ(9,"ion-select-option",5),e._uU(10,"Pagados"),e.qZA(),e.TgZ(11,"ion-select-option",6),e._uU(12,"Todos"),e.qZA()()(),e._UZ(13,"ion-card-subtitle"),e.TgZ(14,"ion-card-content")(15,"ion-grid")(16,"ion-row",7)(17,"ion-col"),e._uU(18,"fecha"),e.qZA(),e.TgZ(19,"ion-col"),e._uU(20,"Nombre"),e.qZA(),e.TgZ(21,"ion-col"),e._uU(22,"Lev"),e.qZA(),e.TgZ(23,"ion-col"),e._uU(24,"pagado"),e.qZA(),e.TgZ(25,"ion-col"),e._uU(26,"euros"),e.qZA()(),e.YNc(27,T,3,0,"ion-row",2),e.YNc(28,P,11,9,"ion-row",8),e.qZA()()(),e.TgZ(29,"ion-card")(30,"ion-card-title"),e._uU(31,"Resumen Pagos"),e.qZA(),e.TgZ(32,"ion-card-content")(33,"ion-grid")(34,"ion-row",7)(35,"ion-col"),e._uU(36,"nombre"),e.qZA(),e.TgZ(37,"ion-col"),e._uU(38,"horas"),e.qZA(),e.TgZ(39,"ion-col"),e._uU(40,"Euros"),e.qZA(),e.TgZ(41,"ion-col"),e._uU(42,"Acci\xf3n"),e.qZA()(),e.YNc(43,x,3,0,"ion-row",2),e.YNc(44,w,10,3,"ion-row",9),e.qZA()()()),2&t&&(e.Q6J("ngIf",!o.entityDescripcion),e.xp6(1),e.Q6J("ngIf",o.entityDescripcion),e.xp6(1),e.Q6J("ngIf",o.entityDescripcion),e.xp6(4),e.Q6J("ngModel",o.busquedaPagado),e.xp6(21),e.Q6J("ngIf",o.isLoading),e.xp6(1),e.Q6J("ngForOf",o.lstServicios),e.xp6(15),e.Q6J("ngIf",o.isLoading),e.xp6(1),e.Q6J("ngForOf",o.lstResumenServicios))},dependencies:[d.mk,d.sg,d.O5,p.JJ,p.On,r.YG,r.PM,r.FN,r.tO,r.Dq,r.wI,r.jY,r.gu,r.Nd,r.t9,r.n0,r.PQ,r.QI,Z.G],styles:[".tableTitle[_ngcontent-%COMP%]{text-align:center;color:#fff;background-color:#444242;font-weight:700;font-size:14px}.tableRow[_ngcontent-%COMP%]{text-align:center;font-size:13px;border:1px solid;cursor:pointer}.tableRowSeleded[_ngcontent-%COMP%]{text-align:center;color:#fff;background-color:#00008b;cursor:pointer}.tableRow[_ngcontent-%COMP%]:hover{color:#fff;background-color:#00008b}"]}),i})()}];let A=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[_.Bz.forChild(q),_.Bz]}),i})();var U=a(3399);let b=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.ez,p.u5,r.Pc,A,U.q]}),i})()}}]);