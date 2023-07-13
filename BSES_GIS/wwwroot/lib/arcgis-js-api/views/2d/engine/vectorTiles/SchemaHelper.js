/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],(function(t,e){"use strict";let i=function(){function t(t,e,i){this._scale=t,this._shift=e,this._levelShift=i}var i=t.prototype;return i.getLevelRowColumn=function(t){const e=this.getLevelShift(t[0]),i=this._shift+e;return i?[t[0]-e,t[1]>>i,t[2]>>i]:t},i.getLevelShift=function(t){return Math.min(t,this._levelShift)},i.getOffset=function(t,e){let i=0,s=0;const n=this._shift+this.getLevelShift(t[0]);if(n){const l=(1<<n)-1,h=e/(this._scale*(1<<n-1));i=(t[2]&l)*h,s=(t[1]&l)*h}return[i,s]},i.getScale=function(t){return this._scale*(1<<this._shift+this.getLevelShift(t))},e._createClass(t)}();t.SchemaHelper=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
