import{c as s}from"./singletons-09b47292.js";import{t as i,c as f,A as p,g as u,a as c}from"./stores-b2ad418c.js";var a=(t=>(t.Success="success",t.Danger="danger",t.Warning="warning",t.Info="info",t))(a||{});class g{constructor(e,o,r=3e3){this.message=e,this.type=o,this.duration=r}}const m={type:a.Info,duration:3e3};let l=null;function n(t,e={type:a.Info,duration:3e3}){const o=Object.assign(m,e);i.set(void 0),clearTimeout(l),i.set(new g(t,o.type,o.duration)),l=setTimeout(()=>{i.set(void 0)},o.duration)}s.disable_scroll_handling;const h=s.goto;s.invalidate;s.prefetch;s.prefetch_routes;s.before_navigate;const E=s.after_navigate;async function y(t,e="Copiado!",o="Erro ao copiar!"){try{await navigator.clipboard.writeText(t),n(e,{type:a.Success})}catch{n(o,{type:a.Danger})}}const v="https://viacep.com.br/ws/",w="json";async function F(t,e){try{f.set(void 0),e&&e.setAttribute("disabled","disabled");let o=b(t)||await A(t);f.set(o.information.cep),h("address-info")}catch(o){o.message==="400"?n("CEP inv\xE1lido",{type:a.Warning}):n("Verifique sua conex\xE3o com a internet.",{type:a.Danger})}finally{e&&e.removeAttribute("disabled")}}function N(t){t.isFavorite=!t.isFavorite,d(t)}async function D(t){let e=JSON.stringify(t.map(o=>o.information),null,4);await y(e,"JSON copiado!","Erro ao copiar JSON!")}async function A(t){try{const o=await(await fetch(`${v}${t.replace(/\D/g,"")}/${w}/`)).json();if(o.erro)throw new Error("400");let r=p.fromAPIJson(o);return d(r),r}catch(e){throw e}}function b(t){let e=u(c)[t];return e&&S(e),e}function d(t){let e=u(c);e[t.information.cep]=t,c.update(o=>e)}function S(t){t.lastUsed=new Date,d(t)}export{a as T,E as a,D as c,F as f,h as g,n as s,N as t};