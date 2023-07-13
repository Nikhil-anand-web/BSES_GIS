/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./VisualVariable","./support/OpacityStop"],(function(t,e,r,s,o,i,a,n,p){"use strict";var l;let c=l=function(e){function r(t){var r;return(r=e.call(this,t)||this).type="opacity",r.normalizationField=null,r}t._inherits(r,e);var s=r.prototype;return s.clone=function(){return new l({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map((t=>t.clone())),legendOptions:this.legendOptions&&this.legendOptions.clone()})},s.getAttributeHash=function(){return`${t._get(t._getPrototypeOf(r.prototype),"getAttributeHash",this).call(this)}-${this.normalizationField}`},s._interpolateData=function(){return this.stops&&this.stops.map((t=>t.value||0))},t._createClass(r,[{key:"cache",get:function(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}},{key:"stops",set:function(t){t&&Array.isArray(t)&&(t=t.filter((t=>!!t))).sort(((t,e)=>t.value-e.value)),this._set("stops",t)}}]),r}(n);e.__decorate([r.property({readOnly:!0})],c.prototype,"cache",null),e.__decorate([r.property({type:["opacity"],json:{type:["transparencyInfo"]}})],c.prototype,"type",void 0),e.__decorate([r.property({type:String,json:{write:!0}})],c.prototype,"normalizationField",void 0),e.__decorate([r.property({type:[p],json:{write:!0}})],c.prototype,"stops",null),c=l=e.__decorate([a.subclass("esri.renderers.visualVariables.OpacityVariable")],c);return c}));