/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../geometry","../Graphic","../symbols","../core/Collection","../core/Error","../core/lang","../core/MultiOriginJSONSupport","../core/object","../core/Warning","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","../geometry/projection","../geometry/support/aaBoundingRect","../geometry/support/normalizeUtils","../geometry/support/spatialReferenceUtils","./FeatureLayer","./GraphicsLayer","./Layer","./graphics/objectIdUtils","./mixins/BlendLayer","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/ScaleRangeLayer","./support/Field","../symbols/SimpleFillSymbol","../symbols/SimpleLineSymbol","../symbols/SimpleMarkerSymbol","../symbols/TextSymbol","../geometry/SpatialReference","../geometry/Extent"],(function(e,t,r,o,n,i,a,l,y,s,p,u,c,d,f,m,g,b,S,_,h,O,N,w,L,x,T,J,v,C,I,M,E,j,R){"use strict";function D(e){return"markup"===e.featureCollectionType||e.layers.some((e=>null!=e.layerDefinition.visibilityField||!P(e)))}function P({layerDefinition:e,featureSet:t}){const r=e.geometryType??t.geometryType;return z.find((t=>r===t.geometryTypeJSON&&e.drawingInfo?.renderer?.symbol?.type===t.identifyingSymbol.type))}function k(){return new R({xmin:-180,ymin:-90,xmax:180,ymax:90})}const F=new v({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),G=new v({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let B=function(t){function r(e){var r;return(r=t.call(this,e)||this).visibilityMode="inherited",r}return e._inherits(r,t),r.prototype.initialize=function(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))},e._createClass(r,[{key:"fullExtent",get:function(){const e=this.layer?.spatialReference,t=this.fullBounds;return e?null==t?g.projectOrLoad(k(),e).geometry:b.toExtent(t,e):null}},{key:"fullBounds",get:function(){const e=this.layer?.spatialReference;if(!e)return null;const t=b.empty();return this.graphics.forEach((r=>{const o=null!=r.geometry?g.projectOrLoad(r.geometry,e).geometry:null;null!=o&&b.expand(t,"point"===o.type?o:o.extent,t)})),b.equals(t,b.NEGATIVE_INFINITY)?null:t}},{key:"sublayers",get:function(){return this.graphics}}]),r}(O);t.__decorate([u.property({readOnly:!0})],B.prototype,"fullExtent",null),t.__decorate([u.property({readOnly:!0})],B.prototype,"fullBounds",null),t.__decorate([u.property({readOnly:!0})],B.prototype,"sublayers",null),t.__decorate([u.property()],B.prototype,"layer",void 0),t.__decorate([u.property()],B.prototype,"layerId",void 0),t.__decorate([u.property({readOnly:!0})],B.prototype,"visibilityMode",void 0),B=t.__decorate([f.subclass("esri.layers.MapNotesLayer.MapNotesSublayer")],B);const z=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new C).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new I).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new M).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new M).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new E).toJSON()}];let A=function(t){function r(r){var o;return(o=t.call(this,r)||this).capabilities={operations:{supportsMapNotesEditing:!0}},o.featureCollections=null,o.featureCollectionJSON=null,o.featureCollectionType="notes",o.legendEnabled=!1,o.listMode="hide-children",o.minScale=0,o.maxScale=0,o.spatialReference=j.WGS84,o.sublayers=new i(z.map((t=>new B({id:t.id,layerId:t.layerId,title:t.title,layer:e._assertThisInitialized(o)})))),o.title="Map Notes",o.type="map-notes",o.visibilityMode="inherited",o}e._inherits(r,t);var n=r.prototype;return n.readCapabilities=function(e,t,r){return{operations:{supportsMapNotesEditing:!D(t)&&"portal-item"!==r?.origin}}},n.readFeatureCollections=function(e,t,r){if(!D(t))return null;const o=t.layers.map((e=>{const t=new h;return t.read(e,r),t}));return new i({items:o})},n.readLegacyfeatureCollectionJSON=function(e,t){return D(t)?l.clone(t.featureCollection):null},n.readMinScale=function(e,t){for(const r of t.layers)if(null!=r.layerDefinition.minScale)return r.layerDefinition.minScale;return 0},n.readMaxScale=function(e,t){for(const r of t.layers)if(null!=r.layerDefinition.maxScale)return r.layerDefinition.maxScale;return 0},n.readSpatialReference=function(e,t){return t.layers.length?j.fromJSON(t.layers[0].layerDefinition.spatialReference):j.WGS84},n.readSublayers=function(e,t,r){if(D(t))return null;const n=[];let a=t.layers.reduce(((e,t)=>Math.max(e,t.layerDefinition.id??-1)),-1)+1;for(const i of t.layers){const{layerDefinition:e,featureSet:t}=i,r=e.id??a++,l=P(i);if(null!=l){const i=new B({id:l.id,title:e.name,layerId:r,layer:this,graphics:t.features.map((({geometry:e,symbol:t,attributes:r,popupInfo:n})=>o.fromJSON({attributes:r,geometry:e,symbol:t,popupTemplate:n})))});n.push(i)}}return new i(n)},n.writeSublayers=function(e,t,r,o){const{minScale:n,maxScale:i}=this;if(null==e)return;const l=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing)return void(l&&o?.messages?.push(new a("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));const y=[];let p=this.spatialReference.toJSON();e:for(const a of e)for(const e of a.graphics)if(null!=e.geometry){p=e.geometry.spatialReference.toJSON();break e}for(const a of z){const t=e.find((e=>a.id===e.id));this._writeMapNoteSublayer(y,t,a,n,i,p,o)}s.setDeepValue("featureCollection.layers",y,t)},n.load=function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)},n.read=function(t,o){"featureCollection"in t&&(t=l.clone(t),Object.assign(t,t.featureCollection)),e._get(e._getPrototypeOf(r.prototype),"read",this).call(this,t,o)},n.beforeSave=async function(){if(null==this.sublayers)return;let e=null;const t=[];for(const o of this.sublayers)for(const r of o.graphics)if(null!=r.geometry){const o=r.geometry;e?_.equals(o.spatialReference,e)||(g.canProjectWithoutEngine(o.spatialReference,e)||g.isLoaded()||await g.load(),r.geometry=g.project(o,e)):e=o.spatialReference,t.push(r)}const r=await S.normalizeCentralMeridian(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))},n._findSublayer=function(e){return null==this.sublayers?null:this.sublayers?.find((t=>t.id===e))??null},n._writeMapNoteSublayer=function(e,t,r,o,n,i,a){const y=[];if(null!=t){for(const e of t.graphics)this._writeMapNote(y,e,r.geometryType,a);this._normalizeObjectIds(y,F),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:l.clone(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:n,objectIdField:"OBJECTID",fields:[F.toJSON(),G.toJSON()],spatialReference:i},featureSet:{features:y,geometryType:r.geometryTypeJSON}})}},n._writeMapNote=function(e,t,r,o){if(null==t)return;const{geometry:n,symbol:i,popupTemplate:a}=t;if(null==n)return;if(n.type!==r)return void o?.messages?.push(new p("map-notes-layer:invalid-geometry-type",`Geometry "${n.type}" cannot be saved in "${r}" layer`,{graphic:t}));if(null==i)return void o?.messages?.push(new p("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t}));const l={attributes:{...t.attributes},geometry:n.toJSON(),symbol:i.toJSON()};null!=a&&(l.popupInfo=a.toJSON()),e.push(l)},n._normalizeObjectIds=function(e,t){const r=t.name;let o=w.findLastObjectIdFromFeatures(r,e)+1;const n=new Set;for(const i of e){i.attributes||(i.attributes={});const{attributes:e}=i;(null==e[r]||n.has(e[r]))&&(e[r]=o++),n.add(e[r])}},e._createClass(r,[{key:"fullExtent",get:function(){const e=this.spatialReference,t=b.empty();if(null!=this.sublayers)this.sublayers.forEach((({fullBounds:e})=>null!=e?b.expand(t,e,t):t),t);else if(this.featureCollectionJSON?.layers.some((e=>e.layerDefinition.extent))){this.featureCollectionJSON.layers.forEach((r=>{const o=g.projectOrLoad(r.layerDefinition.extent,e).geometry;null!=o&&b.expand(t,o,t)}))}return b.equals(t,b.NEGATIVE_INFINITY)?g.projectOrLoad(k(),e).geometry:b.toExtent(t,e)}},{key:"multipointLayer",get:function(){return this._findSublayer("multipointLayer")}},{key:"pointLayer",get:function(){return this._findSublayer("pointLayer")}},{key:"polygonLayer",get:function(){return this._findSublayer("polygonLayer")}},{key:"polylineLayer",get:function(){return this._findSublayer("polylineLayer")}},{key:"textLayer",get:function(){return this._findSublayer("textLayer")}}]),r}(L.BlendLayer(J.ScaleRangeLayer(x.OperationalLayer(T.PortalLayer(y.MultiOriginJSONMixin(N))))));t.__decorate([u.property({readOnly:!0})],A.prototype,"capabilities",void 0),t.__decorate([d.reader(["portal-item","web-map"],"capabilities",["layers"])],A.prototype,"readCapabilities",null),t.__decorate([u.property({readOnly:!0})],A.prototype,"featureCollections",void 0),t.__decorate([d.reader(["web-map","portal-item"],"featureCollections",["layers"])],A.prototype,"readFeatureCollections",null),t.__decorate([u.property({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],A.prototype,"featureCollectionJSON",void 0),t.__decorate([d.reader(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],A.prototype,"readLegacyfeatureCollectionJSON",null),t.__decorate([u.property({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],A.prototype,"featureCollectionType",void 0),t.__decorate([u.property({readOnly:!0})],A.prototype,"fullExtent",null),t.__decorate([u.property({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],A.prototype,"legendEnabled",void 0),t.__decorate([u.property({type:["show","hide","hide-children"]})],A.prototype,"listMode",void 0),t.__decorate([u.property({type:Number,nonNullable:!0,json:{write:!1}})],A.prototype,"minScale",void 0),t.__decorate([d.reader(["web-map","portal-item"],"minScale",["layers"])],A.prototype,"readMinScale",null),t.__decorate([u.property({type:Number,nonNullable:!0,json:{write:!1}})],A.prototype,"maxScale",void 0),t.__decorate([d.reader(["web-map","portal-item"],"maxScale",["layers"])],A.prototype,"readMaxScale",null),t.__decorate([u.property({readOnly:!0})],A.prototype,"multipointLayer",null),t.__decorate([u.property({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],A.prototype,"operationalLayerType",void 0),t.__decorate([u.property({readOnly:!0})],A.prototype,"pointLayer",null),t.__decorate([u.property({readOnly:!0})],A.prototype,"polygonLayer",null),t.__decorate([u.property({readOnly:!0})],A.prototype,"polylineLayer",null),t.__decorate([u.property({type:j})],A.prototype,"spatialReference",void 0),t.__decorate([d.reader(["web-map","portal-item"],"spatialReference",["layers"])],A.prototype,"readSpatialReference",null),t.__decorate([u.property({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],A.prototype,"sublayers",void 0),t.__decorate([d.reader("web-map","sublayers",["layers"])],A.prototype,"readSublayers",null),t.__decorate([m.writer("web-map","sublayers")],A.prototype,"writeSublayers",null),t.__decorate([u.property({readOnly:!0})],A.prototype,"textLayer",null),t.__decorate([u.property()],A.prototype,"title",void 0),t.__decorate([u.property({readOnly:!0,json:{read:!1}})],A.prototype,"type",void 0),A=t.__decorate([f.subclass("esri.layers.MapNotesLayer")],A);return A}));