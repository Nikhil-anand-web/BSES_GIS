/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","./mat4","./mat4f64","./vec3f64","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/Float3PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,r,a,t,o,i,n,s,d,l,c,g,m,u,f,p){"use strict";let v=function(e){function a(){var r;return(r=e.apply(this,arguments)||this).fogColor=o.create(),r.fogStrength=4e-6,r.atmosphereC=1,r.fogAmount=0,r}return r._inherits(a,e),r._createClass(a)}(g.NoParameters);function h(){const e=new u.ShaderBuilder;e.attributes.add(p.VertexAttribute.POSITION,"vec2"),e.include(i.TextureCoordinateAttribute,{textureCoordinateType:i.TextureCoordinateAttributeType.Default}),e.varyings.add("worldRay","vec3"),e.varyings.add("eyeDir","vec3");const{vertex:r,fragment:t}=e;return r.uniforms.add(new m.Matrix4PassUniform("inverseProjectionMatrix",((e,r)=>r.camera.inverseProjectionMatrix)),new m.Matrix4PassUniform("inverseViewMatrix",((e,r)=>a.invertOrIdentity(w,r.camera.viewMatrix)))),r.code.add(g.glsl`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1, 1)).xyz;
eyeDir = posViewNear;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0)).xyz;
forwardTextureCoordinates();
gl_Position = vec4(position, 1, 1);
}`),t.uniforms.add(new c.FloatPassUniform("atmosphereC",(e=>e.atmosphereC)),new l.Float3PassUniform("cameraPosition",((e,r)=>r.camera.eye)),new d.Float2PassUniform("nearFar",((e,r)=>r.camera.nearFar)),new f.Texture2DPassUniform("depthTexture",(e=>e.depthTexture)),new c.FloatPassUniform("fogStrength",(e=>e.fogStrength)),new c.FloatPassUniform("fogAmount",(e=>e.fogAmount)),new l.Float3PassUniform("fogColor",(e=>e.fogColor))),e.include(s.Gamma),t.include(n.ReadLinearDepth),t.code.add(g.glsl`vec2 sphereIntersect(vec3 start, vec3 dir) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float d = (b * b) - 4.0 * a * atmosphereC;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}`),t.code.add(g.glsl`vec4 applyFog(float dist, vec3 rayDir){
if(dist == -1.0){
vec2 rayAtmosphereIntersect = sphereIntersect(cameraPosition, rayDir);
dist = 0.055 * rayAtmosphereIntersect.y;
}
float fogAmount = fogAmount * (1.0 - exp(-dist * fogStrength));
return vec4(fogAmount * fogColor, fogAmount);
}`),t.code.add(g.glsl`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}
void main() {
vec3 rayDir = normalize(worldRay);
float terrainDepth = -1.0;
float depthSample = texture(depthTexture, vuv0).r;
float zNorm = 2.0 * depthSample - 1.0;
float linDepth = 2.0 * nearFar[0] * nearFar[1] / (nearFar[1] + nearFar[0] - zNorm * (nearFar[1] - nearFar[0]));
if(depthSample < 1.0 && depthSample > 0.0){
vec3 cameraSpaceRay = normalize(eyeDir);
cameraSpaceRay /= cameraSpaceRay.z;
cameraSpaceRay *= linDepth;
terrainDepth = max(0.0, length(cameraSpaceRay));
}
vec4 fog = applyFog(terrainDepth, rayDir);
fragColor = delinearizeGamma(vec4(tonemapACES(fog.rgb), fog.a));
}`),e}const w=t.create(),b=Object.freeze(Object.defineProperty({__proto__:null,FogPassParameters:v,build:h},Symbol.toStringTag,{value:"Module"}));e.Fog=b,e.FogPassParameters=v,e.build=h}));
