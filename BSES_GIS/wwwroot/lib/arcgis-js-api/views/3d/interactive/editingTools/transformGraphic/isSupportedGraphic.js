/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/has","../../../../../support/elevationInfoUtils","../isSupportedGraphicUtils"],(function(e,t,r,p){"use strict";function o(e){if("graphics"!==e.layer?.type)return p.SupportedGraphicResult.GRAPHICS_LAYER_MISSING;if(null==e.geometry)return p.SupportedGraphicResult.GEOMETRY_MISSING;switch(e.geometry.type){case"point":break;case"polygon":case"polyline":case"multipoint":case"extent":case"mesh":return p.SupportedGraphicResult.SUPPORTED;default:return p.SupportedGraphicResult.GEOMETRY_TYPE_UNSUPPORTED}const t=null!=e.symbol&&"point-3d"===e.symbol.type&&e.symbol.symbolLayers;if(!(t&&t.length>0&&t.some((e=>"object"===e.type))))return p.SupportedGraphicResult.SYMBOL_TYPE_UNSUPPORTED;return"on-the-ground"!==r.getGraphicEffectiveElevationMode(e)&&r.hasGraphicFeatureExpressionInfo(e)?p.SupportedGraphicResult.ELEVATION_MODE_UNSUPPORTED:p.SupportedGraphicResult.SUPPORTED}e.isSupportedGraphic=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));