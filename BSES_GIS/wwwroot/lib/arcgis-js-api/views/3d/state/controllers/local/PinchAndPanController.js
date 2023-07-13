/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/mathUtils","../../../../../core/screenUtils","../../../../../core/Logger","../../../../../core/accessorSupport/ensureType","../../../../../core/arrayUtils","../../../../../core/has","../../../../../core/Error","../../../../../core/accessorSupport/decorators/subclass","../../../../../chunks/vec2","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/support/axisAngle","../../../../../geometry/support/plane","../../../camera/constraintUtils","../../../camera/constraintUtils/ConstraintTypes","../../../camera/constraintUtils/InteractionType","../../../camera/constraintUtils/TiltMode","../../../input/util","../InteractiveController","../momentum/PanPlanarMomentumController","../momentum/RotationMomentumController","../momentum/ZoomPlanarMomentumController","../../utils/navigationUtils","../../../webgl-engine/lib/Camera","../../../../navigation/PanPlanarMomentumEstimator","../../../../navigation/RotationMomentumEstimator","../../../../navigation/ZoomMomentumEstimator"],(function(t,e,n,i,o,a,r,s,c,l,m,h,p,u,_,d,C,g,M,P,v,b,y,E,w,S,f,A,T,z){"use strict";const H=u.fromValues(0,0,1),V={ELEVATION_THRESHOLD:3e4,ANGLE_THRESHOLD:16/180*Math.PI};t.PinchAndPanController=function(t){function n(){var e;return(e=t.apply(this,arguments)||this)._rotationValueSmooth=new v.ExponentialFalloff(.05),e._scalingValueSmooth=new v.ExponentialFalloff(.05),e._planeHorizontal=d.create(),e._planeVertical=d.create(),e._rotationMomentumEstimator=new T.RotationMomentumEstimator,e._panMomentumEstimator=new A.PanPlanarMomentumEstimator(300,12,.9),e._zoomMomentumEstimator=new z.ZoomMomentumEstimator,e._beginRadius=0,e._beginCenter=u.create(),e._beginAngle=0,e._tmpPoints=[],e._panMode=S.NavigationMode.Horizontal,e._beginCenterScreen=o.createScreenPointArray(),e._tmpCentroid3d=u.create(),e._tmpCentroid2d=o.createScreenPointArray(),e._tmp2d=o.createScreenPointArray(),e._pointerCount=0,e._constraintOptions={selection:g.ConstraintTypes.ALL,interactionType:M.InteractionType.NONE,interactionFactor:0,interactionStartCamera:new f.Camera,interactionDirection:null,tiltMode:P.TiltMode.TUMBLE},e}e._inherits(n,t);var a=n.prototype;return a.begin=function(t){if(!this.active)return;const e=this.view.navigation.momentumEnabled;this._zoomMomentumEstimator.enabled=e,this._rotationMomentumEstimator.enabled=e,this._panMomentumEstimator.enabled=e,this._beginRadius=t.radius,this._pointerCount=t.pointers.size,this._beginAngle=t.angle,this._rotationValueSmooth.reset(),this._scalingValueSmooth.reset(),o.screenPointObjectToArray(t.center,this._beginCenterScreen),d.fromNormalAndOffset(H,0,this._planeHorizontal);const n=u.create(),a=this._intersectionHelper.intersectScreenFreePointFallback(this._beginCenterScreen,n,0===this.view.map.ground.opacity?S.contentIntersectorOptions:{}),r=u.create();p.negate(r,this.startCamera.viewForward);const s=u.create();p.copy(s,H);const c=p.dot(r,s),l=c<0,m=i.asinClamped(l?-c:c);this._panMode=m>=V.ANGLE_THRESHOLD?S.NavigationMode.Horizontal:S.NavigationMode.Vertical;const h=Math.min(S.PAN_DISTANCE_MODIFIER,1/Math.abs(p.dot(s,this.startCamera.viewForward)))*Math.max(Math.abs(this.view.camera.position.z),S.MIN_HEIGHT_LIMIT);d.setOffsetFromPoint(this._planeHorizontal,this._planeHorizontal,n),this.startCamera.aboveGround||d.negate(this._planeHorizontal,this._planeHorizontal);const _=u.create(),C=u.create(),g=u.create();p.subtract(_,n,this.currentCamera.eye);const M=p.length(_);if(p.normalize(_,_),this._panMode===S.NavigationMode.Vertical){p.scale(s,s,c),p.subtract(this._planeVertical,r,s),p.normalize(this._planeVertical,this._planeVertical),d.setOffsetFromPoint(this._planeVertical,this._planeVertical,n);const e=this.view._stage.renderView.getMinimalDepthForArea(this.view.voxelWasm,this._beginCenterScreen[0],this._beginCenterScreen[1],this.view.state.camera,S.SCREEN_PIXEL_AREA);let i=null!=e?e:h;i=a?Math.min(i,M):i,p.copy(g,p.add(C,this.currentCamera.eye,p.scale(C,_,i))),this._planeVertical[3]=-p.dot(this._planeVertical,g),this._computePlanePoints(t.pointers,this._planeVertical,this.startCamera,this._tmpPoints),S.centroid(this._tmpPoints,this._beginCenter)}else{const e=a?M:h;p.copy(g,p.add(C,this.currentCamera.eye,p.scale(C,_,e))),this._planeHorizontal[3]=-p.dot(d.normal(this._planeHorizontal),g),this._computePlanePoints(t.pointers,this._planeHorizontal,this.startCamera,this._tmpPoints),S.centroid(this._tmpPoints,this._beginCenter)}this._constraintOptions.interactionStartCamera?.copyFrom(this.startCamera)},a.update=function(t){if(!this.active)return;this.currentCamera.copyFrom(this.startCamera);const e=t.pointers.size>1,n=this._panMode===S.NavigationMode.Horizontal?this._planeHorizontal:this._planeVertical,i=this._beginCenter;if(e){const e=this._beginRadius/t.radius,n=.001875*Math.min(Math.max(t.radius,40),120);this._scalingValueSmooth.gain=n,this._scalingValueSmooth.update(e),S.applyZoomToPoint(this.currentCamera,i,this._scalingValueSmooth.value,this.view.state.constraints.minimumPoiDistance),this._zoomMomentumEstimator.add(this._scalingValueSmooth.value,.001*t.timestamp),this._constraintOptions.interactionType=M.InteractionType.ZOOM,this._constraintOptions.interactionFactor=C.pixelDistanceToInteractionFactor(Math.abs(t.radius-this._beginRadius)),C.applyAll(this.view,this.currentCamera,this._constraintOptions)}if(this._computePlanePoints(t.pointers,n,this.currentCamera,this._tmpPoints),S.centroid(this._tmpPoints,this._tmpCentroid3d),o.screenPointObjectToArray(t.center,this._tmpCentroid2d),S.applyPanPlanar(this.currentCamera,i,this._tmpCentroid3d),this._panMomentumEstimator.add(this._tmpCentroid2d,this._tmpCentroid3d,.001*t.timestamp),this._constraintOptions.interactionType=M.InteractionType.PAN,this._constraintOptions.interactionFactor=C.pixelDistanceToInteractionFactor(h.distance(this._beginCenterScreen,this._tmpCentroid2d)),C.applyAll(this.view,this.currentCamera,this._constraintOptions),e){const e=this._planeHorizontal,n=i,o=this._rotationValueSmooth.value,a=o+S.normalizeRotationDelta(t.angle-o),r=.00125*Math.min(Math.max(t.radius,40),120);this._rotationValueSmooth.gain=r,this._rotationValueSmooth.update(a);const s=this._rotationValueSmooth.value-this._beginAngle;this._rotationMomentumEstimator.add(s,.001*t.timestamp),S.applyRotation(this.currentCamera,n,_.wrapAxisAngle(e,s)),this._constraintOptions.interactionType=M.InteractionType.TUMBLE,this._constraintOptions.interactionFactor=C.pixelDistanceToInteractionFactor(Math.abs(t.radius*s)),C.applyAll(this.view,this.currentCamera,this._constraintOptions)}this.commitCamera()},a.end=function(t){t.pointers.size===this._pointerCount&&this.update(t),this.finishController();const e=this._zoomMomentumEstimator.evaluateMomentum();if(e)return new w.ZoomPlanarMomentumController({view:this.view,momentum:e,zoomCenter:this._beginCenter});const n=this._rotationMomentumEstimator.evaluateMomentum();if(n)return new E.RotationMomentumController({view:this.view,momentum:n,center:this._beginCenter,axis:d.normal(this._planeHorizontal)});const i=this._panMomentumEstimator.evaluateMomentum();return i?new y.PanPlanarMomentumController({view:this.view,momentum:i}):null},a._computePlanePoints=function(t,e,n,i){i.length=t.size;const o=this._tmp2d;let a=0;return t.forEach((t=>{o[0]=t.x,o[1]=t.y,void 0===i[a]&&(i[a]=u.create()),S.intersectPlaneFromScreenPointAtEye(e,n,o,i[a]),a+=1})),i},e._createClass(n,[{key:"_intersectionHelper",get:function(){return this.view.sceneIntersectionHelper}}]),n}(b.InteractiveController),t.PinchAndPanController=n.__decorate([m.subclass("esri.views.3d.state.controllers.local.PinchAndPanController")],t.PinchAndPanController),Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
