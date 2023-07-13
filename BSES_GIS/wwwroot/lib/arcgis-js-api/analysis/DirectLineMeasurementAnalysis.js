/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","./Analysis","../core/unitUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass","../geometry/Point"],(function(e,t,r,o,n,i,s,p,u,a){"use strict";let c=function(t){function r(e){var r;return(r=t.call(this,e)||this).type="direct-line-measurement",r.startPoint=null,r.endPoint=null,r.unit=null,r}return e._inherits(r,t),r.prototype.clear=function(){this.startPoint=null,this.endPoint=null},e._createClass(r,[{key:"requiredPropertiesForEditing",get:function(){return[this.startPoint,this.endPoint]}}]),r}(r);t.__decorate([n.property({type:["direct-line-measurement"]})],c.prototype,"type",void 0),t.__decorate([n.property({type:a})],c.prototype,"startPoint",void 0),t.__decorate([n.property({type:a})],c.prototype,"endPoint",void 0),t.__decorate([n.property({type:o.measurementLengthUnits,value:null})],c.prototype,"unit",void 0),t.__decorate([n.property({readOnly:!0})],c.prototype,"requiredPropertiesForEditing",null),c=t.__decorate([u.subclass("esri.analysis.DirectLineMeasurementAnalysis")],c);return c}));
