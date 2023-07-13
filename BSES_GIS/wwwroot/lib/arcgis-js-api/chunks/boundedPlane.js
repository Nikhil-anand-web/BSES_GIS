/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","../core/has","../core/Logger","../core/mathUtils","../core/ObjectStack","./mat4","./mat4f64","./vec3","./vec3f64","../geometry/support/Axis","../geometry/support/lineSegment","../geometry/support/plane","../geometry/support/ray","../geometry/support/vector","../geometry/support/vectorStacks"],(function(t,e,n,i,o,s,r,a,c,u,l,g,d,p,b,f){"use strict";const m=i.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");const P=e._createClass((function(){this.plane=d.create(),this.origin=u.create(),this.basis1=u.create(),this.basis2=u.create()}));function h(t=J){return{plane:d.create(t.plane),origin:u.clone(t.origin),basis1:u.clone(t.basis1),basis2:u.clone(t.basis2)}}function y(t,e,n){const i=tt.get();return i.origin=t,i.basis1=e,i.basis2=n,i.plane=d.wrap(0,0,0,0),A(i),i}function v(t,e=h()){return I(t.origin,t.basis1,t.basis2,e)}function S(t,e){c.copy(e.origin,t.origin),c.copy(e.basis1,t.basis1),c.copy(e.basis2,t.basis2),d.copy(e.plane,t.plane)}function I(t,e,n,i=h()){return c.copy(i.origin,t),c.copy(i.basis1,e),c.copy(i.basis2,n),A(i),Z(i,"fromValues()"),i}function A(t){d.fromVectorsAndPoint(t.basis2,t.basis1,t.origin,t.plane)}function j(t,e,n){t!==n&&v(t,n);const i=c.scale(f.sv3d.get(),z(t),e);return c.add(n.origin,n.origin,i),n.plane[3]-=e,n}function M(t,e,n){return x(e,n),j(n,k(t,t.origin),n),n}function x(t,e=h()){const n=(t[2]-t[0])/2,i=(t[3]-t[1])/2;return c.set(e.origin,t[0]+n,t[1]+i,0),c.set(e.basis1,n,0,0),c.set(e.basis2,0,i,0),d.fromValues(0,0,1,0,e.plane),e}function V(t,e,n){return!!d.intersectRay(t.plane,e,n)&&G(t,n)}function N(t,e,n){if(V(t,e,n))return n;const i=w(t,e,f.sv3d.get());return c.add(n,e.origin,c.scale(f.sv3d.get(),e.direction,c.distance(e.origin,i)/c.length(e.direction))),n}function w(t,e,n){const i=K.get();D(t,e,i,K.get());let s=Number.POSITIVE_INFINITY;for(const r of et){const a=X(t,r,Q.get()),u=f.sv3d.get();if(d.intersectLineSegment(i,a,u)){const t=c.direction(f.sv3d.get(),e.origin,u),i=Math.abs(o.acosClamped(c.dot(e.direction,t)));i<s&&(s=i,c.copy(n,u))}}return s===Number.POSITIVE_INFINITY?L(t,e,n):n}function L(t,e,n){if(V(t,e,n))return n;const i=K.get(),o=K.get();D(t,e,i,o);let s=Number.POSITIVE_INFINITY;for(const r of et){const a=X(t,r,Q.get()),u=f.sv3d.get();if(d.intersectLineSegmentClamp(i,a,u)){const t=p.distance2(e,u);if(!d.isPointInside(o,u))continue;t<s&&(s=t,c.copy(n,u))}}return T(t,e.origin)<s&&O(t,e.origin,n),n}function O(t,e,n){const i=d.projectPoint(t.plane,e,f.sv3d.get()),o=g.projectPointClamp(H(t,t.basis1),i,-1,1,f.sv3d.get()),s=g.projectPointClamp(H(t,t.basis2),i,-1,1,f.sv3d.get());return c.subtract(n,c.add(f.sv3d.get(),o,s),t.origin),n}function C(t,e,n){const{origin:i,basis1:o,basis2:s}=t,r=c.subtract(f.sv3d.get(),e,i),a=b.projectPointSignedLength(o,r),u=b.projectPointSignedLength(s,r),l=b.projectPointSignedLength(z(t),r);return c.set(n,a,u,l)}function T(t,e){const n=C(t,e,f.sv3d.get()),{basis1:i,basis2:o}=t,s=c.length(i),r=c.length(o),a=Math.max(Math.abs(n[0])-s,0),u=Math.max(Math.abs(n[1])-r,0),l=n[2];return a*a+u*u+l*l}function E(t,e){return Math.sqrt(T(t,e))}function _(t,e){let n=Number.NEGATIVE_INFINITY;for(const i of et){const o=X(t,i,Q.get()),s=g.distance2(o,e);s>n&&(n=s)}return Math.sqrt(n)}function q(t,e){return d.isPointInside(t.plane,e)&&G(t,e)}function R(t,e,n,i){return W(t,n,i)}function k(t,e){const n=-t.plane[3];return b.projectPointSignedLength(z(t),e)-n}function B(t,e,n,i){const o=k(t,e),s=c.scale($,z(t),n-o);return c.add(i,e,s),i}function U(t,e){return c.exactEquals(t.basis1,e.basis1)&&c.exactEquals(t.basis2,e.basis2)&&c.exactEquals(t.origin,e.origin)}function F(t,e,n){return t!==n&&v(t,n),r.invert(nt,e),r.transpose(nt,nt),c.transformMat4(n.basis1,t.basis1,nt),c.transformMat4(n.basis2,t.basis2,nt),c.transformMat4(d.normal(n.plane),d.normal(t.plane),nt),c.transformMat4(n.origin,t.origin,e),d.setOffsetFromPoint(n.plane,n.plane,n.origin),n}function Y(t,e,n,i){return t!==i&&v(t,i),r.fromRotation(it,e,n),c.transformMat4(i.basis1,t.basis1,it),c.transformMat4(i.basis2,t.basis2,it),A(i),i}function z(t){return d.normal(t.plane)}function W(t,e,n){switch(e){case l.Axis.X:c.copy(n,t.basis1),c.normalize(n,n);break;case l.Axis.Y:c.copy(n,t.basis2),c.normalize(n,n);break;case l.Axis.Z:c.copy(n,z(t))}return n}function G(t,e){const n=c.subtract(f.sv3d.get(),e,t.origin),i=c.squaredLength(t.basis1),o=c.squaredLength(t.basis2),s=c.dot(t.basis1,n),r=c.dot(t.basis2,n);return-s-i<0&&s-i<0&&-r-o<0&&r-o<0}function H(t,e){const n=Q.get();return c.copy(n.origin,t.origin),c.copy(n.vector,e),n}function X(t,e,n){const{basis1:i,basis2:o,origin:s}=t,r=c.scale(f.sv3d.get(),i,e.origin[0]),a=c.scale(f.sv3d.get(),o,e.origin[1]);c.add(n.origin,r,a),c.add(n.origin,n.origin,s);const u=c.scale(f.sv3d.get(),i,e.direction[0]),l=c.scale(f.sv3d.get(),o,e.direction[1]);return c.scale(n.vector,c.add(u,u,l),2),n}function Z(t,e){Math.abs(c.dot(t.basis1,t.basis2)/(c.length(t.basis1)*c.length(t.basis2)))>1e-6&&m.warn(e,"Provided basis vectors are not perpendicular"),Math.abs(c.dot(t.basis1,z(t)))>1e-6&&m.warn(e,"Basis vectors and plane normal are not perpendicular"),Math.abs(-c.dot(z(t),t.origin)-t.plane[3])>1e-6&&m.warn(e,"Plane offset is not consistent with plane origin")}function D(t,e,n,i){const o=z(t);d.fromVectorsAndPoint(o,e.direction,e.origin,n),d.fromVectorsAndPoint(d.normal(n),o,e.origin,i)}const J={plane:d.create(),origin:u.fromValues(0,0,0),basis1:u.fromValues(1,0,0),basis2:u.fromValues(0,1,0)},K=new s.ObjectStack(d.create),Q=new s.ObjectStack(g.create),$=u.create(),tt=new s.ObjectStack((()=>h())),et=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],nt=a.create(),it=a.create(),ot=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:P,UP:J,altitudeAt:k,axisAt:R,closestPoint:L,closestPointOnSilhouette:w,copy:v,copyWithoutVerify:S,create:h,distance:E,distance2:T,distanceToSilhouette:_,elevate:j,equals:U,extrusionContainsPoint:q,fromAABoundingRect:x,fromValues:I,intersectRay:V,intersectRayClosestSilhouette:N,normal:z,projectPoint:O,projectPointLocal:C,rotate:Y,setAltitudeAt:B,setExtent:M,transform:F,updateUnboundedPlane:A,wrap:y},Symbol.toStringTag,{value:"Module"}));t.BoundedPlaneClass=P,t.UP=J,t.altitudeAt=k,t.axisAt=R,t.boundedPlane=ot,t.closestPoint=L,t.closestPointOnSilhouette=w,t.copy=v,t.copyWithoutVerify=S,t.create=h,t.distance=E,t.distance2=T,t.distanceToSilhouette=_,t.elevate=j,t.equals=U,t.extrusionContainsPoint=q,t.fromAABoundingRect=x,t.fromValues=I,t.intersectRay=V,t.intersectRayClosestSilhouette=N,t.normal=z,t.projectPoint=O,t.projectPointLocal=C,t.rotate=Y,t.setAltitudeAt=B,t.setExtent=M,t.transform=F,t.updateUnboundedPlane=A,t.wrap=y}));