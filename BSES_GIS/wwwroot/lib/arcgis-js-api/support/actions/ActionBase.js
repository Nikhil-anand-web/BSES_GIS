/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/Identifiable","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,t,o,r,i,s,c,p,a){"use strict";var l;let d=l=function(t){function o(e){var o;return(o=t.call(this,e)||this).active=!1,o.className=null,o.disabled=!1,o.icon=null,o.id=null,o.indicator=!1,o.title=null,o.type=null,o.visible=!0,o}return e._inherits(o,t),o.prototype.clone=function(){return new l({active:this.active,className:this.className,disabled:this.disabled,icon:this.icon,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible})},e._createClass(o)}(r.IdentifiableMixin(o));t.__decorate([i.property()],d.prototype,"active",void 0),t.__decorate([i.property()],d.prototype,"className",void 0),t.__decorate([i.property()],d.prototype,"disabled",void 0),t.__decorate([i.property()],d.prototype,"icon",void 0),t.__decorate([i.property()],d.prototype,"id",void 0),t.__decorate([i.property()],d.prototype,"indicator",void 0),t.__decorate([i.property()],d.prototype,"title",void 0),t.__decorate([i.property()],d.prototype,"type",void 0),t.__decorate([i.property()],d.prototype,"visible",void 0),d=l=t.__decorate([a.subclass("esri.support.actions.ActionBase")],d);return d}));