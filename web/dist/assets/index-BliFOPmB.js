import{j as t,u as _,a as G,b as Q,Q as cs,c as ds}from"./query-qfgcgxkg.js";import{b as ms,r as C,a as Ie}from"./vendor-ibvuEIEr.js";import{u as Y,a as hs,b as ye,L as J,R as Xr,c as U,B as ps}from"./router-Eu-lOo48.js";import{d as s,l as L,m as Pe,f as us,o as gs}from"./ui-BNlCdbnp.js";import{l as Be,T as xo,P as fo,M as Ce,a as Se,b as yo,u as xs}from"./maps-Cwoarths.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var Br={},en=ms;Br.createRoot=en.createRoot,Br.hydrateRoot=en.hydrateRoot;function bo(e,r){return function(){return e.apply(r,arguments)}}const{toString:fs}=Object.prototype,{getPrototypeOf:Vr}=Object,{iterator:Mt,toStringTag:jo}=Symbol,Pt=(e=>r=>{const n=fs.call(r);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),se=e=>(e=e.toLowerCase(),r=>Pt(r)===e),Bt=e=>r=>typeof r===e,{isArray:Xe}=Array,Ye=Bt("undefined");function it(e){return e!==null&&!Ye(e)&&e.constructor!==null&&!Ye(e.constructor)&&X(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const $o=se("ArrayBuffer");function ys(e){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&$o(e.buffer),r}const bs=Bt("string"),X=Bt("function"),vo=Bt("number"),lt=e=>e!==null&&typeof e=="object",js=e=>e===!0||e===!1,Ft=e=>{if(Pt(e)!=="object")return!1;const r=Vr(e);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(jo in e)&&!(Mt in e)},$s=e=>{if(!lt(e)||it(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},vs=se("Date"),ws=se("File"),Cs=se("Blob"),Ss=se("FileList"),ks=e=>lt(e)&&X(e.pipe),Ts=e=>{let r;return e&&(typeof FormData=="function"&&e instanceof FormData||X(e.append)&&((r=Pt(e))==="formdata"||r==="object"&&X(e.toString)&&e.toString()==="[object FormData]"))},As=se("URLSearchParams"),[Es,Ls,Fs,Ds]=["ReadableStream","Request","Response","Headers"].map(se),zs=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ct(e,r,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let o,a;if(typeof e!="object"&&(e=[e]),Xe(e))for(o=0,a=e.length;o<a;o++)r.call(null,e[o],o,e);else{if(it(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),l=i.length;let c;for(o=0;o<l;o++)c=i[o],r.call(null,e[c],c,e)}}function wo(e,r){if(it(e))return null;r=r.toLowerCase();const n=Object.keys(e);let o=n.length,a;for(;o-- >0;)if(a=n[o],r===a.toLowerCase())return a;return null}const Re=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Co=e=>!Ye(e)&&e!==Re;function Or(){const{caseless:e,skipUndefined:r}=Co(this)&&this||{},n={},o=(a,i)=>{const l=e&&wo(n,i)||i;Ft(n[l])&&Ft(a)?n[l]=Or(n[l],a):Ft(a)?n[l]=Or({},a):Xe(a)?n[l]=a.slice():(!r||!Ye(a))&&(n[l]=a)};for(let a=0,i=arguments.length;a<i;a++)arguments[a]&&ct(arguments[a],o);return n}const Rs=(e,r,n,{allOwnKeys:o}={})=>(ct(r,(a,i)=>{n&&X(a)?e[i]=bo(a,n):e[i]=a},{allOwnKeys:o}),e),Ns=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Is=(e,r,n,o)=>{e.prototype=Object.create(r.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:r.prototype}),n&&Object.assign(e.prototype,n)},Ms=(e,r,n,o)=>{let a,i,l;const c={};if(r=r||{},e==null)return r;do{for(a=Object.getOwnPropertyNames(e),i=a.length;i-- >0;)l=a[i],(!o||o(l,e,r))&&!c[l]&&(r[l]=e[l],c[l]=!0);e=n!==!1&&Vr(e)}while(e&&(!n||n(e,r))&&e!==Object.prototype);return r},Ps=(e,r,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=r.length;const o=e.indexOf(r,n);return o!==-1&&o===n},Bs=e=>{if(!e)return null;if(Xe(e))return e;let r=e.length;if(!vo(r))return null;const n=new Array(r);for(;r-- >0;)n[r]=e[r];return n},Os=(e=>r=>e&&r instanceof e)(typeof Uint8Array<"u"&&Vr(Uint8Array)),Us=(e,r)=>{const o=(e&&e[Mt]).call(e);let a;for(;(a=o.next())&&!a.done;){const i=a.value;r.call(e,i[0],i[1])}},qs=(e,r)=>{let n;const o=[];for(;(n=e.exec(r))!==null;)o.push(n);return o},Hs=se("HTMLFormElement"),Vs=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,o,a){return o.toUpperCase()+a}),tn=(({hasOwnProperty:e})=>(r,n)=>e.call(r,n))(Object.prototype),Ws=se("RegExp"),So=(e,r)=>{const n=Object.getOwnPropertyDescriptors(e),o={};ct(n,(a,i)=>{let l;(l=r(a,i,e))!==!1&&(o[i]=l||a)}),Object.defineProperties(e,o)},Gs=e=>{So(e,(r,n)=>{if(X(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const o=e[n];if(X(o)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ks=(e,r)=>{const n={},o=a=>{a.forEach(i=>{n[i]=!0})};return Xe(e)?o(e):o(String(e).split(r)),n},Js=()=>{},Qs=(e,r)=>e!=null&&Number.isFinite(e=+e)?e:r;function Zs(e){return!!(e&&X(e.append)&&e[jo]==="FormData"&&e[Mt])}const _s=e=>{const r=new Array(10),n=(o,a)=>{if(lt(o)){if(r.indexOf(o)>=0)return;if(it(o))return o;if(!("toJSON"in o)){r[a]=o;const i=Xe(o)?[]:{};return ct(o,(l,c)=>{const u=n(l,a+1);!Ye(u)&&(i[c]=u)}),r[a]=void 0,i}}return o};return n(e,0)},Ys=se("AsyncFunction"),Xs=e=>e&&(lt(e)||X(e))&&X(e.then)&&X(e.catch),ko=((e,r)=>e?setImmediate:r?((n,o)=>(Re.addEventListener("message",({source:a,data:i})=>{a===Re&&i===n&&o.length&&o.shift()()},!1),a=>{o.push(a),Re.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",X(Re.postMessage)),ea=typeof queueMicrotask<"u"?queueMicrotask.bind(Re):typeof process<"u"&&process.nextTick||ko,ta=e=>e!=null&&X(e[Mt]),$={isArray:Xe,isArrayBuffer:$o,isBuffer:it,isFormData:Ts,isArrayBufferView:ys,isString:bs,isNumber:vo,isBoolean:js,isObject:lt,isPlainObject:Ft,isEmptyObject:$s,isReadableStream:Es,isRequest:Ls,isResponse:Fs,isHeaders:Ds,isUndefined:Ye,isDate:vs,isFile:ws,isBlob:Cs,isRegExp:Ws,isFunction:X,isStream:ks,isURLSearchParams:As,isTypedArray:Os,isFileList:Ss,forEach:ct,merge:Or,extend:Rs,trim:zs,stripBOM:Ns,inherits:Is,toFlatObject:Ms,kindOf:Pt,kindOfTest:se,endsWith:Ps,toArray:Bs,forEachEntry:Us,matchAll:qs,isHTMLForm:Hs,hasOwnProperty:tn,hasOwnProp:tn,reduceDescriptors:So,freezeMethods:Gs,toObjectSet:Ks,toCamelCase:Vs,noop:Js,toFiniteNumber:Qs,findKey:wo,global:Re,isContextDefined:Co,isSpecCompliantForm:Zs,toJSONObject:_s,isAsyncFn:Ys,isThenable:Xs,setImmediate:ko,asap:ea,isIterable:ta};function B(e,r,n,o,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",r&&(this.code=r),n&&(this.config=n),o&&(this.request=o),a&&(this.response=a,this.status=a.status?a.status:null)}$.inherits(B,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.status}}});const To=B.prototype,Ao={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ao[e]={value:e}});Object.defineProperties(B,Ao);Object.defineProperty(To,"isAxiosError",{value:!0});B.from=(e,r,n,o,a,i)=>{const l=Object.create(To);$.toFlatObject(e,l,function(p){return p!==Error.prototype},m=>m!=="isAxiosError");const c=e&&e.message?e.message:"Error",u=r==null&&e?e.code:r;return B.call(l,c,u,n,o,a),e&&l.cause==null&&Object.defineProperty(l,"cause",{value:e,configurable:!0}),l.name=e&&e.name||"Error",i&&Object.assign(l,i),l};const ra=null;function Ur(e){return $.isPlainObject(e)||$.isArray(e)}function Eo(e){return $.endsWith(e,"[]")?e.slice(0,-2):e}function rn(e,r,n){return e?e.concat(r).map(function(a,i){return a=Eo(a),!n&&i?"["+a+"]":a}).join(n?".":""):r}function na(e){return $.isArray(e)&&!e.some(Ur)}const oa=$.toFlatObject($,{},null,function(r){return/^is[A-Z]/.test(r)});function Ot(e,r,n){if(!$.isObject(e))throw new TypeError("target must be an object");r=r||new FormData,n=$.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,h){return!$.isUndefined(h[y])});const o=n.metaTokens,a=n.visitor||p,i=n.dots,l=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&$.isSpecCompliantForm(r);if(!$.isFunction(a))throw new TypeError("visitor must be a function");function m(d){if(d===null)return"";if($.isDate(d))return d.toISOString();if($.isBoolean(d))return d.toString();if(!u&&$.isBlob(d))throw new B("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(d)||$.isTypedArray(d)?u&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function p(d,y,h){let x=d;if(d&&!h&&typeof d=="object"){if($.endsWith(y,"{}"))y=o?y:y.slice(0,-2),d=JSON.stringify(d);else if($.isArray(d)&&na(d)||($.isFileList(d)||$.endsWith(y,"[]"))&&(x=$.toArray(d)))return y=Eo(y),x.forEach(function(f,w){!($.isUndefined(f)||f===null)&&r.append(l===!0?rn([y],w,i):l===null?y:y+"[]",m(f))}),!1}return Ur(d)?!0:(r.append(rn(h,y,i),m(d)),!1)}const j=[],v=Object.assign(oa,{defaultVisitor:p,convertValue:m,isVisitable:Ur});function g(d,y){if(!$.isUndefined(d)){if(j.indexOf(d)!==-1)throw Error("Circular reference detected in "+y.join("."));j.push(d),$.forEach(d,function(x,b){(!($.isUndefined(x)||x===null)&&a.call(r,x,$.isString(b)?b.trim():b,y,v))===!0&&g(x,y?y.concat(b):[b])}),j.pop()}}if(!$.isObject(e))throw new TypeError("data must be an object");return g(e),r}function nn(e){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return r[o]})}function Wr(e,r){this._pairs=[],e&&Ot(e,this,r)}const Lo=Wr.prototype;Lo.append=function(r,n){this._pairs.push([r,n])};Lo.toString=function(r){const n=r?function(o){return r.call(this,o,nn)}:nn;return this._pairs.map(function(a){return n(a[0])+"="+n(a[1])},"").join("&")};function sa(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Fo(e,r,n){if(!r)return e;const o=n&&n.encode||sa;$.isFunction(n)&&(n={serialize:n});const a=n&&n.serialize;let i;if(a?i=a(r,n):i=$.isURLSearchParams(r)?r.toString():new Wr(r,n).toString(o),i){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class on{constructor(){this.handlers=[]}use(r,n,o){return this.handlers.push({fulfilled:r,rejected:n,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){$.forEach(this.handlers,function(o){o!==null&&r(o)})}}const Do={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},aa=typeof URLSearchParams<"u"?URLSearchParams:Wr,ia=typeof FormData<"u"?FormData:null,la=typeof Blob<"u"?Blob:null,ca={isBrowser:!0,classes:{URLSearchParams:aa,FormData:ia,Blob:la},protocols:["http","https","file","blob","url","data"]},Gr=typeof window<"u"&&typeof document<"u",qr=typeof navigator=="object"&&navigator||void 0,da=Gr&&(!qr||["ReactNative","NativeScript","NS"].indexOf(qr.product)<0),ma=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ha=Gr&&window.location.href||"http://localhost",pa=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Gr,hasStandardBrowserEnv:da,hasStandardBrowserWebWorkerEnv:ma,navigator:qr,origin:ha},Symbol.toStringTag,{value:"Module"})),Z={...pa,...ca};function ua(e,r){return Ot(e,new Z.classes.URLSearchParams,{visitor:function(n,o,a,i){return Z.isNode&&$.isBuffer(n)?(this.append(o,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...r})}function ga(e){return $.matchAll(/\w+|\[(\w*)]/g,e).map(r=>r[0]==="[]"?"":r[1]||r[0])}function xa(e){const r={},n=Object.keys(e);let o;const a=n.length;let i;for(o=0;o<a;o++)i=n[o],r[i]=e[i];return r}function zo(e){function r(n,o,a,i){let l=n[i++];if(l==="__proto__")return!0;const c=Number.isFinite(+l),u=i>=n.length;return l=!l&&$.isArray(a)?a.length:l,u?($.hasOwnProp(a,l)?a[l]=[a[l],o]:a[l]=o,!c):((!a[l]||!$.isObject(a[l]))&&(a[l]=[]),r(n,o,a[l],i)&&$.isArray(a[l])&&(a[l]=xa(a[l])),!c)}if($.isFormData(e)&&$.isFunction(e.entries)){const n={};return $.forEachEntry(e,(o,a)=>{r(ga(o),a,n,0)}),n}return null}function fa(e,r,n){if($.isString(e))try{return(r||JSON.parse)(e),$.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(n||JSON.stringify)(e)}const dt={transitional:Do,adapter:["xhr","http","fetch"],transformRequest:[function(r,n){const o=n.getContentType()||"",a=o.indexOf("application/json")>-1,i=$.isObject(r);if(i&&$.isHTMLForm(r)&&(r=new FormData(r)),$.isFormData(r))return a?JSON.stringify(zo(r)):r;if($.isArrayBuffer(r)||$.isBuffer(r)||$.isStream(r)||$.isFile(r)||$.isBlob(r)||$.isReadableStream(r))return r;if($.isArrayBufferView(r))return r.buffer;if($.isURLSearchParams(r))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let c;if(i){if(o.indexOf("application/x-www-form-urlencoded")>-1)return ua(r,this.formSerializer).toString();if((c=$.isFileList(r))||o.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Ot(c?{"files[]":r}:r,u&&new u,this.formSerializer)}}return i||a?(n.setContentType("application/json",!1),fa(r)):r}],transformResponse:[function(r){const n=this.transitional||dt.transitional,o=n&&n.forcedJSONParsing,a=this.responseType==="json";if($.isResponse(r)||$.isReadableStream(r))return r;if(r&&$.isString(r)&&(o&&!this.responseType||a)){const l=!(n&&n.silentJSONParsing)&&a;try{return JSON.parse(r,this.parseReviver)}catch(c){if(l)throw c.name==="SyntaxError"?B.from(c,B.ERR_BAD_RESPONSE,this,null,this.response):c}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Z.classes.FormData,Blob:Z.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],e=>{dt.headers[e]={}});const ya=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ba=e=>{const r={};let n,o,a;return e&&e.split(`
`).forEach(function(l){a=l.indexOf(":"),n=l.substring(0,a).trim().toLowerCase(),o=l.substring(a+1).trim(),!(!n||r[n]&&ya[n])&&(n==="set-cookie"?r[n]?r[n].push(o):r[n]=[o]:r[n]=r[n]?r[n]+", "+o:o)}),r},sn=Symbol("internals");function tt(e){return e&&String(e).trim().toLowerCase()}function Dt(e){return e===!1||e==null?e:$.isArray(e)?e.map(Dt):String(e)}function ja(e){const r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=n.exec(e);)r[o[1]]=o[2];return r}const $a=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Vt(e,r,n,o,a){if($.isFunction(o))return o.call(this,r,n);if(a&&(r=n),!!$.isString(r)){if($.isString(o))return r.indexOf(o)!==-1;if($.isRegExp(o))return o.test(r)}}function va(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,n,o)=>n.toUpperCase()+o)}function wa(e,r){const n=$.toCamelCase(" "+r);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+n,{value:function(a,i,l){return this[o].call(this,r,a,i,l)},configurable:!0})})}let ee=class{constructor(r){r&&this.set(r)}set(r,n,o){const a=this;function i(c,u,m){const p=tt(u);if(!p)throw new Error("header name must be a non-empty string");const j=$.findKey(a,p);(!j||a[j]===void 0||m===!0||m===void 0&&a[j]!==!1)&&(a[j||u]=Dt(c))}const l=(c,u)=>$.forEach(c,(m,p)=>i(m,p,u));if($.isPlainObject(r)||r instanceof this.constructor)l(r,n);else if($.isString(r)&&(r=r.trim())&&!$a(r))l(ba(r),n);else if($.isObject(r)&&$.isIterable(r)){let c={},u,m;for(const p of r){if(!$.isArray(p))throw TypeError("Object iterator must return a key-value pair");c[m=p[0]]=(u=c[m])?$.isArray(u)?[...u,p[1]]:[u,p[1]]:p[1]}l(c,n)}else r!=null&&i(n,r,o);return this}get(r,n){if(r=tt(r),r){const o=$.findKey(this,r);if(o){const a=this[o];if(!n)return a;if(n===!0)return ja(a);if($.isFunction(n))return n.call(this,a,o);if($.isRegExp(n))return n.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,n){if(r=tt(r),r){const o=$.findKey(this,r);return!!(o&&this[o]!==void 0&&(!n||Vt(this,this[o],o,n)))}return!1}delete(r,n){const o=this;let a=!1;function i(l){if(l=tt(l),l){const c=$.findKey(o,l);c&&(!n||Vt(o,o[c],c,n))&&(delete o[c],a=!0)}}return $.isArray(r)?r.forEach(i):i(r),a}clear(r){const n=Object.keys(this);let o=n.length,a=!1;for(;o--;){const i=n[o];(!r||Vt(this,this[i],i,r,!0))&&(delete this[i],a=!0)}return a}normalize(r){const n=this,o={};return $.forEach(this,(a,i)=>{const l=$.findKey(o,i);if(l){n[l]=Dt(a),delete n[i];return}const c=r?va(i):String(i).trim();c!==i&&delete n[i],n[c]=Dt(a),o[c]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const n=Object.create(null);return $.forEach(this,(o,a)=>{o!=null&&o!==!1&&(n[a]=r&&$.isArray(o)?o.join(", "):o)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,n])=>r+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...n){const o=new this(r);return n.forEach(a=>o.set(a)),o}static accessor(r){const o=(this[sn]=this[sn]={accessors:{}}).accessors,a=this.prototype;function i(l){const c=tt(l);o[c]||(wa(a,l),o[c]=!0)}return $.isArray(r)?r.forEach(i):i(r),this}};ee.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);$.reduceDescriptors(ee.prototype,({value:e},r)=>{let n=r[0].toUpperCase()+r.slice(1);return{get:()=>e,set(o){this[n]=o}}});$.freezeMethods(ee);function Wt(e,r){const n=this||dt,o=r||n,a=ee.from(o.headers);let i=o.data;return $.forEach(e,function(c){i=c.call(n,i,a.normalize(),r?r.status:void 0)}),a.normalize(),i}function Ro(e){return!!(e&&e.__CANCEL__)}function et(e,r,n){B.call(this,e??"canceled",B.ERR_CANCELED,r,n),this.name="CanceledError"}$.inherits(et,B,{__CANCEL__:!0});function No(e,r,n){const o=n.config.validateStatus;!n.status||!o||o(n.status)?e(n):r(new B("Request failed with status code "+n.status,[B.ERR_BAD_REQUEST,B.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Ca(e){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""}function Sa(e,r){e=e||10;const n=new Array(e),o=new Array(e);let a=0,i=0,l;return r=r!==void 0?r:1e3,function(u){const m=Date.now(),p=o[i];l||(l=m),n[a]=u,o[a]=m;let j=i,v=0;for(;j!==a;)v+=n[j++],j=j%e;if(a=(a+1)%e,a===i&&(i=(i+1)%e),m-l<r)return;const g=p&&m-p;return g?Math.round(v*1e3/g):void 0}}function ka(e,r){let n=0,o=1e3/r,a,i;const l=(m,p=Date.now())=>{n=p,a=null,i&&(clearTimeout(i),i=null),e(...m)};return[(...m)=>{const p=Date.now(),j=p-n;j>=o?l(m,p):(a=m,i||(i=setTimeout(()=>{i=null,l(a)},o-j)))},()=>a&&l(a)]}const Rt=(e,r,n=3)=>{let o=0;const a=Sa(50,250);return ka(i=>{const l=i.loaded,c=i.lengthComputable?i.total:void 0,u=l-o,m=a(u),p=l<=c;o=l;const j={loaded:l,total:c,progress:c?l/c:void 0,bytes:u,rate:m||void 0,estimated:m&&c&&p?(c-l)/m:void 0,event:i,lengthComputable:c!=null,[r?"download":"upload"]:!0};e(j)},n)},an=(e,r)=>{const n=e!=null;return[o=>r[0]({lengthComputable:n,total:e,loaded:o}),r[1]]},ln=e=>(...r)=>$.asap(()=>e(...r)),Ta=Z.hasStandardBrowserEnv?((e,r)=>n=>(n=new URL(n,Z.origin),e.protocol===n.protocol&&e.host===n.host&&(r||e.port===n.port)))(new URL(Z.origin),Z.navigator&&/(msie|trident)/i.test(Z.navigator.userAgent)):()=>!0,Aa=Z.hasStandardBrowserEnv?{write(e,r,n,o,a,i,l){if(typeof document>"u")return;const c=[`${e}=${encodeURIComponent(r)}`];$.isNumber(n)&&c.push(`expires=${new Date(n).toUTCString()}`),$.isString(o)&&c.push(`path=${o}`),$.isString(a)&&c.push(`domain=${a}`),i===!0&&c.push("secure"),$.isString(l)&&c.push(`SameSite=${l}`),document.cookie=c.join("; ")},read(e){if(typeof document>"u")return null;const r=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return r?decodeURIComponent(r[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Ea(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function La(e,r){return r?e.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):e}function Io(e,r,n){let o=!Ea(r);return e&&(o||n==!1)?La(e,r):r}const cn=e=>e instanceof ee?{...e}:e;function Me(e,r){r=r||{};const n={};function o(m,p,j,v){return $.isPlainObject(m)&&$.isPlainObject(p)?$.merge.call({caseless:v},m,p):$.isPlainObject(p)?$.merge({},p):$.isArray(p)?p.slice():p}function a(m,p,j,v){if($.isUndefined(p)){if(!$.isUndefined(m))return o(void 0,m,j,v)}else return o(m,p,j,v)}function i(m,p){if(!$.isUndefined(p))return o(void 0,p)}function l(m,p){if($.isUndefined(p)){if(!$.isUndefined(m))return o(void 0,m)}else return o(void 0,p)}function c(m,p,j){if(j in r)return o(m,p);if(j in e)return o(void 0,m)}const u={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:c,headers:(m,p,j)=>a(cn(m),cn(p),j,!0)};return $.forEach(Object.keys({...e,...r}),function(p){const j=u[p]||a,v=j(e[p],r[p],p);$.isUndefined(v)&&j!==c||(n[p]=v)}),n}const Mo=e=>{const r=Me({},e);let{data:n,withXSRFToken:o,xsrfHeaderName:a,xsrfCookieName:i,headers:l,auth:c}=r;if(r.headers=l=ee.from(l),r.url=Fo(Io(r.baseURL,r.url,r.allowAbsoluteUrls),e.params,e.paramsSerializer),c&&l.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),$.isFormData(n)){if(Z.hasStandardBrowserEnv||Z.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if($.isFunction(n.getHeaders)){const u=n.getHeaders(),m=["content-type","content-length"];Object.entries(u).forEach(([p,j])=>{m.includes(p.toLowerCase())&&l.set(p,j)})}}if(Z.hasStandardBrowserEnv&&(o&&$.isFunction(o)&&(o=o(r)),o||o!==!1&&Ta(r.url))){const u=a&&i&&Aa.read(i);u&&l.set(a,u)}return r},Fa=typeof XMLHttpRequest<"u",Da=Fa&&function(e){return new Promise(function(n,o){const a=Mo(e);let i=a.data;const l=ee.from(a.headers).normalize();let{responseType:c,onUploadProgress:u,onDownloadProgress:m}=a,p,j,v,g,d;function y(){g&&g(),d&&d(),a.cancelToken&&a.cancelToken.unsubscribe(p),a.signal&&a.signal.removeEventListener("abort",p)}let h=new XMLHttpRequest;h.open(a.method.toUpperCase(),a.url,!0),h.timeout=a.timeout;function x(){if(!h)return;const f=ee.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),D={data:!c||c==="text"||c==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:f,config:e,request:h};No(function(R){n(R),y()},function(R){o(R),y()},D),h=null}"onloadend"in h?h.onloadend=x:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(x)},h.onabort=function(){h&&(o(new B("Request aborted",B.ECONNABORTED,e,h)),h=null)},h.onerror=function(w){const D=w&&w.message?w.message:"Network Error",T=new B(D,B.ERR_NETWORK,e,h);T.event=w||null,o(T),h=null},h.ontimeout=function(){let w=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const D=a.transitional||Do;a.timeoutErrorMessage&&(w=a.timeoutErrorMessage),o(new B(w,D.clarifyTimeoutError?B.ETIMEDOUT:B.ECONNABORTED,e,h)),h=null},i===void 0&&l.setContentType(null),"setRequestHeader"in h&&$.forEach(l.toJSON(),function(w,D){h.setRequestHeader(D,w)}),$.isUndefined(a.withCredentials)||(h.withCredentials=!!a.withCredentials),c&&c!=="json"&&(h.responseType=a.responseType),m&&([v,d]=Rt(m,!0),h.addEventListener("progress",v)),u&&h.upload&&([j,g]=Rt(u),h.upload.addEventListener("progress",j),h.upload.addEventListener("loadend",g)),(a.cancelToken||a.signal)&&(p=f=>{h&&(o(!f||f.type?new et(null,e,h):f),h.abort(),h=null)},a.cancelToken&&a.cancelToken.subscribe(p),a.signal&&(a.signal.aborted?p():a.signal.addEventListener("abort",p)));const b=Ca(a.url);if(b&&Z.protocols.indexOf(b)===-1){o(new B("Unsupported protocol "+b+":",B.ERR_BAD_REQUEST,e));return}h.send(i||null)})},za=(e,r)=>{const{length:n}=e=e?e.filter(Boolean):[];if(r||n){let o=new AbortController,a;const i=function(m){if(!a){a=!0,c();const p=m instanceof Error?m:this.reason;o.abort(p instanceof B?p:new et(p instanceof Error?p.message:p))}};let l=r&&setTimeout(()=>{l=null,i(new B(`timeout ${r} of ms exceeded`,B.ETIMEDOUT))},r);const c=()=>{e&&(l&&clearTimeout(l),l=null,e.forEach(m=>{m.unsubscribe?m.unsubscribe(i):m.removeEventListener("abort",i)}),e=null)};e.forEach(m=>m.addEventListener("abort",i));const{signal:u}=o;return u.unsubscribe=()=>$.asap(c),u}},Ra=function*(e,r){let n=e.byteLength;if(n<r){yield e;return}let o=0,a;for(;o<n;)a=o+r,yield e.slice(o,a),o=a},Na=async function*(e,r){for await(const n of Ia(e))yield*Ra(n,r)},Ia=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const r=e.getReader();try{for(;;){const{done:n,value:o}=await r.read();if(n)break;yield o}}finally{await r.cancel()}},dn=(e,r,n,o)=>{const a=Na(e,r);let i=0,l,c=u=>{l||(l=!0,o&&o(u))};return new ReadableStream({async pull(u){try{const{done:m,value:p}=await a.next();if(m){c(),u.close();return}let j=p.byteLength;if(n){let v=i+=j;n(v)}u.enqueue(new Uint8Array(p))}catch(m){throw c(m),m}},cancel(u){return c(u),a.return()}},{highWaterMark:2})},mn=64*1024,{isFunction:ht}=$,Ma=(({Request:e,Response:r})=>({Request:e,Response:r}))($.global),{ReadableStream:hn,TextEncoder:pn}=$.global,un=(e,...r)=>{try{return!!e(...r)}catch{return!1}},Pa=e=>{e=$.merge.call({skipUndefined:!0},Ma,e);const{fetch:r,Request:n,Response:o}=e,a=r?ht(r):typeof fetch=="function",i=ht(n),l=ht(o);if(!a)return!1;const c=a&&ht(hn),u=a&&(typeof pn=="function"?(d=>y=>d.encode(y))(new pn):async d=>new Uint8Array(await new n(d).arrayBuffer())),m=i&&c&&un(()=>{let d=!1;const y=new n(Z.origin,{body:new hn,method:"POST",get duplex(){return d=!0,"half"}}).headers.has("Content-Type");return d&&!y}),p=l&&c&&un(()=>$.isReadableStream(new o("").body)),j={stream:p&&(d=>d.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(d=>{!j[d]&&(j[d]=(y,h)=>{let x=y&&y[d];if(x)return x.call(y);throw new B(`Response type '${d}' is not supported`,B.ERR_NOT_SUPPORT,h)})});const v=async d=>{if(d==null)return 0;if($.isBlob(d))return d.size;if($.isSpecCompliantForm(d))return(await new n(Z.origin,{method:"POST",body:d}).arrayBuffer()).byteLength;if($.isArrayBufferView(d)||$.isArrayBuffer(d))return d.byteLength;if($.isURLSearchParams(d)&&(d=d+""),$.isString(d))return(await u(d)).byteLength},g=async(d,y)=>{const h=$.toFiniteNumber(d.getContentLength());return h??v(y)};return async d=>{let{url:y,method:h,data:x,signal:b,cancelToken:f,timeout:w,onDownloadProgress:D,onUploadProgress:T,responseType:R,headers:P,withCredentials:E="same-origin",fetchOptions:S}=Mo(d),z=r||fetch;R=R?(R+"").toLowerCase():"text";let O=za([b,f&&f.toAbortSignal()],w),q=null;const V=O&&O.unsubscribe&&(()=>{O.unsubscribe()});let N;try{if(T&&m&&h!=="get"&&h!=="head"&&(N=await g(P,x))!==0){let $e=new n(y,{method:"POST",body:x,duplex:"half"}),Ue;if($.isFormData(x)&&(Ue=$e.headers.get("content-type"))&&P.setContentType(Ue),$e.body){const[Ht,mt]=an(N,Rt(ln(T)));x=dn($e.body,mn,Ht,mt)}}$.isString(E)||(E=E?"include":"omit");const H=i&&"credentials"in n.prototype,Oe={...S,signal:O,method:h.toUpperCase(),headers:P.normalize().toJSON(),body:x,duplex:"half",credentials:H?E:void 0};q=i&&new n(y,Oe);let je=await(i?z(q,S):z(y,Oe));const _r=p&&(R==="stream"||R==="response");if(p&&(D||_r&&V)){const $e={};["status","statusText","headers"].forEach(Yr=>{$e[Yr]=je[Yr]});const Ue=$.toFiniteNumber(je.headers.get("content-length")),[Ht,mt]=D&&an(Ue,Rt(ln(D),!0))||[];je=new o(dn(je.body,mn,Ht,()=>{mt&&mt(),V&&V()}),$e)}R=R||"text";let ls=await j[$.findKey(j,R)||"text"](je,d);return!_r&&V&&V(),await new Promise(($e,Ue)=>{No($e,Ue,{data:ls,headers:ee.from(je.headers),status:je.status,statusText:je.statusText,config:d,request:q})})}catch(H){throw V&&V(),H&&H.name==="TypeError"&&/Load failed|fetch/i.test(H.message)?Object.assign(new B("Network Error",B.ERR_NETWORK,d,q),{cause:H.cause||H}):B.from(H,H&&H.code,d,q)}}},Ba=new Map,Po=e=>{let r=e&&e.env||{};const{fetch:n,Request:o,Response:a}=r,i=[o,a,n];let l=i.length,c=l,u,m,p=Ba;for(;c--;)u=i[c],m=p.get(u),m===void 0&&p.set(u,m=c?new Map:Pa(r)),p=m;return m};Po();const Kr={http:ra,xhr:Da,fetch:{get:Po}};$.forEach(Kr,(e,r)=>{if(e){try{Object.defineProperty(e,"name",{value:r})}catch{}Object.defineProperty(e,"adapterName",{value:r})}});const gn=e=>`- ${e}`,Oa=e=>$.isFunction(e)||e===null||e===!1;function Ua(e,r){e=$.isArray(e)?e:[e];const{length:n}=e;let o,a;const i={};for(let l=0;l<n;l++){o=e[l];let c;if(a=o,!Oa(o)&&(a=Kr[(c=String(o)).toLowerCase()],a===void 0))throw new B(`Unknown adapter '${c}'`);if(a&&($.isFunction(a)||(a=a.get(r))))break;i[c||"#"+l]=a}if(!a){const l=Object.entries(i).map(([u,m])=>`adapter ${u} `+(m===!1?"is not supported by the environment":"is not available in the build"));let c=n?l.length>1?`since :
`+l.map(gn).join(`
`):" "+gn(l[0]):"as no adapter specified";throw new B("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return a}const Bo={getAdapter:Ua,adapters:Kr};function Gt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new et(null,e)}function xn(e){return Gt(e),e.headers=ee.from(e.headers),e.data=Wt.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Bo.getAdapter(e.adapter||dt.adapter,e)(e).then(function(o){return Gt(e),o.data=Wt.call(e,e.transformResponse,o),o.headers=ee.from(o.headers),o},function(o){return Ro(o)||(Gt(e),o&&o.response&&(o.response.data=Wt.call(e,e.transformResponse,o.response),o.response.headers=ee.from(o.response.headers))),Promise.reject(o)})}const Oo="1.13.2",Ut={};["object","boolean","number","function","string","symbol"].forEach((e,r)=>{Ut[e]=function(o){return typeof o===e||"a"+(r<1?"n ":" ")+e}});const fn={};Ut.transitional=function(r,n,o){function a(i,l){return"[Axios v"+Oo+"] Transitional option '"+i+"'"+l+(o?". "+o:"")}return(i,l,c)=>{if(r===!1)throw new B(a(l," has been removed"+(n?" in "+n:"")),B.ERR_DEPRECATED);return n&&!fn[l]&&(fn[l]=!0,console.warn(a(l," has been deprecated since v"+n+" and will be removed in the near future"))),r?r(i,l,c):!0}};Ut.spelling=function(r){return(n,o)=>(console.warn(`${o} is likely a misspelling of ${r}`),!0)};function qa(e,r,n){if(typeof e!="object")throw new B("options must be an object",B.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let a=o.length;for(;a-- >0;){const i=o[a],l=r[i];if(l){const c=e[i],u=c===void 0||l(c,i,e);if(u!==!0)throw new B("option "+i+" must be "+u,B.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new B("Unknown option "+i,B.ERR_BAD_OPTION)}}const zt={assertOptions:qa,validators:Ut},ae=zt.validators;let Ne=class{constructor(r){this.defaults=r||{},this.interceptors={request:new on,response:new on}}async request(r,n){try{return await this._request(r,n)}catch(o){if(o instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const i=a.stack?a.stack.replace(/^.+\n/,""):"";try{o.stack?i&&!String(o.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+i):o.stack=i}catch{}}throw o}}_request(r,n){typeof r=="string"?(n=n||{},n.url=r):n=r||{},n=Me(this.defaults,n);const{transitional:o,paramsSerializer:a,headers:i}=n;o!==void 0&&zt.assertOptions(o,{silentJSONParsing:ae.transitional(ae.boolean),forcedJSONParsing:ae.transitional(ae.boolean),clarifyTimeoutError:ae.transitional(ae.boolean)},!1),a!=null&&($.isFunction(a)?n.paramsSerializer={serialize:a}:zt.assertOptions(a,{encode:ae.function,serialize:ae.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),zt.assertOptions(n,{baseUrl:ae.spelling("baseURL"),withXsrfToken:ae.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=i&&$.merge(i.common,i[n.method]);i&&$.forEach(["delete","get","head","post","put","patch","common"],d=>{delete i[d]}),n.headers=ee.concat(l,i);const c=[];let u=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(u=u&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const m=[];this.interceptors.response.forEach(function(y){m.push(y.fulfilled,y.rejected)});let p,j=0,v;if(!u){const d=[xn.bind(this),void 0];for(d.unshift(...c),d.push(...m),v=d.length,p=Promise.resolve(n);j<v;)p=p.then(d[j++],d[j++]);return p}v=c.length;let g=n;for(;j<v;){const d=c[j++],y=c[j++];try{g=d(g)}catch(h){y.call(this,h);break}}try{p=xn.call(this,g)}catch(d){return Promise.reject(d)}for(j=0,v=m.length;j<v;)p=p.then(m[j++],m[j++]);return p}getUri(r){r=Me(this.defaults,r);const n=Io(r.baseURL,r.url,r.allowAbsoluteUrls);return Fo(n,r.params,r.paramsSerializer)}};$.forEach(["delete","get","head","options"],function(r){Ne.prototype[r]=function(n,o){return this.request(Me(o||{},{method:r,url:n,data:(o||{}).data}))}});$.forEach(["post","put","patch"],function(r){function n(o){return function(i,l,c){return this.request(Me(c||{},{method:r,headers:o?{"Content-Type":"multipart/form-data"}:{},url:i,data:l}))}}Ne.prototype[r]=n(),Ne.prototype[r+"Form"]=n(!0)});let Ha=class Uo{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const o=this;this.promise.then(a=>{if(!o._listeners)return;let i=o._listeners.length;for(;i-- >0;)o._listeners[i](a);o._listeners=null}),this.promise.then=a=>{let i;const l=new Promise(c=>{o.subscribe(c),i=c}).then(a);return l.cancel=function(){o.unsubscribe(i)},l},r(function(i,l,c){o.reason||(o.reason=new et(i,l,c),n(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const n=this._listeners.indexOf(r);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const r=new AbortController,n=o=>{r.abort(o)};return this.subscribe(n),r.signal.unsubscribe=()=>this.unsubscribe(n),r.signal}static source(){let r;return{token:new Uo(function(a){r=a}),cancel:r}}};function Va(e){return function(n){return e.apply(null,n)}}function Wa(e){return $.isObject(e)&&e.isAxiosError===!0}const Hr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Hr).forEach(([e,r])=>{Hr[r]=e});function qo(e){const r=new Ne(e),n=bo(Ne.prototype.request,r);return $.extend(n,Ne.prototype,r,{allOwnKeys:!0}),$.extend(n,r,null,{allOwnKeys:!0}),n.create=function(a){return qo(Me(e,a))},n}const W=qo(dt);W.Axios=Ne;W.CanceledError=et;W.CancelToken=Ha;W.isCancel=Ro;W.VERSION=Oo;W.toFormData=Ot;W.AxiosError=B;W.Cancel=W.CanceledError;W.all=function(r){return Promise.all(r)};W.spread=Va;W.isAxiosError=Wa;W.mergeConfig=Me;W.AxiosHeaders=ee;W.formToJSON=e=>zo($.isHTMLForm(e)?new FormData(e):e);W.getAdapter=Bo.getAdapter;W.HttpStatusCode=Hr;W.default=W;const{Axios:wu,AxiosError:Cu,CanceledError:Su,isCancel:ku,CancelToken:Tu,VERSION:Au,all:Eu,Cancel:Lu,isAxiosError:Fu,spread:Du,toFormData:zu,AxiosHeaders:Ru,HttpStatusCode:Nu,formToJSON:Iu,getAdapter:Mu,mergeConfig:Pu}=W;class Ga{client;constructor(){const r="/api/v1";localStorage.removeItem("api_base_url"),this.client=W.create({baseURL:r,timeout:1e4,headers:{"Content-Type":"application/json"}}),this.client.interceptors.request.use(n=>{const o=this.getAuthToken();return o&&(n.headers.Authorization=`Bearer ${o}`),n},n=>Promise.reject(n)),this.client.interceptors.response.use(n=>n,n=>{var a,i,l,c,u,m;if(!n.response){const p={message:n.code==="ECONNABORTED"?"Request timeout. Please try again.":"Network error. Please check your internet connection.",code:"NETWORK_ERROR",details:{originalError:n.message}};return Promise.reject(p)}const o={message:this.getErrorMessage(n),code:n.response.status.toString(),details:n.response.data};switch(n.response.status){case 401:this.clearAuthToken(),o.message="Your session has expired. Please log in again.";break;case 403:o.message="You don't have permission to perform this action.";break;case 404:o.message="The requested resource was not found.";break;case 409:o.message=((i=(a=n.response.data)==null?void 0:a.error)==null?void 0:i.message)||"A conflict occurred. The resource may have been modified.";break;case 422:o.message=((c=(l=n.response.data)==null?void 0:l.error)==null?void 0:c.message)||"Invalid data provided.";break;case 429:o.message="Too many requests. Please wait a moment and try again.";break;case 500:o.message="Server error. Please try again later.";break;case 503:o.message="Service temporarily unavailable. Please try again later.";break}return console.error("API Error:",{status:n.response.status,message:o.message,url:(u=n.config)==null?void 0:u.url,method:(m=n.config)==null?void 0:m.method}),Promise.reject(o)})}getAuthToken(){return localStorage.getItem("auth_token")}setAuthToken(r){localStorage.setItem("auth_token",r)}clearAuthToken(){localStorage.removeItem("auth_token")}getErrorMessage(r){var n,o,a,i,l;return(a=(o=(n=r.response)==null?void 0:n.data)==null?void 0:o.error)!=null&&a.message?r.response.data.error.message:(l=(i=r.response)==null?void 0:i.data)!=null&&l.message?r.response.data.message:r.message?r.message:"An unexpected error occurred"}async retryRequest(r,n=3,o=1e3){let a;for(let i=1;i<=n;i++)try{return await r()}catch(l){if(a=l,l.code&&l.code.startsWith("4")&&l.code!=="408"&&l.code!=="429")throw l;i<n&&await new Promise(c=>setTimeout(c,o*i))}throw a}updateBaseUrl(r){let n;try{const o=new URL(r).origin,a=window.location.origin;o===a||window.location.hostname==="localhost"&&new URL(r).hostname==="localhost"?n="/api/v1":(n=r.replace(/\/$/,""),n.endsWith("/api/v1")||(n+="/api/v1"))}catch{n=r.replace(/\/$/,""),n.endsWith("/api/v1")||(n+="/api/v1")}this.client.defaults.baseURL=n,console.log("API base URL updated to:",n)}async checkConnectivity(){try{return await this.healthCheck(),!0}catch{return!1}}async get(r,n){return(await this.client.get(r,{params:n})).data.data}async post(r,n){return(await this.client.post(r,n)).data.data}async put(r,n){return(await this.client.put(r,n)).data.data}async patch(r,n){return(await this.client.patch(r,n)).data.data}async delete(r){return(await this.client.delete(r)).data.data}async login(r,n){const a=(await this.client.post("/auth/login",{username:r,password:n})).data;return this.setAuthToken(a.token),a}async logout(){try{await this.post("/auth/logout")}finally{this.clearAuthToken()}}async changePassword(r,n){await this.post("/auth/change-password",{currentPassword:r,newPassword:n}),this.clearAuthToken()}async healthCheck(){return(await W.get("/health")).data}async getBoats(){return this.get("/boats")}async getBoat(r){return this.get(`/boats/${r}`)}async createBoat(r){return this.post("/boats",r)}async updateBoat(r,n){return this.put(`/boats/${r}`,n)}async toggleBoatStatus(r,n){return this.patch(`/boats/${r}/status`,{enabled:n})}async setActiveBoat(r){return this.patch(`/boats/${r}/active`)}async getTrips(r){return this.get("/trips",r)}async getTrip(r){return this.get(`/trips/${r}`)}async createTrip(r){return this.post("/trips",r)}async updateTrip(r,n){return this.put(`/trips/${r}`,n)}async addManualData(r,n){return this.patch(`/trips/${r}/manual-data`,n)}async getLicenseProgress(){return this.get("/captain-log/progress")}async getNotes(r){return this.get("/notes",r)}async getNote(r){return this.get(`/notes/${r}`)}async createNote(r){return this.post("/notes",r)}async updateNote(r,n){return this.put(`/notes/${r}`,n)}async deleteNote(r){return this.delete(`/notes/${r}`)}async getTodoLists(r){return this.get("/todos",r?{boatId:r}:void 0)}async getTodoList(r){return this.get(`/todos/${r}`)}async createTodoList(r){return this.post("/todos",r)}async updateTodoList(r,n){return this.put(`/todos/${r}`,n)}async deleteTodoList(r){return this.delete(`/todos/${r}`)}async addTodoItem(r,n){return this.post(`/todos/${r}/items`,{content:n})}async toggleTodoItem(r){return this.patch(`/todos/items/${r}/complete`)}async getMaintenanceTemplates(r){return this.get("/maintenance/templates",r?{boatId:r}:void 0)}async getMaintenanceTemplate(r){return this.get(`/maintenance/templates/${r}`)}async createMaintenanceTemplate(r){return this.post("/maintenance/templates",r)}async updateMaintenanceTemplate(r,n){return this.put(`/maintenance/templates/${r}`,n)}async deleteMaintenanceTemplate(r){return this.delete(`/maintenance/templates/${r}`)}async getUpcomingMaintenanceEvents(r){return this.get("/maintenance/events/upcoming",r?{boatId:r}:void 0)}async getCompletedMaintenanceEvents(r){return this.get("/maintenance/events/completed",r?{boatId:r}:void 0)}async getMaintenanceEvent(r){return this.get(`/maintenance/events/${r}`)}async completeMaintenanceEvent(r,n){return this.post(`/maintenance/events/${r}/complete`,n)}async getMarkedLocations(r){return this.get("/locations",r)}async getMarkedLocation(r){return this.get(`/locations/${r}`)}async createMarkedLocation(r){return this.post("/locations",r)}async updateMarkedLocation(r,n){return this.put(`/locations/${r}`,n)}async deleteMarkedLocation(r){return this.delete(`/locations/${r}`)}async getNearbyLocations(r,n,o){return this.get("/locations/nearby",{latitude:r,longitude:n,radiusMeters:o})}async uploadPhoto(r,n,o){const a=new FormData;return a.append("photo",r),a.append("entityType",n),a.append("entityId",o),(await this.client.post("/photos",a,{headers:{"Content-Type":"multipart/form-data"}})).data.data}async getPhotos(r,n){return this.get("/photos",{entityType:r,entityId:n})}async deletePhoto(r){return this.delete(`/photos/${r}`)}async getNotifications(){return(await this.get("/notifications")).notifications}async markNotificationAsRead(r){return this.patch(`/notifications/${r}/read`)}async createBackup(){return this.post("/backups")}async getBackups(){return this.get("/backups")}async downloadBackup(r){return(await this.client.get(`/backups/${r}/download`,{responseType:"blob"})).data}}const M=new Ga,Ka=s.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  transform: translateY(${e=>e.$show?"0":"-100%"});
  transition: transform 0.3s ease-in-out;
`,Ja=s.div`
  background: ${e=>e.theme.colors.status.warning};
  color: ${e=>e.theme.colors.background};
  padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.md};
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.theme.spacing.md};
`,Qa=s.button`
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
`,Za=s.div`
  position: static;
  z-index: auto;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${e=>e.$isOnline?e.theme.colors.status.success:e.theme.colors.status.error};
  color: white;

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
`,_a=({showConnectionStatus:e=!0})=>{const[r,n]=C.useState(navigator.onLine),[o,a]=C.useState(!1),[i,l]=C.useState(!1);C.useEffect(()=>{const u=()=>{n(!0),a(!1),p()},m=()=>{n(!1),a(!0)},p=async()=>{try{!await M.checkConnectivity()&&navigator.onLine&&(n(!1),a(!0))}catch{navigator.onLine&&(n(!1),a(!0))}};window.addEventListener("online",u),window.addEventListener("offline",m),navigator.onLine?p():a(!0);const j=setInterval(()=>{r||p()},3e4);return()=>{window.removeEventListener("online",u),window.removeEventListener("offline",m),clearInterval(j)}},[r]);const c=async()=>{l(!0);try{await M.checkConnectivity()&&(n(!0),a(!1))}catch{}finally{l(!1)}};return t.jsxs(t.Fragment,{children:[t.jsx(Ka,{$show:o,children:t.jsxs(Ja,{children:[t.jsx("span",{children:"⚠ You are currently offline"}),t.jsx(Qa,{onClick:c,disabled:i,children:i?"Checking...":"Retry"})]})}),e&&t.jsx(Za,{$isOnline:r,children:r?"Online":"Offline"})]})},Ya={primary:L`
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
  `},Xa={none:L`
    padding: 0;
  `,sm:L`
    padding: ${e=>e.theme.spacing.sm};
  `,md:L`
    padding: ${e=>e.theme.spacing.md};
  `,lg:L`
    padding: ${e=>e.theme.spacing.lg};
  `},ei=s.div`
  display: flex;
  flex-direction: column;

  ${e=>Ya[e.variant]}
`,ti=s.div`
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
`,ri=s.div`
  background-color: ${e=>e.theme.colors.background};
  border: 1px solid;
  border-top: none;
  flex: 1;

  ${e=>Xa[e.padding]}
`,F=({children:e,title:r,variant:n="primary",padding:o="md",className:a})=>t.jsxs(ei,{variant:n,className:a,children:[r&&t.jsx(ti,{className:"panel-header",children:r}),t.jsx(ri,{padding:o,className:"panel-content",children:e})]}),ni={primary:L`
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
  `},oi={sm:L`
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
  `},si=s.button`
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

  ${e=>ni[e.variant]}
  ${e=>oi[e.size]}

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
`,k=({children:e,variant:r="primary",size:n="md",disabled:o=!1,onClick:a,className:i,type:l="button"})=>t.jsx(si,{variant:r,size:n,disabled:o,onClick:a,className:i,type:l,children:e}),ai={1:L`
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
  `},ii={neonCarrot:L`
    color: ${e=>e.theme.colors.primary.neonCarrot};
  `,tanoi:L`
    color: ${e=>e.theme.colors.primary.tanoi};
  `,lilac:L`
    color: ${e=>e.theme.colors.primary.lilac};
  `,anakiwa:L`
    color: ${e=>e.theme.colors.primary.anakiwa};
  `,mariner:L`
    color: ${e=>e.theme.colors.primary.mariner};
  `},li={left:L`
    text-align: left;
  `,center:L`
    text-align: center;
  `,right:L`
    text-align: right;
  `},ci={neonCarrot:"#FF9933",tanoi:"#FFCC99",lilac:"#CC99CC",anakiwa:"#99CCFF"},di=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,mi=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: ${e=>e.theme.typography.lineHeight.tight};
  margin: 0;

  ${e=>ai[e.level]}
  ${e=>ii[e.color]}
  ${e=>li[e.align]}
`,hi=s.div`
  width: 100%;
  height: 4px;
  background-color: ${e=>e.color};
  border-radius: 0;
`,I=({children:e,level:r=1,color:n="neonCarrot",align:o="left",withBar:a=!1,barColor:i="neonCarrot",className:l})=>{const c=`h${r}`,u=t.jsx(mi,{as:c,level:r,color:n,align:o,className:l,children:e});return a?t.jsxs(di,{children:[u,t.jsx(hi,{color:ci[i]})]}):u},Ho=Pe`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,pi=Pe`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`,ui=s.div`
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 9999;
  max-width: 400px;
  width: 100%;
  animation: ${e=>e.show?Ho:pi} 0.3s ease-in-out;
  
  @media (max-width: 768px) {
    top: 60px;
    right: 10px;
    left: 10px;
    max-width: none;
  }
`,gi=s.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 80vh;
  overflow-y: auto;
`,xi=s.div`
  padding: 16px;
  border-left: 4px solid ${e=>{switch(e.type){case"maintenance":return e.theme.colors.primary.neonCarrot;case"warning":return e.theme.colors.status.warning;case"error":return e.theme.colors.status.error;default:return e.theme.colors.primary.anakiwa}}};
  background: ${e=>e.isRead?e.theme.colors.surface.dark:e.theme.colors.background};
  opacity: ${e=>e.isRead?.7:1};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>e.theme.colors.surface.medium};
  }
`,fi=s.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`,yi=s.div`
  font-weight: bold;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 14px;
`,bi=s.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.light};
  white-space: nowrap;
  margin-left: 8px;
`,ji=s.div`
  color: ${e=>e.theme.colors.text.light};
  font-size: 13px;
  line-height: 1.4;
`,$i=s.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`,vi=s.div`
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
`,wi=s.button`
  position: relative;
  background: ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.inverse};
  border: none;
  border-radius: 9999px;
  padding: 0 16px;
  height: 32px;
  cursor: pointer;
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(1.2);
  }

  ${e=>e.$hasUnread&&`
    filter: brightness(1.3);
  `}
`,Ci=s.div`
  text-align: center;
  padding: 32px 16px;
  color: ${e=>e.theme.colors.text.light};
`,Si=({className:e})=>{const[r,n]=C.useState([]),[o,a]=C.useState(!1),[i,l]=C.useState(!1),c=(r||[]).filter(d=>!d.read).length;C.useEffect(()=>{u();const d=setInterval(u,3e4);return()=>clearInterval(d)},[]);const u=async()=>{try{l(!0);const d=await M.getNotifications();n(d)}catch(d){console.error("Failed to load notifications:",d)}finally{l(!1)}},m=()=>{a(!o)},p=async d=>{if(!d.read)try{await M.markNotificationAsRead(d.id),n(y=>y.map(h=>h.id===d.id?{...h,read:!0}:h))}catch(y){console.error("Failed to mark notification as read:",y)}},j=async()=>{const d=(r||[]).filter(y=>!y.read);try{await Promise.all(d.map(y=>M.markNotificationAsRead(y.id))),n(y=>y.map(h=>({...h,read:!0})))}catch(y){console.error("Failed to mark all notifications as read:",y)}},v=d=>{const y=new Date(d),x=new Date().getTime()-y.getTime(),b=Math.floor(x/6e4),f=Math.floor(b/60),w=Math.floor(f/24);return b<1?"Just now":b<60?`${b}m ago`:f<24?`${f}h ago`:w<7?`${w}d ago`:y.toLocaleDateString()},g=d=>{switch(d){case"maintenance_due":return"🔧";case"system":return"ℹ️";case"warning":return"⚠️";case"error":return"❌";default:return"📢"}};return t.jsxs("div",{className:e,children:[t.jsxs(wi,{onClick:m,$hasUnread:c>0,children:["Alerts",c>0&&t.jsx(vi,{count:c,children:c>99?"99+":c})]}),o&&t.jsx(ui,{show:o,children:t.jsx(F,{children:t.jsxs("div",{style:{padding:"16px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsx(I,{level:3,children:"System Alerts"}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[c>0&&t.jsx(k,{size:"sm",variant:"secondary",onClick:j,children:"Mark All Read"}),t.jsx(k,{size:"sm",variant:"secondary",onClick:m,children:"Close"})]})]}),i?t.jsx("div",{style:{textAlign:"center",padding:"20px"},children:"Loading notifications..."}):r.length===0?t.jsxs(Ci,{children:[t.jsx("div",{style:{fontSize:"32px",marginBottom:"8px"},children:"📭"}),t.jsx("div",{children:"No notifications"})]}):t.jsx(gi,{children:r.map(d=>t.jsxs(xi,{type:d.type,isRead:d.read,onClick:()=>p(d),children:[t.jsxs(fi,{children:[t.jsxs(yi,{children:[g(d.type)," ",d.title]}),t.jsx(bi,{children:v(d.createdAt)})]}),t.jsx(ji,{children:d.message}),d.entityType&&d.entityId&&t.jsx($i,{children:t.jsx(k,{size:"sm",variant:"primary",onClick:()=>{const y=d.entityType==="maintenance"?`/maintenance/events/${d.entityId}`:`/${d.entityType}/${d.entityId}`;window.location.href=y},children:"View Details"})})]},d.id))})]})})})]})};s.div`
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
  animation: ${Ho} 0.3s ease-in-out;
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
`;const Jr="200px",Nt="60px",yn="60px",bn="40px",Vo="30px",jn="3px",ki="44px",be="768px",Wo=Pe`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Ti=s.div`
  min-height: 100vh;
  display: grid;
  background: ${e=>e.theme.colors.background};
  grid-template-columns: ${Jr} 1fr;
  grid-template-rows: ${yn} 1fr ${bn};
  grid-template-areas:
    "sidebar header"
    "sidebar content"
    "sidebar footer";
  gap: 0;
  animation: ${Wo} 0.6s ease;

  @media (max-width: ${be}) {
    grid-template-columns: 1fr;
    grid-template-rows: ${yn} 1fr ${bn};
    grid-template-areas:
      "header"
      "content"
      "footer";
  }
`,Ai=s.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  gap: ${jn};
  padding-right: ${jn};
  overflow-y: auto;
  overflow-x: hidden;
  animation: ${Wo} 0.4s ease;

  @media (max-width: ${be}) {
    display: none;
  }
`,Ei=s.div`
  width: ${Jr};
  height: ${Nt};
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
    width: ${Nt};
    height: ${Vo};
    background: ${e=>e.theme.colors.background};
    border-radius: 0 24px 0 0;
  }
`,Li=s.div`
  width: ${Jr};
  height: ${Nt};
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
    width: ${Nt};
    height: ${Vo};
    background: ${e=>e.theme.colors.background};
    border-radius: 0 0 24px 0;
  }
`,pt=["tanoi","anakiwa","lilac","goldenTanoi","neonCarrot","paleCanary","mariner","anakiwa","lilac","tanoi","goldenTanoi"],Fi=s.button`
  width: 100%;
  height: ${ki};
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

  ${e=>e.$isActive&&L`
    filter: brightness(1.35);
    box-shadow: 0 0 12px currentColor, inset 0 0 8px rgba(255,255,255,0.15);
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
`,Di=s.div`
  width: 60%;
  height: 3px;
  background: ${e=>e.$color};
  border-radius: 0 2px 2px 0;
  flex-shrink: 0;
  opacity: 0.6;
`,zi=s.header`
  grid-area: header;
  background: ${e=>e.theme.colors.primary.tanoi};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px 0 16px;
  position: relative;

  @media (max-width: ${be}) {
    border-radius: 0;
    justify-content: center;
  }
`,Ri=s.h1`
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

  @media (max-width: ${be}) {
    font-size: ${e=>e.theme.typography.fontSize.lg};
    letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  }
`,Ni=s.span`
  color: ${e=>e.theme.colors.text.inverse};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  margin-right: auto;
  padding-left: 40px;
  opacity: 0.75;

  @media (max-width: ${be}) {
    display: none;
  }
`,Ii=s.main`
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

  @media (max-width: ${be}) {
    padding: ${e=>e.theme.spacing.md};
    &::before { display: none; }
  }
`,Mi=s.footer`
  grid-area: footer;
  background: ${e=>e.theme.colors.primary.lilac};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px 0 16px;
  position: relative;

  @media (max-width: ${be}) {
    border-radius: 0;
    justify-content: center;
  }
`,Pi=s.span`
  color: ${e=>e.theme.colors.text.inverse};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  opacity: 0.8;
`,Bi=s.div`
  display: none;

  @media (max-width: ${be}) {
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
`,Oi=s.button`
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
`,Ui=s.button`
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
`,qi=s.button`
  display: none;
  @media (max-width: ${be}) {
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
`,$n=[{label:"Dashboard",path:"/"},{label:"Vessels",path:"/boats"},{label:"Trip Log",path:"/trips"},{label:"Notes",path:"/notes"},{label:"To-Do Lists",path:"/todos"},{label:"Maintenance",path:"/maintenance"},{label:"Navigation",path:"/map"},{label:"Reports",path:"/reports"},{label:"Calendar",path:"/calendar"},{label:"Photos",path:"/photos"},{label:"Settings",path:"/settings"}];function Hi(){const e=new Date,r=e.getFullYear(),n=new Date(r,0,1).getTime(),o=(e.getTime()-n)/(365.25*864e5)*1e3;return`${r-323}.${o.toFixed(1)}`}const Vi=({children:e})=>{const r=Y(),n=hs(),[o,a]=C.useState(!1),i=m=>m==="/"?n.pathname==="/"||n.pathname==="/dashboard":n.pathname.startsWith(m),l=m=>{r(m),a(!1)},c=Hi(),u=["#664466","#3366CC","#006699","#CC99CC","#FFCC66"];return t.jsxs(Ti,{children:[t.jsxs(Ai,{children:[t.jsx(Ei,{}),$n.map((m,p)=>{const j=pt[p%pt.length],g={tanoi:"#FFCC99",goldenTanoi:"#FFCC66",neonCarrot:"#FF9933",lilac:"#CC99CC",anakiwa:"#99CCFF",mariner:"#3366CC",paleCanary:"#FFFF99",eggplant:"#664466",bahamBlue:"#006699"}[j]||"#FFCC99";return t.jsxs(Ie.Fragment,{children:[p>0&&t.jsx(Di,{$color:u[p%u.length]}),t.jsx(Fi,{$color:g,$isActive:i(m.path),onClick:()=>l(m.path),"aria-current":i(m.path)?"page":void 0,children:m.label})]},m.path)}),t.jsx(Li,{})]}),t.jsxs(zi,{children:[t.jsx(qi,{onClick:()=>a(!0),children:"Menu"}),t.jsxs(Ni,{children:["Stardate ",c]}),t.jsx(Ri,{onClick:()=>l("/"),children:"Captain's Log"}),t.jsx("div",{style:{marginLeft:"16px"},children:t.jsx(Si,{})})]}),t.jsx(Ii,{children:e}),t.jsxs(Mi,{children:[t.jsx(_a,{}),t.jsx(Pi,{style:{marginLeft:"auto"},children:"LCARS v47.3 — Library Computer Access/Retrieval System"})]}),t.jsxs(Bi,{$open:o,children:[t.jsx(Ui,{onClick:()=>a(!1),children:"Close"}),$n.map((m,p)=>{const v={tanoi:"#FFCC99",goldenTanoi:"#FFCC66",neonCarrot:"#FF9933",lilac:"#CC99CC",anakiwa:"#99CCFF",mariner:"#3366CC",paleCanary:"#FFFF99",eggplant:"#664466",bahamBlue:"#006699"}[pt[p%pt.length]]||"#FFCC99";return t.jsx(Oi,{$color:v,$isActive:i(m.path),onClick:()=>l(m.path),children:m.label},m.path)})]})]})},Wi=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: ${e=>e.theme.spacing.xl};
  text-align: center;
`,Gi=s.div`
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
`;const Ki=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.xl};
`;class Ji extends C.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,n){console.error("Error caught by boundary:",r,n),this.setState({error:r,errorInfo:n}),console.error("Production error:",{error:r.message,stack:r.stack,componentStack:n.componentStack})}handleReload=()=>{window.location.reload()};handleGoHome=()=>{window.location.href="/"};handleRetry=()=>{this.setState({hasError:!1,error:void 0,errorInfo:void 0})};render(){return this.state.hasError?this.props.fallback?this.props.fallback:t.jsx(Wi,{children:t.jsxs(F,{children:[t.jsx(I,{level:1,children:"System Error"}),t.jsx(Gi,{children:"An unexpected error has occurred in the application."}),t.jsx("p",{children:"The error has been logged and will be investigated. You can try reloading the page or returning to the dashboard."}),t.jsxs(Ki,{children:[t.jsx(k,{onClick:this.handleRetry,variant:"primary",children:"Try Again"}),t.jsx(k,{onClick:this.handleReload,variant:"secondary",children:"Reload Page"}),t.jsx(k,{onClick:this.handleGoHome,variant:"secondary",children:"Go to Dashboard"})]}),!1]})}):this.props.children}}const Qi={neonCarrot:L`
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
  `},Zi=s.div`
  position: relative;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  flex-shrink: 0;

  ${e=>Qi[e.color]}

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
`,ut=({position:e,size:r=60,color:n="neonCarrot",armWidth:o=30,className:a})=>t.jsx(Zi,{position:e,size:r,armWidth:o,color:n,className:a,"aria-hidden":"true"}),_i={neonCarrot:"#FF9933",tanoi:"#FFCC99",goldenTanoi:"#FFCC66",lilac:"#CC99CC",anakiwa:"#99CCFF",mariner:"#3366CC",paleCanary:"#FFFF99"},Yi=s.div`
  display: flex;
  flex-direction: ${e=>e.orientation==="horizontal"?"row":"column"};
  flex-shrink: 0;
  width: ${e=>typeof e.width=="number"?`${e.width}px`:e.width};
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height};
  gap: ${e=>e.isSegmented?e.theme.lcars.gap:"0"};
  border-radius: 0;
  overflow: hidden;
`,Xi=s.div`
  background-color: ${e=>e.color};
  flex: ${e=>e.flex||1};
  border-radius: 0;
`,gt=({width:e="100%",height:r="30px",colors:n=["neonCarrot"],orientation:o="horizontal",className:a})=>{const i=o==="vertical"&&e==="100%"?"30px":e,l=o==="horizontal"&&r==="30px"?"30px":r,c=n.length>1;return t.jsx(Yi,{width:i,height:l,orientation:o,isSegmented:c,className:a,"aria-hidden":"true",children:n.map((u,m)=>t.jsx(Xi,{color:_i[u],flex:1},m))})},el=s.div`
  display: flex;
  flex-direction: column;
  width: ${e=>typeof e.width=="number"?`${e.width}px`:e.width};
  gap: ${e=>e.gap};
  min-height: 100%;

  > * {
    width: 100%;
    flex-shrink: 0;
  }
`,oe=({children:e,width:r="200px",gap:n="3px",className:o})=>t.jsx(el,{width:r,gap:n,className:o,children:e}),tl={sm:L`
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
  `},rl={neonCarrot:L`
    color: ${e=>e.theme.colors.primary.neonCarrot};
  `,lilac:L`
    color: ${e=>e.theme.colors.primary.lilac};
  `,anakiwa:L`
    color: ${e=>e.theme.colors.primary.anakiwa};
  `,mariner:L`
    color: ${e=>e.theme.colors.primary.mariner};
  `,success:L`
    color: ${e=>e.theme.colors.status.success};
  `},nl={neonCarrot:"#FF9933",lilac:"#CC99CC",anakiwa:"#99CCFF",success:"#55FF55",error:"#FF5555"},ol=s.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing.xs};
  background-color: transparent;

  ${e=>tl[e.size]}
`,sl=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.normal};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  color: ${e=>e.theme.colors.primary.lilac};
  opacity: 0.8;
`,al=s.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
`,il=s.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  box-shadow: 0 0 8px ${e=>e.color};
  flex-shrink: 0;
`,ll=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  line-height: ${e=>e.theme.typography.lineHeight.tight};

  ${e=>rl[e.valueColor]}
`,cl=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.normal};
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
`,A=({label:e,value:r,unit:n,size:o="md",valueColor:a="neonCarrot",showIndicator:i=!1,indicatorColor:l="neonCarrot",className:c})=>t.jsxs(ol,{size:o,className:c,children:[t.jsx(sl,{className:"data-label",children:e}),t.jsxs(al,{children:[i&&t.jsx(il,{color:nl[l]}),t.jsx(ll,{className:"data-value",valueColor:a,children:r}),n&&t.jsx(cl,{className:"data-unit",children:n})]})]}),dl={info:L`
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
  `},ml=s.div.withConfig({shouldForwardProp:e=>!["type","blink"].includes(e)})`
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

  ${e=>dl[e.type]}

  ${e=>e.blink&&L`
    animation: lcars-blink 1s infinite;
  `}
`,hl=s.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
`,pl=s.div`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,ul=s.div`
  flex: 1;
`,gl=s.button`
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
`,xl=e=>{switch(e){case"info":return"ℹ";case"success":return"✓";case"warning":return"⚠";case"error":return"✗";default:return"ℹ"}},he=({children:e,type:r="info",blink:n=!1,dismissible:o=!1,onDismiss:a,className:i})=>t.jsxs(ml,{type:r,blink:n,className:i,children:[t.jsxs(hl,{children:[t.jsx(pl,{children:xl(r)}),t.jsx(ul,{children:e})]}),o&&a&&t.jsx(gl,{onClick:a,"aria-label":"Dismiss alert",children:"×"})]}),fl={neonCarrot:L`
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
  `},yl={sm:L`
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
  `},bl=s.div`
  ${e=>fl[e.color]}
  ${e=>yl[e.size]}
`,jl=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${e=>e.theme.colors.text.primary};
`,$l=s.div`
  background-color: ${e=>e.theme.colors.surface.light};
  border-radius: ${e=>e.theme.borderRadius.pill};
  overflow: hidden;
  position: relative;
  border: 1px solid ${e=>e.theme.colors.surface.light};
`,vl=s.div`
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
`,wl=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  color: ${e=>e.theme.colors.text.secondary};
`,vn=s.span`
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,It=({title:e,current:r,target:n,unit:o="",color:a="neonCarrot",size:i="md",showPercentage:l=!0,className:c})=>{const u=n>0?r/n*100:0,m=Math.round(u),p=r>=n;return t.jsxs(bl,{color:a,size:i,className:c,children:[t.jsx(jl,{className:"chart-title",children:e}),t.jsx($l,{children:t.jsx(vl,{className:"progress-fill",progress:u})}),t.jsxs(wl,{className:"progress-stats",children:[t.jsxs("div",{children:[t.jsx(vn,{className:"progress-text",children:r}),o&&` ${o}`," / ",n,o&&` ${o}`]}),l&&t.jsxs("div",{className:"progress-text",children:[t.jsxs(vn,{children:[m,"%"]}),p&&" ✓"]})]})]})},Cl={neonCarrot:L`
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
  `},Sl={sm:L`
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
  `},kl=s.div`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid;
  border-radius: ${e=>e.theme.borderRadius.lg};
  text-align: center;
  position: relative;

  ${e=>Cl[e.color]}
  ${e=>Sl[e.size]}

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
`,Tl=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: ${e=>e.theme.spacing.sm};
`,Kt=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  line-height: ${e=>e.theme.typography.lineHeight.tight};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,Jt=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Qt=({title:e,estimatedDate:r,daysRemaining:n,isComplete:o=!1,color:a="neonCarrot",size:i="md",className:l})=>{const c=m=>{try{return new Date(m).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return"Unknown"}},u=m=>{if(m<=0)return"Goal Achieved";if(m===1)return"1 Day";if(m<30)return`${m} Days`;if(m<365){const j=Math.round(m/30);return j===1?"1 Month":`${j} Months`}const p=Math.round(m/365);return p===1?"1 Year":`${p} Years`};return t.jsxs(kl,{color:a,size:i,isComplete:o,className:`estimate-border ${l||""}`,children:[t.jsx(Tl,{className:"estimate-title",children:e}),o?t.jsxs(t.Fragment,{children:[t.jsx(Kt,{className:"estimate-value",children:"ACHIEVED"}),t.jsx(Jt,{className:"estimate-subtitle",children:"Goal Complete"})]}):t.jsxs(t.Fragment,{children:[r&&t.jsxs(t.Fragment,{children:[t.jsx(Kt,{className:"estimate-value",children:c(r)}),t.jsx(Jt,{className:"estimate-subtitle",children:"Estimated Completion"})]}),n!==void 0&&t.jsxs(t.Fragment,{children:[t.jsx(Kt,{className:"estimate-value",children:u(n)}),t.jsx(Jt,{className:"estimate-subtitle",children:"Remaining"})]})]})]})},re={all:["boats"],lists:()=>[...re.all,"list"],list:e=>[...re.lists(),{filters:e}],details:()=>[...re.all,"detail"],detail:e=>[...re.details(),e]},te=()=>_({queryKey:re.lists(),queryFn:()=>M.getBoats()}),Al=e=>_({queryKey:re.detail(e),queryFn:()=>M.getBoat(e),enabled:!!e}),El=()=>{const e=G();return Q({mutationFn:r=>M.createBoat(r),onSuccess:()=>{e.invalidateQueries({queryKey:re.lists()})}})},Ll=()=>{const e=G();return Q({mutationFn:({id:r,data:n})=>M.updateBoat(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:re.detail(n)}),e.invalidateQueries({queryKey:re.lists()})}})},Go=()=>{const e=G();return Q({mutationFn:({id:r,enabled:n})=>M.toggleBoatStatus(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:re.detail(n)}),e.invalidateQueries({queryKey:re.lists()})}})},Ko=()=>{const e=G();return Q({mutationFn:r=>M.setActiveBoat(r),onSuccess:()=>{e.invalidateQueries({queryKey:re.lists()})}})},me={all:["trips"],lists:()=>[...me.all,"list"],list:e=>[...me.lists(),{filters:e}],details:()=>[...me.all,"detail"],detail:e=>[...me.details(),e]},Te=e=>_({queryKey:me.list(e||{}),queryFn:()=>M.getTrips(e)}),Jo=e=>_({queryKey:me.detail(e),queryFn:()=>M.getTrip(e),enabled:!!e}),Fl=()=>{const e=G();return Q({mutationFn:({id:r,data:n})=>M.updateTrip(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:me.detail(n)}),e.invalidateQueries({queryKey:me.lists()})}})},Dl=()=>{const e=G();return Q({mutationFn:({tripId:r,data:n})=>M.addManualData(r,n),onSuccess:(r,{tripId:n})=>{e.invalidateQueries({queryKey:me.detail(n)}),e.invalidateQueries({queryKey:me.lists()})}})},Qo={all:["license"],progress:()=>[...Qo.all,"progress"]},Zo=()=>_({queryKey:Qo.progress(),queryFn:()=>M.getLicenseProgress(),staleTime:5*60*1e3}),zl=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.lg};
  min-height: calc(100vh - 200px);
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    flex-direction: column;
  }
`,Rl=s.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,Nl=s.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Il=s.img`
  height: 40px;
  width: auto;
  filter: drop-shadow(0 0 5px ${e=>e.theme.colors.primary.neonCarrot}40);
`,Ml=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Pl=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.lg};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Bl=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>e.theme.spacing.sm};
  border-bottom: 1px solid ${e=>e.theme.colors.surface.light};
  
  &:last-child {
    border-bottom: none;
  }
`,Ol=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,Ul=s.span`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,ql=s.span`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,Hl=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  flex-wrap: wrap;
`,Vl=s.div`
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
`,Wl=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${e=>e.theme.spacing.xs};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
`,Zt=()=>{const{data:e,isLoading:r,error:n}=te(),{data:o,isLoading:a,error:i}=Te(),{data:l,isLoading:c,error:u}=Zo(),m=(e==null?void 0:e.filter(y=>y.enabled))||[],p=(o==null?void 0:o.slice(0,5))||[],j=(o==null?void 0:o.length)||0,v=y=>new Date(y).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),g=y=>{const h=Math.floor(y/3600),x=Math.floor(y%3600/60);return`${h}h ${x}m`},d=(y,h)=>Math.min(y/h*100,100);return t.jsxs(zl,{children:[t.jsxs(oe,{width:"250px",children:[t.jsx(ut,{position:"top-left",size:60}),t.jsx(gt,{height:20,colors:["neonCarrot"]}),t.jsxs(F,{title:"System Status",variant:"primary",children:[t.jsx(A,{label:"Interface Status",value:"ONLINE",valueColor:"success",size:"sm"}),t.jsx(A,{label:"Active Boats",value:r?"...":m.length.toString(),valueColor:"neonCarrot",size:"sm"}),t.jsx(A,{label:"Total Trips",value:a?"...":j.toString(),valueColor:"anakiwa",size:"sm"})]}),t.jsx(gt,{height:20,colors:["lilac"]}),t.jsxs(Hl,{children:[t.jsx(k,{size:"sm",variant:"primary",children:"New Trip"}),t.jsx(k,{size:"sm",variant:"secondary",children:"Add Boat"})]}),t.jsx(ut,{position:"bottom-left",size:60,color:"neonCarrot"})]}),t.jsxs(Rl,{children:[t.jsxs(Nl,{children:[t.jsx(ut,{position:"top-right",size:120,color:"lilac"}),t.jsx(gt,{width:"100%"}),t.jsx(Il,{src:"/assets/captains-log-logo.png",alt:"Captain's Log"}),t.jsx(I,{level:1,children:"Captain's Log - Command Center"})]}),(n||i||u)&&t.jsx(he,{type:"error",children:"Unable to load dashboard data. Check your connection and try again."}),t.jsxs(Ml,{children:[t.jsx(F,{title:"Fleet Status",variant:"accent",children:r?t.jsx(A,{label:"Loading",value:"...",valueColor:"anakiwa"}):t.jsxs(t.Fragment,{children:[t.jsx(A,{label:"Total Vessels",value:(e==null?void 0:e.length)||0,valueColor:"anakiwa"}),t.jsx(A,{label:"Active Vessels",value:m.length,valueColor:"success"}),t.jsx(A,{label:"Inactive Vessels",value:((e==null?void 0:e.length)||0)-m.length,valueColor:"neonCarrot"})]})}),t.jsx(F,{title:"License Progress",variant:"secondary",children:c?t.jsx(A,{label:"Loading",value:"...",valueColor:"lilac"}):l?t.jsxs(t.Fragment,{children:[t.jsx(A,{label:"Sea Time Days",value:l.totalSeaTimeDays,valueColor:"lilac"}),t.jsx(A,{label:"Days (3 Years)",value:l.seaTimeDaysLast3Years,valueColor:"lilac"}),t.jsxs("div",{children:[t.jsx(Vl,{progress:d(l.totalSeaTimeDays,360)}),t.jsxs(Wl,{children:[t.jsx("span",{children:"360 Day Goal"}),t.jsxs("span",{children:[Math.round(d(l.totalSeaTimeDays,360)),"%"]})]})]})]}):t.jsx(A,{label:"Status",value:"Disabled",valueColor:"neonCarrot"})})]}),t.jsxs(Pl,{children:[t.jsx(F,{title:"Recent Trips",variant:"primary",children:a?t.jsx(A,{label:"Loading",value:"...",valueColor:"neonCarrot"}):p.length>0?p.map(y=>{var h,x;return t.jsxs(Bl,{children:[t.jsxs(Ol,{children:[t.jsx(Ul,{children:v(y.startTime)}),t.jsxs(ql,{children:[g(((h=y.statistics)==null?void 0:h.durationSeconds)||0)," • ",y.waterType]})]}),t.jsx(A,{label:"Distance",value:Math.round((((x=y.statistics)==null?void 0:x.distanceMeters)||0)/1852),unit:"nm",size:"sm",valueColor:"neonCarrot"})]},y.id)}):t.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#999"},children:"No trips recorded yet"})}),t.jsx(F,{title:"Upcoming Tasks",variant:"accent",children:t.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#999"},children:"No maintenance tasks due"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[t.jsx(ut,{position:"bottom-right",size:80}),t.jsx(gt,{width:"100%",colors:["anakiwa"]})]})]})]})};let _e=null;const Gl={boats:["boats"],trips:["trips"],notes:["notes"],todos:["todos"],maintenance_templates:["maintenanceTemplates"],maintenance_events:["maintenanceEvents"],locations:["locations"],photos:["photos"],sensors:["sensors"]};function wn(e){_o();const r=localStorage.getItem("auth_token");if(!r)return;const o=`${localStorage.getItem("api_base_url")||"/api/v1"}/sync/events?token=${encodeURIComponent(r)}`;_e=new EventSource(o),_e.onmessage=a=>{try{const i=JSON.parse(a.data);if(i.type==="connected")return;const l=Gl[i.type];l&&e.invalidateQueries({queryKey:l})}catch{}},_e.onerror=()=>{}}function _o(){_e&&(_e.close(),_e=null)}const Yo=C.createContext(null),Kl=({children:e})=>{const r=G(),[n,o]=C.useState({isAuthenticated:!1,isLoading:!0,needsSetup:!1,user:null}),a=C.useCallback(async()=>{try{if(!localStorage.getItem("auth_token")){o({isAuthenticated:!1,isLoading:!1,needsSetup:!0,user:null});return}await M.getBoats(),o({isAuthenticated:!0,isLoading:!1,needsSetup:!1,user:{id:"current",username:"user",createdAt:"",updatedAt:""}}),wn(r)}catch{localStorage.removeItem("auth_token"),o({isAuthenticated:!1,isLoading:!1,needsSetup:!0,user:null})}},[]);C.useEffect(()=>{a()},[a]);const i=C.useCallback(async(u,m)=>{try{const p=await M.login(u,m);return o({isAuthenticated:!0,isLoading:!1,needsSetup:!1,user:p.user}),wn(r),{success:!0}}catch(p){return o(j=>({...j,isAuthenticated:!1})),{success:!1,error:p.message||"Login failed"}}},[]),l=C.useCallback(async()=>{try{await M.logout()}catch(u){console.warn("Logout request failed:",u)}finally{_o(),o({isAuthenticated:!1,isLoading:!1,needsSetup:!1,user:null})}},[]),c={...n,login:i,logout:l,checkAuthStatus:a};return Ie.createElement(Yo.Provider,{value:c},e)},Qr=()=>{const e=C.useContext(Yo);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},Jl=s.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.colors.background};
  padding: ${e=>e.theme.spacing.lg};
`,Ql=s.div`
  max-width: 600px;
  width: 100%;
`,Zl=s.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${e=>e.theme.spacing.xl};
`,_l=s.img`
  max-width: 200px;
  height: auto;
  filter: drop-shadow(0 0 10px ${e=>e.theme.colors.primary.neonCarrot}40);
`,Yl=s.form`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,_t=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Yt=s.label`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Xt=s.input`
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
`,Xl=s.div`
  display: flex;
  justify-content: center;
  margin-top: ${e=>e.theme.spacing.lg};
`,er=()=>{const e=Y(),{login:r,isAuthenticated:n}=Qr();C.useEffect(()=>{n&&e("/")},[n,e]);const[o,a]=C.useState({username:"",password:"",serverUrl:""}),[i,l]=C.useState(!1),[c,u]=C.useState(null),[m,p]=C.useState(!1),j=g=>{const{name:d,value:y}=g.target;a(h=>({...h,[d]:y}))},v=async g=>{g.preventDefault(),l(!0),u(null);try{o.serverUrl.trim()?(M.updateBaseUrl(o.serverUrl),console.log("Server URL configured:",o.serverUrl)):console.log("Using default server URL (proxy)"),console.log("Attempting login with:",{username:o.username});const d=await r(o.username,o.password);console.log("Login result:",d),d.success?(u({type:"success",text:"LCARS Interface Initialized Successfully! Redirecting..."}),console.log("Login successful, setting timeout for redirect"),setTimeout(()=>{console.log("Redirecting to dashboard"),e("/")},1500)):(console.log("Login failed:",d.error),u({type:"error",text:d.error||"Authentication failed. Please check your credentials."}))}catch(d){console.error("Login error:",d),u({type:"error",text:d.message||"Setup failed. Please check your connection and try again."})}finally{l(!1)}};return t.jsx(Jl,{children:t.jsxs(Ql,{children:[t.jsx(Zl,{children:t.jsx(_l,{src:"/assets/captains-log-logo.png",alt:"Captain's Log"})}),t.jsxs(F,{title:"System Initialization",padding:"lg",children:[t.jsx(I,{level:2,align:"center",children:"LCARS Setup Wizard"}),t.jsxs(Yl,{onSubmit:v,children:[t.jsxs(_t,{children:[t.jsx(Yt,{htmlFor:"username",children:"Username"}),t.jsx(Xt,{type:"text",id:"username",name:"username",value:o.username,onChange:j,placeholder:"Enter your username",required:!0,disabled:i})]}),t.jsxs(_t,{children:[t.jsx(Yt,{htmlFor:"password",children:"Password"}),t.jsx(Xt,{type:"password",id:"password",name:"password",value:o.password,onChange:j,placeholder:"Enter your password",required:!0,disabled:i})]}),t.jsx("div",{style:{textAlign:"right"},children:t.jsx("button",{type:"button",onClick:()=>p(!m),style:{background:"none",border:"none",color:"#99CCFF",cursor:"pointer",fontSize:"12px",textTransform:"uppercase",letterSpacing:"1px"},children:m?"Hide Advanced":"Advanced Options"})}),m&&t.jsxs(_t,{children:[t.jsx(Yt,{htmlFor:"serverUrl",children:"Server URL (Optional)"}),t.jsx(Xt,{type:"url",id:"serverUrl",name:"serverUrl",value:o.serverUrl,onChange:j,placeholder:"Leave empty for default",disabled:i})]}),c&&t.jsx(he,{type:c.type==="success"?"success":c.type==="error"?"error":"info",children:c.text}),t.jsx(Xl,{children:t.jsx(k,{type:"submit",disabled:i,size:"lg",children:i?"Initializing...":"Initialize LCARS"})})]})]})]})})},ec=Pe`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,tc=Pe`
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
  animation: ${ec} 1s linear infinite;
`;s.div`
  margin-left: ${e=>e.theme.spacing.md};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>{switch(e.size){case"sm":return e.theme.typography.fontSize.sm;case"lg":return e.theme.typography.fontSize.lg;default:return e.theme.typography.fontSize.md}}};
  animation: ${tc} 2s ease-in-out infinite;
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
    animation: ${Pe`
      0% { left: -100%; }
      100% { left: 100%; }
    `} 2s ease-in-out infinite;
  }
`;const Xo=s.div`
  background: linear-gradient(
    90deg,
    ${e=>e.theme.colors.surface.dark} 25%,
    ${e=>e.theme.colors.surface.medium} 50%,
    ${e=>e.theme.colors.surface.dark} 75%
  );
  background-size: 200% 100%;
  animation: ${Pe`
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  `} 2s ease-in-out infinite;
  border-radius: 4px;
`,Cn=s(Xo)`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"1em"};
  margin: 4px 0;
`,rc=s(Xo)`
  width: 100%;
  height: 120px;
  margin: 8px 0;
`,xt=({variant:e="text",width:r,height:n,lines:o=1})=>e==="card"?t.jsx(rc,{}):o===1?t.jsx(Cn,{width:r,height:n}):t.jsx("div",{children:Array.from({length:o},(a,i)=>t.jsx(Cn,{width:i===o-1?"60%":r,height:n},i))}),nc=s.div`
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
`,oc=s.div`
  font-size: 1.2em;
  margin-right: ${e=>e.theme.spacing.sm};
  color: ${e=>e.theme.colors.status.error};
`,sc=s.div`
  font-weight: bold;
  font-size: ${e=>e.theme.typography.fontSize.lg};
  color: ${e=>e.theme.colors.status.error};
  margin-bottom: ${e=>e.theme.spacing.sm};
`,ac=s.div`
  color: ${e=>e.theme.colors.text.light};
  margin-bottom: ${e=>e.theme.spacing.md};
  line-height: 1.5;
`,ic=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
  justify-content: center;
  margin-top: ${e=>e.theme.spacing.md};
`,lc=s.code`
  background: ${e=>e.theme.colors.surface.dark};
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
  font-size: 0.9em;
  color: ${e=>e.theme.colors.status.error};
`,cc=({title:e="Error",message:r,code:n,variant:o="card",showIcon:a=!0,onRetry:i,onDismiss:l,retryText:c="Try Again",dismissText:u="Dismiss"})=>{const m=t.jsxs(nc,{variant:o,children:[a&&o==="inline"&&t.jsx(oc,{children:"⚠"}),o!=="inline"&&t.jsxs(sc,{children:[a&&"⚠ ",e]}),t.jsxs(ac,{children:[r,n&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("small",{children:["Error code: ",t.jsx(lc,{children:n})]})]})]}),(i||l)&&t.jsxs(ic,{children:[i&&t.jsx(k,{onClick:i,variant:"primary",size:"sm",children:c}),l&&t.jsx(k,{onClick:l,variant:"secondary",size:"sm",children:u})]})]});return o==="card"?t.jsx(F,{children:m}):m};function dc(e){const r=G(),[n,o]=C.useState(!1);return{optimisticUpdate:C.useCallback(async(i,l,c,u)=>{o(!0);const m=r.getQueryData(e);r.setQueryData(e,p=>p===void 0?p:i(p));try{const p=await l();return await r.invalidateQueries({queryKey:e}),c==null||c(p),p}catch(p){throw m!==void 0&&r.setQueryData(e,m),u==null||u(p),p}finally{o(!1)}},[r,e]),isOptimistic:n}}function mc(e){const{optimisticUpdate:r,isOptimistic:n}=dc(e),o=C.useCallback((l,c)=>r((u=[])=>[...u,l],c),[r]),a=C.useCallback((l,c)=>r((u=[])=>u.filter(m=>m.id!==l),c),[r]),i=C.useCallback((l,c,u)=>r((m=[])=>m.map(p=>p.id===l?c(p):p),u),[r]);return{optimisticAdd:o,optimisticRemove:a,optimisticUpdate:i,isOptimistic:n}}const tr=s.div`
  padding: 20px;
`,Sn=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  margin-top: 20px;
`,hc=s.div`
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
`,pc=s.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1.4rem;
  margin: 0 0 15px 0;
  text-transform: uppercase;
`,uc=s.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`,kn=s.span`
  padding: 4px 12px;
  border-radius: 0;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  background: ${e=>{switch(e.$type){case"active":return e.theme.colors.primary.neonCarrot;case"enabled":return e.theme.colors.primary.anakiwa;case"disabled":return e.theme.colors.interactive.disabled;default:return e.theme.colors.interactive.disabled}}};
  color: ${e=>e.theme.colors.background};
`,gc=s.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,Tn=s(k)`
  flex: 1;
  min-width: 120px;
`,An=s.div`
  display: flex;
  gap: 15px;
  align-items: center;
`,xc=s.div`
  text-align: center;
  padding: 60px 20px;
  color: ${e=>e.theme.colors.text.secondary};
`,fc=s.div`
  font-size: 4rem;
  margin-bottom: 20px;
  color: ${e=>e.theme.colors.primary.anakiwa};
`,En=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Ln=s.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,yc=()=>{const e=Y(),{data:r,isLoading:n,error:o}=te(),a=Go(),i=Ko(),[l,c]=C.useState(null),{optimisticUpdate:u}=mc(["boats"]),m=h=>{e(`/boats/${h.id}`)},p=async h=>{c(`toggle-${h.id}`);try{await u(h.id,x=>({...x,enabled:!x.enabled}),()=>a.mutateAsync({id:h.id,enabled:!h.enabled}))}catch(x){console.error("Failed to toggle boat status:",x)}finally{c(null)}},j=async h=>{if(!h.isActive){c(`active-${h.id}`);try{await i.mutateAsync(h.id)}catch(x){console.error("Failed to set active boat:",x)}finally{c(null)}}},v=()=>{e("/boats/new")};if(n)return t.jsxs(tr,{children:[t.jsxs(En,{children:[t.jsxs(Ln,{children:[t.jsx(I,{children:"BOAT MANAGEMENT"}),t.jsx(xt,{width:"200px",height:"20px"})]}),t.jsxs(An,{children:[t.jsx(xt,{width:"150px",height:"40px"}),t.jsx(xt,{width:"180px",height:"40px"})]})]}),t.jsx(Sn,{children:Array.from({length:3},(h,x)=>t.jsx(F,{children:t.jsx(xt,{variant:"card"})},x))})]});if(o)return t.jsxs(tr,{children:[t.jsx(I,{children:"BOAT MANAGEMENT"}),t.jsx(cc,{title:"Failed to Load Boats",message:o.message,onRetry:()=>window.location.reload()})]});const g=r==null?void 0:r.find(h=>h.isActive),d=(r==null?void 0:r.filter(h=>h.enabled))||[],y=(r==null?void 0:r.filter(h=>!h.enabled))||[];return t.jsxs(tr,{children:[t.jsxs(En,{children:[t.jsxs(Ln,{children:[t.jsx(I,{children:"BOAT MANAGEMENT"}),t.jsx(A,{label:"VESSELS REGISTERED",value:(r==null?void 0:r.length)||0,valueColor:"anakiwa",size:"sm"})]}),t.jsxs(An,{children:[t.jsx(A,{label:"ACTIVE VESSEL",value:(g==null?void 0:g.name)||"NONE SELECTED",valueColor:g?"neonCarrot":"anakiwa"}),t.jsx(k,{variant:"primary",onClick:v,children:"ADD NEW VESSEL"})]})]}),!r||r.length===0?t.jsx(F,{children:t.jsxs(xc,{children:[t.jsx(fc,{children:"🚤"}),t.jsx("h3",{children:"NO VESSELS REGISTERED"}),t.jsx("p",{children:"Add your first vessel to begin tracking trips and maintenance."}),t.jsx(k,{variant:"primary",onClick:v,children:"ADD FIRST VESSEL"})]})}):t.jsx(Sn,{children:r.map(h=>t.jsxs(hc,{$isActive:h.isActive,$isEnabled:h.enabled,onClick:()=>m(h),children:[t.jsx(pc,{children:h.name}),t.jsxs(uc,{children:[h.isActive&&t.jsx(kn,{$type:"active",children:"ACTIVE"}),t.jsx(kn,{$type:h.enabled?"enabled":"disabled",children:h.enabled?"ENABLED":"DISABLED"})]}),t.jsx(A,{label:"VESSEL ID",value:h.id.slice(0,8).toUpperCase(),valueColor:"anakiwa",size:"sm"}),t.jsx(A,{label:"REGISTERED",value:new Date(h.createdAt).toLocaleDateString(),valueColor:"anakiwa",size:"sm"}),t.jsxs(gc,{children:[!h.isActive&&h.enabled&&t.jsx(Tn,{variant:"secondary",onClick:()=>j(h),disabled:l===`active-${h.id}`,children:l===`active-${h.id}`?"SETTING...":"SET ACTIVE"}),t.jsx(Tn,{variant:h.enabled?"danger":"accent",onClick:()=>p(h),disabled:l===`toggle-${h.id}`,children:l===`toggle-${h.id}`?"UPDATING...":h.enabled?"DISABLE":"ENABLE"})]})]},h.id))}),r&&r.length>0&&t.jsxs("div",{style:{marginTop:"30px",display:"flex",gap:"20px"},children:[t.jsx(A,{label:"ENABLED VESSELS",value:d.length.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"DISABLED VESSELS",value:y.length.toString(),valueColor:"lilac"})]})]})},rr=s.div`
  padding: 20px;
`,bc=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Fn=s(F)`
  padding: 25px;
`,nr=s.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1.2rem;
  margin: 0 0 20px 0;
  text-transform: uppercase;
  border-bottom: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding-bottom: 10px;
`,jc=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 25px;
`,Dn=s.div`
  padding: 15px;
  text-align: center;
  border: 2px solid ${e=>{switch(e.$type){case"active":return e.theme.colors.primary.neonCarrot;case"enabled":return e.theme.colors.primary.anakiwa;case"disabled":return e.theme.colors.interactive.disabled;default:return e.theme.colors.interactive.disabled}}};
  background: ${e=>{switch(e.$type){case"active":return`${e.theme.colors.primary.neonCarrot}20`;case"enabled":return`${e.theme.colors.primary.anakiwa}15`;case"disabled":return`${e.theme.colors.interactive.disabled}15`;default:return`${e.theme.colors.interactive.disabled}15`}}};
`,zn=s.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 5px;
  text-transform: uppercase;
`,Rn=s.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${e=>e.theme.colors.text.primary};
  text-transform: uppercase;
`,$c=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 20px;
`,Nn=s(k)`
  margin-right: 15px;
`,vc=s.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,wc=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Cc=s.label`
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
`,Sc=s.input`
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
`,kc=s.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin-top: 20px;
`,Tc=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`,Ac=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Ec=s.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Lc=s(F)`
  padding: 25px;
  margin-top: 30px;
`,Fc=()=>{const{id:e}=ye(),r=Y(),{data:n,isLoading:o,error:a}=Al(e),{data:i}=Te({boatId:e}),l=Ll(),c=Go(),u=Ko(),[m,p]=C.useState(!1),[j,v]=C.useState({name:""}),[g,d]=C.useState(null);Ie.useEffect(()=>{n&&v({name:n.name})},[n]);const y=()=>{r("/boats")},h=()=>{p(!0)},x=()=>{p(!1),n&&v({name:n.name})},b=async P=>{if(P.preventDefault(),!(!n||!j.name.trim())){d("save");try{await l.mutateAsync({id:n.id,data:{name:j.name.trim()}}),p(!1)}catch(E){console.error("Failed to update boat:",E)}finally{d(null)}}},f=async()=>{if(n){d("toggle");try{await c.mutateAsync({id:n.id,enabled:!n.enabled})}catch(P){console.error("Failed to toggle boat status:",P)}finally{d(null)}}},w=async()=>{if(!(!n||n.isActive)){d("active");try{await u.mutateAsync(n.id)}catch(P){console.error("Failed to set active boat:",P)}finally{d(null)}}};if(o)return t.jsxs(rr,{children:[t.jsx(I,{children:"VESSEL DETAILS"}),t.jsx(A,{label:"STATUS",value:"LOADING VESSEL DATA...",valueColor:"anakiwa"})]});if(a||!n)return t.jsxs(rr,{children:[t.jsx(I,{children:"VESSEL DETAILS"}),t.jsx(he,{type:"error",children:(a==null?void 0:a.message)||"Vessel not found"}),t.jsx(Nn,{variant:"secondary",onClick:y,children:"BACK TO VESSELS"})]});const D=(i==null?void 0:i.length)||0,T=(i==null?void 0:i.reduce((P,E)=>{var S;return P+(((S=E.statistics)==null?void 0:S.durationSeconds)||0)},0))||0,R=(i==null?void 0:i.reduce((P,E)=>{var S;return P+(((S=E.statistics)==null?void 0:S.distanceMeters)||0)},0))||0;return t.jsx(t.Fragment,{children:t.jsxs(rr,{children:[t.jsxs(Ac,{children:[t.jsxs(Ec,{children:[t.jsx(I,{children:"VESSEL DETAILS"}),t.jsx(A,{label:"VESSEL NAME",value:n.name,valueColor:"neonCarrot",size:"sm"})]}),t.jsxs("div",{children:[t.jsx(Nn,{variant:"secondary",onClick:y,children:"BACK TO VESSELS"}),!m&&t.jsx(k,{variant:"primary",onClick:h,children:"EDIT VESSEL"})]})]}),t.jsxs(bc,{children:[t.jsxs(Fn,{children:[t.jsx(nr,{children:"Vessel Information"}),m?t.jsxs(vc,{onSubmit:b,children:[t.jsxs(wc,{children:[t.jsx(Cc,{children:"Vessel Name"}),t.jsx(Sc,{type:"text",value:j.name,onChange:P=>v({...j,name:P.target.value}),placeholder:"Enter vessel name",required:!0,disabled:g==="save"})]}),t.jsxs(kc,{children:[t.jsx(k,{type:"button",variant:"secondary",onClick:x,disabled:g==="save",children:"CANCEL"}),t.jsx(k,{type:"submit",variant:"primary",disabled:g==="save"||!j.name.trim(),children:g==="save"?"SAVING...":"SAVE CHANGES"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx(A,{label:"VESSEL NAME",value:n.name,valueColor:"neonCarrot"}),t.jsx(A,{label:"VESSEL ID",value:n.id,valueColor:"anakiwa"}),t.jsx(A,{label:"REGISTERED",value:new Date(n.createdAt).toLocaleString(),valueColor:"anakiwa"}),t.jsx(A,{label:"LAST UPDATED",value:new Date(n.updatedAt).toLocaleString(),valueColor:"anakiwa"})]})]}),t.jsxs(Fn,{children:[t.jsx(nr,{children:"Status & Actions"}),t.jsxs(jc,{children:[t.jsxs(Dn,{$type:n.isActive?"active":"disabled",children:[t.jsx(zn,{children:"Active Status"}),t.jsx(Rn,{children:n.isActive?"ACTIVE":"INACTIVE"})]}),t.jsxs(Dn,{$type:n.enabled?"enabled":"disabled",children:[t.jsx(zn,{children:"Operational Status"}),t.jsx(Rn,{children:n.enabled?"ENABLED":"DISABLED"})]})]}),!m&&t.jsxs($c,{children:[!n.isActive&&n.enabled&&t.jsx(k,{variant:"primary",onClick:w,disabled:g==="active",children:g==="active"?"SETTING...":"SET AS ACTIVE"}),t.jsx(k,{variant:n.enabled?"danger":"accent",onClick:f,disabled:g==="toggle",children:g==="toggle"?"UPDATING...":n.enabled?"DISABLE VESSEL":"ENABLE VESSEL"})]})]})]}),t.jsxs(Lc,{children:[t.jsx(nr,{children:"Usage Statistics"}),t.jsxs(Tc,{children:[t.jsx(A,{label:"TOTAL TRIPS",value:D.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"TOTAL HOURS",value:`${(T/3600).toFixed(1)}`,unit:"hrs",valueColor:"anakiwa"}),t.jsx(A,{label:"TOTAL DISTANCE",value:`${(R*539957e-9).toFixed(1)}`,unit:"nm",valueColor:"anakiwa"}),t.jsx(A,{label:"LAST TRIP",value:i&&i.length>0?new Date(i[0].startTime).toLocaleDateString():"NO TRIPS",valueColor:"anakiwa"})]})]})]})})},Dc=s.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`,zc=s(F)`
  padding: 30px;
  margin-top: 20px;
`,Rc=s.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,Ae=s.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Ee=s.label`
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
`,Nc=s.textarea`
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
`,ve=s.p`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
`,Ic=s.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid ${e=>e.theme.colors.primary.anakiwa};
`,Mc=s(k)`
  margin-right: 15px;
`,Pc=s.span`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin-left: 5px;
`,Le=s.div`
  color: ${e=>e.theme.colors.status.error};
  font-size: 0.9rem;
  margin-top: 5px;
`,Bc=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Oc=s.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,Uc=()=>{const e=Y(),r=El(),[n,o]=C.useState({name:"",description:"",hullNumber:"",manufacturer:"",model:"",year:"",length:""}),[a,i]=C.useState({}),[l,c]=C.useState(!1),u=()=>{e("/boats")},m=(v,g)=>{o(d=>({...d,[v]:g})),a[v]&&i(d=>({...d,[v]:void 0}))},p=()=>{const v={};return n.name.trim()?n.name.trim().length<2?v.name="Vessel name must be at least 2 characters":n.name.trim().length>100&&(v.name="Vessel name must be less than 100 characters"):v.name="Vessel name is required",n.description&&n.description.length>500&&(v.description="Description must be less than 500 characters"),n.hullNumber&&n.hullNumber.length>50&&(v.hullNumber="Hull number must be less than 50 characters"),n.manufacturer&&n.manufacturer.length>100&&(v.manufacturer="Manufacturer must be less than 100 characters"),n.model&&n.model.length>100&&(v.model="Model must be less than 100 characters"),n.year&&(!/^\d{4}$/.test(n.year)||parseInt(n.year)<1900||parseInt(n.year)>new Date().getFullYear()+1)&&(v.year="Year must be a valid 4-digit year"),n.length&&(!/^\d+(\.\d+)?$/.test(n.length)||parseFloat(n.length)<=0||parseFloat(n.length)>1e3)&&(v.length="Length must be a positive number (in feet)"),i(v),Object.keys(v).length===0},j=async v=>{if(v.preventDefault(),!!p()){c(!0);try{const g={};n.description.trim()&&(g.description=n.description.trim()),n.hullNumber.trim()&&(g.hullNumber=n.hullNumber.trim()),n.manufacturer.trim()&&(g.manufacturer=n.manufacturer.trim()),n.model.trim()&&(g.model=n.model.trim()),n.year.trim()&&(g.year=parseInt(n.year.trim())),n.length.trim()&&(g.lengthFeet=parseFloat(n.length.trim()));const d=await r.mutateAsync({name:n.name.trim(),metadata:Object.keys(g).length>0?g:void 0});e(`/boats/${d.id}`)}catch(g){console.error("Failed to create boat:",g)}finally{c(!1)}}};return t.jsxs(Dc,{children:[t.jsxs(Bc,{children:[t.jsxs(Oc,{children:[t.jsx(I,{children:"ADD NEW VESSEL"}),t.jsx(ve,{children:"Register a new vessel for tracking"})]}),t.jsx(Mc,{variant:"secondary",onClick:u,children:"BACK TO VESSELS"})]}),r.error&&t.jsxs(he,{type:"error",children:["Failed to create vessel: ",r.error.message]}),t.jsx(zc,{children:t.jsxs(Rc,{onSubmit:j,children:[t.jsxs(Ae,{children:[t.jsxs(Ee,{children:["Vessel Name",t.jsx(Pc,{children:"*"})]}),t.jsx(qe,{type:"text",value:n.name,onChange:v=>m("name",v.target.value),placeholder:"Enter vessel name (e.g., 'Sea Explorer', 'Fishing Buddy')",disabled:l,maxLength:100}),t.jsx(ve,{children:"The primary name used to identify this vessel throughout the system."}),a.name&&t.jsx(Le,{children:a.name})]}),t.jsxs(Ae,{children:[t.jsx(Ee,{children:"Description"}),t.jsx(Nc,{value:n.description,onChange:v=>m("description",v.target.value),placeholder:"Optional description of the vessel (e.g., 'Center console fishing boat', '24ft cabin cruiser')",disabled:l,maxLength:500}),t.jsx(ve,{children:"Optional description to help identify and categorize this vessel."}),a.description&&t.jsx(Le,{children:a.description})]}),t.jsxs(Ae,{children:[t.jsx(Ee,{children:"Hull Identification Number (HIN)"}),t.jsx(qe,{type:"text",value:n.hullNumber,onChange:v=>m("hullNumber",v.target.value),placeholder:"Enter HIN if available",disabled:l,maxLength:50}),t.jsx(ve,{children:"The unique hull identification number assigned by the manufacturer."}),a.hullNumber&&t.jsx(Le,{children:a.hullNumber})]}),t.jsxs(Ae,{children:[t.jsx(Ee,{children:"Manufacturer"}),t.jsx(qe,{type:"text",value:n.manufacturer,onChange:v=>m("manufacturer",v.target.value),placeholder:"Enter manufacturer name",disabled:l,maxLength:100}),t.jsx(ve,{children:"The company that built this vessel."}),a.manufacturer&&t.jsx(Le,{children:a.manufacturer})]}),t.jsxs(Ae,{children:[t.jsx(Ee,{children:"Model"}),t.jsx(qe,{type:"text",value:n.model,onChange:v=>m("model",v.target.value),placeholder:"Enter model name",disabled:l,maxLength:100}),t.jsx(ve,{children:"The specific model designation of this vessel."}),a.model&&t.jsx(Le,{children:a.model})]}),t.jsxs(Ae,{children:[t.jsx(Ee,{children:"Year Built"}),t.jsx(qe,{type:"text",value:n.year,onChange:v=>m("year",v.target.value),placeholder:"Enter year (e.g., 2020)",disabled:l,maxLength:4}),t.jsx(ve,{children:"The year this vessel was manufactured."}),a.year&&t.jsx(Le,{children:a.year})]}),t.jsxs(Ae,{children:[t.jsx(Ee,{children:"Length (feet)"}),t.jsx(qe,{type:"text",value:n.length,onChange:v=>m("length",v.target.value),placeholder:"Enter length in feet (e.g., 24.5)",disabled:l}),t.jsx(ve,{children:"The overall length of the vessel in feet."}),a.length&&t.jsx(Le,{children:a.length})]}),t.jsxs(Ic,{children:[t.jsx(k,{type:"button",variant:"secondary",onClick:u,disabled:l,children:"CANCEL"}),t.jsx(k,{type:"submit",variant:"primary",disabled:l||!n.name.trim(),children:l?"CREATING VESSEL...":"CREATE VESSEL"})]})]})})]})},or=s.div`
  padding: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,qc=s(F)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Hc=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  align-items: end;
`,ft=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,sr=s.label`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Vc=s.select`
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
`,In=s.input`
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
`,Wc=s.div`
  display: grid;
  gap: ${e=>e.theme.spacing.md};
`,Gc=s(F)`
  cursor: pointer;
  transition: all ${e=>e.theme.animation.normal} ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.lg};
  }
`,Kc=s.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${e=>e.theme.spacing.md};
  align-items: start;
`,Jc=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Qc=s.h3`
  margin: 0;
  font-size: ${e=>e.theme.typography.fontSize.lg};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Zc=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${e=>e.theme.spacing.sm};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
`,_c=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
  text-align: right;
`,ar=s.div`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,ir=s.div`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Yc=s.div`
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
`,Xc=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  text-transform: uppercase;
  letter-spacing: 2px;
`,ed=()=>{const[e,r]=C.useState({}),{data:n,isLoading:o,error:a}=Te(e),{data:i}=te(),l=(g,d)=>{r(y=>({...y,[g]:d||void 0}))},c=()=>{r({})},u=g=>{const d=Math.floor(g/3600),y=Math.floor(g%3600/60);return`${d}h ${y}m`},m=g=>`${(g*539957e-9).toFixed(1)} nm`,p=g=>`${g.toFixed(1)} kts`,j=g=>new Date(g).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),v=g=>{const d=i==null?void 0:i.find(y=>y.id===g);return(d==null?void 0:d.name)||"Unknown Boat"};return o?t.jsx(or,{children:t.jsx(Xc,{children:"Loading Trip Data..."})}):a?t.jsx(or,{children:t.jsx(F,{variant:"accent",title:"System Error",children:t.jsxs("div",{style:{color:"red",textAlign:"center",padding:"2rem"},children:["Error loading trips: ",a.message]})})}):t.jsxs(or,{children:[t.jsx(I,{children:"Trip Log Database"}),t.jsx(qc,{title:"Search Parameters",variant:"secondary",children:t.jsxs(Hc,{children:[t.jsxs(ft,{children:[t.jsx(sr,{children:"Vessel"}),t.jsxs(Vc,{value:e.boatId||"",onChange:g=>l("boatId",g.target.value),children:[t.jsx("option",{value:"",children:"All Vessels"}),i==null?void 0:i.map(g=>t.jsx("option",{value:g.id,children:g.name},g.id))]})]}),t.jsxs(ft,{children:[t.jsx(sr,{children:"Start Date"}),t.jsx(In,{type:"date",value:e.startDate||"",onChange:g=>l("startDate",g.target.value)})]}),t.jsxs(ft,{children:[t.jsx(sr,{children:"End Date"}),t.jsx(In,{type:"date",value:e.endDate||"",onChange:g=>l("endDate",g.target.value)})]}),t.jsx(ft,{children:t.jsx(k,{variant:"secondary",size:"sm",onClick:c,children:"Clear Filters"})})]})}),!n||n.length===0?t.jsxs(Yc,{children:[t.jsx("div",{className:"empty-title",children:"No Trip Records Found"}),t.jsx("div",{className:"empty-message",children:Object.keys(e).length>0?"No trips match the current search parameters.":"No trips have been recorded yet."})]}):t.jsx(Wc,{children:n.map(g=>{var d,y,h,x,b,f;return t.jsx(J,{to:`/trips/${g.id}`,style:{textDecoration:"none"},children:t.jsx(Gc,{variant:"primary",children:t.jsxs(Kc,{children:[t.jsxs(Jc,{children:[t.jsxs(Qc,{children:[v(g.boatId)," - ",j(g.startTime)]}),t.jsxs(Zc,{children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Water Type:"})," ",g.waterType.toUpperCase()]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Role:"})," ",g.role.toUpperCase()]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Duration:"})," ",u(((d=g.statistics)==null?void 0:d.durationSeconds)||0)]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Distance:"})," ",m(((y=g.statistics)==null?void 0:y.distanceMeters)||0)]})]})]}),t.jsxs(_c,{children:[t.jsxs("div",{children:[t.jsx(ar,{children:p(((h=g.statistics)==null?void 0:h.averageSpeedKnots)||0)}),t.jsx(ir,{children:"Avg Speed"})]}),t.jsxs("div",{children:[t.jsx(ar,{children:p(((x=g.statistics)==null?void 0:x.maxSpeedKnots)||0)}),t.jsx(ir,{children:"Max Speed"})]}),t.jsxs("div",{children:[t.jsx(ar,{children:((f=(b=g.statistics)==null?void 0:b.stopPoints)==null?void 0:f.length)||0}),t.jsx(ir,{children:"Stop Points"})]})]})]})})},g.id)})})]})},lr=s.div`
  padding: ${e=>e.theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
`,td=s(k)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,rd=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.lg};
  margin-bottom: ${e=>e.theme.spacing.lg};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,nd=s(F)`
  grid-column: 1 / -1;
  margin-bottom: ${e=>e.theme.spacing.lg};
`,od=s(yo)`
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
`,sd=s.div`
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
`,ad=s.div`
  display: grid;
  gap: ${e=>e.theme.spacing.sm};
`,Fe=s.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${e=>e.theme.spacing.md};
  padding: ${e=>e.theme.spacing.sm} 0;
  border-bottom: 1px solid ${e=>e.theme.colors.surface.light};
  
  &:last-child {
    border-bottom: none;
  }
`,De=s.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,ze=s.div`
  font-size: ${e=>e.theme.typography.fontSize.md};
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,id=s.div`
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
`,ld=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,cd=s.div`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
`,dd=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,md=s.div`
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.anakiwa};
  text-transform: uppercase;
  letter-spacing: 1px;
`,hd=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  color: ${e=>e.theme.colors.text.secondary};
`,pd=s.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.muted};
`,ud=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  text-transform: uppercase;
  letter-spacing: 2px;
`,gd=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.status.error};
  font-size: ${e=>e.theme.typography.fontSize.lg};
`,xd=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.lg};
`,fd=s(F)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,yd=s(F)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,bd=new Be.Icon({iconUrl:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiM2NkZGNjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4KPC9zdmc+",iconSize:[24,24],iconAnchor:[12,12]}),jd=new Be.Icon({iconUrl:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNGRjY2NjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4KPC9zdmc+",iconSize:[24,24],iconAnchor:[12,12]}),$d=new Be.Icon({iconUrl:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNGRkZGNjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4KPC9zdmc+",iconSize:[20,20],iconAnchor:[10,10]}),vd=()=>{var x,b,f,w,D,T,R,P,E;const{id:e}=ye(),{data:r,isLoading:n,error:o}=Jo(e),{data:a}=te(),i=S=>{const z=Math.floor(S/3600),O=Math.floor(S%3600/60);return`${z}h ${O}m`},l=S=>`${(S*539957e-9).toFixed(1)} nm`,c=S=>`${S.toFixed(1)} kts`,u=S=>new Date(S).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),m=(S,z)=>{const O=S>=0?"N":"S",q=z>=0?"E":"W";return`${Math.abs(S).toFixed(6)}°${O}, ${Math.abs(z).toFixed(6)}°${q}`},p=S=>{const z=a==null?void 0:a.find(O=>O.id===S);return(z==null?void 0:z.name)||"Unknown Boat"},j=S=>S.map(z=>[z.latitude,z.longitude]),v=S=>{if(S.length===0)return[0,0];const z=S.reduce((q,V)=>q+V.latitude,0)/S.length,O=S.reduce((q,V)=>q+V.longitude,0)/S.length;return[z,O]};if(n)return t.jsx(lr,{children:t.jsx(ud,{children:"Loading Trip Data..."})});if(o||!r)return t.jsx(lr,{children:t.jsx(gd,{children:o?`Error loading trip: ${o.message}`:"Trip not found"})});const g=j(r.gpsPoints),d=v(r.gpsPoints),y=r.gpsPoints[0],h=r.gpsPoints[r.gpsPoints.length-1];return t.jsxs(lr,{children:[t.jsx(td,{as:J,to:"/trips",variant:"secondary",size:"sm",children:"← Back to Trip Log"}),t.jsxs(I,{children:["Trip Analysis - ",p(r.boatId)," - ",u(r.startTime)]}),g.length>0&&t.jsx(nd,{title:"Navigation Route",variant:"accent",children:t.jsxs(od,{center:d,zoom:13,scrollWheelZoom:!0,children:[t.jsx(xo,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.jsx(fo,{positions:g,color:"#FF9966",weight:3,opacity:.8}),y&&t.jsx(Ce,{position:[y.latitude,y.longitude],icon:bd,children:t.jsxs(Se,{children:[t.jsx("strong",{children:"Trip Start"}),t.jsx("br",{}),u(r.startTime),t.jsx("br",{}),m(y.latitude,y.longitude)]})}),h&&t.jsx(Ce,{position:[h.latitude,h.longitude],icon:jd,children:t.jsxs(Se,{children:[t.jsx("strong",{children:"Trip End"}),t.jsx("br",{}),u(r.endTime),t.jsx("br",{}),m(h.latitude,h.longitude)]})}),(((x=r.statistics)==null?void 0:x.stopPoints)||[]).map((S,z)=>t.jsx(Ce,{position:[S.latitude,S.longitude],icon:$d,children:t.jsxs(Se,{children:[t.jsxs("strong",{children:["Stop Point ",z+1]}),t.jsx("br",{}),"Duration: ",i(S.durationSeconds),t.jsx("br",{}),m(S.latitude,S.longitude)]})},z))]})}),t.jsxs(rd,{children:[t.jsx(F,{title:"Trip Statistics",variant:"primary",children:t.jsxs(sd,{children:[t.jsxs(He,{children:[t.jsx(Ve,{children:i(((b=r.statistics)==null?void 0:b.durationSeconds)||0)}),t.jsx(We,{children:"Duration"})]}),t.jsxs(He,{children:[t.jsx(Ve,{children:l(((f=r.statistics)==null?void 0:f.distanceMeters)||0)}),t.jsx(We,{children:"Distance"})]}),t.jsxs(He,{children:[t.jsx(Ve,{children:c(((w=r.statistics)==null?void 0:w.averageSpeedKnots)||0)}),t.jsx(We,{children:"Avg Speed"})]}),t.jsxs(He,{children:[t.jsx(Ve,{children:c(((D=r.statistics)==null?void 0:D.maxSpeedKnots)||0)}),t.jsx(We,{children:"Max Speed"})]}),t.jsxs(He,{children:[t.jsx(Ve,{children:((R=(T=r.statistics)==null?void 0:T.stopPoints)==null?void 0:R.length)||0}),t.jsx(We,{children:"Stop Points"})]}),t.jsxs(He,{children:[t.jsx(Ve,{children:r.gpsPoints.length}),t.jsx(We,{children:"GPS Points"})]})]})}),t.jsx(F,{title:"Trip Information",variant:"secondary",children:t.jsxs(ad,{children:[t.jsxs(Fe,{children:[t.jsx(De,{children:"Vessel"}),t.jsx(ze,{children:p(r.boatId)})]}),t.jsxs(Fe,{children:[t.jsx(De,{children:"Start Time"}),t.jsx(ze,{children:u(r.startTime)})]}),t.jsxs(Fe,{children:[t.jsx(De,{children:"End Time"}),t.jsx(ze,{children:u(r.endTime)})]}),t.jsxs(Fe,{children:[t.jsx(De,{children:"Water Type"}),t.jsx(ze,{children:r.waterType.toUpperCase()})]}),t.jsxs(Fe,{children:[t.jsx(De,{children:"Role"}),t.jsx(ze,{children:r.role.toUpperCase()})]}),y&&t.jsxs(Fe,{children:[t.jsx(De,{children:"Start Position"}),t.jsx(ze,{children:m(y.latitude,y.longitude)})]}),h&&t.jsxs(Fe,{children:[t.jsx(De,{children:"End Position"}),t.jsx(ze,{children:m(h.latitude,h.longitude)})]})]})})]}),r.manualData&&t.jsx(fd,{title:"Manual Data Entry",variant:"accent",children:t.jsxs(id,{children:[r.manualData.engineHours!==void 0&&t.jsxs(rt,{children:[t.jsx(nt,{children:r.manualData.engineHours}),t.jsx(ot,{children:"Engine Hours"})]}),r.manualData.fuelConsumed!==void 0&&t.jsxs(rt,{children:[t.jsx(nt,{children:r.manualData.fuelConsumed}),t.jsx(ot,{children:"Fuel Consumed"})]}),r.manualData.numberOfPassengers!==void 0&&t.jsxs(rt,{children:[t.jsx(nt,{children:r.manualData.numberOfPassengers}),t.jsx(ot,{children:"Passengers"})]}),r.manualData.weatherConditions&&t.jsxs(rt,{children:[t.jsx(nt,{children:r.manualData.weatherConditions}),t.jsx(ot,{children:"Weather"})]}),r.manualData.destination&&t.jsxs(rt,{children:[t.jsx(nt,{children:r.manualData.destination}),t.jsx(ot,{children:"Destination"})]})]})}),(((P=r.statistics)==null?void 0:P.stopPoints)||[]).length>0&&t.jsx(yd,{title:"Stop Points Analysis",variant:"primary",children:t.jsx(ld,{children:(((E=r.statistics)==null?void 0:E.stopPoints)||[]).map((S,z)=>t.jsxs(cd,{children:[t.jsxs(dd,{children:[t.jsxs(md,{children:["Stop Point ",z+1]}),t.jsx(hd,{children:i(S.durationSeconds)})]}),t.jsx(pd,{children:m(S.latitude,S.longitude)}),t.jsxs("div",{style:{fontSize:"0.8rem",color:"#999",marginTop:"0.5rem"},children:[u(S.startTime)," - ",u(S.endTime)]})]},z))})}),t.jsxs(xd,{children:[t.jsx(J,{to:`/trips/${r.id}/edit`,style:{textDecoration:"none"},children:t.jsx(k,{variant:"primary",children:"Edit Trip Data"})}),t.jsx(k,{variant:"secondary",children:"Export Data"})]})]})},cr=s.div`
  padding: ${e=>e.theme.spacing.lg};
  max-width: 1000px;
  margin: 0 auto;
`,wd=s(k)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Cd=s.div`
  display: grid;
  gap: ${e=>e.theme.spacing.lg};
`,Mn=s(F)`
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
`,dr=s.select`
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
`,Sd=s.textarea`
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
`,mr=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${e=>e.theme.spacing.lg};
`,kd=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  text-transform: uppercase;
  letter-spacing: 2px;
`,Td=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.status.error};
  font-size: ${e=>e.theme.typography.fontSize.lg};
`,Ad=s.div`
  background-color: rgba(102, 255, 102, 0.1);
  border: 1px solid ${e=>e.theme.colors.status.success};
  border-radius: ${e=>e.theme.borderRadius.md};
  color: ${e=>e.theme.colors.status.success};
  padding: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
  text-align: center;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,Ed=()=>{const{id:e}=ye(),{data:r,isLoading:n,error:o}=Jo(e),{data:a}=te(),i=Fl(),l=Dl(),[c,u]=C.useState({waterType:"inland",role:"captain",boatId:""}),[m,p]=C.useState({}),[j,v]=C.useState("");C.useEffect(()=>{r&&(u({waterType:r.waterType,role:r.role,boatId:r.boatId}),r.manualData&&p({engineHours:r.manualData.engineHours,fuelConsumed:r.manualData.fuelConsumed,weatherConditions:r.manualData.weatherConditions,numberOfPassengers:r.manualData.numberOfPassengers,destination:r.manualData.destination}))},[r]);const g=(f,w)=>{u(D=>({...D,[f]:w}))},d=(f,w)=>{p(D=>({...D,[f]:w===""?void 0:w}))},y=async()=>{if(r)try{await i.mutateAsync({id:r.id,data:c}),v("Trip information updated successfully!"),setTimeout(()=>v(""),3e3)}catch(f){console.error("Error updating trip:",f)}},h=async()=>{if(!r)return;const f={};Object.entries(m).forEach(([w,D])=>{D!==void 0&&D!==""&&(f[w]=D)});try{await l.mutateAsync({tripId:r.id,data:f}),v("Manual data updated successfully!"),setTimeout(()=>v(""),3e3)}catch(w){console.error("Error updating manual data:",w)}},x=f=>new Date(f).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),b=f=>{const w=a==null?void 0:a.find(D=>D.id===f);return(w==null?void 0:w.name)||"Unknown Boat"};return n?t.jsx(cr,{children:t.jsx(kd,{children:"Loading Trip Data..."})}):o||!r?t.jsx(cr,{children:t.jsx(Td,{children:o?`Error loading trip: ${o.message}`:"Trip not found"})}):t.jsxs(cr,{children:[t.jsx(wd,{as:J,to:`/trips/${r.id}`,variant:"secondary",size:"sm",children:"← Back to Trip Details"}),t.jsxs(I,{children:["Edit Trip Data - ",b(r.boatId)," - ",x(r.startTime)]}),j&&t.jsx(Ad,{children:j}),t.jsxs(Cd,{children:[t.jsxs(Mn,{title:"Trip Information",variant:"primary",children:[t.jsxs(st,{children:[t.jsxs(ie,{children:[t.jsx(le,{children:"Vessel"}),t.jsx(dr,{value:c.boatId,onChange:f=>g("boatId",f.target.value),children:a==null?void 0:a.map(f=>t.jsx("option",{value:f.id,children:f.name},f.id))})]}),t.jsxs(ie,{children:[t.jsx(le,{children:"Water Type"}),t.jsxs(dr,{value:c.waterType,onChange:f=>g("waterType",f.target.value),children:[t.jsx("option",{value:"inland",children:"Inland"}),t.jsx("option",{value:"coastal",children:"Coastal/Nearshore"}),t.jsx("option",{value:"offshore",children:"Offshore"})]})]}),t.jsxs(ie,{children:[t.jsx(le,{children:"Role"}),t.jsxs(dr,{value:c.role,onChange:f=>g("role",f.target.value),children:[t.jsx("option",{value:"captain",children:"Captain"}),t.jsx("option",{value:"crew",children:"Crew"}),t.jsx("option",{value:"observer",children:"Observer"})]})]})]}),t.jsxs(st,{children:[t.jsxs(ie,{children:[t.jsx(le,{children:"Start Time"}),t.jsx(Ge,{type:"text",value:x(r.startTime),disabled:!0})]}),t.jsxs(ie,{children:[t.jsx(le,{children:"End Time"}),t.jsx(Ge,{type:"text",value:x(r.endTime),disabled:!0})]})]}),t.jsx(mr,{children:t.jsx(k,{variant:"primary",onClick:y,disabled:i.isPending,children:i.isPending?"Saving...":"Save Trip Information"})})]}),t.jsxs(Mn,{title:"Manual Data Entry",variant:"secondary",children:[t.jsxs(st,{children:[t.jsxs(ie,{children:[t.jsx(le,{children:"Engine Hours"}),t.jsx(Ge,{type:"number",step:"0.1",min:"0",placeholder:"0.0",value:m.engineHours||"",onChange:f=>d("engineHours",parseFloat(f.target.value))})]}),t.jsxs(ie,{children:[t.jsx(le,{children:"Fuel Consumed (gallons)"}),t.jsx(Ge,{type:"number",step:"0.1",min:"0",placeholder:"0.0",value:m.fuelConsumed||"",onChange:f=>d("fuelConsumed",parseFloat(f.target.value))})]}),t.jsxs(ie,{children:[t.jsx(le,{children:"Number of Passengers"}),t.jsx(Ge,{type:"number",min:"0",placeholder:"0",value:m.numberOfPassengers||"",onChange:f=>d("numberOfPassengers",parseInt(f.target.value))})]})]}),t.jsx(st,{children:t.jsxs(ie,{children:[t.jsx(le,{children:"Destination"}),t.jsx(Ge,{type:"text",placeholder:"Enter destination",value:m.destination||"",onChange:f=>d("destination",f.target.value)})]})}),t.jsx(st,{children:t.jsxs(ie,{children:[t.jsx(le,{children:"Weather Conditions"}),t.jsx(Sd,{placeholder:"Describe weather conditions, sea state, visibility, etc.",value:m.weatherConditions||"",onChange:f=>d("weatherConditions",f.target.value)})]})}),t.jsx(mr,{children:t.jsx(k,{variant:"secondary",onClick:h,disabled:l.isPending,children:l.isPending?"Saving...":"Save Manual Data"})})]})]}),t.jsxs(mr,{children:[t.jsx(J,{to:`/trips/${r.id}`,style:{textDecoration:"none"},children:t.jsx(k,{variant:"accent",children:"View Trip Details"})}),t.jsx(J,{to:"/trips",style:{textDecoration:"none"},children:t.jsx(k,{variant:"secondary",children:"Back to Trip Log"})})]})]})},es=e=>_({queryKey:["notes",e],queryFn:()=>M.getNotes(e)}),ts=e=>_({queryKey:["notes",e],queryFn:()=>M.getNote(e),enabled:!!e}),Ld=()=>{const e=G();return Q({mutationFn:r=>M.createNote(r),onSuccess:()=>{e.invalidateQueries({queryKey:["notes"]})}})},Fd=()=>{const e=G();return Q({mutationFn:({id:r,data:n})=>M.updateNote(r,n),onSuccess:r=>{e.invalidateQueries({queryKey:["notes"]}),e.setQueryData(["notes",r.id],r)}})},rs=()=>{const e=G();return Q({mutationFn:r=>M.deleteNote(r),onSuccess:()=>{e.invalidateQueries({queryKey:["notes"]})}})},ns=()=>{const{data:e}=es();return((e==null?void 0:e.reduce((n,o)=>(o.tags.forEach(a=>{n.includes(a)||n.push(a)}),n),[]))||[]).sort()},Pn=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,Dd=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,zd=s.div`
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
`,hr=s.select`
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
`,Rd=s.input`
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
`,Nd=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,Id=s.div`
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
`,Md=s.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,Pd=s.span`
  background-color: ${e=>{switch(e.type){case"boat":return e.theme.colors.primary.anakiwa;case"trip":return e.theme.colors.primary.lilac;default:return e.theme.colors.primary.neonCarrot}}};
  color: ${e=>e.theme.colors.text.inverse};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Bd=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.xs};
`,Bn=s.button`
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
`,Od=s.div`
  color: ${e=>e.theme.colors.text.primary};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  margin-bottom: ${e=>e.theme.spacing.sm};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Ud=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.xs};
  margin-bottom: ${e=>e.theme.spacing.sm};
`,qd=s.span`
  background-color: ${e=>e.theme.colors.surface.medium};
  color: ${e=>e.theme.colors.text.secondary};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
`,Hd=s.div`
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  text-align: right;
`,Vd=s.div`
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
`,Wd=()=>{const e=Y(),[r,n]=C.useState(""),[o,a]=C.useState(""),[i,l]=C.useState(""),[c,u]=C.useState(""),{data:m}=te(),p=ns(),j=C.useMemo(()=>{const T={};return r&&(T.type=r),o&&(T.boatId=o),i&&(T.tags=[i]),T},[r,o,i]),{data:v,isLoading:g}=es(j),d=rs(),y=C.useMemo(()=>v?v.filter(T=>{if(c){const R=c.toLowerCase();return T.content.toLowerCase().includes(R)||T.tags.some(P=>P.toLowerCase().includes(R))}return!0}):[],[v,c]),h=()=>{e("/notes/new")},x=(T,R)=>{R.stopPropagation(),e(`/notes/${T}/edit`)},b=async(T,R)=>{if(R.stopPropagation(),window.confirm("Are you sure you want to delete this note?"))try{await d.mutateAsync(T)}catch(P){console.error("Failed to delete note:",P)}},f=T=>{e(`/notes/${T}`)},w=T=>new Date(T).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),D=T=>{if(!T||!m)return null;const R=m.find(P=>P.id===T);return R==null?void 0:R.name};return g?t.jsxs(Pn,{children:[t.jsx(I,{level:1,children:"Notes Database"}),t.jsx(F,{title:"Loading",children:t.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading notes..."})})]}):t.jsxs(Pn,{children:[t.jsxs(Dd,{children:[t.jsx(I,{level:1,children:"Notes Database"}),t.jsx(k,{onClick:h,children:"Create New Note"})]}),t.jsx(F,{title:"Filters",variant:"secondary",children:t.jsxs(zd,{children:[t.jsxs(yt,{children:[t.jsx(bt,{children:"Note Type"}),t.jsxs(hr,{value:r,onChange:T=>n(T.target.value),children:[t.jsx("option",{value:"",children:"All Types"}),t.jsx("option",{value:"general",children:"General"}),t.jsx("option",{value:"boat",children:"Boat-Specific"}),t.jsx("option",{value:"trip",children:"Trip"})]})]}),t.jsxs(yt,{children:[t.jsx(bt,{children:"Boat"}),t.jsxs(hr,{value:o,onChange:T=>a(T.target.value),disabled:r==="general"||r==="trip",children:[t.jsx("option",{value:"",children:"All Boats"}),m==null?void 0:m.map(T=>t.jsx("option",{value:T.id,children:T.name},T.id))]})]}),t.jsxs(yt,{children:[t.jsx(bt,{children:"Tag"}),t.jsxs(hr,{value:i,onChange:T=>l(T.target.value),children:[t.jsx("option",{value:"",children:"All Tags"}),p.map(T=>t.jsx("option",{value:T,children:T},T))]})]}),t.jsxs(yt,{children:[t.jsx(bt,{children:"Search"}),t.jsx(Rd,{type:"text",placeholder:"Search notes content...",value:c,onChange:T=>u(T.target.value)})]})]})}),y.length===0?t.jsx(F,{children:t.jsxs(Vd,{children:[t.jsx("div",{className:"empty-icon",children:"📝"}),t.jsx("div",{className:"empty-title",children:"No Notes Found"}),t.jsx("div",{children:(v==null?void 0:v.length)===0?"Create your first note to get started.":"Try adjusting your filters to find notes."})]})}):t.jsx(Nd,{children:y.map(T=>t.jsxs(Id,{onClick:()=>f(T.id),children:[t.jsxs(Md,{children:[t.jsxs(Pd,{type:T.type,children:[T.type,T.type==="boat"&&D(T.boatId)&&` - ${D(T.boatId)}`]}),t.jsxs(Bd,{children:[t.jsx(Bn,{onClick:R=>x(T.id,R),children:"Edit"}),t.jsx(Bn,{className:"danger",onClick:R=>b(T.id,R),children:"Delete"})]})]}),t.jsx(Od,{children:T.content}),T.tags.length>0&&t.jsx(Ud,{children:T.tags.map(R=>t.jsx(qd,{children:R},R))}),t.jsxs(Hd,{children:[w(T.createdAt),T.updatedAt!==T.createdAt&&" (edited)"]})]},T.id))})]})},pr=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,Gd=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Kd=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,Jd=s.div`
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
`,Qd=s.span`
  background-color: ${e=>{switch(e.type){case"boat":return e.theme.colors.primary.anakiwa;case"trip":return e.theme.colors.primary.lilac;default:return e.theme.colors.primary.neonCarrot}}};
  color: ${e=>e.theme.colors.text.inverse};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
`,Zd=s.div`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.lg};
  color: ${e=>e.theme.colors.text.primary};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  white-space: pre-wrap;
  font-size: ${e=>e.theme.typography.fontSize.md};
`,_d=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.sm};
`,Yd=s.span`
  background-color: ${e=>e.theme.colors.primary.lilac};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Xd=s.span`
  color: ${e=>e.theme.colors.text.muted};
  font-style: italic;
`,em=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.text.muted};
`,tm=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.status.error};
`,rm=()=>{const e=Y(),{id:r}=ye(),{data:n,isLoading:o,error:a}=ts(r||""),{data:i}=te(),{data:l}=Te(),c=rs(),u=()=>{e(`/notes/${r}/edit`)},m=async()=>{if(window.confirm("Are you sure you want to delete this note?"))try{await c.mutateAsync(r),e("/notes")}catch(d){console.error("Failed to delete note:",d)}},p=()=>{e("/notes")},j=d=>new Date(d).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),v=d=>{if(!d||!i)return"Unknown Boat";const y=i.find(h=>h.id===d);return(y==null?void 0:y.name)||"Unknown Boat"},g=d=>{if(!d||!l)return"Unknown Trip";const y=l.find(b=>b.id===d);if(!y)return"Unknown Trip";const h=v(y.boatId);return`${new Date(y.startTime).toLocaleDateString()} - ${h}`};return o?t.jsxs(pr,{children:[t.jsx(I,{level:1,children:"Note Details"}),t.jsx(F,{children:t.jsx(em,{children:"Loading note..."})})]}):a||!n?t.jsxs(pr,{children:[t.jsx(I,{level:1,children:"Note Details"}),t.jsx(F,{children:t.jsxs(tm,{children:["Note not found or failed to load.",t.jsx("div",{style:{marginTop:"1rem"},children:t.jsx(k,{onClick:p,children:"Back to Notes"})})]})})]}):t.jsxs(pr,{children:[t.jsxs(Gd,{children:[t.jsx(I,{level:1,children:"Note Details"}),t.jsxs(Kd,{children:[t.jsx(k,{variant:"secondary",onClick:p,children:"Back to Notes"}),t.jsx(k,{variant:"accent",onClick:u,children:"Edit Note"}),t.jsx(k,{variant:"danger",onClick:m,disabled:c.isPending,children:c.isPending?"Deleting...":"Delete"})]})]}),t.jsx(F,{title:"Note Information",children:t.jsxs(Jd,{children:[t.jsxs(Ke,{children:[t.jsx(Je,{children:"Type"}),t.jsx(Qe,{children:t.jsx(Qd,{type:n.type,children:n.type})})]}),n.type==="boat"&&n.boatId&&t.jsxs(Ke,{children:[t.jsx(Je,{children:"Boat"}),t.jsx(Qe,{children:v(n.boatId)})]}),n.type==="trip"&&n.tripId&&t.jsxs(Ke,{children:[t.jsx(Je,{children:"Trip"}),t.jsx(Qe,{children:g(n.tripId)})]}),t.jsxs(Ke,{children:[t.jsx(Je,{children:"Created"}),t.jsx(Qe,{children:j(n.createdAt)})]}),n.updatedAt!==n.createdAt&&t.jsxs(Ke,{children:[t.jsx(Je,{children:"Last Modified"}),t.jsx(Qe,{children:j(n.updatedAt)})]}),t.jsxs(Ke,{children:[t.jsx(Je,{children:"Tags"}),t.jsx(Qe,{children:n.tags.length>0?t.jsx(_d,{children:n.tags.map(d=>t.jsx(Yd,{children:d},d))}):t.jsx(Xd,{children:"No tags"})})]})]})}),t.jsx(F,{title:"Content",children:t.jsx(Zd,{children:n.content})})]})},On=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,nm=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,om=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,jt=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Ze=s.label`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,ur=s.select`
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
`,sm=s.textarea`
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
`,am=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,im=s.input`
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
`,lm=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.sm};
`,cm=s.span`
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
`,dm=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.xs};
  margin-top: ${e=>e.theme.spacing.sm};
`,mm=s.button`
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
`,hm=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${e=>e.theme.spacing.lg};
`,pm=s.div`
  color: ${e=>e.theme.colors.status.error};
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.status.error};
  padding: ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.borderRadius.md};
  margin-bottom: ${e=>e.theme.spacing.md};
`,Un=()=>{const e=Y(),{id:r}=ye(),n=!!r&&r!=="new",[o,a]=C.useState("general"),[i,l]=C.useState(""),[c,u]=C.useState(""),[m,p]=C.useState(""),[j,v]=C.useState([]),[g,d]=C.useState(""),[y,h]=C.useState(""),{data:x,isLoading:b}=ts(r||""),{data:f}=te(),{data:w}=Te(),D=ns(),T=Ld(),R=Fd();C.useEffect(()=>{x&&n&&(a(x.type),l(x.boatId||""),u(x.tripId||""),p(x.content),v(x.tags))},[x,n]);const P=()=>{const N=g.trim();N&&!j.includes(N)&&(v([...j,N]),d(""))},E=N=>{v(j.filter(H=>H!==N))},S=N=>{j.includes(N)||v([...j,N])},z=N=>{N.key==="Enter"&&(N.preventDefault(),P())},O=async()=>{if(h(""),!m.trim()){h("Note content is required");return}if(o==="boat"&&!i){h("Please select a boat for boat-specific notes");return}if(o==="trip"&&!c){h("Please select a trip for trip notes");return}try{const N={content:m.trim(),type:o,boatId:o==="boat"?i:void 0,tripId:o==="trip"?c:void 0,tags:j};n?await R.mutateAsync({id:r,data:N}):await T.mutateAsync(N),e("/notes")}catch(N){console.error("Failed to save note:",N),h("Failed to save note. Please try again.")}},q=()=>{e("/notes")},V=D.filter(N=>!j.includes(N));return b&&n?t.jsxs(On,{children:[t.jsx(I,{level:1,children:"Loading Note"}),t.jsx(F,{title:"Loading",children:t.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading note data..."})})]}):t.jsxs(On,{children:[t.jsx(nm,{children:t.jsx(I,{level:1,children:n?"Edit Note":"Create New Note"})}),t.jsx(F,{title:"Note Details",children:t.jsxs(om,{children:[y&&t.jsx(pm,{children:y}),t.jsxs(jt,{children:[t.jsx(Ze,{children:"Note Type"}),t.jsxs(ur,{value:o,onChange:N=>{a(N.target.value),l(""),u("")},children:[t.jsx("option",{value:"general",children:"General Note"}),t.jsx("option",{value:"boat",children:"Boat-Specific Note"}),t.jsx("option",{value:"trip",children:"Trip Note"})]})]}),o==="boat"&&t.jsxs(jt,{children:[t.jsx(Ze,{children:"Boat"}),t.jsxs(ur,{value:i,onChange:N=>l(N.target.value),children:[t.jsx("option",{value:"",children:"Select a boat"}),f==null?void 0:f.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),o==="trip"&&t.jsxs(jt,{children:[t.jsx(Ze,{children:"Trip"}),t.jsxs(ur,{value:c,onChange:N=>u(N.target.value),children:[t.jsx("option",{value:"",children:"Select a trip"}),w==null?void 0:w.map(N=>{var H;return t.jsxs("option",{value:N.id,children:[new Date(N.startTime).toLocaleDateString()," - ",((H=f==null?void 0:f.find(Oe=>Oe.id===N.boatId))==null?void 0:H.name)||"Unknown Boat"]},N.id)})]})]}),t.jsxs(jt,{children:[t.jsx(Ze,{children:"Content"}),t.jsx(sm,{value:m,onChange:N=>p(N.target.value),placeholder:"Enter your note content here..."})]}),t.jsxs(am,{children:[t.jsx(Ze,{children:"Tags"}),t.jsx(im,{type:"text",value:g,onChange:N=>d(N.target.value),onKeyPress:z,placeholder:"Add a tag and press Enter"}),j.length>0&&t.jsx(lm,{children:j.map(N=>t.jsxs(cm,{children:[N,t.jsx("button",{className:"remove-tag",onClick:()=>E(N),type:"button",children:"×"})]},N))}),V.length>0&&t.jsxs("div",{children:[t.jsx(Ze,{style:{fontSize:"12px",marginBottom:"8px"},children:"Suggested Tags"}),t.jsx(dm,{children:V.slice(0,10).map(N=>t.jsx(mm,{onClick:()=>S(N),type:"button",children:N},N))})]})]}),t.jsxs(hm,{children:[t.jsx(k,{variant:"secondary",onClick:q,children:"Cancel"}),t.jsx(k,{onClick:O,disabled:T.isPending||R.isPending,children:T.isPending||R.isPending?"Saving...":"Save Note"})]})]})})]})},qt={todoLists:e=>["todoLists",e],todoList:e=>["todoList",e]},um=e=>_({queryKey:qt.todoLists(e),queryFn:()=>M.getTodoLists(e)}),gm=e=>_({queryKey:qt.todoList(e),queryFn:()=>M.getTodoList(e),enabled:!!e}),xm=()=>{const e=G();return Q({mutationFn:r=>M.createTodoList(r),onSuccess:()=>{e.invalidateQueries({queryKey:["todoLists"]})}})},os=()=>{const e=G();return Q({mutationFn:r=>M.deleteTodoList(r),onSuccess:()=>{e.invalidateQueries({queryKey:["todoLists"]})}})},fm=()=>{const e=G();return Q({mutationFn:({listId:r,content:n})=>M.addTodoItem(r,n),onSuccess:(r,{listId:n})=>{e.invalidateQueries({queryKey:qt.todoList(n)}),e.invalidateQueries({queryKey:["todoLists"]})}})},ym=()=>{const e=G();return Q({mutationFn:r=>M.toggleTodoItem(r),onSuccess:r=>{e.invalidateQueries({queryKey:qt.todoList(r.listId)}),e.invalidateQueries({queryKey:["todoLists"]})}})},qn=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,bm=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,jm=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Hn=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Vn=s.label`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,Wn=s.select`
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
`,$m=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,vm=s.div`
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
`,wm=s.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,Cm=s.h3`
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  margin: 0;
  flex: 1;
`,Sm=s.span`
  background-color: ${e=>{switch(e.type){case"boat":return e.theme.colors.primary.anakiwa;default:return e.theme.colors.primary.neonCarrot}}};
  color: ${e=>e.theme.colors.text.inverse};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left: ${e=>e.theme.spacing.sm};
`,km=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.xs};
  margin-left: ${e=>e.theme.spacing.sm};
`,Tm=s.button`
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
`,Am=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.sm};
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Em=s.div`
  background-color: ${e=>e.theme.colors.surface.medium};
  border-radius: ${e=>e.theme.borderRadius.pill};
  height: 8px;
  overflow: hidden;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,Lm=s.div`
  background-color: ${e=>e.theme.colors.primary.neonCarrot};
  height: 100%;
  width: ${e=>e.percentage}%;
  transition: width ${e=>e.theme.animation.normal} ease;
`,Fm=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,gr=s.div`
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
`,Dm=s.div`
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  text-align: right;
  margin-top: ${e=>e.theme.spacing.sm};
`,zm=s.div`
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
`,Rm=()=>{const e=Y(),[r,n]=C.useState(""),[o,a]=C.useState(""),{data:i}=te(),{data:l,isLoading:c}=um(),u=os(),m=C.useMemo(()=>l?l.filter(h=>!(r&&h.type!==r||o&&h.boatId!==o)):[],[l,r,o]),p=()=>{e("/todos/new")},j=h=>{e(`/todos/${h}`)},v=async(h,x)=>{if(x.stopPropagation(),window.confirm("Are you sure you want to delete this to-do list? All items will be permanently removed."))try{await u.mutateAsync(h)}catch(b){console.error("Failed to delete to-do list:",b)}},g=h=>new Date(h).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),d=h=>{if(!h||!i)return null;const x=i.find(b=>b.id===h);return x==null?void 0:x.name},y=h=>{const x=h.items.length,b=h.items.filter(w=>w.completed).length,f=x>0?b/x*100:0;return{totalItems:x,completedItems:b,percentage:f}};return c?t.jsxs(qn,{children:[t.jsx(I,{level:1,children:"To-Do Lists"}),t.jsx(F,{title:"Loading",children:t.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading to-do lists..."})})]}):t.jsxs(qn,{children:[t.jsxs(bm,{children:[t.jsx(I,{level:1,children:"To-Do Lists"}),t.jsx(k,{onClick:p,children:"Create New List"})]}),t.jsx(F,{title:"Filters",variant:"secondary",children:t.jsxs(jm,{children:[t.jsxs(Hn,{children:[t.jsx(Vn,{children:"List Type"}),t.jsxs(Wn,{value:r,onChange:h=>n(h.target.value),children:[t.jsx("option",{value:"",children:"All Types"}),t.jsx("option",{value:"general",children:"General"}),t.jsx("option",{value:"boat",children:"Boat-Specific"})]})]}),t.jsxs(Hn,{children:[t.jsx(Vn,{children:"Boat"}),t.jsxs(Wn,{value:o,onChange:h=>a(h.target.value),disabled:r==="general",children:[t.jsx("option",{value:"",children:"All Boats"}),i==null?void 0:i.map(h=>t.jsx("option",{value:h.id,children:h.name},h.id))]})]})]})}),m.length===0?t.jsx(F,{children:t.jsxs(zm,{children:[t.jsx("div",{className:"empty-icon",children:"📋"}),t.jsx("div",{className:"empty-title",children:"No To-Do Lists Found"}),t.jsx("div",{children:(l==null?void 0:l.length)===0?"Create your first to-do list to get started.":"Try adjusting your filters to find lists."})]})}):t.jsx($m,{children:m.map(h=>{const x=y(h),b=d(h.boatId);return t.jsxs(vm,{onClick:()=>j(h.id),children:[t.jsxs(wm,{children:[t.jsx(Cm,{children:h.title}),t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsxs(Sm,{type:h.type,children:[h.type,b&&` - ${b}`]}),t.jsx(km,{children:t.jsx(Tm,{className:"danger",onClick:f=>v(h.id,f),children:"Delete"})})]})]}),t.jsxs(Am,{children:[t.jsxs("span",{children:[x.completedItems," of ",x.totalItems," completed"]}),t.jsxs("span",{children:[Math.round(x.percentage),"%"]})]}),t.jsx(Em,{children:t.jsx(Lm,{percentage:x.percentage})}),t.jsxs(Fm,{children:[h.items.slice(0,3).map(f=>t.jsx(gr,{completed:f.completed,children:f.content},f.id)),h.items.length>3&&t.jsxs(gr,{completed:!1,children:["... and ",h.items.length-3," more items"]}),h.items.length===0&&t.jsx(gr,{completed:!1,children:"No items yet"})]}),t.jsxs(Dm,{children:["Created ",g(h.createdAt),h.updatedAt!==h.createdAt&&" (updated)"]})]},h.id)})})]})},xr=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,Nm=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Im=s(k)`
  margin-right: ${e=>e.theme.spacing.md};
`,Mm=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Pm=s.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Bm=s.span`
  background-color: ${e=>{switch(e.type){case"boat":return e.theme.colors.primary.anakiwa;default:return e.theme.colors.primary.neonCarrot}}};
  color: ${e=>e.theme.colors.text.inverse};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Om=s.div`
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
`,Um=s.div`
  background-color: ${e=>e.theme.colors.surface.medium};
  border-radius: ${e=>e.theme.borderRadius.pill};
  height: 12px;
  overflow: hidden;
  margin-bottom: ${e=>e.theme.spacing.lg};
`,qm=s.div`
  background-color: ${e=>e.theme.colors.primary.neonCarrot};
  height: 100%;
  width: ${e=>e.percentage}%;
  transition: width ${e=>e.theme.animation.normal} ease;
`,Hm=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Vm=s.input`
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
`,Wm=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Gm=s.div`
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
`,Km=s.button`
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
`,Jm=s.div`
  flex: 1;
  color: ${e=>e.completed?e.theme.colors.text.muted:e.theme.colors.text.primary};
  text-decoration: ${e=>e.completed?"line-through":"none"};
  font-size: ${e=>e.theme.typography.fontSize.md};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
`,Qm=s.div`
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  text-align: right;
  min-width: 120px;
`,Gn=s.div`
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
`,Kn=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${e=>e.theme.spacing.lg};
`,Zm=s(k)`
  background-color: ${e=>e.theme.colors.status.error};
  border-color: ${e=>e.theme.colors.status.error};
  
  &:hover {
    background-color: ${e=>e.theme.colors.status.error}CC;
  }
`,_m=()=>{const e=Y(),{id:r}=ye(),[n,o]=C.useState(""),{data:a,isLoading:i}=gm(r||""),{data:l}=te(),c=fm(),u=ym(),m=os(),p=()=>{e("/todos")},j=async f=>{if(f.preventDefault(),!(!n.trim()||!r))try{await c.mutateAsync({listId:r,content:n.trim()}),o("")}catch(w){console.error("Failed to add item:",w)}},v=async f=>{try{await u.mutateAsync(f)}catch(w){console.error("Failed to toggle item:",w)}},g=async()=>{if(r&&window.confirm("Are you sure you want to delete this to-do list? All items will be permanently removed."))try{await m.mutateAsync(r),e("/todos")}catch(f){console.error("Failed to delete to-do list:",f)}},d=f=>new Date(f).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),y=f=>{if(!f||!l)return null;const w=l.find(D=>D.id===f);return w==null?void 0:w.name},h=()=>{if(!a)return{totalItems:0,completedItems:0,percentage:0};const f=a.items.length,w=a.items.filter(T=>T.completed).length,D=f>0?w/f*100:0;return{totalItems:f,completedItems:w,percentage:D}};if(i)return t.jsxs(xr,{children:[t.jsx(I,{level:1,children:"Loading To-Do List"}),t.jsx(F,{title:"Loading",children:t.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading to-do list..."})})]});if(!a)return t.jsxs(xr,{children:[t.jsx(I,{level:1,children:"To-Do List Not Found"}),t.jsxs(F,{children:[t.jsxs(Gn,{children:[t.jsx("div",{className:"empty-icon",children:"❌"}),t.jsx("div",{className:"empty-title",children:"List Not Found"}),t.jsx("div",{children:"The requested to-do list could not be found."})]}),t.jsx(Kn,{children:t.jsx(k,{onClick:p,children:"Back to Lists"})})]})]});const x=h(),b=y(a.boatId);return t.jsxs(xr,{children:[t.jsx(Nm,{children:t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx(Im,{onClick:p,children:"← Back"}),t.jsx(I,{level:1,children:a.title})]})}),t.jsx(Mm,{children:t.jsxs(Pm,{children:[t.jsxs(Bm,{type:a.type,children:[a.type,b&&` - ${b}`]}),t.jsxs("span",{children:["Created ",d(a.createdAt)]}),a.updatedAt!==a.createdAt&&t.jsxs("span",{children:["• Updated ",d(a.updatedAt)]})]})}),t.jsxs(Om,{children:[t.jsxs($t,{children:[t.jsx(vt,{children:x.totalItems}),t.jsx(wt,{children:"Total Items"})]}),t.jsxs($t,{children:[t.jsx(vt,{children:x.completedItems}),t.jsx(wt,{children:"Completed"})]}),t.jsxs($t,{children:[t.jsx(vt,{children:x.totalItems-x.completedItems}),t.jsx(wt,{children:"Remaining"})]}),t.jsxs($t,{children:[t.jsxs(vt,{children:[Math.round(x.percentage),"%"]}),t.jsx(wt,{children:"Progress"})]})]}),t.jsx(Um,{children:t.jsx(qm,{percentage:x.percentage})}),t.jsx(F,{title:"Add New Item",variant:"secondary",children:t.jsx("form",{onSubmit:j,children:t.jsxs(Hm,{children:[t.jsx(Vm,{type:"text",placeholder:"Enter new to-do item...",value:n,onChange:f=>o(f.target.value),disabled:c.isPending}),t.jsx(k,{type:"submit",disabled:!n.trim()||c.isPending,children:c.isPending?"Adding...":"Add Item"})]})})}),t.jsx(F,{title:`Items (${x.totalItems})`,children:a.items.length===0?t.jsxs(Gn,{children:[t.jsx("div",{className:"empty-icon",children:"📝"}),t.jsx("div",{className:"empty-title",children:"No Items Yet"}),t.jsx("div",{children:"Add your first to-do item to get started."})]}):t.jsx(Wm,{children:a.items.map(f=>t.jsxs(Gm,{completed:f.completed,children:[t.jsx(Km,{completed:f.completed,onClick:()=>v(f.id),disabled:u.isPending,children:f.completed&&"✓"}),t.jsx(Jm,{completed:f.completed,children:f.content}),t.jsx(Qm,{children:f.completed&&f.completedAt?`Completed ${d(f.completedAt)}`:`Added ${d(f.createdAt)}`})]},f.id))})}),t.jsx(Kn,{children:t.jsx(Zm,{onClick:g,children:"Delete List"})})]})},Ym=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 600px;
  margin: 0 auto;
`,Xm=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,eh=s(k)`
  margin-right: ${e=>e.theme.spacing.md};
`,th=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,fr=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,yr=s.label`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,rh=s.input`
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
`,Jn=s.select`
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
`,Qn=s.div`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  margin-top: ${e=>e.theme.spacing.xs};
  padding: ${e=>e.theme.spacing.sm};
  background-color: ${e=>e.theme.colors.surface.medium};
  border-radius: ${e=>e.theme.borderRadius.sm};
  border-left: 4px solid ${e=>e.theme.colors.primary.anakiwa};
`,nh=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${e=>e.theme.spacing.lg};
`,oh=s.div`
  color: ${e=>e.theme.colors.status.error};
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.status.error};
  padding: ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.borderRadius.md};
  margin-bottom: ${e=>e.theme.spacing.md};
`,sh=()=>{const e=Y(),[r,n]=C.useState(""),[o,a]=C.useState("general"),[i,l]=C.useState(""),[c,u]=C.useState(""),{data:m}=te(),p=xm(),j=()=>{e("/todos")},v=async d=>{if(d.preventDefault(),u(""),!r.trim()){u("Please enter a title for the to-do list.");return}if(o==="boat"&&!i){u("Please select a boat for boat-specific lists.");return}try{const y=await p.mutateAsync({title:r.trim(),type:o,boatId:o==="boat"?i:void 0});e(`/todos/${y.id}`)}catch(y){console.error("Failed to create to-do list:",y),u(y.message||"Failed to create to-do list. Please try again.")}},g=()=>{switch(o){case"general":return"General lists are not associated with any specific boat and can contain any type of tasks.";case"boat":return"Boat-specific lists are associated with a particular boat and typically contain maintenance, preparation, or boat-related tasks.";default:return""}};return t.jsxs(Ym,{children:[t.jsx(Xm,{children:t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx(eh,{onClick:j,children:"← Back"}),t.jsx(I,{level:1,children:"Create New To-Do List"})]})}),t.jsxs(F,{title:"List Details",children:[c&&t.jsx(oh,{children:c}),t.jsx("form",{onSubmit:v,children:t.jsxs(th,{children:[t.jsxs(fr,{children:[t.jsx(yr,{htmlFor:"title",children:"List Title *"}),t.jsx(rh,{id:"title",type:"text",placeholder:"Enter a descriptive title for your to-do list...",value:r,onChange:d=>n(d.target.value),maxLength:100,required:!0})]}),t.jsxs(fr,{children:[t.jsx(yr,{htmlFor:"type",children:"List Type *"}),t.jsxs(Jn,{id:"type",value:o,onChange:d=>a(d.target.value),required:!0,children:[t.jsx("option",{value:"general",children:"General"}),t.jsx("option",{value:"boat",children:"Boat-Specific"})]}),t.jsx(Qn,{children:g()})]}),o==="boat"&&t.jsxs(fr,{children:[t.jsx(yr,{htmlFor:"boat",children:"Select Boat *"}),t.jsxs(Jn,{id:"boat",value:i,onChange:d=>l(d.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Choose a boat..."}),m==null?void 0:m.map(d=>t.jsx("option",{value:d.id,children:d.name},d.id))]}),(m==null?void 0:m.length)===0&&t.jsx(Qn,{children:"No boats available. You'll need to create a boat first before creating boat-specific to-do lists."})]}),t.jsxs(nh,{children:[t.jsx(k,{type:"button",variant:"secondary",onClick:j,children:"Cancel"}),t.jsx(k,{type:"submit",disabled:p.isPending||o==="boat"&&(m==null?void 0:m.length)===0,children:p.isPending?"Creating...":"Create List"})]})]})})]}),t.jsx(F,{title:"Getting Started",variant:"secondary",children:t.jsxs("div",{style:{color:"#999",fontSize:"14px",lineHeight:"1.6"},children:[t.jsx("p",{children:t.jsx("strong",{children:"Tips for creating effective to-do lists:"})}),t.jsxs("ul",{style:{marginLeft:"20px",marginTop:"10px"},children:[t.jsx("li",{children:"Use descriptive titles that clearly indicate the purpose of the list"}),t.jsx("li",{children:'Choose "General" for personal tasks, shopping lists, or general reminders'}),t.jsx("li",{children:'Choose "Boat-Specific" for maintenance tasks, pre-departure checklists, or boat projects'}),t.jsx("li",{children:"You can add items to your list immediately after creating it"})]})]})})]})};function ss(e){return _({queryKey:["maintenance-templates",e],queryFn:()=>M.getMaintenanceTemplates(e)})}function as(e,r){return _({queryKey:["maintenance-template",e],queryFn:()=>M.getMaintenanceTemplate(e),enabled:(r==null?void 0:r.enabled)!==void 0?r.enabled:!!e})}function ah(){const e=G();return Q({mutationFn:r=>M.createMaintenanceTemplate(r),onSuccess:()=>{e.invalidateQueries({queryKey:["maintenance-templates"]})}})}function ih(){const e=G();return Q({mutationFn:({id:r,data:n})=>M.updateMaintenanceTemplate(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:["maintenance-template",n]}),e.invalidateQueries({queryKey:["maintenance-templates"]})}})}function lh(){const e=G();return Q({mutationFn:r=>M.deleteMaintenanceTemplate(r),onSuccess:()=>{e.invalidateQueries({queryKey:["maintenance-templates"]}),e.invalidateQueries({queryKey:["maintenance-events"]})}})}function Zr(e){return _({queryKey:["maintenance-events","upcoming",e],queryFn:()=>M.getUpcomingMaintenanceEvents(e)})}function is(e){return _({queryKey:["maintenance-events","completed",e],queryFn:()=>M.getCompletedMaintenanceEvents(e)})}function ch(e){return _({queryKey:["maintenance-event",e],queryFn:()=>M.getMaintenanceEvent(e),enabled:!!e})}function dh(){const e=G();return Q({mutationFn:({id:r,data:n})=>M.completeMaintenanceEvent(r,n),onSuccess:()=>{e.invalidateQueries({queryKey:["maintenance-events"]})}})}const mh=s.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,hh=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,ph=s.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,br=s(k)`
  background-color: ${e=>e.active?e.theme.colors.primary.neonCarrot:e.theme.colors.primary.lilac};
  opacity: ${e=>e.active?1:.7};
`,uh=s(F)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,Zn=s.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`,_n=s(F)`
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${e=>e.theme.colors.primary.lilac}20;
  }
`,Yn=s.div`
  display: flex;
  justify-content: between;
  align-items: flex-start;
  margin-bottom: 10px;
`,Xn=s.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin: 0;
  font-size: 18px;
  flex: 1;
`,eo=s.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
`,to=s.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${e=>{switch(e.status){case"active":return e.theme.colors.primary.anakiwa;case"inactive":return e.theme.colors.text.secondary;case"due":return e.theme.colors.primary.neonCarrot;case"overdue":return"#ff4444";case"completed":return"#44ff44";default:return e.theme.colors.text.secondary}}};
  color: ${e=>e.theme.colors.background};
`,gh=s.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
`,xh=s.select`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
`;function fh(){const[e,r]=C.useState("templates"),[n,o]=C.useState(""),{data:a=[]}=te(),{data:i=[],isLoading:l}=ss(n||void 0),{data:c=[],isLoading:u}=Zr(n||void 0),{data:m=[],isLoading:p}=is(n||void 0),j=b=>{if(!b)return"One-time";const{type:f,interval:w}=b,D=w===1?f.slice(0,-1):f;return`Every ${w} ${D}`},v=b=>b?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(b):"N/A",g=b=>{if(!b)return"N/A";const f=Math.floor(b/60),w=b%60;return f>0?`${f}h ${w}m`:`${w}m`},d=b=>{if(b.completedAt)return"completed";const f=new Date(b.dueDate),w=new Date,D=Math.ceil((f.getTime()-w.getTime())/(1e3*60*60*24));return D<0?"overdue":D<=7?"due":"active"},y=()=>t.jsx(Zn,{children:i.map(b=>{var f;return t.jsx(J,{to:`/maintenance/templates/${b.id}`,style:{textDecoration:"none"},children:t.jsxs(_n,{children:[t.jsxs(Yn,{children:[t.jsx(Xn,{children:b.title}),t.jsx(to,{status:b.isActive?"active":"inactive",children:b.isActive?"Active":"Inactive"})]}),t.jsxs(eo,{children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Boat:"})," ",((f=b.boat)==null?void 0:f.name)||"Unknown"]}),b.component&&t.jsxs("div",{children:[t.jsx("strong",{children:"Component:"})," ",b.component]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Recurrence:"})," ",j(b.recurrence)]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Est. Cost:"})," ",v(b.estimatedCost)]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Est. Time:"})," ",g(b.estimatedTime)]})]}),b.description&&t.jsx("div",{style:{marginTop:"10px",fontSize:"14px",color:"#ccc"},children:b.description})]})},b.id)})}),h=(b,f=!1)=>t.jsx(Zn,{children:b.map(w=>{var D,T,R,P;return t.jsx(J,{to:`/maintenance/events/${w.id}`,style:{textDecoration:"none"},children:t.jsxs(_n,{children:[t.jsxs(Yn,{children:[t.jsx(Xn,{children:((D=w.template)==null?void 0:D.title)||"Unknown Task"}),t.jsx(to,{status:d(w),children:d(w)})]}),t.jsxs(eo,{children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Boat:"})," ",((R=(T=w.template)==null?void 0:T.boat)==null?void 0:R.name)||"Unknown"]}),((P=w.template)==null?void 0:P.component)&&t.jsxs("div",{children:[t.jsx("strong",{children:"Component:"})," ",w.template.component]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Due Date:"})," ",new Date(w.dueDate).toLocaleDateString()]}),f&&w.completedAt&&t.jsxs("div",{children:[t.jsx("strong",{children:"Completed:"})," ",new Date(w.completedAt).toLocaleDateString()]}),w.actualCost&&t.jsxs("div",{children:[t.jsx("strong",{children:"Actual Cost:"})," ",v(w.actualCost)]}),w.actualTime&&t.jsxs("div",{children:[t.jsx("strong",{children:"Actual Time:"})," ",g(w.actualTime)]})]}),w.notes&&t.jsx("div",{style:{marginTop:"10px",fontSize:"14px",color:"#ccc"},children:w.notes})]})},w.id)})}),x=l||u||p;return t.jsxs(mh,{children:[t.jsxs(oe,{children:[t.jsx(A,{label:"System Status",value:"OPERATIONAL"}),t.jsx(A,{label:"Active Templates",value:i.filter(b=>b.isActive).length.toString()}),t.jsx(A,{label:"Upcoming Events",value:c.length.toString()}),t.jsx(A,{label:"Overdue Events",value:c.filter(b=>d(b)==="overdue").length.toString()})]}),t.jsxs(hh,{children:[t.jsx(I,{children:"Maintenance Management"}),t.jsxs(gh,{children:[t.jsxs(xh,{value:n,onChange:b=>o(b.target.value),children:[t.jsx("option",{value:"",children:"All Boats"}),a.map(b=>t.jsx("option",{value:b.id,children:b.name},b.id))]}),t.jsx(J,{to:"/maintenance/templates/new",children:t.jsx(k,{children:"New Template"})})]}),t.jsxs(ph,{children:[t.jsxs(br,{active:e==="templates",onClick:()=>r("templates"),children:["Templates (",i.length,")"]}),t.jsxs(br,{active:e==="upcoming",onClick:()=>r("upcoming"),children:["Upcoming (",c.length,")"]}),t.jsxs(br,{active:e==="completed",onClick:()=>r("completed"),children:["Completed (",m.length,")"]})]}),t.jsx(uh,{children:x?t.jsx("div",{style:{textAlign:"center",padding:"40px"},children:t.jsx("div",{style:{color:"#ff9966",fontSize:"18px"},children:"Loading maintenance data..."})}):t.jsxs(t.Fragment,{children:[e==="templates"&&y(),e==="upcoming"&&h(c),e==="completed"&&h(m,!0)]})})]})]})}const jr=s.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,$r=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,vr=s(F)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,yh=s.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,bh=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,wr=s(F)`
  padding: 15px;
`,Ct=s.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin: 0 0 15px 0;
  font-size: 16px;
  text-transform: uppercase;
`,pe=s.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,ue=s.span`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
`,ge=s.span`
  color: ${e=>e.theme.colors.text.primary};
`,jh=s.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${e=>e.active?e.theme.colors.primary.anakiwa:e.theme.colors.text.secondary};
  color: ${e=>e.theme.colors.background};
`,$h=s.div`
  background-color: ${e=>e.theme.colors.background}40;
  padding: 15px;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.neonCarrot};
  margin-bottom: 20px;
  line-height: 1.5;
`,vh=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: 18px;
`,wh=s.div`
  padding: 20px;
  text-align: center;
`;function Ch(){var p,j;const{id:e}=ye(),r=Y(),{data:n,isLoading:o,error:a}=as(e),i=lh(),l=async()=>{if(!n)return;if(window.confirm(`Are you sure you want to delete the template "${n.title}"? This will also delete all future maintenance events for this template.`))try{await i.mutateAsync(n.id),r("/maintenance")}catch(g){console.error("Failed to delete template:",g),alert("Failed to delete template. Please try again.")}},c=v=>{if(!v)return"One-time";const{type:g,interval:d}=v,y=d===1?g.slice(0,-1):g;return`Every ${d} ${y}`},u=v=>v?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(v):"Not specified",m=v=>{if(!v)return"Not specified";const g=Math.floor(v/60),d=v%60;return g>0?`${g}h ${d}m`:`${d}m`};return o?t.jsxs(jr,{children:[t.jsx(oe,{children:t.jsx(A,{label:"Status",value:"LOADING"})}),t.jsxs($r,{children:[t.jsx(I,{children:"Maintenance Template"}),t.jsx(vr,{children:t.jsx(vh,{children:"Loading template details..."})})]})]}):a||!n?t.jsxs(jr,{children:[t.jsx(oe,{children:t.jsx(A,{label:"Status",value:"ERROR"})}),t.jsxs($r,{children:[t.jsx(I,{children:"Maintenance Template"}),t.jsx(vr,{children:t.jsxs(wh,{children:[t.jsx(he,{type:"error",children:"Template not found or failed to load."}),t.jsx(J,{to:"/maintenance",children:t.jsx(k,{children:"Back to Maintenance"})})]})})]})]}):t.jsxs(jr,{children:[t.jsxs(oe,{children:[t.jsx(A,{label:"Template Status",value:n.isActive?"ACTIVE":"INACTIVE"}),t.jsx(A,{label:"Boat",value:((p=n.boat)==null?void 0:p.name)||"Unknown"}),t.jsx(A,{label:"Component",value:n.component||"General"}),t.jsx(A,{label:"Recurrence",value:c(n.recurrence)})]}),t.jsxs($r,{children:[t.jsx(I,{children:n.title}),t.jsxs(yh,{children:[t.jsx(J,{to:"/maintenance",children:t.jsx(k,{children:"Back to List"})}),t.jsx(J,{to:`/maintenance/templates/${n.id}/edit`,children:t.jsx(k,{children:"Edit Template"})}),t.jsx(k,{onClick:l,disabled:i.isPending,variant:"danger",children:i.isPending?"Deleting...":"Delete Template"})]}),t.jsxs(vr,{children:[n.description&&t.jsxs($h,{children:[t.jsx("strong",{children:"Description:"}),t.jsx("br",{}),n.description]}),t.jsxs(bh,{children:[t.jsxs(wr,{children:[t.jsx(Ct,{children:"Basic Information"}),t.jsxs(pe,{children:[t.jsx(ue,{children:"Title:"}),t.jsx(ge,{children:n.title})]}),t.jsxs(pe,{children:[t.jsx(ue,{children:"Boat:"}),t.jsx(ge,{children:((j=n.boat)==null?void 0:j.name)||"Unknown"})]}),t.jsxs(pe,{children:[t.jsx(ue,{children:"Component:"}),t.jsx(ge,{children:n.component||"General"})]}),t.jsxs(pe,{children:[t.jsx(ue,{children:"Status:"}),t.jsx(ge,{children:t.jsx(jh,{active:n.isActive,children:n.isActive?"Active":"Inactive"})})]})]}),t.jsxs(wr,{children:[t.jsx(Ct,{children:"Schedule & Estimates"}),t.jsxs(pe,{children:[t.jsx(ue,{children:"Recurrence:"}),t.jsx(ge,{children:c(n.recurrence)})]}),t.jsxs(pe,{children:[t.jsx(ue,{children:"Estimated Cost:"}),t.jsx(ge,{children:u(n.estimatedCost)})]}),t.jsxs(pe,{children:[t.jsx(ue,{children:"Estimated Time:"}),t.jsx(ge,{children:m(n.estimatedTime)})]})]}),t.jsxs(wr,{children:[t.jsx(Ct,{children:"Timestamps"}),t.jsxs(pe,{children:[t.jsx(ue,{children:"Created:"}),t.jsx(ge,{children:new Date(n.createdAt).toLocaleString()})]}),t.jsxs(pe,{children:[t.jsx(ue,{children:"Updated:"}),t.jsx(ge,{children:new Date(n.updatedAt).toLocaleString()})]})]})]}),t.jsxs("div",{style:{marginTop:"30px"},children:[t.jsx(Ct,{children:"Related Events"}),t.jsx("p",{style:{color:"#ccc",marginBottom:"20px"},children:"View upcoming and completed maintenance events generated from this template."}),t.jsxs("div",{style:{display:"flex",gap:"10px"},children:[t.jsx(J,{to:`/maintenance?tab=upcoming&template=${n.id}`,children:t.jsx(k,{children:"View Upcoming Events"})}),t.jsx(J,{to:`/maintenance?tab=completed&template=${n.id}`,children:t.jsx(k,{children:"View Completed Events"})})]})]})]})]})]})}const Cr=s.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,Sr=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,kr=s(F)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,Sh=s.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,kh=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,Tr=s(F)`
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
`,Th=s.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${e=>{switch(e.status){case"completed":return"#44ff44";case"overdue":return"#ff4444";case"due":return e.theme.colors.primary.neonCarrot;case"upcoming":return e.theme.colors.primary.anakiwa;default:return e.theme.colors.text.secondary}}};
  color: ${e=>e.theme.colors.background};
`,Ah=s.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${e=>e.theme.colors.background}40;
  padding: 20px;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.neonCarrot};
`,Ar=s.div`
  display: flex;
  gap: 15px;
  align-items: center;
`,Er=s.label`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
  min-width: 120px;
`,ro=s.input`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  flex: 1;
`,Eh=s.textarea`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  flex: 1;
`,Lh=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: 18px;
`,Fh=s.div`
  padding: 20px;
  text-align: center;
`,Dh=s.div`
  background-color: ${e=>e.theme.colors.background}40;
  padding: 15px;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.lilac};
  margin-bottom: 20px;
  line-height: 1.5;
`;function zh(){var h,x,b,f,w,D,T,R,P,E,S;const{id:e}=ye(),[r,n]=C.useState(!1),[o,a]=C.useState({actualCost:"",actualTime:"",notes:""}),{data:i,isLoading:l,error:c}=ch(e),u=dh(),m=z=>{if(z.completedAt)return"completed";const O=new Date(z.dueDate),q=new Date,V=Math.ceil((O.getTime()-q.getTime())/(1e3*60*60*24));return V<0?"overdue":V<=7?"due":"upcoming"},p=z=>z?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(z):"Not specified",j=z=>{if(!z)return"Not specified";const O=Math.floor(z/60),q=z%60;return O>0?`${O}h ${q}m`:`${q}m`},v=z=>{if(!z)return"One-time";const{type:O,interval:q}=z,V=q===1?O.slice(0,-1):O;return`Every ${q} ${V}`},g=async z=>{if(z.preventDefault(),!!i)try{const O={};o.actualCost&&(O.actualCost=parseFloat(o.actualCost)),o.actualTime&&(O.actualTime=parseInt(o.actualTime)),o.notes&&(O.notes=o.notes),await u.mutateAsync({id:i.id,data:O}),n(!1)}catch(O){console.error("Failed to complete event:",O),alert("Failed to complete maintenance event. Please try again.")}};if(l)return t.jsxs(Cr,{children:[t.jsx(oe,{children:t.jsx(A,{label:"Status",value:"LOADING"})}),t.jsxs(Sr,{children:[t.jsx(I,{children:"Maintenance Event"}),t.jsx(kr,{children:t.jsx(Lh,{children:"Loading event details..."})})]})]});if(c||!i)return t.jsxs(Cr,{children:[t.jsx(oe,{children:t.jsx(A,{label:"Status",value:"ERROR"})}),t.jsxs(Sr,{children:[t.jsx(I,{children:"Maintenance Event"}),t.jsx(kr,{children:t.jsxs(Fh,{children:[t.jsx(he,{type:"error",children:"Event not found or failed to load."}),t.jsx(J,{to:"/maintenance",children:t.jsx(k,{children:"Back to Maintenance"})})]})})]})]});const d=m(i),y=!!i.completedAt;return t.jsxs(Cr,{children:[t.jsxs(oe,{children:[t.jsx(A,{label:"Event Status",value:d.toUpperCase()}),t.jsx(A,{label:"Boat",value:((x=(h=i.template)==null?void 0:h.boat)==null?void 0:x.name)||"Unknown"}),t.jsx(A,{label:"Due Date",value:new Date(i.dueDate).toLocaleDateString()}),y&&t.jsx(A,{label:"Completed",value:new Date(i.completedAt).toLocaleDateString()})]}),t.jsxs(Sr,{children:[t.jsx(I,{children:((b=i.template)==null?void 0:b.title)||"Maintenance Event"}),t.jsxs(Sh,{children:[t.jsx(J,{to:"/maintenance",children:t.jsx(k,{children:"Back to List"})}),i.template&&t.jsx(J,{to:`/maintenance/templates/${i.template.id}`,children:t.jsx(k,{children:"View Template"})}),!y&&t.jsx(k,{onClick:()=>n(!r),variant:"accent",children:r?"Cancel Completion":"Complete Event"})]}),t.jsxs(kr,{children:[t.jsx("div",{style:{marginBottom:"20px"},children:t.jsx(Th,{status:d,children:d.toUpperCase()})}),((f=i.template)==null?void 0:f.description)&&t.jsxs(Dh,{children:[t.jsx("strong",{children:"Template Description:"}),t.jsx("br",{}),i.template.description]}),r&&!y&&t.jsxs(Ah,{onSubmit:g,children:[t.jsx(St,{children:"Complete Maintenance Event"}),t.jsxs(Ar,{children:[t.jsx(Er,{children:"Actual Cost ($):"}),t.jsx(ro,{type:"number",step:"0.01",value:o.actualCost,onChange:z=>a(O=>({...O,actualCost:z.target.value})),placeholder:"Enter actual cost"})]}),t.jsxs(Ar,{children:[t.jsx(Er,{children:"Actual Time (minutes):"}),t.jsx(ro,{type:"number",value:o.actualTime,onChange:z=>a(O=>({...O,actualTime:z.target.value})),placeholder:"Enter time in minutes"})]}),t.jsxs(Ar,{children:[t.jsx(Er,{children:"Notes:"}),t.jsx(Eh,{value:o.notes,onChange:z=>a(O=>({...O,notes:z.target.value})),placeholder:"Enter completion notes, observations, or issues encountered"})]}),t.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[t.jsx(k,{type:"button",onClick:()=>n(!1),children:"Cancel"}),t.jsx(k,{type:"submit",disabled:u.isPending,variant:"accent",children:u.isPending?"Completing...":"Complete Event"})]})]}),t.jsxs(kh,{children:[t.jsxs(Tr,{children:[t.jsx(St,{children:"Event Information"}),t.jsxs(ce,{children:[t.jsx(ne,{children:"Title:"}),t.jsx(de,{children:((w=i.template)==null?void 0:w.title)||"Unknown"})]}),t.jsxs(ce,{children:[t.jsx(ne,{children:"Boat:"}),t.jsx(de,{children:((T=(D=i.template)==null?void 0:D.boat)==null?void 0:T.name)||"Unknown"})]}),t.jsxs(ce,{children:[t.jsx(ne,{children:"Component:"}),t.jsx(de,{children:((R=i.template)==null?void 0:R.component)||"General"})]}),t.jsxs(ce,{children:[t.jsx(ne,{children:"Due Date:"}),t.jsx(de,{children:new Date(i.dueDate).toLocaleDateString()})]}),y&&t.jsxs(ce,{children:[t.jsx(ne,{children:"Completed:"}),t.jsx(de,{children:new Date(i.completedAt).toLocaleDateString()})]})]}),t.jsxs(Tr,{children:[t.jsx(St,{children:"Template Information"}),t.jsxs(ce,{children:[t.jsx(ne,{children:"Recurrence:"}),t.jsx(de,{children:v((P=i.template)==null?void 0:P.recurrence)})]}),t.jsxs(ce,{children:[t.jsx(ne,{children:"Est. Cost:"}),t.jsx(de,{children:p((E=i.template)==null?void 0:E.estimatedCost)})]}),t.jsxs(ce,{children:[t.jsx(ne,{children:"Est. Time:"}),t.jsx(de,{children:j((S=i.template)==null?void 0:S.estimatedTime)})]})]}),y&&t.jsxs(Tr,{children:[t.jsx(St,{children:"Completion Details"}),t.jsxs(ce,{children:[t.jsx(ne,{children:"Actual Cost:"}),t.jsx(de,{children:p(i.actualCost)})]}),t.jsxs(ce,{children:[t.jsx(ne,{children:"Actual Time:"}),t.jsx(de,{children:j(i.actualTime)})]}),i.notes&&t.jsxs("div",{style:{marginTop:"15px"},children:[t.jsx(ne,{style:{display:"block",marginBottom:"5px"},children:"Notes:"}),t.jsx("div",{style:{backgroundColor:"#333",padding:"10px",borderRadius:"4px",whiteSpace:"pre-wrap"},children:i.notes})]})]})]})]})]})]})}const Lr=s.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,Fr=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,Dr=s(F)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,Rh=s.form`
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
`,xe=s.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
`,fe=s.label`
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
`,no=s.select`
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
`,Nh=s.textarea`
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
`,oo=s.input`
  margin-right: 8px;
`,Ih=s.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex: 1;
`,Mh=s.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding-top: 20px;
  border-top: 1px solid ${e=>e.theme.colors.primary.neonCarrot}40;
`,Ph=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: 18px;
`,Bh=s.div`
  padding: 20px;
  text-align: center;
`;function so(){const{id:e}=ye(),r=Y(),n=!!e,[o,a]=C.useState({boatId:"",title:"",description:"",component:"",hasRecurrence:!1,recurrenceType:"days",recurrenceInterval:"30",estimatedCost:"",estimatedTime:"",isActive:!0}),{data:i=[]}=te(),{data:l,isLoading:c}=as(e,{enabled:n}),u=ah(),m=ih();C.useEffect(()=>{var g,d,y,h,x;l&&n&&a({boatId:l.boatId,title:l.title,description:l.description||"",component:l.component||"",hasRecurrence:!!l.recurrence,recurrenceType:((g=l.recurrence)==null?void 0:g.type)||"days",recurrenceInterval:((y=(d=l.recurrence)==null?void 0:d.interval)==null?void 0:y.toString())||"30",estimatedCost:((h=l.estimatedCost)==null?void 0:h.toString())||"",estimatedTime:((x=l.estimatedTime)==null?void 0:x.toString())||"",isActive:l.isActive})},[l,n]);const p=async g=>{if(g.preventDefault(),!o.boatId||!o.title){alert("Please fill in all required fields (Boat and Title)");return}try{const d={boatId:o.boatId,title:o.title,description:o.description||void 0,component:o.component||void 0,estimatedCost:o.estimatedCost?parseFloat(o.estimatedCost):void 0,estimatedTime:o.estimatedTime?parseInt(o.estimatedTime):void 0};o.hasRecurrence&&(d.recurrence={type:o.recurrenceType,interval:parseInt(o.recurrenceInterval)}),n?(d.isActive=o.isActive,await m.mutateAsync({id:e,data:d})):await u.mutateAsync(d),r("/maintenance")}catch(d){console.error("Failed to save template:",d),alert("Failed to save maintenance template. Please try again.")}},j=(g,d)=>{a(y=>({...y,[g]:d}))};if(n&&c)return t.jsxs(Lr,{children:[t.jsx(oe,{children:t.jsx(A,{label:"Status",value:"LOADING"})}),t.jsxs(Fr,{children:[t.jsx(I,{children:"Edit Maintenance Template"}),t.jsx(Dr,{children:t.jsx(Ph,{children:"Loading template..."})})]})]});if(n&&!l)return t.jsxs(Lr,{children:[t.jsx(oe,{children:t.jsx(A,{label:"Status",value:"ERROR"})}),t.jsxs(Fr,{children:[t.jsx(I,{children:"Edit Maintenance Template"}),t.jsx(Dr,{children:t.jsxs(Bh,{children:[t.jsx(he,{type:"error",children:"Template not found."}),t.jsx(J,{to:"/maintenance",children:t.jsx(k,{children:"Back to Maintenance"})})]})})]})]});const v=u.isPending||m.isPending;return t.jsxs(Lr,{children:[t.jsxs(oe,{children:[t.jsx(A,{label:"Mode",value:n?"EDIT":"CREATE"}),t.jsx(A,{label:"Boats Available",value:i.length.toString()}),n&&l&&t.jsx(A,{label:"Template Status",value:l.isActive?"ACTIVE":"INACTIVE"})]}),t.jsxs(Fr,{children:[t.jsx(I,{children:n?"Edit Maintenance Template":"Create Maintenance Template"}),t.jsx(Dr,{children:t.jsxs(Rh,{onSubmit:p,children:[t.jsxs(kt,{children:[t.jsx(Tt,{children:"Basic Information"}),t.jsxs(xe,{children:[t.jsx(fe,{children:"Boat *"}),t.jsxs(no,{value:o.boatId,onChange:g=>j("boatId",g.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Select a boat"}),i.map(g=>t.jsx("option",{value:g.id,children:g.name},g.id))]})]}),t.jsxs(xe,{children:[t.jsx(fe,{children:"Title *"}),t.jsx(at,{type:"text",value:o.title,onChange:g=>j("title",g.target.value),placeholder:"e.g., Oil Change, Hull Cleaning, Engine Service",required:!0})]}),t.jsxs(xe,{children:[t.jsx(fe,{children:"Component"}),t.jsx(at,{type:"text",value:o.component,onChange:g=>j("component",g.target.value),placeholder:"e.g., Engine, Hull, Electrical, Plumbing"})]}),t.jsxs(xe,{children:[t.jsx(fe,{children:"Description"}),t.jsx(Nh,{value:o.description,onChange:g=>j("description",g.target.value),placeholder:"Detailed description of the maintenance task, including any special instructions or requirements"})]})]}),t.jsxs(kt,{children:[t.jsx(Tt,{children:"Schedule"}),t.jsxs(xe,{children:[t.jsx(fe,{children:"Recurring Task"}),t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx(oo,{type:"checkbox",checked:o.hasRecurrence,onChange:g=>j("hasRecurrence",g.target.checked)}),t.jsx("span",{children:"This is a recurring maintenance task"})]})]}),o.hasRecurrence&&t.jsxs(xe,{children:[t.jsx(fe,{children:"Recurrence"}),t.jsxs(Ih,{children:[t.jsx("span",{children:"Every"}),t.jsx(at,{type:"number",min:"1",value:o.recurrenceInterval,onChange:g=>j("recurrenceInterval",g.target.value),style:{width:"80px",flex:"none"}}),t.jsxs(no,{value:o.recurrenceType,onChange:g=>j("recurrenceType",g.target.value),style:{flex:"none",minWidth:"120px"},children:[t.jsx("option",{value:"days",children:"Days"}),t.jsx("option",{value:"weeks",children:"Weeks"}),t.jsx("option",{value:"months",children:"Months"}),t.jsx("option",{value:"years",children:"Years"}),t.jsx("option",{value:"engine_hours",children:"Engine Hours"})]})]})]})]}),t.jsxs(kt,{children:[t.jsx(Tt,{children:"Estimates"}),t.jsxs(xe,{children:[t.jsx(fe,{children:"Estimated Cost ($)"}),t.jsx(at,{type:"number",step:"0.01",min:"0",value:o.estimatedCost,onChange:g=>j("estimatedCost",g.target.value),placeholder:"0.00"})]}),t.jsxs(xe,{children:[t.jsx(fe,{children:"Estimated Time (minutes)"}),t.jsx(at,{type:"number",min:"0",value:o.estimatedTime,onChange:g=>j("estimatedTime",g.target.value),placeholder:"60"})]})]}),n&&t.jsxs(kt,{children:[t.jsx(Tt,{children:"Status"}),t.jsxs(xe,{children:[t.jsx(fe,{children:"Template Status"}),t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx(oo,{type:"checkbox",checked:o.isActive,onChange:g=>j("isActive",g.target.checked)}),t.jsx("span",{children:"Template is active (generates future events)"})]})]})]}),t.jsxs(Mh,{children:[t.jsx(J,{to:"/maintenance",children:t.jsx(k,{type:"button",children:"Cancel"})}),t.jsx(k,{type:"submit",disabled:v,variant:"accent",children:v?"Saving...":n?"Update Template":"Create Template"})]})]})})]})]})}const ke={all:["locations"],lists:()=>[...ke.all,"list"],list:e=>[...ke.lists(),{filters:e}],details:()=>[...ke.all,"detail"],detail:e=>[...ke.details(),e],nearby:(e,r,n)=>[...ke.all,"nearby",{lat:e,lng:r,radius:n}]},Oh=e=>_({queryKey:ke.list(e||{}),queryFn:()=>M.getMarkedLocations(e)}),Uh=()=>{const e=G();return Q({mutationFn:r=>M.createMarkedLocation(r),onSuccess:()=>{e.invalidateQueries({queryKey:ke.lists()})}})},qh=()=>{const e=G();return Q({mutationFn:r=>M.deleteMarkedLocation(r),onSuccess:()=>{e.invalidateQueries({queryKey:ke.lists()})}})},Hh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",Vh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg==",Wh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC";delete Be.Icon.Default.prototype._getIconUrl;Be.Icon.Default.mergeOptions({iconRetinaUrl:Vh,iconUrl:Hh,shadowUrl:Wh});const Gh=s.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px); // Account for header and footer
  gap: ${e=>e.theme.spacing.md};
`,Kh=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.md};
`,Jh=s.div`
  flex: 1;
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  min-height: 600px;
`,Qh=s(F)`
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
`,Zh=s(F)`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
`,_h=s.div`
  max-height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Yh=s.div`
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
`,Xh=s.div`
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
`,ep=s.div`
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
`,tp=e=>{const r={fishing:"#66FF66",marina:"#6688CC",anchorage:"#FFFF66",hazard:"#FF6666",other:"#CC99CC"};return new Be.DivIcon({html:`<div style="
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
    ">${e.charAt(0).toUpperCase()}</div>`,className:"custom-marker",iconSize:[20,20],iconAnchor:[10,10]})},rp=({onMapClick:e})=>(xs({click:r=>{e(r.latlng.lat,r.latlng.lng)}}),null),np=()=>{const[e,r]=C.useState(!0),[n,o]=C.useState(!0),[a,i]=C.useState(""),[l,c]=C.useState(!1),[u,m]=C.useState({name:"",category:"other",notes:"",latitude:0,longitude:0}),[p,j]=C.useState(null),v=C.useRef(null),{data:g=[],isLoading:d}=Te(),{data:y=[],isLoading:h}=Oh(a?{category:a}:void 0),x=Uh(),b=qh(),f=Ie.useMemo(()=>{if(g.length>0){const E=g.flatMap(S=>S.gpsPoints);if(E.length>0){const S=E.reduce((O,q)=>O+q.latitude,0)/E.length,z=E.reduce((O,q)=>O+q.longitude,0)/E.length;return[S,z]}}return[37.7749,-122.4194]},[g]),w=C.useCallback((E,S)=>{l&&m(z=>({...z,latitude:E,longitude:S}))},[l]),D=async()=>{if(!(!u.name||!u.latitude||!u.longitude))try{await x.mutateAsync({name:u.name,latitude:u.latitude,longitude:u.longitude,category:u.category,notes:u.notes||void 0}),m({name:"",category:"other",notes:"",latitude:0,longitude:0}),c(!1)}catch(E){console.error("Failed to create location:",E)}},T=async E=>{if(window.confirm("Are you sure you want to delete this location?"))try{await b.mutateAsync(E),j(null)}catch(S){console.error("Failed to delete location:",S)}},R=()=>e?g.map(E=>{var q,V,N;if(E.gpsPoints.length<2)return null;const S=E.gpsPoints.map(H=>[H.latitude,H.longitude]),z=S[0],O=S[S.length-1];return t.jsxs(Ie.Fragment,{children:[t.jsx(fo,{positions:S,color:"#FF9966",weight:3,opacity:.7}),t.jsx(Ce,{position:z,children:t.jsx(Se,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"Trip Start"}),t.jsx("br",{}),new Date(E.startTime).toLocaleString(),t.jsx("br",{}),"Boat: ",E.boatId]})})}),t.jsx(Ce,{position:O,children:t.jsx(Se,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"Trip End"}),t.jsx("br",{}),new Date(E.endTime).toLocaleString(),t.jsx("br",{}),"Duration: ",Math.round((((q=E.statistics)==null?void 0:q.durationSeconds)||0)/60)," minutes",t.jsx("br",{}),"Distance: ",((((V=E.statistics)==null?void 0:V.distanceMeters)||0)/1e3).toFixed(2)," km"]})})}),(((N=E.statistics)==null?void 0:N.stopPoints)||[]).map((H,Oe)=>t.jsx(Ce,{position:[H.latitude,H.longitude],icon:new Be.DivIcon({html:`<div style="
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
                ">S</div>`,className:"stop-marker",iconSize:[16,16],iconAnchor:[8,8]}),children:t.jsx(Se,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"Stop Point"}),t.jsx("br",{}),"Duration: ",Math.round(H.durationSeconds/60)," minutes",t.jsx("br",{}),"From: ",new Date(H.startTime).toLocaleString(),t.jsx("br",{}),"To: ",new Date(H.endTime).toLocaleString()]})})},`${E.id}-stop-${Oe}`))]},E.id)}):null,P=()=>n?y.map(E=>t.jsx(Ce,{position:[E.latitude,E.longitude],icon:tp(E.category),eventHandlers:{click:()=>j(E)},children:t.jsx(Se,{children:t.jsxs("div",{children:[t.jsx("strong",{children:E.name}),t.jsx("br",{}),"Category: ",E.category,t.jsx("br",{}),E.notes&&t.jsxs(t.Fragment,{children:["Notes: ",E.notes,t.jsx("br",{})]}),E.tags.length>0&&t.jsxs(t.Fragment,{children:["Tags: ",E.tags.join(", "),t.jsx("br",{})]}),t.jsxs("small",{children:["Created: ",new Date(E.createdAt).toLocaleDateString()]})]})})},E.id)):null;return t.jsxs(Gh,{children:[t.jsx(I,{children:"Navigation Chart"}),t.jsx(Kh,{children:t.jsxs(ep,{children:[t.jsx("label",{children:"Display:"}),t.jsx(k,{variant:e?"primary":"secondary",size:"sm",onClick:()=>r(!e),children:"Trip Routes"}),t.jsx(k,{variant:n?"primary":"secondary",size:"sm",onClick:()=>o(!n),children:"Locations"}),t.jsx("label",{children:"Category:"}),t.jsxs("select",{value:a,onChange:E=>i(E.target.value),children:[t.jsx("option",{value:"",children:"All Categories"}),t.jsx("option",{value:"fishing",children:"Fishing"}),t.jsx("option",{value:"marina",children:"Marina"}),t.jsx("option",{value:"anchorage",children:"Anchorage"}),t.jsx("option",{value:"hazard",children:"Hazard"}),t.jsx("option",{value:"other",children:"Other"})]})]})}),t.jsxs(Jh,{children:[t.jsx(Qh,{title:"Chart Display",padding:"none",children:t.jsxs(yo,{center:f,zoom:10,style:{height:"100%",width:"100%"},ref:v,children:[t.jsx(xo,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.jsx(rp,{onMapClick:w}),R(),P(),l&&u.latitude&&u.longitude&&t.jsx(Ce,{position:[u.latitude,u.longitude],children:t.jsx(Se,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"New Location"}),t.jsx("br",{}),'Click "Save Location" to confirm']})})})]})}),t.jsx(Zh,{title:"Location Manager",variant:"secondary",children:l?t.jsxs(Xh,{children:[t.jsx("h3",{children:"Add New Location"}),t.jsx("p",{children:"Click on the map to set coordinates, then fill in the details below."}),t.jsx("input",{type:"text",placeholder:"Location Name",value:u.name,onChange:E=>m(S=>({...S,name:E.target.value}))}),t.jsxs("select",{value:u.category,onChange:E=>m(S=>({...S,category:E.target.value})),children:[t.jsx("option",{value:"fishing",children:"Fishing Spot"}),t.jsx("option",{value:"marina",children:"Marina"}),t.jsx("option",{value:"anchorage",children:"Anchorage"}),t.jsx("option",{value:"hazard",children:"Hazard"}),t.jsx("option",{value:"other",children:"Other"})]}),t.jsx("textarea",{placeholder:"Notes (optional)",value:u.notes,onChange:E=>m(S=>({...S,notes:E.target.value}))}),u.latitude&&u.longitude&&t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#FF9966",marginBottom:"8px"},children:"Coordinates"}),t.jsxs("div",{style:{padding:"12px",backgroundColor:"#222222",borderRadius:"4px",border:"1px solid #333333",fontFamily:"monospace"},children:["Lat: ",u.latitude.toFixed(6),t.jsx("br",{}),"Lng: ",u.longitude.toFixed(6)]})]}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(k,{onClick:D,disabled:!u.name||!u.latitude||!u.longitude||x.isPending,children:"Save Location"}),t.jsx(k,{variant:"secondary",onClick:()=>{c(!1),m({name:"",category:"other",notes:"",latitude:0,longitude:0})},children:"Cancel"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx(k,{onClick:()=>c(!0),disabled:x.isPending,children:"Add New Location"}),p&&t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#FF9966",marginBottom:"8px"},children:"Selected Location"}),t.jsxs("div",{style:{padding:"12px",backgroundColor:"#222222",borderRadius:"4px",border:"1px solid #333333"},children:[t.jsx("strong",{children:p.name}),t.jsx("br",{}),"Category: ",p.category,t.jsx("br",{}),"Coordinates: ",p.latitude.toFixed(6),", ",p.longitude.toFixed(6),t.jsx("br",{}),p.notes&&t.jsxs(t.Fragment,{children:["Notes: ",p.notes,t.jsx("br",{})]}),p.tags.length>0&&t.jsxs(t.Fragment,{children:["Tags: ",p.tags.join(", "),t.jsx("br",{})]}),t.jsx("div",{style:{marginTop:"8px"},children:t.jsx(k,{size:"sm",variant:"accent",onClick:()=>T(p.id),disabled:b.isPending,children:"Delete"})})]})]}),t.jsx(_h,{children:y.map(E=>t.jsxs(Yh,{children:[t.jsx("div",{className:"location-name",children:E.name}),t.jsx("div",{className:"location-category",children:E.category}),E.notes&&t.jsx("div",{className:"location-notes",children:E.notes}),t.jsx("div",{className:"location-actions",children:t.jsx(k,{size:"sm",onClick:()=>{j(E),v.current&&v.current.setView([E.latitude,E.longitude],15)},children:"View"})})]},E.id))})]})})]}),(d||h)&&t.jsx(A,{label:"System Status",value:"Loading chart data...",valueColor:"anakiwa"})]})},At=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,ao=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,op=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${e=>e.theme.spacing.lg};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,sp=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,ap=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`,ip=s.div`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,lp=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xl};
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.lg};
`,cp=()=>{const{data:e,isLoading:r,error:n}=Zo();if(r)return t.jsxs(At,{children:[t.jsx(I,{children:"Captain's License Progress"}),t.jsx(ap,{children:t.jsx(A,{label:"System Status",value:"Loading Progress Data...",valueColor:"neonCarrot",size:"lg"})})]});if(n)return t.jsxs(At,{children:[t.jsx(I,{children:"Captain's License Progress"}),t.jsx(ip,{children:t.jsx(he,{type:"error",children:"Error loading license progress data. Please check your connection and try again."})})]});if(!e||!e.enabled)return t.jsxs(At,{children:[t.jsx(I,{children:"Captain's License Progress"}),t.jsx(F,{title:"License Tracking Disabled",variant:"secondary",children:t.jsxs(lp,{children:["Captain's license progress tracking is currently disabled.",t.jsx("br",{}),"Enable it in your settings to track progress toward OUPV certification."]})})]});const{totalSeaTimeDays:o,seaTimeDaysLast3Years:a,totalHours:i,daysToGoal360:l,daysToGoal90:c,estimatedCompletionDate:u}=e,m=o>=360,p=a>=90,j=m&&p;return t.jsxs(At,{children:[t.jsx(I,{children:"Captain's License Progress"}),j&&t.jsx(he,{type:"success",children:"Congratulations! You have met all requirements for OUPV (6-pack) Captain's License eligibility."}),t.jsx(F,{title:"Current Sea Time Statistics",variant:"primary",children:t.jsxs(ao,{children:[t.jsx(A,{label:"Total Sea Time Days",value:o,valueColor:"neonCarrot",size:"lg"}),t.jsx(A,{label:"Days (Last 3 Years)",value:a,valueColor:"lilac",size:"lg"}),t.jsx(A,{label:"Total Hours",value:i.toFixed(1),unit:"hrs",valueColor:"anakiwa",size:"lg"}),t.jsx(A,{label:"Average Hours/Day",value:o>0?(i/o).toFixed(1):"0.0",unit:"hrs",valueColor:"success",size:"lg"})]})}),t.jsxs(op,{children:[t.jsx(F,{title:"360-Day Total Requirement",variant:"primary",children:t.jsx(It,{title:"Total Sea Time Days",current:o,target:360,unit:"days",color:"neonCarrot",size:"lg",showPercentage:!0})}),t.jsx(F,{title:"90-Day Recent Requirement",variant:"secondary",children:t.jsx(It,{title:"Days in Last 3 Years",current:a,target:90,unit:"days",color:"lilac",size:"lg",showPercentage:!0})})]}),t.jsx(F,{title:"Completion Estimates",variant:"accent",children:t.jsxs(sp,{children:[t.jsx(Qt,{title:"360-Day Goal",estimatedDate:m?void 0:u,daysRemaining:m?void 0:l,isComplete:m,color:"neonCarrot",size:"md"}),t.jsx(Qt,{title:"90-Day (3 Years) Goal",daysRemaining:p?void 0:c,isComplete:p,color:"lilac",size:"md"}),!j&&t.jsx(Qt,{title:"License Eligibility",estimatedDate:u,isComplete:j,color:"anakiwa",size:"md"})]})}),t.jsx(F,{title:"OUPV (6-Pack) License Requirements",variant:"secondary",children:t.jsxs(ao,{children:[t.jsx(A,{label:"Total Sea Time",value:"360 Days",valueColor:"neonCarrot",size:"md"}),t.jsx(A,{label:"Recent Experience",value:"90 Days in 3 Years",valueColor:"lilac",size:"md"}),t.jsx(A,{label:"Minimum Per Day",value:"4 Hours",valueColor:"anakiwa",size:"md"}),t.jsx(A,{label:"Additional Requirements",value:"Medical, Drug Test, Course",valueColor:"success",size:"md"})]})})]})},zr=s.div`
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
`,dp=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${e=>e.theme.spacing.lg};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,mp=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
  flex-wrap: wrap;
`,hp=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`,pp=s.div`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,lo=s.div`
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
`,up=()=>{const[e,r]=Ie.useState(""),{data:n,isLoading:o}=te(),{data:a,isLoading:i,error:l}=ss(e||void 0),{data:c,isLoading:u,error:m}=Zr(e||void 0),{data:p,isLoading:j,error:v}=is(e||void 0),g=o||i||u||j,d=l||m||v,y=C.useMemo(()=>{if(!a||!c||!p)return{totalTemplates:0,activeTemplates:0,upcomingCount:0,overdueCount:0,completedThisMonth:0,totalCostThisMonth:0,averageCost:0,completionRate:0};const x=new Date,b=new Date(x.getFullYear(),x.getMonth(),1),f=c.filter(S=>new Date(S.dueDate)<x).length,w=p.filter(S=>S.completedAt&&new Date(S.completedAt)>=b),D=w.reduce((S,z)=>S+(z.actualCost||0),0),T=p.filter(S=>S.actualCost&&S.actualCost>0),R=T.length>0?T.reduce((S,z)=>S+(z.actualCost||0),0)/T.length:0,P=c.length+p.length,E=P>0?p.length/P*100:0;return{totalTemplates:a.length,activeTemplates:a.filter(S=>S.isActive).length,upcomingCount:c.length,overdueCount:f,completedThisMonth:w.length,totalCostThisMonth:D,averageCost:R,completionRate:E}},[a,c,p]),h=C.useMemo(()=>{if(!c)return[];const x=new Date,b=new Date(x.getTime()+7*24*60*60*1e3);return c.map(f=>{const w=new Date(f.dueDate);let D="upcoming",T="Upcoming";return w<x?(D="overdue",T="Overdue"):w<=b&&(D="due-soon",T="Due Soon"),{...f,status:D,statusText:T,daysUntilDue:Math.ceil((w.getTime()-x.getTime())/(1e3*60*60*24))}}).sort((f,w)=>new Date(f.dueDate).getTime()-new Date(w.dueDate).getTime())},[c]);return g?t.jsxs(zr,{children:[t.jsx(I,{children:"Maintenance Reports"}),t.jsx(hp,{children:t.jsx(A,{label:"System Status",value:"Loading Maintenance Data...",valueColor:"neonCarrot",size:"lg"})})]}):d?t.jsxs(zr,{children:[t.jsx(I,{children:"Maintenance Reports"}),t.jsx(pp,{children:t.jsx(he,{type:"error",children:"Error loading maintenance data. Please check your connection and try again."})})]}):t.jsxs(zr,{children:[t.jsx(I,{children:"Maintenance Reports"}),t.jsxs(mp,{children:[t.jsx(k,{variant:e===""?"primary":"secondary",onClick:()=>r(""),children:"All Boats"}),n==null?void 0:n.map(x=>t.jsx(k,{variant:e===x.id?"primary":"secondary",onClick:()=>r(x.id),children:x.name},x.id))]}),t.jsx(F,{title:"Maintenance Overview",variant:"primary",children:t.jsxs(io,{children:[t.jsx(A,{label:"Active Templates",value:y.activeTemplates,valueColor:"neonCarrot",size:"lg"}),t.jsx(A,{label:"Upcoming Tasks",value:y.upcomingCount,valueColor:"anakiwa",size:"lg"}),t.jsx(A,{label:"Overdue Tasks",value:y.overdueCount,valueColor:y.overdueCount>0?"neonCarrot":"success",size:"lg"}),t.jsx(A,{label:"Completed This Month",value:y.completedThisMonth,valueColor:"success",size:"lg"})]})}),t.jsx(F,{title:"Cost Analysis",variant:"secondary",children:t.jsxs(io,{children:[t.jsx(A,{label:"Cost This Month",value:`$${y.totalCostThisMonth.toFixed(2)}`,valueColor:"lilac",size:"lg"}),t.jsx(A,{label:"Average Cost Per Task",value:`$${y.averageCost.toFixed(2)}`,valueColor:"lilac",size:"lg"}),t.jsx(A,{label:"Completion Rate",value:`${y.completionRate.toFixed(1)}%`,valueColor:"anakiwa",size:"lg"})]})}),t.jsxs(dp,{children:[t.jsx(F,{title:"Template Status",variant:"primary",children:t.jsx(It,{title:"Active Templates",current:y.activeTemplates,target:y.totalTemplates,unit:"templates",color:"neonCarrot",size:"md",showPercentage:!0})}),t.jsx(F,{title:"Task Completion",variant:"secondary",children:t.jsx(It,{title:"Completion Rate",current:y.completionRate,target:100,unit:"%",color:"lilac",size:"md",showPercentage:!1})})]}),h.length>0&&t.jsx(F,{title:"Upcoming Maintenance Tasks",variant:"accent",children:t.jsxs(lo,{children:[t.jsxs(Et,{className:"header",children:[t.jsx(K,{children:"Task"}),t.jsx(K,{children:"Boat"}),t.jsx(K,{children:"Due Date"}),t.jsx(K,{children:"Days Until Due"}),t.jsx(K,{children:"Status"})]}),h.map(x=>{var b,f,w,D;return t.jsxs(Et,{className:x.status,children:[t.jsxs(K,{className:"text",children:[((b=x.template)==null?void 0:b.title)||"Unknown Task",((f=x.template)==null?void 0:f.component)&&t.jsx("div",{style:{fontSize:"0.8em",color:"#999"},children:x.template.component})]}),t.jsx(K,{className:"text",children:((D=(w=x.template)==null?void 0:w.boat)==null?void 0:D.name)||"Unknown"}),t.jsx(K,{children:new Date(x.dueDate).toLocaleDateString()}),t.jsx(K,{children:x.daysUntilDue>0?`${x.daysUntilDue} days`:`${Math.abs(x.daysUntilDue)} days ago`}),t.jsx(K,{className:"status",children:x.statusText})]},x.id)})]})}),p&&p.length>0&&t.jsx(F,{title:"Recent Completions",variant:"secondary",children:t.jsxs(lo,{children:[t.jsxs(Et,{className:"header",children:[t.jsx(K,{children:"Task"}),t.jsx(K,{children:"Boat"}),t.jsx(K,{children:"Completed"}),t.jsx(K,{children:"Cost"}),t.jsx(K,{children:"Time"})]}),p.slice(0,10).map(x=>{var b,f,w;return t.jsxs(Et,{children:[t.jsx(K,{className:"text",children:((b=x.template)==null?void 0:b.title)||"Unknown Task"}),t.jsx(K,{className:"text",children:((w=(f=x.template)==null?void 0:f.boat)==null?void 0:w.name)||"Unknown"}),t.jsx(K,{children:x.completedAt?new Date(x.completedAt).toLocaleDateString():"N/A"}),t.jsx(K,{children:x.actualCost?`$${x.actualCost.toFixed(2)}`:"N/A"}),t.jsx(K,{children:x.actualTime?`${x.actualTime}h`:"N/A"})]},x.id)})]})})]})},gp=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,xp=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${e=>e.theme.spacing.lg};
`,co=s.div`
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
`,mo=s.h2`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;

  .secondary & {
    color: ${e=>e.theme.colors.primary.lilac};
  }
`,ho=s.p`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  margin: 0;
`,po=s.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,we=s.li`
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
`,fp=()=>{const e=Y();return t.jsxs(gp,{children:[t.jsx(I,{children:"System Reports"}),t.jsx(F,{title:"Available Reports",variant:"primary",children:t.jsxs(xp,{children:[t.jsxs(co,{onClick:()=>e("/reports/license"),children:[t.jsx(mo,{children:"Captain's License Progress"}),t.jsx(ho,{children:"Track your progress toward OUPV (6-pack) Captain's License requirements"}),t.jsxs(po,{children:[t.jsx(we,{children:"360-day total sea time tracking"}),t.jsx(we,{children:"90-day recent experience monitoring"}),t.jsx(we,{children:"Progress charts and completion estimates"}),t.jsx(we,{children:"Detailed statistics and requirements"})]})]}),t.jsxs(co,{className:"secondary",onClick:()=>e("/reports/maintenance"),children:[t.jsx(mo,{children:"Maintenance Reports"}),t.jsx(ho,{children:"Comprehensive maintenance tracking and cost analysis for all vessels"}),t.jsxs(po,{children:[t.jsx(we,{children:"Upcoming and overdue task tracking"}),t.jsx(we,{children:"Cost analysis and completion rates"}),t.jsx(we,{children:"Template status and activity monitoring"}),t.jsx(we,{children:"Recent completion history"})]})]})]})}),t.jsx(F,{title:"Quick Access",variant:"accent",children:t.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[t.jsx(k,{variant:"primary",onClick:()=>e("/reports/license"),children:"License Progress"}),t.jsx(k,{variant:"secondary",onClick:()=>e("/reports/maintenance"),children:"Maintenance Reports"})]})})]})},yp=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,bp=s.div`
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
`,Nr=s.label`
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,Ir=s.input`
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
`,jp=s.div`
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
`,$p=s.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
`,Mr=s.div`
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Pr=s.div`
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,vp=()=>{const{user:e,logout:r}=Qr(),n=Y(),[o,a]=C.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[i,l]=C.useState(!1),[c,u]=C.useState(null),m=v=>g=>{a(d=>({...d,[v]:g.target.value})),c&&u(null)},p=async v=>{if(v.preventDefault(),!o.currentPassword||!o.newPassword||!o.confirmPassword){u({type:"error",text:"All password fields are required"});return}if(o.newPassword!==o.confirmPassword){u({type:"error",text:"New passwords do not match"});return}if(o.newPassword.length<8){u({type:"error",text:"New password must be at least 8 characters"});return}l(!0),u({type:"info",text:"Changing password..."});try{await M.changePassword(o.currentPassword,o.newPassword),u({type:"success",text:"Password changed successfully. You will be logged out."}),a({currentPassword:"",newPassword:"",confirmPassword:""}),setTimeout(()=>{r()},2e3)}catch(g){u({type:"error",text:g.message||"Failed to change password"})}finally{l(!1)}},j=async()=>{window.confirm("Are you sure you want to log out?")&&await r()};return t.jsxs(yp,{children:[t.jsx(I,{children:"System Settings"}),t.jsxs(bp,{children:[t.jsxs(F,{title:"User Account",children:[t.jsxs($p,{children:[t.jsx(Mr,{children:"Username:"}),t.jsx(Pr,{children:(e==null?void 0:e.username)||"Unknown"}),t.jsx(Mr,{children:"Account Created:"}),t.jsx(Pr,{children:e!=null&&e.createdAt?new Date(e.createdAt).toLocaleDateString():"Unknown"}),t.jsx(Mr,{children:"Last Updated:"}),t.jsx(Pr,{children:e!=null&&e.updatedAt?new Date(e.updatedAt).toLocaleDateString():"Unknown"})]}),t.jsx("div",{style:{marginTop:"20px"},children:t.jsx(k,{onClick:j,variant:"secondary",children:"Logout"})})]}),t.jsx(F,{title:"Change Password",children:t.jsxs("form",{onSubmit:p,children:[t.jsxs(Rr,{children:[t.jsx(Nr,{htmlFor:"currentPassword",children:"Current Password"}),t.jsx(Ir,{id:"currentPassword",type:"password",value:o.currentPassword,onChange:m("currentPassword"),disabled:i,autoComplete:"current-password"})]}),t.jsxs(Rr,{children:[t.jsx(Nr,{htmlFor:"newPassword",children:"New Password"}),t.jsx(Ir,{id:"newPassword",type:"password",value:o.newPassword,onChange:m("newPassword"),disabled:i,autoComplete:"new-password",minLength:8})]}),t.jsxs(Rr,{children:[t.jsx(Nr,{htmlFor:"confirmPassword",children:"Confirm New Password"}),t.jsx(Ir,{id:"confirmPassword",type:"password",value:o.confirmPassword,onChange:m("confirmPassword"),disabled:i,autoComplete:"new-password",minLength:8})]}),c&&t.jsx(jp,{$type:c.type,children:c.text}),t.jsx("div",{style:{marginTop:"20px"},children:t.jsx(k,{type:"submit",disabled:i,children:i?"Changing Password...":"Change Password"})})]})})]}),t.jsxs(F,{title:"System Management",children:[t.jsx("div",{style:{display:"flex",gap:"10px",marginBottom:"20px"},children:t.jsx(k,{onClick:()=>n("/settings/backup"),variant:"secondary",children:"Backup Manager"})}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[t.jsx(A,{label:"Interface Version",value:"LCARS v1.0",valueColor:"anakiwa"}),t.jsx(A,{label:"System Status",value:"Operational",valueColor:"success"}),t.jsx(A,{label:"API Endpoint",value:"/api/v1",valueColor:"anakiwa"}),t.jsx(A,{label:"Authentication",value:"JWT Token-based",valueColor:"lilac"})]})]})]})},wp=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,Cp=s.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${e=>e.theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Sp=s.div`
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
`,kp=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Tp=s.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  padding: ${e=>e.theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
  }
`,Ap=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,Ep=s.div`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: bold;
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,Lp=s.div`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,Fp=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
`,Dp=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xl};
  color: ${e=>e.theme.colors.text.secondary};
  font-style: italic;
`,zp=()=>{const[e,r]=C.useState([]),[n,o]=C.useState(!0),[a,i]=C.useState(!1),[l,c]=C.useState(null);C.useEffect(()=>{u()},[]);const u=async()=>{try{o(!0);const g=await M.getBackups();r(g)}catch(g){c({type:"error",text:g.message||"Failed to load backups"})}finally{o(!1)}},m=async()=>{if(!a){i(!0),c({type:"info",text:"Creating backup... This may take a few minutes."});try{const g=await M.createBackup();c({type:"success",text:`Backup created successfully: ${g.filename}`}),await u()}catch(g){c({type:"error",text:g.message||"Failed to create backup"})}finally{i(!1)}}},p=async g=>{try{c({type:"info",text:`Downloading ${g.filename}...`});const d=await M.downloadBackup(g.id),y=window.URL.createObjectURL(d),h=document.createElement("a");h.href=y,h.download=g.filename,document.body.appendChild(h),h.click(),document.body.removeChild(h),window.URL.revokeObjectURL(y),c({type:"success",text:`Download started: ${g.filename}`})}catch(d){c({type:"error",text:d.message||"Failed to download backup"})}},j=g=>{if(g===0)return"0 Bytes";const d=1024,y=["Bytes","KB","MB","GB"],h=Math.floor(Math.log(g)/Math.log(d));return parseFloat((g/Math.pow(d,h)).toFixed(2))+" "+y[h]},v=g=>new Date(g).toLocaleString();return t.jsxs(wp,{children:[t.jsx(I,{children:"Database Backup Manager"}),l&&t.jsx(Sp,{$type:l.type,children:l.text}),t.jsxs(Cp,{children:[t.jsxs(F,{title:"Backup Operations",children:[t.jsxs("div",{style:{marginBottom:"20px"},children:[t.jsx("div",{style:{width:"100%",marginBottom:"10px"},children:t.jsx(k,{onClick:m,disabled:a,children:a?"Creating Backup...":"Create Manual Backup"})}),t.jsx("div",{style:{width:"100%"},children:t.jsx(k,{onClick:u,disabled:n,variant:"secondary",children:n?"Refreshing...":"Refresh List"})})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[t.jsx(A,{label:"Total Backups",value:e.length.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"Total Size",value:j(e.reduce((g,d)=>g+d.size,0)),valueColor:"lilac"}),t.jsx(A,{label:"Latest Backup",value:e.length>0?v(e[0].createdAt):"None",valueColor:"neonCarrot"})]}),t.jsxs("div",{style:{marginTop:"20px",padding:"10px",background:"rgba(255, 153, 102, 0.1)",border:"1px solid #FF9966"},children:[t.jsx("strong",{style:{color:"#FF9966"},children:"Important:"}),t.jsxs("ul",{style:{margin:"10px 0",paddingLeft:"20px",color:"#CCCCCC"},children:[t.jsx("li",{children:"Backups include both database records and uploaded photos"}),t.jsx("li",{children:"Large backups may take several minutes to create"}),t.jsx("li",{children:"Store backups in a secure location outside the system"}),t.jsx("li",{children:"Test backup restoration procedures regularly"})]})]})]}),t.jsx(F,{title:"Available Backups",children:n?t.jsx("div",{style:{textAlign:"center",padding:"40px"},children:t.jsx("div",{style:{color:"#6688CC"},children:"Loading backups..."})}):e.length===0?t.jsx(Dp,{children:"No backups available. Create your first backup to get started."}):t.jsx(kp,{children:e.map(g=>t.jsxs(Tp,{children:[t.jsxs(Ap,{children:[t.jsx(Ep,{children:g.filename}),t.jsxs(Lp,{children:[t.jsxs("span",{children:["Created: ",v(g.createdAt)]}),t.jsxs("span",{children:["Size: ",j(g.size)]})]})]}),t.jsx(Fp,{children:t.jsx(k,{onClick:()=>p(g),variant:"secondary",size:"sm",children:"Download"})})]},g.id))})})]})]})},Rp=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
`,Np=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Ip=s.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
`,Mp=s.h2`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  min-width: 200px;
  text-align: center;
`,Pp=s.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: ${e=>e.theme.colors.primary.anakiwa};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
`,Bp=s.div`
  background-color: ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  text-align: center;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Op=s.div`
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
`,Up=s.div`
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.$isToday?e.theme.colors.primary.neonCarrot:e.theme.colors.text.primary};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,qp=s.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`,uo=s.div`
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
`,Hp=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Vp=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,go=s.div`
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
`,Wp=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Gp=["January","February","March","April","May","June","July","August","September","October","November","December"],Kp=()=>{const[e,r]=C.useState(new Date),[n,o]=C.useState([]),{data:a,isLoading:i}=Te(),{data:l,isLoading:c}=Zr();C.useEffect(()=>{const x=[];a&&a.forEach(b=>{var f;x.push({id:`trip-${b.id}`,title:`Trip: ${((f=b.boat)==null?void 0:f.name)||"Unknown Boat"}`,date:new Date(b.startTime),type:"trip",data:b})}),l&&l.forEach(b=>{var f;x.push({id:`maintenance-${b.id}`,title:`Maintenance: ${((f=b.template)==null?void 0:f.title)||"Unknown Task"}`,date:new Date(b.dueDate),type:"maintenance",data:b})}),o(x)},[a,l]);const u=x=>{r(b=>{const f=new Date(b);return x==="prev"?f.setMonth(b.getMonth()-1):f.setMonth(b.getMonth()+1),f})},m=()=>{r(new Date)},p=x=>{const b=x.getFullYear(),f=x.getMonth(),w=new Date(b,f,1),T=new Date(b,f+1,0).getDate(),R=w.getDay(),P=[];for(let S=R-1;S>=0;S--){const z=new Date(b,f,-S);P.push(z)}for(let S=1;S<=T;S++)P.push(new Date(b,f,S));const E=42-P.length;for(let S=1;S<=E;S++)P.push(new Date(b,f+1,S));return P},j=x=>n.filter(b=>new Date(b.date).toDateString()===x.toDateString()),v=x=>{const b=new Date;return x.toDateString()===b.toDateString()},g=x=>x.getMonth()===e.getMonth(),d=p(e),y=(a==null?void 0:a.filter(x=>{const b=new Date(x.startTime);return b.getMonth()===e.getMonth()&&b.getFullYear()===e.getFullYear()}))||[],h=(l==null?void 0:l.filter(x=>{const b=new Date(x.dueDate);return b.getMonth()===e.getMonth()&&b.getFullYear()===e.getFullYear()}))||[];return t.jsxs(Rp,{children:[t.jsx(I,{children:"Mission Calendar"}),t.jsxs(Hp,{children:[t.jsx(A,{label:"Current Month Trips",value:y.length.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"Upcoming Maintenance",value:h.length.toString(),valueColor:"lilac"}),t.jsx(A,{label:"Total Events",value:(y.length+h.length).toString(),valueColor:"neonCarrot"})]}),t.jsxs(F,{title:"Calendar View",children:[t.jsxs(Np,{children:[t.jsxs(Ip,{children:[t.jsx(k,{onClick:()=>u("prev"),variant:"secondary",size:"sm",children:"← Previous"}),t.jsxs(Mp,{children:[Gp[e.getMonth()]," ",e.getFullYear()]}),t.jsx(k,{onClick:()=>u("next"),variant:"secondary",size:"sm",children:"Next →"})]}),t.jsx(k,{onClick:m,size:"sm",children:"Today"})]}),t.jsxs(Vp,{children:[t.jsx(go,{$color:"#6688CC",children:"Trips"}),t.jsx(go,{$color:"#CC99CC",children:"Maintenance"})]}),t.jsxs(Pp,{children:[Wp.map(x=>t.jsx(Bp,{children:x},x)),d.map((x,b)=>{const f=j(x);return t.jsxs(Op,{$isCurrentMonth:g(x),$isToday:v(x),$hasEvents:f.length>0,children:[t.jsx(Up,{$isToday:v(x),children:x.getDate()}),t.jsxs(qp,{children:[f.slice(0,3).map(w=>t.jsx(uo,{$type:w.type,title:w.title,children:w.title},w.id)),f.length>3&&t.jsxs(uo,{$type:"trip",children:["+",f.length-3," more"]})]})]},b)})]}),(i||c)&&t.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#6688CC"},children:"Loading calendar data..."})]})]})},Jp=s.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
`,Qp=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
  flex-wrap: wrap;
`,Zp=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.md};
`,_p=s.div`
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
`,Yp=s.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`,Xp=s.div`
  padding: ${e=>e.theme.spacing.sm};
`,eu=s.div`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  margin-bottom: ${e=>e.theme.spacing.xs};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,tu=s.div`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ru=s.span`
  background: ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: 2px 6px;
  border-radius: 2px;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
`,nu=s.div`
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
`,ou=s.div`
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
`,su=s.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
`,au=s.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  padding: ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  text-align: center;
  max-width: 500px;
`,iu=s.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,lu=s.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xl};
  color: ${e=>e.theme.colors.text.secondary};
  font-style: italic;
`,cu=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,du=()=>{const[e,r]=C.useState([]),[n,o]=C.useState([]),[a,i]=C.useState("all"),[l,c]=C.useState(null),[u,m]=C.useState(!0),{data:p,isLoading:j}=Te();C.useEffect(()=>{const x=[];p&&p.forEach(b=>{b.photos&&b.photos.forEach(f=>{var w;x.push({...f,contextType:"trip",contextTitle:`Trip: ${((w=b.boat)==null?void 0:w.name)||"Unknown Boat"}`,contextDate:new Date(b.startTime).toLocaleDateString()})})}),x.sort((b,f)=>new Date(f.createdAt).getTime()-new Date(b.createdAt).getTime()),r(x),m(j)},[p,j]),C.useEffect(()=>{let x=e;a==="trips"&&(x=e.filter(b=>b.contextType==="trip")),o(x)},[e,a]);const v=x=>{c(x)},g=()=>{c(null)},d=x=>{if(!l)return;const b=n.findIndex(w=>w.id===l.id);let f=b;x==="prev"?f=b>0?b-1:n.length-1:f=b<n.length-1?b+1:0,c(n[f])},y=x=>{if(x===0)return"0 Bytes";const b=1024,f=["Bytes","KB","MB","GB"],w=Math.floor(Math.log(x)/Math.log(b));return parseFloat((x/Math.pow(b,w)).toFixed(2))+" "+f[w]},h=e.filter(x=>x.contextType==="trip");return t.jsxs(Jp,{children:[t.jsx(I,{children:"Photo Gallery"}),t.jsxs(cu,{children:[t.jsx(A,{label:"Total Photos",value:e.length.toString(),valueColor:"neonCarrot"}),t.jsx(A,{label:"Trip Photos",value:h.length.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"Maintenance Photos",value:"0",valueColor:"lilac"}),t.jsx(A,{label:"Total Size",value:y(e.reduce((x,b)=>x+(b.sizeBytes||0),0)),valueColor:"anakiwa"})]}),t.jsxs(F,{title:"Photo Collection",children:[t.jsxs(Qp,{children:[t.jsxs(k,{onClick:()=>i("all"),variant:a==="all"?"primary":"secondary",size:"sm",children:["All Photos (",e.length,")"]}),t.jsxs(k,{onClick:()=>i("trips"),variant:a==="trips"?"primary":"secondary",size:"sm",children:["Trip Photos (",h.length,")"]}),t.jsx(k,{onClick:()=>i("trips"),variant:a==="trips"?"primary":"secondary",size:"sm",disabled:!0,children:"Maintenance Photos (Coming Soon)"})]}),u?t.jsx("div",{style:{textAlign:"center",padding:"40px"},children:t.jsx("div",{style:{color:"#6688CC"},children:"Loading photos..."})}):n.length===0?t.jsx(lu,{children:"No photos found. Photos will appear here when you attach them to trips."}):t.jsx(Zp,{children:n.map(x=>t.jsxs(_p,{onClick:()=>v(x),children:[t.jsx(Yp,{src:x.webOptimizedPath||x.originalPath,alt:x.contextTitle,loading:"lazy"}),t.jsxs(Xp,{children:[t.jsx(eu,{children:x.contextTitle}),t.jsxs(tu,{children:[t.jsx(ru,{$type:x.contextType,children:x.contextType}),t.jsx("span",{children:x.contextDate})]})]})]},x.id))})]}),t.jsx(nu,{$isOpen:!!l,onClick:g,children:l&&t.jsxs(ou,{onClick:x=>x.stopPropagation(),children:[t.jsx(su,{src:l.webOptimizedPath||l.originalPath,alt:l.contextTitle}),t.jsxs(au,{children:[t.jsx("div",{style:{marginBottom:"10px"},children:t.jsx("strong",{children:l.contextTitle})}),t.jsxs("div",{style:{fontSize:"14px",color:"#CCCCCC"},children:[t.jsxs("div",{children:["Date: ",l.contextDate]}),t.jsxs("div",{children:["Size: ",y(l.sizeBytes||0)]}),t.jsxs("div",{children:["Type: ",l.mimeType]}),l.metadata&&t.jsxs("div",{children:["Dimensions: ",l.metadata.width," × ",l.metadata.height]})]})]}),t.jsxs(iu,{children:[t.jsx(k,{onClick:()=>d("prev"),variant:"secondary",size:"sm",children:"← Previous"}),t.jsx(k,{onClick:g,size:"sm",children:"Close"}),t.jsx(k,{onClick:()=>d("next"),variant:"secondary",size:"sm",children:"Next →"})]})]})})]})},Lt=s.div`
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
`,mu=s.div`
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
`;function hu(){const{isAuthenticated:e,isLoading:r,needsSetup:n}=Qr();return r?t.jsx(Lt,{children:t.jsx(mu,{children:t.jsx("div",{className:"loading-text",children:"Initializing LCARS Interface"})})}):n?t.jsx(Lt,{children:t.jsx(er,{})}):e?t.jsx(Lt,{children:t.jsx(Ji,{children:t.jsx(Vi,{children:t.jsxs(Xr,{children:[t.jsx(U,{path:"/",element:t.jsx(Zt,{})}),t.jsx(U,{path:"/dashboard",element:t.jsx(Zt,{})}),t.jsx(U,{path:"/boats",element:t.jsx(yc,{})}),t.jsx(U,{path:"/boats/new",element:t.jsx(Uc,{})}),t.jsx(U,{path:"/boats/:id",element:t.jsx(Fc,{})}),t.jsx(U,{path:"/trips",element:t.jsx(ed,{})}),t.jsx(U,{path:"/trips/:id",element:t.jsx(vd,{})}),t.jsx(U,{path:"/trips/:id/edit",element:t.jsx(Ed,{})}),t.jsx(U,{path:"/notes",element:t.jsx(Wd,{})}),t.jsx(U,{path:"/notes/new",element:t.jsx(Un,{})}),t.jsx(U,{path:"/notes/:id",element:t.jsx(rm,{})}),t.jsx(U,{path:"/notes/:id/edit",element:t.jsx(Un,{})}),t.jsx(U,{path:"/todos",element:t.jsx(Rm,{})}),t.jsx(U,{path:"/todos/new",element:t.jsx(sh,{})}),t.jsx(U,{path:"/todos/:id",element:t.jsx(_m,{})}),t.jsx(U,{path:"/maintenance",element:t.jsx(fh,{})}),t.jsx(U,{path:"/maintenance/templates/new",element:t.jsx(so,{})}),t.jsx(U,{path:"/maintenance/templates/:id",element:t.jsx(Ch,{})}),t.jsx(U,{path:"/maintenance/templates/:id/edit",element:t.jsx(so,{})}),t.jsx(U,{path:"/maintenance/events/:id",element:t.jsx(zh,{})}),t.jsx(U,{path:"/map",element:t.jsx(np,{})}),t.jsx(U,{path:"/reports",element:t.jsx(fp,{})}),t.jsx(U,{path:"/reports/license",element:t.jsx(cp,{})}),t.jsx(U,{path:"/reports/maintenance",element:t.jsx(up,{})}),t.jsx(U,{path:"/settings",element:t.jsx(vp,{})}),t.jsx(U,{path:"/settings/backup",element:t.jsx(zp,{})}),t.jsx(U,{path:"/calendar",element:t.jsx(Kp,{})}),t.jsx(U,{path:"/photos",element:t.jsx(du,{})}),t.jsx(U,{path:"*",element:t.jsx(Zt,{})})]})})})}):t.jsx(Lt,{children:t.jsxs(Xr,{children:[t.jsx(U,{path:"/setup",element:t.jsx(er,{})}),t.jsx(U,{path:"*",element:t.jsx(er,{})})]})})}const pu=us`
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
    text-transform: none;
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
`,uu={colors:{primary:{paleCanary:"#FFFF99",tanoi:"#FFCC99",goldenTanoi:"#FFCC66",neonCarrot:"#FF9933",eggplant:"#664466",lilac:"#CC99CC",anakiwa:"#99CCFF",mariner:"#3366CC",bahamBlue:"#006699"},background:"#000000",surface:{dark:"#0A0A0A",medium:"#1A1119",light:"#2A2233"},text:{primary:"#FF9933",secondary:"#CC99CC",muted:"#664466",inverse:"#000000",light:"#FFCC99"},status:{success:"#55FF55",warning:"#FFFF99",error:"#FF5555",info:"#99CCFF"},interactive:{hover:"#FFCC66",active:"#FFCC99",disabled:"#664466"}},typography:{fontFamily:{primary:"'Antonio', 'Helvetica Neue', Arial, sans-serif",monospace:"'Courier New', monospace"},fontSize:{xs:"11px",sm:"13px",md:"15px",lg:"18px",xl:"24px",xxl:"32px",xxxl:"48px"},fontWeight:{normal:400,bold:700},lineHeight:{tight:1.1,normal:1.4,loose:1.7},letterSpacing:{tight:"-0.02em",normal:"0.04em",wide:"0.1em",extraWide:"0.2em"}},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px",xxxl:"64px"},borderRadius:{none:"0",sm:"4px",md:"8px",lg:"16px",xl:"24px",pill:"9999px"},shadows:{sm:"0 1px 3px rgba(255, 153, 51, 0.12)",md:"0 4px 8px rgba(255, 153, 51, 0.15)",lg:"0 10px 20px rgba(255, 153, 51, 0.18)",glow:"0 0 20px rgba(255, 153, 51, 0.35)",glowStrong:"0 0 40px rgba(255, 153, 51, 0.5)",glowSubtle:"0 0 10px rgba(255, 153, 51, 0.15)"},zIndex:{dropdown:1e3,sticky:1020,fixed:1030,modal:1040,popover:1050,tooltip:1060},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px"},animation:{fast:"150ms",normal:"300ms",slow:"500ms"},lcars:{sidebarWidth:"200px",headerHeight:"60px",footerHeight:"40px",elbowSize:"60px",barThickness:"30px",buttonHeight:"40px",gap:"3px",buttonRadius:"9999px"}},gu=new cs({defaultOptions:{queries:{retry:3,staleTime:5*60*1e3,refetchOnWindowFocus:!1}}});Br.createRoot(document.getElementById("root")).render(t.jsx(Ie.StrictMode,{children:t.jsx(ds,{client:gu,children:t.jsx(ps,{children:t.jsxs(gs,{theme:uu,children:[t.jsx(pu,{}),t.jsx(Kl,{children:t.jsx(hu,{})})]})})})}));
//# sourceMappingURL=index-BliFOPmB.js.map
