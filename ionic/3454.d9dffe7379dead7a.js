"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3454],{3454:(E,_,p)=>{p.r(_),p.d(_,{ApuestaPagePageModule:()=>Z});var r=p(6814),m=p(95),s=p(2511),o=p(242),f=p(3044),u=p(5861),e=p(6689);function A(n,l){if(1&n&&(e.TgZ(0,"ion-item")(1,"ion-label"),e._uU(2),e.qZA()()),2&n){const a=e.oxw(2);e.xp6(2),e.hij("Jugadores en Rojo: ",a.totalRojos," ")}}function h(n,l){if(1&n){const a=e.EpF();e.TgZ(0,"ion-item")(1,"base-button-guardar",3),e.NdJ("click",function(){e.CHM(a);const i=e.oxw(2);return e.KtG(i.cerrarApuesta())}),e.qZA()()}if(2&n){const a=e.oxw(2);e.xp6(1),e.Q6J("label","Cerrar Apuesta")("valid",!0)("isSaving",a.isClosing)}}function v(n,l){if(1&n&&(e.TgZ(0,"ion-item")(1,"ion-label"),e._uU(2),e.ALo(3,"number"),e.qZA()()),2&n){const a=e.oxw(2);e.xp6(2),e.hij("Jugado: ",e.lcZ(3,1,null==a.apuesta?null:a.apuesta.apostado)," ")}}function C(n,l){if(1&n){const a=e.EpF();e.TgZ(0,"ion-item")(1,"ion-input",4),e.NdJ("ngModelChange",function(i){e.CHM(a);const c=e.oxw(2);return e.KtG(c.ganado=i)}),e.qZA()()}if(2&n){const a=e.oxw(2);e.xp6(1),e.Q6J("ngModel",a.ganado)}}function x(n,l){if(1&n){const a=e.EpF();e.TgZ(0,"ion-item")(1,"base-button-guardar",5),e.NdJ("click",function(){e.CHM(a);const i=e.oxw(2);return e.KtG(i.finalizarApuesta())}),e.qZA()()}if(2&n){const a=e.oxw(2);e.xp6(1),e.Q6J("valid",a.ganado)("label","Finalizar Apuesta")("valid",!0)("isSaving",a.isClosing)}}function b(n,l){if(1&n){const a=e.EpF();e.TgZ(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),e._uU(3),e.ALo(4,"date"),e.qZA()(),e.TgZ(5,"ion-card-content")(6,"ion-list")(7,"ion-item")(8,"ion-label"),e._uU(9),e.qZA()(),e.YNc(10,A,3,1,"ion-item",1),e.YNc(11,h,2,3,"ion-item",1),e.YNc(12,v,4,3,"ion-item",1),e.YNc(13,C,2,1,"ion-item",1),e.YNc(14,x,2,4,"ion-item",1),e.qZA()(),e._UZ(15,"br")(16,"br"),e.TgZ(17,"base-button-cancelar",2),e.NdJ("click",function(){e.CHM(a);const i=e.oxw();return e.KtG(i.cancel())}),e.qZA()()}if(2&n){const a=e.oxw();e.xp6(3),e.hij("Apuesta : ",e.xi3(4,7,null==a.apuesta?null:a.apuesta.fecha,"dd/MM/yyyy"),""),e.xp6(6),e.hij("Estado : ",null==a.apuesta?null:a.apuesta.estado," "),e.xp6(1),e.Q6J("ngIf",1==a.estadoid),e.xp6(1),e.Q6J("ngIf",1==a.estadoid),e.xp6(1),e.Q6J("ngIf",2==a.estadoid),e.xp6(1),e.Q6J("ngIf",2==a.estadoid),e.xp6(1),e.Q6J("ngIf",2==a.estadoid)}}var g=function(n){return n[n.abierta=1]="abierta",n[n.cerrada=2]="cerrada",n[n.finalizada=3]="finalizada",n}(g||{});let y=(()=>{var n;class l{set SetApuesta(t){if(t&&(this.apuesta=t,this.estadoid=this.apuesta.estadoid,this.apuesta.estadoid==g.abierta)){const i=new o.classHttp("get","User",null,"InRed");this.myHttpService.ejecuteURL(i).then(c=>{this.totalRojos=c.total})}}constructor(t,i){this.myHttpService=t,this.utilService=i,this.estadoid=null,this.saveEvent=new e.vpe,this.cancelEvent=new e.vpe,this.isClosing=!1}ngOnInit(){}finalizarApuesta(){var t=this;return(0,u.Z)(function*(){t.isClosing=!0;try{const i=new o.classHttp("put","Apuesta",null,"finalizar",{apostado:t.apuesta.apostado,ganado:t.ganado},t.apuesta.id),c=yield t.myHttpService.ejecuteURL(i);t.isClosing=!1,c&&(t.apuesta=null,t.saveEvent.emit(!0))}catch{t.isClosing=!1}})()}cerrarApuesta(){var t=this;return(0,u.Z)(function*(){t.isClosing=!0;try{const i=new o.classHttp("put","Apuesta",null,"cerrar",null,t.apuesta.id),c=yield t.myHttpService.ejecuteURL(i);t.isClosing=!1,c&&(t.apuesta=null,t.saveEvent.emit(!0))}catch{t.isClosing=!1}})()}cancel(){this.apuesta=null,this.cancelEvent.emit(!0)}}return(n=l).\u0275fac=function(t){return new(t||n)(e.Y36(o.MyHttpService),e.Y36(o.UtilService))},n.\u0275cmp=e.Xpm({type:n,selectors:[["gestion-apuesta"]],inputs:{SetApuesta:"SetApuesta"},outputs:{saveEvent:"saveEvent",cancelEvent:"cancelEvent"},decls:2,vars:1,consts:[[3,"isOpen","willDismiss"],[4,"ngIf"],[3,"click"],[3,"label","valid","isSaving","click"],["type","number","placeholder","ganado",3,"ngModel","ngModelChange"],[3,"valid","label","isSaving","click"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-modal",0),e.NdJ("willDismiss",function(){return i.cancel()}),e.YNc(1,b,18,10,"ng-template"),e.qZA()),2&t&&e.Q6J("isOpen",null!=i.apuesta)},dependencies:[r.O5,m.JJ,m.On,s.PM,s.FN,s.Zi,s.Dq,s.pK,s.Ie,s.Q$,s.q_,s.ki,s.as,o.ButtonGuardarComponent,o.ButtonCancelarComponent,r.JJ,r.uU],styles:["ion-checkbox[_ngcontent-%COMP%]{--size: 32px;--checkbox-background-checked: #6815ec}ion-checkbox[_ngcontent-%COMP%]::part(container){border-radius:6px;border:2px solid #6815ec}"]}),l})();const T=[{path:"",component:(()=>{var n;class l extends o.BasePage{onLoadDataEmiter(t){}constructor(t,i){super(t),this.myHttpService=t,this.utilService=i,this.selectedApuesta=null,this.columns=[{name:"F",prop:"fecha",type:"date",OrderInit:"DESC"},{name:"Apostado",prop:"apostado",type:"number"},{name:"Ganado",prop:"ganado",type:"number"},{name:"Estado",prop:"estado",type:"action",action:"actionApuesta"}],this.entityName="Apuesta"}ngOnInit(){return(0,u.Z)(function*(){})()}actionEmiter(t){var i=this;return(0,u.Z)(function*(){"actionApuesta"===(null==t?void 0:t.action)&&(i.selectedApuesta=t.row)})()}updatependientesAll(){var t=this;return(0,u.Z)(function*(){try{const i=new o.classHttp("put",t.entityName,null,"updatependientesAll",{});(yield t.myHttpService.ejecuteURL(i))&&(t.utilService.message(o.typeMessage.success,"Guardado correctamente"),t.getTableRefresh())}catch{}})()}}return(n=l).\u0275fac=function(t){return new(t||n)(e.Y36(o.MyHttpService),e.Y36(o.UtilService))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-apuesta"]],features:[e.qOj],decls:5,vars:6,consts:[[3,"title","entityName","columns","withCache","refresh","actionEmiter","onLoadDataEmiter"],[3,"SetApuesta","saveEvent","cancelEvent"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-grid")(1,"ion-row")(2,"ion-col")(3,"my-table",0),e.NdJ("actionEmiter",function(d){return i.actionEmiter(d)})("onLoadDataEmiter",function(d){return i.onLoadDataEmiter(d)}),e.qZA()()()(),e.TgZ(4,"gestion-apuesta",1),e.NdJ("saveEvent",function(){return i.getTableRefresh()})("cancelEvent",function(){return i.selectedApuesta=null}),e.qZA()),2&t&&(e.xp6(3),e.Q6J("title","Apuestas")("entityName",i.entityName)("columns",i.columns)("withCache",!0)("refresh",i.tableRefresh),e.xp6(1),e.Q6J("SetApuesta",i.selectedApuesta))},dependencies:[s.wI,s.jY,s.Nd,o.MyTableComponent,y]}),l})()}];let Z=(()=>{var n;class l{}return(n=l).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[r.ez,m.u5,m.UX,s.Pc,f.Bz.forChild(T),o.SharedComponentsModule]}),l})()}}]);