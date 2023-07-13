/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../chunks/vec2","../../../../../../chunks/vec2f64","../../../../../../chunks/vec4","../../../../../../chunks/vec4f64","./FoamRendering.glsl","./ReadShadowMap.glsl","../../shaderModules/Float2PassUniform","../../shaderModules/Float4PassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],(function(e,t,r,a,o,s,l,u,v,m,n,i){"use strict";function c(e){e.fragment.uniforms.add(new i.Texture2DPassUniform("texWaveNormal",(e=>e.waveNormal)),new i.Texture2DPassUniform("texWavePerturbation",(e=>e.wavePertubation)),new m.Float4PassUniform("waveParams",(e=>o.set(_,e.waveStrength,e.waveTextureRepeat,e.flowStrength,e.flowOffset))),new v.Float2PassUniform("waveDirection",(e=>r.set(w,e.waveDirection[0]*e.waveVelocity,e.waveDirection[1]*e.waveVelocity)))),e.include(l.FoamIntensity),e.fragment.code.add(n.glsl`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`)}let f=function(e){function r(){return e.apply(this,arguments)||this}return t._inherits(r,e),t._createClass(r)}(u.ReadShadowMapPassParameters);const _=s.create(),w=a.create();e.WaterDistortion=c,e.WaterDistortionPassParameters=f,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
