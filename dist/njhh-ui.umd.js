(function(G,Z){typeof exports=="object"&&typeof module<"u"?Z(exports):typeof define=="function"&&define.amd?define(["exports"],Z):(G=typeof globalThis<"u"?globalThis:G||self,Z(G.NjhhUi={}))})(this,function(G){"use strict";function Z(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function be(e){if(_(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=I(o)?Kt(o):be(o);if(r)for(const s in r)t[s]=r[s]}return t}else{if(I(e))return e;if(b(e))return e}}const At=/;(?![^(]*\))/g,zt=/:(.+)/;function Kt(e){const t={};return e.split(At).forEach(n=>{if(n){const o=n.split(zt);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Oe(e){let t="";if(I(e))t=e;else if(_(e))for(let n=0;n<e.length;n++){const o=Oe(e[n]);o&&(t+=o+" ")}else if(b(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const x=process.env.NODE_ENV!=="production"?Object.freeze({}):{},Ht=process.env.NODE_ENV!=="production"?Object.freeze([]):[],Je=()=>{},Wt=()=>!1,Ut=/^on[^a-z]/,Bt=e=>Ut.test(e),R=Object.assign,Jt=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},qt=Object.prototype.hasOwnProperty,h=(e,t)=>qt.call(e,t),_=Array.isArray,L=e=>re(e)==="[object Map]",Gt=e=>re(e)==="[object Set]",w=e=>typeof e=="function",I=e=>typeof e=="string",Se=e=>typeof e=="symbol",b=e=>e!==null&&typeof e=="object",Lt=e=>b(e)&&w(e.then)&&w(e.catch),Yt=Object.prototype.toString,re=e=>Yt.call(e),qe=e=>re(e).slice(8,-1),Qt=e=>re(e)==="[object Object]",Ve=e=>I(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xt=(e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))})(e=>e.charAt(0).toUpperCase()+e.slice(1)),oe=(e,t)=>!Object.is(e,t),Zt=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})};let Ge;const kt=()=>Ge||(Ge=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Le(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let en;function tn(e,t=en){t&&t.active&&t.effects.push(e)}const xe=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ye=e=>(e.w&M)>0,Qe=e=>(e.n&M)>0,nn=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=M},rn=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const r=t[o];Ye(r)&&!Qe(r)?r.delete(e):t[n++]=r,r.w&=~M,r.n&=~M}t.length=n}},ye=new WeakMap;let k=0,M=1;const De=30;let O;const z=Symbol(process.env.NODE_ENV!=="production"?"iterate":""),ve=Symbol(process.env.NODE_ENV!=="production"?"Map key iterate":"");class on{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,tn(this,o)}run(){if(!this.active)return this.fn();let t=O,n=K;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=O,O=this,K=!0,M=1<<++k,k<=De?nn(this):Xe(this),this.fn()}finally{k<=De&&rn(this),M=1<<--k,O=this.parent,K=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){O===this?this.deferStop=!0:this.active&&(Xe(this),this.onStop&&this.onStop(),this.active=!1)}}function Xe(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let K=!0;const Ze=[];function ke(){Ze.push(K),K=!1}function et(){const e=Ze.pop();K=e===void 0?!0:e}function D(e,t,n){if(K&&O){let o=ye.get(e);o||ye.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=xe());const s=process.env.NODE_ENV!=="production"?{effect:O,target:e,type:t,key:n}:void 0;sn(r,s)}}function sn(e,t){let n=!1;k<=De?Qe(e)||(e.n|=M,n=!Ye(e)):n=!e.has(O),n&&(e.add(O),O.deps.push(e),process.env.NODE_ENV!=="production"&&O.onTrack&&O.onTrack(Object.assign({effect:O},t)))}function P(e,t,n,o,r,s){const i=ye.get(e);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(n==="length"&&_(e))i.forEach((f,d)=>{(d==="length"||d>=o)&&c.push(f)});else switch(n!==void 0&&c.push(i.get(n)),t){case"add":_(e)?Ve(n)&&c.push(i.get("length")):(c.push(i.get(z)),L(e)&&c.push(i.get(ve)));break;case"delete":_(e)||(c.push(i.get(z)),L(e)&&c.push(i.get(ve)));break;case"set":L(e)&&c.push(i.get(z));break}const u=process.env.NODE_ENV!=="production"?{target:e,type:t,key:n,newValue:o,oldValue:r,oldTarget:s}:void 0;if(c.length===1)c[0]&&(process.env.NODE_ENV!=="production"?se(c[0],u):se(c[0]));else{const f=[];for(const d of c)d&&f.push(...d);process.env.NODE_ENV!=="production"?se(xe(f),u):se(xe(f))}}function se(e,t){const n=_(e)?e:[...e];for(const o of n)o.computed&&tt(o,t);for(const o of n)o.computed||tt(o,t)}function tt(e,t){(e!==O||e.allowRecurse)&&(process.env.NODE_ENV!=="production"&&e.onTrigger&&e.onTrigger(R({effect:e},t)),e.scheduler?e.scheduler():e.run())}const cn=Z("__proto__,__v_isRef,__isVue"),nt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Se)),ln=Re(),un=Re(!0),an=Re(!0,!0),rt=fn();function fn(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=p(this);for(let s=0,i=this.length;s<i;s++)D(o,"get",s+"");const r=o[t](...n);return r===-1||r===!1?o[t](...n.map(p)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ke();const o=p(this)[t].apply(this,n);return et(),o}}),e}function Re(e=!1,t=!1){return function(o,r,s){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&s===(e?t?pt:ft:t?Dn:at).get(o))return o;const i=_(o);if(!e&&i&&h(rt,r))return Reflect.get(rt,r,s);const c=Reflect.get(o,r,s);return(Se(r)?nt.has(r):cn(r))||(e||D(o,"get",r),t)?c:S(c)?i&&Ve(r)?c:c.value:b(c)?e?ht(c):dt(c):c}}const pn=dn();function dn(e=!1){return function(n,o,r,s){let i=n[o];if(W(i)&&S(i)&&!S(r))return!1;if(!e&&(!$e(r)&&!W(r)&&(i=p(i),r=p(r)),!_(n)&&S(i)&&!S(r)))return i.value=r,!0;const c=_(n)&&Ve(o)?Number(o)<n.length:h(n,o),u=Reflect.set(n,o,r,s);return n===p(s)&&(c?oe(r,i)&&P(n,"set",o,r,i):P(n,"add",o,r)),u}}function hn(e,t){const n=h(e,t),o=e[t],r=Reflect.deleteProperty(e,t);return r&&n&&P(e,"delete",t,void 0,o),r}function _n(e,t){const n=Reflect.has(e,t);return(!Se(t)||!nt.has(t))&&D(e,"has",t),n}function gn(e){return D(e,"iterate",_(e)?"length":z),Reflect.ownKeys(e)}const mn={get:ln,set:pn,deleteProperty:hn,has:_n,ownKeys:gn},ot={get:un,set(e,t){return process.env.NODE_ENV!=="production"&&Le(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return process.env.NODE_ENV!=="production"&&Le(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},En=R({},ot,{get:an}),Ie=e=>e,ie=e=>Reflect.getPrototypeOf(e);function ce(e,t,n=!1,o=!1){e=e.__v_raw;const r=p(e),s=p(t);n||(t!==s&&D(r,"get",t),D(r,"get",s));const{has:i}=ie(r),c=o?Ie:n?Fe:Pe;if(i.call(r,t))return c(e.get(t));if(i.call(r,s))return c(e.get(s));e!==r&&e.get(t)}function le(e,t=!1){const n=this.__v_raw,o=p(n),r=p(e);return t||(e!==r&&D(o,"has",e),D(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function ue(e,t=!1){return e=e.__v_raw,!t&&D(p(e),"iterate",z),Reflect.get(e,"size",e)}function st(e){e=p(e);const t=p(this);return ie(t).has.call(t,e)||(t.add(e),P(t,"add",e,e)),this}function it(e,t){t=p(t);const n=p(this),{has:o,get:r}=ie(n);let s=o.call(n,e);s?process.env.NODE_ENV!=="production"&&ut(n,o,e):(e=p(e),s=o.call(n,e));const i=r.call(n,e);return n.set(e,t),s?oe(t,i)&&P(n,"set",e,t,i):P(n,"add",e,t),this}function ct(e){const t=p(this),{has:n,get:o}=ie(t);let r=n.call(t,e);r?process.env.NODE_ENV!=="production"&&ut(t,n,e):(e=p(e),r=n.call(t,e));const s=o?o.call(t,e):void 0,i=t.delete(e);return r&&P(t,"delete",e,void 0,s),i}function lt(){const e=p(this),t=e.size!==0,n=process.env.NODE_ENV!=="production"?L(e)?new Map(e):new Set(e):void 0,o=e.clear();return t&&P(e,"clear",void 0,void 0,n),o}function ae(e,t){return function(o,r){const s=this,i=s.__v_raw,c=p(i),u=t?Ie:e?Fe:Pe;return!e&&D(c,"iterate",z),i.forEach((f,d)=>o.call(r,u(f),u(d),s))}}function fe(e,t,n){return function(...o){const r=this.__v_raw,s=p(r),i=L(s),c=e==="entries"||e===Symbol.iterator&&i,u=e==="keys"&&i,f=r[e](...o),d=n?Ie:t?Fe:Pe;return!t&&D(s,"iterate",u?ve:z),{next(){const{value:l,done:a}=f.next();return a?{value:l,done:a}:{value:c?[d(l[0]),d(l[1])]:d(l),done:a}},[Symbol.iterator](){return this}}}}function F(e){return function(...t){if(process.env.NODE_ENV!=="production"){const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${Xt(e)} operation ${n}failed: target is readonly.`,p(this))}return e==="delete"?!1:this}}function wn(){const e={get(s){return ce(this,s)},get size(){return ue(this)},has:le,add:st,set:it,delete:ct,clear:lt,forEach:ae(!1,!1)},t={get(s){return ce(this,s,!1,!0)},get size(){return ue(this)},has:le,add:st,set:it,delete:ct,clear:lt,forEach:ae(!1,!0)},n={get(s){return ce(this,s,!0)},get size(){return ue(this,!0)},has(s){return le.call(this,s,!0)},add:F("add"),set:F("set"),delete:F("delete"),clear:F("clear"),forEach:ae(!0,!1)},o={get(s){return ce(this,s,!0,!0)},get size(){return ue(this,!0)},has(s){return le.call(this,s,!0)},add:F("add"),set:F("set"),delete:F("delete"),clear:F("clear"),forEach:ae(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=fe(s,!1,!1),n[s]=fe(s,!0,!1),t[s]=fe(s,!1,!0),o[s]=fe(s,!0,!0)}),[e,n,t,o]}const[Nn,bn,On,Sn]=wn();function Te(e,t){const n=t?e?Sn:On:e?bn:Nn;return(o,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(h(n,r)&&r in o?n:o,r,s)}const Vn={get:Te(!1,!1)},xn={get:Te(!0,!1)},yn={get:Te(!0,!0)};function ut(e,t,n){const o=p(n);if(o!==n&&t.call(e,o)){const r=qe(e);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const at=new WeakMap,Dn=new WeakMap,ft=new WeakMap,pt=new WeakMap;function vn(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rn(e){return e.__v_skip||!Object.isExtensible(e)?0:vn(qe(e))}function dt(e){return W(e)?e:Ce(e,!1,mn,Vn,at)}function ht(e){return Ce(e,!0,ot,xn,ft)}function pe(e){return Ce(e,!0,En,yn,pt)}function Ce(e,t,n,o,r){if(!b(e))return process.env.NODE_ENV!=="production"&&console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const i=Rn(e);if(i===0)return e;const c=new Proxy(e,i===2?o:n);return r.set(e,c),c}function H(e){return W(e)?H(e.__v_raw):!!(e&&e.__v_isReactive)}function W(e){return!!(e&&e.__v_isReadonly)}function $e(e){return!!(e&&e.__v_isShallow)}function Me(e){return H(e)||W(e)}function p(e){const t=e&&e.__v_raw;return t?p(t):e}function In(e){return Zt(e,"__v_skip",!0),e}const Pe=e=>b(e)?dt(e):e,Fe=e=>b(e)?ht(e):e;function S(e){return!!(e&&e.__v_isRef===!0)}function Tn(e){return S(e)?e.value:e}const Cn={get:(e,t,n)=>Tn(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return S(r)&&!S(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function $n(e){return H(e)?e:new Proxy(e,Cn)}const U=[];function Mn(e){U.push(e)}function Pn(){U.pop()}function V(e,...t){ke();const n=U.length?U[U.length-1].component:null,o=n&&n.appContext.config.warnHandler,r=Fn();if(o)B(o,n,11,[e+t.join(""),n&&n.proxy,r.map(({vnode:s})=>`at <${Ft(n,s.type)}>`).join(`
`),r]);else{const s=[`[Vue warn]: ${e}`,...t];r.length&&s.push(`
`,...jn(r)),console.warn(...s)}et()}function Fn(){let e=U[U.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function jn(e){const t=[];return e.forEach((n,o)=>{t.push(...o===0?[]:[`
`],...An(n))}),t}function An({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,r=` at <${Ft(e.component,e.type,o)}`,s=">"+n;return e.props?[r,...zn(e.props),s]:[r+s]}function zn(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(o=>{t.push(..._t(o,e[o]))}),n.length>3&&t.push(" ..."),t}function _t(e,t,n){return I(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:S(t)?(t=_t(e,p(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):w(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=p(t),n?t:[`${e}=`,t])}const gt={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function B(e,t,n,o){let r;try{r=o?e(...o):e()}catch(s){mt(s,t,n)}return r}function je(e,t,n,o){if(w(e)){const s=B(e,t,n,o);return s&&Lt(s)&&s.catch(i=>{mt(i,t,n)}),s}const r=[];for(let s=0;s<e.length;s++)r.push(je(e[s],t,n,o));return r}function mt(e,t,n,o=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const i=t.proxy,c=process.env.NODE_ENV!=="production"?gt[n]:n;for(;s;){const f=s.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,i,c)===!1)return}s=s.parent}const u=t.appContext.config.errorHandler;if(u){B(u,null,10,[e,i,c]);return}}Kn(e,n,r,o)}function Kn(e,t,n,o=!0){if(process.env.NODE_ENV!=="production"){const r=gt[t];if(n&&Mn(n),V(`Unhandled error${r?` during execution of ${r}`:""}`),n&&Pn(),o)throw e;console.error(e)}else console.error(e)}let de=!1,Ae=!1;const T=[];let j=0;const Y=[];let $=null,A=0;const Et=Promise.resolve();let ze=null;const Hn=100;function Wn(e){const t=ze||Et;return e?t.then(this?e.bind(this):e):t}function Un(e){let t=j+1,n=T.length;for(;t<n;){const o=t+n>>>1;ee(T[o])<e?t=o+1:n=o}return t}function Ke(e){(!T.length||!T.includes(e,de&&e.allowRecurse?j+1:j))&&(e.id==null?T.push(e):T.splice(Un(e.id),0,e),wt())}function wt(){!de&&!Ae&&(Ae=!0,ze=Et.then(bt))}function Nt(e){_(e)?Y.push(...e):(!$||!$.includes(e,e.allowRecurse?A+1:A))&&Y.push(e),wt()}function Bn(e){if(Y.length){const t=[...new Set(Y)];if(Y.length=0,$){$.push(...t);return}for($=t,process.env.NODE_ENV!=="production"&&(e=e||new Map),$.sort((n,o)=>ee(n)-ee(o)),A=0;A<$.length;A++)process.env.NODE_ENV!=="production"&&Ot(e,$[A])||$[A]();$=null,A=0}}const ee=e=>e.id==null?1/0:e.id,Jn=(e,t)=>{const n=ee(e)-ee(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function bt(e){Ae=!1,de=!0,process.env.NODE_ENV!=="production"&&(e=e||new Map),T.sort(Jn);const t=process.env.NODE_ENV!=="production"?n=>Ot(e,n):Je;try{for(j=0;j<T.length;j++){const n=T[j];if(n&&n.active!==!1){if(process.env.NODE_ENV!=="production"&&t(n))continue;B(n,null,14)}}}finally{j=0,T.length=0,Bn(e),de=!1,ze=null,(T.length||Y.length)&&bt(e)}}function Ot(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>Hn){const o=t.ownerInstance,r=o&&Pt(o.type);return V(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}const te=new Set;process.env.NODE_ENV!=="production"&&(kt().__VUE_HMR_RUNTIME__={createRecord:He(qn),rerender:He(Gn),reload:He(Ln)});const he=new Map;function qn(e,t){return he.has(e)?!1:(he.set(e,{initialDef:ne(t),instances:new Set}),!0)}function ne(e){return jt(e)?e.__vccOpts:e}function Gn(e,t){const n=he.get(e);!n||(n.initialDef.render=t,[...n.instances].forEach(o=>{t&&(o.render=t,ne(o.type).render=t),o.renderCache=[],o.update()}))}function Ln(e,t){const n=he.get(e);if(!n)return;t=ne(t),St(n.initialDef,t);const o=[...n.instances];for(const r of o){const s=ne(r.type);te.has(s)||(s!==n.initialDef&&St(s,t),te.add(s)),r.appContext.optionsCache.delete(r.type),r.ceReload?(te.add(s),r.ceReload(t.styles),te.delete(s)):r.parent?(Ke(r.parent.update),r.parent.type.__asyncLoader&&r.parent.ceReload&&r.parent.ceReload(t.styles)):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Nt(()=>{for(const r of o)te.delete(ne(r.type))})}function St(e,t){R(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function He(e){return(t,n)=>{try{return e(t,n)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let J=null,Yn=null;function Fr(){}const Qn=e=>e.__isSuspense;function Xn(e,t){t&&t.pendingBranch?_(e)?t.effects.push(...e):t.effects.push(e):Nt(e)}const Vt={};function Zn(e,t,{immediate:n,deep:o,flush:r,onTrack:s,onTrigger:i}=x){process.env.NODE_ENV!=="production"&&!t&&(n!==void 0&&V('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&V('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=g=>{V("Invalid watch source: ",g,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=X;let f,d=!1,l=!1;if(S(e)?(f=()=>e.value,d=$e(e)):H(e)?(f=()=>e,o=!0):_(e)?(l=!0,d=e.some(g=>H(g)||$e(g)),f=()=>e.map(g=>{if(S(g))return g.value;if(H(g))return Q(g);if(w(g))return B(g,u,2);process.env.NODE_ENV!=="production"&&c(g)})):w(e)?t?f=()=>B(e,u,2):f=()=>{if(!(u&&u.isUnmounted))return a&&a(),je(e,u,3,[m])}:(f=Je,process.env.NODE_ENV!=="production"&&c(e)),t&&o){const g=f;f=()=>Q(g())}let a,m=g=>{a=v.onStop=()=>{B(g,u,4)}},E=l?[]:Vt;const y=()=>{if(!!v.active)if(t){const g=v.run();(o||d||(l?g.some(($r,Mr)=>oe($r,E[Mr])):oe(g,E)))&&(a&&a(),je(t,u,3,[g,E===Vt?void 0:E,m]),E=g)}else v.run()};y.allowRecurse=!!t;let Ne;r==="sync"?Ne=y:r==="post"?Ne=()=>Dt(y,u&&u.suspense):(y.pre=!0,u&&(y.id=u.uid),Ne=()=>Ke(y));const v=new on(f,Ne);return process.env.NODE_ENV!=="production"&&(v.onTrack=s,v.onTrigger=i),t?n?y():E=v.run():r==="post"?Dt(v.run.bind(v),u&&u.suspense):v.run(),()=>{v.stop(),u&&u.scope&&Jt(u.scope.effects,v)}}function kn(e,t,n){const o=this.proxy,r=I(e)?e.includes(".")?er(o,e):()=>o[e]:e.bind(o,o);let s;w(t)?s=t:(s=t.handler,n=t);const i=X;Mt(this);const c=Zn(r,s.bind(o),n);return i?Mt(i):Or(),c}function er(e,t){const n=t.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}function Q(e,t){if(!b(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),S(e))Q(e.value,t);else if(_(e))for(let n=0;n<e.length;n++)Q(e[n],t);else if(Gt(e)||L(e))e.forEach(n=>{Q(n,t)});else if(Qt(e))for(const n in e)Q(e[n],t);return e}const tr=Symbol(),We=e=>e?Sr(e)?Vr(e)||e.proxy:We(e.parent):null,_e=R(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>process.env.NODE_ENV!=="production"?pe(e.props):e.props,$attrs:e=>process.env.NODE_ENV!=="production"?pe(e.attrs):e.attrs,$slots:e=>process.env.NODE_ENV!=="production"?pe(e.slots):e.slots,$refs:e=>process.env.NODE_ENV!=="production"?pe(e.refs):e.refs,$parent:e=>We(e.parent),$root:e=>We(e.root),$emit:e=>e.emit,$options:e=>or(e),$forceUpdate:e=>e.f||(e.f=()=>Ke(e.update)),$nextTick:e=>e.n||(e.n=Wn.bind(e.proxy)),$watch:e=>kn.bind(e)}),nr=e=>e==="_"||e==="$",rr={get({_:e},t){const{ctx:n,setupState:o,data:r,props:s,accessCache:i,type:c,appContext:u}=e;if(process.env.NODE_ENV!=="production"&&t==="__isVue")return!0;if(process.env.NODE_ENV!=="production"&&o!==x&&o.__isScriptSetup&&h(o,t))return o[t];let f;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return o[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(o!==x&&h(o,t))return i[t]=1,o[t];if(r!==x&&h(r,t))return i[t]=2,r[t];if((f=e.propsOptions[0])&&h(f,t))return i[t]=3,s[t];if(n!==x&&h(n,t))return i[t]=4,n[t];i[t]=0}}const d=_e[t];let l,a;if(d)return t==="$attrs"&&(D(e,"get",t),process.env.NODE_ENV!=="production"&&void 0),d(e);if((l=c.__cssModules)&&(l=l[t]))return l;if(n!==x&&h(n,t))return i[t]=4,n[t];if(a=u.config.globalProperties,h(a,t))return a[t];process.env.NODE_ENV!=="production"&&J&&(!I(t)||t.indexOf("__v")!==0)&&(r!==x&&nr(t[0])&&h(r,t)?V(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===J&&V(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:o,setupState:r,ctx:s}=e;return r!==x&&h(r,t)?(r[t]=n,!0):o!==x&&h(o,t)?(o[t]=n,!0):h(e.props,t)?(process.env.NODE_ENV!=="production"&&V(`Attempting to mutate prop "${t}". Props are readonly.`,e),!1):t[0]==="$"&&t.slice(1)in e?(process.env.NODE_ENV!=="production"&&V(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`,e),!1):(process.env.NODE_ENV!=="production"&&t in e.appContext.config.globalProperties?Object.defineProperty(s,t,{enumerable:!0,configurable:!0,value:n}):s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:s}},i){let c;return!!n[i]||e!==x&&h(e,i)||t!==x&&h(t,i)||(c=s[0])&&h(c,i)||h(o,i)||h(_e,i)||h(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:h(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};process.env.NODE_ENV!=="production"&&(rr.ownKeys=e=>(V("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e)));function or(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,c=s.get(t);let u;return c?u=c:!r.length&&!n&&!o?u=t:(u={},r.length&&r.forEach(f=>ge(u,f,i,!0)),ge(u,t,i)),b(t)&&s.set(t,u),u}function ge(e,t,n,o=!1){const{mixins:r,extends:s}=t;s&&ge(e,s,n,!0),r&&r.forEach(i=>ge(e,i,n,!0));for(const i in t)if(o&&i==="expose")process.env.NODE_ENV!=="production"&&V('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=sr[i]||n&&n[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const sr={data:xt,props:q,emits:q,methods:q,computed:q,beforeCreate:N,created:N,beforeMount:N,mounted:N,beforeUpdate:N,updated:N,beforeDestroy:N,beforeUnmount:N,destroyed:N,unmounted:N,activated:N,deactivated:N,errorCaptured:N,serverPrefetch:N,components:q,directives:q,watch:cr,provide:xt,inject:ir};function xt(e,t){return t?e?function(){return R(w(e)?e.call(this,this):e,w(t)?t.call(this,this):t)}:t:e}function ir(e,t){return q(yt(e),yt(t))}function yt(e){if(_(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function N(e,t){return e?[...new Set([].concat(e,t))]:t}function q(e,t){return e?R(R(Object.create(null),e),t):t}function cr(e,t){if(!e)return t;if(!t)return e;const n=R(Object.create(null),e);for(const o in t)n[o]=N(e[o],t[o]);return n}function lr(){return{app:null,config:{isNativeTag:Wt,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}const Dt=Xn,ur=e=>e.__isTeleport,vt=Symbol(process.env.NODE_ENV!=="production"?"Fragment":void 0),ar=Symbol(process.env.NODE_ENV!=="production"?"Text":void 0),fr=Symbol(process.env.NODE_ENV!=="production"?"Comment":void 0);Symbol(process.env.NODE_ENV!=="production"?"Static":void 0);const me=[];let C=null;function pr(e=!1){me.push(C=e?null:[])}function dr(){me.pop(),C=me[me.length-1]||null}function hr(e){return e.dynamicChildren=C||Ht,dr(),C&&C.push(e),e}function _r(e,t,n,o,r,s){return hr(Tt(e,t,n,o,r,s,!0))}function gr(e){return e?e.__v_isVNode===!0:!1}const mr=(...e)=>Ct(...e),Rt="__vInternal",It=({key:e})=>e!=null?e:null,Ee=({ref:e,ref_key:t,ref_for:n})=>e!=null?I(e)||S(e)||w(e)?{i:J,r:e,k:t,f:!!n}:e:null;function Tt(e,t=null,n=null,o=0,r=null,s=e===vt?0:1,i=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&It(t),ref:t&&Ee(t),scopeId:Yn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null};return c?(Ue(u,n),s&128&&e.normalize(u)):n&&(u.shapeFlag|=I(n)?8:16),process.env.NODE_ENV!=="production"&&u.key!==u.key&&V("VNode created with invalid key (NaN). VNode type:",u.type),!i&&C&&(u.patchFlag>0||s&6)&&u.patchFlag!==32&&C.push(u),u}const Er=process.env.NODE_ENV!=="production"?mr:Ct;function Ct(e,t=null,n=null,o=0,r=null,s=!1){if((!e||e===tr)&&(process.env.NODE_ENV!=="production"&&!e&&V(`Invalid vnode type when creating vnode: ${e}.`),e=fr),gr(e)){const c=we(e,t,!0);return n&&Ue(c,n),!s&&C&&(c.shapeFlag&6?C[C.indexOf(e)]=c:C.push(c)),c.patchFlag|=-2,c}if(jt(e)&&(e=e.__vccOpts),t){t=wr(t);let{class:c,style:u}=t;c&&!I(c)&&(t.class=Oe(c)),b(u)&&(Me(u)&&!_(u)&&(u=R({},u)),t.style=be(u))}const i=I(e)?1:Qn(e)?128:ur(e)?64:b(e)?4:w(e)?2:0;return process.env.NODE_ENV!=="production"&&i&4&&Me(e)&&(e=p(e),V("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),Tt(e,t,n,o,r,i,s,!0)}function wr(e){return e?Me(e)||Rt in e?R({},e):e:null}function we(e,t,n=!1){const{props:o,ref:r,patchFlag:s,children:i}=e,c=t?br(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&It(c),ref:t&&t.ref?n&&r?_(r)?r.concat(Ee(t)):[r,Ee(t)]:Ee(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:process.env.NODE_ENV!=="production"&&s===-1&&_(i)?i.map($t):i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==vt?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&we(e.ssContent),ssFallback:e.ssFallback&&we(e.ssFallback),el:e.el,anchor:e.anchor}}function $t(e){const t=we(e);return _(e.children)&&(t.children=e.children.map($t)),t}function Nr(e=" ",t=0){return Er(ar,null,e,t)}function Ue(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(_(t))n=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),Ue(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Rt in t)?t._ctx=J:r===3&&J&&(J.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else w(t)?(t={default:t,_ctx:J},n=32):(t=String(t),o&64?(n=16,t=[Nr(t)]):n=8);e.children=t,e.shapeFlag|=n}function br(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=Oe([t.class,o.class]));else if(r==="style")t.style=be([t.style,o.style]);else if(Bt(r)){const s=t[r],i=o[r];i&&s!==i&&!(_(s)&&s.includes(i))&&(t[r]=s?[].concat(s,i):i)}else r!==""&&(t[r]=o[r])}return t}lr();let X=null;const Mt=e=>{X=e,e.scope.on()},Or=()=>{X&&X.scope.off(),X=null};function Sr(e){return e.vnode.shapeFlag&4}function Vr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy($n(In(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in _e)return _e[n](e)}}))}const xr=/(?:^|[-_])(\w)/g,yr=e=>e.replace(xr,t=>t.toUpperCase()).replace(/[-_]/g,"");function Pt(e,t=!0){return w(e)?e.displayName||e.name:e.name||t&&e.__name}function Ft(e,t,n=!1){let o=Pt(t);if(!o&&t.__file){const r=t.__file.match(/([^/\\]+)\.\w+$/);r&&(o=r[1])}if(!o&&e&&e.parent){const r=s=>{for(const i in s)if(s[i]===t)return i};o=r(e.components||e.parent.type.components)||r(e.appContext.components)}return o?yr(o):n?"App":"Anonymous"}function jt(e){return w(e)&&"__vccOpts"in e}Symbol(process.env.NODE_ENV!=="production"?"ssrContext":"");function Be(e){return!!(e&&e.__v_isShallow)}function Dr(){if(process.env.NODE_ENV==="production"||typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},o={style:"color:#9d288c"},r={header(l){return b(l)?l.__isVue?["div",e,"VueInstance"]:S(l)?["div",{},["span",e,d(l)],"<",c(l.value),">"]:H(l)?["div",{},["span",e,Be(l)?"ShallowReactive":"Reactive"],"<",c(l),`>${W(l)?" (readonly)":""}`]:W(l)?["div",{},["span",e,Be(l)?"ShallowReadonly":"Readonly"],"<",c(l),">"]:null:null},hasBody(l){return l&&l.__isVue},body(l){if(l&&l.__isVue)return["div",{},...s(l.$)]}};function s(l){const a=[];l.type.props&&l.props&&a.push(i("props",p(l.props))),l.setupState!==x&&a.push(i("setup",l.setupState)),l.data!==x&&a.push(i("data",p(l.data)));const m=u(l,"computed");m&&a.push(i("computed",m));const E=u(l,"inject");return E&&a.push(i("injected",E)),a.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:l}]]),a}function i(l,a){return a=R({},a),Object.keys(a).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},l],["div",{style:"padding-left:1.25em"},...Object.keys(a).map(m=>["div",{},["span",o,m+": "],c(a[m],!1)])]]:["span",{}]}function c(l,a=!0){return typeof l=="number"?["span",t,l]:typeof l=="string"?["span",n,JSON.stringify(l)]:typeof l=="boolean"?["span",o,l]:b(l)?["object",{object:a?p(l):l}]:["span",n,String(l)]}function u(l,a){const m=l.type;if(w(m))return;const E={};for(const y in l.ctx)f(m,y,a)&&(E[y]=l.ctx[y]);return E}function f(l,a,m){const E=l[m];if(_(E)&&E.includes(a)||b(E)&&a in E||l.extends&&f(l.extends,a,m)||l.mixins&&l.mixins.some(y=>f(y,a,m)))return!0}function d(l){return Be(l)?"ShallowRef":l.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}function vr(){Dr()}process.env.NODE_ENV!=="production"&&vr();const Rr=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},Ir={};function Tr(e,t){return pr(),_r("div",null,"11")}const Cr=Rr(Ir,[["render",Tr],["__file","/Users/wangchen/WebstormProjects/njhh-ui/lib/demo-ui.vue"]]);G.DemoUi=Cr,Object.defineProperties(G,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
