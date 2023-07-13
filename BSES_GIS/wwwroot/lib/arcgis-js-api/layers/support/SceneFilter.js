/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../request","../../core/Handles","../../core/JSONSupport","../../core/lang","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/persistable","./PolygonCollection","../../chunks/persistableUrlUtils"],(function(e,r,t,o,s,i,n,a,c,l,p,u,h,d){"use strict";var m;let g=m=function(r){function s(e){var t;return(t=r.call(this,e)||this).spatialRelationship="disjoint",t.geometries=new h,t._geometriesSource=null,t._handles=new o,t}e._inherits(s,r);var a=s.prototype;return a.initialize=function(){this._handles.add(n.on((()=>this.geometries),"after-changes",(()=>this.geometries=this.geometries),n.sync))},a.destroy=function(){this._handles.destroy()},a.readGeometries=function(e,r,t){Array.isArray(e)?this.geometries=h.fromJSON(e,t):this._geometriesSource={url:d.fromJSON(e,t),context:t}},a.loadGeometries=async function(e,r){if(null==this._geometriesSource)return;const{url:o,context:s}=this._geometriesSource,i=await t(o,{responseType:"json",signal:r?.signal}),n=e.toJSON(),a=i.data.map((e=>({...e,spatialReference:n})));this.geometries=h.fromJSON(a,s),this._geometriesSource=null},a.clone=function(){const e=new m({geometries:i.clone(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e},e._createClass(s)}(s.JSONSupport);r.__decorate([a.property({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],g.prototype,"spatialRelationship",void 0),r.__decorate([a.property({type:h,nonNullable:!0,json:{write:!0}}),u.persistable({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],g.prototype,"geometries",void 0),r.__decorate([l.reader(["web-scene","portal-item"],"geometries")],g.prototype,"readGeometries",null),g=m=r.__decorate([p.subclass("esri.layers.support.SceneFilter")],g);return g}));
