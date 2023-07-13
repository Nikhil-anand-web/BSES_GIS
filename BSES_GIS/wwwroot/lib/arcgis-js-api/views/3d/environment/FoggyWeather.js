/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/enumeration","../../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,n,s,c,p,a){"use strict";var u;let i=u=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="foggy",o.fogStrength=.5,o}return e._inherits(o,r),o.prototype.clone=function(){return new u({fogStrength:this.fogStrength})},e._createClass(o)}(o.JSONSupport);r.__decorate([p.enumeration({foggy:"foggy"})],i.prototype,"type",void 0),r.__decorate([t.property({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],i.prototype,"fogStrength",void 0),i=u=r.__decorate([a.subclass("esri.views.3d.environment.FoggyWeather")],i);return i}));
