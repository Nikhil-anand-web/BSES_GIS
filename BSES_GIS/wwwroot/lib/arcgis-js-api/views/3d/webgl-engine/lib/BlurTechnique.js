/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","./DefaultVertexAttributeLocations","./Program","../../../../chunks/Blur.glsl","../../../webgl/renderState"],(function(e,r,t,i,l,n,a,u,o){"use strict";let s=function(e){function r(){return e.apply(this,arguments)||this}t._inherits(r,e);var i=r.prototype;return i.initializeProgram=function(e){return new a.Program(e.rctx,r.shader.get().build(),n.Default3D)},i.initializePipeline=function(){return o.makePipelineState({colorWrite:o.defaultColorWriteParams})},t._createClass(r)}(l.ShaderTechnique);s.shader=new i.ReloadableShaderModule(u.Blur,(()=>new Promise(((r,t)=>e(["../shaders/Blur.glsl"],r,t))))),r.BlurTechnique=s,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
