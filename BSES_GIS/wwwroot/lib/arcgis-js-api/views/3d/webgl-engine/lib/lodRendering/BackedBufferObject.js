/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../webgl/BufferObject","../../../../webgl/enums"],(function(e,t,r){"use strict";return function(){function i(e,i,n){this._elementSize=i,this._buffer=t.BufferObject.createVertex(e,r.Usage.STATIC_DRAW),this.resize(n)}var n=i.prototype;return n.destroy=function(){this._buffer.dispose()},n.copyRange=function(e,t,r,i=0){const n=new Uint8Array(this.array,e*this.elementSize,(t-e)*this.elementSize);new Uint8Array(r.array,i*this.elementSize).set(n)},n.transferAll=function(){this._buffer.setData(this._array)},n.transferRange=function(e,t){const r=e*this._elementSize,i=t*this._elementSize;this._buffer.setSubData(new Uint8Array(this._array),r,r,i)},n.resize=function(e){const t=e*this._elementSize,r=new ArrayBuffer(t);this._array&&(e>=this._capacity?new Uint8Array(r).set(new Uint8Array(this._array)):new Uint8Array(r).set(new Uint8Array(this._array).subarray(0,e*this._elementSize))),this._array=r,this._buffer.setSize(t),this._capacity=e},e._createClass(i,[{key:"elementSize",get:function(){return this._elementSize}},{key:"capacity",get:function(){return this._capacity}},{key:"array",get:function(){return this._array}},{key:"buffer",get:function(){return this._buffer}},{key:"memoryUsage",get:function(){return{cpu:this._capacity*this._elementSize,gpu:this._capacity*this._elementSize}}}]),i}()}));