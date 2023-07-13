/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/Error","../../../core/accessorSupport/decorators/subclass","./FeatureLayerView2D","../../layers/OGCFeatureLayerView"],(function(e,r,s,t,a,c,o,u,i,n){"use strict";let l=function(r){function s(){return r.apply(this,arguments)||this}return e._inherits(s,r),s.prototype.supportsSpatialReference=function(e){return this.layer.serviceSupportsSpatialReference(e)},e._createClass(s)}(n(i));l=r.__decorate([u.subclass("esri.views.2d.layers.OGCFeatureLayerView2D")],l);return l}));
