/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass"],(function(e,t,s,i,r,o,n,l,a){"use strict";e.LineOfSightAnalysisResult=function(e){function s(t){var s;return(s=e.call(this,t)||this).target=null,s.intersectedGraphic=null,s.intersectedLocation=null,s.elevationAlignedTargetLocation=null,s.visible=void 0,s}return t._inherits(s,e),t._createClass(s)}(i),s.__decorate([r.property()],e.LineOfSightAnalysisResult.prototype,"target",void 0),s.__decorate([r.property()],e.LineOfSightAnalysisResult.prototype,"intersectedGraphic",void 0),s.__decorate([r.property()],e.LineOfSightAnalysisResult.prototype,"intersectedLocation",void 0),s.__decorate([r.property()],e.LineOfSightAnalysisResult.prototype,"elevationAlignedTargetLocation",void 0),s.__decorate([r.property({type:Boolean})],e.LineOfSightAnalysisResult.prototype,"visible",void 0),e.LineOfSightAnalysisResult=s.__decorate([a.subclass("esri.views.3d.analysis.LineOfSightAnalysisResult")],e.LineOfSightAnalysisResult),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));