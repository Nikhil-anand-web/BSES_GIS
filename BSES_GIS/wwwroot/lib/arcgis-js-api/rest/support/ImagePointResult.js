/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./BaseImageMeasureResult","../../geometry/Point"],(function(e,r,s,t,o,a,u,c,n,p){"use strict";let i=function(r){function s(){var e;return(e=r.apply(this,arguments)||this).point=null,e}return e._inherits(s,r),e._createClass(s)}(n.BaseImageMeasureResult);r.__decorate([t.property({type:p,json:{name:"point.value",read:!0,write:!0}})],i.prototype,"point",void 0),i=r.__decorate([c.subclass("esri.rest.support.ImagePointResult")],i);return i}));
