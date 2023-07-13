/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Logger","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/Error","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","./Edges3D"],(function(e,r,s,t,o,c,n,a,u,i){"use strict";var l;let p=l=function(r){function s(e){var s;return(s=r.call(this,e)||this).type="sketch",s}return e._inherits(s,r),s.prototype.clone=function(){return new l(this.cloneProperties())},e._createClass(s)}(i);r.__decorate([a.enumeration({sketch:"sketch"},{readOnly:!0})],p.prototype,"type",void 0),p=l=r.__decorate([u.subclass("esri.symbols.edges.SketchEdges3D")],p);return p}));
