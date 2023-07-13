/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","./accessorSupport/tracking","./accessorSupport/tracking/SimpleObservable"],(function(t,e,s){"use strict";return function(r,i){function a(){this._map=new Map,this._observable=new s.SimpleObservable}var n=a.prototype;return n.clear=function(){this._map.size>0&&(this._map.clear(),this._observable.notify())},n.delete=function(t){const e=this._map.delete(t);return e&&this._observable.notify(),e},n.entries=function(){return e.trackAccess(this._observable),this._map.entries()},n.forEach=function(t,s){e.trackAccess(this._observable),this._map.forEach(((e,r)=>t.call(s,e,r,this)),s)},n.get=function(t){return e.trackAccess(this._observable),this._map.get(t)},n.has=function(t){return e.trackAccess(this._observable),this._map.has(t)},n.keys=function(){return e.trackAccess(this._observable),this._map.keys()},n.set=function(t,e){return this._map.set(t,e),this._observable.notify(),this},n.values=function(){return e.trackAccess(this._observable),this._map.values()},n[r]=function(){return e.trackAccess(this._observable),this._map[Symbol.iterator]()},t._createClass(a,[{key:"size",get:function(){return e.trackAccess(this._observable),this._map.size}},{key:i,get:function(){return this._map[Symbol.toStringTag]}}]),a}(Symbol.iterator,Symbol.toStringTag)}));
