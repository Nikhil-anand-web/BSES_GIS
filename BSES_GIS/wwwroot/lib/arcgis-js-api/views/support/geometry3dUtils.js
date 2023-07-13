/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../core/mathUtils","../../chunks/vec2","../../chunks/vec2f64","../../chunks/vec3","../../chunks/vec3f64","./geometry2dUtils"],(function(e,t,n,r,c,s,i){"use strict";function a({start:t,end:c,type:s},i,a){const o=[],u=n.subtract(g,c,t),d=n.subtract(k,t,i),l=n.squaredLength(u),p=2*n.dot(u,d),L=p*p-4*l*(n.squaredLength(d)-a*a);if(0===L){const c=-p/(2*l);(s===e.VerticalPlaneType.PLANE||c>=0)&&o.push(n.scaleAndAdd(r.create(),t,u,c))}else if(L>0){const c=Math.sqrt(L),i=(-p+c)/(2*l);(s===e.VerticalPlaneType.PLANE||i>=0)&&o.push(n.scaleAndAdd(r.create(),t,u,i));const a=(-p-c)/(2*l);(s===e.VerticalPlaneType.PLANE||a>=0)&&o.push(n.scaleAndAdd(r.create(),t,u,a))}return o}function o(t,r){const a=t.start,o=t.end,u=n.subtract(g,o,a),d=c.set(k,-u[1],u[0],0),l=r.start,p=r.end,L=c.sub(v,p,l),A=c.dot(L,d),y=c.set(I,a[0],a[1],0),f=c.sub(R,y,l),P=c.dot(f,d);if(Math.abs(A)<q)return Math.abs(P),[];const T=P/A,b=c.scaleAndAdd(Y,l,L,T);if(r.type===i.LineType.RAY){const e=c.sub(M,b,l);if(c.dot(e,L)<-q)return[]}if(t.type===e.VerticalPlaneType.HALF_PLANE){const e=n.sub(M,b,a);if(n.dot(e,u)<-q)return[]}return[s.clone(b)]}function u(e,t){return b(E(j,t[2],e),t)}function d(e,t){const n=0,c=T(E(j,n,e),E(m,n,t)),s=[];for(const i of c)s.push(r.clone(i));return s}function l(e,t){return y(e,E(j,e[2],t))}function p(e,t){return f(E(j,e[2],t),e)}function L(e,t,r){const c=n.subtract(g,e,t),i=r/n.length(c),a=n.scaleAndAdd(s.create(),t,c,i);return a[2]=e[2],a}function A(e,t,r){return n.distance(e,t)-r}function y(e,{start:t,end:n,type:r}){const a=c.sub(g,e,t),o=c.sub(k,n,t),u=c.dot(a,o)/c.dot(o,o);return c.scaleAndAdd(s.create(),t,o,r===i.LineType.RAY?Math.max(u,0):u)}function f({start:e,end:t,type:n},r){const s=c.sub(g,r,e),a=c.sub(k,t,e);if(n===i.LineType.RAY&&c.dot(a,s)<-q)return c.distance(e,r);const o=c.cross(v,a,s);return c.len(o)/c.len(a)}function P({start:e,end:t,type:r},a,o){const u=[],d=c.subtract(g,t,e),l=n.subtract(k,e,a),p=n.squaredLength(d),L=2*n.dot(d,l),A=L*L-4*p*(n.squaredLength(l)-o*o);if(0===A){const t=-L/(2*p);(r===i.LineType.LINE||t>=0)&&u.push(c.scaleAndAdd(s.create(),e,d,t))}else if(A>0){const t=Math.sqrt(A),n=(-L+t)/(2*p);(r===i.LineType.LINE||n>=0)&&u.push(c.scaleAndAdd(s.create(),e,d,n));const a=(-L-t)/(2*p);(r===i.LineType.LINE||a>=0)&&u.push(c.scaleAndAdd(s.create(),e,d,a))}return u}function T(e,n){const r=e.start,a=e.end,o=n.start,u=n.end,d=c.sub(g,a,r),l=c.sub(k,u,o),p=c.sub(v,o,r),L=c.cross(I,d,l),A=c.dot(p,L);if(!t.floatEqualAbsolute(A,0,q))return[];const y=c.sqrLen(L);if(t.floatEqualAbsolute(y,0,q))return[];const f=c.cross(R,p,l),P=c.dot(f,L)/y,T=c.scaleAndAdd(Y,r,d,P);if(e.type===i.LineType.RAY){const e=c.sub(M,T,r);if(c.dot(d,e)<-q)return[]}if(n.type===i.LineType.RAY){const e=c.sub(M,T,o);if(c.dot(l,e)<-q)return[]}return[s.clone(T)]}function b({start:e,end:t,type:n},r){const a=c.sub(g,r,e),o=c.sub(k,t,e),u=c.cross(v,o,a);if(c.sqrLen(u)/c.sqrLen(o)<q)switch(n){case i.LineType.LINE:return[s.clone(r)];case i.LineType.RAY:return c.dot(o,a)<-q?[]:[s.clone(r)]}return[]}function h(e,r,c){return t.floatEqualAbsolute(n.squaredDistance(c,e),r*r,q)?[s.clone(c)]:[]}function E(e,t,{start:n,end:r,type:s}){return c.set(e.start,n[0],n[1],t),c.set(e.end,r[0],r[1],t),e.type=N[s],e}var V;e.VerticalPlaneType=void 0,(V=e.VerticalPlaneType||(e.VerticalPlaneType={}))[V.PLANE=0]="PLANE",V[V.HALF_PLANE=1]="HALF_PLANE";const N={[e.VerticalPlaneType.PLANE]:i.LineType.LINE,[e.VerticalPlaneType.HALF_PLANE]:i.LineType.RAY},q=1e-6,g=s.create(),k=s.create(),v=s.create(),I=s.create(),R=s.create(),Y=s.create(),M=s.create(),j={start:s.create(),end:s.create(),type:i.LineType.LINE},m={start:s.create(),end:s.create(),type:i.LineType.LINE};Object.defineProperty(e,"LineType",{enumerable:!0,get:()=>i.LineType}),e.epsilon=q,e.intersectLineAndPoint=b,e.intersectLineLike=T,e.intersectLineLikeAndVerticalCylinder=P,e.intersectVerticalCylinderAndPoint=h,e.intersectVerticalPlane=d,e.intersectVerticalPlaneAndLineLike=o,e.intersectVerticalPlaneAndPoint=u,e.intersectVerticalPlaneAndVerticalCylinder=a,e.pointToLineLikeDistance=f,e.pointToVerticalCylinderDistance=A,e.pointToVerticalPlaneDistance=p,e.projectPointToLineLike=y,e.projectPointToVerticalCylinder=L,e.projectPointToVerticalPlane=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));