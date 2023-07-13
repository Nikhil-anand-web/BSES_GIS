/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers"],(function(e,t){"use strict";let i=function(){function e(e,t){this._worldSpaceRadius=e,this._minScreenSpaceRadii=t}return e.prototype.selectLevel=function(e,t,i){const n=i.computeScreenPixelSizeAt(e),c=this._worldSpaceRadius*t/n;let r=0;for(let l=1;l<this._minScreenSpaceRadii.length;++l)c>=this._minScreenSpaceRadii[l]&&(r=l);return r},t._createClass(e)}();e.LevelSelector=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
