/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../geometry","../../../../../Graphic","../../../../../core/handleUtils","../../../../../core/maybe","../../../../../core/accessorSupport/decorators/property","../../../../../core/accessorSupport/ensureType","../../../../../core/arrayUtils","../../../../../core/has","../../../../../core/accessorSupport/decorators/subclass","../../SnappingVisualizer2D","./symbols","../../../../draw/DrawGraphicTool","../../../../draw/DrawOperation","../../../../draw/drawSurfaces","../../../../../geometry/Point","../../../../../geometry/Multipoint"],(function(e,t,i,r,a,l,s,n,o,c,u,p,h,y,m,v,d,g,G){"use strict";function _(e,t){return(e.attributes?.displayOrder??-1/0)-(t.attributes?.displayOrder??-1/0)}e.DrawGraphicTool2D=function(e){function i(t){var i;return(i=e.call(this,t)||this)._visualElementGraphics={outline:null,regularVertices:null,activeVertex:null},i.activeFillSymbol=null,i.type="draw-2d",i._visualElementSymbols={outline:t.activeLineSymbol??y.outline,regularVertices:t.regularVerticesSymbol??y.regularVertices,activeVertex:t.activeVertexSymbol??y.activeVertex,fill:t.activeFillSymbol},i}t._inherits(i,e);var r=i.prototype;return r.normalizeCtorArgs=function(e){const t={...e};return delete t.activeFillSymbol,delete t.activeVertexSymbol,delete t.regularVerticesSymbol,delete t.activeLineSymbol,t},r.initializeGraphic=function(e){return null!=this._visualElementSymbols.fill&&(e.symbol=this._visualElementSymbols.fill),null},r.makeDrawOperation=function(){const{defaultZ:e,hasZ:t,view:i}=this;return new v.DrawOperation({view:i,manipulators:this.manipulators,geometryType:m.geometryTypeToDrawOperationGeometryType(this.geometryType),drawingMode:this.mode,hasZ:t,defaultZ:e,snapToSceneEnabled:this.snapToScene,drawSurface:new d.MapDrawSurface(i,t,e),hasM:!1,snappingManager:this.snappingManager,snappingVisualizer:new h.SnappingVisualizer2D(this.internalGraphicsLayer),tooltipOptions:this.tooltipOptions})},r.onActiveVertexChanged=function(e){if("point"===this.geometryType)return null;const[t,i]=e,r=new g({x:t,y:i,spatialReference:this.view.spatialReference});return null!=this._visualElementGraphics.activeVertex?(this._visualElementGraphics.activeVertex.geometry=r,null):(this._visualElementGraphics.activeVertex=new a({geometry:r,symbol:this._visualElementSymbols.activeVertex,attributes:{displayOrder:2}}),this.internalGraphicsLayer.add(this._visualElementGraphics.activeVertex),this.internalGraphicsLayer.graphics.sort(_),l.makeHandle((()=>{null!=this._visualElementGraphics.activeVertex&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.activeVertex),this._visualElementGraphics.activeVertex=s.destroyMaybe(this._visualElementGraphics.activeVertex))})))},r.onOutlineChanged=function(e){const t=e.clone();if("polyline"===t.type){const e=t.paths[t.paths.length-1];e.splice(0,e.length-2)}return null!=this._visualElementGraphics.outline?(this._visualElementGraphics.outline.geometry=t,null):(this._visualElementGraphics.outline=new a({geometry:t,symbol:this._visualElementSymbols.outline,attributes:{displayOrder:0}}),this.internalGraphicsLayer.add(this._visualElementGraphics.outline),this.internalGraphicsLayer.graphics.sort(_),l.makeHandle((()=>{null!=this._visualElementGraphics.outline&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.outline),this._visualElementGraphics.outline=s.destroyMaybe(this._visualElementGraphics.outline))})))},r.onRegularVerticesChanged=function(e){const t=new G({points:e,spatialReference:this.view.spatialReference});return null!=this._visualElementGraphics.regularVertices?(this._visualElementGraphics.regularVertices.geometry=t,null):(this._visualElementGraphics.regularVertices=new a({geometry:t,symbol:this._visualElementSymbols.regularVertices,attributes:{displayOrder:1}}),this.internalGraphicsLayer.add(this._visualElementGraphics.regularVertices),this.internalGraphicsLayer.graphics.sort(_),l.makeHandle((()=>{null!=this._visualElementGraphics.regularVertices&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.regularVertices),this._visualElementGraphics.regularVertices=s.destroyMaybe(this._visualElementGraphics.regularVertices))})))},t._createClass(i)}(m.DrawGraphicTool),i.__decorate([n.property()],e.DrawGraphicTool2D.prototype,"activeFillSymbol",void 0),i.__decorate([n.property({readOnly:!0})],e.DrawGraphicTool2D.prototype,"type",void 0),i.__decorate([n.property({constructOnly:!0,nonNullable:!0})],e.DrawGraphicTool2D.prototype,"view",void 0),e.DrawGraphicTool2D=i.__decorate([p.subclass("esri.views.2d.interactive.draw.DrawGraphicTool2D")],e.DrawGraphicTool2D),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));