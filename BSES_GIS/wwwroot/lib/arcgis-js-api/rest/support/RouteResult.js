/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Graphic","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./DirectionsFeatureSet","./FeatureSet"],(function(e,r,t,o,p,s,i,n,c,u,a){"use strict";let d=function(r){function t(e){var t;return(t=r.call(this,e)||this).directionLines=null,t.directionPoints=null,t.directions=null,t.route=null,t.routeName=null,t.stops=null,t.traversedEdges=null,t.traversedJunctions=null,t.traversedTurns=null,t}return e._inherits(t,r),e._createClass(t)}(o.JSONSupport);r.__decorate([p.property({type:a,json:{write:!0}})],d.prototype,"directionLines",void 0),r.__decorate([p.property({type:a,json:{write:!0}})],d.prototype,"directionPoints",void 0),r.__decorate([p.property({type:u,json:{write:!0}})],d.prototype,"directions",void 0),r.__decorate([p.property({type:t,json:{write:!0}})],d.prototype,"route",void 0),r.__decorate([p.property({type:String,json:{write:!0}})],d.prototype,"routeName",void 0),r.__decorate([p.property({type:[t],json:{write:!0}})],d.prototype,"stops",void 0),r.__decorate([p.property({type:a,json:{write:!0}})],d.prototype,"traversedEdges",void 0),r.__decorate([p.property({type:a,json:{write:!0}})],d.prototype,"traversedJunctions",void 0),r.__decorate([p.property({type:a,json:{write:!0}})],d.prototype,"traversedTurns",void 0),d=r.__decorate([c.subclass("esri.rest.support.RouteResult")],d);return d}));