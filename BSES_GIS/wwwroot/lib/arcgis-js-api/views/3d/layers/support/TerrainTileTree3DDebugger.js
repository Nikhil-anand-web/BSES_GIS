/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../geometry","../../../../core/reactiveUtils","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/Error","../../../../core/accessorSupport/decorators/subclass","../../../../geometry/support/aaBoundingRect","../../../support/TileTreeDebugger","../../../../geometry/Polygon"],(function(e,r,t,i,s,a,n,o,l,c,u,g,p,T){"use strict";e.TerrainTileTree3DDebugger=function(e){function t(r){var t;return(t=e.call(this,r)||this).enablePolygons=!1,t}r._inherits(t,e);var i=t.prototype;return i.initialize=function(){s.watch((()=>this.enabled),(e=>this.view.basemapTerrain.renderPatchBorders=e),s.initial)},i.getTiles=function(){const e=null!=this.view.basemapTerrain.spatialReference?this.view.basemapTerrain.spatialReference:null;return this.view.basemapTerrain.test.getRenderedTiles().map((r=>({...r,geometry:T.fromExtent(g.toExtent(r.extent,e))})))},r._createClass(t)}(p.TileTreeDebugger),e.TerrainTileTree3DDebugger=t.__decorate([u.subclass("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],e.TerrainTileTree3DDebugger),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
