/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../../webgl/enums","../../webgl/FramebufferObject","../../webgl/TextureDescriptor"],(function(e,t,r,o,i,n){"use strict";let s=function(){function e(e,t){this._fbo=null;const r=new n.TextureDescriptor;r.wrapMode=o.TextureWrapMode.CLAMP_TO_EDGE,r.samplingMode=o.TextureSamplingMode.LINEAR_MIPMAP_LINEAR,r.hasMipmap=t,r.maxAnisotropy=8,this._fbo=new i.FramebufferObject(e,r)}var s=e.prototype;return s.dispose=function(){this._fbo=r.disposeMaybe(this._fbo)},s.getTexture=function(){return this._fbo?.colorTexture},s.isValid=function(){return null!=this._fbo},s.resize=function(e,t){this._fbo?.resize(e,t)},s.bind=function(e){e.bindFramebuffer(this._fbo)},s.generateMipMap=function(){const e=this._fbo?.colorTexture;e?.descriptor.hasMipmap&&e.generateMipmap()},s.disposeRenderTargetMemory=function(){this._fbo?.resize(0,0)},t._createClass(e,[{key:"gpuMemoryUsage",get:function(){return this._fbo?.gpuMemoryUsage??0}}]),e}();e.OverlayFramebufferObject=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));