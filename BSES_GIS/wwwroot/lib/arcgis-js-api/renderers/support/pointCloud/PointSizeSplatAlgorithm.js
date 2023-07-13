/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/enumeration","../../../core/accessorSupport/decorators/subclass","./PointSizeAlgorithm"],(function(e,r,t,o,s,c,a,p,n){"use strict";var l;let i=l=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).type="splat",e.scaleFactor=1,e}return e._inherits(t,r),t.prototype.clone=function(){return new l({scaleFactor:this.scaleFactor})},e._createClass(t)}(n);r.__decorate([a.enumeration({pointCloudSplatAlgorithm:"splat"})],i.prototype,"type",void 0),r.__decorate([t.property({type:Number,value:1,nonNullable:!0,json:{write:!0}})],i.prototype,"scaleFactor",void 0),i=l=r.__decorate([p.subclass("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],i);return i}));
