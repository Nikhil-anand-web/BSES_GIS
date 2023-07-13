/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../attributes/TextureCoordinateAttribute.glsl","../attributes/VertexTextureCoordinates.glsl","./Normals.glsl","../../shaderModules/interfaces","../../shaderModules/Texture2DDrawUniform","../../shaderModules/Texture2DPassUniform","../../shaderTechnique/BindType","../../../lib/VertexAttribute"],(function(e,t,n,a,r,o,s,d,l){"use strict";function u(e,u){const c=e.fragment;u.hasVertexTangents?(e.attributes.add(l.VertexAttribute.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),u.doubleSidedMode===a.NormalsDoubleSidedMode.WindingOrder?c.code.add(r.glsl`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):c.code.add(r.glsl`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):c.code.add(r.glsl`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),u.textureCoordinateType!==t.TextureCoordinateAttributeType.None&&(e.include(n.VertexTextureCoordinates,u),c.uniforms.add(u.pbrTextureBindType===d.BindType.Pass?new s.Texture2DPassUniform("normalTexture",(e=>e.textureNormal)):new o.Texture2DDrawUniform("normalTexture",(e=>e.textureNormal))),c.code.add(r.glsl`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}e.ComputeNormalTexture=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));