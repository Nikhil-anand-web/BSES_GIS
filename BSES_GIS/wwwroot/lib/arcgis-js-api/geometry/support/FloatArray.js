/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../core/typedArrayUtil"],(function(r,A){"use strict";function t(r,t=!1){return r<=A.NATIVE_ARRAY_MAX_SIZE?t?new Array(r).fill(0):new Array(r):new Float32Array(r)}function a(r){return A.isArray(r)?r.length<A.NATIVE_ARRAY_MAX_SIZE?r:new Float32Array(r):r.length<A.NATIVE_ARRAY_MAX_SIZE?Array.from(r):r}function e(r){return(A.isArray(r)?r.length:r.byteLength/8)<=A.NATIVE_ARRAY_MAX_SIZE?Array.from(r):new Float32Array(r)}function n(r,A,t){return Array.isArray(r)?r.slice(A,A+t):r.subarray(A,A+t)}r.compactFloatArray=a,r.floatArrayFrom=e,r.floatSubArray=n,r.newFloatArray=t,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
