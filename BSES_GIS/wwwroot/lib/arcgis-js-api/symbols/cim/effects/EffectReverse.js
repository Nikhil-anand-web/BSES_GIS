/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers"],(function(e,t){"use strict";let n=function(){function e(){}return e.local=function(){return null===e.instance&&(e.instance=new e),e.instance},e.prototype.execute=function(e,t,n,i,o){return new r(e,t,n)},t._createClass(e)}();n.instance=null;let r=function(){function e(e,t,n){this._inputGeometries=e,this._reverse=void 0===t.reverse||t.reverse}return e.prototype.next=function(){let e=this._inputGeometries.next();for(;e;){if(!this._reverse)return e;if("esriGeometryPolyline"===e.geometryType)return i(e.clone());e=this._inputGeometries.next()}return null},t._createClass(e)}();function i(e){for(;e.nextPath();)for(let t=0;t<e.numPoints/2;t++){e.seekInPath(t);const n=e.x,r=e.y;e.seekInPath(e.numPoints-t-1);const i=e.x,o=e.y;e.x=n,e.y=r,e.seekInPath(t),e.x=i,e.y=o}return e.reset(),e}e.EffectReverse=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
