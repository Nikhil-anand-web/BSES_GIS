/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/has","../../../../../support/elevationInfoUtils","../isSupportedGraphicUtils"],(function(e,t,r,p){"use strict";function o(e){if("graphics"!==e.layer?.type)return p.SupportedGraphicResult.GRAPHICS_LAYER_MISSING;if(null==e.geometry)return p.SupportedGraphicResult.GEOMETRY_MISSING;switch(e.geometry.type){case"polygon":case"point":case"polyline":case"mesh":break;default:return p.SupportedGraphicResult.GEOMETRY_TYPE_UNSUPPORTED}return"on-the-ground"!==r.getGraphicEffectiveElevationMode(e)&&r.hasGraphicFeatureExpressionInfo(e)?p.SupportedGraphicResult.ELEVATION_MODE_UNSUPPORTED:p.SupportedGraphicResult.SUPPORTED}e.isSupportedGraphic=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
