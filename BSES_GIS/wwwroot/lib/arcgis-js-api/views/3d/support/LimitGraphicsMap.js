/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/Evented","../../../core/MapUtils","./GraphicsMap"],(function(e,t,n,i,a){"use strict";let s=function(e){function n(n){var i;return(i=e.call(this)||this)._limit=n,i._all=new a.GraphicsMap,i._active=new r(t._assertThisInitialized(i)),i._pending=new Map,i._handle=i._all.on("change",(e=>i._handleChanges(e))),i}t._inherits(n,e);var i=n.prototype;return i.destroy=function(){this._handle.remove()},i.toArray=function(){return this._active.toArray()},i.find=function(e){return this._active.find(e)},i.forEach=function(e){this._active.forEach(e)},i.addMany=function(e){this._all.addMany(e)},i.removeManyByObjectId=function(e){this._all.removeManyByObjectId(e)},i._handleChanges=function(e){let t=e.removed;if(this._pending.size>0){t=new Array;for(const n of e.removed)this._pending.delete(n.objectId)||t.push(n)}let n=this._limit-this._active.length+t.length;n<e.added.length&&(this._active.removeMany(t),t=[],h.reset(1-this._limit/(this._active.length+e.added.length)),this._active.forEach((e=>{h.sample()&&(t.push(e),this._pending.set(e.objectId,e))})),n=this._limit-this._active.length+t.length);let i=e.added;if(n<e.added.length){i=new Array,h.reset(n/e.added.length);for(const t of e.added)h.sample()?i.push(t):this._pending.set(t.objectId,t)}const a=n-i.length;a>0&&this._pending.size>0&&(h.reset(a/this._pending.size),this._pending.forEach((e=>{h.sample()&&(i.push(e),this._pending.delete(e.objectId))}))),this._active.addAndRemove(i,t)},t._createClass(n,[{key:"length",get:function(){return this._active.length}}]),n}(n);const h=new(function(){function e(){this._percentage=1,this._last=-1,this._index=0}var n=e.prototype;return n.reset=function(e){this._percentage=e,this._last=-1},n.sample=function(){const e=Math.floor(this._index*this._percentage);return++this._index,e!==this._last&&(this._last=e,!0)},t._createClass(e)}());let r=function(){function e(e){this._parent=e,this._map=new Map}var n=e.prototype;return n.forEach=function(e){this._map.forEach((t=>e(t)))},n.find=function(e){let t;return i.someMap(this._map,(n=>!!e(n)&&(t=n,!0))),t},n.toArray=function(){return[...this._map.values()]},n.addAndRemove=function(e,t){for(const n of e)this._map.set(n.objectId,n);for(const n of t)this._map.delete(n.objectId);(e.length>0||t.length>0)&&this._parent.emit("change",{added:e,removed:t})},n.removeMany=function(e){for(const t of e)this._map.delete(t.objectId);e.length>0&&this._parent.emit("change",{added:[],removed:e})},t._createClass(e,[{key:"length",get:function(){return this._map.size}}]),e}();e.LimitGraphicsMap=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
