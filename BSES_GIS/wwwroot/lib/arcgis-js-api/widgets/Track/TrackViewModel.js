/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/promiseUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../support/GeolocationPositioning"],(function(t,i,o,r,e,n,s,a,c){"use strict";const l=15e3,h="esri.widgets.Track.TrackViewModel";let p=function(i){function r(t){var o;return(o=i.call(this,t)||this)._watchId=void 0,o._trackStartingTimeoutId=void 0,o._settingPosition=null,o._trackController=null,o.positionFilterFunction=null,o}t._inherits(r,i);var e=r.prototype;return e.destroy=function(){this._stopTracking()},e.start=function(){"disabled"!==this.state&&"feature-unsupported"!==this.state&&this._startTracking()},e.stop=function(){"disabled"!==this.state&&"feature-unsupported"!==this.state&&this._stopTracking()},e._stopWatchingPosition=function(){void 0!==this._watchId&&(navigator.geolocation.clearWatch(this._watchId),this._watchId=void 0)},e._stopTracking=function(){this._abortTrack(),this._clearWaitingTimer(),this._stopWatchingPosition(),this._clearGraphic()},e._startTracking=function(){this._stopTracking();const t=o.debounce((async t=>{this._abortTrack();const i=new AbortController;this._trackController=i;const{timestamp:r,coords:e}=t,n={timestamp:r,coords:{...e}};try{if("function"==typeof this.positionFilterFunction&&!this.positionFilterFunction.call(null,{position:n}))return;if(await this.updatePosition(t,i),this._trackController!==i)return;this._clearWaitingTimer(),this._addGraphic(),this.emit("track",{position:t}),this._trackController=null}catch(s){if(o.isAbortError(s))return;throw this._trackController=null,this._emitError(s),this._clearWaitingTimer(),s}}),0);this._watchId=navigator.geolocation.watchPosition((i=>{this._settingPosition=t(i).catch(o.ignoreAbortErrors)}),this._handleWatchPositionError.bind(this),this.geolocationOptions??void 0),this._trackStartingTimeoutId=setTimeout((()=>{this._trackStartingTimeoutId=void 0}),l)},e._handleWatchPositionError=function(t){t.code===t.PERMISSION_DENIED&&this._stopTracking(),this._emitError(t)},e._abortTrack=function(){this._trackController?.abort(),this._trackController=null},e._clearWaitingTimer=function(){clearTimeout(this._trackStartingTimeoutId),this._trackStartingTimeoutId=void 0,this._settingPosition=null},e._emitError=function(t){this.emit("track-error",{error:t})},t._createClass(r,[{key:"state",get:function(){return this._geolocationUsable?this.view&&!this.view.ready?"disabled":this._settingPosition||void 0!==this._trackStartingTimeoutId?"waiting":this.tracking?"tracking":"ready":"feature-unsupported"}},{key:"tracking",get:function(){return void 0!==this._watchId}}]),r}(c);i.__decorate([r.property()],p.prototype,"_watchId",void 0),i.__decorate([r.property()],p.prototype,"_trackStartingTimeoutId",void 0),i.__decorate([r.property()],p.prototype,"_settingPosition",void 0),i.__decorate([r.property()],p.prototype,"positionFilterFunction",void 0),i.__decorate([r.property({readOnly:!0})],p.prototype,"state",null),i.__decorate([r.property({readOnly:!0})],p.prototype,"tracking",null),i.__decorate([r.property()],p.prototype,"start",null),i.__decorate([r.property()],p.prototype,"stop",null),p=i.__decorate([a.subclass(h)],p);return p}));
