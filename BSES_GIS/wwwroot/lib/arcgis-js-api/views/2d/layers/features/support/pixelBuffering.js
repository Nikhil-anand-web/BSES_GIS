/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/screenUtils","../../../../../symbols/cim/CIMSymbolHelper","../../../../../symbols/cim/Rect","../../../engine/webgl/definitions","../../graphics/graphicsUtils","../../support/cimSymbolUtils"],(function(t,e,i,r,n,s,a){"use strict";const o={"simple-marker":1,"picture-marker":1,text:0,"simple-line":0,"simple-fill":0,"picture-fill":0,cim:1,"web-style":1},u=.707;function c(t,e){if(!("visualVariables"in t))return 0;if(!t.hasVisualVariables("size"))return 0;const i=t.getVisualVariablesForType("size");if(!i[0])return 0;const r=i[0];if(e&&"cluster_count"===r.field&&"cluster"===e.type)return e.clusterMaxSize;if("outline"===r.target)return 0;if("stops"===r.transformationType)return r.stops.map((t=>t.size)).reduce(b,0);if("clamped-linear"===r.transformationType){let t=-1/0,e=-1/0;return t="number"==typeof r.maxSize?r.maxSize:r.maxSize.stops.map((t=>t.size)).reduce(b,0),e="number"==typeof r.minSize?r.minSize:r.minSize.stops.map((t=>t.size)).reduce(b,0),Math.max(t,e)}return"real-world-size"===r.transformationType?30:void 0}function l(t){return t.type in o}async function m(t,i,r,n,s,a){if(!t||a&&"cluster"===a.type)return 0;if("heatmap"===t.type)return Math.round(e.pt2px(t.radius));if("dot-density"===t.type)return 0;if("dictionary"===t.type)return"esriGeometryPoint"===i||"esriGeometryMultipoint"===i?100:200;const o=t.getSymbols(),u=c(t),l=[];for(const e of o)l.push(M(e,u,r,i,n,s));const m=await Promise.all(l);return e.pt2px(m.reduce(b,0))}const p=[0,0,0,0];function f(t,e){return t??e}function y(t,e){return null==t.outline?e:f(t.outline.width,e)}const h={sdf:!0,code:99,metrics:n.AVERAGE_GLYPH_MOSAIC_ITEM.metrics,rect:new r(0,0,24,24),page:0,textureBinding:2};function d(t){const e=t.text&&t.text.length;if(!e)return{glyphMosaicItems:[h]};const i=[];for(let r=0;r<e;r++)i.push({...h,code:t.text.charCodeAt(r)});return{glyphMosaicItems:i}}async function x(t,e,r,n,o,c){if("simple-marker"===t.type){const i=Math.max(f(t.size,12),e);return g(t)+i*u}if("picture-marker"===t.type){const i=Math.max(f(t.height,12),e),r=f(t.width,12)*(i/f(t.height,12))/2,n=i/2;return g(t)+Math.sqrt(r*r+n*n)}if("text"===t.type){const e=d(t);s.getTextSymbolSize(p,t.toJSON(),e);const i=Math.abs(p[0]),r=Math.abs(p[1]),n=p[2],a=p[3];return Math.max(i,r)+Math.max(n,a)}if("simple-line"===t.type){const i=t,r=Math.max(f(i.width,.75),e)/2;return i.marker?Math.max(6*i.width,2*e):r}if("simple-fill"===t.type||"picture-fill"===t.type)return Math.max(y(t,0),e)/2;if("cim"===t.type){const s={geometryType:n,fields:o,spatialReference:c},u={type:"cim",rendererKey:0,data:t.data,maxVVSize:e};await a.expandSymbol(u,s,r);const l=i.CIMSymbolHelper.getEnvelope(t.data,null,r);return l?Math.sqrt(l.width*l.width+l.height*l.height):0}return"web-style"===t.type?x(await t.fetchCIMSymbol(),e,r,n,o,c):0}async function M(t,e,i,r,n,s){return l(t)?Math.min(await x(t,e,i,r,n,s),75):0}function g(t){const e=f(t.xoffset,0),i=f(t.yoffset,0);return Math.sqrt(e*e+i*i)}function b(t,e){return Math.max(t,e)}t.computePxBuffer=m,t.getPtMaxVVSize=c,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
