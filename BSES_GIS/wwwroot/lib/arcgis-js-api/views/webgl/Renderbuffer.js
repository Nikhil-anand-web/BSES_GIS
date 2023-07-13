/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/maybe","./contextUtils","./enums","./GLObjectType","./RenderbufferDescriptor"],(function(e,t,r,n,i,s,o){"use strict";let c=function(){function e(e,t){this._context=e,this._descriptor=t,this.type=s.GLObjectType.RenderBuffer,this._context.instanceCounter.increment(i.ResourceType.Renderbuffer,this);const r=this._context.gl;this.glName=r.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:o,height:c,internalFormat:u,multisampled:h}=t;if(h){if(this._context.type!==n.ContextType.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,u,o,c)}else r.renderbufferStorage(r.RENDERBUFFER,u,o,c)}var c=e.prototype;return c.resize=function(e,t){const r=this._descriptor;if(r.width===e&&r.height===t)return;r.width=e,r.height=t;const n=this._context.gl;if(this._context.bindRenderbuffer(this),r.multisampled){n.renderbufferStorageMultisample(n.RENDERBUFFER,this.samples,r.internalFormat,r.width,r.height)}else n.renderbufferStorage(n.RENDERBUFFER,r.internalFormat,r.width,r.height)},c.dispose=function(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(i.ResourceType.Renderbuffer,this),this._context=r.nullifyNonNullableForDispose(this._context))},t._createClass(e,[{key:"descriptor",get:function(){return this._descriptor}},{key:"samples",get:function(){const e=this._descriptor.samples,t=this._context.parameters.maxSamples;return e?Math.min(e,t):t}},{key:"gpuMemoryUsage",get:function(){return o.estimateMemory(this._descriptor)}}]),e}();e.Renderbuffer=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));