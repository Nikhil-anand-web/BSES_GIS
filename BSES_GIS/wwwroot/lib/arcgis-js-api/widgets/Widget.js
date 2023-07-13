/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../intl","../core/domUtils","../core/Evented","../core/events","../core/Handles","../core/has","../core/lang","../core/Logger","../core/maybe","../core/Promise","../core/promiseUtils","../core/reactiveUtils","../core/uuid","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/cast","../core/accessorSupport/decorators/subclass","../core/accessorSupport/tracking","../core/accessorSupport/tracking/SimpleTrackingTarget","../libs/maquette-advanced-projector/projector","./support/componentsUtils","./support/jsxWidgetSupport","./support/symbols","./support/tests","./support/vnodeCache","./support/widgetUtils","../intl/locale","../intl/messages"],(function(e,t,r,o,n,s,i,a,c,d,l,p,u,h,_,y,g,f,v,m,b,w,k,T,C,I,S,E,R){"use strict";var j;const N="esri.widgets.Widget";let P=0;const L={widgetIcon:"esri-icon-checkbox-unchecked"};function z(e,t){for(const r in t)null!=e[r]&&("object"==typeof e[r]&&"object"==typeof t[r]?z(e[r],t?.[r]):e[r]=t[r]);return e}const A=b.createAdvancedProjector({postProcessProjectionOptions(e){const t=e.eventHandlerInterceptor,r=/capture$/i;e.eventHandlerInterceptor=(e,o,n,s)=>{const i=t?.(e,o,n,s),a=r.test(e);if(!((e=e.replace(r,"")).toLowerCase()in n)||a){const t=e[2].toLowerCase()+e.slice(3),r=e=>i?.call(n,e);n.addEventListener(t,r,a);const o=()=>n.removeEventListener(t,r,a),c=s.afterRemoved;s.afterRemoved=e=>{c?.(e),o()}}return i}},handleInterceptedEvent(e,t,r,o){const{eventPhase:n,type:s}=o,i=n===Event.CAPTURING_PHASE;let a=`on${s}${i?"capture":""}`;const c=t.properties;(c&&a in c||(a=`on${s[0].toUpperCase()}${s.slice(1)}${i?"Capture":""}`,c&&a in c))&&(I.clearVNodeCache(),e.scheduleRender(),c[a].call(c.bind||r,o))}});let H=!1,U=function(t,r){function n(r,o){var n;(n=t.call(this,r,o)||this)._attached=!1,n._internalHandles=new i,n._projector=A,n._readyForTrueRender=!1,n.iconClass=L.widgetIcon,n.icon=null,n.key=e._assertThisInitialized(n),n._loadLocale=u.debounce((async()=>{if(n._messageBundleProps&&n._messageBundleProps.length){const t=await u.eachAlways(n._messageBundleProps.map((async({bundlePath:e,propertyName:t})=>{if(n.destroyed)return;let r=await R.fetchMessageBundle(e);n.uiStrings&&Object.keys(n.uiStrings)&&(r=z(c.clone(r),n.uiStrings)),n[t]=r})));if(n.destroyed)return;for(const r of t)r.error&&d.getLogger(e._assertThisInitialized(n)).error("widget-intl:locale-error",n.declaredClass,r.error)}await n.loadLocale()})),w.commitAssetPath();const s="esri-widget-uid-"+_.generateUUID(),a=n.render.bind(e._assertThisInitialized(n));n._trackingTarget=new m.SimpleTrackingTarget((()=>n.scheduleRender()));const l=()=>{if(!n._readyForTrueRender||n.destroyed)return null;const t=a();let{properties:r}=t;r||(t.properties=r={});const{key:o}=r;o||(r.key=s),n.visible?r.styles||(r.styles={}):(r.class="",r.styles={display:"none"}),r.styles.display||(r.styles.display="");let i=0;return t.children?.forEach((e=>{if(k.isWidgetConstructor(e.vnodeSelector))return;let{properties:t}=e;t||(e.properties=t={}),t.key||(t.key=`${n.id}--${i++}`)})),k.processWidgets(e._assertThisInitialized(n),t)};return n.render=()=>{if(H)return l();let t=I.getVNodeCache(e._assertThisInitialized(n))??null;if(t)return t;n._trackingTarget.clear(),H=!0;try{t=v.runTracked(n._trackingTarget,l)}catch(r){throw console.error(r),r}finally{H=!1}return t&&I.setVNodeCache(e._assertThisInitialized(n),t),t},n.addResolvingPromise(n._resourcesFetch=n.beforeFirstRender().then((()=>{n._readyForTrueRender=!0,n._postInitialize()}))),C.registerLoading(n._resourcesFetch),n}e._inherits(n,t);var a=n.prototype;return a.normalizeCtorArgs=function(e,t){const r={...e};return t&&(r.container=t),r},a.postInitialize=function(){},a.beforeFirstRender=function(){return Promise.all([this.loadDependencies(),this._loadLocale()]).then((()=>{})).catch(u.throwIfNotAbortError)},a.loadDependencies=async function(){},a.loadLocale=async function(){},a.destroy=function(){this.destroyed||(l.destroyMaybe(this._trackingTarget),l.destroyMaybe(this.viewModel),this._detach(this.container),this._set("container",null),this._internalHandles.destroy(),this._emitter.clear(),this.render=()=>null,this._projector=null,I.deleteVNodeCache(this))},a.castContainer=function(e){return o.byId(e)},a.render=function(){throw new Error("not implemented")},a.scheduleRender=function(){this.destroyed||(I.deleteVNodeCache(this),this._projector.scheduleRender())},a.classes=function(...e){return S.classes.apply(this,e)},a.renderNow=function(){I.deleteVNodeCache(this),this._projector.renderNow()},a._postInitialize=function(){if(this.destroyed)return;this.scheduleRender(),this._delegatedEventNames?.length&&this._internalHandles.add(h.watch((()=>this.viewModel),((e,t)=>{t&&this._internalHandles.remove("delegated-events"),e&&s.isEventTarget(e)&&this._internalHandles.add(this._delegatedEventNames.map((t=>s.on(e,t,(e=>{this.emit(t,e)})))),"delegated-events")}),h.initial)),this.postInitialize();const e=async()=>{await this._loadLocale().catch(u.throwIfNotAbortError),this.scheduleRender()};this._internalHandles.add([E.onLocaleChange(e),h.watch((()=>this.uiStrings),e),h.when((()=>this.container),(e=>{this.destroyed||this._attach(e)}),{initial:!0,once:!0})])},a._attach=function(e){e&&(this._projector.merge(e,this.render),this._attached=!0)},a._detach=function(e){this._attached&&(this._projector.detach(this.render),this._attached=!1),e?.parentNode?.removeChild(e)},e._createClass(n,[{key:"container",set:function(e){this._get("container")||this._set("container",e)}},{key:"domNode",get:function(){return this.container},set:function(e){this.container=e}},{key:"id",get:function(){return this._get("id")||this.get("container.id")||Date.now().toString(16)+"-widget-"+P++},set:function(e){e&&this._set("id",e)}},{key:"label",get:function(){return this.declaredClass.split(".").pop()},set:function(e){this._overrideIfSome("label",e)}},{key:"renderable",get:function(){return this._resourcesFetch}},{key:"visible",get:function(){return this._get("visible")},set:function(e){this._set("visible",e)}},{key:r,get:function(){return{projector:this._projector}}}]),n}(p.EsriPromiseMixin(n.EventedAccessor),(j=T.WIDGET_SYMBOL,T.WIDGET_TEST_DATA_SYMBOL));U[j]=!0,t.__decorate([y.property()],U.prototype,"_readyForTrueRender",void 0),t.__decorate([y.property({value:null})],U.prototype,"container",null),t.__decorate([g.cast("container")],U.prototype,"castContainer",null),t.__decorate([y.property()],U.prototype,"iconClass",void 0),t.__decorate([y.property()],U.prototype,"icon",void 0),t.__decorate([y.property()],U.prototype,"id",null),t.__decorate([y.property()],U.prototype,"label",null),t.__decorate([y.property()],U.prototype,"renderable",null),t.__decorate([y.property()],U.prototype,"uiStrings",void 0),t.__decorate([y.property()],U.prototype,"viewModel",void 0),t.__decorate([y.property({value:!0})],U.prototype,"visible",null),t.__decorate([y.property()],U.prototype,"key",void 0),t.__decorate([y.property()],U.prototype,"children",void 0),t.__decorate([y.property()],U.prototype,"afterCreate",void 0),t.__decorate([y.property()],U.prototype,"afterUpdate",void 0),t.__decorate([y.property()],U.prototype,"afterRemoved",void 0),U=t.__decorate([f.subclass(N)],U);return U}));