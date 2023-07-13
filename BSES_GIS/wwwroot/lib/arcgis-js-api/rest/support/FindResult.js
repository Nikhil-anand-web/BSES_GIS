/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../Graphic","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","../../geometry/support/typeUtils"],(function(e,r,t,o,a,p,s,u,i,c,l,n,y){"use strict";let d=function(r){function t(e){var t;return(t=r.call(this,e)||this).displayFieldName=null,t.feature=null,t.foundFieldName=null,t.layerId=null,t.layerName=null,t.value=void 0,t}e._inherits(t,r);var a=t.prototype;return a.readFeature=function(e,r){const t={attributes:{}};return r.attributes&&(t.attributes=r.attributes),r.geometry&&(t.geometry=r.geometry),o.fromJSON(t)},a.writeFeature=function(e,r){if(!e)return;const{attributes:t,geometry:o}=e;t&&(r.attributes={...t}),null!=o&&(r.geometry=o.toJSON(),r.geometryType=y.typeKebabDictionary.toJSON(o.type))},e._createClass(t)}(a.JSONSupport);r.__decorate([p.property({type:String,json:{write:!0}})],d.prototype,"displayFieldName",void 0),r.__decorate([p.property({type:o})],d.prototype,"feature",void 0),r.__decorate([c.reader("feature",["attributes","geometry"])],d.prototype,"readFeature",null),r.__decorate([n.writer("feature")],d.prototype,"writeFeature",null),r.__decorate([p.property({type:String,json:{write:!0}})],d.prototype,"foundFieldName",void 0),r.__decorate([p.property({type:Number,json:{write:!0}})],d.prototype,"layerId",void 0),r.__decorate([p.property({type:String,json:{write:!0}})],d.prototype,"layerName",void 0),r.__decorate([p.property({json:{write:!0}})],d.prototype,"value",void 0),d=r.__decorate([l.subclass("esri.rest.support.FindResult")],d);return d}));
