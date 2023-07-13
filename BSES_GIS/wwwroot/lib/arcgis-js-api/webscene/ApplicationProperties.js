/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/JSONSupport","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass","../webdoc/applicationProperties/Viewing"],(function(e,r,o,t,i,s,c,n,p){"use strict";var u;let a=u=function(r){function o(e){var o;return(o=r.call(this,e)||this).viewing=null,o}return e._inherits(o,r),o.prototype.clone=function(){return new u({viewing:this.viewing?this.viewing.clone():null})},e._createClass(o)}(o.JSONSupport);r.__decorate([t.property({type:p,json:{write:!0}})],a.prototype,"viewing",void 0),a=u=r.__decorate([n.subclass("esri.webscene.ApplicationProperties")],a);return a}));
