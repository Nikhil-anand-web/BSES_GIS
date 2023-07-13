/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../../networks/support/NamedTraceConfiguration"],(function(r,e,o,t,s,a,c,n,u){"use strict";let i=function(e){function o(r){var o;return(o=e.call(this,r)||this).namedTraceConfigurations=[],o}return r._inherits(o,e),r._createClass(o)}(o.JSONSupport);e.__decorate([t.property({type:[u],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],i.prototype,"namedTraceConfigurations",void 0),i=e.__decorate([n.subclass("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],i);return i}));
