/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../Extent","./aaBoundingRect"],(function(n,t,e){"use strict";function i(n){return n}function r(n=k){return i([n[0],n[1],n[2],n[3],n[4],n[5]])}function a(n,t,e,i,a,u,m=r()){return m[0]=n,m[1]=t,m[2]=e,m[3]=i,m[4]=a,m[5]=u,m}function u(n,t=r()){return t[0]=n.xmin,t[1]=n.ymin,t[2]=n.hasZ?n.zmin:-1/0,t[3]=n.xmax,t[4]=n.ymax,t[5]=n.hasZ?n.zmax:1/0,t}function m(n,e){const i=isFinite(n[2])||isFinite(n[5]);return new t(i?{xmin:n[0],xmax:n[3],ymin:n[1],ymax:n[4],zmin:n[2],zmax:n[5],spatialReference:e}:{xmin:n[0],xmax:n[3],ymin:n[1],ymax:n[4],spatialReference:e})}function o(n,t,e=r()){return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=t[0],e[4]=t[1],e[5]=t[2],e}function f(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[2]=Math.min(n[2],t[2]),n[3]=Math.max(n[3],t[3]),n[4]=Math.max(n[4],t[4]),n[5]=Math.max(n[5],t[5])}function c(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[3]=Math.max(n[3],t[2]),n[4]=Math.max(n[4],t[3])}function h(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[2]=Math.min(n[2],t[2]),n[3]=Math.max(n[3],t[0]),n[4]=Math.max(n[4],t[1]),n[5]=Math.max(n[5],t[2])}function M(n,t,e=0,i=t.length/3){let r=n[0],a=n[1],u=n[2],m=n[3],o=n[4],f=n[5];for(let c=0;c<i;c++)r=Math.min(r,t[e+3*c]),a=Math.min(a,t[e+3*c+1]),u=Math.min(u,t[e+3*c+2]),m=Math.max(m,t[e+3*c]),o=Math.max(o,t[e+3*c+1]),f=Math.max(f,t[e+3*c+2]);n[0]=r,n[1]=a,n[2]=u,n[3]=m,n[4]=o,n[5]=f}function x(n,t,e,i){n[0]=Math.min(n[0],n[0]+t),n[3]=Math.max(n[3],n[3]+t),n[1]=Math.min(n[1],n[1]+e),n[4]=Math.max(n[4],n[4]+e),n[2]=Math.min(n[2],n[2]+i),n[5]=Math.max(n[5],n[5]+i)}function s(n,t,e){const i=t.length;let r=n[0],a=n[1],u=n[2],m=n[3],o=n[4],f=n[5];if(e)for(let c=0;c<i;c++){const n=t[c];r=Math.min(r,n[0]),a=Math.min(a,n[1]),u=Math.min(u,n[2]),m=Math.max(m,n[0]),o=Math.max(o,n[1]),f=Math.max(f,n[2])}else for(let c=0;c<i;c++){const n=t[c];r=Math.min(r,n[0]),a=Math.min(a,n[1]),m=Math.max(m,n[0]),o=Math.max(o,n[1])}n[0]=r,n[1]=a,n[2]=u,n[3]=m,n[4]=o,n[5]=f}function l(n){for(let t=0;t<6;t++)if(!isFinite(n[t]))return!1;return!0}function I(n){return n[0]>=n[3]?0:n[3]-n[0]}function N(n){return n[1]>=n[4]?0:n[4]-n[1]}function p(n){return n[2]>=n[5]?0:n[5]-n[2]}function d(n){const t=I(n),e=p(n),i=N(n);return Math.sqrt(t*t+e*e+i*i)}function g(n,t=[0,0,0]){return t[0]=n[0]+I(n)/2,t[1]=n[1]+N(n)/2,t[2]=n[2]+p(n)/2,t}function E(n,t=[0,0,0]){return t[0]=I(n),t[1]=N(n),t[2]=p(n),t}function T(n){return Math.max(I(n),p(n),N(n))}function y(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[2]>=n[2]&&t[0]<=n[3]&&t[1]<=n[4]&&t[2]<=n[5]}function F(n,t,e){return t[0]>=n[0]-e&&t[1]>=n[1]-e&&t[2]>=n[2]-e&&t[0]<=n[3]+e&&t[1]<=n[4]+e&&t[2]<=n[5]+e}function V(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[2]>=n[2]&&t[3]<=n[3]&&t[4]<=n[4]&&t[5]<=n[5]}function R(n,t){return Math.max(t[0],n[0])<=Math.min(t[3],n[3])&&Math.max(t[1],n[1])<=Math.min(t[4],n[4])&&Math.max(t[2],n[2])<=Math.min(t[5],n[5])}function A(n,t){return null==t||R(n,t)}function P(n,t,e,i,r=n){return r[0]=n[0]+t,r[1]=n[1]+e,r[2]=n[2]+i,r[3]=n[3]+t,r[4]=n[4]+e,r[5]=n[5]+i,r}function W(n,t,e=n){const i=n[0]+I(n)/2,r=n[1]+N(n)/2,a=n[2]+p(n)/2;return e[0]=i+(n[0]-i)*t,e[1]=r+(n[1]-r)*t,e[2]=a+(n[2]-a)*t,e[3]=i+(n[3]-i)*t,e[4]=r+(n[4]-r)*t,e[5]=a+(n[5]-a)*t,e}function b(n,t){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function O(n,t){return t[0]=n[3],t[1]=n[4],t[2]=n[5],t}function Y(n,t,e=n){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e!==n&&(e[3]=n[3],e[4]=n[4],e[5]=n[5]),e}function _(n,t,e=n){return e[3]=t[0],e[4]=t[1],e[5]=t[2],e!==n&&(e[0]=n[0],e[1]=n[1],e[2]=n[2]),n}function z(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function S(n){return n?z(n,D):r(D)}function B(n,t){return t||(t=e.create()),t[0]=n[0],t[1]=n[1],t[2]=n[3],t[3]=n[4],t}function w(n,t){return n[0]=t[0],n[1]=t[1],n[2]=Number.NEGATIVE_INFINITY,n[3]=t[2],n[4]=t[3],n[5]=Number.POSITIVE_INFINITY,n}function G(n,t,e,i,r){return n[0]=t,n[1]=e,n[2]=Number.NEGATIVE_INFINITY,n[3]=i,n[4]=r,n[5]=Number.POSITIVE_INFINITY,n}function Z(n){return 6===n.length}function q(n){return 0===I(n)&&0===N(n)&&0===p(n)}function j(n,t,e){if(null==n||null==t)return n===t;if(!Z(n)||!Z(t))return!1;if(e){for(let i=0;i<n.length;i++)if(!e(n[i],t[i]))return!1}else for(let i=0;i<n.length;i++)if(n[i]!==t[i])return!1;return!0}function v(n,t,e,i,r,u){return a(n,t,e,i,r,u,H)}const C=i([-1/0,-1/0,-1/0,1/0,1/0,1/0]),D=i([1/0,1/0,1/0,-1/0,-1/0,-1/0]),k=i([0,0,0,0,0,0]),H=r();n.NEGATIVE_INFINITY=D,n.POSITIVE_INFINITY=C,n.ZERO=k,n.allFinite=l,n.center=g,n.contains=V,n.containsPoint=y,n.containsPointWithMargin=F,n.create=r,n.depth=N,n.diameter=d,n.empty=S,n.equals=j,n.expandWithAABB=f,n.expandWithBuffer=M,n.expandWithNestedArray=s,n.expandWithOffset=x,n.expandWithRect=c,n.expandWithVec3=h,n.fromExtent=u,n.fromMinMax=o,n.fromRect=w,n.fromRectValues=G,n.fromValues=a,n.getMax=O,n.getMin=b,n.height=p,n.intersects=R,n.intersectsClippingArea=A,n.is=Z,n.isPoint=q,n.maximumDimension=T,n.offset=P,n.scale=W,n.set=z,n.setMax=_,n.setMin=Y,n.size=E,n.toExtent=m,n.toRect=B,n.width=I,n.wrap=v,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));