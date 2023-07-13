/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/Evented","../../../core/reactiveUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../../core/accessorSupport/watch","../../../chunks/vec3f64","../../../geometry/ellipsoidUtils","../../ViewAnimation","../../ViewingMode","./Constraints","./controllers/AnimationController","./controllers/CameraController","../support/PropertiesPool","../webgl-engine/lib/Camera","../../support/RenderState"],(function(e,t,r,o,a,i,n,s,l,p,c,d,u,m,h,_,y,g,C,f,w){"use strict";let v=function(t){function r(){var r;return(r=t.apply(this,arguments)||this)._propertiesPool=new C.PropertiesPool({camera:f.Camera},e._assertThisInitialized(r)),r._lastSeenCameraProjectionValues=new f.Camera,r.mode=w.RenderState.ANIMATING,r._cssCamera=new f.Camera,r._camera=new f.Camera,r.rasterPixelRatio=1,r.contentPixelRatio=1,r.events=new o,r.viewingMode=h.ViewingMode.Global,r._cameraChanged=!1,r._updateQueue=new Array,r._processingUpdates=!1,r}e._inherits(r,t);var i=r.prototype;return i.init=function(e,t){this._set("viewingMode",e),this._set("spatialReference",t),this._set("constraints",new _.Constraints({mode:this.viewingMode}))},i.exit=function(){this.cameraController?.destroy(),this.cameraController=null,this._propertiesPool.destroy(),this._propertiesPool=new C.PropertiesPool({camera:f.Camera},this)},i.destroy=function(){this.cameraController?.destroy(),this.cameraController=null,this._propertiesPool?.destroy(),this._propertiesPool=null},i.createInitialCamera=function(){if(this.viewingMode===h.ViewingMode.Global){const e=u.getReferenceEllipsoid(this.spatialReference).radius;this.camera=new f.Camera({eye:d.fromValues(4*e,0,0),center:d.fromValues(e,0,0),up:d.fromValues(0,0,1)})}else this.camera=new f.Camera({eye:d.fromValues(0,0,100),center:d.fromValues(0,0,0),up:d.fromValues(0,1,0)})},i.switchCameraController=function(e){return this.cameraController=e,e.state!==g.State.Rejected},i.stopActiveCameraController=function(){return!(this.cameraController&&!this.cameraController.stopController())},i.updateCamera=function(e){this._updateQueue.push(e),this._processUpdateQueue()},i._processUpdateQueue=function(){if(0===this._updateQueue.length||this._processingUpdates)return;this._processingUpdates=!0;const e=this._updateQueue.shift();S.copyFrom(this._get("camera")),e(S),this.camera=S,this._processingUpdates=!1,this._processUpdateQueue()},i._cameraProjectionChanged=function(e,t){return e.fov!==t.fov||(e.fullViewport[0]!==t.fullViewport[0]||e.fullViewport[1]!==t.fullViewport[1]||e.fullViewport[2]!==t.fullViewport[2]||e.fullViewport[3]!==t.fullViewport[3]||(e.padding[f.PaddingSide.TOP]!==t.padding[f.PaddingSide.TOP]||e.padding[f.PaddingSide.RIGHT]!==t.padding[f.PaddingSide.RIGHT]||e.padding[f.PaddingSide.BOTTOM]!==t.padding[f.PaddingSide.BOTTOM]||e.padding[f.PaddingSide.LEFT]!==t.padding[f.PaddingSide.LEFT]))},e._createClass(r,[{key:"animation",get:function(){return this.cameraController instanceof y.AnimationController&&null!=this.cameraController.viewAnimation?this.cameraController.viewAnimation:null}},{key:"camera",get:function(){return this._camera},set:function(e){e!==S&&S.copyFrom(e),S.computeUp(this.viewingMode),this.events.emit("before-camera-change",S);const t=this._camera;if(this._cameraProjectionChanged(this._lastSeenCameraProjectionValues,S)&&(this._lastSeenCameraProjectionValues.copyFrom(S),this.events.emit("camera-projection-changed",this._lastSeenCameraProjectionValues)),!t.equals(S)&&(this._camera=this._propertiesPool.get("camera").copyFrom(S),this._cameraChanged=!t.almostEquals(S),this._cameraChanged)){const e=c.afterDispatch((()=>{this._cameraChanged=!1,e.remove()}))}}},{key:"cssCamera",get:function(){const e=this._cssCamera.copyFrom(this.camera),{height:t,width:r,pixelRatio:o}=this.camera;return e.pixelRatio=1,e.height=Math.round(t/o),e.width=Math.round(r/o),e}},{key:"pixelRatio",get:function(){return this.camera.pixelRatio}},{key:"alignPixelEnabled",get:function(){return this.pixelRatio===this.rasterPixelRatio&&this.mode===w.RenderState.IDLE}},{key:"updating",get:function(){return!this.alignPixelEnabled}},{key:"contentCamera",get:function(){return this._contentCamera??this.camera},set:function(e){this._contentCamera=null!=e?e.clone():null}},{key:"fixedContentCamera",get:function(){return null!=this._contentCamera}},{key:"isGlobal",get:function(){return this.viewingMode===h.ViewingMode.Global}},{key:"isLocal",get:function(){return this.viewingMode===h.ViewingMode.Local}},{key:"navigating",get:function(){return!(!this.cameraController||!this.cameraController.isInteractive)}},{key:"stationary",get:function(){return!this._cameraChanged&&!this.navigating}},{key:"cameraController",get:function(){return this._get("cameraController")},set:function(e){this.stopActiveCameraController()?(this.cameraController?.destroy(),e&&(this.removeHandles(V),this.addHandles(a.when((()=>e.state===g.State.Finished||e.state===g.State.Stopped),(()=>{this._set("cameraController",null),this.updateCamera((t=>e.onControllerEnd(t)))}),{sync:!0,once:!0}),V),e.onControllerStart(this.camera)),this._set("cameraController",e)):e&&(e.state=g.State.Rejected)}}]),r}(r);t.__decorate([i.property()],v.prototype,"mode",void 0),t.__decorate([i.property({readOnly:!0,type:m})],v.prototype,"animation",null),t.__decorate([i.property({type:f.Camera})],v.prototype,"camera",null),t.__decorate([i.property({type:f.Camera})],v.prototype,"cssCamera",null),t.__decorate([i.property()],v.prototype,"_cssCamera",void 0),t.__decorate([i.property()],v.prototype,"_camera",void 0),t.__decorate([i.property({readOnly:!0})],v.prototype,"pixelRatio",null),t.__decorate([i.property()],v.prototype,"rasterPixelRatio",void 0),t.__decorate([i.property()],v.prototype,"contentPixelRatio",void 0),t.__decorate([i.property({readOnly:!0})],v.prototype,"alignPixelEnabled",null),t.__decorate([i.property({readOnly:!0})],v.prototype,"updating",null),t.__decorate([i.property({})],v.prototype,"_contentCamera",void 0),t.__decorate([i.property({type:f.Camera})],v.prototype,"contentCamera",null),t.__decorate([i.property({readOnly:!0})],v.prototype,"fixedContentCamera",null),t.__decorate([i.property({readOnly:!0})],v.prototype,"constraints",void 0),t.__decorate([i.property({readOnly:!0})],v.prototype,"events",void 0),t.__decorate([i.property({readOnly:!0})],v.prototype,"isGlobal",null),t.__decorate([i.property({readOnly:!0})],v.prototype,"isLocal",null),t.__decorate([i.property({readOnly:!0})],v.prototype,"viewingMode",void 0),t.__decorate([i.property({readOnly:!0})],v.prototype,"spatialReference",void 0),t.__decorate([i.property()],v.prototype,"navigating",null),t.__decorate([i.property()],v.prototype,"stationary",null),t.__decorate([i.property()],v.prototype,"_cameraChanged",void 0),t.__decorate([i.property()],v.prototype,"cameraController",null),v=t.__decorate([p.subclass("esri.views.3d.state.ViewState")],v);const P=v,S=new f.Camera,V="ViewStateHandles";return P}));