/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../request","../../../../core/Accessor","../../../../core/arrayUtils","../../../../core/asyncUtils","../../../../core/byteSizeEstimations","../../../../core/Collection","../../../../core/Logger","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/ReactiveSet","../../../../core/reactiveUtils","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../../../intl/number","../../../../layers/support/featureQueryAll","../../../../rest/support/meshFeatureSet","../../../../support/featureFlags","../../../../support/requestUtils","../FeatureLayerView3D"],(function(e,t,r,i,s,n,o,a,d,c,u,l,h,y,p,g,m,_,b,f,O,v,C,I){"use strict";const j="esri.views.3d.layers.i3s.I3SOverrides";e.I3SOverrides=function(e){function r(t){var r;return(r=e.call(this,t)||this)._warnMaximumChangedObjectsExceeded=!1,r._maximumNumberOfEditOVerrides=S,r._original3DOFLDefinitionExpression=null,r._interactiveEditingSessions=new d,r.geometryOverrides=new d,r._clientGeometryCache=new Map,r._associatedLayerView=null,r._attributeChangedObjectIds=new h,r._geometryChangedObjectIds=new h,r._pendingFetchChangedObjectIds=null,r._pendingFetchAbortController=new AbortController,r._pendingAttributeQueriesCache=new Map,r}t._inherits(r,e);var s=r.prototype;return s.initialize=function(){this._memCache=this.memoryController.newCache(`i3s-attribute-overrides-${this.layer.uid}`),this._pendingFetchChangedObjectIds=this._fetchChangedObjectIds(this._pendingFetchAbortController?.signal),this._pendingFetchChangedObjectIds.finally((()=>{this._pendingFetchAbortController=null,this._pendingFetchChangedObjectIds=null})),this.is3DOFL&&null!=this._associatedLayer&&(v.direct3DObjectFeatureLayerDisplayEnabled()?this._associatedLayer.load().then((e=>{this.destroyed||(this._original3DOFLDefinitionExpression=e.definitionExpression,this.addHandles(y.watch((()=>this._definitionExpression),(t=>e.definitionExpression=t),y.initial)),this._associatedLayerView=new I({layer:this._associatedLayer,view:this.view}))})):v.i3sPatchingEnabled())},s.destroy=function(){this.is3DOFL&&null!=this._associatedLayer&&(v.direct3DObjectFeatureLayerDisplayEnabled()?null!=this._associatedLayerView&&(this._associatedLayer.definitionExpression=this._original3DOFLDefinitionExpression):v.i3sPatchingEnabled()),this._set("layer",null),this._memCache=u.destroyMaybe(this._memCache),this._pendingFetchAbortController=u.abortMaybe(this._pendingFetchAbortController),this._pendingFetchChangedObjectIds=null,this._pendingAttributeQueriesCache.clear()},s.featureHasGeometryChanges=function(e){return this._geometryChangedObjectIds.has(e)},s.featureHasAttributeChanges=function(e){return this._attributeChangedObjectIds.has(e)},s.createInteractiveEditSession=function(e){this._attributeChangedObjectIds.add(e);const t=v.sceneLayerEditingEnabled()&&v.i3sPatchingEnabled()&&null!=this.is3DOFL,r=this._interactiveEditingSessions,i=new A(e,{rollback:()=>{r.remove(i)},commit:(r,i)=>{for(const[t,s]of r)this.updateAttributeValue(e,t,s);t&&null!=i&&this.updateGeometry(e,i)}});return r.unshift(i),i},s.applyAttributeOverrides=async function(e,t,r){if(null==t)return;const{loadedAttributes:i,attributeData:s}=t;if(null==i||0===i.length||null==s)return;if(this._pendingFetchChangedObjectIds&&await l.whenOrAbort(this._pendingFetchChangedObjectIds,r),0===this._attributeChangedObjectIds.size)return;const n={loadedAttributes:i,attributeData:s},o=this._getOverridesFromCache(e,n,this._attributeChangedObjectIds),{objectIds:a,fieldNames:d}=o;if(0===a.length||0===d.length)return;const c=await this._queryAttributeOverridesFromAssociatedLayer(a,d,r);null!=c&&this._processOverridesFromAssociatedLayer(e,c,d,n)},s.updateGeometry=function(e,t){this._geometryChangedObjectIds.add(e);const r=this._clientGeometryCache.get(e);if(null!=r&&(this.geometryOverrides.remove(r),this._clientGeometryCache.delete(e)),null!=t){const r={oid:e,mesh:t};this.geometryOverrides.add(r),this._clientGeometryCache.set(e,r)}},s.updateAttributeValue=function(e,t,r){this._attributeChangedObjectIds.add(e),this._cacheAttributeValue(e,t,r)},s.featureAdded=function(e){this.is3DOFL&&v.i3sPatchingEnabled()&&this._geometryChangedObjectIds.add(e),this._attributeChangedObjectIds.add(e)},s._cacheAttributeValue=function(e,t,r){this._memCache.put(this._getAttributeCacheKey(e,t),r,this._memCacheAttributeValueSize(r))},s._getOverridesFromCache=function(e,{loadedAttributes:t,attributeData:r},i){const s=new Set,n=new Array;for(const a of t)n[a.index]=r[a.name];const o=new Set;for(let a=0;a<e.length;a++){const r=e[a];if(i.has(r))for(const e of t){const t=this._attributeFromCache(r,e.index);void 0===t?(s.add(r),o.add(e.name)):n[e.index][a]=t}}return{objectIds:Array.from(s),fieldNames:Array.from(o)}},s._attributeFromCache=function(e,t){const r=this._fromInteractiveEditingSession(e,t);if(void 0!==r)return r;const i=this._getAttributeCacheKey(e,t);return this._memCache.get(i)},s._fromInteractiveEditingSession=function(e,t){if(null!=this._interactiveEditingSessions)for(const r of this._interactiveEditingSessions){if(r.objectId!==e)continue;const i=r.getAttribute(t);if(void 0!==i)return i}},s._getAttributeCacheKey=function(e,t){return`${e}-${t}`},s._queryAttributeOverridesFromAssociatedLayer=async function(e,t,r){if(0===e.length)return null;this._logWarningIfMaximumObjectsExceeded();const{associatedLayer:i}=this.layer;if(null==i)return null;const s=this._pendingAttributeQueriesCache,n=new Array,o=new Map;for(const g of e){const e=s.get(g);if(e)n.push(e);else{const e=l.createResolver();l.ignoreAbortErrors(e.promise),o.set(g,e),s.set(g,e.promise)}}const a=Array.from(o.keys()),d=i.createQuery(),{objectIdField:c}=i,u=[c,...t];d.where="1=1",d.returnGeometry=!1,d.outFields=u,d.cacheHint=!0,d.objectIds=a;const[h,y]=await Promise.all([this._executeBatchQuery(i,a,d,r),Promise.all(n)]).then((e=>(l.throwIfAborted(r),e))).catch((e=>{for(const[t,r]of o)s.delete(t),r.reject(e);throw e})),p=[];for(const l of h)if(l.ok)for(const e of l.value.features){const t=e,r=t.attributes[c];o.get(r)?.resolve(t),s.delete(r),o.delete(r),p.push(t)}for(const l of y)l&&p.push(l);for(const[l,g]of o)s.delete(l),g.resolve(null);return p},s._queryGeometryOverridesFromAssociatedLayer=async function(e,t){if(0===e.length||!this.is3DOFL||!v.i3sPatchingEnabled())return null;this._logWarningIfMaximumObjectsExceeded();const r=this.layer.associatedLayer,{objectIdField:i,globalIdField:s}=r,n=[i,...null!=s?[s]:[]],o=r.createQuery();o.where="1=1",o.returnGeometry=!0,o.outFields=n,o.cacheHint=!0,o.objectIds=e,o.returnZ=r.hasZ,o.returnM=r.hasM;const a=await this._executeBatchQuery(r,e,o,t),d=r.infoFor3D,{spatialReference:c}=r,u=[];for(const l of a){if(!l.ok)continue;const e=l.value,{assetMaps:t,features:r,globalIdFieldName:i}=e;if(null==t)continue;const s=O.assetMapFromAssetMapsJSON(d,t);for(const n of r){const e=O.extractMesh(n,i,c,d,s),t=n;null!=e?(t.geometry=e,u.push(t)):t.geometry=null}}return u},s._logWarningIfMaximumObjectsExceeded=function(){if(!this._warnMaximumChangedObjectsExceeded)return;this._warnMaximumChangedObjectsExceeded=!1;let e=`The number of edited objects that are not yet cached in the scene service exceeds the maximum limit. Attribute changes will only be available for the first ${b.formatNumber(this._maximumNumberOfEditOVerrides)} objects. Please consider re-caching the scene service`;const t=this.layer.portalItem;t&&t.loaded?e+=` (${t.portal.url}/home/item.html?id=${t.id}#settings)`:e+=` (${this.layer.parsedUrl.path})`,c.getLogger(j).warn("#queryOverrides()",this.layer.title,`${e}.`)},s._executeBatchQuery=async function(e,t,r,i){if(0===t.length)return[];const s=f.getMaximumQuerySize(e);t=[...t].sort(((e,t)=>e-t));const a=n.splitIntoChunks(t,s).map((t=>{const s=r.clone();return s.objectIds=t,o.resultOrAbort(f.queryAllJSON(e,s,{signal:i}))}));return Promise.all(a)},s._processOverridesFromAssociatedLayer=function(e,t,r,{loadedAttributes:i,attributeData:s}){const n=this._associatedLayer;if(null==n)return;const o=n.objectIdField,a=r.map((t=>(t in s||(s[t]=new Array(e.length)),s[t]))),d=new Map(i.map((e=>[e.name,e.index]))),c=r.map((e=>d.get(e))),u=new Map(Array.from(e,((e,t)=>[e,t])));for(const l of t){const e=l.attributes[o];for(let t=0;t<r.length;t++){const i=c[t],s=u.get(e),n=l.attributes[r[t]];a[t][s]=n,this._cacheAttributeValue(e,i,n)}}},s._memCacheAttributeValueSize=function(e){return"string"==typeof e?a.estimateStringByteSize(e):a.estimateNumberByteSize()},s._fetchChangedObjectIds=async function(e){const t=this.layer;await t.load({signal:e}),this._geometryChangedObjectIds.clear(),this._attributeChangedObjectIds.clear();const{associatedLayer:r}=t;if(null==r||!r.capabilities?.operations?.supportsChangeTracking)return;const s=this._getFetchChangedObjectIdsServerGen();if(null==s)return;const n=r.layerId,a=this.is3DOFL,d={f:"json",returnIdsOnly:!0,layers:`[${n}]`,returnUpdates:!0,returnDeletes:a,returnInserts:a,layerServerGens:JSON.stringify([{id:n,serverGen:s}])};if(a){const e=r.infoFor3D;d.fieldsToCompare=JSON.stringify({fields:[...Object.values(e.transformFieldRoles),e.sourceHashField]})}const u=await o.result(i(`${r.url}/extractChanges`,{method:"post",query:d,timeout:E,signal:e}));if(!u.ok&&C.isTimeoutError(u.error)){const e=this.layer.title;c.getLogger(j).warn("extractChanges:timeout",e,`${e} could not obtain edited features that are not cached in the scene service. Display of features may not be up to date with the latest edits. Consider re-caching the scene service.`)}if(u.ok&&1===u.value.data?.edits?.length){const t=u.value.data.edits[0],i=t?.objectIds,s=t?.fieldUpdates,n=i?.adds??[],o=i?.updates??[],d=i?.deletes??[],c=[...n,...o,...d],l=a?[...n,...s??o,...d]:[],h=Math.min(this._maximumNumberOfEditOVerrides,c.length);h<c.length&&(this._warnMaximumChangedObjectsExceeded=!0);const y=c.sort(((e,t)=>e-t));for(let e=0;e<h;++e){const t=y[e];this._attributeChangedObjectIds.add(t)}for(const e of l)this._geometryChangedObjectIds.add(e);if(this.is3DOFL&&v.i3sPatchingEnabled()&&this._geometryChangedObjectIds.size>0){const t=await this._queryGeometryOverridesFromAssociatedLayer(Array.from(this._geometryChangedObjectIds),e);if(null!=t)for(const e of t)null!=e.geometry&&this.updateGeometry(e.attributes[r.objectIdField],e.geometry)}}},s._getFetchChangedObjectIdsServerGen=function(){const e=this.layer;if(null!=e.serviceUpdateTimeStamp&&null!=e.serviceUpdateTimeStamp.lastUpdate)return e.serviceUpdateTimeStamp.lastUpdate;const t=e.associatedLayer;return null!=t&&null!=t.serverGens&&null!=t.serverGens.minServerGen?t.serverGens.minServerGen:null},t._createClass(r,[{key:"is3DOFL",get:function(){return v.sceneLayerEditingEnabled()&&null!=this._associatedLayer&&null!=this._associatedLayer.infoFor3D}},{key:"sortedGeometryChangedObjectIds",get:function(){return this.is3DOFL?[...this._geometryChangedObjectIds].sort(((e,t)=>e-t)):[]}},{key:"_associatedLayer",get:function(){return null==this.layer?null:this.layer.associatedLayer}},{key:"hasGeometryChanges",get:function(){return this._geometryChangedObjectIds.size>0}},{key:"_definitionExpression",get:function(){const e=this.sortedGeometryChangedObjectIds;return 0===e.length?"1 = 0":`OBJECTID IN (${e.join(",")})`}},{key:"updating",get:function(){if(!this.is3DOFL)return!1;if(v.direct3DObjectFeatureLayerDisplayEnabled()){return!(null!=this._associatedLayerView)||null!=this._associatedLayerView&&this._associatedLayerView.updating}return v.i3sPatchingEnabled(),!1}},{key:"isEmpty",get:function(){return null==this._pendingFetchChangedObjectIds&&0===this._attributeChangedObjectIds.size&&0===this._geometryChangedObjectIds.size}},{key:"test",get:function(){const e=Array.from(this._attributeChangedObjectIds),t=this._pendingFetchChangedObjectIds,r=this;return{changedObjectIds:e,pendingFetchChangedObjectIds:t,get maximumNumberOfEditOVerrides(){return r._maximumNumberOfEditOVerrides},set maximumNumberOfEditOVerrides(e){r._maximumNumberOfEditOVerrides=e}}}}]),r}(s),r.__decorate([p.property({constructOnly:!0})],e.I3SOverrides.prototype,"view",void 0),r.__decorate([p.property({constructOnly:!0})],e.I3SOverrides.prototype,"layer",void 0),r.__decorate([p.property({readOnly:!0})],e.I3SOverrides.prototype,"is3DOFL",null),r.__decorate([p.property()],e.I3SOverrides.prototype,"_interactiveEditingSessions",void 0),r.__decorate([p.property({readOnly:!0})],e.I3SOverrides.prototype,"sortedGeometryChangedObjectIds",null),r.__decorate([p.property({readOnly:!0})],e.I3SOverrides.prototype,"geometryOverrides",void 0),r.__decorate([p.property()],e.I3SOverrides.prototype,"_clientGeometryCache",void 0),r.__decorate([p.property()],e.I3SOverrides.prototype,"_associatedLayer",null),r.__decorate([p.property()],e.I3SOverrides.prototype,"_associatedLayerView",void 0),r.__decorate([p.property({constructOnly:!0})],e.I3SOverrides.prototype,"memoryController",void 0),r.__decorate([p.property()],e.I3SOverrides.prototype,"_attributeChangedObjectIds",void 0),r.__decorate([p.property()],e.I3SOverrides.prototype,"_geometryChangedObjectIds",void 0),r.__decorate([p.property()],e.I3SOverrides.prototype,"hasGeometryChanges",null),r.__decorate([p.property()],e.I3SOverrides.prototype,"_pendingFetchChangedObjectIds",void 0),r.__decorate([p.property()],e.I3SOverrides.prototype,"_pendingFetchAbortController",void 0),r.__decorate([p.property()],e.I3SOverrides.prototype,"_definitionExpression",null),r.__decorate([p.property()],e.I3SOverrides.prototype,"updating",null),r.__decorate([p.property()],e.I3SOverrides.prototype,"isEmpty",null),e.I3SOverrides=r.__decorate([_.subclass(j)],e.I3SOverrides);let A=function(){function e(e,t){this.objectId=e,this._options=t,this._updates=new Map,this._updatedGeometry=void 0,this._state=F.ACTIVE}var r=e.prototype;return r.getAttribute=function(e){return this._updates.get(e)},r.setAttribute=function(e,t){this.isActive&&this._updates.set(e,t)},r.getGeometry=function(){return this._updatedGeometry},r.setGeometry=function(e){this.isActive&&(this._updatedGeometry=e)},r.rollback=function(){this.isActive&&(this._state=F.ROLLED_BACK,this._options.rollback(),this._updatedGeometry=void 0)},r.commit=function(){this.isActive&&(this._state=F.COMMITTED,this._options.commit(this._updates,this._updatedGeometry),this._updates.clear(),this._updatedGeometry=void 0)},t._createClass(e,[{key:"isActive",get:function(){return this._state===F.ACTIVE}}]),e}();var F;!function(e){e[e.ACTIVE=0]="ACTIVE",e[e.COMMITTED=1]="COMMITTED",e[e.ROLLED_BACK=2]="ROLLED_BACK"}(F||(F={}));const E=1e4,S=5e4;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
