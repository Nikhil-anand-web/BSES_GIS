/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./commonProperties"],(function(e,r,o,t,s,l,n,i,p){"use strict";var c;let u=c=function(r){function o(e){var o;return(o=r.call(this,e)||this).description=null,o.label=null,o.symbol=null,o.value=null,o}e._inherits(o,r);var t=o.prototype;return t.clone=function(){return new c({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})},t.getMeshHash=function(){const e=JSON.stringify(this.symbol&&this.symbol.toJSON());return`${this.value}.${e}`},e._createClass(o)}(o.JSONSupport);r.__decorate([t.property({type:String,json:{write:!0}})],u.prototype,"description",void 0),r.__decorate([t.property({type:String,json:{write:!0}})],u.prototype,"label",void 0),r.__decorate([t.property(p.rendererSymbolProperty)],u.prototype,"symbol",void 0),r.__decorate([t.property(p.uniqueValueProperty)],u.prototype,"value",void 0),u=c=r.__decorate([i.subclass("esri.renderers.support.UniqueValueInfo")],u);return u}));