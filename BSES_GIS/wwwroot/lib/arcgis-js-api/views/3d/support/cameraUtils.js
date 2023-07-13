/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../Camera","../../../core/Cyclical","../../../core/Logger","../../../core/mathUtils","../../../core/promiseUtils","../../../chunks/vec3","../../../chunks/vec3f64","../../../geometry/ellipsoidUtils","../../../geometry/Point","../../../geometry/projection","../../../geometry/SpatialReference","../../ViewingMode","../camera/intersectionUtils","../../../chunks/cameraUtilsPlanar","../../../chunks/cameraUtilsSpherical","./earthUtils","./ElevationProvider","../../support/spatialReferenceSupport"],(function(e,t,n,r,o,i,a,l,c,s,u,f,d,p,m,v,g,h,T,y){"use strict";const M=o.getLogger("esri.views.3d.support.cameraUtils"),x=39.37,S=96,R=1,w=8,C=5,P=1,z=c.create(),j={heading:0,tilt:0},V=new u,b=new r.Cyclical(-20037508.342788905,20037508.342788905),U=new r.Cyclical(-180,180);var A;function O(e){return e.spatialReference||d.WGS84}function D(e){return"global"===e.viewingMode?g.cameraUtilsSpherical:v.cameraUtilsPlanar}function E(e,t,n,r,o){return D(e).headingTiltToDirectionUp(t,n,r,o)}function H(e,t){if(null==t)return null;const n=e.renderSpatialReference,r=D(e).headingTiltToDirectionUp,o=c.create();if(!f.projectPointToVector(t.position,o,n))return null;const a=r(o,t.heading,t.tilt);l.scale(a.direction,a.direction,e.state.camera.distance),l.add(a.direction,a.direction,o);const s=m.cameraOnContentAlongViewDirection(e,o,a.direction,a.up);return s.fov=i.deg2rad(t.fov),s}e.OrientationMode=void 0,(A=e.OrientationMode||(e.OrientationMode={}))[A.LOCKED=0]="LOCKED",A[A.ADJUST=1]="ADJUST";const G=c.create();function L(e,t,r){const o=e.renderSpatialReference,a=J(e,t.eye,t.viewForward,t.up,j);let l=O(e);return f.projectVectorToVector(t.eye,o,G,l)||(l=d.WGS84,f.projectVectorToVector(t.eye,o,G,l)),null==r?new n(new u(G,l),a.heading,a.tilt,i.rad2deg(t.fov)):(r.position.x=G[0],r.position.y=G[1],r.position.z=G[2],r.position.spatialReference=l,r.heading=a.heading,r.tilt=a.tilt,r.fov=i.rad2deg(t.fov),r)}function k(e,t,n){const r=e.state.camera,o=r.width/2/r.pixelRatio;e.renderCoordsHelper.viewingMode===p.ViewingMode.Global&&null!=n&&(t*=Math.cos(i.deg2rad(n))),t/=e.renderCoordsHelper.unitInMeters;return o/(S*x/t)/Math.tan(r.fovX/2)}function I(e,t,n){const r=e.state.camera,o=t*Math.tan(r.fovX/2),a=r.width/2/r.pixelRatio;let l=S*x/(a/o);return e.renderCoordsHelper.viewingMode===p.ViewingMode.Global&&null!=n&&(l/=Math.cos(i.deg2rad(n))),l*e.renderCoordsHelper.unitInMeters}function q(e,t,n,r,o,i){return F(e,t,k(e,n,t.latitude),r,o,i)}function F(e,t,n,r,o,i){if(ue(i)){const a=new se(i.signal);return Z(e,r.heading,r.tilt,t,n,o,a),void a.resolver.promise.then((t=>{const n=ie(e,t,r.fov);if(null!=n)return i.resolver.resolve(n);i.resolver.reject()}),(e=>i.resolver.reject(e)))}const a=Z(e,r.heading,r.tilt,t,n,o);return ie(e,a,r.fov,i)}function J(e,t,n,r,o){return D(e).directionToHeadingTilt(t,n,r,o)}function W(e,t){return!!(e.basemapTerrain&&e.renderCoordsHelper.fromRenderCoords(t,V,e.spatialReference)&&e.elevationProvider&&(T.getElevationAtPoint(e.elevationProvider,V)??0)>(V.z??0)-P)}async function X(e,t,n){if(!e.renderCoordsHelper.fromRenderCoords(t,V,e.spatialReference)||!e.elevationProvider)return!1;const r=V.z??0;return(await e.elevationProvider.queryElevation(V.x,V.y,r,V.spatialReference,"ground",n)??0)>r-P}async function K(e,t,n){const r=c.create();if(t)if(t instanceof u){if(f.projectPointToVector(t,r,e.renderSpatialReference),null==t.z&&null!=e.basemapTerrain&&null!=e.elevationProvider){const o=await e.elevationProvider.queryElevation(t.x,t.y,t.z??0,t.spatialReference,"ground",n);return null!=o&&e.renderCoordsHelper.setAltitude(r,o),r}}else l.copy(r,t);else l.copy(r,e.state.camera.center);return r}function Y(e,t){const n=c.create();if(t&&t instanceof u){if(f.projectPointToVector(t,n,e.renderSpatialReference),null==t.z&&null!=e.basemapTerrain&&null!=e.elevationProvider){const r=T.getElevationAtPoint(e.elevationProvider,t);null!=r&&e.renderCoordsHelper.setAltitude(n,r)}}else t?l.copy(n,t):l.copy(n,e.state.camera.center);return n}function Z(e,t,n,r,o,i,a){const l=r&&r instanceof u?r:null;if(ue(a))return K(e,r,a.signal).then((r=>{_(e,t,n,l,r,o,i,a)}),(e=>a.resolver.reject(e))),null;const c=Y(e,r);return _(e,t,n,l,c,o,i,a)}function _(t,n,r,o,i,a,l,s){if(null==o){const e=t.renderSpatialReference;if(null==(o=f.projectVectorToPoint(i,e,O(t))))return null}a=Math.max(a,t.state.constraints.minimumPoiDistance);const u=$(t,n,r,i,a,l),d=(0,D(t).eyeForCenterWithHeadingTilt)(i,a,u.heading,u.tilt);if(l===e.OrientationMode.ADJUST&&"global"===t.viewingMode&&r>0){const u=()=>{const c=re(t,i,a,ne(t,a,r,i));return l=r-c<1?e.OrientationMode.LOCKED:e.OrientationMode.ADJUST,_(t,n,c,o,i,a,l,s)},f=t.map.ground.navigationConstraint;if(!f||"stay-above"===f.type){if(W(t,d.eye))return u();if(ue(s))return X(t,d.eye,s.signal).then((e=>e?u():(s.resolver.resolve({eye:d.eye,up:d.up,center:c.clone(i),heading:d.heading,tilt:d.tilt}),null))),null}}const p=!s||ue(s)?{center:c.create(),eye:c.create(),up:c.create(),tilt:0,heading:0}:s;return p.eye=d.eye,p.up=d.up,p.center=c.clone(i),p.heading=d.heading,p.tilt=d.tilt,ue(s)&&s.resolver.resolve(p),p}function B(e,t,n,r,o,i=null){let a,l,c;if(e.state.isGlobal){if(!y.isSpatialReferenceSupported(t.spatialReference,p.ViewingMode.Global))return ue(i)&&i.resolver.reject(),null;const e=new u(t.xmin,t.ymin,t.spatialReference),n=new u(t.xmax,t.ymax,t.spatialReference),r=t.spatialReference.isGeographic?U:b;a=new u({x:r.center(e.x,n.x),y:(n.y+e.y)/2,z:null!=t.zmax&&null!=t.zmin?(t.zmax+t.zmin)/2:void 0,spatialReference:t.spatialReference});const o=s.getReferenceEllipsoid(t.spatialReference),f=h.getGreatCircleSpanAt(a,e,n);l=f.lon,c=f.lat,r.diff(e.x,n.x)>r.range/2&&(l+=o.halfCircumference),l=Math.min(l,o.halfCircumference),c=Math.min(c,o.halfCircumference)}else{const n=e.renderSpatialReference??t.spatialReference;n.equals(t.spatialReference)||(t=f.project(t,n)),l=t.xmax-t.xmin,c=t.ymax-t.ymin;const r=null!=t.zmax&&null!=t.zmin?(t.zmax+t.zmin)/2:void 0;a=new u({x:t.xmin+.5*l,y:t.ymin+.5*c,z:r,spatialReference:n})}const d=null!=t.zmax&&null!=t.zmin?t.zmax-t.zmin:0,m=e.state.camera,v=1/Math.tan(m.fovX/2),g=1/Math.tan(m.fovY/2),T=1/Math.tan(m.fov/2),M=Math.max(.5*l*v,.5*c*g,.5*d*T)/R;if(ue(i)){const t=new se(i.signal);return Z(e,n,r,a,M,o,t),void t.resolver.promise.then((t=>{const n=ie(e,t,e.camera.fov);if(null!=n)return i.resolver.resolve(n);i.resolver.reject()}),(e=>i.resolver.reject(e)))}const x=Z(e,n,r,a,M,o);return ie(e,x,e.camera.fov,i)}function N(e,t,n){const r=e.renderSpatialReference,o=f.projectVectorToPoint(n,r,O(e));if(null==o)return null;const i=Math.tan(t.fovX/2),a=Math.tan(t.fovY/2),c=l.dist(t.eye,n),s=2*c*i*R,u=2*c*a*R;return"global"===e.viewingMode?g.toExtent(e,o,s,u):v.toExtent(e,o,s,u)}function Q(e,t,n){const r=e.pointsOfInterest.centerOnSurfaceFrequent.distance;if(Math.log(n/r)/Math.LN2>w)return!0;const o=e.renderSpatialReference,i=O(e),a=f.projectVectorToPoint(t,o,i),l=f.projectVectorToPoint(e.pointsOfInterest.centerOnSurfaceFrequent.renderLocation,o,i);if(null==a||null==l)return!1;const c=Math.tan(.5*e.state.camera.fov)*r;return l.distance(a)/c>C}function $(t,n,r,o,i,a){let l=0;return a===e.OrientationMode.ADJUST&&Q(t,o,i)?(n=0,l=te(t,i,r,o)):l=oe(t,o,i,r),l=t.state.constraints.clampTilt(i,l),{heading:n,tilt:r=re(t,o,i,l)}}const ee=.7;function te(e,t,n,r){const o=oe(e,r,t,n);if(!e.state.constraints.tilt)return o;const i=e.state.constraints.tilt(t);i.max=Math.min(i.max,.5*Math.PI);const a=i.min*(1-ee)+i.max*ee;return Math.min(o,a)}function ne(e,t,n,r){let o=oe(e,r,t,n);if(!e.state.constraints.tilt)return o;const i=e.state.constraints.tilt(t);return o=Math.min(o,.5*Math.PI),i.min*(1-ee)+o*ee}function re(e,t,n,r){return D(e).lookAtTiltToEyeTilt(r,t,n)}function oe(e,t,n,r){return D(e).eyeTiltToLookAtTilt(r,t,n)}function ie(e,t,r,o){if(null==t)return null;const i=e.renderSpatialReference,a=f.projectVectorToPoint(t.eye,i,O(e));return null==a?null:null!=o?(o.position=a,o.heading=t.heading,o.tilt=t.tilt,o.fov=r,o):new n(a,t.heading,t.tilt,r)}function ae(e,t){const n=e.basemapTerrain?.tilingScheme;if(n)return n.levelAtScale(t);M.error("#scaleToZoom()","Cannot compute zoom from scale without a tiling scheme")}function le(e,t){const n=e.basemapTerrain?.tilingScheme;if(n)return n.scaleAtLevel(t);M.error("#zoomToScale()","Cannot compute scale from zoom without a tiling scheme")}function ce(e,t){return f.projectVectorToVector(t.center,e.renderSpatialReference,z,d.WGS84),I(e,t.distance,z[1])}let se=t._createClass((function(e){this.signal=e,this.resolver=a.createResolver()}));function ue(e){return e&&"resolver"in e}e.AsyncContext=se,e.computeScale=ce,e.directionToHeadingTilt=J,e.distanceToScale=I,e.externalToInternal=H,e.fromCenterDistance=F,e.fromCenterScale=q,e.fromExtent=B,e.getObserverForPointAtDistance=Z,e.headingTiltToDirectionUp=E,e.internalToExternal=L,e.observerToCamera=ie,e.scaleToDistance=k,e.scaleToZoom=ae,e.toExtent=N,e.zoomToScale=le,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
