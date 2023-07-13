/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderLibrary/ShaderOutput","../core/shaderModules/interfaces","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/basicInterfaces","../lib/DefaultVertexAttributeLocations","../lib/OrderIndependentTransparency","../lib/Program","../lib/StencilUtils","../lib/TransparencyPassType","../materials/DefaultTechniqueConfiguration","../../../../chunks/ImageMaterial.glsl","../../../webgl/enums","../../../webgl/renderState"],(function(e,t,a,r,n,i,o,s,l,c,u,p,d,h,f,y,P,g,_){"use strict";let T=function(e){function t(){return e.apply(this,arguments)||this}return a._inherits(t,e),a._createClass(t)}(i.NoParameters),m=function(e){function t(){return e.apply(this,arguments)||this}a._inherits(t,e);var r=t.prototype;return r.initializeProgram=function(e){return new d.Program(e.rctx,t.shader.get().build(this.configuration),u.Default3D)},r._setPipelineState=function(e,t){const a=this.configuration,r=e===f.TransparencyPassType.NONE,i=e===f.TransparencyPassType.FrontFace;return _.makePipelineState({blending:a.output!==n.ShaderOutput.Color&&a.output!==n.ShaderOutput.Alpha||!a.transparent?null:r?O:p.oitBlending(e),culling:_.cullingParams(a.cullFace),depthTest:{func:p.oitDepthTest(e)},depthWrite:r?a.writeDepth?_.defaultDepthWriteParams:null:p.oitDepthWrite(e),colorWrite:_.defaultColorWriteParams,stencilWrite:a.hasOccludees?h.stencilWriteMaskOn:null,stencilTest:a.hasOccludees?t?h.stencilToolMaskBaseParams:h.stencilBaseAllZerosParams:null,polygonOffset:r||i?null:p.getOITPolygonOffset(a.enableOffset)})},r.initializePipeline=function(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)},r.getPipelineState=function(e,r){return r?this._occludeePipelineState:a._get(a._getPrototypeOf(t.prototype),"getPipelineState",this).call(this,e,r)},a._createClass(t)}(s.ShaderTechnique);m.shader=new o.ReloadableShaderModule(P.ImageMaterial,(()=>new Promise(((t,a)=>e(["./ImageMaterial.glsl"],t,a)))));const O=_.simpleBlendingParams(g.BlendFactor.ONE,g.BlendFactor.ONE_MINUS_SRC_ALPHA);let S=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).output=n.ShaderOutput.Color,t.cullFace=c.CullFaceOptions.None,t.hasSlicePlane=!1,t.transparent=!1,t.enableOffset=!0,t.writeDepth=!0,t.hasOccludees=!1,t.transparencyPassType=f.TransparencyPassType.NONE,t.hasMultipassTerrain=!1,t.cullAboveGround=!1,t}return a._inherits(t,e),a._createClass(t)}(y.DefaultTechniqueConfiguration);r.__decorate([l.parameter({count:n.ShaderOutput.COUNT})],S.prototype,"output",void 0),r.__decorate([l.parameter({count:c.CullFaceOptions.COUNT})],S.prototype,"cullFace",void 0),r.__decorate([l.parameter()],S.prototype,"hasSlicePlane",void 0),r.__decorate([l.parameter()],S.prototype,"transparent",void 0),r.__decorate([l.parameter()],S.prototype,"enableOffset",void 0),r.__decorate([l.parameter()],S.prototype,"writeDepth",void 0),r.__decorate([l.parameter()],S.prototype,"hasOccludees",void 0),r.__decorate([l.parameter({count:f.TransparencyPassType.COUNT})],S.prototype,"transparencyPassType",void 0),r.__decorate([l.parameter()],S.prototype,"hasMultipassTerrain",void 0),r.__decorate([l.parameter()],S.prototype,"cullAboveGround",void 0),t.ImageMaterialPassParameters=T,t.ImageMaterialTechnique=m,t.ImageMaterialTechniqueConfiguration=S,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));