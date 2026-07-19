(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function Nd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hs={exports:{}},Ro={},Ws={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mn=Symbol.for("react.element"),Ed=Symbol.for("react.portal"),Td=Symbol.for("react.fragment"),Ld=Symbol.for("react.strict_mode"),Rd=Symbol.for("react.profiler"),Id=Symbol.for("react.provider"),Pd=Symbol.for("react.context"),_d=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Md=Symbol.for("react.memo"),Fd=Symbol.for("react.lazy"),Na=Symbol.iterator;function Kd(e){return e===null||typeof e!="object"?null:(e=Na&&e[Na]||e["@@iterator"],typeof e=="function"?e:null)}var Vs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qs=Object.assign,Js={};function yr(e,t,r){this.props=e,this.context=t,this.refs=Js,this.updater=r||Vs}yr.prototype.isReactComponent={};yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xs(){}Xs.prototype=yr.prototype;function jl(e,t,r){this.props=e,this.context=t,this.refs=Js,this.updater=r||Vs}var Cl=jl.prototype=new Xs;Cl.constructor=jl;Qs(Cl,yr.prototype);Cl.isPureReactComponent=!0;var Ea=Array.isArray,Zs=Object.prototype.hasOwnProperty,Nl={current:null},qs={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,t,r){var n,o={},i=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Zs.call(t,n)&&!qs.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(a===1)o.children=r;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(n in a=e.defaultProps,a)o[n]===void 0&&(o[n]=a[n]);return{$$typeof:mn,type:e,key:i,ref:l,props:o,_owner:Nl.current}}function Dd(e,t){return{$$typeof:mn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function El(e){return typeof e=="object"&&e!==null&&e.$$typeof===mn}function Od(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ta=/\/+/g;function Zo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Od(""+e.key):t.toString(36)}function Yn(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case mn:case Ed:l=!0}}if(l)return l=e,o=o(l),e=n===""?"."+Zo(l,0):n,Ea(o)?(r="",e!=null&&(r=e.replace(Ta,"$&/")+"/"),Yn(o,t,r,"",function(c){return c})):o!=null&&(El(o)&&(o=Dd(o,r+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ta,"$&/")+"/")+e)),t.push(o)),1;if(l=0,n=n===""?".":n+":",Ea(e))for(var a=0;a<e.length;a++){i=e[a];var s=n+Zo(i,a);l+=Yn(i,t,r,s,o)}else if(s=Kd(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=n+Zo(i,a++),l+=Yn(i,t,r,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function jn(e,t,r){if(e==null)return e;var n=[],o=0;return Yn(e,n,"","",function(i){return t.call(r,i,o++)}),n}function $d(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Bn={transition:null},Ad={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Bn,ReactCurrentOwner:Nl};function tu(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:jn,forEach:function(e,t,r){jn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return jn(e,function(){t++}),t},toArray:function(e){return jn(e,function(t){return t})||[]},only:function(e){if(!El(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=yr;z.Fragment=Td;z.Profiler=Rd;z.PureComponent=jl;z.StrictMode=Ld;z.Suspense=zd;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ad;z.act=tu;z.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Qs({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Nl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Zs.call(t,s)&&!qs.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];n.children=a}return{$$typeof:mn,type:e.type,key:o,ref:i,props:n,_owner:l}};z.createContext=function(e){return e={$$typeof:Pd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Id,_context:e},e.Consumer=e};z.createElement=eu;z.createFactory=function(e){var t=eu.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:_d,render:e}};z.isValidElement=El;z.lazy=function(e){return{$$typeof:Fd,_payload:{_status:-1,_result:e},_init:$d}};z.memo=function(e,t){return{$$typeof:Md,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Bn.transition;Bn.transition={};try{e()}finally{Bn.transition=t}};z.unstable_act=tu;z.useCallback=function(e,t){return fe.current.useCallback(e,t)};z.useContext=function(e){return fe.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};z.useEffect=function(e,t){return fe.current.useEffect(e,t)};z.useId=function(){return fe.current.useId()};z.useImperativeHandle=function(e,t,r){return fe.current.useImperativeHandle(e,t,r)};z.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return fe.current.useMemo(e,t)};z.useReducer=function(e,t,r){return fe.current.useReducer(e,t,r)};z.useRef=function(e){return fe.current.useRef(e)};z.useState=function(e){return fe.current.useState(e)};z.useSyncExternalStore=function(e,t,r){return fe.current.useSyncExternalStore(e,t,r)};z.useTransition=function(){return fe.current.useTransition()};z.version="18.3.1";Ws.exports=z;var v=Ws.exports;const Vr=Nd(v);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud=v,Yd=Symbol.for("react.element"),Bd=Symbol.for("react.fragment"),Gd=Object.prototype.hasOwnProperty,Hd=Ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wd={key:!0,ref:!0,__self:!0,__source:!0};function ru(e,t,r){var n,o={},i=null,l=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)Gd.call(t,n)&&!Wd.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:Yd,type:e,key:i,ref:l,props:o,_owner:Hd.current}}Ro.Fragment=Bd;Ro.jsx=ru;Ro.jsxs=ru;Hs.exports=Ro;var u=Hs.exports,Li={},nu={exports:{}},Ce={},ou={exports:{}},iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,P){var _=L.length;L.push(P);e:for(;0<_;){var W=_-1>>>1,ee=L[W];if(0<o(ee,P))L[W]=P,L[_]=ee,_=W;else break e}}function r(L){return L.length===0?null:L[0]}function n(L){if(L.length===0)return null;var P=L[0],_=L.pop();if(_!==P){L[0]=_;e:for(var W=0,ee=L.length,kn=ee>>>1;W<kn;){var Lt=2*(W+1)-1,Xo=L[Lt],Rt=Lt+1,Sn=L[Rt];if(0>o(Xo,_))Rt<ee&&0>o(Sn,Xo)?(L[W]=Sn,L[Rt]=_,W=Rt):(L[W]=Xo,L[Lt]=_,W=Lt);else if(Rt<ee&&0>o(Sn,_))L[W]=Sn,L[Rt]=_,W=Rt;else break e}}return P}function o(L,P){var _=L.sortIndex-P.sortIndex;return _!==0?_:L.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],d=1,p=null,h=3,y=!1,w=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var P=r(c);P!==null;){if(P.callback===null)n(c);else if(P.startTime<=L)n(c),P.sortIndex=P.expirationTime,t(s,P);else break;P=r(c)}}function S(L){if(x=!1,g(L),!w)if(r(s)!==null)w=!0,st(C);else{var P=r(c);P!==null&&jr(S,P.startTime-L)}}function C(L,P){w=!1,x&&(x=!1,f(N),N=-1),y=!0;var _=h;try{for(g(P),p=r(s);p!==null&&(!(p.expirationTime>P)||L&&!$());){var W=p.callback;if(typeof W=="function"){p.callback=null,h=p.priorityLevel;var ee=W(p.expirationTime<=P);P=e.unstable_now(),typeof ee=="function"?p.callback=ee:p===r(s)&&n(s),g(P)}else n(s);p=r(s)}if(p!==null)var kn=!0;else{var Lt=r(c);Lt!==null&&jr(S,Lt.startTime-P),kn=!1}return kn}finally{p=null,h=_,y=!1}}var k=!1,b=null,N=-1,T=5,I=-1;function $(){return!(e.unstable_now()-I<T)}function J(){if(b!==null){var L=e.unstable_now();I=L;var P=!0;try{P=b(!0,L)}finally{P?ce():(k=!1,b=null)}}else k=!1}var ce;if(typeof m=="function")ce=function(){m(J)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,q=we.port2;we.port1.onmessage=J,ce=function(){q.postMessage(null)}}else ce=function(){j(J,0)};function st(L){b=L,k||(k=!0,ce())}function jr(L,P){N=j(function(){L(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,st(C))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(s)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var _=h;h=P;try{return L()}finally{h=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,P){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var _=h;h=L;try{return P()}finally{h=_}},e.unstable_scheduleCallback=function(L,P,_){var W=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?W+_:W):_=W,L){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=_+ee,L={id:d++,callback:P,priorityLevel:L,startTime:_,expirationTime:ee,sortIndex:-1},_>W?(L.sortIndex=_,t(c,L),r(s)===null&&L===r(c)&&(x?(f(N),N=-1):x=!0,jr(S,_-W))):(L.sortIndex=ee,t(s,L),w||y||(w=!0,st(C))),L},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(L){var P=h;return function(){var _=h;h=P;try{return L.apply(this,arguments)}finally{h=_}}}})(iu);ou.exports=iu;var Vd=ou.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd=v,je=Vd;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lu=new Set,Qr={};function Yt(e,t){dr(e,t),dr(e+"Capture",t)}function dr(e,t){for(Qr[e]=t,e=0;e<t.length;e++)lu.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ri=Object.prototype.hasOwnProperty,Jd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,La={},Ra={};function Xd(e){return Ri.call(Ra,e)?!0:Ri.call(La,e)?!1:Jd.test(e)?Ra[e]=!0:(La[e]=!0,!1)}function Zd(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qd(e,t,r,n){if(t===null||typeof t>"u"||Zd(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,r,n,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Tl=/[\-:]([a-z])/g;function Ll(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Tl,Ll);ie[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Tl,Ll);ie[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Tl,Ll);ie[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rl(e,t,r,n){var o=ie.hasOwnProperty(t)?ie[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qd(t,r,o,n)&&(r=null),n||o===null?Xd(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var lt=Qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cn=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),Il=Symbol.for("react.strict_mode"),Ii=Symbol.for("react.profiler"),au=Symbol.for("react.provider"),su=Symbol.for("react.context"),Pl=Symbol.for("react.forward_ref"),Pi=Symbol.for("react.suspense"),_i=Symbol.for("react.suspense_list"),_l=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),uu=Symbol.for("react.offscreen"),Ia=Symbol.iterator;function Cr(e){return e===null||typeof e!="object"?null:(e=Ia&&e[Ia]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,qo;function zr(e){if(qo===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);qo=t&&t[1]||""}return`
`+qo+e}var ei=!1;function ti(e,t){if(!e||ei)return"";ei=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=n.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{ei=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?zr(e):""}function ep(e){switch(e.tag){case 5:return zr(e.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 2:case 15:return e=ti(e.type,!1),e;case 11:return e=ti(e.type.render,!1),e;case 1:return e=ti(e.type,!0),e;default:return""}}function zi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case Ht:return"Portal";case Ii:return"Profiler";case Il:return"StrictMode";case Pi:return"Suspense";case _i:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case su:return(e.displayName||"Context")+".Consumer";case au:return(e._context.displayName||"Context")+".Provider";case Pl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _l:return t=e.displayName||null,t!==null?t:zi(e.type)||"Memo";case ct:t=e._payload,e=e._init;try{return zi(e(t))}catch{}}return null}function tp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zi(t);case 8:return t===Il?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rp(e){var t=cu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){n=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nn(e){e._valueTracker||(e._valueTracker=rp(e))}function du(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=cu(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function no(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mi(e,t){var r=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Pa(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=jt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pu(e,t){t=t.checked,t!=null&&Rl(e,"checked",t,!1)}function Fi(e,t){pu(e,t);var r=jt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ki(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ki(e,t.type,jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _a(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ki(e,t,r){(t!=="number"||no(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Mr=Array.isArray;function ir(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+jt(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Di(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function za(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(E(92));if(Mr(r)){if(1<r.length)throw Error(E(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:jt(r)}}function fu(e,t){var r=jt(t.value),n=jt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Ma(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var En,hu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(En=En||document.createElement("div"),En.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=En.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},np=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(e){np.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Or[t]=Or[e]})});function gu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Or.hasOwnProperty(e)&&Or[e]?(""+t).trim():t+"px"}function vu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=gu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var op=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $i(e,t){if(t){if(op[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Ai(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ui=null;function zl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yi=null,lr=null,ar=null;function Fa(e){if(e=vn(e)){if(typeof Yi!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Mo(t),Yi(e.stateNode,e.type,t))}}function yu(e){lr?ar?ar.push(e):ar=[e]:lr=e}function xu(){if(lr){var e=lr,t=ar;if(ar=lr=null,Fa(e),t)for(e=0;e<t.length;e++)Fa(t[e])}}function wu(e,t){return e(t)}function bu(){}var ri=!1;function ku(e,t,r){if(ri)return e(t,r);ri=!0;try{return wu(e,t,r)}finally{ri=!1,(lr!==null||ar!==null)&&(bu(),xu())}}function Xr(e,t){var r=e.stateNode;if(r===null)return null;var n=Mo(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(E(231,t,typeof r));return r}var Bi=!1;if(tt)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){Bi=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{Bi=!1}function ip(e,t,r,n,o,i,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(d){this.onError(d)}}var $r=!1,oo=null,io=!1,Gi=null,lp={onError:function(e){$r=!0,oo=e}};function ap(e,t,r,n,o,i,l,a,s){$r=!1,oo=null,ip.apply(lp,arguments)}function sp(e,t,r,n,o,i,l,a,s){if(ap.apply(this,arguments),$r){if($r){var c=oo;$r=!1,oo=null}else throw Error(E(198));io||(io=!0,Gi=c)}}function Bt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Su(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ka(e){if(Bt(e)!==e)throw Error(E(188))}function up(e){var t=e.alternate;if(!t){if(t=Bt(e),t===null)throw Error(E(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return Ka(o),e;if(i===n)return Ka(o),t;i=i.sibling}throw Error(E(188))}if(r.return!==n.return)r=o,n=i;else{for(var l=!1,a=o.child;a;){if(a===r){l=!0,r=o,n=i;break}if(a===n){l=!0,n=o,r=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===r){l=!0,r=i,n=o;break}if(a===n){l=!0,n=i,r=o;break}a=a.sibling}if(!l)throw Error(E(189))}}if(r.alternate!==n)throw Error(E(190))}if(r.tag!==3)throw Error(E(188));return r.stateNode.current===r?e:t}function ju(e){return e=up(e),e!==null?Cu(e):null}function Cu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cu(e);if(t!==null)return t;e=e.sibling}return null}var Nu=je.unstable_scheduleCallback,Da=je.unstable_cancelCallback,cp=je.unstable_shouldYield,dp=je.unstable_requestPaint,V=je.unstable_now,pp=je.unstable_getCurrentPriorityLevel,Ml=je.unstable_ImmediatePriority,Eu=je.unstable_UserBlockingPriority,lo=je.unstable_NormalPriority,fp=je.unstable_LowPriority,Tu=je.unstable_IdlePriority,Io=null,He=null;function mp(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Io,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:vp,hp=Math.log,gp=Math.LN2;function vp(e){return e>>>=0,e===0?32:31-(hp(e)/gp|0)|0}var Tn=64,Ln=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ao(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,l=r&268435455;if(l!==0){var a=l&~o;a!==0?n=Fr(a):(i&=l,i!==0&&(n=Fr(i)))}else l=r&~o,l!==0?n=Fr(l):i!==0&&(n=Fr(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Oe(t),o=1<<r,n|=e[r],t&=~o;return n}function yp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Oe(i),a=1<<l,s=o[l];s===-1?(!(a&r)||a&n)&&(o[l]=yp(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Hi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lu(){var e=Tn;return Tn<<=1,!(Tn&4194240)&&(Tn=64),e}function ni(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function hn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=r}function wp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-Oe(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function Fl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Oe(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var F=0;function Ru(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Iu,Kl,Pu,_u,zu,Wi=!1,Rn=[],gt=null,vt=null,yt=null,Zr=new Map,qr=new Map,pt=[],bp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oa(e,t){switch(e){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":vt=null;break;case"mouseover":case"mouseout":yt=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(t.pointerId)}}function Er(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=vn(t),t!==null&&Kl(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function kp(e,t,r,n,o){switch(t){case"focusin":return gt=Er(gt,e,t,r,n,o),!0;case"dragenter":return vt=Er(vt,e,t,r,n,o),!0;case"mouseover":return yt=Er(yt,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return Zr.set(i,Er(Zr.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,qr.set(i,Er(qr.get(i)||null,e,t,r,n,o)),!0}return!1}function Mu(e){var t=_t(e.target);if(t!==null){var r=Bt(t);if(r!==null){if(t=r.tag,t===13){if(t=Su(r),t!==null){e.blockedOn=t,zu(e.priority,function(){Pu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Vi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ui=n,r.target.dispatchEvent(n),Ui=null}else return t=vn(r),t!==null&&Kl(t),e.blockedOn=r,!1;t.shift()}return!0}function $a(e,t,r){Gn(e)&&r.delete(t)}function Sp(){Wi=!1,gt!==null&&Gn(gt)&&(gt=null),vt!==null&&Gn(vt)&&(vt=null),yt!==null&&Gn(yt)&&(yt=null),Zr.forEach($a),qr.forEach($a)}function Tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Wi||(Wi=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Sp)))}function en(e){function t(o){return Tr(o,e)}if(0<Rn.length){Tr(Rn[0],e);for(var r=1;r<Rn.length;r++){var n=Rn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(gt!==null&&Tr(gt,e),vt!==null&&Tr(vt,e),yt!==null&&Tr(yt,e),Zr.forEach(t),qr.forEach(t),r=0;r<pt.length;r++)n=pt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<pt.length&&(r=pt[0],r.blockedOn===null);)Mu(r),r.blockedOn===null&&pt.shift()}var sr=lt.ReactCurrentBatchConfig,so=!0;function jp(e,t,r,n){var o=F,i=sr.transition;sr.transition=null;try{F=1,Dl(e,t,r,n)}finally{F=o,sr.transition=i}}function Cp(e,t,r,n){var o=F,i=sr.transition;sr.transition=null;try{F=4,Dl(e,t,r,n)}finally{F=o,sr.transition=i}}function Dl(e,t,r,n){if(so){var o=Vi(e,t,r,n);if(o===null)fi(e,t,n,uo,r),Oa(e,n);else if(kp(o,e,t,r,n))n.stopPropagation();else if(Oa(e,n),t&4&&-1<bp.indexOf(e)){for(;o!==null;){var i=vn(o);if(i!==null&&Iu(i),i=Vi(e,t,r,n),i===null&&fi(e,t,n,uo,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else fi(e,t,n,null,r)}}var uo=null;function Vi(e,t,r,n){if(uo=null,e=zl(n),e=_t(e),e!==null)if(t=Bt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Su(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return uo=e,null}function Fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pp()){case Ml:return 1;case Eu:return 4;case lo:case fp:return 16;case Tu:return 536870912;default:return 16}default:return 16}}var mt=null,Ol=null,Hn=null;function Ku(){if(Hn)return Hn;var e,t=Ol,r=t.length,n,o="value"in mt?mt.value:mt.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var l=r-e;for(n=1;n<=l&&t[r-n]===o[i-n];n++);return Hn=o.slice(e,1<n?1-n:void 0)}function Wn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function In(){return!0}function Aa(){return!1}function Ne(e){function t(r,n,o,i,l){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?In:Aa,this.isPropagationStopped=Aa,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=In)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=In)},persist:function(){},isPersistent:In}),t}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=Ne(xr),gn=G({},xr,{view:0,detail:0}),Np=Ne(gn),oi,ii,Lr,Po=G({},gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Al,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(oi=e.screenX-Lr.screenX,ii=e.screenY-Lr.screenY):ii=oi=0,Lr=e),oi)},movementY:function(e){return"movementY"in e?e.movementY:ii}}),Ua=Ne(Po),Ep=G({},Po,{dataTransfer:0}),Tp=Ne(Ep),Lp=G({},gn,{relatedTarget:0}),li=Ne(Lp),Rp=G({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ip=Ne(Rp),Pp=G({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_p=Ne(Pp),zp=G({},xr,{data:0}),Ya=Ne(zp),Mp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kp[e])?!!t[e]:!1}function Al(){return Dp}var Op=G({},gn,{key:function(e){if(e.key){var t=Mp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Al,charCode:function(e){return e.type==="keypress"?Wn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$p=Ne(Op),Ap=G({},Po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ba=Ne(Ap),Up=G({},gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Al}),Yp=Ne(Up),Bp=G({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gp=Ne(Bp),Hp=G({},Po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wp=Ne(Hp),Vp=[9,13,27,32],Ul=tt&&"CompositionEvent"in window,Ar=null;tt&&"documentMode"in document&&(Ar=document.documentMode);var Qp=tt&&"TextEvent"in window&&!Ar,Du=tt&&(!Ul||Ar&&8<Ar&&11>=Ar),Ga=" ",Ha=!1;function Ou(e,t){switch(e){case"keyup":return Vp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $u(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function Jp(e,t){switch(e){case"compositionend":return $u(t);case"keypress":return t.which!==32?null:(Ha=!0,Ga);case"textInput":return e=t.data,e===Ga&&Ha?null:e;default:return null}}function Xp(e,t){if(Vt)return e==="compositionend"||!Ul&&Ou(e,t)?(e=Ku(),Hn=Ol=mt=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Du&&t.locale!=="ko"?null:t.data;default:return null}}var Zp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zp[e.type]:t==="textarea"}function Au(e,t,r,n){yu(n),t=co(t,"onChange"),0<t.length&&(r=new $l("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Ur=null,tn=null;function qp(e){Zu(e,0)}function _o(e){var t=Xt(e);if(du(t))return e}function ef(e,t){if(e==="change")return t}var Uu=!1;if(tt){var ai;if(tt){var si="oninput"in document;if(!si){var Va=document.createElement("div");Va.setAttribute("oninput","return;"),si=typeof Va.oninput=="function"}ai=si}else ai=!1;Uu=ai&&(!document.documentMode||9<document.documentMode)}function Qa(){Ur&&(Ur.detachEvent("onpropertychange",Yu),tn=Ur=null)}function Yu(e){if(e.propertyName==="value"&&_o(tn)){var t=[];Au(t,tn,e,zl(e)),ku(qp,t)}}function tf(e,t,r){e==="focusin"?(Qa(),Ur=t,tn=r,Ur.attachEvent("onpropertychange",Yu)):e==="focusout"&&Qa()}function rf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _o(tn)}function nf(e,t){if(e==="click")return _o(t)}function of(e,t){if(e==="input"||e==="change")return _o(t)}function lf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:lf;function rn(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!Ri.call(t,o)||!Ue(e[o],t[o]))return!1}return!0}function Ja(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xa(e,t){var r=Ja(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ja(r)}}function Bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gu(){for(var e=window,t=no();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=no(e.document)}return t}function Yl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function af(e){var t=Gu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Bu(r.ownerDocument.documentElement,r)){if(n!==null&&Yl(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=Xa(r,i);var l=Xa(r,n);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sf=tt&&"documentMode"in document&&11>=document.documentMode,Qt=null,Qi=null,Yr=null,Ji=!1;function Za(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ji||Qt==null||Qt!==no(n)||(n=Qt,"selectionStart"in n&&Yl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Yr&&rn(Yr,n)||(Yr=n,n=co(Qi,"onSelect"),0<n.length&&(t=new $l("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Qt)))}function Pn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Jt={animationend:Pn("Animation","AnimationEnd"),animationiteration:Pn("Animation","AnimationIteration"),animationstart:Pn("Animation","AnimationStart"),transitionend:Pn("Transition","TransitionEnd")},ui={},Hu={};tt&&(Hu=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function zo(e){if(ui[e])return ui[e];if(!Jt[e])return e;var t=Jt[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Hu)return ui[e]=t[r];return e}var Wu=zo("animationend"),Vu=zo("animationiteration"),Qu=zo("animationstart"),Ju=zo("transitionend"),Xu=new Map,qa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nt(e,t){Xu.set(e,t),Yt(t,[e])}for(var ci=0;ci<qa.length;ci++){var di=qa[ci],uf=di.toLowerCase(),cf=di[0].toUpperCase()+di.slice(1);Nt(uf,"on"+cf)}Nt(Wu,"onAnimationEnd");Nt(Vu,"onAnimationIteration");Nt(Qu,"onAnimationStart");Nt("dblclick","onDoubleClick");Nt("focusin","onFocus");Nt("focusout","onBlur");Nt(Ju,"onTransitionEnd");dr("onMouseEnter",["mouseout","mouseover"]);dr("onMouseLeave",["mouseout","mouseover"]);dr("onPointerEnter",["pointerout","pointerover"]);dr("onPointerLeave",["pointerout","pointerover"]);Yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),df=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));function es(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,sp(n,t,void 0,e),e.currentTarget=null}function Zu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var l=n.length-1;0<=l;l--){var a=n[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;es(o,a,c),i=s}else for(l=0;l<n.length;l++){if(a=n[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;es(o,a,c),i=s}}}if(io)throw e=Gi,io=!1,Gi=null,e}function D(e,t){var r=t[tl];r===void 0&&(r=t[tl]=new Set);var n=e+"__bubble";r.has(n)||(qu(t,e,2,!1),r.add(n))}function pi(e,t,r){var n=0;t&&(n|=4),qu(r,e,n,t)}var _n="_reactListening"+Math.random().toString(36).slice(2);function nn(e){if(!e[_n]){e[_n]=!0,lu.forEach(function(r){r!=="selectionchange"&&(df.has(r)||pi(r,!1,e),pi(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_n]||(t[_n]=!0,pi("selectionchange",!1,t))}}function qu(e,t,r,n){switch(Fu(t)){case 1:var o=jp;break;case 4:o=Cp;break;default:o=Dl}r=o.bind(null,t,r,e),o=void 0,!Bi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function fi(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var a=n.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=n.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=_t(a),l===null)return;if(s=l.tag,s===5||s===6){n=i=l;continue e}a=a.parentNode}}n=n.return}ku(function(){var c=i,d=zl(r),p=[];e:{var h=Xu.get(e);if(h!==void 0){var y=$l,w=e;switch(e){case"keypress":if(Wn(r)===0)break e;case"keydown":case"keyup":y=$p;break;case"focusin":w="focus",y=li;break;case"focusout":w="blur",y=li;break;case"beforeblur":case"afterblur":y=li;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ua;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Tp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Yp;break;case Wu:case Vu:case Qu:y=Ip;break;case Ju:y=Gp;break;case"scroll":y=Np;break;case"wheel":y=Wp;break;case"copy":case"cut":case"paste":y=_p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ba}var x=(t&4)!==0,j=!x&&e==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var m=c,g;m!==null;){g=m;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,f!==null&&(S=Xr(m,f),S!=null&&x.push(on(m,S,g)))),j)break;m=m.return}0<x.length&&(h=new y(h,w,null,r,d),p.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&r!==Ui&&(w=r.relatedTarget||r.fromElement)&&(_t(w)||w[rt]))break e;if((y||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,y?(w=r.relatedTarget||r.toElement,y=c,w=w?_t(w):null,w!==null&&(j=Bt(w),w!==j||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(x=Ua,S="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ba,S="onPointerLeave",f="onPointerEnter",m="pointer"),j=y==null?h:Xt(y),g=w==null?h:Xt(w),h=new x(S,m+"leave",y,r,d),h.target=j,h.relatedTarget=g,S=null,_t(d)===c&&(x=new x(f,m+"enter",w,r,d),x.target=g,x.relatedTarget=j,S=x),j=S,y&&w)t:{for(x=y,f=w,m=0,g=x;g;g=Gt(g))m++;for(g=0,S=f;S;S=Gt(S))g++;for(;0<m-g;)x=Gt(x),m--;for(;0<g-m;)f=Gt(f),g--;for(;m--;){if(x===f||f!==null&&x===f.alternate)break t;x=Gt(x),f=Gt(f)}x=null}else x=null;y!==null&&ts(p,h,y,x,!1),w!==null&&j!==null&&ts(p,j,w,x,!0)}}e:{if(h=c?Xt(c):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var C=ef;else if(Wa(h))if(Uu)C=of;else{C=rf;var k=tf}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=nf);if(C&&(C=C(e,c))){Au(p,C,r,d);break e}k&&k(e,h,c),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&Ki(h,"number",h.value)}switch(k=c?Xt(c):window,e){case"focusin":(Wa(k)||k.contentEditable==="true")&&(Qt=k,Qi=c,Yr=null);break;case"focusout":Yr=Qi=Qt=null;break;case"mousedown":Ji=!0;break;case"contextmenu":case"mouseup":case"dragend":Ji=!1,Za(p,r,d);break;case"selectionchange":if(sf)break;case"keydown":case"keyup":Za(p,r,d)}var b;if(Ul)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Vt?Ou(e,r)&&(N="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(N="onCompositionStart");N&&(Du&&r.locale!=="ko"&&(Vt||N!=="onCompositionStart"?N==="onCompositionEnd"&&Vt&&(b=Ku()):(mt=d,Ol="value"in mt?mt.value:mt.textContent,Vt=!0)),k=co(c,N),0<k.length&&(N=new Ya(N,e,null,r,d),p.push({event:N,listeners:k}),b?N.data=b:(b=$u(r),b!==null&&(N.data=b)))),(b=Qp?Jp(e,r):Xp(e,r))&&(c=co(c,"onBeforeInput"),0<c.length&&(d=new Ya("onBeforeInput","beforeinput",null,r,d),p.push({event:d,listeners:c}),d.data=b))}Zu(p,t)})}function on(e,t,r){return{instance:e,listener:t,currentTarget:r}}function co(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Xr(e,r),i!=null&&n.unshift(on(e,i,o)),i=Xr(e,t),i!=null&&n.push(on(e,i,o))),e=e.return}return n}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ts(e,t,r,n,o){for(var i=t._reactName,l=[];r!==null&&r!==n;){var a=r,s=a.alternate,c=a.stateNode;if(s!==null&&s===n)break;a.tag===5&&c!==null&&(a=c,o?(s=Xr(r,i),s!=null&&l.unshift(on(r,s,a))):o||(s=Xr(r,i),s!=null&&l.push(on(r,s,a)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var pf=/\r\n?/g,ff=/\u0000|\uFFFD/g;function rs(e){return(typeof e=="string"?e:""+e).replace(pf,`
`).replace(ff,"")}function zn(e,t,r){if(t=rs(t),rs(e)!==t&&r)throw Error(E(425))}function po(){}var Xi=null,Zi=null;function qi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var el=typeof setTimeout=="function"?setTimeout:void 0,mf=typeof clearTimeout=="function"?clearTimeout:void 0,ns=typeof Promise=="function"?Promise:void 0,hf=typeof queueMicrotask=="function"?queueMicrotask:typeof ns<"u"?function(e){return ns.resolve(null).then(e).catch(gf)}:el;function gf(e){setTimeout(function(){throw e})}function mi(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),en(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);en(t)}function xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function os(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),Ge="__reactFiber$"+wr,ln="__reactProps$"+wr,rt="__reactContainer$"+wr,tl="__reactEvents$"+wr,vf="__reactListeners$"+wr,yf="__reactHandles$"+wr;function _t(e){var t=e[Ge];if(t)return t;for(var r=e.parentNode;r;){if(t=r[rt]||r[Ge]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=os(e);e!==null;){if(r=e[Ge])return r;e=os(e)}return t}e=r,r=e.parentNode}return null}function vn(e){return e=e[Ge]||e[rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Mo(e){return e[ln]||null}var rl=[],Zt=-1;function Et(e){return{current:e}}function O(e){0>Zt||(e.current=rl[Zt],rl[Zt]=null,Zt--)}function K(e,t){Zt++,rl[Zt]=e.current,e.current=t}var Ct={},ue=Et(Ct),ve=Et(!1),Dt=Ct;function pr(e,t){var r=e.type.contextTypes;if(!r)return Ct;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ye(e){return e=e.childContextTypes,e!=null}function fo(){O(ve),O(ue)}function is(e,t,r){if(ue.current!==Ct)throw Error(E(168));K(ue,t),K(ve,r)}function ec(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(E(108,tp(e)||"Unknown",o));return G({},r,n)}function mo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,Dt=ue.current,K(ue,e),K(ve,ve.current),!0}function ls(e,t,r){var n=e.stateNode;if(!n)throw Error(E(169));r?(e=ec(e,t,Dt),n.__reactInternalMemoizedMergedChildContext=e,O(ve),O(ue),K(ue,e)):O(ve),K(ve,r)}var Xe=null,Fo=!1,hi=!1;function tc(e){Xe===null?Xe=[e]:Xe.push(e)}function xf(e){Fo=!0,tc(e)}function Tt(){if(!hi&&Xe!==null){hi=!0;var e=0,t=F;try{var r=Xe;for(F=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Xe=null,Fo=!1}catch(o){throw Xe!==null&&(Xe=Xe.slice(e+1)),Nu(Ml,Tt),o}finally{F=t,hi=!1}}return null}var qt=[],er=0,ho=null,go=0,Ee=[],Te=0,Ot=null,Ze=1,qe="";function It(e,t){qt[er++]=go,qt[er++]=ho,ho=e,go=t}function rc(e,t,r){Ee[Te++]=Ze,Ee[Te++]=qe,Ee[Te++]=Ot,Ot=e;var n=Ze;e=qe;var o=32-Oe(n)-1;n&=~(1<<o),r+=1;var i=32-Oe(t)+o;if(30<i){var l=o-o%5;i=(n&(1<<l)-1).toString(32),n>>=l,o-=l,Ze=1<<32-Oe(t)+o|r<<o|n,qe=i+e}else Ze=1<<i|r<<o|n,qe=e}function Bl(e){e.return!==null&&(It(e,1),rc(e,1,0))}function Gl(e){for(;e===ho;)ho=qt[--er],qt[er]=null,go=qt[--er],qt[er]=null;for(;e===Ot;)Ot=Ee[--Te],Ee[Te]=null,qe=Ee[--Te],Ee[Te]=null,Ze=Ee[--Te],Ee[Te]=null}var Se=null,ke=null,A=!1,De=null;function nc(e,t){var r=Le(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function as(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,ke=xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ot!==null?{id:Ze,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Le(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Se=e,ke=null,!0):!1;default:return!1}}function nl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ol(e){if(A){var t=ke;if(t){var r=t;if(!as(e,t)){if(nl(e))throw Error(E(418));t=xt(r.nextSibling);var n=Se;t&&as(e,t)?nc(n,r):(e.flags=e.flags&-4097|2,A=!1,Se=e)}}else{if(nl(e))throw Error(E(418));e.flags=e.flags&-4097|2,A=!1,Se=e}}}function ss(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Mn(e){if(e!==Se)return!1;if(!A)return ss(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qi(e.type,e.memoizedProps)),t&&(t=ke)){if(nl(e))throw oc(),Error(E(418));for(;t;)nc(e,t),t=xt(t.nextSibling)}if(ss(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ke=xt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=Se?xt(e.stateNode.nextSibling):null;return!0}function oc(){for(var e=ke;e;)e=xt(e.nextSibling)}function fr(){ke=Se=null,A=!1}function Hl(e){De===null?De=[e]:De.push(e)}var wf=lt.ReactCurrentBatchConfig;function Rr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(E(309));var n=r.stateNode}if(!n)throw Error(E(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!r._owner)throw Error(E(290,e))}return e}function Fn(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function us(e){var t=e._init;return t(e._payload)}function ic(e){function t(f,m){if(e){var g=f.deletions;g===null?(f.deletions=[m],f.flags|=16):g.push(m)}}function r(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function n(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function o(f,m){return f=St(f,m),f.index=0,f.sibling=null,f}function i(f,m,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<m?(f.flags|=2,m):g):(f.flags|=2,m)):(f.flags|=1048576,m)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,m,g,S){return m===null||m.tag!==6?(m=ki(g,f.mode,S),m.return=f,m):(m=o(m,g),m.return=f,m)}function s(f,m,g,S){var C=g.type;return C===Wt?d(f,m,g.props.children,S,g.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ct&&us(C)===m.type)?(S=o(m,g.props),S.ref=Rr(f,m,g),S.return=f,S):(S=eo(g.type,g.key,g.props,null,f.mode,S),S.ref=Rr(f,m,g),S.return=f,S)}function c(f,m,g,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Si(g,f.mode,S),m.return=f,m):(m=o(m,g.children||[]),m.return=f,m)}function d(f,m,g,S,C){return m===null||m.tag!==7?(m=Kt(g,f.mode,S,C),m.return=f,m):(m=o(m,g),m.return=f,m)}function p(f,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ki(""+m,f.mode,g),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Cn:return g=eo(m.type,m.key,m.props,null,f.mode,g),g.ref=Rr(f,null,m),g.return=f,g;case Ht:return m=Si(m,f.mode,g),m.return=f,m;case ct:var S=m._init;return p(f,S(m._payload),g)}if(Mr(m)||Cr(m))return m=Kt(m,f.mode,g,null),m.return=f,m;Fn(f,m)}return null}function h(f,m,g,S){var C=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(f,m,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Cn:return g.key===C?s(f,m,g,S):null;case Ht:return g.key===C?c(f,m,g,S):null;case ct:return C=g._init,h(f,m,C(g._payload),S)}if(Mr(g)||Cr(g))return C!==null?null:d(f,m,g,S,null);Fn(f,g)}return null}function y(f,m,g,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(g)||null,a(m,f,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Cn:return f=f.get(S.key===null?g:S.key)||null,s(m,f,S,C);case Ht:return f=f.get(S.key===null?g:S.key)||null,c(m,f,S,C);case ct:var k=S._init;return y(f,m,g,k(S._payload),C)}if(Mr(S)||Cr(S))return f=f.get(g)||null,d(m,f,S,C,null);Fn(m,S)}return null}function w(f,m,g,S){for(var C=null,k=null,b=m,N=m=0,T=null;b!==null&&N<g.length;N++){b.index>N?(T=b,b=null):T=b.sibling;var I=h(f,b,g[N],S);if(I===null){b===null&&(b=T);break}e&&b&&I.alternate===null&&t(f,b),m=i(I,m,N),k===null?C=I:k.sibling=I,k=I,b=T}if(N===g.length)return r(f,b),A&&It(f,N),C;if(b===null){for(;N<g.length;N++)b=p(f,g[N],S),b!==null&&(m=i(b,m,N),k===null?C=b:k.sibling=b,k=b);return A&&It(f,N),C}for(b=n(f,b);N<g.length;N++)T=y(b,f,N,g[N],S),T!==null&&(e&&T.alternate!==null&&b.delete(T.key===null?N:T.key),m=i(T,m,N),k===null?C=T:k.sibling=T,k=T);return e&&b.forEach(function($){return t(f,$)}),A&&It(f,N),C}function x(f,m,g,S){var C=Cr(g);if(typeof C!="function")throw Error(E(150));if(g=C.call(g),g==null)throw Error(E(151));for(var k=C=null,b=m,N=m=0,T=null,I=g.next();b!==null&&!I.done;N++,I=g.next()){b.index>N?(T=b,b=null):T=b.sibling;var $=h(f,b,I.value,S);if($===null){b===null&&(b=T);break}e&&b&&$.alternate===null&&t(f,b),m=i($,m,N),k===null?C=$:k.sibling=$,k=$,b=T}if(I.done)return r(f,b),A&&It(f,N),C;if(b===null){for(;!I.done;N++,I=g.next())I=p(f,I.value,S),I!==null&&(m=i(I,m,N),k===null?C=I:k.sibling=I,k=I);return A&&It(f,N),C}for(b=n(f,b);!I.done;N++,I=g.next())I=y(b,f,N,I.value,S),I!==null&&(e&&I.alternate!==null&&b.delete(I.key===null?N:I.key),m=i(I,m,N),k===null?C=I:k.sibling=I,k=I);return e&&b.forEach(function(J){return t(f,J)}),A&&It(f,N),C}function j(f,m,g,S){if(typeof g=="object"&&g!==null&&g.type===Wt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Cn:e:{for(var C=g.key,k=m;k!==null;){if(k.key===C){if(C=g.type,C===Wt){if(k.tag===7){r(f,k.sibling),m=o(k,g.props.children),m.return=f,f=m;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ct&&us(C)===k.type){r(f,k.sibling),m=o(k,g.props),m.ref=Rr(f,k,g),m.return=f,f=m;break e}r(f,k);break}else t(f,k);k=k.sibling}g.type===Wt?(m=Kt(g.props.children,f.mode,S,g.key),m.return=f,f=m):(S=eo(g.type,g.key,g.props,null,f.mode,S),S.ref=Rr(f,m,g),S.return=f,f=S)}return l(f);case Ht:e:{for(k=g.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){r(f,m.sibling),m=o(m,g.children||[]),m.return=f,f=m;break e}else{r(f,m);break}else t(f,m);m=m.sibling}m=Si(g,f.mode,S),m.return=f,f=m}return l(f);case ct:return k=g._init,j(f,m,k(g._payload),S)}if(Mr(g))return w(f,m,g,S);if(Cr(g))return x(f,m,g,S);Fn(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(r(f,m.sibling),m=o(m,g),m.return=f,f=m):(r(f,m),m=ki(g,f.mode,S),m.return=f,f=m),l(f)):r(f,m)}return j}var mr=ic(!0),lc=ic(!1),vo=Et(null),yo=null,tr=null,Wl=null;function Vl(){Wl=tr=yo=null}function Ql(e){var t=vo.current;O(vo),e._currentValue=t}function il(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function ur(e,t){yo=e,Wl=tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(Wl!==e)if(e={context:e,memoizedValue:t,next:null},tr===null){if(yo===null)throw Error(E(308));tr=e,yo.dependencies={lanes:0,firstContext:e}}else tr=tr.next=e;return t}var zt=null;function Jl(e){zt===null?zt=[e]:zt.push(e)}function ac(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,Jl(t)):(r.next=o.next,o.next=r),t.interleaved=r,nt(e,n)}function nt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var dt=!1;function Xl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,M&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,nt(e,r)}return o=n.interleaved,o===null?(t.next=t,Jl(n)):(t.next=o.next,o.next=t),n.interleaved=t,nt(e,r)}function Vn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Fl(e,r)}}function cs(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function xo(e,t,r,n){var o=e.updateQueue;dt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?i=c:l.next=c,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;l=0,d=c=s=null,a=i;do{var h=a.lane,y=a.eventTime;if((n&h)===h){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,x=a;switch(h=t,y=r,x.tag){case 1:if(w=x.payload,typeof w=="function"){p=w.call(y,p,h);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,h=typeof w=="function"?w.call(y,p,h):w,h==null)break e;p=G({},p,h);break e;case 2:dt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=y,s=p):d=d.next=y,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(d===null&&(s=p),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);At|=l,e.lanes=l,e.memoizedState=p}}function ds(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(E(191,o));o.call(n)}}}var yn={},We=Et(yn),an=Et(yn),sn=Et(yn);function Mt(e){if(e===yn)throw Error(E(174));return e}function Zl(e,t){switch(K(sn,t),K(an,e),K(We,yn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oi(t,e)}O(We),K(We,t)}function hr(){O(We),O(an),O(sn)}function uc(e){Mt(sn.current);var t=Mt(We.current),r=Oi(t,e.type);t!==r&&(K(an,e),K(We,r))}function ql(e){an.current===e&&(O(We),O(an))}var U=Et(0);function wo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gi=[];function ea(){for(var e=0;e<gi.length;e++)gi[e]._workInProgressVersionPrimary=null;gi.length=0}var Qn=lt.ReactCurrentDispatcher,vi=lt.ReactCurrentBatchConfig,$t=0,Y=null,X=null,te=null,bo=!1,Br=!1,un=0,bf=0;function le(){throw Error(E(321))}function ta(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ue(e[r],t[r]))return!1;return!0}function ra(e,t,r,n,o,i){if($t=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qn.current=e===null||e.memoizedState===null?Cf:Nf,e=r(n,o),Br){i=0;do{if(Br=!1,un=0,25<=i)throw Error(E(301));i+=1,te=X=null,t.updateQueue=null,Qn.current=Ef,e=r(n,o)}while(Br)}if(Qn.current=ko,t=X!==null&&X.next!==null,$t=0,te=X=Y=null,bo=!1,t)throw Error(E(300));return e}function na(){var e=un!==0;return un=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?Y.memoizedState=te=e:te=te.next=e,te}function _e(){if(X===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=te===null?Y.memoizedState:te.next;if(t!==null)te=t,X=e;else{if(e===null)throw Error(E(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},te===null?Y.memoizedState=te=e:te=te.next=e}return te}function cn(e,t){return typeof t=="function"?t(e):t}function yi(e){var t=_e(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=X,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var a=l=null,s=null,c=i;do{var d=c.lane;if(($t&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=p,l=n):s=s.next=p,Y.lanes|=d,At|=d}c=c.next}while(c!==null&&c!==i);s===null?l=n:s.next=a,Ue(n,t.memoizedState)||(ge=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=s,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,Y.lanes|=i,At|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function xi(e){var t=_e(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ue(i,t.memoizedState)||(ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function cc(){}function dc(e,t){var r=Y,n=_e(),o=t(),i=!Ue(n.memoizedState,o);if(i&&(n.memoizedState=o,ge=!0),n=n.queue,oa(mc.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||te!==null&&te.memoizedState.tag&1){if(r.flags|=2048,dn(9,fc.bind(null,r,n,o,t),void 0,null),re===null)throw Error(E(349));$t&30||pc(r,t,o)}return o}function pc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function fc(e,t,r,n){t.value=r,t.getSnapshot=n,hc(t)&&gc(e)}function mc(e,t,r){return r(function(){hc(t)&&gc(e)})}function hc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ue(e,r)}catch{return!0}}function gc(e){var t=nt(e,1);t!==null&&$e(t,e,1,-1)}function ps(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:e},t.queue=e,e=e.dispatch=jf.bind(null,Y,e),[t.memoizedState,e]}function dn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function vc(){return _e().memoizedState}function Jn(e,t,r,n){var o=Be();Y.flags|=e,o.memoizedState=dn(1|t,r,void 0,n===void 0?null:n)}function Ko(e,t,r,n){var o=_e();n=n===void 0?null:n;var i=void 0;if(X!==null){var l=X.memoizedState;if(i=l.destroy,n!==null&&ta(n,l.deps)){o.memoizedState=dn(t,r,i,n);return}}Y.flags|=e,o.memoizedState=dn(1|t,r,i,n)}function fs(e,t){return Jn(8390656,8,e,t)}function oa(e,t){return Ko(2048,8,e,t)}function yc(e,t){return Ko(4,2,e,t)}function xc(e,t){return Ko(4,4,e,t)}function wc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bc(e,t,r){return r=r!=null?r.concat([e]):null,Ko(4,4,wc.bind(null,t,e),r)}function ia(){}function kc(e,t){var r=_e();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ta(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Sc(e,t){var r=_e();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ta(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function jc(e,t,r){return $t&21?(Ue(r,t)||(r=Lu(),Y.lanes|=r,At|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=r)}function kf(e,t){var r=F;F=r!==0&&4>r?r:4,e(!0);var n=vi.transition;vi.transition={};try{e(!1),t()}finally{F=r,vi.transition=n}}function Cc(){return _e().memoizedState}function Sf(e,t,r){var n=kt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Nc(e))Ec(t,r);else if(r=ac(e,t,r,n),r!==null){var o=pe();$e(r,e,n,o),Tc(r,t,n)}}function jf(e,t,r){var n=kt(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Nc(e))Ec(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,r);if(o.hasEagerState=!0,o.eagerState=a,Ue(a,l)){var s=t.interleaved;s===null?(o.next=o,Jl(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}r=ac(e,t,o,n),r!==null&&(o=pe(),$e(r,e,n,o),Tc(r,t,n))}}function Nc(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Ec(e,t){Br=bo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Tc(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Fl(e,r)}}var ko={readContext:Pe,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},Cf={readContext:Pe,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:fs,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Jn(4194308,4,wc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Jn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jn(4,2,e,t)},useMemo:function(e,t){var r=Be();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Be();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Sf.bind(null,Y,e),[n.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:ps,useDebugValue:ia,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=ps(!1),t=e[0];return e=kf.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Y,o=Be();if(A){if(r===void 0)throw Error(E(407));r=r()}else{if(r=t(),re===null)throw Error(E(349));$t&30||pc(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,fs(mc.bind(null,n,i,e),[e]),n.flags|=2048,dn(9,fc.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=Be(),t=re.identifierPrefix;if(A){var r=qe,n=Ze;r=(n&~(1<<32-Oe(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=un++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=bf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Nf={readContext:Pe,useCallback:kc,useContext:Pe,useEffect:oa,useImperativeHandle:bc,useInsertionEffect:yc,useLayoutEffect:xc,useMemo:Sc,useReducer:yi,useRef:vc,useState:function(){return yi(cn)},useDebugValue:ia,useDeferredValue:function(e){var t=_e();return jc(t,X.memoizedState,e)},useTransition:function(){var e=yi(cn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:cc,useSyncExternalStore:dc,useId:Cc,unstable_isNewReconciler:!1},Ef={readContext:Pe,useCallback:kc,useContext:Pe,useEffect:oa,useImperativeHandle:bc,useInsertionEffect:yc,useLayoutEffect:xc,useMemo:Sc,useReducer:xi,useRef:vc,useState:function(){return xi(cn)},useDebugValue:ia,useDeferredValue:function(e){var t=_e();return X===null?t.memoizedState=e:jc(t,X.memoizedState,e)},useTransition:function(){var e=xi(cn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:cc,useSyncExternalStore:dc,useId:Cc,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ll(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:G({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Do={isMounted:function(e){return(e=e._reactInternals)?Bt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=pe(),o=kt(e),i=et(n,o);i.payload=t,r!=null&&(i.callback=r),t=wt(e,i,o),t!==null&&($e(t,e,o,n),Vn(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=pe(),o=kt(e),i=et(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=wt(e,i,o),t!==null&&($e(t,e,o,n),Vn(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=pe(),n=kt(e),o=et(r,n);o.tag=2,t!=null&&(o.callback=t),t=wt(e,o,n),t!==null&&($e(t,e,n,r),Vn(t,e,n))}};function ms(e,t,r,n,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,l):t.prototype&&t.prototype.isPureReactComponent?!rn(r,n)||!rn(o,i):!0}function Lc(e,t,r){var n=!1,o=Ct,i=t.contextType;return typeof i=="object"&&i!==null?i=Pe(i):(o=ye(t)?Dt:ue.current,n=t.contextTypes,i=(n=n!=null)?pr(e,o):Ct),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Do,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function hs(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Do.enqueueReplaceState(t,t.state,null)}function al(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},Xl(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Pe(i):(i=ye(t)?Dt:ue.current,o.context=pr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ll(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Do.enqueueReplaceState(o,o.state,null),xo(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function gr(e,t){try{var r="",n=t;do r+=ep(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function wi(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function sl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Tf=typeof WeakMap=="function"?WeakMap:Map;function Rc(e,t,r){r=et(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){jo||(jo=!0,yl=n),sl(e,t)},r}function Ic(e,t,r){r=et(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){sl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){sl(e,t),typeof n!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function gs(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Tf;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=Uf.bind(null,e,t,r),t.then(e,e))}function vs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ys(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=et(-1,1),t.tag=2,wt(r,t,1))),r.lanes|=1),e)}var Lf=lt.ReactCurrentOwner,ge=!1;function de(e,t,r,n){t.child=e===null?lc(t,null,r,n):mr(t,e.child,r,n)}function xs(e,t,r,n,o){r=r.render;var i=t.ref;return ur(t,o),n=ra(e,t,r,n,i,o),r=na(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ot(e,t,o)):(A&&r&&Bl(t),t.flags|=1,de(e,t,n,o),t.child)}function ws(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!fa(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Pc(e,t,i,n,o)):(e=eo(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:rn,r(l,n)&&e.ref===t.ref)return ot(e,t,o)}return t.flags|=1,e=St(i,n),e.ref=t.ref,e.return=t,t.child=e}function Pc(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(rn(i,n)&&e.ref===t.ref)if(ge=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,ot(e,t,o)}return ul(e,t,r,n,o)}function _c(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(nr,be),be|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(nr,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,K(nr,be),be|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,K(nr,be),be|=n;return de(e,t,o,r),t.child}function zc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ul(e,t,r,n,o){var i=ye(r)?Dt:ue.current;return i=pr(t,i),ur(t,o),r=ra(e,t,r,n,i,o),n=na(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ot(e,t,o)):(A&&n&&Bl(t),t.flags|=1,de(e,t,r,o),t.child)}function bs(e,t,r,n,o){if(ye(r)){var i=!0;mo(t)}else i=!1;if(ur(t,o),t.stateNode===null)Xn(e,t),Lc(t,r,n),al(t,r,n,o),n=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,c=r.contextType;typeof c=="object"&&c!==null?c=Pe(c):(c=ye(r)?Dt:ue.current,c=pr(t,c));var d=r.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==n||s!==c)&&hs(t,l,n,c),dt=!1;var h=t.memoizedState;l.state=h,xo(t,n,l,o),s=t.memoizedState,a!==n||h!==s||ve.current||dt?(typeof d=="function"&&(ll(t,r,d,n),s=t.memoizedState),(a=dt||ms(t,r,a,n,h,s,c))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=s),l.props=n,l.state=s,l.context=c,n=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,sc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Fe(t.type,a),l.props=c,p=t.pendingProps,h=l.context,s=r.contextType,typeof s=="object"&&s!==null?s=Pe(s):(s=ye(r)?Dt:ue.current,s=pr(t,s));var y=r.getDerivedStateFromProps;(d=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||h!==s)&&hs(t,l,n,s),dt=!1,h=t.memoizedState,l.state=h,xo(t,n,l,o);var w=t.memoizedState;a!==p||h!==w||ve.current||dt?(typeof y=="function"&&(ll(t,r,y,n),w=t.memoizedState),(c=dt||ms(t,r,c,n,h,w,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),l.props=n,l.state=w,l.context=s,n=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return cl(e,t,r,n,i,o)}function cl(e,t,r,n,o,i){zc(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return o&&ls(t,r,!1),ot(e,t,i);n=t.stateNode,Lf.current=t;var a=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=mr(t,e.child,null,i),t.child=mr(t,null,a,i)):de(e,t,a,i),t.memoizedState=n.state,o&&ls(t,r,!0),t.child}function Mc(e){var t=e.stateNode;t.pendingContext?is(e,t.pendingContext,t.pendingContext!==t.context):t.context&&is(e,t.context,!1),Zl(e,t.containerInfo)}function ks(e,t,r,n,o){return fr(),Hl(o),t.flags|=256,de(e,t,r,n),t.child}var dl={dehydrated:null,treeContext:null,retryLane:0};function pl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fc(e,t,r){var n=t.pendingProps,o=U.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(U,o&1),e===null)return ol(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,i?(n=t.mode,i=t.child,l={mode:"hidden",children:l},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ao(l,n,0,null),e=Kt(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=pl(r),t.memoizedState=dl,e):la(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Rf(e,t,l,n,a,o,r);if(i){i=n.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:n.children};return!(l&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=s,t.deletions=null):(n=St(o,s),n.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=St(a,i):(i=Kt(i,l,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,l=e.child.memoizedState,l=l===null?pl(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~r,t.memoizedState=dl,n}return i=e.child,e=i.sibling,n=St(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function la(e,t){return t=Ao({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Kn(e,t,r,n){return n!==null&&Hl(n),mr(t,e.child,null,r),e=la(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rf(e,t,r,n,o,i,l){if(r)return t.flags&256?(t.flags&=-257,n=wi(Error(E(422))),Kn(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=Ao({mode:"visible",children:n.children},o,0,null),i=Kt(i,o,l,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&mr(t,e.child,null,l),t.child.memoizedState=pl(l),t.memoizedState=dl,i);if(!(t.mode&1))return Kn(e,t,l,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var a=n.dgst;return n=a,i=Error(E(419)),n=wi(i,n,void 0),Kn(e,t,l,n)}if(a=(l&e.childLanes)!==0,ge||a){if(n=re,n!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,nt(e,o),$e(n,e,o,-1))}return pa(),n=wi(Error(E(421))),Kn(e,t,l,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Yf.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ke=xt(o.nextSibling),Se=t,A=!0,De=null,e!==null&&(Ee[Te++]=Ze,Ee[Te++]=qe,Ee[Te++]=Ot,Ze=e.id,qe=e.overflow,Ot=t),t=la(t,n.children),t.flags|=4096,t)}function Ss(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),il(e.return,t,r)}function bi(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function Kc(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(de(e,t,n.children,r),n=U.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ss(e,r,t);else if(e.tag===19)Ss(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(K(U,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&wo(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),bi(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&wo(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}bi(t,!0,r,null,i);break;case"together":bi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ot(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),At|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,r=St(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=St(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function If(e,t,r){switch(t.tag){case 3:Mc(t),fr();break;case 5:uc(t);break;case 1:ye(t.type)&&mo(t);break;case 4:Zl(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;K(vo,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(K(U,U.current&1),t.flags|=128,null):r&t.child.childLanes?Fc(e,t,r):(K(U,U.current&1),e=ot(e,t,r),e!==null?e.sibling:null);K(U,U.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Kc(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(U,U.current),n)break;return null;case 22:case 23:return t.lanes=0,_c(e,t,r)}return ot(e,t,r)}var Dc,fl,Oc,$c;Dc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};fl=function(){};Oc=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Mt(We.current);var i=null;switch(r){case"input":o=Mi(e,o),n=Mi(e,n),i=[];break;case"select":o=G({},o,{value:void 0}),n=G({},n,{value:void 0}),i=[];break;case"textarea":o=Di(e,o),n=Di(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=po)}$i(r,n);var l;r=null;for(c in o)if(!n.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in n){var s=n[c];if(a=o!=null?o[c]:void 0,n.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(r||(r={}),r[l]=s[l])}else r||(i||(i=[]),i.push(c,r)),r=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&D("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}r&&(i=i||[]).push("style",r);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};$c=function(e,t,r,n){r!==n&&(t.flags|=4)};function Ir(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Pf(e,t,r){var n=t.pendingProps;switch(Gl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ye(t.type)&&fo(),ae(t),null;case 3:return n=t.stateNode,hr(),O(ve),O(ue),ea(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Mn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(bl(De),De=null))),fl(e,t),ae(t),null;case 5:ql(t);var o=Mt(sn.current);if(r=t.type,e!==null&&t.stateNode!=null)Oc(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(E(166));return ae(t),null}if(e=Mt(We.current),Mn(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[Ge]=t,n[ln]=i,e=(t.mode&1)!==0,r){case"dialog":D("cancel",n),D("close",n);break;case"iframe":case"object":case"embed":D("load",n);break;case"video":case"audio":for(o=0;o<Kr.length;o++)D(Kr[o],n);break;case"source":D("error",n);break;case"img":case"image":case"link":D("error",n),D("load",n);break;case"details":D("toggle",n);break;case"input":Pa(n,i),D("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},D("invalid",n);break;case"textarea":za(n,i),D("invalid",n)}$i(r,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?n.textContent!==a&&(i.suppressHydrationWarning!==!0&&zn(n.textContent,a,e),o=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&zn(n.textContent,a,e),o=["children",""+a]):Qr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&D("scroll",n)}switch(r){case"input":Nn(n),_a(n,i,!0);break;case"textarea":Nn(n),Ma(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=po)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),r==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[Ge]=t,e[ln]=n,Dc(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ai(r,n),r){case"dialog":D("cancel",e),D("close",e),o=n;break;case"iframe":case"object":case"embed":D("load",e),o=n;break;case"video":case"audio":for(o=0;o<Kr.length;o++)D(Kr[o],e);o=n;break;case"source":D("error",e),o=n;break;case"img":case"image":case"link":D("error",e),D("load",e),o=n;break;case"details":D("toggle",e),o=n;break;case"input":Pa(e,n),o=Mi(e,n),D("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=G({},n,{value:void 0}),D("invalid",e);break;case"textarea":za(e,n),o=Di(e,n),D("invalid",e);break;default:o=n}$i(r,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?vu(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&hu(e,s)):i==="children"?typeof s=="string"?(r!=="textarea"||s!=="")&&Jr(e,s):typeof s=="number"&&Jr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Qr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&D("scroll",e):s!=null&&Rl(e,i,s,l))}switch(r){case"input":Nn(e),_a(e,n,!1);break;case"textarea":Nn(e),Ma(e);break;case"option":n.value!=null&&e.setAttribute("value",""+jt(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?ir(e,!!n.multiple,i,!1):n.defaultValue!=null&&ir(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=po)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)$c(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(E(166));if(r=Mt(sn.current),Mt(We.current),Mn(t)){if(n=t.stateNode,r=t.memoizedProps,n[Ge]=t,(i=n.nodeValue!==r)&&(e=Se,e!==null))switch(e.tag){case 3:zn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zn(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ge]=t,t.stateNode=n}return ae(t),null;case 13:if(O(U),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&ke!==null&&t.mode&1&&!(t.flags&128))oc(),fr(),t.flags|=98560,i=!1;else if(i=Mn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[Ge]=t}else fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),i=!1}else De!==null&&(bl(De),De=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?Z===0&&(Z=3):pa())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return hr(),fl(e,t),e===null&&nn(t.stateNode.containerInfo),ae(t),null;case 10:return Ql(t.type._context),ae(t),null;case 17:return ye(t.type)&&fo(),ae(t),null;case 19:if(O(U),i=t.memoizedState,i===null)return ae(t),null;if(n=(t.flags&128)!==0,l=i.rendering,l===null)if(n)Ir(i,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=wo(e),l!==null){for(t.flags|=128,Ir(i,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return K(U,U.current&1|2),t.child}e=e.sibling}i.tail!==null&&V()>vr&&(t.flags|=128,n=!0,Ir(i,!1),t.lanes=4194304)}else{if(!n)if(e=wo(l),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ir(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!A)return ae(t),null}else 2*V()-i.renderingStartTime>vr&&r!==1073741824&&(t.flags|=128,n=!0,Ir(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(r=i.last,r!==null?r.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=V(),t.sibling=null,r=U.current,K(U,n?r&1|2:r&1),t):(ae(t),null);case 22:case 23:return da(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?be&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function _f(e,t){switch(Gl(t),t.tag){case 1:return ye(t.type)&&fo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hr(),O(ve),O(ue),ea(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ql(t),null;case 13:if(O(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(U),null;case 4:return hr(),null;case 10:return Ql(t.type._context),null;case 22:case 23:return da(),null;case 24:return null;default:return null}}var Dn=!1,se=!1,zf=typeof WeakSet=="function"?WeakSet:Set,R=null;function rr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){H(e,t,n)}else r.current=null}function ml(e,t,r){try{r()}catch(n){H(e,t,n)}}var js=!1;function Mf(e,t){if(Xi=so,e=Gu(),Yl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var l=0,a=-1,s=-1,c=0,d=0,p=e,h=null;t:for(;;){for(var y;p!==r||o!==0&&p.nodeType!==3||(a=l+o),p!==i||n!==0&&p.nodeType!==3||(s=l+n),p.nodeType===3&&(l+=p.nodeValue.length),(y=p.firstChild)!==null;)h=p,p=y;for(;;){if(p===e)break t;if(h===r&&++c===o&&(a=l),h===i&&++d===n&&(s=l),(y=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=y}r=a===-1||s===-1?null:{start:a,end:s}}else r=null}r=r||{start:0,end:0}}else r=null;for(Zi={focusedElem:e,selectionRange:r},so=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,j=w.memoizedState,f=t.stateNode,m=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:Fe(t.type,x),j);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(S){H(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return w=js,js=!1,w}function Gr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ml(t,r,i)}o=o.next}while(o!==n)}}function Oo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function hl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ac(e){var t=e.alternate;t!==null&&(e.alternate=null,Ac(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[ln],delete t[tl],delete t[vf],delete t[yf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uc(e){return e.tag===5||e.tag===3||e.tag===4}function Cs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=po));else if(n!==4&&(e=e.child,e!==null))for(gl(e,t,r),e=e.sibling;e!==null;)gl(e,t,r),e=e.sibling}function vl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(vl(e,t,r),e=e.sibling;e!==null;)vl(e,t,r),e=e.sibling}var ne=null,Ke=!1;function ut(e,t,r){for(r=r.child;r!==null;)Yc(e,t,r),r=r.sibling}function Yc(e,t,r){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Io,r)}catch{}switch(r.tag){case 5:se||rr(r,t);case 6:var n=ne,o=Ke;ne=null,ut(e,t,r),ne=n,Ke=o,ne!==null&&(Ke?(e=ne,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ne.removeChild(r.stateNode));break;case 18:ne!==null&&(Ke?(e=ne,r=r.stateNode,e.nodeType===8?mi(e.parentNode,r):e.nodeType===1&&mi(e,r),en(e)):mi(ne,r.stateNode));break;case 4:n=ne,o=Ke,ne=r.stateNode.containerInfo,Ke=!0,ut(e,t,r),ne=n,Ke=o;break;case 0:case 11:case 14:case 15:if(!se&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ml(r,t,l),o=o.next}while(o!==n)}ut(e,t,r);break;case 1:if(!se&&(rr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(a){H(r,t,a)}ut(e,t,r);break;case 21:ut(e,t,r);break;case 22:r.mode&1?(se=(n=se)||r.memoizedState!==null,ut(e,t,r),se=n):ut(e,t,r);break;default:ut(e,t,r)}}function Ns(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new zf),t.forEach(function(n){var o=Bf.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function Me(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Ke=!1;break e;case 3:ne=a.stateNode.containerInfo,Ke=!0;break e;case 4:ne=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(ne===null)throw Error(E(160));Yc(i,l,o),ne=null,Ke=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){H(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bc(t,e),t=t.sibling}function Bc(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Ye(e),n&4){try{Gr(3,e,e.return),Oo(3,e)}catch(x){H(e,e.return,x)}try{Gr(5,e,e.return)}catch(x){H(e,e.return,x)}}break;case 1:Me(t,e),Ye(e),n&512&&r!==null&&rr(r,r.return);break;case 5:if(Me(t,e),Ye(e),n&512&&r!==null&&rr(r,r.return),e.flags&32){var o=e.stateNode;try{Jr(o,"")}catch(x){H(e,e.return,x)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=r!==null?r.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&pu(o,i),Ai(a,l);var c=Ai(a,i);for(l=0;l<s.length;l+=2){var d=s[l],p=s[l+1];d==="style"?vu(o,p):d==="dangerouslySetInnerHTML"?hu(o,p):d==="children"?Jr(o,p):Rl(o,d,p,c)}switch(a){case"input":Fi(o,i);break;case"textarea":fu(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?ir(o,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?ir(o,!!i.multiple,i.defaultValue,!0):ir(o,!!i.multiple,i.multiple?[]:"",!1))}o[ln]=i}catch(x){H(e,e.return,x)}}break;case 6:if(Me(t,e),Ye(e),n&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){H(e,e.return,x)}}break;case 3:if(Me(t,e),Ye(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{en(t.containerInfo)}catch(x){H(e,e.return,x)}break;case 4:Me(t,e),Ye(e);break;case 13:Me(t,e),Ye(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ua=V())),n&4&&Ns(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(se=(c=se)||d,Me(t,e),se=c):Me(t,e),Ye(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(p=R=d;R!==null;){switch(h=R,y=h.child,h.tag){case 0:case 11:case 14:case 15:Gr(4,h,h.return);break;case 1:rr(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){H(n,r,x)}}break;case 5:rr(h,h.return);break;case 22:if(h.memoizedState!==null){Ts(p);continue}}y!==null?(y.return=h,R=y):Ts(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{o=p.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,s=p.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=gu("display",l))}catch(x){H(e,e.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){H(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Me(t,e),Ye(e),n&4&&Ns(e);break;case 21:break;default:Me(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Uc(r)){var n=r;break e}r=r.return}throw Error(E(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Jr(o,""),n.flags&=-33);var i=Cs(e);vl(e,i,o);break;case 3:case 4:var l=n.stateNode.containerInfo,a=Cs(e);gl(e,a,l);break;default:throw Error(E(161))}}catch(s){H(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ff(e,t,r){R=e,Gc(e)}function Gc(e,t,r){for(var n=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&n){var l=o.memoizedState!==null||Dn;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||se;a=Dn;var c=se;if(Dn=l,(se=s)&&!c)for(R=o;R!==null;)l=R,s=l.child,l.tag===22&&l.memoizedState!==null?Ls(o):s!==null?(s.return=l,R=s):Ls(o);for(;i!==null;)R=i,Gc(i),i=i.sibling;R=o,Dn=a,se=c}Es(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,R=i):Es(e)}}function Es(e){for(;R!==null;){var t=R;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||Oo(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!se)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:Fe(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ds(t,i,n);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}ds(t,l,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break;case"img":s.src&&(r.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&en(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}se||t.flags&512&&hl(t)}catch(h){H(t,t.return,h)}}if(t===e){R=null;break}if(r=t.sibling,r!==null){r.return=t.return,R=r;break}R=t.return}}function Ts(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var r=t.sibling;if(r!==null){r.return=t.return,R=r;break}R=t.return}}function Ls(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Oo(4,t)}catch(s){H(t,r,s)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(s){H(t,o,s)}}var i=t.return;try{hl(t)}catch(s){H(t,i,s)}break;case 5:var l=t.return;try{hl(t)}catch(s){H(t,l,s)}}}catch(s){H(t,t.return,s)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var Kf=Math.ceil,So=lt.ReactCurrentDispatcher,aa=lt.ReactCurrentOwner,Ie=lt.ReactCurrentBatchConfig,M=0,re=null,Q=null,oe=0,be=0,nr=Et(0),Z=0,pn=null,At=0,$o=0,sa=0,Hr=null,he=null,ua=0,vr=1/0,Je=null,jo=!1,yl=null,bt=null,On=!1,ht=null,Co=0,Wr=0,xl=null,Zn=-1,qn=0;function pe(){return M&6?V():Zn!==-1?Zn:Zn=V()}function kt(e){return e.mode&1?M&2&&oe!==0?oe&-oe:wf.transition!==null?(qn===0&&(qn=Lu()),qn):(e=F,e!==0||(e=window.event,e=e===void 0?16:Fu(e.type)),e):1}function $e(e,t,r,n){if(50<Wr)throw Wr=0,xl=null,Error(E(185));hn(e,r,n),(!(M&2)||e!==re)&&(e===re&&(!(M&2)&&($o|=r),Z===4&&ft(e,oe)),xe(e,n),r===1&&M===0&&!(t.mode&1)&&(vr=V()+500,Fo&&Tt()))}function xe(e,t){var r=e.callbackNode;xp(e,t);var n=ao(e,e===re?oe:0);if(n===0)r!==null&&Da(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Da(r),t===1)e.tag===0?xf(Rs.bind(null,e)):tc(Rs.bind(null,e)),hf(function(){!(M&6)&&Tt()}),r=null;else{switch(Ru(n)){case 1:r=Ml;break;case 4:r=Eu;break;case 16:r=lo;break;case 536870912:r=Tu;break;default:r=lo}r=qc(r,Hc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Hc(e,t){if(Zn=-1,qn=0,M&6)throw Error(E(327));var r=e.callbackNode;if(cr()&&e.callbackNode!==r)return null;var n=ao(e,e===re?oe:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=No(e,n);else{t=n;var o=M;M|=2;var i=Vc();(re!==e||oe!==t)&&(Je=null,vr=V()+500,Ft(e,t));do try{$f();break}catch(a){Wc(e,a)}while(!0);Vl(),So.current=i,M=o,Q!==null?t=0:(re=null,oe=0,t=Z)}if(t!==0){if(t===2&&(o=Hi(e),o!==0&&(n=o,t=wl(e,o))),t===1)throw r=pn,Ft(e,0),ft(e,n),xe(e,V()),r;if(t===6)ft(e,n);else{if(o=e.current.alternate,!(n&30)&&!Df(o)&&(t=No(e,n),t===2&&(i=Hi(e),i!==0&&(n=i,t=wl(e,i))),t===1))throw r=pn,Ft(e,0),ft(e,n),xe(e,V()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(E(345));case 2:Pt(e,he,Je);break;case 3:if(ft(e,n),(n&130023424)===n&&(t=ua+500-V(),10<t)){if(ao(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){pe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=el(Pt.bind(null,e,he,Je),t);break}Pt(e,he,Je);break;case 4:if(ft(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var l=31-Oe(n);i=1<<l,l=t[l],l>o&&(o=l),n&=~i}if(n=o,n=V()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Kf(n/1960))-n,10<n){e.timeoutHandle=el(Pt.bind(null,e,he,Je),n);break}Pt(e,he,Je);break;case 5:Pt(e,he,Je);break;default:throw Error(E(329))}}}return xe(e,V()),e.callbackNode===r?Hc.bind(null,e):null}function wl(e,t){var r=Hr;return e.current.memoizedState.isDehydrated&&(Ft(e,t).flags|=256),e=No(e,t),e!==2&&(t=he,he=r,t!==null&&bl(t)),e}function bl(e){he===null?he=e:he.push.apply(he,e)}function Df(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!Ue(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ft(e,t){for(t&=~sa,t&=~$o,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Oe(t),n=1<<r;e[r]=-1,t&=~n}}function Rs(e){if(M&6)throw Error(E(327));cr();var t=ao(e,0);if(!(t&1))return xe(e,V()),null;var r=No(e,t);if(e.tag!==0&&r===2){var n=Hi(e);n!==0&&(t=n,r=wl(e,n))}if(r===1)throw r=pn,Ft(e,0),ft(e,t),xe(e,V()),r;if(r===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pt(e,he,Je),xe(e,V()),null}function ca(e,t){var r=M;M|=1;try{return e(t)}finally{M=r,M===0&&(vr=V()+500,Fo&&Tt())}}function Ut(e){ht!==null&&ht.tag===0&&!(M&6)&&cr();var t=M;M|=1;var r=Ie.transition,n=F;try{if(Ie.transition=null,F=1,e)return e()}finally{F=n,Ie.transition=r,M=t,!(M&6)&&Tt()}}function da(){be=nr.current,O(nr)}function Ft(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,mf(r)),Q!==null)for(r=Q.return;r!==null;){var n=r;switch(Gl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&fo();break;case 3:hr(),O(ve),O(ue),ea();break;case 5:ql(n);break;case 4:hr();break;case 13:O(U);break;case 19:O(U);break;case 10:Ql(n.type._context);break;case 22:case 23:da()}r=r.return}if(re=e,Q=e=St(e.current,null),oe=be=t,Z=0,pn=null,sa=$o=At=0,he=Hr=null,zt!==null){for(t=0;t<zt.length;t++)if(r=zt[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var l=i.next;i.next=o,n.next=l}r.pending=n}zt=null}return e}function Wc(e,t){do{var r=Q;try{if(Vl(),Qn.current=ko,bo){for(var n=Y.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}bo=!1}if($t=0,te=X=Y=null,Br=!1,un=0,aa.current=null,r===null||r.return===null){Z=1,pn=t,Q=null;break}e:{var i=e,l=r.return,a=r,s=t;if(t=oe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=vs(l);if(y!==null){y.flags&=-257,ys(y,l,a,i,t),y.mode&1&&gs(i,c,t),t=y,s=c;var w=t.updateQueue;if(w===null){var x=new Set;x.add(s),t.updateQueue=x}else w.add(s);break e}else{if(!(t&1)){gs(i,c,t),pa();break e}s=Error(E(426))}}else if(A&&a.mode&1){var j=vs(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),ys(j,l,a,i,t),Hl(gr(s,a));break e}}i=s=gr(s,a),Z!==4&&(Z=2),Hr===null?Hr=[i]:Hr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Rc(i,s,t);cs(i,f);break e;case 1:a=s;var m=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(bt===null||!bt.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Ic(i,a,t);cs(i,S);break e}}i=i.return}while(i!==null)}Jc(r)}catch(C){t=C,Q===r&&r!==null&&(Q=r=r.return);continue}break}while(!0)}function Vc(){var e=So.current;return So.current=ko,e===null?ko:e}function pa(){(Z===0||Z===3||Z===2)&&(Z=4),re===null||!(At&268435455)&&!($o&268435455)||ft(re,oe)}function No(e,t){var r=M;M|=2;var n=Vc();(re!==e||oe!==t)&&(Je=null,Ft(e,t));do try{Of();break}catch(o){Wc(e,o)}while(!0);if(Vl(),M=r,So.current=n,Q!==null)throw Error(E(261));return re=null,oe=0,Z}function Of(){for(;Q!==null;)Qc(Q)}function $f(){for(;Q!==null&&!cp();)Qc(Q)}function Qc(e){var t=Zc(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?Jc(e):Q=t,aa.current=null}function Jc(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=_f(r,t),r!==null){r.flags&=32767,Q=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,Q=null;return}}else if(r=Pf(r,t,be),r!==null){Q=r;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);Z===0&&(Z=5)}function Pt(e,t,r){var n=F,o=Ie.transition;try{Ie.transition=null,F=1,Af(e,t,r,n)}finally{Ie.transition=o,F=n}return null}function Af(e,t,r,n){do cr();while(ht!==null);if(M&6)throw Error(E(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(wp(e,i),e===re&&(Q=re=null,oe=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||On||(On=!0,qc(lo,function(){return cr(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Ie.transition,Ie.transition=null;var l=F;F=1;var a=M;M|=4,aa.current=null,Mf(e,r),Bc(r,e),af(Zi),so=!!Xi,Zi=Xi=null,e.current=r,Ff(r),dp(),M=a,F=l,Ie.transition=i}else e.current=r;if(On&&(On=!1,ht=e,Co=o),i=e.pendingLanes,i===0&&(bt=null),mp(r.stateNode),xe(e,V()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(jo)throw jo=!1,e=yl,yl=null,e;return Co&1&&e.tag!==0&&cr(),i=e.pendingLanes,i&1?e===xl?Wr++:(Wr=0,xl=e):Wr=0,Tt(),null}function cr(){if(ht!==null){var e=Ru(Co),t=Ie.transition,r=F;try{if(Ie.transition=null,F=16>e?16:e,ht===null)var n=!1;else{if(e=ht,ht=null,Co=0,M&6)throw Error(E(331));var o=M;for(M|=4,R=e.current;R!==null;){var i=R,l=i.child;if(R.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(R=c;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:Gr(8,d,i)}var p=d.child;if(p!==null)p.return=d,R=p;else for(;R!==null;){d=R;var h=d.sibling,y=d.return;if(Ac(d),d===c){R=null;break}if(h!==null){h.return=y,R=h;break}R=y}}}var w=i.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}R=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,R=l;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Gr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,R=f;break e}R=i.return}}var m=e.current;for(R=m;R!==null;){l=R;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,R=g;else e:for(l=m;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Oo(9,a)}}catch(C){H(a,a.return,C)}if(a===l){R=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,R=S;break e}R=a.return}}if(M=o,Tt(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Io,e)}catch{}n=!0}return n}finally{F=r,Ie.transition=t}}return!1}function Is(e,t,r){t=gr(r,t),t=Rc(e,t,1),e=wt(e,t,1),t=pe(),e!==null&&(hn(e,1,t),xe(e,t))}function H(e,t,r){if(e.tag===3)Is(e,e,r);else for(;t!==null;){if(t.tag===3){Is(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(bt===null||!bt.has(n))){e=gr(r,e),e=Ic(t,e,1),t=wt(t,e,1),e=pe(),t!==null&&(hn(t,1,e),xe(t,e));break}}t=t.return}}function Uf(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&r,re===e&&(oe&r)===r&&(Z===4||Z===3&&(oe&130023424)===oe&&500>V()-ua?Ft(e,0):sa|=r),xe(e,t)}function Xc(e,t){t===0&&(e.mode&1?(t=Ln,Ln<<=1,!(Ln&130023424)&&(Ln=4194304)):t=1);var r=pe();e=nt(e,t),e!==null&&(hn(e,t,r),xe(e,r))}function Yf(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Xc(e,r)}function Bf(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(E(314))}n!==null&&n.delete(t),Xc(e,r)}var Zc;Zc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ge=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ge=!1,If(e,t,r);ge=!!(e.flags&131072)}else ge=!1,A&&t.flags&1048576&&rc(t,go,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Xn(e,t),e=t.pendingProps;var o=pr(t,ue.current);ur(t,r),o=ra(null,t,n,e,o,r);var i=na();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(n)?(i=!0,mo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Xl(t),o.updater=Do,t.stateNode=o,o._reactInternals=t,al(t,n,e,r),t=cl(null,t,n,!0,i,r)):(t.tag=0,A&&i&&Bl(t),de(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Xn(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=Hf(n),e=Fe(n,e),o){case 0:t=ul(null,t,n,e,r);break e;case 1:t=bs(null,t,n,e,r);break e;case 11:t=xs(null,t,n,e,r);break e;case 14:t=ws(null,t,n,Fe(n.type,e),r);break e}throw Error(E(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Fe(n,o),ul(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Fe(n,o),bs(e,t,n,o,r);case 3:e:{if(Mc(t),e===null)throw Error(E(387));n=t.pendingProps,i=t.memoizedState,o=i.element,sc(e,t),xo(t,n,null,r);var l=t.memoizedState;if(n=l.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=gr(Error(E(423)),t),t=ks(e,t,n,r,o);break e}else if(n!==o){o=gr(Error(E(424)),t),t=ks(e,t,n,r,o);break e}else for(ke=xt(t.stateNode.containerInfo.firstChild),Se=t,A=!0,De=null,r=lc(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(fr(),n===o){t=ot(e,t,r);break e}de(e,t,n,r)}t=t.child}return t;case 5:return uc(t),e===null&&ol(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,qi(n,o)?l=null:i!==null&&qi(n,i)&&(t.flags|=32),zc(e,t),de(e,t,l,r),t.child;case 6:return e===null&&ol(t),null;case 13:return Fc(e,t,r);case 4:return Zl(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=mr(t,null,n,r):de(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Fe(n,o),xs(e,t,n,o,r);case 7:return de(e,t,t.pendingProps,r),t.child;case 8:return de(e,t,t.pendingProps.children,r),t.child;case 12:return de(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,K(vo,n._currentValue),n._currentValue=l,i!==null)if(Ue(i.value,l)){if(i.children===o.children&&!ve.current){t=ot(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===n){if(i.tag===1){s=et(-1,r&-r),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}i.lanes|=r,s=i.alternate,s!==null&&(s.lanes|=r),il(i.return,r,t),a.lanes|=r;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(E(341));l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),il(l,r,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}de(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,ur(t,r),o=Pe(o),n=n(o),t.flags|=1,de(e,t,n,r),t.child;case 14:return n=t.type,o=Fe(n,t.pendingProps),o=Fe(n.type,o),ws(e,t,n,o,r);case 15:return Pc(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Fe(n,o),Xn(e,t),t.tag=1,ye(n)?(e=!0,mo(t)):e=!1,ur(t,r),Lc(t,n,o),al(t,n,o,r),cl(null,t,n,!0,e,r);case 19:return Kc(e,t,r);case 22:return _c(e,t,r)}throw Error(E(156,t.tag))};function qc(e,t){return Nu(e,t)}function Gf(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,r,n){return new Gf(e,t,r,n)}function fa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hf(e){if(typeof e=="function")return fa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pl)return 11;if(e===_l)return 14}return 2}function St(e,t){var r=e.alternate;return r===null?(r=Le(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function eo(e,t,r,n,o,i){var l=2;if(n=e,typeof e=="function")fa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Wt:return Kt(r.children,o,i,t);case Il:l=8,o|=8;break;case Ii:return e=Le(12,r,t,o|2),e.elementType=Ii,e.lanes=i,e;case Pi:return e=Le(13,r,t,o),e.elementType=Pi,e.lanes=i,e;case _i:return e=Le(19,r,t,o),e.elementType=_i,e.lanes=i,e;case uu:return Ao(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case au:l=10;break e;case su:l=9;break e;case Pl:l=11;break e;case _l:l=14;break e;case ct:l=16,n=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Le(l,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function Kt(e,t,r,n){return e=Le(7,e,n,t),e.lanes=r,e}function Ao(e,t,r,n){return e=Le(22,e,n,t),e.elementType=uu,e.lanes=r,e.stateNode={isHidden:!1},e}function ki(e,t,r){return e=Le(6,e,null,t),e.lanes=r,e}function Si(e,t,r){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wf(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ni(0),this.expirationTimes=ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ni(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ma(e,t,r,n,o,i,l,a,s){return e=new Wf(e,t,r,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Le(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xl(i),e}function Vf(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function ed(e){if(!e)return Ct;e=e._reactInternals;e:{if(Bt(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var r=e.type;if(ye(r))return ec(e,r,t)}return t}function td(e,t,r,n,o,i,l,a,s){return e=ma(r,n,!0,e,o,i,l,a,s),e.context=ed(null),r=e.current,n=pe(),o=kt(r),i=et(n,o),i.callback=t??null,wt(r,i,o),e.current.lanes=o,hn(e,o,n),xe(e,n),e}function Uo(e,t,r,n){var o=t.current,i=pe(),l=kt(o);return r=ed(r),t.context===null?t.context=r:t.pendingContext=r,t=et(i,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=wt(o,t,l),e!==null&&($e(e,o,l,i),Vn(e,o,l)),l}function Eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ps(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ha(e,t){Ps(e,t),(e=e.alternate)&&Ps(e,t)}function Qf(){return null}var rd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ga(e){this._internalRoot=e}Yo.prototype.render=ga.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Uo(e,t,null,null)};Yo.prototype.unmount=ga.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ut(function(){Uo(null,e,null,null)}),t[rt]=null}};function Yo(e){this._internalRoot=e}Yo.prototype.unstable_scheduleHydration=function(e){if(e){var t=_u();e={blockedOn:null,target:e,priority:t};for(var r=0;r<pt.length&&t!==0&&t<pt[r].priority;r++);pt.splice(r,0,e),r===0&&Mu(e)}};function va(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _s(){}function Jf(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var c=Eo(l);i.call(c)}}var l=td(t,n,e,0,null,!1,!1,"",_s);return e._reactRootContainer=l,e[rt]=l.current,nn(e.nodeType===8?e.parentNode:e),Ut(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var a=n;n=function(){var c=Eo(s);a.call(c)}}var s=ma(e,0,!1,null,null,!1,!1,"",_s);return e._reactRootContainer=s,e[rt]=s.current,nn(e.nodeType===8?e.parentNode:e),Ut(function(){Uo(t,s,r,n)}),s}function Go(e,t,r,n,o){var i=r._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Eo(l);a.call(s)}}Uo(t,l,e,o)}else l=Jf(r,t,e,o,n);return Eo(l)}Iu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Fr(t.pendingLanes);r!==0&&(Fl(t,r|1),xe(t,V()),!(M&6)&&(vr=V()+500,Tt()))}break;case 13:Ut(function(){var n=nt(e,1);if(n!==null){var o=pe();$e(n,e,1,o)}}),ha(e,1)}};Kl=function(e){if(e.tag===13){var t=nt(e,134217728);if(t!==null){var r=pe();$e(t,e,134217728,r)}ha(e,134217728)}};Pu=function(e){if(e.tag===13){var t=kt(e),r=nt(e,t);if(r!==null){var n=pe();$e(r,e,t,n)}ha(e,t)}};_u=function(){return F};zu=function(e,t){var r=F;try{return F=e,t()}finally{F=r}};Yi=function(e,t,r){switch(t){case"input":if(Fi(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Mo(n);if(!o)throw Error(E(90));du(n),Fi(n,o)}}}break;case"textarea":fu(e,r);break;case"select":t=r.value,t!=null&&ir(e,!!r.multiple,t,!1)}};wu=ca;bu=Ut;var Xf={usingClientEntryPoint:!1,Events:[vn,Xt,Mo,yu,xu,ca]},Pr={findFiberByHostInstance:_t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zf={bundleType:Pr.bundleType,version:Pr.version,rendererPackageName:Pr.rendererPackageName,rendererConfig:Pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ju(e),e===null?null:e.stateNode},findFiberByHostInstance:Pr.findFiberByHostInstance||Qf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $n=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$n.isDisabled&&$n.supportsFiber)try{Io=$n.inject(Zf),He=$n}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xf;Ce.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!va(t))throw Error(E(200));return Vf(e,t,null,r)};Ce.createRoot=function(e,t){if(!va(e))throw Error(E(299));var r=!1,n="",o=rd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ma(e,1,!1,null,null,r,!1,n,o),e[rt]=t.current,nn(e.nodeType===8?e.parentNode:e),new ga(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=ju(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Ut(e)};Ce.hydrate=function(e,t,r){if(!Bo(t))throw Error(E(200));return Go(null,e,t,!0,r)};Ce.hydrateRoot=function(e,t,r){if(!va(e))throw Error(E(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",l=rd;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=td(t,null,e,1,r??null,o,!1,i,l),e[rt]=t.current,nn(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Yo(t)};Ce.render=function(e,t,r){if(!Bo(t))throw Error(E(200));return Go(null,e,t,!1,r)};Ce.unmountComponentAtNode=function(e){if(!Bo(e))throw Error(E(40));return e._reactRootContainer?(Ut(function(){Go(null,null,e,!1,function(){e._reactRootContainer=null,e[rt]=null})}),!0):!1};Ce.unstable_batchedUpdates=ca;Ce.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Bo(r))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Go(e,t,r,!1,n)};Ce.version="18.3.1-next-f1338f8080-20240426";function nd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nd)}catch(e){console.error(e)}}nd(),nu.exports=Ce;var qf=nu.exports,zs=qf;Li.createRoot=zs.createRoot,Li.hydrateRoot=zs.hydrateRoot;/**
 * react-router v7.18.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ya=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,od=/^[\\/]{2}/;function em(e,t){return t+e.replace(/\\/g,"/")}var Ms="popstate";function Fs(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function tm(e={}){function t(n,o){var c;let i=(c=o.state)==null?void 0:c.masked,{pathname:l,search:a,hash:s}=i||n.location;return kl("",{pathname:l,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default",i?{pathname:n.location.pathname,search:n.location.search,hash:n.location.hash}:void 0)}function r(n,o){return typeof o=="string"?o:fn(o)}return nm(t,r,null,e)}function B(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ve(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function rm(){return Math.random().toString(36).substring(2,10)}function Ks(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function kl(e,t,r=null,n,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?br(t):t,state:r,key:t&&t.key||n||rm(),mask:o}}function fn({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function br(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function nm(e,t,r,n={}){let{window:o=document.defaultView,v5Compat:i=!1}=n,l=o.history,a="POP",s=null,c=d();c==null&&(c=0,l.replaceState({...l.state,idx:c},""));function d(){return(l.state||{idx:null}).idx}function p(){a="POP";let j=d(),f=j==null?null:j-c;c=j,s&&s({action:a,location:x.location,delta:f})}function h(j,f){a="PUSH";let m=Fs(j)?j:kl(x.location,j,f);c=d()+1;let g=Ks(m,c),S=x.createHref(m.mask||m);try{l.pushState(g,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(S)}i&&s&&s({action:a,location:x.location,delta:1})}function y(j,f){a="REPLACE";let m=Fs(j)?j:kl(x.location,j,f);c=d();let g=Ks(m,c),S=x.createHref(m.mask||m);l.replaceState(g,"",S),i&&s&&s({action:a,location:x.location,delta:0})}function w(j){return om(o,j)}let x={get action(){return a},get location(){return e(o,l)},listen(j){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Ms,p),s=j,()=>{o.removeEventListener(Ms,p),s=null}},createHref(j){return t(o,j)},createURL:w,encodeLocation(j){let f=w(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:y,go(j){return l.go(j)}};return x}function om(e,t,r=!1){let n="http://localhost";e&&(n=e.location.origin!=="null"?e.location.origin:e.location.href),B(n,"No window.location.(origin|href) available to create URL");let o=typeof t=="string"?t:fn(t);return o=o.replace(/ $/,"%20"),!r&&od.test(o)&&(o=n+o),new URL(o,n)}function id(e,t,r="/"){return im(e,t,r,!1)}function im(e,t,r,n,o){let i=typeof t=="string"?br(t):t,l=it(i.pathname||"/",r);if(l==null)return null;let a=lm(e),s=null,c=vm(l);for(let d=0;s==null&&d<a.length;++d)s=gm(a[d],c,n);return s}function lm(e){let t=ld(e);return am(t),t}function ld(e,t=[],r=[],n="",o=!1){let i=(l,a,s=o,c)=>{let d={relativePath:c===void 0?l.path||"":c,caseSensitive:l.caseSensitive===!0,childrenIndex:a,route:l};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(n)&&s)return;B(d.relativePath.startsWith(n),`Absolute route path "${d.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(n.length)}let p=Ae([n,d.relativePath]),h=r.concat(d);l.children&&l.children.length>0&&(B(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),ld(l.children,t,h,p,s)),!(l.path==null&&!l.index)&&t.push({path:p,score:mm(p,l.index),routesMeta:h.map((y,w)=>{let[x,j]=ud(y.relativePath,y.caseSensitive,w===h.length-1);return{...y,matcher:x,compiledParams:j}})})};return e.forEach((l,a)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))i(l,a);else for(let c of ad(l.path))i(l,a,!0,c)}),t}function ad(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let l=ad(n.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function am(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:hm(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var sm=/^:[\w-]+$/,um=3,cm=2,dm=1,pm=10,fm=-2,Ds=e=>e==="*";function mm(e,t){let r=e.split("/"),n=r.length;return r.some(Ds)&&(n+=fm),t&&(n+=cm),r.filter(o=>!Ds(o)).reduce((o,i)=>o+(sm.test(i)?um:i===""?dm:pm),n)}function hm(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function gm(e,t,r=!1){let{routesMeta:n}=e,o={},i="/",l=[];for(let a=0;a<n.length;++a){let s=n[a],c=a===n.length-1,d=i==="/"?t:t.slice(i.length)||"/",p={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},h=s.matcher&&s.compiledParams?sd(p,d,s.matcher,s.compiledParams):To(p,d),y=s.route;if(!h&&c&&r&&!n[n.length-1].route.index&&(h=To({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},d)),!h)return null;Object.assign(o,h.params),l.push({params:o,pathname:Ae([i,h.pathname]),pathnameBase:wm(Ae([i,h.pathnameBase])),route:y}),h.pathnameBase!=="/"&&(i=Ae([i,h.pathnameBase]))}return l}function To(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=ud(e.path,e.caseSensitive,e.end);return sd(e,t,r,n)}function sd(e,t,r,n){let o=t.match(r);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:n.reduce((c,{paramName:d,isOptional:p},h)=>{if(d==="*"){let w=a[h]||"";l=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[h];return p&&!y?c[d]=void 0:c[d]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:l,pattern:e}}function ud(e,t=!1,r=!0){Ve(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s,c,d)=>{if(n.push({paramName:a,isOptional:s!=null}),s){let p=d.charAt(c+l.length);return p&&p!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function vm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ve(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function it(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function ym(e,t="/"){let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?br(e):e,i;return r?(r=dd(r),r.startsWith("/")?i=Os(r.substring(1),"/"):i=Os(r,t)):i=t,{pathname:i,search:bm(n),hash:km(o)}}function Os(e,t){let r=Lo(t).split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function ji(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xm(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function cd(e){let t=xm(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function xa(e,t,r,n=!1){let o;typeof e=="string"?o=br(e):(o={...e},B(!o.pathname||!o.pathname.includes("?"),ji("?","pathname","search",o)),B(!o.pathname||!o.pathname.includes("#"),ji("#","pathname","hash",o)),B(!o.search||!o.search.includes("#"),ji("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(l==null)a=r;else{let p=t.length-1;if(!n&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),p-=1;o.pathname=h.join("/")}a=p>=0?t[p]:"/"}let s=ym(o,a),c=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&r.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}var dd=e=>e.replace(/[\\/]{2,}/g,"/"),Ae=e=>dd(e.join("/")),Lo=e=>e.replace(/\/+$/,""),wm=e=>Lo(e).replace(/^\/*/,"/"),bm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,km=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Sm=class{constructor(e,t,r,n=!1){this.status=e,this.statusText=t||"",this.internal=n,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function jm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Cm(e){let t=e.map(r=>r.route.path).filter(Boolean);return Ae(t)||"/"}var pd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function fd(e,t){let r=e;if(typeof r!="string"||!ya.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let n=r,o=!1;if(pd)try{let i=new URL(window.location.href),l=od.test(r)?new URL(em(r,i.protocol)):new URL(r),a=it(l.pathname,t);l.origin===i.origin&&a!=null?r=a+l.search+l.hash:o=!0}catch{Ve(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:n,isExternal:o,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var md=["POST","PUT","PATCH","DELETE"];new Set(md);var Nm=["GET",...md];new Set(Nm);var Em=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Tm(e){try{return Em.includes(new URL(e).protocol)}catch{return!1}}var kr=v.createContext(null);kr.displayName="DataRouter";var Ho=v.createContext(null);Ho.displayName="DataRouterState";var hd=v.createContext(!1);function Lm(){return v.useContext(hd)}var gd=v.createContext({isTransitioning:!1});gd.displayName="ViewTransition";var Rm=v.createContext(new Map);Rm.displayName="Fetchers";var Im=v.createContext(null);Im.displayName="Await";var ze=v.createContext(null);ze.displayName="Navigation";var xn=v.createContext(null);xn.displayName="Location";var at=v.createContext({outlet:null,matches:[],isDataRoute:!1});at.displayName="Route";var wa=v.createContext(null);wa.displayName="RouteError";var vd="REACT_ROUTER_ERROR",Pm="REDIRECT",_m="ROUTE_ERROR_RESPONSE";function zm(e){if(e.startsWith(`${vd}:${Pm}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Mm(e){if(e.startsWith(`${vd}:${_m}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Sm(t.status,t.statusText,t.data)}catch{}}function Fm(e,{relative:t}={}){B(wn(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=v.useContext(ze),{hash:o,pathname:i,search:l}=bn(e,{relative:t}),a=i;return r!=="/"&&(a=i==="/"?r:Ae([r,i])),n.createHref({pathname:a,search:l,hash:o})}function wn(){return v.useContext(xn)!=null}function Qe(){return B(wn(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(xn).location}var yd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xd(e){v.useContext(ze).static||v.useLayoutEffect(e)}function Sr(){let{isDataRoute:e}=v.useContext(at);return e?Qm():Km()}function Km(){B(wn(),"useNavigate() may be used only in the context of a <Router> component.");let e=v.useContext(kr),{basename:t,navigator:r}=v.useContext(ze),{matches:n}=v.useContext(at),{pathname:o}=Qe(),i=JSON.stringify(cd(n)),l=v.useRef(!1);return xd(()=>{l.current=!0}),v.useCallback((s,c={})=>{if(Ve(l.current,yd),!l.current)return;if(typeof s=="number"){r.go(s);return}let d=xa(s,JSON.parse(i),o,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Ae([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,i,o,e])}v.createContext(null);function bn(e,{relative:t}={}){let{matches:r}=v.useContext(at),{pathname:n}=Qe(),o=JSON.stringify(cd(r));return v.useMemo(()=>xa(e,JSON.parse(o),n,t==="path"),[e,o,n,t])}function Dm(e,t){return wd(e,t)}function wd(e,t,r){var j;B(wn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:n}=v.useContext(ze),{matches:o}=v.useContext(at),i=o[o.length-1],l=i?i.params:{},a=i?i.pathname:"/",s=i?i.pathnameBase:"/",c=i&&i.route;{let f=c&&c.path||"";kd(a,!c||f.endsWith("*")||f.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${a}" (under <Route path="${f}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${f}"> to <Route path="${f==="/"?"*":`${f}/*`}">.`)}let d=Qe(),p;if(t){let f=typeof t=="string"?br(t):t;B(s==="/"||((j=f.pathname)==null?void 0:j.startsWith(s)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${f.pathname}" was given in the \`location\` prop.`),p=f}else p=d;let h=p.pathname||"/",y=h;if(s!=="/"){let f=s.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(f.length).join("/")}let w=r&&r.state.matches.length?r.state.matches.map(f=>Object.assign(f,{route:r.manifest[f.route.id]||f.route})):id(e,{pathname:y});Ve(c||w!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),Ve(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=Ym(w&&w.map(f=>Object.assign({},f,{params:Object.assign({},l,f.params),pathname:Ae([s,n.encodeLocation?n.encodeLocation(f.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?s:Ae([s,n.encodeLocation?n.encodeLocation(f.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:f.pathnameBase])})),o,r);return t&&x?v.createElement(xn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...p},navigationType:"POP"}},x):x}function Om(){let e=Vm(),t=jm(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:n},i={padding:"2px 4px",backgroundColor:n},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:i},"ErrorBoundary")," or"," ",v.createElement("code",{style:i},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),r?v.createElement("pre",{style:o},r):null,l)}var $m=v.createElement(Om,null),bd=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const r=Mm(e.digest);r&&(e=r)}let t=e!==void 0?v.createElement(at.Provider,{value:this.props.routeContext},v.createElement(wa.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?v.createElement(Am,{error:e},t):t}};bd.contextType=hd;var Ci=new WeakMap;function Am({children:e,error:t}){let{basename:r}=v.useContext(ze);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let n=zm(t.digest);if(n){let o=Ci.get(t);if(o)throw o;let i=fd(n.location,r),l=i.absoluteURL||i.to;if(Tm(l))throw new Error("Invalid redirect location");if(pd&&!Ci.get(t))if(i.isExternal||n.reloadDocument)window.location.href=l;else{const a=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:n.replace}));throw Ci.set(t,a),a}return v.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l}`})}}return e}function Um({routeContext:e,match:t,children:r}){let n=v.useContext(kr);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(at.Provider,{value:e},r)}function Ym(e,t=[],r){let n=r==null?void 0:r.state;if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,i=n==null?void 0:n.errors;if(i!=null){let d=o.findIndex(p=>p.route.id&&(i==null?void 0:i[p.route.id])!==void 0);B(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,a=-1;if(r&&n){l=n.renderFallback;for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(a=d),p.route.id){let{loaderData:h,errors:y}=n,w=p.route.loader&&!h.hasOwnProperty(p.route.id)&&(!y||y[p.route.id]===void 0);if(p.route.lazy||w){r.isStatic&&(l=!0),a>=0?o=o.slice(0,a+1):o=[o[0]];break}}}}let s=r==null?void 0:r.onError,c=n&&s?(d,p)=>{var h,y;s(d,{location:n.location,params:((y=(h=n.matches)==null?void 0:h[0])==null?void 0:y.params)??{},pattern:Cm(n.matches),errorInfo:p})}:void 0;return o.reduceRight((d,p,h)=>{let y,w=!1,x=null,j=null;n&&(y=i&&p.route.id?i[p.route.id]:void 0,x=p.route.errorElement||$m,l&&(a<0&&h===0?(kd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,j=null):a===h&&(w=!0,j=p.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,h+1)),m=()=>{let g;return y?g=x:w?g=j:p.route.Component?g=v.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=d,v.createElement(Um,{match:p,routeContext:{outlet:d,matches:f,isDataRoute:n!=null},children:g})};return n&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?v.createElement(bd,{location:n.location,revalidation:n.revalidation,component:x,error:y,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0},onError:c}):m()},null)}function ba(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bm(e){let t=v.useContext(kr);return B(t,ba(e)),t}function Gm(e){let t=v.useContext(Ho);return B(t,ba(e)),t}function Hm(e){let t=v.useContext(at);return B(t,ba(e)),t}function ka(e){let t=Hm(e),r=t.matches[t.matches.length-1];return B(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function Wm(){return ka("useRouteId")}function Vm(){var n;let e=v.useContext(wa),t=Gm("useRouteError"),r=ka("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function Qm(){let{router:e}=Bm("useNavigate"),t=ka("useNavigate"),r=v.useRef(!1);return xd(()=>{r.current=!0}),v.useCallback(async(o,i={})=>{Ve(r.current,yd),r.current&&(typeof o=="number"?await e.navigate(o):await e.navigate(o,{fromRouteId:t,...i}))},[e,t])}var $s={};function kd(e,t,r){!t&&!$s[e]&&($s[e]=!0,Ve(!1,r))}v.memo(Jm);function Jm({routes:e,manifest:t,future:r,state:n,isStatic:o,onError:i}){return wd(e,void 0,{manifest:t,state:n,isStatic:o,onError:i})}function Dr(e){B(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Xm({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:o,static:i=!1,useTransitions:l}){B(!wn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),s=v.useMemo(()=>({basename:a,navigator:o,static:i,useTransitions:l,future:{}}),[a,o,i,l]);typeof r=="string"&&(r=br(r));let{pathname:c="/",search:d="",hash:p="",state:h=null,key:y="default",mask:w}=r,x=v.useMemo(()=>{let j=it(c,a);return j==null?null:{location:{pathname:j,search:d,hash:p,state:h,key:y,mask:w},navigationType:n}},[a,c,d,p,h,y,n,w]);return Ve(x!=null,`<Router basename="${a}"> is not able to match the URL "${c}${d}${p}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:v.createElement(ze.Provider,{value:s},v.createElement(xn.Provider,{children:t,value:x}))}function Zm({children:e,location:t}){return Dm(Sl(e),t)}function Sl(e,t=[]){let r=[];return v.Children.forEach(e,(n,o)=>{if(!v.isValidElement(n))return;let i=[...t,o];if(n.type===v.Fragment){r.push.apply(r,Sl(n.props.children,i));return}B(n.type===Dr,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),B(!n.props.index||!n.props.children,"An index route cannot have child routes.");let l={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,middleware:n.props.middleware,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=Sl(n.props.children,i)),r.push(l)}),r}var to="get",ro="application/x-www-form-urlencoded";function Wo(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function qm(e){return Wo(e)&&e.tagName.toLowerCase()==="button"}function eh(e){return Wo(e)&&e.tagName.toLowerCase()==="form"}function th(e){return Wo(e)&&e.tagName.toLowerCase()==="input"}function rh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function nh(e,t){return e.button===0&&(!t||t==="_self")&&!rh(e)}var An=null;function oh(){if(An===null)try{new FormData(document.createElement("form"),0),An=!1}catch{An=!0}return An}var ih=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ni(e){return e!=null&&!ih.has(e)?(Ve(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ro}"`),null):e}function lh(e,t){let r,n,o,i,l;if(eh(e)){let a=e.getAttribute("action");n=a?it(a,t):null,r=e.getAttribute("method")||to,o=Ni(e.getAttribute("enctype"))||ro,i=new FormData(e)}else if(qm(e)||th(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||a.getAttribute("action");if(n=s?it(s,t):null,r=e.getAttribute("formmethod")||a.getAttribute("method")||to,o=Ni(e.getAttribute("formenctype"))||Ni(a.getAttribute("enctype"))||ro,i=new FormData(a,e),!oh()){let{name:c,type:d,value:p}=e;if(d==="image"){let h=c?`${c}.`:"";i.append(`${h}x`,"0"),i.append(`${h}y`,"0")}else c&&i.append(c,p)}}else{if(Wo(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=to,n=null,o=ro,l=e}return i&&o==="text/plain"&&(l=i,i=void 0),{action:n,method:r.toLowerCase(),encType:o,formData:i,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Sa(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Sd(e,t,r,n){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${n}`:o.pathname=`${o.pathname}.${n}`:o.pathname==="/"?o.pathname=`_root.${n}`:t&&it(o.pathname,t)==="/"?o.pathname=`${Lo(t)}/_root.${n}`:o.pathname=`${Lo(o.pathname)}.${n}`,o}async function ah(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function sh(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function uh(e,t,r){let n=await Promise.all(e.map(async o=>{let i=t.routes[o.route.id];if(i){let l=await ah(i,r);return l.links?l.links():[]}return[]}));return fh(n.flat(1).filter(sh).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function As(e,t,r,n,o,i){let l=(s,c)=>r[c]?s.route.id!==r[c].route.id:!0,a=(s,c)=>{var d;return r[c].pathname!==s.pathname||((d=r[c].route.path)==null?void 0:d.endsWith("*"))&&r[c].params["*"]!==s.params["*"]};return i==="assets"?t.filter((s,c)=>l(s,c)||a(s,c)):i==="data"?t.filter((s,c)=>{var p;let d=n.routes[s.route.id];if(!d||!d.hasLoader)return!1;if(l(s,c)||a(s,c))return!0;if(s.route.shouldRevalidate){let h=s.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((p=r[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:s.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function ch(e,t,{includeHydrateFallback:r}={}){return dh(e.map(n=>{let o=t.routes[n.route.id];if(!o)return[];let i=[o.module];return o.clientActionModule&&(i=i.concat(o.clientActionModule)),o.clientLoaderModule&&(i=i.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(i=i.concat(o.hydrateFallbackModule)),o.imports&&(i=i.concat(o.imports)),i}).flat(1))}function dh(e){return[...new Set(e)]}function ph(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function fh(e,t){let r=new Set;return new Set(t),e.reduce((n,o)=>{let i=JSON.stringify(ph(o));return r.has(i)||(r.add(i),n.push({key:i,link:o})),n},[])}function ja(){let e=v.useContext(kr);return Sa(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function mh(){let e=v.useContext(Ho);return Sa(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ca=v.createContext(void 0);Ca.displayName="FrameworkContext";function Vo(){let e=v.useContext(Ca);return Sa(e,"You must render this element inside a <HydratedRouter> element"),e}function hh(e,t){let r=v.useContext(Ca),[n,o]=v.useState(!1),[i,l]=v.useState(!1),{onFocus:a,onBlur:s,onMouseEnter:c,onMouseLeave:d,onTouchStart:p}=t,h=v.useRef(null);v.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let x=f=>{f.forEach(m=>{l(m.isIntersecting)})},j=new IntersectionObserver(x,{threshold:.5});return h.current&&j.observe(h.current),()=>{j.disconnect()}}},[e]),v.useEffect(()=>{if(n){let x=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(x)}}},[n]);let y=()=>{o(!0)},w=()=>{o(!1),l(!1)};return r?e!=="intent"?[i,h,{}]:[i,h,{onFocus:_r(a,y),onBlur:_r(s,w),onMouseEnter:_r(c,y),onMouseLeave:_r(d,w),onTouchStart:_r(p,y)}]:[!1,h,{}]}function _r(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function gh({page:e,...t}){let r=Lm(),{nonce:n}=Vo(),{router:o}=ja(),i=v.useMemo(()=>id(o.routes,e,o.basename),[o.routes,e,o.basename]);return i?(t.nonce==null&&n&&(t={...t,nonce:n}),r?v.createElement(yh,{page:e,matches:i,...t}):v.createElement(xh,{page:e,matches:i,...t})):null}function vh(e){let{manifest:t,routeModules:r}=Vo(),[n,o]=v.useState([]);return v.useEffect(()=>{let i=!1;return uh(e,t,r).then(l=>{i||o(l)}),()=>{i=!0}},[e,t,r]),n}function yh({page:e,matches:t,...r}){let n=Qe(),{future:o}=Vo(),{basename:i}=ja(),l=v.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let a=Sd(e,i,o.v8_trailingSlashAwareDataRequests,"rsc"),s=!1,c=[];for(let d of t)typeof d.route.shouldRevalidate=="function"?s=!0:c.push(d.route.id);return s&&c.length>0&&a.searchParams.set("_routes",c.join(",")),[a.pathname+a.search]},[i,o.v8_trailingSlashAwareDataRequests,e,n,t]);return v.createElement(v.Fragment,null,l.map(a=>v.createElement("link",{key:a,rel:"prefetch",as:"fetch",href:a,...r})))}function xh({page:e,matches:t,...r}){let n=Qe(),{future:o,manifest:i,routeModules:l}=Vo(),{basename:a}=ja(),{loaderData:s,matches:c}=mh(),d=v.useMemo(()=>As(e,t,c,i,n,"data"),[e,t,c,i,n]),p=v.useMemo(()=>As(e,t,c,i,n,"assets"),[e,t,c,i,n]),h=v.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let x=new Set,j=!1;if(t.forEach(m=>{var S;let g=i.routes[m.route.id];!g||!g.hasLoader||(!d.some(C=>C.route.id===m.route.id)&&m.route.id in s&&((S=l[m.route.id])!=null&&S.shouldRevalidate)||g.hasClientLoader?j=!0:x.add(m.route.id))}),x.size===0)return[];let f=Sd(e,a,o.v8_trailingSlashAwareDataRequests,"data");return j&&x.size>0&&f.searchParams.set("_routes",t.filter(m=>x.has(m.route.id)).map(m=>m.route.id).join(",")),[f.pathname+f.search]},[a,o.v8_trailingSlashAwareDataRequests,s,n,i,d,t,e,l]),y=v.useMemo(()=>ch(p,i),[p,i]),w=vh(p);return v.createElement(v.Fragment,null,h.map(x=>v.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...r})),y.map(x=>v.createElement("link",{key:x,rel:"modulepreload",href:x,...r})),w.map(({key:x,link:j})=>v.createElement("link",{key:x,nonce:r.nonce,...j,crossOrigin:j.crossOrigin??r.crossOrigin})))}function wh(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var bh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{bh&&(window.__reactRouterVersion="7.18.1")}catch{}function kh({basename:e,children:t,useTransitions:r,window:n}){let o=v.useRef();o.current==null&&(o.current=tm({window:n,v5Compat:!0}));let i=o.current,[l,a]=v.useState({action:i.action,location:i.location}),s=v.useCallback(c=>{r===!1?a(c):v.startTransition(()=>a(c))},[r]);return v.useLayoutEffect(()=>i.listen(s),[i,s]),v.createElement(Xm,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:i,useTransitions:r})}var or=v.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:o,reloadDocument:i,replace:l,mask:a,state:s,target:c,to:d,preventScrollReset:p,viewTransition:h,defaultShouldRevalidate:y,...w},x){let{basename:j,navigator:f,useTransitions:m}=v.useContext(ze),g=typeof d=="string"&&ya.test(d),S=fd(d,j);d=S.to;let C=Fm(d,{relative:o}),k=Qe(),b=null;if(a){let q=xa(a,[],k.mask?k.mask.pathname:"/",!0);j!=="/"&&(q.pathname=q.pathname==="/"?j:Ae([j,q.pathname])),b=f.createHref(q)}let[N,T,I]=hh(n,w),$=Nh(d,{replace:l,mask:a,state:s,target:c,preventScrollReset:p,relative:o,viewTransition:h,defaultShouldRevalidate:y,useTransitions:m});function J(q){t&&t(q),q.defaultPrevented||$(q)}let ce=!(S.isExternal||i),we=v.createElement("a",{...w,...I,href:(ce?b:void 0)||S.absoluteURL||C,onClick:ce?J:t,ref:wh(x,T),target:c,"data-discover":!g&&r==="render"?"true":void 0});return N&&!g?v.createElement(v.Fragment,null,we,v.createElement(gh,{page:C})):we});or.displayName="Link";var Sh=v.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:o=!1,style:i,to:l,viewTransition:a,children:s,...c},d){let p=bn(l,{relative:c.relative}),h=Qe(),y=v.useContext(Ho),{navigator:w,basename:x}=v.useContext(ze),j=y!=null&&Ih(p)&&a===!0,f=w.encodeLocation?w.encodeLocation(p).pathname:p.pathname,m=h.pathname,g=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;r||(m=m.toLowerCase(),g=g?g.toLowerCase():null,f=f.toLowerCase()),g&&x&&(g=it(g,x)||g);const S=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let C=m===f||!o&&m.startsWith(f)&&m.charAt(S)==="/",k=g!=null&&(g===f||!o&&g.startsWith(f)&&g.charAt(f.length)==="/"),b={isActive:C,isPending:k,isTransitioning:j},N=C?t:void 0,T;typeof n=="function"?T=n(b):T=[n,C?"active":null,k?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let I=typeof i=="function"?i(b):i;return v.createElement(or,{...c,"aria-current":N,className:T,ref:d,style:I,to:l,viewTransition:a},typeof s=="function"?s(b):s)});Sh.displayName="NavLink";var jh=v.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:o,state:i,method:l=to,action:a,onSubmit:s,relative:c,preventScrollReset:d,viewTransition:p,defaultShouldRevalidate:h,...y},w)=>{let{useTransitions:x}=v.useContext(ze),j=Lh(),f=Rh(a,{relative:c}),m=l.toLowerCase()==="get"?"get":"post",g=typeof a=="string"&&ya.test(a),S=C=>{if(s&&s(C),C.defaultPrevented)return;C.preventDefault();let k=C.nativeEvent.submitter,b=(k==null?void 0:k.getAttribute("formmethod"))||l,N=()=>j(k||C.currentTarget,{fetcherKey:t,method:b,navigate:r,replace:o,state:i,relative:c,preventScrollReset:d,viewTransition:p,defaultShouldRevalidate:h});x&&r!==!1?v.startTransition(()=>N()):N()};return v.createElement("form",{ref:w,method:m,action:f,onSubmit:n?s:S,...y,"data-discover":!g&&e==="render"?"true":void 0})});jh.displayName="Form";function Ch(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jd(e){let t=v.useContext(kr);return B(t,Ch(e)),t}function Nh(e,{target:t,replace:r,mask:n,state:o,preventScrollReset:i,relative:l,viewTransition:a,defaultShouldRevalidate:s,useTransitions:c}={}){let d=Sr(),p=Qe(),h=bn(e,{relative:l});return v.useCallback(y=>{if(nh(y,t)){y.preventDefault();let w=r!==void 0?r:fn(p)===fn(h),x=()=>d(e,{replace:w,mask:n,state:o,preventScrollReset:i,relative:l,viewTransition:a,defaultShouldRevalidate:s});c?v.startTransition(()=>x()):x()}},[p,d,h,r,n,o,t,e,i,l,a,s,c])}var Eh=0,Th=()=>`__${String(++Eh)}__`;function Lh(){let{router:e}=jd("useSubmit"),{basename:t}=v.useContext(ze),r=Wm(),n=e.fetch,o=e.navigate;return v.useCallback(async(i,l={})=>{let{action:a,method:s,encType:c,formData:d,body:p}=lh(i,t);if(l.navigate===!1){let h=l.fetcherKey||Th();await n(h,r,l.action||a,{defaultShouldRevalidate:l.defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:d,body:p,formMethod:l.method||s,formEncType:l.encType||c,flushSync:l.flushSync})}else await o(l.action||a,{defaultShouldRevalidate:l.defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:d,body:p,formMethod:l.method||s,formEncType:l.encType||c,replace:l.replace,state:l.state,fromRouteId:r,flushSync:l.flushSync,viewTransition:l.viewTransition})},[n,o,t,r])}function Rh(e,{relative:t}={}){let{basename:r}=v.useContext(ze),n=v.useContext(at);B(n,"useFormAction must be used inside a RouteContext");let[o]=n.matches.slice(-1),i={...bn(e||".",{relative:t})},l=Qe();if(e==null){i.search=l.search;let a=new URLSearchParams(i.search),s=a.getAll("index");if(s.some(d=>d==="")){a.delete("index"),s.filter(p=>p).forEach(p=>a.append("index",p));let d=a.toString();i.search=d?`?${d}`:""}}return(!e||e===".")&&o.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(i.pathname=i.pathname==="/"?r:Ae([r,i.pathname])),fn(i)}function Ih(e,{relative:t}={}){let r=v.useContext(gd);B(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=jd("useViewTransitionState"),o=bn(e,{relative:t});if(!r.isTransitioning)return!1;let i=it(r.currentLocation.pathname,n)||r.currentLocation.pathname,l=it(r.nextLocation.pathname,n)||r.nextLocation.pathname;return To(o.pathname,l)!=null||To(o.pathname,i)!=null}const Re=[{id:"tmdb-278",tmdbId:278,titleKo:"쇼생크 탈출",originalTitle:"The Shawshank Redemption",releaseYear:1994,primaryGenre:"드라마",genres:["드라마","범죄"],posterPath:"https://image.tmdb.org/t/p/w500/qV9BQZdiM8foEzDz0Ag5hGWE5qM.jpg",overviewKo:"촉망받는 은행 간부 앤디 듀프레인은 아내와 그녀의 정부를 살해했다는 누명을 쓴다. 주변의 증언과 살해 현장의 그럴듯한 증거들로 그는 종신형을 선고받고 악질범들만 수용한다는 지옥같은 교도소 쇼생크로 향한다. 인간 말종 쓰레기들만 모인 그곳에서 그는 이루 말할 수 없는 억압과 짐승보다 못한 취급을 당한다. 그러던 어느 날, 간수의 세금을 면제받게 해 준 덕분에 그는 일약 교도소의 비공식 회계사로 일하게 된다. 그 와중에 교도소 소장은 죄수들을 이리저리 부리면서 검은 돈을 긁어 모으고 앤디는 이 돈을 세탁하여 불려주면서 그의 돈을 관리하는데...",originalLanguage:"en",runtime:142,fictionReality:15,highLowTempo:35,emotionIdea:85,openClosure:15},{id:"tmdb-13",tmdbId:13,titleKo:"포레스트 검프",originalTitle:"Forrest Gump",releaseYear:1994,primaryGenre:"드라마",genres:["코미디","드라마","로맨스"],posterPath:"https://image.tmdb.org/t/p/w500/l8wvbQQIBV8LBHmx3Wx9xbE2kzt.jpg",overviewKo:"불편한 다리, 남들보다 조금 떨어지는 지능을 가진 포레스트 검프는 헌신적인 어머니의 보살핌과 첫사랑 제니와의 만남으로 편견과 괴롭힘 속에서도 따뜻한 마음을 지니고 성장한다. 또래들의 괴롭힘을 피해 도망치던 포레스트는 누구보다 빠르게 달릴 수 있는 자신의 재능을 깨닫는다. 그의 재능을 알아 본 대학에서 그를 미식축구 선수로 발탁하고, 졸업 후에도 뛰어난 신체능력으로 군에 들어가 무공훈장을 수여받는 등 탄탄한 인생 가도에 오르게 된 포레스트. 하지만 어머니가 병에 걸려 죽음을 맞이하고, 첫사랑 제니 역시 그의 곁을 떠나가며 다시 한 번 인생의 전환점을 맞이하게 되는데...",originalLanguage:"en",runtime:142,fictionReality:20,highLowTempo:45,emotionIdea:90,openClosure:20},{id:"tmdb-490132",tmdbId:490132,titleKo:"그린 북",originalTitle:"Green Book",releaseYear:2018,primaryGenre:"드라마",genres:["드라마","코미디","역사"],posterPath:"https://image.tmdb.org/t/p/w500/dyqQ12gZGwl5Y0R9UsLBDkZWOUA.jpg",overviewKo:"1962년 미국, 입담과 주먹만 믿고 살아가던 토니 발레롱가는 교양과 우아함 그 자체인 천재 피아니스트 돈 셜리의 운전기사 면접을 보게 된다. 백악관에도 초청되는 등 미국 전역에서 콘서트 요청을 받으며 명성을 떨치고 있는 돈 셜리는 위험하기로 소문난 미국 남부 투어 공연을 떠나기로 결심하고, 투어 기간 동안 자신의 보디가드 겸 운전기사로 토니를 고용한다. 거친 인생을 살아온 토니와 교양과 기품을 지키며 살아온 돈. 생각, 행동, 말투, 취향까지 달라도 너무 다른 두 사람은 그들을 위한 여행안내서 그린북에 의존해 특별한 남부 투어를 시작하는데...",originalLanguage:"en",runtime:130,fictionReality:10,highLowTempo:40,emotionIdea:85,openClosure:15},{id:"tmdb-597",tmdbId:597,titleKo:"타이타닉",originalTitle:"Titanic",releaseYear:1997,primaryGenre:"드라마",genres:["드라마","로맨스"],posterPath:"https://image.tmdb.org/t/p/w500/132KjhVrWUqKFVfMAKKNkherytA.jpg",overviewKo:'"내 인생의 가장 큰 행운은 당신을 만난 거야" 우연한 기회로 티켓을 구해 타이타닉호에 올라탄 자유로운 영혼을 가진 화가 ‘잭’(레오나르도 디카프리오)은 막강한 재력의 약혼자와 함께 1등실에 승선한 ‘로즈’(케이트 윈슬렛)에게 한눈에 반한다. 진실한 사랑을 꿈꾸던 ‘로즈’ 또한 생애 처음 황홀한 감정에 휩싸이고, 둘은 운명 같은 사랑에 빠지는데… 가장 차가운 곳에서 피어난 뜨거운 사랑! 영원히 가라앉지 않는 세기의 사랑이 펼쳐진다!',originalLanguage:"en",runtime:194,fictionReality:25,highLowTempo:60,emotionIdea:95,openClosure:40},{id:"tmdb-299536",tmdbId:299536,titleKo:"어벤져스: 인피니티 워",originalTitle:"Avengers: Infinity War",releaseYear:2019,primaryGenre:"드라마",genres:["모험","액션","SF"],posterPath:"https://image.tmdb.org/t/p/w500/kmP6viwzcEkZeoi1LaVcQemcvZh.jpg",overviewKo:"타노스는 6개의 인피니티 스톤을 획득해 신으로 군림하려 한다. 그것은 곧 인류의 절반을 학살해 우주의 균형을 맞추겠다는 뜻. 타노스는 닥터 스트레인지가 소유한 타임 스톤, 비전의 이마에 박혀 있는 마인드 스톤을 차지하기 위해 지구를 침략한다. 아이언맨과 스파이더맨은 가디언즈 오브 갤럭시의 멤버들과 타노스를 상대한다. 지구에선 캡틴 아메리카, 완다, 블랙 위도우, 블랙 팬서 등이 비전을 지키기 위해 뭉친다.",originalLanguage:"en",runtime:149,fictionReality:95,highLowTempo:85,emotionIdea:70,openClosure:10},{id:"tmdb-637",tmdbId:637,titleKo:"인생은 아름다워",originalTitle:"La vita è bella",releaseYear:1997,primaryGenre:"드라마",genres:["코미디","드라마"],posterPath:"https://image.tmdb.org/t/p/w500/iyQ8pmCpmnPrGtaHMfmSvQLv8Fy.jpg",overviewKo:"로마에 갓 상경한 시골 총각 귀도는 운명처럼 만난 여인 도라에게 첫눈에 반한다. 넘치는 재치와 유머로 약혼자가 있던 그녀를 사로잡은 귀도는 가정을 꾸리며 분신과도 같은 아들 조수아를 얻는다. 조수아의 다섯 살 생일, 갑작스레 들이닥친 군인들은 귀도와 조수아를 수용소 행 기차에 실어버리고, 소식을 들은 도라 역시 기차에 따라 오른다. 귀도는 아들을 달래기 위해 무자비한 수용소 생활을 단체게임이라 속이고 1,000점을 따는 우승자에게는 진짜 탱크가 주어진다고 말한다. 하루하루가 지나 어느덧 전쟁이 끝났다는 말을 들은 귀도는 조수아를 창고에 숨겨둔 채 아내를 찾아 나서는데...",originalLanguage:"it",runtime:116,fictionReality:15,highLowTempo:40,emotionIdea:95,openClosure:30},{id:"tmdb-496243",tmdbId:496243,titleKo:"기생충",originalTitle:"기생충",releaseYear:2019,primaryGenre:"드라마",genres:["코미디","스릴러","드라마"],posterPath:"https://image.tmdb.org/t/p/w500/jjHccoFjbqlfr4VGLVLT7yek0Xn.jpg",overviewKo:"전원 백수로 살 길 막막하지만 사이는 좋은 기택 가족. 장남 기우에게 명문대생 친구가 연결시켜 준 고액 과외 자리는 모처럼 싹튼 고정수입의 희망이다. 온 가족의 도움과 기대 속에 박 사장 집으로 향하는 기우. 글로벌 IT기업의 CEO인 박 사장의 저택에 도착하자 젊고 아름다운 사모님 연교와 가정부 문광이 기우를 맞이한다. 큰 문제 없이 박 사장의 딸 다혜의 과외를 시작한 기우. 그러나 이렇게 시작된 두 가족의 만남 뒤로, 걷잡을 수 없는 사건이 기다리고  있는데.....",originalLanguage:"ko",runtime:131,fictionReality:15,highLowTempo:70,emotionIdea:35,openClosure:85},{id:"tmdb-370172",tmdbId:370172,titleKo:"007 노 타임 투 다이",originalTitle:"No Time to Die",releaseYear:2017,primaryGenre:"드라마",genres:["액션","스릴러","모험"],posterPath:"https://image.tmdb.org/t/p/w500/68ZwnPALUeweaFdT1z75oXJ4Xie.jpg",overviewKo:"MI6를 떠난 이후 매들린과 이탈리아의 오랜 도시 마테라에서 평화로운 일상을 즐기던 제임스 본드. 어느 날 CIA 요원 펠릭스가 찾아와 선별적 DNA 공격이 가능한 새로운 형태의 생화학 무기 유출을 알린다. 위험에 처한 전 세계를 구하기 위해 복귀하게 된 제임스 본드는 임무를 수행하는 과정에서 새로운 MI6 요원 노미를 만나고, 모든 사건의 배후에 운명으로 얽혀 있는 최악의 적 사핀이 존재한다는 것을 알아낸다. 위험천만한 위기 속, 감춰져 있던 비밀이 밝혀지면서 작전은 점점 더 예측할 수 없는 상황으로 치닫게 되는데...",originalLanguage:"en",runtime:163,fictionReality:10,highLowTempo:30,emotionIdea:80,openClosure:75},{id:"tmdb-822119",tmdbId:822119,titleKo:"캡틴 아메리카: 브레이브 뉴 월드",originalTitle:"Captain America: Brave New World",releaseYear:2022,primaryGenre:"드라마",genres:["액션","스릴러","SF"],posterPath:"https://image.tmdb.org/t/p/w500/qj1uEI7zrCWbMppjFZmCXVlWlb1.jpg",overviewKo:"대통령이 된 새디우스 로스와 재회 후, 국제적인 사건의 중심에 서게 된 샘이 전 세계를 붉게 장악하려는 사악한 음모 뒤에 숨겨진 존재와 이유를 파헤쳐 나가는 액션 블록버스터",originalLanguage:"en",runtime:119,fictionReality:15,highLowTempo:50,emotionIdea:75,openClosure:90},{id:"tmdb-1009815",tmdbId:1009815,titleKo:"패스트 라이브즈",originalTitle:"패스트 라이브즈",releaseYear:2023,primaryGenre:"드라마",genres:["드라마"],posterPath:"https://image.tmdb.org/t/p/w500/d08S5v9Wf3H807sR747hN4V44q7.jpg",overviewKo:"어린 시절 서울에서 알게 된 나영과 해성. 20여 년이 흐른 뒤 뉴욕에서 운명처럼 재회하며 겪는 애틋한 사랑과 인연의 서사.",originalLanguage:"ko",runtime:120,fictionReality:5,highLowTempo:25,emotionIdea:80,openClosure:80},{id:"tmdb-508965",tmdbId:508965,titleKo:"클라우스",originalTitle:"Klaus",releaseYear:2022,primaryGenre:"드라마",genres:["애니메이션","가족","코미디"],posterPath:"https://image.tmdb.org/t/p/w500/AdcGUXl16jIgq7NZVpfNqhFyaRQ.jpg",overviewKo:"편지 6천 통을 배달하라고요? 소통은커녕 싸움만 일삼는 마을에서요? 불가능해 보이는 임무에 좌절한 우체부. 그냥 포기하려던 차, 장난감 장인을 만나 아이디어가 떠오른다. 아이들에게 장난감을 줄 테니 편지를 쓰라고 하는 거야!",originalLanguage:"en",runtime:97,fictionReality:10,highLowTempo:35,emotionIdea:85,openClosure:65},{id:"tmdb-569094",tmdbId:569094,titleKo:"스파이더맨: 어크로스 더 유니버스",originalTitle:"Spider-Man: Across the Spider-Verse",releaseYear:2019,primaryGenre:"코미디",genres:["애니메이션","액션","모험","SF"],posterPath:"https://image.tmdb.org/t/p/w500/lMWTlGr9jVUC18T515hPRKym5QQ.jpg",overviewKo:"여러 성장통을 겪으며 새로운 스파이더맨이 된 마일스 모랄레스. 그 앞에 다른 평행세계의 스파이더우먼 그웬이 다시 나타난다. 모든 차원의 멀티버스 속 스파이더맨들을 만나게 되지만, 질서에 대한 신념이 부딪히며 예상치 못한 균열이 생기는데… 상상 그 이상을 넘어서는 멀티버스의 세계가 열린다!",originalLanguage:"en",runtime:140,fictionReality:15,highLowTempo:80,emotionIdea:40,openClosure:15},{id:"tmdb-572164",tmdbId:572164,titleKo:"엑시트",originalTitle:"엑시트",releaseYear:2019,primaryGenre:"코미디",genres:["액션","코미디"],posterPath:"https://image.tmdb.org/t/p/w500/7GTwjMaEVLbDBkg6McEizHTH1PF.jpg",overviewKo:"대학교 산악 동아리 에이스 출신이지만 졸업 후 몇 년째 취업 실패로 눈칫밥만 먹는 용남은 온 가족이 참석한 어머니의 칠순 잔치에서 연회장 직원으로 취업한 동아리 후배 의주를 만난다. 어색한 재회도 잠시, 칠순 잔치가 무르익던 중 의문의 연기가 빌딩에서 피어 오르며 피할 새도 없이 순식간에 서울 도심은 유독가스로 뒤덮여 일대혼란에 휩싸이게 된다. 용남과 의주는 산악 동아리 시절 쌓아 뒀던 모든 체력과 스킬을 동원해 탈출을 향한 기지를 발휘하기 시작하는데…",originalLanguage:"ko",runtime:103,fictionReality:20,highLowTempo:85,emotionIdea:60,openClosure:15},{id:"tmdb-508442",tmdbId:508442,titleKo:"소울",originalTitle:"Soul",releaseYear:2020,primaryGenre:"코미디",genres:["애니메이션","가족","드라마","음악","판타지"],posterPath:"https://image.tmdb.org/t/p/w500/qJiaB4RJMM5Oh6A4rqrEOHQUJbu.jpg",overviewKo:"뉴욕에서 음악 선생님으로 일하던 조는 꿈에 그리던 최고의 밴드와 재즈 클럽에서 연주하게 된 그 날, 예기치 못한 사고로 영혼이 되어 태어나기 전 세상에 떨어진다. 탄생 전 영혼들이 멘토와 함께 자신의 관심사를 발견하면 지구 통행증을 발급하는 태어나기 전 세상. 조는 그 곳에서 유일하게 지구에 가고 싶어하지 않는 시니컬한 영혼 22의 멘토가 된다. 링컨, 간디, 테레사 수녀도 멘토되길 포기한 영혼 22, 꿈의 무대에 서려면 22의 지구 통행증이 필요한 조. 그는 다시 지구로 돌아가 꿈의 무대에 설 수 있을까?",originalLanguage:"en",runtime:101,fictionReality:95,highLowTempo:65,emotionIdea:80,openClosure:40},{id:"tmdb-228967",tmdbId:228967,titleKo:"인터뷰",originalTitle:"The Interview",releaseYear:2014,primaryGenre:"코미디",genres:["액션","코미디"],posterPath:"https://image.tmdb.org/t/p/w500/tIDC4xT65l7a8qbgg8GvwD5g8c5.jpg",overviewKo:"북한의 지도자의 인터뷰를 하기 위해 떠나는 토크쇼 사회자와 프로듀서에게 암살의 제의가 들어오면서 벌어지는 코미디.",originalLanguage:"en",runtime:112,fictionReality:60,highLowTempo:65,emotionIdea:85,openClosure:15},{id:"tmdb-181808",tmdbId:181808,titleKo:"스타워즈 에피소드 8: 라스트 제다이",originalTitle:"Star Wars: The Last Jedi",releaseYear:2009,primaryGenre:"코미디",genres:["모험","액션","SF"],posterPath:"https://image.tmdb.org/t/p/w500/zRvMTCzUVnkdW9lno9HQwrigWSr.jpg",overviewKo:"악의 세력인 무자비한 퍼스트 오더가 은하계를 장악한 시대. 레아 장군의 저항군은 힘겨운 싸움을 이어가고 있다. 그들의 유일한 희망은 마지막 제다이 루크 스카이워커. 저항군은 승리의 불씨를 지필 마지막 희망을 찾아 레이를 과거의 영웅 루크에게 보낸다. 레이는 우여곡절 끝에 루크를 찾아내지만, 자신의 잘못으로 레아의 아들 벤 솔로가 퍼스트 오더의 실세 카일로 렌이 되었다고 생각하는 루크는 함께 떠나자는 레이의 제안을 거절한다. 한편 레이는 알 수 없는 이유로 카일로 렌과 교감할 수 있게 된다.",originalLanguage:"en",runtime:152,fictionReality:15,highLowTempo:70,emotionIdea:90,openClosure:20},{id:"tmdb-11886",tmdbId:11886,titleKo:"로빈 훗",originalTitle:"Robin Hood",releaseYear:2009,primaryGenre:"코미디",genres:["애니메이션","가족","모험"],posterPath:"https://image.tmdb.org/t/p/w500/fU2lKgnOhxtepnSgtIoSPavayeq.jpg",overviewKo:"용맹스런 사자왕 리차드가 십자군 전쟁에 나간 사이 교활한 존 왕자가 왕위를 차지한다. 존 왕자는 간사한 히스 경을 오른팔로 삼아 백성들로부터 무리하게 세금을 걷어들여 원성이 자자했다. 선량하고 힘없는 백성들에게 유일한 희망은 로빈 후드 뿐. 셔우드 숲 속에 사는 의적 로빈 후드와 그의 부하 리틀 존은 부자들의 금을 훔쳐다가 몰래 가난한 사람들에게 나누어주곤 한다. 어느 날 두 사람이 얘기를 나누고 있는데 돈 냄새가 물씬 풍겨온다. 존 왕자가 탄 황실 마차가 근처를 지나던 것. 집시 점쟁이 여인으로 분장한 로빈과 리틀 존은 한껏 왕자를 치켜올려주며 정신을 빼놓고는 반지와 황금, 의복 등을 모두 빼앗아 달아나는데...",originalLanguage:"en",runtime:83,fictionReality:10,highLowTempo:85,emotionIdea:30,openClosure:10},{id:"tmdb-346685",tmdbId:346685,titleKo:"걸 온 더 트레인",originalTitle:"The Girl on the Train",releaseYear:2023,primaryGenre:"코미디",genres:["범죄","미스터리","스릴러"],posterPath:"https://image.tmdb.org/t/p/w500/1w6pJJfB1HFUJ9tA8AMxLXYLCW1.jpg",overviewKo:"톰과의 이혼으로 알코올 의존자가 된 레이첼은 매일 같은 시간, 같은 칸 통근 열차에 앉아 창 밖 풍경을 보는 게 낙이다. 그런 그녀의 눈에 들어온 완벽한 커플, 메건 부부. 어느 날 메건이 실종되고, 그녀의 남편 스콧이 용의선상에 오르지만 톰의 새로운 부인 애나는 사건의 용의자로 레이첼을 지목한다.",originalLanguage:"en",runtime:112,fictionReality:90,highLowTempo:75,emotionIdea:50,openClosure:35},{id:"tmdb-1817",tmdbId:1817,titleKo:"폰 부스",originalTitle:"Phone Booth",releaseYear:2001,primaryGenre:"코미디",genres:["스릴러","범죄"],posterPath:"https://image.tmdb.org/t/p/w500/t4w6KSB5Zhfo6MFNlYjKT0L2Pno.jpg",overviewKo:'뉴욕의 잘 나가는 미디어 에이전트 스투 세퍼드(콜린 파렐). 어느날 공중전화 박스에서 통화를 마치고 돌아서는 그의 뒤에서 벨 울리는 소리가 들린다. 무심코 수화기를 든 순간 전화선 저편에서 "전화를 끊으면 네 목숨도 끊긴다"는 저음의 목소리가 들려온다. 스투는 정신병자의 장난 전화려니 생각하고 전화를 끊으려고 하지만 전화선 저편의 남자와 얘기할수록 자신이 뭔가 심상치 않은 함정에 빠졌음을 직감적으로 깨닫게 된다. 이윽고 전화박스에서 나오라며 자신에게 시비를 걸던 남자가 저격수의 총에 죽고, 이를 본 스투는 극한의 공포에 사로잡히게 된다.',originalLanguage:"en",runtime:81,fictionReality:15,highLowTempo:60,emotionIdea:85,openClosure:20},{id:"tmdb-772",tmdbId:772,titleKo:"나 홀로 집에 2: 뉴욕을 헤매다",originalTitle:"Home Alone 2: Lost in New York",releaseYear:2003,primaryGenre:"코미디",genres:["코미디","가족","모험"],posterPath:"https://image.tmdb.org/t/p/w500/eUYFbtuSBuvihNmFgLJtl1Y54fE.jpg",overviewKo:"시카고에 살고 있는 케빈의 가족은 크리스마스에 플로리다에 가기로 되어있다. 그러나 공항의 소란 속에, 홀로 뉴욕행 비행기에 오르게 되어 거대한 도시에 혼자 남게 된 케빈은 기지를 발휘하여 아버지 카드로 플로리자 호텔에 묶게되고, 의심스러워 하는 종업원들을 멋지게 따돌린다. 한편, 감옥을 탈출한 2인조 강도 마브와 해리는 뉴욕의 장난감 가게를 털어 한 몫 잡을 꿈에 부풀어 있는데...",originalLanguage:"en",runtime:115,fictionReality:75,highLowTempo:70,emotionIdea:75,openClosure:15},{id:"tmdb-447332",tmdbId:447332,titleKo:"콰이어트 플레이스",originalTitle:"A Quiet Place",releaseYear:2004,primaryGenre:"코미디",genres:["공포","드라마","SF"],posterPath:"https://image.tmdb.org/t/p/w500/vdiR7qc7cWxXD0pT8BZJ35DDB0B.jpg",overviewKo:"인류 종말의 초기 단계로 보이는 가까운 미래, 이미 폐쇄된 뉴욕 주에서 간신히 살아남은 부부와 세 자녀가 맨발로 숨죽인 채 시골 마을의 식료품점을 헤맨다. 작은 소리에도 민감하게 반응해 소리의 근원지를 파괴하러 달려오는 괴 생명체가 곳곳에 도사리고 있기 때문. 전 세계를 파괴해 버린 무차별적인 공격과 숨통을 조여 오는 거대한 위협 속에서 살아남기 위해 주인공 가족은 일상에서 발생하는 모든 소리를 최소화하며 위태롭게 살아간다. 숨소리조차 마음 편히 낼 수 없는 극한의 상황, 아버지 리(존 크래신스키)와 어머니 에블린(에밀리 블런트)은 아이들과 자신들의 생명을 지키기 위해 고군분투하는데...",originalLanguage:"en",runtime:91,fictionReality:30,highLowTempo:80,emotionIdea:40,openClosure:10},{id:"tmdb-9277",tmdbId:9277,titleKo:"스팅",originalTitle:"The Sting",releaseYear:1990,primaryGenre:"코미디",genres:["코미디","범죄","드라마"],posterPath:"https://image.tmdb.org/t/p/w500/v9LHvvgAIhqpEBBjZSw116mJdmI.jpg",overviewKo:"1930년대 시카고. 도박의 명수인 후커(로버트 레드포드)는 곤도르프(폴 뉴먼)와 손잡고 타락한 갱 두목인 로네건에게서 교묘한 방법으로 돈을 빼앗을 궁리를 한다. 최종 목표는 돈이지만 후커에게는 다른 이유도 있다. 포카와 경마를 좋아하는 로네건을 유혹해 가짜 경마장에서 돈을 빼앗고 다시 기차에서 큰 포커판을 벌이는데...",originalLanguage:"en",runtime:129,fictionReality:25,highLowTempo:75,emotionIdea:80,openClosure:10},{id:"tmdb-245891",tmdbId:245891,titleKo:"존 윅",originalTitle:"John Wick",releaseYear:2014,primaryGenre:"액션·어드벤처",genres:["액션","스릴러"],posterPath:"https://image.tmdb.org/t/p/w500/mjKe6CmoxRcdiwbDeghyQKY09J.jpg",overviewKo:"전설이라 불리던 킬러 존 윅은 사랑하는 여인을 만나 결혼을 하면서 범죄의 세계에서 은퇴한다. 행복도 잠시, 투병 끝에 부인이 세상을 떠나고 그의 앞으로 부인이 죽기 전에 보낸 강아지 한 마리가 선물로 배달된다. 어느 날 그의 차를 탐낸 러시아 마피아의 일원 요세프가 존 윅을 폭행하고 애완견 데이지마저 죽여버리는 일이 벌어진다. 그런데 요세프는 과거 존 윅을 고용한 적 있는 러시아 마피아 보스 비고의 아들이다. 마지막 남은 애완견마저 잃은 존 윅은 이제 그만의 방식으로 복수를 시작하는데...",originalLanguage:"en",runtime:101,fictionReality:25,highLowTempo:90,emotionIdea:20,openClosure:15},{id:"tmdb-361743",tmdbId:361743,titleKo:"탑건: 매버릭",originalTitle:"Top Gun: Maverick",releaseYear:2022,primaryGenre:"액션·어드벤처",genres:["액션","드라마"],posterPath:"https://image.tmdb.org/t/p/w500/jeqXUwNilvNqNXqAHsdwm5pEfae.jpg",overviewKo:"최고의 파일럿이자 전설적인 인물 매버릭은 자신이 졸업한 훈련학교 교관으로 발탁된다. 그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. 매버릭의 지휘 아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자 매버릭은 자신이 가르친 동료들과 함께 마지막이 될지 모를 하늘 위 비행에 나서는데...",originalLanguage:"en",runtime:131,fictionReality:15,highLowTempo:85,emotionIdea:80,openClosure:15},{id:"tmdb-76600",tmdbId:76600,titleKo:"아바타: 물의 길",originalTitle:"Avatar: The Way of Water",releaseYear:2022,primaryGenre:"액션·어드벤처",genres:["액션","모험","SF"],posterPath:"https://image.tmdb.org/t/p/w500/u2aVXft5GLBQnjzWVNda7sdDpdu.jpg",overviewKo:"판도라 행성에서 제이크 설리와 네이티리가 이룬 가족이 겪게 되는 무자비한 위협과 살아남기 위해 떠나야 하는 긴 여정과 전투, 그리고 견뎌내야 할 상처에 대한 이야기를 그렸다. 살아남기 위해 설리 가족이 숲에서 바다로 터전을 옮기면서 겪게 되는 화합의 과정, 그리고 곳곳에서 도사리는 새로운 위협까지 역경 속에서 더 아름답게 펼쳐진다.",originalLanguage:"en",runtime:192,fictionReality:95,highLowTempo:80,emotionIdea:70,openClosure:45},{id:"tmdb-76341",tmdbId:76341,titleKo:"매드맥스: 분노의 도로",originalTitle:"Mad Max: Fury Road",releaseYear:2015,primaryGenre:"액션·어드벤처",genres:["액션","모험","SF"],posterPath:"https://image.tmdb.org/t/p/w500/cadVm6gKYYukmPysHGCwrawUHHa.jpg",overviewKo:"핵전쟁으로 멸망한 22세기. 얼마 남지 않은 물과 기름을 차지한 독재자 임모탄 조가 살아남은 인류를 지배한다. 한편 아내와 딸을 잃고 살아남기 위해 사막을 떠돌던 맥스는 임모탄의 부하들에게 납치되어 노예로 끌려가고, 폭정에 반발한 외팔의 사령관 퓨리오사는 인류 생존의 열쇠를 쥔 임모탄의 여인들을 탈취해 분노의 도로로 폭주한다. 이에 임모탄의 전사인 워보이들과 신인류 눅스는 피주머니 신세로 전락한 맥스를 이끌고 퓨리오사의 뒤를 쫓는데...",originalLanguage:"en",runtime:120,fictionReality:80,highLowTempo:95,emotionIdea:40,openClosure:30},{id:"tmdb-155",tmdbId:155,titleKo:"다크 나이트",originalTitle:"The Dark Knight",releaseYear:2008,primaryGenre:"액션·어드벤처",genres:["액션","범죄","스릴러"],posterPath:"https://image.tmdb.org/t/p/w500/9ICUbdveP56jRoMMVkXSOr3ceyV.jpg",overviewKo:"범죄와 부정부패를 제거하여 고담시를 지키려는 배트맨. 그는 짐 고든 형사와 패기 넘치는 고담시 지방 검사 하비 덴트와 함께 도시를 범죄 조직으로부터 영원히 구원하고자 한다. 세 명의 의기투합으로 위기에 처한 악당들이 모인 자리에 보라색 양복을 입고 얼굴에 짙게 화장을 한 괴이한 존재가 나타나 배트맨을 죽이자는 사상 초유의 제안을 한다. 그는 바로 어떠한 룰도, 목적도 없는 사상 최악의 악당 미치광이 살인광대 조커. 배트맨을 죽이고 고담시를 끝장내버리기 위한 조커의 광기 어린 행각에 도시는 혼란에 빠지는데...",originalLanguage:"en",runtime:152,fictionReality:40,highLowTempo:80,emotionIdea:45,openClosure:75},{id:"tmdb-120",tmdbId:120,titleKo:"반지의 제왕: 반지 원정대",originalTitle:"The Lord of the Rings: The Fellowship of the Ring",releaseYear:2001,primaryGenre:"액션·어드벤처",genres:["모험","판타지","액션"],posterPath:"https://image.tmdb.org/t/p/w500/r18JdjImbWDRwkbVDIzWoLQqkCo.jpg",overviewKo:"호빗이라 불리우는 난장이 종족 중의 한 명인 프로도는 자신의 삼촌에게서 우연히 절대 반지를 물려받게 되고, 마법사 간달프를 통해서 절대반지가 사우론의 손에 들어가면 악의 세력이 세상을 지배하게 된다는 것을 알게 된다. 하지만 절대반지를 영원히 파괴할 수 있는 유일한 방법은 반지가 만들어진 불의 산의 용암에 그것을 던져 넣는 길 뿐이다. 마침내 프로도와 그의 친구들, 엘프족인 레골라스, 난장이족 김리, 두명의 인간 전사 아라곤과 보로미르, 그리고 마법사 간달프로 구성된 반지 원정대가 길고도 험난한 여정을 떠나게 되는데...",originalLanguage:"en",runtime:227,fictionReality:98,highLowTempo:75,emotionIdea:80,openClosure:60},{id:"tmdb-98",tmdbId:98,titleKo:"글래디에이터",originalTitle:"Gladiator",releaseYear:2e3,primaryGenre:"액션·어드벤처",genres:["액션","드라마","모험"],posterPath:"https://image.tmdb.org/t/p/w500/4mMwki6S1MfdBfsKTvP8xqaRnWh.jpg",overviewKo:"죽을 날이 머지않은 황제 마르쿠스 아우렐리우스는 막시무스를 총애하여 아들이 아닌 그에게 권력을 넘겨주기로 한다. 황제의 아들 코모두스는 이에 질투와 분노를 느껴 황제를 살해한다. 왕좌를 이어받은 코모두스는 막시무스와 그의 가족을 죽이라고 명령한다. 가족을 모두 잃고 겨우 살아남은 막시무스는 노예로 전락하고, 투기장의 검투사가 된다. 그에게 남은 건 오직 황제 코모두스에 대한 복수 뿐. 검투사로서 매 경기마다 승리로 이끌면서 살아남자 그의 명성은 날로 높아 간다. 그러던 어느 날 오래 전 사랑했던 황제의 누이 루실라를 다시 만나게 되는데...",originalLanguage:"en",runtime:154,fictionReality:20,highLowTempo:80,emotionIdea:85,openClosure:20},{id:"tmdb-562",tmdbId:562,titleKo:"다이 하드",originalTitle:"Die Hard",releaseYear:1988,primaryGenre:"액션·어드벤처",genres:["액션","스릴러"],posterPath:"https://image.tmdb.org/t/p/w500/9MPaeRkwS12glOQ818SEtnMd3XA.jpg",overviewKo:"뉴욕 경찰관 존 맥클레인(브루스 윌리스)은 떨어져 사는 아내 홀리 (보니 델리아)를 만나기 위해 LA의 나카도미 빌딩으로 찾아간다. 그러나 파티가 한창 무르익을 무렵, 한스 그루버(알란 릭맨)가 이끄는 일단의 테러리스트들이 침입, 사장을 비롯한 파티 참석자 30여 명을 인질로 삼고 건물 금고에 소장하고 있는 돈과 보물을 손에 넣으려 한다. 최첨단 하이테크에 의해 관리되던 34층짜리 나카토미 빌딩은 통채로 테러리스트들의 수중으로 넘어가 폐쇄되고 고층 빌딩은 살벌한 생존 게임의 전쟁터로 변해가는데...",originalLanguage:"en",runtime:131,fictionReality:15,highLowTempo:85,emotionIdea:45,openClosure:10},{id:"tmdb-954",tmdbId:954,titleKo:"미션 임파서블",originalTitle:"Mission: Impossible",releaseYear:1996,primaryGenre:"액션·어드벤처",genres:["모험","액션","스릴러"],posterPath:"https://image.tmdb.org/t/p/w500/6vDaYhZypJzd8r0NnSY2JPIX6Y5.jpg",overviewKo:"동유럽 첩보원들의 비밀 명단을 훔쳐 무기상에 팔아 넘기려는 음모를 막기 위해 짐 펠프스가 이끄는 CIA 최고의 팀 미션 임파서블이 투입된다. 그러나 대사관 파티에 잠입하여 동료들과 함께 작전을 수행하던 중 팀의 리더였던 이단 헌트만이 구사일생으로 혼자 살아 남는다. 곧 이어 본부에 연락을 취한 헌트는 이번 작전이 CIA 내에 침투한 이중간첩의 체포작전이라는 것과 자신이 범인으로 지목된 것을 알고 재빨리 피신한다. 그는 자신을 함정에 빠뜨리고 동료들을 살해한 진짜 범인을 찾기 위해 나선다. 마침내 그는 컴퓨터의 접속암호를 풀어 무기 밀매상인 맥스와 연락을 취하는데...",originalLanguage:"en",runtime:110,fictionReality:25,highLowTempo:80,emotionIdea:35,openClosure:15},{id:"tmdb-87",tmdbId:87,titleKo:"인디아나 존스: 마궁의 사원",originalTitle:"Indiana Jones and the Temple of Doom",releaseYear:1981,primaryGenre:"액션·어드벤처",genres:["모험","액션"],posterPath:"https://image.tmdb.org/t/p/w500/wvPlEMp4sjPSzrK0zuwqfCLv5z2.jpg",overviewKo:"1935년 상해. 인디아나 존스는 클럽에서 가수 윌리스 코트의 노래를 들으며 그녀의 정부이자 상해 범죄 조직의 두목 라오치와 밀담을 나누는 중이다. 인디아나는 누루하치 황제의 위패를 압수했으나 라오의 배신으로 목숨만 부지한 채 클럽을 탈출한다. 인디아나는 이곳에서 알게 된 쇼트 라운드와 윌리를 데리고 화물 비행기를 차지만, 라오의 조직원이었던 조종사들은 연료를 버리고 탈출해버린다. 극적으로 살아남은 세 사람이 떨어진 곳은 인도. 이곳 사람들은 인디아나 일행을 하늘이 보내준 사람이라 생각하고 마을의 아이들을 잡아가고 약탈을 일삼는 이들을 처치해 달라고 하는데...",originalLanguage:"en",runtime:118,fictionReality:70,highLowTempo:80,emotionIdea:50,openClosure:15},{id:"tmdb-157336",tmdbId:157336,titleKo:"인터스텔라",originalTitle:"Interstellar",releaseYear:2014,primaryGenre:"SF",genres:["모험","드라마","SF"],posterPath:"https://image.tmdb.org/t/p/w500/evoEi8SBSvIIEveM3V6nCJ6vKj8.jpg",overviewKo:"세계 각국의 정부와 경제가 완전히 붕괴된 미래가 다가온다. 지난 20세기에 범한 잘못이 전 세계적인 식량 부족을 불러왔고, NASA도 해체되었다. 나사 소속 우주비행사였던 쿠퍼는 지구에 몰아친 식량난으로 옥수수나 키우며 살고 있다. 거센 황사가 몰아친 어느 날 알 수 없는 힘에 이끌려 딸과 함께 도착한 곳은 인류가 이주할 행성을 찾는 나사의 비밀본부. 이 때 시공간에 불가사의한 틈이 열리고, 이 곳을 탐험해 인류를 구해야 하는 임무를 위해 쿠퍼는 만류하는 딸을 뒤로한 채 우주선에 탑승하는데...",originalLanguage:"en",runtime:169,fictionReality:85,highLowTempo:65,emotionIdea:45,openClosure:75},{id:"tmdb-27205",tmdbId:27205,titleKo:"인셉션",originalTitle:"Inception",releaseYear:2010,primaryGenre:"SF",genres:["액션","SF","모험"],posterPath:"https://image.tmdb.org/t/p/w500/atSxEGstxXRoSKDQFBgqQ5lpGSt.jpg",overviewKo:"타인의 꿈에 들어가 생각을 훔치는 특수 보안요원 코브. 그를 이용해 라이벌 기업의 정보를 빼내고자 하는 사이토는 코브에게 생각을 훔치는 것이 아닌, 생각을 심는 ‘인셉션’ 작전을 제안한다. 성공 조건으로 국제적인 수배자가 되어있는 코브의 신분을 바꿔주겠다는 거부할 수 없는 제안을 하고, 사랑하는 아이들에게 돌아가기 위해 그 제안을 받아들인다. 최강의 팀을 구성, 표적인 피셔에게 접근해서 ‘인셉션’ 작전을 실행하지만 예기치 못한 사건들과 마주하게 되는데… 꿈 VS 현실! 시간, 규칙, 타이밍 모든 것이 완벽해야만 하는, 단 한 번도 성공한 적 없는 ‘인셉션’ 작전이 시작된다!",originalLanguage:"en",runtime:148,fictionReality:90,highLowTempo:80,emotionIdea:40,openClosure:85},{id:"tmdb-872585",tmdbId:872585,titleKo:"오펜하이머",originalTitle:"Oppenheimer",releaseYear:2023,primaryGenre:"SF",genres:["드라마","역사"],posterPath:"https://image.tmdb.org/t/p/w500/jpD6z9fgNe7OqsHoDeAWQWoULde.jpg",overviewKo:"세상을 구하기 위해 세상을 파괴할 지도 모르는 선택을 해야 하는 천재 과학자의 핵개발 프로젝트.",originalLanguage:"en",runtime:181,fictionReality:15,highLowTempo:55,emotionIdea:35,openClosure:70},{id:"tmdb-603",tmdbId:603,titleKo:"매트릭스",originalTitle:"The Matrix",releaseYear:1999,primaryGenre:"SF",genres:["액션","SF"],posterPath:"https://image.tmdb.org/t/p/w500/fxBxoXFAYKWde6lKzXxSusn18Av.jpg",overviewKo:"인간의 기억마저 AI에 의해 입력되고 삭제되는 세상, 진짜보다 더 진짜 같은 가상 현실 매트릭스. 그 속에서 진정한 현실을 인식할 수 없게 재배되는 인간들. 그 매트릭스를 빠져 나오면서 AI에게 가장 위험한 인물이 된 모피어스는 몇 안 되는 동료들과 함께 기계와의 전쟁 전후의의 폐허를 떠돌며 인류를 구할 마지막 영웅을 찾아 헤맨다. 마침내 모피어스는 낮에는 평범한 회사원 앤더슨으로, 밤에는 해커로 활동하는 청년 네오를 그로 지목한다. 모피어스의 지시대로 그를 만나게 된 네오는 두개의 알약 중 하나를 고르는 선택을 하게 되는데...",originalLanguage:"en",runtime:136,fictionReality:95,highLowTempo:80,emotionIdea:30,openClosure:35},{id:"tmdb-438631",tmdbId:438631,titleKo:"듄",originalTitle:"Dune",releaseYear:2021,primaryGenre:"SF",genres:["SF","모험","전쟁"],posterPath:"https://image.tmdb.org/t/p/w500/7zV8FTYofAORGm0Umgh1mNNCym8.jpg",overviewKo:"10191년, 아트레이데스 가문의 후계자인 폴은 시간과 공간을 초월해 과거와 미래를 모두 볼 수 있고, 더 나은 미래를 만들 유일한 구원자인 예지된 자의 운명을 타고났다. 그리고 어떤 계시처럼 매일 꿈에서 아라키스의 행성에 있는 한 여인을 만난다. 귀족들이 지지하는 아트레이데스 가문에 대한 황제의 질투는 폴과 그 일족들을 죽음이 기다리는 아라키스로 이끄는데...",originalLanguage:"en",runtime:155,fictionReality:97,highLowTempo:55,emotionIdea:45,openClosure:75},{id:"tmdb-577922",tmdbId:577922,titleKo:"테넷",originalTitle:"Tenet",releaseYear:2020,primaryGenre:"SF",genres:["액션","스릴러","SF"],posterPath:"https://image.tmdb.org/t/p/w500/i91wnVqkJf5ykDJq0XmIusvPFL3.jpg",overviewKo:"주도자는 미국의 한 요원으로 우크라이나 국립 오페라 극장의 한 사건에 투입되었다가 우크라이나 요원들에게 붙잡히게 되고 고문을 받지만 CIA가 준 자살 약을 먹고 자살을 택하게 된다. 그러나 이내 다시 눈을 뜬 주인공은 의문의 한 남자로부터 임무를 부여받는다. 그가 주도자에게 줄 수 있는 건 하나의 제스처와 하나의 단어 뿐. 시간의 흐름을 뒤집는 인버전을 통해 현재와 미래를 오가며 세상을 파괴하려는 사토르를 막기 위해 투입된 작전의 주도자는 인버전에 대한 정보를 가진 닐과 미술품 감정사이자 사토르에 대한 복수심이 가득한 그의 아내 캣과 협력해 미래의 공격에 맞서 제3차 세계대전을 막아야 한다.",originalLanguage:"en",runtime:150,fictionReality:92,highLowTempo:85,emotionIdea:25,openClosure:80},{id:"tmdb-12477",tmdbId:12477,titleKo:"반딧불의 묘",originalTitle:"火垂るの墓",releaseYear:2013,primaryGenre:"SF",genres:["애니메이션","드라마","전쟁"],posterPath:"https://image.tmdb.org/t/p/w500/uN0x0G4uuRjFJIFN57iYihBV2Qh.jpg",overviewKo:"2차 세계대전, 일본의 한 마을에 폭격기로 인한 대공습이 일어난다. 마을이 화염으로 휩싸이자, 14살인 세이타는 부모님과 따로 만나기로 약속한 채 4살짜리 여동생 세츠코를 업고 피신한다. 결국 집과 어머니를 잃고 먼 친척아주머니의 집으로 향하는 세이타와 세츠코. 힘들고 어려운 환경에서도 오빠 세이타는 천진하고 착한 여동생 세츠코를 보면서 희망과 용기를 잃지 않는다. 하지만 시간이 지날수록 친척아주머니의 남매에 대한 냉대는 더욱 심해지고, 세이타는 어머니가 남겨주었던 마지막 여비를 챙겨 세츠코와 함께 산 속에 있는 방공호로 거처를 옮긴다. 두 남매는 산 속 동굴에서 반딧불이를 잡아 불을 밝히고, 물고기와 개구리를 잡아먹으며 살아가는데...",originalLanguage:"ja",runtime:89,fictionReality:45,highLowTempo:75,emotionIdea:70,openClosure:30},{id:"tmdb-286217",tmdbId:286217,titleKo:"마션",originalTitle:"The Martian",releaseYear:2015,primaryGenre:"SF",genres:["SF","드라마","모험"],posterPath:"https://image.tmdb.org/t/p/w500/uH8q40cjMAjrRHyPJMbQwAIJATb.jpg",overviewKo:"NASA 소속의 아레스 3 탐사대는 화성에 도착한 지 6일째 되는 날 거대한 모래 폭풍을 만난다. 팀원 마크 와트니가 실종되고 회오리바람에 우주선이 기울어지자, 팀원들은 마크를 찾는 일을 포기하고 화성을 떠난다.  극적으로 생존한 마크 와트니는 남은 식량과 기발한 재치로 화성에서 살아남을 방법을 찾으며 자신이 살아있음을 알리려 노력한다. 마침내 자신이 살아있다는 사실을 지구에 알리게 된 마크 와트니. NASA는 총력을 기울여 마크 와트니를 구출하기 위해 노력하고, 아레스 3 탐사대 또한 그를 구출하기 위해 그들만의 방법을 찾게 되는데...",originalLanguage:"en",runtime:141,fictionReality:65,highLowTempo:60,emotionIdea:45,openClosure:15},{id:"tmdb-110",tmdbId:110,titleKo:"세 가지 색: 레드",originalTitle:"Trois couleurs : Rouge",releaseYear:2013,primaryGenre:"SF",genres:["드라마","미스터리","로맨스"],posterPath:"https://image.tmdb.org/t/p/w500/b2PtJNYbNzPfL2c6r374tpdU0x7.jpg",overviewKo:"발렌틴은 스위스의 제네바 대학 학생이며 패션모델로 활동한다. 그녀의 이웃에는 오귀스트라는 법대생이 살고 있는데 두 사람은 빈번하게 지나치면서도 서로의 존재를 인식하지 못한다. 어느날 패션쇼를 마치고 귀가하던 중 발렌틴은 개를 치는 교통사고를 내게 된다. 개의 목에 달린 인식표의 주소지로 찾아가지만 개 주인인 노인은 냉담한 반응을 보인다.  개를 치료하여 다시 찾아갔을때 발렌틴은 노인이 남의 집 전화를 도청하는 기벽이 있다는 걸 알게 되고 혐오감을 느끼게 되는데...",originalLanguage:"fr",runtime:100,fictionReality:80,highLowTempo:75,emotionIdea:45,openClosure:75},{id:"tmdb-101299",tmdbId:101299,titleKo:"헝거게임: 캣칭 파이어",originalTitle:"The Hunger Games: Catching Fire",releaseYear:2012,primaryGenre:"SF",genres:["모험","액션","SF"],posterPath:"https://image.tmdb.org/t/p/w500/ca9M1P2F7mUGVcC5cQo0X5rf6tu.jpg",overviewKo:"헝거게임의 우승으로 독재국가 판엠의 절대권력을 위협하는 존재가 된 캣니스, 혁명의 불꽃이 된 그녀를 제거하기 위해 캐피톨은 75회 스페셜 헝거게임의 재출전을 강요한다. 역대 최강의 우승자들이 모인 헝거게임에 참가하게 된 캣니스는 판엠의 음모 속에서 적인지 동료인지 알 수 없는 막강한 도전자들과 맞닥뜨린다. 모두의 운명을 걸고 살아남아야 하는 캣니스, 그녀와 함께 혁명의 불꽃이 시작된다.",originalLanguage:"en",runtime:146,fictionReality:85,highLowTempo:75,emotionIdea:60,openClosure:20},{id:"tmdb-185",tmdbId:185,titleKo:"시계태엽 오렌지",originalTitle:"A Clockwork Orange",releaseYear:1977,primaryGenre:"SF",genres:["SF","범죄"],posterPath:"https://image.tmdb.org/t/p/w500/oYa39Fjs8AgaaHMimGdBj8PiG6h.jpg",overviewKo:"10대 소년 알렉스는 친구들과 극악한 비행을 저지르고 다닌다. 어느 날 차를 훔쳐 드라이브를 즐기던 이들은 작가 알렉산더의 집을 습격해 그를 폭행하고 그의 아내를 강간한다. 이튿날 알렉스는 불평을 늘어놓는 친구들을 힘으로 제압하고 자신이 무리의 리더임을 확인시킨다. 그날 밤 알렉스는 한 저택에 침입해 집주인을 죽이고 도망치던 중 친구들의 배신으로 문 앞에 쓰러진다. 검거된 알렉스는 살인죄로 14년형을 언도받는다. 2년 뒤, 알렉스는 좀 더 빨리 감옥 밖으로 나오고 싶은 마음에 재소자에게 약물과 충격요법으로 범죄에 대한 혐오를 불러일으키는 교화 방법인 루도비코 갱생 프로그램에 자원하는데...",originalLanguage:"en",runtime:137,fictionReality:85,highLowTempo:45,emotionIdea:50,openClosure:70},{id:"tmdb-2649",tmdbId:2649,titleKo:"더 게임",originalTitle:"The Game",releaseYear:2012,primaryGenre:"SF",genres:["드라마","스릴러","미스터리"],posterPath:"https://image.tmdb.org/t/p/w500/npvUSLiRQxcGwOzjJO8OTxthO77.jpg",overviewKo:"천재적인 금융가로 냉철한 성격을 가진 사업가 니콜라스 반 오튼(마이클 더글라스)은 그의 생일날 동생 콘라드(숀 펜)로부터 이상한 게임 안내장을 받게된다. 이 후, 니콜라스는 규칙과 방향도 모른 채 계속 이어지는 이상한 사건들에 대하여 당황하게 되고 게임은 점점 깊은 수렁으로 빨려 들어가게 되는데...",originalLanguage:"en",runtime:129,fictionReality:85,highLowTempo:80,emotionIdea:40,openClosure:65},{id:"tmdb-671",tmdbId:671,titleKo:"해리 포터와 마법사의 돌",originalTitle:"Harry Potter and the Philosopher's Stone",releaseYear:2001,primaryGenre:"판타지·애니메이션",genres:["모험","판타지"],posterPath:"https://image.tmdb.org/t/p/w500/8YaP48tVfngbURGldWk1I5odsBK.jpg",overviewKo:"해리 포터는 위압적인 버논 숙부와 냉담한 이모 페투니아, 욕심 많고 버릇없는 사촌 더즐리 밑에서 갖은 구박을 견디며 계단 밑 벽장에서 생활한다. 이모네 식구들 역시 해리와의 동거가 불편하기는 마찬가지. 이모 페투니아에겐 해리가 이상한 언니 부부에 관한 기억을 떠올리게 만드는 달갑지 않은 존재다. 11살 생일이 며칠 앞으로 다가왔지만 한번도 생일파티를 치르거나 제대로 된 생일선물을 받아 본 적이 없는 해리로서는 특별히 신날 것도 기대 할 것도 없다. 11살 생일을 며칠 앞둔 어느 날 해리에게 초록색 잉크로 쓰여진 한 통의 편지가 배달된다. 그 편지의 내용은 다름 아닌 해리의 11살 생일을 맞이하여 호그와트에서 보낸 입학 초대장이었다. 그리고 해리의 생일을 축하하러 온 거인 해그리드는 해리가 모르고 있었던 해리의 진정한 정체를 알려주는데...",originalLanguage:"en",runtime:152,fictionReality:95,highLowTempo:65,emotionIdea:85,openClosure:15},{id:"tmdb-129",tmdbId:129,titleKo:"센과 치히로의 행방불명",originalTitle:"千と千尋の神隠し",releaseYear:2001,primaryGenre:"판타지·애니메이션",genres:["애니메이션","가족","판타지"],posterPath:"https://image.tmdb.org/t/p/w500/u1L4qxIu5sC2P082uMHYt7Ifvnj.jpg",overviewKo:"평범한 열 살 짜리 소녀 치히로 식구는 이사 가던 중 길을 잘못 들어 낡은 터널을 지나가게 된다. 터널 저편엔 폐허가 된 놀이공원이 있었고 그곳엔 이상한 기운이 흘렀다. 인기척 하나 없는 이 마을의 낯선 분위기에 불길한 기운을 느낀 치히로는 부모님에게 돌아가자고 조르지만 부모님은 호기심에 들떠 마을 곳곳을 돌아다니기 시작한다. 어느 음식점에 도착한 치히로의 부모님은 그 곳에 차려진 음식들을 보고 즐거워하며 허겁지겁 먹어대다가 돼지로 변해버린다. 겁에 질려 당황하는 치히로에게 낯선 소년 하쿠가 나타나 빨리 이곳을 나가라고 소리치는데...",originalLanguage:"ja",runtime:124,fictionReality:97,highLowTempo:50,emotionIdea:90,openClosure:80},{id:"tmdb-372058",tmdbId:372058,titleKo:"너의 이름은.",originalTitle:"君の名は。",releaseYear:2016,primaryGenre:"판타지·애니메이션",genres:["애니메이션","로맨스","드라마"],posterPath:"https://image.tmdb.org/t/p/w500/2DJCufz3Oa703PbLjNX1pM6MCG2.jpg",overviewKo:"시골에 사는 소녀 미츠하(가미시라이시 모네)는 어느 날 잠에서 깬 후 자신의 몸이 남자로 바뀐 걸 알게 된다.  같은 시간, 도쿄에 사는 소년 타키(가미키 류노스케) 역시 이 기이한 상황을 겪고 있다.  낯선 가족, 낯선 친구들, 낯선 풍경들...  서로에게 이어진 끈을 알게 된 둘은 둘만의 규칙을 정하고 점차 상황을 받아들이기 시작한다.  서로에게 남긴 메모를 확인하며  점점 친구가 되어가는 타키와 미츠하.  언제부턴가 더 이상 몸이 바뀌지 않자  자신들이 특별하게 이어져있었음을 깨달은  타키는 미츠하를 만나러 가는데...",originalLanguage:"ja",runtime:106,fictionReality:80,highLowTempo:60,emotionIdea:90,openClosure:75},{id:"tmdb-399055",tmdbId:399055,titleKo:"셰이프 오브 워터: 사랑의 모양",originalTitle:"The Shape of Water",releaseYear:2018,primaryGenre:"판타지·애니메이션",genres:["드라마","판타지","로맨스"],posterPath:"https://image.tmdb.org/t/p/w500/9uh4pH6lxTIWlcToZ1PPpdhYJBD.jpg",overviewKo:"우주 개발 경쟁이 한창인 1960년대, 미 항공우주 연구센터의 비밀 실험실에서 일하는 언어장애를 지닌 청소부 엘라이자의 곁에는 수다스럽지만 믿음직한 동료 젤다와 서로를 보살펴주는 가난한 이웃집 화가 자일스가 있다. 어느 날 실험실에 온몸이 비늘로 덮인 괴생명체가 수조에 갇힌 채 들어오고, 엘라이자는 신비로운 그에게 이끌려 조금씩 다가가게 된다. 음악을 함께 들으며 서로 교감하는 모습을 목격한 호프스테틀러 박사는 생명체에게 지능 및 공감 능력이 있다는 사실을 알게 되는데...",originalLanguage:"en",runtime:123,fictionReality:15,highLowTempo:40,emotionIdea:90,openClosure:80},{id:"tmdb-150540",tmdbId:150540,titleKo:"인사이드 아웃",originalTitle:"Inside Out",releaseYear:2015,primaryGenre:"판타지·애니메이션",genres:["애니메이션","가족","모험","드라마","코미디"],posterPath:"https://image.tmdb.org/t/p/w500/rMXHvHzpuYZXrJUhRVJ3TvDSwe5.jpg",overviewKo:"모든 사람의 머릿속에 존재하는 감정 컨트롤 본부. 그곳에서 불철주야 열심히 일하는 기쁨, 슬픔, 버럭, 까칠, 소심 다섯 감정들. 정든 옛 동네를 떠나 도시로 이사하는 라일리 가족. 이사 후 새로운 환경에 적응해야 하는 라일리를 위해 그 어느 때 보다 바쁘게 감정의 신호를 보내지만 우연한 실수로 기쁨과 슬픔이 본부를 이탈하게 되자 라일리의 마음 속에 큰 변화가 찾아온다. 라일리가 예전의 모습을 되찾기 위해서는 기쁨과 슬픔이 본부로 돌아가야만 한다. 그러나 엄청난 기억들이 저장되어 있는 머릿속 세계에서 본부까지 가는 길은 험난하기만 한데...",originalLanguage:"en",runtime:102,fictionReality:95,highLowTempo:70,emotionIdea:95,openClosure:20},{id:"tmdb-585",tmdbId:585,titleKo:"몬스터 주식회사",originalTitle:"Monsters, Inc.",releaseYear:2001,primaryGenre:"판타지·애니메이션",genres:["애니메이션","코미디","가족","판타지"],posterPath:"https://image.tmdb.org/t/p/w500/fnDLrtEoIrxTCWUvuurMzOzQGpQ.jpg",overviewKo:"호탕한 설리와 재치만점 마이크는 몬스터 주식회사 겁주기 팀의 최우수 콤비다. 매일 밤 투철한 직업정신으로 인간 세계로 통하는 벽장 문을 열던 설리와 마이크 콤비는 어느 날 일생일대의 실수를 저지른다. 덜 닫힌 벽장 문 사이로 인간아이 부가 몬스터 세계에 침입한 것. 설리와 마이크는 부를 인간세계로 돌려보내고 사건을 조용히 수습하려 하지만 부는 설리를 무서워하기는커녕 애완 야옹이쯤으로  생각하고 쫄래쫄래 따라다닌다. 부의 침입이 발각되자 몬스터 주식회사는 발칵 뒤집히고 마는데...",originalLanguage:"en",runtime:92,fictionReality:95,highLowTempo:75,emotionIdea:85,openClosure:15},{id:"tmdb-14160",tmdbId:14160,titleKo:"업",originalTitle:"Up",releaseYear:2004,primaryGenre:"판타지·애니메이션",genres:["애니메이션","코미디","가족","모험"],posterPath:"https://image.tmdb.org/t/p/w500/lL2WzkjLZP0RkPgUhybBjb9x9SL.jpg",overviewKo:"평생 모험을 꿈꿔 왔던 칼 할아버지는 재개발 공사 현장의 인부를 실수로 다치게 하고 집을 빼앗길 위기에 처한다. 그 동안 미뤄 왔던, 먼저 세상을 떠난 아내와의 약속을 지키기 위해 그는 수천 개의 풍선을 매달아 집을 통째로 남아메리카로 날려 버린다. 하지만 이 위대한 모험에 초대 받지 않은 불청객이 있었으니, 바로 황야의 어린이 탐험가 러셀. 우여곡절 끝에 도착한 남미에서 칼은 어린 시절의 우상이었던 위대한 모험가 찰스 먼츠를 만나게 되는데... 그들은 과연 남미의 잃어버린 세계에서 사라져 버린 꿈과 희망, 행복을 다시 찾을 수 있을까?",originalLanguage:"en",runtime:96,fictionReality:98,highLowTempo:55,emotionIdea:85,openClosure:75},{id:"tmdb-354912",tmdbId:354912,titleKo:"코코",originalTitle:"Coco",releaseYear:2017,primaryGenre:"판타지·애니메이션",genres:["가족","애니메이션","음악","모험"],posterPath:"https://image.tmdb.org/t/p/w500/pQu93NuwR90AaCULzglVD5Ge4Ml.jpg",overviewKo:"미구엘은 멕시코의 자랑인 에르네스토 델라 크루즈 같은 뮤지션이 되길 꿈꾸지만 미구엘 집안 사람들에게 음악은 금기다. 먼 옛날 조상 중에 음악 때문에 가족을 버린 인물이 있었기 때문. 미구엘은 죽은 자의 날이 되자 실력으로 인정받겠다는 결심을 하고 경연 무대에 오르려 하는데, 우연히 에르네스토의 기타에 손을 댔다가 죽은 자들의 세상에 들어서게 된다. 이승과 저승을 이어주는 마리골드 꽃길을 건너 죽은 자들의 세상에 도착한 미구엘은 거짓말과 위변조가 장기인 헥터를 만난다. 그리고 꿈에 그리던 우상 에르네스토를 만나러 가는 여정에서 가족의 비밀을 알게 된다.",originalLanguage:"en",runtime:105,fictionReality:96,highLowTempo:70,emotionIdea:95,openClosure:20},{id:"tmdb-269149",tmdbId:269149,titleKo:"주토피아",originalTitle:"Zootopia",releaseYear:2016,primaryGenre:"판타지·애니메이션",genres:["애니메이션","모험","가족","코미디"],posterPath:"https://image.tmdb.org/t/p/w500/uitqZVbhvlQV5iLOdbk3itGoNNd.jpg",overviewKo:"어릴 적부터 경찰이 꿈이었던 토끼 주디 홉스는 주변의 만류에도 불구하고 경찰학교에 들어가 당당히 수석으로 졸업한다. 온갖 동물들이 모여 살며 교양 있고 세련된 라이프 스타일을 주도하는 대도시 주토피아에 자원한 주디는 의욕을 안고 출근하지만, 상사는 작은 토끼라는 이유로 주차관리 같은 소일거리만 시킨다. 따분하게 업무를 보던 주디는 아이스크림 불법 판매를 일삼는 사기꾼 여우 닉 와일드를 알게 되고, 그와 함께  48시간 안에 주토피아에서 벌어지고 있는 연쇄 실종사건을 추적해야만 하는데...",originalLanguage:"en",runtime:108,fictionReality:92,highLowTempo:75,emotionIdea:65,openClosure:15},{id:"tmdb-862",tmdbId:862,titleKo:"토이 스토리",originalTitle:"Toy Story",releaseYear:1995,primaryGenre:"판타지·애니메이션",genres:["가족","코미디","애니메이션","모험"],posterPath:"https://image.tmdb.org/t/p/w500/iJbm78MxPjLutWUYixbeege8EVe.jpg",overviewKo:"카우보이 인형 우디는 꼬마 주인인 앤디의 가장 사랑받는 장난감이다. 그러나 어느날 버즈라는 새로운 장난감이 등장한다.  버즈는 최신형 장난감으로 레이저 빔 등의 첨단장비를 갖추고 있으나, 버즈는 자신이 장난감임을 인식하지 못하고 자신이 우주에서 온 전사이며 자신이 갖춘 장비로 하늘을 날 수 있다고 믿고 있다. 버즈의 허상을 상처받지 않고 인식시켜 주려는 우디와 친구들. 그러나 뜻밖의 사고가 일어난다. 옆집 개에게 버즈가 납치당하고 이런 버즈를 구하기 위해 우디와 친구들은 구조대를 조직해 버즈를 구하러 가는데...",originalLanguage:"en",runtime:81,fictionReality:90,highLowTempo:70,emotionIdea:85,openClosure:15},{id:"tmdb-22",tmdbId:22,titleKo:"캐리비안의 해적: 블랙펄의 저주",originalTitle:"Pirates of the Caribbean: The Curse of the Black Pearl",releaseYear:2003,primaryGenre:"판타지·애니메이션",genres:["모험","판타지","액션"],posterPath:"https://image.tmdb.org/t/p/w500/3ovejwQO4fKOWx4VgGBJeT8CKCn.jpg",overviewKo:"잭 스패로우는 10년 전의 반란 사건으로 자신의 배 블랙펄을 빼앗긴 해적 선장이다. 혼자 대양을 떠돌던 그는 자메이카의 로열포트에 이르러 유령선처럼 변해버린 블랙펄과 재회하게 된다. 아즈텍의 황금을 훔친 블랙펄의 선원들은 영원히 죽지 못하는 저주에 걸린 처지. 보물을 모두 제자리에 돌려놓고 피의 제물을 바쳐야만 고대 신들이 내린 저주를 풀 수 있다. 그들은 로열포트를 습격해 아즈텍의 마지막 목걸이를 가진 총독의 딸 엘리자베스를 납치하고, 엘리자베스를 사랑하는 어린 시절 친구 윌과 스패로우는 그 뒤를 쫓는데...",originalLanguage:"en",runtime:143,fictionReality:85,highLowTempo:80,emotionIdea:50,openClosure:15},{id:"tmdb-162",tmdbId:162,titleKo:"가위손",originalTitle:"Edward Scissorhands",releaseYear:1990,primaryGenre:"판타지·애니메이션",genres:["판타지","드라마","로맨스"],posterPath:"https://image.tmdb.org/t/p/w500/ePuSSqXxLuOR7cQz70QsGlx3wsy.jpg",overviewKo:"한 발명가가 만든 인조인간인 에드워드는, 발명가의 갑작스런 죽음으로 가위가 달린 손을 가진 채 미완성으로 남아 있다. 화장품 외판원 펙은 마을 언덕 외딴 성에서 상처투성이 창백한 얼굴과 날카로운 가위손 때문에 외롭게 살고 있는 에드워드를 만나 자신의 집으로 데려온다.  평범한 일상에 무료해하던 마을 사람들에게 큰 관심거리가 된 에드워드는 펙의 딸 킴을 만나 첫눈에 사랑에 빠지지만, 그녀의 남자친구의 질투와 이웃들의 편견으로 도둑으로 몰리며 더 큰 오해에 빠지게 되는데...",originalLanguage:"en",runtime:105,fictionReality:90,highLowTempo:45,emotionIdea:90,openClosure:85},{id:"tmdb-546554",tmdbId:546554,titleKo:"나이브스 아웃",originalTitle:"Knives Out",releaseYear:2019,primaryGenre:"스릴러·미스터리·범죄",genres:["코미디","범죄","미스터리"],posterPath:"https://image.tmdb.org/t/p/w500/7brBiaaH1sToGV1YBi5EIUnyjo0.jpg",overviewKo:"미스터리 소설의 대가인 작가 할란이 자신의 85살 생일에 자신의 방에서 날카로운 단검으로 목이 그인 채 발견된다. 외딴 저택에 모인 할란의 간병인과 자식 내외, 그리고 3세들은 유산 상속을 놓고 대거 혼란에 빠진다. 파견된 형사들은 가족과의 면담을 할 수록 자살로 의견이 모이지만, 면담 중 멀찍이 떨어져 상황을 전망하는 푸른 눈의 사내는 형사들마저 압도하며 심문을 주도해나간다. 남자의 이름은 바로 브누아 블랑. 챔피언 사건을 해결해서 이름이 높아진 유명한 사립탐정이다.",originalLanguage:"en",runtime:131,fictionReality:15,highLowTempo:75,emotionIdea:35,openClosure:15},{id:"tmdb-670",tmdbId:670,titleKo:"올드보이",originalTitle:"올드보이",releaseYear:2003,primaryGenre:"스릴러·미스터리·범죄",genres:["스릴러","미스터리"],posterPath:"https://image.tmdb.org/t/p/w500/xpa9ybm6tYGna5LseqSXvKpSSJn.jpg",overviewKo:"오대수는 어느 날 술이 거나하게 취해 집에 돌아가는 길에 누군가에게 납치, 사설 감금방에 갇히게 된다. 중국집 군만두만을 먹으며 8평이라는 제한된 공간에서 그가 할 수 있는 일이라곤 텔레비전 보는 게 전부. 1년이 지났을 무렵, 뉴스를 통해 나오는 아내의 살해소식. 게다가 아내의 살인범으로 자신이 지목되고 있음을 알게 된 오대수는 복수와 탈출을 위해 감금방 한쪽 구석을 쇠젓가락으로 파기 시작한다. 감금 15년을 맞이하는 해, 마침내 사람 몸 하나 빠져나갈 만큼의 탈출구가 생겼을 때, 어이없게도 15년 전 납치됐던 바로 그 장소로 풀려나 있는 자신을 발견하게 된다.",originalLanguage:"ko",runtime:120,fictionReality:25,highLowTempo:80,emotionIdea:60,openClosure:80},{id:"tmdb-24021",tmdbId:24021,titleKo:"이클립스",originalTitle:"The Twilight Saga: Eclipse",releaseYear:2003,primaryGenre:"스릴러·미스터리·범죄",genres:["모험","판타지","드라마","로맨스"],posterPath:"https://image.tmdb.org/t/p/w500/9FiYRPWcGsKJZRVyuev6Tn6kBiV.jpg",overviewKo:"불멸의 사랑을 위해 뱀파이어가 되기로 결심한 벨라. 제이콥은 벨라의 선택을 가로막으며 자신을택하도록 종용하고 이로 인해 에드워드와의 갈등은 더욱 심해진다. 한편 시애틀에서 의문의 연쇄살인사건이 일어나고 에드워드는 곧 이 사건의 배후를 알게 되지만 벨라에게는 비밀로 하는데…",originalLanguage:"en",runtime:124,fictionReality:10,highLowTempo:65,emotionIdea:50,openClosure:95},{id:"tmdb-475557",tmdbId:475557,titleKo:"조커",originalTitle:"Joker",releaseYear:2019,primaryGenre:"스릴러·미스터리·범죄",genres:["범죄","스릴러","드라마"],posterPath:"https://image.tmdb.org/t/p/w500/6OnFzi7nU6t4j1rmX9QI8EYDWb4.jpg",overviewKo:"홀어머니와 사는 아서 플렉은 코미디언을 꿈꾸지만 그의 삶은 좌절과 절망으로 가득 차 있다. 광대 아르바이트는 그에게 모욕을 가져다주기 일쑤고, 긴장하면 웃음을 통제할 수 없는 신경병 증세는 그를 더욱 고립시킨다. 정부 예산 긴축으로 인해 정신과 약물을 지원하던 공공의료 서비스마저 없어져 버린 어느 날, 아서는 지하철에서 시비를 걸어온 증권사 직원들에게 얻어맞던 와중에 동료가 건네준 권총으로 그들을 쏴 버리고 만다. 군중들은 지배계급에 대한 저항의 아이콘이 된 그를 추종하기 시작하며 광대 마스크로 얼굴을 가리고 거리로 쏟아져 나오기 시작하는데...",originalLanguage:"en",runtime:122,fictionReality:30,highLowTempo:60,emotionIdea:85,openClosure:75},{id:"tmdb-745",tmdbId:745,titleKo:"식스 센스",originalTitle:"The Sixth Sense",releaseYear:1999,primaryGenre:"스릴러·미스터리·범죄",genres:["미스터리","스릴러","드라마"],posterPath:"https://image.tmdb.org/t/p/w500/zmPBZos4lzZi95UayzjATYyLWHT.jpg",overviewKo:"아동 심리학자인 크로우 박사(브루스 윌리스)는 필라델피아 주지사에게 아동을 위해 기여했다는 공로로 상을 받는다. 그날 밤, 부인과 함께 2층에 올라간 말콤 박사는 낯선 침입자를 발견하게 된다. 그 침입자는 몇 년 전 말콤 박사가 치료를 맡았던 '빈센트 그레이'라는 환자인데, 박사는 그에게 총상을 입고 그는 자살한다. 이듬 해 가을, 총상에서 회복한 크로우 박사는 '콜 시어'라는 자폐증에 걸린 8살 된 소년의 정신 치료를 맡게 된다. 콜은 처음엔 쉽게 마음을 열지 않다가 박사의 계속된 노력으로 누구에게도 말하지 않은 비밀을 말한다. 즉 콜은 항상 귀신들이 보이며, 귀신들은 자신이 죽었는지조차 모르고, 보고 싶은 것만 본다고 이야기한다. 박사는 쉽게 믿으려 하지를 않고 마침 부인의 외도를 목격한 후 콜의 치료를 포기하려고 한다. 그러다가 박사는 옛 환자였던 빈센트와의 상담 녹음 테잎에서 귀신의 소리인 듯한 소리를 듣게 되고 콜을 찾아가 콜이 귀신에 대한 공포를 이겨내는 걸 돕게 된다.",originalLanguage:"en",runtime:107,fictionReality:70,highLowTempo:50,emotionIdea:80,openClosure:20},{id:"tmdb-11324",tmdbId:11324,titleKo:"셔터 아일랜드",originalTitle:"Shutter Island",releaseYear:2010,primaryGenre:"스릴러·미스터리·범죄",genres:["드라마","스릴러","미스터리"],posterPath:"https://image.tmdb.org/t/p/w500/aywZdSOXtwcqqLTl271EUJemi2.jpg",overviewKo:"보스턴 셔터아일랜드의 정신병원은 중범죄를 저지른 정신병자를 격리하는 병동으로 탈출 자체가 불가능하다. 하지만 자식 셋을 죽인 혐의를 받고 있는 여인이 이상한 쪽지만을 남긴 채 감쪽같이 사라지는 사건이 발생한다. 연방보안관 테디 다니엘스(레오나르도 디카프리오)는 수사를 위해 동료 척(마크 러팔로)과 함께 셔터아일랜드로 향한다. 테디는 수사를 위해 의사, 간호사, 병원관계자 등을 심문하지만 수사는 전혀 진척되지 않는다. 설상가상 폭풍이 불어 닥쳐 테디와 척은 섬에 고립되게 되고, 그들에게 점점 괴이한 일들이 일어나기 시작하는데...",originalLanguage:"en",runtime:138,fictionReality:20,highLowTempo:70,emotionIdea:45,openClosure:85},{id:"tmdb-807",tmdbId:807,titleKo:"세븐",originalTitle:"Se7en",releaseYear:1995,primaryGenre:"스릴러·미스터리·범죄",genres:["범죄","미스터리","스릴러"],posterPath:"https://image.tmdb.org/t/p/w500/izzk8dbmrLowcoGbFaebqJvzyXg.jpg",overviewKo:"은퇴를 7일 앞둔 관록의 형사 윌리엄 소머셋(모건 프리먼)과 새로 전근 온 신참내기 형사 밀스(브래드 피트)가 팀이 된 바로 다음날, 강압에 의해 위가 찢어질 때까지 먹다가 죽은 초고도 비만 남자와 역시 강압에 의해 식칼로 자기 살을 베어내 죽은 악덕 변호사의 사건과 마주한다. 식탐, 탐욕, 그리고 나태, 분노, 교만, 욕정, 시기. 소머셋은 현장에 남은 흔적들로 단테의 신곡과 쵸서의 캔터베리 서사시를 근거로 한 기나긴 연쇄 살인이 시작되었음을 직감하고 성서의 7가지 죄악을 따라 발생하는 사건들을 추적하기 시작하는데...",originalLanguage:"en",runtime:127,fictionReality:15,highLowTempo:70,emotionIdea:35,openClosure:85},{id:"tmdb-419430",tmdbId:419430,titleKo:"겟 아웃",originalTitle:"Get Out",releaseYear:2017,primaryGenre:"스릴러·미스터리·범죄",genres:["미스터리","스릴러","공포"],posterPath:"https://image.tmdb.org/t/p/w500/paPvmoLgUUQojsSdAZmf7dwkKGT.jpg",overviewKo:"크리스와 그의 여자친구 로즈는 주말을 맞아 로즈의 부모님 집을 방문한다. 가족들의 과한 친절이 그저 딸이 흑인 남자친구를 데려왔기 때문이라고 생각한 크리스. 하지만 머무는 시간이 길어질수록 이상한 점을 한 두가지씩 발견하는데... 그가 상상도 못한 진실이 기다리고 있었다.",originalLanguage:"en",runtime:104,fictionReality:45,highLowTempo:75,emotionIdea:40,openClosure:45},{id:"tmdb-181283",tmdbId:181283,titleKo:"차일드 44",originalTitle:"Child 44",releaseYear:2008,primaryGenre:"스릴러·미스터리·범죄",genres:["범죄","스릴러"],posterPath:"https://image.tmdb.org/t/p/w500/rQIUTjo7g8EIhJhCxL8tyUl9B4Q.jpg",overviewKo:"1952년 소비에트 연방, 범죄 발생률 0%인 완벽한 국가에서 출세가도를 달려온 ‘레오’(톰 하디). 평온한 어느 날, 철길 옆에서 어린 아이가 시체로 발견되고 ‘레오’는 “완벽한 국가에서 범죄란 없다”는 굳은 신념 아래 단순한 기차 사고로 종결 짓는다. 한편 사랑하는 아내 ‘라이사’(누미 라파스)가 스파이로 지목되지만 차마 그녀를 고발하지 못한 ‘레오’는 민병대로 좌천되고, 사고 발생 소식에 ‘네스테로프’ 대장(게리 올드만)과 함께 현장으로 출동한다. 숲 속에서 발견된 아이 시체를 본 ‘레오’는 과거 사고와 유사점을 발견하고 동일범의 소행일지도 모른다는 의심을 갖게 된다. 비슷한 또래 아이들의 모든 사건을 관통하는 단서를 찾게 된 ‘레오’와 ‘네스테로프’ 대장은 끔찍한 아동 연쇄살인사건과 거대한 음모의 실마리를 발견하고 본격적으로 사건을 파헤치기 시작하는데...",originalLanguage:"en",runtime:137,fictionReality:10,highLowTempo:90,emotionIdea:65,openClosure:80},{id:"tmdb-210577",tmdbId:210577,titleKo:"나를 찾아줘",originalTitle:"Gone Girl",releaseYear:2014,primaryGenre:"스릴러·미스터리·범죄",genres:["미스터리","스릴러","드라마"],posterPath:"https://image.tmdb.org/t/p/w500/m2Lw04GIjiTjylqPiccoo3WFMVb.jpg",overviewKo:"모두가 부러워하는 삶을 살아가는 완벽한 커플인 닉과 에이미. 결혼 5주년 기념일 아침, 에이미가 흔적도 없이 실종된다. 유년시절 어린이 동화 시리즈 어메이징 에이미의 실제 여주인공이었던  유명인사 아내가 사라지자, 세상은 그녀의 실종사건으로 떠들썩해진다. 한편 경찰은 에이미가 결혼기념일 선물로 숨겨뒀던 편지와 함께  곳곳에서 드러나는 단서들로 남편 닉을 유력한 용의자로 지목한다. 미디어들이 살인 용의자 닉의 일거수일투족을 보도하기 시작하고, 시간이 갈수록 세상의 관심이 그에게 더욱 집중되는데...",originalLanguage:"en",runtime:149,fictionReality:15,highLowTempo:85,emotionIdea:35,openClosure:20},{id:"tmdb-1578",tmdbId:1578,titleKo:"분노의 주먹",originalTitle:"Raging Bull",releaseYear:1954,primaryGenre:"스릴러·미스터리·범죄",genres:["드라마","역사"],posterPath:"https://image.tmdb.org/t/p/w500/1WV7WlTS8LI1L5NkCgjWT9GSW3O.jpg",overviewKo:"1941년 제이크 라모타는 그의 매니저 동생 조이와 함께 복싱 미들급 챔피언을 향해 훈련하고 있다. 그의 첫 사랑은 15살된 비키와 함께 시작되었고 라모타는 비키와 결혼하기 위해 부인과 이혼한다. 그러나 의처증을 가진 라모타는 그의 형과 부인을 의심하기 시작한다. 라모타는 챔피언이 되지만 곧 쇠락의 길로 접어들어 슈거 레이 로빈슨과 6번 싸워 5번을 지고 만다. 그의 복싱 경력의 실패는 개인적인 삶에서의 실패도 의미했다. 결국 그의 형 내외와 사이가 틀어지고 그는 개인적인 구원을 위해 긴 여정에 들어간다.",originalLanguage:"en",runtime:129,fictionReality:5,highLowTempo:60,emotionIdea:30,openClosure:15},{id:"tmdb-1063879",tmdbId:1063879,titleKo:"베르민느: 독거미",originalTitle:"Vermines",releaseYear:2024,primaryGenre:"공포",genres:["공포","스릴러"],posterPath:"https://image.tmdb.org/t/p/w500/w2C7DWAswMcbbUFm2AGhU5H99JO.jpg",overviewKo:"독거미 떼가 아파트를 점령했다. 작은 포식자의 습격이 시작된다. 그 어디에도 안전한 곳은 없다. 빠르게 번식하는 독거미를 피해 살아남아라! 살아남을 방법은 탈출뿐! 지금껏 본 적 없는 공포를 경험하라!",originalLanguage:"fr",runtime:106,fictionReality:75,highLowTempo:75,emotionIdea:70,openClosure:30},{id:"tmdb-503919",tmdbId:503919,titleKo:"라이트하우스",originalTitle:"The Lighthouse",releaseYear:2018,primaryGenre:"공포",genres:["드라마","판타지","스릴러"],posterPath:"https://image.tmdb.org/t/p/w500/tpu92BfGTkkHlg9tDi1jnVMOXmE.jpg",overviewKo:"1890년대, 동떨어진 섬의 등대를 지키게 된 두 등대지기의 이야기. 고독과 외로움에 시달리는 두 명의 등대 관리인이 제정신을 잃고 끔찍한 악몽으로부터 위협을 받는다.",originalLanguage:"en",runtime:109,fictionReality:55,highLowTempo:85,emotionIdea:50,openClosure:50},{id:"tmdb-138843",tmdbId:138843,titleKo:"컨저링",originalTitle:"The Conjuring",releaseYear:2013,primaryGenre:"공포",genres:["공포","스릴러"],posterPath:"https://image.tmdb.org/t/p/w500/pWpTToZ32bG09PaZ1rvYG5mpOyV.jpg",overviewKo:"1971년 로드 아일랜드, 해리스빌. 페론 가족은 꿈에 그리던 새 집으로 이사를 간다. 물론 1863년에 그 집에서 일어난 끔찍한 살인 사건을 전혀 몰랐다. 또한 그 이후에 일어난 많은 무서운 사건에 대해서도 알지 못했다. 이 가족은 그 집에서 겪은 일이 너무 무서워서 한 마디라도 외부에 언급하는 것을 거절했었다. 지금까지는…",originalLanguage:"en",runtime:112,fictionReality:70,highLowTempo:75,emotionIdea:75,openClosure:15},{id:"tmdb-348",tmdbId:348,titleKo:"에이리언",originalTitle:"Alien",releaseYear:1979,primaryGenre:"공포",genres:["공포","SF"],posterPath:"https://image.tmdb.org/t/p/w500/k3m1RdlYUlCx51PxxNMlmbm7QSk.jpg",overviewKo:"2122년, 2천만톤의 광물과 7명의 승무원을 태우고 지구로 귀환중인 화물선 노스트로모호의 메인 컴퓨터 마더는 어떤 위성에서 나오는 알 수 없는 신호를 포착하게 된다. 마더에 의해 동면중 깨어난 승무원들은 이 신호를 조사하기 위해 혹성 LA-426에 착륙한다. 이들 중엔 2등 항해사인 엘렌 리플리도 있다. 혹성에서 정체 불명의 우주선을 발견한 그들은 탐사에 나서지만, 우주선은 이미 오래전에 파괴되어 썩고 있었으며 승무원들은 모두 미이라로 변해 있다. 사고 원인을 찾기 위해 좀 더 안으로 들어간 조사반은 여기저기 계란 모양의 물체가 있는 산란실을 발견하는데...",originalLanguage:"en",runtime:117,fictionReality:90,highLowTempo:80,emotionIdea:35,openClosure:40},{id:"tmdb-530385",tmdbId:530385,titleKo:"미드소마",originalTitle:"Midsommar",releaseYear:2019,primaryGenre:"공포",genres:["공포","드라마","미스터리"],posterPath:"https://image.tmdb.org/t/p/w500/u2c6wgkam9JJ5V4ML3l8EqIXCdF.jpg",overviewKo:"한여름, 낮이 가장 긴 날 열리는 미드소마에 참석하게 된 친구들. 꽃길인 줄 알고 들어간 지옥길, 축제가 끝나기 전까지 절대 빠져나올 수 없다. 큰 상실을 겪은 대니가 남자친구 크리스티안과 비밀스러운 스웨덴의 한 마을에서 한여름 낮이 가장 긴 날 열리는 하지 축제에 참석해 기이한 경험을 겪고 점점 공포에 빠져들게 되는데...",originalLanguage:"en",runtime:148,fictionReality:40,highLowTempo:50,emotionIdea:85,openClosure:80},{id:"tmdb-447335",tmdbId:447335,titleKo:"라스치아티 안다레",originalTitle:"Lasciati andare",releaseYear:2018,primaryGenre:"공포",genres:["코미디"],posterPath:"https://image.tmdb.org/t/p/w500/pvlbgl8y4fjX6yqy3qiELeT0gWw.jpg",overviewKo:"소리를 내는 순간 공격해오는 정체불명의 괴생명체로부터 살아남기 위해, 온 가족이 소리 없는 고요함 속에서 펼쳐나가는 긴박감 넘치는 사투.",originalLanguage:"it",runtime:107,fictionReality:85,highLowTempo:80,emotionIdea:80,openClosure:25},{id:"tmdb-324786",tmdbId:324786,titleKo:"핵소 고지",originalTitle:"Hacksaw Ridge",releaseYear:2016,primaryGenre:"공포",genres:["드라마","역사","전쟁"],posterPath:"https://image.tmdb.org/t/p/w500/nlvcNogJK9R9iIj0YINApQE36FF.jpg",overviewKo:"비폭력주의자인 도스는 전쟁으로부터 조국과 소중한 사람들을 지키기 위해 총을 들지 않아도 되는 의무병으로 육군에 자진 입대한다. 총을 들 수 없다는 이유로 필수 훈련 중 하나인 총기 훈련 마저 거부한 도스는 동료 병사들과 군 전체의 비난과 조롱을 받게 된다. 결국 군사재판까지 받게 되지만 끝까지 자신의 신념을 굽히지 않은 도스에게 군 상부는 오키나와 전투에 총기 없이 의무병으로 참전할 것을 허락하는데…",originalLanguage:"en",runtime:139,fictionReality:75,highLowTempo:90,emotionIdea:80,openClosure:20},{id:"tmdb-565",tmdbId:565,titleKo:"링",originalTitle:"The Ring",releaseYear:1998,primaryGenre:"공포",genres:["공포","미스터리"],posterPath:"https://image.tmdb.org/t/p/w500/7uoGydSiNkeA46LQuh82ToBlCvK.jpg",overviewKo:"각기 다른 장소에서, 하지만 모두 같은 날 밤 10시에 끔찍한 얼굴로 발견된 4명의 시체. 그들의 공통점은 단 하나. 정확히 7일 전 밤 10시, 쉘터 산장 12호에서 그들이 함께 보았다는 의문의 비디오테이프. 사건을 파헤치던 기자 레이첼은 마침내 문제의 비디오테이프를 입수한다. 비디오를 틀자 화면에 펼쳐지는 악몽 같은 이미지들이 나오는데...",originalLanguage:"en",runtime:115,fictionReality:75,highLowTempo:45,emotionIdea:70,openClosure:75},{id:"tmdb-565311",tmdbId:565311,titleKo:"이매지너리 오더",originalTitle:"Blush",releaseYear:2019,primaryGenre:"공포",genres:["드라마"],posterPath:"https://image.tmdb.org/t/p/w500/aavTE21Ny7fJLbTE2gJ5ElTV1Sb.jpg",overviewKo:"캐시는 남편이 바람을 피우고 13살이 된 딸과 멀어져 가는 것에 대한 공포와 사투를 벌이고 있다. 그녀는 누이의 집으로 들어가 고양이를 돌보고, 마지못해 청소하고, 옆집 가족을 염탐한다. 이 기이한 가족 – 아빠, 엄마 그리고 10대 아들 – 은 차례로 캐시를 그들의 삶에 끌어들이고 그녀의 반항심에 불을 지핀다. 옆집의 10대 아들이 캐시에 집착하기 시작하면서 그녀의 위태로운 결혼생활부터 그녀의 불안정한 정신상태와 딸이 무관하다는 것에 이르기까지 모든 것을 다 풀어버리겠다고 협박한다.",originalLanguage:"en",runtime:101,fictionReality:70,highLowTempo:65,emotionIdea:60,openClosure:70},{id:"tmdb-423204",tmdbId:423204,titleKo:"엔젤 해즈 폴른",originalTitle:"Angel Has Fallen",releaseYear:2017,primaryGenre:"공포",genres:["액션","스릴러"],posterPath:"https://image.tmdb.org/t/p/w500/ymL9GQZ3k2vEPL5ih4JigxX82kt.jpg",overviewKo:"비밀 경호국 최고 요원 배닝의 엄호 중 트럼불 대통령을 향한 초대형 규모의 드론 테러가 발생한다. 가까스로 대통령을 구하고 유일하게 살아남은 배닝은 완벽히 조작된 음모에 의해 대통령 암살사건의 테러범으로 지목되고, 국가 영웅은 한순간에 일급 수배자가 되어 FBI에게 쫓기게 되는데…",originalLanguage:"en",runtime:122,fictionReality:85,highLowTempo:75,emotionIdea:75,openClosure:20},{id:"tmdb-176",tmdbId:176,titleKo:"쏘우",originalTitle:"Saw",releaseYear:2004,primaryGenre:"공포",genres:["공포","미스터리","범죄"],posterPath:"https://image.tmdb.org/t/p/w500/vRVtn1HLMGMHbUsAJkFLC6oT6pQ.jpg",overviewKo:"어느 지하실. 자신들의 발목에 쇠줄이 묶인 채 마주하게 된 ‘아담’(리 와넬)과 닥터 ‘고든’(캐리 엘위스). 중앙에는 자신의 머리를 총으로 쏘고 자살한 듯한 사내가 피투성이가 되어 누워 있을 뿐, 이 둘은 자신들이 왜 잡혀왔는지, 서로가 누군지조차 모르고 있다. 주머니 속에 들어있는 테이프. 테이프에 들어있는 누군가의 메시지. 어떻게든 빠져나가려고 갖은 애를 써보지만 소용이 없다. 이제 둘은 자신들의 하루 전 기억을 더듬어 보는데. ‘고든’은 이 일이 최근 계속되고 있는 연쇄살인과 관계가 있음을 깨닫게 된다. 끔찍한 연쇄살인의 현장에 자신의 펜이 떨어져 있었고, 그 증거물을 근거로 ‘탭’형사(대니 글로버)가 자신을 찾아왔던 것. 한편, 연쇄살인을 추적하던 ‘탭’형사는 닥터 ‘고든’을 범인으로 지목하고 그 뒤를 쫓는데…",originalLanguage:"en",runtime:103,fictionReality:20,highLowTempo:85,emotionIdea:35,openClosure:65},{id:"tmdb-313369",tmdbId:313369,titleKo:"라라랜드",originalTitle:"La La Land",releaseYear:2016,primaryGenre:"로맨스",genres:["코미디","드라마","로맨스"],posterPath:"https://image.tmdb.org/t/p/w500/ad9ndytwOckyShSc0A6tx1rZRkW.jpg",overviewKo:"차들로 빽빽이 들어찬 LA의 고속도로. 거북이 걸음이던 도로가 뚫리기 시작하지만 미아 지금 손에 든 연기 오디션 대본을 놓지 못한다. 세바스찬은 경적을 누르며 미아를 노려보고는 사라진다. 악연의 시작. 이후 미아는 감미로운 피아노 선율에 이끌려 재즈바로 향하는데, 연주자가 바로 세바스찬이다. 미아가 세바스찬에게 인사를 건네려고 다가가던 순간은 하필 그가 재즈바의 레퍼토리를 무시하고 연주한 탓에 해고된 직후. 세바스찬은 인사를 건네려 다가온 미아를 쌩하니 스쳐 지나가버린다. 세 번째로 두 사람은 파티에 온 손님과 출장 밴드의 키보드 연주자로 다시 만나는데...",originalLanguage:"en",runtime:127,fictionReality:55,highLowTempo:65,emotionIdea:85,openClosure:85},{id:"tmdb-122906",tmdbId:122906,titleKo:"어바웃 타임",originalTitle:"About Time",releaseYear:2013,primaryGenre:"로맨스",genres:["드라마","로맨스","판타지"],posterPath:"https://image.tmdb.org/t/p/w500/cLfuuK1Y5FjX1xXDrrEa9ppnKuy.jpg",overviewKo:"모태솔로 팀은 성인이 된 날, 아버지로부터 놀랄만한 가문의 비밀을 듣게 된다.  바로 시간을 되돌릴 수 있는 능력이 있다는 것!  그것이 비록 히틀러를 죽이거나 여신과 뜨거운 사랑을 할 수는 없지만,  여자친구는 만들어 줄 순 있으리..  꿈을 위해 런던으로 간 팀은 우연히 만난 사랑스러운 여인 메리에게 첫눈에 반하게 된다.  그녀의 사랑을 얻기 위해 자신의 특별한 능력을 마음껏 발휘하는 팀.  어설픈 대시, 어색한 웃음은 리와인드! 뜨거웠던 밤은 더욱 뜨겁게 리플레이!  꿈에 그리던 그녀와 매일매일 최고의 순간을 보낸다.  하지만 그와 그녀의 사랑이 완벽해질수록 팀을 둘러싼 주변 상황들은 미묘하게 엇갈리고,  예상치 못한 사건들이 여기저기 나타나기 시작하는데…  어떠한 순간을 다시 살게 된다면, 과연 완벽한 사랑을 이룰 수 있을까?",originalLanguage:"en",runtime:123,fictionReality:65,highLowTempo:45,emotionIdea:95,openClosure:20},{id:"tmdb-16290",tmdbId:16290,titleKo:"잭애스 3D",originalTitle:"Jackass 3D",releaseYear:2004,primaryGenre:"로맨스",genres:["코미디","다큐멘터리","액션"],posterPath:"https://image.tmdb.org/t/p/w500/538rTVeHoEmhDxUZDfEwmL664Ca.jpg",overviewKo:"하늘로 내동댕이! 무서워? 그래도 웃기지?  화장실! 더러워? 그래도 웃기지?  얻어 터져서! 아파? 아프다고?  그래도 웃기지?  거봐~!! 이미 웃고 있잖아~!!  불가능이란 없다! 하늘을 나는 제트 스키!  하늘을 나는 새가 부러웠던 인류의 소망을 이루고자 그들이 나섰다. 최고 속력으로 물살을 가로지르는 제트스키. 수영장에서 제트스키가 도움닫기 한 순간 점프대 위를 힘껏 날아오르는 한 남자가 있다! 비교불가! 하늘을 나는 짜릿함 쾌감을 맛보시라!  거대한 싸대기? 최고의 하이파이브!  늘 지나던 장소, 익숙한 그 곳에 거대한 손이 나타났다! 모퉁이를 돌면 하이파이브가 기다리고 있다. 서류를 챙겨가던 사람도, 동료들에게 줄 수프를 가져가던 사람도 하이파이브를 피해갈 수 없다. 그들이 거대한 손을 당기는 순간 기절할 것이니…. 피할 방법은? 물론 없다! 그냥 즐겨라!  상상초월! 하늘로 솟구치는 화장실!  응가가 튀어오르는 화장실이 있다면?! 이제는 화장실을 날려버리는 도전에 나섰다. 그것도 화장실 변기에 사람이 앉은 채로. 언제 날아갈지 모르는 불안한 그 순간, 화장실이 하늘로 솟구친다. 물론 배설물도 역류한다. 눈 앞에 펼쳐지는 갈색 이물질(!)의 향연! 스크린으로 악취가 느껴질 것만 같은 리얼한 비주얼 쇼크를 경험하고 싶다면 강력 추천!  즐거운 폭발! 행복한 지금!  무방비 상태에서 지금 당신이 있는 공간이 파괴된다. 피할 길이 없다. 그냥 궁금해서, 재미있을 것 같아서 폭파를 감행한 그들! 빵~ 빵~ 터져도 좋아~! 무섭냐고? 재밌잖아~!",originalLanguage:"en",runtime:94,fictionReality:10,highLowTempo:50,emotionIdea:95,openClosure:15},{id:"tmdb-290825",tmdbId:290825,titleKo:"요가 호저스",originalTitle:"Yoga Hosers",releaseYear:2015,primaryGenre:"로맨스",genres:["코미디","판타지","공포","액션"],posterPath:"https://image.tmdb.org/t/p/w500/cc40P3lKEiK0H8ZSd8hmBBI0HEV.jpg",overviewKo:"스마트폰에 빠져 있으며 요가를 좋아하는 콜린 콜레트와 콜린 매켄지는 12학년 파티를 방해하려는 고대의 악을 물리치기 위해 몬트리올에서 온 사냥꾼 기 라포앙트를 찾아 나선다",originalLanguage:"en",runtime:88,fictionReality:75,highLowTempo:40,emotionIdea:85,openClosure:25},{id:"tmdb-50014",tmdbId:50014,titleKo:"헬프",originalTitle:"The Help",releaseYear:2011,primaryGenre:"로맨스",genres:["드라마"],posterPath:"https://image.tmdb.org/t/p/w500/qMVZtwZIU9oussRb8al2Gb0YPQL.jpg",overviewKo:"1963년, 미국 남부 미시시피 잭슨  흑인 가정부는 백인 주인과 화장실도 같이 쓸 수 없다?!  아무도 가정부의 삶에 대해 묻지 않았다. 그녀가 책을 쓰기 전까지는…  돈 많은 남자와 결혼해 정원과 가정부가 딸린 집의 안주인이 되는 게 최고의 삶이라 여기는 친구들과 달리 대학 졸업 후 작가의 꿈을 이루기 위해 지역 신문사에 취직한 ‘스키터(엠마 스톤)’. 살림 정보 칼럼의 대필을 맡게 된 그녀는 베테랑 가정부 ‘에이빌린(바이올라 데이비스)’에게 도움을 요청한다.  다른 인생은 꿈꿔보지도 못한 채 가정부가 되어 17명의 백인 아이를 헌신적으로 돌봤지만 정작 자신의 아들은 사고로 잃은 ‘에이빌린’. ‘스키터’에게 살림 노하우를 알려주던 그녀는 어느 누구도 관심 갖지 않았던 자신과 흑인 가정부들의 인생을 책으로 써보자는 위험한 제안을 받는다.  때 마침 주인집의 화장실을 썼다는 황당한 이유로 쫓겨난 가정부 ‘미니(옥타비아 스펜서)’가 두 여자의 아슬아슬하지만 유쾌한 반란에 합류한다. 차별과 불만을 이야기 하는 것조차 불법이 되고 생명을 위협받는 일이 되는 시대에, 태어나 처음으로 누군가에게 자신들의 이야기를 털어 놓기 시작하는 ‘에이빌린’과 ‘미니’. 그녀들의 용기 있는 고백은 세상을 발칵 뒤집을 만한 책을 탄생시키는데…",originalLanguage:"en",runtime:146,fictionReality:5,highLowTempo:55,emotionIdea:90,openClosure:80},{id:"tmdb-80",tmdbId:80,titleKo:"비포 선셋",originalTitle:"Before Sunset",releaseYear:1995,primaryGenre:"로맨스",genres:["드라마","로맨스"],posterPath:"https://image.tmdb.org/t/p/w500/2k4KFbEeknXmHbNP0qt7lp2p3Y3.jpg",overviewKo:"비엔나에서의 꿈 같은 하루 이후 9년이 지나, 파리에서 다시 마주한 제시와 셀린느. 비엔나의 특별한 추억을 소재로 쓴 베스트셀러의 유럽 홍보 투어 중인 작가 제시는 파리의 서점 구석에 서 있는 셀린느를 발견한다. 그가 뉴욕행 비행기에 오르기까지 남은 시간은 한 시간 남짓. 서로 같지만 다른 기억을 간직해 온 두 사람 사이에는 묘한 기류가 감돈다. 그들은 파리의 골목과 카페와 센강의 유람선, 셀린느의 아파트를 돌아다니며 빈곤과 환경오염, 종교, 세계의 절망과 희망, 섹스와 결혼을 이야기한다. 그렇게 그 간의 진심을 서로에게 털어놓는 사이, 해는 저물고 또 다시 헤어짐의 순간이 다가오는데...",originalLanguage:"en",runtime:80,fictionReality:5,highLowTempo:30,emotionIdea:85,openClosure:85},{id:"tmdb-500",tmdbId:500,titleKo:"저수지의 개들",originalTitle:"Reservoir Dogs",releaseYear:2009,primaryGenre:"로맨스",genres:["범죄","스릴러"],posterPath:"https://image.tmdb.org/t/p/w500/3RmF67rohiTKfNOixinNveLsX2T.jpg",overviewKo:"동부 LA 폐허의 텅빈 창고 안. 대규모 보석 강도를 위해 서로를 전혀 모르는 6명의 프로갱들이 한곳에 모인다. 이들을 한 곳에 불러 모은 장본인은 프로 도둑인 죠 캐봇과 그의 아들 나이스 가이 에디. 다이아몬드 도매상을 강탈하는 보석강도의 전 과정을 지휘하는 이 두 사람은 6명의 갱들에게 각각의 가명을 지정하고, 서로의 신분을 노출시킬 어떠한 정보 교환도 하지 말 것을 지시한다. 거사에 성공한 갱들은 그들 앞으로 돌아올 거액을 꿈구며 환호성을 지른다. 그러나 환호성도 잠시, 그들의 강도짓이 끝나기를 기다리며 문밖에 대기하고 있던 경찰을 발견한 그들은 경악하는데...",originalLanguage:"en",runtime:99,fictionReality:10,highLowTempo:55,emotionIdea:75,openClosure:80},{id:"tmdb-12180",tmdbId:12180,titleKo:"스타워즈: 클론 전쟁",originalTitle:"Star Wars: The Clone Wars",releaseYear:2003,primaryGenre:"로맨스",genres:["애니메이션","액션","SF","모험"],posterPath:"https://image.tmdb.org/t/p/w500/aGNcvzuebUZcZwzYXK5WIgLVdhO.jpg",overviewKo:"어둠의 세력으로 인해 은하계 전체가 전쟁에 휩싸이고 제다이 기사단 역시 평화를 회복하기 위해 전투에 나선다. 그러나 점점 더 많은 행성들이 다크 사이드 포스의 손아귀에 빠져든다.  은하계의 미래가 달려있는 임무를 맡게 된 '아나킨’과 그의 제자 '아소카'. 둘은 은하계 범죄단의 수괴 '자바 더 헛'의 아들이 납치 당하자 그 아들을 구출하기 위해 떠난다.  한편, ‘오비완’과 ‘요다’는 클론군대를 이끌고 다크 사이드 포스 진영에 맞서 먼 훗날 전설로 기억될 클론전쟁을 시작하는데…",originalLanguage:"en",runtime:98,fictionReality:10,highLowTempo:45,emotionIdea:95,openClosure:30},{id:"tmdb-17182",tmdbId:17182,titleKo:"아이 포 아이",originalTitle:"Eye for an Eye",releaseYear:1999,primaryGenre:"로맨스",genres:["스릴러","드라마"],posterPath:"https://image.tmdb.org/t/p/w500/y2lZSdJ1o0VvLegTw3ad6KFtxra.jpg",overviewKo:"카렌(Karen McCann: 샐리 필드 분)은 남편 맥(Mack McCann: 에드 해리스 분)과 사랑스런 두 딸, 줄리(Julie McCann: 올리비아 버넷 분)와 메간(Megan McCann: 알렉산드라 카일 분)과 함께 단란한 가정을 꾸려나가는 행복한 주부이다.  그러나 메간의 생일날, 괴한에게 줄리가 성폭행당한 후 살해당하는 사건이 일어나면서 단란했던 이 가정은 불행의 늪에 빠지고만다. 카렌은 줄리가 비참하게 숨진데 대한 한을 풀지 못하고 경찰에게 빨리 범인을 체포하라고 닥달한다. 며칠 후 경찰로부터 용의자를 잡았다는 소식을 듣는 카렌 부부. 용의자로 지목된 사람은 눕(Robert Doob: 키퍼 서덜랜드 분)이라는 배달일을 하는 청년으로 정액에서 검출한 유전자까지 일치한다는 것이었다.  범인이 잡혔다는 사실에 흥분한 카렌은 법정으로 가지만 눕은 증거 불충분으로 풀려나게 된다. 카렌은 담당경찰의 제의로 같은 아픔을 지닌 사람들의 모임에 나가게 된다.  한편, 눕은 또다시 범행을 저지르게 되는데...",originalLanguage:"en",runtime:101,fictionReality:15,highLowTempo:45,emotionIdea:90,openClosure:15},{id:"tmdb-13925",tmdbId:13925,titleKo:"룩소 2세",originalTitle:"Luxo Jr.",releaseYear:1993,primaryGenre:"로맨스",genres:["애니메이션","코미디"],posterPath:"https://image.tmdb.org/t/p/w500/as8xF0wOawngZ1G3qg5gs0VQea3.jpg",overviewKo:"책상 위의 스탠드 룩소에게 어디선가 공이 데굴데굴 굴러온다. 룩소는 처음에는 신기하게 생각하지만 이내 그것이 룩소 2세의 장난임을 알게된다. 그리고 룩소 2세의 장난은 점점 심해지는데….",originalLanguage:"en",runtime:2,fictionReality:15,highLowTempo:45,emotionIdea:85,openClosure:15},{id:"tmdb-4348",tmdbId:4348,titleKo:"오만과 편견",originalTitle:"Pride & Prejudice",releaseYear:2005,primaryGenre:"로맨스",genres:["드라마","로맨스"],posterPath:"https://image.tmdb.org/t/p/w500/rgKfvG0PgJBIPR6cNICukRnfMga.jpg",overviewKo:"베넷 가의 다섯 자매 중 둘째인 엘리자베스는 사랑하는 사람과의 결혼을 믿는 자존심 강하고 영리한 소녀이다. 부유하고 명망있는 가문의 신사 빙리와 그의 친구 다아시가 여름 동안 대저택에 머물게 되고, 댄스 파티에서 처음 만난 엘리자베스와 다아시는 서로에게서 눈을 떼지 못한다. 다아시는 아름답고 지적인 그녀의 매력에 점점 빠져들고, 폭우가 쏟아지는 날 비바람이 몰아치는 언덕에서 가슴 속 깊은 곳에 담아둔 뜨거운 사랑을 그녀에게 고백한다. 하지만 다아시가 빙리와 제인의 결혼을 제인이 명망있는 가문 출신이 아니라는 이유로 반대한 것을 알게 되자, 그를 오만하고 편견에 가득 찬 속물로 여기며 외면하는데...",originalLanguage:"en",runtime:128,fictionReality:5,highLowTempo:45,emotionIdea:85,openClosure:15},{id:"tmdb-396371",tmdbId:396371,titleKo:"몰리스 게임",originalTitle:"Molly's Game",releaseYear:2025,primaryGenre:"SF",genres:["드라마","범죄"],posterPath:"https://image.tmdb.org/t/p/w500/iaYvNgiExX2jPO9ehpLyRIkzdBT.jpg",overviewKo:"부상으로 한순간 모든 것을 잃은 올림픽 스키 유망주 몰리는 우연한 기회로 지하 포커 세계를 움직이는 하우스에서 일하게 된다. 할리우드 로열패밀리부터 스포츠 스타, 거대 기업인들까지 상상을 뛰어넘는 판돈과 은밀한 거래가 오가던 비밀 하우스에 어느새 조금씩 균열이 일어나게 되고, 몰리는 그 틈을 타 포커판을 자신의 것으로 만들고자 ‘플레이어 X’와 함께 세계 최고, 최대의 포커 하우스를 새롭게 오픈한다. 점점 커지는 판돈과 시한폭탄과도 같은 플레이어들이 몰려들수록 ‘몰리’의 포커 하우스는 점점 숨 막히는 긴장감이 감돌게 되는데…",originalLanguage:"en",runtime:140,fictionReality:95,highLowTempo:70,emotionIdea:50,openClosure:75},{id:"tmdb-293670",tmdbId:293670,titleKo:"곡성",originalTitle:"곡성",releaseYear:2016,primaryGenre:"공포",genres:["공포","미스터리"],posterPath:"https://image.tmdb.org/t/p/w500/jL5v8v2h8W1y8sR747hN4V44q7.jpg",overviewKo:"낯선 외지인이 나타난 후 벌어지는 의문의 연쇄 사건들로 마을이 발칵 뒤집힌다. 경찰은 집단 야생 버섯 중독으로 잠정적 결론을 내리지만  모든 사건의 원인이 그 외지인 때문이라는 소문과 의심이 걷잡을 수 없이 퍼져 나간다. 경찰 종구는 현장을 목격했다는 여인 무명을 만나면서  외지인에 대한 소문을 확신하기 시작한다. 딸 효진이 피해자들과 비슷한 증상으로 아파오기 시작하자 다급해진 종구. 외지인을 찾아 난동을 부리고, 무속인 일광을 불러들이는데...",originalLanguage:"ko",runtime:156,fictionReality:80,highLowTempo:75,emotionIdea:65,openClosure:95},{id:"tmdb-424694",tmdbId:424694,titleKo:"보헤미안 랩소디",originalTitle:"Bohemian Rhapsody",releaseYear:2018,primaryGenre:"드라마",genres:["드라마","음악"],posterPath:"https://image.tmdb.org/t/p/w500/lHu1wtCFWaNsR25lHn68zuE9Uui.jpg",overviewKo:"시대와 세대를 초월한 전설적인 록 밴드 '퀸'과 보컬 '프레디 머큐리'의 독창적인 음악과 화려한 무대, 그리고 그들의 진짜 이야기를 그린 영화.",originalLanguage:"en",runtime:134,fictionReality:15,highLowTempo:70,emotionIdea:90,openClosure:25},{id:"tmdb-116745",tmdbId:116745,titleKo:"월터의 상상은 현실이 된다",originalTitle:"The Secret Life of Walter Mitty",releaseYear:2013,primaryGenre:"드라마",genres:["드라마","모험","판타지"],posterPath:"https://image.tmdb.org/t/p/w500/v31QC1auYlpa6XP2kWbgjfwA1wc.jpg",overviewKo:"'라이프' 잡지사에서 16년째 사진 현상사로 일하며 평범한 일상을 살던 월터 미티. 사라진 마지막 25번째 필름을 찾기 위해 그린란드, 아이슬란드 등으로 생애 첫 모험을 떠난다.",originalLanguage:"en",runtime:114,fictionReality:65,highLowTempo:50,emotionIdea:70,openClosure:60},{id:"tmdb-244786",tmdbId:244786,titleKo:"위플래쉬",originalTitle:"Whiplash",releaseYear:2014,primaryGenre:"드라마",genres:["드라마","음악"],posterPath:"https://image.tmdb.org/t/p/w500/lIv1wPF2hubc1jxlROWdhjUIu4u.jpg",overviewKo:"셰이퍼 음악학교 최고의 밴드에 들어가게 된 신입 드럼 연주자 앤드류. 천재적인 재능을 갈구하는 폭군 플렛처 교수의 지독한 채찍질 속에서 광기의 대결이 시작된다.",originalLanguage:"en",runtime:106,fictionReality:10,highLowTempo:85,emotionIdea:80,openClosure:30},{id:"tmdb-970347",tmdbId:970347,titleKo:"퍼펙트 데이즈",originalTitle:"Perfect Days",releaseYear:2023,primaryGenre:"드라마",genres:["드라마"],posterPath:"https://image.tmdb.org/t/p/w500/yL9UusQJtY2Tsk283z1p54e5rOa.jpg",overviewKo:"도쿄의 공공 화장실 청소부 히라야마의 평범하지만 단조롭지 않은 일상. 카세트테이프 음악과 독서, 사진을 즐기는 그의 조용한 행복.",originalLanguage:"ja",runtime:124,fictionReality:5,highLowTempo:15,emotionIdea:70,openClosure:80},{id:"tmdb-696506",tmdbId:696506,titleKo:"미키 17",originalTitle:"Mickey 17",releaseYear:2025,primaryGenre:"SF",genres:["SF","드라마","미스터리"],posterPath:"https://image.tmdb.org/t/p/w500/lrDscZ4n1s00k4hA9J51vYsz8Kx.jpg",overviewKo:"죽더라도 다시 살아나는 복제인간 '익스펜더블'로 일하는 미키 17이 얼음 행성 니플헤임 개척 임무 중 죽은 줄 알았다가 살아 돌아오며 벌어지는 SF 미스터리.",originalLanguage:"en",runtime:139,fictionReality:85,highLowTempo:65,emotionIdea:40,openClosure:75}];function Us({onMovieClick:e,selectedMovieIds:t=[],reactions:r=[]}){const n=Vr.useMemo(()=>{const c=["드라마","코미디","액션·어드벤처","SF","판타지·애니메이션","스릴러·미스터리·범죄","공포","로맨스"],d=[];return c.forEach(p=>{const h=Re.filter(y=>y.primaryGenre===p).slice(0,6);d.push(...h)}),d},[]),o=Vr.useMemo(()=>{const c={};return r.forEach(d=>{c[d.movieId]=d.sentiment}),c},[r]),i=n.slice(0,16),l=n.slice(16,32),a=n.slice(32,48),s=c=>[...c,...c,...c];return u.jsxs("div",{className:"poster-flow-container","aria-label":"영화 선택 포스터 플로우",children:[u.jsx("div",{className:"poster-row flow-left",children:s(i).map((c,d)=>{const p=o[c.id],h=t.includes(c.id)||!!p;return u.jsx(Ei,{movie:c,isSelected:h,sentiment:p,onClick:()=>e(c),index:d},`row1-${c.id}-${d}`)})}),u.jsx("div",{className:"poster-row flow-right",children:s(l).map((c,d)=>{const p=o[c.id],h=t.includes(c.id)||!!p;return u.jsx(Ei,{movie:c,isSelected:h,sentiment:p,onClick:()=>e(c),index:d},`row2-${c.id}-${d}`)})}),u.jsx("div",{className:"poster-row flow-left",children:s(a).map((c,d)=>{const p=o[c.id],h=t.includes(c.id)||!!p;return u.jsx(Ei,{movie:c,isSelected:h,sentiment:p,onClick:()=>e(c),index:d},`row3-${c.id}-${d}`)})})]})}function Ei({movie:e,isSelected:t,sentiment:r,onClick:n,index:o}){const[i,l]=Vr.useState(e.posterPath),a=()=>{l("/poster-placeholder.svg")},s=d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),n())},c=()=>r==="like"?u.jsx("div",{className:"selected-badge badge-like",children:"❤️ 내 취향"}):r==="dislike"?u.jsx("div",{className:"selected-badge badge-dislike",children:"🤷 별로"}):t?u.jsx("div",{className:"selected-badge",children:"✓ 선택됨"}):null;return u.jsxs("div",{role:"button",tabIndex:0,className:`poster-card ${t?"selected":""} ${r?`sentiment-${r}`:""}`,onClick:n,onKeyDown:s,style:{animationDelay:`${o%16*.05}s`},"aria-label":`${e.titleKo} (${e.releaseYear}년)`,"aria-pressed":t,children:[u.jsx("img",{src:i,alt:`${e.titleKo} 포스터`,onError:a,loading:"lazy"}),u.jsxs("div",{className:"poster-overlay",children:[u.jsx("p",{className:"poster-title",children:e.titleKo}),u.jsx("span",{className:"poster-genre",children:e.primaryGenre})]}),c(),u.jsx("style",{jsx:!0,children:`
        .poster-card {
          position: relative;
          width: 140px;
          height: 210px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          background: #1f2833;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.5);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s;
          border: 2px solid transparent;
          opacity: 0;
          animation: cardFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes cardFadeIn {
          to {
            opacity: 1;
          }
        }

        .poster-card:hover, .poster-card:focus-visible {
          outline: none;
          transform: translateY(-8px) scale(1.05) skewY(5deg); /* 사선 역보정 */
          border-color: var(--primary-color);
          box-shadow: 0 8px 25px var(--primary-glow);
          z-index: 10;
        }

        .poster-card.selected {
          border-color: var(--primary-color);
        }

        .poster-card.sentiment-like {
          border-color: #fc8181;
          box-shadow: 0 0 15px rgba(229, 62, 109, 0.4);
        }

        .poster-card.sentiment-dislike {
          border-color: #fbd38d;
          box-shadow: 0 0 15px rgba(221, 107, 32, 0.4);
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }

        .poster-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(0deg, rgba(11,12,16,1) 0%, rgba(11,12,16,0) 100%);
          padding: 15px 10px 10px 10px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .poster-card:hover .poster-overlay, .poster-card:focus-visible .poster-overlay {
          opacity: 1;
        }

        .poster-title {
          font-family: var(--font-title);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-main);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .poster-genre {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .selected-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: var(--primary-color);
          color: var(--bg-color);
          font-size: 0.7rem;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }

        .selected-badge.badge-like {
          background: #e53e3e;
          color: #fff;
          box-shadow: 0 2px 8px rgba(229, 62, 109, 0.4);
        }

        .selected-badge.badge-dislike {
          background: #dd6b20;
          color: #fff;
          box-shadow: 0 2px 8px rgba(221, 107, 32, 0.4);
        }
      `})]})}function Ys({selectedMovies:e,onRemoveMovie:t,onSubmit:r,minRequired:n=3,mode:o="like"}){const i=e.length,l=i>=n,a=n===0?100:Math.min(i/n*100,100),s=o==="like",c=n===0,d=s?"1단계: 좋아하는 명작 고르기":"2단계: 굳이 싫어하는 명작 고르기";let p="";c?p=s?"💡 포스터를 누르면 즉시 '내 취향' 리스트에 가감 및 취향이 실시간 업데이트됩니다.":"💡 포스터를 누르면 즉시 '나는 별로' 리스트에 가감 및 취향이 실시간 업데이트됩니다.":p=s?l?"🎉 다음 단계(불호 영화 선택)로 진행할 수 있습니다.":`좋아하는 영화를 최소 ${n}편 이상 선택해주세요.`:l?"🎉 준비 완료! 이제 성격(MBTI) 정보를 입력하러 갑니다.":`남들은 인생작이라 하지만, 나는 굳이 싫은 명작을 최소 ${n}편 선택해주세요.`;let h="";c?h=s?"다음 (불호 편집) ➔":"완료 (진단서로) ➔":h=s?"다음 단계로":"MBTI 입력하기";const y=s?"#66fcf1":"#ff9f1c",w=s?"rgba(102, 252, 241, 0.4)":"rgba(255, 159, 28, 0.4)";return u.jsxs("div",{className:`selection-tray glass-panel ${o}-mode`,style:{"--active-color":y,"--active-glow":w},"aria-label":"영화 선택 트레이",children:[u.jsxs("div",{className:"tray-content",children:[u.jsxs("div",{className:"tray-info",children:[u.jsxs("div",{className:"info-text",children:[u.jsx("h4",{children:d}),u.jsxs("p",{className:"counter",children:[u.jsx("span",{children:i})," / ",n," 편 선택됨"]})]}),u.jsx("div",{className:"progress-track","aria-hidden":"true",children:u.jsx("div",{className:"progress-bar",style:{width:`${a}%`}})}),u.jsx("p",{className:"guide-text",children:p})]}),u.jsx("div",{className:"tray-list",children:e.length===0?u.jsx("div",{className:"empty-tray-msg",children:s?"위의 움직이는 포스터에서 정말 좋아하는 작품을 탭해 보세요.":"남들은 명작이라 찬사하지만, 나는 굳이 싫은 영화를 탭해 보세요."}):e.map(x=>u.jsx(Ph,{movie:x,onRemove:()=>t(x.id),mode:o},`mini-${x.id}`))}),u.jsx("div",{className:"tray-action",children:u.jsx("button",{className:`btn-start ${l?"active":""}`,disabled:!l,onClick:r,children:h})})]}),u.jsx("style",{jsx:!0,children:`
        .selection-tray {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 120px;
          z-index: 1000;
          border-radius: 20px 20px 0 0;
          border-left: none;
          border-right: none;
          border-bottom: none;
          background: rgba(11, 12, 16, 0.9);
          box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.7);
          padding: 10px 30px;
          border-top: 2px solid var(--border-color);
          transition: border-color 0.4s ease;
        }

        /* 불호/호 모드별 보더 칼라 교체 */
        .selection-tray.like-mode {
          border-top-color: rgba(102, 252, 241, 0.25);
        }
        
        .selection-tray.dislike-mode {
          border-top-color: rgba(255, 159, 28, 0.25);
        }

        .tray-content {
          display: flex;
          height: 100%;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        /* 1. 왼쪽 정보 구역 */
        .tray-info {
          flex-shrink: 0;
          width: 280px;
        }

        .info-text {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .info-text h4 {
          font-size: 0.95rem;
          color: var(--text-main);
          font-weight: 600;
        }

        .counter {
          font-size: 0.9rem;
          color: var(--text-desc);
          font-weight: 500;
        }

        .counter span {
          color: var(--active-color);
          font-weight: 700;
          font-size: 1.1rem;
          text-shadow: 0 0 10px var(--active-glow);
          transition: color 0.4s ease;
        }

        .progress-track {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 6px;
        }

        .progress-bar {
          height: 100%;
          background: var(--active-color);
          box-shadow: 0 0 8px var(--active-glow);
          border-radius: 10px;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s;
        }

        .guide-text {
          font-size: 0.75rem;
          color: var(--text-desc);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* 2. 중앙 리스트 구역 */
        .tray-list {
          display: flex;
          flex-grow: 1;
          gap: 12px;
          overflow-x: auto;
          padding: 5px 10px;
          height: 90px;
          align-items: center;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.02);
        }

        .tray-list::-webkit-scrollbar {
          height: 4px;
        }

        .empty-tray-msg {
          font-size: 0.82rem;
          color: var(--text-muted);
          text-align: center;
          width: 100%;
          opacity: 0.7;
        }

        /* 3. 오른쪽 시작 버튼 */
        .tray-action {
          flex-shrink: 0;
        }

        .btn-start {
          background: #1f2833;
          color: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.05);
          font-family: var(--font-title);
          font-size: 0.95rem;
          font-weight: 700;
          padding: 14px 24px;
          border-radius: 12px;
          cursor: not-allowed;
          transition: var(--transition-smooth);
        }

        .btn-start.active {
          background: var(--active-color);
          color: var(--bg-color);
          border-color: transparent;
          cursor: pointer;
          box-shadow: 0 4px 15px var(--active-glow);
        }

        .btn-start.active:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px var(--active-glow);
        }

        .btn-start.active:active {
          transform: translateY(1px);
        }

        /* 모바일 최적화 */
        @media (max-width: 768px) {
          .selection-tray {
            height: 180px;
            padding: 10px 15px;
          }
          .tray-content {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }
          .tray-info {
            width: 100%;
          }
          .tray-list {
            height: 70px;
          }
          .btn-start {
            width: 100%;
            padding: 10px;
          }
        }
      `})]})}function Ph({movie:e,onRemove:t,mode:r}){const[n,o]=Vr.useState(e.posterPath),i=r==="like"?"rgba(255, 77, 77, 0.9)":"rgba(102, 252, 241, 0.95)",l=r==="like"?"white":"#0b0c10";return u.jsxs("div",{className:`mini-card ${r}-badge`,"aria-label":`${e.titleKo} 선택 취소`,children:[u.jsx("img",{src:n,alt:"",onError:()=>o("/poster-placeholder.svg")}),u.jsx("button",{className:"btn-remove",style:{background:i,color:l},onClick:a=>{a.stopPropagation(),t()},"aria-label":`${e.titleKo} 선택 해제`,children:"×"}),u.jsx("style",{jsx:!0,children:`
        .mini-card {
          position: relative;
          width: 50px;
          height: 75px;
          border-radius: 6px;
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.5);
          transition: transform 0.2s;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .mini-card:hover {
          transform: scale(1.08);
        }

        /* 모드별 미니 포스터 연한 형광 테두리 장식 */
        .mini-card.like-badge {
          border-color: rgba(102, 252, 241, 0.3);
        }
        
        .mini-card.dislike-badge {
          border-color: rgba(255, 159, 28, 0.3);
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .btn-remove {
          position: absolute;
          top: 2px;
          right: 2px;
          border: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          font-size: 11px;
          font-weight: 700;
          line-height: 14px;
          text-align: center;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.2s;
          box-shadow: 0 1px 4px rgba(0,0,0,0.3);
        }

        .mini-card:hover .btn-remove {
          opacity: 1;
        }
      `})]})}const Un=[{dimension:"EI",question:"주말이나 쉬는 날에 당신의 에너지는 주로 어디서 충전되나요?",options:[{text:"밖으로 나가 활발하게 활동하거나 친구들을 만날 때",value:"E"},{text:"조용히 집에서 혼자만의 시간을 가지거나 휴식을 취할 때",value:"I"}]},{dimension:"SN",question:"이야기를 나누거나 책/영화를 볼 때, 어떤 서사에 흥미를 느끼나요?",options:[{text:"실제 일어남 직한 사실적이고 구체적인 인물의 생생한 이야기",value:"S"},{text:"상상력이 풍부하고 은유나 상징이 가득한 미래지향적 가설적 이야기",value:"N"}]},{dimension:"TF",question:"친구가 힘든 고민을 털어놓을 때, 당신의 머릿속에 가장 먼저 뜨는 반응은?",options:[{text:"상황을 객관적으로 파악하고 해결책이나 조언을 고민한다",value:"T"},{text:"친구의 복잡한 기분과 마음에 먼저 공감하고 위로의 말을 건넨다",value:"F"}]},{dimension:"JP",question:"여행을 가거나 업무 프로젝트를 시작하기 전, 당신의 기본 스타일은?",options:[{text:"세부 일정과 구체적인 분량 조절 계획을 미리 짜두어야 안심이 된다",value:"J"},{text:"큰 가이드라인만 정해두고 상황 흐름에 맞춰 자유롭게 대처한다",value:"P"}]}];function _h({onComplete:e,onCancel:t}){const[r,n]=v.useState(0),[o,i]=v.useState({}),l=Un[r],a=d=>{const p={...o,[l.dimension]:d};if(i(p),r<Un.length-1)n(r+1);else{const h=(p.EI||"I")+(p.SN||"N")+(p.TF||"F")+(p.JP||"P");e(h)}},s=()=>{r>0&&n(r-1)},c=r/Un.length*100;return u.jsxs("div",{className:"mini-test-card glass-panel","aria-label":"약식 MBTI 자가 진단",children:[u.jsxs("div",{className:"test-header",children:[u.jsxs("span",{className:"test-progress-text",children:["약식 테스트 (",r+1," / ",Un.length,")"]}),u.jsx("button",{className:"btn-close-test",onClick:t,"aria-label":"테스트 종료",children:"×"})]}),u.jsx("div",{className:"test-progress-track",children:u.jsx("div",{className:"test-progress-bar",style:{width:`${c}%`}})}),u.jsxs("div",{className:"test-body",children:[u.jsx("h4",{className:"question-text",children:l.question}),u.jsx("div",{className:"options-grid",children:l.options.map((d,p)=>u.jsx("button",{type:"button",className:"option-btn",onClick:()=>a(d.value),children:d.text},`${l.dimension}-${p}`))})]}),u.jsx("div",{className:"test-footer",children:r>0&&u.jsx("button",{type:"button",className:"btn-test-prev",onClick:s,children:"이전 질문으로"})}),u.jsx("style",{jsx:!0,children:`
        .mini-test-card {
          width: 100%;
          max-width: 550px;
          margin: 0 auto;
          padding: 30px;
          border-color: var(--secondary-color);
          box-shadow: 0 10px 40px var(--secondary-glow);
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .test-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .test-progress-text {
          font-family: var(--font-title);
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .btn-close-test {
          background: transparent;
          border: none;
          color: var(--text-desc);
          font-size: 1.5rem;
          line-height: 1;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-close-test:hover {
          color: var(--danger-color);
        }

        .test-progress-track {
          width: 100%;
          height: 4px;
          background: rgba(255,255,255,0.05);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 25px;
        }

        .test-progress-bar {
          height: 100%;
          background: var(--secondary-color);
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .test-body {
          min-height: 220px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .question-text {
          font-size: 1.15rem;
          color: var(--text-main);
          font-weight: 600;
          line-height: 1.5;
          margin-bottom: 25px;
          text-align: center;
        }

        .options-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .option-btn {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          color: var(--text-main);
          font-size: 0.92rem;
          padding: 16px 20px;
          text-align: left;
          cursor: pointer;
          line-height: 1.4;
          transition: var(--transition-smooth);
        }

        .option-btn:hover {
          background: rgba(138, 43, 226, 0.1);
          border-color: var(--secondary-color);
          box-shadow: 0 0 10px var(--secondary-glow);
          transform: translateY(-1px);
        }

        .test-footer {
          margin-top: 25px;
          display: flex;
          justify-content: flex-start;
          height: 36px;
        }

        .btn-test-prev {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 0.8rem;
          cursor: pointer;
          text-decoration: underline;
          padding: 5px 0;
        }

        .btn-test-prev:hover {
          color: var(--primary-color);
        }
      `})]})}const Bs=["INTJ","INTP","ENTJ","ENTP","INFJ","INFP","ENFJ","ENFP","ISTJ","ISFJ","ESTJ","ESFJ","ISTP","ISFP","ESTP","ESFP"];function zh({value:e,onChange:t}){const[r,n]=v.useState(!1),o=l=>{const a=l.target.value;t(a==="none"?null:a)},i=l=>{t(l),n(!1)};return r?u.jsxs("div",{className:"mbti-selector-container",children:[u.jsx("h3",{className:"selector-title",children:"MBTI 약식 진단 테스트"}),u.jsx("p",{className:"selector-desc",children:"4가지 질문을 통해 당신의 잠재적 성격 유형을 분석해 봅니다."}),u.jsx(_h,{onComplete:i,onCancel:()=>n(!1)})]}):u.jsxs("div",{className:"mbti-selector-container",children:[u.jsx("h3",{className:"selector-title",children:"3. 당신의 MBTI를 선택해 주세요"}),u.jsx("p",{className:"selector-desc",children:"성격에 따른 미디어 소비 취향 차이(간극)를 학술적으로 대조 분석해 드립니다."}),u.jsx("div",{className:"mbti-grid",role:"group","aria-label":"MBTI 유형 그리드 선택",children:Bs.map(l=>{const a=e===l;return u.jsxs("button",{type:"button",className:`mbti-btn ${a?"active":""}`,onClick:()=>t(l),"aria-pressed":a,children:[u.jsx("span",{className:"mbti-code",children:l}),u.jsx("span",{className:"mbti-nick",children:Gs(l)})]},l)})}),u.jsx("div",{className:"mbti-select-fallback",children:u.jsxs("select",{value:e||"none",onChange:o,"aria-label":"MBTI 유형 드롭다운 선택",children:[u.jsx("option",{value:"none",children:"MBTI를 고르세요..."}),Bs.map(l=>u.jsxs("option",{value:l,children:[l," - ",Gs(l)]},`opt-${l}`)),u.jsx("option",{value:"unknown",children:"잘 모르겠습니다"})]})}),u.jsx("div",{className:"mbti-test-entry-area",children:u.jsx("button",{type:"button",className:"btn-trigger-test",onClick:()=>n(!0),children:"💡 내 MBTI를 잘 모릅니다 (약식 테스트로 알아보기)"})}),u.jsx("div",{className:"mbti-unknown-area",children:u.jsx("button",{type:"button",className:`btn-unknown ${e===null?"active":""}`,onClick:()=>t(null),"aria-pressed":e===null,children:"테스트 없이 분석하기"})}),u.jsx("p",{className:"notice-text",children:"※ MBTI가 주입되면 MVTI와의 갭(Gap)을 정밀 분석해 드립니다. 모르시는 경우 테스트를 거쳐 진단받으시거나, 생략하고 진행하실 수 있습니다."}),u.jsx("style",{jsx:!0,children:`
        .mbti-selector-container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }

        .selector-title {
          font-size: 1.25rem;
          color: var(--text-main);
          margin-bottom: 8px;
          text-align: center;
        }

        .selector-desc {
          font-size: 0.85rem;
          color: var(--text-desc);
          text-align: center;
          margin-bottom: 24px;
        }

        /* 데스크톱 그리드 */
        .mbti-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 20px;
        }

        .mbti-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 70px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          color: var(--text-main);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .mbti-btn:hover {
          background: rgba(255,255,255,0.07);
          border-color: var(--primary-color);
          transform: translateY(-2px);
        }

        .mbti-btn.active {
          background: var(--bg-card-hover);
          border-color: var(--primary-color);
          box-shadow: 0 0 15px var(--primary-glow);
        }

        .mbti-code {
          font-family: var(--font-title);
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--primary-color);
        }

        .mbti-btn.active .mbti-code {
          text-shadow: 0 0 8px var(--primary-glow);
        }

        .mbti-nick {
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        /* 모바일 폴백 기본 숨김 */
        .mbti-select-fallback {
          display: none;
          margin-bottom: 15px;
        }

        .mbti-select-fallback select {
          width: 100%;
          height: 48px;
          background: #1f2833;
          border: 1px solid var(--border-color);
          border-radius: 10px;
          color: var(--text-main);
          padding: 0 15px;
          font-size: 0.95rem;
          font-family: var(--font-body);
        }

        /* 약식 진단 트리거 구역 */
        .mbti-test-entry-area {
          display: flex;
          justify-content: center;
          margin-bottom: 15px;
        }

        .btn-trigger-test {
          background: rgba(138, 43, 226, 0.1);
          border: 1px solid var(--secondary-color);
          color: var(--text-main);
          font-family: var(--font-title);
          font-size: 0.88rem;
          font-weight: 600;
          padding: 12px 24px;
          border-radius: 20px;
          cursor: pointer;
          transition: var(--transition-smooth);
          box-shadow: 0 4px 10px rgba(138,43,226,0.15);
        }

        .btn-trigger-test:hover {
          transform: translateY(-2px);
          background: rgba(138,43,226,0.25);
          box-shadow: 0 6px 15px var(--secondary-glow);
        }

        /* 잘 모름 버튼 구역 */
        .mbti-unknown-area {
          display: flex;
          justify-content: center;
          margin-bottom: 15px;
        }

        .btn-unknown {
          background: transparent;
          border: 1px dashed var(--border-color);
          color: var(--text-muted);
          font-size: 0.82rem;
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-unknown:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }

        .btn-unknown.active {
          background: rgba(102, 252, 241, 0.1);
          border-color: var(--primary-color);
          color: var(--primary-color);
        }

        .notice-text {
          font-size: 0.75rem;
          color: var(--text-desc);
          text-align: center;
          opacity: 0.7;
          line-height: 1.4;
        }

        /* 모바일 미디어 쿼리 적용 */
        @media (max-width: 580px) {
          .mbti-grid {
            display: none;
          }
          .mbti-select-fallback {
            display: block;
          }
        }
      `})]})}function Gs(e){return{INTJ:"전략가",INTP:"논리학자",ENTJ:"통솔자",ENTP:"변론가",INFJ:"옹호자",INFP:"중재자",ENFJ:"선도자",ENFP:"활동가",ISTJ:"현실주의자",ISFJ:"수호자",ESTJ:"경영자",ESFJ:"영사관",ISTP:"장인",ISFP:"모험가",ESTP:"사업가",ESFP:"연예인"}[e]||""}function Qo(e,t){const[r,n]=v.useState(()=>{try{const o=window.localStorage.getItem(e);return o?JSON.parse(o):t}catch(o){return console.error(`⚠️ LocalStorage [${e}] 읽기 또는 파싱 오류:`,o),t}});return v.useEffect(()=>{try{window.localStorage.setItem(e,JSON.stringify(r))}catch(o){console.error(`⚠️ LocalStorage [${e}] 저장 오류 (용량 초과 등):`,o)}},[e,r]),[r,n]}function Jo(){const[e,t]=Qo("mvti_user_reactions_v1",[]);return{reactions:e,addReaction:({movieId:a,sentiment:s,strength:c=2,watchStatus:d="seen",note:p=""})=>{if(!a)throw new Error("영화 식별자(movieId)가 누락되었습니다.");if(!s)throw new Error("선호도 반응(sentiment)은 필수 선택 사항입니다.");if(!["like","dislike","neutral"].includes(s))throw new Error("올바르지 않은 선호도 형식입니다.");if(e.some(w=>w.movieId===a))throw new Error("이미 이 영화에 대한 반응이 등록되어 있습니다.");const y={id:`react-${Date.now()}-${Math.random().toString(36).substring(2,9)}`,movieId:a,sentiment:s,strength:Number(c),watchStatus:d,note:p.trim(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};return t(w=>[y,...w]),y},getReactionByMovieId:a=>e.find(s=>s.movieId===a)||null,updateReaction:(a,s)=>{if(!a)throw new Error("수정할 반응 식별자(reactionId)가 필요합니다.");if(!e.some(d=>d.id===a))throw new Error("존재하지 않는 반응 기록은 수정할 수 없습니다.");t(d=>d.map(p=>p.id===a?{...p,...s,updatedAt:new Date().toISOString()}:p))},deleteReaction:a=>{if(!a)throw new Error("삭제할 반응 식별자(reactionId)가 필요합니다.");if(!e.some(c=>c.id===a))throw new Error("존재하지 않는 반응 기록은 삭제할 수 없습니다.");t(c=>c.filter(d=>d.id!==a))},clearAllReactions:()=>{t([])}}}function Mh({onAddSuccess:e,existingMovieIds:t=[]}){const[r,n]=v.useState(""),[o,i]=v.useState([]),[l,a]=v.useState(null),[s,c]=v.useState(!1),[d,p]=v.useState("like"),[h,y]=v.useState(2),[w,x]=v.useState("seen"),[j,f]=v.useState(""),[m,g]=v.useState(""),S=v.useRef(null);v.useEffect(()=>{if(!r.trim()){i([]);return}const T=Re.filter(I=>{var q,st;const $=r.toLowerCase(),J=(q=I.titleKo)==null?void 0:q.toLowerCase().includes($),ce=(st=I.originalTitle)==null?void 0:st.toLowerCase().includes($),we=t.includes(I.id);return(J||ce)&&!we});i(T.slice(0,8))},[r,t]),v.useEffect(()=>{function T(I){S.current&&!S.current.contains(I.target)&&c(!1)}return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[]);const C=T=>{a(T),n(""),i([]),c(!1),g("")},k=()=>{a(null),p("like"),y(2),x("seen"),f(""),g("")},b=T=>{if(T.preventDefault(),!l){g("영화를 먼저 선택해주세요.");return}try{e({movieId:l.id,sentiment:d,strength:Number(h),watchStatus:w,note:j.trim()}),k()}catch(I){g(I.message||"반응 등록에 실패했습니다.")}},N=T=>T?T.startsWith("http")?T:`https://image.tmdb.org/t/p/w200${T}`:"/poster-placeholder.svg";return u.jsxs("div",{className:"reaction-form-container glass-panel",children:[u.jsx("h3",{className:"form-title",children:"영화 반응 추가"}),l?u.jsxs("form",{onSubmit:b,className:"form-content",children:[u.jsxs("div",{className:"selected-movie-header",children:[u.jsx("img",{src:N(l.posterPath),alt:l.titleKo,className:"selected-poster"}),u.jsxs("div",{className:"selected-info",children:[u.jsx("h4",{children:l.titleKo}),u.jsxs("p",{className:"selected-meta",children:[l.releaseYear," • ",l.primaryGenre]}),u.jsx("button",{type:"button",className:"btn-change-movie",onClick:k,children:"다른 영화 선택"})]})]}),u.jsxs("div",{className:"form-grid",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"form-label",children:"나의 반응"}),u.jsxs("div",{className:"sentiment-selector",children:[u.jsx("button",{type:"button",className:`btn-sentiment like ${d==="like"?"active":""}`,onClick:()=>p("like"),children:"❤️ 내 취향"}),u.jsx("button",{type:"button",className:`btn-sentiment dislike ${d==="dislike"?"active":""}`,onClick:()=>p("dislike"),children:"🤷 나는 별로"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"form-label",children:"반응 강도"}),u.jsx("div",{className:"strength-selector",children:[1,2,3].map(T=>u.jsxs("button",{type:"button",className:`btn-strength ${h===T?"active":""}`,onClick:()=>y(T),children:[T===1&&"잔잔함",T===2&&"보통",T===3&&"강렬함"]},T))})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"form-label",children:"관람 상태"}),u.jsxs("select",{value:w,onChange:T=>x(T.target.value),className:"form-select",children:[u.jsx("option",{value:"seen",children:"이미 봄"}),u.jsx("option",{value:"wantToWatch",children:"보고 싶음"}),u.jsx("option",{value:"notNow",children:"관심 없음"})]})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"form-label",children:"나만의 감상평/메모 (선택)"}),u.jsx("textarea",{placeholder:"이 영화에 대해 느낀 주관적인 평가를 가볍게 적어주세요. (최대 200자)",value:j,onChange:T=>f(T.target.value.slice(0,200)),className:"form-textarea",rows:3}),u.jsxs("div",{className:"textarea-counter",children:[j.length,"/200자"]})]}),m&&u.jsxs("div",{className:"form-error",children:["⚠️ ",m]}),u.jsxs("div",{className:"form-actions",children:[u.jsx("button",{type:"button",className:"btn-cancel",onClick:k,children:"취소"}),u.jsx("button",{type:"submit",className:"btn-submit",children:"기록 저장하기"})]})]}):u.jsxs("div",{className:"search-section",ref:S,children:[u.jsx("label",{className:"form-label",children:"영화 검색"}),u.jsxs("div",{className:"search-input-wrapper",children:[u.jsx("input",{type:"text",placeholder:"영화 제목을 입력하세요 (예: 쇼생크 탈출, 인터스텔라)...",value:r,onChange:T=>{n(T.target.value),c(!0)},onFocus:()=>c(!0),className:"search-input"}),u.jsx("span",{className:"search-icon",children:"🔍"})]}),s&&o.length>0&&u.jsx("ul",{className:"search-dropdown",children:o.map(T=>u.jsxs("li",{onClick:()=>C(T),className:"dropdown-item",children:[u.jsx("img",{src:N(T.posterPath),alt:T.titleKo,className:"dropdown-poster"}),u.jsxs("div",{className:"dropdown-info",children:[u.jsx("span",{className:"dropdown-title",children:T.titleKo}),u.jsxs("span",{className:"dropdown-meta",children:[T.releaseYear," • ",T.primaryGenre]})]})]},T.id))}),s&&r.trim()&&o.length===0&&u.jsx("div",{className:"search-no-results",children:"검색 결과가 없거나 이미 등록된 영화입니다."})]}),u.jsx("style",{jsx:!0,children:`
        .reaction-form-container {
          padding: 24px;
          margin-bottom: 30px;
          border: 1px solid var(--border-color, rgba(255, 255, 255, 0.08));
        }

        .form-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-main, #ffffff);
          margin-top: 0;
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-desc, #a0aec0);
          margin-bottom: 8px;
        }

        .search-section {
          position: relative;
        }

        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-input {
          width: 100%;
          padding: 12px 40px 12px 16px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
          color: #fff;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s;
        }

        .search-input:focus {
          border-color: var(--primary-color);
        }

        .search-icon {
          position: absolute;
          right: 14px;
          color: #a0aec0;
          font-size: 1.1rem;
        }

        .search-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--bg-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-md);
          margin-top: 5px;
          padding: 0;
          list-style: none;
          max-height: 280px;
          overflow-y: auto;
          z-index: 1000;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          padding: 10px 14px;
          cursor: pointer;
          transition: background 0.2s;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }

        .dropdown-item:hover {
          background: rgba(255, 255, 255, 0.04);
        }

        .dropdown-poster {
          width: 36px;
          height: 50px;
          object-fit: cover;
          border-radius: 4px;
          margin-right: 12px;
          background: #2d3748;
        }

        .dropdown-info {
          display: flex;
          flex-direction: column;
        }

        .dropdown-title {
          font-size: 0.95rem;
          color: #fff;
          font-weight: 500;
        }

        .dropdown-meta {
          font-size: 0.8rem;
          color: #a0aec0;
          margin-top: 2px;
        }

        .search-no-results {
          padding: 14px;
          text-align: center;
          color: #a0aec0;
          font-size: 0.9rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          margin-top: 5px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .selected-movie-header {
          display: flex;
          align-items: center;
          padding: 14px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .selected-poster {
          width: 50px;
          height: 70px;
          object-fit: cover;
          border-radius: 4px;
          margin-right: 16px;
        }

        .selected-info h4 {
          margin: 0 0 4px 0;
          font-size: 1.1rem;
          color: #fff;
        }

        .selected-meta {
          margin: 0 0 8px 0;
          font-size: 0.85rem;
          color: #a0aec0;
        }

        .btn-change-movie {
          background: transparent;
          border: none;
          color: var(--accent-warm);
          font-size: 0.8rem;
          text-decoration: underline;
          cursor: pointer;
          padding: 0;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        @media (min-width: 768px) {
          .form-grid {
            grid-template-columns: 2fr 1.2fr 1fr;
          }
        }

        .sentiment-selector {
          display: flex;
          gap: 8px;
        }

        .btn-sentiment {
          flex: 1;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.02);
          color: #a0aec0;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-sentiment.like.active {
          background: rgba(229, 62, 109, 0.15);
          border-color: #e53e3e;
          color: #fc8181;
        }

        .btn-sentiment.dislike.active {
          background: rgba(221, 107, 32, 0.15);
          border-color: #dd6b20;
          color: #fbd38d;
        }



        .strength-selector {
          display: flex;
          gap: 6px;
        }

        .btn-strength {
          flex: 1;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.02);
          color: #a0aec0;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-strength.active {
          background: var(--primary-muted);
          border-color: var(--primary-color);
          color: var(--primary-color);
        }

        .form-select {
          width: 100%;
          padding: 10px 14px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 0.9rem;
          outline: none;
          cursor: pointer;
        }

        .form-textarea {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 0.9rem;
          resize: none;
          outline: none;
        }

        .form-textarea:focus {
          border-color: var(--primary-color);
        }

        .textarea-counter {
          text-align: right;
          font-size: 0.75rem;
          color: #718096;
          margin-top: 4px;
        }

        .form-error {
          padding: 10px 14px;
          background: rgba(229, 62, 109, 0.1);
          border: 1px solid #e53e3e;
          border-radius: 8px;
          color: #fc8181;
          font-size: 0.85rem;
          margin-bottom: 20px;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        }

        .btn-cancel {
          padding: 10px 20px;
          border-radius: 8px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #a0aec0;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-cancel:hover {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .btn-submit {
          padding: 10px 24px;
          border-radius: var(--radius-md);
          background: var(--primary-color);
          border: none;
          color: var(--bg-color);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-submit:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
      `})]})}function Fh({reaction:e,onEditClick:t,onDeleteClick:r}){const{movieId:n,sentiment:o,strength:i,watchStatus:l,note:a,updatedAt:s}=e,c=Re.find(x=>x.id===n);if(!c)return u.jsx("div",{className:"reaction-card error",children:u.jsxs("p",{children:["⚠️ 영화 데이터를 찾을 수 없습니다. (ID: ",n,")"]})});const d=x=>x?x.startsWith("http")?x:`https://image.tmdb.org/t/p/w200${x}`:"/poster-placeholder.svg",p=()=>{switch(o){case"like":return u.jsx("span",{className:"badge sentiment-badge like",children:"❤️ 내 취향"});case"dislike":return u.jsx("span",{className:"badge sentiment-badge dislike",children:"🤷 나는 별로"});case"neutral":default:return u.jsx("span",{className:"badge sentiment-badge neutral",children:"😐 그냥 그래요"})}},h=()=>{if(o==="neutral")return null;const x=[],j=o==="like"?"🔥":"⚡";for(let m=0;m<i;m++)x.push(u.jsx("span",{className:"strength-icon",children:j},m));const f=i===1?"약함":i===2?"보통":"강렬함";return u.jsxs("div",{className:"strength-display",children:[u.jsxs("span",{className:"strength-text",children:["강도 (",f,"): "]}),u.jsx("div",{className:"strength-icons",children:x})]})},y=()=>{switch(l){case"seen":return u.jsx("span",{className:"badge status-badge seen",children:"이미 봄"});case"wantToWatch":return u.jsx("span",{className:"badge status-badge want",children:"보고 싶음"});case"notNow":return u.jsx("span",{className:"badge status-badge not-now",children:"관심 없음"});default:return null}},w=new Date(s).toLocaleDateString("ko-KR",{year:"numeric",month:"short",day:"numeric"});return u.jsxs("div",{className:`reaction-card glass-panel sentiment-${o}`,children:[u.jsxs("div",{className:"card-poster-wrapper",children:[u.jsx("img",{src:d(c.posterPath),alt:c.titleKo,className:"card-poster"}),u.jsx("div",{className:"card-sentiment-overlay",children:p()})]}),u.jsxs("div",{className:"card-content",children:[u.jsxs("div",{className:"card-header",children:[u.jsxs("div",{className:"card-title-group",children:[u.jsx("h4",{className:"card-title",children:c.titleKo}),u.jsxs("span",{className:"card-meta",children:[c.releaseYear," • ",c.primaryGenre]})]}),u.jsx("div",{className:"card-status",children:y()})]}),u.jsxs("div",{className:"card-body",children:[h(),a?u.jsxs("div",{className:"card-note",children:[u.jsx("span",{className:"note-label",children:"나의 기록:"}),u.jsxs("p",{className:"note-text",children:['"',a,'"']})]}):u.jsx("div",{className:"card-note empty",children:u.jsx("p",{className:"note-text",children:"작성된 메모가 없습니다."})})]}),u.jsxs("div",{className:"card-footer",children:[u.jsxs("span",{className:"card-date",children:["최종 수정: ",w]}),u.jsxs("div",{className:"card-actions",children:[u.jsx("button",{className:"btn-card-edit",onClick:()=>t(e),children:"수정"}),u.jsx("button",{className:"btn-card-delete",onClick:()=>r(e.id),children:"삭제"})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .reaction-card {
          display: flex;
          flex-direction: row;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: 16px;
          transition: var(--transition-smooth);
        }

        .reaction-card:hover {
          transform: translateY(-1px);
          border-color: var(--border-default);
        }

        .reaction-card.sentiment-like {
          border-left: 3px solid var(--accent-rose);
        }

        .reaction-card.sentiment-dislike {
          border-left: 3px solid var(--accent-warm);
        }

        .reaction-card.sentiment-neutral {
          border-left: 3px solid var(--text-muted);
        }

        .card-poster-wrapper {
          position: relative;
          width: 90px;
          min-width: 90px;
          height: 100%;
          background: var(--bg-surface);
        }

        @media (min-width: 480px) {
          .card-poster-wrapper {
            width: 110px;
            min-width: 110px;
          }
        }

        .card-poster {
          width: 100%;
          height: 100%;
          min-height: 130px;
          object-fit: cover;
          display: block;
        }

        .card-sentiment-overlay {
          position: absolute;
          bottom: 8px;
          left: 4px;
          right: 4px;
          text-align: center;
        }

        .card-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 16px;
          justify-content: space-between;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 10px;
        }

        .card-title {
          margin: 0;
          font-size: 1.05rem;
          color: var(--text-main);
          font-weight: 700;
          line-height: 1.3;
        }

        .card-meta {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-top: 4px;
          display: block;
        }

        .badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: var(--radius-sm);
          white-space: nowrap;
        }

        .sentiment-badge.like {
          background: var(--accent-rose-muted);
          color: var(--accent-rose);
          border: 1px solid var(--accent-rose);
        }

        .sentiment-badge.dislike {
          background: var(--accent-warm-muted);
          color: var(--accent-warm);
          border: 1px solid var(--accent-warm);
        }

        .sentiment-badge.neutral {
          background: var(--bg-surface);
          color: var(--text-secondary);
          border: 1px solid var(--border-default);
        }

        .status-badge {
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
        }

        .status-badge.seen {
          border-color: rgba(93, 228, 216, 0.2);
          color: var(--primary-color);
        }

        .card-body {
          margin-bottom: 14px;
          flex: 1;
        }

        .strength-display {
          display: flex;
          align-items: center;
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .strength-icons {
          display: flex;
          gap: 2px;
          margin-left: 6px;
        }

        .strength-icon {
          font-size: 0.8rem;
        }

        .card-note {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 8px 12px;
        }

        .card-note.empty {
          background: transparent;
          border: none;
          padding: 0;
        }

        .note-label {
          display: block;
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-bottom: 2px;
          font-weight: 500;
        }

        .note-text {
          margin: 0;
          font-size: 0.82rem;
          color: var(--text-secondary);
          font-style: italic;
          line-height: 1.4;
        }

        .card-note.empty .note-text {
          color: var(--text-muted);
          font-style: normal;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border-subtle);
          padding-top: 10px;
          margin-top: auto;
        }

        .card-date {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .card-actions {
          display: flex;
          gap: 6px;
        }

        .btn-card-edit {
          background: transparent;
          border: 1px solid var(--border-default);
          color: var(--text-secondary);
          padding: 5px 10px;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-card-edit:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
          background: var(--primary-muted);
        }

        .btn-card-delete {
          background: transparent;
          border: 1px solid rgba(229, 90, 111, 0.2);
          color: var(--danger-color);
          padding: 5px 10px;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-card-delete:hover {
          background: rgba(229, 90, 111, 0.08);
          border-color: var(--danger-color);
        }
      `})]})}function Kh({message:e="기록된 데이터가 없습니다.",description:t="영화 반응을 추가하여 취향 분석을 시작해보세요!",actionButton:r}){return u.jsxs("div",{className:"empty-state-container",children:[u.jsx("div",{className:"empty-state-icon",children:"🎬"}),u.jsx("h3",{className:"empty-state-message",children:e}),u.jsx("p",{className:"empty-state-description",children:t}),r&&u.jsx("div",{className:"empty-state-action",children:r}),u.jsx("style",{jsx:!0,children:`
        .empty-state-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          text-align: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px dashed var(--border-color, rgba(255, 255, 255, 0.1));
          border-radius: 16px;
          backdrop-filter: blur(10px);
          max-width: 500px;
          margin: 40px auto;
        }

        .empty-state-icon {
          font-size: 3.5rem;
          margin-bottom: 20px;
          animation: float 3s ease-in-out infinite;
        }

        .empty-state-message {
          font-size: 1.25rem;
          color: var(--text-main, #ffffff);
          margin-bottom: 10px;
          font-weight: 600;
        }

        .empty-state-description {
          font-size: 0.9rem;
          color: var(--text-desc, #a0aec0);
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .empty-state-action {
          margin-top: 10px;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `})]})}function Dh({reactions:e,onEditClick:t,onDeleteClick:r}){const[n,o]=v.useState("all"),[i,l]=v.useState("newest"),[a,s]=v.useState(""),c=v.useMemo(()=>{let d=[...e];if(a.trim()){const p=a.toLowerCase();d=d.filter(h=>{var w,x;const y=Re.find(j=>j.id===h.movieId);return((w=y==null?void 0:y.titleKo)==null?void 0:w.toLowerCase().includes(p))||((x=y==null?void 0:y.originalTitle)==null?void 0:x.toLowerCase().includes(p))})}return n!=="all"&&(d=d.filter(p=>p.sentiment===n)),d.sort((p,h)=>{if(i==="newest")return new Date(h.updatedAt||h.createdAt)-new Date(p.updatedAt||p.createdAt);if(i==="oldest")return new Date(p.updatedAt||p.createdAt)-new Date(h.updatedAt||h.createdAt);if(i==="strength"){const y=p.sentiment==="neutral"?0:p.strength||0;return(h.sentiment==="neutral"?0:h.strength||0)-y}return 0}),d},[e,n,i,a]);return u.jsxs("div",{className:"reaction-list-wrapper",children:[u.jsxs("div",{className:"list-controls-panel glass-panel",children:[u.jsxs("div",{className:"filter-tabs",children:[u.jsxs("button",{className:`tab-btn ${n==="all"?"active":""}`,onClick:()=>o("all"),children:["전체 (",e.length,")"]}),u.jsxs("button",{className:`tab-btn ${n==="like"?"active":""}`,onClick:()=>o("like"),children:["내 취향 (",e.filter(d=>d.sentiment==="like").length,")"]}),u.jsxs("button",{className:`tab-btn ${n==="dislike"?"active":""}`,onClick:()=>o("dislike"),children:["나는 별로 (",e.filter(d=>d.sentiment==="dislike").length,")"]})]}),u.jsxs("div",{className:"search-sort-group",children:[u.jsxs("div",{className:"list-search-wrapper",children:[u.jsx("input",{type:"text",placeholder:"목록 내 영화 검색...",value:a,onChange:d=>s(d.target.value),className:"list-search-input"}),a&&u.jsx("button",{className:"btn-clear-search",onClick:()=>s(""),children:"✕"})]}),u.jsx("div",{className:"sort-selector-wrapper",children:u.jsxs("select",{value:i,onChange:d=>l(d.target.value),className:"list-sort-select",children:[u.jsx("option",{value:"newest",children:"최신 기록순"}),u.jsx("option",{value:"oldest",children:"오래된 기록순"}),u.jsx("option",{value:"strength",children:"강도 높은순"})]})})]})]}),c.length>0?u.jsx("div",{className:"reaction-grid",children:c.map(d=>u.jsx(Fh,{reaction:d,onEditClick:t,onDeleteClick:r},d.id))}):u.jsx(Kh,{message:a||n!=="all"?"조건에 맞는 영화 반응이 없습니다.":"아직 기록된 영화 반응이 없습니다.",description:a||n!=="all"?"필터 조건이나 검색어를 변경해 보세요!":"상단의 영화 검색창을 이용하여 첫 반응을 남겨보세요!"}),u.jsx("style",{jsx:!0,children:`
        .reaction-list-wrapper {
          width: 100%;
        }

        .list-controls-panel {
          padding: 16px 20px;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
        }

        @media (min-width: 768px) {
          .list-controls-panel {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .filter-tabs {
          display: flex;
          overflow-x: auto;
          gap: 6px;
          padding-bottom: 4px;
        }

        /* 스크롤바 숨기기 */
        .filter-tabs::-webkit-scrollbar {
          display: none;
        }
        .filter-tabs {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .tab-btn {
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          border: 1px solid transparent;
          background: rgba(255, 255, 255, 0.02);
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          transition: var(--transition-smooth);
        }

        .tab-btn:hover {
          color: var(--text-main);
          background: rgba(255, 255, 255, 0.04);
        }

        .tab-btn.active {
          background: var(--bg-surface);
          border-color: var(--border-default);
          color: var(--text-main);
          font-weight: 600;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }

        .search-sort-group {
          display: flex;
          gap: 10px;
          align-items: center;
          width: 100%;
        }

        @media (min-width: 768px) {
          .search-sort-group {
            width: auto;
            justify-content: flex-end;
          }
        }

        .list-search-wrapper {
          position: relative;
          flex: 1;
          max-width: 250px;
        }

        .list-search-input {
          width: 100%;
          padding: 8px 30px 8px 12px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-default);
          color: var(--text-main);
          font-size: 0.8rem;
          outline: none;
          transition: var(--transition-smooth);
        }

        .list-search-input:focus {
          border-color: var(--primary-color);
        }

        .btn-clear-search {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 0.85rem;
          padding: 0;
        }

        .btn-clear-search:hover {
          color: var(--text-main);
        }

        .sort-selector-wrapper {
          flex-shrink: 0;
        }

        .list-sort-select {
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-default);
          color: var(--text-main);
          font-size: 0.8rem;
          outline: none;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .list-sort-select:focus {
          border-color: var(--primary-color);
        }

        .reaction-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        @media (min-width: 992px) {
          .reaction-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `})]})}function Oh({reaction:e,isOpen:t,onClose:r,onSave:n}){const[o,i]=v.useState("like"),[l,a]=v.useState(2),[s,c]=v.useState("seen"),[d,p]=v.useState(""),[h,y]=v.useState("");if(v.useEffect(()=>{e&&(i(e.sentiment||"like"),a(e.strength||2),c(e.watchStatus||"seen"),p(e.note||""),y(""))},[e,t]),!t||!e)return null;const w=Re.find(f=>f.id===e.movieId),x=f=>{f.preventDefault();try{n(e.id,{sentiment:o,strength:Number(l),watchStatus:s,note:d.trim()}),r()}catch(m){y(m.message||"수정에 실패했습니다.")}},j=f=>f?f.startsWith("http")?f:`https://image.tmdb.org/t/p/w200${f}`:"/poster-placeholder.svg";return u.jsxs("div",{className:"modal-overlay",children:[u.jsxs("div",{className:"modal-content glass-panel",children:[u.jsx("button",{className:"btn-modal-close",onClick:r,children:"✕"}),u.jsx("h3",{className:"modal-title",children:"취향 기록 수정"}),w&&u.jsxs("div",{className:"modal-movie-info",children:[u.jsx("img",{src:j(w.posterPath),alt:w.titleKo,className:"modal-poster"}),u.jsxs("div",{className:"modal-movie-text",children:[u.jsx("h4",{children:w.titleKo}),u.jsxs("p",{children:[w.releaseYear," • ",w.primaryGenre]})]})]}),u.jsxs("form",{onSubmit:x,className:"modal-form",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"form-label",children:"나의 반응"}),u.jsxs("div",{className:"sentiment-selector",children:[u.jsx("button",{type:"button",className:`btn-sentiment like ${o==="like"?"active":""}`,onClick:()=>i("like"),children:"❤️ 내 취향"}),u.jsx("button",{type:"button",className:`btn-sentiment dislike ${o==="dislike"?"active":""}`,onClick:()=>i("dislike"),children:"🤷 나는 별로"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"form-label",children:"반응 강도"}),u.jsx("div",{className:"strength-selector",children:[1,2,3].map(f=>u.jsxs("button",{type:"button",className:`btn-strength ${l===f?"active":""}`,onClick:()=>a(f),children:[f===1&&"잔잔함",f===2&&"보통",f===3&&"강렬함"]},f))})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"form-label",children:"관람 상태"}),u.jsxs("select",{value:s,onChange:f=>c(f.target.value),className:"form-select",children:[u.jsx("option",{value:"seen",children:"이미 봄"}),u.jsx("option",{value:"wantToWatch",children:"보고 싶음"}),u.jsx("option",{value:"notNow",children:"관심 없음"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"form-label",children:"나만의 감상평/메모"}),u.jsx("textarea",{value:d,onChange:f=>p(f.target.value.slice(0,200)),className:"form-textarea",rows:3,placeholder:"감상을 수정해 보세요."}),u.jsxs("div",{className:"textarea-counter",children:[d.length,"/200자"]})]}),h&&u.jsxs("div",{className:"form-error",children:["⚠️ ",h]}),u.jsxs("div",{className:"modal-actions",children:[u.jsx("button",{type:"button",className:"btn-cancel",onClick:r,children:"취소"}),u.jsx("button",{type:"submit",className:"btn-submit",children:"변경사항 저장"})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          backdrop-filter: blur(8px);
          padding: 20px;
        }

        .modal-content {
          position: relative;
          width: 100%;
          max-width: 500px;
          padding: 28px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
        }

        .btn-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 1.1rem;
          cursor: pointer;
          padding: 4px;
        }

        .btn-modal-close:hover {
          color: var(--text-main);
        }

        .modal-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-top: 0;
          margin-bottom: 20px;
          color: var(--text-main);
        }

        .modal-movie-info {
          display: flex;
          align-items: center;
          padding: 12px;
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          margin-bottom: 24px;
        }

        .modal-poster {
          width: 44px;
          height: 60px;
          object-fit: cover;
          border-radius: 4px;
          margin-right: 14px;
        }

        .modal-movie-text h4 {
          margin: 0 0 4px 0;
          font-size: 1rem;
          color: var(--text-main);
        }

        .modal-movie-text p {
          margin: 0;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .sentiment-selector {
          display: flex;
          gap: 8px;
        }

        .btn-sentiment {
          flex: 1;
          padding: 10px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-default);
          background: rgba(255, 255, 255, 0.02);
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-sentiment.like.active {
          background: var(--accent-rose-muted);
          border-color: var(--accent-rose);
          color: var(--accent-rose);
        }

        .btn-sentiment.dislike.active {
          background: var(--accent-warm-muted);
          border-color: var(--accent-warm);
          color: var(--accent-warm);
        }

        .strength-selector {
          display: flex;
          gap: 6px;
        }

        .btn-strength {
          flex: 1;
          padding: 10px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-default);
          background: rgba(255, 255, 255, 0.02);
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-strength.active {
          background: var(--primary-muted);
          border-color: var(--primary-color);
          color: var(--primary-color);
        }

        .form-select {
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-default);
          color: var(--text-main);
          font-size: 0.85rem;
          outline: none;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .form-select:focus {
          border-color: var(--primary-color);
        }

        .form-textarea {
          padding: 12px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-default);
          color: var(--text-main);
          font-size: 0.85rem;
          resize: none;
          outline: none;
          transition: var(--transition-smooth);
        }

        .form-textarea:focus {
          border-color: var(--primary-color);
        }

        .textarea-counter {
          text-align: right;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 4px;
        }

        .form-error {
          padding: 10px 14px;
          background: rgba(229, 90, 111, 0.1);
          border: 1px solid var(--danger-color);
          border-radius: var(--radius-sm);
          color: var(--danger-color);
          font-size: 0.85rem;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 10px;
        }

        .btn-cancel {
          padding: 10px 20px;
          border-radius: var(--radius-md);
          background: transparent;
          border: 1px solid var(--border-default);
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.85rem;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-cancel:hover {
          color: var(--text-main);
          border-color: var(--text-secondary);
        }

        .btn-submit {
          padding: 10px 24px;
          border-radius: var(--radius-md);
          background: var(--primary-color);
          border: none;
          color: var(--bg-color);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-submit:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
      `})]})}function $h({isOpen:e,onClose:t,onConfirm:r}){return e?u.jsxs("div",{className:"dialog-overlay",children:[u.jsxs("div",{className:"dialog-content glass-panel",children:[u.jsx("h3",{className:"dialog-title",children:"⚠️ 취향 기록 삭제"}),u.jsxs("p",{className:"dialog-message",children:["해당 영화 반응 기록을 정말로 삭제하시겠습니까?",u.jsx("br",{}),"이 작업은 되돌릴 수 없으며, 당신의 영화 취향(MVTI) 산출 결과에 즉시 반영됩니다."]}),u.jsxs("div",{className:"dialog-actions",children:[u.jsx("button",{className:"btn-dialog-cancel",onClick:t,children:"취소"}),u.jsx("button",{className:"btn-dialog-confirm",onClick:r,children:"삭제하기"})]})]}),u.jsx("style",{jsx:!0,children:`
        .dialog-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2100;
          backdrop-filter: blur(6px);
          padding: 20px;
        }

        .dialog-content {
          width: 100%;
          max-width: 400px;
          padding: 24px;
          border: 1px solid rgba(229, 62, 109, 0.25);
          text-align: center;
        }

        .dialog-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #fc8181;
          margin-top: 0;
          margin-bottom: 14px;
        }

        .dialog-message {
          font-size: 0.9rem;
          color: #e2e8f0;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .dialog-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .btn-dialog-cancel {
          padding: 10px 20px;
          border-radius: 8px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #a0aec0;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-dialog-cancel:hover {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .btn-dialog-confirm {
          padding: 10px 20px;
          border-radius: 8px;
          background: #e53e3e;
          border: none;
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-dialog-confirm:hover {
          background: #c53030;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(229, 62, 109, 0.2);
        }
      `})]}):null}function Ah(){const e=Sr(),{reactions:t,addReaction:r,updateReaction:n,deleteReaction:o}=Jo(),[i,l]=v.useState(null),[a,s]=v.useState(!1),[c,d]=v.useState(null),[p,h]=v.useState(!1),y=t.map(g=>g.movieId),w=g=>{r(g)},x=g=>{l(g),s(!0)},j=(g,S)=>{n(g,S)},f=g=>{d(g),h(!0)},m=()=>{c&&(o(c),h(!1),d(null))};return u.jsxs("div",{className:"taste-page-container",children:[u.jsxs("div",{className:"taste-page-header",children:[u.jsx("h2",{className:"page-title",children:"내 취향 기록"}),u.jsx("p",{className:"page-description",children:"선호하거나 불호인 영화들을 상세하게 수정 및 추가할 수 있습니다. 여기에 축적되는 정보들이 최종 MVTI 및 추천 모델의 기반 데이터로 동작합니다."})]}),u.jsxs("div",{className:"taste-grid",children:[u.jsxs("div",{className:"taste-sidebar",children:[u.jsx(Mh,{onAddSuccess:w,existingMovieIds:y}),u.jsxs("div",{className:"analysis-navigation-card glass-panel",children:[u.jsx("h4",{children:"현재 기록 기반 진단하기"}),u.jsx("p",{children:"선호 3편, 불호 3편 이상 기록되면 보다 신뢰도 높은 MVTI 분석 결과를 받아보실 수 있습니다."}),u.jsxs("div",{className:"nav-stats",children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-num",children:t.filter(g=>g.sentiment==="like").length}),u.jsx("span",{className:"stat-label",children:"내 취향 (Like)"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-num",children:t.filter(g=>g.sentiment==="dislike").length}),u.jsx("span",{className:"stat-label",children:"나는 별로 (Dislike)"})]})]}),u.jsx("button",{className:"btn-primary btn-full",onClick:()=>e("/result"),children:"내 MVTI 결과 확인하러 가기 →"})]})]}),u.jsx("div",{className:"taste-main",children:u.jsx(Dh,{reactions:t,onEditClick:x,onDeleteClick:f})})]}),u.jsx(Oh,{reaction:i,isOpen:a,onClose:()=>{s(!1),l(null)},onSave:j}),u.jsx($h,{isOpen:p,onClose:()=>{h(!1),d(null)},onConfirm:m}),u.jsx("style",{jsx:!0,children:`
        .taste-page-container {
          padding: 20px 0;
          animation: fadeIn 0.4s ease;
        }

        .taste-page-header {
          margin-bottom: 30px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .page-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
          margin-top: 0;
          margin-bottom: 8px;
        }

        .page-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.6;
        }

        .taste-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }

        @media (min-width: 992px) {
          .taste-grid {
            grid-template-columns: 320px 1fr;
          }
        }

        .taste-sidebar {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .analysis-navigation-card {
          padding: 20px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
        }

        .analysis-navigation-card h4 {
          margin-top: 0;
          margin-bottom: 8px;
          color: var(--text-main);
          font-size: 0.95rem;
          font-weight: 700;
        }

        .analysis-navigation-card p {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .nav-stats {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }

        .stat-item {
          flex: 1;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 10px;
          text-align: center;
        }

        .stat-num {
          display: block;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--primary-color);
        }

        .stat-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-top: 2px;
          display: block;
          font-weight: 500;
        }

        .btn-primary {
          background: var(--primary-color);
          border: none;
          color: var(--bg-color);
          font-family: var(--font-body);
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-full {
          width: 100%;
          padding: 12px;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
        }

        .btn-primary:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `})]})}function Cd(e,t){const r=e.filter(b=>b.watchStatus==="seen"&&(b.sentiment==="like"||b.sentiment==="dislike")),n=r.length,o=r.filter(b=>b.sentiment==="like").length,i=r.filter(b=>b.sentiment==="dislike").length,l=new Set;r.forEach(b=>{const N=Re.find(T=>T.id===b.movieId);N&&N.primaryGenre&&l.add(N.primaryGenre)});const a=l.size;let s={fictionReality:50,highLowTempo:50,emotionIdea:50,openClosure:50},c=0;if(n>0){let b=0,N=0,T=0,I=0;r.forEach($=>{const J=Re.find(_=>_.id===$.movieId);if(!J)return;let ce=0;$.sentiment==="like"?ce=$.strength===3?1.5:$.strength===2?1:.7:$.sentiment==="dislike"&&(ce=$.strength===3?-1.5:$.strength===2?-1:-.7);const we=Math.abs(ce);c+=we;const q=ce>0,st=q?J.fictionReality:100-J.fictionReality,jr=q?J.highLowTempo:100-J.highLowTempo,L=q?J.emotionIdea:100-J.emotionIdea,P=q?J.openClosure:100-J.openClosure;b+=st*we,N+=jr*we,T+=L*we,I+=P*we}),c>0&&(s={fictionReality:b/c,highLowTempo:N/c,emotionIdea:T/c,openClosure:I/c})}let d=null,p=0;if(t&&t.length===4){const[b,N,T,I]=t.toUpperCase().split("");d={fictionReality:N==="N"?80:20,highLowTempo:b==="E"?70:30,emotionIdea:T==="F"?70:30,openClosure:I==="P"?70:30},n<=6?p=.15:n<=12?p=.05:n<20?p=.02:p=0}const h={fictionReality:Math.round((1-p)*s.fictionReality+p*((d==null?void 0:d.fictionReality)??50)),highLowTempo:Math.round((1-p)*s.highLowTempo+p*((d==null?void 0:d.highLowTempo)??50)),emotionIdea:Math.round((1-p)*s.emotionIdea+p*((d==null?void 0:d.emotionIdea)??50)),openClosure:Math.round((1-p)*s.openClosure+p*((d==null?void 0:d.openClosure)??50))},y=h.fictionReality>=50?"F":"R",w=h.highLowTempo>=50?"H":"L",x=h.emotionIdea>=50?"E":"I",j=h.openClosure>=50?"O":"C",f=`M-${y}${w}${x}${j}`,m=Math.min(n/12,1)*50,g=Math.min(a/4,1)*30,C=(Math.abs(h.fictionReality-50)+Math.abs(h.highLowTempo-50)+Math.abs(h.emotionIdea-50)+Math.abs(h.openClosure-50))/4/50*20,k=Math.min(Math.max(Math.round(m+g+C),20),100);return{mvtiCode:f,scores:h,confidence:k,stats:{totalCount:n,likeCount:o,dislikeCount:i,genreCount:a}}}const Uh={"M-FHEO":{title:"폭발형 몽상가",description:"화려한 가상 세계관에 강렬한 감정선이 가미되고, 예측 불가능한 여운을 남기는 영화를 가장 사랑합니다.",keywords:["판타지·SF","높은 몰입도","감정적 여운","열린 결말"],recommendationTip:"스케일이 크면서도 철학적인 질문이나 감성적인 터치가 짙은 영화를 골라보세요."},"M-FHEC":{title:"영웅서사 몰입가",description:"환상적인 모험과 빠른 속도의 전개 속에서 정의가 승리하거나 명확한 결말을 맺는 감정적 카타르시스를 즐깁니다.",keywords:["모험·블록버스터","빠른 전개","영웅적 극복","확실한 권선징악"],recommendationTip:"전개가 빠르고 시원한 히어로물이나 판타지 액션 대작이 잘 맞습니다."},"M-FHIO":{title:"우주 퍼즐러",description:"고도의 자극을 주는 SF적 상상력과 난해하고 정교한 지적 개념이 버무려져, 수많은 해석의 여지를 남기는 반전 영화를 선호합니다.",keywords:["SF·스릴러","지적 유희","복잡한 구조","열린 해석"],recommendationTip:"보고 나서도 끊임없이 해석을 찾아보게 만드는 미스터리 사이파이 장르를 추천합니다."},"M-FHIC":{title:"세계관 전략가",description:"치밀하게 짜인 설정과 세계관 속에서 빠른 속도로 진행되는 논리적인 사건 해결과 인과관계를 중시합니다.",keywords:["정교한 설정","빠른 템포","지적 논리","완결된 구조"],recommendationTip:"반전이 명확하게 풀리는 웰메이드 케이퍼 무비나 미스터리 추리극이 어울립니다."},"M-FLEO":{title:"몽환 감성가",description:"느릿하고 서정적인 템포 속에서 펼쳐지는 아름다운 비현실 세계와 깊은 내면의 감정을 섬세하게 느끼며 긴 여운에 젖습니다.",keywords:["예술 영화","느린 호흡","시각적 서정성","감정적 잔향"],recommendationTip:"독창적인 미장센을 보여주는 예술적 판타지나 잔잔한 로맨틱 판타지를 만나보세요."},"M-FLEC":{title:"따뜻한 판타지스트",description:"편안하고 따뜻한 가상의 세계 속에서 인물 간의 관계와 사랑을 조명하며, 안정감 있고 해피엔딩으로 마무리되는 이야기를 선호합니다.",keywords:["가족·애니메이션","따뜻한 감성","아름다운 관계","해피엔딩"],recommendationTip:"디즈니나 지브리 스타일의 가족 애니메이션, 혹은 마음이 힐링되는 판타지 드라마를 권장합니다."},"M-FLIO":{title:"사유형 탐험가",description:"차분하고 깊이 있는 호흡으로 철학적인 가상 설정을 탐구하며, 정답이 없는 열린 결말을 통해 스크린 너머의 의미를 성찰합니다.",keywords:["철학적 SF","사유와 개념","잔잔한 전개","깊은 여운"],recommendationTip:"인간의 실존을 묻는 정적인 우주 영화나 디스토피아를 다룬 독립 영화가 제격입니다."},"M-FLIC":{title:"세계관 설계자",description:"치밀하게 고안된 가상 설정과 세계관을 바탕으로 전개되되, 감정에 매몰되지 않는 차분한 논리와 완결성을 갖춘 서사를 선호합니다.",keywords:["정밀한 플롯","사유와 이성","차분한 전개","정돈된 결말"],recommendationTip:"과학적 이론을 충실히 담아낸 다큐멘터리식 우주 영화나 깔끔하게 완결되는 SF 미스터리를 골라보세요."},"M-RHEO":{title:"감정 롤러코스터",description:"현실적인 삶과 관계 속에서 발생하는 격렬한 갈등과 인물의 깊은 심리를 쫓아가며, 충격과 깊은 아픔, 감동의 여운을 동시에 경험합니다.",keywords:["강렬한 드라마","현실적 아픔","폭발적 감정","예술적 여운"],recommendationTip:"인간 본성을 깊이 있게 파고드는 묵직한 사실주의 드라마나 비극적 로맨스를 추천합니다."},"M-RHEC":{title:"대중서사 해결가",description:"현실 속에서 벌어지는 역동적인 갈등과 빠른 속도의 사건 해결을 추구하며, 관계의 회복과 확실하게 매듭지어지는 결말을 선호합니다.",keywords:["대중 드라마","빠른 서사","갈등 극복","명확한 결말"],recommendationTip:"대중적으로 흥행한 웰메이드 재난 영화, 가족 드라마, 혹은 감동적인 실화 바탕의 영화가 좋습니다."},"M-RHIO":{title:"미스터리 추적자",description:"현실을 배경으로 벌어지는 범죄, 사회적 부조리, 인간의 어두운 이면을 서스펜스 넘치는 속도로 추적하고 해석하는 것을 즐깁니다.",keywords:["스릴러·범죄","긴장감","현실적 문제","반전과 사유"],recommendationTip:"숨이 막힐 듯한 긴장감을 주는 리얼리티 스릴러나 형사 수사물을 권장합니다."},"M-RHIC":{title:"현실 전략 실행가",description:"사실에 기반한 사건들을 중심에 두고 속도감 있게 원인을 밝히고 해결해 나가는, 이성적이고 군더더기 없는 극을 좋아합니다.",keywords:["액션·범죄","빠른 판단","사실적 묘사","명확한 해결"],recommendationTip:"실제 실화를 치밀하게 추적하는 고발형 범죄 영화나 현실적인 하드보일드 액션물이 어울립니다."},"M-RLEO":{title:"생활 여운 관찰자",description:"우리의 일상과 평범한 인간관계의 서정적인 면모를 아주 느린 호흡으로 가만히 바라보고 마음속 깊이 은은한 감정의 잔향을 채웁니다.",keywords:["잔잔한 일상","서정적 연출","감정적 공감","은은한 잔향"],recommendationTip:"일상의 아름다움을 시적으로 담아낸 잔잔한 멜로, 혹은 잔잔한 퀴어/성장 영화가 잘 어울립니다."},"M-RLEC":{title:"힐링 현실주의자",description:"소박하고 현실적인 삶의 공간 속에서 인물들이 겪는 소소한 갈등과 위로, 해피엔딩으로 이어지는 안정적이고 따뜻한 관계의 회복을 좋아합니다.",keywords:["힐링·드라마","소박한 삶","따뜻한 위로","안정적 관계"],recommendationTip:"카모메 식당이나 리틀 포레스트처럼 보고 나면 마음이 차분해지고 따뜻해지는 영화를 추천합니다."},"M-RLIO":{title:"사회 사유 탐구자",description:"현실의 날카로운 문제나 부조리를 무겁고 담담하게 묘사하는 영화를 통해 사색하며, 쉽게 답이 내려지지 않는 묵직한 고민거리를 품어 안습니다.",keywords:["독립 영화","사회 고발","사유적 주제","묵직한 잔향"],recommendationTip:"사회적 약자의 시선을 담은 예술 드라마나 깊은 질문을 던지는 독립 장편 영화를 추천합니다."},"M-RLIC":{title:"사실서사 분석가",description:"실제 사건이나 인물의 발자취를 객관적이고 절제된 톤으로 그려내어, 논리적인 흐름과 명확한 사실관계를 전달해 주는 극을 선호합니다.",keywords:["다큐·역사","객관적 시선","철저한 고증","명확한 결말"],recommendationTip:"정교하게 제작된 팩추얼 다큐멘터리나 실화 바탕의 역사 정통 정치극이 잘 맞습니다."}};function Yh({scores:e}){const{fictionReality:t=50,highLowTempo:r=50,emotionIdea:n=50,openClosure:o=50}=e,i=[{key:"FR",label:"현실 반영도 (F-R 축)",leftLabel:"Reality (현실주의)",rightLabel:"Fiction (가상·세계관)",value:t},{key:"HL",label:"자극 전개도 (H-L 축)",leftLabel:"Low Tempo (정적 호흡)",rightLabel:"High Energy (고자극)",value:r},{key:"EI",label:"감정·개념 중시도 (E-I 축)",leftLabel:"Idea (이성·사유)",rightLabel:"Emotion (감정·관계)",value:n},{key:"OC",label:"결말 구조도 (O-C 축)",leftLabel:"Closure (완결 구조)",rightLabel:"Open (여운·열린결말)",value:o}];return u.jsxs("div",{className:"axis-chart-container",children:[u.jsx("h3",{className:"chart-title",children:"4축 성향 분석"}),u.jsx("div",{className:"axes-list",children:i.map(l=>{const a=Math.abs(l.value-50),s=l.value>=50;return u.jsxs("div",{className:"axis-row",children:[u.jsxs("div",{className:"axis-header",children:[u.jsx("span",{className:"axis-title",children:l.label}),u.jsx("span",{className:"axis-score-val",children:s?`${l.rightLabel} ${l.value}%`:`${l.leftLabel} ${100-l.value}%`})]}),u.jsxs("div",{className:"gauge-bar-wrapper",children:[u.jsx("div",{className:`label-side left ${s?"":"active"}`,children:l.leftLabel.split(" ")[0]}),u.jsxs("div",{className:"gauge-track",children:[u.jsx("div",{className:"gauge-center-line"}),u.jsx("div",{className:`gauge-fill ${s?"fill-right":"fill-left"}`,style:{width:`${a*2}%`,left:s?"50%":"auto",right:s?"auto":"50%"}})]}),u.jsx("div",{className:`label-side right ${s?"active":""}`,children:l.rightLabel.split(" ")[0]})]})]},l.key)})}),u.jsx("style",{jsx:!0,children:`
        .axis-chart-container {
          margin-top: 30px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
        }

        .chart-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
          margin-top: 0;
          margin-bottom: 24px;
          border-left: 2px solid var(--primary-color);
          padding-left: 10px;
        }

        .axes-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .axis-row {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .axis-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .axis-title {
          color: #a0aec0;
        }

        .axis-score-val {
          color: var(--primary-color);
        }

        .gauge-bar-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .label-side {
          font-size: 0.75rem;
          color: #4a5568;
          font-weight: 700;
          min-width: 55px;
          transition: color 0.3s ease;
        }

        .label-side.left {
          text-align: right;
        }

        .label-side.active {
          color: #fff;
        }

        .gauge-track {
          position: relative;
          flex: 1;
          height: 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .gauge-center-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255, 255, 255, 0.2);
          z-index: 2;
        }

        .gauge-fill {
          position: absolute;
          top: 0;
          bottom: 0;
          border-radius: 4px;
          z-index: 1;
          transition: width 0.8s cubic-bezier(0.1, 0.8, 0.2, 1);
        }

        .gauge-fill.fill-right {
          background: var(--primary-color);
        }

        .gauge-fill.fill-left {
          background: var(--accent-warm);
        }
      `})]})}const Bh={INFP:"평소 사회적 의무와 관계 속에서 자신을 억누르던 당신이, 영화를 볼 때만큼은 내면의 깊은 이상주의와 정서적 카타르시스, 도덕적 진실을 탐구하며 영혼을 치유하고 있음을 의미합니다.",INFJ:"일상의 소음에서 벗어나 스크린을 마주하는 순간, 인간 심리의 복잡한 갈등과 한계, 그리고 삶에 대한 통찰력 있는 서사를 통해 고독하지만 깊고 실존적인 질문을 던지고 있음을 의미합니다.",INTJ:"감정적 과잉과 뻔한 신파에 피로를 느끼던 거대한 지성이, 복잡하고 정교한 물리 법칙이나 정밀하게 설계된 구조적 세계관(Sci-Fi) 속에서 짜릿한 지적 유희를 즐기고 있음을 의미합니다.",INTP:"통념과 규칙에 얽매인 현실의 현실성을 상쾌하게 배반하고, 다중 우주나 양자역학처럼 난해하고 가설적인 개념들의 경계를 해독하며 지적 카타르시스를 만끽하고 있음을 의미합니다.",ENFP:"늘 주변에 밝고 유쾌한 에너지를 분산하느라 지쳐있던 당신이, 영화 속 다층적이고 빠른 호흡의 서사 속에서 마음을 울리는 묵직한 메시지를 찾아 정서적 위안을 얻고 있음을 의미합니다.",ENFJ:"세상의 갈등에서 잠시 물러나 인류애와 감정적 연대, 타인의 아픔을 포용하는 영웅적 극복 과정을 지켜보며, 내면의 이타적 가치관과 영감을 다시금 충전하고 있음을 의미합니다.",ENTP:"단조롭고 정형화된 일상의 지루함을 부수고, 상식과 통념을 뒤흔드는 지적 반전, 복잡한 퍼즐 구조와 기발한 재치가 난무하는 연출 속에서 두뇌의 순수한 도파민을 분비시키고 있음을 의미합니다.",ENTJ:"거시적 위기와 구조적 붕괴 속에서 대담한 리더가 결단을 내리고 끝내 투쟁해 승리하는 서사를 보며, 당신 내면의 야망과 권력 구조에 대한 통제 욕구를 대리 만족하고 있음을 의미합니다.",ISFP:"말로 다 표현하지 못했던 당신 내부의 서정적 감수성이, 뛰어난 시각적 미학과 음악적 요소가 유기적으로 얽힌 정서적 콘텐츠를 통해 감각적으로 폭발하고 있음을 의미합니다.",ISFJ:"바고 자극적인 현대 미디어 환경 속에서, 일상의 작고 소박한 가치를 재조명하고 따뜻한 유대감과 헌신을 다룬 전개를 통해 내적인 안도감과 심리적 평화를 되찾으려 함을 의미합니다.",ISTP:"감정적 소모가 심한 인간관계를 차단하고, 긴박하게 조여오는 스릴과 위기 상황 속에서 발휘되는 정교한 서바이벌 장치 및 물리적 반사 신경에 고도로 몰입하여 해방감을 느낍니다.",ISTJ:"허무맹랑한 허구에 피로를 느끼며, 철저한 고증과 사실적 서사, 실제 존재하는 사회 정의 실현 및 규율의 엄격함을 다룬 현실 기반 극을 보며 뇌 내의 질서정연한 안정감을 획득함을 의미합니다.",ESFP:"복잡한 사유와 골치 아픈 은유의 늪에서 벗어나, 시각적 역동성과 화려함, 유머러스함이 가득한 고에너지 상업 영화를 통해 지루할 틈 없이 직관적인 감각 자극에 반응하고 있음을 의미합니다.",ESFJ:"권선징악의 플롯 속에서 동료들과 힘을 합쳐 거대한 도전을 따뜻하게 극복하는 대중적 서사를 선택함으로써, 사람 중심의 정서적 연대감과 대리 만족을 극대화하고 있음을 의미합니다.",ESTP:"지체 없는 스피디한 전개와 카메라 워킹, 몸을 사리지 않는 과감한 물리적 액션 시퀀스를 온몸으로 받아들이며, 원초적이고 타격감 있는 카타르시스를 누리고 있음을 의미합니다.",ESTJ:"혼란스럽고 정돈되지 않은 시퀀스 속에서 강력한 인물이 중심을 잡고 시스템을 개혁하여 끝내 질서를 회복해 내는 정형화된 플롯을 통해 짜릿한 효율성을 경험하고 있음을 의미합니다."};function Gh({mbti:e,mvtiCode:t}){if(!e)return null;const r=t.replace("M-","").toUpperCase(),n=e.toUpperCase(),o=()=>{let d=0;const p=[],h=r[0],y=n[1],w=h==="F"&&y==="N"||h==="R"&&y==="S";w&&d++,p.push({axisName:"현실/가상관 (N/S - F/R)",status:w?"일치":"보완",desc:w?`${y==="N"?"상상과 세계관(N)":"실제적이고 현실적인(S)"} 성향이 영화 소비 취향(F/R)에서도 일관되게 드러납니다.`:`현실에선 ${y==="N"?"이상(N)":"현실(S)"}을 지향하지만, 영화를 볼 때는 ${h==="F"?"가상(F)":"현실(R)"}을 즐기는 보완 관계입니다.`});const x=r[1],j=n[0],f=x==="H"&&j==="E"||x==="L"&&j==="I";f&&d++,p.push({axisName:"에너지/자극도 (E/I - H/L)",status:f?"일치":"보완",desc:f?`${j==="E"?"역동적 에너지(E)":"차분한 성향(I)"}이 영화 자극 템포(H/L)에서도 일치하게 적용됩니다.`:`현실의 ${j==="E"?"외향성(E)":"내향성(I)"}과 달리, 영화에서는 ${x==="H"?"고자극(H)":"저자극(L)"}을 통해 일상의 에너지 균형을 맞춥니다.`});const m=r[2],g=n[2],S=m==="E"&&g==="F"||m==="I"&&g==="T";S&&d++,p.push({axisName:"의사결정/중시도 (T/F - E/I)",status:S?"일치":"보완",desc:S?`${g==="F"?"감정적 연대(F)":"이성적 논리(T)"} 기제가 영화 속 인물관계 및 장르 해석(E/I)에도 고스란히 반영됩니다.`:`현실에서는 ${g==="F"?"따뜻한 감정(F)":"논리적 분석(T)"}을 지향하지만, 영화 관람 시에는 ${m==="E"?"정서적 카타르시스(E)":"지적 추리(I)"}를 갈구하는 경향이 있습니다.`});const C=r[3],k=n[3],b=C==="O"&&k==="P"||C==="C"&&k==="J";return b&&d++,p.push({axisName:"생활양식/완결성 (J/P - O/C)",status:b?"일치":"보완",desc:b?`${k==="J"?"구조적 완성(J)":"자율적 여백(P)"}을 지향하는 모습이 영화의 결말 선호도(O/C)에서도 잘 대변됩니다.`:`생활에선 ${k==="J"?"계획성(J)":"유연성(P)"}을 지키지만, 영화의 끝에선 ${C==="O"?"열린 여운(O)":"깔끔한 결말(C)"}을 원해 색다른 해방감을 느낍니다.`}),{matchCount:d,details:p}},{matchCount:i,details:l}=o(),a=i*25,s=()=>i===4?"영혼의 동기화 100% (완전 일치)":i===3?"높은 심리적 일관성 (75% 일치)":i===2?"취향과 현실의 유기적 균형 (50% 보완)":"반전 매력의 취향 분출구 (25% 이하 일치)",c=Bh[n]||"간극 해석 데이터를 불러올 수 없습니다.";return u.jsxs("div",{className:"comparison-container glass-panel",children:[u.jsxs("div",{className:"comparison-header",children:[u.jsx("h3",{className:"comparison-title",children:"MBTI ↔ MVTI 간극 분석"}),u.jsxs("div",{className:"sync-score-badge",children:[u.jsx("span",{className:"sync-label",children:"취향 싱크로율"}),u.jsxs("span",{className:"sync-value",children:[a,"%"]})]})]}),u.jsx("p",{className:"sync-status-text",children:s()}),u.jsx("div",{className:"sync-bar-track",children:u.jsx("div",{className:"sync-bar-fill",style:{width:`${a}%`}})}),u.jsxs("div",{className:"interpretation-box",children:[u.jsx("div",{className:"quote-mark",children:"“"}),u.jsxs("p",{className:"interpretation-text",children:["나의 오리지널 성격 ",u.jsx("strong",{children:n}),"와 미디어 취향 ",u.jsx("strong",{children:t}),"의 조화는, ",c]}),u.jsx("div",{className:"quote-mark text-right",children:"”"})]}),u.jsxs("div",{className:"axis-match-list",children:[u.jsx("h4",{children:"성향별 세부 대조 결과"}),l.map((d,p)=>u.jsxs("div",{className:"match-item",children:[u.jsxs("div",{className:"match-item-header",children:[u.jsx("span",{className:"item-axis-name",children:d.axisName}),u.jsx("span",{className:`item-match-badge ${d.status==="일치"?"match":"complement"}`,children:d.status})]}),u.jsx("p",{className:"item-desc",children:d.desc})]},p))]}),u.jsx("style",{jsx:!0,children:`
        .comparison-container {
          margin-top: 30px;
          padding: 24px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
        }

        .comparison-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .comparison-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-main);
          margin: 0;
        }

        .sync-score-badge {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .sync-label {
          font-size: 0.65rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .sync-value {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--primary-color);
        }

        .sync-status-text {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-top: 0;
          margin-bottom: 12px;
        }

        .sync-bar-track {
          width: 100%;
          height: 4px;
          background: var(--border-subtle);
          border-radius: 2px;
          margin-bottom: 24px;
          overflow: hidden;
        }

        .sync-bar-fill {
          height: 100%;
          background: var(--primary-color);
          border-radius: 2px;
          transition: width 1s ease-in-out;
        }

        .interpretation-box {
          position: relative;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 16px 20px;
          margin-bottom: 24px;
        }

        .quote-mark {
          font-family: Georgia, serif;
          font-size: 2.2rem;
          color: var(--text-muted);
          line-height: 0;
          height: 10px;
        }

        .text-right {
          text-align: right;
          margin-top: 10px;
        }

        .interpretation-text {
          margin: 0;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          text-align: center;
        }

        .interpretation-text strong {
          color: var(--primary-color);
          font-weight: 700;
        }

        .axis-match-list h4 {
          margin-top: 0;
          margin-bottom: 16px;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .match-item {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 12px 14px;
          margin-bottom: 12px;
        }

        .match-item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }

        .item-axis-name {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .item-match-badge {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: var(--radius-sm);
        }

        .item-match-badge.match {
          background: var(--primary-muted);
          color: var(--primary-color);
          border: 1px solid rgba(93, 228, 216, 0.2);
        }

        .item-match-badge.complement {
          background: var(--accent-warm-muted);
          color: var(--accent-warm);
          border: 1px solid rgba(232, 168, 124, 0.2);
        }

        .item-desc {
          margin: 0;
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
      `})]})}function Hh(){const e=Sr(),{reactions:t,clearAllReactions:r}=Jo(),[n,o]=Qo("mvti_user_profile_v1",{mbti:null,onboardingCompleted:!1}),i=v.useMemo(()=>Cd(t,n.mbti),[t,n.mbti]),{mvtiCode:l,scores:a,confidence:s,stats:c}=i,d=c.totalCount>=6,p=Uh[l],h=()=>{window.confirm("모든 영화 반응 기록과 프로필이 삭제됩니다. 정말 초기화하시겠습니까?")&&(r(),o({mbti:null,onboardingCompleted:!1}),e("/"))};return d?u.jsxs("div",{className:"result-page",children:[u.jsx("header",{className:"result-header",children:u.jsxs("div",{children:[u.jsx("p",{className:"result-header__label",children:"MVTI Analysis"}),u.jsx("h2",{className:"result-header__title",children:"나의 영화 취향 진단서"})]})}),u.jsxs("section",{className:"type-card",children:[u.jsx("span",{className:"type-card__prefix",children:"MOVIE TASTE CODE"}),u.jsx("h1",{className:"type-card__code",children:l}),u.jsx("h2",{className:"type-card__name",children:(p==null?void 0:p.title)||"영화 탐구자"}),u.jsx("p",{className:"type-card__desc",children:p==null?void 0:p.description}),u.jsx("div",{className:"type-card__tags",children:p==null?void 0:p.keywords.map((y,w)=>u.jsxs("span",{className:"type-tag",children:["#",y]},w))}),(p==null?void 0:p.recommendationTip)&&u.jsxs("div",{className:"type-card__tip",children:[u.jsx("span",{className:"tip-label",children:"취향 가이드"}),u.jsx("p",{children:p.recommendationTip})]})]}),u.jsxs("section",{className:"conf-section",children:[u.jsxs("div",{className:"conf-header",children:[u.jsx("h3",{className:"conf-title",children:"분석 신뢰도"}),u.jsxs("span",{className:"conf-pct",children:[s,"%"]})]}),u.jsx("div",{className:"conf-bar",children:u.jsx("div",{className:"conf-fill",style:{width:`${s}%`}})}),u.jsxs("div",{className:"conf-grid",children:[u.jsxs("div",{className:"conf-item",children:[u.jsx("span",{className:"conf-val",children:c.totalCount}),u.jsx("span",{className:"conf-label",children:"평가 수"})]}),u.jsxs("div",{className:"conf-item",children:[u.jsx("span",{className:"conf-val",children:c.likeCount}),u.jsx("span",{className:"conf-label",children:"내 취향"})]}),u.jsxs("div",{className:"conf-item",children:[u.jsx("span",{className:"conf-val",children:c.dislikeCount}),u.jsx("span",{className:"conf-label",children:"별로"})]}),u.jsxs("div",{className:"conf-item",children:[u.jsx("span",{className:"conf-val",children:c.genreCount}),u.jsx("span",{className:"conf-label",children:"장르 수"})]})]}),u.jsx("p",{className:"conf-note",children:s>=80?"충분한 데이터로 안정적인 진단 결과를 보여줍니다.":s>=50?"선호/불호 영화를 12편 이상 등록하면 더욱 신뢰도가 높아집니다.":"다양한 장르의 선호/비선호 영화를 골고루 추가해 보세요."})]}),u.jsx(Yh,{scores:a}),n.mbti&&u.jsx(Gh,{mbti:n.mbti,mvtiCode:l}),u.jsxs("section",{className:"result-actions",children:[u.jsx("button",{className:"btn-primary",onClick:()=>e("/dashboard"),children:"오늘의 추천 보기 →"}),u.jsx("button",{className:"btn-secondary",onClick:()=>e("/my-taste"),children:"취향 기록 관리"}),u.jsx("button",{className:"btn-danger",onClick:h,children:"데이터 초기화"})]}),u.jsx("style",{jsx:!0,children:`
        .result-page {
          padding: 20px 0 60px 0;
          animation: fadeIn 0.3s ease;
        }

        /* 헤더 */
        .result-header {
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-subtle);
        }
        .result-header__label {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .result-header__title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
        }

        /* 유형 카드 */
        .type-card {
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 36px 28px;
          text-align: center;
          margin-bottom: 20px;
        }
        .type-card__prefix {
          font-size: 0.65rem;
          color: var(--text-muted);
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .type-card__code {
          font-size: 3rem;
          margin: 12px 0 6px 0;
          font-weight: 850;
          color: var(--primary-color);
          letter-spacing: 0.06em;
        }
        .type-card__name {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 20px;
        }
        .type-card__desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 20px;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
        }
        .type-card__tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        .type-tag {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--primary-color);
          background: var(--primary-muted);
          padding: 5px 12px;
          border-radius: 20px;
        }
        .type-card__tip {
          text-align: left;
          padding: 14px 16px;
          background: rgba(255,255,255,0.02);
          border-left: 2px solid var(--accent-warm);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          max-width: 520px;
          margin: 0 auto;
        }
        .tip-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--accent-warm);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 4px;
        }
        .type-card__tip p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 0;
        }

        /* 신뢰도 섹션 */
        .conf-section {
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 22px 22px;
          margin-bottom: 20px;
        }
        .conf-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .conf-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
          margin: 0;
        }
        .conf-pct {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--primary-color);
        }
        .conf-bar {
          width: 100%;
          height: 4px;
          background: var(--border-subtle);
          border-radius: 2px;
          margin-bottom: 20px;
          overflow: hidden;
        }
        .conf-fill {
          height: 100%;
          background: var(--primary-color);
          border-radius: 2px;
          transition: width 1s ease-out;
        }
        .conf-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-bottom: 14px;
        }
        @media (max-width: 480px) {
          .conf-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .conf-item {
          text-align: center;
          padding: 10px 0;
          background: rgba(255,255,255,0.02);
          border-radius: var(--radius-sm);
        }
        .conf-val {
          display: block;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-main);
        }
        .conf-label {
          display: block;
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-top: 2px;
        }
        .conf-note {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin: 0;
        }

        /* 하단 액션 */
        .result-actions {
          margin-top: 28px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .btn-danger {
          background: transparent;
          border: 1px solid rgba(229, 90, 111, 0.25);
          color: var(--danger-color);
          padding: 10px 20px;
          border-radius: var(--radius-md);
          cursor: pointer;
          font-weight: 500;
          font-size: 0.85rem;
          transition: var(--transition-smooth);
        }
        .btn-danger:hover {
          background: rgba(229, 90, 111, 0.08);
          border-color: var(--danger-color);
        }
      `})]}):u.jsxs("div",{className:"result-page",children:[u.jsxs("div",{className:"result-empty",children:[u.jsx("div",{className:"result-empty__icon",children:"◇"}),u.jsx("h2",{className:"result-empty__title",children:"분석에 필요한 기록이 부족합니다"}),u.jsxs("p",{className:"result-empty__desc",children:["선호/비선호 영화를 합하여 ",u.jsx("strong",{children:"6편 이상"})," 기록하시면",u.jsx("br",{}),"정밀 취향 분석을 진행할 수 있습니다."]}),u.jsxs("div",{className:"result-empty__progress",children:[u.jsx("div",{className:"result-empty__bar",children:u.jsx("div",{className:"result-empty__fill",style:{width:`${Math.min(c.totalCount/6*100,100)}%`}})}),u.jsxs("span",{className:"result-empty__count",children:[c.totalCount," / 6"]})]}),u.jsx("button",{className:"btn-primary",onClick:()=>e("/my-taste"),children:"취향 기록하러 가기"})]}),u.jsx("style",{jsx:!0,children:`
          .result-page { padding: 20px 0; animation: fadeIn 0.3s ease; }
          .result-empty {
            max-width: 420px;
            margin: 80px auto;
            text-align: center;
          }
          .result-empty__icon {
            font-size: 2rem;
            color: var(--accent-warm);
            margin-bottom: 20px;
            opacity: 0.6;
          }
          .result-empty__title {
            font-size: 1.3rem;
            color: var(--text-main);
            margin-bottom: 12px;
          }
          .result-empty__desc {
            font-size: 0.9rem;
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 28px;
          }
          .result-empty__desc strong { color: var(--text-main); }
          .result-empty__progress {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 28px;
          }
          .result-empty__bar {
            flex: 1;
            height: 4px;
            background: var(--border-subtle);
            border-radius: 2px;
            overflow: hidden;
          }
          .result-empty__fill {
            height: 100%;
            background: var(--primary-color);
            border-radius: 2px;
            transition: width 0.6s ease;
          }
          .result-empty__count {
            font-size: 0.8rem;
            color: var(--text-muted);
            font-weight: 500;
            white-space: nowrap;
          }
        `})]})}function Wh(e){let t=1779033703^e.length;for(let r=0;r<e.length;r++)t=Math.imul(t^e.charCodeAt(r),3432918353),t=t<<13|t>>>19;return t>>>0}function Ti(e,t){return t.map(r=>{const n=e.fictionReality-r.fictionReality,o=e.highLowTempo-r.highLowTempo,i=e.emotionIdea-r.emotionIdea,l=e.openClosure-r.openClosure,a=Math.sqrt(n*n+o*o+i*i+l*l),s=Math.round(Math.max(100-a/200*100,0));return{...r,distance:a,matchPercentage:s}}).sort((r,n)=>r.distance-n.distance)}function Vh(e,t=[],r){const n=Wh(r),o=Re.filter(b=>!t.includes(b.id));if(o.length<3)return{bestMatch:{movie:Re[0]||null,reason:"안정적인 정밀 매칭 (후보 부족으로 인한 전체 풀 매칭)"},expansion:{movie:Re[1]||null,reason:"새로운 장르적 호기심 제안"},serendipity:{movie:Re[2]||null,reason:"일상에서 탈피하는 의외의 조우"}};const i=Ti(e,o),l=i.slice(0,Math.min(5,i.length)),a=n%l.length,s=l[a],c=[{key:"fictionReality",val:Math.abs(e.fictionReality-50)},{key:"highLowTempo",val:Math.abs(e.highLowTempo-50)},{key:"emotionIdea",val:Math.abs(e.emotionIdea-50)},{key:"openClosure",val:Math.abs(e.openClosure-50)}];c.sort((b,N)=>b.val-N.val);const d=c[0].key,p={...e};p[d]=100-e[d];const h=o.filter(b=>b.id!==s.id),y=Ti(p,h),w=y.slice(0,Math.min(5,y.length)),x=(n+7)%w.length,j=w[x],f={fictionReality:100-e.fictionReality,highLowTempo:100-e.highLowTempo,emotionIdea:100-e.emotionIdea,openClosure:100-e.openClosure},m=o.filter(b=>b.id!==s.id&&b.id!==j.id),g=Ti(f,m),S=g.slice(0,Math.min(5,g.length)),C=(n+13)%S.length,k=S[C];return{bestMatch:{movie:s,reason:`당신의 영화 취향성향에 ${s.matchPercentage}% 일치합니다. 선호 장르와 정밀 매칭되는 시그니처 추천입니다.`},expansion:{movie:j,reason:`가장 유동적인 성향 축(${d==="fictionReality"?"현실/가상":d==="highLowTempo"?"자극/속도":d==="emotionIdea"?"감정/이성":"완결/여운"})을 한 단계 비틀어 새로운 지평을 넓히는 확장 제안입니다.`},serendipity:{movie:k,reason:"당신의 기존 성향과 대조되는 반전 취향입니다. 가끔은 평소 보지 않던 시선에서 뜻밖의 카타르시스를 발견해 보세요."}}}function Qh(){const e=Sr(),{reactions:t,addReaction:r}=Jo(),[n]=Qo("mvti_user_profile_v1",{mbti:null,onboardingCompleted:!1}),[o,i]=v.useState(""),[l,a]=v.useState({}),s=v.useMemo(()=>Cd(t,n.mbti),[t,n.mbti]),{scores:c,stats:d}=s,p=d.totalCount>=6,h=v.useMemo(()=>new Date().toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit"}).replace(/\. /g,"-").replace(/\./g,""),[]),y=v.useMemo(()=>t.map(k=>k.movieId),[t]),w=v.useMemo(()=>p?Vh(c,y,h):null,[p,c,y,h]),x=(k,b,N,T)=>{try{r({movieId:k,sentiment:b,strength:2,watchStatus:N,note:`대시보드 추천에서 반응 등록 (${new Date().toLocaleDateString()})`}),a(I=>({...I,[k]:b})),j(`"${T}" — 반응이 저장되었습니다`)}catch(I){j(`저장 실패: ${I.message}`)}},j=k=>{i(k),setTimeout(()=>i(""),3500)},f=k=>k?k.startsWith("http")?k:`https://image.tmdb.org/t/p/w300${k}`:"/poster-placeholder.svg";if(!p)return u.jsxs("div",{className:"dash-page",children:[u.jsxs("div",{className:"dash-empty",children:[u.jsx("div",{className:"dash-empty__icon",children:"✦"}),u.jsx("h2",{className:"dash-empty__title",children:"추천을 준비하고 있습니다"}),u.jsxs("p",{className:"dash-empty__desc",children:["영화 반응이 ",u.jsx("strong",{children:"6편"})," 이상 기록되면",u.jsx("br",{}),"매일 새로운 큐레이션이 열립니다."]}),u.jsxs("div",{className:"dash-empty__progress",children:[u.jsx("div",{className:"dash-empty__bar",children:u.jsx("div",{className:"dash-empty__fill",style:{width:`${Math.min(d.totalCount/6*100,100)}%`}})}),u.jsxs("span",{className:"dash-empty__count",children:[d.totalCount," / 6"]})]}),u.jsx("button",{className:"btn-primary",onClick:()=>e("/my-taste"),children:"취향 기록 시작하기"})]}),u.jsx("style",{jsx:!0,children:`
          .dash-page { padding: 20px 0; animation: fadeIn 0.3s ease; }
          .dash-empty {
            max-width: 420px;
            margin: 80px auto;
            text-align: center;
          }
          .dash-empty__icon {
            font-size: 2.5rem;
            color: var(--primary-color);
            margin-bottom: 20px;
            opacity: 0.7;
          }
          .dash-empty__title {
            font-size: 1.35rem;
            color: var(--text-main);
            margin-bottom: 12px;
          }
          .dash-empty__desc {
            font-size: 0.9rem;
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 28px;
          }
          .dash-empty__desc strong { color: var(--text-main); }
          .dash-empty__progress {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 28px;
          }
          .dash-empty__bar {
            flex: 1;
            height: 4px;
            background: var(--border-subtle);
            border-radius: 2px;
            overflow: hidden;
          }
          .dash-empty__fill {
            height: 100%;
            background: var(--primary-color);
            border-radius: 2px;
            transition: width 0.6s ease;
          }
          .dash-empty__count {
            font-size: 0.8rem;
            color: var(--text-muted);
            font-weight: 500;
            white-space: nowrap;
          }
        `})]});const{bestMatch:m,expansion:g,serendipity:S}=w,C=[{key:"best",label:"Best Match",sublabel:"취향 정확 매칭",data:m,color:"var(--primary-color)"},{key:"expansion",label:"Taste Expansion",sublabel:"취향 확장 추천",data:g,color:"var(--accent-warm)"},{key:"serendipity",label:"Serendipity",sublabel:"의외의 발견",data:S,color:"var(--accent-rose)"}];return u.jsxs("div",{className:"dash-page",children:[o&&u.jsx("div",{className:"dash-toast",children:o}),u.jsxs("header",{className:"dash-header",children:[u.jsxs("div",{children:[u.jsx("p",{className:"dash-header__date",children:h}),u.jsx("h2",{className:"dash-header__title",children:"오늘의 추천"})]}),u.jsx("button",{className:"btn-secondary",onClick:()=>e("/result"),children:"진단서 보기 →"})]}),u.jsx("div",{className:"dash-slots",children:C.map(k=>{const{movie:b,reason:N}=k.data;if(!b)return null;const T=l[b.id];return u.jsxs("article",{className:"slot-card",children:[u.jsx("div",{className:"slot-card__accent",style:{background:k.color}}),u.jsxs("div",{className:"slot-card__header",children:[u.jsx("span",{className:"slot-card__label",style:{color:k.color},children:k.label}),u.jsx("span",{className:"slot-card__sublabel",children:k.sublabel})]}),u.jsxs("div",{className:"slot-card__body",children:[u.jsx("img",{src:f(b.posterPath),alt:b.titleKo,className:"slot-card__poster"}),u.jsxs("div",{className:"slot-card__info",children:[u.jsx("h3",{className:"slot-card__title",children:b.titleKo}),u.jsxs("span",{className:"slot-card__meta",children:[b.releaseYear," · ",b.primaryGenre]}),u.jsx("p",{className:"slot-card__overview",children:b.overviewKo?b.overviewKo.length>150?`${b.overviewKo.slice(0,150)}…`:b.overviewKo:"시놉시스가 등록되지 않았습니다."}),u.jsxs("div",{className:"slot-card__reason",children:[u.jsx("span",{className:"slot-card__reason-label",style:{color:k.color},children:"추천 사유"}),u.jsx("p",{children:N})]}),T?u.jsx("div",{className:"slot-card__done",children:T==="like"?"❤️ 내 취향으로 등록됨":"🤷 별로로 등록됨"}):u.jsxs("div",{className:"slot-card__actions",children:[u.jsx("button",{className:"action-btn action-btn--like",onClick:()=>x(b.id,"like","seen",b.titleKo),children:"❤️ 내 취향"}),u.jsx("button",{className:"action-btn action-btn--pass",onClick:()=>x(b.id,"dislike","seen",b.titleKo),children:"🤷 별로"}),u.jsx("button",{className:"action-btn action-btn--want",onClick:()=>x(b.id,"like","wantToWatch",b.titleKo),children:"👀 보고 싶어"})]})]})]})]},k.key)})}),u.jsx("style",{jsx:!0,children:`
        .dash-page {
          padding: 20px 0 60px 0;
          animation: fadeIn 0.3s ease;
          position: relative;
        }

        /* 토스트 */
        .dash-toast {
          position: fixed;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--bg-elevated);
          border: 1px solid var(--border-default);
          color: var(--text-main);
          font-weight: 500;
          padding: 12px 24px;
          border-radius: var(--radius-md);
          z-index: 3000;
          font-size: 0.85rem;
          animation: slideDown 0.25s ease-out;
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
        }

        /* 헤더 */
        .dash-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 36px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
        }
        .dash-header__date {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
          letter-spacing: 0.04em;
          margin-bottom: 4px;
        }
        .dash-header__title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-main);
        }

        /* 슬롯 레이아웃 */
        .dash-slots {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* 슬롯 카드 */
        .slot-card {
          position: relative;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: var(--transition-smooth);
        }
        .slot-card:hover {
          border-color: var(--border-default);
        }

        .slot-card__accent {
          height: 3px;
          width: 100%;
        }

        .slot-card__header {
          padding: 16px 20px 0 20px;
          display: flex;
          align-items: baseline;
          gap: 10px;
        }
        .slot-card__label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .slot-card__sublabel {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .slot-card__body {
          display: flex;
          flex-direction: column;
          padding: 16px 20px 20px 20px;
          gap: 16px;
        }
        @media (min-width: 580px) {
          .slot-card__body {
            flex-direction: row;
            gap: 20px;
          }
        }

        .slot-card__poster {
          width: 110px;
          height: 160px;
          object-fit: cover;
          border-radius: var(--radius-md);
          background: var(--bg-surface);
          flex-shrink: 0;
          align-self: center;
        }
        @media (min-width: 580px) {
          .slot-card__poster { align-self: flex-start; }
        }

        .slot-card__info {
          flex: 1;
          min-width: 0;
        }
        .slot-card__title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 4px;
        }
        .slot-card__meta {
          font-size: 0.8rem;
          color: var(--text-muted);
          display: block;
          margin-bottom: 10px;
        }
        .slot-card__overview {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 14px;
        }

        .slot-card__reason {
          padding: 10px 14px;
          background: rgba(255,255,255,0.02);
          border-left: 2px solid var(--border-subtle);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          margin-bottom: 16px;
        }
        .slot-card__reason-label {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 4px;
        }
        .slot-card__reason p {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        .slot-card__actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 7px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          background: transparent;
          border: 1px solid var(--border-default);
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }
        .action-btn--like:hover {
          background: var(--accent-rose-muted);
          border-color: var(--accent-rose);
          color: var(--accent-rose);
        }
        .action-btn--pass:hover {
          background: var(--accent-warm-muted);
          border-color: var(--accent-warm);
          color: var(--accent-warm);
        }
        .action-btn--want:hover {
          background: var(--primary-muted);
          border-color: var(--primary-color);
          color: var(--primary-color);
        }

        .slot-card__done {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 500;
          padding: 8px 0;
        }
      `})]})}function Jh({profile:e,setProfile:t}){const r=Sr(),{reactions:n,addReaction:o,deleteReaction:i,getReactionByMovieId:l}=Jo(),[a,s]=v.useState("landing"),[c,d]=v.useState([]),[p,h]=v.useState([]),[y,w]=v.useState(null);v.useEffect(()=>{if(e.onboardingCompleted){const k=[],b=[];n.forEach(N=>{const T=Re.find(I=>I.id===N.movieId);T&&(N.sentiment==="like"?k.push(T):N.sentiment==="dislike"&&b.push(T))}),d(k),h(b),e.mbti&&w(e.mbti)}},[n,e.onboardingCompleted,e.mbti]);const x=k=>{if(e.onboardingCompleted){const b=l(k.id);b?b.sentiment==="like"?i(b.id):alert("⚠️ 이 영화는 이미 '나는 별로' 상태로 등록되어 있습니다. 변경하려면 취향 기록 페이지나 해당 카드에서 관리해 주세요."):o({movieId:k.id,sentiment:"like",strength:2,watchStatus:"seen",note:"추가 영화 선택에서 등록"})}else d(b=>b.some(T=>T.id===k.id)?b.filter(T=>T.id!==k.id):[...b,k])},j=k=>{if(e.onboardingCompleted){const b=l(k);b&&i(b.id)}else d(b=>b.filter(N=>N.id!==k))},f=k=>{if(e.onboardingCompleted){const b=l(k.id);b?b.sentiment==="dislike"?i(b.id):alert("⚠️ 이 영화는 이미 '내 취향' 상태로 등록되어 있습니다. 변경하려면 취향 기록 페이지나 해당 카드에서 관리해 주세요."):o({movieId:k.id,sentiment:"dislike",strength:2,watchStatus:"seen",note:"추가 영화 선택에서 등록"})}else{if(c.some(N=>N.id===k.id)){alert(`⚠️ '${k.titleKo}' 영화는 이미 1단계에서 '좋아하는 영화'로 선택하셨습니다. 다른 영화를 선택해 주세요!`);return}h(N=>N.some(I=>I.id===k.id)?N.filter(I=>I.id!==k.id):[...N,k])}},m=k=>{if(e.onboardingCompleted){const b=l(k);b&&i(b.id)}else h(b=>b.filter(N=>N.id!==k))},g=()=>s("dislike-selection"),S=()=>{e.onboardingCompleted?r("/result"):s("onboarding")},C=()=>{try{c.forEach(k=>{o({movieId:k.id,sentiment:"like",strength:2,watchStatus:"seen",note:"온보딩 단계를 통해 선택함"})}),p.forEach(k=>{o({movieId:k.id,sentiment:"dislike",strength:2,watchStatus:"seen",note:"온보딩 단계를 통해 선택함"})}),t({mbti:y,onboardingCompleted:!0}),r("/result")}catch(k){alert(`⚠️ 오류가 발생했습니다: ${k.message||"온보딩 처리에 실패했습니다."}`)}};return u.jsxs("div",{className:"onboarding-flow-wrapper",children:[a==="landing"&&u.jsxs("div",{className:"landing-view",children:[u.jsxs("div",{className:"landing-hero",children:[u.jsx("h2",{children:"당신이 진짜 좋아하는 영화는?"}),u.jsx("p",{children:"흐르는 영화 포스터 중에서 가장 선호하고 좋았던 영화를 3편 이상 선택해 주세요."})]}),u.jsx(Us,{onMovieClick:x,selectedMovieIds:c.map(k=>k.id),reactions:n}),u.jsx(Ys,{selectedMovies:c,onRemoveMovie:j,onSubmit:g,minRequired:e.onboardingCompleted?0:3,mode:"like"})]}),a==="dislike-selection"&&u.jsxs("div",{className:"landing-view",children:[u.jsxs("div",{className:"landing-hero select-dislike-hero",children:[u.jsx("h2",{className:"amber-glow",children:"남들은 명작이라 하지만, 나는 굳이 싫은 영화는?"}),u.jsx("p",{children:"대다수가 극찬하지만, 당신은 독특하게 불호(비선호)를 느끼는 영화를 골라보세요."})]}),u.jsx(Us,{onMovieClick:f,selectedMovieIds:p.map(k=>k.id),reactions:n}),u.jsx(Ys,{selectedMovies:p,onRemoveMovie:m,onSubmit:S,minRequired:e.onboardingCompleted?0:3,mode:"dislike"}),u.jsx("button",{className:"btn-absolute-back",onClick:()=>s("landing"),children:"← 1단계(선호 선택)로 돌아가기"})]}),a==="onboarding"&&u.jsxs("div",{className:"onboarding-view glass-panel",children:[u.jsx(zh,{value:y,onChange:k=>w(k)}),u.jsxs("div",{className:"onboarding-actions",children:[u.jsx("button",{className:"btn-back",onClick:()=>s("dislike-selection"),children:"이전 단계로"}),u.jsx("button",{className:"btn-next",onClick:C,children:"결과 분석하기"})]})]})]})}function Xh({profile:e,setProfile:t}){return u.jsx(Jh,{profile:e,setProfile:t})}function Zh({profile:e}){const t=Qe(),r=Sr(),n=()=>{e.onboardingCompleted?r("/dashboard"):r("/")};return u.jsxs("header",{className:"app-header",children:[u.jsxs("div",{className:"header-logo-section",onClick:n,style:{cursor:"pointer"},children:[u.jsx("h1",{className:"logo",children:"MVTI"}),u.jsx("p",{className:"subtitle",children:"Movie Taste Indicator"})]}),u.jsxs("nav",{className:"header-nav",children:[u.jsx(or,{to:"/",className:`nav-link ${t.pathname==="/"?"active":""}`,children:e.onboardingCompleted?"🎬 영화 더 고르기":"🏠 홈"}),e.onboardingCompleted&&u.jsxs(u.Fragment,{children:[u.jsx(or,{to:"/dashboard",className:`nav-link ${t.pathname==="/dashboard"?"active":""}`,children:"🚀 오늘의 추천"}),u.jsx(or,{to:"/my-taste",className:`nav-link ${t.pathname==="/my-taste"?"active":""}`,children:"✍️ 취향 기록 (CRUD)"}),u.jsx(or,{to:"/result",className:`nav-link ${t.pathname==="/result"?"active":""}`,children:"🔬 취향 진단서"})]})]})]})}function qh(){const[e,t]=Qo("mvti_user_profile_v1",{mbti:null,onboardingCompleted:!1});return u.jsx(kh,{basename:"/0711-mvti/",children:u.jsxs("div",{className:"app-container",children:[u.jsx(Zh,{profile:e}),u.jsx("main",{className:"app-main",children:u.jsxs(Zm,{children:[u.jsx(Dr,{path:"/",element:u.jsx(Xh,{profile:e,setProfile:t})}),u.jsx(Dr,{path:"/result",element:u.jsx(Hh,{})}),u.jsx(Dr,{path:"/my-taste",element:u.jsx(Ah,{})}),u.jsx(Dr,{path:"/dashboard",element:u.jsx(Qh,{})})]})})]})})}Li.createRoot(document.getElementById("root")).render(u.jsx(Vr.StrictMode,{children:u.jsx(qh,{})}));
