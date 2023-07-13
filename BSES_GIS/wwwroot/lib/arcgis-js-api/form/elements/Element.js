/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,p){"use strict";let s=function(r){function t(e){var t;return(t=r.call(this,e)||this).description=null,t.label=null,t.type=null,t.visibilityExpression=null,t}return e._inherits(t,r),e._createClass(t)}(t.JSONSupport);r.__decorate([o.property({type:String,json:{write:!0}})],s.prototype,"description",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],s.prototype,"label",void 0),r.__decorate([o.property()],s.prototype,"type",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],s.prototype,"visibilityExpression",void 0),s=r.__decorate([p.subclass("esri.form.elements.Element")],s);return s}));
