/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./debounce"],(function(t,e){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.4.2
   */function r(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}var n=Array.isArray,o=1/0,u=e.Symbol?e.Symbol.prototype:void 0,c=u?u.toString:void 0;function a(t){if("string"==typeof t)return t;if(n(t))return r(t,a)+"";if(e.isSymbol(t))return c?c.call(t):"";var u=t+"";return"0"==u&&1/t==-o?"-0":u}function i(t){return t}var f="[object AsyncFunction]",b="[object Function]",l="[object GeneratorFunction]",y="[object Proxy]";function s(t){if(!e.isObject(t))return!1;var r=e.baseGetTag(t);return r==b||r==l||r==f||r==y}var p=9007199254740991,j=/^(?:0|[1-9]\d*)$/;function v(t,e){var r=typeof t;return!!(e=e??p)&&("number"==r||"symbol"!=r&&j.test(t))&&t>-1&&t%1==0&&t<e}var d=9007199254740991;function g(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=d}function A(t){return null!=t&&g(t.length)&&!s(t)}var m=Object.prototype;function h(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||m)}function O(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var T="[object Arguments]";function w(t){return e.isObjectLike(t)&&e.baseGetTag(t)==T}var x=Object.prototype,S=x.hasOwnProperty,F=x.propertyIsEnumerable,k=w(function(){return arguments}())?w:function(t){return e.isObjectLike(t)&&S.call(t,"callee")&&!F.call(t,"callee")};function E(){return!1}var G="object"==typeof t&&t&&!t.nodeType&&t,B=G&&"object"==typeof module&&module&&!module.nodeType&&module,I=B&&B.exports===G?e.root.Buffer:void 0,L=(I?I.isBuffer:void 0)||E,P="[object Arguments]",U="[object Array]",D="[object Boolean]",R="[object Date]",$="[object Error]",q="[object Function]",M="[object Map]",N="[object Number]",C="[object Object]",V="[object RegExp]",W="[object Set]",z="[object String]",H="[object WeakMap]",J="[object ArrayBuffer]",K="[object DataView]",Q="[object Float64Array]",X="[object Int8Array]",Y="[object Int16Array]",Z="[object Int32Array]",_="[object Uint8Array]",tt="[object Uint8ClampedArray]",et="[object Uint16Array]",rt="[object Uint32Array]",nt={};function ot(t){return e.isObjectLike(t)&&g(t.length)&&!!nt[e.baseGetTag(t)]}function ut(t){return function(e){return t(e)}}nt["[object Float32Array]"]=nt[Q]=nt[X]=nt[Y]=nt[Z]=nt[_]=nt[tt]=nt[et]=nt[rt]=!0,nt[P]=nt[U]=nt[J]=nt[D]=nt[K]=nt[R]=nt[$]=nt[q]=nt[M]=nt[N]=nt[C]=nt[V]=nt[W]=nt[z]=nt[H]=!1;var ct="object"==typeof t&&t&&!t.nodeType&&t,at=ct&&"object"==typeof module&&module&&!module.nodeType&&module,it=at&&at.exports===ct&&e.freeGlobal.process,ft=function(){try{var t=at&&at.require&&at.require("util").types;return t||it&&it.binding&&it.binding("util")}catch(e){}}(),bt=ft&&ft.isTypedArray,lt=bt?ut(bt):ot,yt=Object.prototype.hasOwnProperty;function st(t,e){var r=n(t),o=!r&&k(t),u=!r&&!o&&L(t),c=!r&&!o&&!u&&lt(t),a=r||o||u||c,i=a?O(t.length,String):[],f=i.length;for(var b in t)!e&&!yt.call(t,b)||a&&("length"==b||u&&("offset"==b||"parent"==b)||c&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||v(b,f))||i.push(b);return i}function pt(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}var jt=Object.prototype.hasOwnProperty;function vt(t){if(!e.isObject(t))return pt(t);var r=h(t),n=[];for(var o in t)("constructor"!=o||!r&&jt.call(t,o))&&n.push(o);return n}function dt(t){return A(t)?st(t,!0):vt(t)}function gt(t){return null==t?"":a(t)}function At(t){return function(e,r,n){for(var o=-1,u=Object(e),c=n(e),a=c.length;a--;){var i=c[t?a:++o];if(!1===r(u[i],i,u))break}return e}}var mt=At();function ht(t){return"function"==typeof t?t:i}var Ot=/[\\^$.*+?()[\]{}|]/g,Tt=RegExp(Ot.source);function wt(t){return(t=gt(t))&&Tt.test(t)?t.replace(Ot,"\\$&"):t}function xt(t,e){return null==t?t:mt(t,ht(e),dt)}const St=(t,e)=>{const r=wt(e),n=new RegExp(r,"i");0===t.length&&console.warn("No data was passed to the filter function.\n    The data argument should be an array of objects");const o=(t,e)=>{if(t?.constant||t?.filterDisabled)return!0;let r=!1;return xt(t,(t=>{"function"!=typeof t&&null!=t&&(Array.isArray(t)||"object"==typeof t&&null!==t?o(t,e)&&(r=!0):e.test(t)&&(r=!0))})),r};return t.filter((t=>o(t,n)))};t.filter=St}));
