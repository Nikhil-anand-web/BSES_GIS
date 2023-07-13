/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../TimeExtent","../../core/jsonMap","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../rest/support/Query"],(function(e,t,r,i,s,o,n,l,a,p,c){"use strict";var u;const d=new s.JSONMap({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),y=new s.JSONMap({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let S=u=function(t){function r(e){var r;return(r=t.call(this,e)||this).where=null,r.geometry=null,r.spatialRelationship="intersects",r.distance=void 0,r.objectIds=null,r.units=null,r.timeExtent=null,r}e._inherits(r,t);var i=r.prototype;return i.createQuery=function(e={}){const{where:t,geometry:r,spatialRelationship:i,timeExtent:s,objectIds:o,units:l,distance:a}=this;return new c({geometry:n.clone(r),objectIds:n.clone(o),spatialRelationship:i,timeExtent:n.clone(s),where:t,units:l,distance:a,...e})},i.clone=function(){const{where:e,geometry:t,spatialRelationship:r,timeExtent:i,objectIds:s,units:o,distance:l}=this;return new u({geometry:n.clone(t),objectIds:n.clone(s),spatialRelationship:r,timeExtent:n.clone(i),where:e,units:o,distance:l})},e._createClass(r)}(o.JSONSupport);t.__decorate([l.property({type:String,json:{write:!0}})],S.prototype,"where",void 0),t.__decorate([l.property({types:r.geometryTypes,json:{write:!0}})],S.prototype,"geometry",void 0),t.__decorate([l.property({type:d.apiValues,json:{name:"spatialRel",read:{reader:d.read},write:{allowNull:!1,writer:d.write,overridePolicy(){return{enabled:null!=this.geometry}}}}})],S.prototype,"spatialRelationship",void 0),t.__decorate([l.property({type:Number,json:{write:{overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],S.prototype,"distance",void 0),t.__decorate([l.property({type:[Number],json:{write:!0}})],S.prototype,"objectIds",void 0),t.__decorate([l.property({type:y.apiValues,json:{read:y.read,write:{writer:y.write,overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],S.prototype,"units",void 0),t.__decorate([l.property({type:i,json:{write:!0}})],S.prototype,"timeExtent",void 0),S=u=t.__decorate([p.subclass("esri.layers.support.FeatureFilter")],S);return S}));