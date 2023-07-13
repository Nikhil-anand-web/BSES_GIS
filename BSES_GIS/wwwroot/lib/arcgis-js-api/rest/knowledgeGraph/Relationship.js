/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./GraphNamedObject","../../geometry/Polyline"],(function(e,r,t,o,s,i,n,p,c,a){"use strict";let l=function(r){function t(e){var t;return(t=r.call(this,e)||this).originId=null,t.destinationId=null,t.layoutGeometry=null,t}return e._inherits(t,r),e._createClass(t)}(c);r.__decorate([o.property({type:String,json:{write:!0}})],l.prototype,"originId",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],l.prototype,"destinationId",void 0),r.__decorate([o.property({type:a,json:{write:!0}})],l.prototype,"layoutGeometry",void 0),l=r.__decorate([p.subclass("esri.rest.Relationship.Relationship")],l);return l}));
