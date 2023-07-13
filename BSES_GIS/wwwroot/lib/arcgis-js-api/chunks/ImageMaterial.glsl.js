/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/TransparencyPassType","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,r,a,i,s,o,l,t,d,n,g,u,c,p){"use strict";function v(e){const v=new g.ShaderBuilder,{vertex:h,fragment:f}=v;return t.addProjViewLocalOrigin(h,e),v.include(i.Transform,e),v.attributes.add(p.VertexAttribute.POSITION,"vec3"),v.attributes.add(p.VertexAttribute.UV0,"vec2"),v.varyings.add("vpos","vec3"),e.hasMultipassTerrain&&v.varyings.add("depth","float"),h.code.add(n.glsl`
    void main(void) {
      vpos = position;
      ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),v.include(a.SliceDraw,e),v.include(s.multipassTerrainTest,e),f.uniforms.add(new u.Texture2DPassUniform("tex",(e=>e.texture)),new d.FloatPassUniform("opacity",(e=>e.opacity))),v.varyings.add("vTexCoord","vec2"),e.output===r.ShaderOutput.Alpha?f.code.add(n.glsl`
    void main() {
      discardBySlice(vpos);
      ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${n.glsl.float(o.defaultMaskAlphaCutoff)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(f.include(l.ColorConversion),f.code.add(n.glsl`
    void main() {
      discardBySlice(vpos);
      ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${n.glsl.float(o.defaultMaskAlphaCutoff)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${e.transparencyPassType===c.TransparencyPassType.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),v}const h=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}));e.ImageMaterial=h,e.build=v}));
