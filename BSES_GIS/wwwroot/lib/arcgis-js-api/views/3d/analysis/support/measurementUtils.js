/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/geometryEngine","../../../../geometry/Polygon","../../../../geometry/projection","../../../../geometry/SpatialReference","../../../../geometry/support/geodesicUtils","../../support/mathUtils"],(function(e,t,n,o,r,i,c,s,a){"use strict";function l(e,n){const o=n.center;t.set(o,0,0,0);for(let i=0;i<e.length;++i)t.add(o,o,e[i]);t.scale(o,o,1/e.length);let r=0;for(let i=0;i<e.length;++i)r=Math.max(r,t.squaredDistance(o,e[i]));n.radius=Math.sqrt(r)}function u(e,t){if(e.length<3)throw new Error("need at least 3 points to fit a plane");a.planeFromPoints(e[0],e[1],e[2],t)}function f(e,n){return t.dot(e,n)+e[3]}function p(e,n,o){return i.projectPointToVector(e,P,o)&&i.projectPointToVector(n,S,o)?t.distance(P,S):0}function g(e,t){if(!i.projectPointToWGS84ComparableLonLat(e,P)||!i.projectPointToWGS84ComparableLonLat(t,S))return 0;const n=new s.InverseGeodeticSolverResult;return s.inverseGeodeticSolver(n,[P[0],P[1]],[S[0],S[1]]),n.distance}function d(e,t,n){const o=new s.InverseGeodeticSolverResult;return s.inverseGeodeticSolver(o,[e[0],e[1]],[t[0],t[1]],n),o.distance}function m(e,t,n,r){const c=L;return i.projectVectorToWGS84ComparableLonLat(e,r,P)&&i.projectVectorToWGS84ComparableLonLat(t,r,S)&&i.projectVectorToWGS84ComparableLonLat(n,r,G)?(c.setPoint(0,0,P),c.setPoint(0,1,S),c.setPoint(0,2,G),Math.abs(o.geodesicArea(c,"square-meters"))):0}function h(e,n=null,o=!0){const r=1e-6,i=(e,n)=>{if(0===n[0]&&0===n[1]&&0===n[2])return!1;for(let o=0;o<e.length;++o)if(t.dot(n,e[o])<-r)return!1;return!0};if(0===e.length)return!1;if(1===e.length)return n&&t.copy(n,e[0]),!0;t.set(b,0,0,0);for(let c=0;c<e.length;++c)t.add(b,b,e[c]);if(t.normalize(b,b),i(e,b))return n&&t.copy(n,b),!0;if(!o)return!1;for(let c=0;c<e.length;++c)for(let o=0;o<e.length;++o)if(c!==o&&(t.cross(b,e[c],e[o]),t.normalize(b,b),i(e,b)))return n&&t.copy(n,b),!0;return!1}function y(e){return"mouse"!==e.pointerType||0===e.button}const P=n.create(),S=n.create(),G=n.create(),L=new r({rings:[[P,S,G]],spatialReference:c.WGS84}),b=n.create();e.bestFitPlane=u,e.boundingSphere=l,e.fitHemisphere=h,e.isPrimaryPointerAction=y,e.planePointDistance=f,e.segmentLengthEuclidean=p,e.segmentLengthGeodesic=g,e.segmentLengthGeodesicVector=d,e.triangleAreaGeodesic=m,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));