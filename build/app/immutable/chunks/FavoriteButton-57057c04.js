import{S as F,i as N,s as P,l as p,m as _,n as y,h as u,p as f,b,T as I,E as w,r as v,u as A,I as O}from"./index-ca74555c.js";import{t as h,A as C,g as x,a as m}from"./stores-c7d0976d.js";class E extends Error{constructor(t,s,a,r=t){super(t),this.code=s,this.toastType=a,this.toastMessage=r}}var l=(e=>(e.Success="success",e.Danger="danger",e.Warning="warning",e.Info="info",e))(l||{});class T{constructor(t,s,a=3e3){this.message=t,this.type=s,this.duration=a}}const D={type:l.Info,duration:3e3};let S=null;function k(e,t={type:l.Info,duration:3e3}){const s=Object.assign(D,t);h.set(void 0),clearTimeout(S),h.set(new T(e,s.type,s.duration)),S=setTimeout(()=>{h.set(void 0)},s.duration)}async function J(e,t="Copiado!",s="Erro ao copiar!"){try{await navigator.clipboard.writeText(e),k(t,{type:l.Success})}catch{k(s,{type:l.Danger})}}const U="https://viacep.com.br/ws/",L="json";async function Q(e){try{return z(e)||await R(e)}catch(t){throw t}}function j(e){e.isFavorite=!e.isFavorite,g(e)}async function V(e){let t=JSON.stringify(e.map(s=>s.information),null,4);await J(t,"JSON copiado!","Erro ao copiar JSON!")}async function R(e){let t=null;try{t=await(await fetch(`${U}${e.replace(/\D/g,"")}/${L}/`)).json()}catch{throw new E("Ocorreu um erro ao buscar o CEP",500,l.Danger,"Erro ao buscar CEP")}if(t.erro)throw new E("CEP inv\xE1lido",400,l.Warning);let s=C.fromAPIJson(t);return g(s),s}function z(e){let t=x(m)[e];return t&&B(t),t}function g(e){let t=x(m);t[e.information.cep]=e,m.update(s=>t)}function B(e){e.lastUsed=new Date,g(e)}function H(e){let t,s;return{c(){t=p("span"),s=v("bookmark_border"),this.h()},l(a){t=_(a,"SPAN",{class:!0});var r=y(t);s=A(r,"bookmark_border"),r.forEach(u),this.h()},h(){f(t,"class","material-icons-round text-2xl text-secondary-700")},m(a,r){b(a,t,r),O(t,s)},d(a){a&&u(t)}}}function M(e){let t,s;return{c(){t=p("span"),s=v("bookmark"),this.h()},l(a){t=_(a,"SPAN",{class:!0});var r=y(t);s=A(r,"bookmark"),r.forEach(u),this.h()},h(){f(t,"class","material-icons-round text-2xl text-secondary-700")},m(a,r){b(a,t,r),O(t,s)},d(a){a&&u(t)}}}function W(e){let t,s,a,r;function d(o,c){return o[0].isFavorite?M:H}let n=d(e),i=n(e);return{c(){t=p("button"),i.c(),this.h()},l(o){t=_(o,"BUTTON",{class:!0});var c=y(t);i.l(c),c.forEach(u),this.h()},h(){f(t,"class",s="flex "+(e[1]||""))},m(o,c){b(o,t,c),i.m(t,null),a||(r=I(t,"click",e[2]),a=!0)},p(o,[c]){n!==(n=d(o))&&(i.d(1),i=n(o),i&&(i.c(),i.m(t,null))),c&2&&s!==(s="flex "+(o[1]||""))&&f(t,"class",s)},i:w,o:w,d(o){o&&u(t),i.d(),a=!1,r()}}}function q(e,t,s){let{address:a}=t,{class:r=""}=t;const d=()=>j(a);return e.$$set=n=>{"address"in n&&s(0,a=n.address),"class"in n&&s(1,r=n.class)},[a,r,d]}class X extends F{constructor(t){super(),N(this,t,q,W,P,{address:0,class:1})}}export{E as C,X as F,l as T,V as c,Q as f,k as s};
