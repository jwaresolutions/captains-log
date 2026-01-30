import{j as t,u as Z,a as G,b as Q,Q as ls,c as cs}from"./query-qfgcgxkg.js";import{b as ds,r as C,a as Me}from"./vendor-ibvuEIEr.js";import{u as Y,a as ms,b as be,L as J,R as en,c as U,B as hs}from"./router-Eu-lOo48.js";import{d as s,l as L,m as pe,f as ps,o as us}from"./ui-BNlCdbnp.js";import{l as Pe,T as fo,P as yo,M as Se,a as ke,b as bo,u as gs}from"./maps-Cwoarths.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var Or={},tn=ds;Or.createRoot=tn.createRoot,Or.hydrateRoot=tn.hydrateRoot;function jo(e,r){return function(){return e.apply(r,arguments)}}const{toString:xs}=Object.prototype,{getPrototypeOf:Wr}=Object,{iterator:Mt,toStringTag:$o}=Symbol,Bt=(e=>r=>{const n=xs.call(r);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),se=e=>(e=e.toLowerCase(),r=>Bt(r)===e),Pt=e=>r=>typeof r===e,{isArray:Xe}=Array,Ye=Pt("undefined");function it(e){return e!==null&&!Ye(e)&&e.constructor!==null&&!Ye(e.constructor)&&X(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const vo=se("ArrayBuffer");function fs(e){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&vo(e.buffer),r}const ys=Pt("string"),X=Pt("function"),wo=Pt("number"),lt=e=>e!==null&&typeof e=="object",bs=e=>e===!0||e===!1,Ft=e=>{if(Bt(e)!=="object")return!1;const r=Wr(e);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!($o in e)&&!(Mt in e)},js=e=>{if(!lt(e)||it(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},$s=se("Date"),vs=se("File"),ws=se("Blob"),Cs=se("FileList"),Ss=e=>lt(e)&&X(e.pipe),ks=e=>{let r;return e&&(typeof FormData=="function"&&e instanceof FormData||X(e.append)&&((r=Bt(e))==="formdata"||r==="object"&&X(e.toString)&&e.toString()==="[object FormData]"))},Ts=se("URLSearchParams"),[As,Es,Ls,Fs]=["ReadableStream","Request","Response","Headers"].map(se),Ds=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ct(e,r,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let o,a;if(typeof e!="object"&&(e=[e]),Xe(e))for(o=0,a=e.length;o<a;o++)r.call(null,e[o],o,e);else{if(it(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),l=i.length;let c;for(o=0;o<l;o++)c=i[o],r.call(null,e[c],c,e)}}function Co(e,r){if(it(e))return null;r=r.toLowerCase();const n=Object.keys(e);let o=n.length,a;for(;o-- >0;)if(a=n[o],r===a.toLowerCase())return a;return null}const Re=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,So=e=>!Ye(e)&&e!==Re;function Ur(){const{caseless:e,skipUndefined:r}=So(this)&&this||{},n={},o=(a,i)=>{const l=e&&Co(n,i)||i;Ft(n[l])&&Ft(a)?n[l]=Ur(n[l],a):Ft(a)?n[l]=Ur({},a):Xe(a)?n[l]=a.slice():(!r||!Ye(a))&&(n[l]=a)};for(let a=0,i=arguments.length;a<i;a++)arguments[a]&&ct(arguments[a],o);return n}const zs=(e,r,n,{allOwnKeys:o}={})=>(ct(r,(a,i)=>{n&&X(a)?e[i]=jo(a,n):e[i]=a},{allOwnKeys:o}),e),Ns=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Rs=(e,r,n,o)=>{e.prototype=Object.create(r.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:r.prototype}),n&&Object.assign(e.prototype,n)},Is=(e,r,n,o)=>{let a,i,l;const c={};if(r=r||{},e==null)return r;do{for(a=Object.getOwnPropertyNames(e),i=a.length;i-- >0;)l=a[i],(!o||o(l,e,r))&&!c[l]&&(r[l]=e[l],c[l]=!0);e=n!==!1&&Wr(e)}while(e&&(!n||n(e,r))&&e!==Object.prototype);return r},Ms=(e,r,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=r.length;const o=e.indexOf(r,n);return o!==-1&&o===n},Bs=e=>{if(!e)return null;if(Xe(e))return e;let r=e.length;if(!wo(r))return null;const n=new Array(r);for(;r-- >0;)n[r]=e[r];return n},Ps=(e=>r=>e&&r instanceof e)(typeof Uint8Array<"u"&&Wr(Uint8Array)),Os=(e,r)=>{const o=(e&&e[Mt]).call(e);let a;for(;(a=o.next())&&!a.done;){const i=a.value;r.call(e,i[0],i[1])}},Us=(e,r)=>{let n;const o=[];for(;(n=e.exec(r))!==null;)o.push(n);return o},qs=se("HTMLFormElement"),Hs=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,o,a){return o.toUpperCase()+a}),rn=(({hasOwnProperty:e})=>(r,n)=>e.call(r,n))(Object.prototype),Vs=se("RegExp"),ko=(e,r)=>{const n=Object.getOwnPropertyDescriptors(e),o={};ct(n,(a,i)=>{let l;(l=r(a,i,e))!==!1&&(o[i]=l||a)}),Object.defineProperties(e,o)},Ws=e=>{ko(e,(r,n)=>{if(X(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const o=e[n];if(X(o)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Gs=(e,r)=>{const n={},o=a=>{a.forEach(i=>{n[i]=!0})};return Xe(e)?o(e):o(String(e).split(r)),n},Ks=()=>{},Js=(e,r)=>e!=null&&Number.isFinite(e=+e)?e:r;function Qs(e){return!!(e&&X(e.append)&&e[$o]==="FormData"&&e[Mt])}const _s=e=>{const r=new Array(10),n=(o,a)=>{if(lt(o)){if(r.indexOf(o)>=0)return;if(it(o))return o;if(!("toJSON"in o)){r[a]=o;const i=Xe(o)?[]:{};return ct(o,(l,c)=>{const u=n(l,a+1);!Ye(u)&&(i[c]=u)}),r[a]=void 0,i}}return o};return n(e,0)},Zs=se("AsyncFunction"),Ys=e=>e&&(lt(e)||X(e))&&X(e.then)&&X(e.catch),To=((e,r)=>e?setImmediate:r?((n,o)=>(Re.addEventListener("message",({source:a,data:i})=>{a===Re&&i===n&&o.length&&o.shift()()},!1),a=>{o.push(a),Re.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",X(Re.postMessage)),Xs=typeof queueMicrotask<"u"?queueMicrotask.bind(Re):typeof process<"u"&&process.nextTick||To,ea=e=>e!=null&&X(e[Mt]),v={isArray:Xe,isArrayBuffer:vo,isBuffer:it,isFormData:ks,isArrayBufferView:fs,isString:ys,isNumber:wo,isBoolean:bs,isObject:lt,isPlainObject:Ft,isEmptyObject:js,isReadableStream:As,isRequest:Es,isResponse:Ls,isHeaders:Fs,isUndefined:Ye,isDate:$s,isFile:vs,isBlob:ws,isRegExp:Vs,isFunction:X,isStream:Ss,isURLSearchParams:Ts,isTypedArray:Ps,isFileList:Cs,forEach:ct,merge:Ur,extend:zs,trim:Ds,stripBOM:Ns,inherits:Rs,toFlatObject:Is,kindOf:Bt,kindOfTest:se,endsWith:Ms,toArray:Bs,forEachEntry:Os,matchAll:Us,isHTMLForm:qs,hasOwnProperty:rn,hasOwnProp:rn,reduceDescriptors:ko,freezeMethods:Ws,toObjectSet:Gs,toCamelCase:Hs,noop:Ks,toFiniteNumber:Js,findKey:Co,global:Re,isContextDefined:So,isSpecCompliantForm:Qs,toJSONObject:_s,isAsyncFn:Zs,isThenable:Ys,setImmediate:To,asap:Xs,isIterable:ea};function P(e,r,n,o,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",r&&(this.code=r),n&&(this.config=n),o&&(this.request=o),a&&(this.response=a,this.status=a.status?a.status:null)}v.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.status}}});const Ao=P.prototype,Eo={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Eo[e]={value:e}});Object.defineProperties(P,Eo);Object.defineProperty(Ao,"isAxiosError",{value:!0});P.from=(e,r,n,o,a,i)=>{const l=Object.create(Ao);v.toFlatObject(e,l,function(h){return h!==Error.prototype},m=>m!=="isAxiosError");const c=e&&e.message?e.message:"Error",u=r==null&&e?e.code:r;return P.call(l,c,u,n,o,a),e&&l.cause==null&&Object.defineProperty(l,"cause",{value:e,configurable:!0}),l.name=e&&e.name||"Error",i&&Object.assign(l,i),l};const ta=null;function qr(e){return v.isPlainObject(e)||v.isArray(e)}function Lo(e){return v.endsWith(e,"[]")?e.slice(0,-2):e}function nn(e,r,n){return e?e.concat(r).map(function(a,i){return a=Lo(a),!n&&i?"["+a+"]":a}).join(n?".":""):r}function ra(e){return v.isArray(e)&&!e.some(qr)}const na=v.toFlatObject(v,{},null,function(r){return/^is[A-Z]/.test(r)});function Ot(e,r,n){if(!v.isObject(e))throw new TypeError("target must be an object");r=r||new FormData,n=v.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,p){return!v.isUndefined(p[y])});const o=n.metaTokens,a=n.visitor||h,i=n.dots,l=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&v.isSpecCompliantForm(r);if(!v.isFunction(a))throw new TypeError("visitor must be a function");function m(d){if(d===null)return"";if(v.isDate(d))return d.toISOString();if(v.isBoolean(d))return d.toString();if(!u&&v.isBlob(d))throw new P("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(d)||v.isTypedArray(d)?u&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function h(d,y,p){let x=d;if(d&&!p&&typeof d=="object"){if(v.endsWith(y,"{}"))y=o?y:y.slice(0,-2),d=JSON.stringify(d);else if(v.isArray(d)&&ra(d)||(v.isFileList(d)||v.endsWith(y,"[]"))&&(x=v.toArray(d)))return y=Lo(y),x.forEach(function(f,w){!(v.isUndefined(f)||f===null)&&r.append(l===!0?nn([y],w,i):l===null?y:y+"[]",m(f))}),!1}return qr(d)?!0:(r.append(nn(p,y,i),m(d)),!1)}const b=[],$=Object.assign(na,{defaultVisitor:h,convertValue:m,isVisitable:qr});function g(d,y){if(!v.isUndefined(d)){if(b.indexOf(d)!==-1)throw Error("Circular reference detected in "+y.join("."));b.push(d),v.forEach(d,function(x,j){(!(v.isUndefined(x)||x===null)&&a.call(r,x,v.isString(j)?j.trim():j,y,$))===!0&&g(x,y?y.concat(j):[j])}),b.pop()}}if(!v.isObject(e))throw new TypeError("data must be an object");return g(e),r}function on(e){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return r[o]})}function Gr(e,r){this._pairs=[],e&&Ot(e,this,r)}const Fo=Gr.prototype;Fo.append=function(r,n){this._pairs.push([r,n])};Fo.toString=function(r){const n=r?function(o){return r.call(this,o,on)}:on;return this._pairs.map(function(a){return n(a[0])+"="+n(a[1])},"").join("&")};function oa(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Do(e,r,n){if(!r)return e;const o=n&&n.encode||oa;v.isFunction(n)&&(n={serialize:n});const a=n&&n.serialize;let i;if(a?i=a(r,n):i=v.isURLSearchParams(r)?r.toString():new Gr(r,n).toString(o),i){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class sn{constructor(){this.handlers=[]}use(r,n,o){return this.handlers.push({fulfilled:r,rejected:n,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){v.forEach(this.handlers,function(o){o!==null&&r(o)})}}const zo={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},sa=typeof URLSearchParams<"u"?URLSearchParams:Gr,aa=typeof FormData<"u"?FormData:null,ia=typeof Blob<"u"?Blob:null,la={isBrowser:!0,classes:{URLSearchParams:sa,FormData:aa,Blob:ia},protocols:["http","https","file","blob","url","data"]},Kr=typeof window<"u"&&typeof document<"u",Hr=typeof navigator=="object"&&navigator||void 0,ca=Kr&&(!Hr||["ReactNative","NativeScript","NS"].indexOf(Hr.product)<0),da=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ma=Kr&&window.location.href||"http://localhost",ha=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Kr,hasStandardBrowserEnv:ca,hasStandardBrowserWebWorkerEnv:da,navigator:Hr,origin:ma},Symbol.toStringTag,{value:"Module"})),_={...ha,...la};function pa(e,r){return Ot(e,new _.classes.URLSearchParams,{visitor:function(n,o,a,i){return _.isNode&&v.isBuffer(n)?(this.append(o,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...r})}function ua(e){return v.matchAll(/\w+|\[(\w*)]/g,e).map(r=>r[0]==="[]"?"":r[1]||r[0])}function ga(e){const r={},n=Object.keys(e);let o;const a=n.length;let i;for(o=0;o<a;o++)i=n[o],r[i]=e[i];return r}function No(e){function r(n,o,a,i){let l=n[i++];if(l==="__proto__")return!0;const c=Number.isFinite(+l),u=i>=n.length;return l=!l&&v.isArray(a)?a.length:l,u?(v.hasOwnProp(a,l)?a[l]=[a[l],o]:a[l]=o,!c):((!a[l]||!v.isObject(a[l]))&&(a[l]=[]),r(n,o,a[l],i)&&v.isArray(a[l])&&(a[l]=ga(a[l])),!c)}if(v.isFormData(e)&&v.isFunction(e.entries)){const n={};return v.forEachEntry(e,(o,a)=>{r(ua(o),a,n,0)}),n}return null}function xa(e,r,n){if(v.isString(e))try{return(r||JSON.parse)(e),v.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(n||JSON.stringify)(e)}const dt={transitional:zo,adapter:["xhr","http","fetch"],transformRequest:[function(r,n){const o=n.getContentType()||"",a=o.indexOf("application/json")>-1,i=v.isObject(r);if(i&&v.isHTMLForm(r)&&(r=new FormData(r)),v.isFormData(r))return a?JSON.stringify(No(r)):r;if(v.isArrayBuffer(r)||v.isBuffer(r)||v.isStream(r)||v.isFile(r)||v.isBlob(r)||v.isReadableStream(r))return r;if(v.isArrayBufferView(r))return r.buffer;if(v.isURLSearchParams(r))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let c;if(i){if(o.indexOf("application/x-www-form-urlencoded")>-1)return pa(r,this.formSerializer).toString();if((c=v.isFileList(r))||o.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Ot(c?{"files[]":r}:r,u&&new u,this.formSerializer)}}return i||a?(n.setContentType("application/json",!1),xa(r)):r}],transformResponse:[function(r){const n=this.transitional||dt.transitional,o=n&&n.forcedJSONParsing,a=this.responseType==="json";if(v.isResponse(r)||v.isReadableStream(r))return r;if(r&&v.isString(r)&&(o&&!this.responseType||a)){const l=!(n&&n.silentJSONParsing)&&a;try{return JSON.parse(r,this.parseReviver)}catch(c){if(l)throw c.name==="SyntaxError"?P.from(c,P.ERR_BAD_RESPONSE,this,null,this.response):c}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_.classes.FormData,Blob:_.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(["delete","get","head","post","put","patch"],e=>{dt.headers[e]={}});const fa=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ya=e=>{const r={};let n,o,a;return e&&e.split(`
`).forEach(function(l){a=l.indexOf(":"),n=l.substring(0,a).trim().toLowerCase(),o=l.substring(a+1).trim(),!(!n||r[n]&&fa[n])&&(n==="set-cookie"?r[n]?r[n].push(o):r[n]=[o]:r[n]=r[n]?r[n]+", "+o:o)}),r},an=Symbol("internals");function tt(e){return e&&String(e).trim().toLowerCase()}function Dt(e){return e===!1||e==null?e:v.isArray(e)?e.map(Dt):String(e)}function ba(e){const r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=n.exec(e);)r[o[1]]=o[2];return r}const ja=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Wt(e,r,n,o,a){if(v.isFunction(o))return o.call(this,r,n);if(a&&(r=n),!!v.isString(r)){if(v.isString(o))return r.indexOf(o)!==-1;if(v.isRegExp(o))return o.test(r)}}function $a(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,n,o)=>n.toUpperCase()+o)}function va(e,r){const n=v.toCamelCase(" "+r);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+n,{value:function(a,i,l){return this[o].call(this,r,a,i,l)},configurable:!0})})}let ee=class{constructor(r){r&&this.set(r)}set(r,n,o){const a=this;function i(c,u,m){const h=tt(u);if(!h)throw new Error("header name must be a non-empty string");const b=v.findKey(a,h);(!b||a[b]===void 0||m===!0||m===void 0&&a[b]!==!1)&&(a[b||u]=Dt(c))}const l=(c,u)=>v.forEach(c,(m,h)=>i(m,h,u));if(v.isPlainObject(r)||r instanceof this.constructor)l(r,n);else if(v.isString(r)&&(r=r.trim())&&!ja(r))l(ya(r),n);else if(v.isObject(r)&&v.isIterable(r)){let c={},u,m;for(const h of r){if(!v.isArray(h))throw TypeError("Object iterator must return a key-value pair");c[m=h[0]]=(u=c[m])?v.isArray(u)?[...u,h[1]]:[u,h[1]]:h[1]}l(c,n)}else r!=null&&i(n,r,o);return this}get(r,n){if(r=tt(r),r){const o=v.findKey(this,r);if(o){const a=this[o];if(!n)return a;if(n===!0)return ba(a);if(v.isFunction(n))return n.call(this,a,o);if(v.isRegExp(n))return n.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,n){if(r=tt(r),r){const o=v.findKey(this,r);return!!(o&&this[o]!==void 0&&(!n||Wt(this,this[o],o,n)))}return!1}delete(r,n){const o=this;let a=!1;function i(l){if(l=tt(l),l){const c=v.findKey(o,l);c&&(!n||Wt(o,o[c],c,n))&&(delete o[c],a=!0)}}return v.isArray(r)?r.forEach(i):i(r),a}clear(r){const n=Object.keys(this);let o=n.length,a=!1;for(;o--;){const i=n[o];(!r||Wt(this,this[i],i,r,!0))&&(delete this[i],a=!0)}return a}normalize(r){const n=this,o={};return v.forEach(this,(a,i)=>{const l=v.findKey(o,i);if(l){n[l]=Dt(a),delete n[i];return}const c=r?$a(i):String(i).trim();c!==i&&delete n[i],n[c]=Dt(a),o[c]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const n=Object.create(null);return v.forEach(this,(o,a)=>{o!=null&&o!==!1&&(n[a]=r&&v.isArray(o)?o.join(", "):o)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,n])=>r+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...n){const o=new this(r);return n.forEach(a=>o.set(a)),o}static accessor(r){const o=(this[an]=this[an]={accessors:{}}).accessors,a=this.prototype;function i(l){const c=tt(l);o[c]||(va(a,l),o[c]=!0)}return v.isArray(r)?r.forEach(i):i(r),this}};ee.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(ee.prototype,({value:e},r)=>{let n=r[0].toUpperCase()+r.slice(1);return{get:()=>e,set(o){this[n]=o}}});v.freezeMethods(ee);function Gt(e,r){const n=this||dt,o=r||n,a=ee.from(o.headers);let i=o.data;return v.forEach(e,function(c){i=c.call(n,i,a.normalize(),r?r.status:void 0)}),a.normalize(),i}function Ro(e){return!!(e&&e.__CANCEL__)}function et(e,r,n){P.call(this,e??"canceled",P.ERR_CANCELED,r,n),this.name="CanceledError"}v.inherits(et,P,{__CANCEL__:!0});function Io(e,r,n){const o=n.config.validateStatus;!n.status||!o||o(n.status)?e(n):r(new P("Request failed with status code "+n.status,[P.ERR_BAD_REQUEST,P.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function wa(e){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""}function Ca(e,r){e=e||10;const n=new Array(e),o=new Array(e);let a=0,i=0,l;return r=r!==void 0?r:1e3,function(u){const m=Date.now(),h=o[i];l||(l=m),n[a]=u,o[a]=m;let b=i,$=0;for(;b!==a;)$+=n[b++],b=b%e;if(a=(a+1)%e,a===i&&(i=(i+1)%e),m-l<r)return;const g=h&&m-h;return g?Math.round($*1e3/g):void 0}}function Sa(e,r){let n=0,o=1e3/r,a,i;const l=(m,h=Date.now())=>{n=h,a=null,i&&(clearTimeout(i),i=null),e(...m)};return[(...m)=>{const h=Date.now(),b=h-n;b>=o?l(m,h):(a=m,i||(i=setTimeout(()=>{i=null,l(a)},o-b)))},()=>a&&l(a)]}const Nt=(e,r,n=3)=>{let o=0;const a=Ca(50,250);return Sa(i=>{const l=i.loaded,c=i.lengthComputable?i.total:void 0,u=l-o,m=a(u),h=l<=c;o=l;const b={loaded:l,total:c,progress:c?l/c:void 0,bytes:u,rate:m||void 0,estimated:m&&c&&h?(c-l)/m:void 0,event:i,lengthComputable:c!=null,[r?"download":"upload"]:!0};e(b)},n)},ln=(e,r)=>{const n=e!=null;return[o=>r[0]({lengthComputable:n,total:e,loaded:o}),r[1]]},cn=e=>(...r)=>v.asap(()=>e(...r)),ka=_.hasStandardBrowserEnv?((e,r)=>n=>(n=new URL(n,_.origin),e.protocol===n.protocol&&e.host===n.host&&(r||e.port===n.port)))(new URL(_.origin),_.navigator&&/(msie|trident)/i.test(_.navigator.userAgent)):()=>!0,Ta=_.hasStandardBrowserEnv?{write(e,r,n,o,a,i,l){if(typeof document>"u")return;const c=[`${e}=${encodeURIComponent(r)}`];v.isNumber(n)&&c.push(`expires=${new Date(n).toUTCString()}`),v.isString(o)&&c.push(`path=${o}`),v.isString(a)&&c.push(`domain=${a}`),i===!0&&c.push("secure"),v.isString(l)&&c.push(`SameSite=${l}`),document.cookie=c.join("; ")},read(e){if(typeof document>"u")return null;const r=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return r?decodeURIComponent(r[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Aa(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ea(e,r){return r?e.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):e}function Mo(e,r,n){let o=!Aa(r);return e&&(o||n==!1)?Ea(e,r):r}const dn=e=>e instanceof ee?{...e}:e;function Be(e,r){r=r||{};const n={};function o(m,h,b,$){return v.isPlainObject(m)&&v.isPlainObject(h)?v.merge.call({caseless:$},m,h):v.isPlainObject(h)?v.merge({},h):v.isArray(h)?h.slice():h}function a(m,h,b,$){if(v.isUndefined(h)){if(!v.isUndefined(m))return o(void 0,m,b,$)}else return o(m,h,b,$)}function i(m,h){if(!v.isUndefined(h))return o(void 0,h)}function l(m,h){if(v.isUndefined(h)){if(!v.isUndefined(m))return o(void 0,m)}else return o(void 0,h)}function c(m,h,b){if(b in r)return o(m,h);if(b in e)return o(void 0,m)}const u={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:c,headers:(m,h,b)=>a(dn(m),dn(h),b,!0)};return v.forEach(Object.keys({...e,...r}),function(h){const b=u[h]||a,$=b(e[h],r[h],h);v.isUndefined($)&&b!==c||(n[h]=$)}),n}const Bo=e=>{const r=Be({},e);let{data:n,withXSRFToken:o,xsrfHeaderName:a,xsrfCookieName:i,headers:l,auth:c}=r;if(r.headers=l=ee.from(l),r.url=Do(Mo(r.baseURL,r.url,r.allowAbsoluteUrls),e.params,e.paramsSerializer),c&&l.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),v.isFormData(n)){if(_.hasStandardBrowserEnv||_.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if(v.isFunction(n.getHeaders)){const u=n.getHeaders(),m=["content-type","content-length"];Object.entries(u).forEach(([h,b])=>{m.includes(h.toLowerCase())&&l.set(h,b)})}}if(_.hasStandardBrowserEnv&&(o&&v.isFunction(o)&&(o=o(r)),o||o!==!1&&ka(r.url))){const u=a&&i&&Ta.read(i);u&&l.set(a,u)}return r},La=typeof XMLHttpRequest<"u",Fa=La&&function(e){return new Promise(function(n,o){const a=Bo(e);let i=a.data;const l=ee.from(a.headers).normalize();let{responseType:c,onUploadProgress:u,onDownloadProgress:m}=a,h,b,$,g,d;function y(){g&&g(),d&&d(),a.cancelToken&&a.cancelToken.unsubscribe(h),a.signal&&a.signal.removeEventListener("abort",h)}let p=new XMLHttpRequest;p.open(a.method.toUpperCase(),a.url,!0),p.timeout=a.timeout;function x(){if(!p)return;const f=ee.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),D={data:!c||c==="text"||c==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:f,config:e,request:p};Io(function(N){n(N),y()},function(N){o(N),y()},D),p=null}"onloadend"in p?p.onloadend=x:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(x)},p.onabort=function(){p&&(o(new P("Request aborted",P.ECONNABORTED,e,p)),p=null)},p.onerror=function(w){const D=w&&w.message?w.message:"Network Error",T=new P(D,P.ERR_NETWORK,e,p);T.event=w||null,o(T),p=null},p.ontimeout=function(){let w=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const D=a.transitional||zo;a.timeoutErrorMessage&&(w=a.timeoutErrorMessage),o(new P(w,D.clarifyTimeoutError?P.ETIMEDOUT:P.ECONNABORTED,e,p)),p=null},i===void 0&&l.setContentType(null),"setRequestHeader"in p&&v.forEach(l.toJSON(),function(w,D){p.setRequestHeader(D,w)}),v.isUndefined(a.withCredentials)||(p.withCredentials=!!a.withCredentials),c&&c!=="json"&&(p.responseType=a.responseType),m&&([$,d]=Nt(m,!0),p.addEventListener("progress",$)),u&&p.upload&&([b,g]=Nt(u),p.upload.addEventListener("progress",b),p.upload.addEventListener("loadend",g)),(a.cancelToken||a.signal)&&(h=f=>{p&&(o(!f||f.type?new et(null,e,p):f),p.abort(),p=null)},a.cancelToken&&a.cancelToken.subscribe(h),a.signal&&(a.signal.aborted?h():a.signal.addEventListener("abort",h)));const j=wa(a.url);if(j&&_.protocols.indexOf(j)===-1){o(new P("Unsupported protocol "+j+":",P.ERR_BAD_REQUEST,e));return}p.send(i||null)})},Da=(e,r)=>{const{length:n}=e=e?e.filter(Boolean):[];if(r||n){let o=new AbortController,a;const i=function(m){if(!a){a=!0,c();const h=m instanceof Error?m:this.reason;o.abort(h instanceof P?h:new et(h instanceof Error?h.message:h))}};let l=r&&setTimeout(()=>{l=null,i(new P(`timeout ${r} of ms exceeded`,P.ETIMEDOUT))},r);const c=()=>{e&&(l&&clearTimeout(l),l=null,e.forEach(m=>{m.unsubscribe?m.unsubscribe(i):m.removeEventListener("abort",i)}),e=null)};e.forEach(m=>m.addEventListener("abort",i));const{signal:u}=o;return u.unsubscribe=()=>v.asap(c),u}},za=function*(e,r){let n=e.byteLength;if(n<r){yield e;return}let o=0,a;for(;o<n;)a=o+r,yield e.slice(o,a),o=a},Na=async function*(e,r){for await(const n of Ra(e))yield*za(n,r)},Ra=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const r=e.getReader();try{for(;;){const{done:n,value:o}=await r.read();if(n)break;yield o}}finally{await r.cancel()}},mn=(e,r,n,o)=>{const a=Na(e,r);let i=0,l,c=u=>{l||(l=!0,o&&o(u))};return new ReadableStream({async pull(u){try{const{done:m,value:h}=await a.next();if(m){c(),u.close();return}let b=h.byteLength;if(n){let $=i+=b;n($)}u.enqueue(new Uint8Array(h))}catch(m){throw c(m),m}},cancel(u){return c(u),a.return()}},{highWaterMark:2})},hn=64*1024,{isFunction:ht}=v,Ia=(({Request:e,Response:r})=>({Request:e,Response:r}))(v.global),{ReadableStream:pn,TextEncoder:un}=v.global,gn=(e,...r)=>{try{return!!e(...r)}catch{return!1}},Ma=e=>{e=v.merge.call({skipUndefined:!0},Ia,e);const{fetch:r,Request:n,Response:o}=e,a=r?ht(r):typeof fetch=="function",i=ht(n),l=ht(o);if(!a)return!1;const c=a&&ht(pn),u=a&&(typeof un=="function"?(d=>y=>d.encode(y))(new un):async d=>new Uint8Array(await new n(d).arrayBuffer())),m=i&&c&&gn(()=>{let d=!1;const y=new n(_.origin,{body:new pn,method:"POST",get duplex(){return d=!0,"half"}}).headers.has("Content-Type");return d&&!y}),h=l&&c&&gn(()=>v.isReadableStream(new o("").body)),b={stream:h&&(d=>d.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(d=>{!b[d]&&(b[d]=(y,p)=>{let x=y&&y[d];if(x)return x.call(y);throw new P(`Response type '${d}' is not supported`,P.ERR_NOT_SUPPORT,p)})});const $=async d=>{if(d==null)return 0;if(v.isBlob(d))return d.size;if(v.isSpecCompliantForm(d))return(await new n(_.origin,{method:"POST",body:d}).arrayBuffer()).byteLength;if(v.isArrayBufferView(d)||v.isArrayBuffer(d))return d.byteLength;if(v.isURLSearchParams(d)&&(d=d+""),v.isString(d))return(await u(d)).byteLength},g=async(d,y)=>{const p=v.toFiniteNumber(d.getContentLength());return p??$(y)};return async d=>{let{url:y,method:p,data:x,signal:j,cancelToken:f,timeout:w,onDownloadProgress:D,onUploadProgress:T,responseType:N,headers:B,withCredentials:E="same-origin",fetchOptions:S}=Bo(d),z=r||fetch;N=N?(N+"").toLowerCase():"text";let O=Da([j,f&&f.toAbortSignal()],w),q=null;const V=O&&O.unsubscribe&&(()=>{O.unsubscribe()});let R;try{if(T&&m&&p!=="get"&&p!=="head"&&(R=await g(B,x))!==0){let ve=new n(y,{method:"POST",body:x,duplex:"half"}),Ue;if(v.isFormData(x)&&(Ue=ve.headers.get("content-type"))&&B.setContentType(Ue),ve.body){const[Vt,mt]=ln(R,Nt(cn(T)));x=mn(ve.body,hn,Vt,mt)}}v.isString(E)||(E=E?"include":"omit");const H=i&&"credentials"in n.prototype,Oe={...S,signal:O,method:p.toUpperCase(),headers:B.normalize().toJSON(),body:x,duplex:"half",credentials:H?E:void 0};q=i&&new n(y,Oe);let $e=await(i?z(q,S):z(y,Oe));const Yr=h&&(N==="stream"||N==="response");if(h&&(D||Yr&&V)){const ve={};["status","statusText","headers"].forEach(Xr=>{ve[Xr]=$e[Xr]});const Ue=v.toFiniteNumber($e.headers.get("content-length")),[Vt,mt]=D&&ln(Ue,Nt(cn(D),!0))||[];$e=new o(mn($e.body,hn,Vt,()=>{mt&&mt(),V&&V()}),ve)}N=N||"text";let is=await b[v.findKey(b,N)||"text"]($e,d);return!Yr&&V&&V(),await new Promise((ve,Ue)=>{Io(ve,Ue,{data:is,headers:ee.from($e.headers),status:$e.status,statusText:$e.statusText,config:d,request:q})})}catch(H){throw V&&V(),H&&H.name==="TypeError"&&/Load failed|fetch/i.test(H.message)?Object.assign(new P("Network Error",P.ERR_NETWORK,d,q),{cause:H.cause||H}):P.from(H,H&&H.code,d,q)}}},Ba=new Map,Po=e=>{let r=e&&e.env||{};const{fetch:n,Request:o,Response:a}=r,i=[o,a,n];let l=i.length,c=l,u,m,h=Ba;for(;c--;)u=i[c],m=h.get(u),m===void 0&&h.set(u,m=c?new Map:Ma(r)),h=m;return m};Po();const Jr={http:ta,xhr:Fa,fetch:{get:Po}};v.forEach(Jr,(e,r)=>{if(e){try{Object.defineProperty(e,"name",{value:r})}catch{}Object.defineProperty(e,"adapterName",{value:r})}});const xn=e=>`- ${e}`,Pa=e=>v.isFunction(e)||e===null||e===!1;function Oa(e,r){e=v.isArray(e)?e:[e];const{length:n}=e;let o,a;const i={};for(let l=0;l<n;l++){o=e[l];let c;if(a=o,!Pa(o)&&(a=Jr[(c=String(o)).toLowerCase()],a===void 0))throw new P(`Unknown adapter '${c}'`);if(a&&(v.isFunction(a)||(a=a.get(r))))break;i[c||"#"+l]=a}if(!a){const l=Object.entries(i).map(([u,m])=>`adapter ${u} `+(m===!1?"is not supported by the environment":"is not available in the build"));let c=n?l.length>1?`since :
`+l.map(xn).join(`
`):" "+xn(l[0]):"as no adapter specified";throw new P("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return a}const Oo={getAdapter:Oa,adapters:Jr};function Kt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new et(null,e)}function fn(e){return Kt(e),e.headers=ee.from(e.headers),e.data=Gt.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Oo.getAdapter(e.adapter||dt.adapter,e)(e).then(function(o){return Kt(e),o.data=Gt.call(e,e.transformResponse,o),o.headers=ee.from(o.headers),o},function(o){return Ro(o)||(Kt(e),o&&o.response&&(o.response.data=Gt.call(e,e.transformResponse,o.response),o.response.headers=ee.from(o.response.headers))),Promise.reject(o)})}const Uo="1.13.2",Ut={};["object","boolean","number","function","string","symbol"].forEach((e,r)=>{Ut[e]=function(o){return typeof o===e||"a"+(r<1?"n ":" ")+e}});const yn={};Ut.transitional=function(r,n,o){function a(i,l){return"[Axios v"+Uo+"] Transitional option '"+i+"'"+l+(o?". "+o:"")}return(i,l,c)=>{if(r===!1)throw new P(a(l," has been removed"+(n?" in "+n:"")),P.ERR_DEPRECATED);return n&&!yn[l]&&(yn[l]=!0,console.warn(a(l," has been deprecated since v"+n+" and will be removed in the near future"))),r?r(i,l,c):!0}};Ut.spelling=function(r){return(n,o)=>(console.warn(`${o} is likely a misspelling of ${r}`),!0)};function Ua(e,r,n){if(typeof e!="object")throw new P("options must be an object",P.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let a=o.length;for(;a-- >0;){const i=o[a],l=r[i];if(l){const c=e[i],u=c===void 0||l(c,i,e);if(u!==!0)throw new P("option "+i+" must be "+u,P.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new P("Unknown option "+i,P.ERR_BAD_OPTION)}}const zt={assertOptions:Ua,validators:Ut},ae=zt.validators;let Ie=class{constructor(r){this.defaults=r||{},this.interceptors={request:new sn,response:new sn}}async request(r,n){try{return await this._request(r,n)}catch(o){if(o instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const i=a.stack?a.stack.replace(/^.+\n/,""):"";try{o.stack?i&&!String(o.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+i):o.stack=i}catch{}}throw o}}_request(r,n){typeof r=="string"?(n=n||{},n.url=r):n=r||{},n=Be(this.defaults,n);const{transitional:o,paramsSerializer:a,headers:i}=n;o!==void 0&&zt.assertOptions(o,{silentJSONParsing:ae.transitional(ae.boolean),forcedJSONParsing:ae.transitional(ae.boolean),clarifyTimeoutError:ae.transitional(ae.boolean)},!1),a!=null&&(v.isFunction(a)?n.paramsSerializer={serialize:a}:zt.assertOptions(a,{encode:ae.function,serialize:ae.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),zt.assertOptions(n,{baseUrl:ae.spelling("baseURL"),withXsrfToken:ae.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=i&&v.merge(i.common,i[n.method]);i&&v.forEach(["delete","get","head","post","put","patch","common"],d=>{delete i[d]}),n.headers=ee.concat(l,i);const c=[];let u=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(u=u&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const m=[];this.interceptors.response.forEach(function(y){m.push(y.fulfilled,y.rejected)});let h,b=0,$;if(!u){const d=[fn.bind(this),void 0];for(d.unshift(...c),d.push(...m),$=d.length,h=Promise.resolve(n);b<$;)h=h.then(d[b++],d[b++]);return h}$=c.length;let g=n;for(;b<$;){const d=c[b++],y=c[b++];try{g=d(g)}catch(p){y.call(this,p);break}}try{h=fn.call(this,g)}catch(d){return Promise.reject(d)}for(b=0,$=m.length;b<$;)h=h.then(m[b++],m[b++]);return h}getUri(r){r=Be(this.defaults,r);const n=Mo(r.baseURL,r.url,r.allowAbsoluteUrls);return Do(n,r.params,r.paramsSerializer)}};v.forEach(["delete","get","head","options"],function(r){Ie.prototype[r]=function(n,o){return this.request(Be(o||{},{method:r,url:n,data:(o||{}).data}))}});v.forEach(["post","put","patch"],function(r){function n(o){return function(i,l,c){return this.request(Be(c||{},{method:r,headers:o?{"Content-Type":"multipart/form-data"}:{},url:i,data:l}))}}Ie.prototype[r]=n(),Ie.prototype[r+"Form"]=n(!0)});let qa=class qo{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const o=this;this.promise.then(a=>{if(!o._listeners)return;let i=o._listeners.length;for(;i-- >0;)o._listeners[i](a);o._listeners=null}),this.promise.then=a=>{let i;const l=new Promise(c=>{o.subscribe(c),i=c}).then(a);return l.cancel=function(){o.unsubscribe(i)},l},r(function(i,l,c){o.reason||(o.reason=new et(i,l,c),n(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const n=this._listeners.indexOf(r);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const r=new AbortController,n=o=>{r.abort(o)};return this.subscribe(n),r.signal.unsubscribe=()=>this.unsubscribe(n),r.signal}static source(){let r;return{token:new qo(function(a){r=a}),cancel:r}}};function Ha(e){return function(n){return e.apply(null,n)}}function Va(e){return v.isObject(e)&&e.isAxiosError===!0}const Vr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Vr).forEach(([e,r])=>{Vr[r]=e});function Ho(e){const r=new Ie(e),n=jo(Ie.prototype.request,r);return v.extend(n,Ie.prototype,r,{allOwnKeys:!0}),v.extend(n,r,null,{allOwnKeys:!0}),n.create=function(a){return Ho(Be(e,a))},n}const W=Ho(dt);W.Axios=Ie;W.CanceledError=et;W.CancelToken=qa;W.isCancel=Ro;W.VERSION=Uo;W.toFormData=Ot;W.AxiosError=P;W.Cancel=W.CanceledError;W.all=function(r){return Promise.all(r)};W.spread=Ha;W.isAxiosError=Va;W.mergeConfig=Be;W.AxiosHeaders=ee;W.formToJSON=e=>No(v.isHTMLForm(e)?new FormData(e):e);W.getAdapter=Oo.getAdapter;W.HttpStatusCode=Vr;W.default=W;const{Axios:ku,AxiosError:Tu,CanceledError:Au,isCancel:Eu,CancelToken:Lu,VERSION:Fu,all:Du,Cancel:zu,isAxiosError:Nu,spread:Ru,toFormData:Iu,AxiosHeaders:Mu,HttpStatusCode:Bu,formToJSON:Pu,getAdapter:Ou,mergeConfig:Uu}=W;class Wa{client;constructor(){const n=localStorage.getItem("api_base_url")||"/api/v1";this.client=W.create({baseURL:n,timeout:1e4,headers:{"Content-Type":"application/json"}}),this.client.interceptors.request.use(o=>{const a=this.getAuthToken();return a&&(o.headers.Authorization=`Bearer ${a}`),o},o=>Promise.reject(o)),this.client.interceptors.response.use(o=>o,o=>{var i,l,c,u,m,h;if(!o.response){const b={message:o.code==="ECONNABORTED"?"Request timeout. Please try again.":"Network error. Please check your internet connection.",code:"NETWORK_ERROR",details:{originalError:o.message}};return Promise.reject(b)}const a={message:this.getErrorMessage(o),code:o.response.status.toString(),details:o.response.data};switch(o.response.status){case 401:this.clearAuthToken(),a.message="Your session has expired. Please log in again.";break;case 403:a.message="You don't have permission to perform this action.";break;case 404:a.message="The requested resource was not found.";break;case 409:a.message=((l=(i=o.response.data)==null?void 0:i.error)==null?void 0:l.message)||"A conflict occurred. The resource may have been modified.";break;case 422:a.message=((u=(c=o.response.data)==null?void 0:c.error)==null?void 0:u.message)||"Invalid data provided.";break;case 429:a.message="Too many requests. Please wait a moment and try again.";break;case 500:a.message="Server error. Please try again later.";break;case 503:a.message="Service temporarily unavailable. Please try again later.";break}return console.error("API Error:",{status:o.response.status,message:a.message,url:(m=o.config)==null?void 0:m.url,method:(h=o.config)==null?void 0:h.method}),Promise.reject(a)})}getAuthToken(){return localStorage.getItem("auth_token")}setAuthToken(r){localStorage.setItem("auth_token",r)}clearAuthToken(){localStorage.removeItem("auth_token")}getErrorMessage(r){var n,o,a,i,l;return(a=(o=(n=r.response)==null?void 0:n.data)==null?void 0:o.error)!=null&&a.message?r.response.data.error.message:(l=(i=r.response)==null?void 0:i.data)!=null&&l.message?r.response.data.message:r.message?r.message:"An unexpected error occurred"}async retryRequest(r,n=3,o=1e3){let a;for(let i=1;i<=n;i++)try{return await r()}catch(l){if(a=l,l.code&&l.code.startsWith("4")&&l.code!=="408"&&l.code!=="429")throw l;i<n&&await new Promise(c=>setTimeout(c,o*i))}throw a}updateBaseUrl(r){let n=r;n.endsWith("/api/v1")||(n=n.replace(/\/$/,"")+"/api/v1"),this.client.defaults.baseURL=n,localStorage.setItem("api_base_url",n),console.log("API base URL updated to:",n)}async checkConnectivity(){try{return await this.healthCheck(),!0}catch{return!1}}async get(r,n){return(await this.client.get(r,{params:n})).data.data}async post(r,n){return(await this.client.post(r,n)).data.data}async put(r,n){return(await this.client.put(r,n)).data.data}async patch(r,n){return(await this.client.patch(r,n)).data.data}async delete(r){return(await this.client.delete(r)).data.data}async login(r,n){const a=(await this.client.post("/auth/login",{username:r,password:n})).data;return this.setAuthToken(a.token),a}async logout(){try{await this.post("/auth/logout")}finally{this.clearAuthToken()}}async changePassword(r,n){await this.post("/auth/change-password",{currentPassword:r,newPassword:n}),this.clearAuthToken()}async healthCheck(){return(await W.get("/health")).data}async getBoats(){return this.get("/boats")}async getBoat(r){return this.get(`/boats/${r}`)}async createBoat(r){return this.post("/boats",r)}async updateBoat(r,n){return this.put(`/boats/${r}`,n)}async toggleBoatStatus(r,n){return this.patch(`/boats/${r}/status`,{enabled:n})}async setActiveBoat(r){return this.patch(`/boats/${r}/active`)}async getTrips(r){return this.get("/trips",r)}async getTrip(r){return this.get(`/trips/${r}`)}async createTrip(r){return this.post("/trips",r)}async updateTrip(r,n){return this.put(`/trips/${r}`,n)}async addManualData(r,n){return this.patch(`/trips/${r}/manual-data`,n)}async getLicenseProgress(){return this.get("/captain-log/progress")}async getNotes(r){return this.get("/notes",r)}async getNote(r){return this.get(`/notes/${r}`)}async createNote(r){return this.post("/notes",r)}async updateNote(r,n){return this.put(`/notes/${r}`,n)}async deleteNote(r){return this.delete(`/notes/${r}`)}async getTodoLists(r){return this.get("/todos",r?{boatId:r}:void 0)}async getTodoList(r){return this.get(`/todos/${r}`)}async createTodoList(r){return this.post("/todos",r)}async updateTodoList(r,n){return this.put(`/todos/${r}`,n)}async deleteTodoList(r){return this.delete(`/todos/${r}`)}async addTodoItem(r,n){return this.post(`/todos/${r}/items`,{content:n})}async toggleTodoItem(r){return this.patch(`/todos/items/${r}/complete`)}async getMaintenanceTemplates(r){return this.get("/maintenance/templates",r?{boatId:r}:void 0)}async getMaintenanceTemplate(r){return this.get(`/maintenance/templates/${r}`)}async createMaintenanceTemplate(r){return this.post("/maintenance/templates",r)}async updateMaintenanceTemplate(r,n){return this.put(`/maintenance/templates/${r}`,n)}async deleteMaintenanceTemplate(r){return this.delete(`/maintenance/templates/${r}`)}async getUpcomingMaintenanceEvents(r){return this.get("/maintenance/events/upcoming",r?{boatId:r}:void 0)}async getCompletedMaintenanceEvents(r){return this.get("/maintenance/events/completed",r?{boatId:r}:void 0)}async getMaintenanceEvent(r){return this.get(`/maintenance/events/${r}`)}async completeMaintenanceEvent(r,n){return this.post(`/maintenance/events/${r}/complete`,n)}async getMarkedLocations(r){return this.get("/locations",r)}async getMarkedLocation(r){return this.get(`/locations/${r}`)}async createMarkedLocation(r){return this.post("/locations",r)}async updateMarkedLocation(r,n){return this.put(`/locations/${r}`,n)}async deleteMarkedLocation(r){return this.delete(`/locations/${r}`)}async getNearbyLocations(r,n,o){return this.get("/locations/nearby",{latitude:r,longitude:n,radiusMeters:o})}async uploadPhoto(r,n,o){const a=new FormData;return a.append("photo",r),a.append("entityType",n),a.append("entityId",o),(await this.client.post("/photos",a,{headers:{"Content-Type":"multipart/form-data"}})).data.data}async getPhotos(r,n){return this.get("/photos",{entityType:r,entityId:n})}async deletePhoto(r){return this.delete(`/photos/${r}`)}async getNotifications(){return(await this.get("/notifications")).notifications}async markNotificationAsRead(r){return this.patch(`/notifications/${r}/read`)}async createBackup(){return this.post("/backups")}async getBackups(){return this.get("/backups")}async downloadBackup(r){return(await this.client.get(`/backups/${r}/download`,{responseType:"blob"})).data}}const M=new Wa,Ga=s.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  transform: translateY(${e=>e.$show?"0":"-100%"});
  transition: transform 0.3s ease-in-out;
`,Ka=s.div`
  background: ${e=>e.theme.colors.status.warning};
  color: ${e=>e.theme.colors.background};
  padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.md};
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.theme.spacing.md};
`,Ja=s.button`
  background: transparent;
  border: 1px solid ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.background};
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background: ${e=>e.theme.colors.background}20;
  }
`,Qa=s.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${e=>e.$isOnline?e.theme.colors.status.success:e.theme.colors.status.error};
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: currentColor;
    animation: ${e=>e.$isOnline?"none":"pulse 2s infinite"};
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`,_a=({showConnectionStatus:e=!0})=>{const[r,n]=C.useState(navigator.onLine),[o,a]=C.useState(!1),[i,l]=C.useState(!1);C.useEffect(()=>{const u=()=>{n(!0),a(!1),h()},m=()=>{n(!1),a(!0)},h=async()=>{try{!await M.checkConnectivity()&&navigator.onLine&&(n(!1),a(!0))}catch{navigator.onLine&&(n(!1),a(!0))}};window.addEventListener("online",u),window.addEventListener("offline",m),navigator.onLine?h():a(!0);const b=setInterval(()=>{r||h()},3e4);return()=>{window.removeEventListener("online",u),window.removeEventListener("offline",m),clearInterval(b)}},[r]);const c=async()=>{l(!0);try{await M.checkConnectivity()&&(n(!0),a(!1))}catch{}finally{l(!1)}};return t.jsxs(t.Fragment,{children:[t.jsx(Ga,{$show:o,children:t.jsxs(Ka,{children:[t.jsx("span",{children:"⚠ You are currently offline"}),t.jsx(Ja,{onClick:c,disabled:i,children:i?"Checking...":"Retry"})]})}),e&&t.jsx(Qa,{$isOnline:r,children:r?"Online":"Offline"})]})},Za={primary:L`
    .panel-header {
      background-color: ${e=>e.theme.colors.primary.neonCarrot};
    }

    .panel-content {
      border-color: ${e=>e.theme.colors.primary.neonCarrot};
    }
  `,secondary:L`
    .panel-header {
      background-color: ${e=>e.theme.colors.primary.lilac};
    }

    .panel-content {
      border-color: ${e=>e.theme.colors.primary.lilac};
    }
  `,accent:L`
    .panel-header {
      background-color: ${e=>e.theme.colors.primary.anakiwa};
    }

    .panel-content {
      border-color: ${e=>e.theme.colors.primary.anakiwa};
    }
  `,info:L`
    .panel-header {
      background-color: ${e=>e.theme.colors.primary.mariner};
    }

    .panel-content {
      border-color: ${e=>e.theme.colors.primary.mariner};
    }
  `},Ya={none:L`
    padding: 0;
  `,sm:L`
    padding: ${e=>e.theme.spacing.sm};
  `,md:L`
    padding: ${e=>e.theme.spacing.md};
  `,lg:L`
    padding: ${e=>e.theme.spacing.lg};
  `},Xa=s.div`
  display: flex;
  flex-direction: column;

  ${e=>Za[e.variant]}
`,ei=s.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.lcars.buttonRadius};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.inverse};
`,ti=s.div`
  background-color: ${e=>e.theme.colors.background};
  border: 1px solid;
  border-top: none;
  flex: 1;

  ${e=>Ya[e.padding]}
`,F=({children:e,title:r,variant:n="primary",padding:o="md",className:a})=>t.jsxs(Xa,{variant:n,className:a,children:[r&&t.jsx(ei,{className:"panel-header",children:r}),t.jsx(ti,{padding:o,className:"panel-content",children:e})]}),ri={primary:L`
    background-color: ${e=>e.theme.colors.primary.neonCarrot};
    color: ${e=>e.theme.colors.text.inverse};

    &:hover:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.goldenTanoi};
    }

    &:active:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.tanoi};
      box-shadow: ${e=>e.theme.shadows.glowStrong};
    }
  `,secondary:L`
    background-color: ${e=>e.theme.colors.primary.lilac};
    color: ${e=>e.theme.colors.text.inverse};

    &:hover:not(:disabled) {
      background-color: #DDA6DD;
    }

    &:active:not(:disabled) {
      background-color: #EEB3EE;
      box-shadow: 0 0 40px rgba(204, 153, 204, 0.5);
    }
  `,accent:L`
    background-color: ${e=>e.theme.colors.primary.anakiwa};
    color: ${e=>e.theme.colors.text.inverse};

    &:hover:not(:disabled) {
      background-color: #AAD6FF;
    }

    &:active:not(:disabled) {
      background-color: #BBE0FF;
      box-shadow: 0 0 40px rgba(153, 204, 255, 0.5);
    }
  `,info:L`
    background-color: ${e=>e.theme.colors.primary.mariner};
    color: ${e=>e.theme.colors.text.inverse};

    &:hover:not(:disabled) {
      background-color: #4477DD;
    }

    &:active:not(:disabled) {
      background-color: #5588EE;
      box-shadow: 0 0 40px rgba(51, 102, 204, 0.5);
    }
  `,warning:L`
    background-color: ${e=>e.theme.colors.primary.goldenTanoi};
    color: ${e=>e.theme.colors.text.inverse};

    &:hover:not(:disabled) {
      background-color: #FFD677;
    }

    &:active:not(:disabled) {
      background-color: #FFE088;
      box-shadow: 0 0 40px rgba(255, 204, 102, 0.5);
    }
  `,danger:L`
    background-color: ${e=>e.theme.colors.status.error};
    color: ${e=>e.theme.colors.text.inverse};

    &:hover:not(:disabled) {
      background-color: #FF6666;
    }

    &:active:not(:disabled) {
      background-color: #FF7777;
      box-shadow: 0 0 40px rgba(255, 85, 85, 0.5);
    }
  `,sidebar:L`
    background-color: ${e=>e.theme.colors.primary.neonCarrot};
    color: ${e=>e.theme.colors.text.inverse};
    border-radius: 0 9999px 9999px 0;

    &:hover:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.goldenTanoi};
    }

    &:active:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.tanoi};
      box-shadow: ${e=>e.theme.shadows.glowStrong};
    }
  `,"cap-left":L`
    background-color: ${e=>e.theme.colors.primary.neonCarrot};
    color: ${e=>e.theme.colors.text.inverse};
    border-radius: 9999px 0 0 9999px;

    &:hover:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.goldenTanoi};
    }

    &:active:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.tanoi};
      box-shadow: ${e=>e.theme.shadows.glowStrong};
    }
  `,"cap-right":L`
    background-color: ${e=>e.theme.colors.primary.neonCarrot};
    color: ${e=>e.theme.colors.text.inverse};
    border-radius: 0 9999px 9999px 0;

    &:hover:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.goldenTanoi};
    }

    &:active:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.tanoi};
      box-shadow: ${e=>e.theme.shadows.glowStrong};
    }
  `},ni={sm:L`
    height: 28px;
    padding: 0 ${e=>e.theme.spacing.md};
    font-size: ${e=>e.theme.typography.fontSize.sm};
  `,md:L`
    height: 40px;
    padding: 0 ${e=>e.theme.spacing.lg};
    font-size: ${e=>e.theme.typography.fontSize.md};
  `,lg:L`
    height: 56px;
    padding: 0 ${e=>e.theme.spacing.xl};
    font-size: ${e=>e.theme.typography.fontSize.lg};
  `},oi=s.button`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
  border: none;
  border-radius: ${e=>e.theme.lcars.buttonRadius};
  cursor: pointer;
  transition: all ${e=>e.theme.animation.fast} ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.theme.spacing.sm};
  white-space: nowrap;
  box-shadow: none;

  ${e=>ri[e.variant]}
  ${e=>ni[e.size]}

  &:disabled {
    background-color: ${e=>e.theme.colors.interactive.disabled};
    color: ${e=>e.theme.colors.text.muted};
    cursor: not-allowed;
    box-shadow: none;
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.colors.primary.tanoi};
    outline-offset: 2px;
  }
`,k=({children:e,variant:r="primary",size:n="md",disabled:o=!1,onClick:a,className:i,type:l="button"})=>t.jsx(oi,{variant:r,size:n,disabled:o,onClick:a,className:i,type:l,children:e}),si={1:L`
    font-size: ${e=>e.theme.typography.fontSize.xxxl};
  `,2:L`
    font-size: ${e=>e.theme.typography.fontSize.xxl};
  `,3:L`
    font-size: ${e=>e.theme.typography.fontSize.xl};
  `,4:L`
    font-size: ${e=>e.theme.typography.fontSize.lg};
  `,5:L`
    font-size: ${e=>e.theme.typography.fontSize.md};
  `,6:L`
    font-size: ${e=>e.theme.typography.fontSize.md};
  `},ai={neonCarrot:L`
    color: ${e=>e.theme.colors.primary.neonCarrot};
  `,tanoi:L`
    color: ${e=>e.theme.colors.primary.tanoi};
  `,lilac:L`
    color: ${e=>e.theme.colors.primary.lilac};
  `,anakiwa:L`
    color: ${e=>e.theme.colors.primary.anakiwa};
  `,mariner:L`
    color: ${e=>e.theme.colors.primary.mariner};
  `},ii={left:L`
    text-align: left;
  `,center:L`
    text-align: center;
  `,right:L`
    text-align: right;
  `},li={neonCarrot:"#FF9933",tanoi:"#FFCC99",lilac:"#CC99CC",anakiwa:"#99CCFF"},ci=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,di=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: ${e=>e.theme.typography.lineHeight.tight};
  margin: 0;

  ${e=>si[e.level]}
  ${e=>ai[e.color]}
  ${e=>ii[e.align]}
`,mi=s.div`
  width: 100%;
  height: 4px;
  background-color: ${e=>e.color};
  border-radius: 0;
`,I=({children:e,level:r=1,color:n="neonCarrot",align:o="left",withBar:a=!1,barColor:i="neonCarrot",className:l})=>{const c=`h${r}`,u=t.jsx(di,{as:c,level:r,color:n,align:o,className:l,children:e});return a?t.jsxs(ci,{children:[u,t.jsx(mi,{color:li[i]})]}):u},Vo=pe`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,hi=pe`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`,pi=s.div`
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 9999;
  max-width: 400px;
  width: 100%;
  animation: ${e=>e.show?Vo:hi} 0.3s ease-in-out;
  
  @media (max-width: 768px) {
    top: 60px;
    right: 10px;
    left: 10px;
    max-width: none;
  }
`,ui=s.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 80vh;
  overflow-y: auto;
`,gi=s.div`
  padding: 16px;
  border-left: 4px solid ${e=>{switch(e.type){case"maintenance":return e.theme.colors.primary.neonCarrot;case"warning":return e.theme.colors.status.warning;case"error":return e.theme.colors.status.error;default:return e.theme.colors.primary.anakiwa}}};
  background: ${e=>e.isRead?e.theme.colors.surface.dark:e.theme.colors.background};
  opacity: ${e=>e.isRead?.7:1};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>e.theme.colors.surface.medium};
  }
`,xi=s.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`,fi=s.div`
  font-weight: bold;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 14px;
`,yi=s.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.light};
  white-space: nowrap;
  margin-left: 8px;
`,bi=s.div`
  color: ${e=>e.theme.colors.text.light};
  font-size: 13px;
  line-height: 1.4;
`,ji=s.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`,$i=s.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: ${e=>e.theme.colors.status.error};
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  min-width: 20px;
  
  ${e=>e.count>99&&`
    border-radius: 10px;
    padding: 0 6px;
    width: auto;
  `}
`,vi=s.button`
  position: relative;
  background: transparent;
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.primary.anakiwa};
  padding: 8px 12px;
  cursor: pointer;
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    color: ${e=>e.theme.colors.primary.neonCarrot};
  }
  
  ${e=>e.$hasUnread&&`
    animation: ${pe`
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    `} 2s ease-in-out infinite;
  `}
`,wi=s.div`
  text-align: center;
  padding: 32px 16px;
  color: ${e=>e.theme.colors.text.light};
`,Ci=({className:e})=>{const[r,n]=C.useState([]),[o,a]=C.useState(!1),[i,l]=C.useState(!1),c=(r||[]).filter(d=>!d.read).length;C.useEffect(()=>{u();const d=setInterval(u,3e4);return()=>clearInterval(d)},[]);const u=async()=>{try{l(!0);const d=await M.getNotifications();n(d)}catch(d){console.error("Failed to load notifications:",d)}finally{l(!1)}},m=()=>{a(!o)},h=async d=>{if(!d.read)try{await M.markNotificationAsRead(d.id),n(y=>y.map(p=>p.id===d.id?{...p,read:!0}:p))}catch(y){console.error("Failed to mark notification as read:",y)}},b=async()=>{const d=(r||[]).filter(y=>!y.read);try{await Promise.all(d.map(y=>M.markNotificationAsRead(y.id))),n(y=>y.map(p=>({...p,read:!0})))}catch(y){console.error("Failed to mark all notifications as read:",y)}},$=d=>{const y=new Date(d),x=new Date().getTime()-y.getTime(),j=Math.floor(x/6e4),f=Math.floor(j/60),w=Math.floor(f/24);return j<1?"Just now":j<60?`${j}m ago`:f<24?`${f}h ago`:w<7?`${w}d ago`:y.toLocaleDateString()},g=d=>{switch(d){case"maintenance_due":return"🔧";case"system":return"ℹ️";case"warning":return"⚠️";case"error":return"❌";default:return"📢"}};return t.jsxs("div",{className:e,children:[t.jsxs(vi,{onClick:m,$hasUnread:c>0,children:["Alerts",c>0&&t.jsx($i,{count:c,children:c>99?"99+":c})]}),o&&t.jsx(pi,{show:o,children:t.jsx(F,{children:t.jsxs("div",{style:{padding:"16px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsx(I,{level:3,children:"System Alerts"}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[c>0&&t.jsx(k,{size:"sm",variant:"secondary",onClick:b,children:"Mark All Read"}),t.jsx(k,{size:"sm",variant:"secondary",onClick:m,children:"Close"})]})]}),i?t.jsx("div",{style:{textAlign:"center",padding:"20px"},children:"Loading notifications..."}):r.length===0?t.jsxs(wi,{children:[t.jsx("div",{style:{fontSize:"32px",marginBottom:"8px"},children:"📭"}),t.jsx("div",{children:"No notifications"})]}):t.jsx(ui,{children:r.map(d=>t.jsxs(gi,{type:d.type,isRead:d.read,onClick:()=>h(d),children:[t.jsxs(xi,{children:[t.jsxs(fi,{children:[g(d.type)," ",d.title]}),t.jsx(yi,{children:$(d.createdAt)})]}),t.jsx(bi,{children:d.message}),d.entityType&&d.entityId&&t.jsx(ji,{children:t.jsx(k,{size:"sm",variant:"primary",onClick:()=>{const y=d.entityType==="maintenance"?`/maintenance/events/${d.entityId}`:`/${d.entityType}/${d.entityId}`;window.location.href=y},children:"View Details"})})]},d.id))})]})})})]})};s.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10001;
  padding: 16px 20px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 400px;
  animation: ${Vo} 0.3s ease-in-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  
  background: ${e=>{switch(e.type){case"success":return"#51cf66";case"error":return"#ff6b6b";case"warning":return"#ffd43b";case"info":return"#339af0";default:return"#339af0"}}};
  
  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
    left: 10px;
    max-width: none;
  }
`;s.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  padding: 0;
  margin-left: auto;
  
  &:hover {
    opacity: 0.7;
  }
`;const Qr="200px",Rt="60px",bn="60px",jn="40px",qt="30px",$n="3px",Si="44px",je="768px",ki=pe`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Ti=pe`
  from { transform: translateX(-20px); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
`,Ai=s.div`
  min-height: 100vh;
  display: grid;
  background: ${e=>e.theme.colors.background};
  grid-template-columns: ${Qr} 1fr;
  grid-template-rows: ${bn} 1fr ${jn};
  grid-template-areas:
    "sidebar header"
    "sidebar content"
    "sidebar footer";
  gap: 0;
  animation: ${ki} 0.6s ease;

  @media (max-width: ${je}) {
    grid-template-columns: 1fr;
    grid-template-rows: ${bn} 1fr ${jn};
    grid-template-areas:
      "header"
      "content"
      "footer";
  }
`,Ei=s.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  gap: ${$n};
  padding-right: ${$n};
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: ${je}) {
    display: none;
  }
`,Li=s.div`
  width: ${Qr};
  height: ${Rt};
  background: ${e=>e.theme.colors.primary.tanoi};
  position: relative;
  flex-shrink: 0;
  border-radius: 32px 0 0 0;

  /* Quarter-circle cutout — bottom-right corner */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: ${Rt};
    height: ${qt};
    background: ${e=>e.theme.colors.background};
    border-radius: 0 24px 0 0;
  }
`,Fi=s.div`
  width: ${Qr};
  height: ${Rt};
  background: ${e=>e.theme.colors.primary.lilac};
  position: relative;
  flex-shrink: 0;
  border-radius: 0 0 0 32px;
  margin-top: auto;

  /* Quarter-circle cutout — top-right corner */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: ${Rt};
    height: ${qt};
    background: ${e=>e.theme.colors.background};
    border-radius: 0 0 24px 0;
  }
`,pt=["tanoi","anakiwa","lilac","goldenTanoi","neonCarrot","paleCanary","mariner","anakiwa","lilac","tanoi","goldenTanoi"],Di=pe`
  0%, 100% { box-shadow: 0 0 8px currentColor, inset 0 0 8px rgba(255,255,255,0.15); }
  50%      { box-shadow: 0 0 18px currentColor, inset 0 0 12px rgba(255,255,255,0.25); }
`,zi=s.button`
  width: 100%;
  height: ${Si};
  flex-shrink: 0;
  border: none;
  cursor: pointer;
  background: ${e=>e.$color};
  color: ${e=>e.theme.colors.text.inverse};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  text-align: right;
  padding: 0 18px 0 0;
  border-radius: 0 24px 24px 0;
  transition: filter 0.15s ease, transform 0.1s ease;
  position: relative;
  animation: ${Ti} 0.4s ease backwards;

  ${e=>e.$isActive&&L`
    filter: brightness(1.35);
    animation: ${Di} 2s ease-in-out infinite;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 4px;
      bottom: 4px;
      width: 4px;
      background: #fff;
      border-radius: 0 2px 2px 0;
    }
  `}

  &:hover:not(:disabled) {
    filter: brightness(1.25);
    transform: translateX(3px);
  }

  &:active:not(:disabled) {
    filter: brightness(1.4);
    transform: translateX(1px);
  }
`,Ni=s.div`
  width: 60%;
  height: 3px;
  background: ${e=>e.$color};
  border-radius: 0 2px 2px 0;
  flex-shrink: 0;
  opacity: 0.6;
`,Ri=s.header`
  grid-area: header;
  background: ${e=>e.theme.colors.primary.tanoi};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px 0 16px;
  position: relative;

  /* Left notch — connects visually to the elbow cutout */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 24px;
    height: ${qt};
    background: ${e=>e.theme.colors.background};
    border-radius: 0 12px 0 0;
  }

  @media (max-width: ${je}) {
    border-radius: 0;
    justify-content: center;
    &::before { display: none; }
  }
`,Ii=s.h1`
  color: ${e=>e.theme.colors.text.inverse};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.extraWide};
  margin: 0;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.2s;

  &:hover { opacity: 0.8; }

  @media (max-width: ${je}) {
    font-size: ${e=>e.theme.typography.fontSize.lg};
    letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  }
`,Mi=s.span`
  color: ${e=>e.theme.colors.text.inverse};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  margin-right: auto;
  padding-left: 40px;
  opacity: 0.75;

  @media (max-width: ${je}) {
    display: none;
  }
`,Bi=s.main`
  grid-area: content;
  background: ${e=>e.theme.colors.background};
  overflow-y: auto;
  padding: ${e=>e.theme.spacing.lg};
  position: relative;

  /* Subtle inner border glow on left edge */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: ${e=>e.theme.colors.primary.eggplant};
    opacity: 0.4;
  }

  @media (max-width: ${je}) {
    padding: ${e=>e.theme.spacing.md};
    &::before { display: none; }
  }
`,Pi=s.footer`
  grid-area: footer;
  background: ${e=>e.theme.colors.primary.lilac};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px 0 16px;
  position: relative;

  /* Left notch — mirrors header */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: ${qt};
    background: ${e=>e.theme.colors.background};
    border-radius: 0 0 12px 0;
  }

  @media (max-width: ${je}) {
    border-radius: 0;
    justify-content: center;
    &::before { display: none; }
  }
`,Oi=s.span`
  color: ${e=>e.theme.colors.text.inverse};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  opacity: 0.8;
`,Ui=s.div`
  display: none;

  @media (max-width: ${je}) {
    display: ${e=>e.$open?"flex":"none"};
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.92);
    z-index: ${e=>e.theme.zIndex.modal};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 24px;
  }
`,qi=s.button`
  width: 80%;
  max-width: 320px;
  height: 48px;
  border: none;
  cursor: pointer;
  background: ${e=>e.$isActive?e.$color:`${e.$color}44`};
  color: ${e=>e.$isActive?e.theme.colors.text.inverse:e.$color};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  border-radius: 0 24px 24px 0;
  transition: background 0.15s, transform 0.1s;

  &:hover {
    filter: brightness(1.2);
    transform: translateX(4px);
  }
`,Hi=s.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: ${e=>e.theme.colors.primary.neonCarrot};
  color: ${e=>e.theme.colors.text.inverse};
  border: none;
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 24px;
  cursor: pointer;
`,Vi=s.button`
  display: none;
  @media (max-width: ${je}) {
    display: block;
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: 2px solid ${e=>e.theme.colors.text.inverse};
    color: ${e=>e.theme.colors.text.inverse};
    font-family: ${e=>e.theme.typography.fontFamily.primary};
    font-size: ${e=>e.theme.typography.fontSize.sm};
    font-weight: ${e=>e.theme.typography.fontWeight.bold};
    text-transform: uppercase;
    padding: 6px 12px;
    border-radius: 12px;
    cursor: pointer;
  }
`,Wi=s.div`
  position: absolute;
  top: 4px;
  right: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 2;
`,vn=[{label:"Dashboard",path:"/"},{label:"Vessels",path:"/boats"},{label:"Trip Log",path:"/trips"},{label:"Notes",path:"/notes"},{label:"To-Do Lists",path:"/todos"},{label:"Maintenance",path:"/maintenance"},{label:"Navigation",path:"/map"},{label:"Reports",path:"/reports"},{label:"Calendar",path:"/calendar"},{label:"Photos",path:"/photos"},{label:"Settings",path:"/settings"}];function Gi(){const e=new Date,r=e.getFullYear(),n=new Date(r,0,1).getTime(),o=(e.getTime()-n)/(365.25*864e5)*1e3;return`${r-323}.${o.toFixed(1)}`}const Ki=({children:e})=>{const r=Y(),n=ms(),[o,a]=C.useState(!1),i=m=>m==="/"?n.pathname==="/"||n.pathname==="/dashboard":n.pathname.startsWith(m),l=m=>{r(m),a(!1)},c=Gi(),u=["#664466","#3366CC","#006699","#CC99CC","#FFCC66"];return t.jsxs(Ai,{children:[t.jsx(_a,{}),t.jsxs(Ei,{children:[t.jsx(Li,{}),vn.map((m,h)=>{const b=pt[h%pt.length],g={tanoi:"#FFCC99",goldenTanoi:"#FFCC66",neonCarrot:"#FF9933",lilac:"#CC99CC",anakiwa:"#99CCFF",mariner:"#3366CC",paleCanary:"#FFFF99",eggplant:"#664466",bahamBlue:"#006699"}[b]||"#FFCC99";return t.jsxs(Me.Fragment,{children:[h>0&&t.jsx(Ni,{$color:u[h%u.length]}),t.jsx(zi,{$color:g,$isActive:i(m.path),onClick:()=>l(m.path),style:{animationDelay:`${h*50}ms`},"aria-current":i(m.path)?"page":void 0,children:m.label})]},m.path)}),t.jsx(Fi,{})]}),t.jsxs(Ri,{children:[t.jsx(Vi,{onClick:()=>a(!0),children:"Menu"}),t.jsxs(Mi,{children:["Stardate ",c]}),t.jsx(Ii,{onClick:()=>l("/"),children:"Captain's Log"}),t.jsx(Wi,{children:t.jsx(Ci,{})})]}),t.jsx(Bi,{children:e}),t.jsx(Pi,{children:t.jsx(Oi,{children:"LCARS v47.3 — Library Computer Access/Retrieval System"})}),t.jsxs(Ui,{$open:o,children:[t.jsx(Hi,{onClick:()=>a(!1),children:"Close"}),vn.map((m,h)=>{const $={tanoi:"#FFCC99",goldenTanoi:"#FFCC66",neonCarrot:"#FF9933",lilac:"#CC99CC",anakiwa:"#99CCFF",mariner:"#3366CC",paleCanary:"#FFFF99",eggplant:"#664466",bahamBlue:"#006699"}[pt[h%pt.length]]||"#FFCC99";return t.jsx(qi,{$color:$,$isActive:i(m.path),onClick:()=>l(m.path),children:m.label},m.path)})]})]})},Ji=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: ${e=>e.theme.spacing.xl};
  text-align: center;
`,Qi=s.div`
  color: ${e=>e.theme.colors.status.error};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  margin: ${e=>e.theme.spacing.lg} 0;
`;s.details`
  margin-top: ${e=>e.theme.spacing.lg};
  padding: ${e=>e.theme.spacing.md};
  background: ${e=>e.theme.colors.surface.dark};
  border-radius: 4px;
  border: 1px solid ${e=>e.theme.colors.status.error};
  max-width: 600px;
  
  summary {
    cursor: pointer;
    color: ${e=>e.theme.colors.status.error};
    font-weight: bold;
    margin-bottom: ${e=>e.theme.spacing.sm};
  }
  
  pre {
    font-size: ${e=>e.theme.typography.fontSize.sm};
    color: ${e=>e.theme.colors.text.secondary};
    white-space: pre-wrap;
    word-break: break-word;
    margin: 0;
  }
`;const _i=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.xl};
`;class Zi extends C.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,n){console.error("Error caught by boundary:",r,n),this.setState({error:r,errorInfo:n}),console.error("Production error:",{error:r.message,stack:r.stack,componentStack:n.componentStack})}handleReload=()=>{window.location.reload()};handleGoHome=()=>{window.location.href="/"};handleRetry=()=>{this.setState({hasError:!1,error:void 0,errorInfo:void 0})};render(){return this.state.hasError?this.props.fallback?this.props.fallback:t.jsx(Ji,{children:t.jsxs(F,{children:[t.jsx(I,{level:1,children:"System Error"}),t.jsx(Qi,{children:"An unexpected error has occurred in the application."}),t.jsx("p",{children:"The error has been logged and will be investigated. You can try reloading the page or returning to the dashboard."}),t.jsxs(_i,{children:[t.jsx(k,{onClick:this.handleRetry,variant:"primary",children:"Try Again"}),t.jsx(k,{onClick:this.handleReload,variant:"secondary",children:"Reload Page"}),t.jsx(k,{onClick:this.handleGoHome,variant:"secondary",children:"Go to Dashboard"})]}),!1]})}):this.props.children}}const Yi={neonCarrot:L`
    background-color: ${e=>e.theme.colors.primary.neonCarrot};

    &::before {
      background-color: ${e=>e.theme.colors.background};
    }
  `,tanoi:L`
    background-color: ${e=>e.theme.colors.primary.tanoi};

    &::before {
      background-color: ${e=>e.theme.colors.background};
    }
  `,lilac:L`
    background-color: ${e=>e.theme.colors.primary.lilac};

    &::before {
      background-color: ${e=>e.theme.colors.background};
    }
  `,anakiwa:L`
    background-color: ${e=>e.theme.colors.primary.anakiwa};

    &::before {
      background-color: ${e=>e.theme.colors.background};
    }
  `,mariner:L`
    background-color: ${e=>e.theme.colors.primary.mariner};

    &::before {
      background-color: ${e=>e.theme.colors.background};
    }
  `},Xi=s.div`
  position: relative;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  flex-shrink: 0;

  ${e=>Yi[e.color]}

  /* Create the quarter-circle cutout using a pseudo-element */
  &::before {
    content: '';
    position: absolute;
    width: ${e=>e.size-e.armWidth}px;
    height: ${e=>e.size-e.armWidth}px;
  }

  /* Position the cutout based on elbow orientation */
  ${e=>{switch(e.position){case"top-left":return L`
          &::before {
            bottom: 0;
            right: 0;
            border-radius: 0 0 0 ${e.size-e.armWidth}px;
          }
        `;case"top-right":return L`
          &::before {
            bottom: 0;
            left: 0;
            border-radius: 0 0 ${e.size-e.armWidth}px 0;
          }
        `;case"bottom-left":return L`
          &::before {
            top: 0;
            right: 0;
            border-radius: 0 ${e.size-e.armWidth}px 0 0;
          }
        `;case"bottom-right":return L`
          &::before {
            top: 0;
            left: 0;
            border-radius: ${e.size-e.armWidth}px 0 0 0;
          }
        `}}}
`,ut=({position:e,size:r=60,color:n="neonCarrot",armWidth:o=30,className:a})=>t.jsx(Xi,{position:e,size:r,armWidth:o,color:n,className:a,"aria-hidden":"true"}),el={neonCarrot:"#FF9933",tanoi:"#FFCC99",goldenTanoi:"#FFCC66",lilac:"#CC99CC",anakiwa:"#99CCFF",mariner:"#3366CC",paleCanary:"#FFFF99"},tl=s.div`
  display: flex;
  flex-direction: ${e=>e.orientation==="horizontal"?"row":"column"};
  flex-shrink: 0;
  width: ${e=>typeof e.width=="number"?`${e.width}px`:e.width};
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height};
  gap: ${e=>e.isSegmented?e.theme.lcars.gap:"0"};
  border-radius: 0;
  overflow: hidden;
`,rl=s.div`
  background-color: ${e=>e.color};
  flex: ${e=>e.flex||1};
  border-radius: 0;
`,gt=({width:e="100%",height:r="30px",colors:n=["neonCarrot"],orientation:o="horizontal",className:a})=>{const i=o==="vertical"&&e==="100%"?"30px":e,l=o==="horizontal"&&r==="30px"?"30px":r,c=n.length>1;return t.jsx(tl,{width:i,height:l,orientation:o,isSegmented:c,className:a,"aria-hidden":"true",children:n.map((u,m)=>t.jsx(rl,{color:el[u],flex:1},m))})},nl=s.div`
  display: flex;
  flex-direction: column;
  width: ${e=>typeof e.width=="number"?`${e.width}px`:e.width};
  gap: ${e=>e.gap};
  min-height: 100%;

  > * {
    width: 100%;
    flex-shrink: 0;
  }
`,oe=({children:e,width:r="200px",gap:n="3px",className:o})=>t.jsx(nl,{width:r,gap:n,className:o,children:e}),ol={sm:L`
    .data-label {
      font-size: ${e=>e.theme.typography.fontSize.xs};
    }
    .data-value {
      font-size: ${e=>e.theme.typography.fontSize.md};
    }
    .data-unit {
      font-size: ${e=>e.theme.typography.fontSize.sm};
    }
  `,md:L`
    .data-label {
      font-size: ${e=>e.theme.typography.fontSize.sm};
    }
    .data-value {
      font-size: ${e=>e.theme.typography.fontSize.lg};
    }
    .data-unit {
      font-size: ${e=>e.theme.typography.fontSize.md};
    }
  `,lg:L`
    .data-label {
      font-size: ${e=>e.theme.typography.fontSize.md};
    }
    .data-value {
      font-size: ${e=>e.theme.typography.fontSize.xl};
    }
    .data-unit {
      font-size: ${e=>e.theme.typography.fontSize.lg};
    }
  `},sl={neonCarrot:L`
    color: ${e=>e.theme.colors.primary.neonCarrot};
  `,lilac:L`
    color: ${e=>e.theme.colors.primary.lilac};
  `,anakiwa:L`
    color: ${e=>e.theme.colors.primary.anakiwa};
  `,mariner:L`
    color: ${e=>e.theme.colors.primary.mariner};
  `,success:L`
    color: ${e=>e.theme.colors.status.success};
  `},al={neonCarrot:"#FF9933",lilac:"#CC99CC",anakiwa:"#99CCFF",success:"#55FF55",error:"#FF5555"},il=s.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing.xs};
  background-color: transparent;

  ${e=>ol[e.size]}
`,ll=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.normal};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  color: ${e=>e.theme.colors.primary.lilac};
  opacity: 0.8;
`,cl=s.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
`,dl=s.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  box-shadow: 0 0 8px ${e=>e.color};
  flex-shrink: 0;
`,ml=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  line-height: ${e=>e.theme.typography.lineHeight.tight};

  ${e=>sl[e.valueColor]}
`,hl=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.normal};
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
`,A=({label:e,value:r,unit:n,size:o="md",valueColor:a="neonCarrot",showIndicator:i=!1,indicatorColor:l="neonCarrot",className:c})=>t.jsxs(il,{size:o,className:c,children:[t.jsx(ll,{className:"data-label",children:e}),t.jsxs(cl,{children:[i&&t.jsx(dl,{color:al[l]}),t.jsx(ml,{className:"data-value",valueColor:a,children:r}),n&&t.jsx(hl,{className:"data-unit",children:n})]})]}),pl={info:L`
    background-color: ${e=>e.theme.colors.primary.anakiwa};
    border-color: #AAD6FF;
    color: ${e=>e.theme.colors.text.inverse};
  `,success:L`
    background-color: ${e=>e.theme.colors.status.success};
    border-color: #88FF88;
    color: ${e=>e.theme.colors.text.inverse};
  `,warning:L`
    background-color: ${e=>e.theme.colors.status.warning};
    border-color: #FFFF88;
    color: ${e=>e.theme.colors.text.inverse};
  `,error:L`
    background-color: ${e=>e.theme.colors.status.error};
    border-color: #FF8888;
    color: ${e=>e.theme.colors.text.inverse};
  `},ul=s.div.withConfig({shouldForwardProp:e=>!["type","blink"].includes(e)})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>e.theme.spacing.md};
  border: 2px solid;
  border-radius: ${e=>e.theme.borderRadius.lg};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;

  ${e=>pl[e.type]}

  ${e=>e.blink&&L`
    animation: lcars-blink 1s infinite;
  `}
`,gl=s.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
`,xl=s.div`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,fl=s.div`
  flex: 1;
`,yl=s.button`
  background: none;
  border: none;
  color: inherit;
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  cursor: pointer;
  padding: ${e=>e.theme.spacing.xs};
  border-radius: ${e=>e.theme.borderRadius.sm};
  transition: background-color ${e=>e.theme.animation.fast} ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }
`,bl=e=>{switch(e){case"info":return"ℹ";case"success":return"✓";case"warning":return"⚠";case"error":return"✗";default:return"ℹ"}},he=({children:e,type:r="info",blink:n=!1,dismissible:o=!1,onDismiss:a,className:i})=>t.jsxs(ul,{type:r,blink:n,className:i,children:[t.jsxs(gl,{children:[t.jsx(xl,{children:bl(r)}),t.jsx(fl,{children:e})]}),o&&a&&t.jsx(yl,{onClick:a,"aria-label":"Dismiss alert",children:"×"})]}),jl={neonCarrot:L`
    .progress-fill {
      background: linear-gradient(90deg,
        ${e=>e.theme.colors.primary.neonCarrot} 0%,
        ${e=>e.theme.colors.primary.goldenTanoi} 100%
      );
    }
    .progress-text {
      color: ${e=>e.theme.colors.primary.neonCarrot};
    }
  `,lilac:L`
    .progress-fill {
      background: linear-gradient(90deg,
        ${e=>e.theme.colors.primary.lilac} 0%,
        #DDA6DD 100%
      );
    }
    .progress-text {
      color: ${e=>e.theme.colors.primary.lilac};
    }
  `,anakiwa:L`
    .progress-fill {
      background: linear-gradient(90deg,
        ${e=>e.theme.colors.primary.anakiwa} 0%,
        #AAD6FF 100%
      );
    }
    .progress-text {
      color: ${e=>e.theme.colors.primary.anakiwa};
    }
  `,success:L`
    .progress-fill {
      background: linear-gradient(90deg,
        ${e=>e.theme.colors.status.success} 0%,
        #88FF88 100%
      );
    }
    .progress-text {
      color: ${e=>e.theme.colors.status.success};
    }
  `},$l={sm:L`
    .chart-title {
      font-size: ${e=>e.theme.typography.fontSize.sm};
      margin-bottom: ${e=>e.theme.spacing.sm};
    }
    .progress-bar {
      height: 12px;
    }
    .progress-stats {
      font-size: ${e=>e.theme.typography.fontSize.xs};
      margin-top: ${e=>e.theme.spacing.sm};
    }
  `,md:L`
    .chart-title {
      font-size: ${e=>e.theme.typography.fontSize.md};
      margin-bottom: ${e=>e.theme.spacing.md};
    }
    .progress-bar {
      height: 16px;
    }
    .progress-stats {
      font-size: ${e=>e.theme.typography.fontSize.sm};
      margin-top: ${e=>e.theme.spacing.md};
    }
  `,lg:L`
    .chart-title {
      font-size: ${e=>e.theme.typography.fontSize.lg};
      margin-bottom: ${e=>e.theme.spacing.lg};
    }
    .progress-bar {
      height: 20px;
    }
    .progress-stats {
      font-size: ${e=>e.theme.typography.fontSize.md};
      margin-top: ${e=>e.theme.spacing.lg};
    }
  `},vl=s.div`
  ${e=>jl[e.color]}
  ${e=>$l[e.size]}
`,wl=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${e=>e.theme.colors.text.primary};
`,Cl=s.div`
  background-color: ${e=>e.theme.colors.surface.light};
  border-radius: ${e=>e.theme.borderRadius.pill};
  overflow: hidden;
  position: relative;
  border: 1px solid ${e=>e.theme.colors.surface.light};
`,Sl=s.div`
  height: 100%;
  width: ${e=>Math.min(e.progress,100)}%;
  transition: width 0.5s ease-in-out;
  border-radius: ${e=>e.theme.borderRadius.pill};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 2px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 0 ${e=>e.theme.borderRadius.pill} ${e=>e.theme.borderRadius.pill} 0;
  }
`,kl=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  color: ${e=>e.theme.colors.text.secondary};
`,wn=s.span`
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,It=({title:e,current:r,target:n,unit:o="",color:a="neonCarrot",size:i="md",showPercentage:l=!0,className:c})=>{const u=n>0?r/n*100:0,m=Math.round(u),h=r>=n;return t.jsxs(vl,{color:a,size:i,className:c,children:[t.jsx(wl,{className:"chart-title",children:e}),t.jsx(Cl,{children:t.jsx(Sl,{className:"progress-fill",progress:u})}),t.jsxs(kl,{className:"progress-stats",children:[t.jsxs("div",{children:[t.jsx(wn,{className:"progress-text",children:r}),o&&` ${o}`," / ",n,o&&` ${o}`]}),l&&t.jsxs("div",{className:"progress-text",children:[t.jsxs(wn,{children:[m,"%"]}),h&&" ✓"]})]})]})},Tl={neonCarrot:L`
    .estimate-value {
      color: ${e=>e.theme.colors.primary.neonCarrot};
    }
    .estimate-border {
      border-color: ${e=>e.theme.colors.primary.neonCarrot};
    }
  `,lilac:L`
    .estimate-value {
      color: ${e=>e.theme.colors.primary.lilac};
    }
    .estimate-border {
      border-color: ${e=>e.theme.colors.primary.lilac};
    }
  `,anakiwa:L`
    .estimate-value {
      color: ${e=>e.theme.colors.primary.anakiwa};
    }
    .estimate-border {
      border-color: ${e=>e.theme.colors.primary.anakiwa};
    }
  `,success:L`
    .estimate-value {
      color: ${e=>e.theme.colors.status.success};
    }
    .estimate-border {
      border-color: ${e=>e.theme.colors.status.success};
    }
  `},Al={sm:L`
    .estimate-title {
      font-size: ${e=>e.theme.typography.fontSize.xs};
    }
    .estimate-value {
      font-size: ${e=>e.theme.typography.fontSize.md};
    }
    .estimate-subtitle {
      font-size: ${e=>e.theme.typography.fontSize.xs};
    }
    padding: ${e=>e.theme.spacing.sm};
  `,md:L`
    .estimate-title {
      font-size: ${e=>e.theme.typography.fontSize.sm};
    }
    .estimate-value {
      font-size: ${e=>e.theme.typography.fontSize.lg};
    }
    .estimate-subtitle {
      font-size: ${e=>e.theme.typography.fontSize.sm};
    }
    padding: ${e=>e.theme.spacing.md};
  `,lg:L`
    .estimate-title {
      font-size: ${e=>e.theme.typography.fontSize.md};
    }
    .estimate-value {
      font-size: ${e=>e.theme.typography.fontSize.xl};
    }
    .estimate-subtitle {
      font-size: ${e=>e.theme.typography.fontSize.md};
    }
    padding: ${e=>e.theme.spacing.lg};
  `},El=s.div`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid;
  border-radius: ${e=>e.theme.borderRadius.lg};
  text-align: center;
  position: relative;

  ${e=>Tl[e.color]}
  ${e=>Al[e.size]}

  ${e=>e.isComplete&&L`
    .estimate-value {
      color: ${r=>r.theme.colors.status.success};
    }
    .estimate-border {
      border-color: ${r=>r.theme.colors.status.success};
    }

    &::after {
      content: '✓ COMPLETE';
      position: absolute;
      top: 8px;
      right: 8px;
      font-size: ${r=>r.theme.typography.fontSize.xs};
      color: ${r=>r.theme.colors.status.success};
      font-weight: ${r=>r.theme.typography.fontWeight.bold};
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  `}
`,Ll=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: ${e=>e.theme.spacing.sm};
`,Jt=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  line-height: ${e=>e.theme.typography.lineHeight.tight};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,Qt=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,_t=({title:e,estimatedDate:r,daysRemaining:n,isComplete:o=!1,color:a="neonCarrot",size:i="md",className:l})=>{const c=m=>{try{return new Date(m).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return"Unknown"}},u=m=>{if(m<=0)return"Goal Achieved";if(m===1)return"1 Day";if(m<30)return`${m} Days`;if(m<365){const b=Math.round(m/30);return b===1?"1 Month":`${b} Months`}const h=Math.round(m/365);return h===1?"1 Year":`${h} Years`};return t.jsxs(El,{color:a,size:i,isComplete:o,className:`estimate-border ${l||""}`,children:[t.jsx(Ll,{className:"estimate-title",children:e}),o?t.jsxs(t.Fragment,{children:[t.jsx(Jt,{className:"estimate-value",children:"ACHIEVED"}),t.jsx(Qt,{className:"estimate-subtitle",children:"Goal Complete"})]}):t.jsxs(t.Fragment,{children:[r&&t.jsxs(t.Fragment,{children:[t.jsx(Jt,{className:"estimate-value",children:c(r)}),t.jsx(Qt,{className:"estimate-subtitle",children:"Estimated Completion"})]}),n!==void 0&&t.jsxs(t.Fragment,{children:[t.jsx(Jt,{className:"estimate-value",children:u(n)}),t.jsx(Qt,{className:"estimate-subtitle",children:"Remaining"})]})]})]})},re={all:["boats"],lists:()=>[...re.all,"list"],list:e=>[...re.lists(),{filters:e}],details:()=>[...re.all,"detail"],detail:e=>[...re.details(),e]},te=()=>Z({queryKey:re.lists(),queryFn:()=>M.getBoats()}),Fl=e=>Z({queryKey:re.detail(e),queryFn:()=>M.getBoat(e),enabled:!!e}),Dl=()=>{const e=G();return Q({mutationFn:r=>M.createBoat(r),onSuccess:()=>{e.invalidateQueries({queryKey:re.lists()})}})},zl=()=>{const e=G();return Q({mutationFn:({id:r,data:n})=>M.updateBoat(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:re.detail(n)}),e.invalidateQueries({queryKey:re.lists()})}})},Wo=()=>{const e=G();return Q({mutationFn:({id:r,enabled:n})=>M.toggleBoatStatus(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:re.detail(n)}),e.invalidateQueries({queryKey:re.lists()})}})},Go=()=>{const e=G();return Q({mutationFn:r=>M.setActiveBoat(r),onSuccess:()=>{e.invalidateQueries({queryKey:re.lists()})}})},me={all:["trips"],lists:()=>[...me.all,"list"],list:e=>[...me.lists(),{filters:e}],details:()=>[...me.all,"detail"],detail:e=>[...me.details(),e]},Ae=e=>Z({queryKey:me.list(e||{}),queryFn:()=>M.getTrips(e)}),Ko=e=>Z({queryKey:me.detail(e),queryFn:()=>M.getTrip(e),enabled:!!e}),Nl=()=>{const e=G();return Q({mutationFn:({id:r,data:n})=>M.updateTrip(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:me.detail(n)}),e.invalidateQueries({queryKey:me.lists()})}})},Rl=()=>{const e=G();return Q({mutationFn:({tripId:r,data:n})=>M.addManualData(r,n),onSuccess:(r,{tripId:n})=>{e.invalidateQueries({queryKey:me.detail(n)}),e.invalidateQueries({queryKey:me.lists()})}})},Jo={all:["license"],progress:()=>[...Jo.all,"progress"]},Qo=()=>Z({queryKey:Jo.progress(),queryFn:()=>M.getLicenseProgress(),staleTime:5*60*1e3}),Il=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.lg};
  min-height: calc(100vh - 200px);
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    flex-direction: column;
  }
`,Ml=s.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,Bl=s.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Pl=s.img`
  height: 40px;
  width: auto;
  filter: drop-shadow(0 0 5px ${e=>e.theme.colors.primary.neonCarrot}40);
`,Ol=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Ul=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.lg};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,ql=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>e.theme.spacing.sm};
  border-bottom: 1px solid ${e=>e.theme.colors.surface.light};
  
  &:last-child {
    border-bottom: none;
  }
`,Hl=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,Vl=s.span`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Wl=s.span`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,Gl=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  flex-wrap: wrap;
`,Kl=s.div`
  width: 100%;
  height: 8px;
  background-color: ${e=>e.theme.colors.surface.light};
  border-radius: ${e=>e.theme.borderRadius.pill};
  overflow: hidden;
  margin-top: ${e=>e.theme.spacing.sm};

  &::after {
    content: '';
    display: block;
    width: ${e=>Math.min(e.progress,100)}%;
    height: 100%;
    background-color: ${e=>e.theme.colors.primary.neonCarrot};
    transition: width ${e=>e.theme.animation.normal} ease;
  }
`,Jl=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${e=>e.theme.spacing.xs};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
`,Zt=()=>{const{data:e,isLoading:r,error:n}=te(),{data:o,isLoading:a,error:i}=Ae(),{data:l,isLoading:c,error:u}=Qo(),m=(e==null?void 0:e.filter(y=>y.enabled))||[],h=(o==null?void 0:o.slice(0,5))||[],b=(o==null?void 0:o.length)||0,$=y=>new Date(y).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),g=y=>{const p=Math.floor(y/3600),x=Math.floor(y%3600/60);return`${p}h ${x}m`},d=(y,p)=>Math.min(y/p*100,100);return t.jsxs(Il,{children:[t.jsxs(oe,{width:"250px",children:[t.jsx(ut,{position:"top-left",size:60}),t.jsx(gt,{height:20,colors:["neonCarrot"]}),t.jsxs(F,{title:"System Status",variant:"primary",children:[t.jsx(A,{label:"Interface Status",value:"ONLINE",valueColor:"success",size:"sm"}),t.jsx(A,{label:"Active Boats",value:r?"...":m.length.toString(),valueColor:"neonCarrot",size:"sm"}),t.jsx(A,{label:"Total Trips",value:a?"...":b.toString(),valueColor:"anakiwa",size:"sm"})]}),t.jsx(gt,{height:20,colors:["lilac"]}),t.jsxs(Gl,{children:[t.jsx(k,{size:"sm",variant:"primary",children:"New Trip"}),t.jsx(k,{size:"sm",variant:"secondary",children:"Add Boat"})]}),t.jsx(ut,{position:"bottom-left",size:60,color:"neonCarrot"})]}),t.jsxs(Ml,{children:[t.jsxs(Bl,{children:[t.jsx(ut,{position:"top-right",size:120,color:"lilac"}),t.jsx(gt,{width:"100%"}),t.jsx(Pl,{src:"/assets/captains-log-logo.png",alt:"Captain's Log"}),t.jsx(I,{level:1,children:"Captain's Log - Command Center"})]}),(n||i||u)&&t.jsx(he,{type:"error",children:"Unable to load dashboard data. Check your connection and try again."}),t.jsxs(Ol,{children:[t.jsx(F,{title:"Fleet Status",variant:"accent",children:r?t.jsx(A,{label:"Loading",value:"...",valueColor:"anakiwa"}):t.jsxs(t.Fragment,{children:[t.jsx(A,{label:"Total Vessels",value:(e==null?void 0:e.length)||0,valueColor:"anakiwa"}),t.jsx(A,{label:"Active Vessels",value:m.length,valueColor:"success"}),t.jsx(A,{label:"Inactive Vessels",value:((e==null?void 0:e.length)||0)-m.length,valueColor:"neonCarrot"})]})}),t.jsx(F,{title:"License Progress",variant:"secondary",children:c?t.jsx(A,{label:"Loading",value:"...",valueColor:"lilac"}):l?t.jsxs(t.Fragment,{children:[t.jsx(A,{label:"Sea Time Days",value:l.totalSeaTimeDays,valueColor:"lilac"}),t.jsx(A,{label:"Days (3 Years)",value:l.seaTimeDaysLast3Years,valueColor:"lilac"}),t.jsxs("div",{children:[t.jsx(Kl,{progress:d(l.totalSeaTimeDays,360)}),t.jsxs(Jl,{children:[t.jsx("span",{children:"360 Day Goal"}),t.jsxs("span",{children:[Math.round(d(l.totalSeaTimeDays,360)),"%"]})]})]})]}):t.jsx(A,{label:"Status",value:"Disabled",valueColor:"neonCarrot"})})]}),t.jsxs(Ul,{children:[t.jsx(F,{title:"Recent Trips",variant:"primary",children:a?t.jsx(A,{label:"Loading",value:"...",valueColor:"neonCarrot"}):h.length>0?h.map(y=>{var p,x;return t.jsxs(ql,{children:[t.jsxs(Hl,{children:[t.jsx(Vl,{children:$(y.startTime)}),t.jsxs(Wl,{children:[g(((p=y.statistics)==null?void 0:p.durationSeconds)||0)," • ",y.waterType]})]}),t.jsx(A,{label:"Distance",value:Math.round((((x=y.statistics)==null?void 0:x.distanceMeters)||0)/1852),unit:"nm",size:"sm",valueColor:"neonCarrot"})]},y.id)}):t.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#999"},children:"No trips recorded yet"})}),t.jsx(F,{title:"Upcoming Tasks",variant:"accent",children:t.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#999"},children:"No maintenance tasks due"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[t.jsx(ut,{position:"bottom-right",size:80}),t.jsx(gt,{width:"100%",colors:["anakiwa"]})]})]})]})};let Ze=null;const Ql={boats:["boats"],trips:["trips"],notes:["notes"],todos:["todos"],maintenance_templates:["maintenanceTemplates"],maintenance_events:["maintenanceEvents"],locations:["locations"],photos:["photos"],sensors:["sensors"]};function Cn(e){_o();const r=localStorage.getItem("auth_token");if(!r)return;const o=`${localStorage.getItem("api_base_url")||"/api/v1"}/sync/events?token=${encodeURIComponent(r)}`;Ze=new EventSource(o),Ze.onmessage=a=>{try{const i=JSON.parse(a.data);if(i.type==="connected")return;const l=Ql[i.type];l&&e.invalidateQueries({queryKey:l})}catch{}},Ze.onerror=()=>{}}function _o(){Ze&&(Ze.close(),Ze=null)}const Zo=C.createContext(null),_l=({children:e})=>{const r=G(),[n,o]=C.useState({isAuthenticated:!1,isLoading:!0,needsSetup:!1,user:null}),a=C.useCallback(async()=>{try{if(!localStorage.getItem("auth_token")){o({isAuthenticated:!1,isLoading:!1,needsSetup:!0,user:null});return}await M.getBoats(),o({isAuthenticated:!0,isLoading:!1,needsSetup:!1,user:{id:"current",username:"user",createdAt:"",updatedAt:""}}),Cn(r)}catch{localStorage.removeItem("auth_token"),o({isAuthenticated:!1,isLoading:!1,needsSetup:!0,user:null})}},[]);C.useEffect(()=>{a()},[a]);const i=C.useCallback(async(u,m)=>{try{o(b=>({...b,isLoading:!0}));const h=await M.login(u,m);return o({isAuthenticated:!0,isLoading:!1,needsSetup:!1,user:h.user}),Cn(r),{success:!0}}catch(h){return o(b=>({...b,isLoading:!1,isAuthenticated:!1,needsSetup:!0})),{success:!1,error:h.message||"Login failed"}}},[]),l=C.useCallback(async()=>{try{await M.logout()}catch(u){console.warn("Logout request failed:",u)}finally{_o(),o({isAuthenticated:!1,isLoading:!1,needsSetup:!1,user:null})}},[]),c={...n,login:i,logout:l,checkAuthStatus:a};return Me.createElement(Zo.Provider,{value:c},e)},_r=()=>{const e=C.useContext(Zo);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},Zl=s.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.colors.background};
  padding: ${e=>e.theme.spacing.lg};
`,Yl=s.div`
  max-width: 600px;
  width: 100%;
`,Xl=s.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${e=>e.theme.spacing.xl};
`,ec=s.img`
  max-width: 200px;
  height: auto;
  filter: drop-shadow(0 0 10px ${e=>e.theme.colors.primary.neonCarrot}40);
`,tc=s.form`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,Yt=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Xt=s.label`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
`,er=s.input`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: ${e=>e.theme.borderRadius.sm};
  padding: ${e=>e.theme.spacing.md};
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.tanoi};
    box-shadow: ${e=>e.theme.shadows.glow};
  }
`,rc=s.div`
  display: flex;
  justify-content: center;
  margin-top: ${e=>e.theme.spacing.lg};
`,tr=()=>{const e=Y(),{login:r,isAuthenticated:n}=_r();C.useEffect(()=>{n&&e("/")},[n,e]);const[o,a]=C.useState({username:"",password:"",serverUrl:"http://10.0.0.145:8585"}),[i,l]=C.useState(!1),[c,u]=C.useState(null),m=b=>{const{name:$,value:g}=b.target;a(d=>({...d,[$]:g}))},h=async b=>{b.preventDefault(),l(!0),u(null);try{M.updateBaseUrl(o.serverUrl),console.log("Server URL configured:",o.serverUrl),console.log("Attempting login with:",{username:o.username});const $=await r(o.username,o.password);console.log("Login result:",$),$.success?(u({type:"success",text:"LCARS Interface Initialized Successfully! Redirecting..."}),console.log("Login successful, setting timeout for redirect"),setTimeout(()=>{console.log("Redirecting to dashboard"),e("/")},1500)):(console.log("Login failed:",$.error),u({type:"error",text:$.error||"Authentication failed. Please check your credentials."}))}catch($){console.error("Login error:",$),u({type:"error",text:$.message||"Setup failed. Please check your connection and try again."})}finally{l(!1)}};return t.jsx(Zl,{children:t.jsxs(Yl,{children:[t.jsx(Xl,{children:t.jsx(ec,{src:"/assets/captains-log-logo.png",alt:"Captain's Log"})}),t.jsxs(F,{title:"System Initialization",padding:"lg",children:[t.jsx(I,{level:2,align:"center",children:"LCARS Setup Wizard"}),t.jsxs(tc,{onSubmit:h,children:[t.jsxs(Yt,{children:[t.jsx(Xt,{htmlFor:"username",children:"Username"}),t.jsx(er,{type:"text",id:"username",name:"username",value:o.username,onChange:m,placeholder:"Enter your username",required:!0,disabled:i})]}),t.jsxs(Yt,{children:[t.jsx(Xt,{htmlFor:"password",children:"Password"}),t.jsx(er,{type:"password",id:"password",name:"password",value:o.password,onChange:m,placeholder:"Enter your password",required:!0,disabled:i})]}),t.jsxs(Yt,{children:[t.jsx(Xt,{htmlFor:"serverUrl",children:"Server URL"}),t.jsx(er,{type:"url",id:"serverUrl",name:"serverUrl",value:o.serverUrl,onChange:m,placeholder:"http://localhost:8585",required:!0,disabled:i})]}),c&&t.jsx(he,{type:c.type==="success"?"success":c.type==="error"?"error":"info",children:c.text}),t.jsx(rc,{children:t.jsx(k,{type:"submit",disabled:i,size:"lg",children:i?"Initializing...":"Initialize LCARS"})})]})]})]})})},nc=pe`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,oc=pe`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${e=>e.fullScreen&&`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 9999;
  `}
  ${e=>!e.fullScreen&&`
    padding: ${e.theme.spacing.xl};
  `}
`;s.div`
  width: ${e=>{switch(e.size){case"sm":return"20px";case"lg":return"60px";default:return"40px"}}};
  height: ${e=>{switch(e.size){case"sm":return"20px";case"lg":return"60px";default:return"40px"}}};
  border: 3px solid ${e=>e.theme.colors.primary.neonCarrot}40;
  border-top: 3px solid ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: 50%;
  animation: ${nc} 1s linear infinite;
`;s.div`
  margin-left: ${e=>e.theme.spacing.md};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>{switch(e.size){case"sm":return e.theme.typography.fontSize.sm;case"lg":return e.theme.typography.fontSize.lg;default:return e.theme.typography.fontSize.md}}};
  animation: ${oc} 2s ease-in-out infinite;
`;s.div`
  width: 200px;
  height: 20px;
  background: ${e=>e.theme.colors.surface.dark};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${e=>e.theme.colors.primary.neonCarrot},
      transparent
    );
    animation: ${pe`
      0% { left: -100%; }
      100% { left: 100%; }
    `} 2s ease-in-out infinite;
  }
`;const Yo=s.div`
  background: linear-gradient(
    90deg,
    ${e=>e.theme.colors.surface.dark} 25%,
    ${e=>e.theme.colors.surface.medium} 50%,
    ${e=>e.theme.colors.surface.dark} 75%
  );
  background-size: 200% 100%;
  animation: ${pe`
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  `} 2s ease-in-out infinite;
  border-radius: 4px;
`,Sn=s(Yo)`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"1em"};
  margin: 4px 0;
`,sc=s(Yo)`
  width: 100%;
  height: 120px;
  margin: 8px 0;
`,xt=({variant:e="text",width:r,height:n,lines:o=1})=>e==="card"?t.jsx(sc,{}):o===1?t.jsx(Sn,{width:r,height:n}):t.jsx("div",{children:Array.from({length:o},(a,i)=>t.jsx(Sn,{width:i===o-1?"60%":r,height:n},i))}),ac=s.div`
  ${e=>{switch(e.variant){case"inline":return`
          display: inline-flex;
          align-items: center;
          padding: ${e.theme.spacing.sm};
          background: ${e.theme.colors.status.error}20;
          border: 1px solid ${e.theme.colors.status.error};
          border-radius: 4px;
          color: ${e.theme.colors.status.error};
        `;case"banner":return`
          width: 100%;
          padding: ${e.theme.spacing.md};
          background: ${e.theme.colors.status.error}20;
          border-left: 4px solid ${e.theme.colors.status.error};
          color: ${e.theme.colors.status.error};
        `;default:return`
          padding: ${e.theme.spacing.lg};
          text-align: center;
        `}}}
`,ic=s.div`
  font-size: 1.2em;
  margin-right: ${e=>e.theme.spacing.sm};
  color: ${e=>e.theme.colors.status.error};
`,lc=s.div`
  font-weight: bold;
  font-size: ${e=>e.theme.typography.fontSize.lg};
  color: ${e=>e.theme.colors.status.error};
  margin-bottom: ${e=>e.theme.spacing.sm};
`,cc=s.div`
  color: ${e=>e.theme.colors.text.light};
  margin-bottom: ${e=>e.theme.spacing.md};
  line-height: 1.5;
`,dc=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
  justify-content: center;
  margin-top: ${e=>e.theme.spacing.md};
`,mc=s.code`
  background: ${e=>e.theme.colors.surface.dark};
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
  font-size: 0.9em;
  color: ${e=>e.theme.colors.status.error};
`,hc=({title:e="Error",message:r,code:n,variant:o="card",showIcon:a=!0,onRetry:i,onDismiss:l,retryText:c="Try Again",dismissText:u="Dismiss"})=>{const m=t.jsxs(ac,{variant:o,children:[a&&o==="inline"&&t.jsx(ic,{children:"⚠"}),o!=="inline"&&t.jsxs(lc,{children:[a&&"⚠ ",e]}),t.jsxs(cc,{children:[r,n&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("small",{children:["Error code: ",t.jsx(mc,{children:n})]})]})]}),(i||l)&&t.jsxs(dc,{children:[i&&t.jsx(k,{onClick:i,variant:"primary",size:"sm",children:c}),l&&t.jsx(k,{onClick:l,variant:"secondary",size:"sm",children:u})]})]});return o==="card"?t.jsx(F,{children:m}):m};function pc(e){const r=G(),[n,o]=C.useState(!1);return{optimisticUpdate:C.useCallback(async(i,l,c,u)=>{o(!0);const m=r.getQueryData(e);r.setQueryData(e,h=>h===void 0?h:i(h));try{const h=await l();return await r.invalidateQueries({queryKey:e}),c==null||c(h),h}catch(h){throw m!==void 0&&r.setQueryData(e,m),u==null||u(h),h}finally{o(!1)}},[r,e]),isOptimistic:n}}function uc(e){const{optimisticUpdate:r,isOptimistic:n}=pc(e),o=C.useCallback((l,c)=>r((u=[])=>[...u,l],c),[r]),a=C.useCallback((l,c)=>r((u=[])=>u.filter(m=>m.id!==l),c),[r]),i=C.useCallback((l,c,u)=>r((m=[])=>m.map(h=>h.id===l?c(h):h),u),[r]);return{optimisticAdd:o,optimisticRemove:a,optimisticUpdate:i,isOptimistic:n}}const rr=s.div`
  padding: 20px;
`,kn=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  margin-top: 20px;
`,gc=s.div`
  padding: 20px;
  border: 2px solid ${e=>e.$isActive?e.theme.colors.primary.neonCarrot:e.$isEnabled?e.theme.colors.primary.anakiwa:e.theme.colors.interactive.disabled};
  background: ${e=>e.$isActive?`${e.theme.colors.primary.neonCarrot}15`:e.$isEnabled?`${e.theme.colors.primary.anakiwa}10`:`${e.theme.colors.interactive.disabled}10`};
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: ${e=>e.theme.borderRadius.lg};

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    background: ${e=>e.theme.colors.primary.neonCarrot}20;
  }
`,xc=s.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1.4rem;
  margin: 0 0 15px 0;
  text-transform: uppercase;
`,fc=s.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`,Tn=s.span`
  padding: 4px 12px;
  border-radius: 0;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  background: ${e=>{switch(e.$type){case"active":return e.theme.colors.primary.neonCarrot;case"enabled":return e.theme.colors.primary.anakiwa;case"disabled":return e.theme.colors.interactive.disabled;default:return e.theme.colors.interactive.disabled}}};
  color: ${e=>e.theme.colors.background};
`,yc=s.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,An=s(k)`
  flex: 1;
  min-width: 120px;
`,En=s.div`
  display: flex;
  gap: 15px;
  align-items: center;
`,bc=s.div`
  text-align: center;
  padding: 60px 20px;
  color: ${e=>e.theme.colors.text.secondary};
`,jc=s.div`
  font-size: 4rem;
  margin-bottom: 20px;
  color: ${e=>e.theme.colors.primary.anakiwa};
`,Ln=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Fn=s.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,$c=()=>{const e=Y(),{data:r,isLoading:n,error:o}=te(),a=Wo(),i=Go(),[l,c]=C.useState(null),{optimisticUpdate:u}=uc(["boats"]),m=p=>{e(`/boats/${p.id}`)},h=async p=>{c(`toggle-${p.id}`);try{await u(p.id,x=>({...x,enabled:!x.enabled}),()=>a.mutateAsync({id:p.id,enabled:!p.enabled}))}catch(x){console.error("Failed to toggle boat status:",x)}finally{c(null)}},b=async p=>{if(!p.isActive){c(`active-${p.id}`);try{await i.mutateAsync(p.id)}catch(x){console.error("Failed to set active boat:",x)}finally{c(null)}}},$=()=>{e("/boats/new")};if(n)return t.jsxs(rr,{children:[t.jsxs(Ln,{children:[t.jsxs(Fn,{children:[t.jsx(I,{children:"BOAT MANAGEMENT"}),t.jsx(xt,{width:"200px",height:"20px"})]}),t.jsxs(En,{children:[t.jsx(xt,{width:"150px",height:"40px"}),t.jsx(xt,{width:"180px",height:"40px"})]})]}),t.jsx(kn,{children:Array.from({length:3},(p,x)=>t.jsx(F,{children:t.jsx(xt,{variant:"card"})},x))})]});if(o)return t.jsxs(rr,{children:[t.jsx(I,{children:"BOAT MANAGEMENT"}),t.jsx(hc,{title:"Failed to Load Boats",message:o.message,onRetry:()=>window.location.reload()})]});const g=r==null?void 0:r.find(p=>p.isActive),d=(r==null?void 0:r.filter(p=>p.enabled))||[],y=(r==null?void 0:r.filter(p=>!p.enabled))||[];return t.jsxs(rr,{children:[t.jsxs(Ln,{children:[t.jsxs(Fn,{children:[t.jsx(I,{children:"BOAT MANAGEMENT"}),t.jsx(A,{label:"VESSELS REGISTERED",value:(r==null?void 0:r.length)||0,valueColor:"anakiwa",size:"sm"})]}),t.jsxs(En,{children:[t.jsx(A,{label:"ACTIVE VESSEL",value:(g==null?void 0:g.name)||"NONE SELECTED",valueColor:g?"neonCarrot":"anakiwa"}),t.jsx(k,{variant:"primary",onClick:$,children:"ADD NEW VESSEL"})]})]}),!r||r.length===0?t.jsx(F,{children:t.jsxs(bc,{children:[t.jsx(jc,{children:"🚤"}),t.jsx("h3",{children:"NO VESSELS REGISTERED"}),t.jsx("p",{children:"Add your first vessel to begin tracking trips and maintenance."}),t.jsx(k,{variant:"primary",onClick:$,children:"ADD FIRST VESSEL"})]})}):t.jsx(kn,{children:r.map(p=>t.jsxs(gc,{$isActive:p.isActive,$isEnabled:p.enabled,onClick:()=>m(p),children:[t.jsx(xc,{children:p.name}),t.jsxs(fc,{children:[p.isActive&&t.jsx(Tn,{$type:"active",children:"ACTIVE"}),t.jsx(Tn,{$type:p.enabled?"enabled":"disabled",children:p.enabled?"ENABLED":"DISABLED"})]}),t.jsx(A,{label:"VESSEL ID",value:p.id.slice(0,8).toUpperCase(),valueColor:"anakiwa",size:"sm"}),t.jsx(A,{label:"REGISTERED",value:new Date(p.createdAt).toLocaleDateString(),valueColor:"anakiwa",size:"sm"}),t.jsxs(yc,{children:[!p.isActive&&p.enabled&&t.jsx(An,{variant:"secondary",onClick:()=>b(p),disabled:l===`active-${p.id}`,children:l===`active-${p.id}`?"SETTING...":"SET ACTIVE"}),t.jsx(An,{variant:p.enabled?"danger":"accent",onClick:()=>h(p),disabled:l===`toggle-${p.id}`,children:l===`toggle-${p.id}`?"UPDATING...":p.enabled?"DISABLE":"ENABLE"})]})]},p.id))}),r&&r.length>0&&t.jsxs("div",{style:{marginTop:"30px",display:"flex",gap:"20px"},children:[t.jsx(A,{label:"ENABLED VESSELS",value:d.length.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"DISABLED VESSELS",value:y.length.toString(),valueColor:"lilac"})]})]})},nr=s.div`
  padding: 20px;
`,vc=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Dn=s(F)`
  padding: 25px;
`,or=s.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1.2rem;
  margin: 0 0 20px 0;
  text-transform: uppercase;
  border-bottom: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding-bottom: 10px;
`,wc=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 25px;
`,zn=s.div`
  padding: 15px;
  text-align: center;
  border: 2px solid ${e=>{switch(e.$type){case"active":return e.theme.colors.primary.neonCarrot;case"enabled":return e.theme.colors.primary.anakiwa;case"disabled":return e.theme.colors.interactive.disabled;default:return e.theme.colors.interactive.disabled}}};
  background: ${e=>{switch(e.$type){case"active":return`${e.theme.colors.primary.neonCarrot}20`;case"enabled":return`${e.theme.colors.primary.anakiwa}15`;case"disabled":return`${e.theme.colors.interactive.disabled}15`;default:return`${e.theme.colors.interactive.disabled}15`}}};
`,Nn=s.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 5px;
  text-transform: uppercase;
`,Rn=s.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${e=>e.theme.colors.text.primary};
  text-transform: uppercase;
`,Cc=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 20px;
`,In=s(k)`
  margin-right: 15px;
`,Sc=s.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,kc=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Tc=s.label`
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
`,Ac=s.input`
  padding: 12px 15px;
  background: ${e=>e.theme.colors.background};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 10px ${e=>e.theme.colors.primary.neonCarrot}40;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Ec=s.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin-top: 20px;
`,Lc=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`,Fc=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Dc=s.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,zc=s(F)`
  padding: 25px;
  margin-top: 30px;
`,Nc=()=>{const{id:e}=be(),r=Y(),{data:n,isLoading:o,error:a}=Fl(e),{data:i}=Ae({boatId:e}),l=zl(),c=Wo(),u=Go(),[m,h]=C.useState(!1),[b,$]=C.useState({name:""}),[g,d]=C.useState(null);Me.useEffect(()=>{n&&$({name:n.name})},[n]);const y=()=>{r("/boats")},p=()=>{h(!0)},x=()=>{h(!1),n&&$({name:n.name})},j=async B=>{if(B.preventDefault(),!(!n||!b.name.trim())){d("save");try{await l.mutateAsync({id:n.id,data:{name:b.name.trim()}}),h(!1)}catch(E){console.error("Failed to update boat:",E)}finally{d(null)}}},f=async()=>{if(n){d("toggle");try{await c.mutateAsync({id:n.id,enabled:!n.enabled})}catch(B){console.error("Failed to toggle boat status:",B)}finally{d(null)}}},w=async()=>{if(!(!n||n.isActive)){d("active");try{await u.mutateAsync(n.id)}catch(B){console.error("Failed to set active boat:",B)}finally{d(null)}}};if(o)return t.jsxs(nr,{children:[t.jsx(I,{children:"VESSEL DETAILS"}),t.jsx(A,{label:"STATUS",value:"LOADING VESSEL DATA...",valueColor:"anakiwa"})]});if(a||!n)return t.jsxs(nr,{children:[t.jsx(I,{children:"VESSEL DETAILS"}),t.jsx(he,{type:"error",children:(a==null?void 0:a.message)||"Vessel not found"}),t.jsx(In,{variant:"secondary",onClick:y,children:"BACK TO VESSELS"})]});const D=(i==null?void 0:i.length)||0,T=(i==null?void 0:i.reduce((B,E)=>{var S;return B+(((S=E.statistics)==null?void 0:S.durationSeconds)||0)},0))||0,N=(i==null?void 0:i.reduce((B,E)=>{var S;return B+(((S=E.statistics)==null?void 0:S.distanceMeters)||0)},0))||0;return t.jsx(t.Fragment,{children:t.jsxs(nr,{children:[t.jsxs(Fc,{children:[t.jsxs(Dc,{children:[t.jsx(I,{children:"VESSEL DETAILS"}),t.jsx(A,{label:"VESSEL NAME",value:n.name,valueColor:"neonCarrot",size:"sm"})]}),t.jsxs("div",{children:[t.jsx(In,{variant:"secondary",onClick:y,children:"BACK TO VESSELS"}),!m&&t.jsx(k,{variant:"primary",onClick:p,children:"EDIT VESSEL"})]})]}),t.jsxs(vc,{children:[t.jsxs(Dn,{children:[t.jsx(or,{children:"Vessel Information"}),m?t.jsxs(Sc,{onSubmit:j,children:[t.jsxs(kc,{children:[t.jsx(Tc,{children:"Vessel Name"}),t.jsx(Ac,{type:"text",value:b.name,onChange:B=>$({...b,name:B.target.value}),placeholder:"Enter vessel name",required:!0,disabled:g==="save"})]}),t.jsxs(Ec,{children:[t.jsx(k,{type:"button",variant:"secondary",onClick:x,disabled:g==="save",children:"CANCEL"}),t.jsx(k,{type:"submit",variant:"primary",disabled:g==="save"||!b.name.trim(),children:g==="save"?"SAVING...":"SAVE CHANGES"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx(A,{label:"VESSEL NAME",value:n.name,valueColor:"neonCarrot"}),t.jsx(A,{label:"VESSEL ID",value:n.id,valueColor:"anakiwa"}),t.jsx(A,{label:"REGISTERED",value:new Date(n.createdAt).toLocaleString(),valueColor:"anakiwa"}),t.jsx(A,{label:"LAST UPDATED",value:new Date(n.updatedAt).toLocaleString(),valueColor:"anakiwa"})]})]}),t.jsxs(Dn,{children:[t.jsx(or,{children:"Status & Actions"}),t.jsxs(wc,{children:[t.jsxs(zn,{$type:n.isActive?"active":"disabled",children:[t.jsx(Nn,{children:"Active Status"}),t.jsx(Rn,{children:n.isActive?"ACTIVE":"INACTIVE"})]}),t.jsxs(zn,{$type:n.enabled?"enabled":"disabled",children:[t.jsx(Nn,{children:"Operational Status"}),t.jsx(Rn,{children:n.enabled?"ENABLED":"DISABLED"})]})]}),!m&&t.jsxs(Cc,{children:[!n.isActive&&n.enabled&&t.jsx(k,{variant:"primary",onClick:w,disabled:g==="active",children:g==="active"?"SETTING...":"SET AS ACTIVE"}),t.jsx(k,{variant:n.enabled?"danger":"accent",onClick:f,disabled:g==="toggle",children:g==="toggle"?"UPDATING...":n.enabled?"DISABLE VESSEL":"ENABLE VESSEL"})]})]})]}),t.jsxs(zc,{children:[t.jsx(or,{children:"Usage Statistics"}),t.jsxs(Lc,{children:[t.jsx(A,{label:"TOTAL TRIPS",value:D.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"TOTAL HOURS",value:`${(T/3600).toFixed(1)}`,unit:"hrs",valueColor:"anakiwa"}),t.jsx(A,{label:"TOTAL DISTANCE",value:`${(N*539957e-9).toFixed(1)}`,unit:"nm",valueColor:"anakiwa"}),t.jsx(A,{label:"LAST TRIP",value:i&&i.length>0?new Date(i[0].startTime).toLocaleDateString():"NO TRIPS",valueColor:"anakiwa"})]})]})]})})},Rc=s.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`,Ic=s(F)`
  padding: 30px;
  margin-top: 20px;
`,Mc=s.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,Ee=s.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Le=s.label`
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: ${e=>e.theme.typography.fontFamily.primary};
`,qe=s.input`
  padding: 15px 20px;
  background: ${e=>e.theme.colors.background};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 15px ${e=>e.theme.colors.primary.neonCarrot}40;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    border-color: ${e=>e.theme.colors.interactive.disabled};
  }

  &::placeholder {
    color: ${e=>e.theme.colors.text.secondary};
    opacity: 0.7;
  }
`,Bc=s.textarea`
  padding: 15px 20px;
  background: ${e=>e.theme.colors.background};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 15px ${e=>e.theme.colors.primary.neonCarrot}40;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    border-color: ${e=>e.theme.colors.interactive.disabled};
  }

  &::placeholder {
    color: ${e=>e.theme.colors.text.secondary};
    opacity: 0.7;
  }
`,we=s.p`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
`,Pc=s.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid ${e=>e.theme.colors.primary.anakiwa};
`,Oc=s(k)`
  margin-right: 15px;
`,Uc=s.span`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin-left: 5px;
`,Fe=s.div`
  color: ${e=>e.theme.colors.status.error};
  font-size: 0.9rem;
  margin-top: 5px;
`,qc=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Hc=s.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Vc=()=>{const e=Y(),r=Dl(),[n,o]=C.useState({name:"",description:"",hullNumber:"",manufacturer:"",model:"",year:"",length:""}),[a,i]=C.useState({}),[l,c]=C.useState(!1),u=()=>{e("/boats")},m=($,g)=>{o(d=>({...d,[$]:g})),a[$]&&i(d=>({...d,[$]:void 0}))},h=()=>{const $={};return n.name.trim()?n.name.trim().length<2?$.name="Vessel name must be at least 2 characters":n.name.trim().length>100&&($.name="Vessel name must be less than 100 characters"):$.name="Vessel name is required",n.description&&n.description.length>500&&($.description="Description must be less than 500 characters"),n.hullNumber&&n.hullNumber.length>50&&($.hullNumber="Hull number must be less than 50 characters"),n.manufacturer&&n.manufacturer.length>100&&($.manufacturer="Manufacturer must be less than 100 characters"),n.model&&n.model.length>100&&($.model="Model must be less than 100 characters"),n.year&&(!/^\d{4}$/.test(n.year)||parseInt(n.year)<1900||parseInt(n.year)>new Date().getFullYear()+1)&&($.year="Year must be a valid 4-digit year"),n.length&&(!/^\d+(\.\d+)?$/.test(n.length)||parseFloat(n.length)<=0||parseFloat(n.length)>1e3)&&($.length="Length must be a positive number (in feet)"),i($),Object.keys($).length===0},b=async $=>{if($.preventDefault(),!!h()){c(!0);try{const g={};n.description.trim()&&(g.description=n.description.trim()),n.hullNumber.trim()&&(g.hullNumber=n.hullNumber.trim()),n.manufacturer.trim()&&(g.manufacturer=n.manufacturer.trim()),n.model.trim()&&(g.model=n.model.trim()),n.year.trim()&&(g.year=parseInt(n.year.trim())),n.length.trim()&&(g.lengthFeet=parseFloat(n.length.trim()));const d=await r.mutateAsync({name:n.name.trim(),metadata:Object.keys(g).length>0?g:void 0});e(`/boats/${d.id}`)}catch(g){console.error("Failed to create boat:",g)}finally{c(!1)}}};return t.jsxs(Rc,{children:[t.jsxs(qc,{children:[t.jsxs(Hc,{children:[t.jsx(I,{children:"ADD NEW VESSEL"}),t.jsx(we,{children:"Register a new vessel for tracking"})]}),t.jsx(Oc,{variant:"secondary",onClick:u,children:"BACK TO VESSELS"})]}),r.error&&t.jsxs(he,{type:"error",children:["Failed to create vessel: ",r.error.message]}),t.jsx(Ic,{children:t.jsxs(Mc,{onSubmit:b,children:[t.jsxs(Ee,{children:[t.jsxs(Le,{children:["Vessel Name",t.jsx(Uc,{children:"*"})]}),t.jsx(qe,{type:"text",value:n.name,onChange:$=>m("name",$.target.value),placeholder:"Enter vessel name (e.g., 'Sea Explorer', 'Fishing Buddy')",disabled:l,maxLength:100}),t.jsx(we,{children:"The primary name used to identify this vessel throughout the system."}),a.name&&t.jsx(Fe,{children:a.name})]}),t.jsxs(Ee,{children:[t.jsx(Le,{children:"Description"}),t.jsx(Bc,{value:n.description,onChange:$=>m("description",$.target.value),placeholder:"Optional description of the vessel (e.g., 'Center console fishing boat', '24ft cabin cruiser')",disabled:l,maxLength:500}),t.jsx(we,{children:"Optional description to help identify and categorize this vessel."}),a.description&&t.jsx(Fe,{children:a.description})]}),t.jsxs(Ee,{children:[t.jsx(Le,{children:"Hull Identification Number (HIN)"}),t.jsx(qe,{type:"text",value:n.hullNumber,onChange:$=>m("hullNumber",$.target.value),placeholder:"Enter HIN if available",disabled:l,maxLength:50}),t.jsx(we,{children:"The unique hull identification number assigned by the manufacturer."}),a.hullNumber&&t.jsx(Fe,{children:a.hullNumber})]}),t.jsxs(Ee,{children:[t.jsx(Le,{children:"Manufacturer"}),t.jsx(qe,{type:"text",value:n.manufacturer,onChange:$=>m("manufacturer",$.target.value),placeholder:"Enter manufacturer name",disabled:l,maxLength:100}),t.jsx(we,{children:"The company that built this vessel."}),a.manufacturer&&t.jsx(Fe,{children:a.manufacturer})]}),t.jsxs(Ee,{children:[t.jsx(Le,{children:"Model"}),t.jsx(qe,{type:"text",value:n.model,onChange:$=>m("model",$.target.value),placeholder:"Enter model name",disabled:l,maxLength:100}),t.jsx(we,{children:"The specific model designation of this vessel."}),a.model&&t.jsx(Fe,{children:a.model})]}),t.jsxs(Ee,{children:[t.jsx(Le,{children:"Year Built"}),t.jsx(qe,{type:"text",value:n.year,onChange:$=>m("year",$.target.value),placeholder:"Enter year (e.g., 2020)",disabled:l,maxLength:4}),t.jsx(we,{children:"The year this vessel was manufactured."}),a.year&&t.jsx(Fe,{children:a.year})]}),t.jsxs(Ee,{children:[t.jsx(Le,{children:"Length (feet)"}),t.jsx(qe,{type:"text",value:n.length,onChange:$=>m("length",$.target.value),placeholder:"Enter length in feet (e.g., 24.5)",disabled:l}),t.jsx(we,{children:"The overall length of the vessel in feet."}),a.length&&t.jsx(Fe,{children:a.length})]}),t.jsxs(Pc,{children:[t.jsx(k,{type:"button",variant:"secondary",onClick:u,disabled:l,children:"CANCEL"}),t.jsx(k,{type:"submit",variant:"primary",disabled:l||!n.name.trim(),children:l?"CREATING VESSEL...":"CREATE VESSEL"})]})]})})]})},sr=s.div`
  padding: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,Wc=s(F)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Gc=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  align-items: end;
`,ft=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,ar=s.label`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Kc=s.select`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.primary};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.tanoi};
    box-shadow: 0 0 0 2px rgba(255, 153, 102, 0.2);
  }
`,Mn=s.input`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.primary};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.tanoi};
    box-shadow: 0 0 0 2px rgba(255, 153, 102, 0.2);
  }
`,Jc=s.div`
  display: grid;
  gap: ${e=>e.theme.spacing.md};
`,Qc=s(F)`
  cursor: pointer;
  transition: all ${e=>e.theme.animation.normal} ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.lg};
  }
`,_c=s.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${e=>e.theme.spacing.md};
  align-items: start;
`,Zc=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Yc=s.h3`
  margin: 0;
  font-size: ${e=>e.theme.typography.fontSize.lg};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Xc=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${e=>e.theme.spacing.sm};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
`,ed=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
  text-align: right;
`,ir=s.div`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,lr=s.div`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 1px;
`,td=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.text.muted};
  
  .empty-title {
    font-size: ${e=>e.theme.typography.fontSize.xl};
    margin-bottom: ${e=>e.theme.spacing.md};
    color: ${e=>e.theme.colors.primary.neonCarrot};
  }
  
  .empty-message {
    font-size: ${e=>e.theme.typography.fontSize.md};
    margin-bottom: ${e=>e.theme.spacing.lg};
  }
`,rd=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  text-transform: uppercase;
  letter-spacing: 2px;
`,nd=()=>{const[e,r]=C.useState({}),{data:n,isLoading:o,error:a}=Ae(e),{data:i}=te(),l=(g,d)=>{r(y=>({...y,[g]:d||void 0}))},c=()=>{r({})},u=g=>{const d=Math.floor(g/3600),y=Math.floor(g%3600/60);return`${d}h ${y}m`},m=g=>`${(g*539957e-9).toFixed(1)} nm`,h=g=>`${g.toFixed(1)} kts`,b=g=>new Date(g).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),$=g=>{const d=i==null?void 0:i.find(y=>y.id===g);return(d==null?void 0:d.name)||"Unknown Boat"};return o?t.jsx(sr,{children:t.jsx(rd,{children:"Loading Trip Data..."})}):a?t.jsx(sr,{children:t.jsx(F,{variant:"accent",title:"System Error",children:t.jsxs("div",{style:{color:"red",textAlign:"center",padding:"2rem"},children:["Error loading trips: ",a.message]})})}):t.jsxs(sr,{children:[t.jsx(I,{children:"Trip Log Database"}),t.jsx(Wc,{title:"Search Parameters",variant:"secondary",children:t.jsxs(Gc,{children:[t.jsxs(ft,{children:[t.jsx(ar,{children:"Vessel"}),t.jsxs(Kc,{value:e.boatId||"",onChange:g=>l("boatId",g.target.value),children:[t.jsx("option",{value:"",children:"All Vessels"}),i==null?void 0:i.map(g=>t.jsx("option",{value:g.id,children:g.name},g.id))]})]}),t.jsxs(ft,{children:[t.jsx(ar,{children:"Start Date"}),t.jsx(Mn,{type:"date",value:e.startDate||"",onChange:g=>l("startDate",g.target.value)})]}),t.jsxs(ft,{children:[t.jsx(ar,{children:"End Date"}),t.jsx(Mn,{type:"date",value:e.endDate||"",onChange:g=>l("endDate",g.target.value)})]}),t.jsx(ft,{children:t.jsx(k,{variant:"secondary",size:"sm",onClick:c,children:"Clear Filters"})})]})}),!n||n.length===0?t.jsxs(td,{children:[t.jsx("div",{className:"empty-title",children:"No Trip Records Found"}),t.jsx("div",{className:"empty-message",children:Object.keys(e).length>0?"No trips match the current search parameters.":"No trips have been recorded yet."})]}):t.jsx(Jc,{children:n.map(g=>{var d,y,p,x,j,f;return t.jsx(J,{to:`/trips/${g.id}`,style:{textDecoration:"none"},children:t.jsx(Qc,{variant:"primary",children:t.jsxs(_c,{children:[t.jsxs(Zc,{children:[t.jsxs(Yc,{children:[$(g.boatId)," - ",b(g.startTime)]}),t.jsxs(Xc,{children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Water Type:"})," ",g.waterType.toUpperCase()]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Role:"})," ",g.role.toUpperCase()]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Duration:"})," ",u(((d=g.statistics)==null?void 0:d.durationSeconds)||0)]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Distance:"})," ",m(((y=g.statistics)==null?void 0:y.distanceMeters)||0)]})]})]}),t.jsxs(ed,{children:[t.jsxs("div",{children:[t.jsx(ir,{children:h(((p=g.statistics)==null?void 0:p.averageSpeedKnots)||0)}),t.jsx(lr,{children:"Avg Speed"})]}),t.jsxs("div",{children:[t.jsx(ir,{children:h(((x=g.statistics)==null?void 0:x.maxSpeedKnots)||0)}),t.jsx(lr,{children:"Max Speed"})]}),t.jsxs("div",{children:[t.jsx(ir,{children:((f=(j=g.statistics)==null?void 0:j.stopPoints)==null?void 0:f.length)||0}),t.jsx(lr,{children:"Stop Points"})]})]})]})})},g.id)})})]})},cr=s.div`
  padding: ${e=>e.theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
`,od=s(k)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,sd=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.lg};
  margin-bottom: ${e=>e.theme.spacing.lg};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,ad=s(F)`
  grid-column: 1 / -1;
  margin-bottom: ${e=>e.theme.spacing.lg};
`,id=s(bo)`
  height: 400px;
  width: 100%;
  border-radius: ${e=>e.theme.borderRadius.md};
  
  .leaflet-control-container {
    .leaflet-top.leaflet-left {
      .leaflet-control-zoom {
        background-color: ${e=>e.theme.colors.surface.dark};
        border: 1px solid ${e=>e.theme.colors.primary.neonCarrot};
        border-radius: ${e=>e.theme.borderRadius.sm};

        a {
          background-color: ${e=>e.theme.colors.surface.medium};
          color: ${e=>e.theme.colors.text.primary};
          border: none;

          &:hover {
            background-color: ${e=>e.theme.colors.primary.neonCarrot};
            color: ${e=>e.theme.colors.text.inverse};
          }
        }
      }
    }
  }
`,ld=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,He=s.div`
  text-align: center;
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
`,Ve=s.div`
  font-size: ${e=>e.theme.typography.fontSize.xxl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,We=s.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`,cd=s.div`
  display: grid;
  gap: ${e=>e.theme.spacing.sm};
`,De=s.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${e=>e.theme.spacing.md};
  padding: ${e=>e.theme.spacing.sm} 0;
  border-bottom: 1px solid ${e=>e.theme.colors.surface.light};
  
  &:last-child {
    border-bottom: none;
  }
`,ze=s.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,Ne=s.div`
  font-size: ${e=>e.theme.typography.fontSize.md};
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,dd=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,rt=s.div`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.lilac};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
  text-align: center;
`,nt=s.div`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.lilac};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,ot=s.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`,md=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,hd=s.div`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
`,pd=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,ud=s.div`
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.anakiwa};
  text-transform: uppercase;
  letter-spacing: 1px;
`,gd=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  color: ${e=>e.theme.colors.text.secondary};
`,xd=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.muted};
`,fd=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  text-transform: uppercase;
  letter-spacing: 2px;
`,yd=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.status.error};
  font-size: ${e=>e.theme.typography.fontSize.lg};
`,bd=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.lg};
`,jd=s(F)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,$d=s(F)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,vd=new Pe.Icon({iconUrl:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiM2NkZGNjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4KPC9zdmc+",iconSize:[24,24],iconAnchor:[12,12]}),wd=new Pe.Icon({iconUrl:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNGRjY2NjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4KPC9zdmc+",iconSize:[24,24],iconAnchor:[12,12]}),Cd=new Pe.Icon({iconUrl:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNGRkZGNjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4KPC9zdmc+",iconSize:[20,20],iconAnchor:[10,10]}),Sd=()=>{var x,j,f,w,D,T,N,B,E;const{id:e}=be(),{data:r,isLoading:n,error:o}=Ko(e),{data:a}=te(),i=S=>{const z=Math.floor(S/3600),O=Math.floor(S%3600/60);return`${z}h ${O}m`},l=S=>`${(S*539957e-9).toFixed(1)} nm`,c=S=>`${S.toFixed(1)} kts`,u=S=>new Date(S).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),m=(S,z)=>{const O=S>=0?"N":"S",q=z>=0?"E":"W";return`${Math.abs(S).toFixed(6)}°${O}, ${Math.abs(z).toFixed(6)}°${q}`},h=S=>{const z=a==null?void 0:a.find(O=>O.id===S);return(z==null?void 0:z.name)||"Unknown Boat"},b=S=>S.map(z=>[z.latitude,z.longitude]),$=S=>{if(S.length===0)return[0,0];const z=S.reduce((q,V)=>q+V.latitude,0)/S.length,O=S.reduce((q,V)=>q+V.longitude,0)/S.length;return[z,O]};if(n)return t.jsx(cr,{children:t.jsx(fd,{children:"Loading Trip Data..."})});if(o||!r)return t.jsx(cr,{children:t.jsx(yd,{children:o?`Error loading trip: ${o.message}`:"Trip not found"})});const g=b(r.gpsPoints),d=$(r.gpsPoints),y=r.gpsPoints[0],p=r.gpsPoints[r.gpsPoints.length-1];return t.jsxs(cr,{children:[t.jsx(od,{as:J,to:"/trips",variant:"secondary",size:"sm",children:"← Back to Trip Log"}),t.jsxs(I,{children:["Trip Analysis - ",h(r.boatId)," - ",u(r.startTime)]}),g.length>0&&t.jsx(ad,{title:"Navigation Route",variant:"accent",children:t.jsxs(id,{center:d,zoom:13,scrollWheelZoom:!0,children:[t.jsx(fo,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.jsx(yo,{positions:g,color:"#FF9966",weight:3,opacity:.8}),y&&t.jsx(Se,{position:[y.latitude,y.longitude],icon:vd,children:t.jsxs(ke,{children:[t.jsx("strong",{children:"Trip Start"}),t.jsx("br",{}),u(r.startTime),t.jsx("br",{}),m(y.latitude,y.longitude)]})}),p&&t.jsx(Se,{position:[p.latitude,p.longitude],icon:wd,children:t.jsxs(ke,{children:[t.jsx("strong",{children:"Trip End"}),t.jsx("br",{}),u(r.endTime),t.jsx("br",{}),m(p.latitude,p.longitude)]})}),(((x=r.statistics)==null?void 0:x.stopPoints)||[]).map((S,z)=>t.jsx(Se,{position:[S.latitude,S.longitude],icon:Cd,children:t.jsxs(ke,{children:[t.jsxs("strong",{children:["Stop Point ",z+1]}),t.jsx("br",{}),"Duration: ",i(S.durationSeconds),t.jsx("br",{}),m(S.latitude,S.longitude)]})},z))]})}),t.jsxs(sd,{children:[t.jsx(F,{title:"Trip Statistics",variant:"primary",children:t.jsxs(ld,{children:[t.jsxs(He,{children:[t.jsx(Ve,{children:i(((j=r.statistics)==null?void 0:j.durationSeconds)||0)}),t.jsx(We,{children:"Duration"})]}),t.jsxs(He,{children:[t.jsx(Ve,{children:l(((f=r.statistics)==null?void 0:f.distanceMeters)||0)}),t.jsx(We,{children:"Distance"})]}),t.jsxs(He,{children:[t.jsx(Ve,{children:c(((w=r.statistics)==null?void 0:w.averageSpeedKnots)||0)}),t.jsx(We,{children:"Avg Speed"})]}),t.jsxs(He,{children:[t.jsx(Ve,{children:c(((D=r.statistics)==null?void 0:D.maxSpeedKnots)||0)}),t.jsx(We,{children:"Max Speed"})]}),t.jsxs(He,{children:[t.jsx(Ve,{children:((N=(T=r.statistics)==null?void 0:T.stopPoints)==null?void 0:N.length)||0}),t.jsx(We,{children:"Stop Points"})]}),t.jsxs(He,{children:[t.jsx(Ve,{children:r.gpsPoints.length}),t.jsx(We,{children:"GPS Points"})]})]})}),t.jsx(F,{title:"Trip Information",variant:"secondary",children:t.jsxs(cd,{children:[t.jsxs(De,{children:[t.jsx(ze,{children:"Vessel"}),t.jsx(Ne,{children:h(r.boatId)})]}),t.jsxs(De,{children:[t.jsx(ze,{children:"Start Time"}),t.jsx(Ne,{children:u(r.startTime)})]}),t.jsxs(De,{children:[t.jsx(ze,{children:"End Time"}),t.jsx(Ne,{children:u(r.endTime)})]}),t.jsxs(De,{children:[t.jsx(ze,{children:"Water Type"}),t.jsx(Ne,{children:r.waterType.toUpperCase()})]}),t.jsxs(De,{children:[t.jsx(ze,{children:"Role"}),t.jsx(Ne,{children:r.role.toUpperCase()})]}),y&&t.jsxs(De,{children:[t.jsx(ze,{children:"Start Position"}),t.jsx(Ne,{children:m(y.latitude,y.longitude)})]}),p&&t.jsxs(De,{children:[t.jsx(ze,{children:"End Position"}),t.jsx(Ne,{children:m(p.latitude,p.longitude)})]})]})})]}),r.manualData&&t.jsx(jd,{title:"Manual Data Entry",variant:"accent",children:t.jsxs(dd,{children:[r.manualData.engineHours!==void 0&&t.jsxs(rt,{children:[t.jsx(nt,{children:r.manualData.engineHours}),t.jsx(ot,{children:"Engine Hours"})]}),r.manualData.fuelConsumed!==void 0&&t.jsxs(rt,{children:[t.jsx(nt,{children:r.manualData.fuelConsumed}),t.jsx(ot,{children:"Fuel Consumed"})]}),r.manualData.numberOfPassengers!==void 0&&t.jsxs(rt,{children:[t.jsx(nt,{children:r.manualData.numberOfPassengers}),t.jsx(ot,{children:"Passengers"})]}),r.manualData.weatherConditions&&t.jsxs(rt,{children:[t.jsx(nt,{children:r.manualData.weatherConditions}),t.jsx(ot,{children:"Weather"})]}),r.manualData.destination&&t.jsxs(rt,{children:[t.jsx(nt,{children:r.manualData.destination}),t.jsx(ot,{children:"Destination"})]})]})}),(((B=r.statistics)==null?void 0:B.stopPoints)||[]).length>0&&t.jsx($d,{title:"Stop Points Analysis",variant:"primary",children:t.jsx(md,{children:(((E=r.statistics)==null?void 0:E.stopPoints)||[]).map((S,z)=>t.jsxs(hd,{children:[t.jsxs(pd,{children:[t.jsxs(ud,{children:["Stop Point ",z+1]}),t.jsx(gd,{children:i(S.durationSeconds)})]}),t.jsx(xd,{children:m(S.latitude,S.longitude)}),t.jsxs("div",{style:{fontSize:"0.8rem",color:"#999",marginTop:"0.5rem"},children:[u(S.startTime)," - ",u(S.endTime)]})]},z))})}),t.jsxs(bd,{children:[t.jsx(J,{to:`/trips/${r.id}/edit`,style:{textDecoration:"none"},children:t.jsx(k,{variant:"primary",children:"Edit Trip Data"})}),t.jsx(k,{variant:"secondary",children:"Export Data"})]})]})},dr=s.div`
  padding: ${e=>e.theme.spacing.lg};
  max-width: 1000px;
  margin: 0 auto;
`,kd=s(k)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Td=s.div`
  display: grid;
  gap: ${e=>e.theme.spacing.lg};
`,Bn=s(F)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,st=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`,ie=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,le=s.label`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,Ge=s.input`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.tanoi};
    box-shadow: 0 0 0 2px rgba(255, 153, 102, 0.2);
  }

  &:disabled {
    background-color: ${e=>e.theme.colors.surface.dark};
    color: ${e=>e.theme.colors.text.muted};
    cursor: not-allowed;
  }
`,mr=s.select`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.tanoi};
    box-shadow: 0 0 0 2px rgba(255, 153, 102, 0.2);
  }
`,Ad=s.textarea`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.tanoi};
    box-shadow: 0 0 0 2px rgba(255, 153, 102, 0.2);
  }
`,hr=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${e=>e.theme.spacing.lg};
`,Ed=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  text-transform: uppercase;
  letter-spacing: 2px;
`,Ld=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.status.error};
  font-size: ${e=>e.theme.typography.fontSize.lg};
`,Fd=s.div`
  background-color: rgba(102, 255, 102, 0.1);
  border: 1px solid ${e=>e.theme.colors.status.success};
  border-radius: ${e=>e.theme.borderRadius.md};
  color: ${e=>e.theme.colors.status.success};
  padding: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
  text-align: center;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,Dd=()=>{const{id:e}=be(),{data:r,isLoading:n,error:o}=Ko(e),{data:a}=te(),i=Nl(),l=Rl(),[c,u]=C.useState({waterType:"inland",role:"captain",boatId:""}),[m,h]=C.useState({}),[b,$]=C.useState("");C.useEffect(()=>{r&&(u({waterType:r.waterType,role:r.role,boatId:r.boatId}),r.manualData&&h({engineHours:r.manualData.engineHours,fuelConsumed:r.manualData.fuelConsumed,weatherConditions:r.manualData.weatherConditions,numberOfPassengers:r.manualData.numberOfPassengers,destination:r.manualData.destination}))},[r]);const g=(f,w)=>{u(D=>({...D,[f]:w}))},d=(f,w)=>{h(D=>({...D,[f]:w===""?void 0:w}))},y=async()=>{if(r)try{await i.mutateAsync({id:r.id,data:c}),$("Trip information updated successfully!"),setTimeout(()=>$(""),3e3)}catch(f){console.error("Error updating trip:",f)}},p=async()=>{if(!r)return;const f={};Object.entries(m).forEach(([w,D])=>{D!==void 0&&D!==""&&(f[w]=D)});try{await l.mutateAsync({tripId:r.id,data:f}),$("Manual data updated successfully!"),setTimeout(()=>$(""),3e3)}catch(w){console.error("Error updating manual data:",w)}},x=f=>new Date(f).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),j=f=>{const w=a==null?void 0:a.find(D=>D.id===f);return(w==null?void 0:w.name)||"Unknown Boat"};return n?t.jsx(dr,{children:t.jsx(Ed,{children:"Loading Trip Data..."})}):o||!r?t.jsx(dr,{children:t.jsx(Ld,{children:o?`Error loading trip: ${o.message}`:"Trip not found"})}):t.jsxs(dr,{children:[t.jsx(kd,{as:J,to:`/trips/${r.id}`,variant:"secondary",size:"sm",children:"← Back to Trip Details"}),t.jsxs(I,{children:["Edit Trip Data - ",j(r.boatId)," - ",x(r.startTime)]}),b&&t.jsx(Fd,{children:b}),t.jsxs(Td,{children:[t.jsxs(Bn,{title:"Trip Information",variant:"primary",children:[t.jsxs(st,{children:[t.jsxs(ie,{children:[t.jsx(le,{children:"Vessel"}),t.jsx(mr,{value:c.boatId,onChange:f=>g("boatId",f.target.value),children:a==null?void 0:a.map(f=>t.jsx("option",{value:f.id,children:f.name},f.id))})]}),t.jsxs(ie,{children:[t.jsx(le,{children:"Water Type"}),t.jsxs(mr,{value:c.waterType,onChange:f=>g("waterType",f.target.value),children:[t.jsx("option",{value:"inland",children:"Inland"}),t.jsx("option",{value:"coastal",children:"Coastal/Nearshore"}),t.jsx("option",{value:"offshore",children:"Offshore"})]})]}),t.jsxs(ie,{children:[t.jsx(le,{children:"Role"}),t.jsxs(mr,{value:c.role,onChange:f=>g("role",f.target.value),children:[t.jsx("option",{value:"captain",children:"Captain"}),t.jsx("option",{value:"crew",children:"Crew"}),t.jsx("option",{value:"observer",children:"Observer"})]})]})]}),t.jsxs(st,{children:[t.jsxs(ie,{children:[t.jsx(le,{children:"Start Time"}),t.jsx(Ge,{type:"text",value:x(r.startTime),disabled:!0})]}),t.jsxs(ie,{children:[t.jsx(le,{children:"End Time"}),t.jsx(Ge,{type:"text",value:x(r.endTime),disabled:!0})]})]}),t.jsx(hr,{children:t.jsx(k,{variant:"primary",onClick:y,disabled:i.isPending,children:i.isPending?"Saving...":"Save Trip Information"})})]}),t.jsxs(Bn,{title:"Manual Data Entry",variant:"secondary",children:[t.jsxs(st,{children:[t.jsxs(ie,{children:[t.jsx(le,{children:"Engine Hours"}),t.jsx(Ge,{type:"number",step:"0.1",min:"0",placeholder:"0.0",value:m.engineHours||"",onChange:f=>d("engineHours",parseFloat(f.target.value))})]}),t.jsxs(ie,{children:[t.jsx(le,{children:"Fuel Consumed (gallons)"}),t.jsx(Ge,{type:"number",step:"0.1",min:"0",placeholder:"0.0",value:m.fuelConsumed||"",onChange:f=>d("fuelConsumed",parseFloat(f.target.value))})]}),t.jsxs(ie,{children:[t.jsx(le,{children:"Number of Passengers"}),t.jsx(Ge,{type:"number",min:"0",placeholder:"0",value:m.numberOfPassengers||"",onChange:f=>d("numberOfPassengers",parseInt(f.target.value))})]})]}),t.jsx(st,{children:t.jsxs(ie,{children:[t.jsx(le,{children:"Destination"}),t.jsx(Ge,{type:"text",placeholder:"Enter destination",value:m.destination||"",onChange:f=>d("destination",f.target.value)})]})}),t.jsx(st,{children:t.jsxs(ie,{children:[t.jsx(le,{children:"Weather Conditions"}),t.jsx(Ad,{placeholder:"Describe weather conditions, sea state, visibility, etc.",value:m.weatherConditions||"",onChange:f=>d("weatherConditions",f.target.value)})]})}),t.jsx(hr,{children:t.jsx(k,{variant:"secondary",onClick:p,disabled:l.isPending,children:l.isPending?"Saving...":"Save Manual Data"})})]})]}),t.jsxs(hr,{children:[t.jsx(J,{to:`/trips/${r.id}`,style:{textDecoration:"none"},children:t.jsx(k,{variant:"accent",children:"View Trip Details"})}),t.jsx(J,{to:"/trips",style:{textDecoration:"none"},children:t.jsx(k,{variant:"secondary",children:"Back to Trip Log"})})]})]})},Xo=e=>Z({queryKey:["notes",e],queryFn:()=>M.getNotes(e)}),es=e=>Z({queryKey:["notes",e],queryFn:()=>M.getNote(e),enabled:!!e}),zd=()=>{const e=G();return Q({mutationFn:r=>M.createNote(r),onSuccess:()=>{e.invalidateQueries({queryKey:["notes"]})}})},Nd=()=>{const e=G();return Q({mutationFn:({id:r,data:n})=>M.updateNote(r,n),onSuccess:r=>{e.invalidateQueries({queryKey:["notes"]}),e.setQueryData(["notes",r.id],r)}})},ts=()=>{const e=G();return Q({mutationFn:r=>M.deleteNote(r),onSuccess:()=>{e.invalidateQueries({queryKey:["notes"]})}})},rs=()=>{const{data:e}=Xo();return((e==null?void 0:e.reduce((n,o)=>(o.tags.forEach(a=>{n.includes(a)||n.push(a)}),n),[]))||[]).sort()},Pn=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,Rd=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Id=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,yt=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,bt=s.label`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,pr=s.select`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }

  option {
    background-color: ${e=>e.theme.colors.surface.dark};
    color: ${e=>e.theme.colors.text.primary};
  }
`,Md=s.input`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }

  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
  }
`,Bd=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,Pd=s.div`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.lilac};
  border-radius: ${e=>e.theme.borderRadius.lg};
  padding: ${e=>e.theme.spacing.md};
  cursor: pointer;
  transition: all ${e=>e.theme.animation.normal} ease;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: ${e=>e.theme.shadows.glow};
  }
`,Od=s.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,Ud=s.span`
  background-color: ${e=>{switch(e.type){case"boat":return e.theme.colors.primary.anakiwa;case"trip":return e.theme.colors.primary.lilac;default:return e.theme.colors.primary.neonCarrot}}};
  color: ${e=>e.theme.colors.text.inverse};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
`,qd=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.xs};
`,On=s.button`
  background: none;
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.primary.anakiwa};
  padding: ${e=>e.theme.spacing.xs};
  border-radius: ${e=>e.theme.borderRadius.sm};
  cursor: pointer;
  font-size: ${e=>e.theme.typography.fontSize.xs};
  transition: all ${e=>e.theme.animation.fast} ease;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    color: ${e=>e.theme.colors.primary.neonCarrot};
  }

  &.danger:hover {
    border-color: ${e=>e.theme.colors.status.error};
    color: ${e=>e.theme.colors.status.error};
  }
`,Hd=s.div`
  color: ${e=>e.theme.colors.text.primary};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  margin-bottom: ${e=>e.theme.spacing.sm};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Vd=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.xs};
  margin-bottom: ${e=>e.theme.spacing.sm};
`,Wd=s.span`
  background-color: ${e=>e.theme.colors.surface.medium};
  color: ${e=>e.theme.colors.text.secondary};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
`,Gd=s.div`
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  text-align: right;
`,Kd=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.text.muted};
  
  .empty-icon {
    font-size: 48px;
    margin-bottom: ${e=>e.theme.spacing.md};
  }
  
  .empty-title {
    font-size: ${e=>e.theme.typography.fontSize.lg};
    font-weight: ${e=>e.theme.typography.fontWeight.bold};
    margin-bottom: ${e=>e.theme.spacing.sm};
    color: ${e=>e.theme.colors.primary.neonCarrot};
  }
`,Jd=()=>{const e=Y(),[r,n]=C.useState(""),[o,a]=C.useState(""),[i,l]=C.useState(""),[c,u]=C.useState(""),{data:m}=te(),h=rs(),b=C.useMemo(()=>{const T={};return r&&(T.type=r),o&&(T.boatId=o),i&&(T.tags=[i]),T},[r,o,i]),{data:$,isLoading:g}=Xo(b),d=ts(),y=C.useMemo(()=>$?$.filter(T=>{if(c){const N=c.toLowerCase();return T.content.toLowerCase().includes(N)||T.tags.some(B=>B.toLowerCase().includes(N))}return!0}):[],[$,c]),p=()=>{e("/notes/new")},x=(T,N)=>{N.stopPropagation(),e(`/notes/${T}/edit`)},j=async(T,N)=>{if(N.stopPropagation(),window.confirm("Are you sure you want to delete this note?"))try{await d.mutateAsync(T)}catch(B){console.error("Failed to delete note:",B)}},f=T=>{e(`/notes/${T}`)},w=T=>new Date(T).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),D=T=>{if(!T||!m)return null;const N=m.find(B=>B.id===T);return N==null?void 0:N.name};return g?t.jsxs(Pn,{children:[t.jsx(I,{level:1,children:"Notes Database"}),t.jsx(F,{title:"Loading",children:t.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading notes..."})})]}):t.jsxs(Pn,{children:[t.jsxs(Rd,{children:[t.jsx(I,{level:1,children:"Notes Database"}),t.jsx(k,{onClick:p,children:"Create New Note"})]}),t.jsx(F,{title:"Filters",variant:"secondary",children:t.jsxs(Id,{children:[t.jsxs(yt,{children:[t.jsx(bt,{children:"Note Type"}),t.jsxs(pr,{value:r,onChange:T=>n(T.target.value),children:[t.jsx("option",{value:"",children:"All Types"}),t.jsx("option",{value:"general",children:"General"}),t.jsx("option",{value:"boat",children:"Boat-Specific"}),t.jsx("option",{value:"trip",children:"Trip"})]})]}),t.jsxs(yt,{children:[t.jsx(bt,{children:"Boat"}),t.jsxs(pr,{value:o,onChange:T=>a(T.target.value),disabled:r==="general"||r==="trip",children:[t.jsx("option",{value:"",children:"All Boats"}),m==null?void 0:m.map(T=>t.jsx("option",{value:T.id,children:T.name},T.id))]})]}),t.jsxs(yt,{children:[t.jsx(bt,{children:"Tag"}),t.jsxs(pr,{value:i,onChange:T=>l(T.target.value),children:[t.jsx("option",{value:"",children:"All Tags"}),h.map(T=>t.jsx("option",{value:T,children:T},T))]})]}),t.jsxs(yt,{children:[t.jsx(bt,{children:"Search"}),t.jsx(Md,{type:"text",placeholder:"Search notes content...",value:c,onChange:T=>u(T.target.value)})]})]})}),y.length===0?t.jsx(F,{children:t.jsxs(Kd,{children:[t.jsx("div",{className:"empty-icon",children:"📝"}),t.jsx("div",{className:"empty-title",children:"No Notes Found"}),t.jsx("div",{children:($==null?void 0:$.length)===0?"Create your first note to get started.":"Try adjusting your filters to find notes."})]})}):t.jsx(Bd,{children:y.map(T=>t.jsxs(Pd,{onClick:()=>f(T.id),children:[t.jsxs(Od,{children:[t.jsxs(Ud,{type:T.type,children:[T.type,T.type==="boat"&&D(T.boatId)&&` - ${D(T.boatId)}`]}),t.jsxs(qd,{children:[t.jsx(On,{onClick:N=>x(T.id,N),children:"Edit"}),t.jsx(On,{className:"danger",onClick:N=>j(T.id,N),children:"Delete"})]})]}),t.jsx(Hd,{children:T.content}),T.tags.length>0&&t.jsx(Vd,{children:T.tags.map(N=>t.jsx(Wd,{children:N},N))}),t.jsxs(Gd,{children:[w(T.createdAt),T.updatedAt!==T.createdAt&&" (edited)"]})]},T.id))})]})},ur=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,Qd=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,_d=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,Zd=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Ke=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,Je=s.span`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,Qe=s.span`
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
`,Yd=s.span`
  background-color: ${e=>{switch(e.type){case"boat":return e.theme.colors.primary.anakiwa;case"trip":return e.theme.colors.primary.lilac;default:return e.theme.colors.primary.neonCarrot}}};
  color: ${e=>e.theme.colors.text.inverse};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
`,Xd=s.div`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.lg};
  color: ${e=>e.theme.colors.text.primary};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  white-space: pre-wrap;
  font-size: ${e=>e.theme.typography.fontSize.md};
`,em=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.sm};
`,tm=s.span`
  background-color: ${e=>e.theme.colors.primary.lilac};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,rm=s.span`
  color: ${e=>e.theme.colors.text.muted};
  font-style: italic;
`,nm=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.text.muted};
`,om=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.status.error};
`,sm=()=>{const e=Y(),{id:r}=be(),{data:n,isLoading:o,error:a}=es(r||""),{data:i}=te(),{data:l}=Ae(),c=ts(),u=()=>{e(`/notes/${r}/edit`)},m=async()=>{if(window.confirm("Are you sure you want to delete this note?"))try{await c.mutateAsync(r),e("/notes")}catch(d){console.error("Failed to delete note:",d)}},h=()=>{e("/notes")},b=d=>new Date(d).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),$=d=>{if(!d||!i)return"Unknown Boat";const y=i.find(p=>p.id===d);return(y==null?void 0:y.name)||"Unknown Boat"},g=d=>{if(!d||!l)return"Unknown Trip";const y=l.find(j=>j.id===d);if(!y)return"Unknown Trip";const p=$(y.boatId);return`${new Date(y.startTime).toLocaleDateString()} - ${p}`};return o?t.jsxs(ur,{children:[t.jsx(I,{level:1,children:"Note Details"}),t.jsx(F,{children:t.jsx(nm,{children:"Loading note..."})})]}):a||!n?t.jsxs(ur,{children:[t.jsx(I,{level:1,children:"Note Details"}),t.jsx(F,{children:t.jsxs(om,{children:["Note not found or failed to load.",t.jsx("div",{style:{marginTop:"1rem"},children:t.jsx(k,{onClick:h,children:"Back to Notes"})})]})})]}):t.jsxs(ur,{children:[t.jsxs(Qd,{children:[t.jsx(I,{level:1,children:"Note Details"}),t.jsxs(_d,{children:[t.jsx(k,{variant:"secondary",onClick:h,children:"Back to Notes"}),t.jsx(k,{variant:"accent",onClick:u,children:"Edit Note"}),t.jsx(k,{variant:"danger",onClick:m,disabled:c.isPending,children:c.isPending?"Deleting...":"Delete"})]})]}),t.jsx(F,{title:"Note Information",children:t.jsxs(Zd,{children:[t.jsxs(Ke,{children:[t.jsx(Je,{children:"Type"}),t.jsx(Qe,{children:t.jsx(Yd,{type:n.type,children:n.type})})]}),n.type==="boat"&&n.boatId&&t.jsxs(Ke,{children:[t.jsx(Je,{children:"Boat"}),t.jsx(Qe,{children:$(n.boatId)})]}),n.type==="trip"&&n.tripId&&t.jsxs(Ke,{children:[t.jsx(Je,{children:"Trip"}),t.jsx(Qe,{children:g(n.tripId)})]}),t.jsxs(Ke,{children:[t.jsx(Je,{children:"Created"}),t.jsx(Qe,{children:b(n.createdAt)})]}),n.updatedAt!==n.createdAt&&t.jsxs(Ke,{children:[t.jsx(Je,{children:"Last Modified"}),t.jsx(Qe,{children:b(n.updatedAt)})]}),t.jsxs(Ke,{children:[t.jsx(Je,{children:"Tags"}),t.jsx(Qe,{children:n.tags.length>0?t.jsx(em,{children:n.tags.map(d=>t.jsx(tm,{children:d},d))}):t.jsx(rm,{children:"No tags"})})]})]})}),t.jsx(F,{title:"Content",children:t.jsx(Xd,{children:n.content})})]})},Un=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,am=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,im=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,jt=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,_e=s.label`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,gr=s.select`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }

  option {
    background-color: ${e=>e.theme.colors.surface.dark};
    color: ${e=>e.theme.colors.text.primary};
  }
`,lm=s.textarea`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  min-height: 200px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }

  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
  }
`,cm=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,dm=s.input`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }

  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
  }
`,mm=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.sm};
`,hm=s.span`
  background-color: ${e=>e.theme.colors.primary.lilac};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.xs};

  .remove-tag {
    background: none;
    border: none;
    color: ${e=>e.theme.colors.text.primary};
    cursor: pointer;
    font-size: ${e=>e.theme.typography.fontSize.sm};
    padding: 0;

    &:hover {
      color: ${e=>e.theme.colors.status.error};
    }
  }
`,pm=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.xs};
  margin-top: ${e=>e.theme.spacing.sm};
`,um=s.button`
  background: none;
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.primary.anakiwa};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  cursor: pointer;
  transition: all ${e=>e.theme.animation.fast} ease;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    color: ${e=>e.theme.colors.primary.neonCarrot};
    background-color: ${e=>e.theme.colors.primary.neonCarrot}20;
  }
`,gm=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${e=>e.theme.spacing.lg};
`,xm=s.div`
  color: ${e=>e.theme.colors.status.error};
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.status.error};
  padding: ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.borderRadius.md};
  margin-bottom: ${e=>e.theme.spacing.md};
`,qn=()=>{const e=Y(),{id:r}=be(),n=!!r&&r!=="new",[o,a]=C.useState("general"),[i,l]=C.useState(""),[c,u]=C.useState(""),[m,h]=C.useState(""),[b,$]=C.useState([]),[g,d]=C.useState(""),[y,p]=C.useState(""),{data:x,isLoading:j}=es(r||""),{data:f}=te(),{data:w}=Ae(),D=rs(),T=zd(),N=Nd();C.useEffect(()=>{x&&n&&(a(x.type),l(x.boatId||""),u(x.tripId||""),h(x.content),$(x.tags))},[x,n]);const B=()=>{const R=g.trim();R&&!b.includes(R)&&($([...b,R]),d(""))},E=R=>{$(b.filter(H=>H!==R))},S=R=>{b.includes(R)||$([...b,R])},z=R=>{R.key==="Enter"&&(R.preventDefault(),B())},O=async()=>{if(p(""),!m.trim()){p("Note content is required");return}if(o==="boat"&&!i){p("Please select a boat for boat-specific notes");return}if(o==="trip"&&!c){p("Please select a trip for trip notes");return}try{const R={content:m.trim(),type:o,boatId:o==="boat"?i:void 0,tripId:o==="trip"?c:void 0,tags:b};n?await N.mutateAsync({id:r,data:R}):await T.mutateAsync(R),e("/notes")}catch(R){console.error("Failed to save note:",R),p("Failed to save note. Please try again.")}},q=()=>{e("/notes")},V=D.filter(R=>!b.includes(R));return j&&n?t.jsxs(Un,{children:[t.jsx(I,{level:1,children:"Loading Note"}),t.jsx(F,{title:"Loading",children:t.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading note data..."})})]}):t.jsxs(Un,{children:[t.jsx(am,{children:t.jsx(I,{level:1,children:n?"Edit Note":"Create New Note"})}),t.jsx(F,{title:"Note Details",children:t.jsxs(im,{children:[y&&t.jsx(xm,{children:y}),t.jsxs(jt,{children:[t.jsx(_e,{children:"Note Type"}),t.jsxs(gr,{value:o,onChange:R=>{a(R.target.value),l(""),u("")},children:[t.jsx("option",{value:"general",children:"General Note"}),t.jsx("option",{value:"boat",children:"Boat-Specific Note"}),t.jsx("option",{value:"trip",children:"Trip Note"})]})]}),o==="boat"&&t.jsxs(jt,{children:[t.jsx(_e,{children:"Boat"}),t.jsxs(gr,{value:i,onChange:R=>l(R.target.value),children:[t.jsx("option",{value:"",children:"Select a boat"}),f==null?void 0:f.map(R=>t.jsx("option",{value:R.id,children:R.name},R.id))]})]}),o==="trip"&&t.jsxs(jt,{children:[t.jsx(_e,{children:"Trip"}),t.jsxs(gr,{value:c,onChange:R=>u(R.target.value),children:[t.jsx("option",{value:"",children:"Select a trip"}),w==null?void 0:w.map(R=>{var H;return t.jsxs("option",{value:R.id,children:[new Date(R.startTime).toLocaleDateString()," - ",((H=f==null?void 0:f.find(Oe=>Oe.id===R.boatId))==null?void 0:H.name)||"Unknown Boat"]},R.id)})]})]}),t.jsxs(jt,{children:[t.jsx(_e,{children:"Content"}),t.jsx(lm,{value:m,onChange:R=>h(R.target.value),placeholder:"Enter your note content here..."})]}),t.jsxs(cm,{children:[t.jsx(_e,{children:"Tags"}),t.jsx(dm,{type:"text",value:g,onChange:R=>d(R.target.value),onKeyPress:z,placeholder:"Add a tag and press Enter"}),b.length>0&&t.jsx(mm,{children:b.map(R=>t.jsxs(hm,{children:[R,t.jsx("button",{className:"remove-tag",onClick:()=>E(R),type:"button",children:"×"})]},R))}),V.length>0&&t.jsxs("div",{children:[t.jsx(_e,{style:{fontSize:"12px",marginBottom:"8px"},children:"Suggested Tags"}),t.jsx(pm,{children:V.slice(0,10).map(R=>t.jsx(um,{onClick:()=>S(R),type:"button",children:R},R))})]})]}),t.jsxs(gm,{children:[t.jsx(k,{variant:"secondary",onClick:q,children:"Cancel"}),t.jsx(k,{onClick:O,disabled:T.isPending||N.isPending,children:T.isPending||N.isPending?"Saving...":"Save Note"})]})]})})]})},Ht={todoLists:e=>["todoLists",e],todoList:e=>["todoList",e]},fm=e=>Z({queryKey:Ht.todoLists(e),queryFn:()=>M.getTodoLists(e)}),ym=e=>Z({queryKey:Ht.todoList(e),queryFn:()=>M.getTodoList(e),enabled:!!e}),bm=()=>{const e=G();return Q({mutationFn:r=>M.createTodoList(r),onSuccess:()=>{e.invalidateQueries({queryKey:["todoLists"]})}})},ns=()=>{const e=G();return Q({mutationFn:r=>M.deleteTodoList(r),onSuccess:()=>{e.invalidateQueries({queryKey:["todoLists"]})}})},jm=()=>{const e=G();return Q({mutationFn:({listId:r,content:n})=>M.addTodoItem(r,n),onSuccess:(r,{listId:n})=>{e.invalidateQueries({queryKey:Ht.todoList(n)}),e.invalidateQueries({queryKey:["todoLists"]})}})},$m=()=>{const e=G();return Q({mutationFn:r=>M.toggleTodoItem(r),onSuccess:r=>{e.invalidateQueries({queryKey:Ht.todoList(r.listId)}),e.invalidateQueries({queryKey:["todoLists"]})}})},Hn=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,vm=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,wm=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Vn=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Wn=s.label`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,Gn=s.select`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }
  
  option {
    background-color: ${e=>e.theme.colors.surface.dark};
    color: ${e=>e.theme.colors.text.primary};
  }
`,Cm=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,Sm=s.div`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.lilac};
  border-radius: ${e=>e.theme.borderRadius.lg};
  padding: ${e=>e.theme.spacing.md};
  cursor: pointer;
  transition: all ${e=>e.theme.animation.normal} ease;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: ${e=>e.theme.shadows.glow};
  }
`,km=s.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,Tm=s.h3`
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  margin: 0;
  flex: 1;
`,Am=s.span`
  background-color: ${e=>{switch(e.type){case"boat":return e.theme.colors.primary.anakiwa;default:return e.theme.colors.primary.neonCarrot}}};
  color: ${e=>e.theme.colors.text.inverse};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left: ${e=>e.theme.spacing.sm};
`,Em=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.xs};
  margin-left: ${e=>e.theme.spacing.sm};
`,Lm=s.button`
  background: none;
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.primary.anakiwa};
  padding: ${e=>e.theme.spacing.xs};
  border-radius: ${e=>e.theme.borderRadius.sm};
  cursor: pointer;
  font-size: ${e=>e.theme.typography.fontSize.xs};
  transition: all ${e=>e.theme.animation.fast} ease;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    color: ${e=>e.theme.colors.primary.neonCarrot};
  }

  &.danger:hover {
    border-color: ${e=>e.theme.colors.status.error};
    color: ${e=>e.theme.colors.status.error};
  }
`,Fm=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.sm};
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Dm=s.div`
  background-color: ${e=>e.theme.colors.surface.medium};
  border-radius: ${e=>e.theme.borderRadius.pill};
  height: 8px;
  overflow: hidden;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,zm=s.div`
  background-color: ${e=>e.theme.colors.primary.neonCarrot};
  height: 100%;
  width: ${e=>e.percentage}%;
  transition: width ${e=>e.theme.animation.normal} ease;
`,Nm=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,xr=s.div`
  color: ${e=>e.completed?e.theme.colors.text.muted:e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  text-decoration: ${e=>e.completed?"line-through":"none"};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &::before {
    content: '${e=>e.completed?"✓":"○"}';
    margin-right: ${e=>e.theme.spacing.xs};
    color: ${e=>e.completed?e.theme.colors.status.success:e.theme.colors.primary.anakiwa};
  }
`,Rm=s.div`
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  text-align: right;
  margin-top: ${e=>e.theme.spacing.sm};
`,Im=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.text.muted};
  
  .empty-icon {
    font-size: 48px;
    margin-bottom: ${e=>e.theme.spacing.md};
  }
  
  .empty-title {
    font-size: ${e=>e.theme.typography.fontSize.lg};
    font-weight: ${e=>e.theme.typography.fontWeight.bold};
    margin-bottom: ${e=>e.theme.spacing.sm};
    color: ${e=>e.theme.colors.primary.neonCarrot};
  }
`,Mm=()=>{const e=Y(),[r,n]=C.useState(""),[o,a]=C.useState(""),{data:i}=te(),{data:l,isLoading:c}=fm(),u=ns(),m=C.useMemo(()=>l?l.filter(p=>!(r&&p.type!==r||o&&p.boatId!==o)):[],[l,r,o]),h=()=>{e("/todos/new")},b=p=>{e(`/todos/${p}`)},$=async(p,x)=>{if(x.stopPropagation(),window.confirm("Are you sure you want to delete this to-do list? All items will be permanently removed."))try{await u.mutateAsync(p)}catch(j){console.error("Failed to delete to-do list:",j)}},g=p=>new Date(p).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),d=p=>{if(!p||!i)return null;const x=i.find(j=>j.id===p);return x==null?void 0:x.name},y=p=>{const x=p.items.length,j=p.items.filter(w=>w.completed).length,f=x>0?j/x*100:0;return{totalItems:x,completedItems:j,percentage:f}};return c?t.jsxs(Hn,{children:[t.jsx(I,{level:1,children:"To-Do Lists"}),t.jsx(F,{title:"Loading",children:t.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading to-do lists..."})})]}):t.jsxs(Hn,{children:[t.jsxs(vm,{children:[t.jsx(I,{level:1,children:"To-Do Lists"}),t.jsx(k,{onClick:h,children:"Create New List"})]}),t.jsx(F,{title:"Filters",variant:"secondary",children:t.jsxs(wm,{children:[t.jsxs(Vn,{children:[t.jsx(Wn,{children:"List Type"}),t.jsxs(Gn,{value:r,onChange:p=>n(p.target.value),children:[t.jsx("option",{value:"",children:"All Types"}),t.jsx("option",{value:"general",children:"General"}),t.jsx("option",{value:"boat",children:"Boat-Specific"})]})]}),t.jsxs(Vn,{children:[t.jsx(Wn,{children:"Boat"}),t.jsxs(Gn,{value:o,onChange:p=>a(p.target.value),disabled:r==="general",children:[t.jsx("option",{value:"",children:"All Boats"}),i==null?void 0:i.map(p=>t.jsx("option",{value:p.id,children:p.name},p.id))]})]})]})}),m.length===0?t.jsx(F,{children:t.jsxs(Im,{children:[t.jsx("div",{className:"empty-icon",children:"📋"}),t.jsx("div",{className:"empty-title",children:"No To-Do Lists Found"}),t.jsx("div",{children:(l==null?void 0:l.length)===0?"Create your first to-do list to get started.":"Try adjusting your filters to find lists."})]})}):t.jsx(Cm,{children:m.map(p=>{const x=y(p),j=d(p.boatId);return t.jsxs(Sm,{onClick:()=>b(p.id),children:[t.jsxs(km,{children:[t.jsx(Tm,{children:p.title}),t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsxs(Am,{type:p.type,children:[p.type,j&&` - ${j}`]}),t.jsx(Em,{children:t.jsx(Lm,{className:"danger",onClick:f=>$(p.id,f),children:"Delete"})})]})]}),t.jsxs(Fm,{children:[t.jsxs("span",{children:[x.completedItems," of ",x.totalItems," completed"]}),t.jsxs("span",{children:[Math.round(x.percentage),"%"]})]}),t.jsx(Dm,{children:t.jsx(zm,{percentage:x.percentage})}),t.jsxs(Nm,{children:[p.items.slice(0,3).map(f=>t.jsx(xr,{completed:f.completed,children:f.content},f.id)),p.items.length>3&&t.jsxs(xr,{completed:!1,children:["... and ",p.items.length-3," more items"]}),p.items.length===0&&t.jsx(xr,{completed:!1,children:"No items yet"})]}),t.jsxs(Rm,{children:["Created ",g(p.createdAt),p.updatedAt!==p.createdAt&&" (updated)"]})]},p.id)})})]})},fr=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,Bm=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Pm=s(k)`
  margin-right: ${e=>e.theme.spacing.md};
`,Om=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Um=s.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,qm=s.span`
  background-color: ${e=>{switch(e.type){case"boat":return e.theme.colors.primary.anakiwa;default:return e.theme.colors.primary.neonCarrot}}};
  color: ${e=>e.theme.colors.text.inverse};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Hm=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,$t=s.div`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 2px solid ${e=>e.theme.colors.primary.lilac};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
  text-align: center;
`,vt=s.div`
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,wt=s.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Vm=s.div`
  background-color: ${e=>e.theme.colors.surface.medium};
  border-radius: ${e=>e.theme.borderRadius.pill};
  height: 12px;
  overflow: hidden;
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Wm=s.div`
  background-color: ${e=>e.theme.colors.primary.neonCarrot};
  height: 100%;
  width: ${e=>e.percentage}%;
  transition: width ${e=>e.theme.animation.normal} ease;
`,Gm=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Km=s.input`
  flex: 1;
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }

  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
  }
`,Jm=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Qm=s.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.completed?e.theme.colors.status.success:e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
  transition: all ${e=>e.theme.animation.normal} ease;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
  }
`,_m=s.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${e=>e.completed?e.theme.colors.status.success:e.theme.colors.primary.anakiwa};
  background-color: ${e=>e.completed?e.theme.colors.status.success:"transparent"};
  color: ${e=>e.theme.colors.text.inverse};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  transition: all ${e=>e.theme.animation.fast} ease;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    background-color: ${e=>e.completed?e.theme.colors.status.success:e.theme.colors.primary.neonCarrot+"40"};
  }
`,Zm=s.div`
  flex: 1;
  color: ${e=>e.completed?e.theme.colors.text.muted:e.theme.colors.text.primary};
  text-decoration: ${e=>e.completed?"line-through":"none"};
  font-size: ${e=>e.theme.typography.fontSize.md};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
`,Ym=s.div`
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  text-align: right;
  min-width: 120px;
`,Kn=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.text.muted};
  
  .empty-icon {
    font-size: 48px;
    margin-bottom: ${e=>e.theme.spacing.md};
  }
  
  .empty-title {
    font-size: ${e=>e.theme.typography.fontSize.lg};
    font-weight: ${e=>e.theme.typography.fontWeight.bold};
    margin-bottom: ${e=>e.theme.spacing.sm};
    color: ${e=>e.theme.colors.primary.neonCarrot};
  }
`,Jn=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${e=>e.theme.spacing.lg};
`,Xm=s(k)`
  background-color: ${e=>e.theme.colors.status.error};
  border-color: ${e=>e.theme.colors.status.error};
  
  &:hover {
    background-color: ${e=>e.theme.colors.status.error}CC;
  }
`,eh=()=>{const e=Y(),{id:r}=be(),[n,o]=C.useState(""),{data:a,isLoading:i}=ym(r||""),{data:l}=te(),c=jm(),u=$m(),m=ns(),h=()=>{e("/todos")},b=async f=>{if(f.preventDefault(),!(!n.trim()||!r))try{await c.mutateAsync({listId:r,content:n.trim()}),o("")}catch(w){console.error("Failed to add item:",w)}},$=async f=>{try{await u.mutateAsync(f)}catch(w){console.error("Failed to toggle item:",w)}},g=async()=>{if(r&&window.confirm("Are you sure you want to delete this to-do list? All items will be permanently removed."))try{await m.mutateAsync(r),e("/todos")}catch(f){console.error("Failed to delete to-do list:",f)}},d=f=>new Date(f).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),y=f=>{if(!f||!l)return null;const w=l.find(D=>D.id===f);return w==null?void 0:w.name},p=()=>{if(!a)return{totalItems:0,completedItems:0,percentage:0};const f=a.items.length,w=a.items.filter(T=>T.completed).length,D=f>0?w/f*100:0;return{totalItems:f,completedItems:w,percentage:D}};if(i)return t.jsxs(fr,{children:[t.jsx(I,{level:1,children:"Loading To-Do List"}),t.jsx(F,{title:"Loading",children:t.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading to-do list..."})})]});if(!a)return t.jsxs(fr,{children:[t.jsx(I,{level:1,children:"To-Do List Not Found"}),t.jsxs(F,{children:[t.jsxs(Kn,{children:[t.jsx("div",{className:"empty-icon",children:"❌"}),t.jsx("div",{className:"empty-title",children:"List Not Found"}),t.jsx("div",{children:"The requested to-do list could not be found."})]}),t.jsx(Jn,{children:t.jsx(k,{onClick:h,children:"Back to Lists"})})]})]});const x=p(),j=y(a.boatId);return t.jsxs(fr,{children:[t.jsx(Bm,{children:t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx(Pm,{onClick:h,children:"← Back"}),t.jsx(I,{level:1,children:a.title})]})}),t.jsx(Om,{children:t.jsxs(Um,{children:[t.jsxs(qm,{type:a.type,children:[a.type,j&&` - ${j}`]}),t.jsxs("span",{children:["Created ",d(a.createdAt)]}),a.updatedAt!==a.createdAt&&t.jsxs("span",{children:["• Updated ",d(a.updatedAt)]})]})}),t.jsxs(Hm,{children:[t.jsxs($t,{children:[t.jsx(vt,{children:x.totalItems}),t.jsx(wt,{children:"Total Items"})]}),t.jsxs($t,{children:[t.jsx(vt,{children:x.completedItems}),t.jsx(wt,{children:"Completed"})]}),t.jsxs($t,{children:[t.jsx(vt,{children:x.totalItems-x.completedItems}),t.jsx(wt,{children:"Remaining"})]}),t.jsxs($t,{children:[t.jsxs(vt,{children:[Math.round(x.percentage),"%"]}),t.jsx(wt,{children:"Progress"})]})]}),t.jsx(Vm,{children:t.jsx(Wm,{percentage:x.percentage})}),t.jsx(F,{title:"Add New Item",variant:"secondary",children:t.jsx("form",{onSubmit:b,children:t.jsxs(Gm,{children:[t.jsx(Km,{type:"text",placeholder:"Enter new to-do item...",value:n,onChange:f=>o(f.target.value),disabled:c.isPending}),t.jsx(k,{type:"submit",disabled:!n.trim()||c.isPending,children:c.isPending?"Adding...":"Add Item"})]})})}),t.jsx(F,{title:`Items (${x.totalItems})`,children:a.items.length===0?t.jsxs(Kn,{children:[t.jsx("div",{className:"empty-icon",children:"📝"}),t.jsx("div",{className:"empty-title",children:"No Items Yet"}),t.jsx("div",{children:"Add your first to-do item to get started."})]}):t.jsx(Jm,{children:a.items.map(f=>t.jsxs(Qm,{completed:f.completed,children:[t.jsx(_m,{completed:f.completed,onClick:()=>$(f.id),disabled:u.isPending,children:f.completed&&"✓"}),t.jsx(Zm,{completed:f.completed,children:f.content}),t.jsx(Ym,{children:f.completed&&f.completedAt?`Completed ${d(f.completedAt)}`:`Added ${d(f.createdAt)}`})]},f.id))})}),t.jsx(Jn,{children:t.jsx(Xm,{onClick:g,children:"Delete List"})})]})},th=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 600px;
  margin: 0 auto;
`,rh=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,nh=s(k)`
  margin-right: ${e=>e.theme.spacing.md};
`,oh=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,yr=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,br=s.label`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,sh=s.input`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }

  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
  }
`,Qn=s.select`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }

  option {
    background-color: ${e=>e.theme.colors.surface.dark};
    color: ${e=>e.theme.colors.text.primary};
  }
`,_n=s.div`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  margin-top: ${e=>e.theme.spacing.xs};
  padding: ${e=>e.theme.spacing.sm};
  background-color: ${e=>e.theme.colors.surface.medium};
  border-radius: ${e=>e.theme.borderRadius.sm};
  border-left: 4px solid ${e=>e.theme.colors.primary.anakiwa};
`,ah=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${e=>e.theme.spacing.lg};
`,ih=s.div`
  color: ${e=>e.theme.colors.status.error};
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.status.error};
  padding: ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.borderRadius.md};
  margin-bottom: ${e=>e.theme.spacing.md};
`,lh=()=>{const e=Y(),[r,n]=C.useState(""),[o,a]=C.useState("general"),[i,l]=C.useState(""),[c,u]=C.useState(""),{data:m}=te(),h=bm(),b=()=>{e("/todos")},$=async d=>{if(d.preventDefault(),u(""),!r.trim()){u("Please enter a title for the to-do list.");return}if(o==="boat"&&!i){u("Please select a boat for boat-specific lists.");return}try{const y=await h.mutateAsync({title:r.trim(),type:o,boatId:o==="boat"?i:void 0});e(`/todos/${y.id}`)}catch(y){console.error("Failed to create to-do list:",y),u(y.message||"Failed to create to-do list. Please try again.")}},g=()=>{switch(o){case"general":return"General lists are not associated with any specific boat and can contain any type of tasks.";case"boat":return"Boat-specific lists are associated with a particular boat and typically contain maintenance, preparation, or boat-related tasks.";default:return""}};return t.jsxs(th,{children:[t.jsx(rh,{children:t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx(nh,{onClick:b,children:"← Back"}),t.jsx(I,{level:1,children:"Create New To-Do List"})]})}),t.jsxs(F,{title:"List Details",children:[c&&t.jsx(ih,{children:c}),t.jsx("form",{onSubmit:$,children:t.jsxs(oh,{children:[t.jsxs(yr,{children:[t.jsx(br,{htmlFor:"title",children:"List Title *"}),t.jsx(sh,{id:"title",type:"text",placeholder:"Enter a descriptive title for your to-do list...",value:r,onChange:d=>n(d.target.value),maxLength:100,required:!0})]}),t.jsxs(yr,{children:[t.jsx(br,{htmlFor:"type",children:"List Type *"}),t.jsxs(Qn,{id:"type",value:o,onChange:d=>a(d.target.value),required:!0,children:[t.jsx("option",{value:"general",children:"General"}),t.jsx("option",{value:"boat",children:"Boat-Specific"})]}),t.jsx(_n,{children:g()})]}),o==="boat"&&t.jsxs(yr,{children:[t.jsx(br,{htmlFor:"boat",children:"Select Boat *"}),t.jsxs(Qn,{id:"boat",value:i,onChange:d=>l(d.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Choose a boat..."}),m==null?void 0:m.map(d=>t.jsx("option",{value:d.id,children:d.name},d.id))]}),(m==null?void 0:m.length)===0&&t.jsx(_n,{children:"No boats available. You'll need to create a boat first before creating boat-specific to-do lists."})]}),t.jsxs(ah,{children:[t.jsx(k,{type:"button",variant:"secondary",onClick:b,children:"Cancel"}),t.jsx(k,{type:"submit",disabled:h.isPending||o==="boat"&&(m==null?void 0:m.length)===0,children:h.isPending?"Creating...":"Create List"})]})]})})]}),t.jsx(F,{title:"Getting Started",variant:"secondary",children:t.jsxs("div",{style:{color:"#999",fontSize:"14px",lineHeight:"1.6"},children:[t.jsx("p",{children:t.jsx("strong",{children:"Tips for creating effective to-do lists:"})}),t.jsxs("ul",{style:{marginLeft:"20px",marginTop:"10px"},children:[t.jsx("li",{children:"Use descriptive titles that clearly indicate the purpose of the list"}),t.jsx("li",{children:'Choose "General" for personal tasks, shopping lists, or general reminders'}),t.jsx("li",{children:'Choose "Boat-Specific" for maintenance tasks, pre-departure checklists, or boat projects'}),t.jsx("li",{children:"You can add items to your list immediately after creating it"})]})]})})]})};function os(e){return Z({queryKey:["maintenance-templates",e],queryFn:()=>M.getMaintenanceTemplates(e)})}function ss(e,r){return Z({queryKey:["maintenance-template",e],queryFn:()=>M.getMaintenanceTemplate(e),enabled:(r==null?void 0:r.enabled)!==void 0?r.enabled:!!e})}function ch(){const e=G();return Q({mutationFn:r=>M.createMaintenanceTemplate(r),onSuccess:()=>{e.invalidateQueries({queryKey:["maintenance-templates"]})}})}function dh(){const e=G();return Q({mutationFn:({id:r,data:n})=>M.updateMaintenanceTemplate(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:["maintenance-template",n]}),e.invalidateQueries({queryKey:["maintenance-templates"]})}})}function mh(){const e=G();return Q({mutationFn:r=>M.deleteMaintenanceTemplate(r),onSuccess:()=>{e.invalidateQueries({queryKey:["maintenance-templates"]}),e.invalidateQueries({queryKey:["maintenance-events"]})}})}function Zr(e){return Z({queryKey:["maintenance-events","upcoming",e],queryFn:()=>M.getUpcomingMaintenanceEvents(e)})}function as(e){return Z({queryKey:["maintenance-events","completed",e],queryFn:()=>M.getCompletedMaintenanceEvents(e)})}function hh(e){return Z({queryKey:["maintenance-event",e],queryFn:()=>M.getMaintenanceEvent(e),enabled:!!e})}function ph(){const e=G();return Q({mutationFn:({id:r,data:n})=>M.completeMaintenanceEvent(r,n),onSuccess:()=>{e.invalidateQueries({queryKey:["maintenance-events"]})}})}const uh=s.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,gh=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,xh=s.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,jr=s(k)`
  background-color: ${e=>e.active?e.theme.colors.primary.neonCarrot:e.theme.colors.primary.lilac};
  opacity: ${e=>e.active?1:.7};
`,fh=s(F)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,Zn=s.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`,Yn=s(F)`
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${e=>e.theme.colors.primary.lilac}20;
  }
`,Xn=s.div`
  display: flex;
  justify-content: between;
  align-items: flex-start;
  margin-bottom: 10px;
`,eo=s.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin: 0;
  font-size: 18px;
  flex: 1;
`,to=s.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
`,ro=s.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${e=>{switch(e.status){case"active":return e.theme.colors.primary.anakiwa;case"inactive":return e.theme.colors.text.secondary;case"due":return e.theme.colors.primary.neonCarrot;case"overdue":return"#ff4444";case"completed":return"#44ff44";default:return e.theme.colors.text.secondary}}};
  color: ${e=>e.theme.colors.background};
`,yh=s.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
`,bh=s.select`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
`;function jh(){const[e,r]=C.useState("templates"),[n,o]=C.useState(""),{data:a=[]}=te(),{data:i=[],isLoading:l}=os(n||void 0),{data:c=[],isLoading:u}=Zr(n||void 0),{data:m=[],isLoading:h}=as(n||void 0),b=j=>{if(!j)return"One-time";const{type:f,interval:w}=j,D=w===1?f.slice(0,-1):f;return`Every ${w} ${D}`},$=j=>j?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(j):"N/A",g=j=>{if(!j)return"N/A";const f=Math.floor(j/60),w=j%60;return f>0?`${f}h ${w}m`:`${w}m`},d=j=>{if(j.completedAt)return"completed";const f=new Date(j.dueDate),w=new Date,D=Math.ceil((f.getTime()-w.getTime())/(1e3*60*60*24));return D<0?"overdue":D<=7?"due":"active"},y=()=>t.jsx(Zn,{children:i.map(j=>{var f;return t.jsx(J,{to:`/maintenance/templates/${j.id}`,style:{textDecoration:"none"},children:t.jsxs(Yn,{children:[t.jsxs(Xn,{children:[t.jsx(eo,{children:j.title}),t.jsx(ro,{status:j.isActive?"active":"inactive",children:j.isActive?"Active":"Inactive"})]}),t.jsxs(to,{children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Boat:"})," ",((f=j.boat)==null?void 0:f.name)||"Unknown"]}),j.component&&t.jsxs("div",{children:[t.jsx("strong",{children:"Component:"})," ",j.component]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Recurrence:"})," ",b(j.recurrence)]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Est. Cost:"})," ",$(j.estimatedCost)]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Est. Time:"})," ",g(j.estimatedTime)]})]}),j.description&&t.jsx("div",{style:{marginTop:"10px",fontSize:"14px",color:"#ccc"},children:j.description})]})},j.id)})}),p=(j,f=!1)=>t.jsx(Zn,{children:j.map(w=>{var D,T,N,B;return t.jsx(J,{to:`/maintenance/events/${w.id}`,style:{textDecoration:"none"},children:t.jsxs(Yn,{children:[t.jsxs(Xn,{children:[t.jsx(eo,{children:((D=w.template)==null?void 0:D.title)||"Unknown Task"}),t.jsx(ro,{status:d(w),children:d(w)})]}),t.jsxs(to,{children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Boat:"})," ",((N=(T=w.template)==null?void 0:T.boat)==null?void 0:N.name)||"Unknown"]}),((B=w.template)==null?void 0:B.component)&&t.jsxs("div",{children:[t.jsx("strong",{children:"Component:"})," ",w.template.component]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Due Date:"})," ",new Date(w.dueDate).toLocaleDateString()]}),f&&w.completedAt&&t.jsxs("div",{children:[t.jsx("strong",{children:"Completed:"})," ",new Date(w.completedAt).toLocaleDateString()]}),w.actualCost&&t.jsxs("div",{children:[t.jsx("strong",{children:"Actual Cost:"})," ",$(w.actualCost)]}),w.actualTime&&t.jsxs("div",{children:[t.jsx("strong",{children:"Actual Time:"})," ",g(w.actualTime)]})]}),w.notes&&t.jsx("div",{style:{marginTop:"10px",fontSize:"14px",color:"#ccc"},children:w.notes})]})},w.id)})}),x=l||u||h;return t.jsxs(uh,{children:[t.jsxs(oe,{children:[t.jsx(A,{label:"System Status",value:"OPERATIONAL"}),t.jsx(A,{label:"Active Templates",value:i.filter(j=>j.isActive).length.toString()}),t.jsx(A,{label:"Upcoming Events",value:c.length.toString()}),t.jsx(A,{label:"Overdue Events",value:c.filter(j=>d(j)==="overdue").length.toString()})]}),t.jsxs(gh,{children:[t.jsx(I,{children:"Maintenance Management"}),t.jsxs(yh,{children:[t.jsxs(bh,{value:n,onChange:j=>o(j.target.value),children:[t.jsx("option",{value:"",children:"All Boats"}),a.map(j=>t.jsx("option",{value:j.id,children:j.name},j.id))]}),t.jsx(J,{to:"/maintenance/templates/new",children:t.jsx(k,{children:"New Template"})})]}),t.jsxs(xh,{children:[t.jsxs(jr,{active:e==="templates",onClick:()=>r("templates"),children:["Templates (",i.length,")"]}),t.jsxs(jr,{active:e==="upcoming",onClick:()=>r("upcoming"),children:["Upcoming (",c.length,")"]}),t.jsxs(jr,{active:e==="completed",onClick:()=>r("completed"),children:["Completed (",m.length,")"]})]}),t.jsx(fh,{children:x?t.jsx("div",{style:{textAlign:"center",padding:"40px"},children:t.jsx("div",{style:{color:"#ff9966",fontSize:"18px"},children:"Loading maintenance data..."})}):t.jsxs(t.Fragment,{children:[e==="templates"&&y(),e==="upcoming"&&p(c),e==="completed"&&p(m,!0)]})})]})]})}const $r=s.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,vr=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,wr=s(F)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,$h=s.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,vh=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,Cr=s(F)`
  padding: 15px;
`,Ct=s.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin: 0 0 15px 0;
  font-size: 16px;
  text-transform: uppercase;
`,ue=s.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ge=s.span`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
`,xe=s.span`
  color: ${e=>e.theme.colors.text.primary};
`,wh=s.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${e=>e.active?e.theme.colors.primary.anakiwa:e.theme.colors.text.secondary};
  color: ${e=>e.theme.colors.background};
`,Ch=s.div`
  background-color: ${e=>e.theme.colors.background}40;
  padding: 15px;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.neonCarrot};
  margin-bottom: 20px;
  line-height: 1.5;
`,Sh=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: 18px;
`,kh=s.div`
  padding: 20px;
  text-align: center;
`;function Th(){var h,b;const{id:e}=be(),r=Y(),{data:n,isLoading:o,error:a}=ss(e),i=mh(),l=async()=>{if(!n)return;if(window.confirm(`Are you sure you want to delete the template "${n.title}"? This will also delete all future maintenance events for this template.`))try{await i.mutateAsync(n.id),r("/maintenance")}catch(g){console.error("Failed to delete template:",g),alert("Failed to delete template. Please try again.")}},c=$=>{if(!$)return"One-time";const{type:g,interval:d}=$,y=d===1?g.slice(0,-1):g;return`Every ${d} ${y}`},u=$=>$?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format($):"Not specified",m=$=>{if(!$)return"Not specified";const g=Math.floor($/60),d=$%60;return g>0?`${g}h ${d}m`:`${d}m`};return o?t.jsxs($r,{children:[t.jsx(oe,{children:t.jsx(A,{label:"Status",value:"LOADING"})}),t.jsxs(vr,{children:[t.jsx(I,{children:"Maintenance Template"}),t.jsx(wr,{children:t.jsx(Sh,{children:"Loading template details..."})})]})]}):a||!n?t.jsxs($r,{children:[t.jsx(oe,{children:t.jsx(A,{label:"Status",value:"ERROR"})}),t.jsxs(vr,{children:[t.jsx(I,{children:"Maintenance Template"}),t.jsx(wr,{children:t.jsxs(kh,{children:[t.jsx(he,{type:"error",children:"Template not found or failed to load."}),t.jsx(J,{to:"/maintenance",children:t.jsx(k,{children:"Back to Maintenance"})})]})})]})]}):t.jsxs($r,{children:[t.jsxs(oe,{children:[t.jsx(A,{label:"Template Status",value:n.isActive?"ACTIVE":"INACTIVE"}),t.jsx(A,{label:"Boat",value:((h=n.boat)==null?void 0:h.name)||"Unknown"}),t.jsx(A,{label:"Component",value:n.component||"General"}),t.jsx(A,{label:"Recurrence",value:c(n.recurrence)})]}),t.jsxs(vr,{children:[t.jsx(I,{children:n.title}),t.jsxs($h,{children:[t.jsx(J,{to:"/maintenance",children:t.jsx(k,{children:"Back to List"})}),t.jsx(J,{to:`/maintenance/templates/${n.id}/edit`,children:t.jsx(k,{children:"Edit Template"})}),t.jsx(k,{onClick:l,disabled:i.isPending,variant:"danger",children:i.isPending?"Deleting...":"Delete Template"})]}),t.jsxs(wr,{children:[n.description&&t.jsxs(Ch,{children:[t.jsx("strong",{children:"Description:"}),t.jsx("br",{}),n.description]}),t.jsxs(vh,{children:[t.jsxs(Cr,{children:[t.jsx(Ct,{children:"Basic Information"}),t.jsxs(ue,{children:[t.jsx(ge,{children:"Title:"}),t.jsx(xe,{children:n.title})]}),t.jsxs(ue,{children:[t.jsx(ge,{children:"Boat:"}),t.jsx(xe,{children:((b=n.boat)==null?void 0:b.name)||"Unknown"})]}),t.jsxs(ue,{children:[t.jsx(ge,{children:"Component:"}),t.jsx(xe,{children:n.component||"General"})]}),t.jsxs(ue,{children:[t.jsx(ge,{children:"Status:"}),t.jsx(xe,{children:t.jsx(wh,{active:n.isActive,children:n.isActive?"Active":"Inactive"})})]})]}),t.jsxs(Cr,{children:[t.jsx(Ct,{children:"Schedule & Estimates"}),t.jsxs(ue,{children:[t.jsx(ge,{children:"Recurrence:"}),t.jsx(xe,{children:c(n.recurrence)})]}),t.jsxs(ue,{children:[t.jsx(ge,{children:"Estimated Cost:"}),t.jsx(xe,{children:u(n.estimatedCost)})]}),t.jsxs(ue,{children:[t.jsx(ge,{children:"Estimated Time:"}),t.jsx(xe,{children:m(n.estimatedTime)})]})]}),t.jsxs(Cr,{children:[t.jsx(Ct,{children:"Timestamps"}),t.jsxs(ue,{children:[t.jsx(ge,{children:"Created:"}),t.jsx(xe,{children:new Date(n.createdAt).toLocaleString()})]}),t.jsxs(ue,{children:[t.jsx(ge,{children:"Updated:"}),t.jsx(xe,{children:new Date(n.updatedAt).toLocaleString()})]})]})]}),t.jsxs("div",{style:{marginTop:"30px"},children:[t.jsx(Ct,{children:"Related Events"}),t.jsx("p",{style:{color:"#ccc",marginBottom:"20px"},children:"View upcoming and completed maintenance events generated from this template."}),t.jsxs("div",{style:{display:"flex",gap:"10px"},children:[t.jsx(J,{to:`/maintenance?tab=upcoming&template=${n.id}`,children:t.jsx(k,{children:"View Upcoming Events"})}),t.jsx(J,{to:`/maintenance?tab=completed&template=${n.id}`,children:t.jsx(k,{children:"View Completed Events"})})]})]})]})]})]})}const Sr=s.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,kr=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,Tr=s(F)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,Ah=s.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Eh=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,Ar=s(F)`
  padding: 15px;
`,St=s.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin: 0 0 15px 0;
  font-size: 16px;
  text-transform: uppercase;
`,ce=s.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ne=s.span`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
`,de=s.span`
  color: ${e=>e.theme.colors.text.primary};
`,Lh=s.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${e=>{switch(e.status){case"completed":return"#44ff44";case"overdue":return"#ff4444";case"due":return e.theme.colors.primary.neonCarrot;case"upcoming":return e.theme.colors.primary.anakiwa;default:return e.theme.colors.text.secondary}}};
  color: ${e=>e.theme.colors.background};
`,Fh=s.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${e=>e.theme.colors.background}40;
  padding: 20px;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.neonCarrot};
`,Er=s.div`
  display: flex;
  gap: 15px;
  align-items: center;
`,Lr=s.label`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
  min-width: 120px;
`,no=s.input`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  flex: 1;
`,Dh=s.textarea`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  flex: 1;
`,zh=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: 18px;
`,Nh=s.div`
  padding: 20px;
  text-align: center;
`,Rh=s.div`
  background-color: ${e=>e.theme.colors.background}40;
  padding: 15px;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.lilac};
  margin-bottom: 20px;
  line-height: 1.5;
`;function Ih(){var p,x,j,f,w,D,T,N,B,E,S;const{id:e}=be(),[r,n]=C.useState(!1),[o,a]=C.useState({actualCost:"",actualTime:"",notes:""}),{data:i,isLoading:l,error:c}=hh(e),u=ph(),m=z=>{if(z.completedAt)return"completed";const O=new Date(z.dueDate),q=new Date,V=Math.ceil((O.getTime()-q.getTime())/(1e3*60*60*24));return V<0?"overdue":V<=7?"due":"upcoming"},h=z=>z?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(z):"Not specified",b=z=>{if(!z)return"Not specified";const O=Math.floor(z/60),q=z%60;return O>0?`${O}h ${q}m`:`${q}m`},$=z=>{if(!z)return"One-time";const{type:O,interval:q}=z,V=q===1?O.slice(0,-1):O;return`Every ${q} ${V}`},g=async z=>{if(z.preventDefault(),!!i)try{const O={};o.actualCost&&(O.actualCost=parseFloat(o.actualCost)),o.actualTime&&(O.actualTime=parseInt(o.actualTime)),o.notes&&(O.notes=o.notes),await u.mutateAsync({id:i.id,data:O}),n(!1)}catch(O){console.error("Failed to complete event:",O),alert("Failed to complete maintenance event. Please try again.")}};if(l)return t.jsxs(Sr,{children:[t.jsx(oe,{children:t.jsx(A,{label:"Status",value:"LOADING"})}),t.jsxs(kr,{children:[t.jsx(I,{children:"Maintenance Event"}),t.jsx(Tr,{children:t.jsx(zh,{children:"Loading event details..."})})]})]});if(c||!i)return t.jsxs(Sr,{children:[t.jsx(oe,{children:t.jsx(A,{label:"Status",value:"ERROR"})}),t.jsxs(kr,{children:[t.jsx(I,{children:"Maintenance Event"}),t.jsx(Tr,{children:t.jsxs(Nh,{children:[t.jsx(he,{type:"error",children:"Event not found or failed to load."}),t.jsx(J,{to:"/maintenance",children:t.jsx(k,{children:"Back to Maintenance"})})]})})]})]});const d=m(i),y=!!i.completedAt;return t.jsxs(Sr,{children:[t.jsxs(oe,{children:[t.jsx(A,{label:"Event Status",value:d.toUpperCase()}),t.jsx(A,{label:"Boat",value:((x=(p=i.template)==null?void 0:p.boat)==null?void 0:x.name)||"Unknown"}),t.jsx(A,{label:"Due Date",value:new Date(i.dueDate).toLocaleDateString()}),y&&t.jsx(A,{label:"Completed",value:new Date(i.completedAt).toLocaleDateString()})]}),t.jsxs(kr,{children:[t.jsx(I,{children:((j=i.template)==null?void 0:j.title)||"Maintenance Event"}),t.jsxs(Ah,{children:[t.jsx(J,{to:"/maintenance",children:t.jsx(k,{children:"Back to List"})}),i.template&&t.jsx(J,{to:`/maintenance/templates/${i.template.id}`,children:t.jsx(k,{children:"View Template"})}),!y&&t.jsx(k,{onClick:()=>n(!r),variant:"accent",children:r?"Cancel Completion":"Complete Event"})]}),t.jsxs(Tr,{children:[t.jsx("div",{style:{marginBottom:"20px"},children:t.jsx(Lh,{status:d,children:d.toUpperCase()})}),((f=i.template)==null?void 0:f.description)&&t.jsxs(Rh,{children:[t.jsx("strong",{children:"Template Description:"}),t.jsx("br",{}),i.template.description]}),r&&!y&&t.jsxs(Fh,{onSubmit:g,children:[t.jsx(St,{children:"Complete Maintenance Event"}),t.jsxs(Er,{children:[t.jsx(Lr,{children:"Actual Cost ($):"}),t.jsx(no,{type:"number",step:"0.01",value:o.actualCost,onChange:z=>a(O=>({...O,actualCost:z.target.value})),placeholder:"Enter actual cost"})]}),t.jsxs(Er,{children:[t.jsx(Lr,{children:"Actual Time (minutes):"}),t.jsx(no,{type:"number",value:o.actualTime,onChange:z=>a(O=>({...O,actualTime:z.target.value})),placeholder:"Enter time in minutes"})]}),t.jsxs(Er,{children:[t.jsx(Lr,{children:"Notes:"}),t.jsx(Dh,{value:o.notes,onChange:z=>a(O=>({...O,notes:z.target.value})),placeholder:"Enter completion notes, observations, or issues encountered"})]}),t.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[t.jsx(k,{type:"button",onClick:()=>n(!1),children:"Cancel"}),t.jsx(k,{type:"submit",disabled:u.isPending,variant:"accent",children:u.isPending?"Completing...":"Complete Event"})]})]}),t.jsxs(Eh,{children:[t.jsxs(Ar,{children:[t.jsx(St,{children:"Event Information"}),t.jsxs(ce,{children:[t.jsx(ne,{children:"Title:"}),t.jsx(de,{children:((w=i.template)==null?void 0:w.title)||"Unknown"})]}),t.jsxs(ce,{children:[t.jsx(ne,{children:"Boat:"}),t.jsx(de,{children:((T=(D=i.template)==null?void 0:D.boat)==null?void 0:T.name)||"Unknown"})]}),t.jsxs(ce,{children:[t.jsx(ne,{children:"Component:"}),t.jsx(de,{children:((N=i.template)==null?void 0:N.component)||"General"})]}),t.jsxs(ce,{children:[t.jsx(ne,{children:"Due Date:"}),t.jsx(de,{children:new Date(i.dueDate).toLocaleDateString()})]}),y&&t.jsxs(ce,{children:[t.jsx(ne,{children:"Completed:"}),t.jsx(de,{children:new Date(i.completedAt).toLocaleDateString()})]})]}),t.jsxs(Ar,{children:[t.jsx(St,{children:"Template Information"}),t.jsxs(ce,{children:[t.jsx(ne,{children:"Recurrence:"}),t.jsx(de,{children:$((B=i.template)==null?void 0:B.recurrence)})]}),t.jsxs(ce,{children:[t.jsx(ne,{children:"Est. Cost:"}),t.jsx(de,{children:h((E=i.template)==null?void 0:E.estimatedCost)})]}),t.jsxs(ce,{children:[t.jsx(ne,{children:"Est. Time:"}),t.jsx(de,{children:b((S=i.template)==null?void 0:S.estimatedTime)})]})]}),y&&t.jsxs(Ar,{children:[t.jsx(St,{children:"Completion Details"}),t.jsxs(ce,{children:[t.jsx(ne,{children:"Actual Cost:"}),t.jsx(de,{children:h(i.actualCost)})]}),t.jsxs(ce,{children:[t.jsx(ne,{children:"Actual Time:"}),t.jsx(de,{children:b(i.actualTime)})]}),i.notes&&t.jsxs("div",{style:{marginTop:"15px"},children:[t.jsx(ne,{style:{display:"block",marginBottom:"5px"},children:"Notes:"}),t.jsx("div",{style:{backgroundColor:"#333",padding:"10px",borderRadius:"4px",whiteSpace:"pre-wrap"},children:i.notes})]})]})]})]})]})]})}const Fr=s.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,Dr=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,zr=s(F)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,Mh=s.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,kt=s.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: ${e=>e.theme.colors.background}40;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.neonCarrot};
`,Tt=s.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin: 0 0 10px 0;
  font-size: 16px;
  text-transform: uppercase;
`,fe=s.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
`,ye=s.label`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
  min-width: 150px;
  padding-top: 8px;
`,at=s.input`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  flex: 1;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.anakiwa};
  }
`,oo=s.select`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  flex: 1;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.anakiwa};
  }
`,Bh=s.textarea`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  flex: 1;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.anakiwa};
  }
`,so=s.input`
  margin-right: 8px;
`,Ph=s.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex: 1;
`,Oh=s.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding-top: 20px;
  border-top: 1px solid ${e=>e.theme.colors.primary.neonCarrot}40;
`,Uh=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: 18px;
`,qh=s.div`
  padding: 20px;
  text-align: center;
`;function ao(){const{id:e}=be(),r=Y(),n=!!e,[o,a]=C.useState({boatId:"",title:"",description:"",component:"",hasRecurrence:!1,recurrenceType:"days",recurrenceInterval:"30",estimatedCost:"",estimatedTime:"",isActive:!0}),{data:i=[]}=te(),{data:l,isLoading:c}=ss(e,{enabled:n}),u=ch(),m=dh();C.useEffect(()=>{var g,d,y,p,x;l&&n&&a({boatId:l.boatId,title:l.title,description:l.description||"",component:l.component||"",hasRecurrence:!!l.recurrence,recurrenceType:((g=l.recurrence)==null?void 0:g.type)||"days",recurrenceInterval:((y=(d=l.recurrence)==null?void 0:d.interval)==null?void 0:y.toString())||"30",estimatedCost:((p=l.estimatedCost)==null?void 0:p.toString())||"",estimatedTime:((x=l.estimatedTime)==null?void 0:x.toString())||"",isActive:l.isActive})},[l,n]);const h=async g=>{if(g.preventDefault(),!o.boatId||!o.title){alert("Please fill in all required fields (Boat and Title)");return}try{const d={boatId:o.boatId,title:o.title,description:o.description||void 0,component:o.component||void 0,estimatedCost:o.estimatedCost?parseFloat(o.estimatedCost):void 0,estimatedTime:o.estimatedTime?parseInt(o.estimatedTime):void 0};o.hasRecurrence&&(d.recurrence={type:o.recurrenceType,interval:parseInt(o.recurrenceInterval)}),n?(d.isActive=o.isActive,await m.mutateAsync({id:e,data:d})):await u.mutateAsync(d),r("/maintenance")}catch(d){console.error("Failed to save template:",d),alert("Failed to save maintenance template. Please try again.")}},b=(g,d)=>{a(y=>({...y,[g]:d}))};if(n&&c)return t.jsxs(Fr,{children:[t.jsx(oe,{children:t.jsx(A,{label:"Status",value:"LOADING"})}),t.jsxs(Dr,{children:[t.jsx(I,{children:"Edit Maintenance Template"}),t.jsx(zr,{children:t.jsx(Uh,{children:"Loading template..."})})]})]});if(n&&!l)return t.jsxs(Fr,{children:[t.jsx(oe,{children:t.jsx(A,{label:"Status",value:"ERROR"})}),t.jsxs(Dr,{children:[t.jsx(I,{children:"Edit Maintenance Template"}),t.jsx(zr,{children:t.jsxs(qh,{children:[t.jsx(he,{type:"error",children:"Template not found."}),t.jsx(J,{to:"/maintenance",children:t.jsx(k,{children:"Back to Maintenance"})})]})})]})]});const $=u.isPending||m.isPending;return t.jsxs(Fr,{children:[t.jsxs(oe,{children:[t.jsx(A,{label:"Mode",value:n?"EDIT":"CREATE"}),t.jsx(A,{label:"Boats Available",value:i.length.toString()}),n&&l&&t.jsx(A,{label:"Template Status",value:l.isActive?"ACTIVE":"INACTIVE"})]}),t.jsxs(Dr,{children:[t.jsx(I,{children:n?"Edit Maintenance Template":"Create Maintenance Template"}),t.jsx(zr,{children:t.jsxs(Mh,{onSubmit:h,children:[t.jsxs(kt,{children:[t.jsx(Tt,{children:"Basic Information"}),t.jsxs(fe,{children:[t.jsx(ye,{children:"Boat *"}),t.jsxs(oo,{value:o.boatId,onChange:g=>b("boatId",g.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Select a boat"}),i.map(g=>t.jsx("option",{value:g.id,children:g.name},g.id))]})]}),t.jsxs(fe,{children:[t.jsx(ye,{children:"Title *"}),t.jsx(at,{type:"text",value:o.title,onChange:g=>b("title",g.target.value),placeholder:"e.g., Oil Change, Hull Cleaning, Engine Service",required:!0})]}),t.jsxs(fe,{children:[t.jsx(ye,{children:"Component"}),t.jsx(at,{type:"text",value:o.component,onChange:g=>b("component",g.target.value),placeholder:"e.g., Engine, Hull, Electrical, Plumbing"})]}),t.jsxs(fe,{children:[t.jsx(ye,{children:"Description"}),t.jsx(Bh,{value:o.description,onChange:g=>b("description",g.target.value),placeholder:"Detailed description of the maintenance task, including any special instructions or requirements"})]})]}),t.jsxs(kt,{children:[t.jsx(Tt,{children:"Schedule"}),t.jsxs(fe,{children:[t.jsx(ye,{children:"Recurring Task"}),t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx(so,{type:"checkbox",checked:o.hasRecurrence,onChange:g=>b("hasRecurrence",g.target.checked)}),t.jsx("span",{children:"This is a recurring maintenance task"})]})]}),o.hasRecurrence&&t.jsxs(fe,{children:[t.jsx(ye,{children:"Recurrence"}),t.jsxs(Ph,{children:[t.jsx("span",{children:"Every"}),t.jsx(at,{type:"number",min:"1",value:o.recurrenceInterval,onChange:g=>b("recurrenceInterval",g.target.value),style:{width:"80px",flex:"none"}}),t.jsxs(oo,{value:o.recurrenceType,onChange:g=>b("recurrenceType",g.target.value),style:{flex:"none",minWidth:"120px"},children:[t.jsx("option",{value:"days",children:"Days"}),t.jsx("option",{value:"weeks",children:"Weeks"}),t.jsx("option",{value:"months",children:"Months"}),t.jsx("option",{value:"years",children:"Years"}),t.jsx("option",{value:"engine_hours",children:"Engine Hours"})]})]})]})]}),t.jsxs(kt,{children:[t.jsx(Tt,{children:"Estimates"}),t.jsxs(fe,{children:[t.jsx(ye,{children:"Estimated Cost ($)"}),t.jsx(at,{type:"number",step:"0.01",min:"0",value:o.estimatedCost,onChange:g=>b("estimatedCost",g.target.value),placeholder:"0.00"})]}),t.jsxs(fe,{children:[t.jsx(ye,{children:"Estimated Time (minutes)"}),t.jsx(at,{type:"number",min:"0",value:o.estimatedTime,onChange:g=>b("estimatedTime",g.target.value),placeholder:"60"})]})]}),n&&t.jsxs(kt,{children:[t.jsx(Tt,{children:"Status"}),t.jsxs(fe,{children:[t.jsx(ye,{children:"Template Status"}),t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx(so,{type:"checkbox",checked:o.isActive,onChange:g=>b("isActive",g.target.checked)}),t.jsx("span",{children:"Template is active (generates future events)"})]})]})]}),t.jsxs(Oh,{children:[t.jsx(J,{to:"/maintenance",children:t.jsx(k,{type:"button",children:"Cancel"})}),t.jsx(k,{type:"submit",disabled:$,variant:"accent",children:$?"Saving...":n?"Update Template":"Create Template"})]})]})})]})]})}const Te={all:["locations"],lists:()=>[...Te.all,"list"],list:e=>[...Te.lists(),{filters:e}],details:()=>[...Te.all,"detail"],detail:e=>[...Te.details(),e],nearby:(e,r,n)=>[...Te.all,"nearby",{lat:e,lng:r,radius:n}]},Hh=e=>Z({queryKey:Te.list(e||{}),queryFn:()=>M.getMarkedLocations(e)}),Vh=()=>{const e=G();return Q({mutationFn:r=>M.createMarkedLocation(r),onSuccess:()=>{e.invalidateQueries({queryKey:Te.lists()})}})},Wh=()=>{const e=G();return Q({mutationFn:r=>M.deleteMarkedLocation(r),onSuccess:()=>{e.invalidateQueries({queryKey:Te.lists()})}})},Gh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",Kh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg==",Jh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC";delete Pe.Icon.Default.prototype._getIconUrl;Pe.Icon.Default.mergeOptions({iconRetinaUrl:Kh,iconUrl:Gh,shadowUrl:Jh});const Qh=s.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px); // Account for header and footer
  gap: ${e=>e.theme.spacing.md};
`,_h=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.md};
`,Zh=s.div`
  flex: 1;
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  min-height: 600px;
`,Yh=s(F)`
  flex: 1;
  
  .leaflet-container {
    height: 100%;
    min-height: 500px;
    background-color: ${e=>e.theme.colors.surface.dark};
  }
  
  .leaflet-control-container {
    .leaflet-control {
      background-color: ${e=>e.theme.colors.surface.medium};
      border: 1px solid ${e=>e.theme.colors.primary.neonCarrot};

      a {
        color: ${e=>e.theme.colors.text.primary};
        background-color: ${e=>e.theme.colors.surface.medium};

        &:hover {
          background-color: ${e=>e.theme.colors.primary.neonCarrot};
          color: ${e=>e.theme.colors.text.inverse};
        }
      }
    }
  }
`,Xh=s(F)`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
`,ep=s.div`
  max-height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,tp=s.div`
  padding: ${e=>e.theme.spacing.sm};
  background-color: ${e=>e.theme.colors.surface.medium};
  border-radius: ${e=>e.theme.borderRadius.sm};
  border-left: 3px solid ${e=>e.theme.colors.primary.anakiwa};

  .location-name {
    font-weight: ${e=>e.theme.typography.fontWeight.bold};
    color: ${e=>e.theme.colors.primary.anakiwa};
    margin-bottom: ${e=>e.theme.spacing.xs};
  }
  
  .location-category {
    font-size: ${e=>e.theme.typography.fontSize.sm};
    color: ${e=>e.theme.colors.text.secondary};
    text-transform: uppercase;
    margin-bottom: ${e=>e.theme.spacing.xs};
  }
  
  .location-notes {
    font-size: ${e=>e.theme.typography.fontSize.sm};
    color: ${e=>e.theme.colors.text.muted};
  }
  
  .location-actions {
    margin-top: ${e=>e.theme.spacing.sm};
    display: flex;
    gap: ${e=>e.theme.spacing.sm};
  }
`,rp=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
  
  input, select, textarea {
    padding: ${e=>e.theme.spacing.sm};
    background-color: ${e=>e.theme.colors.surface.medium};
    border: 1px solid ${e=>e.theme.colors.primary.neonCarrot};
    border-radius: ${e=>e.theme.borderRadius.sm};
    color: ${e=>e.theme.colors.text.primary};
    font-family: ${e=>e.theme.typography.fontFamily.primary};

    &:focus {
      outline: none;
      border-color: ${e=>e.theme.colors.primary.tanoi};
      box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary.neonCarrot}20;
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 60px;
  }
`,np=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
  flex-wrap: wrap;
  align-items: center;
  
  label {
    color: ${e=>e.theme.colors.text.secondary};
    font-size: ${e=>e.theme.typography.fontSize.sm};
    text-transform: uppercase;
  }
  
  select {
    padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
    background-color: ${e=>e.theme.colors.surface.medium};
    border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
    border-radius: ${e=>e.theme.borderRadius.sm};
    color: ${e=>e.theme.colors.text.primary};
    font-family: ${e=>e.theme.typography.fontFamily.primary};
  }
`,op=e=>{const r={fishing:"#66FF66",marina:"#6688CC",anchorage:"#FFFF66",hazard:"#FF6666",other:"#CC99CC"};return new Pe.DivIcon({html:`<div style="
      background-color: ${r[e]||r.other};
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid #000;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 10px;
      color: #000;
    ">${e.charAt(0).toUpperCase()}</div>`,className:"custom-marker",iconSize:[20,20],iconAnchor:[10,10]})},sp=({onMapClick:e})=>(gs({click:r=>{e(r.latlng.lat,r.latlng.lng)}}),null),ap=()=>{const[e,r]=C.useState(!0),[n,o]=C.useState(!0),[a,i]=C.useState(""),[l,c]=C.useState(!1),[u,m]=C.useState({name:"",category:"other",notes:"",latitude:0,longitude:0}),[h,b]=C.useState(null),$=C.useRef(null),{data:g=[],isLoading:d}=Ae(),{data:y=[],isLoading:p}=Hh(a?{category:a}:void 0),x=Vh(),j=Wh(),f=Me.useMemo(()=>{if(g.length>0){const E=g.flatMap(S=>S.gpsPoints);if(E.length>0){const S=E.reduce((O,q)=>O+q.latitude,0)/E.length,z=E.reduce((O,q)=>O+q.longitude,0)/E.length;return[S,z]}}return[37.7749,-122.4194]},[g]),w=C.useCallback((E,S)=>{l&&m(z=>({...z,latitude:E,longitude:S}))},[l]),D=async()=>{if(!(!u.name||!u.latitude||!u.longitude))try{await x.mutateAsync({name:u.name,latitude:u.latitude,longitude:u.longitude,category:u.category,notes:u.notes||void 0}),m({name:"",category:"other",notes:"",latitude:0,longitude:0}),c(!1)}catch(E){console.error("Failed to create location:",E)}},T=async E=>{if(window.confirm("Are you sure you want to delete this location?"))try{await j.mutateAsync(E),b(null)}catch(S){console.error("Failed to delete location:",S)}},N=()=>e?g.map(E=>{var q,V,R;if(E.gpsPoints.length<2)return null;const S=E.gpsPoints.map(H=>[H.latitude,H.longitude]),z=S[0],O=S[S.length-1];return t.jsxs(Me.Fragment,{children:[t.jsx(yo,{positions:S,color:"#FF9966",weight:3,opacity:.7}),t.jsx(Se,{position:z,children:t.jsx(ke,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"Trip Start"}),t.jsx("br",{}),new Date(E.startTime).toLocaleString(),t.jsx("br",{}),"Boat: ",E.boatId]})})}),t.jsx(Se,{position:O,children:t.jsx(ke,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"Trip End"}),t.jsx("br",{}),new Date(E.endTime).toLocaleString(),t.jsx("br",{}),"Duration: ",Math.round((((q=E.statistics)==null?void 0:q.durationSeconds)||0)/60)," minutes",t.jsx("br",{}),"Distance: ",((((V=E.statistics)==null?void 0:V.distanceMeters)||0)/1e3).toFixed(2)," km"]})})}),(((R=E.statistics)==null?void 0:R.stopPoints)||[]).map((H,Oe)=>t.jsx(Se,{position:[H.latitude,H.longitude],icon:new Pe.DivIcon({html:`<div style="
                  background-color: #FFFF66;
                  width: 16px;
                  height: 16px;
                  border-radius: 50%;
                  border: 2px solid #000;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-weight: bold;
                  font-size: 8px;
                  color: #000;
                ">S</div>`,className:"stop-marker",iconSize:[16,16],iconAnchor:[8,8]}),children:t.jsx(ke,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"Stop Point"}),t.jsx("br",{}),"Duration: ",Math.round(H.durationSeconds/60)," minutes",t.jsx("br",{}),"From: ",new Date(H.startTime).toLocaleString(),t.jsx("br",{}),"To: ",new Date(H.endTime).toLocaleString()]})})},`${E.id}-stop-${Oe}`))]},E.id)}):null,B=()=>n?y.map(E=>t.jsx(Se,{position:[E.latitude,E.longitude],icon:op(E.category),eventHandlers:{click:()=>b(E)},children:t.jsx(ke,{children:t.jsxs("div",{children:[t.jsx("strong",{children:E.name}),t.jsx("br",{}),"Category: ",E.category,t.jsx("br",{}),E.notes&&t.jsxs(t.Fragment,{children:["Notes: ",E.notes,t.jsx("br",{})]}),E.tags.length>0&&t.jsxs(t.Fragment,{children:["Tags: ",E.tags.join(", "),t.jsx("br",{})]}),t.jsxs("small",{children:["Created: ",new Date(E.createdAt).toLocaleDateString()]})]})})},E.id)):null;return t.jsxs(Qh,{children:[t.jsx(I,{children:"Navigation Chart"}),t.jsx(_h,{children:t.jsxs(np,{children:[t.jsx("label",{children:"Display:"}),t.jsx(k,{variant:e?"primary":"secondary",size:"sm",onClick:()=>r(!e),children:"Trip Routes"}),t.jsx(k,{variant:n?"primary":"secondary",size:"sm",onClick:()=>o(!n),children:"Locations"}),t.jsx("label",{children:"Category:"}),t.jsxs("select",{value:a,onChange:E=>i(E.target.value),children:[t.jsx("option",{value:"",children:"All Categories"}),t.jsx("option",{value:"fishing",children:"Fishing"}),t.jsx("option",{value:"marina",children:"Marina"}),t.jsx("option",{value:"anchorage",children:"Anchorage"}),t.jsx("option",{value:"hazard",children:"Hazard"}),t.jsx("option",{value:"other",children:"Other"})]})]})}),t.jsxs(Zh,{children:[t.jsx(Yh,{title:"Chart Display",padding:"none",children:t.jsxs(bo,{center:f,zoom:10,style:{height:"100%",width:"100%"},ref:$,children:[t.jsx(fo,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.jsx(sp,{onMapClick:w}),N(),B(),l&&u.latitude&&u.longitude&&t.jsx(Se,{position:[u.latitude,u.longitude],children:t.jsx(ke,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"New Location"}),t.jsx("br",{}),'Click "Save Location" to confirm']})})})]})}),t.jsx(Xh,{title:"Location Manager",variant:"secondary",children:l?t.jsxs(rp,{children:[t.jsx("h3",{children:"Add New Location"}),t.jsx("p",{children:"Click on the map to set coordinates, then fill in the details below."}),t.jsx("input",{type:"text",placeholder:"Location Name",value:u.name,onChange:E=>m(S=>({...S,name:E.target.value}))}),t.jsxs("select",{value:u.category,onChange:E=>m(S=>({...S,category:E.target.value})),children:[t.jsx("option",{value:"fishing",children:"Fishing Spot"}),t.jsx("option",{value:"marina",children:"Marina"}),t.jsx("option",{value:"anchorage",children:"Anchorage"}),t.jsx("option",{value:"hazard",children:"Hazard"}),t.jsx("option",{value:"other",children:"Other"})]}),t.jsx("textarea",{placeholder:"Notes (optional)",value:u.notes,onChange:E=>m(S=>({...S,notes:E.target.value}))}),u.latitude&&u.longitude&&t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#FF9966",marginBottom:"8px"},children:"Coordinates"}),t.jsxs("div",{style:{padding:"12px",backgroundColor:"#222222",borderRadius:"4px",border:"1px solid #333333",fontFamily:"monospace"},children:["Lat: ",u.latitude.toFixed(6),t.jsx("br",{}),"Lng: ",u.longitude.toFixed(6)]})]}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(k,{onClick:D,disabled:!u.name||!u.latitude||!u.longitude||x.isPending,children:"Save Location"}),t.jsx(k,{variant:"secondary",onClick:()=>{c(!1),m({name:"",category:"other",notes:"",latitude:0,longitude:0})},children:"Cancel"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx(k,{onClick:()=>c(!0),disabled:x.isPending,children:"Add New Location"}),h&&t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#FF9966",marginBottom:"8px"},children:"Selected Location"}),t.jsxs("div",{style:{padding:"12px",backgroundColor:"#222222",borderRadius:"4px",border:"1px solid #333333"},children:[t.jsx("strong",{children:h.name}),t.jsx("br",{}),"Category: ",h.category,t.jsx("br",{}),"Coordinates: ",h.latitude.toFixed(6),", ",h.longitude.toFixed(6),t.jsx("br",{}),h.notes&&t.jsxs(t.Fragment,{children:["Notes: ",h.notes,t.jsx("br",{})]}),h.tags.length>0&&t.jsxs(t.Fragment,{children:["Tags: ",h.tags.join(", "),t.jsx("br",{})]}),t.jsx("div",{style:{marginTop:"8px"},children:t.jsx(k,{size:"sm",variant:"accent",onClick:()=>T(h.id),disabled:j.isPending,children:"Delete"})})]})]}),t.jsx(ep,{children:y.map(E=>t.jsxs(tp,{children:[t.jsx("div",{className:"location-name",children:E.name}),t.jsx("div",{className:"location-category",children:E.category}),E.notes&&t.jsx("div",{className:"location-notes",children:E.notes}),t.jsx("div",{className:"location-actions",children:t.jsx(k,{size:"sm",onClick:()=>{b(E),$.current&&$.current.setView([E.latitude,E.longitude],15)},children:"View"})})]},E.id))})]})})]}),(d||p)&&t.jsx(A,{label:"System Status",value:"Loading chart data...",valueColor:"anakiwa"})]})},At=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,io=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,ip=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${e=>e.theme.spacing.lg};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,lp=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,cp=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`,dp=s.div`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,mp=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xl};
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.lg};
`,hp=()=>{const{data:e,isLoading:r,error:n}=Qo();if(r)return t.jsxs(At,{children:[t.jsx(I,{children:"Captain's License Progress"}),t.jsx(cp,{children:t.jsx(A,{label:"System Status",value:"Loading Progress Data...",valueColor:"neonCarrot",size:"lg"})})]});if(n)return t.jsxs(At,{children:[t.jsx(I,{children:"Captain's License Progress"}),t.jsx(dp,{children:t.jsx(he,{type:"error",children:"Error loading license progress data. Please check your connection and try again."})})]});if(!e||!e.enabled)return t.jsxs(At,{children:[t.jsx(I,{children:"Captain's License Progress"}),t.jsx(F,{title:"License Tracking Disabled",variant:"secondary",children:t.jsxs(mp,{children:["Captain's license progress tracking is currently disabled.",t.jsx("br",{}),"Enable it in your settings to track progress toward OUPV certification."]})})]});const{totalSeaTimeDays:o,seaTimeDaysLast3Years:a,totalHours:i,daysToGoal360:l,daysToGoal90:c,estimatedCompletionDate:u}=e,m=o>=360,h=a>=90,b=m&&h;return t.jsxs(At,{children:[t.jsx(I,{children:"Captain's License Progress"}),b&&t.jsx(he,{type:"success",children:"Congratulations! You have met all requirements for OUPV (6-pack) Captain's License eligibility."}),t.jsx(F,{title:"Current Sea Time Statistics",variant:"primary",children:t.jsxs(io,{children:[t.jsx(A,{label:"Total Sea Time Days",value:o,valueColor:"neonCarrot",size:"lg"}),t.jsx(A,{label:"Days (Last 3 Years)",value:a,valueColor:"lilac",size:"lg"}),t.jsx(A,{label:"Total Hours",value:i.toFixed(1),unit:"hrs",valueColor:"anakiwa",size:"lg"}),t.jsx(A,{label:"Average Hours/Day",value:o>0?(i/o).toFixed(1):"0.0",unit:"hrs",valueColor:"success",size:"lg"})]})}),t.jsxs(ip,{children:[t.jsx(F,{title:"360-Day Total Requirement",variant:"primary",children:t.jsx(It,{title:"Total Sea Time Days",current:o,target:360,unit:"days",color:"neonCarrot",size:"lg",showPercentage:!0})}),t.jsx(F,{title:"90-Day Recent Requirement",variant:"secondary",children:t.jsx(It,{title:"Days in Last 3 Years",current:a,target:90,unit:"days",color:"lilac",size:"lg",showPercentage:!0})})]}),t.jsx(F,{title:"Completion Estimates",variant:"accent",children:t.jsxs(lp,{children:[t.jsx(_t,{title:"360-Day Goal",estimatedDate:m?void 0:u,daysRemaining:m?void 0:l,isComplete:m,color:"neonCarrot",size:"md"}),t.jsx(_t,{title:"90-Day (3 Years) Goal",daysRemaining:h?void 0:c,isComplete:h,color:"lilac",size:"md"}),!b&&t.jsx(_t,{title:"License Eligibility",estimatedDate:u,isComplete:b,color:"anakiwa",size:"md"})]})}),t.jsx(F,{title:"OUPV (6-Pack) License Requirements",variant:"secondary",children:t.jsxs(io,{children:[t.jsx(A,{label:"Total Sea Time",value:"360 Days",valueColor:"neonCarrot",size:"md"}),t.jsx(A,{label:"Recent Experience",value:"90 Days in 3 Years",valueColor:"lilac",size:"md"}),t.jsx(A,{label:"Minimum Per Day",value:"4 Hours",valueColor:"anakiwa",size:"md"}),t.jsx(A,{label:"Additional Requirements",value:"Medical, Drug Test, Course",valueColor:"success",size:"md"})]})})]})},Nr=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,lo=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,pp=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${e=>e.theme.spacing.lg};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,up=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
  flex-wrap: wrap;
`,gp=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`,xp=s.div`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,co=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Et=s.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: ${e=>e.theme.spacing.md};
  padding: ${e=>e.theme.spacing.sm};
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 1px solid ${e=>e.theme.colors.surface.light};
  border-radius: ${e=>e.theme.borderRadius.sm};
  align-items: center;

  &.header {
    background-color: ${e=>e.theme.colors.primary.neonCarrot};
    color: ${e=>e.theme.colors.text.inverse};
    font-weight: ${e=>e.theme.typography.fontWeight.bold};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: ${e=>e.theme.typography.fontSize.sm};
  }
  
  &.overdue {
    border-color: ${e=>e.theme.colors.status.error};
    background-color: rgba(255, 102, 102, 0.1);
  }
  
  &.due-soon {
    border-color: ${e=>e.theme.colors.status.warning};
    background-color: rgba(255, 255, 102, 0.1);
  }
`,K=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  
  &.text {
    font-family: ${e=>e.theme.typography.fontFamily.primary};
  }
  
  &.status {
    font-weight: ${e=>e.theme.typography.fontWeight.bold};
    text-transform: uppercase;
  }
`,fp=()=>{const[e,r]=Me.useState(""),{data:n,isLoading:o}=te(),{data:a,isLoading:i,error:l}=os(e||void 0),{data:c,isLoading:u,error:m}=Zr(e||void 0),{data:h,isLoading:b,error:$}=as(e||void 0),g=o||i||u||b,d=l||m||$,y=C.useMemo(()=>{if(!a||!c||!h)return{totalTemplates:0,activeTemplates:0,upcomingCount:0,overdueCount:0,completedThisMonth:0,totalCostThisMonth:0,averageCost:0,completionRate:0};const x=new Date,j=new Date(x.getFullYear(),x.getMonth(),1),f=c.filter(S=>new Date(S.dueDate)<x).length,w=h.filter(S=>S.completedAt&&new Date(S.completedAt)>=j),D=w.reduce((S,z)=>S+(z.actualCost||0),0),T=h.filter(S=>S.actualCost&&S.actualCost>0),N=T.length>0?T.reduce((S,z)=>S+(z.actualCost||0),0)/T.length:0,B=c.length+h.length,E=B>0?h.length/B*100:0;return{totalTemplates:a.length,activeTemplates:a.filter(S=>S.isActive).length,upcomingCount:c.length,overdueCount:f,completedThisMonth:w.length,totalCostThisMonth:D,averageCost:N,completionRate:E}},[a,c,h]),p=C.useMemo(()=>{if(!c)return[];const x=new Date,j=new Date(x.getTime()+7*24*60*60*1e3);return c.map(f=>{const w=new Date(f.dueDate);let D="upcoming",T="Upcoming";return w<x?(D="overdue",T="Overdue"):w<=j&&(D="due-soon",T="Due Soon"),{...f,status:D,statusText:T,daysUntilDue:Math.ceil((w.getTime()-x.getTime())/(1e3*60*60*24))}}).sort((f,w)=>new Date(f.dueDate).getTime()-new Date(w.dueDate).getTime())},[c]);return g?t.jsxs(Nr,{children:[t.jsx(I,{children:"Maintenance Reports"}),t.jsx(gp,{children:t.jsx(A,{label:"System Status",value:"Loading Maintenance Data...",valueColor:"neonCarrot",size:"lg"})})]}):d?t.jsxs(Nr,{children:[t.jsx(I,{children:"Maintenance Reports"}),t.jsx(xp,{children:t.jsx(he,{type:"error",children:"Error loading maintenance data. Please check your connection and try again."})})]}):t.jsxs(Nr,{children:[t.jsx(I,{children:"Maintenance Reports"}),t.jsxs(up,{children:[t.jsx(k,{variant:e===""?"primary":"secondary",onClick:()=>r(""),children:"All Boats"}),n==null?void 0:n.map(x=>t.jsx(k,{variant:e===x.id?"primary":"secondary",onClick:()=>r(x.id),children:x.name},x.id))]}),t.jsx(F,{title:"Maintenance Overview",variant:"primary",children:t.jsxs(lo,{children:[t.jsx(A,{label:"Active Templates",value:y.activeTemplates,valueColor:"neonCarrot",size:"lg"}),t.jsx(A,{label:"Upcoming Tasks",value:y.upcomingCount,valueColor:"anakiwa",size:"lg"}),t.jsx(A,{label:"Overdue Tasks",value:y.overdueCount,valueColor:y.overdueCount>0?"neonCarrot":"success",size:"lg"}),t.jsx(A,{label:"Completed This Month",value:y.completedThisMonth,valueColor:"success",size:"lg"})]})}),t.jsx(F,{title:"Cost Analysis",variant:"secondary",children:t.jsxs(lo,{children:[t.jsx(A,{label:"Cost This Month",value:`$${y.totalCostThisMonth.toFixed(2)}`,valueColor:"lilac",size:"lg"}),t.jsx(A,{label:"Average Cost Per Task",value:`$${y.averageCost.toFixed(2)}`,valueColor:"lilac",size:"lg"}),t.jsx(A,{label:"Completion Rate",value:`${y.completionRate.toFixed(1)}%`,valueColor:"anakiwa",size:"lg"})]})}),t.jsxs(pp,{children:[t.jsx(F,{title:"Template Status",variant:"primary",children:t.jsx(It,{title:"Active Templates",current:y.activeTemplates,target:y.totalTemplates,unit:"templates",color:"neonCarrot",size:"md",showPercentage:!0})}),t.jsx(F,{title:"Task Completion",variant:"secondary",children:t.jsx(It,{title:"Completion Rate",current:y.completionRate,target:100,unit:"%",color:"lilac",size:"md",showPercentage:!1})})]}),p.length>0&&t.jsx(F,{title:"Upcoming Maintenance Tasks",variant:"accent",children:t.jsxs(co,{children:[t.jsxs(Et,{className:"header",children:[t.jsx(K,{children:"Task"}),t.jsx(K,{children:"Boat"}),t.jsx(K,{children:"Due Date"}),t.jsx(K,{children:"Days Until Due"}),t.jsx(K,{children:"Status"})]}),p.map(x=>{var j,f,w,D;return t.jsxs(Et,{className:x.status,children:[t.jsxs(K,{className:"text",children:[((j=x.template)==null?void 0:j.title)||"Unknown Task",((f=x.template)==null?void 0:f.component)&&t.jsx("div",{style:{fontSize:"0.8em",color:"#999"},children:x.template.component})]}),t.jsx(K,{className:"text",children:((D=(w=x.template)==null?void 0:w.boat)==null?void 0:D.name)||"Unknown"}),t.jsx(K,{children:new Date(x.dueDate).toLocaleDateString()}),t.jsx(K,{children:x.daysUntilDue>0?`${x.daysUntilDue} days`:`${Math.abs(x.daysUntilDue)} days ago`}),t.jsx(K,{className:"status",children:x.statusText})]},x.id)})]})}),h&&h.length>0&&t.jsx(F,{title:"Recent Completions",variant:"secondary",children:t.jsxs(co,{children:[t.jsxs(Et,{className:"header",children:[t.jsx(K,{children:"Task"}),t.jsx(K,{children:"Boat"}),t.jsx(K,{children:"Completed"}),t.jsx(K,{children:"Cost"}),t.jsx(K,{children:"Time"})]}),h.slice(0,10).map(x=>{var j,f,w;return t.jsxs(Et,{children:[t.jsx(K,{className:"text",children:((j=x.template)==null?void 0:j.title)||"Unknown Task"}),t.jsx(K,{className:"text",children:((w=(f=x.template)==null?void 0:f.boat)==null?void 0:w.name)||"Unknown"}),t.jsx(K,{children:x.completedAt?new Date(x.completedAt).toLocaleDateString():"N/A"}),t.jsx(K,{children:x.actualCost?`$${x.actualCost.toFixed(2)}`:"N/A"}),t.jsx(K,{children:x.actualTime?`${x.actualTime}h`:"N/A"})]},x.id)})]})})]})},yp=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,bp=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${e=>e.theme.spacing.lg};
`,mo=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
  padding: ${e=>e.theme.spacing.lg};
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: ${e=>e.theme.borderRadius.lg};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.tanoi};
    background-color: ${e=>e.theme.colors.surface.medium};
  }

  &.secondary {
    border-color: ${e=>e.theme.colors.primary.lilac};

    &:hover {
      border-color: ${e=>e.theme.colors.primary.lilac};
    }
  }
`,ho=s.h2`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;

  .secondary & {
    color: ${e=>e.theme.colors.primary.lilac};
  }
`,po=s.p`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  margin: 0;
`,uo=s.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,Ce=s.li`
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.sm};

  &::before {
    content: '▶';
    color: ${e=>e.theme.colors.primary.neonCarrot};
    margin-right: ${e=>e.theme.spacing.sm};
    font-size: 0.8em;
  }

  .secondary &::before {
    color: ${e=>e.theme.colors.primary.lilac};
  }
`,jp=()=>{const e=Y();return t.jsxs(yp,{children:[t.jsx(I,{children:"System Reports"}),t.jsx(F,{title:"Available Reports",variant:"primary",children:t.jsxs(bp,{children:[t.jsxs(mo,{onClick:()=>e("/reports/license"),children:[t.jsx(ho,{children:"Captain's License Progress"}),t.jsx(po,{children:"Track your progress toward OUPV (6-pack) Captain's License requirements"}),t.jsxs(uo,{children:[t.jsx(Ce,{children:"360-day total sea time tracking"}),t.jsx(Ce,{children:"90-day recent experience monitoring"}),t.jsx(Ce,{children:"Progress charts and completion estimates"}),t.jsx(Ce,{children:"Detailed statistics and requirements"})]})]}),t.jsxs(mo,{className:"secondary",onClick:()=>e("/reports/maintenance"),children:[t.jsx(ho,{children:"Maintenance Reports"}),t.jsx(po,{children:"Comprehensive maintenance tracking and cost analysis for all vessels"}),t.jsxs(uo,{children:[t.jsx(Ce,{children:"Upcoming and overdue task tracking"}),t.jsx(Ce,{children:"Cost analysis and completion rates"}),t.jsx(Ce,{children:"Template status and activity monitoring"}),t.jsx(Ce,{children:"Recent completion history"})]})]})]})}),t.jsx(F,{title:"Quick Access",variant:"accent",children:t.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[t.jsx(k,{variant:"primary",onClick:()=>e("/reports/license"),children:"License Progress"}),t.jsx(k,{variant:"secondary",onClick:()=>e("/reports/maintenance"),children:"Maintenance Reports"})]})})]})},$p=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,vp=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Rr=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
  margin-bottom: ${e=>e.theme.spacing.md};
`,Ir=s.label`
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,Mr=s.input`
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,wp=s.div`
  padding: ${e=>e.theme.spacing.sm};
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  ${e=>{switch(e.$type){case"success":return`
          background: ${e.theme.colors.status.success}20;
          color: ${e.theme.colors.status.success};
          border: 1px solid ${e.theme.colors.status.success};
        `;case"error":return`
          background: ${e.theme.colors.status.error}20;
          color: ${e.theme.colors.status.error};
          border: 1px solid ${e.theme.colors.status.error};
        `;case"info":return`
          background: ${e.theme.colors.primary.anakiwa}20;
          color: ${e.theme.colors.primary.anakiwa};
          border: 1px solid ${e.theme.colors.primary.anakiwa};
        `}}}
`,Cp=s.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
`,Br=s.div`
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Pr=s.div`
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,Sp=()=>{const{user:e,logout:r}=_r(),n=Y(),[o,a]=C.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[i,l]=C.useState(!1),[c,u]=C.useState(null),m=$=>g=>{a(d=>({...d,[$]:g.target.value})),c&&u(null)},h=async $=>{if($.preventDefault(),!o.currentPassword||!o.newPassword||!o.confirmPassword){u({type:"error",text:"All password fields are required"});return}if(o.newPassword!==o.confirmPassword){u({type:"error",text:"New passwords do not match"});return}if(o.newPassword.length<8){u({type:"error",text:"New password must be at least 8 characters"});return}l(!0),u({type:"info",text:"Changing password..."});try{await M.changePassword(o.currentPassword,o.newPassword),u({type:"success",text:"Password changed successfully. You will be logged out."}),a({currentPassword:"",newPassword:"",confirmPassword:""}),setTimeout(()=>{r()},2e3)}catch(g){u({type:"error",text:g.message||"Failed to change password"})}finally{l(!1)}},b=async()=>{window.confirm("Are you sure you want to log out?")&&await r()};return t.jsxs($p,{children:[t.jsx(I,{children:"System Settings"}),t.jsxs(vp,{children:[t.jsxs(F,{title:"User Account",children:[t.jsxs(Cp,{children:[t.jsx(Br,{children:"Username:"}),t.jsx(Pr,{children:(e==null?void 0:e.username)||"Unknown"}),t.jsx(Br,{children:"Account Created:"}),t.jsx(Pr,{children:e!=null&&e.createdAt?new Date(e.createdAt).toLocaleDateString():"Unknown"}),t.jsx(Br,{children:"Last Updated:"}),t.jsx(Pr,{children:e!=null&&e.updatedAt?new Date(e.updatedAt).toLocaleDateString():"Unknown"})]}),t.jsx("div",{style:{marginTop:"20px"},children:t.jsx(k,{onClick:b,variant:"secondary",children:"Logout"})})]}),t.jsx(F,{title:"Change Password",children:t.jsxs("form",{onSubmit:h,children:[t.jsxs(Rr,{children:[t.jsx(Ir,{htmlFor:"currentPassword",children:"Current Password"}),t.jsx(Mr,{id:"currentPassword",type:"password",value:o.currentPassword,onChange:m("currentPassword"),disabled:i,autoComplete:"current-password"})]}),t.jsxs(Rr,{children:[t.jsx(Ir,{htmlFor:"newPassword",children:"New Password"}),t.jsx(Mr,{id:"newPassword",type:"password",value:o.newPassword,onChange:m("newPassword"),disabled:i,autoComplete:"new-password",minLength:8})]}),t.jsxs(Rr,{children:[t.jsx(Ir,{htmlFor:"confirmPassword",children:"Confirm New Password"}),t.jsx(Mr,{id:"confirmPassword",type:"password",value:o.confirmPassword,onChange:m("confirmPassword"),disabled:i,autoComplete:"new-password",minLength:8})]}),c&&t.jsx(wp,{$type:c.type,children:c.text}),t.jsx("div",{style:{marginTop:"20px"},children:t.jsx(k,{type:"submit",disabled:i,children:i?"Changing Password...":"Change Password"})})]})})]}),t.jsxs(F,{title:"System Management",children:[t.jsx("div",{style:{display:"flex",gap:"10px",marginBottom:"20px"},children:t.jsx(k,{onClick:()=>n("/settings/backup"),variant:"secondary",children:"Backup Manager"})}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[t.jsx(A,{label:"Interface Version",value:"LCARS v1.0",valueColor:"anakiwa"}),t.jsx(A,{label:"System Status",value:"Operational",valueColor:"success"}),t.jsx(A,{label:"API Endpoint",value:"/api/v1",valueColor:"anakiwa"}),t.jsx(A,{label:"Authentication",value:"JWT Token-based",valueColor:"lilac"})]})]})]})},kp=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,Tp=s.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${e=>e.theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ap=s.div`
  padding: ${e=>e.theme.spacing.sm};
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: ${e=>e.theme.spacing.md};
  
  ${e=>{switch(e.$type){case"success":return`
          background: ${e.theme.colors.status.success}20;
          color: ${e.theme.colors.status.success};
          border: 1px solid ${e.theme.colors.status.success};
        `;case"error":return`
          background: ${e.theme.colors.status.error}20;
          color: ${e.theme.colors.status.error};
          border: 1px solid ${e.theme.colors.status.error};
        `;case"info":return`
          background: ${e.theme.colors.primary.anakiwa}20;
          color: ${e.theme.colors.primary.anakiwa};
          border: 1px solid ${e.theme.colors.primary.anakiwa};
        `}}}
`,Ep=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Lp=s.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  padding: ${e=>e.theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
  }
`,Fp=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,Dp=s.div`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: bold;
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,zp=s.div`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,Np=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
`,Rp=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xl};
  color: ${e=>e.theme.colors.text.secondary};
  font-style: italic;
`,Ip=()=>{const[e,r]=C.useState([]),[n,o]=C.useState(!0),[a,i]=C.useState(!1),[l,c]=C.useState(null);C.useEffect(()=>{u()},[]);const u=async()=>{try{o(!0);const g=await M.getBackups();r(g)}catch(g){c({type:"error",text:g.message||"Failed to load backups"})}finally{o(!1)}},m=async()=>{if(!a){i(!0),c({type:"info",text:"Creating backup... This may take a few minutes."});try{const g=await M.createBackup();c({type:"success",text:`Backup created successfully: ${g.filename}`}),await u()}catch(g){c({type:"error",text:g.message||"Failed to create backup"})}finally{i(!1)}}},h=async g=>{try{c({type:"info",text:`Downloading ${g.filename}...`});const d=await M.downloadBackup(g.id),y=window.URL.createObjectURL(d),p=document.createElement("a");p.href=y,p.download=g.filename,document.body.appendChild(p),p.click(),document.body.removeChild(p),window.URL.revokeObjectURL(y),c({type:"success",text:`Download started: ${g.filename}`})}catch(d){c({type:"error",text:d.message||"Failed to download backup"})}},b=g=>{if(g===0)return"0 Bytes";const d=1024,y=["Bytes","KB","MB","GB"],p=Math.floor(Math.log(g)/Math.log(d));return parseFloat((g/Math.pow(d,p)).toFixed(2))+" "+y[p]},$=g=>new Date(g).toLocaleString();return t.jsxs(kp,{children:[t.jsx(I,{children:"Database Backup Manager"}),l&&t.jsx(Ap,{$type:l.type,children:l.text}),t.jsxs(Tp,{children:[t.jsxs(F,{title:"Backup Operations",children:[t.jsxs("div",{style:{marginBottom:"20px"},children:[t.jsx("div",{style:{width:"100%",marginBottom:"10px"},children:t.jsx(k,{onClick:m,disabled:a,children:a?"Creating Backup...":"Create Manual Backup"})}),t.jsx("div",{style:{width:"100%"},children:t.jsx(k,{onClick:u,disabled:n,variant:"secondary",children:n?"Refreshing...":"Refresh List"})})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[t.jsx(A,{label:"Total Backups",value:e.length.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"Total Size",value:b(e.reduce((g,d)=>g+d.size,0)),valueColor:"lilac"}),t.jsx(A,{label:"Latest Backup",value:e.length>0?$(e[0].createdAt):"None",valueColor:"neonCarrot"})]}),t.jsxs("div",{style:{marginTop:"20px",padding:"10px",background:"rgba(255, 153, 102, 0.1)",border:"1px solid #FF9966"},children:[t.jsx("strong",{style:{color:"#FF9966"},children:"Important:"}),t.jsxs("ul",{style:{margin:"10px 0",paddingLeft:"20px",color:"#CCCCCC"},children:[t.jsx("li",{children:"Backups include both database records and uploaded photos"}),t.jsx("li",{children:"Large backups may take several minutes to create"}),t.jsx("li",{children:"Store backups in a secure location outside the system"}),t.jsx("li",{children:"Test backup restoration procedures regularly"})]})]})]}),t.jsx(F,{title:"Available Backups",children:n?t.jsx("div",{style:{textAlign:"center",padding:"40px"},children:t.jsx("div",{style:{color:"#6688CC"},children:"Loading backups..."})}):e.length===0?t.jsx(Rp,{children:"No backups available. Create your first backup to get started."}):t.jsx(Ep,{children:e.map(g=>t.jsxs(Lp,{children:[t.jsxs(Fp,{children:[t.jsx(Dp,{children:g.filename}),t.jsxs(zp,{children:[t.jsxs("span",{children:["Created: ",$(g.createdAt)]}),t.jsxs("span",{children:["Size: ",b(g.size)]})]})]}),t.jsx(Np,{children:t.jsx(k,{onClick:()=>h(g),variant:"secondary",size:"sm",children:"Download"})})]},g.id))})})]})]})},Mp=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
`,Bp=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Pp=s.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
`,Op=s.h2`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  min-width: 200px;
  text-align: center;
`,Up=s.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: ${e=>e.theme.colors.primary.anakiwa};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
`,qp=s.div`
  background-color: ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  text-align: center;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Hp=s.div`
  background-color: ${e=>e.theme.colors.surface.dark};
  min-height: 120px;
  padding: ${e=>e.theme.spacing.xs};
  display: flex;
  flex-direction: column;
  position: relative;
  
  ${e=>!e.$isCurrentMonth&&`
    background-color: ${e.theme.colors.surface.medium};
    opacity: 0.5;
  `}
  
  ${e=>e.$isToday&&`
    border: 2px solid ${e.theme.colors.primary.neonCarrot};
    background-color: ${e.theme.colors.primary.neonCarrot}10;
  `}

  ${e=>e.$hasEvents&&`
    border-left: 4px solid ${e.theme.colors.primary.lilac};
  `}
`,Vp=s.div`
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.$isToday?e.theme.colors.primary.neonCarrot:e.theme.colors.text.primary};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,Wp=s.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`,go=s.div`
  background-color: ${e=>e.$type==="trip"?e.theme.colors.primary.anakiwa:e.theme.colors.primary.lilac};
  color: ${e=>e.theme.colors.text.primary};
  padding: 2px 4px;
  font-size: 10px;
  border-radius: 2px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,Gp=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Kp=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,xo=s.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.xs};
  
  &::before {
    content: '';
    width: 12px;
    height: 12px;
    background-color: ${e=>e.$color};
    border-radius: 2px;
  }
`,Jp=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Qp=["January","February","March","April","May","June","July","August","September","October","November","December"],_p=()=>{const[e,r]=C.useState(new Date),[n,o]=C.useState([]),{data:a,isLoading:i}=Ae(),{data:l,isLoading:c}=Zr();C.useEffect(()=>{const x=[];a&&a.forEach(j=>{var f;x.push({id:`trip-${j.id}`,title:`Trip: ${((f=j.boat)==null?void 0:f.name)||"Unknown Boat"}`,date:new Date(j.startTime),type:"trip",data:j})}),l&&l.forEach(j=>{var f;x.push({id:`maintenance-${j.id}`,title:`Maintenance: ${((f=j.template)==null?void 0:f.title)||"Unknown Task"}`,date:new Date(j.dueDate),type:"maintenance",data:j})}),o(x)},[a,l]);const u=x=>{r(j=>{const f=new Date(j);return x==="prev"?f.setMonth(j.getMonth()-1):f.setMonth(j.getMonth()+1),f})},m=()=>{r(new Date)},h=x=>{const j=x.getFullYear(),f=x.getMonth(),w=new Date(j,f,1),T=new Date(j,f+1,0).getDate(),N=w.getDay(),B=[];for(let S=N-1;S>=0;S--){const z=new Date(j,f,-S);B.push(z)}for(let S=1;S<=T;S++)B.push(new Date(j,f,S));const E=42-B.length;for(let S=1;S<=E;S++)B.push(new Date(j,f+1,S));return B},b=x=>n.filter(j=>new Date(j.date).toDateString()===x.toDateString()),$=x=>{const j=new Date;return x.toDateString()===j.toDateString()},g=x=>x.getMonth()===e.getMonth(),d=h(e),y=(a==null?void 0:a.filter(x=>{const j=new Date(x.startTime);return j.getMonth()===e.getMonth()&&j.getFullYear()===e.getFullYear()}))||[],p=(l==null?void 0:l.filter(x=>{const j=new Date(x.dueDate);return j.getMonth()===e.getMonth()&&j.getFullYear()===e.getFullYear()}))||[];return t.jsxs(Mp,{children:[t.jsx(I,{children:"Mission Calendar"}),t.jsxs(Gp,{children:[t.jsx(A,{label:"Current Month Trips",value:y.length.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"Upcoming Maintenance",value:p.length.toString(),valueColor:"lilac"}),t.jsx(A,{label:"Total Events",value:(y.length+p.length).toString(),valueColor:"neonCarrot"})]}),t.jsxs(F,{title:"Calendar View",children:[t.jsxs(Bp,{children:[t.jsxs(Pp,{children:[t.jsx(k,{onClick:()=>u("prev"),variant:"secondary",size:"sm",children:"← Previous"}),t.jsxs(Op,{children:[Qp[e.getMonth()]," ",e.getFullYear()]}),t.jsx(k,{onClick:()=>u("next"),variant:"secondary",size:"sm",children:"Next →"})]}),t.jsx(k,{onClick:m,size:"sm",children:"Today"})]}),t.jsxs(Kp,{children:[t.jsx(xo,{$color:"#6688CC",children:"Trips"}),t.jsx(xo,{$color:"#CC99CC",children:"Maintenance"})]}),t.jsxs(Up,{children:[Jp.map(x=>t.jsx(qp,{children:x},x)),d.map((x,j)=>{const f=b(x);return t.jsxs(Hp,{$isCurrentMonth:g(x),$isToday:$(x),$hasEvents:f.length>0,children:[t.jsx(Vp,{$isToday:$(x),children:x.getDate()}),t.jsxs(Wp,{children:[f.slice(0,3).map(w=>t.jsx(go,{$type:w.type,title:w.title,children:w.title},w.id)),f.length>3&&t.jsxs(go,{$type:"trip",children:["+",f.length-3," more"]})]})]},j)})]}),(i||c)&&t.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#6688CC"},children:"Loading calendar data..."})]})]})},Zp=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
`,Yp=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
  flex-wrap: wrap;
`,Xp=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.md};
`,eu=s.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.sm};
  overflow: hidden;
  cursor: pointer;
  transition: all ${e=>e.theme.animation.normal} ease;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.glow};
  }
`,tu=s.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`,ru=s.div`
  padding: ${e=>e.theme.spacing.sm};
`,nu=s.div`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  margin-bottom: ${e=>e.theme.spacing.xs};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,ou=s.div`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,su=s.span`
  background: ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: 2px 6px;
  border-radius: 2px;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
`,au=s.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: ${e=>e.$isOpen?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: ${e=>e.theme.zIndex.modal};
  padding: ${e=>e.theme.spacing.lg};
`,iu=s.div`
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
`,lu=s.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
`,cu=s.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  padding: ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  text-align: center;
  max-width: 500px;
`,du=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,mu=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xl};
  color: ${e=>e.theme.colors.text.secondary};
  font-style: italic;
`,hu=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,pu=()=>{const[e,r]=C.useState([]),[n,o]=C.useState([]),[a,i]=C.useState("all"),[l,c]=C.useState(null),[u,m]=C.useState(!0),{data:h,isLoading:b}=Ae();C.useEffect(()=>{const x=[];h&&h.forEach(j=>{j.photos&&j.photos.forEach(f=>{var w;x.push({...f,contextType:"trip",contextTitle:`Trip: ${((w=j.boat)==null?void 0:w.name)||"Unknown Boat"}`,contextDate:new Date(j.startTime).toLocaleDateString()})})}),x.sort((j,f)=>new Date(f.createdAt).getTime()-new Date(j.createdAt).getTime()),r(x),m(b)},[h,b]),C.useEffect(()=>{let x=e;a==="trips"&&(x=e.filter(j=>j.contextType==="trip")),o(x)},[e,a]);const $=x=>{c(x)},g=()=>{c(null)},d=x=>{if(!l)return;const j=n.findIndex(w=>w.id===l.id);let f=j;x==="prev"?f=j>0?j-1:n.length-1:f=j<n.length-1?j+1:0,c(n[f])},y=x=>{if(x===0)return"0 Bytes";const j=1024,f=["Bytes","KB","MB","GB"],w=Math.floor(Math.log(x)/Math.log(j));return parseFloat((x/Math.pow(j,w)).toFixed(2))+" "+f[w]},p=e.filter(x=>x.contextType==="trip");return t.jsxs(Zp,{children:[t.jsx(I,{children:"Photo Gallery"}),t.jsxs(hu,{children:[t.jsx(A,{label:"Total Photos",value:e.length.toString(),valueColor:"neonCarrot"}),t.jsx(A,{label:"Trip Photos",value:p.length.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"Maintenance Photos",value:"0",valueColor:"lilac"}),t.jsx(A,{label:"Total Size",value:y(e.reduce((x,j)=>x+(j.sizeBytes||0),0)),valueColor:"anakiwa"})]}),t.jsxs(F,{title:"Photo Collection",children:[t.jsxs(Yp,{children:[t.jsxs(k,{onClick:()=>i("all"),variant:a==="all"?"primary":"secondary",size:"sm",children:["All Photos (",e.length,")"]}),t.jsxs(k,{onClick:()=>i("trips"),variant:a==="trips"?"primary":"secondary",size:"sm",children:["Trip Photos (",p.length,")"]}),t.jsx(k,{onClick:()=>i("trips"),variant:a==="trips"?"primary":"secondary",size:"sm",disabled:!0,children:"Maintenance Photos (Coming Soon)"})]}),u?t.jsx("div",{style:{textAlign:"center",padding:"40px"},children:t.jsx("div",{style:{color:"#6688CC"},children:"Loading photos..."})}):n.length===0?t.jsx(mu,{children:"No photos found. Photos will appear here when you attach them to trips."}):t.jsx(Xp,{children:n.map(x=>t.jsxs(eu,{onClick:()=>$(x),children:[t.jsx(tu,{src:x.webOptimizedPath||x.originalPath,alt:x.contextTitle,loading:"lazy"}),t.jsxs(ru,{children:[t.jsx(nu,{children:x.contextTitle}),t.jsxs(ou,{children:[t.jsx(su,{$type:x.contextType,children:x.contextType}),t.jsx("span",{children:x.contextDate})]})]})]},x.id))})]}),t.jsx(au,{$isOpen:!!l,onClick:g,children:l&&t.jsxs(iu,{onClick:x=>x.stopPropagation(),children:[t.jsx(lu,{src:l.webOptimizedPath||l.originalPath,alt:l.contextTitle}),t.jsxs(cu,{children:[t.jsx("div",{style:{marginBottom:"10px"},children:t.jsx("strong",{children:l.contextTitle})}),t.jsxs("div",{style:{fontSize:"14px",color:"#CCCCCC"},children:[t.jsxs("div",{children:["Date: ",l.contextDate]}),t.jsxs("div",{children:["Size: ",y(l.sizeBytes||0)]}),t.jsxs("div",{children:["Type: ",l.mimeType]}),l.metadata&&t.jsxs("div",{children:["Dimensions: ",l.metadata.width," × ",l.metadata.height]})]})]}),t.jsxs(du,{children:[t.jsx(k,{onClick:()=>d("prev"),variant:"secondary",size:"sm",children:"← Previous"}),t.jsx(k,{onClick:g,size:"sm",children:"Close"}),t.jsx(k,{onClick:()=>d("next"),variant:"secondary",size:"sm",children:"Next →"})]})]})})]})},Lt=s.div`
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
`,uu=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.background};
  
  .loading-text {
    color: ${e=>e.theme.colors.primary.neonCarrot};
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;function gu(){const{isAuthenticated:e,isLoading:r,needsSetup:n}=_r();return r?t.jsx(Lt,{children:t.jsx(uu,{children:t.jsx("div",{className:"loading-text",children:"Initializing LCARS Interface"})})}):n?t.jsx(Lt,{children:t.jsx(tr,{})}):e?t.jsx(Lt,{children:t.jsx(Zi,{children:t.jsx(Ki,{children:t.jsxs(en,{children:[t.jsx(U,{path:"/",element:t.jsx(Zt,{})}),t.jsx(U,{path:"/dashboard",element:t.jsx(Zt,{})}),t.jsx(U,{path:"/boats",element:t.jsx($c,{})}),t.jsx(U,{path:"/boats/new",element:t.jsx(Vc,{})}),t.jsx(U,{path:"/boats/:id",element:t.jsx(Nc,{})}),t.jsx(U,{path:"/trips",element:t.jsx(nd,{})}),t.jsx(U,{path:"/trips/:id",element:t.jsx(Sd,{})}),t.jsx(U,{path:"/trips/:id/edit",element:t.jsx(Dd,{})}),t.jsx(U,{path:"/notes",element:t.jsx(Jd,{})}),t.jsx(U,{path:"/notes/new",element:t.jsx(qn,{})}),t.jsx(U,{path:"/notes/:id",element:t.jsx(sm,{})}),t.jsx(U,{path:"/notes/:id/edit",element:t.jsx(qn,{})}),t.jsx(U,{path:"/todos",element:t.jsx(Mm,{})}),t.jsx(U,{path:"/todos/new",element:t.jsx(lh,{})}),t.jsx(U,{path:"/todos/:id",element:t.jsx(eh,{})}),t.jsx(U,{path:"/maintenance",element:t.jsx(jh,{})}),t.jsx(U,{path:"/maintenance/templates/new",element:t.jsx(ao,{})}),t.jsx(U,{path:"/maintenance/templates/:id",element:t.jsx(Th,{})}),t.jsx(U,{path:"/maintenance/templates/:id/edit",element:t.jsx(ao,{})}),t.jsx(U,{path:"/maintenance/events/:id",element:t.jsx(Ih,{})}),t.jsx(U,{path:"/map",element:t.jsx(ap,{})}),t.jsx(U,{path:"/reports",element:t.jsx(jp,{})}),t.jsx(U,{path:"/reports/license",element:t.jsx(hp,{})}),t.jsx(U,{path:"/reports/maintenance",element:t.jsx(fp,{})}),t.jsx(U,{path:"/settings",element:t.jsx(Sp,{})}),t.jsx(U,{path:"/settings/backup",element:t.jsx(Ip,{})}),t.jsx(U,{path:"/calendar",element:t.jsx(_p,{})}),t.jsx(U,{path:"/photos",element:t.jsx(pu,{})}),t.jsx(U,{path:"*",element:t.jsx(Zt,{})})]})})})}):t.jsx(Lt,{children:t.jsxs(en,{children:[t.jsx(U,{path:"/setup",element:t.jsx(tr,{})}),t.jsx(U,{path:"*",element:t.jsx(tr,{})})]})})}const xu=ps`
  /* Import Antonio font from Google Fonts - full weight range for LCARS */
  @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100;200;300;400;500;600;700&display=swap');

  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  /* Body - Authentic LCARS styling */
  body {
    font-family: 'Antonio', sans-serif;
    font-size: 14px;
    line-height: 1.4;
    color: #FF9933;
    background-color: #000000;
    text-transform: uppercase;
    letter-spacing: 1px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
  }

  /* Headings - LCARS style */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Antonio', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #FF9933;
  }

  h1 {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5, h6 {
    font-size: 1.25rem;
  }

  /* Button reset */
  button {
    font-family: 'Antonio', sans-serif;
    font-size: inherit;
    text-transform: uppercase;
    border: none;
    background: none;
    cursor: pointer;
    color: inherit;
  }

  /* Form inputs - LCARS style */
  input, textarea, select {
    font-family: 'Antonio', sans-serif;
    font-size: inherit;
    text-transform: uppercase;
    color: #FFCC99;
    background-color: #0A0A0A;
    border: 2px solid #664466;
    border-radius: 0;
    padding: 8px 16px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &:focus {
      outline: none;
      border-color: #FF9933;
      box-shadow: 0 0 8px rgba(255, 153, 51, 0.4);
    }

    &::placeholder {
      color: #664466;
      text-transform: uppercase;
    }
  }

  /* Links - LCARS blue */
  a {
    color: #99CCFF;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #FFCC99;
    }
  }

  /* Scrollbar - LCARS flat design */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #0A0A0A;
  }

  ::-webkit-scrollbar-thumb {
    background: #664466;
    border-radius: 0;

    &:hover {
      background: #CC99CC;
    }
  }

  /* Selection styling */
  ::selection {
    background-color: #FF9933;
    color: #000000;
  }

  ::-moz-selection {
    background-color: #FF9933;
    color: #000000;
  }

  /* LCARS Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes lcars-blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0.3;
    }
  }

  @keyframes lcars-sweep {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  @keyframes lcars-pulse {
    0%, 100% {
      box-shadow: 0 0 4px rgba(255, 153, 51, 0.4);
    }
    50% {
      box-shadow: 0 0 12px rgba(255, 153, 51, 0.8);
    }
  }

  /* Animation utility classes */
  .fade-in {
    animation: fadeIn 0.3s ease-in-out;
  }

  .slide-in {
    animation: slideIn 0.4s ease-out;
  }

  .lcars-blink {
    animation: lcars-blink 1s infinite;
  }

  .lcars-sweep {
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 153, 51, 0.3) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: lcars-sweep 2s linear infinite;
  }

  .lcars-pulse {
    animation: lcars-pulse 2s ease-in-out infinite;
  }

  /* Utility classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .text-uppercase {
    text-transform: uppercase;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    body {
      font-size: 13px;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 12px;
      letter-spacing: 0.5px;
    }

    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
`,fu={colors:{primary:{paleCanary:"#FFFF99",tanoi:"#FFCC99",goldenTanoi:"#FFCC66",neonCarrot:"#FF9933",eggplant:"#664466",lilac:"#CC99CC",anakiwa:"#99CCFF",mariner:"#3366CC",bahamBlue:"#006699"},background:"#000000",surface:{dark:"#0A0A0A",medium:"#1A1119",light:"#2A2233"},text:{primary:"#FF9933",secondary:"#CC99CC",muted:"#664466",inverse:"#000000",light:"#FFCC99"},status:{success:"#55FF55",warning:"#FFFF99",error:"#FF5555",info:"#99CCFF"},interactive:{hover:"#FFCC66",active:"#FFCC99",disabled:"#664466"}},typography:{fontFamily:{primary:"'Antonio', 'Helvetica Neue', Arial, sans-serif",monospace:"'Courier New', monospace"},fontSize:{xs:"11px",sm:"13px",md:"15px",lg:"18px",xl:"24px",xxl:"32px",xxxl:"48px"},fontWeight:{normal:400,bold:700},lineHeight:{tight:1.1,normal:1.4,loose:1.7},letterSpacing:{tight:"-0.02em",normal:"0.04em",wide:"0.1em",extraWide:"0.2em"}},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px",xxxl:"64px"},borderRadius:{none:"0",sm:"4px",md:"8px",lg:"16px",xl:"24px",pill:"9999px"},shadows:{sm:"0 1px 3px rgba(255, 153, 51, 0.12)",md:"0 4px 8px rgba(255, 153, 51, 0.15)",lg:"0 10px 20px rgba(255, 153, 51, 0.18)",glow:"0 0 20px rgba(255, 153, 51, 0.35)",glowStrong:"0 0 40px rgba(255, 153, 51, 0.5)",glowSubtle:"0 0 10px rgba(255, 153, 51, 0.15)"},zIndex:{dropdown:1e3,sticky:1020,fixed:1030,modal:1040,popover:1050,tooltip:1060},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px"},animation:{fast:"150ms",normal:"300ms",slow:"500ms"},lcars:{sidebarWidth:"200px",headerHeight:"60px",footerHeight:"40px",elbowSize:"60px",barThickness:"30px",buttonHeight:"40px",gap:"3px",buttonRadius:"9999px"}},yu=new ls({defaultOptions:{queries:{retry:3,staleTime:5*60*1e3,refetchOnWindowFocus:!1}}});Or.createRoot(document.getElementById("root")).render(t.jsx(Me.StrictMode,{children:t.jsx(cs,{client:yu,children:t.jsx(hs,{children:t.jsxs(us,{theme:fu,children:[t.jsx(xu,{}),t.jsx(_l,{children:t.jsx(gu,{})})]})})})}));
//# sourceMappingURL=index-0Ow_tp7m.js.map
