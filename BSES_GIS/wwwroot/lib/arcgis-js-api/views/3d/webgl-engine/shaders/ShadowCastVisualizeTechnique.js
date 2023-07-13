/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../lib/DefaultVertexAttributeLocations","../lib/OrderIndependentTransparency","../lib/Program","../../../../chunks/ShadowCastVisualize.glsl","../../../webgl/enums","../../../webgl/renderState"],(function(e,i,r,t,n,a,l,u,o,s,d){"use strict";let h=function(e){function i(i,r){var t;return t=e.call(this,i,r,(()=>t.destroy()))||this}r._inherits(i,e);var t=i.prototype;return t.initializeProgram=function(e){return new u.Program(e.rctx,i.shader.get().build(this.configuration),a.Default3D)},t.initializePipeline=function(){return d.makePipelineState({blending:l.blendingDefault,colorWrite:d.defaultColorWriteParams,depthTest:null,depthWrite:null})},r._createClass(i,[{key:"primitiveType",get:function(){return s.PrimitiveType.TRIANGLE_STRIP}}]),i}(n.ShaderTechnique);h.shader=new t.ReloadableShaderModule(o.ShadowCastVisualize,(()=>new Promise(((i,r)=>e(["./ShadowCastVisualize.glsl"],i,r))))),i.ShadowCastVisualizeTechnique=h,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})}));