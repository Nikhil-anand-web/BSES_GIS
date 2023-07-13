/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","./vec2","./vec2f64","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,t,r,s,i,o,n,a,l){"use strict";let u=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).scale=s.create(),t}return t._inherits(r,e),t._createClass(r)}(o.NoParameters);function d(e){const t=new n.ShaderBuilder;t.attributes.add(l.VertexAttribute.POSITION,"vec2"),t.varyings.add("uv0","vec2"),t.varyings.add("uv1","vec2"),t.vertex.uniforms.add(new i.Float2PassUniform("scale",(e=>e.scale))),t.vertex.code.add(o.glsl`void main(void) {
gl_Position = vec4(position, 0.0, 1.0);
uv0 = position * 0.5 + vec2(0.5);
uv1 = (position * 0.5 + vec2(0.5)) * scale;
}`),t.fragment.uniforms.add(new a.Texture2DPassUniform("tex",(e=>e.texture)),new a.Texture2DPassUniform("depthTexture",(e=>e.depthTexture)),new i.Float2PassUniform("scale",(e=>e.scale)),new i.Float2PassUniform("clampUV",(e=>c(e))));const r=e.haze;return t.fragment.code.add(o.glsl`
    void main() {
      ${r?o.glsl`vec4`:o.glsl`float`} depthSample = texture(depthTexture, uv0) ${r?"":o.glsl`.r`};
      if (depthSample ${r?o.glsl`== vec4(0)`:o.glsl`!= 1.0`} ) {
          fragColor = vec4(0);
          return;
      }
      fragColor = texture(tex, min(uv1, clampUV));
    }
    `),t}function c(e){if(!e.texture)return v;const t=r.set(v,e.texture.descriptor.width,e.texture.descriptor.height),s=r.multiply(t,t,e.scale),i=r.inverse(s,s);return r.sub(i,e.scale,i)}const v=s.create(),g=Object.freeze(Object.defineProperty({__proto__:null,AtmosphereCompositingPassParameters:u,build:d},Symbol.toStringTag,{value:"Module"}));e.AtmosphereCompositing=g,e.AtmosphereCompositingPassParameters=u,e.build=d}));
