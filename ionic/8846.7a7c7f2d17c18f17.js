"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8846],{8846:(w,u,a)=>{a.r(u),a.d(u,{ListaCompraPageModule:()=>M});var m=a(4755),f=a(9401),s=a(7002),g=a(9915),p=a(5861),d=a(8175),C=a(5916),t=a(2504),y=a(6014),v=a(3380);function L(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div")(1,"app-editor-entity",3),t.NdJ("saveEvent",function(i){t.CHM(o);const c=t.oxw();return t.KtG(c.save(i))})("deleteEvent",function(i){t.CHM(o);const c=t.oxw();return t.KtG(c.borrar(i))})("cancelEvent",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.cancelToolEntity())}),t.qZA()()}if(2&e){const o=t.oxw();t.xp6(1),t.Q6J("entity",o.entitySelected)("setEntity",o.entityDescripcion)("isSaving",o.isSaving)("isDeleting",o.isDeleting)}}function T(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"ion-row")(1,"ion-col",4),t.NdJ("click",function(){const c=t.CHM(o).$implicit,l=t.oxw();return t.KtG(l.selectItem(c))}),t._uU(2),t.qZA(),t.TgZ(3,"ion-col",5),t.NdJ("click",function(){const c=t.CHM(o).$implicit,l=t.oxw();return t.KtG(l.delLista(c))}),t._UZ(4,"ion-icon",6),t.qZA()()}if(2&e){const o=r.$implicit;t.xp6(2),t.Oqu(o.descripcion)}}function x(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"ion-row")(1,"ion-col",7),t.NdJ("click",function(){const c=t.CHM(o).$implicit,l=t.oxw();return t.KtG(l.selectItem(c))}),t._uU(2),t.qZA(),t.TgZ(3,"ion-col",4),t.NdJ("click",function(){const c=t.CHM(o).$implicit,l=t.oxw();return t.KtG(l.addLista(c))}),t._UZ(4,"ion-icon",8),t.qZA()()}if(2&e){const o=r.$implicit;t.xp6(2),t.Oqu(o.descripcion)}}let P=(()=>{class e extends C.t{constructor(o){super(o),this.myHttpService=o,this.lstListaCompra=[],this.entityName="producto"}ngOnInit(){var o=this;return(0,p.Z)(function*(){yield o.ngOnInitBase()})()}ownloadList(){var o=this;return(0,p.Z)(function*(){const n=new d.a("get",o.app,"lista-compra");o.lstListaCompra=[],o.lstListaCompra=yield o.myHttpService.ejecuteURL(n)})()}addLista(o){var n=this;return(0,p.Z)(function*(){n.isLoading=!0;const i=new d.a("post",n.app,"lista-compra",null,{productoId:o.id},null);yield n.myHttpService.ejecuteURL(i),n.loadList()})()}delLista(o){var n=this;return(0,p.Z)(function*(){n.isLoading=!0;const i=new d.a("delete",n.app,"lista-compra",null,null,o.productoId);yield n.myHttpService.ejecuteURL(i),n.loadList()})()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-lista-compra"]],features:[t.qOj],decls:14,vars:5,consts:[[3,"isLoading","entityDescripcion","addToolEntity","cancelToolEntity"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"entity","setEntity","isSaving","isDeleting","saveEvent","deleteEvent","cancelEvent"],[3,"click"],[1,"hand",3,"click"],["color","danger","name","remove-circle-outline",2,"font-size","30px"],[1,"tableRow",3,"click"],["color","primary","name","add-circle-outline",1,"hand",2,"font-size","30px"]],template:function(o,n){1&o&&(t.TgZ(0,"app-tool-entity",0),t.NdJ("addToolEntity",function(){return n.addToolEntity()})("cancelToolEntity",function(){return n.cancelToolEntity()}),t.qZA(),t.YNc(1,L,2,4,"div",1),t.TgZ(2,"ion-card")(3,"ion-card-title"),t._uU(4,"Lista"),t.qZA(),t.TgZ(5,"ion-card-content")(6,"ion-grid"),t.YNc(7,T,5,1,"ion-row",2),t.qZA()()(),t.TgZ(8,"ion-card")(9,"ion-card-title"),t._uU(10,"Productos"),t.qZA(),t.TgZ(11,"ion-card-content")(12,"ion-grid"),t.YNc(13,x,5,1,"ion-row",2),t.qZA()()()),2&o&&(t.Q6J("isLoading",n.isLoading)("entityDescripcion",n.entityDescripcion),t.xp6(1),t.Q6J("ngIf",n.entityDescripcion),t.xp6(6),t.Q6J("ngForOf",n.lstListaCompra),t.xp6(6),t.Q6J("ngForOf",n.lstPrincipal))},dependencies:[m.sg,m.O5,s.PM,s.FN,s.Dq,s.wI,s.jY,s.gu,s.Nd,y.G,v.d],styles:[".tableTitle[_ngcontent-%COMP%]{text-align:left;color:#fff;background-color:#444242;font-weight:700;font-size:14px}.tableRow[_ngcontent-%COMP%]{text-align:center;font-size:13px;cursor:pointer}.tableRowSeleded[_ngcontent-%COMP%]{text-align:center;color:#fff;background-color:#00008b;cursor:pointer}.tableRow[_ngcontent-%COMP%]:hover{color:#fff;background-color:#00008b}"]}),e})();var _=a(2263);const Z=[{path:"",component:P}];let E=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(Z),_.M,g.Bz]}),e})();var h=a(7147);let M=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,f.u5,s.Pc,E,h.q,_.M]}),e})()}}]);