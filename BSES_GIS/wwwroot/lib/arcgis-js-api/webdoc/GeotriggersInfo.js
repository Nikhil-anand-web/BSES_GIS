/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Clonable","../core/JSONSupport","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass","./geotriggersInfo/support/geotriggerTypes"],(function(e,r,o,s,t,c,i,p,n,u){"use strict";let a=function(r){function o(e){var o;return(o=r.call(this,e)||this).geotriggers=null,o}return e._inherits(o,r),e._createClass(o)}(o.ClonableMixin(s.JSONSupport));r.__decorate([t.property({types:[u.types],json:{write:{isRequired:!0}}})],a.prototype,"geotriggers",void 0),a=r.__decorate([n.subclass("esri.webdoc.GeotriggersInfo")],a);return a}));
