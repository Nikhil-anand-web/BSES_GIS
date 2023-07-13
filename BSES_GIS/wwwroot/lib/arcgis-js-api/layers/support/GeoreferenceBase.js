/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/Logger","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/Error","../../core/accessorSupport/decorators/subclass","../../geometry/projection"],(function(e,r,t,o,n,c,s,a,l,u){"use strict";let i=function(r){function t(){return r.apply(this,arguments)||this}return e._inherits(t,r),t.prototype.projectOrWarn=function(e,r){if(null==e)return e;const{geometry:t,pending:n}=u.projectOrLoad(e,r);return n?null:n||t?t:(o.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:r}),null)},e._createClass(t)}(t.Clonable);i=r.__decorate([l.subclass("esri.layers.support.GeoreferenceBase")],i);return i}));
