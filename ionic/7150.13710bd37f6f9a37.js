"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7150],{7150:(b,v,c)=>{c.r(v),c.d(v,{ServiciosPageModule:()=>C});var d=c(4755),p=c(9401),r=c(7002),_=c(9915),u=c(5861),f=c(1699),g=c(8175),e=c(2504),m=c(7241),h=c(6014),y=c(3380);function S(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"app-editor-entity",9),e.NdJ("saveEvent",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.save(i))})("deleteEvent",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.borrar(i))})("cancelEvent",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.cancelToolEntity())}),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("entity",t.entitySelected)("setEntity",t.entityDescripcion)("isSaving",t.isSaving)("isDeleting",t.isDeleting)("isAlta",t.isAlta)}}function Z(n,s){1&n&&e._UZ(0,"ion-icon",12)}function T(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"ion-row",10),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.selectItem(a))}),e.TgZ(1,"ion-col"),e._uU(2),e.qZA(),e.TgZ(3,"ion-col"),e._uU(4),e.qZA(),e.TgZ(5,"ion-col"),e.YNc(6,Z,1,0,"ion-icon",11),e.qZA(),e.TgZ(7,"ion-col"),e._uU(8),e.qZA(),e.TgZ(9,"ion-col"),e._uU(10),e.qZA()()}if(2&n){const t=s.$implicit;e.Q6J("ngClass",t.pagado?"tableRow_pagado":"tableRow"),e.xp6(2),e.lnq(" ",t.fecha," ",t.horainicio,"-",t.horafin," "),e.xp6(2),e.Oqu(t.nombreempleada),e.xp6(2),e.Q6J("ngIf",t.suplLevantar),e.xp6(2),e.Oqu(t.horas),e.xp6(2),e.AsE("",t.euros,".",t.supllevantar,"")}}function P(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"ion-row",13)(1,"ion-col"),e._uU(2),e.qZA(),e.TgZ(3,"ion-col"),e._uU(4),e.qZA(),e.TgZ(5,"ion-col"),e._uU(6),e.qZA(),e.TgZ(7,"ion-col")(8,"ion-chip",14),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.selectItemResumen(a))}),e._uU(9,"Pagar"),e.qZA()()()}if(2&n){const t=s.$implicit;e.xp6(2),e.Oqu(t.nombreempleada),e.xp6(2),e.Oqu(t.horas),e.xp6(2),e.Oqu(t.euros)}}const A=[{path:"",component:(()=>{class n{constructor(t,o,i){this.myHttpService=t,this.utilService=o,this.alertController=i,this.isLoading=!1,this.entityName="servicio",this.busquedaPagado="n"}ngOnInit(){var t=this;return(0,u.Z)(function*(){t.loadList(t.busquedaPagado)})()}handleChangeBusquedaPagado(t){this.loadList(this.busquedaPagado)}loadList(t=null){var o=this;return(0,u.Z)(function*(){let i="";t&&(i+=`pagado=${o.busquedaPagado}`);let a=new g.a("get","gestion-casa","servicios","getPresent",null,null,i);o.isLoading=!0,o.lstServicios=[],o.lstServicios=yield o.myHttpService.ejecuteURL(a),a=new g.a("get","gestion-casa","servicios","getResumenNoPagado"),o.lstResumenServicios=[],o.lstResumenServicios=yield o.myHttpService.ejecuteURL(a),o.isLoading=!1})()}addToolEntity(){const t=this.utilService.toISOString(new Date);let o=new Date;o.setHours(10),o.setMinutes(0);let i=new Date;i.setHours(13),i.setMinutes(0);const a=this.utilService.toISOString(o),l=this.utilService.toISOString(i);this.entitySelected={fecha:t,horaInicio:a,horaFin:l},this.entityDescripcion=f.Z.giveMeEntity(this.entityName)}cancelToolEntity(){this.entityDescripcion=null}selectItem(t){var o=this;return(0,u.Z)(function*(){const i=new g.a("get","gestion-casa","servicios",null,null,t.id);o.entitySelected=yield o.myHttpService.ejecuteURL(i),o.entityDescripcion=f.Z.giveMeEntity(o.entityName)})()}selectItemResumen(t){var o=this;return(0,u.Z)(function*(){var a;yield(yield o.alertController.create({header:`Antenci\xf3n!! Todos los servicios de ${t.nombreempleada} van a pasar a PAGADOS. \xbfContinuar?`,buttons:[{text:"Cancelar",role:"cancel",handler:()=>{}},{text:"OK",role:"confirm",handler:(a=(0,u.Z)(function*(){let l=new g.a("put","gestion-casa","servicios","upServPagado",{pagado:!0},t.empleadaid,null);yield o.myHttpService.ejecuteURL(l),o.loadList(o.busquedaPagado)}),function(){return a.apply(this,arguments)})}]})).present()})()}save(t){var o=this;return(0,u.Z)(function*(){o.isSaving=!0;const i=t.id?"put":"post",a=t.id?t.id.toString():null,l=new g.a(i,"gestion-casa","servicios",null,t,a);yield o.myHttpService.ejecuteURL(l),o.entityDescripcion=null,o.isSaving=!1,o.loadList(o.busquedaPagado)})()}borrar(t){var o=this;return(0,u.Z)(function*(){o.isDeleting=!0;const a=t.id.toString(),l=new g.a("delete","gestion-casa","servicios",null,null,a);yield o.myHttpService.ejecuteURL(l),o.entityDescripcion=null,o.isDeleting=!1,o.loadList(o.busquedaPagado)})()}cancel(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.y),e.Y36(m.f),e.Y36(r.Br))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-servicios"]],decls:42,vars:6,consts:[[3,"isLoading","entityDescripcion","addToolEntity","cancelToolEntity"],[4,"ngIf"],["aria-label","Fruit","interface","popover",3,"ngModel","ngModelChange","ionChange"],["value","n"],["value","s"],["value","t"],[1,"tableTitle"],[3,"ngClass","click",4,"ngFor","ngForOf"],["style","text-align: center;",4,"ngFor","ngForOf"],[3,"entity","setEntity","isSaving","isDeleting","isAlta","saveEvent","deleteEvent","cancelEvent"],[3,"ngClass","click"],["name","checkmark-outline",4,"ngIf"],["name","checkmark-outline"],[2,"text-align","center"],["color","danger",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"app-tool-entity",0),e.NdJ("addToolEntity",function(){return o.addToolEntity()})("cancelToolEntity",function(){return o.cancelToolEntity()}),e.qZA(),e.YNc(1,S,2,5,"div",1),e.TgZ(2,"ion-card")(3,"ion-card-title"),e._uU(4,"Servicios "),e.TgZ(5,"ion-select",2),e.NdJ("ngModelChange",function(a){return o.busquedaPagado=a})("ionChange",function(a){return o.handleChangeBusquedaPagado(a)}),e.TgZ(6,"ion-select-option",3),e._uU(7,"No pagados"),e.qZA(),e.TgZ(8,"ion-select-option",4),e._uU(9,"Pagados"),e.qZA(),e.TgZ(10,"ion-select-option",5),e._uU(11,"Todos"),e.qZA()()(),e._UZ(12,"ion-card-subtitle"),e.TgZ(13,"ion-card-content")(14,"ion-grid")(15,"ion-row",6)(16,"ion-col"),e._uU(17,"fecha"),e.qZA(),e.TgZ(18,"ion-col"),e._uU(19,"Nombre"),e.qZA(),e.TgZ(20,"ion-col"),e._uU(21,"Lev"),e.qZA(),e.TgZ(22,"ion-col"),e._uU(23,"horas"),e.qZA(),e.TgZ(24,"ion-col"),e._uU(25,"euros"),e.qZA()(),e.YNc(26,T,11,9,"ion-row",7),e.qZA()()(),e.TgZ(27,"ion-card")(28,"ion-card-title"),e._uU(29,"Resumen Pagos"),e.qZA(),e.TgZ(30,"ion-card-content")(31,"ion-grid")(32,"ion-row",6)(33,"ion-col"),e._uU(34,"nombre"),e.qZA(),e.TgZ(35,"ion-col"),e._uU(36,"horas"),e.qZA(),e.TgZ(37,"ion-col"),e._uU(38,"Euros"),e.qZA(),e.TgZ(39,"ion-col"),e._uU(40,"Acci\xf3n"),e.qZA()(),e.YNc(41,P,10,3,"ion-row",8),e.qZA()()()),2&t&&(e.Q6J("isLoading",o.isLoading)("entityDescripcion",o.entityDescripcion),e.xp6(1),e.Q6J("ngIf",o.entityDescripcion),e.xp6(4),e.Q6J("ngModel",o.busquedaPagado),e.xp6(21),e.Q6J("ngForOf",o.lstServicios),e.xp6(15),e.Q6J("ngForOf",o.lstResumenServicios))},dependencies:[d.mk,d.sg,d.O5,p.JJ,p.On,r.PM,r.FN,r.tO,r.Dq,r.hM,r.wI,r.jY,r.gu,r.Nd,r.t9,r.n0,r.QI,h.G,y.d],styles:[".tableTitle[_ngcontent-%COMP%]{text-align:center;color:#fff;background-color:#444242;font-weight:700;font-size:14px}.tableRow[_ngcontent-%COMP%]{text-align:center;font-size:13px;border:1px solid;cursor:pointer;background-color:#fff}.tableRow_pagado[_ngcontent-%COMP%]{background-color:#cff7cf;text-align:center;font-size:13px;border:1px solid;cursor:pointer}.tableRowSeleded[_ngcontent-%COMP%]{text-align:center;color:#fff;background-color:#00008b;cursor:pointer}.tableRow[_ngcontent-%COMP%]:hover{color:#fff;background-color:#00008b}"]}),n})()}];let x=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[_.Bz.forChild(A),_.Bz]}),n})();var q=c(7147);let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,p.u5,r.Pc,x,q.q]}),n})()}}]);