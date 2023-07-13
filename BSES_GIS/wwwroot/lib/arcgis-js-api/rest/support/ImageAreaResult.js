/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./BaseImageMeasureResult"],(function(e,r,s,t,a,o,u,p){"use strict";let c=function(r){function s(){var e;return(e=r.apply(this,arguments)||this).area=null,e.perimeter=null,e}return e._inherits(s,r),e._createClass(s)}(p.BaseImageMeasureResult);r.__decorate([s.property({type:p.ImageMeasureResultAreaValue,json:{read:!0,write:!0}})],c.prototype,"area",void 0),r.__decorate([s.property({type:p.ImageMeasureResultLengthValue,json:{read:!0,write:!0}})],c.prototype,"perimeter",void 0),c=r.__decorate([u.subclass("esri.rest.support.ImageAreaResult")],c);return c}));
