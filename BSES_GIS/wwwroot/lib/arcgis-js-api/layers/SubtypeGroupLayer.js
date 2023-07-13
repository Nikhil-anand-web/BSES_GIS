/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Collection","../core/Error","../core/HandleOwner","../core/loadAll","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/reactiveUtils","../core/sql","../core/urlUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/accessorSupport/PropertyOrigin","./Layer","./mixins/APIKeyMixin","./mixins/ArcGISService","./mixins/BlendLayer","./mixins/CustomParametersMixin","./mixins/EditBusLayer","./mixins/FeatureLayerBase","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/TemporalLayer","./support/arcgisLayerUrl","./support/commonProperties","./support/featureLayerUtils","./support/fieldProperties","./support/fieldUtils","./support/Subtype","./support/SubtypeSublayer","./support/TimeInfo","./support/versionUtils","../rest/support/Query"],(function(e,t,r,i,s,o,n,a,u,l,p,y,c,d,h,f,b,m,g,_,S,v,w,L,F,I,P,x,C,O,E,T,A,q,U,j,G,M,R,k,$){"use strict";const N=e=>Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"})),B="SubtypeGroupLayer",Q="esri.layers.SubtypeGroupLayer";function D(e,t){return new s("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const H=U.defineFieldProperties();let J=function(r){function o(...e){var t;return(t=r.call(this,...e)||this)._sublayersCollectionChanged=!1,t._sublayerLookup=new Map,t.fields=null,t.fieldsIndex=null,t.outFields=null,t.subtypes=null,t.sublayers=new(i.ofType(M)),t.timeInfo=null,t.title="Layer",t.type="subtype-group",t.addHandles(l.watch((()=>t.sublayers),((e,r)=>t._handleSublayersChange(e,r)),l.sync)),t}t._inherits(o,r);var a=o.prototype;return a.destroy=function(){this.source?.destroy()},a.normalizeCtorArgs=function(e,t){return"string"==typeof e?{url:e,...t}:e},a.load=function(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(u.throwIfAbortError).then((async()=>{if(!this.url)throw new s("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==this.layerId)throw new s("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))})).then((()=>this._setUserPrivileges(this.serviceItemId,e))).then((()=>q.ensureLayerCredential(this,e)));return this.addResolvingPromise(r),Promise.resolve(this)},a.readTitleFromService=function(e,{name:t}){return this.url?T.titleFromUrlAndName(this.url,t):t},a.addAttachment=async function(e,t){return q.addAttachment(this,e,t,B)},a.updateAttachment=async function(e,t,r){return q.updateAttachment(this,e,t,r,B)},a.applyEdits=async function(e,t){return q.applyEdits(this,e,t)},a.on=function(e,r){return t._get(t._getPrototypeOf(o.prototype),"on",this).call(this,e,r)},a.createGraphicsSource=async function(t){const{default:r}=await u.whenOrAbort(new Promise(((t,r)=>e(["./graphics/sources/FeatureLayerSource"],(e=>t(N(e))),r))),t);return new r({layer:this}).load({signal:t})},a.createQuery=function(){const e=q.createQuery(this),t=this.sublayers.map((e=>e.subtypeCode));return e.where=p.sqlAnd(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e},a.deleteAttachments=async function(e,t){return q.deleteAttachments(this,e,t,B)},a.fetchRecomputedExtents=async function(e){return q.fetchRecomputedExtents(this,e,B)},a.findSublayerForFeature=function(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)},a.findSublayerForSubtypeCode=function(e){return this._sublayerLookup.get(e)},a.getFieldDomain=function(e,t){return this._getLayerDomain(e)},a.getField=function(e){return this.fieldsIndex.get(e)},a.loadAll=function(){return n.loadAll(this,(e=>{e(this.sublayers)}))},a.queryAttachments=async function(e,t){return q.queryAttachments(this,e,t,B)},a.queryFeatures=async function(e,t){const r=await this.load(),i=$.from(e)??r.createQuery(),s=i.outFields??[];s.includes(this.subtypeField)||(s.push(this.subtypeField),i.outFields=s);const o=await r.source.queryFeatures(i,t);if(o?.features)for(const n of o.features)n.layer=n.sourceLayer=this.findSublayerForFeature(n);return o},a.queryObjectIds=async function(e,t){return q.queryObjectIds(this,e,t,B)},a.queryFeatureCount=async function(e,t){return q.queryFeatureCount(this,e,t,B)},a.queryExtent=async function(e,t){return q.queryExtent(this,e,t,B)},a.queryRelatedFeatures=async function(e,t){return q.queryRelatedFeatures(this,e,t,B)},a.queryRelatedFeaturesCount=async function(e,t){return q.queryRelatedFeaturesCount(this,e,t,B)},a.write=function(e,r){const{origin:i,layerContainerType:n,messages:a}=r;if(this.isTable){if("web-scene"===i||"web-map"===i&&"tables"!==n)return a?.push(D(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===i&&"tables"===n)return a?.push(D(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?t._get(t._getPrototypeOf(o.prototype),"write",this).call(this,e,r):(a?.push(new s("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)},a.serviceSupportsSpatialReference=function(e){return!!this.loaded&&k.serviceSupportsSpatialReference(this,e)},a._getLayerDomain=function(e){const t=this.fieldsIndex.get(e);return t?t.domain:null},a._initLayerProperties=async function(e){this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new s("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!this.subtypes?.length)throw new s("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),j.fixTimeInfoFields(this.timeInfo,this.fieldsIndex)},a.hasDataChanged=async function(){return q.hasDataChanged(this)},a._verifyFields=function(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||-1!==e.search(/\/FeatureServer\//i)||this.fields?.some((e=>"geometry"===e.type))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")},a._handleSublayersChange=function(e,t){t&&(t.forEach((e=>{e.parent=null})),this.handles.remove("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach((e=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),this._sublayersCollectionChanged=!1,this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),e.on("after-remove",(({item:e})=>{e.parent=null,this._sublayerLookup.delete(e.subtypeCode)})),e.on("after-changes",(()=>{this._sublayersCollectionChanged=!0}))],"sublayers-owner"))},t._createClass(o,[{key:"createQueryVersion",get:function(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}},{key:"editingEnabled",get:function(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}},{key:"effectiveEditingEnabled",get:function(){return q.computeEffectiveEditingEnabled(this)}},{key:"parsedUrl",get:function(){const e=y.urlToObject(this.url);return null!=e&&null!=this.layerId&&(e.path=y.join(e.path,this.layerId.toString())),e}},{key:"source",set:function(e){this._get("source")!==e&&this._set("source",e)}}]),o}(I.FeatureLayerBase(F.EditBusLayer(w.BlendLayer(E.TemporalLayer(O.ScaleRangeLayer(C.RefreshableLayer(v.ArcGISService(P.OperationalLayer(x.PortalLayer(a.MultiOriginJSONMixin(L.CustomParametersMixin(S.APIKeyMixin(o.HandleOwnerMixin(_))))))))))))));r.__decorate([c.property({readOnly:!0})],J.prototype,"createQueryVersion",null),r.__decorate([c.property({readOnly:!0})],J.prototype,"editingEnabled",null),r.__decorate([c.property({readOnly:!0})],J.prototype,"effectiveEditingEnabled",null),r.__decorate([c.property({...H.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],J.prototype,"fields",void 0),r.__decorate([c.property(H.fieldsIndex)],J.prototype,"fieldsIndex",void 0),r.__decorate([c.property(A.id)],J.prototype,"id",void 0),r.__decorate([c.property({type:["show","hide","hide-children"]})],J.prototype,"listMode",void 0),r.__decorate([c.property({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"]})],J.prototype,"operationalLayerType",void 0),r.__decorate([c.property(H.outFields)],J.prototype,"outFields",void 0),r.__decorate([c.property({readOnly:!0})],J.prototype,"parsedUrl",null),r.__decorate([c.property()],J.prototype,"source",null),r.__decorate([c.property({type:[G],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],J.prototype,"subtypes",void 0),r.__decorate([c.property({type:i.ofType(M),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const s=e.map((({code:e})=>{const i=new M({subtypeCode:e});return i.read(t,r),i}));return new(i.ofType(M))(s)}}}},name:"layers",write:{overridePolicy(e,t,r){const i=this.originOf("sublayers"),s=g.OriginId.PORTAL_ITEM;let o=!0;if(g.nameToId(i)===s&&g.nameToId(r.origin)>s){const t=e.some((e=>e.hasUserOverrides()));o=this._sublayersCollectionChanged||t}return{enabled:o,ignoreOrigin:!0}}}}})],J.prototype,"sublayers",void 0),r.__decorate([c.property({type:R})],J.prototype,"timeInfo",void 0),r.__decorate([c.property({json:{origins:{"portal-item":{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],J.prototype,"title",void 0),r.__decorate([b.reader("service","title",["name"])],J.prototype,"readTitleFromService",null),r.__decorate([c.property({json:{read:!1}})],J.prototype,"type",void 0),J=r.__decorate([m.subclass(Q)],J);return J}));