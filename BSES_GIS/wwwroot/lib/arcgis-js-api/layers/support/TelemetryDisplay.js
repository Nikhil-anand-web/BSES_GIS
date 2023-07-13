/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,p,l,s,n,a){"use strict";let c=function(r){function o(e){var o;return(o=r.call(this,e)||this).frameCenter=null,o.frameOutline=null,o.lineOfSight=null,o.sensorLocation=null,o.sensorTrail=null,o}return e._inherits(o,r),e._createClass(o)}(o.ClonableMixin(t.JSONSupport));r.__decorate([p.property({type:Boolean})],c.prototype,"frameCenter",void 0),r.__decorate([p.property({type:Boolean})],c.prototype,"frameOutline",void 0),r.__decorate([p.property({type:Boolean})],c.prototype,"lineOfSight",void 0),r.__decorate([p.property({type:Boolean})],c.prototype,"sensorLocation",void 0),r.__decorate([p.property({type:Boolean})],c.prototype,"sensorTrail",void 0),c=r.__decorate([a.subclass("esri.layers.support.TelemetryDisplay")],c);return c}));