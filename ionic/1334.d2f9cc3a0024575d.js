"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1334],{1334:(h,u,l)=>{l.r(u),l.d(u,{AdministracionPageModule:()=>f});var g=l(6814),c=l(95),e=l(2511),i=l(242),p=l(3044),j=l(5861),o=l(6689);const A=[{path:"",component:(()=>{var n;class s extends i.BasePage{constructor(t,a,d,m){super(t,m),this.myHttpService=t,this.utilService=a,this.alertController=d,this.seguridadService=m,this.BodyMorosos="Hola. Tu saldo es inferior a 1 euro. Si no lo incrementas, no jugar\xe1s la pr\xf3xima apuesta",this.SubjectMorosos="Euromillones. Saldo inferior a 1 Euro"}ngOnInit(){var t=this;return(0,j.Z)(function*(){const a=new i.classHttp("get","Administracion",null,null,null,null);t.objData=yield t.myHttpService.ejecuteURL(a)})()}}return(n=s).\u0275fac=function(t){return new(t||n)(o.Y36(i.MyHttpService),o.Y36(i.UtilService),o.Y36(e.Br),o.Y36(i.SeguridadService))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-administracion"]],features:[o.qOj],decls:23,vars:5,consts:[[1,"title"],["target","_blank",3,"href"],[2,"color","red"]],template:function(t,a){1&t&&(o.TgZ(0,"ion-grid")(1,"ion-row")(2,"ion-col")(3,"span",0),o._uU(4,"Administraci\xf3n"),o.qZA(),o._UZ(5,"br"),o.qZA()(),o.TgZ(6,"ion-row")(7,"ion-col"),o._uU(8,"Total jugadores:"),o.qZA(),o.TgZ(9,"ion-col"),o._uU(10),o.qZA()(),o.TgZ(11,"ion-row")(12,"ion-col"),o._uU(13,"Correo a todos"),o.qZA(),o.TgZ(14,"ion-col")(15,"a",1),o._uU(16,"Correo"),o.qZA()()(),o.TgZ(17,"ion-row",2)(18,"ion-col"),o._uU(19," Correo en rojo"),o.qZA(),o.TgZ(20,"ion-col")(21,"a",1),o._uU(22,"Correo"),o.qZA()()()()),2&t&&(o.xp6(10),o.Oqu(null==a.objData||null==a.objData.data?null:a.objData.data.totalUsers),o.xp6(5),o.MGl("href","mailto:",null==a.objData||null==a.objData.data?null:a.objData.data.lstAllEmails,"?subject=Euromillones",o.LSH),o.xp6(6),o.cQ8("href","mailto:",null==a.objData||null==a.objData.data?null:a.objData.data.lstAllEmailsInRed,"?body=",a.BodyMorosos,"&subject=",a.SubjectMorosos,"",o.LSH))},dependencies:[e.wI,e.jY,e.Nd],styles:[".title[_ngcontent-%COMP%]{font-size:20px}"]}),s})()}];let f=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[g.ez,c.u5,c.UX,e.Pc,p.Bz.forChild(A),i.SharedComponentsModule]}),s})()}}]);