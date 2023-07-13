/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../attributes/VertexTextureCoordinates.glsl","../../shaderModules/Float3DrawUniform","../../shaderModules/Float3PassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DDrawUniform","../../shaderModules/Texture2DPassUniform","../../shaderTechnique/BindType","../../../lib/GLTextureMaterial"],(function(e,s,r,o,a,i,t,n,l,u){"use strict";var c;e.PBRMode=void 0,(c=e.PBRMode||(e.PBRMode={}))[c.Disabled=0]="Disabled",c[c.Normal=1]="Normal",c[c.Schematic=2]="Schematic",c[c.Water=3]="Water",c[c.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",c[c.Terrain=5]="Terrain",c[c.TerrainWithWater=6]="TerrainWithWater",c[c.COUNT=7]="COUNT";let d=function(e){function r(){return e.apply(this,arguments)||this}return s._inherits(r,e),s._createClass(r)}(u.GLTextureMaterialBindParameters);function m(s,u){const c=s.fragment,d=u.hasMetallicRoughnessTexture||u.hasEmissionTexture||u.hasOcclusionTexture;if(u.pbrMode===e.PBRMode.Normal&&d&&s.include(r.VertexTextureCoordinates,u),u.pbrMode!==e.PBRMode.Schematic)if(u.pbrMode!==e.PBRMode.Disabled){if(u.pbrMode===e.PBRMode.Normal){c.code.add(i.glsl`vec3 mrr;
vec3 emission;
float occlusion;`);const e=u.pbrTextureBindType;u.hasMetallicRoughnessTexture&&(c.uniforms.add(e===l.BindType.Pass?new n.Texture2DPassUniform("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new t.Texture2DDrawUniform("texMetallicRoughness",(e=>e.textureMetallicRoughness))),c.code.add(i.glsl`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),u.hasEmissionTexture&&(c.uniforms.add(e===l.BindType.Pass?new n.Texture2DPassUniform("texEmission",(e=>e.textureEmissive)):new t.Texture2DDrawUniform("texEmission",(e=>e.textureEmissive))),c.code.add(i.glsl`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),u.hasOcclusionTexture?(c.uniforms.add(e===l.BindType.Pass?new n.Texture2DPassUniform("texOcclusion",(e=>e.textureOcclusion)):new t.Texture2DDrawUniform("texOcclusion",(e=>e.textureOcclusion))),c.code.add(i.glsl`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):c.code.add(i.glsl`float getBakedOcclusion() { return 1.0; }`),e===l.BindType.Pass?c.uniforms.add(new a.Float3PassUniform("emissionFactor",(e=>e.emissiveFactor)),new a.Float3PassUniform("mrrFactors",(e=>e.mrrFactors))):c.uniforms.add(new o.Float3DrawUniform("emissionFactor",(e=>e.emissiveFactor)),new o.Float3DrawUniform("mrrFactors",(e=>e.mrrFactors))),c.code.add(i.glsl`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${u.hasMetallicRoughnessTexture?i.glsl`applyMetallnessAndRoughness(${u.hasMetallicRoughnessTextureTransform?i.glsl`metallicRoughnessUV`:"vuv0"});`:""}

      ${u.hasEmissionTexture?i.glsl`applyEmission(${u.hasEmissiveTextureTransform?i.glsl`emissiveUV`:"vuv0"});`:""}

      ${u.hasOcclusionTexture?i.glsl`applyOcclusion(${u.hasOcclusionTextureTransform?i.glsl`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else c.code.add(i.glsl`float getBakedOcclusion() { return 1.0; }`);else c.code.add(i.glsl`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}e.PBRBindParameters=d,e.PhysicallyBasedRenderingParameters=m,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
