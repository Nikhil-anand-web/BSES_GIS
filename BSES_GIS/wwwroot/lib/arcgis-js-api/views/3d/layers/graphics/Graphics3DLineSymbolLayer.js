/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../geometry","../../../../core/Error","../../../../core/screenUtils","../../../../chunks/vec4f64","../../../../geometry/support/aaBoundingBox","../../../../renderers/support/renderingInfoUtils","./ElevationAligners","./elevationAlignmentUtils","./ElevationContext","./Graphics3DDrapedGraphicLayer","./Graphics3DObject3DGraphicLayer","./Graphics3DSymbolLayer","./interfaces","./lineUtils","../support/FastSymbolUpdates","../../support/debugFlags","../../support/engineContent/line","../../support/renderInfoUtils/line","../../webgl-engine/lib/Object3D","../../webgl-engine/lib/RenderGeometry","../../webgl-engine/materials/LineMarkerMaterial","../../webgl-engine/materials/lineStippleUtils","../../webgl-engine/materials/RibbonLineMaterial","../../../../geometry/Extent","../../../../geometry/Polygon"],(function(e,t,i,r,a,n,l,o,s,h,c,p,d,y,u,m,_,f,g,M,C,b,L,P,E,v,w){"use strict";const R=["polyline","polygon","extent"],x=new _.ConvertOptions({size:!0,color:!0,rotation:!1,opacity:!0});let S=function(e){function i(t,i,r,a){return e.call(this,t,i,r,a)||this}t._inherits(i,e);var y=i.prototype;return y.doLoad=async function(){if(this._fastUpdates=_.initFastSymbolUpdatesState(this._context.renderer,x),!this._drivenProperties.size){if((null!=this.symbolLayer.size?this.symbolLayer.size:a.px2pt(1))<0)throw new r("graphics3dlinesymbollayer:invalid-size","Symbol sizes may not be negative values")}},y._getMaterialParameters=function(e,t=!1){const i=this._getCombinedOpacityAndColor(t&&this._markerColor||this._materialColor);this._patternHidesLine&&!t&&(i[3]=0);const r={width:this._computeMaterialWidth(this.symbolLayer?.size),color:i,hasPolygonOffset:!0,join:this.symbolLayer.join||"miter",cap:m.parseCapType(this.symbolLayer.cap||"butt"),hasSlicePlane:this._context.slicePlaneEnabled,isClosed:e,stipplePattern:P.getStipplePatternForLinePattern(this.symbolLayer.pattern),stippleScaleWithLineWidth:!0};return this._fastUpdates?.visualVariables?{...r,...this._fastUpdates.materialParameters}:r},y.destroy=function(){t._get(t._getPrototypeOf(i.prototype),"destroy",this).call(this),this._forEachMaterial((e=>this._context.stage.remove(e))),this._lineMaterialCached=null,this._ringMaterialCached=null,this._wireframeLineMaterialCached=null,this._wireframeRingMaterialCached=null,this._markerMaterialCached=null},y._getDrivenSize=function(e){return this._drivenProperties.size&&e.size?a.pt2px(o.getDriverAxisSizeValueAny(e.size)):1},y._getDrivenColor=function(e){const t=n.fromValues(1,1,1,1);return this._drivenProperties.color&&e.color&&(t[0]=e.color[0],t[1]=e.color[1],t[2]=e.color[2],e.color.length>0&&(t[3]=e.color[3])),this._drivenProperties.opacity&&e.opacity&&(t[3]=e.opacity),t},y.createGraphics3DGraphic=function(e){const t=e.graphic;if(!this._validateGeometry(t.geometry,R,this.symbolLayer.type))return null;const i=this.setGraphicElevationContext(t,new c.ElevationContext);return this.ensureDrapedStatus("on-the-ground"===i.mode),this.draped?this._createAsOverlay(e,this._context.layer.uid):this._createAs3DShape(e,i,t.uid)},y.applyRendererDiff=function(e,t){for(const i in e.diff){if("visualVariables"!==i)return u.ApplyRendererDiffResult.RecreateSymbol;{const e=this._fastUpdates;if(!_.updateFastSymbolUpdatesState(e,t,x))return u.ApplyRendererDiffResult.RecreateSymbol;this._forEachMaterial((t=>t.setParameters(e.materialParameters)))}}return u.ApplyRendererDiffResult.FastUpdate},y.prepareSymbolLayerPatch=function(e){if("partial"!==e.diff.type)return;const t=e.diff.diff,i={};"complete"===t.size?.type&&(i.width=this._computeMaterialWidth(t.size.newValue),delete t.size),"complete"===t.cap?.type&&(i.cap=m.parseCapType(t.cap.newValue??"butt"),delete t.cap);const r=this._prepareMarkerPatch(e,t);this._prepareMaterialPatch(e,t,r),e.symbolLayerStatePatches.push((()=>this._forEachMaterial((e=>e.setParameters(i)))))},y.layerOpacityChanged=function(){this._forEachMaterial(((e,t)=>this._updateMaterialLayerOpacity(e,t)))},y._forEachMaterial=function(e){null!=this._lineMaterialCached&&e(this._lineMaterialCached),null!=this._ringMaterialCached&&e(this._ringMaterialCached),null!=this._wireframeLineMaterialCached&&e(this._wireframeLineMaterialCached),null!=this._wireframeRingMaterialCached&&e(this._wireframeRingMaterialCached),null!=this._markerMaterialCached&&e(this._markerMaterialCached,!0)},y._updateMaterialLayerOpacity=function(e,t=!1){const i=e.parameters.color,r=this.symbolLayer?.material?.color,a=this._patternHidesLine&&!t?0:this._getCombinedOpacity(r),l=n.fromValues(i[0],i[1],i[2],a);e.setParameters({color:l})},y.layerElevationInfoChanged=function(e,t,r){const a=this._elevationContext.mode,n=h.elevationModeChangeUpdateType(i.elevationModeChangeTypes,r,a);if(n!==h.SymbolUpdateType.UPDATE)return n;const l=h.needsElevationUpdates2D(a);return this.updateGraphics3DGraphicElevationInfo(e,t,(()=>l))},y.slicePlaneEnabledChanged=function(){const e={hasSlicePlane:this._context.slicePlaneEnabled};return this._forEachMaterial((t=>t.setParameters(e))),!0},y.physicalBasedRenderingChanged=function(){return!0},y._getGeometryAsPolygonOrPolyline=function(e){switch(e.type){case"extent":if(e instanceof v)return w.fromExtent(e);break;case"polygon":case"polyline":return e}return null},y._createAs3DShape=function(e,t,i){const r=e.graphic,a=this._getGeometryAsPolygonOrPolyline(r.geometry),n="polygon"===a.type?a.rings:a.paths,o=new Array,c=l.create(),p=M.geometryToRenderInfo(a,this._context.elevationProvider,this._context.renderCoordsHelper,t),y="polygon"===a.type?"rings":"paths";this._logGeometryCreationWarnings(p,n,y,"LineSymbol3DLayer");for(let s=0;s<p.lines.length;s++){const t=p.lines[s],r=t.position,n=t.mapPositions;if(null!=this._context.clippingExtent&&(l.empty(c),l.expandWithBuffer(c,n),!l.intersectsClippingArea(c,this._context.clippingExtent)))continue;const h=this._createGeometry("polygon"===a.type?this._ringMaterial:this._lineMaterial,e,r,n,a.type,k.ELEVATED,i);o.push(h),f.LINE_WIREFRAMES&&o.push(h.instantiate({material:"polygon"===a.type?this._wireframeRingMaterial:this._wireframeLineMaterial})),null!=this._markerMaterial&&o.push(h.instantiate({material:this._markerMaterial}))}if(0===o.length)return null;const u=new C.Object3D({geometries:o,castShadow:!1,layerUid:this._context.layer.uid,graphicUid:i}),m=new d.Graphics3DObject3DGraphicLayer(this,u,o,null,null,s.sharedGeometryElevationAligner,t);return m.alignedSampledElevation=p.sampledElevation,m.needsElevationUpdates=h.needsElevationUpdates2D(t.mode),m},y._createGeometry=function(e,t,i,r,a,n,l){const o=n===k.DRAPED?{spatialReference:this._context.overlaySR,renderCoordsHelper:this._context.renderCoordsHelper}:null,s="polygon"===a,h=this._fastUpdates?.visualVariables.color,c=this._fastUpdates?.visualVariables.size,p=this._fastUpdates?.visualVariables.opacity,d=this._context.stage.renderView.getObjectAndLayerIdColor({graphicUid:l,layerUid:this._context.layer.uid}),y={position:i,size:c?null:this._getDrivenSize(t.renderingInfo),color:h?null:this._getDrivenColor(t.renderingInfo),sizeFeature:c?_.getAttributeValue(c.field,t.graphic):null,colorFeature:h?_.getAttributeValue(h.field,t.graphic):null,opacityFeature:p?_.getAttributeValue(p.field,t.graphic):null};return g.createGeometry(e,{overlayInfo:o,removeDuplicateStartEnd:s,mapPositions:r,attributeData:y},d)},y._createAsOverlay=function(e,t){const i=e.graphic,r=this._getGeometryAsPolygonOrPolyline(i.geometry),a="polygon"===r.type?r.rings:r.paths,n="polygon"===r.type?this._ringMaterial:this._lineMaterial;n.renderPriority=this._renderPriority;const o=f.LINE_WIREFRAMES?"polygon"===r.type?this._wireframeRingMaterial:this._wireframeLineMaterial:null,s=this._markerMaterial;null!=o&&(o.renderPriority=this._renderPriority-.001),null!=s&&(s.renderPriority=this._renderPriority-.002);const h=new Array,c=l.create(),d=l.empty(),y=M.geometryToRenderInfoDraped(r,this._context.overlaySR),u="polygon"===r.type?"rings":"paths";this._logGeometryCreationWarnings(y,a,u,"LineSymbol3DLayer");for(const p of y.lines){if(l.empty(c),l.expandWithBuffer(c,p.position),!l.intersectsClippingArea(c,this._context.clippingExtent))continue;l.expandWithAABB(d,c);const a=a=>{const n=this._createGeometry(a,e,p.position,void 0,r.type,k.DRAPED,i.uid),l=new b.RenderGeometry(n,{layerUid:t,graphicUid:i.uid});h.push(l)};if(null!=s){a(s);const e=this.symbolLayer.marker.placement;"begin"!==e&&"begin-end"!==e||l.expandWithBuffer(c,p.position,0,1),"end"!==e&&"begin-end"!==e||l.expandWithBuffer(c,p.position,p.position.length-3,1)}a(n),f.LINE_WIREFRAMES&&a(o)}return new p(this,h,d,this._context.drapeSourceRenderer)},y._computeMaterialWidth=function(e){return e=e??a.px2pt(1),this._drivenProperties.size?this._fastUpdates?.visualVariables.size?a.pt2px(1):1:a.pt2px(e)},y._prepareMaterialPatch=function(e,t,i){const r=t.material;if(null==r)return void(i.changed&&i.useMaterialColor&&this._patchMaterialColor(this._getCombinedOpacityAndColor(this._materialColor),this._markerMaterialCached,e));if("collection"===r.type)return;const a="complete"===r.type?r.newValue?.color:"complete"===r.diff.color?.type?r.diff.color.newValue:null,l=this._getCombinedOpacityAndColor(a);i.useMaterialColor&&this._patchMaterialColor(n.clone(l),this._markerMaterialCached,e),this._patternHidesLine&&(l[3]=0),this._patchMaterialColor(l,this._lineMaterialCached,e),delete t.material},y._prepareMarkerPatch=function(e,t){const i=t.marker,r=this._markerMaterial;if(null==i||"partial"!==i.type||null==i.diff||null!=i.diff.placement||null!=i.diff.style&&"complete"!==i.diff.style.type||null!=i.diff.color&&"complete"!==i.diff.color.type||null==r)return{changed:!1,useMaterialColor:null==this._markerColor};const a=i.diff.color,n=null!=a,l=n?a.newValue:null,o=null==l&&null==this._markerColor;l&&this._patchMaterialColor(this._getCombinedOpacityAndColor(l),r,e);const s=i.diff.style?.newValue;return s&&e.symbolLayerStatePatches.push((()=>r.setParameters({markerPrimitive:m.parseLineMarkerStyle(s)}))),delete t.marker,{changed:n,useMaterialColor:o}},y._patchMaterialColor=function(e,t,i){null!=t&&i.symbolLayerStatePatches.push((()=>t.setParameters({color:e})))},t._createClass(i,[{key:"_materialColor",get:function(){return this.symbolLayer.material?.color}},{key:"_markerColor",get:function(){return this.symbolLayer.marker?.color}},{key:"_lineMaterial",get:function(){return null==this._lineMaterialCached&&(this._lineMaterialCached=new E.RibbonLineMaterial(this._getMaterialParameters(!1)),this._context.stage.add(this._lineMaterialCached)),this._lineMaterialCached}},{key:"_ringMaterial",get:function(){return null==this._ringMaterialCached&&(this._ringMaterialCached=new E.RibbonLineMaterial(this._getMaterialParameters(!0)),this._context.stage.add(this._ringMaterialCached)),this._ringMaterialCached}},{key:"_wireframeLineMaterial",get:function(){return null==this._wireframeLineMaterialCached&&(this._wireframeLineMaterialCached=new E.RibbonLineMaterial({...this._getMaterialParameters(!1),wireframe:!0}),this._context.stage.add(this._wireframeLineMaterialCached)),this._wireframeLineMaterialCached}},{key:"_wireframeRingMaterial",get:function(){return null==this._wireframeRingMaterialCached&&(this._wireframeRingMaterialCached=new E.RibbonLineMaterial({...this._getMaterialParameters(!0),wireframe:!0}),this._context.stage.add(this._wireframeRingMaterialCached)),this._wireframeRingMaterialCached}},{key:"_markerMaterial",get:function(){return null==this._markerMaterialCached&&null!=this.symbolLayer.marker&&(this._markerMaterialCached=new L.LineMarkerMaterial({...this._getMaterialParameters(!1,!0),placement:this.symbolLayer.marker.placement,markerPrimitive:m.parseLineMarkerStyle(this.symbolLayer.marker.style)}),this._context.stage.add(this._markerMaterialCached)),this._markerMaterialCached}},{key:"_patternHidesLine",get:function(){const e=this.symbolLayer.pattern;return null!=e&&"style"===e.type&&"none"===e.style}}]),i}(y.Graphics3DSymbolLayer);var k;S.elevationModeChangeTypes={definedChanged:h.SymbolUpdateType.RECREATE,staysOnTheGround:h.SymbolUpdateType.NONE,onTheGroundChanged:h.SymbolUpdateType.RECREATE},function(e){e[e.DRAPED=0]="DRAPED",e[e.ELEVATED=1]="ELEVATED"}(k||(k={})),e.Graphics3DLineSymbolLayer=S,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));