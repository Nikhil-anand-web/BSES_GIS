/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,c,p,i){"use strict";let l=function(r){function o(e){var o;return(o=r.call(this,e)||this).visible=!0,o}return e._inherits(o,r),o.prototype.clone=function(){},e._createClass(o)}(o.JSONSupport);r.__decorate([t.property({type:["line"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l.prototype,"type",void 0),r.__decorate([t.property({readOnly:!0})],l.prototype,"visible",void 0),l=r.__decorate([i.subclass("esri.symbols.callouts.Callout3D")],l);return l}));
