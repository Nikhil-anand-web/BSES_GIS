/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/Jpg","../../../chunks/Zlib"],(function(e,n,t){"use strict";return function(){function r(){}return r.decode=function(e,r=!1){const i=new Uint8Array(e),s=new n.JpegImage;s.parse(i);const{width:o,height:u,numComponents:l,eof:c}=s,a=s.getData(o,u,!0),f=o*u;let h,g=null,p=0,w=0,y=0;if(!r&&c<i.length-1)try{const e=new t.Zlib(i.subarray(c)).getBytes();g=new Uint8Array(f);let n=0;for(p=0;p<e.length;p++)for(y=7;y>=0;y--)g[n++]=e[p]>>y&1}catch{}if(1===l&&a.length===o*u){const e=new Uint8Array(a.buffer);h=[e,e,e]}else{for(h=[],p=0;p<3;p++)h.push(new Uint8Array(f));for(y=0,w=0;w<f;w++)for(p=0;p<3;p++)h[p][w]=a[y++]}return{width:o,height:u,pixels:h,mask:g}},e._createClass(r)}()}));
