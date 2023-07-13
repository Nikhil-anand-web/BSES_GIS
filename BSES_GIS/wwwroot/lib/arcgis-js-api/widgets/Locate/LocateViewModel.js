/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../intl","../../PopupTemplate","../../core/Error","../../core/promiseUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../Popup/actions","../support/GeolocationPositioning","../support/geolocationUtils","../../intl/locale","../../intl/messages"],(function(t,e,o,a,r,l,i,c,s,n,p,u,d,h,f,m){"use strict";async function _(){const t=await m.fetchMessageBundle("esri/widgets/Locate/t9n/Locate");return new a({title:t.currentLocation,fieldInfos:[{fieldName:"timestamp",label:t.timestamp,format:{dateFormat:"short-date-short-time"}},{fieldName:"latitude",label:t.latitude,format:{places:4,digitSeparator:!0}},{fieldName:"longitude",label:t.longitude,format:{places:4,digitSeparator:!0}},{fieldName:"accuracy",label:t.accuracy,format:{places:0,digitSeparator:!0}},{fieldName:"altitude",label:t.altitude,format:{places:0,digitSeparator:!0}},{fieldName:"altitudeAccuracy",label:t.altitudeAccuracy,format:{places:0,digitSeparator:!0}},{fieldName:"heading",label:t.heading,format:{places:0,digitSeparator:!0}},{fieldName:"speed",label:t.speed,format:{places:0,digitSeparator:!0}}],actions:[u.removeSelectedFeature.clone()],content:[{type:"fields"}]})}let g=function(e){function o(o){var a;return(a=e.call(this,o)||this)._locateController=null,a.popupEnabled=!0,a.locate=a.locate.bind(t._assertThisInitialized(a)),a}t._inherits(o,e);var a=o.prototype;return a.initialize=function(){this.addHandles([f.onLocaleChange((()=>{const{graphic:t,view:e}=this;if(!t)return;const o=e?.graphics?.includes(t);o&&this._updatePopupTemplate(t)}))])},a.destroy=function(){this.cancelLocate()},a.locate=async function(){if(this.cancelLocate(),"disabled"===this.state)throw new r("locate:disabled-state","Cannot locate when disabled.");if("feature-unsupported"===this.state)throw new r("locate:feature-unsupported-state","Cannot locate in unsecure domain.");const t=new AbortController;this._locateController=t;try{const e=await h.getCurrentPosition(this.geolocationOptions);if(await this.updatePosition(e,t),this._locateController!==t)return null;const{graphic:o}=this;return o&&await this._updatePopupTemplate(o),this._addGraphic(),this.emit("locate",{position:e}),this._locateController=null,e}catch(e){if(l.isAbortError(e))return null;throw t===this._locateController&&(this._locateController=null),this.emit("locate-error",{error:e}),e}},a.cancelLocate=function(){this._clearGraphic(),this._locateController&&this._locateController.abort(),this._locateController=null},a._updatePopupTemplate=async function(t){if(!this.popupEnabled)return;const e=await _(),o=t!==this.graphic;this.destroyed||o||(t.popupTemplate=e)},t._createClass(o,[{key:"state",get:function(){return this._geolocationUsable?this.get("view.ready")?this._locateController?"locating":"ready":"disabled":"feature-unsupported"}}]),o}(d);e.__decorate([i.property()],g.prototype,"_locateController",void 0),e.__decorate([i.property()],g.prototype,"popupEnabled",void 0),e.__decorate([i.property({readOnly:!0})],g.prototype,"state",null),e.__decorate([i.property()],g.prototype,"locate",null),e.__decorate([i.property()],g.prototype,"cancelLocate",null),g=e.__decorate([p.subclass("esri.widgets.Locate.LocateViewModel")],g);return g}));
