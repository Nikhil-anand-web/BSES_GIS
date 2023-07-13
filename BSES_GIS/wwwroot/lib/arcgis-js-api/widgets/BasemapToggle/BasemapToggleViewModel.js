/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/compilerUtils","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/cast","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../../geometry/projection","../../geometry/support/spatialReferenceUtils","../../support/basemapDefinitions","../../support/basemapUtils"],(function(e,t,a,n,i,s,r,o,p,c,l,u,d){"use strict";let m=function(t){function a(e){var a;return(a=t.call(this,e)||this)._basemapCache={},a._loadingProjectionEngine=!1,a.nextBasemap=d.ensureType("hybrid",a._basemapCache),a.view=null,a}e._inherits(a,t);var s=a.prototype;return s.initialize=function(){i.watch((()=>this.nextBasemap),(e=>{e&&!e.loaded&&e.load().catch((()=>{}))}),i.initial)},s.destroy=function(){this.view=null,d.destroyCache(this._basemapCache),this._basemapCache=null},s.castNextBasemap=function(e){return d.ensureType(e,this._basemapCache)},s.toggle=async function(){const{activeBasemap:e,nextBasemap:t,state:a,view:n}=this;if(!n||"disabled"===a||"incompatible-next-basemap"===a)return;const s=this._viewSpatialReferenceLocked;if(!s){if(await i.whenOnce((()=>!this._nextBasemapSpatialReferenceTask.updating)),t!==this.nextBasemap||e!==this.activeBasemap)return;const{spatialReference:a}=this._nextBasemapSpatialReferenceTask;if(null==a||l.equals(n.spatialReference,a)||c.isLoaded()||c.canProjectWithoutEngine(n.spatialReference,a)||(this._loadingProjectionEngine=!0,await c.load(),this._loadingProjectionEngine=!1),t!==this.nextBasemap||e!==this.activeBasemap)return}n.map.basemap=t,s||null==this._nextBasemapSpatialReferenceTask.spatialReference||l.equals(n.spatialReference,this._nextBasemapSpatialReferenceTask.spatialReference)||(n.spatialReference=this._nextBasemapSpatialReferenceTask.spatialReference),this.nextBasemap=e},a.getThumbnailUrl=function(e){if(!e)return null;const{thumbnailUrl:t}=e;if(t)return t;const a=d.getWellKnownBasemapId(e);if(a)return u.esriBasemapDefinitions[a].thumbnailUrl;const i=e.baseLayers.find((e=>!!n.typeCast(e)().get("portalItem.thumbnailUrl")));return i?n.typeCast(i)().get("portalItem.thumbnailUrl"):null},e._createClass(a,[{key:"_nextBasemapSpatialReferenceTask",get:function(){return d.findSpatialReference(this.view,this.nextBasemap)}},{key:"_viewSpatialReferenceLocked",get:function(){const{view:e}=this;return!e||!("spatialReferenceLocked"in e)||e.spatialReferenceLocked}},{key:"activeBasemap",get:function(){return d.ensureType(this.view?.map?.basemap??"topo-vector",this._basemapCache)}},{key:"state",get:function(){const{view:e}=this;if(!e?.ready)return"disabled";if(this._nextBasemapSpatialReferenceTask.updating)return"disabled";const{spatialReference:t}=this._nextBasemapSpatialReferenceTask;return this._viewSpatialReferenceLocked&&null!=t&&!e.spatialReference.equals(t)?"incompatible-next-basemap":this._loadingProjectionEngine?"loading":"ready"}}]),a}(a);t.__decorate([s.property()],m.prototype,"_loadingProjectionEngine",void 0),t.__decorate([s.property({readOnly:!0})],m.prototype,"_nextBasemapSpatialReferenceTask",null),t.__decorate([s.property({readOnly:!0})],m.prototype,"_viewSpatialReferenceLocked",null),t.__decorate([s.property({readOnly:!0})],m.prototype,"activeBasemap",null),t.__decorate([s.property()],m.prototype,"nextBasemap",void 0),t.__decorate([r.cast("nextBasemap")],m.prototype,"castNextBasemap",null),t.__decorate([s.property({readOnly:!0})],m.prototype,"state",null),t.__decorate([s.property()],m.prototype,"view",void 0),t.__decorate([s.property()],m.prototype,"toggle",null),m=t.__decorate([p.subclass("esri.widgets.BasemapToggle.BasemapToggleViewModel")],m);return m}));
