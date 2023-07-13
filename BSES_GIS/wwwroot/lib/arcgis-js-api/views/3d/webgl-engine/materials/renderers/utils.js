/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/vec3f64","../../../../webgl/doublePrecisionUtils"],(function(e,t,n){"use strict";function l(e,t){return null==e&&(e=[]),e.push(t),e}function o(e,t){if(null==e)return null;const n=e.filter((e=>e!==t));return 0===n.length?null:n}function r(e,t,l,o,r){u[0]=e.get(t,0),u[1]=e.get(t,1),u[2]=e.get(t,2),n.encodeDoubleArray(u,c,3),l.set(r,0,c[0]),o.set(r,0,c[1]),l.set(r,1,c[2]),o.set(r,1,c[3]),l.set(r,2,c[4]),o.set(r,2,c[5])}const u=t.create(),c=new Float32Array(6);e.addObject3DStateID=l,e.encodeDoubleVec3=r,e.removeObject3DStateID=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
