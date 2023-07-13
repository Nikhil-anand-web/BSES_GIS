/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],(function(t,e){"use strict";let a=function(){function t(t){this._stage=t,this._materials=new Map}var a=t.prototype;return a.get=function(t){return this._materials.get(t)},a.add=function(t,e){this._materials.set(t,e),this._stage.add(e)},a.dispose=function(){this._stage.removeMany(Array.from(this._materials.values())),this._materials.clear()},e._createClass(t)}();t.MaterialCollection=a,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
