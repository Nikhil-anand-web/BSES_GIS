/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../geometry/support/buffer/BufferView","../../../../webgl/enums","../../../../webgl/Texture","../../../../webgl/TextureDescriptor"],(function(t,e,i,r,s,u){"use strict";let n=function(){function t(t,e=1){this._rctx=t,this._fieldCount=e,this.textureWidth=4096,this._dirty=!0;const n=new u.TextureDescriptor;n.samplingMode=r.TextureSamplingMode.NEAREST,n.wrapMode=r.TextureWrapMode.CLAMP_TO_EDGE,n.width=this.textureWidth,n.height=1,this._texture=new s.Texture(this._rctx,n),this._data=new i.BufferViewVec4u8(new ArrayBuffer(4*this.textureWidth))}var n=t.prototype;return n.dispose=function(){this._texture.dispose(),this._texture=void 0,this._data=void 0},n.setData=function(t,e,i,r,s,u){const n=t*this._fieldCount+e;this._dirty=!0,this._data.set(n,0,i),this._data.set(n,1,r),this._data.set(n,2,s),this._data.set(n,3,u)},n.setDataElement=function(t,e,i,r){const s=t*this._fieldCount+e;this._dirty=!0,this._data.set(s,i,r)},n.getDataElement=function(t,e,i){const r=t*this._fieldCount+e;return this._dirty=!0,this._data.get(r,i)},n.resizeToFit=function(t){const e=(t+1)*this._fieldCount;if(e>this._data.count){const t=Math.ceil(e/this.textureWidth)*this.textureWidth,r=new i.BufferViewVec4u8(new ArrayBuffer(4*t));r.typedBuffer.set(this._data.typedBuffer),this._data=r}},n.updateTexture=function(){if(!this._dirty)return;const t=this._texture.descriptor.width,e=this._texture.descriptor.height;this._data.count>t*e&&this._texture.resize(t,this._data.count/t),this._texture.setData(this._data.typedBuffer),this._dirty=!1},e._createClass(t,[{key:"texture",get:function(){return this._texture}}]),t}();t.TextureBackedBuffer=n,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));