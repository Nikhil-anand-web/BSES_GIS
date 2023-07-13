/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./tileRenderers/HeatmapTileRenderer","./tileRenderers/SymbolTileRenderer"],(function(e,r,n){"use strict";function t(e,t){if(!e)return null;switch(e.type){case"symbol":return new n.SymbolTileRenderer(t);case"heatmap":return new r.HeatmapTileRenderer(t)}}e.createOrReuseTileRenderer=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
