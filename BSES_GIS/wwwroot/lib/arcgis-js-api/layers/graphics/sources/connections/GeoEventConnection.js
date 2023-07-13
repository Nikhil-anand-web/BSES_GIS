/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../geometry","../../../../request","../../../../core/Error","../../../../core/Logger","../../../../core/promiseUtils","../../../../core/urlUtils","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","./WebSocketConnection","../../../../rest/query/operations/query","../../../../rest/support/Query","../../../../geometry/support/jsonUtils","../../../../geometry/SpatialReference"],(function(e,t,r,n,i,o,s,c,u,a,l,f,h,d,y,g,_,p){"use strict";const m=e=>Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"})),w=1e4,v={maxQueryDepth:5,maxRecordCountFactor:3};let b=function(r){function n(e){var t;return(t=r.call(this,{...v,...e})||this)._buddyServicesQuery=null,t._relatedFeatures=null,t}t._inherits(n,r);var a=n.prototype;return a._open=async function(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||s.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:n}=this._config;this.destroyed||this._setFilter(r,n)},a._onMessage=function(e){if("attributes"in e){let r;try{r=this._enrich(e),null!=this._featureZScaler&&this._featureZScaler(r.geometry)}catch(t){return void s.getLogger(this).error(new o("geoevent-connection","Failed to parse message",t))}this.onFeature(r)}else this.onMessage(e)},a._fetchServiceDefinition=async function(e){const t={f:"json",...this._config.customParameters},r=i(e.path,{query:t,responseType:"json"}),n=(await r).data;return this._serviceDefinition=n,n},a._fetchWebSocketUrl=function(e,t){const r=e[0],{urls:n,token:i}=r,o=this._inferWebSocketBaseUrl(n);return u.addQueryParameters(`${o}/subscribe`,{outSR:""+t.wkid,token:i})},a._inferWebSocketBaseUrl=function(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return s.getLogger(this).error(new o("geoevent-connection","Unable to infer WebSocket url",e)),null},a._setFilter=async function(e,t){const r=this._websocket;if(null==r||null==e&&null==t)return;const n=JSON.stringify({filter:this._serializeFilter(e,t)});let i=!1;const u=c.createResolver(),a=()=>{i||(this.destroyed||this._websocket!==r||s.getLogger(this).error(new o("geoevent-connection","Server timed out when setting filter")),u.reject())},l=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(s.getLogger(this).error(new o("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),u.reject(t.error)),this._setWebSocketJSONParseHandler(r),i=!0,u.resolve())};return r.onmessage=l,r.send(n),setTimeout(a,w),u.promise},a._serializeFilter=function(e,t){const r={};if(null==e&&null==t)return r;if(null!=e&&e.geometry)try{const t=_.fromJSON(e.geometry);if("extent"!==t.type)throw new o(`Expected extent but found type ${t.type}`);r.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(n){s.getLogger(this).error(new o("geoevent-connection","Encountered an error when setting connection geometryDefinition",n))}return null!=e&&e.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(r.where=e.where),null!=t&&(r.outFields=t.join(",")),r},a._enrich=function(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t],n=this._relatedFeatures.get(r);if(!n)return s.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:i,geometry:c}=n;for(const o in i)e.attributes[o]=i[o];return c&&(e.geometry=c),e.geometry||e.centroid||s.getLogger(this).error(new o("geoevent-connection","Found malformed feature - no geometry found",e)),e},a._queryBuddyServices=async function(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),n=this._queryArchive(t);await r;const i=await n;if(!i)return;for(const o of i.features)this.onFeature(this._enrich(o))}catch(e){s.getLogger(this).error(new o("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}},a._queryRelatedFeatures=async function(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)},a._queryArchive=async function(e){if(e)return this._queryBuddy(e.featuresUrl)},a._queryBuddy=async function(t){const r=new((await new Promise(((t,r)=>e(["../../../FeatureLayer"],(e=>t(m(e))),r)))).default)({url:t}),{capabilities:n}=await r.load(),i=n.query.supportsMaxRecordCountFactor,o=n.query.supportsPagination,s=n.query.supportsCentroid,c=this._config.maxRecordCountFactor,u=r.capabilities.query.maxRecordCount,a=i?u*c:u,l=new g;if(l.outFields=this._config.outFields??["*"],l.where=this._config.filter?.where??"1=1",l.returnGeometry=!0,l.returnExceededLimitFeatures=!0,l.outSpatialReference=p.fromJSON(this._config.spatialReference),s&&(l.returnCentroid=!0),i&&(l.maxRecordCountFactor=c),o)return l.num=a,r.destroy(),this._queryPages(t,l);const f=await y.executeQuery(t,l,this._config.sourceSpatialReference);return r.destroy(),f.data},a._queryPages=async function(e,t,r=[],n=0){t.start=null!=t.num?n*t.num:null;const{data:i}=await y.executeQuery(e,t,this._config.sourceSpatialReference);return i.exceededTransferLimit&&n<(this._config.maxQueryDepth??0)?(i.features.forEach((e=>r.push(e))),this._queryPages(e,t,r,n+1)):(r.forEach((e=>i.features.push(e))),i)},a._addRelatedFeatures=function(e){const t=new Map,r=e.features,n=this._serviceDefinition.relatedFeatures.joinField;for(const i of r){const e=i.attributes[n];t.set(e,i)}this._relatedFeatures=t},t._createClass(n)}(d.WebSocketConnection);b=r.__decorate([h.subclass("esri.layers.graphics.sources.connections.GeoEventConnection")],b);return b}));