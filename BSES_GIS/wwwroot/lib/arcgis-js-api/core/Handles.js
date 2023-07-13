/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","./iteratorUtils","./maybe"],(function(e,t,r){"use strict";return function(){function o(){this._groups=new Map}var s=o.prototype;return s.destroy=function(){this.removeAll()},s.add=function(e,r){if(t.isIterable(e)){const t=this._getOrCreateGroup(r);for(const r of e)this._isHandle(r)&&t.push(r)}else if(this._isHandle(e)){this._getOrCreateGroup(r).push(e)}return this},s.forEach=function(e,t){if("function"==typeof e)this._groups.forEach((t=>t.forEach(e)));else{const r=this._getGroup(e);r&&t&&r.forEach(t)}},s.has=function(e){return this._groups.has(this._ensureGroupKey(e))},s.remove=function(e){if("string"!=typeof e&&t.isIterable(e)){for(const t of e)this.remove(t);return this}return this.has(e)?(this._removeAllFromGroup(this._getGroup(e)),this._groups.delete(this._ensureGroupKey(e)),this):this},s.removeAll=function(){return this._groups.forEach((e=>this._removeAllFromGroup(e))),this._groups.clear(),this},s._isHandle=function(e){return e&&(!!e.remove||e instanceof o)},s._getOrCreateGroup=function(e){if(this.has(e))return this._getGroup(e);const t=[];return this._groups.set(this._ensureGroupKey(e),t),t},s._getGroup=function(e){return r.assumeNonNull(this._groups.get(this._ensureGroupKey(e)))},s._ensureGroupKey=function(e){return e||"_default_"},s._removeAllFromGroup=function(e){for(const t of e)t instanceof o?t.removeAll():t.remove()},e._createClass(o,[{key:"size",get:function(){let e=0;return this._groups.forEach((t=>{e+=t.length})),e}}]),o}()}));
