/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../request","../core/asyncUtils","../core/Error","../core/lang","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","../geometry/Extent","../geometry/SpatialReference","./Layer","./mixins/APIKeyMixin","./mixins/ArcGISCachedService","./mixins/ArcGISService","./mixins/BlendLayer","./mixins/CustomParametersMixin","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/ScaleRangeLayer","./support/imageUtils","./support/SpriteSource","./support/TileInfo","./support/TilemapCache","./support/vectorTileLayerLoader","../portal/support/jsonContext","../portal/support/urlUtils","../chunks/persistableUrlUtils","../views/2d/engine/vectorTiles/tileInfoUtils","../views/2d/engine/vectorTiles/style/StyleRepository","../views/webgl/capabilities"],(function(e,t,r,o,i,s,a,n,l,p,c,y,u,d,h,S,_,f,m,g,v,b,w,T,I,L,P,O,U,x,R,M,C,k,j,A){"use strict";let D=function(t){function a(...e){var r;return(r=t.call(this,...e)||this)._spriteSourceMap=new Map,r.currentStyleInfo=null,r.style=null,r.isReference=null,r.operationalLayerType="VectorTileLayer",r.tilemapCache=null,r.type="vector-tile",r.url=null,r.showCollisionBoxes="none",r.path=null,r}e._inherits(a,t);var p=a.prototype;return p.normalizeCtorArgs=function(e,t){return"string"==typeof e?{url:e,...t}:e},p.destroy=function(){if(this.sourceNameToSource)for(const e of Object.values(this.sourceNameToSource))e?.destroy();this.primarySource?.destroy(),this._spriteSourceMap.clear()},p.prefetchResources=async function(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)},p.load=function(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(n.throwIfAbortError).then((async()=>{if(!this.portalItem||!this.portalItem.id)return;const t=`${this.portalItem.itemCdnUrl}/resources/styles/root.json`;(await r(t,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:t},R.createForItemRead(this.portalItem))})).catch(n.throwIfAbortError).then((()=>this._loadStyle(e)));return this.addResolvingPromise(t),Promise.resolve(this)},p.writeStyleUrl=function(e,t){e&&l.isProtocolRelative(e)&&(e=`https:${e}`);const r=M.parseKnownArcGISOnlineDomain(e);t.styleUrl=C.ensureMainOnlineDomain(e,r)},p.readTilemapCache=function(e,t){const r=t.capabilities?.includes("Tilemap");return r?new U.TilemapCache({layer:this}):null},p.readVersion=function(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)},p.loadSpriteSource=async function(e=1,t){if(!this._spriteSourceMap.has(e)){const r=A.getWebGLCapabilities("2d").maxTextureSize,o=this.currentStyleInfo?.spriteUrl?l.addQueryParameters(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,i=new P({type:"url",spriteUrl:o,pixelRatio:e,spriteFormat:this.currentStyleInfo?.spriteFormat},r);await i.load(t),this._spriteSourceMap.set(e,i)}return this._spriteSourceMap.get(e)},p.setSpriteSource=async function(e,t){if(!e)return null;const r=A.getWebGLCapabilities("2d").maxTextureSize,o=e.spriteUrl,i=o?l.addQueryParameters(o,{...this.customParameters,token:this.apiKey}):null;if(!i&&"url"===e.type)return null;const s=new P(e,r);try{await s.load(t);const r=e.pixelRatio||1;return this._spriteSourceMap.clear(),this._spriteSourceMap.set(r,s),i&&this.currentStyleInfo&&(this.currentStyleInfo.spriteUrl=i),this.emit("spriteSource-change",{spriteSource:s}),s}catch(a){n.throwIfAbortError(a)}return null},p.loadStyle=async function(e,t){const r=e||this.style||this.url;return this._loadingTask&&"string"==typeof r&&this.url===r||(this._loadingTask?.abort(),this._loadingTask=o.createTask((e=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(r,{signal:e}))),t)),this._loadingTask.promise},p.getStyleLayerId=function(e){return this.styleRepository.getStyleLayerId(e)},p.getStyleLayerIndex=function(e){return this.styleRepository.getStyleLayerIndex(e)},p.getPaintProperties=function(e){return s.clone(this.styleRepository.getPaintProperties(e))},p.setPaintProperties=function(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const o=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||o})},p.getStyleLayer=function(e){return s.clone(this.styleRepository.getStyleLayer(e))},p.setStyleLayer=function(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})},p.deleteStyleLayer=function(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})},p.getLayoutProperties=function(e){return s.clone(this.styleRepository.getLayoutProperties(e))},p.setLayoutProperties=function(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})},p.setStyleLayerVisibility=function(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})},p.getStyleLayerVisibility=function(e){return this.styleRepository.getStyleLayerVisibility(e)},p.write=function(t,r){return r?.origin&&!this.styleUrl?(r.messages&&r.messages.push(new i("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):e._get(e._getPrototypeOf(a.prototype),"write",this).call(this,t,r)},p.getTileUrl=function(e,t,r){return null},p._getSourceAndStyle=async function(e,t){if(!e)throw new Error("invalid style!");const r=await x.loadMetadata(e,{...t,query:{...this.customParameters,token:this.apiKey}});if("webp"===r.spriteFormat){await L.checkWebPSupport("lossy")||(r.spriteFormat="png")}this._set("currentStyleInfo",{...r}),"string"==typeof e?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new j(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")},p._getDefaultAttribution=function(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const o=t[2]&&t[2].toLowerCase();if(!o)return;const i=t[1]||"";for(const s of r)if(s.toLowerCase().includes(o))return l.normalize(`//static.arcgis.com/attribution/Vector${i}/${s}`)},p._loadStyle=async function(e){return this._loadingTask?.promise??this.loadStyle(null,e)},e._createClass(a,[{key:"attributionDataUrl",get:function(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&l.urlToObject(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?l.addQueryParameters(r,{...this.customParameters,token:this.apiKey}):null}},{key:"capabilities",get:function(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}},{key:"fullExtent",get:function(){return this.primarySource?.fullExtent||null}},{key:"parsedUrl",get:function(){return this.serviceUrl?l.urlToObject(this.serviceUrl):null}},{key:"serviceUrl",get:function(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}},{key:"spatialReference",get:function(){return this.tileInfo?.spatialReference??null}},{key:"styleUrl",get:function(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}},{key:"tileInfo",get:function(){const e=[];for(const r in this.sourceNameToSource)e.push(this.sourceNameToSource[r]);let t=this.primarySource?.tileInfo||new O;if(e.length>1)for(let r=0;r<e.length;r++)k.areSchemasOverlapping(t,e[r].tileInfo)&&(t=k.unionTileInfos(t,e[r].tileInfo));return t}}]),a}(v.BlendLayer(I.ScaleRangeLayer(m.ArcGISCachedService(g.ArcGISService(w.OperationalLayer(T.PortalLayer(b.CustomParametersMixin(f.APIKeyMixin(a.MultiOriginJSONMixin(_))))))))));t.__decorate([p.property({readOnly:!0})],D.prototype,"attributionDataUrl",null),t.__decorate([p.property({type:["show","hide"]})],D.prototype,"listMode",void 0),t.__decorate([p.property({json:{read:!0,write:!0}})],D.prototype,"blendMode",void 0),t.__decorate([p.property({readOnly:!0,json:{read:!1}})],D.prototype,"capabilities",null),t.__decorate([p.property({readOnly:!0})],D.prototype,"currentStyleInfo",void 0),t.__decorate([p.property({json:{read:!1},readOnly:!0,type:h})],D.prototype,"fullExtent",null),t.__decorate([p.property()],D.prototype,"style",void 0),t.__decorate([p.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],D.prototype,"isReference",void 0),t.__decorate([p.property({type:["VectorTileLayer"]})],D.prototype,"operationalLayerType",void 0),t.__decorate([p.property({readOnly:!0})],D.prototype,"parsedUrl",null),t.__decorate([p.property({readOnly:!0})],D.prototype,"serviceUrl",null),t.__decorate([p.property({type:S,readOnly:!0})],D.prototype,"spatialReference",null),t.__decorate([p.property({readOnly:!0})],D.prototype,"styleRepository",void 0),t.__decorate([p.property({readOnly:!0})],D.prototype,"sourceNameToSource",void 0),t.__decorate([p.property({readOnly:!0})],D.prototype,"primarySource",void 0),t.__decorate([p.property({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],D.prototype,"styleUrl",null),t.__decorate([d.writer(["portal-item","web-document"],"styleUrl")],D.prototype,"writeStyleUrl",null),t.__decorate([p.property({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:O})],D.prototype,"tileInfo",null),t.__decorate([p.property()],D.prototype,"tilemapCache",void 0),t.__decorate([y.reader("service","tilemapCache",["capabilities","tileInfo"])],D.prototype,"readTilemapCache",null),t.__decorate([p.property({json:{read:!1},readOnly:!0,value:"vector-tile"})],D.prototype,"type",void 0),t.__decorate([p.property({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],D.prototype,"url",void 0),t.__decorate([p.property({readOnly:!0})],D.prototype,"version",void 0),t.__decorate([y.reader("version",["version","currentVersion"])],D.prototype,"readVersion",null),t.__decorate([p.property({type:String})],D.prototype,"showCollisionBoxes",void 0),t.__decorate([p.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],D.prototype,"path",void 0),D=t.__decorate([u.subclass("esri.layers.VectorTileLayer")],D);return D}));