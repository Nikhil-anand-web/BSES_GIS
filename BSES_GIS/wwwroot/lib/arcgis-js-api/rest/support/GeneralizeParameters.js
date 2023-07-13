/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/arrayUtils","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/has","../../core/accessorSupport/decorators/subclass","../../geometry/support/jsonUtils"],(function(e,r,t,o,s,i,p,n,a){"use strict";let c=function(r){function t(e){var t;return(t=r.call(this,e)||this).deviationUnit=null,t.geometries=null,t.maxDeviation=null,t}return e._inherits(t,r),e._createClass(t)}(o.JSONSupport);r.__decorate([s.property({type:String,json:{write:!0}})],c.prototype,"deviationUnit",void 0),r.__decorate([s.property({json:{read:{reader:e=>e?e.map((e=>a.fromJSON(e))).filter(t.isSome):null},write:{writer:(e,r)=>{r.geometries=e?.map((e=>e.toJSON()))??null}}}})],c.prototype,"geometries",void 0),r.__decorate([s.property({type:Number,json:{write:!0}})],c.prototype,"maxDeviation",void 0),c=r.__decorate([n.subclass("esri.rest.support.GeneralizeParameters")],c),c.from=i.ensureType(c);return c}));
