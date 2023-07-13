/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderLibrary/ShaderOutput","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/basicInterfaces","../lib/OrderIndependentTransparency","../lib/Program","../lib/TransparencyPassType","../lib/VertexAttribute","../materials/DefaultTechniqueConfiguration","../../../../chunks/ShadedColorMaterial.glsl","../../../webgl/enums","../../../webgl/renderState"],(function(e,t,r,a,n,o,i,l,u,p,s,c,d,h,y,T,S){"use strict";let b=function(e){function t(){return e.apply(this,arguments)||this}r._inherits(t,e);var a=t.prototype;return a.initializeProgram=function(e){return new s.Program(e.rctx,t.shader.get().build(this.configuration),g)},a._setPipelineState=function(e){const t=this.configuration,r=e===c.TransparencyPassType.NONE,a=e===c.TransparencyPassType.FrontFace;return S.makePipelineState({blending:t.output!==n.ShaderOutput.Color&&t.output!==n.ShaderOutput.Alpha||!t.transparent?null:r?p.blendingDefault:p.oitBlending(e),culling:S.cullingParams(t.cullFace),depthTest:{func:a?T.CompareFunction.LESS:t.shadingEnabled?T.CompareFunction.LEQUAL:T.CompareFunction.LESS},depthWrite:r?t.writeDepth?S.defaultDepthWriteParams:null:p.oitDepthWrite(e),colorWrite:S.defaultColorWriteParams,polygonOffset:r||a?null:p.OITPolygonOffset})},a.initializePipeline=function(){return this._setPipelineState(this.configuration.transparencyPassType)},r._createClass(t)}(i.ShaderTechnique);b.shader=new o.ReloadableShaderModule(y.ShadedColorMaterialShader,(()=>new Promise(((t,r)=>e(["./ShadedColorMaterial.glsl"],t,r)))));let f=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).output=n.ShaderOutput.Color,t.cullFace=u.CullFaceOptions.None,t.transparencyPassType=c.TransparencyPassType.NONE,t.hasSlicePlane=!1,t.transparent=!1,t.writeDepth=!0,t.screenSizeEnabled=!0,t.shadingEnabled=!0,t.hasMultipassTerrain=!1,t.cullAboveGround=!1,t}return r._inherits(t,e),r._createClass(t)}(h.DefaultTechniqueConfiguration);a.__decorate([l.parameter({count:n.ShaderOutput.COUNT})],f.prototype,"output",void 0),a.__decorate([l.parameter({count:u.CullFaceOptions.COUNT})],f.prototype,"cullFace",void 0),a.__decorate([l.parameter({count:c.TransparencyPassType.COUNT})],f.prototype,"transparencyPassType",void 0),a.__decorate([l.parameter()],f.prototype,"hasSlicePlane",void 0),a.__decorate([l.parameter()],f.prototype,"transparent",void 0),a.__decorate([l.parameter()],f.prototype,"writeDepth",void 0),a.__decorate([l.parameter()],f.prototype,"screenSizeEnabled",void 0),a.__decorate([l.parameter()],f.prototype,"shadingEnabled",void 0),a.__decorate([l.parameter()],f.prototype,"hasMultipassTerrain",void 0),a.__decorate([l.parameter()],f.prototype,"cullAboveGround",void 0);const g=new Map([[d.VertexAttribute.POSITION,0],[d.VertexAttribute.NORMAL,1],[d.VertexAttribute.OFFSET,2]]);t.ShadedColorMaterialTechnique=b,t.ShadedColorMaterialTechniqueConfiguration=f,t.vertexAttributeLocations=g,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));