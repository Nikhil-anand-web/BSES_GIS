/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/CloudsComposition.glsl","../webgl-engine/core/shaderTechnique/ReloadableShaderModule","../webgl-engine/core/shaderTechnique/ShaderTechnique","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration","../webgl-engine/lib/DefaultVertexAttributeLocations","../webgl-engine/lib/Program","../../webgl/enums","../../webgl/renderState"],(function(e,n,r,i,o,t,l,a,u,d,s){"use strict";let c=function(e){function n(n){var r;return r=e.call(this,n,new l.ShaderTechniqueConfiguration,(()=>r.destroy()))||this}r._inherits(n,e);var i=n.prototype;return i.initializeProgram=function(e){return new u.Program(e.rctx,n.shader.get().build(),a.Default3D)},i.initializePipeline=function(){return s.makePipelineState({blending:s.separateBlendingParams(d.BlendFactor.ONE,d.BlendFactor.ZERO,d.BlendFactor.SRC_ALPHA,d.BlendFactor.ONE),depthTest:{func:d.CompareFunction.LEQUAL},colorWrite:s.defaultColorWriteParams})},r._createClass(n)}(t.ShaderTechnique);c.shader=new o.ReloadableShaderModule(i.CloudsCompositionShader,(()=>new Promise(((n,r)=>e(["./CloudsComposition.glsl"],n,r))))),n.CloudsCompositionTechnique=c,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
