/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../arcade/functions/centroid","../../../core/unitUtils","../../../chunks/vec3","../../../chunks/vec3f64"],(function(e,t,n,r,o){"use strict";function s(e,t,n){switch(e){case"point":case"multipoint":return"point";case"polyline":return(null!=t&&"polyline"===t.type&&t.paths.length?t.paths[0].length:0)<2?"polylineZeroVertices":"polylineOneVertex";case"polygon":{const e=null!=t&&"polygon"===t.type&&t.rings.length?t.rings[0].length:0;return e<3?"polylineZeroVertices":e<4?"polygonOneVertex":"polygonTwoVertices"}case"mesh":return i(t,n);default:return}}function i(e,o){if("mesh"!==e?.type||"3d"!==o?.type)return;const{renderCoordsHelper:s}=o,{camera:i}=o.state,{width:p,height:u,zmin:h,zmax:g,center:y,spatialReference:d}=e.extent,m=(g??0)-(h??0),f=n.getMetersPerUnitForSR(d),x=t.getMetersPerVerticalUnitForSR(d),S=n.getMetersPerUnitForSR(s.spatialReference),M=Math.max(p*f,u*f,m*x)/S;r.set(a,y.x,y.y,y.z??0),s.toRenderCoords(a,d,a);const R=M/i.computeScreenPixelSizeAt(a);return R>i.width*c?"meshTooClose":R<l?"meshTooFar":"mesh"}const l=20,c=1,a=o.create();e.getDrawHelpMessage=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
