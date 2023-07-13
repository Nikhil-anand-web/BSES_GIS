/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../Camera","../../../Viewpoint","../../../core/Error","../../../core/promiseUtils","../../../core/reactiveUtils","../camera/constraintUtils","../camera/constraintUtils/surfaceCollision","./controllers/CameraController","./controllers/PointToPointAnimationController","./controllers/SurfaceCollisionCorrectionController","../support/cameraUtils","../support/viewpointUtils"],(function(t,i,e,n,a,o,r,s,l,c,h,m,w,u){"use strict";let f=function(){function t(t,i,e){this.target=t,this.options=i,this.view=e,this.state="pending",this._animationController=null,this._promise=new Promise(((t,i)=>{this._resolveCallback=t,this._rejectCallback=i;const e=new AbortController;null!=this.options.signal&&o.onAbort(this.options.signal,(()=>{this.abort()})),this._abortController=e,this.waitForReady()}))}var f=t.prototype;return f.then=function(t,i){return this._promise.then(t,i)},f.catch=function(t){return this._promise.catch(t)},f.resolve=function(t){if("finished"!==this.state)return this.state="finished",this._resolveCallback(t)},f.reject=function(t){if("finished"!==this.state)return this.state="finished",this._rejectCallback(t)},f.abort=function(t=!1){if(this._abortController.abort(),"wait-for-animation-finish"===this.state)!t&&null!=this._animationController&&this.view.state.cameraController===this._animationController&&this._animationController.active&&this._animationController.stopController();this.reject(o.createAbortError())},f.waitForReady=async function(){if(this.state="wait-for-ready",!this.view.ready)try{await r.whenOnce((()=>this.view.ready),this._abortController.signal)}catch(t){return this.reject(t)}this.createViewPoint()},f.createViewPoint=function(){"finished"!==this.state&&(this.state="wait-for-viewpoint",this._animationController=this.options.animate?this._getAnimationController():null,u.create(this.view,this.target,this._abortController.signal).then((t=>{if("finished"===this.state)return;const i=t?this._getCameraFromViewpoint(t):null;if(null!=i)if(this.options.animate){if(null==this._animationController)return;this.startAnimation(i,this._animationController)}else this.view.stateManager.setStateCamera(i.camera,{applyConstraints:!i.isFullySpecified,positionAndOrientationOnly:!0,doNotCancelGoToOperation:!0}),this.resolve()}),(t=>{this.reject(t)})))},f._getCameraFromViewpoint=function(t){const i=!!(this.target instanceof n&&this.target.camera||this.target instanceof e),o=t.camera;if(null==o)return null;if(!this.view.stateManager.isCompatible(o)){const t=o.position,i=t&&t.spatialReference,e=i?i.wkid:"none",n=this.view.spatialReference?.wkid;return this.reject(new a("GotoAnimation:incompatible-spatialreference",`Resulting camera has an incompatible spatial reference (camera: ${e}, view: ${n})`,{camera:o})),null}const r=w.externalToInternal(this.view,o);return null==r?(this.reject(new a("GotoAnimation:invalid-camera","Resulting camera is invalid")),null):{viewpoint:t,camera:r,isFullySpecified:i}},f.startAnimation=function(t,i){this.state="wait-for-animation-finish";const e=i.viewAnimation;if(null==e)return void this.reject(new a("GotoAnimation:missing-animation","Unreachable code in view.stateManager"));if(e.update(t.viewpoint,"running"),!i.active||null==i.viewAnimation||i.viewAnimation.target!==t.viewpoint||this.view.state.cameraController!==i)return this.abort();let n;t.isFullySpecified?(n=new m.SurfaceCollisionCorrectionController({view:this.view,desiredCamera:t.camera}),l.applySurfaceCollisionConstraint(this.view,t.camera,l.Mode.EYE_AND_CENTER)):s.applyAll(this.view,t.camera),i.begin(t.camera,this.options);const o=()=>{const e=this.view.state.cameraController;n&&(e&&e.active?e instanceof h.PointToPointAnimationController&&null!=e.viewAnimation&&e.viewAnimation.target===t.viewpoint&&(this.view.state.cameraController=n):null!=i.viewAnimation&&i.viewAnimation.target===t.viewpoint&&"finished"===i.state&&(this.view.state.cameraController=n))},r=t=>{if(null!=this.view.state)switch(i.state){case c.State.Finished:switch(this.state){case"pending":case"wait-for-ready":case"wait-for-viewpoint":case"wait-for-animation-finish":this.resolve()}break;case c.State.Ready:case c.State.Rejected:case c.State.Running:case c.State.Stopped:switch(this.state){case"pending":case"wait-for-ready":case"wait-for-viewpoint":case"wait-for-animation-finish":this.reject(t)}}};e.when(o,(t=>r(t))),i.asyncResult={resolve:()=>r(),reject:t=>r(t)}},f._getAnimationController=function(){let t=null,i=null;const e=this.view.state.cameraController;return e instanceof h.PointToPointAnimationController&&(e.updateStateFromViewAnimation(),e.active&&(t=e,i=t.viewAnimation)),null!=t||(t=new h.PointToPointAnimationController({view:this.view,mode:"animation"}),i=t.viewAnimation,this.view.state.switchCameraController(t))?t:(null!=i&&i.stop(),this.reject(new a("GotoAnimation:goto-cannot-interrupt","Cannot start an animation while interacting")),null)},i._createClass(t)}();t.GoToOperation=f,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));