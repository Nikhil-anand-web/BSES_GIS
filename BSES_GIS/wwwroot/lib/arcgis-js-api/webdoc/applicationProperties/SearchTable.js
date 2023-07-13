/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./SearchTableField"],(function(e,r,t,o,i,s,c,p){"use strict";var n;let l=n=function(r){function t(e){var t;return(t=r.call(this,e)||this).field=null,t.id=null,t}return e._inherits(t,r),t.prototype.clone=function(){return new n(o.clone({field:this.field,id:this.id}))},e._createClass(t)}(t.JSONSupport);r.__decorate([i.property({type:p,json:{write:{isRequired:!0}}})],l.prototype,"field",void 0),r.__decorate([i.property({type:String,json:{write:{isRequired:!0}}})],l.prototype,"id",void 0),l=n=r.__decorate([c.subclass("esri.webdoc.applicationProperties.SearchTable")],l);return l}));
