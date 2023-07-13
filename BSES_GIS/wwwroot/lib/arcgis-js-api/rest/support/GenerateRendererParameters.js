/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,c,i,n){"use strict";let a=function(r){function t(e){var t;return(t=r.call(this,e)||this).classificationDefinition=null,t.where=null,t}return e._inherits(t,r),e._createClass(t)}(t.JSONSupport);r.__decorate([o.property({json:{name:"classificationDef",write:!0}})],a.prototype,"classificationDefinition",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],a.prototype,"where",void 0),a=r.__decorate([n.subclass("esri.rest.support.GenerateRendererParameters")],a);return a}));
