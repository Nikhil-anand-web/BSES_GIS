/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/mathUtils","../../../../../core/time","../../../../../core/Logger","../../../../../core/accessorSupport/ensureType","../../../../../core/arrayUtils","../../../../../core/has","../../../../../core/Error","../../../../../core/accessorSupport/decorators/subclass","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/ellipsoidUtils","../../../../../chunks/sphere","../../../camera/constraintUtils","../../../camera/constraintUtils/ConstraintTypes","../../../camera/constraintUtils/InteractionType","../../../camera/constraintUtils/surfaceCollision","../../../camera/constraintUtils/TiltMode","../PointToPointAnimationController","../../utils/navigationUtils","../../../support/geometryUtils/ray","../../../support/geometryUtils/sphere","../../../webgl-engine/lib/Camera","../../../webgl-engine/lib/Intersector","../../../../animation/easing"],(function(t,e,i,r,n,a,s,o,c,h,l,p,m,_,d,u,y,C,g,D,M,w,S,v,f,O,R){"use strict";const b=.6,I=4,T=60;t.ZoomStepController=function(t){function i(){var e;return(e=t.apply(this,arguments)||this)._zoomLocation=m.create(),e._tmpCamera=new f.Camera,e._tmpViewDir=m.create(),e._tmpRayDir={origin:m.create(),direction:m.create()},e._targetOnSphere=m.create(),e._tmpCenter=m.create(),e._constraintOptions={selection:y.ConstraintTypes.ALL_EXCEPT_COLLISION,interactionType:C.InteractionType.ZOOM,interactionFactor:null,interactionStartCamera:new f.Camera,interactionDirection:null,tiltMode:D.TiltMode.TUMBLE},e._sphere=d.create(),e}e._inherits(i,t);var a=i.prototype;return a.initialize=function(){this._intersector=O.newIntersector(this.view.state.viewingMode)},a.zoomStep=function(t,e){if(!this.active)return;const i=this.view.state,{interactionStartCamera:r}=this._constraintOptions;r&&(this.animation.finished?r.copyFrom(i.camera):this.animation.cameraAt(1,r));let n=!1,a=!1;this.intersectionHelper.intersectScreen(e,this._zoomLocation,0===this.view.map.ground.opacity?w.contentIntersectorOptions:{})&&(n=t>0,a=!0),this._tmpCamera.copyFrom(i.camera),n?this.intersectionHelper.intersectRay(this._tmpCamera.ray,this._intersector,this._tmpCenter)&&(this._tmpCamera.center=this._tmpCenter):this.intersectionHelper.intersectRay(this._tmpCamera.ray,this._intersector,this._zoomLocation)?this._tmpCamera.center=this._zoomLocation:p.copy(this._zoomLocation,this._tmpCamera.center),this._updateCamera(this._tmpCamera,t,this._zoomLocation,e,a),this.begin(this._tmpCamera)},a.animationSettings=function(){return{duration:n.Milliseconds(600),easing:R.outExpo}},a._updateCamera=function(t,e,i,n,a){const s=_.getReferenceEllipsoid(this.view.spatialReference),o=w.decideNavigationMode(t,n,s),c=Math.abs(this.view.camera.position.z);p.normalize(z,t.eye),p.scale(z,z,-1),S.fromScreenAtEye(t,n,this._tmpRayDir),p.normalize(this._tmpRayDir.direction,this._tmpRayDir.direction);const h=r.clamp(Math.min(w.ZOOM_DISTANCE_MODIFIER,1/Math.abs(p.dot(z,this._tmpRayDir.direction)))*c,w.ZOOM_MIN_DISTANCE_MODIFIER,w.ZOOM_MAX_DISTANCE_MODIFIER);if(o===w.NavigationMode.Horizontal){let r=b**e;this._sphere[3]=p.length(i),p.subtract(this._tmpViewDir,t.center,t.eye);const a=Math.min(p.length(this._tmpViewDir),h);let s=a*r;if(r<=1&&s<I&&(s=I,r=s/a),Math.abs(a-s)<1e-6)return;const o=p.length(t.center);if(this._sphere[3]!==o){const e=this._sphere[3]+r*(o-this._sphere[3]);t.center=p.scale(E,t.center,e/o)}p.scale(this._tmpViewDir,this._tmpViewDir,-r),t.eye=p.add(E,t.center,this._tmpViewDir),u.applyAll(this.view,t,this._constraintOptions),p.squaredDistance(i,t.center)>1e-12&&v.intersectScreen(this._sphere,t,n,this._targetOnSphere)&&w.panToPosition(this._sphere,t,i,this._targetOnSphere,this.view.camera.heading,this.view.camera.tilt,!0)}else{let r=b**Math.abs(e);const s=e>0?1:-1;p.subtract(this._tmpViewDir,i,t.eye);const o=p.length(this._tmpViewDir),c=this.view._stage.renderView.getMinimalDepthForArea(null,n[0],n[1],this.view.state.camera,T);let l=null!=c?c:h;l=a&&e>0?Math.min(l,o):l,p.scale(this._tmpRayDir.direction,this._tmpRayDir.direction,l),p.add(i,this._tmpRayDir.origin,this._tmpRayDir.direction);let m=l*r;const _=Math.max(I,1.01*t.nearFar[0]);if(e>0&&m<_&&(m=_,r=m/l),Math.abs(l-m)<1e-6)return;p.scale(this._tmpRayDir.direction,this._tmpRayDir.direction,s*(1-r)),t.eye=p.add(E,t.eye,this._tmpRayDir.direction),t.center=p.add(E,t.center,this._tmpRayDir.direction)}g.applySurfaceCollisionConstraint(this.view,t)},e._createClass(i)}(M.PointToPointAnimationController),t.ZoomStepController=i.__decorate([l.subclass("esri.views.3d.state.controllers.global.ZoomStepController")],t.ZoomStepController);const E=m.create(),z=m.create();Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
