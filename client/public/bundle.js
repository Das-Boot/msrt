var app=function(){"use strict";function e(){}const t=e=>e;function n(e,t){for(const n in t)e[n]=t[n];return e}function r(e){return e()}function i(){return Object.create(null)}function s(e){e.forEach(r)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let c;function u(t,n,r){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function l(e,t,n,r){if(e){const i=h(e,t,n,r);return e[0](i)}}function h(e,t,r,i){return e[1]&&i?n(r.ctx.slice(),e[1](i(t))):r.ctx}function d(e,t,n,r){if(e[2]&&r){const i=e[2](r(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|i[r];return e}return t.dirty|i}return t.dirty}function f(e,t,n,r,i,s){if(i){const o=h(t,n,r,s);e.p(o,i)}}function p(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function m(e,t,n){return e.set(n),t}function g(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const y="undefined"!=typeof window;let v=y?()=>window.performance.now():()=>Date.now(),w=y?e=>requestAnimationFrame(e):e;const _=new Set;function b(e){_.forEach((t=>{t.c(e)||(_.delete(t),t.f())})),0!==_.size&&w(b)}function I(e){let t;return 0===_.size&&w(b),{promise:new Promise((n=>{_.add(t={c:e,f:n})})),abort(){_.delete(t)}}}function T(e,t){e.appendChild(t)}function E(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function k(e){const t=N("style");return function(e,t){T(e.head||e,t),t.sheet}(E(e),t),t.sheet}function S(e,t,n){e.insertBefore(t,n||null)}function C(e){e.parentNode&&e.parentNode.removeChild(e)}function A(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function N(e){return document.createElement(e)}function R(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function D(){return x(" ")}function O(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function P(e){return function(t){return t.preventDefault(),e.call(this,t)}}function L(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function M(e){let t;return{p(...n){t=n,t.forEach((t=>e.push(t)))},r(){t.forEach((t=>e.splice(e.indexOf(t),1)))}}}function F(e){return""===e?null:+e}function U(e,t){t=""+t,e.data!==t&&(e.data=t)}function V(e,t){e.value=null==t?"":t}function B(e,t,n,r){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function q(e,t){for(let n=0;n<e.options.length;n+=1){const r=e.options[n];r.selected=~t.indexOf(r.__value)}}function $(e,t,n){e.classList[n?"add":"remove"](t)}function j(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,r,t),i}const z=new Map;let G,K=0;function H(e,t,n,r,i,s,o,a=0){const c=16.666/r;let u="{\n";for(let e=0;e<=1;e+=c){const r=t+(n-t)*s(e);u+=100*e+`%{${o(r,1-r)}}\n`}const l=u+`100% {${o(n,1-n)}}\n}`,h=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(l)}_${a}`,d=E(e),{stylesheet:f,rules:p}=z.get(d)||function(e,t){const n={stylesheet:k(t),rules:{}};return z.set(e,n),n}(d,e);p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${l}`,f.cssRules.length));const m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${h} ${r}ms linear ${i}ms 1 both`,K+=1,h}function W(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),i=n.length-r.length;i&&(e.style.animation=r.join(", "),K-=i,K||w((()=>{K||(z.forEach((e=>{const{ownerNode:t}=e.stylesheet;t&&C(t)})),z.clear())})))}function Q(e){G=e}function Y(){if(!G)throw new Error("Function called outside component initialization");return G}function X(e){Y().$$.on_mount.push(e)}function J(){const e=Y();return(t,n,{cancelable:r=!1}={})=>{const i=e.$$.callbacks[t];if(i){const s=j(t,n,{cancelable:r});return i.slice().forEach((t=>{t.call(e,s)})),!s.defaultPrevented}return!0}}const Z=[],ee=[];let te=[];const ne=[],re=Promise.resolve();let ie=!1;function se(e){te.push(e)}const oe=new Set;let ae,ce=0;function ue(){if(0!==ce)return;const e=G;do{try{for(;ce<Z.length;){const e=Z[ce];ce++,Q(e),le(e.$$)}}catch(e){throw Z.length=0,ce=0,e}for(Q(null),Z.length=0,ce=0;ee.length;)ee.pop()();for(let e=0;e<te.length;e+=1){const t=te[e];oe.has(t)||(oe.add(t),t())}te.length=0}while(Z.length);for(;ne.length;)ne.pop()();ie=!1,oe.clear(),Q(e)}function le(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(se)}}function he(e,t,n){e.dispatchEvent(j(`${t?"intro":"outro"}${n}`))}const de=new Set;let fe;function pe(){fe={r:0,c:[],p:fe}}function me(){fe.r||s(fe.c),fe=fe.p}function ge(e,t){e&&e.i&&(de.delete(e),e.i(t))}function ye(e,t,n,r){if(e&&e.o){if(de.has(e))return;de.add(e),fe.c.push((()=>{de.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}else r&&r()}const ve={duration:0};function we(n,r,i,a){const c={direction:"both"};let u=r(n,i,c),l=a?0:1,h=null,d=null,f=null;function p(){f&&W(n,f)}function m(e,t){const n=e.b-l;return t*=Math.abs(n),{a:l,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function g(r){const{delay:i=0,duration:o=300,easing:a=t,tick:c=e,css:g}=u||ve,y={start:v()+i,b:r};r||(y.group=fe,fe.r+=1),h||d?d=y:(g&&(p(),f=H(n,l,r,o,i,a,g)),r&&c(0,1),h=m(y,o),se((()=>he(n,r,"start"))),I((e=>{if(d&&e>d.start&&(h=m(d,o),d=null,he(n,h.b,"start"),g&&(p(),f=H(n,l,h.b,h.duration,0,a,u.css))),h)if(e>=h.end)c(l=h.b,1-l),he(n,h.b,"end"),d||(h.b?p():--h.group.r||s(h.group.c)),h=null;else if(e>=h.start){const t=e-h.start;l=h.a+h.d*a(t/h.duration),c(l,1-l)}return!(!h&&!d)})))}return{run(e){o(u)?(ae||(ae=Promise.resolve(),ae.then((()=>{ae=null}))),ae).then((()=>{u=u(c),g(e)})):g(e)},end(){p(),h=d=null}}}function _e(e){e&&e.c()}function be(e,t,n,i){const{fragment:a,after_update:c}=e.$$;a&&a.m(t,n),i||se((()=>{const t=e.$$.on_mount.map(r).filter(o);e.$$.on_destroy?e.$$.on_destroy.push(...t):s(t),e.$$.on_mount=[]})),c.forEach(se)}function Ie(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];te.forEach((r=>-1===e.indexOf(r)?t.push(r):n.push(r))),n.forEach((e=>e())),te=t}(n.after_update),s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Te(e,t){-1===e.$$.dirty[0]&&(Z.push(e),ie||(ie=!0,re.then(ue)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ee(t,n,r,o,a,c,u,l=[-1]){const h=G;Q(t);const d=t.$$={fragment:null,ctx:[],props:c,update:e,not_equal:a,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(h?h.$$.context:[])),callbacks:i(),dirty:l,skip_bound:!1,root:n.target||h.$$.root};u&&u(d.root);let f=!1;if(d.ctx=r?r(t,n.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=i)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](i),f&&Te(t,e)),n})):[],d.update(),f=!0,s(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(C)}else d.fragment&&d.fragment.c();n.intro&&ge(t.$$.fragment),be(t,n.target,n.anchor,n.customElement),ue()}Q(h)}class ke{$destroy(){Ie(this,1),this.$destroy=e}$on(t,n){if(!o(n))return e;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const e=r.indexOf(n);-1!==e&&r.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Se=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Ce={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Se(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new Ae;const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ae extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ne=function(e){return function(e){const t=Se(e);return Ce.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Re=function(e){try{return Ce.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function xe(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=xe(e[n],t[n]));return e}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const De=()=>
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Oe=()=>{try{return De()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Re(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Pe=()=>{var e;return null===(e=Oe())||void 0===e?void 0:e.config};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Le{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Me(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ne(JSON.stringify({alg:"none",type:"JWT"})),Ne(JSON.stringify(s)),""].join(".")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Fe(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ue(){var e;const t=null===(e=Oe())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}function Ve(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Be(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function qe(){const e=Fe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function $e(){try{return"object"==typeof indexedDB}catch(e){return!1}}class je extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ze.prototype.create)}}class ze{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Ge,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new je(r,o,n)}}const Ge=/\{\$([^}]+)}/g;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ke(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function He(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(We(n)&&We(s)){if(!He(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function We(e){return null!==e&&"object"==typeof e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Qe(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ye(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Xe(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Je(e,t){const n=new Ze(e,t);return n.subscribe.bind(n)}class Ze{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=et),void 0===r.error&&(r.error=et),void 0===r.complete&&(r.complete=et);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function et(){}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function tt(e){return e&&e._delegate?e._delegate:e}class nt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const rt="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class it{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Le;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e))try{this.getOrInitializeService({instanceIdentifier:rt})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=rt){return this.instances.has(e)}getOptions(e=rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===rt?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=rt){return this.component?this.component.multipleInstances?e:rt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class st{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new it(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ot=[];var at;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(at||(at={}));const ct={debug:at.DEBUG,verbose:at.VERBOSE,info:at.INFO,warn:at.WARN,error:at.ERROR,silent:at.SILENT},ut=at.INFO,lt={[at.DEBUG]:"log",[at.VERBOSE]:"log",[at.INFO]:"info",[at.WARN]:"warn",[at.ERROR]:"error"},ht=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=lt[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class dt{constructor(e){this.name=e,this._logLevel=ut,this._logHandler=ht,this._userLogHandler=null,ot.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in at))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ct[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,at.DEBUG,...e),this._logHandler(this,at.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,at.VERBOSE,...e),this._logHandler(this,at.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,at.INFO,...e),this._logHandler(this,at.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,at.WARN,...e),this._logHandler(this,at.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,at.ERROR,...e),this._logHandler(this,at.ERROR,...e)}}const ft=(e,t)=>t.some((t=>e instanceof t));let pt,mt;const gt=new WeakMap,yt=new WeakMap,vt=new WeakMap,wt=new WeakMap,_t=new WeakMap;let bt={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return yt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||vt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Et(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function It(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(mt||(mt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(kt(this),t),Et(gt.get(this))}:function(...t){return Et(e.apply(kt(this),t))}:function(t,...n){const r=e.call(kt(this),t,...n);return vt.set(r,t.sort?t.sort():[t]),Et(r)}}function Tt(e){return"function"==typeof e?It(e):(e instanceof IDBTransaction&&function(e){if(yt.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));yt.set(e,t)}(e),ft(e,pt||(pt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,bt):e)}function Et(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Et(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&gt.set(t,e)})).catch((()=>{})),_t.set(t,e),t}(e);if(wt.has(e))return wt.get(e);const t=Tt(e);return t!==e&&(wt.set(e,t),_t.set(t,e)),t}const kt=e=>_t.get(e);const St=["get","getKey","getAll","getAllKeys","count"],Ct=["put","add","delete","clear"],At=new Map;function Nt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(At.get(t))return At.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ct.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!St.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return At.set(t,s),s}bt=(e=>({...e,get:(t,n,r)=>Nt(t,n)||e.get(t,n,r),has:(t,n)=>!!Nt(t,n)||e.has(t,n)}))(bt);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Rt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const xt="@firebase/app",Dt="0.9.13",Ot=new dt("@firebase/app"),Pt="[DEFAULT]",Lt={[xt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Mt=new Map,Ft=new Map;function Ut(e,t){try{e.container.addComponent(t)}catch(n){Ot.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Vt(e,t){e.container.addOrOverwriteComponent(t)}function Bt(e){const t=e.name;if(Ft.has(t))return Ot.debug(`There were multiple attempts to register component ${t}.`),!1;Ft.set(t,e);for(const t of Mt.values())Ut(t,e);return!0}function qt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const $t=new ze("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class jt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new nt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const zt="9.23.0";function Gt(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Pt,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw $t.create("bad-app-name",{appName:String(i)});if(n||(n=Pe()),!n)throw $t.create("no-options");const s=Mt.get(i);if(s){if(He(n,s.options)&&He(r,s.config))return s;throw $t.create("duplicate-app",{appName:i})}const o=new st(i);for(const e of Ft.values())o.addComponent(e);const a=new jt(n,r,o);return Mt.set(i,a),a}async function Kt(e){const t=e.name;Mt.has(t)&&(Mt.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Ht(e,t,n){var r;let i=null!==(r=Lt[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ot.warn(e.join(" "))}Bt(new nt(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}function Wt(e,t){if(null!==e&&"function"!=typeof e)throw $t.create("invalid-log-argument");!function(e,t){for(const n of ot){let r=null;t&&t.level&&(r=ct[t.level]),n.userLogHandler=null===e?null:(t,n,...i)=>{const s=i.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:at[n].toLowerCase(),message:s,args:i,type:t.name})}}}(e,t)}function Qt(e){var t;t=e,ot.forEach((e=>{e.setLogLevel(t)}))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Yt="firebase-heartbeat-database",Xt=1,Jt="firebase-heartbeat-store";let Zt=null;function en(){return Zt||(Zt=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Et(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Et(o.result),e.oldVersion,e.newVersion,Et(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}(Yt,Xt,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Jt)}}).catch((e=>{throw $t.create("idb-open",{originalErrorMessage:e.message})}))),Zt}async function tn(e,t){try{const n=(await en()).transaction(Jt,"readwrite"),r=n.objectStore(Jt);await r.put(t,nn(e)),await n.done}catch(e){if(e instanceof je)Ot.warn(e.message);else{const t=$t.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ot.warn(t.message)}}}function nn(e){return`${e.name}!${e.options.appId}`}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rn{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new on(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=sn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=sn(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),an(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),an(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Ne(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function sn(){return(new Date).toISOString().substring(0,10)}class on{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!$e()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=await en();return await t.transaction(Jt).objectStore(Jt).get(nn(e))}catch(e){if(e instanceof je)Ot.warn(e.message);else{const t=$t.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ot.warn(t.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return tn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return tn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function an(e){return Ne(JSON.stringify({version:2,heartbeats:e})).length}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var cn;cn="",Bt(new nt("platform-logger",(e=>new Rt(e)),"PRIVATE")),Bt(new nt("heartbeat",(e=>new rn(e)),"PRIVATE")),Ht(xt,Dt,cn),Ht(xt,Dt,"esm2017"),Ht("fire-js","");var un=Object.freeze({__proto__:null,SDK_VERSION:zt,_DEFAULT_ENTRY_NAME:Pt,_addComponent:Ut,_addOrOverwriteComponent:Vt,_apps:Mt,_clearComponents:function(){Ft.clear()},_components:Ft,_getProvider:qt,_registerComponent:Bt,_removeServiceInstance:function(e,t,n=Pt){qt(e,t).clearInstance(n)},deleteApp:Kt,getApp:function(e=Pt){const t=Mt.get(e);if(!t&&e===Pt&&Pe())return Gt();if(!t)throw $t.create("no-app",{appName:e});return t},getApps:function(){return Array.from(Mt.values())},initializeApp:Gt,onLog:Wt,registerVersion:Ht,setLogLevel:Qt,FirebaseError:je});
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ln{constructor(e,t){this._delegate=e,this.firebase=t,Ut(e,new nt("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),Kt(this._delegate))))}_getService(e,t=Pt){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=Pt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Ut(this._delegate,e)}_addOrOverwriteComponent(e){Vt(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const hn=new ze("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."});const dn=
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function e(){const t=
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(e){const t={},n={__esModule:!0,initializeApp:function(r,i={}){const s=Gt(r,i);if(Ke(t,s.name))return t[s.name];const o=new e(s,n);return t[s.name]=o,o},app:r,registerVersion:Ht,setLogLevel:Qt,onLog:Wt,apps:null,SDK_VERSION:zt,INTERNAL:{registerComponent:function(t){const i=t.name,s=i.replace("-compat","");if(Bt(t)&&"PUBLIC"===t.type){const o=(e=r())=>{if("function"!=typeof e[s])throw hn.create("invalid-app-argument",{appName:i});return e[s]()};void 0!==t.serviceProps&&xe(o,t.serviceProps),n[s]=o,e.prototype[s]=function(...e){return this._getService.bind(this,i).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){if("serverAuth"===t)return null;return t},modularAPIs:un}};function r(e){if(!Ke(t,e=e||Pt))throw hn.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),r.App=e,n}(ln);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){xe(t,e)},createSubscribe:Je,ErrorFactory:ze,deepExtend:xe}),t}(),fn=new dt("@firebase/app-compat");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
if("object"==typeof self&&self.self===self&&void 0!==self.firebase){fn.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&fn.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const pn=dn;!
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(e){Ht("@firebase/app-compat","0.2.13",e)}();
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
pn.registerVersion("firebase","9.23.0","app-compat");var mn,gn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},yn=yn||{},vn=gn||self;function wn(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function _n(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var bn="closure_uid_"+(1e9*Math.random()>>>0),In=0;function Tn(e,t,n){return e.call.apply(e.bind,arguments)}function En(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function kn(e,t,n){return(kn=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Tn:En).apply(null,arguments)}function Sn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Cn(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function An(){this.s=this.s,this.o=this.o}An.prototype.s=!1,An.prototype.sa=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,bn)&&e[bn]||(e[bn]=++In))},An.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Nn=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Rn(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function xn(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(wn(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function Dn(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Dn.prototype.h=function(){this.defaultPrevented=!0};var On=function(){if(!vn.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{vn.addEventListener("test",(()=>{}),t),vn.removeEventListener("test",(()=>{}),t)}catch(e){}return e}();function Pn(e){return/^[\s\xa0]*$/.test(e)}function Ln(){var e=vn.navigator;return e&&(e=e.userAgent)?e:""}function Mn(e){return-1!=Ln().indexOf(e)}function Fn(e){return Fn[" "](e),e}Fn[" "]=function(){};var Un,Vn,Bn,qn=Mn("Opera"),$n=Mn("Trident")||Mn("MSIE"),jn=Mn("Edge"),zn=jn||$n,Gn=Mn("Gecko")&&!(-1!=Ln().toLowerCase().indexOf("webkit")&&!Mn("Edge"))&&!(Mn("Trident")||Mn("MSIE"))&&!Mn("Edge"),Kn=-1!=Ln().toLowerCase().indexOf("webkit")&&!Mn("Edge");function Hn(){var e=vn.document;return e?e.documentMode:void 0}e:{var Wn="",Qn=(Vn=Ln(),Gn?/rv:([^\);]+)(\)|;)/.exec(Vn):jn?/Edge\/([\d\.]+)/.exec(Vn):$n?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Vn):Kn?/WebKit\/(\S+)/.exec(Vn):qn?/(?:Version)[ \/]?(\S+)/.exec(Vn):void 0);if(Qn&&(Wn=Qn?Qn[1]:""),$n){var Yn=Hn();if(null!=Yn&&Yn>parseFloat(Wn)){Un=String(Yn);break e}}Un=Wn}if(vn.document&&$n){var Xn=Hn();Bn=Xn||(parseInt(Un,10)||void 0)}else Bn=void 0;var Jn=Bn;function Zn(e,t){if(Dn.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Gn){e:{try{Fn(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:er[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Zn.$.h.call(this)}}Cn(Zn,Dn);var er={2:"touch",3:"pen",4:"mouse"};Zn.prototype.h=function(){Zn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var tr="closure_listenable_"+(1e6*Math.random()|0),nr=0;function rr(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++nr,this.fa=this.ia=!1}function ir(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function sr(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function or(e){const t={};for(const n in e)t[n]=e[n];return t}const ar="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cr(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<ar.length;t++)n=ar[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ur(e){this.src=e,this.g={},this.h=0}function lr(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Nn(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ir(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function hr(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}ur.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=hr(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new rr(t,this.src,s,!!r,i)).ia=n,e.push(t)),t};var dr="closure_lm_"+(1e6*Math.random()|0),fr={};function pr(e,t,n,r,i){if(r&&r.once)return gr(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)pr(e,t[s],n,r,i);return null}return n=Tr(n),e&&e[tr]?e.O(t,n,_n(r)?!!r.capture:!!r,i):mr(e,t,n,!1,r,i)}function mr(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=_n(i)?!!i.capture:!!i,a=br(e);if(a||(e[dr]=a=new ur(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=_r;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)On||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(wr(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function gr(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)gr(e,t[s],n,r,i);return null}return n=Tr(n),e&&e[tr]?e.P(t,n,_n(r)?!!r.capture:!!r,i):mr(e,t,n,!0,r,i)}function yr(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)yr(e,t[s],n,r,i);else r=_n(r)?!!r.capture:!!r,n=Tr(n),e&&e[tr]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=hr(s=e.g[t],n,r,i))&&(ir(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=br(e))&&(t=e.g[t.toString()],e=-1,t&&(e=hr(t,n,r,i)),(n=-1<e?t[e]:null)&&vr(n))}function vr(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[tr])lr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(wr(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=br(t))?(lr(n,e),0==n.h&&(n.src=null,t[dr]=null)):ir(e)}}}function wr(e){return e in fr?fr[e]:fr[e]="on"+e}function _r(e,t){if(e.fa)e=!0;else{t=new Zn(t,this);var n=e.listener,r=e.la||e.src;e.ia&&vr(e),e=n.call(r,t)}return e}function br(e){return(e=e[dr])instanceof ur?e:null}var Ir="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tr(e){return"function"==typeof e?e:(e[Ir]||(e[Ir]=function(t){return e.handleEvent(t)}),e[Ir])}function Er(){An.call(this),this.i=new ur(this),this.S=this,this.J=null}function kr(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new Dn(t,e);else if(t instanceof Dn)t.target=t.target||e;else{var i=t;cr(t=new Dn(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Sr(o,r,!0,t)&&i}if(i=Sr(o=t.g=e,r,!0,t)&&i,i=Sr(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=Sr(o=t.g=n[s],r,!1,t)&&i}function Sr(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&lr(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}Cn(Er,An),Er.prototype[tr]=!0,Er.prototype.removeEventListener=function(e,t,n,r){yr(this,e,t,n,r)},Er.prototype.N=function(){if(Er.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ir(n[r]);delete t.g[e],t.h--}}this.J=null},Er.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Er.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Cr=vn.JSON.stringify;function Ar(){var e=Lr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Nr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Rr),(e=>e.reset()));class Rr{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function xr(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Dr(e){vn.setTimeout((()=>{throw e}),0)}let Or,Pr=!1,Lr=new class{constructor(){this.h=this.g=null}add(e,t){const n=Nr.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},Mr=()=>{const e=vn.Promise.resolve(void 0);Or=()=>{e.then(Fr)}};var Fr=()=>{for(var e;e=Ar();){try{e.h.call(e.g)}catch(e){Dr(e)}var t=Nr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Pr=!1};function Ur(e,t){Er.call(this),this.h=e||1,this.g=t||vn,this.j=kn(this.qb,this),this.l=Date.now()}function Vr(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Br(e,t,n){if("function"==typeof e)n&&(e=kn(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=kn(e.handleEvent,e)}return 2147483647<Number(t)?-1:vn.setTimeout(e,t||0)}function qr(e){e.g=Br((()=>{e.g=null,e.i&&(e.i=!1,qr(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Cn(Ur,Er),(mn=Ur.prototype).ga=!1,mn.T=null,mn.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),kr(this,"tick"),this.ga&&(Vr(this),this.start()))}},mn.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},mn.N=function(){Ur.$.N.call(this),Vr(this),delete this.g};class $r extends An{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:qr(this)}N(){super.N(),this.g&&(vn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jr(e){An.call(this),this.h=e,this.g={}}Cn(jr,An);var zr=[];function Gr(e,t,n,r){Array.isArray(n)||(n&&(zr[0]=n.toString()),n=zr);for(var i=0;i<n.length;i++){var s=pr(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Kr(e){sr(e.g,(function(e,t){this.g.hasOwnProperty(t)&&vr(e)}),e),e.g={}}function Hr(){this.g=!0}function Wr(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Cr(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}jr.prototype.N=function(){jr.$.N.call(this),Kr(this)},jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Hr.prototype.Ea=function(){this.g=!1},Hr.prototype.info=function(){};var Qr={},Yr=null;function Xr(){return Yr=Yr||new Er}function Jr(e){Dn.call(this,Qr.Ta,e)}function Zr(e){const t=Xr();kr(t,new Jr(t))}function ei(e,t){Dn.call(this,Qr.STAT_EVENT,e),this.stat=t}function ti(e){const t=Xr();kr(t,new ei(t,e))}function ni(e,t){Dn.call(this,Qr.Ua,e),this.size=t}function ri(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return vn.setTimeout((function(){e()}),t)}Qr.Ta="serverreachability",Cn(Jr,Dn),Qr.STAT_EVENT="statevent",Cn(ei,Dn),Qr.Ua="timingevent",Cn(ni,Dn);var ii={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},si={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function oi(){}function ai(e){return e.h||(e.h=e.i())}function ci(){}oi.prototype.h=null;var ui,li={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function hi(){Dn.call(this,"d")}function di(){Dn.call(this,"c")}function fi(){}function pi(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new jr(this),this.P=gi,e=zn?125:void 0,this.V=new Ur(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new mi}function mi(){this.i=null,this.g="",this.h=!1}Cn(hi,Dn),Cn(di,Dn),Cn(fi,oi),fi.prototype.g=function(){return new XMLHttpRequest},fi.prototype.i=function(){return{}},ui=new fi;var gi=45e3,yi={},vi={};function wi(e,t,n){e.L=1,e.v=Ui(Oi(t)),e.s=n,e.S=!0,_i(e,null)}function _i(e,t){e.G=Date.now(),Ei(e),e.A=Oi(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Xi(n.i,"t",r),e.C=0,n=e.l.J,e.h=new mi,e.g=Ys(e.l,n?t:null,!e.s),0<e.O&&(e.M=new $r(kn(e.Pa,e,e.g),e.O)),Gr(e.U,e.g,"readystatechange",e.nb),t=e.I?or(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Zr(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function bi(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function Ii(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=Ti(e,n),r==vi){4==t&&(e.o=4,ti(14),i=!1),Wr(e.j,e.m,null,"[Incomplete Response]");break}if(r==yi){e.o=4,ti(15),Wr(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Wr(e.j,e.m,r,null),Ni(e,r)}bi(e)&&r!=vi&&r!=yi&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ti(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),$s(t),t.M=!0,ti(11))):(Wr(e.j,e.m,n,"[Invalid Chunked Response]"),Ai(e),Ci(e))}function Ti(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?vi:(n=Number(t.substring(n,r)),isNaN(n)?yi:(r+=1)+n>t.length?vi:(t=t.slice(r,r+n),e.C=r+n,t))}function Ei(e){e.Y=Date.now()+e.P,ki(e,e.P)}function ki(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ri(kn(e.lb,e),t)}function Si(e){e.B&&(vn.clearTimeout(e.B),e.B=null)}function Ci(e){0==e.l.H||e.J||Gs(e.l,e)}function Ai(e){Si(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Vr(e.V),Kr(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ni(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||rs(n.i,e)))if(!e.K&&rs(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;zs(n),Ps(n)}qs(n),ti(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=ri(kn(n.ib,n),6e3));if(1>=ns(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else Hs(n,11)}else if((e.K||n.g==e)&&zs(n),!Pn(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(is(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,Fi(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=e;if((r=n).wa=Qs(r,r.J?r.pa:null,r.Y),o.K){ss(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Si(a),Ei(a)),r.g=o}else Bs(r);0<n.j.length&&Ms(n)}else"stop"!=u[0]&&"close"!=u[0]||Hs(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Hs(n,7):Os(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}Zr()}catch(e){}}function Ri(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(wn(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(wn(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(wn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(mn=pi.prototype).setTimeout=function(e){this.P=e},mn.nb=function(e){e=e.target;const t=this.M;t&&3==Cs(e)?t.l():this.Pa(e)},mn.Pa=function(e){try{if(e==this.g)e:{const l=Cs(this.g);var t=this.g.Ia();this.g.da();if(!(3>l)&&(3!=l||zn||this.g&&(this.h.h||this.g.ja()||As(this.g)))){this.J||4!=l||7==t||Zr(),Si(this);var n=this.g.da();this.ca=n;t:if(bi(this)){var r=As(this.g);e="";var i=r.length,s=4==Cs(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ai(this),Ci(this);var o="";break t}this.h.i=new vn.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pn(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,ti(12),Ai(this),Ci(this);break e}Wr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ni(this,n)}this.S?(Ii(this,l,o),zn&&this.i&&3==l&&(Gr(this.U,this.V,"tick",this.mb),this.V.start())):(Wr(this.j,this.m,o,null),Ni(this,o)),4==l&&Ai(this),this.i&&!this.J&&(4==l?Gs(this.l,this):(this.i=!1,Ei(this)))}else(function(e){const t={};e=(e.g&&2<=Cs(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(Pn(e[r]))continue;var n=xr(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ti(12)):(this.o=0,ti(13)),Ai(this),Ci(this)}}}catch(e){}},mn.mb=function(){if(this.g){var e=Cs(this.g),t=this.g.ja();this.C<t.length&&(Si(this),Ii(this,e,t),this.i&&4!=e&&Ei(this))}},mn.cancel=function(){this.J=!0,Ai(this)},mn.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(Zr(),ti(17)),Ai(this),this.o=2,Ci(this)):ki(this,this.Y-e)};var xi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Di(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Di){this.h=e.h,Pi(this,e.j),this.s=e.s,this.g=e.g,Li(this,e.m),this.l=e.l;var t=e.i,n=new Hi;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Mi(this,n),this.o=e.o}else e&&(t=String(e).match(xi))?(this.h=!1,Pi(this,t[1]||"",!0),this.s=Vi(t[2]||""),this.g=Vi(t[3]||"",!0),Li(this,t[4]),this.l=Vi(t[5]||"",!0),Mi(this,t[6]||"",!0),this.o=Vi(t[7]||"")):(this.h=!1,this.i=new Hi(null,this.h))}function Oi(e){return new Di(e)}function Pi(e,t,n){e.j=n?Vi(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Li(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Mi(e,t,n){t instanceof Hi?(e.i=t,function(e,t){t&&!e.j&&(Wi(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Qi(this,t),Xi(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Bi(t,Gi)),e.i=new Hi(t,e.h))}function Fi(e,t,n){e.i.set(t,n)}function Ui(e){return Fi(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Vi(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Bi(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,qi),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function qi(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Di.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Bi(t,$i,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Bi(t,$i,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Bi(n,"/"==n.charAt(0)?zi:ji,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Bi(n,Ki)),e.join("")};var $i=/[#\/\?@]/g,ji=/[#\?:]/g,zi=/[#\?]/g,Gi=/[#\?@]/g,Ki=/#/g;function Hi(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Wi(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Qi(e,t){Wi(e),t=Ji(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Yi(e,t){return Wi(e),t=Ji(e,t),e.g.has(t)}function Xi(e,t,n){Qi(e,t),0<n.length&&(e.i=null,e.g.set(Ji(e,t),Rn(n)),e.h+=n.length)}function Ji(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(mn=Hi.prototype).add=function(e,t){Wi(this),this.i=null,e=Ji(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},mn.forEach=function(e,t){Wi(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},mn.ta=function(){Wi(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},mn.Z=function(e){Wi(this);let t=[];if("string"==typeof e)Yi(this,e)&&(t=t.concat(this.g.get(Ji(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},mn.set=function(e,t){return Wi(this),this.i=null,Yi(this,e=Ji(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},mn.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},mn.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Zi(e){this.l=e||es,vn.PerformanceNavigationTiming?e=0<(e=vn.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(vn.g&&vn.g.Ka&&vn.g.Ka()&&vn.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var es=10;function ts(e){return!!e.h||!!e.g&&e.g.size>=e.j}function ns(e){return e.h?1:e.g?e.g.size:0}function rs(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function is(e,t){e.g?e.g.add(t):e.h=t}function ss(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function os(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Rn(e.i)}Zi.prototype.cancel=function(){if(this.i=os(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var as=class{stringify(e){return vn.JSON.stringify(e,void 0)}parse(e){return vn.JSON.parse(e,void 0)}};function cs(){this.g=new as}function us(e,t,n){const r=n||"";try{Ri(e,(function(e,n){let i=e;_n(e)&&(i=Cr(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function ls(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function hs(e){this.l=e.fc||null,this.j=e.ob||!1}function ds(e,t){Er.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=fs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Cn(hs,oi),hs.prototype.g=function(){return new ds(this.l,this.j)},hs.prototype.i=function(e){return function(){return e}}({}),Cn(ds,Er);var fs=0;function ps(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function ms(e){e.readyState=4,e.l=null,e.j=null,e.A=null,gs(e)}function gs(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(mn=ds.prototype).open=function(e,t){if(this.readyState!=fs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,gs(this)},mn.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||vn).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},mn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ms(this)),this.readyState=fs},mn.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,gs(this)),this.g&&(this.readyState=3,gs(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==vn.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ps(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},mn.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ms(this):gs(this),3==this.readyState&&ps(this)}},mn.Za=function(e){this.g&&(this.response=this.responseText=e,ms(this))},mn.Ya=function(e){this.g&&(this.response=e,ms(this))},mn.ka=function(){this.g&&ms(this)},mn.setRequestHeader=function(e,t){this.v.append(e,t)},mn.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},mn.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(ds.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var ys=vn.JSON.parse;function vs(e){Er.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ws,this.L=this.M=!1}Cn(vs,Er);var ws="",_s=/^https?$/i,bs=["POST","PUT"];function Is(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ts(e),ks(e)}function Ts(e){e.F||(e.F=!0,kr(e,"complete"),kr(e,"error"))}function Es(e){if(e.h&&void 0!==yn&&(!e.C[1]||4!=Cs(e)||2!=e.da()))if(e.v&&4==Cs(e))Br(e.La,0,e);else if(kr(e,"readystatechange"),4==Cs(e)){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.I).match(xi)[1]||null;!i&&vn.self&&vn.self.location&&(i=vn.self.location.protocol.slice(0,-1)),r=!_s.test(i?i.toLowerCase():"")}n=r}if(n)kr(e,"complete"),kr(e,"success");else{e.m=6;try{var s=2<Cs(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",Ts(e)}}finally{ks(e)}}}function ks(e,t){if(e.g){Ss(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||kr(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Ss(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(vn.clearTimeout(e.A),e.A=null)}function Cs(e){return e.g?e.g.readyState:0}function As(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case ws:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Ns(e){let t="";return sr(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Rs(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Ns(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Fi(e,t,n))}function xs(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ds(e){this.Ga=0,this.j=[],this.l=new Hr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=xs("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=xs("baseRetryDelayMs",5e3,e),this.hb=xs("retryDelaySeedMs",1e4,e),this.eb=xs("forwardChannelMaxRetries",2,e),this.xa=xs("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Zi(e&&e.concurrentRequestLimit),this.Ja=new cs,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Os(e){if(Ls(e),3==e.H){var t=e.W++,n=Oi(e.I);if(Fi(n,"SID",e.K),Fi(n,"RID",t),Fi(n,"TYPE","terminate"),Us(e,n),(t=new pi(e,e.l,t)).L=2,t.v=Ui(Oi(n)),n=!1,vn.navigator&&vn.navigator.sendBeacon)try{n=vn.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&vn.Image&&((new Image).src=t.v,n=!0),n||(t.g=Ys(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Ei(t)}Ws(e)}function Ps(e){e.g&&($s(e),e.g.cancel(),e.g=null)}function Ls(e){Ps(e),e.u&&(vn.clearTimeout(e.u),e.u=null),zs(e),e.i.cancel(),e.m&&("number"==typeof e.m&&vn.clearTimeout(e.m),e.m=null)}function Ms(e){if(!ts(e.i)&&!e.m){e.m=!0;var t=e.Na;Or||Mr(),Pr||(Or(),Pr=!0),Lr.add(t,e),e.C=0}}function Fs(e,t){var n;n=t?t.m:e.W++;const r=Oi(e.I);Fi(r,"SID",e.K),Fi(r,"RID",n),Fi(r,"AID",e.V),Us(e,r),e.o&&e.s&&Rs(r,e.o,e.s),n=new pi(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Vs(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),is(e.i,n),wi(n,r,t)}function Us(e,t){e.na&&sr(e.na,(function(e,n){Fi(t,n,e)})),e.h&&Ri({},(function(e,n){Fi(t,n,e)}))}function Vs(e,t,n){n=Math.min(e.j.length,n);var r=e.h?kn(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),s=!1;else try{us(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Bs(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Or||Mr(),Pr||(Or(),Pr=!0),Lr.add(t,e),e.A=0}}function qs(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=ri(kn(e.Ma,e),Ks(e,e.A)),e.A++,!0)}function $s(e){null!=e.B&&(vn.clearTimeout(e.B),e.B=null)}function js(e){e.g=new pi(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Oi(e.wa);Fi(t,"RID","rpc"),Fi(t,"SID",e.K),Fi(t,"AID",e.V),Fi(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Fi(t,"TO",e.qa),Fi(t,"TYPE","xmlhttp"),Us(e,t),e.o&&e.s&&Rs(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Ui(Oi(t)),n.s=null,n.S=!0,_i(n,e)}function zs(e){null!=e.v&&(vn.clearTimeout(e.v),e.v=null)}function Gs(e,t){var n=null;if(e.g==t){zs(e),$s(e),e.g=null;var r=2}else{if(!rs(e.i,t))return;n=t.F,ss(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;kr(r=Xr(),new ni(r,n)),Ms(e)}else Bs(e);else if(3==(i=t.o)||0==i&&0<t.ca||!(1==r&&function(e,t){return!(ns(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.j=t.F.concat(e.j),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=ri(kn(e.Na,e,t),Ks(e,e.C)),e.C++,0)))}(e,t)||2==r&&qs(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Hs(e,5);break;case 4:Hs(e,10);break;case 3:Hs(e,6);break;default:Hs(e,2)}}function Ks(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Hs(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=kn(e.pb,e);n||(n=new Di("//www.google.com/images/cleardot.gif"),vn.location&&"http"==vn.location.protocol||Pi(n,"https"),Ui(n)),function(e,t){const n=new Hr;if(vn.Image){const r=new Image;r.onload=Sn(ls,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Sn(ls,n,r,"TestLoadImage: error",!1,t),r.onabort=Sn(ls,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Sn(ls,n,r,"TestLoadImage: timeout",!1,t),vn.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else ti(2);e.H=0,e.h&&e.h.za(t),Ws(e),Ls(e)}function Ws(e){if(e.H=0,e.ma=[],e.h){const t=os(e.i);0==t.length&&0==e.j.length||(xn(e.ma,t),xn(e.ma,e.j),e.i.i.length=0,Rn(e.j),e.j.length=0),e.h.ya()}}function Qs(e,t,n){var r=n instanceof Di?Oi(n):new Di(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Li(r,r.m);else{var i=vn.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Di(null);r&&Pi(s,r),t&&(s.g=t),i&&Li(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&Fi(r,n,t),Fi(r,"VER",e.ra),Us(e,r),r}function Ys(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new vs(new hs({ob:!0})):new vs(e.va)).Oa(e.J),t}function Xs(){}function Js(){if($n&&!(10<=Number(Jn)))throw Error("Environmental error: no available transport.")}function Zs(e,t){Er.call(this),this.g=new Ds(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Pn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Pn(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new no(this)}function eo(e){hi.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function to(){di.call(this),this.status=1}function no(e){this.g=e}function ro(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function io(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(o<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(t=n+((o=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function so(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}(mn=vs.prototype).Oa=function(e){this.M=e},mn.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ui.g(),this.C=this.u?ai(this.u):ai(ui),this.g.onreadystatechange=kn(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void Is(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=vn.FormData&&e instanceof vn.FormData,!(0<=Nn(bs,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ss(this),0<this.B&&((this.L=function(e){return $n&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=kn(this.ua,this)):this.A=Br(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Is(this,e)}},mn.ua=function(){void 0!==yn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kr(this,"timeout"),this.abort(8))},mn.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,kr(this,"complete"),kr(this,"abort"),ks(this))},mn.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ks(this,!0)),vs.$.N.call(this)},mn.La=function(){this.s||(this.G||this.v||this.l?Es(this):this.kb())},mn.kb=function(){Es(this)},mn.isActive=function(){return!!this.g},mn.da=function(){try{return 2<Cs(this)?this.g.status:-1}catch(e){return-1}},mn.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},mn.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ys(t)}},mn.Ia=function(){return this.m},mn.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(mn=Ds.prototype).ra=8,mn.H=1,mn.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new pi(this,this.l,e);let s=this.s;if(this.U&&(s?(s=or(s),cr(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Vs(this,i,t),Fi(n=Oi(this.I),"RID",e),Fi(n,"CVER",22),this.F&&Fi(n,"X-HTTP-Session-Id",this.F),Us(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Ns(s)))+"&"+t:this.o&&Rs(n,this.o,s)),is(this.i,i),this.bb&&Fi(n,"TYPE","init"),this.P?(Fi(n,"$req",t),Fi(n,"SID","null"),i.aa=!0,wi(i,n,null)):wi(i,n,t),this.H=2}}else 3==this.H&&(e?Fs(this,e):0==this.j.length||ts(this.i)||Fs(this))},mn.Ma=function(){if(this.u=null,js(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ri(kn(this.jb,this),e)}},mn.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ti(10),Ps(this),js(this))},mn.ib=function(){null!=this.v&&(this.v=null,Ps(this),qs(this),ti(19))},mn.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ti(2)):(this.l.info("Failed to ping google.com"),ti(1))},mn.isActive=function(){return!!this.h&&this.h.isActive(this)},(mn=Xs.prototype).Ba=function(){},mn.Aa=function(){},mn.za=function(){},mn.ya=function(){},mn.isActive=function(){return!0},mn.Va=function(){},Js.prototype.g=function(e,t){return new Zs(e,t)},Cn(Zs,Er),Zs.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ti(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Qs(e,null,e.Y),Ms(e)},Zs.prototype.close=function(){Os(this.g)},Zs.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Cr(e),e=n);t.j.push(new class{constructor(e,t){this.g=e,this.map=t}}(t.fb++,e)),3==t.H&&Ms(t)},Zs.prototype.N=function(){this.g.h=null,delete this.j,Os(this.g),delete this.g,Zs.$.N.call(this)},Cn(eo,hi),Cn(to,di),Cn(no,Xs),no.prototype.Ba=function(){kr(this.g,"a")},no.prototype.Aa=function(e){kr(this.g,new eo(e))},no.prototype.za=function(e){kr(this.g,new to)},no.prototype.ya=function(){kr(this.g,"b")},Cn(ro,(function(){this.blockSize=-1})),ro.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},ro.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)io(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){io(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){io(this,r),i=0;break}}this.h=i,this.i+=t},ro.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var oo={};function ao(e){return-128<=e&&128>e?function(e,t){var n=oo;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new so([0|e],0>e?-1:0)})):new so([0|e],0>e?-1:0)}function co(e){if(isNaN(e)||!isFinite(e))return lo;if(0>e)return go(co(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=uo;return new so(t,0)}var uo=4294967296,lo=ao(0),ho=ao(1),fo=ao(16777216);function po(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function mo(e){return-1==e.h}function go(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new so(n,~e.h).add(ho)}function yo(e,t){return e.add(go(t))}function vo(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function wo(e,t){this.g=e,this.h=t}function _o(e,t){if(po(t))throw Error("division by zero");if(po(e))return new wo(lo,lo);if(mo(e))return t=_o(go(e),t),new wo(go(t.g),go(t.h));if(mo(t))return t=_o(e,go(t)),new wo(go(t.g),t.h);if(30<e.g.length){if(mo(e)||mo(t))throw Error("slowDivide_ only works with positive integers.");for(var n=ho,r=t;0>=r.X(e);)n=bo(n),r=bo(r);var i=Io(n,1),s=Io(r,1);for(r=Io(r,2),n=Io(n,2);!po(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Io(r,1),n=Io(n,1)}return t=yo(e,i.R(t)),new wo(i,t)}for(i=lo;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(s=co(n)).R(t);mo(o)||0<o.X(e);)o=(s=co(n-=r)).R(t);po(s)&&(s=ho),i=i.add(s),e=yo(e,o)}return new wo(i,e)}function bo(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new so(n,e.h)}function Io(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new so(i,e.h)}(mn=so.prototype).ea=function(){if(mo(this))return-go(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:uo+r)*t,t*=uo}return e},mn.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(po(this))return"0";if(mo(this))return"-"+go(this).toString(e);for(var t=co(Math.pow(e,6)),n=this,r="";;){var i=_o(n,t).g,s=((0<(n=yo(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(po(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},mn.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},mn.X=function(e){return mo(e=yo(this,e))?-1:po(e)?0:1},mn.abs=function(){return mo(this)?go(this):this},mn.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new so(n,-2147483648&n[n.length-1]?-1:0)},mn.R=function(e){if(po(this)||po(e))return lo;if(mo(this))return mo(e)?go(this).R(go(e)):go(go(this).R(e));if(mo(e))return go(this.R(go(e)));if(0>this.X(fo)&&0>e.X(fo))return co(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,vo(n,2*r+2*i),n[2*r+2*i+1]+=s*c,vo(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,vo(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,vo(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new so(n,0)},mn.gb=function(e){return _o(this,e).h},mn.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new so(n,this.h&e.h)},mn.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new so(n,this.h|e.h)},mn.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new so(n,this.h^e.h)},Js.prototype.createWebChannel=Js.prototype.g,Zs.prototype.send=Zs.prototype.u,Zs.prototype.open=Zs.prototype.m,Zs.prototype.close=Zs.prototype.close,ii.NO_ERROR=0,ii.TIMEOUT=8,ii.HTTP_ERROR=6,si.COMPLETE="complete",ci.EventType=li,li.OPEN="a",li.CLOSE="b",li.ERROR="c",li.MESSAGE="d",Er.prototype.listen=Er.prototype.O,vs.prototype.listenOnce=vs.prototype.P,vs.prototype.getLastError=vs.prototype.Sa,vs.prototype.getLastErrorCode=vs.prototype.Ia,vs.prototype.getStatus=vs.prototype.da,vs.prototype.getResponseJson=vs.prototype.Wa,vs.prototype.getResponseText=vs.prototype.ja,vs.prototype.send=vs.prototype.ha,vs.prototype.setWithCredentials=vs.prototype.Oa,ro.prototype.digest=ro.prototype.l,ro.prototype.reset=ro.prototype.reset,ro.prototype.update=ro.prototype.j,so.prototype.add=so.prototype.add,so.prototype.multiply=so.prototype.R,so.prototype.modulo=so.prototype.gb,so.prototype.compare=so.prototype.X,so.prototype.toNumber=so.prototype.ea,so.prototype.toString=so.prototype.toString,so.prototype.getBits=so.prototype.D,so.fromNumber=co,so.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return go(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=co(Math.pow(n,8)),i=lo,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),n);8>o?(o=co(Math.pow(n,o)),i=i.R(o).add(co(a))):i=(i=i.R(r)).add(co(a))}return i};var To=ii,Eo=si,ko=Qr,So=10,Co=11,Ao=hs,No=ci,Ro=vs,xo=ro,Do=so;const Oo="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Po{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Po.UNAUTHENTICATED=new Po(null),Po.GOOGLE_CREDENTIALS=new Po("google-credentials-uid"),Po.FIRST_PARTY=new Po("first-party-uid"),Po.MOCK_USER=new Po("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let Lo="9.23.0";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Mo=new dt("@firebase/firestore");function Fo(){return Mo.logLevel}function Uo(e,...t){if(Mo.logLevel<=at.DEBUG){const n=t.map(qo);Mo.debug(`Firestore (${Lo}): ${e}`,...n)}}function Vo(e,...t){if(Mo.logLevel<=at.ERROR){const n=t.map(qo);Mo.error(`Firestore (${Lo}): ${e}`,...n)}}function Bo(e,...t){if(Mo.logLevel<=at.WARN){const n=t.map(qo);Mo.warn(`Firestore (${Lo}): ${e}`,...n)}}function qo(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function $o(e="Unexpected state"){const t=`FIRESTORE (${Lo}) INTERNAL ASSERTION FAILED: `+e;throw Vo(t),new Error(t)}function jo(e,t){e||$o()}function zo(e,t){return e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Go={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ko extends je{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ho{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Wo{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Qo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Po.UNAUTHENTICATED)))}shutdown(){}}class Yo{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Xo{constructor(e){this.t=e,this.currentUser=Po.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Ho;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ho,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Uo("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Uo("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ho)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Uo("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(jo("string"==typeof t.accessToken),new Wo(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return jo(null===e||"string"==typeof e),new Po(e)}}class Jo{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Po.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Zo{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Jo(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Po.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ea{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ta{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&Uo("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,Uo("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Uo("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):Uo("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(jo("string"==typeof e.token),this.T=e.token,new ea(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function na(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ra{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=na(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function ia(e,t){return e<t?-1:e>t?1:0}function sa(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function oa(e){return e+"\0"}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class aa{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ko(Go.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ko(Go.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Ko(Go.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ko(Go.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return aa.fromMillis(Date.now())}static fromDate(e){return aa.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new aa(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ia(this.nanoseconds,e.nanoseconds):ia(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ca{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ca(e)}static min(){return new ca(new aa(0,0))}static max(){return new ca(new aa(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ua{constructor(e,t,n){void 0===t?t=0:t>e.length&&$o(),void 0===n?n=e.length-t:n>e.length-t&&$o(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ua.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ua?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class la extends ua{construct(e,t,n){return new la(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Ko(Go.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new la(t)}static emptyPath(){return new la([])}}const ha=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class da extends ua{construct(e,t,n){return new da(e,t,n)}static isValidIdentifier(e){return ha.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),da.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new da(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Ko(Go.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Ko(Go.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Ko(Go.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Ko(Go.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new da(t)}static emptyPath(){return new da([])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fa{constructor(e){this.path=e}static fromPath(e){return new fa(la.fromString(e))}static fromName(e){return new fa(la.fromString(e).popFirst(5))}static empty(){return new fa(la.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===la.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return la.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fa(new la(e.slice()))}}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pa{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function ma(e){return e.fields.find((e=>2===e.kind))}function ga(e){return e.fields.filter((e=>2!==e.kind))}pa.UNKNOWN_ID=-1;class ya{constructor(e,t){this.fieldPath=e,this.kind=t}}class va{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new va(0,ba.min())}}function wa(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ca.fromTimestamp(1e9===r?new aa(n+1,0):new aa(n,r));return new ba(i,fa.empty(),t)}function _a(e){return new ba(e.readTime,e.key,-1)}class ba{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ba(ca.min(),fa.empty(),-1)}static max(){return new ba(ca.max(),fa.empty(),-1)}}function Ia(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=fa.comparator(e.documentKey,t.documentKey),0!==n?n:ia(e.largestBatchId,t.largestBatchId))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ta="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ea{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function ka(e){if(e.code!==Go.FAILED_PRECONDITION||e.message!==Ta)throw e;Uo("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sa{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$o(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Sa(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Sa?t:Sa.resolve(t)}catch(e){return Sa.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Sa.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Sa.reject(t)}static resolve(e){return new Sa(((t,n)=>{t(e)}))}static reject(e){return new Sa(((t,n)=>{n(e)}))}static waitFor(e){return new Sa(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Sa.resolve(!1);for(const n of e)t=t.next((e=>e?Sa.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Sa(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Sa(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ca{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new Ho,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new Ra(e,t.error)):this.v.resolve()},this.transaction.onerror=t=>{const n=La(t.target.error);this.v.reject(new Ra(e,n))}}static open(e,t,n,r){try{return new Ca(t,e.transaction(r,n))}catch(e){throw new Ra(t,e)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(Uo("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Da(t)}}class Aa{constructor(e,t,n){this.name=e,this.version=t,this.V=n,12.2===Aa.S(Fe())&&Vo("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Uo("SimpleDb","Removing database:",e),Oa(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!$e())return!1;if(Aa.C())return!0;const e=Fe(),t=Aa.S(e),n=0<t&&t<10,r=Aa.N(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static C(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.env)||void 0===e?void 0:e.k)}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static N(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async $(e){return this.db||(Uo("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Ra(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new Ko(Go.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new Ko(Go.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Ra(e,r))},r.onupgradeneeded=e=>{Uo("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.V.O(t,r.transaction,e.oldVersion,this.version).next((()=>{Uo("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.F&&(this.db.onversionchange=e=>this.F(e)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.$(e);const t=Ca.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.P(),e))).catch((e=>(t.abort(e),Sa.reject(e)))).toPromise();return s.catch((()=>{})),await t.R,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(Uo("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Na{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Oa(this.L.delete())}}class Ra extends Ko{constructor(e,t){super(Go.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function xa(e){return"IndexedDbTransactionError"===e.name}class Da{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Uo("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Uo("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Oa(n)}add(e){return Uo("SimpleDb","ADD",this.store.name,e,e),Oa(this.store.add(e))}get(e){return Oa(this.store.get(e)).next((t=>(void 0===t&&(t=null),Uo("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Uo("SimpleDb","DELETE",this.store.name,e),Oa(this.store.delete(e))}count(){return Uo("SimpleDb","COUNT",this.store.name),Oa(this.store.count())}j(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.W(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new Sa(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}H(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Sa(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}J(e,t){Uo("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const r=this.cursor(n);return this.W(r,((e,t,n)=>n.delete()))}X(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.W(r,t)}Z(e){const t=this.cursor({});return new Sa(((n,r)=>{t.onerror=e=>{const t=La(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}W(e,t){const n=[];return new Sa(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Na(i),o=t(i.primaryKey,i.value,s);if(o instanceof Sa){const e=o.catch((e=>(s.done(),Sa.reject(e))));n.push(e)}s.isDone?r():null===s.K?i.continue():i.continue(s.K)}})).next((()=>Sa.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Oa(e){return new Sa(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=La(e.target.error);n(t)}}))}let Pa=!1;function La(e){const t=Aa.S(Fe());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new Ko("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Pa||(Pa=!0,setTimeout((()=>{throw e}),0)),e}}return e}class Ma{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}et(e){Uo("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{Uo("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(e){xa(e)?Uo("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await ka(e)}await this.et(6e4)}))}}class Fa{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.st(t,e)))}st(e,t){const n=new Set;let r=t,i=!0;return Sa.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return Uo("IndexBackiller",`Processing collection: ${t}`),this.it(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}it(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.rt(r,n))).next((n=>(Uo("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}rt(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=_a(t);Ia(r,n)>0&&(n=r)})),new ba(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ua{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function Va(e){return null==e}function Ba(e){return 0===e&&1/e==-1/0}function qa(e){return"number"==typeof e&&Number.isInteger(e)&&!Ba(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function $a(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=za(t)),t=ja(e.get(n),t);return za(t)}function ja(e,t){let n=t;const r=e.length;for(let t=0;t<r;t++){const r=e.charAt(t);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function za(e){return e+""}function Ga(e){const t=e.length;if(jo(t>=2),2===t)return jo(""===e.charAt(0)&&""===e.charAt(1)),la.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&$o(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:$o()}s=t+2}return new la(r)}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Ua.ct=-1;const Ka=["userId","batchId"];
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ha(e,t){return[e,$a(t)]}function Wa(e,t,n){return[e,$a(t),n]}const Qa={},Ya=["prefixPath","collectionGroup","readTime","documentId"],Xa=["prefixPath","collectionGroup","documentId"],Ja=["collectionGroup","readTime","prefixPath","documentId"],Za=["canonicalId","targetId"],ec=["targetId","path"],tc=["path","targetId"],nc=["collectionId","parent"],rc=["indexId","uid"],ic=["uid","sequenceNumber"],sc=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],oc=["indexId","uid","orderedDocumentKey"],ac=["userId","collectionPath","documentId"],cc=["userId","collectionPath","largestBatchId"],uc=["userId","collectionGroup","largestBatchId"],lc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],hc=[...lc,"documentOverlays"],dc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],fc=dc,pc=[...fc,"indexConfiguration","indexState","indexEntries"];
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mc extends Ea{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}}function gc(e,t){const n=zo(e);return Aa.M(n.ht,t)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function yc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function vc(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function wc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _c{constructor(e,t){this.comparator=e,this.root=t||Ic.EMPTY}insert(e,t){return new _c(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ic.BLACK,null,null))}remove(e){return new _c(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ic.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bc(this.root,e,this.comparator,!1)}getReverseIterator(){return new bc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bc(this.root,e,this.comparator,!0)}}class bc{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ic{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ic.RED,this.left=null!=r?r:Ic.EMPTY,this.right=null!=i?i:Ic.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ic(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ic.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ic.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ic.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ic.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $o();if(this.right.isRed())throw $o();const e=this.left.check();if(e!==this.right.check())throw $o();return e+(this.isRed()?0:1)}}Ic.EMPTY=null,Ic.RED=!0,Ic.BLACK=!1,Ic.EMPTY=new class{constructor(){this.size=0}get key(){throw $o()}get value(){throw $o()}get color(){throw $o()}get left(){throw $o()}get right(){throw $o()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ic(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Tc{constructor(e){this.comparator=e,this.data=new _c(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ec(this.data.getIterator())}getIteratorFrom(e){return new Ec(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Tc))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Tc(this.comparator);return t.data=e,t}}class Ec{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function kc(e){return e.hasNext()?e.getNext():void 0}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sc{constructor(e){this.fields=e,e.sort(da.comparator)}static empty(){return new Sc([])}unionWith(e){let t=new Tc(da.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new Sc(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return sa(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ac{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Cc("Invalid base64 string: "+e):e}}(e);return new Ac(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ac(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ia(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ac.EMPTY_BYTE_STRING=new Ac("");const Nc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rc(e){if(jo(!!e),"string"==typeof e){let t=0;const n=Nc.exec(e);if(jo(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:xc(e.seconds),nanos:xc(e.nanos)}}function xc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Dc(e){return"string"==typeof e?Ac.fromBase64String(e):Ac.fromUint8Array(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Oc(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Pc(e){const t=e.mapValue.fields.__previous_value__;return Oc(t)?Pc(t):t}function Lc(e){const t=Rc(e.mapValue.fields.__local_write_time__.timestampValue);return new aa(t.seconds,t.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mc{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Fc{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Fc("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Fc&&e.projectId===this.projectId&&e.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Uc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Vc={nullValue:"NULL_VALUE"};function Bc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Oc(e)?4:eu(e)?9007199254740991:10:$o()}function qc(e,t){if(e===t)return!0;const n=Bc(e);if(n!==Bc(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Lc(e).isEqual(Lc(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Rc(e.timestampValue),r=Rc(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Dc(e.bytesValue).isEqual(Dc(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return xc(e.geoPointValue.latitude)===xc(t.geoPointValue.latitude)&&xc(e.geoPointValue.longitude)===xc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return xc(e.integerValue)===xc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=xc(e.doubleValue),r=xc(t.doubleValue);return n===r?Ba(n)===Ba(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return sa(e.arrayValue.values||[],t.arrayValue.values||[],qc);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(yc(n)!==yc(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!qc(n[e],r[e])))return!1;return!0}(e,t);default:return $o()}}function $c(e,t){return void 0!==(e.values||[]).find((e=>qc(e,t)))}function jc(e,t){if(e===t)return 0;const n=Bc(e),r=Bc(t);if(n!==r)return ia(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ia(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=xc(e.integerValue||e.doubleValue),r=xc(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return zc(e.timestampValue,t.timestampValue);case 4:return zc(Lc(e),Lc(t));case 5:return ia(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Dc(e),r=Dc(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=ia(n[e],r[e]);if(0!==t)return t}return ia(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=ia(xc(e.latitude),xc(t.latitude));return 0!==n?n:ia(xc(e.longitude),xc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=jc(n[e],r[e]);if(t)return t}return ia(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Uc.mapValue&&t===Uc.mapValue)return 0;if(e===Uc.mapValue)return 1;if(t===Uc.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=ia(r[e],s[e]);if(0!==t)return t;const o=jc(n[r[e]],i[s[e]]);if(0!==o)return o}return ia(r.length,s.length)}(e.mapValue,t.mapValue);default:throw $o()}}function zc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ia(e,t);const n=Rc(e),r=Rc(t),i=ia(n.seconds,r.seconds);return 0!==i?i:ia(n.nanos,r.nanos)}function Gc(e){return Kc(e)}function Kc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Rc(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Dc(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,fa.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Kc(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Kc(e.fields[i])}`;return n+"}"}(e.mapValue):$o();var t,n}function Hc(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Wc(e){return!!e&&"integerValue"in e}function Qc(e){return!!e&&"arrayValue"in e}function Yc(e){return!!e&&"nullValue"in e}function Xc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Jc(e){return!!e&&"mapValue"in e}function Zc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return vc(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Zc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Zc(e.arrayValue.values[n]);return t}return Object.assign({},e)}function eu(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function tu(e){return"nullValue"in e?Vc:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?Hc(Fc.empty(),fa.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:$o()}function nu(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?Hc(Fc.empty(),fa.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?Uc:$o()}function ru(e,t){const n=jc(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function iu(e,t){const n=jc(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class su{constructor(e){this.value=e}static empty(){return new su({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Jc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zc(t)}setAll(e){let t=da.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Zc(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Jc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Jc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){vc(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new su(Zc(this.value))}}function ou(e){const t=[];return vc(e.fields,((e,n)=>{const r=new da([e]);if(Jc(n)){const e=ou(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Sc(t)
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class au{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new au(e,0,ca.min(),ca.min(),ca.min(),su.empty(),0)}static newFoundDocument(e,t,n,r){return new au(e,1,t,ca.min(),n,r,0)}static newNoDocument(e,t){return new au(e,2,t,ca.min(),ca.min(),su.empty(),0)}static newUnknownDocument(e,t){return new au(e,3,t,ca.min(),ca.min(),su.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ca.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=su.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=su.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ca.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof au&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new au(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cu{constructor(e,t){this.position=e,this.inclusive=t}}function uu(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?fa.comparator(fa.fromName(o.referenceValue),n.key):jc(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function lu(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!qc(e.position[n],t.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hu{constructor(e,t="asc"){this.field=e,this.dir=t}}function du(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fu{}class pu extends fu{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Eu(e,t,n):"array-contains"===t?new Au(e,n):"in"===t?new Nu(e,n):"not-in"===t?new Ru(e,n):"array-contains-any"===t?new xu(e,n):new pu(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ku(e,n):new Su(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(jc(t,this.value)):null!==t&&Bc(this.value)===Bc(t)&&this.matchesComparison(jc(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return $o()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class mu extends fu{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new mu(e,t)}matches(e){return gu(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function gu(e){return"and"===e.op}function yu(e){return"or"===e.op}function vu(e){return wu(e)&&gu(e)}function wu(e){for(const t of e.filters)if(t instanceof mu)return!1;return!0}function _u(e){if(e instanceof pu)return e.field.canonicalString()+e.op.toString()+Gc(e.value);if(vu(e))return e.filters.map((e=>_u(e))).join(",");{const t=e.filters.map((e=>_u(e))).join(",");return`${e.op}(${t})`}}function bu(e,t){return e instanceof pu?function(e,t){return t instanceof pu&&e.op===t.op&&e.field.isEqual(t.field)&&qc(e.value,t.value)}(e,t):e instanceof mu?function(e,t){return t instanceof mu&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&bu(n,t.filters[r])),!0)}(e,t):void $o()}function Iu(e,t){const n=e.filters.concat(t);return mu.create(n,e.op)}function Tu(e){return e instanceof pu?function(e){return`${e.field.canonicalString()} ${e.op} ${Gc(e.value)}`}(e):e instanceof mu?function(e){return e.op.toString()+" {"+e.getFilters().map(Tu).join(" ,")+"}"}(e):"Filter"}class Eu extends pu{constructor(e,t,n){super(e,t,n),this.key=fa.fromName(n.referenceValue)}matches(e){const t=fa.comparator(e.key,this.key);return this.matchesComparison(t)}}class ku extends pu{constructor(e,t){super(e,"in",t),this.keys=Cu("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Su extends pu{constructor(e,t){super(e,"not-in",t),this.keys=Cu("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Cu(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>fa.fromName(e.referenceValue)))}class Au extends pu{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qc(t)&&$c(t.arrayValue,this.value)}}class Nu extends pu{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&$c(this.value.arrayValue,t)}}class Ru extends pu{constructor(e,t){super(e,"not-in",t)}matches(e){if($c(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!$c(this.value.arrayValue,t)}}class xu extends pu{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>$c(this.value.arrayValue,e)))}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Du{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.dt=null}}function Ou(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Du(e,t,n,r,i,s,o)}function Pu(e){const t=zo(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>_u(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Va(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Gc(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Gc(e))).join(",")),t.dt=e}return t.dt}function Lu(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!du(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!bu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!lu(e.startAt,t.startAt)&&lu(e.endAt,t.endAt)}function Mu(e){return fa.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function Fu(e,t){return e.filters.filter((e=>e instanceof pu&&e.field.isEqual(t)))}function Uu(e,t,n){let r=Vc,i=!0;for(const n of Fu(e,t)){let e=Vc,t=!0;switch(n.op){case"<":case"<=":e=tu(n.value);break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=Vc}ru({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];ru({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function Vu(e,t,n){let r=Uc,i=!0;for(const n of Fu(e,t)){let e=Uc,t=!0;switch(n.op){case">=":case">":e=nu(n.value),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=Uc}iu({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];iu({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Bu{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function qu(e,t,n,r,i,s,o,a){return new Bu(e,t,n,r,i,s,o,a)}function $u(e){return new Bu(e)}function ju(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function zu(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Gu(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Ku(e){return null!==e.collectionGroup}function Hu(e){const t=zo(e);if(null===t.wt){t.wt=[];const e=Gu(t),n=zu(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new hu(e)),t.wt.push(new hu(da.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new hu(da.keyField(),e))}}}return t.wt}function Wu(e){const t=zo(e);if(!t._t)if("F"===t.limitType)t._t=Ou(t.path,t.collectionGroup,Hu(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Hu(t)){const t="desc"===n.dir?"asc":"desc";e.push(new hu(n.field,t))}const n=t.endAt?new cu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new cu(t.startAt.position,t.startAt.inclusive):null;t._t=Ou(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function Qu(e,t){t.getFirstInequalityField(),Gu(e);const n=e.filters.concat([t]);return new Bu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Yu(e,t,n){return new Bu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Xu(e,t){return Lu(Wu(e),Wu(t))&&e.limitType===t.limitType}function Ju(e){return`${Pu(Wu(e))}|lt:${e.limitType}`}function Zu(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Tu(e))).join(", ")}]`),Va(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Gc(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Gc(e))).join(",")),`Target(${t})`}(Wu(e))}; limitType=${e.limitType})`}function el(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):fa.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Hu(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=uu(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Hu(e),t))&&!(e.endAt&&!function(e,t,n){const r=uu(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Hu(e),t))}(e,t)}function tl(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function nl(e){return(t,n)=>{let r=!1;for(const i of Hu(e)){const e=rl(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function rl(e,t,n){const r=e.field.isKeyField()?fa.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?jc(r,i):$o()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return $o()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class il{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){vc(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return wc(this.inner)}size(){return this.innerSize}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const sl=new _c(fa.comparator);function ol(){return sl}const al=new _c(fa.comparator);function cl(...e){let t=al;for(const n of e)t=t.insert(n.key,n);return t}function ul(e){let t=al;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ll(){return dl()}function hl(){return dl()}function dl(){return new il((e=>e.toString()),((e,t)=>e.isEqual(t)))}const fl=new _c(fa.comparator),pl=new Tc(fa.comparator);function ml(...e){let t=pl;for(const n of e)t=t.add(n);return t}const gl=new Tc(ia);function yl(){return gl}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function vl(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ba(t)?"-0":t}}function wl(e){return{integerValue:""+e}}function _l(e,t){return qa(t)?wl(t):vl(e,t)}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bl{constructor(){this._=void 0}}function Il(e,t,n){return e instanceof kl?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Oc(t)&&(t=Pc(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Sl?Cl(e,t):e instanceof Al?Nl(e,t):function(e,t){const n=El(e,t),r=xl(n)+xl(e.gt);return Wc(n)&&Wc(e.gt)?wl(r):vl(e.serializer,r)}(e,t)}function Tl(e,t,n){return e instanceof Sl?Cl(e,t):e instanceof Al?Nl(e,t):n}function El(e,t){return e instanceof Rl?Wc(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class kl extends bl{}class Sl extends bl{constructor(e){super(),this.elements=e}}function Cl(e,t){const n=Dl(t);for(const t of e.elements)n.some((e=>qc(e,t)))||n.push(t);return{arrayValue:{values:n}}}class Al extends bl{constructor(e){super(),this.elements=e}}function Nl(e,t){let n=Dl(t);for(const t of e.elements)n=n.filter((e=>!qc(e,t)));return{arrayValue:{values:n}}}class Rl extends bl{constructor(e,t){super(),this.serializer=e,this.gt=t}}function xl(e){return xc(e.integerValue||e.doubleValue)}function Dl(e){return Qc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ol{constructor(e,t){this.field=e,this.transform=t}}class Pl{constructor(e,t){this.version=e,this.transformResults=t}}class Ll{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ll}static exists(e){return new Ll(void 0,e)}static updateTime(e){return new Ll(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ml(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Fl{}function Ul(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Wl(e.key,Ll.none()):new jl(e.key,e.data,Ll.none());{const n=e.data,r=su.empty();let i=new Tc(da.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new zl(e.key,r,new Sc(i.toArray()),Ll.none())}}function Vl(e,t,n){e instanceof jl?function(e,t,n){const r=e.value.clone(),i=Kl(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof zl?function(e,t,n){if(!Ml(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Kl(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Gl(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Bl(e,t,n,r){return e instanceof jl?function(e,t,n,r){if(!Ml(e.precondition,t))return n;const i=e.value.clone(),s=Hl(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof zl?function(e,t,n,r){if(!Ml(e.precondition,t))return n;const i=Hl(e.fieldTransforms,r,t),s=t.data;return s.setAll(Gl(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Ml(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function ql(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=El(r.transform,e||null);null!=i&&(null===n&&(n=su.empty()),n.set(r.field,i))}return n||null}function $l(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&sa(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Sl&&t instanceof Sl||e instanceof Al&&t instanceof Al?sa(e.elements,t.elements,qc):e instanceof Rl&&t instanceof Rl?qc(e.gt,t.gt):e instanceof kl&&t instanceof kl}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class jl extends Fl{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class zl extends Fl{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Gl(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Kl(e,t,n){const r=new Map;jo(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Tl(o,a,n[i]))}return r}function Hl(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Il(e,s,t))}return r}class Wl extends Fl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ql extends Fl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yl{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&Vl(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Bl(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Bl(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=hl();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Ul(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(ca.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ml())}isEqual(e){return this.batchId===e.batchId&&sa(this.mutations,e.mutations,((e,t)=>$l(e,t)))&&sa(this.baseMutations,e.baseMutations,((e,t)=>$l(e,t)))}}class Xl{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){jo(e.mutations.length===n.length);let r=fl;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new Xl(e,t,n,r)}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Jl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zl{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var eh,th;function nh(e){switch(e){default:return $o();case Go.CANCELLED:case Go.UNKNOWN:case Go.DEADLINE_EXCEEDED:case Go.RESOURCE_EXHAUSTED:case Go.INTERNAL:case Go.UNAVAILABLE:case Go.UNAUTHENTICATED:return!1;case Go.INVALID_ARGUMENT:case Go.NOT_FOUND:case Go.ALREADY_EXISTS:case Go.PERMISSION_DENIED:case Go.FAILED_PRECONDITION:case Go.ABORTED:case Go.OUT_OF_RANGE:case Go.UNIMPLEMENTED:case Go.DATA_LOSS:return!0}}function rh(e){if(void 0===e)return Vo("GRPC error has no .code"),Go.UNKNOWN;switch(e){case eh.OK:return Go.OK;case eh.CANCELLED:return Go.CANCELLED;case eh.UNKNOWN:return Go.UNKNOWN;case eh.DEADLINE_EXCEEDED:return Go.DEADLINE_EXCEEDED;case eh.RESOURCE_EXHAUSTED:return Go.RESOURCE_EXHAUSTED;case eh.INTERNAL:return Go.INTERNAL;case eh.UNAVAILABLE:return Go.UNAVAILABLE;case eh.UNAUTHENTICATED:return Go.UNAUTHENTICATED;case eh.INVALID_ARGUMENT:return Go.INVALID_ARGUMENT;case eh.NOT_FOUND:return Go.NOT_FOUND;case eh.ALREADY_EXISTS:return Go.ALREADY_EXISTS;case eh.PERMISSION_DENIED:return Go.PERMISSION_DENIED;case eh.FAILED_PRECONDITION:return Go.FAILED_PRECONDITION;case eh.ABORTED:return Go.ABORTED;case eh.OUT_OF_RANGE:return Go.OUT_OF_RANGE;case eh.UNIMPLEMENTED:return Go.UNIMPLEMENTED;case eh.DATA_LOSS:return Go.DATA_LOSS;default:return $o()}}(th=eh||(eh={}))[th.OK=0]="OK",th[th.CANCELLED=1]="CANCELLED",th[th.UNKNOWN=2]="UNKNOWN",th[th.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",th[th.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",th[th.NOT_FOUND=5]="NOT_FOUND",th[th.ALREADY_EXISTS=6]="ALREADY_EXISTS",th[th.PERMISSION_DENIED=7]="PERMISSION_DENIED",th[th.UNAUTHENTICATED=16]="UNAUTHENTICATED",th[th.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",th[th.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",th[th.ABORTED=10]="ABORTED",th[th.OUT_OF_RANGE=11]="OUT_OF_RANGE",th[th.UNIMPLEMENTED=12]="UNIMPLEMENTED",th[th.INTERNAL=13]="INTERNAL",th[th.UNAVAILABLE=14]="UNAVAILABLE",th[th.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ih{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return sh}static getOrCreateInstance(){return null===sh&&(sh=new ih),sh}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let sh=null;
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function oh(){return new TextEncoder}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ah=new Do([4294967295,4294967295],0);function ch(e){const t=oh().encode(e),n=new xo;return n.update(t),new Uint8Array(n.digest())}function uh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Do([n,r],0),new Do([i,s],0)]}class lh{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new hh(`Invalid padding: ${t}`);if(n<0)throw new hh(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new hh(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new hh(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Do.fromNumber(this.It)}Et(e,t,n){let r=e.add(t.multiply(Do.fromNumber(n)));return 1===r.compare(ah)&&(r=new Do([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=ch(e),[n,r]=uh(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,r,e);if(!this.At(t))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new lh(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.It)return;const t=ch(e),[n,r]=uh(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,r,e);this.Rt(t)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class hh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class dh{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,fh.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new dh(ca.min(),r,new _c(ia),ol(),ml())}}class fh{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new fh(n,t,ml(),ml(),ml())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ph{constructor(e,t,n,r){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=r}}class mh{constructor(e,t){this.targetId=e,this.Vt=t}}class gh{constructor(e,t,n=Ac.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class yh{constructor(){this.St=0,this.Dt=_h(),this.Ct=Ac.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ml(),t=ml(),n=ml();return this.Dt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:$o()}})),new fh(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=_h()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class vh{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=ol(),this.zt=wh(),this.Wt=new _c(ia)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:$o()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,r=e.Vt.count,i=this.se(n);if(i){const s=i.target;if(Mu(s))if(0===r){const e=new fa(s.path);this.Yt(n,e,au.newNoDocument(e,ca.min()))}else jo(1===r);else{const i=this.ie(n);if(i!==r){const r=this.re(e,i);if(0!==r){this.ee(n);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=ih.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,i,s,o,a,c;const u={localCacheCount:t,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===e,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(r,i,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:r}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=Dc(i).toUint8Array()}catch(e){if(e instanceof Cc)return Bo("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{c=new lh(a,s,o)}catch(e){return Bo(e instanceof hh?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===c.It?1:r!==t-this.oe(e.targetId,c)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Gt.ue(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.vt(s)||(this.Yt(e,n,null),r++)})),r}ce(e){const t=new Map;this.Qt.forEach(((n,r)=>{const i=this.se(r);if(i){if(n.current&&Mu(i.target)){const t=new fa(i.target.path);null!==this.jt.get(t)||this.ae(r,t)||this.Yt(r,t,au.newNoDocument(t,e))}n.Mt&&(t.set(r,n.Ot()),n.Ft())}}));let n=ml();this.zt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const r=new dh(e,t,this.Wt,this.jt,n);return this.jt=ol(),this.zt=wh(),this.Wt=new _c(ia),r}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new yh,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Tc(ia),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||Uo("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new yh),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function wh(){return new _c(fa.comparator)}function _h(){return new _c(fa.comparator)}const bh={asc:"ASCENDING",desc:"DESCENDING"},Ih={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Th={and:"AND",or:"OR"};class Eh{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function kh(e,t){return e.useProto3Json||Va(t)?t:{value:t}}function Sh(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ch(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ah(e,t){return Sh(e,t.toTimestamp())}function Nh(e){return jo(!!e),ca.fromTimestamp(function(e){const t=Rc(e);return new aa(t.seconds,t.nanos)}(e))}function Rh(e,t){return function(e){return new la(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function xh(e){const t=la.fromString(e);return jo(Zh(t)),t}function Dh(e,t){return Rh(e.databaseId,t.path)}function Oh(e,t){const n=xh(t);if(n.get(1)!==e.databaseId.projectId)throw new Ko(Go.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ko(Go.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new fa(Fh(n))}function Ph(e,t){return Rh(e.databaseId,t)}function Lh(e){const t=xh(e);return 4===t.length?la.emptyPath():Fh(t)}function Mh(e){return new la(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Fh(e){return jo(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Uh(e,t,n){return{name:Dh(e,t),fields:n.value.mapValue.fields}}function Vh(e,t,n){const r=Oh(e,t.name),i=Nh(t.updateTime),s=t.createTime?Nh(t.createTime):ca.min(),o=new su({mapValue:{fields:t.fields}}),a=au.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function Bh(e,t){let n;if(t instanceof jl)n={update:Uh(e,t.key,t.value)};else if(t instanceof Wl)n={delete:Dh(e,t.key)};else if(t instanceof zl)n={update:Uh(e,t.key,t.data),updateMask:Jh(t.fieldMask)};else{if(!(t instanceof Ql))return $o();n={verify:Dh(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof kl)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Sl)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Al)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Rl)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw $o()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Ah(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:$o()}(e,t.precondition)),n}function qh(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Ll.updateTime(Nh(e.updateTime)):void 0!==e.exists?Ll.exists(e.exists):Ll.none()}(t.currentDocument):Ll.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)jo("REQUEST_TIME"===t.setToServerValue),n=new kl;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Sl(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Al(e)}else"increment"in t?n=new Rl(e,t.increment):$o();const r=da.fromServerFormat(t.fieldPath);return new Ol(r,n)}(e,t))):[];if(t.update){t.update.name;const i=Oh(e,t.update.name),s=new su({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Sc(t.map((e=>da.fromServerFormat(e))))}(t.updateMask);return new zl(i,s,e,n,r)}return new jl(i,s,n,r)}if(t.delete){const r=Oh(e,t.delete);return new Wl(r,n)}if(t.verify){const r=Oh(e,t.verify);return new Ql(r,n)}return $o()}function $h(e,t){return{documents:[Ph(e,t.path)]}}function jh(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Ph(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ph(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return Xh(mu.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Qh(e.field),direction:Kh(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=kh(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function zh(e){let t=Lh(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){jo(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Gh(e);return t instanceof mu&&vu(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new hu(Yh(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Va(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new cu(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new cu(n,t)}(n.endAt)),qu(t,i,o,s,a,"F",c,u)}function Gh(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Yh(e.unaryFilter.field);return pu.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Yh(e.unaryFilter.field);return pu.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Yh(e.unaryFilter.field);return pu.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Yh(e.unaryFilter.field);return pu.create(i,"!=",{nullValue:"NULL_VALUE"});default:return $o()}}(e):void 0!==e.fieldFilter?function(e){return pu.create(Yh(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $o()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return mu.create(e.compositeFilter.filters.map((e=>Gh(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return $o()}}(e.compositeFilter.op))}(e):$o()}function Kh(e){return bh[e]}function Hh(e){return Ih[e]}function Wh(e){return Th[e]}function Qh(e){return{fieldPath:e.canonicalString()}}function Yh(e){return da.fromServerFormat(e.fieldPath)}function Xh(e){return e instanceof pu?function(e){if("=="===e.op){if(Xc(e.value))return{unaryFilter:{field:Qh(e.field),op:"IS_NAN"}};if(Yc(e.value))return{unaryFilter:{field:Qh(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Xc(e.value))return{unaryFilter:{field:Qh(e.field),op:"IS_NOT_NAN"}};if(Yc(e.value))return{unaryFilter:{field:Qh(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qh(e.field),op:Hh(e.op),value:e.value}}}(e):e instanceof mu?function(e){const t=e.getFilters().map((e=>Xh(e)));return 1===t.length?t[0]:{compositeFilter:{op:Wh(e.op),filters:t}}}(e):$o()}function Jh(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Zh(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ed{constructor(e,t,n,r,i=ca.min(),s=ca.min(),o=Ac.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new ed(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ed(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ed(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ed(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class td{constructor(e){this.fe=e}}function nd(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:rd(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Dh(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Sh(e,t.version.toTimestamp()),createTime:Sh(e,t.createTime.toTimestamp())}}(e.fe,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:id(t.version)};else{if(!t.isUnknownDocument())return $o();r.unknownDocument={path:n.path.toArray(),version:id(t.version)}}return r}function rd(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function id(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function sd(e){const t=new aa(e.seconds,e.nanoseconds);return ca.fromTimestamp(t)}function od(e,t){const n=(t.baseMutations||[]).map((t=>qh(e.fe,t)));for(let e=0;e<t.mutations.length-1;++e){const n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){const r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}const r=t.mutations.map((t=>qh(e.fe,t))),i=aa.fromMillis(t.localWriteTimeMs);return new Yl(t.batchId,i,n,r)}function ad(e){const t=sd(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?sd(e.lastLimboFreeSnapshotVersion):ca.min();let r;var i;return void 0!==e.query.documents?(jo(1===(i=e.query).documents.length),r=Wu($u(Lh(i.documents[0])))):r=function(e){return Wu(zh(e))}(e.query),new ed(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Ac.fromBase64String(e.resumeToken))}function cd(e,t){const n=id(t.snapshotVersion),r=id(t.lastLimboFreeSnapshotVersion);let i;i=Mu(t.target)?$h(e.fe,t.target):jh(e.fe,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Pu(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function ud(e){const t=zh({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Yu(t,t.limit,"L"):t}function ld(e,t){return new Jl(t.largestBatchId,qh(e.fe,t.overlayMutation))}function hd(e,t){const n=t.path.lastSegment();return[e,$a(t.path.popLast()),n]}function dd(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:id(r.readTime),documentKey:$a(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fd{getBundleMetadata(e,t){return pd(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:sd(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return pd(e).put({bundleId:(n=t).id,createTime:id(Nh(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return md(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:ud(t.bundledQuery),readTime:sd(t.readTime)};var t}))}saveNamedQuery(e,t){return md(e).put(function(e){return{name:e.name,readTime:id(Nh(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function pd(e){return gc(e,"bundles")}function md(e){return gc(e,"namedQueries")}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gd{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){const n=t.uid||"";return new gd(e,n)}getOverlay(e,t){return yd(e).get(hd(this.userId,t)).next((e=>e?ld(this.serializer,e):null))}getOverlays(e,t){const n=ll();return Sa.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new Jl(t,i);r.push(this.we(e,s))})),Sa.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add($a(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(yd(e).J("collectionPathOverlayIndex",r))})),Sa.waitFor(i)}getOverlaysForCollection(e,t,n){const r=ll(),i=$a(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return yd(e).j("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=ld(this.serializer,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=ll();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return yd(e).X({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=ld(this.serializer,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}we(e,t){return yd(e).put(function(e,t,n){const[r,i,s]=hd(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Bh(e.fe,n.mutation)}}(this.serializer,this.userId,t))}}function yd(e){return gc(e,"documentOverlays")}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vd{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(xc(e.integerValue));else if("doubleValue"in e){const n=xc(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),Ba(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Dc(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?eu(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):$o()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const e of Object.keys(n))this.Te(e,t),this.me(n[e],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const e of n)this.me(e,t)}ve(e,t){this.ye(t,37),fa.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}function wd(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function _d(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=wd(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}vd.Ve=new vd;class bd{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.De(n.value),n=t.next();this.Ce()}xe(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ne(n.value),n=t.next();this.ke()}Me(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.De(e);else if(e<2048)this.De(960|e>>>6),this.De(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.De(480|e>>>12),this.De(128|63&e>>>6),this.De(128|63&e);else{const e=t.codePointAt(0);this.De(240|e>>>18),this.De(128|63&e>>>12),this.De(128|63&e>>>6),this.De(128|63&e)}}this.Ce()}$e(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ne(e);else if(e<2048)this.Ne(960|e>>>6),this.Ne(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ne(480|e>>>12),this.Ne(128|63&e>>>6),this.Ne(128|63&e);else{const e=t.codePointAt(0);this.Ne(240|e>>>18),this.Ne(128|63&e>>>12),this.Ne(128|63&e>>>6),this.Ne(128|63&e)}}this.ke()}Oe(e){const t=this.Fe(e),n=_d(t);this.Be(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}Le(e){const t=this.Fe(e),n=_d(t);this.Be(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}De(e){const t=255&e;0===t?(this.Ue(0),this.Ue(255)):255===t?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){const t=255&e;0===t?(this.Ge(0),this.Ge(255)):255===t?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Id{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class Td{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class Ed{constructor(){this.je=new bd,this.ze=new Id(this.je),this.We=new Td(this.je)}seed(e){this.je.seed(e)}He(e){return 0===e?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kd{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Je(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new kd(this.indexId,this.documentKey,this.arrayValue,n)}}function Sd(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Cd(e.arrayValue,t.arrayValue),0!==n?n:(n=Cd(e.directionalValue,t.directionalValue),0!==n?n:fa.comparator(e.documentKey,t.documentKey)))}function Cd(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ad{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const t of e.filters){const e=t;e.isInequality()?this.Ze=e:this.Xe.push(e)}}tn(e){jo(e.collectionGroup===this.collectionId);const t=ma(e);if(void 0!==t&&!this.en(t))return!1;const n=ga(e);let r=new Set,i=0,s=0;for(;i<n.length&&this.en(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(void 0!==this.Ze){if(!r.has(this.Ze.field.canonicalString())){const e=n[i];if(!this.nn(this.Ze,e)||!this.sn(this.Ye[s++],e))return!1}++i}for(;i<n.length;++i){const e=n[i];if(s>=this.Ye.length||!this.sn(this.Ye[s++],e))return!1}return!0}en(e){for(const t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Nd(e){var t,n;if(jo(e instanceof pu||e instanceof mu),e instanceof pu){if(e instanceof Nu){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map((t=>pu.create(e.field,"==",t))))||[];return mu.create(r,"or")}return e}const r=e.filters.map((e=>Nd(e)));return mu.create(r,e.op)}function Rd(e){if(0===e.getFilters().length)return[];const t=Pd(Nd(e));return jo(Od(t)),xd(t)||Dd(t)?[t]:t.getFilters()}function xd(e){return e instanceof pu}function Dd(e){return e instanceof mu&&vu(e)}function Od(e){return xd(e)||Dd(e)||function(e){if(e instanceof mu&&yu(e)){for(const t of e.getFilters())if(!xd(t)&&!Dd(t))return!1;return!0}return!1}(e)}function Pd(e){if(jo(e instanceof pu||e instanceof mu),e instanceof pu)return e;if(1===e.filters.length)return Pd(e.filters[0]);const t=e.filters.map((e=>Pd(e)));let n=mu.create(t,e.op);return n=Fd(n),Od(n)?n:(jo(n instanceof mu),jo(gu(n)),jo(n.filters.length>1),n.filters.reduce(((e,t)=>Ld(e,t))))}function Ld(e,t){let n;return jo(e instanceof pu||e instanceof mu),jo(t instanceof pu||t instanceof mu),n=e instanceof pu?t instanceof pu?function(e,t){return mu.create([e,t],"and")}(e,t):Md(e,t):t instanceof pu?Md(t,e):function(e,t){if(jo(e.filters.length>0&&t.filters.length>0),gu(e)&&gu(t))return Iu(e,t.getFilters());const n=yu(e)?e:t,r=yu(e)?t:e,i=n.filters.map((e=>Ld(e,r)));return mu.create(i,"or")}(e,t),Fd(n)}function Md(e,t){if(gu(t))return Iu(t,e.getFilters());{const n=t.filters.map((t=>Ld(e,t)));return mu.create(n,"or")}}function Fd(e){if(jo(e instanceof pu||e instanceof mu),e instanceof pu)return e;const t=e.getFilters();if(1===t.length)return Fd(t[0]);if(wu(e))return e;const n=t.map((e=>Fd(e))),r=[];return n.forEach((t=>{t instanceof pu?r.push(t):t instanceof mu&&(t.op===e.op?r.push(...t.filters):r.push(t))})),1===r.length?r[0]:mu.create(r,e.op)
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class Ud{constructor(){this.rn=new Vd}addToCollectionParentIndex(e,t){return this.rn.add(t),Sa.resolve()}getCollectionParents(e,t){return Sa.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return Sa.resolve()}deleteFieldIndex(e,t){return Sa.resolve()}getDocumentsMatchingTarget(e,t){return Sa.resolve(null)}getIndexType(e,t){return Sa.resolve(0)}getFieldIndexes(e,t){return Sa.resolve([])}getNextCollectionGroupToUpdate(e){return Sa.resolve(null)}getMinOffset(e,t){return Sa.resolve(ba.min())}getMinOffsetFromCollectionGroup(e,t){return Sa.resolve(ba.min())}updateCollectionGroup(e,t,n){return Sa.resolve()}updateIndexEntries(e,t){return Sa.resolve()}}class Vd{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Tc(la.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Tc(la.comparator)).toArray()}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Bd=new Uint8Array(0);class qd{constructor(e,t){this.user=e,this.databaseId=t,this.on=new Vd,this.un=new il((e=>Pu(e)),((e,t)=>Lu(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.on.add(t)}));const i={collectionId:n,parent:$a(r)};return $d(e).put(i)}return Sa.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[oa(t),""],!1,!0);return $d(e).j(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(Ga(r.parent))}return n}))}addFieldIndex(e,t){const n=zd(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=Gd(e);return i.next((e=>{n.put(dd(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=zd(e),r=Gd(e),i=jd(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=jd(e);let r=!0;const i=new Map;return Sa.forEach(this.cn(t),(t=>this.an(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=ml();const r=[];return Sa.forEach(i,((i,s)=>{var o;Uo("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${Pu(t)}`);const a=function(e,t){const n=ma(t);if(void 0===n)return null;for(const t of Fu(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of ga(t))for(const t of Fu(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of ga(t)){const t=0===i.kind?Uu(e,i.fieldPath,e.startAt):Vu(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new cu(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of ga(t)){const t=0===i.kind?Vu(e,i.fieldPath,e.endAt):Uu(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new cu(n,r)}(s,i),h=this.hn(i,s,u),d=this.hn(i,s,l),f=this.ln(i,s,c),p=this.fn(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return Sa.forEach(p,(i=>n.H(i,t.limit).next((t=>{t.forEach((t=>{const n=fa.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return Sa.resolve(null)}))}cn(e){let t=this.un.get(e);return t||(t=0===e.filters.length?[e]:Rd(mu.create(e.filters,"and")).map((t=>Ou(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt))),this.un.set(e,t),t)}fn(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.dn(t[l/c]):Bd,h=this.wn(e,a,n[l%c],r),d=this._n(e,a,i[l%c],s),f=o.map((t=>this.wn(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}wn(e,t,n,r){const i=new kd(e,fa.empty(),t,n);return r?i:i.Je()}_n(e,t,n,r){const i=new kd(e,fa.empty(),t,n);return r?i.Je():i}an(e,t){const n=new Ad(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.tn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;const r=this.cn(t);return Sa.forEach(r,(t=>this.an(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new Tc(da.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n))}mn(e,t){const n=new Ed;for(const r of ga(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.He(r.kind);vd.Ve._e(e,i)}return n.Qe()}dn(e){const t=new Ed;return vd.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){const n=new Ed;return vd.Ve._e(Hc(this.databaseId,t),n.He(function(e){const t=ga(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Qe()}ln(e,t,n){if(null===n)return[];let r=[];r.push(new Ed);let i=0;for(const s of ga(e)){const e=n[i++];for(const n of r)if(this.yn(t,s.fieldPath)&&Qc(e))r=this.pn(r,s,e);else{const t=n.He(s.kind);vd.Ve._e(e,t)}}return this.In(r)}hn(e,t,n){return this.ln(e,t,n.position)}In(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Qe();return t}pn(e,t,n){const r=[...e],i=[];for(const e of n.arrayValue.values||[])for(const n of r){const r=new Ed;r.seed(n.Qe()),vd.Ve._e(e,r.He(t.kind)),i.push(r)}return i}yn(e,t){return!!e.filters.find((e=>e instanceof pu&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=zd(e),r=Gd(e);return(t?n.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.j()).next((e=>{const t=[];return Sa.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new va(t.sequenceNumber,new ba(sd(t.readTime),new fa(Ga(t.documentKey)),t.largestBatchId)):va.empty(),r=e.fields.map((([e,t])=>new ya(da.fromServerFormat(e),t)));return new pa(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:ia(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=zd(e),i=Gd(e);return this.Tn(e).next((e=>r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Sa.forEach(t,(t=>i.put(dd(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Sa.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?Sa.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),Sa.forEach(i,(n=>this.En(e,t,n).next((t=>{const i=this.An(r,n);return t.isEqual(i)?Sa.resolve():this.vn(e,r,n,t,i)})))))))}))}Rn(e,t,n,r){return jd(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.gn(n,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,n,r){return jd(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.gn(n,t.key),t.key.path.toArray()])}En(e,t,n){const r=jd(e);let i=new Tc(Sd);return r.X({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.gn(n,t)])},((e,r)=>{i=i.add(new kd(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}An(e,t){let n=new Tc(Sd);const r=this.mn(t,e);if(null==r)return n;const i=ma(t);if(null!=i){const s=e.data.field(i.fieldPath);if(Qc(s))for(const i of s.arrayValue.values||[])n=n.add(new kd(t.indexId,e.key,this.dn(i),r))}else n=n.add(new kd(t.indexId,e.key,Bd,r));return n}vn(e,t,n,r,i){Uo("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=kc(s),c=kc(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=kc(o)):t?(i(a),a=kc(s)):(a=kc(s),c=kc(o))}}(r,i,Sd,(r=>{s.push(this.Rn(e,t,n,r))}),(r=>{s.push(this.Pn(e,t,n,r))})),Sa.waitFor(s)}Tn(e){let t=1;return Gd(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>Sd(e,t))).filter(((e,t,n)=>!t||0!==Sd(e,n[t-1])));const r=[];r.push(e);for(const i of n){const n=Sd(i,e),s=Sd(i,t);if(0===n)r[0]=e.Je();else if(n>0&&s<0)r.push(i),r.push(i.Je());else if(s>0)break}r.push(t);const i=[];for(let e=0;e<r.length;e+=2){if(this.bn(r[e],r[e+1]))return[];const t=[r[e].indexId,this.uid,r[e].arrayValue,r[e].directionalValue,Bd,[]],n=[r[e+1].indexId,this.uid,r[e+1].arrayValue,r[e+1].directionalValue,Bd,[]];i.push(IDBKeyRange.bound(t,n))}return i}bn(e,t){return Sd(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Kd)}getMinOffset(e,t){return Sa.mapArray(this.cn(t),(t=>this.an(e,t).next((e=>e||$o())))).next(Kd)}}function $d(e){return gc(e,"collectionParents")}function jd(e){return gc(e,"indexEntries")}function zd(e){return gc(e,"indexConfiguration")}function Gd(e){return gc(e,"indexState")}function Kd(e){jo(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;Ia(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new ba(t.readTime,t.documentKey,n)}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Hd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Wd{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Wd(e,Wd.DEFAULT_COLLECTION_PERCENTILE,Wd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Qd(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.X({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{jo(1===a)})));const u=[];for(const e of n.mutations){const r=Wa(t,e.key.path,n.batchId);s.push(i.delete(r)),u.push(e.key)}return Sa.waitFor(s).next((()=>u))}function Yd(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw $o();t=e.noDocument}return JSON.stringify(t).length}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Wd.DEFAULT_COLLECTION_PERCENTILE=10,Wd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wd.DEFAULT=new Wd(41943040,Wd.DEFAULT_COLLECTION_PERCENTILE,Wd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wd.DISABLED=new Wd(-1,0,0);class Xd{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Vn={}}static de(e,t,n,r){jo(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Xd(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Zd(e).X({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=ef(e),s=Zd(e);return s.add({}).next((o=>{jo("number"==typeof o);const a=new Yl(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>Bh(e.fe,t))),i=n.mutations.map((t=>Bh(e.fe,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,a),u=[];let l=new Tc(((e,t)=>ia(e.canonicalString(),t.canonicalString())));for(const e of r){const t=Wa(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,Qa))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.Vn[o]=a.keys()})),Sa.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Zd(e).get(t).next((e=>e?(jo(e.userId===this.userId),od(this.serializer,e)):null))}Sn(e,t){return this.Vn[t]?Sa.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.Vn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Zd(e).X({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(jo(t.batchId>=n),i=od(this.serializer,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Zd(e).X({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Zd(e).j("userMutationsIndex",t).next((e=>e.map((e=>od(this.serializer,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Ha(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return ef(e).X({range:r},((n,r,s)=>{const[o,a,c]=n,u=Ga(a);if(o===this.userId&&t.path.isEqual(u))return Zd(e).get(c).next((e=>{if(!e)throw $o();jo(e.userId===this.userId),i.push(od(this.serializer,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Tc(ia);const r=[];return t.forEach((t=>{const i=Ha(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=ef(e).X({range:s},((e,r,i)=>{const[s,o,a]=e,c=Ga(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),Sa.waitFor(r).next((()=>this.Dn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=Ha(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Tc(ia);return ef(e).X({range:s},((e,t,i)=>{const[s,a,c]=e,u=Ga(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.Dn(e,o)))}Dn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Zd(e).get(t).next((e=>{if(null===e)throw $o();jo(e.userId===this.userId),n.push(od(this.serializer,e))})))})),Sa.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return Qd(e.ht,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.Cn(t.batchId)})),Sa.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Sa.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return ef(e).X({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=Ga(e[1]);r.push(t)}else n.done()})).next((()=>{jo(0===r.length)}))}))}containsKey(e,t){return Jd(e,this.userId,t)}xn(e){return tf(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Jd(e,t,n){const r=Ha(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ef(e).X({range:s,Y:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function Zd(e){return gc(e,"mutations")}function ef(e){return gc(e,"documentMutations")}function tf(e){return gc(e,"mutationQueues")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nf{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new nf(0)}static Mn(){return new nf(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rf{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next((t=>{const n=new nf(t.highestTargetId);return t.highestTargetId=n.next(),this.On(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.$n(e).next((e=>ca.fromTimestamp(new aa(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.$n(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.$n(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.On(e,r))))}addTargetData(e,t){return this.Fn(e,t).next((()=>this.$n(e).next((n=>(n.targetCount+=1,this.Bn(t,n),this.On(e,n))))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>sf(e).delete(t.targetId))).next((()=>this.$n(e))).next((t=>(jo(t.targetCount>0),t.targetCount-=1,this.On(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return sf(e).X(((s,o)=>{const a=ad(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>Sa.waitFor(i))).next((()=>r))}forEachTarget(e,t){return sf(e).X(((e,n)=>{const r=ad(n);t(r)}))}$n(e){return of(e).get("targetGlobalKey").next((e=>(jo(null!==e),e)))}On(e,t){return of(e).put("targetGlobalKey",t)}Fn(e,t){return sf(e).put(cd(this.serializer,t))}Bn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.$n(e).next((e=>e.targetCount))}getTargetData(e,t){const n=Pu(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return sf(e).X({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=ad(n);Lu(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=af(e);return t.forEach((t=>{const s=$a(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),Sa.waitFor(r)}removeMatchingKeys(e,t,n){const r=af(e);return Sa.forEach(t,(t=>{const i=$a(t.path);return Sa.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=af(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=af(e);let i=ml();return r.X({range:n,Y:!0},((e,t,n)=>{const r=Ga(e[1]),s=new fa(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=$a(t.path),r=IDBKeyRange.bound([n],[oa(n)],!1,!0);let i=0;return af(e).X({index:"documentTargetsIndex",Y:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}le(e,t){return sf(e).get(t).next((e=>e?ad(e):null))}}function sf(e){return gc(e,"targets")}function of(e){return gc(e,"targetGlobal")}function af(e){return gc(e,"targetDocuments")}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function cf([e,t],[n,r]){const i=ia(e,n);return 0===i?ia(t,r):i}class uf{constructor(e){this.Ln=e,this.buffer=new Tc(cf),this.qn=0}Un(){return++this.qn}Kn(e){const t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();cf(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class lf{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Gn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return null!==this.Gn}Qn(e){Uo("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){xa(e)?Uo("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await ka(e)}await this.Qn(3e5)}))}}class hf{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Sa.resolve(Ua.ct);const n=new uf(t);return this.jn.forEachTarget(e,(e=>n.Kn(e.sequenceNumber))).next((()=>this.jn.Wn(e,(e=>n.Kn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Uo("LruGarbageCollector","Garbage collection skipped; disabled"),Sa.resolve(Hd)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Uo("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hd):this.Hn(e,t)))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let n,r,i,s,o,a,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Uo("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(c=Date.now(),Fo()<=at.DEBUG&&Uo("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(a-o)+"ms\n"+`\tRemoved ${e} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),Sa.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class df{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new hf(e,t)}(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Jn(e){let t=0;return this.Wn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,((e,n)=>t(n)))}addReference(e,t,n){return ff(e,n)}removeReference(e,t,n){return ff(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return ff(e,t)}Xn(e,t){return function(e,t){let n=!1;return tf(e).Z((r=>Jd(e,r,t).next((e=>(e&&(n=!0),Sa.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Yn(e,((s,o)=>{if(o<=t){const t=this.Xn(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,ca.min()),af(e).delete([0,$a(s.path)]))))}));r.push(t)}})).next((()=>Sa.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return ff(e,t)}Yn(e,t){const n=af(e);let r,i=Ua.ct;return n.X({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==Ua.ct&&t(new fa(Ga(r)),i),i=o,r=s):i=Ua.ct})).next((()=>{i!==Ua.ct&&t(new fa(Ga(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ff(e,t){return af(e).put(function(e,t){return{targetId:0,path:$a(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pf{constructor(){this.changes=new il((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,au.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Sa.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mf{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return wf(e).put(n)}removeEntry(e,t,n){return wf(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],rd(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Zn(e,n))))}getEntry(e,t){let n=au.newInvalidDocument(t);return wf(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(_f(t))},((e,r)=>{n=this.ts(t,r)})).next((()=>n))}es(e,t){let n={size:0,document:au.newInvalidDocument(t)};return wf(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(_f(t))},((e,r)=>{n={document:this.ts(t,r),size:Yd(r)}})).next((()=>n))}getEntries(e,t){let n=ol();return this.ns(e,t,((e,t)=>{const r=this.ts(e,t);n=n.insert(e,r)})).next((()=>n))}ss(e,t){let n=ol(),r=new _c(fa.comparator);return this.ns(e,t,((e,t)=>{const i=this.ts(e,t);n=n.insert(e,i),r=r.insert(e,Yd(t))})).next((()=>({documents:n,rs:r})))}ns(e,t,n){if(t.isEmpty())return Sa.resolve();let r=new Tc(If);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(_f(r.first()),_f(r.last())),s=r.getIterator();let o=s.getNext();return wf(e).X({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=fa.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&If(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.G(_f(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getDocumentsMatchingQuery(e,t,n,r){const i=t.path,s=[i.popLast().toArray(),i.lastSegment(),rd(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],o=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return wf(e).j(IDBKeyRange.bound(s,o,!0)).next((e=>{let n=ol();for(const i of e){const e=this.ts(fa.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(el(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n}))}getAllFromCollectionGroup(e,t,n,r){let i=ol();const s=bf(t,n),o=bf(t,ba.max());return wf(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.ts(fa.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new yf(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return vf(e).get("remoteDocumentGlobalKey").next((e=>(jo(!!e),e)))}Zn(e,t){return vf(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){const e=function(e,t){let n;if(t.document)n=Vh(e.fe,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=fa.fromSegments(t.noDocument.path),r=sd(t.noDocument.readTime);n=au.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return $o();{const e=fa.fromSegments(t.unknownDocument.path),r=sd(t.unknownDocument.version);n=au.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new aa(e[0],e[1]);return ca.fromTimestamp(t)}(t.readTime)),n}(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(ca.min()))return e}return au.newInvalidDocument(e)}}function gf(e){return new mf(e)}class yf extends pf{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new il((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new Tc(((e,t)=>ia(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.us.get(i);if(t.push(this.os.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=nd(this.os.serializer,s);r=r.add(i.path.popLast());const c=Yd(a);n+=c-o.size,t.push(this.os.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=nd(this.os.serializer,s.convertToNoDocument(ca.min()));t.push(this.os.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.os.updateMetadata(e,n)),Sa.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next((e=>(this.us.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.os.ss(e,t).next((({documents:e,rs:t})=>(t.forEach(((t,n)=>{this.us.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function vf(e){return gc(e,"remoteDocumentGlobal")}function wf(e){return gc(e,"remoteDocumentsV14")}function _f(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function bf(e,t){const n=t.documentKey.path.toArray();return[e,rd(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function If(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(i=ia(n[e],r[e]),i)return i;return i=ia(n.length,r.length),i||(i=ia(n[n.length-2],r[r.length-2]),i||ia(n[n.length-1],r[r.length-1]))
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class Tf{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ef{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Bl(n.mutation,e,Sc.empty(),aa.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,ml()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=ml()){const r=ll();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=cl();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=ll();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,ml())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=ol();const s=dl(),o=dl();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof zl)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Bl(o.mutation,t,o.mutation.getFieldMask(),aa.now())):s.set(t.key,Sc.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Tf(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=dl();let r=new _c(((e,t)=>e-t)),i=ml();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Sc.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||ml()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=hl();c.forEach((e=>{if(!i.has(e)){const r=Ul(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Sa.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return fa.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ku(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Sa.resolve(ll());let o=-1,a=i;return s.next((t=>Sa.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Sa.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,ml()))).next((e=>({batchId:o,changes:ul(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fa(t)).next((e=>{let t=cl();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=cl();return this.indexManager.getCollectionParents(e,r).next((s=>Sa.forEach(s,(s=>{const o=function(e,t){return new Bu(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,au.newInvalidDocument(r)))}));let n=cl();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&Bl(s.mutation,i,Sc.empty(),aa.now()),el(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kf{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return Sa.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:Nh(n.createTime)}),Sa.resolve()}getNamedQuery(e,t){return Sa.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(e){return{name:e.name,query:ud(e.bundledQuery),readTime:Nh(e.readTime)}}(t)),Sa.resolve()}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sf{constructor(){this.overlays=new _c(fa.comparator),this.ls=new Map}getOverlay(e,t){return Sa.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ll();return Sa.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.we(e,t,r)})),Sa.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),Sa.resolve()}getOverlaysForCollection(e,t,n){const r=ll(),i=t.length+1,s=new fa(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Sa.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new _c(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=ll(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=ll(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return Sa.resolve(o)}we(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Jl(t,n));let i=this.ls.get(t);void 0===i&&(i=ml(),this.ls.set(t,i)),this.ls.set(t,i.add(n.key))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cf{constructor(){this.fs=new Tc(Af.ds),this.ws=new Tc(Af._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new Af(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new Af(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new fa(new la([])),n=new Af(t,e),r=new Af(t,e+1),i=[];return this.ws.forEachInRange([n,r],(e=>{this.ys(e),i.push(e.key)})),i}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new fa(new la([])),n=new Af(t,e),r=new Af(t,e+1);let i=ml();return this.ws.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Af(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Af{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return fa.comparator(e.key,t.key)||ia(e.As,t.As)}static _s(e,t){return ia(e.As,t.As)||fa.comparator(e.key,t.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nf{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Tc(Af.ds)}checkEmpty(e){return Sa.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Yl(i,t,n,r);this.mutationQueue.push(s);for(const t of r)this.Rs=this.Rs.add(new Af(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Sa.resolve(s)}lookupMutationBatch(e,t){return Sa.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.bs(n),i=r<0?0:r;return Sa.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Sa.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return Sa.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Af(t,0),r=new Af(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(e=>{const t=this.Ps(e.As);i.push(t)})),Sa.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Tc(ia);return t.forEach((e=>{const t=new Af(e,0),r=new Af(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],(e=>{n=n.add(e.As)}))})),Sa.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;fa.isDocumentKey(i)||(i=i.child(""));const s=new Af(new fa(i),0);let o=new Tc(ia);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.As)),!0)}),s),Sa.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){jo(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Sa.forEach(t.mutations,(r=>{const i=new Af(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new Af(t,0),r=this.Rs.firstAfterOrEqual(n);return Sa.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Sa.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rf{constructor(e){this.Ds=e,this.docs=new _c(fa.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Sa.resolve(n?n.document.mutableCopy():au.newInvalidDocument(t))}getEntries(e,t){let n=ol();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():au.newInvalidDocument(e))})),Sa.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=ol();const s=t.path,o=new fa(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Ia(_a(o),n)<=0||(r.has(o.key)||el(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Sa.resolve(i)}getAllFromCollectionGroup(e,t,n,r){$o()}Cs(e,t){return Sa.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new xf(this)}getSize(e){return Sa.resolve(this.size)}}class xf extends pf{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(n)})),Sa.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Df{constructor(e){this.persistence=e,this.xs=new il((e=>Pu(e)),Lu),this.lastRemoteSnapshotVersion=ca.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Cf,this.targetCount=0,this.Ms=nf.kn()}forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),Sa.resolve()}getLastRemoteSnapshotVersion(e){return Sa.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Sa.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),Sa.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),Sa.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new nf(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,Sa.resolve()}updateTargetData(e,t){return this.Fn(t),Sa.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,Sa.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.xs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Sa.waitFor(i).next((()=>r))}getTargetCount(e){return Sa.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return Sa.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),Sa.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Sa.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),Sa.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return Sa.resolve(n)}containsKey(e,t){return Sa.resolve(this.ks.containsKey(t))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Of{constructor(e,t){this.$s={},this.overlays={},this.Os=new Ua(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Df(this),this.indexManager=new Ud,this.remoteDocumentCache=function(e){return new Rf(e)}((e=>this.referenceDelegate.Ls(e))),this.serializer=new td(t),this.qs=new kf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Sf,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new Nf(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){Uo("MemoryPersistence","Starting transaction:",e);const r=new Pf(this.Os.next());return this.referenceDelegate.Us(),n(r).next((e=>this.referenceDelegate.Ks(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Gs(e,t){return Sa.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}}class Pf extends Ea{constructor(e){super(),this.currentSequenceNumber=e}}class Lf{constructor(e){this.persistence=e,this.Qs=new Cf,this.js=null}static zs(e){return new Lf(e)}get Ws(){if(this.js)return this.js;throw $o()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),Sa.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),Sa.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),Sa.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Sa.forEach(this.Ws,(n=>{const r=fa.fromPath(n);return this.Hs(e,r).next((e=>{e||t.removeEntry(r,ca.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return Sa.or([()=>Sa.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mf{constructor(e){this.serializer=e}O(e,t,n,r){const i=new Ca("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ka,{unique:!0}),e.createObjectStore("documentMutations")}(e),Ff(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Sa.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),Ff(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ca.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").j().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ka,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return Sa.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Ys(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(i))))),n<7&&r>=7&&(s=s.next((()=>this.Zs(i)))),n<8&&r>=8&&(s=s.next((()=>this.ti(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.ei(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:ac});t.createIndex("collectionPathOverlayIndex",cc,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",uc,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:Ya});t.createIndex("documentKeyIndex",Xa),t.createIndex("collectionGroupIndex",Ja)}(e))).next((()=>this.ni(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>this.si(e,i)))),n<15&&r>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:rc}).createIndex("sequenceNumberIndex",ic,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:sc}).createIndex("documentKeyIndex",oc,{unique:!1})}(e)))),s}Xs(e){let t=0;return e.store("remoteDocuments").X(((e,n)=>{t+=Yd(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Ys(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.j().next((t=>Sa.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.j("userMutationsIndex",r).next((n=>Sa.forEach(n,(n=>{jo(n.userId===t.userId);const r=od(this.serializer,n);return Qd(e,t.userId,r).next((()=>{}))}))))}))))}Zs(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.X(((n,i)=>{const s=new la(n),o=function(e){return[0,$a(e)]}(s);r.push(t.get(o).next((n=>n?Sa.resolve():(n=>t.put({targetId:0,path:$a(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>Sa.waitFor(r)))}))}ti(e,t){e.createObjectStore("collectionParents",{keyPath:nc});const n=t.store("collectionParents"),r=new Vd,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:$a(r)})}};return t.store("remoteDocuments").X({Y:!0},((e,t)=>{const n=new la(e);return i(n.popLast())})).next((()=>t.store("documentMutations").X({Y:!0},(([e,t,n],r)=>{const s=Ga(t);return i(s.popLast())}))))}ei(e){const t=e.store("targets");return t.X(((e,n)=>{const r=ad(n),i=cd(this.serializer,r);return t.put(i)}))}ni(e,t){const n=t.store("remoteDocuments"),r=[];return n.X(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new fa(la.fromString(o.document.name).popFirst(5)):o.noDocument?fa.fromSegments(o.noDocument.path):o.unknownDocument?fa.fromSegments(o.unknownDocument.path):$o()).path.toArray();var o;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))})).next((()=>Sa.waitFor(r)))}si(e,t){const n=t.store("mutations"),r=gf(this.serializer),i=new Of(Lf.zs,this.serializer.fe);return n.j().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:ml();od(this.serializer,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),Sa.forEach(n,((e,n)=>{const s=new Po(n),o=gd.de(this.serializer,s),a=i.getIndexManager(s),c=Xd.de(s,this.serializer,a,i.referenceDelegate);return new Ef(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new mc(t,Ua.ct),e).next()}))}))}}function Ff(e){e.createObjectStore("targetDocuments",{keyPath:ec}).createIndex("documentTargetsIndex",tc,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Za,{unique:!0}),e.createObjectStore("targetGlobal")}const Uf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Vf{constructor(e,t,n,r,i,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ii=i,this.window=s,this.document=o,this.ri=c,this.oi=u,this.ui=l,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=e=>Promise.resolve(),!Vf.D())throw new Ko(Go.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new df(this,r),this.di=t+"main",this.serializer=new td(a),this.wi=new Aa(this.di,this.ui,new Mf(this.serializer)),this.Bs=new rf(this.referenceDelegate,this.serializer),this.remoteDocumentCache=gf(this.serializer),this.qs=new fd,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,!1===u&&Vo("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Ko(Go.FAILED_PRECONDITION,Uf);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Bs.getHighestSequenceNumber(e)))})).then((e=>{this.Os=new Ua(e,this.ri)})).then((()=>{this.Fs=!0})).catch((e=>(this.wi&&this.wi.close(),Promise.reject(e))))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget((async()=>{this.started&&await this.mi()})))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>qf(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ti(e).next((e=>{e||(this.isPrimary=!1,this.ii.enqueueRetryable((()=>this.fi(!1))))}))})).next((()=>this.Ei(e))).next((t=>this.isPrimary&&!t?this.Ai(e).next((()=>!1)):!!t&&this.vi(e).next((()=>!0)))))).catch((e=>{if(xa(e))return Uo("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Uo("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.ii.enqueueRetryable((()=>this.fi(e))),this.isPrimary=e}))}Ti(e){return Bf(e).get("owner").next((e=>Sa.resolve(this.Ri(e))))}Pi(e){return qf(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=gc(e,"clientMetadata");return t.j().next((e=>{const n=this.Si(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return Sa.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this._i)for(const t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.mi().then((()=>this.bi())).then((()=>this.pi()))))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?Sa.resolve(!0):Bf(e).get("owner").next((t=>{if(null!==t&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new Ko(Go.FAILED_PRECONDITION,Uf);return!1}}return!(!this.networkEnabled||!this.inForeground)||qf(e).j().next((e=>void 0===this.Si(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&Uo("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new mc(e,Ua.ct);return this.Ai(t).next((()=>this.Pi(t)))})),this.wi.close(),this.Mi()}Si(e,t){return e.filter((e=>this.Vi(e.updateTimeMs,t)&&!this.Ci(e.clientId)))}$i(){return this.runTransaction("getActiveClients","readonly",(e=>qf(e).j().next((e=>this.Si(e,18e5).map((e=>e.clientId))))))}get started(){return this.Fs}getMutationQueue(e,t){return Xd.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new qd(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return gd.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,n){Uo("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(s=this.ui)?pc:14===s?fc:13===s?dc:12===s?hc:11===s?lc:void $o();var s;let o;return this.wi.runTransaction(e,r,i,(r=>(o=new mc(r,this.Os?this.Os.next():Ua.ct),"readwrite-primary"===t?this.Ti(o).next((e=>!!e||this.Ei(o))).next((t=>{if(!t)throw Vo(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable((()=>this.fi(!1))),new Ko(Go.FAILED_PRECONDITION,Ta);return n(o)})).next((e=>this.vi(o).next((()=>e)))):this.Oi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}Oi(e){return Bf(e).get("owner").next((e=>{if(null!==e&&this.Vi(e.leaseTimestampMs,5e3)&&!this.Ci(e.ownerId)&&!this.Ri(e)&&!(this.oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new Ko(Go.FAILED_PRECONDITION,Uf)}))}vi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Bf(e).put("owner",t)}static D(){return Aa.D()}Ai(e){const t=Bf(e);return t.get("owner").next((e=>this.Ri(e)?(Uo("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Sa.resolve()))}Vi(e,t){const n=Date.now();return!(e<n-t||e>n&&(Vo(`Detected an update time that is in the future: ${e} > ${n}`),1))}gi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ai=()=>{this.ii.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.mi())))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground="visible"===this.document.visibilityState)}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ci=()=>{this.xi();const e=/(?:Version|Mobile)\/1[456]/;!Ue()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{const n=null!==(null===(t=this._i)||void 0===t?void 0:t.getItem(this.Di(e)));return Uo("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return Vo("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){Vo("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch(e){}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Bf(e){return gc(e,"owner")}function qf(e){return gc(e,"clientMetadata")}function $f(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class jf{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=r}static Li(e,t){let n=ml(),r=ml();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new jf(e,t.fromCache,n,r)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zf{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ki(e,t).next((i=>i||this.Gi(e,t,r,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(ju(t))return Sa.resolve(null);let n=Wu(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Yu(t,null,"F"),n=Wu(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=ml(...r);return this.Ui.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.ji(t,r);return this.zi(t,s,i,n.readTime)?this.Ki(e,Yu(t,null,"F")):this.Wi(e,s,t,n)}))))})))))}Gi(e,t,n,r){return ju(t)||r.isEqual(ca.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((i=>{const s=this.ji(t,i);return this.zi(t,s,n,r)?this.Qi(e,t):(Fo()<=at.DEBUG&&Uo("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Zu(t)),this.Wi(e,s,t,wa(r,-1)))}))}ji(e,t){let n=new Tc(nl(e));return t.forEach(((t,r)=>{el(e,r)&&(n=n.add(r))})),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,t){return Fo()<=at.DEBUG&&Uo("QueryEngine","Using full collection scan to execute query:",Zu(t)),this.Ui.getDocumentsMatchingQuery(e,t,ba.min())}Wi(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gf{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new _c(ia),this.Yi=new il((e=>Pu(e)),Lu),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ef(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function Kf(e,t,n,r){return new Gf(e,t,n,r)}async function Hf(e,t){const n=zo(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=ml();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({er:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Wf(e){const t=zo(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function Qf(e,t,n){let r=ml(),i=ml();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=ol();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(ca.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Uo("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{nr:r,sr:i}}))}function Yf(e,t){const n=zo(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Xf(e,t){const n=zo(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Bs.getTargetData(e,t).next((i=>i?(r=i,Sa.resolve(r)):n.Bs.allocateTargetId(e).next((i=>(r=new ed(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function Jf(e,t,n){const r=zo(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!xa(e))throw e;Uo("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Zf(e,t,n){const r=zo(e);let i=ca.min(),s=ml();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=zo(e),i=r.Yi.get(n);return void 0!==i?Sa.resolve(r.Ji.get(i)):r.Bs.getTargetData(t,n)}(r,e,Wu(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Hi.getDocumentsMatchingQuery(e,t,n?i:ca.min(),n?s:ml()))).next((e=>(np(r,tl(t),e),{documents:e,ir:s})))))}function ep(e,t){const n=zo(e),r=zo(n.Bs),i=n.Ji.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.le(e,t).next((e=>e?e.target:null))))}function tp(e,t){const n=zo(e),r=n.Xi.get(t)||ca.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Zi.getAllFromCollectionGroup(e,t,wa(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(np(n,t,e),e)))}function np(e,t,n){let r=e.Xi.get(t)||ca.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Xi.set(t,r)}async function rp(e,t,n=ml()){const r=await Xf(e,Wu(ud(t.bundledQuery))),i=zo(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=Nh(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.qs.saveNamedQuery(e,t);const o=r.withResumeToken(Ac.EMPTY_BYTE_STRING,s);return i.Ji=i.Ji.insert(o.targetId,o),i.Bs.updateTargetData(e,o).next((()=>i.Bs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.Bs.addMatchingKeys(e,n,r.targetId))).next((()=>i.qs.saveNamedQuery(e,t)))}))}function ip(e,t){return`firestore_clients_${e}_${t}`}function sp(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function op(e,t){return`firestore_targets_${e}_${t}`}class ap{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static ar(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new Ko(r.error.code,r.error.message))),s?new ap(e,t,r.state,i):(Vo("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class cp{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static ar(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new Ko(n.error.code,n.error.message))),i?new cp(e,n.state,r):(Vo("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class up{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=yl();for(let e=0;r&&e<n.activeTargetIds.length;++e)r=qa(n.activeTargetIds[e]),i=i.add(n.activeTargetIds[e]);return r?new up(e,i):(Vo("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class lp{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new lp(t.clientId,t.onlineState):(Vo("SharedClientState",`Failed to parse online state: ${e}`),null)}}class hp{constructor(){this.activeTargetIds=yl()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dp{constructor(e,t,n,r,i){this.window=e,this.ii=t,this.persistenceKey=n,this.wr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new _c(ia),this.started=!1,this.yr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.pr=ip(this.persistenceKey,this.wr),this.Ir=function(e){return`firestore_sequence_number_${e}`}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.persistenceKey),this.gr=this.gr.insert(this.wr,new hp),this.Tr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.vr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Rr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const t of e){if(t===this.wr)continue;const e=this.getItem(ip(this.persistenceKey,t));if(e){const n=up.ar(t,e);n&&(this.gr=this.gr.insert(n.clientId,n))}}this.Pr();const t=this.storage.getItem(this.vr);if(t){const e=this.br(t);e&&this.Vr(e)}for(const e of this.yr)this.mr(e);this.yr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,n){this.Dr(e,t,n),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(op(this.persistenceKey,e));if(n){const r=cp.ar(e,n);r&&(t=r.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(op(this.persistenceKey,e))}updateQueryState(e,t,n){this.kr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Cr(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Uo("SharedClientState","READ",e,t),t}setItem(e,t){Uo("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Uo("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const t=e;if(t.storageArea===this.storage){if(Uo("SharedClientState","EVENT",t.key,t.newValue),t.key===this.pr)return void Vo("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.Tr.test(t.key)){if(null==t.newValue){const e=this.Or(t.key);return this.Fr(e,null)}{const e=this.Br(t.key,t.newValue);if(e)return this.Fr(e.clientId,e)}}else if(this.Er.test(t.key)){if(null!==t.newValue){const e=this.Lr(t.key,t.newValue);if(e)return this.qr(e)}}else if(this.Ar.test(t.key)){if(null!==t.newValue){const e=this.Ur(t.key,t.newValue);if(e)return this.Kr(e)}}else if(t.key===this.vr){if(null!==t.newValue){const e=this.br(t.newValue);if(e)return this.Vr(e)}}else if(t.key===this.Ir){const e=function(e){let t=Ua.ct;if(null!=e)try{const n=JSON.parse(e);jo("number"==typeof n),t=n}catch(e){Vo("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==Ua.ct&&this.sequenceNumberHandler(e)}else if(t.key===this.Rr){const e=this.Gr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Qr(e))))}}else this.yr.push(t)}))}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,n){const r=new ap(this.currentUser,e,t,n),i=sp(this.persistenceKey,this.currentUser,e);this.setItem(i,r.hr())}Cr(e){const t=sp(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){const t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,n){const r=op(this.persistenceKey,e),i=new cp(e,t,n);this.setItem(r,i.hr())}$r(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){const n=this.Or(e);return up.ar(n,t)}Lr(e,t){const n=this.Er.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return ap.ar(new Po(i),r,t)}Ur(e,t){const n=this.Ar.exec(e),r=Number(n[1]);return cp.ar(r,t)}br(e){return lp.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);Uo("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){const n=t?this.gr.insert(e,t):this.gr.remove(e),r=this.Sr(this.gr),i=this.Sr(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.Wr(s,o).then((()=>{this.gr=n}))}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=yl();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class fp{constructor(){this.Hr=new hp,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new hp,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pp{Yr(e){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mp{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){Uo("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){Uo("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let gp=null;function yp(){return null===gp?gp=268435456+Math.round(2147483648*Math.random()):gp++,"0x"+gp.toString(16)
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}const vp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wp{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const _p="WebChannelConnection";class bp extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,r,i){const s=yp(),o=this.To(e,t);Uo("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.Eo(a,r,i),this.Ao(e,o,a,n).then((t=>(Uo("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw Bo("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,r,i,s){return this.Io(e,t,n,r,i)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Lo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=vp[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,r){const i=yp();return new Promise(((s,o)=>{const a=new Ro;a.setWithCredentials(!0),a.listenOnce(Eo.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case To.NO_ERROR:const t=a.getResponseJson();Uo(_p,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case To.TIMEOUT:Uo(_p,`RPC '${e}' ${i} timed out`),o(new Ko(Go.DEADLINE_EXCEEDED,"Request time out"));break;case To.HTTP_ERROR:const n=a.getStatus();if(Uo(_p,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Go).indexOf(t)>=0?t:Go.UNKNOWN}(t.status);o(new Ko(e,t.message))}else o(new Ko(Go.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Ko(Go.UNAVAILABLE,"Connection failed."));break;default:$o()}}finally{Uo(_p,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);Uo(_p,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Ro(e,t,n){const r=yp(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=new Js,o=Xr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new Ao({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Uo(_p,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new wp({ro:t=>{d?Uo(_p,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(Uo(_p,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),Uo(_p,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},oo:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,No.EventType.OPEN,(()=>{d||Uo(_p,`RPC '${e}' stream ${r} transport opened.`)})),p(l,No.EventType.CLOSE,(()=>{d||(d=!0,Uo(_p,`RPC '${e}' stream ${r} transport closed`),f.wo())})),p(l,No.EventType.ERROR,(t=>{d||(d=!0,Bo(_p,`RPC '${e}' stream ${r} transport errored:`,t),f.wo(new Ko(Go.UNAVAILABLE,"The operation could not be completed")))})),p(l,No.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];jo(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Uo(_p,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=eh[e];if(void 0!==t)return rh(t)}(t),i=o.message;void 0===n&&(n=Go.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.wo(new Ko(n,i)),l.close()}else Uo(_p,`RPC '${e}' stream ${r} received:`,i),f._o(i)}})),p(o,ko.STAT_EVENT,(t=>{t.stat===So?Uo(_p,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Co&&Uo(_p,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ip(){return"undefined"!=typeof window?window:null}function Tp(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ep(e){return new Eh(e,!0)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kp{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&Uo("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sp{constructor(e,t,n,r,i,s,o,a){this.ii=e,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new kp(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===Go.RESOURCE_EXHAUSTED?(Vo(t.toString()),Vo("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===Go.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new Ko(Go.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return Uo("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(Uo("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Cp extends Sp{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:$o()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(jo(void 0===t||"string"==typeof t),Ac.fromBase64String(t||"")):(jo(void 0===t||t instanceof Uint8Array),Ac.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Go.UNKNOWN:rh(e.code);return new Ko(t,e.message||"")}(o);n=new gh(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Oh(e,r.document.name),s=Nh(r.document.updateTime),o=r.document.createTime?Nh(r.document.createTime):ca.min(),a=new su({mapValue:{fields:r.document.fields}}),c=au.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new ph(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Oh(e,r.document),s=r.readTime?Nh(r.readTime):ca.min(),o=au.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ph([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Oh(e,r.document),s=r.removedTargetIds||[];n=new ph([],s,i,null)}else{if(!("filter"in t))return $o();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Zl(r,i),o=e.targetId;n=new mh(o,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return ca.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ca.min():t.readTime?Nh(t.readTime):ca.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=Mh(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Mu(r)?{documents:$h(e,r)}:{query:jh(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Ch(e,t.resumeToken);const r=kh(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(ca.min())>0){n.readTime=Sh(e,t.snapshotVersion.toTimestamp());const r=kh(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $o()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=Mh(this.serializer),t.removeTarget=e,this.Wo(t)}}class Ap extends Sp{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(jo(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=function(e,t){return e&&e.length>0?(jo(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Nh(e.updateTime):Nh(t);return n.isEqual(ca.min())&&(n=Nh(t)),new Pl(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Nh(e.commitTime);return this.listener.cu(n,t)}return jo(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Mh(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Bh(this.serializer,e)))};this.Wo(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Np extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new Ko(Go.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Io(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Go.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ko(Go.UNKNOWN,e.toString())}))}vo(e,t,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.vo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Go.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ko(Go.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}}class Rp{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Vo(t),this.mu=!1):Uo("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xp{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{Bp(this)&&(Uo("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=zo(e);t.vu.add(4),await Op(t),t.bu.set("Unknown"),t.vu.delete(4),await Dp(t)}(this))}))})),this.bu=new Rp(n,r)}}async function Dp(e){if(Bp(e))for(const t of e.Ru)await t(!0)}async function Op(e){for(const t of e.Ru)await t(!1)}function Pp(e,t){const n=zo(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),Vp(n)?Up(n):im(n).Ko()&&Mp(n,t))}function Lp(e,t){const n=zo(e),r=im(n);n.Au.delete(t),r.Ko()&&Fp(n,t),0===n.Au.size&&(r.Ko()?r.jo():Bp(n)&&n.bu.set("Unknown"))}function Mp(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ca.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}im(e).su(t)}function Fp(e,t){e.Vu.qt(t),im(e).iu(t)}function Up(e){e.Vu=new vh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),im(e).start(),e.bu.gu()}function Vp(e){return Bp(e)&&!im(e).Uo()&&e.Au.size>0}function Bp(e){return 0===zo(e).vu.size}function qp(e){e.Vu=void 0}async function $p(e){e.Au.forEach(((t,n)=>{Mp(e,t)}))}async function jp(e,t){qp(e),Vp(e)?(e.bu.Iu(t),Up(e)):e.bu.set("Unknown")}async function zp(e,t,n){if(e.bu.set("Online"),t instanceof gh&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Au.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Au.delete(r),e.Vu.removeTarget(r))}(e,t)}catch(n){Uo("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Gp(e,n)}else if(t instanceof ph?e.Vu.Ht(t):t instanceof mh?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(ca.min()))try{const t=await Wf(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Au.get(r);i&&e.Au.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.Au.get(t);if(!r)return;e.Au.set(t,r.withResumeToken(Ac.EMPTY_BYTE_STRING,r.snapshotVersion)),Fp(e,t);const i=new ed(r.target,t,n,r.sequenceNumber);Mp(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Uo("RemoteStore","Failed to raise snapshot:",t),await Gp(e,t)}}async function Gp(e,t,n){if(!xa(t))throw t;e.vu.add(1),await Op(e),e.bu.set("Offline"),n||(n=()=>Wf(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Uo("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await Dp(e)}))}function Kp(e,t){return t().catch((n=>Gp(e,n,t)))}async function Hp(e){const t=zo(e),n=sm(t);let r=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;Wp(t);)try{const e=await Yf(t.localStore,r);if(null===e){0===t.Eu.length&&n.jo();break}r=e.batchId,Qp(t,e)}catch(e){await Gp(t,e)}Yp(t)&&Xp(t)}function Wp(e){return Bp(e)&&e.Eu.length<10}function Qp(e,t){e.Eu.push(t);const n=sm(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Yp(e){return Bp(e)&&!sm(e).Uo()&&e.Eu.length>0}function Xp(e){sm(e).start()}async function Jp(e){sm(e).hu()}async function Zp(e){const t=sm(e);for(const n of e.Eu)t.uu(n.mutations)}async function em(e,t,n){const r=e.Eu.shift(),i=Xl.from(r,t,n);await Kp(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Hp(e)}async function tm(e,t){t&&sm(e).ou&&await async function(e,t){if(nh(n=t.code)&&n!==Go.ABORTED){const n=e.Eu.shift();sm(e).Qo(),await Kp(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Hp(e)}var n}(e,t),Yp(e)&&Xp(e)}async function nm(e,t){const n=zo(e);n.asyncQueue.verifyOperationInProgress(),Uo("RemoteStore","RemoteStore received new credentials");const r=Bp(n);n.vu.add(3),await Op(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await Dp(n)}async function rm(e,t){const n=zo(e);t?(n.vu.delete(2),await Dp(n)):t||(n.vu.add(2),await Op(n),n.bu.set("Unknown"))}function im(e){return e.Su||(e.Su=function(e,t,n){const r=zo(e);return r.fu(),new Cp(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}(e.datastore,e.asyncQueue,{uo:$p.bind(null,e),ao:jp.bind(null,e),nu:zp.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),Vp(e)?Up(e):e.bu.set("Unknown")):(await e.Su.stop(),qp(e))}))),e.Su}function sm(e){return e.Du||(e.Du=function(e,t,n){const r=zo(e);return r.fu(),new Ap(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{uo:Jp.bind(null,e),ao:tm.bind(null,e),au:Zp.bind(null,e),cu:em.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await Hp(e)):(await e.Du.stop(),e.Eu.length>0&&(Uo("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class om{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Ho,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new om(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ko(Go.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function am(e,t){if(Vo("AsyncQueue",`${t}: ${e}`),xa(e))return new Ko(Go.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cm{constructor(e){this.comparator=e?(t,n)=>e(t,n)||fa.comparator(t.key,n.key):(e,t)=>fa.comparator(e.key,t.key),this.keyedMap=cl(),this.sortedSet=new _c(this.comparator)}static emptySet(e){return new cm(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof cm))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new cm;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class um{constructor(){this.Cu=new _c(fa.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):$o():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class lm{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new lm(e,t,cm.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hm{constructor(){this.Nu=void 0,this.listeners=[]}}class dm{constructor(){this.queries=new il((e=>Ju(e)),Xu),this.onlineState="Unknown",this.ku=new Set}}async function fm(e,t){const n=zo(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new hm),i)try{s.Nu=await n.onListen(r)}catch(e){const n=am(e,`Initialization of query '${Zu(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Mu(n.onlineState),s.Nu&&t.$u(s.Nu)&&ym(n)}async function pm(e,t){const n=zo(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function mm(e,t){const n=zo(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.$u(e)&&(r=!0);i.Nu=e}}r&&ym(n)}function gm(e,t,n){const r=zo(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function ym(e){e.ku.forEach((e=>{e.next()}))}class vm{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new lm(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=lm.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wm{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _m{constructor(e){this.serializer=e}rr(e){return Oh(this.serializer,e)}ur(e){return e.metadata.exists?Vh(this.serializer,e.document,!1):au.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return Nh(e)}}class bm{constructor(e,t,n){this.ju=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Im(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;const n=la.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){const t=new Map,n=new _m(this.serializer);for(const r of e)if(r.metadata.queries){const e=n.rr(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||ml()).add(e);t.set(n,r)}}return t}async complete(){const e=await async function(e,t,n,r){const i=zo(e);let s=ml(),o=ol();for(const e of n){const n=t.rr(e.metadata.name);e.document&&(s=s.add(n));const r=t.ur(e);r.setReadTime(t.cr(e.metadata.readTime)),o=o.insert(n,r)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),c=await Xf(i,function(e){return Wu($u(la.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>Qf(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.Bs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.Bs.addMatchingKeys(e,s,c.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(e,t.nr,t.sr))).next((()=>t.nr))))))}(this.localStore,new _m(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(const e of this.queries)await rp(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function Im(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tm{constructor(e){this.key=e}}class Em{constructor(e){this.key=e}}class km{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ml(),this.mutatedKeys=ml(),this.tc=nl(e),this.ec=new cm(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new um,r=t?t.ec:this.ec;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=el(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.rc(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.tc(l,a)>0||c&&this.tc(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ec:s,ic:n,zi:o,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $o()}};return n(e)-n(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const s=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==i.length||a?{snapshot:new lm(this.query,e.ec,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:s}:{cc:s}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new um,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=ml(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new Em(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new Tm(n))})),t}hc(e){this.Yu=e.ir,this.Zu=ml();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return lm.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class Sm{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Cm{constructor(e){this.key=e,this.fc=!1}}class Am{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new il((e=>Ju(e)),Xu),this._c=new Map,this.mc=new Set,this.gc=new _c(fa.comparator),this.yc=new Map,this.Ic=new Cf,this.Tc={},this.Ec=new Map,this.Ac=nf.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function Nm(e,t){const n=tg(e);let r,i;const s=n.wc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const e=await Xf(n.localStore,Wu(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Rm(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&Pp(n.remoteStore,e)}return i}async function Rm(e,t,n,r,i){e.Rc=(t,n,r)=>async function(e,t,n,r){let i=t.view.sc(n);i.zi&&(i=await Zf(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return qm(e,t.targetId,o.cc),o.snapshot}(e,t,n,r);const s=await Zf(e.localStore,t,!0),o=new km(t,s.ir),a=o.sc(s.documents),c=fh.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);qm(e,n,u.cc);const l=new Sm(t,n,o);return e.wc.set(t,l),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function xm(e,t){const n=zo(e),r=n.wc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter((e=>!Xu(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Jf(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Lp(n.remoteStore,r.targetId),Vm(n,r.targetId)})).catch(ka)):(Vm(n,r.targetId),await Jf(n.localStore,r.targetId,!0))}async function Dm(e,t){const n=zo(e);try{const e=await function(e,t){const n=zo(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(Ac.EMPTY_BYTE_STRING,ca.min()).withLastLimboFreeSnapshotVersion(ca.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,s)&&o.push(n.Bs.updateTargetData(e,u))}));let a=ol(),c=ml();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Qf(e,s,t.documentUpdates).next((e=>{a=e.nr,c=e.sr}))),!r.isEqual(ca.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Sa.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ji=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.yc.get(t);r&&(jo(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.fc=!0:e.modifiedDocuments.size>0?jo(r.fc):e.removedDocuments.size>0&&(jo(r.fc),r.fc=!1))})),await zm(n,e,t)}catch(e){await ka(e)}}function Om(e,t,n){const r=zo(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.wc.forEach(((n,r)=>{const i=r.view.Mu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=zo(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Mu(t)&&(r=!0)})),r&&ym(n)}(r.eventManager,t),e.length&&r.dc.nu(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Pm(e,t,n){const r=zo(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.yc.get(t),s=i&&i.key;if(s){let e=new _c(fa.comparator);e=e.insert(s,au.newNoDocument(s,ca.min()));const n=ml().add(s),i=new dh(ca.min(),new Map,new _c(ia),e,n);await Dm(r,i),r.gc=r.gc.remove(s),r.yc.delete(t),jm(r)}else await Jf(r.localStore,t,!1).then((()=>Vm(r,t,n))).catch(ka)}async function Lm(e,t){const n=zo(e),r=t.batch.batchId;try{const e=await function(e,t){const n=zo(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Sa.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);jo(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=ml();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);Um(n,r,null),Fm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zm(n,e)}catch(e){await ka(e)}}async function Mm(e,t,n){const r=zo(e);try{const e=await function(e,t){const n=zo(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(jo(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Um(r,t,n),Fm(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await zm(r,e)}catch(n){await ka(n)}}function Fm(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function Um(e,t,n){const r=zo(e);let i=r.Tc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Tc[r.currentUser.toKey()]=i}}function Vm(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.wc.delete(r),n&&e.dc.Pc(r,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||Bm(e,t)}))}function Bm(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(Lp(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),jm(e))}function qm(e,t,n){for(const r of n)r instanceof Tm?(e.Ic.addReference(r.key,t),$m(e,r)):r instanceof Em?(Uo("SyncEngine","Document no longer in limbo: "+r.key),e.Ic.removeReference(r.key,t),e.Ic.containsKey(r.key)||Bm(e,r.key)):$o()}function $m(e,t){const n=t.key,r=n.path.canonicalString();e.gc.get(n)||e.mc.has(r)||(Uo("SyncEngine","New document in limbo: "+n),e.mc.add(r),jm(e))}function jm(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new fa(la.fromString(t)),r=e.Ac.next();e.yc.set(r,new Cm(n)),e.gc=e.gc.insert(n,r),Pp(e.remoteStore,new ed(Wu($u(n.path)),r,"TargetPurposeLimboResolution",Ua.ct))}}async function zm(e,t,n){const r=zo(e),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach(((e,a)=>{o.push(r.Rc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=jf.Li(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.dc.nu(i),await async function(e,t){const n=zo(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Sa.forEach(t,(t=>Sa.forEach(t.Fi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Sa.forEach(t.Bi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!xa(e))throw e;Uo("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ji.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(t,i)}}}(r.localStore,s))}async function Gm(e,t){const n=zo(e);if(!n.currentUser.isEqual(t)){Uo("SyncEngine","User change. New user:",t.toKey());const e=await Hf(n.localStore,t);n.currentUser=t,function(e,t){e.Ec.forEach((e=>{e.forEach((e=>{e.reject(new Ko(Go.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.Ec.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await zm(n,e.er)}}function Km(e,t){const n=zo(e),r=n.yc.get(t);if(r&&r.fc)return ml().add(r.key);{let e=ml();const r=n._c.get(t);if(!r)return e;for(const t of r){const r=n.wc.get(t);e=e.unionWith(r.view.nc)}return e}}async function Hm(e,t){const n=zo(e),r=await Zf(n.localStore,t.query,!0),i=t.view.hc(r);return n.isPrimaryClient&&qm(n,t.targetId,i.cc),i}async function Wm(e,t){const n=zo(e);return tp(n.localStore,t).then((e=>zm(n,e)))}async function Qm(e,t,n,r){const i=zo(e),s=await function(e,t){const n=zo(e),r=zo(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Sn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):Sa.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await Hp(i.remoteStore):"acknowledged"===n||"rejected"===n?(Um(i,t,r||null),Fm(i,t),function(e,t){zo(zo(e).mutationQueue).Cn(t)}(i.localStore,t)):$o(),await zm(i,s)):Uo("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Ym(e,t,n){const r=zo(e),i=[],s=[];for(const e of t){let t;const n=r._c.get(e);if(n&&0!==n.length){t=await Xf(r.localStore,Wu(n[0]));for(const e of n){const t=r.wc.get(e),n=await Hm(r,t);n.snapshot&&s.push(n.snapshot)}}else{const n=await ep(r.localStore,e);t=await Xf(r.localStore,n),await Rm(r,Xm(n),e,!1,t.resumeToken)}i.push(t)}return r.dc.nu(s),i}function Xm(e){return qu(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Jm(e){const t=zo(e);return zo(zo(t.localStore).persistence).$i()}async function Zm(e,t,n,r){const i=zo(e);if(i.vc)return void Uo("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await tp(i.localStore,tl(s[0])),r=dh.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,Ac.EMPTY_BYTE_STRING);await zm(i,e,r);break}case"rejected":await Jf(i.localStore,t,!0),Vm(i,t,r);break;default:$o()}}async function eg(e,t,n){const r=tg(e);if(r.vc){for(const e of t){if(r._c.has(e)){Uo("SyncEngine","Adding an already active target "+e);continue}const t=await ep(r.localStore,e),n=await Xf(r.localStore,t);await Rm(r,Xm(t),n.targetId,!1,n.resumeToken),Pp(r.remoteStore,n)}for(const e of n)r._c.has(e)&&await Jf(r.localStore,e,!1).then((()=>{Lp(r.remoteStore,e),Vm(r,e)})).catch(ka)}}function tg(e){const t=zo(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Dm.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Km.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Pm.bind(null,t),t.dc.nu=mm.bind(null,t.eventManager),t.dc.Pc=gm.bind(null,t.eventManager),t}function ng(e){const t=zo(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Lm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Mm.bind(null,t),t}class rg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ep(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Kf(this.persistence,new zf,e.initialUser,this.serializer)}createPersistence(e){return new Of(Lf.zs,this.serializer)}createSharedClientState(e){return new fp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ig extends rg{constructor(e,t,n){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await ng(this.Vc.syncEngine),await Hp(this.Vc.remoteStore),await this.persistence.Ii((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}createLocalStore(e){return Kf(this.persistence,new zf,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new lf(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new Fa(t,this.persistence);return new Ma(e.asyncQueue,n)}createPersistence(e){const t=$f(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Wd.withCacheSize(this.cacheSizeBytes):Wd.DEFAULT;return new Vf(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Ip(),Tp(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new fp}}class sg extends ig{constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Vc.syncEngine;this.sharedClientState instanceof dp&&(this.sharedClientState.syncEngine={jr:Qm.bind(null,t),zr:Zm.bind(null,t),Wr:eg.bind(null,t),$i:Jm.bind(null,t),Qr:Wm.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii((async e=>{await async function(e,t){const n=zo(e);if(tg(n),ng(n),!0===t&&!0!==n.vc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Ym(n,e.toArray());n.vc=!0,await rm(n.remoteStore,!0);for(const e of t)Pp(n.remoteStore,e)}else if(!1===t&&!1!==n.vc){const e=[];let t=Promise.resolve();n._c.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(Vm(n,i),Jf(n.localStore,i,!0)))),Lp(n.remoteStore,i)})),await t,await Ym(n,e),function(e){const t=zo(e);t.yc.forEach(((e,n)=>{Lp(t.remoteStore,n)})),t.Ic.Ts(),t.yc=new Map,t.gc=new _c(fa.comparator)}(n),n.vc=!1,await rm(n.remoteStore,!1)}}(this.Vc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}createSharedClientState(e){const t=Ip();if(!dp.D(t))throw new Ko(Go.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=$f(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new dp(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class og{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Om(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gm.bind(null,this.syncEngine),await rm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new dm}createDatastore(e){const t=Ep(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new bp(r));var r;return function(e,t,n,r){return new Np(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Om(this.syncEngine,e,0),s=mp.D()?new mp:new pp,new xp(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Am(e,t,n,r,i,s);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=zo(e);Uo("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await Op(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ag(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Vo("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ug{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new Ho,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then((e=>{e&&e.Qu()?this.metadata.resolve(e.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.Gu)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(null===e)return null;const t=this.xc.decode(e),n=Number(t);isNaN(n)&&this.Mc(`length string (${t}) is not valid number`);const r=await this.$c(n);return new wm(JSON.parse(r),e.length+n)}Oc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(0===this.buffer.length)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lg{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new Ko(Go.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=zo(e),r=Mh(n.serializer)+"/documents",i={documents:t.map((e=>Dh(n.serializer,e)))},s=await n.vo("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach((e=>{const t=function(e,t){return"found"in t?function(e,t){jo(!!t.found),t.found.name,t.found.updateTime;const n=Oh(e,t.found.name),r=Nh(t.found.updateTime),i=t.found.createTime?Nh(t.found.createTime):ca.min(),s=new su({mapValue:{fields:t.found.fields}});return au.newFoundDocument(n,r,i,s)}(e,t):"missing"in t?function(e,t){jo(!!t.missing),jo(!!t.readTime);const n=Oh(e,t.missing),r=Nh(t.readTime);return au.newNoDocument(n,r)}(e,t):$o()}(n.serializer,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());jo(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Wl(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=fa.fromPath(t);this.mutations.push(new Ql(n,this.precondition(n)))})),await async function(e,t){const n=zo(e),r=Mh(n.serializer)+"/documents",i={writes:t.map((e=>Bh(n.serializer,e)))};await n.Io("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw $o();t=ca.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new Ko(Go.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ca.min())?Ll.exists(!1):Ll.updateTime(t):Ll.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ca.min()))throw new Ko(Go.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ll.updateTime(t)}return Ll.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hg{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Bc=n.maxAttempts,this.qo=new kp(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No((async()=>{const e=new lg(this.datastore),t=this.qc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Uc(e)}))))})).catch((e=>{this.Uc(e)}))}))}qc(e){try{const t=this.updateFunction(e);return!Va(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Lc(),Promise.resolve())))):this.deferred.reject(e)}Kc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!nh(t)}return!1}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class dg{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Po.UNAUTHENTICATED,this.clientId=ra.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Uo("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Uo("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ko(Go.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ho;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=am(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function fg(e,t){e.asyncQueue.verifyOperationInProgress(),Uo("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Hf(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function pg(e,t){e.asyncQueue.verifyOperationInProgress();const n=await gg(e);Uo("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>nm(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>nm(t.remoteStore,n))),e._onlineComponents=t}function mg(e){return"FirebaseError"===e.name?e.code===Go.FAILED_PRECONDITION||e.code===Go.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function gg(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Uo("FirestoreClient","Using user provided OfflineComponentProvider");try{await fg(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!mg(n))throw n;Bo("Error using user provided cache. Falling back to memory cache: "+n),await fg(e,new rg)}}else Uo("FirestoreClient","Using default OfflineComponentProvider"),await fg(e,new rg);return e._offlineComponents}async function yg(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Uo("FirestoreClient","Using user provided OnlineComponentProvider"),await pg(e,e._uninitializedComponentsProvider._online)):(Uo("FirestoreClient","Using default OnlineComponentProvider"),await pg(e,new og))),e._onlineComponents}function vg(e){return gg(e).then((e=>e.persistence))}function wg(e){return gg(e).then((e=>e.localStore))}function _g(e){return yg(e).then((e=>e.remoteStore))}function bg(e){return yg(e).then((e=>e.syncEngine))}async function Ig(e){const t=await yg(e),n=t.eventManager;return n.onListen=Nm.bind(null,t.syncEngine),n.onUnlisten=xm.bind(null,t.syncEngine),n}function Tg(e,t,n={}){const r=new Ho;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new cg({next:s=>{t.enqueueAndForget((()=>pm(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Ko(Go.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Ko(Go.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new vm($u(n.path),s,{includeMetadataChanges:!0,Ku:!0});return fm(e,o)}(await Ig(e),e.asyncQueue,t,n,r))),r.promise}function Eg(e,t,n={}){const r=new Ho;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new cg({next:n=>{t.enqueueAndForget((()=>pm(e,o))),n.fromCache&&"server"===r.source?i.reject(new Ko(Go.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new vm(n,s,{includeMetadataChanges:!0,Ku:!0});return fm(e,o)}(await Ig(e),e.asyncQueue,t,n,r))),r.promise}function kg(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?oh().encode(e):e,function(e,t){return new ug(e,t)}(function(e,t){if(e instanceof Uint8Array)return ag(e,t);if(e instanceof ArrayBuffer)return ag(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}(n,Ep(t));e.asyncQueue.enqueueAndForget((async()=>{!function(e,t,n){const r=zo(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=zo(e),r=Nh(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.qs.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Im(r));const i=new bm(r,e.localStore,t.serializer);let s=await t.bc();for(;s;){const e=await i.zu(s);e&&n._updateProgress(e),s=await t.bc()}const o=await i.complete();return await zm(e,o.Ju,void 0),await function(e,t){const n=zo(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.qs.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Hu)}catch(e){return Bo("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}(await bg(e),i,r)}))}
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Sg(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}const Cg=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ag(e,t,n){if(!n)throw new Ko(Go.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ng(e,t,n,r){if(!0===t&&!0===r)throw new Ko(Go.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Rg(e){if(!fa.isDocumentKey(e))throw new Ko(Go.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function xg(e){if(fa.isDocumentKey(e))throw new Ko(Go.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Dg(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":$o()}function Og(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ko(Go.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dg(e);throw new Ko(Go.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Pg(e,t){if(t<=0)throw new Ko(Go.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lg{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new Ko(Go.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Ko(Go.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ng("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sg(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Ko(Go.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Ko(Go.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Ko(Go.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class Mg{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ko(Go.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Ko(Go.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lg(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Qo;switch(e.type){case"firstParty":return new Zo(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Ko(Go.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Cg.get(e);t&&(Uo("ComponentProvider","Removing Datastore"),Cg.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Fg{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vg(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fg(this.firestore,e,this._key)}}class Ug{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ug(this.firestore,e,this._query)}}class Vg extends Ug{constructor(e,t,n){super(e,t,$u(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fg(this.firestore,null,new fa(e))}withConverter(e){return new Vg(this.firestore,e,this._path)}}function Bg(e,t,...n){if(e=tt(e),Ag("collection","path",t),e instanceof Mg){const r=la.fromString(t,...n);return xg(r),new Vg(e,null,r)}{if(!(e instanceof Fg||e instanceof Vg))throw new Ko(Go.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(la.fromString(t,...n));return xg(r),new Vg(e.firestore,null,r)}}function qg(e,t,...n){if(e=tt(e),1===arguments.length&&(t=ra.A()),Ag("doc","path",t),e instanceof Mg){const r=la.fromString(t,...n);return Rg(r),new Fg(e,null,new fa(r))}{if(!(e instanceof Fg||e instanceof Vg))throw new Ko(Go.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(la.fromString(t,...n));return Rg(r),new Fg(e.firestore,e instanceof Vg?e.converter:null,new fa(r))}}function $g(e,t){return e=tt(e),t=tt(t),(e instanceof Fg||e instanceof Vg)&&(t instanceof Fg||t instanceof Vg)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function jg(e,t){return e=tt(e),t=tt(t),e instanceof Ug&&t instanceof Ug&&e.firestore===t.firestore&&Xu(e._query,t._query)&&e.converter===t.converter
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class zg{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new kp(this,"async_queue_retry"),this.Xc=()=>{const e=Tp();e&&Uo("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=Tp();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Tp();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new Ho;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!xa(e))throw e;Uo("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e);throw Vo("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=om.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(r),r}Zc(){this.Wc&&$o()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function Gg(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)}class Kg{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ho,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hg extends Mg{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new zg,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Qg(this),this._firestoreClient.terminate()}}function Wg(e){return e._firestoreClient||Qg(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Qg(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new Mc(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Sg(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new dg(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function Yg(e,t,n){const r=new Ho;return e.asyncQueue.enqueue((async()=>{try{await fg(e,n),await pg(e,t),r.resolve()}catch(e){const t=e;if(!mg(t))throw t;Bo("Error enabling indexeddb cache. Falling back to memory cache: "+t),r.reject(t)}})).then((()=>r.promise))}function Xg(e){return function(e){const t=new Ho;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t){const n=zo(e);Bp(n.remoteStore)||Uo("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=zo(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.Ec.get(e)||[];r.push(t),n.Ec.set(e,r)}catch(e){const n=am(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}(await bg(e),t))),t.promise}(Wg(e=Og(e,Hg)))}function Jg(e){return function(e){return e.asyncQueue.enqueue((async()=>{const t=await vg(e),n=await _g(e);return t.setNetworkEnabled(!0),function(e){const t=zo(e);return t.vu.delete(0),Dp(t)}(n)}))}(Wg(e=Og(e,Hg)))}function Zg(e){return function(e){return e.asyncQueue.enqueue((async()=>{const t=await vg(e),n=await _g(e);return t.setNetworkEnabled(!1),async function(e){const t=zo(e);t.vu.add(0),await Op(t),t.bu.set("Offline")}(n)}))}(Wg(e=Og(e,Hg)))}function ey(e,t){return function(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=zo(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.qs.getNamedQuery(e,t)))}(await wg(e),t)))}(Wg(e=Og(e,Hg)),t).then((t=>t?new Ug(e,null,t.query):null))}function ty(e){if(e._initialized||e._terminated)throw new Ko(Go.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ny{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ny(Ac.fromBase64String(e))}catch(e){throw new Ko(Go.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new ny(Ac.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ry{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Ko(Go.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new da(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class iy{constructor(e){this._methodName=e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sy{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ko(Go.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ko(Go.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ia(this._lat,e._lat)||ia(this._long,e._long)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const oy=/^__.*__$/;class ay{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new zl(e,this.data,this.fieldMask,t,this.fieldTransforms):new jl(e,this.data,t,this.fieldTransforms)}}class cy{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new zl(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function uy(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $o()}}class ly{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new ly(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.fa(e),r}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Ry(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(uy(this.ca)&&oy.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class hy{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ep(e)}ya(e,t,n,r=!1){return new ly({ca:e,methodName:t,ga:n,path:da.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dy(e){const t=e._freezeSettings(),n=Ep(e._databaseId);return new hy(e._databaseId,!!t.ignoreUndefinedProperties,n)}function fy(e,t,n,r,i,s={}){const o=e.ya(s.merge||s.mergeFields?2:0,t,n,i);Sy("Data must be an object, but it was:",o,r);const a=Ey(r,o);let c,u;if(s.merge)c=new Sc(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Cy(t,r,n);if(!o.contains(i))throw new Ko(Go.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);xy(e,i)||e.push(i)}c=new Sc(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new ay(new su(a),c,u)}class py extends iy{_toFieldTransform(e){if(2!==e.ca)throw 1===e.ca?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof py}}function my(e,t,n){return new ly({ca:3,ga:t.settings.ga,methodName:e._methodName,la:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class gy extends iy{_toFieldTransform(e){return new Ol(e.path,new kl)}isEqual(e){return e instanceof gy}}class yy extends iy{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=my(this,e,!0),n=this.pa.map((e=>Ty(e,t))),r=new Sl(n);return new Ol(e.path,r)}isEqual(e){return this===e}}class vy extends iy{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=my(this,e,!0),n=this.pa.map((e=>Ty(e,t))),r=new Al(n);return new Ol(e.path,r)}isEqual(e){return this===e}}class wy extends iy{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){const t=new Rl(e.serializer,_l(e.serializer,this.Ia));return new Ol(e.path,t)}isEqual(e){return this===e}}function _y(e,t,n,r){const i=e.ya(1,t,n);Sy("Data must be an object, but it was:",i,r);const s=[],o=su.empty();vc(r,((e,r)=>{const a=Ny(t,e,n);r=tt(r);const c=i.da(a);if(r instanceof py)s.push(a);else{const e=Ty(r,c);null!=e&&(s.push(a),o.set(a,e))}}));const a=new Sc(s);return new cy(o,a,i.fieldTransforms)}function by(e,t,n,r,i,s){const o=e.ya(1,t,n),a=[Cy(t,r,n)],c=[i];if(s.length%2!=0)throw new Ko(Go.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(Cy(t,s[e])),c.push(s[e+1]);const u=[],l=su.empty();for(let e=a.length-1;e>=0;--e)if(!xy(u,a[e])){const t=a[e];let n=c[e];n=tt(n);const r=o.da(t);if(n instanceof py)u.push(t);else{const e=Ty(n,r);null!=e&&(u.push(t),l.set(t,e))}}const h=new Sc(u);return new cy(l,h,o.fieldTransforms)}function Iy(e,t,n,r=!1){return Ty(n,e.ya(r?4:3,t))}function Ty(e,t){if(ky(e=tt(e)))return Sy("Unsupported field value:",t,e),Ey(e,t);if(e instanceof iy)return function(e,t){if(!uy(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Ty(i,t.wa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=tt(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return _l(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=aa.fromDate(e);return{timestampValue:Sh(t.serializer,n)}}if(e instanceof aa){const n=new aa(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Sh(t.serializer,n)}}if(e instanceof sy)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ny)return{bytesValue:Ch(t.serializer,e._byteString)};if(e instanceof Fg){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Rh(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${Dg(e)}`)}(e,t)}function Ey(e,t){const n={};return wc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):vc(e,((e,r)=>{const i=Ty(r,t.ha(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function ky(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof aa||e instanceof sy||e instanceof ny||e instanceof Fg||e instanceof iy)}function Sy(e,t,n){if(!ky(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Dg(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}function Cy(e,t,n){if((t=tt(t))instanceof ry)return t._internalPath;if("string"==typeof t)return Ny(e,t);throw Ry("Field path arguments must be of type string or ",e,!1,void 0,n)}const Ay=new RegExp("[~\\*/\\[\\]]");function Ny(e,t,n){if(t.search(Ay)>=0)throw Ry(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ry(...t.split("."))._internalPath}catch(r){throw Ry(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ry(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Ko(Go.INVALID_ARGUMENT,a+e+c)}function xy(e,t){return e.some((e=>e.isEqual(t)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Dy{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Fg(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Oy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Py("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Oy extends Dy{data(){return super.data()}}function Py(e,t){return"string"==typeof t?Ny(e,t):t instanceof ry?t._internalPath:t._delegate._internalPath}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ly(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Ko(Go.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class My{}class Fy extends My{}function Uy(e,t,...n){let r=[];t instanceof My&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof By)).length,n=e.filter((e=>e instanceof Vy)).length;if(t>1||t>0&&n>0)throw new Ko(Go.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(r);for(const t of r)e=t._apply(e);return e}class Vy extends Fy{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Vy(e,t,n)}_apply(e){const t=this._parse(e);return Wy(e._query,t),new Ug(e.firestore,e.converter,Qu(e._query,t))}_parse(e){const t=dy(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Ko(Go.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Hy(o,s);const t=[];for(const n of o)t.push(Ky(r,e,n));a={arrayValue:{values:t}}}else a=Ky(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Hy(o,s),a=Iy(n,"where",o,"in"===s||"not-in"===s);return pu.create(i,s,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value);return n}}class By extends My{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new By(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:mu.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const e of r)Wy(n,e),n=Qu(n,e)}(e._query,t),new Ug(e.firestore,e.converter,Qu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class qy extends Fy{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new qy(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Ko(Go.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Ko(Go.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new hu(t,n);return function(e,t){if(null===zu(e)){const n=Gu(e);null!==n&&Qy(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new Ug(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Bu(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}class $y extends Fy{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new $y(e,t,n)}_apply(e){return new Ug(e.firestore,e.converter,Yu(e._query,this._limit,this._limitType))}}class jy extends Fy{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new jy(e,t,n)}_apply(e){const t=Gy(e,this.type,this._docOrFields,this._inclusive);return new Ug(e.firestore,e.converter,function(e,t){return new Bu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}class zy extends Fy{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new zy(e,t,n)}_apply(e){const t=Gy(e,this.type,this._docOrFields,this._inclusive);return new Ug(e.firestore,e.converter,function(e,t){return new Bu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Gy(e,t,n,r){if(n[0]=tt(n[0]),n[0]instanceof Dy)return function(e,t,n,r,i){if(!r)throw new Ko(Go.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const n of Hu(e))if(n.field.isKeyField())s.push(Hc(t,r.key));else{const e=r.data.field(n.field);if(Oc(e))throw new Ko(Go.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=n.field.canonicalString();throw new Ko(Go.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new cu(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=dy(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new Ko(Go.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let s=0;s<i.length;s++){const c=i[s];if(o[s].field.isKeyField()){if("string"!=typeof c)throw new Ko(Go.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof c}`);if(!Ku(e)&&-1!==c.indexOf("/"))throw new Ko(Go.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${c}' contains a slash.`);const n=e.path.child(la.fromString(c));if(!fa.isDocumentKey(n))throw new Ko(Go.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new fa(n);a.push(Hc(t,i))}else{const e=Iy(n,r,c);a.push(e)}}return new cu(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Ky(e,t,n){if("string"==typeof(n=tt(n))){if(""===n)throw new Ko(Go.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ku(t)&&-1!==n.indexOf("/"))throw new Ko(Go.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(la.fromString(n));if(!fa.isDocumentKey(r))throw new Ko(Go.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Hc(e,new fa(r))}if(n instanceof Fg)return Hc(e,n._key);throw new Ko(Go.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dg(n)}.`)}function Hy(e,t){if(!Array.isArray(e)||0===e.length)throw new Ko(Go.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Wy(e,t){if(t.isInequality()){const n=Gu(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new Ko(Go.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=zu(e);null!==i&&Qy(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Ko(Go.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Ko(Go.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Qy(e,t,n){if(!n.isEqual(t))throw new Ko(Go.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Yy{convertValue(e,t="none"){switch(Bc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xc(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Dc(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw $o()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return vc(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new sy(xc(e.latitude),xc(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Pc(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Lc(e));default:return null}}convertTimestamp(e){const t=Rc(e);return new aa(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=la.fromString(e);jo(Zh(n));const r=new Fc(n.get(1),n.get(3)),i=new fa(n.popFirst(5));return r.isEqual(t)||Vo(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Xy(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Jy extends Yy{constructor(e){super(),this.firestore=e}convertBytes(e){return new ny(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Fg(this.firestore,null,t)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zy{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ev extends Dy{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new tv(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Py("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class tv extends ev{data(e={}){return super.data(e)}}class nv{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Zy(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new tv(this._firestore,this._userDataWriter,n.key,n,new Zy(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Ko(Go.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new tv(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Zy(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new tv(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Zy(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:rv(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function rv(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $o()}}function iv(e,t){return e instanceof ev&&t instanceof ev?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof nv&&t instanceof nv&&e._firestore===t._firestore&&jg(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sv extends Yy{constructor(e){super(),this.firestore=e}convertBytes(e){return new ny(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Fg(this.firestore,null,t)}}function ov(e){e=Og(e,Fg);const t=Og(e.firestore,Hg),n=Wg(t),r=new sv(t);return function(e,t){const n=new Ho;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=zo(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new Ko(Go.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=am(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await wg(e),t,n))),n.promise}(n,e._key).then((n=>new ev(t,r,e._key,n,new Zy(null!==n&&n.hasLocalMutations,!0),e.converter)))}function av(e){e=Og(e,Ug);const t=Og(e.firestore,Hg),n=Wg(t),r=new sv(t);return function(e,t){const n=new Ho;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await Zf(e,t,!0),i=new km(t,r.ir),s=i.sc(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=am(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await wg(e),t,n))),n.promise}(n,e._query).then((n=>new nv(t,r,e,n)))}function cv(e,t,n){e=Og(e,Fg);const r=Og(e.firestore,Hg),i=Xy(e.converter,t,n);return dv(r,[fy(dy(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Ll.none())])}function uv(e,t,n,...r){e=Og(e,Fg);const i=Og(e.firestore,Hg),s=dy(i);let o;return o="string"==typeof(t=tt(t))||t instanceof ry?by(s,"updateDoc",e._key,t,n,r):_y(s,"updateDoc",e._key,t),dv(i,[o.toMutation(e._key,Ll.exists(!0))])}function lv(e,...t){var n,r,i;e=tt(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Gg(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Gg(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let c,u,l;if(e instanceof Fg)u=Og(e.firestore,Hg),l=$u(e._key.path),c={next:n=>{t[o]&&t[o](fv(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Og(e,Ug);u=Og(n.firestore,Hg),l=n._query;const r=new sv(u);c={next:e=>{t[o]&&t[o](new nv(u,r,n,e))},error:t[o+1],complete:t[o+2]},Ly(e._query)}return function(e,t,n,r){const i=new cg(r),s=new vm(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>fm(await Ig(e),s))),()=>{i.Dc(),e.asyncQueue.enqueueAndForget((async()=>pm(await Ig(e),s)))}}(Wg(u),l,a,c)}function hv(e,t){return function(e,t){const n=new cg(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){zo(e).ku.add(t),t.next()}(await Ig(e),n))),()=>{n.Dc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){zo(e).ku.delete(t)}(await Ig(e),n)))}}(Wg(e=Og(e,Hg)),Gg(t)?t:{next:t})}function dv(e,t){return function(e,t){const n=new Ho;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=ng(e);try{const e=await function(e,t){const n=zo(e),r=aa.now(),i=t.reduce(((e,t)=>e.add(t.key)),ml());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=ol(),c=ml();return n.Zi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=ql(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new zl(e.key,t,ou(t.value.mapValue),Ll.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:ul(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Tc[e.currentUser.toKey()];r||(r=new _c(ia)),r=r.insert(t,n),e.Tc[e.currentUser.toKey()]=r}(r,e.batchId,n),await zm(r,e.changes),await Hp(r.remoteStore)}catch(e){const t=am(e,"Failed to persist write");n.reject(t)}}(await bg(e),t,n))),n.promise}(Wg(e),t)}function fv(e,t,n){const r=n.docs.get(t._key),i=new sv(e);return new ev(e,i,t._key,r,new Zy(n.hasPendingWrites,n.fromCache),t.converter)}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const pv={maxAttempts:5};
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mv{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=dy(e)}set(e,t,n){this._verifyNotCommitted();const r=gv(e,this._firestore),i=Xy(r.converter,t,n),s=fy(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,Ll.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=gv(e,this._firestore);let s;return s="string"==typeof(t=tt(t))||t instanceof ry?by(this._dataReader,"WriteBatch.update",i._key,t,n,r):_y(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,Ll.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=gv(e,this._firestore);return this._mutations=this._mutations.concat(new Wl(t._key,Ll.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Ko(Go.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function gv(e,t){if((e=tt(e)).firestore!==t)throw new Ko(Go.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yv extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=dy(e)}get(e){const t=gv(e,this._firestore),n=new Jy(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return $o();const r=e[0];if(r.isFoundDocument())return new Dy(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Dy(this._firestore,n,t._key,null,t.converter);throw $o()}))}set(e,t,n){const r=gv(e,this._firestore),i=Xy(r.converter,t,n),s=fy(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=gv(e,this._firestore);let s;return s="string"==typeof(t=tt(t))||t instanceof ry?by(this._dataReader,"Transaction.update",i._key,t,n,r):_y(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=gv(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=gv(e,this._firestore),n=new sv(this._firestore);return super.get(e).then((e=>new ev(this._firestore,n,t._key,e._document,new Zy(!1,!1),t.converter)))}}function vv(e,t,n){e=Og(e,Hg);const r=Object.assign(Object.assign({},pv),n);return function(e){if(e.maxAttempts<1)throw new Ko(Go.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new Ho;return e.asyncQueue.enqueueAndForget((async()=>{const i=await function(e){return yg(e).then((e=>e.datastore))}(e);new hg(e.asyncQueue,i,n,t,r).run()})),r.promise}(Wg(e),(n=>t(new yv(e,n))),r)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */!function(e,t=!0){!function(e){Lo=e}(zt),Bt(new nt("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Hg(new Xo(e.getProvider("auth-internal")),new ta(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Ko(Go.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fc(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Ht(Oo,"3.13.0",e),Ht(Oo,"3.13.0","esm2017")}();
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function wv(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new Ko("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function _v(){if("undefined"==typeof Uint8Array)throw new Ko("unimplemented","Uint8Arrays are not available in this environment.")}function bv(){if("undefined"==typeof atob)throw new Ko("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Iv{constructor(e){this._delegate=e}static fromBase64String(e){return bv(),new Iv(ny.fromBase64String(e))}static fromUint8Array(e){return _v(),new Iv(ny.fromUint8Array(e))}toBase64(){return bv(),this._delegate.toBase64()}toUint8Array(){return _v(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Tv(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of t)if(e in n&&"function"==typeof n[e])return!0;return!1}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,["next","error","complete"])}class Ev{enableIndexedDbPersistence(e,t){return function(e,t){ty(e=Og(e,Hg));const n=Wg(e);if(n._uninitializedComponentsProvider)throw new Ko(Go.FAILED_PRECONDITION,"SDK cache is already specified.");Bo("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=e._freezeSettings(),i=new og;return Yg(n,i,new ig(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return function(e){ty(e=Og(e,Hg));const t=Wg(e);if(t._uninitializedComponentsProvider)throw new Ko(Go.FAILED_PRECONDITION,"SDK cache is already specified.");Bo("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings(),r=new og;return Yg(t,r,new sg(r,n.cacheSizeBytes))}(e._delegate)}clearIndexedDbPersistence(e){return function(e){if(e._initialized&&!e._terminated)throw new Ko(Go.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new Ho;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Aa.D())return Promise.resolve();const t=e+"main";await Aa.delete(t)}($f(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}(e._delegate)}}class kv{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Fc||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Bo("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&delete(e=Object.assign(Object.assign({},t),e)).merge,this._delegate._setSettings(e)}useEmulator(e,t,n={}){!function(e,t,n,r={}){var i;const s=(e=Og(e,Mg))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&Bo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Po.MOCK_USER;else{t=Me(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Ko(Go.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Po(s)}e._authCredentials=new Yo(new Wo(t,n))}}(this._delegate,e,t,n)}enableNetwork(){return Jg(this._delegate)}disableNetwork(){return Zg(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Ng("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Xg(this._delegate)}onSnapshotsInSync(e){return hv(this._delegate,e)}get app(){if(!this._appCompat)throw new Ko("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Vv(this,Bg(this._delegate,e))}catch(e){throw xv(e,"collection()","Firestore.collection()")}}doc(e){try{return new Rv(this,qg(this._delegate,e))}catch(e){throw xv(e,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Mv(this,function(e,t){if(e=Og(e,Mg),Ag("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new Ko(Go.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ug(e,null,function(e){return new Bu(la.emptyPath(),e)}(t))}(this._delegate,e))}catch(e){throw xv(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return vv(this._delegate,(t=>e(new Cv(this,t))))}batch(){return Wg(this._delegate),new Av(new mv(this._delegate,(e=>dv(this._delegate,e))))}loadBundle(e){return function(e,t){const n=Wg(e=Og(e,Hg)),r=new Kg;return kg(n,e._databaseId,t,r),r}(this._delegate,e)}namedQuery(e){return ey(this._delegate,e).then((e=>e?new Mv(this,e):null))}}class Sv extends Yy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Iv(new ny(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Rv.forKey(t,this.firestore,null)}}class Cv{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Sv(e)}get(e){const t=Bv(e);return this._delegate.get(t).then((e=>new Pv(this._firestore,new ev(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=Bv(e);return n?(wv("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=Bv(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=Bv(e);return this._delegate.delete(t),this}}class Av{constructor(e){this._delegate=e}set(e,t,n){const r=Bv(e);return n?(wv("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=Bv(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=Bv(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Nv{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new tv(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Lv(this._firestore,n),null!=t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Nv.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new Nv(e,new Sv(e),t),r.set(t,i)),i}}Nv.INSTANCES=new WeakMap;class Rv{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Sv(e)}static forPath(e,t,n){if(e.length%2!=0)throw new Ko("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Rv(t,new Fg(t._delegate,n,new fa(e)))}static forKey(e,t,n){return new Rv(t,new Fg(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Vv(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Vv(this.firestore,Bg(this._delegate,e))}catch(e){throw xv(e,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=tt(e))instanceof Fg&&$g(this._delegate,e)}set(e,t){t=wv("DocumentReference.set",t);try{return t?cv(this._delegate,e,t):cv(this._delegate,e)}catch(e){throw xv(e,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?uv(this._delegate,e):uv(this._delegate,e,t,...n)}catch(e){throw xv(e,"updateDoc()","DocumentReference.update()")}}delete(){return dv(Og((e=this._delegate).firestore,Hg),[new Wl(e._key,Ll.none())]);var e}onSnapshot(...e){const t=Dv(e),n=Ov(e,(e=>new Pv(this.firestore,new ev(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return lv(this._delegate,t,n)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?ov(this._delegate):"server"===(null==e?void 0:e.source)?function(e){e=Og(e,Fg);const t=Og(e.firestore,Hg);return Tg(Wg(t),e._key,{source:"server"}).then((n=>fv(t,e,n)))}(this._delegate):function(e){e=Og(e,Fg);const t=Og(e.firestore,Hg);return Tg(Wg(t),e._key).then((n=>fv(t,e,n)))}(this._delegate),t.then((e=>new Pv(this.firestore,new ev(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new Rv(this.firestore,e?this._delegate.withConverter(Nv.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function xv(e,t,n){return e.message=e.message.replace(t,n),e}function Dv(e){for(const t of e)if("object"==typeof t&&!Tv(t))return t;return{}}function Ov(e,t){var n,r;let i;return i=Tv(e[0])?e[0]:Tv(e[1])?e[1]:"function"==typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class Pv{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Rv(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return iv(this._delegate,e._delegate)}}class Lv extends Pv{data(e){const t=this._delegate.data(e);return void 0!==t||$o(),t}}class Mv{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Sv(e)}where(e,t,n){try{return new Mv(this.firestore,Uy(this._delegate,function(e,t,n){const r=t,i=Py("where",e);return Vy._create(i,r,n)}(e,t,n)))}catch(e){throw xv(e,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Mv(this.firestore,Uy(this._delegate,function(e,t="asc"){const n=t,r=Py("orderBy",e);return qy._create(r,n)}(e,t)))}catch(e){throw xv(e,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Mv(this.firestore,Uy(this._delegate,(Pg("limit",t=e),$y._create("limit",t,"F"))))}catch(e){throw xv(e,"limit()","Query.limit()")}var t}limitToLast(e){try{return new Mv(this.firestore,Uy(this._delegate,(Pg("limitToLast",t=e),$y._create("limitToLast",t,"L"))))}catch(e){throw xv(e,"limitToLast()","Query.limitToLast()")}var t}startAt(...e){try{return new Mv(this.firestore,Uy(this._delegate,function(...e){return jy._create("startAt",e,!0)}(...e)))}catch(e){throw xv(e,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Mv(this.firestore,Uy(this._delegate,function(...e){return jy._create("startAfter",e,!1)}(...e)))}catch(e){throw xv(e,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Mv(this.firestore,Uy(this._delegate,function(...e){return zy._create("endBefore",e,!1)}(...e)))}catch(e){throw xv(e,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Mv(this.firestore,Uy(this._delegate,function(...e){return zy._create("endAt",e,!0)}(...e)))}catch(e){throw xv(e,"endAt()","Query.endAt()")}}isEqual(e){return jg(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?av(this._delegate):"server"===(null==e?void 0:e.source)?function(e){e=Og(e,Ug);const t=Og(e.firestore,Hg),n=Wg(t),r=new sv(t);return Eg(n,e._query,{source:"server"}).then((n=>new nv(t,r,e,n)))}(this._delegate):function(e){e=Og(e,Ug);const t=Og(e.firestore,Hg),n=Wg(t),r=new sv(t);return Ly(e._query),Eg(n,e._query).then((n=>new nv(t,r,e,n)))}(this._delegate),t.then((e=>new Uv(this.firestore,new nv(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=Dv(e),n=Ov(e,(e=>new Uv(this.firestore,new nv(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return lv(this._delegate,t,n)}withConverter(e){return new Mv(this.firestore,e?this._delegate.withConverter(Nv.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Fv{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Lv(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Uv{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Mv(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new Lv(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new Fv(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new Lv(this._firestore,n))}))}isEqual(e){return iv(this._delegate,e._delegate)}}class Vv extends Mv{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Rv(this.firestore,e):null}doc(e){try{return new Rv(this.firestore,void 0===e?qg(this._delegate):qg(this._delegate,e))}catch(e){throw xv(e,"doc()","CollectionReference.doc()")}}add(e){return function(e,t){const n=Og(e.firestore,Hg),r=qg(e),i=Xy(e.converter,t);return dv(n,[fy(dy(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Ll.exists(!1))]).then((()=>r))}(this._delegate,e).then((e=>new Rv(this.firestore,e)))}isEqual(e){return $g(this._delegate,e._delegate)}withConverter(e){return new Vv(this.firestore,e?this._delegate.withConverter(Nv.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Bv(e){return Og(e,Fg)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qv{constructor(...e){this._delegate=new ry(...e)}static documentId(){return new qv(da.keyField().canonicalString())}isEqual(e){return(e=tt(e))instanceof ry&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $v{constructor(e){this._delegate=e}static serverTimestamp(){const e=new gy("serverTimestamp");return e._methodName="FieldValue.serverTimestamp",new $v(e)}static delete(){const e=new py("deleteField");return e._methodName="FieldValue.delete",new $v(e)}static arrayUnion(...e){const t=function(...e){return new yy("arrayUnion",e)}(...e);return t._methodName="FieldValue.arrayUnion",new $v(t)}static arrayRemove(...e){const t=function(...e){return new vy("arrayRemove",e)}(...e);return t._methodName="FieldValue.arrayRemove",new $v(t)}static increment(e){const t=new wy("increment",e);return t._methodName="FieldValue.increment",new $v(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const jv={Firestore:kv,GeoPoint:sy,Timestamp:aa,Blob:Iv,Transaction:Cv,WriteBatch:Av,DocumentReference:Rv,DocumentSnapshot:Pv,Query:Mv,QueryDocumentSnapshot:Lv,QuerySnapshot:Uv,CollectionReference:Vv,FieldPath:qv,FieldValue:$v,setLogLevel:function(e){var t;t=e,Mo.setLogLevel(t)},CACHE_SIZE_UNLIMITED:-1};!
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(e){!function(e,t){e.INTERNAL.registerComponent(new nt("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},jv)))}(e,((e,t)=>new kv(e,t,new Ev))),e.registerVersion("@firebase/firestore-compat","0.3.12")}(pn);
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const zv="firebasestorage.googleapis.com",Gv="storageBucket";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Kv extends je{constructor(e,t,n=0){super(Qv(e),`Firebase Storage: ${t} (${Qv(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Kv.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qv(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var Hv,Wv;function Qv(e){return"storage/"+e}function Yv(){return new Kv(Hv.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function Xv(){return new Kv(Hv.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Jv(){return new Kv(Hv.CANCELED,"User canceled the upload/download.")}function Zv(){return new Kv(Hv.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ew(e){return new Kv(Hv.INVALID_ARGUMENT,e)}function tw(){return new Kv(Hv.APP_DELETED,"The Firebase app was deleted.")}function nw(e){return new Kv(Hv.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function rw(e,t){return new Kv(Hv.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function iw(e){throw new Kv(Hv.INTERNAL_ERROR,"Internal error: "+e)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */!function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"}(Hv||(Hv={}));class sw{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=sw.makeFromUrl(e,t)}catch(t){return new sw(e,"")}if(""===n.path)return n;throw r=e,new Kv(Hv.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.");var r}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const i=new RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${t===zv?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let t=0;t<a.length;t++){const r=a[t],i=r.regex.exec(e);if(i){const e=i[r.indices.bucket];let t=i[r.indices.path];t||(t=""),n=new sw(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new Kv(Hv.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}}class ow{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function aw(e){return"string"==typeof e||e instanceof String}function cw(e){return uw()&&e instanceof Blob}function uw(){return"undefined"!=typeof Blob&&!Ue()}function lw(e,t,n,r){if(r<t)throw ew(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw ew(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function hw(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function dw(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function fw(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return n||r||i}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(Wv||(Wv={}));class pw{constructor(e,t,n,r,i,s,o,a,c,u,l,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new mw(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===Wv.NO_ERROR,i=n.getStatus();if(!t||fw(i,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===Wv.ABORT;return void e(!1,new mw(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new mw(s,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());!
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(e){return void 0!==e}(e)?n():n(e)}catch(e){r(e)}else if(null!==i){const e=Yv();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){r(this.appDelete_?tw():Jv())}else{r(Xv())}};this.canceled_?t(0,new mw(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout((()=>{i=null,e(f,c())}),t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(u)return void d();if(e)return d(),void l.call(null,e,...t);if(c()||o)return d(),void l.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),h(n)}let p=!1;function m(e){p||(p=!0,d(),u||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&function(e){e(!1)}(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class mw{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function gw(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function yw(...e){const t=gw();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(uw())return new Blob(e);throw new Kv(Hv.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function vw(e){if("undefined"==typeof atob)throw t="base-64",new Kv(Hv.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);var t;return atob(e)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ww={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class _w{constructor(e,t){this.data=e,this.contentType=t||null}}function bw(e,t){switch(e){case ww.RAW:return new _w(Iw(t));case ww.BASE64:case ww.BASE64URL:return new _w(Tw(e,t));case ww.DATA_URL:return new _w(function(e){const t=new Ew(e);return t.base64?Tw(ww.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw rw(ww.DATA_URL,"Malformed data URL.")}return Iw(t)}(t.rest)}(t),function(e){const t=new Ew(e);return t.contentType}(t))}throw Yv()}function Iw(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function Tw(e,t){switch(e){case ww.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw rw(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case ww.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw rw(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=vw(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw rw(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class Ew{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw rw(ww.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class kw{constructor(e,t){let n=0,r="";cw(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(cw(this.data_)){const n=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}(this.data_,e,t);return null===n?null:new kw(n)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new kw(n,!0)}}static getBlob(...e){if(uw()){const t=e.map((e=>e instanceof kw?e.data_:e));return new kw(yw.apply(null,t))}{const t=e.map((e=>aw(e)?bw(ww.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new kw(r,!0)}}uploadData(){return this.data_}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Sw(e){let t;try{t=JSON.parse(e)}catch(e){return null}return function(e){return"object"==typeof e&&!Array.isArray(e)}(t)?t:null}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Cw(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Aw(e,t){return t}class Nw{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||Aw}}let Rw=null;function xw(){if(Rw)return Rw;const e=[];e.push(new Nw("bucket")),e.push(new Nw("generation")),e.push(new Nw("metageneration")),e.push(new Nw("name","fullPath",!0));const t=new Nw("name");t.xform=function(e,t){return function(e){return!aw(e)||e.length<2?e:Cw(e)}(t)},e.push(t);const n=new Nw("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new Nw("timeCreated")),e.push(new Nw("updated")),e.push(new Nw("md5Hash",null,!0)),e.push(new Nw("cacheControl",null,!0)),e.push(new Nw("contentDisposition",null,!0)),e.push(new Nw("contentEncoding",null,!0)),e.push(new Nw("contentLanguage",null,!0)),e.push(new Nw("contentType",null,!0)),e.push(new Nw("metadata","customMetadata",!0)),Rw=e,Rw}function Dw(e,t,n){const r={type:"file"},i=n.length;for(let e=0;e<i;e++){const i=n[e];r[i.local]=i.xform(r,t[i.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,i=new sw(n,r);return t._makeStorageReference(i)}})}(r,e),r}function Ow(e,t,n){const r=Sw(t);if(null===r)return null;return Dw(e,r,n)}function Pw(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Lw="prefixes",Mw="items";function Fw(e,t,n){const r=Sw(n);if(null===r)return null;return function(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Lw])for(const i of n[Lw]){const n=i.replace(/\/$/,""),s=e._makeStorageReference(new sw(t,n));r.prefixes.push(s)}if(n[Mw])for(const i of n[Mw]){const n=e._makeStorageReference(new sw(t,i.name));r.items.push(n)}return r}(e,t,r)}class Uw{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Vw(e){if(!e)throw Yv()}function Bw(e,t){return function(n,r){const i=Ow(e,r,t);return Vw(null!==i),i}}function qw(e,t){return function(n,r){const i=Ow(e,r,t);return Vw(null!==i),function(e,t,n,r){const i=Sw(t);if(null===i)return null;if(!aw(i.downloadTokens))return null;const s=i.downloadTokens;if(0===s.length)return null;const o=encodeURIComponent;return s.split(",").map((t=>{const i=e.bucket,s=e.fullPath;return hw("/b/"+o(i)+"/o/"+o(s),n,r)+dw({alt:"media",token:t})}))[0]}(i,r,e.host,e._protocol)}}function $w(e){return function(t,n){let r;var i,s;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new Kv(Hv.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new Kv(Hv.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(s=e.bucket,r=new Kv(Hv.QUOTA_EXCEEDED,"Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,r=new Kv(Hv.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function jw(e){const t=$w(e);return function(n,r){let i=t(n,r);var s;return 404===n.getStatus()&&(s=e.path,i=new Kv(Hv.OBJECT_NOT_FOUND,"Object '"+s+"' does not exist.")),i.serverResponse=r.serverResponse,i}}function zw(e,t,n){const r=hw(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new Uw(r,"GET",Bw(e,n),i);return s.errorHandler=jw(t),s}function Gw(e,t,n,r,i){const s={};t.isRoot?s.prefix="":s.prefix=t.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=hw(t.bucketOnlyServerUrl(),e.host,e._protocol),a=e.maxOperationRetryTime,c=new Uw(o,"GET",function(e,t){return function(n,r){const i=Fw(e,t,r);return Vw(null!==i),i}}(e,t.bucket),a);return c.urlParams=s,c.errorHandler=$w(t),c}function Kw(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}class Hw{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function Ww(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){Vw(!1)}return Vw(!!n&&-1!==(t||["active"]).indexOf(n)),n}const Qw=262144;function Yw(e,t,n,r,i,s,o,a){const c=new Hw(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw new Kv(Hv.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l;let f="";f=0===l?"finalize":u===l?"upload, finalize":"upload";const p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},m=r.slice(h,d);if(null===m)throw Zv();const g=t.maxUploadRetryTime,y=new Uw(n,"POST",(function(e,n){const i=Ww(e,["active","final"]),o=c.current+l,a=r.size();let u;return u="final"===i?Bw(t,s)(e,n):null,new Hw(o,a,"final"===i,u)}),g);return y.headers=p,y.body=m.uploadData(),y.progressCallback=a||null,y.errorHandler=$w(e),y}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Xw={STATE_CHANGED:"state_changed"},Jw={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Zw(e){switch(e){case"running":case"pausing":case"canceling":return Jw.RUNNING;case"paused":return Jw.PAUSED;case"success":return Jw.SUCCESS;case"canceled":return Jw.CANCELED;default:return Jw.ERROR}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class e_{constructor(e,t,n){const r=function(e){return"function"==typeof e}(e)||null!=t||null!=n;if(r)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function t_(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}class n_{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Wv.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=Wv.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=Wv.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw iw("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw iw("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw iw("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw iw("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw iw("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class r_ extends n_{initXhr(){this.xhr_.responseType="text"}}function i_(){return new r_}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class s_{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=xw(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(Hv.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(fw(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,void this.completeTransitions_();e=Xv()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(Hv.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=Kw(t,r,i),a={name:o.fullPath},c=hw(s,e.host,e._protocol),u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},l=Pw(o,n),h=e.maxUploadRetryTime,d=new Uw(c,"POST",(function(e){let t;Ww(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){Vw(!1)}return Vw(aw(t)),t}),h);return d.urlParams=a,d.headers=u,d.body=l,d.errorHandler=$w(t),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,i_,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=function(e,t,n,r){const i=e.maxUploadRetryTime,s=new Uw(n,"POST",(function(e){const t=Ww(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){Vw(!1)}n||Vw(!1);const i=Number(n);return Vw(!isNaN(i)),new Hw(i,r.size(),"final"===t)}),i);return s.headers={"X-Goog-Upload-Command":"query"},s.errorHandler=$w(t),s}(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,i_,t,n);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=Qw*this._chunkMultiplier,t=new Hw(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,i)=>{let s;try{s=Yw(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const o=this._ref.storage._makeRequest(s,i_,r,i,!1);this._request=o,o.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){2*(Qw*this._chunkMultiplier)<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=zw(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,i_,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"},a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;const c=Kw(t,r,i),u="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+Pw(c,n)+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",l="\r\n--"+a+"--",h=kw.getBlob(u,r,l);if(null===h)throw Zv();const d={name:c.fullPath},f=hw(s,e.host,e._protocol),p=e.maxUploadRetryTime,m=new Uw(f,"POST",Bw(e,n),p);return m.urlParams=d,m.headers=o,m.body=h.uploadData(),m.errorHandler=$w(t),m}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,i_,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=Jv(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=Zw(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new e_(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(Zw(this._state)){case Jw.SUCCESS:t_(this._resolve.bind(null,this.snapshot))();break;case Jw.CANCELED:case Jw.ERROR:t_(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Zw(this._state)){case Jw.RUNNING:case Jw.PAUSED:e.next&&t_(e.next.bind(e,this.snapshot))();break;case Jw.SUCCESS:e.complete&&t_(e.complete.bind(e))();break;default:e.error&&t_(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class o_{constructor(e,t){this._service=e,this._location=t instanceof sw?t:sw.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new o_(e,t)}get root(){const e=new sw(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Cw(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new sw(this._location.bucket,e);return new o_(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw nw(e)}}function a_(e){const t={prefixes:[],items:[]};return c_(e,t).then((()=>t))}async function c_(e,t,n){const r={pageToken:n},i=await u_(e,r);t.prefixes.push(...i.prefixes),t.items.push(...i.items),null!=i.nextPageToken&&await c_(e,t,i.nextPageToken)}function u_(e,t){null!=t&&"number"==typeof t.maxResults&&lw("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=Gw(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,i_)}function l_(e,t){e._throwIfRoot("updateMetadata");const n=function(e,t,n,r){const i=hw(t.fullServerUrl(),e.host,e._protocol),s=Pw(n,r),o=e.maxOperationRetryTime,a=new Uw(i,"PATCH",Bw(e,r),o);return a.headers={"Content-Type":"application/json; charset=utf-8"},a.body=s,a.errorHandler=jw(t),a}(e.storage,e._location,t,xw());return e.storage.makeRequestWithTokens(n,i_)}function h_(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=hw(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new Uw(r,"GET",qw(e,n),i);return s.errorHandler=jw(t),s}(e.storage,e._location,xw());return e.storage.makeRequestWithTokens(t,i_).then((e=>{if(null===e)throw new Kv(Hv.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e}))}function d_(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=hw(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,i=new Uw(n,"DELETE",(function(e,t){}),r);return i.successCodes=[200,204],i.errorHandler=jw(t),i}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,i_)}function f_(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new sw(e._location.bucket,n);return new o_(e.storage,r)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function p_(e,t){if(e instanceof y_){const n=e;if(null==n._bucket)throw new Kv(Hv.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Gv+"' property when initializing the app?");const r=new o_(n,n._bucket);return null!=t?p_(r,t):r}return void 0!==t?f_(e,t):e}function m_(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof y_)return function(e,t){return new o_(e,t)}(e,t);throw ew("To use ref(service, url), the first argument must be a Storage instance.")}return p_(e,t)}function g_(e,t){const n=null==t?void 0:t[Gv];return null==n?null:sw.makeFromBucketSpec(n,e)}class y_{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=zv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?sw.makeFromBucketSpec(r,this._host):g_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=sw.makeFromBucketSpec(this._url,e):this._bucket=g_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){lw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){lw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new o_(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new ow(tw());{const s=function(e,t,n,r,i,s,o=!0){const a=dw(e.urlParams),c=e.url+a,u=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(u,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(u,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(u,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(u,r),new pw(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const v_="@firebase/storage",w_="0.11.2";function __(e,t,n){return function(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new s_(e,new kw(t),n)}(e=tt(e),t,n)}function b_(e){return function(e){e._throwIfRoot("getMetadata");const t=zw(e.storage,e._location,xw());return e.storage.makeRequestWithTokens(t,i_)}(e=tt(e))}function I_(e,t){return m_(e=tt(e),t)}function T_(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"==typeof i?i:Me(i,e.app.options.projectId))}(e,t,n,r)}function E_(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new y_(n,r,i,t,zt)}Bt(new nt("storage",E_,"PUBLIC").setMultipleInstances(!0)),Ht(v_,w_,""),Ht(v_,w_,"esm2017");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class k_{constructor(e,t,n){this._delegate=e,this.task=t,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class S_{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new k_(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then((t=>{if(e)return e(new k_(t,this,this._ref))}),t)}on(e,t,n,r){let i;return t&&(i="function"==typeof t?e=>t(new k_(e,this,this._ref)):{next:t.next?e=>t.next(new k_(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,n||void 0,r||void 0)}}class C_{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map((e=>new A_(e,this._service)))}get items(){return this._delegate.items.map((e=>new A_(e,this._service)))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *  http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class A_{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=function(e,t){return f_(e,t)}(this._delegate,e);return new A_(t,this.storage)}get root(){return new A_(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return null==e?null:new A_(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new S_(__(this._delegate,e,t),this)}putString(e,t=ww.RAW,n){this._throwIfRoot("putString");const r=bw(t,e),i=Object.assign({},n);return null==i.contentType&&null!=r.contentType&&(i.contentType=r.contentType),new S_(new s_(this._delegate,new kw(r.data,!0),i),this)}listAll(){return function(e){return a_(e=tt(e))}(this._delegate).then((e=>new C_(e,this.storage)))}list(e){return function(e,t){return u_(e=tt(e),t)}(this._delegate,e||void 0).then((e=>new C_(e,this.storage)))}getMetadata(){return b_(this._delegate)}updateMetadata(e){return function(e,t){return l_(e=tt(e),t)}(this._delegate,e)}getDownloadURL(){return function(e){return h_(e=tt(e))}(this._delegate)}delete(){return this._throwIfRoot("delete"),function(e){return d_(e=tt(e))}(this._delegate)}_throwIfRoot(e){if(""===this._delegate._location.path)throw nw(e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class N_{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(R_(e))throw ew("ref() expected a child path but got a URL, use refFromURL instead.");return new A_(I_(this._delegate,e),this)}refFromURL(e){if(!R_(e))throw ew("refFromURL() expected a full URL but got a child path, use ref() instead.");try{sw.makeFromUrl(e,this._delegate.host)}catch(e){throw ew("refFromUrl() expected a valid full URL but got an invalid one.")}return new A_(I_(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,n={}){T_(this._delegate,e,t,n)}}function R_(e){return/^[A-Za-z]+:\/\//.test(e)}function x_(e,{instanceIdentifier:t}){const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("storage").getImmediate({identifier:t});return new N_(n,r)}function D_(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}!function(e){const t={TaskState:Jw,TaskEvent:Xw,StringFormat:ww,Storage:N_,Reference:A_};e.INTERNAL.registerComponent(new nt("storage-compat",x_,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion("@firebase/storage-compat","0.3.2")}(pn),"function"==typeof SuppressedError&&SuppressedError;const O_={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},P_="EMAIL_SIGNIN",L_="PASSWORD_RESET",M_="RECOVER_EMAIL",F_="REVERT_SECOND_FACTOR_ADDITION",U_="VERIFY_AND_CHANGE_EMAIL",V_="VERIFY_EMAIL";function B_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const q_=
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend."}},$_=B_,j_=new ze("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),z_=new dt("@firebase/auth");function G_(e,...t){z_.logLevel<=at.ERROR&&z_.error(`Auth (${zt}): ${e}`,...t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function K_(e,...t){throw Y_(e,...t)}function H_(e,...t){return Y_(e,...t)}function W_(e,t,n){const r=Object.assign(Object.assign({},$_()),{[t]:n});return new ze("auth","Firebase",r).create(t,{appName:e.name})}function Q_(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&K_(e,"argument-error"),W_(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Y_(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return j_.create(e,...t)}function X_(e,t,...n){if(!e)throw Y_(t,...n)}function J_(e){const t="INTERNAL ASSERTION FAILED: "+e;throw G_(t),new Error(t)}function Z_(e,t){e||J_(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function eb(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function tb(){return"http:"===nb()||"https:"===nb()}function nb(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class rb{constructor(e,t){this.shortDelay=e,this.longDelay=t,Z_(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())||Be()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(tb()||Ve()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ib(e,t){Z_(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sb{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void J_("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void J_("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void J_("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ob={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},ab=new rb(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function cb(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ub(e,t,n,r,i={}){return lb(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Qe(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),sb.fetch()(db(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function lb(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},ob),t);try{const t=new fb(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw pb(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw pb(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw pb(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw pb(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw W_(e,a,o);K_(e,a)}}catch(t){if(t instanceof je)throw t;K_(e,"network-request-failed",{message:String(t)})}}async function hb(e,t,n,r,i={}){const s=await ub(e,t,n,r,i);return"mfaPendingCredential"in s&&K_(e,"multi-factor-auth-required",{_serverResponse:s}),s}function db(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?ib(e.config,i):`${e.config.apiScheme}://${i}`}class fb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(H_(this.auth,"network-request-failed"))),ab.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function pb(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=H_(e,t,r);return i.customData._tokenResponse=n,i}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function mb(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function gb(e){return 1e3*Number(e)}function yb(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return G_("JWT malformed, contained fewer than 3 sections"),null;try{const e=Re(n);return e?JSON.parse(e):(G_("Failed to decode base64 JWT payload"),null)}catch(e){return G_("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function vb(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof je&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class wb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _b{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=mb(this.lastLoginAt),this.creationTime=mb(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function bb(e){var t;const n=e.auth,r=await e.getIdToken(),i=await vb(e,async function(e,t){return ub(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));X_(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=D_(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,u=o,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const l=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new _b(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ib{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X_(e.idToken,"internal-error"),X_(void 0!==e.idToken,"internal-error"),X_(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=yb(e);return X_(t,"internal-error"),X_(void 0!==t.exp,"internal-error"),X_(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return X_(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */await async function(e,t){const n=await lb(e,{},(async()=>{const n=Qe({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=db(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",sb.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Ib;return n&&(X_("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(X_("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(X_("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ib,this.toJSON())}_performRefresh(){return J_("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Tb(e,t){X_("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Eb{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=D_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _b(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await vb(this,this.stsTokenManager.getToken(this.auth,e));return X_(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=tt(e),r=await n.getIdToken(t),i=yb(r);X_(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:mb(gb(i.auth_time)),issuedAtTime:mb(gb(i.iat)),expirationTime:mb(gb(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=tt(e);await bb(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(X_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Eb(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){X_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await bb(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vb(this,async function(e,t){return ub(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:I}=t;X_(v&&I,e,"internal-error");const T=Ib.fromJSON(this.name,I);X_("string"==typeof v,e,"internal-error"),Tb(l,e.name),Tb(h,e.name),X_("boolean"==typeof w,e,"internal-error"),X_("boolean"==typeof _,e,"internal-error"),Tb(d,e.name),Tb(f,e.name),Tb(p,e.name),Tb(m,e.name),Tb(g,e.name),Tb(y,e.name);const E=new Eb({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(E.providerData=b.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new Ib;r.updateFromServerResponse(t);const i=new Eb({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await bb(i),i}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const kb=new Map;function Sb(e){Z_(e instanceof Function,"Expected a class definition");let t=kb.get(e);return t?(Z_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,kb.set(e,t),t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Cb.type="NONE";const Ab=Cb;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Nb(e,t,n){return`firebase:${e}:${t}:${n}`}class Rb{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Nb(this.userKey,r.apiKey,i),this.fullPersistenceKey=Nb("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Eb._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Rb(Sb(Ab),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Sb(Ab);const s=Nb(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=Eb._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Rb(i,e,n)):new Rb(i,e,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function xb(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Lb(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Db(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Fb(t))return"Blackberry";if(Ub(t))return"Webos";if(Ob(t))return"Safari";if((t.includes("chrome/")||Pb(t))&&!t.includes("edge/"))return"Chrome";if(Mb(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Db(e=Fe()){return/firefox\//i.test(e)}function Ob(e=Fe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Pb(e=Fe()){return/crios\//i.test(e)}function Lb(e=Fe()){return/iemobile/i.test(e)}function Mb(e=Fe()){return/android/i.test(e)}function Fb(e=Fe()){return/blackberry/i.test(e)}function Ub(e=Fe()){return/webos/i.test(e)}function Vb(e=Fe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Bb(e=Fe()){return Vb(e)||Mb(e)||Ub(e)||Fb(e)||/windows phone/i.test(e)||Lb(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function qb(e,t=[]){let n;switch(e){case"Browser":n=xb(Fe());break;case"Worker":n=`${xb(Fe())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${zt}/${r}`}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function $b(e,t){return ub(e,"GET","/v2/recaptchaConfig",cb(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function jb(e){return void 0!==e&&void 0!==e.getResponse}function zb(e){return void 0!==e&&void 0!==e.enterprise}class Gb{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Kb(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=H_("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(r)}))}function Hb(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Wb{constructor(e){this.type="recaptcha-enterprise",this.auth=Jb(e)}async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;zb(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{$b(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Gb(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&zb(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));Kb("https://www.google.com/recaptcha/enterprise.js?render="+i).then((()=>{n(i,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function Qb(e,t,n,r=!1){const i=new Wb(e);let s;try{s=await i.verify(n)}catch(e){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xb{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zb(this),this.idTokenSubscription=new Zb(this),this.beforeStateQueue=new Yb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=j_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Sb(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Rb.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X_(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bb(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?tt(e):null;return t&&X_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&X_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Sb(e))}))}async initializeRecaptchaConfig(){const e=await $b(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Gb(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new Wb(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ze("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Sb(e)||this._popupRedirectResolver;X_(t,this,"argument-error"),this.redirectPersistenceManager=await Rb.create(this,[Sb(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return X_(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X_(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){z_.logLevel<=at.WARN&&z_.warn(`Auth (${zt}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function Jb(e){return tt(e)}class Zb{constructor(e){this.auth=e,this.observer=null,this.addObserver=Je((e=>this.observer=e))}get next(){return X_(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function eI(e,t,n){const r=Jb(e);X_(r._canInitEmulator,r,"emulator-config-failed"),X_(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=tI(t),{host:o,port:a}=function(e){const t=tI(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:nI(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:nI(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */()}function tI(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function nI(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class rI{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return J_("not implemented")}_getIdTokenResponse(e){return J_("not implemented")}_linkToIdToken(e,t){return J_("not implemented")}_getReauthenticationResolver(e){return J_("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function iI(e,t){return ub(e,"POST","/v1/accounts:resetPassword",cb(e,t))}async function sI(e,t){return ub(e,"POST","/v1/accounts:update",t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function oI(e,t){return hb(e,"POST","/v1/accounts:signInWithPassword",cb(e,t))}async function aI(e,t){return ub(e,"POST","/v1/accounts:sendOobCode",cb(e,t))}async function cI(e,t){return aI(e,t)}async function uI(e,t){return aI(e,t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class lI extends rI{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new lI(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new lI(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Qb(e,n,"signInWithPassword");return oI(e,t)}return oI(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Qb(e,n,"signInWithPassword");return oI(e,t)}return Promise.reject(t)}));case"emailLink":
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return async function(e,t){return hb(e,"POST","/v1/accounts:signInWithEmailLink",cb(e,t))}(e,{email:this._email,oobCode:this._password});default:K_(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return sI(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return hb(e,"POST","/v1/accounts:signInWithEmailLink",cb(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:K_(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function hI(e,t){return hb(e,"POST","/v1/accounts:signInWithIdp",cb(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class dI extends rI{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new dI(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):K_("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=D_(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new dI(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return hI(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,hI(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,hI(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qe(t)}return e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const fI={USER_NOT_FOUND:"user-not-found"};
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class pI extends rI{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new pI({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new pI({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return hb(e,"POST","/v1/accounts:signInWithPhoneNumber",cb(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await hb(e,"POST","/v1/accounts:signInWithPhoneNumber",cb(e,t));if(n.temporaryProof)throw pb(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return hb(e,"POST","/v1/accounts:signInWithPhoneNumber",cb(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),fI)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new pI({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mI{constructor(e){var t,n,r,i,s,o;const a=Ye(Xe(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);X_(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=Ye(Xe(e)).link,n=t?Ye(Xe(t)).deep_link_id:null,r=Ye(Xe(e)).deep_link_id;return(r?Ye(Xe(r)).link:null)||r||n||t||e}(e);try{return new mI(t)}catch(e){return null}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gI{constructor(){this.providerId=gI.PROVIDER_ID}static credential(e,t){return lI._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=mI.parseLink(t);return X_(n,"argument-error"),lI._fromEmailAndCode(e,n.code,n.tenantId)}}gI.PROVIDER_ID="password",gI.EMAIL_PASSWORD_SIGN_IN_METHOD="password",gI.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class yI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vI extends yI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class wI extends vI{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return X_("providerId"in t&&"signInMethod"in t,"argument-error"),dI._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return X_(e.idToken||e.accessToken,"argument-error"),dI._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return wI.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return wI.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!(n||r||t||i))return null;if(!o)return null;try{return new wI(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(e){return null}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _I extends vI{constructor(){super("facebook.com")}static credential(e){return dI._fromParams({providerId:_I.PROVIDER_ID,signInMethod:_I.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _I.credentialFromTaggedObject(e)}static credentialFromError(e){return _I.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return _I.credential(e.oauthAccessToken)}catch(e){return null}}}_I.FACEBOOK_SIGN_IN_METHOD="facebook.com",_I.PROVIDER_ID="facebook.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class bI extends vI{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return dI._fromParams({providerId:bI.PROVIDER_ID,signInMethod:bI.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return bI.credentialFromTaggedObject(e)}static credentialFromError(e){return bI.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return bI.credential(t,n)}catch(e){return null}}}bI.GOOGLE_SIGN_IN_METHOD="google.com",bI.PROVIDER_ID="google.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class II extends vI{constructor(){super("github.com")}static credential(e){return dI._fromParams({providerId:II.PROVIDER_ID,signInMethod:II.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return II.credentialFromTaggedObject(e)}static credentialFromError(e){return II.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return II.credential(e.oauthAccessToken)}catch(e){return null}}}II.GITHUB_SIGN_IN_METHOD="github.com",II.PROVIDER_ID="github.com";class TI extends rI{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return hI(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,hI(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,hI(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new TI(n,i):null}static _create(e,t){return new TI(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class EI extends yI{constructor(e){X_(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return EI.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return EI.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=TI.fromJSON(e);return X_(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return TI._create(n,t)}catch(e){return null}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kI extends vI{constructor(){super("twitter.com")}static credential(e,t){return dI._fromParams({providerId:kI.PROVIDER_ID,signInMethod:kI.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return kI.credentialFromTaggedObject(e)}static credentialFromError(e){return kI.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return kI.credential(t,n)}catch(e){return null}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function SI(e,t){return hb(e,"POST","/v1/accounts:signUp",cb(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */kI.TWITTER_SIGN_IN_METHOD="twitter.com",kI.PROVIDER_ID="twitter.com";class CI{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Eb._fromIdTokenResponse(e,n,r),s=AI(n);return new CI({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=AI(n);return new CI({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function AI(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class NI extends je{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,NI.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new NI(e,t,n,r)}}function RI(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw NI._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function xI(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function DI(e,t){const n=tt(e);await PI(!0,n,t);const{providerUserInfo:r}=await async function(e,t){return ub(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),i=xI(r||[]);return n.providerData=n.providerData.filter((e=>i.has(e.providerId))),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function OI(e,t,n=!1){const r=await vb(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return CI._forOperation(e,"link",r)}async function PI(e,t,n){await bb(t);const r=!1===e?"provider-already-linked":"no-such-provider";X_(xI(t.providerData).has(n)===e,t.auth,r)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function LI(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await vb(e,RI(r,i,t,e),n);X_(s.idToken,r,"internal-error");const o=yb(s.idToken);X_(o,r,"internal-error");const{sub:a}=o;return X_(e.uid===a,r,"user-mismatch"),CI._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&K_(r,"user-mismatch"),e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function MI(e,t,n=!1){const r="signIn",i=await RI(e,r,t),s=await CI._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function FI(e,t){return MI(Jb(e),t)}async function UI(e,t){const n=tt(e);return await PI(!1,n,t.providerId),OI(n,t)}async function VI(e,t){return LI(tt(e),t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function BI(e,t){const n=Jb(e),r=await async function(e,t){return hb(e,"POST","/v1/accounts:signInWithCustomToken",cb(e,t))}(n,{token:t,returnSecureToken:!0}),i=await CI._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qI{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?$I._fromServerResponse(e,t):"totpInfo"in t?jI._fromServerResponse(e,t):K_(e,"internal-error")}}class $I extends qI{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new $I(t)}}class jI extends qI{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new jI(t)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function zI(e,t,n){var r;X_((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),X_(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(X_(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(X_(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function GI(e,t){await async function(e,t){return ub(e,"POST","/v1/accounts:update",cb(e,t))}(tt(e),{oobCode:t})}async function KI(e,t){const n=tt(e),r=await iI(n,{oobCode:t}),i=r.requestType;switch(X_(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":X_(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":X_(r.mfaInfo,n,"internal-error");default:X_(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=qI._fromServerResponse(Jb(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function HI(e,t){const n={identifier:t,continueUri:tb()?eb():"http://localhost"},{signinMethods:r}=
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */await async function(e,t){return ub(e,"POST","/v1/accounts:createAuthUri",cb(e,t))}(tt(e),n);return r||[]}async function WI(e,t){const n=tt(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&zI(n.auth,r,t);const{email:i}=await async function(e,t){return aI(e,t)}(n.auth,r);i!==e.email&&await e.reload()}async function QI(e,t,n){const r=tt(e),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&zI(r.auth,i,n);const{email:s}=await async function(e,t){return aI(e,t)}(r.auth,i);s!==e.email&&await e.reload()}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function YI(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=tt(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await vb(r,async function(e,t){return ub(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}async function XI(e,t,n){const{auth:r}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const s=await vb(e,sI(r,i));await e._updateTokensIfNecessary(s,!0)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class JI{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class ZI extends JI{constructor(e,t,n,r){super(e,t,n),this.username=r}}class eT extends JI{constructor(e,t){super(e,"facebook.com",t)}}class tT extends ZI{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class nT extends JI{constructor(e,t){super(e,"google.com",t)}}class rT extends ZI{constructor(e,t,n){super(e,"twitter.com",t,n)}}function iT(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null==e?void 0:e.idToken)){const r=null===(n=null===(t=yb(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(r)return new JI(s,"anonymous"!==r&&"custom"!==r?r:null)}if(!r)return null;switch(r){case"facebook.com":return new eT(s,i);case"github.com":return new tT(s,i);case"google.com":return new nT(s,i);case"twitter.com":return new rT(s,i,e.screenName||null);case"custom":case"anonymous":return new JI(s,null);default:return new JI(s,r,i)}}(n)}class sT{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new sT("enroll",e,t)}static _fromMfaPendingCredential(e){return new sT("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return sT._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return sT._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class oT{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Jb(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>qI._fromServerResponse(n,e)));X_(r.mfaPendingCredential,n,"internal-error");const s=sT._fromMfaPendingCredential(r.mfaPendingCredential);return new oT(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await CI._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return X_(t.user,n,"internal-error"),CI._forOperation(t.user,t.operationType,o);default:K_(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}class aT{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>qI._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new aT(e)}async getSession(){return sT._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,r=await this.getSession(),i=await vb(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"==typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await vb(this.user,function(e,t){return ub(e,"POST","/v2/accounts/mfaEnrollment:withdraw",cb(e,t))}(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(e){throw e}}}const cT=new WeakMap;const uT="__sak";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(uT,"1"),this.storage.removeItem(uT),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hT extends lT{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Fe();return Ob(e)||Vb(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Bb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);qe()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hT.type="LOCAL";const dT=hT;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fT extends lT{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fT.type="SESSION";const pT=fT;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class mT{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new mT(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function gT(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */mT.receivers=[];class yT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=gT("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function vT(){return window}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function wT(){return void 0!==vT().WorkerGlobalScope&&"function"==typeof vT().importScripts}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const _T="firebaseLocalStorageDb",bT="firebaseLocalStorage",IT="fbase_key";class TT{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ET(e,t){return e.transaction([bT],t?"readwrite":"readonly").objectStore(bT)}function kT(){const e=indexedDB.open(_T,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(bT,{keyPath:IT})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(bT)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(_T);return new TT(e).toPromise()}(),t(await kT()))}))}))}async function ST(e,t,n){const r=ET(e,!0).put({[IT]:t,value:n});return new TT(r).toPromise()}function CT(e,t){const n=ET(e,!0).delete(t);return new TT(n).toPromise()}class AT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await kT()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mT._getInstance(wT()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new yT(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kT();return await ST(e,uT,"1"),await CT(e,uT),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ST(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ET(e,!1).get(t),r=await new TT(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>CT(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ET(e,!1).getAll();return new TT(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}AT.type="LOCAL";const NT=AT;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const RT=1e12;class xT{constructor(e){this.auth=e,this.counter=RT,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new DT(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||RT;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||RT;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||RT;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class DT{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"==typeof e?document.getElementById(e):e;X_(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}const OT=Hb("rcb"),PT=new rb(3e4,6e4);class LT{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=vT().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return X_(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)&&jb(vT().grecaptcha)?Promise.resolve(vT().grecaptcha):new Promise(((n,r)=>{const i=vT().setTimeout((()=>{r(H_(e,"network-request-failed"))}),PT.get());vT()[OT]=()=>{vT().clearTimeout(i),delete vT()[OT];const s=vT().grecaptcha;if(!s||!jb(s))return void r(H_(e,"internal-error"));const o=s.render;s.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(s)};Kb(`https://www.google.com/recaptcha/api.js??${Qe({onload:OT,render:"explicit",hl:t})}`).catch((()=>{clearTimeout(i),r(H_(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=vT().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class MT{async load(e){return new xT(e)}clearedOneInstance(){}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const FT="recaptcha",UT={theme:"light",type:"image"};class VT{constructor(e,t=Object.assign({},UT),n){this.parameters=t,this.type=FT,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Jb(n),this.isInvisible="invisible"===this.parameters.size,X_("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"==typeof e?document.getElementById(e):e;X_(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new MT:new LT,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){X_(!this.parameters.sitekey,this.auth,"argument-error"),X_(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),X_("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"==typeof e)e(t);else if("string"==typeof e){const n=vT()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){X_(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){X_(tb()&&!wT(),this.auth,"internal-error"),await function(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await async function(e){return(await ub(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);X_(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return X_(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}class BT{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=pI._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function qT(e,t,n){var r;const i=await n.verify();try{let s;if(X_("string"==typeof i,e,"argument-error"),X_(n.type===FT,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){X_("enroll"===t.type,e,"internal-error");const n=
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */await function(e,t){return ub(e,"POST","/v2/accounts/mfaEnrollment:start",cb(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{X_("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;X_(n,e,"missing-multi-factor-info");const o=await function(e,t){return ub(e,"POST","/v2/accounts/mfaSignIn:start",cb(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return ub(e,"POST","/v1/accounts:sendVerificationCode",cb(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class $T{constructor(e){this.providerId=$T.PROVIDER_ID,this.auth=Jb(e)}verifyPhoneNumber(e,t){return qT(this.auth,e,tt(t))}static credential(e,t){return pI._fromVerification(e,t)}static credentialFromResult(e){const t=e;return $T.credentialFromTaggedObject(t)}static credentialFromError(e){return $T.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?pI._fromTokenResponse(t,n):null}}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function jT(e,t){return t?Sb(t):(X_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */$T.PROVIDER_ID="phone",$T.PHONE_SIGN_IN_METHOD="phone";class zT extends rI{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hI(e,this._buildIdpRequest())}_linkToIdToken(e,t){return hI(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return hI(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function GT(e){return MI(e.auth,new zT(e),e.bypassAuthState)}function KT(e){const{auth:t,user:n}=e;return X_(n,t,"internal-error"),LI(n,new zT(e),e.bypassAuthState)}async function HT(e){const{auth:t,user:n}=e;return X_(n,t,"internal-error"),OI(n,new zT(e),e.bypassAuthState)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class WT{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GT;case"linkViaPopup":case"linkViaRedirect":return HT;case"reauthViaPopup":case"reauthViaRedirect":return KT;default:K_(this.auth,"internal-error")}}resolve(e){Z_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Z_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const QT=new rb(2e3,1e4);class YT extends WT{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,YT.currentPopupAction&&YT.currentPopupAction.cancel(),YT.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X_(e,this.auth,"internal-error"),e}async onExecution(){Z_(1===this.filter.length,"Popup operations only handle one event");const e=gT();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(H_(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(H_(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,YT.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(H_(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,QT.get())};e()}}YT.currentPopupAction=null;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const XT="pendingRedirect",JT=new Map;class ZT extends WT{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=JT.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=rE(t),r=nE(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}JT.set(this.auth._key(),e)}return this.bypassAuthState||JT.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function eE(e,t){return nE(e)._set(rE(t),"true")}function tE(e,t){JT.set(e._key(),t)}function nE(e){return Sb(e._redirectPersistence)}function rE(e){return Nb(XT,e.config.apiKey,e.name)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function iE(e,t,n){return async function(e,t,n){const r=Jb(e);Q_(e,t,yI),await r._initializationPromise;const i=jT(r,n);return await eE(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}function sE(e,t,n){return async function(e,t,n){const r=tt(e);Q_(r.auth,t,yI),await r.auth._initializationPromise;const i=jT(r.auth,n);await eE(i,r.auth);const s=await cE(r);return i._openRedirect(r.auth,t,"reauthViaRedirect",s)}(e,t,n)}function oE(e,t,n){return async function(e,t,n){const r=tt(e);Q_(r.auth,t,yI),await r.auth._initializationPromise;const i=jT(r.auth,n);await PI(!1,r,t.providerId),await eE(i,r.auth);const s=await cE(r);return i._openRedirect(r.auth,t,"linkViaRedirect",s)}(e,t,n)}async function aE(e,t,n=!1){const r=Jb(e),i=jT(r,t),s=new ZT(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function cE(e){const t=gT(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class uE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hE(e);default:return!1}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!hE(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(H_(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(lE(e))}saveEventToCache(e){this.cachedEventUids.add(lE(e)),this.lastProcessedEventTime=Date.now()}}function lE(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function hE({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}async function dE(e,t={}){return ub(e,"GET","/v1/projects",t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const fE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pE=/^https?/;function mE(e){const t=eb(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!pE.test(n))return!1;if(fE.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const gE=new rb(3e4,6e4);function yE(){const e=vT().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let vE=null;function wE(e){return vE=vE||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){yE(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yE(),n(H_(e,"network-request-failed"))},timeout:gE.get()})}if(null===(i=null===(r=vT().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=vT().gapi)||void 0===s?void 0:s.load)){const t=Hb("iframefcb");return vT()[t]=()=>{gapi.load?o():n(H_(e,"network-request-failed"))},Kb(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw vE=null,e}))}(e),vE}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const _E=new rb(5e3,15e3),bE="__/auth/iframe",IE="emulator/auth/iframe",TE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kE(e){const t=e.config;X_(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ib(t,IE):`https://${e.config.authDomain}/${bE}`,r={apiKey:t.apiKey,appName:e.name,v:zt},i=EE.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qe(r).slice(1)}`}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const SE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class CE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function AE(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},SE),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Fe().toLowerCase();n&&(a=Pb(u)?"_blank":n),Db(u)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Fe()){var t;return Vb(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t||"",a),new CE(null);const h=window.open(t||"",a,l);X_(h,e,"popup-blocked");try{h.focus()}catch(e){}return new CE(h)}const NE="__/auth/handler",RE="emulator/auth/handler",xE=encodeURIComponent("fac");async function DE(e,t,n,r,i,s){X_(e.config.authDomain,e,"auth-domain-config-required"),X_(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:zt,eventId:i};if(t instanceof yI){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof vI){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const c=await e._getAppCheckToken(),u=c?`#${xE}=${encodeURIComponent(c)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${NE}`;return ib(e,RE)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)}?${Qe(a).slice(1)}${u}`}const OE="webStorageSupport";const PE=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pT,this._completeRedirectFn=aE,this._overrideRedirectResult=tE}async _openPopup(e,t,n,r){var i;Z_(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return AE(e,await DE(e,t,n,eb(),r),gT())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){vT().location.href=e}(await DE(e,t,n,eb(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Z_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await wE(e),n=vT().gapi;return X_(n,e,"internal-error"),t.open({where:document.body,url:kE(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TE,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=H_(e,"network-request-failed"),s=vT().setTimeout((()=>{r(i)}),_E.get());function o(){vT().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new uE(e);return t.register("authEvent",(t=>{X_(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(OE,{type:OE},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[OE];void 0!==i&&t(!!i),K_(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await dE(e);for(const e of t)try{if(mE(e))return}catch(e){}K_(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Bb()||Ob()||Vb()}};class LE{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return J_("unexpected MultiFactorSessionType")}}}class ME extends LE{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ME(e)}_finalizeEnroll(e,t,n){return function(e,t){return ub(e,"POST","/v2/accounts/mfaEnrollment:finalize",cb(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return ub(e,"POST","/v2/accounts/mfaSignIn:finalize",cb(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class FE{constructor(){}static assertion(e){return ME._fromCredential(e)}}FE.FACTOR_ID="phone";var UE="@firebase/auth",VE="0.23.2";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class BE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){X_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var qE;
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function $E(){return window}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e=>{var t;null===(t=Oe())||void 0===t||t[`_${e}`]})("authIdTokenMaxAge"),qE="Browser",Bt(new nt("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;X_(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:qE,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qb(qE)},c=new Xb(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sb);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Bt(new nt("auth-internal",(e=>(e=>new BE(e))(Jb(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(UE,VE,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(qE)),Ht(UE,VE,"esm2017");async function jE(e,t,n){var r;const{BuildInfo:i}=$E();Z_(t.sessionId,"AuthEvent did not contain a session ID");const s=await async function(e){const t=function(e){if(Z_(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(t.sessionId),o={};return Vb()?o.ibi=i.packageName:Mb()?o.apn=i.packageName:K_(e,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,DE(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}function zE(e){const{cordova:t}=$E();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,function(e=Fe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}()?"_blank":"_system","location=yes"),n(i)}))}))}const GE=20;class KE extends uE{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}async function HE(e){const t=await YE()._get(XE(e));return t&&await YE()._remove(XE(e)),t}function WE(e,t){var n,r;const i=function(e){const t=JE(e),n=t.link?decodeURIComponent(t.link):void 0,r=JE(n).link,i=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return JE(i).link||i||r||n||e}(t);if(i.includes("/__/auth/callback")){const t=JE(i),s=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,o=null===(r=null===(n=null==s?void 0:s.code)||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?H_(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function QE(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<GE;n++){const n=Math.floor(62*Math.random());e.push(t.charAt(n))}return e.join("")}function YE(){return Sb(dT)}function XE(e){return Nb("authEvent",e.config.apiKey,e.name)}function JE(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Ye(n.join("?"))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ZE=class{constructor(){this._redirectPersistence=pT,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=aE,this._overrideRedirectResult=tE}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new KE(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){K_(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){!function(e){var t,n,r,i,s,o,a,c,u,l;const h=$E();X_("function"==typeof(null===(t=null==h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),X_(void 0!==(null===(n=null==h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),X_("function"==typeof(null===(s=null===(i=null===(r=null==h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),X_("function"==typeof(null===(c=null===(a=null===(o=null==h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),X_("function"==typeof(null===(l=null===(u=null==h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),JT.clear(),await this._originValidation(e);const s=function(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:QE(),postBody:null,tenantId:e.tenantId,error:H_(e,"no-auth-event")}}(e,n,r);await function(e,t){return YE()._set(XE(e),t)}(e,s);const o=await jE(e,s,t);return async function(e,t,n){const{cordova:r}=$E();let i=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{o(H_(e,"redirect-cancelled-by-user"))}),2e3))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),Mb()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{i()}}(e,i,await zE(o))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=$E(),n={};Vb()?n.iosBundleId=t.packageName:Mb()?n.androidPackageName=t.packageName:K_(e,"operation-not-supported-in-this-environment"),await dE(e,n)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=$E(),s=setTimeout((async()=>{await HE(e),t.onEvent(ek())}),500),o=async n=>{clearTimeout(s);const r=await HE(e);let i=null;r&&(null==n?void 0:n.url)&&(i=WE(r,n.url)),t.onEvent(i||ek())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,o);const a=r,c=`${i.packageName.toLowerCase()}://`;$E().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"==typeof a)try{a(e)}catch(e){console.error(e)}}}};function ek(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:H_("no-auth-event")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function tk(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function nk(e=Fe()){return!("file:"!==tk()&&"ionic:"!==tk()&&"capacitor:"!==tk()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function rk(e=Fe()){return qe()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=Fe()){return/Edge\/\d+/.test(e)}(e)}function ik(){try{const e=self.localStorage,t=gT();if(e)return e.setItem(t,"1"),e.removeItem(t),!rk()||$e()}catch(e){return sk()&&$e()}return!1}function sk(){return"undefined"!=typeof global&&"WorkerGlobalScope"in global&&"importScripts"in global}function ok(){return("http:"===tk()||"https:"===tk()||Ve()||nk())&&!(Be()||Ue())&&ik()&&!sk()}function ak(){return nk()&&"undefined"!=typeof document}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const ck={LOCAL:"local",NONE:"none",SESSION:"session"},uk=X_,lk="persistence";async function hk(e){await e._initializationPromise;const t=dk(),n=Nb(lk,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function dk(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const fk=X_;class pk{constructor(){this.browserResolver=Sb(PE),this.cordovaResolver=Sb(ZE),this.underlyingResolver=null,this._redirectPersistence=pT,this._completeRedirectFn=aE,this._overrideRedirectResult=tE}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return ak()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return fk(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!ak()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),1e3);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function mk(e){return e.unwrap()}function gk(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null==t?void 0:t.code)){t.resolver=new _k(e,function(e,t){var n;const r=tt(e),i=t;return X_(t.customData.operationType,r,"argument-error"),X_(null===(n=i.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),oT._fromError(r,i)}(e,t))}else if(r){const e=yk(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function yk(e){const{_tokenResponse:t}=e instanceof je?e.customData:e;if(!t)return null;if(!(e instanceof je)&&"temporaryProof"in t&&"phoneNumber"in t)return $T.credentialFromResult(e);const n=t.providerId;if(!n||n===O_.PASSWORD)return null;let r;switch(n){case O_.GOOGLE:r=bI;break;case O_.FACEBOOK:r=_I;break;case O_.GITHUB:r=II;break;case O_.TWITTER:r=kI;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return i||s||e||o?o?n.startsWith("saml.")?TI._create(n,o):dI._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new wI(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof je?r.credentialFromError(e):r.credentialFromResult(e)}function vk(e,t){return t.catch((t=>{throw t instanceof je&&gk(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:(r=e,yk(r)),additionalUserInfo:iT(e),user:bk.getOrCreate(n)};
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
var r}))}async function wk(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>vk(e,n.confirm(t))}}class _k{constructor(e,t){this.resolver=t,this.auth=e.wrapped()}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return vk(mk(this.auth),this.resolver.resolveSignIn(e))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bk{constructor(e){this._delegate=e,this.multiFactor=function(e){const t=tt(e);return cT.has(t)||cT.set(t,aT._fromUser(t)),cT.get(t)}(e)}static getOrCreate(e){return bk.USER_MAP.has(e)||bk.USER_MAP.set(e,new bk(e)),bk.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return vk(this.auth,UI(this._delegate,e))}async linkWithPhoneNumber(e,t){return wk(this.auth,async function(e,t,n){const r=tt(e);await PI(!1,r,"phone");const i=await qT(r.auth,t,tt(n));return new BT(i,(e=>UI(r,e)))}(this._delegate,e,t))}async linkWithPopup(e){return vk(this.auth,async function(e,t,n){const r=tt(e);Q_(r.auth,t,yI);const i=jT(r.auth,n);return new YT(r.auth,"linkViaPopup",t,i,r).executeNotNull()}(this._delegate,e,pk))}async linkWithRedirect(e){return await hk(Jb(this.auth)),oE(this._delegate,e,pk)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return vk(this.auth,VI(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return wk(this.auth,async function(e,t,n){const r=tt(e),i=await qT(r.auth,t,tt(n));return new BT(i,(e=>VI(r,e)))}(this._delegate,e,t))}reauthenticateWithPopup(e){return vk(this.auth,async function(e,t,n){const r=tt(e);Q_(r.auth,t,yI);const i=jT(r.auth,n);return new YT(r.auth,"reauthViaPopup",t,i,r).executeNotNull()}(this._delegate,e,pk))}async reauthenticateWithRedirect(e){return await hk(Jb(this.auth)),sE(this._delegate,e,pk)}sendEmailVerification(e){return WI(this._delegate,e)}async unlink(e){return await DI(this._delegate,e),this}updateEmail(e){return function(e,t){return XI(tt(e),t,null)}(this._delegate,e)}updatePassword(e){return function(e,t){return XI(tt(e),null,t)}(this._delegate,e)}updatePhoneNumber(e){return async function(e,t){await OI(tt(e),t)}(this._delegate,e)}updateProfile(e){return YI(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return QI(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}bk.USER_MAP=new WeakMap;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Ik=X_;class Tk{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;Ik(n,"invalid-api-key",{appName:e.name}),Ik(n,"invalid-api-key",{appName:e.name});const r="undefined"!=typeof window?pk:void 0;this._delegate=t.initialize({options:{persistence:kk(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(q_),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?bk.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){eI(this._delegate,e,t)}applyActionCode(e){return GI(this._delegate,e)}checkActionCode(e){return KI(this._delegate,e)}confirmPasswordReset(e,t){return async function(e,t,n){await iI(tt(e),{oobCode:t,newPassword:n})}(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return vk(this._delegate,async function(e,t,n){var r;const i=Jb(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await Qb(i,s,"signUpPassword");o=SI(i,e)}else o=SI(i,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await Qb(i,s,"signUpPassword");return SI(i,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),c=await CI._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return HI(this._delegate,e)}isSignInWithEmailLink(e){return function(e,t){const n=mI.parseLink(t);return"EMAIL_SIGNIN"===(null==n?void 0:n.operation)}(this._delegate,e)}async getRedirectResult(){Ik(ok(),this._delegate,"operation-not-supported-in-this-environment");const e=await async function(e,t){return await Jb(e)._initializationPromise,aE(e,t,!1)}(this._delegate,pk);return e?vk(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){!function(e,t){Jb(e)._logFramework(t)}(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=Ek(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=Ek(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return async function(e,t,n){var r;const i=Jb(e),s={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function o(e,t){X_(t.handleCodeInApp,i,"argument-error"),t&&zI(i,e,t)}if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await Qb(i,s,"getOobCode",!0);o(e,n),await uI(i,e)}else o(s,n),await uI(i,s).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await Qb(i,s,"getOobCode",!0);o(e,n),await uI(i,e)}}))}(this._delegate,e,t)}sendPasswordResetEmail(e,t){return async function(e,t,n){var r;const i=Jb(e),s={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await Qb(i,s,"getOobCode",!0);n&&zI(i,e,n),await cI(i,e)}else n&&zI(i,s,n),await cI(i,s).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const e=await Qb(i,s,"getOobCode",!0);n&&zI(i,e,n),await cI(i,e)}}))}(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){uk(Object.values(ck).includes(t),e,"invalid-persistence-type"),Be()?uk(t!==ck.SESSION,e,"unsupported-persistence-type"):Ue()?uk(t===ck.NONE,e,"unsupported-persistence-type"):sk()?uk(t===ck.NONE||t===ck.LOCAL&&$e(),e,"unsupported-persistence-type"):uk(t===ck.NONE||ik(),e,"unsupported-persistence-type")}(this._delegate,e),e){case ck.SESSION:t=pT;break;case ck.LOCAL:t=await Sb(NT)._isAvailable()?NT:dT;break;case ck.NONE:t=Ab;break;default:return K_("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return vk(this._delegate,async function(e){var t;const n=Jb(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new CI({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await SI(n,{returnSecureToken:!0}),i=await CI._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}(this._delegate))}signInWithCredential(e){return vk(this._delegate,FI(this._delegate,e))}signInWithCustomToken(e){return vk(this._delegate,BI(this._delegate,e))}signInWithEmailAndPassword(e,t){return vk(this._delegate,function(e,t,n){return FI(tt(e),gI.credential(t,n))}(this._delegate,e,t))}signInWithEmailLink(e,t){return vk(this._delegate,async function(e,t,n){const r=tt(e),i=gI.credentialWithLink(t,n||eb());return X_(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),FI(r,i)}(this._delegate,e,t))}signInWithPhoneNumber(e,t){return wk(this._delegate,async function(e,t,n){const r=Jb(e),i=await qT(r,t,tt(n));return new BT(i,(e=>FI(r,e)))}(this._delegate,e,t))}async signInWithPopup(e){return Ik(ok(),this._delegate,"operation-not-supported-in-this-environment"),vk(this._delegate,async function(e,t,n){const r=Jb(e);Q_(e,t,yI);const i=jT(r,n);return new YT(r,"signInViaPopup",t,i).executeNotNull()}(this._delegate,e,pk))}async signInWithRedirect(e){return Ik(ok(),this._delegate,"operation-not-supported-in-this-environment"),await hk(this._delegate),iE(this._delegate,e,pk)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return async function(e,t){const{data:n}=await KI(tt(e),t);return n.email}(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function Ek(e,t,n){let r=e;"function"!=typeof e&&({next:r,error:t,complete:n}=e);const i=r;return{next:e=>i(e&&bk.getOrCreate(e)),error:t,complete:n}}function kk(e,t){const n=function(e,t){const n=dk();if(!n)return[];const r=Nb(lk,e,t);switch(n.getItem(r)){case ck.NONE:return[Ab];case ck.LOCAL:return[NT,pT];case ck.SESSION:return[pT];default:return[]}}(e,t);if("undefined"==typeof self||n.includes(NT)||n.push(NT),"undefined"!=typeof window)for(const e of[dT,pT])n.includes(e)||n.push(e);return n.includes(Ab)||n.push(Ab),n}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Tk.Persistence=ck;class Sk{constructor(){this.providerId="phone",this._delegate=new $T(mk(pn.auth()))}static credential(e,t){return $T.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Sk.PHONE_SIGN_IN_METHOD=$T.PHONE_SIGN_IN_METHOD,Sk.PROVIDER_ID=$T.PROVIDER_ID;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Ck=X_;class Ak{constructor(e,t,n=pn.app()){var r;Ck(null===(r=n.options)||void 0===r?void 0:r.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new VT(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */!function(e){e.INTERNAL.registerComponent(new nt("auth-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new Tk(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:P_,PASSWORD_RESET:L_,RECOVER_EMAIL:M_,REVERT_SECOND_FACTOR_ADDITION:F_,VERIFY_AND_CHANGE_EMAIL:U_,VERIFY_EMAIL:V_}},EmailAuthProvider:gI,FacebookAuthProvider:_I,GithubAuthProvider:II,GoogleAuthProvider:bI,OAuthProvider:wI,SAMLAuthProvider:EI,PhoneAuthProvider:Sk,PhoneMultiFactorGenerator:FE,RecaptchaVerifier:Ak,TwitterAuthProvider:kI,Auth:Tk,AuthCredential:rI,Error:je}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion("@firebase/auth-compat","0.4.2")}(pn);const Nk=[];function Rk(t,n=e){let r;const i=new Set;function s(e){if(a(t,e)&&(t=e,r)){const e=!Nk.length;for(const e of i)e[1](),Nk.push(e,t);if(e){for(let e=0;e<Nk.length;e+=2)Nk[e][0](Nk[e+1]);Nk.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(o,a=e){const c=[o,a];return i.add(c),1===i.size&&(r=n(s)||e),o(t),()=>{i.delete(c),0===i.size&&r&&(r(),r=null)}}}}const xk={bonusAmount:1,basePayment:15,maxQuizAttempts:3,quizAnswerBuffer:5,groupSize:2,waitLimit:10,waitFailLimit:.083,consentHallwayLimit:30,debugMode:!1},Dk={apiKey:"AIzaSyDkdKO_KE0b2S6bg9CNH-yBGB-0Ph6GOXI",authDomain:"svelte-vid-sync-chat-app.firebaseapp.com",databaseURL:"https://svelte-vid-sync-chat-app-default-rtdb.firebaseio.com",projectId:"svelte-vid-sync-chat-app",storageBucket:"svelte-vid-sync-chat-app.appspot.com",messagingSenderId:"847886552871",appId:"1:847886552871:web:e858b721ad999f26696302",measurementId:"G-CC4NVFPPX7"};console.log("firebaseConfig",Dk),pn.initializeApp(Dk);const Ok=pn.firestore();pn.storage();const Pk=pn.auth(),Lk=pn.firestore.FieldValue.serverTimestamp();pn.firestore.FieldValue.increment(1),pn.firestore.FieldValue.arrayUnion;const Mk=e=>{let t=window.location.search.substring(1).split("&");for(let n=0;n<t.length;n++){let r=t[n].split("=");if(decodeURIComponent(r[0])===e)return decodeURIComponent(r[1])}},Fk=e=>decodeURIComponent(e.replace(/\+/g,"%20")),Uk=(()=>{const e={},t=window.location.href.match(/[\\?&]([^=]+)=([^&#]*)/g);if(t){let n=0;for(;n<t.length;){const r=t[n].match(/.([^=]+)=(.*)/);e[Fk(r[1])]=Fk(r[2]),n+=1}}let n=Mk("PROLIFIC_PID"),r=Mk("workerId"),i=!!n;if(!!r)e.platformId=r,console.log("Using MTurk \n MTURK_ID:",r);else if(i){console.log("Using Prolific \n PROLIFIC_PID:",n);let t=Mk("STUDY_ID"),r=Mk("SESSION_ID");e.platformId=n,e.hitId=t,e.assignmentId=r}return console.log("params",e),e})(),Vk=Rk({}),Bk=async e=>{try{let t="mind-prod-participants";await Ok.collection(`${t}`).doc(Uk.platformId).update(e),console.log("user doc successfully updated")}catch(e){console.error("Error updating user document in firestore"),console.log(e)}},qk=async()=>{const e=[];try{(await Ok.collection("recordings").orderBy("responses").limit(1).get()).forEach((t=>{e.push(t.data().name)})),(e=>{for(let t=e.length-1;t>0;t-=1){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}})(e);let t="mind-prod-participants";await Ok.collection(`${t}`).doc(Uk.platformId).set({platformId:Uk.platformId,assignmentId:Uk.assignmentId,hitId:Uk.hitId,consent_start:Lk,currentState:"consent",quizState:"overview",quizAttempts:0,quizPassed:!1,bonus:0,submitted:!1,trialOrder:e})}catch(e){console.error(e)}};function $k(t){let n,r,i,s=function(t){let n,r,i,s,o,a,c,u,l,h,d,f,p,m=xk.waitLimit+"";return{c(){n=N("div"),r=N("p"),i=x("You will be answering questions and communicating with 1 other person\n        via text-based chat for 3 minutes."),s=N("br"),o=x("\n        You will first be put into a waiting room where you will then be matched\n        with one other participant before starting the experiment. "),a=N("br"),c=x("\n        You will be waiting to be matched for a maximum of "),u=x(m),l=x("\n        minutes."),h=D(),d=N("button"),d.textContent="Proceed to the Waiting Room",L(r,"class","items-center justify-center is-size-4"),L(d,"class","button is-primary is-rounded svelte-1fin5g8"),L(n,"class","bot-box svelte-1fin5g8")},m(e,m){S(e,n,m),T(n,r),T(r,i),T(r,s),T(r,o),T(r,a),T(r,c),T(r,u),T(r,l),T(n,h),T(n,d),f||(p=O(d,"click",t[0]),f=!0)},p:e,d(e){e&&C(n),f=!1,p()}}}(t);return{c(){n=N("div"),r=N("h1"),r.textContent="Study Instructions",i=D(),s&&s.c(),L(r,"class","title"),L(n,"class","container svelte-1fin5g8")},m(e,t){S(e,n,t),T(n,r),T(n,i),s&&s.m(n,null)},p(e,[t]){s.p(e,t)},i:e,o:e,d(e){e&&C(n),s&&s.d()}}}function jk(e){const t=J();return[function(){t("finished")}]}class zk extends ke{constructor(e){super(),Ee(this,e,jk,$k,a,{})}}function Gk(t){let n,r,i,o,a,c,u,l,h,d,f,p,m,g,y,v,w;return{c(){n=N("div"),r=N("div"),i=N("div"),o=N("div"),a=N("div"),a.innerHTML='<h1 class="title is-2 custom-card-title svelte-1czeazl">Consent</h1> \n          <hr class="no-space-hr svelte-1czeazl"/>',c=D(),u=N("div"),l=N("div"),h=D(),d=N("footer"),f=N("p"),p=N("button"),p.textContent="I do not consent",m=D(),g=N("p"),y=N("button"),y.textContent="I consent",L(a,"class","has-text-centered"),L(l,"class","content"),L(u,"class","card-content"),L(p,"class","button is-danger controls svelte-1czeazl"),L(f,"class","card-footer-item"),L(y,"class","button is-success controls svelte-1czeazl"),L(g,"class","card-footer-item"),L(d,"class","card-footer"),L(o,"class","card"),L(i,"class","column is-three-fifths "),L(r,"class","columns is-centered"),L(n,"class","container")},m(e,s){S(e,n,s),T(n,r),T(r,i),T(i,o),T(o,a),T(o,c),T(o,u),T(u,l),l.innerHTML=t[0],T(o,h),T(o,d),T(d,f),T(f,p),T(d,m),T(d,g),T(g,y),v||(w=[O(p,"click",t[2]),O(y,"click",t[3])],v=!0)},p:e,i:e,o:e,d(e){e&&C(n),v=!1,s(w)}}}function Kk(e){const t=J();return['We need your consent to proceed. The following material explains this research study. <br><br>\n  This project is being conducted by researchers from the department of Psychological and Brain Sciences at\n  Dartmouth College, Hanover, NH, USA. This study aims to investigate under which conditions do individuals\n  choose to interact with each other as well as understand the nature of the interactions to permit social\n  connectedness. <br><br>\n  Your participation is voluntary. Participation involves making behavioral judgments about pictures, video/audio clips, and text excerpts\n  while simultaneously being able to communicate with other individuals through written communication (e.g., text, emojis).\n  You may choose to not answer any or all questions. <br><br>\n  \n  If you choose to interact with other research participants, please be aware that you will be interacting\n  with real human participants. The research team, therefore, cannot control what information other participants\n  will choose to share with you. Participation requires that you do not engage in harmful language or communication\n  with other participants throughout the experiment. Failure to comply may result in potential loss of compensation \n  or participation in this study. Further, it is recommended that you should not share any identifiable information \n  with other participants.<br><br>\n  \n  Please be aware that your communication data will be collected and analyzed. Your communication data will also\n  be reviewed in real time to be flagged for any potentially harmful content. Your responses will be collected in\n  an anonymous fashion such that no identifying information will be stored alongside any responses you make during the task.\n  If any identifiable information is shared during communication, it will be removed prior to analysis.\n  Identifying information will not be used in any presentation or paper written about this project and such\n  presentations will represent the aggregation of data from groups of people. \n  <br><br> <strong>Do you understand and consent to these terms?</strong><br/>\n  If so, click the "Accept consent" button below to be taken to the instructions. Otherwise, please return this study.',t,()=>t("reject"),()=>t("consent")]}class Hk extends ke{constructor(e){super(),Ee(this,e,Kk,Gk,a,{})}}function Wk(t){let n;return{c(){n=N("p"),n.innerHTML="Sorry, too many incorrect answers were entered. <strong>This trial will not continue.</strong>"},m(e,t){S(e,n,t)},p:e,d(e){e&&C(n)}}}function Qk(t){let n,r,i,s,o;return{c(){n=N("p"),n.textContent="Sorry, that was not the correct answer. Please try again.",r=D(),i=N("button"),i.textContent="Try again",L(i,"class","button svelte-2mr7ow")},m(e,a){S(e,n,a),S(e,r,a),S(e,i,a),s||(o=O(i,"click",t[6]),s=!0)},p:e,d(e){e&&C(n),e&&C(r),e&&C(i),s=!1,o()}}}function Yk(e){let t,n,r,i,o,a,c,u,l,h,d,f,p,m,g,y=e[4][e[2]]+"",v=e[4][e[3]]+"";return{c(){t=N("div"),n=N("p"),r=x("Let's make sure you're human. What is "),i=N("strong"),o=x(y),a=x("\n        plus "),c=N("strong"),u=x(v),l=x("? Enter a single numeral in the box\n        below."),h=D(),d=N("input"),f=D(),p=N("button"),p.textContent="Continue",L(d,"type","number"),L(d,"id","number"),L(d,"name","number"),L(p,"class","button svelte-2mr7ow"),L(t,"class","bot-box svelte-2mr7ow")},m(s,y){S(s,t,y),T(t,n),T(n,r),T(n,i),T(i,o),T(n,a),T(n,c),T(c,u),T(n,l),T(t,h),T(t,d),V(d,e[0]),T(t,f),T(t,p),m||(g=[O(d,"input",e[7]),O(p,"click",e[5])],m=!0)},p(e,t){4&t&&y!==(y=e[4][e[2]]+"")&&U(o,y),8&t&&v!==(v=e[4][e[3]]+"")&&U(u,v),1&t&&F(d.value)!==e[0]&&V(d,e[0])},d(e){e&&C(t),m=!1,s(g)}}}function Xk(t){let n,r,i;function s(e,t){return"botCheck"===e[1]?Yk:"try again"===e[1]?Qk:"failed"===e[1]?Wk:void 0}let o=s(t),a=o&&o(t);return{c(){n=N("div"),r=N("h1"),r.textContent="Bot check!",i=D(),a&&a.c(),L(n,"class","container svelte-2mr7ow")},m(e,t){S(e,n,t),T(n,r),T(n,i),a&&a.m(n,null)},p(e,[t]){o===(o=s(e))&&a?a.p(e,t):(a&&a.d(1),a=o&&o(e),a&&(a.c(),a.m(n,null)))},i:e,o:e,d(e){e&&C(n),a&&a.d()}}}function Jk(e,t,n){const r=J();let i,s=[1,2,3,4],o=["one","two","three","four"],a=1,c="botCheck",u=Math.floor(Math.random()*o.length),l=Math.floor(Math.random()*o.length);return[i,c,u,l,o,function(){i==s[u]+s[l]?r("finished"):a<3?(n(0,i=null),a+=1,n(2,u=Math.floor(Math.random()*o.length)),n(3,l=Math.floor(Math.random()*o.length)),n(1,c="try again")):(n(1,c="failed"),r("failed"))},function(){n(1,c="botCheck")},function(){i=F(this.value),n(0,i)}]}class Zk extends ke{constructor(e){super(),Ee(this,e,Jk,Xk,a,{})}}const eS=Object.create(null);eS.open="0",eS.close="1",eS.ping="2",eS.pong="3",eS.message="4",eS.upgrade="5",eS.noop="6";const tS=Object.create(null);Object.keys(eS).forEach((e=>{tS[eS[e]]=e}));const nS={type:"error",data:"parser error"},rS="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),iS="function"==typeof ArrayBuffer,sS=e=>"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,oS=({type:e,data:t},n,r)=>rS&&t instanceof Blob?n?r(t):aS(t,r):iS&&(t instanceof ArrayBuffer||sS(t))?n?r(t):aS(new Blob([t]),r):r(eS[e]+(t||"")),aS=(e,t)=>{const n=new FileReader;return n.onload=function(){const e=n.result.split(",")[1];t("b"+(e||""))},n.readAsDataURL(e)};function cS(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let uS;const lS="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",hS="undefined"==typeof Uint8Array?[]:new Uint8Array(256);for(let e=0;e<64;e++)hS[lS.charCodeAt(e)]=e;const dS="function"==typeof ArrayBuffer,fS=(e,t)=>{if("string"!=typeof e)return{type:"message",data:mS(e,t)};const n=e.charAt(0);if("b"===n)return{type:"message",data:pS(e.substring(1),t)};return tS[n]?e.length>1?{type:tS[n],data:e.substring(1)}:{type:tS[n]}:nS},pS=(e,t)=>{if(dS){const n=(e=>{let t,n,r,i,s,o=.75*e.length,a=e.length,c=0;"="===e[e.length-1]&&(o--,"="===e[e.length-2]&&o--);const u=new ArrayBuffer(o),l=new Uint8Array(u);for(t=0;t<a;t+=4)n=hS[e.charCodeAt(t)],r=hS[e.charCodeAt(t+1)],i=hS[e.charCodeAt(t+2)],s=hS[e.charCodeAt(t+3)],l[c++]=n<<2|r>>4,l[c++]=(15&r)<<4|i>>2,l[c++]=(3&i)<<6|63&s;return u})(e);return mS(n,t)}return{base64:!0,data:e}},mS=(e,t)=>"blob"===t?e instanceof Blob?e:new Blob([e]):e instanceof ArrayBuffer?e:e.buffer,gS=String.fromCharCode(30);function yS(){return new TransformStream({transform(e,t){!function(e,t){rS&&e.data instanceof Blob?e.data.arrayBuffer().then(cS).then(t):iS&&(e.data instanceof ArrayBuffer||sS(e.data))?t(cS(e.data)):oS(e,!1,(e=>{uS||(uS=new TextEncoder),t(uS.encode(e))}))}(e,(n=>{const r=n.length;let i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);const e=new DataView(i.buffer);e.setUint8(0,126),e.setUint16(1,r)}else{i=new Uint8Array(9);const e=new DataView(i.buffer);e.setUint8(0,127),e.setBigUint64(1,BigInt(r))}e.data&&"string"!=typeof e.data&&(i[0]|=128),t.enqueue(i),t.enqueue(n)}))}})}let vS;function wS(e){return e.reduce(((e,t)=>e+t.length),0)}function _S(e,t){if(e[0].length===t)return e.shift();const n=new Uint8Array(t);let r=0;for(let i=0;i<t;i++)n[i]=e[0][r++],r===e[0].length&&(e.shift(),r=0);return e.length&&r<e[0].length&&(e[0]=e[0].slice(r)),n}function bS(e){if(e)return function(e){for(var t in bS.prototype)e[t]=bS.prototype[t];return e}(e)}bS.prototype.on=bS.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},bS.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},bS.prototype.off=bS.prototype.removeListener=bS.prototype.removeAllListeners=bS.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+e];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var i=0;i<r.length;i++)if((n=r[i])===t||n.fn===t){r.splice(i,1);break}return 0===r.length&&delete this._callbacks["$"+e],this},bS.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){r=0;for(var i=(n=n.slice(0)).length;r<i;++r)n[r].apply(this,t)}return this},bS.prototype.emitReserved=bS.prototype.emit,bS.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},bS.prototype.hasListeners=function(e){return!!this.listeners(e).length};const IS="undefined"!=typeof self?self:"undefined"!=typeof window?window:Function("return this")();function TS(e,...t){return t.reduce(((t,n)=>(e.hasOwnProperty(n)&&(t[n]=e[n]),t)),{})}const ES=IS.setTimeout,kS=IS.clearTimeout;function SS(e,t){t.useNativeTimers?(e.setTimeoutFn=ES.bind(IS),e.clearTimeoutFn=kS.bind(IS)):(e.setTimeoutFn=IS.setTimeout.bind(IS),e.clearTimeoutFn=IS.clearTimeout.bind(IS))}class CS extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class AS extends bS{constructor(e){super(),this.writable=!1,SS(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,n){return super.emitReserved("error",new CS(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}send(e){"open"===this.readyState&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=fS(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return-1===e.indexOf(":")?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(443!==this.opts.port)||!this.opts.secure&&80!==Number(this.opts.port))?":"+this.opts.port:""}_query(e){const t=function(e){let t="";for(let n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t}(e);return t.length?"?"+t:""}}const NS="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),RS=64,xS={};let DS,OS=0,PS=0;function LS(e){let t="";do{t=NS[e%RS]+t,e=Math.floor(e/RS)}while(e>0);return t}function MS(){const e=LS(+new Date);return e!==DS?(OS=0,DS=e):e+"."+LS(OS++)}for(;PS<RS;PS++)xS[NS[PS]]=PS;let FS=!1;try{FS="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(e){}const US=FS;function VS(e){const t=e.xdomain;try{if("undefined"!=typeof XMLHttpRequest&&(!t||US))return new XMLHttpRequest}catch(e){}if(!t)try{return new(IS[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(e){}}function BS(){}const qS=null!=new VS({xdomain:!1}).responseType;class $S extends bS{constructor(e,t){super(),SS(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.data=void 0!==t.data?t.data:null,this.create()}create(){var e;const t=TS(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd;const n=this.xhr=new VS(t);try{n.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let e in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(e)&&n.setRequestHeader(e,this.opts.extraHeaders[e])}}catch(e){}if("POST"===this.method)try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(e){}try{n.setRequestHeader("Accept","*/*")}catch(e){}null===(e=this.opts.cookieJar)||void 0===e||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(n.timeout=this.opts.requestTimeout),n.onreadystatechange=()=>{var e;3===n.readyState&&(null===(e=this.opts.cookieJar)||void 0===e||e.parseCookies(n)),4===n.readyState&&(200===n.status||1223===n.status?this.onLoad():this.setTimeoutFn((()=>{this.onError("number"==typeof n.status?n.status:0)}),0))},n.send(this.data)}catch(e){return void this.setTimeoutFn((()=>{this.onError(e)}),0)}"undefined"!=typeof document&&(this.index=$S.requestsCount++,$S.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(void 0!==this.xhr&&null!==this.xhr){if(this.xhr.onreadystatechange=BS,e)try{this.xhr.abort()}catch(e){}"undefined"!=typeof document&&delete $S.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;null!==e&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}if($S.requestsCount=0,$S.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",jS);else if("function"==typeof addEventListener){addEventListener("onpagehide"in IS?"pagehide":"unload",jS,!1)}function jS(){for(let e in $S.requests)$S.requests.hasOwnProperty(e)&&$S.requests[e].abort()}const zS="function"==typeof Promise&&"function"==typeof Promise.resolve?e=>Promise.resolve().then(e):(e,t)=>t(e,0),GS=IS.WebSocket||IS.MozWebSocket,KS="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase();const HS={websocket:class extends AS{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,n=KS?{}:TS(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=KS?new GS(e,t,n):t?new GS(e,t):new GS(e)}catch(e){return this.emitReserved("error",e)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],r=t===e.length-1;oS(n,this.supportsBinary,(e=>{try{this.ws.send(e)}catch(e){}r&&zS((()=>{this.writable=!0,this.emitReserved("drain")}),this.setTimeoutFn)}))}}doClose(){void 0!==this.ws&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=MS()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}check(){return!!GS}},webtransport:class extends AS{get name(){return"webtransport"}doOpen(){"function"==typeof WebTransport&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then((()=>{this.onClose()})).catch((e=>{this.onError("webtransport error",e)})),this.transport.ready.then((()=>{this.transport.createBidirectionalStream().then((e=>{const t=function(e,t){vS||(vS=new TextDecoder);const n=[];let r=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(0===r){if(wS(n)<1)break;const e=_S(n,1);s=128==(128&e[0]),i=127&e[0],r=i<126?3:126===i?1:2}else if(1===r){if(wS(n)<2)break;const e=_S(n,2);i=new DataView(e.buffer,e.byteOffset,e.length).getUint16(0),r=3}else if(2===r){if(wS(n)<8)break;const e=_S(n,8),t=new DataView(e.buffer,e.byteOffset,e.length),s=t.getUint32(0);if(s>Math.pow(2,21)-1){a.enqueue(nS);break}i=s*Math.pow(2,32)+t.getUint32(4),r=3}else{if(wS(n)<i)break;const e=_S(n,i);a.enqueue(fS(s?e:vS.decode(e),t)),r=0}if(0===i||i>e){a.enqueue(nS);break}}}})}(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),r=yS();r.readable.pipeTo(e.writable),this.writer=r.writable.getWriter();const i=()=>{n.read().then((({done:e,value:t})=>{e||(this.onPacket(t),i())})).catch((e=>{}))};i();const s={type:"open"};this.query.sid&&(s.data=`{"sid":"${this.query.sid}"}`),this.writer.write(s).then((()=>this.onOpen()))}))})))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],r=t===e.length-1;this.writer.write(n).then((()=>{r&&zS((()=>{this.writable=!0,this.emitReserved("drain")}),this.setTimeoutFn)}))}}doClose(){var e;null===(e=this.transport)||void 0===e||e.close()}},polling:class extends AS{constructor(e){if(super(e),this.polling=!1,"undefined"!=typeof location){const t="https:"===location.protocol;let n=location.port;n||(n=t?"443":"80"),this.xd="undefined"!=typeof location&&e.hostname!==location.hostname||n!==e.port}const t=e&&e.forceBase64;this.supportsBinary=qS&&!t,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let e=0;this.polling&&(e++,this.once("pollComplete",(function(){--e||t()}))),this.writable||(e++,this.once("drain",(function(){--e||t()})))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){((e,t)=>{const n=e.split(gS),r=[];for(let e=0;e<n.length;e++){const i=fS(n[e],t);if(r.push(i),"error"===i.type)break}return r})(e,this.socket.binaryType).forEach((e=>{if("opening"===this.readyState&&"open"===e.type&&this.onOpen(),"close"===e.type)return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(e)})),"closed"!==this.readyState&&(this.polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};"open"===this.readyState?e():this.once("open",e)}write(e){this.writable=!1,((e,t)=>{const n=e.length,r=new Array(n);let i=0;e.forEach(((e,s)=>{oS(e,!1,(e=>{r[s]=e,++i===n&&t(r.join(gS))}))}))})(e,(e=>{this.doWrite(e,(()=>{this.writable=!0,this.emitReserved("drain")}))}))}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=MS()),this.supportsBinary||t.sid||(t.b64=1),this.createUri(e,t)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new $S(this.uri(),e)}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",((e,t)=>{this.onError("xhr post error",e,t)}))}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",((e,t)=>{this.onError("xhr poll error",e,t)})),this.pollXhr=e}}},WS=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,QS=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function YS(e){const t=e,n=e.indexOf("["),r=e.indexOf("]");-1!=n&&-1!=r&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,";")+e.substring(r,e.length));let i=WS.exec(e||""),s={},o=14;for(;o--;)s[QS[o]]=i[o]||"";return-1!=n&&-1!=r&&(s.source=t,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=function(e,t){const n=/\/{2,9}/g,r=t.replace(n,"/").split("/");"/"!=t.slice(0,1)&&0!==t.length||r.splice(0,1);"/"==t.slice(-1)&&r.splice(r.length-1,1);return r}(0,s.path),s.queryKey=function(e,t){const n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,(function(e,t,r){t&&(n[t]=r)})),n}(0,s.query),s}class XS extends bS{constructor(e,t={}){super(),this.binaryType="arraybuffer",this.writeBuffer=[],e&&"object"==typeof e&&(t=e,e=null),e?(e=YS(e),t.hostname=e.host,t.secure="https"===e.protocol||"wss"===e.protocol,t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=YS(t.host).host),SS(this,t),this.secure=null!=t.secure?t.secure:"undefined"!=typeof location&&"https:"===location.protocol,t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=t.port||("undefined"!=typeof location&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),"string"==typeof this.opts.query&&(this.opts.query=function(e){let t={},n=e.split("&");for(let e=0,r=n.length;e<r;e++){let r=n[e].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return t}(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,"function"==typeof addEventListener&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),"localhost"!==this.hostname&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=4,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new HS[e](n)}open(){let e;if(this.opts.rememberUpgrade&&XS.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))e="websocket";else{if(0===this.transports.length)return void this.setTimeoutFn((()=>{this.emitReserved("error","No transports available")}),0);e=this.transports[0]}this.readyState="opening";try{e=this.createTransport(e)}catch(e){return this.transports.shift(),void this.open()}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",(e=>this.onClose("transport close",e)))}probe(e){let t=this.createTransport(e),n=!1;XS.priorWebsocketSuccess=!1;const r=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",(e=>{if(!n)if("pong"===e.type&&"probe"===e.data){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;XS.priorWebsocketSuccess="websocket"===t.name,this.transport.pause((()=>{n||"closed"!==this.readyState&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())}))}else{const e=new Error("probe error");e.transport=t.name,this.emitReserved("upgradeError",e)}})))};function i(){n||(n=!0,u(),t.close(),t=null)}const s=e=>{const n=new Error("probe error: "+e);n.transport=t.name,i(),this.emitReserved("upgradeError",n)};function o(){s("transport closed")}function a(){s("socket closed")}function c(e){t&&e.name!==t.name&&i()}const u=()=>{t.removeListener("open",r),t.removeListener("error",s),t.removeListener("close",o),this.off("close",a),this.off("upgrading",c)};t.once("open",r),t.once("error",s),t.once("close",o),this.once("close",a),this.once("upgrading",c),-1!==this.upgrades.indexOf("webtransport")&&"webtransport"!==e?this.setTimeoutFn((()=>{n||t.open()}),200):t.open()}onOpen(){if(this.readyState="open",XS.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush(),"open"===this.readyState&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),this.resetPingTimeout(),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data)}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),"closed"!==this.readyState&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn((()=>{this.onClose("ping timeout")}),this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}flush(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let n=0;n<this.writeBuffer.length;n++){const r=this.writeBuffer[n].data;if(r&&(e+="string"==typeof(t=r)?function(e){let t=0,n=0;for(let r=0,i=e.length;r<i;r++)t=e.charCodeAt(r),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(r++,n+=4);return n}(t):Math.ceil(1.33*(t.byteLength||t.size))),n>0&&e>this.maxPayload)return this.writeBuffer.slice(0,n);e+=2}var t;return this.writeBuffer}write(e,t,n){return this.sendPacket("message",e,t,n),this}send(e,t,n){return this.sendPacket("message",e,t,n),this}sendPacket(e,t,n,r){if("function"==typeof t&&(r=t,t=void 0),"function"==typeof n&&(r=n,n=null),"closing"===this.readyState||"closed"===this.readyState)return;(n=n||{}).compress=!1!==n.compress;const i={type:e,data:t,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",(()=>{this.upgrading?n():e()})):this.upgrading?n():e()),this}onError(e){XS.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),"function"==typeof removeEventListener&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let n=0;const r=e.length;for(;n<r;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}XS.protocol=4;const JS="function"==typeof ArrayBuffer,ZS=e=>"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,eC=Object.prototype.toString,tC="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===eC.call(Blob),nC="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===eC.call(File);function rC(e){return JS&&(e instanceof ArrayBuffer||ZS(e))||tC&&e instanceof Blob||nC&&e instanceof File}function iC(e,t){if(!e||"object"!=typeof e)return!1;if(Array.isArray(e)){for(let t=0,n=e.length;t<n;t++)if(iC(e[t]))return!0;return!1}if(rC(e))return!0;if(e.toJSON&&"function"==typeof e.toJSON&&1===arguments.length)return iC(e.toJSON(),!0);for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&iC(e[t]))return!0;return!1}function sC(e){const t=[],n=e.data,r=e;return r.data=oC(n,t),r.attachments=t.length,{packet:r,buffers:t}}function oC(e,t){if(!e)return e;if(rC(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}if(Array.isArray(e)){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=oC(e[r],t);return n}if("object"==typeof e&&!(e instanceof Date)){const n={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=oC(e[r],t));return n}return e}function aC(e,t){return e.data=cC(e.data,t),delete e.attachments,e}function cC(e,t){if(!e)return e;if(e&&!0===e._placeholder){if("number"==typeof e.num&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n]=cC(e[n],t);else if("object"==typeof e)for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=cC(e[n],t));return e}const uC=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var lC;!function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"}(lC||(lC={}));function hC(e){return"[object Object]"===Object.prototype.toString.call(e)}class dC extends bS{constructor(e){super(),this.reviver=e}add(e){let t;if("string"==typeof e){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===lC.BINARY_EVENT;n||t.type===lC.BINARY_ACK?(t.type=n?lC.EVENT:lC.ACK,this.reconstructor=new fC(t),0===t.attachments&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else{if(!rC(e)&&!e.base64)throw new Error("Unknown type: "+e);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t))}}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(void 0===lC[n.type])throw new Error("unknown packet type "+n.type);if(n.type===lC.BINARY_EVENT||n.type===lC.BINARY_ACK){const r=t+1;for(;"-"!==e.charAt(++t)&&t!=e.length;);const i=e.substring(r,t);if(i!=Number(i)||"-"!==e.charAt(t))throw new Error("Illegal attachments");n.attachments=Number(i)}if("/"===e.charAt(t+1)){const r=t+1;for(;++t;){if(","===e.charAt(t))break;if(t===e.length)break}n.nsp=e.substring(r,t)}else n.nsp="/";const r=e.charAt(t+1);if(""!==r&&Number(r)==r){const r=t+1;for(;++t;){const n=e.charAt(t);if(null==n||Number(n)!=n){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(!dC.isPayloadValid(n.type,r))throw new Error("invalid payload");n.data=r}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch(e){return!1}}static isPayloadValid(e,t){switch(e){case lC.CONNECT:return hC(t);case lC.DISCONNECT:return void 0===t;case lC.CONNECT_ERROR:return"string"==typeof t||hC(t);case lC.EVENT:case lC.BINARY_EVENT:return Array.isArray(t)&&("number"==typeof t[0]||"string"==typeof t[0]&&-1===uC.indexOf(t[0]));case lC.ACK:case lC.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class fC{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const e=aC(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}var pC=Object.freeze({__proto__:null,protocol:5,get PacketType(){return lC},Encoder:class{constructor(e){this.replacer=e}encode(e){return e.type!==lC.EVENT&&e.type!==lC.ACK||!iC(e)?[this.encodeAsString(e)]:this.encodeAsBinary({type:e.type===lC.EVENT?lC.BINARY_EVENT:lC.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id})}encodeAsString(e){let t=""+e.type;return e.type!==lC.BINARY_EVENT&&e.type!==lC.BINARY_ACK||(t+=e.attachments+"-"),e.nsp&&"/"!==e.nsp&&(t+=e.nsp+","),null!=e.id&&(t+=e.id),null!=e.data&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=sC(e),n=this.encodeAsString(t.packet),r=t.buffers;return r.unshift(n),r}},Decoder:dC});function mC(e,t,n){return e.on(t,n),function(){e.off(t,n)}}const gC=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class yC extends bS{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[mC(e,"open",this.onopen.bind(this)),mC(e,"packet",this.onpacket.bind(this)),mC(e,"error",this.onerror.bind(this)),mC(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(gC.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const n={type:lC.EVENT,data:t,options:{}};if(n.options.compress=!1!==this.flags.compress,"function"==typeof t[t.length-1]){const e=this.ids++,r=t.pop();this._registerAckCallback(e,r),n.id=e}const r=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!r||!this.connected)||(this.connected?(this.notifyOutgoingListeners(n),this.packet(n)):this.sendBuffer.push(n)),this.flags={},this}_registerAckCallback(e,t){var n;const r=null!==(n=this.flags.timeout)&&void 0!==n?n:this._opts.ackTimeout;if(void 0===r)return void(this.acks[e]=t);const i=this.io.setTimeoutFn((()=>{delete this.acks[e];for(let t=0;t<this.sendBuffer.length;t++)this.sendBuffer[t].id===e&&this.sendBuffer.splice(t,1);t.call(this,new Error("operation has timed out"))}),r);this.acks[e]=(...e)=>{this.io.clearTimeoutFn(i),t.apply(this,[null,...e])}}emitWithAck(e,...t){const n=void 0!==this.flags.timeout||void 0!==this._opts.ackTimeout;return new Promise(((r,i)=>{t.push(((e,t)=>n?e?i(e):r(t):r(e))),this.emit(e,...t)}))}_addToQueue(e){let t;"function"==typeof e[e.length-1]&&(t=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push(((e,...r)=>{if(n!==this._queue[0])return;return null!==e?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(e)):(this._queue.shift(),t&&t(null,...r)),n.pending=!1,this._drainQueue()})),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||0===this._queue.length)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){"function"==typeof this.auth?this.auth((e=>{this._sendConnectPacket(e)})):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:lC.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case lC.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case lC.EVENT:case lC.BINARY_EVENT:this.onevent(e);break;case lC.ACK:case lC.BINARY_ACK:this.onack(e);break;case lC.DISCONNECT:this.ondisconnect();break;case lC.CONNECT_ERROR:this.destroy();const t=new Error(e.data.message);t.data=e.data.data,this.emitReserved("connect_error",t)}}onevent(e){const t=e.data||[];null!=e.id&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&"string"==typeof e[e.length-1]&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(...r){n||(n=!0,t.packet({type:lC.ACK,id:e,data:r}))}}onack(e){const t=this.acks[e.id];"function"==typeof t&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach((e=>this.emitEvent(e))),this.receiveBuffer=[],this.sendBuffer.forEach((e=>{this.notifyOutgoingListeners(e),this.packet(e)})),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach((e=>e())),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:lC.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function vC(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}vC.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=0==(1&Math.floor(10*t))?e-n:e+n}return 0|Math.min(e,this.max)},vC.prototype.reset=function(){this.attempts=0},vC.prototype.setMin=function(e){this.ms=e},vC.prototype.setMax=function(e){this.max=e},vC.prototype.setJitter=function(e){this.jitter=e};class wC extends bS{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&"object"==typeof e&&(t=e,e=void 0),(t=t||{}).path=t.path||"/socket.io",this.opts=t,SS(this,t),this.reconnection(!1!==t.reconnection),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor(null!==(n=t.randomizationFactor)&&void 0!==n?n:.5),this.backoff=new vC({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==t.timeout?2e4:t.timeout),this._readyState="closed",this.uri=e;const r=t.parser||pC;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=!1!==t.autoConnect,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return void 0===e?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return void 0===e?this._reconnectionDelay:(this._reconnectionDelay=e,null===(t=this.backoff)||void 0===t||t.setMin(e),this)}randomizationFactor(e){var t;return void 0===e?this._randomizationFactor:(this._randomizationFactor=e,null===(t=this.backoff)||void 0===t||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return void 0===e?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,null===(t=this.backoff)||void 0===t||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new XS(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const r=mC(t,"open",(function(){n.onopen(),e&&e()})),i=t=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",t),e?e(t):this.maybeReconnectOnOpen()},s=mC(t,"error",i);if(!1!==this._timeout){const e=this._timeout,n=this.setTimeoutFn((()=>{r(),i(new Error("timeout")),t.close()}),e);this.opts.autoUnref&&n.unref(),this.subs.push((()=>{this.clearTimeoutFn(n)}))}return this.subs.push(r),this.subs.push(s),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(mC(e,"ping",this.onping.bind(this)),mC(e,"data",this.ondata.bind(this)),mC(e,"error",this.onerror.bind(this)),mC(e,"close",this.onclose.bind(this)),mC(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(e){this.onclose("parse error",e)}}ondecoded(e){zS((()=>{this.emitReserved("packet",e)}),this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new yC(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const e of t){if(this.nsps[e].active)return}this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach((e=>e())),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn((()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),e.skipReconnect||e.open((t=>{t?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",t)):e.onreconnect()})))}),t);this.opts.autoUnref&&n.unref(),this.subs.push((()=>{this.clearTimeoutFn(n)}))}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const _C={};function bC(e,t){"object"==typeof e&&(t=e,e=void 0);const n=function(e,t="",n){let r=e;n=n||"undefined"!=typeof location&&location,null==e&&(e=n.protocol+"//"+n.host),"string"==typeof e&&("/"===e.charAt(0)&&(e="/"===e.charAt(1)?n.protocol+e:n.host+e),/^(https?|wss?):\/\//.test(e)||(e=void 0!==n?n.protocol+"//"+e:"https://"+e),r=YS(e)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const i=-1!==r.host.indexOf(":")?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+i+":"+r.port+t,r.href=r.protocol+"://"+i+(n&&n.port===r.port?"":":"+r.port),r}(e,(t=t||{}).path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=_C[i]&&s in _C[i].nsps;let a;return t.forceNew||t["force new connection"]||!1===t.multiplex||o?a=new wC(r,t):(_C[i]||(_C[i]=new wC(r,t)),a=_C[i]),n.query&&!t.query&&(t.query=n.queryKey),a.socket(n.path,t)}Object.assign(bC,{Manager:wC,Socket:yC,io:bC,connect:bC});const IC="https://mind-shared-reality-transfer-ad60b347b589.herokuapp.com/";function TC(t){let n;return{c(){n=N("p"),n.textContent="We were unable to match you to a group at this time. One or more members\n        of your group did not content to proceed. Please message us if you are\n        interested in trying to be matched to a group again, so we can put you\n        back into a waiting room. You can also try refreshing to be put into the\n        waiting room again. Otherwise, please return this study."},m(e,t){S(e,n,t)},p:e,d(e){e&&C(n)}}}function EC(e){let t,n,r,i,o,a,u,l,h,d,f,p,m,g,y,v,w,_,b,I,E,k,A,R,P,M,F,V,B,q,$,j,z,G=xk.groupSize+"",K=(e[5]/1e3).toFixed(1)+"",H=1==e[3]?"person":"people",W=1==e[3]?"has":"have";return{c(){t=N("h2"),n=x("Hello "),r=N("strong"),r.textContent=`${e[8]}`,i=x("!"),o=D(),a=N("p"),u=x("The desired group size of "),l=x(G),h=x(" people has been met! Please\n        "),d=N("strong"),d.textContent="press the button below before the timer runs out",f=x(" to\n        proceed to the experiment phase.\n        "),p=N("audio"),g=D(),y=N("label"),v=N("progress"),_=D(),b=N("div"),I=x(K),E=x("s"),k=D(),A=N("button"),A.textContent="PROCEED",R=D(),P=N("p"),M=x(e[3]),F=D(),V=x(H),B=D(),q=x(W),$=x("\n        consented to proceed to the experiment phase."),function(e,t){return c||(c=document.createElement("a")),c.href=t,e===c.href}(p.src,m="https://freesound.org/data/previews/536/536420_4921277-lq.mp3")||L(p,"src","https://freesound.org/data/previews/536/536420_4921277-lq.mp3"),v.value=w=e[5]/e[11]},m(s,c){S(s,t,c),T(t,n),T(t,r),T(t,i),S(s,o,c),S(s,a,c),T(a,u),T(a,l),T(a,h),T(a,d),T(a,f),T(a,p),e[15](p),S(s,g,c),S(s,y,c),T(y,v),S(s,_,c),S(s,b,c),T(b,I),T(b,E),S(s,k,c),S(s,A,c),S(s,R,c),S(s,P,c),T(P,M),T(P,F),T(P,V),T(P,B),T(P,q),T(P,$),j||(z=[O(A,"click",e[10]),O(A,"mount",e[9])],j=!0)},p(e,t){32&t&&w!==(w=e[5]/e[11])&&(v.value=w),32&t&&K!==(K=(e[5]/1e3).toFixed(1)+"")&&U(I,K),8&t&&U(M,e[3]),8&t&&H!==(H=1==e[3]?"person":"people")&&U(V,H),8&t&&W!==(W=1==e[3]?"has":"have")&&U(q,W)},d(n){n&&C(t),n&&C(o),n&&C(a),e[15](null),n&&C(g),n&&C(y),n&&C(_),n&&C(b),n&&C(k),n&&C(A),n&&C(R),n&&C(P),j=!1,s(z)}}}function kC(e){let t,n,r,i,s,o,a,c,u,l,h,d,f,p,m,g,y,v,w,_,b,I,E,k,A,R,O,P;return{c(){t=N("h2"),n=x("Hello "),r=N("strong"),r.textContent=`${e[8]}`,i=x("!"),s=D(),o=N("p"),o.textContent=`You will proceed to the experiment once there are ${xk.groupSize}\n        people present.`,a=D(),c=N("p"),u=x("There is currently a total of "),l=N("strong"),h=x(e[2]),d=x("\n        out of "),f=N("strong"),f.textContent=`${xk.groupSize}`,p=x(" required participants waiting\n        for the experiment to start."),m=D(),g=N("p"),g.textContent=`You will wait for a maximum of ${xk.waitLimit} minutes to be matched\n        to a group.`,y=D(),v=N("p"),w=x("You have been waiting for approx.\n        "),_=N("span"),b=N("strong"),I=x(e[0]),E=x(e[7]),k=D(),A=N("span"),R=N("strong"),O=x(e[6]),P=x("s"),L(_,"class","mins svelte-jd8qk8"),L(A,"class","secs svelte-jd8qk8")},m(e,C){S(e,t,C),T(t,n),T(t,r),T(t,i),S(e,s,C),S(e,o,C),S(e,a,C),S(e,c,C),T(c,u),T(c,l),T(l,h),T(c,d),T(c,f),T(c,p),S(e,m,C),S(e,g,C),S(e,y,C),S(e,v,C),T(v,w),T(v,_),T(_,b),T(b,I),T(v,E),T(v,k),T(v,A),T(A,R),T(R,O),T(v,P)},p(e,t){4&t&&U(h,e[2]),1&t&&U(I,e[0]),128&t&&U(E,e[7]),64&t&&U(O,e[6])},d(e){e&&C(t),e&&C(s),e&&C(o),e&&C(a),e&&C(c),e&&C(m),e&&C(g),e&&C(y),e&&C(v)}}}function SC(e){let t,n,r,i;const s=e[14].default,o=l(s,e,e[13],null);function a(e,t){return"waiting-room"===e[1]?kC:"consent-hallway"===e[1]?EC:"wait-limit-met"===e[1]?TC:void 0}let c=a(e),u=c&&c(e);return{c(){t=N("div"),o&&o.c(),n=D(),r=N("div"),u&&u.c(),L(r,"class","box svelte-jd8qk8"),L(t,"class","container svelte-jd8qk8")},m(e,s){S(e,t,s),o&&o.m(t,null),T(t,n),T(t,r),u&&u.m(r,null),i=!0},p(e,[t]){o&&o.p&&(!i||8192&t)&&f(o,s,e,e[13],i?d(s,e[13],t,null):p(e[13]),null),c===(c=a(e))&&u?u.p(e,t):(u&&u.d(1),u=c&&c(e),u&&(u.c(),u.m(r,null)))},i(e){i||(ge(o,e),i=!0)},o(e){ye(o,e),i=!1},d(e){e&&C(t),o&&o.d(e),u&&u.d()}}}function CC(e,t,n){let r,i,s,o;u(e,Vk,(e=>n(20,o=e)));let{$$slots:a={},$$scope:c}=t;const l=J(),h=bC(IC);h.on("connect",(()=>{console.log(`You connected to the waiting room state with socket id: ${h.id}`),console.log("WaitingRoom.svelte - socket",h),m(Vk,o.socketId=h.id,o)}));const d=o.platformId;let f="waiting-room",p="botCheck";h.emit("user from bot-check to waiting-room",d),h.emit("user change state",p,f);let g,y=1,v=0,w=0;o.nMatchAttempts&&(w=o.nMatchAttempts);h.on("user from botCheck to waiting-room",(e=>{console.log("client - user from botCheck to waiting-room - numWaiting",e),n(2,y=e)})),h.on("conditionAssignment",(e=>{console.log("client - cond assignment",e),m(Vk,o.condition=e,o)})),h.on("avatarAssignment",(e=>{console.log("client - avi assignment",e),m(Vk,o.avatar=e,o)}));h.on("user from waiting-room to consent-hallway",(e=>{console.log("client - user from waiting-room to consent-hallway - numConsentedUsers",e),n(3,v=e),p="waiting-room",n(1,f="consent-hallway"),h.emit("user change state",p,f)})),h.on("user from consent-hallway-pass to assignedRoom",(e=>{console.log("client - escort user to experiment"),console.log("client - assignedRoom",e),m(Vk,o.room=e,o),p="consent-hallway-pass",h.emit("user change state",p,"assignedRoom"),l("finished")}));let _=0,b=60*xk.waitLimit;X((()=>{const e=setInterval((()=>{n(12,_++,_),_!=b||xk.debugMode||n(1,f="wait-limit-met")}),1e3);return()=>{clearInterval(e)}}));let I=0,T=1e3*xk.consentHallwayLimit,E=window.performance.now();return function e(){requestAnimationFrame(e);const t=window.performance.now();n(5,I+=Math.min(t-E,T-I)),E=t}(),e.$$set=e=>{"$$scope"in e&&n(13,c=e.$$scope)},e.$$.update=()=>{4096&e.$$.dirty&&n(0,r=Math.floor(_/60)),1&e.$$.dirty&&n(7,i=r>1?"mins":"min"),4097&e.$$.dirty&&n(6,s=Math.floor(_-60*r))},[r,f,y,v,g,I,s,i,d,()=>{g.play()},()=>{p="consent-hallway",h.emit("user change state",p,"consent-hallway-pass"),h.emit("user from consent-hallway to consent-hallway-pass",d),m(Vk,o.nMatchAttempts=w,o)},T,_,c,a,function(e){ee[e?"unshift":"push"]((()=>{g=e,n(4,g)}))}]}console.log(IC);class AC extends ke{constructor(e){super(),Ee(this,e,CC,SC,a,{})}}function NC(e){const t=e-1;return t*t*t+1}function RC(e){return"[object Date]"===Object.prototype.toString.call(e)}function xC(e,t){if(e===t||e!=e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const n=t.map(((t,n)=>xC(e[n],t)));return e=>n.map((t=>t(e)))}if("object"===n){if(!e||!t)throw new Error("Object cannot be null");if(RC(e)&&RC(t)){e=e.getTime();const n=(t=t.getTime())-e;return t=>new Date(e+t*n)}const n=Object.keys(t),r={};return n.forEach((n=>{r[n]=xC(e[n],t[n])})),e=>{const t={};return n.forEach((n=>{t[n]=r[n](e)})),t}}if("number"===n){const n=t-e;return t=>e+t*n}throw new Error(`Cannot interpolate ${n} values`)}function DC(e,r={}){const i=Rk(e);let s,o=e;function a(a,c){if(null==e)return i.set(e=a),Promise.resolve();o=a;let u=s,l=!1,{delay:h=0,duration:d=400,easing:f=t,interpolate:p=xC}=n(n({},r),c);if(0===d)return u&&(u.abort(),u=null),i.set(e=o),Promise.resolve();const m=v()+h;let g;return s=I((t=>{if(t<m)return!0;l||(g=p(e,a),"function"==typeof d&&(d=d(e,a)),l=!0),u&&(u.abort(),u=null);const n=t-m;return n>d?(i.set(e=a),!1):(i.set(e=g(f(n/d))),!0)})),s.promise}return{set:a,update:(t,n)=>a(t(o,e),n),subscribe:i.subscribe}}function OC(e,t,n){const r=e.slice();return r[10]=t[n],r[12]=n,r}function PC(e){let t,n,r,i,s=e[10]+"";return{c(){t=N("li"),n=N("span"),r=x(s),i=D(),L(t,"class","num svelte-1xuo26m"),B(t,"transform","translateY(-"+e[0]+"px)")},m(e,s){S(e,t,s),T(t,n),T(n,r),T(t,i)},p(e,n){1&n&&B(t,"transform","translateY(-"+e[0]+"px)")},d(e){e&&C(t)}}}function LC(t){let n,r=t[1],i=[];for(let e=0;e<r.length;e+=1)i[e]=PC(OC(t,r,e));return{c(){n=N("ul");for(let e=0;e<i.length;e+=1)i[e].c();L(n,"class","svelte-1xuo26m")},m(e,t){S(e,n,t);for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(n,null)},p(e,[t]){if(3&t){let s;for(r=e[1],s=0;s<r.length;s+=1){const o=OC(e,r,s);i[s]?i[s].p(o,t):(i[s]=PC(o),i[s].c(),i[s].m(n,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=r.length}},i:e,o:e,d(e){e&&C(n),A(i,e)}}}function MC(e,t,n){let r,i,{countdown:s=0}=t;const o=J();let a=null;const c=[0,1,2,3,4,5,6,7,8,9].reverse();let l=DC(128*(9-Math.floor(s%60/10)),{duration:300}),h=DC(128*(9-Math.floor(s%60%10)),{duration:300});return u(e,h,(e=>n(0,i=e))),DC(0,{duration:500}),X((()=>{n(4,a=setInterval((()=>{n(3,s-=1)}),1e3))})),function(e){Y().$$.after_update.push(e)}((()=>{l.set(128*(9-Math.floor(r/10))),h.set(128*(9-Math.floor(r%10)))})),function(e){Y().$$.on_destroy.push(e)}((()=>{a&&clearInterval(a)})),e.$$set=e=>{"countdown"in e&&n(3,s=e.countdown)},e.$$.update=()=>{e.$$.dirty,8&e.$$.dirty&&(r=s%60),24&e.$$.dirty&&0===s&&(clearInterval(a),n(4,a=null),o("completed"))},[i,c,h,s,a]}class FC extends ke{constructor(e){super(),Ee(this,e,MC,LC,a,{countdown:3})}}function UC(t){let n,r,i,s,o,a;return o=new FC({props:{countdown:5}}),o.$on("completed",t[1]),{c(){n=N("div"),r=N("div"),i=N("h1"),i.textContent="You will begin the experiment in",s=D(),_e(o.$$.fragment),L(r,"class","inner svelte-ukdwiv"),L(n,"class","container svelte-ukdwiv")},m(e,t){S(e,n,t),T(n,r),T(r,i),T(r,s),be(o,r,null),a=!0},p:e,i(e){a||(ge(o.$$.fragment,e),a=!0)},o(e){ye(o.$$.fragment,e),a=!1},d(e){e&&C(n),Ie(o)}}}function VC(e){const t=J();return[t,()=>t("finished")]}class BC extends ke{constructor(e){super(),Ee(this,e,VC,UC,a,{})}}function qC(e,{delay:n=0,duration:r=400,easing:i=t}={}){const s=+getComputedStyle(e).opacity;return{delay:n,duration:r,easing:i,css:e=>"opacity: "+e*s}}function $C(e,{delay:t=0,duration:n=400,easing:r=NC,x:i=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(e),c=+a.opacity,u="none"===a.transform?"":a.transform,l=c*(1-o),[h,d]=g(i),[f,p]=g(s);return{delay:t,duration:n,easing:r,css:(e,t)=>`\n\t\t\ttransform: ${u} translate(${(1-e)*h}${d}, ${(1-e)*f}${p});\n\t\t\topacity: ${c-l*t}`}}function jC(e,t,n){const r=e.slice();return r[32]=t[n],r}function zC(e,t,n){const r=e.slice();return r[35]=t[n],r[37]=n,r}function GC(e,t,n){const r=e.slice();return r[4]=t[n],r}function KC(e){let t,n,r,i,s,o=e[4].message_string+"";return{c(){t=N("li"),n=x(o),i=D(),L(t,"class","other svelte-1gjkqwa")},m(e,r){S(e,t,r),T(t,n),S(e,i,r),s=!0},p(e,t){(!s||8&t[0])&&o!==(o=e[4].message_string+"")&&U(n,o)},i(e){s||(se((()=>{s&&(r||(r=we(t,qC,{},!0)),r.run(1))})),s=!0)},o(e){r||(r=we(t,qC,{},!1)),r.run(0),s=!1},d(e){e&&C(t),e&&r&&r.end(),e&&C(i)}}}function HC(e){let t,n,r,i,s,o=e[4].message_string+"";return{c(){t=N("li"),n=x(o),r=D(),L(t,"class","server svelte-1gjkqwa")},m(e,i){S(e,t,i),T(t,n),T(t,r),s=!0},p(e,t){(!s||8&t[0])&&o!==(o=e[4].message_string+"")&&U(n,o)},i(e){s||(se((()=>{s&&(i||(i=we(t,qC,{},!0)),i.run(1))})),s=!0)},o(e){i||(i=we(t,qC,{},!1)),i.run(0),s=!1},d(e){e&&C(t),e&&i&&i.end()}}}function WC(e){let t,n,r,i,s,o=e[4].message_string+"";return{c(){t=N("li"),n=x(o),i=D(),L(t,"class","svelte-1gjkqwa")},m(e,r){S(e,t,r),T(t,n),S(e,i,r),s=!0},p(e,t){(!s||8&t[0])&&o!==(o=e[4].message_string+"")&&U(n,o)},i(e){s||(se((()=>{s&&(r||(r=we(t,qC,{},!0)),r.run(1))})),s=!0)},o(e){r||(r=we(t,qC,{},!1)),r.run(0),s=!1},d(e){e&&C(t),e&&r&&r.end(),e&&C(i)}}}function QC(e){let t,n,r,i;const s=[WC,HC,KC],o=[];function a(e,t){return e[4].author===`${e[8]}`?0:"Server"===e[4].author?1:2}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=x("")},m(e,n){o[t].m(e,n),S(e,r,n),i=!0},p(e,i){let c=t;t=a(e),t===c?o[t].p(e,i):(pe(),ye(o[c],1,1,(()=>{o[c]=null})),me(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),ge(n,1),n.m(r.parentNode,r))},i(e){i||(ge(n),i=!0)},o(e){ye(n),i=!1},d(e){o[t].d(e),e&&C(r)}}}function YC(e){let t,n,r,i,s,o,a,c,u,l=e[6],h=[];for(let t=0;t<l.length;t+=1)h[t]=XC(zC(e,l,t));let d=e[0],f=[];for(let t=0;t<d.length;t+=1)f[t]=JC(jC(e,d,t));return{c(){t=N("div"),n=N("header");for(let e=0;e<h.length;e+=1)h[e].c();r=D(),i=N("div"),i.textContent="X",s=D();for(let e=0;e<f.length;e+=1)f[e].c();L(i,"id","closer-icon"),L(i,"class","svelte-1gjkqwa"),L(n,"class","svelte-1gjkqwa"),L(t,"id","emoji-cont"),L(t,"class","svelte-1gjkqwa")},m(o,l){S(o,t,l),T(t,n);for(let e=0;e<h.length;e+=1)h[e]&&h[e].m(n,null);T(n,r),T(n,i),T(t,s);for(let e=0;e<f.length;e+=1)f[e]&&f[e].m(t,null);a=!0,c||(u=O(i,"click",e[15]),c=!0)},p(e,i){if(96&i[0]){let t;for(l=e[6],t=0;t<l.length;t+=1){const s=zC(e,l,t);h[t]?h[t].p(s,i):(h[t]=XC(s),h[t].c(),h[t].m(n,r))}for(;t<h.length;t+=1)h[t].d(1);h.length=l.length}if(129&i[0]){let n;for(d=e[0],n=0;n<d.length;n+=1){const r=jC(e,d,n);f[n]?f[n].p(r,i):(f[n]=JC(r),f[n].c(),f[n].m(t,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=d.length}},i(e){a||(se((()=>{a&&(o||(o=we(t,$C,{y:-30},!0)),o.run(1))})),a=!0)},o(e){o||(o=we(t,$C,{y:-30},!1)),o.run(0),a=!1},d(e){e&&C(t),A(h,e),A(f,e),e&&o&&o.end(),c=!1,u()}}}function XC(t){let n,r,i,s,o,a=String.fromCodePoint(t[35])+"";return{c(){n=N("div"),r=x(a),i=D(),L(n,"data-id",t[37]),L(n,"class","svelte-1gjkqwa")},m(e,a){S(e,n,a),T(n,r),T(n,i),s||(o=O(n,"click",t[5]),s=!0)},p:e,d(e){e&&C(n),s=!1,o()}}}function JC(e){let t,n,r,i,s=e[32]+"";return{c(){t=N("span"),n=x(s),L(t,"class","svelte-1gjkqwa")},m(s,o){S(s,t,o),T(t,n),r||(i=O(t,"click",e[7]),r=!0)},p(e,t){1&t[0]&&s!==(s=e[32]+"")&&U(n,s)},d(e){e&&C(t),r=!1,i()}}}function ZC(e){let t,n,r,i,o,a,c,u,l,h,d,f,p,m,g,y,v,w,_,b,I,E,k,M,F,B=1==e[1]?"user":"users",q=e[3],$=[];for(let t=0;t<q.length;t+=1)$[t]=QC(GC(e,q,t));const j=e=>ye($[e],1,1,(()=>{$[e]=null}));let z=e[2]&&YC(e);return{c(){t=N("div"),n=N("div"),r=N("ul");for(let e=0;e<$.length;e+=1)$[e].c();i=D(),o=N("form"),a=N("div"),c=N("div"),c.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile svelte-1gjkqwa"><circle cx="12" cy="12" r="10" class="svelte-1gjkqwa"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2" class="svelte-1gjkqwa"></path><line x1="9" y1="9" x2="9.01" y2="9" class="svelte-1gjkqwa"></line><line x1="15" y1="9" x2="15.01" y2="9" class="svelte-1gjkqwa"></line></svg>',u=D(),z&&z.c(),l=D(),h=N("input"),d=D(),f=N("button"),f.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send svelte-1gjkqwa"><line x1="22" y1="2" x2="11" y2="13" class="svelte-1gjkqwa"></line><polygon points="22 2 15 22 11 13 2 9 22 2" class="svelte-1gjkqwa"></polygon></svg>',p=D(),m=N("p"),g=R("svg"),y=R("path"),v=R("circle"),w=D(),_=x(e[1]),b=D(),I=x(B),E=x(" here"),L(r,"id","messages"),L(r,"class","svelte-1gjkqwa"),L(n,"id","chatWindow"),L(n,"class","svelte-1gjkqwa"),L(c,"id","emoji-opener-icon"),L(c,"class","svelte-1gjkqwa"),L(a,"id","btn-emoji-icon-cont"),L(a,"class","svelte-1gjkqwa"),L(h,"id","m"),L(h,"autocomplete","off"),L(h,"placeholder",e[9]),L(h,"class","svelte-1gjkqwa"),L(f,"class","svelte-1gjkqwa"),L(o,"action",""),L(o,"class","svelte-1gjkqwa"),L(y,"d","M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"),L(y,"class","svelte-1gjkqwa"),L(v,"cx","12"),L(v,"cy","7"),L(v,"r","4"),L(v,"class","svelte-1gjkqwa"),L(g,"xmlns","http://www.w3.org/2000/svg"),L(g,"width","24"),L(g,"height","24"),L(g,"viewBox","0 0 24 24"),L(g,"fill","none"),L(g,"stroke","currentColor"),L(g,"stroke-width","2"),L(g,"stroke-linecap","round"),L(g,"stroke-linejoin","round"),L(g,"class","feather feather-user svelte-1gjkqwa"),L(m,"id","numUsers"),L(m,"class","svelte-1gjkqwa"),L(t,"class","main svelte-1gjkqwa")},m(s,C){S(s,t,C),T(t,n),T(n,r);for(let e=0;e<$.length;e+=1)$[e]&&$[e].m(r,null);T(t,i),T(t,o),T(o,a),T(a,c),T(o,u),z&&z.m(o,null),T(o,l),T(o,h),V(h,e[4].message_string),T(o,d),T(o,f),T(t,p),T(t,m),T(m,g),T(g,y),T(g,v),T(m,w),T(m,_),T(m,b),T(m,I),T(m,E),k=!0,M||(F=[O(c,"click",e[14]),O(h,"input",e[16]),O(f,"click",P(e[10]))],M=!0)},p(e,t){if(264&t[0]){let n;for(q=e[3],n=0;n<q.length;n+=1){const i=GC(e,q,n);$[n]?($[n].p(i,t),ge($[n],1)):($[n]=QC(i),$[n].c(),ge($[n],1),$[n].m(r,null))}for(pe(),n=q.length;n<$.length;n+=1)j(n);me()}e[2]?z?(z.p(e,t),4&t[0]&&ge(z,1)):(z=YC(e),z.c(),ge(z,1),z.m(o,l)):z&&(pe(),ye(z,1,1,(()=>{z=null})),me()),16&t[0]&&h.value!==e[4].message_string&&V(h,e[4].message_string),(!k||2&t[0])&&U(_,e[1]),(!k||2&t[0])&&B!==(B=1==e[1]?"user":"users")&&U(I,B)},i(e){if(!k){for(let e=0;e<q.length;e+=1)ge($[e]);ge(z),k=!0}},o(e){$=$.filter(Boolean);for(let e=0;e<$.length;e+=1)ye($[e]);ye(z),k=!1},d(e){e&&C(t),A($,e),z&&z.d(),M=!1,s(F)}}}function eA(e,t,n){let r,i,s;u(e,Vk,(e=>n(17,s=e)));let o=0,a=[{type:"faces",minVal:128512,maxVal:128580},{type:"faces2",minVal:129296,maxVal:129327}],c=0,l=[];let h=!1;console.log("params",Uk),console.log(`SOCKET_ENDPOINT ${IC}`);const d=bC(IC);d.on("connect",(()=>{console.log(`You connected to experiment state with id: ${d.id}`),console.log("Experiment.svelte - socket",d),m(Vk,s.socketId=d.id,s)}));const f=s.room;console.log("client -- room",f);const p=String.fromCodePoint(s.avatar);console.log("client -- avatar",p);const g=128049==s.avatar?String.fromCodePoint(128054):String.fromCodePoint(128049);console.log("client -- partnerAvatar",g),d.emit("joinRoom",{avatar:p,room:f}),d.on("roomUsers",(e=>{console.log("client - socket on roomUsers numUsers",e),n(1,o=e)})),J();const y="Type your message here...";let v=[{author:"Server",absolute_timestamp:Lk,message_string:`Server: You have joined the chat as ${p}`},{author:"Server",absolute_timestamp:Lk,message_string:`Server: Your partner ${g} has joined the chat.`}];console.log("greeting messages",v);let w={author:`${p}`,absolute_timestamp:Lk,message_string:""};d.on("message",(e=>{console.log("client - socket on message",e),n(3,v=v.concat(e)),_()})),d.on("user joined",((e,t)=>{console.log("client - user joined numUsers",t),e.message_string&&n(3,v=v.concat(e)),n(1,o=t),_()})),d.on("user left",((e,t)=>{console.log("client - on user left numUsers",t),n(3,v=v.concat(e)),n(1,o=t),_()}));const _=()=>{const e=document.getElementById("chatWindow");setTimeout((()=>{e.scrollTop=e.scrollHeight}),0)};return e.$$.update=()=>{if(2048&e.$$.dirty[0]&&n(13,r=a[c].minVal),2048&e.$$.dirty[0]&&n(12,i=a[c].maxVal),12289&e.$$.dirty[0])for(let e=r;e<=i;e++)n(0,l=[...l,String.fromCodePoint(e)])},[l,o,h,v,w,e=>{n(11,c=Number(e.target.dataset.id)),n(0,l=[])},[128512,129313],e=>{n(4,w.message_string+=e.target.textContent,w)},p,y,()=>{if(n(4,w.message_string=w.message_string.trim(),w),""==w.message_string)return;let e={author:`${p}`,absolute_timestamp:Lk,message_string:`${p}: ${w.message_string}`};n(3,v=v.concat(e)),console.log("updated messages list",v),d.emit("message",f,e),Ok.collection("mind-prod-rooms").doc(`${f}`).collection("messages").add(e).then((()=>console.log("successful"))).catch((e=>console.error(e))),_(),n(4,w.message_string="",w),n(2,h=!1)},c,i,r,()=>n(2,h=!h),()=>n(2,h=!1),function(){w.message_string=this.value,n(4,w)}]}class tA extends ke{constructor(e){super(),Ee(this,e,eA,ZC,a,{},null,[-1,-1])}}function nA(e,t,n){const r=e.slice();return r[25]=t[n],r}function rA(t){let n,r,i=t[25]+"";return{c(){n=N("option"),r=x(i),n.__value=t[25],n.value=n.__value},m(e,t){S(e,n,t),T(n,r)},p:e,d(e){e&&C(n)}}}function iA(t){let n,r,i,o,a,c,u,l,h,d,f,p,m,g,y,v,w,_,b,I,E,k,R,F,U,B,$,j,z,G,K,H,W,Q,Y,X,J,Z,ee,te,ne,re,ie,oe,ae,ce,ue,le,he,de,fe,pe,me,ge,ye,ve,we,_e,be,Ie,Te,Ee,ke,Se,Ce,Ae,Ne,Re,xe,De,Oe,Pe,Le,Me,Fe,Ue,Ve,Be,qe,$e,je,ze,Ge,Ke,He,We,Qe,Ye,Xe,Je,Ze,et,tt,nt,rt,it,st,ot,at,ct,ut,lt,ht,dt,ft,pt,mt,gt,yt,vt,wt,_t,bt,It,Tt,Et,kt=t[8],St=[];for(let e=0;e<kt.length;e+=1)St[e]=rA(nA(t,kt,e));return _t=M(t[12][0]),bt=M(t[12][1]),It=M(t[12][2]),{c(){n=N("div"),r=N("div"),i=N("div"),o=N("p"),o.textContent="Thank You For Participating!",a=D(),c=N("p"),u=N("strong"),u.textContent=`You will earn a total of $${xk.basePayment}/hr for your\n          completion of this study.`,l=D(),h=N("br"),d=N("br"),f=x("\n        Upon completing this page, you will fill out a series of questions about\n        the show and your group members."),p=D(),m=N("p"),m.innerHTML="<em>All questions are optional</em>",g=D(),y=N("form"),v=N("div"),w=N("div"),w.innerHTML='<label class="label">Age</label>',_=D(),b=N("div"),I=N("div"),E=N("p"),k=N("input"),R=D(),F=N("div"),U=N("div"),U.innerHTML='<label class="label">Gender</label>',B=D(),$=N("div"),j=N("div"),z=N("div"),G=N("label"),K=N("input"),H=x("\n                  Male"),W=D(),Q=N("label"),Y=N("input"),X=x("\n                  Female"),J=D(),Z=N("label"),ee=N("input"),te=x("\n                  Other"),ne=D(),re=N("div"),ie=N("div"),ie.innerHTML='<label class="label">Handedness</label>',oe=D(),ae=N("div"),ce=N("div"),ue=N("div"),le=N("label"),he=N("input"),de=x("\n                  Left Handed"),fe=D(),pe=N("label"),me=N("input"),ge=x("\n                  Right Handed"),ye=D(),ve=N("div"),we=N("div"),we.innerHTML='<label class="label">Ethnicity</label>',_e=D(),be=N("div"),Ie=N("div"),Te=N("div"),Ee=N("label"),ke=N("input"),Se=x("\n                  Hispanic"),Ce=D(),Ae=N("label"),Ne=N("input"),Re=x("\n                  Not Hispanic"),xe=D(),De=N("div"),Oe=N("div"),Oe.innerHTML='<label class="label">Race</label>',Pe=D(),Le=N("div"),Me=N("div"),Fe=N("div"),Ue=N("div"),Ve=N("select");for(let e=0;e<St.length;e+=1)St[e].c();Be=D(),qe=N("p"),qe.textContent="Cmd/Ctrl+Click to select multiple",$e=D(),je=N("div"),ze=N("div"),ze.innerHTML='<label class="label">Native Language</label>',Ge=D(),Ke=N("div"),He=N("div"),We=N("p"),Qe=N("input"),Ye=D(),Xe=N("div"),Je=N("div"),Je.innerHTML='<label class="label">Birth Location</label>',Ze=D(),et=N("div"),tt=N("div"),nt=N("p"),rt=N("input"),it=D(),st=N("div"),ot=N("div"),ot.innerHTML='<label class="label">Feedback</label>',at=D(),ct=N("div"),ut=N("div"),lt=N("div"),ht=N("textarea"),dt=D(),ft=N("div"),pt=N("div"),mt=D(),gt=N("div"),yt=N("div"),vt=N("div"),wt=N("button"),wt.textContent="Continue to last series of questionnaires",L(o,"class","title is-3 has-text-centered is-spaced"),L(c,"class","subtitle is-5 has-text-centered"),L(m,"class","is-6 has-text-centered"),L(w,"class","field-label is-normal"),L(k,"class","input age-input svelte-mxensd"),L(k,"type","text"),L(E,"class","control"),L(I,"class","field"),L(b,"class","field-body is-narrow"),L(v,"class","field is-horizontal"),L(U,"class","field-label"),L(K,"type","radio"),K.__value="male",K.value=K.__value,L(G,"class","radio"),L(Y,"type","radio"),Y.__value="female",Y.value=Y.__value,L(Q,"class","radio"),L(ee,"type","radio"),ee.__value="other",ee.value=ee.__value,L(Z,"class","radio"),L(z,"class","control"),L(j,"class","field is-narrow"),L($,"class","field-body"),L(F,"class","field is-horizontal"),L(ie,"class","field-label"),L(he,"type","radio"),he.__value="left",he.value=he.__value,L(le,"class","radio"),L(me,"type","radio"),me.__value="right",me.value=me.__value,L(pe,"class","radio"),L(ue,"class","control"),L(ce,"class","field is-narrow"),L(ae,"class","field-body"),L(re,"class","field is-horizontal"),L(we,"class","field-label"),L(ke,"type","radio"),ke.__value="hispanic",ke.value=ke.__value,L(Ee,"class","radio"),L(Ne,"type","radio"),Ne.__value="not_hispanic",Ne.value=Ne.__value,L(Ae,"class","radio"),L(Te,"class","control"),L(Ie,"class","field is-narrow"),L(be,"class","field-body"),L(ve,"class","field is-horizontal"),L(Oe,"class","field-label is-normal"),Ve.multiple=!0,void 0===t[4]&&se((()=>t[19].call(Ve))),L(Ue,"class","select is-multiple"),L(Fe,"class","control"),L(qe,"class","help"),L(Me,"class","field"),L(Le,"class","field-body is-narrow"),L(De,"class","field is-horizontal"),L(ze,"class","field-label is-normal"),L(Qe,"class","input lang-input svelte-mxensd"),L(Qe,"type","text"),L(We,"class","control"),L(He,"class","field"),L(Ke,"class","field-body is-narrow"),L(je,"class","field is-horizontal"),L(Je,"class","field-label is-normal"),L(rt,"class","input lang-input svelte-mxensd"),L(rt,"type","text"),L(rt,"placeholder","City, State, Country (like in visa/passport)"),L(nt,"class","control"),L(tt,"class","field"),L(et,"class","field-body is-narrow"),L(Xe,"class","field is-horizontal"),L(ot,"class","field-label is-normal"),L(ht,"class","textarea textarea-feedback svelte-mxensd"),L(ht,"placeholder","Thoughts or suggestions about this study"),L(lt,"class","control"),L(ut,"class","field"),L(ct,"class","field-body"),L(st,"class","field is-horizontal"),L(pt,"class","field-label"),L(wt,"class","button is-success is-large"),L(vt,"class","control"),L(yt,"class","field"),L(gt,"class","field-body"),L(ft,"class","field is-horizontal"),L(y,"name","debrief"),L(y,"id","form"),L(i,"class","column is-three-quarters"),L(r,"class","columns is-centered"),L(n,"class","container"),_t.p(ke,Ne),bt.p(he,me),It.p(K,Y,ee)},m(e,s){S(e,n,s),T(n,r),T(r,i),T(i,o),T(i,a),T(i,c),T(c,u),T(c,l),T(c,h),T(c,d),T(c,f),T(i,p),T(i,m),T(i,g),T(i,y),T(y,v),T(v,w),T(v,_),T(v,b),T(b,I),T(I,E),T(E,k),V(k,t[0]),T(y,R),T(y,F),T(F,U),T(F,B),T(F,$),T($,j),T(j,z),T(z,G),T(G,K),K.checked=K.__value===t[2],T(G,H),T(z,W),T(z,Q),T(Q,Y),Y.checked=Y.__value===t[2],T(Q,X),T(z,J),T(z,Z),T(Z,ee),ee.checked=ee.__value===t[2],T(Z,te),T(y,ne),T(y,re),T(re,ie),T(re,oe),T(re,ae),T(ae,ce),T(ce,ue),T(ue,le),T(le,he),he.checked=he.__value===t[7],T(le,de),T(ue,fe),T(ue,pe),T(pe,me),me.checked=me.__value===t[7],T(pe,ge),T(y,ye),T(y,ve),T(ve,we),T(ve,_e),T(ve,be),T(be,Ie),T(Ie,Te),T(Te,Ee),T(Ee,ke),ke.checked=ke.__value===t[3],T(Ee,Se),T(Te,Ce),T(Te,Ae),T(Ae,Ne),Ne.checked=Ne.__value===t[3],T(Ae,Re),T(y,xe),T(y,De),T(De,Oe),T(De,Pe),T(De,Le),T(Le,Me),T(Me,Fe),T(Fe,Ue),T(Ue,Ve);for(let e=0;e<St.length;e+=1)St[e]&&St[e].m(Ve,null);q(Ve,t[4]),T(Me,Be),T(Me,qe),T(y,$e),T(y,je),T(je,ze),T(je,Ge),T(je,Ke),T(Ke,He),T(He,We),T(We,Qe),V(Qe,t[5]),T(y,Ye),T(y,Xe),T(Xe,Je),T(Xe,Ze),T(Xe,et),T(et,tt),T(tt,nt),T(nt,rt),V(rt,t[6]),T(y,it),T(y,st),T(st,ot),T(st,at),T(st,ct),T(ct,ut),T(ut,lt),T(lt,ht),V(ht,t[1]),T(y,dt),T(y,ft),T(ft,pt),T(ft,mt),T(ft,gt),T(gt,yt),T(yt,vt),T(vt,wt),Tt||(Et=[O(k,"input",t[10]),O(K,"change",t[11]),O(Y,"change",t[13]),O(ee,"change",t[14]),O(he,"change",t[15]),O(me,"change",t[16]),O(ke,"change",t[17]),O(Ne,"change",t[18]),O(Ve,"change",t[19]),O(Qe,"input",t[20]),O(rt,"input",t[21]),O(ht,"input",t[22]),O(wt,"click",P(t[9]))],Tt=!0)},p(e,[t]){if(1&t&&k.value!==e[0]&&V(k,e[0]),4&t&&(K.checked=K.__value===e[2]),4&t&&(Y.checked=Y.__value===e[2]),4&t&&(ee.checked=ee.__value===e[2]),128&t&&(he.checked=he.__value===e[7]),128&t&&(me.checked=me.__value===e[7]),8&t&&(ke.checked=ke.__value===e[3]),8&t&&(Ne.checked=Ne.__value===e[3]),256&t){let n;for(kt=e[8],n=0;n<kt.length;n+=1){const r=nA(e,kt,n);St[n]?St[n].p(r,t):(St[n]=rA(r),St[n].c(),St[n].m(Ve,null))}for(;n<St.length;n+=1)St[n].d(1);St.length=kt.length}272&t&&q(Ve,e[4]),32&t&&Qe.value!==e[5]&&V(Qe,e[5]),64&t&&rt.value!==e[6]&&V(rt,e[6]),2&t&&V(ht,e[1])},i:e,o:e,d(e){e&&C(n),A(St,e),_t.r(),bt.r(),It.r(),Tt=!1,s(Et)}}}function sA(e,t,n){let r;u(e,Vk,(e=>n(23,r=e)));let i="",s="",o="",a="",c=[];const l=["Asian / Asian-American","Black / African-American","Native-American / Alaskan-Native","Pacific-Islander / Native-Hawaiian","White / Caucasian","Other / Unknown"];let h="",d="",f="";const p=J();return[i,s,o,a,c,h,d,f,l,async()=>{m(Vk,r.age=i,r),m(Vk,r.sex=o,r),m(Vk,r.ethnicity=a,r),m(Vk,r.race=c,r),m(Vk,r.nativeLang=h,r),m(Vk,r.birth=d,r),m(Vk,r.handed=f,r),m(Vk,r.feedback=s,r),await Bk(r),p("finished")},function(){i=this.value,n(0,i)},function(){o=this.__value,n(2,o)},[[],[],[]],function(){o=this.__value,n(2,o)},function(){o=this.__value,n(2,o)},function(){f=this.__value,n(7,f)},function(){f=this.__value,n(7,f)},function(){a=this.__value,n(3,a)},function(){a=this.__value,n(3,a)},function(){var e;e=this,c=[].map.call(e.querySelectorAll(":checked"),(e=>e.__value)),n(4,c),n(8,l)},function(){h=this.value,n(5,h)},function(){d=this.value,n(6,d)},function(){s=this.value,n(1,s)}]}class oA extends ke{constructor(e){super(),Ee(this,e,sA,iA,a,{})}}function aA(e){let t,n,r,i,s,o;const a=e[1].default,c=l(a,e,e[0],null);return{c(){t=N("div"),n=N("div"),r=D(),i=N("div"),s=N("h1"),c&&c.c(),L(n,"class","loader is-loading svelte-10ue5nm"),L(s,"class","is-size-3"),L(i,"class","loading-text svelte-10ue5nm"),L(t,"class","loader-wrapper svelte-10ue5nm")},m(e,a){S(e,t,a),T(t,n),T(t,r),T(t,i),T(i,s),c&&c.m(s,null),o=!0},p(e,[t]){c&&c.p&&(!o||1&t)&&f(c,a,e,e[0],o?d(a,e[0],t,null):p(e[0]),null)},i(e){o||(ge(c,e),o=!0)},o(e){ye(c,e),o=!1},d(e){e&&C(t),c&&c.d(e)}}}function cA(e,t,n){let{$$slots:r={},$$scope:i}=t;return e.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,r]}class uA extends ke{constructor(e){super(),Ee(this,e,cA,aA,a,{})}}function lA(t){let n,r,i;return{c(){n=N("div"),r=D(),i=N("div"),i.innerHTML='If you have questions about this study please message us or <a href="mailto:wasita.mahaphanit.gr@dartmouth.edu">email us</a>',L(n,"class","has-text-white banner is-flex is-justify-content-space-around svelte-drqe98"),$(n,"has-background-danger",!1),$(n,"has-background-grey-light",!0)},m(e,t){S(e,n,t),T(n,r),T(n,i)},p(e,[t]){},i:e,o:e,d(e){e&&C(n)}}}function hA(e){const t=J();return[t,()=>t("resetTestWorker")]}class dA extends ke{constructor(e){super(),Ee(this,e,hA,lA,a,{})}}function fA(t){let n,r,i,s,o,a,c,u;return{c(){n=N("div"),r=N("div"),i=N("div"),s=N("div"),o=N("div"),o.innerHTML='<h1 class="title is-2 custom-card-title svelte-1np7h63">HIT Preview</h1> \n          <hr class="no-space-hr svelte-1np7h63"/>',a=D(),c=N("div"),u=N("div"),L(o,"class","has-text-centered"),L(u,"class","content"),L(c,"class","card-content"),L(s,"class","card"),L(i,"class","column is-three-fifths "),L(r,"class","columns is-centered"),L(n,"class","container")},m(e,l){S(e,n,l),T(n,r),T(r,i),T(i,s),T(s,o),T(s,a),T(s,c),T(c,u),u.innerHTML=t[0]},p:e,i:e,o:e,d(e){e&&C(n)}}}function pA(e){return[`In this HIT you will be asked to listen to multiple 2-minute recordings and identify complete thoughts within each recording. You will earn a <strong>base payment of $${xk.basePayment}0</strong> for completing the instructions and comprehension quiz, irrespective of whether you pass the quiz. Then you will be given the choice to identify thoughts in additional recordings to earn <strong>bonus payments of $${xk.bonusAmount} per additional recording</strong> you complete. If you would like to participate, please accept this HIT!<br/><br/>`]}class mA extends ke{constructor(e){super(),Ee(this,e,pA,fA,a,{})}}function gA(t){let n;return{c(){n=N("div"),n.innerHTML='<div class="columns is-centered"><div class="column is-three-fifths"><div class="card"><div class="has-text-centered"><h1 class="title is-2 custom-card-title">Please Return This Study</h1> \n          <hr class="no-space-hr"/></div> \n        <div class="card-content"><div class="content has-text-centered"><p>You have chosen not to consent OR you are unable to pass our bot\n              check, and therefore can not complete this study.</p></div></div></div></div></div>',L(n,"class","container")},m(e,t){S(e,n,t)},p:e,i:e,o:e,d(e){e&&C(n)}}}class yA extends ke{constructor(e){super(),Ee(this,e,null,gA,a,{})}}function vA(t){let n,r,i,s,o,a,c,u,l;return{c(){n=N("div"),r=N("div"),i=N("div"),s=N("div"),o=N("div"),o.innerHTML='<h1 class="title is-2 custom-card-title">Please Return This Study</h1> \n          <hr class="no-space-hr"/>',a=D(),c=N("div"),u=N("div"),l=N("p"),l.textContent=`We were unable to find the required number of ${xk.groupSize}\n              participants at this time.`,L(o,"class","has-text-centered"),L(u,"class","content has-text-centered"),L(c,"class","card-content"),L(s,"class","card"),L(i,"class","column is-three-fifths "),L(r,"class","columns is-centered"),L(n,"class","container")},m(e,t){S(e,n,t),T(n,r),T(r,i),T(i,s),T(s,o),T(s,a),T(s,c),T(c,u),T(u,l)},p:e,i:e,o:e,d(e){e&&C(n)}}}class wA extends ke{constructor(e){super(),Ee(this,e,null,vA,a,{})}}function _A(t){let n,r;return n=new wA({}),{c(){_e(n.$$.fragment)},m(e,t){be(n,e,t),r=!0},p:e,i(e){r||(ge(n.$$.fragment,e),r=!0)},o(e){ye(n.$$.fragment,e),r=!1},d(e){Ie(n,e)}}}function bA(t){let n,r;return n=new yA({}),{c(){_e(n.$$.fragment)},m(e,t){be(n,e,t),r=!0},p:e,i(e){r||(ge(n.$$.fragment,e),r=!0)},o(e){ye(n.$$.fragment,e),r=!1},d(e){Ie(n,e)}}}function IA(t){let n,r;return n=new oA({}),n.$on("finished",t[4]),{c(){_e(n.$$.fragment)},m(e,t){be(n,e,t),r=!0},p:e,i(e){r||(ge(n.$$.fragment,e),r=!0)},o(e){ye(n.$$.fragment,e),r=!1},d(e){Ie(n,e)}}}function TA(t){let n,r;return n=new tA({}),n.$on("finished",t[13]),{c(){_e(n.$$.fragment)},m(e,t){be(n,e,t),r=!0},p:e,i(e){r||(ge(n.$$.fragment,e),r=!0)},o(e){ye(n.$$.fragment,e),r=!1},d(e){Ie(n,e)}}}function EA(t){let n,r;return n=new BC({}),n.$on("finished",t[12]),{c(){_e(n.$$.fragment)},m(e,t){be(n,e,t),r=!0},p:e,i(e){r||(ge(n.$$.fragment,e),r=!0)},o(e){ye(n.$$.fragment,e),r=!1},d(e){Ie(n,e)}}}function kA(t){let n,r;return n=new zk({}),n.$on("finished",t[11]),{c(){_e(n.$$.fragment)},m(e,t){be(n,e,t),r=!0},p:e,i(e){r||(ge(n.$$.fragment,e),r=!0)},o(e){ye(n.$$.fragment,e),r=!1},d(e){Ie(n,e)}}}function SA(t){let n,r;return n=new AC({}),n.$on("finished",t[9]),n.$on("failed",t[10]),{c(){_e(n.$$.fragment)},m(e,t){be(n,e,t),r=!0},p:e,i(e){r||(ge(n.$$.fragment,e),r=!0)},o(e){ye(n.$$.fragment,e),r=!1},d(e){Ie(n,e)}}}function CA(t){let n,r;return n=new Zk({}),n.$on("finished",t[7]),n.$on("failed",t[8]),{c(){_e(n.$$.fragment)},m(e,t){be(n,e,t),r=!0},p:e,i(e){r||(ge(n.$$.fragment,e),r=!0)},o(e){ye(n.$$.fragment,e),r=!1},d(e){Ie(n,e)}}}function AA(t){let n,r;return n=new Hk({}),n.$on("consent",t[5]),n.$on("reject",t[6]),{c(){_e(n.$$.fragment)},m(e,t){be(n,e,t),r=!0},p:e,i(e){r||(ge(n.$$.fragment,e),r=!0)},o(e){ye(n.$$.fragment,e),r=!1},d(e){Ie(n,e)}}}function NA(t){let n,r,i;return{c(){n=N("h1"),n.textContent="Thank You for Participating!",r=D(),i=N("p"),i.innerHTML="It appears that you have disconnected from the task. Please reach out to\n      the experimenter at <code>wasita.gr@dartmouth.edu</code> if you would like\n      to try to participate again.",L(n,"class","title")},m(e,t){S(e,n,t),S(e,r,t),S(e,i,t)},p:e,i:e,o:e,d(e){e&&C(n),e&&C(r),e&&C(i)}}}function RA(t){let n,r,i;return{c(){n=N("h1"),n.textContent="Thank You for Participating!",r=D(),i=N("p"),i.textContent="This HIT is no longer available because you have already completed it.",L(n,"class","title")},m(e,t){S(e,n,t),S(e,r,t),S(e,i,t)},p:e,i:e,o:e,d(e){e&&C(n),e&&C(r),e&&C(i)}}}function xA(e){let t,n;return t=new uA({props:{$$slots:{default:[PA]},$$scope:{ctx:e}}}),{c(){_e(t.$$.fragment)},m(e,r){be(t,e,r),n=!0},p(e,n){const r={};262144&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(ge(t.$$.fragment,e),n=!0)},o(e){ye(t.$$.fragment,e),n=!1},d(e){Ie(t,e)}}}function DA(t){let n,r;return n=new mA({}),{c(){_e(n.$$.fragment)},m(e,t){be(n,e,t),r=!0},p:e,i(e){r||(ge(n.$$.fragment,e),r=!0)},o(e){ye(n.$$.fragment,e),r=!1},d(e){Ie(n,e)}}}function OA(t){let n,r,i;return{c(){n=N("h1"),n.textContent="Oops",r=D(),i=N("p"),i.innerHTML="It seems you are accessing this app without an mturk referral. If you\n      meant to test it locally, make sure you launch it with\n      <code>npm run dev</code>\n      .",L(n,"class","title")},m(e,t){S(e,n,t),S(e,r,t),S(e,i,t)},p:e,i:e,o:e,d(e){e&&C(n),e&&C(r),e&&C(i)}}}function PA(e){let t;return{c(){t=x("Loading...")},m(e,n){S(e,t,n)},d(e){e&&C(t)}}}function LA(e){let t,n,r,i,s,o;const a=[OA,DA,xA,RA,NA,AA,CA,SA,kA,EA,TA,IA,bA,_A],c=[];function u(e,t){return"non-mturk"===e[0]?0:"mturk-preview"===e[0]?1:e[1].currentState?"complete"===e[1].currentState?3:"disconnected"===e[1].currentState?4:"consent"===e[1].currentState?5:"botCheck"===e[1].currentState?6:"waiting-room"===e[1].currentState?7:"instructions"===e[1].currentState?8:"countdown-transition"===e[1].currentState?9:"experiment"===e[1].currentState?10:"debrief"===e[1].currentState?11:"noConsent"===e[1].currentState?12:"matchFail"===e[1].currentState?13:-1:2}return~(n=u(e))&&(r=c[n]=a[n](e)),s=new dA({}),s.$on("resetTestWorker",e[3]),s.$on("finished",e[14]),{c(){t=N("section"),r&&r.c(),i=D(),_e(s.$$.fragment),L(t,"class","section")},m(e,r){S(e,t,r),~n&&c[n].m(t,null),S(e,i,r),be(s,e,r),o=!0},p(e,[i]){let s=n;n=u(e),n===s?~n&&c[n].p(e,i):(r&&(pe(),ye(c[s],1,1,(()=>{c[s]=null})),me()),~n?(r=c[n],r?r.p(e,i):(r=c[n]=a[n](e),r.c()),ge(r,1),r.m(t,null)):r=null)},i(e){o||(ge(r),ge(s.$$.fragment,e),o=!0)},o(e){ye(r),ye(s.$$.fragment,e),o=!1},d(e){e&&C(t),~n&&c[n].d(),e&&C(i),Ie(s,e)}}}function MA(e,t,n){let r,i;u(e,Vk,(e=>n(1,r=e)));let s=!1;console.log("App.svelte params",Uk),"ASSIGNMENT_ID_NOT_AVAILABLE"===Uk.assignmentId?i="mturk-preview":Uk.platformId&&"ASSIGNMENT_ID_NOT_AVAILABLE"!==Uk.assignmentId&&Uk.hitId?(s=!0,i="mturk"):i="non-mturk";const o=async e=>{const t=r.currentState;m(Vk,r.currentState=e,r);try{m(Vk,r[`${t}_end`]=Lk,r),m(Vk,r[`${r.currentState}_start`]=Lk,r),await Bk(r)}catch(e){console.error(e)}};X((async()=>{if(s)try{Pk.onAuthStateChanged((async e=>{if(e){console.log("user already authenticated...");try{let e="mind-prod-participants";const t=Ok.collection(`${e}`).doc(Uk.platformId);(await t.get()).exists?(console.log("previous document found... loading state ..."),t.onSnapshot((e=>{Vk.set(e.data())}))):(console.log("no previous document found... creating new..."),await qk(),t.onSnapshot((e=>{Vk.set(e.data())})))}catch(e){console.error(e)}}else try{await Pk.signInWithEmailAndPassword(`${Uk.platformId}@experiment.com`,Uk.platformId),console.log("user found... signing in with credentials")}catch(e){"auth/user-not-found"===e.code?(console.log("no user found... creating new credentials"),await Pk.createUserWithEmailAndPassword(`${Uk.platformId}@experiment.com`,Uk.platformId)):console.error(e)}}))}catch(e){console.error(e)}}));return[i,r,o,async e=>{"test-worker"===Uk.platformId?(await qk(),console.log(`Reset test-worker. New state is ${r.currentState}`)):console.log("Reset user requested but app is not in dev mode")},async()=>{let e="https://dartmouth.co1.qualtrics.com/jfe/form/SV_5bEgTi4V2vqy7To?PROLIFIC_PID="+r.platformId;m(Vk,r.completionURL=e,r),await Bk(r),console.log("completionURL",e),location.replace(e)},()=>o("botCheck"),()=>o("noConsent"),()=>o("instructions"),()=>o("debrief"),()=>o("countdown-transition"),()=>o("matchFail"),()=>o("waiting-room"),()=>o("experiment"),()=>o("debrief"),()=>o("debrief")]}return new class extends ke{constructor(e){super(),Ee(this,e,MA,LA,a,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
