/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","./chunks/_rollupPluginBabelHelpers","./chunks/tslib.es6","./core/Collection","./core/collectionUtils","./core/deprecate","./core/JSONSupport","./core/lang","./core/Loadable","./core/loadAll","./core/Logger","./core/promiseUtils","./core/urlUtils","./core/accessorSupport/decorators/property","./core/accessorSupport/ensureType","./core/accessorSupport/decorators/subclass","./core/accessorSupport/decorators/writer","./geometry/SpatialReference","./portal/Portal","./portal/PortalItem","./support/basemapDefinitions","./webdoc/support/writeUtils"],(function(e,t,r,a,o,s,i,n,l,c,p,u,y,d,h,f,m,b,L,g,w,_){"use strict";var I;let S=0;const v="esri.Basemap";let O=I=function(r){function i(e){var o;(o=r.call(this,e)||this).id=null,o.portalItem=null,o.spatialReference=null,o.thumbnailUrl=null,o.title="Basemap",o.id=Date.now().toString(16)+"-basemap-"+S++,o.baseLayers=new a,o.referenceLayers=new a;const s=e=>{e.parent&&e.parent!==t._assertThisInitialized(o)&&"remove"in e.parent&&e.parent.remove(e),e.parent=t._assertThisInitialized(o),"elevation"===e.type&&p.getLogger(t._assertThisInitialized(o)).error(`Layer '${e.title}, id:${e.id}' of type '${e.type}' is not supported as a basemap layer and will therefore be ignored.`)},i=e=>{e.parent=null};return o.addHandles([o.baseLayers.on("after-add",(e=>s(e.item))),o.referenceLayers.on("after-add",(e=>s(e.item))),o.baseLayers.on("after-remove",(e=>i(e.item))),o.referenceLayers.on("after-remove",(e=>i(e.item)))]),o}t._inherits(i,r);var l=i.prototype;return l.initialize=function(){this.when().catch((e=>{p.getLogger(this).error("#load()",`Failed to load basemap (title: '${this.title}', id: '${this.id}')`,e)})),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)},l.destroy=function(){const e=this.baseLayers.removeAll();for(const r of e)r.destroy();const t=this.referenceLayers.removeAll();for(const r of t)r.destroy();this.baseLayers.destroy(),this.referenceLayers.destroy(),this.portalItem?.destroy(),this.portalItem=null},l.normalizeCtorArgs=function(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e},l._writeBaseLayers=function(e,t,r){const a=[];e?(r={...r,layerContainerType:"basemap"},this.baseLayers.forEach((e=>{const t=_.getLayerJSON(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r);null!=t&&a.push(t)})),this.referenceLayers.forEach((e=>{const t=_.getLayerJSON(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r);null!=t&&("scene"!==e.type&&(t.isReference=!0),a.push(t))})),t.baseMapLayers=a):t.baseMapLayers=a},l.writeTitle=function(e,t){t.title=e||"Basemap"},l.load=function(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)},l.loadAll=function(){return c.loadAll(this,(e=>{e(this.baseLayers,this.referenceLayers)}))},l.clone=function(){const e={id:this.id,title:this.title,portalItem:this.portalItem,baseLayers:this.baseLayers.map((e=>n.isClonable(e)?e.clone():e)),referenceLayers:this.referenceLayers.map((e=>n.isClonable(e)?e.clone():e))};return this.loaded&&(e.loadStatus="loaded"),new I({resourceInfo:this.resourceInfo}).set(e)},l.read=function(e,r){this.resourceInfo||this._set("resourceInfo",{data:e,context:r}),t._get(t._getPrototypeOf(i.prototype),"read",this).call(this,e,r)},l.write=function(e,r){return e=e||{},r&&r.origin||(r={origin:"web-map",...r}),t._get(t._getPrototypeOf(i.prototype),"write",this).call(this,e,r),!this.loaded&&this.resourceInfo&&this.resourceInfo.data.baseMapLayers&&(e.baseMapLayers=this.resourceInfo.data.baseMapLayers.map((e=>{const t=n.clone(e);return t.url&&y.isProtocolRelative(t.url)&&(t.url=`https:${t.url}`),t.templateUrl&&y.isProtocolRelative(t.templateUrl)&&(t.templateUrl=`https:${t.templateUrl}`),t}))),e},l._loadFromSource=async function(e){const{resourceInfo:t,portalItem:r}=this;u.throwIfAborted(e);const a=[];if(t){const r=t.context?t.context.url:null;if(a.push(this._loadLayersFromJSON(t.data,r,e)),t.data.id&&!t.data.title){const e=t.data.id;a.push(w.getBasemapTitle(e).then((e=>{e&&this.read({title:e},t.context)})))}}else r&&a.push(this._loadFromItem(r,e));await Promise.all(a)},l._loadLayersFromJSON=async function(t,r,a){const o=this.resourceInfo&&this.resourceInfo.context,s=this.portalItem&&this.portalItem.portal||o&&o.portal||null,i=T[o?.origin||""]??"web-map",{populateOperationalLayers:n}=await new Promise(((t,r)=>e(["./layers/support/layersCreator"],t,r))),l=[];if(u.throwIfAborted(a),t.baseMapLayers&&Array.isArray(t.baseMapLayers)){const e={context:{origin:i,url:r,portal:s,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},a=e=>"web-scene"===i&&"ArcGISSceneServiceLayer"===e.layerType||e.isReference,o=n(this.baseLayers,t.baseMapLayers.filter((e=>!a(e))),e);l.push(o);const c=n(this.referenceLayers,t.baseMapLayers.filter(a),e);l.push(c)}await u.eachAlways(l)},l._loadFromItem=async function(e,t){const r=await e.load(t),a=await r.fetchData("json",t),o=y.urlToObject(e.itemUrl??"");return this._set("resourceInfo",{data:a.baseMap??{},context:{origin:M[e.type||""]??"web-map",portal:e.portal||L.getDefault(),url:o}}),this.read(this.resourceInfo.data,this.resourceInfo.context),this.read({spatialReference:a.spatialReference},this.resourceInfo.context),this.read({title:e.title,thumbnailUrl:e.thumbnailUrl},{origin:"portal-item",portal:e.portal||L.getDefault(),url:o}),this._loadLayersFromJSON(this.resourceInfo.data,o,t)},i.fromId=function(e){const t=w.esriBasemapDefinitions[e];if(!t)return null;if(t.deprecated){let t=null;"dark-gray"===e?t="dark-gray-vector":"gray"===e?t="gray-vector":"streets"===e?t="streets-vector":"topo"===e&&(t="topo-vector"),s.deprecated(p.getLogger(v),`The ${e} basemap has entered mature support and is no longer being updated.`,{replacement:t,see:"https://arcg.is/1iq8aD",warnOnce:!0})}return I.fromJSON(t)},t._createClass(i,[{key:"baseLayers",set:function(e){this._set("baseLayers",o.referenceSetter(e,this._get("baseLayers")))}},{key:"referenceLayers",set:function(e){this._set("referenceLayers",o.referenceSetter(e,this._get("referenceLayers")))}}]),i}(i.JSONSupportMixin(l));r.__decorate([d.property({json:{write:{ignoreOrigin:!0,target:"baseMapLayers",writer(e,t,r,a){this._writeBaseLayers(e,t,a)}},origins:{"web-scene":{write:{ignoreOrigin:!0,target:{baseMapLayers:{type:a}},writer(e,t,r,a){this._writeBaseLayers(e,t,a)}}}}}})],O.prototype,"baseLayers",null),r.__decorate([d.property({type:String,json:{origins:{"web-scene":{write:!0}}}})],O.prototype,"id",void 0),r.__decorate([d.property({type:g})],O.prototype,"portalItem",void 0),r.__decorate([d.property()],O.prototype,"referenceLayers",null),r.__decorate([d.property({readOnly:!0})],O.prototype,"resourceInfo",void 0),r.__decorate([d.property({type:b})],O.prototype,"spatialReference",void 0),r.__decorate([d.property()],O.prototype,"thumbnailUrl",void 0),r.__decorate([d.property({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],O.prototype,"title",void 0),r.__decorate([m.writer("title")],O.prototype,"writeTitle",null),O=I=r.__decorate([f.subclass(v)],O);const M={"Web Scene":"web-scene","Web Map":"web-map","Link Chart":"link-chart"},T={"web-scene":"web-scene","web-map":"web-map","link-chart":"link-chart"};return O}));
