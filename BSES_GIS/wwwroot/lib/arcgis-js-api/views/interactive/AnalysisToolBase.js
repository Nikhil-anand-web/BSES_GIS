/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./InteractiveToolBase"],(function(e,s,t,a,o,i,r,c,n,l){"use strict";e.AnalysisToolBase=function(e){function t(s){return e.call(this,s)||this}s._inherits(t,e);var o=t.prototype;return o.initialize=function(){this.addHandles(a.watch((()=>this.analysisViewData.visible),(e=>this.visible=e),a.syncAndInitial))},o.deactivate=function(){this.onDeactivate(),this.created||this.analysis.clear()},o.resetCreated=function(){this._set("created",!1)},s._createClass(t)}(l.InteractiveToolBase),t.__decorate([o.property({constructOnly:!0})],e.AnalysisToolBase.prototype,"analysis",void 0),t.__decorate([o.property()],e.AnalysisToolBase.prototype,"analysisViewData",void 0),e.AnalysisToolBase=t.__decorate([n.subclass("esri.views.interactive.AnalysisToolBase")],e.AnalysisToolBase),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
