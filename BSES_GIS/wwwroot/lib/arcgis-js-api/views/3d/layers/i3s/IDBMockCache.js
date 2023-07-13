/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],(function(t,e){"use strict";let i=function(){function t(){this._data=new Map,this._miss=0,this._hit=0,this.initialized=!0}var i=t.prototype;return i.init=function(){return Promise.resolve()},i.get=async function(t,e){if(this._data.has(t))return this._hit++,this._data.get(t)??void 0;this._miss++},i.destroy=function(){},i.put=function(t,e){return this._data.set(t,e),Promise.resolve()},i.remove=function(t){return this._data.delete(t),Promise.resolve()},i.getHitRate=function(){return this._hit/(this._hit+this._miss)},e._createClass(t)}();t.IDBMockCache=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
