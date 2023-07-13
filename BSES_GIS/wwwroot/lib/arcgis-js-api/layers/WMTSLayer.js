/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../request","../core/arrayUtils","../core/Collection","../core/Error","../core/lang","../core/MultiOriginJSONSupport","../core/object","../core/promiseUtils","../core/reactiveUtils","../core/urlUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","../geometry/Extent","./Layer","./WebTileLayer","./mixins/BlendLayer","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./support/imageBitmapUtils","./support/TileInfo","./support/TileInfoTilemapCache","./support/WMTSLayerInfo","./support/WMTSSublayer","./support/wmtsUtils"],(function(e,t,r,a,i,o,s,n,l,c,p,u,y,d,m,f,h,g,v,_,I,w,L,S,T,M,b,P,x,E,C){"use strict";var U;const O={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},R=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let j=U=function(t){function i(...r){var a;return(a=t.call(this,...r)||this).activeLayer=null,a.copyright="",a.customParameters=null,a.customLayerParameters=null,a.fullExtent=null,a.operationalLayerType="WebTiledLayer",a.resourceInfo=null,a.serviceMode="RESTful",a.sublayers=null,a.type="wmts",a.version="1.0.0",a.addHandles([p.watch((()=>a.activeLayer),((t,r)=>{r&&!a.sublayers?.includes(r)&&(r.layer=null,r.parent=null),t&&(t.layer=e._assertThisInitialized(a),t.parent=e._assertThisInitialized(a))}),p.sync),p.on((()=>a.sublayers),"after-add",(({item:t})=>{t.layer=e._assertThisInitialized(a),t.parent=e._assertThisInitialized(a)}),p.sync),p.on((()=>a.sublayers),"after-remove",(({item:e})=>{e.layer=null,e.parent=null}),p.sync),p.watch((()=>a.sublayers),((t,r)=>{if(r)for(const e of r)e.layer=null,e.parent=null;if(t)for(const i of t)i.layer=e._assertThisInitialized(a),i.parent=e._assertThisInitialized(a)}),p.sync)]),a}e._inherits(i,t);var n=i.prototype;return n.normalizeCtorArgs=function(e,t){return"string"==typeof e?{url:e,...t}:e},n.load=function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(c.throwIfAbortError).then((()=>this._fetchService(e))).catch((e=>{throw c.throwIfAbortError(e),new o("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this)},n.readActiveLayerFromService=function(e,t,r){this.activeLayer||(this.activeLayer=new E);let a=t.layers.find((e=>e.id===this.activeLayer.id));return a||(a=t.layers[0]),this.activeLayer.read(a,r),this.activeLayer},n.readActiveLayerFromItemOrWebDoc=function(e,t){const{templateUrl:r,wmtsInfo:a}=t,i=r?this._getLowerCasedUrlParams(r):null,o=a?.layerIdentifier;let s=null;const n=a?.tileMatrixSet;n&&(Array.isArray(n)?n.length&&(s=n[0]):s=n);const l=i?.format,c=i?.style;return new E({id:o,imageFormat:l,styleId:c,tileMatrixSetId:s})},n.writeActiveLayer=function(e,t,r,a){const i=this.activeLayer;t.templateUrl=this.getUrlTemplate(i.id,i.tileMatrixSetId,i.imageFormat,i.styleId);const o=l.getDeepValue("tileMatrixSet.tileInfo",i);t.tileInfo=o?o.toJSON(a):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:i.id,tileMatrixSet:i.tileMatrixSetId}},n.readCustomParameters=function(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null},n.readServiceMode=function(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"},n.readSublayersFromService=function(e,t,r){return A(t.layers,r)},n.createWebTileLayer=function(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId),a=r?.tileInfo,i=e.fullExtent,o=new x.WMTSLayerInfo({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(o.customLayerParameters=this.customLayerParameters),this.customParameters&&(o.customParameters=this.customParameters),new _({fullExtent:i,urlTemplate:t,tileInfo:a,wmtsInfo:o})},n.fetchTile=async function(e,t,a,i={}){const{signal:o}=i,s=this.getTileUrl(e,t,a),{data:n}=await r(s,{responseType:"image",signal:o});return n},n.fetchImageBitmapTile=async function(e,t,a,i={}){const{signal:o}=i;if(this.fetchTile!==U.prototype.fetchTile){const r=await this.fetchTile(e,t,a,i);return M.createTileBitmap(r,e,t,a,o)}const s=this.getTileUrl(e,t,a),{data:n}=await r(s,{responseType:"blob",signal:o});return M.createTileBitmap(n,e,t,a,o)},n.findSublayerById=function(e){return this.sublayers?.find((t=>t.id===e))},n.getTileUrl=function(e,t,r){const a=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId),i=a?.tileInfo?.lods[e],o=i?i.levelValue||`${i.level}`:`${e}`;let s=this.resourceInfo?"":C.getTileUrlFromResourceUrls({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,o,t,r);if(!s){s=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replaceAll(/\{level\}/gi,o).replaceAll(/\{row\}/gi,`${t}`).replaceAll(/\{col\}/gi,`${r}`)}return s=this._appendCustomLayerParameters(s),s},n.getUrlTemplate=function(e,t,r,a){if(!this.resourceInfo){const r=C.getTileUrlTemplateFromResourceUrls({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,a);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+a+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let i="";return O[r.toLowerCase()]&&(i=O[r.toLowerCase()]),this.url+e+"/"+a+"/"+t+"/{level}/{row}/{col}"+i}return""},n._fetchService=async function(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.includes("?")?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e),C.validateCapabilities(t.data)}catch{const a="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(a,e),C.validateCapabilities(t.data),this.serviceMode=a}catch(r){throw new o("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:r})}}this.resourceInfo?t.data=C.parseResourceInfo(t.data):t.data=C.parseCapabilities(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})},n._getCapabilities=async function(e,t){const a=this._getCapabilitiesUrl(e);return await r(a,{...t,responseType:"text"})},n._getTileMatrixSetById=function(e){const t=this.findSublayerById(this.activeLayer.id),r=t?.tileMatrixSets?.find((t=>t.id===e));return r},n._appendCustomParameters=function(e){return this._appendParameters(e,this.customParameters)},n._appendCustomLayerParameters=function(e){return this._appendParameters(e,{...s.clone(this.customParameters),...this.customLayerParameters})},n._appendParameters=function(e,t){const r=u.urlToObject(e),a={...r.query,...t},i=u.objectToQuery(a);return""===i?r.path:`${r.path}?${i}`},n._getCapabilitiesUrl=function(e){this.url=this.url.split("?")[0];const t="KVP"===e?`${this.url}?request=GetCapabilities&service=WMTS&version=${this.version}`:`${this.url}/${this.version}/WMTSCapabilities.xml`;return this._appendCustomParameters(t)},n._getLowerCasedUrlParams=function(e){if(!e)return null;const t=u.urlToObject(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e]})),r},n._mergeParams=function(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?s.clone(e):{},t.forEach((t=>{e.hasOwnProperty(t)||R.has(t)||(e[t]=r[t])})))}return e},e._createClass(i,[{key:"fullExtents",get:function(){return this.activeLayer.fullExtents}},{key:"supportedSpatialReferences",get:function(){return this.activeLayer.tileMatrixSets?.map((e=>e.tileInfo?.spatialReference)).toArray().filter(a.isSome)??[]}},{key:"tilemapCache",get:function(){const e=this.activeLayer?.tileMatrixSet?.tileInfo;return e?new P(e):void 0}},{key:"title",get:function(){return this.activeLayer?.title??"Layer"},set:function(e){this._overrideIfSome("title",e)}},{key:"url",get:function(){return this._get("url")},set:function(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}}]),i}(I.BlendLayer(S.RefreshableLayer(T.ScaleRangeLayer(w.OperationalLayer(L.PortalLayer(n.MultiOriginJSONMixin(v)))))));function A(e,t){return e.map((e=>{const r=new E;return r.read(e,t),r}))}t.__decorate([y.property()],j.prototype,"dimensionMap",void 0),t.__decorate([y.property()],j.prototype,"layerMap",void 0),t.__decorate([y.property({type:E,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],j.prototype,"activeLayer",void 0),t.__decorate([m.reader("service","activeLayer",["layers"])],j.prototype,"readActiveLayerFromService",null),t.__decorate([m.reader(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],j.prototype,"readActiveLayerFromItemOrWebDoc",null),t.__decorate([h.writer(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:b},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],j.prototype,"writeActiveLayer",null),t.__decorate([y.property({type:String,value:"",json:{write:!0}})],j.prototype,"copyright",void 0),t.__decorate([y.property({type:["show","hide"]})],j.prototype,"listMode",void 0),t.__decorate([y.property({json:{read:!0,write:!0}})],j.prototype,"blendMode",void 0),t.__decorate([y.property({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],j.prototype,"customParameters",void 0),t.__decorate([m.reader(["portal-item","web-document"],"customParameters")],j.prototype,"readCustomParameters",null),t.__decorate([y.property({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],j.prototype,"customLayerParameters",void 0),t.__decorate([y.property({type:g,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],j.prototype,"fullExtent",void 0),t.__decorate([y.property({readOnly:!0})],j.prototype,"fullExtents",null),t.__decorate([y.property({type:["WebTiledLayer"]})],j.prototype,"operationalLayerType",void 0),t.__decorate([y.property()],j.prototype,"resourceInfo",void 0),t.__decorate([y.property()],j.prototype,"serviceMode",void 0),t.__decorate([m.reader(["portal-item","web-document"],"serviceMode",["templateUrl"])],j.prototype,"readServiceMode",null),t.__decorate([y.property({type:i.ofType(E)})],j.prototype,"sublayers",void 0),t.__decorate([m.reader("service","sublayers",["layers"])],j.prototype,"readSublayersFromService",null),t.__decorate([y.property({readOnly:!0})],j.prototype,"supportedSpatialReferences",null),t.__decorate([y.property({readOnly:!0})],j.prototype,"tilemapCache",null),t.__decorate([y.property({json:{read:{source:"title"}}})],j.prototype,"title",null),t.__decorate([y.property({json:{read:!1},readOnly:!0,value:"wmts"})],j.prototype,"type",void 0),t.__decorate([y.property({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],j.prototype,"url",null),t.__decorate([y.property()],j.prototype,"version",void 0),j=U=t.__decorate([f.subclass("esri.layers.WMTSLayer")],j);return j}));
