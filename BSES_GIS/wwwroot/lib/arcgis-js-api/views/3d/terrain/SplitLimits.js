/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass"],(function(t,e,i,r,o,p,s,a,c){"use strict";t.SplitLimits=function(t){function i(){var e;return(e=t.apply(this,arguments)||this).fovX=0,e.fovY=0,e.relativeWidthLimit=0,e.relativeHeightLimit=0,e.maxLod=0,e.angledSplitBias=0,e.aboveGround=!0,e}return e._inherits(i,t),e._createClass(i)}(r),i.__decorate([o.property()],t.SplitLimits.prototype,"fovX",void 0),i.__decorate([o.property()],t.SplitLimits.prototype,"fovY",void 0),i.__decorate([o.property()],t.SplitLimits.prototype,"relativeWidthLimit",void 0),i.__decorate([o.property()],t.SplitLimits.prototype,"relativeHeightLimit",void 0),i.__decorate([o.property()],t.SplitLimits.prototype,"maxLod",void 0),i.__decorate([o.property()],t.SplitLimits.prototype,"angledSplitBias",void 0),i.__decorate([o.property()],t.SplitLimits.prototype,"aboveGround",void 0),i.__decorate([o.property()],t.SplitLimits.prototype,"frustum",void 0),t.SplitLimits=i.__decorate([c.subclass("esri.views.3d.terrain.SplitLimits")],t.SplitLimits),Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));