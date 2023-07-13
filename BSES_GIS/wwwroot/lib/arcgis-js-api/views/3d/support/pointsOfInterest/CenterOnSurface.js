/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/mathUtils","../../../../core/maybe","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/ellipsoidUtils","../../../../geometry/Point","../../../../geometry/projection","../../../../geometry/support/aaBoundingRect","../debugFlags","../PropertiesPool","./PointOfInterest","../../../support/Scheduler"],(function(e,t,r,i,a,n,s,o,c,u,l,d,p,f,h,_,y,S,g,A){"use strict";const m=Array;e.CenterOnSurface=function(e){function r(r){var i;return(i=e.call(this,r)||this)._propertiesPool=new S.PropertiesPool({location:f,renderLocation:m},t._assertThisInitialized(i)),i._currentSurfaceAltitude=0,i._latestSurfaceAltitude=0,i.distance=0,i.renderLocation=d.create(),i.updating=!1,i}t._inherits(r,e);var n=r.prototype;return n.initialize=function(){this._frameWorker=this.scheduler.registerTask(this.task,this),this.runTask()},n.destroy=function(){this._frameWorker=a.removeMaybe(this._frameWorker),this._propertiesPool=a.destroyMaybe(this._propertiesPool)},n.updateRenderLocation=function(){this.updating=!0,this._updateRenderLocation()},n.runTask=function(){return this._latestSurfaceAltitude=this.estimateSurfaceAltitudeAtCenter(),this._updateRenderLocation(),this.updating=!1,A.Task.YIELD},n._updateRenderLocation=function(){const e=O;let t=this._calculateSurfaceIntersection(this._currentSurfaceAltitude,e);const r=this._currentSurfaceAltitude!==this._latestSurfaceAltitude;!t&&r&&(t=this._calculateSurfaceIntersection(this._latestSurfaceAltitude,e),t&&(this._currentSurfaceAltitude=this._latestSurfaceAltitude));const i=k;t&&this._latestSurfaceAltitudeChangesDistanceSignificantly(e,i)&&(l.copy(e,i),this._currentSurfaceAltitude=this._latestSurfaceAltitude),t?this.distance=l.distance(this._camera.eye,e):(l.scale(e,this._camera.viewForward,this._get("distance")),l.add(e,e,this._camera.eye)),l.exactEquals(this._get("renderLocation"),e)||this._set("renderLocation",l.copy(this._propertiesPool.get("renderLocation"),e))},n._calculateSurfaceIntersection=function(e,t){const r=this._camera;if(!this.renderCoordsHelper.intersectManifold(r.ray,e,t))return!1;if(this.state.isGlobal){const i=p.getReferenceEllipsoid(this.renderCoordsHelper.spatialReference).radius,a=i+e,n=l.squaredLength(r.eye),s=n<a*a,o=l.distance(r.eye,t);if(s&&o>i/4){const e=a-Math.sqrt(n);return l.scale(t,r.viewForward,e),l.add(t,t,r.eye),!0}}else{const e=this.surface?.ready?this.surface.extent:null;null!=e&&h.projectBoundingRect(e,this.surface?.spatialReference,v,this.renderCoordsHelper.spatialReference)&&(t[0]=i.clamp(t[0],v[0],v[2]),t[1]=i.clamp(t[1],v[1],v[3]))}return!0},n._latestSurfaceAltitudeChangesDistanceSignificantly=function(e,t){if(this._latestSurfaceAltitude===this._currentSurfaceAltitude||null==e)return!1;if(this._calculateSurfaceIntersection(this._latestSurfaceAltitude,t)){if(y.TESTS_DISABLE_OPTIMIZATIONS)return!0;const r=this._camera.eye,i=l.distance(r,e),a=l.distance(r,t);if(Math.abs(a-i)/i>C)return!0}return!1},t._createClass(r,[{key:"_camera",get:function(){return this.state.contentCamera}},{key:"location",get:function(){const e=this._propertiesPool.get("location");return this.renderCoordsHelper.fromRenderCoords(this.renderLocation,e,this.state.spatialReference),e}},{key:"estimatedSurfaceAltitude",get:function(){return this._latestSurfaceAltitude}},{key:"running",get:function(){return this.updating}}]),r}(g.PointOfInterest),r.__decorate([n.property({constructOnly:!0})],e.CenterOnSurface.prototype,"scheduler",void 0),r.__decorate([n.property({constructOnly:!0})],e.CenterOnSurface.prototype,"task",void 0),r.__decorate([n.property()],e.CenterOnSurface.prototype,"distance",void 0),r.__decorate([n.property({constructOnly:!0})],e.CenterOnSurface.prototype,"estimateSurfaceAltitudeAtCenter",void 0),r.__decorate([n.property({readOnly:!0})],e.CenterOnSurface.prototype,"location",null),r.__decorate([n.property({readOnly:!0})],e.CenterOnSurface.prototype,"renderLocation",void 0),r.__decorate([n.property()],e.CenterOnSurface.prototype,"updating",void 0),e.CenterOnSurface=r.__decorate([u.subclass("esri.views.3d.support.CenterOnSurface")],e.CenterOnSurface);const C=.05,O=d.create(),k=d.create(),v=_.create();Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));