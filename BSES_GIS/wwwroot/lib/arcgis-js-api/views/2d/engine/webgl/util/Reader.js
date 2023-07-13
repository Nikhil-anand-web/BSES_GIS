/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers"],(function(t){"use strict";return function(){function e(t){this._pos=0,this._buffer=t,this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer)}var i=e.prototype;return i.readInt32=function(){return this._i32View[this._pos++]},i.readF32=function(){return this._f32View[this._pos++]},t._createClass(e)}()}));
