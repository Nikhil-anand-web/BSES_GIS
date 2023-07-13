/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/lang","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../form/ExpressionInfo"],(function(e,o,r,s,t,n,p,c){"use strict";var l;let u=l=function(o){function r(e){var r;return(r=o.call(this,e)||this).columnTemplates=[],r.expressionInfos=null,r}return e._inherits(r,o),r.prototype.clone=function(){return new l({columnTemplates:s.clone(this.columnTemplates),expressionInfos:s.clone(this.expressionInfos)})},e._createClass(r)}(r.JSONSupport);o.__decorate([t.property()],u.prototype,"columnTemplates",void 0),o.__decorate([t.property({type:[c],json:{write:!0}})],u.prototype,"expressionInfos",void 0),u=l=o.__decorate([p.subclass("esri.widgets.FeatureTable.support.TableTemplate")],u);return u}));