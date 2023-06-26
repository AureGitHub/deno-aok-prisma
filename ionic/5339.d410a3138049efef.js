"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5339],{5339:(D,g,i)=>{i.r(g),i.d(g,{EmpleadasPageModule:()=>w});var u=i(4755),v=i(9401),c=i(7002),m=i(9915),r=i(5861),y=i(1699),p=i(8175),t=i(2504);let E=(()=>{class n{constructor(e){this.myHttpService=e,this.app="",this.isLoading=!1,this.entityName=""}ngOnInitBase(){var e=this;return(0,r.Z)(function*(){e.loadList()})()}loadList(){var e=this;return(0,r.Z)(function*(){const a=new p.a("get",e.app,e.entityName);e.isLoading=!0,e.lstPrincipal=[],e.lstPrincipal=yield e.myHttpService.ejecuteURL(a),e.isLoading=!1})()}addToolEntity(){this.entitySelected={},this.entityDescripcion=y.Z.giveMeEntity(this.entityName)}cancelToolEntity(){this.entityDescripcion=null}selectItem(e){this.entitySelected=e,this.entityDescripcion=y.Z.giveMeEntity(this.entityName)}save(e){var a=this;return(0,r.Z)(function*(){a.isSaving=!0;const s=e.id?"put":"post",l=e.id?e.id.toString():null,d=new p.a(s,a.app,a.entityName,null,e,l);yield a.myHttpService.ejecuteURL(d),a.entityDescripcion=null,a.isSaving=!1,a.loadList()})()}borrar(e){var a=this;return(0,r.Z)(function*(){a.isDeleting=!0;const l=e.id.toString(),d=new p.a("delete",a.app,a.entityName,null,null,l);yield a.myHttpService.ejecuteURL(d),a.entityDescripcion=null,a.isDeleting=!1,a.loadList()})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,a){},encapsulation:2}),n})(),P=(()=>{class n extends E{constructor(e){super(e),this.myHttpService=e,this.app="gestion-casa"}ngOnInitAppBase(){var e=this;return(0,r.Z)(function*(){yield e.ngOnInitBase()})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],features:[t.qOj],decls:0,vars:0,template:function(e,a){},encapsulation:2}),n})();var _=i(6014),h=i(3380);function T(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"app-editor-entity",4),t.NdJ("saveEvent",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.save(s))})("deleteEvent",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.borrar(s))})("cancelEvent",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.cancelToolEntity())}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("entity",e.entitySelected)("setEntity",e.entityDescripcion)("isSaving",e.isSaving)("isDeleting",e.isDeleting)}}function B(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"ion-row",5),t.NdJ("click",function(){const l=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.selectItem(l))}),t.TgZ(1,"ion-col"),t._uU(2),t.qZA(),t.TgZ(3,"ion-col"),t._uU(4),t.qZA()()}if(2&n){const e=o.$implicit;t.xp6(2),t.Oqu(e.nombre),t.xp6(2),t.Oqu(e.baja?"Si":"No")}}let M=(()=>{class n extends P{constructor(e){super(e),this.myHttpService=e,this.entityName="empleada"}ngOnInit(){var e=this;return(0,r.Z)(function*(){yield e.ngOnInitBase()})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-empleadas"]],features:[t.qOj],decls:13,vars:4,consts:[[3,"isLoading","entityDescripcion","addToolEntity","cancelToolEntity"],[4,"ngIf"],[1,"tableTitle"],["class","tableRow",3,"click",4,"ngFor","ngForOf"],[3,"entity","setEntity","isSaving","isDeleting","saveEvent","deleteEvent","cancelEvent"],[1,"tableRow",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"app-tool-entity",0),t.NdJ("addToolEntity",function(){return a.addToolEntity()})("cancelToolEntity",function(){return a.cancelToolEntity()}),t.qZA(),t.YNc(1,T,2,4,"div",1),t.TgZ(2,"ion-card")(3,"ion-card-title"),t._uU(4,"Empleadas"),t.qZA(),t.TgZ(5,"ion-card-content")(6,"ion-grid")(7,"ion-row",2)(8,"ion-col"),t._uU(9,"Nombre"),t.qZA(),t.TgZ(10,"ion-col"),t._uU(11,"Baja"),t.qZA()(),t.YNc(12,B,5,2,"ion-row",3),t.qZA()()()),2&e&&(t.Q6J("isLoading",a.isLoading)("entityDescripcion",a.entityDescripcion),t.xp6(1),t.Q6J("ngIf",a.entityDescripcion),t.xp6(11),t.Q6J("ngForOf",a.lstPrincipal))},dependencies:[u.sg,u.O5,c.PM,c.FN,c.Dq,c.wI,c.jY,c.Nd,_.G,h.d],styles:[".tableTitle[_ngcontent-%COMP%]{text-align:center;color:#fff;background-color:#444242;font-weight:700;font-size:14px}.tableRow[_ngcontent-%COMP%]{text-align:center;font-size:13px;border:1px solid;cursor:pointer}.tableRowSeleded[_ngcontent-%COMP%]{text-align:center;color:#fff;background-color:#00008b;cursor:pointer}.tableRow[_ngcontent-%COMP%]:hover{color:#fff;background-color:#00008b}"]}),n})(),Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})(),f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[Z]}),n})();const x=[{path:"",component:M}];let C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.Bz.forChild(x),f,m.Bz]}),n})();var S=i(7147);let w=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,v.u5,c.Pc,C,S.q,f]}),n})()}}]);