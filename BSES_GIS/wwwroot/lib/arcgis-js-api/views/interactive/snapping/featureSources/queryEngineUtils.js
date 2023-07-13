/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec3f64","../SnappingPoint","../candidates/DrapedEdgeSnappingCandidate","../candidates/EdgeSnappingCandidate","../candidates/VertexSnappingCandidate"],(function(e,t,n,a,d,i){"use strict";function r({x:e,y:a,z:d}){return n.asSnappingPoint(t.fromValues(e,a,d??0))}function o(e,t){switch(e.type){case"edge":return e.draped?new a.DrapedEdgeSnappingCandidate({edgeStart:r(e.start),edgeEnd:r(e.end),targetPoint:r(e.target),objectId:e.objectId,getGroundElevation:t}):new d.EdgeSnappingCandidate({edgeStart:r(e.start),edgeEnd:r(e.end),targetPoint:r(e.target),objectId:e.objectId,isDraped:!1});case"vertex":return new i.VertexSnappingCandidate({targetPoint:r(e.target),objectId:e.objectId,isDraped:!1})}}function g(e){return null!=e&&"3d"===e.type?(t,n,a)=>e.elevationProvider.getElevation(t,n,a??0,e.spatialReference,"ground"):()=>null}e.convertSnappingCandidate=o,e.makeGetGroundElevation=g,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
