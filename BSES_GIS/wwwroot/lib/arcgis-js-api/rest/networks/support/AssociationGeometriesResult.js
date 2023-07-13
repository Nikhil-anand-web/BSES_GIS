/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./Association"],(function(e,o,r,t,s,c,a,p,i){"use strict";let n=function(o){function r(e){var r;return(r=o.call(this,e)||this).maxGeometryCountExceeded=!1,r.associations=[],r}return e._inherits(r,o),e._createClass(r)}(r.JSONSupport);o.__decorate([t.property({type:Boolean,json:{write:!0}})],n.prototype,"maxGeometryCountExceeded",void 0),o.__decorate([t.property({type:[i],json:{write:!0}})],n.prototype,"associations",void 0),n=o.__decorate([p.subclass("esri.rest.networks.support.AssociationGeometriesResult")],n);return n}));
