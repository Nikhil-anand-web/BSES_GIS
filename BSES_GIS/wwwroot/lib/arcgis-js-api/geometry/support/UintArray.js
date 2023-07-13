/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../core/typedArrayUtil"],(function(r,n){"use strict";function e(r,e=!1){return r<=n.NATIVE_ARRAY_MAX_SIZE?e?new Array(r).fill(0):new Array(r):new Uint32Array(r)}function t(r){return(n.isArray(r)?r.length:r.byteLength/8)<=n.NATIVE_ARRAY_MAX_SIZE?Array.from(r):new Uint32Array(r)}function A(r,n,e){return Array.isArray(r)?r.slice(n,n+e):r.subarray(n,n+e)}r.newUintArray=e,r.uintArrayFrom=t,r.uintSubArray=A,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
