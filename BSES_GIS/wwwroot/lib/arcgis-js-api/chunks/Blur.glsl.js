/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/VertexAttribute","../views/3d/webgl-engine/shaders/SMAAPassParameters"],(function(e,t,o,s,r,i){"use strict";function a(){const e=new o.ShaderBuilder,{attributes:a,varyings:f,vertex:u,fragment:n}=e;return a.add(r.VertexAttribute.POSITION,"vec2"),f.add("uv","vec2"),f.add("offsets[2]","vec4"),i.addResolutionUniform(u),u.code.add(t.glsl`void main() {
uv = position * 0.5 + vec2(0.5);
gl_Position = vec4(position, 0, 1);
offsets[0] = uv.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 );
offsets[1] = uv.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 );
}`),n.uniforms.add(new s.Texture2DPassUniform("blendWeightsTexture",(e=>e.blend.colorTexture)),new s.Texture2DPassUniform("colorTexture",(e=>e.colorTexture))),i.addResolutionUniform(n),n.code.add(t.glsl`void main() {
vec4 a;
a.rb = texture(blendWeightsTexture, uv).rb;
a.g = texture(blendWeightsTexture, offsets[1].zw).g;
a.a = texture(blendWeightsTexture, offsets[1].xy).a;
if ( dot(a, vec4(1.0)) < 1e-5 ) {
fragColor = texture( colorTexture, uv, 0.0 );
} else {
vec2 offset;
offset.x = a.a > a.b ? a.a : -a.b;
offset.y = a.g > a.r ? -a.g : a.r;
if ( abs( offset.x ) > abs( offset.y )) {
offset.y = 0.0;
} else {
offset.x = 0.0;
}
vec4 C = texture( colorTexture, uv, 0.0 );
vec4 Cop = texture( colorTexture, uv + sign( offset ) * resolution.xy, 0.0 );
float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );
fragColor = mix(C, Cop, s);
}
}`),e}const f=Object.freeze(Object.defineProperty({__proto__:null,build:a},Symbol.toStringTag,{value:"Module"}));e.Blur=f,e.build=a}));
