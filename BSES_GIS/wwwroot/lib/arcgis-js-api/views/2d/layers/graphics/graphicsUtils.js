/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../core/BidiText","../../../../core/screenUtils","../../../../geometry/Polygon","../../../../geometry/support/aaBoundingRect","../../../../geometry/support/spatialReferenceUtils","../../engine/webgl/alignmentUtils","../../engine/webgl/definitions","../../engine/webgl/mesh/templates/shapingUtils"],(function(e,t,n,i,r,o,a,l,s){"use strict";const c=512,g=50;function p(e,t){const n=o.getInfo(t);if(!n)return null;const[i,a]=n.valid;return e[2]>a?[r.create([e[0],e[1],a,e[3]]),r.create([i,e[1],i+e[2]-a,e[3]])]:e[0]<i?[r.create([i,e[1],e[2],e[3]]),r.create([a-(i-e[0]),e[1],a,e[3]])]:null}function u(e){return"text"===e||"esriTS"===e}function m(e){return"simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function f(e){switch(e.geometry.type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}function h(e,i,r){if(!r?.glyphMosaicItems?.length)return e;const o=t.bidiText(i.text)[1],c=r.glyphMosaicItems,g=s.shapeGlyphs(c,o,{scale:n.pt2px(i.font.size)/l.GLYPH_SIZE,angle:i.angle??0,xOffset:i.xoffset??0,yOffset:i.yoffset??0,hAlign:a.getXAnchorDirection(i.horizontalAlignment||"center"),vAlign:a.getYAnchorDirection(i.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(i.lineWidth||512,512)),lineHeight:l.MAGIC_LABEL_LINE_HEIGHT*Math.max(.25,Math.min(i.lineHeight||1,4)),decoration:i.font.decoration||"none",isCIM:!1,hasBackground:!!i.backgroundColor,borderLineSize:i.borderLineSize}).bounds;return e[0]=n.pt2px(g.x-g.halfWidth),e[1]=n.pt2px(g.y-g.halfHeight),e[2]=n.pt2px(g.width),e[3]=n.pt2px(g.height),e}function x(e){if(!e)return null;const{xmin:t,ymin:n,xmax:r,ymax:o,spatialReference:a}=e;return new i({rings:[[[t,n],[t,o],[r,o],[r,n],[t,n]]],spatialReference:a})}e.PIXEL_BUFFER=g,e.TILE_SIZE=c,e.getTextSymbolSize=h,e.graphicGeometryToNumber=f,e.intersectingInternationalDateline=p,e.isMarkerSymbol=m,e.isTextSymbol=u,e.polygonFromExtent=x,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));