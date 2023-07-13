/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],(function(e,t){"use strict";let i=function(){function e(e,t,i){this._editGeometry=e,this._vertices=t,this.operation=i,this._undone=!1}var i=e.prototype;return i.apply=function(){this._vertices.forEach((e=>this.operation.apply(e))),this._editGeometry.components.forEach((e=>e.unnormalizeVertexPositions())),this._editGeometry.notifyChanges({operation:this._undone?"redo":"apply",updatedVertices:this._vertices})},i.undo=function(){this._vertices.forEach((e=>this.operation.undo(e))),this._editGeometry.notifyChanges({operation:"undo",updatedVertices:this._vertices}),this._undone=!0},i.canAccumulate=function(e){if(this._undone||e._vertices.length!==this._vertices.length)return!1;for(let t=0;t<e._vertices.length;++t)if(e._vertices[t]!==this._vertices[t])return!1;return this.operation.canAccumulate(e.operation)},i.accumulate=function(t){return!!(t instanceof e&&this.canAccumulate(t))&&(this._vertices.forEach((e=>this.operation.accumulate(e,t.operation))),this.operation.accumulateParams(t.operation),this._editGeometry.components.forEach((e=>e.unnormalizeVertexPositions())),this._editGeometry.notifyChanges({operation:"apply",updatedVertices:this._vertices}),!0)},t._createClass(e)}();var o;e.AccumulationType=void 0,(o=e.AccumulationType||(e.AccumulationType={}))[o.CUMULATIVE=0]="CUMULATIVE",o[o.REPLACE=1]="REPLACE",e.UpdateVertices=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));