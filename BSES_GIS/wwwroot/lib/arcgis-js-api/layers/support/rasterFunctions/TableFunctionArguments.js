/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/lang","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./BaseFunctionArguments"],(function(e,r,t,s,o,c,n){"use strict";var u;let a=u=function(r){function s(){var e;return(e=r.apply(this,arguments)||this).attributeTableAsRecordSet=null,e}return e._inherits(s,r),s.prototype.clone=function(){return new u({attributeTableAsRecordSet:t.clone(this.attributeTableAsRecordSet)})},e._createClass(s)}(n);r.__decorate([s.property({json:{write:!0}})],a.prototype,"attributeTableAsRecordSet",void 0),a=u=r.__decorate([c.subclass("esri.layers.support.rasterFunctions.TableFunctionArguments")],a);return a}));
