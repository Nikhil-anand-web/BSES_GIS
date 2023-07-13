/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../geometry/support/jsonUtils"],(function(e,t,r,o,s,i,n,p,c,g,a){"use strict";const l=new o.JSONMap({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});let m=function(t){function r(e){var r;return(r=t.call(this,e)||this).geometries=null,r.geodesic=null,r.lengthUnit=null,r.maxSegmentLength=null,r}return e._inherits(r,t),r.prototype.toJSON=function(){const e={};if(this.geometries&&this.geometries.length>0){const t=this.geometries.map((e=>e.toJSON()));e.geometries=JSON.stringify({geometryType:a.getJsonType(this.geometries[0]),geometries:t}),e.sr=JSON.stringify(this.geometries[0].spatialReference.toJSON())}return this.geodesic&&(e.geodesic=this.geodesic),this.lengthUnit&&(e.lengthUnit=l.toJSON(this.lengthUnit)),this.maxSegmentLength&&(e.maxSegmentLength=this.maxSegmentLength),e},e._createClass(r)}(s.JSONSupport);t.__decorate([i.property({types:[r.geometryTypes],json:{write:!0}})],m.prototype,"geometries",void 0),t.__decorate([i.property({type:Boolean,json:{write:!0}})],m.prototype,"geodesic",void 0),t.__decorate([i.property({type:String,json:{write:!0}})],m.prototype,"lengthUnit",void 0),t.__decorate([i.property({type:Number,json:{write:!0}})],m.prototype,"maxSegmentLength",void 0),m=t.__decorate([g.subclass("esri.rest.support.DensifyParameters")],m);return m}));
