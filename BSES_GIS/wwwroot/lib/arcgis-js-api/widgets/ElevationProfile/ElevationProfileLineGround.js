/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/handleUtils","../../core/maybe","../../core/memoize","../../core/reactiveUtils","../../core/unitUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./ElevationProfileLine","./support/elevationQuerySourceUtils"],(function(e,r,t,o,n,i,a,l,s,u,c,p,y,d,_){"use strict";let g=function(r){function s(e){var o;return(o=r.call(this,e)||this).type="ground",o.color=new t("#ff7f00"),o.viewVisualizationEnabled=!0,o.numSamplesForPreview=50,o.numSamplesPerChunk=1e3,o._getQueryElevationDependencies=i.memoize(((e,r)=>({ground:e,groundLayers:r}))),o}e._inherits(s,r);var u=s.prototype;return u.queryElevation=async function(e,r){const t=this._queryElevationDependencies;if(null==t)throw new Error("ElevationProfileLineGround: no dependencies");const{ground:o}=t;if(null==o)throw new Error("No ground configured in the view");const n=await o.queryElevation(e,r),i=l.getMetersPerVerticalUnitForSR(e.spatialReference),a=l.getMetersPerVerticalUnitForSR(o.layers.at(0).spatialReference);if(i!==a){const e=n.geometry;e.points=e.points.map((([e,t,o])=>[e,t,o===r.noDataValue?o:o*a/i]))}return n},u.attach=function(r){return o.handlesGroup([e._get(e._getPrototypeOf(s.prototype),"attach",this).call(this,r),a.watch((()=>this._queryElevationDependencies),(()=>this._onChange()))])},e._createClass(s,[{key:"available",get:function(){const e=this._ground;return null!=e&&e.layers.some((e=>e.visible))}},{key:"minDemResolution",get:function(){return _.getGroundMinDemResolution(this._ground)}},{key:"_queryElevationDependencies",get:function(){return this._getQueryElevationDependencies(this._ground,this._groundLayers)}},{key:"_ground",get:function(){return n.applySome(this._viewModel?.view,(e=>e.map?.ground))}},{key:"_groundLayers",get:function(){const e=this._ground;return n.applySome(e,(e=>e.layers?.toArray()))??[]}}]),s}(d);r.__decorate([s.property({type:t,nonNullable:!0})],g.prototype,"color",void 0),r.__decorate([s.property()],g.prototype,"viewVisualizationEnabled",void 0),r.__decorate([s.property()],g.prototype,"available",null),r.__decorate([s.property({readOnly:!0})],g.prototype,"minDemResolution",null),r.__decorate([s.property()],g.prototype,"_queryElevationDependencies",null),r.__decorate([s.property()],g.prototype,"_ground",null),r.__decorate([s.property()],g.prototype,"_groundLayers",null),g=r.__decorate([y.subclass("esri.widgets.ElevationProfile.ElevationProfileLineGround")],g);return g}));
