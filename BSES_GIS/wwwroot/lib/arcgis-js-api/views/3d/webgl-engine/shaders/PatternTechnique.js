/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderLibrary/ShaderOutput","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/basicInterfaces","../lib/OrderIndependentTransparency","../lib/Program","../lib/StencilUtils","../lib/TransparencyPassType","../lib/VertexAttribute","../materials/DefaultTechniqueConfiguration","../materials/PatternStyle","../../../../chunks/Pattern.glsl","../../../webgl/renderState"],(function(e,t,r,a,o,i,n,s,l,p,c,u,d,h,y,_,f,T){"use strict";let P=function(e){function t(){return e.apply(this,arguments)||this}r._inherits(t,e);var a=t.prototype;return a.initializeProgram=function(e){return new c.Program(e.rctx,t.shader.get().build(this.configuration),v)},a._setPipelineState=function(e,t){const r=this.configuration,a=e===d.TransparencyPassType.NONE,i=e===d.TransparencyPassType.FrontFace;return T.makePipelineState({blending:r.output===o.ShaderOutput.Color||r.output===o.ShaderOutput.Alpha?a?p.blendingDefault:p.oitBlending(e):null,culling:T.cullingParams(r.cullFace),depthTest:{func:p.oitDepthTest(e)},depthWrite:a?r.writeDepth?T.defaultDepthWriteParams:null:p.oitDepthWrite(e),colorWrite:T.defaultColorWriteParams,stencilWrite:r.hasOccludees?u.stencilWriteMaskOn:null,stencilTest:r.hasOccludees?t?u.stencilToolMaskBaseParams:u.stencilBaseAllZerosParams:null,polygonOffset:a||i?r.polygonOffset?O:null:p.getOITPolygonOffset(r.enableOffset)})},a.initializePipeline=function(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)},a.getPipelineState=function(e,a){return a?this._occludeePipelineState:r._get(r._getPrototypeOf(t.prototype),"getPipelineState",this).call(this,e,a)},r._createClass(t)}(n.ShaderTechnique);P.shader=new i.ReloadableShaderModule(f.Pattern,(()=>new Promise(((t,r)=>e(["./Pattern.glsl"],t,r)))));const O={factor:1,units:1};let g=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).output=o.ShaderOutput.Color,t.cullFace=l.CullFaceOptions.None,t.transparencyPassType=d.TransparencyPassType.NONE,t.hasSlicePlane=!1,t.hasVertexColors=!1,t.polygonOffset=!1,t.writeDepth=!0,t.hasOccludees=!1,t.enableOffset=!0,t.hasMultipassTerrain=!1,t.cullAboveGround=!1,t.vvColor=!1,t}return r._inherits(t,e),r._createClass(t)}(y.DefaultTechniqueConfiguration);a.__decorate([s.parameter({count:o.ShaderOutput.COUNT})],g.prototype,"output",void 0),a.__decorate([s.parameter({count:l.CullFaceOptions.COUNT})],g.prototype,"cullFace",void 0),a.__decorate([s.parameter({count:_.Style.COUNT})],g.prototype,"style",void 0),a.__decorate([s.parameter({count:d.TransparencyPassType.COUNT})],g.prototype,"transparencyPassType",void 0),a.__decorate([s.parameter()],g.prototype,"hasSlicePlane",void 0),a.__decorate([s.parameter()],g.prototype,"hasVertexColors",void 0),a.__decorate([s.parameter()],g.prototype,"polygonOffset",void 0),a.__decorate([s.parameter()],g.prototype,"writeDepth",void 0),a.__decorate([s.parameter()],g.prototype,"hasOccludees",void 0),a.__decorate([s.parameter()],g.prototype,"patternSpacing",void 0),a.__decorate([s.parameter()],g.prototype,"lineWidth",void 0),a.__decorate([s.parameter()],g.prototype,"enableOffset",void 0),a.__decorate([s.parameter()],g.prototype,"draped",void 0),a.__decorate([s.parameter()],g.prototype,"hasMultipassTerrain",void 0),a.__decorate([s.parameter()],g.prototype,"cullAboveGround",void 0),a.__decorate([s.parameter()],g.prototype,"vvColor",void 0),a.__decorate([s.parameter({constValue:!1})],g.prototype,"hasVvInstancing",void 0),a.__decorate([s.parameter({constValue:!1})],g.prototype,"vvSize",void 0),a.__decorate([s.parameter({constValue:!1})],g.prototype,"vvOpacity",void 0);const v=new Map([[h.VertexAttribute.POSITION,0],[h.VertexAttribute.COLOR,3],[h.VertexAttribute.UVMAPSPACE,4],[h.VertexAttribute.COLORFEATUREATTRIBUTE,5],[h.VertexAttribute.BOUNDINGRECT,6]]);t.PatternTechnique=P,t.PatternTechniqueConfiguration=g,t.vertexAttributeLocations=v,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));