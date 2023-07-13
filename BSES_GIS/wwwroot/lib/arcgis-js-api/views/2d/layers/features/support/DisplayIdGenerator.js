/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../engine/webgl/DisplayId"],(function(e,t,r){"use strict";let n=function(){function e(){this._freeIds=[],this._idCounter=1}var n=e.prototype;return n.createId=function(e=!1){return r.createDisplayId(this._getFreeId(),e)},n.releaseId=function(e){this._freeIds.push(e)},n._getFreeId=function(){return this._freeIds.length?this._freeIds.pop():this._idCounter++},t._createClass(e)}();e.DisplayIdGenerator=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
