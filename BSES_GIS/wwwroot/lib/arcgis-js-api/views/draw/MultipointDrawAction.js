/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/Logger","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/Error","../../core/accessorSupport/decorators/subclass","./DrawAction","./input/DrawEvents","../input/InputManager","../interactive/keybindings","../support/screenUtils","../../geometry/Point"],(function(e,t,i,n,o,r,s,a,d,h,p,c,l,v,u,_){"use strict";e.MultipointDrawAction=function(e){function i(t){var i;return(i=e.call(this,t)||this)._popVertexOnPointerMove=!1,i._addVertexOnPointerUp=!1,i}t._inherits(i,e);var n=i.prototype;return n.initialize=function(){this._addViewHandles(),this._addUndoRedoHandles()},n.destroy=function(){this._removeViewHandles(),this._removeUndoRedoHandles(),this.emit("destroy")},n.undo=function(){t._get(t._getPrototypeOf(i.prototype),"undo",this).call(this),this.notifyChange("vertices")},n.redo=function(){t._get(t._getPrototypeOf(i.prototype),"redo",this).call(this),this.notifyChange("vertices")},n.complete=function(){this._completeDrawing()},n._addViewHandles=function(){this._removeViewHandles(),this._handles.add([this.view.on("click",(e=>{e.stopPropagation()}),l.ViewEventPriorities.TOOL),this.view.on("pointer-down",(e=>{this._shouldHandlePointerEvent(e)&&(this._abortSnapping(),this._activePointerId=e.pointerId,this._addVertexOnPointerUp=!0,this._cursorScreenPoint=u.createScreenPointFromEvent(e),"touch"===e.pointerType&&this._updateCursor(e.native))}),l.ViewEventPriorities.TOOL),this.view.on("pointer-move",(e=>{this._popVertexOnPointerMove&&(this.undo(),this._popVertexOnPointerMove=!1),this._abortSnapping(),this._cursorScreenPoint=u.createScreenPointFromEvent(e),"touch"!==e.pointerType&&this._updateCursor(e.native)}),l.ViewEventPriorities.TOOL),this.view.on("pointer-drag",(e=>{this._shouldHandlePointerEvent(e)&&(this._abortSnapping(),this._addVertexOnPointerUp=!1)}),l.ViewEventPriorities.TOOL),this.view.on("pointer-up",(e=>{if(this._shouldHandlePointerEvent(e))if(this._abortSnapping(),this._activePointerId=null,this._addVertexOnPointerUp)this._vertexAddHandler(e);else{const t="touch"===e.pointerType;this._updateCursor(e.native,t)}}),l.ViewEventPriorities.TOOL),this.view.on("drag",["Shift"],(e=>{e.stopPropagation()}),l.ViewEventPriorities.TOOL),this.view.on("double-click",(e=>{e.stopPropagation(),this._drawCompleteHandler(e)}),l.ViewEventPriorities.TOOL),this.view.on("double-click",["Control"],(e=>{e.stopPropagation(),this._drawCompleteHandler(e)}),l.ViewEventPriorities.TOOL),this.view.on("key-down",(e=>{const{key:t,repeat:i}=e;t===v.SKETCH_KEYS.vertexAdd&&!i&&this._cursorScreenPoint?(e.stopPropagation(),this._abortSnapping(),this._vertexAddHandler(e)):t!==v.SKETCH_KEYS.complete||i?t!==v.SKETCH_KEYS.undo||this.interactiveUndoDisabled||i?t!==v.SKETCH_KEYS.redo||this.interactiveUndoDisabled||i?t!==v.SKETCH_KEYS.pan||i||e.stopPropagation():(e.stopPropagation(),this.redo()):(e.stopPropagation(),this.undo()):(e.stopPropagation(),this._drawCompleteHandler(e))}),l.ViewEventPriorities.TOOL),this.view.on("key-up",(e=>{e.key===v.SKETCH_KEYS.pan&&e.stopPropagation()}),l.ViewEventPriorities.TOOL)],this._viewHandlesKey)},n._addUndoRedoHandles=function(){this._removeUndoRedoHandles(),this._handles.add([this._editGeometryOperations.on("vertex-remove",(e=>{if(this.notifyChange("vertices"),"undo"===e.operation){const t=this._nativeEventHistory.undoStack.pop();this._nativeEventHistory.redoStack.push(t);const i=[...this._committedVertices];null!=this._stagedVertex&&i.push(this._coordinateHelper.pointToArray(this._stagedVertex)),this.emit("undo",new c.VertexRemoveEvent(this.view,t,e.vertices[0].index,i))}})),this._editGeometryOperations.on("vertex-add",(e=>{if(this.notifyChange("vertices"),"apply"===e.operation){const e=this._nativeEventHistory.undoStack[this._nativeEventHistory.undoStack.length],t=this._committedVertices.length-1,i=new c.VertexAddEvent(this.view,e,t,this.vertices);this.emit("vertex-add",i),i.defaultPrevented&&(this._popVertexOnPointerMove=!0)}else if("redo"===e.operation){const t=this._nativeEventHistory.redoStack.pop();this._nativeEventHistory.undoStack.push(t);const i=[...this._committedVertices];null!=this._stagedVertex&&i.push(this._coordinateHelper.pointToArray(this._stagedVertex)),this.emit("redo",new c.VertexAddEvent(this.view,t,e.vertices[0].index,i))}}))],this._undoRedoHandlesKey)},n._removeViewHandles=function(){this._handles.remove(this._viewHandlesKey)},n._removeUndoRedoHandles=function(){this._handles.remove(this._undoRedoHandlesKey)},n._addVertex=function(e,t){const i=this._coordinateHelper.arrayToVector(e);if(this._isDuplicateOfLastVertex(i))return;this._popCursorVertex(),this._editGeometryOperations.appendVertex(i);const n=t||new Event("placeholder");this._nativeEventHistory.undoStack.push(n)},n._updateCursor=function(e,t=!1){if(this._popCursorVertex(),!this._cursorScreenPoint)return;const i=this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);null==i||t||this._pushCursorVertex(i.vertex,(()=>this.emit("cursor-update",new c.CursorUpdateEvent(this.view,e,this._activeComponent.vertices.length,this.vertices,null!=this._stagedVertex?new _(this._stagedVertex):null))))},n._completeDrawing=function(e){if(this._activePointerId=null,this._popCursorVertex(),this._abortSnapping(),null!=this._snappingManager&&this._snappingManager.doneSnapping(),this.vertices.length<1)return;const t=new c.DrawCompleteEvent(e,this.vertices);this.emit("draw-complete",t),t.defaultPrevented||this._removeViewHandles()},t._createClass(i)}(p),e.MultipointDrawAction=i.__decorate([h.subclass("esri.views.draw.MultipointDrawAction")],e.MultipointDrawAction),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
