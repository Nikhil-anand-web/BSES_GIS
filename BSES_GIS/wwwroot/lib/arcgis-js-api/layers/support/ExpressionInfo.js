/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,p,n,c,i){"use strict";let l=function(r){function t(e){var t;return(t=r.call(this,e)||this).expression=null,t.title=null,t.returnType=null,t}return e._inherits(t,r),e._createClass(t)}(t.ClonableMixin(o.JSONSupport));r.__decorate([s.property({type:String,json:{write:!0}})],l.prototype,"expression",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],l.prototype,"title",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],l.prototype,"returnType",void 0),l=r.__decorate([i.subclass("esri.layers.support.ExpressionInfo")],l);return l}));
