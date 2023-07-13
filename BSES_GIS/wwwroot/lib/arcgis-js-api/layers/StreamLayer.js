/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../geometry","../PopupTemplate","../renderers/ClassBreaksRenderer","../renderers/DictionaryRenderer","../renderers/DotDensityRenderer","../renderers/HeatmapRenderer","../renderers/PieChartRenderer","../renderers/Renderer","../renderers/SimpleRenderer","../renderers/UniqueValueRenderer","../renderers/support/jsonUtils","../renderers/support/types","../request","../core/Error","../core/handleUtils","../core/Logger","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../geometry/support/typeUtils","./Layer","./mixins/ArcGISService","./mixins/BlendLayer","./mixins/CustomParametersMixin","./mixins/FeatureEffectLayer","./mixins/FeatureReductionLayer","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/TemporalLayer","./support/commonProperties","./support/featureLayerUtils","./support/Field","./support/fieldProperties","./support/fieldUtils","./support/LabelClass","./support/labelingInfo","./support/PurgeOptions","../renderers/support/styleUtils","../rest/support/Query","../support/popupUtils","../symbols/support/ElevationInfo","../geometry/SpatialReference","../geometry/Extent"],(function(e,r,t,o,i,n,s,a,p,l,d,c,y,u,m,f,h,g,_,b,v,w,S,I,R,x,T,P,F,L,j,D,k,E,U,O,C,A,G,M,N,J,V,q,z,B,$,K,W,H,Q,X,Y){"use strict";const Z=V.defineFieldProperties();function ee(e,r){return new h("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${r}`,{layer:e})}let re=function(t){function o(...e){var r;return(r=t.call(this,...e)||this).copyright=null,r.definitionExpression=null,r.displayField=null,r.elevationInfo=null,r.fields=null,r.fieldsIndex=null,r.geometryDefinition=null,r.geometryType=null,r.labelsVisible=!0,r.labelingInfo=null,r.legendEnabled=!0,r.maxReconnectionAttempts=0,r.maxReconnectionInterval=20,r.maxScale=0,r.minScale=0,r.objectIdField=null,r.operationalLayerType="ArcGISStreamLayer",r.popupEnabled=!0,r.popupTemplate=null,r.purgeOptions=new $,r.refreshInterval=0,r.screenSizePerspectiveEnabled=!0,r.sourceJSON=null,r.spatialReference=X.WGS84,r.type="stream",r.url=null,r.updateInterval=300,r.useViewTime=!0,r.webSocketUrl=null,r}r._inherits(o,t);var i=o.prototype;return i.normalizeCtorArgs=function(e,r){return"string"==typeof e?{url:e,...r}:e},i.load=function(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new h("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const r=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(v.throwIfAbortError).then((()=>this._fetchService(r)))),Promise.resolve(this)},i.readRenderer=function(e,r,t){r=r.layerDefinition||r;const o=r.drawingInfo?.renderer;if(o){const e=u.read(o,r,t)||void 0;return e||_.getLogger(this).error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:t}),e}return N.createDefaultRenderer(r,t)},i.connect=async function(r){const[{createConnection:t}]=await Promise.all([new Promise(((r,t)=>e(["./graphics/sources/connections/createConnection"],r,t))),this.load()]),o=this.geometryType?P.featureGeometryTypeKebabDictionary.toJSON(this.geometryType):null,{customParameters:i=null,definitionExpression:n=null,geometryDefinition:s=null,maxReconnectionAttempts:a=0,maxReconnectionInterval:p=20,spatialReference:l=this.spatialReference}=r||this.createConnectionParameters(),d=t(this.parsedUrl,this.spatialReference,l,o,{geometry:s,where:n},a,p,i??void 0),c=g.handlesGroup([this.on("send-message-to-socket",(e=>d.sendMessageToSocket(e))),this.on("send-message-to-client",(e=>d.sendMessageToClient(e)))]);return d.once("destroy",c.remove),d},i.createConnectionParameters=function(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}},i.createPopupTemplate=function(e){return H.createPopupTemplate(this,e)},i.createQuery=function(){const e=new W;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e},i.getFieldDomain=function(e,r){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t},i.getField=function(e){return this.fieldsIndex.get(e)},i.serviceSupportsSpatialReference=function(e){return!0},i.sendMessageToSocket=function(e){this.emit("send-message-to-socket",e)},i.sendMessageToClient=function(e){this.emit("send-message-to-client",e)},i.write=function(e,t){const i=t?.messages;return this.webSocketUrl?(i?.push(ee(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?r._get(r._getPrototypeOf(o.prototype),"write",this).call(this,e,t):(i?.push(ee(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)},i._fetchService=async function(e){if(!!!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:r}=await f(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=r}}else{if(!this.timeInfo?.trackIdField)throw new h("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const e=this.fields.find((e=>"oid"===e.type))?.name;if(!e)throw new h("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=e}if(!this.fields)throw new h("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some((e=>e.name===this.objectIdField))||this.fields.push(new J({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new h("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),q.fixRendererFields(this.renderer,this.fieldsIndex),q.fixTimeInfoFields(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),K.loadStyleRenderer(this,{origin:"service"})},r._createClass(o,[{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"featureReduction",set:function(e){const r=this._normalizeFeatureReduction(e);this._set("featureReduction",r)}},{key:"renderer",set:function(e){q.fixRendererFields(e,this.fieldsIndex),this._set("renderer",e)}}]),o}(E.FeatureReductionLayer(k.FeatureEffectLayer(j.BlendLayer(G.TemporalLayer(A.ScaleRangeLayer(C.RefreshableLayer(L.ArcGISService(U.OperationalLayer(O.PortalLayer(b.MultiOriginJSONMixin(D.CustomParametersMixin(F))))))))))));t.__decorate([w.property({type:String})],re.prototype,"copyright",void 0),t.__decorate([w.property({readOnly:!0})],re.prototype,"defaultPopupTemplate",null),t.__decorate([w.property({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],re.prototype,"definitionExpression",void 0),t.__decorate([w.property({type:String})],re.prototype,"displayField",void 0),t.__decorate([w.property({type:Q})],re.prototype,"elevationInfo",void 0),t.__decorate([w.property({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],re.prototype,"featureReduction",null),t.__decorate([w.property(Z.fields)],re.prototype,"fields",void 0),t.__decorate([w.property(Z.fieldsIndex)],re.prototype,"fieldsIndex",void 0),t.__decorate([w.property({type:Y,json:{name:"layerDefinition.definitionGeometry",write:!0}})],re.prototype,"geometryDefinition",void 0),t.__decorate([w.property({type:P.featureGeometryTypeKebabDictionary.apiValues,json:{read:{reader:P.featureGeometryTypeKebabDictionary.read}}})],re.prototype,"geometryType",void 0),t.__decorate([w.property(M.labelsVisible)],re.prototype,"labelsVisible",void 0),t.__decorate([w.property({type:[z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:B.reader},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],re.prototype,"labelingInfo",void 0),t.__decorate([w.property(M.legendEnabled)],re.prototype,"legendEnabled",void 0),t.__decorate([w.property({type:["show","hide"]})],re.prototype,"listMode",void 0),t.__decorate([w.property({type:S.Integer})],re.prototype,"maxReconnectionAttempts",void 0),t.__decorate([w.property({type:S.Integer})],re.prototype,"maxReconnectionInterval",void 0),t.__decorate([w.property(M.maxScale)],re.prototype,"maxScale",void 0),t.__decorate([w.property(M.minScale)],re.prototype,"minScale",void 0),t.__decorate([w.property({type:String})],re.prototype,"objectIdField",void 0),t.__decorate([w.property({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],re.prototype,"operationalLayerType",void 0),t.__decorate([w.property(M.popupEnabled)],re.prototype,"popupEnabled",void 0),t.__decorate([w.property({type:i,json:{name:"popupInfo",write:!0}})],re.prototype,"popupTemplate",void 0),t.__decorate([w.property({type:$})],re.prototype,"purgeOptions",void 0),t.__decorate([w.property({json:{read:!1,write:!1}})],re.prototype,"refreshInterval",void 0),t.__decorate([w.property({types:m.rendererTypes,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:m.webSceneRendererTypes,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],re.prototype,"renderer",null),t.__decorate([x.reader("service","renderer",["drawingInfo.renderer","defaultSymbol"]),x.reader("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],re.prototype,"readRenderer",null),t.__decorate([w.property(M.screenSizePerspectiveEnabled)],re.prototype,"screenSizePerspectiveEnabled",void 0),t.__decorate([w.property()],re.prototype,"sourceJSON",void 0),t.__decorate([w.property({type:X,json:{origins:{service:{read:{source:"spatialReference"}}}}})],re.prototype,"spatialReference",void 0),t.__decorate([w.property({json:{read:!1}})],re.prototype,"type",void 0),t.__decorate([w.property(M.url)],re.prototype,"url",void 0),t.__decorate([w.property({type:Number})],re.prototype,"updateInterval",void 0),t.__decorate([w.property({json:{read:!1,write:!1}})],re.prototype,"useViewTime",void 0),t.__decorate([w.property({type:String})],re.prototype,"webSocketUrl",void 0),re=t.__decorate([T.subclass("esri.layers.StreamLayer")],re);return re}));
