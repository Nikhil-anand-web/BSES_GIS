/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","./DepthRange"],(function(e,t,s){"use strict";let i=function(){function e(e){this._objects=e}var i=e.prototype;return i.submit=function(e,t){this._objects.preSubmit(t),this._objects.visibleObjects.forAll((s=>s.renderable.material.submit(e,t,s)))},i.queryShadowCasterDepthRange=function(e){return this._objects.visibleObjects.length?s.computeDepthRange(e,this._objects.visibleObjects):null},t._createClass(e)}();e.RenderSubmitSystem=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
