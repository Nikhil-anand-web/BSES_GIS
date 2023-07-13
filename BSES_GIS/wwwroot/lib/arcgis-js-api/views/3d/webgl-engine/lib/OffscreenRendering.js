/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","./RenderTargetHelper","./TransparencyPassType","../shaders/CompositingTechniqueConfiguration","../../../webgl/enums","../../../webgl/FramebufferObject"],(function(e,t,r,i,o,n,a,s){"use strict";let h=function(){function e(e,t){this._rctx=e,this._compositingHelper=t,this._mainColorTarget=0,this.width=4,this.height=4,this._background={type:"color",color:[0,0,0,1]},this._renderTargetHelper=new i.RenderTargetHelper(e);const r=this._renderTargetHelper;this._mainColorTargets=[r.registerColorTarget({name:"mainColorTarget0"}),r.registerColorTarget({name:"mainColorTarget1"})],this.frontFaceTarget=r.registerColorTarget({name:"frontFaceTarget"}),this.colorFloatTarget=r.registerColorTarget({name:"colorFloatTarget",dataType:a.PixelType.HALF_FLOAT,internalFormat:a.SizedPixelFormat.RGBA16F,samplingMode:a.TextureSamplingMode.NEAREST}),this.alphaFloatTarget=r.registerColorTarget({name:"alphaFloatTarget",dataType:a.PixelType.HALF_FLOAT,internalFormat:a.SizedPixelFormat.R16F,samplingMode:a.TextureSamplingMode.NEAREST}),this.mainDepth=r.registerDepthTarget({name:"mainDepth"}),this.linearDepth=r.registerColorTarget({name:"linearDepth",samplingMode:a.TextureSamplingMode.NEAREST}),this.terrainLinearDepth=r.registerColorTarget({name:"terrainLinearDepth"}),this.geometryLinearDepth=r.registerColorTarget({name:"geometryLinearDepth"}),this.normal=r.registerColorTarget({name:"normal"}),this.highlight=r.registerColorTarget({name:"highlight",internalFormat:a.SizedPixelFormat.RGBA4,dataType:a.PixelType.UNSIGNED_SHORT_4_4_4_4}),this.hudVisibility=r.registerColorTarget({name:"hudVisibility",internalFormat:a.SizedPixelFormat.RGBA4,dataType:a.PixelType.UNSIGNED_SHORT_4_4_4_4}),this.tmpColor=r.registerColorTarget({name:"tmpColor"}),this.tmpDepth=r.registerDepthTarget({name:"tmpDepth"}),this.hudColor=r.registerColorTarget({name:"hudColor"})}var r=e.prototype;return r.dispose=function(){this._renderTargetHelper.dispose()},r.getFramebuffer=function(e,t){return this._renderTargetHelper.getFramebuffer(this.width,this.height,e,t)},r.setupRenderTarget=function(e){e?this._mainColorTarget=this._mainColorTarget?0:1:(this._mainColorTarget=0,this.disposeTarget(this._mainColorTargets[1]))},r.initializeFrame=function(e){const t=this._rctx;this.width=e.fullWidth,this.height=e.fullHeight,s.ensureAttachmentMaxSize(this,t.parameters.maxTextureSize),this.bindTarget(this.currentColorTarget,this.mainDepth),t.setClearStencil(0);const r=this._background.color;t.setClearColor(r[0]*r[3],r[1]*r[3],r[2]*r[3],r[3]),t.clearSafe(a.ClearBufferBit.COLOR_BUFFER_BIT|a.ClearBufferBit.DEPTH_BUFFER_BIT|a.ClearBufferBit.STENCIL_BUFFER_BIT)},r.composite=function(e){null!=this.colorTexture&&this._compositingHelper.composite(e,this.colorTexture,n.AlphaMode.None)},r.renderTmpAndCompositeToMain=function(e,t,r,i=!1){this.renderToTargets(e,this.tmpColor,i?this.tmpDepth:this.mainDepth,l),this._compositingHelper.composite(t,this._getColorTexture(this.tmpColor),r)},r.compositeAtmosphereToMain=function(e,t,r,i){this.bindTarget(this.currentColorTarget),this._compositingHelper.compositeAtmosphere(e,this._renderTargetHelper.getColorTexture(this.tmpColor,this.width,this.height),r,i,t),this.bindTarget(this.currentColorTarget,this.mainDepth)},r.renderHUDVisibility=function(e,t=!1){this.renderToTargets(e,this.hudVisibility,t?this.tmpDepth:this.mainDepth,g)},r.compositeTransparentTerrainOntoHUDVisibility=function(e){this.renderToTargets((()=>this._compositingHelper.compositeHUD(e,this._getColorTexture(this.tmpColor))),this.hudVisibility,this.tmpDepth)},r.renderOITPass=function(e,t,r){let i,n;switch(t){case o.TransparencyPassType.Color:i=this.colorFloatTarget,n=[0,0,0,0];break;case o.TransparencyPassType.Alpha:i=this.alphaFloatTarget,n=[1,1,1,1];break;case o.TransparencyPassType.FrontFace:i=this.frontFaceTarget,n=[0,0,0,0];break;case o.TransparencyPassType.NONE:case o.TransparencyPassType.COUNT:return}r?this.renderToTargets(e,i,this.tmpDepth,n,!0,!0):this.renderToTargets(e,i,this.mainDepth,n,!1)},r.compositeTransparentTerrainOntoMain=function(e){this.bindFramebuffer(),this._compositingHelper.composite(e,this._getColorTexture(this.tmpColor),n.AlphaMode.PremultipliedAlpha)},r.compositeOccludedOntoMain=function(e,t){this.bindFramebuffer(),this._compositingHelper.composite(e,this._getColorTexture(this.tmpColor),n.AlphaMode.PremultipliedAlpha,t)},r.compositeTransparentOntoOpaque=function(e,t){t?(this.bindTarget(this.hudColor,this.tmpDepth),this._rctx.setClearColor(0,0,0,1e-13),this._rctx.clearSafe(a.ClearBufferBit.COLOR_BUFFER_BIT)):this.bindFramebuffer(),this._compositingHelper.compositeOIT(e,this._getColorTexture(this.colorFloatTarget),this._getColorTexture(this.alphaFloatTarget),this._getColorTexture(this.frontFaceTarget))},r.bindFramebuffer=function(){this._rctx.bindFramebuffer(this.framebuffer)},r.renderDepthDetached=function(e){this.bindTarget(this.currentColorTarget),e(),this.bindTarget(this.currentColorTarget,this.mainDepth)},r.disposeTarget=function(e){this._renderTargetHelper.disposeTargetResource(e)},r.renderToFBO=function(e,t,r=!1,i=!1){const o=this._rctx;let n=0;if(t){const e=1e-13,r=Math.max(e,t[3]);o.setClearColor(t[0],t[1],t[2],r),n|=a.ClearBufferBit.COLOR_BUFFER_BIT}r&&(n|=a.ClearBufferBit.DEPTH_BUFFER_BIT),!1===i?i=0:(!0===i&&(i=255),n|=a.ClearBufferBit.STENCIL_BUFFER_BIT),n&&o.clearSafe(n,i),e(),o.gl.flush(),this.bindTarget(this.currentColorTarget,this.mainDepth)},r.renderToTargets=function(e,t,r,i,o=!1,n=!1){const a=this.bindTarget(t,r);return this.renderToFBO(e,i,o,n),a},r.bindTarget=function(e,t){const r=this._renderTargetHelper.getFramebuffer(this.width,this.height,e,t);return this._rctx.bindFramebuffer(r),r},r._getColorTexture=function(e){return this._renderTargetHelper.getColorTexture(e,this.width,this.height)},t._createClass(e,[{key:"background",get:function(){return this._background},set:function(e){this._background=e}},{key:"currentColorTarget",get:function(){return this._mainColorTargets[this._mainColorTarget]}},{key:"previousColorTarget",get:function(){return this._mainColorTargets[1-this._mainColorTarget]}},{key:"framebuffer",get:function(){return this.getFramebuffer(this.currentColorTarget,this.mainDepth)}},{key:"colorTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.currentColorTarget)}},{key:"depthTexture",get:function(){return this._renderTargetHelper.getAllocatedDepthTexture(this.mainDepth)}},{key:"linearDepthTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.linearDepth)}},{key:"terrainLinearDepthTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.terrainLinearDepth)}},{key:"geometryLinearDepthTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.geometryLinearDepth)}},{key:"lastFrameColorTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.previousColorTarget)}},{key:"normalTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.normal)}},{key:"highlightTexture",get:function(){return this._renderTargetHelper.getAllocatedColorTexture(this.highlight)}},{key:"hudVisibilityTexture",get:function(){return this._getColorTexture(this.hudVisibility)}},{key:"tmpColorTexture",get:function(){return this._getColorTexture(this.tmpColor)}},{key:"hudColorTexture",get:function(){return this._getColorTexture(this.hudColor)}},{key:"mainColorTexture",get:function(){return this._getColorTexture(this.currentColorTarget)}},{key:"gpuMemoryUsage",get:function(){let e=0;return this._renderTargetHelper&&(e+=this._renderTargetHelper.gpuMemoryUsage),e}}]),e}();const l=[0,0,0,0],g=[0,1,0,1];e.OffscreenRendering=h,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));