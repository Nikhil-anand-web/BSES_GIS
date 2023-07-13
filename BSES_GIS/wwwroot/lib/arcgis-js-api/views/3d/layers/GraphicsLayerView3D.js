/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Error","../../../core/maybe","../../../core/reactiveUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./LayerView3D","./graphics/elevationAlignPointsInFeatures","./graphics/GraphicsProcessor","./graphics/queryForSymbologySnapping","./support/projectExtentUtils","../webgl-engine/lib/UpdatePolicy","../../layers/LayerView"],(function(e,r,t,i,s,o,n,a,c,p,l,u,h,d,y,g,f){"use strict";let m=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).type="graphics-3d",e.symbologySnappingSupported=!0,e._slicePlaneEnabled=!1,e.fullExtentInLocalViewSpatialReference=null,e.ignoresMemoryFactor=!0,e}e._inherits(o,r);var n=o.prototype;return n.initialize=function(){this._set("processor",new h.GraphicsProcessor({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.handles.add(this.layer.on("graphic-update",(e=>this.processor.graphicsCore.graphicUpdateHandler(e)))),this.addResolvingPromise(y.toViewIfLocal(this).then((e=>this.fullExtentInLocalViewSpatialReference=e))),this.layer.internal?this.notifyChange("updating"):this.handles.add(s.when((()=>this.view?.basemapTerrain?.ready),(()=>()=>this.notifyChange("updating")),{once:!0}))},n.destroy=function(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("processor",i.destroyMaybe(this.processor))},n.getSuspendInfo=function(){const r=e._get(e._getPrototypeOf(o.prototype),"getSuspendInfo",this).call(this);return r.outsideScaleRange=this.processor?.scaleVisibilitySuspended??!1,r.outsideOfView=this.processor?.frustumVisibilitySuspended??!1,r},n.fetchPopupFeatures=async function(e,r){return r?.clientGraphics??[]},n.getHit=function(e){return this.processor.getHit(e)},n.whenGraphicBounds=function(e,r){return this.processor.whenGraphicBounds(e,r)},n.computeAttachmentOrigin=function(e,r){return this.processor?.computeAttachmentOrigin(e,r)},n.getSymbolLayerSize=function(e,r){return this.processor.getSymbolLayerSize(e,r)},n.queryGraphics=function(){return Promise.resolve(this.loadedGraphics)},n.maskOccludee=function(e){return this.processor.maskOccludee(e)},n.highlight=function(e){return this.processor.highlight(e)},n.elevationAlignPointsInFeatures=async function(e,r){const{processor:i}=this;if(null==i||null==i.graphics3DGraphics)throw new t("graphicslayerview3d:missing-processor","A Graphics3D processor is needed to resolve graphics elevation.");const{graphics3DGraphics:s}=i,o=e=>"number"==typeof e?s.get(e):void 0;return u.elevationAlignPointsInFeatures(this.view,this.layer,o,e,r)},n.queryForSymbologySnapping=async function(e,r){return d.queryForSymbologySnapping(this.processor,e,r)},n.canResume=function(){return e._get(e._getPrototypeOf(o.prototype),"canResume",this).call(this)&&!this.processor?.scaleVisibilitySuspended},n.isUpdating=function(){return this.view&&this.layer&&!(!this.processor?.updating&&(this.layer.internal||this.view.basemapTerrain?.ready))},e._createClass(o,[{key:"loadedGraphics",get:function(){return this.layer.graphics}},{key:"legendEnabled",get:function(){return this.canResume()&&!this.processor?.frustumVisibilitySuspended}},{key:"slicePlaneEnabled",get:function(){const e=this.layer.internal;return this._slicePlaneEnabled&&!e},set:function(e){this._slicePlaneEnabled=e}},{key:"updatePolicy",get:function(){return this.processor?.graphicsCore.effectiveUpdatePolicy||g.UpdatePolicy.SYNC}},{key:"performanceInfo",get:function(){return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:this.processor?.elevationAlignment.updating??!1,visibilityFrustum:!this.processor?.frustumVisibilitySuspended}}},{key:"usedMemory",get:function(){return this.processor?.graphicsCore?.usedMemory??0}},{key:"unloadedMemory",get:function(){return this.processor?.graphicsCore?.unprocessedMemoryEstimate}}]),o}(l.LayerView3D(f));r.__decorate([o.property()],m.prototype,"loadedGraphics",null),r.__decorate([o.property({readOnly:!0})],m.prototype,"legendEnabled",null),r.__decorate([o.property()],m.prototype,"layer",void 0),r.__decorate([o.property({readOnly:!0})],m.prototype,"processor",void 0),r.__decorate([o.property()],m.prototype,"_slicePlaneEnabled",void 0),r.__decorate([o.property({type:Boolean})],m.prototype,"slicePlaneEnabled",null),m=r.__decorate([p.subclass("esri.views.3d.layers.GraphicsLayerView3D")],m);return m}));