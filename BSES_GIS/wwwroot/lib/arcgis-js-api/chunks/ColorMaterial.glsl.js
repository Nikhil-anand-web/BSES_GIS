/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/TransparencyPassType","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,r,o,l,t,i,a,s,d,n,u,g,p,h,c,b,v,w,C){"use strict";function f(e){const f=new v.ShaderBuilder,{vertex:y,fragment:O,attributes:L,varyings:S}=f;h.addProjViewLocalOrigin(y,e),f.include(t.Transform,e),f.include(a.VertexColor,e),f.include(u.VisualVariables,e),f.include(i.ObjectAndLayerIdColor,e),L.add(C.VertexAttribute.POSITION,"vec3"),e.vvColor&&L.add(C.VertexAttribute.COLORFEATUREATTRIBUTE,"float"),S.add("vColor","vec4"),S.add("vpos","vec3");const T=e.hasMultipassTerrain&&(e.output===o.ShaderOutput.Color||e.output===o.ShaderOutput.Alpha);T&&S.add("depth","float"),y.uniforms.add(new c.Float4PassUniform("eColor",(e=>e.color)));const A=e.output===o.ShaderOutput.Depth;A&&(f.include(s.OutputDepth,e),r.addNearFar(f),r.addLinearDepth(f)),y.code.add(b.glsl`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${e.hasVertexColors?"vColor *= eColor;":e.vvColor?"vColor = eColor * interpolateVVColor(colorFeatureAttribute);":"vColor = eColor;"}
      ${T?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${A?b.glsl`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:b.glsl`transformPosition(proj, view, vpos);`}
    }
  `),f.include(l.SliceDraw,e),T&&f.include(n.multipassTerrainTest,e),O.include(p.ColorConversion);const m=e.output===o.ShaderOutput.Highlight;return m&&f.include(d.OutputHighlight,e),O.code.add(b.glsl`
  void main() {
    discardBySlice(vpos);
    ${T?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 fColor = vColor;

    ${e.output===o.ShaderOutput.ObjectAndLayerIdColor?b.glsl`fColor.a = 1.0;`:""}

    if (fColor.a < ${b.glsl.float(g.symbolAlphaCutoff)}) {
      discard;
    }

    ${e.output===o.ShaderOutput.Alpha?b.glsl`fragColor = vec4(fColor.a);`:""}

    ${e.output===o.ShaderOutput.Color?b.glsl`fragColor = highlightSlice(fColor, vpos); ${e.transparencyPassType===w.TransparencyPassType.Color?"fragColor = premultiplyAlpha(fragColor);":""}`:""}
    ${m?b.glsl`outputHighlight();`:""};
    ${e.output===o.ShaderOutput.Depth?b.glsl`outputDepth(linearDepth);`:""};
    ${e.output===o.ShaderOutput.ObjectAndLayerIdColor?b.glsl`outputObjectAndLayerIdColor();`:""}
  }
  `),f}const y=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}));e.ColorMaterial=y,e.build=f}));
