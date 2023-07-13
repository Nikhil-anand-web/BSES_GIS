/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","./networkEnums"],(function(r,e,o,t,s,c,n,p,i,u){"use strict";let a=function(e){function o(r){return e.call(this,r)||this}return r._inherits(o,e),r._createClass(o)}(o.JSONSupport);e.__decorate([t.property({json:{read:{source:"string"}}})],a.prototype,"text",void 0),e.__decorate([p.enumeration(u.directionsStringTypeJsonMap,{name:"stringType"})],a.prototype,"type",void 0),a=e.__decorate([i.subclass("esri.rest.support.DirectionsString")],a);return a}));
