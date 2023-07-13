/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(r,e,t,o,s,c,p,a){"use strict";let u=function(e){function t(r){var t;return(t=e.call(this,r)||this).format=null,t.itemId=null,t.url=null,t}return r._inherits(t,e),r._createClass(t)}(t.JSONSupport);e.__decorate([o.property()],u.prototype,"format",void 0),e.__decorate([o.property({json:{read:{source:"itemID"},write:{target:"itemID"}}})],u.prototype,"itemId",void 0),e.__decorate([o.property()],u.prototype,"url",void 0),u=e.__decorate([a.subclass("esri.rest.support.RasterData")],u);return u}));
