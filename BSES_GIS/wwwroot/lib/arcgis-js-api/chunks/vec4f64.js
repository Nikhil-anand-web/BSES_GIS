/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function t(){return[0,0,0,0]}function e(n){return[n[0],n[1],n[2],n[3]]}function r(n,t,e,r){return[n,t,e,r]}function u(n){const e=t(),r=Math.min(4,n.length);for(let t=0;t<r;++t)e[t]=n[t];return e}function o(n,t){return new Float64Array(n,t,4)}function i(){return t()}function c(){return r(1,1,1,1)}function f(){return r(1,0,0,0)}function a(){return r(0,1,0,0)}function l(){return r(0,0,1,0)}function _(){return r(0,0,0,1)}const s=i(),N=c(),T=f(),I=a(),U=l(),m=_(),O=Object.freeze(Object.defineProperty({__proto__:null,ONES:N,UNIT_W:m,UNIT_X:T,UNIT_Y:I,UNIT_Z:U,ZEROS:s,clone:e,create:t,createView:o,fromArray:u,fromValues:r,ones:c,unitW:_,unitX:f,unitY:a,unitZ:l,zeros:i},Symbol.toStringTag,{value:"Module"}));n.ONES=N,n.UNIT_W=m,n.UNIT_X=T,n.UNIT_Y=I,n.UNIT_Z=U,n.ZEROS=s,n.clone=e,n.create=t,n.createView=o,n.fromArray=u,n.fromValues=r,n.ones=c,n.unitW=_,n.unitX=f,n.unitY=a,n.unitZ=l,n.vec4f64=O,n.zeros=i}));