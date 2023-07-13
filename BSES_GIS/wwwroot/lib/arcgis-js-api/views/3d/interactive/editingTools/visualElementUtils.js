/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./lineGraphicVisualElementUtils","./originGraphicVisualElementUtils"],(function(e,t,i){"use strict";function l(e){switch(e.graphic.geometry.type){case"point":case"mesh":return i.createVisualElements(e);case"polygon":case"polyline":return t.createVisualElements(e);default:return null}}e.createVisualElements=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
