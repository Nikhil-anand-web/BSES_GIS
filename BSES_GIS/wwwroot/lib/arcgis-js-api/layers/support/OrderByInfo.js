/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,s,t,n,p,i,c){"use strict";var a;const u=new o.JSONMap({asc:"ascending",desc:"descending"});let l=a=function(r){function o(e){var o;return(o=r.call(this,e)||this).field=null,o.valueExpression=null,o.order="ascending",o}return e._inherits(o,r),o.prototype.clone=function(){return new a({field:this.field,valueExpression:this.valueExpression,order:this.order})},e._createClass(o)}(s.JSONSupport);r.__decorate([t.property({type:String,json:{write:!0}})],l.prototype,"field",void 0),r.__decorate([t.property({type:String,json:{write:!0}})],l.prototype,"valueExpression",void 0),r.__decorate([t.property({type:u.apiValues,json:{read:u.read,write:u.write}})],l.prototype,"order",void 0),l=a=r.__decorate([c.subclass("esri.layers.support.OrderByInfo")],l);return l}));