"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2965],{2965:(A,u,n)=>{n.r(u),n.d(u,{GestionCasaModule:()=>f});var e=n(9915),r=n(2749),v=n(6575),s=n(2504),c=n(5591);let a=(()=>{class t{constructor(o,g){this.seguridadService=o,this._router=g}canActivate(o,g){const i=this.seguridadService.UserGet();if(!i)return this.seguridadService.AppGet(),this._router.navigate(["/appDescripcion"]),!1;if(i.role==v.u.GOD)return!0;const h=r.X.menuItems.find(l=>l.path.split("/")[2]==o.routeConfig.path);return!h.roles||0==h.roles.length||h.roles.some(l=>l==i.role)}}return t.\u0275fac=function(o){return new(o||t)(s.LFG(c.F),s.LFG(e.F0))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})();const m=[{path:"",loadChildren:()=>n.e(8367).then(n.bind(n,8367)).then(t=>t.HomePageModule)},{path:"empleadas",loadChildren:()=>Promise.all([n.e(9511),n.e(5339)]).then(n.bind(n,5339)).then(t=>t.EmpleadasPageModule),canActivate:[a]},{path:"servicios",loadChildren:()=>Promise.all([n.e(9511),n.e(7150)]).then(n.bind(n,7150)).then(t=>t.ServiciosPageModule),canActivate:[a]},{path:"turnos",loadChildren:()=>n.e(2223).then(n.bind(n,2223)).then(t=>t.TurnosPageModule),canActivate:[a]},{path:"agenda",loadChildren:()=>Promise.all([n.e(9511),n.e(1642)]).then(n.bind(n,1642)).then(t=>t.AgendaPageModule),canActivate:[a]},{path:"gastos",loadChildren:()=>Promise.all([n.e(9511),n.e(2854)]).then(n.bind(n,5590)).then(t=>t.GastosPageModule),canActivate:[a]},{path:"administracion",loadChildren:()=>n.e(8099).then(n.bind(n,8099)).then(t=>t.AdministracionPageModule),canActivate:[a]},{path:"login",loadChildren:()=>n.e(1236).then(n.bind(n,1236)).then(t=>t.LoginPageModule)}];let C=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[e.Bz.forChild(m),e.Bz]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({providers:[a],imports:[C]}),t})()}}]);