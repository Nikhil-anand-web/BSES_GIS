/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","./basicInterfaces"],(function(e,t,r){"use strict";let i=function(){function e(e,t){this._material=e,this._repository=t,this._map=new Map}var i=e.prototype;return i.destroy=function(){this._map.forEach(((e,t)=>{null!=e&&this._repository.release(this._material,t)}))},i.load=function(e,t,i){if(!this._material.requiresSlot(t,i))return null;this._map.has(i)||this._map.set(i,this._repository.acquire(this._material,t,i));const s=this._map.get(i);if(null!=s){if(s.ensureResources(e)===r.ResourceState.LOADED)return s;this._repository.requestRender()}return null},t._createClass(e)}();e.GLMaterials=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
