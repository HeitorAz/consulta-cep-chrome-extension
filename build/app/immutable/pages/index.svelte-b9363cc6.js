import{S as v,i as $,s as x,l as f,a as C,m as d,n as _,h as m,c as I,p as i,b as D,I as h,T as E,E as y,f as b,t as w,V,w as k,x as A,y as P,B as S}from"../chunks/index-ca74555c.js";import{g as T}from"../chunks/navigation-308dbfc5.js";/* empty css                                                             */import"../chunks/singletons-09b47292.js";function j(a){let t,n,e,l,o,c,p,s=q;return{c(){t=f("div"),n=f("div"),e=f("input"),l=C(),this.h()},l(r){t=d(r,"DIV",{class:!0});var u=_(t);n=d(u,"DIV",{class:!0});var g=_(n);e=d(g,"INPUT",{autocomplete:!0,type:!0,placeholder:!0,class:!0,maxlength:!0}),g.forEach(m),l=I(u),u.forEach(m),this.h()},h(){i(e,"autocomplete","false"),i(e,"type","tel"),i(e,"placeholder","Digite um CEP..."),i(e,"class","outline-0 h-5/6 w-11/12 text-center text-xl font-semibold"),i(e,"maxlength","9"),i(n,"class","bg-white rounded-t-2xl h-full flex justify-center items-center"),i(t,"class","h-full w-full bg-secondary-200 relative")},m(r,u){D(r,t,u),h(t,n),h(n,e),a[2](e),h(t,l),o=!0,c||(p=E(e,"input",a[1]),c=!0)},p:y,i(r){o||(b(s),o=!0)},o(r){w(s),o=!1},d(r){r&&m(t),a[2](null),c=!1,p()}}}let q=!1;function B(a){return a.length===9}function F(a,t,n){let e;async function l(){o();let s=e.value;B(s)&&await c(s)}function o(){const r=e.value.replace(/\D/g,"").substring(0,8).replace(/(\d{5})(\d)/,"$1-$2");n(0,e.value=r,e)}async function c(s){await T(`address-info/${s}`)}function p(s){V[s?"unshift":"push"](()=>{e=s,n(0,e)})}return[e,l,p]}class M extends v{constructor(t){super(),$(this,t,F,j,x,{})}}function N(a){let t,n;return t=new M({}),{c(){k(t.$$.fragment)},l(e){A(t.$$.fragment,e)},m(e,l){P(t,e,l),n=!0},p:y,i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){w(t.$$.fragment,e),n=!1},d(e){S(t,e)}}}const H=!0;class J extends v{constructor(t){super(),$(this,t,null,N,x,{})}}export{J as default,H as prerender};