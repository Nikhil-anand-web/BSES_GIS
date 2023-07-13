/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../lib/DefaultVertexAttributeLocations","../lib/Program","../../../../chunks/HighlightBlur.glsl","../../../webgl/renderState"],(function(e,r,i,t,l,n,a,u,o){"use strict";let h=function(e){function r(){return e.apply(this,arguments)||this}i._inherits(r,e);var t=r.prototype;return t.initializeProgram=function(e){return new a.Program(e.rctx,r.shader.get().build(),n.Default3D)},t.initializePipeline=function(){return o.makePipelineState({colorWrite:o.defaultColorWriteParams})},i._createClass(r)}(l.ShaderTechnique);h.shader=new t.ReloadableShaderModule(u.HighlightBlur,(()=>new Promise(((r,i)=>e(["./HighlightBlur.glsl"],r,i))))),r.HighlightBlurTechnique=h,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
