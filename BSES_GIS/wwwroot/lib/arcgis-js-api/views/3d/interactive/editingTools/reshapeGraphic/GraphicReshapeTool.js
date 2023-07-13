/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/Evented","../../../../../core/Handles","../../../../../core/maybe","../../../../../core/reactiveUtils","../../../../../core/accessorSupport/decorators/property","../../../../../core/accessorSupport/ensureType","../../../../../core/arrayUtils","../../../../../core/has","../../../../../core/accessorSupport/decorators/subclass","../isSupportedGraphicUtils","./isSupportedGraphic","./ReshapeOperation","../../../../interactive/InteractiveToolBase","../../../../interactive/sketch/SketchLabelOptions","../../../../interactive/sketch/SketchTooltipOptions"],(function(e,t,o,r,a,n,p,i,s,h,c,l,d,y,u,_,g,G){"use strict";e.GraphicReshapeTool=function(e){function o(t){var o;return(o=e.call(this,t)||this)._handles=new a,o._internalGeometryUpdate=!1,o.enableZShape=!0,o.enableZVertex=!0,o.enableMoveGraphic=!0,o.enableMidpoints=!0,o.enableEdgeOffset=!1,o.type="reshape-3d",o.labelOptions=new g,o.tooltipOptions=new G,o.snappingManager=null,o.automaticManipulatorSelection=!1,o}t._inherits(o,e);var r=o.prototype;return r.initialize=function(){const e=this._reshapeOperation=new u.ReshapeOperation({tool:this});this.addHandles([e.on("reshape",(e=>{"reshape"===e.type&&this._onReshapeGeometryChanged(),this.emit("reshape",e)})),e.on("move",(e=>{"move"===e.type&&this._onReshapeGeometryChanged(),this.emit("move",e)})),e.on("vertex-add",(e=>{this._onReshapeGeometryChanged(),this.emit("vertex-add",e)})),e.on("vertex-remove",(e=>{this._onReshapeGeometryChanged(),this.emit("vertex-remove",e)})),e.on("immediate-click",(e=>this.emit("immediate-click",e))),this.view.on("pointer-down",["Shift"],(e=>e.stopPropagation())),p.watch((()=>this.graphic),(()=>this._updateGraphic()),p.syncAndInitial)]),this.finishToolCreation()},r.destroy=function(){this._handles=n.destroyMaybe(this._handles),this._reshapeOperation=n.destroyMaybe(this._reshapeOperation)},r._updateGeometry=function(){const e=y.geometryOfSupportedGraphic(this.graphic);this._reshapeOperation.inputGeometry=null!=e?e.clone():null},r._updateGraphic=function(){if(this._handles.remove("onGraphicGeometryChange"),this._updateGeometry(),y.isSupportedGraphic(this.graphic)!==d.SupportedGraphicResult.SUPPORTED)return;const e=p.watch((()=>this.graphic?.geometry),(()=>{!1===this._internalGeometryUpdate&&this._updateGeometry()}),p.sync);this._handles.add(e,"onGraphicGeometryChange")},r.onManipulatorSelectionChanged=function(){this._reshapeOperation&&this._reshapeOperation.onManipulatorSelectionChanged()},r._updateGeometryInternally=function(e){this._internalGeometryUpdate=!0;const{graphic:t}=this,{geometry:o}=t;"mesh"===o?.type&&"point"===e.type?(t.geometry=o.centerAt(e),t.notifyGeometryChanged()):t.geometry=e,this._internalGeometryUpdate=!1},r._onReshapeGeometryChanged=function(){const{outputGeometry:e}=this._reshapeOperation;null!=this.graphic&&e&&this._updateGeometryInternally(e.clone())},r.undo=function(){null!=this.snappingManager&&this.snappingManager.doneSnapping();const e=this._reshapeOperation.undo(),{outputGeometry:t}=this._reshapeOperation;e&&t&&this._updateGeometryInternally(t.clone())},r.redo=function(){null!=this.snappingManager&&this.snappingManager.doneSnapping();const e=this._reshapeOperation.redo(),{outputGeometry:t}=this._reshapeOperation;e&&t&&this._updateGeometryInternally(t.clone())},r.onInputEvent=function(e){"key-down"!==e.type||"Delete"!==e.key&&"Backspace"!==e.key||this._reshapeOperation.removeSelectedVertices()},r.reset=function(){},t._createClass(o,[{key:"updating",get:function(){return this._reshapeOperation?.updating??!1}},{key:"canUndo",get:function(){return this._reshapeOperation.canUndo??!1}},{key:"canRedo",get:function(){return this._reshapeOperation.canRedo??!1}},{key:"test",get:function(){return{snappingManager:this.snappingManager,reshapeOperation:this._reshapeOperation}}}]),o}(r.EventedMixin(_.InteractiveToolBase)),o.__decorate([i.property()],e.GraphicReshapeTool.prototype,"_reshapeOperation",void 0),o.__decorate([i.property({constructOnly:!0,nonNullable:!0})],e.GraphicReshapeTool.prototype,"view",void 0),o.__decorate([i.property({constructOnly:!0})],e.GraphicReshapeTool.prototype,"graphic",void 0),o.__decorate([i.property({constructOnly:!0,nonNullable:!0})],e.GraphicReshapeTool.prototype,"enableZShape",void 0),o.__decorate([i.property({constructOnly:!0,nonNullable:!0})],e.GraphicReshapeTool.prototype,"enableZVertex",void 0),o.__decorate([i.property({constructOnly:!0,nonNullable:!0})],e.GraphicReshapeTool.prototype,"enableMoveGraphic",void 0),o.__decorate([i.property({constructOnly:!0,nonNullable:!0})],e.GraphicReshapeTool.prototype,"enableMidpoints",void 0),o.__decorate([i.property({constructOnly:!0,nonNullable:!0})],e.GraphicReshapeTool.prototype,"enableEdgeOffset",void 0),o.__decorate([i.property()],e.GraphicReshapeTool.prototype,"type",void 0),o.__decorate([i.property({constructOnly:!0,type:g})],e.GraphicReshapeTool.prototype,"labelOptions",void 0),o.__decorate([i.property({constructOnly:!0,type:G})],e.GraphicReshapeTool.prototype,"tooltipOptions",void 0),o.__decorate([i.property({constructOnly:!0})],e.GraphicReshapeTool.prototype,"snappingManager",void 0),o.__decorate([i.property()],e.GraphicReshapeTool.prototype,"updating",null),o.__decorate([i.property()],e.GraphicReshapeTool.prototype,"automaticManipulatorSelection",void 0),e.GraphicReshapeTool=o.__decorate([l.subclass("esri.views.3d.interactive.editingTools.graphicReshape3D.GraphicReshapeTool")],e.GraphicReshapeTool),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));