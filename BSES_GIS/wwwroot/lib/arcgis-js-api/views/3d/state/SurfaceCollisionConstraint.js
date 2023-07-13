/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../camera/intersectionUtils","../camera/constraintUtils/surfaceCollision"],(function(e,t,r,i,a,n,o,s,c,l,u){"use strict";e.SurfaceCollisionConstraint=function(e){function r(t){return e.call(this,t)||this}t._inherits(r,e);var i=r.prototype;return i.initialize=function(){this.addHandles(this.view.basemapTerrain.on("elevation-change",(e=>this._handleElevationChangeEvent(e))))},i._handleElevationChangeEvent=function(e){if(this.view.state.cameraController)return;const t=this.view.state.camera;null!=e.spatialReference&&l.eyeWithinExtent(this.view,t,e.extent,e.spatialReference)&&this._applyToCurrentCamera()},i._applyToCurrentCamera=function(){this.view.state.updateCamera((e=>u.applySurfaceCollisionConstraint(this.view,e,u.Mode.EYE_AND_CENTER)))},t._createClass(r)}(i),r.__decorate([a.property({constructOnly:!0})],e.SurfaceCollisionConstraint.prototype,"view",void 0),e.SurfaceCollisionConstraint=r.__decorate([c.subclass("esri.views.3d.state.ElevationCollisionConstraint")],e.SurfaceCollisionConstraint),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
