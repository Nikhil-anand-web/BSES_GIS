/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform","../../../lib/SSAOHelper"],(function(e,s,t,r){"use strict";function n(e,n){const a=e.fragment;n.receiveAmbientOcclusion?(a.uniforms.add(new t.Texture2DPassUniform("ssaoTex",((e,s)=>s.ssaoHelper.colorTexture))),a.constants.add("blurSizePixelsInverse","float",1/r.blurSizePixels),a.code.add(s.glsl`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):a.code.add(s.glsl`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}e.EvaluateAmbientOcclusion=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
