/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../core/mathUtils","../../chunks/vec3","../../chunks/vec3f64","../../chunks/sphere","./vector","./vectorStacks","../../views/3d/support/mathUtils"],(function(t,n,e,r,o,c,i,u){"use strict";function s(t=R){return[t[0],t[1],t[2],t[3]]}function a(t=R[0],n=R[1],e=R[2],r=R[3]){return d(t,n,e,r,i.sv4d.get())}function f(t,n){return d(n[0],n[1],n[2],n[3],t)}function d(t,n,e,r,o=s()){return o[0]=t,o[1]=n,o[2]=e,o[3]=r,o}function I(t,n,r){return e.copy(r,t),r[3]=n,r}function l(t,n,e){const r=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],o=Math.abs(r-1)>1e-5&&r>1e-12?1/Math.sqrt(r):1;return e[0]=n[0]*o,e[1]=n[1]*o,e[2]=n[2]*o,e[3]=-(e[0]*t[0]+e[1]*t[1]+e[2]*t[2]),e}function g(t,n,e,r=s()){const o=e[0]-n[0],c=e[1]-n[1],i=e[2]-n[2],u=t[0]-n[0],a=t[1]-n[1],f=t[2]-n[2],d=c*f-i*a,I=i*u-o*f,l=o*a-c*u,g=d*d+I*I+l*l,N=Math.abs(g-1)>1e-5&&g>1e-12?1/Math.sqrt(g):1;return r[0]=d*N,r[1]=I*N,r[2]=l*N,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]),r}function N(t,n){return m(t,n,0,1,2)}function m(t,n,r,o,c){const i=t.length/3;if(i<3)return!1;e.set(p,t[3*r],t[3*r+1],t[3*r+2]);let u=o,s=!1;for(;u<i-1&&!s;){const n=3*u;e.set(h,t[n],t[n+1],t[n+2]),u++,s=!e.exactEquals(p,h)}if(!s)return!1;for(u=Math.max(u,c),s=!1;u<i&&!s;){const n=3*u;e.set(P,t[n],t[n+1],t[n+2]),u++,e.subtract(v,p,h),e.normalize(v,v),e.subtract(E,h,P),e.normalize(E,E),s=!e.exactEquals(p,P)&&!e.exactEquals(h,P)&&Math.abs(e.dot(v,E))<M}return s?(g(p,h,P,n),!0):(0!==r||1!==o||2!==c)&&m(t,n,0,1,2)}const M=.99619469809,p=r.create(),h=r.create(),P=r.create(),v=r.create(),E=r.create();function y(t,n,r){return n!==t&&f(t,n),t[3]=-e.dot(D(t),r),t}function A(t,n){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n}function F(t,n,r,o){return e.cross(P,n,t),l(r,P,o)}function b(t,n,r,o){return z(t,n,e.subtract(i.sv3d.get(),r,n),G,o)}function L(t,n,e){return null!=n&&z(t,n.origin,n.direction,H,e)}function S(t,n,e){return z(t,n.origin,n.vector,B.NONE,e)}function T(t,n,e){return z(t,n.origin,n.vector,B.CLAMP,e)}function _(t,n){return w(t,o.getCenter(n))-n[3]>=0}function O(t,n){return w(t,o.getCenter(n))+n[3]<0}function j(t,n){return w(t,n)>=0}function C(t,n){return w(t,n)<0}function q(t,n){const r=e.dot(D(t),n.ray.direction),o=-w(t,n.ray.origin);if(o<0&&r>=0)return!1;if(r>-1e-6&&r<1e-6)return o>0;if((o<0||r<0)&&!(o<0&&r<0))return!0;const c=o/r;return r>0?c<n.c1&&(n.c1=c):c>n.c0&&(n.c0=c),n.c0<=n.c1}function x(t,n){const r=e.dot(D(t),n.ray.direction),o=-w(t,n.ray.origin);if(r>-1e-6&&r<1e-6)return o>0;const c=o/r;return r>0?c<n.c1&&(n.c1=c):c>n.c0&&(n.c0=c),n.c0<=n.c1}function X(t,n,r){const o=e.scale(i.sv3d.get(),D(t),-t[3]),c=U(t,e.subtract(i.sv3d.get(),n,o),i.sv3d.get());return e.add(r,c,o),r}function k(t,n,r,o){const s=D(t),a=i.sv3d.get(),f=i.sv3d.get();u.tangentFrame(s,a,f);const d=e.subtract(i.sv3d.get(),r,n),I=c.projectPointSignedLength(a,d),l=c.projectPointSignedLength(f,d),g=c.projectPointSignedLength(s,d);return e.set(o,I,l,g)}function U(t,n,r){const o=e.scale(i.sv3d.get(),D(t),e.dot(D(t),n));return e.subtract(r,n,o),r}function V(t,n){return Math.abs(w(t,n))}function w(t,n){return e.dot(D(t),n)+t[3]}function z(t,r,o,c,i){const u=e.dot(D(t),o);if(0===u)return!1;let s=-(e.dot(D(t),r)+t[3])/u;return c&B.CLAMP&&(s=n.clamp(s,0,1)),!(!(c&B.INFINITE_MIN)&&s<0||!(c&B.INFINITE_MAX)&&s>1)&&(e.add(i,r,e.scale(i,o,s)),!0)}function D(t){return t}const R=[0,0,1,0];var B;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"}(B||(B={}));const G=B.INFINITE_MIN|B.INFINITE_MAX,H=B.INFINITE_MAX;t.UP=R,t.clip=q,t.clipInfinite=x,t.copy=f,t.create=s,t.distance=V,t.fromManyPoints=N,t.fromManyPointsSampleAt=m,t.fromNormalAndOffset=I,t.fromPoints=g,t.fromPositionAndNormal=l,t.fromValues=d,t.fromVectorsAndPoint=F,t.intersectLine=b,t.intersectLineSegment=S,t.intersectLineSegmentClamp=T,t.intersectRay=L,t.isPointInside=j,t.isPointOutside=C,t.isSphereFullyInside=_,t.isSphereFullyOutside=O,t.negate=A,t.normal=D,t.projectPoint=X,t.projectPointLocal=k,t.projectVector=U,t.setOffsetFromPoint=y,t.signedDistance=w,t.wrap=a,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
