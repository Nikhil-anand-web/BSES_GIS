/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./Search"],(function(e,r,o,t,c,s,n,p){"use strict";var a;let u=a=function(r){function o(e){var o;return(o=r.call(this,e)||this).search=null,o}return e._inherits(o,r),o.prototype.clone=function(){return new a(t.clone({search:this.search}))},e._createClass(o)}(o.JSONSupport);r.__decorate([c.property({type:p,json:{write:!0}})],u.prototype,"search",void 0),u=a=r.__decorate([n.subclass("esri.webdoc.applicationProperties.Viewing")],u);return u}));
