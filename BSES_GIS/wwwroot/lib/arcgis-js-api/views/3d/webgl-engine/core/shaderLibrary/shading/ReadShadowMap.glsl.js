/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../chunks/mat4f64","../../../../../../chunks/vec3f64","../util/RgbaFloatEncoding.glsl","../../shaderModules/Float4PassUniform","../../shaderModules/IntegerPassUniform","../../shaderModules/interfaces","../../shaderModules/Matrix4sDrawUniform","../../shaderModules/Matrix4sPassUniform","../../shaderModules/Texture2DPassUniform"],(function(e,a,s,t,o,i,r,n,d,l,c){"use strict";let h=function(e){function s(){var a;return(a=e.apply(this,arguments)||this).origin=t.create(),a}return a._inherits(s,e),a._createClass(s)}(n.NoParameters),p=function(e){function s(){return e.apply(this,arguments)||this}return a._inherits(s,e),a._createClass(s)}(h),u=function(e){function t(){var a;return(a=e.apply(this,arguments)||this).modelTransformation=s.IDENTITY,a}return a._inherits(t,e),a._createClass(t)}(n.NoParameters),v=function(e){function s(){var a;return(a=e.apply(this,arguments)||this).origin=t.create(),a}return a._inherits(s,e),a._createClass(s)}(u);function f(e,a){a.receiveShadows&&(e.fragment.uniforms.add(new l.Matrix4sPassUniform("shadowMapMatrix",((e,a)=>a.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e))}function x(e,a){a.receiveShadows&&(e.fragment.uniforms.add(new d.Matrix4sDrawUniform("shadowMapMatrix",((e,a)=>a.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e))}function m(e){const a=e.fragment;a.include(o.RgbaFloatEncoding),a.uniforms.add(new c.Texture2DPassUniform("shadowMapTex",((e,a)=>a.shadowMap.depthTexture)),new r.IntegerPassUniform("numCascades",((e,a)=>a.shadowMap.numCascades)),new i.Float4PassUniform("cascadeDistances",((e,a)=>a.shadowMap.cascadeDistances))),a.code.add(n.glsl`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + (numCascades == 1 ? 1.0 : 0.5) * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float texSize, sampler2D _depthTex) {
float halfPixelSize = 0.5 / texSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, float(textureSize(shadowMapTex, 0).x), shadowMapTex);
}`)}e.ReadShadowMapDraw=x,e.ReadShadowMapDrawParameters=p,e.ReadShadowMapParameters=u,e.ReadShadowMapPass=f,e.ReadShadowMapPassParameters=v,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
