/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","./Domain"],(function(e,r,a,t,n,o,s,u,i){"use strict";var l;let c=l=function(r){function a(e){var a;return(a=r.call(this,e)||this).maxValue=null,a.minValue=null,a.type="range",a}return e._inherits(a,r),a.prototype.clone=function(){return new l({maxValue:this.maxValue,minValue:this.minValue,name:this.name})},e._createClass(a)}(i);r.__decorate([a.property({type:Number,json:{type:[Number],read:{source:"range",reader:(e,r)=>r.range&&r.range[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,r,a){r[a]=[this.minValue||0,e]}}}})],c.prototype,"maxValue",void 0),r.__decorate([a.property({type:Number,json:{type:[Number],read:{source:"range",reader:(e,r)=>r.range&&r.range[0]},write:{target:"range",writer(e,r,a){r[a]=[e,this.maxValue||0]}}}})],c.prototype,"minValue",void 0),r.__decorate([s.enumeration({range:"range"})],c.prototype,"type",void 0),c=l=r.__decorate([u.subclass("esri.layers.support.RangeDomain")],c);return c}));
