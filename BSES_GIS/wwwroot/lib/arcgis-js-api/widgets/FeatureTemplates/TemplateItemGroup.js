/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/Identifiable","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,c,i,l,p){"use strict";let a=function(r){function t(e){var t;return(t=r.call(this,e)||this).items=null,t.label=null,t}return e._inherits(t,r),t.prototype.findByTemplate=function(e){return this.items.find((r=>r.template===e))},e._createClass(t,[{key:"id",get:function(){return this.label}}]),t}(o.IdentifiableMixin(t));r.__decorate([s.property()],a.prototype,"items",void 0),r.__decorate([s.property()],a.prototype,"label",void 0),r.__decorate([s.property()],a.prototype,"id",null),a=r.__decorate([p.subclass("esri.widgets.FeatureTemplates.TemplateItemGroup")],a);return a}));
