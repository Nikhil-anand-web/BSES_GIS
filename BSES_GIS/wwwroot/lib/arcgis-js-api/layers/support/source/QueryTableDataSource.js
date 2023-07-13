/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../geometry","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/enumeration","../../../core/accessorSupport/decorators/subclass","../../../geometry/SpatialReference","../../../geometry/support/typeUtils"],(function(e,r,o,t,a,p,c,u,s,y,i,n,l){"use strict";var d;e.QueryTableDataSource=d=function(e){function o(r){var o;return(o=e.call(this,r)||this).type="query-table",o}return r._inherits(o,e),o.prototype.clone=function(){const{workspaceId:e,query:r,oidFields:o,spatialReference:t,geometryType:a}=this,p={workspaceId:e,query:r,oidFields:o,spatialReference:t?.clone()??void 0,geometryType:a};return new d(p)},r._createClass(o)}(a.JSONSupport),o.__decorate([y.enumeration({queryTable:"query-table"})],e.QueryTableDataSource.prototype,"type",void 0),o.__decorate([p.property({type:String,json:{write:!0}})],e.QueryTableDataSource.prototype,"workspaceId",void 0),o.__decorate([p.property({type:String,json:{write:!0}})],e.QueryTableDataSource.prototype,"query",void 0),o.__decorate([p.property({type:String,json:{write:!0}})],e.QueryTableDataSource.prototype,"oidFields",void 0),o.__decorate([p.property({type:n,json:{write:!0}})],e.QueryTableDataSource.prototype,"spatialReference",void 0),o.__decorate([y.enumeration(l.featureGeometryTypeKebabDictionary)],e.QueryTableDataSource.prototype,"geometryType",void 0),e.QueryTableDataSource=d=o.__decorate([i.subclass("esri.layers.support.source.QueryTableDataSource")],e.QueryTableDataSource),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));