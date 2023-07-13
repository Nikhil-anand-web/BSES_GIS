/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/mat3","../../../chunks/mat3f64","../../../chunks/mat4f64","../../../chunks/vec3","../../../chunks/vec3f64","../../projection","../../spatialReferenceEllipsoidUtils","./geographicUtils","./projection"],(function(t,e,n,r,o,i,l,a,c,s){"use strict";const u="esri.geometry.support.meshUtils.offset";function f(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const{vertexSpace:r}=t;if(r.isRelative)c.validateGeographicFlag(r,u,n),p(r,e);else{c.isGeographicMesh(t.spatialReference,n)?g(t,e):h(t,e)}}function p(t,e){const n=t.origin;t.origin=o.add(i.create(),n,e)}function g(t,n){const r=t.spatialReference,i=t.vertexAttributes.position,c=t.vertexAttributes.normal,u=t.vertexAttributes.tangent,f=new Float64Array(i.length),p=null!=c?new Float32Array(c.length):null,g=null!=u?new Float32Array(u.length):null,h=t.extent.center,x=P;l.computeTranslationToOriginAndRotation(r,[h.x,h.y,h.z],v,a.getSphericalPCPF(r)),e.fromMat4(F,v),o.transformMat3(x,n,F),s.projectToPCPF(i,r,f),null!=c&&null!=p&&s.projectNormalToPCPF(c,i,f,r,p),null!=u&&null!=g&&s.projectTangentToPCPF(u,i,f,r,g),m(f,x),s.projectFromPCPF(f,i,r),null!=c&&null!=p&&s.projectNormalFromPCPF(p,i,f,r,c),null!=u&&null!=g&&s.projectTangentFromPCPF(g,i,f,r,u),t.vertexAttributesChanged()}function h(t,e){m(t.vertexAttributes.position,e),t.vertexAttributesChanged()}function m(t,e){if(t)for(let n=0;n<t.length;n+=3)for(let r=0;r<3;r++)t[n+r]+=e[r]}const P=i.create(),v=r.create(),F=n.create();t.offset=f,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
