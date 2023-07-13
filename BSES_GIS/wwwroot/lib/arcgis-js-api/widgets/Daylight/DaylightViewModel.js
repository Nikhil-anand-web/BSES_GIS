/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/HandleOwner","../../core/handleUtils","../../core/Logger","../../core/maybe","../../core/reactiveUtils","../../core/scheduling","../../core/timeUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../views/SceneView","../../views/3d/environment/SunLighting","../../views/3d/environment/VirtualLighting","../../views/3d/support/earthUtils","./support/daylightUtils","./support/SliderWithDropdownViewModel","../support/DatePickerViewModel","../support/timeWidgetUtils"],(function(t,e,i,n,a,s,l,o,r,h,d,p,g,c,u,y,_,f,m,w,S,D){"use strict";const T="esri.widgets.Daylight.DaylightViewModel";let v=function(e){function i(t){var i;return(i=e.call(this,t)||this).view=null,i.datePickerViewModel=new S,i.timeSliderViewModel=new w.SliderWithDropdownViewModel({min:0,max:1439,values:[0],labelFormatFunction:D.formatSliderLabel,inputFormatFunction:D.formatSliderLabel}),i.lightingUpdateInterval=200,i._oldLighting=null,i.playSpeedMultiplier=1,i._lastTime=null,i._sunrise=null,i._sunset=null,i._cachedLightingDateUTC=new Date(0),i._cachedDisplayUTCOffset=0,i._firstInteraction=!0,i._lastLightingUpdate=0,i._lightingUpdateHandle=null,i}t._inherits(i,e);var a=i.prototype;return a.initialize=function(){this.handles.add([l.when((()=>this.view),(t=>t.when((()=>this._updateLighting()))),l.initial),l.watch((()=>{const t=this._lighting;return"sun"===t?.type?U(t):null}),(t=>this._scheduleLightingUpdate(t))),l.on((()=>this._lighting),"timezone-will-change",(t=>this._timezoneWillChange(t)),{onListenerAdd:()=>this._timezoneWillChange(null)}),l.watch((()=>!0===s.applySome(this.view,(t=>t.stationary))),(()=>{(this.dayPlaying||this.yearPlaying)&&this._updateSunriseAndSunset()}),l.initial),l.watch((()=>{const t=this.timeSliderViewModel;return{vm:t,state:t.state,sliderPosition:this.timeSliderPosition}}),(({vm:t,state:e,sliderPosition:i})=>{"ready"===e&&t.setValue(0,i)})),l.watch((()=>this.timeSliderViewModel?.utcOffset),(t=>{null!=t&&(this.utcOffset=t)})),l.watch((()=>({utcOffset:this.utcOffset,sliderViewModel:this.timeSliderViewModel})),(({utcOffset:t,sliderViewModel:e})=>{e&&(e.utcOffset=t)}),l.syncAndInitial),l.watch((()=>this.timeSliderViewModel.timezonePickerOpen),(()=>this.stopPlaying())),l.watch((()=>this.timeSliderViewModel.values),(t=>this._setTimeSliderPosition(t?.[0]??0,{forceLightingUpdate:!1}))),l.watch((()=>this.datePickerViewModel.value),(t=>{this.dayPlaying=!1,this.localDate=t})),l.watch((()=>this.localDate),(t=>{this.datePickerViewModel.value.valueOf()!==t.getTime()&&this.datePickerViewModel.set("value",t)}))])},a.destroy=function(){this._cancelLightingUpdate(),this.view=null},a._setTimeSliderPosition=function(t,e){Math.abs(t-this.timeSliderPosition)<=1/60||(this.stopPlaying(),this._enableDirectShadowsIfFirstInteraction(),e.forceLightingUpdate&&(this._cancelLightingUpdate(),this._updateLighting()),this._lightingDateDisplay=m.sliderPosToDateTime(this._lightingDateDisplay,t))},a._timezoneFromCamera=function(t,e){if(null==e||!t.cameraTrackingEnabled)return 0;const i=f.positionToTimezoneInfo([e.longitude,e.latitude]);return null==i?0:Math.round(i.hours+i.minutes/60+i.seconds/3600)},a.stopPlaying=function(){this.playingState="none"},a.toggleDayPlaying=function(){this.dayPlaying=!this.dayPlaying},a.toggleYearPlaying=function(){this.yearPlaying=!this.yearPlaying},a.toggleSunLightingEnabled=function(){this.stopPlaying(),this.sunLightingEnabled=!this.sunLightingEnabled},a.toggleDirectShadowsEnabled=function(){this.stopPlaying(),this.directShadowsEnabled=!this.directShadowsEnabled},a._enableDirectShadowsIfFirstInteraction=function(){this._firstInteraction&&(this._firstInteraction=!1,this.directShadowsEnabled=!0)},a._updateLighting=function(t){const e=Date.now();this._lastLightingUpdate=e;const{view:i}=this,n=this._lighting;if(null==i||null==n||"virtual"===n.type)return;t??(t=U(n));const a=n.displayUTCOffset,s=null!==a?a:this._timezoneFromCamera(n,i.camera?.position);this._cachedLightingDateUTC.getTime()!==t.getTime()&&(this._cachedLightingDateUTC=new Date(t.getTime())),this._cachedDisplayUTCOffset!==s&&(this._cachedDisplayUTCOffset=s)},a._timezoneWillChange=function(t){const e=this._lighting;if(null==e||"virtual"===e.type||!e.cameraTrackingEnabled)return;let i;if(t)i=t.timezoneOffset;else{if(null!=e.displayUTCOffset)return;i=y.calculateTimezoneOffset(e.positionTimezoneInfo)}e.displayUTCOffset=i,this._scheduleLightingUpdate()},a._scheduleLightingUpdate=function(t){if(t&&(this._lightingUpdateHandle=s.removeMaybe(this._lightingUpdateHandle),!r.isValidDate(t)))return;if(this._lightingUpdateHandle)return;const e=Date.now()-this._lastLightingUpdate,i=this.lightingUpdateInterval-e;let a=null;const l=()=>{this._updateLighting(t),this._lightingUpdateHandle===a&&(this._lightingUpdateHandle=null)};if(i<=0)this._lightingUpdateHandle=a=o.schedule(l);else{const t=setTimeout(l,i);this._lightingUpdateHandle=a=n.makeHandle((()=>clearTimeout(t)))}},a._cancelLightingUpdate=function(){this._lightingUpdateHandle=s.removeMaybe(this._lightingUpdateHandle)},a._play=function(){const t=this._lighting;if(null==t||!this.sunLightingEnabled||"virtual"===t.type)return;const e=U(t);if(this.dayPlaying||this.yearPlaying){const i=Date.now()-(this._lastTime??0);if(this.dayPlaying){this._lastTime=Date.now();const n=m.calculatePlaySpeed(this._sunrise,this._sunset,e)*this.playSpeedMultiplier/100*i;if(n>0){let i=new Date(e.getTime()+n);const a=t.displayUTCOffset??0;if(((i.getUTCHours()+a)%24+24)%24<((e.getUTCHours()+a)%24+24)%24){const t=864e5;i=new Date(e.getTime()+n-t)}t.date=i}}else{if(i>1e3){this._lastTime=Date.now();const i=(e.getUTCMonth()+1)%12,n=new Date(e.getTime());n.setUTCMonth(i),t.date=n}}requestAnimationFrame((()=>this._play()))}},a._updateSunriseAndSunset=function(){const t=this._lighting;if(null==t||"virtual"===t.type||!this.sunLightingEnabled)return;const e=s.applySome(this.view,(t=>t.camera?.position));if(null==e)return;const{latitude:i,longitude:n}=e,{date:a,displayUTCOffset:l}=t,o=D.getSunriseAndSunsetTimes(a,i,n,l);o&&(this._sunrise=new Date(o.sunrise),this._sunset=new Date(o.sunset))},t._createClass(i,[{key:"isSupported",get:function(){return null==this.view||"3d"===this.view.type}},{key:"utcOffset",get:function(){return this._cachedDisplayUTCOffset},set:function(t){t!==this.utcOffset&&null!=this._lighting&&"virtual"!==this._lighting.type&&(this._lighting.displayUTCOffset=t,this._updateLighting())}},{key:"localDate",get:function(){return r.truncateLocalTime(this._lightingDateDisplay)},set:function(t){r.isValidDate(t)&&t.getTime()!==this.localDate.getTime()&&(this._lightingDateDisplay=r.resetUTCDate(this._lightingDateDisplay,t))}},{key:"timeSliderPosition",get:function(){return m.dateTimeToSliderPos(this._lightingDateDisplay)},set:function(t){this._setTimeSliderPosition(t,{forceLightingUpdate:!0})}},{key:"directShadowsEnabled",get:function(){return s.applySome(this._lighting,(t=>t.directShadowsEnabled))??!1},set:function(t){s.applySome(this._lighting,(e=>{e.directShadowsEnabled=t}))}},{key:"sunLightingEnabled",get:function(){return"sun"===this._lightingType},set:function(t){const e=this._environment;if(t===this._get("sunLightingEnabled")||null==e)return;const i=e.lighting,n=this._oldLighting;this._oldLighting=i;const a={directShadowsEnabled:i.directShadowsEnabled,cameraTrackingEnabled:i.cameraTrackingEnabled},s=t?"sun":"virtual";let l;l=null!=n&&n.type===s?n:t?new y:new _,l.set(a),e.lighting=l,t||(this.timeSliderViewModel.timezonePickerOpen=!1)}},{key:"playingState",set:function(t){this.playingState!==t&&this.sunLightingEnabled&&(this._set("playingState",t),"none"!==t&&(this._updateSunriseAndSunset(),this._lastTime=Date.now(),this._play(),this._enableDirectShadowsIfFirstInteraction()))}},{key:"dayPlaying",get:function(){return"day"===this.playingState},set:function(t){t?this.playingState="day":this.dayPlaying&&(this.playingState="none")}},{key:"yearPlaying",get:function(){return"year"===this.playingState},set:function(t){t?this.playingState="year":this.yearPlaying&&(this.playingState="none")}},{key:"currentSeason",get:function(){return m.getSeasonFromDate(this.localDate,this._currentHemisphere)},set:function(t){this.stopPlaying();const e=m.getNorthernHemisphereSeason(t,this._currentHemisphere);this.localDate=m.getSeasonDate(this.localDate,e,m.Hemisphere.NORTHERN)}},{key:"_currentHemisphere",get:function(){const t=s.applySome(this.view,(t=>t.camera?.position?.latitude));return null==t||t>=0?m.Hemisphere.NORTHERN:m.Hemisphere.SOUTHERN}},{key:"_environment",get:function(){return s.applySome(this.view,(t=>t.environment))}},{key:"_lighting",get:function(){return s.applySome(this._environment,(t=>t.lighting))}},{key:"_lightingType",get:function(){return s.applySome(this._lighting,(t=>t.type))}},{key:"_lightingDateDisplay",get:function(){return r.offsetDate(this._cachedLightingDateUTC,this._cachedDisplayUTCOffset,"hours")},set:function(t){const e=this._lighting;if(null==e||!this.sunLightingEnabled||"virtual"===e.type||!r.isValidDate(t))return;const i=U(e),n=r.offsetDate(t,-this._cachedDisplayUTCOffset,"hours");n.getTime()!==i.getTime()&&(e.date=n,this._updateLighting())}}]),i}(i.HandleOwner);function U(t){return r.isValidDate(t.date)||(a.getLogger(T).warn("Invalid date. Reverting to the current date/time."),t.date=new Date),t.date}e.__decorate([h.property({type:u})],v.prototype,"view",void 0),e.__decorate([h.property({type:S,nonNullable:!0})],v.prototype,"datePickerViewModel",void 0),e.__decorate([h.property({type:w.SliderWithDropdownViewModel,nonNullable:!0})],v.prototype,"timeSliderViewModel",void 0),e.__decorate([h.property()],v.prototype,"isSupported",null),e.__decorate([h.property()],v.prototype,"lightingUpdateInterval",void 0),e.__decorate([h.property()],v.prototype,"utcOffset",null),e.__decorate([h.property()],v.prototype,"localDate",null),e.__decorate([h.property()],v.prototype,"timeSliderPosition",null),e.__decorate([h.property()],v.prototype,"directShadowsEnabled",null),e.__decorate([h.property()],v.prototype,"sunLightingEnabled",null),e.__decorate([h.property({type:["none","day","year"],value:"none"})],v.prototype,"playingState",null),e.__decorate([h.property()],v.prototype,"dayPlaying",null),e.__decorate([h.property()],v.prototype,"yearPlaying",null),e.__decorate([h.property()],v.prototype,"playSpeedMultiplier",void 0),e.__decorate([h.property()],v.prototype,"currentSeason",null),e.__decorate([h.property()],v.prototype,"_lastTime",void 0),e.__decorate([h.property()],v.prototype,"_sunrise",void 0),e.__decorate([h.property()],v.prototype,"_sunset",void 0),e.__decorate([h.property()],v.prototype,"_cachedLightingDateUTC",void 0),e.__decorate([h.property()],v.prototype,"_cachedDisplayUTCOffset",void 0),e.__decorate([h.property()],v.prototype,"_firstInteraction",void 0),e.__decorate([h.property()],v.prototype,"_currentHemisphere",null),e.__decorate([h.property()],v.prototype,"_environment",null),e.__decorate([h.property()],v.prototype,"_lighting",null),e.__decorate([h.property()],v.prototype,"_lightingType",null),e.__decorate([h.property()],v.prototype,"_lightingDateDisplay",null),v=e.__decorate([c.subclass(T)],v);return v}));