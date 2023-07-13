/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./vec4","./vec4f64","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,t,i,o,l,r,n,a){"use strict";const s=8.6,u=.4;function c(){const e=new r.ShaderBuilder,{vertex:i,fragment:c}=e,g=i.code,f=c.code;return e.attributes.add(a.VertexAttribute.POSITION,"vec2"),e.varyings.add("uv","vec2"),e.attributes.add(a.VertexAttribute.UV0,"vec2"),i.uniforms.add(new n.Texture2DPassUniform("coverageTex",(e=>e.coverageTexture))),g.add(l.glsl`void main() {
vec4 cov = texture(coverageTex, uv0);
if (cov.r == 0.0) {
gl_Position = vec4(0.0);
return;
}
gl_Position = vec4(position, 0.0, 1.0);
uv = position.xy * 0.5 + vec2(0.5);
}`),c.uniforms.add(new n.Texture2DPassUniform("tex",(e=>e.blurColorTexture)),new n.Texture2DPassUniform("origin",(e=>e.highlightColorTexture)),new o.Float4PassUniform("uColor",(e=>e.color)),new o.Float4PassUniform("haloColor",(e=>e.haloColor)),new o.Float4PassUniform("opacities",(e=>t.set(d,e.haloOpacity,e.haloOpacityOccluded,e.fillOpacity,e.fillOpacityOccluded)))),c.constants.add("outlineSize","float",s),c.constants.add("blurSize","float",u),f.add(l.glsl`void main() {
vec4 blurredHighlightValue = texture(tex, uv);
float highlightIntensity = blurredHighlightValue.a;
if (highlightIntensity == 0.0) {
discard;
}
vec4 origin_color = texture(origin, uv);
float outlineIntensity;
float fillIntensity;
if (blurredHighlightValue.g > blurredHighlightValue.b) {
outlineIntensity = haloColor.w * opacities[1];
fillIntensity = uColor.w * opacities[3];
}
else {
outlineIntensity = haloColor.w * opacities[0];
fillIntensity = uColor.w * opacities[2];
}
float inner = 1.0 - outlineSize / 9.0;
float outer = 1.0 - (outlineSize + blurSize) / 9.0;
float outlineFactor = smoothstep(outer, inner, highlightIntensity);
float fillFactor = any(notEqual(origin_color, vec4(0.0, 0.0, 0.0, 0.0))) ? 1.0 : 0.0;
float intensity = outlineIntensity * outlineFactor * (1.0 - fillFactor) + fillIntensity * fillFactor;
fragColor = vec4(mix(haloColor.rgb, uColor.rgb, fillFactor), intensity);
}`),e}const d=i.create(),g=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:"Module"}));e.HighlightApply=g,e.build=c}));
