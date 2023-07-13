/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../geometry","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../../networks/support/typeUtils","../../../geometry/Extent"],(function(e,t,r,o,a,i,s,p,n,l,c){"use strict";var u;let d=u=function(t){function r(e){var r;return(r=t.call(this,e)||this).gdbVersion=null,r.sessionID=null,r.validationType=null,r.validateArea=null,r.validationSet=null,r}return e._inherits(r,t),r.from=function(e){return i.ensureClass(u,e)},e._createClass(r)}(o.JSONSupport);t.__decorate([a.property({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),t.__decorate([a.property({type:String,json:{write:!0}})],d.prototype,"sessionID",void 0),t.__decorate([a.property({type:l.validationTypeKebabDict.apiValues,json:{type:l.validationTypeKebabDict.jsonValues,read:l.validationTypeKebabDict.read,write:l.validationTypeKebabDict.write}})],d.prototype,"validationType",void 0),t.__decorate([a.property({type:c,json:{write:!0}})],d.prototype,"validateArea",void 0),t.__decorate([a.property({type:[Object],json:{write:!0}})],d.prototype,"validationSet",void 0),d=u=t.__decorate([n.subclass("esri.rest.networks.support.ValidateNetworkTopologyParameters")],d);return d}));