/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(r,e,t,o,s,p,c,u){"use strict";let a=function(e){function t(r){var t;return(t=e.call(this,r)||this).layerId=null,t.subLayerIds=null,t.title=null,t}return r._inherits(t,e),r._createClass(t)}(t.JSONSupport);e.__decorate([o.property({json:{write:!0}})],a.prototype,"layerId",void 0),e.__decorate([o.property({json:{write:!0}})],a.prototype,"subLayerIds",void 0),e.__decorate([o.property({json:{write:!0}})],a.prototype,"title",void 0),a=e.__decorate([u.subclass("esri.rest.support.LegendLayer")],a);return a}));
