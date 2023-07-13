/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/Handles","../../../../core/Logger","../../../../core/MapUtils","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/reactiveUtils","../../../../core/scheduling","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../../../geometry/support/aaBoundingRect","../../../../layers/graphics/dehydratedFeatures","../../../../rest/support/QuantizationParameters","../../../../rest/support/Query","../../../ViewingMode","./featureReference","./FeatureTile","../../terrain/tileUtils","../../../support/Scheduler"],(function(e,t,s,i,r,n,a,u,o,l,c,h,d,p,f,_,F,m,y,g,T,x,E,C,b){"use strict";const R="esri.views.3d.layers.support.FeatureTileFetcher3D",v=n.getLogger(R);function D(e){return"dummy-tile-full-extent"===e.id}function M(e){let t=0;for(const s of e)s.features&&s.features.length>0&&s.alive&&(t=Math.max(t,s.descriptor.lij[0]));return t}function w(e){const t=e.capabilities.query;return{supportsMultipleResolutions:O(e),supportsPagination:!(!t||!t.supportsPagination),supportsResultType:!(!t||!t.supportsResultType),supportsCacheHint:!(!t||!t.supportsCacheHint),supportsQuantization:!(!t||!t.supportsQuantization),supportsQuantizationEditMode:!(!t||!t.supportsQuantizationEditMode),supportsMaxRecordCountFactor:!(!t||!t.supportsMaxRecordCountFactor),supportsFormatPBF:!(!t||!t.supportsFormatPBF)}}function O(e){switch(e.geometryType){case"polyline":return!0;case"polygon":return e.capabilities&&e.capabilities.query&&e.capabilities.query.supportsQuantization;default:return!1}}function S(e){return e.setFeatures([],0,null),e.featuresMissing=!1,E.FetchStatus.DONE}function I(e){return null==e?new Set:new Set(e.map((e=>e.name)))}function P(e,t){if(null==e||null==t)return I(t);const s=new Set;for(const{name:i}of t)e.has(i)&&s.add(i);return s}e.FeatureTileFetcher3D=function(e){function s(t){var s;return(s=e.call(this,t)||this)._useTileCount=!1,s.updating=!1,s.running=!1,s.updatingTotal=0,s.updatingRemaining=0,s.expectedFeatureDiff=0,s.maximumNumberOfFeaturesExceeded=!1,s.maximumNumberOfFeaturesExceededThrottle=1e3,s._fullRatio=1,s._farRatio=1,s._changes={updates:{adds:new Array,removes:new Array},adds:new Array,removes:new Array},s._handles=new r,s._frameTask=b.ImmediateTask,s._dirty=!1,s._featureTiles=new Map,s._displayingFeatureReferences=new Map,s._numDisplayingFeatureReferences=0,s._suspended=!0,s._pendingEdits=null,s}t._inherits(s,e);var i=s.prototype;return i.initialize=function(){this._handles.add(l.on((()=>this.tileDescriptors),"change",(()=>this._setDirty()),{onListenerAdd:()=>this._setDirty()})),this._objectIdField=this.context.objectIdField,this.FeatureReferenceClass=this.context.capabilities.supportsMultipleResolutions?x.MultiFeatureReference:x.SingleFeatureReference;const e=this.context.scheduler;null!=e&&(this._frameTask=e.registerTask(b.TaskPriority.FEATURE_TILE_FETCHER,this)),this._setDirty()},i.destroy=function(){this._frameTask.remove(),this._handles=u.destroyMaybe(this._handles),this._featureTiles.forEach((e=>{this._cancelFetchTile(e),this._removeTile(e)})),this._featureTiles.clear(),this._displayingFeatureReferences.clear(),this._pendingEdits?.controller.abort(),this._pendingEdits=null},i.restart=function(){this._featureTiles.forEach((e=>{this._cancelFetchTile(e),this._clearTile(e),this._resetFetchTile(e)})),null!=this.context.memoryCache&&this.context.memoryCache.clear(),this._setDirty()},i.refetch=function(){this._featureTiles.forEach((e=>{this._cancelFetchTile(e),this._resetFetchTile(e)})),null!=this.context.memoryCache&&this.context.memoryCache.clear(),this._setDirty()},i.suspend=function(){this._suspended||(this._suspended=!0,this._pause(),this._setDirty())},i.resume=function(){this._suspended&&(this._suspended=!1,this._unpause())},i._pause=function(){this._paused&&(this._featureTiles.forEach((e=>this._cancelFetchTile(e))),this._updated())},i._unpause=function(){this._paused||(this._setDirty(),this._updated())},i.applyEdits=function(e){this._pendingEdits||(this._pendingEdits={edits:Promise.resolve(),count:0,controller:new AbortController},this._pause());const t=this._pendingEdits;t.count++;const s=t.edits.then((()=>e.result.catch((e=>{if(o.isAbortError(e))throw e;return null})).then((e=>e?(this._applyEditsDeleteFeatures(e.deletedFeatures),this._applyEditsAddUpdateFeatures(e.addedFeatures,e.updatedFeatures,t.controller.signal).then((()=>e))):e)).then((e=>(0==--t.count&&(this._pendingEdits===t&&(this._pendingEdits=null),null!=this.context.memoryCache&&this.context.memoryCache.clear(),this._unpause(),this._updated()),e)))));return t.edits=s,this._updated(),s},i._applyEditsDeleteFeatures=function(e){if(0===e.length)return;const t=this.context.globalIdField,s=t&&this.availableFields.has(t),i=new Set,r=this._objectIdField;e.forEach((({objectId:e,globalId:n})=>{if((!e||e<0)&&t){s||v.errorOncePerTick(`Editing the specified service requires the layer's globalIdField, ${t} to be included the layer's outFields for updates to be reflected in the view`);const e=this.features.find((e=>e.attributes&&e.attributes[t]===n));e&&i.add(m.getObjectId(e,r))}else i.add(e)})),this._featureTiles.forEach((e=>{if(!e.features)return;const t=e.features.filter((e=>!i.has(m.getObjectId(e,this._objectIdField))));t.length!==e.features.length&&(e.setFeatures(t,0,e.availableFields),this._invalidateCounts())}))},i._applyEditsAddUpdateFeatures=async function(e,t,s){const i=[],r=new Set;if(e.forEach((e=>i.push(e.objectId))),t.forEach((e=>{i.push(e.objectId),r.add(e.objectId)})),0===i.length)return;const n=[];this._featureTiles.forEach((e=>{const t=this._applyEditsAddUpdateTile(e,i,r,s);t&&n.push(t)})),await o.eachAlways(n)},i._applyEditsAddUpdateTile=async function(e,t,s,i){if(!e.features)return;const r=this._createQuery(e);r.resultType=void 0,r.cacheHint=!1,r.objectIds=t;const n=await this._queryFeatures(r,i);let a=null;if(s.size>0){const t=e.features.filter((e=>!s.has(m.getObjectId(e,this._objectIdField))));t.length!==e.features.length&&(a=t)}if(n.features.length>0){a||(a=e.features.slice());for(const e of n.features)a.push(e)}a&&(e.hasPreciseFeatureCount&&(e.numFeatures=Math.max(e.numFeatures,a.length)),e.setFeatures(a,0,P(e.availableFields,n.fields)),this._invalidateCounts())},i._queryFeatures=function(e,t){return this.context.query.queryFeaturesDehydrated(e,{signal:t,timeout:U})},i._setDirty=function(){this._dirty=!0,this._updated()},i.runTask=function(e){if(this._frameTask.processQueue(e),!this._dirty||!this.initialized)return;this._dirty=!1;const t=this._getListOfTiles();if(this._markTilesNotAlive(t),!e.run((()=>this._addTiles(t,e)))||!e.run((()=>this._filterExtentTiles(t,e)))||!e.run((()=>this._removeTiles(t,e)))||e.done)return void this._setDirty();const s=this._sortTiles(t);e.run((()=>this._showTiles(s,e)))&&e.run((()=>this._fetchTiles(s,e)))&&e.run((()=>this._updateMemoryEstimates(s,e)))||this._setDirty(),this._updated(),this.updating||this._updateMaximumNumberOfFeaturesExceeded()},i._markTilesNotAlive=function(e){for(const t of e)t.alive=!1},i._addTiles=function(e,t){return!this._suspended&&(this.tileDescriptors.forEach((s=>{const i=this._featureTiles.get(s.id);i?i.alive=!0:t.done||(e.push(this._addTile(s)),t.madeProgress())})),t.hasProgressed)},i._filterExtentTiles=function(e,t){for(const s of e){if(t.done)break;s.alive&&(s.filtered=!s.intersects(this.filterExtent),s.filtered&&(this._clearTile(s),t.madeProgress()))}return t.hasProgressed},i._removeTiles=function(e,t){for(let s=e.length-1;s>=0&&!t.done;s--){const i=e[s];i.alive||(this._removeTile(i),s!==e.length-1&&(e[s]=e[e.length-1]),e.pop(),t.madeProgress())}return t.hasProgressed},i._sortTiles=function(e){return e.sort(((e,t)=>(e.descriptor.loadPriority??0)-(t.descriptor.loadPriority??0))),e},i._showTiles=function(e,t){const s=this._updateRatio(e),i=e=>{const t=this._fullRatio<1?s(e)*this._farRatio:1;return e.reduceFeatures(t,this.memoryFactor,this._objectIdField)&&this._setDirty(),this._showTile(e)};for(const r of e)if(!t.run((()=>i(r)))){this._setDirty();break}return t.hasProgressed},i._fetchTiles=function(e,t){if(this._paused)return!1;let s=!1;for(const i of e){if(!i.needsFetching)continue;const e=null!=this.context.memoryCache?this.context.memoryCache.pop(i.id):null;if(null==e){if(this._needsNumFeatures(i)){const e=new AbortController,r=this._fetchTileCount(i,e.signal);this._handleRequest(i,r,e,(()=>i.numFeatures=E.FAILED_FEATURE_COUNT)),s=!0,t.madeProgress()}if(t.done)return!0}else i.cache=e,this._setDirty(),this._scheduleUpdated(),t.madeProgress()}if(s)return t.hasProgressed;for(const i of e)if(i.needsFetching){const e=new AbortController,s=this._fetchTile(i,e.signal);if(this._handleRequest(i,s,e,(e=>{i.setFeatures([],0,null),this._invalidateCounts(),i.featuresMissing=!1,this.context.logFetchError(v,e)})),t.madeProgress())return!0}return t.hasProgressed},i._updateMemoryEstimates=function(e,t){return e.some((e=>!t.run((()=>e.updateMemoryEstimates()))&&(this._setDirty(),!0))),t.hasProgressed},i._reclip=function(e,t){if(!this.initialized)return;const s=new Array;this._featureTiles.forEach((i=>{null!=i.displayingFeatures&&0!==i.displayingFeatures.length&&(i.intersectionIncludingBorrowed(t,N),i.intersectionIncludingBorrowed(e,k),F.equals(N,k)||s.push(i))})),this._refreshDisplayingFeatures(s),this._updated()},i._refreshDisplayingFeatures=function(e){const t=new Set,s=this._changes.updates;for(const i of e)if(null!=i.displayingFeatures)for(const e of i.displayingFeatures){const i=m.getObjectId(e,this._objectIdField);if(t.has(i))continue;t.add(i);const r=this._displayingFeatureReferences.get(i).feature;s.removes.push(r),s.adds.push(r)}this._applyChanges()},i._updated=function(){let e=0;this._paused||this._featureTiles.forEach((t=>t.isFetching?++e:0));const t=this._dirty||!!this._pendingEdits||e>0;if(this._set("running",this._dirty),this._set("updating",t),t){let t=0,s=0,i=0,r=0,n=0;const a=this._displayingFeatureReferences.size/this._numDisplayingFeatureReferences;this._featureTiles.forEach((e=>{if(++s,e.isFetching&&e.hasPreciseFeatureCount){const t=this._maximumFeaturesForTile(e)*(1-e.emptyFeatureRatio),s=null!=e.displayingFeatures?e.displayingFeatures.length*a:0;n+=t-s}e.needsFetching?++r:e.numFeatures>0&&(++i,t+=e.numFeatures)})),r+=e;let u=0,o=0;t?(o=t,u=Math.min(r*t/i,t)):(o=s,u=r),n=Math.min(this.maximumNumberOfFeatures-this.features.length,n),this._set("updatingTotal",o),this._set("updatingRemaining",u),this._set("expectedFeatureDiff",n)}else this._set("updatingTotal",0),this._set("updatingRemaining",0),this._set("expectedFeatureDiff",0);this.debugger&&this.debugger.update()},i._updateMaximumNumberOfFeaturesExceeded=function(){const e=a.someMap(this._featureTiles,(e=>e.perTileMaximumNumberOfFeaturesExceeded));this._set("maximumNumberOfFeaturesExceeded",e)},i._updateRatio=function(e){const t=M(e),s=e=>1/(1<<Math.max(0,t-e.descriptor.lij[0]));let i=0,r=0;for(const n of e){const e=n.numFeatures;i+=e,r+=e*s(n)}return this._fullRatio=Math.min(1,this.maximumNumberOfFeatures/i),this._farRatio=this.maximumNumberOfFeatures/r,this._scheduleUpdated(),s},i._maximumFeaturesUpdated=function(e,t){e!==t&&(t>e&&this._featureTiles.forEach((e=>{if(!e.featuresMissing)return;const t=this._maximumFeaturesForTile(e);e.features&&(e.features.length>=t||e.fetchStatus===E.FetchStatus.FULL)||(this._cancelFetchTile(e),this._resetFetchTile(e))})),this._setDirty())},i._addTile=function(e){const t=new E.FeatureTile(e);return this._featureTiles.set(t.id,t),this._resetFetchTile(t),this._referenceDisplayingFeaturesFromRelatedTiles(t),t},i._referenceDisplayingFeaturesFromRelatedTiles=function(e){const t=e.descriptor.resolution;this._featureTiles.forEach((s=>{if(!(null==s.displayingFeatures||e===s||e.descriptor.lij&&s.descriptor.lij&&!C.tilesAreRelated(e.descriptor.lij,s.descriptor.lij))){null==e.displayingFeatures&&(e.displayingFeatures=[]),e.descriptor.extent&&s.descriptor.extent&&(null==e.extentIncludingBorrowedFeatures&&(e.extentIncludingBorrowedFeatures=F.clone(e.descriptor.extent)),F.expand(e.extentIncludingBorrowedFeatures,s.descriptor.extent,e.extentIncludingBorrowedFeatures));for(const i of s.displayingFeatures){e.displayingFeatures.push(i);const s=this._displayingFeatureReferences.get(m.getObjectId(i,this._objectIdField));s.ref(s.feature,t),this._numDisplayingFeatureReferences++}}})),e.featureLimit=null!=e.displayingFeatures?e.displayingFeatures.length:0},i._removeTile=function(e){this._clearTile(e),this._featureTiles.delete(e.id)},i._resetFetchTile=function(e){e.filtered=!e.intersects(this.filterExtent),e.filtered?e.needsFetching&&(e.fetchStatus=E.FetchStatus.DONE):e.fetchStatus=E.FetchStatus.FETCH_NEEDED},i._cancelFetchTile=function(e){const t=e.requestController;null!=t&&(e.requestController=null,e.resetFetching(),t.abort())},i._fetchTileCount=async function(e,t){return e.numFeatures=await this._fetchCount(e,t),this._updateRatio(this._getListOfTiles()),e.fetchStatus===E.FetchStatus.REFETCHING?E.FetchStatus.REFETCH_NEEDED:E.FetchStatus.FETCH_NEEDED},i._fetchTile=async function(e,t){const s=this._maximumFeaturesForTile(e);if(s<=0)return S(e);const i=this._getMaxRecordCount(e),r=Math.ceil(s/i);if(D(e)||!this.context.capabilities.supportsMaxRecordCountFactor||e.numFeatures<=s&&r>g.MAX_MAX_RECORD_COUNT_FACTOR)return this._fetchPagedTile(e,t);const n=this._createQuery(e);if(n.maxRecordCountFactor=Math.ceil(s/i),e.isRefetching&&e.features&&e.features.length>0){const t=Math.ceil(e.features.length/(1-e.emptyFeatureRatio)/i);n.maxRecordCountFactor=Math.max(t+1,n.maxRecordCountFactor)}const{features:a,exceededTransferLimit:u,fields:l}=await this._queryFeatures(n,t),c=u?n.maxRecordCountFactor>=g.MAX_MAX_RECORD_COUNT_FACTOR?E.FetchStatus.FULL:E.FetchStatus.DONE:E.FetchStatus.FULL;return await this._frameTask.schedule((()=>{e.featuresMissing=a.length<e.numFeatures||!!u;const t=this._removeEmptyFeatures(a);e.setFeatures(a,t,I(l))}),t),o.throwIfAborted(t),this._invalidateCounts(),c},i._fetchCount=async function(e,t){return this.context.query.queryFeatureCount(this._createFeatureCountQuery(e),{signal:t})},i._fetchPagedTile=async function(e,t){let s,i=0,r=0,n=0,a=this._maximumFeaturesForTile(e)-n;const u=this._getMaxRecordCount(e);let l=null;for(;;){const c=this._createQuery(e),h=this._setPagingParameters(c,i,a,u),{features:d,exceededTransferLimit:p,fields:f}=await this._queryFeatures(c,t);if(await this._frameTask.schedule((()=>{h&&(i+=c.num),n+=d.length,r+=this._removeEmptyFeatures(d),e.featuresMissing=i<e.numFeatures||!!p,s=s?s.concat(d):d,l=P(l,f),e.setFeatures(s,r,l)}),t),o.throwIfAborted(t),this._invalidateCounts(),this._setDirty(),a=this._maximumFeaturesForTile(e)-n,!h||!p||a<=0)return p?E.FetchStatus.DONE:E.FetchStatus.FULL}},i._createFeatureCountQuery=function(e){const t=this._createQuery(e);return this.context.capabilities.supportsCacheHint&&(t.resultType=void 0,t.cacheHint=!0),t},i._createQuery=function(e){const t=this.context.createQuery(),s=e.descriptor.extent;if(s){const e=this.context.tilingScheme.spatialReference;t.geometry=F.toExtent(s,e)}return this._setResolutionParams(t,e),this._useTileQuery(e)?t.resultType="tile":this.context.capabilities.supportsCacheHint&&(t.cacheHint=!0),t},i._setPagingParameters=function(e,t,s,i){return!!this.context.capabilities.supportsPagination&&(e.start=t,s>0&&this.context.capabilities.supportsMaxRecordCountFactor?(e.maxRecordCountFactor=Math.ceil(s/i),e.num=Math.min(e.maxRecordCountFactor*i,s)):e.num=Math.min(i),!0)},i._getEffectiveTileResolution=function(e){if(null==e.descriptor.resolution)return null;const t=this.context.viewingMode===T.ViewingMode.Global?this.context.tilingScheme.resolutionAtLevel(3):1/0;return Math.min(e.descriptor.resolution,t)/this.lodFactor},i._setResolutionParams=function(e,t){if(!this._supportsResolution)return;const s=this._getEffectiveTileResolution(t);null!=s&&(this.context.capabilities.supportsQuantization?e.quantizationParameters=new y({mode:"view",originPosition:"upper-left",tolerance:s,extent:this.context.fullExtent}):"polyline"===this.context.geometryType&&(e.maxAllowableOffset=s))},i._removeEmptyFeatures=function(e){const t=e.length;for(let s=0;s<e.length;){const t=e[s];m.hasVertices(t.geometry)?++s:(e[s]=e[e.length-1],--e.length)}return t-e.length},i._needsNumFeatures=function(e){return this.useTileCount&&e.needsFeatureCount&&!D(e)},i._getMaxRecordCount=function(e){const{tileMaxRecordCount:t,maxRecordCount:s}=this.context;return this._useTileQuery(e)&&null!=t&&t>0&&this.context.capabilities.supportsResultType?t:null!=s&&s>0?s:A},i._useTileQuery=function(e){return(!D(e)||!this.context.capabilities.supportsCacheHint)&&this.context.capabilities.supportsResultType},i._handleRequest=function(e,t,s,i){e.fetchStatus=e.needsRefetching?E.FetchStatus.REFETCHING:E.FetchStatus.FETCHING,e.requestController=s;let r=!1;t.then((t=>{e.requestController=null,e.fetchStatus=t})).catch((t=>{e.requestController===s&&(e.requestController=null,e.fetchStatus=E.FetchStatus.DONE),o.isAbortError(t)?r=!0:i(t)})).then((()=>{r||this._setDirty(),this._scheduleUpdated()}))},i._scheduleUpdated=function(){this._handles&&!this._handles.has("scheduleUpdated")&&this._handles.add(c.schedule((()=>{this._handles.remove("scheduleUpdated"),this._updated()})),"scheduleUpdated")},i._showTile=function(e){if(null!=e.displayingFeatures&&!e.needsDisplayUpdate)return!1;const t=e.features;if(0===e.featureLimit||!t){const t=null!=e.displayingFeatures&&e.displayingFeatures.length>0;return this._hideTileFeatures(e),e.displayingFeatures=[],t}const s=e.descriptor.resolution,i=this._changes.updates,r=this._changes.adds,n=Math.min(e.featureLimit,t.length);e.featureLimit=n;for(let a=0;a<n;++a){const e=t[a],n=m.getObjectId(e,this._objectIdField),u=this._displayingFeatureReferences.get(n);if(u){const t=u.ref(e,s);t.oldVersion!==t.newVersion&&(t.oldVersion&&i.removes.push(t.oldVersion),t.newVersion&&i.adds.push(t.newVersion))}else this._displayingFeatureReferences.set(n,new this.FeatureReferenceClass(e,s)),r.push(e);this._numDisplayingFeatureReferences++}return this._hideTileFeatures(e),this._applyChanges(),e.displayingFeatures=t.slice(0,n),!0},i._hideTile=function(e){this._cancelFetchTile(e),this._hideTileFeatures(e)},i._hideTileFeatures=function(e){if(null==e.displayingFeatures)return;const t=this._changes.updates,s=this._changes.removes;for(const i of e.displayingFeatures){const r=m.getObjectId(i,this._objectIdField),n=this._displayingFeatureReferences.get(r);if(!n)continue;const a=n.unref(e.descriptor.resolution);this._numDisplayingFeatureReferences--,a?a.oldVersion!==a.newVersion&&(null==a.newVersion?(this._displayingFeatureReferences.delete(r),a.oldVersion&&s.push(a.oldVersion)):(t.adds.push(a.newVersion),a.oldVersion&&t.removes.push(a.oldVersion))):console.error("Hiding unreferenced feature")}this._applyChanges(),e.displayingFeatures=null},i._applyChanges=function(){const e=this._changes.updates;e.removes.length>0&&(this.features.removeMany(e.removes),e.removes.length=0),e.adds.length>0&&(this.features.addMany(e.adds),e.adds.length=0);const t=this._changes.adds,s=this._changes.removes,i=Math.min(t.length,s.length);let r=0;for(;r<i;){const e=Math.min(r+j,i);this.features.addMany(t.slice(r,e)),this.features.removeMany(s.slice(r,e)),r=e}t.length>i&&this.features.addMany(0===r?t:t.slice(r)),s.length>i&&this.features.removeMany(0===r?s:s.slice(r)),t.length=0,s.length=0},i._clearTile=function(e){if(this._hideTile(e),e.features&&null!=this.context.memoryCache){const t=16+e.estimatedSize;this.context.memoryCache.put(e.id,e.cache,t)}e.setFeatures(null,0,null),this._invalidateCounts()},i._invalidateCounts=function(){this.notifyChange("totalVertices"),this.notifyChange("totalFeatures"),this.notifyChange("memoryForUnusedFeatures")},i._getListOfTiles=function(){return Array.from(this._featureTiles.values())},i._maximumFeaturesForTile=function(e){const t=e.hasPreciseFeatureCount?e.numFeatures:1/0,s=e.hasPreciseFeatureCount?t:this.maximumNumberOfFeatures,i=this._fullRatio<1?this._farRatio:1;return Math.min(Math.ceil(s*i/(1-e.emptyFeatureRatio)),t)},t._createClass(s,[{key:"maximumNumberOfFeatures",set:function(e){e=e||1/0;const t=this._get("maximumNumberOfFeatures");e===t||e<1||(this._set("maximumNumberOfFeatures",e),this._maximumFeaturesUpdated(t,e))}},{key:"memoryFactor",set:function(e){this.memoryFactor!==e&&(this._set("memoryFactor",e),this._setDirty())}},{key:"lodFactor",set:function(e){this.lodFactor!==e&&(this._set("lodFactor",e),this._supportsResolution&&this.refetch())}},{key:"useTileCount",get:function(){return this._useTileCount&&null!=this.context.query.queryFeatureCount},set:function(e){this._useTileCount=e,this.notifyChange("useTileCount")}},{key:"memoryForUnusedFeatures",get:function(){let e=0;return this._featureTiles.forEach((t=>e+=t.estimatedUnusedSize)),e}},{key:"totalVertices",get:function(){let e=0;return this._featureTiles.forEach((t=>e+=t.numVertices)),e}},{key:"totalFeatures",get:function(){let e=0;return this._featureTiles.forEach((t=>e+=t.numFeatures)),e}},{key:"filterExtent",set:function(e){if(null!=e&&this.context.tilingScheme&&!e.spatialReference.equals(this.context.tilingScheme.spatialReference))return void v.error("#filterExtent=","extent needs to be in the same spatial reference as the tiling scheme");const t=this._get("filterExtent");if(t===e||null!=t&&e&&t.equals(e))return;const s=null!=e?e.clone():null;this._set("filterExtent",s),this._reclip(s,t)}},{key:"_paused",get:function(){return this._suspended||!!this._pendingEdits}},{key:"availableFields",get:function(){let e=null;return this._featureTiles.forEach((t=>{null!=t.displayingFeatures&&0!==t.displayingFeatures.length&&(null==e?e=new Set(t.availableFields):e.forEach((s=>{t.availableFields.has(s)||e.delete(s)})))})),null!=e?e:new Set}},{key:"_supportsResolution",get:function(){return this.context.capabilities.supportsMultipleResolutions&&"point"!==this.context.geometryType}},{key:"storedFeatures",get:function(){return this._getListOfTiles().reduce(((e,t)=>e+(t.features?t.features.length:0)),0)}},{key:"missingTiles",get:function(){return Array.from(this._featureTiles.values()).reduce(((e,t)=>e+(t.needsFetching||t.isFetching?1:0)),0)}},{key:"test",get:function(){return{process:e=>this.runTask(e),getFeatureTileById:e=>this._featureTiles.get(e),forEachFeatureTile:e=>this._featureTiles.forEach(e)}}}]),s}(i),s.__decorate([h.property({constructOnly:!0})],e.FeatureTileFetcher3D.prototype,"features",void 0),s.__decorate([h.property()],e.FeatureTileFetcher3D.prototype,"tileDescriptors",void 0),s.__decorate([h.property({value:1/0})],e.FeatureTileFetcher3D.prototype,"maximumNumberOfFeatures",null),s.__decorate([h.property({value:1})],e.FeatureTileFetcher3D.prototype,"memoryFactor",null),s.__decorate([h.property({value:1})],e.FeatureTileFetcher3D.prototype,"lodFactor",null),s.__decorate([h.property()],e.FeatureTileFetcher3D.prototype,"useTileCount",null),s.__decorate([h.property({readOnly:!0})],e.FeatureTileFetcher3D.prototype,"updating",void 0),s.__decorate([h.property({readOnly:!0})],e.FeatureTileFetcher3D.prototype,"running",void 0),s.__decorate([h.property({readOnly:!0})],e.FeatureTileFetcher3D.prototype,"updatingTotal",void 0),s.__decorate([h.property({readOnly:!0})],e.FeatureTileFetcher3D.prototype,"updatingRemaining",void 0),s.__decorate([h.property({readOnly:!0})],e.FeatureTileFetcher3D.prototype,"expectedFeatureDiff",void 0),s.__decorate([h.property({readOnly:!0})],e.FeatureTileFetcher3D.prototype,"memoryForUnusedFeatures",null),s.__decorate([h.property({readOnly:!0})],e.FeatureTileFetcher3D.prototype,"maximumNumberOfFeaturesExceeded",void 0),s.__decorate([h.property({constructOnly:!0})],e.FeatureTileFetcher3D.prototype,"maximumNumberOfFeaturesExceededThrottle",void 0),s.__decorate([h.property({readOnly:!0})],e.FeatureTileFetcher3D.prototype,"totalVertices",null),s.__decorate([h.property({readOnly:!0})],e.FeatureTileFetcher3D.prototype,"totalFeatures",null),s.__decorate([h.property()],e.FeatureTileFetcher3D.prototype,"filterExtent",null),s.__decorate([h.property({constructOnly:!0})],e.FeatureTileFetcher3D.prototype,"context",void 0),e.FeatureTileFetcher3D=s.__decorate([_.subclass(R)],e.FeatureTileFetcher3D);const A=2e3,N=F.create(),k=F.create(),U=6e5,j=200;e.contextCapabilitiesFromLayer=w,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));