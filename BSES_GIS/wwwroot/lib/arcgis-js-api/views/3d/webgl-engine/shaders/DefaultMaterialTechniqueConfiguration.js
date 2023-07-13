/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderLibrary/ShaderOutput","../core/shaderLibrary/attributes/NormalAttribute.glsl","../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../core/shaderLibrary/shading/Normals.glsl","../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/basicInterfaces","../lib/TransparencyPassType","../materials/DefaultTechniqueConfiguration"],(function(e,r,t,o,a,p,s,i,d,c,n,l){"use strict";let u=function(e){function t(){var r;return(r=e.apply(this,arguments)||this).output=o.ShaderOutput.Color,r.alphaDiscardMode=c.AlphaDiscardMode.Opaque,r.doubleSidedMode=s.NormalsDoubleSidedMode.None,r.pbrMode=i.PBRMode.Disabled,r.cullFace=c.CullFaceOptions.None,r.transparencyPassType=n.TransparencyPassType.NONE,r.normalType=a.NormalType.Attribute,r.textureCoordinateType=p.TextureCoordinateAttributeType.None,r.customDepthTest=c.DepthTestFunction.Less,r.spherical=!1,r.hasVertexColors=!1,r.hasSymbolColors=!1,r.hasVerticalOffset=!1,r.hasSlicePlane=!1,r.hasSliceHighlight=!0,r.hasColorTexture=!1,r.hasMetallicRoughnessTexture=!1,r.hasEmissionTexture=!1,r.hasOcclusionTexture=!1,r.hasNormalTexture=!1,r.hasScreenSizePerspective=!1,r.hasVertexTangents=!1,r.hasOccludees=!1,r.hasMultipassTerrain=!1,r.hasModelTransformation=!1,r.offsetBackfaces=!1,r.vvSize=!1,r.vvColor=!1,r.receiveShadows=!1,r.receiveAmbientOcclusion=!1,r.textureAlphaPremultiplied=!1,r.instanced=!1,r.instancedColor=!1,r.objectAndLayerIdColorInstanced=!1,r.instancedDoublePrecision=!1,r.doublePrecisionRequiresObfuscation=!1,r.writeDepth=!0,r.transparent=!1,r.enableOffset=!0,r.cullAboveGround=!1,r.snowCover=!1,r.hasColorTextureTransform=!1,r.hasEmissionTextureTransform=!1,r.hasNormalTextureTransform=!1,r.hasOcclusionTextureTransform=!1,r.hasMetallicRoughnessTextureTransform=!1,r}return r._inherits(t,e),r._createClass(t)}(l.DefaultTechniqueConfiguration);t.__decorate([d.parameter({count:o.ShaderOutput.COUNT})],u.prototype,"output",void 0),t.__decorate([d.parameter({count:c.AlphaDiscardMode.COUNT})],u.prototype,"alphaDiscardMode",void 0),t.__decorate([d.parameter({count:s.NormalsDoubleSidedMode.COUNT})],u.prototype,"doubleSidedMode",void 0),t.__decorate([d.parameter({count:i.PBRMode.COUNT})],u.prototype,"pbrMode",void 0),t.__decorate([d.parameter({count:c.CullFaceOptions.COUNT})],u.prototype,"cullFace",void 0),t.__decorate([d.parameter({count:n.TransparencyPassType.COUNT})],u.prototype,"transparencyPassType",void 0),t.__decorate([d.parameter({count:a.NormalType.COUNT})],u.prototype,"normalType",void 0),t.__decorate([d.parameter({count:p.TextureCoordinateAttributeType.COUNT})],u.prototype,"textureCoordinateType",void 0),t.__decorate([d.parameter({count:c.DepthTestFunction.COUNT})],u.prototype,"customDepthTest",void 0),t.__decorate([d.parameter()],u.prototype,"spherical",void 0),t.__decorate([d.parameter()],u.prototype,"hasVertexColors",void 0),t.__decorate([d.parameter()],u.prototype,"hasSymbolColors",void 0),t.__decorate([d.parameter()],u.prototype,"hasVerticalOffset",void 0),t.__decorate([d.parameter()],u.prototype,"hasSlicePlane",void 0),t.__decorate([d.parameter()],u.prototype,"hasSliceHighlight",void 0),t.__decorate([d.parameter()],u.prototype,"hasColorTexture",void 0),t.__decorate([d.parameter()],u.prototype,"hasMetallicRoughnessTexture",void 0),t.__decorate([d.parameter()],u.prototype,"hasEmissionTexture",void 0),t.__decorate([d.parameter()],u.prototype,"hasOcclusionTexture",void 0),t.__decorate([d.parameter()],u.prototype,"hasNormalTexture",void 0),t.__decorate([d.parameter()],u.prototype,"hasScreenSizePerspective",void 0),t.__decorate([d.parameter()],u.prototype,"hasVertexTangents",void 0),t.__decorate([d.parameter()],u.prototype,"hasOccludees",void 0),t.__decorate([d.parameter()],u.prototype,"hasMultipassTerrain",void 0),t.__decorate([d.parameter()],u.prototype,"hasModelTransformation",void 0),t.__decorate([d.parameter()],u.prototype,"offsetBackfaces",void 0),t.__decorate([d.parameter()],u.prototype,"vvSize",void 0),t.__decorate([d.parameter()],u.prototype,"vvColor",void 0),t.__decorate([d.parameter()],u.prototype,"receiveShadows",void 0),t.__decorate([d.parameter()],u.prototype,"receiveAmbientOcclusion",void 0),t.__decorate([d.parameter()],u.prototype,"textureAlphaPremultiplied",void 0),t.__decorate([d.parameter()],u.prototype,"instanced",void 0),t.__decorate([d.parameter()],u.prototype,"instancedColor",void 0),t.__decorate([d.parameter()],u.prototype,"objectAndLayerIdColorInstanced",void 0),t.__decorate([d.parameter()],u.prototype,"instancedDoublePrecision",void 0),t.__decorate([d.parameter()],u.prototype,"doublePrecisionRequiresObfuscation",void 0),t.__decorate([d.parameter()],u.prototype,"writeDepth",void 0),t.__decorate([d.parameter()],u.prototype,"transparent",void 0),t.__decorate([d.parameter()],u.prototype,"enableOffset",void 0),t.__decorate([d.parameter()],u.prototype,"cullAboveGround",void 0),t.__decorate([d.parameter()],u.prototype,"snowCover",void 0),t.__decorate([d.parameter()],u.prototype,"hasColorTextureTransform",void 0),t.__decorate([d.parameter()],u.prototype,"hasEmissionTextureTransform",void 0),t.__decorate([d.parameter()],u.prototype,"hasNormalTextureTransform",void 0),t.__decorate([d.parameter()],u.prototype,"hasOcclusionTextureTransform",void 0),t.__decorate([d.parameter()],u.prototype,"hasMetallicRoughnessTextureTransform",void 0),t.__decorate([d.parameter({constValue:!0})],u.prototype,"hasVvInstancing",void 0),t.__decorate([d.parameter({constValue:!1})],u.prototype,"useCustomDTRExponentForWater",void 0),t.__decorate([d.parameter({constValue:!1})],u.prototype,"supportsTextureAtlas",void 0),t.__decorate([d.parameter({constValue:!0})],u.prototype,"useFillLights",void 0),e.DefaultMaterialTechniqueConfiguration=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));