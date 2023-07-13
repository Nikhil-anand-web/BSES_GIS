/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/Logger","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/Error","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,c,s,t,n,a,u,i,p){"use strict";let l=function(r){function o(){var e;return(e=r.call(this,{})||this).type="georeferenced",e.isRelative=!1,e.isGeoreferenced=!0,e}return e._inherits(o,r),e._createClass(o)}(o.ClonableMixin(c.JSONSupport));r.__decorate([i.enumeration({georeferenced:"georeferenced"},{readOnly:!0})],l.prototype,"type",void 0),l=r.__decorate([p.subclass("esri.geometry.support.MeshGeoreferencedVertexSpace")],l);return l}));
