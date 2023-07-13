/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../geometry","./dimensionUtils","../core/Clonable","../core/Cyclical","../core/JSONSupport","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/cast","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass","../core/accessorSupport/ensureType","../geometry/Point"],(function(e,r,o,t,s,n,i,p,c,a,l,u,y,d){"use strict";let _=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="length",o.startPoint=null,o.endPoint=null,o.measureType=t.LengthDimensionMeasureType.Direct,o.offset=0,o.orientation=0,o}return e._inherits(o,r),e._createClass(o)}(i.JSONSupportMixin(s.Clonable));r.__decorate([p.property({type:["length"],json:{write:{isRequired:!0}}})],_.prototype,"type",void 0),r.__decorate([p.property({type:d,json:{write:!0}})],_.prototype,"startPoint",void 0),r.__decorate([p.property({type:d,json:{write:!0}})],_.prototype,"endPoint",void 0),r.__decorate([p.property({type:t.lengthDimensionMeasureType,nonNullable:!0,json:{write:{isRequired:!0}}})],_.prototype,"measureType",void 0),r.__decorate([p.property({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],_.prototype,"offset",void 0),r.__decorate([p.property({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),c.cast((e=>n.cyclicalDegrees.normalize(y.ensureNumber(e),0,!0)))],_.prototype,"orientation",void 0),_=r.__decorate([u.subclass("esri.analysis.LengthDimension")],_);return _}));