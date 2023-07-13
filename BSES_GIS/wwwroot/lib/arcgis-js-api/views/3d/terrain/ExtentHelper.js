/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../../geometry/projection","../../../geometry/support/aaBoundingRect","../../../layers/support/layerUtils","../../ViewingMode","./TerrainConst","./terrainUtils"],(function(e,t,r,n,i,l,o,a,s,c,p,u,y,E,d){"use strict";function f(e,t){return e===y.ViewingMode.Global?new x(t):new _(t)}e.ExtentHelper=function(e){function r(t){return e.call(this,t)||this}t._inherits(r,e);var n=r.prototype;return n.initialize=function(){this.addHandles([this.layerViews.on("change",(()=>this.notifyChange("stencilEnabledExtents")))])},n.destroy=function(){},n._computeStencilEnabledExtents=function(){const e=[];return this.layerViews.forEach((t=>{const r=t.layer;if("IntegratedMeshLayer"===r.operationalLayerType&&null!=this.viewSpatialReference){const t=h(r.fullExtent,this.viewSpatialReference);null!=t&&e.push(p.fromExtent(t))}})),e},t._createClass(r,[{key:"layerViewsExtent",get:function(){return this._computeLayerViewsExtent()}},{key:"tiledLayersExtent",get:function(){return this._computeTiledLayersExtent()}},{key:"stencilEnabledExtents",get:function(){return this._computeStencilEnabledExtents()}}]),r}(n),r.__decorate([i.property({readOnly:!0})],e.ExtentHelper.prototype,"layerViewsExtent",null),r.__decorate([i.property({readOnly:!0})],e.ExtentHelper.prototype,"tiledLayersExtent",null),r.__decorate([i.property({readOnly:!0})],e.ExtentHelper.prototype,"stencilEnabledExtents",null),r.__decorate([i.property()],e.ExtentHelper.prototype,"viewSpatialReference",void 0),r.__decorate([i.property()],e.ExtentHelper.prototype,"tilingScheme",void 0),r.__decorate([i.property()],e.ExtentHelper.prototype,"defaultTiledLayersExtent",void 0),r.__decorate([i.property({constructOnly:!0})],e.ExtentHelper.prototype,"layers",void 0),r.__decorate([i.property({constructOnly:!0})],e.ExtentHelper.prototype,"layerViews",void 0),e.ExtentHelper=r.__decorate([s.subclass("esri.views.3d.terrain.ExtentHelper")],e.ExtentHelper);let x=function(e){function r(){return e.apply(this,arguments)||this}t._inherits(r,e);var n=r.prototype;return n._computeLayerViewsExtent=function(){return this._globalExtent},n._computeTiledLayersExtent=function(){return this._globalExtent},t._createClass(r,[{key:"_globalExtent",get:function(){return this.viewSpatialReference.isWebMercator?E.WEBMERCATOR_WORLD_EXTENT:E.GEOGRAPHIC_WORLD_EXTENT}}]),r}(e.ExtentHelper);x=r.__decorate([s.subclass("esri.views.3d.terrain.ExtentHelperGlobal")],x);let _=function(e){function r(){return e.apply(this,arguments)||this}t._inherits(r,e);var n=r.prototype;return n._computeLayerViewsExtent=function(){const e=p.empty(),t=this.viewSpatialReference;this.layerViews.forEach((r=>{const n=r.layer;if(r.isResolved()&&("graphics"!==n.type||!n.internal)){const n=h("fullExtentInLocalViewSpatialReference"in r&&r.fullExtentInLocalViewSpatialReference||r.layer.fullExtent,t);p.expand(e,n,e)}}));const r=p.allFinite(e)?e:null,n=this._get("layerViewsExtent");return p.equals(r,n)?n:r},n._computeTiledLayersExtent=function(){const e=this.tilingScheme;if(!e)return null;const t=this.viewSpatialReference,r=p.empty();this.layers.forEach((n=>{if(n.loaded&&u.isTiledLayer(n)){const i=d.getTiledLayerInfo(n,t,y.ViewingMode.Local);if(null==i)return;const{tileInfo:l,fullExtent:o}=i;null!=l&&null!=o&&(d.isProjectableRasterLayer(n)||e.compatibleWith(l)&&o.spatialReference.equals(e.spatialReference))&&p.expand(r,o,r)}})),p.expand(r,this.defaultTiledLayersExtent,r);const n=p.allFinite(r)?r:null,i=this._get("tiledLayersExtent");return p.equals(n,i)?i:n},t._createClass(r)}(e.ExtentHelper);function h(e,t){return null==e||e.spatialReference.equals(t)?e:c.projectWithoutEngine(e,e.spatialReference,t)}_=r.__decorate([s.subclass("esri.views.3d.terrain.ExtentHelperLocal")],_),e.create=f,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));