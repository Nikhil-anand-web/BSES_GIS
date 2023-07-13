/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../core/typedArrayUtil"],(function(r,e){"use strict";function t(r,t=!1){return r<=e.NATIVE_ARRAY_MAX_SIZE?t?new Array(r).fill(0):new Array(r):new Float64Array(r)}function n(r){return(e.isArray(r)?r.length:r.byteLength/8)<=e.NATIVE_ARRAY_MAX_SIZE?Array.from(r):new Float64Array(r)}function o(r,e,t){return Array.isArray(r)?r.slice(e,e+t):r.subarray(e,e+t)}function a(r,e){for(let t=0;t<e.length;++t)r[t]=e[t];return r}function A(r){return Array.isArray(r)?new Float64Array(r):r}r.copyInto=a,r.doubleArrayFrom=n,r.doubleSubArray=o,r.newDoubleArray=t,r.toFloat64Array=A,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
