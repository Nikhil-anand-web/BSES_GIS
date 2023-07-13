/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/Error","../../../core/accessorSupport/decorators/enumeration","../../../core/accessorSupport/decorators/subclass","./BaseRasterTransform"],(function(r,e,t,o,s,n,c,a,i,u){"use strict";var p;let l=p=function(e){function t(){var r;return(r=e.apply(this,arguments)||this).type="identity",r}return r._inherits(t,e),t.prototype.clone=function(){return new p},r._createClass(t)}(u);e.__decorate([a.enumeration({IdentityXform:"identity"})],l.prototype,"type",void 0),l=p=e.__decorate([i.subclass("esri.layers.support.rasterTransforms.IdentityTransform")],l);return l}));
