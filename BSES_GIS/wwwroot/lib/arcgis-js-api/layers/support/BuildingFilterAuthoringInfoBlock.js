/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Collection","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./BuildingFilterAuthoringInfoType"],(function(e,r,o,t,s,c,n,p,i){"use strict";var u;const l=o.ofType(i);let a=u=function(r){function o(){return r.apply(this,arguments)||this}return e._inherits(o,r),o.prototype.clone=function(){return new u({filterTypes:s.clone(this.filterTypes)})},e._createClass(o)}(t.JSONSupport);r.__decorate([c.property({type:l,json:{write:!0}})],a.prototype,"filterTypes",void 0),a=u=r.__decorate([p.subclass("esri.layers.support.BuildingFilterAuthoringInfoBlock")],a);return a}));
