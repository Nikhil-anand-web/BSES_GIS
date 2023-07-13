/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/Water.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/WaterDistortion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/TransparencyPassType","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,a,i,r,o,l,t,s,n,d,g,v,c,u,p,h,m,w,b,f,y,C,S,L){"use strict";function P(e){const P=new C.ShaderBuilder,{vertex:O,fragment:D}=P;w.addProjViewLocalOrigin(O,e),P.include(o.Transform,e),P.attributes.add(L.VertexAttribute.POSITION,"vec3"),P.attributes.add(L.VertexAttribute.UV0,"vec2");const M=new b.Float4PassUniform("waterColor",(e=>e.color));if(e.output===i.ShaderOutput.Color&&e.isDraped)return P.varyings.add("vpos","vec3"),O.uniforms.add(M),O.code.add(y.glsl`
        void main(void) {
          if (waterColor.a < ${y.glsl.float(h.symbolAlphaCutoff)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),D.uniforms.add(M),D.code.add(y.glsl`void main() {
fragColor = waterColor;
}`),P;switch(e.output!==i.ShaderOutput.Color&&e.output!==i.ShaderOutput.Alpha||(P.include(g.NormalUtils,e),P.include(a.ForwardLinearDepth,e),P.varyings.add("vuv","vec2"),P.varyings.add("vpos","vec3"),P.varyings.add("vnormal","vec3"),P.varyings.add("vtbnMatrix","mat3"),e.hasMultipassTerrain&&P.varyings.add("depth","float"),O.uniforms.add(M),O.code.add(y.glsl`
      void main(void) {
        if (waterColor.a < ${y.glsl.float(h.symbolAlphaCutoff)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${e.output===i.ShaderOutput.Color?"forwardLinearDepth();":""}
      }
    `)),P.include(d.multipassTerrainTest,e),e.output){case i.ShaderOutput.Alpha:P.include(r.SliceDraw,e),D.uniforms.add(M),D.code.add(y.glsl`
        void main() {
          discardBySlice(vpos);
          ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

          fragColor = vec4(waterColor.a);
        }
      `);break;case i.ShaderOutput.Color:P.include(n.MainLighting),P.include(s.EvaluateAmbientLighting,{pbrMode:v.PBRMode.Disabled,lightingSphericalHarmonicsOrder:2}),P.include(p.WaterDistortion),P.include(r.SliceDraw,e),P.include(c.ReadShadowMapDraw,e),P.include(u.Water,e),D.uniforms.add(M,new f.FloatPassUniform("timeElapsed",(e=>e.timeElapsed)),O.uniforms.get("view"),O.uniforms.get("localOrigin")),w.addCameraPosition(D,e),D.include(m.ColorConversion),n.addMainLightDirection(D),n.addMainLightIntensity(D),D.code.add(y.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${e.receiveShadows?y.glsl`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        fragColor = delinearizeGamma(final);
        fragColor = highlightSlice(fragColor, vpos);
        ${e.transparencyPassType===S.TransparencyPassType.Color?"fragColor = premultiplyAlpha(fragColor);":""}
      }
    `);break;case i.ShaderOutput.Normal:P.include(g.NormalUtils,e),P.include(p.WaterDistortion,e),P.include(r.SliceDraw,e),P.varyings.add("vpos","vec3"),P.varyings.add("vuv","vec2"),O.uniforms.add(M),O.code.add(y.glsl`
        void main(void) {
          if (waterColor.a < ${y.glsl.float(h.symbolAlphaCutoff)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),D.uniforms.add(new f.FloatPassUniform("timeElapsed",(e=>e.timeElapsed))),D.code.add(y.glsl`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
fragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`);break;case i.ShaderOutput.Highlight:P.include(t.OutputHighlight,e),P.varyings.add("vpos","vec3"),O.uniforms.add(M),O.code.add(y.glsl`
      void main(void) {
        if (waterColor.a < ${y.glsl.float(h.symbolAlphaCutoff)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),P.include(r.SliceDraw,e),D.code.add(y.glsl`void main() {
discardBySlice(vpos);
outputHighlight();
}`);break;case i.ShaderOutput.ObjectAndLayerIdColor:P.include(l.ObjectAndLayerIdColor,e),P.varyings.add("vpos","vec3"),O.uniforms.add(M),O.code.add(y.glsl`
      void main(void) {
        if (waterColor.a < ${y.glsl.float(h.symbolAlphaCutoff)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
        forwardObjectAndLayerIdColor();
      }
    `),P.include(r.SliceDraw,e),D.code.add(y.glsl`void main() {
discardBySlice(vpos);
outputObjectAndLayerIdColor();
}`)}return P}const O=Object.freeze(Object.defineProperty({__proto__:null,build:P},Symbol.toStringTag,{value:"Module"}));e.WaterSurface=O,e.build=P}));
