/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Error","../../core/urlUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","../../core/accessorSupport/read","../../core/accessorSupport/write","./operationalLayers","../support/commonProperties"],(function(e,r,t,o,i,a,s,n,p,l,y,c,u,d,w){"use strict";const g=e=>{let s=function(e){function t(){var r;return(r=e.apply(this,arguments)||this).title=null,r}r._inherits(t,e);var a=t.prototype;return a.writeListMode=function(e,r,t,o){(o&&"ground"===o.layerContainerType||e&&u.willPropertyWrite(this,t,{},o))&&(r[t]=e)},a.writeOperationalLayerType=function(e,r,t,o){!e||o&&"tables"===o.layerContainerType||(r.layerType=e)},a.writeTitle=function(e,r){r.title=e??"Layer"},a.read=function(e,o){o&&(o.layer=this),c.readLoadable(this,e,(o=>r._get(r._getPrototypeOf(t.prototype),"read",this).call(this,e,o)),o)},a.write=function(e,a){if(a?.origin){const e=`${a.origin}/${a.layerContainerType||"operational-layers"}`,r=d.supportedTypes[e];let t=!!r?.[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(t=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===e&&(t=!1),!t)return a.messages?.push(new o("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const s=r._get(r._getPrototypeOf(t.prototype),"write",this).call(this,e,{...a,layer:this}),n=!!a&&!!a.messages&&!!a.messages.filter((e=>e instanceof o&&"web-document-write:property-required"===e.name)).length;return i.isBlobProtocol(s?.url)?(a?.messages?.push(new o("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&n?null:s},a.beforeSave=function(){},r._createClass(t)}(e);return t.__decorate([a.property({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],s.prototype,"id",void 0),t.__decorate([a.property(w.listMode)],s.prototype,"listMode",void 0),t.__decorate([y.writer("listMode")],s.prototype,"writeListMode",null),t.__decorate([a.property({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],s.prototype,"operationalLayerType",void 0),t.__decorate([y.writer("operationalLayerType")],s.prototype,"writeOperationalLayerType",null),t.__decorate([a.property(w.opacity)],s.prototype,"opacity",void 0),t.__decorate([a.property({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],s.prototype,"title",void 0),t.__decorate([y.writer("title"),y.writer(["web-scene"],"title")],s.prototype,"writeTitle",null),t.__decorate([a.property({type:Boolean,json:{name:"visibility"}})],s.prototype,"visible",void 0),s=t.__decorate([l.subclass("esri.layers.mixins.OperationalLayer")],s),s};function h(e){return"operationalLayerType"in e}e.OperationalLayer=g,e.isOperationalLayer=h,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));