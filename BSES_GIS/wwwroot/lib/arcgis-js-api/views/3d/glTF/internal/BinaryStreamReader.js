/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],(function(t,e){"use strict";let n=function(){function t(t){this._data=t,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}var n=t.prototype;return n.readUint32=function(){const t=this._offset4;return this._offset4+=1,this._dataUint32[t]},n.readUint8Array=function(t){const e=4*this._offset4;return this._offset4+=t/4,new Uint8Array(this._data,e,t)},n.remainingBytes=function(){return this._data.byteLength-4*this._offset4},e._createClass(t)}();t.BinaryStreamReader=n,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
