/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/enumeration","../../../core/accessorSupport/decorators/subclass","./PointSizeAlgorithm"],(function(e,o,r,t,s,i,l,n,p){"use strict";var c;let u=c=function(o){function r(){var e;return(e=o.apply(this,arguments)||this).type="fixed-size",e.size=0,e.useRealWorldSymbolSizes=null,e}return e._inherits(r,o),r.prototype.clone=function(){return new c({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})},e._createClass(r)}(p);o.__decorate([l.enumeration({pointCloudFixedSizeAlgorithm:"fixed-size"})],u.prototype,"type",void 0),o.__decorate([r.property({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"size",void 0),o.__decorate([r.property({type:Boolean,json:{write:!0}})],u.prototype,"useRealWorldSymbolSizes",void 0),u=c=o.__decorate([n.subclass("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],u);return u}));
