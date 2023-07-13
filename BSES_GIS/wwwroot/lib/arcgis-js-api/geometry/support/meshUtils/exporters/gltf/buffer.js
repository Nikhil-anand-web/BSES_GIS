/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/promiseUtils","./bufferview"],(function(e,i,t,r){"use strict";let f=function(){function e(e){this._gltf=e,this._bufferViews=[],this._isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const i={byteLength:-1};e.buffers.push(i),this._buffer=i}var f=e.prototype;return f.addBufferView=function(e,i,t){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const f=new r.BufferView(this,this._gltf,e,i,t);return this._bufferViews.push(f),f},f.getByteOffset=function(e){let i=0;for(const t of this._bufferViews){if(t===e)return i;i+=t.byteSize}throw new Error("Given bufferView was not present in this buffer")},f.getViewFinalizePromises=function(e){const i=[];for(const t of this._bufferViews){if(e&&t===e)return i;i.push(t.finalized)}return i},f.getArrayBuffer=function(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),i=new ArrayBuffer(e);let t=0;for(const r of this._bufferViews)r.writeOutToBuffer(i,t),t+=r.byteSize;return i},f.finalize=function(){if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=new Promise((e=>{e(t.eachAlways(this.getViewFinalizePromises()))})).then((()=>{this._isFinalized=!0;const e=this.getArrayBuffer();this._buffer.byteLength=e.byteLength,this._buffer.uri=e})),this._gltf.extras?.promises.push(this._finalizePromise),this._finalizePromise},f._getTotalSize=function(){let e=0;for(const i of this._bufferViews)e+=i.byteSize;return e},i._createClass(e)}();e.Buffer=f,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));