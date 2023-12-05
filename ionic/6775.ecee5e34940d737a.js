"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6775],{6775:(B,_,u)=>{u.r(_),u.d(_,{HomePageModule:()=>H});var d=u(6814),l=u(95),r=u(2511),g=u(3044),e=u(6689),c=u(242),m=u(5861);function h(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"ion-card",1)(1,"ion-card-header")(2,"ion-card-title"),e._uU(3),e.qZA(),e.TgZ(4,"ion-card-subtitle"),e._uU(5),e.ALo(6,"number"),e.qZA()(),e.TgZ(7,"ion-card-content")(8,"form",2)(9,"ion-list")(10,"ion-item")(11,"h2"),e._uU(12,"Nuevo Bizum"),e.qZA()(),e.TgZ(13,"ion-item"),e._UZ(14,"ion-input",3),e.qZA(),e.TgZ(15,"ion-item"),e._UZ(16,"br"),e.TgZ(17,"base-button-guardar",4),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onSubmit())}),e.qZA()()()()(),e._UZ(18,"br")(19,"br"),e.TgZ(20,"base-button-cancelar",5),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.cancel())}),e.qZA()()}if(2&o){const t=e.oxw();e.s9C("color",(null==t.user?null:t.user.saldo)<1?"danger":(null==t.user?null:t.user.saldo)>1&&(null==t.user?null:t.user.saldo)<2?"warning":"primary"),e.xp6(3),e.Oqu(null==t.user?null:t.user.name),e.xp6(2),e.hij("Saldo actual : ",e.lcZ(6,6,null==t.user?null:t.user.saldo),""),e.xp6(3),e.Q6J("formGroup",t.formGroup),e.xp6(9),e.Q6J("isSaving",t.isSaving)("valid",t.formGroup.valid)}}let v=(()=>{var o;class s{set SetUser(n){n&&(this.user=n,this.createForm())}constructor(n,i){this.myHttpService=n,this.utilService=i,this.saveEvent=new e.vpe,this.cancelEvent=new e.vpe,this.isSaving=!1}ngOnInit(){}createForm(){var n;this.formGroup=new l.cw({userId:new l.NI("",[l.kI.required]),importe:new l.NI("",[l.kI.required])}),this.formGroup.controls.userId.setValue(null===(n=this.user)||void 0===n?void 0:n.id)}onSubmit(){var n=this;return(0,m.Z)(function*(){n.isSaving=!0;try{const i=new c.classHttp("post","userxbizum",null,n.formGroup.value),a=yield n.myHttpService.ejecuteURL(i);n.isSaving=!1,a&&(n.utilService.message(c.typeMessage.success,"Guardado correctamente"),n.user=null,n.saveEvent.emit(!0))}catch{n.isSaving=!1}})()}cancel(){this.user=null,this.cancelEvent.emit(!0)}}return(o=s).\u0275fac=function(n){return new(n||o)(e.Y36(c.MyHttpService),e.Y36(c.UtilService))},o.\u0275cmp=e.Xpm({type:o,selectors:[["add-bizum"]],inputs:{SetUser:"SetUser"},outputs:{saveEvent:"saveEvent",cancelEvent:"cancelEvent"},decls:2,vars:1,consts:[[3,"isOpen","willDismiss"],[3,"color"],[3,"formGroup"],["label","importe","formControlName","importe","type","number","placeholder","000"],[3,"isSaving","valid","click"],[3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-modal",0),e.NdJ("willDismiss",function(){return i.cancel()}),e.YNc(1,h,21,8,"ng-template"),e.qZA()),2&n&&e.Q6J("isOpen",null!=i.user)},dependencies:[r.PM,r.FN,r.Zi,r.tO,r.Dq,r.pK,r.Ie,r.q_,r.ki,r.as,l._Y,l.JJ,l.JL,l.sg,l.u,c.ButtonGuardarComponent,c.ButtonCancelarComponent,d.JJ],styles:["ion-checkbox[_ngcontent-%COMP%]{--size: 32px;--checkbox-background-checked: #6815ec}ion-checkbox[_ngcontent-%COMP%]::part(container){border-radius:6px;border:2px solid #6815ec}"]}),s})();function Z(o,s){1&o&&(e.TgZ(0,"ion-col",10),e._UZ(1,"ion-spinner",17),e.qZA())}function x(o,s){1&o&&(e.TgZ(0,"ion-col",10),e._uU(1," No hay bizums.. "),e.qZA())}function b(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"ion-icon",18),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.getBizums())}),e.qZA()}}function C(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"ion-col",21)(1,"ion-icon",23),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,a=e.oxw(2);return e.KtG(a.borrar(i))}),e.qZA()()}}function U(o,s){if(1&o&&(e.TgZ(0,"ion-row",19)(1,"ion-col",20),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"ion-col",20),e._uU(5),e.ALo(6,"number"),e.qZA(),e.TgZ(7,"ion-col",21)(8,"span"),e._uU(9),e.qZA()(),e.YNc(10,C,2,0,"ion-col",22),e.qZA()),2&o){const t=s.$implicit;e.Q6J("ngClass",1==t.estadoid?"enNaranja":"enVerde"),e.xp6(2),e.Oqu(e.xi3(3,5,t.fecha,"dd/MM/yyyy")),e.xp6(3),e.hij("",e.lcZ(6,8,t.importe)," \u20ac"),e.xp6(4),e.Oqu(t.estadodesc[0]),e.xp6(1),e.Q6J("ngIf",1==t.estadoid)}}function z(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"ion-card",1)(1,"ion-card-header")(2,"ion-card-title")(3,"ion-chip")(4,"ion-avatar"),e._UZ(5,"img",2),e.qZA(),e.TgZ(6,"ion-label")(7,"span",3),e._uU(8),e.qZA()()()(),e.TgZ(9,"ion-card-subtitle"),e._uU(10),e.qZA()(),e.TgZ(11,"ion-card-content")(12,"ion-grid")(13,"ion-row")(14,"ion-col",4)(15,"span",5),e._uU(16," Saldo : "),e.TgZ(17,"ion-chip",6)(18,"span",7),e._uU(19),e.ALo(20,"number"),e.qZA()()()(),e.TgZ(21,"ion-col",8)(22,"ion-button",9),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.userBizum=i.user)}),e._uU(23,"Hacer Bizum"),e.qZA()()(),e.TgZ(24,"ion-row"),e._UZ(25,"ion-col",10),e.qZA(),e.TgZ(26,"ion-row")(27,"ion-col",10)(28,"p"),e._uU(29,"\xfaltimos bizums"),e.qZA(),e.TgZ(30,"p"),e._uU(31,"lo puedes borrar mientras est\xe9 pendiente (p)"),e.qZA()()(),e.TgZ(32,"ion-row"),e.YNc(33,Z,2,0,"ion-col",11),e.qZA(),e.TgZ(34,"ion-row"),e.YNc(35,x,2,0,"ion-col",11),e.qZA(),e.TgZ(36,"ion-row")(37,"ion-col",12),e.YNc(38,b,1,0,"ion-icon",13),e.qZA(),e._UZ(39,"ion-col",14),e.qZA(),e.YNc(40,U,11,10,"ion-row",15),e.qZA(),e.TgZ(41,"add-bizum",16),e.NdJ("saveEvent",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.refresh())})("cancelEvent",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.userBizum=null)}),e.qZA()()()}if(2&o){const t=e.oxw();e.s9C("color",(null==t.user?null:t.user.saldo)<1?"danger":(null==t.user?null:t.user.saldo)>1&&(null==t.user?null:t.user.saldo)<2?"warning":"primary"),e.xp6(8),e.hij(" ",null==t.user?null:t.user.name,""),e.xp6(2),e.Oqu(null==t.user?null:t.user.email),e.xp6(7),e.Q6J("outline",!0),e.xp6(2),e.hij(" ",e.lcZ(20,10,null==t.user?null:t.user.saldo),"\u20ac"),e.xp6(14),e.Q6J("ngIf",t.isLoading),e.xp6(2),e.Q6J("ngIf",!t.isLoading&&t.lstBizums&&0==t.lstBizums.length),e.xp6(3),e.Q6J("ngIf",!t.isLoading),e.xp6(2),e.Q6J("ngForOf",t.lstBizums),e.xp6(1),e.Q6J("SetUser",t.userBizum)}}let y=(()=>{var o;class s{constructor(n,i,a){this.myHttpService=n,this.utilService=i,this.alertController=a}ngOnInit(){var n=this;return(0,m.Z)(function*(){yield n.getUser(),yield n.getBizums()})()}refresh(){var n=this;return(0,m.Z)(function*(){yield n.getBizums()})()}getBizums(){var n=this;return(0,m.Z)(function*(){n.lstBizums=[],n.isLoading=!0;const i={pagination:null,columns:[{name:"id",prop:"id",type:"number"},{name:"fecha",prop:"fecha",type:"date",OrderInit:"DESC"},{name:"importe",prop:"importe",type:"number"},{name:"E",prop:"estadodesc",type:"text"},{name:"E",prop:"estadoid",type:"number"},{name:"user",prop:"userId",type:"number",filterInit:` ux."userId" = ${n.userId}`,hide:!0}],mode:"C"};try{const a=new c.classHttp("get","userxbizum");n.myHttpService.objPagFilterOrder=i;const p=yield n.myHttpService.ejecuteURL(a);n.isLoading=!1,p&&(n.lstBizums=p.data)}catch{n.isLoading=!1}})()}getUser(){var n=this;return(0,m.Z)(function*(){try{const i=new c.classHttp("get","user",null,null,n.userId.toString()),a=yield n.myHttpService.ejecuteURL(i);a&&(n.user=a)}catch{}})()}borrar(n){var i=this;return(0,m.Z)(function*(){var I;yield(yield i.alertController.create({header:`Antenci\xf3n!! se va a borrar el bizum de importe ${n.importe} \u20ac. \xbfContinuar?`,buttons:[{text:"Cancelar",role:"cancel",handler:()=>{}},{text:"OK",role:"confirm",handler:(I=(0,m.Z)(function*(){i.isLoading=!0;const f=new c.classHttp("delete","userxbizum",null,null,n.id);yield i.myHttpService.ejecuteURL(f),i.isLoading=!1,i.getBizums()}),function(){return I.apply(this,arguments)})}]})).present(),new c.classHttp("del","user",null,null,i.userId.toString())})()}}return(o=s).\u0275fac=function(n){return new(n||o)(e.Y36(c.MyHttpService),e.Y36(c.UtilService),e.Y36(r.Br))},o.\u0275cmp=e.Xpm({type:o,selectors:[["user-data"]],inputs:{userId:"userId"},decls:1,vars:1,consts:[[3,"color",4,"ngIf"],[3,"color"],["alt","Silhouette of a person's head","src","https://ionicframework.com/docs/img/demos/avatar.svg"],[2,"color","white"],["size","7"],[2,"font-size","20px"],[3,"outline"],[2,"font-size","20px","color","white"],["size","5"],["color","success",3,"click"],["size","12"],["size","12",4,"ngIf"],["size","3"],["name","refresh","color","success","style","font-size: 25px","class","hand",3,"click",4,"ngIf"],["size","9"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"SetUser","saveEvent","cancelEvent"],["name","dots"],["name","refresh","color","success",1,"hand",2,"font-size","25px",3,"click"],[3,"ngClass"],["size","4"],["size","2"],["size","2",4,"ngIf"],["color","danger","name","trash-outline",1,"hand",2,"font-size","20px",3,"click"]],template:function(n,i){1&n&&e.YNc(0,z,42,12,"ion-card",0),2&n&&e.Q6J("ngIf",i.user)},dependencies:[d.mk,d.sg,d.O5,r.BJ,r.YG,r.PM,r.FN,r.Zi,r.tO,r.Dq,r.hM,r.wI,r.jY,r.gu,r.Q$,r.Nd,r.PQ,v,d.JJ,d.uU],styles:["ion-checkbox[_ngcontent-%COMP%]{--size: 32px;--checkbox-background-checked: #6815ec}ion-checkbox[_ngcontent-%COMP%]::part(container){border-radius:6px;border:2px solid #6815ec}"]}),s})();function T(o,s){if(1&o&&e._UZ(0,"user-data",1),2&o){const t=e.oxw();e.Q6J("userId",t.user.id)}}const A=[{path:"",component:(()=>{var o;class s{constructor(n){this.seguridadService=n,this.seguridadService.subjectUser.subscribe(i=>{this.user=i})}ngOnInit(){this.user=this.seguridadService.UserGet()}}return(o=s).\u0275fac=function(n){return new(n||o)(e.Y36(c.SeguridadService))},o.\u0275cmp=e.Xpm({type:o,selectors:[["home-ttec-euromillones"]],decls:1,vars:1,consts:[[3,"userId",4,"ngIf"],[3,"userId"]],template:function(n,i){1&n&&e.YNc(0,T,1,1,"user-data",0),2&n&&e.Q6J("ngIf",i.user)},dependencies:[d.O5,y]}),s})()}];let S=(()=>{var o;class s{}return(o=s).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.Bz.forChild(A),g.Bz]}),s})();var w=u(3355);let H=(()=>{var o;class s{}return(o=s).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,l.u5,r.Pc,S,w.S]}),s})()}}]);