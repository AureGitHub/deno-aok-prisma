"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[712],{712:(J,_,a)=>{a.r(_),a.d(_,{HomePageModule:()=>q});var u=a(6814),f=a(95),r=a(2511),p=a(3044),e=a(6689),d=a(242),l=a(5861),Z=a(5875);function h(n,s){1&n&&(e.TgZ(0,"ion-col",10),e._UZ(1,"ion-spinner",17),e.qZA())}function x(n,s){1&n&&(e.TgZ(0,"ion-col",10),e._uU(1," No hay bizums.. "),e.qZA())}function U(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"ion-icon",18),e.NdJ("click",function(){e.CHM(o);const i=e.oxw(2);return e.KtG(i.getBizums())}),e.qZA()}}function v(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"ion-col",21)(1,"ion-icon",23),e.NdJ("click",function(){e.CHM(o);const i=e.oxw().$implicit,c=e.oxw(2);return e.KtG(c.borrar(i))}),e.qZA()()}}function z(n,s){if(1&n&&(e.TgZ(0,"ion-row",19)(1,"ion-col",20),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"ion-col",20),e._uU(5),e.ALo(6,"number"),e.qZA(),e.TgZ(7,"ion-col",21)(8,"span"),e._uU(9),e.qZA()(),e.YNc(10,v,2,0,"ion-col",22),e.qZA()),2&n){const o=s.$implicit;e.Q6J("ngClass",1==o.estadoid?"enNaranja":"enVerde"),e.xp6(2),e.Oqu(e.xi3(3,5,o.fecha,"dd/MM/yyyy")),e.xp6(3),e.hij("",e.lcZ(6,8,o.importe)," \u20ac"),e.xp6(4),e.Oqu(o.estadodesc[0]),e.xp6(1),e.Q6J("ngIf",1==o.estadoid)}}function T(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"ion-card",1)(1,"ion-card-header")(2,"ion-card-title")(3,"ion-chip")(4,"ion-avatar"),e._UZ(5,"img",2),e.qZA(),e.TgZ(6,"ion-label")(7,"span",3),e._uU(8),e.qZA()()()(),e.TgZ(9,"ion-card-subtitle"),e._uU(10),e.qZA()(),e.TgZ(11,"ion-card-content")(12,"ion-grid")(13,"ion-row")(14,"ion-col",4)(15,"span",5),e._uU(16," Saldo : "),e.TgZ(17,"ion-chip",6)(18,"span",7),e._uU(19),e.ALo(20,"number"),e.qZA()()()(),e.TgZ(21,"ion-col",8)(22,"ion-button",9),e.NdJ("click",function(){e.CHM(o);const i=e.oxw();return e.KtG(i.userBizum=i.user)}),e._uU(23,"Avisar Bizum"),e.qZA()()(),e.TgZ(24,"ion-row"),e._UZ(25,"ion-col",10),e.qZA(),e.TgZ(26,"ion-row")(27,"ion-col",10)(28,"p"),e._uU(29,"Una vez que hagas el bizum desde tu banco, para comunic\xe1rmelo a mi tienes que registrarlo en la aplicaci\xf3n pulsando en "),e.TgZ(30,"b"),e._uU(31,"Avisar Bizum"),e.qZA()(),e._UZ(32,"br"),e.TgZ(33,"p"),e._uU(34,"\xfaltimos bizums"),e.qZA(),e.TgZ(35,"p"),e._uU(36,"lo puedes borrar mientras est\xe9 pendiente (p)"),e.qZA()()(),e.TgZ(37,"ion-row"),e.YNc(38,h,2,0,"ion-col",11),e.qZA(),e.TgZ(39,"ion-row"),e.YNc(40,x,2,0,"ion-col",11),e.qZA(),e.TgZ(41,"ion-row")(42,"ion-col",12),e.YNc(43,U,1,0,"ion-icon",13),e.qZA(),e._UZ(44,"ion-col",14),e.qZA(),e.YNc(45,z,11,10,"ion-row",15),e.qZA(),e.TgZ(46,"add-bizum",16),e.NdJ("saveEvent",function(){e.CHM(o);const i=e.oxw();return e.KtG(i.refresh())})("cancelEvent",function(){e.CHM(o);const i=e.oxw();return e.KtG(i.userBizum=null)}),e.qZA()()()}if(2&n){const o=e.oxw();e.s9C("color",(null==o.user?null:o.user.saldo)<1?"danger":(null==o.user?null:o.user.saldo)>1&&(null==o.user?null:o.user.saldo)<2?"warning":"primary"),e.xp6(8),e.hij(" ",null==o.user?null:o.user.name,""),e.xp6(2),e.Oqu(null==o.user?null:o.user.email),e.xp6(7),e.Q6J("outline",!0),e.xp6(2),e.hij(" ",e.lcZ(20,10,null==o.user?null:o.user.saldo),"\u20ac"),e.xp6(19),e.Q6J("ngIf",o.isLoading),e.xp6(2),e.Q6J("ngIf",!o.isLoading&&o.lstBizums&&0==o.lstBizums.length),e.xp6(3),e.Q6J("ngIf",!o.isLoading),e.xp6(2),e.Q6J("ngForOf",o.lstBizums),e.xp6(1),e.Q6J("SetUser",o.userBizum)}}let C=(()=>{var n;class s{constructor(t,i){this.myHttpService=t,this.alertController=i}ngOnInit(){var t=this;return(0,l.Z)(function*(){yield t.getUser(),yield t.getBizums()})()}refresh(){var t=this;return(0,l.Z)(function*(){yield t.getBizums()})()}getBizums(){var t=this;return(0,l.Z)(function*(){t.lstBizums=[],t.isLoading=!0;const i={pagination:null,columns:[{name:"id",prop:"id",type:"number"},{name:"fecha",prop:"fecha",type:"date",OrderInit:"DESC"},{name:"importe",prop:"importe",type:"number"},{name:"E",prop:"estadodesc",type:"text"},{name:"E",prop:"estadoid",type:"number"},{name:"user",prop:"userid",type:"number",filterInit:` ux."userid" = ${t.userid}`,hide:!0}],mode:"C"};try{const c=new d.classHttp("get","userxbizum",i),m=yield t.myHttpService.ejecuteURL(c);t.isLoading=!1,m&&(t.lstBizums=m.data)}catch{t.isLoading=!1}})()}getUser(){var t=this;return(0,l.Z)(function*(){try{const i=new d.classHttp("get","user",null,"",null,t.userid.toString()),c=yield t.myHttpService.ejecuteURL(i);c&&(t.user=c)}catch{}})()}borrar(t){var i=this;return(0,l.Z)(function*(){var m;yield(yield i.alertController.create({header:`Antenci\xf3n!! se va a borrar el bizum de importe ${t.importe} \u20ac. \xbfContinuar?`,buttons:[{text:"Cancelar",role:"cancel",handler:()=>{}},{text:"OK",role:"confirm",handler:(m=(0,l.Z)(function*(){i.isLoading=!0;const g=new d.classHttp("delete","userxbizum",null,"",null,t.id);yield i.myHttpService.ejecuteURL(g),i.isLoading=!1,i.getBizums()}),function(){return m.apply(this,arguments)})}]})).present()})()}}return(n=s).\u0275fac=function(t){return new(t||n)(e.Y36(d.MyHttpService),e.Y36(r.Br))},n.\u0275cmp=e.Xpm({type:n,selectors:[["user-data"]],inputs:{userid:"userid"},decls:1,vars:1,consts:[[3,"color",4,"ngIf"],[3,"color"],["alt","Silhouette of a person's head","src","https://ionicframework.com/docs/img/demos/avatar.svg"],[2,"color","white"],["size","7"],[2,"font-size","20px"],[3,"outline"],[2,"font-size","20px","color","white"],["size","5"],["color","success",3,"click"],["size","12"],["size","12",4,"ngIf"],["size","3"],["name","refresh","color","success","style","font-size: 25px","class","hand",3,"click",4,"ngIf"],["size","9"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"SetUser","saveEvent","cancelEvent"],["name","dots"],["name","refresh","color","success",1,"hand",2,"font-size","25px",3,"click"],[3,"ngClass"],["size","4"],["size","2"],["size","2",4,"ngIf"],["color","danger","name","trash-outline",1,"hand",2,"font-size","20px",3,"click"]],template:function(t,i){1&t&&e.YNc(0,T,47,12,"ion-card",0),2&t&&e.Q6J("ngIf",i.user)},dependencies:[u.mk,u.sg,u.O5,r.BJ,r.YG,r.PM,r.FN,r.Zi,r.tO,r.Dq,r.hM,r.wI,r.jY,r.gu,r.Q$,r.Nd,r.PQ,Z.I,u.JJ,u.uU],styles:["ion-checkbox[_ngcontent-%COMP%]{--size: 32px;--checkbox-background-checked: #6815ec}ion-checkbox[_ngcontent-%COMP%]::part(container){border-radius:6px;border:2px solid #6815ec}"]}),s})();function y(n,s){1&n&&(e.TgZ(0,"ion-row")(1,"ion-col",2)(2,"ion-card",3)(3,"ion-card-header")(4,"ion-card-title"),e._uU(5,"CONECTAR"),e.qZA(),e.TgZ(6,"ion-card-subtitle"),e._uU(7,"Conectate a la aplicaci\xf3n"),e.qZA()()()()()),2&n&&(e.xp6(2),e.Q6J("routerLink","/login"))}function A(n,s){if(1&n&&e._UZ(0,"user-data",4),2&n){const o=e.oxw();e.Q6J("userid",o.user.id)}}const b=[{path:"",component:(()=>{var n;class s{constructor(t){this.seguridadService=t,this.seguridadService.subjectUser.subscribe(i=>{this.user=i})}ngOnInit(){this.user=this.seguridadService.UserGet()}}return(n=s).\u0275fac=function(t){return new(t||n)(e.Y36(d.SeguridadService))},n.\u0275cmp=e.Xpm({type:n,selectors:[["home-ttec-euromillones"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"userid",4,"ngIf"],[1,"ion-align-self-start"],[2,"background-color","rgb(158, 238, 158)","color","white","cursor","pointer",3,"routerLink"],[3,"userid"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-grid"),e.YNc(1,y,8,1,"ion-row",0),e.qZA(),e.YNc(2,A,1,1,"user-data",1)),2&t&&(e.xp6(1),e.Q6J("ngIf",!i.user),e.xp6(1),e.Q6J("ngIf",i.user))},dependencies:[u.O5,r.PM,r.Zi,r.tO,r.Dq,r.wI,r.jY,r.Nd,r.YI,p.rH,C]}),s})()}];let H=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(b),p.Bz]}),s})();var w=a(3355);let q=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez,f.u5,r.Pc,H,w.S]}),s})()}}]);