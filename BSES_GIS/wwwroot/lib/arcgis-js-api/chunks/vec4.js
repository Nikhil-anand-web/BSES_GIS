/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./common"],(function(t,n){"use strict";function r(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function a(t,n,r,a,e){return t[0]=n,t[1]=r,t[2]=a,t[3]=e,t}function e(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t}function u(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t}function o(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t[3]=n[3]*r[3],t}function s(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t[3]=n[3]/r[3],t}function i(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t}function c(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t}function h(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t[3]=Math.min(n[3],r[3]),t}function l(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t[3]=Math.max(n[3],r[3]),t}function M(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t}function f(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t}function d(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t}function m(t,n){const r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2],u=n[3]-t[3];return Math.sqrt(r*r+a*a+e*e+u*u)}function b(t,n){const r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2],u=n[3]-t[3];return r*r+a*a+e*e+u*u}function q(t){const n=t[0],r=t[1],a=t[2],e=t[3];return Math.sqrt(n*n+r*r+a*a+e*e)}function x(t){const n=t[0],r=t[1],a=t[2],e=t[3];return n*n+r*r+a*a+e*e}function p(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t}function g(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t}function v(t,n){const r=n[0],a=n[1],e=n[2],u=n[3];let o=r*r+a*a+e*e+u*u;return o>0&&(o=1/Math.sqrt(o),t[0]=r*o,t[1]=a*o,t[2]=e*o,t[3]=u*o),t}function y(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function A(t,n,r,a){const e=n[0],u=n[1],o=n[2],s=n[3];return t[0]=e+a*(r[0]-e),t[1]=u+a*(r[1]-u),t[2]=o+a*(r[2]-o),t[3]=s+a*(r[3]-s),t}function D(t,r){const a=n.RANDOM;let e,u,o,s,i,c;r=r||1;do{e=2*a()-1,u=2*a()-1,i=e*e+u*u}while(i>=1);do{o=2*a()-1,s=2*a()-1,c=o*o+s*s}while(c>=1);const h=Math.sqrt((1-i)/c);return t[0]=r*e,t[1]=r*u,t[2]=r*o*h,t[3]=r*s*h,t}function L(t,n,r){const a=n[0],e=n[1],u=n[2],o=n[3];return t[0]=r[0]*a+r[4]*e+r[8]*u+r[12]*o,t[1]=r[1]*a+r[5]*e+r[9]*u+r[13]*o,t[2]=r[2]*a+r[6]*e+r[10]*u+r[14]*o,t[3]=r[3]*a+r[7]*e+r[11]*u+r[15]*o,t}function _(t,n,r){const a=n[0],e=n[1],u=n[2],o=r[0],s=r[1],i=r[2],c=r[3],h=c*a+s*u-i*e,l=c*e+i*a-o*u,M=c*u+o*e-s*a,f=-o*a-s*e-i*u;return t[0]=h*c+f*-o+l*-i-M*-s,t[1]=l*c+f*-s+M*-o-h*-i,t[2]=M*c+f*-i+h*-s-l*-o,t[3]=n[3],t}function z(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function E(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function O(t,r){const a=t[0],e=t[1],u=t[2],o=t[3],s=r[0],i=r[1],c=r[2],h=r[3],l=n.getEpsilon();return Math.abs(a-s)<=l*Math.max(1,Math.abs(a),Math.abs(s))&&Math.abs(e-i)<=l*Math.max(1,Math.abs(e),Math.abs(i))&&Math.abs(u-c)<=l*Math.max(1,Math.abs(u),Math.abs(c))&&Math.abs(o-h)<=l*Math.max(1,Math.abs(o),Math.abs(h))}const j=u,w=o,Q=s,S=m,N=b,P=q,R=x,T=Object.freeze(Object.defineProperty({__proto__:null,add:e,ceil:i,copy:r,dist:S,distance:m,div:Q,divide:s,dot:y,equals:O,exactEquals:E,floor:c,inverse:g,len:P,length:q,lerp:A,max:l,min:h,mul:w,multiply:o,negate:p,normalize:v,random:D,round:M,scale:f,scaleAndAdd:d,set:a,sqrDist:N,sqrLen:R,squaredDistance:b,squaredLength:x,str:z,sub:j,subtract:u,transformMat4:L,transformQuat:_},Symbol.toStringTag,{value:"Module"}));t.add=e,t.ceil=i,t.copy=r,t.dist=S,t.distance=m,t.div=Q,t.divide=s,t.dot=y,t.equals=O,t.exactEquals=E,t.floor=c,t.inverse=g,t.len=P,t.length=q,t.lerp=A,t.max=l,t.min=h,t.mul=w,t.multiply=o,t.negate=p,t.normalize=v,t.random=D,t.round=M,t.scale=f,t.scaleAndAdd=d,t.set=a,t.sqrDist=N,t.sqrLen=R,t.squaredDistance=b,t.squaredLength=x,t.str=z,t.sub=j,t.subtract=u,t.transformMat4=L,t.transformQuat=_,t.vec4=T}));