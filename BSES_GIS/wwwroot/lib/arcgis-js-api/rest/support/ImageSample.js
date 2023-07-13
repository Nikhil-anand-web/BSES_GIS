/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../geometry/Point"],(function(e,r,o,t,p,s,i,l,a){"use strict";let c=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).attributes=null,e.location=null,e.locationId=null,e.rasterId=null,e.resolution=null,e.pixelValue=null,e}return e._inherits(o,r),e._createClass(o)}(o.JSONSupport);r.__decorate([t.property({json:{write:!0}})],c.prototype,"attributes",void 0),r.__decorate([t.property({type:a,json:{write:!0}})],c.prototype,"location",void 0),r.__decorate([t.property({json:{write:!0}})],c.prototype,"locationId",void 0),r.__decorate([t.property({json:{write:!0}})],c.prototype,"rasterId",void 0),r.__decorate([t.property({json:{write:!0}})],c.prototype,"resolution",void 0),r.__decorate([t.property({json:{write:!0}})],c.prototype,"pixelValue",void 0),c=r.__decorate([l.subclass("esri.rest.support.ImageSample")],c);return c}));