/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../IntersectorInterfaces","../IntersectorTarget","../intersectorUtils"],(function(e,t,r,n,i){"use strict";let s=function(e){function r(t,r,n,i,s,o){var c;return(c=e.call(this,t,r)||this).layerUid=t,c.graphicUid=r,c.geometryId=n,c.triangleNr=i,c.baseBoundingSphere=s,c.numLodLevels=o,c}return t._inherits(r,e),t._createClass(r)}(n.Graphic3DTarget);function o(e){return i.isValidIntersectorResult(e)&&e.intersector===r.IntersectorType.LOD&&!!e.target}e.LodTarget=s,e.isLodIntersectorResult=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
