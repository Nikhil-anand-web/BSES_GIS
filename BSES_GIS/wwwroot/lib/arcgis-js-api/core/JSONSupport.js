/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","./Accessor","./maybe","./accessorSupport/DefaultsStore","./accessorSupport/defaultsStoreUtils","./accessorSupport/read","./accessorSupport/utils","./accessorSupport/write","./accessorSupport/decorators/subclass"],(function(t,r,e,s,o,u,n,i,c,a,p){"use strict";const l=t=>{let s=function(t){function e(...e){var s;s=t.call(this,...e)||this;const i=o.assumeNonNull(c.getProperties(r._assertThisInitialized(s))),a=i.store,p=new u.DefaultsStore;return i.store=p,n.setupConstructedDefaults(i,a,p),s}r._inherits(e,t);var s=e.prototype;return s.read=function(t,r){i.read(this,t,r)},s.write=function(t,r){return a.write(this,t??{},r)},s.toJSON=function(t){return this.write({},t)},e.fromJSON=function(t,r){return S.call(this,t,r)},r._createClass(e)}(t);return s=e.__decorate([p.subclass("esri.core.JSONSupport")],s),s.prototype.toJSON.isDefaultToJSON=!0,s};function S(t,r){if(!t)return null;if(t.declaredClass)throw new Error("JSON object is already hydrated");const e=new this;return e.read(t,r),e}function f(t){return t&&"read"in t&&"write"in t&&"toJSON"in t}t.JSONSupport=function(t){function e(){return t.apply(this,arguments)||this}return r._inherits(e,t),r._createClass(e)}(l(s)),t.JSONSupport=e.__decorate([p.subclass("esri.core.JSONSupport")],t.JSONSupport),t.JSONSupportMixin=l,t.isJSONSupport=f,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));