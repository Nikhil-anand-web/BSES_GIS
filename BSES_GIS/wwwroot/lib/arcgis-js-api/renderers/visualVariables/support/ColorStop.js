/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Color","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../../core/accessorSupport/decorators/writer"],(function(r,e,o,t,l,s,c,p,u,a){"use strict";var n;let i=n=function(e){function o(r){var o;return(o=e.call(this,r)||this).color=null,o.label=null,o.value=null,o}r._inherits(o,e);var t=o.prototype;return t.writeValue=function(r,e,o){e[o]=r??0},t.clone=function(){return new n({color:this.color&&this.color.clone(),label:this.label,value:this.value})},r._createClass(o)}(t.JSONSupport);e.__decorate([l.property({type:o,json:{type:[s.Integer],write:!0}})],i.prototype,"color",void 0),e.__decorate([l.property({type:String,json:{write:!0}})],i.prototype,"label",void 0),e.__decorate([l.property({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],i.prototype,"value",void 0),e.__decorate([a.writer("value")],i.prototype,"writeValue",null),i=n=e.__decorate([u.subclass("esri.renderers.visualVariables.support.ColorStop")],i);return i}));
