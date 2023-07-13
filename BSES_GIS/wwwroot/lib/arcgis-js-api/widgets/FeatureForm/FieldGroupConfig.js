/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/cast","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./FieldConfig"],(function(e,r,o,t,s,i,c,p,l){"use strict";let a=function(r){function o(e){var o;return(o=r.call(this,e)||this).description=null,o.fieldConfig=null,o.label=null,o.state="expanded",o.visibilityExpression=null,o}return e._inherits(o,r),o.prototype.castFieldConfig=function(e){return e?e.map((e=>e.declaredClass?e:new l(e))):null},e._createClass(o)}(o);r.__decorate([t.property()],a.prototype,"description",void 0),r.__decorate([t.property()],a.prototype,"fieldConfig",void 0),r.__decorate([s.cast("fieldConfig")],a.prototype,"castFieldConfig",null),r.__decorate([t.property()],a.prototype,"label",void 0),r.__decorate([t.property()],a.prototype,"state",void 0),r.__decorate([t.property()],a.prototype,"visibilityExpression",void 0),a=r.__decorate([p.subclass("esri.widgets.FeatureForm.FieldGroupConfig")],a);return a}));
