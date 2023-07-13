/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../geometry","../../../../../core/Handles","../../../../../core/maybe","../../../../../core/memoize","../../../../../core/reactiveUtils","../../../../../core/accessorSupport/decorators/property","../../../../../core/accessorSupport/ensureType","../../../../../core/arrayUtils","../../../../../core/has","../../../../../core/accessorSupport/decorators/subclass","../../../../../core/support/WatchUpdatingTracking","../../../../../layers/graphics/hydratedFeatures","../../../analysis/support/measurementUtils","../../SnappingVisualizer3D","../../editingTools/dragEventPipeline3D","./DirectLineMeasurement3DView","../../../support/ElevationProvider","../../../../interactive/AnalysisToolBase","../../../../interactive/coordinateHelper","../../../../interactive/dragEventPipeline","../../../../interactive/editGeometry/EditGeometry","../../../../interactive/editGeometry/EditGeometryOperations","../../../../interactive/snapping/SceneSnappingManagerPool","../../../../interactive/snapping/SnappingContext","../../../../interactive/snapping/SnappingDragPipelineStep","../../../../interactive/snapping/snappingUtils","../../../../support/screenUtils","../../../../../geometry/Point"],(function(t,e,n,i,a,r,o,s,l,u,c,p,d,h,g,y,m,_,v,P,f,S,w,M,D,b,k,L,T,E){"use strict";let V=function(e){function n(t){var n;return(n=e.call(this,t)||this)._handles=new i,n._updatingHandles=new d.WatchUpdatingTracking,n._emulatedDrag=null,n.lineState="initial",n.startPointSurfaceLocation=null,n.endPointSurfaceLocation=null,n.cursorPointSurfaceLocation=null,n.startManipulator=null,n.endManipulator=null,n.cursorManipulator=null,n._getSnappingContext=r.memoize((t=>new b.SnappingContext({elevationInfo:{mode:"absolute-height",offset:0},pointer:t,editGeometryOperations:new M.EditGeometryOperations(new w.EditGeometry("point",f.createCoordinateHelper(!0,!1,n.view.spatialReference))),visualizer:new y.SnappingVisualizer3D}))),n}t._inherits(n,e);var s=n.prototype;return s.initialize=function(){const{view:t,analysis:e,analysisViewData:n,visible:i}=this;this.measurementView=new _.DirectLineMeasurement3DView({toolState:this,view:t,analysis:e,analysisViewData:n,visible:i});const a=D.acquire(t);this._snappingManagerResult=a,this._handles.add(a);const{start:r,end:s,cursor:l}=this.measurementView.createManipulators(),u=(t,e,n)=>S.createManipulatorDragEventPipeline(t,((t,i,a,r)=>{const o=m.hideManipulatorWhileDragging(t),s=this._snappingManager,l=this._getSnappingContext(r),u=this._updatingHandles,{lineState:c}=this;a=a.next(o).next(S.resetProperties(this,[n,e])).next((n=>{if("cursorPoint"!==e){const n=this.analysis[e];null!=n&&(t.location=n)}return n}));const p=m.screenToMap3D(this.view),d=t=>{const i=p(t);return i||"drawing"!==this.lineState&&"initial"!==this.lineState||(this[e]=null,this[n]=null),i};let g=i.next(o).next(d);if("touch"!==r||"editing"===c){const{snappingStep:t,cancelSnapping:e}=k.createSnapDragEventPipelineStep({snappingManager:s,snappingContext:l,updatingHandles:u});a=a.next(e),g=g.next(...t)}g.next((t=>"start"!==t.action?t:null)).next((i=>{const a=h.clonePoint(i.mapEnd,new E);this[e]=a,t.location=a,this[n]=this._surfaceLocation(a,i.surfaceType)}))})),c=t=>t.events.on("grab-changed",(()=>{const t=r.grabbing||s.grabbing;this.lineState=t?"editing":"measured"}));this._handles.add([u(r,"startPoint","startPointSurfaceLocation"),u(s,"endPoint","endPointSurfaceLocation"),u(l,"cursorPoint","cursorPointSurfaceLocation"),c(r),c(s)]),this.manipulators.add(r),this.manipulators.add(s),this.manipulators.add(l),this.startManipulator=r,this.endManipulator=s,this.cursorManipulator=l,this._handles.add(o.watch((()=>this.state),(t=>{"measured"===t&&this.finishToolCreation()}),o.syncAndInitial)),L.setupSnappingToggleHandles(this)},s.destroy=function(){this._handles=a.destroyMaybe(this._handles),this._updatingHandles=a.destroyMaybe(this._updatingHandles),this.measurementView=a.destroyMaybe(this.measurementView)},s.onShow=function(){this.measurementView.show(),this._updateManipulatorAvailability()},s.onHide=function(){this.measurementView.hide()},s.onDeactivate=function(){this._emulatedDrag?.cancel(),this._emulatedDrag=null},s.onInputEvent=function(t){switch(t.type){case"immediate-click":this._handleImmediateClick(t);break;case"pointer-move":this._handlePointerMove(t)}this._updateManipulatorAvailability()},s._handlePointerMove=function(t){if(!this.active||this.view.navigating)return;const{pointerType:e}=t;if("mouse"!==e)return;const n=T.createScreenPointFromEvent(t),{lineState:i,cursorManipulator:a,endManipulator:r}=this;let o=!1;null==this.cursorPoint&&(this._emulatedDrag?.cancel(),this._emulatedDrag=x(a,e,n),o=!0),"initial"===i&&(this._emulatedDrag?.update(n),o=!0),"drawing"===i&&(r.events.emit("drag",{action:"update",start:n,screenPoint:n}),o=!0),o&&t.stopPropagation()},s._handleImmediateClick=function(t){if(!this.active)return;if(!g.isPrimaryPointerAction(t))return;const e=T.createScreenPointFromEvent(t),{pointerType:n}=t,{cursorManipulator:i,startManipulator:a,endManipulator:r,lineState:o}=this;let s=!1;switch(null==this.cursorPoint&&(this._emulatedDrag?.cancel(),this._emulatedDrag=x(i,n,e)),o){case"initial":if(this._emulatedDrag?.update(e),null!=this.cursorPoint){this._emulatedDrag?.end(e),this._emulatedDrag=null;const{cursorPoint:t}=this;this.startPoint=t,this.startPointSurfaceLocation=this.cursorPointSurfaceLocation,a.location=t,a.interactive=!1,r.interactive=!1,this.lineState="drawing",this._emulatedDrag=x(r,n,e),s=!0}break;case"drawing":this._emulatedDrag?.update(e),null!=this.endPoint&&(this._emulatedDrag?.end(e),this._emulatedDrag=null,a.interactive=!0,r.interactive=!0,this.lineState="measured",s=!0)}s&&t.stopPropagation()},s._surfaceLocation=function(t,e){return e===m.SurfaceType.GROUND?"on-the-surface":(t.z??0)>=this._getElevation(t)?"above-the-surface":"below-the-surface"},s._updateManipulatorAvailability=function(){this.startManipulator.available=null!=this.analysis.startPoint,this.endManipulator.available=null!=this.analysis.endPoint},s._getElevation=function(t){return this.view.basemapTerrain.ready?v.getElevationAtPoint(this.view.elevationProvider,t)??0:0},t._createClass(n,[{key:"_snappingManager",get:function(){return this._snappingManagerResult.snappingManager}},{key:"state",get:function(){const{analysis:t}=this;if(null==t.startPoint&&null==t.endPoint)return"ready";const{lineState:e}=this;return this.validMeasurement&&"editing"!==e&&"drawing"!==e?"measured":"measuring"}},{key:"cursor",get:function(){return"ready"===this.state||"drawing"===this.lineState?"crosshair":null}},{key:"startPoint",get:function(){return this.analysis.startPoint},set:function(t){this.analysis.startPoint=t}},{key:"endPoint",get:function(){return this.analysis.endPoint},set:function(t){this.analysis.endPoint=t}},{key:"cursorPoint",get:function(){return this.measurementView.cursorPoint},set:function(t){this.measurementView.cursorPoint=t}},{key:"snappingOptions",get:function(){return this._snappingManager.options}},{key:"validMeasurement",get:function(){return null!=this.analysis.startPoint&&null!=this.analysis.endPoint}},{key:"updating",get:function(){return this._updatingHandles.updating||this._snappingManager.updating}},{key:"test",get:function(){return{snappingManager:this._snappingManager}}}]),n}(P.AnalysisToolBase);function x(t,e,n){return t.events.emit("drag",{action:"start",pointerType:e,start:n,screenPoint:n}),{update:e=>t.events.emit("drag",{action:"update",start:e,screenPoint:e}),end:e=>t.events.emit("drag",{action:"end",start:e,screenPoint:e}),cancel:()=>t.events.emit("drag",{action:"cancel"})}}e.__decorate([s.property({readOnly:!0})],V.prototype,"state",null),e.__decorate([s.property()],V.prototype,"lineState",void 0),e.__decorate([s.property({readOnly:!0})],V.prototype,"cursor",null),e.__decorate([s.property()],V.prototype,"startPoint",null),e.__decorate([s.property()],V.prototype,"endPoint",null),e.__decorate([s.property()],V.prototype,"cursorPoint",null),e.__decorate([s.property({constructOnly:!0})],V.prototype,"analysis",void 0),e.__decorate([s.property({constructOnly:!0})],V.prototype,"analysisViewData",void 0),e.__decorate([s.property()],V.prototype,"measurementView",void 0),e.__decorate([s.property({constructOnly:!0})],V.prototype,"view",void 0),e.__decorate([s.property({readOnly:!0})],V.prototype,"validMeasurement",null),e.__decorate([s.property({value:null})],V.prototype,"startPointSurfaceLocation",void 0),e.__decorate([s.property({value:null})],V.prototype,"endPointSurfaceLocation",void 0),e.__decorate([s.property({value:null})],V.prototype,"cursorPointSurfaceLocation",void 0),e.__decorate([s.property()],V.prototype,"updating",null),V=e.__decorate([p.subclass("esri.views.3d.interactive.measurementTools.directLineMeasurement3D.DirectLineMeasurement3DTool")],V);return V}));
