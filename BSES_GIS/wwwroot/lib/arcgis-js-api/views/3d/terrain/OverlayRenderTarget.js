/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/has","../../../core/time","./interfaces","./OverlayFramebufferObject","../webgl-engine/core/shaderLibrary/ShaderOutput"],(function(e,r,t,n,o,s,a){"use strict";let d=r._createClass((function(e,r,t,o=!0){this.output=r,this.type=t,this.valid=!1,this.lastUsed=n.Milliseconds(1/0),this.fbo=new s.OverlayFramebufferObject(e,o)})),i=function(){function e(e){this.renderTargets=[new d(e,a.ShaderOutput.Color,o.RenderTargetType.Color),new d(e,a.ShaderOutput.Color,o.RenderTargetType.ColorNoRasterImage),new d(e,a.ShaderOutput.Highlight,o.RenderTargetType.Highlight,!1),new d(e,a.ShaderOutput.Normal,o.RenderTargetType.Water),new d(e,a.ShaderOutput.Color,o.RenderTargetType.Occluded)],t("enable-feature:objectAndLayerId-rendering")&&this.renderTargets.push(new d(e,a.ShaderOutput.ObjectAndLayerIdColor,o.RenderTargetType.ObjectAndLayerIdColor))}var s=e.prototype;return s.getTarget=function(e){return this.renderTargets[e].fbo},s.dispose=function(){for(const e of this.renderTargets)e.fbo.dispose()},s.disposeRenderTargetMemory=function(){for(const e of this.renderTargets)e.fbo.disposeRenderTargetMemory()},s.validateUsageForTarget=function(e,r,t){return e?(r.lastUsed=t,!1):t-r.lastUsed>u?(r.fbo.disposeRenderTargetMemory(),r.lastUsed=n.Milliseconds(1/0),!1):r.lastUsed<1/0},r._createClass(e,[{key:"gpuMemoryUsage",get:function(){return this.renderTargets.reduce(((e,r)=>e+r.fbo.gpuMemoryUsage),0)}}]),e}();const u=n.Milliseconds(1e3);e.OverlayRenderTarget=i,e.RenderTargetDescriptor=d,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));