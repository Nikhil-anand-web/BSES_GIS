/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Logger","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/Error","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","./Edges3D"],(function(e,r,o,s,t,c,n,i,u,a){"use strict";var l;let p=l=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="solid",o}return e._inherits(o,r),o.prototype.clone=function(){return new l(this.cloneProperties())},e._createClass(o)}(a);r.__decorate([i.enumeration({solid:"solid"},{readOnly:!0})],p.prototype,"type",void 0),p=l=r.__decorate([u.subclass("esri.symbols.support.SolidEdges3D")],p);return p}));
