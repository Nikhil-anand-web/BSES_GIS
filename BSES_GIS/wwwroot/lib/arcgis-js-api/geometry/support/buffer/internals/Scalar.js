/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],(function(t,e){"use strict";let r=function(){function t(t,e,r=0,i,f){this.TypedArrayConstructor=t,this.elementCount=1;const n=this.TypedArrayConstructor;void 0===i&&(i=n.BYTES_PER_ELEMENT);const s=0===e.byteLength?0:r;this.typedBuffer=null==f?new n(e,s):new n(e,s,(f-r)/n.BYTES_PER_ELEMENT),this.stride=i,this.typedBufferStride=i/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}var r=t.prototype;return r.sliceBuffer=function(t,e,r=this.count-e){const i=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,i,this.stride,i+r*this.stride)},r.get=function(t){return this.typedBuffer[t*this.typedBufferStride]},r.set=function(t,e){this.typedBuffer[t*this.typedBufferStride]=e},e._createClass(t,[{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),t}();r.ElementCount=1,t.BufferViewScalarImpl=r,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));