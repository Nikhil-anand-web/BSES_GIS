/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../chunks/vec3f64","../../../ViewingMode","../core/shaderLibrary/ShaderOutput","../core/shaderLibrary/attributes/PathVertexPosition.glsl","../core/shaderLibrary/shading/Normals.glsl","../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/OrderIndependentTransparency","../lib/Program","../lib/StencilUtils","../lib/TransparencyPassType","../lib/VertexAttribute","./DefaultTechniqueConfiguration","../../../../chunks/Path.glsl","../../../webgl/renderState"],(function(e,t,r,a,o,i,n,s,l,u,c,d,p,h,y,P,b,v,m,_,f){"use strict";const T=new Map([[v.VertexAttribute.POSITION,0],[v.VertexAttribute.PROFILERIGHT,1],[v.VertexAttribute.PROFILEUP,2],[v.VertexAttribute.PROFILEVERTEXANDNORMAL,3],[v.VertexAttribute.FEATUREVALUE,4]]);let g=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).ambient=o.fromValues(.2,.2,.2),t.diffuse=o.fromValues(.8,.8,.8),t.specular=o.fromValues(0,0,0),t.opacity=1,t.origin=o.create(),t.modelTransformation=null,t}return r._inherits(t,e),r._createClass(t)}(s.PathVertexPositionPassParameters),O=function(e){function t(){return e.apply(this,arguments)||this}r._inherits(t,e);var a=t.prototype;return a.initializeConfiguration=function(e,t){t.spherical=e.viewingMode===i.ViewingMode.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result},a.initializeProgram=function(e){return new y.Program(e.rctx,t.shader.get().build(this.configuration),T)},a.initializePipeline=function(){const e=this.configuration.transparencyPassType,t=this.configuration,r=e===b.TransparencyPassType.NONE,a=e===b.TransparencyPassType.FrontFace;return f.makePipelineState({blending:t.output!==n.ShaderOutput.Color&&t.output!==n.ShaderOutput.Alpha||!t.transparent?null:r?h.blendingDefault:h.oitBlending(e),culling:t.hasSlicePlane&&!t.transparent&&t.doubleSidedMode!==l.NormalsDoubleSidedMode.None?f.frontFaceCullingParams:null,depthTest:{func:h.oitDepthTest(e)},depthWrite:r||a?f.defaultDepthWriteParams:null,colorWrite:f.defaultColorWriteParams,stencilWrite:t.hasOccludees?P.stencilWriteMaskOn:null,stencilTest:t.hasOccludees?P.stencilBaseAllZerosParams:null,polygonOffset:r||a?null:h.OITPolygonOffset})},r._createClass(t)}(d.ShaderTechnique);O.shader=new c.ReloadableShaderModule(_.Path,(()=>new Promise(((t,r)=>e(["../shaders/Path.glsl"],t,r)))));let S=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).output=n.ShaderOutput.Color,t.doubleSidedMode=l.NormalsDoubleSidedMode.None,t.transparencyPassType=b.TransparencyPassType.NONE,t.spherical=!1,t.receiveShadows=!1,t.receiveAmbientOcclusion=!1,t.vvSize=!1,t.vvColor=!1,t.vvOpacity=!1,t.hasSlicePlane=!1,t.transparent=!1,t.hasOccludees=!1,t.hasMultipassTerrain=!1,t.cullAboveGround=!1,t.doublePrecisionRequiresObfuscation=!1,t}return r._inherits(t,e),r._createClass(t)}(m.DefaultTechniqueConfiguration);a.__decorate([p.parameter({count:n.ShaderOutput.COUNT})],S.prototype,"output",void 0),a.__decorate([p.parameter({count:l.NormalsDoubleSidedMode.COUNT})],S.prototype,"doubleSidedMode",void 0),a.__decorate([p.parameter({count:b.TransparencyPassType.COUNT})],S.prototype,"transparencyPassType",void 0),a.__decorate([p.parameter()],S.prototype,"spherical",void 0),a.__decorate([p.parameter()],S.prototype,"receiveShadows",void 0),a.__decorate([p.parameter()],S.prototype,"receiveAmbientOcclusion",void 0),a.__decorate([p.parameter()],S.prototype,"vvSize",void 0),a.__decorate([p.parameter()],S.prototype,"vvColor",void 0),a.__decorate([p.parameter()],S.prototype,"vvOpacity",void 0),a.__decorate([p.parameter()],S.prototype,"hasSlicePlane",void 0),a.__decorate([p.parameter()],S.prototype,"transparent",void 0),a.__decorate([p.parameter()],S.prototype,"hasOccludees",void 0),a.__decorate([p.parameter()],S.prototype,"hasMultipassTerrain",void 0),a.__decorate([p.parameter()],S.prototype,"cullAboveGround",void 0),a.__decorate([p.parameter()],S.prototype,"doublePrecisionRequiresObfuscation",void 0),a.__decorate([p.parameter({constValue:u.PBRMode.Disabled})],S.prototype,"pbrMode",void 0),a.__decorate([p.parameter({constValue:!0})],S.prototype,"hasVvInstancing",void 0),a.__decorate([p.parameter({constValue:!1})],S.prototype,"useCustomDTRExponentForWater",void 0),a.__decorate([p.parameter({constValue:!1})],S.prototype,"useFillLights",void 0),t.PathPassParameters=g,t.PathTechnique=O,t.PathTechniqueConfiguration=S,t.vertexAttributeLocations=T,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
