/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Evented","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,a,c,p,s,i){"use strict";e.GraphicState=function(e){function t(r){var t;return(t=e.call(this,r)||this).tracking=!1,t.displaying=!1,t.isDraped=!1,t}return r._inherits(t,e),r._createClass(t)}(o.EventedAccessor),t.__decorate([a.property({constructOnly:!0})],e.GraphicState.prototype,"graphic",void 0),t.__decorate([a.property()],e.GraphicState.prototype,"tracking",void 0),t.__decorate([a.property()],e.GraphicState.prototype,"displaying",void 0),t.__decorate([a.property()],e.GraphicState.prototype,"isDraped",void 0),e.GraphicState=t.__decorate([i.subclass("esri.views.3d.layers.graphics.GraphicState")],e.GraphicState),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));