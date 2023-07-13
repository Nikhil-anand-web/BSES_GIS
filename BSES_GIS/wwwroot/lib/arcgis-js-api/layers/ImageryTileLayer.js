/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../PopupTemplate","../core/Error","../core/Logger","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/reactiveUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","./Layer","./mixins/ArcGISService","./mixins/BlendLayer","./mixins/CustomParametersMixin","./mixins/ImageryTileMixin","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/TemporalLayer","./support/commonProperties","./support/Field","./support/rasterEnums","./support/RasterFunction","./support/rasterDatasets/FunctionRaster","./support/rasterDatasets/RasterFactory","./support/rasterFunctions/rasterFunctionHelper","../support/popupUtils"],(function(e,r,t,s,a,i,o,n,l,p,c,u,d,y,h,m,f,g,_,v,S,R,b,w,P,I,O,T,L,x,N,F){"use strict";let J=function(r){function t(...e){var t;return(t=r.call(this,...e)||this)._primaryRasters=[],t.bandIds=null,t.interpolation=null,t.legendEnabled=!0,t.isReference=null,t.listMode="show",t.sourceJSON=null,t.version=null,t.type="imagery-tile",t.operationalLayerType="ArcGISTiledImageServiceLayer",t.popupEnabled=!0,t.popupTemplate=null,t.fields=null,t}e._inherits(t,r);var i=t.prototype;return i.normalizeCtorArgs=function(e,r){return"string"==typeof e?{url:e,...r}:e},i.load=function(e){const r=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"]},e).catch(o.throwIfAbortError).then((()=>this._openRaster(r)))),Promise.resolve(this)},i.createPopupTemplate=function(e){const{rasterFields:r}=this,t=new Set(r.map((({name:e})=>e)).filter((e=>"raster.servicepixelvalue.raw"!==e.toLowerCase())));return F.createPopupTemplate({fields:r,title:this.title},{...e,visibleFieldNames:t})},i.generateRasterInfo=async function(e,r){if(!(e=p.ensureClass(T,e)))return this.rasterInfo;try{const t={raster:this._primaryRasters[0]};this._primaryRasters.length>1&&this._primaryRasters.forEach((e=>t[e.url]=e));const s=N.create(e.functionDefinition?.toJSON()??e.toJSON(),t),a=new L({rasterFunction:s});return await a.open(r),a.rasterInfo}catch(t){if(t instanceof s)throw t;throw new s("imagery-tile-layer","the given raster function is not supported")}},i.write=function(r,a){const i=this._primaryRasters[0]??this.raster;if(this.loaded?"RasterTileServer"===i.datasetFormat&&("Raster"===i.tileType||"Map"===i.tileType):this.url&&/\/ImageServer(\/|\/?$)/i.test(this.url))return e._get(e._getPrototypeOf(t.prototype),"write",this).call(this,r,a);if(a&&a.messages){const e=`${a.origin}/${a.layerContainerType||"operational-layers"}`;a.messages.push(new s("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this}))}return null},i._openRaster=async function(e){let r=!1;if(this.raster)this.raster.rasterInfo||await this.raster.open(),"Function"===this.raster.datasetFormat?(r=!0,this._primaryRasters=this.raster.primaryRasters.rasters):this._primaryRasters=[this.raster],this.url=this.raster.url;else{const{rasterFunction:r}=this,t=[this.url];r&&N.getPrimaryRasterUrls(r.toJSON(),t);const o=await Promise.all(t.map((r=>x.open({url:r,sourceJSON:this.sourceJSON,ioConfig:{sampling:"closest",...this.ioConfig,customFetchParameters:this.customParameters},signal:e})))),n=o.findIndex((e=>null==e));if(n>-1)throw new s("imagery-tile-layer:open",`cannot open raster: ${t[n]}`);if(this._primaryRasters=o,r){const e={raster:this._primaryRasters[0]};this._primaryRasters.length>1&&this._primaryRasters.forEach((r=>e[r.url]=r));const t=N.create(r.functionDefinition?.toJSON()??r.toJSON(),e),n=new L({rasterFunction:t});try{await n.open(),this.raster=n}catch(i){const e=a.getLogger(this);i instanceof s&&e.error("imagery-tile-layer:open",i.message),e.warn("imagery-tile-layer:open","the raster function cannot be applied and is removed"),this._set("rasterFunction",null),this.raster=o[0]}}else this.raster=o[0]}const t=this.raster.rasterInfo;if(!t)throw new s("imagery-tile-layer:load","cannot load resources on "+this.url);if(this._set("rasterInfo",r?t:this._primaryRasters[0].rasterInfo),this._set("spatialReference",t.spatialReference),this.sourceJSON=this.sourceJSON||this.raster.sourceJSON,null!=this.sourceJSON){const e="Map"===this.raster.tileType&&null!=this.sourceJSON.minLOD&&null!=this.sourceJSON.maxLOD?this.sourceJSON:{...this.sourceJSON,minScale:0,maxScale:0};this.read(e,{origin:"service"})}else this.read({tileInfo:this.rasterInfo.storageInfo.tileInfo.toJSON()},{origin:"service"});this.title||(this.title=this.raster.datasetName),"Map"===this.raster.tileType&&(this.popupEnabled=!1),this._configDefaultSettings(),this.addHandles(n.watch((()=>this.customParameters),(e=>{this.raster&&(this.raster.ioConfig.customFetchParameters=e)})))},e._createClass(t,[{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"rasterFields",get:function(){const e=[new I({name:"Raster.ServicePixelValue",alias:"Pixel Value",domain:null,editable:!1,length:50,type:"string"}),new I({name:"Raster.ServicePixelValue.Raw",alias:"Raw Pixel Value",domain:null,editable:!1,length:50,type:"string"})],{rasterInfo:r}=this,t=r?.attributeTable,s=null!=t?t.fields:null,a="Raster.";if(s){const r=s.filter((e=>"oid"!==e.type&&"value"!==e.name.toLowerCase())).map((e=>{const r=e.clone();return r.name=a+e.name,r}));e.push(...r)}const i=r?.dataType,o=r?.multidimensionalInfo;if(("vector-magdir"===i||"vector-uv"===i)&&null!=o){const r=o.variables[0].unit?.trim(),t="Magnitude"+(r?` (${r})`:"");e.push(new I({name:"Raster.Magnitude",alias:t,domain:null,editable:!1,type:"double"})),e.push(new I({name:"Raster.Direction",alias:"Direction (°)",domain:null,editable:!1,type:"double"}))}return e}}]),t}(f.BlendLayer(b.ScaleRangeLayer(v.OperationalLayer(S.PortalLayer(g.CustomParametersMixin(_.ImageryTileMixin(w.TemporalLayer(m.ArcGISService(R.RefreshableLayer(i.MultiOriginJSONMixin(h)))))))))));r.__decorate([l.property()],J.prototype,"_primaryRasters",void 0),r.__decorate([l.property({type:[p.Integer],json:{write:{overridePolicy(){return{enabled:!this.loaded||"Raster"===this.raster.tileType||"0,1,2"!==this.bandIds?.join(",")}}}}})],J.prototype,"bandIds",void 0),r.__decorate([l.property({json:{write:{overridePolicy(){return{enabled:!this.loaded||"Raster"===this.raster.tileType||"bilinear"!==this.interpolation}}}}}),d.enumeration(O.interpolationKebab)],J.prototype,"interpolation",void 0),r.__decorate([l.property(P.legendEnabled)],J.prototype,"legendEnabled",void 0),r.__decorate([l.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],J.prototype,"isReference",void 0),r.__decorate([l.property({type:["show","hide"]})],J.prototype,"listMode",void 0),r.__decorate([l.property({json:{read:!0,write:!0}})],J.prototype,"blendMode",void 0),r.__decorate([l.property()],J.prototype,"sourceJSON",void 0),r.__decorate([l.property({readOnly:!0,json:{origins:{service:{read:{source:"currentVersion"}}}}})],J.prototype,"version",void 0),r.__decorate([l.property({readOnly:!0,json:{read:!1}})],J.prototype,"type",void 0),r.__decorate([l.property({type:["ArcGISTiledImageServiceLayer"]})],J.prototype,"operationalLayerType",void 0),r.__decorate([l.property({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy(){return{enabled:!this.loaded||"Raster"===this.raster.tileType}},writer(e,r,t){r[t]=!e}}}})],J.prototype,"popupEnabled",void 0),r.__decorate([l.property({type:t,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy(){return{enabled:!this.loaded||"Raster"===this.raster.tileType}}}}})],J.prototype,"popupTemplate",void 0),r.__decorate([l.property({readOnly:!0})],J.prototype,"defaultPopupTemplate",null),r.__decorate([l.property({readOnly:!0,type:[I]})],J.prototype,"fields",void 0),r.__decorate([l.property({readOnly:!0,type:[I]})],J.prototype,"rasterFields",null),J=r.__decorate([y.subclass("esri.layers.ImageryTileLayer")],J);return J}));
