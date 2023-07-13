/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/vec3","../../../chunks/vec3f64","../../../geometry/ellipsoidUtils","../../../geometry/support/aaBoundingRect","../webgl-engine/lib/Intersector"],(function(e,t,n,r,i,o){"use strict";function a(e,t,n,r){return null!=e.renderCoordsHelper.fromRenderCoords(t.eye,f,r)&&i.containsPoint(n,f)}function s(e,t){return e.elevationProvider?e.elevationProvider.getElevation(t[0],t[1],t[2],e.renderCoordsHelper.spatialReference,"ground")??0:0}function c(e,n,r,i){const o=e.state.camera.clone();n&&r&&i&&(o.eye=n,o.center=r,o.up=i),d(e,o.ray,p)||t.copy(p,o.center);const a=e.state.constraints,s=a.minimumPoiDistance;if(t.squaredDistance(o.eye,p)<s){const n=a.collision.enabled;t.copy(y,o.viewForward),t.scale(y,y,s),n?o.eye=t.subtract(f,p,y):t.add(p,o.eye,y);const r=e.renderCoordsHelper,i=r.getAltitude(o.eye),c=a.collision.elevationMargin;n&&i<c&&(t.subtract(y,p,o.eye),o.eye=r.setAltitude(f,c,o.eye),t.add(p,o.eye,y))}return o.center=p,o}function l(e,n,r){if(!e.state.isGlobal||!e.stateManager.constraintsManager)return!1;const i=s(e,n),o=e.stateManager.constraintsManager.nearFarHeuristic,{far:a}=o.compute(n,r,e.renderDataExtent,i,v),c=a*a;return t.squaredDistance(n,r)>c}function d(e,t,n){let i=g[e.viewingMode];i||(i=o.newIntersector(e.state.viewingMode),i.options.backfacesTerrain=!e.state.isGlobal,i.options.invisibleTerrain=!0,g[e.viewingMode]=i);const{isGlobal:a}=e.state;return!(!e.sceneIntersectionHelper.intersectRay(t,i,n)||l(e,t.origin,n))||(!(!e.renderCoordsHelper.intersectManifold(t,0,n)||l(e,t.origin,n))||!!a&&u(t,n,r.getReferenceEllipsoid(e.spatialReference).radius))}function u(e,n,r){const i=t.dot(e.origin,e.origin)-r*r,o=i>0?Math.sqrt(i)/3:1;return t.scale(n,e.direction,o/t.length(e.direction)),t.add(n,n,e.origin),!0}const g={},f=n.create(),p=n.create(),y=n.create(),v={near:0,far:0};e.cameraOnContentAlongViewDirection=c,e.eyeWithinExtent=a,e.surfaceElevationBelowRenderLocation=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));