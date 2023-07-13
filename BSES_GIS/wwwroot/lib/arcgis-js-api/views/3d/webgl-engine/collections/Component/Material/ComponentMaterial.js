/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../chunks/tslib.es6","../../../../../../core/maybe","../../../../../../chunks/mat3","../../../../../../chunks/mat3f32","../../../../../../chunks/mat3f64","../../../../../../chunks/vec3","../../../../../../chunks/vec3f64","../../../../../../chunks/vec4","../../../../../../chunks/vec4f64","../../../../layers/support/symbolColorUtils","../../../../terrain/interfaces","./ComponentTechnique","./ComponentTechniqueConfiguration","./shader/ComponentData.glsl","../../../../../../chunks/ComponentShader.glsl","./shader/VertexDiscardByOpacity.glsl","../../../core/material/MaterialBase","../../../core/renderPasses/AllRenderPasses","../../../core/shaderLibrary/ShaderOutput","../../../core/shaderLibrary/attributes/NormalAttribute.glsl","../../../core/shaderLibrary/shading/Normals.glsl","../../../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../../../core/shaderLibrary/util/AlphaCutoff","../../../core/shaderLibrary/util/EllipsoidMode","../../../core/util/TwoVectorPosition","../../../lib/basicInterfaces","../../../lib/TransparencyPassType","../../../materials/pbrUtils"],(function(e,r,t,a,o,s,n,i,l,u,d,c,p,m,h,y,M,g,T,v,f,x,C,_,b,P,S,O,w,D){"use strict";let N=function(t){function i(e,r){var a;(a=t.call(this)||this).toMapSpace=r,a.baseColor=d.fromValues(1,1,1,1),a.usePBR=!1,a.hasParametersFromSource=!1,a.mrrFactors=l.fromArray(D.defaultAdvancedMRRFactors),a.emissiveFactor=l.fromValues(0,0,0),a.baseColorTexture=null,a.metallicRoughnessTexture=null,a.emissionTexture=null,a.occlusionTexture=null,a.normalTexture=null,a.objectOpacity=1,a.commonMaterialParameters=new A,a.componentParameters=new k,a.textureAlphaCutoff=b.defaultMaskAlphaCutoff,a.alphaDiscardMode=O.AlphaDiscardMode.Opaque,a.isIntegratedMesh=!1,a.polygonOffsetEnabled=!1,a.ellipsoidMode=P.EllipsoidMode.Earth,a.hasOccludees=!1,a._techniqueConfiguration=new h.ComponentTechniqueConfiguration;const i=new S.TwoVectorPosition(e.position),u=s.clone(e.rotationScale);return o.invert(u,u),a.transformNormalGlobalFromModel=n.clone(o.transpose(u,u)),a.transformWorldFromModelTL=i.low,a.transformWorldFromModelTH=i.high,a.transformWorldFromModelRS=e.rotationScale,a}r._inherits(i,t);var u=i.prototype;return u.dispose=function(){this._technique=a.releaseMaybe(this._technique),this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.emissionTexture=null,this.occlusionTexture=null,this.normalTexture=null},u.prepareTechnique=function(e,r,t,a){const o=this._techniqueConfiguration;o.hasVertexColors=a.colors,o.hasNormals=a.normals,o.textureCoordinateType=a.textureCoordinates,o.hasMetallicRoughnessTexture=null!=this.metallicRoughnessTexture,o.hasEmissionTexture=null!=this.emissionTexture,o.hasOcclusionTexture=null!=this.occlusionTexture,o.hasNormalTexture=null!=this.normalTexture,o.transparencyPassType=r.identifier===v.RenderPassIdentifier.Material&&null!=t.transparencyPassType?t.transparencyPassType:w.TransparencyPassType.NONE,o.hasMultipassTerrain=r.identifier===v.RenderPassIdentifier.Material&&null!=t.multipassTerrain&&t.multipassTerrain.enabled,o.cullAboveGround=r.identifier===v.RenderPassIdentifier.Material&&null!=t.multipassTerrain&&t.multipassTerrain.cullAboveGround,o.ellipsoidMode=this.ellipsoidMode,o.componentData=this.componentParameters.type,o.cullFace=this.commonMaterialParameters.cullFace,o.doubleSidedMode=this.commonMaterialParameters.doubleSided?C.NormalsDoubleSidedMode.View:C.NormalsDoubleSidedMode.None,o.hasBaseColorTexture=null!=this.baseColorTexture;const s=this._computeWhichMaterialPass();o.blendingEnabled=s===R.Transparent||s===R.OpaqueAndTransparent,o.alphaDiscardMode=this.alphaDiscardMode,o.integratedMeshMode=this.isIntegratedMesh?F(t)?M.getOverlayNormalTexture(t)?h.IntegratedMeshMode.ColorOverlayWithWater:h.IntegratedMeshMode.ColorOverlay:h.IntegratedMeshMode.NoOverlay:h.IntegratedMeshMode.None,o.hasPolygonOffset=this.polygonOffsetEnabled;const n=this.hasParametersFromSource&&null==this.baseColorTexture;if(o.pbrMode=o.integratedMeshMode===h.IntegratedMeshMode.ColorOverlayWithWater?_.PBRMode.WaterOnIntegratedMesh:this.usePBR?n?_.PBRMode.Schematic:_.PBRMode.Normal:_.PBRMode.Disabled,o.normalType=o.integratedMeshMode===h.IntegratedMeshMode.None?o.hasNormals?x.NormalType.Compressed:x.NormalType.ScreenDerivative:x.NormalType.Ground,o.hasSlicePlane=null!=t.slicePlane&&this.commonMaterialParameters.hasSlicePlane,r.identifier===v.RenderPassIdentifier.ShadowMap)o.output=f.ShaderOutput.Shadow,o.vertexDiscardMode=g.VertexDiscardMode.None;else if(r.identifier===v.RenderPassIdentifier.Highlight)o.output=f.ShaderOutput.Highlight,o.vertexDiscardMode=g.VertexDiscardMode.None;else{switch(this._computeWhichMaterialPass()===R.OpaqueAndTransparent?o.vertexDiscardMode=r.transparent?g.VertexDiscardMode.Opaque:g.VertexDiscardMode.Transparent:o.vertexDiscardMode=g.VertexDiscardMode.None,o.output=r.output,o.receiveAmbientOcclusion=!1,o.receiveShadows=!1,r.output){case f.ShaderOutput.Color:o.receiveAmbientOcclusion=t.ssaoHelper.active,o.hasOccludees=t.hasOccludees,o.receiveShadows=t.shadowMap.ready,o.hasScreenSpaceReflections=t.ssr.enabled,o.hasCloudsReflections=null!=t.cloudsFade.data;break;case f.ShaderOutput.Alpha:o.hasOccludees=t.hasOccludees;break;case f.ShaderOutput.ObjectAndLayerIdColor:o.objectAndLayerIdColor=!0}o.snowCover=this.hasSnowCover(t)}return this._technique=e.releaseAndAcquire(m.ComponentTechnique,o,this._technique),this._setClean(),this._technique},u.hasSnowCover=function(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover},u.submit=function(r,t,a){if(0===this.objectOpacity)return;const o=a.renderable.geometry,s=a.components,n=a.renderable.meta.cameraDepthSquared,i=s.geometryRanges,l=s.highlightRanges,u=s.defaultShadowMapRanges;switch(this._computeWhichMaterialPass()){case R.Opaque:r.materialOpaque.submitDraw(this,o,i,n);break;case R.Transparent:r.materialTransparent.submitDraw(this,o,i,n);break;case R.OpaqueAndTransparent:r.materialOpaque.submitDraw(this,o,i,n),r.materialTransparent.submitDraw(this,o,i,n);break;case R.IntegratedMesh:r.materialIntegratedMesh.submitDraw(this,o,i,n),B(t)&&r.highlightIntegratedMesh.submitDraw(this,o,i,n)}const d=this.componentParameters.castShadows!==e.ComponentParameterSummary.None;d&&r.shadowMap.submitDraw(this,o,i,n),null!=l&&(r.highlight.submitDraw(this,o,l,n),d&&r.highlightShadowMap.submitDraw(this,o,l,n)),d&&null!=u&&r.defaultShadowMap.submitDraw(this,o,u,n)},u._computeWhichMaterialPass=function(){return this.isIntegratedMesh?R.IntegratedMesh:this.objectOpacity<1?R.Transparent:this.componentParameters.opaqueOverride===e.ComponentParameterSummary.All?R.Opaque:this.baseColor[3]<1||this.alphaDiscardMode===O.AlphaDiscardMode.Blend||this.alphaDiscardMode===O.AlphaDiscardMode.MaskBlend?R.Transparent:this.componentParameters.transparent===e.ComponentParameterSummary.None?R.Opaque:this.componentParameters.transparent===e.ComponentParameterSummary.All?R.Transparent:R.OpaqueAndTransparent},r._createClass(i,[{key:"texture",get:function(){return null!=this.baseColorTexture?this.baseColorTexture.glTexture:null}},{key:"textureMetallicRoughness",get:function(){return null!=this.metallicRoughnessTexture?this.metallicRoughnessTexture.glTexture:null}},{key:"textureEmissive",get:function(){return null!=this.emissionTexture?this.emissionTexture.glTexture:null}},{key:"textureOcclusion",get:function(){return null!=this.occlusionTexture?this.occlusionTexture.glTexture:null}},{key:"textureNormal",get:function(){return null!=this.normalTexture?this.normalTexture.glTexture:null}}]),i}(T.MaterialBase);var R;t.__decorate([T.parameter({vectorOps:u.vec4})],N.prototype,"baseColor",void 0),t.__decorate([T.parameter()],N.prototype,"usePBR",void 0),t.__decorate([T.parameter()],N.prototype,"hasParametersFromSource",void 0),t.__decorate([T.parameter({vectorOps:i.vec3})],N.prototype,"mrrFactors",void 0),t.__decorate([T.parameter({vectorOps:i.vec3})],N.prototype,"emissiveFactor",void 0),t.__decorate([T.parameter({dispose:!0})],N.prototype,"baseColorTexture",void 0),t.__decorate([T.parameter({dispose:!0})],N.prototype,"metallicRoughnessTexture",void 0),t.__decorate([T.parameter({dispose:!0})],N.prototype,"emissionTexture",void 0),t.__decorate([T.parameter({dispose:!0})],N.prototype,"occlusionTexture",void 0),t.__decorate([T.parameter({dispose:!0})],N.prototype,"normalTexture",void 0),t.__decorate([T.parameter()],N.prototype,"objectOpacity",void 0),t.__decorate([T.parameterBlock()],N.prototype,"commonMaterialParameters",void 0),t.__decorate([T.parameterBlock()],N.prototype,"componentParameters",void 0),t.__decorate([T.parameter()],N.prototype,"textureAlphaCutoff",void 0),t.__decorate([T.parameter()],N.prototype,"alphaDiscardMode",void 0),t.__decorate([T.parameter()],N.prototype,"isIntegratedMesh",void 0),t.__decorate([T.parameter()],N.prototype,"polygonOffsetEnabled",void 0),t.__decorate([T.parameter()],N.prototype,"ellipsoidMode",void 0),t.__decorate([T.parameter()],N.prototype,"hasOccludees",void 0),function(e){e[e.Opaque=0]="Opaque",e[e.Transparent=1]="Transparent",e[e.OpaqueAndTransparent=2]="OpaqueAndTransparent",e[e.IntegratedMesh=3]="IntegratedMesh"}(R||(R={}));let A=function(e){function t(){var r;return(r=e.apply(this,arguments)||this).doubleSided=!1,r.cullFace=O.CullFaceOptions.Back,r.hasSlicePlane=!0,r}return r._inherits(t,e),r._createClass(t)}(T.MaterialParameterBlock);t.__decorate([T.parameter()],A.prototype,"doubleSided",void 0),t.__decorate([T.parameter()],A.prototype,"cullFace",void 0),t.__decorate([T.parameter()],A.prototype,"hasSlicePlane",void 0);let k=function(t){function a(){var r;return(r=t.apply(this,arguments)||this).externalColor=d.fromValues(1,1,1,1),r.externalColorMixMode=c.ColorMixModeEnum.Multiply,r.castShadows=e.ComponentParameterSummary.All,r}return r._inherits(a,t),r._createClass(a,[{key:"transparent",get:function(){return this.externalColor[3]<1?e.ComponentParameterSummary.All:e.ComponentParameterSummary.None}},{key:"opaqueOverride",get:function(){return this.externalColorMixMode===c.ColorMixModeEnum.Replace&&1===this.externalColor[3]?e.ComponentParameterSummary.All:e.ComponentParameterSummary.None}},{key:"visible",get:function(){return this.externalColor[3]>0?e.ComponentParameterSummary.All:e.ComponentParameterSummary.None}},{key:"type",get:function(){return y.ComponentDataType.Uniform}}]),a}(T.MaterialParameterBlock);var q;t.__decorate([T.parameter({vectorOps:u.vec4})],k.prototype,"externalColor",void 0),t.__decorate([T.parameter()],k.prototype,"externalColorMixMode",void 0),t.__decorate([T.parameter()],k.prototype,"castShadows",void 0),e.ComponentParameterSummary=void 0,(q=e.ComponentParameterSummary||(e.ComponentParameterSummary={}))[q.All=0]="All",q[q.Some=1]="Some",q[q.None=2]="None";let I=function(t){function a(){var r;return(r=t.apply(this,arguments)||this).texture=null,r.transparent=e.ComponentParameterSummary.None,r.opaqueOverride=e.ComponentParameterSummary.None,r.castShadows=e.ComponentParameterSummary.None,r}return r._inherits(a,t),r._createClass(a,[{key:"type",get:function(){return y.ComponentDataType.Varying}}]),a}(T.MaterialParameterBlock);function B(e){return 0!==e.overlays.length&&null!=e.overlays[p.OverlayIndex.INNER].getValidTexture(p.RenderTargetType.Highlight)}function F(e){return 0!==e.overlays.length&&null!=e.overlays[p.OverlayIndex.INNER].getColorTextureNoRasterImage()}t.__decorate([T.parameter()],I.prototype,"texture",void 0),t.__decorate([T.parameter()],I.prototype,"transparent",void 0),t.__decorate([T.parameter()],I.prototype,"opaqueOverride",void 0),t.__decorate([T.parameter()],I.prototype,"castShadows",void 0),e.CommonMaterialParameters=A,e.ComponentMaterial=N,e.ComponentParametersUniform=k,e.ComponentParametersVarying=I,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
