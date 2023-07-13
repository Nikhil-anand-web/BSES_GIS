/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./commonProperties","../../geometry/Point","../../geometry/SpatialReference","../../geometry/Extent"],(function(e,t,r,o,p,n,i,a,s,c,l,y,u){"use strict";let d=function(t){function r(e){var r;return(r=t.call(this,e)||this).address=null,r.apiKey=null,r.categories=null,r.countryCode=null,r.forStorage=null,r.location=null,r.locationType=null,r.magicKey=null,r.maxLocations=null,r.outFields=null,r.outSpatialReference=null,r.searchExtent=null,r}return e._inherits(r,t),e._createClass(r)}(o.JSONSupport);t.__decorate([p.property({type:Object,json:{write:!0}})],d.prototype,"address",void 0),t.__decorate([p.property(c.apiKey)],d.prototype,"apiKey",void 0),t.__decorate([p.property({type:[String],json:{read:{source:"category",reader:e=>e?e.split(","):null},write:{target:"category",writer:(e,t)=>{t.category=e?e.join(","):null}}}})],d.prototype,"categories",void 0),t.__decorate([p.property({type:String,json:{write:!0}})],d.prototype,"countryCode",void 0),t.__decorate([p.property({type:Boolean,json:{write:!0}})],d.prototype,"forStorage",void 0),t.__decorate([p.property({type:l,json:{write:{writer:(e,t)=>{t.location=e?e.clone().normalize():null}}}})],d.prototype,"location",void 0),t.__decorate([p.property({type:String,json:{write:!0}})],d.prototype,"locationType",void 0),t.__decorate([p.property({type:String,json:{write:!0}})],d.prototype,"magicKey",void 0),t.__decorate([p.property({type:Number,json:{write:!0}})],d.prototype,"maxLocations",void 0),t.__decorate([p.property({type:[String],json:{write:{writer:(e,t)=>{t.outFields=e?e.join(","):null}}}})],d.prototype,"outFields",void 0),t.__decorate([p.property({type:y,json:{read:{source:"outSR"},write:{target:"outSR"}}})],d.prototype,"outSpatialReference",void 0),t.__decorate([p.property({type:u,json:{write:{writer:(e,t)=>{const r=e?e.shiftCentralMeridian():null;t.searchExtent=r}}}})],d.prototype,"searchExtent",void 0),d=t.__decorate([s.subclass("esri.rest.support.AddressToLocationsParameters")],d),d.from=n.ensureType(d);return d}));
