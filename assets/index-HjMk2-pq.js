function Mv(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const U1="modulepreload",$1=function(t){return"/cahtapp/"+t},Cm={},Fa=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=$1(o),o in Cm)return;Cm[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const f=s[d];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":U1,a||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),a)return new Promise((d,f)=>{c.addEventListener("load",d),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};function Fv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function pF(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Uv={exports:{}},Iu={},$v={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ga=Symbol.for("react.element"),j1=Symbol.for("react.portal"),z1=Symbol.for("react.fragment"),B1=Symbol.for("react.strict_mode"),W1=Symbol.for("react.profiler"),H1=Symbol.for("react.provider"),V1=Symbol.for("react.context"),K1=Symbol.for("react.forward_ref"),G1=Symbol.for("react.suspense"),q1=Symbol.for("react.memo"),Y1=Symbol.for("react.lazy"),Im=Symbol.iterator;function Q1(t){return t===null||typeof t!="object"?null:(t=Im&&t[Im]||t["@@iterator"],typeof t=="function"?t:null)}var jv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zv=Object.assign,Bv={};function Ps(t,e,n){this.props=t,this.context=e,this.refs=Bv,this.updater=n||jv}Ps.prototype.isReactComponent={};Ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wv(){}Wv.prototype=Ps.prototype;function Jf(t,e,n){this.props=t,this.context=e,this.refs=Bv,this.updater=n||jv}var Xf=Jf.prototype=new Wv;Xf.constructor=Jf;zv(Xf,Ps.prototype);Xf.isPureReactComponent=!0;var Tm=Array.isArray,Hv=Object.prototype.hasOwnProperty,Zf={current:null},Vv={key:!0,ref:!0,__self:!0,__source:!0};function Kv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Hv.call(e,r)&&!Vv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ga,type:t,key:s,ref:o,props:i,_owner:Zf.current}}function J1(t,e){return{$$typeof:ga,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function eh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ga}function X1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var km=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?X1(""+t.key):e.toString(36)}function ol(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ga:case j1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xc(o,0):r,Tm(i)?(n="",t!=null&&(n=t.replace(km,"$&/")+"/"),ol(i,e,n,"",function(u){return u})):i!=null&&(eh(i)&&(i=J1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(km,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Tm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+xc(s,a);o+=ol(s,e,n,l,i)}else if(l=Q1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+xc(s,a++),o+=ol(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ua(t,e,n){if(t==null)return t;var r=[],i=0;return ol(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Z1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},al={transition:null},eC={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:al,ReactCurrentOwner:Zf};Q.Children={map:Ua,forEach:function(t,e,n){Ua(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ua(t,function(){e++}),e},toArray:function(t){return Ua(t,function(e){return e})||[]},only:function(t){if(!eh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=Ps;Q.Fragment=z1;Q.Profiler=W1;Q.PureComponent=Jf;Q.StrictMode=B1;Q.Suspense=G1;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eC;Q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=zv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Hv.call(e,l)&&!Vv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ga,type:t.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(t){return t={$$typeof:V1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:H1,_context:t},t.Consumer=t};Q.createElement=Kv;Q.createFactory=function(t){var e=Kv.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:K1,render:t}};Q.isValidElement=eh;Q.lazy=function(t){return{$$typeof:Y1,_payload:{_status:-1,_result:t},_init:Z1}};Q.memo=function(t,e){return{$$typeof:q1,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=al.transition;al.transition={};try{t()}finally{al.transition=e}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(t,e){return ht.current.useCallback(t,e)};Q.useContext=function(t){return ht.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};Q.useEffect=function(t,e){return ht.current.useEffect(t,e)};Q.useId=function(){return ht.current.useId()};Q.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};Q.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return ht.current.useMemo(t,e)};Q.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};Q.useRef=function(t){return ht.current.useRef(t)};Q.useState=function(t){return ht.current.useState(t)};Q.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};Q.useTransition=function(){return ht.current.useTransition()};Q.version="18.2.0";$v.exports=Q;var k=$v.exports;const Gv=Fv(k),Td=Mv({__proto__:null,default:Gv},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tC=k,nC=Symbol.for("react.element"),rC=Symbol.for("react.fragment"),iC=Object.prototype.hasOwnProperty,sC=tC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oC={key:!0,ref:!0,__self:!0,__source:!0};function qv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)iC.call(e,r)&&!oC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:nC,type:t,key:s,ref:o,props:i,_owner:sC.current}}Iu.Fragment=rC;Iu.jsx=qv;Iu.jsxs=qv;Uv.exports=Iu;var $e=Uv.exports,kd={},Yv={exports:{}},Mt={},Qv={exports:{}},Jv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,z){var W=N.length;N.push(z);e:for(;0<W;){var te=W-1>>>1,me=N[te];if(0<i(me,z))N[te]=z,N[W]=me,W=te;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],W=N.pop();if(W!==z){N[0]=W;e:for(var te=0,me=N.length,fn=me>>>1;te<fn;){var Ye=2*(te+1)-1,Jt=N[Ye],ct=Ye+1,Xn=N[ct];if(0>i(Jt,W))ct<me&&0>i(Xn,Jt)?(N[te]=Xn,N[ct]=W,te=ct):(N[te]=Jt,N[Ye]=W,te=Ye);else if(ct<me&&0>i(Xn,W))N[te]=Xn,N[ct]=W,te=ct;else break e}}return z}function i(N,z){var W=N.sortIndex-z.sortIndex;return W!==0?W:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,v=!1,g=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=N)r(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function I(N){if(g=!1,y(N),!v)if(n(l)!==null)v=!0,Jn(R);else{var z=n(u);z!==null&&ve(I,z.startTime-N)}}function R(N,z){v=!1,g&&(g=!1,p(A),A=-1),m=!0;var W=f;try{for(y(z),d=n(l);d!==null&&(!(d.expirationTime>z)||N&&!Z());){var te=d.callback;if(typeof te=="function"){d.callback=null,f=d.priorityLevel;var me=te(d.expirationTime<=z);z=t.unstable_now(),typeof me=="function"?d.callback=me:d===n(l)&&r(l),y(z)}else r(l);d=n(l)}if(d!==null)var fn=!0;else{var Ye=n(u);Ye!==null&&ve(I,Ye.startTime-z),fn=!1}return fn}finally{d=null,f=W,m=!1}}var _=!1,C=null,A=-1,D=5,F=-1;function Z(){return!(t.unstable_now()-F<D)}function Fe(){if(C!==null){var N=t.unstable_now();F=N;var z=!0;try{z=C(!0,N)}finally{z?De():(_=!1,C=null)}}else _=!1}var De;if(typeof h=="function")De=function(){h(Fe)};else if(typeof MessageChannel<"u"){var $t=new MessageChannel,Ti=$t.port2;$t.port1.onmessage=Fe,De=function(){Ti.postMessage(null)}}else De=function(){E(Fe,0)};function Jn(N){C=N,_||(_=!0,De())}function ve(N,z){A=E(function(){N(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,Jn(R))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var W=f;f=z;try{return N()}finally{f=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=f;f=N;try{return z()}finally{f=W}},t.unstable_scheduleCallback=function(N,z,W){var te=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?te+W:te):W=te,N){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=W+me,N={id:c++,callback:z,priorityLevel:N,startTime:W,expirationTime:me,sortIndex:-1},W>te?(N.sortIndex=W,e(u,N),n(l)===null&&N===n(u)&&(g?(p(A),A=-1):g=!0,ve(I,W-te))):(N.sortIndex=me,e(l,N),v||m||(v=!0,Jn(R))),N},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(N){var z=f;return function(){var W=f;f=z;try{return N.apply(this,arguments)}finally{f=W}}}})(Jv);Qv.exports=Jv;var aC=Qv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv=k,Lt=aC;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zv=new Set,Oo={};function gi(t,e){ps(t,e),ps(t+"Capture",e)}function ps(t,e){for(Oo[t]=e,t=0;t<e.length;t++)Zv.add(e[t])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rd=Object.prototype.hasOwnProperty,lC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rm={},Pm={};function uC(t){return Rd.call(Pm,t)?!0:Rd.call(Rm,t)?!1:lC.test(t)?Pm[t]=!0:(Rm[t]=!0,!1)}function cC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dC(t,e,n,r){if(e===null||typeof e>"u"||cC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var th=/[\-:]([a-z])/g;function nh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(th,nh);nt[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(th,nh);nt[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(th,nh);nt[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function rh(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dC(e,n,i,r)&&(n=null),r||i===null?uC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yn=Xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),Fi=Symbol.for("react.portal"),Ui=Symbol.for("react.fragment"),ih=Symbol.for("react.strict_mode"),Pd=Symbol.for("react.profiler"),e_=Symbol.for("react.provider"),t_=Symbol.for("react.context"),sh=Symbol.for("react.forward_ref"),bd=Symbol.for("react.suspense"),xd=Symbol.for("react.suspense_list"),oh=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),n_=Symbol.for("react.offscreen"),bm=Symbol.iterator;function Hs(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,Ac;function uo(t){if(Ac===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ac=e&&e[1]||""}return`
`+Ac+t}var Nc=!1;function Oc(t,e){if(!t||Nc)return"";Nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?uo(t):""}function fC(t){switch(t.tag){case 5:return uo(t.type);case 16:return uo("Lazy");case 13:return uo("Suspense");case 19:return uo("SuspenseList");case 0:case 2:case 15:return t=Oc(t.type,!1),t;case 11:return t=Oc(t.type.render,!1),t;case 1:return t=Oc(t.type,!0),t;default:return""}}function Ad(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ui:return"Fragment";case Fi:return"Portal";case Pd:return"Profiler";case ih:return"StrictMode";case bd:return"Suspense";case xd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case t_:return(t.displayName||"Context")+".Consumer";case e_:return(t._context.displayName||"Context")+".Provider";case sh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case oh:return e=t.displayName||null,e!==null?e:Ad(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return Ad(t(e))}catch{}}return null}function hC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ad(e);case 8:return e===ih?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function r_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pC(t){var e=r_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ja(t){t._valueTracker||(t._valueTracker=pC(t))}function i_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=r_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nd(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function s_(t,e){e=e.checked,e!=null&&rh(t,"checked",e,!1)}function Od(t,e){s_(t,e);var n=kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Dd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Dd(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Am(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Dd(t,e,n){(e!=="number"||kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var co=Array.isArray;function Zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ld(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(co(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function o_(t,e){var n=kr(e.value),r=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Om(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function a_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Md(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?a_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var za,l_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(za=za||document.createElement("div"),za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Do(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mC=["Webkit","ms","Moz","O"];Object.keys(go).forEach(function(t){mC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),go[e]=go[t]})});function u_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||go.hasOwnProperty(t)&&go[t]?(""+e).trim():e+"px"}function c_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=u_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gC=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fd(t,e){if(e){if(gC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function Ud(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $d=null;function ah(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jd=null,es=null,ts=null;function Dm(t){if(t=_a(t)){if(typeof jd!="function")throw Error(P(280));var e=t.stateNode;e&&(e=bu(e),jd(t.stateNode,t.type,e))}}function d_(t){es?ts?ts.push(t):ts=[t]:es=t}function f_(){if(es){var t=es,e=ts;if(ts=es=null,Dm(t),e)for(t=0;t<e.length;t++)Dm(e[t])}}function h_(t,e){return t(e)}function p_(){}var Dc=!1;function m_(t,e,n){if(Dc)return t(e,n);Dc=!0;try{return h_(t,e,n)}finally{Dc=!1,(es!==null||ts!==null)&&(p_(),f_())}}function Lo(t,e){var n=t.stateNode;if(n===null)return null;var r=bu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var zd=!1;if(zn)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){zd=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{zd=!1}function yC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var yo=!1,Rl=null,Pl=!1,Bd=null,vC={onError:function(t){yo=!0,Rl=t}};function _C(t,e,n,r,i,s,o,a,l){yo=!1,Rl=null,yC.apply(vC,arguments)}function wC(t,e,n,r,i,s,o,a,l){if(_C.apply(this,arguments),yo){if(yo){var u=Rl;yo=!1,Rl=null}else throw Error(P(198));Pl||(Pl=!0,Bd=u)}}function yi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function g_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lm(t){if(yi(t)!==t)throw Error(P(188))}function EC(t){var e=t.alternate;if(!e){if(e=yi(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Lm(i),t;if(s===r)return Lm(i),e;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function y_(t){return t=EC(t),t!==null?v_(t):null}function v_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=v_(t);if(e!==null)return e;t=t.sibling}return null}var __=Lt.unstable_scheduleCallback,Mm=Lt.unstable_cancelCallback,SC=Lt.unstable_shouldYield,CC=Lt.unstable_requestPaint,Ne=Lt.unstable_now,IC=Lt.unstable_getCurrentPriorityLevel,lh=Lt.unstable_ImmediatePriority,w_=Lt.unstable_UserBlockingPriority,bl=Lt.unstable_NormalPriority,TC=Lt.unstable_LowPriority,E_=Lt.unstable_IdlePriority,Tu=null,_n=null;function kC(t){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(Tu,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:bC,RC=Math.log,PC=Math.LN2;function bC(t){return t>>>=0,t===0?32:31-(RC(t)/PC|0)|0}var Ba=64,Wa=4194304;function fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=fo(a):(s&=o,s!==0&&(r=fo(s)))}else o=n&~i,o!==0?r=fo(o):s!==0&&(r=fo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),i=1<<n,r|=t[n],e&=~i;return r}function xC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-on(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=xC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Wd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function S_(){var t=Ba;return Ba<<=1,!(Ba&4194240)&&(Ba=64),t}function Lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ya(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function NC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-on(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function uh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function C_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var I_,ch,T_,k_,R_,Hd=!1,Ha=[],mr=null,gr=null,yr=null,Mo=new Map,Fo=new Map,ar=[],OC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fm(t,e){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(e.pointerId)}}function Ks(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=_a(e),e!==null&&ch(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function DC(t,e,n,r,i){switch(e){case"focusin":return mr=Ks(mr,t,e,n,r,i),!0;case"dragenter":return gr=Ks(gr,t,e,n,r,i),!0;case"mouseover":return yr=Ks(yr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Mo.set(s,Ks(Mo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Fo.set(s,Ks(Fo.get(s)||null,t,e,n,r,i)),!0}return!1}function P_(t){var e=Br(t.target);if(e!==null){var n=yi(e);if(n!==null){if(e=n.tag,e===13){if(e=g_(n),e!==null){t.blockedOn=e,R_(t.priority,function(){T_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);$d=r,n.target.dispatchEvent(r),$d=null}else return e=_a(n),e!==null&&ch(e),t.blockedOn=n,!1;e.shift()}return!0}function Um(t,e,n){ll(t)&&n.delete(e)}function LC(){Hd=!1,mr!==null&&ll(mr)&&(mr=null),gr!==null&&ll(gr)&&(gr=null),yr!==null&&ll(yr)&&(yr=null),Mo.forEach(Um),Fo.forEach(Um)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Hd||(Hd=!0,Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority,LC)))}function Uo(t){function e(i){return Gs(i,t)}if(0<Ha.length){Gs(Ha[0],t);for(var n=1;n<Ha.length;n++){var r=Ha[n];r.blockedOn===t&&(r.blockedOn=null)}}for(mr!==null&&Gs(mr,t),gr!==null&&Gs(gr,t),yr!==null&&Gs(yr,t),Mo.forEach(e),Fo.forEach(e),n=0;n<ar.length;n++)r=ar[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)P_(n),n.blockedOn===null&&ar.shift()}var ns=Yn.ReactCurrentBatchConfig,Al=!0;function MC(t,e,n,r){var i=oe,s=ns.transition;ns.transition=null;try{oe=1,dh(t,e,n,r)}finally{oe=i,ns.transition=s}}function FC(t,e,n,r){var i=oe,s=ns.transition;ns.transition=null;try{oe=4,dh(t,e,n,r)}finally{oe=i,ns.transition=s}}function dh(t,e,n,r){if(Al){var i=Vd(t,e,n,r);if(i===null)Vc(t,e,r,Nl,n),Fm(t,r);else if(DC(i,t,e,n,r))r.stopPropagation();else if(Fm(t,r),e&4&&-1<OC.indexOf(t)){for(;i!==null;){var s=_a(i);if(s!==null&&I_(s),s=Vd(t,e,n,r),s===null&&Vc(t,e,r,Nl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Vc(t,e,r,null,n)}}var Nl=null;function Vd(t,e,n,r){if(Nl=null,t=ah(r),t=Br(t),t!==null)if(e=yi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=g_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Nl=t,null}function b_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(IC()){case lh:return 1;case w_:return 4;case bl:case TC:return 16;case E_:return 536870912;default:return 16}default:return 16}}var hr=null,fh=null,ul=null;function x_(){if(ul)return ul;var t,e=fh,n=e.length,r,i="value"in hr?hr.value:hr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ul=i.slice(t,1<r?1-r:void 0)}function cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Va(){return!0}function $m(){return!1}function Ft(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Va:$m,this.isPropagationStopped=$m,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),e}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hh=Ft(bs),va=Ce({},bs,{view:0,detail:0}),UC=Ft(va),Mc,Fc,qs,ku=Ce({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ph,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(Mc=t.screenX-qs.screenX,Fc=t.screenY-qs.screenY):Fc=Mc=0,qs=t),Mc)},movementY:function(t){return"movementY"in t?t.movementY:Fc}}),jm=Ft(ku),$C=Ce({},ku,{dataTransfer:0}),jC=Ft($C),zC=Ce({},va,{relatedTarget:0}),Uc=Ft(zC),BC=Ce({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),WC=Ft(BC),HC=Ce({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),VC=Ft(HC),KC=Ce({},bs,{data:0}),zm=Ft(KC),GC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=YC[t])?!!e[t]:!1}function ph(){return QC}var JC=Ce({},va,{key:function(t){if(t.key){var e=GC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ph,charCode:function(t){return t.type==="keypress"?cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),XC=Ft(JC),ZC=Ce({},ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bm=Ft(ZC),eI=Ce({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ph}),tI=Ft(eI),nI=Ce({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),rI=Ft(nI),iI=Ce({},ku,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sI=Ft(iI),oI=[9,13,27,32],mh=zn&&"CompositionEvent"in window,vo=null;zn&&"documentMode"in document&&(vo=document.documentMode);var aI=zn&&"TextEvent"in window&&!vo,A_=zn&&(!mh||vo&&8<vo&&11>=vo),Wm=" ",Hm=!1;function N_(t,e){switch(t){case"keyup":return oI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function O_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $i=!1;function lI(t,e){switch(t){case"compositionend":return O_(e);case"keypress":return e.which!==32?null:(Hm=!0,Wm);case"textInput":return t=e.data,t===Wm&&Hm?null:t;default:return null}}function uI(t,e){if($i)return t==="compositionend"||!mh&&N_(t,e)?(t=x_(),ul=fh=hr=null,$i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return A_&&e.locale!=="ko"?null:e.data;default:return null}}var cI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cI[t.type]:e==="textarea"}function D_(t,e,n,r){d_(r),e=Ol(e,"onChange"),0<e.length&&(n=new hh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var _o=null,$o=null;function dI(t){V_(t,0)}function Ru(t){var e=Bi(t);if(i_(e))return t}function fI(t,e){if(t==="change")return e}var L_=!1;if(zn){var $c;if(zn){var jc="oninput"in document;if(!jc){var Km=document.createElement("div");Km.setAttribute("oninput","return;"),jc=typeof Km.oninput=="function"}$c=jc}else $c=!1;L_=$c&&(!document.documentMode||9<document.documentMode)}function Gm(){_o&&(_o.detachEvent("onpropertychange",M_),$o=_o=null)}function M_(t){if(t.propertyName==="value"&&Ru($o)){var e=[];D_(e,$o,t,ah(t)),m_(dI,e)}}function hI(t,e,n){t==="focusin"?(Gm(),_o=e,$o=n,_o.attachEvent("onpropertychange",M_)):t==="focusout"&&Gm()}function pI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ru($o)}function mI(t,e){if(t==="click")return Ru(e)}function gI(t,e){if(t==="input"||t==="change")return Ru(e)}function yI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:yI;function jo(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rd.call(e,i)||!un(t[i],e[i]))return!1}return!0}function qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ym(t,e){var n=qm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qm(n)}}function F_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?F_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function U_(){for(var t=window,e=kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kl(t.document)}return e}function gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vI(t){var e=U_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&F_(n.ownerDocument.documentElement,n)){if(r!==null&&gh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ym(n,s);var o=Ym(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _I=zn&&"documentMode"in document&&11>=document.documentMode,ji=null,Kd=null,wo=null,Gd=!1;function Qm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gd||ji==null||ji!==kl(r)||(r=ji,"selectionStart"in r&&gh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wo&&jo(wo,r)||(wo=r,r=Ol(Kd,"onSelect"),0<r.length&&(e=new hh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ji)))}function Ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zi={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionend:Ka("Transition","TransitionEnd")},zc={},$_={};zn&&($_=document.createElement("div").style,"AnimationEvent"in window||(delete zi.animationend.animation,delete zi.animationiteration.animation,delete zi.animationstart.animation),"TransitionEvent"in window||delete zi.transitionend.transition);function Pu(t){if(zc[t])return zc[t];if(!zi[t])return t;var e=zi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $_)return zc[t]=e[n];return t}var j_=Pu("animationend"),z_=Pu("animationiteration"),B_=Pu("animationstart"),W_=Pu("transitionend"),H_=new Map,Jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){H_.set(t,e),gi(e,[t])}for(var Bc=0;Bc<Jm.length;Bc++){var Wc=Jm[Bc],wI=Wc.toLowerCase(),EI=Wc[0].toUpperCase()+Wc.slice(1);xr(wI,"on"+EI)}xr(j_,"onAnimationEnd");xr(z_,"onAnimationIteration");xr(B_,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(W_,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gi("onBeforeInput",["compositionend","keypress","textInput","paste"]);gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SI=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function Xm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,wC(r,e,void 0,t),t.currentTarget=null}function V_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Xm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Xm(i,a,u),s=l}}}if(Pl)throw t=Bd,Pl=!1,Bd=null,t}function ge(t,e){var n=e[Xd];n===void 0&&(n=e[Xd]=new Set);var r=t+"__bubble";n.has(r)||(K_(e,t,2,!1),n.add(r))}function Hc(t,e,n){var r=0;e&&(r|=4),K_(n,t,r,e)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function zo(t){if(!t[Ga]){t[Ga]=!0,Zv.forEach(function(n){n!=="selectionchange"&&(SI.has(n)||Hc(n,!1,t),Hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ga]||(e[Ga]=!0,Hc("selectionchange",!1,e))}}function K_(t,e,n,r){switch(b_(e)){case 1:var i=MC;break;case 4:i=FC;break;default:i=dh}n=i.bind(null,e,n,t),i=void 0,!zd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Vc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Br(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}m_(function(){var u=s,c=ah(n),d=[];e:{var f=H_.get(t);if(f!==void 0){var m=hh,v=t;switch(t){case"keypress":if(cl(n)===0)break e;case"keydown":case"keyup":m=XC;break;case"focusin":v="focus",m=Uc;break;case"focusout":v="blur",m=Uc;break;case"beforeblur":case"afterblur":m=Uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=jC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=tI;break;case j_:case z_:case B_:m=WC;break;case W_:m=rI;break;case"scroll":m=UC;break;case"wheel":m=sI;break;case"copy":case"cut":case"paste":m=VC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Bm}var g=(e&4)!==0,E=!g&&t==="scroll",p=g?f!==null?f+"Capture":null:f;g=[];for(var h=u,y;h!==null;){y=h;var I=y.stateNode;if(y.tag===5&&I!==null&&(y=I,p!==null&&(I=Lo(h,p),I!=null&&g.push(Bo(h,I,y)))),E)break;h=h.return}0<g.length&&(f=new m(f,v,null,n,c),d.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==$d&&(v=n.relatedTarget||n.fromElement)&&(Br(v)||v[Bn]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Br(v):null,v!==null&&(E=yi(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(g=jm,I="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(g=Bm,I="onPointerLeave",p="onPointerEnter",h="pointer"),E=m==null?f:Bi(m),y=v==null?f:Bi(v),f=new g(I,h+"leave",m,n,c),f.target=E,f.relatedTarget=y,I=null,Br(c)===u&&(g=new g(p,h+"enter",v,n,c),g.target=y,g.relatedTarget=E,I=g),E=I,m&&v)t:{for(g=m,p=v,h=0,y=g;y;y=bi(y))h++;for(y=0,I=p;I;I=bi(I))y++;for(;0<h-y;)g=bi(g),h--;for(;0<y-h;)p=bi(p),y--;for(;h--;){if(g===p||p!==null&&g===p.alternate)break t;g=bi(g),p=bi(p)}g=null}else g=null;m!==null&&Zm(d,f,m,g,!1),v!==null&&E!==null&&Zm(d,E,v,g,!0)}}e:{if(f=u?Bi(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var R=fI;else if(Vm(f))if(L_)R=gI;else{R=pI;var _=hI}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=mI);if(R&&(R=R(t,u))){D_(d,R,n,c);break e}_&&_(t,f,u),t==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&Dd(f,"number",f.value)}switch(_=u?Bi(u):window,t){case"focusin":(Vm(_)||_.contentEditable==="true")&&(ji=_,Kd=u,wo=null);break;case"focusout":wo=Kd=ji=null;break;case"mousedown":Gd=!0;break;case"contextmenu":case"mouseup":case"dragend":Gd=!1,Qm(d,n,c);break;case"selectionchange":if(_I)break;case"keydown":case"keyup":Qm(d,n,c)}var C;if(mh)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else $i?N_(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(A_&&n.locale!=="ko"&&($i||A!=="onCompositionStart"?A==="onCompositionEnd"&&$i&&(C=x_()):(hr=c,fh="value"in hr?hr.value:hr.textContent,$i=!0)),_=Ol(u,A),0<_.length&&(A=new zm(A,t,null,n,c),d.push({event:A,listeners:_}),C?A.data=C:(C=O_(n),C!==null&&(A.data=C)))),(C=aI?lI(t,n):uI(t,n))&&(u=Ol(u,"onBeforeInput"),0<u.length&&(c=new zm("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}V_(d,e)})}function Bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ol(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Lo(t,n),s!=null&&r.unshift(Bo(t,s,i)),s=Lo(t,e),s!=null&&r.push(Bo(t,s,i))),t=t.return}return r}function bi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Lo(n,s),l!=null&&o.unshift(Bo(n,l,a))):i||(l=Lo(n,s),l!=null&&o.push(Bo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var CI=/\r\n?/g,II=/\u0000|\uFFFD/g;function eg(t){return(typeof t=="string"?t:""+t).replace(CI,`
`).replace(II,"")}function qa(t,e,n){if(e=eg(e),eg(t)!==e&&n)throw Error(P(425))}function Dl(){}var qd=null,Yd=null;function Qd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jd=typeof setTimeout=="function"?setTimeout:void 0,TI=typeof clearTimeout=="function"?clearTimeout:void 0,tg=typeof Promise=="function"?Promise:void 0,kI=typeof queueMicrotask=="function"?queueMicrotask:typeof tg<"u"?function(t){return tg.resolve(null).then(t).catch(RI)}:Jd;function RI(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Uo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Uo(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ng(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xs=Math.random().toString(36).slice(2),yn="__reactFiber$"+xs,Wo="__reactProps$"+xs,Bn="__reactContainer$"+xs,Xd="__reactEvents$"+xs,PI="__reactListeners$"+xs,bI="__reactHandles$"+xs;function Br(t){var e=t[yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bn]||n[yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ng(t);t!==null;){if(n=t[yn])return n;t=ng(t)}return e}t=n,n=t.parentNode}return null}function _a(t){return t=t[yn]||t[Bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function bu(t){return t[Wo]||null}var Zd=[],Wi=-1;function Ar(t){return{current:t}}function ye(t){0>Wi||(t.current=Zd[Wi],Zd[Wi]=null,Wi--)}function pe(t,e){Wi++,Zd[Wi]=t.current,t.current=e}var Rr={},lt=Ar(Rr),wt=Ar(!1),Zr=Rr;function ms(t,e){var n=t.type.contextTypes;if(!n)return Rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Et(t){return t=t.childContextTypes,t!=null}function Ll(){ye(wt),ye(lt)}function rg(t,e,n){if(lt.current!==Rr)throw Error(P(168));pe(lt,e),pe(wt,n)}function G_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,hC(t)||"Unknown",i));return Ce({},n,r)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,Zr=lt.current,pe(lt,t),pe(wt,wt.current),!0}function ig(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=G_(t,e,Zr),r.__reactInternalMemoizedMergedChildContext=t,ye(wt),ye(lt),pe(lt,t)):ye(wt),pe(wt,n)}var xn=null,xu=!1,Gc=!1;function q_(t){xn===null?xn=[t]:xn.push(t)}function xI(t){xu=!0,q_(t)}function Nr(){if(!Gc&&xn!==null){Gc=!0;var t=0,e=oe;try{var n=xn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xn=null,xu=!1}catch(i){throw xn!==null&&(xn=xn.slice(t+1)),__(lh,Nr),i}finally{oe=e,Gc=!1}}return null}var Hi=[],Vi=0,Fl=null,Ul=0,zt=[],Bt=0,ei=null,An=1,Nn="";function Ur(t,e){Hi[Vi++]=Ul,Hi[Vi++]=Fl,Fl=t,Ul=e}function Y_(t,e,n){zt[Bt++]=An,zt[Bt++]=Nn,zt[Bt++]=ei,ei=t;var r=An;t=Nn;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,An=1<<32-on(e)+i|n<<i|r,Nn=s+t}else An=1<<s|n<<i|r,Nn=t}function yh(t){t.return!==null&&(Ur(t,1),Y_(t,1,0))}function vh(t){for(;t===Fl;)Fl=Hi[--Vi],Hi[Vi]=null,Ul=Hi[--Vi],Hi[Vi]=null;for(;t===ei;)ei=zt[--Bt],zt[Bt]=null,Nn=zt[--Bt],zt[Bt]=null,An=zt[--Bt],zt[Bt]=null}var Nt=null,At=null,we=!1,nn=null;function Q_(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function sg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,At=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,At=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ei!==null?{id:An,overflow:Nn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,At=null,!0):!1;default:return!1}}function ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tf(t){if(we){var e=At;if(e){var n=e;if(!sg(t,e)){if(ef(t))throw Error(P(418));e=vr(n.nextSibling);var r=Nt;e&&sg(t,e)?Q_(r,n):(t.flags=t.flags&-4097|2,we=!1,Nt=t)}}else{if(ef(t))throw Error(P(418));t.flags=t.flags&-4097|2,we=!1,Nt=t}}}function og(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function Ya(t){if(t!==Nt)return!1;if(!we)return og(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qd(t.type,t.memoizedProps)),e&&(e=At)){if(ef(t))throw J_(),Error(P(418));for(;e;)Q_(t,e),e=vr(e.nextSibling)}if(og(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){At=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}At=null}}else At=Nt?vr(t.stateNode.nextSibling):null;return!0}function J_(){for(var t=At;t;)t=vr(t.nextSibling)}function gs(){At=Nt=null,we=!1}function _h(t){nn===null?nn=[t]:nn.push(t)}var AI=Yn.ReactCurrentBatchConfig;function Zt(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var $l=Ar(null),jl=null,Ki=null,wh=null;function Eh(){wh=Ki=jl=null}function Sh(t){var e=$l.current;ye($l),t._currentValue=e}function nf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){jl=t,wh=Ki=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function qt(t){var e=t._currentValue;if(wh!==t)if(t={context:t,memoizedValue:e,next:null},Ki===null){if(jl===null)throw Error(P(308));Ki=t,jl.dependencies={lanes:0,firstContext:t}}else Ki=Ki.next=t;return e}var Wr=null;function Ch(t){Wr===null?Wr=[t]:Wr.push(t)}function X_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ch(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wn(t,r)}function Wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function Ih(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Z_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ch(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wn(t,n)}function dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,uh(t,n)}}function ag(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zl(t,e,n,r){var i=t.updateQueue;or=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,g=a;switch(f=e,m=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){d=v.call(m,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,f=typeof v=="function"?v.call(m,d,f):v,f==null)break e;d=Ce({},d,f);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ni|=o,t.lanes=o,t.memoizedState=d}}function lg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var e0=new Xv.Component().refs;function rf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Au={isMounted:function(t){return(t=t._reactInternals)?yi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),i=Er(t),s=Fn(r,i);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(an(e,t,i,r),dl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),i=Er(t),s=Fn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(an(e,t,i,r),dl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=Er(t),i=Fn(n,r);i.tag=2,e!=null&&(i.callback=e),e=_r(t,i,r),e!==null&&(an(e,t,r,n),dl(e,t,r))}};function ug(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!jo(n,r)||!jo(i,s):!0}function t0(t,e,n){var r=!1,i=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=qt(s):(i=Et(e)?Zr:lt.current,r=e.contextTypes,s=(r=r!=null)?ms(t,i):Rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Au,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function cg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Au.enqueueReplaceState(e,e.state,null)}function sf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=e0,Ih(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=qt(s):(s=Et(e)?Zr:lt.current,i.context=ms(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Au.enqueueReplaceState(i,i.state,null),zl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===e0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function Qa(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dg(t){var e=t._init;return e(t._payload)}function n0(t){function e(p,h){if(t){var y=p.deletions;y===null?(p.deletions=[h],p.flags|=16):y.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Sr(p,h),p.index=0,p.sibling=null,p}function s(p,h,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<h?(p.flags|=2,h):y):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,y,I){return h===null||h.tag!==6?(h=ed(y,p.mode,I),h.return=p,h):(h=i(h,y),h.return=p,h)}function l(p,h,y,I){var R=y.type;return R===Ui?c(p,h,y.props.children,I,y.key):h!==null&&(h.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===sr&&dg(R)===h.type)?(I=i(h,y.props),I.ref=Ys(p,h,y),I.return=p,I):(I=yl(y.type,y.key,y.props,null,p.mode,I),I.ref=Ys(p,h,y),I.return=p,I)}function u(p,h,y,I){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=td(y,p.mode,I),h.return=p,h):(h=i(h,y.children||[]),h.return=p,h)}function c(p,h,y,I,R){return h===null||h.tag!==7?(h=Jr(y,p.mode,I,R),h.return=p,h):(h=i(h,y),h.return=p,h)}function d(p,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ed(""+h,p.mode,y),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case $a:return y=yl(h.type,h.key,h.props,null,p.mode,y),y.ref=Ys(p,null,h),y.return=p,y;case Fi:return h=td(h,p.mode,y),h.return=p,h;case sr:var I=h._init;return d(p,I(h._payload),y)}if(co(h)||Hs(h))return h=Jr(h,p.mode,y,null),h.return=p,h;Qa(p,h)}return null}function f(p,h,y,I){var R=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return R!==null?null:a(p,h,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case $a:return y.key===R?l(p,h,y,I):null;case Fi:return y.key===R?u(p,h,y,I):null;case sr:return R=y._init,f(p,h,R(y._payload),I)}if(co(y)||Hs(y))return R!==null?null:c(p,h,y,I,null);Qa(p,y)}return null}function m(p,h,y,I,R){if(typeof I=="string"&&I!==""||typeof I=="number")return p=p.get(y)||null,a(h,p,""+I,R);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case $a:return p=p.get(I.key===null?y:I.key)||null,l(h,p,I,R);case Fi:return p=p.get(I.key===null?y:I.key)||null,u(h,p,I,R);case sr:var _=I._init;return m(p,h,y,_(I._payload),R)}if(co(I)||Hs(I))return p=p.get(y)||null,c(h,p,I,R,null);Qa(h,I)}return null}function v(p,h,y,I){for(var R=null,_=null,C=h,A=h=0,D=null;C!==null&&A<y.length;A++){C.index>A?(D=C,C=null):D=C.sibling;var F=f(p,C,y[A],I);if(F===null){C===null&&(C=D);break}t&&C&&F.alternate===null&&e(p,C),h=s(F,h,A),_===null?R=F:_.sibling=F,_=F,C=D}if(A===y.length)return n(p,C),we&&Ur(p,A),R;if(C===null){for(;A<y.length;A++)C=d(p,y[A],I),C!==null&&(h=s(C,h,A),_===null?R=C:_.sibling=C,_=C);return we&&Ur(p,A),R}for(C=r(p,C);A<y.length;A++)D=m(C,p,A,y[A],I),D!==null&&(t&&D.alternate!==null&&C.delete(D.key===null?A:D.key),h=s(D,h,A),_===null?R=D:_.sibling=D,_=D);return t&&C.forEach(function(Z){return e(p,Z)}),we&&Ur(p,A),R}function g(p,h,y,I){var R=Hs(y);if(typeof R!="function")throw Error(P(150));if(y=R.call(y),y==null)throw Error(P(151));for(var _=R=null,C=h,A=h=0,D=null,F=y.next();C!==null&&!F.done;A++,F=y.next()){C.index>A?(D=C,C=null):D=C.sibling;var Z=f(p,C,F.value,I);if(Z===null){C===null&&(C=D);break}t&&C&&Z.alternate===null&&e(p,C),h=s(Z,h,A),_===null?R=Z:_.sibling=Z,_=Z,C=D}if(F.done)return n(p,C),we&&Ur(p,A),R;if(C===null){for(;!F.done;A++,F=y.next())F=d(p,F.value,I),F!==null&&(h=s(F,h,A),_===null?R=F:_.sibling=F,_=F);return we&&Ur(p,A),R}for(C=r(p,C);!F.done;A++,F=y.next())F=m(C,p,A,F.value,I),F!==null&&(t&&F.alternate!==null&&C.delete(F.key===null?A:F.key),h=s(F,h,A),_===null?R=F:_.sibling=F,_=F);return t&&C.forEach(function(Fe){return e(p,Fe)}),we&&Ur(p,A),R}function E(p,h,y,I){if(typeof y=="object"&&y!==null&&y.type===Ui&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case $a:e:{for(var R=y.key,_=h;_!==null;){if(_.key===R){if(R=y.type,R===Ui){if(_.tag===7){n(p,_.sibling),h=i(_,y.props.children),h.return=p,p=h;break e}}else if(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===sr&&dg(R)===_.type){n(p,_.sibling),h=i(_,y.props),h.ref=Ys(p,_,y),h.return=p,p=h;break e}n(p,_);break}else e(p,_);_=_.sibling}y.type===Ui?(h=Jr(y.props.children,p.mode,I,y.key),h.return=p,p=h):(I=yl(y.type,y.key,y.props,null,p.mode,I),I.ref=Ys(p,h,y),I.return=p,p=I)}return o(p);case Fi:e:{for(_=y.key;h!==null;){if(h.key===_)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(p,h.sibling),h=i(h,y.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=td(y,p.mode,I),h.return=p,p=h}return o(p);case sr:return _=y._init,E(p,h,_(y._payload),I)}if(co(y))return v(p,h,y,I);if(Hs(y))return g(p,h,y,I);Qa(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,y),h.return=p,p=h):(n(p,h),h=ed(y,p.mode,I),h.return=p,p=h),o(p)):n(p,h)}return E}var ys=n0(!0),r0=n0(!1),wa={},wn=Ar(wa),Ho=Ar(wa),Vo=Ar(wa);function Hr(t){if(t===wa)throw Error(P(174));return t}function Th(t,e){switch(pe(Vo,e),pe(Ho,t),pe(wn,wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Md(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Md(e,t)}ye(wn),pe(wn,e)}function vs(){ye(wn),ye(Ho),ye(Vo)}function i0(t){Hr(Vo.current);var e=Hr(wn.current),n=Md(e,t.type);e!==n&&(pe(Ho,t),pe(wn,n))}function kh(t){Ho.current===t&&(ye(wn),ye(Ho))}var Ee=Ar(0);function Bl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qc=[];function Rh(){for(var t=0;t<qc.length;t++)qc[t]._workInProgressVersionPrimary=null;qc.length=0}var fl=Yn.ReactCurrentDispatcher,Yc=Yn.ReactCurrentBatchConfig,ti=0,Se=null,Ue=null,He=null,Wl=!1,Eo=!1,Ko=0,NI=0;function it(){throw Error(P(321))}function Ph(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function bh(t,e,n,r,i,s){if(ti=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fl.current=t===null||t.memoizedState===null?MI:FI,t=n(r,i),Eo){s=0;do{if(Eo=!1,Ko=0,25<=s)throw Error(P(301));s+=1,He=Ue=null,e.updateQueue=null,fl.current=UI,t=n(r,i)}while(Eo)}if(fl.current=Hl,e=Ue!==null&&Ue.next!==null,ti=0,He=Ue=Se=null,Wl=!1,e)throw Error(P(300));return t}function xh(){var t=Ko!==0;return Ko=0,t}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Se.memoizedState=He=t:He=He.next=t,He}function Yt(){if(Ue===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=He===null?Se.memoizedState:He.next;if(e!==null)He=e,Ue=t;else{if(t===null)throw Error(P(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},He===null?Se.memoizedState=He=t:He=He.next=t}return He}function Go(t,e){return typeof e=="function"?e(t):e}function Qc(t){var e=Yt(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ti&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Se.lanes|=c,ni|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,un(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,ni|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jc(t){var e=Yt(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);un(s,e.memoizedState)||(yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function s0(){}function o0(t,e){var n=Se,r=Yt(),i=e(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,yt=!0),r=r.queue,Ah(u0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,qo(9,l0.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(P(349));ti&30||a0(n,e,i)}return i}function a0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function l0(t,e,n,r){e.value=n,e.getSnapshot=r,c0(e)&&d0(t)}function u0(t,e,n){return n(function(){c0(e)&&d0(t)})}function c0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function d0(t){var e=Wn(t,1);e!==null&&an(e,t,1,-1)}function fg(t){var e=pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:t},e.queue=t,t=t.dispatch=LI.bind(null,Se,t),[e.memoizedState,t]}function qo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function f0(){return Yt().memoizedState}function hl(t,e,n,r){var i=pn();Se.flags|=t,i.memoizedState=qo(1|e,n,void 0,r===void 0?null:r)}function Nu(t,e,n,r){var i=Yt();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&Ph(r,o.deps)){i.memoizedState=qo(e,n,s,r);return}}Se.flags|=t,i.memoizedState=qo(1|e,n,s,r)}function hg(t,e){return hl(8390656,8,t,e)}function Ah(t,e){return Nu(2048,8,t,e)}function h0(t,e){return Nu(4,2,t,e)}function p0(t,e){return Nu(4,4,t,e)}function m0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function g0(t,e,n){return n=n!=null?n.concat([t]):null,Nu(4,4,m0.bind(null,e,t),n)}function Nh(){}function y0(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ph(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function v0(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ph(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function _0(t,e,n){return ti&21?(un(n,e)||(n=S_(),Se.lanes|=n,ni|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function OI(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Yc.transition;Yc.transition={};try{t(!1),e()}finally{oe=n,Yc.transition=r}}function w0(){return Yt().memoizedState}function DI(t,e,n){var r=Er(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},E0(t))S0(e,n);else if(n=X_(t,e,n,r),n!==null){var i=ft();an(n,t,r,i),C0(n,e,r)}}function LI(t,e,n){var r=Er(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(E0(t))S0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,un(a,o)){var l=e.interleaved;l===null?(i.next=i,Ch(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=X_(t,e,i,r),n!==null&&(i=ft(),an(n,t,r,i),C0(n,e,r))}}function E0(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function S0(t,e){Eo=Wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function C0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,uh(t,n)}}var Hl={readContext:qt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},MI={readContext:qt,useCallback:function(t,e){return pn().memoizedState=[t,e===void 0?null:e],t},useContext:qt,useEffect:hg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,hl(4194308,4,m0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hl(4194308,4,t,e)},useInsertionEffect:function(t,e){return hl(4,2,t,e)},useMemo:function(t,e){var n=pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=DI.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=pn();return t={current:t},e.memoizedState=t},useState:fg,useDebugValue:Nh,useDeferredValue:function(t){return pn().memoizedState=t},useTransition:function(){var t=fg(!1),e=t[0];return t=OI.bind(null,t[1]),pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=pn();if(we){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),Ge===null)throw Error(P(349));ti&30||a0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,hg(u0.bind(null,r,s,t),[t]),r.flags|=2048,qo(9,l0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pn(),e=Ge.identifierPrefix;if(we){var n=Nn,r=An;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=NI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},FI={readContext:qt,useCallback:y0,useContext:qt,useEffect:Ah,useImperativeHandle:g0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:v0,useReducer:Qc,useRef:f0,useState:function(){return Qc(Go)},useDebugValue:Nh,useDeferredValue:function(t){var e=Yt();return _0(e,Ue.memoizedState,t)},useTransition:function(){var t=Qc(Go)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:s0,useSyncExternalStore:o0,useId:w0,unstable_isNewReconciler:!1},UI={readContext:qt,useCallback:y0,useContext:qt,useEffect:Ah,useImperativeHandle:g0,useInsertionEffect:h0,useLayoutEffect:p0,useMemo:v0,useReducer:Jc,useRef:f0,useState:function(){return Jc(Go)},useDebugValue:Nh,useDeferredValue:function(t){var e=Yt();return Ue===null?e.memoizedState=t:_0(e,Ue.memoizedState,t)},useTransition:function(){var t=Jc(Go)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:s0,useSyncExternalStore:o0,useId:w0,unstable_isNewReconciler:!1};function _s(t,e){try{var n="",r=e;do n+=fC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Xc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function of(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $I=typeof WeakMap=="function"?WeakMap:Map;function I0(t,e,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Kl||(Kl=!0,gf=r),of(t,e)},n}function T0(t,e,n){n=Fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){of(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){of(t,e),typeof r!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function pg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new $I;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ZI.bind(null,t,e,n),e.then(t,t))}function mg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fn(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var jI=Yn.ReactCurrentOwner,yt=!1;function dt(t,e,n,r){e.child=t===null?r0(e,null,n,r):ys(e,t.child,n,r)}function yg(t,e,n,r,i){n=n.render;var s=e.ref;return rs(e,i),r=bh(t,e,n,r,s,i),n=xh(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(we&&n&&yh(e),e.flags|=1,dt(t,e,r,i),e.child)}function vg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!jh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,k0(t,e,s,r,i)):(t=yl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:jo,n(o,r)&&t.ref===e.ref)return Hn(t,e,i)}return e.flags|=1,t=Sr(s,r),t.ref=e.ref,t.return=e,e.child=t}function k0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(jo(s,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,Hn(t,e,i)}return af(t,e,n,r,i)}function R0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(qi,bt),bt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(qi,bt),bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(qi,bt),bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(qi,bt),bt|=r;return dt(t,e,i,n),e.child}function P0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function af(t,e,n,r,i){var s=Et(n)?Zr:lt.current;return s=ms(e,s),rs(e,i),n=bh(t,e,n,r,s,i),r=xh(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(we&&r&&yh(e),e.flags|=1,dt(t,e,n,i),e.child)}function _g(t,e,n,r,i){if(Et(n)){var s=!0;Ml(e)}else s=!1;if(rs(e,i),e.stateNode===null)pl(t,e),t0(e,n,r),sf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=qt(u):(u=Et(n)?Zr:lt.current,u=ms(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&cg(e,o,r,u),or=!1;var f=e.memoizedState;o.state=f,zl(e,r,o,i),l=e.memoizedState,a!==r||f!==l||wt.current||or?(typeof c=="function"&&(rf(e,n,c,r),l=e.memoizedState),(a=or||ug(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Z_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Zt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qt(l):(l=Et(n)?Zr:lt.current,l=ms(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&cg(e,o,r,l),or=!1,f=e.memoizedState,o.state=f,zl(e,r,o,i);var v=e.memoizedState;a!==d||f!==v||wt.current||or?(typeof m=="function"&&(rf(e,n,m,r),v=e.memoizedState),(u=or||ug(e,n,u,r,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return lf(t,e,n,r,s,i)}function lf(t,e,n,r,i,s){P0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ig(e,n,!1),Hn(t,e,s);r=e.stateNode,jI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ys(e,t.child,null,s),e.child=ys(e,null,a,s)):dt(t,e,a,s),e.memoizedState=r.state,i&&ig(e,n,!0),e.child}function b0(t){var e=t.stateNode;e.pendingContext?rg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rg(t,e.context,!1),Th(t,e.containerInfo)}function wg(t,e,n,r,i){return gs(),_h(i),e.flags|=256,dt(t,e,n,r),e.child}var uf={dehydrated:null,treeContext:null,retryLane:0};function cf(t){return{baseLanes:t,cachePool:null,transitions:null}}function x0(t,e,n){var r=e.pendingProps,i=Ee.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Ee,i&1),t===null)return tf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Lu(o,r,0,null),t=Jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=cf(n),e.memoizedState=uf,t):Oh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return zI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Sr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Sr(a,s):(s=Jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?cf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=uf,r}return s=t.child,t=s.sibling,r=Sr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Oh(t,e){return e=Lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ja(t,e,n,r){return r!==null&&_h(r),ys(e,t.child,null,n),t=Oh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Xc(Error(P(422))),Ja(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Lu({mode:"visible",children:r.children},i,0,null),s=Jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ys(e,t.child,null,o),e.child.memoizedState=cf(o),e.memoizedState=uf,s);if(!(e.mode&1))return Ja(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=Xc(s,r,void 0),Ja(t,e,o,r)}if(a=(o&t.childLanes)!==0,yt||a){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wn(t,i),an(r,t,i,-1))}return $h(),r=Xc(Error(P(421))),Ja(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=eT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,At=vr(i.nextSibling),Nt=e,we=!0,nn=null,t!==null&&(zt[Bt++]=An,zt[Bt++]=Nn,zt[Bt++]=ei,An=t.id,Nn=t.overflow,ei=e),e=Oh(e,r.children),e.flags|=4096,e)}function Eg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),nf(t.return,e,n)}function Zc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function A0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(dt(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Eg(t,n,e);else if(t.tag===19)Eg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Bl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Zc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Bl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Zc(e,!0,n,null,s);break;case"together":Zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ni|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BI(t,e,n){switch(e.tag){case 3:b0(e),gs();break;case 5:i0(e);break;case 1:Et(e.type)&&Ml(e);break;case 4:Th(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe($l,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?x0(t,e,n):(pe(Ee,Ee.current&1),t=Hn(t,e,n),t!==null?t.sibling:null);pe(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return A0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,R0(t,e,n)}return Hn(t,e,n)}var N0,df,O0,D0;N0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};df=function(){};O0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hr(wn.current);var s=null;switch(n){case"input":i=Nd(t,i),r=Nd(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=Ld(t,i),r=Ld(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Dl)}Fd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Oo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ge("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};D0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Qs(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function WI(t,e,n){var r=e.pendingProps;switch(vh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return Et(e.type)&&Ll(),st(e),null;case 3:return r=e.stateNode,vs(),ye(wt),ye(lt),Rh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,nn!==null&&(_f(nn),nn=null))),df(t,e),st(e),null;case 5:kh(e);var i=Hr(Vo.current);if(n=e.type,t!==null&&e.stateNode!=null)O0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return st(e),null}if(t=Hr(wn.current),Ya(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[yn]=e,r[Wo]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<ho.length;i++)ge(ho[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":xm(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":Nm(r,s),ge("invalid",r)}Fd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&qa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&qa(r.textContent,a,t),i=["children",""+a]):Oo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":ja(r),Am(r,s,!0);break;case"textarea":ja(r),Om(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Dl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=a_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[yn]=e,t[Wo]=r,N0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ud(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<ho.length;i++)ge(ho[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":xm(t,r),i=Nd(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),ge("invalid",t);break;case"textarea":Nm(t,r),i=Ld(t,r),ge("invalid",t);break;default:i=r}Fd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?c_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&l_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Do(t,l):typeof l=="number"&&Do(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ge("scroll",t):l!=null&&rh(t,s,l,o))}switch(n){case"input":ja(t),Am(t,r,!1);break;case"textarea":ja(t),Om(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Zi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Dl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)D0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=Hr(Vo.current),Hr(wn.current),Ya(e)){if(r=e.stateNode,n=e.memoizedProps,r[yn]=e,(s=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:qa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=e,e.stateNode=r}return st(e),null;case 13:if(ye(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&At!==null&&e.mode&1&&!(e.flags&128))J_(),gs(),e.flags|=98560,s=!1;else if(s=Ya(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(P(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[yn]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else nn!==null&&(_f(nn),nn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?je===0&&(je=3):$h())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return vs(),df(t,e),t===null&&zo(e.stateNode.containerInfo),st(e),null;case 10:return Sh(e.type._context),st(e),null;case 17:return Et(e.type)&&Ll(),st(e),null;case 19:if(ye(Ee),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Qs(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Bl(t),o!==null){for(e.flags|=128,Qs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Ee,Ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>ws&&(e.flags|=128,r=!0,Qs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Bl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return st(e),null}else 2*Ne()-s.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,r=!0,Qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Ee.current,pe(Ee,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return Uh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?bt&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function HI(t,e){switch(vh(e),e.tag){case 1:return Et(e.type)&&Ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vs(),ye(wt),ye(lt),Rh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kh(e),null;case 13:if(ye(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(Ee),null;case 4:return vs(),null;case 10:return Sh(e.type._context),null;case 22:case 23:return Uh(),null;case 24:return null;default:return null}}var Xa=!1,at=!1,VI=typeof WeakSet=="function"?WeakSet:Set,O=null;function Gi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function ff(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Sg=!1;function KI(t,e){if(qd=Al,t=U_(),gh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yd={focusedElem:t,selectionRange:n},Al=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,E=v.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?g:Zt(e.type,g),E);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(I){Re(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return v=Sg,Sg=!1,v}function So(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ff(e,n,s)}i=i.next}while(i!==r)}}function Ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function hf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function L0(t){var e=t.alternate;e!==null&&(t.alternate=null,L0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yn],delete e[Wo],delete e[Xd],delete e[PI],delete e[bI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function M0(t){return t.tag===5||t.tag===3||t.tag===4}function Cg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||M0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Dl));else if(r!==4&&(t=t.child,t!==null))for(pf(t,e,n),t=t.sibling;t!==null;)pf(t,e,n),t=t.sibling}function mf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(mf(t,e,n),t=t.sibling;t!==null;)mf(t,e,n),t=t.sibling}var Je=null,en=!1;function nr(t,e,n){for(n=n.child;n!==null;)F0(t,e,n),n=n.sibling}function F0(t,e,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(Tu,n)}catch{}switch(n.tag){case 5:at||Gi(n,e);case 6:var r=Je,i=en;Je=null,nr(t,e,n),Je=r,en=i,Je!==null&&(en?(t=Je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(en?(t=Je,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),Uo(t)):Kc(Je,n.stateNode));break;case 4:r=Je,i=en,Je=n.stateNode.containerInfo,en=!0,nr(t,e,n),Je=r,en=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ff(n,e,o),i=i.next}while(i!==r)}nr(t,e,n);break;case 1:if(!at&&(Gi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Re(n,e,a)}nr(t,e,n);break;case 21:nr(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,nr(t,e,n),at=r):nr(t,e,n);break;default:nr(t,e,n)}}function Ig(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new VI),e.forEach(function(r){var i=tT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Je=a.stateNode,en=!1;break e;case 3:Je=a.stateNode.containerInfo,en=!0;break e;case 4:Je=a.stateNode.containerInfo,en=!0;break e}a=a.return}if(Je===null)throw Error(P(160));F0(s,o,i),Je=null,en=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Re(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)U0(e,t),e=e.sibling}function U0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xt(e,t),hn(t),r&4){try{So(3,t,t.return),Ou(3,t)}catch(g){Re(t,t.return,g)}try{So(5,t,t.return)}catch(g){Re(t,t.return,g)}}break;case 1:Xt(e,t),hn(t),r&512&&n!==null&&Gi(n,n.return);break;case 5:if(Xt(e,t),hn(t),r&512&&n!==null&&Gi(n,n.return),t.flags&32){var i=t.stateNode;try{Do(i,"")}catch(g){Re(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&s_(i,s),Ud(a,o);var u=Ud(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?c_(i,d):c==="dangerouslySetInnerHTML"?l_(i,d):c==="children"?Do(i,d):rh(i,c,d,u)}switch(a){case"input":Od(i,s);break;case"textarea":o_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Zi(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Zi(i,!!s.multiple,s.defaultValue,!0):Zi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Wo]=s}catch(g){Re(t,t.return,g)}}break;case 6:if(Xt(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(P(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(g){Re(t,t.return,g)}}break;case 3:if(Xt(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(g){Re(t,t.return,g)}break;case 4:Xt(e,t),hn(t);break;case 13:Xt(e,t),hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Mh=Ne())),r&4&&Ig(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(at=(u=at)||c,Xt(e,t),at=u):Xt(e,t),hn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(O=t,c=t.child;c!==null;){for(d=O=c;O!==null;){switch(f=O,m=f.child,f.tag){case 0:case 11:case 14:case 15:So(4,f,f.return);break;case 1:Gi(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(g){Re(r,n,g)}}break;case 5:Gi(f,f.return);break;case 22:if(f.memoizedState!==null){kg(d);continue}}m!==null?(m.return=f,O=m):kg(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=u_("display",o))}catch(g){Re(t,t.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){Re(t,t.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Xt(e,t),hn(t),r&4&&Ig(t);break;case 21:break;default:Xt(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(M0(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Do(i,""),r.flags&=-33);var s=Cg(t);mf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Cg(t);pf(t,a,o);break;default:throw Error(P(161))}}catch(l){Re(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function GI(t,e,n){O=t,$0(t)}function $0(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||at;a=Xa;var u=at;if(Xa=o,(at=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?Rg(i):l!==null?(l.return=o,O=l):Rg(i);for(;s!==null;)O=s,$0(s),s=s.sibling;O=i,Xa=a,at=u}Tg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):Tg(t)}}function Tg(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||Ou(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Uo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}at||e.flags&512&&hf(e)}catch(f){Re(e,e.return,f)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function kg(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function Rg(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ou(4,e)}catch(l){Re(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Re(e,i,l)}}var s=e.return;try{hf(e)}catch(l){Re(e,s,l)}break;case 5:var o=e.return;try{hf(e)}catch(l){Re(e,o,l)}}}catch(l){Re(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var qI=Math.ceil,Vl=Yn.ReactCurrentDispatcher,Dh=Yn.ReactCurrentOwner,Kt=Yn.ReactCurrentBatchConfig,X=0,Ge=null,Me=null,tt=0,bt=0,qi=Ar(0),je=0,Yo=null,ni=0,Du=0,Lh=0,Co=null,gt=null,Mh=0,ws=1/0,bn=null,Kl=!1,gf=null,wr=null,Za=!1,pr=null,Gl=0,Io=0,yf=null,ml=-1,gl=0;function ft(){return X&6?Ne():ml!==-1?ml:ml=Ne()}function Er(t){return t.mode&1?X&2&&tt!==0?tt&-tt:AI.transition!==null?(gl===0&&(gl=S_()),gl):(t=oe,t!==0||(t=window.event,t=t===void 0?16:b_(t.type)),t):1}function an(t,e,n,r){if(50<Io)throw Io=0,yf=null,Error(P(185));ya(t,n,r),(!(X&2)||t!==Ge)&&(t===Ge&&(!(X&2)&&(Du|=n),je===4&&lr(t,tt)),St(t,r),n===1&&X===0&&!(e.mode&1)&&(ws=Ne()+500,xu&&Nr()))}function St(t,e){var n=t.callbackNode;AC(t,e);var r=xl(t,t===Ge?tt:0);if(r===0)n!==null&&Mm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Mm(n),e===1)t.tag===0?xI(Pg.bind(null,t)):q_(Pg.bind(null,t)),kI(function(){!(X&6)&&Nr()}),n=null;else{switch(C_(r)){case 1:n=lh;break;case 4:n=w_;break;case 16:n=bl;break;case 536870912:n=E_;break;default:n=bl}n=G0(n,j0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function j0(t,e){if(ml=-1,gl=0,X&6)throw Error(P(327));var n=t.callbackNode;if(is()&&t.callbackNode!==n)return null;var r=xl(t,t===Ge?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ql(t,r);else{e=r;var i=X;X|=2;var s=B0();(Ge!==t||tt!==e)&&(bn=null,ws=Ne()+500,Qr(t,e));do try{JI();break}catch(a){z0(t,a)}while(!0);Eh(),Vl.current=s,X=i,Me!==null?e=0:(Ge=null,tt=0,e=je)}if(e!==0){if(e===2&&(i=Wd(t),i!==0&&(r=i,e=vf(t,i))),e===1)throw n=Yo,Qr(t,0),lr(t,r),St(t,Ne()),n;if(e===6)lr(t,r);else{if(i=t.current.alternate,!(r&30)&&!YI(i)&&(e=ql(t,r),e===2&&(s=Wd(t),s!==0&&(r=s,e=vf(t,s))),e===1))throw n=Yo,Qr(t,0),lr(t,r),St(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:$r(t,gt,bn);break;case 3:if(lr(t,r),(r&130023424)===r&&(e=Mh+500-Ne(),10<e)){if(xl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Jd($r.bind(null,t,gt,bn),e);break}$r(t,gt,bn);break;case 4:if(lr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-on(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qI(r/1960))-r,10<r){t.timeoutHandle=Jd($r.bind(null,t,gt,bn),r);break}$r(t,gt,bn);break;case 5:$r(t,gt,bn);break;default:throw Error(P(329))}}}return St(t,Ne()),t.callbackNode===n?j0.bind(null,t):null}function vf(t,e){var n=Co;return t.current.memoizedState.isDehydrated&&(Qr(t,e).flags|=256),t=ql(t,e),t!==2&&(e=gt,gt=n,e!==null&&_f(e)),t}function _f(t){gt===null?gt=t:gt.push.apply(gt,t)}function YI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~Lh,e&=~Du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function Pg(t){if(X&6)throw Error(P(327));is();var e=xl(t,0);if(!(e&1))return St(t,Ne()),null;var n=ql(t,e);if(t.tag!==0&&n===2){var r=Wd(t);r!==0&&(e=r,n=vf(t,r))}if(n===1)throw n=Yo,Qr(t,0),lr(t,e),St(t,Ne()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$r(t,gt,bn),St(t,Ne()),null}function Fh(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(ws=Ne()+500,xu&&Nr())}}function ri(t){pr!==null&&pr.tag===0&&!(X&6)&&is();var e=X;X|=1;var n=Kt.transition,r=oe;try{if(Kt.transition=null,oe=1,t)return t()}finally{oe=r,Kt.transition=n,X=e,!(X&6)&&Nr()}}function Uh(){bt=qi.current,ye(qi)}function Qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,TI(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(vh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ll();break;case 3:vs(),ye(wt),ye(lt),Rh();break;case 5:kh(r);break;case 4:vs();break;case 13:ye(Ee);break;case 19:ye(Ee);break;case 10:Sh(r.type._context);break;case 22:case 23:Uh()}n=n.return}if(Ge=t,Me=t=Sr(t.current,null),tt=bt=e,je=0,Yo=null,Lh=Du=ni=0,gt=Co=null,Wr!==null){for(e=0;e<Wr.length;e++)if(n=Wr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Wr=null}return t}function z0(t,e){do{var n=Me;try{if(Eh(),fl.current=Hl,Wl){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wl=!1}if(ti=0,He=Ue=Se=null,Eo=!1,Ko=0,Dh.current=null,n===null||n.return===null){je=1,Yo=e,Me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=mg(o);if(m!==null){m.flags&=-257,gg(m,o,a,s,e),m.mode&1&&pg(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var g=new Set;g.add(l),e.updateQueue=g}else v.add(l);break e}else{if(!(e&1)){pg(s,u,e),$h();break e}l=Error(P(426))}}else if(we&&a.mode&1){var E=mg(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),gg(E,o,a,s,e),_h(_s(l,a));break e}}s=l=_s(l,a),je!==4&&(je=2),Co===null?Co=[s]:Co.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=I0(s,l,e);ag(s,p);break e;case 1:a=l;var h=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(wr===null||!wr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=T0(s,a,e);ag(s,I);break e}}s=s.return}while(s!==null)}H0(n)}catch(R){e=R,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function B0(){var t=Vl.current;return Vl.current=Hl,t===null?Hl:t}function $h(){(je===0||je===3||je===2)&&(je=4),Ge===null||!(ni&268435455)&&!(Du&268435455)||lr(Ge,tt)}function ql(t,e){var n=X;X|=2;var r=B0();(Ge!==t||tt!==e)&&(bn=null,Qr(t,e));do try{QI();break}catch(i){z0(t,i)}while(!0);if(Eh(),X=n,Vl.current=r,Me!==null)throw Error(P(261));return Ge=null,tt=0,je}function QI(){for(;Me!==null;)W0(Me)}function JI(){for(;Me!==null&&!SC();)W0(Me)}function W0(t){var e=K0(t.alternate,t,bt);t.memoizedProps=t.pendingProps,e===null?H0(t):Me=e,Dh.current=null}function H0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=HI(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Me=null;return}}else if(n=WI(n,e,bt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);je===0&&(je=5)}function $r(t,e,n){var r=oe,i=Kt.transition;try{Kt.transition=null,oe=1,XI(t,e,n,r)}finally{Kt.transition=i,oe=r}return null}function XI(t,e,n,r){do is();while(pr!==null);if(X&6)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(NC(t,s),t===Ge&&(Me=Ge=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Za||(Za=!0,G0(bl,function(){return is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kt.transition,Kt.transition=null;var o=oe;oe=1;var a=X;X|=4,Dh.current=null,KI(t,n),U0(n,t),vI(Yd),Al=!!qd,Yd=qd=null,t.current=n,GI(n),CC(),X=a,oe=o,Kt.transition=s}else t.current=n;if(Za&&(Za=!1,pr=t,Gl=i),s=t.pendingLanes,s===0&&(wr=null),kC(n.stateNode),St(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Kl)throw Kl=!1,t=gf,gf=null,t;return Gl&1&&t.tag!==0&&is(),s=t.pendingLanes,s&1?t===yf?Io++:(Io=0,yf=t):Io=0,Nr(),null}function is(){if(pr!==null){var t=C_(Gl),e=Kt.transition,n=oe;try{if(Kt.transition=null,oe=16>t?16:t,pr===null)var r=!1;else{if(t=pr,pr=null,Gl=0,X&6)throw Error(P(331));var i=X;for(X|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:So(8,c,s)}var d=c.child;if(d!==null)d.return=c,O=d;else for(;O!==null;){c=O;var f=c.sibling,m=c.return;if(L0(c),c===u){O=null;break}if(f!==null){f.return=m,O=f;break}O=m}}}var v=s.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var E=g.sibling;g.sibling=null,g=E}while(g!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:So(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,O=p;break e}O=s.return}}var h=t.current;for(O=h;O!==null;){o=O;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,O=y;else e:for(o=h;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ou(9,a)}}catch(R){Re(a,a.return,R)}if(a===o){O=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,O=I;break e}O=a.return}}if(X=i,Nr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(Tu,t)}catch{}r=!0}return r}finally{oe=n,Kt.transition=e}}return!1}function bg(t,e,n){e=_s(n,e),e=I0(t,e,1),t=_r(t,e,1),e=ft(),t!==null&&(ya(t,1,e),St(t,e))}function Re(t,e,n){if(t.tag===3)bg(t,t,n);else for(;e!==null;){if(e.tag===3){bg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wr===null||!wr.has(r))){t=_s(n,t),t=T0(e,t,1),e=_r(e,t,1),t=ft(),e!==null&&(ya(e,1,t),St(e,t));break}}e=e.return}}function ZI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(tt&n)===n&&(je===4||je===3&&(tt&130023424)===tt&&500>Ne()-Mh?Qr(t,0):Lh|=n),St(t,e)}function V0(t,e){e===0&&(t.mode&1?(e=Wa,Wa<<=1,!(Wa&130023424)&&(Wa=4194304)):e=1);var n=ft();t=Wn(t,e),t!==null&&(ya(t,e,n),St(t,n))}function eT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),V0(t,n)}function tT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),V0(t,n)}var K0;K0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,BI(t,e,n);yt=!!(t.flags&131072)}else yt=!1,we&&e.flags&1048576&&Y_(e,Ul,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;pl(t,e),t=e.pendingProps;var i=ms(e,lt.current);rs(e,n),i=bh(null,e,r,t,i,n);var s=xh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Et(r)?(s=!0,Ml(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ih(e),i.updater=Au,e.stateNode=i,i._reactInternals=e,sf(e,r,t,n),e=lf(null,e,r,!0,s,n)):(e.tag=0,we&&s&&yh(e),dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(pl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rT(r),t=Zt(r,t),i){case 0:e=af(null,e,r,t,n);break e;case 1:e=_g(null,e,r,t,n);break e;case 11:e=yg(null,e,r,t,n);break e;case 14:e=vg(null,e,r,Zt(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),af(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),_g(t,e,r,i,n);case 3:e:{if(b0(e),t===null)throw Error(P(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Z_(t,e),zl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=_s(Error(P(423)),e),e=wg(t,e,r,n,i);break e}else if(r!==i){i=_s(Error(P(424)),e),e=wg(t,e,r,n,i);break e}else for(At=vr(e.stateNode.containerInfo.firstChild),Nt=e,we=!0,nn=null,n=r0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),r===i){e=Hn(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return i0(e),t===null&&tf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qd(r,i)?o=null:s!==null&&Qd(r,s)&&(e.flags|=32),P0(t,e),dt(t,e,o,n),e.child;case 6:return t===null&&tf(e),null;case 13:return x0(t,e,n);case 4:return Th(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ys(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),yg(t,e,r,i,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe($l,r._currentValue),r._currentValue=o,s!==null)if(un(s.value,o)){if(s.children===i.children&&!wt.current){e=Hn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Fn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),nf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),nf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,rs(e,n),i=qt(i),r=r(i),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,i=Zt(r,e.pendingProps),i=Zt(r.type,i),vg(t,e,r,i,n);case 15:return k0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),pl(t,e),e.tag=1,Et(r)?(t=!0,Ml(e)):t=!1,rs(e,n),t0(e,r,i),sf(e,r,i,n),lf(null,e,r,!0,t,n);case 19:return A0(t,e,n);case 22:return R0(t,e,n)}throw Error(P(156,e.tag))};function G0(t,e){return __(t,e)}function nT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new nT(t,e,n,r)}function jh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rT(t){if(typeof t=="function")return jh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sh)return 11;if(t===oh)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")jh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ui:return Jr(n.children,i,s,e);case ih:o=8,i|=8;break;case Pd:return t=Ht(12,n,e,i|2),t.elementType=Pd,t.lanes=s,t;case bd:return t=Ht(13,n,e,i),t.elementType=bd,t.lanes=s,t;case xd:return t=Ht(19,n,e,i),t.elementType=xd,t.lanes=s,t;case n_:return Lu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case e_:o=10;break e;case t_:o=9;break e;case sh:o=11;break e;case oh:o=14;break e;case sr:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=Ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Jr(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function Lu(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=n_,t.lanes=n,t.stateNode={isHidden:!1},t}function ed(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function td(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lc(0),this.expirationTimes=Lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zh(t,e,n,r,i,s,o,a,l){return t=new iT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ih(s),t}function sT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function q0(t){if(!t)return Rr;t=t._reactInternals;e:{if(yi(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(Et(n))return G_(t,n,e)}return e}function Y0(t,e,n,r,i,s,o,a,l){return t=zh(n,r,!0,t,i,s,o,a,l),t.context=q0(null),n=t.current,r=ft(),i=Er(n),s=Fn(r,i),s.callback=e??null,_r(n,s,i),t.current.lanes=i,ya(t,i,r),St(t,r),t}function Mu(t,e,n,r){var i=e.current,s=ft(),o=Er(i);return n=q0(n),e.context===null?e.context=n:e.pendingContext=n,e=Fn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_r(i,e,o),t!==null&&(an(t,i,o,s),dl(t,i,o)),o}function Yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bh(t,e){xg(t,e),(t=t.alternate)&&xg(t,e)}function oT(){return null}var Q0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wh(t){this._internalRoot=t}Fu.prototype.render=Wh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));Mu(t,e,null,null)};Fu.prototype.unmount=Wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ri(function(){Mu(null,t,null,null)}),e[Bn]=null}};function Fu(t){this._internalRoot=t}Fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=k_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&P_(t)}};function Hh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Uu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ag(){}function aT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Yl(o);s.call(u)}}var o=Y0(e,r,t,0,null,!1,!1,"",Ag);return t._reactRootContainer=o,t[Bn]=o.current,zo(t.nodeType===8?t.parentNode:t),ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Yl(l);a.call(u)}}var l=zh(t,0,!1,null,null,!1,!1,"",Ag);return t._reactRootContainer=l,t[Bn]=l.current,zo(t.nodeType===8?t.parentNode:t),ri(function(){Mu(e,l,n,r)}),l}function $u(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Yl(o);a.call(l)}}Mu(e,o,t,i)}else o=aT(n,e,t,i,r);return Yl(o)}I_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fo(e.pendingLanes);n!==0&&(uh(e,n|1),St(e,Ne()),!(X&6)&&(ws=Ne()+500,Nr()))}break;case 13:ri(function(){var r=Wn(t,1);if(r!==null){var i=ft();an(r,t,1,i)}}),Bh(t,1)}};ch=function(t){if(t.tag===13){var e=Wn(t,134217728);if(e!==null){var n=ft();an(e,t,134217728,n)}Bh(t,134217728)}};T_=function(t){if(t.tag===13){var e=Er(t),n=Wn(t,e);if(n!==null){var r=ft();an(n,t,e,r)}Bh(t,e)}};k_=function(){return oe};R_=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};jd=function(t,e,n){switch(e){case"input":if(Od(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=bu(r);if(!i)throw Error(P(90));i_(r),Od(r,i)}}}break;case"textarea":o_(t,n);break;case"select":e=n.value,e!=null&&Zi(t,!!n.multiple,e,!1)}};h_=Fh;p_=ri;var lT={usingClientEntryPoint:!1,Events:[_a,Bi,bu,d_,f_,Fh]},Js={findFiberByHostInstance:Br,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},uT={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=y_(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||oT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Tu=el.inject(uT),_n=el}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lT;Mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hh(e))throw Error(P(200));return sT(t,e,null,n)};Mt.createRoot=function(t,e){if(!Hh(t))throw Error(P(299));var n=!1,r="",i=Q0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=zh(t,1,!1,null,null,n,!1,r,i),t[Bn]=e.current,zo(t.nodeType===8?t.parentNode:t),new Wh(e)};Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=y_(e),t=t===null?null:t.stateNode,t};Mt.flushSync=function(t){return ri(t)};Mt.hydrate=function(t,e,n){if(!Uu(e))throw Error(P(200));return $u(null,t,e,!0,n)};Mt.hydrateRoot=function(t,e,n){if(!Hh(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Q0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Y0(e,null,t,1,n??null,i,!1,s,o),t[Bn]=e.current,zo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Fu(e)};Mt.render=function(t,e,n){if(!Uu(e))throw Error(P(200));return $u(null,t,e,!1,n)};Mt.unmountComponentAtNode=function(t){if(!Uu(t))throw Error(P(40));return t._reactRootContainer?(ri(function(){$u(null,null,t,!1,function(){t._reactRootContainer=null,t[Bn]=null})}),!0):!1};Mt.unstable_batchedUpdates=Fh;Mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Uu(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return $u(t,e,n,!1,r)};Mt.version="18.2.0-next-9e3b772b8-20220608";function J0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J0)}catch(t){console.error(t)}}J0(),Yv.exports=Mt;var Vh=Yv.exports;const cT=Fv(Vh),dT=Mv({__proto__:null,default:cT},[Vh]);var Ng=Vh;kd.createRoot=Ng.createRoot,kd.hydrateRoot=Ng.hydrateRoot;function Es(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}const Ql="$$material";function ee(){return ee=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ee.apply(this,arguments)}function vi(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function fT(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}function hT(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function pT(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var mT=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(pT(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=hT(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),ot="-ms-",Jl="-moz-",re="-webkit-",X0="comm",Kh="rule",Gh="decl",gT="@import",Z0="@keyframes",yT="@layer",vT=Math.abs,ju=String.fromCharCode,_T=Object.assign;function wT(t,e){return Xe(t,0)^45?(((e<<2^Xe(t,0))<<2^Xe(t,1))<<2^Xe(t,2))<<2^Xe(t,3):0}function ew(t){return t.trim()}function ET(t,e){return(t=e.exec(t))?t[0]:t}function ie(t,e,n){return t.replace(e,n)}function wf(t,e){return t.indexOf(e)}function Xe(t,e){return t.charCodeAt(e)|0}function Qo(t,e,n){return t.slice(e,n)}function mn(t){return t.length}function qh(t){return t.length}function tl(t,e){return e.push(t),t}function ST(t,e){return t.map(e).join("")}var zu=1,Ss=1,tw=0,Tt=0,Le=0,As="";function Bu(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:zu,column:Ss,length:o,return:""}}function Xs(t,e){return _T(Bu("",null,null,"",null,null,0),t,{length:-t.length},e)}function CT(){return Le}function IT(){return Le=Tt>0?Xe(As,--Tt):0,Ss--,Le===10&&(Ss=1,zu--),Le}function Ot(){return Le=Tt<tw?Xe(As,Tt++):0,Ss++,Le===10&&(Ss=1,zu++),Le}function En(){return Xe(As,Tt)}function vl(){return Tt}function Ea(t,e){return Qo(As,t,e)}function Jo(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function nw(t){return zu=Ss=1,tw=mn(As=t),Tt=0,[]}function rw(t){return As="",t}function _l(t){return ew(Ea(Tt-1,Ef(t===91?t+2:t===40?t+1:t)))}function TT(t){for(;(Le=En())&&Le<33;)Ot();return Jo(t)>2||Jo(Le)>3?"":" "}function kT(t,e){for(;--e&&Ot()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return Ea(t,vl()+(e<6&&En()==32&&Ot()==32))}function Ef(t){for(;Ot();)switch(Le){case t:return Tt;case 34:case 39:t!==34&&t!==39&&Ef(Le);break;case 40:t===41&&Ef(t);break;case 92:Ot();break}return Tt}function RT(t,e){for(;Ot()&&t+Le!==57;)if(t+Le===84&&En()===47)break;return"/*"+Ea(e,Tt-1)+"*"+ju(t===47?t:Ot())}function PT(t){for(;!Jo(En());)Ot();return Ea(t,Tt)}function bT(t){return rw(wl("",null,null,null,[""],t=nw(t),0,[0],t))}function wl(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,f=0,m=0,v=0,g=1,E=1,p=1,h=0,y="",I=i,R=s,_=r,C=y;E;)switch(v=h,h=Ot()){case 40:if(v!=108&&Xe(C,d-1)==58){wf(C+=ie(_l(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:C+=_l(h);break;case 9:case 10:case 13:case 32:C+=TT(v);break;case 92:C+=kT(vl()-1,7);continue;case 47:switch(En()){case 42:case 47:tl(xT(RT(Ot(),vl()),e,n),l);break;default:C+="/"}break;case 123*g:a[u++]=mn(C)*p;case 125*g:case 59:case 0:switch(h){case 0:case 125:E=0;case 59+c:p==-1&&(C=ie(C,/\f/g,"")),m>0&&mn(C)-d&&tl(m>32?Dg(C+";",r,n,d-1):Dg(ie(C," ","")+";",r,n,d-2),l);break;case 59:C+=";";default:if(tl(_=Og(C,e,n,u,c,i,a,y,I=[],R=[],d),s),h===123)if(c===0)wl(C,e,_,_,I,s,d,a,R);else switch(f===99&&Xe(C,3)===110?100:f){case 100:case 108:case 109:case 115:wl(t,_,_,r&&tl(Og(t,_,_,0,0,i,a,y,i,I=[],d),R),i,R,d,a,r?I:R);break;default:wl(C,_,_,_,[""],R,0,a,R)}}u=c=m=0,g=p=1,y=C="",d=o;break;case 58:d=1+mn(C),m=v;default:if(g<1){if(h==123)--g;else if(h==125&&g++==0&&IT()==125)continue}switch(C+=ju(h),h*g){case 38:p=c>0?1:(C+="\f",-1);break;case 44:a[u++]=(mn(C)-1)*p,p=1;break;case 64:En()===45&&(C+=_l(Ot())),f=En(),c=d=mn(y=C+=PT(vl())),h++;break;case 45:v===45&&mn(C)==2&&(g=0)}}return s}function Og(t,e,n,r,i,s,o,a,l,u,c){for(var d=i-1,f=i===0?s:[""],m=qh(f),v=0,g=0,E=0;v<r;++v)for(var p=0,h=Qo(t,d+1,d=vT(g=o[v])),y=t;p<m;++p)(y=ew(g>0?f[p]+" "+h:ie(h,/&\f/g,f[p])))&&(l[E++]=y);return Bu(t,e,n,i===0?Kh:a,l,u,c)}function xT(t,e,n){return Bu(t,e,n,X0,ju(CT()),Qo(t,2,-2),0)}function Dg(t,e,n,r){return Bu(t,e,n,Gh,Qo(t,0,r),Qo(t,r+1,-1),r)}function ss(t,e){for(var n="",r=qh(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function AT(t,e,n,r){switch(t.type){case yT:if(t.children.length)break;case gT:case Gh:return t.return=t.return||t.value;case X0:return"";case Z0:return t.return=t.value+"{"+ss(t.children,r)+"}";case Kh:t.value=t.props.join(",")}return mn(n=ss(t.children,r))?t.return=t.value+"{"+n+"}":""}function NT(t){var e=qh(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function OT(t){return function(e){e.root||(e=e.return)&&t(e)}}var DT=function(e,n,r){for(var i=0,s=0;i=s,s=En(),i===38&&s===12&&(n[r]=1),!Jo(s);)Ot();return Ea(e,Tt)},LT=function(e,n){var r=-1,i=44;do switch(Jo(i)){case 0:i===38&&En()===12&&(n[r]=1),e[r]+=DT(Tt-1,n,r);break;case 2:e[r]+=_l(i);break;case 4:if(i===44){e[++r]=En()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=ju(i)}while(i=Ot());return e},MT=function(e,n){return rw(LT(nw(e),n))},Lg=new WeakMap,FT=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!Lg.get(r))&&!i){Lg.set(e,!0);for(var s=[],o=MT(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)e.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},UT=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function iw(t,e){switch(wT(t,e)){case 5103:return re+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return re+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return re+t+Jl+t+ot+t+t;case 6828:case 4268:return re+t+ot+t+t;case 6165:return re+t+ot+"flex-"+t+t;case 5187:return re+t+ie(t,/(\w+).+(:[^]+)/,re+"box-$1$2"+ot+"flex-$1$2")+t;case 5443:return re+t+ot+"flex-item-"+ie(t,/flex-|-self/,"")+t;case 4675:return re+t+ot+"flex-line-pack"+ie(t,/align-content|flex-|-self/,"")+t;case 5548:return re+t+ot+ie(t,"shrink","negative")+t;case 5292:return re+t+ot+ie(t,"basis","preferred-size")+t;case 6060:return re+"box-"+ie(t,"-grow","")+re+t+ot+ie(t,"grow","positive")+t;case 4554:return re+ie(t,/([^-])(transform)/g,"$1"+re+"$2")+t;case 6187:return ie(ie(ie(t,/(zoom-|grab)/,re+"$1"),/(image-set)/,re+"$1"),t,"")+t;case 5495:case 3959:return ie(t,/(image-set\([^]*)/,re+"$1$`$1");case 4968:return ie(ie(t,/(.+:)(flex-)?(.*)/,re+"box-pack:$3"+ot+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+re+t+t;case 4095:case 3583:case 4068:case 2532:return ie(t,/(.+)-inline(.+)/,re+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mn(t)-1-e>6)switch(Xe(t,e+1)){case 109:if(Xe(t,e+4)!==45)break;case 102:return ie(t,/(.+:)(.+)-([^]+)/,"$1"+re+"$2-$3$1"+Jl+(Xe(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~wf(t,"stretch")?iw(ie(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Xe(t,e+1)!==115)break;case 6444:switch(Xe(t,mn(t)-3-(~wf(t,"!important")&&10))){case 107:return ie(t,":",":"+re)+t;case 101:return ie(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+re+(Xe(t,14)===45?"inline-":"")+"box$3$1"+re+"$2$3$1"+ot+"$2box$3")+t}break;case 5936:switch(Xe(t,e+11)){case 114:return re+t+ot+ie(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return re+t+ot+ie(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return re+t+ot+ie(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return re+t+ot+t+t}return t}var $T=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case Gh:e.return=iw(e.value,e.length);break;case Z0:return ss([Xs(e,{value:ie(e.value,"@","@"+re)})],i);case Kh:if(e.length)return ST(e.props,function(s){switch(ET(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ss([Xs(e,{props:[ie(s,/:(read-\w+)/,":"+Jl+"$1")]})],i);case"::placeholder":return ss([Xs(e,{props:[ie(s,/:(plac\w+)/,":"+re+"input-$1")]}),Xs(e,{props:[ie(s,/:(plac\w+)/,":"+Jl+"$1")]}),Xs(e,{props:[ie(s,/:(plac\w+)/,ot+"input-$1")]})],i)}return""})}},jT=[$T],zT=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var E=g.getAttribute("data-emotion");E.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var i=e.stylisPlugins||jT,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var E=g.getAttribute("data-emotion").split(" "),p=1;p<E.length;p++)s[E[p]]=!0;a.push(g)});var l,u=[FT,UT];{var c,d=[AT,OT(function(g){c.insert(g)})],f=NT(u.concat(i,d)),m=function(E){return ss(bT(E),f)};l=function(E,p,h,y){c=h,m(E?E+"{"+p.styles+"}":p.styles),y&&(v.inserted[p.name]=!0)}}var v={key:n,sheet:new mT({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return v.sheet.hydrate(a),v},sw={exports:{}},ae={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qe=typeof Symbol=="function"&&Symbol.for,Yh=qe?Symbol.for("react.element"):60103,Qh=qe?Symbol.for("react.portal"):60106,Wu=qe?Symbol.for("react.fragment"):60107,Hu=qe?Symbol.for("react.strict_mode"):60108,Vu=qe?Symbol.for("react.profiler"):60114,Ku=qe?Symbol.for("react.provider"):60109,Gu=qe?Symbol.for("react.context"):60110,Jh=qe?Symbol.for("react.async_mode"):60111,qu=qe?Symbol.for("react.concurrent_mode"):60111,Yu=qe?Symbol.for("react.forward_ref"):60112,Qu=qe?Symbol.for("react.suspense"):60113,BT=qe?Symbol.for("react.suspense_list"):60120,Ju=qe?Symbol.for("react.memo"):60115,Xu=qe?Symbol.for("react.lazy"):60116,WT=qe?Symbol.for("react.block"):60121,HT=qe?Symbol.for("react.fundamental"):60117,VT=qe?Symbol.for("react.responder"):60118,KT=qe?Symbol.for("react.scope"):60119;function Ut(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Yh:switch(t=t.type,t){case Jh:case qu:case Wu:case Vu:case Hu:case Qu:return t;default:switch(t=t&&t.$$typeof,t){case Gu:case Yu:case Xu:case Ju:case Ku:return t;default:return e}}case Qh:return e}}}function ow(t){return Ut(t)===qu}ae.AsyncMode=Jh;ae.ConcurrentMode=qu;ae.ContextConsumer=Gu;ae.ContextProvider=Ku;ae.Element=Yh;ae.ForwardRef=Yu;ae.Fragment=Wu;ae.Lazy=Xu;ae.Memo=Ju;ae.Portal=Qh;ae.Profiler=Vu;ae.StrictMode=Hu;ae.Suspense=Qu;ae.isAsyncMode=function(t){return ow(t)||Ut(t)===Jh};ae.isConcurrentMode=ow;ae.isContextConsumer=function(t){return Ut(t)===Gu};ae.isContextProvider=function(t){return Ut(t)===Ku};ae.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yh};ae.isForwardRef=function(t){return Ut(t)===Yu};ae.isFragment=function(t){return Ut(t)===Wu};ae.isLazy=function(t){return Ut(t)===Xu};ae.isMemo=function(t){return Ut(t)===Ju};ae.isPortal=function(t){return Ut(t)===Qh};ae.isProfiler=function(t){return Ut(t)===Vu};ae.isStrictMode=function(t){return Ut(t)===Hu};ae.isSuspense=function(t){return Ut(t)===Qu};ae.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Wu||t===qu||t===Vu||t===Hu||t===Qu||t===BT||typeof t=="object"&&t!==null&&(t.$$typeof===Xu||t.$$typeof===Ju||t.$$typeof===Ku||t.$$typeof===Gu||t.$$typeof===Yu||t.$$typeof===HT||t.$$typeof===VT||t.$$typeof===KT||t.$$typeof===WT)};ae.typeOf=Ut;sw.exports=ae;var GT=sw.exports,aw=GT,qT={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},YT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lw={};lw[aw.ForwardRef]=qT;lw[aw.Memo]=YT;var QT=!0;function mF(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var JT=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||QT===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},XT=function(e,n,r){JT(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function ZT(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var ek={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},tk=/[A-Z]|^ms/g,nk=/_EMO_([^_]+?)_([^]*?)_EMO_/g,uw=function(e){return e.charCodeAt(1)===45},Mg=function(e){return e!=null&&typeof e!="boolean"},nd=fT(function(t){return uw(t)?t:t.replace(tk,"-$&").toLowerCase()}),Fg=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(nk,function(r,i,s){return gn={name:i,styles:s,next:gn},i})}return ek[e]!==1&&!uw(e)&&typeof n=="number"&&n!==0?n+"px":n};function Xo(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return gn={name:n.name,styles:n.styles,next:gn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)gn={name:r.name,styles:r.styles,next:gn},r=r.next;var i=n.styles+";";return i}return rk(t,e,n)}case"function":{if(t!==void 0){var s=gn,o=n(t);return gn=s,Xo(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function rk(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Xo(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":Mg(o)&&(r+=nd(s)+":"+Fg(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)Mg(o[a])&&(r+=nd(s)+":"+Fg(s,o[a])+";");else{var l=Xo(t,e,o);switch(s){case"animation":case"animationName":{r+=nd(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var Ug=/label:\s*([^\s;\n{]+)\s*(;|$)/g,gn,cw=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";gn=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=Xo(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=Xo(r,n,e[a]),i&&(s+=o[a]);Ug.lastIndex=0;for(var l="",u;(u=Ug.exec(s))!==null;)l+="-"+u[1];var c=ZT(s)+l;return{name:c,styles:s,next:gn}},ik=function(e){return e()},dw=Td.useInsertionEffect?Td.useInsertionEffect:!1,gF=dw||ik,$g=dw||k.useLayoutEffect,fw=k.createContext(typeof HTMLElement<"u"?zT({key:"css"}):null);fw.Provider;var sk=function(e){return k.forwardRef(function(n,r){var i=k.useContext(fw);return e(n,i,r)})},Xh=k.createContext({}),ok=sk(function(t,e){var n=t.styles,r=cw([n],void 0,k.useContext(Xh)),i=k.useRef();return $g(function(){var s=e.key+"-global",o=new e.sheet.constructor({key:s,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),a=!1,l=document.querySelector('style[data-emotion="'+s+" "+r.name+'"]');return e.sheet.tags.length&&(o.before=e.sheet.tags[0]),l!==null&&(a=!0,l.setAttribute("data-emotion",s),o.hydrate([l])),i.current=[o,a],function(){o.flush()}},[e]),$g(function(){var s=i.current,o=s[0],a=s[1];if(a){s[1]=!1;return}if(r.next!==void 0&&XT(e,r.next,!0),o.tags.length){var l=o.tags[o.tags.length-1].nextElementSibling;o.before=l,o.flush()}e.insert("",r,o,!1)},[e,r.name]),null});function ak(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return cw(e)}var yF=function(){var e=ak.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function lk(t){return t==null||Object.keys(t).length===0}function uk(t){const{styles:e,defaultTheme:n={}}=t,r=typeof e=="function"?i=>e(lk(i)?n:i):e;return $e.jsx(ok,{styles:r})}function Mi(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function hw(t){if(!Mi(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=hw(t[n])}),e}function Sn(t,e,n={clone:!0}){const r=n.clone?ee({},t):t;return Mi(t)&&Mi(e)&&Object.keys(e).forEach(i=>{i!=="__proto__"&&(Mi(e[i])&&i in t&&Mi(t[i])?r[i]=Sn(t[i],e[i],n):n.clone?r[i]=Mi(e[i])?hw(e[i]):e[i]:r[i]=e[i])}),r}function pw(t){if(typeof t!="string")throw new Error(Es(7));return t.charAt(0).toUpperCase()+t.slice(1)}function mw(t,e){const n=ee({},e);return Object.keys(t).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=ee({},t[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=t[r]||{},s=e[r];n[r]={},!s||!Object.keys(s)?n[r]=i:!i||!Object.keys(i)?n[r]=s:(n[r]=ee({},s),Object.keys(i).forEach(o=>{n[r][o]=mw(i[o],s[o])}))}else n[r]===void 0&&(n[r]=t[r])}),n}function ck(t,e=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(t,n))}const dk=["values","unit","step"],fk=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>ee({},n,{[r.key]:r.val}),{})};function hk(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=t,i=vi(t,dk),s=fk(e),o=Object.keys(s);function a(f){return`@media (min-width:${typeof e[f]=="number"?e[f]:f}${n})`}function l(f){return`@media (max-width:${(typeof e[f]=="number"?e[f]:f)-r/100}${n})`}function u(f,m){const v=o.indexOf(m);return`@media (min-width:${typeof e[f]=="number"?e[f]:f}${n}) and (max-width:${(v!==-1&&typeof e[o[v]]=="number"?e[o[v]]:m)-r/100}${n})`}function c(f){return o.indexOf(f)+1<o.length?u(f,o[o.indexOf(f)+1]):a(f)}function d(f){const m=o.indexOf(f);return m===0?a(o[1]):m===o.length-1?l(o[m]):u(f,o[o.indexOf(f)+1]).replace("@media","@media not all and")}return ee({keys:o,values:s,up:a,down:l,between:u,only:c,not:d,unit:n},i)}const pk={borderRadius:4},mk=pk;function To(t,e){return e?Sn(t,e,{clone:!1}):t}const Zh={xs:0,sm:600,md:900,lg:1200,xl:1536},jg={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${Zh[t]}px)`};function Vn(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const s=r.breakpoints||jg;return e.reduce((o,a,l)=>(o[s.up(s.keys[l])]=n(e[l]),o),{})}if(typeof e=="object"){const s=r.breakpoints||jg;return Object.keys(e).reduce((o,a)=>{if(Object.keys(s.values||Zh).indexOf(a)!==-1){const l=s.up(a);o[l]=n(e[a],a)}else{const l=a;o[l]=e[l]}return o},{})}return n(e)}function gw(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((r,i)=>{const s=t.up(i);return r[s]={},r},{}))||{}}function yw(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function vF(t,...e){const n=gw(t),r=[n,...e].reduce((i,s)=>Sn(i,s),{});return yw(Object.keys(n),r)}function gk(t,e){if(typeof t!="object")return{};const n={},r=Object.keys(e);return Array.isArray(t)?r.forEach((i,s)=>{s<t.length&&(n[i]=!0)}):r.forEach(i=>{t[i]!=null&&(n[i]=!0)}),n}function _F({values:t,breakpoints:e,base:n}){const r=n||gk(t,e),i=Object.keys(r);if(i.length===0)return t;let s;return i.reduce((o,a,l)=>(Array.isArray(t)?(o[a]=t[l]!=null?t[l]:t[s],s=l):typeof t=="object"?(o[a]=t[a]!=null?t[a]:t[s],s=a):o[a]=t,o),{})}function Zu(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,s)=>i&&i[s]?i[s]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function Xl(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=Zu(t,n)||r,e&&(i=e(i,r,t)),i}function Oe(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,s=o=>{if(o[e]==null)return null;const a=o[e],l=o.theme,u=Zu(l,r)||{};return Vn(o,a,d=>{let f=Xl(u,i,d);return d===f&&typeof d=="string"&&(f=Xl(u,i,`${e}${d==="default"?"":pw(d)}`,d)),n===!1?f:{[n]:f}})};return s.propTypes={},s.filterProps=[e],s}function yk(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const vk={m:"margin",p:"padding"},_k={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},zg={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},wk=yk(t=>{if(t.length>2)if(zg[t])t=zg[t];else return[t];const[e,n]=t.split(""),r=vk[e],i=_k[n]||"";return Array.isArray(i)?i.map(s=>r+s):[r+i]}),ep=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],tp=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...ep,...tp];function Sa(t,e,n,r){var i;const s=(i=Zu(t,e,!1))!=null?i:n;return typeof s=="number"?o=>typeof o=="string"?o:s*o:Array.isArray(s)?o=>typeof o=="string"?o:s[o]:typeof s=="function"?s:()=>{}}function vw(t){return Sa(t,"spacing",8)}function Ca(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),r=t(n);return e>=0?r:typeof r=="number"?-r:`-${r}`}function Ek(t,e){return n=>t.reduce((r,i)=>(r[i]=Ca(e,n),r),{})}function Sk(t,e,n,r){if(e.indexOf(n)===-1)return null;const i=wk(n),s=Ek(i,r),o=t[n];return Vn(t,o,s)}function _w(t,e){const n=vw(t.theme);return Object.keys(t).map(r=>Sk(t,e,r,n)).reduce(To,{})}function Ie(t){return _w(t,ep)}Ie.propTypes={};Ie.filterProps=ep;function Te(t){return _w(t,tp)}Te.propTypes={};Te.filterProps=tp;function Ck(t=8){if(t.mui)return t;const e=vw({spacing:t}),n=(...r)=>(r.length===0?[1]:r).map(s=>{const o=e(s);return typeof o=="number"?`${o}px`:o}).join(" ");return n.mui=!0,n}function ec(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(s=>{r[s]=i}),r),{}),n=r=>Object.keys(r).reduce((i,s)=>e[s]?To(i,e[s](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function Wt(t){return typeof t!="number"?t:`${t}px solid`}function Qt(t,e){return Oe({prop:t,themeKey:"borders",transform:e})}const Ik=Qt("border",Wt),Tk=Qt("borderTop",Wt),kk=Qt("borderRight",Wt),Rk=Qt("borderBottom",Wt),Pk=Qt("borderLeft",Wt),bk=Qt("borderColor"),xk=Qt("borderTopColor"),Ak=Qt("borderRightColor"),Nk=Qt("borderBottomColor"),Ok=Qt("borderLeftColor"),Dk=Qt("outline",Wt),Lk=Qt("outlineColor"),tc=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=Sa(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:Ca(e,r)});return Vn(t,t.borderRadius,n)}return null};tc.propTypes={};tc.filterProps=["borderRadius"];ec(Ik,Tk,kk,Rk,Pk,bk,xk,Ak,Nk,Ok,tc,Dk,Lk);const nc=t=>{if(t.gap!==void 0&&t.gap!==null){const e=Sa(t.theme,"spacing",8),n=r=>({gap:Ca(e,r)});return Vn(t,t.gap,n)}return null};nc.propTypes={};nc.filterProps=["gap"];const rc=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=Sa(t.theme,"spacing",8),n=r=>({columnGap:Ca(e,r)});return Vn(t,t.columnGap,n)}return null};rc.propTypes={};rc.filterProps=["columnGap"];const ic=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=Sa(t.theme,"spacing",8),n=r=>({rowGap:Ca(e,r)});return Vn(t,t.rowGap,n)}return null};ic.propTypes={};ic.filterProps=["rowGap"];const Mk=Oe({prop:"gridColumn"}),Fk=Oe({prop:"gridRow"}),Uk=Oe({prop:"gridAutoFlow"}),$k=Oe({prop:"gridAutoColumns"}),jk=Oe({prop:"gridAutoRows"}),zk=Oe({prop:"gridTemplateColumns"}),Bk=Oe({prop:"gridTemplateRows"}),Wk=Oe({prop:"gridTemplateAreas"}),Hk=Oe({prop:"gridArea"});ec(nc,rc,ic,Mk,Fk,Uk,$k,jk,zk,Bk,Wk,Hk);function os(t,e){return e==="grey"?e:t}const Vk=Oe({prop:"color",themeKey:"palette",transform:os}),Kk=Oe({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:os}),Gk=Oe({prop:"backgroundColor",themeKey:"palette",transform:os});ec(Vk,Kk,Gk);function xt(t){return t<=1&&t!==0?`${t*100}%`:t}const qk=Oe({prop:"width",transform:xt}),np=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var r,i;const s=((r=t.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||Zh[n];return s?((i=t.theme)==null||(i=i.breakpoints)==null?void 0:i.unit)!=="px"?{maxWidth:`${s}${t.theme.breakpoints.unit}`}:{maxWidth:s}:{maxWidth:xt(n)}};return Vn(t,t.maxWidth,e)}return null};np.filterProps=["maxWidth"];const Yk=Oe({prop:"minWidth",transform:xt}),Qk=Oe({prop:"height",transform:xt}),Jk=Oe({prop:"maxHeight",transform:xt}),Xk=Oe({prop:"minHeight",transform:xt});Oe({prop:"size",cssProperty:"width",transform:xt});Oe({prop:"size",cssProperty:"height",transform:xt});const Zk=Oe({prop:"boxSizing"});ec(qk,np,Yk,Qk,Jk,Xk,Zk);const eR={border:{themeKey:"borders",transform:Wt},borderTop:{themeKey:"borders",transform:Wt},borderRight:{themeKey:"borders",transform:Wt},borderBottom:{themeKey:"borders",transform:Wt},borderLeft:{themeKey:"borders",transform:Wt},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Wt},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:tc},color:{themeKey:"palette",transform:os},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:os},backgroundColor:{themeKey:"palette",transform:os},p:{style:Te},pt:{style:Te},pr:{style:Te},pb:{style:Te},pl:{style:Te},px:{style:Te},py:{style:Te},padding:{style:Te},paddingTop:{style:Te},paddingRight:{style:Te},paddingBottom:{style:Te},paddingLeft:{style:Te},paddingX:{style:Te},paddingY:{style:Te},paddingInline:{style:Te},paddingInlineStart:{style:Te},paddingInlineEnd:{style:Te},paddingBlock:{style:Te},paddingBlockStart:{style:Te},paddingBlockEnd:{style:Te},m:{style:Ie},mt:{style:Ie},mr:{style:Ie},mb:{style:Ie},ml:{style:Ie},mx:{style:Ie},my:{style:Ie},margin:{style:Ie},marginTop:{style:Ie},marginRight:{style:Ie},marginBottom:{style:Ie},marginLeft:{style:Ie},marginX:{style:Ie},marginY:{style:Ie},marginInline:{style:Ie},marginInlineStart:{style:Ie},marginInlineEnd:{style:Ie},marginBlock:{style:Ie},marginBlockStart:{style:Ie},marginBlockEnd:{style:Ie},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:nc},rowGap:{style:ic},columnGap:{style:rc},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:xt},maxWidth:{style:np},minWidth:{transform:xt},height:{transform:xt},maxHeight:{transform:xt},minHeight:{transform:xt},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},rp=eR;function tR(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function nR(t,e){return typeof t=="function"?t(e):t}function rR(){function t(n,r,i,s){const o={[n]:r,theme:i},a=s[n];if(!a)return{[n]:r};const{cssProperty:l=n,themeKey:u,transform:c,style:d}=a;if(r==null)return null;if(u==="typography"&&r==="inherit")return{[n]:r};const f=Zu(i,u)||{};return d?d(o):Vn(o,r,v=>{let g=Xl(f,c,v);return v===g&&typeof v=="string"&&(g=Xl(f,c,`${n}${v==="default"?"":pw(v)}`,v)),l===!1?g:{[l]:g}})}function e(n){var r;const{sx:i,theme:s={}}=n||{};if(!i)return null;const o=(r=s.unstable_sxConfig)!=null?r:rp;function a(l){let u=l;if(typeof l=="function")u=l(s);else if(typeof l!="object")return l;if(!u)return null;const c=gw(s.breakpoints),d=Object.keys(c);let f=c;return Object.keys(u).forEach(m=>{const v=nR(u[m],s);if(v!=null)if(typeof v=="object")if(o[m])f=To(f,t(m,v,s,o));else{const g=Vn({theme:s},v,E=>({[m]:E}));tR(g,v)?f[m]=e({sx:v,theme:s}):f=To(f,g)}else f=To(f,t(m,v,s,o))}),yw(d,f)}return Array.isArray(i)?i.map(a):a(i)}return e}const ww=rR();ww.filterProps=["sx"];const Ew=ww;function iR(t,e){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(t).replace(/(\[[^\]]+\])/,"*:where($1)")]:e}:n.palette.mode===t?e:{}}const sR=["breakpoints","palette","spacing","shape"];function Sw(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:s={}}=t,o=vi(t,sR),a=hk(n),l=Ck(i);let u=Sn({breakpoints:a,direction:"ltr",components:{},palette:ee({mode:"light"},r),spacing:l,shape:ee({},mk,s)},o);return u.applyStyles=iR,u=e.reduce((c,d)=>Sn(c,d),u),u.unstable_sxConfig=ee({},rp,o==null?void 0:o.unstable_sxConfig),u.unstable_sx=function(d){return Ew({sx:d,theme:this})},u}function oR(t){return Object.keys(t).length===0}function Cw(t=null){const e=k.useContext(Xh);return!e||oR(e)?t:e}const aR=Sw();function Iw(t=aR){return Cw(t)}function lR({styles:t,themeId:e,defaultTheme:n={}}){const r=Iw(n),i=typeof t=="function"?t(e&&r[e]||r):t;return $e.jsx(uk,{styles:i})}function uR(t){const{theme:e,name:n,props:r}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:mw(e.components[n].defaultProps,r)}function cR({props:t,name:e,defaultTheme:n,themeId:r}){let i=Iw(n);return r&&(i=i[r]||i),uR({theme:i,name:e,props:t})}function ip(t,e=0,n=1){return ck(t,e,n)}function dR(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function ii(t){if(t.type)return t;if(t.charAt(0)==="#")return ii(dR(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(Es(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(Es(10,i))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:n,values:r,colorSpace:i}}function sc(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.indexOf("rgb")!==-1?r=r.map((i,s)=>s<3?parseInt(i,10):i):e.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function fR(t){t=ii(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,s=r*Math.min(i,1-i),o=(u,c=(u+n/30)%12)=>i-s*Math.max(Math.min(c-3,9-c,1),-1);let a="rgb";const l=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return t.type==="hsla"&&(a+="a",l.push(e[3])),sc({type:a,values:l})}function Bg(t){t=ii(t);let e=t.type==="hsl"||t.type==="hsla"?ii(fR(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function hR(t,e){const n=Bg(t),r=Bg(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function wF(t,e){return t=ii(t),e=ip(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,sc(t)}function pR(t,e){if(t=ii(t),e=ip(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return sc(t)}function mR(t,e){if(t=ii(t),e=ip(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return sc(t)}const gR=k.createContext(null),Tw=gR;function kw(){return k.useContext(Tw)}const yR=typeof Symbol=="function"&&Symbol.for,vR=yR?Symbol.for("mui.nested"):"__THEME_NESTED__";function _R(t,e){return typeof e=="function"?e(t):ee({},t,e)}function wR(t){const{children:e,theme:n}=t,r=kw(),i=k.useMemo(()=>{const s=r===null?n:_R(r,n);return s!=null&&(s[vR]=r!==null),s},[n,r]);return $e.jsx(Tw.Provider,{value:i,children:e})}const Wg={};function Hg(t,e,n,r=!1){return k.useMemo(()=>{const i=t&&e[t]||e;if(typeof n=="function"){const s=n(i),o=t?ee({},e,{[t]:s}):s;return r?()=>o:o}return t?ee({},e,{[t]:n}):ee({},e,n)},[t,e,n,r])}function ER(t){const{children:e,theme:n,themeId:r}=t,i=Cw(Wg),s=kw()||Wg,o=Hg(r,i,n),a=Hg(r,s,n,!0);return $e.jsx(wR,{theme:a,children:$e.jsx(Xh.Provider,{value:o,children:e})})}function SR(t,e){return ee({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}const CR={black:"#000",white:"#fff"},Zo=CR,IR={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},TR=IR,kR={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},xi=kR,RR={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Ai=RR,PR={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Zs=PR,bR={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Ni=bR,xR={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Oi=xR,AR={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Di=AR,NR=["mode","contrastThreshold","tonalOffset"],Vg={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Zo.white,default:Zo.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},rd={text:{primary:Zo.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Zo.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Kg(t,e,n,r){const i=r.light||r,s=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=mR(t.main,i):e==="dark"&&(t.dark=pR(t.main,s)))}function OR(t="light"){return t==="dark"?{main:Ni[200],light:Ni[50],dark:Ni[400]}:{main:Ni[700],light:Ni[400],dark:Ni[800]}}function DR(t="light"){return t==="dark"?{main:xi[200],light:xi[50],dark:xi[400]}:{main:xi[500],light:xi[300],dark:xi[700]}}function LR(t="light"){return t==="dark"?{main:Ai[500],light:Ai[300],dark:Ai[700]}:{main:Ai[700],light:Ai[400],dark:Ai[800]}}function MR(t="light"){return t==="dark"?{main:Oi[400],light:Oi[300],dark:Oi[700]}:{main:Oi[700],light:Oi[500],dark:Oi[900]}}function FR(t="light"){return t==="dark"?{main:Di[400],light:Di[300],dark:Di[700]}:{main:Di[800],light:Di[500],dark:Di[900]}}function UR(t="light"){return t==="dark"?{main:Zs[400],light:Zs[300],dark:Zs[700]}:{main:"#ed6c02",light:Zs[500],dark:Zs[900]}}function $R(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2}=t,i=vi(t,NR),s=t.primary||OR(e),o=t.secondary||DR(e),a=t.error||LR(e),l=t.info||MR(e),u=t.success||FR(e),c=t.warning||UR(e);function d(g){return hR(g,rd.text.primary)>=n?rd.text.primary:Vg.text.primary}const f=({color:g,name:E,mainShade:p=500,lightShade:h=300,darkShade:y=700})=>{if(g=ee({},g),!g.main&&g[p]&&(g.main=g[p]),!g.hasOwnProperty("main"))throw new Error(Es(11,E?` (${E})`:"",p));if(typeof g.main!="string")throw new Error(Es(12,E?` (${E})`:"",JSON.stringify(g.main)));return Kg(g,"light",h,r),Kg(g,"dark",y,r),g.contrastText||(g.contrastText=d(g.main)),g},m={dark:rd,light:Vg};return Sn(ee({common:ee({},Zo),mode:e,primary:f({color:s,name:"primary"}),secondary:f({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:f({color:a,name:"error"}),warning:f({color:c,name:"warning"}),info:f({color:l,name:"info"}),success:f({color:u,name:"success"}),grey:TR,contrastThreshold:n,getContrastText:d,augmentColor:f,tonalOffset:r},m[e]),i)}const jR=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function zR(t){return Math.round(t*1e5)/1e5}const Gg={textTransform:"uppercase"},qg='"Roboto", "Helvetica", "Arial", sans-serif';function BR(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:r=qg,fontSize:i=14,fontWeightLight:s=300,fontWeightRegular:o=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:c,pxToRem:d}=n,f=vi(n,jR),m=i/14,v=d||(p=>`${p/u*m}rem`),g=(p,h,y,I,R)=>ee({fontFamily:r,fontWeight:p,fontSize:v(h),lineHeight:y},r===qg?{letterSpacing:`${zR(I/h)}em`}:{},R,c),E={h1:g(s,96,1.167,-1.5),h2:g(s,60,1.2,-.5),h3:g(o,48,1.167,0),h4:g(o,34,1.235,.25),h5:g(o,24,1.334,0),h6:g(a,20,1.6,.15),subtitle1:g(o,16,1.75,.15),subtitle2:g(a,14,1.57,.1),body1:g(o,16,1.5,.15),body2:g(o,14,1.43,.15),button:g(a,14,1.75,.4,Gg),caption:g(o,12,1.66,.4),overline:g(o,12,2.66,1,Gg),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Sn(ee({htmlFontSize:u,pxToRem:v,fontFamily:r,fontSize:i,fontWeightLight:s,fontWeightRegular:o,fontWeightMedium:a,fontWeightBold:l},E),f,{clone:!1})}const WR=.2,HR=.14,VR=.12;function _e(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${WR})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${HR})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${VR})`].join(",")}const KR=["none",_e(0,2,1,-1,0,1,1,0,0,1,3,0),_e(0,3,1,-2,0,2,2,0,0,1,5,0),_e(0,3,3,-2,0,3,4,0,0,1,8,0),_e(0,2,4,-1,0,4,5,0,0,1,10,0),_e(0,3,5,-1,0,5,8,0,0,1,14,0),_e(0,3,5,-1,0,6,10,0,0,1,18,0),_e(0,4,5,-2,0,7,10,1,0,2,16,1),_e(0,5,5,-3,0,8,10,1,0,3,14,2),_e(0,5,6,-3,0,9,12,1,0,3,16,2),_e(0,6,6,-3,0,10,14,1,0,4,18,3),_e(0,6,7,-4,0,11,15,1,0,4,20,3),_e(0,7,8,-4,0,12,17,2,0,5,22,4),_e(0,7,8,-4,0,13,19,2,0,5,24,4),_e(0,7,9,-4,0,14,21,2,0,5,26,4),_e(0,8,9,-5,0,15,22,2,0,6,28,5),_e(0,8,10,-5,0,16,24,2,0,6,30,5),_e(0,8,11,-5,0,17,26,2,0,6,32,5),_e(0,9,11,-5,0,18,28,2,0,7,34,6),_e(0,9,12,-6,0,19,29,2,0,7,36,6),_e(0,10,13,-6,0,20,31,3,0,8,38,7),_e(0,10,13,-6,0,21,33,3,0,8,40,7),_e(0,10,14,-6,0,22,35,3,0,8,42,7),_e(0,11,14,-7,0,23,36,3,0,9,44,8),_e(0,11,15,-7,0,24,38,3,0,9,46,8)],GR=["duration","easing","delay"],qR={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},YR={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Yg(t){return`${Math.round(t)}ms`}function QR(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function JR(t){const e=ee({},qR,t.easing),n=ee({},YR,t.duration);return ee({getAutoHeightDuration:QR,create:(i=["all"],s={})=>{const{duration:o=n.standard,easing:a=e.easeInOut,delay:l=0}=s;return vi(s,GR),(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof o=="string"?o:Yg(o)} ${a} ${typeof l=="string"?l:Yg(l)}`).join(",")}},t,{easing:e,duration:n})}const XR={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},ZR=XR,eP=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Rw(t={},...e){const{mixins:n={},palette:r={},transitions:i={},typography:s={}}=t,o=vi(t,eP);if(t.vars)throw new Error(Es(18));const a=$R(r),l=Sw(t);let u=Sn(l,{mixins:SR(l.breakpoints,n),palette:a,shadows:KR.slice(),typography:BR(a,s),transitions:JR(i),zIndex:ee({},ZR)});return u=Sn(u,o),u=e.reduce((c,d)=>Sn(c,d),u),u.unstable_sxConfig=ee({},rp,o==null?void 0:o.unstable_sxConfig),u.unstable_sx=function(d){return Ew({sx:d,theme:this})},u}const tP=Rw(),Pw=tP;function nP({props:t,name:e}){return cR({props:t,name:e,defaultTheme:Pw,themeId:Ql})}const rP=["theme"];function iP(t){let{theme:e}=t,n=vi(t,rP);const r=e[Ql];return $e.jsx(ER,ee({},n,{themeId:r?Ql:void 0,theme:r||e}))}var Qg={};/**
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
 */const bw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const b=function(t,e){if(!t)throw Ns(e)},Ns=function(t){return new Error("Firebase Database ("+bw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const xw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},sp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[c],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new oP;const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Aw=function(t){const e=xw(t);return sp.encodeByteArray(e,!0)},Zl=function(t){return Aw(t).replace(/\./g,"")},eu=function(t){try{return sp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function aP(t){return Nw(void 0,t)}function Nw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!lP(n)||(t[n]=Nw(t[n],e[n]));return t}function lP(t){return t!=="__proto__"}/**
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
 */function uP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cP=()=>uP().__FIREBASE_DEFAULTS__,dP=()=>{if(typeof process>"u"||typeof Qg>"u")return;const t=Qg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&eu(t[1]);return e&&JSON.parse(e)},op=()=>{try{return cP()||dP()||fP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ow=t=>{var e,n;return(n=(e=op())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hP=t=>{const e=Ow(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Dw=()=>{var t;return(t=op())===null||t===void 0?void 0:t.config},Lw=t=>{var e;return(e=op())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */let oc=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};/**
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
 */function pP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Zl(JSON.stringify(n)),Zl(JSON.stringify(o)),""].join(".")}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ap(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function Mw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Fw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mP(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Uw(){return bw.NODE_ADMIN===!0}function $w(){try{return typeof indexedDB=="object"}catch{return!1}}function jw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function gP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const yP="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yP,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?vP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new kn(i,a,r)}}function vP(t,e){return t.replace(_P,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _P=/\{\$([^}]+)}/g;/**
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
 */function ea(t){return JSON.parse(t)}function Ke(t){return JSON.stringify(t)}/**
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
 */const zw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ea(eu(s[0])||""),n=ea(eu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},wP=function(t){const e=zw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},EP=function(t){const e=zw(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Rn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Cs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Sf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ta(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jg(s)&&Jg(o)){if(!ta(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jg(t){return t!==null&&typeof t=="object"}/**
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
 */function Os(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function po(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function mo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class SP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function CP(t,e){const n=new IP(t,e);return n.subscribe.bind(n)}class IP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=id),i.error===void 0&&(i.error=id),i.complete===void 0&&(i.complete=id);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function id(){}function lp(t,e){return`${t} failed: ${e} argument `}/**
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
 */const kP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,b(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ac=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const RP=1e3,PP=2,bP=4*60*60*1e3,xP=.5;function Xg(t,e=RP,n=PP){const r=e*Math.pow(n,t),i=Math.round(xP*r*(Math.random()-.5)*2);return Math.min(bP,r+i)}/**
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
 */function kt(t){return t&&t._delegate?t._delegate:t}class cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jr="[DEFAULT]";/**
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
 */class AP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new oc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OP(e))try{this.getOrInitializeService({instanceIdentifier:jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jr){return this.instances.has(e)}getOptions(e=jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jr){return this.component?this.component.multipleInstances?e:jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NP(t){return t===jr?void 0:t}function OP(t){return t.instantiationMode==="EAGER"}/**
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
 */class DP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const LP={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},MP=ue.INFO,FP={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},UP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=FP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lc{constructor(e){this.name=e,this._logLevel=MP,this._logHandler=UP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const $P=(t,e)=>e.some(n=>t instanceof n);let Zg,ey;function jP(){return Zg||(Zg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zP(){return ey||(ey=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bw=new WeakMap,Cf=new WeakMap,Ww=new WeakMap,sd=new WeakMap,up=new WeakMap;function BP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bw.set(n,t)}).catch(()=>{}),up.set(e,t),e}function WP(t){if(Cf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Cf.set(t,e)}let If={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ww.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HP(t){If=t(If)}function VP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(od(this),e,...n);return Ww.set(r,e.sort?e.sort():[e]),Cr(r)}:zP().includes(t)?function(...e){return t.apply(od(this),e),Cr(Bw.get(this))}:function(...e){return Cr(t.apply(od(this),e))}}function KP(t){return typeof t=="function"?VP(t):(t instanceof IDBTransaction&&WP(t),$P(t,jP())?new Proxy(t,If):t)}function Cr(t){if(t instanceof IDBRequest)return BP(t);if(sd.has(t))return sd.get(t);const e=KP(t);return e!==t&&(sd.set(t,e),up.set(e,t)),e}const od=t=>up.get(t);function Hw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Cr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Cr(o.result),l.oldVersion,l.newVersion,Cr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const GP=["get","getKey","getAll","getAllKeys","count"],qP=["put","add","delete","clear"],ad=new Map;function ty(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ad.get(e))return ad.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||GP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ad.set(e,s),s}HP(t=>({...t,get:(e,n,r)=>ty(e,n)||t.get(e,n,r),has:(e,n)=>!!ty(e,n)||t.has(e,n)}));/**
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
 */class YP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tf="@firebase/app",ny="0.10.0";/**
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
 */const si=new lc("@firebase/app"),JP="@firebase/app-compat",XP="@firebase/analytics-compat",ZP="@firebase/analytics",eb="@firebase/app-check-compat",tb="@firebase/app-check",nb="@firebase/auth",rb="@firebase/auth-compat",ib="@firebase/database",sb="@firebase/database-compat",ob="@firebase/functions",ab="@firebase/functions-compat",lb="@firebase/installations",ub="@firebase/installations-compat",cb="@firebase/messaging",db="@firebase/messaging-compat",fb="@firebase/performance",hb="@firebase/performance-compat",pb="@firebase/remote-config",mb="@firebase/remote-config-compat",gb="@firebase/storage",yb="@firebase/storage-compat",vb="@firebase/firestore",_b="@firebase/firestore-compat",wb="firebase",Eb="10.10.0";/**
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
 */const kf="[DEFAULT]",Sb={[Tf]:"fire-core",[JP]:"fire-core-compat",[ZP]:"fire-analytics",[XP]:"fire-analytics-compat",[tb]:"fire-app-check",[eb]:"fire-app-check-compat",[nb]:"fire-auth",[rb]:"fire-auth-compat",[ib]:"fire-rtdb",[sb]:"fire-rtdb-compat",[ob]:"fire-fn",[ab]:"fire-fn-compat",[lb]:"fire-iid",[ub]:"fire-iid-compat",[cb]:"fire-fcm",[db]:"fire-fcm-compat",[fb]:"fire-perf",[hb]:"fire-perf-compat",[pb]:"fire-rc",[mb]:"fire-rc-compat",[gb]:"fire-gcs",[yb]:"fire-gcs-compat",[vb]:"fire-fst",[_b]:"fire-fst-compat","fire-js":"fire-js",[wb]:"fire-js-all"};/**
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
 */const nu=new Map,Cb=new Map,Rf=new Map;function ry(t,e){try{t.container.addComponent(e)}catch(n){si.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tn(t){const e=t.name;if(Rf.has(e))return si.debug(`There were multiple attempts to register component ${e}.`),!1;Rf.set(e,t);for(const n of nu.values())ry(n,t);for(const n of Cb.values())ry(n,t);return!0}function wi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function vn(t){return t.settings!==void 0}/**
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
 */const Ib={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ir=new _i("app","Firebase",Ib);/**
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
 */class Tb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
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
 */const Ds=Eb;function Vw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ir.create("bad-app-name",{appName:String(i)});if(n||(n=Dw()),!n)throw Ir.create("no-options");const s=nu.get(i);if(s){if(ta(n,s.options)&&ta(r,s.config))return s;throw Ir.create("duplicate-app",{appName:i})}const o=new DP(i);for(const l of Rf.values())o.addComponent(l);const a=new Tb(n,r,o);return nu.set(i,a),a}function cp(t=kf){const e=nu.get(t);if(!e&&t===kf&&Dw())return Vw();if(!e)throw Ir.create("no-app",{appName:t});return e}function Gt(t,e,n){var r;let i=(r=Sb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),si.warn(a.join(" "));return}Tn(new cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const kb="firebase-heartbeat-database",Rb=1,na="firebase-heartbeat-store";let ld=null;function Kw(){return ld||(ld=Hw(kb,Rb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(na)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ir.create("idb-open",{originalErrorMessage:t.message})})),ld}async function Pb(t){try{const n=(await Kw()).transaction(na),r=await n.objectStore(na).get(Gw(t));return await n.done,r}catch(e){if(e instanceof kn)si.warn(e.message);else{const n=Ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});si.warn(n.message)}}}async function iy(t,e){try{const r=(await Kw()).transaction(na,"readwrite");await r.objectStore(na).put(e,Gw(t)),await r.done}catch(n){if(n instanceof kn)si.warn(n.message);else{const r=Ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});si.warn(r.message)}}}function Gw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bb=1024,xb=30*24*60*60*1e3;class Ab{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ob(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sy();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=xb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sy(),{heartbeatsToSend:r,unsentEntries:i}=Nb(this._heartbeatsCache.heartbeats),s=Zl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function sy(){return new Date().toISOString().substring(0,10)}function Nb(t,e=bb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),oy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),oy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ob{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $w()?jw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Pb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function oy(t){return Zl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Db(t){Tn(new cn("platform-logger",e=>new YP(e),"PRIVATE")),Tn(new cn("heartbeat",e=>new Ab(e),"PRIVATE")),Gt(Tf,ny,t),Gt(Tf,ny,"esm2017"),Gt("fire-js","")}Db("");var ay=function(){return ay=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ay.apply(this,arguments)};function dp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function SF(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function qw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lb=qw,Yw=new _i("auth","Firebase",qw());/**
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
 */const ru=new lc("@firebase/auth");function Mb(t,...e){ru.logLevel<=ue.WARN&&ru.warn(`Auth (${Ds}): ${t}`,...e)}function El(t,...e){ru.logLevel<=ue.ERROR&&ru.error(`Auth (${Ds}): ${t}`,...e)}/**
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
 */function dn(t,...e){throw fp(t,...e)}function Cn(t,...e){return fp(t,...e)}function Qw(t,e,n){const r=Object.assign(Object.assign({},Lb()),{[e]:n});return new _i("auth","Firebase",r).create(e,{appName:t.name})}function Un(t){return Qw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Yw.create(t,...e)}function $(t,e,...n){if(!t)throw fp(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw El(e),new Error(e)}function Kn(t,e){t||On(e)}/**
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
 */function Pf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Fb(){return ly()==="http:"||ly()==="https:"}function ly(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ub(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fb()||Mw()||"connection"in navigator)?navigator.onLine:!0}function $b(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ia{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=ap()||Fw()}get(){return Ub()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hp(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Jw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zb=new Ia(3e4,6e4);function Or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dr(t,e,n,r,i={}){return Xw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Os(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Jw.fetch()(Zw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Xw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jb),e);try{const i=new Wb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw nl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw nl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw nl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw nl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qw(t,c,u);dn(t,c)}}catch(i){if(i instanceof kn)throw i;dn(t,"network-request-failed",{message:String(i)})}}async function Ta(t,e,n,r,i={}){const s=await Dr(t,e,n,r,i);return"mfaPendingCredential"in s&&dn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Zw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?hp(t.config,i):`${t.config.apiScheme}://${i}`}function Bb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Wb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Cn(this.auth,"network-request-failed")),zb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Cn(t,e,r);return i.customData._tokenResponse=n,i}function uy(t){return t!==void 0&&t.enterprise!==void 0}class Hb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Bb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Vb(t,e){return Dr(t,"GET","/v2/recaptchaConfig",Or(t,e))}/**
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
 */async function Kb(t,e){return Dr(t,"POST","/v1/accounts:delete",e)}async function eE(t,e){return Dr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ko(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gb(t,e=!1){const n=kt(t),r=await n.getIdToken(e),i=pp(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ko(ud(i.auth_time)),issuedAtTime:ko(ud(i.iat)),expirationTime:ko(ud(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ud(t){return Number(t)*1e3}function pp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return El("JWT malformed, contained fewer than 3 sections"),null;try{const i=eu(n);return i?JSON.parse(i):(El("Failed to decode base64 JWT payload"),null)}catch(i){return El("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cy(t){const e=pp(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ra(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&qb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Yb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ko(this.lastLoginAt),this.creationTime=ko(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function iu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ra(t,eE(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?tE(s.providerUserInfo):[],a=Jb(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new bf(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function Qb(t){const e=kt(t);await iu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function tE(t){return t.map(e=>{var{providerId:n}=e,r=dp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Xb(t,e){const n=await Xw(t,{},async()=>{const r=Os({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Zw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Zb(t,e){return Dr(t,"POST","/v2/accounts:revokeToken",Or(t,e))}/**
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
 */class as{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=cy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Xb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new as;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new as,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
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
 */function rr(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=dp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ra(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Gb(this,e)}reload(){return Qb(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await iu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vn(this.auth.app))return Promise.reject(Un(this.auth));const e=await this.getIdToken();return await ra(this,Kb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:I,isAnonymous:R,providerData:_,stsTokenManager:C}=n;$(y&&C,e,"internal-error");const A=as.fromJSON(this.name,C);$(typeof y=="string",e,"internal-error"),rr(d,e.name),rr(f,e.name),$(typeof I=="boolean",e,"internal-error"),$(typeof R=="boolean",e,"internal-error"),rr(m,e.name),rr(v,e.name),rr(g,e.name),rr(E,e.name),rr(p,e.name),rr(h,e.name);const D=new Dn({uid:y,auth:e,email:f,emailVerified:I,displayName:d,isAnonymous:R,photoURL:v,phoneNumber:m,tenantId:g,stsTokenManager:A,createdAt:p,lastLoginAt:h});return _&&Array.isArray(_)&&(D.providerData=_.map(F=>Object.assign({},F))),E&&(D._redirectEventId=E),D}static async _fromIdTokenResponse(e,n,r=!1){const i=new as;i.updateFromServerResponse(n);const s=new Dn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await iu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?tE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new as;a.updateFromIdToken(r);const l=new Dn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new bf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const dy=new Map;function Ln(t){Kn(t instanceof Function,"Expected a class definition");let e=dy.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dy.set(t,e),e)}/**
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
 */class nE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nE.type="NONE";const fy=nE;/**
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
 */function Sl(t,e,n){return`firebase:${t}:${e}:${n}`}class ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Sl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Sl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ls(Ln(fy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ln(fy);const o=Sl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Dn._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ls(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ls(s,e,r))}}/**
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
 */function hy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(aE(e))return"Blackberry";if(lE(e))return"Webos";if(mp(e))return"Safari";if((e.includes("chrome/")||iE(e))&&!e.includes("edge/"))return"Chrome";if(oE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rE(t=ut()){return/firefox\//i.test(t)}function mp(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iE(t=ut()){return/crios\//i.test(t)}function sE(t=ut()){return/iemobile/i.test(t)}function oE(t=ut()){return/android/i.test(t)}function aE(t=ut()){return/blackberry/i.test(t)}function lE(t=ut()){return/webos/i.test(t)}function uc(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ex(t=ut()){var e;return uc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tx(){return mP()&&document.documentMode===10}function uE(t=ut()){return uc(t)||oE(t)||lE(t)||aE(t)||/windows phone/i.test(t)||sE(t)}function nx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function cE(t,e=[]){let n;switch(t){case"Browser":n=hy(ut());break;case"Worker":n=`${hy(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ds}/${r}`}/**
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
 */class rx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ix(t,e={}){return Dr(t,"GET","/v2/passwordPolicy",Or(t,e))}/**
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
 */const sx=6;class ox{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ax{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new py(this),this.idTokenSubscription=new py(this),this.beforeStateQueue=new rx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ls.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await eE(this,{idToken:e}),r=await Dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(vn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await iu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$b()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vn(this.app))return Promise.reject(Un(this));const n=e?kt(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vn(this.app)?Promise.reject(Un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vn(this.app)?Promise.reject(Un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ix(this),n=new ox(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _i("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Zb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await ls.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Mb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ei(t){return kt(t)}class py{constructor(e){this.auth=e,this.observer=null,this.addObserver=CP(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let cc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lx(t){cc=t}function dE(t){return cc.loadJS(t)}function ux(){return cc.recaptchaEnterpriseScript}function cx(){return cc.gapiScript}function dx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const fx="recaptcha-enterprise",hx="NO_RECAPTCHA";class px{constructor(e){this.type=fx,this.auth=Ei(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Vb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Hb(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;uy(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(hx)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&uy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ux();l.length!==0&&(l+=a),dE(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function my(t,e,n,r=!1){const i=new px(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function xf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await my(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await my(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function mx(t,e){const n=wi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ta(s,e??{}))return i;dn(i,"already-initialized")}return n.initialize({options:e})}function gx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yx(t,e,n){const r=Ei(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=fE(e),{host:o,port:a}=vx(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||_x()}function fE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vx(t){const e=fE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:gy(o)}}}function gy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _x(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class gp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function wx(t,e){return Dr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ex(t,e){return Ta(t,"POST","/v1/accounts:signInWithPassword",Or(t,e))}/**
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
 */async function Sx(t,e){return Ta(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}async function Cx(t,e){return Ta(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}/**
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
 */class ia extends gp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ia(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ia(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xf(e,n,"signInWithPassword",Ex);case"emailLink":return Sx(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xf(e,r,"signUpPassword",wx);case"emailLink":return Cx(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function us(t,e){return Ta(t,"POST","/v1/accounts:signInWithIdp",Or(t,e))}/**
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
 */const Ix="http://localhost";class oi extends gp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=dp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,us(e,n)}buildRequest(){const e={requestUri:Ix,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Os(n)}return e}}/**
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
 */function Tx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kx(t){const e=po(mo(t)).link,n=e?po(mo(e)).deep_link_id:null,r=po(mo(t)).deep_link_id;return(r?po(mo(r)).link:null)||r||n||e||t}class yp{constructor(e){var n,r,i,s,o,a;const l=po(mo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=Tx((i=l.mode)!==null&&i!==void 0?i:null);$(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=kx(e);try{return new yp(n)}catch{return null}}}/**
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
 */class Ls{constructor(){this.providerId=Ls.PROVIDER_ID}static credential(e,n){return ia._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=yp.parseLink(n);return $(r,"argument-error"),ia._fromEmailAndCode(e,r.code,r.tenantId)}}Ls.PROVIDER_ID="password";Ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class hE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ka extends hE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ur extends ka{constructor(){super("facebook.com")}static credential(e){return oi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
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
 */class cr extends ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return oi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
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
 */class dr extends ka{constructor(){super("github.com")}static credential(e){return oi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
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
 */class fr extends ka{constructor(){super("twitter.com")}static credential(e,n){return oi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
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
 */async function Rx(t,e){return Ta(t,"POST","/v1/accounts:signUp",Or(t,e))}/**
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
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Dn._fromIdTokenResponse(e,r,i),o=yy(r);return new ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=yy(r);return new ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function yy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class su extends kn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,su.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new su(e,n,r,i)}}function pE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?su._fromErrorAndOperation(t,s,e,r):s})}async function Px(t,e,n=!1){const r=await ra(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",r)}/**
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
 */async function bx(t,e,n=!1){const{auth:r}=t;if(vn(r.app))return Promise.reject(Un(r));const i="reauthenticate";try{const s=await ra(t,pE(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=pp(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),ai._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),s}}/**
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
 */async function mE(t,e,n=!1){if(vn(t.app))return Promise.reject(Un(t));const r="signIn",i=await pE(t,r,e),s=await ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function xx(t,e){return mE(Ei(t),e)}/**
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
 */async function gE(t){const e=Ei(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ax(t,e,n){if(vn(t.app))return Promise.reject(Un(t));const r=Ei(t),o=await xf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Rx).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&gE(t),l}),a=await ai._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Nx(t,e,n){return vn(t.app)?Promise.reject(Un(t)):xx(kt(t),Ls.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gE(t),r})}/**
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
 */function Ox(t,e){return kt(t).setPersistence(e)}function Dx(t,e,n,r){return kt(t).onIdTokenChanged(e,n,r)}function Lx(t,e,n){return kt(t).beforeAuthStateChanged(e,n)}const ou="__sak";/**
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
 */class yE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ou,"1"),this.storage.removeItem(ou),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Mx(){const t=ut();return mp(t)||uc(t)}const Fx=1e3,Ux=10;class vE extends yE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mx()&&nx(),this.fallbackToPolling=uE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ux):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Fx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vE.type="LOCAL";const _E=vE;/**
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
 */class wE extends yE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wE.type="SESSION";const EE=wE;/**
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
 */function $x(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new dc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await $x(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dc.receivers=[];/**
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
 */function vp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class jx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=vp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function In(){return window}function zx(t){In().location.href=t}/**
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
 */function SE(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function Bx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Hx(){return SE()?self:null}/**
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
 */const CE="firebaseLocalStorageDb",Vx=1,au="firebaseLocalStorage",IE="fbase_key";class Ra{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fc(t,e){return t.transaction([au],e?"readwrite":"readonly").objectStore(au)}function Kx(){const t=indexedDB.deleteDatabase(CE);return new Ra(t).toPromise()}function Af(){const t=indexedDB.open(CE,Vx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(au,{keyPath:IE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(au)?e(r):(r.close(),await Kx(),e(await Af()))})})}async function vy(t,e,n){const r=fc(t,!0).put({[IE]:e,value:n});return new Ra(r).toPromise()}async function Gx(t,e){const n=fc(t,!1).get(e),r=await new Ra(n).toPromise();return r===void 0?null:r.value}function _y(t,e){const n=fc(t,!0).delete(e);return new Ra(n).toPromise()}const qx=800,Yx=3;class TE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Af(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Yx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return SE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dc._getInstance(Hx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Bx(),!this.activeServiceWorker)return;this.sender=new jx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Af();return await vy(e,ou,"1"),await _y(e,ou),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Gx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_y(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fc(i,!1).getAll();return new Ra(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}TE.type="LOCAL";const Qx=TE;new Ia(3e4,6e4);/**
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
 */function Jx(t,e){return e?Ln(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class _p extends gp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xx(t){return mE(t.auth,new _p(t),t.bypassAuthState)}function Zx(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),bx(n,new _p(t),t.bypassAuthState)}async function eA(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Px(n,new _p(t),t.bypassAuthState)}/**
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
 */class kE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xx;case"linkViaPopup":case"linkViaRedirect":return eA;case"reauthViaPopup":case"reauthViaRedirect":return Zx;default:dn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tA=new Ia(2e3,1e4);class Yi extends kE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Yi.currentPopupAction&&Yi.currentPopupAction.cancel(),Yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=vp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tA.get())};e()}}Yi.currentPopupAction=null;/**
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
 */const nA="pendingRedirect",Cl=new Map;class rA extends kE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Cl.get(this.auth._key());if(!e){try{const r=await iA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Cl.set(this.auth._key(),e)}return this.bypassAuthState||Cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iA(t,e){const n=aA(e),r=oA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function sA(t,e){Cl.set(t._key(),e)}function oA(t){return Ln(t._redirectPersistence)}function aA(t){return Sl(nA,t.config.apiKey,t.name)}async function lA(t,e,n=!1){if(vn(t.app))return Promise.reject(Un(t));const r=Ei(t),i=Jx(r,e),o=await new rA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const uA=10*60*1e3;class cA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!RE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uA&&this.cachedEventUids.clear(),this.cachedEventUids.has(wy(e))}saveEventToCache(e){this.cachedEventUids.add(wy(e)),this.lastProcessedEventTime=Date.now()}}function wy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function RE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RE(t);default:return!1}}/**
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
 */async function fA(t,e={}){return Dr(t,"GET","/v1/projects",e)}/**
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
 */const hA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pA=/^https?/;async function mA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fA(t);for(const n of e)try{if(gA(n))return}catch{}dn(t,"unauthorized-domain")}function gA(t){const e=Pf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pA.test(n))return!1;if(hA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const yA=new Ia(3e4,6e4);function Ey(){const t=In().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vA(t){return new Promise((e,n)=>{var r,i,s;function o(){Ey(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ey(),n(Cn(t,"network-request-failed"))},timeout:yA.get()})}if(!((i=(r=In().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=In().gapi)===null||s===void 0)&&s.load)o();else{const a=dx("iframefcb");return In()[a]=()=>{gapi.load?o():n(Cn(t,"network-request-failed"))},dE(`${cx()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Il=null,e})}let Il=null;function _A(t){return Il=Il||vA(t),Il}/**
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
 */const wA=new Ia(5e3,15e3),EA="__/auth/iframe",SA="emulator/auth/iframe",CA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TA(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hp(e,SA):`https://${t.config.authDomain}/${EA}`,r={apiKey:e.apiKey,appName:t.name,v:Ds},i=IA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Os(r).slice(1)}`}async function kA(t){const e=await _A(t),n=In().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:TA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Cn(t,"network-request-failed"),a=In().setTimeout(()=>{s(o)},wA.get());function l(){In().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const RA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PA=500,bA=600,xA="_blank",AA="http://localhost";class Sy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NA(t,e,n,r=PA,i=bA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},RA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ut().toLowerCase();n&&(a=iE(u)?xA:n),rE(u)&&(e=e||AA,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[m,v])=>`${f}${m}=${v},`,"");if(ex(u)&&a!=="_self")return OA(e||"",a),new Sy(null);const d=window.open(e||"",a,c);$(d,t,"popup-blocked");try{d.focus()}catch{}return new Sy(d)}function OA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const DA="__/auth/handler",LA="emulator/auth/handler",MA=encodeURIComponent("fac");async function Cy(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ds,eventId:i};if(e instanceof hE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Sf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof ka){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${MA}=${encodeURIComponent(l)}`:"";return`${FA(t)}?${Os(a).slice(1)}${u}`}function FA({config:t}){return t.emulator?hp(t,LA):`https://${t.authDomain}/${DA}`}/**
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
 */const cd="webStorageSupport";class UA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=EE,this._completeRedirectFn=lA,this._overrideRedirectResult=sA}async _openPopup(e,n,r,i){var s;Kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Cy(e,n,r,Pf(),i);return NA(e,o,vp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Cy(e,n,r,Pf(),i);return zx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kA(e),r=new cA(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cd,{type:cd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[cd];o!==void 0&&n(!!o),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uE()||mp()||uc()}}const $A=UA;var Iy="@firebase/auth",Ty="1.7.0";/**
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
 */class jA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BA(t){Tn(new cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cE(t)},u=new ax(r,i,s,l);return gx(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tn(new cn("auth-internal",e=>{const n=Ei(e.getProvider("auth").getImmediate());return(r=>new jA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(Iy,Ty,zA(t)),Gt(Iy,Ty,"esm2017")}/**
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
 */const WA=5*60,HA=Lw("authIdTokenMaxAge")||WA;let ky=null;const VA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>HA)return;const i=n==null?void 0:n.token;ky!==i&&(ky=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function KA(t=cp()){const e=wi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mx(t,{popupRedirectResolver:$A,persistence:[Qx,_E,EE]}),r=Lw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=VA(s.toString());Lx(n,o,()=>o(n.currentUser)),Dx(n,a=>o(a))}}const i=Ow("auth");return i&&yx(n,`http://${i}`),n}function GA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}lx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",GA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BA("Browser");var qA="firebase",YA="10.10.0";/**
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
 */Gt(qA,YA,"app");const PE="@firebase/installations",wp="0.6.6";/**
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
 */const bE=1e4,xE=`w:${wp}`,AE="FIS_v2",QA="https://firebaseinstallations.googleapis.com/v1",JA=60*60*1e3,XA="installations",ZA="Installations";/**
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
 */const eN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},li=new _i(XA,ZA,eN);function NE(t){return t instanceof kn&&t.code.includes("request-failed")}/**
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
 */function OE({projectId:t}){return`${QA}/projects/${t}/installations`}function DE(t){return{token:t.token,requestStatus:2,expiresIn:nN(t.expiresIn),creationTime:Date.now()}}async function LE(t,e){const r=(await e.json()).error;return li.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ME({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function tN(t,{refreshToken:e}){const n=ME(t);return n.append("Authorization",rN(e)),n}async function FE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function nN(t){return Number(t.replace("s","000"))}function rN(t){return`${AE} ${t}`}/**
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
 */async function iN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=OE(t),i=ME(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:AE,appId:t.appId,sdkVersion:xE},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await FE(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:DE(u.authToken)}}else throw await LE("Create Installation",l)}/**
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
 */function UE(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function sN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const oN=/^[cdef][\w-]{21}$/,Nf="";function aN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=lN(t);return oN.test(n)?n:Nf}catch{return Nf}}function lN(t){return sN(t).substr(0,22)}/**
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
 */function hc(t){return`${t.appName}!${t.appId}`}/**
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
 */const $E=new Map;function jE(t,e){const n=hc(t);zE(n,e),uN(n,e)}function zE(t,e){const n=$E.get(t);if(n)for(const r of n)r(e)}function uN(t,e){const n=cN();n&&n.postMessage({key:t,fid:e}),dN()}let Vr=null;function cN(){return!Vr&&"BroadcastChannel"in self&&(Vr=new BroadcastChannel("[Firebase] FID Change"),Vr.onmessage=t=>{zE(t.data.key,t.data.fid)}),Vr}function dN(){$E.size===0&&Vr&&(Vr.close(),Vr=null)}/**
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
 */const fN="firebase-installations-database",hN=1,ui="firebase-installations-store";let dd=null;function Ep(){return dd||(dd=Hw(fN,hN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ui)}}})),dd}async function lu(t,e){const n=hc(t),i=(await Ep()).transaction(ui,"readwrite"),s=i.objectStore(ui),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&jE(t,e.fid),e}async function BE(t){const e=hc(t),r=(await Ep()).transaction(ui,"readwrite");await r.objectStore(ui).delete(e),await r.done}async function pc(t,e){const n=hc(t),i=(await Ep()).transaction(ui,"readwrite"),s=i.objectStore(ui),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&jE(t,a.fid),a}/**
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
 */async function Sp(t){let e;const n=await pc(t.appConfig,r=>{const i=pN(r),s=mN(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Nf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function pN(t){const e=t||{fid:aN(),registrationStatus:0};return WE(e)}function mN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(li.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=gN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:yN(t)}:{installationEntry:e}}async function gN(t,e){try{const n=await iN(t,e);return lu(t.appConfig,n)}catch(n){throw NE(n)&&n.customData.serverCode===409?await BE(t.appConfig):await lu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function yN(t){let e=await Ry(t.appConfig);for(;e.registrationStatus===1;)await UE(100),e=await Ry(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Sp(t);return r||n}return e}function Ry(t){return pc(t,e=>{if(!e)throw li.create("installation-not-found");return WE(e)})}function WE(t){return vN(t)?{fid:t.fid,registrationStatus:0}:t}function vN(t){return t.registrationStatus===1&&t.registrationTime+bE<Date.now()}/**
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
 */async function _N({appConfig:t,heartbeatServiceProvider:e},n){const r=wN(t,n),i=tN(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:xE,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await FE(()=>fetch(r,a));if(l.ok){const u=await l.json();return DE(u)}else throw await LE("Generate Auth Token",l)}function wN(t,{fid:e}){return`${OE(t)}/${e}/authTokens:generate`}/**
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
 */async function Cp(t,e=!1){let n;const r=await pc(t.appConfig,s=>{if(!HE(s))throw li.create("not-registered");const o=s.authToken;if(!e&&CN(o))return s;if(o.requestStatus===1)return n=EN(t,e),s;{if(!navigator.onLine)throw li.create("app-offline");const a=TN(s);return n=SN(t,a),a}});return n?await n:r.authToken}async function EN(t,e){let n=await Py(t.appConfig);for(;n.authToken.requestStatus===1;)await UE(100),n=await Py(t.appConfig);const r=n.authToken;return r.requestStatus===0?Cp(t,e):r}function Py(t){return pc(t,e=>{if(!HE(e))throw li.create("not-registered");const n=e.authToken;return kN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function SN(t,e){try{const n=await _N(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await lu(t.appConfig,r),n}catch(n){if(NE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await BE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await lu(t.appConfig,r)}throw n}}function HE(t){return t!==void 0&&t.registrationStatus===2}function CN(t){return t.requestStatus===2&&!IN(t)}function IN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+JA}function TN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function kN(t){return t.requestStatus===1&&t.requestTime+bE<Date.now()}/**
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
 */async function RN(t){const e=t,{installationEntry:n,registrationPromise:r}=await Sp(e);return r?r.catch(console.error):Cp(e).catch(console.error),n.fid}/**
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
 */async function PN(t,e=!1){const n=t;return await bN(n),(await Cp(n,e)).token}async function bN(t){const{registrationPromise:e}=await Sp(t);e&&await e}/**
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
 */function xN(t){if(!t||!t.options)throw fd("App Configuration");if(!t.name)throw fd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw fd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function fd(t){return li.create("missing-app-config-values",{valueName:t})}/**
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
 */const VE="installations",AN="installations-internal",NN=t=>{const e=t.getProvider("app").getImmediate(),n=xN(e),r=wi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ON=t=>{const e=t.getProvider("app").getImmediate(),n=wi(e,VE).getImmediate();return{getId:()=>RN(n),getToken:i=>PN(n,i)}};function DN(){Tn(new cn(VE,NN,"PUBLIC")),Tn(new cn(AN,ON,"PRIVATE"))}DN();Gt(PE,wp);Gt(PE,wp,"esm2017");/**
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
 */const uu="analytics",LN="firebase_id",MN="origin",FN=60*1e3,UN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ip="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ct=new lc("@firebase/analytics");/**
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
 */const $N={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Dt=new _i("analytics","Analytics",$N);/**
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
 */function jN(t){if(!t.startsWith(Ip)){const e=Dt.create("invalid-gtag-resource",{gtagURL:t});return Ct.warn(e.message),""}return t}function KE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function zN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function BN(t,e){const n=zN("firebase-js-sdk-policy",{createScriptURL:jN}),r=document.createElement("script"),i=`${Ip}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function WN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function HN(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await KE(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Ct.error(a)}t("config",i,s)}async function VN(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await KE(n);for(const l of o){const u=a.find(d=>d.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Ct.error(s)}}function KN(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await VN(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await HN(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Ct.error(a)}}return i}function GN(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=KN(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function qN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ip)&&n.src.includes(t))return n;return null}/**
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
 */const YN=30,QN=1e3;class JN{constructor(e={},n=QN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const GE=new JN;function XN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ZN(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:XN(r)},s=UN.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Dt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function eO(t,e=GE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Dt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Dt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new rO;return setTimeout(async()=>{a.abort()},n!==void 0?n:FN),qE({appId:r,apiKey:i,measurementId:s},o,a,e)}async function qE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=GE){var s;const{appId:o,measurementId:a}=t;try{await tO(r,e)}catch(l){if(a)return Ct.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await ZN(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!nO(u)){if(i.deleteThrottleMetadata(o),a)return Ct.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Xg(n,i.intervalMillis,YN):Xg(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,d),Ct.debug(`Calling attemptFetch again in ${c} millis`),qE(t,d,r,i)}}function tO(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Dt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function nO(t){if(!(t instanceof kn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class rO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function iO(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function sO(){if($w())try{await jw()}catch(t){return Ct.warn(Dt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ct.warn(Dt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oO(t,e,n,r,i,s,o){var a;const l=eO(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Ct.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ct.error(m)),e.push(l);const u=sO().then(m=>{if(m)return r.getId()}),[c,d]=await Promise.all([l,u]);qN(s)||BN(s,c.measurementId),i("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[MN]="firebase",f.update=!0,d!=null&&(f[LN]=d),i("config",c.measurementId,f),c.measurementId}/**
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
 */class aO{constructor(e){this.app=e}_delete(){return delete Ro[this.app.options.appId],Promise.resolve()}}let Ro={},by=[];const xy={};let hd="dataLayer",lO="gtag",Ay,YE,Ny=!1;function uO(){const t=[];if(Mw()&&t.push("This is a browser extension environment."),gP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Dt.create("invalid-analytics-context",{errorInfo:e});Ct.warn(n.message)}}function cO(t,e,n){uO();const r=t.options.appId;if(!r)throw Dt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ct.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Dt.create("no-api-key");if(Ro[r]!=null)throw Dt.create("already-exists",{id:r});if(!Ny){WN(hd);const{wrappedGtag:s,gtagCore:o}=GN(Ro,by,xy,hd,lO);YE=s,Ay=o,Ny=!0}return Ro[r]=oO(t,by,xy,e,Ay,hd,n),new aO(t)}function dO(t=cp()){t=kt(t);const e=wi(t,uu);return e.isInitialized()?e.getImmediate():fO(t)}function fO(t,e={}){const n=wi(t,uu);if(n.isInitialized()){const i=n.getImmediate();if(ta(e,n.getOptions()))return i;throw Dt.create("already-initialized")}return n.initialize({options:e})}function hO(t,e,n,r){t=kt(t),iO(YE,Ro[t.app.options.appId],e,n,r).catch(i=>Ct.error(i))}const Oy="@firebase/analytics",Dy="0.10.2";function pO(){Tn(new cn(uu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return cO(r,i,n)},"PUBLIC")),Tn(new cn("analytics-internal",t,"PRIVATE")),Gt(Oy,Dy),Gt(Oy,Dy,"esm2017");function t(e){try{const n=e.getProvider(uu).getImmediate();return{logEvent:(r,i,s)=>hO(n,r,i,s)}}catch(n){throw Dt.create("interop-component-reg-failed",{reason:n})}}}pO();var Ly={};const My="@firebase/database",Fy="1.0.4";/**
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
 */let QE="";function mO(t){QE=t}/**
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
 */class gO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ea(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class yO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Rn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const JE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gO(e)}}catch{}return new yO},Kr=JE("localStorage"),Of=JE("sessionStorage");/**
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
 */const cs=new lc("@firebase/database"),vO=function(){let t=1;return function(){return t++}}(),XE=function(t){const e=kP(t),n=new SP;n.update(e);const r=n.digest();return sp.encodeByteArray(r)},Pa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Pa.apply(null,r):typeof r=="object"?e+=Ke(r):e+=r,e+=" "}return e};let Xr=null,Uy=!0;const _O=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(cs.logLevel=ue.VERBOSE,Xr=cs.log.bind(cs),e&&Of.set("logging_enabled",!0)):typeof t=="function"?Xr=t:(Xr=null,Of.remove("logging_enabled"))},Ze=function(...t){if(Uy===!0&&(Uy=!1,Xr===null&&Of.get("logging_enabled")===!0&&_O(!0)),Xr){const e=Pa.apply(null,t);Xr(e)}},ba=function(t){return function(...e){Ze(t,...e)}},Df=function(...t){const e="FIREBASE INTERNAL ERROR: "+Pa(...t);cs.error(e)},Gn=function(...t){const e=`FIREBASE FATAL ERROR: ${Pa(...t)}`;throw cs.error(e),new Error(e)},It=function(...t){const e="FIREBASE WARNING: "+Pa(...t);cs.warn(e)},wO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&It("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},EO=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Is="[MIN_NAME]",ci="[MAX_NAME]",Si=function(t,e){if(t===e)return 0;if(t===Is||e===ci)return-1;if(e===Is||t===ci)return 1;{const n=$y(t),r=$y(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},SO=function(t,e){return t===e?0:t<e?-1:1},eo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ke(e))},kp=function(t){if(typeof t!="object"||t===null)return Ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ke(e[r]),n+=":",n+=kp(t[e[r]]);return n+="}",n},ZE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function rt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const eS=function(t){b(!Tp(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},CO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},IO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function TO(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const kO=new RegExp("^-?(0*)\\d{1,10}$"),RO=-2147483648,PO=2147483647,$y=function(t){if(kO.test(t)){const e=Number(t);if(e>=RO&&e<=PO)return e}return null},Ms=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw It("Exception was thrown by user callback.",n),e},Math.floor(0))}},bO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Po=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class xO{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){It(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class AO{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',It(e)}}class ds{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ds.OWNER="owner";/**
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
 */const Rp="5",tS="v",nS="s",rS="r",iS="f",sS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oS="ls",aS="p",Lf="ac",lS="websocket",uS="long_polling";/**
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
 */class cS{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function NO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function dS(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let r;if(e===lS)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===uS)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);NO(t)&&(n.ns=t.namespace);const i=[];return rt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class OO{constructor(){this.counters_={}}incrementCounter(e,n=1){Rn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return aP(this.counters_)}}/**
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
 */const pd={},md={};function Pp(t){const e=t.toString();return pd[e]||(pd[e]=new OO),pd[e]}function DO(t,e){const n=t.toString();return md[n]||(md[n]=e()),md[n]}/**
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
 */class LO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ms(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const jy="start",MO="close",FO="pLPCommand",UO="pRTLPCB",fS="id",hS="pw",pS="ser",$O="cb",jO="seg",zO="ts",BO="d",WO="dframe",mS=1870,gS=30,HO=mS-gS,VO=25e3,KO=3e4;class Qi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ba(e),this.stats_=Pp(n),this.urlFn=l=>(this.appCheckToken&&(l[Lf]=this.appCheckToken),dS(n,uS,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new LO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(KO)),EO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new bp((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===jy)this.id=a,this.password=l;else if(o===MO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[jy]="t",r[pS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[$O]=this.scriptTagHolder.uniqueCallbackIdentifier),r[tS]=Rp,this.transportSessionId&&(r[nS]=this.transportSessionId),this.lastSessionId&&(r[oS]=this.lastSessionId),this.applicationId&&(r[aS]=this.applicationId),this.appCheckToken&&(r[Lf]=this.appCheckToken),typeof location<"u"&&location.hostname&&sS.test(location.hostname)&&(r[rS]=iS);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Qi.forceAllow_=!0}static forceDisallow(){Qi.forceDisallow_=!0}static isAvailable(){return Qi.forceAllow_?!0:!Qi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!CO()&&!IO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Aw(n),i=ZE(r,HO);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[WO]="t",r[fS]=e,r[hS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class bp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=vO(),window[FO+this.uniqueCallbackIdentifier]=e,window[UO+this.uniqueCallbackIdentifier]=n,this.myIFrame=bp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ze("frame writing exception"),a.stack&&Ze(a.stack),Ze(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ze("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[fS]=this.myID,e[hS]=this.myPW,e[pS]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gS+r.length<=mS;){const o=this.pendingSegs.shift();r=r+"&"+jO+i+"="+o.seg+"&"+zO+i+"="+o.ts+"&"+BO+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(VO)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const GO=16384,qO=45e3;let cu=null;typeof MozWebSocket<"u"?cu=MozWebSocket:typeof WebSocket<"u"&&(cu=WebSocket);class rn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ba(this.connId),this.stats_=Pp(n),this.connURL=rn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[tS]=Rp,typeof location<"u"&&location.hostname&&sS.test(location.hostname)&&(o[rS]=iS),n&&(o[nS]=n),r&&(o[oS]=r),i&&(o[Lf]=i),s&&(o[aS]=s),dS(e,lS,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kr.set("previous_websocket_failure",!0);try{let r;Uw(),this.mySock=new cu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){rn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&cu!==null&&!rn.forceDisallow_}static previouslyFailed(){return Kr.isInMemoryStorage||Kr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ea(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ZE(n,GO);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rn.responsesRequiredToBeHealthy=2;rn.healthyTimeout=3e4;/**
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
 */class sa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Qi,rn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=rn&&rn.isAvailable();let r=n&&!rn.previouslyFailed();if(e.webSocketOnly&&(n||It("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[rn];else{const i=this.transports_=[];for(const s of sa.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);sa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}sa.globalTransportInitialized_=!1;/**
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
 */const YO=6e4,QO=5e3,JO=10*1024,XO=100*1024,gd="t",zy="d",ZO="s",By="r",eD="e",Wy="o",Hy="a",Vy="n",Ky="p",tD="h";class nD{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ba("c:"+this.id+":"),this.transportManager_=new sa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Po(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>XO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>JO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(gd in e){const n=e[gd];n===Hy?this.upgradeIfSecondaryHealthy_():n===By?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Wy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=eo("t",e),r=eo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ky,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Hy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=eo("t",e),r=eo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=eo(gd,e);if(zy in e){const r=e[zy];if(n===tD){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Vy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ZO?this.onConnectionShutdown_(r):n===By?this.onReset_(r):n===eD?Df("Server Error: "+r):n===Wy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Df("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Rp!==r&&It("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Po(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(YO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Po(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(QO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ky,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class yS{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class vS{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class du extends vS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ap()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new du}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Gy=32,qy=768;class ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function se(){return new ce("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pr(t){return t.pieces_.length-t.pieceNum_}function he(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ce(t.pieces_,e)}function xp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function rD(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function oa(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function _S(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ce(e,0)}function be(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ce)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ce(n,0)}function Y(t){return t.pieceNum_>=t.pieces_.length}function vt(t,e){const n=q(t),r=q(e);if(n===null)return e;if(n===r)return vt(he(t),he(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function iD(t,e){const n=oa(t,0),r=oa(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Si(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Ap(t,e){if(Pr(t)!==Pr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Vt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Pr(t)>Pr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class sD{constructor(e,n){this.errorPrefix_=n,this.parts_=oa(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ac(this.parts_[r]);wS(this)}}function oD(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ac(e),wS(t)}function aD(t){const e=t.parts_.pop();t.byteLength_-=ac(e),t.parts_.length>0&&(t.byteLength_-=1)}function wS(t){if(t.byteLength_>qy)throw new Error(t.errorPrefix_+"has a key path longer than "+qy+" bytes ("+t.byteLength_+").");if(t.parts_.length>Gy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Gy+") or object contains a cycle "+zr(t))}function zr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Np extends vS{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Np}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const to=1e3,lD=60*5*1e3,Yy=30*1e3,uD=1.3,cD=3e4,dD="server_kill",Qy=3;class $n extends yS{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=$n.nextPersistentConnectionId_++,this.log_=ba("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=to,this.maxReconnectDelay_=lD,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Uw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Np.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&du.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ke(s)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new oc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;$n.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Rn(e,"w")){const r=Cs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();It(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||EP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=wP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Df("Unrecognized action received from server: "+Ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=to,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=to,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cD&&(this.reconnectDelay_=to),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uD)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+$n.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ze("getToken() completed but was canceled"):(Ze("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new nD(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{It(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(dD)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&It(d),l())}}}interrupt(e){Ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Sf(this.interruptReasons_)&&(this.reconnectDelay_=to,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>kp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ce(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qy&&(this.reconnectDelay_=Yy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+QE.replace(/\./g,"-")]=1,ap()?e["framework.cordova"]=1:Fw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=du.getInstance().currentlyOnline();return Sf(this.interruptReasons_)&&e}}$n.nextPersistentConnectionId_=0;$n.nextConnectionId_=0;/**
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
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
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
 */class mc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new K(Is,e),i=new K(Is,n);return this.compare(r,i)!==0}minPost(){return K.MIN}}/**
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
 */let rl;class ES extends mc{static get __EMPTY_NODE(){return rl}static set __EMPTY_NODE(e){rl=e}compare(e,n){return Si(e.name,n.name)}isDefinedOn(e){throw Ns("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(ci,rl)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,rl)}toString(){return".key"}}const fs=new ES;/**
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
 */class il{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ve{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ve.RED,this.left=i??_t.EMPTY_NODE,this.right=s??_t.EMPTY_NODE}copy(e,n,r,i,s){return new Ve(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return _t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return _t.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ve.RED=!0;Ve.BLACK=!1;class fD{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _t{constructor(e,n=_t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ve.BLACK,null,null))}remove(e){return new _t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ve.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new il(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new il(this.root_,null,this.comparator_,!0,e)}}_t.EMPTY_NODE=new fD;/**
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
 */function hD(t,e){return Si(t.name,e.name)}function Op(t,e){return Si(t,e)}/**
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
 */let Mf;function pD(t){Mf=t}const SS=function(t){return typeof t=="number"?"number:"+eS(t):"string:"+t},CS=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Rn(e,".sv"),"Priority must be a string or number.")}else b(t===Mf||t.isEmpty(),"priority of unexpected type.");b(t===Mf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Jy;class We{constructor(e,n=We.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),CS(this.priorityNode_)}static set __childrenNodeConstructor(e){Jy=e}static get __childrenNodeConstructor(){return Jy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new We(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:q(e)===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:We.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(b(r!==".priority"||Pr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,We.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+SS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=eS(this.value_):e+=this.value_,this.lazyHash_=XE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===We.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof We.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=We.VALUE_TYPE_ORDER.indexOf(n),s=We.VALUE_TYPE_ORDER.indexOf(r);return b(i>=0,"Unknown leaf type: "+n),b(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}We.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let IS,TS;function mD(t){IS=t}function gD(t){TS=t}class yD extends mc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Si(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(ci,new We("[PRIORITY-POST]",TS))}makePost(e,n){const r=IS(e);return new K(n,new We("[PRIORITY-POST]",r))}toString(){return".priority"}}const xe=new yD;/**
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
 */const vD=Math.log(2);class _D{constructor(e){const n=s=>parseInt(Math.log(s)/vD,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fu=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new Ve(f,d.node,Ve.BLACK,null,null);{const m=parseInt(c/2,10)+l,v=i(l,m),g=i(m+1,u);return d=t[m],f=n?n(d):d,new Ve(f,d.node,Ve.BLACK,v,g)}},s=function(l){let u=null,c=null,d=t.length;const f=function(v,g){const E=d-v,p=d;d-=v;const h=i(E+1,p),y=t[E],I=n?n(y):y;m(new Ve(I,y.node,g,null,h))},m=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<l.count;++v){const g=l.nextBitIsOne(),E=Math.pow(2,l.count-(v+1));g?f(E,Ve.BLACK):(f(E,Ve.BLACK),f(E,Ve.RED))}return c},o=new _D(t.length),a=s(o);return new _t(r||e,a)};/**
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
 */let yd;const Li={};class Mn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(Li&&xe,"ChildrenNode.ts has not been loaded"),yd=yd||new Mn({".priority":Li},{".priority":xe}),yd}get(e){const n=Cs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _t?n:null}hasIndex(e){return Rn(this.indexSet_,e.toString())}addIndex(e,n){b(e!==fs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(K.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=fu(r,e.getCompare()):a=Li;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Mn(c,u)}addToIndexes(e,n){const r=tu(this.indexes_,(i,s)=>{const o=Cs(this.indexSet_,s);if(b(o,"Missing index implementation for "+s),i===Li)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(K.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),fu(a,o.getCompare())}else return Li;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new K(e.name,a))),l.insert(e,e.node)}});return new Mn(r,this.indexSet_)}removeFromIndexes(e,n){const r=tu(this.indexes_,i=>{if(i===Li)return i;{const s=n.get(e.name);return s?i.remove(new K(e.name,s)):i}});return new Mn(r,this.indexSet_)}}/**
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
 */let no;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&CS(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return no||(no=new j(new _t(Op),null,Mn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||no}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?no:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(he(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new K(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?no:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=q(e);if(r===null)return n;{b(q(e)!==".priority"||Pr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(he(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(xe,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+SS(this.getPriority().val())+":"),this.forEachChild(xe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":XE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new K(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xa?-1:0}withIndex(e){if(e===fs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(xe),i=n.getIterator(xe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fs?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class wD extends j{constructor(){super(new _t(Op),j.EMPTY_NODE,Mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const xa=new wD;Object.defineProperties(K,{MIN:{value:new K(Is,j.EMPTY_NODE)},MAX:{value:new K(ci,xa)}});ES.__EMPTY_NODE=j.EMPTY_NODE;We.__childrenNodeConstructor=j;pD(xa);gD(xa);/**
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
 */const ED=!0;function et(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new We(n,et(e))}if(!(t instanceof Array)&&ED){const n=[];let r=!1;if(rt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=et(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new K(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=fu(n,hD,o=>o.name,Op);if(r){const o=fu(n,xe.getCompare());return new j(s,et(e),new Mn({".priority":o},{".priority":xe}))}else return new j(s,et(e),Mn.Default)}else{let n=j.EMPTY_NODE;return rt(t,(r,i)=>{if(Rn(t,r)&&r.substring(0,1)!=="."){const s=et(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(et(e))}}mD(et);/**
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
 */class SD extends mc{constructor(e){super(),this.indexPath_=e,b(!Y(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Si(e.name,n.name):s}makePost(e,n){const r=et(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new K(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,xa);return new K(ci,e)}toString(){return oa(this.indexPath_,0).join("/")}}/**
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
 */class CD extends mc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Si(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const r=et(e);return new K(n,r)}toString(){return".value"}}const ID=new CD;/**
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
 */function kS(t){return{type:"value",snapshotNode:t}}function Ts(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function aa(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function la(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function TD(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Dp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(aa(n,a)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ts(n,r)):o.trackChildChange(la(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(xe,(i,s)=>{n.hasChild(i)||r.trackChildChange(aa(i,s))}),n.isLeafNode()||n.forEachChild(xe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(la(i,s,o))}else r.trackChildChange(Ts(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ua{constructor(e){this.indexedFilter_=new Dp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ua.getStartPost_(e),this.endPost_=ua.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new K(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(xe,(o,a)=>{s.matches(new K(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class kD{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ua(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new K(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const a=e;b(a.numChildren()===this.limit_,"");const l=new K(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(la(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(aa(n,d));const g=a.updateImmediateChild(n,j.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ts(f.name,f.node)),g.updateImmediateChild(f.name,f.node)):g}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(aa(u.name,u.node)),s.trackChildChange(Ts(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
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
 */class Lp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Is}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ci}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xe}copy(){const e=new Lp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function RD(t){return t.loadsAllData()?new Dp(t.getIndex()):t.hasLimit()?new kD(t):new ua(t)}function Xy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===xe?n="$priority":t.index_===ID?n="$value":t.index_===fs?n="$key":(b(t.index_ instanceof SD,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Zy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==xe&&(e.i=t.index_.toString()),e}/**
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
 */class hu extends yS{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ba("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=hu.getListenId_(e,r),a={};this.listens_[o]=a;const l=Xy(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Cs(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=hu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Xy(e._queryParams),r=e._path.toString(),i=new oc;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Os(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ea(a.responseText)}catch{It("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&It("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class PD{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function pu(){return{value:null,children:new Map}}function RS(t,e,n){if(Y(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=q(e);t.children.has(r)||t.children.set(r,pu());const i=t.children.get(r);e=he(e),RS(i,e,n)}}function Ff(t,e,n){t.value!==null?n(e,t.value):bD(t,(r,i)=>{const s=new ce(e.toString()+"/"+r);Ff(i,s,n)})}function bD(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class xD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&rt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const ev=10*1e3,AD=30*1e3,ND=5*60*1e3;class OD{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new xD(e);const r=ev+(AD-ev)*Math.random();Po(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;rt(e,(i,s)=>{s>0&&Rn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Po(this.reportStats_.bind(this),Math.floor(Math.random()*2*ND))}}/**
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
 */var sn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(sn||(sn={}));function Mp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Up(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class mu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=sn.ACK_USER_WRITE,this.source=Mp()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ce(e));return new mu(se(),n,this.revert)}}else return b(q(this.path)===e,"operationForChild called for unrelated child."),new mu(he(this.path),this.affectedTree,this.revert)}}/**
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
 */class ca{constructor(e,n){this.source=e,this.path=n,this.type=sn.LISTEN_COMPLETE}operationForChild(e){return Y(this.path)?new ca(this.source,se()):new ca(this.source,he(this.path))}}/**
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
 */class di{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=sn.OVERWRITE}operationForChild(e){return Y(this.path)?new di(this.source,se(),this.snap.getImmediateChild(e)):new di(this.source,he(this.path),this.snap)}}/**
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
 */class ks{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=sn.MERGE}operationForChild(e){if(Y(this.path)){const n=this.children.subtree(new ce(e));return n.isEmpty()?null:n.value?new di(this.source,se(),n.value):new ks(this.source,se(),n)}else return b(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ks(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class fi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class DD{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function LD(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(TD(o.childName,o.snapshotNode))}),ro(t,i,"child_removed",e,r,n),ro(t,i,"child_added",e,r,n),ro(t,i,"child_moved",s,r,n),ro(t,i,"child_changed",e,r,n),ro(t,i,"value",e,r,n),i}function ro(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>FD(t,a,l)),o.forEach(a=>{const l=MD(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function MD(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function FD(t,e,n){if(e.childName==null||n.childName==null)throw Ns("Should only compare child_ events.");const r=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function gc(t,e){return{eventCache:t,serverCache:e}}function bo(t,e,n,r){return gc(new fi(e,n,r),t.serverCache)}function PS(t,e,n,r){return gc(t.eventCache,new fi(e,n,r))}function Uf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let vd;const UD=()=>(vd||(vd=new _t(SO)),vd);class fe{constructor(e,n=UD()){this.value=e,this.children=n}static fromObject(e){let n=new fe(null);return rt(e,(r,i)=>{n=n.set(new ce(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:se(),value:this.value};if(Y(e))return null;{const r=q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(he(e),n);return s!=null?{path:be(new ce(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const n=q(e),r=this.children.get(n);return r!==null?r.subtree(he(e)):new fe(null)}}set(e,n){if(Y(e))return new fe(n,this.children);{const r=q(e),s=(this.children.get(r)||new fe(null)).set(he(e),n),o=this.children.insert(r,s);return new fe(this.value,o)}}remove(e){if(Y(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const n=q(e),r=this.children.get(n);if(r){const i=r.remove(he(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new fe(null):new fe(this.value,s)}else return this}}get(e){if(Y(e))return this.value;{const n=q(e),r=this.children.get(n);return r?r.get(he(e)):null}}setTree(e,n){if(Y(e))return n;{const r=q(e),s=(this.children.get(r)||new fe(null)).setTree(he(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new fe(this.value,o)}}fold(e){return this.fold_(se(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(be(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,se(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Y(e))return null;{const s=q(e),o=this.children.get(s);return o?o.findOnPath_(he(e),be(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,se(),n)}foreachOnPath_(e,n,r){if(Y(e))return this;{this.value&&r(n,this.value);const i=q(e),s=this.children.get(i);return s?s.foreachOnPath_(he(e),be(n,i),r):new fe(null)}}foreach(e){this.foreach_(se(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(be(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class ln{constructor(e){this.writeTree_=e}static empty(){return new ln(new fe(null))}}function xo(t,e,n){if(Y(e))return new ln(new fe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=vt(i,e);return s=s.updateChild(o,n),new ln(t.writeTree_.set(i,s))}else{const i=new fe(n),s=t.writeTree_.setTree(e,i);return new ln(s)}}}function $f(t,e,n){let r=t;return rt(n,(i,s)=>{r=xo(r,be(e,i),s)}),r}function tv(t,e){if(Y(e))return ln.empty();{const n=t.writeTree_.setTree(e,new fe(null));return new ln(n)}}function jf(t,e){return Ci(t,e)!=null}function Ci(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(vt(n.path,e)):null}function nv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(xe,(r,i)=>{e.push(new K(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new K(r,i.value))}),e}function Tr(t,e){if(Y(e))return t;{const n=Ci(t,e);return n!=null?new ln(new fe(n)):new ln(t.writeTree_.subtree(e))}}function zf(t){return t.writeTree_.isEmpty()}function Rs(t,e){return bS(se(),t.writeTree_,e)}function bS(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(b(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=bS(be(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(be(t,".priority"),r)),n}}/**
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
 */function $p(t,e){return OS(e,t)}function $D(t,e,n,r,i){b(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=xo(t.visibleWrites,e,n)),t.lastWriteId=r}function jD(t,e,n,r){b(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=$f(t.visibleWrites,e,n),t.lastWriteId=r}function zD(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function BD(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&WD(a,r.path)?i=!1:Vt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return HD(t),!0;if(r.snap)t.visibleWrites=tv(t.visibleWrites,r.path);else{const a=r.children;rt(a,l=>{t.visibleWrites=tv(t.visibleWrites,be(r.path,l))})}return!0}else return!1}function WD(t,e){if(t.snap)return Vt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Vt(be(t.path,n),e))return!0;return!1}function HD(t){t.visibleWrites=xS(t.allWrites,VD,se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function VD(t){return t.visible}function xS(t,e,n){let r=ln.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Vt(n,o)?(a=vt(n,o),r=xo(r,a,s.snap)):Vt(o,n)&&(a=vt(o,n),r=xo(r,se(),s.snap.getChild(a)));else if(s.children){if(Vt(n,o))a=vt(n,o),r=$f(r,a,s.children);else if(Vt(o,n))if(a=vt(o,n),Y(a))r=$f(r,se(),s.children);else{const l=Cs(s.children,q(a));if(l){const u=l.getChild(he(a));r=xo(r,se(),u)}}}else throw Ns("WriteRecord should have .snap or .children")}}return r}function AS(t,e,n,r,i){if(!r&&!i){const s=Ci(t.visibleWrites,e);if(s!=null)return s;{const o=Tr(t.visibleWrites,e);if(zf(o))return n;if(n==null&&!jf(o,se()))return null;{const a=n||j.EMPTY_NODE;return Rs(o,a)}}}else{const s=Tr(t.visibleWrites,e);if(!i&&zf(s))return n;if(!i&&n==null&&!jf(s,se()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Vt(u.path,e)||Vt(e,u.path))},a=xS(t.allWrites,o,e),l=n||j.EMPTY_NODE;return Rs(a,l)}}}function KD(t,e,n){let r=j.EMPTY_NODE;const i=Ci(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(xe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Tr(t.visibleWrites,e);return n.forEachChild(xe,(o,a)=>{const l=Rs(Tr(s,new ce(o)),a);r=r.updateImmediateChild(o,l)}),nv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Tr(t.visibleWrites,e);return nv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function GD(t,e,n,r,i){b(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=be(e,n);if(jf(t.visibleWrites,s))return null;{const o=Tr(t.visibleWrites,s);return zf(o)?i.getChild(n):Rs(o,i.getChild(n))}}function qD(t,e,n,r){const i=be(e,n),s=Ci(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Tr(t.visibleWrites,i);return Rs(o,r.getNode().getImmediateChild(n))}else return null}function YD(t,e){return Ci(t.visibleWrites,e)}function QD(t,e,n,r,i,s,o){let a;const l=Tr(t.visibleWrites,e),u=Ci(l,se());if(u!=null)a=u;else if(n!=null)a=Rs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=f.getNext();return c}else return[]}function JD(){return{visibleWrites:ln.empty(),allWrites:[],lastWriteId:-1}}function gu(t,e,n,r){return AS(t.writeTree,t.treePath,e,n,r)}function jp(t,e){return KD(t.writeTree,t.treePath,e)}function rv(t,e,n,r){return GD(t.writeTree,t.treePath,e,n,r)}function yu(t,e){return YD(t.writeTree,be(t.treePath,e))}function XD(t,e,n,r,i,s){return QD(t.writeTree,t.treePath,e,n,r,i,s)}function zp(t,e,n){return qD(t.writeTree,t.treePath,e,n)}function NS(t,e){return OS(be(t.treePath,e),t.writeTree)}function OS(t,e){return{treePath:t,writeTree:e}}/**
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
 */class ZD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,la(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,aa(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ts(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,la(r,e.snapshotNode,i.oldSnap));else throw Ns("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class eL{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const DS=new eL;class Bp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new fi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hi(this.viewCache_),s=XD(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function tL(t){return{filter:t}}function nL(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function rL(t,e,n,r,i){const s=new ZD;let o,a;if(n.type===sn.OVERWRITE){const u=n;u.source.fromUser?o=Bf(t,e,u.path,u.snap,r,i,s):(b(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Y(u.path),o=vu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===sn.MERGE){const u=n;u.source.fromUser?o=sL(t,e,u.path,u.children,r,i,s):(b(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Wf(t,e,u.path,u.children,r,i,a,s))}else if(n.type===sn.ACK_USER_WRITE){const u=n;u.revert?o=lL(t,e,u.path,r,i,s):o=oL(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===sn.LISTEN_COMPLETE)o=aL(t,e,n.path,r,s);else throw Ns("Unknown operation type: "+n.type);const l=s.getChanges();return iL(e,o,l),{viewCache:o,changes:l}}function iL(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Uf(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(kS(Uf(e)))}}function LS(t,e,n,r,i,s){const o=e.eventCache;if(yu(r,n)!=null)return e;{let a,l;if(Y(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=hi(e),c=u instanceof j?u:j.EMPTY_NODE,d=jp(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=gu(r,hi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=q(n);if(u===".priority"){b(Pr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=rv(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=he(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=rv(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=zp(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return bo(e,a,o.isFullyInitialized()||Y(n),t.filter.filtersNodes())}}function vu(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(Y(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=q(n);if(!l.isCompleteForPath(n)&&Pr(n)>1)return e;const v=he(n),E=l.getNode().getImmediateChild(m).updateChild(v,r);m===".priority"?u=c.updatePriority(l.getNode(),E):u=c.updateChild(l.getNode(),m,E,v,DS,null)}const d=PS(e,u,l.isFullyInitialized()||Y(n),c.filtersNodes()),f=new Bp(i,d,s);return LS(t,d,n,i,f,a)}function Bf(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Bp(i,e,s);if(Y(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=bo(e,u,!0,t.filter.filtersNodes());else{const d=q(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=bo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=he(n),m=a.getNode().getImmediateChild(d);let v;if(Y(f))v=r;else{const g=c.getCompleteChild(d);g!=null?xp(f)===".priority"&&g.getChild(_S(f)).isEmpty()?v=g:v=g.updateChild(f,r):v=j.EMPTY_NODE}if(m.equals(v))l=e;else{const g=t.filter.updateChild(a.getNode(),d,v,f,c,o);l=bo(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function iv(t,e){return t.eventCache.isCompleteForChild(e)}function sL(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=be(n,l);iv(e,q(c))&&(a=Bf(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=be(n,l);iv(e,q(c))||(a=Bf(t,a,c,u,i,s,o))}),a}function sv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Wf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;Y(n)?u=r:u=new fe(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),v=sv(t,m,f);l=vu(t,l,new ce(d),v,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const m=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!m){const v=e.serverCache.getNode().getImmediateChild(d),g=sv(t,v,f);l=vu(t,l,new ce(d),g,i,s,o,a)}}),l}function oL(t,e,n,r,i,s,o){if(yu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Y(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return vu(t,e,n,l.getNode().getChild(n),i,s,a,o);if(Y(n)){let u=new fe(null);return l.getNode().forEachChild(fs,(c,d)=>{u=u.set(new ce(c),d)}),Wf(t,e,n,u,i,s,a,o)}else return e}else{let u=new fe(null);return r.foreach((c,d)=>{const f=be(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),Wf(t,e,n,u,i,s,a,o)}}function aL(t,e,n,r,i){const s=e.serverCache,o=PS(e,s.getNode(),s.isFullyInitialized()||Y(n),s.isFiltered());return LS(t,o,n,r,DS,i)}function lL(t,e,n,r,i,s){let o;if(yu(r,n)!=null)return e;{const a=new Bp(r,e,i),l=e.eventCache.getNode();let u;if(Y(n)||q(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=gu(r,hi(e));else{const d=e.serverCache.getNode();b(d instanceof j,"serverChildren would be complete if leaf node"),c=jp(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=q(n);let d=zp(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,he(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,j.EMPTY_NODE,he(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gu(r,hi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||yu(r,se())!=null,bo(e,u,o,t.filter.filtersNodes())}}/**
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
 */class uL{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Dp(r.getIndex()),s=RD(r);this.processor_=tL(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(j.EMPTY_NODE,a.getNode(),null),c=new fi(l,o.isFullyInitialized(),i.filtersNodes()),d=new fi(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=gc(d,c),this.eventGenerator_=new DD(this.query_)}get query(){return this.query_}}function cL(t){return t.viewCache_.serverCache.getNode()}function dL(t,e){const n=hi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Y(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function ov(t){return t.eventRegistrations_.length===0}function fL(t,e){t.eventRegistrations_.push(e)}function av(t,e,n){const r=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function lv(t,e,n,r){e.type===sn.MERGE&&e.source.queryId!==null&&(b(hi(t.viewCache_),"We should always have a full cache before handling merges"),b(Uf(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=rL(t.processor_,i,e,n,r);return nL(t.processor_,s.viewCache),b(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,MS(t,s.changes,s.viewCache.eventCache.getNode(),null)}function hL(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(xe,(s,o)=>{r.push(Ts(s,o))}),n.isFullyInitialized()&&r.push(kS(n.getNode())),MS(t,r,n.getNode(),e)}function MS(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return LD(t.eventGenerator_,e,n,i)}/**
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
 */let _u;class pL{constructor(){this.views=new Map}}function mL(t){b(!_u,"__referenceConstructor has already been defined"),_u=t}function gL(){return b(_u,"Reference.ts has not been loaded"),_u}function yL(t){return t.views.size===0}function Wp(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return b(s!=null,"SyncTree gave us an op for an invalid query."),lv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(lv(o,e,n,r));return s}}function vL(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=gu(n,i?r:null),l=!1;a?l=!0:r instanceof j?(a=jp(n,r),l=!1):(a=j.EMPTY_NODE,l=!1);const u=gc(new fi(a,l,!1),new fi(r,i,!1));return new uL(e,u)}return o}function _L(t,e,n,r,i,s){const o=vL(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),fL(o,n),hL(o,n)}function wL(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=br(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(av(u,n,r)),ov(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(av(l,n,r)),ov(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!br(t)&&s.push(new(gL())(e._repo,e._path)),{removed:s,events:o}}function FS(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function hs(t,e){let n=null;for(const r of t.views.values())n=n||dL(r,e);return n}function US(t,e){if(e._queryParams.loadsAllData())return yc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function $S(t,e){return US(t,e)!=null}function br(t){return yc(t)!=null}function yc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let wu;function EL(t){b(!wu,"__referenceConstructor has already been defined"),wu=t}function SL(){return b(wu,"Reference.ts has not been loaded"),wu}let CL=1;class uv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=JD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function IL(t,e,n,r,i){return $D(t.pendingWriteTree_,e,n,r,i),i?Fs(t,new di(Mp(),e,n)):[]}function TL(t,e,n,r){jD(t.pendingWriteTree_,e,n,r);const i=fe.fromObject(n);return Fs(t,new ks(Mp(),e,i))}function Gr(t,e,n=!1){const r=zD(t.pendingWriteTree_,e);if(BD(t.pendingWriteTree_,e)){let s=new fe(null);return r.snap!=null?s=s.set(se(),!0):rt(r.children,o=>{s=s.set(new ce(o),!0)}),Fs(t,new mu(r.path,s,n))}else return[]}function vc(t,e,n){return Fs(t,new di(Fp(),e,n))}function kL(t,e,n){const r=fe.fromObject(n);return Fs(t,new ks(Fp(),e,r))}function RL(t,e){return Fs(t,new ca(Fp(),e))}function PL(t,e,n){const r=Hp(t,n);if(r){const i=Vp(r),s=i.path,o=i.queryId,a=vt(s,e),l=new ca(Up(o),a);return Kp(t,s,l)}else return[]}function Hf(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||$S(o,e))){const l=wL(o,e,n,r);yL(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,m)=>br(m));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=AL(f);for(let v=0;v<m.length;++v){const g=m[v],E=g.query,p=WS(t,g);t.listenProvider_.startListening(Ao(E),Eu(t,E),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Ao(e),null):u.forEach(f=>{const m=t.queryToTagMap.get(_c(f));t.listenProvider_.stopListening(Ao(f),m)}))}NL(t,u)}return a}function bL(t,e,n,r){const i=Hp(t,r);if(i!=null){const s=Vp(i),o=s.path,a=s.queryId,l=vt(o,e),u=new di(Up(a),l,n);return Kp(t,o,u)}else return[]}function xL(t,e,n,r){const i=Hp(t,r);if(i){const s=Vp(i),o=s.path,a=s.queryId,l=vt(o,e),u=fe.fromObject(n),c=new ks(Up(a),l,u);return Kp(t,o,c)}else return[]}function cv(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const v=vt(f,i);s=s||hs(m,v),o=o||br(m)});let a=t.syncPointTree_.get(i);a?(o=o||br(a),s=s||hs(a,se())):(a=new pL,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,v)=>{const g=hs(v,se());g&&(s=s.updateImmediateChild(m,g))}));const u=$S(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=_c(e);b(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=OL();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const c=$p(t.pendingWriteTree_,i);let d=_L(a,e,n,c,s,l);if(!u&&!o&&!r){const f=US(a,e);d=d.concat(DL(t,e,f))}return d}function jS(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=vt(o,e),u=hs(a,l);if(u)return u});return AS(i,e,s,n,!0)}function Fs(t,e){return zS(e,t.syncPointTree_,null,$p(t.pendingWriteTree_,se()))}function zS(t,e,n,r){if(Y(t.path))return BS(t,e,n,r);{const i=e.get(se());n==null&&i!=null&&(n=hs(i,se()));let s=[];const o=q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=NS(r,o);s=s.concat(zS(a,l,u,c))}return i&&(s=s.concat(Wp(i,t,r,n))),s}}function BS(t,e,n,r){const i=e.get(se());n==null&&i!=null&&(n=hs(i,se()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=NS(r,o),c=t.operationForChild(o);c&&(s=s.concat(BS(c,a,l,u)))}),i&&(s=s.concat(Wp(i,t,r,n))),s}function WS(t,e){const n=e.query,r=Eu(t,n);return{hashFn:()=>(cL(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?PL(t,n._path,r):RL(t,n._path);{const s=TO(i,n);return Hf(t,n,null,s)}}}}function Eu(t,e){const n=_c(e);return t.queryToTagMap.get(n)}function _c(t){return t._path.toString()+"$"+t._queryIdentifier}function Hp(t,e){return t.tagToQueryMap.get(e)}function Vp(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ce(t.substr(0,e))}}function Kp(t,e,n){const r=t.syncPointTree_.get(e);b(r,"Missing sync point for query tag that we're tracking");const i=$p(t.pendingWriteTree_,e);return Wp(r,n,i,null)}function AL(t){return t.fold((e,n,r)=>{if(n&&br(n))return[yc(n)];{let i=[];return n&&(i=FS(n)),rt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ao(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(SL())(t._repo,t._path):t}function NL(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=_c(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function OL(){return CL++}function DL(t,e,n){const r=e._path,i=Eu(t,e),s=WS(t,n),o=t.listenProvider_.startListening(Ao(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)b(!br(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!Y(u)&&c&&br(c))return[yc(c).query];{let f=[];return c&&(f=f.concat(FS(c).map(m=>m.query))),rt(d,(m,v)=>{f=f.concat(v)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Ao(c),Eu(t,c))}}return o}/**
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
 */class Gp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Gp(n)}node(){return this.node_}}class qp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=be(this.path_,e);return new qp(this.syncTree_,n)}node(){return jS(this.syncTree_,this.path_)}}const LL=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},dv=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ML(t[".sv"],e,n);if(typeof t[".sv"]=="object")return FL(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ML=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},FL=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&b(!1,"Unexpected increment value: "+r);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},HS=function(t,e,n,r){return Yp(e,new qp(n,t),r)},UL=function(t,e,n){return Yp(t,new Gp(e),n)};function Yp(t,e,n){const r=t.getPriority().val(),i=dv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=dv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new We(a,et(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new We(i))),o.forEachChild(xe,(a,l)=>{const u=Yp(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Qp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Jp(t,e){let n=e instanceof ce?e:new ce(e),r=t,i=q(n);for(;i!==null;){const s=Cs(r.node.children,i)||{children:{},childCount:0};r=new Qp(i,r,s),n=he(n),i=q(n)}return r}function Us(t){return t.node.value}function VS(t,e){t.node.value=e,Vf(t)}function KS(t){return t.node.childCount>0}function $L(t){return Us(t)===void 0&&!KS(t)}function wc(t,e){rt(t.node.children,(n,r)=>{e(new Qp(n,t,r))})}function GS(t,e,n,r){n&&!r&&e(t),wc(t,i=>{GS(i,e,!0,r)}),n&&r&&e(t)}function jL(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Aa(t){return new ce(t.parent===null?t.name:Aa(t.parent)+"/"+t.name)}function Vf(t){t.parent!==null&&zL(t.parent,t.name,t)}function zL(t,e,n){const r=$L(n),i=Rn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Vf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Vf(t))}/**
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
 */const BL=/[\[\].#$\/\u0000-\u001F\u007F]/,WL=/[\[\].#$\u0000-\u001F\u007F]/,_d=10*1024*1024,Xp=function(t){return typeof t=="string"&&t.length!==0&&!BL.test(t)},qS=function(t){return typeof t=="string"&&t.length!==0&&!WL.test(t)},HL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),qS(t)},VL=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Tp(t)||t&&typeof t=="object"&&Rn(t,".sv")},Zp=function(t,e,n){const r=n instanceof ce?new sD(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+zr(r));if(typeof e=="function")throw new Error(t+"contains a function "+zr(r)+" with contents = "+e.toString());if(Tp(e))throw new Error(t+"contains "+e.toString()+" "+zr(r));if(typeof e=="string"&&e.length>_d/3&&ac(e)>_d)throw new Error(t+"contains a string greater than "+_d+" utf8 bytes "+zr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(rt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Xp(o)))throw new Error(t+" contains an invalid key ("+o+") "+zr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);oD(r,o),Zp(t,a,r),aD(r)}),i&&s)throw new Error(t+' contains ".value" child '+zr(r)+" in addition to actual children.")}},KL=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=oa(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Xp(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(iD);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Vt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},GL=function(t,e,n,r){if(r&&e===void 0)return;const i=lp(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];rt(e,(o,a)=>{const l=new ce(o);if(Zp(i,a,be(n,l)),xp(l)===".priority"&&!VL(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),KL(i,s)},YS=function(t,e,n,r){if(!(r&&n===void 0)&&!qS(n))throw new Error(lp(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},qL=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),YS(t,e,n,r)},YL=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Xp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!HL(n))throw new Error(lp(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class QL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function em(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Ap(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function QS(t,e,n){em(t,n),JS(t,r=>Ap(r,e))}function qn(t,e,n){em(t,n),JS(t,r=>Vt(r,e)||Vt(e,r))}function JS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(JL(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function JL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Xr&&Ze("event: "+n.toString()),Ms(r)}}}/**
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
 */const XL="repo_interrupt",ZL=25;class eM{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new QL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=pu(),this.transactionQueueTree_=new Qp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function tM(t,e,n){if(t.stats_=Pp(t.repoInfo_),t.forceRestClient_||bO())t.server_=new hu(t.repoInfo_,(r,i,s,o)=>{fv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>hv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new $n(t.repoInfo_,e,(r,i,s,o)=>{fv(t,r,i,s,o)},r=>{hv(t,r)},r=>{rM(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=DO(t.repoInfo_,()=>new OD(t.stats_,t.server_)),t.infoData_=new PD,t.infoSyncTree_=new uv({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=vc(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),nm(t,"connected",!1),t.serverSyncTree_=new uv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);qn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function nM(t){const n=t.infoData_.getNode(new ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function tm(t){return LL({timestamp:nM(t)})}function fv(t,e,n,r,i){t.dataUpdateCount++;const s=new ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=tu(n,u=>et(u));o=xL(t.serverSyncTree_,s,l,i)}else{const l=et(n);o=bL(t.serverSyncTree_,s,l,i)}else if(r){const l=tu(n,u=>et(u));o=kL(t.serverSyncTree_,s,l)}else{const l=et(n);o=vc(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=da(t,s)),qn(t.eventQueue_,a,o)}function hv(t,e){nm(t,"connected",e),e===!1&&sM(t)}function rM(t,e){rt(e,(n,r)=>{nm(t,n,r)})}function nm(t,e,n){const r=new ce("/.info/"+e),i=et(n);t.infoData_.updateSnapshot(r,i);const s=vc(t.infoSyncTree_,r,i);qn(t.eventQueue_,r,s)}function XS(t){return t.nextWriteId_++}function iM(t,e,n,r){rm(t,"update",{path:e.toString(),value:n});let i=!0;const s=tm(t),o={};if(rt(n,(a,l)=>{i=!1,o[a]=HS(be(e,a),et(l),t.serverSyncTree_,s)}),i)Ze("update() called with empty data.  Don't do anything."),mv(t,r,"ok",void 0);else{const a=XS(t),l=TL(t.serverSyncTree_,e,o,a);em(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||It("update at "+e+" failed: "+u);const f=Gr(t.serverSyncTree_,a,!d),m=f.length>0?da(t,e):e;qn(t.eventQueue_,m,f),mv(t,r,u,c)}),rt(n,u=>{const c=r1(t,be(e,u));da(t,c)}),qn(t.eventQueue_,e,[])}}function sM(t){rm(t,"onDisconnectEvents");const e=tm(t),n=pu();Ff(t.onDisconnect_,se(),(i,s)=>{const o=HS(i,s,t.serverSyncTree_,e);RS(n,i,o)});let r=[];Ff(n,se(),(i,s)=>{r=r.concat(vc(t.serverSyncTree_,i,s));const o=r1(t,i);da(t,o)}),t.onDisconnect_=pu(),qn(t.eventQueue_,se(),r)}function oM(t,e,n){let r;q(e._path)===".info"?r=cv(t.infoSyncTree_,e,n):r=cv(t.serverSyncTree_,e,n),QS(t.eventQueue_,e._path,r)}function pv(t,e,n){let r;q(e._path)===".info"?r=Hf(t.infoSyncTree_,e,n):r=Hf(t.serverSyncTree_,e,n),QS(t.eventQueue_,e._path,r)}function aM(t){t.persistentConnection_&&t.persistentConnection_.interrupt(XL)}function rm(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ze(n,...e)}function mv(t,e,n,r){e&&Ms(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function ZS(t,e,n){return jS(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function im(t,e=t.transactionQueueTree_){if(e||Ec(t,e),Us(e)){const n=t1(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&lM(t,Aa(e),n)}else KS(e)&&wc(e,n=>{im(t,n)})}function lM(t,e,n){const r=n.map(u=>u.currentWriteId),i=ZS(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];b(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=vt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{rm(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(Gr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ec(t,Jp(t.transactionQueueTree_,e)),im(t,t.transactionQueueTree_),qn(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)Ms(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{It("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}da(t,e)}},o)}function da(t,e){const n=e1(t,e),r=Aa(n),i=t1(t,n);return uM(t,i,r),r}function uM(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=vt(n,l.path);let c=!1,d;if(b(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(Gr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ZL)c=!0,d="maxretry",i=i.concat(Gr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=ZS(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){Zp("transaction failed: Data returned ",m,l.path);let v=et(m);typeof m=="object"&&m!=null&&Rn(m,".priority")||(v=v.updatePriority(f.getPriority()));const E=l.currentWriteId,p=tm(t),h=UL(v,f,p);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=h,l.currentWriteId=XS(t),o.splice(o.indexOf(E),1),i=i.concat(IL(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Gr(t.serverSyncTree_,E,!0))}else c=!0,d="nodata",i=i.concat(Gr(t.serverSyncTree_,l.currentWriteId,!0))}qn(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Ec(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ms(r[a]);im(t,t.transactionQueueTree_)}function e1(t,e){let n,r=t.transactionQueueTree_;for(n=q(e);n!==null&&Us(r)===void 0;)r=Jp(r,n),e=he(e),n=q(e);return r}function t1(t,e){const n=[];return n1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function n1(t,e,n){const r=Us(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);wc(e,i=>{n1(t,i,n)})}function Ec(t,e){const n=Us(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,VS(e,n.length>0?n:void 0)}wc(e,r=>{Ec(t,r)})}function r1(t,e){const n=Aa(e1(t,e)),r=Jp(t.transactionQueueTree_,e);return jL(r,i=>{wd(t,i)}),wd(t,r),GS(r,i=>{wd(t,i)}),n}function wd(t,e){const n=Us(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Gr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?VS(e,void 0):n.length=s+1,qn(t.eventQueue_,Aa(e),i);for(let o=0;o<r.length;o++)Ms(r[o])}}/**
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
 */function cM(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function dM(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):It(`Invalid query segment '${n}' in query '${t}'`)}return e}const gv=function(t,e){const n=fM(t),r=n.namespace;n.domain==="firebase.com"&&Gn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Gn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||wO();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new cS(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ce(n.pathString)}},fM=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=cM(t.substring(c,d)));const f=dM(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class i1{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ke(this.snapshot.exportVal())}}class s1{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class hM{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class sm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Y(this._path)?null:xp(this._path)}get ref(){return new Qn(this._repo,this._path)}get _queryIdentifier(){const e=Zy(this._queryParams),n=kp(e);return n==="{}"?"default":n}get _queryObject(){return Zy(this._queryParams)}isEqual(e){if(e=kt(e),!(e instanceof sm))return!1;const n=this._repo===e._repo,r=Ap(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+rD(this._path)}}class Qn extends sm{constructor(e,n){super(e,n,new Lp,!1)}get parent(){const e=_S(this._path);return e===null?null:new Qn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class fa{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ce(e),r=Su(this.ref,e);return new fa(this._node.getChild(n),r,xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new fa(i,Su(this.ref,r),xe)))}hasChild(e){const n=new ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function pM(t,e){return t=kt(t),t._checkNotDeleted("ref"),e!==void 0?Su(t._root,e):t._root}function Su(t,e){return t=kt(t),q(t._path)===null?qL("child","path",e,!1):YS("child","path",e,!1),new Qn(t._repo,be(t._path,e))}function Ed(t,e){GL("update",e,t._path,!1);const n=new oc;return iM(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class om{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new i1("value",this,new fa(e.snapshotNode,new Qn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new s1(this,e,n):null}matches(e){return e instanceof om?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class am{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new s1(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const r=Su(new Qn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new i1(e.type,this,new fa(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof am?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function mM(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{pv(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new hM(n,s||void 0),a=e==="value"?new om(o):new am(e,o);return oM(t._repo,t,a),()=>pv(t._repo,t,a)}function gM(t,e,n,r){return mM(t,"value",e,n,r)}mL(Qn);EL(Qn);/**
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
 */const yM="FIREBASE_DATABASE_EMULATOR_HOST",Kf={};let vM=!1;function _M(t,e,n,r){t.repoInfo_=new cS(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function wM(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Gn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ze("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=gv(s,i),a=o.repoInfo,l,u;typeof process<"u"&&Ly&&(u=Ly[yM]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=gv(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new ds(ds.OWNER):new AO(t.name,t.options,e);YL("Invalid Firebase Database URL",o),Y(o.path)||Gn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=SM(a,t,c,new xO(t.name,n));return new CM(d,t)}function EM(t,e){const n=Kf[e];(!n||n[t.key]!==t)&&Gn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),aM(t),delete n[t.key]}function SM(t,e,n,r){let i=Kf[e.name];i||(i={},Kf[e.name]=i);let s=i[t.toURLString()];return s&&Gn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new eM(t,vM,n,r),i[t.toURLString()]=s,s}class CM{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(tM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qn(this._repo,se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(EM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gn("Cannot call "+e+" on a deleted database.")}}function IM(t=cp(),e){const n=wi(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=hP("database");r&&TM(n,...r)}return n}function TM(t,e,n,r={}){t=kt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Gn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Gn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ds(ds.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:pP(r.mockUserToken,t.app.options.projectId);s=new ds(o)}_M(i,e,n,s)}/**
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
 */function kM(t){mO(Ds),Tn(new cn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return wM(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Gt(My,Fy,t),Gt(My,Fy,"esm2017")}$n.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$n.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};kM();const RM={apiKey:"AIzaSyCfbhjQsqQuTO-0yQrMqvRVtKzjqzQz9us",authDomain:"chatapp-ee84e.firebaseapp.com",databaseURL:"https://chatapp-ee84e-default-rtdb.europe-west1.firebasedatabase.app",projectId:"chatapp-ee84e",storageBucket:"chatapp-ee84e.appspot.com",messagingSenderId:"243279940596",appId:"1:243279940596:web:87a0c370022eb3d5f687a1",measurementId:"G-WNZSCNJV8C"},lm=Vw(RM);dO(lm);const Tl=KA(lm);Tl.useDeviceLanguage();const PM=IM(lm);/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pe(){return Pe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pe.apply(this,arguments)}var Ae;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ae||(Ae={}));const yv="popstate";function bM(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Pn(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),ha("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:mi(s))}function r(i,s){pi(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return AM(e,n,r,t)}function G(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function pi(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xM(){return Math.random().toString(36).substr(2,8)}function vv(t,e){return{usr:t.state,key:t.key,idx:e}}function ha(t,e,n,r){return n===void 0&&(n=null),Pe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Pn(e):e,{state:n,key:e&&e.key||r||xM()})}function mi(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Pn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function AM(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ae.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Pe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Ae.Pop;let E=c(),p=E==null?null:E-u;u=E,l&&l({action:a,location:g.location,delta:p})}function f(E,p){a=Ae.Push;let h=ha(g.location,E,p);n&&n(h,E),u=c()+1;let y=vv(h,u),I=g.createHref(h);try{o.pushState(y,"",I)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(I)}s&&l&&l({action:a,location:g.location,delta:1})}function m(E,p){a=Ae.Replace;let h=ha(g.location,E,p);n&&n(h,E),u=c();let y=vv(h,u),I=g.createHref(h);o.replaceState(y,"",I),s&&l&&l({action:a,location:g.location,delta:0})}function v(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof E=="string"?E:mi(E);return h=h.replace(/ $/,"%20"),G(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let g={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(yv,d),l=E,()=>{i.removeEventListener(yv,d),l=null}},createHref(E){return e(i,E)},createURL:v,encodeLocation(E){let p=v(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:m,go(E){return o.go(E)}};return g}var ke;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ke||(ke={}));const NM=new Set(["lazy","caseSensitive","path","id","index","children"]);function OM(t){return t.index===!0}function Gf(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(G(i.index!==!0||!i.children,"Cannot specify children on an index route"),G(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),OM(i)){let l=Pe({},i,e(i),{id:a});return r[a]=l,l}else{let l=Pe({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Gf(i.children,e,o,r)),l}})}function Ji(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Pn(e):e,i=$s(r.pathname||"/",n);if(i==null)return null;let s=o1(t);LM(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=GM(i);o=HM(s[a],l)}return o}function DM(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function o1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(G(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=jn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(G(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),o1(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:BM(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of a1(s.path))i(s,o,l)}),e}function a1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=a1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function LM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:WM(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const MM=/^:[\w-]+$/,FM=3,UM=2,$M=1,jM=10,zM=-2,_v=t=>t==="*";function BM(t,e){let n=t.split("/"),r=n.length;return n.some(_v)&&(r+=zM),e&&(r+=UM),n.filter(i=>!_v(i)).reduce((i,s)=>i+(MM.test(s)?FM:s===""?$M:jM),r)}function WM(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function HM(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=VM({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:jn([i,c.pathname]),pathnameBase:QM(jn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=jn([i,c.pathnameBase]))}return s}function VM(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=KM(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:m}=c;if(f==="*"){let g=a[d]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const v=a[d];return m&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function KM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),pi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function GM(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return pi(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function $s(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function qM(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Pn(t):t;return{pathname:n?n.startsWith("/")?n:YM(n,e):e,search:JM(r),hash:XM(i)}}function YM(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function l1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function um(t,e){let n=l1(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function cm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Pn(t):(i=Pe({},t),G(!i.pathname||!i.pathname.includes("?"),Sd("?","pathname","search",i)),G(!i.pathname||!i.pathname.includes("#"),Sd("#","pathname","hash",i)),G(!i.search||!i.search.includes("#"),Sd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=qM(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const jn=t=>t.join("/").replace(/\/\/+/g,"/"),QM=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),JM=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,XM=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class dm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function u1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const c1=["post","put","patch","delete"],ZM=new Set(c1),e2=["get",...c1],t2=new Set(e2),n2=new Set([301,302,303,307,308]),r2=new Set([307,308]),Cd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},i2={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},io={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},d1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,s2=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),f1="remix-router-transitions";function o2(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;G(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let w=t.detectErrorBoundary;i=S=>({hasErrorBoundary:w(S)})}else i=s2;let s={},o=Gf(t.routes,i,void 0,s),a,l=t.basename||"/",u=Pe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},t.future),c=null,d=new Set,f=null,m=null,v=null,g=t.hydrationData!=null,E=Ji(o,t.history.location,l),p=null;if(E==null){let w=jt(404,{pathname:t.history.location.pathname}),{matches:S,route:T}=Rv(o);E=S,p={[T.id]:w}}let h,y=E.some(w=>w.route.lazy),I=E.some(w=>w.route.loader);if(y)h=!1;else if(!I)h=!0;else if(u.v7_partialHydration){let w=t.hydrationData?t.hydrationData.loaderData:null,S=t.hydrationData?t.hydrationData.errors:null,T=x=>x.route.loader?x.route.loader.hydrate===!0?!1:w&&w[x.route.id]!==void 0||S&&S[x.route.id]!==void 0:!0;if(S){let x=E.findIndex(L=>S[L.route.id]!==void 0);h=E.slice(0,x+1).every(T)}else h=E.every(T)}else h=t.hydrationData!=null;let R,_={historyAction:t.history.action,location:t.history.location,matches:E,initialized:h,navigation:Cd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||p,fetchers:new Map,blockers:new Map},C=Ae.Pop,A=!1,D,F=!1,Z=new Map,Fe=null,De=!1,$t=!1,Ti=[],Jn=[],ve=new Map,N=0,z=-1,W=new Map,te=new Set,me=new Map,fn=new Map,Ye=new Set,Jt=new Map,ct=new Map,Xn=!1;function C1(){if(c=t.history.listen(w=>{let{action:S,location:T,delta:x}=w;if(Xn){Xn=!1;return}pi(ct.size===0||x!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let L=wm({currentLocation:_.location,nextLocation:T,historyAction:S});if(L&&x!=null){Xn=!0,t.history.go(x*-1),Da(L,{state:"blocked",location:T,proceed(){Da(L,{state:"proceeding",proceed:void 0,reset:void 0,location:T}),t.history.go(x)},reset(){let V=new Map(_.blockers);V.set(L,io),Rt({blockers:V})}});return}return Mr(S,T)}),n){y2(e,Z);let w=()=>v2(e,Z);e.addEventListener("pagehide",w),Fe=()=>e.removeEventListener("pagehide",w)}return _.initialized||Mr(Ae.Pop,_.location,{initialHydration:!0}),R}function I1(){c&&c(),Fe&&Fe(),d.clear(),D&&D.abort(),_.fetchers.forEach((w,S)=>Oa(S)),_.blockers.forEach((w,S)=>_m(S))}function T1(w){return d.add(w),()=>d.delete(w)}function Rt(w,S){S===void 0&&(S={}),_=Pe({},_,w);let T=[],x=[];u.v7_fetcherPersist&&_.fetchers.forEach((L,V)=>{L.state==="idle"&&(Ye.has(V)?x.push(V):T.push(V))}),[...d].forEach(L=>L(_,{deletedFetchers:x,unstable_viewTransitionOpts:S.viewTransitionOpts,unstable_flushSync:S.flushSync===!0})),u.v7_fetcherPersist&&(T.forEach(L=>_.fetchers.delete(L)),x.forEach(L=>Oa(L)))}function js(w,S,T){var x,L;let{flushSync:V}=T===void 0?{}:T,B=_.actionData!=null&&_.navigation.formMethod!=null&&tn(_.navigation.formMethod)&&_.navigation.state==="loading"&&((x=w.state)==null?void 0:x._isRedirect)!==!0,U;S.actionData?Object.keys(S.actionData).length>0?U=S.actionData:U=null:B?U=_.actionData:U=null;let M=S.loaderData?kv(_.loaderData,S.loaderData,S.matches||[],S.errors):_.loaderData,J=_.blockers;J.size>0&&(J=new Map(J),J.forEach((de,Qe)=>J.set(Qe,io)));let ze=A===!0||_.navigation.formMethod!=null&&tn(_.navigation.formMethod)&&((L=w.state)==null?void 0:L._isRedirect)!==!0;a&&(o=a,a=void 0),De||C===Ae.Pop||(C===Ae.Push?t.history.push(w,w.state):C===Ae.Replace&&t.history.replace(w,w.state));let H;if(C===Ae.Pop){let de=Z.get(_.location.pathname);de&&de.has(w.pathname)?H={currentLocation:_.location,nextLocation:w}:Z.has(w.pathname)&&(H={currentLocation:w,nextLocation:_.location})}else if(F){let de=Z.get(_.location.pathname);de?de.add(w.pathname):(de=new Set([w.pathname]),Z.set(_.location.pathname,de)),H={currentLocation:_.location,nextLocation:w}}Rt(Pe({},S,{actionData:U,loaderData:M,historyAction:C,location:w,initialized:!0,navigation:Cd,revalidation:"idle",restoreScrollPosition:Sm(w,S.matches||_.matches),preventScrollReset:ze,blockers:J}),{viewTransitionOpts:H,flushSync:V===!0}),C=Ae.Pop,A=!1,F=!1,De=!1,$t=!1,Ti=[],Jn=[]}async function hm(w,S){if(typeof w=="number"){t.history.go(w);return}let T=qf(_.location,_.matches,l,u.v7_prependBasename,w,u.v7_relativeSplatPath,S==null?void 0:S.fromRouteId,S==null?void 0:S.relative),{path:x,submission:L,error:V}=wv(u.v7_normalizeFormMethod,!1,T,S),B=_.location,U=ha(_.location,x,S&&S.state);U=Pe({},U,t.history.encodeLocation(U));let M=S&&S.replace!=null?S.replace:void 0,J=Ae.Push;M===!0?J=Ae.Replace:M===!1||L!=null&&tn(L.formMethod)&&L.formAction===_.location.pathname+_.location.search&&(J=Ae.Replace);let ze=S&&"preventScrollReset"in S?S.preventScrollReset===!0:void 0,H=(S&&S.unstable_flushSync)===!0,de=wm({currentLocation:B,nextLocation:U,historyAction:J});if(de){Da(de,{state:"blocked",location:U,proceed(){Da(de,{state:"proceeding",proceed:void 0,reset:void 0,location:U}),hm(w,S)},reset(){let Qe=new Map(_.blockers);Qe.set(de,io),Rt({blockers:Qe})}});return}return await Mr(J,U,{submission:L,pendingError:V,preventScrollReset:ze,replace:S&&S.replace,enableViewTransition:S&&S.unstable_viewTransition,flushSync:H})}function k1(){if(Tc(),Rt({revalidation:"loading"}),_.navigation.state!=="submitting"){if(_.navigation.state==="idle"){Mr(_.historyAction,_.location,{startUninterruptedRevalidation:!0});return}Mr(C||_.historyAction,_.navigation.location,{overrideNavigation:_.navigation})}}async function Mr(w,S,T){D&&D.abort(),D=null,C=w,De=(T&&T.startUninterruptedRevalidation)===!0,L1(_.location,_.matches),A=(T&&T.preventScrollReset)===!0,F=(T&&T.enableViewTransition)===!0;let x=a||o,L=T&&T.overrideNavigation,V=Ji(x,S,l),B=(T&&T.flushSync)===!0;if(!V){let Qe=jt(404,{pathname:S.pathname}),{matches:Pt,route:Be}=Rv(x);kc(),js(S,{matches:Pt,loaderData:{},errors:{[Be.id]:Qe}},{flushSync:B});return}if(_.initialized&&!$t&&d2(_.location,S)&&!(T&&T.submission&&tn(T.submission.formMethod))){js(S,{matches:V},{flushSync:B});return}D=new AbortController;let U=oo(t.history,S,D.signal,T&&T.submission),M,J;if(T&&T.pendingError)J={[No(V).route.id]:T.pendingError};else if(T&&T.submission&&tn(T.submission.formMethod)){let Qe=await R1(U,S,T.submission,V,{replace:T.replace,flushSync:B});if(Qe.shortCircuited)return;M=Qe.pendingActionData,J=Qe.pendingActionError,L=Id(S,T.submission),B=!1,U=new Request(U.url,{signal:U.signal})}let{shortCircuited:ze,loaderData:H,errors:de}=await P1(U,S,V,L,T&&T.submission,T&&T.fetcherSubmission,T&&T.replace,T&&T.initialHydration===!0,B,M,J);ze||(D=null,js(S,Pe({matches:V},M?{actionData:M}:{},{loaderData:H,errors:de})))}async function R1(w,S,T,x,L){L===void 0&&(L={}),Tc();let V=m2(S,T);Rt({navigation:V},{flushSync:L.flushSync===!0});let B,U=Qf(x,S);if(!U.route.action&&!U.route.lazy)B={type:ke.error,error:jt(405,{method:w.method,pathname:S.pathname,routeId:U.route.id})};else if(B=await so("action",w,U,x,s,i,l,u.v7_relativeSplatPath),w.signal.aborted)return{shortCircuited:!0};if(Yr(B)){let M;return L&&L.replace!=null?M=L.replace:M=B.location===_.location.pathname+_.location.search,await zs(_,B,{submission:T,replace:M}),{shortCircuited:!0}}if(Xi(B)){let M=No(x,U.route.id);return(L&&L.replace)!==!0&&(C=Ae.Push),{pendingActionData:{},pendingActionError:{[M.route.id]:B.error}}}if(qr(B))throw jt(400,{type:"defer-action"});return{pendingActionData:{[U.route.id]:B.data}}}async function P1(w,S,T,x,L,V,B,U,M,J,ze){let H=x||Id(S,L),de=L||V||xv(H),Qe=a||o,[Pt,Be]=Ev(t.history,_,T,de,S,u.v7_partialHydration&&U===!0,$t,Ti,Jn,Ye,me,te,Qe,l,J,ze);if(kc(ne=>!(T&&T.some(le=>le.route.id===ne))||Pt&&Pt.some(le=>le.route.id===ne)),z=++N,Pt.length===0&&Be.length===0){let ne=ym();return js(S,Pe({matches:T,loaderData:{},errors:ze||null},J?{actionData:J}:{},ne?{fetchers:new Map(_.fetchers)}:{}),{flushSync:M}),{shortCircuited:!0}}if(!De&&(!u.v7_partialHydration||!U)){Be.forEach(le=>{let mt=_.fetchers.get(le.key),Ma=ao(void 0,mt?mt.data:void 0);_.fetchers.set(le.key,Ma)});let ne=J||_.actionData;Rt(Pe({navigation:H},ne?Object.keys(ne).length===0?{actionData:null}:{actionData:ne}:{},Be.length>0?{fetchers:new Map(_.fetchers)}:{}),{flushSync:M})}Be.forEach(ne=>{ve.has(ne.key)&&er(ne.key),ne.controller&&ve.set(ne.key,ne.controller)});let ki=()=>Be.forEach(ne=>er(ne.key));D&&D.signal.addEventListener("abort",ki);let{results:Rc,loaderResults:Ri,fetcherResults:tr}=await pm(_.matches,T,Pt,Be,w);if(w.signal.aborted)return{shortCircuited:!0};D&&D.signal.removeEventListener("abort",ki),Be.forEach(ne=>ve.delete(ne.key));let Fr=Pv(Rc);if(Fr){if(Fr.idx>=Pt.length){let ne=Be[Fr.idx-Pt.length].key;te.add(ne)}return await zs(_,Fr.result,{replace:B}),{shortCircuited:!0}}let{loaderData:Pc,errors:Ws}=Tv(_,T,Pt,Ri,ze,Be,tr,Jt);Jt.forEach((ne,le)=>{ne.subscribe(mt=>{(mt||ne.done)&&Jt.delete(le)})}),u.v7_partialHydration&&U&&_.errors&&Object.entries(_.errors).filter(ne=>{let[le]=ne;return!Pt.some(mt=>mt.route.id===le)}).forEach(ne=>{let[le,mt]=ne;Ws=Object.assign(Ws||{},{[le]:mt})});let bc=ym(),Pi=vm(z),La=bc||Pi||Be.length>0;return Pe({loaderData:Pc,errors:Ws},La?{fetchers:new Map(_.fetchers)}:{})}function b1(w,S,T,x){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ve.has(w)&&er(w);let L=(x&&x.unstable_flushSync)===!0,V=a||o,B=qf(_.location,_.matches,l,u.v7_prependBasename,T,u.v7_relativeSplatPath,S,x==null?void 0:x.relative),U=Ji(V,B,l);if(!U){Bs(w,S,jt(404,{pathname:B}),{flushSync:L});return}let{path:M,submission:J,error:ze}=wv(u.v7_normalizeFormMethod,!0,B,x);if(ze){Bs(w,S,ze,{flushSync:L});return}let H=Qf(U,M);if(A=(x&&x.preventScrollReset)===!0,J&&tn(J.formMethod)){x1(w,S,M,H,U,L,J);return}me.set(w,{routeId:S,path:M}),A1(w,S,M,H,U,L,J)}async function x1(w,S,T,x,L,V,B){if(Tc(),me.delete(w),!x.route.action&&!x.route.lazy){let le=jt(405,{method:B.formMethod,pathname:T,routeId:S});Bs(w,S,le,{flushSync:V});return}let U=_.fetchers.get(w);Zn(w,g2(B,U),{flushSync:V});let M=new AbortController,J=oo(t.history,T,M.signal,B);ve.set(w,M);let ze=N,H=await so("action",J,x,L,s,i,l,u.v7_relativeSplatPath);if(J.signal.aborted){ve.get(w)===M&&ve.delete(w);return}if(u.v7_fetcherPersist&&Ye.has(w)){if(Yr(H)||Xi(H)){Zn(w,ir(void 0));return}}else{if(Yr(H))if(ve.delete(w),z>ze){Zn(w,ir(void 0));return}else return te.add(w),Zn(w,ao(B)),zs(_,H,{fetcherSubmission:B});if(Xi(H)){Bs(w,S,H.error);return}}if(qr(H))throw jt(400,{type:"defer-action"});let de=_.navigation.location||_.location,Qe=oo(t.history,de,M.signal),Pt=a||o,Be=_.navigation.state!=="idle"?Ji(Pt,_.navigation.location,l):_.matches;G(Be,"Didn't find any matches after fetcher action");let ki=++N;W.set(w,ki);let Rc=ao(B,H.data);_.fetchers.set(w,Rc);let[Ri,tr]=Ev(t.history,_,Be,B,de,!1,$t,Ti,Jn,Ye,me,te,Pt,l,{[x.route.id]:H.data},void 0);tr.filter(le=>le.key!==w).forEach(le=>{let mt=le.key,Ma=_.fetchers.get(mt),F1=ao(void 0,Ma?Ma.data:void 0);_.fetchers.set(mt,F1),ve.has(mt)&&er(mt),le.controller&&ve.set(mt,le.controller)}),Rt({fetchers:new Map(_.fetchers)});let Fr=()=>tr.forEach(le=>er(le.key));M.signal.addEventListener("abort",Fr);let{results:Pc,loaderResults:Ws,fetcherResults:bc}=await pm(_.matches,Be,Ri,tr,Qe);if(M.signal.aborted)return;M.signal.removeEventListener("abort",Fr),W.delete(w),ve.delete(w),tr.forEach(le=>ve.delete(le.key));let Pi=Pv(Pc);if(Pi){if(Pi.idx>=Ri.length){let le=tr[Pi.idx-Ri.length].key;te.add(le)}return zs(_,Pi.result)}let{loaderData:La,errors:ne}=Tv(_,_.matches,Ri,Ws,void 0,tr,bc,Jt);if(_.fetchers.has(w)){let le=ir(H.data);_.fetchers.set(w,le)}vm(ki),_.navigation.state==="loading"&&ki>z?(G(C,"Expected pending action"),D&&D.abort(),js(_.navigation.location,{matches:Be,loaderData:La,errors:ne,fetchers:new Map(_.fetchers)})):(Rt({errors:ne,loaderData:kv(_.loaderData,La,Be,ne),fetchers:new Map(_.fetchers)}),$t=!1)}async function A1(w,S,T,x,L,V,B){let U=_.fetchers.get(w);Zn(w,ao(B,U?U.data:void 0),{flushSync:V});let M=new AbortController,J=oo(t.history,T,M.signal);ve.set(w,M);let ze=N,H=await so("loader",J,x,L,s,i,l,u.v7_relativeSplatPath);if(qr(H)&&(H=await m1(H,J.signal,!0)||H),ve.get(w)===M&&ve.delete(w),!J.signal.aborted){if(Ye.has(w)){Zn(w,ir(void 0));return}if(Yr(H))if(z>ze){Zn(w,ir(void 0));return}else{te.add(w),await zs(_,H);return}if(Xi(H)){Bs(w,S,H.error);return}G(!qr(H),"Unhandled fetcher deferred data"),Zn(w,ir(H.data))}}async function zs(w,S,T){let{submission:x,fetcherSubmission:L,replace:V}=T===void 0?{}:T;S.revalidate&&($t=!0);let B=ha(w.location,S.location,{_isRedirect:!0});if(G(B,"Expected a location on the redirect navigation"),n){let de=!1;if(S.reloadDocument)de=!0;else if(d1.test(S.location)){const Qe=t.history.createURL(S.location);de=Qe.origin!==e.location.origin||$s(Qe.pathname,l)==null}if(de){V?e.location.replace(S.location):e.location.assign(S.location);return}}D=null;let U=V===!0?Ae.Replace:Ae.Push,{formMethod:M,formAction:J,formEncType:ze}=w.navigation;!x&&!L&&M&&J&&ze&&(x=xv(w.navigation));let H=x||L;if(r2.has(S.status)&&H&&tn(H.formMethod))await Mr(U,B,{submission:Pe({},H,{formAction:S.location}),preventScrollReset:A});else{let de=Id(B,x);await Mr(U,B,{overrideNavigation:de,fetcherSubmission:L,preventScrollReset:A})}}async function pm(w,S,T,x,L){let V=await Promise.all([...T.map(M=>so("loader",L,M,S,s,i,l,u.v7_relativeSplatPath)),...x.map(M=>M.matches&&M.match&&M.controller?so("loader",oo(t.history,M.path,M.controller.signal),M.match,M.matches,s,i,l,u.v7_relativeSplatPath):{type:ke.error,error:jt(404,{pathname:M.path})})]),B=V.slice(0,T.length),U=V.slice(T.length);return await Promise.all([bv(w,T,B,B.map(()=>L.signal),!1,_.loaderData),bv(w,x.map(M=>M.match),U,x.map(M=>M.controller?M.controller.signal:null),!0)]),{results:V,loaderResults:B,fetcherResults:U}}function Tc(){$t=!0,Ti.push(...kc()),me.forEach((w,S)=>{ve.has(S)&&(Jn.push(S),er(S))})}function Zn(w,S,T){T===void 0&&(T={}),_.fetchers.set(w,S),Rt({fetchers:new Map(_.fetchers)},{flushSync:(T&&T.flushSync)===!0})}function Bs(w,S,T,x){x===void 0&&(x={});let L=No(_.matches,S);Oa(w),Rt({errors:{[L.route.id]:T},fetchers:new Map(_.fetchers)},{flushSync:(x&&x.flushSync)===!0})}function mm(w){return u.v7_fetcherPersist&&(fn.set(w,(fn.get(w)||0)+1),Ye.has(w)&&Ye.delete(w)),_.fetchers.get(w)||i2}function Oa(w){let S=_.fetchers.get(w);ve.has(w)&&!(S&&S.state==="loading"&&W.has(w))&&er(w),me.delete(w),W.delete(w),te.delete(w),Ye.delete(w),_.fetchers.delete(w)}function N1(w){if(u.v7_fetcherPersist){let S=(fn.get(w)||0)-1;S<=0?(fn.delete(w),Ye.add(w)):fn.set(w,S)}else Oa(w);Rt({fetchers:new Map(_.fetchers)})}function er(w){let S=ve.get(w);G(S,"Expected fetch controller: "+w),S.abort(),ve.delete(w)}function gm(w){for(let S of w){let T=mm(S),x=ir(T.data);_.fetchers.set(S,x)}}function ym(){let w=[],S=!1;for(let T of te){let x=_.fetchers.get(T);G(x,"Expected fetcher: "+T),x.state==="loading"&&(te.delete(T),w.push(T),S=!0)}return gm(w),S}function vm(w){let S=[];for(let[T,x]of W)if(x<w){let L=_.fetchers.get(T);G(L,"Expected fetcher: "+T),L.state==="loading"&&(er(T),W.delete(T),S.push(T))}return gm(S),S.length>0}function O1(w,S){let T=_.blockers.get(w)||io;return ct.get(w)!==S&&ct.set(w,S),T}function _m(w){_.blockers.delete(w),ct.delete(w)}function Da(w,S){let T=_.blockers.get(w)||io;G(T.state==="unblocked"&&S.state==="blocked"||T.state==="blocked"&&S.state==="blocked"||T.state==="blocked"&&S.state==="proceeding"||T.state==="blocked"&&S.state==="unblocked"||T.state==="proceeding"&&S.state==="unblocked","Invalid blocker state transition: "+T.state+" -> "+S.state);let x=new Map(_.blockers);x.set(w,S),Rt({blockers:x})}function wm(w){let{currentLocation:S,nextLocation:T,historyAction:x}=w;if(ct.size===0)return;ct.size>1&&pi(!1,"A router only supports one blocker at a time");let L=Array.from(ct.entries()),[V,B]=L[L.length-1],U=_.blockers.get(V);if(!(U&&U.state==="proceeding")&&B({currentLocation:S,nextLocation:T,historyAction:x}))return V}function kc(w){let S=[];return Jt.forEach((T,x)=>{(!w||w(x))&&(T.cancel(),S.push(x),Jt.delete(x))}),S}function D1(w,S,T){if(f=w,v=S,m=T||null,!g&&_.navigation===Cd){g=!0;let x=Sm(_.location,_.matches);x!=null&&Rt({restoreScrollPosition:x})}return()=>{f=null,v=null,m=null}}function Em(w,S){return m&&m(w,S.map(x=>DM(x,_.loaderData)))||w.key}function L1(w,S){if(f&&v){let T=Em(w,S);f[T]=v()}}function Sm(w,S){if(f){let T=Em(w,S),x=f[T];if(typeof x=="number")return x}return null}function M1(w){s={},a=Gf(w,i,void 0,s)}return R={get basename(){return l},get future(){return u},get state(){return _},get routes(){return o},get window(){return e},initialize:C1,subscribe:T1,enableScrollRestoration:D1,navigate:hm,fetch:b1,revalidate:k1,createHref:w=>t.history.createHref(w),encodeLocation:w=>t.history.encodeLocation(w),getFetcher:mm,deleteFetcher:N1,dispose:I1,getBlocker:O1,deleteBlocker:_m,_internalFetchControllers:ve,_internalActiveDeferreds:Jt,_internalSetRoutes:M1},R}function a2(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function qf(t,e,n,r,i,s,o,a){let l,u;if(o){l=[];for(let d of e)if(l.push(d),d.route.id===o){u=d;break}}else l=e,u=e[e.length-1];let c=cm(i||".",um(l,s),$s(t.pathname,n)||t.pathname,a==="path");return i==null&&(c.search=t.search,c.hash=t.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!fm(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:jn([n,c.pathname])),mi(c)}function wv(t,e,n,r){if(!r||!a2(r))return{path:n};if(r.formMethod&&!p2(r.formMethod))return{path:n,error:jt(405,{method:r.formMethod})};let i=()=>({path:n,error:jt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=p1(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!tn(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((m,v)=>{let[g,E]=v;return""+m+g+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!tn(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}G(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Yf(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Yf(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Iv(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Iv(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(tn(c.formMethod))return{path:n,submission:c};let d=Pn(n);return e&&d.search&&fm(d.search)&&l.append("index",""),d.search="?"+l,{path:mi(d),submission:c}}function l2(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Ev(t,e,n,r,i,s,o,a,l,u,c,d,f,m,v,g){let E=g?Object.values(g)[0]:v?Object.values(v)[0]:void 0,p=t.createURL(e.location),h=t.createURL(i),y=g?Object.keys(g)[0]:void 0,R=l2(n,y).filter((C,A)=>{let{route:D}=C;if(D.lazy)return!0;if(D.loader==null)return!1;if(s)return D.loader.hydrate?!0:e.loaderData[D.id]===void 0&&(!e.errors||e.errors[D.id]===void 0);if(u2(e.loaderData,e.matches[A],C)||a.some(Fe=>Fe===C.route.id))return!0;let F=e.matches[A],Z=C;return Sv(C,Pe({currentUrl:p,currentParams:F.params,nextUrl:h,nextParams:Z.params},r,{actionResult:E,defaultShouldRevalidate:o||p.pathname+p.search===h.pathname+h.search||p.search!==h.search||h1(F,Z)}))}),_=[];return c.forEach((C,A)=>{if(s||!n.some(De=>De.route.id===C.routeId)||u.has(A))return;let D=Ji(f,C.path,m);if(!D){_.push({key:A,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let F=e.fetchers.get(A),Z=Qf(D,C.path),Fe=!1;d.has(A)?Fe=!1:l.includes(A)?Fe=!0:F&&F.state!=="idle"&&F.data===void 0?Fe=o:Fe=Sv(Z,Pe({currentUrl:p,currentParams:e.matches[e.matches.length-1].params,nextUrl:h,nextParams:n[n.length-1].params},r,{actionResult:E,defaultShouldRevalidate:o})),Fe&&_.push({key:A,routeId:C.routeId,path:C.path,matches:D,match:Z,controller:new AbortController})}),[R,_]}function u2(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function h1(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Sv(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Cv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];G(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";pi(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!NM.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Pe({},e(i),{lazy:void 0}))}async function so(t,e,n,r,i,s,o,a,l){l===void 0&&(l={});let u,c,d,f=g=>{let E,p=new Promise((h,y)=>E=y);return d=()=>E(),e.signal.addEventListener("abort",d),Promise.race([g({request:e,params:n.params,context:l.requestContext}),p])};try{let g=n.route[t];if(n.route.lazy)if(g){let E,p=await Promise.all([f(g).catch(h=>{E=h}),Cv(n.route,s,i)]);if(E)throw E;c=p[0]}else if(await Cv(n.route,s,i),g=n.route[t],g)c=await f(g);else if(t==="action"){let E=new URL(e.url),p=E.pathname+E.search;throw jt(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:ke.data,data:void 0};else if(g)c=await f(g);else{let E=new URL(e.url),p=E.pathname+E.search;throw jt(404,{pathname:p})}G(c!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(g){u=ke.error,c=g}finally{d&&e.signal.removeEventListener("abort",d)}if(h2(c)){let g=c.status;if(n2.has(g)){let p=c.headers.get("Location");if(G(p,"Redirects returned/thrown from loaders/actions must have a Location header"),!d1.test(p))p=qf(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,p,a);else if(!l.isStaticRequest){let h=new URL(e.url),y=p.startsWith("//")?new URL(h.protocol+p):new URL(p),I=$s(y.pathname,o)!=null;y.origin===h.origin&&I&&(p=y.pathname+y.search+y.hash)}if(l.isStaticRequest)throw c.headers.set("Location",p),c;return{type:ke.redirect,status:g,location:p,revalidate:c.headers.get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:u===ke.error?ke.error:ke.data,response:c};let E;try{let p=c.headers.get("Content-Type");p&&/\bapplication\/json\b/.test(p)?c.body==null?E=null:E=await c.json():E=await c.text()}catch(p){return{type:ke.error,error:p}}return u===ke.error?{type:u,error:new dm(g,c.statusText,E),headers:c.headers}:{type:ke.data,data:E,statusCode:c.status,headers:c.headers}}if(u===ke.error)return{type:u,error:c};if(f2(c)){var m,v;return{type:ke.deferred,deferredData:c,statusCode:(m=c.init)==null?void 0:m.status,headers:((v=c.init)==null?void 0:v.headers)&&new Headers(c.init.headers)}}return{type:ke.data,data:c}}function oo(t,e,n,r){let i=t.createURL(p1(e)).toString(),s={signal:n};if(r&&tn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Yf(r.formData):s.body=r.formData}return new Request(i,s)}function Yf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Iv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function c2(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(G(!Yr(c),"Cannot handle redirect results in processLoaderData"),Xi(c)){let m=No(t,f),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[m.route.id]==null&&(o[m.route.id]=v),s[f]=void 0,l||(l=!0,a=u1(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else qr(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function Tv(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=c2(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:m}=s[c];G(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let v=o[c];if(!(m&&m.signal.aborted))if(Xi(v)){let g=No(t.matches,f==null?void 0:f.route.id);u&&u[g.route.id]||(u=Pe({},u,{[g.route.id]:v.error})),t.fetchers.delete(d)}else if(Yr(v))G(!1,"Unhandled fetcher revalidation redirect");else if(qr(v))G(!1,"Unhandled fetcher deferred data");else{let g=ir(v.data);t.fetchers.set(d,g)}}return{loaderData:l,errors:u}}function kv(t,e,n,r){let i=Pe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function No(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Rv(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function jt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new dm(t||500,o,new Error(a),!0)}function Pv(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Yr(n))return{result:n,idx:e}}}function p1(t){let e=typeof t=="string"?Pn(t):t;return mi(Pe({},e,{hash:""}))}function d2(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function qr(t){return t.type===ke.deferred}function Xi(t){return t.type===ke.error}function Yr(t){return(t&&t.type)===ke.redirect}function f2(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function h2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function p2(t){return t2.has(t.toLowerCase())}function tn(t){return ZM.has(t.toLowerCase())}async function bv(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!h1(u,l)&&(s&&s[l.route.id])!==void 0;if(qr(a)&&(i||c)){let d=r[o];G(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await m1(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function m1(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:ke.data,data:t.deferredData.unwrappedData}}catch(i){return{type:ke.error,error:i}}return{type:ke.data,data:t.deferredData.data}}}function fm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Qf(t,e){let n=typeof e=="string"?Pn(e).search:e.search;if(t[t.length-1].route.index&&fm(n||""))return t[t.length-1];let r=l1(t);return r[r.length-1]}function xv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Id(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function m2(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function ao(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function g2(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function ir(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function y2(t,e){try{let n=t.sessionStorage.getItem(f1);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function v2(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(f1,JSON.stringify(n))}catch(r){pi(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pa(){return pa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pa.apply(this,arguments)}const Sc=k.createContext(null),g1=k.createContext(null),Ii=k.createContext(null),Cc=k.createContext(null),Lr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),y1=k.createContext(null);function _2(t,e){let{relative:n}=e===void 0?{}:e;Na()||G(!1);let{basename:r,navigator:i}=k.useContext(Ii),{hash:s,pathname:o,search:a}=w1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:jn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Na(){return k.useContext(Cc)!=null}function Ic(){return Na()||G(!1),k.useContext(Cc).location}function v1(t){k.useContext(Ii).static||k.useLayoutEffect(t)}function _1(){let{isDataRoute:t}=k.useContext(Lr);return t?O2():w2()}function w2(){Na()||G(!1);let t=k.useContext(Sc),{basename:e,future:n,navigator:r}=k.useContext(Ii),{matches:i}=k.useContext(Lr),{pathname:s}=Ic(),o=JSON.stringify(um(i,n.v7_relativeSplatPath)),a=k.useRef(!1);return v1(()=>{a.current=!0}),k.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=cm(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:jn([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}const E2=k.createContext(null);function S2(t){let e=k.useContext(Lr).outlet;return e&&k.createElement(E2.Provider,{value:t},e)}function w1(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=k.useContext(Ii),{matches:i}=k.useContext(Lr),{pathname:s}=Ic(),o=JSON.stringify(um(i,r.v7_relativeSplatPath));return k.useMemo(()=>cm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function C2(t,e,n,r){Na()||G(!1);let{navigator:i}=k.useContext(Ii),{matches:s}=k.useContext(Lr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Ic(),c;if(e){var d;let E=typeof e=="string"?Pn(e):e;l==="/"||(d=E.pathname)!=null&&d.startsWith(l)||G(!1),c=E}else c=u;let f=c.pathname||"/",m=f;if(l!=="/"){let E=l.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(E.length).join("/")}let v=Ji(t,{pathname:m}),g=P2(v&&v.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:jn([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:jn([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return e&&g?k.createElement(Cc.Provider,{value:{location:pa({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ae.Pop}},g):g}function I2(){let t=N2(),e=u1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,null)}const T2=k.createElement(I2,null);class k2 extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?k.createElement(Lr.Provider,{value:this.props.routeContext},k.createElement(y1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function R2(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(Sc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Lr.Provider,{value:e},r)}function P2(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||G(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:m}=n,v=d.route.loader&&f[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,f)=>{let m,v=!1,g=null,E=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,g=d.route.errorElement||T2,l&&(u<0&&f===0?(D2("route-fallback",!1),v=!0,E=null):u===f&&(v=!0,E=d.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,f+1)),h=()=>{let y;return m?y=g:v?y=E:d.route.Component?y=k.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=c,k.createElement(R2,{match:d,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?k.createElement(k2,{location:n.location,revalidation:n.revalidation,component:g,error:m,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var E1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(E1||{}),Cu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Cu||{});function b2(t){let e=k.useContext(Sc);return e||G(!1),e}function x2(t){let e=k.useContext(g1);return e||G(!1),e}function A2(t){let e=k.useContext(Lr);return e||G(!1),e}function S1(t){let e=A2(),n=e.matches[e.matches.length-1];return n.route.id||G(!1),n.route.id}function N2(){var t;let e=k.useContext(y1),n=x2(Cu.UseRouteError),r=S1(Cu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function O2(){let{router:t}=b2(E1.UseNavigateStable),e=S1(Cu.UseNavigateStable),n=k.useRef(!1);return v1(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,pa({fromRouteId:e},s)))},[t,e])}const Av={};function D2(t,e,n){!e&&!Av[t]&&(Av[t]=!0)}function L2(t){return S2(t.context)}function M2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ae.Pop,navigator:s,static:o=!1,future:a}=t;Na()&&G(!1);let l=e.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:s,static:o,future:pa({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Pn(r));let{pathname:c="/",search:d="",hash:f="",state:m=null,key:v="default"}=r,g=k.useMemo(()=>{let E=$s(c,l);return E==null?null:{location:{pathname:E,search:d,hash:f,state:m,key:v},navigationType:i}},[l,c,d,f,m,v,i]);return g==null?null:k.createElement(Ii.Provider,{value:u},k.createElement(Cc.Provider,{children:n,value:g}))}new Promise(()=>{});function F2(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:k.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:k.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:k.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}function U2(t){const[e,n]=k.useState([]),r=t!==null?pM(PM,t):"";return k.useMemo(()=>gM(r,a=>{const l=a.val();if(a.exists()){let u=[];for(const c in l)u=[...u,{[c]:l[c]}],n(u)}}),[]),[e,n,(a,l)=>{let c={[new Date]:{[l]:a}};Ed(r,c).then(()=>{console.log("succses")}).catch(d=>{console.log(d)})},(a,l)=>{let c={[e.length]:{email:a,name:l}};Ed(r,c).then(()=>{console.log("succses")}).catch(d=>{console.log(d)})},(a,l)=>{let c={[e.length]:{user1:a,user2:l}};return Ed(r,c)}]}const $2=k.createContext();function j2({children:t}){const[e,n]=k.useState(null),r=_1(),[i,s,,o]=U2("names");k.useEffect(()=>{e!==null&&r("/chatslist"),console.log("name",e)},[e]);const a=c=>{for(const d in i)i[d][d].email===c&&n(i[d][d].name)},l=(c,d)=>{Ox(Tl,_E).then(()=>Nx(Tl,c,d).then(f=>{f.user,a(c)})).catch(f=>{const m=f.code,v=f.message;console.log(m,v)})},u=(c,d,f)=>{Ax(Tl,c,d).then(m=>{o(c,f),r("/chatslist"),console.log(m.user)}).catch(m=>setError(m.message))};return $e.jsx($2.Provider,{value:{name:e,setName:n,SignIn:l,objList:i,Register:u},children:t})}function z2(t){return $e.jsx(lR,ee({},t,{defaultTheme:Pw,themeId:Ql}))}const B2=(t,e)=>ee({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},e&&!t.vars&&{colorScheme:t.palette.mode}),W2=t=>ee({color:(t.vars||t).palette.text.primary},t.typography.body1,{backgroundColor:(t.vars||t).palette.background.default,"@media print":{backgroundColor:(t.vars||t).palette.common.white}}),H2=(t,e=!1)=>{var n;const r={};e&&t.colorSchemes&&Object.entries(t.colorSchemes).forEach(([o,a])=>{var l;r[t.getColorSchemeSelector(o).replace(/\s*&/,"")]={colorScheme:(l=a.palette)==null?void 0:l.mode}});let i=ee({html:B2(t,e),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:ee({margin:0},W2(t),{"&::backdrop":{backgroundColor:(t.vars||t).palette.background.default}})},r);const s=(n=t.components)==null||(n=n.MuiCssBaseline)==null?void 0:n.styleOverrides;return s&&(i=[i,s]),i};function V2(t){const e=nP({props:t,name:"MuiCssBaseline"}),{children:n,enableColorScheme:r=!1}=e;return $e.jsxs(k.Fragment,{children:[$e.jsx(z2,{styles:i=>H2(i,r)}),n]})}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ma(){return ma=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ma.apply(this,arguments)}function K2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function G2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function q2(t,e){return t.button===0&&(!e||e==="_self")&&!G2(t)}const Y2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Q2="6";try{window.__reactRouterVersion=Q2}catch{}function J2(t,e){return o2({basename:e==null?void 0:e.basename,future:ma({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:bM({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||X2(),routes:t,mapRouteProperties:F2,window:e==null?void 0:e.window}).initialize()}function X2(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=ma({},e,{errors:Z2(e.errors)})),e}function Z2(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new dm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const eF=k.createContext({isTransitioning:!1}),tF=k.createContext(new Map),nF="startTransition",Nv=Td[nF],rF="flushSync",Ov=dT[rF];function iF(t){Nv?Nv(t):t()}function lo(t){Ov?Ov(t):t()}class sF{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function oF(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=k.useState(n.state),[o,a]=k.useState(),[l,u]=k.useState({isTransitioning:!1}),[c,d]=k.useState(),[f,m]=k.useState(),[v,g]=k.useState(),E=k.useRef(new Map),{v7_startTransition:p}=r||{},h=k.useCallback(C=>{p?iF(C):C()},[p]),y=k.useCallback((C,A)=>{let{deletedFetchers:D,unstable_flushSync:F,unstable_viewTransitionOpts:Z}=A;D.forEach(De=>E.current.delete(De)),C.fetchers.forEach((De,$t)=>{De.data!==void 0&&E.current.set($t,De.data)});let Fe=n.window==null||typeof n.window.document.startViewTransition!="function";if(!Z||Fe){F?lo(()=>s(C)):h(()=>s(C));return}if(F){lo(()=>{f&&(c&&c.resolve(),f.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:Z.currentLocation,nextLocation:Z.nextLocation})});let De=n.window.document.startViewTransition(()=>{lo(()=>s(C))});De.finished.finally(()=>{lo(()=>{d(void 0),m(void 0),a(void 0),u({isTransitioning:!1})})}),lo(()=>m(De));return}f?(c&&c.resolve(),f.skipTransition(),g({state:C,currentLocation:Z.currentLocation,nextLocation:Z.nextLocation})):(a(C),u({isTransitioning:!0,flushSync:!1,currentLocation:Z.currentLocation,nextLocation:Z.nextLocation}))},[n.window,f,c,E,h]);k.useLayoutEffect(()=>n.subscribe(y),[n,y]),k.useEffect(()=>{l.isTransitioning&&!l.flushSync&&d(new sF)},[l]),k.useEffect(()=>{if(c&&o&&n.window){let C=o,A=c.promise,D=n.window.document.startViewTransition(async()=>{h(()=>s(C)),await A});D.finished.finally(()=>{d(void 0),m(void 0),a(void 0),u({isTransitioning:!1})}),m(D)}},[h,o,c,n.window]),k.useEffect(()=>{c&&o&&i.location.key===o.location.key&&c.resolve()},[c,f,i.location,o]),k.useEffect(()=>{!l.isTransitioning&&v&&(a(v.state),u({isTransitioning:!0,flushSync:!1,currentLocation:v.currentLocation,nextLocation:v.nextLocation}),g(void 0))},[l.isTransitioning,v]),k.useEffect(()=>{},[]);let I=k.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:C=>n.navigate(C),push:(C,A,D)=>n.navigate(C,{state:A,preventScrollReset:D==null?void 0:D.preventScrollReset}),replace:(C,A,D)=>n.navigate(C,{replace:!0,state:A,preventScrollReset:D==null?void 0:D.preventScrollReset})}),[n]),R=n.basename||"/",_=k.useMemo(()=>({router:n,navigator:I,static:!1,basename:R}),[n,I,R]);return k.createElement(k.Fragment,null,k.createElement(Sc.Provider,{value:_},k.createElement(g1.Provider,{value:i},k.createElement(tF.Provider,{value:E.current},k.createElement(eF.Provider,{value:l},k.createElement(M2,{basename:R,location:i.location,navigationType:i.historyAction,navigator:I,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?k.createElement(aF,{routes:n.routes,future:n.future,state:i}):e))))),null)}function aF(t){let{routes:e,future:n,state:r}=t;return C2(e,void 0,r,n)}const lF=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uF=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,CF=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,f=K2(e,Y2),{basename:m}=k.useContext(Ii),v,g=!1;if(typeof u=="string"&&uF.test(u)&&(v=u,lF))try{let y=new URL(window.location.href),I=u.startsWith("//")?new URL(y.protocol+u):new URL(u),R=$s(I.pathname,m);I.origin===y.origin&&R!=null?u=R+I.search+I.hash:g=!0}catch{}let E=_2(u,{relative:i}),p=cF(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function h(y){r&&r(y),y.defaultPrevented||p(y)}return k.createElement("a",ma({},f,{href:v||E,onClick:g||s?r:h,ref:n,target:l}))});var Dv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Dv||(Dv={}));var Lv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Lv||(Lv={}));function cF(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=_1(),u=Ic(),c=w1(t,{relative:o});return k.useCallback(d=>{if(q2(d,n)){d.preventDefault();let f=r!==void 0?r:mi(u)===mi(c);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}const dF=k.createContext({toggleColorMode:()=>{}});function fF(){const[t,e]=k.useState("light"),n=k.useMemo(()=>({toggleColorMode:()=>{e(i=>i==="light"?"dark":"light")}}),[]),r=k.useMemo(()=>Rw({palette:{mode:t,primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}}),[t]);return $e.jsx(dF.Provider,{value:n,children:$e.jsx(j2,{children:$e.jsxs(iP,{theme:r,children:[$e.jsx(V2,{}),$e.jsx(L2,{})]})})})}const sl=$e.jsx("h1",{children:" fallbackAll "}),hF=J2([{path:"/",element:$e.jsx(fF,{}),children:[{path:"/",async lazy(){return{Component:(await Fa(()=>import("./Main-MRFbFIKf.js"),__vite__mapDeps([0,1,2,3,4]))).default}},hydrateFallbackElement:sl},{path:"/register",async lazy(){return{Component:(await Fa(()=>import("./Register-Zfjw_iqa.js"),__vite__mapDeps([5,1,2,3,4]))).default}},hydrateFallbackElement:sl},{path:"/chatslist",async lazy(){return{Component:(await Fa(()=>import("./ChatsList-9tPVeBPu.js"),__vite__mapDeps([6,7,2,4]))).default}},hydrateFallbackElement:sl},{path:"/chat",async lazy(){return{Component:(await Fa(()=>import("./ChatRoom-VLjSoYaZ.js"),__vite__mapDeps([8,7,2,1]))).default}},hydrateFallbackElement:sl}]}]);kd.createRoot(document.getElementById("root")).render($e.jsx(Gv.StrictMode,{children:$e.jsx(oF,{router:hF})}));export{Pw as A,Rw as B,dF as C,mw as D,pF as E,fT as F,z2 as G,sk as H,Xh as I,mF as J,cw as K,CF as L,JT as M,gF as N,XT as O,Td as P,rp as Q,cT as R,Mi as S,Ql as T,$2 as U,yF as V,vi as _,ee as a,Vh as b,pw as c,Sn as d,wF as e,Es as f,Tl as g,U2 as h,_1 as i,$e as j,Fv as k,Sw as l,Vn as m,_F as n,Gv as o,vw as p,vF as q,k as r,cR as s,Ca as t,nP as u,ay as v,SF as w,Ic as x,Ew as y,Iw as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Main-MRFbFIKf.js","assets/Button-JB_lW9bo.js","assets/ButtonBase-7jkdPV5E.js","assets/TextField-dclkMSZl.js","assets/List-OdStRU6P.js","assets/Register-Zfjw_iqa.js","assets/ChatsList-9tPVeBPu.js","assets/createSvgIcon-x9BAF_kY.js","assets/ChatRoom-VLjSoYaZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
