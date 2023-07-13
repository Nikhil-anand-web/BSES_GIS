/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./UniqueValueClass"],(function(e,r,s,o,t,c,n,p,a,u){"use strict";let l=function(r){function s(e){var s;return(s=r.call(this,e)||this).heading=null,s.classes=null,s}return e._inherits(s,r),e._createClass(s)}(s.ClonableMixin(o.JSONSupport));r.__decorate([t.property({type:String,json:{write:!0}})],l.prototype,"heading",void 0),r.__decorate([t.property({type:[u],json:{write:!0}})],l.prototype,"classes",void 0),l=r.__decorate([a.subclass("esri.renderers.support.UniqueValueGroup")],l);return l}));
