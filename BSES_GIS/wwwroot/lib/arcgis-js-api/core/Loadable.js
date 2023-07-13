/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","./Error","./maybe","./Promise","./promiseUtils","./Warning","./accessorSupport/decorators/property","./accessorSupport/decorators/subclass"],(function(o,r,e,t,l,n,a,s,d){"use strict";const i="not-loaded",c="loading",u="failed",_="loaded",p=l=>{let p=function(r){function l(...t){var l;return(l=r.call(this,...t)||this)._loadController=null,l.loadError=null,l.loadStatus="not-loaded",l._set("loadWarnings",[]),l.addResolvingPromise(new Promise((r=>{const t=l.load.bind(o._assertThisInitialized(l));l.load=a=>{const s=new Promise(((r,t)=>{const s=n.onAbortOrThrow(a,t);l.destroyed&&t(new e("load:instance-destroyed",`Instance of '${l.declaredClass||l.constructor.name}' is already destroyed`,{instance:o._assertThisInitialized(l)})),l.when(r,t).finally((()=>{s&&s.remove()}))}));if(l.loadStatus===i){l._set("loadStatus",c);const o=l._loadController=new AbortController;t({signal:o.signal}),n.onAbort(o.signal,(()=>{l._promiseProps.abort()}))}return r(),s}}))),l.when((()=>{l._set("loadStatus",_),l._loadController=null}),(o=>{l._set("loadStatus",u),l._set("loadError",o),l._loadController=null})),l}o._inherits(l,r);var a=l.prototype;return a.destroy=function(){this._loadController=t.abortMaybe(this._loadController),this._set("loadError",null),this._set("loadWarnings",[])},a.load=function(){return null},a.cancelLoad=function(){return this.isFulfilled()||(this._set("loadError",new e("load:cancelled","Cancelled")),this._loadController?.abort()),this},o._createClass(l,[{key:"loaded",get:function(){return this.loadStatus===_}},{key:"loadWarnings",get:function(){return this._get("loadWarnings")}}]),l}(l);return r.__decorate([s.property({readOnly:!0})],p.prototype,"loaded",null),r.__decorate([s.property({readOnly:!0})],p.prototype,"loadError",void 0),r.__decorate([s.property({clonable:!1})],p.prototype,"loadStatus",void 0),r.__decorate([s.property({type:[a],readOnly:!0})],p.prototype,"loadWarnings",null),p=r.__decorate([d.subclass("esri.core.Loadable")],p),p};let y=function(r){function e(){return r.apply(this,arguments)||this}return o._inherits(e,r),o._createClass(e)}(p(l.EsriPromise));y=r.__decorate([d.subclass("esri.core.Loadable")],y),function(o){function r(o){return!(!o||!o.load)}o.LoadableMixin=p,o.isLoadable=r}(y||(y={}));return y}));