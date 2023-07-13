/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../geometry/support/boundsUtils"],(function(t,e,n){"use strict";let r=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,e,n,r,c){return new o(t,e,n)},e._createClass(t)}();r.instance=null;let o=function(){function t(t,e,n){this._inputGeometries=t,this._xFactor=void 0!==e.XScaleFactor?e.XScaleFactor:1.15,this._yFactor=void 0!==e.YScaleFactor?e.YScaleFactor:1.15}var r=t.prototype;return r.next=function(){const t=this._inputGeometries.next();if(t){if(1===this._xFactor&&1===this._yFactor)return t;if("esriGeometryPoint"===t.geometryType)return t;if(t.numPaths>0){const e=n.getCursorBoundsXY(t),r=(e[2]+e[0])/2,o=(e[3]+e[1])/2;return t.reset(),this._scaleCursor(t.clone(),r,o)}}return null},r._scaleCursor=function(t,e,n){for(;t.nextPath();)for(;t.nextPoint();)t.x=e+(t.x-e)*this._xFactor,t.y=n+(t.y-n)*this._yFactor;return t.reset(),t},e._createClass(t)}();t.EffectScale=r,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
