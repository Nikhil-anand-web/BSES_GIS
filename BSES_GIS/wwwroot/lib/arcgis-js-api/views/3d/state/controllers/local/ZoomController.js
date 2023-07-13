/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/mathUtils","../../../../../core/screenUtils","../../../../../core/Logger","../../../../../core/accessorSupport/ensureType","../../../../../core/arrayUtils","../../../../../core/has","../../../../../core/Error","../../../../../core/accessorSupport/decorators/subclass","../../../../../chunks/vec2","../../../../../chunks/vec2f64","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/support/plane","../../../camera/constraintUtils","../../../camera/constraintUtils/ConstraintTypes","../../../camera/constraintUtils/InteractionType","../../../camera/constraintUtils/TiltMode","../InteractiveController","../../utils/navigationUtils"],(function(t,e,i,r,n,a,s,o,c,h,m,p,l,_,u,C,P,y,d,D,g,v){"use strict";t.ZoomController=function(t){function i(){var e;return(e=t.apply(this,arguments)||this)._tmpP=u.create(),e._tmpDir=u.create(),e._tmpN=u.create(),e._tmpP0=l.create(),e._tmpPoi=u.create(),e._tmpRayDir=u.create(),e.dragBeginPoint=n.createScreenPointArray(),e._normalizedAnchorPoint=l.create(),e._constraintOptions={selection:y.ConstraintTypes.ALL,interactionType:d.InteractionType.ZOOM,interactionFactor:0,interactionStartCamera:null,interactionDirection:u.create(),tiltMode:D.TiltMode.TUMBLE},e._plane=C.create(),e}e._inherits(i,t);var a=i.prototype;return a.begin=function(t){if(!this.active)return;p.copy(this.dragBeginPoint,t),v.normalizeCoordinate(this.startCamera,t,this._normalizedAnchorPoint);const e=this._intersectionHelper.intersectScreenFreePointFallback(t,this._tmpP,0===this.view.map.ground.opacity?v.contentIntersectorOptions:{});_.subtract(this._tmpDir,this._tmpP,this.startCamera.eye);const i=_.length(this._tmpDir);_.normalize(this._tmpDir,this._tmpDir);const n=Math.abs(this.view.camera.position.z);let a=r.clamp(Math.min(v.PIVOT_DISTANCE_MODIFIER,1/Math.abs(_.dot(M,this._tmpDir)))*n,v.DISTANCE_CLAMP_VALUES[0],v.DISTANCE_CLAMP_VALUES[1]);const s=this.view._stage.renderView.getMinimalDepthForArea(this.view.voxelWasm,t[0],t[1],this.view.state.camera,v.SCREEN_PIXEL_AREA);a=null!=s?s:a,a=e?Math.min(a,i):a,_.scale(this._tmpDir,this._tmpDir,a),_.add(this._tmpP,this.startCamera.eye,this._tmpDir),_.subtract(this._tmpN,this.startCamera.eye,this.startCamera.center),_.normalize(this._tmpN,this._tmpN),this._tmpN[1]<0&&_.negate(this._tmpN,this._tmpN),C.fromPositionAndNormal(this._tmpP,this._tmpN,this._plane),this._constraintOptions.interactionStartCamera=this.startCamera},a.update=function(t){if(!this.active)return;v.intersectPlaneFromScreenPoint(this._plane,this.currentCamera,this.dragBeginPoint,this._tmpPoi)||_.copy(this._tmpPoi,this.currentCamera.center),v.normalizeCoordinate(this.currentCamera,t,this._tmpP0);let e=4*(this._tmpP0[1]-this._normalizedAnchorPoint[1]);p.copy(this._normalizedAnchorPoint,this._tmpP0),_.subtract(this._tmpRayDir,this._tmpPoi,this.currentCamera.eye);const i=_.length(this._tmpRayDir);let r=i*(1-e);this._constraintOptions.interactionDirection&&(_.copy(this._constraintOptions.interactionDirection,this._tmpRayDir),_.scale(this._constraintOptions.interactionDirection,this._constraintOptions.interactionDirection,Math.sign(e)/i));const n=this.view.state.constraints.minimumPoiDistance;e>=0&&r<n&&(r=n,e=-(r-i)/i),Math.abs(i-r)<1e-6||(_.scale(this._tmpRayDir,this._tmpRayDir,e),this.currentCamera.eye=_.add(A,this.currentCamera.eye,this._tmpRayDir),_.lerp(A,this.currentCamera.center,this._tmpPoi,e),this._tmpPoi[2]>this.startCamera.center[2]?A[2]=Math.max(this.startCamera.center[2],A[2]):A[2]=Math.min(this.startCamera.center[2],A[2]),this.currentCamera.center=A,this._constraintOptions.interactionFactor=P.pixelDistanceToInteractionFactor(p.distance(this.dragBeginPoint,t)),P.applyAll(this.view,this.currentCamera,this._constraintOptions),this.commitCamera())},a.end=function(){this.active&&this.finishController()},e._createClass(i,[{key:"_intersectionHelper",get:function(){return this.view.sceneIntersectionHelper}}]),i}(g.InteractiveController),t.ZoomController=i.__decorate([m.subclass("esri.views.3d.state.controllers.local.ZoomController")],t.ZoomController);const A=u.create(),M=u.fromValues(0,0,1);Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));