/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./TerrainConst"],(function(t,n,s){"use strict";let o=function(){function t(){this.sinLonLUT=new Array(s.MAX_PATCH_TESSELATION+1),this.cosLonLUT=new Array(s.MAX_PATCH_TESSELATION+1),this.sinLatLUT=new Array(s.MAX_PATCH_TESSELATION+1),this.cosLatLUT=new Array(s.MAX_PATCH_TESSELATION+1)}return t.prototype.update=function(t,n,s){const o=n[0],e=n[2];for(let i=0;i<=t;i++){const n=i/t,r=o*(1-n)+e*n;this.sinLonLUT[i]=Math.sin(r),this.cosLonLUT[i]=Math.cos(r);const T=s(n);this.sinLatLUT[i]=Math.sin(T),this.cosLatLUT[i]=Math.cos(T)}},n._createClass(t)}();t.PatchGeometryLUT=o,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
