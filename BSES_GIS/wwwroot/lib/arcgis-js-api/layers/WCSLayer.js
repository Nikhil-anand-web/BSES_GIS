/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Error","../core/MultiOriginJSONSupport","../core/reactiveUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass","./Layer","./mixins/BlendLayer","./mixins/CustomParametersMixin","./mixins/ImageryTileMixin","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/TemporalLayer","./support/commonProperties","./support/Field","./support/rasterDatasets/WCSRaster","../support/popupUtils"],(function(e,t,r,o,s,i,a,n,l,p,c,u,d,y,m,f,h,v,g,_,I,P,x){"use strict";const L=new Set(["milliseconds","seconds","minutes","hours","days","weeks","months","years","decades","centuries"]);let S=function(t){function o(...e){var r;return(r=t.call(this,...e)||this).coverageId=null,r.version=null,r.isReference=null,r.type="wcs",r.popupEnabled=!0,r.popupTemplate=null,r.fields=null,r}e._inherits(o,t);var i=o.prototype;return i.normalizeCtorArgs=function(e,t){return"string"==typeof e?{url:e,...t}:e},i.load=function(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._openRaster(t)),Promise.resolve(this)},i.createPopupTemplate=function(e){return x.createPopupTemplate({fields:this.rasterFields,title:this.title},e)},i._openRaster=async function(e){const t=new P({url:this.url,version:this.version,coverageId:this.coverageId,ioConfig:{sampling:"closest",...this.ioConfig,customFetchParameters:this.customParameters}});if(await t.open({signal:e}),!t.rasterInfo)throw t.destroy(),new r("wcs-layer:load","cannot load resources on "+this.url);const{rasterInfo:o}=t;this._set("rasterInfo",o),this._set("spatialReference",o.spatialReference),null==this.title&&this.setAtOrigin("title",t.datasetName,"service"),null==this.coverageId&&this.setAtOrigin("coverageId",t.coverageInfo.id,"service"),this.setAtOrigin("tileInfo",t.rasterInfo.storageInfo.tileInfo,"service");const{multidimensionalInfo:i}=o;if(null!=i){const e=i.variables[0].dimensions.find((({name:e})=>"StdTime"===e));if(e){let t=e.extent?.[0]??e.values[0];Array.isArray(t)&&(t=t[0]);let r=e.extent?.[1]??e.values[e.values.length-1];Array.isArray(r)&&(r=r[1]);const o=L.has(e.intervalUnit?.toLowerCase())?e.intervalUnit?.toLowerCase():null;this.set("timeInfo",{startField:"StdTime",fullTimeExtent:{start:t,end:r},timeReference:null,interval:o?{value:e.interval,unit:o}:null})}}this.raster=t,this._configDefaultSettings(),this.addHandles(s.watch((()=>this.customParameters),(e=>this.raster.ioConfig.customFetchParameters=e)))},e._createClass(o,[{key:"coverageInfo",get:function(){return this.raster.coverageInfo}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"rasterFields",get:function(){return[new I({name:"Raster.ServicePixelValue",alias:"Pixel Value",domain:null,editable:!1,length:50,type:"string"})]}}]),o}(u.BlendLayer(v.ScaleRangeLayer(m.OperationalLayer(f.PortalLayer(d.CustomParametersMixin(y.ImageryTileMixin(g.TemporalLayer(h.RefreshableLayer(o.MultiOriginJSONMixin(c))))))))));t.__decorate([i.property({type:String,nonNullable:!0,json:{write:!0}})],S.prototype,"coverageId",void 0),t.__decorate([i.property()],S.prototype,"coverageInfo",null),t.__decorate([i.property()],S.prototype,"version",void 0),t.__decorate([i.property()],S.prototype,"isReference",void 0),t.__decorate([i.property()],S.prototype,"raster",void 0),t.__decorate([i.property({readOnly:!0})],S.prototype,"type",void 0),t.__decorate([i.property(_.popupEnabled)],S.prototype,"popupEnabled",void 0),t.__decorate([i.property()],S.prototype,"popupTemplate",void 0),t.__decorate([i.property({readOnly:!0})],S.prototype,"defaultPopupTemplate",null),t.__decorate([i.property({readOnly:!0,type:[I]})],S.prototype,"fields",void 0),t.__decorate([i.property({readOnly:!0,type:[I]})],S.prototype,"rasterFields",null),S=t.__decorate([p.subclass("esri.layers.WCSLayer")],S);return S}));