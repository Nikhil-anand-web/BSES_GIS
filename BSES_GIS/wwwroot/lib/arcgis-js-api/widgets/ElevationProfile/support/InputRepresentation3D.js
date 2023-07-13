/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/asyncUtils","../../../core/handleUtils","../../../core/maybe","../../../core/promiseUtils","../../../core/reactiveUtils","../../../support/elevationInfoUtils","../../../views/3d/interactive/editingTools/settings","../../../views/3d/interactive/visualElements/OutlineVisualElement","../../../views/3d/layers/graphics/GraphicState","../../../views/3d/webgl-engine/lib/Material","../../../views/support/layerViewUtils"],(function(e,t,i,l,n,a,s,r,h,o,c,u,g){"use strict";let d=function(){function e(e){this._params=e,this._highlightTask=null,this._highlightHandle=null,this._visualElementHandle=null}var d=e.prototype;return d.destroy=function(){this.remove()},d.remove=function(){this._highlightTask=n.abortMaybe(this._highlightTask),this._highlightHandle=n.removeMaybe(this._highlightHandle),this._visualElementHandle=n.removeMaybe(this._visualElementHandle)},d.showHighlight=function(e){if(this.remove(),null==e||!p(e))return;const t=e.layer;this._highlightTask=i.createTask((async i=>{const l=await this._params.view.whenLayerView(t);a.throwIfAborted(i),g.highlightsSupported(l)&&(this._highlightHandle=l.highlight(e))}))},d.showReshaping=function(e){if(this.remove(),null==e)return;const t=this._params.view,i=new o.OutlineVisualElement({view:t,geometry:p(e)?e.geometry:null,attached:!1,elevationInfo:r.getGraphicEffectiveElevationInfo(e),renderOccluded:u.RenderOccludedFlag.OccludeAndTransparentStencil}),n=new c.GraphicState({graphic:e}),a=[s.watch((()=>n.isDraped),(e=>{i.isDraped=e})),n.on("changed",(()=>{i.geometry=p(e)?e.geometry:null})),t.trackGraphicState(n),t.maskOccludee(e),l.destroyHandle(i)];h.getSettings(t).visualElements.lineGraphics.outline.apply(i),i.attached=!0,this._visualElementHandle=l.handlesGroup(a)},t._createClass(e)}();function p(e){return null!=e.geometry&&"polyline"===e.geometry.type}e.InputRepresentation3D=d,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
