/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";function e(){const t=new Float32Array(8);return t[3]=1,t}function n(t){const e=new Float32Array(8);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e}function r(t,e,n,r,o,a,c,u){const l=new Float32Array(8);return l[0]=t,l[1]=e,l[2]=n,l[3]=r,l[4]=o,l[5]=a,l[6]=c,l[7]=u,l}function o(t,e,n,r,o,a,c){const u=new Float32Array(8);u[0]=t,u[1]=e,u[2]=n,u[3]=r;const l=.5*o,i=.5*a,s=.5*c;return u[4]=l*r+i*n-s*e,u[5]=i*r+s*t-l*n,u[6]=s*r+l*e-i*t,u[7]=-l*t-i*e-s*n,u}function a(t,e){return new Float32Array(t,e,8)}const c=Object.freeze(Object.defineProperty({__proto__:null,clone:n,create:e,createView:a,fromRotationTranslationValues:o,fromValues:r},Symbol.toStringTag,{value:"Module"}));t.clone=n,t.create=e,t.createView=a,t.fromRotationTranslationValues=o,t.fromValues=r,t.quat2f32=c}));
