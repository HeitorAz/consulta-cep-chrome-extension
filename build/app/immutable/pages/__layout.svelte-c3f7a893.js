import{S,i as V,s as A,l as g,m as $,n as y,h as m,p as d,b as E,E as D,F as K,G as J,r as P,a as w,u as H,c as C,H as q,I as p,J as R,e as z,f as k,g as Q,t as N,d as U,v as W,K as X,L as G,M as Y,w as j,x,y as B,N as Z,O as tt,P as et,B as M}from"../chunks/index-ca74555c.js";import{t as st}from"../chunks/stores-c7d0976d.js";import{p as at}from"../chunks/stores-4e279dff.js";import"../chunks/index-138761be.js";function L(r,e,a){const t=r.slice();return t[2]=e[a],t}function O(r){let e,a,t=r[2].iconName+"",s,l,n=r[2].label+"",i,u;return{c(){e=g("a"),a=g("span"),s=P(t),l=w(),i=P(n),u=w(),this.h()},l(o){e=$(o,"A",{class:!0,href:!0});var f=y(e);a=$(f,"SPAN",{class:!0});var h=y(a);s=H(h,t),h.forEach(m),l=C(f),i=H(f,n),u=C(f),f.forEach(m),this.h()},h(){d(a,"class","material-icons-round h-5 mb-0.5"),d(e,"class","nav-button"),d(e,"href",r[2].route),q(e,"active",r[0].url.pathname===r[2].route||r[0].url.pathname===r[2].alias)},m(o,f){E(o,e,f),p(e,a),p(a,s),p(e,l),p(e,i),p(e,u)},p(o,f){f&3&&q(e,"active",o[0].url.pathname===o[2].route||o[0].url.pathname===o[2].alias)},d(o){o&&m(e)}}}function nt(r){let e,a=r[1],t=[];for(let s=0;s<a.length;s+=1)t[s]=O(L(r,a,s));return{c(){e=g("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=$(s,"DIV",{class:!0});var l=y(e);for(let n=0;n<t.length;n+=1)t[n].l(l);l.forEach(m),this.h()},h(){d(e,"class","py-2 flex justify-evenly items-center bg-secondary-100 z-50")},m(s,l){E(s,e,l);for(let n=0;n<t.length;n+=1)t[n].m(e,null)},p(s,[l]){if(l&3){a=s[1];let n;for(n=0;n<a.length;n+=1){const i=L(s,a,n);t[n]?t[n].p(i,l):(t[n]=O(i),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=a.length}},i:D,o:D,d(s){s&&m(e),K(t,s)}}}function lt(r,e,a){let t;return J(r,at,l=>a(0,t=l)),[t,[{route:"/",iconName:"search",label:"Buscar",alias:""},{route:"/favorites",iconName:"bookmark_border",label:"Salvos"},{route:"/history",iconName:"history",label:"Hist\xF3rico"}]]}class rt extends S{constructor(e){super(),V(this,e,lt,nt,A,{})}}function ot(r){let e,a,t,s,l,n;return{c(){e=g("div"),a=g("img"),s=w(),l=g("h1"),n=P("Consulta CEP"),this.h()},l(i){e=$(i,"DIV",{class:!0});var u=y(e);a=$(u,"IMG",{src:!0,class:!0,alt:!0}),s=C(u),l=$(u,"H1",{class:!0});var o=y(l);n=H(o,"Consulta CEP"),o.forEach(m),u.forEach(m),this.h()},h(){R(a.src,t="/images/icons/icon-64.png")||d(a,"src",t),d(a,"class","mr-4 w-12"),d(a,"alt","Logo Consulta CEP"),d(l,"class","text-2xl font-bold text-primary-700 flex-none"),d(e,"class","py-3 bg-secondary-200 flex flex-row justify-center items-center")},m(i,u){E(i,e,u),p(e,a),p(e,s),p(e,l),p(l,n)},p:D,i:D,o:D,d(i){i&&m(e)}}}class it extends S{constructor(e){super(),V(this,e,null,ot,A,{})}}function ct(r){const e=r-1;return e*e*e+1}function T(r,{delay:e=0,duration:a=400,easing:t=ct,x:s=0,y:l=0,opacity:n=0}={}){const i=getComputedStyle(r),u=+i.opacity,o=i.transform==="none"?"":i.transform,f=u*(1-n);return{delay:e,duration:a,easing:t,css:(h,b)=>`
			transform: ${o} translate(${(1-h)*s}px, ${(1-h)*l}px);
			opacity: ${u-f*b}`}}function F(r){let e,a,t,s=r[0].message+"",l,n,i,u;return{c(){e=g("div"),a=g("div"),t=g("p"),l=P(s),this.h()},l(o){e=$(o,"DIV",{class:!0});var f=y(e);a=$(f,"DIV",{class:!0});var h=y(a);t=$(h,"P",{});var b=y(t);l=H(b,s),b.forEach(m),h.forEach(m),f.forEach(m),this.h()},h(){d(a,"class",n=r[0].type+" px-5 py-2 rounded w-56 text-center svelte-8610ht"),d(e,"class","absolute top-5 w-full flex justify-center z-50")},m(o,f){E(o,e,f),p(e,a),p(a,t),p(t,l),u=!0},p(o,f){(!u||f&1)&&s!==(s=o[0].message+"")&&W(l,s),(!u||f&1&&n!==(n=o[0].type+" px-5 py-2 rounded w-56 text-center svelte-8610ht"))&&d(a,"class",n)},i(o){u||(X(()=>{i||(i=G(e,T,{y:-50,duration:300},!0)),i.run(1)}),u=!0)},o(o){i||(i=G(e,T,{y:-50,duration:300},!1)),i.run(0),u=!1},d(o){o&&m(e),o&&i&&i.end()}}}function ut(r){let e,a,t=r[0]&&F(r);return{c(){t&&t.c(),e=z()},l(s){t&&t.l(s),e=z()},m(s,l){t&&t.m(s,l),E(s,e,l),a=!0},p(s,[l]){s[0]?t?(t.p(s,l),l&1&&k(t,1)):(t=F(s),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(Q(),N(t,1,1,()=>{t=null}),U())},i(s){a||(k(t),a=!0)},o(s){N(t),a=!1},d(s){t&&t.d(s),s&&m(e)}}}function ft(r,e,a){let{toast:t}=e;return r.$$set=s=>{"toast"in s&&a(0,t=s.toast)},[t]}class mt extends S{constructor(e){super(),V(this,e,ft,ut,A,{toast:0})}}function _t(r){let e,a,t,s,l,n,i,u,o,f,h;s=new mt({props:{toast:r[0]}}),n=new it({});const b=r[2].default,v=Y(b,r,r[1],null);return f=new rt({}),{c(){e=g("header"),a=w(),t=g("main"),j(s.$$.fragment),l=w(),j(n.$$.fragment),i=w(),u=g("div"),v&&v.c(),o=w(),j(f.$$.fragment),this.h()},l(c){e=$(c,"HEADER",{}),y(e).forEach(m),a=C(c),t=$(c,"MAIN",{class:!0});var _=y(t);x(s.$$.fragment,_),l=C(_),x(n.$$.fragment,_),i=C(_),u=$(_,"DIV",{class:!0});var I=y(u);v&&v.l(I),I.forEach(m),o=C(_),x(f.$$.fragment,_),_.forEach(m),this.h()},h(){d(u,"class","h-80"),d(t,"class","w-96 bg-secondary-200 overflow-hidden custom-scroll")},m(c,_){E(c,e,_),E(c,a,_),E(c,t,_),B(s,t,null),p(t,l),B(n,t,null),p(t,i),p(t,u),v&&v.m(u,null),p(t,o),B(f,t,null),h=!0},p(c,[_]){const I={};_&1&&(I.toast=c[0]),s.$set(I),v&&v.p&&(!h||_&2)&&Z(v,b,c,c[1],h?et(b,c[1],_,null):tt(c[1]),null)},i(c){h||(k(s.$$.fragment,c),k(n.$$.fragment,c),k(v,c),k(f.$$.fragment,c),h=!0)},o(c){N(s.$$.fragment,c),N(n.$$.fragment,c),N(v,c),N(f.$$.fragment,c),h=!1},d(c){c&&m(e),c&&m(a),c&&m(t),M(s),M(n),v&&v.d(c),M(f)}}}function pt(r,e,a){let t;J(r,st,n=>a(0,t=n));let{$$slots:s={},$$scope:l}=e;return r.$$set=n=>{"$$scope"in n&&a(1,l=n.$$scope)},[t,l,s]}class $t extends S{constructor(e){super(),V(this,e,pt,_t,A,{})}}export{$t as default};
