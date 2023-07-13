/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","../../chunks/vec3f64","../Point"],(function(e,r,o,t,c,n,s,i,a,p,l,u){"use strict";let y=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="local",o.isRelative=!0,o.isGeoreferenced=!1,o.origin=l.create(),o}e._inherits(o,r);var t=o.prototype;return t.getOriginPoint=function(e){const[r,o,t]=this.origin;return new u({x:r,y:o,z:t,spatialReference:e})},t.setOriginFormPoint=function({x:e,y:r,z:o}){this.origin=l.fromValues(e,r,o??0)},e._createClass(o)}(o.ClonableMixin(t.JSONSupport));r.__decorate([a.enumeration({local:"local"},{readOnly:!0})],y.prototype,"type",void 0),r.__decorate([c.property({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"origin",void 0),y=r.__decorate([p.subclass("esri.geometry.support.MeshLocalVertexSpace")],y);return y}));
