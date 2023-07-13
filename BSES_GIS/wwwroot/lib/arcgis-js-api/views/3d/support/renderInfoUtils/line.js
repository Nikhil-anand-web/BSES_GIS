/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../geometry/projection","../../../../geometry/support/DoubleArray","../../../../geometry/support/triangulationUtils","../../layers/graphics/elevationAlignmentUtils","../../terrain/OverlayRenderer"],(function(e,o,n,t,r,i){"use strict";function l(e,o,i,l){const s="polygon"===e.type?t.CounterClockwiseMode.CCW_IS_HOLE:t.CounterClockwiseMode.NONE,p="polygon"===e.type?e.rings:e.paths,{position:a,outlines:c}=t.pathsToTriangulationInfo(p,!!e.hasZ,s),g=n.newDoubleArray(a.length),y=r.applyPerVertexElevationAlignment(a,e.spatialReference,0,g,0,a,0,a.length/3,o,i,l),f=null!=y;return{lines:f?u(c,a,g):[],projectionSuccess:f,sampledElevation:y}}function s(e,n){const r="polygon"===e.type?t.CounterClockwiseMode.CCW_IS_HOLE:t.CounterClockwiseMode.NONE,l="polygon"===e.type?e.rings:e.paths,{position:s,outlines:p}=t.pathsToTriangulationInfo(l,!1,r),a=o.projectBuffer(s,e.spatialReference,0,s,n,0,s.length/3);for(let o=2;o<s.length;o+=3)s[o]=i.DRAPED_Z;return{lines:a?u(p,s):[],projectionSuccess:a}}function u(e,o,t=null){const r=new Array;for(const{index:i,count:l}of e){if(l<=1)continue;const e=3*i,s=3*l;r.push({position:n.doubleSubArray(o,3*i,3*l),mapPositions:null!=t?n.doubleSubArray(t,e,s):void 0})}return r}e.geometryToRenderInfo=l,e.geometryToRenderInfoDraped=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
