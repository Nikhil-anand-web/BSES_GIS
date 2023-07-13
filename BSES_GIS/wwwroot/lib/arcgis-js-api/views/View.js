/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../Map","../TimeExtent","../core/Accessor","../core/asyncUtils","../core/Collection","../core/CollectionFlattener","../core/Error","../core/Evented","../core/HandleOwner","../core/handleUtils","../core/Loadable","../core/Logger","../core/maybe","../core/Promise","../core/promiseUtils","../core/reactiveUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass","../core/support/OwningCollection","../geometry/Extent","../geometry/HeightModelInfo","../geometry/SpatialReference","../geometry/support/spatialReferenceUtils","../support/AnalysesCollection","../support/GraphicsCollection","../time/TimeReference","./BasemapView","./LayerViewManager","./Magnifier","./ToolViewManager","./input/Input","./input/ViewEvents","./navigation/Navigation","./support/DefaultsFromMap"],(function(e,t,r,a,i,o,n,s,l,p,d,c,y,u,h,f,_,g,w,m,v,M,V,R,S,F,b,k,C,O,L,E,x,I,T,P,q,z,D){"use strict";var H;let U=H=function(t){function r(r){var a;return(a=t.call(this,r)||this)._userSpatialReference=null,a._cursor=null,a.allLayerViews=new s({getCollections:()=>[a.basemapView?.baseLayerViews,a.groundView?.layerViews,a.layerViews,a.basemapView?.referenceLayerViews],getChildrenFunction:A}),a.groundView=null,a.basemapView=null,a.fatalError=null,a.graphics=new O.GraphicsCollection,a.analyses=new C.AnalysesCollection,a.typeSpecificPreconditionsReady=!0,a.layerViews=new n,a.magnifier=new I,a.padding={left:0,top:0,right:0,bottom:0},a.ready=!1,a.spatialReferenceWarningDelay=1e3,a.supportsGround=!0,a.timeExtent=null,a.timeReference=new L,a.type=null,a.scale=null,a.updating=!1,a.initialExtentRequired=!0,a.input=new P,a.navigation=new z,a.layerViewManager=null,a.analysisViewManager=null,a.isHeightModelInfoRequired=!1,a.width=null,a.height=null,a.resizing=!1,a.suspended=!1,a.viewEvents=new q.ViewEvents(e._assertThisInitialized(a)),a.persistableViewModels=new n,a._isValid=!1,a._readyCycleForced=!1,a._currentSpatialReference=null,a.handles.add(g.watch((()=>a.preconditionsReady),(t=>{t?(a._currentSpatialReference=a.spatialReference,H.views.add(e._assertThisInitialized(a))):(a._currentSpatialReference=null,H.views.remove(e._assertThisInitialized(a))),a.notifyChange("spatialReference"),!t&&a.ready?(a.toolViewManager?.detach(),null!=a.analysisViewManager&&a.analysisViewManager.detach(),a.layerViewManager?.clear(),a._teardown()):t&&!a.ready&&(a._startup(),null!=a.analysisViewManager&&a.analysisViewManager.attach(),a.toolViewManager.attach())}),g.sync)),a}e._inherits(r,t);var a=r.prototype;return a.initialize=function(){this.addResolvingPromise(this.validate().then((()=>(this._isValid=!0,g.whenOnce((()=>this.ready)))))),this.basemapView=new E.BasemapView({view:this}),this.layerViewManager=new x({view:this,layerViewImporter:{importLayerView:e=>this.importLayerView(e),hasLayerViewModule:e=>this.hasLayerViewModule(e)},supportsGround:this.supportsGround}),this.toolViewManager=new T.ToolViewManager({view:this}),this._setupSpatialReferenceLogger(),this.handles.add([g.watch((()=>this.initialExtentRequired),(e=>this.defaultsFromMap.required={...this.defaultsFromMap.required,extent:e}),{sync:!0,initial:!0}),g.watch((()=>this.ready),(e=>{this.defaultsFromMap&&(this.defaultsFromMap.suspended=e,this.defaultsFromMap.userSpatialReference=e?this.spatialReference:this._userSpatialReference)}),{sync:!0}),g.watch((()=>this._userSpatialReference),(e=>{this.defaultsFromMap&&(this.defaultsFromMap.userSpatialReference=e)}),{sync:!0,initial:!0})])},a._setupSpatialReferenceLogger=function(){let e=null;this.handles.add([g.watch((()=>this.defaultsFromMap?.ready),(t=>{const r=this.map?.allLayers.length>0;if(t&&!this.spatialReference&&r){if(null!=e)return;const t=c.makeHandle((()=>e=h.abortMaybe(e)));e=o.createTask((async t=>{try{await _.after(this.spatialReferenceWarningDelay,null,t)}catch{return}finally{e=null}u.getLogger(this).warn("#spatialReference","no spatial reference could be derived from the currently added map layers")})),this.handles.add(t,"spatial-reference-logger-task")}else this.handles.remove("spatial-reference-logger-task")}),{sync:!0})])},a.destroy=function(){this.destroyed||(H.views.remove(this),this.viewEvents.destroy(),this.allLayerViews.destroy(),this.navigation&&(this.navigation.destroy(),this._set("navigation",null)),this.graphics=h.destroyMaybe(this.graphics),this.analyses=h.destroyMaybe(this.analyses),this.handles.remove("defaultsFromMap"),this.defaultsFromMap.destroy(),this._set("defaultsFromMap",null),h.destroyMaybe(this.analysisViewManager),this.toolViewManager=h.destroyMaybe(this.toolViewManager),this.layerViewManager=h.destroyMaybe(this.layerViewManager),this.basemapView=h.destroyMaybe(this.basemapView),this.groundView?.destroy(),this.layerViews?.forEach((e=>e.destroy())),this.layerViews.length=0,this.invalidate(),this._emitter.clear(),this.handles.removeAll(),this.map=h.destroyMaybe(this.map))},a._startup=function(){this._set("ready",!0)},a._teardown=function(){this._set("ready",!1)},a.whenReady=function(){return Promise.resolve(this)},a.toMap=function(){return u.getLogger(this).error("#toMap()","Not implemented on this instance of View"),null},a._spatialReferenceChanged=function(e){},a.whenLayerView=function(e){return this.layerViewManager?.whenLayerView(e)??Promise.reject()},a.getDefaultSpatialReference=function(){return this.defaultsFromMap?.spatialReference},a.getDefaultHeightModelInfo=function(){return(this.map&&"heightModelInfo"in this.map?this.map.heightModelInfo:void 0)??this.defaultsFromMap?.heightModelInfo??null},a.importLayerView=function(e){throw new l("importLayerView() not implemented")},a.hasLayerViewModule=function(e){return!1},a.validate=async function(){},a.invalidate=function(){this._isValid=!1},a.getSpatialReferenceSupport=function(){return{constraints:null}},a._validateSpatialReference=function(e){return null!=this.getSpatialReferenceSupport({spatialReference:e})},a.when=function(t,a){return this.isResolved()&&!this.ready&&u.getLogger(this).warn("#when()","Calling view.when() while the view is no longer ready but was already resolved once will resolve immediately. Use reactiveUtils.whenOnce(() => view.ready).then(...) instead."),e._get(e._getPrototypeOf(r.prototype),"when",this).call(this,t,a)},a.forceReadyCycle=function(){this.ready&&(g.when((()=>this.destroyed||!1===this.preconditionsReady),(()=>this._readyCycleForced=!1),{once:!0}),this._readyCycleForced=!0)},a.addAndActivateTool=function(e){this.toolViewManager.tools.add(e),this.activeTool=e},a.tryFatalErrorRecovery=function(){this.fatalError=null},e._createClass(r,[{key:"activeTool",get:function(){return this.toolViewManager?.activeTool},set:function(e){this.toolViewManager&&(this.toolViewManager.activeTool=e)}},{key:"animation",get:function(){return this._get("animation")},set:function(e){this._set("animation",e)}},{key:"center",get:function(){return null}},{key:"_defaultsFromMapSettings",get:function(){return{}}},{key:"defaultsFromMap",get:function(){return new D.DefaultsFromMap({required:{tileInfo:!1,heightModelInfo:!1,extent:!1},map:()=>this.map,getSpatialReferenceSupport:e=>this.getSpatialReferenceSupport(e),...this._defaultsFromMapSettings})}},{key:"extent",get:function(){return this._get("extent")},set:function(e){this._set("extent",e)}},{key:"heightModelInfo",get:function(){return this.getDefaultHeightModelInfo()}},{key:"interacting",get:function(){return this.navigating}},{key:"navigating",get:function(){return!1}},{key:"preconditionsReady",get:function(){return!(this.fatalError||!this._isValid||this._readyCycleForced||!this.map||y.isLoadable(this.map)&&!this.map.loaded||0===this.width||0===this.height||!this.spatialReference||!this._validateSpatialReference(this.spatialReference)||!this._currentSpatialReference&&!this.defaultsFromMap?.ready||!this.typeSpecificPreconditionsReady)}},{key:"resolution",get:function(){return 0}},{key:"map",set:function(e){e!==this._get("map")&&(e?.destroyed&&(u.getLogger(this).warn("#map","The provided map is already destroyed",{map:e}),e=null),y.isLoadable(e)&&e.load().catch((()=>{})),this.constructed&&!this.destroyed&&(this.forceReadyCycle(),this._currentSpatialReference=null),this._set("map",e))}},{key:"spatialReference",get:function(){let e=this._userSpatialReference||this._currentSpatialReference||this.getDefaultSpatialReference()||null;return e&&this.defaultsFromMap?.required?.heightModelInfo&&(e=e.clone(),e.vcsWkid=this.defaultsFromMap.vcsWkid,e.latestVcsWkid=this.defaultsFromMap.latestVcsWkid),e},set:function(e){const t=!k.equals(e,this._get("spatialReference"));this._set("_userSpatialReference",e),t&&(this._set("spatialReference",e),this._spatialReferenceChanged(e))}},{key:"stationary",get:function(){return!this.animation&&!this.navigating&&!this.resizing}},{key:"tools",get:function(){return this.toolViewManager?.tools}},{key:"initialExtent",get:function(){return this.defaultsFromMap?.extent}},{key:"cursor",get:function(){const e=this.toolViewManager?this.toolViewManager.cursor:null;return null!=e?e:this._cursor||"default"},set:function(e){this._cursor=e,this.notifyChange("cursor")}},{key:"size",get:function(){return[this.width,this.height]}}]),r}(d.HandleOwnerMixin(p.EventedMixin(f.EsriPromiseMixin(i))));U.views=new n,t.__decorate([w.property()],U.prototype,"_userSpatialReference",void 0),t.__decorate([w.property()],U.prototype,"activeTool",null),t.__decorate([w.property({readOnly:!0})],U.prototype,"allLayerViews",void 0),t.__decorate([w.property()],U.prototype,"groundView",void 0),t.__decorate([w.property()],U.prototype,"animation",null),t.__decorate([w.property()],U.prototype,"basemapView",void 0),t.__decorate([w.property()],U.prototype,"center",null),t.__decorate([w.property({readOnly:!0})],U.prototype,"_defaultsFromMapSettings",null),t.__decorate([w.property()],U.prototype,"defaultsFromMap",null),t.__decorate([w.property()],U.prototype,"fatalError",void 0),t.__decorate([w.property({type:S})],U.prototype,"extent",null),t.__decorate([w.property(R.owningCollectionProperty(O.GraphicsCollection,"graphics"))],U.prototype,"graphics",void 0),t.__decorate([w.property(R.owningCollectionProperty(C.AnalysesCollection,"analyses"))],U.prototype,"analyses",void 0),t.__decorate([w.property({readOnly:!0,type:F})],U.prototype,"heightModelInfo",null),t.__decorate([w.property({readOnly:!0})],U.prototype,"interacting",null),t.__decorate([w.property({readOnly:!0})],U.prototype,"navigating",null),t.__decorate([w.property({readOnly:!0,dependsOn:["fatalError","_isValid","_readyCycleForced","map","map.loaded?","width","height","spatialReference","_currentSpatialReference","defaultsFromMap.ready","typeSpecificPreconditionsReady"]})],U.prototype,"preconditionsReady",null),t.__decorate([w.property({readOnly:!0})],U.prototype,"typeSpecificPreconditionsReady",void 0),t.__decorate([w.property({type:n,readOnly:!0})],U.prototype,"layerViews",void 0),t.__decorate([w.property()],U.prototype,"resolution",null),t.__decorate([w.property({type:I})],U.prototype,"magnifier",void 0),t.__decorate([w.property({value:null,type:r})],U.prototype,"map",null),t.__decorate([w.property()],U.prototype,"padding",void 0),t.__decorate([w.property({readOnly:!0})],U.prototype,"ready",void 0),t.__decorate([w.property({type:b})],U.prototype,"spatialReference",null),t.__decorate([w.property()],U.prototype,"spatialReferenceWarningDelay",void 0),t.__decorate([w.property()],U.prototype,"stationary",null),t.__decorate([w.property({readOnly:!0})],U.prototype,"supportsGround",void 0),t.__decorate([w.property({type:a})],U.prototype,"timeExtent",void 0),t.__decorate([w.property({type:L,nonNullable:!0})],U.prototype,"timeReference",void 0),t.__decorate([w.property()],U.prototype,"tools",null),t.__decorate([w.property()],U.prototype,"toolViewManager",void 0),t.__decorate([w.property({readOnly:!0})],U.prototype,"type",void 0),t.__decorate([w.property({type:Number})],U.prototype,"scale",void 0),t.__decorate([w.property({readOnly:!0})],U.prototype,"updating",void 0),t.__decorate([w.property({readOnly:!0})],U.prototype,"initialExtentRequired",void 0),t.__decorate([w.property({readOnly:!0})],U.prototype,"initialExtent",null),t.__decorate([w.property()],U.prototype,"cursor",null),t.__decorate([w.property({readOnly:!0})],U.prototype,"input",void 0),t.__decorate([w.property({type:z,nonNullable:!0})],U.prototype,"navigation",void 0),t.__decorate([w.property()],U.prototype,"layerViewManager",void 0),t.__decorate([w.property()],U.prototype,"analysisViewManager",void 0),t.__decorate([w.property()],U.prototype,"width",void 0),t.__decorate([w.property()],U.prototype,"height",void 0),t.__decorate([w.property({readOnly:!0})],U.prototype,"resizing",void 0),t.__decorate([w.property({value:null,readOnly:!0})],U.prototype,"size",null),t.__decorate([w.property({readOnly:!0})],U.prototype,"suspended",void 0),t.__decorate([w.property({readOnly:!0})],U.prototype,"viewEvents",void 0),t.__decorate([w.property({readOnly:!0})],U.prototype,"persistableViewModels",void 0),t.__decorate([w.property()],U.prototype,"_isValid",void 0),t.__decorate([w.property()],U.prototype,"_readyCycleForced",void 0),t.__decorate([w.property()],U.prototype,"_currentSpatialReference",void 0),U=H=t.__decorate([V.subclass("esri.views.View")],U);function A(e){return e.layerViews}return U}));