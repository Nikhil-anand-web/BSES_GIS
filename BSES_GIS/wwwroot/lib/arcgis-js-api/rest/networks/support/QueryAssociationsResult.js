/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./Association"],(function(r,s,e,o,t,c,a,i,p){"use strict";let u=function(s){function e(r){var e;return(e=s.call(this,r)||this).associations=[],e}return r._inherits(e,s),r._createClass(e)}(e.JSONSupport);s.__decorate([o.property({type:[p],json:{write:!0}})],u.prototype,"associations",void 0),u=s.__decorate([i.subclass("esri.rest.networks.support.QueryAssociationsResult")],u);return u}));
