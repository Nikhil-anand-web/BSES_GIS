/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../geometry/support/jsonUtils","../../geometry/Polyline"],(function(e,r,o,t,s,p,l,n,c,i,a){"use strict";let u=function(r){function o(e){var o;return(o=r.call(this,e)||this).calculationType=null,o.geodesic=null,o.lengthUnit=null,o.polylines=null,o}return e._inherits(o,r),e._createClass(o)}(t.JSONSupport);r.__decorate([s.property({type:String,json:{write:!0}})],u.prototype,"calculationType",void 0),r.__decorate([s.property({type:Boolean,json:{write:!0}})],u.prototype,"geodesic",void 0),r.__decorate([s.property({json:{write:!0}})],u.prototype,"lengthUnit",void 0),r.__decorate([s.property({type:[a],json:{read:{reader:e=>e?e.map((e=>i.fromJSON(e))):null},write:{writer:(e,r)=>{r.polylines=e.map((e=>e.toJSON()))}}}})],u.prototype,"polylines",void 0),u=r.__decorate([c.subclass("esri.rest.support.LengthsParameters")],u),u.from=p.ensureType(u);return u}));