var v1=Object.defineProperty;var Bg=e=>{throw TypeError(e)};var x1=(e,t,n)=>t in e?v1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ug=(e,t,n)=>x1(e,typeof t!="symbol"?t+"":t,n),xd=(e,t,n)=>t.has(e)||Bg("Cannot "+n);var P=(e,t,n)=>(xd(e,t,"read from private field"),n?n.call(e):t.get(e)),oe=(e,t,n)=>t.has(e)?Bg("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Q=(e,t,n,i)=>(xd(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n),ye=(e,t,n)=>(xd(e,t,"access private method"),n);var bl=(e,t,n,i)=>({set _(o){Q(e,t,o,n)},get _(){return P(e,t,i)}});function _1(e,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var w1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function b1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gx={exports:{}},lu={},Kx={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qa=Symbol.for("react.element"),S1=Symbol.for("react.portal"),j1=Symbol.for("react.fragment"),C1=Symbol.for("react.strict_mode"),$1=Symbol.for("react.profiler"),k1=Symbol.for("react.provider"),T1=Symbol.for("react.context"),L1=Symbol.for("react.forward_ref"),E1=Symbol.for("react.suspense"),P1=Symbol.for("react.memo"),A1=Symbol.for("react.lazy"),Hg=Symbol.iterator;function z1(e){return e===null||typeof e!="object"?null:(e=Hg&&e[Hg]||e["@@iterator"],typeof e=="function"?e:null)}var Qx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yx=Object.assign,Jx={};function ws(e,t,n){this.props=e,this.context=t,this.refs=Jx,this.updater=n||Qx}ws.prototype.isReactComponent={};ws.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ws.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xx(){}Xx.prototype=ws.prototype;function xp(e,t,n){this.props=e,this.context=t,this.refs=Jx,this.updater=n||Qx}var _p=xp.prototype=new Xx;_p.constructor=xp;Yx(_p,ws.prototype);_p.isPureReactComponent=!0;var Zg=Array.isArray,e_=Object.prototype.hasOwnProperty,wp={current:null},t_={key:!0,ref:!0,__self:!0,__source:!0};function n_(e,t,n){var i,o={},l=null,u=null;if(t!=null)for(i in t.ref!==void 0&&(u=t.ref),t.key!==void 0&&(l=""+t.key),t)e_.call(t,i)&&!t_.hasOwnProperty(i)&&(o[i]=t[i]);var h=arguments.length-2;if(h===1)o.children=n;else if(1<h){for(var f=Array(h),m=0;m<h;m++)f[m]=arguments[m+2];o.children=f}if(e&&e.defaultProps)for(i in h=e.defaultProps,h)o[i]===void 0&&(o[i]=h[i]);return{$$typeof:qa,type:e,key:l,ref:u,props:o,_owner:wp.current}}function M1(e,t){return{$$typeof:qa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bp(e){return typeof e=="object"&&e!==null&&e.$$typeof===qa}function R1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wg=/\/+/g;function _d(e,t){return typeof e=="object"&&e!==null&&e.key!=null?R1(""+e.key):t.toString(36)}function lc(e,t,n,i,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var u=!1;if(e===null)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case qa:case S1:u=!0}}if(u)return u=e,o=o(u),e=i===""?"."+_d(u,0):i,Zg(o)?(n="",e!=null&&(n=e.replace(Wg,"$&/")+"/"),lc(o,t,n,"",function(m){return m})):o!=null&&(bp(o)&&(o=M1(o,n+(!o.key||u&&u.key===o.key?"":(""+o.key).replace(Wg,"$&/")+"/")+e)),t.push(o)),1;if(u=0,i=i===""?".":i+":",Zg(e))for(var h=0;h<e.length;h++){l=e[h];var f=i+_d(l,h);u+=lc(l,t,n,f,o)}else if(f=z1(e),typeof f=="function")for(e=f.call(e),h=0;!(l=e.next()).done;)l=l.value,f=i+_d(l,h++),u+=lc(l,t,n,f,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function Sl(e,t,n){if(e==null)return e;var i=[],o=0;return lc(e,i,"","",function(l){return t.call(n,l,o++)}),i}function I1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pt={current:null},cc={transition:null},N1={ReactCurrentDispatcher:Pt,ReactCurrentBatchConfig:cc,ReactCurrentOwner:wp};function r_(){throw Error("act(...) is not supported in production builds of React.")}be.Children={map:Sl,forEach:function(e,t,n){Sl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Sl(e,function(){t++}),t},toArray:function(e){return Sl(e,function(t){return t})||[]},only:function(e){if(!bp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};be.Component=ws;be.Fragment=j1;be.Profiler=$1;be.PureComponent=xp;be.StrictMode=C1;be.Suspense=E1;be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N1;be.act=r_;be.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Yx({},e.props),o=e.key,l=e.ref,u=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,u=wp.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var h=e.type.defaultProps;for(f in t)e_.call(t,f)&&!t_.hasOwnProperty(f)&&(i[f]=t[f]===void 0&&h!==void 0?h[f]:t[f])}var f=arguments.length-2;if(f===1)i.children=n;else if(1<f){h=Array(f);for(var m=0;m<f;m++)h[m]=arguments[m+2];i.children=h}return{$$typeof:qa,type:e.type,key:o,ref:l,props:i,_owner:u}};be.createContext=function(e){return e={$$typeof:T1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:k1,_context:e},e.Consumer=e};be.createElement=n_;be.createFactory=function(e){var t=n_.bind(null,e);return t.type=e,t};be.createRef=function(){return{current:null}};be.forwardRef=function(e){return{$$typeof:L1,render:e}};be.isValidElement=bp;be.lazy=function(e){return{$$typeof:A1,_payload:{_status:-1,_result:e},_init:I1}};be.memo=function(e,t){return{$$typeof:P1,type:e,compare:t===void 0?null:t}};be.startTransition=function(e){var t=cc.transition;cc.transition={};try{e()}finally{cc.transition=t}};be.unstable_act=r_;be.useCallback=function(e,t){return Pt.current.useCallback(e,t)};be.useContext=function(e){return Pt.current.useContext(e)};be.useDebugValue=function(){};be.useDeferredValue=function(e){return Pt.current.useDeferredValue(e)};be.useEffect=function(e,t){return Pt.current.useEffect(e,t)};be.useId=function(){return Pt.current.useId()};be.useImperativeHandle=function(e,t,n){return Pt.current.useImperativeHandle(e,t,n)};be.useInsertionEffect=function(e,t){return Pt.current.useInsertionEffect(e,t)};be.useLayoutEffect=function(e,t){return Pt.current.useLayoutEffect(e,t)};be.useMemo=function(e,t){return Pt.current.useMemo(e,t)};be.useReducer=function(e,t,n){return Pt.current.useReducer(e,t,n)};be.useRef=function(e){return Pt.current.useRef(e)};be.useState=function(e){return Pt.current.useState(e)};be.useSyncExternalStore=function(e,t,n){return Pt.current.useSyncExternalStore(e,t,n)};be.useTransition=function(){return Pt.current.useTransition()};be.version="18.3.1";Kx.exports=be;var z=Kx.exports;const We=b1(z),D1=_1({__proto__:null,default:We},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O1=z,F1=Symbol.for("react.element"),B1=Symbol.for("react.fragment"),U1=Object.prototype.hasOwnProperty,H1=O1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z1={key:!0,ref:!0,__self:!0,__source:!0};function i_(e,t,n){var i,o={},l=null,u=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(u=t.ref);for(i in t)U1.call(t,i)&&!Z1.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)o[i]===void 0&&(o[i]=t[i]);return{$$typeof:F1,type:e,key:l,ref:u,props:o,_owner:H1.current}}lu.Fragment=B1;lu.jsx=i_;lu.jsxs=i_;Gx.exports=lu;var s=Gx.exports,Vh={},o_={exports:{}},Jt={},s_={exports:{}},a_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(B,re){var V=B.length;B.push(re);e:for(;0<V;){var te=V-1>>>1,se=B[te];if(0<o(se,re))B[te]=re,B[V]=se,V=te;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var re=B[0],V=B.pop();if(V!==re){B[0]=V;e:for(var te=0,se=B.length,Ae=se>>>1;te<Ae;){var we=2*(te+1)-1,me=B[we],le=we+1,rt=B[le];if(0>o(me,V))le<se&&0>o(rt,me)?(B[te]=rt,B[le]=V,te=le):(B[te]=me,B[we]=V,te=we);else if(le<se&&0>o(rt,V))B[te]=rt,B[le]=V,te=le;else break e}}return re}function o(B,re){var V=B.sortIndex-re.sortIndex;return V!==0?V:B.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();e.unstable_now=function(){return u.now()-h}}var f=[],m=[],w=1,y=null,S=3,b=!1,$=!1,j=!1,T=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(B){for(var re=n(m);re!==null;){if(re.callback===null)i(m);else if(re.startTime<=B)i(m),re.sortIndex=re.expirationTime,t(f,re);else break;re=n(m)}}function k(B){if(j=!1,_(B),!$)if(n(f)!==null)$=!0,ue(M);else{var re=n(m);re!==null&&Qe(k,re.startTime-B)}}function M(B,re){$=!1,j&&(j=!1,v(F),F=-1),b=!0;var V=S;try{for(_(re),y=n(f);y!==null&&(!(y.expirationTime>re)||B&&!Z());){var te=y.callback;if(typeof te=="function"){y.callback=null,S=y.priorityLevel;var se=te(y.expirationTime<=re);re=e.unstable_now(),typeof se=="function"?y.callback=se:y===n(f)&&i(f),_(re)}else i(f);y=n(f)}if(y!==null)var Ae=!0;else{var we=n(m);we!==null&&Qe(k,we.startTime-re),Ae=!1}return Ae}finally{y=null,S=V,b=!1}}var A=!1,N=null,F=-1,U=5,R=-1;function Z(){return!(e.unstable_now()-R<U)}function J(){if(N!==null){var B=e.unstable_now();R=B;var re=!0;try{re=N(!0,B)}finally{re?de():(A=!1,N=null)}}else A=!1}var de;if(typeof x=="function")de=function(){x(J)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,ne=_e.port2;_e.port1.onmessage=J,de=function(){ne.postMessage(null)}}else de=function(){T(J,0)};function ue(B){N=B,A||(A=!0,de())}function Qe(B,re){F=T(function(){B(e.unstable_now())},re)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_continueExecution=function(){$||b||($=!0,ue(M))},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_getFirstCallbackNode=function(){return n(f)},e.unstable_next=function(B){switch(S){case 1:case 2:case 3:var re=3;break;default:re=S}var V=S;S=re;try{return B()}finally{S=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(B,re){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var V=S;S=B;try{return re()}finally{S=V}},e.unstable_scheduleCallback=function(B,re,V){var te=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?te+V:te):V=te,B){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=V+se,B={id:w++,callback:re,priorityLevel:B,startTime:V,expirationTime:se,sortIndex:-1},V>te?(B.sortIndex=V,t(m,B),n(f)===null&&B===n(m)&&(j?(v(F),F=-1):j=!0,Qe(k,V-te))):(B.sortIndex=se,t(f,B),$||b||($=!0,ue(M))),B},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(B){var re=S;return function(){var V=S;S=re;try{return B.apply(this,arguments)}finally{S=V}}}})(a_);s_.exports=a_;var W1=s_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V1=z,Yt=W1;function W(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l_=new Set,xa={};function lo(e,t){cs(e,t),cs(e+"Capture",t)}function cs(e,t){for(xa[e]=t,e=0;e<t.length;e++)l_.add(t[e])}var _r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qh=Object.prototype.hasOwnProperty,q1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vg={},qg={};function G1(e){return qh.call(qg,e)?!0:qh.call(Vg,e)?!1:q1.test(e)?qg[e]=!0:(Vg[e]=!0,!1)}function K1(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Q1(e,t,n,i){if(t===null||typeof t>"u"||K1(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function At(e,t,n,i,o,l,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=u}var vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){vt[e]=new At(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];vt[t]=new At(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){vt[e]=new At(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){vt[e]=new At(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){vt[e]=new At(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){vt[e]=new At(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){vt[e]=new At(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){vt[e]=new At(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){vt[e]=new At(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sp=/[\-:]([a-z])/g;function jp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Sp,jp);vt[t]=new At(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Sp,jp);vt[t]=new At(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Sp,jp);vt[t]=new At(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){vt[e]=new At(e,1,!1,e.toLowerCase(),null,!1,!1)});vt.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){vt[e]=new At(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cp(e,t,n,i){var o=vt.hasOwnProperty(t)?vt[t]:null;(o!==null?o.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Q1(t,n,o,i)&&(n=null),i||o===null?G1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,i=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var jr=V1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jl=Symbol.for("react.element"),Ao=Symbol.for("react.portal"),zo=Symbol.for("react.fragment"),$p=Symbol.for("react.strict_mode"),Gh=Symbol.for("react.profiler"),c_=Symbol.for("react.provider"),u_=Symbol.for("react.context"),kp=Symbol.for("react.forward_ref"),Kh=Symbol.for("react.suspense"),Qh=Symbol.for("react.suspense_list"),Tp=Symbol.for("react.memo"),Rr=Symbol.for("react.lazy"),d_=Symbol.for("react.offscreen"),Gg=Symbol.iterator;function Hs(e){return e===null||typeof e!="object"?null:(e=Gg&&e[Gg]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Object.assign,wd;function ra(e){if(wd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wd=t&&t[1]||""}return`
`+wd+e}var bd=!1;function Sd(e,t){if(!e||bd)return"";bd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var i=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){i=m}e.call(t.prototype)}else{try{throw Error()}catch(m){i=m}e()}}catch(m){if(m&&i&&typeof m.stack=="string"){for(var o=m.stack.split(`
`),l=i.stack.split(`
`),u=o.length-1,h=l.length-1;1<=u&&0<=h&&o[u]!==l[h];)h--;for(;1<=u&&0<=h;u--,h--)if(o[u]!==l[h]){if(u!==1||h!==1)do if(u--,h--,0>h||o[u]!==l[h]){var f=`
`+o[u].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=u&&0<=h);break}}}finally{bd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ra(e):""}function Y1(e){switch(e.tag){case 5:return ra(e.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return e=Sd(e.type,!1),e;case 11:return e=Sd(e.type.render,!1),e;case 1:return e=Sd(e.type,!0),e;default:return""}}function Yh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zo:return"Fragment";case Ao:return"Portal";case Gh:return"Profiler";case $p:return"StrictMode";case Kh:return"Suspense";case Qh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case u_:return(e.displayName||"Context")+".Consumer";case c_:return(e._context.displayName||"Context")+".Provider";case kp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tp:return t=e.displayName||null,t!==null?t:Yh(e.type)||"Memo";case Rr:t=e._payload,e=e._init;try{return Yh(e(t))}catch{}}return null}function J1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yh(t);case 8:return t===$p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function h_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function X1(e){var t=h_(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(u){i=""+u,l.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(u){i=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cl(e){e._valueTracker||(e._valueTracker=X1(e))}function f_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=h_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Lc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jh(e,t){var n=t.checked;return Ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Kg(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=hi(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function p_(e,t){t=t.checked,t!=null&&Cp(e,"checked",t,!1)}function Xh(e,t){p_(e,t);var n=hi(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ef(e,t.type,n):t.hasOwnProperty("defaultValue")&&ef(e,t.type,hi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qg(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ef(e,t,n){(t!=="number"||Lc(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ia=Array.isArray;function Wo(e,t,n,i){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&i&&(e[n].defaultSelected=!0)}else{for(n=""+hi(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function tf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(W(91));return Ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yg(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(W(92));if(ia(n)){if(1<n.length)throw Error(W(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hi(n)}}function m_(e,t){var n=hi(t.value),i=hi(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Jg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function g_(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?g_(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $l,y_=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($l=$l||document.createElement("div"),$l.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$l.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _a(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ej=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(e){ej.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ca[t]=ca[e]})});function v_(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ca.hasOwnProperty(e)&&ca[e]?(""+t).trim():t+"px"}function x_(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,o=v_(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,o):e[n]=o}}var tj=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rf(e,t){if(t){if(tj[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(W(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(W(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(W(61))}if(t.style!=null&&typeof t.style!="object")throw Error(W(62))}}function of(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sf=null;function Lp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var af=null,Vo=null,qo=null;function Xg(e){if(e=Qa(e)){if(typeof af!="function")throw Error(W(280));var t=e.stateNode;t&&(t=fu(t),af(e.stateNode,e.type,t))}}function __(e){Vo?qo?qo.push(e):qo=[e]:Vo=e}function w_(){if(Vo){var e=Vo,t=qo;if(qo=Vo=null,Xg(e),t)for(e=0;e<t.length;e++)Xg(t[e])}}function b_(e,t){return e(t)}function S_(){}var jd=!1;function j_(e,t,n){if(jd)return e(t,n);jd=!0;try{return b_(e,t,n)}finally{jd=!1,(Vo!==null||qo!==null)&&(S_(),w_())}}function wa(e,t){var n=e.stateNode;if(n===null)return null;var i=fu(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(W(231,t,typeof n));return n}var lf=!1;if(_r)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){lf=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{lf=!1}function nj(e,t,n,i,o,l,u,h,f){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(w){this.onError(w)}}var ua=!1,Ec=null,Pc=!1,cf=null,rj={onError:function(e){ua=!0,Ec=e}};function ij(e,t,n,i,o,l,u,h,f){ua=!1,Ec=null,nj.apply(rj,arguments)}function oj(e,t,n,i,o,l,u,h,f){if(ij.apply(this,arguments),ua){if(ua){var m=Ec;ua=!1,Ec=null}else throw Error(W(198));Pc||(Pc=!0,cf=m)}}function co(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function C_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ey(e){if(co(e)!==e)throw Error(W(188))}function sj(e){var t=e.alternate;if(!t){if(t=co(e),t===null)throw Error(W(188));return t!==e?null:e}for(var n=e,i=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return ey(o),e;if(l===i)return ey(o),t;l=l.sibling}throw Error(W(188))}if(n.return!==i.return)n=o,i=l;else{for(var u=!1,h=o.child;h;){if(h===n){u=!0,n=o,i=l;break}if(h===i){u=!0,i=o,n=l;break}h=h.sibling}if(!u){for(h=l.child;h;){if(h===n){u=!0,n=l,i=o;break}if(h===i){u=!0,i=l,n=o;break}h=h.sibling}if(!u)throw Error(W(189))}}if(n.alternate!==i)throw Error(W(190))}if(n.tag!==3)throw Error(W(188));return n.stateNode.current===n?e:t}function $_(e){return e=sj(e),e!==null?k_(e):null}function k_(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=k_(e);if(t!==null)return t;e=e.sibling}return null}var T_=Yt.unstable_scheduleCallback,ty=Yt.unstable_cancelCallback,aj=Yt.unstable_shouldYield,lj=Yt.unstable_requestPaint,Ge=Yt.unstable_now,cj=Yt.unstable_getCurrentPriorityLevel,Ep=Yt.unstable_ImmediatePriority,L_=Yt.unstable_UserBlockingPriority,Ac=Yt.unstable_NormalPriority,uj=Yt.unstable_LowPriority,E_=Yt.unstable_IdlePriority,cu=null,Qn=null;function dj(e){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(cu,e,void 0,(e.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:pj,hj=Math.log,fj=Math.LN2;function pj(e){return e>>>=0,e===0?32:31-(hj(e)/fj|0)|0}var kl=64,Tl=4194304;function oa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zc(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,o=e.suspendedLanes,l=e.pingedLanes,u=n&268435455;if(u!==0){var h=u&~o;h!==0?i=oa(h):(l&=u,l!==0&&(i=oa(l)))}else u=n&~o,u!==0?i=oa(u):l!==0&&(i=oa(l));if(i===0)return 0;if(t!==0&&t!==i&&!(t&o)&&(o=i&-i,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-Cn(t),o=1<<n,i|=e[n],t&=~o;return i}function mj(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gj(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var u=31-Cn(l),h=1<<u,f=o[u];f===-1?(!(h&n)||h&i)&&(o[u]=mj(h,t)):f<=t&&(e.expiredLanes|=h),l&=~h}}function uf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function P_(){var e=kl;return kl<<=1,!(kl&4194240)&&(kl=64),e}function Cd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ga(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Cn(t),e[t]=n}function yj(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Cn(n),l=1<<o;t[o]=0,i[o]=-1,e[o]=-1,n&=~l}}function Pp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Cn(n),o=1<<i;o&t|e[i]&t&&(e[i]|=t),n&=~o}}var Pe=0;function A_(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var z_,Ap,M_,R_,I_,df=!1,Ll=[],ei=null,ti=null,ni=null,ba=new Map,Sa=new Map,Nr=[],vj="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ny(e,t){switch(e){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":ba.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(t.pointerId)}}function Ws(e,t,n,i,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Qa(t),t!==null&&Ap(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function xj(e,t,n,i,o){switch(t){case"focusin":return ei=Ws(ei,e,t,n,i,o),!0;case"dragenter":return ti=Ws(ti,e,t,n,i,o),!0;case"mouseover":return ni=Ws(ni,e,t,n,i,o),!0;case"pointerover":var l=o.pointerId;return ba.set(l,Ws(ba.get(l)||null,e,t,n,i,o)),!0;case"gotpointercapture":return l=o.pointerId,Sa.set(l,Ws(Sa.get(l)||null,e,t,n,i,o)),!0}return!1}function N_(e){var t=zi(e.target);if(t!==null){var n=co(t);if(n!==null){if(t=n.tag,t===13){if(t=C_(n),t!==null){e.blockedOn=t,I_(e.priority,function(){M_(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);sf=i,n.target.dispatchEvent(i),sf=null}else return t=Qa(n),t!==null&&Ap(t),e.blockedOn=n,!1;t.shift()}return!0}function ry(e,t,n){uc(e)&&n.delete(t)}function _j(){df=!1,ei!==null&&uc(ei)&&(ei=null),ti!==null&&uc(ti)&&(ti=null),ni!==null&&uc(ni)&&(ni=null),ba.forEach(ry),Sa.forEach(ry)}function Vs(e,t){e.blockedOn===t&&(e.blockedOn=null,df||(df=!0,Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority,_j)))}function ja(e){function t(o){return Vs(o,e)}if(0<Ll.length){Vs(Ll[0],e);for(var n=1;n<Ll.length;n++){var i=Ll[n];i.blockedOn===e&&(i.blockedOn=null)}}for(ei!==null&&Vs(ei,e),ti!==null&&Vs(ti,e),ni!==null&&Vs(ni,e),ba.forEach(t),Sa.forEach(t),n=0;n<Nr.length;n++)i=Nr[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)N_(n),n.blockedOn===null&&Nr.shift()}var Go=jr.ReactCurrentBatchConfig,Mc=!0;function wj(e,t,n,i){var o=Pe,l=Go.transition;Go.transition=null;try{Pe=1,zp(e,t,n,i)}finally{Pe=o,Go.transition=l}}function bj(e,t,n,i){var o=Pe,l=Go.transition;Go.transition=null;try{Pe=4,zp(e,t,n,i)}finally{Pe=o,Go.transition=l}}function zp(e,t,n,i){if(Mc){var o=hf(e,t,n,i);if(o===null)Rd(e,t,i,Rc,n),ny(e,i);else if(xj(o,e,t,n,i))i.stopPropagation();else if(ny(e,i),t&4&&-1<vj.indexOf(e)){for(;o!==null;){var l=Qa(o);if(l!==null&&z_(l),l=hf(e,t,n,i),l===null&&Rd(e,t,i,Rc,n),l===o)break;o=l}o!==null&&i.stopPropagation()}else Rd(e,t,i,null,n)}}var Rc=null;function hf(e,t,n,i){if(Rc=null,e=Lp(i),e=zi(e),e!==null)if(t=co(e),t===null)e=null;else if(n=t.tag,n===13){if(e=C_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Rc=e,null}function D_(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cj()){case Ep:return 1;case L_:return 4;case Ac:case uj:return 16;case E_:return 536870912;default:return 16}default:return 16}}var Yr=null,Mp=null,dc=null;function O_(){if(dc)return dc;var e,t=Mp,n=t.length,i,o="value"in Yr?Yr.value:Yr.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var u=n-e;for(i=1;i<=u&&t[n-i]===o[l-i];i++);return dc=o.slice(e,1<i?1-i:void 0)}function hc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function El(){return!0}function iy(){return!1}function Xt(e){function t(n,i,o,l,u){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(l):l[h]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?El:iy,this.isPropagationStopped=iy,this}return Ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),t}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rp=Xt(bs),Ka=Ue({},bs,{view:0,detail:0}),Sj=Xt(Ka),$d,kd,qs,uu=Ue({},Ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ip,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qs&&(qs&&e.type==="mousemove"?($d=e.screenX-qs.screenX,kd=e.screenY-qs.screenY):kd=$d=0,qs=e),$d)},movementY:function(e){return"movementY"in e?e.movementY:kd}}),oy=Xt(uu),jj=Ue({},uu,{dataTransfer:0}),Cj=Xt(jj),$j=Ue({},Ka,{relatedTarget:0}),Td=Xt($j),kj=Ue({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),Tj=Xt(kj),Lj=Ue({},bs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ej=Xt(Lj),Pj=Ue({},bs,{data:0}),sy=Xt(Pj),Aj={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zj={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mj={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rj(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mj[e])?!!t[e]:!1}function Ip(){return Rj}var Ij=Ue({},Ka,{key:function(e){if(e.key){var t=Aj[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zj[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ip,charCode:function(e){return e.type==="keypress"?hc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nj=Xt(Ij),Dj=Ue({},uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ay=Xt(Dj),Oj=Ue({},Ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ip}),Fj=Xt(Oj),Bj=Ue({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uj=Xt(Bj),Hj=Ue({},uu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zj=Xt(Hj),Wj=[9,13,27,32],Np=_r&&"CompositionEvent"in window,da=null;_r&&"documentMode"in document&&(da=document.documentMode);var Vj=_r&&"TextEvent"in window&&!da,F_=_r&&(!Np||da&&8<da&&11>=da),ly=" ",cy=!1;function B_(e,t){switch(e){case"keyup":return Wj.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function U_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mo=!1;function qj(e,t){switch(e){case"compositionend":return U_(t);case"keypress":return t.which!==32?null:(cy=!0,ly);case"textInput":return e=t.data,e===ly&&cy?null:e;default:return null}}function Gj(e,t){if(Mo)return e==="compositionend"||!Np&&B_(e,t)?(e=O_(),dc=Mp=Yr=null,Mo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return F_&&t.locale!=="ko"?null:t.data;default:return null}}var Kj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kj[e.type]:t==="textarea"}function H_(e,t,n,i){__(i),t=Ic(t,"onChange"),0<t.length&&(n=new Rp("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ha=null,Ca=null;function Qj(e){e0(e,0)}function du(e){var t=No(e);if(f_(t))return e}function Yj(e,t){if(e==="change")return t}var Z_=!1;if(_r){var Ld;if(_r){var Ed="oninput"in document;if(!Ed){var dy=document.createElement("div");dy.setAttribute("oninput","return;"),Ed=typeof dy.oninput=="function"}Ld=Ed}else Ld=!1;Z_=Ld&&(!document.documentMode||9<document.documentMode)}function hy(){ha&&(ha.detachEvent("onpropertychange",W_),Ca=ha=null)}function W_(e){if(e.propertyName==="value"&&du(Ca)){var t=[];H_(t,Ca,e,Lp(e)),j_(Qj,t)}}function Jj(e,t,n){e==="focusin"?(hy(),ha=t,Ca=n,ha.attachEvent("onpropertychange",W_)):e==="focusout"&&hy()}function Xj(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return du(Ca)}function eC(e,t){if(e==="click")return du(t)}function tC(e,t){if(e==="input"||e==="change")return du(t)}function nC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ln=typeof Object.is=="function"?Object.is:nC;function $a(e,t){if(Ln(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!qh.call(t,o)||!Ln(e[o],t[o]))return!1}return!0}function fy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function py(e,t){var n=fy(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fy(n)}}function V_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?V_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function q_(){for(var e=window,t=Lc();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lc(e.document)}return t}function Dp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rC(e){var t=q_(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&V_(n.ownerDocument.documentElement,n)){if(i!==null&&Dp(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(i.start,o);i=i.end===void 0?l:Math.min(i.end,o),!e.extend&&l>i&&(o=i,i=l,l=o),o=py(n,l);var u=py(n,i);o&&u&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>i?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var iC=_r&&"documentMode"in document&&11>=document.documentMode,Ro=null,ff=null,fa=null,pf=!1;function my(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pf||Ro==null||Ro!==Lc(i)||(i=Ro,"selectionStart"in i&&Dp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fa&&$a(fa,i)||(fa=i,i=Ic(ff,"onSelect"),0<i.length&&(t=new Rp("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Ro)))}function Pl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Io={animationend:Pl("Animation","AnimationEnd"),animationiteration:Pl("Animation","AnimationIteration"),animationstart:Pl("Animation","AnimationStart"),transitionend:Pl("Transition","TransitionEnd")},Pd={},G_={};_r&&(G_=document.createElement("div").style,"AnimationEvent"in window||(delete Io.animationend.animation,delete Io.animationiteration.animation,delete Io.animationstart.animation),"TransitionEvent"in window||delete Io.transitionend.transition);function hu(e){if(Pd[e])return Pd[e];if(!Io[e])return e;var t=Io[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in G_)return Pd[e]=t[n];return e}var K_=hu("animationend"),Q_=hu("animationiteration"),Y_=hu("animationstart"),J_=hu("transitionend"),X_=new Map,gy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pi(e,t){X_.set(e,t),lo(t,[e])}for(var Ad=0;Ad<gy.length;Ad++){var zd=gy[Ad],oC=zd.toLowerCase(),sC=zd[0].toUpperCase()+zd.slice(1);pi(oC,"on"+sC)}pi(K_,"onAnimationEnd");pi(Q_,"onAnimationIteration");pi(Y_,"onAnimationStart");pi("dblclick","onDoubleClick");pi("focusin","onFocus");pi("focusout","onBlur");pi(J_,"onTransitionEnd");cs("onMouseEnter",["mouseout","mouseover"]);cs("onMouseLeave",["mouseout","mouseover"]);cs("onPointerEnter",["pointerout","pointerover"]);cs("onPointerLeave",["pointerout","pointerover"]);lo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lo("onBeforeInput",["compositionend","keypress","textInput","paste"]);lo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aC=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function yy(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,oj(i,t,void 0,e),e.currentTarget=null}function e0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],o=i.event;i=i.listeners;e:{var l=void 0;if(t)for(var u=i.length-1;0<=u;u--){var h=i[u],f=h.instance,m=h.currentTarget;if(h=h.listener,f!==l&&o.isPropagationStopped())break e;yy(o,h,m),l=f}else for(u=0;u<i.length;u++){if(h=i[u],f=h.instance,m=h.currentTarget,h=h.listener,f!==l&&o.isPropagationStopped())break e;yy(o,h,m),l=f}}}if(Pc)throw e=cf,Pc=!1,cf=null,e}function Re(e,t){var n=t[xf];n===void 0&&(n=t[xf]=new Set);var i=e+"__bubble";n.has(i)||(t0(t,e,2,!1),n.add(i))}function Md(e,t,n){var i=0;t&&(i|=4),t0(n,e,i,t)}var Al="_reactListening"+Math.random().toString(36).slice(2);function ka(e){if(!e[Al]){e[Al]=!0,l_.forEach(function(n){n!=="selectionchange"&&(aC.has(n)||Md(n,!1,e),Md(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Al]||(t[Al]=!0,Md("selectionchange",!1,t))}}function t0(e,t,n,i){switch(D_(t)){case 1:var o=wj;break;case 4:o=bj;break;default:o=zp}n=o.bind(null,t,n,e),o=void 0,!lf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Rd(e,t,n,i,o){var l=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var u=i.tag;if(u===3||u===4){var h=i.stateNode.containerInfo;if(h===o||h.nodeType===8&&h.parentNode===o)break;if(u===4)for(u=i.return;u!==null;){var f=u.tag;if((f===3||f===4)&&(f=u.stateNode.containerInfo,f===o||f.nodeType===8&&f.parentNode===o))return;u=u.return}for(;h!==null;){if(u=zi(h),u===null)return;if(f=u.tag,f===5||f===6){i=l=u;continue e}h=h.parentNode}}i=i.return}j_(function(){var m=l,w=Lp(n),y=[];e:{var S=X_.get(e);if(S!==void 0){var b=Rp,$=e;switch(e){case"keypress":if(hc(n)===0)break e;case"keydown":case"keyup":b=Nj;break;case"focusin":$="focus",b=Td;break;case"focusout":$="blur",b=Td;break;case"beforeblur":case"afterblur":b=Td;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=oy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Cj;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Fj;break;case K_:case Q_:case Y_:b=Tj;break;case J_:b=Uj;break;case"scroll":b=Sj;break;case"wheel":b=Zj;break;case"copy":case"cut":case"paste":b=Ej;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=ay}var j=(t&4)!==0,T=!j&&e==="scroll",v=j?S!==null?S+"Capture":null:S;j=[];for(var x=m,_;x!==null;){_=x;var k=_.stateNode;if(_.tag===5&&k!==null&&(_=k,v!==null&&(k=wa(x,v),k!=null&&j.push(Ta(x,k,_)))),T)break;x=x.return}0<j.length&&(S=new b(S,$,null,n,w),y.push({event:S,listeners:j}))}}if(!(t&7)){e:{if(S=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",S&&n!==sf&&($=n.relatedTarget||n.fromElement)&&(zi($)||$[wr]))break e;if((b||S)&&(S=w.window===w?w:(S=w.ownerDocument)?S.defaultView||S.parentWindow:window,b?($=n.relatedTarget||n.toElement,b=m,$=$?zi($):null,$!==null&&(T=co($),$!==T||$.tag!==5&&$.tag!==6)&&($=null)):(b=null,$=m),b!==$)){if(j=oy,k="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(j=ay,k="onPointerLeave",v="onPointerEnter",x="pointer"),T=b==null?S:No(b),_=$==null?S:No($),S=new j(k,x+"leave",b,n,w),S.target=T,S.relatedTarget=_,k=null,zi(w)===m&&(j=new j(v,x+"enter",$,n,w),j.target=_,j.relatedTarget=T,k=j),T=k,b&&$)t:{for(j=b,v=$,x=0,_=j;_;_=wo(_))x++;for(_=0,k=v;k;k=wo(k))_++;for(;0<x-_;)j=wo(j),x--;for(;0<_-x;)v=wo(v),_--;for(;x--;){if(j===v||v!==null&&j===v.alternate)break t;j=wo(j),v=wo(v)}j=null}else j=null;b!==null&&vy(y,S,b,j,!1),$!==null&&T!==null&&vy(y,T,$,j,!0)}}e:{if(S=m?No(m):window,b=S.nodeName&&S.nodeName.toLowerCase(),b==="select"||b==="input"&&S.type==="file")var M=Yj;else if(uy(S))if(Z_)M=tC;else{M=Xj;var A=Jj}else(b=S.nodeName)&&b.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(M=eC);if(M&&(M=M(e,m))){H_(y,M,n,w);break e}A&&A(e,S,m),e==="focusout"&&(A=S._wrapperState)&&A.controlled&&S.type==="number"&&ef(S,"number",S.value)}switch(A=m?No(m):window,e){case"focusin":(uy(A)||A.contentEditable==="true")&&(Ro=A,ff=m,fa=null);break;case"focusout":fa=ff=Ro=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,my(y,n,w);break;case"selectionchange":if(iC)break;case"keydown":case"keyup":my(y,n,w)}var N;if(Np)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Mo?B_(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(F_&&n.locale!=="ko"&&(Mo||F!=="onCompositionStart"?F==="onCompositionEnd"&&Mo&&(N=O_()):(Yr=w,Mp="value"in Yr?Yr.value:Yr.textContent,Mo=!0)),A=Ic(m,F),0<A.length&&(F=new sy(F,e,null,n,w),y.push({event:F,listeners:A}),N?F.data=N:(N=U_(n),N!==null&&(F.data=N)))),(N=Vj?qj(e,n):Gj(e,n))&&(m=Ic(m,"onBeforeInput"),0<m.length&&(w=new sy("onBeforeInput","beforeinput",null,n,w),y.push({event:w,listeners:m}),w.data=N))}e0(y,t)})}function Ta(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ic(e,t){for(var n=t+"Capture",i=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=wa(e,n),l!=null&&i.unshift(Ta(e,l,o)),l=wa(e,t),l!=null&&i.push(Ta(e,l,o))),e=e.return}return i}function wo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vy(e,t,n,i,o){for(var l=t._reactName,u=[];n!==null&&n!==i;){var h=n,f=h.alternate,m=h.stateNode;if(f!==null&&f===i)break;h.tag===5&&m!==null&&(h=m,o?(f=wa(n,l),f!=null&&u.unshift(Ta(n,f,h))):o||(f=wa(n,l),f!=null&&u.push(Ta(n,f,h)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var lC=/\r\n?/g,cC=/\u0000|\uFFFD/g;function xy(e){return(typeof e=="string"?e:""+e).replace(lC,`
`).replace(cC,"")}function zl(e,t,n){if(t=xy(t),xy(e)!==t&&n)throw Error(W(425))}function Nc(){}var mf=null,gf=null;function yf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vf=typeof setTimeout=="function"?setTimeout:void 0,uC=typeof clearTimeout=="function"?clearTimeout:void 0,_y=typeof Promise=="function"?Promise:void 0,dC=typeof queueMicrotask=="function"?queueMicrotask:typeof _y<"u"?function(e){return _y.resolve(null).then(e).catch(hC)}:vf;function hC(e){setTimeout(function(){throw e})}function Id(e,t){var n=t,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(i===0){e.removeChild(o),ja(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=o}while(n);ja(t)}function ri(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Ss,La="__reactProps$"+Ss,wr="__reactContainer$"+Ss,xf="__reactEvents$"+Ss,fC="__reactListeners$"+Ss,pC="__reactHandles$"+Ss;function zi(e){var t=e[Gn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wr]||n[Gn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wy(e);e!==null;){if(n=e[Gn])return n;e=wy(e)}return t}e=n,n=e.parentNode}return null}function Qa(e){return e=e[Gn]||e[wr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function No(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(W(33))}function fu(e){return e[La]||null}var _f=[],Do=-1;function mi(e){return{current:e}}function Ne(e){0>Do||(e.current=_f[Do],_f[Do]=null,Do--)}function Me(e,t){Do++,_f[Do]=e.current,e.current=t}var fi={},jt=mi(fi),Bt=mi(!1),Ji=fi;function us(e,t){var n=e.type.contextTypes;if(!n)return fi;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ut(e){return e=e.childContextTypes,e!=null}function Dc(){Ne(Bt),Ne(jt)}function by(e,t,n){if(jt.current!==fi)throw Error(W(168));Me(jt,t),Me(Bt,n)}function n0(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var o in i)if(!(o in t))throw Error(W(108,J1(e)||"Unknown",o));return Ue({},n,i)}function Oc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fi,Ji=jt.current,Me(jt,e),Me(Bt,Bt.current),!0}function Sy(e,t,n){var i=e.stateNode;if(!i)throw Error(W(169));n?(e=n0(e,t,Ji),i.__reactInternalMemoizedMergedChildContext=e,Ne(Bt),Ne(jt),Me(jt,e)):Ne(Bt),Me(Bt,n)}var dr=null,pu=!1,Nd=!1;function r0(e){dr===null?dr=[e]:dr.push(e)}function mC(e){pu=!0,r0(e)}function gi(){if(!Nd&&dr!==null){Nd=!0;var e=0,t=Pe;try{var n=dr;for(Pe=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}dr=null,pu=!1}catch(o){throw dr!==null&&(dr=dr.slice(e+1)),T_(Ep,gi),o}finally{Pe=t,Nd=!1}}return null}var Oo=[],Fo=0,Fc=null,Bc=0,sn=[],an=0,Xi=null,gr=1,yr="";function Pi(e,t){Oo[Fo++]=Bc,Oo[Fo++]=Fc,Fc=e,Bc=t}function i0(e,t,n){sn[an++]=gr,sn[an++]=yr,sn[an++]=Xi,Xi=e;var i=gr;e=yr;var o=32-Cn(i)-1;i&=~(1<<o),n+=1;var l=32-Cn(t)+o;if(30<l){var u=o-o%5;l=(i&(1<<u)-1).toString(32),i>>=u,o-=u,gr=1<<32-Cn(t)+o|n<<o|i,yr=l+e}else gr=1<<l|n<<o|i,yr=e}function Op(e){e.return!==null&&(Pi(e,1),i0(e,1,0))}function Fp(e){for(;e===Fc;)Fc=Oo[--Fo],Oo[Fo]=null,Bc=Oo[--Fo],Oo[Fo]=null;for(;e===Xi;)Xi=sn[--an],sn[an]=null,yr=sn[--an],sn[an]=null,gr=sn[--an],sn[an]=null}var Qt=null,Kt=null,De=!1,jn=null;function o0(e,t){var n=ln(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function jy(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qt=e,Kt=ri(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qt=e,Kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xi!==null?{id:gr,overflow:yr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ln(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qt=e,Kt=null,!0):!1;default:return!1}}function wf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bf(e){if(De){var t=Kt;if(t){var n=t;if(!jy(e,t)){if(wf(e))throw Error(W(418));t=ri(n.nextSibling);var i=Qt;t&&jy(e,t)?o0(i,n):(e.flags=e.flags&-4097|2,De=!1,Qt=e)}}else{if(wf(e))throw Error(W(418));e.flags=e.flags&-4097|2,De=!1,Qt=e}}}function Cy(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qt=e}function Ml(e){if(e!==Qt)return!1;if(!De)return Cy(e),De=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yf(e.type,e.memoizedProps)),t&&(t=Kt)){if(wf(e))throw s0(),Error(W(418));for(;t;)o0(e,t),t=ri(t.nextSibling)}if(Cy(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Kt=ri(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Kt=null}}else Kt=Qt?ri(e.stateNode.nextSibling):null;return!0}function s0(){for(var e=Kt;e;)e=ri(e.nextSibling)}function ds(){Kt=Qt=null,De=!1}function Bp(e){jn===null?jn=[e]:jn.push(e)}var gC=jr.ReactCurrentBatchConfig;function Gs(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(W(309));var i=n.stateNode}if(!i)throw Error(W(147,e));var o=i,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(u){var h=o.refs;u===null?delete h[l]:h[l]=u},t._stringRef=l,t)}if(typeof e!="string")throw Error(W(284));if(!n._owner)throw Error(W(290,e))}return e}function Rl(e,t){throw e=Object.prototype.toString.call(t),Error(W(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $y(e){var t=e._init;return t(e._payload)}function a0(e){function t(v,x){if(e){var _=v.deletions;_===null?(v.deletions=[x],v.flags|=16):_.push(x)}}function n(v,x){if(!e)return null;for(;x!==null;)t(v,x),x=x.sibling;return null}function i(v,x){for(v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function o(v,x){return v=ai(v,x),v.index=0,v.sibling=null,v}function l(v,x,_){return v.index=_,e?(_=v.alternate,_!==null?(_=_.index,_<x?(v.flags|=2,x):_):(v.flags|=2,x)):(v.flags|=1048576,x)}function u(v){return e&&v.alternate===null&&(v.flags|=2),v}function h(v,x,_,k){return x===null||x.tag!==6?(x=Zd(_,v.mode,k),x.return=v,x):(x=o(x,_),x.return=v,x)}function f(v,x,_,k){var M=_.type;return M===zo?w(v,x,_.props.children,k,_.key):x!==null&&(x.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Rr&&$y(M)===x.type)?(k=o(x,_.props),k.ref=Gs(v,x,_),k.return=v,k):(k=xc(_.type,_.key,_.props,null,v.mode,k),k.ref=Gs(v,x,_),k.return=v,k)}function m(v,x,_,k){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=Wd(_,v.mode,k),x.return=v,x):(x=o(x,_.children||[]),x.return=v,x)}function w(v,x,_,k,M){return x===null||x.tag!==7?(x=Ki(_,v.mode,k,M),x.return=v,x):(x=o(x,_),x.return=v,x)}function y(v,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Zd(""+x,v.mode,_),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case jl:return _=xc(x.type,x.key,x.props,null,v.mode,_),_.ref=Gs(v,null,x),_.return=v,_;case Ao:return x=Wd(x,v.mode,_),x.return=v,x;case Rr:var k=x._init;return y(v,k(x._payload),_)}if(ia(x)||Hs(x))return x=Ki(x,v.mode,_,null),x.return=v,x;Rl(v,x)}return null}function S(v,x,_,k){var M=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return M!==null?null:h(v,x,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case jl:return _.key===M?f(v,x,_,k):null;case Ao:return _.key===M?m(v,x,_,k):null;case Rr:return M=_._init,S(v,x,M(_._payload),k)}if(ia(_)||Hs(_))return M!==null?null:w(v,x,_,k,null);Rl(v,_)}return null}function b(v,x,_,k,M){if(typeof k=="string"&&k!==""||typeof k=="number")return v=v.get(_)||null,h(x,v,""+k,M);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case jl:return v=v.get(k.key===null?_:k.key)||null,f(x,v,k,M);case Ao:return v=v.get(k.key===null?_:k.key)||null,m(x,v,k,M);case Rr:var A=k._init;return b(v,x,_,A(k._payload),M)}if(ia(k)||Hs(k))return v=v.get(_)||null,w(x,v,k,M,null);Rl(x,k)}return null}function $(v,x,_,k){for(var M=null,A=null,N=x,F=x=0,U=null;N!==null&&F<_.length;F++){N.index>F?(U=N,N=null):U=N.sibling;var R=S(v,N,_[F],k);if(R===null){N===null&&(N=U);break}e&&N&&R.alternate===null&&t(v,N),x=l(R,x,F),A===null?M=R:A.sibling=R,A=R,N=U}if(F===_.length)return n(v,N),De&&Pi(v,F),M;if(N===null){for(;F<_.length;F++)N=y(v,_[F],k),N!==null&&(x=l(N,x,F),A===null?M=N:A.sibling=N,A=N);return De&&Pi(v,F),M}for(N=i(v,N);F<_.length;F++)U=b(N,v,F,_[F],k),U!==null&&(e&&U.alternate!==null&&N.delete(U.key===null?F:U.key),x=l(U,x,F),A===null?M=U:A.sibling=U,A=U);return e&&N.forEach(function(Z){return t(v,Z)}),De&&Pi(v,F),M}function j(v,x,_,k){var M=Hs(_);if(typeof M!="function")throw Error(W(150));if(_=M.call(_),_==null)throw Error(W(151));for(var A=M=null,N=x,F=x=0,U=null,R=_.next();N!==null&&!R.done;F++,R=_.next()){N.index>F?(U=N,N=null):U=N.sibling;var Z=S(v,N,R.value,k);if(Z===null){N===null&&(N=U);break}e&&N&&Z.alternate===null&&t(v,N),x=l(Z,x,F),A===null?M=Z:A.sibling=Z,A=Z,N=U}if(R.done)return n(v,N),De&&Pi(v,F),M;if(N===null){for(;!R.done;F++,R=_.next())R=y(v,R.value,k),R!==null&&(x=l(R,x,F),A===null?M=R:A.sibling=R,A=R);return De&&Pi(v,F),M}for(N=i(v,N);!R.done;F++,R=_.next())R=b(N,v,F,R.value,k),R!==null&&(e&&R.alternate!==null&&N.delete(R.key===null?F:R.key),x=l(R,x,F),A===null?M=R:A.sibling=R,A=R);return e&&N.forEach(function(J){return t(v,J)}),De&&Pi(v,F),M}function T(v,x,_,k){if(typeof _=="object"&&_!==null&&_.type===zo&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case jl:e:{for(var M=_.key,A=x;A!==null;){if(A.key===M){if(M=_.type,M===zo){if(A.tag===7){n(v,A.sibling),x=o(A,_.props.children),x.return=v,v=x;break e}}else if(A.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Rr&&$y(M)===A.type){n(v,A.sibling),x=o(A,_.props),x.ref=Gs(v,A,_),x.return=v,v=x;break e}n(v,A);break}else t(v,A);A=A.sibling}_.type===zo?(x=Ki(_.props.children,v.mode,k,_.key),x.return=v,v=x):(k=xc(_.type,_.key,_.props,null,v.mode,k),k.ref=Gs(v,x,_),k.return=v,v=k)}return u(v);case Ao:e:{for(A=_.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){n(v,x.sibling),x=o(x,_.children||[]),x.return=v,v=x;break e}else{n(v,x);break}else t(v,x);x=x.sibling}x=Wd(_,v.mode,k),x.return=v,v=x}return u(v);case Rr:return A=_._init,T(v,x,A(_._payload),k)}if(ia(_))return $(v,x,_,k);if(Hs(_))return j(v,x,_,k);Rl(v,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,x!==null&&x.tag===6?(n(v,x.sibling),x=o(x,_),x.return=v,v=x):(n(v,x),x=Zd(_,v.mode,k),x.return=v,v=x),u(v)):n(v,x)}return T}var hs=a0(!0),l0=a0(!1),Uc=mi(null),Hc=null,Bo=null,Up=null;function Hp(){Up=Bo=Hc=null}function Zp(e){var t=Uc.current;Ne(Uc),e._currentValue=t}function Sf(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Ko(e,t){Hc=e,Up=Bo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ft=!0),e.firstContext=null)}function dn(e){var t=e._currentValue;if(Up!==e)if(e={context:e,memoizedValue:t,next:null},Bo===null){if(Hc===null)throw Error(W(308));Bo=e,Hc.dependencies={lanes:0,firstContext:e}}else Bo=Bo.next=e;return t}var Mi=null;function Wp(e){Mi===null?Mi=[e]:Mi.push(e)}function c0(e,t,n,i){var o=t.interleaved;return o===null?(n.next=n,Wp(t)):(n.next=o.next,o.next=n),t.interleaved=n,br(e,i)}function br(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ir=!1;function Vp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ii(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ke&2){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,br(e,n)}return o=i.interleaved,o===null?(t.next=t,Wp(i)):(t.next=o.next,o.next=t),i.interleaved=t,br(e,n)}function fc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Pp(e,n)}}function ky(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=u:l=l.next=u,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zc(e,t,n,i){var o=e.updateQueue;Ir=!1;var l=o.firstBaseUpdate,u=o.lastBaseUpdate,h=o.shared.pending;if(h!==null){o.shared.pending=null;var f=h,m=f.next;f.next=null,u===null?l=m:u.next=m,u=f;var w=e.alternate;w!==null&&(w=w.updateQueue,h=w.lastBaseUpdate,h!==u&&(h===null?w.firstBaseUpdate=m:h.next=m,w.lastBaseUpdate=f))}if(l!==null){var y=o.baseState;u=0,w=m=f=null,h=l;do{var S=h.lane,b=h.eventTime;if((i&S)===S){w!==null&&(w=w.next={eventTime:b,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var $=e,j=h;switch(S=t,b=n,j.tag){case 1:if($=j.payload,typeof $=="function"){y=$.call(b,y,S);break e}y=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=j.payload,S=typeof $=="function"?$.call(b,y,S):$,S==null)break e;y=Ue({},y,S);break e;case 2:Ir=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,S=o.effects,S===null?o.effects=[h]:S.push(h))}else b={eventTime:b,lane:S,tag:h.tag,payload:h.payload,callback:h.callback,next:null},w===null?(m=w=b,f=y):w=w.next=b,u|=S;if(h=h.next,h===null){if(h=o.shared.pending,h===null)break;S=h,h=S.next,S.next=null,o.lastBaseUpdate=S,o.shared.pending=null}}while(!0);if(w===null&&(f=y),o.baseState=f,o.firstBaseUpdate=m,o.lastBaseUpdate=w,t=o.shared.interleaved,t!==null){o=t;do u|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);to|=u,e.lanes=u,e.memoizedState=y}}function Ty(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],o=i.callback;if(o!==null){if(i.callback=null,i=n,typeof o!="function")throw Error(W(191,o));o.call(i)}}}var Ya={},Yn=mi(Ya),Ea=mi(Ya),Pa=mi(Ya);function Ri(e){if(e===Ya)throw Error(W(174));return e}function qp(e,t){switch(Me(Pa,t),Me(Ea,e),Me(Yn,Ya),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nf(t,e)}Ne(Yn),Me(Yn,t)}function fs(){Ne(Yn),Ne(Ea),Ne(Pa)}function d0(e){Ri(Pa.current);var t=Ri(Yn.current),n=nf(t,e.type);t!==n&&(Me(Ea,e),Me(Yn,n))}function Gp(e){Ea.current===e&&(Ne(Yn),Ne(Ea))}var Fe=mi(0);function Wc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Dd=[];function Kp(){for(var e=0;e<Dd.length;e++)Dd[e]._workInProgressVersionPrimary=null;Dd.length=0}var pc=jr.ReactCurrentDispatcher,Od=jr.ReactCurrentBatchConfig,eo=0,Be=null,it=null,dt=null,Vc=!1,pa=!1,Aa=0,yC=0;function _t(){throw Error(W(321))}function Qp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ln(e[n],t[n]))return!1;return!0}function Yp(e,t,n,i,o,l){if(eo=l,Be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,pc.current=e===null||e.memoizedState===null?wC:bC,e=n(i,o),pa){l=0;do{if(pa=!1,Aa=0,25<=l)throw Error(W(301));l+=1,dt=it=null,t.updateQueue=null,pc.current=SC,e=n(i,o)}while(pa)}if(pc.current=qc,t=it!==null&&it.next!==null,eo=0,dt=it=Be=null,Vc=!1,t)throw Error(W(300));return e}function Jp(){var e=Aa!==0;return Aa=0,e}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Be.memoizedState=dt=e:dt=dt.next=e,dt}function hn(){if(it===null){var e=Be.alternate;e=e!==null?e.memoizedState:null}else e=it.next;var t=dt===null?Be.memoizedState:dt.next;if(t!==null)dt=t,it=e;else{if(e===null)throw Error(W(310));it=e,e={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},dt===null?Be.memoizedState=dt=e:dt=dt.next=e}return dt}function za(e,t){return typeof t=="function"?t(e):t}function Fd(e){var t=hn(),n=t.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=e;var i=it,o=i.baseQueue,l=n.pending;if(l!==null){if(o!==null){var u=o.next;o.next=l.next,l.next=u}i.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,i=i.baseState;var h=u=null,f=null,m=l;do{var w=m.lane;if((eo&w)===w)f!==null&&(f=f.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),i=m.hasEagerState?m.eagerState:e(i,m.action);else{var y={lane:w,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};f===null?(h=f=y,u=i):f=f.next=y,Be.lanes|=w,to|=w}m=m.next}while(m!==null&&m!==l);f===null?u=i:f.next=h,Ln(i,t.memoizedState)||(Ft=!0),t.memoizedState=i,t.baseState=u,t.baseQueue=f,n.lastRenderedState=i}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Be.lanes|=l,to|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bd(e){var t=hn(),n=t.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=e;var i=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var u=o=o.next;do l=e(l,u.action),u=u.next;while(u!==o);Ln(l,t.memoizedState)||(Ft=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,i]}function h0(){}function f0(e,t){var n=Be,i=hn(),o=t(),l=!Ln(i.memoizedState,o);if(l&&(i.memoizedState=o,Ft=!0),i=i.queue,Xp(g0.bind(null,n,i,e),[e]),i.getSnapshot!==t||l||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,Ma(9,m0.bind(null,n,i,o,t),void 0,null),pt===null)throw Error(W(349));eo&30||p0(n,t,o)}return o}function p0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function m0(e,t,n,i){t.value=n,t.getSnapshot=i,y0(t)&&v0(e)}function g0(e,t,n){return n(function(){y0(t)&&v0(e)})}function y0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ln(e,n)}catch{return!0}}function v0(e){var t=br(e,1);t!==null&&$n(t,e,1,-1)}function Ly(e){var t=Hn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:e},t.queue=e,e=e.dispatch=_C.bind(null,Be,e),[t.memoizedState,e]}function Ma(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function x0(){return hn().memoizedState}function mc(e,t,n,i){var o=Hn();Be.flags|=e,o.memoizedState=Ma(1|t,n,void 0,i===void 0?null:i)}function mu(e,t,n,i){var o=hn();i=i===void 0?null:i;var l=void 0;if(it!==null){var u=it.memoizedState;if(l=u.destroy,i!==null&&Qp(i,u.deps)){o.memoizedState=Ma(t,n,l,i);return}}Be.flags|=e,o.memoizedState=Ma(1|t,n,l,i)}function Ey(e,t){return mc(8390656,8,e,t)}function Xp(e,t){return mu(2048,8,e,t)}function _0(e,t){return mu(4,2,e,t)}function w0(e,t){return mu(4,4,e,t)}function b0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function S0(e,t,n){return n=n!=null?n.concat([e]):null,mu(4,4,b0.bind(null,t,e),n)}function em(){}function j0(e,t){var n=hn();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Qp(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function C0(e,t){var n=hn();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Qp(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function $0(e,t,n){return eo&21?(Ln(n,t)||(n=P_(),Be.lanes|=n,to|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ft=!0),e.memoizedState=n)}function vC(e,t){var n=Pe;Pe=n!==0&&4>n?n:4,e(!0);var i=Od.transition;Od.transition={};try{e(!1),t()}finally{Pe=n,Od.transition=i}}function k0(){return hn().memoizedState}function xC(e,t,n){var i=si(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},T0(e))L0(t,n);else if(n=c0(e,t,n,i),n!==null){var o=Et();$n(n,e,i,o),E0(n,t,i)}}function _C(e,t,n){var i=si(e),o={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(T0(e))L0(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var u=t.lastRenderedState,h=l(u,n);if(o.hasEagerState=!0,o.eagerState=h,Ln(h,u)){var f=t.interleaved;f===null?(o.next=o,Wp(t)):(o.next=f.next,f.next=o),t.interleaved=o;return}}catch{}finally{}n=c0(e,t,o,i),n!==null&&(o=Et(),$n(n,e,i,o),E0(n,t,i))}}function T0(e){var t=e.alternate;return e===Be||t!==null&&t===Be}function L0(e,t){pa=Vc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function E0(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Pp(e,n)}}var qc={readContext:dn,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},wC={readContext:dn,useCallback:function(e,t){return Hn().memoizedState=[e,t===void 0?null:t],e},useContext:dn,useEffect:Ey,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,mc(4194308,4,b0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return mc(4194308,4,e,t)},useInsertionEffect:function(e,t){return mc(4,2,e,t)},useMemo:function(e,t){var n=Hn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=Hn();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=xC.bind(null,Be,e),[i.memoizedState,e]},useRef:function(e){var t=Hn();return e={current:e},t.memoizedState=e},useState:Ly,useDebugValue:em,useDeferredValue:function(e){return Hn().memoizedState=e},useTransition:function(){var e=Ly(!1),t=e[0];return e=vC.bind(null,e[1]),Hn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=Be,o=Hn();if(De){if(n===void 0)throw Error(W(407));n=n()}else{if(n=t(),pt===null)throw Error(W(349));eo&30||p0(i,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ey(g0.bind(null,i,l,e),[e]),i.flags|=2048,Ma(9,m0.bind(null,i,l,n,t),void 0,null),n},useId:function(){var e=Hn(),t=pt.identifierPrefix;if(De){var n=yr,i=gr;n=(i&~(1<<32-Cn(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=Aa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=yC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bC={readContext:dn,useCallback:j0,useContext:dn,useEffect:Xp,useImperativeHandle:S0,useInsertionEffect:_0,useLayoutEffect:w0,useMemo:C0,useReducer:Fd,useRef:x0,useState:function(){return Fd(za)},useDebugValue:em,useDeferredValue:function(e){var t=hn();return $0(t,it.memoizedState,e)},useTransition:function(){var e=Fd(za)[0],t=hn().memoizedState;return[e,t]},useMutableSource:h0,useSyncExternalStore:f0,useId:k0,unstable_isNewReconciler:!1},SC={readContext:dn,useCallback:j0,useContext:dn,useEffect:Xp,useImperativeHandle:S0,useInsertionEffect:_0,useLayoutEffect:w0,useMemo:C0,useReducer:Bd,useRef:x0,useState:function(){return Bd(za)},useDebugValue:em,useDeferredValue:function(e){var t=hn();return it===null?t.memoizedState=e:$0(t,it.memoizedState,e)},useTransition:function(){var e=Bd(za)[0],t=hn().memoizedState;return[e,t]},useMutableSource:h0,useSyncExternalStore:f0,useId:k0,unstable_isNewReconciler:!1};function _n(e,t){if(e&&e.defaultProps){t=Ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function jf(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gu={isMounted:function(e){return(e=e._reactInternals)?co(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Et(),o=si(e),l=vr(i,o);l.payload=t,n!=null&&(l.callback=n),t=ii(e,l,o),t!==null&&($n(t,e,o,i),fc(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Et(),o=si(e),l=vr(i,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ii(e,l,o),t!==null&&($n(t,e,o,i),fc(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Et(),i=si(e),o=vr(n,i);o.tag=2,t!=null&&(o.callback=t),t=ii(e,o,i),t!==null&&($n(t,e,i,n),fc(t,e,i))}};function Py(e,t,n,i,o,l,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,l,u):t.prototype&&t.prototype.isPureReactComponent?!$a(n,i)||!$a(o,l):!0}function P0(e,t,n){var i=!1,o=fi,l=t.contextType;return typeof l=="object"&&l!==null?l=dn(l):(o=Ut(t)?Ji:jt.current,i=t.contextTypes,l=(i=i!=null)?us(e,o):fi),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gu,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ay(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&gu.enqueueReplaceState(t,t.state,null)}function Cf(e,t,n,i){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Vp(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=dn(l):(l=Ut(t)?Ji:jt.current,o.context=us(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(jf(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&gu.enqueueReplaceState(o,o.state,null),Zc(e,n,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ps(e,t){try{var n="",i=t;do n+=Y1(i),i=i.return;while(i);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Ud(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $f(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jC=typeof WeakMap=="function"?WeakMap:Map;function A0(e,t,n){n=vr(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Kc||(Kc=!0,If=i),$f(e,t)},n}function z0(e,t,n){n=vr(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=t.value;n.payload=function(){return i(o)},n.callback=function(){$f(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){$f(e,t),typeof i!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function zy(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new jC;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(n)||(o.add(n),e=DC.bind(null,e,t,n),t.then(e,e))}function My(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ry(e,t,n,i,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vr(-1,1),t.tag=2,ii(n,t,1))),n.lanes|=1),e)}var CC=jr.ReactCurrentOwner,Ft=!1;function Tt(e,t,n,i){t.child=e===null?l0(t,null,n,i):hs(t,e.child,n,i)}function Iy(e,t,n,i,o){n=n.render;var l=t.ref;return Ko(t,o),i=Yp(e,t,n,i,l,o),n=Jp(),e!==null&&!Ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Sr(e,t,o)):(De&&n&&Op(t),t.flags|=1,Tt(e,t,i,o),t.child)}function Ny(e,t,n,i,o){if(e===null){var l=n.type;return typeof l=="function"&&!lm(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,M0(e,t,l,i,o)):(e=xc(n.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var u=l.memoizedProps;if(n=n.compare,n=n!==null?n:$a,n(u,i)&&e.ref===t.ref)return Sr(e,t,o)}return t.flags|=1,e=ai(l,i),e.ref=t.ref,e.return=t,t.child=e}function M0(e,t,n,i,o){if(e!==null){var l=e.memoizedProps;if($a(l,i)&&e.ref===t.ref)if(Ft=!1,t.pendingProps=i=l,(e.lanes&o)!==0)e.flags&131072&&(Ft=!0);else return t.lanes=e.lanes,Sr(e,t,o)}return kf(e,t,n,i,o)}function R0(e,t,n){var i=t.pendingProps,o=i.children,l=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(Ho,Gt),Gt|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(Ho,Gt),Gt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=l!==null?l.baseLanes:n,Me(Ho,Gt),Gt|=i}else l!==null?(i=l.baseLanes|n,t.memoizedState=null):i=n,Me(Ho,Gt),Gt|=i;return Tt(e,t,o,n),t.child}function I0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function kf(e,t,n,i,o){var l=Ut(n)?Ji:jt.current;return l=us(t,l),Ko(t,o),n=Yp(e,t,n,i,l,o),i=Jp(),e!==null&&!Ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Sr(e,t,o)):(De&&i&&Op(t),t.flags|=1,Tt(e,t,n,o),t.child)}function Dy(e,t,n,i,o){if(Ut(n)){var l=!0;Oc(t)}else l=!1;if(Ko(t,o),t.stateNode===null)gc(e,t),P0(t,n,i),Cf(t,n,i,o),i=!0;else if(e===null){var u=t.stateNode,h=t.memoizedProps;u.props=h;var f=u.context,m=n.contextType;typeof m=="object"&&m!==null?m=dn(m):(m=Ut(n)?Ji:jt.current,m=us(t,m));var w=n.getDerivedStateFromProps,y=typeof w=="function"||typeof u.getSnapshotBeforeUpdate=="function";y||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==i||f!==m)&&Ay(t,u,i,m),Ir=!1;var S=t.memoizedState;u.state=S,Zc(t,i,u,o),f=t.memoizedState,h!==i||S!==f||Bt.current||Ir?(typeof w=="function"&&(jf(t,n,w,i),f=t.memoizedState),(h=Ir||Py(t,n,h,i,S,f,m))?(y||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=f),u.props=i,u.state=f,u.context=m,i=h):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{u=t.stateNode,u0(e,t),h=t.memoizedProps,m=t.type===t.elementType?h:_n(t.type,h),u.props=m,y=t.pendingProps,S=u.context,f=n.contextType,typeof f=="object"&&f!==null?f=dn(f):(f=Ut(n)?Ji:jt.current,f=us(t,f));var b=n.getDerivedStateFromProps;(w=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==y||S!==f)&&Ay(t,u,i,f),Ir=!1,S=t.memoizedState,u.state=S,Zc(t,i,u,o);var $=t.memoizedState;h!==y||S!==$||Bt.current||Ir?(typeof b=="function"&&(jf(t,n,b,i),$=t.memoizedState),(m=Ir||Py(t,n,m,i,S,$,f)||!1)?(w||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,$,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,$,f)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=$),u.props=i,u.state=$,u.context=f,i=m):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),i=!1)}return Tf(e,t,n,i,l,o)}function Tf(e,t,n,i,o,l){I0(e,t);var u=(t.flags&128)!==0;if(!i&&!u)return o&&Sy(t,n,!1),Sr(e,t,l);i=t.stateNode,CC.current=t;var h=u&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&u?(t.child=hs(t,e.child,null,l),t.child=hs(t,null,h,l)):Tt(e,t,h,l),t.memoizedState=i.state,o&&Sy(t,n,!0),t.child}function N0(e){var t=e.stateNode;t.pendingContext?by(e,t.pendingContext,t.pendingContext!==t.context):t.context&&by(e,t.context,!1),qp(e,t.containerInfo)}function Oy(e,t,n,i,o){return ds(),Bp(o),t.flags|=256,Tt(e,t,n,i),t.child}var Lf={dehydrated:null,treeContext:null,retryLane:0};function Ef(e){return{baseLanes:e,cachePool:null,transitions:null}}function D0(e,t,n){var i=t.pendingProps,o=Fe.current,l=!1,u=(t.flags&128)!==0,h;if((h=u)||(h=e!==null&&e.memoizedState===null?!1:(o&2)!==0),h?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Me(Fe,o&1),e===null)return bf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(u=i.children,e=i.fallback,l?(i=t.mode,l=t.child,u={mode:"hidden",children:u},!(i&1)&&l!==null?(l.childLanes=0,l.pendingProps=u):l=xu(u,i,0,null),e=Ki(e,i,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ef(n),t.memoizedState=Lf,e):tm(t,u));if(o=e.memoizedState,o!==null&&(h=o.dehydrated,h!==null))return $C(e,t,u,i,h,o,n);if(l){l=i.fallback,u=t.mode,o=e.child,h=o.sibling;var f={mode:"hidden",children:i.children};return!(u&1)&&t.child!==o?(i=t.child,i.childLanes=0,i.pendingProps=f,t.deletions=null):(i=ai(o,f),i.subtreeFlags=o.subtreeFlags&14680064),h!==null?l=ai(h,l):(l=Ki(l,u,n,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,u=e.child.memoizedState,u=u===null?Ef(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},l.memoizedState=u,l.childLanes=e.childLanes&~n,t.memoizedState=Lf,i}return l=e.child,e=l.sibling,i=ai(l,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function tm(e,t){return t=xu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Il(e,t,n,i){return i!==null&&Bp(i),hs(t,e.child,null,n),e=tm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $C(e,t,n,i,o,l,u){if(n)return t.flags&256?(t.flags&=-257,i=Ud(Error(W(422))),Il(e,t,u,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=i.fallback,o=t.mode,i=xu({mode:"visible",children:i.children},o,0,null),l=Ki(l,o,u,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,t.mode&1&&hs(t,e.child,null,u),t.child.memoizedState=Ef(u),t.memoizedState=Lf,l);if(!(t.mode&1))return Il(e,t,u,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var h=i.dgst;return i=h,l=Error(W(419)),i=Ud(l,i,void 0),Il(e,t,u,i)}if(h=(u&e.childLanes)!==0,Ft||h){if(i=pt,i!==null){switch(u&-u){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(i.suspendedLanes|u)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,br(e,o),$n(i,e,o,-1))}return am(),i=Ud(Error(W(421))),Il(e,t,u,i)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=OC.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Kt=ri(o.nextSibling),Qt=t,De=!0,jn=null,e!==null&&(sn[an++]=gr,sn[an++]=yr,sn[an++]=Xi,gr=e.id,yr=e.overflow,Xi=t),t=tm(t,i.children),t.flags|=4096,t)}function Fy(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Sf(e.return,t,n)}function Hd(e,t,n,i,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=i,l.tail=n,l.tailMode=o)}function O0(e,t,n){var i=t.pendingProps,o=i.revealOrder,l=i.tail;if(Tt(e,t,i.children,n),i=Fe.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fy(e,n,t);else if(e.tag===19)Fy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Me(Fe,i),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Wc(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Hd(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Wc(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Hd(t,!0,n,null,l);break;case"together":Hd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Sr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),to|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(W(153));if(t.child!==null){for(e=t.child,n=ai(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ai(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kC(e,t,n){switch(t.tag){case 3:N0(t),ds();break;case 5:d0(t);break;case 1:Ut(t.type)&&Oc(t);break;case 4:qp(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,o=t.memoizedProps.value;Me(Uc,i._currentValue),i._currentValue=o;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Me(Fe,Fe.current&1),t.flags|=128,null):n&t.child.childLanes?D0(e,t,n):(Me(Fe,Fe.current&1),e=Sr(e,t,n),e!==null?e.sibling:null);Me(Fe,Fe.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return O0(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Me(Fe,Fe.current),i)break;return null;case 22:case 23:return t.lanes=0,R0(e,t,n)}return Sr(e,t,n)}var F0,Pf,B0,U0;F0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pf=function(){};B0=function(e,t,n,i){var o=e.memoizedProps;if(o!==i){e=t.stateNode,Ri(Yn.current);var l=null;switch(n){case"input":o=Jh(e,o),i=Jh(e,i),l=[];break;case"select":o=Ue({},o,{value:void 0}),i=Ue({},i,{value:void 0}),l=[];break;case"textarea":o=tf(e,o),i=tf(e,i),l=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Nc)}rf(n,i);var u;n=null;for(m in o)if(!i.hasOwnProperty(m)&&o.hasOwnProperty(m)&&o[m]!=null)if(m==="style"){var h=o[m];for(u in h)h.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(xa.hasOwnProperty(m)?l||(l=[]):(l=l||[]).push(m,null));for(m in i){var f=i[m];if(h=o!=null?o[m]:void 0,i.hasOwnProperty(m)&&f!==h&&(f!=null||h!=null))if(m==="style")if(h){for(u in h)!h.hasOwnProperty(u)||f&&f.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in f)f.hasOwnProperty(u)&&h[u]!==f[u]&&(n||(n={}),n[u]=f[u])}else n||(l||(l=[]),l.push(m,n)),n=f;else m==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,h=h?h.__html:void 0,f!=null&&h!==f&&(l=l||[]).push(m,f)):m==="children"?typeof f!="string"&&typeof f!="number"||(l=l||[]).push(m,""+f):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(xa.hasOwnProperty(m)?(f!=null&&m==="onScroll"&&Re("scroll",e),l||h===f||(l=[])):(l=l||[]).push(m,f))}n&&(l=l||[]).push("style",n);var m=l;(t.updateQueue=m)&&(t.flags|=4)}};U0=function(e,t,n,i){n!==i&&(t.flags|=4)};function Ks(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function wt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function TC(e,t,n){var i=t.pendingProps;switch(Fp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(t),null;case 1:return Ut(t.type)&&Dc(),wt(t),null;case 3:return i=t.stateNode,fs(),Ne(Bt),Ne(jt),Kp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ml(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,jn!==null&&(Of(jn),jn=null))),Pf(e,t),wt(t),null;case 5:Gp(t);var o=Ri(Pa.current);if(n=t.type,e!==null&&t.stateNode!=null)B0(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(W(166));return wt(t),null}if(e=Ri(Yn.current),Ml(t)){i=t.stateNode,n=t.type;var l=t.memoizedProps;switch(i[Gn]=t,i[La]=l,e=(t.mode&1)!==0,n){case"dialog":Re("cancel",i),Re("close",i);break;case"iframe":case"object":case"embed":Re("load",i);break;case"video":case"audio":for(o=0;o<sa.length;o++)Re(sa[o],i);break;case"source":Re("error",i);break;case"img":case"image":case"link":Re("error",i),Re("load",i);break;case"details":Re("toggle",i);break;case"input":Kg(i,l),Re("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!l.multiple},Re("invalid",i);break;case"textarea":Yg(i,l),Re("invalid",i)}rf(n,l),o=null;for(var u in l)if(l.hasOwnProperty(u)){var h=l[u];u==="children"?typeof h=="string"?i.textContent!==h&&(l.suppressHydrationWarning!==!0&&zl(i.textContent,h,e),o=["children",h]):typeof h=="number"&&i.textContent!==""+h&&(l.suppressHydrationWarning!==!0&&zl(i.textContent,h,e),o=["children",""+h]):xa.hasOwnProperty(u)&&h!=null&&u==="onScroll"&&Re("scroll",i)}switch(n){case"input":Cl(i),Qg(i,l,!0);break;case"textarea":Cl(i),Jg(i);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(i.onclick=Nc)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{u=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=g_(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=u.createElement(n,{is:i.is}):(e=u.createElement(n),n==="select"&&(u=e,i.multiple?u.multiple=!0:i.size&&(u.size=i.size))):e=u.createElementNS(e,n),e[Gn]=t,e[La]=i,F0(e,t,!1,!1),t.stateNode=e;e:{switch(u=of(n,i),n){case"dialog":Re("cancel",e),Re("close",e),o=i;break;case"iframe":case"object":case"embed":Re("load",e),o=i;break;case"video":case"audio":for(o=0;o<sa.length;o++)Re(sa[o],e);o=i;break;case"source":Re("error",e),o=i;break;case"img":case"image":case"link":Re("error",e),Re("load",e),o=i;break;case"details":Re("toggle",e),o=i;break;case"input":Kg(e,i),o=Jh(e,i),Re("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=Ue({},i,{value:void 0}),Re("invalid",e);break;case"textarea":Yg(e,i),o=tf(e,i),Re("invalid",e);break;default:o=i}rf(n,o),h=o;for(l in h)if(h.hasOwnProperty(l)){var f=h[l];l==="style"?x_(e,f):l==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&y_(e,f)):l==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&_a(e,f):typeof f=="number"&&_a(e,""+f):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(xa.hasOwnProperty(l)?f!=null&&l==="onScroll"&&Re("scroll",e):f!=null&&Cp(e,l,f,u))}switch(n){case"input":Cl(e),Qg(e,i,!1);break;case"textarea":Cl(e),Jg(e);break;case"option":i.value!=null&&e.setAttribute("value",""+hi(i.value));break;case"select":e.multiple=!!i.multiple,l=i.value,l!=null?Wo(e,!!i.multiple,l,!1):i.defaultValue!=null&&Wo(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Nc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return wt(t),null;case 6:if(e&&t.stateNode!=null)U0(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(W(166));if(n=Ri(Pa.current),Ri(Yn.current),Ml(t)){if(i=t.stateNode,n=t.memoizedProps,i[Gn]=t,(l=i.nodeValue!==n)&&(e=Qt,e!==null))switch(e.tag){case 3:zl(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zl(i.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Gn]=t,t.stateNode=i}return wt(t),null;case 13:if(Ne(Fe),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(De&&Kt!==null&&t.mode&1&&!(t.flags&128))s0(),ds(),t.flags|=98560,l=!1;else if(l=Ml(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(W(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(W(317));l[Gn]=t}else ds(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;wt(t),l=!1}else jn!==null&&(Of(jn),jn=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||Fe.current&1?at===0&&(at=3):am())),t.updateQueue!==null&&(t.flags|=4),wt(t),null);case 4:return fs(),Pf(e,t),e===null&&ka(t.stateNode.containerInfo),wt(t),null;case 10:return Zp(t.type._context),wt(t),null;case 17:return Ut(t.type)&&Dc(),wt(t),null;case 19:if(Ne(Fe),l=t.memoizedState,l===null)return wt(t),null;if(i=(t.flags&128)!==0,u=l.rendering,u===null)if(i)Ks(l,!1);else{if(at!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(u=Wc(e),u!==null){for(t.flags|=128,Ks(l,!1),i=u.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)l=n,e=i,l.flags&=14680066,u=l.alternate,u===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=u.childLanes,l.lanes=u.lanes,l.child=u.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=u.memoizedProps,l.memoizedState=u.memoizedState,l.updateQueue=u.updateQueue,l.type=u.type,e=u.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Me(Fe,Fe.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ge()>ms&&(t.flags|=128,i=!0,Ks(l,!1),t.lanes=4194304)}else{if(!i)if(e=Wc(u),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ks(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!De)return wt(t),null}else 2*Ge()-l.renderingStartTime>ms&&n!==1073741824&&(t.flags|=128,i=!0,Ks(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(n=l.last,n!==null?n.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ge(),t.sibling=null,n=Fe.current,Me(Fe,i?n&1|2:n&1),t):(wt(t),null);case 22:case 23:return sm(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Gt&1073741824&&(wt(t),t.subtreeFlags&6&&(t.flags|=8192)):wt(t),null;case 24:return null;case 25:return null}throw Error(W(156,t.tag))}function LC(e,t){switch(Fp(t),t.tag){case 1:return Ut(t.type)&&Dc(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fs(),Ne(Bt),Ne(jt),Kp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gp(t),null;case 13:if(Ne(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(W(340));ds()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(Fe),null;case 4:return fs(),null;case 10:return Zp(t.type._context),null;case 22:case 23:return sm(),null;case 24:return null;default:return null}}var Nl=!1,bt=!1,EC=typeof WeakSet=="function"?WeakSet:Set,ee=null;function Uo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ze(e,t,i)}else n.current=null}function Af(e,t,n){try{n()}catch(i){Ze(e,t,i)}}var By=!1;function PC(e,t){if(mf=Mc,e=q_(),Dp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var u=0,h=-1,f=-1,m=0,w=0,y=e,S=null;t:for(;;){for(var b;y!==n||o!==0&&y.nodeType!==3||(h=u+o),y!==l||i!==0&&y.nodeType!==3||(f=u+i),y.nodeType===3&&(u+=y.nodeValue.length),(b=y.firstChild)!==null;)S=y,y=b;for(;;){if(y===e)break t;if(S===n&&++m===o&&(h=u),S===l&&++w===i&&(f=u),(b=y.nextSibling)!==null)break;y=S,S=y.parentNode}y=b}n=h===-1||f===-1?null:{start:h,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(gf={focusedElem:e,selectionRange:n},Mc=!1,ee=t;ee!==null;)if(t=ee,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ee=e;else for(;ee!==null;){t=ee;try{var $=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if($!==null){var j=$.memoizedProps,T=$.memoizedState,v=t.stateNode,x=v.getSnapshotBeforeUpdate(t.elementType===t.type?j:_n(t.type,j),T);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var _=t.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(k){Ze(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,ee=e;break}ee=t.return}return $=By,By=!1,$}function ma(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Af(t,n,l)}o=o.next}while(o!==i)}}function yu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function zf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function H0(e){var t=e.alternate;t!==null&&(e.alternate=null,H0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Gn],delete t[La],delete t[xf],delete t[fC],delete t[pC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Z0(e){return e.tag===5||e.tag===3||e.tag===4}function Uy(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Z0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mf(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Nc));else if(i!==4&&(e=e.child,e!==null))for(Mf(e,t,n),e=e.sibling;e!==null;)Mf(e,t,n),e=e.sibling}function Rf(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Rf(e,t,n),e=e.sibling;e!==null;)Rf(e,t,n),e=e.sibling}var gt=null,Sn=!1;function Lr(e,t,n){for(n=n.child;n!==null;)W0(e,t,n),n=n.sibling}function W0(e,t,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(cu,n)}catch{}switch(n.tag){case 5:bt||Uo(n,t);case 6:var i=gt,o=Sn;gt=null,Lr(e,t,n),gt=i,Sn=o,gt!==null&&(Sn?(e=gt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):gt.removeChild(n.stateNode));break;case 18:gt!==null&&(Sn?(e=gt,n=n.stateNode,e.nodeType===8?Id(e.parentNode,n):e.nodeType===1&&Id(e,n),ja(e)):Id(gt,n.stateNode));break;case 4:i=gt,o=Sn,gt=n.stateNode.containerInfo,Sn=!0,Lr(e,t,n),gt=i,Sn=o;break;case 0:case 11:case 14:case 15:if(!bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var l=o,u=l.destroy;l=l.tag,u!==void 0&&(l&2||l&4)&&Af(n,t,u),o=o.next}while(o!==i)}Lr(e,t,n);break;case 1:if(!bt&&(Uo(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(h){Ze(n,t,h)}Lr(e,t,n);break;case 21:Lr(e,t,n);break;case 22:n.mode&1?(bt=(i=bt)||n.memoizedState!==null,Lr(e,t,n),bt=i):Lr(e,t,n);break;default:Lr(e,t,n)}}function Hy(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new EC),t.forEach(function(i){var o=FC.bind(null,e,i);n.has(i)||(n.add(i),i.then(o,o))})}}function yn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];try{var l=e,u=t,h=u;e:for(;h!==null;){switch(h.tag){case 5:gt=h.stateNode,Sn=!1;break e;case 3:gt=h.stateNode.containerInfo,Sn=!0;break e;case 4:gt=h.stateNode.containerInfo,Sn=!0;break e}h=h.return}if(gt===null)throw Error(W(160));W0(l,u,o),gt=null,Sn=!1;var f=o.alternate;f!==null&&(f.return=null),o.return=null}catch(m){Ze(o,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)V0(t,e),t=t.sibling}function V0(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yn(t,e),Nn(e),i&4){try{ma(3,e,e.return),yu(3,e)}catch(j){Ze(e,e.return,j)}try{ma(5,e,e.return)}catch(j){Ze(e,e.return,j)}}break;case 1:yn(t,e),Nn(e),i&512&&n!==null&&Uo(n,n.return);break;case 5:if(yn(t,e),Nn(e),i&512&&n!==null&&Uo(n,n.return),e.flags&32){var o=e.stateNode;try{_a(o,"")}catch(j){Ze(e,e.return,j)}}if(i&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,u=n!==null?n.memoizedProps:l,h=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{h==="input"&&l.type==="radio"&&l.name!=null&&p_(o,l),of(h,u);var m=of(h,l);for(u=0;u<f.length;u+=2){var w=f[u],y=f[u+1];w==="style"?x_(o,y):w==="dangerouslySetInnerHTML"?y_(o,y):w==="children"?_a(o,y):Cp(o,w,y,m)}switch(h){case"input":Xh(o,l);break;case"textarea":m_(o,l);break;case"select":var S=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var b=l.value;b!=null?Wo(o,!!l.multiple,b,!1):S!==!!l.multiple&&(l.defaultValue!=null?Wo(o,!!l.multiple,l.defaultValue,!0):Wo(o,!!l.multiple,l.multiple?[]:"",!1))}o[La]=l}catch(j){Ze(e,e.return,j)}}break;case 6:if(yn(t,e),Nn(e),i&4){if(e.stateNode===null)throw Error(W(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(j){Ze(e,e.return,j)}}break;case 3:if(yn(t,e),Nn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ja(t.containerInfo)}catch(j){Ze(e,e.return,j)}break;case 4:yn(t,e),Nn(e);break;case 13:yn(t,e),Nn(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(im=Ge())),i&4&&Hy(e);break;case 22:if(w=n!==null&&n.memoizedState!==null,e.mode&1?(bt=(m=bt)||w,yn(t,e),bt=m):yn(t,e),Nn(e),i&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!w&&e.mode&1)for(ee=e,w=e.child;w!==null;){for(y=ee=w;ee!==null;){switch(S=ee,b=S.child,S.tag){case 0:case 11:case 14:case 15:ma(4,S,S.return);break;case 1:Uo(S,S.return);var $=S.stateNode;if(typeof $.componentWillUnmount=="function"){i=S,n=S.return;try{t=i,$.props=t.memoizedProps,$.state=t.memoizedState,$.componentWillUnmount()}catch(j){Ze(i,n,j)}}break;case 5:Uo(S,S.return);break;case 22:if(S.memoizedState!==null){Wy(y);continue}}b!==null?(b.return=S,ee=b):Wy(y)}w=w.sibling}e:for(w=null,y=e;;){if(y.tag===5){if(w===null){w=y;try{o=y.stateNode,m?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(h=y.stateNode,f=y.memoizedProps.style,u=f!=null&&f.hasOwnProperty("display")?f.display:null,h.style.display=v_("display",u))}catch(j){Ze(e,e.return,j)}}}else if(y.tag===6){if(w===null)try{y.stateNode.nodeValue=m?"":y.memoizedProps}catch(j){Ze(e,e.return,j)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;w===y&&(w=null),y=y.return}w===y&&(w=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:yn(t,e),Nn(e),i&4&&Hy(e);break;case 21:break;default:yn(t,e),Nn(e)}}function Nn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Z0(n)){var i=n;break e}n=n.return}throw Error(W(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(_a(o,""),i.flags&=-33);var l=Uy(e);Rf(e,l,o);break;case 3:case 4:var u=i.stateNode.containerInfo,h=Uy(e);Mf(e,h,u);break;default:throw Error(W(161))}}catch(f){Ze(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function AC(e,t,n){ee=e,q0(e)}function q0(e,t,n){for(var i=(e.mode&1)!==0;ee!==null;){var o=ee,l=o.child;if(o.tag===22&&i){var u=o.memoizedState!==null||Nl;if(!u){var h=o.alternate,f=h!==null&&h.memoizedState!==null||bt;h=Nl;var m=bt;if(Nl=u,(bt=f)&&!m)for(ee=o;ee!==null;)u=ee,f=u.child,u.tag===22&&u.memoizedState!==null?Vy(o):f!==null?(f.return=u,ee=f):Vy(o);for(;l!==null;)ee=l,q0(l),l=l.sibling;ee=o,Nl=h,bt=m}Zy(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,ee=l):Zy(e)}}function Zy(e){for(;ee!==null;){var t=ee;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:bt||yu(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!bt)if(n===null)i.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:_n(t.type,n.memoizedProps);i.componentDidUpdate(o,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ty(t,l,i);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ty(t,u,n)}break;case 5:var h=t.stateNode;if(n===null&&t.flags&4){n=h;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var w=m.memoizedState;if(w!==null){var y=w.dehydrated;y!==null&&ja(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}bt||t.flags&512&&zf(t)}catch(S){Ze(t,t.return,S)}}if(t===e){ee=null;break}if(n=t.sibling,n!==null){n.return=t.return,ee=n;break}ee=t.return}}function Wy(e){for(;ee!==null;){var t=ee;if(t===e){ee=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ee=n;break}ee=t.return}}function Vy(e){for(;ee!==null;){var t=ee;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yu(4,t)}catch(f){Ze(t,n,f)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var o=t.return;try{i.componentDidMount()}catch(f){Ze(t,o,f)}}var l=t.return;try{zf(t)}catch(f){Ze(t,l,f)}break;case 5:var u=t.return;try{zf(t)}catch(f){Ze(t,u,f)}}}catch(f){Ze(t,t.return,f)}if(t===e){ee=null;break}var h=t.sibling;if(h!==null){h.return=t.return,ee=h;break}ee=t.return}}var zC=Math.ceil,Gc=jr.ReactCurrentDispatcher,nm=jr.ReactCurrentOwner,un=jr.ReactCurrentBatchConfig,ke=0,pt=null,tt=null,yt=0,Gt=0,Ho=mi(0),at=0,Ra=null,to=0,vu=0,rm=0,ga=null,Ot=null,im=0,ms=1/0,cr=null,Kc=!1,If=null,oi=null,Dl=!1,Jr=null,Qc=0,ya=0,Nf=null,yc=-1,vc=0;function Et(){return ke&6?Ge():yc!==-1?yc:yc=Ge()}function si(e){return e.mode&1?ke&2&&yt!==0?yt&-yt:gC.transition!==null?(vc===0&&(vc=P_()),vc):(e=Pe,e!==0||(e=window.event,e=e===void 0?16:D_(e.type)),e):1}function $n(e,t,n,i){if(50<ya)throw ya=0,Nf=null,Error(W(185));Ga(e,n,i),(!(ke&2)||e!==pt)&&(e===pt&&(!(ke&2)&&(vu|=n),at===4&&Dr(e,yt)),Ht(e,i),n===1&&ke===0&&!(t.mode&1)&&(ms=Ge()+500,pu&&gi()))}function Ht(e,t){var n=e.callbackNode;gj(e,t);var i=zc(e,e===pt?yt:0);if(i===0)n!==null&&ty(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&ty(n),t===1)e.tag===0?mC(qy.bind(null,e)):r0(qy.bind(null,e)),dC(function(){!(ke&6)&&gi()}),n=null;else{switch(A_(i)){case 1:n=Ep;break;case 4:n=L_;break;case 16:n=Ac;break;case 536870912:n=E_;break;default:n=Ac}n=tw(n,G0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function G0(e,t){if(yc=-1,vc=0,ke&6)throw Error(W(327));var n=e.callbackNode;if(Qo()&&e.callbackNode!==n)return null;var i=zc(e,e===pt?yt:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Yc(e,i);else{t=i;var o=ke;ke|=2;var l=Q0();(pt!==e||yt!==t)&&(cr=null,ms=Ge()+500,Gi(e,t));do try{IC();break}catch(h){K0(e,h)}while(!0);Hp(),Gc.current=l,ke=o,tt!==null?t=0:(pt=null,yt=0,t=at)}if(t!==0){if(t===2&&(o=uf(e),o!==0&&(i=o,t=Df(e,o))),t===1)throw n=Ra,Gi(e,0),Dr(e,i),Ht(e,Ge()),n;if(t===6)Dr(e,i);else{if(o=e.current.alternate,!(i&30)&&!MC(o)&&(t=Yc(e,i),t===2&&(l=uf(e),l!==0&&(i=l,t=Df(e,l))),t===1))throw n=Ra,Gi(e,0),Dr(e,i),Ht(e,Ge()),n;switch(e.finishedWork=o,e.finishedLanes=i,t){case 0:case 1:throw Error(W(345));case 2:Ai(e,Ot,cr);break;case 3:if(Dr(e,i),(i&130023424)===i&&(t=im+500-Ge(),10<t)){if(zc(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){Et(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=vf(Ai.bind(null,e,Ot,cr),t);break}Ai(e,Ot,cr);break;case 4:if(Dr(e,i),(i&4194240)===i)break;for(t=e.eventTimes,o=-1;0<i;){var u=31-Cn(i);l=1<<u,u=t[u],u>o&&(o=u),i&=~l}if(i=o,i=Ge()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zC(i/1960))-i,10<i){e.timeoutHandle=vf(Ai.bind(null,e,Ot,cr),i);break}Ai(e,Ot,cr);break;case 5:Ai(e,Ot,cr);break;default:throw Error(W(329))}}}return Ht(e,Ge()),e.callbackNode===n?G0.bind(null,e):null}function Df(e,t){var n=ga;return e.current.memoizedState.isDehydrated&&(Gi(e,t).flags|=256),e=Yc(e,t),e!==2&&(t=Ot,Ot=n,t!==null&&Of(t)),e}function Of(e){Ot===null?Ot=e:Ot.push.apply(Ot,e)}function MC(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var o=n[i],l=o.getSnapshot;o=o.value;try{if(!Ln(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dr(e,t){for(t&=~rm,t&=~vu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Cn(t),i=1<<n;e[n]=-1,t&=~i}}function qy(e){if(ke&6)throw Error(W(327));Qo();var t=zc(e,0);if(!(t&1))return Ht(e,Ge()),null;var n=Yc(e,t);if(e.tag!==0&&n===2){var i=uf(e);i!==0&&(t=i,n=Df(e,i))}if(n===1)throw n=Ra,Gi(e,0),Dr(e,t),Ht(e,Ge()),n;if(n===6)throw Error(W(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ai(e,Ot,cr),Ht(e,Ge()),null}function om(e,t){var n=ke;ke|=1;try{return e(t)}finally{ke=n,ke===0&&(ms=Ge()+500,pu&&gi())}}function no(e){Jr!==null&&Jr.tag===0&&!(ke&6)&&Qo();var t=ke;ke|=1;var n=un.transition,i=Pe;try{if(un.transition=null,Pe=1,e)return e()}finally{Pe=i,un.transition=n,ke=t,!(ke&6)&&gi()}}function sm(){Gt=Ho.current,Ne(Ho)}function Gi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,uC(n)),tt!==null)for(n=tt.return;n!==null;){var i=n;switch(Fp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Dc();break;case 3:fs(),Ne(Bt),Ne(jt),Kp();break;case 5:Gp(i);break;case 4:fs();break;case 13:Ne(Fe);break;case 19:Ne(Fe);break;case 10:Zp(i.type._context);break;case 22:case 23:sm()}n=n.return}if(pt=e,tt=e=ai(e.current,null),yt=Gt=t,at=0,Ra=null,rm=vu=to=0,Ot=ga=null,Mi!==null){for(t=0;t<Mi.length;t++)if(n=Mi[t],i=n.interleaved,i!==null){n.interleaved=null;var o=i.next,l=n.pending;if(l!==null){var u=l.next;l.next=o,i.next=u}n.pending=i}Mi=null}return e}function K0(e,t){do{var n=tt;try{if(Hp(),pc.current=qc,Vc){for(var i=Be.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}Vc=!1}if(eo=0,dt=it=Be=null,pa=!1,Aa=0,nm.current=null,n===null||n.return===null){at=1,Ra=t,tt=null;break}e:{var l=e,u=n.return,h=n,f=t;if(t=yt,h.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var m=f,w=h,y=w.tag;if(!(w.mode&1)&&(y===0||y===11||y===15)){var S=w.alternate;S?(w.updateQueue=S.updateQueue,w.memoizedState=S.memoizedState,w.lanes=S.lanes):(w.updateQueue=null,w.memoizedState=null)}var b=My(u);if(b!==null){b.flags&=-257,Ry(b,u,h,l,t),b.mode&1&&zy(l,m,t),t=b,f=m;var $=t.updateQueue;if($===null){var j=new Set;j.add(f),t.updateQueue=j}else $.add(f);break e}else{if(!(t&1)){zy(l,m,t),am();break e}f=Error(W(426))}}else if(De&&h.mode&1){var T=My(u);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Ry(T,u,h,l,t),Bp(ps(f,h));break e}}l=f=ps(f,h),at!==4&&(at=2),ga===null?ga=[l]:ga.push(l),l=u;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var v=A0(l,f,t);ky(l,v);break e;case 1:h=f;var x=l.type,_=l.stateNode;if(!(l.flags&128)&&(typeof x.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(oi===null||!oi.has(_)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=z0(l,h,t);ky(l,k);break e}}l=l.return}while(l!==null)}J0(n)}catch(M){t=M,tt===n&&n!==null&&(tt=n=n.return);continue}break}while(!0)}function Q0(){var e=Gc.current;return Gc.current=qc,e===null?qc:e}function am(){(at===0||at===3||at===2)&&(at=4),pt===null||!(to&268435455)&&!(vu&268435455)||Dr(pt,yt)}function Yc(e,t){var n=ke;ke|=2;var i=Q0();(pt!==e||yt!==t)&&(cr=null,Gi(e,t));do try{RC();break}catch(o){K0(e,o)}while(!0);if(Hp(),ke=n,Gc.current=i,tt!==null)throw Error(W(261));return pt=null,yt=0,at}function RC(){for(;tt!==null;)Y0(tt)}function IC(){for(;tt!==null&&!aj();)Y0(tt)}function Y0(e){var t=ew(e.alternate,e,Gt);e.memoizedProps=e.pendingProps,t===null?J0(e):tt=t,nm.current=null}function J0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=LC(n,t),n!==null){n.flags&=32767,tt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{at=6,tt=null;return}}else if(n=TC(n,t,Gt),n!==null){tt=n;return}if(t=t.sibling,t!==null){tt=t;return}tt=t=e}while(t!==null);at===0&&(at=5)}function Ai(e,t,n){var i=Pe,o=un.transition;try{un.transition=null,Pe=1,NC(e,t,n,i)}finally{un.transition=o,Pe=i}return null}function NC(e,t,n,i){do Qo();while(Jr!==null);if(ke&6)throw Error(W(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(W(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(yj(e,l),e===pt&&(tt=pt=null,yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Dl||(Dl=!0,tw(Ac,function(){return Qo(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=un.transition,un.transition=null;var u=Pe;Pe=1;var h=ke;ke|=4,nm.current=null,PC(e,n),V0(n,e),rC(gf),Mc=!!mf,gf=mf=null,e.current=n,AC(n),lj(),ke=h,Pe=u,un.transition=l}else e.current=n;if(Dl&&(Dl=!1,Jr=e,Qc=o),l=e.pendingLanes,l===0&&(oi=null),dj(n.stateNode),Ht(e,Ge()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],i(o.value,{componentStack:o.stack,digest:o.digest});if(Kc)throw Kc=!1,e=If,If=null,e;return Qc&1&&e.tag!==0&&Qo(),l=e.pendingLanes,l&1?e===Nf?ya++:(ya=0,Nf=e):ya=0,gi(),null}function Qo(){if(Jr!==null){var e=A_(Qc),t=un.transition,n=Pe;try{if(un.transition=null,Pe=16>e?16:e,Jr===null)var i=!1;else{if(e=Jr,Jr=null,Qc=0,ke&6)throw Error(W(331));var o=ke;for(ke|=4,ee=e.current;ee!==null;){var l=ee,u=l.child;if(ee.flags&16){var h=l.deletions;if(h!==null){for(var f=0;f<h.length;f++){var m=h[f];for(ee=m;ee!==null;){var w=ee;switch(w.tag){case 0:case 11:case 15:ma(8,w,l)}var y=w.child;if(y!==null)y.return=w,ee=y;else for(;ee!==null;){w=ee;var S=w.sibling,b=w.return;if(H0(w),w===m){ee=null;break}if(S!==null){S.return=b,ee=S;break}ee=b}}}var $=l.alternate;if($!==null){var j=$.child;if(j!==null){$.child=null;do{var T=j.sibling;j.sibling=null,j=T}while(j!==null)}}ee=l}}if(l.subtreeFlags&2064&&u!==null)u.return=l,ee=u;else e:for(;ee!==null;){if(l=ee,l.flags&2048)switch(l.tag){case 0:case 11:case 15:ma(9,l,l.return)}var v=l.sibling;if(v!==null){v.return=l.return,ee=v;break e}ee=l.return}}var x=e.current;for(ee=x;ee!==null;){u=ee;var _=u.child;if(u.subtreeFlags&2064&&_!==null)_.return=u,ee=_;else e:for(u=x;ee!==null;){if(h=ee,h.flags&2048)try{switch(h.tag){case 0:case 11:case 15:yu(9,h)}}catch(M){Ze(h,h.return,M)}if(h===u){ee=null;break e}var k=h.sibling;if(k!==null){k.return=h.return,ee=k;break e}ee=h.return}}if(ke=o,gi(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(cu,e)}catch{}i=!0}return i}finally{Pe=n,un.transition=t}}return!1}function Gy(e,t,n){t=ps(n,t),t=A0(e,t,1),e=ii(e,t,1),t=Et(),e!==null&&(Ga(e,1,t),Ht(e,t))}function Ze(e,t,n){if(e.tag===3)Gy(e,e,n);else for(;t!==null;){if(t.tag===3){Gy(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(oi===null||!oi.has(i))){e=ps(n,e),e=z0(t,e,1),t=ii(t,e,1),e=Et(),t!==null&&(Ga(t,1,e),Ht(t,e));break}}t=t.return}}function DC(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=Et(),e.pingedLanes|=e.suspendedLanes&n,pt===e&&(yt&n)===n&&(at===4||at===3&&(yt&130023424)===yt&&500>Ge()-im?Gi(e,0):rm|=n),Ht(e,t)}function X0(e,t){t===0&&(e.mode&1?(t=Tl,Tl<<=1,!(Tl&130023424)&&(Tl=4194304)):t=1);var n=Et();e=br(e,t),e!==null&&(Ga(e,t,n),Ht(e,n))}function OC(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),X0(e,n)}function FC(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(W(314))}i!==null&&i.delete(t),X0(e,n)}var ew;ew=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Bt.current)Ft=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ft=!1,kC(e,t,n);Ft=!!(e.flags&131072)}else Ft=!1,De&&t.flags&1048576&&i0(t,Bc,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;gc(e,t),e=t.pendingProps;var o=us(t,jt.current);Ko(t,n),o=Yp(null,t,i,e,o,n);var l=Jp();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ut(i)?(l=!0,Oc(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Vp(t),o.updater=gu,t.stateNode=o,o._reactInternals=t,Cf(t,i,e,n),t=Tf(null,t,i,!0,l,n)):(t.tag=0,De&&l&&Op(t),Tt(null,t,o,n),t=t.child),t;case 16:i=t.elementType;e:{switch(gc(e,t),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=UC(i),e=_n(i,e),o){case 0:t=kf(null,t,i,e,n);break e;case 1:t=Dy(null,t,i,e,n);break e;case 11:t=Iy(null,t,i,e,n);break e;case 14:t=Ny(null,t,i,_n(i.type,e),n);break e}throw Error(W(306,i,""))}return t;case 0:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:_n(i,o),kf(e,t,i,o,n);case 1:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:_n(i,o),Dy(e,t,i,o,n);case 3:e:{if(N0(t),e===null)throw Error(W(387));i=t.pendingProps,l=t.memoizedState,o=l.element,u0(e,t),Zc(t,i,null,n);var u=t.memoizedState;if(i=u.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=ps(Error(W(423)),t),t=Oy(e,t,i,n,o);break e}else if(i!==o){o=ps(Error(W(424)),t),t=Oy(e,t,i,n,o);break e}else for(Kt=ri(t.stateNode.containerInfo.firstChild),Qt=t,De=!0,jn=null,n=l0(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ds(),i===o){t=Sr(e,t,n);break e}Tt(e,t,i,n)}t=t.child}return t;case 5:return d0(t),e===null&&bf(t),i=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,u=o.children,yf(i,o)?u=null:l!==null&&yf(i,l)&&(t.flags|=32),I0(e,t),Tt(e,t,u,n),t.child;case 6:return e===null&&bf(t),null;case 13:return D0(e,t,n);case 4:return qp(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=hs(t,null,i,n):Tt(e,t,i,n),t.child;case 11:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:_n(i,o),Iy(e,t,i,o,n);case 7:return Tt(e,t,t.pendingProps,n),t.child;case 8:return Tt(e,t,t.pendingProps.children,n),t.child;case 12:return Tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,o=t.pendingProps,l=t.memoizedProps,u=o.value,Me(Uc,i._currentValue),i._currentValue=u,l!==null)if(Ln(l.value,u)){if(l.children===o.children&&!Bt.current){t=Sr(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var h=l.dependencies;if(h!==null){u=l.child;for(var f=h.firstContext;f!==null;){if(f.context===i){if(l.tag===1){f=vr(-1,n&-n),f.tag=2;var m=l.updateQueue;if(m!==null){m=m.shared;var w=m.pending;w===null?f.next=f:(f.next=w.next,w.next=f),m.pending=f}}l.lanes|=n,f=l.alternate,f!==null&&(f.lanes|=n),Sf(l.return,n,t),h.lanes|=n;break}f=f.next}}else if(l.tag===10)u=l.type===t.type?null:l.child;else if(l.tag===18){if(u=l.return,u===null)throw Error(W(341));u.lanes|=n,h=u.alternate,h!==null&&(h.lanes|=n),Sf(u,n,t),u=l.sibling}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===t){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}Tt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps.children,Ko(t,n),o=dn(o),i=i(o),t.flags|=1,Tt(e,t,i,n),t.child;case 14:return i=t.type,o=_n(i,t.pendingProps),o=_n(i.type,o),Ny(e,t,i,o,n);case 15:return M0(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:_n(i,o),gc(e,t),t.tag=1,Ut(i)?(e=!0,Oc(t)):e=!1,Ko(t,n),P0(t,i,o),Cf(t,i,o,n),Tf(null,t,i,!0,e,n);case 19:return O0(e,t,n);case 22:return R0(e,t,n)}throw Error(W(156,t.tag))};function tw(e,t){return T_(e,t)}function BC(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(e,t,n,i){return new BC(e,t,n,i)}function lm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function UC(e){if(typeof e=="function")return lm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kp)return 11;if(e===Tp)return 14}return 2}function ai(e,t){var n=e.alternate;return n===null?(n=ln(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xc(e,t,n,i,o,l){var u=2;if(i=e,typeof e=="function")lm(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case zo:return Ki(n.children,o,l,t);case $p:u=8,o|=8;break;case Gh:return e=ln(12,n,t,o|2),e.elementType=Gh,e.lanes=l,e;case Kh:return e=ln(13,n,t,o),e.elementType=Kh,e.lanes=l,e;case Qh:return e=ln(19,n,t,o),e.elementType=Qh,e.lanes=l,e;case d_:return xu(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case c_:u=10;break e;case u_:u=9;break e;case kp:u=11;break e;case Tp:u=14;break e;case Rr:u=16,i=null;break e}throw Error(W(130,e==null?e:typeof e,""))}return t=ln(u,n,t,o),t.elementType=e,t.type=i,t.lanes=l,t}function Ki(e,t,n,i){return e=ln(7,e,i,t),e.lanes=n,e}function xu(e,t,n,i){return e=ln(22,e,i,t),e.elementType=d_,e.lanes=n,e.stateNode={isHidden:!1},e}function Zd(e,t,n){return e=ln(6,e,null,t),e.lanes=n,e}function Wd(e,t,n){return t=ln(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function HC(e,t,n,i,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cd(0),this.expirationTimes=Cd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cd(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function cm(e,t,n,i,o,l,u,h,f){return e=new HC(e,t,n,h,f),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ln(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vp(l),e}function ZC(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ao,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function nw(e){if(!e)return fi;e=e._reactInternals;e:{if(co(e)!==e||e.tag!==1)throw Error(W(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(W(171))}if(e.tag===1){var n=e.type;if(Ut(n))return n0(e,n,t)}return t}function rw(e,t,n,i,o,l,u,h,f){return e=cm(n,i,!0,e,o,l,u,h,f),e.context=nw(null),n=e.current,i=Et(),o=si(n),l=vr(i,o),l.callback=t??null,ii(n,l,o),e.current.lanes=o,Ga(e,o,i),Ht(e,i),e}function _u(e,t,n,i){var o=t.current,l=Et(),u=si(o);return n=nw(n),t.context===null?t.context=n:t.pendingContext=n,t=vr(l,u),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=ii(o,t,u),e!==null&&($n(e,o,u,l),fc(e,o,u)),u}function Jc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ky(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function um(e,t){Ky(e,t),(e=e.alternate)&&Ky(e,t)}function WC(){return null}var iw=typeof reportError=="function"?reportError:function(e){console.error(e)};function dm(e){this._internalRoot=e}wu.prototype.render=dm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(W(409));_u(e,t,null,null)};wu.prototype.unmount=dm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;no(function(){_u(null,e,null,null)}),t[wr]=null}};function wu(e){this._internalRoot=e}wu.prototype.unstable_scheduleHydration=function(e){if(e){var t=R_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nr.length&&t!==0&&t<Nr[n].priority;n++);Nr.splice(n,0,e),n===0&&N_(e)}};function hm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qy(){}function VC(e,t,n,i,o){if(o){if(typeof i=="function"){var l=i;i=function(){var m=Jc(u);l.call(m)}}var u=rw(t,i,e,0,null,!1,!1,"",Qy);return e._reactRootContainer=u,e[wr]=u.current,ka(e.nodeType===8?e.parentNode:e),no(),u}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var h=i;i=function(){var m=Jc(f);h.call(m)}}var f=cm(e,0,!1,null,null,!1,!1,"",Qy);return e._reactRootContainer=f,e[wr]=f.current,ka(e.nodeType===8?e.parentNode:e),no(function(){_u(t,f,n,i)}),f}function Su(e,t,n,i,o){var l=n._reactRootContainer;if(l){var u=l;if(typeof o=="function"){var h=o;o=function(){var f=Jc(u);h.call(f)}}_u(t,u,e,o)}else u=VC(n,t,e,o,i);return Jc(u)}z_=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=oa(t.pendingLanes);n!==0&&(Pp(t,n|1),Ht(t,Ge()),!(ke&6)&&(ms=Ge()+500,gi()))}break;case 13:no(function(){var i=br(e,1);if(i!==null){var o=Et();$n(i,e,1,o)}}),um(e,1)}};Ap=function(e){if(e.tag===13){var t=br(e,134217728);if(t!==null){var n=Et();$n(t,e,134217728,n)}um(e,134217728)}};M_=function(e){if(e.tag===13){var t=si(e),n=br(e,t);if(n!==null){var i=Et();$n(n,e,t,i)}um(e,t)}};R_=function(){return Pe};I_=function(e,t){var n=Pe;try{return Pe=e,t()}finally{Pe=n}};af=function(e,t,n){switch(t){case"input":if(Xh(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var o=fu(i);if(!o)throw Error(W(90));f_(i),Xh(i,o)}}}break;case"textarea":m_(e,n);break;case"select":t=n.value,t!=null&&Wo(e,!!n.multiple,t,!1)}};b_=om;S_=no;var qC={usingClientEntryPoint:!1,Events:[Qa,No,fu,__,w_,om]},Qs={findFiberByHostInstance:zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},GC={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$_(e),e===null?null:e.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||WC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{cu=Ol.inject(GC),Qn=Ol}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qC;Jt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hm(t))throw Error(W(200));return ZC(e,t,null,n)};Jt.createRoot=function(e,t){if(!hm(e))throw Error(W(299));var n=!1,i="",o=iw;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=cm(e,1,!1,null,null,n,!1,i,o),e[wr]=t.current,ka(e.nodeType===8?e.parentNode:e),new dm(t)};Jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(W(188)):(e=Object.keys(e).join(","),Error(W(268,e)));return e=$_(t),e=e===null?null:e.stateNode,e};Jt.flushSync=function(e){return no(e)};Jt.hydrate=function(e,t,n){if(!bu(t))throw Error(W(200));return Su(null,e,t,!0,n)};Jt.hydrateRoot=function(e,t,n){if(!hm(e))throw Error(W(405));var i=n!=null&&n.hydratedSources||null,o=!1,l="",u=iw;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=rw(t,null,e,1,n??null,o,!1,l,u),e[wr]=t.current,ka(e),i)for(e=0;e<i.length;e++)n=i[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new wu(t)};Jt.render=function(e,t,n){if(!bu(t))throw Error(W(200));return Su(null,e,t,!1,n)};Jt.unmountComponentAtNode=function(e){if(!bu(e))throw Error(W(40));return e._reactRootContainer?(no(function(){Su(null,null,e,!1,function(){e._reactRootContainer=null,e[wr]=null})}),!0):!1};Jt.unstable_batchedUpdates=om;Jt.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!bu(n))throw Error(W(200));if(e==null||e._reactInternals===void 0)throw Error(W(38));return Su(e,t,n,!1,i)};Jt.version="18.3.1-next-f1338f8080-20240426";function ow(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ow)}catch(e){console.error(e)}}ow(),o_.exports=Jt;var sw=o_.exports,Yy=sw;Vh.createRoot=Yy.createRoot,Vh.hydrateRoot=Yy.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ia(){return Ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ia.apply(this,arguments)}var Xr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xr||(Xr={}));const Jy="popstate";function KC(e){e===void 0&&(e={});function t(i,o){let{pathname:l,search:u,hash:h}=i.location;return Ff("",{pathname:l,search:u,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){return typeof o=="string"?o:Xc(o)}return YC(t,n,null,e)}function nt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function fm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function QC(){return Math.random().toString(36).substr(2,8)}function Xy(e,t){return{usr:e.state,key:e.key,idx:t}}function Ff(e,t,n,i){return n===void 0&&(n=null),Ia({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?js(t):t,{state:n,key:t&&t.key||i||QC()})}function Xc(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function js(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function YC(e,t,n,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,u=o.history,h=Xr.Pop,f=null,m=w();m==null&&(m=0,u.replaceState(Ia({},u.state,{idx:m}),""));function w(){return(u.state||{idx:null}).idx}function y(){h=Xr.Pop;let T=w(),v=T==null?null:T-m;m=T,f&&f({action:h,location:j.location,delta:v})}function S(T,v){h=Xr.Push;let x=Ff(j.location,T,v);m=w()+1;let _=Xy(x,m),k=j.createHref(x);try{u.pushState(_,"",k)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;o.location.assign(k)}l&&f&&f({action:h,location:j.location,delta:1})}function b(T,v){h=Xr.Replace;let x=Ff(j.location,T,v);m=w();let _=Xy(x,m),k=j.createHref(x);u.replaceState(_,"",k),l&&f&&f({action:h,location:j.location,delta:0})}function $(T){let v=o.location.origin!=="null"?o.location.origin:o.location.href,x=typeof T=="string"?T:Xc(T);return x=x.replace(/ $/,"%20"),nt(v,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,v)}let j={get action(){return h},get location(){return e(o,u)},listen(T){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(Jy,y),f=T,()=>{o.removeEventListener(Jy,y),f=null}},createHref(T){return t(o,T)},createURL:$,encodeLocation(T){let v=$(T);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:S,replace:b,go(T){return u.go(T)}};return j}var ev;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ev||(ev={}));function JC(e,t,n){return n===void 0&&(n="/"),XC(e,t,n)}function XC(e,t,n,i){let o=typeof t=="string"?js(t):t,l=pm(o.pathname||"/",n);if(l==null)return null;let u=aw(e);e$(u);let h=null;for(let f=0;h==null&&f<u.length;++f){let m=h$(l);h=c$(u[f],m)}return h}function aw(e,t,n,i){t===void 0&&(t=[]),n===void 0&&(n=[]),i===void 0&&(i="");let o=(l,u,h)=>{let f={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};f.relativePath.startsWith("/")&&(nt(f.relativePath.startsWith(i),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(i.length));let m=li([i,f.relativePath]),w=n.concat(f);l.children&&l.children.length>0&&(nt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),aw(l.children,t,w,m)),!(l.path==null&&!l.index)&&t.push({path:m,score:a$(m,l.index),routesMeta:w})};return e.forEach((l,u)=>{var h;if(l.path===""||!((h=l.path)!=null&&h.includes("?")))o(l,u);else for(let f of lw(l.path))o(l,u,f)}),t}function lw(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let u=lw(i.join("/")),h=[];return h.push(...u.map(f=>f===""?l:[l,f].join("/"))),o&&h.push(...u),h.map(f=>e.startsWith("/")&&f===""?"/":f)}function e$(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:l$(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const t$=/^:[\w-]+$/,n$=3,r$=2,i$=1,o$=10,s$=-2,tv=e=>e==="*";function a$(e,t){let n=e.split("/"),i=n.length;return n.some(tv)&&(i+=s$),t&&(i+=r$),n.filter(o=>!tv(o)).reduce((o,l)=>o+(t$.test(l)?n$:l===""?i$:o$),i)}function l$(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function c$(e,t,n){let{routesMeta:i}=e,o={},l="/",u=[];for(let h=0;h<i.length;++h){let f=i[h],m=h===i.length-1,w=l==="/"?t:t.slice(l.length)||"/",y=u$({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},w),S=f.route;if(!y)return null;Object.assign(o,y.params),u.push({params:o,pathname:li([l,y.pathname]),pathnameBase:y$(li([l,y.pathnameBase])),route:S}),y.pathnameBase!=="/"&&(l=li([l,y.pathnameBase]))}return u}function u$(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=d$(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:i.reduce((m,w,y)=>{let{paramName:S,isOptional:b}=w;if(S==="*"){let j=h[y]||"";u=l.slice(0,l.length-j.length).replace(/(.)\/+$/,"$1")}const $=h[y];return b&&!$?m[S]=void 0:m[S]=($||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:u,pattern:e}}function d$(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),fm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,f)=>(i.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function h$(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return fm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pm(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}const f$=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,p$=e=>f$.test(e);function m$(e,t){t===void 0&&(t="/");let{pathname:n,search:i="",hash:o=""}=typeof e=="string"?js(e):e,l;if(n)if(p$(n))l=n;else{if(n.includes("//")){let u=n;n=n.replace(/\/\/+/g,"/"),fm(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+n))}n.startsWith("/")?l=nv(n.substring(1),"/"):l=nv(n,t)}else l=t;return{pathname:l,search:v$(i),hash:x$(o)}}function nv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Vd(e,t,n,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function g$(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function cw(e,t){let n=g$(e);return t?n.map((i,o)=>o===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function uw(e,t,n,i){i===void 0&&(i=!1);let o;typeof e=="string"?o=js(e):(o=Ia({},e),nt(!o.pathname||!o.pathname.includes("?"),Vd("?","pathname","search",o)),nt(!o.pathname||!o.pathname.includes("#"),Vd("#","pathname","hash",o)),nt(!o.search||!o.search.includes("#"),Vd("#","search","hash",o)));let l=e===""||o.pathname==="",u=l?"/":o.pathname,h;if(u==null)h=n;else{let y=t.length-1;if(!i&&u.startsWith("..")){let S=u.split("/");for(;S[0]==="..";)S.shift(),y-=1;o.pathname=S.join("/")}h=y>=0?t[y]:"/"}let f=m$(o,h),m=u&&u!=="/"&&u.endsWith("/"),w=(l||u===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(m||w)&&(f.pathname+="/"),f}const li=e=>e.join("/").replace(/\/\/+/g,"/"),y$=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),v$=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,x$=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function _$(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const dw=["post","put","patch","delete"];new Set(dw);const w$=["get",...dw];new Set(w$);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Na(){return Na=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Na.apply(this,arguments)}const mm=z.createContext(null),b$=z.createContext(null),uo=z.createContext(null),ju=z.createContext(null),yi=z.createContext({outlet:null,matches:[],isDataRoute:!1}),hw=z.createContext(null);function S$(e,t){let{relative:n}=t===void 0?{}:t;Ja()||nt(!1);let{basename:i,navigator:o}=z.useContext(uo),{hash:l,pathname:u,search:h}=pw(e,{relative:n}),f=u;return i!=="/"&&(f=u==="/"?i:li([i,u])),o.createHref({pathname:f,search:h,hash:l})}function Ja(){return z.useContext(ju)!=null}function Cs(){return Ja()||nt(!1),z.useContext(ju).location}function fw(e){z.useContext(uo).static||z.useLayoutEffect(e)}function xt(){let{isDataRoute:e}=z.useContext(yi);return e?I$():j$()}function j$(){Ja()||nt(!1);let e=z.useContext(mm),{basename:t,future:n,navigator:i}=z.useContext(uo),{matches:o}=z.useContext(yi),{pathname:l}=Cs(),u=JSON.stringify(cw(o,n.v7_relativeSplatPath)),h=z.useRef(!1);return fw(()=>{h.current=!0}),z.useCallback(function(m,w){if(w===void 0&&(w={}),!h.current)return;if(typeof m=="number"){i.go(m);return}let y=uw(m,JSON.parse(u),l,w.relative==="path");e==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:li([t,y.pathname])),(w.replace?i.replace:i.push)(y,w.state,w)},[t,i,u,l,e])}function Cr(){let{matches:e}=z.useContext(yi),t=e[e.length-1];return t?t.params:{}}function pw(e,t){let{relative:n}=t===void 0?{}:t,{future:i}=z.useContext(uo),{matches:o}=z.useContext(yi),{pathname:l}=Cs(),u=JSON.stringify(cw(o,i.v7_relativeSplatPath));return z.useMemo(()=>uw(e,JSON.parse(u),l,n==="path"),[e,u,l,n])}function C$(e,t){return $$(e,t)}function $$(e,t,n,i){Ja()||nt(!1);let{navigator:o}=z.useContext(uo),{matches:l}=z.useContext(yi),u=l[l.length-1],h=u?u.params:{};u&&u.pathname;let f=u?u.pathnameBase:"/";u&&u.route;let m=Cs(),w;if(t){var y;let T=typeof t=="string"?js(t):t;f==="/"||(y=T.pathname)!=null&&y.startsWith(f)||nt(!1),w=T}else w=m;let S=w.pathname||"/",b=S;if(f!=="/"){let T=f.replace(/^\//,"").split("/");b="/"+S.replace(/^\//,"").split("/").slice(T.length).join("/")}let $=JC(e,{pathname:b}),j=P$($&&$.map(T=>Object.assign({},T,{params:Object.assign({},h,T.params),pathname:li([f,o.encodeLocation?o.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?f:li([f,o.encodeLocation?o.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),l,n,i);return t&&j?z.createElement(ju.Provider,{value:{location:Na({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:Xr.Pop}},j):j}function k$(){let e=R$(),t=_$(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},t),n?z.createElement("pre",{style:o},n):null,null)}const T$=z.createElement(k$,null);class L$ extends z.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?z.createElement(yi.Provider,{value:this.props.routeContext},z.createElement(hw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function E$(e){let{routeContext:t,match:n,children:i}=e,o=z.useContext(mm);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(yi.Provider,{value:t},i)}function P$(e,t,n,i){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),i===void 0&&(i=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=i)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let u=e,h=(o=n)==null?void 0:o.errors;if(h!=null){let w=u.findIndex(y=>y.route.id&&(h==null?void 0:h[y.route.id])!==void 0);w>=0||nt(!1),u=u.slice(0,Math.min(u.length,w+1))}let f=!1,m=-1;if(n&&i&&i.v7_partialHydration)for(let w=0;w<u.length;w++){let y=u[w];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=w),y.route.id){let{loaderData:S,errors:b}=n,$=y.route.loader&&S[y.route.id]===void 0&&(!b||b[y.route.id]===void 0);if(y.route.lazy||$){f=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((w,y,S)=>{let b,$=!1,j=null,T=null;n&&(b=h&&y.route.id?h[y.route.id]:void 0,j=y.route.errorElement||T$,f&&(m<0&&S===0?(N$("route-fallback"),$=!0,T=null):m===S&&($=!0,T=y.route.hydrateFallbackElement||null)));let v=t.concat(u.slice(0,S+1)),x=()=>{let _;return b?_=j:$?_=T:y.route.Component?_=z.createElement(y.route.Component,null):y.route.element?_=y.route.element:_=w,z.createElement(E$,{match:y,routeContext:{outlet:w,matches:v,isDataRoute:n!=null},children:_})};return n&&(y.route.ErrorBoundary||y.route.errorElement||S===0)?z.createElement(L$,{location:n.location,revalidation:n.revalidation,component:j,error:b,children:x(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):x()},null)}var mw=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(mw||{}),gw=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(gw||{});function A$(e){let t=z.useContext(mm);return t||nt(!1),t}function z$(e){let t=z.useContext(b$);return t||nt(!1),t}function M$(e){let t=z.useContext(yi);return t||nt(!1),t}function yw(e){let t=M$(),n=t.matches[t.matches.length-1];return n.route.id||nt(!1),n.route.id}function R$(){var e;let t=z.useContext(hw),n=z$(),i=yw();return t!==void 0?t:(e=n.errors)==null?void 0:e[i]}function I$(){let{router:e}=A$(mw.UseNavigateStable),t=yw(gw.UseNavigateStable),n=z.useRef(!1);return fw(()=>{n.current=!0}),z.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Na({fromRouteId:t},l)))},[e,t])}const rv={};function N$(e,t,n){rv[e]||(rv[e]=!0)}function D$(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function $e(e){nt(!1)}function O$(e){let{basename:t="/",children:n=null,location:i,navigationType:o=Xr.Pop,navigator:l,static:u=!1,future:h}=e;Ja()&&nt(!1);let f=t.replace(/^\/*/,"/"),m=z.useMemo(()=>({basename:f,navigator:l,static:u,future:Na({v7_relativeSplatPath:!1},h)}),[f,h,l,u]);typeof i=="string"&&(i=js(i));let{pathname:w="/",search:y="",hash:S="",state:b=null,key:$="default"}=i,j=z.useMemo(()=>{let T=pm(w,f);return T==null?null:{location:{pathname:T,search:y,hash:S,state:b,key:$},navigationType:o}},[f,w,y,S,b,$,o]);return j==null?null:z.createElement(uo.Provider,{value:m},z.createElement(ju.Provider,{children:n,value:j}))}function iv(e){let{children:t,location:n}=e;return C$(Bf(t),n)}new Promise(()=>{});function Bf(e,t){t===void 0&&(t=[]);let n=[];return z.Children.forEach(e,(i,o)=>{if(!z.isValidElement(i))return;let l=[...t,o];if(i.type===z.Fragment){n.push.apply(n,Bf(i.props.children,l));return}i.type!==$e&&nt(!1),!i.props.index||!i.props.children||nt(!1);let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=Bf(i.props.children,l)),n.push(u)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uf(){return Uf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Uf.apply(this,arguments)}function F$(e,t){if(e==null)return{};var n={},i=Object.keys(e),o,l;for(l=0;l<i.length;l++)o=i[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function B$(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function U$(e,t){return e.button===0&&(!t||t==="_self")&&!B$(e)}const H$=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Z$="6";try{window.__reactRouterVersion=Z$}catch{}const W$="startTransition",ov=D1[W$];function V$(e){let{basename:t,children:n,future:i,window:o}=e,l=z.useRef();l.current==null&&(l.current=KC({window:o,v5Compat:!0}));let u=l.current,[h,f]=z.useState({action:u.action,location:u.location}),{v7_startTransition:m}=i||{},w=z.useCallback(y=>{m&&ov?ov(()=>f(y)):f(y)},[f,m]);return z.useLayoutEffect(()=>u.listen(w),[u,w]),z.useEffect(()=>D$(i),[i]),z.createElement(O$,{basename:t,children:n,location:h.location,navigationType:h.action,navigator:u,future:i})}const q$=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",G$=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,st=z.forwardRef(function(t,n){let{onClick:i,relative:o,reloadDocument:l,replace:u,state:h,target:f,to:m,preventScrollReset:w,viewTransition:y}=t,S=F$(t,H$),{basename:b}=z.useContext(uo),$,j=!1;if(typeof m=="string"&&G$.test(m)&&($=m,q$))try{let _=new URL(window.location.href),k=m.startsWith("//")?new URL(_.protocol+m):new URL(m),M=pm(k.pathname,b);k.origin===_.origin&&M!=null?m=M+k.search+k.hash:j=!0}catch{}let T=S$(m,{relative:o}),v=K$(m,{replace:u,state:h,target:f,preventScrollReset:w,relative:o,viewTransition:y});function x(_){i&&i(_),_.defaultPrevented||v(_)}return z.createElement("a",Uf({},S,{href:$||T,onClick:j||l?i:x,ref:n,target:f}))});var sv;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(sv||(sv={}));var av;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(av||(av={}));function K$(e,t){let{target:n,replace:i,state:o,preventScrollReset:l,relative:u,viewTransition:h}=t===void 0?{}:t,f=xt(),m=Cs(),w=pw(e,{relative:u});return z.useCallback(y=>{if(U$(y,n)){y.preventDefault();let S=i!==void 0?i:Xc(m)===Xc(w);f(e,{replace:S,state:o,preventScrollReset:l,relative:u,viewTransition:h})}},[m,f,w,i,o,n,e,l,u,h])}var $s=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Q$={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},Ur,vp,Nx,Y$=(Nx=class{constructor(){oe(this,Ur,Q$);oe(this,vp,!1)}setTimeoutProvider(e){Q(this,Ur,e)}setTimeout(e,t){return P(this,Ur).setTimeout(e,t)}clearTimeout(e){P(this,Ur).clearTimeout(e)}setInterval(e,t){return P(this,Ur).setInterval(e,t)}clearInterval(e){P(this,Ur).clearInterval(e)}},Ur=new WeakMap,vp=new WeakMap,Nx),Ii=new Y$;function J$(e){setTimeout(e,0)}var ro=typeof window>"u"||"Deno"in globalThis;function Lt(){}function X$(e,t){return typeof e=="function"?e(t):e}function Hf(e){return typeof e=="number"&&e>=0&&e!==1/0}function vw(e,t){return Math.max(e+(t||0)-Date.now(),0)}function ci(e,t){return typeof e=="function"?e(t):e}function on(e,t){return typeof e=="function"?e(t):e}function lv(e,t){const{type:n="all",exact:i,fetchStatus:o,predicate:l,queryKey:u,stale:h}=e;if(u){if(i){if(t.queryHash!==gm(u,t.options))return!1}else if(!Da(t.queryKey,u))return!1}if(n!=="all"){const f=t.isActive();if(n==="active"&&!f||n==="inactive"&&f)return!1}return!(typeof h=="boolean"&&t.isStale()!==h||o&&o!==t.state.fetchStatus||l&&!l(t))}function cv(e,t){const{exact:n,status:i,predicate:o,mutationKey:l}=e;if(l){if(!t.options.mutationKey)return!1;if(n){if(io(t.options.mutationKey)!==io(l))return!1}else if(!Da(t.options.mutationKey,l))return!1}return!(i&&t.state.status!==i||o&&!o(t))}function gm(e,t){return((t==null?void 0:t.queryKeyHashFn)||io)(e)}function io(e){return JSON.stringify(e,(t,n)=>Zf(n)?Object.keys(n).sort().reduce((i,o)=>(i[o]=n[o],i),{}):n)}function Da(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>Da(e[n],t[n])):!1}var ek=Object.prototype.hasOwnProperty;function xw(e,t){if(e===t)return e;const n=uv(e)&&uv(t);if(!n&&!(Zf(e)&&Zf(t)))return t;const o=(n?e:Object.keys(e)).length,l=n?t:Object.keys(t),u=l.length,h=n?new Array(u):{};let f=0;for(let m=0;m<u;m++){const w=n?m:l[m],y=e[w],S=t[w];if(y===S){h[w]=y,(n?m<o:ek.call(e,w))&&f++;continue}if(y===null||S===null||typeof y!="object"||typeof S!="object"){h[w]=S;continue}const b=xw(y,S);h[w]=b,b===y&&f++}return o===u&&f===o?e:h}function eu(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function uv(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Zf(e){if(!dv(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!dv(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function dv(e){return Object.prototype.toString.call(e)==="[object Object]"}function tk(e){return new Promise(t=>{Ii.setTimeout(t,e)})}function Wf(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?xw(e,t):t}function nk(e,t,n=0){const i=[...e,t];return n&&i.length>n?i.slice(1):i}function rk(e,t,n=0){const i=[t,...e];return n&&i.length>n?i.slice(0,-1):i}var ym=Symbol();function _w(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===ym?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function ww(e,t){return typeof e=="function"?e(...t):!!e}var Oi,Hr,Yo,Dx,ik=(Dx=class extends $s{constructor(){super();oe(this,Oi);oe(this,Hr);oe(this,Yo);Q(this,Yo,t=>{if(!ro&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){P(this,Hr)||this.setEventListener(P(this,Yo))}onUnsubscribe(){var t;this.hasListeners()||((t=P(this,Hr))==null||t.call(this),Q(this,Hr,void 0))}setEventListener(t){var n;Q(this,Yo,t),(n=P(this,Hr))==null||n.call(this),Q(this,Hr,t(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(t){P(this,Oi)!==t&&(Q(this,Oi,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof P(this,Oi)=="boolean"?P(this,Oi):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},Oi=new WeakMap,Hr=new WeakMap,Yo=new WeakMap,Dx),vm=new ik;function Vf(){let e,t;const n=new Promise((o,l)=>{e=o,t=l});n.status="pending",n.catch(()=>{});function i(o){Object.assign(n,o),delete n.resolve,delete n.reject}return n.resolve=o=>{i({status:"fulfilled",value:o}),e(o)},n.reject=o=>{i({status:"rejected",reason:o}),t(o)},n}var ok=J$;function sk(){let e=[],t=0,n=h=>{h()},i=h=>{h()},o=ok;const l=h=>{t?e.push(h):o(()=>{n(h)})},u=()=>{const h=e;e=[],h.length&&o(()=>{i(()=>{h.forEach(f=>{n(f)})})})};return{batch:h=>{let f;t++;try{f=h()}finally{t--,t||u()}return f},batchCalls:h=>(...f)=>{l(()=>{h(...f)})},schedule:l,setNotifyFunction:h=>{n=h},setBatchNotifyFunction:h=>{i=h},setScheduler:h=>{o=h}}}var ot=sk(),Jo,Zr,Xo,Ox,ak=(Ox=class extends $s{constructor(){super();oe(this,Jo,!0);oe(this,Zr);oe(this,Xo);Q(this,Xo,t=>{if(!ro&&window.addEventListener){const n=()=>t(!0),i=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){P(this,Zr)||this.setEventListener(P(this,Xo))}onUnsubscribe(){var t;this.hasListeners()||((t=P(this,Zr))==null||t.call(this),Q(this,Zr,void 0))}setEventListener(t){var n;Q(this,Xo,t),(n=P(this,Zr))==null||n.call(this),Q(this,Zr,t(this.setOnline.bind(this)))}setOnline(t){P(this,Jo)!==t&&(Q(this,Jo,t),this.listeners.forEach(i=>{i(t)}))}isOnline(){return P(this,Jo)}},Jo=new WeakMap,Zr=new WeakMap,Xo=new WeakMap,Ox),tu=new ak;function lk(e){return Math.min(1e3*2**e,3e4)}function bw(e){return(e??"online")==="online"?tu.isOnline():!0}var qf=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Sw(e){let t=!1,n=0,i;const o=Vf(),l=()=>o.status!=="pending",u=j=>{var T;if(!l()){const v=new qf(j);S(v),(T=e.onCancel)==null||T.call(e,v)}},h=()=>{t=!0},f=()=>{t=!1},m=()=>vm.isFocused()&&(e.networkMode==="always"||tu.isOnline())&&e.canRun(),w=()=>bw(e.networkMode)&&e.canRun(),y=j=>{l()||(i==null||i(),o.resolve(j))},S=j=>{l()||(i==null||i(),o.reject(j))},b=()=>new Promise(j=>{var T;i=v=>{(l()||m())&&j(v)},(T=e.onPause)==null||T.call(e)}).then(()=>{var j;i=void 0,l()||(j=e.onContinue)==null||j.call(e)}),$=()=>{if(l())return;let j;const T=n===0?e.initialPromise:void 0;try{j=T??e.fn()}catch(v){j=Promise.reject(v)}Promise.resolve(j).then(y).catch(v=>{var A;if(l())return;const x=e.retry??(ro?0:3),_=e.retryDelay??lk,k=typeof _=="function"?_(n,v):_,M=x===!0||typeof x=="number"&&n<x||typeof x=="function"&&x(n,v);if(t||!M){S(v);return}n++,(A=e.onFail)==null||A.call(e,n,v),tk(k).then(()=>m()?void 0:b()).then(()=>{t?S(v):$()})})};return{promise:o,status:()=>o.status,cancel:u,continue:()=>(i==null||i(),o),cancelRetry:h,continueRetry:f,canStart:w,start:()=>(w()?$():b().then($),o)}}var Fi,Fx,jw=(Fx=class{constructor(){oe(this,Fi)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Hf(this.gcTime)&&Q(this,Fi,Ii.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(ro?1/0:5*60*1e3))}clearGcTimeout(){P(this,Fi)&&(Ii.clearTimeout(P(this,Fi)),Q(this,Fi,void 0))}},Fi=new WeakMap,Fx),Bi,es,rn,Ui,ut,Ua,Hi,wn,lr,Bx,ck=(Bx=class extends jw{constructor(t){super();oe(this,wn);oe(this,Bi);oe(this,es);oe(this,rn);oe(this,Ui);oe(this,ut);oe(this,Ua);oe(this,Hi);Q(this,Hi,!1),Q(this,Ua,t.defaultOptions),this.setOptions(t.options),this.observers=[],Q(this,Ui,t.client),Q(this,rn,P(this,Ui).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,Q(this,Bi,fv(this.options)),this.state=t.state??P(this,Bi),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=P(this,ut))==null?void 0:t.promise}setOptions(t){if(this.options={...P(this,Ua),...t},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const n=fv(this.options);n.data!==void 0&&(this.setState(hv(n.data,n.dataUpdatedAt)),Q(this,Bi,n))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&P(this,rn).remove(this)}setData(t,n){const i=Wf(this.state.data,t,this.options);return ye(this,wn,lr).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(t,n){ye(this,wn,lr).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var i,o;const n=(i=P(this,ut))==null?void 0:i.promise;return(o=P(this,ut))==null||o.cancel(t),n?n.then(Lt).catch(Lt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(P(this,Bi))}isActive(){return this.observers.some(t=>on(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===ym||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>ci(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!vw(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(i=>i.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=P(this,ut))==null||n.continue()}onOnline(){var n;const t=this.observers.find(i=>i.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=P(this,ut))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),P(this,rn).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(P(this,ut)&&(P(this,Hi)?P(this,ut).cancel({revert:!0}):P(this,ut).cancelRetry()),this.scheduleGc()),P(this,rn).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||ye(this,wn,lr).call(this,{type:"invalidate"})}async fetch(t,n){var f,m,w,y,S,b,$,j,T,v,x,_;if(this.state.fetchStatus!=="idle"&&((f=P(this,ut))==null?void 0:f.status())!=="rejected"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(P(this,ut))return P(this,ut).continueRetry(),P(this,ut).promise}if(t&&this.setOptions(t),!this.options.queryFn){const k=this.observers.find(M=>M.options.queryFn);k&&this.setOptions(k.options)}const i=new AbortController,o=k=>{Object.defineProperty(k,"signal",{enumerable:!0,get:()=>(Q(this,Hi,!0),i.signal)})},l=()=>{const k=_w(this.options,n),A=(()=>{const N={client:P(this,Ui),queryKey:this.queryKey,meta:this.meta};return o(N),N})();return Q(this,Hi,!1),this.options.persister?this.options.persister(k,A,this):k(A)},h=(()=>{const k={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:P(this,Ui),state:this.state,fetchFn:l};return o(k),k})();(m=this.options.behavior)==null||m.onFetch(h,this),Q(this,es,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((w=h.fetchOptions)==null?void 0:w.meta))&&ye(this,wn,lr).call(this,{type:"fetch",meta:(y=h.fetchOptions)==null?void 0:y.meta}),Q(this,ut,Sw({initialPromise:n==null?void 0:n.initialPromise,fn:h.fetchFn,onCancel:k=>{k instanceof qf&&k.revert&&this.setState({...P(this,es),fetchStatus:"idle"}),i.abort()},onFail:(k,M)=>{ye(this,wn,lr).call(this,{type:"failed",failureCount:k,error:M})},onPause:()=>{ye(this,wn,lr).call(this,{type:"pause"})},onContinue:()=>{ye(this,wn,lr).call(this,{type:"continue"})},retry:h.options.retry,retryDelay:h.options.retryDelay,networkMode:h.options.networkMode,canRun:()=>!0}));try{const k=await P(this,ut).start();if(k===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(k),(b=(S=P(this,rn).config).onSuccess)==null||b.call(S,k,this),(j=($=P(this,rn).config).onSettled)==null||j.call($,k,this.state.error,this),k}catch(k){if(k instanceof qf){if(k.silent)return P(this,ut).promise;if(k.revert){if(this.state.data===void 0)throw k;return this.state.data}}throw ye(this,wn,lr).call(this,{type:"error",error:k}),(v=(T=P(this,rn).config).onError)==null||v.call(T,k,this),(_=(x=P(this,rn).config).onSettled)==null||_.call(x,this.state.data,k,this),k}finally{this.scheduleGc()}}},Bi=new WeakMap,es=new WeakMap,rn=new WeakMap,Ui=new WeakMap,ut=new WeakMap,Ua=new WeakMap,Hi=new WeakMap,wn=new WeakSet,lr=function(t){const n=i=>{switch(t.type){case"failed":return{...i,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...Cw(i.data,this.options),fetchMeta:t.meta??null};case"success":const o={...i,...hv(t.data,t.dataUpdatedAt),dataUpdateCount:i.dataUpdateCount+1,...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return Q(this,es,t.manual?o:void 0),o;case"error":const l=t.error;return{...i,error:l,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:l,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...t.state}}};this.state=n(this.state),ot.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),P(this,rn).notify({query:this,type:"updated",action:t})})},Bx);function Cw(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:bw(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function hv(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:"success"}}function fv(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,i=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Nt,je,Ha,$t,Zi,ts,hr,Wr,Za,ns,rs,Wi,Vi,Vr,is,Ee,aa,Gf,Kf,Qf,Yf,Jf,Xf,ep,$w,Ux,uk=(Ux=class extends $s{constructor(t,n){super();oe(this,Ee);oe(this,Nt);oe(this,je);oe(this,Ha);oe(this,$t);oe(this,Zi);oe(this,ts);oe(this,hr);oe(this,Wr);oe(this,Za);oe(this,ns);oe(this,rs);oe(this,Wi);oe(this,Vi);oe(this,Vr);oe(this,is,new Set);this.options=n,Q(this,Nt,t),Q(this,Wr,null),Q(this,hr,Vf()),this.bindMethods(),this.setOptions(n)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(P(this,je).addObserver(this),pv(P(this,je),this.options)?ye(this,Ee,aa).call(this):this.updateResult(),ye(this,Ee,Yf).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return tp(P(this,je),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return tp(P(this,je),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,ye(this,Ee,Jf).call(this),ye(this,Ee,Xf).call(this),P(this,je).removeObserver(this)}setOptions(t){const n=this.options,i=P(this,je);if(this.options=P(this,Nt).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof on(this.options.enabled,P(this,je))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");ye(this,Ee,ep).call(this),P(this,je).setOptions(this.options),n._defaulted&&!eu(this.options,n)&&P(this,Nt).getQueryCache().notify({type:"observerOptionsUpdated",query:P(this,je),observer:this});const o=this.hasListeners();o&&mv(P(this,je),i,this.options,n)&&ye(this,Ee,aa).call(this),this.updateResult(),o&&(P(this,je)!==i||on(this.options.enabled,P(this,je))!==on(n.enabled,P(this,je))||ci(this.options.staleTime,P(this,je))!==ci(n.staleTime,P(this,je)))&&ye(this,Ee,Gf).call(this);const l=ye(this,Ee,Kf).call(this);o&&(P(this,je)!==i||on(this.options.enabled,P(this,je))!==on(n.enabled,P(this,je))||l!==P(this,Vr))&&ye(this,Ee,Qf).call(this,l)}getOptimisticResult(t){const n=P(this,Nt).getQueryCache().build(P(this,Nt),t),i=this.createResult(n,t);return hk(this,i)&&(Q(this,$t,i),Q(this,ts,this.options),Q(this,Zi,P(this,je).state)),i}getCurrentResult(){return P(this,$t)}trackResult(t,n){return new Proxy(t,{get:(i,o)=>(this.trackProp(o),n==null||n(o),o==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&P(this,hr).status==="pending"&&P(this,hr).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(i,o))})}trackProp(t){P(this,is).add(t)}getCurrentQuery(){return P(this,je)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const n=P(this,Nt).defaultQueryOptions(t),i=P(this,Nt).getQueryCache().build(P(this,Nt),n);return i.fetch().then(()=>this.createResult(i,n))}fetch(t){return ye(this,Ee,aa).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),P(this,$t)))}createResult(t,n){var U;const i=P(this,je),o=this.options,l=P(this,$t),u=P(this,Zi),h=P(this,ts),m=t!==i?t.state:P(this,Ha),{state:w}=t;let y={...w},S=!1,b;if(n._optimisticResults){const R=this.hasListeners(),Z=!R&&pv(t,n),J=R&&mv(t,i,n,o);(Z||J)&&(y={...y,...Cw(w.data,t.options)}),n._optimisticResults==="isRestoring"&&(y.fetchStatus="idle")}let{error:$,errorUpdatedAt:j,status:T}=y;b=y.data;let v=!1;if(n.placeholderData!==void 0&&b===void 0&&T==="pending"){let R;l!=null&&l.isPlaceholderData&&n.placeholderData===(h==null?void 0:h.placeholderData)?(R=l.data,v=!0):R=typeof n.placeholderData=="function"?n.placeholderData((U=P(this,rs))==null?void 0:U.state.data,P(this,rs)):n.placeholderData,R!==void 0&&(T="success",b=Wf(l==null?void 0:l.data,R,n),S=!0)}if(n.select&&b!==void 0&&!v)if(l&&b===(u==null?void 0:u.data)&&n.select===P(this,Za))b=P(this,ns);else try{Q(this,Za,n.select),b=n.select(b),b=Wf(l==null?void 0:l.data,b,n),Q(this,ns,b),Q(this,Wr,null)}catch(R){Q(this,Wr,R)}P(this,Wr)&&($=P(this,Wr),b=P(this,ns),j=Date.now(),T="error");const x=y.fetchStatus==="fetching",_=T==="pending",k=T==="error",M=_&&x,A=b!==void 0,F={status:T,fetchStatus:y.fetchStatus,isPending:_,isSuccess:T==="success",isError:k,isInitialLoading:M,isLoading:M,data:b,dataUpdatedAt:y.dataUpdatedAt,error:$,errorUpdatedAt:j,failureCount:y.fetchFailureCount,failureReason:y.fetchFailureReason,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>m.dataUpdateCount||y.errorUpdateCount>m.errorUpdateCount,isFetching:x,isRefetching:x&&!_,isLoadingError:k&&!A,isPaused:y.fetchStatus==="paused",isPlaceholderData:S,isRefetchError:k&&A,isStale:xm(t,n),refetch:this.refetch,promise:P(this,hr),isEnabled:on(n.enabled,t)!==!1};if(this.options.experimental_prefetchInRender){const R=de=>{F.status==="error"?de.reject(F.error):F.data!==void 0&&de.resolve(F.data)},Z=()=>{const de=Q(this,hr,F.promise=Vf());R(de)},J=P(this,hr);switch(J.status){case"pending":t.queryHash===i.queryHash&&R(J);break;case"fulfilled":(F.status==="error"||F.data!==J.value)&&Z();break;case"rejected":(F.status!=="error"||F.error!==J.reason)&&Z();break}}return F}updateResult(){const t=P(this,$t),n=this.createResult(P(this,je),this.options);if(Q(this,Zi,P(this,je).state),Q(this,ts,this.options),P(this,Zi).data!==void 0&&Q(this,rs,P(this,je)),eu(n,t))return;Q(this,$t,n);const i=()=>{if(!t)return!0;const{notifyOnChangeProps:o}=this.options,l=typeof o=="function"?o():o;if(l==="all"||!l&&!P(this,is).size)return!0;const u=new Set(l??P(this,is));return this.options.throwOnError&&u.add("error"),Object.keys(P(this,$t)).some(h=>{const f=h;return P(this,$t)[f]!==t[f]&&u.has(f)})};ye(this,Ee,$w).call(this,{listeners:i()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&ye(this,Ee,Yf).call(this)}},Nt=new WeakMap,je=new WeakMap,Ha=new WeakMap,$t=new WeakMap,Zi=new WeakMap,ts=new WeakMap,hr=new WeakMap,Wr=new WeakMap,Za=new WeakMap,ns=new WeakMap,rs=new WeakMap,Wi=new WeakMap,Vi=new WeakMap,Vr=new WeakMap,is=new WeakMap,Ee=new WeakSet,aa=function(t){ye(this,Ee,ep).call(this);let n=P(this,je).fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(Lt)),n},Gf=function(){ye(this,Ee,Jf).call(this);const t=ci(this.options.staleTime,P(this,je));if(ro||P(this,$t).isStale||!Hf(t))return;const i=vw(P(this,$t).dataUpdatedAt,t)+1;Q(this,Wi,Ii.setTimeout(()=>{P(this,$t).isStale||this.updateResult()},i))},Kf=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(P(this,je)):this.options.refetchInterval)??!1},Qf=function(t){ye(this,Ee,Xf).call(this),Q(this,Vr,t),!(ro||on(this.options.enabled,P(this,je))===!1||!Hf(P(this,Vr))||P(this,Vr)===0)&&Q(this,Vi,Ii.setInterval(()=>{(this.options.refetchIntervalInBackground||vm.isFocused())&&ye(this,Ee,aa).call(this)},P(this,Vr)))},Yf=function(){ye(this,Ee,Gf).call(this),ye(this,Ee,Qf).call(this,ye(this,Ee,Kf).call(this))},Jf=function(){P(this,Wi)&&(Ii.clearTimeout(P(this,Wi)),Q(this,Wi,void 0))},Xf=function(){P(this,Vi)&&(Ii.clearInterval(P(this,Vi)),Q(this,Vi,void 0))},ep=function(){const t=P(this,Nt).getQueryCache().build(P(this,Nt),this.options);if(t===P(this,je))return;const n=P(this,je);Q(this,je,t),Q(this,Ha,t.state),this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))},$w=function(t){ot.batch(()=>{t.listeners&&this.listeners.forEach(n=>{n(P(this,$t))}),P(this,Nt).getQueryCache().notify({query:P(this,je),type:"observerResultsUpdated"})})},Ux);function dk(e,t){return on(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function pv(e,t){return dk(e,t)||e.state.data!==void 0&&tp(e,t,t.refetchOnMount)}function tp(e,t,n){if(on(t.enabled,e)!==!1&&ci(t.staleTime,e)!=="static"){const i=typeof n=="function"?n(e):n;return i==="always"||i!==!1&&xm(e,t)}return!1}function mv(e,t,n,i){return(e!==t||on(i.enabled,e)===!1)&&(!n.suspense||e.state.status!=="error")&&xm(e,n)}function xm(e,t){return on(t.enabled,e)!==!1&&e.isStaleByTime(ci(t.staleTime,e))}function hk(e,t){return!eu(e.getCurrentResult(),t)}function gv(e){return{onFetch:(t,n)=>{var w,y,S,b,$;const i=t.options,o=(S=(y=(w=t.fetchOptions)==null?void 0:w.meta)==null?void 0:y.fetchMore)==null?void 0:S.direction,l=((b=t.state.data)==null?void 0:b.pages)||[],u=(($=t.state.data)==null?void 0:$.pageParams)||[];let h={pages:[],pageParams:[]},f=0;const m=async()=>{let j=!1;const T=_=>{Object.defineProperty(_,"signal",{enumerable:!0,get:()=>(t.signal.aborted?j=!0:t.signal.addEventListener("abort",()=>{j=!0}),t.signal)})},v=_w(t.options,t.fetchOptions),x=async(_,k,M)=>{if(j)return Promise.reject();if(k==null&&_.pages.length)return Promise.resolve(_);const N=(()=>{const Z={client:t.client,queryKey:t.queryKey,pageParam:k,direction:M?"backward":"forward",meta:t.options.meta};return T(Z),Z})(),F=await v(N),{maxPages:U}=t.options,R=M?rk:nk;return{pages:R(_.pages,F,U),pageParams:R(_.pageParams,k,U)}};if(o&&l.length){const _=o==="backward",k=_?fk:yv,M={pages:l,pageParams:u},A=k(i,M);h=await x(M,A,_)}else{const _=e??l.length;do{const k=f===0?u[0]??i.initialPageParam:yv(i,h);if(f>0&&k==null)break;h=await x(h,k),f++}while(f<_)}return h};t.options.persister?t.fetchFn=()=>{var j,T;return(T=(j=t.options).persister)==null?void 0:T.call(j,m,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=m}}}function yv(e,{pages:t,pageParams:n}){const i=t.length-1;return t.length>0?e.getNextPageParam(t[i],t,n[i],n):void 0}function fk(e,{pages:t,pageParams:n}){var i;return t.length>0?(i=e.getPreviousPageParam)==null?void 0:i.call(e,t[0],t,n[0],n):void 0}var Wa,Zn,kt,qi,Wn,zr,Hx,pk=(Hx=class extends jw{constructor(t){super();oe(this,Wn);oe(this,Wa);oe(this,Zn);oe(this,kt);oe(this,qi);Q(this,Wa,t.client),this.mutationId=t.mutationId,Q(this,kt,t.mutationCache),Q(this,Zn,[]),this.state=t.state||kw(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){P(this,Zn).includes(t)||(P(this,Zn).push(t),this.clearGcTimeout(),P(this,kt).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){Q(this,Zn,P(this,Zn).filter(n=>n!==t)),this.scheduleGc(),P(this,kt).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){P(this,Zn).length||(this.state.status==="pending"?this.scheduleGc():P(this,kt).remove(this))}continue(){var t;return((t=P(this,qi))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var u,h,f,m,w,y,S,b,$,j,T,v,x,_,k,M,A,N,F,U;const n=()=>{ye(this,Wn,zr).call(this,{type:"continue"})},i={client:P(this,Wa),meta:this.options.meta,mutationKey:this.options.mutationKey};Q(this,qi,Sw({fn:()=>this.options.mutationFn?this.options.mutationFn(t,i):Promise.reject(new Error("No mutationFn found")),onFail:(R,Z)=>{ye(this,Wn,zr).call(this,{type:"failed",failureCount:R,error:Z})},onPause:()=>{ye(this,Wn,zr).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>P(this,kt).canRun(this)}));const o=this.state.status==="pending",l=!P(this,qi).canStart();try{if(o)n();else{ye(this,Wn,zr).call(this,{type:"pending",variables:t,isPaused:l}),await((h=(u=P(this,kt).config).onMutate)==null?void 0:h.call(u,t,this,i));const Z=await((m=(f=this.options).onMutate)==null?void 0:m.call(f,t,i));Z!==this.state.context&&ye(this,Wn,zr).call(this,{type:"pending",context:Z,variables:t,isPaused:l})}const R=await P(this,qi).start();return await((y=(w=P(this,kt).config).onSuccess)==null?void 0:y.call(w,R,t,this.state.context,this,i)),await((b=(S=this.options).onSuccess)==null?void 0:b.call(S,R,t,this.state.context,i)),await((j=($=P(this,kt).config).onSettled)==null?void 0:j.call($,R,null,this.state.variables,this.state.context,this,i)),await((v=(T=this.options).onSettled)==null?void 0:v.call(T,R,null,t,this.state.context,i)),ye(this,Wn,zr).call(this,{type:"success",data:R}),R}catch(R){try{throw await((_=(x=P(this,kt).config).onError)==null?void 0:_.call(x,R,t,this.state.context,this,i)),await((M=(k=this.options).onError)==null?void 0:M.call(k,R,t,this.state.context,i)),await((N=(A=P(this,kt).config).onSettled)==null?void 0:N.call(A,void 0,R,this.state.variables,this.state.context,this,i)),await((U=(F=this.options).onSettled)==null?void 0:U.call(F,void 0,R,t,this.state.context,i)),R}finally{ye(this,Wn,zr).call(this,{type:"error",error:R})}}finally{P(this,kt).runNext(this)}}},Wa=new WeakMap,Zn=new WeakMap,kt=new WeakMap,qi=new WeakMap,Wn=new WeakSet,zr=function(t){const n=i=>{switch(t.type){case"failed":return{...i,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...i,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:t.error,failureCount:i.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),ot.batch(()=>{P(this,Zn).forEach(i=>{i.onMutationUpdate(t)}),P(this,kt).notify({mutation:this,type:"updated",action:t})})},Hx);function kw(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var fr,bn,Va,Zx,mk=(Zx=class extends $s{constructor(t={}){super();oe(this,fr);oe(this,bn);oe(this,Va);this.config=t,Q(this,fr,new Set),Q(this,bn,new Map),Q(this,Va,0)}build(t,n,i){const o=new pk({client:t,mutationCache:this,mutationId:++bl(this,Va)._,options:t.defaultMutationOptions(n),state:i});return this.add(o),o}add(t){P(this,fr).add(t);const n=Fl(t);if(typeof n=="string"){const i=P(this,bn).get(n);i?i.push(t):P(this,bn).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(P(this,fr).delete(t)){const n=Fl(t);if(typeof n=="string"){const i=P(this,bn).get(n);if(i)if(i.length>1){const o=i.indexOf(t);o!==-1&&i.splice(o,1)}else i[0]===t&&P(this,bn).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Fl(t);if(typeof n=="string"){const i=P(this,bn).get(n),o=i==null?void 0:i.find(l=>l.state.status==="pending");return!o||o===t}else return!0}runNext(t){var i;const n=Fl(t);if(typeof n=="string"){const o=(i=P(this,bn).get(n))==null?void 0:i.find(l=>l!==t&&l.state.isPaused);return(o==null?void 0:o.continue())??Promise.resolve()}else return Promise.resolve()}clear(){ot.batch(()=>{P(this,fr).forEach(t=>{this.notify({type:"removed",mutation:t})}),P(this,fr).clear(),P(this,bn).clear()})}getAll(){return Array.from(P(this,fr))}find(t){const n={exact:!0,...t};return this.getAll().find(i=>cv(n,i))}findAll(t={}){return this.getAll().filter(n=>cv(t,n))}notify(t){ot.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return ot.batch(()=>Promise.all(t.map(n=>n.continue().catch(Lt))))}},fr=new WeakMap,bn=new WeakMap,Va=new WeakMap,Zx);function Fl(e){var t;return(t=e.options.scope)==null?void 0:t.id}var pr,qr,Dt,mr,xr,_c,np,Wx,gk=(Wx=class extends $s{constructor(n,i){super();oe(this,xr);oe(this,pr);oe(this,qr);oe(this,Dt);oe(this,mr);Q(this,pr,n),this.setOptions(i),this.bindMethods(),ye(this,xr,_c).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(n){var o;const i=this.options;this.options=P(this,pr).defaultMutationOptions(n),eu(this.options,i)||P(this,pr).getMutationCache().notify({type:"observerOptionsUpdated",mutation:P(this,Dt),observer:this}),i!=null&&i.mutationKey&&this.options.mutationKey&&io(i.mutationKey)!==io(this.options.mutationKey)?this.reset():((o=P(this,Dt))==null?void 0:o.state.status)==="pending"&&P(this,Dt).setOptions(this.options)}onUnsubscribe(){var n;this.hasListeners()||(n=P(this,Dt))==null||n.removeObserver(this)}onMutationUpdate(n){ye(this,xr,_c).call(this),ye(this,xr,np).call(this,n)}getCurrentResult(){return P(this,qr)}reset(){var n;(n=P(this,Dt))==null||n.removeObserver(this),Q(this,Dt,void 0),ye(this,xr,_c).call(this),ye(this,xr,np).call(this)}mutate(n,i){var o;return Q(this,mr,i),(o=P(this,Dt))==null||o.removeObserver(this),Q(this,Dt,P(this,pr).getMutationCache().build(P(this,pr),this.options)),P(this,Dt).addObserver(this),P(this,Dt).execute(n)}},pr=new WeakMap,qr=new WeakMap,Dt=new WeakMap,mr=new WeakMap,xr=new WeakSet,_c=function(){var i;const n=((i=P(this,Dt))==null?void 0:i.state)??kw();Q(this,qr,{...n,isPending:n.status==="pending",isSuccess:n.status==="success",isError:n.status==="error",isIdle:n.status==="idle",mutate:this.mutate,reset:this.reset})},np=function(n){ot.batch(()=>{var i,o,l,u,h,f,m,w;if(P(this,mr)&&this.hasListeners()){const y=P(this,qr).variables,S=P(this,qr).context,b={client:P(this,pr),meta:this.options.meta,mutationKey:this.options.mutationKey};(n==null?void 0:n.type)==="success"?((o=(i=P(this,mr)).onSuccess)==null||o.call(i,n.data,y,S,b),(u=(l=P(this,mr)).onSettled)==null||u.call(l,n.data,null,y,S,b)):(n==null?void 0:n.type)==="error"&&((f=(h=P(this,mr)).onError)==null||f.call(h,n.error,y,S,b),(w=(m=P(this,mr)).onSettled)==null||w.call(m,void 0,n.error,y,S,b))}this.listeners.forEach(y=>{y(P(this,qr))})})},Wx),Vn,Vx,yk=(Vx=class extends $s{constructor(t={}){super();oe(this,Vn);this.config=t,Q(this,Vn,new Map)}build(t,n,i){const o=n.queryKey,l=n.queryHash??gm(o,n);let u=this.get(l);return u||(u=new ck({client:t,queryKey:o,queryHash:l,options:t.defaultQueryOptions(n),state:i,defaultOptions:t.getQueryDefaults(o)}),this.add(u)),u}add(t){P(this,Vn).has(t.queryHash)||(P(this,Vn).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=P(this,Vn).get(t.queryHash);n&&(t.destroy(),n===t&&P(this,Vn).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){ot.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return P(this,Vn).get(t)}getAll(){return[...P(this,Vn).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(i=>lv(n,i))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(i=>lv(t,i)):n}notify(t){ot.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){ot.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){ot.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Vn=new WeakMap,Vx),He,Gr,Kr,os,ss,Qr,as,ls,qx,vk=(qx=class{constructor(e={}){oe(this,He);oe(this,Gr);oe(this,Kr);oe(this,os);oe(this,ss);oe(this,Qr);oe(this,as);oe(this,ls);Q(this,He,e.queryCache||new yk),Q(this,Gr,e.mutationCache||new mk),Q(this,Kr,e.defaultOptions||{}),Q(this,os,new Map),Q(this,ss,new Map),Q(this,Qr,0)}mount(){bl(this,Qr)._++,P(this,Qr)===1&&(Q(this,as,vm.subscribe(async e=>{e&&(await this.resumePausedMutations(),P(this,He).onFocus())})),Q(this,ls,tu.subscribe(async e=>{e&&(await this.resumePausedMutations(),P(this,He).onOnline())})))}unmount(){var e,t;bl(this,Qr)._--,P(this,Qr)===0&&((e=P(this,as))==null||e.call(this),Q(this,as,void 0),(t=P(this,ls))==null||t.call(this),Q(this,ls,void 0))}isFetching(e){return P(this,He).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return P(this,Gr).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=P(this,He).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=P(this,He).build(this,t),i=n.state.data;return i===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(ci(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(i))}getQueriesData(e){return P(this,He).findAll(e).map(({queryKey:t,state:n})=>{const i=n.data;return[t,i]})}setQueryData(e,t,n){const i=this.defaultQueryOptions({queryKey:e}),o=P(this,He).get(i.queryHash),l=o==null?void 0:o.state.data,u=X$(t,l);if(u!==void 0)return P(this,He).build(this,i).setData(u,{...n,manual:!0})}setQueriesData(e,t,n){return ot.batch(()=>P(this,He).findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=P(this,He).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=P(this,He);ot.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=P(this,He);return ot.batch(()=>(n.findAll(e).forEach(i=>{i.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},i=ot.batch(()=>P(this,He).findAll(e).map(o=>o.cancel(n)));return Promise.all(i).then(Lt).catch(Lt)}invalidateQueries(e,t={}){return ot.batch(()=>(P(this,He).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},i=ot.batch(()=>P(this,He).findAll(e).filter(o=>!o.isDisabled()&&!o.isStatic()).map(o=>{let l=o.fetch(void 0,n);return n.throwOnError||(l=l.catch(Lt)),o.state.fetchStatus==="paused"?Promise.resolve():l}));return Promise.all(i).then(Lt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=P(this,He).build(this,t);return n.isStaleByTime(ci(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Lt).catch(Lt)}fetchInfiniteQuery(e){return e.behavior=gv(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Lt).catch(Lt)}ensureInfiniteQueryData(e){return e.behavior=gv(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return tu.isOnline()?P(this,Gr).resumePausedMutations():Promise.resolve()}getQueryCache(){return P(this,He)}getMutationCache(){return P(this,Gr)}getDefaultOptions(){return P(this,Kr)}setDefaultOptions(e){Q(this,Kr,e)}setQueryDefaults(e,t){P(this,os).set(io(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...P(this,os).values()],n={};return t.forEach(i=>{Da(e,i.queryKey)&&Object.assign(n,i.defaultOptions)}),n}setMutationDefaults(e,t){P(this,ss).set(io(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...P(this,ss).values()],n={};return t.forEach(i=>{Da(e,i.mutationKey)&&Object.assign(n,i.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...P(this,Kr).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=gm(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===ym&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...P(this,Kr).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){P(this,He).clear(),P(this,Gr).clear()}},He=new WeakMap,Gr=new WeakMap,Kr=new WeakMap,os=new WeakMap,ss=new WeakMap,Qr=new WeakMap,as=new WeakMap,ls=new WeakMap,qx),Tw=z.createContext(void 0),Ke=e=>{const t=z.useContext(Tw);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},xk=({client:e,children:t})=>(z.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),s.jsx(Tw.Provider,{value:e,children:t})),Lw=z.createContext(!1),_k=()=>z.useContext(Lw);Lw.Provider;function wk(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var bk=z.createContext(wk()),Sk=()=>z.useContext(bk),jk=(e,t)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(t.isReset()||(e.retryOnMount=!1))},Ck=e=>{z.useEffect(()=>{e.clearReset()},[e])},$k=({result:e,errorResetBoundary:t,throwOnError:n,query:i,suspense:o})=>e.isError&&!t.isReset()&&!e.isFetching&&i&&(o&&e.data===void 0||ww(n,[e.error,i])),kk=e=>{if(e.suspense){const n=o=>o==="static"?o:Math.max(o??1e3,1e3),i=e.staleTime;e.staleTime=typeof i=="function"?(...o)=>n(i(...o)):n(i),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},Tk=(e,t)=>e.isLoading&&e.isFetching&&!t,Lk=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,vv=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()});function Ek(e,t,n){var y,S,b,$,j;const i=_k(),o=Sk(),l=Ke(),u=l.defaultQueryOptions(e);(S=(y=l.getDefaultOptions().queries)==null?void 0:y._experimental_beforeQuery)==null||S.call(y,u),u._optimisticResults=i?"isRestoring":"optimistic",kk(u),jk(u,o),Ck(o);const h=!l.getQueryCache().get(u.queryHash),[f]=z.useState(()=>new t(l,u)),m=f.getOptimisticResult(u),w=!i&&e.subscribed!==!1;if(z.useSyncExternalStore(z.useCallback(T=>{const v=w?f.subscribe(ot.batchCalls(T)):Lt;return f.updateResult(),v},[f,w]),()=>f.getCurrentResult(),()=>f.getCurrentResult()),z.useEffect(()=>{f.setOptions(u)},[u,f]),Lk(u,m))throw vv(u,f,o);if($k({result:m,errorResetBoundary:o,throwOnError:u.throwOnError,query:l.getQueryCache().get(u.queryHash),suspense:u.suspense}))throw m.error;if(($=(b=l.getDefaultOptions().queries)==null?void 0:b._experimental_afterQuery)==null||$.call(b,u,m),u.experimental_prefetchInRender&&!ro&&Tk(m,i)){const T=h?vv(u,f,o):(j=l.getQueryCache().get(u.queryHash))==null?void 0:j.promise;T==null||T.catch(Lt).finally(()=>{f.updateResult()})}return u.notifyOnChangeProps?m:f.trackResult(m)}function zt(e,t){return Ek(e,uk)}function lt(e,t){const n=Ke(),[i]=z.useState(()=>new gk(n,e));z.useEffect(()=>{i.setOptions(e)},[i,e]);const o=z.useSyncExternalStore(z.useCallback(u=>i.subscribe(ot.batchCalls(u)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),l=z.useCallback((u,h)=>{i.mutate(u,h).catch(Lt)},[i]);if(o.error&&ww(i.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:l,mutateAsync:o.mutate}}var ft=function(){return ft=Object.assign||function(t){for(var n,i=1,o=arguments.length;i<o;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},ft.apply(this,arguments)};function Oa(e,t,n){if(n||arguments.length===2)for(var i=0,o=t.length,l;i<o;i++)(l||!(i in t))&&(l||(l=Array.prototype.slice.call(t,0,i)),l[i]=t[i]);return e.concat(l||Array.prototype.slice.call(t))}var Ie="-ms-",va="-moz-",Le="-webkit-",Ew="comm",Cu="rule",_m="decl",Pk="@import",Pw="@keyframes",Ak="@layer",Aw=Math.abs,wm=String.fromCharCode,rp=Object.assign;function zk(e,t){return ht(e,0)^45?(((t<<2^ht(e,0))<<2^ht(e,1))<<2^ht(e,2))<<2^ht(e,3):0}function zw(e){return e.trim()}function ur(e,t){return(e=t.exec(e))?e[0]:e}function ve(e,t,n){return e.replace(t,n)}function wc(e,t,n){return e.indexOf(t,n)}function ht(e,t){return e.charCodeAt(t)|0}function gs(e,t,n){return e.slice(t,n)}function qn(e){return e.length}function Mw(e){return e.length}function la(e,t){return t.push(e),e}function Mk(e,t){return e.map(t).join("")}function xv(e,t){return e.filter(function(n){return!ur(n,t)})}var $u=1,ys=1,Rw=0,fn=0,et=0,ks="";function ku(e,t,n,i,o,l,u,h){return{value:e,root:t,parent:n,type:i,props:o,children:l,line:$u,column:ys,length:u,return:"",siblings:h}}function Mr(e,t){return rp(ku("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function bo(e){for(;e.root;)e=Mr(e.root,{children:[e]});la(e,e.siblings)}function Rk(){return et}function Ik(){return et=fn>0?ht(ks,--fn):0,ys--,et===10&&(ys=1,$u--),et}function kn(){return et=fn<Rw?ht(ks,fn++):0,ys++,et===10&&(ys=1,$u++),et}function Qi(){return ht(ks,fn)}function bc(){return fn}function Tu(e,t){return gs(ks,e,t)}function ip(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Nk(e){return $u=ys=1,Rw=qn(ks=e),fn=0,[]}function Dk(e){return ks="",e}function qd(e){return zw(Tu(fn-1,op(e===91?e+2:e===40?e+1:e)))}function Ok(e){for(;(et=Qi())&&et<33;)kn();return ip(e)>2||ip(et)>3?"":" "}function Fk(e,t){for(;--t&&kn()&&!(et<48||et>102||et>57&&et<65||et>70&&et<97););return Tu(e,bc()+(t<6&&Qi()==32&&kn()==32))}function op(e){for(;kn();)switch(et){case e:return fn;case 34:case 39:e!==34&&e!==39&&op(et);break;case 40:e===41&&op(e);break;case 92:kn();break}return fn}function Bk(e,t){for(;kn()&&e+et!==57;)if(e+et===84&&Qi()===47)break;return"/*"+Tu(t,fn-1)+"*"+wm(e===47?e:kn())}function Uk(e){for(;!ip(Qi());)kn();return Tu(e,fn)}function Hk(e){return Dk(Sc("",null,null,null,[""],e=Nk(e),0,[0],e))}function Sc(e,t,n,i,o,l,u,h,f){for(var m=0,w=0,y=u,S=0,b=0,$=0,j=1,T=1,v=1,x=0,_="",k=o,M=l,A=i,N=_;T;)switch($=x,x=kn()){case 40:if($!=108&&ht(N,y-1)==58){wc(N+=ve(qd(x),"&","&\f"),"&\f",Aw(m?h[m-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:N+=qd(x);break;case 9:case 10:case 13:case 32:N+=Ok($);break;case 92:N+=Fk(bc()-1,7);continue;case 47:switch(Qi()){case 42:case 47:la(Zk(Bk(kn(),bc()),t,n,f),f);break;default:N+="/"}break;case 123*j:h[m++]=qn(N)*v;case 125*j:case 59:case 0:switch(x){case 0:case 125:T=0;case 59+w:v==-1&&(N=ve(N,/\f/g,"")),b>0&&qn(N)-y&&la(b>32?wv(N+";",i,n,y-1,f):wv(ve(N," ","")+";",i,n,y-2,f),f);break;case 59:N+=";";default:if(la(A=_v(N,t,n,m,w,o,h,_,k=[],M=[],y,l),l),x===123)if(w===0)Sc(N,t,A,A,k,l,y,h,M);else switch(S===99&&ht(N,3)===110?100:S){case 100:case 108:case 109:case 115:Sc(e,A,A,i&&la(_v(e,A,A,0,0,o,h,_,o,k=[],y,M),M),o,M,y,h,i?k:M);break;default:Sc(N,A,A,A,[""],M,0,h,M)}}m=w=b=0,j=v=1,_=N="",y=u;break;case 58:y=1+qn(N),b=$;default:if(j<1){if(x==123)--j;else if(x==125&&j++==0&&Ik()==125)continue}switch(N+=wm(x),x*j){case 38:v=w>0?1:(N+="\f",-1);break;case 44:h[m++]=(qn(N)-1)*v,v=1;break;case 64:Qi()===45&&(N+=qd(kn())),S=Qi(),w=y=qn(_=N+=Uk(bc())),x++;break;case 45:$===45&&qn(N)==2&&(j=0)}}return l}function _v(e,t,n,i,o,l,u,h,f,m,w,y){for(var S=o-1,b=o===0?l:[""],$=Mw(b),j=0,T=0,v=0;j<i;++j)for(var x=0,_=gs(e,S+1,S=Aw(T=u[j])),k=e;x<$;++x)(k=zw(T>0?b[x]+" "+_:ve(_,/&\f/g,b[x])))&&(f[v++]=k);return ku(e,t,n,o===0?Cu:h,f,m,w,y)}function Zk(e,t,n,i){return ku(e,t,n,Ew,wm(Rk()),gs(e,2,-2),0,i)}function wv(e,t,n,i,o){return ku(e,t,n,_m,gs(e,0,i),gs(e,i+1,-1),i,o)}function Iw(e,t,n){switch(zk(e,t)){case 5103:return Le+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Le+e+e;case 4789:return va+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Le+e+va+e+Ie+e+e;case 5936:switch(ht(e,t+11)){case 114:return Le+e+Ie+ve(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Le+e+Ie+ve(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Le+e+Ie+ve(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Le+e+Ie+e+e;case 6165:return Le+e+Ie+"flex-"+e+e;case 5187:return Le+e+ve(e,/(\w+).+(:[^]+)/,Le+"box-$1$2"+Ie+"flex-$1$2")+e;case 5443:return Le+e+Ie+"flex-item-"+ve(e,/flex-|-self/g,"")+(ur(e,/flex-|baseline/)?"":Ie+"grid-row-"+ve(e,/flex-|-self/g,""))+e;case 4675:return Le+e+Ie+"flex-line-pack"+ve(e,/align-content|flex-|-self/g,"")+e;case 5548:return Le+e+Ie+ve(e,"shrink","negative")+e;case 5292:return Le+e+Ie+ve(e,"basis","preferred-size")+e;case 6060:return Le+"box-"+ve(e,"-grow","")+Le+e+Ie+ve(e,"grow","positive")+e;case 4554:return Le+ve(e,/([^-])(transform)/g,"$1"+Le+"$2")+e;case 6187:return ve(ve(ve(e,/(zoom-|grab)/,Le+"$1"),/(image-set)/,Le+"$1"),e,"")+e;case 5495:case 3959:return ve(e,/(image-set\([^]*)/,Le+"$1$`$1");case 4968:return ve(ve(e,/(.+:)(flex-)?(.*)/,Le+"box-pack:$3"+Ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Le+e+e;case 4200:if(!ur(e,/flex-|baseline/))return Ie+"grid-column-align"+gs(e,t)+e;break;case 2592:case 3360:return Ie+ve(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,o){return t=o,ur(i.props,/grid-\w+-end/)})?~wc(e+(n=n[t].value),"span",0)?e:Ie+ve(e,"-start","")+e+Ie+"grid-row-span:"+(~wc(n,"span",0)?ur(n,/\d+/):+ur(n,/\d+/)-+ur(e,/\d+/))+";":Ie+ve(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return ur(i.props,/grid-\w+-start/)})?e:Ie+ve(ve(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ve(e,/(.+)-inline(.+)/,Le+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qn(e)-1-t>6)switch(ht(e,t+1)){case 109:if(ht(e,t+4)!==45)break;case 102:return ve(e,/(.+:)(.+)-([^]+)/,"$1"+Le+"$2-$3$1"+va+(ht(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~wc(e,"stretch",0)?Iw(ve(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ve(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,l,u,h,f,m){return Ie+o+":"+l+m+(u?Ie+o+"-span:"+(h?f:+f-+l)+m:"")+e});case 4949:if(ht(e,t+6)===121)return ve(e,":",":"+Le)+e;break;case 6444:switch(ht(e,ht(e,14)===45?18:11)){case 120:return ve(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Le+(ht(e,14)===45?"inline-":"")+"box$3$1"+Le+"$2$3$1"+Ie+"$2box$3")+e;case 100:return ve(e,":",":"+Ie)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ve(e,"scroll-","scroll-snap-")+e}return e}function nu(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function Wk(e,t,n,i){switch(e.type){case Ak:if(e.children.length)break;case Pk:case _m:return e.return=e.return||e.value;case Ew:return"";case Pw:return e.return=e.value+"{"+nu(e.children,i)+"}";case Cu:if(!qn(e.value=e.props.join(",")))return""}return qn(n=nu(e.children,i))?e.return=e.value+"{"+n+"}":""}function Vk(e){var t=Mw(e);return function(n,i,o,l){for(var u="",h=0;h<t;h++)u+=e[h](n,i,o,l)||"";return u}}function qk(e){return function(t){t.root||(t=t.return)&&e(t)}}function Gk(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case _m:e.return=Iw(e.value,e.length,n);return;case Pw:return nu([Mr(e,{value:ve(e.value,"@","@"+Le)})],i);case Cu:if(e.length)return Mk(n=e.props,function(o){switch(ur(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":bo(Mr(e,{props:[ve(o,/:(read-\w+)/,":"+va+"$1")]})),bo(Mr(e,{props:[o]})),rp(e,{props:xv(n,i)});break;case"::placeholder":bo(Mr(e,{props:[ve(o,/:(plac\w+)/,":"+Le+"input-$1")]})),bo(Mr(e,{props:[ve(o,/:(plac\w+)/,":"+va+"$1")]})),bo(Mr(e,{props:[ve(o,/:(plac\w+)/,Ie+"input-$1")]})),bo(Mr(e,{props:[o]})),rp(e,{props:xv(n,i)});break}return""})}}var Kk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qt={},vs=typeof process<"u"&&qt!==void 0&&(qt.REACT_APP_SC_ATTR||qt.SC_ATTR)||"data-styled",Nw="active",Dw="data-styled-version",Lu="6.1.19",bm=`/*!sc*/
`,ru=typeof window<"u"&&typeof document<"u",Qk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&qt!==void 0&&qt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&qt.REACT_APP_SC_DISABLE_SPEEDY!==""?qt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&qt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&qt!==void 0&&qt.SC_DISABLE_SPEEDY!==void 0&&qt.SC_DISABLE_SPEEDY!==""&&qt.SC_DISABLE_SPEEDY!=="false"&&qt.SC_DISABLE_SPEEDY),Yk={},Eu=Object.freeze([]),xs=Object.freeze({});function Ow(e,t,n){return n===void 0&&(n=xs),e.theme!==n.theme&&e.theme||t||n.theme}var Fw=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Jk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xk=/(^-|-$)/g;function bv(e){return e.replace(Jk,"-").replace(Xk,"")}var eT=/(a)(d)/gi,Bl=52,Sv=function(e){return String.fromCharCode(e+(e>25?39:97))};function sp(e){var t,n="";for(t=Math.abs(e);t>Bl;t=t/Bl|0)n=Sv(t%Bl)+n;return(Sv(t%Bl)+n).replace(eT,"$1-$2")}var Gd,Bw=5381,Zo=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Uw=function(e){return Zo(Bw,e)};function Hw(e){return sp(Uw(e)>>>0)}function tT(e){return e.displayName||e.name||"Component"}function Kd(e){return typeof e=="string"&&!0}var Zw=typeof Symbol=="function"&&Symbol.for,Ww=Zw?Symbol.for("react.memo"):60115,nT=Zw?Symbol.for("react.forward_ref"):60112,rT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},iT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},oT=((Gd={})[nT]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gd[Ww]=Vw,Gd);function jv(e){return("type"in(t=e)&&t.type.$$typeof)===Ww?Vw:"$$typeof"in e?oT[e.$$typeof]:rT;var t}var sT=Object.defineProperty,aT=Object.getOwnPropertyNames,Cv=Object.getOwnPropertySymbols,lT=Object.getOwnPropertyDescriptor,cT=Object.getPrototypeOf,$v=Object.prototype;function qw(e,t,n){if(typeof t!="string"){if($v){var i=cT(t);i&&i!==$v&&qw(e,i,n)}var o=aT(t);Cv&&(o=o.concat(Cv(t)));for(var l=jv(e),u=jv(t),h=0;h<o.length;++h){var f=o[h];if(!(f in iT||n&&n[f]||u&&f in u||l&&f in l)){var m=lT(t,f);try{sT(e,f,m)}catch{}}}}return e}function oo(e){return typeof e=="function"}function Sm(e){return typeof e=="object"&&"styledComponentId"in e}function Ni(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ap(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=e[i];return n}function Fa(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function lp(e,t,n){if(n===void 0&&(n=!1),!n&&!Fa(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=lp(e[i],t[i]);else if(Fa(t))for(var i in t)e[i]=lp(e[i],t[i]);return e}function jm(e,t){Object.defineProperty(e,"toString",{value:t})}function so(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var uT=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;t>=l;)if((l<<=1)<0)throw so(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var h=this.indexOfGroup(t+1),f=(u=0,n.length);u<f;u++)this.tag.insertRule(h,n[u])&&(this.groupSizes[t]++,h++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),o=i+n;this.groupSizes[t]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],o=this.indexOfGroup(t),l=o+i,u=o;u<l;u++)n+="".concat(this.tag.getRule(u)).concat(bm);return n},e}(),jc=new Map,iu=new Map,Cc=1,Ul=function(e){if(jc.has(e))return jc.get(e);for(;iu.has(Cc);)Cc++;var t=Cc++;return jc.set(e,t),iu.set(t,e),t},dT=function(e,t){Cc=t+1,jc.set(e,t),iu.set(t,e)},hT="style[".concat(vs,"][").concat(Dw,'="').concat(Lu,'"]'),fT=new RegExp("^".concat(vs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),pT=function(e,t,n){for(var i,o=n.split(","),l=0,u=o.length;l<u;l++)(i=o[l])&&e.registerName(t,i)},mT=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(bm),o=[],l=0,u=i.length;l<u;l++){var h=i[l].trim();if(h){var f=h.match(fT);if(f){var m=0|parseInt(f[1],10),w=f[2];m!==0&&(dT(w,m),pT(e,w,f[3]),e.getTag().insertRules(m,o)),o.length=0}else o.push(h)}}},kv=function(e){for(var t=document.querySelectorAll(hT),n=0,i=t.length;n<i;n++){var o=t[n];o&&o.getAttribute(vs)!==Nw&&(mT(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function gT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Gw=function(e){var t=document.head,n=e||t,i=document.createElement("style"),o=function(h){var f=Array.from(h.querySelectorAll("style[".concat(vs,"]")));return f[f.length-1]}(n),l=o!==void 0?o.nextSibling:null;i.setAttribute(vs,Nw),i.setAttribute(Dw,Lu);var u=gT();return u&&i.setAttribute("nonce",u),n.insertBefore(i,l),i},yT=function(){function e(t){this.element=Gw(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var u=i[o];if(u.ownerNode===n)return u}throw so(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),vT=function(){function e(t){this.element=Gw(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),xT=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Tv=ru,_T={isServer:!ru,useCSSOMInjection:!Qk},ou=function(){function e(t,n,i){t===void 0&&(t=xs),n===void 0&&(n={});var o=this;this.options=ft(ft({},_T),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&ru&&Tv&&(Tv=!1,kv(this)),jm(this,function(){return function(l){for(var u=l.getTag(),h=u.length,f="",m=function(y){var S=function(v){return iu.get(v)}(y);if(S===void 0)return"continue";var b=l.names.get(S),$=u.getGroup(y);if(b===void 0||!b.size||$.length===0)return"continue";var j="".concat(vs,".g").concat(y,'[id="').concat(S,'"]'),T="";b!==void 0&&b.forEach(function(v){v.length>0&&(T+="".concat(v,","))}),f+="".concat($).concat(j,'{content:"').concat(T,'"}').concat(bm)},w=0;w<h;w++)m(w);return f}(o)})}return e.registerId=function(t){return Ul(t)},e.prototype.rehydrate=function(){!this.server&&ru&&kv(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ft(ft({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var i=n.useCSSOMInjection,o=n.target;return n.isServer?new xT(o):i?new yT(o):new vT(o)}(this.options),new uT(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ul(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(Ul(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ul(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),wT=/&/g,bT=/^\s*\/\/.*$/gm;function Kw(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Kw(n.children,t)),n})}function ST(e){var t,n,i,o=xs,l=o.options,u=l===void 0?xs:l,h=o.plugins,f=h===void 0?Eu:h,m=function(S,b,$){return $.startsWith(n)&&$.endsWith(n)&&$.replaceAll(n,"").length>0?".".concat(t):S},w=f.slice();w.push(function(S){S.type===Cu&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(wT,n).replace(i,m))}),u.prefix&&w.push(Gk),w.push(Wk);var y=function(S,b,$,j){b===void 0&&(b=""),$===void 0&&($=""),j===void 0&&(j="&"),t=j,n=b,i=new RegExp("\\".concat(n,"\\b"),"g");var T=S.replace(bT,""),v=Hk($||b?"".concat($," ").concat(b," { ").concat(T," }"):T);u.namespace&&(v=Kw(v,u.namespace));var x=[];return nu(v,Vk(w.concat(qk(function(_){return x.push(_)})))),x};return y.hash=f.length?f.reduce(function(S,b){return b.name||so(15),Zo(S,b.name)},Bw).toString():"",y}var jT=new ou,cp=ST(),Qw=We.createContext({shouldForwardProp:void 0,styleSheet:jT,stylis:cp});Qw.Consumer;We.createContext(void 0);function up(){return z.useContext(Qw)}var CT=function(){function e(t,n){var i=this;this.inject=function(o,l){l===void 0&&(l=cp);var u=i.name+l.hash;o.hasNameForId(i.id,u)||o.insertRules(i.id,u,l(i.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,jm(this,function(){throw so(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=cp),this.name+t.hash},e}(),$T=function(e){return e>="A"&&e<="Z"};function Lv(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;$T(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var Yw=function(e){return e==null||e===!1||e===""},Jw=function(e){var t,n,i=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!Yw(l)&&(Array.isArray(l)&&l.isCss||oo(l)?i.push("".concat(Lv(o),":"),l,";"):Fa(l)?i.push.apply(i,Oa(Oa(["".concat(o," {")],Jw(l),!1),["}"],!1)):i.push("".concat(Lv(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Kk||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function ui(e,t,n,i){if(Yw(e))return[];if(Sm(e))return[".".concat(e.styledComponentId)];if(oo(e)){if(!oo(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return ui(o,t,n,i)}var l;return e instanceof CT?n?(e.inject(n,i),[e.getName(i)]):[e]:Fa(e)?Jw(e):Array.isArray(e)?Array.prototype.concat.apply(Eu,e.map(function(u){return ui(u,t,n,i)})):[e.toString()]}function Xw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(oo(n)&&!Sm(n))return!1}return!0}var kT=Uw(Lu),TT=function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Xw(t),this.componentId=n,this.baseHash=Zo(kT,n),this.baseStyle=i,ou.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Ni(o,this.staticRulesId);else{var l=ap(ui(this.rules,t,n,i)),u=sp(Zo(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,u)){var h=i(l,".".concat(u),void 0,this.componentId);n.insertRules(this.componentId,u,h)}o=Ni(o,u),this.staticRulesId=u}else{for(var f=Zo(this.baseHash,i.hash),m="",w=0;w<this.rules.length;w++){var y=this.rules[w];if(typeof y=="string")m+=y;else if(y){var S=ap(ui(y,t,n,i));f=Zo(f,S+w),m+=S}}if(m){var b=sp(f>>>0);n.hasNameForId(this.componentId,b)||n.insertRules(this.componentId,b,i(m,".".concat(b),void 0,this.componentId)),o=Ni(o,b)}}return o},e}(),Ba=We.createContext(void 0);Ba.Consumer;function LT(e){var t=We.useContext(Ba),n=z.useMemo(function(){return function(i,o){if(!i)throw so(14);if(oo(i)){var l=i(o);return l}if(Array.isArray(i)||typeof i!="object")throw so(8);return o?ft(ft({},o),i):i}(e.theme,t)},[e.theme,t]);return e.children?We.createElement(Ba.Provider,{value:n},e.children):null}var Qd={};function ET(e,t,n){var i=Sm(e),o=e,l=!Kd(e),u=t.attrs,h=u===void 0?Eu:u,f=t.componentId,m=f===void 0?function(k,M){var A=typeof k!="string"?"sc":bv(k);Qd[A]=(Qd[A]||0)+1;var N="".concat(A,"-").concat(Hw(Lu+A+Qd[A]));return M?"".concat(M,"-").concat(N):N}(t.displayName,t.parentComponentId):f,w=t.displayName,y=w===void 0?function(k){return Kd(k)?"styled.".concat(k):"Styled(".concat(tT(k),")")}(e):w,S=t.displayName&&t.componentId?"".concat(bv(t.displayName),"-").concat(t.componentId):t.componentId||m,b=i&&o.attrs?o.attrs.concat(h).filter(Boolean):h,$=t.shouldForwardProp;if(i&&o.shouldForwardProp){var j=o.shouldForwardProp;if(t.shouldForwardProp){var T=t.shouldForwardProp;$=function(k,M){return j(k,M)&&T(k,M)}}else $=j}var v=new TT(n,S,i?o.componentStyle:void 0);function x(k,M){return function(A,N,F){var U=A.attrs,R=A.componentStyle,Z=A.defaultProps,J=A.foldedComponentIds,de=A.styledComponentId,_e=A.target,ne=We.useContext(Ba),ue=up(),Qe=A.shouldForwardProp||ue.shouldForwardProp,B=Ow(N,ne,Z)||xs,re=function(me,le,rt){for(var Mt,An=ft(ft({},le),{className:void 0,theme:rt}),xi=0;xi<me.length;xi+=1){var $r=oo(Mt=me[xi])?Mt(An):Mt;for(var Rt in $r)An[Rt]=Rt==="className"?Ni(An[Rt],$r[Rt]):Rt==="style"?ft(ft({},An[Rt]),$r[Rt]):$r[Rt]}return le.className&&(An.className=Ni(An.className,le.className)),An}(U,N,B),V=re.as||_e,te={};for(var se in re)re[se]===void 0||se[0]==="$"||se==="as"||se==="theme"&&re.theme===B||(se==="forwardedAs"?te.as=re.forwardedAs:Qe&&!Qe(se,V)||(te[se]=re[se]));var Ae=function(me,le){var rt=up(),Mt=me.generateAndInjectStyles(le,rt.styleSheet,rt.stylis);return Mt}(R,re),we=Ni(J,de);return Ae&&(we+=" "+Ae),re.className&&(we+=" "+re.className),te[Kd(V)&&!Fw.has(V)?"class":"className"]=we,F&&(te.ref=F),z.createElement(V,te)}(_,k,M)}x.displayName=y;var _=We.forwardRef(x);return _.attrs=b,_.componentStyle=v,_.displayName=y,_.shouldForwardProp=$,_.foldedComponentIds=i?Ni(o.foldedComponentIds,o.styledComponentId):"",_.styledComponentId=S,_.target=i?o.target:e,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=i?function(M){for(var A=[],N=1;N<arguments.length;N++)A[N-1]=arguments[N];for(var F=0,U=A;F<U.length;F++)lp(M,U[F],!0);return M}({},o.defaultProps,k):k}}),jm(_,function(){return".".concat(_.styledComponentId)}),l&&qw(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function Ev(e,t){for(var n=[e[0]],i=0,o=t.length;i<o;i+=1)n.push(t[i],e[i+1]);return n}var Pv=function(e){return Object.assign(e,{isCss:!0})};function K(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(oo(e)||Fa(e))return Pv(ui(Ev(Eu,Oa([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?ui(i):Pv(ui(Ev(i,t)))}function dp(e,t,n){if(n===void 0&&(n=xs),!t)throw so(1,t);var i=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,n,K.apply(void 0,Oa([o],l,!1)))};return i.attrs=function(o){return dp(e,t,ft(ft({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return dp(e,t,ft(ft({},n),o))},i}var eb=function(e){return dp(ET,e)},g=eb;Fw.forEach(function(e){g[e]=eb(e)});var PT=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Xw(t),ou.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,i,o){var l=o(ap(ui(this.rules,n,i,o)),""),u=this.componentId+t;i.insertRules(u,u,l)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,i,o){t>2&&ou.registerId(this.componentId+t),this.removeStyles(t,i),this.createStyles(t,n,i,o)},e}();function AT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=K.apply(void 0,Oa([e],t,!1)),o="sc-global-".concat(Hw(JSON.stringify(i))),l=new PT(i,o),u=function(f){var m=up(),w=We.useContext(Ba),y=We.useRef(m.styleSheet.allocateGSInstance(o)).current;return m.styleSheet.server&&h(y,f,m.styleSheet,w,m.stylis),We.useLayoutEffect(function(){if(!m.styleSheet.server)return h(y,f,m.styleSheet,w,m.stylis),function(){return l.removeStyles(y,m.styleSheet)}},[y,f,m.styleSheet,w,m.stylis]),null};function h(f,m,w,y,S){if(l.isStatic)l.renderStyles(f,Yk,w,S);else{var b=ft(ft({},m),{theme:Ow(m,y,u.defaultProps)});l.renderStyles(f,b,w,S)}}return We.memo(u)}const zT=g.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
  padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.md};
  background-color: ${e=>e.theme.colors.surface.medium};
  border-bottom: 1px solid ${e=>e.theme.colors.primary.blue};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  
  @media (max-width: 768px) {
    padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
    font-size: ${e=>e.theme.typography.fontSize.xs};
  }
`,MT=g.button`
  background: none;
  border: none;
  color: ${e=>e.$isLast?e.theme.colors.primary.orange:e.theme.colors.primary.blue};
  font-family: inherit;
  font-size: inherit;
  font-weight: ${e=>e.$isLast?"bold":"normal"};
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: ${e=>e.$isLast?"default":"pointer"};
  padding: 0;
  
  &:hover:not(:disabled) {
    color: ${e=>e.theme.colors.primary.orangeLight};
  }
  
  &:disabled {
    cursor: default;
  }
`,RT=g.span`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
`,IT={"/":"Dashboard","/dashboard":"Dashboard","/boats":"Vessels","/boats/new":"New Vessel","/trips":"Trip Log","/notes":"Notes","/notes/new":"New Note","/todos":"To-Do Lists","/todos/new":"New List","/maintenance":"Maintenance","/maintenance/templates/new":"New Template","/map":"Navigation","/reports":"Reports","/reports/license":"License Progress","/reports/maintenance":"Maintenance Reports","/calendar":"Calendar","/photos":"Photo Gallery","/settings":"Settings","/settings/backup":"Backup Manager"},NT=()=>{const e=Cs(),t=xt(),i=(()=>{const o=e.pathname.split("/").filter(Boolean),l=[];e.pathname!=="/"&&l.push({label:"Dashboard",path:"/"});let u="";return o.forEach(h=>{if(u+=`/${h}`,u==="/"&&e.pathname==="/")return;const f=IT[u]||h.charAt(0).toUpperCase()+h.slice(1);l.push({label:f,path:u})}),l})();return e.pathname==="/"||e.pathname==="/dashboard"?null:s.jsx(zT,{children:i.map((o,l)=>s.jsxs(We.Fragment,{children:[s.jsx(MT,{$isLast:l===i.length-1,onClick:()=>!o.path||l===i.length-1?void 0:t(o.path),disabled:l===i.length-1,children:o.label}),l<i.length-1&&s.jsx(RT,{children:"→"})]},o.path))})},DT=g.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${e=>e.theme.colors.background};
`,OT=g.header`
  background-color: ${e=>e.theme.colors.surface.dark};
  padding: ${e=>e.theme.spacing.md};
  border-bottom: 2px solid ${e=>e.theme.colors.primary.orange};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: ${e=>e.theme.spacing.md};
    align-items: stretch;
  }
`,FT=g.h1`
  color: ${e=>e.theme.colors.primary.orange};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  cursor: pointer;
  
  &:hover {
    color: ${e=>e.theme.colors.primary.orangeLight};
  }
  
  @media (max-width: 1024px) {
    text-align: center;
    font-size: ${e=>e.theme.typography.fontSize.lg};
  }
  
  @media (max-width: 480px) {
    font-size: ${e=>e.theme.typography.fontSize.md};
    letter-spacing: 1px;
  }
`,BT=g.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  
  @media (max-width: 768px) {
    display: ${e=>e.$isOpen?"flex":"none"};
    flex-direction: column;
    width: 100%;
    gap: 8px;
  }
`,UT=g.button`
  display: none;
  background: transparent;
  border: 2px solid ${e=>e.theme.colors.primary.blue};
  color: ${e=>e.theme.colors.primary.blue};
  padding: 8px 12px;
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${e=>e.theme.colors.primary.orange};
    color: ${e=>e.theme.colors.primary.orange};
  }
  
  @media (max-width: 768px) {
    display: block;
    align-self: center;
  }
`,vn=g.button`
  background: ${e=>e.$isActive?e.theme.colors.primary.orange:"transparent"};
  border: 2px solid ${e=>e.$isActive?e.theme.colors.primary.orange:e.theme.colors.primary.blue};
  color: ${e=>e.$isActive?e.theme.colors.background:e.theme.colors.primary.blue};
  padding: 8px 16px;
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    border-color: ${e=>e.theme.colors.primary.orange};
    color: ${e=>e.$isActive?e.theme.colors.background:e.theme.colors.primary.orange};
    background: ${e=>e.$isActive?e.theme.colors.primary.orange:`${e.theme.colors.primary.orange}20`};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: 1024px) {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`,HT=g.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${e=>e.theme.spacing.lg};
  
  @media (max-width: 768px) {
    padding: ${e=>e.theme.spacing.md};
  }
  
  @media (max-width: 480px) {
    padding: ${e=>e.theme.spacing.sm};
  }
`,ZT=g.footer`
  background-color: ${e=>e.theme.colors.surface.dark};
  padding: ${e=>e.theme.spacing.md};
  border-top: 2px solid ${e=>e.theme.colors.primary.orange};
  text-align: center;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  
  @media (max-width: 480px) {
    padding: ${e=>e.theme.spacing.sm};
    font-size: ${e=>e.theme.typography.fontSize.xs};
  }
`,di=({children:e})=>{const t=xt(),n=Cs(),[i,o]=z.useState(!1),l=()=>{t("/"),o(!1)},u=m=>{t(m),o(!1)},h=()=>{o(!i)},f=m=>m==="/"||m==="/dashboard"?n.pathname==="/"||n.pathname==="/dashboard":n.pathname.startsWith(m);return s.jsxs(DT,{children:[s.jsxs(OT,{children:[s.jsx(FT,{onClick:l,children:"Captain's Log - LCARS Interface"}),s.jsx(UT,{onClick:h,children:i?"Close Menu":"Menu"}),s.jsxs(BT,{$isOpen:i,children:[s.jsx(vn,{$isActive:f("/"),onClick:()=>u("/"),children:"Dashboard"}),s.jsx(vn,{$isActive:f("/boats"),onClick:()=>u("/boats"),children:"Vessels"}),s.jsx(vn,{$isActive:f("/trips"),onClick:()=>u("/trips"),children:"Trip Log"}),s.jsx(vn,{$isActive:f("/notes"),onClick:()=>u("/notes"),children:"Notes"}),s.jsx(vn,{$isActive:f("/todos"),onClick:()=>u("/todos"),children:"To-Do Lists"}),s.jsx(vn,{$isActive:f("/maintenance"),onClick:()=>u("/maintenance"),children:"Maintenance"}),s.jsx(vn,{$isActive:f("/map"),onClick:()=>u("/map"),children:"Navigation"}),s.jsx(vn,{$isActive:f("/reports"),onClick:()=>u("/reports"),children:"Reports"}),s.jsx(vn,{$isActive:f("/calendar"),onClick:()=>u("/calendar"),children:"Calendar"}),s.jsx(vn,{$isActive:f("/photos"),onClick:()=>u("/photos"),children:"Photos"}),s.jsx(vn,{$isActive:f("/settings"),onClick:()=>u("/settings"),children:"Settings"})]})]}),s.jsx(NT,{}),s.jsx(HT,{children:e}),s.jsx(ZT,{children:"LCARS Interface v1.0 - Boat Tracking System"})]})},WT={primary:K`
    background-color: ${e=>e.theme.colors.primary.orange};
    color: ${e=>e.theme.colors.text.inverse};
    
    &:hover:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.orangeLight};
      box-shadow: ${e=>e.theme.shadows.glow};
    }
  `,secondary:K`
    background-color: ${e=>e.theme.colors.primary.purple};
    color: ${e=>e.theme.colors.text.primary};
    
    &:hover:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.purpleLight};
      box-shadow: 0 0 20px rgba(204, 153, 204, 0.3);
    }
  `,accent:K`
    background-color: ${e=>e.theme.colors.primary.blue};
    color: ${e=>e.theme.colors.text.primary};
    
    &:hover:not(:disabled) {
      background-color: ${e=>e.theme.colors.primary.blueLight};
      box-shadow: 0 0 20px rgba(102, 136, 204, 0.3);
    }
  `,danger:K`
    background-color: ${e=>e.theme.colors.status.error};
    color: ${e=>e.theme.colors.text.inverse};
    
    &:hover:not(:disabled) {
      background-color: #FF8888;
      box-shadow: 0 0 20px rgba(255, 102, 102, 0.3);
    }
  `},VT={sm:K`
    padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.md};
    font-size: ${e=>e.theme.typography.fontSize.sm};
    border-radius: ${e=>e.theme.borderRadius.lg};
  `,md:K`
    padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.lg};
    font-size: ${e=>e.theme.typography.fontSize.md};
    border-radius: ${e=>e.theme.borderRadius.xl};
  `,lg:K`
    padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.xl};
    font-size: ${e=>e.theme.typography.fontSize.lg};
    border-radius: ${e=>e.theme.borderRadius.xl};
  `},qT=g.button`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  transition: all ${e=>e.theme.animation.normal} ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.theme.spacing.sm};
  white-space: nowrap;
  
  ${e=>WT[e.variant]}
  ${e=>VT[e.size]}
  
  &:disabled {
    background-color: ${e=>e.theme.colors.interactive.disabled};
    color: ${e=>e.theme.colors.text.muted};
    cursor: not-allowed;
    box-shadow: none;
  }
  
  &:active:not(:disabled) {
    transform: translateY(1px);
  }
  
  &:focus {
    outline: 2px solid ${e=>e.theme.colors.primary.orangeLight};
    outline-offset: 2px;
  }
`,G=({children:e,variant:t="primary",size:n="md",disabled:i=!1,onClick:o,className:l,type:u="button"})=>s.jsx(qT,{variant:t,size:n,disabled:i,onClick:o,className:l,type:u,children:e}),GT={primary:K`
    border: 2px solid ${e=>e.theme.colors.primary.orange};
    background-color: ${e=>e.theme.colors.surface.dark};
    
    .panel-header {
      background-color: ${e=>e.theme.colors.primary.orange};
      color: ${e=>e.theme.colors.text.inverse};
    }
  `,secondary:K`
    border: 2px solid ${e=>e.theme.colors.primary.purple};
    background-color: ${e=>e.theme.colors.surface.dark};
    
    .panel-header {
      background-color: ${e=>e.theme.colors.primary.purple};
      color: ${e=>e.theme.colors.text.primary};
    }
  `,accent:K`
    border: 2px solid ${e=>e.theme.colors.primary.blue};
    background-color: ${e=>e.theme.colors.surface.dark};
    
    .panel-header {
      background-color: ${e=>e.theme.colors.primary.blue};
      color: ${e=>e.theme.colors.text.primary};
    }
  `},KT={none:K`
    padding: 0;
  `,sm:K`
    padding: ${e=>e.theme.spacing.sm};
  `,md:K`
    padding: ${e=>e.theme.spacing.md};
  `,lg:K`
    padding: ${e=>e.theme.spacing.lg};
  `},QT=g.div`
  border-radius: ${e=>e.theme.borderRadius.lg};
  overflow: hidden;
  
  ${e=>GT[e.variant]}
`,YT=g.div`
  padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.md};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,JT=g.div`
  ${e=>KT[e.padding]}
`,X=({children:e,title:t,variant:n="primary",padding:i="md",className:o})=>s.jsxs(QT,{variant:n,padding:i,className:o,children:[t&&s.jsx(YT,{className:"panel-header",children:t}),s.jsx(JT,{padding:i,children:e})]}),XT={"top-left":K`
    border-top-left-radius: 0;
    border-top-right-radius: 100%;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 0;
  `,"top-right":K`
    border-top-left-radius: 100%;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 100%;
  `,"bottom-left":K`
    border-top-left-radius: 100%;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 100%;
  `,"bottom-right":K`
    border-top-left-radius: 0;
    border-top-right-radius: 100%;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 0;
  `},eL={sm:K`
    width: 40px;
    height: 40px;
  `,md:K`
    width: 60px;
    height: 60px;
  `,lg:K`
    width: 80px;
    height: 80px;
  `},tL={orange:K`
    background-color: ${e=>e.theme.colors.primary.orange};
  `,purple:K`
    background-color: ${e=>e.theme.colors.primary.purple};
  `,blue:K`
    background-color: ${e=>e.theme.colors.primary.blue};
  `},nL=g.div`
  display: inline-block;
  flex-shrink: 0;
  
  ${e=>XT[e.position]}
  ${e=>eL[e.size]}
  ${e=>tL[e.color]}
`,Hl=({position:e,size:t="md",color:n="orange",className:i})=>s.jsx(nL,{position:e,size:t,color:n,className:i,"aria-hidden":"true"}),rL={orange:K`
    background-color: ${e=>e.theme.colors.primary.orange};
  `,purple:K`
    background-color: ${e=>e.theme.colors.primary.purple};
  `,blue:K`
    background-color: ${e=>e.theme.colors.primary.blue};
  `},iL=g.div`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>typeof e.width=="number"?`${e.width}px`:e.width};
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height};
  border-radius: ${e=>e.theme.borderRadius.pill};
  
  ${e=>rL[e.color]}
  
  ${e=>e.orientation==="horizontal"&&K`
    min-height: 8px;
  `}
  
  ${e=>e.orientation==="vertical"&&K`
    min-width: 8px;
  `}
`,Zl=({width:e="100%",height:t="8px",color:n="orange",orientation:i="horizontal",className:o})=>{const l=i==="vertical"?"8px":e,u=i==="horizontal"?"8px":t;return s.jsx(iL,{width:l,height:u,color:n,orientation:i,className:o,"aria-hidden":"true"})},oL={left:K`
    border-right: 2px solid ${e=>e.theme.colors.primary.orange};
    padding-right: ${e=>e.theme.spacing.md};
  `,right:K`
    border-left: 2px solid ${e=>e.theme.colors.primary.orange};
    padding-left: ${e=>e.theme.spacing.md};
  `},sL={sm:K`
    gap: ${e=>e.theme.spacing.sm};
  `,md:K`
    gap: ${e=>e.theme.spacing.md};
  `,lg:K`
    gap: ${e=>e.theme.spacing.lg};
  `},aL=g.div`
  display: flex;
  flex-direction: column;
  width: ${e=>typeof e.width=="number"?`${e.width}px`:e.width};
  min-height: 100%;
  
  ${e=>oL[e.position]}
  ${e=>sL[e.gap]}
`,lL=g.div`
  flex-shrink: 0;
`,Tn=({children:e,width:t="200px",position:n="left",gap:i="md",className:o})=>s.jsx(aL,{width:t,position:n,gap:i,className:o,children:We.Children.map(e,(l,u)=>s.jsx(lL,{children:l},u))}),cL={sm:K`
    .data-label {
      font-size: ${e=>e.theme.typography.fontSize.xs};
    }
    .data-value {
      font-size: ${e=>e.theme.typography.fontSize.md};
    }
    .data-unit {
      font-size: ${e=>e.theme.typography.fontSize.sm};
    }
  `,md:K`
    .data-label {
      font-size: ${e=>e.theme.typography.fontSize.sm};
    }
    .data-value {
      font-size: ${e=>e.theme.typography.fontSize.lg};
    }
    .data-unit {
      font-size: ${e=>e.theme.typography.fontSize.md};
    }
  `,lg:K`
    .data-label {
      font-size: ${e=>e.theme.typography.fontSize.md};
    }
    .data-value {
      font-size: ${e=>e.theme.typography.fontSize.xl};
    }
    .data-unit {
      font-size: ${e=>e.theme.typography.fontSize.lg};
    }
  `},uL={orange:K`
    .data-value {
      color: ${e=>e.theme.colors.primary.orange};
    }
  `,purple:K`
    .data-value {
      color: ${e=>e.theme.colors.primary.purple};
    }
  `,blue:K`
    .data-value {
      color: ${e=>e.theme.colors.primary.blue};
    }
  `,green:K`
    .data-value {
      color: ${e=>e.theme.colors.status.success};
    }
  `},dL=g.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing.xs};
  padding: ${e=>e.theme.spacing.sm};
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 1px solid ${e=>e.theme.colors.surface.light};
  border-radius: ${e=>e.theme.borderRadius.sm};
  
  ${e=>cL[e.size]}
  ${e=>uL[e.color]}
`,hL=g.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${e=>e.theme.colors.text.secondary};
`,fL=g.div`
  display: flex;
  align-items: baseline;
  gap: ${e=>e.theme.spacing.xs};
`,pL=g.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  line-height: ${e=>e.theme.typography.lineHeight.tight};
`,mL=g.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
`,q=({label:e,value:t,unit:n,size:i="md",color:o="orange",className:l})=>s.jsxs(dL,{size:i,color:o,className:l,children:[s.jsx(hL,{className:"data-label",children:e}),s.jsxs(fL,{children:[s.jsx(pL,{className:"data-value",children:t}),n&&s.jsx(mL,{className:"data-unit",children:n})]})]}),gL={1:K`
    font-size: ${e=>e.theme.typography.fontSize.xxxl};
  `,2:K`
    font-size: ${e=>e.theme.typography.fontSize.xxl};
  `,3:K`
    font-size: ${e=>e.theme.typography.fontSize.xl};
  `,4:K`
    font-size: ${e=>e.theme.typography.fontSize.lg};
  `,5:K`
    font-size: ${e=>e.theme.typography.fontSize.md};
  `,6:K`
    font-size: ${e=>e.theme.typography.fontSize.md};
  `},yL={orange:K`
    color: ${e=>e.theme.colors.primary.orange};
  `,purple:K`
    color: ${e=>e.theme.colors.primary.purple};
  `,blue:K`
    color: ${e=>e.theme.colors.primary.blue};
  `},vL={left:K`
    text-align: left;
  `,center:K`
    text-align: center;
  `,right:K`
    text-align: right;
  `},xL=g.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: ${e=>e.theme.typography.lineHeight.tight};
  margin: 0;
  
  ${e=>gL[e.level]}
  ${e=>yL[e.color]}
  ${e=>vL[e.align]}
`,ce=({children:e,level:t=1,color:n="orange",align:i="left",className:o})=>{const l=`h${t}`;return s.jsx(xL,{as:l,level:t,color:n,align:i,className:o,children:e})},_L={info:K`
    background-color: ${e=>e.theme.colors.primary.blue};
    border-color: ${e=>e.theme.colors.primary.blueLight};
    color: ${e=>e.theme.colors.text.primary};
  `,success:K`
    background-color: ${e=>e.theme.colors.status.success};
    border-color: #88FF88;
    color: ${e=>e.theme.colors.text.inverse};
  `,warning:K`
    background-color: ${e=>e.theme.colors.status.warning};
    border-color: #FFFF88;
    color: ${e=>e.theme.colors.text.inverse};
  `,error:K`
    background-color: ${e=>e.theme.colors.status.error};
    border-color: #FF8888;
    color: ${e=>e.theme.colors.text.primary};
  `},wL=g.div.withConfig({shouldForwardProp:e=>!["type","blink"].includes(e)})`
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
  
  ${e=>_L[e.type]}
  
  ${e=>e.blink&&K`
    animation: lcars-blink 1s infinite;
  `}
`,bL=g.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
`,SL=g.div`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,jL=g.div`
  flex: 1;
`,CL=g.button`
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
`,$L=e=>{switch(e){case"info":return"ℹ";case"success":return"✓";case"warning":return"⚠";case"error":return"✗";default:return"ℹ"}},En=({children:e,type:t="info",blink:n=!1,dismissible:i=!1,onDismiss:o,className:l})=>s.jsxs(wL,{type:t,blink:n,className:l,children:[s.jsxs(bL,{children:[s.jsx(SL,{children:$L(t)}),s.jsx(jL,{children:e})]}),i&&o&&s.jsx(CL,{onClick:o,"aria-label":"Dismiss alert",children:"×"})]}),kL={orange:K`
    .progress-fill {
      background: linear-gradient(90deg, 
        ${e=>e.theme.colors.primary.orange} 0%, 
        ${e=>e.theme.colors.primary.orangeLight} 100%
      );
    }
    .progress-text {
      color: ${e=>e.theme.colors.primary.orange};
    }
  `,purple:K`
    .progress-fill {
      background: linear-gradient(90deg, 
        ${e=>e.theme.colors.primary.purple} 0%, 
        ${e=>e.theme.colors.primary.purpleLight} 100%
      );
    }
    .progress-text {
      color: ${e=>e.theme.colors.primary.purple};
    }
  `,blue:K`
    .progress-fill {
      background: linear-gradient(90deg, 
        ${e=>e.theme.colors.primary.blue} 0%, 
        ${e=>e.theme.colors.primary.blueLight} 100%
      );
    }
    .progress-text {
      color: ${e=>e.theme.colors.primary.blue};
    }
  `,green:K`
    .progress-fill {
      background: linear-gradient(90deg, 
        ${e=>e.theme.colors.status.success} 0%, 
        #88FF88 100%
      );
    }
    .progress-text {
      color: ${e=>e.theme.colors.status.success};
    }
  `},TL={sm:K`
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
  `,md:K`
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
  `,lg:K`
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
  `},LL=g.div`
  ${e=>kL[e.color]}
  ${e=>TL[e.size]}
`,EL=g.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${e=>e.theme.colors.text.primary};
`,PL=g.div`
  background-color: ${e=>e.theme.colors.surface.light};
  border-radius: ${e=>e.theme.borderRadius.pill};
  overflow: hidden;
  position: relative;
  border: 1px solid ${e=>e.theme.colors.surface.light};
`,AL=g.div`
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
`,zL=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  color: ${e=>e.theme.colors.text.secondary};
`,Av=g.span`
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,su=({title:e,current:t,target:n,unit:i="",color:o="orange",size:l="md",showPercentage:u=!0,className:h})=>{const f=n>0?t/n*100:0,m=Math.round(f),w=t>=n;return s.jsxs(LL,{color:o,size:l,className:h,children:[s.jsx(EL,{className:"chart-title",children:e}),s.jsx(PL,{children:s.jsx(AL,{className:"progress-fill",progress:f})}),s.jsxs(zL,{className:"progress-stats",children:[s.jsxs("div",{children:[s.jsx(Av,{className:"progress-text",children:t}),i&&` ${i}`," / ",n,i&&` ${i}`]}),u&&s.jsxs("div",{className:"progress-text",children:[s.jsxs(Av,{children:[m,"%"]}),w&&" ✓"]})]})]})},ML={orange:K`
    .estimate-value {
      color: ${e=>e.theme.colors.primary.orange};
    }
    .estimate-border {
      border-color: ${e=>e.theme.colors.primary.orange};
    }
  `,purple:K`
    .estimate-value {
      color: ${e=>e.theme.colors.primary.purple};
    }
    .estimate-border {
      border-color: ${e=>e.theme.colors.primary.purple};
    }
  `,blue:K`
    .estimate-value {
      color: ${e=>e.theme.colors.primary.blue};
    }
    .estimate-border {
      border-color: ${e=>e.theme.colors.primary.blue};
    }
  `,green:K`
    .estimate-value {
      color: ${e=>e.theme.colors.status.success};
    }
    .estimate-border {
      border-color: ${e=>e.theme.colors.status.success};
    }
  `},RL={sm:K`
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
  `,md:K`
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
  `,lg:K`
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
  `},IL=g.div`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid;
  border-radius: ${e=>e.theme.borderRadius.lg};
  text-align: center;
  position: relative;
  
  ${e=>ML[e.color]}
  ${e=>RL[e.size]}
  
  ${e=>e.isComplete&&K`
    .estimate-value {
      color: ${t=>t.theme.colors.status.success};
    }
    .estimate-border {
      border-color: ${t=>t.theme.colors.status.success};
    }
    
    &::after {
      content: '✓ COMPLETE';
      position: absolute;
      top: 8px;
      right: 8px;
      font-size: ${t=>t.theme.typography.fontSize.xs};
      color: ${t=>t.theme.colors.status.success};
      font-weight: ${t=>t.theme.typography.fontWeight.bold};
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  `}
`,NL=g.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: ${e=>e.theme.spacing.sm};
`,Yd=g.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  line-height: ${e=>e.theme.typography.lineHeight.tight};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,Jd=g.div`
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Xd=({title:e,estimatedDate:t,daysRemaining:n,isComplete:i=!1,color:o="orange",size:l="md",className:u})=>{const h=m=>{try{return new Date(m).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return"Unknown"}},f=m=>{if(m<=0)return"Goal Achieved";if(m===1)return"1 Day";if(m<30)return`${m} Days`;if(m<365){const y=Math.round(m/30);return y===1?"1 Month":`${y} Months`}const w=Math.round(m/365);return w===1?"1 Year":`${w} Years`};return s.jsxs(IL,{color:o,size:l,isComplete:i,className:`estimate-border ${u||""}`,children:[s.jsx(NL,{className:"estimate-title",children:e}),i?s.jsxs(s.Fragment,{children:[s.jsx(Yd,{className:"estimate-value",children:"ACHIEVED"}),s.jsx(Jd,{className:"estimate-subtitle",children:"Goal Complete"})]}):s.jsxs(s.Fragment,{children:[t&&s.jsxs(s.Fragment,{children:[s.jsx(Yd,{className:"estimate-value",children:h(t)}),s.jsx(Jd,{className:"estimate-subtitle",children:"Estimated Completion"})]}),n!==void 0&&s.jsxs(s.Fragment,{children:[s.jsx(Yd,{className:"estimate-value",children:f(n)}),s.jsx(Jd,{className:"estimate-subtitle",children:"Remaining"})]})]})]})};function tb(e,t){return function(){return e.apply(t,arguments)}}const{toString:DL}=Object.prototype,{getPrototypeOf:Cm}=Object,{iterator:Pu,toStringTag:nb}=Symbol,Au=(e=>t=>{const n=DL.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Pn=e=>(e=e.toLowerCase(),t=>Au(t)===e),zu=e=>t=>typeof t===e,{isArray:Ts}=Array,_s=zu("undefined");function Xa(e){return e!==null&&!_s(e)&&e.constructor!==null&&!_s(e.constructor)&&Zt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const rb=Pn("ArrayBuffer");function OL(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&rb(e.buffer),t}const FL=zu("string"),Zt=zu("function"),ib=zu("number"),el=e=>e!==null&&typeof e=="object",BL=e=>e===!0||e===!1,$c=e=>{if(Au(e)!=="object")return!1;const t=Cm(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(nb in e)&&!(Pu in e)},UL=e=>{if(!el(e)||Xa(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},HL=Pn("Date"),ZL=Pn("File"),WL=Pn("Blob"),VL=Pn("FileList"),qL=e=>el(e)&&Zt(e.pipe),GL=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Zt(e.append)&&((t=Au(e))==="formdata"||t==="object"&&Zt(e.toString)&&e.toString()==="[object FormData]"))},KL=Pn("URLSearchParams"),[QL,YL,JL,XL]=["ReadableStream","Request","Response","Headers"].map(Pn),eE=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function tl(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let i,o;if(typeof e!="object"&&(e=[e]),Ts(e))for(i=0,o=e.length;i<o;i++)t.call(null,e[i],i,e);else{if(Xa(e))return;const l=n?Object.getOwnPropertyNames(e):Object.keys(e),u=l.length;let h;for(i=0;i<u;i++)h=l[i],t.call(null,e[h],h,e)}}function ob(e,t){if(Xa(e))return null;t=t.toLowerCase();const n=Object.keys(e);let i=n.length,o;for(;i-- >0;)if(o=n[i],t===o.toLowerCase())return o;return null}const Di=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,sb=e=>!_s(e)&&e!==Di;function hp(){const{caseless:e,skipUndefined:t}=sb(this)&&this||{},n={},i=(o,l)=>{const u=e&&ob(n,l)||l;$c(n[u])&&$c(o)?n[u]=hp(n[u],o):$c(o)?n[u]=hp({},o):Ts(o)?n[u]=o.slice():(!t||!_s(o))&&(n[u]=o)};for(let o=0,l=arguments.length;o<l;o++)arguments[o]&&tl(arguments[o],i);return n}const tE=(e,t,n,{allOwnKeys:i}={})=>(tl(t,(o,l)=>{n&&Zt(o)?e[l]=tb(o,n):e[l]=o},{allOwnKeys:i}),e),nE=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),rE=(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},iE=(e,t,n,i)=>{let o,l,u;const h={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),l=o.length;l-- >0;)u=o[l],(!i||i(u,e,t))&&!h[u]&&(t[u]=e[u],h[u]=!0);e=n!==!1&&Cm(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},oE=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return i!==-1&&i===n},sE=e=>{if(!e)return null;if(Ts(e))return e;let t=e.length;if(!ib(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},aE=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Cm(Uint8Array)),lE=(e,t)=>{const i=(e&&e[Pu]).call(e);let o;for(;(o=i.next())&&!o.done;){const l=o.value;t.call(e,l[0],l[1])}},cE=(e,t)=>{let n;const i=[];for(;(n=e.exec(t))!==null;)i.push(n);return i},uE=Pn("HTMLFormElement"),dE=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,o){return i.toUpperCase()+o}),zv=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),hE=Pn("RegExp"),ab=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};tl(n,(o,l)=>{let u;(u=t(o,l,e))!==!1&&(i[l]=u||o)}),Object.defineProperties(e,i)},fE=e=>{ab(e,(t,n)=>{if(Zt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=e[n];if(Zt(i)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},pE=(e,t)=>{const n={},i=o=>{o.forEach(l=>{n[l]=!0})};return Ts(e)?i(e):i(String(e).split(t)),n},mE=()=>{},gE=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function yE(e){return!!(e&&Zt(e.append)&&e[nb]==="FormData"&&e[Pu])}const vE=e=>{const t=new Array(10),n=(i,o)=>{if(el(i)){if(t.indexOf(i)>=0)return;if(Xa(i))return i;if(!("toJSON"in i)){t[o]=i;const l=Ts(i)?[]:{};return tl(i,(u,h)=>{const f=n(u,o+1);!_s(f)&&(l[h]=f)}),t[o]=void 0,l}}return i};return n(e,0)},xE=Pn("AsyncFunction"),_E=e=>e&&(el(e)||Zt(e))&&Zt(e.then)&&Zt(e.catch),lb=((e,t)=>e?setImmediate:t?((n,i)=>(Di.addEventListener("message",({source:o,data:l})=>{o===Di&&l===n&&i.length&&i.shift()()},!1),o=>{i.push(o),Di.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Zt(Di.postMessage)),wE=typeof queueMicrotask<"u"?queueMicrotask.bind(Di):typeof process<"u"&&process.nextTick||lb,bE=e=>e!=null&&Zt(e[Pu]),O={isArray:Ts,isArrayBuffer:rb,isBuffer:Xa,isFormData:GL,isArrayBufferView:OL,isString:FL,isNumber:ib,isBoolean:BL,isObject:el,isPlainObject:$c,isEmptyObject:UL,isReadableStream:QL,isRequest:YL,isResponse:JL,isHeaders:XL,isUndefined:_s,isDate:HL,isFile:ZL,isBlob:WL,isRegExp:hE,isFunction:Zt,isStream:qL,isURLSearchParams:KL,isTypedArray:aE,isFileList:VL,forEach:tl,merge:hp,extend:tE,trim:eE,stripBOM:nE,inherits:rE,toFlatObject:iE,kindOf:Au,kindOfTest:Pn,endsWith:oE,toArray:sE,forEachEntry:lE,matchAll:cE,isHTMLForm:uE,hasOwnProperty:zv,hasOwnProp:zv,reduceDescriptors:ab,freezeMethods:fE,toObjectSet:pE,toCamelCase:dE,noop:mE,toFiniteNumber:gE,findKey:ob,global:Di,isContextDefined:sb,isSpecCompliantForm:yE,toJSONObject:vE,isAsyncFn:xE,isThenable:_E,setImmediate:lb,asap:wE,isIterable:bE};function fe(e,t,n,i,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),o&&(this.response=o,this.status=o.status?o.status:null)}O.inherits(fe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:O.toJSONObject(this.config),code:this.code,status:this.status}}});const cb=fe.prototype,ub={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ub[e]={value:e}});Object.defineProperties(fe,ub);Object.defineProperty(cb,"isAxiosError",{value:!0});fe.from=(e,t,n,i,o,l)=>{const u=Object.create(cb);O.toFlatObject(e,u,function(w){return w!==Error.prototype},m=>m!=="isAxiosError");const h=e&&e.message?e.message:"Error",f=t==null&&e?e.code:t;return fe.call(u,h,f,n,i,o),e&&u.cause==null&&Object.defineProperty(u,"cause",{value:e,configurable:!0}),u.name=e&&e.name||"Error",l&&Object.assign(u,l),u};const SE=null;function fp(e){return O.isPlainObject(e)||O.isArray(e)}function db(e){return O.endsWith(e,"[]")?e.slice(0,-2):e}function Mv(e,t,n){return e?e.concat(t).map(function(o,l){return o=db(o),!n&&l?"["+o+"]":o}).join(n?".":""):t}function jE(e){return O.isArray(e)&&!e.some(fp)}const CE=O.toFlatObject(O,{},null,function(t){return/^is[A-Z]/.test(t)});function Mu(e,t,n){if(!O.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=O.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(j,T){return!O.isUndefined(T[j])});const i=n.metaTokens,o=n.visitor||w,l=n.dots,u=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&O.isSpecCompliantForm(t);if(!O.isFunction(o))throw new TypeError("visitor must be a function");function m($){if($===null)return"";if(O.isDate($))return $.toISOString();if(O.isBoolean($))return $.toString();if(!f&&O.isBlob($))throw new fe("Blob is not supported. Use a Buffer instead.");return O.isArrayBuffer($)||O.isTypedArray($)?f&&typeof Blob=="function"?new Blob([$]):Buffer.from($):$}function w($,j,T){let v=$;if($&&!T&&typeof $=="object"){if(O.endsWith(j,"{}"))j=i?j:j.slice(0,-2),$=JSON.stringify($);else if(O.isArray($)&&jE($)||(O.isFileList($)||O.endsWith(j,"[]"))&&(v=O.toArray($)))return j=db(j),v.forEach(function(_,k){!(O.isUndefined(_)||_===null)&&t.append(u===!0?Mv([j],k,l):u===null?j:j+"[]",m(_))}),!1}return fp($)?!0:(t.append(Mv(T,j,l),m($)),!1)}const y=[],S=Object.assign(CE,{defaultVisitor:w,convertValue:m,isVisitable:fp});function b($,j){if(!O.isUndefined($)){if(y.indexOf($)!==-1)throw Error("Circular reference detected in "+j.join("."));y.push($),O.forEach($,function(v,x){(!(O.isUndefined(v)||v===null)&&o.call(t,v,O.isString(x)?x.trim():x,j,S))===!0&&b(v,j?j.concat(x):[x])}),y.pop()}}if(!O.isObject(e))throw new TypeError("data must be an object");return b(e),t}function Rv(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(i){return t[i]})}function $m(e,t){this._pairs=[],e&&Mu(e,this,t)}const hb=$m.prototype;hb.append=function(t,n){this._pairs.push([t,n])};hb.toString=function(t){const n=t?function(i){return t.call(this,i,Rv)}:Rv;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function $E(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function fb(e,t,n){if(!t)return e;const i=n&&n.encode||$E;O.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let l;if(o?l=o(t,n):l=O.isURLSearchParams(t)?t.toString():new $m(t,n).toString(i),l){const u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+l}return e}class Iv{constructor(){this.handlers=[]}use(t,n,i){return this.handlers.push({fulfilled:t,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){O.forEach(this.handlers,function(i){i!==null&&t(i)})}}const pb={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},kE=typeof URLSearchParams<"u"?URLSearchParams:$m,TE=typeof FormData<"u"?FormData:null,LE=typeof Blob<"u"?Blob:null,EE={isBrowser:!0,classes:{URLSearchParams:kE,FormData:TE,Blob:LE},protocols:["http","https","file","blob","url","data"]},km=typeof window<"u"&&typeof document<"u",pp=typeof navigator=="object"&&navigator||void 0,PE=km&&(!pp||["ReactNative","NativeScript","NS"].indexOf(pp.product)<0),AE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",zE=km&&window.location.href||"http://localhost",ME=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:km,hasStandardBrowserEnv:PE,hasStandardBrowserWebWorkerEnv:AE,navigator:pp,origin:zE},Symbol.toStringTag,{value:"Module"})),St={...ME,...EE};function RE(e,t){return Mu(e,new St.classes.URLSearchParams,{visitor:function(n,i,o,l){return St.isNode&&O.isBuffer(n)?(this.append(i,n.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)},...t})}function IE(e){return O.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function NE(e){const t={},n=Object.keys(e);let i;const o=n.length;let l;for(i=0;i<o;i++)l=n[i],t[l]=e[l];return t}function mb(e){function t(n,i,o,l){let u=n[l++];if(u==="__proto__")return!0;const h=Number.isFinite(+u),f=l>=n.length;return u=!u&&O.isArray(o)?o.length:u,f?(O.hasOwnProp(o,u)?o[u]=[o[u],i]:o[u]=i,!h):((!o[u]||!O.isObject(o[u]))&&(o[u]=[]),t(n,i,o[u],l)&&O.isArray(o[u])&&(o[u]=NE(o[u])),!h)}if(O.isFormData(e)&&O.isFunction(e.entries)){const n={};return O.forEachEntry(e,(i,o)=>{t(IE(i),o,n,0)}),n}return null}function DE(e,t,n){if(O.isString(e))try{return(t||JSON.parse)(e),O.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(e)}const nl={transitional:pb,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const i=n.getContentType()||"",o=i.indexOf("application/json")>-1,l=O.isObject(t);if(l&&O.isHTMLForm(t)&&(t=new FormData(t)),O.isFormData(t))return o?JSON.stringify(mb(t)):t;if(O.isArrayBuffer(t)||O.isBuffer(t)||O.isStream(t)||O.isFile(t)||O.isBlob(t)||O.isReadableStream(t))return t;if(O.isArrayBufferView(t))return t.buffer;if(O.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let h;if(l){if(i.indexOf("application/x-www-form-urlencoded")>-1)return RE(t,this.formSerializer).toString();if((h=O.isFileList(t))||i.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Mu(h?{"files[]":t}:t,f&&new f,this.formSerializer)}}return l||o?(n.setContentType("application/json",!1),DE(t)):t}],transformResponse:[function(t){const n=this.transitional||nl.transitional,i=n&&n.forcedJSONParsing,o=this.responseType==="json";if(O.isResponse(t)||O.isReadableStream(t))return t;if(t&&O.isString(t)&&(i&&!this.responseType||o)){const u=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,this.parseReviver)}catch(h){if(u)throw h.name==="SyntaxError"?fe.from(h,fe.ERR_BAD_RESPONSE,this,null,this.response):h}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:St.classes.FormData,Blob:St.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};O.forEach(["delete","get","head","post","put","patch"],e=>{nl.headers[e]={}});const OE=O.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),FE=e=>{const t={};let n,i,o;return e&&e.split(`
`).forEach(function(u){o=u.indexOf(":"),n=u.substring(0,o).trim().toLowerCase(),i=u.substring(o+1).trim(),!(!n||t[n]&&OE[n])&&(n==="set-cookie"?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)}),t},Nv=Symbol("internals");function Ys(e){return e&&String(e).trim().toLowerCase()}function kc(e){return e===!1||e==null?e:O.isArray(e)?e.map(kc):String(e)}function BE(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}const UE=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function eh(e,t,n,i,o){if(O.isFunction(i))return i.call(this,t,n);if(o&&(t=n),!!O.isString(t)){if(O.isString(i))return t.indexOf(i)!==-1;if(O.isRegExp(i))return i.test(t)}}function HE(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,i)=>n.toUpperCase()+i)}function ZE(e,t){const n=O.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+n,{value:function(o,l,u){return this[i].call(this,t,o,l,u)},configurable:!0})})}let Wt=class{constructor(t){t&&this.set(t)}set(t,n,i){const o=this;function l(h,f,m){const w=Ys(f);if(!w)throw new Error("header name must be a non-empty string");const y=O.findKey(o,w);(!y||o[y]===void 0||m===!0||m===void 0&&o[y]!==!1)&&(o[y||f]=kc(h))}const u=(h,f)=>O.forEach(h,(m,w)=>l(m,w,f));if(O.isPlainObject(t)||t instanceof this.constructor)u(t,n);else if(O.isString(t)&&(t=t.trim())&&!UE(t))u(FE(t),n);else if(O.isObject(t)&&O.isIterable(t)){let h={},f,m;for(const w of t){if(!O.isArray(w))throw TypeError("Object iterator must return a key-value pair");h[m=w[0]]=(f=h[m])?O.isArray(f)?[...f,w[1]]:[f,w[1]]:w[1]}u(h,n)}else t!=null&&l(n,t,i);return this}get(t,n){if(t=Ys(t),t){const i=O.findKey(this,t);if(i){const o=this[i];if(!n)return o;if(n===!0)return BE(o);if(O.isFunction(n))return n.call(this,o,i);if(O.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ys(t),t){const i=O.findKey(this,t);return!!(i&&this[i]!==void 0&&(!n||eh(this,this[i],i,n)))}return!1}delete(t,n){const i=this;let o=!1;function l(u){if(u=Ys(u),u){const h=O.findKey(i,u);h&&(!n||eh(i,i[h],h,n))&&(delete i[h],o=!0)}}return O.isArray(t)?t.forEach(l):l(t),o}clear(t){const n=Object.keys(this);let i=n.length,o=!1;for(;i--;){const l=n[i];(!t||eh(this,this[l],l,t,!0))&&(delete this[l],o=!0)}return o}normalize(t){const n=this,i={};return O.forEach(this,(o,l)=>{const u=O.findKey(i,l);if(u){n[u]=kc(o),delete n[l];return}const h=t?HE(l):String(l).trim();h!==l&&delete n[l],n[h]=kc(o),i[h]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return O.forEach(this,(i,o)=>{i!=null&&i!==!1&&(n[o]=t&&O.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const i=new this(t);return n.forEach(o=>i.set(o)),i}static accessor(t){const i=(this[Nv]=this[Nv]={accessors:{}}).accessors,o=this.prototype;function l(u){const h=Ys(u);i[h]||(ZE(o,u),i[h]=!0)}return O.isArray(t)?t.forEach(l):l(t),this}};Wt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);O.reduceDescriptors(Wt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(i){this[n]=i}}});O.freezeMethods(Wt);function th(e,t){const n=this||nl,i=t||n,o=Wt.from(i.headers);let l=i.data;return O.forEach(e,function(h){l=h.call(n,l,o.normalize(),t?t.status:void 0)}),o.normalize(),l}function gb(e){return!!(e&&e.__CANCEL__)}function Ls(e,t,n){fe.call(this,e??"canceled",fe.ERR_CANCELED,t,n),this.name="CanceledError"}O.inherits(Ls,fe,{__CANCEL__:!0});function yb(e,t,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?e(n):t(new fe("Request failed with status code "+n.status,[fe.ERR_BAD_REQUEST,fe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function WE(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function VE(e,t){e=e||10;const n=new Array(e),i=new Array(e);let o=0,l=0,u;return t=t!==void 0?t:1e3,function(f){const m=Date.now(),w=i[l];u||(u=m),n[o]=f,i[o]=m;let y=l,S=0;for(;y!==o;)S+=n[y++],y=y%e;if(o=(o+1)%e,o===l&&(l=(l+1)%e),m-u<t)return;const b=w&&m-w;return b?Math.round(S*1e3/b):void 0}}function qE(e,t){let n=0,i=1e3/t,o,l;const u=(m,w=Date.now())=>{n=w,o=null,l&&(clearTimeout(l),l=null),e(...m)};return[(...m)=>{const w=Date.now(),y=w-n;y>=i?u(m,w):(o=m,l||(l=setTimeout(()=>{l=null,u(o)},i-y)))},()=>o&&u(o)]}const au=(e,t,n=3)=>{let i=0;const o=VE(50,250);return qE(l=>{const u=l.loaded,h=l.lengthComputable?l.total:void 0,f=u-i,m=o(f),w=u<=h;i=u;const y={loaded:u,total:h,progress:h?u/h:void 0,bytes:f,rate:m||void 0,estimated:m&&h&&w?(h-u)/m:void 0,event:l,lengthComputable:h!=null,[t?"download":"upload"]:!0};e(y)},n)},Dv=(e,t)=>{const n=e!=null;return[i=>t[0]({lengthComputable:n,total:e,loaded:i}),t[1]]},Ov=e=>(...t)=>O.asap(()=>e(...t)),GE=St.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,St.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(St.origin),St.navigator&&/(msie|trident)/i.test(St.navigator.userAgent)):()=>!0,KE=St.hasStandardBrowserEnv?{write(e,t,n,i,o,l,u){if(typeof document>"u")return;const h=[`${e}=${encodeURIComponent(t)}`];O.isNumber(n)&&h.push(`expires=${new Date(n).toUTCString()}`),O.isString(i)&&h.push(`path=${i}`),O.isString(o)&&h.push(`domain=${o}`),l===!0&&h.push("secure"),O.isString(u)&&h.push(`SameSite=${u}`),document.cookie=h.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function QE(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function YE(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function vb(e,t,n){let i=!QE(t);return e&&(i||n==!1)?YE(e,t):t}const Fv=e=>e instanceof Wt?{...e}:e;function ao(e,t){t=t||{};const n={};function i(m,w,y,S){return O.isPlainObject(m)&&O.isPlainObject(w)?O.merge.call({caseless:S},m,w):O.isPlainObject(w)?O.merge({},w):O.isArray(w)?w.slice():w}function o(m,w,y,S){if(O.isUndefined(w)){if(!O.isUndefined(m))return i(void 0,m,y,S)}else return i(m,w,y,S)}function l(m,w){if(!O.isUndefined(w))return i(void 0,w)}function u(m,w){if(O.isUndefined(w)){if(!O.isUndefined(m))return i(void 0,m)}else return i(void 0,w)}function h(m,w,y){if(y in t)return i(m,w);if(y in e)return i(void 0,m)}const f={url:l,method:l,data:l,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,withXSRFToken:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:h,headers:(m,w,y)=>o(Fv(m),Fv(w),y,!0)};return O.forEach(Object.keys({...e,...t}),function(w){const y=f[w]||o,S=y(e[w],t[w],w);O.isUndefined(S)&&y!==h||(n[w]=S)}),n}const xb=e=>{const t=ao({},e);let{data:n,withXSRFToken:i,xsrfHeaderName:o,xsrfCookieName:l,headers:u,auth:h}=t;if(t.headers=u=Wt.from(u),t.url=fb(vb(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),h&&u.set("Authorization","Basic "+btoa((h.username||"")+":"+(h.password?unescape(encodeURIComponent(h.password)):""))),O.isFormData(n)){if(St.hasStandardBrowserEnv||St.hasStandardBrowserWebWorkerEnv)u.setContentType(void 0);else if(O.isFunction(n.getHeaders)){const f=n.getHeaders(),m=["content-type","content-length"];Object.entries(f).forEach(([w,y])=>{m.includes(w.toLowerCase())&&u.set(w,y)})}}if(St.hasStandardBrowserEnv&&(i&&O.isFunction(i)&&(i=i(t)),i||i!==!1&&GE(t.url))){const f=o&&l&&KE.read(l);f&&u.set(o,f)}return t},JE=typeof XMLHttpRequest<"u",XE=JE&&function(e){return new Promise(function(n,i){const o=xb(e);let l=o.data;const u=Wt.from(o.headers).normalize();let{responseType:h,onUploadProgress:f,onDownloadProgress:m}=o,w,y,S,b,$;function j(){b&&b(),$&&$(),o.cancelToken&&o.cancelToken.unsubscribe(w),o.signal&&o.signal.removeEventListener("abort",w)}let T=new XMLHttpRequest;T.open(o.method.toUpperCase(),o.url,!0),T.timeout=o.timeout;function v(){if(!T)return;const _=Wt.from("getAllResponseHeaders"in T&&T.getAllResponseHeaders()),M={data:!h||h==="text"||h==="json"?T.responseText:T.response,status:T.status,statusText:T.statusText,headers:_,config:e,request:T};yb(function(N){n(N),j()},function(N){i(N),j()},M),T=null}"onloadend"in T?T.onloadend=v:T.onreadystatechange=function(){!T||T.readyState!==4||T.status===0&&!(T.responseURL&&T.responseURL.indexOf("file:")===0)||setTimeout(v)},T.onabort=function(){T&&(i(new fe("Request aborted",fe.ECONNABORTED,e,T)),T=null)},T.onerror=function(k){const M=k&&k.message?k.message:"Network Error",A=new fe(M,fe.ERR_NETWORK,e,T);A.event=k||null,i(A),T=null},T.ontimeout=function(){let k=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const M=o.transitional||pb;o.timeoutErrorMessage&&(k=o.timeoutErrorMessage),i(new fe(k,M.clarifyTimeoutError?fe.ETIMEDOUT:fe.ECONNABORTED,e,T)),T=null},l===void 0&&u.setContentType(null),"setRequestHeader"in T&&O.forEach(u.toJSON(),function(k,M){T.setRequestHeader(M,k)}),O.isUndefined(o.withCredentials)||(T.withCredentials=!!o.withCredentials),h&&h!=="json"&&(T.responseType=o.responseType),m&&([S,$]=au(m,!0),T.addEventListener("progress",S)),f&&T.upload&&([y,b]=au(f),T.upload.addEventListener("progress",y),T.upload.addEventListener("loadend",b)),(o.cancelToken||o.signal)&&(w=_=>{T&&(i(!_||_.type?new Ls(null,e,T):_),T.abort(),T=null)},o.cancelToken&&o.cancelToken.subscribe(w),o.signal&&(o.signal.aborted?w():o.signal.addEventListener("abort",w)));const x=WE(o.url);if(x&&St.protocols.indexOf(x)===-1){i(new fe("Unsupported protocol "+x+":",fe.ERR_BAD_REQUEST,e));return}T.send(l||null)})},eP=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let i=new AbortController,o;const l=function(m){if(!o){o=!0,h();const w=m instanceof Error?m:this.reason;i.abort(w instanceof fe?w:new Ls(w instanceof Error?w.message:w))}};let u=t&&setTimeout(()=>{u=null,l(new fe(`timeout ${t} of ms exceeded`,fe.ETIMEDOUT))},t);const h=()=>{e&&(u&&clearTimeout(u),u=null,e.forEach(m=>{m.unsubscribe?m.unsubscribe(l):m.removeEventListener("abort",l)}),e=null)};e.forEach(m=>m.addEventListener("abort",l));const{signal:f}=i;return f.unsubscribe=()=>O.asap(h),f}},tP=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let i=0,o;for(;i<n;)o=i+t,yield e.slice(i,o),i=o},nP=async function*(e,t){for await(const n of rP(e))yield*tP(n,t)},rP=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:i}=await t.read();if(n)break;yield i}}finally{await t.cancel()}},Bv=(e,t,n,i)=>{const o=nP(e,t);let l=0,u,h=f=>{u||(u=!0,i&&i(f))};return new ReadableStream({async pull(f){try{const{done:m,value:w}=await o.next();if(m){h(),f.close();return}let y=w.byteLength;if(n){let S=l+=y;n(S)}f.enqueue(new Uint8Array(w))}catch(m){throw h(m),m}},cancel(f){return h(f),o.return()}},{highWaterMark:2})},Uv=64*1024,{isFunction:Wl}=O,iP=(({Request:e,Response:t})=>({Request:e,Response:t}))(O.global),{ReadableStream:Hv,TextEncoder:Zv}=O.global,Wv=(e,...t)=>{try{return!!e(...t)}catch{return!1}},oP=e=>{e=O.merge.call({skipUndefined:!0},iP,e);const{fetch:t,Request:n,Response:i}=e,o=t?Wl(t):typeof fetch=="function",l=Wl(n),u=Wl(i);if(!o)return!1;const h=o&&Wl(Hv),f=o&&(typeof Zv=="function"?($=>j=>$.encode(j))(new Zv):async $=>new Uint8Array(await new n($).arrayBuffer())),m=l&&h&&Wv(()=>{let $=!1;const j=new n(St.origin,{body:new Hv,method:"POST",get duplex(){return $=!0,"half"}}).headers.has("Content-Type");return $&&!j}),w=u&&h&&Wv(()=>O.isReadableStream(new i("").body)),y={stream:w&&($=>$.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach($=>{!y[$]&&(y[$]=(j,T)=>{let v=j&&j[$];if(v)return v.call(j);throw new fe(`Response type '${$}' is not supported`,fe.ERR_NOT_SUPPORT,T)})});const S=async $=>{if($==null)return 0;if(O.isBlob($))return $.size;if(O.isSpecCompliantForm($))return(await new n(St.origin,{method:"POST",body:$}).arrayBuffer()).byteLength;if(O.isArrayBufferView($)||O.isArrayBuffer($))return $.byteLength;if(O.isURLSearchParams($)&&($=$+""),O.isString($))return(await f($)).byteLength},b=async($,j)=>{const T=O.toFiniteNumber($.getContentLength());return T??S(j)};return async $=>{let{url:j,method:T,data:v,signal:x,cancelToken:_,timeout:k,onDownloadProgress:M,onUploadProgress:A,responseType:N,headers:F,withCredentials:U="same-origin",fetchOptions:R}=xb($),Z=t||fetch;N=N?(N+"").toLowerCase():"text";let J=eP([x,_&&_.toAbortSignal()],k),de=null;const _e=J&&J.unsubscribe&&(()=>{J.unsubscribe()});let ne;try{if(A&&m&&T!=="get"&&T!=="head"&&(ne=await b(F,v))!==0){let te=new n(j,{method:"POST",body:v,duplex:"half"}),se;if(O.isFormData(v)&&(se=te.headers.get("content-type"))&&F.setContentType(se),te.body){const[Ae,we]=Dv(ne,au(Ov(A)));v=Bv(te.body,Uv,Ae,we)}}O.isString(U)||(U=U?"include":"omit");const ue=l&&"credentials"in n.prototype,Qe={...R,signal:J,method:T.toUpperCase(),headers:F.normalize().toJSON(),body:v,duplex:"half",credentials:ue?U:void 0};de=l&&new n(j,Qe);let B=await(l?Z(de,R):Z(j,Qe));const re=w&&(N==="stream"||N==="response");if(w&&(M||re&&_e)){const te={};["status","statusText","headers"].forEach(me=>{te[me]=B[me]});const se=O.toFiniteNumber(B.headers.get("content-length")),[Ae,we]=M&&Dv(se,au(Ov(M),!0))||[];B=new i(Bv(B.body,Uv,Ae,()=>{we&&we(),_e&&_e()}),te)}N=N||"text";let V=await y[O.findKey(y,N)||"text"](B,$);return!re&&_e&&_e(),await new Promise((te,se)=>{yb(te,se,{data:V,headers:Wt.from(B.headers),status:B.status,statusText:B.statusText,config:$,request:de})})}catch(ue){throw _e&&_e(),ue&&ue.name==="TypeError"&&/Load failed|fetch/i.test(ue.message)?Object.assign(new fe("Network Error",fe.ERR_NETWORK,$,de),{cause:ue.cause||ue}):fe.from(ue,ue&&ue.code,$,de)}}},sP=new Map,_b=e=>{let t=e&&e.env||{};const{fetch:n,Request:i,Response:o}=t,l=[i,o,n];let u=l.length,h=u,f,m,w=sP;for(;h--;)f=l[h],m=w.get(f),m===void 0&&w.set(f,m=h?new Map:oP(t)),w=m;return m};_b();const Tm={http:SE,xhr:XE,fetch:{get:_b}};O.forEach(Tm,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Vv=e=>`- ${e}`,aP=e=>O.isFunction(e)||e===null||e===!1;function lP(e,t){e=O.isArray(e)?e:[e];const{length:n}=e;let i,o;const l={};for(let u=0;u<n;u++){i=e[u];let h;if(o=i,!aP(i)&&(o=Tm[(h=String(i)).toLowerCase()],o===void 0))throw new fe(`Unknown adapter '${h}'`);if(o&&(O.isFunction(o)||(o=o.get(t))))break;l[h||"#"+u]=o}if(!o){const u=Object.entries(l).map(([f,m])=>`adapter ${f} `+(m===!1?"is not supported by the environment":"is not available in the build"));let h=n?u.length>1?`since :
`+u.map(Vv).join(`
`):" "+Vv(u[0]):"as no adapter specified";throw new fe("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return o}const wb={getAdapter:lP,adapters:Tm};function nh(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ls(null,e)}function qv(e){return nh(e),e.headers=Wt.from(e.headers),e.data=th.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),wb.getAdapter(e.adapter||nl.adapter,e)(e).then(function(i){return nh(e),i.data=th.call(e,e.transformResponse,i),i.headers=Wt.from(i.headers),i},function(i){return gb(i)||(nh(e),i&&i.response&&(i.response.data=th.call(e,e.transformResponse,i.response),i.response.headers=Wt.from(i.response.headers))),Promise.reject(i)})}const bb="1.13.2",Ru={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ru[e]=function(i){return typeof i===e||"a"+(t<1?"n ":" ")+e}});const Gv={};Ru.transitional=function(t,n,i){function o(l,u){return"[Axios v"+bb+"] Transitional option '"+l+"'"+u+(i?". "+i:"")}return(l,u,h)=>{if(t===!1)throw new fe(o(u," has been removed"+(n?" in "+n:"")),fe.ERR_DEPRECATED);return n&&!Gv[u]&&(Gv[u]=!0,console.warn(o(u," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(l,u,h):!0}};Ru.spelling=function(t){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${t}`),!0)};function cP(e,t,n){if(typeof e!="object")throw new fe("options must be an object",fe.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let o=i.length;for(;o-- >0;){const l=i[o],u=t[l];if(u){const h=e[l],f=h===void 0||u(h,l,e);if(f!==!0)throw new fe("option "+l+" must be "+f,fe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new fe("Unknown option "+l,fe.ERR_BAD_OPTION)}}const Tc={assertOptions:cP,validators:Ru},Dn=Tc.validators;let Yi=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Iv,response:new Iv}}async request(t,n){try{return await this._request(t,n)}catch(i){if(i instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const l=o.stack?o.stack.replace(/^.+\n/,""):"";try{i.stack?l&&!String(i.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+l):i.stack=l}catch{}}throw i}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ao(this.defaults,n);const{transitional:i,paramsSerializer:o,headers:l}=n;i!==void 0&&Tc.assertOptions(i,{silentJSONParsing:Dn.transitional(Dn.boolean),forcedJSONParsing:Dn.transitional(Dn.boolean),clarifyTimeoutError:Dn.transitional(Dn.boolean)},!1),o!=null&&(O.isFunction(o)?n.paramsSerializer={serialize:o}:Tc.assertOptions(o,{encode:Dn.function,serialize:Dn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Tc.assertOptions(n,{baseUrl:Dn.spelling("baseURL"),withXsrfToken:Dn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let u=l&&O.merge(l.common,l[n.method]);l&&O.forEach(["delete","get","head","post","put","patch","common"],$=>{delete l[$]}),n.headers=Wt.concat(u,l);const h=[];let f=!0;this.interceptors.request.forEach(function(j){typeof j.runWhen=="function"&&j.runWhen(n)===!1||(f=f&&j.synchronous,h.unshift(j.fulfilled,j.rejected))});const m=[];this.interceptors.response.forEach(function(j){m.push(j.fulfilled,j.rejected)});let w,y=0,S;if(!f){const $=[qv.bind(this),void 0];for($.unshift(...h),$.push(...m),S=$.length,w=Promise.resolve(n);y<S;)w=w.then($[y++],$[y++]);return w}S=h.length;let b=n;for(;y<S;){const $=h[y++],j=h[y++];try{b=$(b)}catch(T){j.call(this,T);break}}try{w=qv.call(this,b)}catch($){return Promise.reject($)}for(y=0,S=m.length;y<S;)w=w.then(m[y++],m[y++]);return w}getUri(t){t=ao(this.defaults,t);const n=vb(t.baseURL,t.url,t.allowAbsoluteUrls);return fb(n,t.params,t.paramsSerializer)}};O.forEach(["delete","get","head","options"],function(t){Yi.prototype[t]=function(n,i){return this.request(ao(i||{},{method:t,url:n,data:(i||{}).data}))}});O.forEach(["post","put","patch"],function(t){function n(i){return function(l,u,h){return this.request(ao(h||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:l,data:u}))}}Yi.prototype[t]=n(),Yi.prototype[t+"Form"]=n(!0)});let uP=class Sb{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(l){n=l});const i=this;this.promise.then(o=>{if(!i._listeners)return;let l=i._listeners.length;for(;l-- >0;)i._listeners[l](o);i._listeners=null}),this.promise.then=o=>{let l;const u=new Promise(h=>{i.subscribe(h),l=h}).then(o);return u.cancel=function(){i.unsubscribe(l)},u},t(function(l,u,h){i.reason||(i.reason=new Ls(l,u,h),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=i=>{t.abort(i)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Sb(function(o){t=o}),cancel:t}}};function dP(e){return function(n){return e.apply(null,n)}}function hP(e){return O.isObject(e)&&e.isAxiosError===!0}const mp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(mp).forEach(([e,t])=>{mp[t]=e});function jb(e){const t=new Yi(e),n=tb(Yi.prototype.request,t);return O.extend(n,Yi.prototype,t,{allOwnKeys:!0}),O.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return jb(ao(e,o))},n}const Ve=jb(nl);Ve.Axios=Yi;Ve.CanceledError=Ls;Ve.CancelToken=uP;Ve.isCancel=gb;Ve.VERSION=bb;Ve.toFormData=Mu;Ve.AxiosError=fe;Ve.Cancel=Ve.CanceledError;Ve.all=function(t){return Promise.all(t)};Ve.spread=dP;Ve.isAxiosError=hP;Ve.mergeConfig=ao;Ve.AxiosHeaders=Wt;Ve.formToJSON=e=>mb(O.isHTMLForm(e)?new FormData(e):e);Ve.getAdapter=wb.getAdapter;Ve.HttpStatusCode=mp;Ve.default=Ve;const{Axios:gI,AxiosError:yI,CanceledError:vI,isCancel:xI,CancelToken:_I,VERSION:wI,all:bI,Cancel:SI,isAxiosError:jI,spread:CI,toFormData:$I,AxiosHeaders:kI,HttpStatusCode:TI,formToJSON:LI,getAdapter:EI,mergeConfig:PI}=Ve;class fP{constructor(){Ug(this,"client");this.client=Ve.create({baseURL:"/api/v1",timeout:1e4,headers:{"Content-Type":"application/json"}}),this.client.interceptors.request.use(t=>{const n=this.getAuthToken();return n&&(t.headers.Authorization=`Bearer ${n}`),t},t=>Promise.reject(t)),this.client.interceptors.response.use(t=>t,t=>{var i,o,l,u,h,f;const n={message:((o=(i=t.response)==null?void 0:i.data)==null?void 0:o.message)||t.message||"An error occurred",code:(u=(l=t.response)==null?void 0:l.status)==null?void 0:u.toString(),details:(h=t.response)==null?void 0:h.data};return((f=t.response)==null?void 0:f.status)===401&&(this.clearAuthToken(),window.location.href="/setup"),Promise.reject(n)})}getAuthToken(){return localStorage.getItem("auth_token")}setAuthToken(t){localStorage.setItem("auth_token",t)}clearAuthToken(){localStorage.removeItem("auth_token")}async get(t,n){return(await this.client.get(t,{params:n})).data.data}async post(t,n){return(await this.client.post(t,n)).data.data}async put(t,n){return(await this.client.put(t,n)).data.data}async patch(t,n){return(await this.client.patch(t,n)).data.data}async delete(t){return(await this.client.delete(t)).data.data}async login(t,n){const o=(await this.client.post("/auth/login",{username:t,password:n})).data;return this.setAuthToken(o.token),o}async logout(){try{await this.post("/auth/logout")}finally{this.clearAuthToken()}}async changePassword(t,n){await this.post("/auth/change-password",{currentPassword:t,newPassword:n}),this.clearAuthToken()}async healthCheck(){return(await Ve.get("/health")).data}async getBoats(){return this.get("/boats")}async getBoat(t){return this.get(`/boats/${t}`)}async createBoat(t){return this.post("/boats",t)}async updateBoat(t,n){return this.put(`/boats/${t}`,n)}async toggleBoatStatus(t,n){return this.patch(`/boats/${t}/status`,{enabled:n})}async setActiveBoat(t){return this.patch(`/boats/${t}/active`)}async getTrips(t){return this.get("/trips",t)}async getTrip(t){return this.get(`/trips/${t}`)}async createTrip(t){return this.post("/trips",t)}async updateTrip(t,n){return this.put(`/trips/${t}`,n)}async addManualData(t,n){return this.patch(`/trips/${t}/manual-data`,n)}async getLicenseProgress(){return this.get("/captain-log/progress")}async getNotes(t){return this.get("/notes",t)}async getNote(t){return this.get(`/notes/${t}`)}async createNote(t){return this.post("/notes",t)}async updateNote(t,n){return this.put(`/notes/${t}`,n)}async deleteNote(t){return this.delete(`/notes/${t}`)}async getTodoLists(t){return this.get("/todos",t?{boatId:t}:void 0)}async getTodoList(t){return this.get(`/todos/${t}`)}async createTodoList(t){return this.post("/todos",t)}async updateTodoList(t,n){return this.put(`/todos/${t}`,n)}async deleteTodoList(t){return this.delete(`/todos/${t}`)}async addTodoItem(t,n){return this.post(`/todos/${t}/items`,{content:n})}async toggleTodoItem(t){return this.patch(`/todos/items/${t}/complete`)}async getMaintenanceTemplates(t){return this.get("/maintenance/templates",t?{boatId:t}:void 0)}async getMaintenanceTemplate(t){return this.get(`/maintenance/templates/${t}`)}async createMaintenanceTemplate(t){return this.post("/maintenance/templates",t)}async updateMaintenanceTemplate(t,n){return this.put(`/maintenance/templates/${t}`,n)}async deleteMaintenanceTemplate(t){return this.delete(`/maintenance/templates/${t}`)}async getUpcomingMaintenanceEvents(t){return this.get("/maintenance/events/upcoming",t?{boatId:t}:void 0)}async getCompletedMaintenanceEvents(t){return this.get("/maintenance/events/completed",t?{boatId:t}:void 0)}async getMaintenanceEvent(t){return this.get(`/maintenance/events/${t}`)}async completeMaintenanceEvent(t,n){return this.post(`/maintenance/events/${t}/complete`,n)}async getMarkedLocations(t){return this.get("/locations",t)}async getMarkedLocation(t){return this.get(`/locations/${t}`)}async createMarkedLocation(t){return this.post("/locations",t)}async updateMarkedLocation(t,n){return this.put(`/locations/${t}`,n)}async deleteMarkedLocation(t){return this.delete(`/locations/${t}`)}async getNearbyLocations(t,n,i){return this.get("/locations/nearby",{latitude:t,longitude:n,radiusMeters:i})}async uploadPhoto(t,n,i){const o=new FormData;return o.append("photo",t),o.append("entityType",n),o.append("entityId",i),(await this.client.post("/photos",o,{headers:{"Content-Type":"multipart/form-data"}})).data.data}async getPhotos(t,n){return this.get("/photos",{entityType:t,entityId:n})}async deletePhoto(t){return this.delete(`/photos/${t}`)}async getNotifications(){return this.get("/notifications")}async markNotificationAsRead(t){return this.patch(`/notifications/${t}/read`)}async createBackup(){return this.post("/backups")}async getBackups(){return this.get("/backups")}async downloadBackup(t){return(await this.client.get(`/backups/${t}/download`,{responseType:"blob"})).data}}const pe=new fP,cn={all:["boats"],lists:()=>[...cn.all,"list"],list:e=>[...cn.lists(),{filters:e}],details:()=>[...cn.all,"detail"],detail:e=>[...cn.details(),e]},Vt=()=>zt({queryKey:cn.lists(),queryFn:()=>pe.getBoats()}),pP=e=>zt({queryKey:cn.detail(e),queryFn:()=>pe.getBoat(e),enabled:!!e}),mP=()=>{const e=Ke();return lt({mutationFn:t=>pe.createBoat(t),onSuccess:()=>{e.invalidateQueries({queryKey:cn.lists()})}})},gP=()=>{const e=Ke();return lt({mutationFn:({id:t,data:n})=>pe.updateBoat(t,n),onSuccess:(t,{id:n})=>{e.invalidateQueries({queryKey:cn.detail(n)}),e.invalidateQueries({queryKey:cn.lists()})}})},Cb=()=>{const e=Ke();return lt({mutationFn:({id:t,enabled:n})=>pe.toggleBoatStatus(t,n),onSuccess:(t,{id:n})=>{e.invalidateQueries({queryKey:cn.detail(n)}),e.invalidateQueries({queryKey:cn.lists()})}})},$b=()=>{const e=Ke();return lt({mutationFn:t=>pe.setActiveBoat(t),onSuccess:()=>{e.invalidateQueries({queryKey:cn.lists()})}})},Kn={all:["trips"],lists:()=>[...Kn.all,"list"],list:e=>[...Kn.lists(),{filters:e}],details:()=>[...Kn.all,"detail"],detail:e=>[...Kn.details(),e]},vi=e=>zt({queryKey:Kn.list(e||{}),queryFn:()=>pe.getTrips(e)}),kb=e=>zt({queryKey:Kn.detail(e),queryFn:()=>pe.getTrip(e),enabled:!!e}),yP=()=>{const e=Ke();return lt({mutationFn:({id:t,data:n})=>pe.updateTrip(t,n),onSuccess:(t,{id:n})=>{e.invalidateQueries({queryKey:Kn.detail(n)}),e.invalidateQueries({queryKey:Kn.lists()})}})},vP=()=>{const e=Ke();return lt({mutationFn:({tripId:t,data:n})=>pe.addManualData(t,n),onSuccess:(t,{tripId:n})=>{e.invalidateQueries({queryKey:Kn.detail(n)}),e.invalidateQueries({queryKey:Kn.lists()})}})},Tb={all:["license"],progress:()=>[...Tb.all,"progress"]},Lb=()=>zt({queryKey:Tb.progress(),queryFn:()=>pe.getLicenseProgress(),staleTime:5*60*1e3}),xP=g.div`
  display: flex;
  gap: ${e=>e.theme.spacing.lg};
  min-height: calc(100vh - 200px);
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    flex-direction: column;
  }
`,_P=g.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,wP=g.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,bP=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,SP=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.lg};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,jP=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>e.theme.spacing.sm};
  border-bottom: 1px solid ${e=>e.theme.colors.surface.light};
  
  &:last-child {
    border-bottom: none;
  }
`,CP=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,$P=g.span`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,kP=g.span`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,TP=g.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  flex-wrap: wrap;
`,LP=g.div`
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
    background-color: ${e=>e.theme.colors.primary.orange};
    transition: width ${e=>e.theme.animation.normal} ease;
  }
`,EP=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${e=>e.theme.spacing.xs};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
`,rh=()=>{const{data:e,isLoading:t,error:n}=Vt(),{data:i,isLoading:o,error:l}=vi(),{data:u,isLoading:h,error:f}=Lb(),m=(e==null?void 0:e.filter(j=>j.enabled))||[],w=(i==null?void 0:i.slice(0,5))||[],y=(i==null?void 0:i.length)||0,S=j=>new Date(j).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),b=j=>{const T=Math.floor(j/3600),v=Math.floor(j%3600/60);return`${T}h ${v}m`},$=(j,T)=>Math.min(j/T*100,100);return s.jsxs(xP,{children:[s.jsxs(Tn,{width:"250px",position:"left",children:[s.jsx(Hl,{position:"top-left",size:"md"}),s.jsx(Zl,{height:"20px"}),s.jsxs(X,{title:"System Status",variant:"primary",children:[s.jsx(q,{label:"Interface Status",value:"ONLINE",color:"green",size:"sm"}),s.jsx(q,{label:"Active Boats",value:t?"...":m.length.toString(),color:"orange",size:"sm"}),s.jsx(q,{label:"Total Trips",value:o?"...":y.toString(),color:"blue",size:"sm"})]}),s.jsx(Zl,{height:"20px",color:"purple"}),s.jsxs(TP,{children:[s.jsx(G,{size:"sm",variant:"primary",children:"New Trip"}),s.jsx(G,{size:"sm",variant:"secondary",children:"Add Boat"})]}),s.jsx(Hl,{position:"bottom-left",size:"md"})]}),s.jsxs(_P,{children:[s.jsxs(wP,{children:[s.jsx(Hl,{position:"top-right",size:"lg"}),s.jsx(Zl,{width:"100%"}),s.jsx(ce,{level:1,children:"Captain's Log - Command Center"})]}),(n||l||f)&&s.jsx(En,{type:"error",children:"Unable to load dashboard data. Check your connection and try again."}),s.jsxs(bP,{children:[s.jsx(X,{title:"Fleet Status",variant:"accent",children:t?s.jsx(q,{label:"Loading",value:"...",color:"blue"}):s.jsxs(s.Fragment,{children:[s.jsx(q,{label:"Total Vessels",value:(e==null?void 0:e.length)||0,color:"blue"}),s.jsx(q,{label:"Active Vessels",value:m.length,color:"green"}),s.jsx(q,{label:"Inactive Vessels",value:((e==null?void 0:e.length)||0)-m.length,color:"orange"})]})}),s.jsx(X,{title:"License Progress",variant:"secondary",children:h?s.jsx(q,{label:"Loading",value:"...",color:"purple"}):u?s.jsxs(s.Fragment,{children:[s.jsx(q,{label:"Sea Time Days",value:u.totalSeaTimeDays,color:"purple"}),s.jsx(q,{label:"Days (3 Years)",value:u.seaTimeDaysLast3Years,color:"purple"}),s.jsxs("div",{children:[s.jsx(LP,{progress:$(u.totalSeaTimeDays,360)}),s.jsxs(EP,{children:[s.jsx("span",{children:"360 Day Goal"}),s.jsxs("span",{children:[Math.round($(u.totalSeaTimeDays,360)),"%"]})]})]})]}):s.jsx(q,{label:"Status",value:"Disabled",color:"orange"})})]}),s.jsxs(SP,{children:[s.jsx(X,{title:"Recent Trips",variant:"primary",children:o?s.jsx(q,{label:"Loading",value:"...",color:"orange"}):w.length>0?w.map(j=>{var T,v;return s.jsxs(jP,{children:[s.jsxs(CP,{children:[s.jsx($P,{children:S(j.startTime)}),s.jsxs(kP,{children:[b(((T=j.statistics)==null?void 0:T.durationSeconds)||0)," • ",j.waterType]})]}),s.jsx(q,{label:"Distance",value:Math.round((((v=j.statistics)==null?void 0:v.distanceMeters)||0)/1852),unit:"nm",size:"sm",color:"orange"})]},j.id)}):s.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#999"},children:"No trips recorded yet"})}),s.jsx(X,{title:"Upcoming Tasks",variant:"accent",children:s.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#999"},children:"No maintenance tasks due"})})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[s.jsx(Hl,{position:"bottom-right",size:"lg"}),s.jsx(Zl,{width:"100%",color:"blue"})]})]})]})},Lm=()=>{const[e,t]=z.useState({isAuthenticated:!1,isLoading:!0,needsSetup:!1,user:null});z.useEffect(()=>{n()},[]);const n=async()=>{try{if(!localStorage.getItem("auth_token")){t({isAuthenticated:!1,isLoading:!1,needsSetup:!0,user:null});return}await pe.healthCheck(),t({isAuthenticated:!0,isLoading:!1,needsSetup:!1,user:{id:"current",username:"user",createdAt:"",updatedAt:""}})}catch{localStorage.removeItem("auth_token"),t({isAuthenticated:!1,isLoading:!1,needsSetup:!0,user:null})}};return{...e,login:async(l,u)=>{try{t(f=>({...f,isLoading:!0}));const h=await pe.login(l,u);return t({isAuthenticated:!0,isLoading:!1,needsSetup:!1,user:h.user}),{success:!0}}catch(h){return t(f=>({...f,isLoading:!1,isAuthenticated:!1,needsSetup:!0})),{success:!1,error:h.message||"Login failed"}}},logout:async()=>{try{await pe.logout()}catch(l){console.warn("Logout request failed:",l)}finally{t({isAuthenticated:!1,isLoading:!1,needsSetup:!1,user:null})}},checkAuthStatus:n}},PP=g.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.colors.background};
  padding: ${e=>e.theme.spacing.lg};
`,AP=g.div`
  max-width: 600px;
  width: 100%;
`,zP=g.form`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,ih=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,oh=g.label`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
`,sh=g.input`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.orange};
  border-radius: ${e=>e.theme.borderRadius.sm};
  padding: ${e=>e.theme.spacing.md};
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.orangeLight};
    box-shadow: ${e=>e.theme.shadows.glow};
  }
`,MP=g.div`
  display: flex;
  justify-content: center;
  margin-top: ${e=>e.theme.spacing.lg};
`,ah=()=>{const e=xt(),{login:t,isAuthenticated:n}=Lm();z.useEffect(()=>{n&&e("/")},[n,e]);const[i,o]=z.useState({username:"",password:"",serverUrl:"/api/v1"}),[l,u]=z.useState(!1),[h,f]=z.useState(null),m=y=>{const{name:S,value:b}=y.target;o($=>({...$,[S]:b}))},w=async y=>{y.preventDefault(),u(!0),f(null);try{i.serverUrl!=="/api/v1"&&console.log("Server URL configured:",i.serverUrl);const S=await t(i.username,i.password);S.success?(f({type:"success",text:"LCARS Interface Initialized Successfully! Redirecting..."}),setTimeout(()=>{e("/")},1500)):f({type:"error",text:S.error||"Authentication failed. Please check your credentials."})}catch(S){f({type:"error",text:S.message||"Setup failed. Please check your connection and try again."})}finally{u(!1)}};return s.jsx(PP,{children:s.jsx(AP,{children:s.jsxs(X,{title:"System Initialization",padding:"lg",children:[s.jsx(ce,{level:2,align:"center",children:"LCARS Setup Wizard"}),s.jsxs(zP,{onSubmit:w,children:[s.jsxs(ih,{children:[s.jsx(oh,{htmlFor:"username",children:"Username"}),s.jsx(sh,{type:"text",id:"username",name:"username",value:i.username,onChange:m,placeholder:"Enter your username",required:!0,disabled:l})]}),s.jsxs(ih,{children:[s.jsx(oh,{htmlFor:"password",children:"Password"}),s.jsx(sh,{type:"password",id:"password",name:"password",value:i.password,onChange:m,placeholder:"Enter your password",required:!0,disabled:l})]}),s.jsxs(ih,{children:[s.jsx(oh,{htmlFor:"serverUrl",children:"Server URL"}),s.jsx(sh,{type:"url",id:"serverUrl",name:"serverUrl",value:i.serverUrl,onChange:m,placeholder:"http://localhost:8585",required:!0,disabled:l})]}),h&&s.jsx(En,{type:h.type==="success"?"success":h.type==="error"?"error":"info",children:h.text}),s.jsx(MP,{children:s.jsx(G,{type:"submit",disabled:l,size:"lg",children:l?"Initializing...":"Initialize LCARS"})})]})]})})})},lh=g.div`
  padding: 20px;
`,RP=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  margin-top: 20px;
`,IP=g.div`
  padding: 20px;
  border: 2px solid ${e=>e.$isActive?e.theme.colors.primary.orange:e.$isEnabled?e.theme.colors.primary.blue:e.theme.colors.interactive.disabled};
  background: ${e=>e.$isActive?`${e.theme.colors.primary.orange}15`:e.$isEnabled?`${e.theme.colors.primary.blue}10`:`${e.theme.colors.interactive.disabled}10`};
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: ${e=>e.theme.borderRadius.lg};

  &:hover {
    border-color: ${e=>e.theme.colors.primary.orange};
    background: ${e=>e.theme.colors.primary.orange}20;
  }
`,NP=g.h3`
  color: ${e=>e.theme.colors.primary.orange};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1.4rem;
  margin: 0 0 15px 0;
  text-transform: uppercase;
`,DP=g.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`,Kv=g.span`
  padding: 4px 12px;
  border-radius: 0;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  background: ${e=>{switch(e.$type){case"active":return e.theme.colors.primary.orange;case"enabled":return e.theme.colors.primary.blue;case"disabled":return e.theme.colors.interactive.disabled;default:return e.theme.colors.interactive.disabled}}};
  color: ${e=>e.theme.colors.background};
`,OP=g.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,Qv=g(G)`
  flex: 1;
  min-width: 120px;
`,FP=g.div`
  display: flex;
  gap: 15px;
  align-items: center;
`,BP=g.div`
  text-align: center;
  padding: 60px 20px;
  color: ${e=>e.theme.colors.text.secondary};
`,UP=g.div`
  font-size: 4rem;
  margin-bottom: 20px;
  color: ${e=>e.theme.colors.primary.blue};
`,HP=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,ZP=g.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,WP=()=>{const e=xt(),{data:t,isLoading:n,error:i}=Vt(),o=Cb(),l=$b(),[u,h]=z.useState(null),f=j=>{e(`/boats/${j.id}`)},m=async j=>{h(`toggle-${j.id}`);try{await o.mutateAsync({id:j.id,enabled:!j.enabled})}catch(T){console.error("Failed to toggle boat status:",T)}finally{h(null)}},w=async j=>{if(!j.isActive){h(`active-${j.id}`);try{await l.mutateAsync(j.id)}catch(T){console.error("Failed to set active boat:",T)}finally{h(null)}}},y=()=>{e("/boats/new")};if(n)return s.jsx(di,{children:s.jsxs(lh,{children:[s.jsx(ce,{children:"BOAT MANAGEMENT"}),s.jsx(q,{label:"STATUS",value:"LOADING BOAT DATA...",color:"blue"})]})});if(i)return s.jsx(di,{children:s.jsxs(lh,{children:[s.jsx(ce,{children:"BOAT MANAGEMENT"}),s.jsxs(En,{type:"error",children:["Failed to load boats: ",i.message]})]})});const S=t==null?void 0:t.find(j=>j.isActive),b=(t==null?void 0:t.filter(j=>j.enabled))||[],$=(t==null?void 0:t.filter(j=>!j.enabled))||[];return s.jsx(di,{children:s.jsxs(lh,{children:[s.jsxs(HP,{children:[s.jsxs(ZP,{children:[s.jsx(ce,{children:"BOAT MANAGEMENT"}),s.jsx(q,{label:"VESSELS REGISTERED",value:(t==null?void 0:t.length)||0,color:"blue",size:"sm"})]}),s.jsxs(FP,{children:[s.jsx(q,{label:"ACTIVE VESSEL",value:(S==null?void 0:S.name)||"NONE SELECTED",color:S?"orange":"blue"}),s.jsx(G,{variant:"primary",onClick:y,children:"ADD NEW VESSEL"})]})]}),!t||t.length===0?s.jsx(X,{children:s.jsxs(BP,{children:[s.jsx(UP,{children:"🚤"}),s.jsx("h3",{children:"NO VESSELS REGISTERED"}),s.jsx("p",{children:"Add your first vessel to begin tracking trips and maintenance."}),s.jsx(G,{variant:"primary",onClick:y,children:"ADD FIRST VESSEL"})]})}):s.jsx(RP,{children:t.map(j=>s.jsxs(IP,{$isActive:j.isActive,$isEnabled:j.enabled,onClick:()=>f(j),children:[s.jsx(NP,{children:j.name}),s.jsxs(DP,{children:[j.isActive&&s.jsx(Kv,{$type:"active",children:"ACTIVE"}),s.jsx(Kv,{$type:j.enabled?"enabled":"disabled",children:j.enabled?"ENABLED":"DISABLED"})]}),s.jsx(q,{label:"VESSEL ID",value:j.id.slice(0,8).toUpperCase(),color:"blue",size:"sm"}),s.jsx(q,{label:"REGISTERED",value:new Date(j.createdAt).toLocaleDateString(),color:"blue",size:"sm"}),s.jsxs(OP,{children:[!j.isActive&&j.enabled&&s.jsx(Qv,{variant:"secondary",onClick:()=>w(j),disabled:u===`active-${j.id}`,children:u===`active-${j.id}`?"SETTING...":"SET ACTIVE"}),s.jsx(Qv,{variant:j.enabled?"danger":"accent",onClick:()=>m(j),disabled:u===`toggle-${j.id}`,children:u===`toggle-${j.id}`?"UPDATING...":j.enabled?"DISABLE":"ENABLE"})]})]},j.id))}),t&&t.length>0&&s.jsxs("div",{style:{marginTop:"30px",display:"flex",gap:"20px"},children:[s.jsx(q,{label:"ENABLED VESSELS",value:b.length.toString(),color:"blue"}),s.jsx(q,{label:"DISABLED VESSELS",value:$.length.toString(),color:"purple"})]})]})})},ch=g.div`
  padding: 20px;
`,VP=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Yv=g(X)`
  padding: 25px;
`,uh=g.h3`
  color: ${e=>e.theme.colors.primary.orange};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1.2rem;
  margin: 0 0 20px 0;
  text-transform: uppercase;
  border-bottom: 2px solid ${e=>e.theme.colors.primary.orange};
  padding-bottom: 10px;
`,qP=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 25px;
`,Jv=g.div`
  padding: 15px;
  text-align: center;
  border: 2px solid ${e=>{switch(e.$type){case"active":return e.theme.colors.primary.orange;case"enabled":return e.theme.colors.primary.blue;case"disabled":return e.theme.colors.interactive.disabled;default:return e.theme.colors.interactive.disabled}}};
  background: ${e=>{switch(e.$type){case"active":return`${e.theme.colors.primary.orange}20`;case"enabled":return`${e.theme.colors.primary.blue}15`;case"disabled":return`${e.theme.colors.interactive.disabled}15`;default:return`${e.theme.colors.interactive.disabled}15`}}};
`,Xv=g.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 5px;
  text-transform: uppercase;
`,ex=g.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${e=>e.theme.colors.text.primary};
  text-transform: uppercase;
`,GP=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 20px;
`,tx=g(G)`
  margin-right: 15px;
`,KP=g.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,QP=g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,YP=g.label`
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
`,JP=g.input`
  padding: 12px 15px;
  background: ${e=>e.theme.colors.background};
  border: 2px solid ${e=>e.theme.colors.primary.blue};
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.orange};
    box-shadow: 0 0 10px ${e=>e.theme.colors.primary.orange}40;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,XP=g.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin-top: 20px;
`,eA=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`,tA=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,nA=g.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,rA=g(X)`
  padding: 25px;
  margin-top: 30px;
`,iA=()=>{const{id:e}=Cr(),t=xt(),{data:n,isLoading:i,error:o}=pP(e),{data:l}=vi({boatId:e}),u=gP(),h=Cb(),f=$b(),[m,w]=z.useState(!1),[y,S]=z.useState({name:""}),[b,$]=z.useState(null);We.useEffect(()=>{n&&S({name:n.name})},[n]);const j=()=>{t("/boats")},T=()=>{w(!0)},v=()=>{w(!1),n&&S({name:n.name})},x=async F=>{if(F.preventDefault(),!(!n||!y.name.trim())){$("save");try{await u.mutateAsync({id:n.id,data:{name:y.name.trim()}}),w(!1)}catch(U){console.error("Failed to update boat:",U)}finally{$(null)}}},_=async()=>{if(n){$("toggle");try{await h.mutateAsync({id:n.id,enabled:!n.enabled})}catch(F){console.error("Failed to toggle boat status:",F)}finally{$(null)}}},k=async()=>{if(!(!n||n.isActive)){$("active");try{await f.mutateAsync(n.id)}catch(F){console.error("Failed to set active boat:",F)}finally{$(null)}}};if(i)return s.jsx(di,{children:s.jsxs(ch,{children:[s.jsx(ce,{children:"VESSEL DETAILS"}),s.jsx(q,{label:"STATUS",value:"LOADING VESSEL DATA...",color:"blue"})]})});if(o||!n)return s.jsx(di,{children:s.jsxs(ch,{children:[s.jsx(ce,{children:"VESSEL DETAILS"}),s.jsx(En,{type:"error",children:(o==null?void 0:o.message)||"Vessel not found"}),s.jsx(tx,{variant:"secondary",onClick:j,children:"BACK TO VESSELS"})]})});const M=(l==null?void 0:l.length)||0,A=(l==null?void 0:l.reduce((F,U)=>{var R;return F+(((R=U.statistics)==null?void 0:R.durationSeconds)||0)},0))||0,N=(l==null?void 0:l.reduce((F,U)=>{var R;return F+(((R=U.statistics)==null?void 0:R.distanceMeters)||0)},0))||0;return s.jsx(di,{children:s.jsxs(ch,{children:[s.jsxs(tA,{children:[s.jsxs(nA,{children:[s.jsx(ce,{children:"VESSEL DETAILS"}),s.jsx(q,{label:"VESSEL NAME",value:n.name.toUpperCase(),color:"orange",size:"sm"})]}),s.jsxs("div",{children:[s.jsx(tx,{variant:"secondary",onClick:j,children:"BACK TO VESSELS"}),!m&&s.jsx(G,{variant:"primary",onClick:T,children:"EDIT VESSEL"})]})]}),s.jsxs(VP,{children:[s.jsxs(Yv,{children:[s.jsx(uh,{children:"Vessel Information"}),m?s.jsxs(KP,{onSubmit:x,children:[s.jsxs(QP,{children:[s.jsx(YP,{children:"Vessel Name"}),s.jsx(JP,{type:"text",value:y.name,onChange:F=>S({...y,name:F.target.value}),placeholder:"Enter vessel name",required:!0,disabled:b==="save"})]}),s.jsxs(XP,{children:[s.jsx(G,{type:"button",variant:"secondary",onClick:v,disabled:b==="save",children:"CANCEL"}),s.jsx(G,{type:"submit",variant:"primary",disabled:b==="save"||!y.name.trim(),children:b==="save"?"SAVING...":"SAVE CHANGES"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(q,{label:"VESSEL NAME",value:n.name,color:"orange"}),s.jsx(q,{label:"VESSEL ID",value:n.id,color:"blue"}),s.jsx(q,{label:"REGISTERED",value:new Date(n.createdAt).toLocaleString(),color:"blue"}),s.jsx(q,{label:"LAST UPDATED",value:new Date(n.updatedAt).toLocaleString(),color:"blue"})]})]}),s.jsxs(Yv,{children:[s.jsx(uh,{children:"Status & Actions"}),s.jsxs(qP,{children:[s.jsxs(Jv,{$type:n.isActive?"active":"disabled",children:[s.jsx(Xv,{children:"Active Status"}),s.jsx(ex,{children:n.isActive?"ACTIVE":"INACTIVE"})]}),s.jsxs(Jv,{$type:n.enabled?"enabled":"disabled",children:[s.jsx(Xv,{children:"Operational Status"}),s.jsx(ex,{children:n.enabled?"ENABLED":"DISABLED"})]})]}),!m&&s.jsxs(GP,{children:[!n.isActive&&n.enabled&&s.jsx(G,{variant:"primary",onClick:k,disabled:b==="active",children:b==="active"?"SETTING...":"SET AS ACTIVE"}),s.jsx(G,{variant:n.enabled?"danger":"accent",onClick:_,disabled:b==="toggle",children:b==="toggle"?"UPDATING...":n.enabled?"DISABLE VESSEL":"ENABLE VESSEL"})]})]})]}),s.jsxs(rA,{children:[s.jsx(uh,{children:"Usage Statistics"}),s.jsxs(eA,{children:[s.jsx(q,{label:"TOTAL TRIPS",value:M.toString(),color:"blue"}),s.jsx(q,{label:"TOTAL HOURS",value:`${(A/3600).toFixed(1)}`,unit:"hrs",color:"blue"}),s.jsx(q,{label:"TOTAL DISTANCE",value:`${(N*539957e-9).toFixed(1)}`,unit:"nm",color:"blue"}),s.jsx(q,{label:"LAST TRIP",value:l&&l.length>0?new Date(l[0].startTime).toLocaleDateString():"NO TRIPS",color:"blue"})]})]})]})})},oA=g.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`,sA=g(X)`
  padding: 30px;
  margin-top: 20px;
`,aA=g.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,Ci=g.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,$i=g.label`
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: ${e=>e.theme.typography.fontFamily.primary};
`,So=g.input`
  padding: 15px 20px;
  background: ${e=>e.theme.colors.background};
  border: 2px solid ${e=>e.theme.colors.primary.blue};
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.orange};
    box-shadow: 0 0 15px ${e=>e.theme.colors.primary.orange}40;
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
`,lA=g.textarea`
  padding: 15px 20px;
  background: ${e=>e.theme.colors.background};
  border: 2px solid ${e=>e.theme.colors.primary.blue};
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.orange};
    box-shadow: 0 0 15px ${e=>e.theme.colors.primary.orange}40;
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
`,Er=g.p`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
`,cA=g.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid ${e=>e.theme.colors.primary.blue};
`,uA=g(G)`
  margin-right: 15px;
`,dA=g.span`
  color: ${e=>e.theme.colors.primary.orange};
  margin-left: 5px;
`,ki=g.div`
  color: ${e=>e.theme.colors.status.error};
  font-size: 0.9rem;
  margin-top: 5px;
`,hA=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,fA=g.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,pA=()=>{const e=xt(),t=mP(),[n,i]=z.useState({name:"",description:"",hullNumber:"",manufacturer:"",model:"",year:"",length:""}),[o,l]=z.useState({}),[u,h]=z.useState(!1),f=()=>{e("/boats")},m=(S,b)=>{i($=>({...$,[S]:b})),o[S]&&l($=>({...$,[S]:void 0}))},w=()=>{const S={};return n.name.trim()?n.name.trim().length<2?S.name="Vessel name must be at least 2 characters":n.name.trim().length>100&&(S.name="Vessel name must be less than 100 characters"):S.name="Vessel name is required",n.description&&n.description.length>500&&(S.description="Description must be less than 500 characters"),n.hullNumber&&n.hullNumber.length>50&&(S.hullNumber="Hull number must be less than 50 characters"),n.manufacturer&&n.manufacturer.length>100&&(S.manufacturer="Manufacturer must be less than 100 characters"),n.model&&n.model.length>100&&(S.model="Model must be less than 100 characters"),n.year&&(!/^\d{4}$/.test(n.year)||parseInt(n.year)<1900||parseInt(n.year)>new Date().getFullYear()+1)&&(S.year="Year must be a valid 4-digit year"),n.length&&(!/^\d+(\.\d+)?$/.test(n.length)||parseFloat(n.length)<=0||parseFloat(n.length)>1e3)&&(S.length="Length must be a positive number (in feet)"),l(S),Object.keys(S).length===0},y=async S=>{if(S.preventDefault(),!!w()){h(!0);try{const b={};n.description.trim()&&(b.description=n.description.trim()),n.hullNumber.trim()&&(b.hullNumber=n.hullNumber.trim()),n.manufacturer.trim()&&(b.manufacturer=n.manufacturer.trim()),n.model.trim()&&(b.model=n.model.trim()),n.year.trim()&&(b.year=parseInt(n.year.trim())),n.length.trim()&&(b.lengthFeet=parseFloat(n.length.trim()));const $=await t.mutateAsync({name:n.name.trim(),metadata:Object.keys(b).length>0?b:void 0});e(`/boats/${$.id}`)}catch(b){console.error("Failed to create boat:",b)}finally{h(!1)}}};return s.jsx(di,{children:s.jsxs(oA,{children:[s.jsxs(hA,{children:[s.jsxs(fA,{children:[s.jsx(ce,{children:"ADD NEW VESSEL"}),s.jsx(Er,{children:"Register a new vessel for tracking"})]}),s.jsx(uA,{variant:"secondary",onClick:f,children:"BACK TO VESSELS"})]}),t.error&&s.jsxs(En,{type:"error",children:["Failed to create vessel: ",t.error.message]}),s.jsx(sA,{children:s.jsxs(aA,{onSubmit:y,children:[s.jsxs(Ci,{children:[s.jsxs($i,{children:["Vessel Name",s.jsx(dA,{children:"*"})]}),s.jsx(So,{type:"text",value:n.name,onChange:S=>m("name",S.target.value),placeholder:"Enter vessel name (e.g., 'Sea Explorer', 'Fishing Buddy')",disabled:u,maxLength:100}),s.jsx(Er,{children:"The primary name used to identify this vessel throughout the system."}),o.name&&s.jsx(ki,{children:o.name})]}),s.jsxs(Ci,{children:[s.jsx($i,{children:"Description"}),s.jsx(lA,{value:n.description,onChange:S=>m("description",S.target.value),placeholder:"Optional description of the vessel (e.g., 'Center console fishing boat', '24ft cabin cruiser')",disabled:u,maxLength:500}),s.jsx(Er,{children:"Optional description to help identify and categorize this vessel."}),o.description&&s.jsx(ki,{children:o.description})]}),s.jsxs(Ci,{children:[s.jsx($i,{children:"Hull Identification Number (HIN)"}),s.jsx(So,{type:"text",value:n.hullNumber,onChange:S=>m("hullNumber",S.target.value),placeholder:"Enter HIN if available",disabled:u,maxLength:50}),s.jsx(Er,{children:"The unique hull identification number assigned by the manufacturer."}),o.hullNumber&&s.jsx(ki,{children:o.hullNumber})]}),s.jsxs(Ci,{children:[s.jsx($i,{children:"Manufacturer"}),s.jsx(So,{type:"text",value:n.manufacturer,onChange:S=>m("manufacturer",S.target.value),placeholder:"Enter manufacturer name",disabled:u,maxLength:100}),s.jsx(Er,{children:"The company that built this vessel."}),o.manufacturer&&s.jsx(ki,{children:o.manufacturer})]}),s.jsxs(Ci,{children:[s.jsx($i,{children:"Model"}),s.jsx(So,{type:"text",value:n.model,onChange:S=>m("model",S.target.value),placeholder:"Enter model name",disabled:u,maxLength:100}),s.jsx(Er,{children:"The specific model designation of this vessel."}),o.model&&s.jsx(ki,{children:o.model})]}),s.jsxs(Ci,{children:[s.jsx($i,{children:"Year Built"}),s.jsx(So,{type:"text",value:n.year,onChange:S=>m("year",S.target.value),placeholder:"Enter year (e.g., 2020)",disabled:u,maxLength:4}),s.jsx(Er,{children:"The year this vessel was manufactured."}),o.year&&s.jsx(ki,{children:o.year})]}),s.jsxs(Ci,{children:[s.jsx($i,{children:"Length (feet)"}),s.jsx(So,{type:"text",value:n.length,onChange:S=>m("length",S.target.value),placeholder:"Enter length in feet (e.g., 24.5)",disabled:u}),s.jsx(Er,{children:"The overall length of the vessel in feet."}),o.length&&s.jsx(ki,{children:o.length})]}),s.jsxs(cA,{children:[s.jsx(G,{type:"button",variant:"secondary",onClick:f,disabled:u,children:"CANCEL"}),s.jsx(G,{type:"submit",variant:"primary",disabled:u||!n.name.trim(),children:u?"CREATING VESSEL...":"CREATE VESSEL"})]})]})})]})})},dh=g.div`
  padding: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,mA=g(X)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,gA=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  align-items: end;
`,Vl=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,hh=g.label`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`,yA=g.select`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.orange};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.orangeLight};
    box-shadow: 0 0 0 2px rgba(255, 153, 102, 0.2);
  }
`,nx=g.input`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.orange};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.orangeLight};
    box-shadow: 0 0 0 2px rgba(255, 153, 102, 0.2);
  }
`,vA=g.div`
  display: grid;
  gap: ${e=>e.theme.spacing.md};
`,xA=g(X)`
  cursor: pointer;
  transition: all ${e=>e.theme.animation.normal} ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.lg};
  }
`,_A=g.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${e=>e.theme.spacing.md};
  align-items: start;
`,wA=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,bA=g.h3`
  margin: 0;
  font-size: ${e=>e.theme.typography.fontSize.lg};
  color: ${e=>e.theme.colors.primary.orange};
  text-transform: uppercase;
  letter-spacing: 1px;
`,SA=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${e=>e.theme.spacing.sm};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
`,jA=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
  text-align: right;
`,fh=g.div`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.blue};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,ph=g.div`
  font-size: ${e=>e.theme.typography.fontSize.xs};
  color: ${e=>e.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 1px;
`,CA=g.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.text.muted};
  
  .empty-title {
    font-size: ${e=>e.theme.typography.fontSize.xl};
    margin-bottom: ${e=>e.theme.spacing.md};
    color: ${e=>e.theme.colors.primary.orange};
  }
  
  .empty-message {
    font-size: ${e=>e.theme.typography.fontSize.md};
    margin-bottom: ${e=>e.theme.spacing.lg};
  }
`,$A=g.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.primary.orange};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  text-transform: uppercase;
  letter-spacing: 2px;
`,kA=()=>{const[e,t]=z.useState({}),{data:n,isLoading:i,error:o}=vi(e),{data:l}=Vt(),u=(b,$)=>{t(j=>({...j,[b]:$||void 0}))},h=()=>{t({})},f=b=>{const $=Math.floor(b/3600),j=Math.floor(b%3600/60);return`${$}h ${j}m`},m=b=>`${(b*539957e-9).toFixed(1)} nm`,w=b=>`${b.toFixed(1)} kts`,y=b=>new Date(b).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),S=b=>{const $=l==null?void 0:l.find(j=>j.id===b);return($==null?void 0:$.name)||"Unknown Boat"};return i?s.jsx(dh,{children:s.jsx($A,{children:"Loading Trip Data..."})}):o?s.jsx(dh,{children:s.jsx(X,{variant:"accent",title:"System Error",children:s.jsxs("div",{style:{color:"red",textAlign:"center",padding:"2rem"},children:["Error loading trips: ",o.message]})})}):s.jsxs(dh,{children:[s.jsx(ce,{children:"Trip Log Database"}),s.jsx(mA,{title:"Search Parameters",variant:"secondary",children:s.jsxs(gA,{children:[s.jsxs(Vl,{children:[s.jsx(hh,{children:"Vessel"}),s.jsxs(yA,{value:e.boatId||"",onChange:b=>u("boatId",b.target.value),children:[s.jsx("option",{value:"",children:"All Vessels"}),l==null?void 0:l.map(b=>s.jsx("option",{value:b.id,children:b.name},b.id))]})]}),s.jsxs(Vl,{children:[s.jsx(hh,{children:"Start Date"}),s.jsx(nx,{type:"date",value:e.startDate||"",onChange:b=>u("startDate",b.target.value)})]}),s.jsxs(Vl,{children:[s.jsx(hh,{children:"End Date"}),s.jsx(nx,{type:"date",value:e.endDate||"",onChange:b=>u("endDate",b.target.value)})]}),s.jsx(Vl,{children:s.jsx(G,{variant:"secondary",size:"sm",onClick:h,children:"Clear Filters"})})]})}),!n||n.length===0?s.jsxs(CA,{children:[s.jsx("div",{className:"empty-title",children:"No Trip Records Found"}),s.jsx("div",{className:"empty-message",children:Object.keys(e).length>0?"No trips match the current search parameters.":"No trips have been recorded yet."})]}):s.jsx(vA,{children:n.map(b=>{var $,j,T,v,x,_;return s.jsx(st,{to:`/trips/${b.id}`,style:{textDecoration:"none"},children:s.jsx(xA,{variant:"primary",children:s.jsxs(_A,{children:[s.jsxs(wA,{children:[s.jsxs(bA,{children:[S(b.boatId)," - ",y(b.startTime)]}),s.jsxs(SA,{children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Water Type:"})," ",b.waterType.toUpperCase()]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Role:"})," ",b.role.toUpperCase()]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Duration:"})," ",f((($=b.statistics)==null?void 0:$.durationSeconds)||0)]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Distance:"})," ",m(((j=b.statistics)==null?void 0:j.distanceMeters)||0)]})]})]}),s.jsxs(jA,{children:[s.jsxs("div",{children:[s.jsx(fh,{children:w(((T=b.statistics)==null?void 0:T.averageSpeedKnots)||0)}),s.jsx(ph,{children:"Avg Speed"})]}),s.jsxs("div",{children:[s.jsx(fh,{children:w(((v=b.statistics)==null?void 0:v.maxSpeedKnots)||0)}),s.jsx(ph,{children:"Max Speed"})]}),s.jsxs("div",{children:[s.jsx(fh,{children:((_=(x=b.statistics)==null?void 0:x.stopPoints)==null?void 0:_.length)||0}),s.jsx(ph,{children:"Stop Points"})]})]})]})})},b.id)})})]})};function Eb(e,t){const n=z.useRef(t);z.useEffect(function(){t!==n.current&&e.attributionControl!=null&&(n.current!=null&&e.attributionControl.removeAttribution(n.current),t!=null&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}const TA=1;function LA(e){return Object.freeze({__version:TA,map:e})}function Pb(e,t){return Object.freeze({...e,...t})}const Ab=z.createContext(null),zb=Ab.Provider;function Iu(){const e=z.useContext(Ab);if(e==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function Mb(e){function t(n,i){const{instance:o,context:l}=e(n).current;return z.useImperativeHandle(i,()=>o),n.children==null?null:We.createElement(zb,{value:l},n.children)}return z.forwardRef(t)}function EA(e){function t(n,i){const[o,l]=z.useState(!1),{instance:u}=e(n,l).current;z.useImperativeHandle(i,()=>u),z.useEffect(function(){o&&u.update()},[u,o,n.children]);const h=u._contentNode;return h?sw.createPortal(n.children,h):null}return z.forwardRef(t)}function PA(e){function t(n,i){const{instance:o}=e(n).current;return z.useImperativeHandle(i,()=>o),null}return z.forwardRef(t)}function Em(e,t){const n=z.useRef();z.useEffect(function(){return t!=null&&e.instance.on(t),n.current=t,function(){n.current!=null&&e.instance.off(n.current),n.current=null}},[e,t])}function Nu(e,t){const n=e.pane??t.pane;return n?{...e,pane:n}:e}function AA(e,t){return function(i,o){const l=Iu(),u=e(Nu(i,l),l);return Eb(l.map,i.attribution),Em(u.current,i.eventHandlers),t(u.current,l,i,o),u}}var gp={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,i){i(t)})(w1,function(n){var i="1.9.4";function o(r){var a,c,d,p;for(c=1,d=arguments.length;c<d;c++){p=arguments[c];for(a in p)r[a]=p[a]}return r}var l=Object.create||function(){function r(){}return function(a){return r.prototype=a,new r}}();function u(r,a){var c=Array.prototype.slice;if(r.bind)return r.bind.apply(r,c.call(arguments,1));var d=c.call(arguments,2);return function(){return r.apply(a,d.length?d.concat(c.call(arguments)):arguments)}}var h=0;function f(r){return"_leaflet_id"in r||(r._leaflet_id=++h),r._leaflet_id}function m(r,a,c){var d,p,C,E;return E=function(){d=!1,p&&(C.apply(c,p),p=!1)},C=function(){d?p=arguments:(r.apply(c,arguments),setTimeout(E,a),d=!0)},C}function w(r,a,c){var d=a[1],p=a[0],C=d-p;return r===d&&c?r:((r-p)%C+C)%C+p}function y(){return!1}function S(r,a){if(a===!1)return r;var c=Math.pow(10,a===void 0?6:a);return Math.round(r*c)/c}function b(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function $(r){return b(r).split(/\s+/)}function j(r,a){Object.prototype.hasOwnProperty.call(r,"options")||(r.options=r.options?l(r.options):{});for(var c in a)r.options[c]=a[c];return r.options}function T(r,a,c){var d=[];for(var p in r)d.push(encodeURIComponent(c?p.toUpperCase():p)+"="+encodeURIComponent(r[p]));return(!a||a.indexOf("?")===-1?"?":"&")+d.join("&")}var v=/\{ *([\w_ -]+) *\}/g;function x(r,a){return r.replace(v,function(c,d){var p=a[d];if(p===void 0)throw new Error("No value provided for variable "+c);return typeof p=="function"&&(p=p(a)),p})}var _=Array.isArray||function(r){return Object.prototype.toString.call(r)==="[object Array]"};function k(r,a){for(var c=0;c<r.length;c++)if(r[c]===a)return c;return-1}var M="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function A(r){return window["webkit"+r]||window["moz"+r]||window["ms"+r]}var N=0;function F(r){var a=+new Date,c=Math.max(0,16-(a-N));return N=a+c,window.setTimeout(r,c)}var U=window.requestAnimationFrame||A("RequestAnimationFrame")||F,R=window.cancelAnimationFrame||A("CancelAnimationFrame")||A("CancelRequestAnimationFrame")||function(r){window.clearTimeout(r)};function Z(r,a,c){if(c&&U===F)r.call(a);else return U.call(window,u(r,a))}function J(r){r&&R.call(window,r)}var de={__proto__:null,extend:o,create:l,bind:u,get lastId(){return h},stamp:f,throttle:m,wrapNum:w,falseFn:y,formatNum:S,trim:b,splitWords:$,setOptions:j,getParamString:T,template:x,isArray:_,indexOf:k,emptyImageUrl:M,requestFn:U,cancelFn:R,requestAnimFrame:Z,cancelAnimFrame:J};function _e(){}_e.extend=function(r){var a=function(){j(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=a.__super__=this.prototype,d=l(c);d.constructor=a,a.prototype=d;for(var p in this)Object.prototype.hasOwnProperty.call(this,p)&&p!=="prototype"&&p!=="__super__"&&(a[p]=this[p]);return r.statics&&o(a,r.statics),r.includes&&(ne(r.includes),o.apply(null,[d].concat(r.includes))),o(d,r),delete d.statics,delete d.includes,d.options&&(d.options=c.options?l(c.options):{},o(d.options,r.options)),d._initHooks=[],d.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var C=0,E=d._initHooks.length;C<E;C++)d._initHooks[C].call(this)}},a},_e.include=function(r){var a=this.prototype.options;return o(this.prototype,r),r.options&&(this.prototype.options=a,this.mergeOptions(r.options)),this},_e.mergeOptions=function(r){return o(this.prototype.options,r),this},_e.addInitHook=function(r){var a=Array.prototype.slice.call(arguments,1),c=typeof r=="function"?r:function(){this[r].apply(this,a)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function ne(r){if(!(typeof L>"u"||!L||!L.Mixin)){r=_(r)?r:[r];for(var a=0;a<r.length;a++)r[a]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var ue={on:function(r,a,c){if(typeof r=="object")for(var d in r)this._on(d,r[d],a);else{r=$(r);for(var p=0,C=r.length;p<C;p++)this._on(r[p],a,c)}return this},off:function(r,a,c){if(!arguments.length)delete this._events;else if(typeof r=="object")for(var d in r)this._off(d,r[d],a);else{r=$(r);for(var p=arguments.length===1,C=0,E=r.length;C<E;C++)p?this._off(r[C]):this._off(r[C],a,c)}return this},_on:function(r,a,c,d){if(typeof a!="function"){console.warn("wrong listener type: "+typeof a);return}if(this._listens(r,a,c)===!1){c===this&&(c=void 0);var p={fn:a,ctx:c};d&&(p.once=!0),this._events=this._events||{},this._events[r]=this._events[r]||[],this._events[r].push(p)}},_off:function(r,a,c){var d,p,C;if(this._events&&(d=this._events[r],!!d)){if(arguments.length===1){if(this._firingCount)for(p=0,C=d.length;p<C;p++)d[p].fn=y;delete this._events[r];return}if(typeof a!="function"){console.warn("wrong listener type: "+typeof a);return}var E=this._listens(r,a,c);if(E!==!1){var I=d[E];this._firingCount&&(I.fn=y,this._events[r]=d=d.slice()),d.splice(E,1)}}},fire:function(r,a,c){if(!this.listens(r,c))return this;var d=o({},a,{type:r,target:this,sourceTarget:a&&a.sourceTarget||this});if(this._events){var p=this._events[r];if(p){this._firingCount=this._firingCount+1||1;for(var C=0,E=p.length;C<E;C++){var I=p[C],D=I.fn;I.once&&this.off(r,D,I.ctx),D.call(I.ctx||this,d)}this._firingCount--}}return c&&this._propagateEvent(d),this},listens:function(r,a,c,d){typeof r!="string"&&console.warn('"string" type argument expected');var p=a;typeof a!="function"&&(d=!!a,p=void 0,c=void 0);var C=this._events&&this._events[r];if(C&&C.length&&this._listens(r,p,c)!==!1)return!0;if(d){for(var E in this._eventParents)if(this._eventParents[E].listens(r,a,c,d))return!0}return!1},_listens:function(r,a,c){if(!this._events)return!1;var d=this._events[r]||[];if(!a)return!!d.length;c===this&&(c=void 0);for(var p=0,C=d.length;p<C;p++)if(d[p].fn===a&&d[p].ctx===c)return p;return!1},once:function(r,a,c){if(typeof r=="object")for(var d in r)this._on(d,r[d],a,!0);else{r=$(r);for(var p=0,C=r.length;p<C;p++)this._on(r[p],a,c,!0)}return this},addEventParent:function(r){return this._eventParents=this._eventParents||{},this._eventParents[f(r)]=r,this},removeEventParent:function(r){return this._eventParents&&delete this._eventParents[f(r)],this},_propagateEvent:function(r){for(var a in this._eventParents)this._eventParents[a].fire(r.type,o({layer:r.target,propagatedFrom:r.target},r),!0)}};ue.addEventListener=ue.on,ue.removeEventListener=ue.clearAllEventListeners=ue.off,ue.addOneTimeEventListener=ue.once,ue.fireEvent=ue.fire,ue.hasEventListeners=ue.listens;var Qe=_e.extend(ue);function B(r,a,c){this.x=c?Math.round(r):r,this.y=c?Math.round(a):a}var re=Math.trunc||function(r){return r>0?Math.floor(r):Math.ceil(r)};B.prototype={clone:function(){return new B(this.x,this.y)},add:function(r){return this.clone()._add(V(r))},_add:function(r){return this.x+=r.x,this.y+=r.y,this},subtract:function(r){return this.clone()._subtract(V(r))},_subtract:function(r){return this.x-=r.x,this.y-=r.y,this},divideBy:function(r){return this.clone()._divideBy(r)},_divideBy:function(r){return this.x/=r,this.y/=r,this},multiplyBy:function(r){return this.clone()._multiplyBy(r)},_multiplyBy:function(r){return this.x*=r,this.y*=r,this},scaleBy:function(r){return new B(this.x*r.x,this.y*r.y)},unscaleBy:function(r){return new B(this.x/r.x,this.y/r.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=re(this.x),this.y=re(this.y),this},distanceTo:function(r){r=V(r);var a=r.x-this.x,c=r.y-this.y;return Math.sqrt(a*a+c*c)},equals:function(r){return r=V(r),r.x===this.x&&r.y===this.y},contains:function(r){return r=V(r),Math.abs(r.x)<=Math.abs(this.x)&&Math.abs(r.y)<=Math.abs(this.y)},toString:function(){return"Point("+S(this.x)+", "+S(this.y)+")"}};function V(r,a,c){return r instanceof B?r:_(r)?new B(r[0],r[1]):r==null?r:typeof r=="object"&&"x"in r&&"y"in r?new B(r.x,r.y):new B(r,a,c)}function te(r,a){if(r)for(var c=a?[r,a]:r,d=0,p=c.length;d<p;d++)this.extend(c[d])}te.prototype={extend:function(r){var a,c;if(!r)return this;if(r instanceof B||typeof r[0]=="number"||"x"in r)a=c=V(r);else if(r=se(r),a=r.min,c=r.max,!a||!c)return this;return!this.min&&!this.max?(this.min=a.clone(),this.max=c.clone()):(this.min.x=Math.min(a.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(a.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(r){return V((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,r)},getBottomLeft:function(){return V(this.min.x,this.max.y)},getTopRight:function(){return V(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(r){var a,c;return typeof r[0]=="number"||r instanceof B?r=V(r):r=se(r),r instanceof te?(a=r.min,c=r.max):a=c=r,a.x>=this.min.x&&c.x<=this.max.x&&a.y>=this.min.y&&c.y<=this.max.y},intersects:function(r){r=se(r);var a=this.min,c=this.max,d=r.min,p=r.max,C=p.x>=a.x&&d.x<=c.x,E=p.y>=a.y&&d.y<=c.y;return C&&E},overlaps:function(r){r=se(r);var a=this.min,c=this.max,d=r.min,p=r.max,C=p.x>a.x&&d.x<c.x,E=p.y>a.y&&d.y<c.y;return C&&E},isValid:function(){return!!(this.min&&this.max)},pad:function(r){var a=this.min,c=this.max,d=Math.abs(a.x-c.x)*r,p=Math.abs(a.y-c.y)*r;return se(V(a.x-d,a.y-p),V(c.x+d,c.y+p))},equals:function(r){return r?(r=se(r),this.min.equals(r.getTopLeft())&&this.max.equals(r.getBottomRight())):!1}};function se(r,a){return!r||r instanceof te?r:new te(r,a)}function Ae(r,a){if(r)for(var c=a?[r,a]:r,d=0,p=c.length;d<p;d++)this.extend(c[d])}Ae.prototype={extend:function(r){var a=this._southWest,c=this._northEast,d,p;if(r instanceof me)d=r,p=r;else if(r instanceof Ae){if(d=r._southWest,p=r._northEast,!d||!p)return this}else return r?this.extend(le(r)||we(r)):this;return!a&&!c?(this._southWest=new me(d.lat,d.lng),this._northEast=new me(p.lat,p.lng)):(a.lat=Math.min(d.lat,a.lat),a.lng=Math.min(d.lng,a.lng),c.lat=Math.max(p.lat,c.lat),c.lng=Math.max(p.lng,c.lng)),this},pad:function(r){var a=this._southWest,c=this._northEast,d=Math.abs(a.lat-c.lat)*r,p=Math.abs(a.lng-c.lng)*r;return new Ae(new me(a.lat-d,a.lng-p),new me(c.lat+d,c.lng+p))},getCenter:function(){return new me((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new me(this.getNorth(),this.getWest())},getSouthEast:function(){return new me(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(r){typeof r[0]=="number"||r instanceof me||"lat"in r?r=le(r):r=we(r);var a=this._southWest,c=this._northEast,d,p;return r instanceof Ae?(d=r.getSouthWest(),p=r.getNorthEast()):d=p=r,d.lat>=a.lat&&p.lat<=c.lat&&d.lng>=a.lng&&p.lng<=c.lng},intersects:function(r){r=we(r);var a=this._southWest,c=this._northEast,d=r.getSouthWest(),p=r.getNorthEast(),C=p.lat>=a.lat&&d.lat<=c.lat,E=p.lng>=a.lng&&d.lng<=c.lng;return C&&E},overlaps:function(r){r=we(r);var a=this._southWest,c=this._northEast,d=r.getSouthWest(),p=r.getNorthEast(),C=p.lat>a.lat&&d.lat<c.lat,E=p.lng>a.lng&&d.lng<c.lng;return C&&E},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(r,a){return r?(r=we(r),this._southWest.equals(r.getSouthWest(),a)&&this._northEast.equals(r.getNorthEast(),a)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function we(r,a){return r instanceof Ae?r:new Ae(r,a)}function me(r,a,c){if(isNaN(r)||isNaN(a))throw new Error("Invalid LatLng object: ("+r+", "+a+")");this.lat=+r,this.lng=+a,c!==void 0&&(this.alt=+c)}me.prototype={equals:function(r,a){if(!r)return!1;r=le(r);var c=Math.max(Math.abs(this.lat-r.lat),Math.abs(this.lng-r.lng));return c<=(a===void 0?1e-9:a)},toString:function(r){return"LatLng("+S(this.lat,r)+", "+S(this.lng,r)+")"},distanceTo:function(r){return Mt.distance(this,le(r))},wrap:function(){return Mt.wrapLatLng(this)},toBounds:function(r){var a=180*r/40075017,c=a/Math.cos(Math.PI/180*this.lat);return we([this.lat-a,this.lng-c],[this.lat+a,this.lng+c])},clone:function(){return new me(this.lat,this.lng,this.alt)}};function le(r,a,c){return r instanceof me?r:_(r)&&typeof r[0]!="object"?r.length===3?new me(r[0],r[1],r[2]):r.length===2?new me(r[0],r[1]):null:r==null?r:typeof r=="object"&&"lat"in r?new me(r.lat,"lng"in r?r.lng:r.lon,r.alt):a===void 0?null:new me(r,a,c)}var rt={latLngToPoint:function(r,a){var c=this.projection.project(r),d=this.scale(a);return this.transformation._transform(c,d)},pointToLatLng:function(r,a){var c=this.scale(a),d=this.transformation.untransform(r,c);return this.projection.unproject(d)},project:function(r){return this.projection.project(r)},unproject:function(r){return this.projection.unproject(r)},scale:function(r){return 256*Math.pow(2,r)},zoom:function(r){return Math.log(r/256)/Math.LN2},getProjectedBounds:function(r){if(this.infinite)return null;var a=this.projection.bounds,c=this.scale(r),d=this.transformation.transform(a.min,c),p=this.transformation.transform(a.max,c);return new te(d,p)},infinite:!1,wrapLatLng:function(r){var a=this.wrapLng?w(r.lng,this.wrapLng,!0):r.lng,c=this.wrapLat?w(r.lat,this.wrapLat,!0):r.lat,d=r.alt;return new me(c,a,d)},wrapLatLngBounds:function(r){var a=r.getCenter(),c=this.wrapLatLng(a),d=a.lat-c.lat,p=a.lng-c.lng;if(d===0&&p===0)return r;var C=r.getSouthWest(),E=r.getNorthEast(),I=new me(C.lat-d,C.lng-p),D=new me(E.lat-d,E.lng-p);return new Ae(I,D)}},Mt=o({},rt,{wrapLng:[-180,180],R:6371e3,distance:function(r,a){var c=Math.PI/180,d=r.lat*c,p=a.lat*c,C=Math.sin((a.lat-r.lat)*c/2),E=Math.sin((a.lng-r.lng)*c/2),I=C*C+Math.cos(d)*Math.cos(p)*E*E,D=2*Math.atan2(Math.sqrt(I),Math.sqrt(1-I));return this.R*D}}),An=6378137,xi={R:An,MAX_LATITUDE:85.0511287798,project:function(r){var a=Math.PI/180,c=this.MAX_LATITUDE,d=Math.max(Math.min(c,r.lat),-c),p=Math.sin(d*a);return new B(this.R*r.lng*a,this.R*Math.log((1+p)/(1-p))/2)},unproject:function(r){var a=180/Math.PI;return new me((2*Math.atan(Math.exp(r.y/this.R))-Math.PI/2)*a,r.x*a/this.R)},bounds:function(){var r=An*Math.PI;return new te([-r,-r],[r,r])}()};function $r(r,a,c,d){if(_(r)){this._a=r[0],this._b=r[1],this._c=r[2],this._d=r[3];return}this._a=r,this._b=a,this._c=c,this._d=d}$r.prototype={transform:function(r,a){return this._transform(r.clone(),a)},_transform:function(r,a){return a=a||1,r.x=a*(this._a*r.x+this._b),r.y=a*(this._c*r.y+this._d),r},untransform:function(r,a){return a=a||1,new B((r.x/a-this._b)/this._a,(r.y/a-this._d)/this._c)}};function Rt(r,a,c,d){return new $r(r,a,c,d)}var Bu=o({},Mt,{code:"EPSG:3857",projection:xi,transformation:function(){var r=.5/(Math.PI*xi.R);return Rt(r,.5,-r,.5)}()}),Gb=o({},Bu,{code:"EPSG:900913"});function Am(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function zm(r,a){var c="",d,p,C,E,I,D;for(d=0,C=r.length;d<C;d++){for(I=r[d],p=0,E=I.length;p<E;p++)D=I[p],c+=(p?"L":"M")+D.x+" "+D.y;c+=a?ie.svg?"z":"x":""}return c||"M0 0"}var Uu=document.documentElement.style,rl="ActiveXObject"in window,Kb=rl&&!document.addEventListener,Mm="msLaunchUri"in navigator&&!("documentMode"in document),Hu=zn("webkit"),Rm=zn("android"),Im=zn("android 2")||zn("android 3"),Qb=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Yb=Rm&&zn("Google")&&Qb<537&&!("AudioNode"in window),Zu=!!window.opera,Nm=!Mm&&zn("chrome"),Dm=zn("gecko")&&!Hu&&!Zu&&!rl,Jb=!Nm&&zn("safari"),Om=zn("phantom"),Fm="OTransition"in Uu,Xb=navigator.platform.indexOf("Win")===0,Bm=rl&&"transition"in Uu,Wu="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Im,Um="MozPerspective"in Uu,eS=!window.L_DISABLE_3D&&(Bm||Wu||Um)&&!Fm&&!Om,Es=typeof orientation<"u"||zn("mobile"),tS=Es&&Hu,nS=Es&&Wu,Hm=!window.PointerEvent&&window.MSPointerEvent,Zm=!!(window.PointerEvent||Hm),Wm="ontouchstart"in window||!!window.TouchEvent,rS=!window.L_NO_TOUCH&&(Wm||Zm),iS=Es&&Zu,oS=Es&&Dm,sS=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,aS=function(){var r=!1;try{var a=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("testPassiveEventSupport",y,a),window.removeEventListener("testPassiveEventSupport",y,a)}catch{}return r}(),lS=function(){return!!document.createElement("canvas").getContext}(),Vu=!!(document.createElementNS&&Am("svg").createSVGRect),cS=!!Vu&&function(){var r=document.createElement("div");return r.innerHTML="<svg/>",(r.firstChild&&r.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),uS=!Vu&&function(){try{var r=document.createElement("div");r.innerHTML='<v:shape adj="1"/>';var a=r.firstChild;return a.style.behavior="url(#default#VML)",a&&typeof a.adj=="object"}catch{return!1}}(),dS=navigator.platform.indexOf("Mac")===0,hS=navigator.platform.indexOf("Linux")===0;function zn(r){return navigator.userAgent.toLowerCase().indexOf(r)>=0}var ie={ie:rl,ielt9:Kb,edge:Mm,webkit:Hu,android:Rm,android23:Im,androidStock:Yb,opera:Zu,chrome:Nm,gecko:Dm,safari:Jb,phantom:Om,opera12:Fm,win:Xb,ie3d:Bm,webkit3d:Wu,gecko3d:Um,any3d:eS,mobile:Es,mobileWebkit:tS,mobileWebkit3d:nS,msPointer:Hm,pointer:Zm,touch:rS,touchNative:Wm,mobileOpera:iS,mobileGecko:oS,retina:sS,passiveEvents:aS,canvas:lS,svg:Vu,vml:uS,inlineSvg:cS,mac:dS,linux:hS},Vm=ie.msPointer?"MSPointerDown":"pointerdown",qm=ie.msPointer?"MSPointerMove":"pointermove",Gm=ie.msPointer?"MSPointerUp":"pointerup",Km=ie.msPointer?"MSPointerCancel":"pointercancel",qu={touchstart:Vm,touchmove:qm,touchend:Gm,touchcancel:Km},Qm={touchstart:vS,touchmove:il,touchend:il,touchcancel:il},ho={},Ym=!1;function fS(r,a,c){return a==="touchstart"&&yS(),Qm[a]?(c=Qm[a].bind(this,c),r.addEventListener(qu[a],c,!1),c):(console.warn("wrong event specified:",a),y)}function pS(r,a,c){if(!qu[a]){console.warn("wrong event specified:",a);return}r.removeEventListener(qu[a],c,!1)}function mS(r){ho[r.pointerId]=r}function gS(r){ho[r.pointerId]&&(ho[r.pointerId]=r)}function Jm(r){delete ho[r.pointerId]}function yS(){Ym||(document.addEventListener(Vm,mS,!0),document.addEventListener(qm,gS,!0),document.addEventListener(Gm,Jm,!0),document.addEventListener(Km,Jm,!0),Ym=!0)}function il(r,a){if(a.pointerType!==(a.MSPOINTER_TYPE_MOUSE||"mouse")){a.touches=[];for(var c in ho)a.touches.push(ho[c]);a.changedTouches=[a],r(a)}}function vS(r,a){a.MSPOINTER_TYPE_TOUCH&&a.pointerType===a.MSPOINTER_TYPE_TOUCH&&mt(a),il(r,a)}function xS(r){var a={},c,d;for(d in r)c=r[d],a[d]=c&&c.bind?c.bind(r):c;return r=a,a.type="dblclick",a.detail=2,a.isTrusted=!1,a._simulated=!0,a}var _S=200;function wS(r,a){r.addEventListener("dblclick",a);var c=0,d;function p(C){if(C.detail!==1){d=C.detail;return}if(!(C.pointerType==="mouse"||C.sourceCapabilities&&!C.sourceCapabilities.firesTouchEvents)){var E=rg(C);if(!(E.some(function(D){return D instanceof HTMLLabelElement&&D.attributes.for})&&!E.some(function(D){return D instanceof HTMLInputElement||D instanceof HTMLSelectElement}))){var I=Date.now();I-c<=_S?(d++,d===2&&a(xS(C))):d=1,c=I}}}return r.addEventListener("click",p),{dblclick:a,simDblclick:p}}function bS(r,a){r.removeEventListener("dblclick",a.dblclick),r.removeEventListener("click",a.simDblclick)}var Gu=al(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Ps=al(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Xm=Ps==="webkitTransition"||Ps==="OTransition"?Ps+"End":"transitionend";function eg(r){return typeof r=="string"?document.getElementById(r):r}function As(r,a){var c=r.style[a]||r.currentStyle&&r.currentStyle[a];if((!c||c==="auto")&&document.defaultView){var d=document.defaultView.getComputedStyle(r,null);c=d?d[a]:null}return c==="auto"?null:c}function Te(r,a,c){var d=document.createElement(r);return d.className=a||"",c&&c.appendChild(d),d}function Oe(r){var a=r.parentNode;a&&a.removeChild(r)}function ol(r){for(;r.firstChild;)r.removeChild(r.firstChild)}function fo(r){var a=r.parentNode;a&&a.lastChild!==r&&a.appendChild(r)}function po(r){var a=r.parentNode;a&&a.firstChild!==r&&a.insertBefore(r,a.firstChild)}function Ku(r,a){if(r.classList!==void 0)return r.classList.contains(a);var c=sl(r);return c.length>0&&new RegExp("(^|\\s)"+a+"(\\s|$)").test(c)}function ge(r,a){if(r.classList!==void 0)for(var c=$(a),d=0,p=c.length;d<p;d++)r.classList.add(c[d]);else if(!Ku(r,a)){var C=sl(r);Qu(r,(C?C+" ":"")+a)}}function qe(r,a){r.classList!==void 0?r.classList.remove(a):Qu(r,b((" "+sl(r)+" ").replace(" "+a+" "," ")))}function Qu(r,a){r.className.baseVal===void 0?r.className=a:r.className.baseVal=a}function sl(r){return r.correspondingElement&&(r=r.correspondingElement),r.className.baseVal===void 0?r.className:r.className.baseVal}function en(r,a){"opacity"in r.style?r.style.opacity=a:"filter"in r.style&&SS(r,a)}function SS(r,a){var c=!1,d="DXImageTransform.Microsoft.Alpha";try{c=r.filters.item(d)}catch{if(a===1)return}a=Math.round(a*100),c?(c.Enabled=a!==100,c.Opacity=a):r.style.filter+=" progid:"+d+"(opacity="+a+")"}function al(r){for(var a=document.documentElement.style,c=0;c<r.length;c++)if(r[c]in a)return r[c];return!1}function _i(r,a,c){var d=a||new B(0,0);r.style[Gu]=(ie.ie3d?"translate("+d.x+"px,"+d.y+"px)":"translate3d("+d.x+"px,"+d.y+"px,0)")+(c?" scale("+c+")":"")}function Ye(r,a){r._leaflet_pos=a,ie.any3d?_i(r,a):(r.style.left=a.x+"px",r.style.top=a.y+"px")}function wi(r){return r._leaflet_pos||new B(0,0)}var zs,Ms,Yu;if("onselectstart"in document)zs=function(){he(window,"selectstart",mt)},Ms=function(){ze(window,"selectstart",mt)};else{var Rs=al(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);zs=function(){if(Rs){var r=document.documentElement.style;Yu=r[Rs],r[Rs]="none"}},Ms=function(){Rs&&(document.documentElement.style[Rs]=Yu,Yu=void 0)}}function Ju(){he(window,"dragstart",mt)}function Xu(){ze(window,"dragstart",mt)}var ll,ed;function td(r){for(;r.tabIndex===-1;)r=r.parentNode;r.style&&(cl(),ll=r,ed=r.style.outlineStyle,r.style.outlineStyle="none",he(window,"keydown",cl))}function cl(){ll&&(ll.style.outlineStyle=ed,ll=void 0,ed=void 0,ze(window,"keydown",cl))}function tg(r){do r=r.parentNode;while((!r.offsetWidth||!r.offsetHeight)&&r!==document.body);return r}function nd(r){var a=r.getBoundingClientRect();return{x:a.width/r.offsetWidth||1,y:a.height/r.offsetHeight||1,boundingClientRect:a}}var jS={__proto__:null,TRANSFORM:Gu,TRANSITION:Ps,TRANSITION_END:Xm,get:eg,getStyle:As,create:Te,remove:Oe,empty:ol,toFront:fo,toBack:po,hasClass:Ku,addClass:ge,removeClass:qe,setClass:Qu,getClass:sl,setOpacity:en,testProp:al,setTransform:_i,setPosition:Ye,getPosition:wi,get disableTextSelection(){return zs},get enableTextSelection(){return Ms},disableImageDrag:Ju,enableImageDrag:Xu,preventOutline:td,restoreOutline:cl,getSizedParentNode:tg,getScale:nd};function he(r,a,c,d){if(a&&typeof a=="object")for(var p in a)id(r,p,a[p],c);else{a=$(a);for(var C=0,E=a.length;C<E;C++)id(r,a[C],c,d)}return this}var Mn="_leaflet_events";function ze(r,a,c,d){if(arguments.length===1)ng(r),delete r[Mn];else if(a&&typeof a=="object")for(var p in a)od(r,p,a[p],c);else if(a=$(a),arguments.length===2)ng(r,function(I){return k(a,I)!==-1});else for(var C=0,E=a.length;C<E;C++)od(r,a[C],c,d);return this}function ng(r,a){for(var c in r[Mn]){var d=c.split(/\d/)[0];(!a||a(d))&&od(r,d,null,null,c)}}var rd={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function id(r,a,c,d){var p=a+f(c)+(d?"_"+f(d):"");if(r[Mn]&&r[Mn][p])return this;var C=function(I){return c.call(d||r,I||window.event)},E=C;!ie.touchNative&&ie.pointer&&a.indexOf("touch")===0?C=fS(r,a,C):ie.touch&&a==="dblclick"?C=wS(r,C):"addEventListener"in r?a==="touchstart"||a==="touchmove"||a==="wheel"||a==="mousewheel"?r.addEventListener(rd[a]||a,C,ie.passiveEvents?{passive:!1}:!1):a==="mouseenter"||a==="mouseleave"?(C=function(I){I=I||window.event,ad(r,I)&&E(I)},r.addEventListener(rd[a],C,!1)):r.addEventListener(a,E,!1):r.attachEvent("on"+a,C),r[Mn]=r[Mn]||{},r[Mn][p]=C}function od(r,a,c,d,p){p=p||a+f(c)+(d?"_"+f(d):"");var C=r[Mn]&&r[Mn][p];if(!C)return this;!ie.touchNative&&ie.pointer&&a.indexOf("touch")===0?pS(r,a,C):ie.touch&&a==="dblclick"?bS(r,C):"removeEventListener"in r?r.removeEventListener(rd[a]||a,C,!1):r.detachEvent("on"+a,C),r[Mn][p]=null}function bi(r){return r.stopPropagation?r.stopPropagation():r.originalEvent?r.originalEvent._stopped=!0:r.cancelBubble=!0,this}function sd(r){return id(r,"wheel",bi),this}function Is(r){return he(r,"mousedown touchstart dblclick contextmenu",bi),r._leaflet_disable_click=!0,this}function mt(r){return r.preventDefault?r.preventDefault():r.returnValue=!1,this}function Si(r){return mt(r),bi(r),this}function rg(r){if(r.composedPath)return r.composedPath();for(var a=[],c=r.target;c;)a.push(c),c=c.parentNode;return a}function ig(r,a){if(!a)return new B(r.clientX,r.clientY);var c=nd(a),d=c.boundingClientRect;return new B((r.clientX-d.left)/c.x-a.clientLeft,(r.clientY-d.top)/c.y-a.clientTop)}var CS=ie.linux&&ie.chrome?window.devicePixelRatio:ie.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function og(r){return ie.edge?r.wheelDeltaY/2:r.deltaY&&r.deltaMode===0?-r.deltaY/CS:r.deltaY&&r.deltaMode===1?-r.deltaY*20:r.deltaY&&r.deltaMode===2?-r.deltaY*60:r.deltaX||r.deltaZ?0:r.wheelDelta?(r.wheelDeltaY||r.wheelDelta)/2:r.detail&&Math.abs(r.detail)<32765?-r.detail*20:r.detail?r.detail/-32765*60:0}function ad(r,a){var c=a.relatedTarget;if(!c)return!0;try{for(;c&&c!==r;)c=c.parentNode}catch{return!1}return c!==r}var $S={__proto__:null,on:he,off:ze,stopPropagation:bi,disableScrollPropagation:sd,disableClickPropagation:Is,preventDefault:mt,stop:Si,getPropagationPath:rg,getMousePosition:ig,getWheelDelta:og,isExternalTarget:ad,addListener:he,removeListener:ze},sg=Qe.extend({run:function(r,a,c,d){this.stop(),this._el=r,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(d||.5,.2),this._startPos=wi(r),this._offset=a.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=Z(this._animate,this),this._step()},_step:function(r){var a=+new Date-this._startTime,c=this._duration*1e3;a<c?this._runFrame(this._easeOut(a/c),r):(this._runFrame(1),this._complete())},_runFrame:function(r,a){var c=this._startPos.add(this._offset.multiplyBy(r));a&&c._round(),Ye(this._el,c),this.fire("step")},_complete:function(){J(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(r){return 1-Math.pow(1-r,this._easeOutPower)}}),Ce=Qe.extend({options:{crs:Bu,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(r,a){a=j(this,a),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(r),this._initLayout(),this._onResize=u(this._onResize,this),this._initEvents(),a.maxBounds&&this.setMaxBounds(a.maxBounds),a.zoom!==void 0&&(this._zoom=this._limitZoom(a.zoom)),a.center&&a.zoom!==void 0&&this.setView(le(a.center),a.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Ps&&ie.any3d&&!ie.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),he(this._proxy,Xm,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(r,a,c){if(a=a===void 0?this._zoom:this._limitZoom(a),r=this._limitCenter(le(r),a,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=o({animate:c.animate},c.zoom),c.pan=o({animate:c.animate,duration:c.duration},c.pan));var d=this._zoom!==a?this._tryAnimatedZoom&&this._tryAnimatedZoom(r,a,c.zoom):this._tryAnimatedPan(r,c.pan);if(d)return clearTimeout(this._sizeTimer),this}return this._resetView(r,a,c.pan&&c.pan.noMoveStart),this},setZoom:function(r,a){return this._loaded?this.setView(this.getCenter(),r,{zoom:a}):(this._zoom=r,this)},zoomIn:function(r,a){return r=r||(ie.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+r,a)},zoomOut:function(r,a){return r=r||(ie.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-r,a)},setZoomAround:function(r,a,c){var d=this.getZoomScale(a),p=this.getSize().divideBy(2),C=r instanceof B?r:this.latLngToContainerPoint(r),E=C.subtract(p).multiplyBy(1-1/d),I=this.containerPointToLatLng(p.add(E));return this.setView(I,a,{zoom:c})},_getBoundsCenterZoom:function(r,a){a=a||{},r=r.getBounds?r.getBounds():we(r);var c=V(a.paddingTopLeft||a.padding||[0,0]),d=V(a.paddingBottomRight||a.padding||[0,0]),p=this.getBoundsZoom(r,!1,c.add(d));if(p=typeof a.maxZoom=="number"?Math.min(a.maxZoom,p):p,p===1/0)return{center:r.getCenter(),zoom:p};var C=d.subtract(c).divideBy(2),E=this.project(r.getSouthWest(),p),I=this.project(r.getNorthEast(),p),D=this.unproject(E.add(I).divideBy(2).add(C),p);return{center:D,zoom:p}},fitBounds:function(r,a){if(r=we(r),!r.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(r,a);return this.setView(c.center,c.zoom,a)},fitWorld:function(r){return this.fitBounds([[-90,-180],[90,180]],r)},panTo:function(r,a){return this.setView(r,this._zoom,{pan:a})},panBy:function(r,a){if(r=V(r).round(),a=a||{},!r.x&&!r.y)return this.fire("moveend");if(a.animate!==!0&&!this.getSize().contains(r))return this._resetView(this.unproject(this.project(this.getCenter()).add(r)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new sg,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),a.noMoveStart||this.fire("movestart"),a.animate!==!1){ge(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(r).round();this._panAnim.run(this._mapPane,c,a.duration||.25,a.easeLinearity)}else this._rawPanBy(r),this.fire("move").fire("moveend");return this},flyTo:function(r,a,c){if(c=c||{},c.animate===!1||!ie.any3d)return this.setView(r,a,c);this._stop();var d=this.project(this.getCenter()),p=this.project(r),C=this.getSize(),E=this._zoom;r=le(r),a=a===void 0?E:a;var I=Math.max(C.x,C.y),D=I*this.getZoomScale(E,a),H=p.distanceTo(d)||1,Y=1.42,ae=Y*Y;function xe(Je){var wl=Je?-1:1,p1=Je?D:I,m1=D*D-I*I+wl*ae*ae*H*H,g1=2*p1*ae*H,vd=m1/g1,Fg=Math.sqrt(vd*vd+1)-vd,y1=Fg<1e-9?-18:Math.log(Fg);return y1}function Ct(Je){return(Math.exp(Je)-Math.exp(-Je))/2}function ct(Je){return(Math.exp(Je)+Math.exp(-Je))/2}function nn(Je){return Ct(Je)/ct(Je)}var It=xe(0);function _o(Je){return I*(ct(It)/ct(It+Y*Je))}function u1(Je){return I*(ct(It)*nn(It+Y*Je)-Ct(It))/ae}function d1(Je){return 1-Math.pow(1-Je,1.5)}var h1=Date.now(),Dg=(xe(1)-It)/Y,f1=c.duration?1e3*c.duration:1e3*Dg*.8;function Og(){var Je=(Date.now()-h1)/f1,wl=d1(Je)*Dg;Je<=1?(this._flyToFrame=Z(Og,this),this._move(this.unproject(d.add(p.subtract(d).multiplyBy(u1(wl)/H)),E),this.getScaleZoom(I/_o(wl),E),{flyTo:!0})):this._move(r,a)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),Og.call(this),this},flyToBounds:function(r,a){var c=this._getBoundsCenterZoom(r,a);return this.flyTo(c.center,c.zoom,a)},setMaxBounds:function(r){return r=we(r),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),r.isValid()?(this.options.maxBounds=r,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(r){var a=this.options.minZoom;return this.options.minZoom=r,this._loaded&&a!==r&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(r):this},setMaxZoom:function(r){var a=this.options.maxZoom;return this.options.maxZoom=r,this._loaded&&a!==r&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(r):this},panInsideBounds:function(r,a){this._enforcingBounds=!0;var c=this.getCenter(),d=this._limitCenter(c,this._zoom,we(r));return c.equals(d)||this.panTo(d,a),this._enforcingBounds=!1,this},panInside:function(r,a){a=a||{};var c=V(a.paddingTopLeft||a.padding||[0,0]),d=V(a.paddingBottomRight||a.padding||[0,0]),p=this.project(this.getCenter()),C=this.project(r),E=this.getPixelBounds(),I=se([E.min.add(c),E.max.subtract(d)]),D=I.getSize();if(!I.contains(C)){this._enforcingBounds=!0;var H=C.subtract(I.getCenter()),Y=I.extend(C).getSize().subtract(D);p.x+=H.x<0?-Y.x:Y.x,p.y+=H.y<0?-Y.y:Y.y,this.panTo(this.unproject(p),a),this._enforcingBounds=!1}return this},invalidateSize:function(r){if(!this._loaded)return this;r=o({animate:!1,pan:!0},r===!0?{animate:!0}:r);var a=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),d=a.divideBy(2).round(),p=c.divideBy(2).round(),C=d.subtract(p);return!C.x&&!C.y?this:(r.animate&&r.pan?this.panBy(C):(r.pan&&this._rawPanBy(C),this.fire("move"),r.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(u(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:a,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(r){if(r=this._locateOptions=o({timeout:1e4,watch:!1},r),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var a=u(this._handleGeolocationResponse,this),c=u(this._handleGeolocationError,this);return r.watch?this._locationWatchId=navigator.geolocation.watchPosition(a,c,r):navigator.geolocation.getCurrentPosition(a,c,r),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(r){if(this._container._leaflet_id){var a=r.code,c=r.message||(a===1?"permission denied":a===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:a,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(r){if(this._container._leaflet_id){var a=r.coords.latitude,c=r.coords.longitude,d=new me(a,c),p=d.toBounds(r.coords.accuracy*2),C=this._locateOptions;if(C.setView){var E=this.getBoundsZoom(p);this.setView(d,C.maxZoom?Math.min(E,C.maxZoom):E)}var I={latlng:d,bounds:p,timestamp:r.timestamp};for(var D in r.coords)typeof r.coords[D]=="number"&&(I[D]=r.coords[D]);this.fire("locationfound",I)}},addHandler:function(r,a){if(!a)return this;var c=this[r]=new a(this);return this._handlers.push(c),this.options[r]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Oe(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(J(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var r;for(r in this._layers)this._layers[r].remove();for(r in this._panes)Oe(this._panes[r]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(r,a){var c="leaflet-pane"+(r?" leaflet-"+r.replace("Pane","")+"-pane":""),d=Te("div",c,a||this._mapPane);return r&&(this._panes[r]=d),d},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var r=this.getPixelBounds(),a=this.unproject(r.getBottomLeft()),c=this.unproject(r.getTopRight());return new Ae(a,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(r,a,c){r=we(r),c=V(c||[0,0]);var d=this.getZoom()||0,p=this.getMinZoom(),C=this.getMaxZoom(),E=r.getNorthWest(),I=r.getSouthEast(),D=this.getSize().subtract(c),H=se(this.project(I,d),this.project(E,d)).getSize(),Y=ie.any3d?this.options.zoomSnap:1,ae=D.x/H.x,xe=D.y/H.y,Ct=a?Math.max(ae,xe):Math.min(ae,xe);return d=this.getScaleZoom(Ct,d),Y&&(d=Math.round(d/(Y/100))*(Y/100),d=a?Math.ceil(d/Y)*Y:Math.floor(d/Y)*Y),Math.max(p,Math.min(C,d))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new B(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(r,a){var c=this._getTopLeftPoint(r,a);return new te(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(r){return this.options.crs.getProjectedBounds(r===void 0?this.getZoom():r)},getPane:function(r){return typeof r=="string"?this._panes[r]:r},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(r,a){var c=this.options.crs;return a=a===void 0?this._zoom:a,c.scale(r)/c.scale(a)},getScaleZoom:function(r,a){var c=this.options.crs;a=a===void 0?this._zoom:a;var d=c.zoom(r*c.scale(a));return isNaN(d)?1/0:d},project:function(r,a){return a=a===void 0?this._zoom:a,this.options.crs.latLngToPoint(le(r),a)},unproject:function(r,a){return a=a===void 0?this._zoom:a,this.options.crs.pointToLatLng(V(r),a)},layerPointToLatLng:function(r){var a=V(r).add(this.getPixelOrigin());return this.unproject(a)},latLngToLayerPoint:function(r){var a=this.project(le(r))._round();return a._subtract(this.getPixelOrigin())},wrapLatLng:function(r){return this.options.crs.wrapLatLng(le(r))},wrapLatLngBounds:function(r){return this.options.crs.wrapLatLngBounds(we(r))},distance:function(r,a){return this.options.crs.distance(le(r),le(a))},containerPointToLayerPoint:function(r){return V(r).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(r){return V(r).add(this._getMapPanePos())},containerPointToLatLng:function(r){var a=this.containerPointToLayerPoint(V(r));return this.layerPointToLatLng(a)},latLngToContainerPoint:function(r){return this.layerPointToContainerPoint(this.latLngToLayerPoint(le(r)))},mouseEventToContainerPoint:function(r){return ig(r,this._container)},mouseEventToLayerPoint:function(r){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(r))},mouseEventToLatLng:function(r){return this.layerPointToLatLng(this.mouseEventToLayerPoint(r))},_initContainer:function(r){var a=this._container=eg(r);if(a){if(a._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");he(a,"scroll",this._onScroll,this),this._containerId=f(a)},_initLayout:function(){var r=this._container;this._fadeAnimated=this.options.fadeAnimation&&ie.any3d,ge(r,"leaflet-container"+(ie.touch?" leaflet-touch":"")+(ie.retina?" leaflet-retina":"")+(ie.ielt9?" leaflet-oldie":"")+(ie.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var a=As(r,"position");a!=="absolute"&&a!=="relative"&&a!=="fixed"&&a!=="sticky"&&(r.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var r=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Ye(this._mapPane,new B(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(ge(r.markerPane,"leaflet-zoom-hide"),ge(r.shadowPane,"leaflet-zoom-hide"))},_resetView:function(r,a,c){Ye(this._mapPane,new B(0,0));var d=!this._loaded;this._loaded=!0,a=this._limitZoom(a),this.fire("viewprereset");var p=this._zoom!==a;this._moveStart(p,c)._move(r,a)._moveEnd(p),this.fire("viewreset"),d&&this.fire("load")},_moveStart:function(r,a){return r&&this.fire("zoomstart"),a||this.fire("movestart"),this},_move:function(r,a,c,d){a===void 0&&(a=this._zoom);var p=this._zoom!==a;return this._zoom=a,this._lastCenter=r,this._pixelOrigin=this._getNewPixelOrigin(r),d?c&&c.pinch&&this.fire("zoom",c):((p||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(r){return r&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return J(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(r){Ye(this._mapPane,this._getMapPanePos().subtract(r))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(r){this._targets={},this._targets[f(this._container)]=this;var a=r?ze:he;a(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&a(window,"resize",this._onResize,this),ie.any3d&&this.options.transform3DLimit&&(r?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){J(this._resizeRequest),this._resizeRequest=Z(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var r=this._getMapPanePos();Math.max(Math.abs(r.x),Math.abs(r.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(r,a){for(var c=[],d,p=a==="mouseout"||a==="mouseover",C=r.target||r.srcElement,E=!1;C;){if(d=this._targets[f(C)],d&&(a==="click"||a==="preclick")&&this._draggableMoved(d)){E=!0;break}if(d&&d.listens(a,!0)&&(p&&!ad(C,r)||(c.push(d),p))||C===this._container)break;C=C.parentNode}return!c.length&&!E&&!p&&this.listens(a,!0)&&(c=[this]),c},_isClickDisabled:function(r){for(;r&&r!==this._container;){if(r._leaflet_disable_click)return!0;r=r.parentNode}},_handleDOMEvent:function(r){var a=r.target||r.srcElement;if(!(!this._loaded||a._leaflet_disable_events||r.type==="click"&&this._isClickDisabled(a))){var c=r.type;c==="mousedown"&&td(a),this._fireDOMEvent(r,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(r,a,c){if(r.type==="click"){var d=o({},r);d.type="preclick",this._fireDOMEvent(d,d.type,c)}var p=this._findEventTargets(r,a);if(c){for(var C=[],E=0;E<c.length;E++)c[E].listens(a,!0)&&C.push(c[E]);p=C.concat(p)}if(p.length){a==="contextmenu"&&mt(r);var I=p[0],D={originalEvent:r};if(r.type!=="keypress"&&r.type!=="keydown"&&r.type!=="keyup"){var H=I.getLatLng&&(!I._radius||I._radius<=10);D.containerPoint=H?this.latLngToContainerPoint(I.getLatLng()):this.mouseEventToContainerPoint(r),D.layerPoint=this.containerPointToLayerPoint(D.containerPoint),D.latlng=H?I.getLatLng():this.layerPointToLatLng(D.layerPoint)}for(E=0;E<p.length;E++)if(p[E].fire(a,D,!0),D.originalEvent._stopped||p[E].options.bubblingMouseEvents===!1&&k(this._mouseEvents,a)!==-1)return}},_draggableMoved:function(r){return r=r.dragging&&r.dragging.enabled()?r:this,r.dragging&&r.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var r=0,a=this._handlers.length;r<a;r++)this._handlers[r].disable()},whenReady:function(r,a){return this._loaded?r.call(a||this,{target:this}):this.on("load",r,a),this},_getMapPanePos:function(){return wi(this._mapPane)||new B(0,0)},_moved:function(){var r=this._getMapPanePos();return r&&!r.equals([0,0])},_getTopLeftPoint:function(r,a){var c=r&&a!==void 0?this._getNewPixelOrigin(r,a):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(r,a){var c=this.getSize()._divideBy(2);return this.project(r,a)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(r,a,c){var d=this._getNewPixelOrigin(c,a);return this.project(r,a)._subtract(d)},_latLngBoundsToNewLayerBounds:function(r,a,c){var d=this._getNewPixelOrigin(c,a);return se([this.project(r.getSouthWest(),a)._subtract(d),this.project(r.getNorthWest(),a)._subtract(d),this.project(r.getSouthEast(),a)._subtract(d),this.project(r.getNorthEast(),a)._subtract(d)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(r){return this.latLngToLayerPoint(r).subtract(this._getCenterLayerPoint())},_limitCenter:function(r,a,c){if(!c)return r;var d=this.project(r,a),p=this.getSize().divideBy(2),C=new te(d.subtract(p),d.add(p)),E=this._getBoundsOffset(C,c,a);return Math.abs(E.x)<=1&&Math.abs(E.y)<=1?r:this.unproject(d.add(E),a)},_limitOffset:function(r,a){if(!a)return r;var c=this.getPixelBounds(),d=new te(c.min.add(r),c.max.add(r));return r.add(this._getBoundsOffset(d,a))},_getBoundsOffset:function(r,a,c){var d=se(this.project(a.getNorthEast(),c),this.project(a.getSouthWest(),c)),p=d.min.subtract(r.min),C=d.max.subtract(r.max),E=this._rebound(p.x,-C.x),I=this._rebound(p.y,-C.y);return new B(E,I)},_rebound:function(r,a){return r+a>0?Math.round(r-a)/2:Math.max(0,Math.ceil(r))-Math.max(0,Math.floor(a))},_limitZoom:function(r){var a=this.getMinZoom(),c=this.getMaxZoom(),d=ie.any3d?this.options.zoomSnap:1;return d&&(r=Math.round(r/d)*d),Math.max(a,Math.min(c,r))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){qe(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(r,a){var c=this._getCenterOffset(r)._trunc();return(a&&a.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,a),!0)},_createAnimProxy:function(){var r=this._proxy=Te("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(r),this.on("zoomanim",function(a){var c=Gu,d=this._proxy.style[c];_i(this._proxy,this.project(a.center,a.zoom),this.getZoomScale(a.zoom,1)),d===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Oe(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var r=this.getCenter(),a=this.getZoom();_i(this._proxy,this.project(r,a),this.getZoomScale(a,1))},_catchTransitionEnd:function(r){this._animatingZoom&&r.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(r,a,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(a-this._zoom)>this.options.zoomAnimationThreshold)return!1;var d=this.getZoomScale(a),p=this._getCenterOffset(r)._divideBy(1-1/d);return c.animate!==!0&&!this.getSize().contains(p)?!1:(Z(function(){this._moveStart(!0,c.noMoveStart||!1)._animateZoom(r,a,!0)},this),!0)},_animateZoom:function(r,a,c,d){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=r,this._animateToZoom=a,ge(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:r,zoom:a,noUpdate:d}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(u(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&qe(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function kS(r,a){return new Ce(r,a)}var mn=_e.extend({options:{position:"topright"},initialize:function(r){j(this,r)},getPosition:function(){return this.options.position},setPosition:function(r){var a=this._map;return a&&a.removeControl(this),this.options.position=r,a&&a.addControl(this),this},getContainer:function(){return this._container},addTo:function(r){this.remove(),this._map=r;var a=this._container=this.onAdd(r),c=this.getPosition(),d=r._controlCorners[c];return ge(a,"leaflet-control"),c.indexOf("bottom")!==-1?d.insertBefore(a,d.firstChild):d.appendChild(a),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Oe(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(r){this._map&&r&&r.screenX>0&&r.screenY>0&&this._map.getContainer().focus()}}),Ns=function(r){return new mn(r)};Ce.include({addControl:function(r){return r.addTo(this),this},removeControl:function(r){return r.remove(),this},_initControlPos:function(){var r=this._controlCorners={},a="leaflet-",c=this._controlContainer=Te("div",a+"control-container",this._container);function d(p,C){var E=a+p+" "+a+C;r[p+C]=Te("div",E,c)}d("top","left"),d("top","right"),d("bottom","left"),d("bottom","right")},_clearControlPos:function(){for(var r in this._controlCorners)Oe(this._controlCorners[r]);Oe(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var ag=mn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(r,a,c,d){return c<d?-1:d<c?1:0}},initialize:function(r,a,c){j(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var d in r)this._addLayer(r[d],d);for(d in a)this._addLayer(a[d],d,!0)},onAdd:function(r){this._initLayout(),this._update(),this._map=r,r.on("zoomend",this._checkDisabledLayers,this);for(var a=0;a<this._layers.length;a++)this._layers[a].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(r){return mn.prototype.addTo.call(this,r),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var r=0;r<this._layers.length;r++)this._layers[r].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(r,a){return this._addLayer(r,a),this._map?this._update():this},addOverlay:function(r,a){return this._addLayer(r,a,!0),this._map?this._update():this},removeLayer:function(r){r.off("add remove",this._onLayerChange,this);var a=this._getLayer(f(r));return a&&this._layers.splice(this._layers.indexOf(a),1),this._map?this._update():this},expand:function(){ge(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var r=this._map.getSize().y-(this._container.offsetTop+50);return r<this._section.clientHeight?(ge(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=r+"px"):qe(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return qe(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var r="leaflet-control-layers",a=this._container=Te("div",r),c=this.options.collapsed;a.setAttribute("aria-haspopup",!0),Is(a),sd(a);var d=this._section=Te("section",r+"-list");c&&(this._map.on("click",this.collapse,this),he(a,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var p=this._layersLink=Te("a",r+"-toggle",a);p.href="#",p.title="Layers",p.setAttribute("role","button"),he(p,{keydown:function(C){C.keyCode===13&&this._expandSafely()},click:function(C){mt(C),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=Te("div",r+"-base",d),this._separator=Te("div",r+"-separator",d),this._overlaysList=Te("div",r+"-overlays",d),a.appendChild(d)},_getLayer:function(r){for(var a=0;a<this._layers.length;a++)if(this._layers[a]&&f(this._layers[a].layer)===r)return this._layers[a]},_addLayer:function(r,a,c){this._map&&r.on("add remove",this._onLayerChange,this),this._layers.push({layer:r,name:a,overlay:c}),this.options.sortLayers&&this._layers.sort(u(function(d,p){return this.options.sortFunction(d.layer,p.layer,d.name,p.name)},this)),this.options.autoZIndex&&r.setZIndex&&(this._lastZIndex++,r.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ol(this._baseLayersList),ol(this._overlaysList),this._layerControlInputs=[];var r,a,c,d,p=0;for(c=0;c<this._layers.length;c++)d=this._layers[c],this._addItem(d),a=a||d.overlay,r=r||!d.overlay,p+=d.overlay?0:1;return this.options.hideSingleBase&&(r=r&&p>1,this._baseLayersList.style.display=r?"":"none"),this._separator.style.display=a&&r?"":"none",this},_onLayerChange:function(r){this._handlingClick||this._update();var a=this._getLayer(f(r.target)),c=a.overlay?r.type==="add"?"overlayadd":"overlayremove":r.type==="add"?"baselayerchange":null;c&&this._map.fire(c,a)},_createRadioElement:function(r,a){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+r+'"'+(a?' checked="checked"':"")+"/>",d=document.createElement("div");return d.innerHTML=c,d.firstChild},_addItem:function(r){var a=document.createElement("label"),c=this._map.hasLayer(r.layer),d;r.overlay?(d=document.createElement("input"),d.type="checkbox",d.className="leaflet-control-layers-selector",d.defaultChecked=c):d=this._createRadioElement("leaflet-base-layers_"+f(this),c),this._layerControlInputs.push(d),d.layerId=f(r.layer),he(d,"click",this._onInputClick,this);var p=document.createElement("span");p.innerHTML=" "+r.name;var C=document.createElement("span");a.appendChild(C),C.appendChild(d),C.appendChild(p);var E=r.overlay?this._overlaysList:this._baseLayersList;return E.appendChild(a),this._checkDisabledLayers(),a},_onInputClick:function(){if(!this._preventClick){var r=this._layerControlInputs,a,c,d=[],p=[];this._handlingClick=!0;for(var C=r.length-1;C>=0;C--)a=r[C],c=this._getLayer(a.layerId).layer,a.checked?d.push(c):a.checked||p.push(c);for(C=0;C<p.length;C++)this._map.hasLayer(p[C])&&this._map.removeLayer(p[C]);for(C=0;C<d.length;C++)this._map.hasLayer(d[C])||this._map.addLayer(d[C]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var r=this._layerControlInputs,a,c,d=this._map.getZoom(),p=r.length-1;p>=0;p--)a=r[p],c=this._getLayer(a.layerId).layer,a.disabled=c.options.minZoom!==void 0&&d<c.options.minZoom||c.options.maxZoom!==void 0&&d>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var r=this._section;this._preventClick=!0,he(r,"click",mt),this.expand();var a=this;setTimeout(function(){ze(r,"click",mt),a._preventClick=!1})}}),TS=function(r,a,c){return new ag(r,a,c)},ld=mn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(r){var a="leaflet-control-zoom",c=Te("div",a+" leaflet-bar"),d=this.options;return this._zoomInButton=this._createButton(d.zoomInText,d.zoomInTitle,a+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(d.zoomOutText,d.zoomOutTitle,a+"-out",c,this._zoomOut),this._updateDisabled(),r.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(r){r.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(r){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(r.shiftKey?3:1))},_zoomOut:function(r){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(r.shiftKey?3:1))},_createButton:function(r,a,c,d,p){var C=Te("a",c,d);return C.innerHTML=r,C.href="#",C.title=a,C.setAttribute("role","button"),C.setAttribute("aria-label",a),Is(C),he(C,"click",Si),he(C,"click",p,this),he(C,"click",this._refocusOnMap,this),C},_updateDisabled:function(){var r=this._map,a="leaflet-disabled";qe(this._zoomInButton,a),qe(this._zoomOutButton,a),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||r._zoom===r.getMinZoom())&&(ge(this._zoomOutButton,a),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||r._zoom===r.getMaxZoom())&&(ge(this._zoomInButton,a),this._zoomInButton.setAttribute("aria-disabled","true"))}});Ce.mergeOptions({zoomControl:!0}),Ce.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new ld,this.addControl(this.zoomControl))});var LS=function(r){return new ld(r)},lg=mn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(r){var a="leaflet-control-scale",c=Te("div",a),d=this.options;return this._addScales(d,a+"-line",c),r.on(d.updateWhenIdle?"moveend":"move",this._update,this),r.whenReady(this._update,this),c},onRemove:function(r){r.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(r,a,c){r.metric&&(this._mScale=Te("div",a,c)),r.imperial&&(this._iScale=Te("div",a,c))},_update:function(){var r=this._map,a=r.getSize().y/2,c=r.distance(r.containerPointToLatLng([0,a]),r.containerPointToLatLng([this.options.maxWidth,a]));this._updateScales(c)},_updateScales:function(r){this.options.metric&&r&&this._updateMetric(r),this.options.imperial&&r&&this._updateImperial(r)},_updateMetric:function(r){var a=this._getRoundNum(r),c=a<1e3?a+" m":a/1e3+" km";this._updateScale(this._mScale,c,a/r)},_updateImperial:function(r){var a=r*3.2808399,c,d,p;a>5280?(c=a/5280,d=this._getRoundNum(c),this._updateScale(this._iScale,d+" mi",d/c)):(p=this._getRoundNum(a),this._updateScale(this._iScale,p+" ft",p/a))},_updateScale:function(r,a,c){r.style.width=Math.round(this.options.maxWidth*c)+"px",r.innerHTML=a},_getRoundNum:function(r){var a=Math.pow(10,(Math.floor(r)+"").length-1),c=r/a;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,a*c}}),ES=function(r){return new lg(r)},PS='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',cd=mn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(ie.inlineSvg?PS+" ":"")+"Leaflet</a>"},initialize:function(r){j(this,r),this._attributions={}},onAdd:function(r){r.attributionControl=this,this._container=Te("div","leaflet-control-attribution"),Is(this._container);for(var a in r._layers)r._layers[a].getAttribution&&this.addAttribution(r._layers[a].getAttribution());return this._update(),r.on("layeradd",this._addAttribution,this),this._container},onRemove:function(r){r.off("layeradd",this._addAttribution,this)},_addAttribution:function(r){r.layer.getAttribution&&(this.addAttribution(r.layer.getAttribution()),r.layer.once("remove",function(){this.removeAttribution(r.layer.getAttribution())},this))},setPrefix:function(r){return this.options.prefix=r,this._update(),this},addAttribution:function(r){return r?(this._attributions[r]||(this._attributions[r]=0),this._attributions[r]++,this._update(),this):this},removeAttribution:function(r){return r?(this._attributions[r]&&(this._attributions[r]--,this._update()),this):this},_update:function(){if(this._map){var r=[];for(var a in this._attributions)this._attributions[a]&&r.push(a);var c=[];this.options.prefix&&c.push(this.options.prefix),r.length&&c.push(r.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});Ce.mergeOptions({attributionControl:!0}),Ce.addInitHook(function(){this.options.attributionControl&&new cd().addTo(this)});var AS=function(r){return new cd(r)};mn.Layers=ag,mn.Zoom=ld,mn.Scale=lg,mn.Attribution=cd,Ns.layers=TS,Ns.zoom=LS,Ns.scale=ES,Ns.attribution=AS;var Rn=_e.extend({initialize:function(r){this._map=r},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Rn.addTo=function(r,a){return r.addHandler(a,this),this};var zS={Events:ue},cg=ie.touch?"touchstart mousedown":"mousedown",kr=Qe.extend({options:{clickTolerance:3},initialize:function(r,a,c,d){j(this,d),this._element=r,this._dragStartTarget=a||r,this._preventOutline=c},enable:function(){this._enabled||(he(this._dragStartTarget,cg,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(kr._dragging===this&&this.finishDrag(!0),ze(this._dragStartTarget,cg,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(r){if(this._enabled&&(this._moved=!1,!Ku(this._element,"leaflet-zoom-anim"))){if(r.touches&&r.touches.length!==1){kr._dragging===this&&this.finishDrag();return}if(!(kr._dragging||r.shiftKey||r.which!==1&&r.button!==1&&!r.touches)&&(kr._dragging=this,this._preventOutline&&td(this._element),Ju(),zs(),!this._moving)){this.fire("down");var a=r.touches?r.touches[0]:r,c=tg(this._element);this._startPoint=new B(a.clientX,a.clientY),this._startPos=wi(this._element),this._parentScale=nd(c);var d=r.type==="mousedown";he(document,d?"mousemove":"touchmove",this._onMove,this),he(document,d?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(r){if(this._enabled){if(r.touches&&r.touches.length>1){this._moved=!0;return}var a=r.touches&&r.touches.length===1?r.touches[0]:r,c=new B(a.clientX,a.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,mt(r),this._moved||(this.fire("dragstart"),this._moved=!0,ge(document.body,"leaflet-dragging"),this._lastTarget=r.target||r.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),ge(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=r,this._updatePosition())}},_updatePosition:function(){var r={originalEvent:this._lastEvent};this.fire("predrag",r),Ye(this._element,this._newPos),this.fire("drag",r)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(r){qe(document.body,"leaflet-dragging"),this._lastTarget&&(qe(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),ze(document,"mousemove touchmove",this._onMove,this),ze(document,"mouseup touchend touchcancel",this._onUp,this),Xu(),Ms();var a=this._moved&&this._moving;this._moving=!1,kr._dragging=!1,a&&this.fire("dragend",{noInertia:r,distance:this._newPos.distanceTo(this._startPos)})}});function ug(r,a,c){var d,p=[1,4,2,8],C,E,I,D,H,Y,ae,xe;for(C=0,Y=r.length;C<Y;C++)r[C]._code=ji(r[C],a);for(I=0;I<4;I++){for(ae=p[I],d=[],C=0,Y=r.length,E=Y-1;C<Y;E=C++)D=r[C],H=r[E],D._code&ae?H._code&ae||(xe=ul(H,D,ae,a,c),xe._code=ji(xe,a),d.push(xe)):(H._code&ae&&(xe=ul(H,D,ae,a,c),xe._code=ji(xe,a),d.push(xe)),d.push(D));r=d}return r}function dg(r,a){var c,d,p,C,E,I,D,H,Y;if(!r||r.length===0)throw new Error("latlngs not passed");tn(r)||(console.warn("latlngs are not flat! Only the first ring will be used"),r=r[0]);var ae=le([0,0]),xe=we(r),Ct=xe.getNorthWest().distanceTo(xe.getSouthWest())*xe.getNorthEast().distanceTo(xe.getNorthWest());Ct<1700&&(ae=ud(r));var ct=r.length,nn=[];for(c=0;c<ct;c++){var It=le(r[c]);nn.push(a.project(le([It.lat-ae.lat,It.lng-ae.lng])))}for(I=D=H=0,c=0,d=ct-1;c<ct;d=c++)p=nn[c],C=nn[d],E=p.y*C.x-C.y*p.x,D+=(p.x+C.x)*E,H+=(p.y+C.y)*E,I+=E*3;I===0?Y=nn[0]:Y=[D/I,H/I];var _o=a.unproject(V(Y));return le([_o.lat+ae.lat,_o.lng+ae.lng])}function ud(r){for(var a=0,c=0,d=0,p=0;p<r.length;p++){var C=le(r[p]);a+=C.lat,c+=C.lng,d++}return le([a/d,c/d])}var MS={__proto__:null,clipPolygon:ug,polygonCenter:dg,centroid:ud};function hg(r,a){if(!a||!r.length)return r.slice();var c=a*a;return r=NS(r,c),r=IS(r,c),r}function fg(r,a,c){return Math.sqrt(Ds(r,a,c,!0))}function RS(r,a,c){return Ds(r,a,c)}function IS(r,a){var c=r.length,d=typeof Uint8Array<"u"?Uint8Array:Array,p=new d(c);p[0]=p[c-1]=1,dd(r,p,a,0,c-1);var C,E=[];for(C=0;C<c;C++)p[C]&&E.push(r[C]);return E}function dd(r,a,c,d,p){var C=0,E,I,D;for(I=d+1;I<=p-1;I++)D=Ds(r[I],r[d],r[p],!0),D>C&&(E=I,C=D);C>c&&(a[E]=1,dd(r,a,c,d,E),dd(r,a,c,E,p))}function NS(r,a){for(var c=[r[0]],d=1,p=0,C=r.length;d<C;d++)DS(r[d],r[p])>a&&(c.push(r[d]),p=d);return p<C-1&&c.push(r[C-1]),c}var pg;function mg(r,a,c,d,p){var C=d?pg:ji(r,c),E=ji(a,c),I,D,H;for(pg=E;;){if(!(C|E))return[r,a];if(C&E)return!1;I=C||E,D=ul(r,a,I,c,p),H=ji(D,c),I===C?(r=D,C=H):(a=D,E=H)}}function ul(r,a,c,d,p){var C=a.x-r.x,E=a.y-r.y,I=d.min,D=d.max,H,Y;return c&8?(H=r.x+C*(D.y-r.y)/E,Y=D.y):c&4?(H=r.x+C*(I.y-r.y)/E,Y=I.y):c&2?(H=D.x,Y=r.y+E*(D.x-r.x)/C):c&1&&(H=I.x,Y=r.y+E*(I.x-r.x)/C),new B(H,Y,p)}function ji(r,a){var c=0;return r.x<a.min.x?c|=1:r.x>a.max.x&&(c|=2),r.y<a.min.y?c|=4:r.y>a.max.y&&(c|=8),c}function DS(r,a){var c=a.x-r.x,d=a.y-r.y;return c*c+d*d}function Ds(r,a,c,d){var p=a.x,C=a.y,E=c.x-p,I=c.y-C,D=E*E+I*I,H;return D>0&&(H=((r.x-p)*E+(r.y-C)*I)/D,H>1?(p=c.x,C=c.y):H>0&&(p+=E*H,C+=I*H)),E=r.x-p,I=r.y-C,d?E*E+I*I:new B(p,C)}function tn(r){return!_(r[0])||typeof r[0][0]!="object"&&typeof r[0][0]<"u"}function gg(r){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),tn(r)}function yg(r,a){var c,d,p,C,E,I,D,H;if(!r||r.length===0)throw new Error("latlngs not passed");tn(r)||(console.warn("latlngs are not flat! Only the first ring will be used"),r=r[0]);var Y=le([0,0]),ae=we(r),xe=ae.getNorthWest().distanceTo(ae.getSouthWest())*ae.getNorthEast().distanceTo(ae.getNorthWest());xe<1700&&(Y=ud(r));var Ct=r.length,ct=[];for(c=0;c<Ct;c++){var nn=le(r[c]);ct.push(a.project(le([nn.lat-Y.lat,nn.lng-Y.lng])))}for(c=0,d=0;c<Ct-1;c++)d+=ct[c].distanceTo(ct[c+1])/2;if(d===0)H=ct[0];else for(c=0,C=0;c<Ct-1;c++)if(E=ct[c],I=ct[c+1],p=E.distanceTo(I),C+=p,C>d){D=(C-d)/p,H=[I.x-D*(I.x-E.x),I.y-D*(I.y-E.y)];break}var It=a.unproject(V(H));return le([It.lat+Y.lat,It.lng+Y.lng])}var OS={__proto__:null,simplify:hg,pointToSegmentDistance:fg,closestPointOnSegment:RS,clipSegment:mg,_getEdgeIntersection:ul,_getBitCode:ji,_sqClosestPointOnSegment:Ds,isFlat:tn,_flat:gg,polylineCenter:yg},hd={project:function(r){return new B(r.lng,r.lat)},unproject:function(r){return new me(r.y,r.x)},bounds:new te([-180,-90],[180,90])},fd={R:6378137,R_MINOR:6356752314245179e-9,bounds:new te([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(r){var a=Math.PI/180,c=this.R,d=r.lat*a,p=this.R_MINOR/c,C=Math.sqrt(1-p*p),E=C*Math.sin(d),I=Math.tan(Math.PI/4-d/2)/Math.pow((1-E)/(1+E),C/2);return d=-c*Math.log(Math.max(I,1e-10)),new B(r.lng*a*c,d)},unproject:function(r){for(var a=180/Math.PI,c=this.R,d=this.R_MINOR/c,p=Math.sqrt(1-d*d),C=Math.exp(-r.y/c),E=Math.PI/2-2*Math.atan(C),I=0,D=.1,H;I<15&&Math.abs(D)>1e-7;I++)H=p*Math.sin(E),H=Math.pow((1-H)/(1+H),p/2),D=Math.PI/2-2*Math.atan(C*H)-E,E+=D;return new me(E*a,r.x*a/c)}},FS={__proto__:null,LonLat:hd,Mercator:fd,SphericalMercator:xi},BS=o({},Mt,{code:"EPSG:3395",projection:fd,transformation:function(){var r=.5/(Math.PI*fd.R);return Rt(r,.5,-r,.5)}()}),vg=o({},Mt,{code:"EPSG:4326",projection:hd,transformation:Rt(1/180,1,-1/180,.5)}),US=o({},rt,{projection:hd,transformation:Rt(1,0,-1,0),scale:function(r){return Math.pow(2,r)},zoom:function(r){return Math.log(r)/Math.LN2},distance:function(r,a){var c=a.lng-r.lng,d=a.lat-r.lat;return Math.sqrt(c*c+d*d)},infinite:!0});rt.Earth=Mt,rt.EPSG3395=BS,rt.EPSG3857=Bu,rt.EPSG900913=Gb,rt.EPSG4326=vg,rt.Simple=US;var gn=Qe.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(r){return r.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(r){return r&&r.removeLayer(this),this},getPane:function(r){return this._map.getPane(r?this.options[r]||r:this.options.pane)},addInteractiveTarget:function(r){return this._map._targets[f(r)]=this,this},removeInteractiveTarget:function(r){return delete this._map._targets[f(r)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(r){var a=r.target;if(a.hasLayer(this)){if(this._map=a,this._zoomAnimated=a._zoomAnimated,this.getEvents){var c=this.getEvents();a.on(c,this),this.once("remove",function(){a.off(c,this)},this)}this.onAdd(a),this.fire("add"),a.fire("layeradd",{layer:this})}}});Ce.include({addLayer:function(r){if(!r._layerAdd)throw new Error("The provided object is not a Layer.");var a=f(r);return this._layers[a]?this:(this._layers[a]=r,r._mapToAdd=this,r.beforeAdd&&r.beforeAdd(this),this.whenReady(r._layerAdd,r),this)},removeLayer:function(r){var a=f(r);return this._layers[a]?(this._loaded&&r.onRemove(this),delete this._layers[a],this._loaded&&(this.fire("layerremove",{layer:r}),r.fire("remove")),r._map=r._mapToAdd=null,this):this},hasLayer:function(r){return f(r)in this._layers},eachLayer:function(r,a){for(var c in this._layers)r.call(a,this._layers[c]);return this},_addLayers:function(r){r=r?_(r)?r:[r]:[];for(var a=0,c=r.length;a<c;a++)this.addLayer(r[a])},_addZoomLimit:function(r){(!isNaN(r.options.maxZoom)||!isNaN(r.options.minZoom))&&(this._zoomBoundLayers[f(r)]=r,this._updateZoomLevels())},_removeZoomLimit:function(r){var a=f(r);this._zoomBoundLayers[a]&&(delete this._zoomBoundLayers[a],this._updateZoomLevels())},_updateZoomLevels:function(){var r=1/0,a=-1/0,c=this._getZoomSpan();for(var d in this._zoomBoundLayers){var p=this._zoomBoundLayers[d].options;r=p.minZoom===void 0?r:Math.min(r,p.minZoom),a=p.maxZoom===void 0?a:Math.max(a,p.maxZoom)}this._layersMaxZoom=a===-1/0?void 0:a,this._layersMinZoom=r===1/0?void 0:r,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var mo=gn.extend({initialize:function(r,a){j(this,a),this._layers={};var c,d;if(r)for(c=0,d=r.length;c<d;c++)this.addLayer(r[c])},addLayer:function(r){var a=this.getLayerId(r);return this._layers[a]=r,this._map&&this._map.addLayer(r),this},removeLayer:function(r){var a=r in this._layers?r:this.getLayerId(r);return this._map&&this._layers[a]&&this._map.removeLayer(this._layers[a]),delete this._layers[a],this},hasLayer:function(r){var a=typeof r=="number"?r:this.getLayerId(r);return a in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(r){var a=Array.prototype.slice.call(arguments,1),c,d;for(c in this._layers)d=this._layers[c],d[r]&&d[r].apply(d,a);return this},onAdd:function(r){this.eachLayer(r.addLayer,r)},onRemove:function(r){this.eachLayer(r.removeLayer,r)},eachLayer:function(r,a){for(var c in this._layers)r.call(a,this._layers[c]);return this},getLayer:function(r){return this._layers[r]},getLayers:function(){var r=[];return this.eachLayer(r.push,r),r},setZIndex:function(r){return this.invoke("setZIndex",r)},getLayerId:function(r){return f(r)}}),HS=function(r,a){return new mo(r,a)},Jn=mo.extend({addLayer:function(r){return this.hasLayer(r)?this:(r.addEventParent(this),mo.prototype.addLayer.call(this,r),this.fire("layeradd",{layer:r}))},removeLayer:function(r){return this.hasLayer(r)?(r in this._layers&&(r=this._layers[r]),r.removeEventParent(this),mo.prototype.removeLayer.call(this,r),this.fire("layerremove",{layer:r})):this},setStyle:function(r){return this.invoke("setStyle",r)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var r=new Ae;for(var a in this._layers){var c=this._layers[a];r.extend(c.getBounds?c.getBounds():c.getLatLng())}return r}}),ZS=function(r,a){return new Jn(r,a)},go=_e.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(r){j(this,r)},createIcon:function(r){return this._createIcon("icon",r)},createShadow:function(r){return this._createIcon("shadow",r)},_createIcon:function(r,a){var c=this._getIconUrl(r);if(!c){if(r==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var d=this._createImg(c,a&&a.tagName==="IMG"?a:null);return this._setIconStyles(d,r),(this.options.crossOrigin||this.options.crossOrigin==="")&&(d.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),d},_setIconStyles:function(r,a){var c=this.options,d=c[a+"Size"];typeof d=="number"&&(d=[d,d]);var p=V(d),C=V(a==="shadow"&&c.shadowAnchor||c.iconAnchor||p&&p.divideBy(2,!0));r.className="leaflet-marker-"+a+" "+(c.className||""),C&&(r.style.marginLeft=-C.x+"px",r.style.marginTop=-C.y+"px"),p&&(r.style.width=p.x+"px",r.style.height=p.y+"px")},_createImg:function(r,a){return a=a||document.createElement("img"),a.src=r,a},_getIconUrl:function(r){return ie.retina&&this.options[r+"RetinaUrl"]||this.options[r+"Url"]}});function WS(r){return new go(r)}var Os=go.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(r){return typeof Os.imagePath!="string"&&(Os.imagePath=this._detectIconPath()),(this.options.imagePath||Os.imagePath)+go.prototype._getIconUrl.call(this,r)},_stripUrl:function(r){var a=function(c,d,p){var C=d.exec(c);return C&&C[p]};return r=a(r,/^url\((['"])?(.+)\1\)$/,2),r&&a(r,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var r=Te("div","leaflet-default-icon-path",document.body),a=As(r,"background-image")||As(r,"backgroundImage");if(document.body.removeChild(r),a=this._stripUrl(a),a)return a;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),xg=Rn.extend({initialize:function(r){this._marker=r},addHooks:function(){var r=this._marker._icon;this._draggable||(this._draggable=new kr(r,r,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),ge(r,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&qe(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(r){var a=this._marker,c=a._map,d=this._marker.options.autoPanSpeed,p=this._marker.options.autoPanPadding,C=wi(a._icon),E=c.getPixelBounds(),I=c.getPixelOrigin(),D=se(E.min._subtract(I).add(p),E.max._subtract(I).subtract(p));if(!D.contains(C)){var H=V((Math.max(D.max.x,C.x)-D.max.x)/(E.max.x-D.max.x)-(Math.min(D.min.x,C.x)-D.min.x)/(E.min.x-D.min.x),(Math.max(D.max.y,C.y)-D.max.y)/(E.max.y-D.max.y)-(Math.min(D.min.y,C.y)-D.min.y)/(E.min.y-D.min.y)).multiplyBy(d);c.panBy(H,{animate:!1}),this._draggable._newPos._add(H),this._draggable._startPos._add(H),Ye(a._icon,this._draggable._newPos),this._onDrag(r),this._panRequest=Z(this._adjustPan.bind(this,r))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(r){this._marker.options.autoPan&&(J(this._panRequest),this._panRequest=Z(this._adjustPan.bind(this,r)))},_onDrag:function(r){var a=this._marker,c=a._shadow,d=wi(a._icon),p=a._map.layerPointToLatLng(d);c&&Ye(c,d),a._latlng=p,r.latlng=p,r.oldLatLng=this._oldLatLng,a.fire("move",r).fire("drag",r)},_onDragEnd:function(r){J(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",r)}}),dl=gn.extend({options:{icon:new Os,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(r,a){j(this,a),this._latlng=le(r)},onAdd:function(r){this._zoomAnimated=this._zoomAnimated&&r.options.markerZoomAnimation,this._zoomAnimated&&r.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(r){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&r.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(r){var a=this._latlng;return this._latlng=le(r),this.update(),this.fire("move",{oldLatLng:a,latlng:this._latlng})},setZIndexOffset:function(r){return this.options.zIndexOffset=r,this.update()},getIcon:function(){return this.options.icon},setIcon:function(r){return this.options.icon=r,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var r=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(r)}return this},_initIcon:function(){var r=this.options,a="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=r.icon.createIcon(this._icon),d=!1;c!==this._icon&&(this._icon&&this._removeIcon(),d=!0,r.title&&(c.title=r.title),c.tagName==="IMG"&&(c.alt=r.alt||"")),ge(c,a),r.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,r.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&he(c,"focus",this._panOnFocus,this);var p=r.icon.createShadow(this._shadow),C=!1;p!==this._shadow&&(this._removeShadow(),C=!0),p&&(ge(p,a),p.alt=""),this._shadow=p,r.opacity<1&&this._updateOpacity(),d&&this.getPane().appendChild(this._icon),this._initInteraction(),p&&C&&this.getPane(r.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ze(this._icon,"focus",this._panOnFocus,this),Oe(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Oe(this._shadow),this._shadow=null},_setPos:function(r){this._icon&&Ye(this._icon,r),this._shadow&&Ye(this._shadow,r),this._zIndex=r.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(r){this._icon&&(this._icon.style.zIndex=this._zIndex+r)},_animateZoom:function(r){var a=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center).round();this._setPos(a)},_initInteraction:function(){if(this.options.interactive&&(ge(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),xg)){var r=this.options.draggable;this.dragging&&(r=this.dragging.enabled(),this.dragging.disable()),this.dragging=new xg(this),r&&this.dragging.enable()}},setOpacity:function(r){return this.options.opacity=r,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var r=this.options.opacity;this._icon&&en(this._icon,r),this._shadow&&en(this._shadow,r)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var r=this._map;if(r){var a=this.options.icon.options,c=a.iconSize?V(a.iconSize):V(0,0),d=a.iconAnchor?V(a.iconAnchor):V(0,0);r.panInside(this._latlng,{paddingTopLeft:d,paddingBottomRight:c.subtract(d)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function VS(r,a){return new dl(r,a)}var Tr=gn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(r){this._renderer=r.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(r){return j(this,r),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&r&&Object.prototype.hasOwnProperty.call(r,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),hl=Tr.extend({options:{fill:!0,radius:10},initialize:function(r,a){j(this,a),this._latlng=le(r),this._radius=this.options.radius},setLatLng:function(r){var a=this._latlng;return this._latlng=le(r),this.redraw(),this.fire("move",{oldLatLng:a,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(r){return this.options.radius=this._radius=r,this.redraw()},getRadius:function(){return this._radius},setStyle:function(r){var a=r&&r.radius||this._radius;return Tr.prototype.setStyle.call(this,r),this.setRadius(a),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var r=this._radius,a=this._radiusY||r,c=this._clickTolerance(),d=[r+c,a+c];this._pxBounds=new te(this._point.subtract(d),this._point.add(d))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(r){return r.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function qS(r,a){return new hl(r,a)}var pd=hl.extend({initialize:function(r,a,c){if(typeof a=="number"&&(a=o({},c,{radius:a})),j(this,a),this._latlng=le(r),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(r){return this._mRadius=r,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var r=[this._radius,this._radiusY||this._radius];return new Ae(this._map.layerPointToLatLng(this._point.subtract(r)),this._map.layerPointToLatLng(this._point.add(r)))},setStyle:Tr.prototype.setStyle,_project:function(){var r=this._latlng.lng,a=this._latlng.lat,c=this._map,d=c.options.crs;if(d.distance===Mt.distance){var p=Math.PI/180,C=this._mRadius/Mt.R/p,E=c.project([a+C,r]),I=c.project([a-C,r]),D=E.add(I).divideBy(2),H=c.unproject(D).lat,Y=Math.acos((Math.cos(C*p)-Math.sin(a*p)*Math.sin(H*p))/(Math.cos(a*p)*Math.cos(H*p)))/p;(isNaN(Y)||Y===0)&&(Y=C/Math.cos(Math.PI/180*a)),this._point=D.subtract(c.getPixelOrigin()),this._radius=isNaN(Y)?0:D.x-c.project([H,r-Y]).x,this._radiusY=D.y-E.y}else{var ae=d.unproject(d.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(ae).x}this._updateBounds()}});function GS(r,a,c){return new pd(r,a,c)}var Xn=Tr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(r,a){j(this,a),this._setLatLngs(r)},getLatLngs:function(){return this._latlngs},setLatLngs:function(r){return this._setLatLngs(r),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(r){for(var a=1/0,c=null,d=Ds,p,C,E=0,I=this._parts.length;E<I;E++)for(var D=this._parts[E],H=1,Y=D.length;H<Y;H++){p=D[H-1],C=D[H];var ae=d(r,p,C,!0);ae<a&&(a=ae,c=d(r,p,C))}return c&&(c.distance=Math.sqrt(a)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return yg(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(r,a){return a=a||this._defaultShape(),r=le(r),a.push(r),this._bounds.extend(r),this.redraw()},_setLatLngs:function(r){this._bounds=new Ae,this._latlngs=this._convertLatLngs(r)},_defaultShape:function(){return tn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(r){for(var a=[],c=tn(r),d=0,p=r.length;d<p;d++)c?(a[d]=le(r[d]),this._bounds.extend(a[d])):a[d]=this._convertLatLngs(r[d]);return a},_project:function(){var r=new te;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,r),this._bounds.isValid()&&r.isValid()&&(this._rawPxBounds=r,this._updateBounds())},_updateBounds:function(){var r=this._clickTolerance(),a=new B(r,r);this._rawPxBounds&&(this._pxBounds=new te([this._rawPxBounds.min.subtract(a),this._rawPxBounds.max.add(a)]))},_projectLatlngs:function(r,a,c){var d=r[0]instanceof me,p=r.length,C,E;if(d){for(E=[],C=0;C<p;C++)E[C]=this._map.latLngToLayerPoint(r[C]),c.extend(E[C]);a.push(E)}else for(C=0;C<p;C++)this._projectLatlngs(r[C],a,c)},_clipPoints:function(){var r=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(r))){if(this.options.noClip){this._parts=this._rings;return}var a=this._parts,c,d,p,C,E,I,D;for(c=0,p=0,C=this._rings.length;c<C;c++)for(D=this._rings[c],d=0,E=D.length;d<E-1;d++)I=mg(D[d],D[d+1],r,d,!0),I&&(a[p]=a[p]||[],a[p].push(I[0]),(I[1]!==D[d+1]||d===E-2)&&(a[p].push(I[1]),p++))}},_simplifyPoints:function(){for(var r=this._parts,a=this.options.smoothFactor,c=0,d=r.length;c<d;c++)r[c]=hg(r[c],a)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(r,a){var c,d,p,C,E,I,D=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(r))return!1;for(c=0,C=this._parts.length;c<C;c++)for(I=this._parts[c],d=0,E=I.length,p=E-1;d<E;p=d++)if(!(!a&&d===0)&&fg(r,I[p],I[d])<=D)return!0;return!1}});function KS(r,a){return new Xn(r,a)}Xn._flat=gg;var yo=Xn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return dg(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(r){var a=Xn.prototype._convertLatLngs.call(this,r),c=a.length;return c>=2&&a[0]instanceof me&&a[0].equals(a[c-1])&&a.pop(),a},_setLatLngs:function(r){Xn.prototype._setLatLngs.call(this,r),tn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return tn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var r=this._renderer._bounds,a=this.options.weight,c=new B(a,a);if(r=new te(r.min.subtract(c),r.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(r))){if(this.options.noClip){this._parts=this._rings;return}for(var d=0,p=this._rings.length,C;d<p;d++)C=ug(this._rings[d],r,!0),C.length&&this._parts.push(C)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(r){var a=!1,c,d,p,C,E,I,D,H;if(!this._pxBounds||!this._pxBounds.contains(r))return!1;for(C=0,D=this._parts.length;C<D;C++)for(c=this._parts[C],E=0,H=c.length,I=H-1;E<H;I=E++)d=c[E],p=c[I],d.y>r.y!=p.y>r.y&&r.x<(p.x-d.x)*(r.y-d.y)/(p.y-d.y)+d.x&&(a=!a);return a||Xn.prototype._containsPoint.call(this,r,!0)}});function QS(r,a){return new yo(r,a)}var er=Jn.extend({initialize:function(r,a){j(this,a),this._layers={},r&&this.addData(r)},addData:function(r){var a=_(r)?r:r.features,c,d,p;if(a){for(c=0,d=a.length;c<d;c++)p=a[c],(p.geometries||p.geometry||p.features||p.coordinates)&&this.addData(p);return this}var C=this.options;if(C.filter&&!C.filter(r))return this;var E=fl(r,C);return E?(E.feature=gl(r),E.defaultOptions=E.options,this.resetStyle(E),C.onEachFeature&&C.onEachFeature(r,E),this.addLayer(E)):this},resetStyle:function(r){return r===void 0?this.eachLayer(this.resetStyle,this):(r.options=o({},r.defaultOptions),this._setLayerStyle(r,this.options.style),this)},setStyle:function(r){return this.eachLayer(function(a){this._setLayerStyle(a,r)},this)},_setLayerStyle:function(r,a){r.setStyle&&(typeof a=="function"&&(a=a(r.feature)),r.setStyle(a))}});function fl(r,a){var c=r.type==="Feature"?r.geometry:r,d=c?c.coordinates:null,p=[],C=a&&a.pointToLayer,E=a&&a.coordsToLatLng||md,I,D,H,Y;if(!d&&!c)return null;switch(c.type){case"Point":return I=E(d),_g(C,r,I,a);case"MultiPoint":for(H=0,Y=d.length;H<Y;H++)I=E(d[H]),p.push(_g(C,r,I,a));return new Jn(p);case"LineString":case"MultiLineString":return D=pl(d,c.type==="LineString"?0:1,E),new Xn(D,a);case"Polygon":case"MultiPolygon":return D=pl(d,c.type==="Polygon"?1:2,E),new yo(D,a);case"GeometryCollection":for(H=0,Y=c.geometries.length;H<Y;H++){var ae=fl({geometry:c.geometries[H],type:"Feature",properties:r.properties},a);ae&&p.push(ae)}return new Jn(p);case"FeatureCollection":for(H=0,Y=c.features.length;H<Y;H++){var xe=fl(c.features[H],a);xe&&p.push(xe)}return new Jn(p);default:throw new Error("Invalid GeoJSON object.")}}function _g(r,a,c,d){return r?r(a,c):new dl(c,d&&d.markersInheritOptions&&d)}function md(r){return new me(r[1],r[0],r[2])}function pl(r,a,c){for(var d=[],p=0,C=r.length,E;p<C;p++)E=a?pl(r[p],a-1,c):(c||md)(r[p]),d.push(E);return d}function gd(r,a){return r=le(r),r.alt!==void 0?[S(r.lng,a),S(r.lat,a),S(r.alt,a)]:[S(r.lng,a),S(r.lat,a)]}function ml(r,a,c,d){for(var p=[],C=0,E=r.length;C<E;C++)p.push(a?ml(r[C],tn(r[C])?0:a-1,c,d):gd(r[C],d));return!a&&c&&p.length>0&&p.push(p[0].slice()),p}function vo(r,a){return r.feature?o({},r.feature,{geometry:a}):gl(a)}function gl(r){return r.type==="Feature"||r.type==="FeatureCollection"?r:{type:"Feature",properties:{},geometry:r}}var yd={toGeoJSON:function(r){return vo(this,{type:"Point",coordinates:gd(this.getLatLng(),r)})}};dl.include(yd),pd.include(yd),hl.include(yd),Xn.include({toGeoJSON:function(r){var a=!tn(this._latlngs),c=ml(this._latlngs,a?1:0,!1,r);return vo(this,{type:(a?"Multi":"")+"LineString",coordinates:c})}}),yo.include({toGeoJSON:function(r){var a=!tn(this._latlngs),c=a&&!tn(this._latlngs[0]),d=ml(this._latlngs,c?2:a?1:0,!0,r);return a||(d=[d]),vo(this,{type:(c?"Multi":"")+"Polygon",coordinates:d})}}),mo.include({toMultiPoint:function(r){var a=[];return this.eachLayer(function(c){a.push(c.toGeoJSON(r).geometry.coordinates)}),vo(this,{type:"MultiPoint",coordinates:a})},toGeoJSON:function(r){var a=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(a==="MultiPoint")return this.toMultiPoint(r);var c=a==="GeometryCollection",d=[];return this.eachLayer(function(p){if(p.toGeoJSON){var C=p.toGeoJSON(r);if(c)d.push(C.geometry);else{var E=gl(C);E.type==="FeatureCollection"?d.push.apply(d,E.features):d.push(E)}}}),c?vo(this,{geometries:d,type:"GeometryCollection"}):{type:"FeatureCollection",features:d}}});function wg(r,a){return new er(r,a)}var YS=wg,yl=gn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(r,a,c){this._url=r,this._bounds=we(a),j(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(ge(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Oe(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(r){return this.options.opacity=r,this._image&&this._updateOpacity(),this},setStyle:function(r){return r.opacity&&this.setOpacity(r.opacity),this},bringToFront:function(){return this._map&&fo(this._image),this},bringToBack:function(){return this._map&&po(this._image),this},setUrl:function(r){return this._url=r,this._image&&(this._image.src=r),this},setBounds:function(r){return this._bounds=we(r),this._map&&this._reset(),this},getEvents:function(){var r={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},setZIndex:function(r){return this.options.zIndex=r,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var r=this._url.tagName==="IMG",a=this._image=r?this._url:Te("img");if(ge(a,"leaflet-image-layer"),this._zoomAnimated&&ge(a,"leaflet-zoom-animated"),this.options.className&&ge(a,this.options.className),a.onselectstart=y,a.onmousemove=y,a.onload=u(this.fire,this,"load"),a.onerror=u(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(a.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),r){this._url=a.src;return}a.src=this._url,a.alt=this.options.alt},_animateZoom:function(r){var a=this._map.getZoomScale(r.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,r.zoom,r.center).min;_i(this._image,c,a)},_reset:function(){var r=this._image,a=new te(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=a.getSize();Ye(r,a.min),r.style.width=c.x+"px",r.style.height=c.y+"px"},_updateOpacity:function(){en(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var r=this.options.errorOverlayUrl;r&&this._url!==r&&(this._url=r,this._image.src=r)},getCenter:function(){return this._bounds.getCenter()}}),JS=function(r,a,c){return new yl(r,a,c)},bg=yl.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var r=this._url.tagName==="VIDEO",a=this._image=r?this._url:Te("video");if(ge(a,"leaflet-image-layer"),this._zoomAnimated&&ge(a,"leaflet-zoom-animated"),this.options.className&&ge(a,this.options.className),a.onselectstart=y,a.onmousemove=y,a.onloadeddata=u(this.fire,this,"load"),r){for(var c=a.getElementsByTagName("source"),d=[],p=0;p<c.length;p++)d.push(c[p].src);this._url=c.length>0?d:[a.src];return}_(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(a.style,"objectFit")&&(a.style.objectFit="fill"),a.autoplay=!!this.options.autoplay,a.loop=!!this.options.loop,a.muted=!!this.options.muted,a.playsInline=!!this.options.playsInline;for(var C=0;C<this._url.length;C++){var E=Te("source");E.src=this._url[C],a.appendChild(E)}}});function XS(r,a,c){return new bg(r,a,c)}var Sg=yl.extend({_initImage:function(){var r=this._image=this._url;ge(r,"leaflet-image-layer"),this._zoomAnimated&&ge(r,"leaflet-zoom-animated"),this.options.className&&ge(r,this.options.className),r.onselectstart=y,r.onmousemove=y}});function e1(r,a,c){return new Sg(r,a,c)}var In=gn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(r,a){r&&(r instanceof me||_(r))?(this._latlng=le(r),j(this,a)):(j(this,r),this._source=a),this.options.content&&(this._content=this.options.content)},openOn:function(r){return r=arguments.length?r:this._source._map,r.hasLayer(this)||r.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(r){return this._map?this.close():(arguments.length?this._source=r:r=this._source,this._prepareOpen(),this.openOn(r._map)),this},onAdd:function(r){this._zoomAnimated=r._zoomAnimated,this._container||this._initLayout(),r._fadeAnimated&&en(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),r._fadeAnimated&&en(this._container,1),this.bringToFront(),this.options.interactive&&(ge(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(r){r._fadeAnimated?(en(this._container,0),this._removeTimeout=setTimeout(u(Oe,void 0,this._container),200)):Oe(this._container),this.options.interactive&&(qe(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(r){return this._latlng=le(r),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(r){return this._content=r,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var r={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&fo(this._container),this},bringToBack:function(){return this._map&&po(this._container),this},_prepareOpen:function(r){var a=this._source;if(!a._map)return!1;if(a instanceof Jn){a=null;var c=this._source._layers;for(var d in c)if(c[d]._map){a=c[d];break}if(!a)return!1;this._source=a}if(!r)if(a.getCenter)r=a.getCenter();else if(a.getLatLng)r=a.getLatLng();else if(a.getBounds)r=a.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(r),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var r=this._contentNode,a=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof a=="string")r.innerHTML=a;else{for(;r.hasChildNodes();)r.removeChild(r.firstChild);r.appendChild(a)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var r=this._map.latLngToLayerPoint(this._latlng),a=V(this.options.offset),c=this._getAnchor();this._zoomAnimated?Ye(this._container,r.add(c)):a=a.add(r).add(c);var d=this._containerBottom=-a.y,p=this._containerLeft=-Math.round(this._containerWidth/2)+a.x;this._container.style.bottom=d+"px",this._container.style.left=p+"px"}},_getAnchor:function(){return[0,0]}});Ce.include({_initOverlay:function(r,a,c,d){var p=a;return p instanceof r||(p=new r(d).setContent(a)),c&&p.setLatLng(c),p}}),gn.include({_initOverlay:function(r,a,c,d){var p=c;return p instanceof r?(j(p,d),p._source=this):(p=a&&!d?a:new r(d,this),p.setContent(c)),p}});var vl=In.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(r){return r=arguments.length?r:this._source._map,!r.hasLayer(this)&&r._popup&&r._popup.options.autoClose&&r.removeLayer(r._popup),r._popup=this,In.prototype.openOn.call(this,r)},onAdd:function(r){In.prototype.onAdd.call(this,r),r.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Tr||this._source.on("preclick",bi))},onRemove:function(r){In.prototype.onRemove.call(this,r),r.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Tr||this._source.off("preclick",bi))},getEvents:function(){var r=In.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(r.preclick=this.close),this.options.keepInView&&(r.moveend=this._adjustPan),r},_initLayout:function(){var r="leaflet-popup",a=this._container=Te("div",r+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=Te("div",r+"-content-wrapper",a);if(this._contentNode=Te("div",r+"-content",c),Is(a),sd(this._contentNode),he(a,"contextmenu",bi),this._tipContainer=Te("div",r+"-tip-container",a),this._tip=Te("div",r+"-tip",this._tipContainer),this.options.closeButton){var d=this._closeButton=Te("a",r+"-close-button",a);d.setAttribute("role","button"),d.setAttribute("aria-label","Close popup"),d.href="#close",d.innerHTML='<span aria-hidden="true">&#215;</span>',he(d,"click",function(p){mt(p),this.close()},this)}},_updateLayout:function(){var r=this._contentNode,a=r.style;a.width="",a.whiteSpace="nowrap";var c=r.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),a.width=c+1+"px",a.whiteSpace="",a.height="";var d=r.offsetHeight,p=this.options.maxHeight,C="leaflet-popup-scrolled";p&&d>p?(a.height=p+"px",ge(r,C)):qe(r,C),this._containerWidth=this._container.offsetWidth},_animateZoom:function(r){var a=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center),c=this._getAnchor();Ye(this._container,a.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var r=this._map,a=parseInt(As(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+a,d=this._containerWidth,p=new B(this._containerLeft,-c-this._containerBottom);p._add(wi(this._container));var C=r.layerPointToContainerPoint(p),E=V(this.options.autoPanPadding),I=V(this.options.autoPanPaddingTopLeft||E),D=V(this.options.autoPanPaddingBottomRight||E),H=r.getSize(),Y=0,ae=0;C.x+d+D.x>H.x&&(Y=C.x+d-H.x+D.x),C.x-Y-I.x<0&&(Y=C.x-I.x),C.y+c+D.y>H.y&&(ae=C.y+c-H.y+D.y),C.y-ae-I.y<0&&(ae=C.y-I.y),(Y||ae)&&(this.options.keepInView&&(this._autopanning=!0),r.fire("autopanstart").panBy([Y,ae]))}},_getAnchor:function(){return V(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),t1=function(r,a){return new vl(r,a)};Ce.mergeOptions({closePopupOnClick:!0}),Ce.include({openPopup:function(r,a,c){return this._initOverlay(vl,r,a,c).openOn(this),this},closePopup:function(r){return r=arguments.length?r:this._popup,r&&r.close(),this}}),gn.include({bindPopup:function(r,a){return this._popup=this._initOverlay(vl,this._popup,r,a),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(r){return this._popup&&(this instanceof Jn||(this._popup._source=this),this._popup._prepareOpen(r||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(r){return this._popup&&this._popup.setContent(r),this},getPopup:function(){return this._popup},_openPopup:function(r){if(!(!this._popup||!this._map)){Si(r);var a=r.layer||r.target;if(this._popup._source===a&&!(a instanceof Tr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(r.latlng);return}this._popup._source=a,this.openPopup(r.latlng)}},_movePopup:function(r){this._popup.setLatLng(r.latlng)},_onKeyPress:function(r){r.originalEvent.keyCode===13&&this._openPopup(r)}});var xl=In.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(r){In.prototype.onAdd.call(this,r),this.setOpacity(this.options.opacity),r.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(r){In.prototype.onRemove.call(this,r),r.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var r=In.prototype.getEvents.call(this);return this.options.permanent||(r.preclick=this.close),r},_initLayout:function(){var r="leaflet-tooltip",a=r+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Te("div",a),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+f(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(r){var a,c,d=this._map,p=this._container,C=d.latLngToContainerPoint(d.getCenter()),E=d.layerPointToContainerPoint(r),I=this.options.direction,D=p.offsetWidth,H=p.offsetHeight,Y=V(this.options.offset),ae=this._getAnchor();I==="top"?(a=D/2,c=H):I==="bottom"?(a=D/2,c=0):I==="center"?(a=D/2,c=H/2):I==="right"?(a=0,c=H/2):I==="left"?(a=D,c=H/2):E.x<C.x?(I="right",a=0,c=H/2):(I="left",a=D+(Y.x+ae.x)*2,c=H/2),r=r.subtract(V(a,c,!0)).add(Y).add(ae),qe(p,"leaflet-tooltip-right"),qe(p,"leaflet-tooltip-left"),qe(p,"leaflet-tooltip-top"),qe(p,"leaflet-tooltip-bottom"),ge(p,"leaflet-tooltip-"+I),Ye(p,r)},_updatePosition:function(){var r=this._map.latLngToLayerPoint(this._latlng);this._setPosition(r)},setOpacity:function(r){this.options.opacity=r,this._container&&en(this._container,r)},_animateZoom:function(r){var a=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center);this._setPosition(a)},_getAnchor:function(){return V(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),n1=function(r,a){return new xl(r,a)};Ce.include({openTooltip:function(r,a,c){return this._initOverlay(xl,r,a,c).openOn(this),this},closeTooltip:function(r){return r.close(),this}}),gn.include({bindTooltip:function(r,a){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(xl,this._tooltip,r,a),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(r){if(!(!r&&this._tooltipHandlersAdded)){var a=r?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[a](c),this._tooltipHandlersAdded=!r}},openTooltip:function(r){return this._tooltip&&(this instanceof Jn||(this._tooltip._source=this),this._tooltip._prepareOpen(r)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(r){return this._tooltip&&this._tooltip.setContent(r),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(r){var a=typeof r.getElement=="function"&&r.getElement();a&&(he(a,"focus",function(){this._tooltip._source=r,this.openTooltip()},this),he(a,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(r){var a=typeof r.getElement=="function"&&r.getElement();a&&a.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(r){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var a=this;this._map.once("moveend",function(){a._openOnceFlag=!1,a._openTooltip(r)});return}this._tooltip._source=r.layer||r.target,this.openTooltip(this._tooltip.options.sticky?r.latlng:void 0)}},_moveTooltip:function(r){var a=r.latlng,c,d;this._tooltip.options.sticky&&r.originalEvent&&(c=this._map.mouseEventToContainerPoint(r.originalEvent),d=this._map.containerPointToLayerPoint(c),a=this._map.layerPointToLatLng(d)),this._tooltip.setLatLng(a)}});var jg=go.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(r){var a=r&&r.tagName==="DIV"?r:document.createElement("div"),c=this.options;if(c.html instanceof Element?(ol(a),a.appendChild(c.html)):a.innerHTML=c.html!==!1?c.html:"",c.bgPos){var d=V(c.bgPos);a.style.backgroundPosition=-d.x+"px "+-d.y+"px"}return this._setIconStyles(a,"icon"),a},createShadow:function(){return null}});function r1(r){return new jg(r)}go.Default=Os;var Fs=gn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:ie.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(r){j(this,r)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(r){r._addZoomLimit(this)},onRemove:function(r){this._removeAllTiles(),Oe(this._container),r._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(fo(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(po(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(r){return this.options.opacity=r,this._updateOpacity(),this},setZIndex:function(r){return this.options.zIndex=r,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var r=this._clampZoom(this._map.getZoom());r!==this._tileZoom&&(this._tileZoom=r,this._updateLevels()),this._update()}return this},getEvents:function(){var r={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=m(this._onMoveEnd,this.options.updateInterval,this)),r.move=this._onMove),this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},createTile:function(){return document.createElement("div")},getTileSize:function(){var r=this.options.tileSize;return r instanceof B?r:new B(r,r)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(r){for(var a=this.getPane().children,c=-r(-1/0,1/0),d=0,p=a.length,C;d<p;d++)C=a[d].style.zIndex,a[d]!==this._container&&C&&(c=r(c,+C));isFinite(c)&&(this.options.zIndex=c+r(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!ie.ielt9){en(this._container,this.options.opacity);var r=+new Date,a=!1,c=!1;for(var d in this._tiles){var p=this._tiles[d];if(!(!p.current||!p.loaded)){var C=Math.min(1,(r-p.loaded)/200);en(p.el,C),C<1?a=!0:(p.active?c=!0:this._onOpaqueTile(p),p.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),a&&(J(this._fadeFrame),this._fadeFrame=Z(this._updateOpacity,this))}},_onOpaqueTile:y,_initContainer:function(){this._container||(this._container=Te("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var r=this._tileZoom,a=this.options.maxZoom;if(r!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===r?(this._levels[c].el.style.zIndex=a-Math.abs(r-c),this._onUpdateLevel(c)):(Oe(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var d=this._levels[r],p=this._map;return d||(d=this._levels[r]={},d.el=Te("div","leaflet-tile-container leaflet-zoom-animated",this._container),d.el.style.zIndex=a,d.origin=p.project(p.unproject(p.getPixelOrigin()),r).round(),d.zoom=r,this._setZoomTransform(d,p.getCenter(),p.getZoom()),y(d.el.offsetWidth),this._onCreateLevel(d)),this._level=d,d}},_onUpdateLevel:y,_onRemoveLevel:y,_onCreateLevel:y,_pruneTiles:function(){if(this._map){var r,a,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(r in this._tiles)a=this._tiles[r],a.retain=a.current;for(r in this._tiles)if(a=this._tiles[r],a.current&&!a.active){var d=a.coords;this._retainParent(d.x,d.y,d.z,d.z-5)||this._retainChildren(d.x,d.y,d.z,d.z+2)}for(r in this._tiles)this._tiles[r].retain||this._removeTile(r)}},_removeTilesAtZoom:function(r){for(var a in this._tiles)this._tiles[a].coords.z===r&&this._removeTile(a)},_removeAllTiles:function(){for(var r in this._tiles)this._removeTile(r)},_invalidateAll:function(){for(var r in this._levels)Oe(this._levels[r].el),this._onRemoveLevel(Number(r)),delete this._levels[r];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(r,a,c,d){var p=Math.floor(r/2),C=Math.floor(a/2),E=c-1,I=new B(+p,+C);I.z=+E;var D=this._tileCoordsToKey(I),H=this._tiles[D];return H&&H.active?(H.retain=!0,!0):(H&&H.loaded&&(H.retain=!0),E>d?this._retainParent(p,C,E,d):!1)},_retainChildren:function(r,a,c,d){for(var p=2*r;p<2*r+2;p++)for(var C=2*a;C<2*a+2;C++){var E=new B(p,C);E.z=c+1;var I=this._tileCoordsToKey(E),D=this._tiles[I];if(D&&D.active){D.retain=!0;continue}else D&&D.loaded&&(D.retain=!0);c+1<d&&this._retainChildren(p,C,c+1,d)}},_resetView:function(r){var a=r&&(r.pinch||r.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),a,a)},_animateZoom:function(r){this._setView(r.center,r.zoom,!0,r.noUpdate)},_clampZoom:function(r){var a=this.options;return a.minNativeZoom!==void 0&&r<a.minNativeZoom?a.minNativeZoom:a.maxNativeZoom!==void 0&&a.maxNativeZoom<r?a.maxNativeZoom:r},_setView:function(r,a,c,d){var p=Math.round(a);this.options.maxZoom!==void 0&&p>this.options.maxZoom||this.options.minZoom!==void 0&&p<this.options.minZoom?p=void 0:p=this._clampZoom(p);var C=this.options.updateWhenZooming&&p!==this._tileZoom;(!d||C)&&(this._tileZoom=p,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),p!==void 0&&this._update(r),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(r,a)},_setZoomTransforms:function(r,a){for(var c in this._levels)this._setZoomTransform(this._levels[c],r,a)},_setZoomTransform:function(r,a,c){var d=this._map.getZoomScale(c,r.zoom),p=r.origin.multiplyBy(d).subtract(this._map._getNewPixelOrigin(a,c)).round();ie.any3d?_i(r.el,p,d):Ye(r.el,p)},_resetGrid:function(){var r=this._map,a=r.options.crs,c=this._tileSize=this.getTileSize(),d=this._tileZoom,p=this._map.getPixelWorldBounds(this._tileZoom);p&&(this._globalTileRange=this._pxBoundsToTileRange(p)),this._wrapX=a.wrapLng&&!this.options.noWrap&&[Math.floor(r.project([0,a.wrapLng[0]],d).x/c.x),Math.ceil(r.project([0,a.wrapLng[1]],d).x/c.y)],this._wrapY=a.wrapLat&&!this.options.noWrap&&[Math.floor(r.project([a.wrapLat[0],0],d).y/c.x),Math.ceil(r.project([a.wrapLat[1],0],d).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(r){var a=this._map,c=a._animatingZoom?Math.max(a._animateToZoom,a.getZoom()):a.getZoom(),d=a.getZoomScale(c,this._tileZoom),p=a.project(r,this._tileZoom).floor(),C=a.getSize().divideBy(d*2);return new te(p.subtract(C),p.add(C))},_update:function(r){var a=this._map;if(a){var c=this._clampZoom(a.getZoom());if(r===void 0&&(r=a.getCenter()),this._tileZoom!==void 0){var d=this._getTiledPixelBounds(r),p=this._pxBoundsToTileRange(d),C=p.getCenter(),E=[],I=this.options.keepBuffer,D=new te(p.getBottomLeft().subtract([I,-I]),p.getTopRight().add([I,-I]));if(!(isFinite(p.min.x)&&isFinite(p.min.y)&&isFinite(p.max.x)&&isFinite(p.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var H in this._tiles){var Y=this._tiles[H].coords;(Y.z!==this._tileZoom||!D.contains(new B(Y.x,Y.y)))&&(this._tiles[H].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(r,c);return}for(var ae=p.min.y;ae<=p.max.y;ae++)for(var xe=p.min.x;xe<=p.max.x;xe++){var Ct=new B(xe,ae);if(Ct.z=this._tileZoom,!!this._isValidTile(Ct)){var ct=this._tiles[this._tileCoordsToKey(Ct)];ct?ct.current=!0:E.push(Ct)}}if(E.sort(function(It,_o){return It.distanceTo(C)-_o.distanceTo(C)}),E.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var nn=document.createDocumentFragment();for(xe=0;xe<E.length;xe++)this._addTile(E[xe],nn);this._level.el.appendChild(nn)}}}},_isValidTile:function(r){var a=this._map.options.crs;if(!a.infinite){var c=this._globalTileRange;if(!a.wrapLng&&(r.x<c.min.x||r.x>c.max.x)||!a.wrapLat&&(r.y<c.min.y||r.y>c.max.y))return!1}if(!this.options.bounds)return!0;var d=this._tileCoordsToBounds(r);return we(this.options.bounds).overlaps(d)},_keyToBounds:function(r){return this._tileCoordsToBounds(this._keyToTileCoords(r))},_tileCoordsToNwSe:function(r){var a=this._map,c=this.getTileSize(),d=r.scaleBy(c),p=d.add(c),C=a.unproject(d,r.z),E=a.unproject(p,r.z);return[C,E]},_tileCoordsToBounds:function(r){var a=this._tileCoordsToNwSe(r),c=new Ae(a[0],a[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(r){return r.x+":"+r.y+":"+r.z},_keyToTileCoords:function(r){var a=r.split(":"),c=new B(+a[0],+a[1]);return c.z=+a[2],c},_removeTile:function(r){var a=this._tiles[r];a&&(Oe(a.el),delete this._tiles[r],this.fire("tileunload",{tile:a.el,coords:this._keyToTileCoords(r)}))},_initTile:function(r){ge(r,"leaflet-tile");var a=this.getTileSize();r.style.width=a.x+"px",r.style.height=a.y+"px",r.onselectstart=y,r.onmousemove=y,ie.ielt9&&this.options.opacity<1&&en(r,this.options.opacity)},_addTile:function(r,a){var c=this._getTilePos(r),d=this._tileCoordsToKey(r),p=this.createTile(this._wrapCoords(r),u(this._tileReady,this,r));this._initTile(p),this.createTile.length<2&&Z(u(this._tileReady,this,r,null,p)),Ye(p,c),this._tiles[d]={el:p,coords:r,current:!0},a.appendChild(p),this.fire("tileloadstart",{tile:p,coords:r})},_tileReady:function(r,a,c){a&&this.fire("tileerror",{error:a,tile:c,coords:r});var d=this._tileCoordsToKey(r);c=this._tiles[d],c&&(c.loaded=+new Date,this._map._fadeAnimated?(en(c.el,0),J(this._fadeFrame),this._fadeFrame=Z(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),a||(ge(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:r})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),ie.ielt9||!this._map._fadeAnimated?Z(this._pruneTiles,this):setTimeout(u(this._pruneTiles,this),250)))},_getTilePos:function(r){return r.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(r){var a=new B(this._wrapX?w(r.x,this._wrapX):r.x,this._wrapY?w(r.y,this._wrapY):r.y);return a.z=r.z,a},_pxBoundsToTileRange:function(r){var a=this.getTileSize();return new te(r.min.unscaleBy(a).floor(),r.max.unscaleBy(a).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var r in this._tiles)if(!this._tiles[r].loaded)return!1;return!0}});function i1(r){return new Fs(r)}var xo=Fs.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(r,a){this._url=r,a=j(this,a),a.detectRetina&&ie.retina&&a.maxZoom>0?(a.tileSize=Math.floor(a.tileSize/2),a.zoomReverse?(a.zoomOffset--,a.minZoom=Math.min(a.maxZoom,a.minZoom+1)):(a.zoomOffset++,a.maxZoom=Math.max(a.minZoom,a.maxZoom-1)),a.minZoom=Math.max(0,a.minZoom)):a.zoomReverse?a.minZoom=Math.min(a.maxZoom,a.minZoom):a.maxZoom=Math.max(a.minZoom,a.maxZoom),typeof a.subdomains=="string"&&(a.subdomains=a.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(r,a){return this._url===r&&a===void 0&&(a=!0),this._url=r,a||this.redraw(),this},createTile:function(r,a){var c=document.createElement("img");return he(c,"load",u(this._tileOnLoad,this,a,c)),he(c,"error",u(this._tileOnError,this,a,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(r),c},getTileUrl:function(r){var a={r:ie.retina?"@2x":"",s:this._getSubdomain(r),x:r.x,y:r.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-r.y;this.options.tms&&(a.y=c),a["-y"]=c}return x(this._url,o(a,this.options))},_tileOnLoad:function(r,a){ie.ielt9?setTimeout(u(r,this,null,a),0):r(null,a)},_tileOnError:function(r,a,c){var d=this.options.errorTileUrl;d&&a.getAttribute("src")!==d&&(a.src=d),r(c,a)},_onTileRemove:function(r){r.tile.onload=null},_getZoomForUrl:function(){var r=this._tileZoom,a=this.options.maxZoom,c=this.options.zoomReverse,d=this.options.zoomOffset;return c&&(r=a-r),r+d},_getSubdomain:function(r){var a=Math.abs(r.x+r.y)%this.options.subdomains.length;return this.options.subdomains[a]},_abortLoading:function(){var r,a;for(r in this._tiles)if(this._tiles[r].coords.z!==this._tileZoom&&(a=this._tiles[r].el,a.onload=y,a.onerror=y,!a.complete)){a.src=M;var c=this._tiles[r].coords;Oe(a),delete this._tiles[r],this.fire("tileabort",{tile:a,coords:c})}},_removeTile:function(r){var a=this._tiles[r];if(a)return a.el.setAttribute("src",M),Fs.prototype._removeTile.call(this,r)},_tileReady:function(r,a,c){if(!(!this._map||c&&c.getAttribute("src")===M))return Fs.prototype._tileReady.call(this,r,a,c)}});function Cg(r,a){return new xo(r,a)}var $g=xo.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(r,a){this._url=r;var c=o({},this.defaultWmsParams);for(var d in a)d in this.options||(c[d]=a[d]);a=j(this,a);var p=a.detectRetina&&ie.retina?2:1,C=this.getTileSize();c.width=C.x*p,c.height=C.y*p,this.wmsParams=c},onAdd:function(r){this._crs=this.options.crs||r.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var a=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[a]=this._crs.code,xo.prototype.onAdd.call(this,r)},getTileUrl:function(r){var a=this._tileCoordsToNwSe(r),c=this._crs,d=se(c.project(a[0]),c.project(a[1])),p=d.min,C=d.max,E=(this._wmsVersion>=1.3&&this._crs===vg?[p.y,p.x,C.y,C.x]:[p.x,p.y,C.x,C.y]).join(","),I=xo.prototype.getTileUrl.call(this,r);return I+T(this.wmsParams,I,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+E},setParams:function(r,a){return o(this.wmsParams,r),a||this.redraw(),this}});function o1(r,a){return new $g(r,a)}xo.WMS=$g,Cg.wms=o1;var tr=gn.extend({options:{padding:.1},initialize:function(r){j(this,r),f(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),ge(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var r={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(r.zoomanim=this._onAnimZoom),r},_onAnimZoom:function(r){this._updateTransform(r.center,r.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(r,a){var c=this._map.getZoomScale(a,this._zoom),d=this._map.getSize().multiplyBy(.5+this.options.padding),p=this._map.project(this._center,a),C=d.multiplyBy(-c).add(p).subtract(this._map._getNewPixelOrigin(r,a));ie.any3d?_i(this._container,C,c):Ye(this._container,C)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var r in this._layers)this._layers[r]._reset()},_onZoomEnd:function(){for(var r in this._layers)this._layers[r]._project()},_updatePaths:function(){for(var r in this._layers)this._layers[r]._update()},_update:function(){var r=this.options.padding,a=this._map.getSize(),c=this._map.containerPointToLayerPoint(a.multiplyBy(-r)).round();this._bounds=new te(c,c.add(a.multiplyBy(1+r*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),kg=tr.extend({options:{tolerance:0},getEvents:function(){var r=tr.prototype.getEvents.call(this);return r.viewprereset=this._onViewPreReset,r},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){tr.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var r=this._container=document.createElement("canvas");he(r,"mousemove",this._onMouseMove,this),he(r,"click dblclick mousedown mouseup contextmenu",this._onClick,this),he(r,"mouseout",this._handleMouseOut,this),r._leaflet_disable_events=!0,this._ctx=r.getContext("2d")},_destroyContainer:function(){J(this._redrawRequest),delete this._ctx,Oe(this._container),ze(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var r;this._redrawBounds=null;for(var a in this._layers)r=this._layers[a],r._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){tr.prototype._update.call(this);var r=this._bounds,a=this._container,c=r.getSize(),d=ie.retina?2:1;Ye(a,r.min),a.width=d*c.x,a.height=d*c.y,a.style.width=c.x+"px",a.style.height=c.y+"px",ie.retina&&this._ctx.scale(2,2),this._ctx.translate(-r.min.x,-r.min.y),this.fire("update")}},_reset:function(){tr.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(r){this._updateDashArray(r),this._layers[f(r)]=r;var a=r._order={layer:r,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=a),this._drawLast=a,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(r){this._requestRedraw(r)},_removePath:function(r){var a=r._order,c=a.next,d=a.prev;c?c.prev=d:this._drawLast=d,d?d.next=c:this._drawFirst=c,delete r._order,delete this._layers[f(r)],this._requestRedraw(r)},_updatePath:function(r){this._extendRedrawBounds(r),r._project(),r._update(),this._requestRedraw(r)},_updateStyle:function(r){this._updateDashArray(r),this._requestRedraw(r)},_updateDashArray:function(r){if(typeof r.options.dashArray=="string"){var a=r.options.dashArray.split(/[, ]+/),c=[],d,p;for(p=0;p<a.length;p++){if(d=Number(a[p]),isNaN(d))return;c.push(d)}r.options._dashArray=c}else r.options._dashArray=r.options.dashArray},_requestRedraw:function(r){this._map&&(this._extendRedrawBounds(r),this._redrawRequest=this._redrawRequest||Z(this._redraw,this))},_extendRedrawBounds:function(r){if(r._pxBounds){var a=(r.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new te,this._redrawBounds.extend(r._pxBounds.min.subtract([a,a])),this._redrawBounds.extend(r._pxBounds.max.add([a,a]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var r=this._redrawBounds;if(r){var a=r.getSize();this._ctx.clearRect(r.min.x,r.min.y,a.x,a.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var r,a=this._redrawBounds;if(this._ctx.save(),a){var c=a.getSize();this._ctx.beginPath(),this._ctx.rect(a.min.x,a.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var d=this._drawFirst;d;d=d.next)r=d.layer,(!a||r._pxBounds&&r._pxBounds.intersects(a))&&r._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(r,a){if(this._drawing){var c,d,p,C,E=r._parts,I=E.length,D=this._ctx;if(I){for(D.beginPath(),c=0;c<I;c++){for(d=0,p=E[c].length;d<p;d++)C=E[c][d],D[d?"lineTo":"moveTo"](C.x,C.y);a&&D.closePath()}this._fillStroke(D,r)}}},_updateCircle:function(r){if(!(!this._drawing||r._empty())){var a=r._point,c=this._ctx,d=Math.max(Math.round(r._radius),1),p=(Math.max(Math.round(r._radiusY),1)||d)/d;p!==1&&(c.save(),c.scale(1,p)),c.beginPath(),c.arc(a.x,a.y/p,d,0,Math.PI*2,!1),p!==1&&c.restore(),this._fillStroke(c,r)}},_fillStroke:function(r,a){var c=a.options;c.fill&&(r.globalAlpha=c.fillOpacity,r.fillStyle=c.fillColor||c.color,r.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(r.setLineDash&&r.setLineDash(a.options&&a.options._dashArray||[]),r.globalAlpha=c.opacity,r.lineWidth=c.weight,r.strokeStyle=c.color,r.lineCap=c.lineCap,r.lineJoin=c.lineJoin,r.stroke())},_onClick:function(r){for(var a=this._map.mouseEventToLayerPoint(r),c,d,p=this._drawFirst;p;p=p.next)c=p.layer,c.options.interactive&&c._containsPoint(a)&&(!(r.type==="click"||r.type==="preclick")||!this._map._draggableMoved(c))&&(d=c);this._fireEvent(d?[d]:!1,r)},_onMouseMove:function(r){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var a=this._map.mouseEventToLayerPoint(r);this._handleMouseHover(r,a)}},_handleMouseOut:function(r){var a=this._hoveredLayer;a&&(qe(this._container,"leaflet-interactive"),this._fireEvent([a],r,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(r,a){if(!this._mouseHoverThrottled){for(var c,d,p=this._drawFirst;p;p=p.next)c=p.layer,c.options.interactive&&c._containsPoint(a)&&(d=c);d!==this._hoveredLayer&&(this._handleMouseOut(r),d&&(ge(this._container,"leaflet-interactive"),this._fireEvent([d],r,"mouseover"),this._hoveredLayer=d)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,r),this._mouseHoverThrottled=!0,setTimeout(u(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(r,a,c){this._map._fireDOMEvent(a,c||a.type,r)},_bringToFront:function(r){var a=r._order;if(a){var c=a.next,d=a.prev;if(c)c.prev=d;else return;d?d.next=c:c&&(this._drawFirst=c),a.prev=this._drawLast,this._drawLast.next=a,a.next=null,this._drawLast=a,this._requestRedraw(r)}},_bringToBack:function(r){var a=r._order;if(a){var c=a.next,d=a.prev;if(d)d.next=c;else return;c?c.prev=d:d&&(this._drawLast=d),a.prev=null,a.next=this._drawFirst,this._drawFirst.prev=a,this._drawFirst=a,this._requestRedraw(r)}}});function Tg(r){return ie.canvas?new kg(r):null}var Bs=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(r){return document.createElement("<lvml:"+r+' class="lvml">')}}catch{}return function(r){return document.createElement("<"+r+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),s1={_initContainer:function(){this._container=Te("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(tr.prototype._update.call(this),this.fire("update"))},_initPath:function(r){var a=r._container=Bs("shape");ge(a,"leaflet-vml-shape "+(this.options.className||"")),a.coordsize="1 1",r._path=Bs("path"),a.appendChild(r._path),this._updateStyle(r),this._layers[f(r)]=r},_addPath:function(r){var a=r._container;this._container.appendChild(a),r.options.interactive&&r.addInteractiveTarget(a)},_removePath:function(r){var a=r._container;Oe(a),r.removeInteractiveTarget(a),delete this._layers[f(r)]},_updateStyle:function(r){var a=r._stroke,c=r._fill,d=r.options,p=r._container;p.stroked=!!d.stroke,p.filled=!!d.fill,d.stroke?(a||(a=r._stroke=Bs("stroke")),p.appendChild(a),a.weight=d.weight+"px",a.color=d.color,a.opacity=d.opacity,d.dashArray?a.dashStyle=_(d.dashArray)?d.dashArray.join(" "):d.dashArray.replace(/( *, *)/g," "):a.dashStyle="",a.endcap=d.lineCap.replace("butt","flat"),a.joinstyle=d.lineJoin):a&&(p.removeChild(a),r._stroke=null),d.fill?(c||(c=r._fill=Bs("fill")),p.appendChild(c),c.color=d.fillColor||d.color,c.opacity=d.fillOpacity):c&&(p.removeChild(c),r._fill=null)},_updateCircle:function(r){var a=r._point.round(),c=Math.round(r._radius),d=Math.round(r._radiusY||c);this._setPath(r,r._empty()?"M0 0":"AL "+a.x+","+a.y+" "+c+","+d+" 0,"+65535*360)},_setPath:function(r,a){r._path.v=a},_bringToFront:function(r){fo(r._container)},_bringToBack:function(r){po(r._container)}},_l=ie.vml?Bs:Am,Us=tr.extend({_initContainer:function(){this._container=_l("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=_l("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Oe(this._container),ze(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){tr.prototype._update.call(this);var r=this._bounds,a=r.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(a))&&(this._svgSize=a,c.setAttribute("width",a.x),c.setAttribute("height",a.y)),Ye(c,r.min),c.setAttribute("viewBox",[r.min.x,r.min.y,a.x,a.y].join(" ")),this.fire("update")}},_initPath:function(r){var a=r._path=_l("path");r.options.className&&ge(a,r.options.className),r.options.interactive&&ge(a,"leaflet-interactive"),this._updateStyle(r),this._layers[f(r)]=r},_addPath:function(r){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(r._path),r.addInteractiveTarget(r._path)},_removePath:function(r){Oe(r._path),r.removeInteractiveTarget(r._path),delete this._layers[f(r)]},_updatePath:function(r){r._project(),r._update()},_updateStyle:function(r){var a=r._path,c=r.options;a&&(c.stroke?(a.setAttribute("stroke",c.color),a.setAttribute("stroke-opacity",c.opacity),a.setAttribute("stroke-width",c.weight),a.setAttribute("stroke-linecap",c.lineCap),a.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?a.setAttribute("stroke-dasharray",c.dashArray):a.removeAttribute("stroke-dasharray"),c.dashOffset?a.setAttribute("stroke-dashoffset",c.dashOffset):a.removeAttribute("stroke-dashoffset")):a.setAttribute("stroke","none"),c.fill?(a.setAttribute("fill",c.fillColor||c.color),a.setAttribute("fill-opacity",c.fillOpacity),a.setAttribute("fill-rule",c.fillRule||"evenodd")):a.setAttribute("fill","none"))},_updatePoly:function(r,a){this._setPath(r,zm(r._parts,a))},_updateCircle:function(r){var a=r._point,c=Math.max(Math.round(r._radius),1),d=Math.max(Math.round(r._radiusY),1)||c,p="a"+c+","+d+" 0 1,0 ",C=r._empty()?"M0 0":"M"+(a.x-c)+","+a.y+p+c*2+",0 "+p+-c*2+",0 ";this._setPath(r,C)},_setPath:function(r,a){r._path.setAttribute("d",a)},_bringToFront:function(r){fo(r._path)},_bringToBack:function(r){po(r._path)}});ie.vml&&Us.include(s1);function Lg(r){return ie.svg||ie.vml?new Us(r):null}Ce.include({getRenderer:function(r){var a=r.options.renderer||this._getPaneRenderer(r.options.pane)||this.options.renderer||this._renderer;return a||(a=this._renderer=this._createRenderer()),this.hasLayer(a)||this.addLayer(a),a},_getPaneRenderer:function(r){if(r==="overlayPane"||r===void 0)return!1;var a=this._paneRenderers[r];return a===void 0&&(a=this._createRenderer({pane:r}),this._paneRenderers[r]=a),a},_createRenderer:function(r){return this.options.preferCanvas&&Tg(r)||Lg(r)}});var Eg=yo.extend({initialize:function(r,a){yo.prototype.initialize.call(this,this._boundsToLatLngs(r),a)},setBounds:function(r){return this.setLatLngs(this._boundsToLatLngs(r))},_boundsToLatLngs:function(r){return r=we(r),[r.getSouthWest(),r.getNorthWest(),r.getNorthEast(),r.getSouthEast()]}});function a1(r,a){return new Eg(r,a)}Us.create=_l,Us.pointsToPath=zm,er.geometryToLayer=fl,er.coordsToLatLng=md,er.coordsToLatLngs=pl,er.latLngToCoords=gd,er.latLngsToCoords=ml,er.getFeature=vo,er.asFeature=gl,Ce.mergeOptions({boxZoom:!0});var Pg=Rn.extend({initialize:function(r){this._map=r,this._container=r._container,this._pane=r._panes.overlayPane,this._resetStateTimeout=0,r.on("unload",this._destroy,this)},addHooks:function(){he(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ze(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Oe(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(r){if(!r.shiftKey||r.which!==1&&r.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),zs(),Ju(),this._startPoint=this._map.mouseEventToContainerPoint(r),he(document,{contextmenu:Si,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(r){this._moved||(this._moved=!0,this._box=Te("div","leaflet-zoom-box",this._container),ge(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(r);var a=new te(this._point,this._startPoint),c=a.getSize();Ye(this._box,a.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(Oe(this._box),qe(this._container,"leaflet-crosshair")),Ms(),Xu(),ze(document,{contextmenu:Si,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(r){if(!(r.which!==1&&r.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(u(this._resetState,this),0);var a=new Ae(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(a).fire("boxzoomend",{boxZoomBounds:a})}},_onKeyDown:function(r){r.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Ce.addInitHook("addHandler","boxZoom",Pg),Ce.mergeOptions({doubleClickZoom:!0});var Ag=Rn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(r){var a=this._map,c=a.getZoom(),d=a.options.zoomDelta,p=r.originalEvent.shiftKey?c-d:c+d;a.options.doubleClickZoom==="center"?a.setZoom(p):a.setZoomAround(r.containerPoint,p)}});Ce.addInitHook("addHandler","doubleClickZoom",Ag),Ce.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var zg=Rn.extend({addHooks:function(){if(!this._draggable){var r=this._map;this._draggable=new kr(r._mapPane,r._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),r.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),r.on("zoomend",this._onZoomEnd,this),r.whenReady(this._onZoomEnd,this))}ge(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){qe(this._map._container,"leaflet-grab"),qe(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var r=this._map;if(r._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var a=we(this._map.options.maxBounds);this._offsetLimit=se(this._map.latLngToContainerPoint(a.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(a.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;r.fire("movestart").fire("dragstart"),r.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(r){if(this._map.options.inertia){var a=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(a),this._prunePositions(a)}this._map.fire("move",r).fire("drag",r)},_prunePositions:function(r){for(;this._positions.length>1&&r-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var r=this._map.getSize().divideBy(2),a=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=a.subtract(r).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(r,a){return r-(r-a)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var r=this._draggable._newPos.subtract(this._draggable._startPos),a=this._offsetLimit;r.x<a.min.x&&(r.x=this._viscousLimit(r.x,a.min.x)),r.y<a.min.y&&(r.y=this._viscousLimit(r.y,a.min.y)),r.x>a.max.x&&(r.x=this._viscousLimit(r.x,a.max.x)),r.y>a.max.y&&(r.y=this._viscousLimit(r.y,a.max.y)),this._draggable._newPos=this._draggable._startPos.add(r)}},_onPreDragWrap:function(){var r=this._worldWidth,a=Math.round(r/2),c=this._initialWorldOffset,d=this._draggable._newPos.x,p=(d-a+c)%r+a-c,C=(d+a+c)%r-a-c,E=Math.abs(p+c)<Math.abs(C+c)?p:C;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=E},_onDragEnd:function(r){var a=this._map,c=a.options,d=!c.inertia||r.noInertia||this._times.length<2;if(a.fire("dragend",r),d)a.fire("moveend");else{this._prunePositions(+new Date);var p=this._lastPos.subtract(this._positions[0]),C=(this._lastTime-this._times[0])/1e3,E=c.easeLinearity,I=p.multiplyBy(E/C),D=I.distanceTo([0,0]),H=Math.min(c.inertiaMaxSpeed,D),Y=I.multiplyBy(H/D),ae=H/(c.inertiaDeceleration*E),xe=Y.multiplyBy(-ae/2).round();!xe.x&&!xe.y?a.fire("moveend"):(xe=a._limitOffset(xe,a.options.maxBounds),Z(function(){a.panBy(xe,{duration:ae,easeLinearity:E,noMoveStart:!0,animate:!0})}))}}});Ce.addInitHook("addHandler","dragging",zg),Ce.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Mg=Rn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(r){this._map=r,this._setPanDelta(r.options.keyboardPanDelta),this._setZoomDelta(r.options.zoomDelta)},addHooks:function(){var r=this._map._container;r.tabIndex<=0&&(r.tabIndex="0"),he(r,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ze(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var r=document.body,a=document.documentElement,c=r.scrollTop||a.scrollTop,d=r.scrollLeft||a.scrollLeft;this._map._container.focus(),window.scrollTo(d,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(r){var a=this._panKeys={},c=this.keyCodes,d,p;for(d=0,p=c.left.length;d<p;d++)a[c.left[d]]=[-1*r,0];for(d=0,p=c.right.length;d<p;d++)a[c.right[d]]=[r,0];for(d=0,p=c.down.length;d<p;d++)a[c.down[d]]=[0,r];for(d=0,p=c.up.length;d<p;d++)a[c.up[d]]=[0,-1*r]},_setZoomDelta:function(r){var a=this._zoomKeys={},c=this.keyCodes,d,p;for(d=0,p=c.zoomIn.length;d<p;d++)a[c.zoomIn[d]]=r;for(d=0,p=c.zoomOut.length;d<p;d++)a[c.zoomOut[d]]=-r},_addHooks:function(){he(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ze(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(r){if(!(r.altKey||r.ctrlKey||r.metaKey)){var a=r.keyCode,c=this._map,d;if(a in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(d=this._panKeys[a],r.shiftKey&&(d=V(d).multiplyBy(3)),c.options.maxBounds&&(d=c._limitOffset(V(d),c.options.maxBounds)),c.options.worldCopyJump){var p=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(d)));c.panTo(p)}else c.panBy(d)}else if(a in this._zoomKeys)c.setZoom(c.getZoom()+(r.shiftKey?3:1)*this._zoomKeys[a]);else if(a===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;Si(r)}}});Ce.addInitHook("addHandler","keyboard",Mg),Ce.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Rg=Rn.extend({addHooks:function(){he(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ze(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(r){var a=og(r),c=this._map.options.wheelDebounceTime;this._delta+=a,this._lastMousePos=this._map.mouseEventToContainerPoint(r),this._startTime||(this._startTime=+new Date);var d=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(u(this._performZoom,this),d),Si(r)},_performZoom:function(){var r=this._map,a=r.getZoom(),c=this._map.options.zoomSnap||0;r._stop();var d=this._delta/(this._map.options.wheelPxPerZoomLevel*4),p=4*Math.log(2/(1+Math.exp(-Math.abs(d))))/Math.LN2,C=c?Math.ceil(p/c)*c:p,E=r._limitZoom(a+(this._delta>0?C:-C))-a;this._delta=0,this._startTime=null,E&&(r.options.scrollWheelZoom==="center"?r.setZoom(a+E):r.setZoomAround(this._lastMousePos,a+E))}});Ce.addInitHook("addHandler","scrollWheelZoom",Rg);var l1=600;Ce.mergeOptions({tapHold:ie.touchNative&&ie.safari&&ie.mobile,tapTolerance:15});var Ig=Rn.extend({addHooks:function(){he(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ze(this._map._container,"touchstart",this._onDown,this)},_onDown:function(r){if(clearTimeout(this._holdTimeout),r.touches.length===1){var a=r.touches[0];this._startPos=this._newPos=new B(a.clientX,a.clientY),this._holdTimeout=setTimeout(u(function(){this._cancel(),this._isTapValid()&&(he(document,"touchend",mt),he(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",a))},this),l1),he(document,"touchend touchcancel contextmenu",this._cancel,this),he(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function r(){ze(document,"touchend",mt),ze(document,"touchend touchcancel",r)},_cancel:function(){clearTimeout(this._holdTimeout),ze(document,"touchend touchcancel contextmenu",this._cancel,this),ze(document,"touchmove",this._onMove,this)},_onMove:function(r){var a=r.touches[0];this._newPos=new B(a.clientX,a.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(r,a){var c=new MouseEvent(r,{bubbles:!0,cancelable:!0,view:window,screenX:a.screenX,screenY:a.screenY,clientX:a.clientX,clientY:a.clientY});c._simulated=!0,a.target.dispatchEvent(c)}});Ce.addInitHook("addHandler","tapHold",Ig),Ce.mergeOptions({touchZoom:ie.touch,bounceAtZoomLimits:!0});var Ng=Rn.extend({addHooks:function(){ge(this._map._container,"leaflet-touch-zoom"),he(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){qe(this._map._container,"leaflet-touch-zoom"),ze(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(r){var a=this._map;if(!(!r.touches||r.touches.length!==2||a._animatingZoom||this._zooming)){var c=a.mouseEventToContainerPoint(r.touches[0]),d=a.mouseEventToContainerPoint(r.touches[1]);this._centerPoint=a.getSize()._divideBy(2),this._startLatLng=a.containerPointToLatLng(this._centerPoint),a.options.touchZoom!=="center"&&(this._pinchStartLatLng=a.containerPointToLatLng(c.add(d)._divideBy(2))),this._startDist=c.distanceTo(d),this._startZoom=a.getZoom(),this._moved=!1,this._zooming=!0,a._stop(),he(document,"touchmove",this._onTouchMove,this),he(document,"touchend touchcancel",this._onTouchEnd,this),mt(r)}},_onTouchMove:function(r){if(!(!r.touches||r.touches.length!==2||!this._zooming)){var a=this._map,c=a.mouseEventToContainerPoint(r.touches[0]),d=a.mouseEventToContainerPoint(r.touches[1]),p=c.distanceTo(d)/this._startDist;if(this._zoom=a.getScaleZoom(p,this._startZoom),!a.options.bounceAtZoomLimits&&(this._zoom<a.getMinZoom()&&p<1||this._zoom>a.getMaxZoom()&&p>1)&&(this._zoom=a._limitZoom(this._zoom)),a.options.touchZoom==="center"){if(this._center=this._startLatLng,p===1)return}else{var C=c._add(d)._divideBy(2)._subtract(this._centerPoint);if(p===1&&C.x===0&&C.y===0)return;this._center=a.unproject(a.project(this._pinchStartLatLng,this._zoom).subtract(C),this._zoom)}this._moved||(a._moveStart(!0,!1),this._moved=!0),J(this._animRequest);var E=u(a._move,a,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=Z(E,this,!0),mt(r)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,J(this._animRequest),ze(document,"touchmove",this._onTouchMove,this),ze(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Ce.addInitHook("addHandler","touchZoom",Ng),Ce.BoxZoom=Pg,Ce.DoubleClickZoom=Ag,Ce.Drag=zg,Ce.Keyboard=Mg,Ce.ScrollWheelZoom=Rg,Ce.TapHold=Ig,Ce.TouchZoom=Ng,n.Bounds=te,n.Browser=ie,n.CRS=rt,n.Canvas=kg,n.Circle=pd,n.CircleMarker=hl,n.Class=_e,n.Control=mn,n.DivIcon=jg,n.DivOverlay=In,n.DomEvent=$S,n.DomUtil=jS,n.Draggable=kr,n.Evented=Qe,n.FeatureGroup=Jn,n.GeoJSON=er,n.GridLayer=Fs,n.Handler=Rn,n.Icon=go,n.ImageOverlay=yl,n.LatLng=me,n.LatLngBounds=Ae,n.Layer=gn,n.LayerGroup=mo,n.LineUtil=OS,n.Map=Ce,n.Marker=dl,n.Mixin=zS,n.Path=Tr,n.Point=B,n.PolyUtil=MS,n.Polygon=yo,n.Polyline=Xn,n.Popup=vl,n.PosAnimation=sg,n.Projection=FS,n.Rectangle=Eg,n.Renderer=tr,n.SVG=Us,n.SVGOverlay=Sg,n.TileLayer=xo,n.Tooltip=xl,n.Transformation=$r,n.Util=de,n.VideoOverlay=bg,n.bind=u,n.bounds=se,n.canvas=Tg,n.circle=GS,n.circleMarker=qS,n.control=Ns,n.divIcon=r1,n.extend=o,n.featureGroup=ZS,n.geoJSON=wg,n.geoJson=YS,n.gridLayer=i1,n.icon=WS,n.imageOverlay=JS,n.latLng=le,n.latLngBounds=we,n.layerGroup=HS,n.map=kS,n.marker=VS,n.point=V,n.polygon=QS,n.polyline=KS,n.popup=t1,n.rectangle=a1,n.setOptions=j,n.stamp=f,n.svg=Lg,n.svgOverlay=e1,n.tileLayer=Cg,n.tooltip=n1,n.transformation=Rt,n.version=i,n.videoOverlay=XS;var c1=window.L;n.noConflict=function(){return window.L=c1,this},window.L=n})})(gp,gp.exports);var pn=gp.exports;function Du(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function Ou(e,t){return t==null?function(i,o){const l=z.useRef();return l.current||(l.current=e(i,o)),l}:function(i,o){const l=z.useRef();l.current||(l.current=e(i,o));const u=z.useRef(i),{instance:h}=l.current;return z.useEffect(function(){u.current!==i&&(t(h,i,u.current),u.current=i)},[h,i,o]),l}}function Rb(e,t){z.useEffect(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){var l;(l=t.layerContainer)==null||l.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function Ib(e){return function(n){const i=Iu(),o=e(Nu(n,i),i);return Eb(i.map,n.attribution),Em(o.current,n.eventHandlers),Rb(o.current,i),o}}function zA(e,t){const n=z.useRef();z.useEffect(function(){if(t.pathOptions!==n.current){const o=t.pathOptions??{};e.instance.setStyle(o),n.current=o}},[e,t])}function MA(e){return function(n){const i=Iu(),o=e(Nu(n,i),i);return Em(o.current,n.eventHandlers),Rb(o.current,i),zA(o.current,n),o}}function RA(e,t){const n=Ou(e,t),i=Ib(n);return Mb(i)}function IA(e,t){const n=Ou(e),i=AA(n,t);return EA(i)}function NA(e,t){const n=Ou(e,t),i=MA(n);return Mb(i)}function DA(e,t){const n=Ou(e,t),i=Ib(n);return PA(i)}function OA(e,t,n){const{opacity:i,zIndex:o}=t;i!=null&&i!==n.opacity&&e.setOpacity(i),o!=null&&o!==n.zIndex&&e.setZIndex(o)}function FA(){return Iu().map}function BA(e){const t=FA();return z.useEffect(function(){return t.on(e),function(){t.off(e)}},[t,e]),t}function yp(){return yp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},yp.apply(this,arguments)}function UA({bounds:e,boundsOptions:t,center:n,children:i,className:o,id:l,placeholder:u,style:h,whenReady:f,zoom:m,...w},y){const[S]=z.useState({className:o,id:l,style:h}),[b,$]=z.useState(null);z.useImperativeHandle(y,()=>(b==null?void 0:b.map)??null,[b]);const j=z.useCallback(v=>{if(v!==null&&b===null){const x=new pn.Map(v,w);n!=null&&m!=null?x.setView(n,m):e!=null&&x.fitBounds(e,t),f!=null&&x.whenReady(f),$(LA(x))}},[]);z.useEffect(()=>()=>{b==null||b.map.remove()},[b]);const T=b?We.createElement(zb,{value:b},i):u??null;return We.createElement("div",yp({},S,{ref:j}),T)}const Nb=z.forwardRef(UA),Or=RA(function({position:t,...n},i){const o=new pn.Marker(t,n);return Du(o,Pb(i,{overlayContainer:o}))},function(t,n,i){n.position!==i.position&&t.setLatLng(n.position),n.icon!=null&&n.icon!==i.icon&&t.setIcon(n.icon),n.zIndexOffset!=null&&n.zIndexOffset!==i.zIndexOffset&&t.setZIndexOffset(n.zIndexOffset),n.opacity!=null&&n.opacity!==i.opacity&&t.setOpacity(n.opacity),t.dragging!=null&&n.draggable!==i.draggable&&(n.draggable===!0?t.dragging.enable():t.dragging.disable())}),Db=NA(function({positions:t,...n},i){const o=new pn.Polyline(t,n);return Du(o,Pb(i,{overlayContainer:o}))},function(t,n,i){n.positions!==i.positions&&t.setLatLngs(n.positions)}),Fr=IA(function(t,n){const i=new pn.Popup(t,n.overlayContainer);return Du(i,n)},function(t,n,{position:i},o){z.useEffect(function(){const{instance:u}=t;function h(m){m.popup===u&&(u.update(),o(!0))}function f(m){m.popup===u&&o(!1)}return n.map.on({popupopen:h,popupclose:f}),n.overlayContainer==null?(i!=null&&u.setLatLng(i),u.openOn(n.map)):n.overlayContainer.bindPopup(u),function(){var w;n.map.off({popupopen:h,popupclose:f}),(w=n.overlayContainer)==null||w.unbindPopup(),n.map.removeLayer(u)}},[t,n,o,i])}),Ob=DA(function({url:t,...n},i){const o=new pn.TileLayer(t,Nu(n,i));return Du(o,i)},function(t,n,i){OA(t,n,i);const{url:o}=n;o!=null&&o!==i.url&&t.setUrl(o)}),mh=g.div`
  padding: ${e=>e.theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
`,HA=g(G)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,ZA=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.lg};
  margin-bottom: ${e=>e.theme.spacing.lg};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,WA=g(X)`
  grid-column: 1 / -1;
  margin-bottom: ${e=>e.theme.spacing.lg};
`,VA=g(Nb)`
  height: 400px;
  width: 100%;
  border-radius: ${e=>e.theme.borderRadius.md};
  
  .leaflet-control-container {
    .leaflet-top.leaflet-left {
      .leaflet-control-zoom {
        background-color: ${e=>e.theme.colors.surface.dark};
        border: 1px solid ${e=>e.theme.colors.primary.orange};
        border-radius: ${e=>e.theme.borderRadius.sm};
        
        a {
          background-color: ${e=>e.theme.colors.surface.medium};
          color: ${e=>e.theme.colors.text.primary};
          border: none;
          
          &:hover {
            background-color: ${e=>e.theme.colors.primary.orange};
            color: ${e=>e.theme.colors.text.inverse};
          }
        }
      }
    }
  }
`,qA=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,jo=g.div`
  text-align: center;
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.blue};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
`,Co=g.div`
  font-size: ${e=>e.theme.typography.fontSize.xxl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.blue};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,$o=g.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`,GA=g.div`
  display: grid;
  gap: ${e=>e.theme.spacing.sm};
`,Ti=g.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${e=>e.theme.spacing.md};
  padding: ${e=>e.theme.spacing.sm} 0;
  border-bottom: 1px solid ${e=>e.theme.colors.surface.light};
  
  &:last-child {
    border-bottom: none;
  }
`,Li=g.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,Ei=g.div`
  font-size: ${e=>e.theme.typography.fontSize.md};
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,KA=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,Js=g.div`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.purple};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
  text-align: center;
`,Xs=g.div`
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.purple};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,ea=g.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`,QA=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,YA=g.div`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.blue};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
`,JA=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,XA=g.div`
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.blue};
  text-transform: uppercase;
  letter-spacing: 1px;
`,ez=g.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  color: ${e=>e.theme.colors.text.secondary};
`,tz=g.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.muted};
`,nz=g.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.primary.orange};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  text-transform: uppercase;
  letter-spacing: 2px;
`,rz=g.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.status.error};
  font-size: ${e=>e.theme.typography.fontSize.lg};
`,iz=g.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.lg};
`,oz=g(X)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,sz=g(X)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,az=new pn.Icon({iconUrl:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiM2NkZGNjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4KPC9zdmc+",iconSize:[24,24],iconAnchor:[12,12]}),lz=new pn.Icon({iconUrl:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNGRjY2NjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4KPC9zdmc+",iconSize:[24,24],iconAnchor:[12,12]}),cz=new pn.Icon({iconUrl:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiNGRkZGNjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4KPC9zdmc+",iconSize:[20,20],iconAnchor:[10,10]}),uz=()=>{var v,x,_,k,M,A,N,F,U;const{id:e}=Cr(),{data:t,isLoading:n,error:i}=kb(e),{data:o}=Vt(),l=R=>{const Z=Math.floor(R/3600),J=Math.floor(R%3600/60);return`${Z}h ${J}m`},u=R=>`${(R*539957e-9).toFixed(1)} nm`,h=R=>`${R.toFixed(1)} kts`,f=R=>new Date(R).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),m=(R,Z)=>{const J=R>=0?"N":"S",de=Z>=0?"E":"W";return`${Math.abs(R).toFixed(6)}°${J}, ${Math.abs(Z).toFixed(6)}°${de}`},w=R=>{const Z=o==null?void 0:o.find(J=>J.id===R);return(Z==null?void 0:Z.name)||"Unknown Boat"},y=R=>R.map(Z=>[Z.latitude,Z.longitude]),S=R=>{if(R.length===0)return[0,0];const Z=R.reduce((de,_e)=>de+_e.latitude,0)/R.length,J=R.reduce((de,_e)=>de+_e.longitude,0)/R.length;return[Z,J]};if(n)return s.jsx(mh,{children:s.jsx(nz,{children:"Loading Trip Data..."})});if(i||!t)return s.jsx(mh,{children:s.jsx(rz,{children:i?`Error loading trip: ${i.message}`:"Trip not found"})});const b=y(t.gpsPoints),$=S(t.gpsPoints),j=t.gpsPoints[0],T=t.gpsPoints[t.gpsPoints.length-1];return s.jsxs(mh,{children:[s.jsx(HA,{as:st,to:"/trips",variant:"secondary",size:"sm",children:"← Back to Trip Log"}),s.jsxs(ce,{children:["Trip Analysis - ",w(t.boatId)," - ",f(t.startTime)]}),b.length>0&&s.jsx(WA,{title:"Navigation Route",variant:"accent",children:s.jsxs(VA,{center:$,zoom:13,scrollWheelZoom:!0,children:[s.jsx(Ob,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),s.jsx(Db,{positions:b,color:"#FF9966",weight:3,opacity:.8}),j&&s.jsx(Or,{position:[j.latitude,j.longitude],icon:az,children:s.jsxs(Fr,{children:[s.jsx("strong",{children:"Trip Start"}),s.jsx("br",{}),f(t.startTime),s.jsx("br",{}),m(j.latitude,j.longitude)]})}),T&&s.jsx(Or,{position:[T.latitude,T.longitude],icon:lz,children:s.jsxs(Fr,{children:[s.jsx("strong",{children:"Trip End"}),s.jsx("br",{}),f(t.endTime),s.jsx("br",{}),m(T.latitude,T.longitude)]})}),(((v=t.statistics)==null?void 0:v.stopPoints)||[]).map((R,Z)=>s.jsx(Or,{position:[R.latitude,R.longitude],icon:cz,children:s.jsxs(Fr,{children:[s.jsxs("strong",{children:["Stop Point ",Z+1]}),s.jsx("br",{}),"Duration: ",l(R.durationSeconds),s.jsx("br",{}),m(R.latitude,R.longitude)]})},Z))]})}),s.jsxs(ZA,{children:[s.jsx(X,{title:"Trip Statistics",variant:"primary",children:s.jsxs(qA,{children:[s.jsxs(jo,{children:[s.jsx(Co,{children:l(((x=t.statistics)==null?void 0:x.durationSeconds)||0)}),s.jsx($o,{children:"Duration"})]}),s.jsxs(jo,{children:[s.jsx(Co,{children:u(((_=t.statistics)==null?void 0:_.distanceMeters)||0)}),s.jsx($o,{children:"Distance"})]}),s.jsxs(jo,{children:[s.jsx(Co,{children:h(((k=t.statistics)==null?void 0:k.averageSpeedKnots)||0)}),s.jsx($o,{children:"Avg Speed"})]}),s.jsxs(jo,{children:[s.jsx(Co,{children:h(((M=t.statistics)==null?void 0:M.maxSpeedKnots)||0)}),s.jsx($o,{children:"Max Speed"})]}),s.jsxs(jo,{children:[s.jsx(Co,{children:((N=(A=t.statistics)==null?void 0:A.stopPoints)==null?void 0:N.length)||0}),s.jsx($o,{children:"Stop Points"})]}),s.jsxs(jo,{children:[s.jsx(Co,{children:t.gpsPoints.length}),s.jsx($o,{children:"GPS Points"})]})]})}),s.jsx(X,{title:"Trip Information",variant:"secondary",children:s.jsxs(GA,{children:[s.jsxs(Ti,{children:[s.jsx(Li,{children:"Vessel"}),s.jsx(Ei,{children:w(t.boatId)})]}),s.jsxs(Ti,{children:[s.jsx(Li,{children:"Start Time"}),s.jsx(Ei,{children:f(t.startTime)})]}),s.jsxs(Ti,{children:[s.jsx(Li,{children:"End Time"}),s.jsx(Ei,{children:f(t.endTime)})]}),s.jsxs(Ti,{children:[s.jsx(Li,{children:"Water Type"}),s.jsx(Ei,{children:t.waterType.toUpperCase()})]}),s.jsxs(Ti,{children:[s.jsx(Li,{children:"Role"}),s.jsx(Ei,{children:t.role.toUpperCase()})]}),j&&s.jsxs(Ti,{children:[s.jsx(Li,{children:"Start Position"}),s.jsx(Ei,{children:m(j.latitude,j.longitude)})]}),T&&s.jsxs(Ti,{children:[s.jsx(Li,{children:"End Position"}),s.jsx(Ei,{children:m(T.latitude,T.longitude)})]})]})})]}),t.manualData&&s.jsx(oz,{title:"Manual Data Entry",variant:"accent",children:s.jsxs(KA,{children:[t.manualData.engineHours!==void 0&&s.jsxs(Js,{children:[s.jsx(Xs,{children:t.manualData.engineHours}),s.jsx(ea,{children:"Engine Hours"})]}),t.manualData.fuelConsumed!==void 0&&s.jsxs(Js,{children:[s.jsx(Xs,{children:t.manualData.fuelConsumed}),s.jsx(ea,{children:"Fuel Consumed"})]}),t.manualData.numberOfPassengers!==void 0&&s.jsxs(Js,{children:[s.jsx(Xs,{children:t.manualData.numberOfPassengers}),s.jsx(ea,{children:"Passengers"})]}),t.manualData.weatherConditions&&s.jsxs(Js,{children:[s.jsx(Xs,{children:t.manualData.weatherConditions}),s.jsx(ea,{children:"Weather"})]}),t.manualData.destination&&s.jsxs(Js,{children:[s.jsx(Xs,{children:t.manualData.destination}),s.jsx(ea,{children:"Destination"})]})]})}),(((F=t.statistics)==null?void 0:F.stopPoints)||[]).length>0&&s.jsx(sz,{title:"Stop Points Analysis",variant:"primary",children:s.jsx(QA,{children:(((U=t.statistics)==null?void 0:U.stopPoints)||[]).map((R,Z)=>s.jsxs(YA,{children:[s.jsxs(JA,{children:[s.jsxs(XA,{children:["Stop Point ",Z+1]}),s.jsx(ez,{children:l(R.durationSeconds)})]}),s.jsx(tz,{children:m(R.latitude,R.longitude)}),s.jsxs("div",{style:{fontSize:"0.8rem",color:"#999",marginTop:"0.5rem"},children:[f(R.startTime)," - ",f(R.endTime)]})]},Z))})}),s.jsxs(iz,{children:[s.jsx(st,{to:`/trips/${t.id}/edit`,style:{textDecoration:"none"},children:s.jsx(G,{variant:"primary",children:"Edit Trip Data"})}),s.jsx(G,{variant:"secondary",children:"Export Data"})]})]})},gh=g.div`
  padding: ${e=>e.theme.spacing.lg};
  max-width: 1000px;
  margin: 0 auto;
`,dz=g(G)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,hz=g.div`
  display: grid;
  gap: ${e=>e.theme.spacing.lg};
`,rx=g(X)`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,ta=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`,On=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,Fn=g.label`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,ko=g.input`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.orange};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.orangeLight};
    box-shadow: 0 0 0 2px rgba(255, 153, 102, 0.2);
  }
  
  &:disabled {
    background-color: ${e=>e.theme.colors.surface.dark};
    color: ${e=>e.theme.colors.text.muted};
    cursor: not-allowed;
  }
`,yh=g.select`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.orange};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.orangeLight};
    box-shadow: 0 0 0 2px rgba(255, 153, 102, 0.2);
  }
`,fz=g.textarea`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 1px solid ${e=>e.theme.colors.primary.orange};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  resize: vertical;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.orangeLight};
    box-shadow: 0 0 0 2px rgba(255, 153, 102, 0.2);
  }
`,vh=g.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${e=>e.theme.spacing.lg};
`,pz=g.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.primary.orange};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  text-transform: uppercase;
  letter-spacing: 2px;
`,mz=g.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.status.error};
  font-size: ${e=>e.theme.typography.fontSize.lg};
`,gz=g.div`
  background-color: rgba(102, 255, 102, 0.1);
  border: 1px solid ${e=>e.theme.colors.status.success};
  border-radius: ${e=>e.theme.borderRadius.md};
  color: ${e=>e.theme.colors.status.success};
  padding: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
  text-align: center;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
`,yz=()=>{const{id:e}=Cr(),{data:t,isLoading:n,error:i}=kb(e),{data:o}=Vt(),l=yP(),u=vP(),[h,f]=z.useState({waterType:"inland",role:"captain",boatId:""}),[m,w]=z.useState({}),[y,S]=z.useState("");z.useEffect(()=>{t&&(f({waterType:t.waterType,role:t.role,boatId:t.boatId}),t.manualData&&w({engineHours:t.manualData.engineHours,fuelConsumed:t.manualData.fuelConsumed,weatherConditions:t.manualData.weatherConditions,numberOfPassengers:t.manualData.numberOfPassengers,destination:t.manualData.destination}))},[t]);const b=(_,k)=>{f(M=>({...M,[_]:k}))},$=(_,k)=>{w(M=>({...M,[_]:k===""?void 0:k}))},j=async()=>{if(t)try{await l.mutateAsync({id:t.id,data:h}),S("Trip information updated successfully!"),setTimeout(()=>S(""),3e3)}catch(_){console.error("Error updating trip:",_)}},T=async()=>{if(!t)return;const _={};Object.entries(m).forEach(([k,M])=>{M!==void 0&&M!==""&&(_[k]=M)});try{await u.mutateAsync({tripId:t.id,data:_}),S("Manual data updated successfully!"),setTimeout(()=>S(""),3e3)}catch(k){console.error("Error updating manual data:",k)}},v=_=>new Date(_).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),x=_=>{const k=o==null?void 0:o.find(M=>M.id===_);return(k==null?void 0:k.name)||"Unknown Boat"};return n?s.jsx(gh,{children:s.jsx(pz,{children:"Loading Trip Data..."})}):i||!t?s.jsx(gh,{children:s.jsx(mz,{children:i?`Error loading trip: ${i.message}`:"Trip not found"})}):s.jsxs(gh,{children:[s.jsx(dz,{as:st,to:`/trips/${t.id}`,variant:"secondary",size:"sm",children:"← Back to Trip Details"}),s.jsxs(ce,{children:["Edit Trip Data - ",x(t.boatId)," - ",v(t.startTime)]}),y&&s.jsx(gz,{children:y}),s.jsxs(hz,{children:[s.jsxs(rx,{title:"Trip Information",variant:"primary",children:[s.jsxs(ta,{children:[s.jsxs(On,{children:[s.jsx(Fn,{children:"Vessel"}),s.jsx(yh,{value:h.boatId,onChange:_=>b("boatId",_.target.value),children:o==null?void 0:o.map(_=>s.jsx("option",{value:_.id,children:_.name},_.id))})]}),s.jsxs(On,{children:[s.jsx(Fn,{children:"Water Type"}),s.jsxs(yh,{value:h.waterType,onChange:_=>b("waterType",_.target.value),children:[s.jsx("option",{value:"inland",children:"Inland"}),s.jsx("option",{value:"coastal",children:"Coastal/Nearshore"}),s.jsx("option",{value:"offshore",children:"Offshore"})]})]}),s.jsxs(On,{children:[s.jsx(Fn,{children:"Role"}),s.jsxs(yh,{value:h.role,onChange:_=>b("role",_.target.value),children:[s.jsx("option",{value:"captain",children:"Captain"}),s.jsx("option",{value:"crew",children:"Crew"}),s.jsx("option",{value:"observer",children:"Observer"})]})]})]}),s.jsxs(ta,{children:[s.jsxs(On,{children:[s.jsx(Fn,{children:"Start Time"}),s.jsx(ko,{type:"text",value:v(t.startTime),disabled:!0})]}),s.jsxs(On,{children:[s.jsx(Fn,{children:"End Time"}),s.jsx(ko,{type:"text",value:v(t.endTime),disabled:!0})]})]}),s.jsx(vh,{children:s.jsx(G,{variant:"primary",onClick:j,disabled:l.isPending,children:l.isPending?"Saving...":"Save Trip Information"})})]}),s.jsxs(rx,{title:"Manual Data Entry",variant:"secondary",children:[s.jsxs(ta,{children:[s.jsxs(On,{children:[s.jsx(Fn,{children:"Engine Hours"}),s.jsx(ko,{type:"number",step:"0.1",min:"0",placeholder:"0.0",value:m.engineHours||"",onChange:_=>$("engineHours",parseFloat(_.target.value))})]}),s.jsxs(On,{children:[s.jsx(Fn,{children:"Fuel Consumed (gallons)"}),s.jsx(ko,{type:"number",step:"0.1",min:"0",placeholder:"0.0",value:m.fuelConsumed||"",onChange:_=>$("fuelConsumed",parseFloat(_.target.value))})]}),s.jsxs(On,{children:[s.jsx(Fn,{children:"Number of Passengers"}),s.jsx(ko,{type:"number",min:"0",placeholder:"0",value:m.numberOfPassengers||"",onChange:_=>$("numberOfPassengers",parseInt(_.target.value))})]})]}),s.jsx(ta,{children:s.jsxs(On,{children:[s.jsx(Fn,{children:"Destination"}),s.jsx(ko,{type:"text",placeholder:"Enter destination",value:m.destination||"",onChange:_=>$("destination",_.target.value)})]})}),s.jsx(ta,{children:s.jsxs(On,{children:[s.jsx(Fn,{children:"Weather Conditions"}),s.jsx(fz,{placeholder:"Describe weather conditions, sea state, visibility, etc.",value:m.weatherConditions||"",onChange:_=>$("weatherConditions",_.target.value)})]})}),s.jsx(vh,{children:s.jsx(G,{variant:"secondary",onClick:T,disabled:u.isPending,children:u.isPending?"Saving...":"Save Manual Data"})})]})]}),s.jsxs(vh,{children:[s.jsx(st,{to:`/trips/${t.id}`,style:{textDecoration:"none"},children:s.jsx(G,{variant:"accent",children:"View Trip Details"})}),s.jsx(st,{to:"/trips",style:{textDecoration:"none"},children:s.jsx(G,{variant:"secondary",children:"Back to Trip Log"})})]})]})},Fb=e=>zt({queryKey:["notes",e],queryFn:()=>pe.getNotes(e)}),Bb=e=>zt({queryKey:["notes",e],queryFn:()=>pe.getNote(e),enabled:!!e}),vz=()=>{const e=Ke();return lt({mutationFn:t=>pe.createNote(t),onSuccess:()=>{e.invalidateQueries({queryKey:["notes"]})}})},xz=()=>{const e=Ke();return lt({mutationFn:({id:t,data:n})=>pe.updateNote(t,n),onSuccess:t=>{e.invalidateQueries({queryKey:["notes"]}),e.setQueryData(["notes",t.id],t)}})},Ub=()=>{const e=Ke();return lt({mutationFn:t=>pe.deleteNote(t),onSuccess:()=>{e.invalidateQueries({queryKey:["notes"]})}})},Hb=()=>{const{data:e}=Fb();return((e==null?void 0:e.reduce((n,i)=>(i.tags.forEach(o=>{n.includes(o)||n.push(o)}),n),[]))||[]).sort()},ix=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,_z=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,wz=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,ql=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Gl=g.label`
  color: ${e=>e.theme.colors.primary.orange};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,xh=g.select`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.blue};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.orange};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }
  
  option {
    background-color: ${e=>e.theme.colors.surface.dark};
    color: ${e=>e.theme.colors.text.primary};
  }
`,bz=g.input`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.blue};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.orange};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
  }
`,Sz=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,jz=g.div`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.purple};
  border-radius: ${e=>e.theme.borderRadius.lg};
  padding: ${e=>e.theme.spacing.md};
  cursor: pointer;
  transition: all ${e=>e.theme.animation.normal} ease;
  
  &:hover {
    border-color: ${e=>e.theme.colors.primary.orange};
    box-shadow: ${e=>e.theme.shadows.glow};
  }
`,Cz=g.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,$z=g.span`
  background-color: ${e=>{switch(e.type){case"boat":return e.theme.colors.primary.blue;case"trip":return e.theme.colors.primary.purple;default:return e.theme.colors.primary.orange}}};
  color: ${e=>e.theme.colors.text.inverse};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
`,kz=g.div`
  display: flex;
  gap: ${e=>e.theme.spacing.xs};
`,ox=g.button`
  background: none;
  border: 1px solid ${e=>e.theme.colors.primary.blue};
  color: ${e=>e.theme.colors.primary.blue};
  padding: ${e=>e.theme.spacing.xs};
  border-radius: ${e=>e.theme.borderRadius.sm};
  cursor: pointer;
  font-size: ${e=>e.theme.typography.fontSize.xs};
  transition: all ${e=>e.theme.animation.fast} ease;
  
  &:hover {
    border-color: ${e=>e.theme.colors.primary.orange};
    color: ${e=>e.theme.colors.primary.orange};
  }
  
  &.danger:hover {
    border-color: ${e=>e.theme.colors.status.error};
    color: ${e=>e.theme.colors.status.error};
  }
`,Tz=g.div`
  color: ${e=>e.theme.colors.text.primary};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  margin-bottom: ${e=>e.theme.spacing.sm};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Lz=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.xs};
  margin-bottom: ${e=>e.theme.spacing.sm};
`,Ez=g.span`
  background-color: ${e=>e.theme.colors.surface.medium};
  color: ${e=>e.theme.colors.text.secondary};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  border: 1px solid ${e=>e.theme.colors.primary.blue};
`,Pz=g.div`
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  text-align: right;
`,Az=g.div`
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
    color: ${e=>e.theme.colors.primary.orange};
  }
`,zz=()=>{const e=xt(),[t,n]=z.useState(""),[i,o]=z.useState(""),[l,u]=z.useState(""),[h,f]=z.useState(""),{data:m}=Vt(),w=Hb(),y=z.useMemo(()=>{const A={};return t&&(A.type=t),i&&(A.boatId=i),l&&(A.tags=[l]),A},[t,i,l]),{data:S,isLoading:b}=Fb(y),$=Ub(),j=z.useMemo(()=>S?S.filter(A=>{if(h){const N=h.toLowerCase();return A.content.toLowerCase().includes(N)||A.tags.some(F=>F.toLowerCase().includes(N))}return!0}):[],[S,h]),T=()=>{e("/notes/new")},v=(A,N)=>{N.stopPropagation(),e(`/notes/${A}/edit`)},x=async(A,N)=>{if(N.stopPropagation(),window.confirm("Are you sure you want to delete this note?"))try{await $.mutateAsync(A)}catch(F){console.error("Failed to delete note:",F)}},_=A=>{e(`/notes/${A}`)},k=A=>new Date(A).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),M=A=>{if(!A||!m)return null;const N=m.find(F=>F.id===A);return N==null?void 0:N.name};return b?s.jsxs(ix,{children:[s.jsx(ce,{level:1,children:"Notes Database"}),s.jsx(X,{title:"Loading",children:s.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading notes..."})})]}):s.jsxs(ix,{children:[s.jsxs(_z,{children:[s.jsx(ce,{level:1,children:"Notes Database"}),s.jsx(G,{onClick:T,children:"Create New Note"})]}),s.jsx(X,{title:"Filters",variant:"secondary",children:s.jsxs(wz,{children:[s.jsxs(ql,{children:[s.jsx(Gl,{children:"Note Type"}),s.jsxs(xh,{value:t,onChange:A=>n(A.target.value),children:[s.jsx("option",{value:"",children:"All Types"}),s.jsx("option",{value:"general",children:"General"}),s.jsx("option",{value:"boat",children:"Boat-Specific"}),s.jsx("option",{value:"trip",children:"Trip"})]})]}),s.jsxs(ql,{children:[s.jsx(Gl,{children:"Boat"}),s.jsxs(xh,{value:i,onChange:A=>o(A.target.value),disabled:t==="general"||t==="trip",children:[s.jsx("option",{value:"",children:"All Boats"}),m==null?void 0:m.map(A=>s.jsx("option",{value:A.id,children:A.name},A.id))]})]}),s.jsxs(ql,{children:[s.jsx(Gl,{children:"Tag"}),s.jsxs(xh,{value:l,onChange:A=>u(A.target.value),children:[s.jsx("option",{value:"",children:"All Tags"}),w.map(A=>s.jsx("option",{value:A,children:A},A))]})]}),s.jsxs(ql,{children:[s.jsx(Gl,{children:"Search"}),s.jsx(bz,{type:"text",placeholder:"Search notes content...",value:h,onChange:A=>f(A.target.value)})]})]})}),j.length===0?s.jsx(X,{children:s.jsxs(Az,{children:[s.jsx("div",{className:"empty-icon",children:"📝"}),s.jsx("div",{className:"empty-title",children:"No Notes Found"}),s.jsx("div",{children:(S==null?void 0:S.length)===0?"Create your first note to get started.":"Try adjusting your filters to find notes."})]})}):s.jsx(Sz,{children:j.map(A=>s.jsxs(jz,{onClick:()=>_(A.id),children:[s.jsxs(Cz,{children:[s.jsxs($z,{type:A.type,children:[A.type,A.type==="boat"&&M(A.boatId)&&` - ${M(A.boatId)}`]}),s.jsxs(kz,{children:[s.jsx(ox,{onClick:N=>v(A.id,N),children:"Edit"}),s.jsx(ox,{className:"danger",onClick:N=>x(A.id,N),children:"Delete"})]})]}),s.jsx(Tz,{children:A.content}),A.tags.length>0&&s.jsx(Lz,{children:A.tags.map(N=>s.jsx(Ez,{children:N},N))}),s.jsxs(Pz,{children:[k(A.createdAt),A.updatedAt!==A.createdAt&&" (edited)"]})]},A.id))})]})},_h=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,Mz=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Rz=g.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,Iz=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,To=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,Lo=g.span`
  color: ${e=>e.theme.colors.primary.orange};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,Eo=g.span`
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
`,Nz=g.span`
  background-color: ${e=>{switch(e.type){case"boat":return e.theme.colors.primary.blue;case"trip":return e.theme.colors.primary.purple;default:return e.theme.colors.primary.orange}}};
  color: ${e=>e.theme.colors.text.inverse};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
`,Dz=g.div`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.blue};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.lg};
  color: ${e=>e.theme.colors.text.primary};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  white-space: pre-wrap;
  font-size: ${e=>e.theme.typography.fontSize.md};
`,Oz=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.sm};
`,Fz=g.span`
  background-color: ${e=>e.theme.colors.primary.purple};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Bz=g.span`
  color: ${e=>e.theme.colors.text.muted};
  font-style: italic;
`,Uz=g.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.text.muted};
`,Hz=g.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xxl};
  color: ${e=>e.theme.colors.status.error};
`,Zz=()=>{const e=xt(),{id:t}=Cr(),{data:n,isLoading:i,error:o}=Bb(t||""),{data:l}=Vt(),{data:u}=vi(),h=Ub(),f=()=>{e(`/notes/${t}/edit`)},m=async()=>{if(window.confirm("Are you sure you want to delete this note?"))try{await h.mutateAsync(t),e("/notes")}catch($){console.error("Failed to delete note:",$)}},w=()=>{e("/notes")},y=$=>new Date($).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),S=$=>{if(!$||!l)return"Unknown Boat";const j=l.find(T=>T.id===$);return(j==null?void 0:j.name)||"Unknown Boat"},b=$=>{if(!$||!u)return"Unknown Trip";const j=u.find(x=>x.id===$);if(!j)return"Unknown Trip";const T=S(j.boatId);return`${new Date(j.startTime).toLocaleDateString()} - ${T}`};return i?s.jsxs(_h,{children:[s.jsx(ce,{level:1,children:"Note Details"}),s.jsx(X,{children:s.jsx(Uz,{children:"Loading note..."})})]}):o||!n?s.jsxs(_h,{children:[s.jsx(ce,{level:1,children:"Note Details"}),s.jsx(X,{children:s.jsxs(Hz,{children:["Note not found or failed to load.",s.jsx("div",{style:{marginTop:"1rem"},children:s.jsx(G,{onClick:w,children:"Back to Notes"})})]})})]}):s.jsxs(_h,{children:[s.jsxs(Mz,{children:[s.jsx(ce,{level:1,children:"Note Details"}),s.jsxs(Rz,{children:[s.jsx(G,{variant:"secondary",onClick:w,children:"Back to Notes"}),s.jsx(G,{variant:"accent",onClick:f,children:"Edit Note"}),s.jsx(G,{variant:"danger",onClick:m,disabled:h.isPending,children:h.isPending?"Deleting...":"Delete"})]})]}),s.jsx(X,{title:"Note Information",children:s.jsxs(Iz,{children:[s.jsxs(To,{children:[s.jsx(Lo,{children:"Type"}),s.jsx(Eo,{children:s.jsx(Nz,{type:n.type,children:n.type})})]}),n.type==="boat"&&n.boatId&&s.jsxs(To,{children:[s.jsx(Lo,{children:"Boat"}),s.jsx(Eo,{children:S(n.boatId)})]}),n.type==="trip"&&n.tripId&&s.jsxs(To,{children:[s.jsx(Lo,{children:"Trip"}),s.jsx(Eo,{children:b(n.tripId)})]}),s.jsxs(To,{children:[s.jsx(Lo,{children:"Created"}),s.jsx(Eo,{children:y(n.createdAt)})]}),n.updatedAt!==n.createdAt&&s.jsxs(To,{children:[s.jsx(Lo,{children:"Last Modified"}),s.jsx(Eo,{children:y(n.updatedAt)})]}),s.jsxs(To,{children:[s.jsx(Lo,{children:"Tags"}),s.jsx(Eo,{children:n.tags.length>0?s.jsx(Oz,{children:n.tags.map($=>s.jsx(Fz,{children:$},$))}):s.jsx(Bz,{children:"No tags"})})]})]})}),s.jsx(X,{title:"Content",children:s.jsx(Dz,{children:n.content})})]})},sx=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,Wz=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Vz=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,Kl=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Po=g.label`
  color: ${e=>e.theme.colors.primary.orange};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,wh=g.select`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.blue};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.orange};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }
  
  option {
    background-color: ${e=>e.theme.colors.surface.dark};
    color: ${e=>e.theme.colors.text.primary};
  }
`,qz=g.textarea`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.blue};
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
    border-color: ${e=>e.theme.colors.primary.orange};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
  }
`,Gz=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Kz=g.input`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.blue};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.orange};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
  }
`,Qz=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.sm};
`,Yz=g.span`
  background-color: ${e=>e.theme.colors.primary.purple};
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
`,Jz=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.xs};
  margin-top: ${e=>e.theme.spacing.sm};
`,Xz=g.button`
  background: none;
  border: 1px solid ${e=>e.theme.colors.primary.blue};
  color: ${e=>e.theme.colors.primary.blue};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  cursor: pointer;
  transition: all ${e=>e.theme.animation.fast} ease;
  
  &:hover {
    border-color: ${e=>e.theme.colors.primary.orange};
    color: ${e=>e.theme.colors.primary.orange};
    background-color: ${e=>e.theme.colors.primary.orange}20;
  }
`,eM=g.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${e=>e.theme.spacing.lg};
`,tM=g.div`
  color: ${e=>e.theme.colors.status.error};
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.status.error};
  padding: ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.borderRadius.md};
  margin-bottom: ${e=>e.theme.spacing.md};
`,ax=()=>{const e=xt(),{id:t}=Cr(),n=!!t&&t!=="new",[i,o]=z.useState("general"),[l,u]=z.useState(""),[h,f]=z.useState(""),[m,w]=z.useState(""),[y,S]=z.useState([]),[b,$]=z.useState(""),[j,T]=z.useState(""),{data:v,isLoading:x}=Bb(t||""),{data:_}=Vt(),{data:k}=vi(),M=Hb(),A=vz(),N=xz();z.useEffect(()=>{v&&n&&(o(v.type),u(v.boatId||""),f(v.tripId||""),w(v.content),S(v.tags))},[v,n]);const F=()=>{const ne=b.trim();ne&&!y.includes(ne)&&(S([...y,ne]),$(""))},U=ne=>{S(y.filter(ue=>ue!==ne))},R=ne=>{y.includes(ne)||S([...y,ne])},Z=ne=>{ne.key==="Enter"&&(ne.preventDefault(),F())},J=async()=>{if(T(""),!m.trim()){T("Note content is required");return}if(i==="boat"&&!l){T("Please select a boat for boat-specific notes");return}if(i==="trip"&&!h){T("Please select a trip for trip notes");return}try{const ne={content:m.trim(),type:i,boatId:i==="boat"?l:void 0,tripId:i==="trip"?h:void 0,tags:y};n?await N.mutateAsync({id:t,data:ne}):await A.mutateAsync(ne),e("/notes")}catch(ne){console.error("Failed to save note:",ne),T("Failed to save note. Please try again.")}},de=()=>{e("/notes")},_e=M.filter(ne=>!y.includes(ne));return x&&n?s.jsxs(sx,{children:[s.jsx(ce,{level:1,children:"Loading Note"}),s.jsx(X,{title:"Loading",children:s.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading note data..."})})]}):s.jsxs(sx,{children:[s.jsx(Wz,{children:s.jsx(ce,{level:1,children:n?"Edit Note":"Create New Note"})}),s.jsx(X,{title:"Note Details",children:s.jsxs(Vz,{children:[j&&s.jsx(tM,{children:j}),s.jsxs(Kl,{children:[s.jsx(Po,{children:"Note Type"}),s.jsxs(wh,{value:i,onChange:ne=>{o(ne.target.value),u(""),f("")},children:[s.jsx("option",{value:"general",children:"General Note"}),s.jsx("option",{value:"boat",children:"Boat-Specific Note"}),s.jsx("option",{value:"trip",children:"Trip Note"})]})]}),i==="boat"&&s.jsxs(Kl,{children:[s.jsx(Po,{children:"Boat"}),s.jsxs(wh,{value:l,onChange:ne=>u(ne.target.value),children:[s.jsx("option",{value:"",children:"Select a boat"}),_==null?void 0:_.map(ne=>s.jsx("option",{value:ne.id,children:ne.name},ne.id))]})]}),i==="trip"&&s.jsxs(Kl,{children:[s.jsx(Po,{children:"Trip"}),s.jsxs(wh,{value:h,onChange:ne=>f(ne.target.value),children:[s.jsx("option",{value:"",children:"Select a trip"}),k==null?void 0:k.map(ne=>{var ue;return s.jsxs("option",{value:ne.id,children:[new Date(ne.startTime).toLocaleDateString()," - ",((ue=_==null?void 0:_.find(Qe=>Qe.id===ne.boatId))==null?void 0:ue.name)||"Unknown Boat"]},ne.id)})]})]}),s.jsxs(Kl,{children:[s.jsx(Po,{children:"Content"}),s.jsx(qz,{value:m,onChange:ne=>w(ne.target.value),placeholder:"Enter your note content here..."})]}),s.jsxs(Gz,{children:[s.jsx(Po,{children:"Tags"}),s.jsx(Kz,{type:"text",value:b,onChange:ne=>$(ne.target.value),onKeyPress:Z,placeholder:"Add a tag and press Enter"}),y.length>0&&s.jsx(Qz,{children:y.map(ne=>s.jsxs(Yz,{children:[ne,s.jsx("button",{className:"remove-tag",onClick:()=>U(ne),type:"button",children:"×"})]},ne))}),_e.length>0&&s.jsxs("div",{children:[s.jsx(Po,{style:{fontSize:"12px",marginBottom:"8px"},children:"Suggested Tags"}),s.jsx(Jz,{children:_e.slice(0,10).map(ne=>s.jsx(Xz,{onClick:()=>R(ne),type:"button",children:ne},ne))})]})]}),s.jsxs(eM,{children:[s.jsx(G,{variant:"secondary",onClick:de,children:"Cancel"}),s.jsx(G,{onClick:J,disabled:A.isPending||N.isPending,children:A.isPending||N.isPending?"Saving...":"Save Note"})]})]})})]})},Fu={todoLists:e=>["todoLists",e],todoList:e=>["todoList",e]},nM=e=>zt({queryKey:Fu.todoLists(e),queryFn:()=>pe.getTodoLists(e)}),rM=e=>zt({queryKey:Fu.todoList(e),queryFn:()=>pe.getTodoList(e),enabled:!!e}),iM=()=>{const e=Ke();return lt({mutationFn:t=>pe.createTodoList(t),onSuccess:()=>{e.invalidateQueries({queryKey:["todoLists"]})}})},Zb=()=>{const e=Ke();return lt({mutationFn:t=>pe.deleteTodoList(t),onSuccess:()=>{e.invalidateQueries({queryKey:["todoLists"]})}})},oM=()=>{const e=Ke();return lt({mutationFn:({listId:t,content:n})=>pe.addTodoItem(t,n),onSuccess:(t,{listId:n})=>{e.invalidateQueries({queryKey:Fu.todoList(n)}),e.invalidateQueries({queryKey:["todoLists"]})}})},sM=()=>{const e=Ke();return lt({mutationFn:t=>pe.toggleTodoItem(t),onSuccess:t=>{e.invalidateQueries({queryKey:Fu.todoList(t.listId)}),e.invalidateQueries({queryKey:["todoLists"]})}})},lx=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,aM=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,lM=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,cx=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,ux=g.label`
  color: ${e=>e.theme.colors.primary.orange};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,dx=g.select`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.blue};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.orange};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }
  
  option {
    background-color: ${e=>e.theme.colors.surface.dark};
    color: ${e=>e.theme.colors.text.primary};
  }
`,cM=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,uM=g.div`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.purple};
  border-radius: ${e=>e.theme.borderRadius.lg};
  padding: ${e=>e.theme.spacing.md};
  cursor: pointer;
  transition: all ${e=>e.theme.animation.normal} ease;
  
  &:hover {
    border-color: ${e=>e.theme.colors.primary.orange};
    box-shadow: ${e=>e.theme.shadows.glow};
  }
`,dM=g.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,hM=g.h3`
  color: ${e=>e.theme.colors.text.primary};
  font-size: ${e=>e.theme.typography.fontSize.lg};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  margin: 0;
  flex: 1;
`,fM=g.span`
  background-color: ${e=>{switch(e.type){case"boat":return e.theme.colors.primary.blue;default:return e.theme.colors.primary.orange}}};
  color: ${e=>e.theme.colors.text.inverse};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left: ${e=>e.theme.spacing.sm};
`,pM=g.div`
  display: flex;
  gap: ${e=>e.theme.spacing.xs};
  margin-left: ${e=>e.theme.spacing.sm};
`,mM=g.button`
  background: none;
  border: 1px solid ${e=>e.theme.colors.primary.blue};
  color: ${e=>e.theme.colors.primary.blue};
  padding: ${e=>e.theme.spacing.xs};
  border-radius: ${e=>e.theme.borderRadius.sm};
  cursor: pointer;
  font-size: ${e=>e.theme.typography.fontSize.xs};
  transition: all ${e=>e.theme.animation.fast} ease;
  
  &:hover {
    border-color: ${e=>e.theme.colors.primary.orange};
    color: ${e=>e.theme.colors.primary.orange};
  }
  
  &.danger:hover {
    border-color: ${e=>e.theme.colors.status.error};
    color: ${e=>e.theme.colors.status.error};
  }
`,gM=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.sm};
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,yM=g.div`
  background-color: ${e=>e.theme.colors.surface.medium};
  border-radius: ${e=>e.theme.borderRadius.pill};
  height: 8px;
  overflow: hidden;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,vM=g.div`
  background-color: ${e=>e.theme.colors.primary.orange};
  height: 100%;
  width: ${e=>e.percentage}%;
  transition: width ${e=>e.theme.animation.normal} ease;
`,xM=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,bh=g.div`
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
    color: ${e=>e.completed?e.theme.colors.status.success:e.theme.colors.primary.blue};
  }
`,_M=g.div`
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  text-align: right;
  margin-top: ${e=>e.theme.spacing.sm};
`,wM=g.div`
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
    color: ${e=>e.theme.colors.primary.orange};
  }
`,bM=()=>{const e=xt(),[t,n]=z.useState(""),[i,o]=z.useState(""),{data:l}=Vt(),{data:u,isLoading:h}=nM(),f=Zb(),m=z.useMemo(()=>u?u.filter(T=>!(t&&T.type!==t||i&&T.boatId!==i)):[],[u,t,i]),w=()=>{e("/todos/new")},y=T=>{e(`/todos/${T}`)},S=async(T,v)=>{if(v.stopPropagation(),window.confirm("Are you sure you want to delete this to-do list? All items will be permanently removed."))try{await f.mutateAsync(T)}catch(x){console.error("Failed to delete to-do list:",x)}},b=T=>new Date(T).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),$=T=>{if(!T||!l)return null;const v=l.find(x=>x.id===T);return v==null?void 0:v.name},j=T=>{const v=T.items.length,x=T.items.filter(k=>k.completed).length,_=v>0?x/v*100:0;return{totalItems:v,completedItems:x,percentage:_}};return h?s.jsxs(lx,{children:[s.jsx(ce,{level:1,children:"To-Do Lists"}),s.jsx(X,{title:"Loading",children:s.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading to-do lists..."})})]}):s.jsxs(lx,{children:[s.jsxs(aM,{children:[s.jsx(ce,{level:1,children:"To-Do Lists"}),s.jsx(G,{onClick:w,children:"Create New List"})]}),s.jsx(X,{title:"Filters",variant:"secondary",children:s.jsxs(lM,{children:[s.jsxs(cx,{children:[s.jsx(ux,{children:"List Type"}),s.jsxs(dx,{value:t,onChange:T=>n(T.target.value),children:[s.jsx("option",{value:"",children:"All Types"}),s.jsx("option",{value:"general",children:"General"}),s.jsx("option",{value:"boat",children:"Boat-Specific"})]})]}),s.jsxs(cx,{children:[s.jsx(ux,{children:"Boat"}),s.jsxs(dx,{value:i,onChange:T=>o(T.target.value),disabled:t==="general",children:[s.jsx("option",{value:"",children:"All Boats"}),l==null?void 0:l.map(T=>s.jsx("option",{value:T.id,children:T.name},T.id))]})]})]})}),m.length===0?s.jsx(X,{children:s.jsxs(wM,{children:[s.jsx("div",{className:"empty-icon",children:"📋"}),s.jsx("div",{className:"empty-title",children:"No To-Do Lists Found"}),s.jsx("div",{children:(u==null?void 0:u.length)===0?"Create your first to-do list to get started.":"Try adjusting your filters to find lists."})]})}):s.jsx(cM,{children:m.map(T=>{const v=j(T),x=$(T.boatId);return s.jsxs(uM,{onClick:()=>y(T.id),children:[s.jsxs(dM,{children:[s.jsx(hM,{children:T.title}),s.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[s.jsxs(fM,{type:T.type,children:[T.type,x&&` - ${x}`]}),s.jsx(pM,{children:s.jsx(mM,{className:"danger",onClick:_=>S(T.id,_),children:"Delete"})})]})]}),s.jsxs(gM,{children:[s.jsxs("span",{children:[v.completedItems," of ",v.totalItems," completed"]}),s.jsxs("span",{children:[Math.round(v.percentage),"%"]})]}),s.jsx(yM,{children:s.jsx(vM,{percentage:v.percentage})}),s.jsxs(xM,{children:[T.items.slice(0,3).map(_=>s.jsx(bh,{completed:_.completed,children:_.content},_.id)),T.items.length>3&&s.jsxs(bh,{completed:!1,children:["... and ",T.items.length-3," more items"]}),T.items.length===0&&s.jsx(bh,{completed:!1,children:"No items yet"})]}),s.jsxs(_M,{children:["Created ",b(T.createdAt),T.updatedAt!==T.createdAt&&" (updated)"]})]},T.id)})})]})},Sh=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,SM=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,jM=g(G)`
  margin-right: ${e=>e.theme.spacing.md};
`,CM=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,$M=g.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,kM=g.span`
  background-color: ${e=>{switch(e.type){case"boat":return e.theme.colors.primary.blue;default:return e.theme.colors.primary.orange}}};
  color: ${e=>e.theme.colors.text.inverse};
  padding: ${e=>e.theme.spacing.xs} ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.pill};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
`,TM=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Ql=g.div`
  background-color: ${e=>e.theme.colors.surface.medium};
  border: 2px solid ${e=>e.theme.colors.primary.purple};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
  text-align: center;
`,Yl=g.div`
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  color: ${e=>e.theme.colors.primary.orange};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,Jl=g.div`
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`,LM=g.div`
  background-color: ${e=>e.theme.colors.surface.medium};
  border-radius: ${e=>e.theme.borderRadius.pill};
  height: 12px;
  overflow: hidden;
  margin-bottom: ${e=>e.theme.spacing.lg};
`,EM=g.div`
  background-color: ${e=>e.theme.colors.primary.orange};
  height: 100%;
  width: ${e=>e.percentage}%;
  transition: width ${e=>e.theme.animation.normal} ease;
`,PM=g.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,AM=g.input`
  flex: 1;
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.blue};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.orange};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
  }
`,zM=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,MM=g.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.completed?e.theme.colors.status.success:e.theme.colors.primary.blue};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing.md};
  transition: all ${e=>e.theme.animation.normal} ease;
  
  &:hover {
    border-color: ${e=>e.theme.colors.primary.orange};
  }
`,RM=g.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${e=>e.completed?e.theme.colors.status.success:e.theme.colors.primary.blue};
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
    border-color: ${e=>e.theme.colors.primary.orange};
    background-color: ${e=>e.completed?e.theme.colors.status.success:e.theme.colors.primary.orange+"40"};
  }
`,IM=g.div`
  flex: 1;
  color: ${e=>e.completed?e.theme.colors.text.muted:e.theme.colors.text.primary};
  text-decoration: ${e=>e.completed?"line-through":"none"};
  font-size: ${e=>e.theme.typography.fontSize.md};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
`,NM=g.div`
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  text-align: right;
  min-width: 120px;
`,hx=g.div`
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
    color: ${e=>e.theme.colors.primary.orange};
  }
`,fx=g.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${e=>e.theme.spacing.lg};
`,DM=g(G)`
  background-color: ${e=>e.theme.colors.status.error};
  border-color: ${e=>e.theme.colors.status.error};
  
  &:hover {
    background-color: ${e=>e.theme.colors.status.error}CC;
  }
`,OM=()=>{const e=xt(),{id:t}=Cr(),[n,i]=z.useState(""),{data:o,isLoading:l}=rM(t||""),{data:u}=Vt(),h=oM(),f=sM(),m=Zb(),w=()=>{e("/todos")},y=async _=>{if(_.preventDefault(),!(!n.trim()||!t))try{await h.mutateAsync({listId:t,content:n.trim()}),i("")}catch(k){console.error("Failed to add item:",k)}},S=async _=>{try{await f.mutateAsync(_)}catch(k){console.error("Failed to toggle item:",k)}},b=async()=>{if(t&&window.confirm("Are you sure you want to delete this to-do list? All items will be permanently removed."))try{await m.mutateAsync(t),e("/todos")}catch(_){console.error("Failed to delete to-do list:",_)}},$=_=>new Date(_).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),j=_=>{if(!_||!u)return null;const k=u.find(M=>M.id===_);return k==null?void 0:k.name},T=()=>{if(!o)return{totalItems:0,completedItems:0,percentage:0};const _=o.items.length,k=o.items.filter(A=>A.completed).length,M=_>0?k/_*100:0;return{totalItems:_,completedItems:k,percentage:M}};if(l)return s.jsxs(Sh,{children:[s.jsx(ce,{level:1,children:"Loading To-Do List"}),s.jsx(X,{title:"Loading",children:s.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading to-do list..."})})]});if(!o)return s.jsxs(Sh,{children:[s.jsx(ce,{level:1,children:"To-Do List Not Found"}),s.jsxs(X,{children:[s.jsxs(hx,{children:[s.jsx("div",{className:"empty-icon",children:"❌"}),s.jsx("div",{className:"empty-title",children:"List Not Found"}),s.jsx("div",{children:"The requested to-do list could not be found."})]}),s.jsx(fx,{children:s.jsx(G,{onClick:w,children:"Back to Lists"})})]})]});const v=T(),x=j(o.boatId);return s.jsxs(Sh,{children:[s.jsx(SM,{children:s.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[s.jsx(jM,{onClick:w,children:"← Back"}),s.jsx(ce,{level:1,children:o.title})]})}),s.jsx(CM,{children:s.jsxs($M,{children:[s.jsxs(kM,{type:o.type,children:[o.type,x&&` - ${x}`]}),s.jsxs("span",{children:["Created ",$(o.createdAt)]}),o.updatedAt!==o.createdAt&&s.jsxs("span",{children:["• Updated ",$(o.updatedAt)]})]})}),s.jsxs(TM,{children:[s.jsxs(Ql,{children:[s.jsx(Yl,{children:v.totalItems}),s.jsx(Jl,{children:"Total Items"})]}),s.jsxs(Ql,{children:[s.jsx(Yl,{children:v.completedItems}),s.jsx(Jl,{children:"Completed"})]}),s.jsxs(Ql,{children:[s.jsx(Yl,{children:v.totalItems-v.completedItems}),s.jsx(Jl,{children:"Remaining"})]}),s.jsxs(Ql,{children:[s.jsxs(Yl,{children:[Math.round(v.percentage),"%"]}),s.jsx(Jl,{children:"Progress"})]})]}),s.jsx(LM,{children:s.jsx(EM,{percentage:v.percentage})}),s.jsx(X,{title:"Add New Item",variant:"secondary",children:s.jsx("form",{onSubmit:y,children:s.jsxs(PM,{children:[s.jsx(AM,{type:"text",placeholder:"Enter new to-do item...",value:n,onChange:_=>i(_.target.value),disabled:h.isPending}),s.jsx(G,{type:"submit",disabled:!n.trim()||h.isPending,children:h.isPending?"Adding...":"Add Item"})]})})}),s.jsx(X,{title:`Items (${v.totalItems})`,children:o.items.length===0?s.jsxs(hx,{children:[s.jsx("div",{className:"empty-icon",children:"📝"}),s.jsx("div",{className:"empty-title",children:"No Items Yet"}),s.jsx("div",{children:"Add your first to-do item to get started."})]}):s.jsx(zM,{children:o.items.map(_=>s.jsxs(MM,{completed:_.completed,children:[s.jsx(RM,{completed:_.completed,onClick:()=>S(_.id),disabled:f.isPending,children:_.completed&&"✓"}),s.jsx(IM,{completed:_.completed,children:_.content}),s.jsx(NM,{children:_.completed&&_.completedAt?`Completed ${$(_.completedAt)}`:`Added ${$(_.createdAt)}`})]},_.id))})}),s.jsx(fx,{children:s.jsx(DM,{onClick:b,children:"Delete List"})})]})},FM=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 600px;
  margin: 0 auto;
`,BM=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,UM=g(G)`
  margin-right: ${e=>e.theme.spacing.md};
`,HM=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,jh=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Ch=g.label`
  color: ${e=>e.theme.colors.primary.orange};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,ZM=g.input`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.blue};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.orange};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.muted};
  }
`,px=g.select`
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.blue};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.orange};
    box-shadow: 0 0 10px rgba(255, 153, 102, 0.3);
  }
  
  option {
    background-color: ${e=>e.theme.colors.surface.dark};
    color: ${e=>e.theme.colors.text.primary};
  }
`,mx=g.div`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  margin-top: ${e=>e.theme.spacing.xs};
  padding: ${e=>e.theme.spacing.sm};
  background-color: ${e=>e.theme.colors.surface.medium};
  border-radius: ${e=>e.theme.borderRadius.sm};
  border-left: 4px solid ${e=>e.theme.colors.primary.blue};
`,WM=g.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${e=>e.theme.spacing.lg};
`,VM=g.div`
  color: ${e=>e.theme.colors.status.error};
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.status.error};
  padding: ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.borderRadius.md};
  margin-bottom: ${e=>e.theme.spacing.md};
`,qM=()=>{const e=xt(),[t,n]=z.useState(""),[i,o]=z.useState("general"),[l,u]=z.useState(""),[h,f]=z.useState(""),{data:m}=Vt(),w=iM(),y=()=>{e("/todos")},S=async $=>{if($.preventDefault(),f(""),!t.trim()){f("Please enter a title for the to-do list.");return}if(i==="boat"&&!l){f("Please select a boat for boat-specific lists.");return}try{const j=await w.mutateAsync({title:t.trim(),type:i,boatId:i==="boat"?l:void 0});e(`/todos/${j.id}`)}catch(j){console.error("Failed to create to-do list:",j),f(j.message||"Failed to create to-do list. Please try again.")}},b=()=>{switch(i){case"general":return"General lists are not associated with any specific boat and can contain any type of tasks.";case"boat":return"Boat-specific lists are associated with a particular boat and typically contain maintenance, preparation, or boat-related tasks.";default:return""}};return s.jsxs(FM,{children:[s.jsx(BM,{children:s.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[s.jsx(UM,{onClick:y,children:"← Back"}),s.jsx(ce,{level:1,children:"Create New To-Do List"})]})}),s.jsxs(X,{title:"List Details",children:[h&&s.jsx(VM,{children:h}),s.jsx("form",{onSubmit:S,children:s.jsxs(HM,{children:[s.jsxs(jh,{children:[s.jsx(Ch,{htmlFor:"title",children:"List Title *"}),s.jsx(ZM,{id:"title",type:"text",placeholder:"Enter a descriptive title for your to-do list...",value:t,onChange:$=>n($.target.value),maxLength:100,required:!0})]}),s.jsxs(jh,{children:[s.jsx(Ch,{htmlFor:"type",children:"List Type *"}),s.jsxs(px,{id:"type",value:i,onChange:$=>o($.target.value),required:!0,children:[s.jsx("option",{value:"general",children:"General"}),s.jsx("option",{value:"boat",children:"Boat-Specific"})]}),s.jsx(mx,{children:b()})]}),i==="boat"&&s.jsxs(jh,{children:[s.jsx(Ch,{htmlFor:"boat",children:"Select Boat *"}),s.jsxs(px,{id:"boat",value:l,onChange:$=>u($.target.value),required:!0,children:[s.jsx("option",{value:"",children:"Choose a boat..."}),m==null?void 0:m.map($=>s.jsx("option",{value:$.id,children:$.name},$.id))]}),(m==null?void 0:m.length)===0&&s.jsx(mx,{children:"No boats available. You'll need to create a boat first before creating boat-specific to-do lists."})]}),s.jsxs(WM,{children:[s.jsx(G,{type:"button",variant:"secondary",onClick:y,children:"Cancel"}),s.jsx(G,{type:"submit",disabled:w.isPending||i==="boat"&&(m==null?void 0:m.length)===0,children:w.isPending?"Creating...":"Create List"})]})]})})]}),s.jsx(X,{title:"Getting Started",variant:"secondary",children:s.jsxs("div",{style:{color:"#999",fontSize:"14px",lineHeight:"1.6"},children:[s.jsx("p",{children:s.jsx("strong",{children:"Tips for creating effective to-do lists:"})}),s.jsxs("ul",{style:{marginLeft:"20px",marginTop:"10px"},children:[s.jsx("li",{children:"Use descriptive titles that clearly indicate the purpose of the list"}),s.jsx("li",{children:'Choose "General" for personal tasks, shopping lists, or general reminders'}),s.jsx("li",{children:'Choose "Boat-Specific" for maintenance tasks, pre-departure checklists, or boat projects'}),s.jsx("li",{children:"You can add items to your list immediately after creating it"})]})]})})]})};function Wb(e){return zt({queryKey:["maintenance-templates",e],queryFn:()=>pe.getMaintenanceTemplates(e)})}function Vb(e,t){return zt({queryKey:["maintenance-template",e],queryFn:()=>pe.getMaintenanceTemplate(e),enabled:(t==null?void 0:t.enabled)!==void 0?t.enabled:!!e})}function GM(){const e=Ke();return lt({mutationFn:t=>pe.createMaintenanceTemplate(t),onSuccess:()=>{e.invalidateQueries({queryKey:["maintenance-templates"]})}})}function KM(){const e=Ke();return lt({mutationFn:({id:t,data:n})=>pe.updateMaintenanceTemplate(t,n),onSuccess:(t,{id:n})=>{e.invalidateQueries({queryKey:["maintenance-template",n]}),e.invalidateQueries({queryKey:["maintenance-templates"]})}})}function QM(){const e=Ke();return lt({mutationFn:t=>pe.deleteMaintenanceTemplate(t),onSuccess:()=>{e.invalidateQueries({queryKey:["maintenance-templates"]}),e.invalidateQueries({queryKey:["maintenance-events"]})}})}function Pm(e){return zt({queryKey:["maintenance-events","upcoming",e],queryFn:()=>pe.getUpcomingMaintenanceEvents(e)})}function qb(e){return zt({queryKey:["maintenance-events","completed",e],queryFn:()=>pe.getCompletedMaintenanceEvents(e)})}function YM(e){return zt({queryKey:["maintenance-event",e],queryFn:()=>pe.getMaintenanceEvent(e),enabled:!!e})}function JM(){const e=Ke();return lt({mutationFn:({id:t,data:n})=>pe.completeMaintenanceEvent(t,n),onSuccess:()=>{e.invalidateQueries({queryKey:["maintenance-events"]})}})}const XM=g.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,e2=g.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,t2=g.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,$h=g(G)`
  background-color: ${e=>e.active?e.theme.colors.primary.orange:e.theme.colors.primary.purple};
  opacity: ${e=>e.active?1:.7};
`,n2=g(X)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,gx=g.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`,yx=g(X)`
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${e=>e.theme.colors.primary.purple}20;
  }
`,vx=g.div`
  display: flex;
  justify-content: between;
  align-items: flex-start;
  margin-bottom: 10px;
`,xx=g.h3`
  color: ${e=>e.theme.colors.primary.orange};
  margin: 0;
  font-size: 18px;
  flex: 1;
`,_x=g.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
`,wx=g.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${e=>{switch(e.status){case"active":return e.theme.colors.primary.blue;case"inactive":return e.theme.colors.text.secondary;case"due":return e.theme.colors.primary.orange;case"overdue":return"#ff4444";case"completed":return"#44ff44";default:return e.theme.colors.text.secondary}}};
  color: ${e=>e.theme.colors.background};
`,r2=g.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
`,i2=g.select`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.orange};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
`;function o2(){const[e,t]=z.useState("templates"),[n,i]=z.useState(""),{data:o=[]}=Vt(),{data:l=[],isLoading:u}=Wb(n||void 0),{data:h=[],isLoading:f}=Pm(n||void 0),{data:m=[],isLoading:w}=qb(n||void 0),y=x=>{if(!x)return"One-time";const{type:_,interval:k}=x,M=k===1?_.slice(0,-1):_;return`Every ${k} ${M}`},S=x=>x?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(x):"N/A",b=x=>{if(!x)return"N/A";const _=Math.floor(x/60),k=x%60;return _>0?`${_}h ${k}m`:`${k}m`},$=x=>{if(x.completedAt)return"completed";const _=new Date(x.dueDate),k=new Date,M=Math.ceil((_.getTime()-k.getTime())/(1e3*60*60*24));return M<0?"overdue":M<=7?"due":"active"},j=()=>s.jsx(gx,{children:l.map(x=>{var _;return s.jsx(st,{to:`/maintenance/templates/${x.id}`,style:{textDecoration:"none"},children:s.jsxs(yx,{children:[s.jsxs(vx,{children:[s.jsx(xx,{children:x.title}),s.jsx(wx,{status:x.isActive?"active":"inactive",children:x.isActive?"Active":"Inactive"})]}),s.jsxs(_x,{children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Boat:"})," ",((_=x.boat)==null?void 0:_.name)||"Unknown"]}),x.component&&s.jsxs("div",{children:[s.jsx("strong",{children:"Component:"})," ",x.component]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Recurrence:"})," ",y(x.recurrence)]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Est. Cost:"})," ",S(x.estimatedCost)]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Est. Time:"})," ",b(x.estimatedTime)]})]}),x.description&&s.jsx("div",{style:{marginTop:"10px",fontSize:"14px",color:"#ccc"},children:x.description})]})},x.id)})}),T=(x,_=!1)=>s.jsx(gx,{children:x.map(k=>{var M,A,N,F;return s.jsx(st,{to:`/maintenance/events/${k.id}`,style:{textDecoration:"none"},children:s.jsxs(yx,{children:[s.jsxs(vx,{children:[s.jsx(xx,{children:((M=k.template)==null?void 0:M.title)||"Unknown Task"}),s.jsx(wx,{status:$(k),children:$(k)})]}),s.jsxs(_x,{children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Boat:"})," ",((N=(A=k.template)==null?void 0:A.boat)==null?void 0:N.name)||"Unknown"]}),((F=k.template)==null?void 0:F.component)&&s.jsxs("div",{children:[s.jsx("strong",{children:"Component:"})," ",k.template.component]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Due Date:"})," ",new Date(k.dueDate).toLocaleDateString()]}),_&&k.completedAt&&s.jsxs("div",{children:[s.jsx("strong",{children:"Completed:"})," ",new Date(k.completedAt).toLocaleDateString()]}),k.actualCost&&s.jsxs("div",{children:[s.jsx("strong",{children:"Actual Cost:"})," ",S(k.actualCost)]}),k.actualTime&&s.jsxs("div",{children:[s.jsx("strong",{children:"Actual Time:"})," ",b(k.actualTime)]})]}),k.notes&&s.jsx("div",{style:{marginTop:"10px",fontSize:"14px",color:"#ccc"},children:k.notes})]})},k.id)})}),v=u||f||w;return s.jsxs(XM,{children:[s.jsxs(Tn,{children:[s.jsx(q,{label:"System Status",value:"OPERATIONAL"}),s.jsx(q,{label:"Active Templates",value:l.filter(x=>x.isActive).length.toString()}),s.jsx(q,{label:"Upcoming Events",value:h.length.toString()}),s.jsx(q,{label:"Overdue Events",value:h.filter(x=>$(x)==="overdue").length.toString()})]}),s.jsxs(e2,{children:[s.jsx(ce,{children:"Maintenance Management"}),s.jsxs(r2,{children:[s.jsxs(i2,{value:n,onChange:x=>i(x.target.value),children:[s.jsx("option",{value:"",children:"All Boats"}),o.map(x=>s.jsx("option",{value:x.id,children:x.name},x.id))]}),s.jsx(st,{to:"/maintenance/templates/new",children:s.jsx(G,{children:"New Template"})})]}),s.jsxs(t2,{children:[s.jsxs($h,{active:e==="templates",onClick:()=>t("templates"),children:["Templates (",l.length,")"]}),s.jsxs($h,{active:e==="upcoming",onClick:()=>t("upcoming"),children:["Upcoming (",h.length,")"]}),s.jsxs($h,{active:e==="completed",onClick:()=>t("completed"),children:["Completed (",m.length,")"]})]}),s.jsx(n2,{children:v?s.jsx("div",{style:{textAlign:"center",padding:"40px"},children:s.jsx("div",{style:{color:"#ff9966",fontSize:"18px"},children:"Loading maintenance data..."})}):s.jsxs(s.Fragment,{children:[e==="templates"&&j(),e==="upcoming"&&T(h),e==="completed"&&T(m,!0)]})})]})]})}const kh=g.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,Th=g.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,Lh=g(X)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,s2=g.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,a2=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,Eh=g(X)`
  padding: 15px;
`,Xl=g.h3`
  color: ${e=>e.theme.colors.primary.orange};
  margin: 0 0 15px 0;
  font-size: 16px;
  text-transform: uppercase;
`,nr=g.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,rr=g.span`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
`,ir=g.span`
  color: ${e=>e.theme.colors.text.primary};
`,l2=g.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${e=>e.active?e.theme.colors.primary.blue:e.theme.colors.text.secondary};
  color: ${e=>e.theme.colors.background};
`,c2=g.div`
  background-color: ${e=>e.theme.colors.background}40;
  padding: 15px;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.orange};
  margin-bottom: 20px;
  line-height: 1.5;
`,u2=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${e=>e.theme.colors.primary.orange};
  font-size: 18px;
`,d2=g.div`
  padding: 20px;
  text-align: center;
`;function h2(){var w,y;const{id:e}=Cr(),t=xt(),{data:n,isLoading:i,error:o}=Vb(e),l=QM(),u=async()=>{if(!n)return;if(window.confirm(`Are you sure you want to delete the template "${n.title}"? This will also delete all future maintenance events for this template.`))try{await l.mutateAsync(n.id),t("/maintenance")}catch(b){console.error("Failed to delete template:",b),alert("Failed to delete template. Please try again.")}},h=S=>{if(!S)return"One-time";const{type:b,interval:$}=S,j=$===1?b.slice(0,-1):b;return`Every ${$} ${j}`},f=S=>S?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(S):"Not specified",m=S=>{if(!S)return"Not specified";const b=Math.floor(S/60),$=S%60;return b>0?`${b}h ${$}m`:`${$}m`};return i?s.jsxs(kh,{children:[s.jsx(Tn,{children:s.jsx(q,{label:"Status",value:"LOADING"})}),s.jsxs(Th,{children:[s.jsx(ce,{children:"Maintenance Template"}),s.jsx(Lh,{children:s.jsx(u2,{children:"Loading template details..."})})]})]}):o||!n?s.jsxs(kh,{children:[s.jsx(Tn,{children:s.jsx(q,{label:"Status",value:"ERROR"})}),s.jsxs(Th,{children:[s.jsx(ce,{children:"Maintenance Template"}),s.jsx(Lh,{children:s.jsxs(d2,{children:[s.jsx(En,{type:"error",children:"Template not found or failed to load."}),s.jsx(st,{to:"/maintenance",children:s.jsx(G,{children:"Back to Maintenance"})})]})})]})]}):s.jsxs(kh,{children:[s.jsxs(Tn,{children:[s.jsx(q,{label:"Template Status",value:n.isActive?"ACTIVE":"INACTIVE"}),s.jsx(q,{label:"Boat",value:((w=n.boat)==null?void 0:w.name)||"Unknown"}),s.jsx(q,{label:"Component",value:n.component||"General"}),s.jsx(q,{label:"Recurrence",value:h(n.recurrence)})]}),s.jsxs(Th,{children:[s.jsx(ce,{children:n.title}),s.jsxs(s2,{children:[s.jsx(st,{to:"/maintenance",children:s.jsx(G,{children:"Back to List"})}),s.jsx(st,{to:`/maintenance/templates/${n.id}/edit`,children:s.jsx(G,{children:"Edit Template"})}),s.jsx(G,{onClick:u,disabled:l.isPending,variant:"danger",children:l.isPending?"Deleting...":"Delete Template"})]}),s.jsxs(Lh,{children:[n.description&&s.jsxs(c2,{children:[s.jsx("strong",{children:"Description:"}),s.jsx("br",{}),n.description]}),s.jsxs(a2,{children:[s.jsxs(Eh,{children:[s.jsx(Xl,{children:"Basic Information"}),s.jsxs(nr,{children:[s.jsx(rr,{children:"Title:"}),s.jsx(ir,{children:n.title})]}),s.jsxs(nr,{children:[s.jsx(rr,{children:"Boat:"}),s.jsx(ir,{children:((y=n.boat)==null?void 0:y.name)||"Unknown"})]}),s.jsxs(nr,{children:[s.jsx(rr,{children:"Component:"}),s.jsx(ir,{children:n.component||"General"})]}),s.jsxs(nr,{children:[s.jsx(rr,{children:"Status:"}),s.jsx(ir,{children:s.jsx(l2,{active:n.isActive,children:n.isActive?"Active":"Inactive"})})]})]}),s.jsxs(Eh,{children:[s.jsx(Xl,{children:"Schedule & Estimates"}),s.jsxs(nr,{children:[s.jsx(rr,{children:"Recurrence:"}),s.jsx(ir,{children:h(n.recurrence)})]}),s.jsxs(nr,{children:[s.jsx(rr,{children:"Estimated Cost:"}),s.jsx(ir,{children:f(n.estimatedCost)})]}),s.jsxs(nr,{children:[s.jsx(rr,{children:"Estimated Time:"}),s.jsx(ir,{children:m(n.estimatedTime)})]})]}),s.jsxs(Eh,{children:[s.jsx(Xl,{children:"Timestamps"}),s.jsxs(nr,{children:[s.jsx(rr,{children:"Created:"}),s.jsx(ir,{children:new Date(n.createdAt).toLocaleString()})]}),s.jsxs(nr,{children:[s.jsx(rr,{children:"Updated:"}),s.jsx(ir,{children:new Date(n.updatedAt).toLocaleString()})]})]})]}),s.jsxs("div",{style:{marginTop:"30px"},children:[s.jsx(Xl,{children:"Related Events"}),s.jsx("p",{style:{color:"#ccc",marginBottom:"20px"},children:"View upcoming and completed maintenance events generated from this template."}),s.jsxs("div",{style:{display:"flex",gap:"10px"},children:[s.jsx(st,{to:`/maintenance?tab=upcoming&template=${n.id}`,children:s.jsx(G,{children:"View Upcoming Events"})}),s.jsx(st,{to:`/maintenance?tab=completed&template=${n.id}`,children:s.jsx(G,{children:"View Completed Events"})})]})]})]})]})]})}const Ph=g.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,Ah=g.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,zh=g(X)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,f2=g.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,p2=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,Mh=g(X)`
  padding: 15px;
`,ec=g.h3`
  color: ${e=>e.theme.colors.primary.orange};
  margin: 0 0 15px 0;
  font-size: 16px;
  text-transform: uppercase;
`,Bn=g.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,xn=g.span`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
`,Un=g.span`
  color: ${e=>e.theme.colors.text.primary};
`,m2=g.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${e=>{switch(e.status){case"completed":return"#44ff44";case"overdue":return"#ff4444";case"due":return e.theme.colors.primary.orange;case"upcoming":return e.theme.colors.primary.blue;default:return e.theme.colors.text.secondary}}};
  color: ${e=>e.theme.colors.background};
`,g2=g.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${e=>e.theme.colors.background}40;
  padding: 20px;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.orange};
`,Rh=g.div`
  display: flex;
  gap: 15px;
  align-items: center;
`,Ih=g.label`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
  min-width: 120px;
`,bx=g.input`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.orange};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  flex: 1;
`,y2=g.textarea`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.orange};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  flex: 1;
`,v2=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${e=>e.theme.colors.primary.orange};
  font-size: 18px;
`,x2=g.div`
  padding: 20px;
  text-align: center;
`,_2=g.div`
  background-color: ${e=>e.theme.colors.background}40;
  padding: 15px;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.purple};
  margin-bottom: 20px;
  line-height: 1.5;
`;function w2(){var T,v,x,_,k,M,A,N,F,U,R;const{id:e}=Cr(),[t,n]=z.useState(!1),[i,o]=z.useState({actualCost:"",actualTime:"",notes:""}),{data:l,isLoading:u,error:h}=YM(e),f=JM(),m=Z=>{if(Z.completedAt)return"completed";const J=new Date(Z.dueDate),de=new Date,_e=Math.ceil((J.getTime()-de.getTime())/(1e3*60*60*24));return _e<0?"overdue":_e<=7?"due":"upcoming"},w=Z=>Z?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(Z):"Not specified",y=Z=>{if(!Z)return"Not specified";const J=Math.floor(Z/60),de=Z%60;return J>0?`${J}h ${de}m`:`${de}m`},S=Z=>{if(!Z)return"One-time";const{type:J,interval:de}=Z,_e=de===1?J.slice(0,-1):J;return`Every ${de} ${_e}`},b=async Z=>{if(Z.preventDefault(),!!l)try{const J={};i.actualCost&&(J.actualCost=parseFloat(i.actualCost)),i.actualTime&&(J.actualTime=parseInt(i.actualTime)),i.notes&&(J.notes=i.notes),await f.mutateAsync({id:l.id,data:J}),n(!1)}catch(J){console.error("Failed to complete event:",J),alert("Failed to complete maintenance event. Please try again.")}};if(u)return s.jsxs(Ph,{children:[s.jsx(Tn,{children:s.jsx(q,{label:"Status",value:"LOADING"})}),s.jsxs(Ah,{children:[s.jsx(ce,{children:"Maintenance Event"}),s.jsx(zh,{children:s.jsx(v2,{children:"Loading event details..."})})]})]});if(h||!l)return s.jsxs(Ph,{children:[s.jsx(Tn,{children:s.jsx(q,{label:"Status",value:"ERROR"})}),s.jsxs(Ah,{children:[s.jsx(ce,{children:"Maintenance Event"}),s.jsx(zh,{children:s.jsxs(x2,{children:[s.jsx(En,{type:"error",children:"Event not found or failed to load."}),s.jsx(st,{to:"/maintenance",children:s.jsx(G,{children:"Back to Maintenance"})})]})})]})]});const $=m(l),j=!!l.completedAt;return s.jsxs(Ph,{children:[s.jsxs(Tn,{children:[s.jsx(q,{label:"Event Status",value:$.toUpperCase()}),s.jsx(q,{label:"Boat",value:((v=(T=l.template)==null?void 0:T.boat)==null?void 0:v.name)||"Unknown"}),s.jsx(q,{label:"Due Date",value:new Date(l.dueDate).toLocaleDateString()}),j&&s.jsx(q,{label:"Completed",value:new Date(l.completedAt).toLocaleDateString()})]}),s.jsxs(Ah,{children:[s.jsx(ce,{children:((x=l.template)==null?void 0:x.title)||"Maintenance Event"}),s.jsxs(f2,{children:[s.jsx(st,{to:"/maintenance",children:s.jsx(G,{children:"Back to List"})}),l.template&&s.jsx(st,{to:`/maintenance/templates/${l.template.id}`,children:s.jsx(G,{children:"View Template"})}),!j&&s.jsx(G,{onClick:()=>n(!t),variant:"accent",children:t?"Cancel Completion":"Complete Event"})]}),s.jsxs(zh,{children:[s.jsx("div",{style:{marginBottom:"20px"},children:s.jsx(m2,{status:$,children:$.toUpperCase()})}),((_=l.template)==null?void 0:_.description)&&s.jsxs(_2,{children:[s.jsx("strong",{children:"Template Description:"}),s.jsx("br",{}),l.template.description]}),t&&!j&&s.jsxs(g2,{onSubmit:b,children:[s.jsx(ec,{children:"Complete Maintenance Event"}),s.jsxs(Rh,{children:[s.jsx(Ih,{children:"Actual Cost ($):"}),s.jsx(bx,{type:"number",step:"0.01",value:i.actualCost,onChange:Z=>o(J=>({...J,actualCost:Z.target.value})),placeholder:"Enter actual cost"})]}),s.jsxs(Rh,{children:[s.jsx(Ih,{children:"Actual Time (minutes):"}),s.jsx(bx,{type:"number",value:i.actualTime,onChange:Z=>o(J=>({...J,actualTime:Z.target.value})),placeholder:"Enter time in minutes"})]}),s.jsxs(Rh,{children:[s.jsx(Ih,{children:"Notes:"}),s.jsx(y2,{value:i.notes,onChange:Z=>o(J=>({...J,notes:Z.target.value})),placeholder:"Enter completion notes, observations, or issues encountered"})]}),s.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[s.jsx(G,{type:"button",onClick:()=>n(!1),children:"Cancel"}),s.jsx(G,{type:"submit",disabled:f.isPending,variant:"accent",children:f.isPending?"Completing...":"Complete Event"})]})]}),s.jsxs(p2,{children:[s.jsxs(Mh,{children:[s.jsx(ec,{children:"Event Information"}),s.jsxs(Bn,{children:[s.jsx(xn,{children:"Title:"}),s.jsx(Un,{children:((k=l.template)==null?void 0:k.title)||"Unknown"})]}),s.jsxs(Bn,{children:[s.jsx(xn,{children:"Boat:"}),s.jsx(Un,{children:((A=(M=l.template)==null?void 0:M.boat)==null?void 0:A.name)||"Unknown"})]}),s.jsxs(Bn,{children:[s.jsx(xn,{children:"Component:"}),s.jsx(Un,{children:((N=l.template)==null?void 0:N.component)||"General"})]}),s.jsxs(Bn,{children:[s.jsx(xn,{children:"Due Date:"}),s.jsx(Un,{children:new Date(l.dueDate).toLocaleDateString()})]}),j&&s.jsxs(Bn,{children:[s.jsx(xn,{children:"Completed:"}),s.jsx(Un,{children:new Date(l.completedAt).toLocaleDateString()})]})]}),s.jsxs(Mh,{children:[s.jsx(ec,{children:"Template Information"}),s.jsxs(Bn,{children:[s.jsx(xn,{children:"Recurrence:"}),s.jsx(Un,{children:S((F=l.template)==null?void 0:F.recurrence)})]}),s.jsxs(Bn,{children:[s.jsx(xn,{children:"Est. Cost:"}),s.jsx(Un,{children:w((U=l.template)==null?void 0:U.estimatedCost)})]}),s.jsxs(Bn,{children:[s.jsx(xn,{children:"Est. Time:"}),s.jsx(Un,{children:y((R=l.template)==null?void 0:R.estimatedTime)})]})]}),j&&s.jsxs(Mh,{children:[s.jsx(ec,{children:"Completion Details"}),s.jsxs(Bn,{children:[s.jsx(xn,{children:"Actual Cost:"}),s.jsx(Un,{children:w(l.actualCost)})]}),s.jsxs(Bn,{children:[s.jsx(xn,{children:"Actual Time:"}),s.jsx(Un,{children:y(l.actualTime)})]}),l.notes&&s.jsxs("div",{style:{marginTop:"15px"},children:[s.jsx(xn,{style:{display:"block",marginBottom:"5px"},children:"Notes:"}),s.jsx("div",{style:{backgroundColor:"#333",padding:"10px",borderRadius:"4px",whiteSpace:"pre-wrap"},children:l.notes})]})]})]})]})]})]})}const Nh=g.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`,Dh=g.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`,Oh=g(X)`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,b2=g.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,tc=g.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: ${e=>e.theme.colors.background}40;
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.colors.primary.orange};
`,nc=g.h3`
  color: ${e=>e.theme.colors.primary.orange};
  margin: 0 0 10px 0;
  font-size: 16px;
  text-transform: uppercase;
`,or=g.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
`,sr=g.label`
  color: ${e=>e.theme.colors.text.secondary};
  font-weight: bold;
  min-width: 150px;
  padding-top: 8px;
`,na=g.input`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.orange};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  flex: 1;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.blue};
  }
`,Sx=g.select`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.orange};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  flex: 1;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.blue};
  }
`,S2=g.textarea`
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
  border: 2px solid ${e=>e.theme.colors.primary.orange};
  padding: 8px 12px;
  border-radius: 4px;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  flex: 1;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.blue};
  }
`,jx=g.input`
  margin-right: 8px;
`,j2=g.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex: 1;
`,C2=g.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding-top: 20px;
  border-top: 1px solid ${e=>e.theme.colors.primary.orange}40;
`,$2=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${e=>e.theme.colors.primary.orange};
  font-size: 18px;
`,k2=g.div`
  padding: 20px;
  text-align: center;
`;function Cx(){const{id:e}=Cr(),t=xt(),n=!!e,[i,o]=z.useState({boatId:"",title:"",description:"",component:"",hasRecurrence:!1,recurrenceType:"days",recurrenceInterval:"30",estimatedCost:"",estimatedTime:"",isActive:!0}),{data:l=[]}=Vt(),{data:u,isLoading:h}=Vb(e,{enabled:n}),f=GM(),m=KM();z.useEffect(()=>{var b,$,j,T,v;u&&n&&o({boatId:u.boatId,title:u.title,description:u.description||"",component:u.component||"",hasRecurrence:!!u.recurrence,recurrenceType:((b=u.recurrence)==null?void 0:b.type)||"days",recurrenceInterval:((j=($=u.recurrence)==null?void 0:$.interval)==null?void 0:j.toString())||"30",estimatedCost:((T=u.estimatedCost)==null?void 0:T.toString())||"",estimatedTime:((v=u.estimatedTime)==null?void 0:v.toString())||"",isActive:u.isActive})},[u,n]);const w=async b=>{if(b.preventDefault(),!i.boatId||!i.title){alert("Please fill in all required fields (Boat and Title)");return}try{const $={boatId:i.boatId,title:i.title,description:i.description||void 0,component:i.component||void 0,estimatedCost:i.estimatedCost?parseFloat(i.estimatedCost):void 0,estimatedTime:i.estimatedTime?parseInt(i.estimatedTime):void 0};i.hasRecurrence&&($.recurrence={type:i.recurrenceType,interval:parseInt(i.recurrenceInterval)}),n?($.isActive=i.isActive,await m.mutateAsync({id:e,data:$})):await f.mutateAsync($),t("/maintenance")}catch($){console.error("Failed to save template:",$),alert("Failed to save maintenance template. Please try again.")}},y=(b,$)=>{o(j=>({...j,[b]:$}))};if(n&&h)return s.jsxs(Nh,{children:[s.jsx(Tn,{children:s.jsx(q,{label:"Status",value:"LOADING"})}),s.jsxs(Dh,{children:[s.jsx(ce,{children:"Edit Maintenance Template"}),s.jsx(Oh,{children:s.jsx($2,{children:"Loading template..."})})]})]});if(n&&!u)return s.jsxs(Nh,{children:[s.jsx(Tn,{children:s.jsx(q,{label:"Status",value:"ERROR"})}),s.jsxs(Dh,{children:[s.jsx(ce,{children:"Edit Maintenance Template"}),s.jsx(Oh,{children:s.jsxs(k2,{children:[s.jsx(En,{type:"error",children:"Template not found."}),s.jsx(st,{to:"/maintenance",children:s.jsx(G,{children:"Back to Maintenance"})})]})})]})]});const S=f.isPending||m.isPending;return s.jsxs(Nh,{children:[s.jsxs(Tn,{children:[s.jsx(q,{label:"Mode",value:n?"EDIT":"CREATE"}),s.jsx(q,{label:"Boats Available",value:l.length.toString()}),n&&u&&s.jsx(q,{label:"Template Status",value:u.isActive?"ACTIVE":"INACTIVE"})]}),s.jsxs(Dh,{children:[s.jsx(ce,{children:n?"Edit Maintenance Template":"Create Maintenance Template"}),s.jsx(Oh,{children:s.jsxs(b2,{onSubmit:w,children:[s.jsxs(tc,{children:[s.jsx(nc,{children:"Basic Information"}),s.jsxs(or,{children:[s.jsx(sr,{children:"Boat *"}),s.jsxs(Sx,{value:i.boatId,onChange:b=>y("boatId",b.target.value),required:!0,children:[s.jsx("option",{value:"",children:"Select a boat"}),l.map(b=>s.jsx("option",{value:b.id,children:b.name},b.id))]})]}),s.jsxs(or,{children:[s.jsx(sr,{children:"Title *"}),s.jsx(na,{type:"text",value:i.title,onChange:b=>y("title",b.target.value),placeholder:"e.g., Oil Change, Hull Cleaning, Engine Service",required:!0})]}),s.jsxs(or,{children:[s.jsx(sr,{children:"Component"}),s.jsx(na,{type:"text",value:i.component,onChange:b=>y("component",b.target.value),placeholder:"e.g., Engine, Hull, Electrical, Plumbing"})]}),s.jsxs(or,{children:[s.jsx(sr,{children:"Description"}),s.jsx(S2,{value:i.description,onChange:b=>y("description",b.target.value),placeholder:"Detailed description of the maintenance task, including any special instructions or requirements"})]})]}),s.jsxs(tc,{children:[s.jsx(nc,{children:"Schedule"}),s.jsxs(or,{children:[s.jsx(sr,{children:"Recurring Task"}),s.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[s.jsx(jx,{type:"checkbox",checked:i.hasRecurrence,onChange:b=>y("hasRecurrence",b.target.checked)}),s.jsx("span",{children:"This is a recurring maintenance task"})]})]}),i.hasRecurrence&&s.jsxs(or,{children:[s.jsx(sr,{children:"Recurrence"}),s.jsxs(j2,{children:[s.jsx("span",{children:"Every"}),s.jsx(na,{type:"number",min:"1",value:i.recurrenceInterval,onChange:b=>y("recurrenceInterval",b.target.value),style:{width:"80px",flex:"none"}}),s.jsxs(Sx,{value:i.recurrenceType,onChange:b=>y("recurrenceType",b.target.value),style:{flex:"none",minWidth:"120px"},children:[s.jsx("option",{value:"days",children:"Days"}),s.jsx("option",{value:"weeks",children:"Weeks"}),s.jsx("option",{value:"months",children:"Months"}),s.jsx("option",{value:"years",children:"Years"}),s.jsx("option",{value:"engine_hours",children:"Engine Hours"})]})]})]})]}),s.jsxs(tc,{children:[s.jsx(nc,{children:"Estimates"}),s.jsxs(or,{children:[s.jsx(sr,{children:"Estimated Cost ($)"}),s.jsx(na,{type:"number",step:"0.01",min:"0",value:i.estimatedCost,onChange:b=>y("estimatedCost",b.target.value),placeholder:"0.00"})]}),s.jsxs(or,{children:[s.jsx(sr,{children:"Estimated Time (minutes)"}),s.jsx(na,{type:"number",min:"0",value:i.estimatedTime,onChange:b=>y("estimatedTime",b.target.value),placeholder:"60"})]})]}),n&&s.jsxs(tc,{children:[s.jsx(nc,{children:"Status"}),s.jsxs(or,{children:[s.jsx(sr,{children:"Template Status"}),s.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[s.jsx(jx,{type:"checkbox",checked:i.isActive,onChange:b=>y("isActive",b.target.checked)}),s.jsx("span",{children:"Template is active (generates future events)"})]})]})]}),s.jsxs(C2,{children:[s.jsx(st,{to:"/maintenance",children:s.jsx(G,{type:"button",children:"Cancel"})}),s.jsx(G,{type:"submit",disabled:S,variant:"accent",children:S?"Saving...":n?"Update Template":"Create Template"})]})]})})]})]})}const Br={all:["locations"],lists:()=>[...Br.all,"list"],list:e=>[...Br.lists(),{filters:e}],details:()=>[...Br.all,"detail"],detail:e=>[...Br.details(),e],nearby:(e,t,n)=>[...Br.all,"nearby",{lat:e,lng:t,radius:n}]},T2=e=>zt({queryKey:Br.list(e||{}),queryFn:()=>pe.getMarkedLocations(e)}),L2=()=>{const e=Ke();return lt({mutationFn:t=>pe.createMarkedLocation(t),onSuccess:()=>{e.invalidateQueries({queryKey:Br.lists()})}})},E2=()=>{const e=Ke();return lt({mutationFn:t=>pe.deleteMarkedLocation(t),onSuccess:()=>{e.invalidateQueries({queryKey:Br.lists()})}})},P2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",A2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg==",z2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC";delete pn.Icon.Default.prototype._getIconUrl;pn.Icon.Default.mergeOptions({iconRetinaUrl:A2,iconUrl:P2,shadowUrl:z2});const M2=g.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px); // Account for header and footer
  gap: ${e=>e.theme.spacing.md};
`,R2=g.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.md};
`,I2=g.div`
  flex: 1;
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  min-height: 600px;
`,N2=g(X)`
  flex: 1;
  
  .leaflet-container {
    height: 100%;
    min-height: 500px;
    background-color: ${e=>e.theme.colors.surface.dark};
  }
  
  .leaflet-control-container {
    .leaflet-control {
      background-color: ${e=>e.theme.colors.surface.medium};
      border: 1px solid ${e=>e.theme.colors.primary.orange};
      
      a {
        color: ${e=>e.theme.colors.text.primary};
        background-color: ${e=>e.theme.colors.surface.medium};
        
        &:hover {
          background-color: ${e=>e.theme.colors.primary.orange};
          color: ${e=>e.theme.colors.text.inverse};
        }
      }
    }
  }
`,D2=g(X)`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
`,O2=g.div`
  max-height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,F2=g.div`
  padding: ${e=>e.theme.spacing.sm};
  background-color: ${e=>e.theme.colors.surface.medium};
  border-radius: ${e=>e.theme.borderRadius.sm};
  border-left: 3px solid ${e=>e.theme.colors.primary.blue};
  
  .location-name {
    font-weight: ${e=>e.theme.typography.fontWeight.bold};
    color: ${e=>e.theme.colors.primary.blue};
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
`,B2=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
  
  input, select, textarea {
    padding: ${e=>e.theme.spacing.sm};
    background-color: ${e=>e.theme.colors.surface.medium};
    border: 1px solid ${e=>e.theme.colors.primary.orange};
    border-radius: ${e=>e.theme.borderRadius.sm};
    color: ${e=>e.theme.colors.text.primary};
    font-family: ${e=>e.theme.typography.fontFamily.primary};
    
    &:focus {
      outline: none;
      border-color: ${e=>e.theme.colors.primary.orangeLight};
      box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary.orange}20;
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 60px;
  }
`,U2=g.div`
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
    border: 1px solid ${e=>e.theme.colors.primary.blue};
    border-radius: ${e=>e.theme.borderRadius.sm};
    color: ${e=>e.theme.colors.text.primary};
    font-family: ${e=>e.theme.typography.fontFamily.primary};
  }
`,H2=e=>{const t={fishing:"#66FF66",marina:"#6688CC",anchorage:"#FFFF66",hazard:"#FF6666",other:"#CC99CC"};return new pn.DivIcon({html:`<div style="
      background-color: ${t[e]||t.other};
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
    ">${e.charAt(0).toUpperCase()}</div>`,className:"custom-marker",iconSize:[20,20],iconAnchor:[10,10]})},Z2=({onMapClick:e})=>(BA({click:t=>{e(t.latlng.lat,t.latlng.lng)}}),null),W2=()=>{const[e,t]=z.useState(!0),[n,i]=z.useState(!0),[o,l]=z.useState(""),[u,h]=z.useState(!1),[f,m]=z.useState({name:"",category:"other",notes:"",latitude:0,longitude:0}),[w,y]=z.useState(null),S=z.useRef(null),{data:b=[],isLoading:$}=vi(),{data:j=[],isLoading:T}=T2(o?{category:o}:void 0),v=L2(),x=E2(),_=We.useMemo(()=>{if(b.length>0){const U=b.flatMap(R=>R.gpsPoints);if(U.length>0){const R=U.reduce((J,de)=>J+de.latitude,0)/U.length,Z=U.reduce((J,de)=>J+de.longitude,0)/U.length;return[R,Z]}}return[37.7749,-122.4194]},[b]),k=z.useCallback((U,R)=>{u&&m(Z=>({...Z,latitude:U,longitude:R}))},[u]),M=async()=>{if(!(!f.name||!f.latitude||!f.longitude))try{await v.mutateAsync({name:f.name,latitude:f.latitude,longitude:f.longitude,category:f.category,notes:f.notes||void 0}),m({name:"",category:"other",notes:"",latitude:0,longitude:0}),h(!1)}catch(U){console.error("Failed to create location:",U)}},A=async U=>{if(window.confirm("Are you sure you want to delete this location?"))try{await x.mutateAsync(U),y(null)}catch(R){console.error("Failed to delete location:",R)}},N=()=>e?b.map(U=>{var de,_e,ne;if(U.gpsPoints.length<2)return null;const R=U.gpsPoints.map(ue=>[ue.latitude,ue.longitude]),Z=R[0],J=R[R.length-1];return s.jsxs(We.Fragment,{children:[s.jsx(Db,{positions:R,color:"#FF9966",weight:3,opacity:.7}),s.jsx(Or,{position:Z,children:s.jsx(Fr,{children:s.jsxs("div",{children:[s.jsx("strong",{children:"Trip Start"}),s.jsx("br",{}),new Date(U.startTime).toLocaleString(),s.jsx("br",{}),"Boat: ",U.boatId]})})}),s.jsx(Or,{position:J,children:s.jsx(Fr,{children:s.jsxs("div",{children:[s.jsx("strong",{children:"Trip End"}),s.jsx("br",{}),new Date(U.endTime).toLocaleString(),s.jsx("br",{}),"Duration: ",Math.round((((de=U.statistics)==null?void 0:de.durationSeconds)||0)/60)," minutes",s.jsx("br",{}),"Distance: ",((((_e=U.statistics)==null?void 0:_e.distanceMeters)||0)/1e3).toFixed(2)," km"]})})}),(((ne=U.statistics)==null?void 0:ne.stopPoints)||[]).map((ue,Qe)=>s.jsx(Or,{position:[ue.latitude,ue.longitude],icon:new pn.DivIcon({html:`<div style="
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
                ">S</div>`,className:"stop-marker",iconSize:[16,16],iconAnchor:[8,8]}),children:s.jsx(Fr,{children:s.jsxs("div",{children:[s.jsx("strong",{children:"Stop Point"}),s.jsx("br",{}),"Duration: ",Math.round(ue.durationSeconds/60)," minutes",s.jsx("br",{}),"From: ",new Date(ue.startTime).toLocaleString(),s.jsx("br",{}),"To: ",new Date(ue.endTime).toLocaleString()]})})},`${U.id}-stop-${Qe}`))]},U.id)}):null,F=()=>n?j.map(U=>s.jsx(Or,{position:[U.latitude,U.longitude],icon:H2(U.category),eventHandlers:{click:()=>y(U)},children:s.jsx(Fr,{children:s.jsxs("div",{children:[s.jsx("strong",{children:U.name}),s.jsx("br",{}),"Category: ",U.category,s.jsx("br",{}),U.notes&&s.jsxs(s.Fragment,{children:["Notes: ",U.notes,s.jsx("br",{})]}),U.tags.length>0&&s.jsxs(s.Fragment,{children:["Tags: ",U.tags.join(", "),s.jsx("br",{})]}),s.jsxs("small",{children:["Created: ",new Date(U.createdAt).toLocaleDateString()]})]})})},U.id)):null;return s.jsxs(M2,{children:[s.jsx(ce,{children:"Navigation Chart"}),s.jsx(R2,{children:s.jsxs(U2,{children:[s.jsx("label",{children:"Display:"}),s.jsx(G,{variant:e?"primary":"secondary",size:"sm",onClick:()=>t(!e),children:"Trip Routes"}),s.jsx(G,{variant:n?"primary":"secondary",size:"sm",onClick:()=>i(!n),children:"Locations"}),s.jsx("label",{children:"Category:"}),s.jsxs("select",{value:o,onChange:U=>l(U.target.value),children:[s.jsx("option",{value:"",children:"All Categories"}),s.jsx("option",{value:"fishing",children:"Fishing"}),s.jsx("option",{value:"marina",children:"Marina"}),s.jsx("option",{value:"anchorage",children:"Anchorage"}),s.jsx("option",{value:"hazard",children:"Hazard"}),s.jsx("option",{value:"other",children:"Other"})]})]})}),s.jsxs(I2,{children:[s.jsx(N2,{title:"Chart Display",padding:"none",children:s.jsxs(Nb,{center:_,zoom:10,style:{height:"100%",width:"100%"},ref:S,children:[s.jsx(Ob,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),s.jsx(Z2,{onMapClick:k}),N(),F(),u&&f.latitude&&f.longitude&&s.jsx(Or,{position:[f.latitude,f.longitude],children:s.jsx(Fr,{children:s.jsxs("div",{children:[s.jsx("strong",{children:"New Location"}),s.jsx("br",{}),'Click "Save Location" to confirm']})})})]})}),s.jsx(D2,{title:"Location Manager",variant:"secondary",children:u?s.jsxs(B2,{children:[s.jsx("h3",{children:"Add New Location"}),s.jsx("p",{children:"Click on the map to set coordinates, then fill in the details below."}),s.jsx("input",{type:"text",placeholder:"Location Name",value:f.name,onChange:U=>m(R=>({...R,name:U.target.value}))}),s.jsxs("select",{value:f.category,onChange:U=>m(R=>({...R,category:U.target.value})),children:[s.jsx("option",{value:"fishing",children:"Fishing Spot"}),s.jsx("option",{value:"marina",children:"Marina"}),s.jsx("option",{value:"anchorage",children:"Anchorage"}),s.jsx("option",{value:"hazard",children:"Hazard"}),s.jsx("option",{value:"other",children:"Other"})]}),s.jsx("textarea",{placeholder:"Notes (optional)",value:f.notes,onChange:U=>m(R=>({...R,notes:U.target.value}))}),f.latitude&&f.longitude&&s.jsxs("div",{children:[s.jsx("h4",{style:{color:"#FF9966",marginBottom:"8px"},children:"Coordinates"}),s.jsxs("div",{style:{padding:"12px",backgroundColor:"#222222",borderRadius:"4px",border:"1px solid #333333",fontFamily:"monospace"},children:["Lat: ",f.latitude.toFixed(6),s.jsx("br",{}),"Lng: ",f.longitude.toFixed(6)]})]}),s.jsxs("div",{style:{display:"flex",gap:"8px"},children:[s.jsx(G,{onClick:M,disabled:!f.name||!f.latitude||!f.longitude||v.isPending,children:"Save Location"}),s.jsx(G,{variant:"secondary",onClick:()=>{h(!1),m({name:"",category:"other",notes:"",latitude:0,longitude:0})},children:"Cancel"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx(G,{onClick:()=>h(!0),disabled:v.isPending,children:"Add New Location"}),w&&s.jsxs("div",{children:[s.jsx("h4",{style:{color:"#FF9966",marginBottom:"8px"},children:"Selected Location"}),s.jsxs("div",{style:{padding:"12px",backgroundColor:"#222222",borderRadius:"4px",border:"1px solid #333333"},children:[s.jsx("strong",{children:w.name}),s.jsx("br",{}),"Category: ",w.category,s.jsx("br",{}),"Coordinates: ",w.latitude.toFixed(6),", ",w.longitude.toFixed(6),s.jsx("br",{}),w.notes&&s.jsxs(s.Fragment,{children:["Notes: ",w.notes,s.jsx("br",{})]}),w.tags.length>0&&s.jsxs(s.Fragment,{children:["Tags: ",w.tags.join(", "),s.jsx("br",{})]}),s.jsx("div",{style:{marginTop:"8px"},children:s.jsx(G,{size:"sm",variant:"accent",onClick:()=>A(w.id),disabled:x.isPending,children:"Delete"})})]})]}),s.jsx(O2,{children:j.map(U=>s.jsxs(F2,{children:[s.jsx("div",{className:"location-name",children:U.name}),s.jsx("div",{className:"location-category",children:U.category}),U.notes&&s.jsx("div",{className:"location-notes",children:U.notes}),s.jsx("div",{className:"location-actions",children:s.jsx(G,{size:"sm",onClick:()=>{y(U),S.current&&S.current.setView([U.latitude,U.longitude],15)},children:"View"})})]},U.id))})]})})]}),($||T)&&s.jsx(q,{label:"System Status",value:"Loading chart data...",color:"blue"})]})},rc=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,$x=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,V2=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${e=>e.theme.spacing.lg};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,q2=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${e=>e.theme.spacing.md};
`,G2=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`,K2=g.div`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Q2=g.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xl};
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.lg};
`,Y2=()=>{const{data:e,isLoading:t,error:n}=Lb();if(t)return s.jsxs(rc,{children:[s.jsx(ce,{children:"Captain's License Progress"}),s.jsx(G2,{children:s.jsx(q,{label:"System Status",value:"Loading Progress Data...",color:"orange",size:"lg"})})]});if(n)return s.jsxs(rc,{children:[s.jsx(ce,{children:"Captain's License Progress"}),s.jsx(K2,{children:s.jsx(En,{type:"error",children:"Error loading license progress data. Please check your connection and try again."})})]});if(!e||!e.enabled)return s.jsxs(rc,{children:[s.jsx(ce,{children:"Captain's License Progress"}),s.jsx(X,{title:"License Tracking Disabled",variant:"secondary",children:s.jsxs(Q2,{children:["Captain's license progress tracking is currently disabled.",s.jsx("br",{}),"Enable it in your settings to track progress toward OUPV certification."]})})]});const{totalSeaTimeDays:i,seaTimeDaysLast3Years:o,totalHours:l,daysToGoal360:u,daysToGoal90:h,estimatedCompletionDate:f}=e,m=i>=360,w=o>=90,y=m&&w;return s.jsxs(rc,{children:[s.jsx(ce,{children:"Captain's License Progress"}),y&&s.jsx(En,{type:"success",children:"Congratulations! You have met all requirements for OUPV (6-pack) Captain's License eligibility."}),s.jsx(X,{title:"Current Sea Time Statistics",variant:"primary",children:s.jsxs($x,{children:[s.jsx(q,{label:"Total Sea Time Days",value:i,color:"orange",size:"lg"}),s.jsx(q,{label:"Days (Last 3 Years)",value:o,color:"purple",size:"lg"}),s.jsx(q,{label:"Total Hours",value:l.toFixed(1),unit:"hrs",color:"blue",size:"lg"}),s.jsx(q,{label:"Average Hours/Day",value:i>0?(l/i).toFixed(1):"0.0",unit:"hrs",color:"green",size:"lg"})]})}),s.jsxs(V2,{children:[s.jsx(X,{title:"360-Day Total Requirement",variant:"primary",children:s.jsx(su,{title:"Total Sea Time Days",current:i,target:360,unit:"days",color:"orange",size:"lg",showPercentage:!0})}),s.jsx(X,{title:"90-Day Recent Requirement",variant:"secondary",children:s.jsx(su,{title:"Days in Last 3 Years",current:o,target:90,unit:"days",color:"purple",size:"lg",showPercentage:!0})})]}),s.jsx(X,{title:"Completion Estimates",variant:"accent",children:s.jsxs(q2,{children:[s.jsx(Xd,{title:"360-Day Goal",estimatedDate:m?void 0:f,daysRemaining:m?void 0:u,isComplete:m,color:"orange",size:"md"}),s.jsx(Xd,{title:"90-Day (3 Years) Goal",daysRemaining:w?void 0:h,isComplete:w,color:"purple",size:"md"}),!y&&s.jsx(Xd,{title:"License Eligibility",estimatedDate:f,isComplete:y,color:"blue",size:"md"})]})}),s.jsx(X,{title:"OUPV (6-Pack) License Requirements",variant:"secondary",children:s.jsxs($x,{children:[s.jsx(q,{label:"Total Sea Time",value:"360 Days",color:"orange",size:"md"}),s.jsx(q,{label:"Recent Experience",value:"90 Days in 3 Years",color:"purple",size:"md"}),s.jsx(q,{label:"Minimum Per Day",value:"4 Hours",color:"blue",size:"md"}),s.jsx(q,{label:"Additional Requirements",value:"Medical, Drug Test, Course",color:"green",size:"md"})]})})]})},Fh=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,kx=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,J2=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${e=>e.theme.spacing.lg};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,X2=g.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
  flex-wrap: wrap;
`,eR=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`,tR=g.div`
  margin-bottom: ${e=>e.theme.spacing.lg};
`,Tx=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,ic=g.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: ${e=>e.theme.spacing.md};
  padding: ${e=>e.theme.spacing.sm};
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 1px solid ${e=>e.theme.colors.surface.light};
  border-radius: ${e=>e.theme.borderRadius.sm};
  align-items: center;
  
  &.header {
    background-color: ${e=>e.theme.colors.primary.orange};
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
`,Xe=g.div`
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  
  &.text {
    font-family: ${e=>e.theme.typography.fontFamily.primary};
  }
  
  &.status {
    font-weight: ${e=>e.theme.typography.fontWeight.bold};
    text-transform: uppercase;
  }
`,nR=()=>{const[e,t]=We.useState(""),{data:n,isLoading:i}=Vt(),{data:o,isLoading:l,error:u}=Wb(e||void 0),{data:h,isLoading:f,error:m}=Pm(e||void 0),{data:w,isLoading:y,error:S}=qb(e||void 0),b=i||l||f||y,$=u||m||S,j=z.useMemo(()=>{if(!o||!h||!w)return{totalTemplates:0,activeTemplates:0,upcomingCount:0,overdueCount:0,completedThisMonth:0,totalCostThisMonth:0,averageCost:0,completionRate:0};const v=new Date,x=new Date(v.getFullYear(),v.getMonth(),1),_=h.filter(R=>new Date(R.dueDate)<v).length,k=w.filter(R=>R.completedAt&&new Date(R.completedAt)>=x),M=k.reduce((R,Z)=>R+(Z.actualCost||0),0),A=w.filter(R=>R.actualCost&&R.actualCost>0),N=A.length>0?A.reduce((R,Z)=>R+(Z.actualCost||0),0)/A.length:0,F=h.length+w.length,U=F>0?w.length/F*100:0;return{totalTemplates:o.length,activeTemplates:o.filter(R=>R.isActive).length,upcomingCount:h.length,overdueCount:_,completedThisMonth:k.length,totalCostThisMonth:M,averageCost:N,completionRate:U}},[o,h,w]),T=z.useMemo(()=>{if(!h)return[];const v=new Date,x=new Date(v.getTime()+7*24*60*60*1e3);return h.map(_=>{const k=new Date(_.dueDate);let M="upcoming",A="Upcoming";return k<v?(M="overdue",A="Overdue"):k<=x&&(M="due-soon",A="Due Soon"),{..._,status:M,statusText:A,daysUntilDue:Math.ceil((k.getTime()-v.getTime())/(1e3*60*60*24))}}).sort((_,k)=>new Date(_.dueDate).getTime()-new Date(k.dueDate).getTime())},[h]);return b?s.jsxs(Fh,{children:[s.jsx(ce,{children:"Maintenance Reports"}),s.jsx(eR,{children:s.jsx(q,{label:"System Status",value:"Loading Maintenance Data...",color:"orange",size:"lg"})})]}):$?s.jsxs(Fh,{children:[s.jsx(ce,{children:"Maintenance Reports"}),s.jsx(tR,{children:s.jsx(En,{type:"error",children:"Error loading maintenance data. Please check your connection and try again."})})]}):s.jsxs(Fh,{children:[s.jsx(ce,{children:"Maintenance Reports"}),s.jsxs(X2,{children:[s.jsx(G,{variant:e===""?"primary":"secondary",onClick:()=>t(""),children:"All Boats"}),n==null?void 0:n.map(v=>s.jsx(G,{variant:e===v.id?"primary":"secondary",onClick:()=>t(v.id),children:v.name},v.id))]}),s.jsx(X,{title:"Maintenance Overview",variant:"primary",children:s.jsxs(kx,{children:[s.jsx(q,{label:"Active Templates",value:j.activeTemplates,color:"orange",size:"lg"}),s.jsx(q,{label:"Upcoming Tasks",value:j.upcomingCount,color:"blue",size:"lg"}),s.jsx(q,{label:"Overdue Tasks",value:j.overdueCount,color:j.overdueCount>0?"orange":"green",size:"lg"}),s.jsx(q,{label:"Completed This Month",value:j.completedThisMonth,color:"green",size:"lg"})]})}),s.jsx(X,{title:"Cost Analysis",variant:"secondary",children:s.jsxs(kx,{children:[s.jsx(q,{label:"Cost This Month",value:`$${j.totalCostThisMonth.toFixed(2)}`,color:"purple",size:"lg"}),s.jsx(q,{label:"Average Cost Per Task",value:`$${j.averageCost.toFixed(2)}`,color:"purple",size:"lg"}),s.jsx(q,{label:"Completion Rate",value:`${j.completionRate.toFixed(1)}%`,color:"blue",size:"lg"})]})}),s.jsxs(J2,{children:[s.jsx(X,{title:"Template Status",variant:"primary",children:s.jsx(su,{title:"Active Templates",current:j.activeTemplates,target:j.totalTemplates,unit:"templates",color:"orange",size:"md",showPercentage:!0})}),s.jsx(X,{title:"Task Completion",variant:"secondary",children:s.jsx(su,{title:"Completion Rate",current:j.completionRate,target:100,unit:"%",color:"purple",size:"md",showPercentage:!1})})]}),T.length>0&&s.jsx(X,{title:"Upcoming Maintenance Tasks",variant:"accent",children:s.jsxs(Tx,{children:[s.jsxs(ic,{className:"header",children:[s.jsx(Xe,{children:"Task"}),s.jsx(Xe,{children:"Boat"}),s.jsx(Xe,{children:"Due Date"}),s.jsx(Xe,{children:"Days Until Due"}),s.jsx(Xe,{children:"Status"})]}),T.map(v=>{var x,_,k,M;return s.jsxs(ic,{className:v.status,children:[s.jsxs(Xe,{className:"text",children:[((x=v.template)==null?void 0:x.title)||"Unknown Task",((_=v.template)==null?void 0:_.component)&&s.jsx("div",{style:{fontSize:"0.8em",color:"#999"},children:v.template.component})]}),s.jsx(Xe,{className:"text",children:((M=(k=v.template)==null?void 0:k.boat)==null?void 0:M.name)||"Unknown"}),s.jsx(Xe,{children:new Date(v.dueDate).toLocaleDateString()}),s.jsx(Xe,{children:v.daysUntilDue>0?`${v.daysUntilDue} days`:`${Math.abs(v.daysUntilDue)} days ago`}),s.jsx(Xe,{className:"status",children:v.statusText})]},v.id)})]})}),w&&w.length>0&&s.jsx(X,{title:"Recent Completions",variant:"secondary",children:s.jsxs(Tx,{children:[s.jsxs(ic,{className:"header",children:[s.jsx(Xe,{children:"Task"}),s.jsx(Xe,{children:"Boat"}),s.jsx(Xe,{children:"Completed"}),s.jsx(Xe,{children:"Cost"}),s.jsx(Xe,{children:"Time"})]}),w.slice(0,10).map(v=>{var x,_,k;return s.jsxs(ic,{children:[s.jsx(Xe,{className:"text",children:((x=v.template)==null?void 0:x.title)||"Unknown Task"}),s.jsx(Xe,{className:"text",children:((k=(_=v.template)==null?void 0:_.boat)==null?void 0:k.name)||"Unknown"}),s.jsx(Xe,{children:v.completedAt?new Date(v.completedAt).toLocaleDateString():"N/A"}),s.jsx(Xe,{children:v.actualCost?`$${v.actualCost.toFixed(2)}`:"N/A"}),s.jsx(Xe,{children:v.actualTime?`${v.actualTime}h`:"N/A"})]},v.id)})]})})]})},rR=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`,iR=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${e=>e.theme.spacing.lg};
`,Lx=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
  padding: ${e=>e.theme.spacing.lg};
  background-color: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.orange};
  border-radius: ${e=>e.theme.borderRadius.lg};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${e=>e.theme.colors.primary.orangeLight};
    background-color: ${e=>e.theme.colors.surface.medium};
  }
  
  &.secondary {
    border-color: ${e=>e.theme.colors.primary.purple};
    
    &:hover {
      border-color: ${e=>e.theme.colors.primary.purpleLight};
    }
  }
`,Ex=g.h2`
  color: ${e=>e.theme.colors.primary.orange};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  
  .secondary & {
    color: ${e=>e.theme.colors.primary.purple};
  }
`,Px=g.p`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  line-height: ${e=>e.theme.typography.lineHeight.normal};
  margin: 0;
`,Ax=g.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,Pr=g.li`
  color: ${e=>e.theme.colors.text.muted};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  
  &::before {
    content: '▶';
    color: ${e=>e.theme.colors.primary.orange};
    margin-right: ${e=>e.theme.spacing.sm};
    font-size: 0.8em;
  }
  
  .secondary &::before {
    color: ${e=>e.theme.colors.primary.purple};
  }
`,oR=()=>{const e=xt();return s.jsxs(rR,{children:[s.jsx(ce,{children:"System Reports"}),s.jsx(X,{title:"Available Reports",variant:"primary",children:s.jsxs(iR,{children:[s.jsxs(Lx,{onClick:()=>e("/reports/license"),children:[s.jsx(Ex,{children:"Captain's License Progress"}),s.jsx(Px,{children:"Track your progress toward OUPV (6-pack) Captain's License requirements"}),s.jsxs(Ax,{children:[s.jsx(Pr,{children:"360-day total sea time tracking"}),s.jsx(Pr,{children:"90-day recent experience monitoring"}),s.jsx(Pr,{children:"Progress charts and completion estimates"}),s.jsx(Pr,{children:"Detailed statistics and requirements"})]})]}),s.jsxs(Lx,{className:"secondary",onClick:()=>e("/reports/maintenance"),children:[s.jsx(Ex,{children:"Maintenance Reports"}),s.jsx(Px,{children:"Comprehensive maintenance tracking and cost analysis for all vessels"}),s.jsxs(Ax,{children:[s.jsx(Pr,{children:"Upcoming and overdue task tracking"}),s.jsx(Pr,{children:"Cost analysis and completion rates"}),s.jsx(Pr,{children:"Template status and activity monitoring"}),s.jsx(Pr,{children:"Recent completion history"})]})]})]})}),s.jsx(X,{title:"Quick Access",variant:"accent",children:s.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[s.jsx(G,{variant:"primary",onClick:()=>e("/reports/license"),children:"License Progress"}),s.jsx(G,{variant:"secondary",onClick:()=>e("/reports/maintenance"),children:"Maintenance Reports"})]})})]})},sR=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,aR=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Bh=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
  margin-bottom: ${e=>e.theme.spacing.md};
`,Uh=g.label`
  color: ${e=>e.theme.colors.primary.blue};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
  letter-spacing: 1px;
`,Hh=g.input`
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.blue};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.typography.fontFamily.primary};
  font-size: ${e=>e.theme.typography.fontSize.md};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary.orange};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,lR=g.div`
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
          background: ${e.theme.colors.primary.blue}20;
          color: ${e.theme.colors.primary.blue};
          border: 1px solid ${e.theme.colors.primary.blue};
        `}}}
`,cR=g.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
`,Zh=g.div`
  color: ${e=>e.theme.colors.primary.blue};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,Wh=g.div`
  color: ${e=>e.theme.colors.text.primary};
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,uR=()=>{const{user:e,logout:t}=Lm(),n=xt(),[i,o]=z.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[l,u]=z.useState(!1),[h,f]=z.useState(null),m=S=>b=>{o($=>({...$,[S]:b.target.value})),h&&f(null)},w=async S=>{if(S.preventDefault(),!i.currentPassword||!i.newPassword||!i.confirmPassword){f({type:"error",text:"All password fields are required"});return}if(i.newPassword!==i.confirmPassword){f({type:"error",text:"New passwords do not match"});return}if(i.newPassword.length<8){f({type:"error",text:"New password must be at least 8 characters"});return}u(!0),f({type:"info",text:"Changing password..."});try{await pe.changePassword(i.currentPassword,i.newPassword),f({type:"success",text:"Password changed successfully. You will be logged out."}),o({currentPassword:"",newPassword:"",confirmPassword:""}),setTimeout(()=>{t()},2e3)}catch(b){f({type:"error",text:b.message||"Failed to change password"})}finally{u(!1)}},y=async()=>{window.confirm("Are you sure you want to log out?")&&await t()};return s.jsxs(sR,{children:[s.jsx(ce,{children:"System Settings"}),s.jsxs(aR,{children:[s.jsxs(X,{title:"User Account",children:[s.jsxs(cR,{children:[s.jsx(Zh,{children:"Username:"}),s.jsx(Wh,{children:(e==null?void 0:e.username)||"Unknown"}),s.jsx(Zh,{children:"Account Created:"}),s.jsx(Wh,{children:e!=null&&e.createdAt?new Date(e.createdAt).toLocaleDateString():"Unknown"}),s.jsx(Zh,{children:"Last Updated:"}),s.jsx(Wh,{children:e!=null&&e.updatedAt?new Date(e.updatedAt).toLocaleDateString():"Unknown"})]}),s.jsx("div",{style:{marginTop:"20px"},children:s.jsx(G,{onClick:y,variant:"secondary",children:"Logout"})})]}),s.jsx(X,{title:"Change Password",children:s.jsxs("form",{onSubmit:w,children:[s.jsxs(Bh,{children:[s.jsx(Uh,{htmlFor:"currentPassword",children:"Current Password"}),s.jsx(Hh,{id:"currentPassword",type:"password",value:i.currentPassword,onChange:m("currentPassword"),disabled:l,autoComplete:"current-password"})]}),s.jsxs(Bh,{children:[s.jsx(Uh,{htmlFor:"newPassword",children:"New Password"}),s.jsx(Hh,{id:"newPassword",type:"password",value:i.newPassword,onChange:m("newPassword"),disabled:l,autoComplete:"new-password",minLength:8})]}),s.jsxs(Bh,{children:[s.jsx(Uh,{htmlFor:"confirmPassword",children:"Confirm New Password"}),s.jsx(Hh,{id:"confirmPassword",type:"password",value:i.confirmPassword,onChange:m("confirmPassword"),disabled:l,autoComplete:"new-password",minLength:8})]}),h&&s.jsx(lR,{$type:h.type,children:h.text}),s.jsx("div",{style:{marginTop:"20px"},children:s.jsx(G,{type:"submit",disabled:l,children:l?"Changing Password...":"Change Password"})})]})})]}),s.jsxs(X,{title:"System Management",children:[s.jsx("div",{style:{display:"flex",gap:"10px",marginBottom:"20px"},children:s.jsx(G,{onClick:()=>n("/settings/backup"),variant:"secondary",children:"Backup Manager"})}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[s.jsx(q,{label:"Interface Version",value:"LCARS v1.0",color:"blue"}),s.jsx(q,{label:"System Status",value:"Operational",color:"green"}),s.jsx(q,{label:"API Endpoint",value:"/api/v1",color:"blue"}),s.jsx(q,{label:"Authentication",value:"JWT Token-based",color:"purple"})]})]})]})},dR=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`,hR=g.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${e=>e.theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,fR=g.div`
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
          background: ${e.theme.colors.primary.blue}20;
          color: ${e.theme.colors.primary.blue};
          border: 1px solid ${e.theme.colors.primary.blue};
        `}}}
`,pR=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,mR=g.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 1px solid ${e=>e.theme.colors.primary.blue};
  padding: ${e=>e.theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    border-color: ${e=>e.theme.colors.primary.orange};
  }
`,gR=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,yR=g.div`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: bold;
  font-family: ${e=>e.theme.typography.fontFamily.monospace};
`,vR=g.div`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,xR=g.div`
  display: flex;
  gap: ${e=>e.theme.spacing.sm};
`,_R=g.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xl};
  color: ${e=>e.theme.colors.text.secondary};
  font-style: italic;
`,wR=()=>{const[e,t]=z.useState([]),[n,i]=z.useState(!0),[o,l]=z.useState(!1),[u,h]=z.useState(null);z.useEffect(()=>{f()},[]);const f=async()=>{try{i(!0);const b=await pe.getBackups();t(b)}catch(b){h({type:"error",text:b.message||"Failed to load backups"})}finally{i(!1)}},m=async()=>{if(!o){l(!0),h({type:"info",text:"Creating backup... This may take a few minutes."});try{const b=await pe.createBackup();h({type:"success",text:`Backup created successfully: ${b.filename}`}),await f()}catch(b){h({type:"error",text:b.message||"Failed to create backup"})}finally{l(!1)}}},w=async b=>{try{h({type:"info",text:`Downloading ${b.filename}...`});const $=await pe.downloadBackup(b.id),j=window.URL.createObjectURL($),T=document.createElement("a");T.href=j,T.download=b.filename,document.body.appendChild(T),T.click(),document.body.removeChild(T),window.URL.revokeObjectURL(j),h({type:"success",text:`Download started: ${b.filename}`})}catch($){h({type:"error",text:$.message||"Failed to download backup"})}},y=b=>{if(b===0)return"0 Bytes";const $=1024,j=["Bytes","KB","MB","GB"],T=Math.floor(Math.log(b)/Math.log($));return parseFloat((b/Math.pow($,T)).toFixed(2))+" "+j[T]},S=b=>new Date(b).toLocaleString();return s.jsxs(dR,{children:[s.jsx(ce,{children:"Database Backup Manager"}),u&&s.jsx(fR,{$type:u.type,children:u.text}),s.jsxs(hR,{children:[s.jsxs(X,{title:"Backup Operations",children:[s.jsxs("div",{style:{marginBottom:"20px"},children:[s.jsx("div",{style:{width:"100%",marginBottom:"10px"},children:s.jsx(G,{onClick:m,disabled:o,children:o?"Creating Backup...":"Create Manual Backup"})}),s.jsx("div",{style:{width:"100%"},children:s.jsx(G,{onClick:f,disabled:n,variant:"secondary",children:n?"Refreshing...":"Refresh List"})})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[s.jsx(q,{label:"Total Backups",value:e.length.toString(),color:"blue"}),s.jsx(q,{label:"Total Size",value:y(e.reduce((b,$)=>b+$.size,0)),color:"purple"}),s.jsx(q,{label:"Latest Backup",value:e.length>0?S(e[0].createdAt):"None",color:"orange"})]}),s.jsxs("div",{style:{marginTop:"20px",padding:"10px",background:"rgba(255, 153, 102, 0.1)",border:"1px solid #FF9966"},children:[s.jsx("strong",{style:{color:"#FF9966"},children:"Important:"}),s.jsxs("ul",{style:{margin:"10px 0",paddingLeft:"20px",color:"#CCCCCC"},children:[s.jsx("li",{children:"Backups include both database records and uploaded photos"}),s.jsx("li",{children:"Large backups may take several minutes to create"}),s.jsx("li",{children:"Store backups in a secure location outside the system"}),s.jsx("li",{children:"Test backup restoration procedures regularly"})]})]})]}),s.jsx(X,{title:"Available Backups",children:n?s.jsx("div",{style:{textAlign:"center",padding:"40px"},children:s.jsx("div",{style:{color:"#6688CC"},children:"Loading backups..."})}):e.length===0?s.jsx(_R,{children:"No backups available. Create your first backup to get started."}):s.jsx(pR,{children:e.map(b=>s.jsxs(mR,{children:[s.jsxs(gR,{children:[s.jsx(yR,{children:b.filename}),s.jsxs(vR,{children:[s.jsxs("span",{children:["Created: ",S(b.createdAt)]}),s.jsxs("span",{children:["Size: ",y(b.size)]})]})]}),s.jsx(xR,{children:s.jsx(G,{onClick:()=>w(b),variant:"secondary",size:"sm",children:"Download"})})]},b.id))})})]})]})},bR=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
`,SR=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,jR=g.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
`,CR=g.h2`
  color: ${e=>e.theme.colors.primary.orange};
  font-size: ${e=>e.theme.typography.fontSize.xl};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  min-width: 200px;
  text-align: center;
`,$R=g.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: ${e=>e.theme.colors.primary.blue};
  border: 2px solid ${e=>e.theme.colors.primary.blue};
`,kR=g.div`
  background-color: ${e=>e.theme.colors.primary.blue};
  color: ${e=>e.theme.colors.text.primary};
  padding: ${e=>e.theme.spacing.sm};
  text-align: center;
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: ${e=>e.theme.typography.fontSize.sm};
`,TR=g.div`
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
    border: 2px solid ${e.theme.colors.primary.orange};
    background-color: ${e.theme.colors.primary.orange}10;
  `}
  
  ${e=>e.$hasEvents&&`
    border-left: 4px solid ${e.theme.colors.primary.purple};
  `}
`,LR=g.div`
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  color: ${e=>e.$isToday?e.theme.colors.primary.orange:e.theme.colors.text.primary};
  margin-bottom: ${e=>e.theme.spacing.xs};
`,ER=g.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`,zx=g.div`
  background-color: ${e=>e.$type==="trip"?e.theme.colors.primary.blue:e.theme.colors.primary.purple};
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
`,PR=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,AR=g.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Mx=g.div`
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
`,zR=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],MR=["January","February","March","April","May","June","July","August","September","October","November","December"],RR=()=>{const[e,t]=z.useState(new Date),[n,i]=z.useState([]),{data:o,isLoading:l}=vi(),{data:u,isLoading:h}=Pm();z.useEffect(()=>{const v=[];o&&o.forEach(x=>{var _;v.push({id:`trip-${x.id}`,title:`Trip: ${((_=x.boat)==null?void 0:_.name)||"Unknown Boat"}`,date:new Date(x.startTime),type:"trip",data:x})}),u&&u.forEach(x=>{var _;v.push({id:`maintenance-${x.id}`,title:`Maintenance: ${((_=x.template)==null?void 0:_.title)||"Unknown Task"}`,date:new Date(x.dueDate),type:"maintenance",data:x})}),i(v)},[o,u]);const f=v=>{t(x=>{const _=new Date(x);return v==="prev"?_.setMonth(x.getMonth()-1):_.setMonth(x.getMonth()+1),_})},m=()=>{t(new Date)},w=v=>{const x=v.getFullYear(),_=v.getMonth(),k=new Date(x,_,1),A=new Date(x,_+1,0).getDate(),N=k.getDay(),F=[];for(let R=N-1;R>=0;R--){const Z=new Date(x,_,-R);F.push(Z)}for(let R=1;R<=A;R++)F.push(new Date(x,_,R));const U=42-F.length;for(let R=1;R<=U;R++)F.push(new Date(x,_+1,R));return F},y=v=>n.filter(x=>new Date(x.date).toDateString()===v.toDateString()),S=v=>{const x=new Date;return v.toDateString()===x.toDateString()},b=v=>v.getMonth()===e.getMonth(),$=w(e),j=(o==null?void 0:o.filter(v=>{const x=new Date(v.startTime);return x.getMonth()===e.getMonth()&&x.getFullYear()===e.getFullYear()}))||[],T=(u==null?void 0:u.filter(v=>{const x=new Date(v.dueDate);return x.getMonth()===e.getMonth()&&x.getFullYear()===e.getFullYear()}))||[];return s.jsxs(bR,{children:[s.jsx(ce,{children:"Mission Calendar"}),s.jsxs(PR,{children:[s.jsx(q,{label:"Current Month Trips",value:j.length.toString(),color:"blue"}),s.jsx(q,{label:"Upcoming Maintenance",value:T.length.toString(),color:"purple"}),s.jsx(q,{label:"Total Events",value:(j.length+T.length).toString(),color:"orange"})]}),s.jsxs(X,{title:"Calendar View",children:[s.jsxs(SR,{children:[s.jsxs(jR,{children:[s.jsx(G,{onClick:()=>f("prev"),variant:"secondary",size:"sm",children:"← Previous"}),s.jsxs(CR,{children:[MR[e.getMonth()]," ",e.getFullYear()]}),s.jsx(G,{onClick:()=>f("next"),variant:"secondary",size:"sm",children:"Next →"})]}),s.jsx(G,{onClick:m,size:"sm",children:"Today"})]}),s.jsxs(AR,{children:[s.jsx(Mx,{$color:"#6688CC",children:"Trips"}),s.jsx(Mx,{$color:"#CC99CC",children:"Maintenance"})]}),s.jsxs($R,{children:[zR.map(v=>s.jsx(kR,{children:v},v)),$.map((v,x)=>{const _=y(v);return s.jsxs(TR,{$isCurrentMonth:b(v),$isToday:S(v),$hasEvents:_.length>0,children:[s.jsx(LR,{$isToday:S(v),children:v.getDate()}),s.jsxs(ER,{children:[_.slice(0,3).map(k=>s.jsx(zx,{$type:k.type,title:k.title,children:k.title},k.id)),_.length>3&&s.jsxs(zx,{$type:"trip",children:["+",_.length-3," more"]})]})]},x)})]}),(l||h)&&s.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#6688CC"},children:"Loading calendar data..."})]})]})},IR=g.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
`,NR=g.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing.md};
  flex-wrap: wrap;
`,DR=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-top: ${e=>e.theme.spacing.md};
`,OR=g.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.blue};
  border-radius: ${e=>e.theme.borderRadius.sm};
  overflow: hidden;
  cursor: pointer;
  transition: all ${e=>e.theme.animation.normal} ease;
  
  &:hover {
    border-color: ${e=>e.theme.colors.primary.orange};
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.glow};
  }
`,FR=g.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`,BR=g.div`
  padding: ${e=>e.theme.spacing.sm};
`,UR=g.div`
  color: ${e=>e.theme.colors.text.primary};
  font-weight: ${e=>e.theme.typography.fontWeight.bold};
  font-size: ${e=>e.theme.typography.fontSize.sm};
  margin-bottom: ${e=>e.theme.spacing.xs};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,HR=g.div`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: ${e=>e.theme.typography.fontSize.xs};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ZR=g.span`
  background: ${e=>e.theme.colors.primary.blue};
  color: ${e=>e.theme.colors.text.primary};
  padding: 2px 6px;
  border-radius: 2px;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
`,WR=g.div`
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
`,VR=g.div`
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
`,qR=g.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border: 2px solid ${e=>e.theme.colors.primary.orange};
`,GR=g.div`
  background: ${e=>e.theme.colors.surface.dark};
  border: 2px solid ${e=>e.theme.colors.primary.blue};
  padding: ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.theme.colors.text.primary};
  text-align: center;
  max-width: 500px;
`,KR=g.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,QR=g.div`
  text-align: center;
  padding: ${e=>e.theme.spacing.xl};
  color: ${e=>e.theme.colors.text.secondary};
  font-style: italic;
`,YR=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,JR=()=>{const[e,t]=z.useState([]),[n,i]=z.useState([]),[o,l]=z.useState("all"),[u,h]=z.useState(null),[f,m]=z.useState(!0),{data:w,isLoading:y}=vi();z.useEffect(()=>{const v=[];w&&w.forEach(x=>{x.photos&&x.photos.forEach(_=>{var k;v.push({..._,contextType:"trip",contextTitle:`Trip: ${((k=x.boat)==null?void 0:k.name)||"Unknown Boat"}`,contextDate:new Date(x.startTime).toLocaleDateString()})})}),v.sort((x,_)=>new Date(_.createdAt).getTime()-new Date(x.createdAt).getTime()),t(v),m(y)},[w,y]),z.useEffect(()=>{let v=e;o==="trips"&&(v=e.filter(x=>x.contextType==="trip")),i(v)},[e,o]);const S=v=>{h(v)},b=()=>{h(null)},$=v=>{if(!u)return;const x=n.findIndex(k=>k.id===u.id);let _=x;v==="prev"?_=x>0?x-1:n.length-1:_=x<n.length-1?x+1:0,h(n[_])},j=v=>{if(v===0)return"0 Bytes";const x=1024,_=["Bytes","KB","MB","GB"],k=Math.floor(Math.log(v)/Math.log(x));return parseFloat((v/Math.pow(x,k)).toFixed(2))+" "+_[k]},T=e.filter(v=>v.contextType==="trip");return s.jsxs(IR,{children:[s.jsx(ce,{children:"Photo Gallery"}),s.jsxs(YR,{children:[s.jsx(q,{label:"Total Photos",value:e.length.toString(),color:"orange"}),s.jsx(q,{label:"Trip Photos",value:T.length.toString(),color:"blue"}),s.jsx(q,{label:"Maintenance Photos",value:"0",color:"purple"}),s.jsx(q,{label:"Total Size",value:j(e.reduce((v,x)=>v+(x.sizeBytes||0),0)),color:"blue"})]}),s.jsxs(X,{title:"Photo Collection",children:[s.jsxs(NR,{children:[s.jsxs(G,{onClick:()=>l("all"),variant:o==="all"?"primary":"secondary",size:"sm",children:["All Photos (",e.length,")"]}),s.jsxs(G,{onClick:()=>l("trips"),variant:o==="trips"?"primary":"secondary",size:"sm",children:["Trip Photos (",T.length,")"]}),s.jsx(G,{onClick:()=>l("trips"),variant:o==="trips"?"primary":"secondary",size:"sm",disabled:!0,children:"Maintenance Photos (Coming Soon)"})]}),f?s.jsx("div",{style:{textAlign:"center",padding:"40px"},children:s.jsx("div",{style:{color:"#6688CC"},children:"Loading photos..."})}):n.length===0?s.jsx(QR,{children:"No photos found. Photos will appear here when you attach them to trips."}):s.jsx(DR,{children:n.map(v=>s.jsxs(OR,{onClick:()=>S(v),children:[s.jsx(FR,{src:v.webOptimizedPath||v.originalPath,alt:v.contextTitle,loading:"lazy"}),s.jsxs(BR,{children:[s.jsx(UR,{children:v.contextTitle}),s.jsxs(HR,{children:[s.jsx(ZR,{$type:v.contextType,children:v.contextType}),s.jsx("span",{children:v.contextDate})]})]})]},v.id))})]}),s.jsx(WR,{$isOpen:!!u,onClick:b,children:u&&s.jsxs(VR,{onClick:v=>v.stopPropagation(),children:[s.jsx(qR,{src:u.webOptimizedPath||u.originalPath,alt:u.contextTitle}),s.jsxs(GR,{children:[s.jsx("div",{style:{marginBottom:"10px"},children:s.jsx("strong",{children:u.contextTitle})}),s.jsxs("div",{style:{fontSize:"14px",color:"#CCCCCC"},children:[s.jsxs("div",{children:["Date: ",u.contextDate]}),s.jsxs("div",{children:["Size: ",j(u.sizeBytes||0)]}),s.jsxs("div",{children:["Type: ",u.mimeType]}),u.metadata&&s.jsxs("div",{children:["Dimensions: ",u.metadata.width," × ",u.metadata.height]})]})]}),s.jsxs(KR,{children:[s.jsx(G,{onClick:()=>$("prev"),variant:"secondary",size:"sm",children:"← Previous"}),s.jsx(G,{onClick:b,size:"sm",children:"Close"}),s.jsx(G,{onClick:()=>$("next"),variant:"secondary",size:"sm",children:"Next →"})]})]})})]})},Se={orange:"#FF9900",lightOrange:"#FFCC99",blue:"#9999FF",lightBlue:"#CCCCFF",purple:"#CC99CC",red:"#FF6666",black:"#000000",darkGray:"#333333",frameOrange:"#FF9966",textOrange:"#FFCC66"},XR=g.div`
  background-color: ${Se.black};
  min-height: 100vh;
  padding: 0;
  font-family: 'Courier New', monospace;
  color: ${Se.lightOrange};
  overflow: hidden;
`,eI=g.div`
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 80px 1fr 80px;
  height: 100vh;
  gap: 8px;
  padding: 8px;
`,tI=g.div`
  grid-column: 1 / -1;
  background-color: ${Se.frameOrange};
  border-radius: 0 0 40px 40px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  
  h1 {
    color: ${Se.black};
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin: 0;
  }
`,nI=g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,rI=g.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,iI=g.div`
  grid-column: 1 / -1;
  background-color: ${Se.frameOrange};
  border-radius: 40px 40px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  
  .status {
    color: ${Se.black};
    font-weight: bold;
    text-transform: uppercase;
  }
`,oI=g.div`
  background-color: ${Se.black};
  padding: 20px;
  overflow-y: auto;
  border: 2px solid ${Se.frameOrange};
  border-radius: 20px;
`,Ar=g.button`
  background-color: ${e=>{switch(e.variant){case"primary":return Se.orange;case"secondary":return Se.blue;case"alert":return Se.red;case"inactive":return Se.darkGray;default:return Se.orange}}};
  
  color: ${Se.black};
  border: none;
  border-radius: ${e=>e.tall?"30px":"20px"};
  height: ${e=>e.tall?"60px":"40px"};
  width: 100%;
  
  font-family: 'Courier New', monospace;
  font-size: ${e=>e.tall?"1.1rem":"0.9rem"};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  cursor: pointer;
  transition: all 0.2s ease;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    filter: brightness(1.2);
    transform: translateY(-1px);
  }
  
  &:active {
    filter: brightness(0.9);
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,oc=g.div`
  background-color: ${e=>{switch(e.variant){case"primary":return Se.lightOrange;case"secondary":return Se.lightBlue;case"alert":return Se.red;default:return Se.lightOrange}}};
  
  color: ${Se.black};
  border-radius: 15px;
  padding: 20px;
  margin: 10px 0;
  
  h3 {
    margin: 0 0 15px 0;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  .data-row {
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    font-family: 'Courier New', monospace;
    
    .label {
      font-weight: bold;
    }
    
    .value {
      font-family: 'Courier New', monospace;
    }
  }
`,sc=g.div`
  width: 100%;
  height: 60px;
  background-color: ${e=>e.color||Se.orange};
  
  ${e=>{switch(e.position){case"top-left":return"border-radius: 0 0 30px 0;";case"top-right":return"border-radius: 0 0 0 30px;";case"bottom-left":return"border-radius: 0 30px 0 0;";case"bottom-right":return"border-radius: 30px 0 0 0;";default:return"border-radius: 0 0 30px 0;"}}}
`,ar=g.div`
  width: 100%;
  height: ${e=>e.height||20}px;
  background-color: ${e=>e.color||Se.orange};
  border-radius: 10px;
  margin: 5px 0;
`,Rx=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;
`,Ix=g.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${e=>{switch(e.status){case"online":return"#00FF00";case"offline":return"#666666";case"warning":return"#FFFF00";case"error":return"#FF0000";default:return"#666666"}}};
    animation: ${e=>e.status==="online"?"pulse 2s infinite":"none"};
  }
  
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }
`,sI=()=>s.jsx(XR,{children:s.jsxs(eI,{children:[s.jsxs(tI,{children:[s.jsx("h1",{children:"Boat Tracking System"}),s.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:"20px",alignItems:"center"},children:[s.jsx(Ix,{status:"online",children:"ONLINE"}),s.jsx("span",{style:{color:Se.black,fontWeight:"bold"},children:"STARDATE 78945.2"})]})]}),s.jsxs(nI,{children:[s.jsx(sc,{position:"top-left"}),s.jsx(Ar,{variant:"primary",tall:!0,onClick:()=>alert("Navigation"),children:"NAV"}),s.jsx(Ar,{variant:"primary",tall:!0,onClick:()=>alert("Trips"),children:"TRIPS"}),s.jsx(Ar,{variant:"secondary",tall:!0,onClick:()=>alert("Boats"),children:"BOATS"}),s.jsx(Ar,{variant:"secondary",tall:!0,onClick:()=>alert("Maintenance"),children:"MAINT"}),s.jsx(Ar,{variant:"primary",tall:!0,onClick:()=>alert("Reports"),children:"REPORTS"}),s.jsx(ar,{color:Se.blue,height:30}),s.jsx(Ar,{variant:"alert",onClick:()=>alert("Emergency"),children:"EMERGENCY"}),s.jsx(sc,{position:"bottom-left"})]}),s.jsxs(oI,{children:[s.jsxs("div",{style:{marginBottom:"30px"},children:[s.jsx("h2",{style:{color:Se.orange,fontSize:"1.8rem",textTransform:"uppercase",letterSpacing:"2px",marginBottom:"20px"},children:"Authentic LCARS Interface Demo"}),s.jsx("p",{style:{color:Se.lightOrange,lineHeight:"1.6",marginBottom:"20px"},children:"This implementation is inspired by the authentic LCARS interface from Star Trek TNG/DS9, following the design patterns seen on thelcars.com with proper proportions, colors, and layout."})]}),s.jsx(ar,{color:Se.orange,height:8}),s.jsxs(Rx,{children:[s.jsxs(oc,{variant:"primary",children:[s.jsx("h3",{children:"Current Mission Status"}),s.jsxs("div",{className:"data-row",children:[s.jsx("span",{className:"label",children:"Active Vessels:"}),s.jsx("span",{className:"value",children:"3"})]}),s.jsxs("div",{className:"data-row",children:[s.jsx("span",{className:"label",children:"Trips Today:"}),s.jsx("span",{className:"value",children:"7"})]}),s.jsxs("div",{className:"data-row",children:[s.jsx("span",{className:"label",children:"Sea Time Hours:"}),s.jsx("span",{className:"value",children:"1,247.5"})]}),s.jsxs("div",{className:"data-row",children:[s.jsx("span",{className:"label",children:"Last Sync:"}),s.jsx("span",{className:"value",children:"14:32:15"})]})]}),s.jsxs(oc,{variant:"secondary",children:[s.jsx("h3",{children:"Captain's License Progress"}),s.jsxs("div",{className:"data-row",children:[s.jsx("span",{className:"label",children:"Sea Time Days:"}),s.jsx("span",{className:"value",children:"127 / 360"})]}),s.jsxs("div",{className:"data-row",children:[s.jsx("span",{className:"label",children:"90-Day Period:"}),s.jsx("span",{className:"value",children:"23 / 90"})]}),s.jsxs("div",{className:"data-row",children:[s.jsx("span",{className:"label",children:"Progress:"}),s.jsx("span",{className:"value",children:"35.3%"})]}),s.jsxs("div",{className:"data-row",children:[s.jsx("span",{className:"label",children:"Est. Complete:"}),s.jsx("span",{className:"value",children:"18 MONTHS"})]})]})]}),s.jsx(ar,{color:Se.blue,height:8}),s.jsxs(Rx,{children:[s.jsxs(oc,{variant:"primary",children:[s.jsx("h3",{children:"Recent Activity Log"}),s.jsxs("div",{className:"data-row",children:[s.jsx("span",{className:"label",children:"14:25"}),s.jsx("span",{className:"value",children:"TRIP #1247 COMPLETED"})]}),s.jsxs("div",{className:"data-row",children:[s.jsx("span",{className:"label",children:"13:45"}),s.jsx("span",{className:"value",children:"GPS TRACKING ACTIVE"})]}),s.jsxs("div",{className:"data-row",children:[s.jsx("span",{className:"label",children:"12:30"}),s.jsx("span",{className:"value",children:"MAINTENANCE LOGGED"})]}),s.jsxs("div",{className:"data-row",children:[s.jsx("span",{className:"label",children:"11:15"}),s.jsx("span",{className:"value",children:"SYNC COMPLETED"})]})]}),s.jsxs(oc,{variant:"alert",children:[s.jsx("h3",{children:"System Alerts"}),s.jsxs("div",{className:"data-row",children:[s.jsx("span",{className:"label",children:"ENGINE OIL:"}),s.jsx("span",{className:"value",children:"DUE IN 3 DAYS"})]}),s.jsxs("div",{className:"data-row",children:[s.jsx("span",{className:"label",children:"HULL CLEAN:"}),s.jsx("span",{className:"value",children:"DUE IN 12 DAYS"})]}),s.jsxs("div",{className:"data-row",children:[s.jsx("span",{className:"label",children:"SAFETY CHECK:"}),s.jsx("span",{className:"value",children:"DUE IN 28 DAYS"})]})]})]}),s.jsx("div",{style:{marginTop:"30px",textAlign:"center"},children:s.jsx("p",{style:{color:Se.textOrange,fontSize:"1.1rem",fontWeight:"bold"},children:"This is what proper LCARS should look like - authentic TNG/DS9 styling with characteristic curved corners, proper proportions, and the classic orange/blue color scheme."})})]}),s.jsxs(rI,{children:[s.jsx(sc,{position:"top-right",color:Se.blue}),s.jsx(ar,{color:Se.blue,height:40}),s.jsx(ar,{color:Se.orange,height:25}),s.jsx(ar,{color:Se.blue,height:40}),s.jsx(ar,{color:Se.purple,height:30}),s.jsx(ar,{color:Se.orange,height:35}),s.jsx(ar,{color:Se.blue,height:25}),s.jsx(Ar,{variant:"inactive",children:"OFFLINE"}),s.jsx(sc,{position:"bottom-right",color:Se.blue})]}),s.jsxs(iI,{children:[s.jsx("div",{className:"status",children:s.jsx(Ix,{status:"online",children:"All Systems Operational"})}),s.jsx("div",{className:"status",children:"LCARS Interface v2.4.1"}),s.jsx(Ar,{variant:"primary",onClick:()=>window.history.back(),style:{width:"150px",height:"40px"},children:"Return"})]})]})}),ac=g.div`
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text.primary};
`,aI=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.background};
  
  .loading-text {
    color: ${e=>e.theme.colors.primary.orange};
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;function lI(){const{isAuthenticated:e,isLoading:t,needsSetup:n}=Lm();return t?s.jsx(ac,{children:s.jsx(aI,{children:s.jsx("div",{className:"loading-text",children:"Initializing LCARS Interface"})})}):n?s.jsx(ac,{children:s.jsx(ah,{})}):e?s.jsx(ac,{children:s.jsx(di,{children:s.jsxs(iv,{children:[s.jsx($e,{path:"/",element:s.jsx(rh,{})}),s.jsx($e,{path:"/dashboard",element:s.jsx(rh,{})}),s.jsx($e,{path:"/boats",element:s.jsx(WP,{})}),s.jsx($e,{path:"/boats/new",element:s.jsx(pA,{})}),s.jsx($e,{path:"/boats/:id",element:s.jsx(iA,{})}),s.jsx($e,{path:"/trips",element:s.jsx(kA,{})}),s.jsx($e,{path:"/trips/:id",element:s.jsx(uz,{})}),s.jsx($e,{path:"/trips/:id/edit",element:s.jsx(yz,{})}),s.jsx($e,{path:"/notes",element:s.jsx(zz,{})}),s.jsx($e,{path:"/notes/new",element:s.jsx(ax,{})}),s.jsx($e,{path:"/notes/:id",element:s.jsx(Zz,{})}),s.jsx($e,{path:"/notes/:id/edit",element:s.jsx(ax,{})}),s.jsx($e,{path:"/todos",element:s.jsx(bM,{})}),s.jsx($e,{path:"/todos/new",element:s.jsx(qM,{})}),s.jsx($e,{path:"/todos/:id",element:s.jsx(OM,{})}),s.jsx($e,{path:"/maintenance",element:s.jsx(o2,{})}),s.jsx($e,{path:"/maintenance/templates/new",element:s.jsx(Cx,{})}),s.jsx($e,{path:"/maintenance/templates/:id",element:s.jsx(h2,{})}),s.jsx($e,{path:"/maintenance/templates/:id/edit",element:s.jsx(Cx,{})}),s.jsx($e,{path:"/maintenance/events/:id",element:s.jsx(w2,{})}),s.jsx($e,{path:"/map",element:s.jsx(W2,{})}),s.jsx($e,{path:"/reports",element:s.jsx(oR,{})}),s.jsx($e,{path:"/reports/license",element:s.jsx(Y2,{})}),s.jsx($e,{path:"/reports/maintenance",element:s.jsx(nR,{})}),s.jsx($e,{path:"/settings",element:s.jsx(uR,{})}),s.jsx($e,{path:"/settings/backup",element:s.jsx(wR,{})}),s.jsx($e,{path:"/calendar",element:s.jsx(RR,{})}),s.jsx($e,{path:"/photos",element:s.jsx(JR,{})}),s.jsx($e,{path:"/lcars-demo",element:s.jsx(sI,{})}),s.jsx($e,{path:"*",element:s.jsx(rh,{})})]})})}):s.jsx(ac,{children:s.jsxs(iv,{children:[s.jsx($e,{path:"/setup",element:s.jsx(ah,{})}),s.jsx($e,{path:"*",element:s.jsx(ah,{})})]})})}const cI=AT`
  /* Import Antonio font from Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@400;700&display=swap');

  /* CSS Reset and Base Styles */
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

  body {
    font-family: ${e=>e.theme.typography.fontFamily.primary};
    font-size: ${e=>e.theme.typography.fontSize.md};
    line-height: ${e=>e.theme.typography.lineHeight.normal};
    color: ${e=>e.theme.colors.text.primary};
    background-color: ${e=>e.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
  }

  /* LCARS-specific global styles */
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${e=>e.theme.typography.fontWeight.bold};
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${e=>e.theme.colors.primary.orange};
  }

  h1 {
    font-size: ${e=>e.theme.typography.fontSize.xxxl};
  }

  h2 {
    font-size: ${e=>e.theme.typography.fontSize.xxl};
  }

  h3 {
    font-size: ${e=>e.theme.typography.fontSize.xl};
  }

  h4 {
    font-size: ${e=>e.theme.typography.fontSize.lg};
  }

  h5, h6 {
    font-size: ${e=>e.theme.typography.fontSize.md};
  }

  /* Button reset */
  button {
    font-family: inherit;
    font-size: inherit;
    border: none;
    background: none;
    cursor: pointer;
    color: inherit;
  }

  /* Input reset */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: ${e=>e.theme.colors.surface.dark};
    border: 2px solid ${e=>e.theme.colors.primary.orange};
    border-radius: ${e=>e.theme.borderRadius.sm};
    padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.md};
    
    &:focus {
      outline: none;
      border-color: ${e=>e.theme.colors.primary.orangeLight};
      box-shadow: ${e=>e.theme.shadows.glow};
    }
    
    &::placeholder {
      color: ${e=>e.theme.colors.text.muted};
    }
  }

  /* Link styles */
  a {
    color: ${e=>e.theme.colors.primary.blue};
    text-decoration: none;
    
    &:hover {
      color: ${e=>e.theme.colors.primary.blueLight};
      text-decoration: underline;
    }
  }

  /* Scrollbar styling for LCARS theme */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${e=>e.theme.colors.surface.dark};
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.colors.primary.orange};
    border-radius: ${e=>e.theme.borderRadius.pill};
    
    &:hover {
      background: ${e=>e.theme.colors.primary.orangeLight};
    }
  }

  /* Selection styling */
  ::selection {
    background-color: ${e=>e.theme.colors.primary.orange};
    color: ${e=>e.theme.colors.text.inverse};
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

  .font-mono {
    font-family: ${e=>e.theme.typography.fontFamily.monospace};
  }

  /* Animation classes */
  .fade-in {
    animation: fadeIn ${e=>e.theme.animation.normal} ease-in-out;
  }

  .slide-in-right {
    animation: slideInRight ${e=>e.theme.animation.normal} ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  /* LCARS blink animation for alerts */
  @keyframes lcars-blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0.3;
    }
  }

  .lcars-blink {
    animation: lcars-blink 1s infinite;
  }

  /* Responsive utilities */
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    body {
      font-size: ${e=>e.theme.typography.fontSize.sm};
    }
    
    h1 {
      font-size: ${e=>e.theme.typography.fontSize.xxl};
    }
    
    h2 {
      font-size: ${e=>e.theme.typography.fontSize.xl};
    }
  }
`,uI={colors:{primary:{orange:"#FF9966",orangeLight:"#FFCC99",purple:"#CC99CC",purpleLight:"#9999CC",blue:"#6688CC",blueLight:"#99CCFF"},background:"#000000",surface:{dark:"#111111",medium:"#222222",light:"#333333"},text:{primary:"#FFFFFF",secondary:"#CCCCCC",muted:"#999999",inverse:"#000000"},status:{success:"#66FF66",warning:"#FFFF66",error:"#FF6666",info:"#66CCFF"},interactive:{hover:"#FFFFFF",active:"#FFCC99",disabled:"#666666"}},typography:{fontFamily:{primary:"'Antonio', 'Helvetica Neue', Arial, sans-serif",monospace:"'Courier New', monospace"},fontSize:{xs:"12px",sm:"14px",md:"16px",lg:"18px",xl:"24px",xxl:"32px",xxxl:"48px"},fontWeight:{normal:400,bold:700},lineHeight:{tight:1.2,normal:1.5,loose:1.8}},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px",xxxl:"64px"},borderRadius:{none:"0",sm:"4px",md:"8px",lg:"16px",xl:"24px",pill:"9999px"},shadows:{sm:"0 1px 2px rgba(255, 153, 102, 0.1)",md:"0 4px 6px rgba(255, 153, 102, 0.1)",lg:"0 10px 15px rgba(255, 153, 102, 0.1)",glow:"0 0 20px rgba(255, 153, 102, 0.3)"},zIndex:{dropdown:1e3,sticky:1020,fixed:1030,modal:1040,popover:1050,tooltip:1060},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px"},animation:{fast:"150ms",normal:"300ms",slow:"500ms"}},dI=new vk({defaultOptions:{queries:{retry:3,staleTime:5*60*1e3,refetchOnWindowFocus:!1}}});Vh.createRoot(document.getElementById("root")).render(s.jsx(We.StrictMode,{children:s.jsx(xk,{client:dI,children:s.jsx(V$,{children:s.jsxs(LT,{theme:uI,children:[s.jsx(cI,{}),s.jsx(lI,{})]})})})}));
//# sourceMappingURL=index-oeyA4Nfm.js.map
