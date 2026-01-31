import{j as t,u as ee,a as K,b as _,Q as va,c as wa}from"./query-qfgcgxkg.js";import{b as yo,r as C,a as Ke}from"./vendor-ibvuEIEr.js";import{u as se,a as Ca,b as Re,L as Y,c as Sa,R as rn,d as H,B as ka}from"./router-CxqMmorT.js";import{d as a,l as F,m as Z,f as Ta,o as Aa}from"./ui-BNlCdbnp.js";import{l as Qe,T as bo,P as $o,M as Le,a as De,b as jo,u as Ea}from"./maps-Cwoarths.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Ur={},nn=yo;Ur.createRoot=nn.createRoot,Ur.hydrateRoot=nn.hydrateRoot;function vo(e,r){return function(){return e.apply(r,arguments)}}const{toString:Fa}=Object.prototype,{getPrototypeOf:Gr}=Object,{iterator:Ut,toStringTag:wo}=Symbol,qt=(e=>r=>{const n=Fa.call(r);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),me=e=>(e=e.toLowerCase(),r=>qt(r)===e),Ht=e=>r=>typeof r===e,{isArray:it}=Array,st=Ht("undefined");function ft(e){return e!==null&&!st(e)&&e.constructor!==null&&!st(e.constructor)&&re(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Co=me("ArrayBuffer");function La(e){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&Co(e.buffer),r}const Da=Ht("string"),re=Ht("function"),So=Ht("number"),yt=e=>e!==null&&typeof e=="object",za=e=>e===!0||e===!1,It=e=>{if(qt(e)!=="object")return!1;const r=Gr(e);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(wo in e)&&!(Ut in e)},Ra=e=>{if(!yt(e)||ft(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Ma=me("Date"),Ia=me("File"),Na=me("Blob"),Pa=me("FileList"),Ba=e=>yt(e)&&re(e.pipe),Oa=e=>{let r;return e&&(typeof FormData=="function"&&e instanceof FormData||re(e.append)&&((r=qt(e))==="formdata"||r==="object"&&re(e.toString)&&e.toString()==="[object FormData]"))},Ua=me("URLSearchParams"),[qa,Ha,Wa,Va]=["ReadableStream","Request","Response","Headers"].map(me),Ka=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function bt(e,r,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let o,s;if(typeof e!="object"&&(e=[e]),it(e))for(o=0,s=e.length;o<s;o++)r.call(null,e[o],o,e);else{if(ft(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),l=i.length;let c;for(o=0;o<l;o++)c=i[o],r.call(null,e[c],c,e)}}function ko(e,r){if(ft(e))return null;r=r.toLowerCase();const n=Object.keys(e);let o=n.length,s;for(;o-- >0;)if(s=n[o],r===s.toLowerCase())return s;return null}const We=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,To=e=>!st(e)&&e!==We;function qr(){const{caseless:e,skipUndefined:r}=To(this)&&this||{},n={},o=(s,i)=>{const l=e&&ko(n,i)||i;It(n[l])&&It(s)?n[l]=qr(n[l],s):It(s)?n[l]=qr({},s):it(s)?n[l]=s.slice():(!r||!st(s))&&(n[l]=s)};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&bt(arguments[s],o);return n}const Ga=(e,r,n,{allOwnKeys:o}={})=>(bt(r,(s,i)=>{n&&re(s)?e[i]=vo(s,n):e[i]=s},{allOwnKeys:o}),e),Qa=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),_a=(e,r,n,o)=>{e.prototype=Object.create(r.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:r.prototype}),n&&Object.assign(e.prototype,n)},Ja=(e,r,n,o)=>{let s,i,l;const c={};if(r=r||{},e==null)return r;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)l=s[i],(!o||o(l,e,r))&&!c[l]&&(r[l]=e[l],c[l]=!0);e=n!==!1&&Gr(e)}while(e&&(!n||n(e,r))&&e!==Object.prototype);return r},Ya=(e,r,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=r.length;const o=e.indexOf(r,n);return o!==-1&&o===n},Za=e=>{if(!e)return null;if(it(e))return e;let r=e.length;if(!So(r))return null;const n=new Array(r);for(;r-- >0;)n[r]=e[r];return n},Xa=(e=>r=>e&&r instanceof e)(typeof Uint8Array<"u"&&Gr(Uint8Array)),es=(e,r)=>{const o=(e&&e[Ut]).call(e);let s;for(;(s=o.next())&&!s.done;){const i=s.value;r.call(e,i[0],i[1])}},ts=(e,r)=>{let n;const o=[];for(;(n=e.exec(r))!==null;)o.push(n);return o},rs=me("HTMLFormElement"),ns=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,o,s){return o.toUpperCase()+s}),on=(({hasOwnProperty:e})=>(r,n)=>e.call(r,n))(Object.prototype),os=me("RegExp"),Ao=(e,r)=>{const n=Object.getOwnPropertyDescriptors(e),o={};bt(n,(s,i)=>{let l;(l=r(s,i,e))!==!1&&(o[i]=l||s)}),Object.defineProperties(e,o)},as=e=>{Ao(e,(r,n)=>{if(re(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const o=e[n];if(re(o)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ss=(e,r)=>{const n={},o=s=>{s.forEach(i=>{n[i]=!0})};return it(e)?o(e):o(String(e).split(r)),n},is=()=>{},ls=(e,r)=>e!=null&&Number.isFinite(e=+e)?e:r;function cs(e){return!!(e&&re(e.append)&&e[wo]==="FormData"&&e[Ut])}const ds=e=>{const r=new Array(10),n=(o,s)=>{if(yt(o)){if(r.indexOf(o)>=0)return;if(ft(o))return o;if(!("toJSON"in o)){r[s]=o;const i=it(o)?[]:{};return bt(o,(l,c)=>{const u=n(l,s+1);!st(u)&&(i[c]=u)}),r[s]=void 0,i}}return o};return n(e,0)},ms=me("AsyncFunction"),ps=e=>e&&(yt(e)||re(e))&&re(e.then)&&re(e.catch),Eo=((e,r)=>e?setImmediate:r?((n,o)=>(We.addEventListener("message",({source:s,data:i})=>{s===We&&i===n&&o.length&&o.shift()()},!1),s=>{o.push(s),We.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",re(We.postMessage)),hs=typeof queueMicrotask<"u"?queueMicrotask.bind(We):typeof process<"u"&&process.nextTick||Eo,us=e=>e!=null&&re(e[Ut]),j={isArray:it,isArrayBuffer:Co,isBuffer:ft,isFormData:Oa,isArrayBufferView:La,isString:Da,isNumber:So,isBoolean:za,isObject:yt,isPlainObject:It,isEmptyObject:Ra,isReadableStream:qa,isRequest:Ha,isResponse:Wa,isHeaders:Va,isUndefined:st,isDate:Ma,isFile:Ia,isBlob:Na,isRegExp:os,isFunction:re,isStream:Ba,isURLSearchParams:Ua,isTypedArray:Xa,isFileList:Pa,forEach:bt,merge:qr,extend:Ga,trim:Ka,stripBOM:Qa,inherits:_a,toFlatObject:Ja,kindOf:qt,kindOfTest:me,endsWith:Ya,toArray:Za,forEachEntry:es,matchAll:ts,isHTMLForm:rs,hasOwnProperty:on,hasOwnProp:on,reduceDescriptors:Ao,freezeMethods:as,toObjectSet:ss,toCamelCase:ns,noop:is,toFiniteNumber:ls,findKey:ko,global:We,isContextDefined:To,isSpecCompliantForm:cs,toJSONObject:ds,isAsyncFn:ms,isThenable:ps,setImmediate:Eo,asap:hs,isIterable:us};function U(e,r,n,o,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",r&&(this.code=r),n&&(this.config=n),o&&(this.request=o),s&&(this.response=s,this.status=s.status?s.status:null)}j.inherits(U,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.status}}});const Fo=U.prototype,Lo={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Lo[e]={value:e}});Object.defineProperties(U,Lo);Object.defineProperty(Fo,"isAxiosError",{value:!0});U.from=(e,r,n,o,s,i)=>{const l=Object.create(Fo);j.toFlatObject(e,l,function(p){return p!==Error.prototype},d=>d!=="isAxiosError");const c=e&&e.message?e.message:"Error",u=r==null&&e?e.code:r;return U.call(l,c,u,n,o,s),e&&l.cause==null&&Object.defineProperty(l,"cause",{value:e,configurable:!0}),l.name=e&&e.name||"Error",i&&Object.assign(l,i),l};const gs=null;function Hr(e){return j.isPlainObject(e)||j.isArray(e)}function Do(e){return j.endsWith(e,"[]")?e.slice(0,-2):e}function an(e,r,n){return e?e.concat(r).map(function(s,i){return s=Do(s),!n&&i?"["+s+"]":s}).join(n?".":""):r}function xs(e){return j.isArray(e)&&!e.some(Hr)}const fs=j.toFlatObject(j,{},null,function(r){return/^is[A-Z]/.test(r)});function Wt(e,r,n){if(!j.isObject(e))throw new TypeError("target must be an object");r=r||new FormData,n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,x){return!j.isUndefined(x[f])});const o=n.metaTokens,s=n.visitor||p,i=n.dots,l=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&j.isSpecCompliantForm(r);if(!j.isFunction(s))throw new TypeError("visitor must be a function");function d(m){if(m===null)return"";if(j.isDate(m))return m.toISOString();if(j.isBoolean(m))return m.toString();if(!u&&j.isBlob(m))throw new U("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(m)||j.isTypedArray(m)?u&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function p(m,f,x){let g=m;if(m&&!x&&typeof m=="object"){if(j.endsWith(f,"{}"))f=o?f:f.slice(0,-2),m=JSON.stringify(m);else if(j.isArray(m)&&xs(m)||(j.isFileList(m)||j.endsWith(f,"[]"))&&(g=j.toArray(m)))return f=Do(f),g.forEach(function(v,w){!(j.isUndefined(v)||v===null)&&r.append(l===!0?an([f],w,i):l===null?f:f+"[]",d(v))}),!1}return Hr(m)?!0:(r.append(an(x,f,i),d(m)),!1)}const b=[],$=Object.assign(fs,{defaultVisitor:p,convertValue:d,isVisitable:Hr});function h(m,f){if(!j.isUndefined(m)){if(b.indexOf(m)!==-1)throw Error("Circular reference detected in "+f.join("."));b.push(m),j.forEach(m,function(g,y){(!(j.isUndefined(g)||g===null)&&s.call(r,g,j.isString(y)?y.trim():y,f,$))===!0&&h(g,f?f.concat(y):[y])}),b.pop()}}if(!j.isObject(e))throw new TypeError("data must be an object");return h(e),r}function sn(e){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return r[o]})}function Qr(e,r){this._pairs=[],e&&Wt(e,this,r)}const zo=Qr.prototype;zo.append=function(r,n){this._pairs.push([r,n])};zo.toString=function(r){const n=r?function(o){return r.call(this,o,sn)}:sn;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function ys(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ro(e,r,n){if(!r)return e;const o=n&&n.encode||ys;j.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(r,n):i=j.isURLSearchParams(r)?r.toString():new Qr(r,n).toString(o),i){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class ln{constructor(){this.handlers=[]}use(r,n,o){return this.handlers.push({fulfilled:r,rejected:n,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){j.forEach(this.handlers,function(o){o!==null&&r(o)})}}const Mo={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},bs=typeof URLSearchParams<"u"?URLSearchParams:Qr,$s=typeof FormData<"u"?FormData:null,js=typeof Blob<"u"?Blob:null,vs={isBrowser:!0,classes:{URLSearchParams:bs,FormData:$s,Blob:js},protocols:["http","https","file","blob","url","data"]},_r=typeof window<"u"&&typeof document<"u",Wr=typeof navigator=="object"&&navigator||void 0,ws=_r&&(!Wr||["ReactNative","NativeScript","NS"].indexOf(Wr.product)<0),Cs=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Ss=_r&&window.location.href||"http://localhost",ks=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:_r,hasStandardBrowserEnv:ws,hasStandardBrowserWebWorkerEnv:Cs,navigator:Wr,origin:Ss},Symbol.toStringTag,{value:"Module"})),X={...ks,...vs};function Ts(e,r){return Wt(e,new X.classes.URLSearchParams,{visitor:function(n,o,s,i){return X.isNode&&j.isBuffer(n)?(this.append(o,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...r})}function As(e){return j.matchAll(/\w+|\[(\w*)]/g,e).map(r=>r[0]==="[]"?"":r[1]||r[0])}function Es(e){const r={},n=Object.keys(e);let o;const s=n.length;let i;for(o=0;o<s;o++)i=n[o],r[i]=e[i];return r}function Io(e){function r(n,o,s,i){let l=n[i++];if(l==="__proto__")return!0;const c=Number.isFinite(+l),u=i>=n.length;return l=!l&&j.isArray(s)?s.length:l,u?(j.hasOwnProp(s,l)?s[l]=[s[l],o]:s[l]=o,!c):((!s[l]||!j.isObject(s[l]))&&(s[l]=[]),r(n,o,s[l],i)&&j.isArray(s[l])&&(s[l]=Es(s[l])),!c)}if(j.isFormData(e)&&j.isFunction(e.entries)){const n={};return j.forEachEntry(e,(o,s)=>{r(As(o),s,n,0)}),n}return null}function Fs(e,r,n){if(j.isString(e))try{return(r||JSON.parse)(e),j.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(n||JSON.stringify)(e)}const $t={transitional:Mo,adapter:["xhr","http","fetch"],transformRequest:[function(r,n){const o=n.getContentType()||"",s=o.indexOf("application/json")>-1,i=j.isObject(r);if(i&&j.isHTMLForm(r)&&(r=new FormData(r)),j.isFormData(r))return s?JSON.stringify(Io(r)):r;if(j.isArrayBuffer(r)||j.isBuffer(r)||j.isStream(r)||j.isFile(r)||j.isBlob(r)||j.isReadableStream(r))return r;if(j.isArrayBufferView(r))return r.buffer;if(j.isURLSearchParams(r))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let c;if(i){if(o.indexOf("application/x-www-form-urlencoded")>-1)return Ts(r,this.formSerializer).toString();if((c=j.isFileList(r))||o.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Wt(c?{"files[]":r}:r,u&&new u,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Fs(r)):r}],transformResponse:[function(r){const n=this.transitional||$t.transitional,o=n&&n.forcedJSONParsing,s=this.responseType==="json";if(j.isResponse(r)||j.isReadableStream(r))return r;if(r&&j.isString(r)&&(o&&!this.responseType||s)){const l=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(r,this.parseReviver)}catch(c){if(l)throw c.name==="SyntaxError"?U.from(c,U.ERR_BAD_RESPONSE,this,null,this.response):c}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:X.classes.FormData,Blob:X.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};j.forEach(["delete","get","head","post","put","patch"],e=>{$t.headers[e]={}});const Ls=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ds=e=>{const r={};let n,o,s;return e&&e.split(`
`).forEach(function(l){s=l.indexOf(":"),n=l.substring(0,s).trim().toLowerCase(),o=l.substring(s+1).trim(),!(!n||r[n]&&Ls[n])&&(n==="set-cookie"?r[n]?r[n].push(o):r[n]=[o]:r[n]=r[n]?r[n]+", "+o:o)}),r},cn=Symbol("internals");function mt(e){return e&&String(e).trim().toLowerCase()}function Nt(e){return e===!1||e==null?e:j.isArray(e)?e.map(Nt):String(e)}function zs(e){const r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=n.exec(e);)r[o[1]]=o[2];return r}const Rs=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Gt(e,r,n,o,s){if(j.isFunction(o))return o.call(this,r,n);if(s&&(r=n),!!j.isString(r)){if(j.isString(o))return r.indexOf(o)!==-1;if(j.isRegExp(o))return o.test(r)}}function Ms(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,n,o)=>n.toUpperCase()+o)}function Is(e,r){const n=j.toCamelCase(" "+r);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+n,{value:function(s,i,l){return this[o].call(this,r,s,i,l)},configurable:!0})})}let ne=class{constructor(r){r&&this.set(r)}set(r,n,o){const s=this;function i(c,u,d){const p=mt(u);if(!p)throw new Error("header name must be a non-empty string");const b=j.findKey(s,p);(!b||s[b]===void 0||d===!0||d===void 0&&s[b]!==!1)&&(s[b||u]=Nt(c))}const l=(c,u)=>j.forEach(c,(d,p)=>i(d,p,u));if(j.isPlainObject(r)||r instanceof this.constructor)l(r,n);else if(j.isString(r)&&(r=r.trim())&&!Rs(r))l(Ds(r),n);else if(j.isObject(r)&&j.isIterable(r)){let c={},u,d;for(const p of r){if(!j.isArray(p))throw TypeError("Object iterator must return a key-value pair");c[d=p[0]]=(u=c[d])?j.isArray(u)?[...u,p[1]]:[u,p[1]]:p[1]}l(c,n)}else r!=null&&i(n,r,o);return this}get(r,n){if(r=mt(r),r){const o=j.findKey(this,r);if(o){const s=this[o];if(!n)return s;if(n===!0)return zs(s);if(j.isFunction(n))return n.call(this,s,o);if(j.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,n){if(r=mt(r),r){const o=j.findKey(this,r);return!!(o&&this[o]!==void 0&&(!n||Gt(this,this[o],o,n)))}return!1}delete(r,n){const o=this;let s=!1;function i(l){if(l=mt(l),l){const c=j.findKey(o,l);c&&(!n||Gt(o,o[c],c,n))&&(delete o[c],s=!0)}}return j.isArray(r)?r.forEach(i):i(r),s}clear(r){const n=Object.keys(this);let o=n.length,s=!1;for(;o--;){const i=n[o];(!r||Gt(this,this[i],i,r,!0))&&(delete this[i],s=!0)}return s}normalize(r){const n=this,o={};return j.forEach(this,(s,i)=>{const l=j.findKey(o,i);if(l){n[l]=Nt(s),delete n[i];return}const c=r?Ms(i):String(i).trim();c!==i&&delete n[i],n[c]=Nt(s),o[c]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const n=Object.create(null);return j.forEach(this,(o,s)=>{o!=null&&o!==!1&&(n[s]=r&&j.isArray(o)?o.join(", "):o)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,n])=>r+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...n){const o=new this(r);return n.forEach(s=>o.set(s)),o}static accessor(r){const o=(this[cn]=this[cn]={accessors:{}}).accessors,s=this.prototype;function i(l){const c=mt(l);o[c]||(Is(s,l),o[c]=!0)}return j.isArray(r)?r.forEach(i):i(r),this}};ne.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.reduceDescriptors(ne.prototype,({value:e},r)=>{let n=r[0].toUpperCase()+r.slice(1);return{get:()=>e,set(o){this[n]=o}}});j.freezeMethods(ne);function Qt(e,r){const n=this||$t,o=r||n,s=ne.from(o.headers);let i=o.data;return j.forEach(e,function(c){i=c.call(n,i,s.normalize(),r?r.status:void 0)}),s.normalize(),i}function No(e){return!!(e&&e.__CANCEL__)}function lt(e,r,n){U.call(this,e??"canceled",U.ERR_CANCELED,r,n),this.name="CanceledError"}j.inherits(lt,U,{__CANCEL__:!0});function Po(e,r,n){const o=n.config.validateStatus;!n.status||!o||o(n.status)?e(n):r(new U("Request failed with status code "+n.status,[U.ERR_BAD_REQUEST,U.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Ns(e){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""}function Ps(e,r){e=e||10;const n=new Array(e),o=new Array(e);let s=0,i=0,l;return r=r!==void 0?r:1e3,function(u){const d=Date.now(),p=o[i];l||(l=d),n[s]=u,o[s]=d;let b=i,$=0;for(;b!==s;)$+=n[b++],b=b%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),d-l<r)return;const h=p&&d-p;return h?Math.round($*1e3/h):void 0}}function Bs(e,r){let n=0,o=1e3/r,s,i;const l=(d,p=Date.now())=>{n=p,s=null,i&&(clearTimeout(i),i=null),e(...d)};return[(...d)=>{const p=Date.now(),b=p-n;b>=o?l(d,p):(s=d,i||(i=setTimeout(()=>{i=null,l(s)},o-b)))},()=>s&&l(s)]}const Bt=(e,r,n=3)=>{let o=0;const s=Ps(50,250);return Bs(i=>{const l=i.loaded,c=i.lengthComputable?i.total:void 0,u=l-o,d=s(u),p=l<=c;o=l;const b={loaded:l,total:c,progress:c?l/c:void 0,bytes:u,rate:d||void 0,estimated:d&&c&&p?(c-l)/d:void 0,event:i,lengthComputable:c!=null,[r?"download":"upload"]:!0};e(b)},n)},dn=(e,r)=>{const n=e!=null;return[o=>r[0]({lengthComputable:n,total:e,loaded:o}),r[1]]},mn=e=>(...r)=>j.asap(()=>e(...r)),Os=X.hasStandardBrowserEnv?((e,r)=>n=>(n=new URL(n,X.origin),e.protocol===n.protocol&&e.host===n.host&&(r||e.port===n.port)))(new URL(X.origin),X.navigator&&/(msie|trident)/i.test(X.navigator.userAgent)):()=>!0,Us=X.hasStandardBrowserEnv?{write(e,r,n,o,s,i,l){if(typeof document>"u")return;const c=[`${e}=${encodeURIComponent(r)}`];j.isNumber(n)&&c.push(`expires=${new Date(n).toUTCString()}`),j.isString(o)&&c.push(`path=${o}`),j.isString(s)&&c.push(`domain=${s}`),i===!0&&c.push("secure"),j.isString(l)&&c.push(`SameSite=${l}`),document.cookie=c.join("; ")},read(e){if(typeof document>"u")return null;const r=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return r?decodeURIComponent(r[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function qs(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Hs(e,r){return r?e.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):e}function Bo(e,r,n){let o=!qs(r);return e&&(o||n==!1)?Hs(e,r):r}const pn=e=>e instanceof ne?{...e}:e;function Ge(e,r){r=r||{};const n={};function o(d,p,b,$){return j.isPlainObject(d)&&j.isPlainObject(p)?j.merge.call({caseless:$},d,p):j.isPlainObject(p)?j.merge({},p):j.isArray(p)?p.slice():p}function s(d,p,b,$){if(j.isUndefined(p)){if(!j.isUndefined(d))return o(void 0,d,b,$)}else return o(d,p,b,$)}function i(d,p){if(!j.isUndefined(p))return o(void 0,p)}function l(d,p){if(j.isUndefined(p)){if(!j.isUndefined(d))return o(void 0,d)}else return o(void 0,p)}function c(d,p,b){if(b in r)return o(d,p);if(b in e)return o(void 0,d)}const u={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:c,headers:(d,p,b)=>s(pn(d),pn(p),b,!0)};return j.forEach(Object.keys({...e,...r}),function(p){const b=u[p]||s,$=b(e[p],r[p],p);j.isUndefined($)&&b!==c||(n[p]=$)}),n}const Oo=e=>{const r=Ge({},e);let{data:n,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:i,headers:l,auth:c}=r;if(r.headers=l=ne.from(l),r.url=Ro(Bo(r.baseURL,r.url,r.allowAbsoluteUrls),e.params,e.paramsSerializer),c&&l.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),j.isFormData(n)){if(X.hasStandardBrowserEnv||X.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if(j.isFunction(n.getHeaders)){const u=n.getHeaders(),d=["content-type","content-length"];Object.entries(u).forEach(([p,b])=>{d.includes(p.toLowerCase())&&l.set(p,b)})}}if(X.hasStandardBrowserEnv&&(o&&j.isFunction(o)&&(o=o(r)),o||o!==!1&&Os(r.url))){const u=s&&i&&Us.read(i);u&&l.set(s,u)}return r},Ws=typeof XMLHttpRequest<"u",Vs=Ws&&function(e){return new Promise(function(n,o){const s=Oo(e);let i=s.data;const l=ne.from(s.headers).normalize();let{responseType:c,onUploadProgress:u,onDownloadProgress:d}=s,p,b,$,h,m;function f(){h&&h(),m&&m(),s.cancelToken&&s.cancelToken.unsubscribe(p),s.signal&&s.signal.removeEventListener("abort",p)}let x=new XMLHttpRequest;x.open(s.method.toUpperCase(),s.url,!0),x.timeout=s.timeout;function g(){if(!x)return;const v=ne.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),L={data:!c||c==="text"||c==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:v,config:e,request:x};Po(function(M){n(M),f()},function(M){o(M),f()},L),x=null}"onloadend"in x?x.onloadend=g:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(g)},x.onabort=function(){x&&(o(new U("Request aborted",U.ECONNABORTED,e,x)),x=null)},x.onerror=function(w){const L=w&&w.message?w.message:"Network Error",k=new U(L,U.ERR_NETWORK,e,x);k.event=w||null,o(k),x=null},x.ontimeout=function(){let w=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const L=s.transitional||Mo;s.timeoutErrorMessage&&(w=s.timeoutErrorMessage),o(new U(w,L.clarifyTimeoutError?U.ETIMEDOUT:U.ECONNABORTED,e,x)),x=null},i===void 0&&l.setContentType(null),"setRequestHeader"in x&&j.forEach(l.toJSON(),function(w,L){x.setRequestHeader(L,w)}),j.isUndefined(s.withCredentials)||(x.withCredentials=!!s.withCredentials),c&&c!=="json"&&(x.responseType=s.responseType),d&&([$,m]=Bt(d,!0),x.addEventListener("progress",$)),u&&x.upload&&([b,h]=Bt(u),x.upload.addEventListener("progress",b),x.upload.addEventListener("loadend",h)),(s.cancelToken||s.signal)&&(p=v=>{x&&(o(!v||v.type?new lt(null,e,x):v),x.abort(),x=null)},s.cancelToken&&s.cancelToken.subscribe(p),s.signal&&(s.signal.aborted?p():s.signal.addEventListener("abort",p)));const y=Ns(s.url);if(y&&X.protocols.indexOf(y)===-1){o(new U("Unsupported protocol "+y+":",U.ERR_BAD_REQUEST,e));return}x.send(i||null)})},Ks=(e,r)=>{const{length:n}=e=e?e.filter(Boolean):[];if(r||n){let o=new AbortController,s;const i=function(d){if(!s){s=!0,c();const p=d instanceof Error?d:this.reason;o.abort(p instanceof U?p:new lt(p instanceof Error?p.message:p))}};let l=r&&setTimeout(()=>{l=null,i(new U(`timeout ${r} of ms exceeded`,U.ETIMEDOUT))},r);const c=()=>{e&&(l&&clearTimeout(l),l=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(i):d.removeEventListener("abort",i)}),e=null)};e.forEach(d=>d.addEventListener("abort",i));const{signal:u}=o;return u.unsubscribe=()=>j.asap(c),u}},Gs=function*(e,r){let n=e.byteLength;if(n<r){yield e;return}let o=0,s;for(;o<n;)s=o+r,yield e.slice(o,s),o=s},Qs=async function*(e,r){for await(const n of _s(e))yield*Gs(n,r)},_s=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const r=e.getReader();try{for(;;){const{done:n,value:o}=await r.read();if(n)break;yield o}}finally{await r.cancel()}},hn=(e,r,n,o)=>{const s=Qs(e,r);let i=0,l,c=u=>{l||(l=!0,o&&o(u))};return new ReadableStream({async pull(u){try{const{done:d,value:p}=await s.next();if(d){c(),u.close();return}let b=p.byteLength;if(n){let $=i+=b;n($)}u.enqueue(new Uint8Array(p))}catch(d){throw c(d),d}},cancel(u){return c(u),s.return()}},{highWaterMark:2})},un=64*1024,{isFunction:vt}=j,Js=(({Request:e,Response:r})=>({Request:e,Response:r}))(j.global),{ReadableStream:gn,TextEncoder:xn}=j.global,fn=(e,...r)=>{try{return!!e(...r)}catch{return!1}},Ys=e=>{e=j.merge.call({skipUndefined:!0},Js,e);const{fetch:r,Request:n,Response:o}=e,s=r?vt(r):typeof fetch=="function",i=vt(n),l=vt(o);if(!s)return!1;const c=s&&vt(gn),u=s&&(typeof xn=="function"?(m=>f=>m.encode(f))(new xn):async m=>new Uint8Array(await new n(m).arrayBuffer())),d=i&&c&&fn(()=>{let m=!1;const f=new n(X.origin,{body:new gn,method:"POST",get duplex(){return m=!0,"half"}}).headers.has("Content-Type");return m&&!f}),p=l&&c&&fn(()=>j.isReadableStream(new o("").body)),b={stream:p&&(m=>m.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(m=>{!b[m]&&(b[m]=(f,x)=>{let g=f&&f[m];if(g)return g.call(f);throw new U(`Response type '${m}' is not supported`,U.ERR_NOT_SUPPORT,x)})});const $=async m=>{if(m==null)return 0;if(j.isBlob(m))return m.size;if(j.isSpecCompliantForm(m))return(await new n(X.origin,{method:"POST",body:m}).arrayBuffer()).byteLength;if(j.isArrayBufferView(m)||j.isArrayBuffer(m))return m.byteLength;if(j.isURLSearchParams(m)&&(m=m+""),j.isString(m))return(await u(m)).byteLength},h=async(m,f)=>{const x=j.toFiniteNumber(m.getContentLength());return x??$(f)};return async m=>{let{url:f,method:x,data:g,signal:y,cancelToken:v,timeout:w,onDownloadProgress:L,onUploadProgress:k,responseType:M,headers:P,withCredentials:E="same-origin",fetchOptions:S}=Oo(m),D=r||fetch;M=M?(M+"").toLowerCase():"text";let B=Ks([y,v&&v.toAbortSignal()],w),q=null;const V=B&&B.unsubscribe&&(()=>{B.unsubscribe()});let I;try{if(k&&d&&x!=="get"&&x!=="head"&&(I=await h(P,g))!==0){let ce=new n(f,{method:"POST",body:g,duplex:"half"}),ve;if(j.isFormData(g)&&(ve=ce.headers.get("content-type"))&&P.setContentType(ve),ce.body){const[Ae,Ne]=dn(I,Bt(mn(k)));g=hn(ce.body,un,Ae,Ne)}}j.isString(E)||(E=E?"include":"omit");const W=i&&"credentials"in n.prototype,je={...S,signal:B,method:x.toUpperCase(),headers:P.normalize().toJSON(),body:g,duplex:"half",credentials:W?E:void 0};q=i&&new n(f,je);let oe=await(i?D(q,S):D(f,je));const ct=p&&(M==="stream"||M==="response");if(p&&(L||ct&&V)){const ce={};["status","statusText","headers"].forEach(dt=>{ce[dt]=oe[dt]});const ve=j.toFiniteNumber(oe.headers.get("content-length")),[Ae,Ne]=L&&dn(ve,Bt(mn(L),!0))||[];oe=new o(hn(oe.body,un,Ae,()=>{Ne&&Ne(),V&&V()}),ce)}M=M||"text";let jt=await b[j.findKey(b,M)||"text"](oe,m);return!ct&&V&&V(),await new Promise((ce,ve)=>{Po(ce,ve,{data:jt,headers:ne.from(oe.headers),status:oe.status,statusText:oe.statusText,config:m,request:q})})}catch(W){throw V&&V(),W&&W.name==="TypeError"&&/Load failed|fetch/i.test(W.message)?Object.assign(new U("Network Error",U.ERR_NETWORK,m,q),{cause:W.cause||W}):U.from(W,W&&W.code,m,q)}}},Zs=new Map,Uo=e=>{let r=e&&e.env||{};const{fetch:n,Request:o,Response:s}=r,i=[o,s,n];let l=i.length,c=l,u,d,p=Zs;for(;c--;)u=i[c],d=p.get(u),d===void 0&&p.set(u,d=c?new Map:Ys(r)),p=d;return d};Uo();const Jr={http:gs,xhr:Vs,fetch:{get:Uo}};j.forEach(Jr,(e,r)=>{if(e){try{Object.defineProperty(e,"name",{value:r})}catch{}Object.defineProperty(e,"adapterName",{value:r})}});const yn=e=>`- ${e}`,Xs=e=>j.isFunction(e)||e===null||e===!1;function ei(e,r){e=j.isArray(e)?e:[e];const{length:n}=e;let o,s;const i={};for(let l=0;l<n;l++){o=e[l];let c;if(s=o,!Xs(o)&&(s=Jr[(c=String(o)).toLowerCase()],s===void 0))throw new U(`Unknown adapter '${c}'`);if(s&&(j.isFunction(s)||(s=s.get(r))))break;i[c||"#"+l]=s}if(!s){const l=Object.entries(i).map(([u,d])=>`adapter ${u} `+(d===!1?"is not supported by the environment":"is not available in the build"));let c=n?l.length>1?`since :
`+l.map(yn).join(`
`):" "+yn(l[0]):"as no adapter specified";throw new U("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return s}const qo={getAdapter:ei,adapters:Jr};function _t(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new lt(null,e)}function bn(e){return _t(e),e.headers=ne.from(e.headers),e.data=Qt.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),qo.getAdapter(e.adapter||$t.adapter,e)(e).then(function(o){return _t(e),o.data=Qt.call(e,e.transformResponse,o),o.headers=ne.from(o.headers),o},function(o){return No(o)||(_t(e),o&&o.response&&(o.response.data=Qt.call(e,e.transformResponse,o.response),o.response.headers=ne.from(o.response.headers))),Promise.reject(o)})}const Ho="1.13.2",Vt={};["object","boolean","number","function","string","symbol"].forEach((e,r)=>{Vt[e]=function(o){return typeof o===e||"a"+(r<1?"n ":" ")+e}});const $n={};Vt.transitional=function(r,n,o){function s(i,l){return"[Axios v"+Ho+"] Transitional option '"+i+"'"+l+(o?". "+o:"")}return(i,l,c)=>{if(r===!1)throw new U(s(l," has been removed"+(n?" in "+n:"")),U.ERR_DEPRECATED);return n&&!$n[l]&&($n[l]=!0,console.warn(s(l," has been deprecated since v"+n+" and will be removed in the near future"))),r?r(i,l,c):!0}};Vt.spelling=function(r){return(n,o)=>(console.warn(`${o} is likely a misspelling of ${r}`),!0)};function ti(e,r,n){if(typeof e!="object")throw new U("options must be an object",U.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let s=o.length;for(;s-- >0;){const i=o[s],l=r[i];if(l){const c=e[i],u=c===void 0||l(c,i,e);if(u!==!0)throw new U("option "+i+" must be "+u,U.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new U("Unknown option "+i,U.ERR_BAD_OPTION)}}const Pt={assertOptions:ti,validators:Vt},pe=Pt.validators;let Ve=class{constructor(r){this.defaults=r||{},this.interceptors={request:new ln,response:new ln}}async request(r,n){try{return await this._request(r,n)}catch(o){if(o instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{o.stack?i&&!String(o.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+i):o.stack=i}catch{}}throw o}}_request(r,n){typeof r=="string"?(n=n||{},n.url=r):n=r||{},n=Ge(this.defaults,n);const{transitional:o,paramsSerializer:s,headers:i}=n;o!==void 0&&Pt.assertOptions(o,{silentJSONParsing:pe.transitional(pe.boolean),forcedJSONParsing:pe.transitional(pe.boolean),clarifyTimeoutError:pe.transitional(pe.boolean)},!1),s!=null&&(j.isFunction(s)?n.paramsSerializer={serialize:s}:Pt.assertOptions(s,{encode:pe.function,serialize:pe.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Pt.assertOptions(n,{baseUrl:pe.spelling("baseURL"),withXsrfToken:pe.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=i&&j.merge(i.common,i[n.method]);i&&j.forEach(["delete","get","head","post","put","patch","common"],m=>{delete i[m]}),n.headers=ne.concat(l,i);const c=[];let u=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(n)===!1||(u=u&&f.synchronous,c.unshift(f.fulfilled,f.rejected))});const d=[];this.interceptors.response.forEach(function(f){d.push(f.fulfilled,f.rejected)});let p,b=0,$;if(!u){const m=[bn.bind(this),void 0];for(m.unshift(...c),m.push(...d),$=m.length,p=Promise.resolve(n);b<$;)p=p.then(m[b++],m[b++]);return p}$=c.length;let h=n;for(;b<$;){const m=c[b++],f=c[b++];try{h=m(h)}catch(x){f.call(this,x);break}}try{p=bn.call(this,h)}catch(m){return Promise.reject(m)}for(b=0,$=d.length;b<$;)p=p.then(d[b++],d[b++]);return p}getUri(r){r=Ge(this.defaults,r);const n=Bo(r.baseURL,r.url,r.allowAbsoluteUrls);return Ro(n,r.params,r.paramsSerializer)}};j.forEach(["delete","get","head","options"],function(r){Ve.prototype[r]=function(n,o){return this.request(Ge(o||{},{method:r,url:n,data:(o||{}).data}))}});j.forEach(["post","put","patch"],function(r){function n(o){return function(i,l,c){return this.request(Ge(c||{},{method:r,headers:o?{"Content-Type":"multipart/form-data"}:{},url:i,data:l}))}}Ve.prototype[r]=n(),Ve.prototype[r+"Form"]=n(!0)});let ri=class Wo{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const o=this;this.promise.then(s=>{if(!o._listeners)return;let i=o._listeners.length;for(;i-- >0;)o._listeners[i](s);o._listeners=null}),this.promise.then=s=>{let i;const l=new Promise(c=>{o.subscribe(c),i=c}).then(s);return l.cancel=function(){o.unsubscribe(i)},l},r(function(i,l,c){o.reason||(o.reason=new lt(i,l,c),n(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const n=this._listeners.indexOf(r);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const r=new AbortController,n=o=>{r.abort(o)};return this.subscribe(n),r.signal.unsubscribe=()=>this.unsubscribe(n),r.signal}static source(){let r;return{token:new Wo(function(s){r=s}),cancel:r}}};function ni(e){return function(n){return e.apply(null,n)}}function oi(e){return j.isObject(e)&&e.isAxiosError===!0}const Vr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Vr).forEach(([e,r])=>{Vr[r]=e});function Vo(e){const r=new Ve(e),n=vo(Ve.prototype.request,r);return j.extend(n,Ve.prototype,r,{allOwnKeys:!0}),j.extend(n,r,null,{allOwnKeys:!0}),n.create=function(s){return Vo(Ge(e,s))},n}const Q=Vo($t);Q.Axios=Ve;Q.CanceledError=lt;Q.CancelToken=ri;Q.isCancel=No;Q.VERSION=Ho;Q.toFormData=Wt;Q.AxiosError=U;Q.Cancel=Q.CanceledError;Q.all=function(r){return Promise.all(r)};Q.spread=ni;Q.isAxiosError=oi;Q.mergeConfig=Ge;Q.AxiosHeaders=ne;Q.formToJSON=e=>Io(j.isHTMLForm(e)?new FormData(e):e);Q.getAdapter=qo.getAdapter;Q.HttpStatusCode=Vr;Q.default=Q;const{Axios:vg,AxiosError:wg,CanceledError:Cg,isCancel:Sg,CancelToken:kg,VERSION:Tg,all:Ag,Cancel:Eg,isAxiosError:Fg,spread:Lg,toFormData:Dg,AxiosHeaders:zg,HttpStatusCode:Rg,formToJSON:Mg,getAdapter:Ig,mergeConfig:Ng}=Q;class ai{client;constructor(){const r="/api/v1";localStorage.removeItem("api_base_url"),this.client=Q.create({baseURL:r,timeout:1e4,headers:{"Content-Type":"application/json"}}),this.client.interceptors.request.use(n=>{const o=this.getAuthToken();return o&&(n.headers.Authorization=`Bearer ${o}`),n},n=>Promise.reject(n)),this.client.interceptors.response.use(n=>n,n=>{var s,i,l,c,u,d;if(!n.response){const p={message:n.code==="ECONNABORTED"?"Request timeout. Please try again.":"Network error. Please check your internet connection.",code:"NETWORK_ERROR",details:{originalError:n.message}};return Promise.reject(p)}const o={message:this.getErrorMessage(n),code:n.response.status.toString(),details:n.response.data};switch(n.response.status){case 401:this.clearAuthToken(),o.message="Your session has expired. Please log in again.";break;case 403:o.message="You don't have permission to perform this action.";break;case 404:o.message="The requested resource was not found.";break;case 409:o.message=((i=(s=n.response.data)==null?void 0:s.error)==null?void 0:i.message)||"A conflict occurred. The resource may have been modified.";break;case 422:o.message=((c=(l=n.response.data)==null?void 0:l.error)==null?void 0:c.message)||"Invalid data provided.";break;case 429:o.message="Too many requests. Please wait a moment and try again.";break;case 500:o.message="Server error. Please try again later.";break;case 503:o.message="Service temporarily unavailable. Please try again later.";break}return console.error("API Error:",{status:n.response.status,message:o.message,url:(u=n.config)==null?void 0:u.url,method:(d=n.config)==null?void 0:d.method}),Promise.reject(o)})}getAuthToken(){return localStorage.getItem("auth_token")}setAuthToken(r){localStorage.setItem("auth_token",r)}clearAuthToken(){localStorage.removeItem("auth_token")}getErrorMessage(r){var n,o,s,i,l;return(s=(o=(n=r.response)==null?void 0:n.data)==null?void 0:o.error)!=null&&s.message?r.response.data.error.message:(l=(i=r.response)==null?void 0:i.data)!=null&&l.message?r.response.data.message:r.message?r.message:"An unexpected error occurred"}async retryRequest(r,n=3,o=1e3){let s;for(let i=1;i<=n;i++)try{return await r()}catch(l){if(s=l,l.code&&l.code.startsWith("4")&&l.code!=="408"&&l.code!=="429")throw l;i<n&&await new Promise(c=>setTimeout(c,o*i))}throw s}updateBaseUrl(r){let n;try{const o=new URL(r).origin,s=window.location.origin;o===s||window.location.hostname==="localhost"&&new URL(r).hostname==="localhost"?n="/api/v1":(n=r.replace(/\/$/,""),n.endsWith("/api/v1")||(n+="/api/v1"))}catch{n=r.replace(/\/$/,""),n.endsWith("/api/v1")||(n+="/api/v1")}this.client.defaults.baseURL=n,console.log("API base URL updated to:",n)}async checkConnectivity(){try{return await this.healthCheck(),!0}catch{return!1}}async get(r,n){return(await this.client.get(r,{params:n})).data.data}async post(r,n){return(await this.client.post(r,n)).data.data}async put(r,n){return(await this.client.put(r,n)).data.data}async patch(r,n){return(await this.client.patch(r,n)).data.data}async delete(r){return(await this.client.delete(r)).data.data}async login(r,n){const s=(await this.client.post("/auth/login",{username:r,password:n})).data;return this.setAuthToken(s.token),s}async logout(){try{await this.post("/auth/logout")}finally{this.clearAuthToken()}}async changePassword(r,n){await this.post("/auth/change-password",{currentPassword:r,newPassword:n}),this.clearAuthToken()}async healthCheck(){return(await Q.get("/health")).data}async getBoats(){return this.get("/boats")}async getBoat(r){return this.get(`/boats/${r}`)}async createBoat(r){return this.post("/boats",r)}async updateBoat(r,n){return this.put(`/boats/${r}`,n)}async toggleBoatStatus(r,n){return this.patch(`/boats/${r}/status`,{enabled:n})}async setActiveBoat(r){return this.patch(`/boats/${r}/active`)}async getTrips(r){return this.get("/trips",r)}async getTrip(r){return this.get(`/trips/${r}`)}async createTrip(r){return this.post("/trips",r)}async updateTrip(r,n){return this.put(`/trips/${r}`,n)}async addManualData(r,n){return this.patch(`/trips/${r}/manual-data`,n)}async getLicenseProgress(){return this.get("/captain-log/progress")}async getNotes(r){return this.get("/notes",r)}async getNote(r){return this.get(`/notes/${r}`)}async createNote(r){return this.post("/notes",r)}async updateNote(r,n){return this.put(`/notes/${r}`,n)}async deleteNote(r){return this.delete(`/notes/${r}`)}async getTodoLists(r){return this.get("/todos",r?{boatId:r}:void 0)}async getTodoList(r){return this.get(`/todos/${r}`)}async createTodoList(r){return this.post("/todos",r)}async updateTodoList(r,n){return this.put(`/todos/${r}`,n)}async deleteTodoList(r){return this.delete(`/todos/${r}`)}async addTodoItem(r,n){return this.post(`/todos/${r}/items`,{content:n})}async toggleTodoItem(r){return this.patch(`/todos/items/${r}/complete`)}async updateTodoItem(r,n){return this.put(`/todos/items/${r}`,n)}async deleteTodoItem(r){return this.delete(`/todos/items/${r}`)}async getMaintenanceTemplates(r){return this.get("/maintenance/templates",r?{boatId:r}:void 0)}async getMaintenanceTemplate(r){return this.get(`/maintenance/templates/${r}`)}async createMaintenanceTemplate(r){return this.post("/maintenance/templates",r)}async updateMaintenanceTemplate(r,n){return this.put(`/maintenance/templates/${r}`,n)}async deleteMaintenanceTemplate(r){return this.delete(`/maintenance/templates/${r}`)}async getUpcomingMaintenanceEvents(r){return this.get("/maintenance/events/upcoming",r?{boatId:r}:void 0)}async getCompletedMaintenanceEvents(r){return this.get("/maintenance/events/completed",r?{boatId:r}:void 0)}async getMaintenanceEvent(r){return this.get(`/maintenance/events/${r}`)}async completeMaintenanceEvent(r,n){return this.post(`/maintenance/events/${r}/complete`,n)}async getMarkedLocations(r){return this.get("/locations",r)}async getMarkedLocation(r){return this.get(`/locations/${r}`)}async createMarkedLocation(r){return this.post("/locations",r)}async updateMarkedLocation(r,n){return this.put(`/locations/${r}`,n)}async deleteMarkedLocation(r){return this.delete(`/locations/${r}`)}async getNearbyLocations(r,n,o){return this.get("/locations/nearby",{latitude:r,longitude:n,radiusMeters:o})}async uploadPhoto(r,n,o){const s=new FormData;return s.append("photo",r),s.append("entityType",n),s.append("entityId",o),(await this.client.post("/photos",s,{headers:{"Content-Type":"multipart/form-data"}})).data.data}async getPhotos(r,n){return this.get("/photos",{entityType:r,entityId:n})}async deletePhoto(r){return this.delete(`/photos/${r}`)}async getNotifications(){const r=await this.get("/notifications");return Array.isArray(r)?r:(r==null?void 0:r.notifications)||[]}async markNotificationAsRead(r){return this.patch(`/notifications/${r}/read`)}async createBackup(){return this.post("/backups")}async getBackups(){return this.get("/backups")}async downloadBackup(r){return(await this.client.get(`/backups/${r}/download`,{responseType:"blob"})).data}}const N=new ai,si=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  transform: translateY(${e=>e.$show?"0":"-100%"});
  transition: transform 0.3s ease-in-out;
`,ii=a.div`
  background: ${e=>e.theme.colors.status.warning};
  color: ${e=>e.theme.colors.background};
  padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.md};
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.theme.spacing.md};
`,li=a.button`
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
`,ci=a.div`
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
`,di=({showConnectionStatus:e=!0})=>{const[r,n]=C.useState(navigator.onLine),[o,s]=C.useState(!1),[i,l]=C.useState(!1);C.useEffect(()=>{const u=()=>{n(!0),s(!1),p()},d=()=>{n(!1),s(!0)},p=async()=>{try{!await N.checkConnectivity()&&navigator.onLine&&(n(!1),s(!0))}catch{navigator.onLine&&(n(!1),s(!0))}};window.addEventListener("online",u),window.addEventListener("offline",d),navigator.onLine?p():s(!0);const b=setInterval(()=>{r||p()},3e4);return()=>{window.removeEventListener("online",u),window.removeEventListener("offline",d),clearInterval(b)}},[r]);const c=async()=>{l(!0);try{await N.checkConnectivity()&&(n(!0),s(!1))}catch{}finally{l(!1)}};return t.jsxs(t.Fragment,{children:[t.jsx(si,{$show:o,children:t.jsxs(ii,{children:[t.jsx("span",{children:"⚠ You are currently offline"}),t.jsx(li,{onClick:c,disabled:i,children:i?"Checking...":"Retry"})]})}),e&&t.jsx(ci,{$isOnline:r,children:r?"Online":"Offline"})]})},mi={primary:F`
    .panel-header {
      background-color: ${e=>e.theme.colors.primary.neonCarrot};
    }

    .panel-content {
      border-color: ${e=>e.theme.colors.primary.neonCarrot};
    }
  `,secondary:F`
    .panel-header {
      background-color: ${e=>e.theme.colors.primary.lilac};
    }

    .panel-content {
      border-color: ${e=>e.theme.colors.primary.lilac};
    }
  `,accent:F`
    .panel-header {
      background-color: ${e=>e.theme.colors.primary.anakiwa};
    }

    .panel-content {
      border-color: ${e=>e.theme.colors.primary.anakiwa};
    }
  `,info:F`
    .panel-header {
      background-color: ${e=>e.theme.colors.primary.mariner};
    }

    .panel-content {
      border-color: ${e=>e.theme.colors.primary.mariner};
    }
  `},pi={none:F`
    padding: 0;
  `,sm:F`
    padding: ${e=>e.theme.spacing.sm};
  `,md:F`
    padding: ${e=>e.theme.spacing.md};
  `,lg:F`
    padding: ${e=>e.theme.spacing.lg};
  `},hi=a.div`
  display: flex;
  flex-direction: column;

  ${e=>mi[e.variant]}
`,ui=a.div`
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
`,gi=a.div`
  background-color: ${e=>e.theme.colors.background};
  border: 1px solid;
  border-top: none;
  flex: 1;

  ${e=>pi[e.padding]}
`,z=({children:e,title:r,variant:n="primary",padding:o="md",className:s})=>t.jsxs(hi,{variant:n,className:s,children:[r&&t.jsx(ui,{className:"panel-header",children:r}),t.jsx(gi,{padding:o,className:"panel-content",children:e})]}),xi={primary:F`
    background-color: ${e=>e.theme.colors.primary.neonCarrot};
    color: ${e=>e.theme.colors.text.inverse};

    &:hover:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.goldenTanoi};
    }

    &:active:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.tanoi};
      box-shadow: ${e=>e.theme.shadows.glowStrong};
    }
  `,secondary:F`
    background-color: ${e=>e.theme.colors.primary.lilac};
    color: ${e=>e.theme.colors.text.inverse};

    &:hover:not(:disabled) {
      background-color: #DDA6DD;
    }

    &:active:not(:disabled) {
      background-color: #EEB3EE;
      box-shadow: 0 0 40px rgba(204, 153, 204, 0.5);
    }
  `,accent:F`
    background-color: ${e=>e.theme.colors.primary.anakiwa};
    color: ${e=>e.theme.colors.text.inverse};

    &:hover:not(:disabled) {
      background-color: #AAD6FF;
    }

    &:active:not(:disabled) {
      background-color: #BBE0FF;
      box-shadow: 0 0 40px rgba(153, 204, 255, 0.5);
    }
  `,info:F`
    background-color: ${e=>e.theme.colors.primary.mariner};
    color: ${e=>e.theme.colors.text.inverse};

    &:hover:not(:disabled) {
      background-color: #4477DD;
    }

    &:active:not(:disabled) {
      background-color: #5588EE;
      box-shadow: 0 0 40px rgba(51, 102, 204, 0.5);
    }
  `,warning:F`
    background-color: ${e=>e.theme.colors.primary.goldenTanoi};
    color: ${e=>e.theme.colors.text.inverse};

    &:hover:not(:disabled) {
      background-color: #FFD677;
    }

    &:active:not(:disabled) {
      background-color: #FFE088;
      box-shadow: 0 0 40px rgba(255, 204, 102, 0.5);
    }
  `,danger:F`
    background-color: ${e=>e.theme.colors.status.error};
    color: ${e=>e.theme.colors.text.inverse};

    &:hover:not(:disabled) {
      background-color: #FF6666;
    }

    &:active:not(:disabled) {
      background-color: #FF7777;
      box-shadow: 0 0 40px rgba(255, 85, 85, 0.5);
    }
  `,sidebar:F`
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
  `,"cap-left":F`
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
  `,"cap-right":F`
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
  `},fi={sm:F`
    height: 28px;
    padding: 0 ${e=>e.theme.spacing.md};
    font-size: ${e=>e.theme.typography.fontSize.sm};
  `,md:F`
    height: 40px;
    padding: 0 ${e=>e.theme.spacing.lg};
    font-size: ${e=>e.theme.typography.fontSize.md};
  `,lg:F`
    height: 56px;
    padding: 0 ${e=>e.theme.spacing.xl};
    font-size: ${e=>e.theme.typography.fontSize.lg};
  `},yi=a.button`
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
  position: relative;
  overflow: hidden;

  /* Left-to-right sweep hover effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.25);
    transform: translateX(-100%);
    transition: transform 0.35s ease;
    border-radius: inherit;
  }

  &:hover:not(:disabled)::after {
    transform: translateX(0);
  }

  &:active:not(:disabled)::after {
    background: rgba(255, 255, 255, 0.35);
  }

  ${e=>xi[e.variant]}
  ${e=>fi[e.size]}

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
`,T=({children:e,variant:r="primary",size:n="md",disabled:o=!1,onClick:s,className:i,type:l="button"})=>t.jsx(yi,{variant:r,size:n,disabled:o,onClick:s,className:i,type:l,children:e}),bi={1:F`
    font-size: ${e=>e.theme.typography.fontSize.xxxl};
  `,2:F`
    font-size: ${e=>e.theme.typography.fontSize.xxl};
  `,3:F`
    font-size: ${e=>e.theme.typography.fontSize.xl};
  `,4:F`
    font-size: ${e=>e.theme.typography.fontSize.lg};
  `,5:F`
    font-size: ${e=>e.theme.typography.fontSize.md};
  `,6:F`
    font-size: ${e=>e.theme.typography.fontSize.md};
  `},$i={neonCarrot:F`
    color: ${e=>e.theme.colors.primary.neonCarrot};
  `,tanoi:F`
    color: ${e=>e.theme.colors.primary.tanoi};
  `,lilac:F`
    color: ${e=>e.theme.colors.primary.lilac};
  `,anakiwa:F`
    color: ${e=>e.theme.colors.primary.anakiwa};
  `,mariner:F`
    color: ${e=>e.theme.colors.primary.mariner};
  `},ji={left:F`
    text-align: left;
  `,center:F`
    text-align: center;
  `,right:F`
    text-align: right;
  `},vi={neonCarrot:"#FF9933",tanoi:"#FFCC99",lilac:"#CC99CC",anakiwa:"#99CCFF"},wi=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Ci=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: ${e=>e.theme.typography.lineHeight.tight};
  margin: 0;

  ${e=>bi[e.level]}
  ${e=>$i[e.color]}
  ${e=>ji[e.align]}
`,Si=a.div`
  width: 100%;
  height: 4px;
  background-color: ${e=>e.color};
  border-radius: 0;
`,O=({children:e,level:r=1,color:n="neonCarrot",align:o="left",withBar:s=!1,barColor:i="neonCarrot",className:l})=>{const c=`h${r}`,u=t.jsx(Ci,{as:c,level:r,color:n,align:o,className:l,children:e});return s?t.jsxs(wi,{children:[u,t.jsx(Si,{color:vi[i]})]}):u},Ko=Z`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,ki=Z`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`,Ti=a.div`
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 9999;
  max-width: 400px;
  width: 100%;
  animation: ${e=>e.show?Ko:ki} 0.3s ease-in-out;
  
  @media (max-width: 768px) {
    top: 60px;
    right: 10px;
    left: 10px;
    max-width: none;
  }
`,Ai=a.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 80vh;
  overflow-y: auto;
`,Ei=a.div`
  padding: 16px;
  border-left: 4px solid ${e=>{switch(e.type){case"maintenance":return e.theme.colors.primary.neonCarrot;case"warning":return e.theme.colors.status.warning;case"error":return e.theme.colors.status.error;default:return e.theme.colors.primary.anakiwa}}};
  background: ${e=>e.isRead?e.theme.colors.surface.dark:e.theme.colors.background};
  opacity: ${e=>e.isRead?.7:1};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>e.theme.colors.surface.medium};
  }
`,Fi=a.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`,Li=a.div`
  font-weight: bold;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 14px;
`,Di=a.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.light};
  white-space: nowrap;
  margin-left: 8px;
`,zi=a.div`
  color: ${e=>e.theme.colors.text.light};
  font-size: 13px;
  line-height: 1.4;
`,Ri=a.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`,Mi=a.div`
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
`,Ii=a.button`
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
`,Ni=a.div`
  text-align: center;
  padding: 32px 16px;
  color: ${e=>e.theme.colors.text.light};
`,Pi=({className:e})=>{const[r,n]=C.useState([]),[o,s]=C.useState(!1),[i,l]=C.useState(!1),c=(r||[]).filter(m=>!m.read).length;C.useEffect(()=>{u();const m=setInterval(u,3e4);return()=>clearInterval(m)},[]);const u=async()=>{try{l(!0);const m=await N.getNotifications();n(m)}catch(m){console.error("Failed to load notifications:",m)}finally{l(!1)}},d=()=>{s(!o)},p=async m=>{if(!m.read)try{await N.markNotificationAsRead(m.id),n(f=>f.map(x=>x.id===m.id?{...x,read:!0}:x))}catch(f){console.error("Failed to mark notification as read:",f)}},b=async()=>{const m=(r||[]).filter(f=>!f.read);try{await Promise.all(m.map(f=>N.markNotificationAsRead(f.id))),n(f=>f.map(x=>({...x,read:!0})))}catch(f){console.error("Failed to mark all notifications as read:",f)}},$=m=>{const f=new Date(m),g=new Date().getTime()-f.getTime(),y=Math.floor(g/6e4),v=Math.floor(y/60),w=Math.floor(v/24);return y<1?"Just now":y<60?`${y}m ago`:v<24?`${v}h ago`:w<7?`${w}d ago`:f.toLocaleDateString()},h=m=>{switch(m){case"maintenance_due":return"🔧";case"system":return"ℹ️";case"warning":return"⚠️";case"error":return"❌";default:return"📢"}};return t.jsxs("div",{className:e,children:[t.jsxs(Ii,{onClick:d,$hasUnread:c>0,children:["Alerts",c>0&&t.jsx(Mi,{count:c,children:c>99?"99+":c})]}),o&&t.jsx(Ti,{show:o,children:t.jsx(z,{children:t.jsxs("div",{style:{padding:"16px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsx(O,{level:3,children:"System Alerts"}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[c>0&&t.jsx(T,{size:"sm",variant:"secondary",onClick:b,children:"Mark All Read"}),t.jsx(T,{size:"sm",variant:"secondary",onClick:d,children:"Close"})]})]}),i?t.jsx("div",{style:{textAlign:"center",padding:"20px"},children:"Loading notifications..."}):r.length===0?t.jsxs(Ni,{children:[t.jsx("div",{style:{fontSize:"32px",marginBottom:"8px"},children:"📭"}),t.jsx("div",{children:"No notifications"})]}):t.jsx(Ai,{children:r.map(m=>t.jsxs(Ei,{type:m.type,isRead:m.read,onClick:()=>p(m),children:[t.jsxs(Fi,{children:[t.jsxs(Li,{children:[h(m.type)," ",m.title]}),t.jsx(Di,{children:$(m.createdAt)})]}),t.jsx(zi,{children:m.message}),m.entityType&&m.entityId&&t.jsx(Ri,{children:t.jsx(T,{size:"sm",variant:"primary",onClick:()=>{const f=m.entityType==="maintenance"?`/maintenance/events/${m.entityId}`:`/${m.entityType}/${m.entityId}`;window.location.href=f},children:"View Details"})})]},m.id))})]})})})]})};a.div`
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
  animation: ${Ko} 0.3s ease-in-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  
  background: ${e=>{switch(e.type){case"success":return"#51cf66";case"error":return"#ff6b6b";case"warning":return"#ffd43b";case"info":return"#339af0";default:return"#339af0"}}};
  
  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
    left: 10px;
    max-width: none;
  }
`;a.button`
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
`;const Yr="200px",Bi="60px",jn="60px",Kr="40px",Oi="3px",Ui="44px",$e="768px",Go=Z`
  from { opacity: 0; }
  to   { opacity: 1; }
`,qi=a.div`
  min-height: 100vh;
  display: grid;
  background: ${e=>e.theme.colors.background};
  grid-template-columns: ${Yr} 1fr;
  grid-template-rows: ${jn} 1fr ${Kr};
  grid-template-areas:
    "sidebar header"
    "sidebar content"
    "sidebar footer";
  gap: 0;
  animation: ${Go} 0.6s ease;

  @media (max-width: ${$e}) {
    grid-template-columns: 1fr;
    grid-template-rows: ${jn} 1fr ${Kr};
    grid-template-areas:
      "header"
      "content"
      "footer";
  }
`,Hi=a.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  gap: ${Oi};
  overflow-y: auto;
  overflow-x: hidden;
  animation: ${Go} 0.4s ease;

  @media (max-width: ${$e}) {
    display: none;
  }
`,Wi=a.div`
  width: ${Yr};
  height: ${Bi};
  background: ${e=>e.theme.colors.primary.tanoi};
  position: relative;
  flex-shrink: 0;
  border-radius: 32px 0 0 0;
`,Vi=a.div`
  width: ${Yr};
  height: ${Kr};
  background: ${e=>e.theme.colors.primary.lilac};
  position: relative;
  flex-shrink: 0;
  border-radius: 0 0 0 32px;
  margin-top: auto;
`,wt=["tanoi","anakiwa","lilac","goldenTanoi","neonCarrot","mariner","anakiwa","lilac","tanoi","neonCarrot","goldenTanoi","mariner"],Ki=a.button`
  width: 100%;
  height: ${Ui};
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
  position: relative;
  overflow: hidden;
  z-index: 0;

  /* Left-to-right sweep hover effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.25);
    transform: translateX(-100%);
    transition: transform 0.35s ease;
    z-index: 0;
    border-radius: inherit;
  }

  &:hover:not(:disabled)::after {
    transform: translateX(0);
  }

  &:active:not(:disabled)::after {
    background: rgba(255, 255, 255, 0.35);
  }

  ${e=>e.$isActive&&F`
    filter: brightness(1.35);
    box-shadow: 0 0 12px currentColor, inset 0 0 8px rgba(255,255,255,0.15);

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 4px;
      bottom: 4px;
      width: 4px;
      background: #fff;
      border-radius: 0 2px 2px 0;
      z-index: 1;
    }
  `}
`,Gi=a.div`
  width: 60%;
  height: 3px;
  background: ${e=>e.$color};
  border-radius: 0 2px 2px 0;
  flex-shrink: 0;
  opacity: 0.6;
`,Qi=a.header`
  grid-area: header;
  background: ${e=>e.theme.colors.primary.tanoi};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px 0 16px;
  position: relative;

  @media (max-width: ${$e}) {
    border-radius: 0;
    justify-content: center;
  }
`,_i=a.h1`
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

  @media (max-width: ${$e}) {
    font-size: ${e=>e.theme.typography.fontSize.lg};
    letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  }
`,Ji=a.img`
  height: 40px;
  width: auto;
  cursor: pointer;
  margin-right: 12px;
  filter: drop-shadow(0 0 6px rgba(255, 153, 51, 0.4));
  transition: filter 0.2s;

  &:hover {
    filter: drop-shadow(0 0 10px rgba(255, 153, 51, 0.7));
  }

  @media (max-width: ${$e}) {
    height: 32px;
  }
`,Yi=a.span`
  color: ${e=>e.theme.colors.text.inverse};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  margin-right: auto;
  padding-left: 40px;
  opacity: 0.75;

  @media (max-width: ${$e}) {
    display: none;
  }
`,Zi=a.main`
  grid-area: content;
  background: ${e=>e.theme.colors.background};
  overflow-y: auto;
  padding: ${e=>e.theme.spacing.lg};

  @media (max-width: ${$e}) {
    padding: ${e=>e.theme.spacing.md};
  }
`,Xi=a.footer`
  grid-area: footer;
  background: ${e=>e.theme.colors.primary.lilac};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px 0 16px;
  position: relative;

  @media (max-width: ${$e}) {
    border-radius: 0;
    justify-content: center;
  }
`,el=a.span`
  color: ${e=>e.theme.colors.text.inverse};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  opacity: 0.8;
`,tl=a.div`
  display: none;

  @media (max-width: ${$e}) {
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
`,rl=a.button`
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
`,nl=a.button`
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
`,ol=a.button`
  display: none;
  @media (max-width: ${$e}) {
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
`,vn=[{label:"Home",path:"/"},{label:"Dashboard",path:"/dashboard"},{label:"Vessels",path:"/boats"},{label:"Trip Log",path:"/trips"},{label:"Notes",path:"/notes"},{label:"To-Do Lists",path:"/todos"},{label:"Maintenance",path:"/maintenance"},{label:"Navigation",path:"/map"},{label:"Reports",path:"/reports"},{label:"Calendar",path:"/calendar"},{label:"Photos",path:"/photos"},{label:"Settings",path:"/settings"}];function al(){const e=new Date,r=e.getFullYear(),n=new Date(r,0,1).getTime(),o=new Date(r+1,0,1).getTime(),s=(e.getTime()-n)/(o-n);return((r-2323)*1e3+s*1e3).toFixed(1)}const sl=({children:e})=>{const r=se(),n=Ca(),[o,s]=C.useState(!1),i=d=>d==="/"?n.pathname==="/":d==="/dashboard"?n.pathname==="/dashboard":n.pathname.startsWith(d),l=d=>{r(d),s(!1)},c=al(),u=["#664466","#3366CC","#006699","#CC99CC","#FFCC66"];return t.jsxs(qi,{children:[t.jsxs(Hi,{children:[t.jsx(Wi,{}),vn.map((d,p)=>{const b=wt[p%wt.length],h={tanoi:"#FFCC99",goldenTanoi:"#FFCC66",neonCarrot:"#FF9933",lilac:"#CC99CC",anakiwa:"#99CCFF",mariner:"#3366CC",paleCanary:"#FFFF99",eggplant:"#664466",bahamBlue:"#006699"}[b]||"#FFCC99";return t.jsxs(Ke.Fragment,{children:[p>0&&t.jsx(Gi,{$color:u[p%u.length]}),t.jsx(Ki,{$color:h,$isActive:i(d.path),onClick:()=>l(d.path),"aria-current":i(d.path)?"page":void 0,children:d.label})]},d.path)}),t.jsx(Vi,{})]}),t.jsxs(Qi,{children:[t.jsx(ol,{onClick:()=>s(!0),children:"Menu"}),t.jsxs(Yi,{children:["Stardate ",c," (",new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),")"]}),t.jsx(Ji,{src:"/assets/captains-log-logo.png",alt:"Captain's Log",onClick:()=>l("/")}),t.jsx(_i,{onClick:()=>l("/"),children:"Captain's Log"}),t.jsx("div",{style:{marginLeft:"16px"},children:t.jsx(Pi,{})})]}),t.jsx(Zi,{children:e}),t.jsxs(Xi,{children:[t.jsx(di,{}),t.jsx(el,{style:{marginLeft:"auto"},children:"LCARS v47.3 — Library Computer Access/Retrieval System"})]}),t.jsxs(tl,{$open:o,children:[t.jsx(nl,{onClick:()=>s(!1),children:"Close"}),vn.map((d,p)=>{const $={tanoi:"#FFCC99",goldenTanoi:"#FFCC66",neonCarrot:"#FF9933",lilac:"#CC99CC",anakiwa:"#99CCFF",mariner:"#3366CC",paleCanary:"#FFFF99",eggplant:"#664466",bahamBlue:"#006699"}[wt[p%wt.length]]||"#FFCC99";return t.jsx(rl,{$color:$,$isActive:i(d.path),onClick:()=>l(d.path),children:d.label},d.path)})]})]})},il=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: ${e=>e.theme.spacing.xl};
  text-align: center;
`,ll=a.div`
  color: ${e=>e.theme.colors.status.error};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  margin: ${e=>e.theme.spacing.lg} 0;
`;a.details`
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
`;const cl=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.xl};
`;class dl extends C.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,n){console.error("Error caught by boundary:",r,n),this.setState({error:r,errorInfo:n}),console.error("Production error:",{error:r.message,stack:r.stack,componentStack:n.componentStack})}handleReload=()=>{window.location.reload()};handleGoHome=()=>{window.location.href="/"};handleRetry=()=>{this.setState({hasError:!1,error:void 0,errorInfo:void 0})};render(){return this.state.hasError?this.props.fallback?this.props.fallback:t.jsx(il,{children:t.jsxs(z,{children:[t.jsx(O,{level:1,children:"System Error"}),t.jsx(ll,{children:"An unexpected error has occurred in the application."}),t.jsx("p",{children:"The error has been logged and will be investigated. You can try reloading the page or returning to the dashboard."}),t.jsxs(cl,{children:[t.jsx(T,{onClick:this.handleRetry,variant:"primary",children:"Try Again"}),t.jsx(T,{onClick:this.handleReload,variant:"secondary",children:"Reload Page"}),t.jsx(T,{onClick:this.handleGoHome,variant:"secondary",children:"Go to Dashboard"})]}),!1]})}):this.props.children}}const ml={neonCarrot:F`
    background-color: ${e=>e.theme.colors.primary.neonCarrot};

    &::before {
      background-color: ${e=>e.theme.colors.background};
    }
  `,tanoi:F`
    background-color: ${e=>e.theme.colors.primary.tanoi};

    &::before {
      background-color: ${e=>e.theme.colors.background};
    }
  `,lilac:F`
    background-color: ${e=>e.theme.colors.primary.lilac};

    &::before {
      background-color: ${e=>e.theme.colors.background};
    }
  `,anakiwa:F`
    background-color: ${e=>e.theme.colors.primary.anakiwa};

    &::before {
      background-color: ${e=>e.theme.colors.background};
    }
  `,mariner:F`
    background-color: ${e=>e.theme.colors.primary.mariner};

    &::before {
      background-color: ${e=>e.theme.colors.background};
    }
  `};a.div`
  position: relative;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  flex-shrink: 0;

  ${e=>ml[e.color]}

  /* Create the quarter-circle cutout using a pseudo-element */
  &::before {
    content: '';
    position: absolute;
    width: ${e=>e.size-e.armWidth}px;
    height: ${e=>e.size-e.armWidth}px;
  }

  /* Position the cutout based on elbow orientation */
  ${e=>{switch(e.position){case"top-left":return F`
          &::before {
            bottom: 0;
            right: 0;
            border-radius: 0 0 0 ${e.size-e.armWidth}px;
          }
        `;case"top-right":return F`
          &::before {
            bottom: 0;
            left: 0;
            border-radius: 0 0 ${e.size-e.armWidth}px 0;
          }
        `;case"bottom-left":return F`
          &::before {
            top: 0;
            right: 0;
            border-radius: 0 ${e.size-e.armWidth}px 0 0;
          }
        `;case"bottom-right":return F`
          &::before {
            top: 0;
            left: 0;
            border-radius: ${e.size-e.armWidth}px 0 0 0;
          }
        `}}}
`;a.div`
  display: flex;
  flex-direction: ${e=>e.orientation==="horizontal"?"row":"column"};
  flex-shrink: 0;
  width: ${e=>typeof e.width=="number"?`${e.width}px`:e.width};
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height};
  gap: ${e=>e.isSegmented?e.theme.lcars.gap:"0"};
  border-radius: 0;
  overflow: hidden;
`;a.div`
  background-color: ${e=>e.color};
  flex: ${e=>e.flex||1};
  border-radius: 0;
`;const pl=a.div`
  display: flex;
  flex-direction: column;
  width: ${e=>typeof e.width=="number"?`${e.width}px`:e.width};
  gap: ${e=>e.gap};
  min-height: 100%;

  > * {
    width: 100%;
    flex-shrink: 0;
  }
`,ye=({children:e,width:r="200px",gap:n="3px",className:o})=>t.jsx(pl,{width:r,gap:n,className:o,children:e}),hl={sm:F`
    .data-label {
      font-size: ${e=>e.theme.typography.fontSize.xs};
    }
    .data-value {
      font-size: ${e=>e.theme.typography.fontSize.md};
    }
    .data-unit {
      font-size: ${e=>e.theme.typography.fontSize.sm};
    }
  `,md:F`
    .data-label {
      font-size: ${e=>e.theme.typography.fontSize.sm};
    }
    .data-value {
      font-size: ${e=>e.theme.typography.fontSize.lg};
    }
    .data-unit {
      font-size: ${e=>e.theme.typography.fontSize.md};
    }
  `,lg:F`
    .data-label {
      font-size: ${e=>e.theme.typography.fontSize.md};
    }
    .data-value {
      font-size: ${e=>e.theme.typography.fontSize.xl};
    }
    .data-unit {
      font-size: ${e=>e.theme.typography.fontSize.lg};
    }
  `},ul={neonCarrot:F`
    color: ${e=>e.theme.colors.primary.neonCarrot};
  `,lilac:F`
    color: ${e=>e.theme.colors.primary.lilac};
  `,anakiwa:F`
    color: ${e=>e.theme.colors.primary.anakiwa};
  `,mariner:F`
    color: ${e=>e.theme.colors.primary.mariner};
  `,success:F`
    color: ${e=>e.theme.colors.status.success};
  `},gl={neonCarrot:"#FF9933",lilac:"#CC99CC",anakiwa:"#99CCFF",success:"#55FF55",error:"#FF5555"},xl=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing.xs};
  background-color: transparent;

  ${e=>hl[e.size]}
`,fl=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.normal};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  color: ${e=>e.theme.colors.primary.lilac};
  opacity: 0.8;
`,yl=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
`,bl=a.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  box-shadow: 0 0 8px ${e=>e.color};
  flex-shrink: 0;
`,$l=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  line-height: ${e=>e.theme.typography.lineHeight.tight};

  ${e=>ul[e.valueColor]}
`,jl=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.normal};
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
`,A=({label:e,value:r,unit:n,size:o="md",valueColor:s="neonCarrot",showIndicator:i=!1,indicatorColor:l="neonCarrot",className:c})=>t.jsxs(xl,{size:o,className:c,children:[t.jsx(fl,{className:"data-label",children:e}),t.jsxs(yl,{children:[i&&t.jsx(bl,{color:gl[l]}),t.jsx($l,{className:"data-value",valueColor:s,children:r}),n&&t.jsx(jl,{className:"data-unit",children:n})]})]}),vl={info:F`
    background-color: ${e=>e.theme.colors.primary.anakiwa};
    border-color: #AAD6FF;
    color: ${e=>e.theme.colors.text.inverse};
  `,success:F`
    background-color: ${e=>e.theme.colors.status.success};
    border-color: #88FF88;
    color: ${e=>e.theme.colors.text.inverse};
  `,warning:F`
    background-color: ${e=>e.theme.colors.status.warning};
    border-color: #FFFF88;
    color: ${e=>e.theme.colors.text.inverse};
  `,error:F`
    background-color: ${e=>e.theme.colors.status.error};
    border-color: #FF8888;
    color: ${e=>e.theme.colors.text.inverse};
  `},wl=a.div.withConfig({shouldForwardProp:e=>!["type","blink"].includes(e)})`
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

  ${e=>vl[e.type]}

  ${e=>e.blink&&F`
    animation: lcars-blink 1s infinite;
  `}
`,Cl=a.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
`,Sl=a.div`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,kl=a.div`
  flex: 1;
`,Tl=a.button`
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
`,Al=e=>{switch(e){case"info":return"ℹ";case"success":return"✓";case"warning":return"⚠";case"error":return"✗";default:return"ℹ"}},be=({children:e,type:r="info",blink:n=!1,dismissible:o=!1,onDismiss:s,className:i})=>t.jsxs(wl,{type:r,blink:n,className:i,children:[t.jsxs(Cl,{children:[t.jsx(Sl,{children:Al(r)}),t.jsx(kl,{children:e})]}),o&&s&&t.jsx(Tl,{onClick:s,"aria-label":"Dismiss alert",children:"×"})]}),El={neonCarrot:F`
    .progress-fill {
      background: linear-gradient(90deg,
        ${e=>e.theme.colors.primary.neonCarrot} 0%,
        ${e=>e.theme.colors.primary.goldenTanoi} 100%
      );
    }
    .progress-text {
      color: ${e=>e.theme.colors.primary.neonCarrot};
    }
  `,lilac:F`
    .progress-fill {
      background: linear-gradient(90deg,
        ${e=>e.theme.colors.primary.lilac} 0%,
        #DDA6DD 100%
      );
    }
    .progress-text {
      color: ${e=>e.theme.colors.primary.lilac};
    }
  `,anakiwa:F`
    .progress-fill {
      background: linear-gradient(90deg,
        ${e=>e.theme.colors.primary.anakiwa} 0%,
        #AAD6FF 100%
      );
    }
    .progress-text {
      color: ${e=>e.theme.colors.primary.anakiwa};
    }
  `,success:F`
    .progress-fill {
      background: linear-gradient(90deg,
        ${e=>e.theme.colors.status.success} 0%,
        #88FF88 100%
      );
    }
    .progress-text {
      color: ${e=>e.theme.colors.status.success};
    }
  `},Fl={sm:F`
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
  `,md:F`
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
  `,lg:F`
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
  `},Ll=a.div`
  ${e=>El[e.color]}
  ${e=>Fl[e.size]}
`,Dl=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${e=>e.theme.colors.text.primary};
`,zl=a.div`
  background-color: ${e=>e.theme.colors.surface.light};
  border-radius: ${e=>e.theme.borderRadius.pill};
  overflow: hidden;
  position: relative;
  border: 1px solid ${e=>e.theme.colors.surface.light};
`,Rl=a.div`
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
`,Ml=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  color: ${e=>e.theme.colors.text.secondary};
`,wn=a.span`
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,Ot=({title:e,current:r,target:n,unit:o="",color:s="neonCarrot",size:i="md",showPercentage:l=!0,className:c})=>{const u=n>0?r/n*100:0,d=Math.round(u),p=r>=n;return t.jsxs(Ll,{color:s,size:i,className:c,children:[t.jsx(Dl,{className:"chart-title",children:e}),t.jsx(zl,{children:t.jsx(Rl,{className:"progress-fill",progress:u})}),t.jsxs(Ml,{className:"progress-stats",children:[t.jsxs("div",{children:[t.jsx(wn,{className:"progress-text",children:r}),o&&` ${o}`," / ",n,o&&` ${o}`]}),l&&t.jsxs("div",{className:"progress-text",children:[t.jsxs(wn,{children:[d,"%"]}),p&&" ✓"]})]})]})},Il={neonCarrot:F`
    .estimate-value {
      color: ${e=>e.theme.colors.primary.neonCarrot};
    }
    .estimate-border {
      border-color: ${e=>e.theme.colors.primary.neonCarrot};
    }
  `,lilac:F`
    .estimate-value {
      color: ${e=>e.theme.colors.primary.lilac};
    }
    .estimate-border {
      border-color: ${e=>e.theme.colors.primary.lilac};
    }
  `,anakiwa:F`
    .estimate-value {
      color: ${e=>e.theme.colors.primary.anakiwa};
    }
    .estimate-border {
      border-color: ${e=>e.theme.colors.primary.anakiwa};
    }
  `,success:F`
    .estimate-value {
      color: ${e=>e.theme.colors.status.success};
    }
    .estimate-border {
      border-color: ${e=>e.theme.colors.status.success};
    }
  `},Nl={sm:F`
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
  `,md:F`
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
  `,lg:F`
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
  `},Pl=a.div`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid;
  border-radius: ${e=>e.theme.borderRadius.lg};
  text-align: center;
  position: relative;

  ${e=>Il[e.color]}
  ${e=>Nl[e.size]}

  ${e=>e.isComplete&&F`
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
`,Bl=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: ${e=>e.theme.spacing.sm};
`,Jt=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  line-height: ${e=>e.theme.typography.lineHeight.tight};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,Yt=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Zt=({title:e,estimatedDate:r,daysRemaining:n,isComplete:o=!1,color:s="neonCarrot",size:i="md",className:l})=>{const c=d=>{try{return new Date(d).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return"Unknown"}},u=d=>{if(d<=0)return"Goal Achieved";if(d===1)return"1 Day";if(d<30)return`${d} Days`;if(d<365){const b=Math.round(d/30);return b===1?"1 Month":`${b} Months`}const p=Math.round(d/365);return p===1?"1 Year":`${p} Years`};return t.jsxs(Pl,{color:s,size:i,isComplete:o,className:`estimate-border ${l||""}`,children:[t.jsx(Bl,{className:"estimate-title",children:e}),o?t.jsxs(t.Fragment,{children:[t.jsx(Jt,{className:"estimate-value",children:"ACHIEVED"}),t.jsx(Yt,{className:"estimate-subtitle",children:"Goal Complete"})]}):t.jsxs(t.Fragment,{children:[r&&t.jsxs(t.Fragment,{children:[t.jsx(Jt,{className:"estimate-value",children:c(r)}),t.jsx(Yt,{className:"estimate-subtitle",children:"Estimated Completion"})]}),n!==void 0&&t.jsxs(t.Fragment,{children:[t.jsx(Jt,{className:"estimate-value",children:u(n)}),t.jsx(Yt,{className:"estimate-subtitle",children:"Remaining"})]})]})]})},ie={all:["boats"],lists:()=>[...ie.all,"list"],list:e=>[...ie.lists(),{filters:e}],details:()=>[...ie.all,"detail"],detail:e=>[...ie.details(),e]},le=()=>ee({queryKey:ie.lists(),queryFn:()=>N.getBoats()}),Ol=e=>ee({queryKey:ie.detail(e),queryFn:()=>N.getBoat(e),enabled:!!e}),Ul=()=>{const e=K();return _({mutationFn:r=>N.createBoat(r),onSuccess:()=>{e.invalidateQueries({queryKey:ie.lists()})}})},ql=()=>{const e=K();return _({mutationFn:({id:r,data:n})=>N.updateBoat(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:ie.detail(n)}),e.invalidateQueries({queryKey:ie.lists()})}})},Qo=()=>{const e=K();return _({mutationFn:({id:r,enabled:n})=>N.toggleBoatStatus(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:ie.detail(n)}),e.invalidateQueries({queryKey:ie.lists()})}})},_o=()=>{const e=K();return _({mutationFn:r=>N.setActiveBoat(r),onSuccess:()=>{e.invalidateQueries({queryKey:ie.lists()})}})},fe={all:["trips"],lists:()=>[...fe.all,"list"],list:e=>[...fe.lists(),{filters:e}],details:()=>[...fe.all,"detail"],detail:e=>[...fe.details(),e]},Me=e=>ee({queryKey:fe.list(e||{}),queryFn:()=>N.getTrips(e)}),Jo=e=>ee({queryKey:fe.detail(e),queryFn:()=>N.getTrip(e),enabled:!!e}),Hl=()=>{const e=K();return _({mutationFn:({id:r,data:n})=>N.updateTrip(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:fe.detail(n)}),e.invalidateQueries({queryKey:fe.lists()})}})},Wl=()=>{const e=K();return _({mutationFn:({tripId:r,data:n})=>N.addManualData(r,n),onSuccess:(r,{tripId:n})=>{e.invalidateQueries({queryKey:fe.detail(n)}),e.invalidateQueries({queryKey:fe.lists()})}})},Yo={all:["license"],progress:()=>[...Yo.all,"progress"]},Zo=()=>ee({queryKey:Yo.progress(),queryFn:()=>N.getLicenseProgress(),staleTime:5*60*1e3}),Vl=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,Kl=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Gl=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.lg};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Ql=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>e.theme.spacing.sm};
  border-bottom: 1px solid ${e=>e.theme.colors.surface.light};
  
  &:last-child {
    border-bottom: none;
  }
`,_l=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,Jl=a.span`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Yl=a.span`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,Zl=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  flex-wrap: wrap;
`,Xl=a.div`
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
`,ec=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${e=>e.theme.spacing.xs};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
`,tc=()=>{const{data:e,isLoading:r,error:n}=le(),{data:o,isLoading:s,error:i}=Me(),{data:l,isLoading:c,error:u}=Zo(),d=(e==null?void 0:e.filter(f=>f.enabled))||[],p=(o==null?void 0:o.slice(0,5))||[],b=(o==null?void 0:o.length)||0,$=f=>new Date(f).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),h=f=>{const x=Math.floor(f/3600),g=Math.floor(f%3600/60);return`${x}h ${g}m`},m=(f,x)=>Math.min(f/x*100,100);return t.jsxs(Vl,{children:[t.jsx(O,{level:1,children:"Command Center"}),(n||i||u)&&t.jsx(be,{type:"error",children:"Unable to load dashboard data. Check your connection and try again."}),t.jsxs(Kl,{children:[t.jsx(z,{title:"Fleet Status",variant:"accent",children:r?t.jsx(A,{label:"Loading",value:"...",valueColor:"anakiwa"}):t.jsxs(t.Fragment,{children:[t.jsx(A,{label:"Total Vessels",value:(e==null?void 0:e.length)||0,valueColor:"anakiwa"}),t.jsx(A,{label:"Active Vessels",value:d.length,valueColor:"success"}),t.jsx(A,{label:"Inactive Vessels",value:((e==null?void 0:e.length)||0)-d.length,valueColor:"neonCarrot"})]})}),t.jsx(z,{title:"License Progress",variant:"secondary",children:c?t.jsx(A,{label:"Loading",value:"...",valueColor:"lilac"}):l?t.jsxs(t.Fragment,{children:[t.jsx(A,{label:"Sea Time Days",value:l.totalDays,valueColor:"lilac"}),t.jsx(A,{label:"Days (3 Years)",value:l.daysInLast3Years,valueColor:"lilac"}),t.jsxs("div",{children:[t.jsx(Xl,{progress:m(l.totalDays,360)}),t.jsxs(ec,{children:[t.jsx("span",{children:"360 Day Goal"}),t.jsxs("span",{children:[Math.round(m(l.totalDays,360)),"%"]})]})]})]}):t.jsx(A,{label:"Status",value:"Disabled",valueColor:"neonCarrot"})}),t.jsxs(z,{title:"System Status",variant:"primary",children:[t.jsx(A,{label:"Interface Status",value:"ONLINE",valueColor:"success",size:"sm"}),t.jsx(A,{label:"Active Boats",value:r?"...":d.length.toString(),valueColor:"neonCarrot",size:"sm"}),t.jsx(A,{label:"Total Trips",value:s?"...":b.toString(),valueColor:"anakiwa",size:"sm"})]})]}),t.jsxs(Zl,{children:[t.jsx(T,{size:"sm",variant:"primary",children:"New Trip"}),t.jsx(T,{size:"sm",variant:"secondary",children:"Add Boat"})]}),t.jsxs(Gl,{children:[t.jsx(z,{title:"Recent Trips",variant:"primary",children:s?t.jsx(A,{label:"Loading",value:"...",valueColor:"neonCarrot"}):p.length>0?p.map(f=>{var x,g;return t.jsxs(Ql,{children:[t.jsxs(_l,{children:[t.jsx(Jl,{children:$(f.startTime)}),t.jsxs(Yl,{children:[h(((x=f.statistics)==null?void 0:x.durationSeconds)||0)," • ",f.waterType]})]}),t.jsx(A,{label:"Distance",value:Math.round((((g=f.statistics)==null?void 0:g.distanceMeters)||0)/1852),unit:"nm",size:"sm",valueColor:"neonCarrot"})]},f.id)}):t.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#999"},children:"No trips recorded yet"})}),t.jsx(z,{title:"Upcoming Tasks",variant:"accent",children:t.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#999"},children:"No maintenance tasks due"})})]})]})},rc=Z`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,nc=Z`
  0%, 100% {
    filter: drop-shadow(0 0 20px rgba(255, 153, 51, 0.6));
  }
  50% {
    filter: drop-shadow(0 0 40px rgba(255, 153, 51, 0.9)) drop-shadow(0 0 60px rgba(255, 153, 51, 0.4));
  }
`,oc=Z`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`,Xo=Z`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`,Ie=Z`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,ac=Z`
  from { transform: translateX(-200px); opacity: 0; }
  to { transform: translateX(0); opacity: 0.7; }
`,sc=a.div`
  min-height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  padding: 2rem;
`,ic=a.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.4;
`,lc=a.img`
  width: 400px;
  max-width: 80vw;
  height: auto;
  margin-bottom: 3rem;
  animation: ${nc} 3s ease-in-out infinite, ${Ie} 1s ease;
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 1;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 300px;
    margin-bottom: 2rem;
  }
`,cc=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1000px;
  margin: 2rem 0;
  z-index: 1;
  animation: ${Ie} 1s ease 0.3s backwards;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,dc=a.div`
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid ${e=>e.$color};
  border-radius: 0 16px 16px 0;
  padding: 1rem 1.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 6px;
    background: ${e=>e.$color};
  }
`,mc=a.div`
  color: #99CCFF;
  font-family: 'Antonio', sans-serif;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
`,pc=a.div`
  color: ${e=>e.$color};
  font-family: 'Antonio', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
`,hc=a.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  margin-top: 0.5rem;
`,uc=a.div`
  height: 100%;
  background: ${e=>e.$color};
  width: ${e=>e.$percentage}%;
  transition: width 0.3s ease;
  box-shadow: 0 0 8px ${e=>e.$color};
`,gc=a.div`
  position: absolute;
  left: -100px;
  top: ${e=>e.$top};
  width: 80px;
  height: 4px;
  background: ${e=>e.$color};
  border-radius: 2px;
  opacity: 0;
  animation: ${ac} 1.5s ease-in-out ${e=>e.$delay}s forwards;
  z-index: 0;
`,xc=a.div`
  position: absolute;
  top: 100px;
  left: 40px;
  width: 150px;
  height: 150px;
  border-top: 12px solid #FFCC99;
  border-left: 12px solid #FFCC99;
  border-radius: 40px 0 0 0;
  z-index: 0;
  opacity: 0.6;
  animation: ${Ie} 1s ease 0.5s backwards;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    top: 60px;
    left: 20px;
    border-width: 8px;
  }
`,fc=a.div`
  position: absolute;
  bottom: 100px;
  right: 40px;
  width: 150px;
  height: 150px;
  border-bottom: 12px solid #CC99CC;
  border-right: 12px solid #CC99CC;
  border-radius: 0 0 40px 0;
  z-index: 0;
  opacity: 0.6;
  animation: ${Ie} 1s ease 0.7s backwards;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    bottom: 60px;
    right: 20px;
    border-width: 8px;
  }
`,yc=a.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  z-index: 1;
  animation: ${Ie} 1s ease 0.5s backwards;
`,bc=a.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${e=>e.$color};
  box-shadow: 0 0 10px ${e=>e.$color};
  animation: ${rc} 2s ease-in-out ${e=>e.$delay} infinite;
`,$c=a.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  z-index: 1;
  flex-wrap: wrap;
  justify-content: center;
  animation: ${Ie} 1s ease 0.7s backwards;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`,Xt=a.button`
  background: ${e=>e.$color};
  color: #000;
  border: none;
  padding: 1rem 2rem;
  font-family: 'Antonio', sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 0 24px 24px 0;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  &:hover {
    filter: brightness(1.2);
    box-shadow: 0 0 20px ${e=>e.$color};
  }

  &:hover::after {
    transform: translateX(0);
  }

  &:active {
    transform: scale(0.98);
  }
`,jc=a.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: rgba(102, 68, 102, 0.9);
  border-top: 3px solid #FFCC66;
  overflow: hidden;
  display: flex;
  align-items: center;
  z-index: 2;
`,vc=a.div`
  display: flex;
  white-space: nowrap;
  animation: ${oc} 40s linear infinite;
  gap: 3rem;
`,wc=a.span`
  color: #FFCC99;
  font-family: 'Antonio', sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 600;

  &::before {
    content: '●';
    color: #FF9933;
    margin-right: 1rem;
    animation: ${Xo} 1.5s ease-in-out infinite;
  }
`,Cc=a.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #99CCFF;
  border-radius: 0 16px 16px 0;
  padding: 0.75rem 1.5rem;
  z-index: 1;
  animation: ${Ie} 1s ease 0.9s backwards;

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
  }
`,Sc=a.div`
  color: #99CCFF;
  font-family: 'Antonio', sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.25rem;
`,kc=a.div`
  color: #FFCC66;
  font-family: 'Antonio', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.05em;
`,Tc=a.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #FF9933;
  border-radius: 0 16px 16px 0;
  padding: 0.5rem 1rem;
  z-index: 1;
  animation: ${Ie} 1s ease 0.9s backwards;

  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    padding: 0.4rem 0.8rem;
  }
`,Ac=a.span`
  color: #FF9933;
  font-family: 'Antonio', sans-serif;
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.15em;
`,Ec=a.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #FF9933;
  box-shadow: 0 0 10px #FF9933;
  animation: ${Xo} 1s ease-in-out infinite;
`;function Cn(){const e=new Date,r=e.getFullYear(),n=new Date(r,0,1).getTime(),o=new Date(r+1,0,1).getTime(),s=(e.getTime()-n)/(o-n);return((r-2323)*1e3+s*1e3).toFixed(5)}function ae(e,r){return e+Math.random()*(r-e)}const Fc=()=>{const e=C.useRef(null),r=C.useRef([]),n=C.useRef();return C.useEffect(()=>{const o=e.current;if(!o)return;const s=o.getContext("2d");if(!s)return;const i=()=>{o.width=window.innerWidth,o.height=window.innerHeight};i(),window.addEventListener("resize",i);const l=200,c=[];for(let d=0;d<l;d++)c.push({x:ae(-o.width,o.width),y:ae(-o.height,o.height),z:ae(0,o.width)});r.current=c;const u=()=>{const d=o.width,p=o.height,b=d/2,$=p/2;s.fillStyle="rgba(0, 0, 0, 0.1)",s.fillRect(0,0,d,p),c.forEach(h=>{h.z-=2,h.z<=0&&(h.x=ae(-d,d),h.y=ae(-p,p),h.z=d,h.prevX=void 0,h.prevY=void 0);const m=128/h.z,f=h.x*m+b,x=h.y*m+$;if(f>=0&&f<=d&&x>=0&&x<=p){const g=(1-h.z/d)*2,y=Math.floor((1-h.z/d)*255),v=.5+(1-h.z/d)*.5;h.prevX!==void 0&&h.prevY!==void 0&&(s.strokeStyle=`rgba(${y}, ${y}, 255, ${v*.5})`,s.lineWidth=g*.5,s.beginPath(),s.moveTo(h.prevX,h.prevY),s.lineTo(f,x),s.stroke()),s.fillStyle=`rgba(${y}, ${y}, 255, ${v})`,s.beginPath(),s.arc(f,x,g,0,Math.PI*2),s.fill(),h.prevX=f,h.prevY=x}}),n.current=requestAnimationFrame(u)};return u(),()=>{window.removeEventListener("resize",i),n.current&&cancelAnimationFrame(n.current)}},[]),t.jsx(ic,{ref:e})},Sn=()=>{const e=se(),[r,n]=C.useState(Cn()),[o,s]=C.useState(257.4),[i,l]=C.useState(1.247),[c,u]=C.useState(97.3),[d,p]=C.useState(1547.2),[b,$]=C.useState(.0042),[h,m]=C.useState(99.7),[f,x]=C.useState([]);C.useEffect(()=>{const w=setInterval(()=>{n(Cn())},3e3);return()=>clearInterval(w)},[]),C.useEffect(()=>{const w=setInterval(()=>{s(ae(250,280))},500);return()=>clearInterval(w)},[]),C.useEffect(()=>{const w=setInterval(()=>{l(ae(1.1,1.4))},300);return()=>clearInterval(w)},[]),C.useEffect(()=>{const w=setInterval(()=>{u(ae(94,100))},600);return()=>clearInterval(w)},[]),C.useEffect(()=>{const w=setInterval(()=>{p(ae(1500,1600))},400);return()=>clearInterval(w)},[]),C.useEffect(()=>{const w=setInterval(()=>{$(ae(.003,.006))},700);return()=>clearInterval(w)},[]),C.useEffect(()=>{const w=setInterval(()=>{m(ae(98.5,100))},550);return()=>clearInterval(w)},[]),C.useEffect(()=>{const w=["#FFCC99","#99CCFF","#CC99CC","#FFCC66","#FF9933"],k=setInterval(()=>{const M={color:w[Math.floor(Math.random()*w.length)],top:`${ae(20,80)}%`,delay:0};x(P=>[...P,M].slice(-6))},ae(3e3,6e3));return()=>clearInterval(k)},[]);const g=["All systems nominal","Warp core stable","Navigation array calibrated","Subspace communications active","Deflector shields online","Sensors operating at peak efficiency","Life support systems optimal","Transporter standing by","Quantum slipstream drive ready","Temporal sensors synchronized"],y=[{label:"Shield Harmonic Frequency",value:`${o.toFixed(1)} MHz`,color:"#99CCFF",percentage:(o-250)/30*100},{label:"Anti-Matter Injection Flow",value:`${i.toFixed(3)} cm³/s`,color:"#FFCC66",percentage:(i-1.1)/(1.4-1.1)*100},{label:"Communications Uplink Signal",value:`${c.toFixed(1)}%`,color:"#99CCFF",percentage:(c-94)/6*100},{label:"Warp Core Output",value:`${d.toLocaleString("en-US",{minimumFractionDigits:1,maximumFractionDigits:1})} TW`,color:"#FFCC99",percentage:(d-1500)/100*100},{label:"Sensor Array Resolution",value:`${b.toFixed(4)} arc-sec`,color:"#99CCFF",percentage:(b-.003)/(.006-.003)*100},{label:"Life Support Efficiency",value:`${h.toFixed(1)}%`,color:"#CC99CC",percentage:(h-98.5)/(100-98.5)*100}],v=[{color:"#FF9933",delay:"0s"},{color:"#99CCFF",delay:"0.3s"},{color:"#CC99CC",delay:"0.6s"},{color:"#FFCC66",delay:"0.9s"},{color:"#99CCFF",delay:"1.2s"}];return t.jsxs(sc,{children:[t.jsx(Fc,{}),t.jsxs(Cc,{children:[t.jsx(Sc,{children:"Stardate"}),t.jsx(kc,{children:r})]}),t.jsxs(Tc,{children:[t.jsx(Ac,{children:"LCARS"}),t.jsx(Ec,{})]}),t.jsx(xc,{}),t.jsx(fc,{}),t.jsx(lc,{src:"/assets/captains-log-logo.png",alt:"Captain's Log",onClick:()=>e("/dashboard")}),t.jsx(yc,{children:v.map((w,L)=>t.jsx(bc,{$color:w.color,$delay:w.delay},L))}),t.jsxs(cc,{children:[f.map((w,L)=>t.jsx(gc,{$color:w.color,$top:w.top,$delay:w.delay},L)),y.map((w,L)=>t.jsxs(dc,{$color:w.color,children:[t.jsx(mc,{children:w.label}),t.jsx(pc,{$color:w.color,children:w.value}),t.jsx(hc,{children:t.jsx(uc,{$color:w.color,$percentage:w.percentage})})]},L))]}),t.jsxs($c,{children:[t.jsx(Xt,{$color:"#FFCC99",onClick:()=>e("/dashboard"),children:"Dashboard"}),t.jsx(Xt,{$color:"#99CCFF",onClick:()=>e("/trips"),children:"Trip Log"}),t.jsx(Xt,{$color:"#CC99CC",onClick:()=>e("/boats"),children:"Vessels"})]}),t.jsx(jc,{children:t.jsx(vc,{children:g.concat(g).map((w,L)=>t.jsx(wc,{children:w},L))})})]})};let at=null;const Lc={boats:["boats"],trips:["trips"],notes:["notes"],todos:["todos"],maintenance_templates:["maintenanceTemplates"],maintenance_events:["maintenanceEvents"],locations:["locations"],photos:["photos"],sensors:["sensors"]};function kn(e){ea();const r=localStorage.getItem("auth_token");if(!r)return;const o=`${localStorage.getItem("api_base_url")||"/api/v1"}/sync/events?token=${encodeURIComponent(r)}`;at=new EventSource(o),at.onmessage=s=>{try{const i=JSON.parse(s.data);if(i.type==="connected")return;const l=Lc[i.type];l&&e.invalidateQueries({queryKey:l})}catch{}},at.onerror=()=>{}}function ea(){at&&(at.close(),at=null)}const ta=C.createContext(null),Dc=({children:e})=>{const r=K(),[n,o]=C.useState({isAuthenticated:!1,isLoading:!0,needsSetup:!1,user:null}),s=C.useCallback(async()=>{try{if(!localStorage.getItem("auth_token")){o({isAuthenticated:!1,isLoading:!1,needsSetup:!0,user:null});return}await N.getBoats(),o({isAuthenticated:!0,isLoading:!1,needsSetup:!1,user:{id:"current",username:"user",createdAt:"",updatedAt:""}}),kn(r)}catch{localStorage.removeItem("auth_token"),o({isAuthenticated:!1,isLoading:!1,needsSetup:!0,user:null})}},[]);C.useEffect(()=>{s()},[s]);const i=C.useCallback(async(u,d)=>{try{const p=await N.login(u,d);return o({isAuthenticated:!0,isLoading:!1,needsSetup:!1,user:p.user}),kn(r),{success:!0}}catch(p){return o(b=>({...b,isAuthenticated:!1})),{success:!1,error:p.message||"Login failed"}}},[]),l=C.useCallback(async()=>{try{await N.logout()}catch(u){console.warn("Logout request failed:",u)}finally{ea(),o({isAuthenticated:!1,isLoading:!1,needsSetup:!1,user:null})}},[]),c={...n,login:i,logout:l,checkAuthStatus:s};return Ke.createElement(ta.Provider,{value:c},e)},Zr=()=>{const e=C.useContext(ta);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},zc=a.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.colors.background};
  padding: ${e=>e.theme.spacing.lg};
`,Rc=a.div`
  max-width: 600px;
  width: 100%;
`,Mc=a.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${e=>e.theme.spacing.xl};
`,Ic=a.img`
  max-width: 200px;
  height: auto;
  filter: drop-shadow(0 0 10px ${e=>e.theme.colors.primary.neonCarrot}40);
`,Nc=a.form`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,er=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,tr=a.label`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
`,rr=a.input`
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
`,Pc=a.div`
  display: flex;
  justify-content: center;
  margin-top: ${e=>e.theme.spacing.lg};
`,nr=()=>{const e=se(),{login:r,isAuthenticated:n}=Zr();C.useEffect(()=>{n&&e("/")},[n,e]);const[o,s]=C.useState({username:"",password:"",serverUrl:""}),[i,l]=C.useState(!1),[c,u]=C.useState(null),[d,p]=C.useState(!1),b=h=>{const{name:m,value:f}=h.target;s(x=>({...x,[m]:f}))},$=async h=>{h.preventDefault(),l(!0),u(null);try{o.serverUrl.trim()?(N.updateBaseUrl(o.serverUrl),console.log("Server URL configured:",o.serverUrl)):console.log("Using default server URL (proxy)"),console.log("Attempting login with:",{username:o.username});const m=await r(o.username,o.password);console.log("Login result:",m),m.success?(u({type:"success",text:"LCARS Interface Initialized Successfully! Redirecting..."}),console.log("Login successful, setting timeout for redirect"),setTimeout(()=>{console.log("Redirecting to dashboard"),e("/")},1500)):(console.log("Login failed:",m.error),u({type:"error",text:m.error||"Authentication failed. Please check your credentials."}))}catch(m){console.error("Login error:",m),u({type:"error",text:m.message||"Setup failed. Please check your connection and try again."})}finally{l(!1)}};return t.jsx(zc,{children:t.jsxs(Rc,{children:[t.jsx(Mc,{children:t.jsx(Ic,{src:"/assets/captains-log-logo.png",alt:"Captain's Log"})}),t.jsxs(z,{title:"System Initialization",padding:"lg",children:[t.jsx(O,{level:2,align:"center",children:"LCARS Setup Wizard"}),t.jsxs(Nc,{onSubmit:$,children:[t.jsxs(er,{children:[t.jsx(tr,{htmlFor:"username",children:"Username"}),t.jsx(rr,{type:"text",id:"username",name:"username",value:o.username,onChange:b,placeholder:"Enter your username",required:!0,disabled:i})]}),t.jsxs(er,{children:[t.jsx(tr,{htmlFor:"password",children:"Password"}),t.jsx(rr,{type:"password",id:"password",name:"password",value:o.password,onChange:b,placeholder:"Enter your password",required:!0,disabled:i})]}),t.jsx("div",{style:{textAlign:"right"},children:t.jsx("button",{type:"button",onClick:()=>p(!d),style:{background:"none",border:"none",color:"#99CCFF",cursor:"pointer",fontSize:"12px",textTransform:"uppercase",letterSpacing:"1px"},children:d?"Hide Advanced":"Advanced Options"})}),d&&t.jsxs(er,{children:[t.jsx(tr,{htmlFor:"serverUrl",children:"Server URL (Optional)"}),t.jsx(rr,{type:"url",id:"serverUrl",name:"serverUrl",value:o.serverUrl,onChange:b,placeholder:"Leave empty for default",disabled:i})]}),c&&t.jsx(be,{type:c.type==="success"?"success":c.type==="error"?"error":"info",children:c.text}),t.jsx(Pc,{children:t.jsx(T,{type:"submit",disabled:i,size:"lg",children:i?"Initializing...":"Initialize LCARS"})})]})]})]})})},Bc=Z`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Oc=Z`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;a.div`
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
`;a.div`
  width: ${e=>{switch(e.size){case"sm":return"20px";case"lg":return"60px";default:return"40px"}}};
  height: ${e=>{switch(e.size){case"sm":return"20px";case"lg":return"60px";default:return"40px"}}};
  border: 3px solid ${e=>e.theme.colors.primary.neonCarrot}40;
  border-top: 3px solid ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: 50%;
  animation: ${Bc} 1s linear infinite;
`;a.div`
  margin-left: ${e=>e.theme.spacing.md};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>{switch(e.size){case"sm":return e.theme.typography.fontSize.sm;case"lg":return e.theme.typography.fontSize.lg;default:return e.theme.typography.fontSize.md}}};
  animation: ${Oc} 2s ease-in-out infinite;
`;a.div`
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
    animation: ${Z`
      0% { left: -100%; }
      100% { left: 100%; }
    `} 2s ease-in-out infinite;
  }
`;const ra=a.div`
  background: linear-gradient(
    90deg,
    ${e=>e.theme.colors.surface.dark} 25%,
    ${e=>e.theme.colors.surface.medium} 50%,
    ${e=>e.theme.colors.surface.dark} 75%
  );
  background-size: 200% 100%;
  animation: ${Z`
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  `} 2s ease-in-out infinite;
  border-radius: 4px;
`,Tn=a(ra)`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"1em"};
  margin: 4px 0;
`,Uc=a(ra)`
  width: 100%;
  height: 120px;
  margin: 8px 0;
`,Ct=({variant:e="text",width:r,height:n,lines:o=1})=>e==="card"?t.jsx(Uc,{}):o===1?t.jsx(Tn,{width:r,height:n}):t.jsx("div",{children:Array.from({length:o},(s,i)=>t.jsx(Tn,{width:i===o-1?"60%":r,height:n},i))}),qc=a.div`
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
`,Hc=a.div`
  font-size: 1.2em;
  margin-right: ${e=>e.theme.spacing.sm};
  color: ${e=>e.theme.colors.status.error};
`,Wc=a.div`
  font-weight: bold;
  font-size: ${e=>e.theme.typography.fontSize.lg};
  color: ${e=>e.theme.colors.status.error};
  margin-bottom: ${e=>e.theme.spacing.sm};
`,Vc=a.div`
  color: ${e=>e.theme.colors.text.light};
  margin-bottom: ${e=>e.theme.spacing.md};
  line-height: 1.5;
`,Kc=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
  justify-content: center;
  margin-top: ${e=>e.theme.spacing.md};
`,Gc=a.code`
  background: ${e=>e.theme.colors.surface.dark};
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
  font-size: 0.9em;
  color: ${e=>e.theme.colors.status.error};
`,Qc=({title:e="Error",message:r,code:n,variant:o="card",showIcon:s=!0,onRetry:i,onDismiss:l,retryText:c="Try Again",dismissText:u="Dismiss"})=>{const d=t.jsxs(qc,{variant:o,children:[s&&o==="inline"&&t.jsx(Hc,{children:"⚠"}),o!=="inline"&&t.jsxs(Wc,{children:[s&&"⚠ ",e]}),t.jsxs(Vc,{children:[r,n&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("small",{children:["Error code: ",t.jsx(Gc,{children:n})]})]})]}),(i||l)&&t.jsxs(Kc,{children:[i&&t.jsx(T,{onClick:i,variant:"primary",size:"sm",children:c}),l&&t.jsx(T,{onClick:l,variant:"secondary",size:"sm",children:u})]})]});return o==="card"?t.jsx(z,{children:d}):d};function _c(e){const r=K(),[n,o]=C.useState(!1);return{optimisticUpdate:C.useCallback(async(i,l,c,u)=>{o(!0);const d=r.getQueryData(e);r.setQueryData(e,p=>p===void 0?p:i(p));try{const p=await l();return await r.invalidateQueries({queryKey:e}),c==null||c(p),p}catch(p){throw d!==void 0&&r.setQueryData(e,d),u==null||u(p),p}finally{o(!1)}},[r,e]),isOptimistic:n}}function Jc(e){const{optimisticUpdate:r,isOptimistic:n}=_c(e),o=C.useCallback((l,c)=>r((u=[])=>[...u,l],c),[r]),s=C.useCallback((l,c)=>r((u=[])=>u.filter(d=>d.id!==l),c),[r]),i=C.useCallback((l,c,u)=>r((d=[])=>d.map(p=>p.id===l?c(p):p),u),[r]);return{optimisticAdd:o,optimisticRemove:s,optimisticUpdate:i,isOptimistic:n}}const or=a.div`
  padding: 20px;
`,An=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  margin-top: 20px;
`,Yc=a.div`
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
`,Zc=a.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1.4rem;
  margin: 0 0 15px 0;
  text-transform: uppercase;
`,Xc=a.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`,En=a.span`
  padding: 4px 12px;
  border-radius: 0;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  background: ${e=>{switch(e.$type){case"active":return e.theme.colors.primary.neonCarrot;case"enabled":return e.theme.colors.primary.anakiwa;case"disabled":return e.theme.colors.interactive.disabled;default:return e.theme.colors.interactive.disabled}}};
  color: ${e=>e.theme.colors.background};
`,ed=a.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,Fn=a(T)`
  flex: 1;
  min-width: 120px;
`,Ln=a.div`
  display: flex;
  gap: 15px;
  align-items: center;
`,td=a.div`
  text-align: center;
  padding: 60px 20px;
  color: ${e=>e.theme.colors.text.secondary};
`,rd=a.div`
  font-size: 4rem;
  margin-bottom: 20px;
  color: ${e=>e.theme.colors.primary.anakiwa};
`,Dn=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,zn=a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,nd=()=>{const e=se(),{data:r,isLoading:n,error:o}=le(),s=Qo(),i=_o(),[l,c]=C.useState(null),{optimisticUpdate:u}=Jc(["boats"]),d=x=>{e(`/boats/${x.id}`)},p=async x=>{c(`toggle-${x.id}`);try{await u(x.id,g=>({...g,enabled:!g.enabled}),()=>s.mutateAsync({id:x.id,enabled:!x.enabled}))}catch(g){console.error("Failed to toggle boat status:",g)}finally{c(null)}},b=async x=>{if(!x.isActive){c(`active-${x.id}`);try{await i.mutateAsync(x.id)}catch(g){console.error("Failed to set active boat:",g)}finally{c(null)}}},$=()=>{e("/boats/new")};if(n)return t.jsxs(or,{children:[t.jsxs(Dn,{children:[t.jsxs(zn,{children:[t.jsx(O,{children:"BOAT MANAGEMENT"}),t.jsx(Ct,{width:"200px",height:"20px"})]}),t.jsxs(Ln,{children:[t.jsx(Ct,{width:"150px",height:"40px"}),t.jsx(Ct,{width:"180px",height:"40px"})]})]}),t.jsx(An,{children:Array.from({length:3},(x,g)=>t.jsx(z,{children:t.jsx(Ct,{variant:"card"})},g))})]});if(o)return t.jsxs(or,{children:[t.jsx(O,{children:"BOAT MANAGEMENT"}),t.jsx(Qc,{title:"Failed to Load Boats",message:o.message,onRetry:()=>window.location.reload()})]});const h=r==null?void 0:r.find(x=>x.isActive),m=(r==null?void 0:r.filter(x=>x.enabled))||[],f=(r==null?void 0:r.filter(x=>!x.enabled))||[];return t.jsxs(or,{children:[t.jsxs(Dn,{children:[t.jsxs(zn,{children:[t.jsx(O,{children:"BOAT MANAGEMENT"}),t.jsx(A,{label:"VESSELS REGISTERED",value:(r==null?void 0:r.length)||0,valueColor:"anakiwa",size:"sm"})]}),t.jsxs(Ln,{children:[t.jsx(A,{label:"ACTIVE VESSEL",value:(h==null?void 0:h.name)||"NONE SELECTED",valueColor:h?"neonCarrot":"anakiwa"}),t.jsx(T,{variant:"primary",onClick:$,children:"ADD NEW VESSEL"})]})]}),!r||r.length===0?t.jsx(z,{children:t.jsxs(td,{children:[t.jsx(rd,{children:"🚤"}),t.jsx("h3",{children:"NO VESSELS REGISTERED"}),t.jsx("p",{children:"Add your first vessel to begin tracking trips and maintenance."}),t.jsx(T,{variant:"primary",onClick:$,children:"ADD FIRST VESSEL"})]})}):t.jsx(An,{children:r.map(x=>t.jsxs(Yc,{$isActive:x.isActive,$isEnabled:x.enabled,onClick:()=>d(x),children:[t.jsx(Zc,{children:x.name}),t.jsxs(Xc,{children:[x.isActive&&t.jsx(En,{$type:"active",children:"ACTIVE"}),t.jsx(En,{$type:x.enabled?"enabled":"disabled",children:x.enabled?"ENABLED":"DISABLED"})]}),t.jsx(A,{label:"VESSEL ID",value:x.id.slice(0,8).toUpperCase(),valueColor:"anakiwa",size:"sm"}),t.jsx(A,{label:"REGISTERED",value:new Date(x.createdAt).toLocaleDateString(),valueColor:"anakiwa",size:"sm"}),t.jsxs(ed,{children:[!x.isActive&&x.enabled&&t.jsx(Fn,{variant:"secondary",onClick:()=>b(x),disabled:l===`active-${x.id}`,children:l===`active-${x.id}`?"SETTING...":"SET ACTIVE"}),t.jsx(Fn,{variant:x.enabled?"danger":"accent",onClick:()=>p(x),disabled:l===`toggle-${x.id}`,children:l===`toggle-${x.id}`?"UPDATING...":x.enabled?"DISABLE":"ENABLE"})]})]},x.id))}),r&&r.length>0&&t.jsxs("div",{style:{marginTop:"30px",display:"flex",gap:"20px"},children:[t.jsx(A,{label:"ENABLED VESSELS",value:m.length.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"DISABLED VESSELS",value:f.length.toString(),valueColor:"lilac"})]})]})},ar=a.div`
  padding: 20px;
`,od=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Rn=a(z)`
  padding: 25px;
`,sr=a.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1.2rem;
  margin: 0 0 20px 0;
  text-transform: uppercase;
  border-bottom: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding-bottom: 10px;
`,ad=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 25px;
`,Mn=a.div`
  padding: 15px;
  text-align: center;
  border: 2px solid ${e=>{switch(e.$type){case"active":return e.theme.colors.primary.neonCarrot;case"enabled":return e.theme.colors.primary.anakiwa;case"disabled":return e.theme.colors.interactive.disabled;default:return e.theme.colors.interactive.disabled}}};
  background: ${e=>{switch(e.$type){case"active":return`${e.theme.colors.primary.neonCarrot}20`;case"enabled":return`${e.theme.colors.primary.anakiwa}15`;case"disabled":return`${e.theme.colors.interactive.disabled}15`;default:return`${e.theme.colors.interactive.disabled}15`}}};
`,In=a.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 5px;
  text-transform: uppercase;
`,Nn=a.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${e=>e.theme.colors.text.primary};
  text-transform: uppercase;
`,sd=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 20px;
`,Pn=a(T)`
  margin-right: 15px;
`,id=a.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,ld=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,cd=a.label`
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
`,dd=a.input`
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
`,md=a.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin-top: 20px;
`,pd=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`,hd=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,ud=a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,gd=a(z)`
  padding: 25px;
  margin-top: 30px;
`,xd=()=>{const{id:e}=Re(),r=se(),{data:n,isLoading:o,error:s}=Ol(e),{data:i}=Me({boatId:e}),l=ql(),c=Qo(),u=_o(),[d,p]=C.useState(!1),[b,$]=C.useState({name:""}),[h,m]=C.useState(null);Ke.useEffect(()=>{n&&$({name:n.name})},[n]);const f=()=>{r("/boats")},x=()=>{p(!0)},g=()=>{p(!1),n&&$({name:n.name})},y=async P=>{if(P.preventDefault(),!(!n||!b.name.trim())){m("save");try{await l.mutateAsync({id:n.id,data:{name:b.name.trim()}}),p(!1)}catch(E){console.error("Failed to update boat:",E)}finally{m(null)}}},v=async()=>{if(n){m("toggle");try{await c.mutateAsync({id:n.id,enabled:!n.enabled})}catch(P){console.error("Failed to toggle boat status:",P)}finally{m(null)}}},w=async()=>{if(!(!n||n.isActive)){m("active");try{await u.mutateAsync(n.id)}catch(P){console.error("Failed to set active boat:",P)}finally{m(null)}}};if(o)return t.jsxs(ar,{children:[t.jsx(O,{children:"VESSEL DETAILS"}),t.jsx(A,{label:"STATUS",value:"LOADING VESSEL DATA...",valueColor:"anakiwa"})]});if(s||!n)return t.jsxs(ar,{children:[t.jsx(O,{children:"VESSEL DETAILS"}),t.jsx(be,{type:"error",children:(s==null?void 0:s.message)||"Vessel not found"}),t.jsx(Pn,{variant:"secondary",onClick:f,children:"BACK TO VESSELS"})]});const L=(i==null?void 0:i.length)||0,k=(i==null?void 0:i.reduce((P,E)=>{var S;return P+(((S=E.statistics)==null?void 0:S.durationSeconds)||0)},0))||0,M=(i==null?void 0:i.reduce((P,E)=>{var S;return P+(((S=E.statistics)==null?void 0:S.distanceMeters)||0)},0))||0;return t.jsx(t.Fragment,{children:t.jsxs(ar,{children:[t.jsxs(hd,{children:[t.jsxs(ud,{children:[t.jsx(O,{children:"VESSEL DETAILS"}),t.jsx(A,{label:"VESSEL NAME",value:n.name,valueColor:"neonCarrot",size:"sm"})]}),t.jsxs("div",{children:[t.jsx(Pn,{variant:"secondary",onClick:f,children:"BACK TO VESSELS"}),!d&&t.jsx(T,{variant:"primary",onClick:x,children:"EDIT VESSEL"})]})]}),t.jsxs(od,{children:[t.jsxs(Rn,{children:[t.jsx(sr,{children:"Vessel Information"}),d?t.jsxs(id,{onSubmit:y,children:[t.jsxs(ld,{children:[t.jsx(cd,{children:"Vessel Name"}),t.jsx(dd,{type:"text",value:b.name,onChange:P=>$({...b,name:P.target.value}),placeholder:"Enter vessel name",required:!0,disabled:h==="save"})]}),t.jsxs(md,{children:[t.jsx(T,{type:"button",variant:"secondary",onClick:g,disabled:h==="save",children:"CANCEL"}),t.jsx(T,{type:"submit",variant:"primary",disabled:h==="save"||!b.name.trim(),children:h==="save"?"SAVING...":"SAVE CHANGES"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx(A,{label:"VESSEL NAME",value:n.name,valueColor:"neonCarrot"}),t.jsx(A,{label:"VESSEL ID",value:n.id,valueColor:"anakiwa"}),t.jsx(A,{label:"REGISTERED",value:new Date(n.createdAt).toLocaleString(),valueColor:"anakiwa"}),t.jsx(A,{label:"LAST UPDATED",value:new Date(n.updatedAt).toLocaleString(),valueColor:"anakiwa"})]})]}),t.jsxs(Rn,{children:[t.jsx(sr,{children:"Status & Actions"}),t.jsxs(ad,{children:[t.jsxs(Mn,{$type:n.isActive?"active":"disabled",children:[t.jsx(In,{children:"Active Status"}),t.jsx(Nn,{children:n.isActive?"ACTIVE":"INACTIVE"})]}),t.jsxs(Mn,{$type:n.enabled?"enabled":"disabled",children:[t.jsx(In,{children:"Operational Status"}),t.jsx(Nn,{children:n.enabled?"ENABLED":"DISABLED"})]})]}),!d&&t.jsxs(sd,{children:[!n.isActive&&n.enabled&&t.jsx(T,{variant:"primary",onClick:w,disabled:h==="active",children:h==="active"?"SETTING...":"SET AS ACTIVE"}),t.jsx(T,{variant:n.enabled?"danger":"accent",onClick:v,disabled:h==="toggle",children:h==="toggle"?"UPDATING...":n.enabled?"DISABLE VESSEL":"ENABLE VESSEL"})]})]})]}),t.jsxs(gd,{children:[t.jsx(sr,{children:"Usage Statistics"}),t.jsxs(pd,{children:[t.jsx(A,{label:"TOTAL TRIPS",value:L.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"TOTAL HOURS",value:`${(k/3600).toFixed(1)}`,unit:"hrs",valueColor:"anakiwa"}),t.jsx(A,{label:"TOTAL DISTANCE",value:`${(M*539957e-9).toFixed(1)}`,unit:"nm",valueColor:"anakiwa"}),t.jsx(A,{label:"LAST TRIP",value:i&&i.length>0?new Date(i[0].startTime).toLocaleDateString():"NO TRIPS",valueColor:"anakiwa"})]})]})]})})},fd=a.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`,yd=a(z)`
  padding: 30px;
  margin-top: 20px;
`,bd=a.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,Pe=a.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Be=a.label`
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: ${e=>e.theme.typography.fontFamily.primary};
`,Je=a.input`
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
`,$d=a.textarea`
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
`,Ee=a.p`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
`,jd=a.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid ${e=>e.theme.colors.primary.anakiwa};
`,vd=a(T)`
  margin-right: 15px;
`,wd=a.span`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin-left: 5px;
`,Oe=a.div`
  color: ${e=>e.theme.colors.status.error};
  font-size: 0.9rem;
  margin-top: 5px;
`,Cd=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Sd=a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,kd=()=>{const e=se(),r=Ul(),[n,o]=C.useState({name:"",description:"",hullNumber:"",manufacturer:"",model:"",year:"",length:""}),[s,i]=C.useState({}),[l,c]=C.useState(!1),u=()=>{e("/boats")},d=($,h)=>{o(m=>({...m,[$]:h})),s[$]&&i(m=>({...m,[$]:void 0}))},p=()=>{const $={};return n.name.trim()?n.name.trim().length<2?$.name="Vessel name must be at least 2 characters":n.name.trim().length>100&&($.name="Vessel name must be less than 100 characters"):$.name="Vessel name is required",n.description&&n.description.length>500&&($.description="Description must be less than 500 characters"),n.hullNumber&&n.hullNumber.length>50&&($.hullNumber="Hull number must be less than 50 characters"),n.manufacturer&&n.manufacturer.length>100&&($.manufacturer="Manufacturer must be less than 100 characters"),n.model&&n.model.length>100&&($.model="Model must be less than 100 characters"),n.year&&(!/^\d{4}$/.test(n.year)||parseInt(n.year)<1900||parseInt(n.year)>new Date().getFullYear()+1)&&($.year="Year must be a valid 4-digit year"),n.length&&(!/^\d+(\.\d+)?$/.test(n.length)||parseFloat(n.length)<=0||parseFloat(n.length)>1e3)&&($.length="Length must be a positive number (in feet)"),i($),Object.keys($).length===0},b=async $=>{if($.preventDefault(),!!p()){c(!0);try{const h={};n.description.trim()&&(h.description=n.description.trim()),n.hullNumber.trim()&&(h.hullNumber=n.hullNumber.trim()),n.manufacturer.trim()&&(h.manufacturer=n.manufacturer.trim()),n.model.trim()&&(h.model=n.model.trim()),n.year.trim()&&(h.year=parseInt(n.year.trim())),n.length.trim()&&(h.lengthFeet=parseFloat(n.length.trim()));const m=await r.mutateAsync({name:n.name.trim(),metadata:Object.keys(h).length>0?h:void 0});e(`/boats/${m.id}`)}catch(h){console.error("Failed to create boat:",h)}finally{c(!1)}}};return t.jsxs(fd,{children:[t.jsxs(Cd,{children:[t.jsxs(Sd,{children:[t.jsx(O,{children:"ADD NEW VESSEL"}),t.jsx(Ee,{children:"Register a new vessel for tracking"})]}),t.jsx(vd,{variant:"secondary",onClick:u,children:"BACK TO VESSELS"})]}),r.error&&t.jsxs(be,{type:"error",children:["Failed to create vessel: ",r.error.message]}),t.jsx(yd,{children:t.jsxs(bd,{onSubmit:b,children:[t.jsxs(Pe,{children:[t.jsxs(Be,{children:["Vessel Name",t.jsx(wd,{children:"*"})]}),t.jsx(Je,{type:"text",value:n.name,onChange:$=>d("name",$.target.value),placeholder:"Enter vessel name (e.g., 'Sea Explorer', 'Fishing Buddy')",disabled:l,maxLength:100}),t.jsx(Ee,{children:"The primary name used to identify this vessel throughout the system."}),s.name&&t.jsx(Oe,{children:s.name})]}),t.jsxs(Pe,{children:[t.jsx(Be,{children:"Description"}),t.jsx($d,{value:n.description,onChange:$=>d("description",$.target.value),placeholder:"Optional description of the vessel (e.g., 'Center console fishing boat', '24ft cabin cruiser')",disabled:l,maxLength:500}),t.jsx(Ee,{children:"Optional description to help identify and categorize this vessel."}),s.description&&t.jsx(Oe,{children:s.description})]}),t.jsxs(Pe,{children:[t.jsx(Be,{children:"Hull Identification Number (HIN)"}),t.jsx(Je,{type:"text",value:n.hullNumber,onChange:$=>d("hullNumber",$.target.value),placeholder:"Enter HIN if available",disabled:l,maxLength:50}),t.jsx(Ee,{children:"The unique hull identification number assigned by the manufacturer."}),s.hullNumber&&t.jsx(Oe,{children:s.hullNumber})]}),t.jsxs(Pe,{children:[t.jsx(Be,{children:"Manufacturer"}),t.jsx(Je,{type:"text",value:n.manufacturer,onChange:$=>d("manufacturer",$.target.value),placeholder:"Enter manufacturer name",disabled:l,maxLength:100}),t.jsx(Ee,{children:"The company that built this vessel."}),s.manufacturer&&t.jsx(Oe,{children:s.manufacturer})]}),t.jsxs(Pe,{children:[t.jsx(Be,{children:"Model"}),t.jsx(Je,{type:"text",value:n.model,onChange:$=>d("model",$.target.value),placeholder:"Enter model name",disabled:l,maxLength:100}),t.jsx(Ee,{children:"The specific model designation of this vessel."}),s.model&&t.jsx(Oe,{children:s.model})]}),t.jsxs(Pe,{children:[t.jsx(Be,{children:"Year Built"}),t.jsx(Je,{type:"text",value:n.year,onChange:$=>d("year",$.target.value),placeholder:"Enter year (e.g., 2020)",disabled:l,maxLength:4}),t.jsx(Ee,{children:"The year this vessel was manufactured."}),s.year&&t.jsx(Oe,{children:s.year})]}),t.jsxs(Pe,{children:[t.jsx(Be,{children:"Length (feet)"}),t.jsx(Je,{type:"text",value:n.length,onChange:$=>d("length",$.target.value),placeholder:"Enter length in feet (e.g., 24.5)",disabled:l}),t.jsx(Ee,{children:"The overall length of the vessel in feet."}),s.length&&t.jsx(Oe,{children:s.length})]}),t.jsxs(jd,{children:[t.jsx(T,{type:"button",variant:"secondary",onClick:u,disabled:l,children:"CANCEL"}),t.jsx(T,{type:"submit",variant:"primary",disabled:l||!n.name.trim(),children:l?"CREATING VESSEL...":"CREATE VESSEL"})]})]})})]})},ir=a.div`
  padding: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,Td=a(z)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Ad=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  align-items: end;
`,St=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,lr=a.label`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Ed=a.select`
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
`,Bn=a.input`
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
`,Fd=a.div`
  display: grid;
  gap: ${e=>e.theme.spacing.md};
`,Ld=a(z)`
  cursor: pointer;
  transition: all ${e=>e.theme.animation.normal} ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.lg};
  }
`,Dd=a.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${e=>e.theme.spacing.md};
  align-items: start;
`,zd=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Rd=a.h3`
  margin: 0;
  font-size: ${e=>e.theme.typography.fontSize.lg};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Md=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${e=>e.theme.spacing.sm};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
`,Id=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
  text-align: right;
`,cr=a.div`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,dr=a.div`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Nd=a.div`
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
`,Pd=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  text-transform: uppercase;
  letter-spacing: 2px;
`,Bd=()=>{const[e,r]=C.useState({}),{data:n,isLoading:o,error:s}=Me(e),{data:i}=le(),l=(h,m)=>{r(f=>({...f,[h]:m||void 0}))},c=()=>{r({})},u=h=>{const m=Math.floor(h/3600),f=Math.floor(h%3600/60);return`${m}h ${f}m`},d=h=>`${(h*539957e-9).toFixed(1)} nm`,p=h=>`${h.toFixed(1)} kts`,b=h=>new Date(h).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),$=h=>{const m=i==null?void 0:i.find(f=>f.id===h);return(m==null?void 0:m.name)||"Unknown Boat"};return o?t.jsx(ir,{children:t.jsx(Pd,{children:"Loading Trip Data..."})}):s?t.jsx(ir,{children:t.jsx(z,{variant:"accent",title:"System Error",children:t.jsxs("div",{style:{color:"red",textAlign:"center",padding:"2rem"},children:["Error loading trips: ",s.message]})})}):t.jsxs(ir,{children:[t.jsx(O,{children:"Trip Log Database"}),t.jsx(Td,{title:"Search Parameters",variant:"secondary",children:t.jsxs(Ad,{children:[t.jsxs(St,{children:[t.jsx(lr,{children:"Vessel"}),t.jsxs(Ed,{value:e.boatId||"",onChange:h=>l("boatId",h.target.value),children:[t.jsx("option",{value:"",children:"All Vessels"}),i==null?void 0:i.map(h=>t.jsx("option",{value:h.id,children:h.name},h.id))]})]}),t.jsxs(St,{children:[t.jsx(lr,{children:"Start Date"}),t.jsx(Bn,{type:"date",value:e.startDate||"",onChange:h=>l("startDate",h.target.value)})]}),t.jsxs(St,{children:[t.jsx(lr,{children:"End Date"}),t.jsx(Bn,{type:"date",value:e.endDate||"",onChange:h=>l("endDate",h.target.value)})]}),t.jsx(St,{children:t.jsx(T,{variant:"secondary",size:"sm",onClick:c,children:"Clear Filters"})})]})}),!n||n.length===0?t.jsxs(Nd,{children:[t.jsx("div",{className:"empty-title",children:"No Trip Records Found"}),t.jsx("div",{className:"empty-message",children:Object.keys(e).length>0?"No trips match the current search parameters.":"No trips have been recorded yet."})]}):t.jsx(Fd,{children:n.map(h=>{var m,f,x,g,y,v;return t.jsx(Y,{to:`/trips/${h.id}`,style:{textDecoration:"none"},children:t.jsx(Ld,{variant:"primary",children:t.jsxs(Dd,{children:[t.jsxs(zd,{children:[t.jsxs(Rd,{children:[$(h.boatId)," - ",b(h.startTime)]}),t.jsxs(Md,{children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Water Type:"})," ",h.waterType.toUpperCase()]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Role:"})," ",h.role.toUpperCase()]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Duration:"})," ",u(((m=h.statistics)==null?void 0:m.durationSeconds)||0)]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Distance:"})," ",d(((f=h.statistics)==null?void 0:f.distanceMeters)||0)]})]})]}),t.jsxs(Id,{children:[t.jsxs("div",{children:[t.jsx(cr,{children:p(((x=h.statistics)==null?void 0:x.averageSpeedKnots)||0)}),t.jsx(dr,{children:"Avg Speed"})]}),t.jsxs("div",{children:[t.jsx(cr,{children:p(((g=h.statistics)==null?void 0:g.maxSpeedKnots)||0)}),t.jsx(dr,{children:"Max Speed"})]}),t.jsxs("div",{children:[t.jsx(cr,{children:((v=(y=h.statistics)==null?void 0:y.stopPoints)==null?void 0:v.length)||0}),t.jsx(dr,{children:"Stop Points"})]})]})]})})},h.id)})})]})},mr=a.div`
  padding: ${e=>e.theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
`,Od=a(T)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Ud=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.lg};
  margin-bottom: ${e=>e.theme.spacing.lg};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,qd=a(z)`
  grid-column: 1 / -1;
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Hd=a(jo)`
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
`,Wd=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,Ye=a.div`
  text-align: center;
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
`,Ze=a.div`
  font-size: ${e=>e.theme.typography.fontSize.xxl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,Xe=a.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Vd=a.div`
  display: grid;
  gap: ${e=>e.theme.spacing.sm};
`,Ue=a.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${e=>e.theme.spacing.md};
  padding: ${e=>e.theme.spacing.sm} 0;
  border-bottom: 1px solid ${e=>e.theme.colors.surface.light};
  
  &:last-child {
    border-bottom: none;
  }
`,qe=a.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,He=a.div`
  font-size: ${e=>e.theme.typography.fontSize.md};
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,Kd=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,pt=a.div`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.lilac};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
  text-align: center;
`,ht=a.div`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.lilac};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,ut=a.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Gd=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Qd=a.div`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
`,_d=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,Jd=a.div`
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.anakiwa};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Yd=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  color: ${e=>e.theme.colors.text.secondary};
`,Zd=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.muted};
`,Xd=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  text-transform: uppercase;
  letter-spacing: 2px;
`,em=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.status.error};
  font-size: ${e=>e.theme.typography.fontSize.lg};
`,tm=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.lg};
`,rm=a(z)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,nm=a(z)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,om=new Qe.Icon({iconUrl:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiM2NkZGNjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4KPC9zdmc+",iconSize:[24,24],iconAnchor:[12,12]}),am=new Qe.Icon({iconUrl:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNGRjY2NjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4KPC9zdmc+",iconSize:[24,24],iconAnchor:[12,12]}),sm=new Qe.Icon({iconUrl:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNGRkZGNjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4KPC9zdmc+",iconSize:[20,20],iconAnchor:[10,10]}),im=()=>{var g,y,v,w,L,k,M,P,E;const{id:e}=Re(),{data:r,isLoading:n,error:o}=Jo(e),{data:s}=le(),i=S=>{const D=Math.floor(S/3600),B=Math.floor(S%3600/60);return`${D}h ${B}m`},l=S=>`${(S*539957e-9).toFixed(1)} nm`,c=S=>`${S.toFixed(1)} kts`,u=S=>new Date(S).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),d=(S,D)=>{const B=S>=0?"N":"S",q=D>=0?"E":"W";return`${Math.abs(S).toFixed(6)}°${B}, ${Math.abs(D).toFixed(6)}°${q}`},p=S=>{const D=s==null?void 0:s.find(B=>B.id===S);return(D==null?void 0:D.name)||"Unknown Boat"},b=S=>S.map(D=>[D.latitude,D.longitude]),$=S=>{if(S.length===0)return[0,0];const D=S.reduce((q,V)=>q+V.latitude,0)/S.length,B=S.reduce((q,V)=>q+V.longitude,0)/S.length;return[D,B]};if(n)return t.jsx(mr,{children:t.jsx(Xd,{children:"Loading Trip Data..."})});if(o||!r)return t.jsx(mr,{children:t.jsx(em,{children:o?`Error loading trip: ${o.message}`:"Trip not found"})});const h=b(r.gpsPoints),m=$(r.gpsPoints),f=r.gpsPoints[0],x=r.gpsPoints[r.gpsPoints.length-1];return t.jsxs(mr,{children:[t.jsx(Od,{as:Y,to:"/trips",variant:"secondary",size:"sm",children:"← Back to Trip Log"}),t.jsxs(O,{children:["Trip Analysis - ",p(r.boatId)," - ",u(r.startTime)]}),h.length>0&&t.jsx(qd,{title:"Navigation Route",variant:"accent",children:t.jsxs(Hd,{center:m,zoom:13,scrollWheelZoom:!0,children:[t.jsx(bo,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.jsx($o,{positions:h,color:"#FF9966",weight:3,opacity:.8}),f&&t.jsx(Le,{position:[f.latitude,f.longitude],icon:om,children:t.jsxs(De,{children:[t.jsx("strong",{children:"Trip Start"}),t.jsx("br",{}),u(r.startTime),t.jsx("br",{}),d(f.latitude,f.longitude)]})}),x&&t.jsx(Le,{position:[x.latitude,x.longitude],icon:am,children:t.jsxs(De,{children:[t.jsx("strong",{children:"Trip End"}),t.jsx("br",{}),u(r.endTime),t.jsx("br",{}),d(x.latitude,x.longitude)]})}),(((g=r.statistics)==null?void 0:g.stopPoints)||[]).map((S,D)=>t.jsx(Le,{position:[S.latitude,S.longitude],icon:sm,children:t.jsxs(De,{children:[t.jsxs("strong",{children:["Stop Point ",D+1]}),t.jsx("br",{}),"Duration: ",i(S.durationSeconds),t.jsx("br",{}),d(S.latitude,S.longitude)]})},D))]})}),t.jsxs(Ud,{children:[t.jsx(z,{title:"Trip Statistics",variant:"primary",children:t.jsxs(Wd,{children:[t.jsxs(Ye,{children:[t.jsx(Ze,{children:i(((y=r.statistics)==null?void 0:y.durationSeconds)||0)}),t.jsx(Xe,{children:"Duration"})]}),t.jsxs(Ye,{children:[t.jsx(Ze,{children:l(((v=r.statistics)==null?void 0:v.distanceMeters)||0)}),t.jsx(Xe,{children:"Distance"})]}),t.jsxs(Ye,{children:[t.jsx(Ze,{children:c(((w=r.statistics)==null?void 0:w.averageSpeedKnots)||0)}),t.jsx(Xe,{children:"Avg Speed"})]}),t.jsxs(Ye,{children:[t.jsx(Ze,{children:c(((L=r.statistics)==null?void 0:L.maxSpeedKnots)||0)}),t.jsx(Xe,{children:"Max Speed"})]}),t.jsxs(Ye,{children:[t.jsx(Ze,{children:((M=(k=r.statistics)==null?void 0:k.stopPoints)==null?void 0:M.length)||0}),t.jsx(Xe,{children:"Stop Points"})]}),t.jsxs(Ye,{children:[t.jsx(Ze,{children:r.gpsPoints.length}),t.jsx(Xe,{children:"GPS Points"})]})]})}),t.jsx(z,{title:"Trip Information",variant:"secondary",children:t.jsxs(Vd,{children:[t.jsxs(Ue,{children:[t.jsx(qe,{children:"Vessel"}),t.jsx(He,{children:p(r.boatId)})]}),t.jsxs(Ue,{children:[t.jsx(qe,{children:"Start Time"}),t.jsx(He,{children:u(r.startTime)})]}),t.jsxs(Ue,{children:[t.jsx(qe,{children:"End Time"}),t.jsx(He,{children:u(r.endTime)})]}),t.jsxs(Ue,{children:[t.jsx(qe,{children:"Water Type"}),t.jsx(He,{children:r.waterType.toUpperCase()})]}),t.jsxs(Ue,{children:[t.jsx(qe,{children:"Role"}),t.jsx(He,{children:r.role.toUpperCase()})]}),f&&t.jsxs(Ue,{children:[t.jsx(qe,{children:"Start Position"}),t.jsx(He,{children:d(f.latitude,f.longitude)})]}),x&&t.jsxs(Ue,{children:[t.jsx(qe,{children:"End Position"}),t.jsx(He,{children:d(x.latitude,x.longitude)})]})]})})]}),r.manualData&&t.jsx(rm,{title:"Manual Data Entry",variant:"accent",children:t.jsxs(Kd,{children:[r.manualData.engineHours!==void 0&&t.jsxs(pt,{children:[t.jsx(ht,{children:r.manualData.engineHours}),t.jsx(ut,{children:"Engine Hours"})]}),r.manualData.fuelConsumed!==void 0&&t.jsxs(pt,{children:[t.jsx(ht,{children:r.manualData.fuelConsumed}),t.jsx(ut,{children:"Fuel Consumed"})]}),r.manualData.numberOfPassengers!==void 0&&t.jsxs(pt,{children:[t.jsx(ht,{children:r.manualData.numberOfPassengers}),t.jsx(ut,{children:"Passengers"})]}),r.manualData.weatherConditions&&t.jsxs(pt,{children:[t.jsx(ht,{children:r.manualData.weatherConditions}),t.jsx(ut,{children:"Weather"})]}),r.manualData.destination&&t.jsxs(pt,{children:[t.jsx(ht,{children:r.manualData.destination}),t.jsx(ut,{children:"Destination"})]})]})}),(((P=r.statistics)==null?void 0:P.stopPoints)||[]).length>0&&t.jsx(nm,{title:"Stop Points Analysis",variant:"primary",children:t.jsx(Gd,{children:(((E=r.statistics)==null?void 0:E.stopPoints)||[]).map((S,D)=>t.jsxs(Qd,{children:[t.jsxs(_d,{children:[t.jsxs(Jd,{children:["Stop Point ",D+1]}),t.jsx(Yd,{children:i(S.durationSeconds)})]}),t.jsx(Zd,{children:d(S.latitude,S.longitude)}),t.jsxs("div",{style:{fontSize:"0.8rem",color:"#999",marginTop:"0.5rem"},children:[u(S.startTime)," - ",u(S.endTime)]})]},D))})}),t.jsxs(tm,{children:[t.jsx(Y,{to:`/trips/${r.id}/edit`,style:{textDecoration:"none"},children:t.jsx(T,{variant:"primary",children:"Edit Trip Data"})}),t.jsx(T,{variant:"secondary",children:"Export Data"})]})]})},pr=a.div`
  padding: ${e=>e.theme.spacing.lg};
  max-width: 1000px;
  margin: 0 auto;
`,lm=a(T)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,cm=a.div`
  display: grid;
  gap: ${e=>e.theme.spacing.lg};
`,On=a(z)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,gt=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`,he=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,ue=a.label`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,et=a.input`
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
`,hr=a.select`
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
`,dm=a.textarea`
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
`,ur=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${e=>e.theme.spacing.lg};
`,mm=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  text-transform: uppercase;
  letter-spacing: 2px;
`,pm=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.status.error};
  font-size: ${e=>e.theme.typography.fontSize.lg};
`,hm=a.div`
  background-color: rgba(102, 255, 102, 0.1);
  border: 1px solid ${e=>e.theme.colors.status.success};
  border-radius: ${e=>e.theme.borderRadius.md};
  color: ${e=>e.theme.colors.status.success};
  padding: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
  text-align: center;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,um=()=>{const{id:e}=Re(),{data:r,isLoading:n,error:o}=Jo(e),{data:s}=le(),i=Hl(),l=Wl(),[c,u]=C.useState({waterType:"inland",role:"captain",boatId:""}),[d,p]=C.useState({}),[b,$]=C.useState("");C.useEffect(()=>{r&&(u({waterType:r.waterType,role:r.role,boatId:r.boatId}),r.manualData&&p({engineHours:r.manualData.engineHours,fuelConsumed:r.manualData.fuelConsumed,weatherConditions:r.manualData.weatherConditions,numberOfPassengers:r.manualData.numberOfPassengers,destination:r.manualData.destination}))},[r]);const h=(v,w)=>{u(L=>({...L,[v]:w}))},m=(v,w)=>{p(L=>({...L,[v]:w===""?void 0:w}))},f=async()=>{if(r)try{await i.mutateAsync({id:r.id,data:c}),$("Trip information updated successfully!"),setTimeout(()=>$(""),3e3)}catch(v){console.error("Error updating trip:",v)}},x=async()=>{if(!r)return;const v={};Object.entries(d).forEach(([w,L])=>{L!==void 0&&L!==""&&(v[w]=L)});try{await l.mutateAsync({tripId:r.id,data:v}),$("Manual data updated successfully!"),setTimeout(()=>$(""),3e3)}catch(w){console.error("Error updating manual data:",w)}},g=v=>new Date(v).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),y=v=>{const w=s==null?void 0:s.find(L=>L.id===v);return(w==null?void 0:w.name)||"Unknown Boat"};return n?t.jsx(pr,{children:t.jsx(mm,{children:"Loading Trip Data..."})}):o||!r?t.jsx(pr,{children:t.jsx(pm,{children:o?`Error loading trip: ${o.message}`:"Trip not found"})}):t.jsxs(pr,{children:[t.jsx(lm,{as:Y,to:`/trips/${r.id}`,variant:"secondary",size:"sm",children:"← Back to Trip Details"}),t.jsxs(O,{children:["Edit Trip Data - ",y(r.boatId)," - ",g(r.startTime)]}),b&&t.jsx(hm,{children:b}),t.jsxs(cm,{children:[t.jsxs(On,{title:"Trip Information",variant:"primary",children:[t.jsxs(gt,{children:[t.jsxs(he,{children:[t.jsx(ue,{children:"Vessel"}),t.jsx(hr,{value:c.boatId,onChange:v=>h("boatId",v.target.value),children:s==null?void 0:s.map(v=>t.jsx("option",{value:v.id,children:v.name},v.id))})]}),t.jsxs(he,{children:[t.jsx(ue,{children:"Water Type"}),t.jsxs(hr,{value:c.waterType,onChange:v=>h("waterType",v.target.value),children:[t.jsx("option",{value:"inland",children:"Inland"}),t.jsx("option",{value:"coastal",children:"Coastal/Nearshore"}),t.jsx("option",{value:"offshore",children:"Offshore"})]})]}),t.jsxs(he,{children:[t.jsx(ue,{children:"Role"}),t.jsxs(hr,{value:c.role,onChange:v=>h("role",v.target.value),children:[t.jsx("option",{value:"captain",children:"Captain"}),t.jsx("option",{value:"crew",children:"Crew"}),t.jsx("option",{value:"observer",children:"Observer"})]})]})]}),t.jsxs(gt,{children:[t.jsxs(he,{children:[t.jsx(ue,{children:"Start Time"}),t.jsx(et,{type:"text",value:g(r.startTime),disabled:!0})]}),t.jsxs(he,{children:[t.jsx(ue,{children:"End Time"}),t.jsx(et,{type:"text",value:g(r.endTime),disabled:!0})]})]}),t.jsx(ur,{children:t.jsx(T,{variant:"primary",onClick:f,disabled:i.isPending,children:i.isPending?"Saving...":"Save Trip Information"})})]}),t.jsxs(On,{title:"Manual Data Entry",variant:"secondary",children:[t.jsxs(gt,{children:[t.jsxs(he,{children:[t.jsx(ue,{children:"Engine Hours"}),t.jsx(et,{type:"number",step:"0.1",min:"0",placeholder:"0.0",value:d.engineHours||"",onChange:v=>m("engineHours",parseFloat(v.target.value))})]}),t.jsxs(he,{children:[t.jsx(ue,{children:"Fuel Consumed (gallons)"}),t.jsx(et,{type:"number",step:"0.1",min:"0",placeholder:"0.0",value:d.fuelConsumed||"",onChange:v=>m("fuelConsumed",parseFloat(v.target.value))})]}),t.jsxs(he,{children:[t.jsx(ue,{children:"Number of Passengers"}),t.jsx(et,{type:"number",min:"0",placeholder:"0",value:d.numberOfPassengers||"",onChange:v=>m("numberOfPassengers",parseInt(v.target.value))})]})]}),t.jsx(gt,{children:t.jsxs(he,{children:[t.jsx(ue,{children:"Destination"}),t.jsx(et,{type:"text",placeholder:"Enter destination",value:d.destination||"",onChange:v=>m("destination",v.target.value)})]})}),t.jsx(gt,{children:t.jsxs(he,{children:[t.jsx(ue,{children:"Weather Conditions"}),t.jsx(dm,{placeholder:"Describe weather conditions, sea state, visibility, etc.",value:d.weatherConditions||"",onChange:v=>m("weatherConditions",v.target.value)})]})}),t.jsx(ur,{children:t.jsx(T,{variant:"secondary",onClick:x,disabled:l.isPending,children:l.isPending?"Saving...":"Save Manual Data"})})]})]}),t.jsxs(ur,{children:[t.jsx(Y,{to:`/trips/${r.id}`,style:{textDecoration:"none"},children:t.jsx(T,{variant:"accent",children:"View Trip Details"})}),t.jsx(Y,{to:"/trips",style:{textDecoration:"none"},children:t.jsx(T,{variant:"secondary",children:"Back to Trip Log"})})]})]})},na=e=>ee({queryKey:["notes",e],queryFn:()=>N.getNotes(e)}),oa=e=>ee({queryKey:["notes",e],queryFn:()=>N.getNote(e),enabled:!!e}),gm=()=>{const e=K();return _({mutationFn:r=>N.createNote(r),onSuccess:()=>{e.invalidateQueries({queryKey:["notes"]})}})},xm=()=>{const e=K();return _({mutationFn:({id:r,data:n})=>N.updateNote(r,n),onSuccess:r=>{e.invalidateQueries({queryKey:["notes"]}),e.setQueryData(["notes",r.id],r)}})},aa=()=>{const e=K();return _({mutationFn:r=>N.deleteNote(r),onSuccess:()=>{e.invalidateQueries({queryKey:["notes"]})}})},sa=()=>{const{data:e}=na();return((e==null?void 0:e.reduce((n,o)=>(o.tags.forEach(s=>{n.includes(s)||n.push(s)}),n),[]))||[]).sort()},Un=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,fm=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,ym=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,kt=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Tt=a.label`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,gr=a.select`
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
`,bm=a.input`
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
`,$m=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,jm=a.div`
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
`,vm=a.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,wm=a.span`
  background-color: ${e=>{switch(e.type){case"boat":return e.theme.colors.primary.anakiwa;case"trip":return e.theme.colors.primary.lilac;default:return e.theme.colors.primary.neonCarrot}}};
  color: ${e=>e.theme.colors.text.inverse};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Cm=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.xs};
`,qn=a.button`
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
`,Sm=a.div`
  color: ${e=>e.theme.colors.text.primary};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  margin-bottom: ${e=>e.theme.spacing.sm};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,km=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.xs};
  margin-bottom: ${e=>e.theme.spacing.sm};
`,Tm=a.span`
  background-color: ${e=>e.theme.colors.surface.medium};
  color: ${e=>e.theme.colors.text.secondary};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
`,Am=a.div`
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  text-align: right;
`,Em=a.div`
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
`,Fm=()=>{const e=se(),[r,n]=C.useState(""),[o,s]=C.useState(""),[i,l]=C.useState(""),[c,u]=C.useState(""),{data:d}=le(),p=sa(),b=C.useMemo(()=>{const k={};return r&&(k.type=r),o&&(k.boatId=o),i&&(k.tags=[i]),k},[r,o,i]),{data:$,isLoading:h}=na(b),m=aa(),f=C.useMemo(()=>$?$.filter(k=>{if(c){const M=c.toLowerCase();return k.content.toLowerCase().includes(M)||k.tags.some(P=>P.toLowerCase().includes(M))}return!0}):[],[$,c]),x=()=>{e("/notes/new")},g=(k,M)=>{M.stopPropagation(),e(`/notes/${k}/edit`)},y=async(k,M)=>{if(M.stopPropagation(),window.confirm("Are you sure you want to delete this note?"))try{await m.mutateAsync(k)}catch(P){console.error("Failed to delete note:",P)}},v=k=>{e(`/notes/${k}`)},w=k=>new Date(k).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),L=k=>{if(!k||!d)return null;const M=d.find(P=>P.id===k);return M==null?void 0:M.name};return h?t.jsxs(Un,{children:[t.jsx(O,{level:1,children:"Notes Database"}),t.jsx(z,{title:"Loading",children:t.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading notes..."})})]}):t.jsxs(Un,{children:[t.jsxs(fm,{children:[t.jsx(O,{level:1,children:"Notes Database"}),t.jsx(T,{onClick:x,children:"Create New Note"})]}),t.jsx(z,{title:"Filters",variant:"secondary",children:t.jsxs(ym,{children:[t.jsxs(kt,{children:[t.jsx(Tt,{children:"Note Type"}),t.jsxs(gr,{value:r,onChange:k=>n(k.target.value),children:[t.jsx("option",{value:"",children:"All Types"}),t.jsx("option",{value:"general",children:"General"}),t.jsx("option",{value:"boat",children:"Boat-Specific"}),t.jsx("option",{value:"trip",children:"Trip"})]})]}),t.jsxs(kt,{children:[t.jsx(Tt,{children:"Boat"}),t.jsxs(gr,{value:o,onChange:k=>s(k.target.value),disabled:r==="general"||r==="trip",children:[t.jsx("option",{value:"",children:"All Boats"}),d==null?void 0:d.map(k=>t.jsx("option",{value:k.id,children:k.name},k.id))]})]}),t.jsxs(kt,{children:[t.jsx(Tt,{children:"Tag"}),t.jsxs(gr,{value:i,onChange:k=>l(k.target.value),children:[t.jsx("option",{value:"",children:"All Tags"}),p.map(k=>t.jsx("option",{value:k,children:k},k))]})]}),t.jsxs(kt,{children:[t.jsx(Tt,{children:"Search"}),t.jsx(bm,{type:"text",placeholder:"Search notes content...",value:c,onChange:k=>u(k.target.value)})]})]})}),f.length===0?t.jsx(z,{children:t.jsxs(Em,{children:[t.jsx("div",{className:"empty-icon",children:"📝"}),t.jsx("div",{className:"empty-title",children:"No Notes Found"}),t.jsx("div",{children:($==null?void 0:$.length)===0?"Create your first note to get started.":"Try adjusting your filters to find notes."})]})}):t.jsx($m,{children:f.map(k=>t.jsxs(jm,{onClick:()=>v(k.id),children:[t.jsxs(vm,{children:[t.jsxs(wm,{type:k.type,children:[k.type,k.type==="boat"&&L(k.boatId)&&` - ${L(k.boatId)}`]}),t.jsxs(Cm,{children:[t.jsx(qn,{onClick:M=>g(k.id,M),children:"Edit"}),t.jsx(qn,{className:"danger",onClick:M=>y(k.id,M),children:"Delete"})]})]}),t.jsx(Sm,{children:k.content}),k.tags.length>0&&t.jsx(km,{children:k.tags.map(M=>t.jsx(Tm,{children:M},M))}),t.jsxs(Am,{children:[w(k.createdAt),k.updatedAt!==k.createdAt&&" (edited)"]})]},k.id))})]})},xr=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,Lm=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Dm=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,zm=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,tt=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,rt=a.span`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,nt=a.span`
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
`,Rm=a.span`
  background-color: ${e=>{switch(e.type){case"boat":return e.theme.colors.primary.anakiwa;case"trip":return e.theme.colors.primary.lilac;default:return e.theme.colors.primary.neonCarrot}}};
  color: ${e=>e.theme.colors.text.inverse};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
`,Mm=a.div`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.lg};
  color: ${e=>e.theme.colors.text.primary};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  white-space: pre-wrap;
  font-size: ${e=>e.theme.typography.fontSize.md};
`,Im=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.sm};
`,Nm=a.span`
  background-color: ${e=>e.theme.colors.primary.lilac};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Pm=a.span`
  color: ${e=>e.theme.colors.text.muted};
  font-style: italic;
`,Bm=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.text.muted};
`,Om=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.status.error};
`,Um=()=>{const e=se(),{id:r}=Re(),{data:n,isLoading:o,error:s}=oa(r||""),{data:i}=le(),{data:l}=Me(),c=aa(),u=()=>{e(`/notes/${r}/edit`)},d=async()=>{if(window.confirm("Are you sure you want to delete this note?"))try{await c.mutateAsync(r),e("/notes")}catch(m){console.error("Failed to delete note:",m)}},p=()=>{e("/notes")},b=m=>new Date(m).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),$=m=>{if(!m||!i)return"Unknown Boat";const f=i.find(x=>x.id===m);return(f==null?void 0:f.name)||"Unknown Boat"},h=m=>{if(!m||!l)return"Unknown Trip";const f=l.find(y=>y.id===m);if(!f)return"Unknown Trip";const x=$(f.boatId);return`${new Date(f.startTime).toLocaleDateString()} - ${x}`};return o?t.jsxs(xr,{children:[t.jsx(O,{level:1,children:"Note Details"}),t.jsx(z,{children:t.jsx(Bm,{children:"Loading note..."})})]}):s||!n?t.jsxs(xr,{children:[t.jsx(O,{level:1,children:"Note Details"}),t.jsx(z,{children:t.jsxs(Om,{children:["Note not found or failed to load.",t.jsx("div",{style:{marginTop:"1rem"},children:t.jsx(T,{onClick:p,children:"Back to Notes"})})]})})]}):t.jsxs(xr,{children:[t.jsxs(Lm,{children:[t.jsx(O,{level:1,children:"Note Details"}),t.jsxs(Dm,{children:[t.jsx(T,{variant:"secondary",onClick:p,children:"Back to Notes"}),t.jsx(T,{variant:"accent",onClick:u,children:"Edit Note"}),t.jsx(T,{variant:"danger",onClick:d,disabled:c.isPending,children:c.isPending?"Deleting...":"Delete"})]})]}),t.jsx(z,{title:"Note Information",children:t.jsxs(zm,{children:[t.jsxs(tt,{children:[t.jsx(rt,{children:"Type"}),t.jsx(nt,{children:t.jsx(Rm,{type:n.type,children:n.type})})]}),n.type==="boat"&&n.boatId&&t.jsxs(tt,{children:[t.jsx(rt,{children:"Boat"}),t.jsx(nt,{children:$(n.boatId)})]}),n.type==="trip"&&n.tripId&&t.jsxs(tt,{children:[t.jsx(rt,{children:"Trip"}),t.jsx(nt,{children:h(n.tripId)})]}),t.jsxs(tt,{children:[t.jsx(rt,{children:"Created"}),t.jsx(nt,{children:b(n.createdAt)})]}),n.updatedAt!==n.createdAt&&t.jsxs(tt,{children:[t.jsx(rt,{children:"Last Modified"}),t.jsx(nt,{children:b(n.updatedAt)})]}),t.jsxs(tt,{children:[t.jsx(rt,{children:"Tags"}),t.jsx(nt,{children:n.tags.length>0?t.jsx(Im,{children:n.tags.map(m=>t.jsx(Nm,{children:m},m))}):t.jsx(Pm,{children:"No tags"})})]})]})}),t.jsx(z,{title:"Content",children:t.jsx(Mm,{children:n.content})})]})},Hn=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,qm=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Hm=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,At=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,ot=a.label`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,fr=a.select`
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
`,Wm=a.textarea`
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
`,Vm=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Km=a.input`
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
`,Gm=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.sm};
`,Qm=a.span`
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
`,_m=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.xs};
  margin-top: ${e=>e.theme.spacing.sm};
`,Jm=a.button`
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
`,Ym=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${e=>e.theme.spacing.lg};
`,Zm=a.div`
  color: ${e=>e.theme.colors.status.error};
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.status.error};
  padding: ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.borderRadius.md};
  margin-bottom: ${e=>e.theme.spacing.md};
`,Wn=()=>{const e=se(),{id:r}=Re(),n=!!r&&r!=="new",[o,s]=C.useState("general"),[i,l]=C.useState(""),[c,u]=C.useState(""),[d,p]=C.useState(""),[b,$]=C.useState([]),[h,m]=C.useState(""),[f,x]=C.useState(""),{data:g,isLoading:y}=oa(r||""),{data:v}=le(),{data:w}=Me(),L=sa(),k=gm(),M=xm();C.useEffect(()=>{g&&n&&(s(g.type),l(g.boatId||""),u(g.tripId||""),p(g.content),$(g.tags))},[g,n]);const P=()=>{const I=h.trim();I&&!b.includes(I)&&($([...b,I]),m(""))},E=I=>{$(b.filter(W=>W!==I))},S=I=>{b.includes(I)||$([...b,I])},D=I=>{I.key==="Enter"&&(I.preventDefault(),P())},B=async()=>{if(x(""),!d.trim()){x("Note content is required");return}if(o==="boat"&&!i){x("Please select a boat for boat-specific notes");return}if(o==="trip"&&!c){x("Please select a trip for trip notes");return}try{const I={content:d.trim(),type:o,boatId:o==="boat"?i:void 0,tripId:o==="trip"?c:void 0,tags:b};n?await M.mutateAsync({id:r,data:I}):await k.mutateAsync(I),e("/notes")}catch(I){console.error("Failed to save note:",I),x("Failed to save note. Please try again.")}},q=()=>{e("/notes")},V=L.filter(I=>!b.includes(I));return y&&n?t.jsxs(Hn,{children:[t.jsx(O,{level:1,children:"Loading Note"}),t.jsx(z,{title:"Loading",children:t.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading note data..."})})]}):t.jsxs(Hn,{children:[t.jsx(qm,{children:t.jsx(O,{level:1,children:n?"Edit Note":"Create New Note"})}),t.jsx(z,{title:"Note Details",children:t.jsxs(Hm,{children:[f&&t.jsx(Zm,{children:f}),t.jsxs(At,{children:[t.jsx(ot,{children:"Note Type"}),t.jsxs(fr,{value:o,onChange:I=>{s(I.target.value),l(""),u("")},children:[t.jsx("option",{value:"general",children:"General Note"}),t.jsx("option",{value:"boat",children:"Boat-Specific Note"}),t.jsx("option",{value:"trip",children:"Trip Note"})]})]}),o==="boat"&&t.jsxs(At,{children:[t.jsx(ot,{children:"Boat"}),t.jsxs(fr,{value:i,onChange:I=>l(I.target.value),children:[t.jsx("option",{value:"",children:"Select a boat"}),v==null?void 0:v.map(I=>t.jsx("option",{value:I.id,children:I.name},I.id))]})]}),o==="trip"&&t.jsxs(At,{children:[t.jsx(ot,{children:"Trip"}),t.jsxs(fr,{value:c,onChange:I=>u(I.target.value),children:[t.jsx("option",{value:"",children:"Select a trip"}),w==null?void 0:w.map(I=>{var W;return t.jsxs("option",{value:I.id,children:[new Date(I.startTime).toLocaleDateString()," - ",((W=v==null?void 0:v.find(je=>je.id===I.boatId))==null?void 0:W.name)||"Unknown Boat"]},I.id)})]})]}),t.jsxs(At,{children:[t.jsx(ot,{children:"Content"}),t.jsx(Wm,{value:d,onChange:I=>p(I.target.value),placeholder:"Enter your note content here..."})]}),t.jsxs(Vm,{children:[t.jsx(ot,{children:"Tags"}),t.jsx(Km,{type:"text",value:h,onChange:I=>m(I.target.value),onKeyPress:D,placeholder:"Add a tag and press Enter"}),b.length>0&&t.jsx(Gm,{children:b.map(I=>t.jsxs(Qm,{children:[I,t.jsx("button",{className:"remove-tag",onClick:()=>E(I),type:"button",children:"×"})]},I))}),V.length>0&&t.jsxs("div",{children:[t.jsx(ot,{style:{fontSize:"12px",marginBottom:"8px"},children:"Suggested Tags"}),t.jsx(_m,{children:V.slice(0,10).map(I=>t.jsx(Jm,{onClick:()=>S(I),type:"button",children:I},I))})]})]}),t.jsxs(Ym,{children:[t.jsx(T,{variant:"secondary",onClick:q,children:"Cancel"}),t.jsx(T,{onClick:B,disabled:k.isPending||M.isPending,children:k.isPending||M.isPending?"Saving...":"Save Note"})]})]})})]})},G={todoLists:e=>["todoLists",e],todoList:e=>["todoList",e]},Xm=e=>ee({queryKey:G.todoLists(e),queryFn:()=>N.getTodoLists(e)}),ep=e=>ee({queryKey:G.todoList(e),queryFn:()=>N.getTodoList(e),enabled:!!e}),tp=()=>{const e=K();return _({mutationFn:r=>N.createTodoList(r),onSuccess:()=>{e.invalidateQueries({queryKey:["todoLists"]})}})},rp=()=>{const e=K();return _({mutationFn:({id:r,data:n})=>N.updateTodoList(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:G.todoList(n)}),e.invalidateQueries({queryKey:["todoLists"]})}})},np=()=>{const e=K();return _({mutationFn:r=>N.deleteTodoList(r),onSuccess:()=>{e.invalidateQueries({queryKey:["todoLists"]})}})},op=()=>{const e=K();return _({mutationFn:({listId:r,content:n})=>N.addTodoItem(r,n),onMutate:async({listId:r,content:n})=>{await e.cancelQueries({queryKey:G.todoList(r)});const o=e.getQueryData(G.todoList(r));if(o){const s={id:`temp-${Date.now()}`,listId:r,content:n,completed:!1,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};e.setQueryData(G.todoList(r),{...o,items:[...o.items,s]})}return{previous:o}},onError:(r,{listId:n},o)=>{o!=null&&o.previous&&e.setQueryData(G.todoList(n),o.previous)},onSettled:(r,n,{listId:o})=>{e.invalidateQueries({queryKey:G.todoList(o)}),e.invalidateQueries({queryKey:["todoLists"]})}})},ap=()=>{const e=K();return _({mutationFn:({itemId:r})=>N.toggleTodoItem(r),onMutate:async({itemId:r,listId:n})=>{await e.cancelQueries({queryKey:G.todoList(n)});const o=e.getQueryData(G.todoList(n));return o&&e.setQueryData(G.todoList(n),{...o,items:o.items.map(s=>s.id===r?{...s,completed:!s.completed,completedAt:s.completed?void 0:new Date().toISOString()}:s)}),{previous:o}},onError:(r,{listId:n},o)=>{o!=null&&o.previous&&e.setQueryData(G.todoList(n),o.previous)},onSettled:(r,n,{listId:o})=>{e.invalidateQueries({queryKey:G.todoList(o)}),e.invalidateQueries({queryKey:["todoLists"]})}})},sp=()=>{const e=K();return _({mutationFn:({itemId:r,data:n})=>N.updateTodoItem(r,n),onMutate:async({itemId:r,listId:n,data:o})=>{await e.cancelQueries({queryKey:G.todoList(n)});const s=e.getQueryData(G.todoList(n));return s&&e.setQueryData(G.todoList(n),{...s,items:s.items.map(i=>i.id===r?{...i,...o}:i)}),{previous:s}},onError:(r,{listId:n},o)=>{o!=null&&o.previous&&e.setQueryData(G.todoList(n),o.previous)},onSettled:(r,n,{listId:o})=>{e.invalidateQueries({queryKey:G.todoList(o)}),e.invalidateQueries({queryKey:["todoLists"]})}})},ip=()=>{const e=K();return _({mutationFn:({itemId:r})=>N.deleteTodoItem(r),onMutate:async({itemId:r,listId:n})=>{await e.cancelQueries({queryKey:G.todoList(n)});const o=e.getQueryData(G.todoList(n));return o&&e.setQueryData(G.todoList(n),{...o,items:o.items.filter(s=>s.id!==r)}),{previous:o}},onError:(r,{listId:n},o)=>{o!=null&&o.previous&&e.setQueryData(G.todoList(n),o.previous)},onSettled:(r,n,{listId:o})=>{e.invalidateQueries({queryKey:G.todoList(o)}),e.invalidateQueries({queryKey:["todoLists"]})}})},lp=a.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: ${e=>e.theme.spacing.md};
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.$isEditing?e.theme.colors.primary.neonCarrot:e.$completed?e.theme.colors.status.success:e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  transition: all ${e=>e.theme.animation.normal} ease;
  cursor: pointer;
  animation: slideIn ${e=>e.theme.animation.normal} ease;

  &:hover {
    border-color: ${e=>(e.$isEditing,e.theme.colors.primary.neonCarrot)};
    box-shadow: 0 0 12px ${e=>e.theme.colors.primary.neonCarrot}30;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-8px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,cp=a.button`
  width: 24px;
  height: 24px;
  min-width: 24px;
  border-radius: 50%;
  border: 2px solid ${e=>e.$completed?e.theme.colors.status.success:e.theme.colors.primary.anakiwa};
  background: ${e=>e.$completed?e.theme.colors.status.success:"transparent"};
  color: ${e=>e.theme.colors.background};
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${e=>e.theme.animation.fast} ease;
  padding: 0;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 8px ${e=>e.$completed?e.theme.colors.status.success:e.theme.colors.primary.anakiwa};
  }

  &:active {
    transform: scale(0.95);
  }
`,dp=a.div`
  flex: 1;
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: 14px;
  color: ${e=>e.$completed?e.theme.colors.text.muted:e.theme.colors.text.light};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing};
  text-decoration: ${e=>e.$completed?"line-through":"none"};
  user-select: none;
`,mp=a.input`
  flex: 1;
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: 14px;
  color: ${e=>e.theme.colors.text.light};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing};
  background: ${e=>e.theme.colors.surface.medium};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: 8px 12px;
  outline: none;

  &:focus {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 12px ${e=>e.theme.colors.primary.neonCarrot}40;
  }
`,pp=a.button`
  width: 24px;
  height: 24px;
  min-width: 24px;
  border-radius: 50%;
  border: 2px solid ${e=>e.theme.colors.status.error};
  background: transparent;
  color: ${e=>e.theme.colors.status.error};
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${e=>e.$visible?1:0};
  transition: all ${e=>e.theme.animation.fast} ease;
  padding: 0;

  &:hover {
    background: ${e=>e.theme.colors.status.error};
    color: ${e=>e.theme.colors.background};
    transform: scale(1.1);
    box-shadow: 0 0 8px ${e=>e.theme.colors.status.error};
  }

  &:active {
    transform: scale(0.95);
  }
`,hp=({item:e,onToggle:r,onUpdate:n,onDelete:o})=>{const[s,i]=C.useState(!1),[l,c]=C.useState(e.content),[u,d]=C.useState(!1),p=C.useRef(null);C.useEffect(()=>{s&&p.current&&(p.current.focus(),p.current.select())},[s]);const b=g=>{g.stopPropagation(),e.completed||i(!0)},$=()=>{const g=l.trim();g&&g!==e.content&&n(e.id,g),i(!1)},h=()=>{c(e.content),i(!1)},m=g=>{g.key==="Enter"?$():g.key==="Escape"&&h()},f=g=>{g.stopPropagation(),r(e.id)},x=g=>{g.stopPropagation(),o(e.id)};return t.jsxs(lp,{$completed:e.completed,$isEditing:s,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[t.jsx(cp,{$completed:e.completed,onClick:f,children:e.completed&&"✓"}),s?t.jsx(mp,{ref:p,value:l,onChange:g=>c(g.target.value),onKeyDown:m,onBlur:$}):t.jsx(dp,{$completed:e.completed,onClick:b,children:e.content}),t.jsx(pp,{$visible:u,onClick:x,children:"×"})]})},up=a.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`,gp=a.div`
  flex: 1;
  height: 10px;
  background: ${e=>e.theme.colors.surface.medium};
  border-radius: ${e=>e.theme.borderRadius.pill};
  overflow: hidden;
  position: relative;
`,xp=a.div`
  height: 100%;
  width: ${e=>e.$percentage}%;
  background: ${e=>e.theme.colors.primary.neonCarrot};
  border-radius: ${e=>e.theme.borderRadius.pill};
  transition: width ${e=>e.theme.animation.normal} ease;
  box-shadow: 0 0 8px ${e=>e.theme.colors.primary.neonCarrot}40;
`,fp=a.span`
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: 12px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing};
  min-width: 42px;
  text-align: right;
`,yp=({percentage:e})=>{const r=Math.min(100,Math.max(0,e));return t.jsxs(up,{children:[t.jsx(gp,{children:t.jsx(xp,{$percentage:r})}),t.jsxs(fp,{children:[Math.round(r),"%"]})]})},bp=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
  gap: 16px;
`,$p=a.div`
  font-size: 48px;
  line-height: 1;
  opacity: 0.6;
  filter: grayscale(0.3);
`,jp=a.h3`
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: 20px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing};
  margin: 0;
`,vp=a.p`
  font-family: ${e=>e.theme.typography.fontFamily};
  font-size: 14px;
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing};
  margin: 0;
  max-width: 320px;
`,Vn=({title:e,message:r,icon:n="📋"})=>t.jsxs(bp,{children:[t.jsx($p,{children:n}),t.jsx(jp,{children:e}),t.jsx(vp,{children:r})]}),wp=Z`
  from { opacity: 0; }
  to { opacity: 1; }
`,Cp=Z`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`,Sp=a.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: ${e=>e.theme.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${wp} 150ms ease;
`,kp=a.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.lilac};
  border-radius: ${e=>e.theme.borderRadius.lg};
  width: ${e=>e.width||"480px"};
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${Cp} 200ms ease;
`,Kn={primary:"#FF9933",secondary:"#CC99CC",accent:"#99CCFF",danger:"#FF5555"},Tp=a.div`
  background: ${e=>Kn[e.variant]||Kn.primary};
  padding: 0 ${e=>e.theme.spacing.md};
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${e=>e.theme.lcars.buttonRadius};
  margin: ${e=>e.theme.spacing.sm};
  margin-bottom: 0;
`,Ap=a.span`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.inverse};
`,Ep=a.button`
  background: none;
  border: none;
  color: ${e=>e.theme.colors.text.inverse};
  font-size: 18px;
  cursor: pointer;
  padding: 0 4px;
  font-weight: bold;
  line-height: 1;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`,Fp=a.div`
  padding: ${e=>e.theme.spacing.lg};
  overflow-y: auto;
  flex: 1;
`,ia=({isOpen:e,onClose:r,title:n,variant:o="primary",children:s,width:i})=>{const l=C.useRef(null),c=C.useCallback(u=>{u.key==="Escape"&&r()},[r]);return C.useEffect(()=>{if(e)return document.addEventListener("keydown",c),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",c),document.body.style.overflow=""}},[e,c]),e?yo.createPortal(t.jsx(Sp,{onClick:u=>{u.target===u.currentTarget&&r()},children:t.jsxs(kp,{ref:l,width:i,role:"dialog","aria-modal":"true",children:[n&&t.jsxs(Tp,{variant:o,children:[t.jsx(Ap,{children:n}),t.jsx(Ep,{onClick:r,"aria-label":"Close",children:"×"})]}),t.jsx(Fp,{children:s})]})}),document.body):null},Lp=a.p`
  color: ${e=>e.theme.colors.text.light};
  font-size: ${e=>e.theme.typography.fontSize.md};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  margin: 0 0 ${e=>e.theme.spacing.lg} 0;
`,Dp=a.div`
  display: flex;
  justify-content: flex-end;
  gap: ${e=>e.theme.spacing.md};
`,zp=({isOpen:e,onClose:r,onConfirm:n,title:o,message:s,confirmLabel:i="Confirm",cancelLabel:l="Cancel",variant:c="primary",isLoading:u=!1})=>t.jsxs(ia,{isOpen:e,onClose:r,title:o,variant:c==="danger"?"danger":"primary",children:[t.jsx(Lp,{children:s}),t.jsxs(Dp,{children:[t.jsx(T,{variant:"secondary",onClick:r,disabled:u,children:l}),t.jsx(T,{variant:c==="danger"?"danger":"primary",onClick:n,disabled:u,children:u?"Processing...":i})]})]}),Rp=Z`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,Mp=Z`
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
`,Ip=Z`
  from { opacity: 0; transform: translateX(-12px); }
  to { opacity: 1; transform: translateX(0); }
`,Kt="768px",Gn="300px",Np="3px",Qn=a.div`
  display: flex;
  min-height: calc(100vh - 140px);
  gap: ${Np};

  @media (max-width: ${Kt}) {
    flex-direction: column;
    gap: 0;
  }
`,Pp=a.aside`
  width: ${Gn};
  min-width: ${Gn};
  background: ${e=>e.theme.colors.surface.dark};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: ${Kt}) {
    width: 100%;
    min-width: 100%;
    display: ${e=>e.$hidden?"none":"flex"};
  }
`,Bp=a.section`
  flex: 1;
  background: ${e=>e.theme.colors.background};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${Mp} 300ms ease;

  @media (max-width: ${Kt}) {
    display: ${e=>e.$hidden?"none":"flex"};
  }
`,Op=a.div`
  padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
  flex-shrink: 0;
`,Up=a.h2`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.extraWide};
  margin: 0;
`,qp=a.select`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
  color: ${e=>e.theme.colors.text.light};
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: 6px 10px;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 12px ${e=>e.theme.colors.primary.neonCarrot}40;
  }

  option {
    background: ${e=>e.theme.colors.surface.dark};
  }
`,Hp=a.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Wp=a.button`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  padding: ${e=>e.theme.spacing.md};
  background: ${e=>e.$active?e.theme.colors.surface.medium:"transparent"};
  border: 2px solid ${e=>e.$active?e.theme.colors.primary.neonCarrot:e.theme.colors.surface.medium};
  border-radius: ${e=>e.theme.borderRadius.md};
  cursor: pointer;
  text-align: left;
  transition: all 200ms ease;
  animation: ${Ip} 300ms ease both;

  ${e=>e.$active&&F`
    box-shadow: 0 0 10px ${e.theme.colors.primary.neonCarrot}30;
  `}

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    background: ${e=>e.theme.colors.surface.medium};
  }
`,Vp=a.span`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.text.light};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
`,yr=a.span`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 11px;
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
`,_n=a.span`
  display: inline-block;
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 10px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  color: ${e=>e.theme.colors.text.inverse};
  background: ${e=>e.$type==="boat"?e.theme.colors.primary.anakiwa:e.theme.colors.primary.neonCarrot};
  padding: 2px 10px;
  border-radius: ${e=>e.theme.borderRadius.pill};
`,Kp=a.div`
  padding: ${e=>e.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
  flex-shrink: 0;
  border-bottom: 2px solid ${e=>e.theme.colors.surface.medium};
`,Gp=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
  flex-wrap: wrap;
`,Qp=a.h2`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  margin: 0;
  cursor: pointer;
  transition: color 200ms ease;

  &:hover {
    color: ${e=>e.theme.colors.primary.neonCarrot};
  }
`,_p=a.input`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: 4px 12px;
  outline: none;

  &:focus {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 12px ${e=>e.theme.colors.primary.neonCarrot}40;
  }
`,Jp=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 12px;
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
`,Yp=a.button`
  display: none;

  @media (max-width: ${Kt}) {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: none;
    border: none;
    color: ${e=>e.theme.colors.primary.anakiwa};
    font-family: ${e=>e.theme.typography.fontFamily.primary};
    font-size: ${e=>e.theme.typography.fontSize.sm};
    font-weight: ${e=>e.theme.typography.fontWeight.bold};
    text-transform: uppercase;
    letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
    padding: 0;
    cursor: pointer;
    margin-bottom: ${e=>e.theme.spacing.sm};
  }
`,Zp=a.div`
  flex: 1;
  overflow-y: auto;
  padding: ${e=>e.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Xp=a.form`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
  margin-bottom: ${e=>e.theme.spacing.md};
  flex-shrink: 0;
`,eh=a.input`
  flex: 1;
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 14px;
  color: ${e=>e.theme.colors.text.light};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: 10px 14px;
  outline: none;

  &:focus {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 12px ${e=>e.theme.colors.primary.neonCarrot}40;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
    opacity: 0.6;
  }
`,th=a.div`
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.lg};
  border-top: 2px solid ${e=>e.theme.colors.surface.medium};
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
`,Jn=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.extraWide};
  text-align: center;
  padding: 80px 24px;
  animation: ${Rp} 1.5s ease infinite;
`,br=a.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: ${e=>e.theme.spacing.md};
`,$r=a.label`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 11px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.neonCarrot};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.wide};
`,rh=a.input`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 14px;
  color: ${e=>e.theme.colors.text.light};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: 10px 14px;
  outline: none;

  &:focus {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 12px ${e=>e.theme.colors.primary.neonCarrot}40;
  }
`,Yn=a.select`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 14px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: ${e=>e.theme.typography.letterSpacing.normal};
  color: ${e=>e.theme.colors.text.light};
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: 10px 14px;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
    box-shadow: 0 0 12px ${e=>e.theme.colors.primary.neonCarrot}40;
  }

  option {
    background: ${e=>e.theme.colors.surface.dark};
  }
`,nh=a.div`
  display: flex;
  justify-content: flex-end;
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.md};
`,oh=()=>{const[e,r]=Sa(),n=e.get("list")||"",{data:o,isLoading:s}=Xm(),{data:i,isLoading:l}=ep(n),{data:c}=le(),u=tp(),d=rp(),p=np(),b=op(),$=ap(),h=sp(),m=ip(),[f,x]=C.useState("all"),[g,y]=C.useState(!1),[v,w]=C.useState(!1),[L,k]=C.useState(!1),[M,P]=C.useState(""),[E,S]=C.useState(""),[D,B]=C.useState(""),[q,V]=C.useState("general"),[I,W]=C.useState(""),je=!!n,oe=C.useRef(null),ct=C.useRef(null);C.useEffect(()=>{!n&&o&&o.length>0&&r({list:o[0].id},{replace:!0})},[o,n,r]),C.useEffect(()=>{L&&oe.current&&(oe.current.focus(),oe.current.select())},[L]);const jt=C.useMemo(()=>o?f==="all"?o:o.filter(R=>R.type===f):[],[o,f]),ce=C.useMemo(()=>i!=null&&i.items?[...i.items].sort((R,te)=>R.completed===te.completed?0:R.completed?1:-1):[],[i]),ve=(i==null?void 0:i.items.filter(R=>R.completed).length)??0,Ae=(i==null?void 0:i.items.length)??0,Ne=Ae>0?ve/Ae*100:0,dt=R=>{if(!R||!c)return"";const te=c.find(_e=>_e.id===R);return(te==null?void 0:te.name)??""},ma=R=>{r({list:R})},pa=()=>{i&&(P(i.title),k(!0))},en=()=>{const R=M.trim();R&&R!==(i==null?void 0:i.title)&&d.mutate({id:n,data:{title:R}}),k(!1)},ha=R=>{R.key==="Enter"?en():R.key==="Escape"&&k(!1)},ua=R=>{var _e;R.preventDefault();const te=E.trim();!te||!n||(b.mutate({listId:n,content:te}),S(""),(_e=ct.current)==null||_e.focus())},ga=R=>{$.mutate({itemId:R,listId:n})},xa=(R,te)=>{h.mutate({itemId:R,listId:n,data:{content:te}})},fa=R=>{m.mutate({itemId:R,listId:n})},ya=()=>{p.mutate(n,{onSuccess:()=>{w(!1),r({},{replace:!0})}})},tn=()=>{const R=D.trim();R&&u.mutate({title:R,type:q,boatId:q==="boat"&&I||void 0},{onSuccess:te=>{y(!1),B(""),V("general"),W(""),r({list:te.id})}})},ba=()=>{r({},{replace:!0})};return s?t.jsx(Qn,{children:t.jsx(Jn,{children:"Accessing Database..."})}):t.jsxs(Qn,{children:[t.jsxs(Pp,{$hidden:je,children:[t.jsxs(Op,{children:[t.jsx(Up,{children:"Task Lists"}),t.jsx(T,{variant:"secondary",size:"sm",onClick:()=>y(!0),children:"New List"}),t.jsxs(qp,{value:f,onChange:R=>x(R.target.value),"aria-label":"Filter by type",children:[t.jsx("option",{value:"all",children:"All Types"}),t.jsx("option",{value:"general",children:"General"}),t.jsx("option",{value:"boat",children:"Boat"})]})]}),t.jsx(Hp,{children:jt.length===0?t.jsx(yr,{style:{textAlign:"center",padding:"24px 0"},children:o&&o.length>0?"No matching lists":"No lists yet"}):jt.map((R,te)=>{const _e=R.items.filter(ja=>ja.completed).length,$a=R.items.length;return t.jsxs(Wp,{$active:R.id===n,onClick:()=>ma(R.id),style:{animationDelay:`${te*40}ms`},"aria-current":R.id===n?"true":void 0,children:[t.jsx(Vp,{children:R.title}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx(_n,{$type:R.type,children:R.type==="boat"?`Boat - ${dt(R.boatId)}`:"General"}),t.jsxs(yr,{children:[_e,"/",$a," done"]})]})]},R.id)})})]}),t.jsx(Bp,{$hidden:!je&&!n&&!1,children:n?l?t.jsx(Jn,{children:"Loading List Data..."}):i?t.jsxs(t.Fragment,{children:[t.jsxs(Kp,{children:[t.jsx(Yp,{onClick:ba,children:"← Back to Lists"}),t.jsxs(Gp,{children:[L?t.jsx(_p,{ref:oe,value:M,onChange:R=>P(R.target.value),onKeyDown:ha,onBlur:en}):t.jsx(Qp,{onClick:pa,children:i.title}),t.jsx(_n,{$type:i.type,children:i.type==="boat"?`Boat - ${dt(i.boatId)}`:"General"})]}),t.jsxs(Jp,{children:[ve," of ",Ae," completed",Ae>0&&` — ${Math.round(Ne)}%`]}),t.jsx(yp,{percentage:Ne})]}),t.jsxs(Zp,{children:[t.jsxs(Xp,{onSubmit:ua,children:[t.jsx(eh,{ref:ct,value:E,onChange:R=>S(R.target.value),placeholder:"Add new task...","aria-label":"New task content"}),t.jsx(T,{variant:"primary",size:"sm",type:"submit",onClick:()=>{},children:"Add"})]}),ce.length===0?t.jsx(yr,{style:{textAlign:"center",padding:"24px 0"},children:"No items yet. Add your first task above."}):ce.map(R=>t.jsx(hp,{item:R,onToggle:ga,onUpdate:xa,onDelete:fa},R.id))]}),t.jsx(th,{children:t.jsx(T,{variant:"danger",size:"sm",onClick:()=>w(!0),children:"Delete List"})})]}):t.jsx(Vn,{title:"List Not Found",message:"The selected list could not be loaded. It may have been deleted."}):t.jsx(Vn,{title:o&&o.length>0?"Select a List":"Create Your First List",message:o&&o.length>0?"Choose a task list from the sidebar to view its items":"Get started by creating a new task list using the button on the left"})}),t.jsxs(ia,{isOpen:g,onClose:()=>y(!1),title:"Create Task List",children:[t.jsxs(br,{children:[t.jsx($r,{htmlFor:"create-title",children:"Title"}),t.jsx(rh,{id:"create-title",value:D,onChange:R=>B(R.target.value),placeholder:"Enter list title...",autoFocus:!0,onKeyDown:R=>{R.key==="Enter"&&tn()}})]}),t.jsxs(br,{children:[t.jsx($r,{htmlFor:"create-type",children:"Type"}),t.jsxs(Yn,{id:"create-type",value:q,onChange:R=>V(R.target.value),children:[t.jsx("option",{value:"general",children:"General"}),t.jsx("option",{value:"boat",children:"Boat"})]})]}),q==="boat"&&t.jsxs(br,{children:[t.jsx($r,{htmlFor:"create-boat",children:"Vessel"}),t.jsxs(Yn,{id:"create-boat",value:I,onChange:R=>W(R.target.value),children:[t.jsx("option",{value:"",children:"Select a vessel..."}),c==null?void 0:c.map(R=>t.jsx("option",{value:R.id,children:R.name},R.id))]})]}),t.jsxs(nh,{children:[t.jsx(T,{variant:"secondary",size:"sm",onClick:()=>y(!1),children:"Cancel"}),t.jsx(T,{variant:"primary",size:"sm",onClick:tn,disabled:!D.trim()||q==="boat"&&!I,children:"Create"})]})]}),t.jsx(zp,{isOpen:v,onClose:()=>w(!1),onConfirm:ya,title:"Delete Task List",message:`Permanently delete "${(i==null?void 0:i.title)??""}" and all its items? This action cannot be undone.`,confirmLabel:"Delete",cancelLabel:"Cancel",variant:"danger",isLoading:p.isPending})]})};function la(e){return ee({queryKey:["maintenance-templates",e],queryFn:()=>N.getMaintenanceTemplates(e)})}function ca(e,r){return ee({queryKey:["maintenance-template",e],queryFn:()=>N.getMaintenanceTemplate(e),enabled:(r==null?void 0:r.enabled)!==void 0?r.enabled:!!e})}function ah(){const e=K();return _({mutationFn:r=>N.createMaintenanceTemplate(r),onSuccess:()=>{e.invalidateQueries({queryKey:["maintenance-templates"]})}})}function sh(){const e=K();return _({mutationFn:({id:r,data:n})=>N.updateMaintenanceTemplate(r,n),onSuccess:(r,{id:n})=>{e.invalidateQueries({queryKey:["maintenance-template",n]}),e.invalidateQueries({queryKey:["maintenance-templates"]})}})}function ih(){const e=K();return _({mutationFn:r=>N.deleteMaintenanceTemplate(r),onSuccess:()=>{e.invalidateQueries({queryKey:["maintenance-templates"]}),e.invalidateQueries({queryKey:["maintenance-events"]})}})}function Xr(e){return ee({queryKey:["maintenance-events","upcoming",e],queryFn:()=>N.getUpcomingMaintenanceEvents(e)})}function da(e){return ee({queryKey:["maintenance-events","completed",e],queryFn:()=>N.getCompletedMaintenanceEvents(e)})}function lh(e){return ee({queryKey:["maintenance-event",e],queryFn:()=>N.getMaintenanceEvent(e),enabled:!!e})}function ch(){const e=K();return _({mutationFn:({id:r,data:n})=>N.completeMaintenanceEvent(r,n),onSuccess:()=>{e.invalidateQueries({queryKey:["maintenance-events"]})}})}const dh=a.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,mh=a.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,ph=a.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,jr=a(T)`
  background-color: ${e=>e.active?e.theme.colors.primary.neonCarrot:e.theme.colors.primary.lilac};
  opacity: ${e=>e.active?1:.7};
`,hh=a(z)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,Zn=a.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`,Xn=a(z)`
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${e=>e.theme.colors.primary.lilac}20;
  }
`,eo=a.div`
  display: flex;
  justify-content: between;
  align-items: flex-start;
  margin-bottom: 10px;
`,to=a.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin: 0;
  font-size: 18px;
  flex: 1;
`,ro=a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
`,no=a.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${e=>{switch(e.status){case"active":return e.theme.colors.primary.anakiwa;case"inactive":return e.theme.colors.text.secondary;case"due":return e.theme.colors.primary.neonCarrot;case"overdue":return"#ff4444";case"completed":return"#44ff44";default:return e.theme.colors.text.secondary}}};
  color: ${e=>e.theme.colors.background};
`,uh=a.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
`,gh=a.select`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
`;function xh(){const[e,r]=C.useState("templates"),[n,o]=C.useState(""),{data:s=[]}=le(),{data:i=[],isLoading:l}=la(n||void 0),{data:c=[],isLoading:u}=Xr(n||void 0),{data:d=[],isLoading:p}=da(n||void 0),b=y=>{if(!y)return"One-time";const{type:v,interval:w}=y,L=w===1?v.slice(0,-1):v;return`Every ${w} ${L}`},$=y=>y?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(y):"N/A",h=y=>{if(!y)return"N/A";const v=Math.floor(y/60),w=y%60;return v>0?`${v}h ${w}m`:`${w}m`},m=y=>{if(y.completedAt)return"completed";const v=new Date(y.dueDate),w=new Date,L=Math.ceil((v.getTime()-w.getTime())/(1e3*60*60*24));return L<0?"overdue":L<=7?"due":"active"},f=()=>t.jsx(Zn,{children:i.map(y=>{var v;return t.jsx(Y,{to:`/maintenance/templates/${y.id}`,style:{textDecoration:"none"},children:t.jsxs(Xn,{children:[t.jsxs(eo,{children:[t.jsx(to,{children:y.title}),t.jsx(no,{status:y.isActive?"active":"inactive",children:y.isActive?"Active":"Inactive"})]}),t.jsxs(ro,{children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Boat:"})," ",((v=y.boat)==null?void 0:v.name)||"Unknown"]}),y.component&&t.jsxs("div",{children:[t.jsx("strong",{children:"Component:"})," ",y.component]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Recurrence:"})," ",b(y.recurrence)]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Est. Cost:"})," ",$(y.estimatedCost)]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Est. Time:"})," ",h(y.estimatedTime)]})]}),y.description&&t.jsx("div",{style:{marginTop:"10px",fontSize:"14px",color:"#ccc"},children:y.description})]})},y.id)})}),x=(y,v=!1)=>t.jsx(Zn,{children:y.map(w=>{var L,k,M,P;return t.jsx(Y,{to:`/maintenance/events/${w.id}`,style:{textDecoration:"none"},children:t.jsxs(Xn,{children:[t.jsxs(eo,{children:[t.jsx(to,{children:((L=w.template)==null?void 0:L.title)||"Unknown Task"}),t.jsx(no,{status:m(w),children:m(w)})]}),t.jsxs(ro,{children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Boat:"})," ",((M=(k=w.template)==null?void 0:k.boat)==null?void 0:M.name)||"Unknown"]}),((P=w.template)==null?void 0:P.component)&&t.jsxs("div",{children:[t.jsx("strong",{children:"Component:"})," ",w.template.component]}),t.jsxs("div",{children:[t.jsx("strong",{children:"Due Date:"})," ",new Date(w.dueDate).toLocaleDateString()]}),v&&w.completedAt&&t.jsxs("div",{children:[t.jsx("strong",{children:"Completed:"})," ",new Date(w.completedAt).toLocaleDateString()]}),w.actualCost&&t.jsxs("div",{children:[t.jsx("strong",{children:"Actual Cost:"})," ",$(w.actualCost)]}),w.actualTime&&t.jsxs("div",{children:[t.jsx("strong",{children:"Actual Time:"})," ",h(w.actualTime)]})]}),w.notes&&t.jsx("div",{style:{marginTop:"10px",fontSize:"14px",color:"#ccc"},children:w.notes})]})},w.id)})}),g=l||u||p;return t.jsxs(dh,{children:[t.jsxs(ye,{children:[t.jsx(A,{label:"System Status",value:"OPERATIONAL"}),t.jsx(A,{label:"Active Templates",value:i.filter(y=>y.isActive).length.toString()}),t.jsx(A,{label:"Upcoming Events",value:c.length.toString()}),t.jsx(A,{label:"Overdue Events",value:c.filter(y=>m(y)==="overdue").length.toString()})]}),t.jsxs(mh,{children:[t.jsx(O,{children:"Maintenance Management"}),t.jsxs(uh,{children:[t.jsxs(gh,{value:n,onChange:y=>o(y.target.value),children:[t.jsx("option",{value:"",children:"All Boats"}),s.map(y=>t.jsx("option",{value:y.id,children:y.name},y.id))]}),t.jsx(Y,{to:"/maintenance/templates/new",children:t.jsx(T,{children:"New Template"})})]}),t.jsxs(ph,{children:[t.jsxs(jr,{active:e==="templates",onClick:()=>r("templates"),children:["Templates (",i.length,")"]}),t.jsxs(jr,{active:e==="upcoming",onClick:()=>r("upcoming"),children:["Upcoming (",c.length,")"]}),t.jsxs(jr,{active:e==="completed",onClick:()=>r("completed"),children:["Completed (",d.length,")"]})]}),t.jsx(hh,{children:g?t.jsx("div",{style:{textAlign:"center",padding:"40px"},children:t.jsx("div",{style:{color:"#ff9966",fontSize:"18px"},children:"Loading maintenance data..."})}):t.jsxs(t.Fragment,{children:[e==="templates"&&f(),e==="upcoming"&&x(c),e==="completed"&&x(d,!0)]})})]})]})}const vr=a.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,wr=a.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,Cr=a(z)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,fh=a.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,yh=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,Sr=a(z)`
  padding: 15px;
`,Et=a.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin: 0 0 15px 0;
  font-size: 16px;
  text-transform: uppercase;
`,we=a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ce=a.span`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
`,Se=a.span`
  color: ${e=>e.theme.colors.text.primary};
`,bh=a.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${e=>e.active?e.theme.colors.primary.anakiwa:e.theme.colors.text.secondary};
  color: ${e=>e.theme.colors.background};
`,$h=a.div`
  background-color: ${e=>e.theme.colors.background}40;
  padding: 15px;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.neonCarrot};
  margin-bottom: 20px;
  line-height: 1.5;
`,jh=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: 18px;
`,vh=a.div`
  padding: 20px;
  text-align: center;
`;function wh(){var p,b;const{id:e}=Re(),r=se(),{data:n,isLoading:o,error:s}=ca(e),i=ih(),l=async()=>{if(!n)return;if(window.confirm(`Are you sure you want to delete the template "${n.title}"? This will also delete all future maintenance events for this template.`))try{await i.mutateAsync(n.id),r("/maintenance")}catch(h){console.error("Failed to delete template:",h),alert("Failed to delete template. Please try again.")}},c=$=>{if(!$)return"One-time";const{type:h,interval:m}=$,f=m===1?h.slice(0,-1):h;return`Every ${m} ${f}`},u=$=>$?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format($):"Not specified",d=$=>{if(!$)return"Not specified";const h=Math.floor($/60),m=$%60;return h>0?`${h}h ${m}m`:`${m}m`};return o?t.jsxs(vr,{children:[t.jsx(ye,{children:t.jsx(A,{label:"Status",value:"LOADING"})}),t.jsxs(wr,{children:[t.jsx(O,{children:"Maintenance Template"}),t.jsx(Cr,{children:t.jsx(jh,{children:"Loading template details..."})})]})]}):s||!n?t.jsxs(vr,{children:[t.jsx(ye,{children:t.jsx(A,{label:"Status",value:"ERROR"})}),t.jsxs(wr,{children:[t.jsx(O,{children:"Maintenance Template"}),t.jsx(Cr,{children:t.jsxs(vh,{children:[t.jsx(be,{type:"error",children:"Template not found or failed to load."}),t.jsx(Y,{to:"/maintenance",children:t.jsx(T,{children:"Back to Maintenance"})})]})})]})]}):t.jsxs(vr,{children:[t.jsxs(ye,{children:[t.jsx(A,{label:"Template Status",value:n.isActive?"ACTIVE":"INACTIVE"}),t.jsx(A,{label:"Boat",value:((p=n.boat)==null?void 0:p.name)||"Unknown"}),t.jsx(A,{label:"Component",value:n.component||"General"}),t.jsx(A,{label:"Recurrence",value:c(n.recurrence)})]}),t.jsxs(wr,{children:[t.jsx(O,{children:n.title}),t.jsxs(fh,{children:[t.jsx(Y,{to:"/maintenance",children:t.jsx(T,{children:"Back to List"})}),t.jsx(Y,{to:`/maintenance/templates/${n.id}/edit`,children:t.jsx(T,{children:"Edit Template"})}),t.jsx(T,{onClick:l,disabled:i.isPending,variant:"danger",children:i.isPending?"Deleting...":"Delete Template"})]}),t.jsxs(Cr,{children:[n.description&&t.jsxs($h,{children:[t.jsx("strong",{children:"Description:"}),t.jsx("br",{}),n.description]}),t.jsxs(yh,{children:[t.jsxs(Sr,{children:[t.jsx(Et,{children:"Basic Information"}),t.jsxs(we,{children:[t.jsx(Ce,{children:"Title:"}),t.jsx(Se,{children:n.title})]}),t.jsxs(we,{children:[t.jsx(Ce,{children:"Boat:"}),t.jsx(Se,{children:((b=n.boat)==null?void 0:b.name)||"Unknown"})]}),t.jsxs(we,{children:[t.jsx(Ce,{children:"Component:"}),t.jsx(Se,{children:n.component||"General"})]}),t.jsxs(we,{children:[t.jsx(Ce,{children:"Status:"}),t.jsx(Se,{children:t.jsx(bh,{active:n.isActive,children:n.isActive?"Active":"Inactive"})})]})]}),t.jsxs(Sr,{children:[t.jsx(Et,{children:"Schedule & Estimates"}),t.jsxs(we,{children:[t.jsx(Ce,{children:"Recurrence:"}),t.jsx(Se,{children:c(n.recurrence)})]}),t.jsxs(we,{children:[t.jsx(Ce,{children:"Estimated Cost:"}),t.jsx(Se,{children:u(n.estimatedCost)})]}),t.jsxs(we,{children:[t.jsx(Ce,{children:"Estimated Time:"}),t.jsx(Se,{children:d(n.estimatedTime)})]})]}),t.jsxs(Sr,{children:[t.jsx(Et,{children:"Timestamps"}),t.jsxs(we,{children:[t.jsx(Ce,{children:"Created:"}),t.jsx(Se,{children:new Date(n.createdAt).toLocaleString()})]}),t.jsxs(we,{children:[t.jsx(Ce,{children:"Updated:"}),t.jsx(Se,{children:new Date(n.updatedAt).toLocaleString()})]})]})]}),t.jsxs("div",{style:{marginTop:"30px"},children:[t.jsx(Et,{children:"Related Events"}),t.jsx("p",{style:{color:"#ccc",marginBottom:"20px"},children:"View upcoming and completed maintenance events generated from this template."}),t.jsxs("div",{style:{display:"flex",gap:"10px"},children:[t.jsx(Y,{to:`/maintenance?tab=upcoming&template=${n.id}`,children:t.jsx(T,{children:"View Upcoming Events"})}),t.jsx(Y,{to:`/maintenance?tab=completed&template=${n.id}`,children:t.jsx(T,{children:"View Completed Events"})})]})]})]})]})]})}const kr=a.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,Tr=a.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,Ar=a(z)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,Ch=a.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Sh=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,Er=a(z)`
  padding: 15px;
`,Ft=a.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin: 0 0 15px 0;
  font-size: 16px;
  text-transform: uppercase;
`,ge=a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,de=a.span`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
`,xe=a.span`
  color: ${e=>e.theme.colors.text.primary};
`,kh=a.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${e=>{switch(e.status){case"completed":return"#44ff44";case"overdue":return"#ff4444";case"due":return e.theme.colors.primary.neonCarrot;case"upcoming":return e.theme.colors.primary.anakiwa;default:return e.theme.colors.text.secondary}}};
  color: ${e=>e.theme.colors.background};
`,Th=a.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${e=>e.theme.colors.background}40;
  padding: 20px;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.neonCarrot};
`,Fr=a.div`
  display: flex;
  gap: 15px;
  align-items: center;
`,Lr=a.label`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
  min-width: 120px;
`,oo=a.input`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  flex: 1;
`,Ah=a.textarea`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  flex: 1;
`,Eh=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: 18px;
`,Fh=a.div`
  padding: 20px;
  text-align: center;
`,Lh=a.div`
  background-color: ${e=>e.theme.colors.background}40;
  padding: 15px;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.lilac};
  margin-bottom: 20px;
  line-height: 1.5;
`;function Dh(){var x,g,y,v,w,L,k,M,P,E,S;const{id:e}=Re(),[r,n]=C.useState(!1),[o,s]=C.useState({actualCost:"",actualTime:"",notes:""}),{data:i,isLoading:l,error:c}=lh(e),u=ch(),d=D=>{if(D.completedAt)return"completed";const B=new Date(D.dueDate),q=new Date,V=Math.ceil((B.getTime()-q.getTime())/(1e3*60*60*24));return V<0?"overdue":V<=7?"due":"upcoming"},p=D=>D?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(D):"Not specified",b=D=>{if(!D)return"Not specified";const B=Math.floor(D/60),q=D%60;return B>0?`${B}h ${q}m`:`${q}m`},$=D=>{if(!D)return"One-time";const{type:B,interval:q}=D,V=q===1?B.slice(0,-1):B;return`Every ${q} ${V}`},h=async D=>{if(D.preventDefault(),!!i)try{const B={};o.actualCost&&(B.actualCost=parseFloat(o.actualCost)),o.actualTime&&(B.actualTime=parseInt(o.actualTime)),o.notes&&(B.notes=o.notes),await u.mutateAsync({id:i.id,data:B}),n(!1)}catch(B){console.error("Failed to complete event:",B),alert("Failed to complete maintenance event. Please try again.")}};if(l)return t.jsxs(kr,{children:[t.jsx(ye,{children:t.jsx(A,{label:"Status",value:"LOADING"})}),t.jsxs(Tr,{children:[t.jsx(O,{children:"Maintenance Event"}),t.jsx(Ar,{children:t.jsx(Eh,{children:"Loading event details..."})})]})]});if(c||!i)return t.jsxs(kr,{children:[t.jsx(ye,{children:t.jsx(A,{label:"Status",value:"ERROR"})}),t.jsxs(Tr,{children:[t.jsx(O,{children:"Maintenance Event"}),t.jsx(Ar,{children:t.jsxs(Fh,{children:[t.jsx(be,{type:"error",children:"Event not found or failed to load."}),t.jsx(Y,{to:"/maintenance",children:t.jsx(T,{children:"Back to Maintenance"})})]})})]})]});const m=d(i),f=!!i.completedAt;return t.jsxs(kr,{children:[t.jsxs(ye,{children:[t.jsx(A,{label:"Event Status",value:m.toUpperCase()}),t.jsx(A,{label:"Boat",value:((g=(x=i.template)==null?void 0:x.boat)==null?void 0:g.name)||"Unknown"}),t.jsx(A,{label:"Due Date",value:new Date(i.dueDate).toLocaleDateString()}),f&&t.jsx(A,{label:"Completed",value:new Date(i.completedAt).toLocaleDateString()})]}),t.jsxs(Tr,{children:[t.jsx(O,{children:((y=i.template)==null?void 0:y.title)||"Maintenance Event"}),t.jsxs(Ch,{children:[t.jsx(Y,{to:"/maintenance",children:t.jsx(T,{children:"Back to List"})}),i.template&&t.jsx(Y,{to:`/maintenance/templates/${i.template.id}`,children:t.jsx(T,{children:"View Template"})}),!f&&t.jsx(T,{onClick:()=>n(!r),variant:"accent",children:r?"Cancel Completion":"Complete Event"})]}),t.jsxs(Ar,{children:[t.jsx("div",{style:{marginBottom:"20px"},children:t.jsx(kh,{status:m,children:m.toUpperCase()})}),((v=i.template)==null?void 0:v.description)&&t.jsxs(Lh,{children:[t.jsx("strong",{children:"Template Description:"}),t.jsx("br",{}),i.template.description]}),r&&!f&&t.jsxs(Th,{onSubmit:h,children:[t.jsx(Ft,{children:"Complete Maintenance Event"}),t.jsxs(Fr,{children:[t.jsx(Lr,{children:"Actual Cost ($):"}),t.jsx(oo,{type:"number",step:"0.01",value:o.actualCost,onChange:D=>s(B=>({...B,actualCost:D.target.value})),placeholder:"Enter actual cost"})]}),t.jsxs(Fr,{children:[t.jsx(Lr,{children:"Actual Time (minutes):"}),t.jsx(oo,{type:"number",value:o.actualTime,onChange:D=>s(B=>({...B,actualTime:D.target.value})),placeholder:"Enter time in minutes"})]}),t.jsxs(Fr,{children:[t.jsx(Lr,{children:"Notes:"}),t.jsx(Ah,{value:o.notes,onChange:D=>s(B=>({...B,notes:D.target.value})),placeholder:"Enter completion notes, observations, or issues encountered"})]}),t.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[t.jsx(T,{type:"button",onClick:()=>n(!1),children:"Cancel"}),t.jsx(T,{type:"submit",disabled:u.isPending,variant:"accent",children:u.isPending?"Completing...":"Complete Event"})]})]}),t.jsxs(Sh,{children:[t.jsxs(Er,{children:[t.jsx(Ft,{children:"Event Information"}),t.jsxs(ge,{children:[t.jsx(de,{children:"Title:"}),t.jsx(xe,{children:((w=i.template)==null?void 0:w.title)||"Unknown"})]}),t.jsxs(ge,{children:[t.jsx(de,{children:"Boat:"}),t.jsx(xe,{children:((k=(L=i.template)==null?void 0:L.boat)==null?void 0:k.name)||"Unknown"})]}),t.jsxs(ge,{children:[t.jsx(de,{children:"Component:"}),t.jsx(xe,{children:((M=i.template)==null?void 0:M.component)||"General"})]}),t.jsxs(ge,{children:[t.jsx(de,{children:"Due Date:"}),t.jsx(xe,{children:new Date(i.dueDate).toLocaleDateString()})]}),f&&t.jsxs(ge,{children:[t.jsx(de,{children:"Completed:"}),t.jsx(xe,{children:new Date(i.completedAt).toLocaleDateString()})]})]}),t.jsxs(Er,{children:[t.jsx(Ft,{children:"Template Information"}),t.jsxs(ge,{children:[t.jsx(de,{children:"Recurrence:"}),t.jsx(xe,{children:$((P=i.template)==null?void 0:P.recurrence)})]}),t.jsxs(ge,{children:[t.jsx(de,{children:"Est. Cost:"}),t.jsx(xe,{children:p((E=i.template)==null?void 0:E.estimatedCost)})]}),t.jsxs(ge,{children:[t.jsx(de,{children:"Est. Time:"}),t.jsx(xe,{children:b((S=i.template)==null?void 0:S.estimatedTime)})]})]}),f&&t.jsxs(Er,{children:[t.jsx(Ft,{children:"Completion Details"}),t.jsxs(ge,{children:[t.jsx(de,{children:"Actual Cost:"}),t.jsx(xe,{children:p(i.actualCost)})]}),t.jsxs(ge,{children:[t.jsx(de,{children:"Actual Time:"}),t.jsx(xe,{children:b(i.actualTime)})]}),i.notes&&t.jsxs("div",{style:{marginTop:"15px"},children:[t.jsx(de,{style:{display:"block",marginBottom:"5px"},children:"Notes:"}),t.jsx("div",{style:{backgroundColor:"#333",padding:"10px",borderRadius:"4px",whiteSpace:"pre-wrap"},children:i.notes})]})]})]})]})]})]})}const Dr=a.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,zr=a.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,Rr=a(z)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,zh=a.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Lt=a.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: ${e=>e.theme.colors.background}40;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.neonCarrot};
`,Dt=a.h3`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  margin: 0 0 10px 0;
  font-size: 16px;
  text-transform: uppercase;
`,ke=a.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
`,Te=a.label`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
  min-width: 150px;
  padding-top: 8px;
`,xt=a.input`
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
`,ao=a.select`
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
`,Rh=a.textarea`
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
`,so=a.input`
  margin-right: 8px;
`,Mh=a.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex: 1;
`,Ih=a.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding-top: 20px;
  border-top: 1px solid ${e=>e.theme.colors.primary.neonCarrot}40;
`,Nh=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: 18px;
`,Ph=a.div`
  padding: 20px;
  text-align: center;
`;function io(){const{id:e}=Re(),r=se(),n=!!e,[o,s]=C.useState({boatId:"",title:"",description:"",component:"",hasRecurrence:!1,recurrenceType:"days",recurrenceInterval:"30",estimatedCost:"",estimatedTime:"",isActive:!0}),{data:i=[]}=le(),{data:l,isLoading:c}=ca(e,{enabled:n}),u=ah(),d=sh();C.useEffect(()=>{var h,m,f,x,g;l&&n&&s({boatId:l.boatId,title:l.title,description:l.description||"",component:l.component||"",hasRecurrence:!!l.recurrence,recurrenceType:((h=l.recurrence)==null?void 0:h.type)||"days",recurrenceInterval:((f=(m=l.recurrence)==null?void 0:m.interval)==null?void 0:f.toString())||"30",estimatedCost:((x=l.estimatedCost)==null?void 0:x.toString())||"",estimatedTime:((g=l.estimatedTime)==null?void 0:g.toString())||"",isActive:l.isActive})},[l,n]);const p=async h=>{if(h.preventDefault(),!o.boatId||!o.title){alert("Please fill in all required fields (Boat and Title)");return}try{const m={boatId:o.boatId,title:o.title,description:o.description||void 0,component:o.component||void 0,estimatedCost:o.estimatedCost?parseFloat(o.estimatedCost):void 0,estimatedTime:o.estimatedTime?parseInt(o.estimatedTime):void 0};o.hasRecurrence&&(m.recurrence={type:o.recurrenceType,interval:parseInt(o.recurrenceInterval)}),n?(m.isActive=o.isActive,await d.mutateAsync({id:e,data:m})):await u.mutateAsync(m),r("/maintenance")}catch(m){console.error("Failed to save template:",m),alert("Failed to save maintenance template. Please try again.")}},b=(h,m)=>{s(f=>({...f,[h]:m}))};if(n&&c)return t.jsxs(Dr,{children:[t.jsx(ye,{children:t.jsx(A,{label:"Status",value:"LOADING"})}),t.jsxs(zr,{children:[t.jsx(O,{children:"Edit Maintenance Template"}),t.jsx(Rr,{children:t.jsx(Nh,{children:"Loading template..."})})]})]});if(n&&!l)return t.jsxs(Dr,{children:[t.jsx(ye,{children:t.jsx(A,{label:"Status",value:"ERROR"})}),t.jsxs(zr,{children:[t.jsx(O,{children:"Edit Maintenance Template"}),t.jsx(Rr,{children:t.jsxs(Ph,{children:[t.jsx(be,{type:"error",children:"Template not found."}),t.jsx(Y,{to:"/maintenance",children:t.jsx(T,{children:"Back to Maintenance"})})]})})]})]});const $=u.isPending||d.isPending;return t.jsxs(Dr,{children:[t.jsxs(ye,{children:[t.jsx(A,{label:"Mode",value:n?"EDIT":"CREATE"}),t.jsx(A,{label:"Boats Available",value:i.length.toString()}),n&&l&&t.jsx(A,{label:"Template Status",value:l.isActive?"ACTIVE":"INACTIVE"})]}),t.jsxs(zr,{children:[t.jsx(O,{children:n?"Edit Maintenance Template":"Create Maintenance Template"}),t.jsx(Rr,{children:t.jsxs(zh,{onSubmit:p,children:[t.jsxs(Lt,{children:[t.jsx(Dt,{children:"Basic Information"}),t.jsxs(ke,{children:[t.jsx(Te,{children:"Boat *"}),t.jsxs(ao,{value:o.boatId,onChange:h=>b("boatId",h.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Select a boat"}),i.map(h=>t.jsx("option",{value:h.id,children:h.name},h.id))]})]}),t.jsxs(ke,{children:[t.jsx(Te,{children:"Title *"}),t.jsx(xt,{type:"text",value:o.title,onChange:h=>b("title",h.target.value),placeholder:"e.g., Oil Change, Hull Cleaning, Engine Service",required:!0})]}),t.jsxs(ke,{children:[t.jsx(Te,{children:"Component"}),t.jsx(xt,{type:"text",value:o.component,onChange:h=>b("component",h.target.value),placeholder:"e.g., Engine, Hull, Electrical, Plumbing"})]}),t.jsxs(ke,{children:[t.jsx(Te,{children:"Description"}),t.jsx(Rh,{value:o.description,onChange:h=>b("description",h.target.value),placeholder:"Detailed description of the maintenance task, including any special instructions or requirements"})]})]}),t.jsxs(Lt,{children:[t.jsx(Dt,{children:"Schedule"}),t.jsxs(ke,{children:[t.jsx(Te,{children:"Recurring Task"}),t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx(so,{type:"checkbox",checked:o.hasRecurrence,onChange:h=>b("hasRecurrence",h.target.checked)}),t.jsx("span",{children:"This is a recurring maintenance task"})]})]}),o.hasRecurrence&&t.jsxs(ke,{children:[t.jsx(Te,{children:"Recurrence"}),t.jsxs(Mh,{children:[t.jsx("span",{children:"Every"}),t.jsx(xt,{type:"number",min:"1",value:o.recurrenceInterval,onChange:h=>b("recurrenceInterval",h.target.value),style:{width:"80px",flex:"none"}}),t.jsxs(ao,{value:o.recurrenceType,onChange:h=>b("recurrenceType",h.target.value),style:{flex:"none",minWidth:"120px"},children:[t.jsx("option",{value:"days",children:"Days"}),t.jsx("option",{value:"weeks",children:"Weeks"}),t.jsx("option",{value:"months",children:"Months"}),t.jsx("option",{value:"years",children:"Years"}),t.jsx("option",{value:"engine_hours",children:"Engine Hours"})]})]})]})]}),t.jsxs(Lt,{children:[t.jsx(Dt,{children:"Estimates"}),t.jsxs(ke,{children:[t.jsx(Te,{children:"Estimated Cost ($)"}),t.jsx(xt,{type:"number",step:"0.01",min:"0",value:o.estimatedCost,onChange:h=>b("estimatedCost",h.target.value),placeholder:"0.00"})]}),t.jsxs(ke,{children:[t.jsx(Te,{children:"Estimated Time (minutes)"}),t.jsx(xt,{type:"number",min:"0",value:o.estimatedTime,onChange:h=>b("estimatedTime",h.target.value),placeholder:"60"})]})]}),n&&t.jsxs(Lt,{children:[t.jsx(Dt,{children:"Status"}),t.jsxs(ke,{children:[t.jsx(Te,{children:"Template Status"}),t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx(so,{type:"checkbox",checked:o.isActive,onChange:h=>b("isActive",h.target.checked)}),t.jsx("span",{children:"Template is active (generates future events)"})]})]})]}),t.jsxs(Ih,{children:[t.jsx(Y,{to:"/maintenance",children:t.jsx(T,{type:"button",children:"Cancel"})}),t.jsx(T,{type:"submit",disabled:$,variant:"accent",children:$?"Saving...":n?"Update Template":"Create Template"})]})]})})]})]})}const ze={all:["locations"],lists:()=>[...ze.all,"list"],list:e=>[...ze.lists(),{filters:e}],details:()=>[...ze.all,"detail"],detail:e=>[...ze.details(),e],nearby:(e,r,n)=>[...ze.all,"nearby",{lat:e,lng:r,radius:n}]},Bh=e=>ee({queryKey:ze.list(e||{}),queryFn:()=>N.getMarkedLocations(e)}),Oh=()=>{const e=K();return _({mutationFn:r=>N.createMarkedLocation(r),onSuccess:()=>{e.invalidateQueries({queryKey:ze.lists()})}})},Uh=()=>{const e=K();return _({mutationFn:r=>N.deleteMarkedLocation(r),onSuccess:()=>{e.invalidateQueries({queryKey:ze.lists()})}})},qh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",Hh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg==",Wh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC";delete Qe.Icon.Default.prototype._getIconUrl;Qe.Icon.Default.mergeOptions({iconRetinaUrl:Hh,iconUrl:qh,shadowUrl:Wh});const Vh=a.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px); // Account for header and footer
  gap: ${e=>e.theme.spacing.md};
`,Kh=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.md};
`,Gh=a.div`
  flex: 1;
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  min-height: 600px;
`,Qh=a(z)`
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
`,_h=a(z)`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
`,Jh=a.div`
  max-height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Yh=a.div`
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
`,Zh=a.div`
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
`,Xh=a.div`
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
`,eu=e=>{const r={fishing:"#66FF66",marina:"#6688CC",anchorage:"#FFFF66",hazard:"#FF6666",other:"#CC99CC"};return new Qe.DivIcon({html:`<div style="
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
    ">${e.charAt(0).toUpperCase()}</div>`,className:"custom-marker",iconSize:[20,20],iconAnchor:[10,10]})},tu=({onMapClick:e})=>(Ea({click:r=>{e(r.latlng.lat,r.latlng.lng)}}),null),ru=()=>{const[e,r]=C.useState(!0),[n,o]=C.useState(!0),[s,i]=C.useState(""),[l,c]=C.useState(!1),[u,d]=C.useState({name:"",category:"other",notes:"",latitude:0,longitude:0}),[p,b]=C.useState(null),$=C.useRef(null),{data:h=[],isLoading:m}=Me(),{data:f=[],isLoading:x}=Bh(s?{category:s}:void 0),g=Oh(),y=Uh(),v=Ke.useMemo(()=>{if(h.length>0){const E=h.flatMap(S=>S.gpsPoints);if(E.length>0){const S=E.reduce((B,q)=>B+q.latitude,0)/E.length,D=E.reduce((B,q)=>B+q.longitude,0)/E.length;return[S,D]}}return[37.7749,-122.4194]},[h]),w=C.useCallback((E,S)=>{l&&d(D=>({...D,latitude:E,longitude:S}))},[l]),L=async()=>{if(!(!u.name||!u.latitude||!u.longitude))try{await g.mutateAsync({name:u.name,latitude:u.latitude,longitude:u.longitude,category:u.category,notes:u.notes||void 0}),d({name:"",category:"other",notes:"",latitude:0,longitude:0}),c(!1)}catch(E){console.error("Failed to create location:",E)}},k=async E=>{if(window.confirm("Are you sure you want to delete this location?"))try{await y.mutateAsync(E),b(null)}catch(S){console.error("Failed to delete location:",S)}},M=()=>e?h.map(E=>{var q,V,I;if(E.gpsPoints.length<2)return null;const S=E.gpsPoints.map(W=>[W.latitude,W.longitude]),D=S[0],B=S[S.length-1];return t.jsxs(Ke.Fragment,{children:[t.jsx($o,{positions:S,color:"#FF9966",weight:3,opacity:.7}),t.jsx(Le,{position:D,children:t.jsx(De,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"Trip Start"}),t.jsx("br",{}),new Date(E.startTime).toLocaleString(),t.jsx("br",{}),"Boat: ",E.boatId]})})}),t.jsx(Le,{position:B,children:t.jsx(De,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"Trip End"}),t.jsx("br",{}),new Date(E.endTime).toLocaleString(),t.jsx("br",{}),"Duration: ",Math.round((((q=E.statistics)==null?void 0:q.durationSeconds)||0)/60)," minutes",t.jsx("br",{}),"Distance: ",((((V=E.statistics)==null?void 0:V.distanceMeters)||0)/1e3).toFixed(2)," km"]})})}),(((I=E.statistics)==null?void 0:I.stopPoints)||[]).map((W,je)=>t.jsx(Le,{position:[W.latitude,W.longitude],icon:new Qe.DivIcon({html:`<div style="
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
                ">S</div>`,className:"stop-marker",iconSize:[16,16],iconAnchor:[8,8]}),children:t.jsx(De,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"Stop Point"}),t.jsx("br",{}),"Duration: ",Math.round(W.durationSeconds/60)," minutes",t.jsx("br",{}),"From: ",new Date(W.startTime).toLocaleString(),t.jsx("br",{}),"To: ",new Date(W.endTime).toLocaleString()]})})},`${E.id}-stop-${je}`))]},E.id)}):null,P=()=>n?f.map(E=>t.jsx(Le,{position:[E.latitude,E.longitude],icon:eu(E.category),eventHandlers:{click:()=>b(E)},children:t.jsx(De,{children:t.jsxs("div",{children:[t.jsx("strong",{children:E.name}),t.jsx("br",{}),"Category: ",E.category,t.jsx("br",{}),E.notes&&t.jsxs(t.Fragment,{children:["Notes: ",E.notes,t.jsx("br",{})]}),E.tags.length>0&&t.jsxs(t.Fragment,{children:["Tags: ",E.tags.join(", "),t.jsx("br",{})]}),t.jsxs("small",{children:["Created: ",new Date(E.createdAt).toLocaleDateString()]})]})})},E.id)):null;return t.jsxs(Vh,{children:[t.jsx(O,{children:"Navigation Chart"}),t.jsx(Kh,{children:t.jsxs(Xh,{children:[t.jsx("label",{children:"Display:"}),t.jsx(T,{variant:e?"primary":"secondary",size:"sm",onClick:()=>r(!e),children:"Trip Routes"}),t.jsx(T,{variant:n?"primary":"secondary",size:"sm",onClick:()=>o(!n),children:"Locations"}),t.jsx("label",{children:"Category:"}),t.jsxs("select",{value:s,onChange:E=>i(E.target.value),children:[t.jsx("option",{value:"",children:"All Categories"}),t.jsx("option",{value:"fishing",children:"Fishing"}),t.jsx("option",{value:"marina",children:"Marina"}),t.jsx("option",{value:"anchorage",children:"Anchorage"}),t.jsx("option",{value:"hazard",children:"Hazard"}),t.jsx("option",{value:"other",children:"Other"})]})]})}),t.jsxs(Gh,{children:[t.jsx(Qh,{title:"Chart Display",padding:"none",children:t.jsxs(jo,{center:v,zoom:10,style:{height:"100%",width:"100%"},ref:$,children:[t.jsx(bo,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.jsx(tu,{onMapClick:w}),M(),P(),l&&u.latitude&&u.longitude&&t.jsx(Le,{position:[u.latitude,u.longitude],children:t.jsx(De,{children:t.jsxs("div",{children:[t.jsx("strong",{children:"New Location"}),t.jsx("br",{}),'Click "Save Location" to confirm']})})})]})}),t.jsx(_h,{title:"Location Manager",variant:"secondary",children:l?t.jsxs(Zh,{children:[t.jsx("h3",{children:"Add New Location"}),t.jsx("p",{children:"Click on the map to set coordinates, then fill in the details below."}),t.jsx("input",{type:"text",placeholder:"Location Name",value:u.name,onChange:E=>d(S=>({...S,name:E.target.value}))}),t.jsxs("select",{value:u.category,onChange:E=>d(S=>({...S,category:E.target.value})),children:[t.jsx("option",{value:"fishing",children:"Fishing Spot"}),t.jsx("option",{value:"marina",children:"Marina"}),t.jsx("option",{value:"anchorage",children:"Anchorage"}),t.jsx("option",{value:"hazard",children:"Hazard"}),t.jsx("option",{value:"other",children:"Other"})]}),t.jsx("textarea",{placeholder:"Notes (optional)",value:u.notes,onChange:E=>d(S=>({...S,notes:E.target.value}))}),u.latitude&&u.longitude&&t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#FF9966",marginBottom:"8px"},children:"Coordinates"}),t.jsxs("div",{style:{padding:"12px",backgroundColor:"#222222",borderRadius:"4px",border:"1px solid #333333",fontFamily:"monospace"},children:["Lat: ",u.latitude.toFixed(6),t.jsx("br",{}),"Lng: ",u.longitude.toFixed(6)]})]}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(T,{onClick:L,disabled:!u.name||!u.latitude||!u.longitude||g.isPending,children:"Save Location"}),t.jsx(T,{variant:"secondary",onClick:()=>{c(!1),d({name:"",category:"other",notes:"",latitude:0,longitude:0})},children:"Cancel"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx(T,{onClick:()=>c(!0),disabled:g.isPending,children:"Add New Location"}),p&&t.jsxs("div",{children:[t.jsx("h4",{style:{color:"#FF9966",marginBottom:"8px"},children:"Selected Location"}),t.jsxs("div",{style:{padding:"12px",backgroundColor:"#222222",borderRadius:"4px",border:"1px solid #333333"},children:[t.jsx("strong",{children:p.name}),t.jsx("br",{}),"Category: ",p.category,t.jsx("br",{}),"Coordinates: ",p.latitude.toFixed(6),", ",p.longitude.toFixed(6),t.jsx("br",{}),p.notes&&t.jsxs(t.Fragment,{children:["Notes: ",p.notes,t.jsx("br",{})]}),p.tags.length>0&&t.jsxs(t.Fragment,{children:["Tags: ",p.tags.join(", "),t.jsx("br",{})]}),t.jsx("div",{style:{marginTop:"8px"},children:t.jsx(T,{size:"sm",variant:"accent",onClick:()=>k(p.id),disabled:y.isPending,children:"Delete"})})]})]}),t.jsx(Jh,{children:f.map(E=>t.jsxs(Yh,{children:[t.jsx("div",{className:"location-name",children:E.name}),t.jsx("div",{className:"location-category",children:E.category}),E.notes&&t.jsx("div",{className:"location-notes",children:E.notes}),t.jsx("div",{className:"location-actions",children:t.jsx(T,{size:"sm",onClick:()=>{b(E),$.current&&$.current.setView([E.latitude,E.longitude],15)},children:"View"})})]},E.id))})]})})]}),(m||x)&&t.jsx(A,{label:"System Status",value:"Loading chart data...",valueColor:"anakiwa"})]})},zt=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,lo=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,nu=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${e=>e.theme.spacing.lg};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,ou=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,au=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`,su=a.div`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,iu=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xl};
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.lg};
`,lu=()=>{const{data:e,isLoading:r,error:n}=Zo();if(r)return t.jsxs(zt,{children:[t.jsx(O,{children:"Captain's License Progress"}),t.jsx(au,{children:t.jsx(A,{label:"System Status",value:"Loading Progress Data...",valueColor:"neonCarrot",size:"lg"})})]});if(n)return t.jsxs(zt,{children:[t.jsx(O,{children:"Captain's License Progress"}),t.jsx(su,{children:t.jsx(be,{type:"error",children:"Error loading license progress data. Please check your connection and try again."})})]});if(!e)return t.jsxs(zt,{children:[t.jsx(O,{children:"Captain's License Progress"}),t.jsx(z,{title:"No Data",variant:"secondary",children:t.jsx(iu,{children:"No license progress data available yet. Log some trips to start tracking."})})]});const{totalDays:o,daysInLast3Years:s,totalHours:i,daysRemaining360:l,daysRemaining90In3Years:c,estimatedCompletion360:u}=e,d=o>=360,p=s>=90,b=d&&p;return t.jsxs(zt,{children:[t.jsx(O,{children:"Captain's License Progress"}),b&&t.jsx(be,{type:"success",children:"Congratulations! You have met all requirements for OUPV (6-pack) Captain's License eligibility."}),t.jsx(z,{title:"Current Sea Time Statistics",variant:"primary",children:t.jsxs(lo,{children:[t.jsx(A,{label:"Total Sea Time Days",value:o,valueColor:"neonCarrot",size:"lg"}),t.jsx(A,{label:"Days (Last 3 Years)",value:s,valueColor:"lilac",size:"lg"}),t.jsx(A,{label:"Total Hours",value:i.toFixed(1),unit:"hrs",valueColor:"anakiwa",size:"lg"}),t.jsx(A,{label:"Average Hours/Day",value:o>0?(i/o).toFixed(1):"0.0",unit:"hrs",valueColor:"success",size:"lg"})]})}),t.jsxs(nu,{children:[t.jsx(z,{title:"360-Day Total Requirement",variant:"primary",children:t.jsx(Ot,{title:"Total Sea Time Days",current:o,target:360,unit:"days",color:"neonCarrot",size:"lg",showPercentage:!0})}),t.jsx(z,{title:"90-Day Recent Requirement",variant:"secondary",children:t.jsx(Ot,{title:"Days in Last 3 Years",current:s,target:90,unit:"days",color:"lilac",size:"lg",showPercentage:!0})})]}),t.jsx(z,{title:"Completion Estimates",variant:"accent",children:t.jsxs(ou,{children:[t.jsx(Zt,{title:"360-Day Goal",estimatedDate:d?void 0:u??void 0,daysRemaining:d?void 0:l,isComplete:d,color:"neonCarrot",size:"md"}),t.jsx(Zt,{title:"90-Day (3 Years) Goal",daysRemaining:p?void 0:c,isComplete:p,color:"lilac",size:"md"}),!b&&t.jsx(Zt,{title:"License Eligibility",estimatedDate:u??void 0,isComplete:b,color:"anakiwa",size:"md"})]})}),t.jsx(z,{title:"OUPV (6-Pack) License Requirements",variant:"secondary",children:t.jsxs(lo,{children:[t.jsx(A,{label:"Total Sea Time",value:"360 Days",valueColor:"neonCarrot",size:"md"}),t.jsx(A,{label:"Recent Experience",value:"90 Days in 3 Years",valueColor:"lilac",size:"md"}),t.jsx(A,{label:"Minimum Per Day",value:"4 Hours",valueColor:"anakiwa",size:"md"}),t.jsx(A,{label:"Additional Requirements",value:"Medical, Drug Test, Course",valueColor:"success",size:"md"})]})})]})},Mr=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,co=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,cu=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${e=>e.theme.spacing.lg};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,du=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
  flex-wrap: wrap;
`,mu=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`,pu=a.div`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,mo=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Rt=a.div`
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
`,J=a.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  
  &.text {
    font-family: ${e=>e.theme.typography.fontFamily.primary};
  }
  
  &.status {
    font-weight: ${e=>e.theme.typography.fontWeight.bold};
    text-transform: uppercase;
  }
`,hu=()=>{const[e,r]=Ke.useState(""),{data:n,isLoading:o}=le(),{data:s,isLoading:i,error:l}=la(e||void 0),{data:c,isLoading:u,error:d}=Xr(e||void 0),{data:p,isLoading:b,error:$}=da(e||void 0),h=o||i||u||b,m=l||d||$,f=C.useMemo(()=>{if(!s||!c||!p)return{totalTemplates:0,activeTemplates:0,upcomingCount:0,overdueCount:0,completedThisMonth:0,totalCostThisMonth:0,averageCost:0,completionRate:0};const g=new Date,y=new Date(g.getFullYear(),g.getMonth(),1),v=c.filter(S=>new Date(S.dueDate)<g).length,w=p.filter(S=>S.completedAt&&new Date(S.completedAt)>=y),L=w.reduce((S,D)=>S+(D.actualCost||0),0),k=p.filter(S=>S.actualCost&&S.actualCost>0),M=k.length>0?k.reduce((S,D)=>S+(D.actualCost||0),0)/k.length:0,P=c.length+p.length,E=P>0?p.length/P*100:0;return{totalTemplates:s.length,activeTemplates:s.filter(S=>S.isActive).length,upcomingCount:c.length,overdueCount:v,completedThisMonth:w.length,totalCostThisMonth:L,averageCost:M,completionRate:E}},[s,c,p]),x=C.useMemo(()=>{if(!c)return[];const g=new Date,y=new Date(g.getTime()+7*24*60*60*1e3);return c.map(v=>{const w=new Date(v.dueDate);let L="upcoming",k="Upcoming";return w<g?(L="overdue",k="Overdue"):w<=y&&(L="due-soon",k="Due Soon"),{...v,status:L,statusText:k,daysUntilDue:Math.ceil((w.getTime()-g.getTime())/(1e3*60*60*24))}}).sort((v,w)=>new Date(v.dueDate).getTime()-new Date(w.dueDate).getTime())},[c]);return h?t.jsxs(Mr,{children:[t.jsx(O,{children:"Maintenance Reports"}),t.jsx(mu,{children:t.jsx(A,{label:"System Status",value:"Loading Maintenance Data...",valueColor:"neonCarrot",size:"lg"})})]}):m?t.jsxs(Mr,{children:[t.jsx(O,{children:"Maintenance Reports"}),t.jsx(pu,{children:t.jsx(be,{type:"error",children:"Error loading maintenance data. Please check your connection and try again."})})]}):t.jsxs(Mr,{children:[t.jsx(O,{children:"Maintenance Reports"}),t.jsxs(du,{children:[t.jsx(T,{variant:e===""?"primary":"secondary",onClick:()=>r(""),children:"All Boats"}),n==null?void 0:n.map(g=>t.jsx(T,{variant:e===g.id?"primary":"secondary",onClick:()=>r(g.id),children:g.name},g.id))]}),t.jsx(z,{title:"Maintenance Overview",variant:"primary",children:t.jsxs(co,{children:[t.jsx(A,{label:"Active Templates",value:f.activeTemplates,valueColor:"neonCarrot",size:"lg"}),t.jsx(A,{label:"Upcoming Tasks",value:f.upcomingCount,valueColor:"anakiwa",size:"lg"}),t.jsx(A,{label:"Overdue Tasks",value:f.overdueCount,valueColor:f.overdueCount>0?"neonCarrot":"success",size:"lg"}),t.jsx(A,{label:"Completed This Month",value:f.completedThisMonth,valueColor:"success",size:"lg"})]})}),t.jsx(z,{title:"Cost Analysis",variant:"secondary",children:t.jsxs(co,{children:[t.jsx(A,{label:"Cost This Month",value:`$${f.totalCostThisMonth.toFixed(2)}`,valueColor:"lilac",size:"lg"}),t.jsx(A,{label:"Average Cost Per Task",value:`$${f.averageCost.toFixed(2)}`,valueColor:"lilac",size:"lg"}),t.jsx(A,{label:"Completion Rate",value:`${f.completionRate.toFixed(1)}%`,valueColor:"anakiwa",size:"lg"})]})}),t.jsxs(cu,{children:[t.jsx(z,{title:"Template Status",variant:"primary",children:t.jsx(Ot,{title:"Active Templates",current:f.activeTemplates,target:f.totalTemplates,unit:"templates",color:"neonCarrot",size:"md",showPercentage:!0})}),t.jsx(z,{title:"Task Completion",variant:"secondary",children:t.jsx(Ot,{title:"Completion Rate",current:f.completionRate,target:100,unit:"%",color:"lilac",size:"md",showPercentage:!1})})]}),x.length>0&&t.jsx(z,{title:"Upcoming Maintenance Tasks",variant:"accent",children:t.jsxs(mo,{children:[t.jsxs(Rt,{className:"header",children:[t.jsx(J,{children:"Task"}),t.jsx(J,{children:"Boat"}),t.jsx(J,{children:"Due Date"}),t.jsx(J,{children:"Days Until Due"}),t.jsx(J,{children:"Status"})]}),x.map(g=>{var y,v,w,L;return t.jsxs(Rt,{className:g.status,children:[t.jsxs(J,{className:"text",children:[((y=g.template)==null?void 0:y.title)||"Unknown Task",((v=g.template)==null?void 0:v.component)&&t.jsx("div",{style:{fontSize:"0.8em",color:"#999"},children:g.template.component})]}),t.jsx(J,{className:"text",children:((L=(w=g.template)==null?void 0:w.boat)==null?void 0:L.name)||"Unknown"}),t.jsx(J,{children:new Date(g.dueDate).toLocaleDateString()}),t.jsx(J,{children:g.daysUntilDue>0?`${g.daysUntilDue} days`:`${Math.abs(g.daysUntilDue)} days ago`}),t.jsx(J,{className:"status",children:g.statusText})]},g.id)})]})}),p&&p.length>0&&t.jsx(z,{title:"Recent Completions",variant:"secondary",children:t.jsxs(mo,{children:[t.jsxs(Rt,{className:"header",children:[t.jsx(J,{children:"Task"}),t.jsx(J,{children:"Boat"}),t.jsx(J,{children:"Completed"}),t.jsx(J,{children:"Cost"}),t.jsx(J,{children:"Time"})]}),p.slice(0,10).map(g=>{var y,v,w;return t.jsxs(Rt,{children:[t.jsx(J,{className:"text",children:((y=g.template)==null?void 0:y.title)||"Unknown Task"}),t.jsx(J,{className:"text",children:((w=(v=g.template)==null?void 0:v.boat)==null?void 0:w.name)||"Unknown"}),t.jsx(J,{children:g.completedAt?new Date(g.completedAt).toLocaleDateString():"N/A"}),t.jsx(J,{children:g.actualCost?`$${g.actualCost.toFixed(2)}`:"N/A"}),t.jsx(J,{children:g.actualTime?`${g.actualTime}h`:"N/A"})]},g.id)})]})})]})},uu=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,gu=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${e=>e.theme.spacing.lg};
`,po=a.div`
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
`,ho=a.h2`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;

  .secondary & {
    color: ${e=>e.theme.colors.primary.lilac};
  }
`,uo=a.p`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  margin: 0;
`,go=a.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,Fe=a.li`
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
`,xu=()=>{const e=se();return t.jsxs(uu,{children:[t.jsx(O,{children:"System Reports"}),t.jsx(z,{title:"Available Reports",variant:"primary",children:t.jsxs(gu,{children:[t.jsxs(po,{onClick:()=>e("/reports/license"),children:[t.jsx(ho,{children:"Captain's License Progress"}),t.jsx(uo,{children:"Track your progress toward OUPV (6-pack) Captain's License requirements"}),t.jsxs(go,{children:[t.jsx(Fe,{children:"360-day total sea time tracking"}),t.jsx(Fe,{children:"90-day recent experience monitoring"}),t.jsx(Fe,{children:"Progress charts and completion estimates"}),t.jsx(Fe,{children:"Detailed statistics and requirements"})]})]}),t.jsxs(po,{className:"secondary",onClick:()=>e("/reports/maintenance"),children:[t.jsx(ho,{children:"Maintenance Reports"}),t.jsx(uo,{children:"Comprehensive maintenance tracking and cost analysis for all vessels"}),t.jsxs(go,{children:[t.jsx(Fe,{children:"Upcoming and overdue task tracking"}),t.jsx(Fe,{children:"Cost analysis and completion rates"}),t.jsx(Fe,{children:"Template status and activity monitoring"}),t.jsx(Fe,{children:"Recent completion history"})]})]})]})}),t.jsx(z,{title:"Quick Access",variant:"accent",children:t.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[t.jsx(T,{variant:"primary",onClick:()=>e("/reports/license"),children:"License Progress"}),t.jsx(T,{variant:"secondary",onClick:()=>e("/reports/maintenance"),children:"Maintenance Reports"})]})})]})},fu=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,yu=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ir=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
  margin-bottom: ${e=>e.theme.spacing.md};
`,Nr=a.label`
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,Pr=a.input`
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
`,bu=a.div`
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
`,$u=a.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
`,Br=a.div`
  color: ${e=>e.theme.colors.primary.anakiwa};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Or=a.div`
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,ju=()=>{const{user:e,logout:r}=Zr(),n=se(),[o,s]=C.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[i,l]=C.useState(!1),[c,u]=C.useState(null),d=$=>h=>{s(m=>({...m,[$]:h.target.value})),c&&u(null)},p=async $=>{if($.preventDefault(),!o.currentPassword||!o.newPassword||!o.confirmPassword){u({type:"error",text:"All password fields are required"});return}if(o.newPassword!==o.confirmPassword){u({type:"error",text:"New passwords do not match"});return}if(o.newPassword.length<8){u({type:"error",text:"New password must be at least 8 characters"});return}l(!0),u({type:"info",text:"Changing password..."});try{await N.changePassword(o.currentPassword,o.newPassword),u({type:"success",text:"Password changed successfully. You will be logged out."}),s({currentPassword:"",newPassword:"",confirmPassword:""}),setTimeout(()=>{r()},2e3)}catch(h){u({type:"error",text:h.message||"Failed to change password"})}finally{l(!1)}},b=async()=>{window.confirm("Are you sure you want to log out?")&&await r()};return t.jsxs(fu,{children:[t.jsx(O,{children:"System Settings"}),t.jsxs(yu,{children:[t.jsxs(z,{title:"User Account",children:[t.jsxs($u,{children:[t.jsx(Br,{children:"Username:"}),t.jsx(Or,{children:(e==null?void 0:e.username)||"Unknown"}),t.jsx(Br,{children:"Account Created:"}),t.jsx(Or,{children:e!=null&&e.createdAt?new Date(e.createdAt).toLocaleDateString():"Unknown"}),t.jsx(Br,{children:"Last Updated:"}),t.jsx(Or,{children:e!=null&&e.updatedAt?new Date(e.updatedAt).toLocaleDateString():"Unknown"})]}),t.jsx("div",{style:{marginTop:"20px"},children:t.jsx(T,{onClick:b,variant:"secondary",children:"Logout"})})]}),t.jsx(z,{title:"Change Password",children:t.jsxs("form",{onSubmit:p,children:[t.jsxs(Ir,{children:[t.jsx(Nr,{htmlFor:"currentPassword",children:"Current Password"}),t.jsx(Pr,{id:"currentPassword",type:"password",value:o.currentPassword,onChange:d("currentPassword"),disabled:i,autoComplete:"current-password"})]}),t.jsxs(Ir,{children:[t.jsx(Nr,{htmlFor:"newPassword",children:"New Password"}),t.jsx(Pr,{id:"newPassword",type:"password",value:o.newPassword,onChange:d("newPassword"),disabled:i,autoComplete:"new-password",minLength:8})]}),t.jsxs(Ir,{children:[t.jsx(Nr,{htmlFor:"confirmPassword",children:"Confirm New Password"}),t.jsx(Pr,{id:"confirmPassword",type:"password",value:o.confirmPassword,onChange:d("confirmPassword"),disabled:i,autoComplete:"new-password",minLength:8})]}),c&&t.jsx(bu,{$type:c.type,children:c.text}),t.jsx("div",{style:{marginTop:"20px"},children:t.jsx(T,{type:"submit",disabled:i,children:i?"Changing Password...":"Change Password"})})]})})]}),t.jsxs(z,{title:"System Management",children:[t.jsx("div",{style:{display:"flex",gap:"10px",marginBottom:"20px"},children:t.jsx(T,{onClick:()=>n("/settings/backup"),variant:"secondary",children:"Backup Manager"})}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[t.jsx(A,{label:"Interface Version",value:"LCARS v1.0",valueColor:"anakiwa"}),t.jsx(A,{label:"System Status",value:"Operational",valueColor:"success"}),t.jsx(A,{label:"API Endpoint",value:"/api/v1",valueColor:"anakiwa"}),t.jsx(A,{label:"Authentication",value:"JWT Token-based",valueColor:"lilac"})]})]})]})},vu=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,wu=a.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${e=>e.theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Cu=a.div`
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
`,Su=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,ku=a.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 1px solid ${e=>e.theme.colors.primary.anakiwa};
  padding: ${e=>e.theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    border-color: ${e=>e.theme.colors.primary.neonCarrot};
  }
`,Tu=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,Au=a.div`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: bold;
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,Eu=a.div`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,Fu=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
`,Lu=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xl};
  color: ${e=>e.theme.colors.text.secondary};
  font-style: italic;
`,Du=()=>{const[e,r]=C.useState([]),[n,o]=C.useState(!0),[s,i]=C.useState(!1),[l,c]=C.useState(null);C.useEffect(()=>{u()},[]);const u=async()=>{try{o(!0);const h=await N.getBackups();r(h)}catch(h){c({type:"error",text:h.message||"Failed to load backups"})}finally{o(!1)}},d=async()=>{if(!s){i(!0),c({type:"info",text:"Creating backup... This may take a few minutes."});try{const h=await N.createBackup();c({type:"success",text:`Backup created successfully: ${h.filename}`}),await u()}catch(h){c({type:"error",text:h.message||"Failed to create backup"})}finally{i(!1)}}},p=async h=>{try{c({type:"info",text:`Downloading ${h.filename}...`});const m=await N.downloadBackup(h.id),f=window.URL.createObjectURL(m),x=document.createElement("a");x.href=f,x.download=h.filename,document.body.appendChild(x),x.click(),document.body.removeChild(x),window.URL.revokeObjectURL(f),c({type:"success",text:`Download started: ${h.filename}`})}catch(m){c({type:"error",text:m.message||"Failed to download backup"})}},b=h=>{if(h===0)return"0 Bytes";const m=1024,f=["Bytes","KB","MB","GB"],x=Math.floor(Math.log(h)/Math.log(m));return parseFloat((h/Math.pow(m,x)).toFixed(2))+" "+f[x]},$=h=>new Date(h).toLocaleString();return t.jsxs(vu,{children:[t.jsx(O,{children:"Database Backup Manager"}),l&&t.jsx(Cu,{$type:l.type,children:l.text}),t.jsxs(wu,{children:[t.jsxs(z,{title:"Backup Operations",children:[t.jsxs("div",{style:{marginBottom:"20px"},children:[t.jsx("div",{style:{width:"100%",marginBottom:"10px"},children:t.jsx(T,{onClick:d,disabled:s,children:s?"Creating Backup...":"Create Manual Backup"})}),t.jsx("div",{style:{width:"100%"},children:t.jsx(T,{onClick:u,disabled:n,variant:"secondary",children:n?"Refreshing...":"Refresh List"})})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[t.jsx(A,{label:"Total Backups",value:e.length.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"Total Size",value:b(e.reduce((h,m)=>h+m.size,0)),valueColor:"lilac"}),t.jsx(A,{label:"Latest Backup",value:e.length>0?$(e[0].createdAt):"None",valueColor:"neonCarrot"})]}),t.jsxs("div",{style:{marginTop:"20px",padding:"10px",background:"rgba(255, 153, 102, 0.1)",border:"1px solid #FF9966"},children:[t.jsx("strong",{style:{color:"#FF9966"},children:"Important:"}),t.jsxs("ul",{style:{margin:"10px 0",paddingLeft:"20px",color:"#CCCCCC"},children:[t.jsx("li",{children:"Backups include both database records and uploaded photos"}),t.jsx("li",{children:"Large backups may take several minutes to create"}),t.jsx("li",{children:"Store backups in a secure location outside the system"}),t.jsx("li",{children:"Test backup restoration procedures regularly"})]})]})]}),t.jsx(z,{title:"Available Backups",children:n?t.jsx("div",{style:{textAlign:"center",padding:"40px"},children:t.jsx("div",{style:{color:"#6688CC"},children:"Loading backups..."})}):e.length===0?t.jsx(Lu,{children:"No backups available. Create your first backup to get started."}):t.jsx(Su,{children:e.map(h=>t.jsxs(ku,{children:[t.jsxs(Tu,{children:[t.jsx(Au,{children:h.filename}),t.jsxs(Eu,{children:[t.jsxs("span",{children:["Created: ",$(h.createdAt)]}),t.jsxs("span",{children:["Size: ",b(h.size)]})]})]}),t.jsx(Fu,{children:t.jsx(T,{onClick:()=>p(h),variant:"secondary",size:"sm",children:"Download"})})]},h.id))})})]})]})},zu=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
`,Ru=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Mu=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
`,Iu=a.h2`
  color: ${e=>e.theme.colors.primary.neonCarrot};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  min-width: 200px;
  text-align: center;
`,Nu=a.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: ${e=>e.theme.colors.primary.anakiwa};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
`,Pu=a.div`
  background-color: ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  text-align: center;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Bu=a.div`
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
`,Ou=a.div`
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.$isToday?e.theme.colors.primary.neonCarrot:e.theme.colors.text.primary};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,Uu=a.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`,xo=a.div`
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
`,qu=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Hu=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,fo=a.div`
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
`,Wu=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Vu=["January","February","March","April","May","June","July","August","September","October","November","December"],Ku=()=>{const[e,r]=C.useState(new Date),[n,o]=C.useState([]),{data:s,isLoading:i}=Me(),{data:l,isLoading:c}=Xr();C.useEffect(()=>{const g=[];s&&s.forEach(y=>{var v;g.push({id:`trip-${y.id}`,title:`Trip: ${((v=y.boat)==null?void 0:v.name)||"Unknown Boat"}`,date:new Date(y.startTime),type:"trip",data:y})}),l&&l.forEach(y=>{var v;g.push({id:`maintenance-${y.id}`,title:`Maintenance: ${((v=y.template)==null?void 0:v.title)||"Unknown Task"}`,date:new Date(y.dueDate),type:"maintenance",data:y})}),o(g)},[s,l]);const u=g=>{r(y=>{const v=new Date(y);return g==="prev"?v.setMonth(y.getMonth()-1):v.setMonth(y.getMonth()+1),v})},d=()=>{r(new Date)},p=g=>{const y=g.getFullYear(),v=g.getMonth(),w=new Date(y,v,1),k=new Date(y,v+1,0).getDate(),M=w.getDay(),P=[];for(let S=M-1;S>=0;S--){const D=new Date(y,v,-S);P.push(D)}for(let S=1;S<=k;S++)P.push(new Date(y,v,S));const E=42-P.length;for(let S=1;S<=E;S++)P.push(new Date(y,v+1,S));return P},b=g=>n.filter(y=>new Date(y.date).toDateString()===g.toDateString()),$=g=>{const y=new Date;return g.toDateString()===y.toDateString()},h=g=>g.getMonth()===e.getMonth(),m=p(e),f=(s==null?void 0:s.filter(g=>{const y=new Date(g.startTime);return y.getMonth()===e.getMonth()&&y.getFullYear()===e.getFullYear()}))||[],x=(l==null?void 0:l.filter(g=>{const y=new Date(g.dueDate);return y.getMonth()===e.getMonth()&&y.getFullYear()===e.getFullYear()}))||[];return t.jsxs(zu,{children:[t.jsx(O,{children:"Mission Calendar"}),t.jsxs(qu,{children:[t.jsx(A,{label:"Current Month Trips",value:f.length.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"Upcoming Maintenance",value:x.length.toString(),valueColor:"lilac"}),t.jsx(A,{label:"Total Events",value:(f.length+x.length).toString(),valueColor:"neonCarrot"})]}),t.jsxs(z,{title:"Calendar View",children:[t.jsxs(Ru,{children:[t.jsxs(Mu,{children:[t.jsx(T,{onClick:()=>u("prev"),variant:"secondary",size:"sm",children:"← Previous"}),t.jsxs(Iu,{children:[Vu[e.getMonth()]," ",e.getFullYear()]}),t.jsx(T,{onClick:()=>u("next"),variant:"secondary",size:"sm",children:"Next →"})]}),t.jsx(T,{onClick:d,size:"sm",children:"Today"})]}),t.jsxs(Hu,{children:[t.jsx(fo,{$color:"#6688CC",children:"Trips"}),t.jsx(fo,{$color:"#CC99CC",children:"Maintenance"})]}),t.jsxs(Nu,{children:[Wu.map(g=>t.jsx(Pu,{children:g},g)),m.map((g,y)=>{const v=b(g);return t.jsxs(Bu,{$isCurrentMonth:h(g),$isToday:$(g),$hasEvents:v.length>0,children:[t.jsx(Ou,{$isToday:$(g),children:g.getDate()}),t.jsxs(Uu,{children:[v.slice(0,3).map(w=>t.jsx(xo,{$type:w.type,title:w.title,children:w.title},w.id)),v.length>3&&t.jsxs(xo,{$type:"trip",children:["+",v.length-3," more"]})]})]},y)})]}),(i||c)&&t.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#6688CC"},children:"Loading calendar data..."})]})]})},Gu=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
`,Qu=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
  flex-wrap: wrap;
`,_u=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.md};
`,Ju=a.div`
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
`,Yu=a.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`,Zu=a.div`
  padding: ${e=>e.theme.spacing.sm};
`,Xu=a.div`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  margin-bottom: ${e=>e.theme.spacing.xs};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,eg=a.div`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,tg=a.span`
  background: ${e=>e.theme.colors.primary.anakiwa};
  color: ${e=>e.theme.colors.text.primary};
  padding: 2px 6px;
  border-radius: 2px;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
`,rg=a.div`
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
`,ng=a.div`
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
`,og=a.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border: 2px solid ${e=>e.theme.colors.primary.neonCarrot};
`,ag=a.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.anakiwa};
  padding: ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  text-align: center;
  max-width: 500px;
`,sg=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,ig=a.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xl};
  color: ${e=>e.theme.colors.text.secondary};
  font-style: italic;
`,lg=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,cg=()=>{const[e,r]=C.useState([]),[n,o]=C.useState([]),[s,i]=C.useState("all"),[l,c]=C.useState(null),[u,d]=C.useState(!0),{data:p,isLoading:b}=Me();C.useEffect(()=>{const g=[];p&&p.forEach(y=>{y.photos&&y.photos.forEach(v=>{var w;g.push({...v,contextType:"trip",contextTitle:`Trip: ${((w=y.boat)==null?void 0:w.name)||"Unknown Boat"}`,contextDate:new Date(y.startTime).toLocaleDateString()})})}),g.sort((y,v)=>new Date(v.createdAt).getTime()-new Date(y.createdAt).getTime()),r(g),d(b)},[p,b]),C.useEffect(()=>{let g=e;s==="trips"&&(g=e.filter(y=>y.contextType==="trip")),o(g)},[e,s]);const $=g=>{c(g)},h=()=>{c(null)},m=g=>{if(!l)return;const y=n.findIndex(w=>w.id===l.id);let v=y;g==="prev"?v=y>0?y-1:n.length-1:v=y<n.length-1?y+1:0,c(n[v])},f=g=>{if(g===0)return"0 Bytes";const y=1024,v=["Bytes","KB","MB","GB"],w=Math.floor(Math.log(g)/Math.log(y));return parseFloat((g/Math.pow(y,w)).toFixed(2))+" "+v[w]},x=e.filter(g=>g.contextType==="trip");return t.jsxs(Gu,{children:[t.jsx(O,{children:"Photo Gallery"}),t.jsxs(lg,{children:[t.jsx(A,{label:"Total Photos",value:e.length.toString(),valueColor:"neonCarrot"}),t.jsx(A,{label:"Trip Photos",value:x.length.toString(),valueColor:"anakiwa"}),t.jsx(A,{label:"Maintenance Photos",value:"0",valueColor:"lilac"}),t.jsx(A,{label:"Total Size",value:f(e.reduce((g,y)=>g+(y.sizeBytes||0),0)),valueColor:"anakiwa"})]}),t.jsxs(z,{title:"Photo Collection",children:[t.jsxs(Qu,{children:[t.jsxs(T,{onClick:()=>i("all"),variant:s==="all"?"primary":"secondary",size:"sm",children:["All Photos (",e.length,")"]}),t.jsxs(T,{onClick:()=>i("trips"),variant:s==="trips"?"primary":"secondary",size:"sm",children:["Trip Photos (",x.length,")"]}),t.jsx(T,{onClick:()=>i("trips"),variant:s==="trips"?"primary":"secondary",size:"sm",disabled:!0,children:"Maintenance Photos (Coming Soon)"})]}),u?t.jsx("div",{style:{textAlign:"center",padding:"40px"},children:t.jsx("div",{style:{color:"#6688CC"},children:"Loading photos..."})}):n.length===0?t.jsx(ig,{children:"No photos found. Photos will appear here when you attach them to trips."}):t.jsx(_u,{children:n.map(g=>t.jsxs(Ju,{onClick:()=>$(g),children:[t.jsx(Yu,{src:g.webOptimizedPath||g.originalPath,alt:g.contextTitle,loading:"lazy"}),t.jsxs(Zu,{children:[t.jsx(Xu,{children:g.contextTitle}),t.jsxs(eg,{children:[t.jsx(tg,{$type:g.contextType,children:g.contextType}),t.jsx("span",{children:g.contextDate})]})]})]},g.id))})]}),t.jsx(rg,{$isOpen:!!l,onClick:h,children:l&&t.jsxs(ng,{onClick:g=>g.stopPropagation(),children:[t.jsx(og,{src:l.webOptimizedPath||l.originalPath,alt:l.contextTitle}),t.jsxs(ag,{children:[t.jsx("div",{style:{marginBottom:"10px"},children:t.jsx("strong",{children:l.contextTitle})}),t.jsxs("div",{style:{fontSize:"14px",color:"#CCCCCC"},children:[t.jsxs("div",{children:["Date: ",l.contextDate]}),t.jsxs("div",{children:["Size: ",f(l.sizeBytes||0)]}),t.jsxs("div",{children:["Type: ",l.mimeType]}),l.metadata&&t.jsxs("div",{children:["Dimensions: ",l.metadata.width," × ",l.metadata.height]})]})]}),t.jsxs(sg,{children:[t.jsx(T,{onClick:()=>m("prev"),variant:"secondary",size:"sm",children:"← Previous"}),t.jsx(T,{onClick:h,size:"sm",children:"Close"}),t.jsx(T,{onClick:()=>m("next"),variant:"secondary",size:"sm",children:"Next →"})]})]})})]})},Mt=a.div`
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
`,dg=a.div`
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
`;function mg(){const{isAuthenticated:e,isLoading:r,needsSetup:n}=Zr();return r?t.jsx(Mt,{children:t.jsx(dg,{children:t.jsx("div",{className:"loading-text",children:"Initializing LCARS Interface"})})}):n?t.jsx(Mt,{children:t.jsx(nr,{})}):e?t.jsx(Mt,{children:t.jsx(dl,{children:t.jsx(sl,{children:t.jsxs(rn,{children:[t.jsx(H,{path:"/",element:t.jsx(Sn,{})}),t.jsx(H,{path:"/dashboard",element:t.jsx(tc,{})}),t.jsx(H,{path:"/boats",element:t.jsx(nd,{})}),t.jsx(H,{path:"/boats/new",element:t.jsx(kd,{})}),t.jsx(H,{path:"/boats/:id",element:t.jsx(xd,{})}),t.jsx(H,{path:"/trips",element:t.jsx(Bd,{})}),t.jsx(H,{path:"/trips/:id",element:t.jsx(im,{})}),t.jsx(H,{path:"/trips/:id/edit",element:t.jsx(um,{})}),t.jsx(H,{path:"/notes",element:t.jsx(Fm,{})}),t.jsx(H,{path:"/notes/new",element:t.jsx(Wn,{})}),t.jsx(H,{path:"/notes/:id",element:t.jsx(Um,{})}),t.jsx(H,{path:"/notes/:id/edit",element:t.jsx(Wn,{})}),t.jsx(H,{path:"/todos",element:t.jsx(oh,{})}),t.jsx(H,{path:"/maintenance",element:t.jsx(xh,{})}),t.jsx(H,{path:"/maintenance/templates/new",element:t.jsx(io,{})}),t.jsx(H,{path:"/maintenance/templates/:id",element:t.jsx(wh,{})}),t.jsx(H,{path:"/maintenance/templates/:id/edit",element:t.jsx(io,{})}),t.jsx(H,{path:"/maintenance/events/:id",element:t.jsx(Dh,{})}),t.jsx(H,{path:"/map",element:t.jsx(ru,{})}),t.jsx(H,{path:"/reports",element:t.jsx(xu,{})}),t.jsx(H,{path:"/reports/license",element:t.jsx(lu,{})}),t.jsx(H,{path:"/reports/maintenance",element:t.jsx(hu,{})}),t.jsx(H,{path:"/settings",element:t.jsx(ju,{})}),t.jsx(H,{path:"/settings/backup",element:t.jsx(Du,{})}),t.jsx(H,{path:"/calendar",element:t.jsx(Ku,{})}),t.jsx(H,{path:"/photos",element:t.jsx(cg,{})}),t.jsx(H,{path:"*",element:t.jsx(Sn,{})})]})})})}):t.jsx(Mt,{children:t.jsxs(rn,{children:[t.jsx(H,{path:"/setup",element:t.jsx(nr,{})}),t.jsx(H,{path:"*",element:t.jsx(nr,{})})]})})}const pg=Ta`
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
`,hg={colors:{primary:{paleCanary:"#FFFF99",tanoi:"#FFCC99",goldenTanoi:"#FFCC66",neonCarrot:"#FF9933",eggplant:"#664466",lilac:"#CC99CC",anakiwa:"#99CCFF",mariner:"#3366CC",bahamBlue:"#006699"},background:"#000000",surface:{dark:"#0A0A0A",medium:"#1A1119",light:"#2A2233"},text:{primary:"#FF9933",secondary:"#CC99CC",muted:"#664466",inverse:"#000000",light:"#FFCC99"},status:{success:"#55FF55",warning:"#FFFF99",error:"#FF5555",info:"#99CCFF"},interactive:{hover:"#FFCC66",active:"#FFCC99",disabled:"#664466"}},typography:{fontFamily:{primary:"'Antonio', 'Helvetica Neue', Arial, sans-serif",monospace:"'Courier New', monospace"},fontSize:{xs:"11px",sm:"13px",md:"15px",lg:"18px",xl:"24px",xxl:"32px",xxxl:"48px"},fontWeight:{normal:400,bold:700},lineHeight:{tight:1.1,normal:1.4,loose:1.7},letterSpacing:{tight:"-0.02em",normal:"0.04em",wide:"0.1em",extraWide:"0.2em"}},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px",xxxl:"64px"},borderRadius:{none:"0",sm:"4px",md:"8px",lg:"16px",xl:"24px",pill:"9999px"},shadows:{sm:"0 1px 3px rgba(255, 153, 51, 0.12)",md:"0 4px 8px rgba(255, 153, 51, 0.15)",lg:"0 10px 20px rgba(255, 153, 51, 0.18)",glow:"0 0 20px rgba(255, 153, 51, 0.35)",glowStrong:"0 0 40px rgba(255, 153, 51, 0.5)",glowSubtle:"0 0 10px rgba(255, 153, 51, 0.15)"},zIndex:{dropdown:1e3,sticky:1020,fixed:1030,modal:1040,popover:1050,tooltip:1060},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px"},animation:{fast:"150ms",normal:"300ms",slow:"500ms"},lcars:{sidebarWidth:"200px",headerHeight:"60px",footerHeight:"40px",elbowSize:"60px",barThickness:"30px",buttonHeight:"40px",gap:"3px",buttonRadius:"9999px"}},ug=new va({defaultOptions:{queries:{retry:3,staleTime:5*60*1e3,refetchOnWindowFocus:!1}}});Ur.createRoot(document.getElementById("root")).render(t.jsx(Ke.StrictMode,{children:t.jsx(wa,{client:ug,children:t.jsx(ka,{children:t.jsxs(Aa,{theme:hg,children:[t.jsx(pg,{}),t.jsx(Dc,{children:t.jsx(mg,{})})]})})})}));
//# sourceMappingURL=index-Bp9FUnAn.js.map
