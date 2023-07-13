/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,p,i,c){"use strict";let a=function(r){function t(){return r.apply(this,arguments)||this}return e._inherits(t,r),e._createClass(t)}(t.JSONSupport);r.__decorate([o.property({type:Boolean,json:{write:!0}})],a.prototype,"timeDataCumulative",void 0),r.__decorate([o.property({type:Number,json:{write:!0}})],a.prototype,"timeOffset",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],a.prototype,"timeOffsetUnits",void 0),r.__decorate([o.property({type:Boolean,json:{write:!0}})],a.prototype,"useTime",void 0),a=r.__decorate([c.subclass("esri.layers.support.LayerTimeOptions")],a);return a}));