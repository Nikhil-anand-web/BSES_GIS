/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../core/unitUtils","../../../chunks/mat3f64","../../../chunks/mat4","../../../chunks/mat4f64","../../../chunks/vec3","../../../chunks/vec3f64","../../../chunks/mat3","../../projection","../../spatialReferenceEllipsoidUtils","../DoubleArray","../MeshGeoreferencedRelativeVertexSpace","../MeshGeoreferencedVertexSpace","../MeshLocalVertexSpace","../MeshTransform","../../../chunks/vec32","./geographicUtils","./projection"],(function(n,e,t,r,o,a,i,l,s,c,u,f,p,g,m,h,y,F){"use strict";function T(n,e,t){return y.isGeographicMesh(e.spatialReference,t)?x(n,e,t):v(n,e,t)}function R(n,e,t,r){const{position:a,normal:i,tangent:l}=n;if(!e.isRelative)return{position:a,normal:i,tangent:l};const s=t?.localMatrix??o.IDENTITY;return T({position:h.transformMat4(new Float64Array(a.length),a,s),normal:null!=i?F.transformNormal(i,new Float32Array(i.length),s):null,tangent:null!=l?F.transformTangent(l,new Float32Array(l.length),s):null},e.getOriginPoint(r),{geographic:!e.isGeoreferenced})}function P(n,e,t){if(t?.useTransform){const{position:r,normal:o,tangent:a}=n,{x:l,y:s,z:c}=e,u=i.fromValues(l,s,c??0);return{vertexAttributes:{position:r,normal:o,tangent:a},vertexSpace:t.geographic??1?new g({origin:u}):new f({origin:u}),transform:new m}}return{vertexAttributes:T(n,e,t),vertexSpace:new p,transform:null}}function A(n,e,t){return y.isGeographicMesh(e.spatialReference,t)?E(n,e,t):C(n,e,t)}function M(n,e,t,r,o){if(!e.isRelative)return A(n,r,o);const{spatialReference:a}=r,i=R(n,e,t,a);return r.equals(e.getOriginPoint(a))?C(i,r,o):A(i,r,o)}function w({positions:n,transform:e,vertexSpace:t,inSpatialReference:l,outSpatialReference:f,outPositions:p,local:g}){const m=t.isRelative?t.origin:i.ZEROS,y=t.isRelative?e?.localMatrix??o.IDENTITY:o.IDENTITY;if(t.isGeoreferenced){const e=p??u.newDoubleArray(n.length);if(r.equals(y,o.IDENTITY)?u.copyInto(e,n):h.transformMat4(e,n,y),!a.exactEquals(m,i.ZEROS)){const[n,t,r]=m;for(let o=0;o<e.length;o+=3)e[o]+=n,e[o+1]+=t,e[o+2]+=r}return s.projectBuffer(e,l,0,e,f,0,e.length/3),e}const F=c.getSphericalPCPF(l),T=!g&&s.canProjectWithoutEngine(l,F)?F:l;s.computeTranslationToOriginAndRotation(l,m,O,T),r.multiply(O,O,y);const R=p??u.newDoubleArray(n.length);return h.transformMat4(R,n,O),s.projectBuffer(R,T,0,R,f,0,R.length/3),R}function v(n,e,t){const r=new Float64Array(n.position.length),o=n.position,a=e.x,i=e.y,l=e.z??0,s=N(t?t.unit:null,e.spatialReference);for(let c=0;c<o.length;c+=3)r[c]=o[c]*s+a,r[c+1]=o[c+1]*s+i,r[c+2]=o[c+2]*s+l;return{position:r,normal:n.normal,tangent:n.tangent}}function x(n,e,t){const r=e.spatialReference,o=I(e,t,O),a=new Float64Array(n.position.length),i=S(n.position,o,r,a),s=l.normalFromMat4(U,o);return{position:i,normal:j(i,a,n.normal,s,r),tangent:d(i,a,n.tangent,s,r)}}function S(n,e,t,r){h.transformMat4(r,n,e);const o=new Float64Array(n.length);return F.projectFromPCPF(r,o,t)}function j(n,e,t,r,o){if(null==t)return null;const a=new Float32Array(t.length);return h.transformMat3(a,t,r),F.projectNormalFromPCPF(a,n,e,o,a),a}function d(n,e,t,r,o){if(null==t)return null;const a=new Float32Array(t.length);h.transformMat3(a,t,r,4);for(let i=3;i<a.length;i+=4)a[i]=t[i];return F.projectTangentFromPCPF(a,n,e,o,a),a}function C(n,e,t){const r=new Float64Array(n.position.length),o=n.position,a=e.x,i=e.y,l=e.z??0,s=N(t?t.unit:null,e.spatialReference);for(let c=0;c<o.length;c+=3)r[c]=(o[c]-a)/s,r[c+1]=(o[c+1]-i)/s,r[c+2]=(o[c+2]-l)/s;return{position:r,normal:n.normal,tangent:n.tangent}}function E(n,e,t){const o=e.spatialReference;I(e,t,O);const a=r.invert(G,O),i=new Float64Array(n.position.length),s=b(n.position,o,a,i),c=l.normalFromMat4(U,a);return{position:s,normal:k(n.normal,n.position,i,o,c),tangent:D(n.tangent,n.position,i,o,c)}}function I(n,e,t){s.computeTranslationToOriginAndRotation(n.spatialReference,[n.x,n.y,n.z??0],t,c.getSphericalPCPF(n.spatialReference));const o=N(e?e.unit:null,n.spatialReference);return r.scale(t,t,[o,o,o]),t}function b(n,e,t,r){const o=F.projectToPCPF(n,e,r),a=new Float64Array(o.length);return h.transformMat4(a,o,t),a}function k(n,e,t,r,o){if(null==n)return null;const a=F.projectNormalToPCPF(n,e,t,r,new Float32Array(n.length));return h.transformMat3(a,a,o),a}function D(n,e,t,r,o){if(null==n)return null;const a=F.projectTangentToPCPF(n,e,t,r,new Float32Array(n.length));return h.transformMat3(a,a,o,4),a}function N(n,t){if(null==n)return 1;const r=e.getMetersPerCartesianUnitForSR(t);return 1/e.convertUnit(r,"meters",n)}const O=o.create(),G=o.create(),U=t.create();n.georeference=T,n.georeferenceApplyTransform=R,n.georeferenceByTransform=P,n.project=w,n.ungeoreference=A,n.ungeoreferenceByTransform=M,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));