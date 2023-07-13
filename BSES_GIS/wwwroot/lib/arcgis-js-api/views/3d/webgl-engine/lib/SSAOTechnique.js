/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","./DefaultVertexAttributeLocations","./Program","../../../../chunks/SSAO.glsl","../../../webgl/renderState"],(function(e,r,t,i,n,a,l,o,u){"use strict";let s=function(e){function r(){return e.apply(this,arguments)||this}t._inherits(r,e);var i=r.prototype;return i.initializeProgram=function(e){return new l.Program(e.rctx,r.shader.get().build(),a.Default3D)},i.initializePipeline=function(){return u.makePipelineState({colorWrite:u.defaultColorWriteParams})},t._createClass(r)}(n.ShaderTechnique);s.shader=new i.ReloadableShaderModule(o.SSAO,(()=>new Promise(((r,t)=>e(["../shaders/SSAO.glsl"],r,t))))),r.SSAOTechnique=s,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
