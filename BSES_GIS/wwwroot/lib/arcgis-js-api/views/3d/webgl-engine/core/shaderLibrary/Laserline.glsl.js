/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./output/ReadLinearDepth.glsl","./util/CameraSpace.glsl","../shaderModules/Float2PassUniform","../shaderModules/Float3PassUniform","../shaderModules/FloatPassUniform","../shaderModules/interfaces","../shaderModules/Texture2DPassUniform"],(function(o,e,l,a,r,t,n,s){"use strict";function i(o,i){const d=o.fragment;d.include(e.ReadLinearDepth),o.include(l.CameraSpace),d.uniforms.add(new t.FloatPassUniform("globalAlpha",(o=>o.globalAlpha)),new r.Float3PassUniform("glowColor",(o=>o.glowColor)),new t.FloatPassUniform("glowWidth",((o,e)=>o.glowWidth*e.camera.pixelRatio)),new t.FloatPassUniform("glowFalloff",(o=>o.glowFalloff)),new r.Float3PassUniform("innerColor",(o=>o.innerColor)),new t.FloatPassUniform("innerWidth",((o,e)=>o.innerWidth*e.camera.pixelRatio)),new s.Texture2DPassUniform("depthMap",((o,e)=>e.linearDepthTexture)),new a.Float2PassUniform("nearFar",((o,e)=>e.camera.nearFar)),new s.Texture2DPassUniform("frameColor",((o,e)=>e.mainColorTexture))),d.code.add(n.glsl`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),d.code.add(n.glsl`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),d.code.add(n.glsl`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),d.code.add(n.glsl`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`),i.contrastControlEnabled?(d.uniforms.add(new t.FloatPassUniform("globalAlphaContrastBoost",(o=>null!=o.globalAlphaContrastBoost?o.globalAlphaContrastBoost:1))),d.code.add(n.glsl`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):d.code.add(n.glsl`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}o.Laserline=i,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));
