/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../webgl-engine/lib/IntersectorInterfaces","../webgl-engine/lib/IntersectorTarget","../webgl-engine/lib/intersectorUtils"],(function(e,t,r,n,i){"use strict";function s(e){return i.isValidIntersectorResult(e)&&e.intersector===r.IntersectorType.TERRAIN&&!!e.target}let l=function(e){function r(t,r,n){var i;return(i=e.call(this,t,r)||this).triangleNr=n,i}return t._inherits(r,e),t._createClass(r)}(n.Graphic3DTarget);function c(e){return i.isValidIntersectorResult(e)&&e.intersector===r.IntersectorType.OVERLAY&&!!e.target}e.OverlayTarget=l,e.isOverlayIntersectorResult=c,e.isTerrainIntersectorResult=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
