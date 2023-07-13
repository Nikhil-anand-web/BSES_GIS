/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,a,s,p,i){"use strict";var n;e.WMTSLayerInfo=n=function(e){function t(r){return e.call(this,r)||this}return r._inherits(t,e),t.prototype.clone=function(){return new n({customLayerParameters:a.clone(this.customLayerParameters),customParameters:a.clone(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})},r._createClass(t)}(o.JSONSupport),t.__decorate([s.property({json:{type:Object,write:!0}})],e.WMTSLayerInfo.prototype,"customLayerParameters",void 0),t.__decorate([s.property({json:{type:Object,write:!0}})],e.WMTSLayerInfo.prototype,"customParameters",void 0),t.__decorate([s.property({type:String,json:{write:!0}})],e.WMTSLayerInfo.prototype,"layerIdentifier",void 0),t.__decorate([s.property({type:String,json:{write:!0}})],e.WMTSLayerInfo.prototype,"tileMatrixSet",void 0),t.__decorate([s.property({type:String,json:{write:!0}})],e.WMTSLayerInfo.prototype,"url",void 0),e.WMTSLayerInfo=n=t.__decorate([i.subclass("esri.layer.support.WMTSLayerInfo")],e.WMTSLayerInfo),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
