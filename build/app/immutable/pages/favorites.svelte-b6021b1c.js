import{S as N,i as O,s as P,l as h,m as v,n as b,h as f,p as y,b as k,I as m,t as x,d as C,f as A,G,g as U,r as E,a as S,u as q,c as F,E as w,V as W,W as X,w as D,x as L,y as T,T as z,X as H,B as j}from"../chunks/index-ca74555c.js";import{q as J,S as K,A as M}from"../chunks/SearchBar-80ec5457.js";import{c as Q}from"../chunks/FavoriteButton-9e551030.js";import{a as R}from"../chunks/stores-c7d0976d.js";import"../chunks/navigation-308dbfc5.js";import"../chunks/singletons-09b47292.js";import"../chunks/index-138761be.js";function Y(c){let e,s,r,a,o,d;return{c(){e=h("div"),s=h("span"),r=E("bookmark_border"),a=S(),o=h("p"),d=E("Seus endere\xE7os favoritos aparecer\xE3o aqui!"),this.h()},l(l){e=v(l,"DIV",{class:!0});var i=b(e);s=v(i,"SPAN",{class:!0});var t=b(s);r=q(t,"bookmark_border"),t.forEach(f),a=F(i),o=v(i,"P",{class:!0});var u=b(o);d=q(u,"Seus endere\xE7os favoritos aparecer\xE3o aqui!"),u.forEach(f),i.forEach(f),this.h()},h(){y(s,"class","material-icons-round text-7xl text-secondary-200"),y(o,"class","font-semibold text-secondary-700 text-xl"),y(e,"class","w-full h-full flex flex-col justify-center items-center text-center ")},m(l,i){k(l,e,i),m(e,s),m(s,r),m(e,a),m(e,o),m(o,d)},p:w,i:w,o:w,d(l){l&&f(e)}}}function Z(c){let e,s,r,a,o,d,l,i,t,u,_,I;function B(n){c[4](n)}let V={};return c[0]!==void 0&&(V.value=c[0]),s=new K({props:V}),W.push(()=>X(s,"value",B)),t=new M({props:{title:"Favoritos",addressList:c[1]}}),{c(){e=h("div"),D(s.$$.fragment),a=S(),o=h("button"),d=h("span"),l=E("ios_share"),i=S(),D(t.$$.fragment),this.h()},l(n){e=v(n,"DIV",{class:!0});var p=b(e);L(s.$$.fragment,p),a=F(p),o=v(p,"BUTTON",{class:!0});var g=b(o);d=v(g,"SPAN",{class:!0});var $=b(d);l=q($,"ios_share"),$.forEach(f),g.forEach(f),p.forEach(f),i=F(n),L(t.$$.fragment,n),this.h()},h(){y(d,"class","material-icons-round text-2xl text-secondary-700"),y(o,"class","mr-2"),y(e,"class","flex flex-row justify-between items-center mb-2")},m(n,p){k(n,e,p),T(s,e,null),m(e,a),m(e,o),m(o,d),m(d,l),k(n,i,p),T(t,n,p),u=!0,_||(I=z(o,"click",c[2]),_=!0)},p(n,p){const g={};!r&&p&1&&(r=!0,g.value=n[0],H(()=>r=!1)),s.$set(g);const $={};p&2&&($.addressList=n[1]),t.$set($)},i(n){u||(A(s.$$.fragment,n),A(t.$$.fragment,n),u=!0)},o(n){x(s.$$.fragment,n),x(t.$$.fragment,n),u=!1},d(n){n&&f(e),j(s),n&&f(i),j(t,n),_=!1,I()}}}function ee(c){let e,s,r,a,o;const d=[Z,Y],l=[];function i(t,u){return t[1].length>0||t[0]?0:1}return r=i(c),a=l[r]=d[r](c),{c(){e=h("div"),s=h("div"),a.c(),this.h()},l(t){e=v(t,"DIV",{class:!0});var u=b(e);s=v(u,"DIV",{class:!0});var _=b(s);a.l(_),_.forEach(f),u.forEach(f),this.h()},h(){y(s,"class","bg-white rounded-t-2xl h-full py-3 px-5 overflow-y-auto custom-scroll"),y(e,"class","h-full w-full bg-secondary-200 ")},m(t,u){k(t,e,u),m(e,s),l[r].m(s,null),o=!0},p(t,[u]){let _=r;r=i(t),r===_?l[r].p(t,u):(U(),x(l[_],1,1,()=>{l[_]=null}),C(),a=l[r],a?a.p(t,u):(a=l[r]=d[r](t),a.c()),A(a,1),a.m(s,null))},i(t){o||(A(a),o=!0)},o(t){x(a),o=!1},d(t){t&&f(e),l[r].d()}}}function se(c){return Object.values(c).filter(s=>s.isFavorite)}function te(c,e,s){let r,a;G(c,R,i=>s(3,a=i));let o;async function d(){await Q(r)}function l(i){o=i,s(0,o)}return c.$$.update=()=>{c.$$.dirty&9&&s(1,r=J(se(a),o))},[o,r,d,a,l]}class ue extends N{constructor(e){super(),O(this,e,te,ee,P,{})}}export{ue as default};
