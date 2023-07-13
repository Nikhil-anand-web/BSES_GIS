/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../core/arrayUtils","../../../core/typedArrayUtil","../../../chunks/quat","../../../chunks/quatf32","../../../chunks/vec3","../../../chunks/vec3f32","../../../geometry/projection","../../../geometry/SpatialReference","./i3s/PointCloudWorkerUtil"],(function(t,e,r,a,n,u,o,i,f,s){"use strict";let l=function(){function n(){}var l=n.prototype;return l.transform=function(t){const e=this._transform(t),a=[e.points.buffer,e.rgb.buffer];null!=e.pointIdFilterMap&&a.push(e.pointIdFilterMap.buffer);for(const n of e.attributes)"buffer"in n.values&&r.isArrayBuffer(n.values.buffer)&&n.values.buffer!==e.rgb.buffer&&a.push(n.values.buffer);return Promise.resolve({result:e,transferList:a})},l._transform=function(t){const r=s.readGeometry(t.schema,t.geometryBuffer);let a=r.length/3,n=null;const u=new Array,o=s.getAttributeValues(t.primaryAttributeData,r,a);null!=t.primaryAttributeData&&o&&u.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:o});const i=s.getAttributeValues(t.modulationAttributeData,r,a);null!=t.modulationAttributeData&&i&&u.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:i});let l=s.evaluateRenderer(t.rendererInfo,o,i,a);if(t.filterInfo&&t.filterInfo.length>0&&null!=t.filterAttributesData){const o=t.filterAttributesData.filter(e.isSome).map((t=>{const e=s.getAttributeValues(t,r,a),n={attributeInfo:t.attributeInfo,values:e};return u.push(n),n}));n=new Uint32Array(a),a=s.filterInPlace(r,l,n,t.filterInfo,o)}for(const e of t.userAttributesData){const t=s.getAttributeValues(e,r,a);u.push({attributeInfo:e.attributeInfo,values:t})}3*a<l.length&&(l=new Uint8Array(l.buffer.slice(0,3*a))),this._applyElevationOffsetInPlace(r,a,t.elevationOffset);const c=this._transformCoordinates(r,a,t.obb,f.fromJSON(t.inSR),f.fromJSON(t.outSR));return{obb:t.obb,points:c,rgb:l,attributes:u,pointIdFilterMap:n}},l._transformCoordinates=function(t,e,r,n,f){if(!i.projectBuffer(t,n,0,t,f,0,e))throw new Error("Can't reproject");const s=o.fromValues(r.center[0],r.center[1],r.center[2]),l=o.create(),b=o.create();a.conjugate(c,r.quaternion);const h=new Float32Array(3*e);for(let a=0;a<e;a++)l[0]=t[3*a]-s[0],l[1]=t[3*a+1]-s[1],l[2]=t[3*a+2]-s[2],u.transformQuat(b,l,c),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(b[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(b[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(b[2])),h[3*a]=l[0],h[3*a+1]=l[1],h[3*a+2]=l[2];return h},l._applyElevationOffsetInPlace=function(t,e,r){if(0!==r)for(let a=0;a<e;a++)t[3*a+2]+=r},t._createClass(n)}();const c=n.create();function b(){return new l}return b}));