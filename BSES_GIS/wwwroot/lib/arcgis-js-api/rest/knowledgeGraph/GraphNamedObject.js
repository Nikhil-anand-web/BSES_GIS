/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./GraphObject"],(function(e,r,t,o,s,c,p,a){"use strict";let n=function(r){function t(e){var t;return(t=r.call(this,e)||this).typeName=null,t.id=null,t}return e._inherits(t,r),e._createClass(t)}(a);r.__decorate([t.property({type:String,json:{write:!0}})],n.prototype,"typeName",void 0),r.__decorate([t.property({type:String,json:{write:!0}})],n.prototype,"id",void 0),n=r.__decorate([p.subclass("esri.rest.knowledgeGraph.GraphNamedObject")],n);return n}));
