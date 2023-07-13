/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../Color","../../../../core/Accessor","../../../../core/Handles","../../../../core/maybe","../../../../core/reactiveUtils","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/mat4","../../../../chunks/vec3","../../../../chunks/vec4f64","../../../../geometry/support/vectorStacks","./settings","./sliceToolConfig","./sliceToolUtils","../../webgl-engine/materials/lineStippleUtils"],(function(e,i,t,l,s,a,n,o,r,u,c,d,p,h,_,V,m,y,v,g,E){"use strict";e.SliceVisualization=function(e){function t(i){var t;return(t=e.call(this,i)||this)._handles=new a,t._gridVisualElement=null,t._outlineVisualElement=null,t.showGrid=!1,t.preview=!0,t}i._inherits(t,e);var s=t.prototype;return s.initialize=function(){const e=this.analysisViewData;if(null==e)throw new Error("expected internal object to be valid");this._gridVisualElement=g.createGridVisualElement(this.view),this._outlineVisualElement=g.createOutlineVisualElement(this.view),this._handles.add([o.watch((()=>({visible:null!=e.plane&&this.analysisViewData.visible,active:this.analysisViewData.active,preview:this.preview,showGrid:this.showGrid})),(e=>this._updateMaterials(e)),o.syncAndInitial),o.watch((()=>e.plane),(e=>this._updatePlane(e)),o.syncAndInitial)],"internal")},s.destroy=function(){this._handles.destroy(),this._gridVisualElement=n.destroyMaybe(this._gridVisualElement),this._outlineVisualElement=n.destroyMaybe(this._outlineVisualElement),this.set("view",null)},s._updatePlane=function(e){if(null==e)return;this._gridVisualElement.attached=!0,this._outlineVisualElement.attached=!0;const i=_.set(m.sv3d.get(),_.length(e.basis1),_.length(e.basis2),1),t=h.fromScaling(m.sm4d.get(),i),l=g.calculateBoundedPlaneTranslateRotate(e,m.sm4d.get()),s=h.multiply(t,l,t);this._outlineVisualElement.transform=s,this._gridVisualElement.transform=s},s._updateMaterials=function({visible:e,active:i,preview:t,showGrid:s}){this._outlineVisualElement.color=l.toUnitRGBA(y.settings.plane.outlineColor),this._outlineVisualElement.width=t?v.PLANE_PREVIEW_OUTLINE_WIDTH:v.PLANE_OUTLINE_WIDTH,this._outlineVisualElement.stipplePattern=i?null:E.createStipplePatternSimple(5),this._gridVisualElement.backgroundColor=l.toUnitRGBA(y.settings.plane.color),this._gridVisualElement.gridColor=s?l.toUnitRGBA(y.settings.plane.gridColor):V.ZEROS,this._gridVisualElement.visible=e,this._outlineVisualElement.visible=e},i._createClass(t)}(s),t.__decorate([r.property()],e.SliceVisualization.prototype,"view",void 0),t.__decorate([r.property()],e.SliceVisualization.prototype,"analysis",void 0),t.__decorate([r.property()],e.SliceVisualization.prototype,"analysisViewData",void 0),t.__decorate([r.property()],e.SliceVisualization.prototype,"showGrid",void 0),t.__decorate([r.property()],e.SliceVisualization.prototype,"preview",void 0),e.SliceVisualization=t.__decorate([p.subclass("esri.views.3d.analysis.Slice.SliceVisualization")],e.SliceVisualization),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));