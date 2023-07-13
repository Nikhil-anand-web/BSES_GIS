/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./AggregatedGeometry","./FunctionResult","./NetworkElement"],(function(e,r,t,o,n,s,p,a,l,c,i){"use strict";let u=function(r){function t(e){var t;return(t=r.call(this,e)||this).aggregatedGeometry=null,t.elements=null,t.globalFunctionResults=null,t.kFeaturesForKNNFound=!1,t.startingPointsIgnored=!1,t.warnings=null,t}return e._inherits(t,r),e._createClass(t)}(t.JSONSupport);r.__decorate([o.property({type:l,json:{write:!0},readOnly:!0})],u.prototype,"aggregatedGeometry",void 0),r.__decorate([o.property({type:[i],json:{write:!0},readOnly:!0})],u.prototype,"elements",void 0),r.__decorate([o.property({type:[c],json:{write:!0},readOnly:!0})],u.prototype,"globalFunctionResults",void 0),r.__decorate([o.property({type:Boolean,json:{write:!0},readOnly:!0})],u.prototype,"kFeaturesForKNNFound",void 0),r.__decorate([o.property({type:Boolean,json:{write:!0},readOnly:!0})],u.prototype,"startingPointsIgnored",void 0),r.__decorate([o.property({type:[String],json:{write:!0},readOnly:!0})],u.prototype,"warnings",void 0),u=r.__decorate([a.subclass("esri.rest.networks.support.TraceResult")],u);return u}));
