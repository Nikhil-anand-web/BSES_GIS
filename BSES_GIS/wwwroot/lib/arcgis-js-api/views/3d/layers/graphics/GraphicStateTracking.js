/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/arrayUtils","../../../../core/handleUtils","../../../../layers/graphics/dehydratedFeatures"],(function(t,i,e,s,a){"use strict";let r=function(){function t(t){this._graphicsCore=t,this._idToState=new Map,this._states=new Set;const i=t.owner.layer&&t.owner.layer.objectIdField;i?(this._getGraphicId=t=>a.getObjectId(t,i),this._getGraphics3DGraphicById=t=>this._graphicsCore.getGraphics3DGraphicByObjectId(t)):(this._getGraphicId=t=>t.uid,this._getGraphics3DGraphicById=t=>this._graphicsCore.getGraphics3DGraphicById(t))}var r=t.prototype;return r.destroy=function(){this._idToState.clear(),this._states.forEach(((t,i)=>this.remove(i)))},r.add=function(t){const i=s.makeHandle((()=>this.remove(t)));if(this._states.has(t))return i;const e=this._getGraphicId(t.graphic),a=this._getGraphics3DGraphicById(e);this._states.has(t)||this._states.add(t);return this._ensureStateList(e).push(t),t.displaying=null!=a&&a.isVisible(),t.isDraped=null!=a&&a.isDraped,t.tracking=!0,null!=a&&t.emit("changed"),i},r.remove=function(t){if(this._states.has(t)){if(this._idToState.size){const i=this._getGraphicId(t.graphic),s=this._idToState.get(i);s&&(e.remove(s,t),0===s.length&&this._idToState.delete(i))}this._states.delete(t),t.tracking=!1,t.displaying=!1}},r.addGraphic=function(t){this._forEachState(t,(i=>{i.displaying=t.isVisible(),i.isDraped=t.isDraped,i.emit("changed")}))},r.removeGraphic=function(t){this._forEachState(t,(t=>{t.displaying=!1,t.isDraped=!1}))},r.updateGraphicGeometry=function(t){this._forEachState(t,(t=>t.emit("changed")))},r.updateGraphicVisibility=function(t){this._forEachState(t,(i=>i.displaying=t.isVisible()))},r.allGraphicsDeleted=function(){this._states.forEach((t=>{t.displaying=!1}))},r._ensureStateList=function(t){const i=this._idToState.get(t);if(i)return i;const e=new Array;return this._idToState.set(t,e),e},r._forEachState=function(t,i){if(0===this._states.size||0===this._idToState.size)return;const e=this._getGraphicId(t.graphic),s=this._idToState.get(e);null!=s&&s.forEach(i)},i._createClass(t)}();t.GraphicStateTracking=r,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
