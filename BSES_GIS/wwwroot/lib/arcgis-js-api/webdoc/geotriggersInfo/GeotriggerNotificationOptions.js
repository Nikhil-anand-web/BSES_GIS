/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./ExpressionInfo"],(function(e,r,o,t,s,n,c,i,p,u){"use strict";let a=function(r){function o(e){var o;return(o=r.call(this,e)||this).expressionInfo=null,o.requestedActions=null,o}return e._inherits(o,r),e._createClass(o)}(o.ClonableMixin(t.JSONSupport));r.__decorate([s.property({type:u,json:{write:!0}})],a.prototype,"expressionInfo",void 0),r.__decorate([s.property({type:[String],json:{write:!0}})],a.prototype,"requestedActions",void 0),a=r.__decorate([p.subclass("esri.webdoc.geotriggersInfo.GeotriggerNotificationOptions")],a);return a}));
