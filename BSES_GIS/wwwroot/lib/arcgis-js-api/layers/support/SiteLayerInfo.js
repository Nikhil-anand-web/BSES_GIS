/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,p,i,a){"use strict";let c=function(r){function t(e){var t;return(t=r.call(this,e)||this).layerId=null,t.nameField=null,t.siteIdField=null,t.sublayerId=null,t}return e._inherits(t,r),e._createClass(t)}(t.JSONSupport);r.__decorate([o.property({type:String,json:{write:!0}})],c.prototype,"layerId",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],c.prototype,"nameField",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],c.prototype,"siteIdField",void 0),r.__decorate([o.property({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],c.prototype,"sublayerId",void 0),c=r.__decorate([a.subclass("esri.layers.support.SiteLayerInfo")],c);return c}));