/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../geometry","../../../../core/Accessor","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../../../geometry/Extent","../../../../layers/graphics/data/QueryEngine","../../../../rest/support/FeatureSet","../../../../rest/support/Query","../../../../geometry/support/typeUtils"],(function(e,t,r,n,u,a,s,o,i,y,c,l,p,h,f){"use strict";const g=l.QueryEngine;e.QueryEngine=function(e){function r(t){var r;return(r=e.call(this,t)||this)._dataQueryEngineInstance=null,r}t._inherits(r,e);var n=r.prototype;return n.destroy=function(){this.clear()},n.clear=function(){return!!this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null,!0)},n.executeQueryForIdSet=async function(e,t,r){return this._dataQueryEngine.executeQueryForIdSet(this._ensureQueryJSON(e,t),r)},n.executeQueryForCount=async function(e,t){return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),t)},n.executeQueryForExtent=async function(e,t){const{count:r,extent:n}=await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),t);return{count:r,extent:c.fromJSON(n)}},n.executeQueryForIds=async function(e,t){return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),t)},n.executeQueryForLatestObservations=async function(e,t){const r=await this._dataQueryEngine.executeQueryForLatestObservations(this._ensureQueryJSON(e),t),n=p.fromJSON(r);return n.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),n},n.executeQuery=async function(e,t){const r=await this._dataQueryEngine.executeQuery(this._ensureQueryJSON(e),t),n=p.fromJSON(r);return n.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),n},n._ensureQueryJSON=function(e,t){let r=this.defaultQueryJSON;if(null!=e&&("outSpatialReference"in e&&!e.outSpatialReference&&(e.outSpatialReference=this.spatialReference),r=e.toJSON()),null!=t){const e=t.geometries.map((e=>e.toJSON())).reduce(((e,t)=>(e.rings=e.rings.concat(t.rings),e)));r={...r,sceneFilter:{...t,geometry:e}}}return r},n._ensureDataQueryEngine=function(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e="timeInfo"in this.layer&&this.layer.timeInfo&&this.layer.timeInfo.toJSON()||null,t=this.layer.objectIdField,r=f.featureGeometryTypeKebabDictionary.toJSON(this._queryGeometryType),n=this.layer.fields?.map((e=>e.toJSON()))??[],u=this.priority,a=this.spatialReference.toJSON(),{hasZ:s,hasM:o,featureStore:i,scheduler:y}=this.context;return this._dataQueryEngineInstance=new g({hasZ:s,hasM:o,geometryType:r,fields:n,timeInfo:e,spatialReference:a,objectIdField:t,featureStore:i,scheduler:y,priority:u}),this._dataQueryEngineInstance},t._createClass(r,[{key:"layer",get:function(){return this.context.layer}},{key:"spatialReference",get:function(){return this.context.spatialReference}},{key:"_queryGeometryType",get:function(){switch(this.layer.geometryType){case"multipoint":case"point":case"polygon":case"polyline":return this.layer.geometryType;case"mesh":return"polygon";default:return}}},{key:"defaultQueryJSON",get:function(){return new h({outSpatialReference:this.spatialReference}).toJSON()}},{key:"_dataQueryEngine",get:function(){return this._ensureDataQueryEngine()}}]),r}(u),r.__decorate([a.property({constructOnly:!0})],e.QueryEngine.prototype,"context",void 0),r.__decorate([a.property({constructOnly:!0})],e.QueryEngine.prototype,"priority",void 0),r.__decorate([a.property()],e.QueryEngine.prototype,"layer",null),r.__decorate([a.property()],e.QueryEngine.prototype,"spatialReference",null),r.__decorate([a.property()],e.QueryEngine.prototype,"_queryGeometryType",null),r.__decorate([a.property()],e.QueryEngine.prototype,"defaultQueryJSON",null),e.QueryEngine=r.__decorate([y.subclass("esri.views.3d.layers.graphics.QueryEngine")],e.QueryEngine),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));