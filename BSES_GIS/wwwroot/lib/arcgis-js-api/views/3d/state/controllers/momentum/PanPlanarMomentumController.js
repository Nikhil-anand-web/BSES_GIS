/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/accessorSupport/decorators/property","../../../../../core/accessorSupport/ensureType","../../../../../core/arrayUtils","../../../../../core/has","../../../../../core/accessorSupport/decorators/subclass","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../camera/constraintUtils/InteractionType","./MomentumController"],(function(t,e,r,n,o,a,s,c,l,i,u,m){"use strict";t.PanPlanarMomentumController=function(t){function r(e){var r;return(r=t.call(this,e)||this).interactionType=u.InteractionType.PAN,r._tmpPan=i.create(),r}return e._inherits(r,t),r.prototype.momentumStep=function(t,e){const r=this.momentum.value(t);l.scale(this._tmpPan,this.momentum.direction,r),e.eye=l.subtract(p,e.eye,this._tmpPan),e.center=l.subtract(p,e.center,this._tmpPan),this.constraintOptions.interactionDirection=this._tmpPan},e._createClass(r)}(m.MomentumController),r.__decorate([n.property({constructOnly:!0})],t.PanPlanarMomentumController.prototype,"momentum",void 0),t.PanPlanarMomentumController=r.__decorate([c.subclass("esri.views.3d.state.controllers.momentum.PanPlanarMomentumController")],t.PanPlanarMomentumController);const p=i.create();Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
