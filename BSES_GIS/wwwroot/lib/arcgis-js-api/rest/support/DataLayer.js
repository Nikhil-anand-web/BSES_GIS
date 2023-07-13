/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","./networkEnums","../../geometry/support/jsonUtils"],(function(e,t,o,r,p,s,a,n,i,l,c,y,u){"use strict";let d=function(t){function o(e){var o;return(o=t.call(this,e)||this).doNotLocateOnRestrictedElements=null,o.geometry=null,o.geometryType=null,o.name=null,o.spatialRelationship=null,o.type="layer",o.where=null,o}return e._inherits(o,t),e._createClass(o)}(r.ClonableMixin(p.JSONSupport));t.__decorate([s.property({type:Boolean,json:{write:!0}})],d.prototype,"doNotLocateOnRestrictedElements",void 0),t.__decorate([s.property({types:o.geometryTypes,json:{read:u.fromJSON,write:!0}})],d.prototype,"geometry",void 0),t.__decorate([l.enumeration(y.geometryTypeJsonMap)],d.prototype,"geometryType",void 0),t.__decorate([s.property({type:String,json:{name:"layerName",write:!0}})],d.prototype,"name",void 0),t.__decorate([l.enumeration(y.spatialRelationshipJsonMap,{name:"spatialRel"})],d.prototype,"spatialRelationship",void 0),t.__decorate([s.property({type:String,json:{write:!0}})],d.prototype,"type",void 0),t.__decorate([s.property({type:String,json:{write:!0}})],d.prototype,"where",void 0),d=t.__decorate([c.subclass("esri.rest.support.DataLayer")],d);return d}));