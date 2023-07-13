/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../geometry","../../../core/has","../../../core/Loadable","../../../core/promiseUtils","../../../core/workers/workers","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass","../../../rest/support/FeatureSet","../../../geometry/Extent"],(function(e,t,o,r,n,i,s,a,c,u,l,p,d,y){"use strict";e.CSVSource=function(e){function o(t){var o;return(o=e.call(this,t)||this).type="csv",o.refresh=s.debounce((async e=>{await o.load();const{extent:t,timeExtent:r}=await o._connection.invoke("refresh",e);return t&&(o.sourceJSON.extent=t),r&&(o.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:o.sourceJSON.extent,timeInfo:o.sourceJSON.timeInfo}}})),o}t._inherits(o,e);var r=o.prototype;return r.load=function(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)},r.destroy=function(){this._connection?.close(),this._connection=null},r.openPorts=async function(){return await this.load(),this._connection.openPorts()},r.queryFeatures=async function(e,t={}){await this.load(t);const o=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return d.fromJSON(o)},r.queryFeaturesJSON=async function(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)},r.queryFeatureCount=async function(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)},r.queryObjectIds=async function(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)},r.queryExtent=async function(e,t={}){await this.load(t);const o=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:o.count,extent:y.fromJSON(o.extent)}},r.querySnapping=async function(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)},r._startWorker=async function(e){this._connection=await a.open("CSVSourceWorker",{strategy:n("feature-layers-workers")?"dedicated":"local",signal:e});const{url:t,delimiter:o,fields:r,latitudeField:i,longitudeField:s,spatialReference:c,timeInfo:u}=this.loadOptions,l=await this._connection.invoke("load",{url:t,customParameters:this.customParameters,parsingOptions:{delimiter:o,fields:r?.map((e=>e.toJSON())),latitudeField:i,longitudeField:s,spatialReference:c?.toJSON(),timeInfo:u?.toJSON()}},{signal:e});this.locationInfo=l.locationInfo,this.sourceJSON=l.layerDefinition,this.delimiter=l.delimiter},t._createClass(o)}(i),o.__decorate([c.property()],e.CSVSource.prototype,"type",void 0),o.__decorate([c.property()],e.CSVSource.prototype,"loadOptions",void 0),o.__decorate([c.property()],e.CSVSource.prototype,"customParameters",void 0),o.__decorate([c.property()],e.CSVSource.prototype,"locationInfo",void 0),o.__decorate([c.property()],e.CSVSource.prototype,"sourceJSON",void 0),o.__decorate([c.property()],e.CSVSource.prototype,"delimiter",void 0),e.CSVSource=o.__decorate([p.subclass("esri.layers.graphics.sources.CSVSource")],e.CSVSource),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
