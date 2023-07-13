/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/enumeration","../../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,c,s,u,n,p){"use strict";var a;let l=a=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="cloudy",o.cloudCover=.5,o}return e._inherits(o,r),o.prototype.clone=function(){return new a({cloudCover:this.cloudCover})},e._createClass(o)}(o.JSONSupport);r.__decorate([n.enumeration({cloudy:"cloudy"})],l.prototype,"type",void 0),r.__decorate([t.property({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],l.prototype,"cloudCover",void 0),l=a=r.__decorate([p.subclass("esri.views.3d.environment.CloudyWeather")],l);return l}));
