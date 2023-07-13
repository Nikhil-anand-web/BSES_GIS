/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Error","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./FeatureLayerViewBase3D","../../layers/OGCFeatureLayerView"],(function(e,r,t,s,a,i,o,c,p,l){"use strict";let n=function(r){function s(){var e;return(e=r.apply(this,arguments)||this).type="ogc-feature-3d",e}return e._inherits(s,r),s.prototype.initialize=function(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new t("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))},e._createClass(s)}(l(p));r.__decorate([s.property()],n.prototype,"layer",void 0),n=r.__decorate([c.subclass("esri.views.3d.layers.OGCFeatureLayerView3D")],n);return n}));
