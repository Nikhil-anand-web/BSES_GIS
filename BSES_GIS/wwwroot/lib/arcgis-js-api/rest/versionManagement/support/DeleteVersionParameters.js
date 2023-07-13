/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass"],(function(e,r,o,s,t,c,i,n){"use strict";let p=function(r){function o(e){var o;return(o=r.call(this,e)||this).versionName=void 0,o.sessionId=void 0,o}return e._inherits(o,r),e._createClass(o)}(o.JSONSupport);r.__decorate([s.property({type:String,json:{write:!0}})],p.prototype,"versionName",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],p.prototype,"sessionId",void 0),p=r.__decorate([n.subclass("esri.rest.versionManagement.support.DeleteVersionParameters")],p);return p}));
