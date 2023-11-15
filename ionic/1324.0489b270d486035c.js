"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1324],{1324:(E,R,m)=>{m.r(R),m.d(R,{startInputShims:()=>q});var b=m(5861),T=m(904),y=m(2091),N=m(7290),h=m(3464);m(2538);const M=new WeakMap,P=(e,t,s,o=0,r=!1)=>{M.has(e)!==s&&(s?Z(e,t,o,r):G(e,t))},Z=(e,t,s,o=!1)=>{const r=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,o&&(n.disabled=!0),r.appendChild(n),M.set(e,n);const i="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${i}px,${s}px,0) scale(0)`},G=(e,t)=>{const s=M.get(e);s&&(M.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",j="$ionPaddingTimer",B=(e,t,s)=>{const o=e[j];o&&clearTimeout(o),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[j]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},F=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&B(t,0,s)},{once:!0})};let g=0;const O="data-ionic-skip-scroll-assist",V=(e,t,s,o,r,n,a,i=!1)=>{const l=n&&(void 0===a||a.mode===N.a.None);let L=!1;const u=void 0!==h.w?h.w.innerHeight:0,v=_=>{!1!==L?W(e,t,s,o,_.detail.keyboardHeight,l,i,u,!1):L=!0},c=()=>{L=!1,null==h.w||h.w.removeEventListener("ionKeyboardDidShow",v),e.removeEventListener("focusout",c,!0)},f=function(){var _=(0,b.Z)(function*(){t.hasAttribute(O)?t.removeAttribute(O):(W(e,t,s,o,r,l,i,u),null==h.w||h.w.addEventListener("ionKeyboardDidShow",v),e.addEventListener("focusout",c,!0))});return function(){return _.apply(this,arguments)}}();return e.addEventListener("focusin",f,!0),()=>{e.removeEventListener("focusin",f,!0),null==h.w||h.w.removeEventListener("ionKeyboardDidShow",v),e.removeEventListener("focusout",c,!0)}},x=e=>{document.activeElement!==e&&(e.setAttribute(O,"true"),e.focus())},W=function(){var e=(0,b.Z)(function*(t,s,o,r,n,a,i=!1,l=0,L=!0){if(!o&&!r)return;const u=((e,t,s,o)=>{var r;return((e,t,s,o)=>{const r=e.top,n=e.bottom,a=t.top,l=a+15,u=Math.min(t.bottom,o-s)-50-n,v=l-r,c=Math.round(u<0?-u:v>0?-v:0),f=Math.min(c,r-a),w=Math.abs(f)/.3;return{scrollAmount:f,scrollDuration:Math.min(400,Math.max(150,w)),scrollPadding:s,inputSafeY:4-(r-l)}})((null!==(r=e.closest("ion-item,[ion-item]"))&&void 0!==r?r:e).getBoundingClientRect(),t.getBoundingClientRect(),s,o)})(t,o||r,n,l);if(o&&Math.abs(u.scrollAmount)<4)return x(s),void(a&&null!==o&&(B(o,g),F(s,o,()=>g=0)));if(P(t,s,!0,u.inputSafeY,i),x(s),(0,y.r)(()=>t.click()),a&&o&&(g=u.scrollPadding,B(o,g)),typeof window<"u"){let v;const c=function(){var _=(0,b.Z)(function*(){void 0!==v&&clearTimeout(v),window.removeEventListener("ionKeyboardDidShow",f),window.removeEventListener("ionKeyboardDidShow",c),o&&(yield(0,T.c)(o,0,u.scrollAmount,u.scrollDuration)),P(t,s,!1,u.inputSafeY),x(s),a&&F(s,o,()=>g=0)});return function(){return _.apply(this,arguments)}}(),f=()=>{window.removeEventListener("ionKeyboardDidShow",f),window.addEventListener("ionKeyboardDidShow",c)};if(o){const _=yield(0,T.g)(o);if(L&&u.scrollAmount>_.scrollHeight-_.clientHeight-_.scrollTop)return"password"===s.type?(u.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",f)):window.addEventListener("ionKeyboardDidShow",c),void(v=setTimeout(c,1e3))}c()}});return function(s,o,r,n,a,i){return e.apply(this,arguments)}}(),q=function(){var e=(0,b.Z)(function*(t,s){const o=document,r="ios"===s,n="android"===s,a=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),l=t.getBoolean("hideCaretOnScroll",r),L=t.getBoolean("inputBlurring",r),u=t.getBoolean("scrollPadding",!0),v=Array.from(o.querySelectorAll("ion-input, ion-textarea")),c=new WeakMap,f=new WeakMap,_=yield N.K.getResizeMode(),w=function(){var S=(0,b.Z)(function*(d){yield new Promise(I=>(0,y.c)(d,I));const p=d.shadowRoot||d,D=p.querySelector("input")||p.querySelector("textarea"),A=(0,T.f)(d),H=A?null:d.closest("ion-footer");if(D){if(A&&l&&!c.has(d)){const I=((e,t,s)=>{if(!s||!t)return()=>{};const o=i=>{(e=>e===e.getRootNode().activeElement)(t)&&P(e,t,i)},r=()=>P(e,t,!1),n=()=>o(!0),a=()=>o(!1);return(0,y.a)(s,"ionScrollStart",n),(0,y.a)(s,"ionScrollEnd",a),t.addEventListener("blur",r),()=>{(0,y.b)(s,"ionScrollStart",n),(0,y.b)(s,"ionScrollEnd",a),t.removeEventListener("blur",r)}})(d,D,A);c.set(d,I)}if("date"!==D.type&&"datetime-local"!==D.type&&(A||H)&&i&&!f.has(d)){const I=V(d,D,A,H,a,u,_,n);f.set(d,I)}}});return function(p){return S.apply(this,arguments)}}();L&&(()=>{let e=!0,t=!1;const s=document;(0,y.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",a=>{if(t)return void(t=!1);const i=s.activeElement;if(!i||i.matches(C))return;const l=a.target;l!==i&&(l.matches(C)||l.closest(C)||(e=!1,setTimeout(()=>{e||i.blur()},50)))},!1)})();for(const S of v)w(S);o.addEventListener("ionInputDidLoad",S=>{w(S.detail)}),o.addEventListener("ionInputDidUnload",S=>{(S=>{if(l){const d=c.get(S);d&&d(),c.delete(S)}if(i){const d=f.get(S);d&&d(),f.delete(S)}})(S.detail)})});return function(s,o){return e.apply(this,arguments)}}()}}]);