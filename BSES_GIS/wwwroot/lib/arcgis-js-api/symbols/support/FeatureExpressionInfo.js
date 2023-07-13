/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../layers/support/fieldUtils"],(function(e,r,t,s,o,i,n,p,c){"use strict";var l;let u=l=function(r){function t(e){return r.call(this,e)||this}e._inherits(t,r);var s=t.prototype;return s.collectRequiredFields=async function(e,r){return c.collectArcadeFieldNames(e,r,this.expression)},s.clone=function(){return new l({expression:this.expression,title:this.title})},s.equals=function(e){return this.expression===e.expression&&this.title===e.title},e._createClass(t)}(t.JSONSupport);r.__decorate([s.property({type:String,json:{write:!0}})],u.prototype,"expression",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],u.prototype,"title",void 0),u=l=r.__decorate([p.subclass("esri.layers.support.FeatureExpressionInfo")],u);return u}));