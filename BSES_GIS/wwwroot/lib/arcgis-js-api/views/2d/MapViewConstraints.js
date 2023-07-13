/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/Accessor","../../core/Collection","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../layers/support/LOD","./constraints/GeometryConstraint","./constraints/RotationConstraint","./constraints/ZoomConstraint","../../geometry/Extent","../../geometry/Polygon"],(function(e,o,t,r,n,i,a,s,c,p,l,y,m,u,_,f){"use strict";const d={base:null,key:"type",typeMap:{extent:_,polygon:f}};let h=function(o){function t(e){var t;return(t=o.call(this,e)||this).lods=null,t.minScale=0,t.maxScale=0,t.minZoom=-1,t.maxZoom=-1,t.rotationEnabled=!0,t.snapToZoom=!0,t.customConstraints=new n,t}e._inherits(t,o);var r=t.prototype;return r.destroy=function(){this.view=null},r.canZoomInTo=function(e){const o=this.effectiveMaxScale;return 0===o||e>=o},r.canZoomOutTo=function(e){const o=this.effectiveMinScale;return 0===o||e<=o},r.constrain=function(e,o){return this._zoom.constrain(e,o),this._rotation.constrain(e,o),this._geometry.constrain(e,o),this.customConstraints.forEach((t=>t.constrain(e,o))),e},r.constrainByGeometry=function(e){return this._geometry.constrain(e)},r.fit=function(e){return this._zoom.fit(e)},r.zoomToScale=function(e){return this._zoom.zoomToScale(e)},r.scaleToZoom=function(e){return this._zoom.scaleToZoom(e)},r.snapScale=function(e){return this._zoom.snapToClosestScale(e)},r.snapToNextScale=function(e){return this._zoom.snapToNextScale(e)},r.snapToPreviousScale=function(e){return this._zoom.snapToPreviousScale(e)},e._createClass(t,[{key:"effectiveLODs",get:function(){return this._zoom.effectiveLODs}},{key:"effectiveMinScale",get:function(){return this._zoom.effectiveMinScale}},{key:"effectiveMaxScale",get:function(){return this._zoom.effectiveMaxScale}},{key:"effectiveMinZoom",get:function(){return this._zoom.effectiveMinZoom}},{key:"effectiveMaxZoom",get:function(){return this._zoom.effectiveMaxZoom}},{key:"geometry",set:function(e){e?this._set("geometry",e):this._set("geometry",null)}},{key:"version",get:function(){return`${this._zoom?.uid}/${this._rotation?.uid}/${this._geometry?.uid}`}},{key:"_geometry",get:function(){const e=this._get("_geometry");return e&&this.geometry===e.geometry&&this.view?.constraintsInfo.spatialReference===e.spatialReference?e:new y.GeometryConstraint({geometry:this.geometry,spatialReference:this.view?.constraintsInfo.spatialReference})}},{key:"_rotation",get:function(){return new m({rotationEnabled:this.rotationEnabled})}},{key:"_zoom",get:function(){const e=this._get("_zoom"),o=this.lods||this.view?.constraintsInfo.lods,t=this.minZoom,r=this.maxZoom,n=this.minScale,i=this.maxScale,a=this.snapToZoom;return e&&e.lods===o&&e.minZoom===t&&e.maxZoom===r&&e.minScale===n&&e.maxScale===i&&e.snapToZoom===a?e:new u({lods:o,minZoom:t,maxZoom:r,minScale:n,maxScale:i,snapToZoom:a})}}]),t}(r);o.__decorate([i.property({readOnly:!0})],h.prototype,"effectiveLODs",null),o.__decorate([i.property({readOnly:!0})],h.prototype,"effectiveMinScale",null),o.__decorate([i.property({readOnly:!0})],h.prototype,"effectiveMaxScale",null),o.__decorate([i.property({readOnly:!0})],h.prototype,"effectiveMinZoom",null),o.__decorate([i.property({readOnly:!0})],h.prototype,"effectiveMaxZoom",null),o.__decorate([i.property({types:d,value:null})],h.prototype,"geometry",null),o.__decorate([i.property({type:[l]})],h.prototype,"lods",void 0),o.__decorate([i.property()],h.prototype,"minScale",void 0),o.__decorate([i.property()],h.prototype,"maxScale",void 0),o.__decorate([i.property()],h.prototype,"minZoom",void 0),o.__decorate([i.property()],h.prototype,"maxZoom",void 0),o.__decorate([i.property()],h.prototype,"rotationEnabled",void 0),o.__decorate([i.property()],h.prototype,"snapToZoom",void 0),o.__decorate([i.property({type:n})],h.prototype,"customConstraints",void 0),o.__decorate([i.property()],h.prototype,"view",void 0),o.__decorate([i.property({readOnly:!0})],h.prototype,"version",null),o.__decorate([i.property({type:y.GeometryConstraint,readOnly:!0})],h.prototype,"_geometry",null),o.__decorate([i.property({type:m})],h.prototype,"_rotation",null),o.__decorate([i.property({readOnly:!0,type:u})],h.prototype,"_zoom",null),h=o.__decorate([p.subclass("esri.views.2d.MapViewConstraints")],h);return h}));
