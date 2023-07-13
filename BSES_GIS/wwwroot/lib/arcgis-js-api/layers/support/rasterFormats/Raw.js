/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers"],(function(e){"use strict";const t=(e,t)=>{const n=t.width*t.height,a=t.pixelType;return Math.floor(e.byteLength/(n*r(a)))},r=e=>{let t=1;switch(e){case Uint8Array:case Int8Array:t=1;break;case Uint16Array:case Int16Array:t=2;break;case Uint32Array:case Int32Array:case Float32Array:t=4;break;case Float64Array:t=8}return t},n=(e,t)=>{if(8*e.byteLength<t)return null;const r=new Uint8Array(e,0,Math.ceil(t/8)),n=new Uint8Array(t);let a=0,s=0,i=0,l=0;for(i=0;i<r.length-1;i++)for(s=r[i],l=7;l>=0;l--)n[a++]=s>>l&1;for(l=7;a<t-1;)s=r[r.length-1],n[a++]=s>>l&1,l--;return n};return function(){function a(){}return a.decode=function(e,a){const s=a.pixelType,i=[],l=a.width*a.height,c=t(e,a),{bandIds:o,format:h}=a,u=o&&o.length||t(e,a),y=e.byteLength-e.byteLength%(l*r(s)),f=new s(e,0,l*c);let b,g,p,A,d=null;if("bip"===h)for(b=0;b<u;b++){for(p=new s(l),A=o?o[b]:b,g=0;g<l;g++)p[g]=f[g*c+A];i.push(p)}else if("bsq"===h)for(b=0;b<u;b++)A=o?o[b]:b,i.push(f.subarray(A*l,(A+1)*l));return y<e.byteLength-1&&(d=n(e.slice(y),l)),{pixels:i,mask:d}},e._createClass(a)}()}));
