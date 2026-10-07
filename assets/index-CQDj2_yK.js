(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Mh={exports:{}},Vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function lM(){if(c_)return Vo;c_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Vo.Fragment=e,Vo.jsx=i,Vo.jsxs=i,Vo}var u_;function cM(){return u_||(u_=1,Mh.exports=lM()),Mh.exports}var $=cM(),yh={exports:{}},ko={},Eh={exports:{}},bh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function uM(){return f_||(f_=1,(function(r){function e(B,H){var ee=B.length;B.push(H);e:for(;0<ee;){var ge=ee-1>>>1,Te=B[ge];if(0<l(Te,H))B[ge]=H,B[ee]=Te,ee=ge;else break e}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var H=B[0],ee=B.pop();if(ee!==H){B[0]=ee;e:for(var ge=0,Te=B.length,U=Te>>>1;ge<U;){var Y=2*(ge+1)-1,he=B[Y],Ae=Y+1,Oe=B[Ae];if(0>l(he,ee))Ae<Te&&0>l(Oe,he)?(B[ge]=Oe,B[Ae]=ee,ge=Ae):(B[ge]=he,B[Y]=ee,ge=Y);else if(Ae<Te&&0>l(Oe,ee))B[ge]=Oe,B[Ae]=ee,ge=Ae;else break e}}return H}function l(B,H){var ee=B.sortIndex-H.sortIndex;return ee!==0?ee:B.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],d=[],_=1,v=null,g=3,M=!1,b=!1,A=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var H=i(d);H!==null;){if(H.callback===null)s(d);else if(H.startTime<=B)s(d),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(d)}}function F(B){if(A=!1,w(B),!b)if(i(m)!==null)b=!0,N||(N=!0,j());else{var H=i(d);H!==null&&J(F,H.startTime-B)}}var N=!1,P=-1,T=5,L=-1;function q(){return y?!0:!(r.unstable_now()-L<T)}function G(){if(y=!1,N){var B=r.unstable_now();L=B;var H=!0;try{e:{b=!1,A&&(A=!1,O(P),P=-1),M=!0;var ee=g;try{t:{for(w(B),v=i(m);v!==null&&!(v.expirationTime>B&&q());){var ge=v.callback;if(typeof ge=="function"){v.callback=null,g=v.priorityLevel;var Te=ge(v.expirationTime<=B);if(B=r.unstable_now(),typeof Te=="function"){v.callback=Te,w(B),H=!0;break t}v===i(m)&&s(m),w(B)}else s(m);v=i(m)}if(v!==null)H=!0;else{var U=i(d);U!==null&&J(F,U.startTime-B),H=!1}}break e}finally{v=null,g=ee,M=!1}H=void 0}}finally{H?j():N=!1}}}var j;if(typeof I=="function")j=function(){I(G)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,ve=pe.port2;pe.port1.onmessage=G,j=function(){ve.postMessage(null)}}else j=function(){S(G,0)};function J(B,H){P=S(function(){B(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(B){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var ee=g;g=H;try{return B()}finally{g=ee}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(B,H){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=g;g=B;try{return H()}finally{g=ee}},r.unstable_scheduleCallback=function(B,H,ee){var ge=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ge+ee:ge):ee=ge,B){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=ee+Te,B={id:_++,callback:H,priorityLevel:B,startTime:ee,expirationTime:Te,sortIndex:-1},ee>ge?(B.sortIndex=ee,e(d,B),i(m)===null&&B===i(d)&&(A?(O(P),P=-1):A=!0,J(F,ee-ge))):(B.sortIndex=Te,e(m,B),b||M||(b=!0,N||(N=!0,j()))),B},r.unstable_shouldYield=q,r.unstable_wrapCallback=function(B){var H=g;return function(){var ee=g;g=H;try{return B.apply(this,arguments)}finally{g=ee}}}})(bh)),bh}var h_;function fM(){return h_||(h_=1,Eh.exports=uM()),Eh.exports}var Th={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function hM(){if(d_)return ut;d_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function M(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function S(U,Y,he){this.props=U,this.context=Y,this.refs=y,this.updater=he||b}S.prototype.isReactComponent={},S.prototype.setState=function(U,Y){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Y,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function O(){}O.prototype=S.prototype;function I(U,Y,he){this.props=U,this.context=Y,this.refs=y,this.updater=he||b}var w=I.prototype=new O;w.constructor=I,A(w,S.prototype),w.isPureReactComponent=!0;var F=Array.isArray;function N(){}var P={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(U,Y,he){var Ae=he.ref;return{$$typeof:r,type:U,key:Y,ref:Ae!==void 0?Ae:null,props:he}}function q(U,Y){return L(U.type,Y,U.props)}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function j(U){var Y={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(he){return Y[he]})}var pe=/\/+/g;function ve(U,Y){return typeof U=="object"&&U!==null&&U.key!=null?j(""+U.key):Y.toString(36)}function J(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(N,N):(U.status="pending",U.then(function(Y){U.status==="pending"&&(U.status="fulfilled",U.value=Y)},function(Y){U.status==="pending"&&(U.status="rejected",U.reason=Y)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function B(U,Y,he,Ae,Oe){var ne=typeof U;(ne==="undefined"||ne==="boolean")&&(U=null);var Me=!1;if(U===null)Me=!0;else switch(ne){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(U.$$typeof){case r:case e:Me=!0;break;case _:return Me=U._init,B(Me(U._payload),Y,he,Ae,Oe)}}if(Me)return Oe=Oe(U),Me=Ae===""?"."+ve(U,0):Ae,F(Oe)?(he="",Me!=null&&(he=Me.replace(pe,"$&/")+"/"),B(Oe,Y,he,"",function(it){return it})):Oe!=null&&(G(Oe)&&(Oe=q(Oe,he+(Oe.key==null||U&&U.key===Oe.key?"":(""+Oe.key).replace(pe,"$&/")+"/")+Me)),Y.push(Oe)),1;Me=0;var ye=Ae===""?".":Ae+":";if(F(U))for(var Ge=0;Ge<U.length;Ge++)Ae=U[Ge],ne=ye+ve(Ae,Ge),Me+=B(Ae,Y,he,ne,Oe);else if(Ge=M(U),typeof Ge=="function")for(U=Ge.call(U),Ge=0;!(Ae=U.next()).done;)Ae=Ae.value,ne=ye+ve(Ae,Ge++),Me+=B(Ae,Y,he,ne,Oe);else if(ne==="object"){if(typeof U.then=="function")return B(J(U),Y,he,Ae,Oe);throw Y=String(U),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Me}function H(U,Y,he){if(U==null)return U;var Ae=[],Oe=0;return B(U,Ae,"","",function(ne){return Y.call(he,ne,Oe++)}),Ae}function ee(U){if(U._status===-1){var Y=U._result;Y=Y(),Y.then(function(he){(U._status===0||U._status===-1)&&(U._status=1,U._result=he)},function(he){(U._status===0||U._status===-1)&&(U._status=2,U._result=he)}),U._status===-1&&(U._status=0,U._result=Y)}if(U._status===1)return U._result.default;throw U._result}var ge=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Te={map:H,forEach:function(U,Y,he){H(U,function(){Y.apply(this,arguments)},he)},count:function(U){var Y=0;return H(U,function(){Y++}),Y},toArray:function(U){return H(U,function(Y){return Y})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ut.Activity=v,ut.Children=Te,ut.Component=S,ut.Fragment=i,ut.Profiler=l,ut.PureComponent=I,ut.StrictMode=s,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ut.__COMPILER_RUNTIME={__proto__:null,c:function(U){return P.H.useMemoCache(U)}},ut.cache=function(U){return function(){return U.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(U,Y,he){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ae=A({},U.props),Oe=U.key;if(Y!=null)for(ne in Y.key!==void 0&&(Oe=""+Y.key),Y)!T.call(Y,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&Y.ref===void 0||(Ae[ne]=Y[ne]);var ne=arguments.length-2;if(ne===1)Ae.children=he;else if(1<ne){for(var Me=Array(ne),ye=0;ye<ne;ye++)Me[ye]=arguments[ye+2];Ae.children=Me}return L(U.type,Oe,Ae)},ut.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ut.createElement=function(U,Y,he){var Ae,Oe={},ne=null;if(Y!=null)for(Ae in Y.key!==void 0&&(ne=""+Y.key),Y)T.call(Y,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Oe[Ae]=Y[Ae]);var Me=arguments.length-2;if(Me===1)Oe.children=he;else if(1<Me){for(var ye=Array(Me),Ge=0;Ge<Me;Ge++)ye[Ge]=arguments[Ge+2];Oe.children=ye}if(U&&U.defaultProps)for(Ae in Me=U.defaultProps,Me)Oe[Ae]===void 0&&(Oe[Ae]=Me[Ae]);return L(U,ne,Oe)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(U){return{$$typeof:p,render:U}},ut.isValidElement=G,ut.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:ee}},ut.memo=function(U,Y){return{$$typeof:d,type:U,compare:Y===void 0?null:Y}},ut.startTransition=function(U){var Y=P.T,he={};P.T=he;try{var Ae=U(),Oe=P.S;Oe!==null&&Oe(he,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(N,ge)}catch(ne){ge(ne)}finally{Y!==null&&he.types!==null&&(Y.types=he.types),P.T=Y}},ut.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ut.use=function(U){return P.H.use(U)},ut.useActionState=function(U,Y,he){return P.H.useActionState(U,Y,he)},ut.useCallback=function(U,Y){return P.H.useCallback(U,Y)},ut.useContext=function(U){return P.H.useContext(U)},ut.useDebugValue=function(){},ut.useDeferredValue=function(U,Y){return P.H.useDeferredValue(U,Y)},ut.useEffect=function(U,Y){return P.H.useEffect(U,Y)},ut.useEffectEvent=function(U){return P.H.useEffectEvent(U)},ut.useId=function(){return P.H.useId()},ut.useImperativeHandle=function(U,Y,he){return P.H.useImperativeHandle(U,Y,he)},ut.useInsertionEffect=function(U,Y){return P.H.useInsertionEffect(U,Y)},ut.useLayoutEffect=function(U,Y){return P.H.useLayoutEffect(U,Y)},ut.useMemo=function(U,Y){return P.H.useMemo(U,Y)},ut.useOptimistic=function(U,Y){return P.H.useOptimistic(U,Y)},ut.useReducer=function(U,Y,he){return P.H.useReducer(U,Y,he)},ut.useRef=function(U){return P.H.useRef(U)},ut.useState=function(U){return P.H.useState(U)},ut.useSyncExternalStore=function(U,Y,he){return P.H.useSyncExternalStore(U,Y,he)},ut.useTransition=function(){return P.H.useTransition()},ut.version="19.2.7",ut}var p_;function np(){return p_||(p_=1,Th.exports=hM()),Th.exports}var Ah={exports:{}},Bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function dM(){if(m_)return Bn;m_=1;var r=np();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:d,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Bn.createPortal=function(m,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,_)},Bn.flushSync=function(m){var d=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=_,s.d.f()}},Bn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Bn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Bn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var _=d.as,v=p(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,M=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:M,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Bn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Bn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,v=p(_,d.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Bn.preloadModule=function(m,d){if(typeof m=="string")if(d){var _=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Bn.requestFormReset=function(m){s.d.r(m)},Bn.unstable_batchedUpdates=function(m,d){return m(d)},Bn.useFormState=function(m,d,_){return h.H.useFormState(m,d,_)},Bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Bn.version="19.2.7",Bn}var g_;function pM(){if(g_)return Ah.exports;g_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ah.exports=dM(),Ah.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function mM(){if(__)return ko;__=1;var r=fM(),e=np(),i=pM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var x=!1,C=u.child;C;){if(C===a){x=!0,a=u,o=f;break}if(C===o){x=!0,o=u,a=f;break}C=C.sibling}if(!x){for(C=f.child;C;){if(C===a){x=!0,a=f,o=u;break}if(C===o){x=!0,o=f,a=u;break}C=C.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),I=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function ve(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case F:return"Suspense";case N:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case I:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:ve(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ve(t(n))}catch{}}return null}var J=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ge=[],Te=-1;function U(t){return{current:t}}function Y(t){0>Te||(t.current=ge[Te],ge[Te]=null,Te--)}function he(t,n){Te++,ge[Te]=t.current,t.current=n}var Ae=U(null),Oe=U(null),ne=U(null),Me=U(null);function ye(t,n){switch(he(ne,n),he(Oe,t),he(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?N0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=N0(n),t=L0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(Ae),he(Ae,t)}function Ge(){Y(Ae),Y(Oe),Y(ne)}function it(t){t.memoizedState!==null&&he(Me,t);var n=Ae.current,a=L0(n,t.type);n!==a&&(he(Oe,t),he(Ae,a))}function Je(t){Oe.current===t&&(Y(Ae),Y(Oe)),Me.current===t&&(Y(Me),Bo._currentValue=ee)}var Zt,dt;function Ee(t){if(Zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Zt=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+t+dt}var He=!1;function Pe(t,n){if(!t||He)return"";He=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(ce){var le=ce}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(ce){le=ce}t.call(Se.prototype)}}else{try{throw Error()}catch(ce){le=ce}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(ce){if(ce&&le&&typeof ce.stack=="string")return[ce.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],C=f[1];if(x&&C){var z=x.split(`
`),ie=C.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===ie.length)for(o=z.length-1,u=ie.length-1;1<=o&&0<=u&&z[o]!==ie[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==ie[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==ie[u]){var me=`
`+z[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{He=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ee(a):""}function ct(t,n){switch(t.tag){case 26:case 27:case 5:return Ee(t.type);case 16:return Ee("Lazy");case 13:return t.child!==n&&n!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return Pe(t.type,!1);case 11:return Pe(t.type.render,!1);case 1:return Pe(t.type,!0);case 31:return Ee("Activity");default:return""}}function st(t){try{var n="",a=null;do n+=ct(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var xt=Object.prototype.hasOwnProperty,_t=r.unstable_scheduleCallback,St=r.unstable_cancelCallback,Pt=r.unstable_shouldYield,X=r.unstable_requestPaint,It=r.unstable_now,Ct=r.unstable_getCurrentPriorityLevel,D=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,Q=r.unstable_NormalPriority,re=r.unstable_LowPriority,fe=r.unstable_IdlePriority,Re=r.log,Ue=r.unstable_setDisableYieldValue,ue=null,de=null;function we(t){if(typeof Re=="function"&&Ue(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(ue,t)}catch{}}var Ve=Math.clz32?Math.clz32:$e,Ie=Math.log,Ne=Math.LN2;function $e(t){return t>>>=0,t===0?32:31-(Ie(t)/Ne|0)|0}var et=256,lt=262144,k=4194304;function Ce(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~f,o!==0?u=Ce(o):(x&=C,x!==0?u=Ce(x):a||(a=C&~t,a!==0&&(u=Ce(a))))):(C=o&~f,C!==0?u=Ce(C):x!==0?u=Ce(x):a||(a=o&~t,a!==0&&(u=Ce(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function De(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ze(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var t=k;return k<<=1,(k&62914560)===0&&(k=4194304),t}function Ke(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function We(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function tn(t,n,a,o,u,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var C=t.entanglements,z=t.expirationTimes,ie=t.hiddenUpdates;for(a=x&~a;0<a;){var me=31-Ve(a),Se=1<<me;C[me]=0,z[me]=-1;var le=ie[me];if(le!==null)for(ie[me]=null,me=0;me<le.length;me++){var ce=le[me];ce!==null&&(ce.lane&=-536870913)}a&=~Se}o!==0&&zt(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function zt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ve(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ti(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ve(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ni(t,n){var a=n&-n;return a=(a&42)!==0?1:Qr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Qr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Jr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function $r(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:n_(t.type))}function Ws(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var Fi=Math.random().toString(36).slice(2),hn="__reactFiber$"+Fi,wn="__reactProps$"+Fi,Yn="__reactContainer$"+Fi,cs="__reactEvents$"+Fi,fl="__reactListeners$"+Fi,hl="__reactHandles$"+Fi,us="__reactResources$"+Fi,Aa="__reactMarker$"+Fi;function Ra(t){delete t[hn],delete t[wn],delete t[cs],delete t[fl],delete t[hl]}function Qi(t){var n=t[hn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Yn]||a[hn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=H0(t);t!==null;){if(a=t[hn])return a;t=H0(t)}return n}t=a,a=t.parentNode}return null}function Ji(t){if(t=t[hn]||t[Yn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function fs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ca(t){var n=t[us];return n||(n=t[us]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(t){t[Aa]=!0}var dl=new Set,R={};function W(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(R[t]=n,t=0;t<n.length;t++)dl.add(n[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),se={},Fe={};function Xe(t){return xt.call(Fe,t)?!0:xt.call(se,t)?!1:ae.test(t)?Fe[t]=!0:(se[t]=!0,!1)}function Le(t,n,a){if(Xe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ye(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ut(t){if(!t._valueTracker){var n=pt(t)?"checked":"value";t._valueTracker=Qe(t,n,""+t[n])}}function nn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=pt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ht=/[\n"\\]/g;function Gt(t){return t.replace(Ht,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ke(t,n,a,o,u,f,x,C){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+tt(n)):t.value!==""+tt(n)&&(t.value=""+tt(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?Mt(t,x,tt(n)):a!=null?Mt(t,x,tt(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+tt(C):t.removeAttribute("name")}function Fn(t,n,a,o,u,f,x,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ut(t);return}a=a!=null?""+tt(a):"",n=n!=null?""+tt(n):a,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Ut(t)}function Mt(t,n,a){n==="number"&&Kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function xn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+tt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ii(t,n,a){if(n!=null&&(n=""+tt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+tt(a):""}function Ai(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(J(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=tt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Ut(t)}function ai(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Vt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function an(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Vt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ri(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&an(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&an(t,f,n[f])}function Ft(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hs(t){return wa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function $i(){}var _u=null;function vu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qs=null,Ys=null;function Up(t){var n=Ji(t);if(n&&(t=n.stateNode)){var a=t[wn]||null;e:switch(t=n.stateNode,n.type){case"input":if(ke(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Gt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[wn]||null;if(!u)throw Error(s(90));ke(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&nn(o)}break e;case"textarea":ii(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&xn(t,!!a.multiple,n,!1)}}}var xu=!1;function Np(t,n,a){if(xu)return t(n,a);xu=!0;try{var o=t(n);return o}finally{if(xu=!1,(qs!==null||Ys!==null)&&(ec(),qs&&(n=qs,t=Ys,Ys=qs=null,Up(n),t)))for(n=0;n<t.length;n++)Up(t[n])}}function eo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[wn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(ea)try{var to={};Object.defineProperty(to,"passive",{get:function(){Su=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Su=!1}var Da=null,Mu=null,pl=null;function Lp(){if(pl)return pl;var t,n=Mu,a=n.length,o,u="value"in Da?Da.value:Da.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===u[f-o];o++);return pl=u.slice(t,1<o?1-o:void 0)}function ml(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function Op(){return!1}function Zn(t){function n(a,o,u,f,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(a=t[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?gl:Op,this.isPropagationStopped=Op,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),n}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Zn(ds),no=v({},ds,{view:0,detail:0}),rx=Zn(no),yu,Eu,io,vl=v({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(yu=t.screenX-io.screenX,Eu=t.screenY-io.screenY):Eu=yu=0,io=t),yu)},movementY:function(t){return"movementY"in t?t.movementY:Eu}}),Pp=Zn(vl),ox=v({},vl,{dataTransfer:0}),lx=Zn(ox),cx=v({},no,{relatedTarget:0}),bu=Zn(cx),ux=v({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),fx=Zn(ux),hx=v({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dx=Zn(hx),px=v({},ds,{data:0}),Ip=Zn(px),mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=_x[t])?!!n[t]:!1}function Tu(){return vx}var xx=v({},no,{key:function(t){if(t.key){var n=mx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sx=Zn(xx),Mx=v({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=Zn(Mx),yx=v({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),Ex=Zn(yx),bx=v({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=Zn(bx),Ax=v({},vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rx=Zn(Ax),Cx=v({},ds,{newState:0,oldState:0}),wx=Zn(Cx),Dx=[9,13,27,32],Au=ea&&"CompositionEvent"in window,ao=null;ea&&"documentMode"in document&&(ao=document.documentMode);var Ux=ea&&"TextEvent"in window&&!ao,Bp=ea&&(!Au||ao&&8<ao&&11>=ao),zp=" ",Hp=!1;function Gp(t,n){switch(t){case"keyup":return Dx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zs=!1;function Nx(t,n){switch(t){case"compositionend":return Vp(n);case"keypress":return n.which!==32?null:(Hp=!0,zp);case"textInput":return t=n.data,t===zp&&Hp?null:t;default:return null}}function Lx(t,n){if(Zs)return t==="compositionend"||!Au&&Gp(t,n)?(t=Lp(),pl=Mu=Da=null,Zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bp&&n.locale!=="ko"?null:n.data;default:return null}}var Ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ox[t.type]:n==="textarea"}function Xp(t,n,a,o){qs?Ys?Ys.push(o):Ys=[o]:qs=o,n=oc(n,"onChange"),0<n.length&&(a=new _l("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var so=null,ro=null;function Px(t){A0(t,0)}function xl(t){var n=fs(t);if(nn(n))return t}function Wp(t,n){if(t==="change")return n}var qp=!1;if(ea){var Ru;if(ea){var Cu="oninput"in document;if(!Cu){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),Cu=typeof Yp.oninput=="function"}Ru=Cu}else Ru=!1;qp=Ru&&(!document.documentMode||9<document.documentMode)}function Zp(){so&&(so.detachEvent("onpropertychange",Kp),ro=so=null)}function Kp(t){if(t.propertyName==="value"&&xl(ro)){var n=[];Xp(n,ro,t,vu(t)),Np(Px,n)}}function Ix(t,n,a){t==="focusin"?(Zp(),so=n,ro=a,so.attachEvent("onpropertychange",Kp)):t==="focusout"&&Zp()}function Fx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(ro)}function Bx(t,n){if(t==="click")return xl(n)}function zx(t,n){if(t==="input"||t==="change")return xl(n)}function Hx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var si=typeof Object.is=="function"?Object.is:Hx;function oo(t,n){if(si(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!xt.call(n,u)||!si(t[u],n[u]))return!1}return!0}function jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qp(t,n){var a=jp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jp(a)}}function Jp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Jp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function $p(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Kt(t.document)}return n}function wu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Gx=ea&&"documentMode"in document&&11>=document.documentMode,Ks=null,Du=null,lo=null,Uu=!1;function em(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uu||Ks==null||Ks!==Kt(o)||(o=Ks,"selectionStart"in o&&wu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lo&&oo(lo,o)||(lo=o,o=oc(Du,"onSelect"),0<o.length&&(n=new _l("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Ks)))}function ps(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var js={animationend:ps("Animation","AnimationEnd"),animationiteration:ps("Animation","AnimationIteration"),animationstart:ps("Animation","AnimationStart"),transitionrun:ps("Transition","TransitionRun"),transitionstart:ps("Transition","TransitionStart"),transitioncancel:ps("Transition","TransitionCancel"),transitionend:ps("Transition","TransitionEnd")},Nu={},tm={};ea&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function ms(t){if(Nu[t])return Nu[t];if(!js[t])return t;var n=js[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in tm)return Nu[t]=n[a];return t}var nm=ms("animationend"),im=ms("animationiteration"),am=ms("animationstart"),Vx=ms("transitionrun"),kx=ms("transitionstart"),Xx=ms("transitioncancel"),sm=ms("transitionend"),rm=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function Ci(t,n){rm.set(t,n),W(n,[t])}var Sl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],Qs=0,Ou=0;function Ml(){for(var t=Qs,n=Ou=Qs=0;n<t;){var a=_i[n];_i[n++]=null;var o=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var f=_i[n];if(_i[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}f!==0&&om(a,u,f)}}function yl(t,n,a,o){_i[Qs++]=t,_i[Qs++]=n,_i[Qs++]=a,_i[Qs++]=o,Ou|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Pu(t,n,a,o){return yl(t,n,a,o),El(t)}function gs(t,n){return yl(t,null,null,n),El(t)}function om(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ve(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function El(t){if(50<Uo)throw Uo=0,Wf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Js={};function Wx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(t,n,a,o){return new Wx(t,n,a,o)}function Iu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ta(t,n){var a=t.alternate;return a===null?(a=ri(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function lm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function bl(t,n,a,o,u,f){var x=0;if(o=t,typeof t=="function")Iu(t)&&(x=1);else if(typeof t=="string")x=jS(t,a,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=ri(31,a,n,u),t.elementType=L,t.lanes=f,t;case A:return _s(a.children,u,f,n);case y:x=8,u|=24;break;case S:return t=ri(12,a,n,u|2),t.elementType=S,t.lanes=f,t;case F:return t=ri(13,a,n,u),t.elementType=F,t.lanes=f,t;case N:return t=ri(19,a,n,u),t.elementType=N,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:x=10;break e;case O:x=9;break e;case w:x=11;break e;case P:x=14;break e;case T:x=16,o=null;break e}x=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ri(x,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function _s(t,n,a,o){return t=ri(7,t,o,n),t.lanes=a,t}function Fu(t,n,a){return t=ri(6,t,null,n),t.lanes=a,t}function cm(t){var n=ri(18,null,null,0);return n.stateNode=t,n}function Bu(t,n,a){return n=ri(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var um=new WeakMap;function vi(t,n){if(typeof t=="object"&&t!==null){var a=um.get(t);return a!==void 0?a:(n={value:t,source:n,stack:st(n)},um.set(t,n),n)}return{value:t,source:n,stack:st(n)}}var $s=[],er=0,Tl=null,co=0,xi=[],Si=0,Ua=null,zi=1,Hi="";function na(t,n){$s[er++]=co,$s[er++]=Tl,Tl=t,co=n}function fm(t,n,a){xi[Si++]=zi,xi[Si++]=Hi,xi[Si++]=Ua,Ua=t;var o=zi;t=Hi;var u=32-Ve(o)-1;o&=~(1<<u),a+=1;var f=32-Ve(n)+u;if(30<f){var x=u-u%5;f=(o&(1<<x)-1).toString(32),o>>=x,u-=x,zi=1<<32-Ve(n)+u|a<<u|o,Hi=f+t}else zi=1<<f|a<<u|o,Hi=t}function zu(t){t.return!==null&&(na(t,1),fm(t,1,0))}function Hu(t){for(;t===Tl;)Tl=$s[--er],$s[er]=null,co=$s[--er],$s[er]=null;for(;t===Ua;)Ua=xi[--Si],xi[Si]=null,Hi=xi[--Si],xi[Si]=null,zi=xi[--Si],xi[Si]=null}function hm(t,n){xi[Si++]=zi,xi[Si++]=Hi,xi[Si++]=Ua,zi=n.id,Hi=n.overflow,Ua=t}var Dn=null,Jt=null,wt=!1,Na=null,Mi=!1,Gu=Error(s(519));function La(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(vi(n,t)),Gu}function dm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[hn]=t,n[wn]=o,a){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)Et(Lo[a],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),Fn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),Ai(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||D0(n.textContent,a)?(o.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),o.onScroll!=null&&Et("scroll",n),o.onScrollEnd!=null&&Et("scrollend",n),o.onClick!=null&&(n.onclick=$i),n=!0):n=!1,n||La(t,!0)}function pm(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Dn=Dn.return}}function tr(t){if(t!==Dn)return!1;if(!wt)return pm(t),wt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||rh(t.type,t.memoizedProps)),a=!a),a&&Jt&&La(t),pm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Jt=z0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Jt=z0(t)}else n===27?(n=Jt,Ya(t.type)?(t=fh,fh=null,Jt=t):Jt=n):Jt=Dn?Ei(t.stateNode.nextSibling):null;return!0}function vs(){Jt=Dn=null,wt=!1}function Vu(){var t=Na;return t!==null&&(Jn===null?Jn=t:Jn.push.apply(Jn,t),Na=null),t}function uo(t){Na===null?Na=[t]:Na.push(t)}var ku=U(null),xs=null,ia=null;function Oa(t,n,a){he(ku,n._currentValue),n._currentValue=a}function aa(t){t._currentValue=ku.current,Y(ku)}function Xu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Wu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=u;for(var z=0;z<n.length;z++)if(C.context===n[z]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Xu(f.return,a,t),o||(x=null);break e}f=C.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Xu(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function nr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var C=u.type;si(u.pendingProps.value,x.value)||(t!==null?t.push(C):t=[C])}}else if(u===Me.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Bo):t=[Bo])}u=u.return}t!==null&&Wu(n,t,a,o),n.flags|=262144}function Al(t){for(t=t.firstContext;t!==null;){if(!si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ss(t){xs=t,ia=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Un(t){return mm(xs,t)}function Rl(t,n){return xs===null&&Ss(t),mm(t,n)}function mm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ia===null){if(t===null)throw Error(s(308));ia=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ia=ia.next=n;return a}var qx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Yx=r.unstable_scheduleCallback,Zx=r.unstable_NormalPriority,pn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qu(){return{controller:new qx,data:new Map,refCount:0}}function fo(t){t.refCount--,t.refCount===0&&Yx(Zx,function(){t.controller.abort()})}var ho=null,Yu=0,ir=0,ar=null;function Kx(t,n){if(ho===null){var a=ho=[];Yu=0,ir=Qf(),ar={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Yu++,n.then(gm,gm),n}function gm(){if(--Yu===0&&ho!==null){ar!==null&&(ar.status="fulfilled");var t=ho;ho=null,ir=0,ar=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function jx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var _m=B.S;B.S=function(t,n){e0=It(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Kx(t,n),_m!==null&&_m(t,n)};var Ms=U(null);function Zu(){var t=Ms.current;return t!==null?t:jt.pooledCache}function Cl(t,n){n===null?he(Ms,Ms.current):he(Ms,n.pool)}function vm(){var t=Zu();return t===null?null:{parent:pn._currentValue,pool:t}}var sr=Error(s(460)),Ku=Error(s(474)),wl=Error(s(542)),Dl={then:function(){}};function xm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Sm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($i,$i),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ym(t),t;default:if(typeof n.status=="string")n.then($i,$i);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ym(t),t}throw Es=n,sr}}function ys(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Es=a,sr):a}}var Es=null;function Mm(){if(Es===null)throw Error(s(459));var t=Es;return Es=null,t}function ym(t){if(t===sr||t===wl)throw Error(s(483))}var rr=null,po=0;function Ul(t){var n=po;return po+=1,rr===null&&(rr=[]),Sm(rr,t,n)}function mo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Nl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Em(t){function n(Z,V){if(t){var te=Z.deletions;te===null?(Z.deletions=[V],Z.flags|=16):te.push(V)}}function a(Z,V){if(!t)return null;for(;V!==null;)n(Z,V),V=V.sibling;return null}function o(Z){for(var V=new Map;Z!==null;)Z.key!==null?V.set(Z.key,Z):V.set(Z.index,Z),Z=Z.sibling;return V}function u(Z,V){return Z=ta(Z,V),Z.index=0,Z.sibling=null,Z}function f(Z,V,te){return Z.index=te,t?(te=Z.alternate,te!==null?(te=te.index,te<V?(Z.flags|=67108866,V):te):(Z.flags|=67108866,V)):(Z.flags|=1048576,V)}function x(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function C(Z,V,te,xe){return V===null||V.tag!==6?(V=Fu(te,Z.mode,xe),V.return=Z,V):(V=u(V,te),V.return=Z,V)}function z(Z,V,te,xe){var nt=te.type;return nt===A?me(Z,V,te.props.children,xe,te.key):V!==null&&(V.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&ys(nt)===V.type)?(V=u(V,te.props),mo(V,te),V.return=Z,V):(V=bl(te.type,te.key,te.props,null,Z.mode,xe),mo(V,te),V.return=Z,V)}function ie(Z,V,te,xe){return V===null||V.tag!==4||V.stateNode.containerInfo!==te.containerInfo||V.stateNode.implementation!==te.implementation?(V=Bu(te,Z.mode,xe),V.return=Z,V):(V=u(V,te.children||[]),V.return=Z,V)}function me(Z,V,te,xe,nt){return V===null||V.tag!==7?(V=_s(te,Z.mode,xe,nt),V.return=Z,V):(V=u(V,te),V.return=Z,V)}function Se(Z,V,te){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Fu(""+V,Z.mode,te),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return te=bl(V.type,V.key,V.props,null,Z.mode,te),mo(te,V),te.return=Z,te;case b:return V=Bu(V,Z.mode,te),V.return=Z,V;case T:return V=ys(V),Se(Z,V,te)}if(J(V)||j(V))return V=_s(V,Z.mode,te,null),V.return=Z,V;if(typeof V.then=="function")return Se(Z,Ul(V),te);if(V.$$typeof===I)return Se(Z,Rl(Z,V),te);Nl(Z,V)}return null}function le(Z,V,te,xe){var nt=V!==null?V.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return nt!==null?null:C(Z,V,""+te,xe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case M:return te.key===nt?z(Z,V,te,xe):null;case b:return te.key===nt?ie(Z,V,te,xe):null;case T:return te=ys(te),le(Z,V,te,xe)}if(J(te)||j(te))return nt!==null?null:me(Z,V,te,xe,null);if(typeof te.then=="function")return le(Z,V,Ul(te),xe);if(te.$$typeof===I)return le(Z,V,Rl(Z,te),xe);Nl(Z,te)}return null}function ce(Z,V,te,xe,nt){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Z=Z.get(te)||null,C(V,Z,""+xe,nt);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case M:return Z=Z.get(xe.key===null?te:xe.key)||null,z(V,Z,xe,nt);case b:return Z=Z.get(xe.key===null?te:xe.key)||null,ie(V,Z,xe,nt);case T:return xe=ys(xe),ce(Z,V,te,xe,nt)}if(J(xe)||j(xe))return Z=Z.get(te)||null,me(V,Z,xe,nt,null);if(typeof xe.then=="function")return ce(Z,V,te,Ul(xe),nt);if(xe.$$typeof===I)return ce(Z,V,te,Rl(V,xe),nt);Nl(V,xe)}return null}function Ze(Z,V,te,xe){for(var nt=null,Nt=null,je=V,gt=V=0,At=null;je!==null&&gt<te.length;gt++){je.index>gt?(At=je,je=null):At=je.sibling;var Lt=le(Z,je,te[gt],xe);if(Lt===null){je===null&&(je=At);break}t&&je&&Lt.alternate===null&&n(Z,je),V=f(Lt,V,gt),Nt===null?nt=Lt:Nt.sibling=Lt,Nt=Lt,je=At}if(gt===te.length)return a(Z,je),wt&&na(Z,gt),nt;if(je===null){for(;gt<te.length;gt++)je=Se(Z,te[gt],xe),je!==null&&(V=f(je,V,gt),Nt===null?nt=je:Nt.sibling=je,Nt=je);return wt&&na(Z,gt),nt}for(je=o(je);gt<te.length;gt++)At=ce(je,Z,gt,te[gt],xe),At!==null&&(t&&At.alternate!==null&&je.delete(At.key===null?gt:At.key),V=f(At,V,gt),Nt===null?nt=At:Nt.sibling=At,Nt=At);return t&&je.forEach(function(Ja){return n(Z,Ja)}),wt&&na(Z,gt),nt}function at(Z,V,te,xe){if(te==null)throw Error(s(151));for(var nt=null,Nt=null,je=V,gt=V=0,At=null,Lt=te.next();je!==null&&!Lt.done;gt++,Lt=te.next()){je.index>gt?(At=je,je=null):At=je.sibling;var Ja=le(Z,je,Lt.value,xe);if(Ja===null){je===null&&(je=At);break}t&&je&&Ja.alternate===null&&n(Z,je),V=f(Ja,V,gt),Nt===null?nt=Ja:Nt.sibling=Ja,Nt=Ja,je=At}if(Lt.done)return a(Z,je),wt&&na(Z,gt),nt;if(je===null){for(;!Lt.done;gt++,Lt=te.next())Lt=Se(Z,Lt.value,xe),Lt!==null&&(V=f(Lt,V,gt),Nt===null?nt=Lt:Nt.sibling=Lt,Nt=Lt);return wt&&na(Z,gt),nt}for(je=o(je);!Lt.done;gt++,Lt=te.next())Lt=ce(je,Z,gt,Lt.value,xe),Lt!==null&&(t&&Lt.alternate!==null&&je.delete(Lt.key===null?gt:Lt.key),V=f(Lt,V,gt),Nt===null?nt=Lt:Nt.sibling=Lt,Nt=Lt);return t&&je.forEach(function(oM){return n(Z,oM)}),wt&&na(Z,gt),nt}function Yt(Z,V,te,xe){if(typeof te=="object"&&te!==null&&te.type===A&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case M:e:{for(var nt=te.key;V!==null;){if(V.key===nt){if(nt=te.type,nt===A){if(V.tag===7){a(Z,V.sibling),xe=u(V,te.props.children),xe.return=Z,Z=xe;break e}}else if(V.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&ys(nt)===V.type){a(Z,V.sibling),xe=u(V,te.props),mo(xe,te),xe.return=Z,Z=xe;break e}a(Z,V);break}else n(Z,V);V=V.sibling}te.type===A?(xe=_s(te.props.children,Z.mode,xe,te.key),xe.return=Z,Z=xe):(xe=bl(te.type,te.key,te.props,null,Z.mode,xe),mo(xe,te),xe.return=Z,Z=xe)}return x(Z);case b:e:{for(nt=te.key;V!==null;){if(V.key===nt)if(V.tag===4&&V.stateNode.containerInfo===te.containerInfo&&V.stateNode.implementation===te.implementation){a(Z,V.sibling),xe=u(V,te.children||[]),xe.return=Z,Z=xe;break e}else{a(Z,V);break}else n(Z,V);V=V.sibling}xe=Bu(te,Z.mode,xe),xe.return=Z,Z=xe}return x(Z);case T:return te=ys(te),Yt(Z,V,te,xe)}if(J(te))return Ze(Z,V,te,xe);if(j(te)){if(nt=j(te),typeof nt!="function")throw Error(s(150));return te=nt.call(te),at(Z,V,te,xe)}if(typeof te.then=="function")return Yt(Z,V,Ul(te),xe);if(te.$$typeof===I)return Yt(Z,V,Rl(Z,te),xe);Nl(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,V!==null&&V.tag===6?(a(Z,V.sibling),xe=u(V,te),xe.return=Z,Z=xe):(a(Z,V),xe=Fu(te,Z.mode,xe),xe.return=Z,Z=xe),x(Z)):a(Z,V)}return function(Z,V,te,xe){try{po=0;var nt=Yt(Z,V,te,xe);return rr=null,nt}catch(je){if(je===sr||je===wl)throw je;var Nt=ri(29,je,null,Z.mode);return Nt.lanes=xe,Nt.return=Z,Nt}finally{}}}var bs=Em(!0),bm=Em(!1),Pa=!1;function ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ot&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(t),om(t,null,a),n}return yl(t,o,n,a),El(t)}function go(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ti(t,a)}}function Ju(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var $u=!1;function _o(){if($u){var t=ar;if(t!==null)throw t}}function vo(t,n,a,o){$u=!1;var u=t.updateQueue;Pa=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var z=C,ie=z.next;z.next=null,x===null?f=ie:x.next=ie,x=z;var me=t.alternate;me!==null&&(me=me.updateQueue,C=me.lastBaseUpdate,C!==x&&(C===null?me.firstBaseUpdate=ie:C.next=ie,me.lastBaseUpdate=z))}if(f!==null){var Se=u.baseState;x=0,me=ie=z=null,C=f;do{var le=C.lane&-536870913,ce=le!==C.lane;if(ce?(Tt&le)===le:(o&le)===le){le!==0&&le===ir&&($u=!0),me!==null&&(me=me.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Ze=t,at=C;le=n;var Yt=a;switch(at.tag){case 1:if(Ze=at.payload,typeof Ze=="function"){Se=Ze.call(Yt,Se,le);break e}Se=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=at.payload,le=typeof Ze=="function"?Ze.call(Yt,Se,le):Ze,le==null)break e;Se=v({},Se,le);break e;case 2:Pa=!0}}le=C.callback,le!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[le]:ce.push(le))}else ce={lane:le,tag:C.tag,payload:C.payload,callback:C.callback,next:null},me===null?(ie=me=ce,z=Se):me=me.next=ce,x|=le;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ce=C,C=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);me===null&&(z=Se),u.baseState=z,u.firstBaseUpdate=ie,u.lastBaseUpdate=me,f===null&&(u.shared.lanes=0),Va|=x,t.lanes=x,t.memoizedState=Se}}function Tm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Am(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Tm(a[t],n)}var or=U(null),Ll=U(0);function Rm(t,n){t=da,he(Ll,t),he(or,n),da=t|n.baseLanes}function ef(){he(Ll,da),he(or,or.current)}function tf(){da=Ll.current,Y(or),Y(Ll)}var oi=U(null),yi=null;function Ba(t){var n=t.alternate;he(cn,cn.current&1),he(oi,t),yi===null&&(n===null||or.current!==null||n.memoizedState!==null)&&(yi=t)}function nf(t){he(cn,cn.current),he(oi,t),yi===null&&(yi=t)}function Cm(t){t.tag===22?(he(cn,cn.current),he(oi,t),yi===null&&(yi=t)):za()}function za(){he(cn,cn.current),he(oi,oi.current)}function li(t){Y(oi),yi===t&&(yi=null),Y(cn)}var cn=U(0);function Ol(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ch(a)||uh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sa=0,mt=null,Wt=null,mn=null,Pl=!1,lr=!1,Ts=!1,Il=0,xo=0,cr=null,Qx=0;function on(){throw Error(s(321))}function af(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!si(t[a],n[a]))return!1;return!0}function sf(t,n,a,o,u,f){return sa=f,mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?fg:Sf,Ts=!1,f=a(o,u),Ts=!1,lr&&(f=Dm(n,a,o,u)),wm(t),f}function wm(t){B.H=yo;var n=Wt!==null&&Wt.next!==null;if(sa=0,mn=Wt=mt=null,Pl=!1,xo=0,cr=null,n)throw Error(s(300));t===null||gn||(t=t.dependencies,t!==null&&Al(t)&&(gn=!0))}function Dm(t,n,a,o){mt=t;var u=0;do{if(lr&&(cr=null),xo=0,lr=!1,25<=u)throw Error(s(301));if(u+=1,mn=Wt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=hg,f=n(a,o)}while(lr);return f}function Jx(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?So(n):n,t=t.useState()[0],(Wt!==null?Wt.memoizedState:null)!==t&&(mt.flags|=1024),n}function rf(){var t=Il!==0;return Il=0,t}function of(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function lf(t){if(Pl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Pl=!1}sa=0,mn=Wt=mt=null,lr=!1,xo=Il=0,cr=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?mt.memoizedState=mn=t:mn=mn.next=t,mn}function un(){if(Wt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var n=mn===null?mt.memoizedState:mn.next;if(n!==null)mn=n,Wt=t;else{if(t===null)throw mt.alternate===null?Error(s(467)):Error(s(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},mn===null?mt.memoizedState=mn=t:mn=mn.next=t}return mn}function Fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(t){var n=xo;return xo+=1,cr===null&&(cr=[]),t=Sm(cr,t,n),n=mt,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?fg:Sf),t}function Bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return So(t);if(t.$$typeof===I)return Un(t)}throw Error(s(438,String(t)))}function cf(t){var n=null,a=mt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fl(),mt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=q;return n.index++,a}function ra(t,n){return typeof n=="function"?n(t):n}function zl(t){var n=un();return uf(n,Wt,t)}function uf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var C=x=null,z=null,ie=n,me=!1;do{var Se=ie.lane&-536870913;if(Se!==ie.lane?(Tt&Se)===Se:(sa&Se)===Se){var le=ie.revertLane;if(le===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),Se===ir&&(me=!0);else if((sa&le)===le){ie=ie.next,le===ir&&(me=!0);continue}else Se={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},z===null?(C=z=Se,x=f):z=z.next=Se,mt.lanes|=le,Va|=le;Se=ie.action,Ts&&a(f,Se),f=ie.hasEagerState?ie.eagerState:a(f,Se)}else le={lane:Se,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},z===null?(C=z=le,x=f):z=z.next=le,mt.lanes|=Se,Va|=Se;ie=ie.next}while(ie!==null&&ie!==n);if(z===null?x=f:z.next=C,!si(f,t.memoizedState)&&(gn=!0,me&&(a=ar,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=z,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function ff(t){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=t(f,x.action),x=x.next;while(x!==u);si(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Um(t,n,a){var o=mt,u=un(),f=wt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!si((Wt||u).memoizedState,a);if(x&&(u.memoizedState=a,gn=!0),u=u.queue,pf(Om.bind(null,o,u,t),[t]),u.getSnapshot!==n||x||mn!==null&&mn.memoizedState.tag&1){if(o.flags|=2048,ur(9,{destroy:void 0},Lm.bind(null,o,u,a,n),null),jt===null)throw Error(s(349));f||(sa&127)!==0||Nm(o,n,a)}return a}function Nm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=mt.updateQueue,n===null?(n=Fl(),mt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Lm(t,n,a,o){n.value=a,n.getSnapshot=o,Pm(n)&&Im(t)}function Om(t,n,a){return a(function(){Pm(n)&&Im(t)})}function Pm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!si(t,a)}catch{return!0}}function Im(t){var n=gs(t,2);n!==null&&$n(n,t,2)}function hf(t){var n=Xn();if(typeof t=="function"){var a=t;if(t=a(),Ts){we(!0);try{a()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},n}function Fm(t,n,a,o){return t.baseState=a,uf(t,Wt,typeof o=="function"?o:ra)}function $x(t,n,a,o,u){if(Vl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Bm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Bm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=B.T,x={};B.T=x;try{var C=a(u,o),z=B.S;z!==null&&z(x,C),zm(t,n,C)}catch(ie){df(t,n,ie)}finally{f!==null&&x.types!==null&&(f.types=x.types),B.T=f}}else try{f=a(u,o),zm(t,n,f)}catch(ie){df(t,n,ie)}}function zm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Hm(t,n,o)},function(o){return df(t,n,o)}):Hm(t,n,a)}function Hm(t,n,a){n.status="fulfilled",n.value=a,Gm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Bm(t,a)))}function df(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Gm(n),n=n.next;while(n!==o)}t.action=null}function Gm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Vm(t,n){return n}function km(t,n){if(wt){var a=jt.formState;if(a!==null){e:{var o=mt;if(wt){if(Jt){t:{for(var u=Jt,f=Mi;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ei(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Jt=Ei(u.nextSibling),o=u.data==="F!";break e}}La(o)}o=!1}o&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vm,lastRenderedState:n},a.queue=o,a=lg.bind(null,mt,o),o.dispatch=a,o=hf(!1),f=xf.bind(null,mt,!1,o.queue),o=Xn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=$x.bind(null,mt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Xm(t){var n=un();return Wm(n,Wt,t)}function Wm(t,n,a){if(n=uf(t,n,Vm)[0],t=zl(ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=So(n)}catch(x){throw x===sr?wl:x}else o=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(mt.flags|=2048,ur(9,{destroy:void 0},eS.bind(null,u,a),null)),[o,f,t]}function eS(t,n){t.action=n}function qm(t){var n=un(),a=Wt;if(a!==null)return Wm(n,a,t);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ur(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=mt.updateQueue,n===null&&(n=Fl(),mt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Ym(){return un().memoizedState}function Hl(t,n,a,o){var u=Xn();mt.flags|=t,u.memoizedState=ur(1|n,{destroy:void 0},a,o===void 0?null:o)}function Gl(t,n,a,o){var u=un();o=o===void 0?null:o;var f=u.memoizedState.inst;Wt!==null&&o!==null&&af(o,Wt.memoizedState.deps)?u.memoizedState=ur(n,f,a,o):(mt.flags|=t,u.memoizedState=ur(1|n,f,a,o))}function Zm(t,n){Hl(8390656,8,t,n)}function pf(t,n){Gl(2048,8,t,n)}function tS(t){mt.flags|=4;var n=mt.updateQueue;if(n===null)n=Fl(),mt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Km(t){var n=un().memoizedState;return tS({ref:n,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function jm(t,n){return Gl(4,2,t,n)}function Qm(t,n){return Gl(4,4,t,n)}function Jm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function $m(t,n,a){a=a!=null?a.concat([t]):null,Gl(4,4,Jm.bind(null,n,t),a)}function mf(){}function eg(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&af(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function tg(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&af(n,o[1]))return o[0];if(o=t(),Ts){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[o,n],o}function gf(t,n,a){return a===void 0||(sa&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=n0(),mt.lanes|=t,Va|=t,a)}function ng(t,n,a,o){return si(a,n)?a:or.current!==null?(t=gf(t,a,o),si(t,n)||(gn=!0),t):(sa&42)===0||(sa&1073741824)!==0&&(Tt&261930)===0?(gn=!0,t.memoizedState=a):(t=n0(),mt.lanes|=t,Va|=t,n)}function ig(t,n,a,o,u){var f=H.p;H.p=f!==0&&8>f?f:8;var x=B.T,C={};B.T=C,xf(t,!1,n,a);try{var z=u(),ie=B.S;if(ie!==null&&ie(C,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var me=jx(z,o);Mo(t,n,me,fi(t))}else Mo(t,n,o,fi(t))}catch(Se){Mo(t,n,{then:function(){},status:"rejected",reason:Se},fi())}finally{H.p=f,x!==null&&C.types!==null&&(x.types=C.types),B.T=x}}function nS(){}function _f(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=ag(t).queue;ig(t,u,n,ee,a===null?nS:function(){return sg(t),a(o)})}function ag(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function sg(t){var n=ag(t);n.next===null&&(n=t.alternate.memoizedState),Mo(t,n.next.queue,{},fi())}function vf(){return Un(Bo)}function rg(){return un().memoizedState}function og(){return un().memoizedState}function iS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=fi();t=Ia(a);var o=Fa(n,t,a);o!==null&&($n(o,n,a),go(o,n,a)),n={cache:qu()},t.payload=n;return}n=n.return}}function aS(t,n,a){var o=fi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vl(t)?cg(n,a):(a=Pu(t,n,a,o),a!==null&&($n(a,t,o),ug(a,n,o)))}function lg(t,n,a){var o=fi();Mo(t,n,a,o)}function Mo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vl(t))cg(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,C=f(x,a);if(u.hasEagerState=!0,u.eagerState=C,si(C,x))return yl(t,n,u,0),jt===null&&Ml(),!1}catch{}finally{}if(a=Pu(t,n,u,o),a!==null)return $n(a,t,o),ug(a,n,o),!0}return!1}function xf(t,n,a,o){if(o={lane:2,revertLane:Qf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vl(t)){if(n)throw Error(s(479))}else n=Pu(t,a,o,2),n!==null&&$n(n,t,2)}function Vl(t){var n=t.alternate;return t===mt||n!==null&&n===mt}function cg(t,n){lr=Pl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function ug(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ti(t,a)}}var yo={readContext:Un,use:Bl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};yo.useEffectEvent=on;var fg={readContext:Un,use:Bl,useCallback:function(t,n){return Xn().memoizedState=[t,n===void 0?null:n],t},useContext:Un,useEffect:Zm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Hl(4194308,4,Jm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Hl(4194308,4,t,n)},useInsertionEffect:function(t,n){Hl(4,2,t,n)},useMemo:function(t,n){var a=Xn();n=n===void 0?null:n;var o=t();if(Ts){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Xn();if(a!==void 0){var u=a(n);if(Ts){we(!0);try{a(n)}finally{we(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=aS.bind(null,mt,t),[o.memoizedState,t]},useRef:function(t){var n=Xn();return t={current:t},n.memoizedState=t},useState:function(t){t=hf(t);var n=t.queue,a=lg.bind(null,mt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:mf,useDeferredValue:function(t,n){var a=Xn();return gf(a,t,n)},useTransition:function(){var t=hf(!1);return t=ig.bind(null,mt,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=mt,u=Xn();if(wt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),jt===null)throw Error(s(349));(Tt&127)!==0||Nm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Zm(Om.bind(null,o,f,t),[t]),o.flags|=2048,ur(9,{destroy:void 0},Lm.bind(null,o,f,a,n),null),a},useId:function(){var t=Xn(),n=jt.identifierPrefix;if(wt){var a=Hi,o=zi;a=(o&~(1<<32-Ve(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Il++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Qx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:vf,useFormState:km,useActionState:km,useOptimistic:function(t){var n=Xn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xf.bind(null,mt,!0,a),a.dispatch=n,[t,n]},useMemoCache:cf,useCacheRefresh:function(){return Xn().memoizedState=iS.bind(null,mt)},useEffectEvent:function(t){var n=Xn(),a={impl:t};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Sf={readContext:Un,use:Bl,useCallback:eg,useContext:Un,useEffect:pf,useImperativeHandle:$m,useInsertionEffect:jm,useLayoutEffect:Qm,useMemo:tg,useReducer:zl,useRef:Ym,useState:function(){return zl(ra)},useDebugValue:mf,useDeferredValue:function(t,n){var a=un();return ng(a,Wt.memoizedState,t,n)},useTransition:function(){var t=zl(ra)[0],n=un().memoizedState;return[typeof t=="boolean"?t:So(t),n]},useSyncExternalStore:Um,useId:rg,useHostTransitionStatus:vf,useFormState:Xm,useActionState:Xm,useOptimistic:function(t,n){var a=un();return Fm(a,Wt,t,n)},useMemoCache:cf,useCacheRefresh:og};Sf.useEffectEvent=Km;var hg={readContext:Un,use:Bl,useCallback:eg,useContext:Un,useEffect:pf,useImperativeHandle:$m,useInsertionEffect:jm,useLayoutEffect:Qm,useMemo:tg,useReducer:ff,useRef:Ym,useState:function(){return ff(ra)},useDebugValue:mf,useDeferredValue:function(t,n){var a=un();return Wt===null?gf(a,t,n):ng(a,Wt.memoizedState,t,n)},useTransition:function(){var t=ff(ra)[0],n=un().memoizedState;return[typeof t=="boolean"?t:So(t),n]},useSyncExternalStore:Um,useId:rg,useHostTransitionStatus:vf,useFormState:qm,useActionState:qm,useOptimistic:function(t,n){var a=un();return Wt!==null?Fm(a,Wt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:cf,useCacheRefresh:og};hg.useEffectEvent=Km;function Mf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var yf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=fi(),u=Ia(o);u.payload=n,a!=null&&(u.callback=a),n=Fa(t,u,o),n!==null&&($n(n,t,o),go(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=fi(),u=Ia(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Fa(t,u,o),n!==null&&($n(n,t,o),go(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=fi(),o=Ia(a);o.tag=2,n!=null&&(o.callback=n),n=Fa(t,o,a),n!==null&&($n(n,t,a),go(n,t,a))}};function dg(t,n,a,o,u,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!oo(a,o)||!oo(u,f):!0}function pg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&yf.enqueueReplaceState(n,n.state,null)}function As(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function mg(t){Sl(t)}function gg(t){console.error(t)}function _g(t){Sl(t)}function kl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function vg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ef(t,n,a){return a=Ia(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(t,n)},a}function xg(t){return t=Ia(t),t.tag=3,t}function Sg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){vg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){vg(n,a,o),typeof u!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function sS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&nr(n,a,u,!0),a=oi.current,a!==null){switch(a.tag){case 31:case 13:return yi===null?tc():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Zf(t,o,u)),!1;case 22:return a.flags|=65536,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Zf(t,o,u)),!1}throw Error(s(435,a.tag))}return Zf(t,o,u),tc(),!1}if(wt)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Gu&&(t=Error(s(422),{cause:o}),uo(vi(t,a)))):(o!==Gu&&(n=Error(s(423),{cause:o}),uo(vi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=vi(o,a),u=Ef(t.stateNode,o,u),Ju(t,u),ln!==4&&(ln=2)),!1;var f=Error(s(520),{cause:o});if(f=vi(f,a),Do===null?Do=[f]:Do.push(f),ln!==4&&(ln=2),n===null)return!0;o=vi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Ef(a.stateNode,o,t),Ju(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ka===null||!ka.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=xg(u),Sg(u,t,a,o),Ju(a,u),!1}a=a.return}while(a!==null);return!1}var bf=Error(s(461)),gn=!1;function Nn(t,n,a,o){n.child=t===null?bm(n,null,a,o):bs(n,t.child,a,o)}function Mg(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var C in o)C!=="ref"&&(x[C]=o[C])}else x=o;return Ss(n),o=sf(t,n,a,x,f,u),C=rf(),t!==null&&!gn?(of(t,n,u),oa(t,n,u)):(wt&&C&&zu(n),n.flags|=1,Nn(t,n,o,u),n.child)}function yg(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Iu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Eg(t,n,f,o,u)):(t=bl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Nf(t,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:oo,a(x,o)&&t.ref===n.ref)return oa(t,n,u)}return n.flags|=1,t=ta(f,o),t.ref=n.ref,t.return=n,n.child=t}function Eg(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(oo(f,o)&&t.ref===n.ref)if(gn=!1,n.pendingProps=o=f,Nf(t,u))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,oa(t,n,u)}return Tf(t,n,a,o,u)}function bg(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Tg(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Cl(n,f!==null?f.cachePool:null),f!==null?Rm(n,f):ef(),Cm(n);else return o=n.lanes=536870912,Tg(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Cl(n,f.cachePool),Rm(n,f),za(),n.memoizedState=null):(t!==null&&Cl(n,null),ef(),za());return Nn(t,n,u,a),n.child}function Eo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Tg(t,n,a,o,u){var f=Zu();return f=f===null?null:{parent:pn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Cl(n,null),ef(),Cm(n),t!==null&&nr(t,n,o,!0),n.childLanes=u,null}function Xl(t,n){return n=ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Ag(t,n,a){return bs(n,t.child,null,a),t=Xl(n,n.pendingProps),t.flags|=2,li(n),n.memoizedState=null,t}function rS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(wt){if(o.mode==="hidden")return t=Xl(n,o),n.lanes=536870912,Eo(null,t);if(nf(n),(t=Jt)?(t=B0(t,Mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:zi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=cm(t),a.return=n,n.child=a,Dn=n,Jt=null)):t=null,t===null)throw La(n);return n.lanes=536870912,null}return Xl(n,o)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(nf(n),u)if(n.flags&256)n.flags&=-257,n=Ag(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(gn||nr(t,n,a,!1),u=(a&t.childLanes)!==0,gn||u){if(o=jt,o!==null&&(x=ni(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,gs(t,x),$n(o,t,x),bf;tc(),n=Ag(t,n,a)}else t=f.treeContext,Jt=Ei(x.nextSibling),Dn=n,wt=!0,Na=null,Mi=!1,t!==null&&hm(n,t),n=Xl(n,o),n.flags|=4096;return n}return t=ta(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Wl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Tf(t,n,a,o,u){return Ss(n),a=sf(t,n,a,o,void 0,u),o=rf(),t!==null&&!gn?(of(t,n,u),oa(t,n,u)):(wt&&o&&zu(n),n.flags|=1,Nn(t,n,a,u),n.child)}function Rg(t,n,a,o,u,f){return Ss(n),n.updateQueue=null,a=Dm(n,o,a,u),wm(t),o=rf(),t!==null&&!gn?(of(t,n,f),oa(t,n,f)):(wt&&o&&zu(n),n.flags|=1,Nn(t,n,a,f),n.child)}function Cg(t,n,a,o,u){if(Ss(n),n.stateNode===null){var f=Js,x=a.contextType;typeof x=="object"&&x!==null&&(f=Un(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=yf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},ju(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Un(x):Js,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Mf(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&yf.enqueueReplaceState(f,f.state,null),vo(n,o,f,u),_o(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var C=n.memoizedProps,z=As(a,C);f.props=z;var ie=f.context,me=a.contextType;x=Js,typeof me=="object"&&me!==null&&(x=Un(me));var Se=a.getDerivedStateFromProps;me=typeof Se=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||ie!==x)&&pg(n,f,o,x),Pa=!1;var le=n.memoizedState;f.state=le,vo(n,o,f,u),_o(),ie=n.memoizedState,C||le!==ie||Pa?(typeof Se=="function"&&(Mf(n,a,Se,o),ie=n.memoizedState),(z=Pa||dg(n,a,z,o,le,ie,x))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ie),f.props=o,f.state=ie,f.context=x,o=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Qu(t,n),x=n.memoizedProps,me=As(a,x),f.props=me,Se=n.pendingProps,le=f.context,ie=a.contextType,z=Js,typeof ie=="object"&&ie!==null&&(z=Un(ie)),C=a.getDerivedStateFromProps,(ie=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==Se||le!==z)&&pg(n,f,o,z),Pa=!1,le=n.memoizedState,f.state=le,vo(n,o,f,u),_o();var ce=n.memoizedState;x!==Se||le!==ce||Pa||t!==null&&t.dependencies!==null&&Al(t.dependencies)?(typeof C=="function"&&(Mf(n,a,C,o),ce=n.memoizedState),(me=Pa||dg(n,a,me,o,le,ce,z)||t!==null&&t.dependencies!==null&&Al(t.dependencies))?(ie||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ce,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ce,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),f.props=o,f.state=ce,f.context=z,o=me):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Wl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=bs(n,t.child,null,u),n.child=bs(n,null,a,u)):Nn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=oa(t,n,u),t}function wg(t,n,a,o){return vs(),n.flags|=256,Nn(t,n,a,o),n.child}var Af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rf(t){return{baseLanes:t,cachePool:vm()}}function Cf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ui),t}function Dg(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(wt){if(u?Ba(n):za(),(t=Jt)?(t=B0(t,Mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:zi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=cm(t),a.return=n,n.child=a,Dn=n,Jt=null)):t=null,t===null)throw La(n);return uh(t)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(za(),u=n.mode,C=ql({mode:"hidden",children:C},u),o=_s(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=Rf(a),o.childLanes=Cf(t,x,a),n.memoizedState=Af,Eo(null,o)):(Ba(n),wf(n,C))}var z=t.memoizedState;if(z!==null&&(C=z.dehydrated,C!==null)){if(f)n.flags&256?(Ba(n),n.flags&=-257,n=Df(t,n,a)):n.memoizedState!==null?(za(),n.child=t.child,n.flags|=128,n=null):(za(),C=o.fallback,u=n.mode,o=ql({mode:"visible",children:o.children},u),C=_s(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,bs(n,t.child,null,a),o=n.child,o.memoizedState=Rf(a),o.childLanes=Cf(t,x,a),n.memoizedState=Af,n=Eo(null,o));else if(Ba(n),uh(C)){if(x=C.nextSibling&&C.nextSibling.dataset,x)var ie=x.dgst;x=ie,o=Error(s(419)),o.stack="",o.digest=x,uo({value:o,source:null,stack:null}),n=Df(t,n,a)}else if(gn||nr(t,n,a,!1),x=(a&t.childLanes)!==0,gn||x){if(x=jt,x!==null&&(o=ni(x,a),o!==0&&o!==z.retryLane))throw z.retryLane=o,gs(t,o),$n(x,t,o),bf;ch(C)||tc(),n=Df(t,n,a)}else ch(C)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Jt=Ei(C.nextSibling),Dn=n,wt=!0,Na=null,Mi=!1,t!==null&&hm(n,t),n=wf(n,o.children),n.flags|=4096);return n}return u?(za(),C=o.fallback,u=n.mode,z=t.child,ie=z.sibling,o=ta(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,ie!==null?C=ta(ie,C):(C=_s(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Eo(null,o),o=n.child,C=t.child.memoizedState,C===null?C=Rf(a):(u=C.cachePool,u!==null?(z=pn._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=vm(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=Cf(t,x,a),n.memoizedState=Af,Eo(t.child,o)):(Ba(n),a=t.child,t=a.sibling,a=ta(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function wf(t,n){return n=ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ql(t,n){return t=ri(22,t,null,n),t.lanes=0,t}function Df(t,n,a){return bs(n,t.child,null,a),t=wf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Ug(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Xu(t.return,n,a)}function Uf(t,n,a,o,u,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function Ng(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var x=cn.current,C=(x&2)!==0;if(C?(x=x&1|2,n.flags|=128):x&=1,he(cn,x),Nn(t,n,o,a),o=wt?co:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ug(t,a,n);else if(t.tag===19)Ug(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ol(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Uf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ol(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Uf(n,!0,a,null,f,o);break;case"together":Uf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function oa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Va|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(nr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ta(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ta(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Nf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Al(t)))}function oS(t,n,a){switch(n.tag){case 3:ye(n,n.stateNode.containerInfo),Oa(n,pn,t.memoizedState.cache),vs();break;case 27:case 5:it(n);break;case 4:ye(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,nf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Dg(t,n,a):(Ba(n),t=oa(t,n,a),t!==null?t.sibling:null);Ba(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(nr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Ng(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),he(cn,cn.current),o)break;return null;case 22:return n.lanes=0,bg(t,n,a,n.pendingProps);case 24:Oa(n,pn,t.memoizedState.cache)}return oa(t,n,a)}function Lg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!Nf(t,a)&&(n.flags&128)===0)return gn=!1,oS(t,n,a);gn=(t.flags&131072)!==0}else gn=!1,wt&&(n.flags&1048576)!==0&&fm(n,co,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=ys(n.elementType),n.type=t,typeof t=="function")Iu(t)?(o=As(t,o),n.tag=1,n=Cg(null,n,t,o,a)):(n.tag=0,n=Tf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=Mg(null,n,t,o,a);break e}else if(u===P){n.tag=14,n=yg(null,n,t,o,a);break e}}throw n=ve(t)||t,Error(s(306,n,""))}}return n;case 0:return Tf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=As(o,n.pendingProps),Cg(t,n,o,u,a);case 3:e:{if(ye(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Qu(t,n),vo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Oa(n,pn,o),o!==f.cache&&Wu(n,[pn],a,!0),_o(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=wg(t,n,o,a);break e}else if(o!==u){u=vi(Error(s(424)),n),uo(u),n=wg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Jt=Ei(t.firstChild),Dn=n,wt=!0,Na=null,Mi=!0,a=bm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(vs(),o===u){n=oa(t,n,a);break e}Nn(t,n,o,a)}n=n.child}return n;case 26:return Wl(t,n),t===null?(a=X0(n.type,null,n.pendingProps,null))?n.memoizedState=a:wt||(a=n.type,t=n.pendingProps,o=lc(ne.current).createElement(a),o[hn]=n,o[wn]=t,Ln(o,a,t),dn(o),n.stateNode=o):n.memoizedState=X0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&wt&&(o=n.stateNode=G0(n.type,n.pendingProps,ne.current),Dn=n,Mi=!0,u=Jt,Ya(n.type)?(fh=u,Jt=Ei(o.firstChild)):Jt=u),Nn(t,n,n.pendingProps.children,a),Wl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&wt&&((u=o=Jt)&&(o=FS(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Dn=n,Jt=Ei(o.firstChild),Mi=!1,u=!0):u=!1),u||La(n)),it(n),u=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,o=f.children,rh(u,f)?o=null:x!==null&&rh(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=sf(t,n,Jx,null,null,a),Bo._currentValue=u),Wl(t,n),Nn(t,n,o,a),n.child;case 6:return t===null&&wt&&((t=a=Jt)&&(a=BS(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Dn=n,Jt=null,t=!0):t=!1),t||La(n)),null;case 13:return Dg(t,n,a);case 4:return ye(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=bs(n,null,o,a):Nn(t,n,o,a),n.child;case 11:return Mg(t,n,n.type,n.pendingProps,a);case 7:return Nn(t,n,n.pendingProps,a),n.child;case 8:return Nn(t,n,n.pendingProps.children,a),n.child;case 12:return Nn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Oa(n,n.type,o.value),Nn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ss(n),u=Un(u),o=o(u),n.flags|=1,Nn(t,n,o,a),n.child;case 14:return yg(t,n,n.type,n.pendingProps,a);case 15:return Eg(t,n,n.type,n.pendingProps,a);case 19:return Ng(t,n,a);case 31:return rS(t,n,a);case 22:return bg(t,n,a,n.pendingProps);case 24:return Ss(n),o=Un(pn),t===null?(u=Zu(),u===null&&(u=jt,f=qu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},ju(n),Oa(n,pn,u)):((t.lanes&a)!==0&&(Qu(t,n),vo(n,null,null,a),_o()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Oa(n,pn,o)):(o=f.cache,Oa(n,pn,o),o!==u.cache&&Wu(n,[pn],a,!0))),Nn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function la(t){t.flags|=4}function Lf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(r0())t.flags|=8192;else throw Es=Dl,Ku}else t.flags&=-16777217}function Og(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!K0(n))if(r0())t.flags|=8192;else throw Es=Dl,Ku}function Yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?be():536870912,t.lanes|=n,pr|=n)}function bo(t,n){if(!wt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function $t(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function lS(t,n,a){var o=n.pendingProps;switch(Hu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(n),null;case 1:return $t(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),aa(pn),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(tr(n)?la(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vu())),$t(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(la(n),f!==null?($t(n),Og(n,f)):($t(n),Lf(n,u,null,o,a))):f?f!==t.memoizedState?(la(n),$t(n),Og(n,f)):($t(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&la(n),$t(n),Lf(n,u,t,o,a)),null;case 27:if(Je(n),a=ne.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $t(n),null}t=Ae.current,tr(n)?dm(n):(t=G0(u,o,a),n.stateNode=t,la(n))}return $t(n),null;case 5:if(Je(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $t(n),null}if(f=Ae.current,tr(n))dm(n);else{var x=lc(ne.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}f[hn]=n,f[wn]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;e:switch(Ln(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&la(n)}}return $t(n),Lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ne.current,tr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[hn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||D0(t.nodeValue,a)),t||La(n,!0)}else t=lc(t).createTextNode(o),t[hn]=n,n.stateNode=t}return $t(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=tr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[hn]=n}else vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),t=!1}else a=Vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(li(n),n):(li(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $t(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=tr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[hn]=n}else vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),u=!1}else u=Vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(li(n),n):(li(n),null)}return li(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),$t(n),null);case 4:return Ge(),t===null&&th(n.stateNode.containerInfo),$t(n),null;case 10:return aa(n.type),$t(n),null;case 19:if(Y(cn),o=n.memoizedState,o===null)return $t(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)bo(o,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ol(t),f!==null){for(n.flags|=128,bo(o,!1),t=f.updateQueue,n.updateQueue=t,Yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)lm(a,t),a=a.sibling;return he(cn,cn.current&1|2),wt&&na(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&It()>Jl&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Ol(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Yl(n,t),bo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!wt)return $t(n),null}else 2*It()-o.renderingStartTime>Jl&&a!==536870912&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=It(),t.sibling=null,a=cn.current,he(cn,u?a&1|2:a&1),wt&&na(n,o.treeForkCount),t):($t(n),null);case 22:case 23:return li(n),tf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&($t(n),n.subtreeFlags&6&&(n.flags|=8192)):$t(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Y(Ms),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),aa(pn),$t(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function cS(t,n){switch(Hu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return aa(pn),Ge(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(li(n),n.alternate===null)throw Error(s(340));vs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(li(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));vs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y(cn),null;case 4:return Ge(),null;case 10:return aa(n.type),null;case 22:case 23:return li(n),tf(),t!==null&&Y(Ms),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return aa(pn),null;case 25:return null;default:return null}}function Pg(t,n){switch(Hu(n),n.tag){case 3:aa(pn),Ge();break;case 26:case 27:case 5:Je(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&li(n);break;case 13:li(n);break;case 19:Y(cn);break;case 10:aa(n.type);break;case 22:case 23:li(n),tf(),t!==null&&Y(Ms);break;case 24:aa(pn)}}function To(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==u)}}catch(C){Xt(n,n.return,C)}}function Ha(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var x=o.inst,C=x.destroy;if(C!==void 0){x.destroy=void 0,u=n;var z=a,ie=C;try{ie()}catch(me){Xt(u,z,me)}}}o=o.next}while(o!==f)}}catch(me){Xt(n,n.return,me)}}function Ig(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Am(n,a)}catch(o){Xt(t,t.return,o)}}}function Fg(t,n,a){a.props=As(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Xt(t,n,o)}}function Ao(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Xt(t,n,u)}}function Gi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Xt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Xt(t,n,u)}else a.current=null}function Bg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Xt(t,t.return,u)}}function Of(t,n,a){try{var o=t.stateNode;US(o,t.type,a,n),o[wn]=n}catch(u){Xt(t,t.return,u)}}function zg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ya(t.type)||t.tag===4}function Pf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ya(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function If(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$i));else if(o!==4&&(o===27&&Ya(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(If(t,n,a),t=t.sibling;t!==null;)If(t,n,a),t=t.sibling}function Zl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ya(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Zl(t,n,a),t=t.sibling;t!==null;)Zl(t,n,a),t=t.sibling}function Hg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Ln(n,o,a),n[hn]=t,n[wn]=a}catch(f){Xt(t,t.return,f)}}var ca=!1,_n=!1,Ff=!1,Gg=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function uS(t,n){if(t=t.containerInfo,ah=mc,t=$p(t),wu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var x=0,C=-1,z=-1,ie=0,me=0,Se=t,le=null;t:for(;;){for(var ce;Se!==a||u!==0&&Se.nodeType!==3||(C=x+u),Se!==f||o!==0&&Se.nodeType!==3||(z=x+o),Se.nodeType===3&&(x+=Se.nodeValue.length),(ce=Se.firstChild)!==null;)le=Se,Se=ce;for(;;){if(Se===t)break t;if(le===a&&++ie===u&&(C=x),le===f&&++me===o&&(z=x),(ce=Se.nextSibling)!==null)break;Se=le,le=Se.parentNode}Se=ce}a=C===-1||z===-1?null:{start:C,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(sh={focusedElem:t,selectionRange:a},mc=!1,Tn=n;Tn!==null;)if(n=Tn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Tn=t;else for(;Tn!==null;){switch(n=Tn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ze=As(a.type,u);t=o.getSnapshotBeforeUpdate(Ze,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(at){Xt(a,a.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)lh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":lh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Tn=t;break}Tn=n.return}}function Vg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:fa(t,a),o&4&&To(5,a);break;case 1:if(fa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Xt(a,a.return,x)}else{var u=As(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Xt(a,a.return,x)}}o&64&&Ig(a),o&512&&Ao(a,a.return);break;case 3:if(fa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Am(t,n)}catch(x){Xt(a,a.return,x)}}break;case 27:n===null&&o&4&&Hg(a);case 26:case 5:fa(t,a),n===null&&o&4&&Bg(a),o&512&&Ao(a,a.return);break;case 12:fa(t,a);break;case 31:fa(t,a),o&4&&Wg(t,a);break;case 13:fa(t,a),o&4&&qg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=xS.bind(null,a),zS(t,a))));break;case 22:if(o=a.memoizedState!==null||ca,!o){n=n!==null&&n.memoizedState!==null||_n,u=ca;var f=_n;ca=o,(_n=n)&&!f?ha(t,a,(a.subtreeFlags&8772)!==0):fa(t,a),ca=u,_n=f}break;case 30:break;default:fa(t,a)}}function kg(t){var n=t.alternate;n!==null&&(t.alternate=null,kg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ra(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var sn=null,Kn=!1;function ua(t,n,a){for(a=a.child;a!==null;)Xg(t,n,a),a=a.sibling}function Xg(t,n,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(ue,a)}catch{}switch(a.tag){case 26:_n||Gi(a,n),ua(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_n||Gi(a,n);var o=sn,u=Kn;Ya(a.type)&&(sn=a.stateNode,Kn=!1),ua(t,n,a),Po(a.stateNode),sn=o,Kn=u;break;case 5:_n||Gi(a,n);case 6:if(o=sn,u=Kn,sn=null,ua(t,n,a),sn=o,Kn=u,sn!==null)if(Kn)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(a.stateNode)}catch(f){Xt(a,n,f)}else try{sn.removeChild(a.stateNode)}catch(f){Xt(a,n,f)}break;case 18:sn!==null&&(Kn?(t=sn,I0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),yr(t)):I0(sn,a.stateNode));break;case 4:o=sn,u=Kn,sn=a.stateNode.containerInfo,Kn=!0,ua(t,n,a),sn=o,Kn=u;break;case 0:case 11:case 14:case 15:Ha(2,a,n),_n||Ha(4,a,n),ua(t,n,a);break;case 1:_n||(Gi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Fg(a,n,o)),ua(t,n,a);break;case 21:ua(t,n,a);break;case 22:_n=(o=_n)||a.memoizedState!==null,ua(t,n,a),_n=o;break;default:ua(t,n,a)}}function Wg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{yr(t)}catch(a){Xt(n,n.return,a)}}}function qg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{yr(t)}catch(a){Xt(n,n.return,a)}}function fS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Gg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Gg),n;default:throw Error(s(435,t.tag))}}function Kl(t,n){var a=fS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=SS.bind(null,t,o);o.then(u,u)}})}function jn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,x=n,C=x;e:for(;C!==null;){switch(C.tag){case 27:if(Ya(C.type)){sn=C.stateNode,Kn=!1;break e}break;case 5:sn=C.stateNode,Kn=!1;break e;case 3:case 4:sn=C.stateNode.containerInfo,Kn=!0;break e}C=C.return}if(sn===null)throw Error(s(160));Xg(f,x,u),sn=null,Kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Yg(n,t),n=n.sibling}var wi=null;function Yg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:jn(n,t),Qn(t),o&4&&(Ha(3,t,t.return),To(3,t),Ha(5,t,t.return));break;case 1:jn(n,t),Qn(t),o&512&&(_n||a===null||Gi(a,a.return)),o&64&&ca&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=wi;if(jn(n,t),Qn(t),o&512&&(_n||a===null||Gi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Aa]||f[hn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Ln(f,o,a),f[hn]=t,dn(f),o=f;break e;case"link":var x=Y0("link","href",u).get(o+(a.href||""));if(x){for(var C=0;C<x.length;C++)if(f=x[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(C,1);break t}}f=u.createElement(o),Ln(f,o,a),u.head.appendChild(f);break;case"meta":if(x=Y0("meta","content",u).get(o+(a.content||""))){for(C=0;C<x.length;C++)if(f=x[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(C,1);break t}}f=u.createElement(o),Ln(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[hn]=t,dn(f),o=f}t.stateNode=o}else Z0(u,t.type,t.stateNode);else t.stateNode=q0(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Z0(u,t.type,t.stateNode):q0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Of(t,t.memoizedProps,a.memoizedProps)}break;case 27:jn(n,t),Qn(t),o&512&&(_n||a===null||Gi(a,a.return)),a!==null&&o&4&&Of(t,t.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,t),Qn(t),o&512&&(_n||a===null||Gi(a,a.return)),t.flags&32){u=t.stateNode;try{ai(u,"")}catch(Ze){Xt(t,t.return,Ze)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Of(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Ff=!0);break;case 6:if(jn(n,t),Qn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ze){Xt(t,t.return,Ze)}}break;case 3:if(fc=null,u=wi,wi=cc(n.containerInfo),jn(n,t),wi=u,Qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(Ze){Xt(t,t.return,Ze)}Ff&&(Ff=!1,Zg(t));break;case 4:o=wi,wi=cc(t.stateNode.containerInfo),jn(n,t),Qn(t),wi=o;break;case 12:jn(n,t),Qn(t);break;case 31:jn(n,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 13:jn(n,t),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ql=It()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,ie=ca,me=_n;if(ca=ie||u,_n=me||z,jn(n,t),_n=me,ca=ie,Qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||ca||_n||Rs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{C=z.stateNode;var Se=z.memoizedProps.style,le=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;C.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(Ze){Xt(z,z.return,Ze)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(Ze){Xt(z,z.return,Ze)}}}else if(n.tag===18){if(a===null){z=n;try{var ce=z.stateNode;u?F0(ce,!0):F0(z.stateNode,!1)}catch(Ze){Xt(z,z.return,Ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Kl(t,a))));break;case 19:jn(n,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 30:break;case 21:break;default:jn(n,t),Qn(t)}}function Qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(zg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Pf(t);Zl(t,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(ai(x,""),a.flags&=-33);var C=Pf(t);Zl(t,C,x);break;case 3:case 4:var z=a.stateNode.containerInfo,ie=Pf(t);If(t,ie,z);break;default:throw Error(s(161))}}catch(me){Xt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Zg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Zg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function fa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Vg(t,n.alternate,n),n=n.sibling}function Rs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ha(4,n,n.return),Rs(n);break;case 1:Gi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Fg(n,n.return,a),Rs(n);break;case 27:Po(n.stateNode);case 26:case 5:Gi(n,n.return),Rs(n);break;case 22:n.memoizedState===null&&Rs(n);break;case 30:Rs(n);break;default:Rs(n)}t=t.sibling}}function ha(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ha(u,f,a),To(4,f);break;case 1:if(ha(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){Xt(o,o.return,ie)}if(o=f,u=o.updateQueue,u!==null){var C=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Tm(z[u],C)}catch(ie){Xt(o,o.return,ie)}}a&&x&64&&Ig(f),Ao(f,f.return);break;case 27:Hg(f);case 26:case 5:ha(u,f,a),a&&o===null&&x&4&&Bg(f),Ao(f,f.return);break;case 12:ha(u,f,a);break;case 31:ha(u,f,a),a&&x&4&&Wg(u,f);break;case 13:ha(u,f,a),a&&x&4&&qg(u,f);break;case 22:f.memoizedState===null&&ha(u,f,a),Ao(f,f.return);break;case 30:break;default:ha(u,f,a)}n=n.sibling}}function Bf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&fo(a))}function zf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fo(t))}function Di(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Kg(t,n,a,o),n=n.sibling}function Kg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Di(t,n,a,o),u&2048&&To(9,n);break;case 1:Di(t,n,a,o);break;case 3:Di(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fo(t)));break;case 12:if(u&2048){Di(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,C=f.onPostCommit;typeof C=="function"&&C(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Xt(n,n.return,z)}}else Di(t,n,a,o);break;case 31:Di(t,n,a,o);break;case 13:Di(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Di(t,n,a,o):Ro(t,n):f._visibility&2?Di(t,n,a,o):(f._visibility|=2,fr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Bf(x,n);break;case 24:Di(t,n,a,o),u&2048&&zf(n.alternate,n);break;default:Di(t,n,a,o)}}function fr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,C=a,z=o,ie=x.flags;switch(x.tag){case 0:case 11:case 15:fr(f,x,C,z,u),To(8,x);break;case 23:break;case 22:var me=x.stateNode;x.memoizedState!==null?me._visibility&2?fr(f,x,C,z,u):Ro(f,x):(me._visibility|=2,fr(f,x,C,z,u)),u&&ie&2048&&Bf(x.alternate,x);break;case 24:fr(f,x,C,z,u),u&&ie&2048&&zf(x.alternate,x);break;default:fr(f,x,C,z,u)}n=n.sibling}}function Ro(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ro(a,o),u&2048&&Bf(o.alternate,o);break;case 24:Ro(a,o),u&2048&&zf(o.alternate,o);break;default:Ro(a,o)}n=n.sibling}}var Co=8192;function hr(t,n,a){if(t.subtreeFlags&Co)for(t=t.child;t!==null;)jg(t,n,a),t=t.sibling}function jg(t,n,a){switch(t.tag){case 26:hr(t,n,a),t.flags&Co&&t.memoizedState!==null&&QS(a,wi,t.memoizedState,t.memoizedProps);break;case 5:hr(t,n,a);break;case 3:case 4:var o=wi;wi=cc(t.stateNode.containerInfo),hr(t,n,a),wi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Co,Co=16777216,hr(t,n,a),Co=o):hr(t,n,a));break;default:hr(t,n,a)}}function Qg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function wo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,$g(o,t)}Qg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jg(t),t=t.sibling}function Jg(t){switch(t.tag){case 0:case 11:case 15:wo(t),t.flags&2048&&Ha(9,t,t.return);break;case 3:wo(t);break;case 12:wo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,jl(t)):wo(t);break;default:wo(t)}}function jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,$g(o,t)}Qg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,jl(n));break;default:jl(n)}t=t.sibling}}function $g(t,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:Ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:fo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Tn=o;else e:for(a=t;Tn!==null;){o=Tn;var u=o.sibling,f=o.return;if(kg(o),o===a){Tn=null;break e}if(u!==null){u.return=f,Tn=u;break e}Tn=f}}}var hS={getCacheForType:function(t){var n=Un(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Un(pn).controller.signal}},dS=typeof WeakMap=="function"?WeakMap:Map,Ot=0,jt=null,yt=null,Tt=0,kt=0,ci=null,Ga=!1,dr=!1,Hf=!1,da=0,ln=0,Va=0,Cs=0,Gf=0,ui=0,pr=0,Do=null,Jn=null,Vf=!1,Ql=0,e0=0,Jl=1/0,$l=null,ka=null,Sn=0,Xa=null,mr=null,pa=0,kf=0,Xf=null,t0=null,Uo=0,Wf=null;function fi(){return(Ot&2)!==0&&Tt!==0?Tt&-Tt:B.T!==null?Qf():$r()}function n0(){if(ui===0)if((Tt&536870912)===0||wt){var t=lt;lt<<=1,(lt&3932160)===0&&(lt=262144),ui=t}else ui=536870912;return t=oi.current,t!==null&&(t.flags|=32),ui}function $n(t,n,a){(t===jt&&(kt===2||kt===9)||t.cancelPendingCommit!==null)&&(gr(t,0),Wa(t,Tt,ui,!1)),We(t,a),((Ot&2)===0||t!==jt)&&(t===jt&&((Ot&2)===0&&(Cs|=a),ln===4&&Wa(t,Tt,ui,!1)),Vi(t))}function i0(t,n,a){if((Ot&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||De(t,n),u=o?gS(t,n):Yf(t,n,!0),f=o;do{if(u===0){dr&&!o&&Wa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!pS(a)){u=Yf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var C=t;u=Do;var z=C.current.memoizedState.isDehydrated;if(z&&(gr(C,x).flags|=256),x=Yf(C,x,!1),x!==2){if(Hf&&!z){C.errorRecoveryDisabledLanes|=f,Cs|=f,u=4;break e}f=Jn,Jn=u,f!==null&&(Jn===null?Jn=f:Jn.push.apply(Jn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){gr(t,0),Wa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Wa(o,n,ui,!Ga);break e;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ql+300-It(),10<u)){if(Wa(o,n,ui,!Ga),_e(o,0,!0)!==0)break e;pa=n,o.timeoutHandle=O0(a0.bind(null,o,a,Jn,$l,Vf,n,ui,Cs,pr,Ga,f,"Throttled",-0,0),u);break e}a0(o,a,Jn,$l,Vf,n,ui,Cs,pr,Ga,f,null,-0,0)}}break}while(!0);Vi(t)}function a0(t,n,a,o,u,f,x,C,z,ie,me,Se,le,ce){if(t.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},jg(n,f,Se);var Ze=(f&62914560)===f?Ql-It():(f&4194048)===f?e0-It():0;if(Ze=JS(Se,Ze),Ze!==null){pa=f,t.cancelPendingCommit=Ze(h0.bind(null,t,n,f,a,o,u,x,C,z,me,Se,null,le,ce)),Wa(t,f,x,!ie);return}}h0(t,n,f,a,o,u,x,C,z)}function pS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!si(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wa(t,n,a,o){n&=~Gf,n&=~Cs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Ve(u),x=1<<f;o[f]=-1,u&=~x}a!==0&&zt(t,a,n)}function ec(){return(Ot&6)===0?(No(0),!1):!0}function qf(){if(yt!==null){if(kt===0)var t=yt.return;else t=yt,ia=xs=null,lf(t),rr=null,po=0,t=yt;for(;t!==null;)Pg(t.alternate,t),t=t.return;yt=null}}function gr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,OS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),pa=0,qf(),jt=t,yt=a=ta(t.current,null),Tt=n,kt=0,ci=null,Ga=!1,dr=De(t,n),Hf=!1,pr=ui=Gf=Cs=Va=ln=0,Jn=Do=null,Vf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ve(o),f=1<<u;n|=t[u],o&=~f}return da=n,Ml(),a}function s0(t,n){mt=null,B.H=yo,n===sr||n===wl?(n=Mm(),kt=3):n===Ku?(n=Mm(),kt=4):kt=n===bf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ci=n,yt===null&&(ln=1,kl(t,vi(n,t.current)))}function r0(){var t=oi.current;return t===null?!0:(Tt&4194048)===Tt?yi===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===yi:!1}function o0(){var t=B.H;return B.H=yo,t===null?yo:t}function l0(){var t=B.A;return B.A=hS,t}function tc(){ln=4,Ga||(Tt&4194048)!==Tt&&oi.current!==null||(dr=!0),(Va&134217727)===0&&(Cs&134217727)===0||jt===null||Wa(jt,Tt,ui,!1)}function Yf(t,n,a){var o=Ot;Ot|=2;var u=o0(),f=l0();(jt!==t||Tt!==n)&&($l=null,gr(t,n)),n=!1;var x=ln;e:do try{if(kt!==0&&yt!==null){var C=yt,z=ci;switch(kt){case 8:qf(),x=6;break e;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var ie=kt;if(kt=0,ci=null,_r(t,C,z,ie),a&&dr){x=0;break e}break;default:ie=kt,kt=0,ci=null,_r(t,C,z,ie)}}mS(),x=ln;break}catch(me){s0(t,me)}while(!0);return n&&t.shellSuspendCounter++,ia=xs=null,Ot=o,B.H=u,B.A=f,yt===null&&(jt=null,Tt=0,Ml()),x}function mS(){for(;yt!==null;)c0(yt)}function gS(t,n){var a=Ot;Ot|=2;var o=o0(),u=l0();jt!==t||Tt!==n?($l=null,Jl=It()+500,gr(t,n)):dr=De(t,n);e:do try{if(kt!==0&&yt!==null){n=yt;var f=ci;t:switch(kt){case 1:kt=0,ci=null,_r(t,n,f,1);break;case 2:case 9:if(xm(f)){kt=0,ci=null,u0(n);break}n=function(){kt!==2&&kt!==9||jt!==t||(kt=7),Vi(t)},f.then(n,n);break e;case 3:kt=7;break e;case 4:kt=5;break e;case 7:xm(f)?(kt=0,ci=null,u0(n)):(kt=0,ci=null,_r(t,n,f,7));break;case 5:var x=null;switch(yt.tag){case 26:x=yt.memoizedState;case 5:case 27:var C=yt;if(x?K0(x):C.stateNode.complete){kt=0,ci=null;var z=C.sibling;if(z!==null)yt=z;else{var ie=C.return;ie!==null?(yt=ie,nc(ie)):yt=null}break t}}kt=0,ci=null,_r(t,n,f,5);break;case 6:kt=0,ci=null,_r(t,n,f,6);break;case 8:qf(),ln=6;break e;default:throw Error(s(462))}}_S();break}catch(me){s0(t,me)}while(!0);return ia=xs=null,B.H=o,B.A=u,Ot=a,yt!==null?0:(jt=null,Tt=0,Ml(),ln)}function _S(){for(;yt!==null&&!Pt();)c0(yt)}function c0(t){var n=Lg(t.alternate,t,da);t.memoizedProps=t.pendingProps,n===null?nc(t):yt=n}function u0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Rg(a,n,n.pendingProps,n.type,void 0,Tt);break;case 11:n=Rg(a,n,n.pendingProps,n.type.render,n.ref,Tt);break;case 5:lf(n);default:Pg(a,n),n=yt=lm(n,da),n=Lg(a,n,da)}t.memoizedProps=t.pendingProps,n===null?nc(t):yt=n}function _r(t,n,a,o){ia=xs=null,lf(n),rr=null,po=0;var u=n.return;try{if(sS(t,u,n,a,Tt)){ln=1,kl(t,vi(a,t.current)),yt=null;return}}catch(f){if(u!==null)throw yt=u,f;ln=1,kl(t,vi(a,t.current)),yt=null;return}n.flags&32768?(wt||o===1?t=!0:dr||(Tt&536870912)!==0?t=!1:(Ga=t=!0,(o===2||o===9||o===3||o===6)&&(o=oi.current,o!==null&&o.tag===13&&(o.flags|=16384))),f0(n,t)):nc(n)}function nc(t){var n=t;do{if((n.flags&32768)!==0){f0(n,Ga);return}t=n.return;var a=lS(n.alternate,n,da);if(a!==null){yt=a;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);ln===0&&(ln=5)}function f0(t,n){do{var a=cS(t.alternate,t);if(a!==null){a.flags&=32767,yt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=a}while(t!==null);ln=6,yt=null}function h0(t,n,a,o,u,f,x,C,z){t.cancelPendingCommit=null;do ic();while(Sn!==0);if((Ot&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Ou,tn(t,a,f,x,C,z),t===jt&&(yt=jt=null,Tt=0),mr=n,Xa=t,pa=a,kf=f,Xf=u,t0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,MS(Q,function(){return _0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=H.p,H.p=2,x=Ot,Ot|=4;try{uS(t,n,a)}finally{Ot=x,H.p=u,B.T=o}}Sn=1,d0(),p0(),m0()}}function d0(){if(Sn===1){Sn=0;var t=Xa,n=mr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=H.p;H.p=2;var u=Ot;Ot|=4;try{Yg(n,t);var f=sh,x=$p(t.containerInfo),C=f.focusedElem,z=f.selectionRange;if(x!==C&&C&&C.ownerDocument&&Jp(C.ownerDocument.documentElement,C)){if(z!==null&&wu(C)){var ie=z.start,me=z.end;if(me===void 0&&(me=ie),"selectionStart"in C)C.selectionStart=ie,C.selectionEnd=Math.min(me,C.value.length);else{var Se=C.ownerDocument||document,le=Se&&Se.defaultView||window;if(le.getSelection){var ce=le.getSelection(),Ze=C.textContent.length,at=Math.min(z.start,Ze),Yt=z.end===void 0?at:Math.min(z.end,Ze);!ce.extend&&at>Yt&&(x=Yt,Yt=at,at=x);var Z=Qp(C,at),V=Qp(C,Yt);if(Z&&V&&(ce.rangeCount!==1||ce.anchorNode!==Z.node||ce.anchorOffset!==Z.offset||ce.focusNode!==V.node||ce.focusOffset!==V.offset)){var te=Se.createRange();te.setStart(Z.node,Z.offset),ce.removeAllRanges(),at>Yt?(ce.addRange(te),ce.extend(V.node,V.offset)):(te.setEnd(V.node,V.offset),ce.addRange(te))}}}}for(Se=[],ce=C;ce=ce.parentNode;)ce.nodeType===1&&Se.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Se.length;C++){var xe=Se[C];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}mc=!!ah,sh=ah=null}finally{Ot=u,H.p=o,B.T=a}}t.current=n,Sn=2}}function p0(){if(Sn===2){Sn=0;var t=Xa,n=mr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=H.p;H.p=2;var u=Ot;Ot|=4;try{Vg(t,n.alternate,n)}finally{Ot=u,H.p=o,B.T=a}}Sn=3}}function m0(){if(Sn===4||Sn===3){Sn=0,X();var t=Xa,n=mr,a=pa,o=t0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,mr=Xa=null,g0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ka=null),Jr(a),n=n.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(ue,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=H.p,H.p=2,B.T=null;try{for(var f=t.onRecoverableError,x=0;x<o.length;x++){var C=o[x];f(C.value,{componentStack:C.stack})}}finally{B.T=n,H.p=u}}(pa&3)!==0&&ic(),Vi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Wf?Uo++:(Uo=0,Wf=t):Uo=0,No(0)}}function g0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,fo(n)))}function ic(){return d0(),p0(),m0(),_0()}function _0(){if(Sn!==5)return!1;var t=Xa,n=kf;kf=0;var a=Jr(pa),o=B.T,u=H.p;try{H.p=32>a?32:a,B.T=null,a=Xf,Xf=null;var f=Xa,x=pa;if(Sn=0,mr=Xa=null,pa=0,(Ot&6)!==0)throw Error(s(331));var C=Ot;if(Ot|=4,Jg(f.current),Kg(f,f.current,x,a),Ot=C,No(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(ue,f)}catch{}return!0}finally{H.p=u,B.T=o,g0(t,n)}}function v0(t,n,a){n=vi(a,n),n=Ef(t.stateNode,n,2),t=Fa(t,n,2),t!==null&&(We(t,2),Vi(t))}function Xt(t,n,a){if(t.tag===3)v0(t,t,a);else for(;n!==null;){if(n.tag===3){v0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){t=vi(a,t),a=xg(2),o=Fa(n,a,2),o!==null&&(Sg(a,o,n,t),We(o,2),Vi(o));break}}n=n.return}}function Zf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new dS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Hf=!0,u.add(a),t=vS.bind(null,t,n,a),n.then(t,t))}function vS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,jt===t&&(Tt&a)===a&&(ln===4||ln===3&&(Tt&62914560)===Tt&&300>It()-Ql?(Ot&2)===0&&gr(t,0):Gf|=a,pr===Tt&&(pr=0)),Vi(t)}function x0(t,n){n===0&&(n=be()),t=gs(t,n),t!==null&&(We(t,n),Vi(t))}function xS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),x0(t,a)}function SS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),x0(t,a)}function MS(t,n){return _t(t,n)}var ac=null,vr=null,Kf=!1,sc=!1,jf=!1,qa=0;function Vi(t){t!==vr&&t.next===null&&(vr===null?ac=vr=t:vr=vr.next=t),sc=!0,Kf||(Kf=!0,ES())}function No(t,n){if(!jf&&sc){jf=!0;do for(var a=!1,o=ac;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var x=o.suspendedLanes,C=o.pingedLanes;f=(1<<31-Ve(42|t)+1)-1,f&=u&~(x&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,E0(o,f))}else f=Tt,f=_e(o,o===jt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||De(o,f)||(a=!0,E0(o,f));o=o.next}while(a);jf=!1}}function yS(){S0()}function S0(){sc=Kf=!1;var t=0;qa!==0&&LS()&&(t=qa);for(var n=It(),a=null,o=ac;o!==null;){var u=o.next,f=M0(o,n);f===0?(o.next=null,a===null?ac=u:a.next=u,u===null&&(vr=a)):(a=o,(t!==0||(f&3)!==0)&&(sc=!0)),o=u}Sn!==0&&Sn!==5||No(t),qa!==0&&(qa=0)}function M0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Ve(f),C=1<<x,z=u[x];z===-1?((C&a)===0||(C&o)!==0)&&(u[x]=ze(C,n)):z<=n&&(t.expiredLanes|=C),f&=~C}if(n=jt,a=Tt,a=_e(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(kt===2||kt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&St(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||De(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&St(o),Jr(a)){case 2:case 8:a=E;break;case 32:a=Q;break;case 268435456:a=fe;break;default:a=Q}return o=y0.bind(null,t),a=_t(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&St(o),t.callbackPriority=2,t.callbackNode=null,2}function y0(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ic()&&t.callbackNode!==a)return null;var o=Tt;return o=_e(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(i0(t,o,n),M0(t,It()),t.callbackNode!=null&&t.callbackNode===a?y0.bind(null,t):null)}function E0(t,n){if(ic())return null;i0(t,n,!0)}function ES(){PS(function(){(Ot&6)!==0?_t(D,yS):S0()})}function Qf(){if(qa===0){var t=ir;t===0&&(t=et,et<<=1,(et&261888)===0&&(et=256)),qa=t}return qa}function b0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:hs(""+t)}function T0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function bS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=b0((u[wn]||null).action),x=o.submitter;x&&(n=(n=x[wn]||null)?b0(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var C=new _l("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(qa!==0){var z=x?T0(u,x):new FormData(u);_f(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(C.preventDefault(),z=x?T0(u,x):new FormData(u),_f(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var Jf=0;Jf<Lu.length;Jf++){var $f=Lu[Jf],TS=$f.toLowerCase(),AS=$f[0].toUpperCase()+$f.slice(1);Ci(TS,"on"+AS)}Ci(nm,"onAnimationEnd"),Ci(im,"onAnimationIteration"),Ci(am,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(Vx,"onTransitionRun"),Ci(kx,"onTransitionStart"),Ci(Xx,"onTransitionCancel"),Ci(sm,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),W("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),W("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),W("onBeforeInput",["compositionend","keypress","textInput","paste"]),W("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function A0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var C=o[x],z=C.instance,ie=C.currentTarget;if(C=C.listener,z!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ie;try{f(u)}catch(me){Sl(me)}u.currentTarget=null,f=z}else for(x=0;x<o.length;x++){if(C=o[x],z=C.instance,ie=C.currentTarget,C=C.listener,z!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ie;try{f(u)}catch(me){Sl(me)}u.currentTarget=null,f=z}}}}function Et(t,n){var a=n[cs];a===void 0&&(a=n[cs]=new Set);var o=t+"__bubble";a.has(o)||(R0(n,t,2,!1),a.add(o))}function eh(t,n,a){var o=0;n&&(o|=4),R0(a,t,o,n)}var rc="_reactListening"+Math.random().toString(36).slice(2);function th(t){if(!t[rc]){t[rc]=!0,dl.forEach(function(a){a!=="selectionchange"&&(RS.has(a)||eh(a,!1,t),eh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[rc]||(n[rc]=!0,eh("selectionchange",!1,n))}}function R0(t,n,a,o){switch(n_(n)){case 2:var u=tM;break;case 8:u=nM;break;default:u=gh}a=u.bind(null,n,a,t),u=void 0,!Su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function nh(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var C=o.stateNode.containerInfo;if(C===u)break;if(x===4)for(x=o.return;x!==null;){var z=x.tag;if((z===3||z===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;C!==null;){if(x=Qi(C),x===null)return;if(z=x.tag,z===5||z===6||z===26||z===27){o=f=x;continue e}C=C.parentNode}}o=o.return}Np(function(){var ie=f,me=vu(a),Se=[];e:{var le=rm.get(t);if(le!==void 0){var ce=_l,Ze=t;switch(t){case"keypress":if(ml(a)===0)break e;case"keydown":case"keyup":ce=Sx;break;case"focusin":Ze="focus",ce=bu;break;case"focusout":Ze="blur",ce=bu;break;case"beforeblur":case"afterblur":ce=bu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=Ex;break;case nm:case im:case am:ce=fx;break;case sm:ce=Tx;break;case"scroll":case"scrollend":ce=rx;break;case"wheel":ce=Rx;break;case"copy":case"cut":case"paste":ce=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Fp;break;case"toggle":case"beforetoggle":ce=wx}var at=(n&4)!==0,Yt=!at&&(t==="scroll"||t==="scrollend"),Z=at?le!==null?le+"Capture":null:le;at=[];for(var V=ie,te;V!==null;){var xe=V;if(te=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||te===null||Z===null||(xe=eo(V,Z),xe!=null&&at.push(Oo(V,xe,te))),Yt)break;V=V.return}0<at.length&&(le=new ce(le,Ze,null,a,me),Se.push({event:le,listeners:at}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",le&&a!==_u&&(Ze=a.relatedTarget||a.fromElement)&&(Qi(Ze)||Ze[Yn]))break e;if((ce||le)&&(le=me.window===me?me:(le=me.ownerDocument)?le.defaultView||le.parentWindow:window,ce?(Ze=a.relatedTarget||a.toElement,ce=ie,Ze=Ze?Qi(Ze):null,Ze!==null&&(Yt=c(Ze),at=Ze.tag,Ze!==Yt||at!==5&&at!==27&&at!==6)&&(Ze=null)):(ce=null,Ze=ie),ce!==Ze)){if(at=Pp,xe="onMouseLeave",Z="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(at=Fp,xe="onPointerLeave",Z="onPointerEnter",V="pointer"),Yt=ce==null?le:fs(ce),te=Ze==null?le:fs(Ze),le=new at(xe,V+"leave",ce,a,me),le.target=Yt,le.relatedTarget=te,xe=null,Qi(me)===ie&&(at=new at(Z,V+"enter",Ze,a,me),at.target=te,at.relatedTarget=Yt,xe=at),Yt=xe,ce&&Ze)t:{for(at=CS,Z=ce,V=Ze,te=0,xe=Z;xe;xe=at(xe))te++;xe=0;for(var nt=V;nt;nt=at(nt))xe++;for(;0<te-xe;)Z=at(Z),te--;for(;0<xe-te;)V=at(V),xe--;for(;te--;){if(Z===V||V!==null&&Z===V.alternate){at=Z;break t}Z=at(Z),V=at(V)}at=null}else at=null;ce!==null&&C0(Se,le,ce,at,!1),Ze!==null&&Yt!==null&&C0(Se,Yt,Ze,at,!0)}}e:{if(le=ie?fs(ie):window,ce=le.nodeName&&le.nodeName.toLowerCase(),ce==="select"||ce==="input"&&le.type==="file")var Nt=Wp;else if(kp(le))if(qp)Nt=zx;else{Nt=Fx;var je=Ix}else ce=le.nodeName,!ce||ce.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ie&&Ft(ie.elementType)&&(Nt=Wp):Nt=Bx;if(Nt&&(Nt=Nt(t,ie))){Xp(Se,Nt,a,me);break e}je&&je(t,le,ie),t==="focusout"&&ie&&le.type==="number"&&ie.memoizedProps.value!=null&&Mt(le,"number",le.value)}switch(je=ie?fs(ie):window,t){case"focusin":(kp(je)||je.contentEditable==="true")&&(Ks=je,Du=ie,lo=null);break;case"focusout":lo=Du=Ks=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,em(Se,a,me);break;case"selectionchange":if(Gx)break;case"keydown":case"keyup":em(Se,a,me)}var gt;if(Au)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else Zs?Gp(t,a)&&(At="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(At="onCompositionStart");At&&(Bp&&a.locale!=="ko"&&(Zs||At!=="onCompositionStart"?At==="onCompositionEnd"&&Zs&&(gt=Lp()):(Da=me,Mu="value"in Da?Da.value:Da.textContent,Zs=!0)),je=oc(ie,At),0<je.length&&(At=new Ip(At,t,null,a,me),Se.push({event:At,listeners:je}),gt?At.data=gt:(gt=Vp(a),gt!==null&&(At.data=gt)))),(gt=Ux?Nx(t,a):Lx(t,a))&&(At=oc(ie,"onBeforeInput"),0<At.length&&(je=new Ip("onBeforeInput","beforeinput",null,a,me),Se.push({event:je,listeners:At}),je.data=gt)),bS(Se,t,ie,a,me)}A0(Se,n)})}function Oo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function oc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=eo(t,a),u!=null&&o.unshift(Oo(t,u,f)),u=eo(t,n),u!=null&&o.push(Oo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function CS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function C0(t,n,a,o,u){for(var f=n._reactName,x=[];a!==null&&a!==o;){var C=a,z=C.alternate,ie=C.stateNode;if(C=C.tag,z!==null&&z===o)break;C!==5&&C!==26&&C!==27||ie===null||(z=ie,u?(ie=eo(a,f),ie!=null&&x.unshift(Oo(a,ie,z))):u||(ie=eo(a,f),ie!=null&&x.push(Oo(a,ie,z)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var wS=/\r\n?/g,DS=/\u0000|\uFFFD/g;function w0(t){return(typeof t=="string"?t:""+t).replace(wS,`
`).replace(DS,"")}function D0(t,n){return n=w0(n),w0(t)===n}function qt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ai(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ai(t,""+o);break;case"className":Ye(t,"class",o);break;case"tabIndex":Ye(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ye(t,a,o);break;case"style":Ri(t,o,f);break;case"data":if(n!=="object"){Ye(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=hs(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&qt(t,n,"name",u.name,u,null),qt(t,n,"formEncType",u.formEncType,u,null),qt(t,n,"formMethod",u.formMethod,u,null),qt(t,n,"formTarget",u.formTarget,u,null)):(qt(t,n,"encType",u.encType,u,null),qt(t,n,"method",u.method,u,null),qt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=hs(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=$i);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=hs(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Le(t,"popover",o);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Le(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bi.get(a)||a,Le(t,a,o))}}function ih(t,n,a,o,u,f){switch(a){case"style":Ri(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ai(t,o):(typeof o=="number"||typeof o=="bigint")&&ai(t,""+o);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"onClick":o!=null&&(t.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[wn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Le(t,a,o)}}}function Ln(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(t,n,f,x,a,null)}}u&&qt(t,n,"srcSet",a.srcSet,a,null),o&&qt(t,n,"src",a.src,a,null);return;case"input":Et("invalid",t);var C=f=x=u=null,z=null,ie=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":x=me;break;case"checked":z=me;break;case"defaultChecked":ie=me;break;case"value":f=me;break;case"defaultValue":C=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:qt(t,n,o,me,a,null)}}Fn(t,f,C,z,ie,x,u,!1);return;case"select":Et("invalid",t),o=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":x=C;break;case"multiple":o=C;default:qt(t,n,u,C,a,null)}n=f,a=x,t.multiple=!!o,n!=null?xn(t,!!o,n,!1):a!=null&&xn(t,!!o,a,!0);return;case"textarea":Et("invalid",t),f=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(C=a[x],C!=null))switch(x){case"value":o=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:qt(t,n,x,C,a,null)}Ai(t,o,u,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:qt(t,n,z,o,a,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(o=0;o<Lo.length;o++)Et(Lo[o],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(o=a[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(t,n,ie,o,a,null)}return;default:if(Ft(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&ih(t,n,me,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&qt(t,n,C,o,a,null))}function US(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,C=null,z=null,ie=null,me=null;for(ce in a){var Se=a[ce];if(a.hasOwnProperty(ce)&&Se!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":z=Se;default:o.hasOwnProperty(ce)||qt(t,n,ce,null,o,Se)}}for(var le in o){var ce=o[le];if(Se=a[le],o.hasOwnProperty(le)&&(ce!=null||Se!=null))switch(le){case"type":f=ce;break;case"name":u=ce;break;case"checked":ie=ce;break;case"defaultChecked":me=ce;break;case"value":x=ce;break;case"defaultValue":C=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==Se&&qt(t,n,le,ce,o,Se)}}ke(t,x,C,z,ie,me,f,u);return;case"select":ce=x=C=le=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":ce=z;default:o.hasOwnProperty(f)||qt(t,n,f,null,o,z)}for(u in o)if(f=o[u],z=a[u],o.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":le=f;break;case"defaultValue":C=f;break;case"multiple":x=f;default:f!==z&&qt(t,n,u,f,o,z)}n=C,a=x,o=ce,le!=null?xn(t,!!a,le,!1):!!o!=!!a&&(n!=null?xn(t,!!a,n,!0):xn(t,!!a,a?[]:"",!1));return;case"textarea":ce=le=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:qt(t,n,C,null,o,u)}for(x in o)if(u=o[x],f=a[x],o.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":le=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&qt(t,n,x,u,o,f)}ii(t,le,ce);return;case"option":for(var Ze in a)if(le=a[Ze],a.hasOwnProperty(Ze)&&le!=null&&!o.hasOwnProperty(Ze))switch(Ze){case"selected":t.selected=!1;break;default:qt(t,n,Ze,null,o,le)}for(z in o)if(le=o[z],ce=a[z],o.hasOwnProperty(z)&&le!==ce&&(le!=null||ce!=null))switch(z){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:qt(t,n,z,le,o,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in a)le=a[at],a.hasOwnProperty(at)&&le!=null&&!o.hasOwnProperty(at)&&qt(t,n,at,null,o,le);for(ie in o)if(le=o[ie],ce=a[ie],o.hasOwnProperty(ie)&&le!==ce&&(le!=null||ce!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:qt(t,n,ie,le,o,ce)}return;default:if(Ft(n)){for(var Yt in a)le=a[Yt],a.hasOwnProperty(Yt)&&le!==void 0&&!o.hasOwnProperty(Yt)&&ih(t,n,Yt,void 0,o,le);for(me in o)le=o[me],ce=a[me],!o.hasOwnProperty(me)||le===ce||le===void 0&&ce===void 0||ih(t,n,me,le,o,ce);return}}for(var Z in a)le=a[Z],a.hasOwnProperty(Z)&&le!=null&&!o.hasOwnProperty(Z)&&qt(t,n,Z,null,o,le);for(Se in o)le=o[Se],ce=a[Se],!o.hasOwnProperty(Se)||le===ce||le==null&&ce==null||qt(t,n,Se,le,o,ce)}function U0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function NS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,x=u.initiatorType,C=u.duration;if(f&&C&&U0(x)){for(x=0,C=u.responseEnd,o+=1;o<a.length;o++){var z=a[o],ie=z.startTime;if(ie>C)break;var me=z.transferSize,Se=z.initiatorType;me&&U0(Se)&&(z=z.responseEnd,x+=me*(z<C?1:(C-ie)/(z-ie)))}if(--o,n+=8*(f+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ah=null,sh=null;function lc(t){return t.nodeType===9?t:t.ownerDocument}function N0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function L0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function rh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var oh=null;function LS(){var t=window.event;return t&&t.type==="popstate"?t===oh?!1:(oh=t,!0):(oh=null,!1)}var O0=typeof setTimeout=="function"?setTimeout:void 0,OS=typeof clearTimeout=="function"?clearTimeout:void 0,P0=typeof Promise=="function"?Promise:void 0,PS=typeof queueMicrotask=="function"?queueMicrotask:typeof P0<"u"?function(t){return P0.resolve(null).then(t).catch(IS)}:O0;function IS(t){setTimeout(function(){throw t})}function Ya(t){return t==="head"}function I0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),yr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Po(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Po(a);for(var f=a.firstChild;f;){var x=f.nextSibling,C=f.nodeName;f[Aa]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Po(t.ownerDocument.body);a=u}while(a);yr(n)}function F0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function lh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":lh(a),Ra(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function FS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Aa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function BS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ei(t.nextSibling),t===null))return null;return t}function B0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ei(t.nextSibling),t===null))return null;return t}function ch(t){return t.data==="$?"||t.data==="$~"}function uh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function zS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var fh=null;function z0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function H0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function G0(t,n,a){switch(n=lc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Po(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ra(t)}var bi=new Map,V0=new Set;function cc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ma=H.d;H.d={f:HS,r:GS,D:VS,C:kS,L:XS,m:WS,X:YS,S:qS,M:ZS};function HS(){var t=ma.f(),n=ec();return t||n}function GS(t){var n=Ji(t);n!==null&&n.tag===5&&n.type==="form"?sg(n):ma.r(t)}var xr=typeof document>"u"?null:document;function k0(t,n,a){var o=xr;if(o&&typeof n=="string"&&n){var u=Gt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),V0.has(u)||(V0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Ln(n,"link",t),dn(n),o.head.appendChild(n)))}}function VS(t){ma.D(t),k0("dns-prefetch",t,null)}function kS(t,n){ma.C(t,n),k0("preconnect",t,n)}function XS(t,n,a){ma.L(t,n,a);var o=xr;if(o&&t&&n){var u='link[rel="preload"][as="'+Gt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Gt(a.imageSizes)+'"]')):u+='[href="'+Gt(t)+'"]';var f=u;switch(n){case"style":f=Sr(t);break;case"script":f=Mr(t)}bi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),bi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Io(f))||n==="script"&&o.querySelector(Fo(f))||(n=o.createElement("link"),Ln(n,"link",t),dn(n),o.head.appendChild(n)))}}function WS(t,n){ma.m(t,n);var a=xr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Gt(o)+'"][href="'+Gt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Mr(t)}if(!bi.has(f)&&(t=v({rel:"modulepreload",href:t},n),bi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fo(f)))return}o=a.createElement("link"),Ln(o,"link",t),dn(o),a.head.appendChild(o)}}}function qS(t,n,a){ma.S(t,n,a);var o=xr;if(o&&t){var u=Ca(o).hoistableStyles,f=Sr(t);n=n||"default";var x=u.get(f);if(!x){var C={loading:0,preload:null};if(x=o.querySelector(Io(f)))C.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=bi.get(f))&&hh(t,a);var z=x=o.createElement("link");dn(z),Ln(z,"link",t),z._p=new Promise(function(ie,me){z.onload=ie,z.onerror=me}),z.addEventListener("load",function(){C.loading|=1}),z.addEventListener("error",function(){C.loading|=2}),C.loading|=4,uc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:C},u.set(f,x)}}}function YS(t,n){ma.X(t,n);var a=xr;if(a&&t){var o=Ca(a).hoistableScripts,u=Mr(t),f=o.get(u);f||(f=a.querySelector(Fo(u)),f||(t=v({src:t,async:!0},n),(n=bi.get(u))&&dh(t,n),f=a.createElement("script"),dn(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function ZS(t,n){ma.M(t,n);var a=xr;if(a&&t){var o=Ca(a).hoistableScripts,u=Mr(t),f=o.get(u);f||(f=a.querySelector(Fo(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=bi.get(u))&&dh(t,n),f=a.createElement("script"),dn(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function X0(t,n,a,o){var u=(u=ne.current)?cc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Sr(a.href),a=Ca(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Sr(a.href);var f=Ca(u).hoistableStyles,x=f.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=u.querySelector(Io(t)))&&!f._p&&(x.instance=f,x.state.loading=5),bi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(t,a),f||KS(u,t,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Mr(a),a=Ca(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Sr(t){return'href="'+Gt(t)+'"'}function Io(t){return'link[rel="stylesheet"]['+t+"]"}function W0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function KS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ln(n,"link",a),dn(n),t.head.appendChild(n))}function Mr(t){return'[src="'+Gt(t)+'"]'}function Fo(t){return"script[async]"+t}function q0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Gt(a.href)+'"]');if(o)return n.instance=o,dn(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),dn(o),Ln(o,"style",u),uc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Sr(a.href);var f=t.querySelector(Io(u));if(f)return n.state.loading|=4,n.instance=f,dn(f),f;o=W0(a),(u=bi.get(u))&&hh(o,u),f=(t.ownerDocument||t).createElement("link"),dn(f);var x=f;return x._p=new Promise(function(C,z){x.onload=C,x.onerror=z}),Ln(f,"link",o),n.state.loading|=4,uc(f,a.precedence,t),n.instance=f;case"script":return f=Mr(a.src),(u=t.querySelector(Fo(f)))?(n.instance=u,dn(u),u):(o=a,(u=bi.get(f))&&(o=v({},a),dh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),dn(u),Ln(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uc(o,a.precedence,t));return n.instance}function uc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,x=0;x<o.length;x++){var C=o[x];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function hh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function dh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var fc=null;function Y0(t,n,a){if(fc===null){var o=new Map,u=fc=new Map;u.set(a,o)}else u=fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Aa]||f[hn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var C=o.get(x);C?C.push(f):o.set(x,[f])}}return o}function Z0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function jS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function K0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function QS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Sr(o.href),f=n.querySelector(Io(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=hc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,dn(f);return}f=n.ownerDocument||n,o=W0(o),(u=bi.get(u))&&hh(o,u),f=f.createElement("link"),dn(f);var x=f;x._p=new Promise(function(C,z){x.onload=C,x.onerror=z}),Ln(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=hc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ph=0;function JS(t,n){return t.stylesheets&&t.count===0&&pc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ph===0&&(ph=62500*NS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ph?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var dc=null;function pc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,dc=new Map,n.forEach($S,t),dc=null,hc.call(t))}function $S(t,n){if(!(n.state.loading&4)){var a=dc.get(t);if(a)var o=a.get(null);else{a=new Map,dc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,u),a.set(x,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Bo={$$typeof:I,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function eM(t,n,a,o,u,f,x,C,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ke(0),this.hiddenUpdates=Ke(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function j0(t,n,a,o,u,f,x,C,z,ie,me,Se){return t=new eM(t,n,a,x,z,ie,me,Se,C),n=1,f===!0&&(n|=24),f=ri(3,null,null,n),t.current=f,f.stateNode=t,n=qu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},ju(f),t}function Q0(t){return t?(t=Js,t):Js}function J0(t,n,a,o,u,f){u=Q0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ia(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Fa(t,o,n),a!==null&&($n(a,t,n),go(a,t,n))}function $0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function mh(t,n){$0(t,n),(t=t.alternate)&&$0(t,n)}function e_(t){if(t.tag===13||t.tag===31){var n=gs(t,67108864);n!==null&&$n(n,t,67108864),mh(t,67108864)}}function t_(t){if(t.tag===13||t.tag===31){var n=fi();n=Qr(n);var a=gs(t,n);a!==null&&$n(a,t,n),mh(t,n)}}var mc=!0;function tM(t,n,a,o){var u=B.T;B.T=null;var f=H.p;try{H.p=2,gh(t,n,a,o)}finally{H.p=f,B.T=u}}function nM(t,n,a,o){var u=B.T;B.T=null;var f=H.p;try{H.p=8,gh(t,n,a,o)}finally{H.p=f,B.T=u}}function gh(t,n,a,o){if(mc){var u=_h(o);if(u===null)nh(t,n,o,gc,a),i_(t,o);else if(aM(u,t,n,a,o))o.stopPropagation();else if(i_(t,o),n&4&&-1<iM.indexOf(t)){for(;u!==null;){var f=Ji(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Ce(f.pendingLanes);if(x!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;x;){var z=1<<31-Ve(x);C.entanglements[1]|=z,x&=~z}Vi(f),(Ot&6)===0&&(Jl=It()+500,No(0))}}break;case 31:case 13:C=gs(f,2),C!==null&&$n(C,f,2),ec(),mh(f,2)}if(f=_h(o),f===null&&nh(t,n,o,gc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else nh(t,n,o,null,a)}}function _h(t){return t=vu(t),vh(t)}var gc=null;function vh(t){if(gc=null,t=Qi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return gc=t,null}function n_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case D:return 2;case E:return 8;case Q:case re:return 32;case fe:return 268435456;default:return 32}default:return 32}}var xh=!1,Za=null,Ka=null,ja=null,zo=new Map,Ho=new Map,Qa=[],iM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function i_(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(n.pointerId)}}function Go(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ji(n),n!==null&&e_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function aM(t,n,a,o,u){switch(n){case"focusin":return Za=Go(Za,t,n,a,o,u),!0;case"dragenter":return Ka=Go(Ka,t,n,a,o,u),!0;case"mouseover":return ja=Go(ja,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return zo.set(f,Go(zo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Ho.set(f,Go(Ho.get(f)||null,t,n,a,o,u)),!0}return!1}function a_(t){var n=Qi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ws(t.priority,function(){t_(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Ws(t.priority,function(){t_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _c(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=_h(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);_u=o,a.target.dispatchEvent(o),_u=null}else return n=Ji(a),n!==null&&e_(n),t.blockedOn=a,!1;n.shift()}return!0}function s_(t,n,a){_c(t)&&a.delete(n)}function sM(){xh=!1,Za!==null&&_c(Za)&&(Za=null),Ka!==null&&_c(Ka)&&(Ka=null),ja!==null&&_c(ja)&&(ja=null),zo.forEach(s_),Ho.forEach(s_)}function vc(t,n){t.blockedOn===n&&(t.blockedOn=null,xh||(xh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,sM)))}var xc=null;function r_(t){xc!==t&&(xc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xc===t&&(xc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(vh(o||a)===null)continue;break}var f=Ji(a);f!==null&&(t.splice(n,3),n-=3,_f(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function yr(t){function n(z){return vc(z,t)}Za!==null&&vc(Za,t),Ka!==null&&vc(Ka,t),ja!==null&&vc(ja,t),zo.forEach(n),Ho.forEach(n);for(var a=0;a<Qa.length;a++){var o=Qa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Qa.length&&(a=Qa[0],a.blockedOn===null);)a_(a),a.blockedOn===null&&Qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],x=u[wn]||null;if(typeof f=="function")x||r_(a);else if(x){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[wn]||null)C=x.formAction;else if(vh(u)!==null)continue}else C=x.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),r_(a)}}}function o_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Sh(t){this._internalRoot=t}Sc.prototype.render=Sh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=fi();J0(a,o,t,n,null,null)},Sc.prototype.unmount=Sh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;J0(t.current,2,null,t,null,null),ec(),n[Yn]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=$r();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Qa.length&&n!==0&&n<Qa[a].priority;a++);Qa.splice(a,0,t),a===0&&a_(t)}};var l_=e.version;if(l_!=="19.2.7")throw Error(s(527,l_,"19.2.7"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=d(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var rM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{ue=Mc.inject(rM),de=Mc}catch{}}return ko.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=mg,f=gg,x=_g;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=j0(t,1,!1,null,null,a,o,null,u,f,x,o_),t[Yn]=n.current,th(t),new Sh(n)},ko.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=mg,x=gg,C=_g,z=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=j0(t,1,!0,n,a??null,o,u,z,f,x,C,o_),n.context=Q0(null),a=n.current,o=fi(),o=Qr(o),u=Ia(o),u.callback=null,Fa(a,u,o),a=o,n.current.lanes=a,We(n,a),Vi(n),t[Yn]=n.current,th(t),new Sc(n)},ko.version="19.2.7",ko}var v_;function gM(){if(v_)return yh.exports;v_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),yh.exports=mM(),yh.exports}var _M=gM(),Qt=np();const On={url:"https://zaidmajkhan.github.io",plausibleDomain:"zaidmajkhan.github.io",resumeUrl:"/assets/Zaid%20Khan%20-%20Main%20Resume.pdf",resumeDownloadName:"Zaid Khan - Main Resume.pdf",contactEmail:"zaidmajkhan@gmail.com",formspreeEndpoint:"",web3formsAccessKey:"",formsubmitEmail:"zaidmajkhan@gmail.com",githubUrl:"https://github.com/zaidmajkhan",twitterUrl:"https://x.com/zaidmajkhan",newsletterUrl:"https://buttondown.com/zaidkhan",linkedinUrl:"https://linkedin.com/in/zaidmajkhan",phone:"(469) 919-8378"},nu=[{id:"origin",label:"ORIGIN",subtitle:"Who I am",x:50,y:34,size:"lg",texture:"/assets/planets/portal.png",glow:"#c9a0ff",featured:!0,status:"ACTIVE"},{id:"labs",label:"LABS",subtitle:"Research & roles",x:22,y:22,size:"md",texture:"/assets/planets/ice.png",glow:"#9ec9ff",status:"4.0 GPA"},{id:"systems",label:"SYSTEMS",subtitle:"Projects & builds",x:76,y:24,size:"md",texture:"/assets/planets/verdant.png",glow:"#7dffb2",status:"SHIPPED"},{id:"triumph",label:"TRIUMPH",subtitle:"Proof & credentials",x:18,y:52,size:"sm",texture:"/assets/planets/amber.png",glow:"#ffc56e",status:"TOP 6%"},{id:"signal",label:"SIGNAL",subtitle:"Get in touch",x:84,y:50,size:"md",texture:"/assets/planets/cyan.png",glow:"#7ed0ef",status:"OPEN"},{id:"dossier",label:"DOSSIER",subtitle:"Resume PDF",x:50,y:58,size:"sm",texture:"/assets/planets/steel.png",glow:"#c5d4e8",status:"PDF",external:On.resumeUrl,download:On.resumeDownloadName}],vM=[{id:"resume",label:"RESUME",href:On.resumeUrl,download:!0},{id:"labs",label:"LABS",destination:"labs"},{id:"systems",label:"SYSTEMS",destination:"systems"},{id:"map",label:"MAP",destination:null},{id:"destinations",label:"DESTINATIONS",destination:null,active:!0}],xM=[{id:"origin",label:"Origin",color:"#b48cff",icon:"core"},{id:"labs",label:"Labs",color:"#9ec9ff",icon:"orbit"},{id:"systems",label:"Systems",color:"#7dffb2",icon:"hex"},{id:"triumph",label:"Triumph",color:"#ffc56e",icon:"mark"},{id:"signal",label:"Signal",color:"#7ed0ef",icon:"pulse"}],Rh={body:"I grew up watching my family navigate a healthcare system that felt designed to lose people in the cracks. An engineer looks at that and sees fixable problems — and the toolkit is software as much as operations: Python agents, human-centered research, and pharmacy-floor process design.",currently:[["Studying","ISEN @ Texas A&M","4.0 GPA · Dec 2028"],["Researching","ACE Lab + HFCS Lab","HCD interviews · haptic teleoperation (Dr. Ferris)"],["Building","AI Lead Follow-Up Agent","Python, Claude API, Gmail API · GitHub Actions CI/CD"],["Working","CPhT · CVS Health","200+ patients/day · 47% wait reduction"],["Also","Handshake AI · Project Lighthouse","Finance prompts + grading rubrics for frontier models"]],skills:["Python","Java","JavaScript","Claude API","CI/CD","Prompt engineering","Process improvement","Root cause analysis","Operations leadership"]},SM=[{date:"Jul 2026 — Now",type:"Research",title:"ACE Lab, Texas A&M — Undergraduate Researcher (Dr. Sasangohar, Dr. Smith)",body:"CITI human-subjects + Huron IRB certified. Structured parent/caregiver interviews for a parenting coaching app — qualitative methods and human-centered design on usability and engagement."},{date:"Jul 2026 — Now",type:"Research",title:"Human Factors & Cognitive Systems Lab — Research Volunteer (Dr. Ferris)",body:"Developing a multi-year research plan with Dr. Thomas Ferris, focused on the lab’s haptic teleoperation project for remote medical examination."},{date:"Mar 2025 — Now",type:"Healthcare",title:"CVS Health — Certified Pharmacy Technician",body:"RxConnect for 200+ patients daily. Peak-hour task sequencing rewrite — 47% wait reduction. Licensed CPhT (PTCB) + Texas RPhT."},{date:"Jun 2026 — Now",type:"AI",title:"Handshake AI — Fellow, Project Lighthouse",body:"Write persona-grounded finance prompts that stress-test frontier models against synthetic financial workspace data. Build and score grading rubrics for accuracy and reasoning quality."},{date:"2025 — Dec 2028",type:"Education",title:"Texas A&M — B.S. Industrial & Systems Engineering",body:"4.0 GPA. Coursework includes CSCE 111, ISEN 210, STAT 211, Java. Sole winner of the TAMU Engineering Academies Resume Challenge across 13 Academy campuses."},{date:"2021 — 2026",type:"Operations",title:"IACC Sunday School — Operations Team Leader / Teacher",body:"Facility and classroom ops for 600+ students weekly. Teacher setup redesign — 73% time cut, adopted program-wide."}],MM=[{num:"01",title:"AI Lead Follow-Up Agent",tag:"Shipped",cat:"Python · Claude · Gmail",body:"Autonomous outreach: JSON leads → Claude-personalized campaigns → Gmail OAuth. Dry-run mode, sent-tracking dedup, rate limiting, structured errors, GitHub Actions CI/CD.",href:"https://github.com/zaidmajkhan/lead-followup-agent"},{num:"02",title:"ACE Lab + HFCS Lab",tag:"Active",cat:"Human-centered design",body:"Parent/caregiver interviews for a coaching app (CITI/IRB). Multi-year plan with Dr. Ferris on haptic teleoperation for remote medical exam.",href:null},{num:"03",title:"CVS Pharmacy Workflow",tag:"Live",cat:"Process",body:"High-volume RxConnect ops for 200+ patients daily. Peak-hour sequencing rewrite drove a 47% wait-time cut — measured from floor data.",href:null},{num:"04",title:"Handshake AI · Project Lighthouse",tag:"Active",cat:"Model evaluation",body:"Frontier model evaluation: persona-grounded finance prompts and grading rubrics for accuracy and reasoning quality.",href:null},{num:"05",title:"Wharton Investment Comp",tag:"Top 6%",cat:"Strategy",body:"Investment Club · Founders Classical Academy · ~4,000 teams worldwide.",href:null}],yM=[{year:"Jul '26",title:"CITI / Huron IRB",badge:"Certified",desc:"Human subjects training for ACE Lab research."},{year:"Oct '25",title:"CPhT (PTCB) + Texas RPhT",badge:"Licensed",desc:"National PTCB exam and Texas State Board of Pharmacy registration."},{year:"Aug '26",title:"Nebius Agentic AI Builder",badge:"Certified",desc:"Agentic AI builder certification."},{year:"Fall '25",title:"Engineering Academies Resume Challenge",badge:"Winner",desc:"Sole winner across all 13 TAMU Engineering Academy campuses."},{year:"Jun '26",title:"Handshake AI — Project Lighthouse Fellow",badge:"Active",desc:"Frontier model evaluation: finance prompts and grading rubrics."},{year:"2023–25",title:"Wharton Global Investment Competition",badge:"Top 6%",desc:"Investment Club · Founders Classical Academy · ~4,000 teams."},{year:"2024–25",title:"Senior Thesis — The Rise and Fall of Empires",badge:"Published",desc:"40-page interdisciplinary analysis of systemic collapse."}],wv=[{val:"4.0",label:"GPA"},{val:"47%",label:"Wait ↓"},{val:"CPhT",label:"Licensed"}];function EM({dest:r,selected:e,projected:i,onSelect:s,dimmed:l}){if(!(i!=null&&i.visible))return null;const c=Math.max(44,(i.r||.55)*70);return $.jsxs("button",{type:"button",className:`dest-node accent-${r.id} ${r.featured?"is-featured":""} ${e?"is-selected":""} ${l?"is-dimmed":""}`,style:{left:i.x,top:i.y,"--hit":`${c}px`},onClick:()=>s(r),"aria-label":`${r.label}: ${r.subtitle}`,"aria-pressed":e,children:[$.jsx("span",{className:"dest-node__hit","aria-hidden":"true"}),$.jsxs("span",{className:"dest-node__meta",children:[$.jsx("span",{className:"dest-node__label",children:r.label}),r.status?$.jsx("span",{className:"dest-node__status",children:r.status}):null]})]})}const bM=[{value:"recruiter",label:"Internship"},{value:"collab",label:"Collab"},{value:"other",label:"Other"}];function TM(){return"formsubmit"}function AM(){return $.jsxs($.Fragment,{children:[$.jsx("p",{className:"dest-lede",children:Rh.body}),$.jsx("div",{className:"dest-stats",children:wv.map(r=>$.jsxs("div",{className:"dest-stat",children:[$.jsx("span",{className:"dest-stat__val",children:r.val}),$.jsx("span",{className:"dest-stat__label",children:r.label})]},r.label))}),$.jsx("div",{className:"dest-list",children:Rh.currently.map(([r,e,i])=>$.jsxs("article",{className:"dest-row",children:[$.jsx("span",{className:"dest-row__key",children:r}),$.jsxs("div",{children:[$.jsx("h3",{children:e}),$.jsx("p",{children:i})]})]},r))}),$.jsx("div",{className:"dest-skills",children:Rh.skills.map(r=>$.jsx("span",{children:r},r))})]})}function RM(){return $.jsxs($.Fragment,{children:[$.jsx("p",{className:"dest-lede",children:"Research labs, pharmacy floors, shipped software — every role maps how systems behave under constraint."}),$.jsx("div",{className:"dest-list",children:SM.map((r,e)=>$.jsxs("article",{className:"dest-row dest-row--stack",children:[$.jsxs("div",{className:"dest-row__meta",children:[$.jsx("span",{className:"dest-row__key",children:r.date}),$.jsx("span",{className:"dest-row__type",children:r.type})]}),$.jsxs("div",{children:[$.jsxs("h3",{children:[$.jsx("span",{className:"dest-num",children:String(e+1).padStart(2,"0")})," ",r.title]}),$.jsx("p",{children:r.body})]})]},r.title))})]})}function CM(){return $.jsxs($.Fragment,{children:[$.jsx("p",{className:"dest-lede",children:"A shipped Python agent, human-centered lab research, and process work under real patient load."}),$.jsx("div",{className:"dest-list",children:MM.map(r=>$.jsxs("article",{className:"dest-row dest-row--project",children:[$.jsx("span",{className:"dest-num",children:r.num}),$.jsxs("div",{children:[$.jsxs("div",{className:"dest-row__head",children:[$.jsx("h3",{children:r.title}),$.jsx("span",{className:"chip",children:r.tag})]}),$.jsx("p",{className:"dest-row__cat",children:r.cat}),$.jsx("p",{children:r.body}),r.href?$.jsx("a",{href:r.href,target:"_blank",rel:"noreferrer",className:"dest-link",children:"Open on GitHub ↗"}):null]})]},r.num))})]})}function wM(){return $.jsxs($.Fragment,{children:[$.jsx("p",{className:"dest-lede",children:"Proof, not posture — licenses, fellowships, competition results."}),$.jsx("div",{className:"dest-stats",children:wv.map(r=>$.jsxs("div",{className:"dest-stat",children:[$.jsx("span",{className:"dest-stat__val",children:r.val}),$.jsx("span",{className:"dest-stat__label",children:r.label})]},r.label))}),$.jsx("div",{className:"dest-list",children:yM.map(r=>$.jsxs("article",{className:"dest-row",children:[$.jsx("span",{className:"dest-row__key",children:r.year}),$.jsxs("div",{children:[$.jsxs("div",{className:"dest-row__head",children:[$.jsx("h3",{children:r.title}),$.jsx("span",{className:"chip",children:r.badge})]}),$.jsx("p",{children:r.desc})]})]},r.title))})]})}function DM(){const r=On.contactEmail,e=Qt.useMemo(()=>{const S=encodeURIComponent("Internship inquiry — Zaid Khan"),O=encodeURIComponent(`Hi Zaid,

I'm reaching out about:

[Role / team / timeline]

Best,
`);return`mailto:${r}?subject=${S}&body=${O}`},[r]),[i,s]=Qt.useState("recruiter"),[l,c]=Qt.useState(""),[h,p]=Qt.useState(""),[m,d]=Qt.useState(""),[_,v]=Qt.useState(!1),[g,M]=Qt.useState(!1),[b,A]=Qt.useState("");async function y(S){S.preventDefault();const O=TM();if(!O){A("Use LinkedIn or email — form backend not configured.");return}v(!0),A("");try{let I;if(O==="formspree")I=await fetch(On.formspreeEndpoint,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:l,email:h,inquiry_type:i,message:m})});else if(O==="web3forms"){I=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:On.web3formsAccessKey,name:l,email:h,subject:`Portfolio: ${i} from ${l}`,message:m})});const w=await I.json();if(!I.ok||w.success===!1)throw new Error("fail");M(!0);return}else I=await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(On.formsubmitEmail)}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:l,email:h,inquiry_type:i,message:m,_subject:"New inquiry from zaidmajkhan.github.io",_captcha:"false"})});if(!I.ok)throw new Error("fail");M(!0)}catch{A(`Couldn't send — email ${r} directly.`)}finally{v(!1)}}return $.jsxs($.Fragment,{children:[$.jsx("p",{className:"dest-lede",children:"Open to Summer & Fall 2026 — SWE, applied AI, and ISE. Recruiters: LinkedIn is fastest."}),$.jsxs("div",{className:"dest-channels",children:[$.jsxs("a",{href:On.linkedinUrl,target:"_blank",rel:"noreferrer",className:"dest-channel",children:[$.jsx("span",{children:"LinkedIn"}),$.jsx("strong",{children:"Best for recruiters"})]}),$.jsxs("a",{href:e,className:"dest-channel",children:[$.jsx("span",{children:"Email"}),$.jsx("strong",{children:r})]})]}),g?$.jsxs("div",{className:"dest-success",children:[$.jsx("p",{className:"dest-panel__eyebrow",children:"Sent"}),$.jsx("h3",{children:"Message locked in."})]}):$.jsxs("form",{className:"dest-form",onSubmit:y,children:[$.jsxs("div",{className:"dest-form__grid",children:[$.jsxs("label",{children:[$.jsx("span",{children:"Name"}),$.jsx("input",{value:l,onChange:S=>c(S.target.value),required:!0})]}),$.jsxs("label",{children:[$.jsx("span",{children:"Email"}),$.jsx("input",{type:"email",value:h,onChange:S=>p(S.target.value),required:!0})]})]}),$.jsx("div",{className:"dest-topics",children:bM.map(S=>$.jsx("button",{type:"button",className:i===S.value?"is-on":"",onClick:()=>s(S.value),children:S.label},S.value))}),$.jsxs("label",{children:[$.jsx("span",{children:"Message"}),$.jsx("textarea",{value:m,onChange:S=>d(S.target.value),required:!0,maxLength:1e3})]}),$.jsx("button",{type:"submit",className:"btn btn-ghost",disabled:_,children:_?"Sending…":"Send message"}),b?$.jsx("p",{className:"dest-form__error",children:b}):null]})]})}function UM({activeId:r,onClose:e}){const i=nu.find(l=>l.id===r);if(Qt.useEffect(()=>{if(!r)return;const l=c=>{c.key==="Escape"&&e()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[r,e]),!i||i.external)return null;let s=null;return i.id==="origin"?s=$.jsx(AM,{}):i.id==="labs"?s=$.jsx(RM,{}):i.id==="systems"?s=$.jsx(CM,{}):i.id==="triumph"?s=$.jsx(wM,{}):i.id==="signal"&&(s=$.jsx(DM,{})),$.jsxs("div",{className:"dest-panel-shell",children:[$.jsx("button",{type:"button",className:"dest-panel-backdrop","aria-label":"Close",onClick:e}),$.jsxs("div",{className:"dest-panel",role:"dialog","aria-modal":"true","aria-labelledby":"dest-panel-title",children:[$.jsxs("div",{className:"dest-panel__bar",children:[$.jsxs("div",{children:[$.jsx("p",{className:"dest-panel__eyebrow",children:"Destination locked"}),$.jsx("h2",{id:"dest-panel-title",className:"dest-panel__title",children:i.label}),$.jsx("p",{className:"dest-panel__sub",children:i.subtitle})]}),$.jsx("button",{type:"button",className:"dest-panel__close",onClick:e,children:"Dismiss"})]}),$.jsx("div",{className:"dest-panel__body",children:s})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ip="185",NM=0,x_=1,LM=2,Kc=1,OM=2,Qo=3,os=0,In=1,Ma=2,Zi=0,zr=1,Fs=2,S_=3,M_=4,PM=5,Os=100,IM=101,FM=102,BM=103,zM=104,HM=200,GM=201,VM=202,kM=203,cd=204,ud=205,XM=206,WM=207,qM=208,YM=209,ZM=210,KM=211,jM=212,QM=213,JM=214,fd=0,hd=1,dd=2,Vr=3,pd=4,md=5,gd=6,_d=7,Dv=0,$M=1,ey=2,Ki=0,ap=1,sp=2,rp=3,fu=4,op=5,lp=6,cp=7,Uv=300,Gs=301,kr=302,Ch=303,wh=304,hu=306,vd=1e3,Ea=1001,xd=1002,Pn=1003,ty=1004,yc=1005,Vn=1006,Dh=1007,Bs=1008,mi=1009,Nv=1010,Lv=1011,tl=1012,up=1013,ji=1014,qi=1015,gi=1016,fp=1017,hp=1018,nl=1020,Ov=35902,Pv=35899,Iv=1021,Fv=1022,Pi=1023,Ta=1026,zs=1027,Bv=1028,dp=1029,Vs=1030,pp=1031,mp=1033,jc=33776,Qc=33777,Jc=33778,$c=33779,Sd=35840,Md=35841,yd=35842,Ed=35843,bd=36196,Td=37492,Ad=37496,Rd=37488,Cd=37489,iu=37490,wd=37491,Dd=37808,Ud=37809,Nd=37810,Ld=37811,Od=37812,Pd=37813,Id=37814,Fd=37815,Bd=37816,zd=37817,Hd=37818,Gd=37819,Vd=37820,kd=37821,Xd=36492,Wd=36494,qd=36495,Yd=36283,Zd=36284,au=36285,Kd=36286,ny=3200,jd=0,iy=1,ss="",Gn="srgb",su="srgb-linear",ru="linear",Bt="srgb",Er=7680,y_=519,ay=512,sy=513,ry=514,gp=515,oy=516,ly=517,_p=518,cy=519,E_=35044,b_="300 es",Yi=2e3,il=2001;function uy(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function al(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fy(){const r=al("canvas");return r.style.display="block",r}const T_={};function A_(...r){const e="THREE."+r.shift();console.log(e,...r)}function zv(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function rt(...r){r=zv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Dt(...r){r=zv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Hr(...r){const e=r.join(" ");e in T_||(T_[e]=!0,rt(...r))}function hy(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const dy={[fd]:hd,[dd]:gd,[pd]:_d,[Vr]:md,[hd]:fd,[gd]:dd,[_d]:pd,[md]:Vr};class ks{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let R_=1234567;const $o=Math.PI/180,sl=180/Math.PI;function Yr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function bt(r,e,i){return Math.max(e,Math.min(i,r))}function vp(r,e){return(r%e+e)%e}function py(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function my(r,e,i){return r!==e?(i-r)/(e-r):0}function el(r,e,i){return(1-i)*r+i*e}function gy(r,e,i,s){return el(r,e,1-Math.exp(-i*s))}function _y(r,e=1){return e-Math.abs(vp(r,e*2)-e)}function vy(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function xy(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function Sy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function My(r,e){return r+Math.random()*(e-r)}function yy(r){return r*(.5-Math.random())}function Ey(r){r!==void 0&&(R_=r);let e=R_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function by(r){return r*$o}function Ty(r){return r*sl}function Ay(r){return(r&r-1)===0&&r!==0}function Ry(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Cy(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function wy(r,e,i,s,l){const c=Math.cos,h=Math.sin,p=c(i/2),m=h(i/2),d=c((e+s)/2),_=h((e+s)/2),v=c((e-s)/2),g=h((e-s)/2),M=c((s-e)/2),b=h((s-e)/2);switch(l){case"XYX":r.set(p*_,m*v,m*g,p*d);break;case"YZY":r.set(m*g,p*_,m*v,p*d);break;case"ZXZ":r.set(m*v,m*g,p*_,p*d);break;case"XZX":r.set(p*_,m*b,m*M,p*d);break;case"YXY":r.set(m*M,p*_,m*b,p*d);break;case"ZYZ":r.set(m*b,m*M,p*_,p*d);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Br(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const C_={DEG2RAD:$o,RAD2DEG:sl,generateUUID:Yr,clamp:bt,euclideanModulo:vp,mapLinear:py,inverseLerp:my,lerp:el,damp:gy,pingpong:_y,smoothstep:vy,smootherstep:xy,randInt:Sy,randFloat:My,randFloatSpread:yy,seededRandom:Ey,degToRad:by,radToDeg:Ty,isPowerOfTwo:Ay,ceilPowerOfTwo:Ry,floorPowerOfTwo:Cy,setQuaternionFromProperEuler:wy,normalize:Wn,denormalize:Br},Ap=class Ap{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ap.prototype.isVector2=!0;let ot=Ap;class Zr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],_=s[l+2],v=s[l+3],g=c[h+0],M=c[h+1],b=c[h+2],A=c[h+3];if(v!==A||m!==g||d!==M||_!==b){let y=m*g+d*M+_*b+v*A;y<0&&(g=-g,M=-M,b=-b,A=-A,y=-y);let S=1-p;if(y<.9995){const O=Math.acos(y),I=Math.sin(O);S=Math.sin(S*O)/I,p=Math.sin(p*O)/I,m=m*S+g*p,d=d*S+M*p,_=_*S+b*p,v=v*S+A*p}else{m=m*S+g*p,d=d*S+M*p,_=_*S+b*p,v=v*S+A*p;const O=1/Math.sqrt(m*m+d*d+_*_+v*v);m*=O,d*=O,_*=O,v*=O}}e[i]=m,e[i+1]=d,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],_=s[l+3],v=c[h],g=c[h+1],M=c[h+2],b=c[h+3];return e[i]=p*b+_*v+m*M-d*g,e[i+1]=m*b+_*g+d*v-p*M,e[i+2]=d*b+_*M+p*g-m*v,e[i+3]=_*b-p*v-m*g-d*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,p=Math.cos,m=Math.sin,d=p(s/2),_=p(l/2),v=p(c/2),g=m(s/2),M=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=g*_*v+d*M*b,this._y=d*M*v-g*_*b,this._z=d*_*b+g*M*v,this._w=d*_*v-g*M*b;break;case"YXZ":this._x=g*_*v+d*M*b,this._y=d*M*v-g*_*b,this._z=d*_*b-g*M*v,this._w=d*_*v+g*M*b;break;case"ZXY":this._x=g*_*v-d*M*b,this._y=d*M*v+g*_*b,this._z=d*_*b+g*M*v,this._w=d*_*v-g*M*b;break;case"ZYX":this._x=g*_*v-d*M*b,this._y=d*M*v+g*_*b,this._z=d*_*b-g*M*v,this._w=d*_*v+g*M*b;break;case"YZX":this._x=g*_*v+d*M*b,this._y=d*M*v+g*_*b,this._z=d*_*b-g*M*v,this._w=d*_*v-g*M*b;break;case"XZY":this._x=g*_*v-d*M*b,this._y=d*M*v-g*_*b,this._z=d*_*b+g*M*v,this._w=d*_*v+g*M*b;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],_=i[6],v=i[10],g=s+p+v;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-d)*M,this._z=(h-l)*M}else if(s>p&&s>v){const M=2*Math.sqrt(1+s-p-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+d)/M}else if(p>v){const M=2*Math.sqrt(1+p-s-v);this._w=(c-d)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-s-p);this._w=(h-l)/M,this._x=(c+d)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,p=i._x,m=i._y,d=i._z,_=i._w;return this._x=s*_+h*p+l*d-c*m,this._y=l*_+h*m+c*p-s*d,this._z=c*_+h*d+s*m-l*p,this._w=h*_-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,h=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),_=Math.sin(d);m=Math.sin(m*d)/_,i=Math.sin(i*d)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Rp=class Rp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(w_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(w_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,p=e.z,m=e.w,d=2*(h*l-p*s),_=2*(p*i-c*l),v=2*(c*s-h*i);return this.x=i+m*d+h*v-p*_,this.y=s+m*_+p*d-c*v,this.z=l+m*v+c*_-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Uh.copy(this).projectOnVector(e),this.sub(Uh)}reflect(e){return this.sub(Uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rp.prototype.isVector3=!0;let K=Rp;const Uh=new K,w_=new Zr,Cp=class Cp{constructor(e,i,s,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,p,m,d)}set(e,i,s,l,c,h,p,m,d){const _=this.elements;return _[0]=e,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],_=s[4],v=s[7],g=s[2],M=s[5],b=s[8],A=l[0],y=l[3],S=l[6],O=l[1],I=l[4],w=l[7],F=l[2],N=l[5],P=l[8];return c[0]=h*A+p*O+m*F,c[3]=h*y+p*I+m*N,c[6]=h*S+p*w+m*P,c[1]=d*A+_*O+v*F,c[4]=d*y+_*I+v*N,c[7]=d*S+_*w+v*P,c[2]=g*A+M*O+b*F,c[5]=g*y+M*I+b*N,c[8]=g*S+M*w+b*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],_=e[8];return i*h*_-i*p*d-s*c*_+s*p*m+l*c*d-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],_=e[8],v=_*h-p*d,g=p*m-_*c,M=d*c-h*m,b=i*v+s*g+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=v*A,e[1]=(l*d-_*s)*A,e[2]=(p*s-l*h)*A,e[3]=g*A,e[4]=(_*i-l*m)*A,e[5]=(l*c-p*i)*A,e[6]=M*A,e[7]=(s*m-d*i)*A,e[8]=(h*i-s*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+e,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(e,i){return Hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nh.makeScale(e,i)),this}rotate(e){return Hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nh.makeRotation(-e)),this}translate(e,i){return Hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Cp.prototype.isMatrix3=!0;let ft=Cp;const Nh=new ft,D_=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),U_=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dy(){const r={enabled:!0,workingColorSpace:su,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Bt&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Bt&&(l.r=Gr(l.r),l.g=Gr(l.g),l.b=Gr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ss?ru:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[su]:{primaries:e,whitePoint:s,transfer:ru,toXYZ:D_,fromXYZ:U_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:s,transfer:Bt,toXYZ:D_,fromXYZ:U_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),r}const Rt=Dy();function ba(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let br;class Uy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{br===void 0&&(br=al("canvas")),br.width=e.width,br.height=e.height;const l=br.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=br}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=al("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ba(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ba(i[s]/255)*255):i[s]=ba(i[s]);return{data:i,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ny=0;class xp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Yr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(Lh(l[h].image)):c.push(Lh(l[h]))}else c=Lh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Lh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Uy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let Ly=0;const Oh=new K;class kn extends ks{constructor(e=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,s=Ea,l=Ea,c=Vn,h=Bs,p=Pi,m=mi,d=kn.DEFAULT_ANISOTROPY,_=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=Yr(),this.name="",this.source=new xp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Oh).x}get height(){return this.source.getSize(Oh).y}get depth(){return this.source.getSize(Oh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vd:e.x=e.x-Math.floor(e.x);break;case Ea:e.x=e.x<0?0:1;break;case xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vd:e.y=e.y-Math.floor(e.y);break;case Ea:e.y=e.y<0?0:1;break;case xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Uv;kn.DEFAULT_ANISOTROPY=1;const wp=class wp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,d=m[0],_=m[4],v=m[8],g=m[1],M=m[5],b=m[9],A=m[2],y=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-A)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+A)<.1&&Math.abs(b+y)<.1&&Math.abs(d+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(d+1)/2,w=(M+1)/2,F=(S+1)/2,N=(_+g)/4,P=(v+A)/4,T=(b+y)/4;return I>w&&I>F?I<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(I),l=N/s,c=P/s):w>F?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=N/l,c=T/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=P/c,l=T/c),this.set(s,l,c,i),this}let O=Math.sqrt((y-b)*(y-b)+(v-A)*(v-A)+(g-_)*(g-_));return Math.abs(O)<.001&&(O=1),this.x=(y-b)/O,this.y=(v-A)/O,this.z=(g-_)/O,this.w=Math.acos((d+M+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this.w=bt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this.w=bt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wp.prototype.isVector4=!0;let rn=wp;class Oy extends ks{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new kn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new xp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends Oy{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Hv extends kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Py extends kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uu=class uu{constructor(e,i,s,l,c,h,p,m,d,_,v,g,M,b,A,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,p,m,d,_,v,g,M,b,A,y)}set(e,i,s,l,c,h,p,m,d,_,v,g,M,b,A,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=p,S[13]=m,S[2]=d,S[6]=_,S[10]=v,S[14]=g,S[3]=M,S[7]=b,S[11]=A,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Tr.setFromMatrixColumn(e,0).length(),c=1/Tr.setFromMatrixColumn(e,1).length(),h=1/Tr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=h*_,M=h*v,b=p*_,A=p*v;i[0]=m*_,i[4]=-m*v,i[8]=d,i[1]=M+b*d,i[5]=g-A*d,i[9]=-p*m,i[2]=A-g*d,i[6]=b+M*d,i[10]=h*m}else if(e.order==="YXZ"){const g=m*_,M=m*v,b=d*_,A=d*v;i[0]=g+A*p,i[4]=b*p-M,i[8]=h*d,i[1]=h*v,i[5]=h*_,i[9]=-p,i[2]=M*p-b,i[6]=A+g*p,i[10]=h*m}else if(e.order==="ZXY"){const g=m*_,M=m*v,b=d*_,A=d*v;i[0]=g-A*p,i[4]=-h*v,i[8]=b+M*p,i[1]=M+b*p,i[5]=h*_,i[9]=A-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(e.order==="ZYX"){const g=h*_,M=h*v,b=p*_,A=p*v;i[0]=m*_,i[4]=b*d-M,i[8]=g*d+A,i[1]=m*v,i[5]=A*d+g,i[9]=M*d-b,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(e.order==="YZX"){const g=h*m,M=h*d,b=p*m,A=p*d;i[0]=m*_,i[4]=A-g*v,i[8]=b*v+M,i[1]=v,i[5]=h*_,i[9]=-p*_,i[2]=-d*_,i[6]=M*v+b,i[10]=g-A*v}else if(e.order==="XZY"){const g=h*m,M=h*d,b=p*m,A=p*d;i[0]=m*_,i[4]=-v,i[8]=d*_,i[1]=g*v+A,i[5]=h*_,i[9]=M*v-b,i[2]=b*v-M,i[6]=p*_,i[10]=A*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Iy,e,Fy)}lookAt(e,i,s){const l=this.elements;return hi.subVectors(e,i),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),$a.crossVectors(s,hi),$a.lengthSq()===0&&(Math.abs(s.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),$a.crossVectors(s,hi)),$a.normalize(),Ec.crossVectors(hi,$a),l[0]=$a.x,l[4]=Ec.x,l[8]=hi.x,l[1]=$a.y,l[5]=Ec.y,l[9]=hi.y,l[2]=$a.z,l[6]=Ec.z,l[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],_=s[1],v=s[5],g=s[9],M=s[13],b=s[2],A=s[6],y=s[10],S=s[14],O=s[3],I=s[7],w=s[11],F=s[15],N=l[0],P=l[4],T=l[8],L=l[12],q=l[1],G=l[5],j=l[9],pe=l[13],ve=l[2],J=l[6],B=l[10],H=l[14],ee=l[3],ge=l[7],Te=l[11],U=l[15];return c[0]=h*N+p*q+m*ve+d*ee,c[4]=h*P+p*G+m*J+d*ge,c[8]=h*T+p*j+m*B+d*Te,c[12]=h*L+p*pe+m*H+d*U,c[1]=_*N+v*q+g*ve+M*ee,c[5]=_*P+v*G+g*J+M*ge,c[9]=_*T+v*j+g*B+M*Te,c[13]=_*L+v*pe+g*H+M*U,c[2]=b*N+A*q+y*ve+S*ee,c[6]=b*P+A*G+y*J+S*ge,c[10]=b*T+A*j+y*B+S*Te,c[14]=b*L+A*pe+y*H+S*U,c[3]=O*N+I*q+w*ve+F*ee,c[7]=O*P+I*G+w*J+F*ge,c[11]=O*T+I*j+w*B+F*Te,c[15]=O*L+I*pe+w*H+F*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],p=e[5],m=e[9],d=e[13],_=e[2],v=e[6],g=e[10],M=e[14],b=e[3],A=e[7],y=e[11],S=e[15],O=m*M-d*g,I=p*M-d*v,w=p*g-m*v,F=h*M-d*_,N=h*g-m*_,P=h*v-p*_;return i*(A*O-y*I+S*w)-s*(b*O-y*F+S*N)+l*(b*I-A*F+S*P)-c*(b*w-A*N+y*P)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],h=e[5],p=e[9],m=e[2],d=e[6],_=e[10];return i*(h*_-p*d)-s*(c*_-p*m)+l*(c*d-h*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],_=e[8],v=e[9],g=e[10],M=e[11],b=e[12],A=e[13],y=e[14],S=e[15],O=i*p-s*h,I=i*m-l*h,w=i*d-c*h,F=s*m-l*p,N=s*d-c*p,P=l*d-c*m,T=_*A-v*b,L=_*y-g*b,q=_*S-M*b,G=v*y-g*A,j=v*S-M*A,pe=g*S-M*y,ve=O*pe-I*j+w*G+F*q-N*L+P*T;if(ve===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/ve;return e[0]=(p*pe-m*j+d*G)*J,e[1]=(l*j-s*pe-c*G)*J,e[2]=(A*P-y*N+S*F)*J,e[3]=(g*N-v*P-M*F)*J,e[4]=(m*q-h*pe-d*L)*J,e[5]=(i*pe-l*q+c*L)*J,e[6]=(y*w-b*P-S*I)*J,e[7]=(_*P-g*w+M*I)*J,e[8]=(h*j-p*q+d*T)*J,e[9]=(s*q-i*j-c*T)*J,e[10]=(b*N-A*w+S*O)*J,e[11]=(v*w-_*N-M*O)*J,e[12]=(p*L-h*G-m*T)*J,e[13]=(i*G-s*L+l*T)*J,e[14]=(A*I-b*F-y*O)*J,e[15]=(_*F-v*I+g*O)*J,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,p=e.y,m=e.z,d=c*h,_=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,_*p+s,_*m-l*h,0,d*m-l*p,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,_=h+h,v=p+p,g=c*d,M=c*_,b=c*v,A=h*_,y=h*v,S=p*v,O=m*d,I=m*_,w=m*v,F=s.x,N=s.y,P=s.z;return l[0]=(1-(A+S))*F,l[1]=(M+w)*F,l[2]=(b-I)*F,l[3]=0,l[4]=(M-w)*N,l[5]=(1-(g+S))*N,l[6]=(y+O)*N,l[7]=0,l[8]=(b+I)*P,l[9]=(y-O)*P,l[10]=(1-(g+A))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Tr.set(l[0],l[1],l[2]).length();const p=Tr.set(l[4],l[5],l[6]).length(),m=Tr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Ui.copy(this);const d=1/h,_=1/p,v=1/m;return Ui.elements[0]*=d,Ui.elements[1]*=d,Ui.elements[2]*=d,Ui.elements[4]*=_,Ui.elements[5]*=_,Ui.elements[6]*=_,Ui.elements[8]*=v,Ui.elements[9]*=v,Ui.elements[10]*=v,i.setFromRotationMatrix(Ui),s.x=h,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,h,p=Yi,m=!1){const d=this.elements,_=2*c/(i-e),v=2*c/(s-l),g=(i+e)/(i-e),M=(s+l)/(s-l);let b,A;if(m)b=c/(h-c),A=h*c/(h-c);else if(p===Yi)b=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(p===il)b=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=v,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=A,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,s,l,c,h,p=Yi,m=!1){const d=this.elements,_=2/(i-e),v=2/(s-l),g=-(i+e)/(i-e),M=-(s+l)/(s-l);let b,A;if(m)b=1/(h-c),A=h/(h-c);else if(p===Yi)b=-2/(h-c),A=-(h+c)/(h-c);else if(p===il)b=-1/(h-c),A=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=v,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=b,d[14]=A,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};uu.prototype.isMatrix4=!0;let en=uu;const Tr=new K,Ui=new en,Iy=new K(0,0,0),Fy=new K(1,1,1),$a=new K,Ec=new K,hi=new K,N_=new en,L_=new Zr;class ls{constructor(e=0,i=0,s=0,l=ls.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],_=l[9],v=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-bt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return N_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(N_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return L_.setFromEuler(this),this.setFromQuaternion(L_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ls.DEFAULT_ORDER="XYZ";class Sp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let By=0;const O_=new K,Ar=new Zr,ga=new en,bc=new K,Xo=new K,zy=new K,Hy=new Zr,P_=new K(1,0,0),I_=new K(0,1,0),F_=new K(0,0,1),B_={type:"added"},Gy={type:"removed"},Rr={type:"childadded",child:null},Ph={type:"childremoved",child:null};class Rn extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new K,i=new ls,s=new Zr,l=new K(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new ft}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ar.setFromAxisAngle(e,i),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,i){return Ar.setFromAxisAngle(e,i),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(P_,e)}rotateY(e){return this.rotateOnAxis(I_,e)}rotateZ(e){return this.rotateOnAxis(F_,e)}translateOnAxis(e,i){return O_.copy(e).applyQuaternion(this.quaternion),this.position.add(O_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(P_,e)}translateY(e){return this.translateOnAxis(I_,e)}translateZ(e){return this.translateOnAxis(F_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?bc.copy(e):bc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(Xo,bc,this.up):ga.lookAt(bc,Xo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),Ar.setFromRotationMatrix(ga),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(B_),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Gy),Ph.child=e,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ga.multiply(e.parent.matrixWorld)),e.applyMatrix4(ga),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(B_),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,zy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,Hy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let h=0,p=c.length;h<p;h++)c[h].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,_=m.length;d<_;d++){const v=m[d];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=h(e.geometries),m=h(e.materials),d=h(e.textures),_=h(e.images),v=h(e.shapes),g=h(e.skeletons),M=h(e.animations),b=h(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(p){const m=[];for(const d in p){const _=p[d];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Rn.DEFAULT_UP=new K(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ya extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vy={type:"move"};class Ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const A of e.hand.values()){const y=i.getJointPose(A,s),S=this._getHandJoint(d,A);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],g=_.position.distanceTo(v.position),M=.02,b=.005;d.inputState.pinching&&g>M+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=M-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Vy)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new ya;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function Fh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class ht{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Rt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Rt.workingColorSpace){if(e=vp(e,1),i=bt(i,0,1),s=bt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Fh(h,c,e+1/3),this.g=Fh(h,c,e),this.b=Fh(h,c,e-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(e,i=Gn){function s(c){c!==void 0&&parseFloat(c)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:rt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Gn){const s=Gv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Rt.workingToColorSpace(Hn.copy(this),e),Math.round(bt(Hn.r*255,0,255))*65536+Math.round(bt(Hn.g*255,0,255))*256+Math.round(bt(Hn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(Hn.copy(this),i);const s=Hn.r,l=Hn.g,c=Hn.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const _=(p+h)/2;if(p===h)m=0,d=0;else{const v=h-p;switch(d=_<=.5?v/(h+p):v/(2-h-p),h){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=d,e.l=_,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(Hn.copy(this),i),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Gn){Rt.workingToColorSpace(Hn.copy(this),e);const i=Hn.r,s=Hn.g,l=Hn.b;return e!==Gn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(es),this.setHSL(es.h+e,es.s+i,es.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(es),e.getHSL(Tc);const s=el(es.h,Tc.h,i),l=el(es.s,Tc.s,i),c=el(es.l,Tc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new ht;ht.NAMES=Gv;class ky extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ls,this.environmentIntensity=1,this.environmentRotation=new ls,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ni=new K,_a=new K,Bh=new K,va=new K,Cr=new K,wr=new K,z_=new K,zh=new K,Hh=new K,Gh=new K,Vh=new rn,kh=new rn,Xh=new rn;class Oi{constructor(e=new K,i=new K,s=new K){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ni.subVectors(e,i),l.cross(Ni);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ni.subVectors(l,i),_a.subVectors(s,i),Bh.subVectors(e,i);const h=Ni.dot(Ni),p=Ni.dot(_a),m=Ni.dot(Bh),d=_a.dot(_a),_=_a.dot(Bh),v=h*d-p*p;if(v===0)return c.set(0,0,0),null;const g=1/v,M=(d*m-p*_)*g,b=(h*_-p*m)*g;return c.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(e,i,s,l,c,h,p,m){return this.getBarycoord(e,i,s,l,va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,va.x),m.addScaledVector(h,va.y),m.addScaledVector(p,va.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return Vh.setScalar(0),kh.setScalar(0),Xh.setScalar(0),Vh.fromBufferAttribute(e,i),kh.fromBufferAttribute(e,s),Xh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Vh,c.x),h.addScaledVector(kh,c.y),h.addScaledVector(Xh,c.z),h}static isFrontFacing(e,i,s,l){return Ni.subVectors(s,i),_a.subVectors(e,i),Ni.cross(_a).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),Ni.cross(_a).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Oi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,p;Cr.subVectors(l,s),wr.subVectors(c,s),zh.subVectors(e,s);const m=Cr.dot(zh),d=wr.dot(zh);if(m<=0&&d<=0)return i.copy(s);Hh.subVectors(e,l);const _=Cr.dot(Hh),v=wr.dot(Hh);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*d;if(g<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Cr,h);Gh.subVectors(e,c);const M=Cr.dot(Gh),b=wr.dot(Gh);if(b>=0&&M<=b)return i.copy(c);const A=M*d-m*b;if(A<=0&&d>=0&&b<=0)return p=d/(d-b),i.copy(s).addScaledVector(wr,p);const y=_*b-M*v;if(y<=0&&v-_>=0&&M-b>=0)return z_.subVectors(c,l),p=(v-_)/(v-_+(M-b)),i.copy(l).addScaledVector(z_,p);const S=1/(y+A+g);return h=A*S,p=g*S,i.copy(s).addScaledVector(Cr,h).addScaledVector(wr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ol{constructor(e=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Li.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Li.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Li.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,Li):Li.fromBufferAttribute(c,h),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ac.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ac.copy(s.boundingBox)),Ac.applyMatrix4(e.matrixWorld),this.union(Ac)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),Rc.subVectors(this.max,Wo),Dr.subVectors(e.a,Wo),Ur.subVectors(e.b,Wo),Nr.subVectors(e.c,Wo),ts.subVectors(Ur,Dr),ns.subVectors(Nr,Ur),ws.subVectors(Dr,Nr);let i=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-ws.z,ws.y,ts.z,0,-ts.x,ns.z,0,-ns.x,ws.z,0,-ws.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-ws.y,ws.x,0];return!Wh(i,Dr,Ur,Nr,Rc)||(i=[1,0,0,0,1,0,0,0,1],!Wh(i,Dr,Ur,Nr,Rc))?!1:(Cc.crossVectors(ts,ns),i=[Cc.x,Cc.y,Cc.z],Wh(i,Dr,Ur,Nr,Rc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xa=[new K,new K,new K,new K,new K,new K,new K,new K],Li=new K,Ac=new ol,Dr=new K,Ur=new K,Nr=new K,ts=new K,ns=new K,ws=new K,Wo=new K,Rc=new K,Cc=new K,Ds=new K;function Wh(r,e,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Ds.fromArray(r,c);const p=l.x*Math.abs(Ds.x)+l.y*Math.abs(Ds.y)+l.z*Math.abs(Ds.z),m=e.dot(Ds),d=i.dot(Ds),_=s.dot(Ds);if(Math.max(-Math.max(m,d,_),Math.min(m,d,_))>p)return!1}return!0}const vn=new K,wc=new ot;let Xy=0;class Ii extends ks{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=E_,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)wc.fromBufferAttribute(this,i),wc.applyMatrix3(e),this.setXY(i,wc.x,wc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Br(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Wn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Br(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Br(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Br(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Br(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==E_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Vv extends Ii{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class kv extends Ii{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class fn extends Ii{constructor(e,i,s){super(new Float32Array(e),i,s)}}const Wy=new ol,qo=new K,qh=new K;class ll{constructor(e=new K,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Wy.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);const i=qo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(qo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(qh)),this.expandByPoint(qo.copy(e.center).sub(qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qy=0;const Ti=new en,Yh=new Rn,Lr=new K,di=new ol,Yo=new ol,An=new K;class Cn extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uy(e)?kv:Vv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ft().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,i,s){return Ti.makeTranslation(e,i,s),this.applyMatrix4(Ti),this}scale(e,i,s){return Ti.makeScale(e,i,s),this.applyMatrix4(Ti),this}lookAt(e){return Yh.lookAt(e),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new fn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];di.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ll);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const s=this.boundingSphere.center;if(di.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];Yo.setFromBufferAttribute(p),this.morphTargetsRelative?(An.addVectors(di.min,Yo.min),di.expandByPoint(An),An.addVectors(di.max,Yo.max),di.expandByPoint(An)):(di.expandByPoint(Yo.min),di.expandByPoint(Yo.max))}di.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)An.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(An));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,_=p.count;d<_;d++)An.fromBufferAttribute(p,d),m&&(Lr.fromBufferAttribute(e,d),An.add(Lr)),l=Math.max(l,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==s.count)&&(h=new Ii(new Float32Array(4*s.count),4),this.setAttribute("tangent",h));const p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new K,m[T]=new K;const d=new K,_=new K,v=new K,g=new ot,M=new ot,b=new ot,A=new K,y=new K;function S(T,L,q){d.fromBufferAttribute(s,T),_.fromBufferAttribute(s,L),v.fromBufferAttribute(s,q),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,L),b.fromBufferAttribute(c,q),_.sub(d),v.sub(d),M.sub(g),b.sub(g);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(A.copy(_).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(G),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(G),p[T].add(A),p[L].add(A),p[q].add(A),m[T].add(y),m[L].add(y),m[q].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let T=0,L=O.length;T<L;++T){const q=O[T],G=q.start,j=q.count;for(let pe=G,ve=G+j;pe<ve;pe+=3)S(e.getX(pe+0),e.getX(pe+1),e.getX(pe+2))}const I=new K,w=new K,F=new K,N=new K;function P(T){F.fromBufferAttribute(l,T),N.copy(F);const L=p[T];I.copy(L),I.sub(F.multiplyScalar(F.dot(L))).normalize(),w.crossVectors(N,L);const G=w.dot(m[T])<0?-1:1;h.setXYZW(T,I.x,I.y,I.z,G)}for(let T=0,L=O.length;T<L;++T){const q=O[T],G=q.start,j=q.count;for(let pe=G,ve=G+j;pe<ve;pe+=3)P(e.getX(pe+0)),P(e.getX(pe+1)),P(e.getX(pe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Ii(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new K,c=new K,h=new K,p=new K,m=new K,d=new K,_=new K,v=new K;if(e)for(let g=0,M=e.count;g<M;g+=3){const b=e.getX(g+0),A=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,A),d.fromBufferAttribute(s,y),p.add(_),m.add(_),d.add(_),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(p,m){const d=p.array,_=p.itemSize,v=p.normalized,g=new d.constructor(m.length*_);let M=0,b=0;for(let A=0,y=m.length;A<y;A++){p.isInterleavedBufferAttribute?M=m[A]*p.data.stride+p.offset:M=m[A]*_;for(let S=0;S<_;S++)g[b++]=d[M++]}return new Ii(g,_,v)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Cn,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let _=0,v=d.length;_<v;_++){const g=d[_],M=e(g,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],_=[];for(let v=0,g=d.length;v<g;v++){const M=d[v];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const d in l){const _=l[d];this.setAttribute(d,_.clone(i))}const c=e.morphAttributes;for(const d in c){const _=[],v=c[d];for(let g=0,M=v.length;g<M;g++)_.push(v[g].clone(i));this.morphAttributes[d]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,_=h.length;d<_;d++){const v=h[d];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Yy=0;class Xs extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=Yr(),this.name="",this.type="Material",this.blending=zr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ud,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(s.blending=this.blending),this.side!==os&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==cd&&(s.blendSrc=this.blendSrc),this.blendDst!==ud&&(s.blendDst=this.blendDst),this.blendEquation!==Os&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==y_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ht().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new ot().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sa=new K,Zh=new K,Dc=new K,is=new K,Kh=new K,Uc=new K,jh=new K;class du{constructor(e=new K,i=new K(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Sa.copy(this.origin).addScaledVector(this.direction,i),Sa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Zh.copy(e).add(i).multiplyScalar(.5),Dc.copy(i).sub(e).normalize(),is.copy(this.origin).sub(Zh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Dc),p=is.dot(this.direction),m=-is.dot(Dc),d=is.lengthSq(),_=Math.abs(1-h*h);let v,g,M,b;if(_>0)if(v=h*m-p,g=h*p-m,b=c*_,v>=0)if(g>=-b)if(g<=b){const A=1/_;v*=A,g*=A,M=v*(v+h*g+2*p)+g*(h*v+g+2*m)+d}else g=c,v=Math.max(0,-(h*g+p)),M=-v*v+g*(g+2*m)+d;else g=-c,v=Math.max(0,-(h*g+p)),M=-v*v+g*(g+2*m)+d;else g<=-b?(v=Math.max(0,-(-h*c+p)),g=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+g*(g+2*m)+d):g<=b?(v=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+d):(v=Math.max(0,-(h*c+p)),g=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+g*(g+2*m)+d);else g=h>0?-c:c,v=Math.max(0,-(h*g+p)),M=-v*v+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Zh).addScaledVector(Dc,g),M}intersectSphere(e,i){Sa.subVectors(e.center,this.origin);const s=Sa.dot(this.direction),l=Sa.dot(Sa)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,p,m;const d=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return d>=0?(s=(e.min.x-g.x)*d,l=(e.max.x-g.x)*d):(s=(e.max.x-g.x)*d,l=(e.min.x-g.x)*d),_>=0?(c=(e.min.y-g.y)*_,h=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,h=(e.min.y-g.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),v>=0?(p=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(p=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Sa)!==null}intersectTriangle(e,i,s,l,c){Kh.subVectors(i,e),Uc.subVectors(s,e),jh.crossVectors(Kh,Uc);let h=this.direction.dot(jh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;is.subVectors(this.origin,e);const m=p*this.direction.dot(Uc.crossVectors(is,Uc));if(m<0)return null;const d=p*this.direction.dot(Kh.cross(is));if(d<0||m+d>h)return null;const _=-p*is.dot(jh);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hs extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ls,this.combine=Dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const H_=new en,Us=new du,Nc=new ll,G_=new K,Lc=new K,Oc=new K,Pc=new K,Qh=new K,Ic=new K,V_=new K,Fc=new K;class Mn extends Rn{constructor(e=new Cn,i=new Hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Ic.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const _=p[m],v=c[m];_!==0&&(Qh.fromBufferAttribute(v,e),h?Ic.addScaledVector(Qh,_):Ic.addScaledVector(Qh.sub(i),_))}i.add(Ic)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Nc.copy(s.boundingSphere),Nc.applyMatrix4(c),Us.copy(e.ray).recast(e.near),!(Nc.containsPoint(Us.origin)===!1&&(Us.intersectSphere(Nc,G_)===null||Us.origin.distanceToSquared(G_)>(e.far-e.near)**2))&&(H_.copy(c).invert(),Us.copy(e.ray).applyMatrix4(H_),!(s.boundingBox!==null&&Us.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Us)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(h))for(let b=0,A=g.length;b<A;b++){const y=g[b],S=h[y.materialIndex],O=Math.max(y.start,M.start),I=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let w=O,F=I;w<F;w+=3){const N=p.getX(w),P=p.getX(w+1),T=p.getX(w+2);l=Bc(this,S,e,s,d,_,v,N,P,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),A=Math.min(p.count,M.start+M.count);for(let y=b,S=A;y<S;y+=3){const O=p.getX(y),I=p.getX(y+1),w=p.getX(y+2);l=Bc(this,h,e,s,d,_,v,O,I,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,A=g.length;b<A;b++){const y=g[b],S=h[y.materialIndex],O=Math.max(y.start,M.start),I=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let w=O,F=I;w<F;w+=3){const N=w,P=w+1,T=w+2;l=Bc(this,S,e,s,d,_,v,N,P,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let y=b,S=A;y<S;y+=3){const O=y,I=y+1,w=y+2;l=Bc(this,h,e,s,d,_,v,O,I,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Zy(r,e,i,s,l,c,h,p){let m;if(e.side===In?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,e.side===os,p),m===null)return null;Fc.copy(p),Fc.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(Fc);return d<i.near||d>i.far?null:{distance:d,point:Fc.clone(),object:r}}function Bc(r,e,i,s,l,c,h,p,m,d){r.getVertexPosition(p,Lc),r.getVertexPosition(m,Oc),r.getVertexPosition(d,Pc);const _=Zy(r,e,i,s,Lc,Oc,Pc,V_);if(_){const v=new K;Oi.getBarycoord(V_,Lc,Oc,Pc,v),l&&(_.uv=Oi.getInterpolatedAttribute(l,p,m,d,v,new ot)),c&&(_.uv1=Oi.getInterpolatedAttribute(c,p,m,d,v,new ot)),h&&(_.normal=Oi.getInterpolatedAttribute(h,p,m,d,v,new K),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new K,materialIndex:0};Oi.getNormal(Lc,Oc,Pc,g.normal),_.face=g,_.barycoord=v}return _}class Ky extends kn{constructor(e=null,i=1,s=1,l,c,h,p,m,d=Pn,_=Pn,v,g){super(null,h,p,m,d,_,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jh=new K,jy=new K,Qy=new ft;class Ls{constructor(e=new K(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Jh.subVectors(s,i).cross(jy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Jh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(e.start).addScaledVector(l,h)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Qy.getNormalMatrix(e),l=this.coplanarPoint(Jh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new ll,Jy=new ot(.5,.5),zc=new K;class Mp{constructor(e=new Ls,i=new Ls,s=new Ls,l=new Ls,c=new Ls,h=new Ls){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Yi,s=!1){const l=this.planes,c=e.elements,h=c[0],p=c[1],m=c[2],d=c[3],_=c[4],v=c[5],g=c[6],M=c[7],b=c[8],A=c[9],y=c[10],S=c[11],O=c[12],I=c[13],w=c[14],F=c[15];if(l[0].setComponents(d-h,M-_,S-b,F-O).normalize(),l[1].setComponents(d+h,M+_,S+b,F+O).normalize(),l[2].setComponents(d+p,M+v,S+A,F+I).normalize(),l[3].setComponents(d-p,M-v,S-A,F-I).normalize(),s)l[4].setComponents(m,g,y,w).normalize(),l[5].setComponents(d-m,M-g,S-y,F-w).normalize();else if(l[4].setComponents(d-m,M-g,S-y,F-w).normalize(),i===Yi)l[5].setComponents(d+m,M+g,S+y,F+w).normalize();else if(i===il)l[5].setComponents(m,g,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){Ns.center.set(0,0,0);const i=Jy.distanceTo(e.center);return Ns.radius=.7071067811865476+i,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(zc.x=l.normal.x>0?e.max.x:e.min.x,zc.y=l.normal.y>0?e.max.y:e.min.y,zc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(zc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qd extends Xs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ou=new K,lu=new K,k_=new en,Zo=new du,Hc=new ll,$h=new K,X_=new K;class W_ extends Rn{constructor(e=new Cn,i=new Qd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)ou.fromBufferAttribute(i,l-1),lu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=ou.distanceTo(lu);e.setAttribute("lineDistance",new fn(s,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Hc.copy(s.boundingSphere),Hc.applyMatrix4(l),Hc.radius+=c,e.ray.intersectsSphere(Hc)===!1)return;k_.copy(l).invert(),Zo.copy(e.ray).applyMatrix4(k_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const M=Math.max(0,h.start),b=Math.min(_.count,h.start+h.count);for(let A=M,y=b-1;A<y;A+=d){const S=_.getX(A),O=_.getX(A+1),I=Gc(this,e,Zo,m,S,O,A);I&&i.push(I)}if(this.isLineLoop){const A=_.getX(b-1),y=_.getX(M),S=Gc(this,e,Zo,m,A,y,b-1);S&&i.push(S)}}else{const M=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let A=M,y=b-1;A<y;A+=d){const S=Gc(this,e,Zo,m,A,A+1,A);S&&i.push(S)}if(this.isLineLoop){const A=Gc(this,e,Zo,m,b-1,M,b-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Gc(r,e,i,s,l,c,h){const p=r.geometry.attributes.position;if(ou.fromBufferAttribute(p,l),lu.fromBufferAttribute(p,c),i.distanceSqToSegment(ou,lu,$h,X_)>s)return;$h.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo($h);if(!(d<e.near||d>e.far))return{distance:d,point:X_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}class Xv extends Xs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const q_=new en,Jd=new du,Vc=new ll,kc=new K;class $y extends Rn{constructor(e=new Cn,i=new Xv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Vc.copy(s.boundingSphere),Vc.applyMatrix4(l),Vc.radius+=c,e.ray.intersectsSphere(Vc)===!1)return;q_.copy(l).invert(),Jd.copy(e.ray).applyMatrix4(q_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=s.index,v=s.attributes.position;if(d!==null){const g=Math.max(0,h.start),M=Math.min(d.count,h.start+h.count);for(let b=g,A=M;b<A;b++){const y=d.getX(b);kc.fromBufferAttribute(v,y),Y_(kc,y,m,l,e,i,this)}}else{const g=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let b=g,A=M;b<A;b++)kc.fromBufferAttribute(v,b),Y_(kc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Y_(r,e,i,s,l,c,h){const p=Jd.distanceSqToPoint(r);if(p<i){const m=new K;Jd.closestPointToPoint(r,m),m.applyMatrix4(s);const d=l.ray.origin.distanceTo(m);if(d<l.near||d>l.far)return;c.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class Wv extends kn{constructor(e=[],i=Gs,s,l,c,h,p,m,d,_){super(e,i,s,l,c,h,p,m,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xr extends kn{constructor(e,i,s=ji,l,c,h,p=Pn,m=Pn,d,_=Ta,v=1){if(_!==Ta&&_!==zs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,c,h,p,m,_,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class eE extends Xr{constructor(e,i=ji,s=Gs,l,c,h=Pn,p=Pn,m,d=Ta){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,i,s,l,c,h,p,m,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qv extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cl extends Cn{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],_=[],v=[];let g=0,M=0;b("z","y","x",-1,-1,s,i,e,h,c,0),b("z","y","x",1,-1,s,i,-e,h,c,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new fn(d,3)),this.setAttribute("normal",new fn(_,3)),this.setAttribute("uv",new fn(v,2));function b(A,y,S,O,I,w,F,N,P,T,L){const q=w/P,G=F/T,j=w/2,pe=F/2,ve=N/2,J=P+1,B=T+1;let H=0,ee=0;const ge=new K;for(let Te=0;Te<B;Te++){const U=Te*G-pe;for(let Y=0;Y<J;Y++){const he=Y*q-j;ge[A]=he*O,ge[y]=U*I,ge[S]=ve,d.push(ge.x,ge.y,ge.z),ge[A]=0,ge[y]=0,ge[S]=N>0?1:-1,_.push(ge.x,ge.y,ge.z),v.push(Y/P),v.push(1-Te/T),H+=1}}for(let Te=0;Te<T;Te++)for(let U=0;U<P;U++){const Y=g+U+J*Te,he=g+U+J*(Te+1),Ae=g+(U+1)+J*(Te+1),Oe=g+(U+1)+J*Te;m.push(Y,he,Oe),m.push(he,Ae,Oe),ee+=6}p.addGroup(M,ee,L),M+=ee,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cu extends Cn{constructor(e=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const c=[],h=[],p=[],m=[],d=new K,_=new ot;h.push(0,0,0),p.push(0,0,1),m.push(.5,.5);for(let v=0,g=3;v<=i;v++,g+=3){const M=s+v/i*l;d.x=e*Math.cos(M),d.y=e*Math.sin(M),h.push(d.x,d.y,d.z),p.push(0,0,1),_.x=(h[g]/e+1)/2,_.y=(h[g+1]/e+1)/2,m.push(_.x,_.y)}for(let v=1;v<=i;v++)c.push(v,v+1,0);this.setIndex(c),this.setAttribute("position",new fn(h,3)),this.setAttribute("normal",new fn(p,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ul extends Cn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,_=m+1,v=e/p,g=i/m,M=[],b=[],A=[],y=[];for(let S=0;S<_;S++){const O=S*g-h;for(let I=0;I<d;I++){const w=I*v-c;b.push(w,-O,0),A.push(0,0,1),y.push(I/p),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let O=0;O<p;O++){const I=O+d*S,w=O+d*(S+1),F=O+1+d*(S+1),N=O+1+d*S;M.push(I,w,N),M.push(w,F,N)}this.setIndex(M),this.setAttribute("position",new fn(b,3)),this.setAttribute("normal",new fn(A,3)),this.setAttribute("uv",new fn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ps extends Cn{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,h=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+p,Math.PI);let d=0;const _=[],v=new K,g=new K,M=[],b=[],A=[],y=[];for(let S=0;S<=s;S++){const O=[],I=S/s,w=h+I*p,F=e*Math.cos(w),N=Math.sqrt(e*e-F*F);let P=0;S===0&&h===0?P=.5/i:S===s&&m===Math.PI&&(P=-.5/i);for(let T=0;T<=i;T++){const L=T/i,q=l+L*c;v.x=-N*Math.cos(q),v.y=F,v.z=N*Math.sin(q),b.push(v.x,v.y,v.z),g.copy(v).normalize(),A.push(g.x,g.y,g.z),y.push(L+P,1-I),O.push(d++)}_.push(O)}for(let S=0;S<s;S++)for(let O=0;O<i;O++){const I=_[S][O+1],w=_[S][O],F=_[S+1][O],N=_[S+1][O+1];(S!==0||h>0)&&M.push(I,w,N),(S!==s-1||m<Math.PI)&&M.push(w,F,N)}this.setIndex(M),this.setAttribute("position",new fn(b,3)),this.setAttribute("normal",new fn(A,3)),this.setAttribute("uv",new fn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yp extends Cn{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2,h=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:h,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const m=[],d=[],_=[],v=[],g=new K,M=new K,b=new K;for(let A=0;A<=s;A++){const y=h+A/s*p;for(let S=0;S<=l;S++){const O=S/l*c;M.x=(e+i*Math.cos(y))*Math.cos(O),M.y=(e+i*Math.cos(y))*Math.sin(O),M.z=i*Math.sin(y),d.push(M.x,M.y,M.z),g.x=e*Math.cos(O),g.y=e*Math.sin(O),b.subVectors(M,g).normalize(),_.push(b.x,b.y,b.z),v.push(S/l),v.push(A/s)}}for(let A=1;A<=s;A++)for(let y=1;y<=l;y++){const S=(l+1)*A+y-1,O=(l+1)*(A-1)+y-1,I=(l+1)*(A-1)+y,w=(l+1)*A+y;m.push(S,O,w),m.push(O,I,w)}this.setIndex(m),this.setAttribute("position",new fn(d,3)),this.setAttribute("normal",new fn(_,3)),this.setAttribute("uv",new fn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Wr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(Z_(l))l.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Z_(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function qn(r){const e={};for(let i=0;i<r.length;i++){const s=Wr(r[i]);for(const l in s)e[l]=s[l]}return e}function Z_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function tE(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Yv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const rl={clone:Wr,merge:qn};var nE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nE,this.fragmentShader=iE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=tE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new ht().setHex(l.value);break;case"v2":this.uniforms[s].value=new ot().fromArray(l.value);break;case"v3":this.uniforms[s].value=new K().fromArray(l.value);break;case"v4":this.uniforms[s].value=new rn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new ft().fromArray(l.value);break;case"m4":this.uniforms[s].value=new en().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Zv extends yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kv extends Xs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jd,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ls,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class aE extends Kv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class sE extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ny,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rE extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ed={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(K_(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!K_(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function K_(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class oE{constructor(e,i,s){const l=this;let c=!1,h=0,p=0,m;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(_){p++,c===!1&&l.onStart!==void 0&&l.onStart(_,h,p),c=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,p),h===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return _=_.normalize("NFC"),m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,v){return d.push(_,v),this},this.removeHandler=function(_){const v=d.indexOf(_);return v!==-1&&d.splice(v,2),this},this.getHandler=function(_){for(let v=0,g=d.length;v<g;v+=2){const M=d[v],b=d[v+1];if(M.global&&(M.lastIndex=0),M.test(_))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const lE=new oE;class Ep{constructor(e){this.manager=e!==void 0?e:lE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,c){s.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ep.DEFAULT_MATERIAL_NAME="__DEFAULT";const Or=new WeakMap;class cE extends Ep{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,h=ed.get(`image:${e}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(h),c.manager.itemEnd(e)},0);else{let v=Or.get(h);v===void 0&&(v=[],Or.set(h,v)),v.push({onLoad:i,onError:l})}return h}const p=al("img");function m(){_(),i&&i(this);const v=Or.get(this)||[];for(let g=0;g<v.length;g++){const M=v[g];M.onLoad&&M.onLoad(this)}Or.delete(this),c.manager.itemEnd(e)}function d(v){_(),l&&l(v),ed.remove(`image:${e}`);const g=Or.get(this)||[];for(let M=0;M<g.length;M++){const b=g[M];b.onError&&b.onError(v)}Or.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){p.removeEventListener("load",m,!1),p.removeEventListener("error",d,!1)}return p.addEventListener("load",m,!1),p.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),ed.add(`image:${e}`,p),c.manager.itemStart(e),p.src=e,p}}class uE extends Ep{constructor(e){super(e)}load(e,i,s,l){const c=new kn,h=new cE(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(p){c.image=p,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class bp extends Rn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const td=new en,j_=new K,Q_=new K;class jv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mp,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;j_.setFromMatrixPosition(e.matrixWorld),i.position.copy(j_),Q_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Q_),i.updateMatrixWorld(),td.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===il||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(td)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xc=new K,Wc=new Zr,ki=new K;class Qv extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xc,Wc,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,Wc,ki.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(Xc,Wc,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,Wc,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const as=new K,J_=new ot,$_=new ot;class pi extends Qv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=sl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sl*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,i){return this.getViewBounds(e,J_,$_),i.subVectors($_,J_)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan($o*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class fE extends jv{constructor(){super(new pi(90,1,.5,500)),this.isPointLightShadow=!0}}class hE extends bp{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new fE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class pu extends Qv{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class dE extends jv{constructor(){super(new pu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nd extends bp{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new dE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class pE extends bp{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Pr=-90,Ir=1;class mE extends Rn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Pr,Ir,e,i);l.layers=this.layers,this.add(l);const c=new pi(Pr,Ir,e,i);c.layers=this.layers,this.add(c);const h=new pi(Pr,Ir,e,i);h.layers=this.layers,this.add(h);const p=new pi(Pr,Ir,e,i);p.layers=this.layers,this.add(p);const m=new pi(Pr,Ir,e,i);m.layers=this.layers,this.add(m);const d=new pi(Pr,Ir,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(e===Yi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===il)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(v,g,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class gE extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _E{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=vE.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function vE(){this._document.hidden===!1&&this.reset()}const ev=new en;class xE{constructor(e,i,s=0,l=1/0){this.ray=new du(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new Sp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Dt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return ev.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ev),this}intersectObject(e,i=!0,s=[]){return $d(e,this,s,i),s.sort(tv),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)$d(e[l],this,s,i);return s.sort(tv),s}}function tv(r,e){return r.distance-e.distance}function $d(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,p=c.length;h<p;h++)$d(c[h],e,i,!0)}}const Dp=class Dp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Dp.prototype.isMatrix2=!0;let nv=Dp;function iv(r,e,i,s){const l=SE(s);switch(i){case Iv:return r*e;case Bv:return r*e/l.components*l.byteLength;case dp:return r*e/l.components*l.byteLength;case Vs:return r*e*2/l.components*l.byteLength;case pp:return r*e*2/l.components*l.byteLength;case Fv:return r*e*3/l.components*l.byteLength;case Pi:return r*e*4/l.components*l.byteLength;case mp:return r*e*4/l.components*l.byteLength;case jc:case Qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Jc:case $c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Md:case Ed:return Math.max(r,16)*Math.max(e,8)/4;case Sd:case yd:return Math.max(r,8)*Math.max(e,8)/2;case bd:case Td:case Rd:case Cd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ad:case iu:case wd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Od:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Id:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case zd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Vd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case kd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Xd:case Wd:case qd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Yd:case Zd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case au:case Kd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function SE(r){switch(r){case mi:case Nv:return{byteLength:1,components:1};case tl:case Lv:case gi:return{byteLength:2,components:1};case fp:case hp:return{byteLength:2,components:4};case ji:case up:case qi:return{byteLength:4,components:1};case Ov:case Pv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ip}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ip);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jv(){let r=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function ME(r){const e=new WeakMap;function i(p,m){const d=p.array,_=p.usage,v=d.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,d,_),p.onUploadCallback();let M;if(d instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=r.SHORT;else if(d instanceof Uint32Array)M=r.UNSIGNED_INT;else if(d instanceof Int32Array)M=r.INT;else if(d instanceof Int8Array)M=r.BYTE;else if(d instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:v}}function s(p,m,d){const _=m.array,v=m.updateRanges;if(r.bindBuffer(d,p),v.length===0)r.bufferSubData(d,0,_);else{v.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<v.length;M++){const b=v[g],A=v[M];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++g,v[g]=A)}v.length=g+1;for(let M=0,b=v.length;M<b;M++){const A=v[M];r.bufferSubData(d,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=e.get(p);(!_||_.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var yE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,UE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,PE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,IE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,VE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,XE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,WE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,YE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ZE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JE="gl_FragColor = linearToOutputTexel( gl_FragColor );",$E=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ob=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ub=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,db=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_b=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ub=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ob=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Jb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_T=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ST=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ET=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,UT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$T=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:yE,alphahash_pars_fragment:EE,alphamap_fragment:bE,alphamap_pars_fragment:TE,alphatest_fragment:AE,alphatest_pars_fragment:RE,aomap_fragment:CE,aomap_pars_fragment:wE,batching_pars_vertex:DE,batching_vertex:UE,begin_vertex:NE,beginnormal_vertex:LE,bsdfs:OE,iridescence_fragment:PE,bumpmap_pars_fragment:IE,clipping_planes_fragment:FE,clipping_planes_pars_fragment:BE,clipping_planes_pars_vertex:zE,clipping_planes_vertex:HE,color_fragment:GE,color_pars_fragment:VE,color_pars_vertex:kE,color_vertex:XE,common:WE,cube_uv_reflection_fragment:qE,defaultnormal_vertex:YE,displacementmap_pars_vertex:ZE,displacementmap_vertex:KE,emissivemap_fragment:jE,emissivemap_pars_fragment:QE,colorspace_fragment:JE,colorspace_pars_fragment:$E,envmap_fragment:eb,envmap_common_pars_fragment:tb,envmap_pars_fragment:nb,envmap_pars_vertex:ib,envmap_physical_pars_fragment:pb,envmap_vertex:ab,fog_vertex:sb,fog_pars_vertex:rb,fog_fragment:ob,fog_pars_fragment:lb,gradientmap_pars_fragment:cb,lightmap_pars_fragment:ub,lights_lambert_fragment:fb,lights_lambert_pars_fragment:hb,lights_pars_begin:db,lights_toon_fragment:mb,lights_toon_pars_fragment:gb,lights_phong_fragment:_b,lights_phong_pars_fragment:vb,lights_physical_fragment:xb,lights_physical_pars_fragment:Sb,lights_fragment_begin:Mb,lights_fragment_maps:yb,lights_fragment_end:Eb,lightprobes_pars_fragment:bb,logdepthbuf_fragment:Tb,logdepthbuf_pars_fragment:Ab,logdepthbuf_pars_vertex:Rb,logdepthbuf_vertex:Cb,map_fragment:wb,map_pars_fragment:Db,map_particle_fragment:Ub,map_particle_pars_fragment:Nb,metalnessmap_fragment:Lb,metalnessmap_pars_fragment:Ob,morphinstance_vertex:Pb,morphcolor_vertex:Ib,morphnormal_vertex:Fb,morphtarget_pars_vertex:Bb,morphtarget_vertex:zb,normal_fragment_begin:Hb,normal_fragment_maps:Gb,normal_pars_fragment:Vb,normal_pars_vertex:kb,normal_vertex:Xb,normalmap_pars_fragment:Wb,clearcoat_normal_fragment_begin:qb,clearcoat_normal_fragment_maps:Yb,clearcoat_pars_fragment:Zb,iridescence_pars_fragment:Kb,opaque_fragment:jb,packing:Qb,premultiplied_alpha_fragment:Jb,project_vertex:$b,dithering_fragment:eT,dithering_pars_fragment:tT,roughnessmap_fragment:nT,roughnessmap_pars_fragment:iT,shadowmap_pars_fragment:aT,shadowmap_pars_vertex:sT,shadowmap_vertex:rT,shadowmask_pars_fragment:oT,skinbase_vertex:lT,skinning_pars_vertex:cT,skinning_vertex:uT,skinnormal_vertex:fT,specularmap_fragment:hT,specularmap_pars_fragment:dT,tonemapping_fragment:pT,tonemapping_pars_fragment:mT,transmission_fragment:gT,transmission_pars_fragment:_T,uv_pars_fragment:vT,uv_pars_vertex:xT,uv_vertex:ST,worldpos_vertex:MT,background_vert:yT,background_frag:ET,backgroundCube_vert:bT,backgroundCube_frag:TT,cube_vert:AT,cube_frag:RT,depth_vert:CT,depth_frag:wT,distance_vert:DT,distance_frag:UT,equirect_vert:NT,equirect_frag:LT,linedashed_vert:OT,linedashed_frag:PT,meshbasic_vert:IT,meshbasic_frag:FT,meshlambert_vert:BT,meshlambert_frag:zT,meshmatcap_vert:HT,meshmatcap_frag:GT,meshnormal_vert:VT,meshnormal_frag:kT,meshphong_vert:XT,meshphong_frag:WT,meshphysical_vert:qT,meshphysical_frag:YT,meshtoon_vert:ZT,meshtoon_frag:KT,points_vert:jT,points_frag:QT,shadow_vert:JT,shadow_frag:$T,sprite_vert:e1,sprite_frag:t1},Be={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Wi={basic:{uniforms:qn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:qn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:qn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:qn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:qn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new ht(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:qn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:qn([Be.points,Be.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:qn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:qn([Be.common,Be.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:qn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:qn([Be.sprite,Be.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:qn([Be.common,Be.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:qn([Be.lights,Be.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Wi.physical={uniforms:qn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const qc={r:0,b:0,g:0},n1=new en,$v=new ft;$v.set(-1,0,0,0,1,0,0,0,1);function i1(r,e,i,s,l,c){const h=new ht(0);let p=l===!0?0:1,m,d,_=null,v=0,g=null;function M(O){let I=O.isScene===!0?O.background:null;if(I&&I.isTexture){const w=O.backgroundBlurriness>0;I=e.get(I,w)}return I}function b(O){let I=!1;const w=M(O);w===null?y(h,p):w&&w.isColor&&(y(w,1),I=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function A(O,I){const w=M(I);w&&(w.isCubeTexture||w.mapping===hu)?(d===void 0&&(d=new Mn(new cl(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Wr(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,N,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(n1.makeRotationFromEuler(I.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply($v),d.material.toneMapped=Rt.getTransfer(w.colorSpace)!==Bt,(_!==w||v!==w.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,_=w,v=w.version,g=r.toneMapping),d.layers.enableAll(),O.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new Mn(new ul(2,2),new yn({name:"BackgroundMaterial",uniforms:Wr(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(w.colorSpace)!==Bt,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(_!==w||v!==w.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=w,v=w.version,g=r.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function y(O,I){O.getRGB(qc,Yv(r)),i.buffers.color.setClear(qc.r,qc.g,qc.b,I,c)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,I=1){h.set(O),p=I,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,y(h,p)},render:b,addToRenderList:A,dispose:S}}function a1(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function p(G,j,pe,ve,J){let B=!1;const H=v(G,ve,pe,j);c!==H&&(c=H,d(c.object)),B=M(G,ve,pe,J),B&&b(G,ve,pe,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(B||h)&&(h=!1,w(G,j,pe,ve),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return r.createVertexArray()}function d(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function v(G,j,pe,ve){const J=ve.wireframe===!0;let B=s[j.id];B===void 0&&(B={},s[j.id]=B);const H=G.isInstancedMesh===!0?G.id:0;let ee=B[H];ee===void 0&&(ee={},B[H]=ee);let ge=ee[pe.id];ge===void 0&&(ge={},ee[pe.id]=ge);let Te=ge[J];return Te===void 0&&(Te=g(m()),ge[J]=Te),Te}function g(G){const j=[],pe=[],ve=[];for(let J=0;J<i;J++)j[J]=0,pe[J]=0,ve[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:pe,attributeDivisors:ve,object:G,attributes:{},index:null}}function M(G,j,pe,ve){const J=c.attributes,B=j.attributes;let H=0;const ee=pe.getAttributes();for(const ge in ee)if(ee[ge].location>=0){const U=J[ge];let Y=B[ge];if(Y===void 0&&(ge==="instanceMatrix"&&G.instanceMatrix&&(Y=G.instanceMatrix),ge==="instanceColor"&&G.instanceColor&&(Y=G.instanceColor)),U===void 0||U.attribute!==Y||Y&&U.data!==Y.data)return!0;H++}return c.attributesNum!==H||c.index!==ve}function b(G,j,pe,ve){const J={},B=j.attributes;let H=0;const ee=pe.getAttributes();for(const ge in ee)if(ee[ge].location>=0){let U=B[ge];U===void 0&&(ge==="instanceMatrix"&&G.instanceMatrix&&(U=G.instanceMatrix),ge==="instanceColor"&&G.instanceColor&&(U=G.instanceColor));const Y={};Y.attribute=U,U&&U.data&&(Y.data=U.data),J[ge]=Y,H++}c.attributes=J,c.attributesNum=H,c.index=ve}function A(){const G=c.newAttributes;for(let j=0,pe=G.length;j<pe;j++)G[j]=0}function y(G){S(G,0)}function S(G,j){const pe=c.newAttributes,ve=c.enabledAttributes,J=c.attributeDivisors;pe[G]=1,ve[G]===0&&(r.enableVertexAttribArray(G),ve[G]=1),J[G]!==j&&(r.vertexAttribDivisor(G,j),J[G]=j)}function O(){const G=c.newAttributes,j=c.enabledAttributes;for(let pe=0,ve=j.length;pe<ve;pe++)j[pe]!==G[pe]&&(r.disableVertexAttribArray(pe),j[pe]=0)}function I(G,j,pe,ve,J,B,H){H===!0?r.vertexAttribIPointer(G,j,pe,J,B):r.vertexAttribPointer(G,j,pe,ve,J,B)}function w(G,j,pe,ve){A();const J=ve.attributes,B=pe.getAttributes(),H=j.defaultAttributeValues;for(const ee in B){const ge=B[ee];if(ge.location>=0){let Te=J[ee];if(Te===void 0&&(ee==="instanceMatrix"&&G.instanceMatrix&&(Te=G.instanceMatrix),ee==="instanceColor"&&G.instanceColor&&(Te=G.instanceColor)),Te!==void 0){const U=Te.normalized,Y=Te.itemSize,he=e.get(Te);if(he===void 0)continue;const Ae=he.buffer,Oe=he.type,ne=he.bytesPerElement,Me=Oe===r.INT||Oe===r.UNSIGNED_INT||Te.gpuType===up;if(Te.isInterleavedBufferAttribute){const ye=Te.data,Ge=ye.stride,it=Te.offset;if(ye.isInstancedInterleavedBuffer){for(let Je=0;Je<ge.locationSize;Je++)S(ge.location+Je,ye.meshPerAttribute);G.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Je=0;Je<ge.locationSize;Je++)y(ge.location+Je);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let Je=0;Je<ge.locationSize;Je++)I(ge.location+Je,Y/ge.locationSize,Oe,U,Ge*ne,(it+Y/ge.locationSize*Je)*ne,Me)}else{if(Te.isInstancedBufferAttribute){for(let ye=0;ye<ge.locationSize;ye++)S(ge.location+ye,Te.meshPerAttribute);G.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let ye=0;ye<ge.locationSize;ye++)y(ge.location+ye);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let ye=0;ye<ge.locationSize;ye++)I(ge.location+ye,Y/ge.locationSize,Oe,U,Y*ne,Y/ge.locationSize*ye*ne,Me)}}else if(H!==void 0){const U=H[ee];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(ge.location,U);break;case 3:r.vertexAttrib3fv(ge.location,U);break;case 4:r.vertexAttrib4fv(ge.location,U);break;default:r.vertexAttrib1fv(ge.location,U)}}}}O()}function F(){L();for(const G in s){const j=s[G];for(const pe in j){const ve=j[pe];for(const J in ve){const B=ve[J];for(const H in B)_(B[H].object),delete B[H];delete ve[J]}}delete s[G]}}function N(G){if(s[G.id]===void 0)return;const j=s[G.id];for(const pe in j){const ve=j[pe];for(const J in ve){const B=ve[J];for(const H in B)_(B[H].object),delete B[H];delete ve[J]}}delete s[G.id]}function P(G){for(const j in s){const pe=s[j];for(const ve in pe){const J=pe[ve];if(J[G.id]===void 0)continue;const B=J[G.id];for(const H in B)_(B[H].object),delete B[H];delete J[G.id]}}}function T(G){for(const j in s){const pe=s[j],ve=G.isInstancedMesh===!0?G.id:0,J=pe[ve];if(J!==void 0){for(const B in J){const H=J[B];for(const ee in H)_(H[ee].object),delete H[ee];delete J[B]}delete pe[ve],Object.keys(pe).length===0&&delete s[j]}}}function L(){q(),h=!0,c!==l&&(c=l,d(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:L,resetDefaultState:q,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:y,disableUnusedAttributes:O}}function s1(r,e,i){let s;function l(m){s=m}function c(m,d){r.drawArrays(s,m,d),i.update(d,s,1)}function h(m,d,_){_!==0&&(r.drawArraysInstanced(s,m,d,_),i.update(d,s,_))}function p(m,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,_);let g=0;for(let M=0;M<_;M++)g+=d[M];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function r1(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Pi&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(P){const T=P===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==mi&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==qi&&!T)}function m(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const _=m(d);_!==d&&(rt("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:O,maxVaryings:I,maxFragmentUniforms:w,maxSamples:F,samples:N}}function o1(r){const e=this;let i=null,s=0,l=!1,c=!1;const h=new Ls,p=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const M=v.length!==0||g||s!==0||l;return l=g,s=v.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,M){const b=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,S=r.get(v);if(!l||b===null||b.length===0||c&&!y)c?_(null):d();else{const O=c?0:s,I=O*4;let w=S.clippingState||null;m.value=w,w=_(b,g,I,M);for(let F=0;F!==I;++F)w[F]=i[F];S.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(v,g,M,b){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=m.value,b!==!0||y===null){const S=M+A*4,O=g.matrixWorldInverse;p.getNormalMatrix(O),(y===null||y.length<S)&&(y=new Float32Array(S));for(let I=0,w=M;I!==A;++I,w+=4)h.copy(v[I]).applyMatrix4(O,p),h.normal.toArray(y,w),y[w+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}const rs=4,av=[.125,.215,.35,.446,.526,.582],Is=20,l1=256,Ko=new pu,sv=new ht;let id=null,ad=0,sd=0,rd=!1;const c1=new K;class rv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=c1}=c;id=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(id,ad,sd),this._renderer.xr.enabled=rd,e.scissorTest=!1,Fr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Gs||e.mapping===kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),id=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:gi,format:Pi,colorSpace:su,depthBuffer:!1},l=ov(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ov(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=u1(c)),this._blurMaterial=h1(c,e,i),this._ggxMaterial=f1(c,e,i)}return l}_compileMaterial(e){const i=new Mn(new Cn,e);this._renderer.compile(i,Ko)}_sceneToCubeUV(e,i,s,l,c){const m=new pi(90,1,i,s),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,M=v.toneMapping;v.getClearColor(sv),v.toneMapping=Ki,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new cl,new Hs({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let S=!1;const O=e.background;O?O.isColor&&(y.color.copy(O),e.background=null,S=!0):(y.color.copy(sv),S=!0);for(let I=0;I<6;I++){const w=I%3;w===0?(m.up.set(0,d[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[I],c.y,c.z)):w===1?(m.up.set(0,0,d[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[I],c.z)):(m.up.set(0,d[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[I]));const F=this._cubeSize;Fr(l,w*F,I>2?F:0,F,F),v.setRenderTarget(l),S&&v.render(A,m),v.render(e,m)}v.toneMapping=M,v.autoClear=g,e.background=O}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Gs||e.mapping===kr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=cv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Fr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Ko)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(d*d-_*_),g=0+d*1.25,M=v*g,{_lodMax:b}=this,A=this._sizeLods[s],y=3*A*(s>b-rs?s-b+rs:0),S=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-i,Fr(c,y,S,3*A,2*A),l.setRenderTarget(c),l.render(p,Ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Fr(e,y,S,3*A,2*A),l.setRenderTarget(e),l.render(p,Ko)}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=d;const g=d.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Is-1),A=c/b,y=isFinite(c)?1+Math.floor(_*A):Is;y>Is&&rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Is}`);const S=[];let O=0;for(let P=0;P<Is;++P){const T=P/A,L=Math.exp(-T*T/2);S.push(L),P===0?O+=L:P<y&&(O+=2*L)}for(let P=0;P<S.length;P++)S[P]=S[P]/O;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:I}=this;g.dTheta.value=b,g.mipInt.value=I-s;const w=this._sizeLods[l],F=3*w*(l>I-rs?l-I+rs:0),N=4*(this._cubeSize-w);Fr(i,F,N,3*w,2*w),m.setRenderTarget(i),m.render(v,Ko)}}function u1(r){const e=[],i=[],s=[];let l=r;const c=r-rs+1+av.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);e.push(p);let m=1/p;h>r-rs?m=av[h-r+rs-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),_=-d,v=1+d,g=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,b=6,A=3,y=2,S=1,O=new Float32Array(A*b*M),I=new Float32Array(y*b*M),w=new Float32Array(S*b*M);for(let N=0;N<M;N++){const P=N%3*2/3-1,T=N>2?0:-1,L=[P,T,0,P+2/3,T,0,P+2/3,T+1,0,P,T,0,P+2/3,T+1,0,P,T+1,0];O.set(L,A*b*N),I.set(g,y*b*N);const q=[N,N,N,N,N,N];w.set(q,S*b*N)}const F=new Cn;F.setAttribute("position",new Ii(O,A)),F.setAttribute("uv",new Ii(I,y)),F.setAttribute("faceIndex",new Ii(w,S)),s.push(new Mn(F,null)),l>rs&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function ov(r,e,i){const s=new ei(r,e,i);return s.texture.mapping=hu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Fr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function f1(r,e,i){return new yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:l1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function h1(r,e,i){const s=new Float32Array(Is),l=new K(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function lv(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function cv(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class ex extends ei{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Wv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new cl(5,5,5),c=new yn({name:"CubemapFromEquirect",uniforms:Wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:In,blending:Zi});c.uniforms.tEquirect.value=i;const h=new Mn(l,c),p=i.minFilter;return i.minFilter===Bs&&(i.minFilter=Vn),new mE(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}function d1(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?h(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Ch||M===wh)if(e.has(g)){const b=e.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const A=new ex(b.height);return A.fromEquirectangularTexture(r,g),e.set(g,A),g.addEventListener("dispose",d),p(A.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const M=g.mapping,b=M===Ch||M===wh,A=M===Gs||M===kr;if(b||A){let y=i.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new rv(r)),y=b?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const O=g.image;return b&&O&&O.height>0||A&&O&&m(O)?(s===null&&(s=new rv(r)),y=b?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function p(g,M){return M===Ch?g.mapping=Gs:M===wh&&(g.mapping=kr),g}function m(g){let M=0;const b=6;for(let A=0;A<b;A++)g[A]!==void 0&&M++;return M===b}function d(g){const M=g.target;M.removeEventListener("dispose",d);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function p1(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Hr("WebGLRenderer: "+s+" extension not supported."),l}}}function m1(r,e,i,s){const l={},c=new WeakMap;function h(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",h),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(v,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER)}function d(v){const g=[],M=v.index,b=v.attributes.position;let A=0;if(b===void 0)return;if(M!==null){const O=M.array;A=M.version;for(let I=0,w=O.length;I<w;I+=3){const F=O[I+0],N=O[I+1],P=O[I+2];g.push(F,N,N,P,P,F)}}else{const O=b.array;A=b.version;for(let I=0,w=O.length/3-1;I<w;I+=3){const F=I+0,N=I+1,P=I+2;g.push(F,N,N,P,P,F)}}const y=new(b.count>=65535?kv:Vv)(g,1);y.version=A;const S=c.get(v);S&&e.remove(S),c.set(v,y)}function _(v){const g=c.get(v);if(g){const M=v.index;M!==null&&g.version<M.version&&d(v)}else d(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:_}}function g1(r,e,i){let s;function l(v){s=v}let c,h;function p(v){c=v.type,h=v.bytesPerElement}function m(v,g){r.drawElements(s,g,c,v*h),i.update(g,s,1)}function d(v,g,M){M!==0&&(r.drawElementsInstanced(s,g,c,v*h,M),i.update(g,s,M))}function _(v,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,M);let A=0;for(let y=0;y<M;y++)A+=g[y];i.update(A,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=_}function _1(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Dt("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function v1(r,e,i){const s=new WeakMap,l=new rn;function c(h,p,m){const d=h.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(p);if(g===void 0||g.count!==v){let q=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",q)};var M=q;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,A=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],O=p.morphAttributes.normal||[],I=p.morphAttributes.color||[];let w=0;b===!0&&(w=1),A===!0&&(w=2),y===!0&&(w=3);let F=p.attributes.position.count*w,N=1;F>e.maxTextureSize&&(N=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const P=new Float32Array(F*N*4*v),T=new Hv(P,F,N,v);T.type=qi,T.needsUpdate=!0;const L=w*4;for(let G=0;G<v;G++){const j=S[G],pe=O[G],ve=I[G],J=F*N*4*G;for(let B=0;B<j.count;B++){const H=B*L;b===!0&&(l.fromBufferAttribute(j,B),P[J+H+0]=l.x,P[J+H+1]=l.y,P[J+H+2]=l.z,P[J+H+3]=0),A===!0&&(l.fromBufferAttribute(pe,B),P[J+H+4]=l.x,P[J+H+5]=l.y,P[J+H+6]=l.z,P[J+H+7]=0),y===!0&&(l.fromBufferAttribute(ve,B),P[J+H+8]=l.x,P[J+H+9]=l.y,P[J+H+10]=l.z,P[J+H+11]=ve.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new ot(F,N)},s.set(p,g),p.addEventListener("dispose",q)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<d.length;y++)b+=d[y];const A=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function x1(r,e,i,s,l){let c=new WeakMap;function h(d){const _=l.render.frame,v=d.geometry,g=e.get(d,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==_&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,_))),d.isSkinnedMesh){const M=d.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return g}function p(){c=new WeakMap}function m(d){const _=d.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:h,dispose:p}}const S1={[ap]:"LINEAR_TONE_MAPPING",[sp]:"REINHARD_TONE_MAPPING",[rp]:"CINEON_TONE_MAPPING",[fu]:"ACES_FILMIC_TONE_MAPPING",[lp]:"AGX_TONE_MAPPING",[cp]:"NEUTRAL_TONE_MAPPING",[op]:"CUSTOM_TONE_MAPPING"};function M1(r,e,i,s,l,c){const h=new ei(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new Xr(e,i):void 0}),p=new ei(e,i,{type:gi,depthBuffer:!1,stencilBuffer:!1}),m=new Cn;m.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new fn([0,2,0,0,2,0],2));const d=new Zv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new Mn(m,d),v=new pu(-1,1,1,-1,0,1);let g=null,M=null,b=!1,A,y=null,S=[],O=!1;this.setSize=function(I,w){h.setSize(I,w),p.setSize(I,w);for(let F=0;F<S.length;F++){const N=S[F];N.setSize&&N.setSize(I,w)}},this.setEffects=function(I){S=I,O=S.length>0&&S[0].isRenderPass===!0;const w=h.width,F=h.height;for(let N=0;N<S.length;N++){const P=S[N];P.setSize&&P.setSize(w,F)}},this.begin=function(I,w){if(b||I.toneMapping===Ki&&S.length===0)return!1;if(y=w,w!==null){const F=w.width,N=w.height;(h.width!==F||h.height!==N)&&this.setSize(F,N)}return O===!1&&I.setRenderTarget(h),A=I.toneMapping,I.toneMapping=Ki,!0},this.hasRenderPass=function(){return O},this.end=function(I,w){I.toneMapping=A,b=!0;let F=h,N=p;for(let P=0;P<S.length;P++){const T=S[P];if(T.enabled!==!1&&(T.render(I,N,F,w),T.needsSwap!==!1)){const L=F;F=N,N=L}}if(g!==I.outputColorSpace||M!==I.toneMapping){g=I.outputColorSpace,M=I.toneMapping,d.defines={},Rt.getTransfer(g)===Bt&&(d.defines.SRGB_TRANSFER="");const P=S1[M];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=F.texture,I.setRenderTarget(y),I.render(_,v),y=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){h.depthTexture&&h.depthTexture.dispose(),h.dispose(),p.dispose(),m.dispose(),d.dispose()}}const tx=new kn,ep=new Xr(1,1),nx=new Hv,ix=new Py,ax=new Wv,uv=[],fv=[],hv=new Float32Array(16),dv=new Float32Array(9),pv=new Float32Array(4);function Kr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=uv[l];if(c===void 0&&(c=new Float32Array(l),uv[l]=c),e!==0){s.toArray(c,0);for(let h=1,p=0;h!==e;++h)p+=i,r[h].toArray(c,p)}return c}function En(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function bn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function gu(r,e){let i=fv[e];i===void 0&&(i=new Int32Array(e),fv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function y1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function E1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;r.uniform2fv(this.addr,e),bn(i,e)}}function b1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(En(i,e))return;r.uniform3fv(this.addr,e),bn(i,e)}}function T1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;r.uniform4fv(this.addr,e),bn(i,e)}}function A1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(En(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),bn(i,e)}else{if(En(i,s))return;pv.set(s),r.uniformMatrix2fv(this.addr,!1,pv),bn(i,s)}}function R1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(En(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),bn(i,e)}else{if(En(i,s))return;dv.set(s),r.uniformMatrix3fv(this.addr,!1,dv),bn(i,s)}}function C1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(En(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),bn(i,e)}else{if(En(i,s))return;hv.set(s),r.uniformMatrix4fv(this.addr,!1,hv),bn(i,s)}}function w1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function D1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;r.uniform2iv(this.addr,e),bn(i,e)}}function U1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;r.uniform3iv(this.addr,e),bn(i,e)}}function N1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;r.uniform4iv(this.addr,e),bn(i,e)}}function L1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function O1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;r.uniform2uiv(this.addr,e),bn(i,e)}}function P1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;r.uniform3uiv(this.addr,e),bn(i,e)}}function I1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;r.uniform4uiv(this.addr,e),bn(i,e)}}function F1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(ep.compareFunction=i.isReversedDepthBuffer()?_p:gp,c=ep):c=tx,i.setTexture2D(e||c,l)}function B1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||ix,l)}function z1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||ax,l)}function H1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||nx,l)}function G1(r){switch(r){case 5126:return y1;case 35664:return E1;case 35665:return b1;case 35666:return T1;case 35674:return A1;case 35675:return R1;case 35676:return C1;case 5124:case 35670:return w1;case 35667:case 35671:return D1;case 35668:case 35672:return U1;case 35669:case 35673:return N1;case 5125:return L1;case 36294:return O1;case 36295:return P1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return F1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return z1;case 36289:case 36303:case 36311:case 36292:return H1}}function V1(r,e){r.uniform1fv(this.addr,e)}function k1(r,e){const i=Kr(e,this.size,2);r.uniform2fv(this.addr,i)}function X1(r,e){const i=Kr(e,this.size,3);r.uniform3fv(this.addr,i)}function W1(r,e){const i=Kr(e,this.size,4);r.uniform4fv(this.addr,i)}function q1(r,e){const i=Kr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function Y1(r,e){const i=Kr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function Z1(r,e){const i=Kr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function K1(r,e){r.uniform1iv(this.addr,e)}function j1(r,e){r.uniform2iv(this.addr,e)}function Q1(r,e){r.uniform3iv(this.addr,e)}function J1(r,e){r.uniform4iv(this.addr,e)}function $1(r,e){r.uniform1uiv(this.addr,e)}function eA(r,e){r.uniform2uiv(this.addr,e)}function tA(r,e){r.uniform3uiv(this.addr,e)}function nA(r,e){r.uniform4uiv(this.addr,e)}function iA(r,e,i){const s=this.cache,l=e.length,c=gu(i,l);En(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=ep:h=tx;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||h,c[p])}function aA(r,e,i){const s=this.cache,l=e.length,c=gu(i,l);En(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||ix,c[h])}function sA(r,e,i){const s=this.cache,l=e.length,c=gu(i,l);En(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||ax,c[h])}function rA(r,e,i){const s=this.cache,l=e.length,c=gu(i,l);En(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||nx,c[h])}function oA(r){switch(r){case 5126:return V1;case 35664:return k1;case 35665:return X1;case 35666:return W1;case 35674:return q1;case 35675:return Y1;case 35676:return Z1;case 5124:case 35670:return K1;case 35667:case 35671:return j1;case 35668:case 35672:return Q1;case 35669:case 35673:return J1;case 5125:return $1;case 36294:return eA;case 36295:return tA;case 36296:return nA;case 35678:case 36198:case 36298:case 36306:case 35682:return iA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return sA;case 36289:case 36303:case 36311:case 36292:return rA}}class lA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=G1(i.type)}}class cA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=oA(i.type)}}class uA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const od=/(\w+)(\])?(\[|\.)?/g;function mv(r,e){r.seq.push(e),r.map[e.id]=e}function fA(r,e,i){const s=r.name,l=s.length;for(od.lastIndex=0;;){const c=od.exec(s),h=od.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){mv(i,d===void 0?new lA(p,r,e):new cA(p,r,e));break}else{let v=i.map[p];v===void 0&&(v=new uA(p),mv(i,v)),i=v}}}class eu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=e.getActiveUniform(i,h),m=e.getUniformLocation(i,p.name);fA(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function gv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const hA=37297;let dA=0;function pA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const _v=new ft;function mA(r){Rt._getMatrix(_v,Rt.workingColorSpace,r);const e=`mat3( ${_v.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(r)){case ru:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function vv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+pA(r.getShaderSource(e),p)}else return c}function gA(r,e){const i=mA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const _A={[ap]:"Linear",[sp]:"Reinhard",[rp]:"Cineon",[fu]:"ACESFilmic",[lp]:"AgX",[cp]:"Neutral",[op]:"Custom"};function vA(r,e){const i=_A[e];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Yc=new K;function xA(){Rt.getLuminanceCoefficients(Yc);const r=Yc.x.toFixed(4),e=Yc.y.toFixed(4),i=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function MA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function yA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),h=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:r.getAttribLocation(e,h),locationSize:p}}return i}function Jo(r){return r!==""}function xv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EA=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(r){return r.replace(EA,TA)}const bA=new Map;function TA(r,e){let i=vt[e];if(i===void 0){const s=bA.get(e);if(s!==void 0)i=vt[s],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tp(i)}const AA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mv(r){return r.replace(AA,RA)}function RA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function yv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const CA={[Kc]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function wA(r){return CA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const DA={[Gs]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE",[hu]:"ENVMAP_TYPE_CUBE_UV"};function UA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":DA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const NA={[kr]:"ENVMAP_MODE_REFRACTION"};function LA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":NA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const OA={[Dv]:"ENVMAP_BLENDING_MULTIPLY",[$M]:"ENVMAP_BLENDING_MIX",[ey]:"ENVMAP_BLENDING_ADD"};function PA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":OA[r.combine]||"ENVMAP_BLENDING_NONE"}function IA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function FA(r,e,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=wA(i),d=UA(i),_=LA(i),v=PA(i),g=IA(i),M=SA(i),b=MA(c),A=l.createProgram();let y,S,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Jo).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Jo).join(`
`),S.length>0&&(S+=`
`)):(y=[yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),S=[yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ki?"#define TONE_MAPPING":"",i.toneMapping!==Ki?vt.tonemapping_pars_fragment:"",i.toneMapping!==Ki?vA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,gA("linearToOutputTexel",i.outputColorSpace),xA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jo).join(`
`)),h=tp(h),h=xv(h,i),h=Sv(h,i),p=tp(p),p=xv(p,i),p=Sv(p,i),h=Mv(h),p=Mv(p),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===b_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===b_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const I=O+y+h,w=O+S+p,F=gv(l,l.VERTEX_SHADER,I),N=gv(l,l.FRAGMENT_SHADER,w);l.attachShader(A,F),l.attachShader(A,N),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function P(G){if(r.debug.checkShaderErrors){const j=l.getProgramInfoLog(A)||"",pe=l.getShaderInfoLog(F)||"",ve=l.getShaderInfoLog(N)||"",J=j.trim(),B=pe.trim(),H=ve.trim();let ee=!0,ge=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,F,N);else{const Te=vv(l,F,"vertex"),U=vv(l,N,"fragment");Dt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+Te+`
`+U)}else J!==""?rt("WebGLProgram: Program Info Log:",J):(B===""||H==="")&&(ge=!1);ge&&(G.diagnostics={runnable:ee,programLog:J,vertexShader:{log:B,prefix:y},fragmentShader:{log:H,prefix:S}})}l.deleteShader(F),l.deleteShader(N),T=new eu(l,A),L=yA(l,A)}let T;this.getUniforms=function(){return T===void 0&&P(this),T};let L;this.getAttributes=function(){return L===void 0&&P(this),L};let q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=l.getProgramParameter(A,hA)),q},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=dA++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=N,this}let BA=0;class zA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new HA(e),i.set(e,s)),s}}class HA{constructor(e){this.id=BA++,this.code=e,this.usedTimes=0}}function GA(r){return r===Vs||r===iu||r===au}function VA(r,e,i,s,l,c){const h=new Sp,p=new zA,m=new Set,d=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function A(T,L,q,G,j,pe){const ve=G.fog,J=j.geometry,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ee=e.get(T.envMap||B,H),ge=ee&&ee.mapping===hu?ee.image.height:null,Te=M[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&rt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const U=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Y=U!==void 0?U.length:0;let he=0;J.morphAttributes.position!==void 0&&(he=1),J.morphAttributes.normal!==void 0&&(he=2),J.morphAttributes.color!==void 0&&(he=3);let Ae,Oe,ne,Me;if(Te){const We=Wi[Te];Ae=We.vertexShader,Oe=We.fragmentShader}else{Ae=T.vertexShader,Oe=T.fragmentShader;const We=p.getVertexShaderStage(T),tn=p.getFragmentShaderStage(T);p.update(T,We,tn),ne=We.id,Me=tn.id}const ye=r.getRenderTarget(),Ge=r.state.buffers.depth.getReversed(),it=j.isInstancedMesh===!0,Je=j.isBatchedMesh===!0,Zt=!!T.map,dt=!!T.matcap,Ee=!!ee,He=!!T.aoMap,Pe=!!T.lightMap,ct=!!T.bumpMap&&T.wireframe===!1,st=!!T.normalMap,xt=!!T.displacementMap,_t=!!T.emissiveMap,St=!!T.metalnessMap,Pt=!!T.roughnessMap,X=T.anisotropy>0,It=T.clearcoat>0,Ct=T.dispersion>0,D=T.iridescence>0,E=T.sheen>0,Q=T.transmission>0,re=X&&!!T.anisotropyMap,fe=It&&!!T.clearcoatMap,Re=It&&!!T.clearcoatNormalMap,Ue=It&&!!T.clearcoatRoughnessMap,ue=D&&!!T.iridescenceMap,de=D&&!!T.iridescenceThicknessMap,we=E&&!!T.sheenColorMap,Ve=E&&!!T.sheenRoughnessMap,Ie=!!T.specularMap,Ne=!!T.specularColorMap,$e=!!T.specularIntensityMap,et=Q&&!!T.transmissionMap,lt=Q&&!!T.thicknessMap,k=!!T.gradientMap,Ce=!!T.alphaMap,_e=T.alphaTest>0,De=!!T.alphaHash,ze=!!T.extensions;let be=Ki;T.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(be=r.toneMapping);const Ke={shaderID:Te,shaderType:T.type,shaderName:T.name,vertexShader:Ae,fragmentShader:Oe,defines:T.defines,customVertexShaderID:ne,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Je,batchingColor:Je&&j._colorsTexture!==null,instancing:it,instancingColor:it&&j.instanceColor!==null,instancingMorph:it&&j.morphTexture!==null,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Zt,matcap:dt,envMap:Ee,envMapMode:Ee&&ee.mapping,envMapCubeUVHeight:ge,aoMap:He,lightMap:Pe,bumpMap:ct,normalMap:st,displacementMap:xt,emissiveMap:_t,normalMapObjectSpace:st&&T.normalMapType===iy,normalMapTangentSpace:st&&T.normalMapType===jd,packedNormalMap:st&&T.normalMapType===jd&&GA(T.normalMap.format),metalnessMap:St,roughnessMap:Pt,anisotropy:X,anisotropyMap:re,clearcoat:It,clearcoatMap:fe,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ue,dispersion:Ct,iridescence:D,iridescenceMap:ue,iridescenceThicknessMap:de,sheen:E,sheenColorMap:we,sheenRoughnessMap:Ve,specularMap:Ie,specularColorMap:Ne,specularIntensityMap:$e,transmission:Q,transmissionMap:et,thicknessMap:lt,gradientMap:k,opaque:T.transparent===!1&&T.blending===zr&&T.alphaToCoverage===!1,alphaMap:Ce,alphaTest:_e,alphaHash:De,combine:T.combine,mapUv:Zt&&b(T.map.channel),aoMapUv:He&&b(T.aoMap.channel),lightMapUv:Pe&&b(T.lightMap.channel),bumpMapUv:ct&&b(T.bumpMap.channel),normalMapUv:st&&b(T.normalMap.channel),displacementMapUv:xt&&b(T.displacementMap.channel),emissiveMapUv:_t&&b(T.emissiveMap.channel),metalnessMapUv:St&&b(T.metalnessMap.channel),roughnessMapUv:Pt&&b(T.roughnessMap.channel),anisotropyMapUv:re&&b(T.anisotropyMap.channel),clearcoatMapUv:fe&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Re&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:de&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:we&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&b(T.sheenRoughnessMap.channel),specularMapUv:Ie&&b(T.specularMap.channel),specularColorMapUv:Ne&&b(T.specularColorMap.channel),specularIntensityMapUv:$e&&b(T.specularIntensityMap.channel),transmissionMapUv:et&&b(T.transmissionMap.channel),thicknessMapUv:lt&&b(T.thicknessMap.channel),alphaMapUv:Ce&&b(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(st||X),vertexNormals:!!J.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!J.attributes.uv&&(Zt||Ce),fog:!!ve,useFog:T.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||J.attributes.normal===void 0&&st===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ge,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:he,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:pe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:be,decodeVideoTexture:Zt&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===Bt,decodeVideoTextureEmissive:_t&&T.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(T.emissiveMap.colorSpace)===Bt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ma,flipSided:T.side===In,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ze&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&T.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ke.vertexUv1s=m.has(1),Ke.vertexUv2s=m.has(2),Ke.vertexUv3s=m.has(3),m.clear(),Ke}function y(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const q in T.defines)L.push(q),L.push(T.defines[q]);return T.isRawShaderMaterial===!1&&(S(L,T),O(L,T),L.push(r.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function S(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function O(T,L){h.disableAll(),L.instancing&&h.enable(0),L.instancingColor&&h.enable(1),L.instancingMorph&&h.enable(2),L.matcap&&h.enable(3),L.envMap&&h.enable(4),L.normalMapObjectSpace&&h.enable(5),L.normalMapTangentSpace&&h.enable(6),L.clearcoat&&h.enable(7),L.iridescence&&h.enable(8),L.alphaTest&&h.enable(9),L.vertexColors&&h.enable(10),L.vertexAlphas&&h.enable(11),L.vertexUv1s&&h.enable(12),L.vertexUv2s&&h.enable(13),L.vertexUv3s&&h.enable(14),L.vertexTangents&&h.enable(15),L.anisotropy&&h.enable(16),L.alphaHash&&h.enable(17),L.batching&&h.enable(18),L.dispersion&&h.enable(19),L.batchingColor&&h.enable(20),L.gradientMap&&h.enable(21),L.packedNormalMap&&h.enable(22),L.vertexNormals&&h.enable(23),T.push(h.mask),h.disableAll(),L.fog&&h.enable(0),L.useFog&&h.enable(1),L.flatShading&&h.enable(2),L.logarithmicDepthBuffer&&h.enable(3),L.reversedDepthBuffer&&h.enable(4),L.skinning&&h.enable(5),L.morphTargets&&h.enable(6),L.morphNormals&&h.enable(7),L.morphColors&&h.enable(8),L.premultipliedAlpha&&h.enable(9),L.shadowMapEnabled&&h.enable(10),L.doubleSided&&h.enable(11),L.flipSided&&h.enable(12),L.useDepthPacking&&h.enable(13),L.dithering&&h.enable(14),L.transmission&&h.enable(15),L.sheen&&h.enable(16),L.opaque&&h.enable(17),L.pointsUvs&&h.enable(18),L.decodeVideoTexture&&h.enable(19),L.decodeVideoTextureEmissive&&h.enable(20),L.alphaToCoverage&&h.enable(21),L.numLightProbeGrids>0&&h.enable(22),L.hasPositionAttribute&&h.enable(23),T.push(h.mask)}function I(T){const L=M[T.type];let q;if(L){const G=Wi[L];q=rl.clone(G.uniforms)}else q=T.uniforms;return q}function w(T,L){let q=_.get(L);return q!==void 0?++q.usedTimes:(q=new FA(r,L,T,l),d.push(q),_.set(L,q)),q}function F(T){if(--T.usedTimes===0){const L=d.indexOf(T);d[L]=d[d.length-1],d.pop(),_.delete(T.cacheKey),T.destroy()}}function N(T){p.remove(T)}function P(){p.dispose()}return{getParameters:A,getProgramCacheKey:y,getUniforms:I,acquireProgram:w,releaseProgram:F,releaseShaderCache:N,programs:d,dispose:P}}function kA(){let r=new WeakMap;function e(h){return r.has(h)}function i(h){let p=r.get(h);return p===void 0&&(p={},r.set(h,p)),p}function s(h){r.delete(h)}function l(h,p,m){r.get(h)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function XA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Ev(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function bv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,b,A,y,S){let O=r[e];return O===void 0?(O={id:g.id,object:g,geometry:M,material:b,materialVariant:h(g),groupOrder:A,renderOrder:g.renderOrder,z:y,group:S},r[e]=O):(O.id=g.id,O.object=g,O.geometry=M,O.material=b,O.materialVariant=h(g),O.groupOrder=A,O.renderOrder=g.renderOrder,O.z=y,O.group=S),e++,O}function m(g,M,b,A,y,S){const O=p(g,M,b,A,y,S);b.transmission>0?s.push(O):b.transparent===!0?l.push(O):i.push(O)}function d(g,M,b,A,y,S){const O=p(g,M,b,A,y,S);b.transmission>0?s.unshift(O):b.transparent===!0?l.unshift(O):i.unshift(O)}function _(g,M,b){i.length>1&&i.sort(g||XA),s.length>1&&s.sort(M||Ev),l.length>1&&l.sort(M||Ev),b&&(i.reverse(),s.reverse(),l.reverse())}function v(){for(let g=e,M=r.length;g<M;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:v,sort:_}}function WA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let h;return c===void 0?(h=new bv,r.set(s,[h])):l>=c.length?(h=new bv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:e,dispose:i}}function qA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new K,color:new ht};break;case"SpotLight":i={position:new K,direction:new K,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new ht,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":i={color:new ht,position:new K,halfWidth:new K,halfHeight:new K};break}return r[e.id]=i,i}}}function YA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let ZA=0;function KA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function jA(r){const e=new qA,i=YA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new K);const l=new K,c=new en,h=new en;function p(d){let _=0,v=0,g=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let M=0,b=0,A=0,y=0,S=0,O=0,I=0,w=0,F=0,N=0,P=0;d.sort(KA);for(let L=0,q=d.length;L<q;L++){const G=d[L],j=G.color,pe=G.intensity,ve=G.distance;let J=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Vs?J=G.shadow.map.texture:J=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=j.r*pe,v+=j.g*pe,g+=j.b*pe;else if(G.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(G.sh.coefficients[B],pe);P++}else if(G.isDirectionalLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,ee=i.get(G);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,s.directionalShadow[M]=ee,s.directionalShadowMap[M]=J,s.directionalShadowMatrix[M]=G.shadow.matrix,O++}s.directional[M]=B,M++}else if(G.isSpotLight){const B=e.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(j).multiplyScalar(pe),B.distance=ve,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,s.spot[A]=B;const H=G.shadow;if(G.map&&(s.spotLightMap[F]=G.map,F++,H.updateMatrices(G),G.castShadow&&N++),s.spotLightMatrix[A]=H.matrix,G.castShadow){const ee=i.get(G);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,s.spotShadow[A]=ee,s.spotShadowMap[A]=J,w++}A++}else if(G.isRectAreaLight){const B=e.get(G);B.color.copy(j).multiplyScalar(pe),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=B,y++}else if(G.isPointLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const H=G.shadow,ee=i.get(G);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,ee.shadowCameraNear=H.camera.near,ee.shadowCameraFar=H.camera.far,s.pointShadow[b]=ee,s.pointShadowMap[b]=J,s.pointShadowMatrix[b]=G.shadow.matrix,I++}s.point[b]=B,b++}else if(G.isHemisphereLight){const B=e.get(G);B.skyColor.copy(G.color).multiplyScalar(pe),B.groundColor.copy(G.groundColor).multiplyScalar(pe),s.hemi[S]=B,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Be.LTC_FLOAT_1,s.rectAreaLTC2=Be.LTC_FLOAT_2):(s.rectAreaLTC1=Be.LTC_HALF_1,s.rectAreaLTC2=Be.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==A||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==O||T.numPointShadows!==I||T.numSpotShadows!==w||T.numSpotMaps!==F||T.numLightProbes!==P)&&(s.directional.length=M,s.spot.length=A,s.rectArea.length=y,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=w+F-N,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=P,T.directionalLength=M,T.pointLength=b,T.spotLength=A,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=O,T.numPointShadows=I,T.numSpotShadows=w,T.numSpotMaps=F,T.numLightProbes=P,s.version=ZA++)}function m(d,_){let v=0,g=0,M=0,b=0,A=0;const y=_.matrixWorldInverse;for(let S=0,O=d.length;S<O;S++){const I=d[S];if(I.isDirectionalLight){const w=s.directional[v];w.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),v++}else if(I.isSpotLight){const w=s.spot[M];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),M++}else if(I.isRectAreaLight){const w=s.rectArea[b];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(y),h.identity(),c.copy(I.matrixWorld),c.premultiply(y),h.extractRotation(c),w.halfWidth.set(I.width*.5,0,0),w.halfHeight.set(0,I.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),b++}else if(I.isPointLight){const w=s.point[g];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(y),g++}else if(I.isHemisphereLight){const w=s.hemi[A];w.direction.setFromMatrixPosition(I.matrixWorld),w.direction.transformDirection(y),A++}}}return{setup:p,setupView:m,state:s}}function Tv(r){const e=new jA(r),i=[],s=[],l=[];function c(g){v.camera=g,i.length=0,s.length=0,l.length=0}function h(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function d(){e.setup(i)}function _(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:d,setupLightsView:_,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function QA(r){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let p;return h===void 0?(p=new Tv(r),e.set(l,[p])):c>=h.length?(p=new Tv(r),h.push(p)):p=h[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const JA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$A=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,eR=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],tR=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Av=new en,jo=new K,ld=new K;function nR(r,e,i){let s=new Mp;const l=new ot,c=new ot,h=new rn,p=new sE,m=new rE,d={},_=i.maxTextureSize,v={[os]:In,[In]:os,[Ma]:Ma},g=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:JA,fragmentShader:$A}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new Cn;b.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Mn(b,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let S=this.type;this.render=function(N,P,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===OM&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Kc);const L=r.getRenderTarget(),q=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),j=r.state;j.setBlending(Zi),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const pe=S!==this.type;pe&&P.traverse(function(ve){ve.material&&(Array.isArray(ve.material)?ve.material.forEach(J=>J.needsUpdate=!0):ve.material.needsUpdate=!0)});for(let ve=0,J=N.length;ve<J;ve++){const B=N[ve],H=B.shadow;if(H===void 0){rt("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ee=H.getFrameExtents();l.multiply(ee),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ee.x),l.x=c.x*ee.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ee.y),l.y=c.y*ee.y,H.mapSize.y=c.y));const ge=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ge,H.map===null||pe===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Qo){if(B.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ei(l.x,l.y,{format:Vs,type:gi,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new Xr(l.x,l.y,qi),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=Ta,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn}else B.isPointLight?(H.map=new ex(l.x),H.map.depthTexture=new eE(l.x,ji)):(H.map=new ei(l.x,l.y),H.map.depthTexture=new Xr(l.x,l.y,ji)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=Ta,this.type===Kc?(H.map.depthTexture.compareFunction=ge?_p:gp,H.map.depthTexture.minFilter=Vn,H.map.depthTexture.magFilter=Vn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn);H.camera.updateProjectionMatrix()}const Te=H.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<Te;U++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,U),r.clear();else{U===0&&(r.setRenderTarget(H.map),r.clear());const Y=H.getViewport(U);h.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),j.viewport(h)}if(B.isPointLight){const Y=H.camera,he=H.matrix,Ae=B.distance||Y.far;Ae!==Y.far&&(Y.far=Ae,Y.updateProjectionMatrix()),jo.setFromMatrixPosition(B.matrixWorld),Y.position.copy(jo),ld.copy(Y.position),ld.add(eR[U]),Y.up.copy(tR[U]),Y.lookAt(ld),Y.updateMatrixWorld(),he.makeTranslation(-jo.x,-jo.y,-jo.z),Av.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Av,Y.coordinateSystem,Y.reversedDepth)}else H.updateMatrices(B);s=H.getFrustum(),w(P,T,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===Qo&&O(H,T),H.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(L,q,G)};function O(N,P){const T=e.update(A);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ei(l.x,l.y,{format:Vs,type:gi})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(P,null,T,g,A,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(P,null,T,M,A,null)}function I(N,P,T,L){let q=null;const G=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)q=G;else if(q=T.isPointLight===!0?m:p,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const j=q.uuid,pe=P.uuid;let ve=d[j];ve===void 0&&(ve={},d[j]=ve);let J=ve[pe];J===void 0&&(J=q.clone(),ve[pe]=J,P.addEventListener("dispose",F)),q=J}if(q.visible=P.visible,q.wireframe=P.wireframe,L===Qo?q.side=P.shadowSide!==null?P.shadowSide:P.side:q.side=P.shadowSide!==null?P.shadowSide:v[P.side],q.alphaMap=P.alphaMap,q.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,q.map=P.map,q.clipShadows=P.clipShadows,q.clippingPlanes=P.clippingPlanes,q.clipIntersection=P.clipIntersection,q.displacementMap=P.displacementMap,q.displacementScale=P.displacementScale,q.displacementBias=P.displacementBias,q.wireframeLinewidth=P.wireframeLinewidth,q.linewidth=P.linewidth,T.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const j=r.properties.get(q);j.light=T}return q}function w(N,P,T,L,q){if(N.visible===!1)return;if(N.layers.test(P.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&q===Qo)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const pe=e.update(N),ve=N.material;if(Array.isArray(ve)){const J=pe.groups;for(let B=0,H=J.length;B<H;B++){const ee=J[B],ge=ve[ee.materialIndex];if(ge&&ge.visible){const Te=I(N,ge,L,q);N.onBeforeShadow(r,N,P,T,pe,Te,ee),r.renderBufferDirect(T,null,pe,Te,N,ee),N.onAfterShadow(r,N,P,T,pe,Te,ee)}}}else if(ve.visible){const J=I(N,ve,L,q);N.onBeforeShadow(r,N,P,T,pe,J,null),r.renderBufferDirect(T,null,pe,J,N,null),N.onAfterShadow(r,N,P,T,pe,J,null)}}const j=N.children;for(let pe=0,ve=j.length;pe<ve;pe++)w(j[pe],P,T,L,q)}function F(N){N.target.removeEventListener("dispose",F);for(const T in d){const L=d[T],q=N.target.uuid;q in L&&(L[q].dispose(),delete L[q])}}}function iR(r,e){function i(){let k=!1;const Ce=new rn;let _e=null;const De=new rn(0,0,0,0);return{setMask:function(ze){_e!==ze&&!k&&(r.colorMask(ze,ze,ze,ze),_e=ze)},setLocked:function(ze){k=ze},setClear:function(ze,be,Ke,We,tn){tn===!0&&(ze*=We,be*=We,Ke*=We),Ce.set(ze,be,Ke,We),De.equals(Ce)===!1&&(r.clearColor(ze,be,Ke,We),De.copy(Ce))},reset:function(){k=!1,_e=null,De.set(-1,0,0,0)}}}function s(){let k=!1,Ce=!1,_e=null,De=null,ze=null;return{setReversed:function(be){if(Ce!==be){const Ke=e.get("EXT_clip_control");be?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Ce=be;const We=ze;ze=null,this.setClear(We)}},getReversed:function(){return Ce},setTest:function(be){be?ye(r.DEPTH_TEST):Ge(r.DEPTH_TEST)},setMask:function(be){_e!==be&&!k&&(r.depthMask(be),_e=be)},setFunc:function(be){if(Ce&&(be=dy[be]),De!==be){switch(be){case fd:r.depthFunc(r.NEVER);break;case hd:r.depthFunc(r.ALWAYS);break;case dd:r.depthFunc(r.LESS);break;case Vr:r.depthFunc(r.LEQUAL);break;case pd:r.depthFunc(r.EQUAL);break;case md:r.depthFunc(r.GEQUAL);break;case gd:r.depthFunc(r.GREATER);break;case _d:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}De=be}},setLocked:function(be){k=be},setClear:function(be){ze!==be&&(ze=be,Ce&&(be=1-be),r.clearDepth(be))},reset:function(){k=!1,_e=null,De=null,ze=null,Ce=!1}}}function l(){let k=!1,Ce=null,_e=null,De=null,ze=null,be=null,Ke=null,We=null,tn=null;return{setTest:function(zt){k||(zt?ye(r.STENCIL_TEST):Ge(r.STENCIL_TEST))},setMask:function(zt){Ce!==zt&&!k&&(r.stencilMask(zt),Ce=zt)},setFunc:function(zt,ti,ni){(_e!==zt||De!==ti||ze!==ni)&&(r.stencilFunc(zt,ti,ni),_e=zt,De=ti,ze=ni)},setOp:function(zt,ti,ni){(be!==zt||Ke!==ti||We!==ni)&&(r.stencilOp(zt,ti,ni),be=zt,Ke=ti,We=ni)},setLocked:function(zt){k=zt},setClear:function(zt){tn!==zt&&(r.clearStencil(zt),tn=zt)},reset:function(){k=!1,Ce=null,_e=null,De=null,ze=null,be=null,Ke=null,We=null,tn=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let _={},v={},g={},M=new WeakMap,b=[],A=null,y=!1,S=null,O=null,I=null,w=null,F=null,N=null,P=null,T=new ht(0,0,0),L=0,q=!1,G=null,j=null,pe=null,ve=null,J=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ee=0;const ge=r.getParameter(r.VERSION);ge.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ge)[1]),H=ee>=1):ge.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),H=ee>=2);let Te=null,U={};const Y=r.getParameter(r.SCISSOR_BOX),he=r.getParameter(r.VIEWPORT),Ae=new rn().fromArray(Y),Oe=new rn().fromArray(he);function ne(k,Ce,_e,De){const ze=new Uint8Array(4),be=r.createTexture();r.bindTexture(k,be),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ke=0;Ke<_e;Ke++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,De,0,r.RGBA,r.UNSIGNED_BYTE,ze):r.texImage2D(Ce+Ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ze);return be}const Me={};Me[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),ye(r.DEPTH_TEST),h.setFunc(Vr),ct(!1),st(x_),ye(r.CULL_FACE),He(Zi);function ye(k){_[k]!==!0&&(r.enable(k),_[k]=!0)}function Ge(k){_[k]!==!1&&(r.disable(k),_[k]=!1)}function it(k,Ce){return g[k]!==Ce?(r.bindFramebuffer(k,Ce),g[k]=Ce,k===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ce),k===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Je(k,Ce){let _e=b,De=!1;if(k){_e=M.get(Ce),_e===void 0&&(_e=[],M.set(Ce,_e));const ze=k.textures;if(_e.length!==ze.length||_e[0]!==r.COLOR_ATTACHMENT0){for(let be=0,Ke=ze.length;be<Ke;be++)_e[be]=r.COLOR_ATTACHMENT0+be;_e.length=ze.length,De=!0}}else _e[0]!==r.BACK&&(_e[0]=r.BACK,De=!0);De&&r.drawBuffers(_e)}function Zt(k){return A!==k?(r.useProgram(k),A=k,!0):!1}const dt={[Os]:r.FUNC_ADD,[IM]:r.FUNC_SUBTRACT,[FM]:r.FUNC_REVERSE_SUBTRACT};dt[BM]=r.MIN,dt[zM]=r.MAX;const Ee={[HM]:r.ZERO,[GM]:r.ONE,[VM]:r.SRC_COLOR,[cd]:r.SRC_ALPHA,[ZM]:r.SRC_ALPHA_SATURATE,[qM]:r.DST_COLOR,[XM]:r.DST_ALPHA,[kM]:r.ONE_MINUS_SRC_COLOR,[ud]:r.ONE_MINUS_SRC_ALPHA,[YM]:r.ONE_MINUS_DST_COLOR,[WM]:r.ONE_MINUS_DST_ALPHA,[KM]:r.CONSTANT_COLOR,[jM]:r.ONE_MINUS_CONSTANT_COLOR,[QM]:r.CONSTANT_ALPHA,[JM]:r.ONE_MINUS_CONSTANT_ALPHA};function He(k,Ce,_e,De,ze,be,Ke,We,tn,zt){if(k===Zi){y===!0&&(Ge(r.BLEND),y=!1);return}if(y===!1&&(ye(r.BLEND),y=!0),k!==PM){if(k!==S||zt!==q){if((O!==Os||F!==Os)&&(r.blendEquation(r.FUNC_ADD),O=Os,F=Os),zt)switch(k){case zr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fs:r.blendFunc(r.ONE,r.ONE);break;case S_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case M_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Dt("WebGLState: Invalid blending: ",k);break}else switch(k){case zr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case S_:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case M_:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",k);break}I=null,w=null,N=null,P=null,T.set(0,0,0),L=0,S=k,q=zt}return}ze=ze||Ce,be=be||_e,Ke=Ke||De,(Ce!==O||ze!==F)&&(r.blendEquationSeparate(dt[Ce],dt[ze]),O=Ce,F=ze),(_e!==I||De!==w||be!==N||Ke!==P)&&(r.blendFuncSeparate(Ee[_e],Ee[De],Ee[be],Ee[Ke]),I=_e,w=De,N=be,P=Ke),(We.equals(T)===!1||tn!==L)&&(r.blendColor(We.r,We.g,We.b,tn),T.copy(We),L=tn),S=k,q=!1}function Pe(k,Ce){k.side===Ma?Ge(r.CULL_FACE):ye(r.CULL_FACE);let _e=k.side===In;Ce&&(_e=!_e),ct(_e),k.blending===zr&&k.transparent===!1?He(Zi):He(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const De=k.stencilWrite;p.setTest(De),De&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),_t(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):Ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function ct(k){G!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),G=k)}function st(k){k!==NM?(ye(r.CULL_FACE),k!==j&&(k===x_?r.cullFace(r.BACK):k===LM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ge(r.CULL_FACE),j=k}function xt(k){k!==pe&&(H&&r.lineWidth(k),pe=k)}function _t(k,Ce,_e){k?(ye(r.POLYGON_OFFSET_FILL),(ve!==Ce||J!==_e)&&(ve=Ce,J=_e,h.getReversed()&&(Ce=-Ce),r.polygonOffset(Ce,_e))):Ge(r.POLYGON_OFFSET_FILL)}function St(k){k?ye(r.SCISSOR_TEST):Ge(r.SCISSOR_TEST)}function Pt(k){k===void 0&&(k=r.TEXTURE0+B-1),Te!==k&&(r.activeTexture(k),Te=k)}function X(k,Ce,_e){_e===void 0&&(Te===null?_e=r.TEXTURE0+B-1:_e=Te);let De=U[_e];De===void 0&&(De={type:void 0,texture:void 0},U[_e]=De),(De.type!==k||De.texture!==Ce)&&(Te!==_e&&(r.activeTexture(_e),Te=_e),r.bindTexture(k,Ce||Me[k]),De.type=k,De.texture=Ce)}function It(){const k=U[Te];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ct(){try{r.compressedTexImage2D(...arguments)}catch(k){Dt("WebGLState:",k)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(k){Dt("WebGLState:",k)}}function E(){try{r.texSubImage2D(...arguments)}catch(k){Dt("WebGLState:",k)}}function Q(){try{r.texSubImage3D(...arguments)}catch(k){Dt("WebGLState:",k)}}function re(){try{r.compressedTexSubImage2D(...arguments)}catch(k){Dt("WebGLState:",k)}}function fe(){try{r.compressedTexSubImage3D(...arguments)}catch(k){Dt("WebGLState:",k)}}function Re(){try{r.texStorage2D(...arguments)}catch(k){Dt("WebGLState:",k)}}function Ue(){try{r.texStorage3D(...arguments)}catch(k){Dt("WebGLState:",k)}}function ue(){try{r.texImage2D(...arguments)}catch(k){Dt("WebGLState:",k)}}function de(){try{r.texImage3D(...arguments)}catch(k){Dt("WebGLState:",k)}}function we(k){return v[k]!==void 0?v[k]:r.getParameter(k)}function Ve(k,Ce){v[k]!==Ce&&(r.pixelStorei(k,Ce),v[k]=Ce)}function Ie(k){Ae.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Ae.copy(k))}function Ne(k){Oe.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Oe.copy(k))}function $e(k,Ce){let _e=d.get(Ce);_e===void 0&&(_e=new WeakMap,d.set(Ce,_e));let De=_e.get(k);De===void 0&&(De=r.getUniformBlockIndex(Ce,k.name),_e.set(k,De))}function et(k,Ce){const De=d.get(Ce).get(k);m.get(Ce)!==De&&(r.uniformBlockBinding(Ce,De,k.__bindingPointIndex),m.set(Ce,De))}function lt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},Te=null,U={},g={},M=new WeakMap,b=[],A=null,y=!1,S=null,O=null,I=null,w=null,F=null,N=null,P=null,T=new ht(0,0,0),L=0,q=!1,G=null,j=null,pe=null,ve=null,J=null,Ae.set(0,0,r.canvas.width,r.canvas.height),Oe.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:ye,disable:Ge,bindFramebuffer:it,drawBuffers:Je,useProgram:Zt,setBlending:He,setMaterial:Pe,setFlipSided:ct,setCullFace:st,setLineWidth:xt,setPolygonOffset:_t,setScissorTest:St,activeTexture:Pt,bindTexture:X,unbindTexture:It,compressedTexImage2D:Ct,compressedTexImage3D:D,texImage2D:ue,texImage3D:de,pixelStorei:Ve,getParameter:we,updateUBOMapping:$e,uniformBlockBinding:et,texStorage2D:Re,texStorage3D:Ue,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:re,compressedTexSubImage3D:fe,scissor:Ie,viewport:Ne,reset:lt}}function aR(r,e,i,s,l,c,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ot,_=new WeakMap,v=new Set;let g;const M=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,E){return b?new OffscreenCanvas(D,E):al("canvas")}function y(D,E,Q){let re=1;const fe=Ct(D);if((fe.width>Q||fe.height>Q)&&(re=Q/Math.max(fe.width,fe.height)),re<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Re=Math.floor(re*fe.width),Ue=Math.floor(re*fe.height);g===void 0&&(g=A(Re,Ue));const ue=E?A(Re,Ue):g;return ue.width=Re,ue.height=Ue,ue.getContext("2d").drawImage(D,0,0,Re,Ue),rt("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Re+"x"+Ue+")."),ue}else return"data"in D&&rt("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),D;return D}function S(D){return D.generateMipmaps}function O(D){r.generateMipmap(D)}function I(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(D,E,Q,re,fe,Re=!1){if(D!==null){if(r[D]!==void 0)return r[D];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ue;re&&(Ue=e.get("EXT_texture_norm16"),Ue||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=E;if(E===r.RED&&(Q===r.FLOAT&&(ue=r.R32F),Q===r.HALF_FLOAT&&(ue=r.R16F),Q===r.UNSIGNED_BYTE&&(ue=r.R8),Q===r.UNSIGNED_SHORT&&Ue&&(ue=Ue.R16_EXT),Q===r.SHORT&&Ue&&(ue=Ue.R16_SNORM_EXT)),E===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.R8UI),Q===r.UNSIGNED_SHORT&&(ue=r.R16UI),Q===r.UNSIGNED_INT&&(ue=r.R32UI),Q===r.BYTE&&(ue=r.R8I),Q===r.SHORT&&(ue=r.R16I),Q===r.INT&&(ue=r.R32I)),E===r.RG&&(Q===r.FLOAT&&(ue=r.RG32F),Q===r.HALF_FLOAT&&(ue=r.RG16F),Q===r.UNSIGNED_BYTE&&(ue=r.RG8),Q===r.UNSIGNED_SHORT&&Ue&&(ue=Ue.RG16_EXT),Q===r.SHORT&&Ue&&(ue=Ue.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.RG8UI),Q===r.UNSIGNED_SHORT&&(ue=r.RG16UI),Q===r.UNSIGNED_INT&&(ue=r.RG32UI),Q===r.BYTE&&(ue=r.RG8I),Q===r.SHORT&&(ue=r.RG16I),Q===r.INT&&(ue=r.RG32I)),E===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(ue=r.RGB16UI),Q===r.UNSIGNED_INT&&(ue=r.RGB32UI),Q===r.BYTE&&(ue=r.RGB8I),Q===r.SHORT&&(ue=r.RGB16I),Q===r.INT&&(ue=r.RGB32I)),E===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(ue=r.RGBA16UI),Q===r.UNSIGNED_INT&&(ue=r.RGBA32UI),Q===r.BYTE&&(ue=r.RGBA8I),Q===r.SHORT&&(ue=r.RGBA16I),Q===r.INT&&(ue=r.RGBA32I)),E===r.RGB&&(Q===r.UNSIGNED_SHORT&&Ue&&(ue=Ue.RGB16_EXT),Q===r.SHORT&&Ue&&(ue=Ue.RGB16_SNORM_EXT),Q===r.UNSIGNED_INT_5_9_9_9_REV&&(ue=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ue=r.R11F_G11F_B10F)),E===r.RGBA){const de=Re?ru:Rt.getTransfer(fe);Q===r.FLOAT&&(ue=r.RGBA32F),Q===r.HALF_FLOAT&&(ue=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(ue=de===Bt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT&&Ue&&(ue=Ue.RGBA16_EXT),Q===r.SHORT&&Ue&&(ue=Ue.RGBA16_SNORM_EXT),Q===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function F(D,E){let Q;return D?E===null||E===ji||E===nl?Q=r.DEPTH24_STENCIL8:E===qi?Q=r.DEPTH32F_STENCIL8:E===tl&&(Q=r.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ji||E===nl?Q=r.DEPTH_COMPONENT24:E===qi?Q=r.DEPTH_COMPONENT32F:E===tl&&(Q=r.DEPTH_COMPONENT16),Q}function N(D,E){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Pn&&D.minFilter!==Vn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function P(D){const E=D.target;E.removeEventListener("dispose",P),L(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&v.delete(E)}function T(D){const E=D.target;E.removeEventListener("dispose",T),G(E)}function L(D){const E=s.get(D);if(E.__webglInit===void 0)return;const Q=D.source,re=M.get(Q);if(re){const fe=re[E.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&q(D),Object.keys(re).length===0&&M.delete(Q)}s.remove(D)}function q(D){const E=s.get(D);r.deleteTexture(E.__webglTexture);const Q=D.source,re=M.get(Q);delete re[E.__cacheKey],h.memory.textures--}function G(D){const E=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let fe=0;fe<E.__webglFramebuffer[re].length;fe++)r.deleteFramebuffer(E.__webglFramebuffer[re][fe]);else r.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)r.deleteFramebuffer(E.__webglFramebuffer[re]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=D.textures;for(let re=0,fe=Q.length;re<fe;re++){const Re=s.get(Q[re]);Re.__webglTexture&&(r.deleteTexture(Re.__webglTexture),h.memory.textures--),s.remove(Q[re])}s.remove(D)}let j=0;function pe(){j=0}function ve(){return j}function J(D){j=D}function B(){const D=j;return D>=l.maxTextures&&rt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),j+=1,D}function H(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function ee(D,E){const Q=s.get(D);if(D.isVideoTexture&&X(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Q.__version!==D.version){const re=D.image;if(re===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(Q,D,E);return}}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+E)}function ge(D,E){const Q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){Ge(Q,D,E);return}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+E)}function Te(D,E){const Q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){Ge(Q,D,E);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+E)}function U(D,E){const Q=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Q.__version!==D.version){it(Q,D,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+E)}const Y={[vd]:r.REPEAT,[Ea]:r.CLAMP_TO_EDGE,[xd]:r.MIRRORED_REPEAT},he={[Pn]:r.NEAREST,[ty]:r.NEAREST_MIPMAP_NEAREST,[yc]:r.NEAREST_MIPMAP_LINEAR,[Vn]:r.LINEAR,[Dh]:r.LINEAR_MIPMAP_NEAREST,[Bs]:r.LINEAR_MIPMAP_LINEAR},Ae={[ay]:r.NEVER,[cy]:r.ALWAYS,[sy]:r.LESS,[gp]:r.LEQUAL,[ry]:r.EQUAL,[_p]:r.GEQUAL,[oy]:r.GREATER,[ly]:r.NOTEQUAL};function Oe(D,E){if(E.type===qi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Vn||E.magFilter===Dh||E.magFilter===yc||E.magFilter===Bs||E.minFilter===Vn||E.minFilter===Dh||E.minFilter===yc||E.minFilter===Bs)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,Y[E.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,Y[E.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,Y[E.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,he[E.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,he[E.minFilter]),E.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,Ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Pn||E.minFilter!==yc&&E.minFilter!==Bs||E.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ne(D,E){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",P));const re=E.source;let fe=M.get(re);fe===void 0&&(fe={},M.set(re,fe));const Re=H(E);if(Re!==D.__cacheKey){fe[Re]===void 0&&(fe[Re]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,Q=!0),fe[Re].usedTimes++;const Ue=fe[D.__cacheKey];Ue!==void 0&&(fe[D.__cacheKey].usedTimes--,Ue.usedTimes===0&&q(E)),D.__cacheKey=Re,D.__webglTexture=fe[Re].texture}return Q}function Me(D,E,Q){return Math.floor(Math.floor(D/Q)/E)}function ye(D,E,Q,re){const Re=D.updateRanges;if(Re.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Q,re,E.data);else{Re.sort((Ve,Ie)=>Ve.start-Ie.start);let Ue=0;for(let Ve=1;Ve<Re.length;Ve++){const Ie=Re[Ue],Ne=Re[Ve],$e=Ie.start+Ie.count,et=Me(Ne.start,E.width,4),lt=Me(Ie.start,E.width,4);Ne.start<=$e+1&&et===lt&&Me(Ne.start+Ne.count-1,E.width,4)===et?Ie.count=Math.max(Ie.count,Ne.start+Ne.count-Ie.start):(++Ue,Re[Ue]=Ne)}Re.length=Ue+1;const ue=i.getParameter(r.UNPACK_ROW_LENGTH),de=i.getParameter(r.UNPACK_SKIP_PIXELS),we=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Ve=0,Ie=Re.length;Ve<Ie;Ve++){const Ne=Re[Ve],$e=Math.floor(Ne.start/4),et=Math.ceil(Ne.count/4),lt=$e%E.width,k=Math.floor($e/E.width),Ce=et,_e=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,lt),i.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,lt,k,Ce,_e,Q,re,E.data)}D.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ue),i.pixelStorei(r.UNPACK_SKIP_PIXELS,de),i.pixelStorei(r.UNPACK_SKIP_ROWS,we)}}function Ge(D,E,Q){let re=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=r.TEXTURE_3D);const fe=ne(D,E),Re=E.source;i.bindTexture(re,D.__webglTexture,r.TEXTURE0+Q);const Ue=s.get(Re);if(Re.version!==Ue.__version||fe===!0){if(i.activeTexture(r.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const _e=Rt.getPrimaries(Rt.workingColorSpace),De=E.colorSpace===ss?null:Rt.getPrimaries(E.colorSpace),ze=E.colorSpace===ss||_e===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let de=y(E.image,!1,l.maxTextureSize);de=It(E,de);const we=c.convert(E.format,E.colorSpace),Ve=c.convert(E.type);let Ie=w(E.internalFormat,we,Ve,E.normalized,E.colorSpace,E.isVideoTexture);Oe(re,E);let Ne;const $e=E.mipmaps,et=E.isVideoTexture!==!0,lt=Ue.__version===void 0||fe===!0,k=Re.dataReady,Ce=N(E,de);if(E.isDepthTexture)Ie=F(E.format===zs,E.type),lt&&(et?i.texStorage2D(r.TEXTURE_2D,1,Ie,de.width,de.height):i.texImage2D(r.TEXTURE_2D,0,Ie,de.width,de.height,0,we,Ve,null));else if(E.isDataTexture)if($e.length>0){et&&lt&&i.texStorage2D(r.TEXTURE_2D,Ce,Ie,$e[0].width,$e[0].height);for(let _e=0,De=$e.length;_e<De;_e++)Ne=$e[_e],et?k&&i.texSubImage2D(r.TEXTURE_2D,_e,0,0,Ne.width,Ne.height,we,Ve,Ne.data):i.texImage2D(r.TEXTURE_2D,_e,Ie,Ne.width,Ne.height,0,we,Ve,Ne.data);E.generateMipmaps=!1}else et?(lt&&i.texStorage2D(r.TEXTURE_2D,Ce,Ie,de.width,de.height),k&&ye(E,de,we,Ve)):i.texImage2D(r.TEXTURE_2D,0,Ie,de.width,de.height,0,we,Ve,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){et&&lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Ie,$e[0].width,$e[0].height,de.depth);for(let _e=0,De=$e.length;_e<De;_e++)if(Ne=$e[_e],E.format!==Pi)if(we!==null)if(et){if(k)if(E.layerUpdates.size>0){const ze=iv(Ne.width,Ne.height,E.format,E.type);for(const be of E.layerUpdates){const Ke=Ne.data.subarray(be*ze/Ne.data.BYTES_PER_ELEMENT,(be+1)*ze/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,be,Ne.width,Ne.height,1,we,Ke)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Ne.width,Ne.height,de.depth,we,Ne.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,_e,Ie,Ne.width,Ne.height,de.depth,0,Ne.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?k&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Ne.width,Ne.height,de.depth,we,Ve,Ne.data):i.texImage3D(r.TEXTURE_2D_ARRAY,_e,Ie,Ne.width,Ne.height,de.depth,0,we,Ve,Ne.data)}else{et&&lt&&i.texStorage2D(r.TEXTURE_2D,Ce,Ie,$e[0].width,$e[0].height);for(let _e=0,De=$e.length;_e<De;_e++)Ne=$e[_e],E.format!==Pi?we!==null?et?k&&i.compressedTexSubImage2D(r.TEXTURE_2D,_e,0,0,Ne.width,Ne.height,we,Ne.data):i.compressedTexImage2D(r.TEXTURE_2D,_e,Ie,Ne.width,Ne.height,0,Ne.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?k&&i.texSubImage2D(r.TEXTURE_2D,_e,0,0,Ne.width,Ne.height,we,Ve,Ne.data):i.texImage2D(r.TEXTURE_2D,_e,Ie,Ne.width,Ne.height,0,we,Ve,Ne.data)}else if(E.isDataArrayTexture)if(et){if(lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Ie,de.width,de.height,de.depth),k)if(E.layerUpdates.size>0){const _e=iv(de.width,de.height,E.format,E.type);for(const De of E.layerUpdates){const ze=de.data.subarray(De*_e/de.data.BYTES_PER_ELEMENT,(De+1)*_e/de.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,De,de.width,de.height,1,we,Ve,ze)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,we,Ve,de.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ie,de.width,de.height,de.depth,0,we,Ve,de.data);else if(E.isData3DTexture)et?(lt&&i.texStorage3D(r.TEXTURE_3D,Ce,Ie,de.width,de.height,de.depth),k&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,we,Ve,de.data)):i.texImage3D(r.TEXTURE_3D,0,Ie,de.width,de.height,de.depth,0,we,Ve,de.data);else if(E.isFramebufferTexture){if(lt)if(et)i.texStorage2D(r.TEXTURE_2D,Ce,Ie,de.width,de.height);else{let _e=de.width,De=de.height;for(let ze=0;ze<Ce;ze++)i.texImage2D(r.TEXTURE_2D,ze,Ie,_e,De,0,we,Ve,null),_e>>=1,De>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const _e=r.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),de.parentNode!==_e){_e.appendChild(de),v.add(E),_e.onpaint=De=>{const ze=De.changedElements;for(const be of v)ze.includes(be.image)&&(be.needsUpdate=!0)},_e.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,de);else{const ze=r.RGBA,be=r.RGBA,Ke=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ze,be,Ke,de)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if($e.length>0){if(et&&lt){const _e=Ct($e[0]);i.texStorage2D(r.TEXTURE_2D,Ce,Ie,_e.width,_e.height)}for(let _e=0,De=$e.length;_e<De;_e++)Ne=$e[_e],et?k&&i.texSubImage2D(r.TEXTURE_2D,_e,0,0,we,Ve,Ne):i.texImage2D(r.TEXTURE_2D,_e,Ie,we,Ve,Ne);E.generateMipmaps=!1}else if(et){if(lt){const _e=Ct(de);i.texStorage2D(r.TEXTURE_2D,Ce,Ie,_e.width,_e.height)}k&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,we,Ve,de)}else i.texImage2D(r.TEXTURE_2D,0,Ie,we,Ve,de);S(E)&&O(re),Ue.__version=Re.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function it(D,E,Q){if(E.image.length!==6)return;const re=ne(D,E),fe=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Q);const Re=s.get(fe);if(fe.version!==Re.__version||re===!0){i.activeTexture(r.TEXTURE0+Q);const Ue=Rt.getPrimaries(Rt.workingColorSpace),ue=E.colorSpace===ss?null:Rt.getPrimaries(E.colorSpace),de=E.colorSpace===ss||Ue===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,Ve=E.image[0]&&E.image[0].isDataTexture,Ie=[];for(let be=0;be<6;be++)!we&&!Ve?Ie[be]=y(E.image[be],!0,l.maxCubemapSize):Ie[be]=Ve?E.image[be].image:E.image[be],Ie[be]=It(E,Ie[be]);const Ne=Ie[0],$e=c.convert(E.format,E.colorSpace),et=c.convert(E.type),lt=w(E.internalFormat,$e,et,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Ce=Re.__version===void 0||re===!0,_e=fe.dataReady;let De=N(E,Ne);Oe(r.TEXTURE_CUBE_MAP,E);let ze;if(we){k&&Ce&&i.texStorage2D(r.TEXTURE_CUBE_MAP,De,lt,Ne.width,Ne.height);for(let be=0;be<6;be++){ze=Ie[be].mipmaps;for(let Ke=0;Ke<ze.length;Ke++){const We=ze[Ke];E.format!==Pi?$e!==null?k?_e&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke,0,0,We.width,We.height,$e,We.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke,lt,We.width,We.height,0,We.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke,0,0,We.width,We.height,$e,et,We.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke,lt,We.width,We.height,0,$e,et,We.data)}}}else{if(ze=E.mipmaps,k&&Ce){ze.length>0&&De++;const be=Ct(Ie[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,De,lt,be.width,be.height)}for(let be=0;be<6;be++)if(Ve){k?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ie[be].width,Ie[be].height,$e,et,Ie[be].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,lt,Ie[be].width,Ie[be].height,0,$e,et,Ie[be].data);for(let Ke=0;Ke<ze.length;Ke++){const tn=ze[Ke].image[be].image;k?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke+1,0,0,tn.width,tn.height,$e,et,tn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke+1,lt,tn.width,tn.height,0,$e,et,tn.data)}}else{k?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,$e,et,Ie[be]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,lt,$e,et,Ie[be]);for(let Ke=0;Ke<ze.length;Ke++){const We=ze[Ke];k?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke+1,0,0,$e,et,We.image[be]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke+1,lt,$e,et,We.image[be])}}}S(E)&&O(r.TEXTURE_CUBE_MAP),Re.__version=fe.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Je(D,E,Q,re,fe,Re){const Ue=c.convert(Q.format,Q.colorSpace),ue=c.convert(Q.type),de=w(Q.internalFormat,Ue,ue,Q.normalized,Q.colorSpace),we=s.get(E),Ve=s.get(Q);if(Ve.__renderTarget=E,!we.__hasExternalTextures){const Ie=Math.max(1,E.width>>Re),Ne=Math.max(1,E.height>>Re);fe===r.TEXTURE_3D||fe===r.TEXTURE_2D_ARRAY?i.texImage3D(fe,Re,de,Ie,Ne,E.depth,0,Ue,ue,null):i.texImage2D(fe,Re,de,Ie,Ne,0,Ue,ue,null)}i.bindFramebuffer(r.FRAMEBUFFER,D),Pt(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,fe,Ve.__webglTexture,0,St(E)):(fe===r.TEXTURE_2D||fe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,fe,Ve.__webglTexture,Re),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Zt(D,E,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,D),E.depthBuffer){const re=E.depthTexture,fe=re&&re.isDepthTexture?re.type:null,Re=F(E.stencilBuffer,fe),Ue=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Pt(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,St(E),Re,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,St(E),Re,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Re,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ue,r.RENDERBUFFER,D)}else{const re=E.textures;for(let fe=0;fe<re.length;fe++){const Re=re[fe],Ue=c.convert(Re.format,Re.colorSpace),ue=c.convert(Re.type),de=w(Re.internalFormat,Ue,ue,Re.normalized,Re.colorSpace);Pt(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,St(E),de,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,St(E),de,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,de,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function dt(D,E,Q){const re=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=s.get(E.depthTexture);if(fe.__renderTarget=E,(!fe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),re){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,E.depthTexture.addEventListener("dispose",P)),fe.__webglTexture===void 0){fe.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,fe.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,E.depthTexture);const we=c.convert(E.depthTexture.format),Ve=c.convert(E.depthTexture.type);let Ie;E.depthTexture.format===Ta?Ie=r.DEPTH_COMPONENT24:E.depthTexture.format===zs&&(Ie=r.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ie,E.width,E.height,0,we,Ve,null)}}else ee(E.depthTexture,0);const Re=fe.__webglTexture,Ue=St(E),ue=re?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,de=E.depthTexture.format===zs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ta)Pt(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ue,Re,0,Ue):r.framebufferTexture2D(r.FRAMEBUFFER,de,ue,Re,0);else if(E.depthTexture.format===zs)Pt(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ue,Re,0,Ue):r.framebufferTexture2D(r.FRAMEBUFFER,de,ue,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ee(D){const E=s.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const re=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){const fe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",fe)};re.addEventListener("dispose",fe),E.__depthDisposeCallback=fe}E.__boundDepthTexture=re}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let re=0;re<6;re++)dt(E.__webglFramebuffer[re],D,re);else{const re=D.texture.mipmaps;re&&re.length>0?dt(E.__webglFramebuffer[0],D,0):dt(E.__webglFramebuffer,D,0)}else if(Q){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=r.createRenderbuffer(),Zt(E.__webglDepthbuffer[re],D,!1);else{const fe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer[re];r.bindRenderbuffer(r.RENDERBUFFER,Re),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,Re)}}else{const re=D.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Zt(E.__webglDepthbuffer,D,!1);else{const fe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Re),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,Re)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function He(D,E,Q){const re=s.get(D);E!==void 0&&Je(re.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&Ee(D)}function Pe(D){const E=D.texture,Q=s.get(D),re=s.get(E);D.addEventListener("dispose",T);const fe=D.textures,Re=D.isWebGLCubeRenderTarget===!0,Ue=fe.length>1;if(Ue||(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=E.version,h.memory.textures++),Re){Q.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[ue]=[];for(let de=0;de<E.mipmaps.length;de++)Q.__webglFramebuffer[ue][de]=r.createFramebuffer()}else Q.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)Q.__webglFramebuffer[ue]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Ue)for(let ue=0,de=fe.length;ue<de;ue++){const we=s.get(fe[ue]);we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture(),h.memory.textures++)}if(D.samples>0&&Pt(D)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ue=0;ue<fe.length;ue++){const de=fe[ue];Q.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[ue]);const we=c.convert(de.format,de.colorSpace),Ve=c.convert(de.type),Ie=w(de.internalFormat,we,Ve,de.normalized,de.colorSpace,D.isXRRenderTarget===!0),Ne=St(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,Ie,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,Q.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Zt(Q.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Re){i.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Je(Q.__webglFramebuffer[ue][de],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else Je(Q.__webglFramebuffer[ue],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);S(E)&&O(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let ue=0,de=fe.length;ue<de;ue++){const we=fe[ue],Ve=s.get(we);let Ie=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ie=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ie,Ve.__webglTexture),Oe(Ie,we),Je(Q.__webglFramebuffer,D,we,r.COLOR_ATTACHMENT0+ue,Ie,0),S(we)&&O(Ie)}i.unbindTexture()}else{let ue=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ue=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ue,re.__webglTexture),Oe(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Je(Q.__webglFramebuffer[de],D,E,r.COLOR_ATTACHMENT0,ue,de);else Je(Q.__webglFramebuffer,D,E,r.COLOR_ATTACHMENT0,ue,0);S(E)&&O(ue),i.unbindTexture()}D.depthBuffer&&Ee(D)}function ct(D){const E=D.textures;for(let Q=0,re=E.length;Q<re;Q++){const fe=E[Q];if(S(fe)){const Re=I(D),Ue=s.get(fe).__webglTexture;i.bindTexture(Re,Ue),O(Re),i.unbindTexture()}}}const st=[],xt=[];function _t(D){if(D.samples>0){if(Pt(D)===!1){const E=D.textures,Q=D.width,re=D.height;let fe=r.COLOR_BUFFER_BIT;const Re=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=s.get(D),ue=E.length>1;if(ue)for(let we=0;we<E.length;we++)i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const de=D.texture.mipmaps;de&&de.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let we=0;we<E.length;we++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(fe|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(fe|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[we]);const Ve=s.get(E[we]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ve,0)}r.blitFramebuffer(0,0,Q,re,0,0,Q,re,fe,r.NEAREST),m===!0&&(st.length=0,xt.length=0,st.push(r.COLOR_ATTACHMENT0+we),D.depthBuffer&&D.resolveDepthBuffer===!1&&(st.push(Re),xt.push(Re),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,xt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,st))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let we=0;we<E.length;we++){i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[we]);const Ve=s.get(E[we]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,Ve,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const E=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function St(D){return Math.min(l.maxSamples,D.samples)}function Pt(D){const E=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function X(D){const E=h.render.frame;_.get(D)!==E&&(_.set(D,E),D.update())}function It(D,E){const Q=D.colorSpace,re=D.format,fe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==su&&Q!==ss&&(Rt.getTransfer(Q)===Bt?(re!==Pi||fe!==mi)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",Q)),E}function Ct(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=B,this.resetTextureUnits=pe,this.getTextureUnits=ve,this.setTextureUnits=J,this.setTexture2D=ee,this.setTexture2DArray=ge,this.setTexture3D=Te,this.setTextureCube=U,this.rebindTextures=He,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function sR(r,e){function i(s,l=ss){let c;const h=Rt.getTransfer(l);if(s===mi)return r.UNSIGNED_BYTE;if(s===fp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===hp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ov)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Pv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Nv)return r.BYTE;if(s===Lv)return r.SHORT;if(s===tl)return r.UNSIGNED_SHORT;if(s===up)return r.INT;if(s===ji)return r.UNSIGNED_INT;if(s===qi)return r.FLOAT;if(s===gi)return r.HALF_FLOAT;if(s===Iv)return r.ALPHA;if(s===Fv)return r.RGB;if(s===Pi)return r.RGBA;if(s===Ta)return r.DEPTH_COMPONENT;if(s===zs)return r.DEPTH_STENCIL;if(s===Bv)return r.RED;if(s===dp)return r.RED_INTEGER;if(s===Vs)return r.RG;if(s===pp)return r.RG_INTEGER;if(s===mp)return r.RGBA_INTEGER;if(s===jc||s===Qc||s===Jc||s===$c)if(h===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sd||s===Md||s===yd||s===Ed)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Sd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Md)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ed)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===iu||s===wd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===bd||s===Td)return h===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ad)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Rd)return c.COMPRESSED_R11_EAC;if(s===Cd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===iu)return c.COMPRESSED_RG11_EAC;if(s===wd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Dd||s===Ud||s===Nd||s===Ld||s===Od||s===Pd||s===Id||s===Fd||s===Bd||s===zd||s===Hd||s===Gd||s===Vd||s===kd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Dd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ud)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ld)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Od)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Id)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kd)return h===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xd||s===Wd||s===qd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Xd)return h===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===qd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Yd||s===Zd||s===au||s===Kd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Yd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Zd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===au)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===nl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const rR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new qv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new yn({vertexShader:rR,fragmentShader:oR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Mn(new ul(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cR extends ks{constructor(e,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,_=null,v=null,g=null,M=null,b=null;const A=typeof XRWebGLBinding<"u",y=new lR,S={},O=i.getContextAttributes();let I=null,w=null;const F=[],N=[],P=new ot;let T=null;const L=new pi;L.viewport=new rn;const q=new pi;q.viewport=new rn;const G=[L,q],j=new gE;let pe=null,ve=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let Me=F[ne];return Me===void 0&&(Me=new Ih,F[ne]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ne){let Me=F[ne];return Me===void 0&&(Me=new Ih,F[ne]=Me),Me.getGripSpace()},this.getHand=function(ne){let Me=F[ne];return Me===void 0&&(Me=new Ih,F[ne]=Me),Me.getHandSpace()};function J(ne){const Me=N.indexOf(ne.inputSource);if(Me===-1)return;const ye=F[Me];ye!==void 0&&(ye.update(ne.inputSource,ne.frame,d||h),ye.dispatchEvent({type:ne.type,data:ne.inputSource}))}function B(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",H);for(let ne=0;ne<F.length;ne++){const Me=N[ne];Me!==null&&(N[ne]=null,F[ne].disconnect(Me))}pe=null,ve=null,y.reset();for(const ne in S)delete S[ne];e.setRenderTarget(I),M=null,g=null,v=null,l=null,w=null,Oe.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,s.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){p=ne,s.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(ne){d=ne},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",B),l.addEventListener("inputsourceschange",H),O.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ge=null,it=null;O.depth&&(it=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=O.stencil?zs:Ta,Ge=O.stencil?nl:ji);const Je={colorFormat:i.RGBA8,depthFormat:it,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Je),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new ei(g.textureWidth,g.textureHeight,{format:Pi,type:mi,depthTexture:new Xr(g.textureWidth,g.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ye={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ye),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new ei(M.framebufferWidth,M.framebufferHeight,{format:Pi,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Oe.setContext(l),Oe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(ne){for(let Me=0;Me<ne.removed.length;Me++){const ye=ne.removed[Me],Ge=N.indexOf(ye);Ge>=0&&(N[Ge]=null,F[Ge].disconnect(ye))}for(let Me=0;Me<ne.added.length;Me++){const ye=ne.added[Me];let Ge=N.indexOf(ye);if(Ge===-1){for(let Je=0;Je<F.length;Je++)if(Je>=N.length){N.push(ye),Ge=Je;break}else if(N[Je]===null){N[Je]=ye,Ge=Je;break}if(Ge===-1)break}const it=F[Ge];it&&it.connect(ye)}}const ee=new K,ge=new K;function Te(ne,Me,ye){ee.setFromMatrixPosition(Me.matrixWorld),ge.setFromMatrixPosition(ye.matrixWorld);const Ge=ee.distanceTo(ge),it=Me.projectionMatrix.elements,Je=ye.projectionMatrix.elements,Zt=it[14]/(it[10]-1),dt=it[14]/(it[10]+1),Ee=(it[9]+1)/it[5],He=(it[9]-1)/it[5],Pe=(it[8]-1)/it[0],ct=(Je[8]+1)/Je[0],st=Zt*Pe,xt=Zt*ct,_t=Ge/(-Pe+ct),St=_t*-Pe;if(Me.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(St),ne.translateZ(_t),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),it[10]===-1)ne.projectionMatrix.copy(Me.projectionMatrix),ne.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const Pt=Zt+_t,X=dt+_t,It=st-St,Ct=xt+(Ge-St),D=Ee*dt/X*Pt,E=He*dt/X*Pt;ne.projectionMatrix.makePerspective(It,Ct,D,E,Pt,X),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function U(ne,Me){Me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(Me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let Me=ne.near,ye=ne.far;y.texture!==null&&(y.depthNear>0&&(Me=y.depthNear),y.depthFar>0&&(ye=y.depthFar)),j.near=q.near=L.near=Me,j.far=q.far=L.far=ye,(pe!==j.near||ve!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),pe=j.near,ve=j.far),j.layers.mask=ne.layers.mask|6,L.layers.mask=j.layers.mask&-5,q.layers.mask=j.layers.mask&-3;const Ge=ne.parent,it=j.cameras;U(j,Ge);for(let Je=0;Je<it.length;Je++)U(it[Je],Ge);it.length===2?Te(j,L,q):j.projectionMatrix.copy(L.projectionMatrix),Y(ne,j,Ge)};function Y(ne,Me,ye){ye===null?ne.matrix.copy(Me.matrixWorld):(ne.matrix.copy(ye.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(Me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(Me.projectionMatrix),ne.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=sl*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(ne){m=ne,g!==null&&(g.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(ne){return S[ne]};let he=null;function Ae(ne,Me){if(_=Me.getViewerPose(d||h),b=Me,_!==null){const ye=_.views;M!==null&&(e.setRenderTargetFramebuffer(w,M.framebuffer),e.setRenderTarget(w));let Ge=!1;ye.length!==j.cameras.length&&(j.cameras.length=0,Ge=!0);for(let dt=0;dt<ye.length;dt++){const Ee=ye[dt];let He=null;if(M!==null)He=M.getViewport(Ee);else{const ct=v.getViewSubImage(g,Ee);He=ct.viewport,dt===0&&(e.setRenderTargetTextures(w,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(w))}let Pe=G[dt];Pe===void 0&&(Pe=new pi,Pe.layers.enable(dt),Pe.viewport=new rn,G[dt]=Pe),Pe.matrix.fromArray(Ee.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ee.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(He.x,He.y,He.width,He.height),dt===0&&(j.matrix.copy(Pe.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ge===!0&&j.cameras.push(Pe)}const it=l.enabledFeatures;if(it&&it.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){v=s.getBinding();const dt=v.getDepthInformation(ye[0]);dt&&dt.isValid&&dt.texture&&y.init(dt,l.renderState)}if(it&&it.includes("camera-access")&&A){e.state.unbindTexture(),v=s.getBinding();for(let dt=0;dt<ye.length;dt++){const Ee=ye[dt].camera;if(Ee){let He=S[Ee];He||(He=new qv,S[Ee]=He);const Pe=v.getCameraImage(Ee);He.sourceTexture=Pe}}}}for(let ye=0;ye<F.length;ye++){const Ge=N[ye],it=F[ye];Ge!==null&&it!==void 0&&it.update(Ge,Me,d||h)}he&&he(ne,Me),Me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Me}),b=null}const Oe=new Jv;Oe.setAnimationLoop(Ae),this.setAnimationLoop=function(ne){he=ne},this.dispose=function(){}}}const uR=new en,sx=new ft;sx.set(-1,0,0,0,1,0,0,0,1);function fR(r,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,Yv(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,O,I,w){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),v(y,S)):S.isMeshPhongMaterial?(c(y,S),_(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),g(y,S),S.isMeshPhysicalMaterial&&M(y,S,w)):S.isMeshMatcapMaterial?(c(y,S),b(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),A(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(h(y,S),S.isLineDashedMaterial&&p(y,S)):S.isPointsMaterial?m(y,S,O,I):S.isSpriteMaterial?d(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===In&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===In&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const O=e.get(S),I=O.envMap,w=O.envMapRotation;I&&(y.envMap.value=I,y.envMapRotation.value.setFromMatrix4(uR.makeRotationFromEuler(w)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(sx),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function p(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,O,I){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*O,y.scale.value=I*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,O){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===In&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function A(y,S){const O=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function hR(r,e,i,s){let l={},c={},h=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,F){const N=F.program;s.uniformBlockBinding(w,N)}function d(w,F){let N=l[w.id];N===void 0&&(y(w),N=_(w),l[w.id]=N,w.addEventListener("dispose",O));const P=F.program;s.updateUBOMapping(w,P);const T=e.render.frame;c[w.id]!==T&&(g(w),c[w.id]=T)}function _(w){const F=v();w.__bindingPointIndex=F;const N=r.createBuffer(),P=w.__size,T=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,P,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,F,N),N}function v(){for(let w=0;w<p;w++)if(h.indexOf(w)===-1)return h.push(w),w;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const F=l[w.id],N=w.uniforms,P=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,F);for(let T=0,L=N.length;T<L;T++){const q=N[T];if(Array.isArray(q))for(let G=0,j=q.length;G<j;G++)M(q[G],T,G,P);else M(q,T,0,P)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(w,F,N,P){if(A(w,F,N,P)===!0){const T=w.__offset,L=w.value;if(Array.isArray(L)){let q=0;for(let G=0;G<L.length;G++){const j=L[G],pe=S(j);b(j,w.__data,q),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(q+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(L,w.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,w.__data)}}function b(w,F,N){typeof w=="number"||typeof w=="boolean"?F[0]=w:w.isMatrix3?(F[0]=w.elements[0],F[1]=w.elements[1],F[2]=w.elements[2],F[3]=0,F[4]=w.elements[3],F[5]=w.elements[4],F[6]=w.elements[5],F[7]=0,F[8]=w.elements[6],F[9]=w.elements[7],F[10]=w.elements[8],F[11]=0):ArrayBuffer.isView(w)?F.set(new w.constructor(w.buffer,w.byteOffset,F.length)):w.toArray(F,N)}function A(w,F,N,P){const T=w.value,L=F+"_"+N;if(P[L]===void 0)return typeof T=="number"||typeof T=="boolean"?P[L]=T:ArrayBuffer.isView(T)?P[L]=T.slice():P[L]=T.clone(),!0;{const q=P[L];if(typeof T=="number"||typeof T=="boolean"){if(q!==T)return P[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(q.equals(T)===!1)return q.copy(T),!0}}return!1}function y(w){const F=w.uniforms;let N=0;const P=16;for(let L=0,q=F.length;L<q;L++){const G=Array.isArray(F[L])?F[L]:[F[L]];for(let j=0,pe=G.length;j<pe;j++){const ve=G[j],J=Array.isArray(ve.value)?ve.value:[ve.value];for(let B=0,H=J.length;B<H;B++){const ee=J[B],ge=S(ee),Te=N%P,U=Te%ge.boundary,Y=Te+U;N+=U,Y!==0&&P-Y<ge.storage&&(N+=P-Y),ve.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),ve.__offset=N,N+=ge.storage}}}const T=N%P;return T>0&&(N+=P-T),w.__size=N,w.__cache={},this}function S(w){const F={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(F.boundary=4,F.storage=4):w.isVector2?(F.boundary=8,F.storage=8):w.isVector3||w.isColor?(F.boundary=16,F.storage=12):w.isVector4?(F.boundary=16,F.storage=16):w.isMatrix3?(F.boundary=48,F.storage=48):w.isMatrix4?(F.boundary=64,F.storage=64):w.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(F.boundary=16,F.storage=w.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",w),F}function O(w){const F=w.target;F.removeEventListener("dispose",O);const N=h.indexOf(F.__bindingPointIndex);h.splice(N,1),r.deleteBuffer(l[F.id]),delete l[F.id],delete c[F.id]}function I(){for(const w in l)r.deleteBuffer(l[w]);h=[],l={},c={}}return{bind:m,update:d,dispose:I}}const dR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function pR(){return Xi===null&&(Xi=new Ky(dR,16,16,Vs,gi),Xi.name="DFG_LUT",Xi.minFilter=Vn,Xi.magFilter=Vn,Xi.wrapS=Ea,Xi.wrapT=Ea,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class mR{constructor(e={}){const{canvas:i=fy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:M=mi}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const A=M,y=new Set([mp,pp,dp]),S=new Set([mi,ji,tl,nl,fp,hp]),O=new Uint32Array(4),I=new Int32Array(4),w=new K;let F=null,N=null;const P=[],T=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let G=!1,j=null,pe=null,ve=null,J=null;this._outputColorSpace=Gn;let B=0,H=0,ee=null,ge=-1,Te=null;const U=new rn,Y=new rn;let he=null;const Ae=new ht(0);let Oe=0,ne=i.width,Me=i.height,ye=1,Ge=null,it=null;const Je=new rn(0,0,ne,Me),Zt=new rn(0,0,ne,Me);let dt=!1;const Ee=new Mp;let He=!1,Pe=!1;const ct=new en,st=new K,xt=new rn,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function Pt(){return ee===null?ye:1}let X=s;function It(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ip}`),i.addEventListener("webglcontextlost",tn,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",ti,!1),X===null){const W="webgl2";if(X=It(W,R),X===null)throw It(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Dt("WebGLRenderer: "+R.message),R}let Ct,D,E,Q,re,fe,Re,Ue,ue,de,we,Ve,Ie,Ne,$e,et,lt,k,Ce,_e,De,ze,be;function Ke(){Ct=new p1(X),Ct.init(),De=new sR(X,Ct),D=new r1(X,Ct,e,De),E=new iR(X,Ct),D.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),pe=X.createFramebuffer(),ve=X.createFramebuffer(),J=X.createFramebuffer(),Q=new _1(X),re=new kA,fe=new aR(X,Ct,E,re,D,De,Q),Re=new d1(q),Ue=new ME(X),ze=new a1(X,Ue),ue=new m1(X,Ue,Q,ze),de=new x1(X,ue,Ue,ze,Q),k=new v1(X,D,fe),$e=new o1(re),we=new VA(q,Re,Ct,D,ze,$e),Ve=new fR(q,re),Ie=new WA,Ne=new QA(Ct),lt=new i1(q,Re,E,de,b,m),et=new nR(q,de,D),be=new hR(X,Q,D,E),Ce=new s1(X,Ct,Q),_e=new g1(X,Ct,Q),Q.programs=we.programs,q.capabilities=D,q.extensions=Ct,q.properties=re,q.renderLists=Ie,q.shadowMap=et,q.state=E,q.info=Q}Ke(),A!==mi&&(L=new M1(A,i.width,i.height,p,l,c));const We=new cR(q,X);this.xr=We,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=Ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(R){R!==void 0&&(ye=R,this.setSize(ne,Me,!1))},this.getSize=function(R){return R.set(ne,Me)},this.setSize=function(R,W,oe=!0){if(We.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=R,Me=W,i.width=Math.floor(R*ye),i.height=Math.floor(W*ye),oe===!0&&(i.style.width=R+"px",i.style.height=W+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(ne*ye,Me*ye).floor()},this.setDrawingBufferSize=function(R,W,oe){ne=R,Me=W,ye=oe,i.width=Math.floor(R*oe),i.height=Math.floor(W*oe),this.setViewport(0,0,R,W)},this.setEffects=function(R){if(A===mi){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let W=0;W<R.length;W++)if(R[W].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(Je)},this.setViewport=function(R,W,oe,ae){R.isVector4?Je.set(R.x,R.y,R.z,R.w):Je.set(R,W,oe,ae),E.viewport(U.copy(Je).multiplyScalar(ye).round())},this.getScissor=function(R){return R.copy(Zt)},this.setScissor=function(R,W,oe,ae){R.isVector4?Zt.set(R.x,R.y,R.z,R.w):Zt.set(R,W,oe,ae),E.scissor(Y.copy(Zt).multiplyScalar(ye).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(R){E.setScissorTest(dt=R)},this.setOpaqueSort=function(R){Ge=R},this.setTransparentSort=function(R){it=R},this.getClearColor=function(R){return R.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,oe=!0){let ae=0;if(R){let se=!1;if(ee!==null){const Fe=ee.texture.format;se=y.has(Fe)}if(se){const Fe=ee.texture.type,Xe=S.has(Fe),Le=lt.getClearColor(),Ye=lt.getClearAlpha(),qe=Le.r,tt=Le.g,pt=Le.b;Xe?(O[0]=qe,O[1]=tt,O[2]=pt,O[3]=Ye,X.clearBufferuiv(X.COLOR,0,O)):(I[0]=qe,I[1]=tt,I[2]=pt,I[3]=Ye,X.clearBufferiv(X.COLOR,0,I))}else ae|=X.COLOR_BUFFER_BIT}W&&(ae|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ae|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&X.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),j=R},this.dispose=function(){i.removeEventListener("webglcontextlost",tn,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),lt.dispose(),Ie.dispose(),Ne.dispose(),re.dispose(),Re.dispose(),de.dispose(),ze.dispose(),be.dispose(),we.dispose(),We.dispose(),We.removeEventListener("sessionstart",hn),We.removeEventListener("sessionend",wn),Yn.stop()};function tn(R){R.preventDefault(),A_("WebGLRenderer: Context Lost."),G=!0}function zt(){A_("WebGLRenderer: Context Restored."),G=!1;const R=Q.autoReset,W=et.enabled,oe=et.autoUpdate,ae=et.needsUpdate,se=et.type;Ke(),Q.autoReset=R,et.enabled=W,et.autoUpdate=oe,et.needsUpdate=ae,et.type=se}function ti(R){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ni(R){const W=R.target;W.removeEventListener("dispose",ni),Qr(W)}function Qr(R){Jr(R),re.remove(R)}function Jr(R){const W=re.get(R).programs;W!==void 0&&(W.forEach(function(oe){we.releaseProgram(oe)}),R.isShaderMaterial&&we.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,oe,ae,se,Fe){W===null&&(W=_t);const Xe=se.isMesh&&se.matrixWorld.determinantAffine()<0,Le=Ca(R,W,oe,ae,se);E.setMaterial(ae,Xe);let Ye=oe.index,qe=1;if(ae.wireframe===!0){if(Ye=ue.getWireframeAttribute(oe),Ye===void 0)return;qe=2}const tt=oe.drawRange,pt=oe.attributes.position;let Qe=tt.start*qe,Ut=(tt.start+tt.count)*qe;Fe!==null&&(Qe=Math.max(Qe,Fe.start*qe),Ut=Math.min(Ut,(Fe.start+Fe.count)*qe)),Ye!==null?(Qe=Math.max(Qe,0),Ut=Math.min(Ut,Ye.count)):pt!=null&&(Qe=Math.max(Qe,0),Ut=Math.min(Ut,pt.count));const nn=Ut-Qe;if(nn<0||nn===1/0)return;ze.setup(se,ae,Le,oe,Ye);let Kt,Ht=Ce;if(Ye!==null&&(Kt=Ue.get(Ye),Ht=_e,Ht.setIndex(Kt)),se.isMesh)ae.wireframe===!0?(E.setLineWidth(ae.wireframeLinewidth*Pt()),Ht.setMode(X.LINES)):Ht.setMode(X.TRIANGLES);else if(se.isLine){let Gt=ae.linewidth;Gt===void 0&&(Gt=1),E.setLineWidth(Gt*Pt()),se.isLineSegments?Ht.setMode(X.LINES):se.isLineLoop?Ht.setMode(X.LINE_LOOP):Ht.setMode(X.LINE_STRIP)}else se.isPoints?Ht.setMode(X.POINTS):se.isSprite&&Ht.setMode(X.TRIANGLES);if(se.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Ht.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const Gt=se._multiDrawStarts,ke=se._multiDrawCounts,Fn=se._multiDrawCount,Mt=Ye?Ue.get(Ye).bytesPerElement:1,xn=re.get(ae).currentProgram.getUniforms();for(let ii=0;ii<Fn;ii++)xn.setValue(X,"_gl_DrawID",ii),Ht.render(Gt[ii]/Mt,ke[ii])}else if(se.isInstancedMesh)Ht.renderInstances(Qe,nn,se.count);else if(oe.isInstancedBufferGeometry){const Gt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ke=Math.min(oe.instanceCount,Gt);Ht.renderInstances(Qe,nn,ke)}else Ht.render(Qe,nn)};function $r(R,W,oe){R.transparent===!0&&R.side===Ma&&R.forceSinglePass===!1?(R.side=In,R.needsUpdate=!0,Ra(R,W,oe),R.side=os,R.needsUpdate=!0,Ra(R,W,oe),R.side=Ma):Ra(R,W,oe)}this.compile=function(R,W,oe=null){oe===null&&(oe=R),N=Ne.get(oe),N.init(W),T.push(N),oe.traverseVisible(function(se){se.isLight&&se.layers.test(W.layers)&&(N.pushLight(se),se.castShadow&&N.pushShadow(se))}),R!==oe&&R.traverseVisible(function(se){se.isLight&&se.layers.test(W.layers)&&(N.pushLight(se),se.castShadow&&N.pushShadow(se))}),N.setupLights();const ae=new Set;return R.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Fe=se.material;if(Fe)if(Array.isArray(Fe))for(let Xe=0;Xe<Fe.length;Xe++){const Le=Fe[Xe];$r(Le,oe,se),ae.add(Le)}else $r(Fe,oe,se),ae.add(Fe)}),N=T.pop(),ae},this.compileAsync=function(R,W,oe=null){const ae=this.compile(R,W,oe);return new Promise(se=>{function Fe(){if(ae.forEach(function(Xe){re.get(Xe).currentProgram.isReady()&&ae.delete(Xe)}),ae.size===0){se(R);return}setTimeout(Fe,10)}Ct.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Ws=null;function Fi(R){Ws&&Ws(R)}function hn(){Yn.stop()}function wn(){Yn.start()}const Yn=new Jv;Yn.setAnimationLoop(Fi),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(R){Ws=R,We.setAnimationLoop(R),R===null?Yn.stop():Yn.start()},We.addEventListener("sessionstart",hn),We.addEventListener("sessionend",wn),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;j!==null&&j.renderStart(R,W);const oe=We.enabled===!0&&We.isPresenting===!0,ae=L!==null&&(ee===null||oe)&&L.begin(q,ee);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(W),W=We.getCamera()),R.isScene===!0&&R.onBeforeRender(q,R,W,ee),N=Ne.get(R,T.length),N.init(W),N.state.textureUnits=fe.getTextureUnits(),T.push(N),ct.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ee.setFromProjectionMatrix(ct,Yi,W.reversedDepth),Pe=this.localClippingEnabled,He=$e.init(this.clippingPlanes,Pe),F=Ie.get(R,P.length),F.init(),P.push(F),We.enabled===!0&&We.isPresenting===!0){const Xe=q.xr.getDepthSensingMesh();Xe!==null&&cs(Xe,W,-1/0,q.sortObjects)}cs(R,W,0,q.sortObjects),F.finish(),q.sortObjects===!0&&F.sort(Ge,it,W.reversedDepth),St=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,St&&lt.addToRenderList(F,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),He===!0&&$e.beginShadows();const se=N.state.shadowsArray;if(et.render(se,R,W),He===!0&&$e.endShadows(),(ae&&L.hasRenderPass())===!1){const Xe=F.opaque,Le=F.transmissive;if(N.setupLights(),W.isArrayCamera){const Ye=W.cameras;if(Le.length>0)for(let qe=0,tt=Ye.length;qe<tt;qe++){const pt=Ye[qe];hl(Xe,Le,R,pt)}St&&lt.render(R);for(let qe=0,tt=Ye.length;qe<tt;qe++){const pt=Ye[qe];fl(F,R,pt,pt.viewport)}}else Le.length>0&&hl(Xe,Le,R,W),St&&lt.render(R),fl(F,R,W)}ee!==null&&H===0&&(fe.updateMultisampleRenderTarget(ee),fe.updateRenderTargetMipmap(ee)),ae&&L.end(q),R.isScene===!0&&R.onAfterRender(q,R,W),ze.resetDefaultState(),ge=-1,Te=null,T.pop(),T.length>0?(N=T[T.length-1],fe.setTextureUnits(N.state.textureUnits),He===!0&&$e.setGlobalState(q.clippingPlanes,N.state.camera)):N=null,P.pop(),P.length>0?F=P[P.length-1]:F=null,j!==null&&j.renderEnd()};function cs(R,W,oe,ae){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLightProbeGrid)N.pushLightProbeGrid(R);else if(R.isLight)N.pushLight(R),R.castShadow&&N.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ee.intersectsSprite(R)){ae&&xt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ct);const Xe=de.update(R),Le=R.material;Le.visible&&F.push(R,Xe,Le,oe,xt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ee.intersectsObject(R))){const Xe=de.update(R),Le=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),xt.copy(R.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),xt.copy(Xe.boundingSphere.center)),xt.applyMatrix4(R.matrixWorld).applyMatrix4(ct)),Array.isArray(Le)){const Ye=Xe.groups;for(let qe=0,tt=Ye.length;qe<tt;qe++){const pt=Ye[qe],Qe=Le[pt.materialIndex];Qe&&Qe.visible&&F.push(R,Xe,Qe,oe,xt.z,pt)}}else Le.visible&&F.push(R,Xe,Le,oe,xt.z,null)}}const Fe=R.children;for(let Xe=0,Le=Fe.length;Xe<Le;Xe++)cs(Fe[Xe],W,oe,ae)}function fl(R,W,oe,ae){const{opaque:se,transmissive:Fe,transparent:Xe}=R;N.setupLightsView(oe),He===!0&&$e.setGlobalState(q.clippingPlanes,oe),ae&&E.viewport(U.copy(ae)),se.length>0&&us(se,W,oe),Fe.length>0&&us(Fe,W,oe),Xe.length>0&&us(Xe,W,oe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function hl(R,W,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ae.id]===void 0){const Qe=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ae.id]=new ei(1,1,{generateMipmaps:!0,type:Qe?gi:mi,minFilter:Bs,samples:Math.max(4,D.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Fe=N.state.transmissionRenderTarget[ae.id],Xe=ae.viewport||U;Fe.setSize(Xe.z*q.transmissionResolutionScale,Xe.w*q.transmissionResolutionScale);const Le=q.getRenderTarget(),Ye=q.getActiveCubeFace(),qe=q.getActiveMipmapLevel();q.setRenderTarget(Fe),q.getClearColor(Ae),Oe=q.getClearAlpha(),Oe<1&&q.setClearColor(16777215,.5),q.clear(),St&&lt.render(oe);const tt=q.toneMapping;q.toneMapping=Ki;const pt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),N.setupLightsView(ae),He===!0&&$e.setGlobalState(q.clippingPlanes,ae),us(R,oe,ae),fe.updateMultisampleRenderTarget(Fe),fe.updateRenderTargetMipmap(Fe),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ut=0,nn=W.length;Ut<nn;Ut++){const Kt=W[Ut],{object:Ht,geometry:Gt,material:ke,group:Fn}=Kt;if(ke.side===Ma&&Ht.layers.test(ae.layers)){const Mt=ke.side;ke.side=In,ke.needsUpdate=!0,Aa(Ht,oe,ae,Gt,ke,Fn),ke.side=Mt,ke.needsUpdate=!0,Qe=!0}}Qe===!0&&(fe.updateMultisampleRenderTarget(Fe),fe.updateRenderTargetMipmap(Fe))}q.setRenderTarget(Le,Ye,qe),q.setClearColor(Ae,Oe),pt!==void 0&&(ae.viewport=pt),q.toneMapping=tt}function us(R,W,oe){const ae=W.isScene===!0?W.overrideMaterial:null;for(let se=0,Fe=R.length;se<Fe;se++){const Xe=R[se],{object:Le,geometry:Ye,group:qe}=Xe;let tt=Xe.material;tt.allowOverride===!0&&ae!==null&&(tt=ae),Le.layers.test(oe.layers)&&Aa(Le,W,oe,Ye,tt,qe)}}function Aa(R,W,oe,ae,se,Fe){R.onBeforeRender(q,W,oe,ae,se,Fe),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),se.onBeforeRender(q,W,oe,ae,R,Fe),se.transparent===!0&&se.side===Ma&&se.forceSinglePass===!1?(se.side=In,se.needsUpdate=!0,q.renderBufferDirect(oe,W,ae,se,R,Fe),se.side=os,se.needsUpdate=!0,q.renderBufferDirect(oe,W,ae,se,R,Fe),se.side=Ma):q.renderBufferDirect(oe,W,ae,se,R,Fe),R.onAfterRender(q,W,oe,ae,se,Fe)}function Ra(R,W,oe){W.isScene!==!0&&(W=_t);const ae=re.get(R),se=N.state.lights,Fe=N.state.shadowsArray,Xe=se.state.version,Le=we.getParameters(R,se.state,Fe,W,oe,N.state.lightProbeGridArray),Ye=we.getProgramCacheKey(Le);let qe=ae.programs;ae.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?W.environment:null,ae.fog=W.fog;const tt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ae.envMap=Re.get(R.envMap||ae.environment,tt),ae.envMapRotation=ae.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,qe===void 0&&(R.addEventListener("dispose",ni),qe=new Map,ae.programs=qe);let pt=qe.get(Ye);if(pt!==void 0){if(ae.currentProgram===pt&&ae.lightsStateVersion===Xe)return Ji(R,Le),pt}else Le.uniforms=we.getUniforms(R),j!==null&&R.isNodeMaterial&&j.build(R,oe,Le),R.onBeforeCompile(Le,q),pt=we.acquireProgram(Le,Ye),qe.set(Ye,pt),ae.uniforms=Le.uniforms;const Qe=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qe.clippingPlanes=$e.uniform),Ji(R,Le),ae.needsLights=dl(R),ae.lightsStateVersion=Xe,ae.needsLights&&(Qe.ambientLightColor.value=se.state.ambient,Qe.lightProbe.value=se.state.probe,Qe.directionalLights.value=se.state.directional,Qe.directionalLightShadows.value=se.state.directionalShadow,Qe.spotLights.value=se.state.spot,Qe.spotLightShadows.value=se.state.spotShadow,Qe.rectAreaLights.value=se.state.rectArea,Qe.ltc_1.value=se.state.rectAreaLTC1,Qe.ltc_2.value=se.state.rectAreaLTC2,Qe.pointLights.value=se.state.point,Qe.pointLightShadows.value=se.state.pointShadow,Qe.hemisphereLights.value=se.state.hemi,Qe.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Qe.spotLightMatrix.value=se.state.spotLightMatrix,Qe.spotLightMap.value=se.state.spotLightMap,Qe.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.lightProbeGrid=N.state.lightProbeGridArray.length>0,ae.currentProgram=pt,ae.uniformsList=null,pt}function Qi(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=eu.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Ji(R,W){const oe=re.get(R);oe.outputColorSpace=W.outputColorSpace,oe.batching=W.batching,oe.batchingColor=W.batchingColor,oe.instancing=W.instancing,oe.instancingColor=W.instancingColor,oe.instancingMorph=W.instancingMorph,oe.skinning=W.skinning,oe.morphTargets=W.morphTargets,oe.morphNormals=W.morphNormals,oe.morphColors=W.morphColors,oe.morphTargetsCount=W.morphTargetsCount,oe.numClippingPlanes=W.numClippingPlanes,oe.numIntersection=W.numClipIntersection,oe.vertexAlphas=W.vertexAlphas,oe.vertexTangents=W.vertexTangents,oe.toneMapping=W.toneMapping}function fs(R,W){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;w.setFromMatrixPosition(W.matrixWorld);for(let oe=0,ae=R.length;oe<ae;oe++){const se=R[oe];if(se.texture!==null&&se.boundingBox.containsPoint(w))return se}return null}function Ca(R,W,oe,ae,se){W.isScene!==!0&&(W=_t),fe.resetTextureUnits();const Fe=W.fog,Xe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?W.environment:null,Le=ee===null?q.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Rt.workingColorSpace,Ye=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,qe=Re.get(ae.envMap||Xe,Ye),tt=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pt=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Qe=!!oe.morphAttributes.position,Ut=!!oe.morphAttributes.normal,nn=!!oe.morphAttributes.color;let Kt=Ki;ae.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Kt=q.toneMapping);const Ht=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Gt=Ht!==void 0?Ht.length:0,ke=re.get(ae),Fn=N.state.lights;if(He===!0&&(Pe===!0||R!==Te)){const Ft=R===Te&&ae.id===ge;$e.setState(ae,R,Ft)}let Mt=!1;ae.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Fn.state.version||ke.outputColorSpace!==Le||se.isBatchedMesh&&ke.batching===!1||!se.isBatchedMesh&&ke.batching===!0||se.isBatchedMesh&&ke.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&ke.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&ke.instancing===!1||!se.isInstancedMesh&&ke.instancing===!0||se.isSkinnedMesh&&ke.skinning===!1||!se.isSkinnedMesh&&ke.skinning===!0||se.isInstancedMesh&&ke.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&ke.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&ke.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&ke.instancingMorph===!1&&se.morphTexture!==null||ke.envMap!==qe||ae.fog===!0&&ke.fog!==Fe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==$e.numPlanes||ke.numIntersection!==$e.numIntersection)||ke.vertexAlphas!==tt||ke.vertexTangents!==pt||ke.morphTargets!==Qe||ke.morphNormals!==Ut||ke.morphColors!==nn||ke.toneMapping!==Kt||ke.morphTargetsCount!==Gt||!!ke.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,ke.__version=ae.version);let xn=ke.currentProgram;Mt===!0&&(xn=Ra(ae,W,se),j&&ae.isNodeMaterial&&j.onUpdateProgram(ae,xn,ke));let ii=!1,Ai=!1,ai=!1;const Vt=xn.getUniforms(),an=ke.uniforms;if(E.useProgram(xn.program)&&(ii=!0,Ai=!0,ai=!0),ae.id!==ge&&(ge=ae.id,Ai=!0),ke.needsLights){const Ft=fs(N.state.lightProbeGridArray,se);ke.lightProbeGrid!==Ft&&(ke.lightProbeGrid=Ft,Ai=!0)}if(ii||Te!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Vt.setValue(X,"projectionMatrix",R.projectionMatrix),Vt.setValue(X,"viewMatrix",R.matrixWorldInverse);const Bi=Vt.map.cameraPosition;Bi!==void 0&&Bi.setValue(X,st.setFromMatrixPosition(R.matrixWorld)),D.logarithmicDepthBuffer&&Vt.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Vt.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),Te!==R&&(Te=R,Ai=!0,ai=!0)}if(ke.needsLights&&(Fn.state.directionalShadowMap.length>0&&Vt.setValue(X,"directionalShadowMap",Fn.state.directionalShadowMap,fe),Fn.state.spotShadowMap.length>0&&Vt.setValue(X,"spotShadowMap",Fn.state.spotShadowMap,fe),Fn.state.pointShadowMap.length>0&&Vt.setValue(X,"pointShadowMap",Fn.state.pointShadowMap,fe)),se.isSkinnedMesh){Vt.setOptional(X,se,"bindMatrix"),Vt.setOptional(X,se,"bindMatrixInverse");const Ft=se.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Vt.setValue(X,"boneTexture",Ft.boneTexture,fe))}se.isBatchedMesh&&(Vt.setOptional(X,se,"batchingTexture"),Vt.setValue(X,"batchingTexture",se._matricesTexture,fe),Vt.setOptional(X,se,"batchingIdTexture"),Vt.setValue(X,"batchingIdTexture",se._indirectTexture,fe),Vt.setOptional(X,se,"batchingColorTexture"),se._colorsTexture!==null&&Vt.setValue(X,"batchingColorTexture",se._colorsTexture,fe));const Ri=oe.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&k.update(se,oe,xn),(Ai||ke.receiveShadow!==se.receiveShadow)&&(ke.receiveShadow=se.receiveShadow,Vt.setValue(X,"receiveShadow",se.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&W.environment!==null&&(an.envMapIntensity.value=W.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=pR()),Ai){if(Vt.setValue(X,"toneMappingExposure",q.toneMappingExposure),ke.needsLights&&dn(an,ai),Fe&&ae.fog===!0&&Ve.refreshFogUniforms(an,Fe),Ve.refreshMaterialUniforms(an,ae,ye,Me,N.state.transmissionRenderTarget[R.id]),ke.needsLights&&ke.lightProbeGrid){const Ft=ke.lightProbeGrid;an.probesSH.value=Ft.texture,an.probesMin.value.copy(Ft.boundingBox.min),an.probesMax.value.copy(Ft.boundingBox.max),an.probesResolution.value.copy(Ft.resolution)}eu.upload(X,Qi(ke),an,fe)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(eu.upload(X,Qi(ke),an,fe),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Vt.setValue(X,"center",se.center),Vt.setValue(X,"modelViewMatrix",se.modelViewMatrix),Vt.setValue(X,"normalMatrix",se.normalMatrix),Vt.setValue(X,"modelMatrix",se.matrixWorld),ae.uniformsGroups!==void 0){const Ft=ae.uniformsGroups;for(let Bi=0,wa=Ft.length;Bi<wa;Bi++){const hs=Ft[Bi];be.update(hs,xn),be.bind(hs,xn)}}return xn}function dn(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function dl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(R,W,oe){const ae=re.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),re.get(R.texture).__webglTexture=W,re.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const oe=re.get(R);oe.__webglFramebuffer=W,oe.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,oe=0){ee=R,B=W,H=oe;let ae=null,se=!1,Fe=!1;if(R){const Le=re.get(R);if(Le.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(X.FRAMEBUFFER,Le.__webglFramebuffer),U.copy(R.viewport),Y.copy(R.scissor),he=R.scissorTest,E.viewport(U),E.scissor(Y),E.setScissorTest(he),ge=-1;return}else if(Le.__webglFramebuffer===void 0)fe.setupRenderTarget(R);else if(Le.__hasExternalTextures)fe.rebindTextures(R,re.get(R.texture).__webglTexture,re.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const tt=R.depthTexture;if(Le.__boundDepthTexture!==tt){if(tt!==null&&re.has(tt)&&(R.width!==tt.image.width||R.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(R)}}const Ye=R.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Fe=!0);const qe=re.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[W])?ae=qe[W][oe]:ae=qe[W],se=!0):R.samples>0&&fe.useMultisampledRTT(R)===!1?ae=re.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?ae=qe[oe]:ae=qe,U.copy(R.viewport),Y.copy(R.scissor),he=R.scissorTest}else U.copy(Je).multiplyScalar(ye).floor(),Y.copy(Zt).multiplyScalar(ye).floor(),he=dt;if(oe!==0&&(ae=pe),E.bindFramebuffer(X.FRAMEBUFFER,ae)&&E.drawBuffers(R,ae),E.viewport(U),E.scissor(Y),E.setScissorTest(he),se){const Le=re.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,oe)}else if(Fe){const Le=W;for(let Ye=0;Ye<R.textures.length;Ye++){const qe=re.get(R.textures[Ye]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ye,qe.__webglTexture,oe,Le)}}else if(R!==null&&oe!==0){const Le=re.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Le.__webglTexture,oe)}ge=-1},this.readRenderTargetPixels=function(R,W,oe,ae,se,Fe,Xe,Le=0){if(!(R&&R.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ye=Ye[Xe]),Ye){E.bindFramebuffer(X.FRAMEBUFFER,Ye);try{const qe=R.textures[Le],tt=qe.format,pt=qe.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Le),!D.textureFormatReadable(tt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(pt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-ae&&oe>=0&&oe<=R.height-se&&X.readPixels(W,oe,ae,se,De.convert(tt),De.convert(pt),Fe)}finally{const qe=ee!==null?re.get(ee).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(R,W,oe,ae,se,Fe,Xe,Le=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ye=Ye[Xe]),Ye)if(W>=0&&W<=R.width-ae&&oe>=0&&oe<=R.height-se){E.bindFramebuffer(X.FRAMEBUFFER,Ye);const qe=R.textures[Le],tt=qe.format,pt=qe.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Le),!D.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Qe),X.bufferData(X.PIXEL_PACK_BUFFER,Fe.byteLength,X.STREAM_READ),X.readPixels(W,oe,ae,se,De.convert(tt),De.convert(pt),0);const Ut=ee!==null?re.get(ee).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,Ut);const nn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await hy(X,nn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Qe),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Fe),X.deleteBuffer(Qe),X.deleteSync(nn),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,oe=0){const ae=Math.pow(2,-oe),se=Math.floor(R.image.width*ae),Fe=Math.floor(R.image.height*ae),Xe=W!==null?W.x:0,Le=W!==null?W.y:0;fe.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,oe,0,0,Xe,Le,se,Fe),E.unbindTexture()},this.copyTextureToTexture=function(R,W,oe=null,ae=null,se=0,Fe=0){let Xe,Le,Ye,qe,tt,pt,Qe,Ut,nn;const Kt=R.isCompressedTexture?R.mipmaps[Fe]:R.image;if(oe!==null)Xe=oe.max.x-oe.min.x,Le=oe.max.y-oe.min.y,Ye=oe.isBox3?oe.max.z-oe.min.z:1,qe=oe.min.x,tt=oe.min.y,pt=oe.isBox3?oe.min.z:0;else{const an=Math.pow(2,-se);Xe=Math.floor(Kt.width*an),Le=Math.floor(Kt.height*an),R.isDataArrayTexture?Ye=Kt.depth:R.isData3DTexture?Ye=Math.floor(Kt.depth*an):Ye=1,qe=0,tt=0,pt=0}ae!==null?(Qe=ae.x,Ut=ae.y,nn=ae.z):(Qe=0,Ut=0,nn=0);const Ht=De.convert(W.format),Gt=De.convert(W.type);let ke;W.isData3DTexture?(fe.setTexture3D(W,0),ke=X.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(fe.setTexture2DArray(W,0),ke=X.TEXTURE_2D_ARRAY):(fe.setTexture2D(W,0),ke=X.TEXTURE_2D),E.activeTexture(X.TEXTURE0),E.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),E.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),E.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);const Fn=E.getParameter(X.UNPACK_ROW_LENGTH),Mt=E.getParameter(X.UNPACK_IMAGE_HEIGHT),xn=E.getParameter(X.UNPACK_SKIP_PIXELS),ii=E.getParameter(X.UNPACK_SKIP_ROWS),Ai=E.getParameter(X.UNPACK_SKIP_IMAGES);E.pixelStorei(X.UNPACK_ROW_LENGTH,Kt.width),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Kt.height),E.pixelStorei(X.UNPACK_SKIP_PIXELS,qe),E.pixelStorei(X.UNPACK_SKIP_ROWS,tt),E.pixelStorei(X.UNPACK_SKIP_IMAGES,pt);const ai=R.isDataArrayTexture||R.isData3DTexture,Vt=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const an=re.get(R),Ri=re.get(W),Ft=re.get(an.__renderTarget),Bi=re.get(Ri.__renderTarget);E.bindFramebuffer(X.READ_FRAMEBUFFER,Ft.__webglFramebuffer),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let wa=0;wa<Ye;wa++)ai&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,re.get(R).__webglTexture,se,pt+wa),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,re.get(W).__webglTexture,Fe,nn+wa)),X.blitFramebuffer(qe,tt,Xe,Le,Qe,Ut,Xe,Le,X.DEPTH_BUFFER_BIT,X.NEAREST);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(se!==0||R.isRenderTargetTexture||re.has(R)){const an=re.get(R),Ri=re.get(W);E.bindFramebuffer(X.READ_FRAMEBUFFER,ve),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,J);for(let Ft=0;Ft<Ye;Ft++)ai?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,an.__webglTexture,se,pt+Ft):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,an.__webglTexture,se),Vt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ri.__webglTexture,Fe,nn+Ft):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ri.__webglTexture,Fe),se!==0?X.blitFramebuffer(qe,tt,Xe,Le,Qe,Ut,Xe,Le,X.COLOR_BUFFER_BIT,X.NEAREST):Vt?X.copyTexSubImage3D(ke,Fe,Qe,Ut,nn+Ft,qe,tt,Xe,Le):X.copyTexSubImage2D(ke,Fe,Qe,Ut,qe,tt,Xe,Le);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Vt?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(ke,Fe,Qe,Ut,nn,Xe,Le,Ye,Ht,Gt,Kt.data):W.isCompressedArrayTexture?X.compressedTexSubImage3D(ke,Fe,Qe,Ut,nn,Xe,Le,Ye,Ht,Kt.data):X.texSubImage3D(ke,Fe,Qe,Ut,nn,Xe,Le,Ye,Ht,Gt,Kt):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Fe,Qe,Ut,Xe,Le,Ht,Gt,Kt.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Fe,Qe,Ut,Kt.width,Kt.height,Ht,Kt.data):X.texSubImage2D(X.TEXTURE_2D,Fe,Qe,Ut,Xe,Le,Ht,Gt,Kt);E.pixelStorei(X.UNPACK_ROW_LENGTH,Fn),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Mt),E.pixelStorei(X.UNPACK_SKIP_PIXELS,xn),E.pixelStorei(X.UNPACK_SKIP_ROWS,ii),E.pixelStorei(X.UNPACK_SKIP_IMAGES,Ai),Fe===0&&W.generateMipmaps&&X.generateMipmap(ke),E.unbindTexture()},this.initRenderTarget=function(R){re.get(R).__webglFramebuffer===void 0&&fe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?fe.setTextureCube(R,0):R.isData3DTexture?fe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?fe.setTexture2DArray(R,0):fe.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){B=0,H=0,ee=null,E.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const tu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class jr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const gR=new pu(-1,1,1,-1,0,1);class _R extends Cn{constructor(){super(),this.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new fn([0,2,0,0,2,0],2))}}const vR=new _R;class Tp{constructor(e){this._mesh=new Mn(vR,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,gR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class xR extends jr{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof yn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=rl.clone(e.uniforms),this.material=new yn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Tp(this.material)}render(e,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Rv extends jr{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,s){const l=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let h,p;this.inverse?(h=0,p=1):(h=1,p=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),c.buffers.stencil.setClear(p),c.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class SR extends jr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class MR{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const s=e.getSize(new ot);this._width=s.width,this._height=s.height,i=new ei(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xR(tu),this.copyPass.material.blending=Zi,this.timer=new _E}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),h.needsSwap){if(s){const p=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(p.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(p.EQUAL,1,4294967295)}this.swapBuffers()}Rv!==void 0&&(h instanceof Rv?s=!0:h instanceof SR&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class yR extends jr{constructor(e,i,s=null,l=null,c=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ht}render(e,i,s){const l=e.autoClear;e.autoClear=!1;let c,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),e.autoClear=l}}const ER={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ht(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class qr extends jr{constructor(e,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=e!==void 0?new ot(e.x,e.y):new ot(256,256),this.clearColor=new ht(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new ei(c,h,{type:gi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const v=new ei(c,h,{type:gi});v.texture.name="UnrealBloomPass.h"+_,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const g=new ei(c,h,{type:gi});g.texture.name="UnrealBloomPass.v"+_,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),c=Math.round(c/2),h=Math.round(h/2)}const p=ER;this.highPassUniforms=rl.clone(p.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yn({uniforms:this.highPassUniforms,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new ot(1/c,1/h),c=Math.round(c/2),h=Math.round(h/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=rl.clone(tu.uniforms),this.blendMaterial=new yn({uniforms:this.copyUniforms,vertexShader:tu.vertexShader,fragmentShader:tu.fragmentShader,premultipliedAlpha:!0,blending:Fs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ht,this._oldClearAlpha=1,this._basic=new Hs,this._fsQuad=new Tp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let s=Math.round(e/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new ot(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(e,i,s,l,c){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const h=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),c&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let p=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=p.texture,this.separableBlurMaterials[m].uniforms.direction.value=qr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=qr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this._fsQuad.render(e),p=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=h}_getSeparableBlurMaterial(e){const i=[],s=e/3;for(let l=0;l<e;l++)i.push(.39894*Math.exp(-.5*l*l/(s*s))/s);return new yn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new yn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}qr.BlurDirectionX=new ot(1,0);qr.BlurDirectionY=new ot(0,1);const Zc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class bR extends jr{constructor(){super(),this.isOutputPass=!0,this.uniforms=rl.clone(Zc.uniforms),this.material=new Zv({name:Zc.name,uniforms:this.uniforms,vertexShader:Zc.vertexShader,fragmentShader:Zc.fragmentShader}),this._fsQuad=new Tp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Rt.getTransfer(this._outputColorSpace)===Bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ap?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===sp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===rp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===lp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===cp?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===op&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Cv={lg:.95,md:.58,sm:.42};function TR(r,e,i=0){return new K((r-50)/50*10.5,-((e-42)/50)*5.2+2.4,i)}function AR(r){const e=new mR({antialias:!0,alpha:!0,powerPreference:"high-performance"});return e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),e.setClearColor(0,0),e.outputColorSpace=Gn,e.toneMapping=fu,e.toneMappingExposure=.92,r.appendChild(e.domElement),Object.assign(e.domElement.style,{width:"100%",height:"100%",display:"block"}),e}function RR(r,e,i={}){if(!r)return{api:{},dispose:()=>{}};const s=window.matchMedia("(prefers-reduced-motion: reduce)").matches,l=AR(r),c=new ky,h=new pi(38,1,.1,200),p=new K(0,.35,16.2),m=new K(0,-.2,0);h.position.copy(p);const d=new ya;c.add(d);const _=new uE,v=new Ps(80,48,32),g=new Hs({color:461590,side:In});_.load("/assets/planets/stars.jpg",Ee=>{Ee.colorSpace=Gn,g.map=Ee,g.color.set(16777215),g.needsUpdate=!0},void 0,()=>{}),d.add(new Mn(v,g));const M=new Mn(new ul(55,32),new yn({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uPointer:{value:new ot(0,0)}},vertexShader:`
        varying vec2 vUv;
        void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }
      `,fragmentShader:`
        uniform float uTime; uniform vec2 uPointer; varying vec2 vUv;
        float n(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
        void main(){
          vec2 uv = vUv + uPointer*0.02;
          float d = distance(uv, vec2(0.52, 0.36));
          float a = smoothstep(0.75, 0.08, d) * 0.42;
          float dust = smoothstep(0.35, 0.85, n(uv*18.0 + uTime*0.01));
          vec3 c = mix(vec3(0.03,0.06,0.12), vec3(0.1,0.07,0.18), 0.4+0.15*sin(uTime*0.07));
          c += vec3(0.05,0.08,0.14) * dust * 0.35;
          gl_FragColor = vec4(c, a);
        }
      `}));M.position.z=-40,d.add(M);const b=s?600:2200,A=new Float32Array(b*3);for(let Ee=0;Ee<b;Ee++)A[Ee*3]=(Math.random()-.5)*70,A[Ee*3+1]=(Math.random()-.5)*40,A[Ee*3+2]=-8-Math.random()*50;const y=new Cn;y.setAttribute("position",new Ii(A,3));const S=new $y(y,new Xv({color:15266047,size:.035,transparent:!0,opacity:.75,depthWrite:!1,sizeAttenuation:!0}));d.add(S);const O=new ya;O.position.set(0,.4,-1.5),[3.2,5.4,7.8].forEach((Ee,He)=>{const Pe=[];for(let ct=0;ct<=180;ct++){if(ct%6===0||ct%6===1)continue;const st=ct/180*Math.PI*2;Pe.push(new K(Math.cos(st)*Ee,Math.sin(st)*Ee*.55,0))}O.add(new W_(new Cn().setFromPoints(Pe),new Qd({color:11060456,transparent:!0,opacity:.09+He*.025})))}),d.add(O);const I=new ya;I.position.set(0,-16.2,-1.5);const w=new Ps(16.5,96,64),F=new Kv({color:8952234,roughness:.78,metalness:.08});_.load("/assets/planets/earth.jpg",Ee=>{Ee.colorSpace=Gn,F.map=Ee,F.needsUpdate=!0}),_.load("/assets/planets/earth_normal.jpg",Ee=>{F.normalMap=Ee,F.normalScale.set(.6,.6),F.needsUpdate=!0}),_.load("/assets/planets/earth_specular.jpg",Ee=>{F.roughnessMap=Ee,F.needsUpdate=!0});const N=new Mn(w,F);N.rotation.x=.15,I.add(N);const P=new Mn(new Ps(16.85,64,48),new yn({transparent:!0,depthWrite:!1,side:In,blending:Fs,uniforms:{},vertexShader:`
        varying vec3 vNormal;
        void main(){
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        void main(){
          float f = pow(0.65 - dot(vNormal, vec3(0.0,0.2,1.0)), 2.5);
          f = clamp(f, 0.0, 1.0);
          gl_FragColor = vec4(0.45, 0.7, 1.0, f * 0.55);
        }
      `}));I.add(P);const T=new Qd({color:12113151,transparent:!0,opacity:.12});for(let Ee=-6;Ee<=6;Ee++){const He=[],Pe=Ee/7*Math.PI*.35+Math.PI*.5;for(let ct=0;ct<=64;ct++){const st=ct/64*Math.PI*2,xt=16.55;He.push(new K(xt*Math.sin(Pe)*Math.cos(st),xt*Math.cos(Pe),xt*Math.sin(Pe)*Math.sin(st)))}I.add(new W_(new Cn().setFromPoints(He),T))}d.add(I),c.add(new pE(6978202,.45));const L=new nd(16773856,1.55);L.position.set(6,8,10),c.add(L);const q=new nd(8956671,.55);q.position.set(-8,2,-4),c.add(q);const G=new hE(10522879,12,50);G.position.set(0,2,6),c.add(G);const j=new Map,pe=new ya;d.add(pe),e.forEach((Ee,He)=>{const Pe=Cv[Ee.size]||Cv.md,ct=TR(Ee.x,Ee.y,Ee.featured?.5:(He%3-1)*.2),st=new ya;st.position.copy(ct),st.userData={id:Ee.id,dest:Ee,radius:Pe,baseScale:1};const xt=new ht(Ee.glow||"#9ec9ff"),_t=new Mn(new cu(Pe*(Ee.featured?2.4:1.85),48),new Hs({color:xt,transparent:!0,opacity:Ee.featured?.22:.12,blending:Fs,depthWrite:!1}));_t.position.z=-.15,st.add(_t);const St=new aE({color:16777215,roughness:.62,metalness:.08,clearcoat:.15,clearcoatRoughness:.55,emissive:xt,emissiveIntensity:Ee.featured?.12:.04});_.load(Ee.texture,D=>{D.colorSpace=Gn,D.anisotropy=4,St.map=D,St.needsUpdate=!0});const Pt=new Mn(new Ps(Pe,64,48),St);Pt.rotation.z=-.2;const X=new nd(16774890,1.1);X.position.set(2.2,1.4,3.2),st.add(X),st.add(Pt);const It=new Mn(new Ps(Pe*1.1,32,24),new yn({transparent:!0,depthWrite:!1,side:In,blending:Fs,uniforms:{uColor:{value:xt.clone()}},vertexShader:`
          varying vec3 vNormal;
          void main(){
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
          }
        `,fragmentShader:`
          uniform vec3 uColor;
          varying vec3 vNormal;
          void main(){
            float f = pow(0.7 - dot(vNormal, vec3(0.0,0.15,1.0)), 2.6);
            f = clamp(f, 0.0, 1.0);
            gl_FragColor = vec4(uColor, f * 0.55);
          }
        `}));st.add(It);const Ct=new Mn(new yp(Pe*1.22,.012,8,64),new Hs({color:16777215,transparent:!0,opacity:.22}));if(Ct.rotation.x=Math.PI/2.2,st.add(Ct),Ee.featured){const D=new Mn(new cu(Pe*.35,3),new Hs({color:16771327,transparent:!0,opacity:.55,blending:Fs,depthWrite:!1}));D.position.z=Pe*.95,st.add(D)}pe.add(st),j.set(Ee.id,{group:st,sphere:Pt,mat:St,ring:Ct,aura:_t,dest:Ee,radius:Pe})});const ve=new MR(l);ve.addPass(new yR(c,h));const J=new qr(new ot(1,1),s?.28:.42,.55,.82);ve.addPass(J),ve.addPass(new bR);const B=new xE,H=new ot,ee=new K;let ge=0,Te=performance.now(),U={x:.5,y:.5},Y=null,he=null,Ae={x:0,y:0};const Oe=()=>{const Ee=r.clientWidth||1,He=r.clientHeight||1;h.aspect=Ee/He,h.updateProjectionMatrix(),l.setSize(Ee,He,!1),ve.setSize(Ee,He),J.setSize(Ee,He)};Oe();const ne=typeof ResizeObserver<"u"?new ResizeObserver(Oe):null;ne&&ne.observe(r);const Me=()=>{var ct;const Ee=r.clientWidth||1,He=r.clientHeight||1,Pe={};j.forEach((st,xt)=>{ee.copy(st.group.position).project(h),Pe[xt]={x:(ee.x*.5+.5)*Ee,y:(-ee.y*.5+.5)*He,visible:ee.z<1,r:st.radius}}),(ct=i.onProject)==null||ct.call(i,Pe)},ye=(Ee,He)=>{const Pe=r.getBoundingClientRect();H.x=(Ee-Pe.left)/Pe.width*2-1,H.y=-((He-Pe.top)/Pe.height)*2+1,B.setFromCamera(H,h);const ct=[...j.values()].map(xt=>xt.sphere),st=B.intersectObjects(ct,!1);if(!st.length)return null;for(const[xt,_t]of j)if(_t.sphere===st[0].object)return xt;return null},Ge=Ee=>{var Pe;if(U.x=Ee.clientX/window.innerWidth,U.y=Ee.clientY/window.innerHeight,he)return;const He=ye(Ee.clientX,Ee.clientY);He!==Y&&(Y=He,r.style.cursor=He?"pointer":"default",(Pe=i.onHover)==null||Pe.call(i,He))},it=Ee=>{var Pe;if(he)return;const He=ye(Ee.clientX,Ee.clientY);He&&((Pe=i.onSelect)==null||Pe.call(i,He))};window.addEventListener("pointermove",Ge,{passive:!0}),r.addEventListener("click",it);const Je=Ee=>Ee<.5?2*Ee*Ee:1-(-2*Ee+2)**2/2,Zt={travelTo(Ee){var ct;const He=j.get(Ee);if(!He||he)return Promise.resolve(!1);const Pe=s?700:1950;return he={dest:He.dest,start:performance.now(),duration:Pe,fromPos:h.position.clone(),toPos:He.group.position.clone().add(new K(.1,.15,2.6)),fromLook:m.clone(),toLook:He.group.position.clone(),fromFov:h.fov,toFov:26,phase:"approach"},(ct=i.onTravelStart)==null||ct.call(i,He.dest),new Promise(st=>{he.resolve=st})},resetCamera(Ee=!0){if(!Ee||s){h.position.copy(p),h.fov=38,h.updateProjectionMatrix(),h.lookAt(m),J.strength=s?.28:.42;return}he={dest:null,start:performance.now(),duration:850,fromPos:h.position.clone(),toPos:p.clone(),fromLook:new K().copy(m),toLook:m.clone(),fromFov:h.fov,toFov:38,phase:"return",resolve:null}},setSelected(Ee){j.forEach((He,Pe)=>{He.ring.material.opacity=Pe===Ee?.85:.22,He.aura.material.opacity=Pe===Ee?He.dest.featured?.32:.2:He.dest.featured?.22:.12,He.group.userData.baseScale=Pe===Ee?1.06:1})}},dt=Ee=>{var ct,st,xt;const He=Math.min(.05,(Ee-Te)/1e3);Te=Ee;const Pe=Ee*.001;if(M.material.uniforms.uTime.value=Pe,M.material.uniforms.uPointer.value.set(U.x-.5,U.y-.5),O.rotation.z=Pe*.012,N.rotation.y=Pe*.012,he||(Ae.x+=((U.x-.5)*.45-Ae.x)*.035,Ae.y+=((.5-U.y)*.25-Ae.y)*.035,h.position.x=p.x+Ae.x,h.position.y=p.y+Ae.y,h.lookAt(m.x+Ae.x*.15,m.y,0),pe.position.x=Ae.x*-.15,pe.position.y=Ae.y*-.1,I.position.x=Ae.x*.2),j.forEach((_t,St)=>{_t.sphere.rotation.y+=He*(_t.dest.featured?.22:.12);const Pt=Y===St?1.06:1,X=C_.lerp(_t.group.scale.x,_t.group.userData.baseScale*Pt,.1);_t.group.scale.setScalar(X)}),he){const _t=Math.min(1,(Ee-he.start)/he.duration),St=Je(_t);h.position.lerpVectors(he.fromPos,he.toPos,St);const Pt=new K().lerpVectors(he.fromLook,he.toLook,St);if(h.lookAt(Pt),he.fromFov!=null&&(h.fov=C_.lerp(he.fromFov,he.toFov,St),h.updateProjectionMatrix()),he.phase==="approach"){const X=Math.sin(Math.min(1,_t*1.1)*Math.PI);J.strength=.42+X*.55,_t>.4&&_t<.85&&((ct=i.onTravelPeak)==null||ct.call(i,he.dest)),_t>=1&&(J.strength=.5,(st=i.onTravelEnd)==null||st.call(i,he.dest),(xt=he.resolve)==null||xt.call(he,!0),he=null)}else _t>=1&&(J.strength=s?.28:.42,h.fov=38,h.updateProjectionMatrix(),he=null)}ve.render(),Me(),ge=requestAnimationFrame(dt)};return ge=requestAnimationFrame(dt),{api:Zt,dispose(){cancelAnimationFrame(ge),window.removeEventListener("pointermove",Ge),r.removeEventListener("click",it),ne&&ne.disconnect(),l.dispose(),ve.dispose(),l.domElement.parentNode===r&&r.removeChild(l.domElement)}}}function CR({selectedId:r,onSelect:e,onHover:i,onProject:s,onTravelStart:l,onTravelPeak:c,onTravelEnd:h,apiRef:p}){const m=Qt.useRef(null),d=Qt.useRef({});return d.current={onSelect:e,onHover:i,onProject:s,onTravelStart:l,onTravelPeak:c,onTravelEnd:h},Qt.useEffect(()=>{const _=m.current;if(!_)return;let v=()=>{};try{const g=RR(_,nu,{onSelect:M=>{var b,A;return(A=(b=d.current).onSelect)==null?void 0:A.call(b,M)},onHover:M=>{var b,A;return(A=(b=d.current).onHover)==null?void 0:A.call(b,M)},onProject:M=>{var b,A;return(A=(b=d.current).onProject)==null?void 0:A.call(b,M)},onTravelStart:M=>{var b,A;return(A=(b=d.current).onTravelStart)==null?void 0:A.call(b,M)},onTravelPeak:M=>{var b,A;return(A=(b=d.current).onTravelPeak)==null?void 0:A.call(b,M)},onTravelEnd:M=>{var b,A;return(A=(b=d.current).onTravelEnd)==null?void 0:A.call(b,M)}});v=g.dispose,p&&(p.current=g.api)}catch(g){console.error("Director 3D failed",g)}return()=>{p&&(p.current=null);try{v()}catch{}}},[p]),Qt.useEffect(()=>{var _,v;(v=(_=p==null?void 0:p.current)==null?void 0:_.setSelected)==null||v.call(_,r)},[r,p]),$.jsx("div",{ref:m,className:"director-canvas","aria-hidden":"true"})}function wR({type:r}){return r==="core"?$.jsxs("svg",{viewBox:"0 0 24 24",children:[$.jsx("circle",{cx:"12",cy:"12",r:"3.5",fill:"currentColor"}),$.jsx("circle",{cx:"12",cy:"12",r:"7.5",fill:"none",stroke:"currentColor",strokeWidth:"1.2"})]}):r==="orbit"?$.jsxs("svg",{viewBox:"0 0 24 24",children:[$.jsx("ellipse",{cx:"12",cy:"12",rx:"8",ry:"3.5",fill:"none",stroke:"currentColor",strokeWidth:"1.2"}),$.jsx("circle",{cx:"12",cy:"12",r:"2",fill:"currentColor"})]}):r==="hex"?$.jsx("svg",{viewBox:"0 0 24 24",children:$.jsx("path",{d:"M12 3l7 4v10l-7 4-7-4V7z",fill:"none",stroke:"currentColor",strokeWidth:"1.3"})}):r==="mark"?$.jsx("svg",{viewBox:"0 0 24 24",children:$.jsx("path",{d:"M12 4l6 16H6z",fill:"none",stroke:"currentColor",strokeWidth:"1.3"})}):$.jsxs("svg",{viewBox:"0 0 24 24",children:[$.jsx("path",{d:"M4 12c3-5 13-5 16 0M4 12c3 5 13 5 16 0",fill:"none",stroke:"currentColor",strokeWidth:"1.2"}),$.jsx("circle",{cx:"12",cy:"12",r:"1.8",fill:"currentColor"})]})}function DR({activeId:r,onSelect:e,onDismiss:i}){return $.jsxs("footer",{className:"director-footer",children:[$.jsx("div",{className:"director-hexes",role:"toolbar","aria-label":"Quick destinations",children:xM.map(s=>$.jsx("button",{type:"button",className:`director-hex ${r===s.id?"is-active":""}`,style:{"--hex":s.color},onClick:()=>e(s.id),"aria-label":s.label,title:s.label,children:$.jsx(wR,{type:s.icon})},s.id))}),$.jsxs("div",{className:"director-footer__links",children:[$.jsx("a",{href:On.linkedinUrl,target:"_blank",rel:"noreferrer",children:"LinkedIn"}),$.jsx("a",{href:`mailto:${On.contactEmail}`,children:"Email"}),$.jsx("a",{href:On.resumeUrl,download:On.resumeDownloadName,children:"Resume"}),$.jsx("button",{type:"button",onClick:i,children:r?"Dismiss":"Origin"})]})]})}function UR({activeId:r,onNav:e,mapMode:i}){return $.jsxs("header",{className:"director-header",children:[$.jsxs("div",{className:"director-brand",children:[$.jsx("div",{className:"director-brand__mark","aria-hidden":"true",children:$.jsxs("svg",{viewBox:"0 0 36 36",children:[$.jsx("path",{d:"M18 2L32 10.5V25.5L18 34L4 25.5V10.5Z",fill:"none",stroke:"currentColor",strokeWidth:"1.25"}),$.jsx("circle",{cx:"18",cy:"18",r:"3.2",fill:"currentColor"})]})}),$.jsxs("div",{children:[$.jsx("p",{className:"director-brand__title",children:"ZAID KHAN"}),$.jsx("p",{className:"director-brand__rank",children:"ISEN · TEXAS A&M · GPA 4.0"})]})]}),$.jsx("nav",{className:"director-nav","aria-label":"Director",children:vM.map(s=>{const l=s.active||s.destination&&s.destination===r||s.id==="map"&&i&&!r||s.id==="destinations"&&i;return s.href?$.jsx("a",{href:s.href,className:`director-nav__link ${l?"is-active":""}`,download:s.download?On.resumeDownloadName:void 0,children:s.label},s.id):$.jsx("button",{type:"button",className:`director-nav__link ${l?"is-active":""}`,onClick:()=>e(s),children:s.label},s.id)})}),$.jsxs("div",{className:"director-social",children:[$.jsx("a",{href:On.linkedinUrl,target:"_blank",rel:"noreferrer",className:"director-social__link",children:"LI"}),$.jsx("a",{href:On.githubUrl,target:"_blank",rel:"noreferrer",className:"director-social__link",children:"GH"})]})]})}function NR({dest:r,phase:e}){if(!r||!e)return null;const i=e==="peak"||e==="arrive";return $.jsxs("div",{className:`travel-overlay is-${e}`,"aria-live":"polite",children:[$.jsx("div",{className:"travel-overlay__vignette"}),$.jsx("div",{className:"travel-overlay__flash"}),$.jsxs("div",{className:"travel-overlay__copy",children:[$.jsx("p",{className:"travel-overlay__eyebrow",children:"Director · Orbit transfer"}),$.jsx("h2",{className:"travel-overlay__title",children:i?"Arriving":"Traveling to"}),$.jsx("p",{className:"travel-overlay__dest",children:r.label}),$.jsx("p",{className:"travel-overlay__sub",children:r.subtitle})]})]})}function LR(){const[r,e]=Qt.useState(null),[i,s]=Qt.useState(!1),[l,c]=Qt.useState({}),[h,p]=Qt.useState(null),[m,d]=Qt.useState(null),_=Qt.useRef(null),v=Qt.useRef(!1);Qt.useEffect(()=>{const A=requestAnimationFrame(()=>s(!0));return()=>cancelAnimationFrame(A)},[]),Qt.useEffect(()=>(document.body.style.overflow=r||m?"hidden":"",()=>{document.body.style.overflow=""}),[r,m]);const g=Qt.useCallback(A=>{if(A.external){const y=document.createElement("a");y.href=A.external,A.download&&(y.download=A.download),document.body.appendChild(y),y.click(),y.remove();return}e(A.id)},[]),M=Qt.useCallback(async A=>{var S,O;const y=typeof A=="string"?nu.find(I=>I.id===A):A;if(!(!y||v.current)&&!(!y.external&&r===y.id)){v.current=!0,e(null),p(y),d("approach");try{await((O=(S=_.current)==null?void 0:S.travelTo)==null?void 0:O.call(S,y.id))}catch{}d("arrive"),g(y),window.setTimeout(()=>{var I,w;d(null),p(null),v.current=!1,y.external&&((w=(I=_.current)==null?void 0:I.resetCamera)==null||w.call(I,!0))},380)}},[r,g]),b=Qt.useCallback(()=>{var A,y,S,O;e(null),(y=(A=_.current)==null?void 0:A.resetCamera)==null||y.call(A,!0),(O=(S=_.current)==null?void 0:S.setSelected)==null||O.call(S,null)},[]);return $.jsxs("div",{className:`director ${i?"is-booted":""} ${r?"has-panel":""} ${m?"is-traveling":""}`,children:[$.jsx("a",{className:"skip-link",href:"#director-map",children:"Skip to map"}),$.jsx(CR,{apiRef:_,selectedId:r,onSelect:M,onProject:c,onTravelStart:()=>d("approach"),onTravelPeak:()=>d("peak"),onTravelEnd:()=>d("arrive")}),$.jsx(UR,{activeId:r,onNav:A=>{A.destination?M(A.destination):b()},mapMode:!r&&!m}),$.jsxs("main",{id:"director-map",className:"director-stage","aria-label":"Director destinations",children:[$.jsx("p",{className:"director-kicker",children:"Open to SWE · applied AI · ISE · Summer & Fall 2026"}),$.jsx("div",{className:"director-nodes",children:nu.map(A=>$.jsx(EM,{dest:A,selected:r===A.id,projected:l[A.id],onSelect:M,dimmed:!!m&&(h==null?void 0:h.id)!==A.id},A.id))}),$.jsxs("div",{className:"director-cta-bar",children:[$.jsx("a",{href:On.resumeUrl,className:"btn btn-ghost",download:On.resumeDownloadName,children:"Download resume"}),$.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>M("signal"),children:"Open signal"})]})]}),$.jsx(DR,{activeId:r,onSelect:M,onDismiss:r?b:()=>M("origin")}),$.jsx(NR,{dest:h,phase:m}),r&&!m?$.jsx(UM,{activeId:r,onClose:b}):null]})}function OR(){return Qt.useEffect(()=>{try{"scrollRestoration"in history&&(history.scrollRestoration="manual")}catch{}window.scrollTo(0,0)},[]),$.jsx(LR,{})}try{"scrollRestoration"in history&&(history.scrollRestoration="manual"),window.scrollTo(0,0)}catch{}_M.createRoot(document.getElementById("root")).render($.jsx(OR,{}));
