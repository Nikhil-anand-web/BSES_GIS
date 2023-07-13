/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../EditGeometry"],(function(e,t,i){"use strict";let r=function(){function e(e,t,i){this._editGeometry=e,this._edge=t,this._t=i,this.createdVertex=null,this._left=null,this._right=null}var r=e.prototype;return r.apply=function(){let e="redo";const t=this._edge,r=t.component,s=t.leftVertex,d=t.rightVertex;r.edges.splice(r.edges.indexOf(t),1),null==this.createdVertex&&(e="apply",this.createdVertex=new i.Vertex(t.component)),r.vertices.push(this.createdVertex),this.createdVertex.pos=this._editGeometry.coordinateHelper.lerp(t.leftVertex.pos,t.rightVertex.pos,this._t,this._editGeometry.coordinateHelper.createVector()),null==this._left&&(this._left=new i.Edge(r,s,this.createdVertex)),this._left.leftVertex.leftEdge?r.edges.push(this._left):r.edges.unshift(this._left),s.rightEdge=this._left,null==this._right&&(this._right=new i.Edge(r,this.createdVertex,d)),r.edges.push(this._right),d.leftEdge=this._right,r.updateVertexIndex(this.createdVertex,s.index+1),this._editGeometry.notifyChanges({operation:e,addedVertices:[this.createdVertex]})},r.undo=function(){if(null==this.createdVertex||null==this._left||null==this._right)return null;const e=this._edge,t=e.component,i=this.createdVertex.leftEdge,r=this.createdVertex.rightEdge,s=i?.leftVertex,d=r?.rightVertex;t.vertices.splice(t.vertices.indexOf(this.createdVertex),1),t.edges.splice(t.edges.indexOf(this._left),1),t.edges.splice(t.edges.indexOf(this._right),1),this._edge.leftVertex.leftEdge?t.edges.push(this._edge):t.edges.unshift(this._edge),s&&(s.rightEdge=e),d&&(d.leftEdge=e),s&&t.updateVertexIndex(s,s.index),this._editGeometry.notifyChanges({operation:"undo",removedVertices:[this.createdVertex]})},r.accumulate=function(){return!1},t._createClass(e)}();e.SplitEdge=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));