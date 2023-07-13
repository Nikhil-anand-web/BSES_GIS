/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/mat3f64","../../../../../chunks/vec3f64","../../core/shaderLibrary/attributes/VertexPosition.glsl"],(function(e,r,t,a,s){"use strict";let n=function(e){function a(r,a){var s;return(s=e.call(this)||this).distanceFalloffFactor=r,s.transparency=a,s.transformNormalViewFromGlobal=t.create(),s}return r._inherits(a,e),r._createClass(a)}(s.VertexPositionPassParameters),o=function(e){function s(){var r;return(r=e.apply(this,arguments)||this).transformNormalViewFromGlobal=t.create(),r.slicePlaneLocalOrigin=a.create(),r.transformNormalGlobalFromModel=t.create(),r}return r._inherits(s,e),r._createClass(s)}(s.VertexPositionDrawParameters);e.EdgeDrawParameters=o,e.EdgePassParameters=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
