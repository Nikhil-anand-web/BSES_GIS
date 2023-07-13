/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../geometry","../../../../Graphic","../../../../symbols","../../../../core/analysisThemeUtils","../../../../core/maybe","../../../../core/reactiveUtils","../../../../core/unitUtils","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/vec2","../../../../chunks/vec2f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/projection","../../../../chunks/boundedPlane","../../../../geometry/support/spatialReferenceUtils","../../../../layers/GraphicsLayer","../../../ViewingMode","./manipulations/DragManipulation","./manipulations/RotateManipulation","./manipulations/ScaleManipulation","./manipulations/utils","../../../input/keys","../../../interactive/InteractiveToolBase","../../../interactive/editGeometry/EditGeometry","../../../interactive/editGeometry/EditGeometryOperations","../../../interactive/editGeometry/interfaces","../../../interactive/editGeometry/operations/UpdateVertices","../../../interactive/editGeometry/support/editPlaneUtils","../../../support/hitTestSelectUtils","../../../support/screenUtils","../../../../symbols/SimpleFillSymbol","../../../../symbols/SimpleMarkerSymbol","../../../../geometry/Polygon","../../../../geometry/Point"],(function(e,t,i,o,a,r,s,n,c,l,h,p,_,u,d,y,g,f,m,v,G,w,R,b,k,T,P,A,C,S,M,O,U,E,D,B,x,L,H,V,j){"use strict";const z={up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",plus:"+",minus:"-",toggleOpacity:"t",shift:"Shift",primaryKey:C.primaryKey},I=80,F=10,K=30,N=[[1,1],[1,-1],[-1,-1],[-1,1],[1,0],[0,-1],[-1,0],[0,1]],q=1,W=10;e.TransformTool=function(e){function i(t){var i;return(i=e.call(this,t)||this)._initialControlPoints=null,i._initialGeometry=null,i._graphic=null,i._planeCache=G.create(),i._displayPlaneCache=G.create(),i._mainAxisCache=g.create(),i._rotationHandleCache=m.create(),i._cornerA=m.create(),i._cornerB=m.create(),i._cornerC=m.create(),i._cornerD=m.create(),i._avgAB=m.create(),i._avgBC=m.create(),i._avgCD=m.create(),i._avgDA=m.create(),i._preserveAspectRatio=new A.PreserveAspectRatio,i._snapRotation=new A.SnapRotation,i._graphicsLayer=new R({internal:!0,listMode:"hide",visible:!1}),i._sharedUndoStack=[],i._sharedRedoStack=[],i._isOpacityToggled=!1,i._isModifierActive=!1,i._factor=1,i.preserveAspectRatio=null,i.snapRotation=null,i}t._inherits(i,e);var o=i.prototype;return o.initialize=function(){this._initialize()},o.destroy=function(){const{map:e}=this.view;this._dragManipulation.destroy(),this._rotateManipulation.destroy(),this._scaleManipulations.forEach((e=>e.destroy())),this._editGeometryOperations.destroy(),e.removeMany([this._graphicsLayer]),this._graphicsLayer.removeAll(),this._graphicsLayer=n.destroyMaybe(this._graphicsLayer),this._initialControlPoints=null,this._initialGeometry=null,this._graphic=null,this._preserveAspectRatio=null,this._snapRotation=null,this._planeCache=null,this._displayPlaneCache=null,this._rotationHandleCache=null,this._mainAxisCache=null,this._cornerA=null,this._cornerB=null,this._cornerC=null,this._cornerD=null,this._avgAB=null,this._avgBC=null,this._avgCD=null,this._avgDA=null,this._sharedUndoStack=null,this._sharedRedoStack=null},o.onActivate=function(){this.visible=!0},o.onDeactivate=function(){this.visible=!1},o.onShow=function(){this._graphicsLayer.visible=!0},o.onHide=function(){this._graphicsLayer.visible=!1},o.canUndo=function(){return this._editGeometryOperations.canUndo},o.canRedo=function(){return this._editGeometryOperations.canRedo},o.undo=function(){this._editGeometryOperations.undo(),this.updateGraphics()},o.redo=function(){this._editGeometryOperations.redo(),this.updateGraphics()},o.refresh=function(){const{view:e,target:t}=this,i="georeference"in t?t.georeference.coords:t.geometry,o=this._editGeometryOperations,a=o.data.components[0].vertices,r=M.EditGeometry.fromGeometry(v.project(i,e.spatialReference),b.ViewingMode.Local).components[0].vertices;a.forEach(((e,t)=>{o.setVertexPosition(e,r[t].pos)})),this.updateGraphics()},o.reset=function(){const{target:e}=this;if("georeference"in e){const t=e.georeference;"control-points"===t.type&&(t.controlPoints=this._initialControlPoints)}else e.geometry=this._initialGeometry;this.refresh(),this._sharedUndoStack.length=0,this._sharedRedoStack.length=0},o.updateGraphics=function(){const e=this._editGeometryOperations.data.geometry;if("georeference"in this.target){this.target.georeference.coords=e}this._graphic.geometry=e,this._backgroundGraphic.geometry=this._backgroundGraphicGeometry,this._rotateGraphic.geometry=this._rotateGraphicGeometry,this._scaleGraphicGeometries.forEach(((e,t)=>{this._scaleGraphics[t].geometry=e}))},o.setSharedUndoStack=function(e){this._sharedUndoStack=e},o.setSharedRedoStack=function(e){this._sharedRedoStack=e},o._initialize=async function(){const{view:e,target:t}=this;if("georeference"in t){const e=t.georeference;this._graphic=new a({geometry:e.coords}),this._initialControlPoints="control-points"===e.type?e.controlPoints:null}else this._graphic=t,this._initialGeometry=t.geometry;e.map.addMany([this._graphicsLayer]),e.focus(),this.visible=!1,this.finishToolCreation(),await this._loadProjectionEngine(),this._editGeometryOperations=O.EditGeometryOperations.fromGeometry(v.project(this._graphic.geometry,e.spatialReference),b.ViewingMode.Local),this._backgroundGraphic=new a({symbol:new L({color:"transparent",outline:{type:"simple-line",color:s.getAccentColor(),width:2}}),geometry:this._backgroundGraphicGeometry}),this._rotateGraphic=new a({symbol:new H({color:s.getContrastColor(),outline:{type:"simple-line",color:s.getAccentColor(),width:1}}),geometry:this._rotateGraphicGeometry}),this._scaleGraphics=this._scaleGraphicGeometries.map((e=>new a({symbol:new H({size:6,style:"square",color:s.getContrastColor(),outline:{type:"simple-line",color:s.getAccentColor(),width:1}}),geometry:e}))),this._graphicsLayer.graphics.addMany([this._backgroundGraphic,this._rotateGraphic,...this._scaleGraphics]),this._dragManipulation=new k.DragManipulation({tool:this,view:e,graphic:this._graphic}),this._rotateManipulation=new T.RotateManipulation({tool:this,view:e,graphic:this._rotateGraphic,snapRotation:this._snapRotation}),this._scaleManipulations=this._scaleGraphics.map(((t,i)=>new P.ScaleManipulation({tool:this,view:e,graphic:t,direction:N[i],preserveAspectRatio:this._preserveAspectRatio}))),this.addHandles([this._dragManipulation.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this)),this._rotateManipulation.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this)),...this._scaleManipulations.map((e=>e.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this)))),c.watch((()=>this.view.scale),(()=>this.active?this.updateGraphics():null)),e.on("click",(async i=>{if(null!=e.activeTool&&e.activeTool!==this)return;const o=x.createScreenPointFromEvent(i),a=[];e.map.allLayers.forEach((e=>{"vector-tile"!==e.type&&"imagery"!==e.type||a.push(e)}));const r=await this.view.hitTest(o,{exclude:a}),s=r.results;if(0===s.length)e.activeTool=null;else{const i=B.findFirstGraphicHit(r.results),o="georeference"in t,a=s.map((e=>"media"===e.type?e.element:null)).filter(Boolean),n=[...this._graphicsLayer.graphics,o?null:t].filter(Boolean);o&&a.includes(t)||null!=i&&n.includes(i.graphic)?null==e.activeTool&&(e.activeTool=this):e.activeTool=null}}))]);const i=e=>{this.addHandles(e.events.on("grab-changed",(e=>{"georeference"in t&&("start"===e.action?t.opacity*=.5:"end"===e.action&&(t.opacity*=2))})))};this._dragManipulation.forEachManipulator(i),this._rotateManipulation.forEachManipulator(i),this._scaleManipulations.forEach((e=>e.forEachManipulator(i))),this.addHandles([e.on("key-down",(i=>{e.activeTool===this&&(i.key!==z.shift||i.repeat||(null==this.preserveAspectRatio&&(this._preserveAspectRatio.enabled=!this._preserveAspectRatio.enabled),null==this.snapRotation&&(this._snapRotation.enabled=!this._snapRotation.enabled),this._isModifierActive=!0,i.stopPropagation()),i.key!==z.toggleOpacity||i.repeat||("georeference"in t&&(t.opacity*=this._isOpacityToggled?2:.5,this._isOpacityToggled=!this._isOpacityToggled),i.stopPropagation()),i.key!==z.primaryKey||i.repeat||(this._factor=W,i.stopPropagation()),this._isModifierActive&&(i.key===z.plus&&(this._scale(this._factor),i.stopPropagation()),i.key===z.minus&&(this._scale(-this._factor),i.stopPropagation()),i.key===z.up&&(this._move(0,this._factor),i.stopPropagation()),i.key===z.down&&(this._move(0,-this._factor),i.stopPropagation()),i.key===z.left&&(this._move(-this._factor,0),i.stopPropagation()),i.key===z.right&&(this._move(this._factor,0),i.stopPropagation())))})),e.on("key-up",(t=>{e.activeTool===this&&(t.key===z.shift&&(null==this.preserveAspectRatio&&(this._preserveAspectRatio.enabled=!this._preserveAspectRatio.enabled),null==this.snapRotation&&(this._snapRotation.enabled=!this._snapRotation.enabled),this._isModifierActive=!1,t.stopPropagation()),t.key===z.primaryKey&&(this._factor=q,t.stopPropagation()))}))])},o._loadProjectionEngine=async function(){const e=this._graphic.geometry;return v.initializeProjection(e.spatialReference,this.view.spatialReference)},o._updateDisplayPlaneConrers=function(e){const{basis1:t,basis2:i,origin:o}=e,a=this._cornerA;f.add(a,o,t),f.add(a,a,i);const r=this._cornerB;f.add(r,o,t),f.subtract(r,r,i);const s=this._cornerC;f.subtract(s,o,t),f.subtract(s,s,i);const n=this._cornerD;f.subtract(n,o,t),f.add(n,n,i)},o._getInfo=function(){return{editGeometryOperations:this._editGeometryOperations,plane:this._plane,displayPlane:this._displayPlane}},o._updateGraphics=function(e,t){"start"===e.action&&(this._sharedUndoStack.push({tool:this,operation:t}),this._sharedRedoStack.length=0),this.updateGraphics()},o._scale=function(e){const t=this._editGeometryOperations,i=[];for(const s of t.data.components)i.push(...s.vertices);const o=t.data.geometry.extent?.width,a=(o+e*this.view.resolution)/o,r=t.scaleVertices(i,this._plane.origin,g.UNIT_X,a,a,U.AccumulationBehaviour.NEW_STEP,E.AccumulationType.REPLACE);this._sharedUndoStack.push({tool:this,operation:r}),this._sharedRedoStack.length=0,this.updateGraphics()},o._move=function(e,t){const i=this._editGeometryOperations,o=[];for(const r of i.data.components)o.push(...r.vertices);const a=i.moveVertices(o,e*this.view.resolution,t*this.view.resolution,0,U.AccumulationBehaviour.NEW_STEP);this._sharedUndoStack.push({tool:this,operation:a}),this._sharedRedoStack.length=0,this.updateGraphics()},t._createClass(i,[{key:"_plane",get:function(){const e=this._graphic.geometry;if(null==e)return null;const t=this._editGeometryOperations.data,i=t.components[0].edges[0],o=y.subtract(this._mainAxisCache,i.leftVertex.pos,i.rightVertex.pos);y.normalize(o,o);let a=I*this.view.resolution;const r=this.view.spatialReference;return w.equals(r,e.spatialReference)&&(a*=l.getMetersPerUnitForSR(r)/l.getMetersPerUnitForSR(e.spatialReference)),D.calculateOrientedBounds(o,t,a,this._planeCache)}},{key:"_displayPlane",get:function(){const e=this._plane;if(!e)return null;const t=this._displayPlaneCache;G.copy(e,t);const i=F*this.view.resolution;return f.scale(t.basis1,t.basis1,1+i/f.length(t.basis1)),f.scale(t.basis2,t.basis2,1+i/f.length(t.basis2)),t}},{key:"_backgroundGraphicGeometry",get:function(){const e=this._displayPlane;if(!e)return null;const t=this.view.spatialReference;return this._updateDisplayPlaneConrers(e),new V({spatialReference:t,rings:[[this._cornerA,this._cornerB,this._cornerC,this._cornerD,this._cornerA]]})}},{key:"_rotateGraphicGeometry",get:function(){const e=this._plane;if(!e)return null;const t=this._rotationHandleCache;return f.normalize(t,e.basis1),f.scale(t,t,K*this.view.resolution),f.add(t,t,e.origin),f.add(t,t,e.basis1),new j({x:t[0],y:t[1],spatialReference:this.view.spatialReference})}},{key:"_scaleGraphicGeometries",get:function(){const e=this._displayPlane;if(!e)return[];const t=this.view.spatialReference;this._updateDisplayPlaneConrers(e);const{_cornerA:i,_cornerB:o,_cornerC:a,_cornerD:r}=this,s=f.lerp(this._avgAB,i,o,.5),n=f.lerp(this._avgBC,o,a,.5),c=f.lerp(this._avgCD,a,r,.5),l=f.lerp(this._avgDA,r,i,.5);return[new j({x:i[0],y:i[1],spatialReference:t}),new j({x:o[0],y:o[1],spatialReference:t}),new j({x:a[0],y:a[1],spatialReference:t}),new j({x:r[0],y:r[1],spatialReference:t}),new j({x:s[0],y:s[1],spatialReference:t}),new j({x:n[0],y:n[1],spatialReference:t}),new j({x:c[0],y:c[1],spatialReference:t}),new j({x:l[0],y:l[1],spatialReference:t})]}}]),i}(S.InteractiveToolBase),i.__decorate([h.property()],e.TransformTool.prototype,"_plane",null),i.__decorate([h.property()],e.TransformTool.prototype,"_backgroundGraphicGeometry",null),i.__decorate([h.property()],e.TransformTool.prototype,"_rotateGraphicGeometry",null),i.__decorate([h.property()],e.TransformTool.prototype,"_scaleGraphicGeometries",null),i.__decorate([h.property()],e.TransformTool.prototype,"preserveAspectRatio",void 0),i.__decorate([h.property()],e.TransformTool.prototype,"snapRotation",void 0),i.__decorate([h.property({constructOnly:!0,nonNullable:!0})],e.TransformTool.prototype,"target",void 0),i.__decorate([h.property({constructOnly:!0})],e.TransformTool.prototype,"view",void 0),e.TransformTool=i.__decorate([d.subclass("esri.views.2d.interactive.editingTools.TransformTool")],e.TransformTool),e.KEYS=z,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
