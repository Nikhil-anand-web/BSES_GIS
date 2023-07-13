/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./mat4","./mat4f64","./vec2","./vec2f64","./vec3","./vec3f64","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/Float3PassUniform","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/ShadowMap"],(function(e,a,o,i,t,r,l,h,s,d,n,c,g,p,u,v,f,w,x,P,m,D){"use strict";const b={highlightedThreshold:.99999,selfShadowThreshold:.025};function S(e){const o=new P.ShaderBuilder;o.include(n.ReadShadowMapDraw,e);const l=o.fragment;return l.include(g.RgbaFloatEncoding),l.include(d.ReadLinearDepth),o.include(c.CameraSpace),o.include(h.ScreenSpacePass),l.uniforms.add(new m.Texture2DPassUniform("defaultDepthTex",((e,a)=>a.shadowMap.getSnapshot(D.SnapshotSlot.Default))),new m.Texture2DPassUniform("highlightDepthTex",((e,a)=>a.shadowMap.getSnapshot(D.SnapshotSlot.Highlight))),new m.Texture2DPassUniform("depthMap",((e,a)=>a.linearDepthTexture)),new m.Texture2DPassUniform("highlightMap",((e,a)=>a.highlightColorTexture)),new v.Float4PassUniform("uColor",(e=>e.shadowColor)),new p.Float2PassUniform("nearFar",((e,a)=>a.camera.nearFar)),new f.FloatPassUniform("opacity",(e=>e.shadowOpacity)),new f.FloatPassUniform("occludedOpacity",(e=>e.occludedShadowOpacity)),new f.FloatPassUniform("terminationFactor",(e=>e.opacityElevation*e.dayNightTerminator)),new u.Float3PassUniform("lightingMainDirectionView",((e,a)=>r.normalize(M,r.transformMat4(M,a.lighting.mainLight.direction,a.camera.viewInverseTransposeMatrix)))),new p.Float2PassUniform("texelSize",((e,a)=>null!=a.linearDepthTexture?i.set(y,1/a.linearDepthTexture.descriptor.width,1/a.linearDepthTexture.descriptor.height):t.ZEROS)),new x.Matrix4PassUniform("inverseViewMatrix",((e,o)=>a.invert(F,a.translate(F,o.camera.viewMatrix,o.camera.center))))),l.constants.add("unoccludedHighlightFlag","vec4",s.unoccludedHighlightFlag).add("highlightedThreshold","float",b.highlightedThreshold).add("selfShadowThreshold","float",b.selfShadowThreshold),l.code.add(w.glsl`vec3 normalFromDepth(vec3 pixelPos, vec2 fragCoord, vec2 uv, vec2 texelSize, sampler2D depthMap, vec2 nearFar) {
float leftPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(-1.0, 0.0) * texelSize, nearFar);
float rightPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(1.0, 0.0) * texelSize, nearFar);
float bottomPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(0.0, -1.0) * texelSize, nearFar);
float topPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(0.0, 1.0) * texelSize, nearFar);
bool pickLeft = abs(pixelPos.z - leftPixelDepth) < abs(pixelPos.z - rightPixelDepth);
bool pickBottom = abs(pixelPos.z - bottomPixelDepth) < abs(pixelPos.z - topPixelDepth);
vec3 fragCoordHorizontal = pickLeft
? vec3(fragCoord + vec2(-1.0, 0.0), leftPixelDepth)
: vec3(fragCoord + vec2(1.0, 0.0), rightPixelDepth);
vec3 fragCoordVertical = pickBottom
? vec3(fragCoord + vec2(0.0, -1.0), bottomPixelDepth)
: vec3(fragCoord + vec2(0.0, 1.0), topPixelDepth);
vec3 verticalPixelPos = reconstructPosition(fragCoordHorizontal.xy, fragCoordHorizontal.z);
vec3 horizontalPixelPos = reconstructPosition(fragCoordVertical.xy, fragCoordVertical.z);
vec3 normal = normalize(cross(verticalPixelPos - pixelPos, horizontalPixelPos - pixelPos));
return pickLeft == pickBottom ? normal : -normal;
}`),l.code.add(w.glsl`void main(void) {
vec4 highlightInfo = texture(highlightMap, uv);
float visiblyHighlighted = (1.0 - clamp(distance(unoccludedHighlightFlag, highlightInfo), 0.0, 1.0)) * highlightInfo.a;
if (visiblyHighlighted > highlightedThreshold) {
discard;
}
float depth = rgba2float(texture(depthMap, uv));
if (depth == 0.0) {
discard;
}
float currentPixelDepth = linearDepthFromFloat(depth, nearFar);
if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
discard;
}
vec4 currentPixelPos = vec4(reconstructPosition(gl_FragCoord.xy, currentPixelDepth), 1.0);
vec4 worldSpacePos = inverseViewMatrix * currentPixelPos;
mat4 shadowMatrix;
float linearDepth = -currentPixelDepth;
int i = chooseCascade(linearDepth, shadowMatrix);
if (i >= numCascades) {
discard;
}
vec3 lvpos = lightSpacePosition(worldSpacePos.xyz, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
discard;
}
vec2 uvShadow = cascadeCoordinates(i, lvpos);
float depthHighlight = readShadowMapDepth(uvShadow, highlightDepthTex);
bool shadowHighlight = depthHighlight < lvpos.z;
if (!shadowHighlight) {
discard;
}
float depthDefault = readShadowMapDepth(uvShadow, defaultDepthTex);
bool shadowDefault = depthDefault < lvpos.z;
vec3 normal = normalFromDepth(currentPixelPos.xyz, gl_FragCoord.xy, uv, texelSize, depthMap, nearFar);
bool shaded = dot(normal, lightingMainDirectionView) < selfShadowThreshold;
float fragOpacity = (shadowDefault || shaded) ? occludedOpacity : opacity;
fragColor = vec4(uColor.rgb, uColor.a * fragOpacity * terminationFactor);
}`),o}const F=o.create(),M=l.create(),y=t.create(),T=Object.freeze(Object.defineProperty({__proto__:null,build:S},Symbol.toStringTag,{value:"Module"}));e.ShadowHighlight=T,e.build=S}));
