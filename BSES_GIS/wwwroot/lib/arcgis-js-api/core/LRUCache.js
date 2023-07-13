/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","./MemCache"],(function(t,e,s){"use strict";let i=function(){function t(t,e){this._storage=new s.MemCacheStorage,this.id="",this.name="",this.size=0,this._storage.maxSize=t,this._storage.register(this),e&&this._storage.registerRemoveFunc("",e)}var i=t.prototype;return i.destroy=function(){this._storage.deregister(this),this._storage.destroy()},i.put=function(t,e,s=1){this._storage.put(this,t,e,s,1)},i.pop=function(t){return this._storage.pop(this,t)},i.get=function(t){return this._storage.get(this,t)},i.clear=function(){this._storage.clearAll()},i.resetHitRate=function(){},e._createClass(t,[{key:"maxSize",get:function(){return this._storage.maxSize},set:function(t){this._storage.maxSize=t}}]),t}();t.LRUCache=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
