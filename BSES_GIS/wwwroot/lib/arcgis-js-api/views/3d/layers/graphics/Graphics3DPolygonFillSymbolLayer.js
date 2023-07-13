/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../Color","../../../../core/screenUtils","../../../../chunks/earcut","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/DoubleArray","../../../../geometry/support/FloatArray","./elevationAlignmentUtils","./ElevationContext","./Graphics3DDrapedGraphicLayer","./Graphics3DObject3DGraphicLayer","./Graphics3DSymbolLayer","./graphicUtils","./interfaces","./lineUtils","./polygonUtils","../support/FastSymbolUpdates","../support/patternUtils","../support/uvUtils","../../support/engineContent/line","../../support/renderInfoUtils/polygon","../../webgl-engine/lib/Object3D","../../webgl-engine/lib/RenderGeometry","../../webgl-engine/materials/lineStippleUtils","../../webgl-engine/materials/PatternMaterial","../../webgl-engine/materials/RibbonLineMaterial"],(function(e,t,i,n,r,a,o,s,l,c,u,p,h,d,y,_,g,m,f,b,v,C,x,A,D,S,O){"use strict";const P=["polyline","polygon","extent"],M=new m.ConvertOptions({size:!1,color:!0,rotation:!1,opacity:!1});let U=function(e){function h(t,i,n,r){var a;return(a=e.call(this,t,i,n,r)||this)._needsUV=!1,a._hasOutline=!1,a}t._inherits(h,e);var U=h.prototype;return U.doLoad=async function(){this._fastUpdates=m.initFastSymbolUpdatesState(this._context.renderer,M)},U._ensureMaterials=function(){this._ensureFillMaterial(),this._ensureOutlineMaterial()},U._ensureFillMaterial=function(){if(null!=this._material)return;const e=this.symbolLayer?.material?.color,t=this._getCombinedOpacityAndColor(e);this._material=f.createMaterial(this.symbolLayer,{color:t,transparent:t[3]<1||this.needsDrivenTransparentPass,polygonOffset:!1,hasVertexColors:!0,writeLinearDepth:!0,draped:this.draped,hasSlicePlane:this._context.slicePlaneEnabled,...this._fastUpdates?.materialParameters}),this._needsUV=this._material instanceof S.PatternMaterial,this._context.stage.add(this._material)},U._ensureOutlineMaterial=function(){const e=this.symbolLayer.outline;if(this._outlineMaterial||!this._isValidOutline(e))return;this._hasOutline=!0;const t=t=>{const i=D.getStipplePatternForLinePattern(e.pattern);return new O.RibbonLineMaterial({width:t,color:this._getOutlineColor(),hasPolygonOffset:!0,hasSlicePlane:this._context.slicePlaneEnabled,isClosed:!0,stipplePattern:i,stippleScaleWithLineWidth:!0,cap:_.parseCapType(e.patternCap||"butt")})};this._outlineMaterial=t(n.pt2px(e.size)),this._context.stage.add(this._outlineMaterial)},U._isValidOutline=function(e){return null!=e&&null!=e.size&&e.size>0&&null!=e.color&&(null==e.pattern||"style"!==e.pattern.type||"none"!==e.pattern.style)},U.destroy=function(){t._get(t._getPrototypeOf(h.prototype),"destroy",this).call(this),this._context.stage.remove(this._material),this._material=null,this._context.stage.remove(this._outlineMaterial),this._outlineMaterial=null},U.createGraphics3DGraphic=function(e){const t=e.graphic;if(!this._validateGeometry(t.geometry,P,this.symbolLayer.type))return null;const i=this._getVertexOpacityAndColor(e.renderingInfo,255),n=this.setGraphicElevationContext(t,new c.ElevationContext);return this.ensureDrapedStatus("on-the-ground"===n.mode),this._ensureMaterials(),this.draped?this._createAsOverlay(t,i):this._createAs3DShape(t,i,n)},U.applyRendererDiff=function(e,t){for(const i in e.diff){if("visualVariables"!==i)return y.ApplyRendererDiffResult.RecreateSymbol;if(!m.updateFastSymbolUpdatesState(this._fastUpdates,t,M))return y.ApplyRendererDiffResult.RecreateSymbol;this._material&&this._material.setParameters(this._fastUpdates.materialParameters)}return y.ApplyRendererDiffResult.FastUpdate},U.layerOpacityChanged=function(){if(null!=this._material){const e=this._material.parameters.color,t=this.symbolLayer?.material?.color,i=this._getCombinedOpacity(t);this._material.setParameters({color:[e[0],e[1],e[2],i],transparent:i<1||this.needsDrivenTransparentPass})}if(null!=this._outlineMaterial){const e=this._outlineMaterial.parameters.color;this._outlineMaterial.setParameters({color:[e[0],e[1],e[2],this._getOutlineOpacity()]})}},U.layerElevationInfoChanged=function(e,t,i){const n=this._elevationContext.mode,r=l.elevationModeChangeUpdateType(h.elevationModeChangeTypes,i,n);if(r!==l.SymbolUpdateType.UPDATE)return r;const a=l.needsElevationUpdates2D(n);return this.updateGraphics3DGraphicElevationInfo(e,t,(()=>a))},U.slicePlaneEnabledChanged=function(){if(this._material&&this._material.setParameters({hasSlicePlane:this._context.slicePlaneEnabled}),this._outlineMaterial){const e={hasSlicePlane:this._context.slicePlaneEnabled};this._outlineMaterial.setParameters(e)}return!0},U.physicalBasedRenderingChanged=function(){return!0},U._createAs3DShape=function(e,t,i){const n=g.geometryAsPolygon(e.geometry);if(!n)return null;const r=C.geometryToRenderInfo(n,this._context.elevationProvider,this._context.renderCoordsHelper,i),a=new E(r,t,this._context.layer.uid,e.uid),c=a.renderData.position.length/3;if(this._needsUV&&(a.uvMapSpace=s.newFloatArray(4*c,!0),a.boundingRect=o.newDoubleArray(9*c,!0),b.createMapSpaceUVCoords(a.uvMapSpace,a.boundingRect,a.renderData.position,this._context.renderCoordsHelper)),a.objectAndLayerIdColor=this._context.stage.renderView?.getObjectAndLayerIdColor(a),this._createAs3DShapeFill(e,a),this._hasOutline&&this._createAs3DShapeOutline(a),this._logGeometryCreationWarnings(a.renderData,n.rings,"rings","FillSymbol3DLayer"),0===a.outGeometries.length)return null;const u=new x.Object3D({geometries:a.outGeometries,castShadow:!1,layerUid:this._context.layer.uid,graphicUid:e.uid}),h=new p.Graphics3DObject3DGraphicLayer(this,u,a.outGeometries,null,null,f.uvElevationAligner,i);return h.alignedSampledElevation=a.renderData.sampledElevation,h.needsElevationUpdates=l.needsElevationUpdates2D(i.mode),h},U._createAs3DShapeFill=function(e,t){const i=t.renderData.polygons;for(const{position:n,mapPositions:l,holeIndices:c,index:u,count:p}of i){if(null!=this._context.clippingExtent&&(a.empty(G),a.expandWithBuffer(G,l),!a.intersectsClippingArea(G,this._context.clippingExtent)))continue;const i=r.earcut(l,c,3);if(0===i.length)continue;const h=this._fastUpdates?.visualVariables.color,d=g.createColorGeometry({material:this._material,indices:i,mapPositions:l,attributeData:{position:n,color:h?null:t.color,colorFeature:h?m.getAttributeValue(h.field,e):null,uvMapSpace:this._needsUV?s.floatSubArray(t.uvMapSpace,4*u,4*p):null,boundingRect:this._needsUV?o.doubleSubArray(t.boundingRect,9*u,9*p):null,objectAndLayerIdColor:t.objectAndLayerIdColor}});t.outGeometries.push(d)}},U._createAs3DShapeOutline=function(e){if(!this._hasOutline)return;const t=e.renderData.outlines;for(let i=0;i<t.length;++i){const{mapPositions:n,position:r}=t[i];if(null!=this._context.clippingExtent&&(a.empty(G),a.expandWithBuffer(G,n),!a.intersectsClippingArea(G,this._context.clippingExtent)))continue;const o=v.createGeometry(this._outlineMaterial,{overlayInfo:null,removeDuplicateStartEnd:!0,mapPositions:n,attributeData:{position:r}},e.objectAndLayerIdColor);e.outGeometries.push(o)}},U._createAsOverlay=function(e,t){const i=g.geometryAsPolygon(e.geometry);if(null==i)return null;this._material.renderPriority=this._renderPriority+this._renderPriorityStep/2,null!=this._outlineMaterial&&(this._outlineMaterial.renderPriority=this._renderPriority);const n=C.geometryToRenderInfoDraped(i,this._context.overlaySR),r=new L(n,t,this._context.layer.uid,e.uid),o=r.renderData.position.length/3;return this._needsUV&&(r.uvMapSpace=s.newFloatArray(4*o,!0),b.createMapSpaceUVCoordsDraped(r.uvMapSpace,r.renderData.position,this._context.overlaySR,this._context.graphicsCoreOwner.view.state.viewingMode)),r.outBoundingBox=a.empty(),r.objectAndLayerIdColor=this._context.stage.renderView?.getObjectAndLayerIdColor(r),this._createAsOverlayFill(e,r),this._hasOutline&&this._createAsOverlayOutline(r),this._logGeometryCreationWarnings(r.renderData,i.rings,"rings","FillSymbol3DLayer"),0===r.outGeometries.length?null:new u(this,r.outGeometries,r.outBoundingBox,this._context.drapeSourceRenderer)},U._createAsOverlayFill=function(e,t){const i=t.renderData.polygons;for(const{position:n,holeIndices:o,index:l,count:c}of i){const i=a.empty(G);if(a.expandWithBuffer(i,n),!a.intersectsClippingArea(i,this._context.clippingExtent))continue;const u=r.earcut(n,o,3);if(0===u.length)continue;a.expandWithAABB(t.outBoundingBox,i);const p=this._fastUpdates?.visualVariables.color,h=g.createColorGeometry({material:this._material,indices:u,attributeData:{position:n,color:p?null:t.color,colorFeature:p?m.getAttributeValue(p.field,e):null,uvMapSpace:this._needsUV?s.floatSubArray(t.uvMapSpace,4*l,4*c):null,objectAndLayerIdColor:t.objectAndLayerIdColor}});t.outGeometries.push(new A.RenderGeometry(h,t))}},U._createAsOverlayOutline=function(e){if(!this._hasOutline)return;const t=e.renderData.outlines;for(let i=0;i<t.length;++i){const{position:n}=t[i];if(a.empty(G),a.expandWithBuffer(G,n),!a.intersectsClippingArea(G,this._context.clippingExtent))continue;a.expandWithAABB(e.outBoundingBox,G);const r=v.createGeometry(this._outlineMaterial,{overlayInfo:{spatialReference:this._context.overlaySR,renderCoordsHelper:this._context.renderCoordsHelper},removeDuplicateStartEnd:!0,attributeData:{position:n}},e.objectAndLayerIdColor);e.outGeometries.push(new A.RenderGeometry(r,e))}},U._getOutlineOpacity=function(){const e=this.symbolLayer?.outline?.color;return(this.draped?1:this._getLayerOpacity())*(null!=e?e.a:0)},U._getOutlineColor=function(){const e=this.symbolLayer?.outline?.color,t=this._getOutlineOpacity();return d.mixinColorAndOpacity(null!=e?i.toUnitRGB(e):null,t)},U.test=function(){return{...t._get(t._getPrototypeOf(h.prototype),"test",this).call(this),createAsOverlay:(e,t)=>this._createAsOverlay(e,t),createAs3DShape:(e,t,i)=>this._createAs3DShape(e,t,i)}},t._createClass(h)}(h.Graphics3DSymbolLayer);U.elevationModeChangeTypes={definedChanged:l.SymbolUpdateType.RECREATE,staysOnTheGround:l.SymbolUpdateType.NONE,onTheGroundChanged:l.SymbolUpdateType.RECREATE};const G=a.create();let E=function(e){function i(t,i,n,r){var a;return(a=e.call(this,t,n,r)||this).color=i,a}return t._inherits(i,e),t._createClass(i)}(g.PolygonCreationDataBase),L=function(e){function i(t,i,n,r){var a;return(a=e.call(this,t,n,r)||this).color=i,a}return t._inherits(i,e),t._createClass(i)}(g.PolygonCreationDataBase);e.Graphics3DPolygonFillSymbolLayer=U,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
