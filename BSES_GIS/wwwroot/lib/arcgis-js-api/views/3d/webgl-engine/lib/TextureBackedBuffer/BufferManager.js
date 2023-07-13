/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","./ManagedTextureBackedBuffer"],(function(e,t,f){"use strict";let r=function(){function e(e,t=1){this._rctx=e,this._fieldCount=t,this._buffers=[]}var r=e.prototype;return r.garbageCollect=function(){this._buffers=this._buffers.filter((e=>0!==e.activeCount||(e.dispose(),!1)))},r.destroy=function(){this._buffers.forEach((e=>e.dispose())),this._buffers=[]},r.getBuffer=function(e){for(const f of this._buffers)if(f.availableCount>=e)return f;if(e>f.MAX_INDEX_COUNT)return null;const t=new f.ManagedTextureBackedBuffer(this._rctx,this._fieldCount);return this._buffers.push(t),t},r.updateTextures=function(){for(const e of this._buffers)e.textureBuffer.updateTexture()},t._createClass(e)}();e.BufferManager=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
