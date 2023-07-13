/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./TransparencyPassType","../../../webgl/enums","../../../webgl/renderState"],(function(e,n,t,a){"use strict";const r=a.separateBlendingParams(t.BlendFactor.SRC_ALPHA,t.BlendFactor.ONE,t.BlendFactor.ONE_MINUS_SRC_ALPHA,t.BlendFactor.ONE_MINUS_SRC_ALPHA),o=a.simpleBlendingParams(t.BlendFactor.ONE,t.BlendFactor.ONE),l=a.simpleBlendingParams(t.BlendFactor.ZERO,t.BlendFactor.ONE_MINUS_SRC_ALPHA);function s(e){return e===n.TransparencyPassType.FrontFace?null:e===n.TransparencyPassType.Alpha?l:o}function c(e){return e===n.TransparencyPassType.FrontFace?a.defaultDepthWriteParams:null}const i=5e5,p={factor:-1,units:-2};function u(e){return e?p:null}function d(e,a=t.CompareFunction.LESS){return e===n.TransparencyPassType.NONE||e===n.TransparencyPassType.FrontFace?a:t.CompareFunction.LEQUAL}e.OITPolygonOffset=p,e.OITPolygonOffsetLimit=i,e.blendingAlpha=l,e.blendingColor=o,e.blendingDefault=r,e.getOITPolygonOffset=u,e.oitBlending=s,e.oitDepthTest=d,e.oitDepthWrite=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
