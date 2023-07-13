/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../geometry","../PopupTemplate","../renderers/ClassBreaksRenderer","../renderers/DictionaryRenderer","../renderers/DotDensityRenderer","../renderers/HeatmapRenderer","../renderers/PieChartRenderer","../renderers/Renderer","../renderers/SimpleRenderer","../renderers/UniqueValueRenderer","../renderers/support/jsonUtils","../renderers/support/types","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass","../geometry/support/typeUtils","./Layer","./graphics/sources/GeoJSONSource","./mixins/BlendLayer","./mixins/CustomParametersMixin","./mixins/FeatureEffectLayer","./mixins/FeatureReductionLayer","./mixins/OperationalLayer","./mixins/OrderedLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/TemporalLayer","./support/commonProperties","./support/FeatureTemplate","./support/FeatureType","./support/Field","./support/fieldProperties","./support/fieldUtils","./support/LabelClass","./support/labelingInfo","../rest/support/Query","../support/popupUtils","../geometry/SpatialReference","../geometry/Extent"],(function(e,r,t,o,i,n,s,p,a,l,d,y,u,c,f,h,m,_,g,b,v,x,I,O,S,P,F,E,T,L,w,R,j,D,q,J,N,U,k,C,G,Q,B,V,M,z,Z,H){"use strict";const A=G.defineFieldProperties();let K=function(t){function o(e){var o;return(o=t.call(this,e)||this).copyright=null,o.definitionExpression=null,o.displayField=null,o.editingEnabled=!1,o.elevationInfo=null,o.fields=null,o.fieldsIndex=null,o.fullExtent=null,o.geometryType=null,o.hasZ=void 0,o.labelsVisible=!0,o.labelingInfo=null,o.legendEnabled=!0,o.objectIdField=null,o.operationalLayerType="GeoJSON",o.popupEnabled=!0,o.popupTemplate=null,o.screenSizePerspectiveEnabled=!0,o.source=new P.GeoJSONSource({layer:r._assertThisInitialized(o)}),o.spatialReference=Z.WGS84,o.templates=null,o.title="GeoJSON",o.type="geojson",o.typeIdField=null,o.types=null,o}r._inherits(o,t);var i=o.prototype;return i.destroy=function(){this.source?.destroy()},i.load=function(e){const r=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(m.throwIfAbortError).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),Q.fixRendererFields(this.renderer,this.fieldsIndex),Q.fixTimeInfoFields(this.timeInfo,this.fieldsIndex)}));return this.addResolvingPromise(r),Promise.resolve(this)},i.applyEdits=async function(r,t){const{applyEdits:o}=await new Promise(((r,t)=>e(["./graphics/editingSupport"],r,t)));await this.load();const i=await o(this,this.source,r,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),i},i.on=function(e,t){return r._get(r._getPrototypeOf(o.prototype),"on",this).call(this,e,t)},i.createPopupTemplate=function(e){return z.createPopupTemplate(this,e)},i.createQuery=function(){const e=new M,r=this.get("capabilities.data");e.returnGeometry=!0,r&&r.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:t,timeExtent:o}=this;return e.timeExtent=null!=t&&null!=o?o.offset(-t.value,t.unit):o||null,e},i.getFieldDomain=function(e,r){let t,o=!1;const i=r&&r.feature,n=i&&i.attributes,s=this.typeIdField&&n&&n[this.typeIdField];return null!=s&&this.types&&(o=this.types.some((r=>r.id==s&&(t=r.domains&&r.domains[e],t&&"inherited"===t.type&&(t=this._getLayerDomain(e)),!0)))),o||t||(t=this._getLayerDomain(e)),t},i.getField=function(e){return this.fieldsIndex.get(e)},i.queryFeatures=function(e,r){return this.load().then((()=>this.source.queryFeatures(M.from(e)||this.createQuery(),r))).then((e=>{if(e?.features)for(const r of e.features)r.layer=r.sourceLayer=this;return e}))},i.queryObjectIds=function(e,r){return this.load().then((()=>this.source.queryObjectIds(M.from(e)||this.createQuery(),r)))},i.queryFeatureCount=function(e,r){return this.load().then((()=>this.source.queryFeatureCount(M.from(e)||this.createQuery(),r)))},i.queryExtent=function(e,r){return this.load().then((()=>this.source.queryExtent(M.from(e)||this.createQuery(),r)))},i.hasDataChanged=async function(){try{const{dataChanged:e,updates:r}=await this.source.refresh(this.customParameters);return null!=r&&this.read(r,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1},i._getLayerDomain=function(e){if(!this.fields)return null;let r=null;return this.fields.some((t=>(t.name===e&&(r=t.domain),!!r))),r},r._createClass(o,[{key:"capabilities",get:function(){return this.source?this.source.capabilities:null}},{key:"createQueryVersion",get:function(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"isTable",get:function(){return this.loaded&&null==this.geometryType}},{key:"parsedUrl",get:function(){return this.url?_.urlToObject(this.url):null}},{key:"renderer",set:function(e){Q.fixRendererFields(e,this.fieldsIndex),this._set("renderer",e)}},{key:"url",set:function(e){if(!e)return void this._set("url",e);const r=_.urlToObject(e);this._set("url",r.path),r.query&&(this.customParameters={...this.customParameters,...r.query})}}]),o}(R.OrderedLayer(E.CustomParametersMixin(L.FeatureReductionLayer(T.FeatureEffectLayer(F.BlendLayer(J.TemporalLayer(q.ScaleRangeLayer(D.RefreshableLayer(w.OperationalLayer(j.PortalLayer(h.MultiOriginJSONMixin(S))))))))))));t.__decorate([g.property({readOnly:!0,json:{read:!1,write:!1}})],K.prototype,"capabilities",null),t.__decorate([g.property({type:String})],K.prototype,"copyright",void 0),t.__decorate([g.property({readOnly:!0})],K.prototype,"createQueryVersion",null),t.__decorate([g.property({readOnly:!0})],K.prototype,"defaultPopupTemplate",null),t.__decorate([g.property({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],K.prototype,"definitionExpression",void 0),t.__decorate([g.property({type:String})],K.prototype,"displayField",void 0),t.__decorate([g.property({type:Boolean})],K.prototype,"editingEnabled",void 0),t.__decorate([g.property(N.elevationInfo)],K.prototype,"elevationInfo",void 0),t.__decorate([g.property({type:[C],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],K.prototype,"fields",void 0),t.__decorate([g.property(A.fieldsIndex)],K.prototype,"fieldsIndex",void 0),t.__decorate([g.property({type:H,json:{name:"extent"}})],K.prototype,"fullExtent",void 0),t.__decorate([g.property({type:["point","polygon","polyline","multipoint"],json:{read:{reader:O.featureGeometryTypeKebabDictionary.read}}})],K.prototype,"geometryType",void 0),t.__decorate([g.property({type:Boolean})],K.prototype,"hasZ",void 0),t.__decorate([g.property(N.id)],K.prototype,"id",void 0),t.__decorate([g.property({type:Boolean,readOnly:!0})],K.prototype,"isTable",null),t.__decorate([g.property(N.labelsVisible)],K.prototype,"labelsVisible",void 0),t.__decorate([g.property({type:[B],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:V.reader},write:!0}})],K.prototype,"labelingInfo",void 0),t.__decorate([g.property(N.legendEnabled)],K.prototype,"legendEnabled",void 0),t.__decorate([g.property({type:["show","hide"]})],K.prototype,"listMode",void 0),t.__decorate([g.property({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],K.prototype,"objectIdField",void 0),t.__decorate([g.property(N.opacity)],K.prototype,"opacity",void 0),t.__decorate([g.property({type:["GeoJSON"]})],K.prototype,"operationalLayerType",void 0),t.__decorate([g.property({readOnly:!0})],K.prototype,"parsedUrl",null),t.__decorate([g.property(N.popupEnabled)],K.prototype,"popupEnabled",void 0),t.__decorate([g.property({type:i,json:{name:"popupInfo",write:!0}})],K.prototype,"popupTemplate",void 0),t.__decorate([g.property({types:f.rendererTypes,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:f.webSceneRendererTypes}}}})],K.prototype,"renderer",null),t.__decorate([g.property(N.screenSizePerspectiveEnabled)],K.prototype,"screenSizePerspectiveEnabled",void 0),t.__decorate([g.property({readOnly:!0})],K.prototype,"source",void 0),t.__decorate([g.property({type:Z})],K.prototype,"spatialReference",void 0),t.__decorate([g.property({type:[U]})],K.prototype,"templates",void 0),t.__decorate([g.property()],K.prototype,"title",void 0),t.__decorate([g.property({json:{read:!1},readOnly:!0})],K.prototype,"type",void 0),t.__decorate([g.property({type:String,readOnly:!0})],K.prototype,"typeIdField",void 0),t.__decorate([g.property({type:[k]})],K.prototype,"types",void 0),t.__decorate([g.property(N.url)],K.prototype,"url",null),K=t.__decorate([I.subclass("esri.layers.GeoJSONLayer")],K);return K}));
