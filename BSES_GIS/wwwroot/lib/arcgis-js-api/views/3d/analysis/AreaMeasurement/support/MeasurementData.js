/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/mathUtils","../../../../../core/quantityUtils","../../../../../chunks/vec2","../../../../../chunks/vec2f64","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../chunks/vec4f64","../../../../../geometry/ellipsoidUtils","../../../../../geometry/projection","../../../../../geometry/SpatialReference","../../../../../geometry/spatialReferenceEllipsoidUtils","../../../../../geometry/support/Axis","../../../../../geometry/support/Indices","../../../../../geometry/support/intersectsBase","../../../../../geometry/support/triangle","../../interfaces","../../support/measurementUtils","../../support/viewUtils","../../../support/ElevationProvider","../../../support/mathUtils","../../../../support/euclideanAreaMeasurementUtils"],(function(e,t,s,i,o,n,r,h,a,d,c,l,g,p,u,m,_,C,f,S,L,P,M){"use strict";let R=function(){function e(e,t){this.positionsWorldCoords=[],this.positionsRenderCoords=[],this.positionsProjectedWorldCoords=[],this.positionsFittedRenderCoords=[],this.positionsGeographic=[],this.positionsSpherical=[],this.positionsStereographic=[],this.pathSegmentLengths=[],this.geodesicPathSegmentLengths=[],this.perimeterSegmentLengths=[],this.intersectingSegments=new Set,this.geodesicIntersectingSegments=new Set,this.triangleIndices=null,this.geodesicTriangleIndices=null,this.areaCentroidWorldCoords=h.create(),this.areaCentroidRenderCoords=h.create(),this.geodesicAreaCentroidRenderCoords=h.create(),this.area=null,this.geodesicArea=null,this.pathLength=null,this.geodesicPathLength=null,this.perimeterLength=null,this._length=0,this._centroidRenderCoords=h.create(),this._planeWorldCoords=a.create(),this._worldUp=h.create(),this._worldTangent=h.create(),this._frame=[h.create(),h.create(),h.create()],this._pathVersion=-1,this._validMeasurement=!1,this._hasCursorPoint=!1,this._mode=null,this._tempU=h.create(),this._tempV=h.create(),this._tempVec3=h.create(),this._tempSphere={center:h.create(),radius:0},this._sceneView=e,this.unitNormalizer=t}var L=e.prototype;return L.update=function(e,t,s,o,n,h,a){const d=this.unitNormalizer,l=this._sceneView.renderSpatialReference,p=this.unitNormalizer.spatialReference,u=null!=t;if(this._pathVersion===e.version&&this._validMeasurement===o&&!a&&this._hasCursorPoint===u&&this._mode===h){return!e.isValidPolygon&&(this._updateCursorSegmentLength(e,t),!0)}this._pathVersion=e.version,this._validMeasurement=o,this._hasCursorPoint=u;const m=e.numVertices;this._resize(m);const _=g.getSphericalPCPF(s.spatialReference),C=c.canProjectWithoutEngine(s.spatialReference,_)&&c.canProjectToWGS84ComparableLonLat(s.spatialReference),{positionsGeographic:f,positionsWorldCoords:S,positionsRenderCoords:L,positionsSpherical:P}=this;e.forEachVertexPosition(((e,t)=>{A(s.elevationProvider,e),c.projectPointToVector(e,S[t],p),c.projectPointToVector(e,L[t],l),C&&(c.projectPointToWGS84ComparableLonLat(e,f[t]),c.projectPointToVector(e,P[t],_),r.normalize(P[t],P[t]))}));const M=this._updatePathLengths(o);if(this.pathLength=this._length>1?i.createLength(d.normalizeDistance(M),"meters"):null,C){const e=this._updateGeodesicPathLengths(o,p);this.geodesicPathLength=this._length>1?i.createLength(e,"meters"):null}else this.geodesicPathLength=null;return this._updateCursorSegmentLength(e,t),this._updateMode(e,h),o?(this._updateArea(s,d,l,p,n),C&&this._updateGeodesicArea(s),!0):(this.area=null,this.geodesicArea=null,this.perimeterLength=null,this.triangleIndices=null,this.geodesicTriangleIndices=null,this.intersectingSegments.clear(),this.geodesicIntersectingSegments.clear(),!0)},L.getData=function(){return{positionsWorldCoords:this.positionsWorldCoords,positionsRenderCoords:this.positionsRenderCoords,positionsProjectedWorldCoords:this.positionsProjectedWorldCoords,positionsFittedRenderCoords:this.positionsFittedRenderCoords,positionsGeographic:this.positionsGeographic,positionsSpherical:this.positionsSpherical,positionsStereographic:this.positionsStereographic,pathSegmentLengths:this.pathSegmentLengths,geodesicPathSegmentLengths:this.geodesicPathSegmentLengths,perimeterSegmentLengths:this.perimeterSegmentLengths,intersectingSegments:this.intersectingSegments,geodesicIntersectingSegments:this.geodesicIntersectingSegments,triangleIndices:this.triangleIndices,geodesicTriangleIndices:this.geodesicTriangleIndices,areaCentroidWorldCoords:this.areaCentroidWorldCoords,areaCentroidRenderCoords:this.areaCentroidRenderCoords,geodesicAreaCentroidRenderCoords:this.geodesicAreaCentroidRenderCoords,fittingMode:this.fittingMode,area:this.area,geodesicArea:this.geodesicArea,pathLength:this.pathLength,geodesicPathLength:this.geodesicPathLength,perimeterLength:this.perimeterLength,cursorSegmentLength:this.cursorSegmentLength,geodesicCursorSegmentLength:this.geodesicCursorSegmentLength,unitNormalizer:this.unitNormalizer,actualMeasurementMode:this.actualMeasurementMode}},L._resize=function(e){for(e<this._length&&(this.positionsWorldCoords.length=e,this.positionsRenderCoords.length=e,this.positionsProjectedWorldCoords.length=e,this.positionsFittedRenderCoords.length=e,this.positionsGeographic.length=e,this.positionsSpherical.length=e,this.positionsStereographic.length=e,this.pathSegmentLengths.length=e,this.geodesicPathSegmentLengths.length=e,this.perimeterSegmentLengths.length=e,this._length=e);this._length<e;)this.positionsWorldCoords.push(h.create()),this.positionsRenderCoords.push(h.create()),this.positionsProjectedWorldCoords.push(n.create()),this.positionsFittedRenderCoords.push(h.create()),this.positionsGeographic.push(h.create()),this.positionsSpherical.push(h.create()),this.positionsStereographic.push(n.create()),this.pathSegmentLengths.push(0),this.geodesicPathSegmentLengths.push(0),this.perimeterSegmentLengths.push(0),++this._length},L._updatePathLengths=function(e){const t=this.positionsWorldCoords,s=this.pathSegmentLengths;let i=0;for(let o=0;o<this._length;++o){const n=s[o]=r.distance(t[o],t[(o+1)%this._length]);(o<this._length-1||e)&&(i+=n)}return i},L._updateGeodesicPathLengths=function(e,t){const s=this.positionsGeographic,i=this.geodesicPathSegmentLengths;let o=0;for(let n=0;n<this._length;++n){const r=i[n]=f.segmentLengthGeodesicVector(s[n],s[(n+1)%this._length],t??void 0);(n<this._length-1||e)&&(o+=r)}return o},L._updateArea=function(e,t,s,n,h){const a=e.renderCoordsHelper,d=this.positionsWorldCoords,l=this.positionsRenderCoords,g=this.positionsProjectedWorldCoords,u=this.positionsFittedRenderCoords,m=this._planeWorldCoords,_=this._centroidRenderCoords;S.midpoint(l,_),a.worldUpAtPosition(_,this._worldUp),a.worldBasisAtPosition(_,p.Axis.X,this._worldTangent),c.projectDirection(_,this._worldUp,s,this._worldUp,n),c.projectDirection(_,this._worldTangent,s,this._worldTangent,n),d.length>2&&f.bestFitPlane(d,m),this.fittingMode=this._selectFittingMode(m,d,this._worldUp,h);let C=0;if("horizontal"===this.fittingMode){let e=-1/0;l.forEach(((t,s)=>{const i=a.getAltitude(l[s]);i>e&&(e=i,C=s)}))}const L=d[C];let M=m,R=this._worldTangent;"horizontal"===this.fittingMode?M=this._worldUp:"vertical"===this.fittingMode&&(M=this._tempVec3,R=this._worldUp,P.makeOrthonormal(m,this._worldUp,M)),r.copy(this._frame[2],M),P.makeOrthonormal(R,M,this._frame[0]),r.cross(this._frame[1],this._frame[0],this._frame[2]),r.negate(this._frame[1],this._frame[1]);const A=this._tempVec3,v=this._tempU,W=this._tempV;for(let i=0;i<this._length;++i){const e=g[i],t=u[i];r.subtract(A,d[i],L),o.set(e,r.dot(this._frame[0],A),r.dot(this._frame[1],A)),r.scale(v,this._frame[0],e[0]),r.scale(W,this._frame[1],e[1]),r.add(A,v,W),r.add(A,A,L),c.projectVectorToVector(A,n,t,s)}this.perimeterLength=this._length>0?i.createLength(t.normalizeDistance(this._updatePerimeterLengths()),"meters"):null,S.midpoint(u,this.areaCentroidRenderCoords),c.projectVectorToVector(this.areaCentroidRenderCoords,s,this.areaCentroidWorldCoords,n),this._updateIntersectingSegments(),this.area=0===this.intersectingSegments.size?i.createArea(t.normalizeArea(this._computeArea()),"square-meters"):null},L._updateGeodesicArea=function(e){const{renderCoordsHelper:t,spatialReference:s}=e,{positionsSpherical:n,positionsStereographic:h}=this,a=this._tempVec3,c=f.fitHemisphere(n,a);if(!c)return void(this.geodesicArea=null);const l=this._tempU,p=this._tempV;P.tangentFrame(a,l,p);for(let i=0;i<this._length;++i){const e=r.dot(n[i],l),t=r.dot(n[i],p),s=r.dot(n[i],a);o.set(h[i],e/s,t/s)}r.scale(a,a,d.getReferenceEllipsoid(s).radius),t.toRenderCoords(a,g.getSphericalPCPF(s),this.geodesicAreaCentroidRenderCoords),this._updateGeodesicIntersectingSegments(),this.geodesicArea=c&&0===this.geodesicIntersectingSegments.size?i.createArea(this._computeGeodesicArea(),"square-meters"):null},L._updatePerimeterLengths=function(){const e=this.positionsProjectedWorldCoords,t=this.perimeterSegmentLengths;let s=0;for(let i=0;i<this._length;++i){s+=t[i]=o.distance(e[i],e[(i+1)%this._length])}return s},L._updateIntersectingSegments=function(){const e=this.positionsProjectedWorldCoords,t=this.intersectingSegments;t.clear();for(let s=0;s<this._length;++s)for(let i=s+2;i<this._length;++i){if((i+1)%this._length===s)continue;const o=e[s],n=e[(s+1)%this._length],r=e[i],h=e[(i+1)%this._length];m.segmentIntersects(o,n,r,h)&&(t.add(s),t.add(i))}},L._computeArea=function(){const e=this.positionsProjectedWorldCoords,t=this.triangleIndices=u.compactIndices(M.triangulate(e));let s=0;for(let i=0;i<t.length;i+=3)s+=_.areaPoints2d(e[t[i]],e[t[i+1]],e[t[i+2]]);return s},L._updateGeodesicIntersectingSegments=function(){const e=this.positionsStereographic,t=this.geodesicIntersectingSegments;t.clear();for(let s=0;s<this._length;++s)for(let i=s+2;i<this._length;++i){if((i+1)%this._length===s)continue;const o=e[s],n=e[(s+1)%this._length],r=e[i],h=e[(i+1)%this._length];m.segmentIntersects(o,n,r,h)&&(t.add(s),t.add(i))}},L._computeGeodesicArea=function(){const e=this.positionsGeographic,t=this.positionsStereographic,s=this.geodesicTriangleIndices=u.compactIndices(M.triangulate(t));let i=0;for(let o=0;o<s.length;o+=3)i+=f.triangleAreaGeodesic(e[s[o]],e[s[o+1]],e[s[o+2]],l.WGS84);return i},L._selectFittingMode=function(e,t,i,o){const n=t.map((t=>Math.abs(f.planePointDistance(e,t)))).reduce(((e,t)=>Math.max(e,t)),0);f.boundingSphere(t,this._tempSphere);const h=n/(2*this._tempSphere.radius),a=h<o.maxRelativeErrorCoplanar,d=h<o.maxRelativeErrorAlmostCoplanar;let c="horizontal";if(a)c="oblique";else if(d){c=Math.abs(r.dot(i,e))>Math.cos(s.deg2rad(o.verticalAngleThreshold))?"horizontal":"vertical"}return c},L._updateCursorSegmentLength=function(e,t){const s=e.lastPoint;e.isValidPolygon||null==s||null==t?(this.geodesicCursorSegmentLength=null,this.cursorSegmentLength=null):(this.geodesicCursorSegmentLength=i.createLength(f.segmentLengthGeodesic(s,t),"meters"),this.cursorSegmentLength=i.createLength(this.unitNormalizer.normalizeDistance(f.segmentLengthEuclidean(s,t,this.unitNormalizer.spatialReference)),"meters"))},L._updateMode=function(e,t){if(t===C.MeasurementMode.Auto){this.actualMeasurementMode="euclidean";let t=0;null!=this.geodesicPathLength&&(t+=this.geodesicPathLength.value),e.isValidPolygon||null==this.geodesicCursorSegmentLength||(t+=this.geodesicCursorSegmentLength.value),t>v&&(this.actualMeasurementMode="geodesic")}else this.actualMeasurementMode=t===C.MeasurementMode.Euclidean?"euclidean":"geodesic";null==this.geodesicPathLength&&(this.actualMeasurementMode="euclidean"),this._mode=t},t._createClass(e)}();function A(e,t){t.hasZ||(t.z=L.getElevationAtPoint(e,t,"ground")??0)}const v=1e5;e.MeasurementDataManager=R,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));