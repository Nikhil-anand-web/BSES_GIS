/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,s,t,o,i,c,n,a){"use strict";const p=new s.JSONMap({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"},{ignoreUnknown:!1});let u=function(r){function s(e){var s;return(s=r.call(this,e)||this).distance=0,s.units=null,s}return e._inherits(s,r),e._createClass(s)}(t.JSONSupport);r.__decorate([o.property({json:{write:!0}})],u.prototype,"distance",void 0),r.__decorate([o.property({json:{read:p.read,write:p.write}})],u.prototype,"units",void 0),u=r.__decorate([a.subclass("esri.rest.support.LinearUnit")],u);return u}));
