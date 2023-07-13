/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/jsonMap","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,p,i,n,c){"use strict";const a=new o.JSONMap({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let l=function(r){function o(){return r.apply(this,arguments)||this}return e._inherits(o,r),e._createClass(o)}(t.JSONSupport);r.__decorate([s.property({type:a.apiValues,readOnly:!0,nonNullable:!0,json:{type:a.jsonValues,read:!1,write:a.write}})],l.prototype,"type",void 0),l=r.__decorate([c.subclass("esri.renderers.support.pointCloud.PointSizeAlgorithm")],l);return l}));
