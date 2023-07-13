/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/arrayUtils","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/has","../../core/accessorSupport/decorators/subclass","../../geometry/support/jsonUtils"],(function(e,r,t,o,s,p,i,n,c){"use strict";let a=function(r){function t(e){var t;return(t=r.call(this,e)||this).bevelRatio=null,t.geometries=null,t.offsetDistance=null,t.offsetHow=null,t.offsetUnit=null,t}return e._inherits(t,r),e._createClass(t)}(o.JSONSupport);r.__decorate([s.property({type:Number,json:{write:!0}})],a.prototype,"bevelRatio",void 0),r.__decorate([s.property({json:{read:{reader:e=>e?e.map((e=>c.fromJSON(e))).filter(t.isSome):null},write:{writer:(e,r)=>{r.geometries=e?.map((e=>e.toJSON()))??null}}}})],a.prototype,"geometries",void 0),r.__decorate([s.property({type:Number,json:{write:!0}})],a.prototype,"offsetDistance",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],a.prototype,"offsetHow",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],a.prototype,"offsetUnit",void 0),a=r.__decorate([n.subclass("esri.rest.support.OffsetParameters")],a),a.from=p.ensureType(a);return a}));
