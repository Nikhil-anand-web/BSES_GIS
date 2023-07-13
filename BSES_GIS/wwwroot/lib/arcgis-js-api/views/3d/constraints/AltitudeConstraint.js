/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../state/Constraints"],(function(t,e,r,o,s,i,n,a,c,u){"use strict";t.AltitudeConstraint=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).min=u.earthAltitudeConstraint.min,e.max=u.earthAltitudeConstraint.max,e}return e._inherits(r,t),e._createClass(r)}(o),r.__decorate([s.property({type:Number})],t.AltitudeConstraint.prototype,"min",void 0),r.__decorate([s.property({type:Number})],t.AltitudeConstraint.prototype,"max",void 0),t.AltitudeConstraint=r.__decorate([c.subclass("esri.views.3d.constraints.AltitudeConstraint")],t.AltitudeConstraint),Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
