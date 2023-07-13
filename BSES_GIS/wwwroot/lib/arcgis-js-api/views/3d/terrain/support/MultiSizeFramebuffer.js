/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../webgl/enums","../../../webgl/FramebufferObject","../../../webgl/RenderbufferDescriptor","../../../webgl/TextureDescriptor"],(function(e,t,r,o,s,n){"use strict";let i=function(){function e(e){this._rctx=e,this._fbos=new Map}var i=e.prototype;return i.get=function(e){return this._getPool(e)},i.dispose=function(){this._fbos.forEach((e=>e.dispose())),this._fbos.clear()},i._getPool=function(e){const t=this._fbos.get(e);if(t)return t;const i=new o.FramebufferObject(this._rctx,new n.TextureDescriptor(e),new s.RenderbufferDescriptor(r.RenderbufferFormat.DEPTH_COMPONENT16,e));return this._fbos.set(e,i),i},t._createClass(e)}();e.MultiSizeFramebuffer=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
