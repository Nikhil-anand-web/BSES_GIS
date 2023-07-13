/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/asyncUtils","../../../core/Collection","../../../core/has","../../../core/Error","../../../core/Handles","../../../core/lang","../../../core/Logger","../../../core/maybe","../../../core/Promise","../../../core/promiseUtils","../../../core/reactiveUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../core/support/WatchUpdatingTracking","../../support/arcgisLayerUrl","../../support/layerUtils","../../../portal/support/geometryServiceUtils","../../../rest/support/StatisticDefinition","../../../views/3d/layers/support/FeatureTileFetcher3D","../../../views/3d/layers/support/FeatureTileFetcher3DDebugger","../../../views/3d/support/debugFlags"],(function(e,t,i,r,a,s,n,o,l,c,u,h,d,p,_,y,m,f,F,g,T,C,x,v,D,E){"use strict";e.FeatureTileController3D=function(i){t._inherits(d,i);var r=d.prototype;function d(t){var r;return(r=i.call(this,t)||this).type="feature-tile-3d",r._watchUpdatingTracking=new F.WatchUpdatingTracking,r.serviceDataExtent=null,r.serviceDataCount=e.FeatureTileController3DConstants.NO_SERVICE_DATA_COUNT,r.vertexLimitExceeded=!1,r.displayFeatureLimit=null,r._suspended=!1,r._tileFetcher=null,r._handles=new l,r._fetchDataInfoPromise=null,r._fetchDataInfoAbortController=null,r._lifeCycleAbortController=new AbortController,r}return r._approximateExtentSizeAtScale=function(e,t){const i=this.layerView.view,r=Math.ceil((i.width/t.pixelSize+i.height/t.pixelSize)/2),a=t.levels[0];return r*((a.tileSize[0]/(a.scale/e)+a.tileSize[1]/(a.scale/e))/2)},r.initialize=function(){this._watchUpdatingTracking.add((()=>this.vertexLimitInfo),(()=>this._watchUpdatingTracking.addPromise(this._updateVertexLimitExceeded(null,this._lifeCycleAbortController.signal)))),this._watchUpdatingTracking.add((()=>this.mode),(()=>this._modeChanged()),_.initial),this.addResolvingPromise(Promise.resolve().then((()=>this._verifyCapabilities())).then((()=>this._watchUpdatingTracking.addPromise(this._fetchServiceDataInfo()))).then((()=>this._initializeTileFetcher())))},r._verifyCapabilities=function(){const e=this.layerView.layer;if("ogc-feature"!==e.type&&!T.getEffectiveLayerCapabilities(e)?.operations.supportsQuery)throw new o("graphicscontroller:query-capability-required","Service requires query capabilities to be used as a feature layer",{layer:e})},r.destroy=function(){this._cancelFetchServiceDataInfo(),this._tileFetcher=h.destroyMaybe(this._tileFetcher),this._handles=h.destroyMaybe(this._handles),this._tilesHandle=h.removeMaybe(this._tilesHandle),this._lifeCycleAbortController=h.abortMaybe(this._lifeCycleAbortController),this._watchUpdatingTracking.destroy(),this._set("_watchUpdatingTracking",null)},r.suspend=function(){this._suspended||(this._suspended=!0,null!=this._tileFetcher&&this._tileFetcher.suspend())},r.resume=function(){this._suspended&&(this._suspended=!1,null!=this._tileFetcher&&this._tileFetcher.resume())},r.restart=function(){const e=()=>{null!=this._tileFetcher&&this._tileFetcher.restart()};this._watchUpdatingTracking.addPromise(this._fetchServiceDataInfo().then(e,e))},r.refetch=function(){const e=()=>{null!=this._tileFetcher&&this._tileFetcher.refetch()};this._watchUpdatingTracking.addPromise(this._fetchServiceDataInfo().then(e,e))},r._initializeTileFetcher=function(){const e=this.layerView.view;if(!e)return;const t=_.whenOnce((()=>e.featureTiles?.tilingScheme),this._lifeCycleAbortController.signal);this._watchUpdatingTracking.addPromise(t),t.then((()=>{const{layerView:t,tileDescriptors:i}=this,r=t.layer,a=new v.FeatureTileFetcher3D({context:this.context,filterExtent:this.extent,tileDescriptors:i,features:this.graphics});this._tileFetcher=a,this._suspended?this._tileFetcher.suspend():this._tileFetcher.resume();const s=this.layerView.view.resourceController;s&&this._handles.add(_.watch((()=>s.memoryController?.memoryFactor),(e=>a.memoryFactor=e),_.syncAndInitial));const n="polygon"===this.context.geometryType?"polygonLodFactor":"polyline"===this.context.geometryType?"polylineLodFactor":null;n&&this._handles.add(_.watch((()=>this.layerView.view?.qualitySettings?.graphics3D?.[n]),(e=>a.lodFactor=e||1),_.initial));const o=e=>{a.maximumNumberOfFeatures=e,a.useTileCount=this.serviceDataCount>e},l=e=>a.useTileCount=e>this.maximumNumberOfFeatures;"ogc-feature"!==r.type&&this._watchUpdatingTracking.add((()=>r.createQueryVersion),(()=>this._dataFilterChanged())),this._watchUpdatingTracking.add((()=>t.availableFields),((e,t)=>this._availableFieldsChanged(t,e))),this._watchUpdatingTracking.add((()=>t.requiredFields),((e,t)=>this._requiredFieldsChanged(t,e))),this._handles.add([r.on("apply-edits",(e=>this._applyEdits(e))),_.watch((()=>this.extent),(e=>a.filterExtent=e),_.sync),_.watch((()=>this.tileDescriptors),(e=>a.tileDescriptors=e),_.sync),_.watch((()=>this.maximumNumberOfFeatures),o,_.syncAndInitial),_.watch((()=>this.serviceDataCount),l,_.syncAndInitial),_.watch((()=>E.FEATURE_TILE_FETCH_SHOW_TILES),(t=>{t&&a&&!a.debugger?(a.debugger=new D.FeatureTileFetcher3DDebugger(a,e.featureTiles.tilingScheme.toTileInfo(),e),a.debugger.update()):!t&&this._tileFetcher&&a.debugger&&(a.debugger.destroy(),a.debugger=null)}),_.syncAndInitial)]),this._supportsExceedsLimitQuery||this._watchUpdatingTracking.add((()=>this.maxTotalSnapshotVertices),(()=>this._watchUpdatingTracking.addPromise(this._updateVertexLimitExceeded(null,this._lifeCycleAbortController.signal))))})).catch((()=>{}))},r._modeChanged=function(){switch(this.mode){case"tiles":this._tilesHandle||(this._tilesHandle=this.layerView.view.featureTiles.addClient());break;default:u.getLogger(this).warn("Unhandled feature layer mode "+this.mode);case"snapshot":null!=this._tilesHandle&&(this._tilesHandle.remove(),this._tilesHandle=null)}},r._dataFilterChanged=function(){this._set("maxTotalSnapshotVertices",0),this.notifyChange("maxTotalSnapshotVertices"),this.refetch()},r._applyEdits=function(e){null!=this._tileFetcher&&this._tileFetcher.applyEdits(e).then((e=>{if(e){if(!this._lifeCycleAbortController)throw p.createAbortError();e.exceededTransferLimit?this.layerView.layer.refresh():(e.deletedFeatures.length||e.updatedFeatures.length||e.addedFeatures.length)&&this._watchUpdatingTracking.addPromise(this._updateServiceDataExtent(this._lifeCycleAbortController.signal))}})).catch((e=>{if(!p.isAbortError(e))throw e}))},r._availableFieldsChanged=function(e,t){null!=this._tileFetcher&&I(this._tileFetcher.availableFields,t)&&this.refetch()},r._requiredFieldsChanged=function(e,t){null!=this._tileFetcher&&I(this._tileFetcher.availableFields,t)&&this.restart()},r._createVertexLimitExceededQuery=function(e){const t=this.layerView.layer,i=t.createQuery();return i.returnGeometry=!1,i.outStatistics=[new x({statisticType:"exceedslimit",maxVertexCount:e,outStatisticFieldName:"exceedslimit",maxPointCount:1e8,maxRecordCount:1e8})],t.capabilities?.query.supportsCacheHint&&(i.cacheHint=!0),i},r._createDataInfoQuery=function(){const e=this.layerView.layer,t=e.createQuery();return t.returnGeometry=!1,t.outSpatialReference=this.layerView.view.spatialReference,e.capabilities?.query.supportsCacheHint&&(t.cacheHint=!0),t},r._fullExtentIsAccurate=function(){const e=this.layerView.layer;if(e.definitionExpression)return!1;switch(e.type){case"feature":case"oriented-imagery":return g.isHostedAgolService(e.url);case"csv":case"geojson":case"ogc-feature":case"wfs":return!0;default:return}},r._updateServiceDataExtent=async function(e){try{await this._tryUpdateServiceDataExtent(e)}catch(t){p.isAbortError(t)||this._set("serviceDataExtent",c.clone(this.layerView.fullExtentInLocalViewSpatialReference))}},r._tryUpdateServiceDataExtent=async function(t){const i=this.layerView,r=i.layer,a=r.capabilities?.query.supportsExtent??!1,s=c.clone(i.fullExtentInLocalViewSpatialReference),n=r.fullExtent,o=this._fullExtentIsAccurate(),l=this.serviceDataCount;if(a&&l<=e.FeatureTileController3DConstants.MAX_FEATURE_COUNT_FOR_EXTENT&&(!s||!o)&&"queryExtent"in r){const i=this._createDataInfoQuery(),a=await r.queryExtent(i,{timeout:e.FeatureTileController3DConstants.QUERY_EXTENT_TIMEOUT,signal:t});this._set("serviceDataExtent",a.extent)}else if(s)this._set("serviceDataExtent",s);else if(null!=n){const e="portalItem"in r?r.portalItem:null,a=await C.projectGeometry(n,i.view.spatialReference,e,t);this._set("serviceDataExtent",a)}else this._set("serviceDataExtent",null)},r._updateServiceDataCount=async function(t){const i=this.layerView.layer;if(!("queryFeatureCount"in i)||!n("featurelayer-snapshot-enabled"))return void this._set("serviceDataCount",e.FeatureTileController3DConstants.NO_SERVICE_DATA_COUNT);const r=await a.result(i.queryFeatureCount(this._createDataInfoQuery(),{timeout:e.FeatureTileController3DConstants.QUERY_STATISTICS_TIMEOUT,signal:t}));if(!0===r.ok)this._set("serviceDataCount",r.value);else{if(p.isAbortError(r.error))throw r.error;this._set("serviceDataCount",e.FeatureTileController3DConstants.NO_SERVICE_DATA_COUNT)}},r._updateVertexLimitExceeded=async function(t,i){const r=this.vertexLimitInfo;if(null==r)return void this._set("vertexLimitExceeded",!1);const s=r.primitivesPerFeature<=0,o=this._minimumNumberOfVerticesForGeometry>1;if(!s&&!o)return void this._set("vertexLimitExceeded",!1);const{primitivesPerFeature:l,primitivesPerCoordinate:c,maximumTotalNumberOfPrimitives:u}=r;let h;0!==l&&null!=t&&await t;const d=this.serviceDataCount,_=d!==e.FeatureTileController3DConstants.NO_SERVICE_DATA_COUNT;if(h=_?Math.ceil((u-d*l)/(c||1)):Math.ceil(u/(c||1)),o&&(h=Math.min(h,O)),_&&this._minimumNumberOfVerticesForGeometry*d>h)return void this._set("vertexLimitExceeded",!0);if(!this._supportsExceedsLimitQuery||!n("featurelayer-snapshot-enabled"))return void this._set("vertexLimitExceeded",this.maxTotalSnapshotVertices>h);const y=await a.result(this.layerView.layer.queryFeatures(this._createVertexLimitExceededQuery(h),{timeout:e.FeatureTileController3DConstants.QUERY_STATISTICS_TIMEOUT,signal:i}));if(!1===y.ok){if(p.isAbortError(y.error))throw y.error;return void this._set("vertexLimitExceeded",!1)}const m=y.value.features[0];m&&m.attributes?this._set("vertexLimitExceeded",!!m.attributes.exceedslimit):this._set("vertexLimitExceeded",!1)},r._fetchServiceDataInfo=async function(){this._cancelFetchServiceDataInfo();let e=new AbortController;const t=e.signal,i=this._updateServiceDataCount(t),r=p.eachAlways([i,this._updateVertexLimitExceeded(i,t)]),a=r.then((()=>this._updateServiceDataExtent(t))).catch((e=>{p.isAbortError(e)||u.getLogger(this).error("#fetchServiceDataInfo()",e)})).then((()=>{a===this._fetchDataInfoPromise&&(this._fetchDataInfoPromise=null,this._fetchDataInfoAbortController=null),e=null}));return e&&(this._fetchDataInfoPromise=a),this._fetchDataInfoAbortController=e,r.then((()=>{}),(()=>{}))},r._cancelFetchServiceDataInfo=function(){const e=this._fetchDataInfoAbortController;e&&(this._fetchDataInfoAbortController=null,this._fetchDataInfoPromise=null,e.abort())},t._createClass(d,[{key:"extent",set:function(e){if(null!=e&&!e.spatialReference.equals(this.layerView.view.spatialReference))return void u.getLogger(this).error("#extent=","extent needs to be in the same spatial reference as the view");const t=this._get("extent");if(t===e)return;if(null!=t&&e&&t.equals(e))return;const i=null!=e?e.clone():null;this._set("extent",i)}},{key:"updating",get:function(){return!!(null!=this._tileFetcher&&this._tileFetcher.updating||null!=this._fetchDataInfoPromise||"tiles"===this.mode&&this.layerView.view.featureTiles&&this.layerView.view.featureTiles.updating||this._watchUpdatingTracking&&this._watchUpdatingTracking.updating)}},{key:"updatingTotal",get:function(){return this.updating&&null!=this._tileFetcher?this._tileFetcher.updatingTotal:0}},{key:"updatingRemaining",get:function(){return this.updating&&null!=this._tileFetcher?this._tileFetcher.updatingRemaining:0}},{key:"expectedFeatureDiff",get:function(){return this.updating&&null!=this._tileFetcher?this._tileFetcher.expectedFeatureDiff:0}},{key:"memoryForUnusedFeatures",get:function(){return null!=this._tileFetcher?this._tileFetcher.memoryForUnusedFeatures:0}},{key:"maximumNumberOfFeaturesExceeded",get:function(){return!(null==this._tileFetcher||!this._tileFetcher.maximumNumberOfFeaturesExceeded)}},{key:"maximumNumberOfFeatures",get:function(){return null!=this.displayFeatureLimit?this.displayFeatureLimit.maximumNumberOfFeatures:0},set:function(e){e!==this.maximumNumberOfFeatures&&this._overrideIfSome("maximumNumberOfFeatures",e)}},{key:"hasMaximumNumberOfFeaturesOverride",get:function(){return this._isOverridden("maximumNumberOfFeatures")}},{key:"mode",get:function(){const t=this.layerView.layer;if("feature"===t.type&&null!=t.infoFor3D)return"snapshot";if(!1===this.layerView.view.qualitySettings?.graphics3D?.snapshotAvailable||this.serviceDataCount===e.FeatureTileController3DConstants.NO_SERVICE_DATA_COUNT||this.vertexLimitExceeded)return"tiles";const i=this.layerView.view,r=i&&i.featureTiles,a=r&&r.tilingScheme;if(t&&t.minScale&&this.serviceDataExtent&&a){const i=this._approximateExtentSizeAtScale(t.minScale,a);if((this.serviceDataExtent.width/i+this.serviceDataExtent.height/i)/2>e.FeatureTileController3DConstants.MAX_SNAPSHOT_MIN_SCALE_FACTOR)return"tiles"}return!this.maximumNumberOfFeatures||this.serviceDataCount<=this.maximumNumberOfFeatures?"snapshot":"tiles"}},{key:"maxTotalSnapshotVertices",get:function(){const e=this._get("maxTotalSnapshotVertices")||0,t="snapshot"===this.mode&&null!=this._tileFetcher&&this._tileFetcher.totalVertices||0;return Math.max(e,t)}},{key:"tileDescriptors",get:function(){return"snapshot"===this.mode?new s([{id:"dummy-tile-full-extent",lij:[0,0,0]}]):this.layerView.view.featureTiles?this.layerView.view.featureTiles.tiles:new s}},{key:"test",get:function(){return{fetchDataInfoPromise:this._fetchDataInfoPromise,tileFetcher:this._tileFetcher}}},{key:"vertexLimitInfo",get:function(){if(null==this.displayFeatureLimit||null==this.displayFeatureLimit.averageSymbolComplexity)return null;const{averageSymbolComplexity:e,maximumTotalNumberOfPrimitives:t}=this.displayFeatureLimit,{primitivesPerCoordinate:i,primitivesPerFeature:r}=e,a=this._get("vertexLimitInfo");return null==a||a.maximumTotalNumberOfPrimitives!==t||a.primitivesPerCoordinate!==i||a.primitivesPerFeature!==r?{primitivesPerCoordinate:i,primitivesPerFeature:r,maximumTotalNumberOfPrimitives:t}:a}},{key:"_supportsExceedsLimitQuery",get:function(){const e=this.layerView.layer;return null!=e.capabilities&&e.capabilities.operations&&e.capabilities.operations.supportsExceedsLimitStatistics}},{key:"_minimumNumberOfVerticesForGeometry",get:function(){switch(this.layerView.layer.geometryType){case"point":case"multipoint":return 1;case"polygon":return 4;case"polyline":return 2;case"multipatch":case"mesh":return 3;default:return 0}}},{key:"debug",get:function(){return{storedFeatures:null!=this._tileFetcher?this._tileFetcher.storedFeatures:0,totalFeatures:null!=this._tileFetcher?this._tileFetcher.totalFeatures:0,totalVertices:null!=this._tileFetcher?this._tileFetcher.totalVertices:0,missingTiles:null!=this._tileFetcher?this._tileFetcher.missingTiles:0}}}]),d}(d.EsriPromiseMixin(r)),i.__decorate([y.property({readOnly:!0})],e.FeatureTileController3D.prototype,"type",void 0),i.__decorate([y.property({constructOnly:!0})],e.FeatureTileController3D.prototype,"graphics",void 0),i.__decorate([y.property({constructOnly:!0})],e.FeatureTileController3D.prototype,"layerView",void 0),i.__decorate([y.property({constructOnly:!0})],e.FeatureTileController3D.prototype,"context",void 0),i.__decorate([y.property()],e.FeatureTileController3D.prototype,"extent",null),i.__decorate([y.property()],e.FeatureTileController3D.prototype,"updating",null),i.__decorate([y.property({readOnly:!0})],e.FeatureTileController3D.prototype,"_watchUpdatingTracking",void 0),i.__decorate([y.property()],e.FeatureTileController3D.prototype,"updatingTotal",null),i.__decorate([y.property()],e.FeatureTileController3D.prototype,"updatingRemaining",null),i.__decorate([y.property()],e.FeatureTileController3D.prototype,"expectedFeatureDiff",null),i.__decorate([y.property()],e.FeatureTileController3D.prototype,"memoryForUnusedFeatures",null),i.__decorate([y.property()],e.FeatureTileController3D.prototype,"maximumNumberOfFeaturesExceeded",null),i.__decorate([y.property({readOnly:!0})],e.FeatureTileController3D.prototype,"serviceDataExtent",void 0),i.__decorate([y.property({readOnly:!0})],e.FeatureTileController3D.prototype,"serviceDataCount",void 0),i.__decorate([y.property({readOnly:!0})],e.FeatureTileController3D.prototype,"vertexLimitExceeded",void 0),i.__decorate([y.property()],e.FeatureTileController3D.prototype,"displayFeatureLimit",void 0),i.__decorate([y.property({type:Number})],e.FeatureTileController3D.prototype,"maximumNumberOfFeatures",null),i.__decorate([y.property({readOnly:!0})],e.FeatureTileController3D.prototype,"mode",null),i.__decorate([y.property({readOnly:!0})],e.FeatureTileController3D.prototype,"maxTotalSnapshotVertices",null),i.__decorate([y.property({readOnly:!0,dependsOn:["mode"]})],e.FeatureTileController3D.prototype,"tileDescriptors",null),i.__decorate([y.property()],e.FeatureTileController3D.prototype,"_tileFetcher",void 0),i.__decorate([y.property()],e.FeatureTileController3D.prototype,"_fetchDataInfoPromise",void 0),i.__decorate([y.property({readOnly:!0})],e.FeatureTileController3D.prototype,"vertexLimitInfo",null),e.FeatureTileController3D=i.__decorate([f.subclass("esri.layers.graphics.controllers.FeatureTileController3D")],e.FeatureTileController3D);const w=1e4,b=12e3,S=1e4,O=5e6;function I(e,t){if(!t)return!1;for(const i of t)if(!e.has(i))return!0;return!1}e.FeatureTileController3DConstants=void 0,function(e){function t(){e.MAX_FEATURE_COUNT_FOR_EXTENT=w,e.QUERY_STATISTICS_TIMEOUT=b,e.QUERY_EXTENT_TIMEOUT=S}e.NO_SERVICE_DATA_COUNT=1/0,e.MAX_SNAPSHOT_MIN_SCALE_FACTOR=5,e.reset=t}(e.FeatureTileController3DConstants||(e.FeatureTileController3DConstants={})),e.FeatureTileController3DConstants.reset(),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));