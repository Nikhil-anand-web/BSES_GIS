/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers"],(function(t,e){"use strict";let s=function(t){function s(){this._store=new Map,this._byteSize=0}var i=s.prototype;return i.set=function(t,e){this.delete(t),this._store.set(t,e),this._byteSize+=e.byteSize},i.delete=function(t){const e=this._store.get(t);return!!this._store.delete(t)&&(null!=e&&(this._byteSize-=e.byteSize),!0)},i.get=function(t){return this._used(t),this._store.get(t)},i.has=function(t){return this._used(t),this._store.has(t)},i.clear=function(){this._store.clear()},i.applyByteSizeLimit=function(t,e){for(const[s,i]of this._store){if(this._byteSize<=t)break;this.delete(s),e(i)}},i.values=function(){return this._store.values()},i[t]=function(){return this._store[Symbol.iterator]()},i._used=function(t){const e=this._store.get(t);e&&(this._store.delete(t),this._store.set(t,e))},e._createClass(s)}(Symbol.iterator);t.FeatureServiceTileCache=s,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
