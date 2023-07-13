/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/uid","../../../webgl/enums","../../../webgl/FramebufferObject","../../../webgl/Texture","../../../webgl/TextureDescriptor"],(function(e,t,r,i,s,o,a,n){"use strict";const u={dataType:s.PixelType.UNSIGNED_BYTE,internalFormat:s.PixelFormat.RGBA},c={};let h=function(){function e(e){this._rctx=e,this._activeTargets=new Set,this._colorTextures=new Map,this._depthTextures=new Map,this._fbos=new Map}var h=e.prototype;return h.dispose=function(){this._depthTextures.forEach((e=>e.dispose())),this._depthTextures.clear(),this._colorTextures.forEach((e=>e.dispose())),this._colorTextures.clear(),this._fbos.forEach((e=>e.dispose())),this._fbos.clear(),this._activeTargets.clear()},h.disposeTargetResource=function(e){const t=e.id;this._activeTargets.has(t)&&(this._activeTargets.delete(t),this._disposeWithFramebuffers(this._depthTextures,t),this._disposeWithFramebuffers(this._colorTextures,t))},h._disposeWithFramebuffers=function(e,t){const r=e.get(t);r&&(this._fbos.forEach(((e,t)=>{e.colorTexture!==r&&e.depthStencilAttachment!==r||(e.detachColorTexture(),e.detachDepthStencilTexture(),e.dispose(),this._fbos.delete(t))})),r.dispose(),e.delete(t))},h._getDepthTexture=function(e,t,r){let i=this._depthTextures.get(e.id);if(!i||i.descriptor.width===t&&i.descriptor.height===r||(i.dispose(),i=null),!i){const o=new n.TextureDescriptor(t,r);o.pixelFormat=s.PixelFormat.DEPTH_STENCIL,o.dataType=s.PixelType.UNSIGNED_INT_24_8,o.samplingMode=s.TextureSamplingMode.NEAREST,o.wrapMode=s.TextureWrapMode.CLAMP_TO_EDGE,i=new a.Texture(this._rctx,o),this._depthTextures.set(e.id,i),this._activeTargets.add(e.id)}return i},h.getAllocatedDepthTexture=function(e){return this._depthTextures.get(e.id)},h.getColorTexture=function(e,t,i){let o=this._colorTextures.get(e.id);if(o&&(o.descriptor.width===t&&o.descriptor.height===i||(o.dispose(),o=r.nullifyNonNullableForDispose())),!o){const r=new n.TextureDescriptor(t,i);r.internalFormat=e.internalFormat,r.dataType=e.dataType,r.samplingMode=null!=e.samplingMode?e.samplingMode:s.TextureSamplingMode.LINEAR,r.wrapMode=s.TextureWrapMode.CLAMP_TO_EDGE,o=new a.Texture(this._rctx,r),this._colorTextures.set(e.id,o),this._activeTargets.add(e.id)}return o},h.getAllocatedColorTexture=function(e){return this._colorTextures.get(e.id)},h.registerDepthTarget=function(e={}){return{id:i.generateUID(),...c,...e}},h.registerColorTarget=function(e={}){return{id:i.generateUID(),...u,...e}},h.getFramebuffer=function(e,t,r,i){const s=this._getKey(r,i);let a=this._fbos.get(s);const n=this.getColorTexture(r,e,t),u=i?this._getDepthTexture(i,e,t):void 0;if(!a)return a=new o.FramebufferObject(this._rctx,n,u),this._fbos.set(s,a),a;return(a.width!==e||a.height!==t||a.colorTexture!==n||a.depthStencilAttachment!==u)&&(a.detachColorTexture(),a.detachDepthStencilTexture(),a.resize(e,t),a.attachColorTexture(n),a.attachDepthStencil(u)),a},h._getKey=function(e,t){return`${e.id}_${t?t.id:"X"}_${e.name}${t?"_"+t.name:""}`},t._createClass(e,[{key:"gpuMemoryUsage",get:function(){let e=0;const t=new Set,r=r=>{t.has(r)||(t.add(r),e+=r.gpuMemoryUsage)};return this._colorTextures.forEach(r),this._depthTextures.forEach(r),e}}]),e}();e.RenderTargetHelper=h,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));