/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../Color","../../../../analysis/SlicePlane","../../../../core/clock","../../../../core/Handles","../../../../core/maybe","../../../../core/reactiveUtils","../../../../core/scheduling","../../../../core/screenUtils","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/mat4","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4f64","../../../../chunks/boundedPlane","../../../../geometry/support/plane","../../../../geometry/support/ray","../../../../geometry/support/vectorStacks","./settings","./sliceToolConfig","./sliceToolUtils","./images/Factory","../../interactive/manipulatorUtils","../../interactive/editingTools/dragEventPipeline3D","../../support/geometryUtils/ray","../../webgl-engine/lib/Intersector","../../webgl-engine/lib/IntersectorInterfaces","../../../interactive/AnalysisToolBase","../../../interactive/dragEventPipeline","../../../support/screenUtils"],(function(e,t,i,a,n,s,r,l,o,c,u,h,p,d,_,y,v,P,g,f,w,M,m,T,D,V,b,E,R,S,k,H,I,O,x){"use strict";var C;let z=C=function(t){function u(e){var i;return(i=t.call(this,e)||this)._clock=n.clock,i._previewPlaneOpacity=1,i.removeIncompleteOnCancel=!1,i.layersMode="none",i.shiftManipulator=null,i.rotateHeadingManipulator=null,i.rotateTiltManipulator=null,i.resizeManipulators=null,i._handles=new s,i._viewHandles=new s,i._frameTask=null,i._pointerMoveTimerMs=D.POINTER_MOVE_TIMER_MS,i._prevPointerMoveTimeout=null,i._previewPlaneGridVisualElement=null,i._previewPlaneOutlineVisualElement=null,i._startPlane=f.create(),i._previewPlane=null,i._activeKeyModifiers={},i._lastCursorPosition=c.createScreenPoint(),i._resizeHandles=[{direction:[1,0]},{direction:[1,1]},{direction:[0,1]},{direction:[-1,1]},{direction:[-1,0]},{direction:[-1,-1]},{direction:[0,-1]},{direction:[1,-1]}],i._intersector=k.newIntersector(e.view.state.viewingMode),i._intersector.options.store=H.StoreResults.MIN,i}e._inherits(u,t);var h=u.prototype;return h.initialize=function(){if(null==this.analysis)throw new Error("SliceTool requires valid analysis, but null was provided.");const e=!this.view._stage?.renderView.renderingContext.driverTest.svgPremultipliesAlpha.result,t={accentColor:T.settings.rotateManipulators.color,contrastColor:T.settings.rotateManipulators.contrastColor,preMultiplyAlpha:e};this._rotateHeadingImage=b.getRotateHeadingTexture(this.view.toolViewManager.textures,t),this._rotateTiltImage=b.getTiltRotateTexture(this.view.toolViewManager.textures,t);const i=e=>{this._updateManipulatorsInteractive(e),e.grabbing||(null!=this.analysisViewData.plane&&f.copy(this.analysisViewData.plane,this._startPlane),this.inputState=null)};this.shiftManipulator=V.createShiftManipulator(this.view,{offsetMode:V.OffsetMode.CENTER_ON_ARROW,calloutColor:T.settings.callouts.color,color:T.settings.shiftManipulator.color,outlineColor:T.settings.shiftManipulator.outlineColor}),this.manipulators.add(this.shiftManipulator),this.shiftManipulator.events.on("grab-changed",(e=>{this._onShiftGrab(e),i(this.shiftManipulator)})),this._handles.add(this._createShiftDragPipeline(this.shiftManipulator)),this.rotateHeadingManipulator=V.createRotateManipulator(this.view,this._rotateHeadingImage.texture),this.manipulators.add(this.rotateHeadingManipulator),this.rotateHeadingManipulator.events.on("grab-changed",(e=>{this._onRotateHeadingGrab(e),i(this.rotateHeadingManipulator)})),this._handles.add(this._createRotateHeadingDragPipeline(this.rotateHeadingManipulator)),this.rotateTiltManipulator=V.createRotateManipulator(this.view,this._rotateTiltImage.texture),this.manipulators.add(this.rotateTiltManipulator),this.rotateTiltManipulator.events.on("grab-changed",(e=>{this._onRotateTiltGrab(e),i(this.rotateTiltManipulator)})),this._handles.add(this._createRotateTiltDragPipeline(this.rotateTiltManipulator)),this.resizeManipulators=this._resizeHandles.map(((e,t)=>{const a=V.createResizeManipulator(this.view,e,{color:T.settings.resizeManipulators.color});return a.events.on("grab-changed",(e=>{this._onResizeGrab(e,t),i(a)})),this._handles.add(this._createResizeDragPipeline(a)),a})),this.manipulators.addMany(this.resizeManipulators),this._previewPlaneGridVisualElement=V.createGridVisualElement(this.view),this._previewPlaneOutlineVisualElement=V.createOutlineVisualElement(this.view),this._previewPlaneOutlineVisualElement.width=D.PLANE_PREVIEW_OUTLINE_WIDTH,this._handles.add(l.watch((()=>[this.analysisViewData.plane,this.analysis.tiltEnabled]),(()=>this._updateManipulators()),l.sync));const a=l.watch((()=>this.state),(e=>{"sliced"===e&&this.finishToolCreation()}),l.syncAndInitial);this._handles.add([a,l.watch((()=>this.view.state.camera),(()=>this._onCameraChange()))])},h.destroy=function(){this._rotateHeadingImage=r.releaseMaybe(this._rotateHeadingImage),this._rotateTiltImage=r.releaseMaybe(this._rotateTiltImage),this._handles=r.destroyMaybe(this._handles),this._viewHandles=r.destroyMaybe(this._viewHandles),this._removeFrameTask(),this._clearPointerMoveTimeout(),this._previewPlaneOutlineVisualElement=r.destroyMaybe(this._previewPlaneOutlineVisualElement),this._previewPlaneGridVisualElement=r.destroyMaybe(this._previewPlaneGridVisualElement)},h.enterExcludeLayerMode=function(){null!=this.analysisViewData.plane&&(this._set("layersMode","exclude"),this.active||(this.view.activeTool=this))},h.exitExcludeLayerMode=function(){null!=this.analysisViewData.plane&&(this._set("layersMode","none"),this.active&&(this.view.activeTool=null))},h.onDeactivate=function(){this._set("layersMode","none"),this._updatePreviewPlane(null)},h.onShow=function(){this._updateVisibility(!0)},h.onHide=function(){this._updateVisibility(!1)},h._updateVisibility=function(e){this._updateManipulators(),e||this._clearPointerMoveTimeout()},h.onInputEvent=function(e){switch(e.type){case"pointer-drag":if(!F(e))return;this._isPlacingSlicePlane?this._onClickPlacePlane(e)&&e.stopPropagation():this._onPointerDrag(e)&&e.stopPropagation();break;case"pointer-move":this._onPointerMove(e);break;case"pointer-up":this._onPointerUp(e)&&e.stopPropagation();break;case"immediate-click":if(!F(e))return;this._onClickPlacePlane(e)&&e.stopPropagation();break;case"click":if(!F(e))return;this._onClickExcludeLayer(e)&&e.stopPropagation();break;case"drag":this.inputState&&e.stopPropagation();break;case"key-down":this._onKeyDown(e)&&e.stopPropagation();break;case"key-up":this._onKeyUp(e)&&e.stopPropagation()}},h.onEditableChange=function(){this.analysisViewData.editable=this.internallyEditable},h._onPointerDrag=function(e){const t=this.inputState;if(e.pointerId===this._creatingPointerId&&null!=t&&"shift"===t.type){const i=x.createScreenPointFromEvent(e);return this.shiftManipulator.events.emit("drag",{action:t.hasBeenDragged?"update":"start",pointerType:e.pointerType,start:i,screenPoint:i}),t.hasBeenDragged=!0,!0}return!1},h._onPointerMove=function(e){this._lastCursorPosition.x=e.x,this._lastCursorPosition.y=e.y,this._resetPointerMoveTimeout(),"touch"!==e.pointerType&&this._updatePreviewPlane(x.createScreenPointFromEvent(e),this._activeKeyModifiers)},h._onCameraChange=function(){this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),this._updateManipulators()},h._onPointerUp=function(e){if(e.pointerId===this._creatingPointerId&&null!=this.analysisViewData.plane){const t=x.createScreenPointFromEvent(e);return this.shiftManipulator.events.emit("drag",{action:"end",start:t,screenPoint:t}),f.copy(this.analysisViewData.plane,this._startPlane),this.inputState=null,!0}return!1},h._onClickPlacePlane=function(e){if("exclude"===this.layersMode)return!1;if(this._isPlacingSlicePlane){const t=x.createScreenPointFromEvent(e),i=f.create();if(this._pickPlane(t,!1,this._activeKeyModifiers,i)){if("pointer-drag"===e.type){const a=this._calculatePickRay(t);this.inputState=A(a,e.pointerId,i.origin,i)}return f.copy(i,this._startPlane),this.analysis.shape=V.planeToShape(i,this.view,this.view.spatialReference,new a),!0}}return!1},h._onClickExcludeLayer=function(e){return!("exclude"!==this.layersMode||!this.created)&&(this.view.hitTest(x.createScreenPointFromEvent(e)).then((e=>{if(e.results.length){const t=e.results[0],i="graphic"===t?.type&&t.graphic;if(i){const e=i.sourceLayer||i.layer;e&&this.analysis.excludedLayers.push(e)}}else e.ground.layer?this.analysis.excludedLayers.push(e.ground.layer):this.analysis.excludeGroundSurface=!0})),this._set("layersMode","none"),this.active&&(this.view.activeTool=null),!0)},h._onKeyDown=function(e){return(e.key===D.forceVerticalModifier||e.key===D.forceHorizontalModifier)&&(this._activeKeyModifiers[e.key]=!0,null!=this._previewPlane&&this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),!0)},h._onKeyUp=function(e){return!(e.key!==D.forceVerticalModifier&&e.key!==D.forceHorizontalModifier||!this._activeKeyModifiers[e.key])&&(delete this._activeKeyModifiers[e.key],null!=this._previewPlane&&this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),!0)},h._onShiftGrab=function(e){if("start"!==e.action||null==this.analysisViewData.plane||!e.screenPoint)return;const t=this._calculatePickRay(e.screenPoint);f.copy(this.analysisViewData.plane,this._startPlane),this.inputState=A(t,null,this.shiftManipulator.renderLocation,this.analysisViewData.plane)},h._createShiftDragPipeline=function(e){return O.createManipulatorDragEventPipeline(e,((e,t,i)=>{const a=this.inputState;if(null==a||"shift"!==a.type)return;const n=null!=this.analysisViewData.plane?f.copy(this.analysisViewData.plane,f.create()):null;t.next(R.screenToRenderPlane(this.view,a.shiftPlane)).next(this._shiftDragAdjustSensitivity(a)).next(this._shiftDragUpdatePlane(a)),i.next((()=>{null!=n&&this._updateBoundedPlane(n)}))}))},h._shiftDragAdjustSensitivity=function(e){return t=>{if(null==this.analysisViewData.plane)return null;const i=.001,a=Math.min((1-Math.abs(v.dot(f.normal(this.analysisViewData.plane),t.ray.direction)/v.length(t.ray.direction)))/i,1),n=-w.signedDistance(this._startPlane.plane,t.renderEnd),s=-w.signedDistance(this._startPlane.plane,e.startPoint);return e.depth=e.depth*(1-a)+n*a-s,t}},h._shiftDragUpdatePlane=function(e){return()=>{if(null==this.analysisViewData.plane)return;const t=v.copy(m.sv3d.get(),this._startPlane.origin),i=v.copy(m.sv3d.get(),f.normal(this._startPlane));v.scale(i,i,-e.depth),v.add(i,i,t);const a=f.fromValues(i,this.analysisViewData.plane.basis1,this.analysisViewData.plane.basis2,f.create());this._updateBoundedPlane(a)}},h._onRotateHeadingGrab=function(e){if("start"!==e.action||null==this.analysisViewData.plane||!e.screenPoint)return;const t=V.createRotatePlane(this.analysisViewData.plane,this.view.renderCoordsHelper,V.RotationAxis.HEADING,w.create()),i=this._calculatePickRay(e.screenPoint),a=P.create();w.intersectRay(t,i,a)&&(f.copy(this.analysisViewData.plane,this._startPlane),this.inputState={type:"rotate",rotatePlane:t,startPoint:a})},h._createRotateHeadingDragPipeline=function(e){return O.createManipulatorDragEventPipeline(e,((e,t,i)=>{const a=this.inputState;if(null==a||"rotate"!==a.type)return;const n=null!=this.analysisViewData.plane?f.copy(this.analysisViewData.plane,f.create()):null;t.next(R.screenToRenderPlane(this.view,a.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(a)).next(this._rotateDragUpdatePlaneFromRotate()),i.next((()=>{null!=n&&this._updateBoundedPlane(n)}))}))},h._onRotateTiltGrab=function(e){if("start"!==e.action||null==this.analysisViewData.plane||!e.screenPoint)return;const t=V.createRotatePlane(this.analysisViewData.plane,this.view.renderCoordsHelper,V.RotationAxis.TILT,w.create()),i=this._calculatePickRay(e.screenPoint),a=P.create();w.intersectRay(t,i,a)&&(f.copy(this.analysisViewData.plane,this._startPlane),this.inputState={type:"rotate",rotatePlane:t,startPoint:a})},h._createRotateTiltDragPipeline=function(e){return O.createManipulatorDragEventPipeline(e,((e,t,i)=>{const a=this.inputState;if(null==a||"rotate"!==a.type)return;const n=null!=this.analysisViewData.plane?f.copy(this.analysisViewData.plane,f.create()):null;t.next(R.screenToRenderPlane(this.view,a.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(a)).next(this._rotateDragUpdatePlaneFromRotate()),i.next((()=>{null!=n&&this._updateBoundedPlane(n)}))}))},h._rotateDragRenderPlaneToRotate=function(e){return t=>{if(null==this.analysisViewData.plane)return null;const i=w.normal(e.rotatePlane),a=E.calculateInputRotationTransform(e.startPoint,t.renderEnd,this.analysisViewData.plane.origin,i);return{...t,rotateAxis:i,rotateAngle:a}}},h._rotateDragUpdatePlaneFromRotate=function(){return e=>{if(null==this.analysisViewData.plane)return;const t=y.fromRotation(m.sm4d.get(),e.rotateAngle,e.rotateAxis);if(null==t)return;const i=v.transformMat4(m.sv3d.get(),this._startPlane.basis1,t),a=v.transformMat4(m.sv3d.get(),this._startPlane.basis2,t),n=f.fromValues(this.analysisViewData.plane.origin,i,a,f.create());this._updateBoundedPlane(n)}},h._onResizeGrab=function(e,t){if("start"!==e.action||null==this.analysisViewData.plane||!e.screenPoint)return;const i=this._calculatePickRay(e.screenPoint),a=m.sv3d.get();w.intersectRay(this.analysisViewData.plane.plane,i,a)&&(f.copy(this.analysisViewData.plane,this._startPlane),this.inputState={type:"resize",activeHandleIdx:t,startPoint:P.clone(a)})},h._createResizeDragPipeline=function(e){return O.createManipulatorDragEventPipeline(e,((e,t,i)=>{const a=this.inputState;if(null==a||"resize"!==a.type||null==this.analysisViewData.plane)return;const n=f.copy(this.analysisViewData.plane,f.create());t.next(R.screenToRenderPlane(this.view,this.analysisViewData.plane.plane)).next(this._resizeDragUpdatePlane(a)),i.next((()=>{this._updateBoundedPlane(n)}))}))},h._resizeDragUpdatePlane=function(e){return t=>{if(null==this.analysisViewData.plane)return;const i=this._resizeHandles[e.activeHandleIdx],a=V.resizePlane(i,e.startPoint,t.renderEnd,this.view.state.camera,this._startPlane,f.copy(this.analysisViewData.plane));this._updateBoundedPlane(a)}},h._updateBoundedPlane=function(e){const t=this.analysisViewData;if(null==t)throw new Error("valid internal object expected");t.plane=e},h._updatePreviewPlane=function(e,t={}){let i=this._previewPlane;if(this._previewPlane=null,null==e)return this._removeFrameTask(),void this._updateManipulators();if(!this.analysisViewData.plane&&this.active){const a=null!=i?i:f.create();if(i=null!=i?f.copy(i,G):null,this._pickPlane(e,!0,t,a)){const e=D.PREVIEW_FADE_DOT_THRESHOLD;let t=!1;null!=i&&(t=v.dot(i.plane,a.plane)<e||v.dot(v.normalize(m.sv3d.get(),i.basis1),v.normalize(m.sv3d.get(),a.basis1))<e),t&&(this._previewPlaneOpacity=0),this._previewPlane=a}}null!=this._previewPlane&&null==this._frameTask&&0===this._previewPlaneOpacity?this._frameTask=o.addFrameTask({update:({deltaTime:e})=>{this._previewPlaneOpacity=Math.min(this._previewPlaneOpacity+e/(1e3*D.PREVIEW_FADE_DURATION_SECONDS),1),this._updateManipulators(),1===this._previewPlaneOpacity&&this._removeFrameTask()}}):null==this._previewPlane&&null!=this._frameTask?this._removeFrameTask():null!=this._previewPlane&&this._updateManipulators()},h._removeFrameTask=function(){this._frameTask=r.removeMaybe(this._frameTask)},h._calculatePickRay=function(e){const t=M.create(),i=c.screenPointObjectToArray(e,U);return S.fromScreen(this.view.state.camera,i,t),v.normalize(t.direction,t.direction),t},h._pickMinResult=function(e){const t=c.screenPointObjectToArray(e,m.sv2d.get());return this.view.sceneIntersectionHelper.intersectToolIntersectorScreen(t,this._intersector),this._intersector.results.min},h._pickPlane=function(e,t,i,a){const n=this._pickMinResult(e),s=m.sv3d.get();if(!n.getIntersectionPoint(s))return!1;const r=n.getTransformedNormal(m.sv3d.get()),l=this.view.state.camera;v.dot(r,l.viewForward)>0&&v.scale(r,r,-1);const o=V.calculatePlaneHalfSize(s,l),c=(t?1:-1)*o*D.INITIAL_DEPTH_OFFSET_FRAC,u=v.scale(m.sv3d.get(),r,c);v.add(u,u,s);const h=this.analysis.tiltEnabled?V.SliceOrientation.TILTED:V.SliceOrientation.HORIZONTAL_OR_VERTICAL,p=i[D.forceVerticalModifier]?V.SliceOrientation.VERTICAL:i[D.forceHorizontalModifier]?V.SliceOrientation.HORIZONTAL:h;return V.createPlane(u,r,o,o,l,p,this.view.renderCoordsHelper,a),!0},h._clearPointerMoveTimeout=function(){this._prevPointerMoveTimeout=r.removeMaybe(this._prevPointerMoveTimeout)},h._resetPointerMoveTimeout=function(){this._clearPointerMoveTimeout(),this.shiftManipulator.state|=V.DidPointerMoveRecentlyFlag,this.rotateHeadingManipulator.state|=V.DidPointerMoveRecentlyFlag,this.rotateTiltManipulator.state|=V.DidPointerMoveRecentlyFlag,this._prevPointerMoveTimeout=this._clock.setTimeout((()=>{this.shiftManipulator.state&=~V.DidPointerMoveRecentlyFlag,this.rotateHeadingManipulator.state&=~V.DidPointerMoveRecentlyFlag,this.rotateTiltManipulator.state&=~V.DidPointerMoveRecentlyFlag}),this._pointerMoveTimerMs)},h._updateManipulators=function(){if(C.disableEngineLayers)return;let e,t=!1;if(null!=this.analysisViewData.plane)e=this.analysisViewData.plane,t=!1;else{if(null==this._previewPlane)return this.shiftManipulator.available=!1,this.rotateHeadingManipulator.available=!1,this.rotateTiltManipulator.available=!1,this.resizeManipulators.forEach((e=>e.available=!1)),this._previewPlaneOutlineVisualElement.visible=!1,void(this._previewPlaneGridVisualElement.visible=!1);e=this._previewPlane,t=!0}const i=V.calculateBoundedPlaneTranslateRotate(e,m.sm4d.get());t?(this.shiftManipulator.available=!1,this.rotateHeadingManipulator.available=!1,this.rotateTiltManipulator.available=!1,this.resizeManipulators.forEach((e=>e.available=!1)),this._previewPlaneOutlineVisualElement.attached=!0,this._previewPlaneGridVisualElement.attached=!0,this._previewPlaneOutlineVisualElement.visible=!0,this._previewPlaneGridVisualElement.visible=!0):(this.shiftManipulator.available=!0,this.rotateHeadingManipulator.available=!0,this.rotateTiltManipulator.available=this.analysis.tiltEnabled,this.resizeManipulators.forEach((e=>e.available=!0)),V.updateShiftRestartHandle(this.shiftManipulator,i,e,this.view.state.camera),V.updateRotateHeadingHandle(this.rotateHeadingManipulator,i,e,this.view.renderCoordsHelper),V.updateRotateTiltHandle(this.rotateTiltManipulator,i,e),this.resizeManipulators.forEach(((t,a)=>V.updateResizeHandle(t,this._resizeHandles[a],i,e))),this._previewPlaneOutlineVisualElement.visible=!1,this._previewPlaneGridVisualElement.visible=!1);const a=v.set(m.sv3d.get(),v.length(e.basis1),v.length(e.basis2),1),n=y.fromScaling(m.sm4d.get(),a),s=y.multiply(n,i,n);this._previewPlaneOutlineVisualElement.transform=s,this._previewPlaneGridVisualElement.transform=s,this._updateMaterials()},h._updateMaterials=function(){const e=i.toUnitRGBA(T.settings.plane.outlineColor);e[3]*=this._previewPlaneOpacity;const t=i.toUnitRGBA(T.settings.plane.color);t[3]*=this._previewPlaneOpacity,this._previewPlaneOutlineVisualElement.color=e,this._previewPlaneGridVisualElement.backgroundColor=t,this._previewPlaneGridVisualElement.gridColor=g.ZEROS},h._updateManipulatorsInteractive=function(e){if(!e.grabbing)return this.shiftManipulator.interactive=!0,this.rotateHeadingManipulator.interactive=!0,this.rotateTiltManipulator.interactive=!0,void this.resizeManipulators.forEach((e=>{e.interactive=!0}));this.shiftManipulator.interactive=this.shiftManipulator===e,this.rotateHeadingManipulator.interactive=this.rotateHeadingManipulator===e,this.rotateTiltManipulator.interactive=this.rotateTiltManipulator===e,this.resizeManipulators.forEach((t=>{t.interactive=t===e}))},h.testData=function(){return{plane:this.analysisViewData.plane,setPointerMoveTimerMs:e=>{this._pointerMoveTimerMs=e}}},e._createClass(u,[{key:"state",get:function(){const e=!!this.analysisViewData.plane,t=!!this.inputState;return e?e&&t?"slicing":e&&!t?"sliced":"ready":"ready"}},{key:"cursor",get:function(){return this._isPlacingSlicePlane||"exclude"===this.layersMode?"crosshair":null!=this._creatingPointerId?"grabbing":null}},{key:"analysis",set:function(e){if(null==e)throw new Error("SliceTool requires valid analysis, but null was provided.");this._handles.remove("analysis"),this._set("analysis",e)}},{key:"inputState",get:function(){return this._get("inputState")},set:function(e){this._set("inputState",e),this.analysisViewData.showGrid=null!=e&&"resize"===e.type,this._updateMaterials()}},{key:"_isPlacingSlicePlane",get:function(){return!this.inputState&&!this.analysisViewData.plane&&this.active}},{key:"_creatingPointerId",get:function(){return null!=this.inputState&&"shift"===this.inputState.type?this.inputState.creatingPointerId:null}}]),u}(I.AnalysisToolBase);function A(e,t,i,a){const n=V.createShiftPlane(i,f.normal(a),e.direction,w.create()),s=P.create();return w.intersectRay(n,e,s)?{type:"shift",creatingPointerId:t,hasBeenDragged:!1,shiftPlane:n,depth:0,startPoint:s}:null}function F(e){return"mouse"!==e.pointerType||0===e.button}z.disableEngineLayers=!1,t.__decorate([u.property()],z.prototype,"_clock",void 0),t.__decorate([u.property({constructOnly:!0})],z.prototype,"view",void 0),t.__decorate([u.property()],z.prototype,"analysisViewData",void 0),t.__decorate([u.property({readOnly:!0})],z.prototype,"state",null),t.__decorate([u.property({readOnly:!0})],z.prototype,"cursor",null),t.__decorate([u.property()],z.prototype,"analysis",null),t.__decorate([u.property()],z.prototype,"removeIncompleteOnCancel",void 0),t.__decorate([u.property({readOnly:!0})],z.prototype,"layersMode",void 0),t.__decorate([u.property({value:null})],z.prototype,"inputState",null),t.__decorate([u.property()],z.prototype,"_isPlacingSlicePlane",null),t.__decorate([u.property()],z.prototype,"_creatingPointerId",null),z=C=t.__decorate([_.subclass("esri.views.3d.analysis.Slice.SliceTool")],z);const G=f.create(),U=c.createScreenPointArray();return z}));
