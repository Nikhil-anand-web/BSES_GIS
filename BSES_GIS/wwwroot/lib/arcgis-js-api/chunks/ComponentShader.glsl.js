/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../geometry/support/Ellipsoid","../views/3d/terrain/interfaces","../views/3d/webgl-engine/collections/Component/Material/ComponentTechniqueConfiguration","../views/3d/webgl-engine/collections/Component/Material/shader/ComponentData.glsl","../views/3d/webgl-engine/collections/Component/Material/shader/VertexDiscardByOpacity.glsl","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeMaterialColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeShadingNormal.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadBaseColorTexture.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/EllipsoidMode","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/TransparencyPassType"],(function(e,r,o,a,l,t,i,d,n,s,c,g,u,v,h,m,C,p,w,b,y,x,f,M,T,S,O,L,N,P,A,R,B,D){"use strict";function W(e){const o=new R.ShaderBuilder;o.include(v.VertexPosition,e),o.include(u.VertexNormal,e),o.include(g.VertexColor,e),o.include(c.TextureCoordinateAttribute,e),o.include(i.ForwardLinearDepth,e),o.include(l.ComponentData,e),o.include(N.DiscardOrAdjustAlphaDraw,e),o.include(n.SlicePass,e),o.include(T.ReadBaseColorTexture,e),o.include(t.VertexDiscardByOpacity,e);const{vertex:W,fragment:j}=o;e.pbrMode!==M.PBRMode.Normal&&e.pbrMode!==M.PBRMode.Schematic||(o.include(M.PhysicallyBasedRenderingParameters,e),e.hasNormalTexture&&o.include(w.ComputeNormalTexture,e));const z=e.output===d.ShaderOutput.Shadow||e.output===d.ShaderOutput.ShadowHighlight||e.output===d.ShaderOutput.ShadowExcludeHighlight;z&&e.componentData===l.ComponentDataType.Varying?W.code.add(A.glsl`#define discardShadows(castShadows) { if(!castShadows) { gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`):W.code.add(A.glsl`#define discardShadows(castShadows) {}`);const E=e.integratedMeshMode===a.IntegratedMeshMode.ColorOverlay||e.integratedMeshMode===a.IntegratedMeshMode.ColorOverlayWithWater,I=E&&e.output===d.ShaderOutput.Color&&e.pbrMode===M.PBRMode.WaterOnIntegratedMesh;return E&&(o.include(y.EvaluateSceneLighting,e),o.include(O.OverlayIM,e),e.spherical?W.code.add(A.glsl`
      const float invEllipsoidRadius = ${A.glsl.float(1/(e.ellipsoidMode===P.EllipsoidMode.Earth?r.earth.radius:e.ellipsoidMode===P.EllipsoidMode.Mars?r.mars.radius:r.moon.radius))};
      vec2 projectOverlay(vec3 pos) {
        return pos.xy / (1.0 + invEllipsoidRadius * pos.z);
      }
      `):W.code.add(A.glsl`vec2 projectOverlay(vec3 pos) { return pos.xy; }`)),I&&(o.varyings.add("tbnTangent","vec3"),o.varyings.add("tbnBiTangent","vec3"),o.varyings.add("groundNormal","vec3")),W.code.add(A.glsl`
    void main() {
      bool castShadows;
      vec4 externalColor = forwardExternalColor(castShadows);
      discardShadows(castShadows);

      vertexDiscardByOpacity(externalColor.a);

      ${e.output===d.ShaderOutput.ObjectAndLayerIdColor?A.glsl`externalColor.a = 1.0;`:""}

      if (externalColor.a < ${A.glsl.float(L.symbolAlphaCutoff)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      forwardPosition(readElevationOffset());
      forwardNormal();
      forwardTextureCoordinates();
      forwardVertexColor();
      forwardLinearDepth();
      ${e.output===d.ShaderOutput.ObjectAndLayerIdColor?A.glsl`forwardObjectAndLayerIdColor();`:""}
      ${I?e.spherical?A.glsl`
                groundNormal = normalize(positionWorld());
                tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), groundNormal));
                tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`:A.glsl`
                groundNormal = vec3(0.0, 0.0, 1.0);
                tbnTangent = vec3(1.0, 0.0, 0.0);
                tbnBiTangent = vec3(0.0, 1.0, 0.0);`:""}
      ${E?A.glsl`setOverlayVTC(projectOverlay(position));`:""}
    }
  `),e.output===d.ShaderOutput.Alpha&&(j.include(C.ReadLinearDepth),o.include(f.multipassTerrainTest,e),o.include(p.ComputeMaterialColor,e),E&&j.uniforms.add(new B.Texture2DPassUniform("ovColorTex",((e,r)=>O.getColorTexture(e,r)))),j.code.add(A.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${e.hasMultipassTerrain?A.glsl`terrainDepthTest(gl_FragCoord, vPosition_view.z);`:""}

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        vec4 externalColor;
        int externalColorMixMode;
        readExternalColor(externalColor, externalColorMixMode);

        vec4 materialColor = computeMaterialColor(
          textureColor,
          externalColor,
          externalColorMixMode
        );
        ${E?A.glsl`
                vec4 overlayColor = getOverlayColor(ovColorTex, vtcOverlay);
                materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        fragColor = vec4(materialColor.a);
      }
    `)),e.output===d.ShaderOutput.Color&&(j.include(C.ReadLinearDepth),o.include(f.multipassTerrainTest,e),o.include(p.ComputeMaterialColor,e),o.include(b.ComputeShadingNormal,e),o.include(y.EvaluateSceneLighting,e),e.receiveShadows?(o.include(S.ReadShadowMapPass,e),j.code.add(A.glsl`float evaluateShadow() {
return readShadowMap(vPositionWorldCameraRelative, linearDepth);
}`)):j.code.add(A.glsl`float evaluateShadow() { return 0.0; }`),E&&j.uniforms.add(new B.Texture2DPassUniform("ovColorTex",((e,r)=>O.getColorTexture(e,r)))),j.code.add(A.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${e.hasMultipassTerrain?A.glsl`terrainDepthTest(gl_FragCoord, vPosition_view.z);`:""}

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        vec4 externalColor;
        int externalColorMixMode;
        readExternalColor(externalColor, externalColorMixMode);

        vec4 materialColor = computeMaterialColor(
          textureColor,
          externalColor,
          externalColorMixMode
        );
        ${E?A.glsl`vec4 overlayColor = getOverlayColor(ovColorTex, vtcOverlay);`:""}
    `),e.pbrMode===M.PBRMode.Normal||e.pbrMode===M.PBRMode.Schematic?(x.addMainLightIntensity(j),j.code.add(A.glsl`
        ${e.pbrMode===M.PBRMode.Normal?A.glsl`
                applyPBRFactors();
                if (int(externalColorMixMode) == 3) {
                  mrr = vec3(0.0, 0.6, 0.2);
                }`:""}
        vec3 normalVertex = shadingNormalWorld();
        float additionalIrradiance = 0.02 * mainLightIntensity[2];
      `),e.hasNormalTexture?j.code.add(A.glsl`mat3 tangentSpace = computeTangentSpace(normalVertex, vPositionWorldCameraRelative, vuv0);
vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`):j.code.add(A.glsl`vec3 shadingNormal = normalVertex;`),j.code.add(A.glsl`${e.spherical?A.glsl`vec3 normalGround = normalize(positionWorld());`:A.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`}
      `),j.code.add(A.glsl`
        vec3 viewDir = normalize(vPositionWorldCameraRelative);
        float ssao = 1.0 - occlusion * (1.0 - evaluateAmbientOcclusion());

        ${e.snowCover?A.glsl`
                vec3 surfaceNormal = normalize(shadingNormalWorld());
                float snow = smoothstep(0.5, 0.55, dot(surfaceNormal, normalize(positionWorld())));
                materialColor.rgb = mix(materialColor.rgb, vec3(1), snow);

                shadingNormal = mix(shadingNormal, surfaceNormal, snow);
                ssao = mix(ssao, 0.0, snow);
                mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                emission = mix(emission, vec3(0.0), snow);`:""}

        ${E?A.glsl` materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        vec3 additionalLight = evaluateAdditionalLighting(ssao, positionWorld());
        vec4 shadedColor = vec4(evaluateSceneLightingPBR(shadingNormal, materialColor.rgb, evaluateShadow(), ssao, additionalLight, viewDir, normalGround, mrr, emission, additionalIrradiance), materialColor.a);
        `)):(e.receiveShadows?j.code.add(A.glsl`float shadow = evaluateShadow();`):e.spherical?(y.addLightingGlobalFactor(j),j.code.add(A.glsl`float additionalAmbientScale = additionalDirectedAmbientLight(positionWorld());
float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);`)):j.code.add(A.glsl`float shadow = 0.0;`),I&&j.uniforms.add(new B.Texture2DPassUniform("ovNormalTex",((e,r)=>$(r)))),e.snowCover&&j.code.add(A.glsl`vec3 surfaceNormal = normalize(cross(dFdx(vPositionWorldCameraRelative), dFdy(vPositionWorldCameraRelative)));
float snow = smoothstep(0.5, 0.55, dot(surfaceNormal, normalize(positionWorld())));
materialColor.rgb = mix(materialColor.rgb, vec3(1), snow);`),j.code.add(A.glsl`
        float ambientOcclusion = evaluateAmbientOcclusion();
        vec3 additionalLight = evaluateAdditionalLighting(ambientOcclusion, positionWorld());

        ${E?A.glsl` materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        vec4 shadedColor = vec4(evaluateSceneLighting(shadingNormalWorld(), materialColor.rgb, shadow, ambientOcclusion, additionalLight), materialColor.a);
      ${I?A.glsl`
              vec4 overlayWaterMask = getOverlayColor(ovNormalTex, vtcOverlay);
              float waterNormalLength = length(overlayWaterMask);
              if (waterNormalLength > 0.95) {
                mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, groundNormal);
                vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, overlayColor, -normalize(vPositionWorldCameraRelative), shadow, groundNormal, tbnMatrix, vPosition_view, positionWorld());
                vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                // un-gamma the ground color to mix in linear space
                shadedColor = mix(shadedColor, waterColorNonLinear, waterColorLinear.w);
              }`:""}
      `)),j.code.add(A.glsl`
        fragColor = highlightSlice(shadedColor, vPositionWorldCameraRelative);
        ${e.transparencyPassType===D.TransparencyPassType.Color?"fragColor = premultiplyAlpha(fragColor);":""}
      }
    `)),(e.output===d.ShaderOutput.Depth||z)&&(o.include(h.OutputDepth,e),j.code.add(A.glsl`void main() {
discardBySlice(vPositionWorldCameraRelative);
vec4 textureColor = readBaseColorTexture();
discardOrAdjustAlpha(textureColor);
outputDepth(linearDepth);
}`)),e.output===d.ShaderOutput.Normal&&(o.include(b.ComputeShadingNormal,e),j.code.add(A.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        // note: the alpha component needs to be 1.0 in order for this material
        // to influence ambient occlusion, see the ssao fragment shader
        float alpha = ${e.normalType===s.NormalType.Ground?"0.0":"1.0"};
        fragColor = vec4(vec3(.5) + .5 * shadingNormal_view(), alpha);
      }
    `)),e.output===d.ShaderOutput.ObjectAndLayerIdColor&&o.fragment.code.add(A.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        ${E?A.glsl`fragColor = getOverlayColorTexel(vtcOverlay);`:"outputObjectAndLayerIdColor();"}
      }
    `),e.output===d.ShaderOutput.Highlight&&(o.include(m.OutputHighlight,e),j.code.add(A.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        ${E?A.glsl`
                vec4 overlayColor = getCombinedOverlayColor();
                if (overlayColor.a == 0.0) {
                  fragColor = vec4(0.0);
                  return;
                }`:""}

        outputHighlight();
      }
    `)),o}function $(e){return 0===e.overlays.length?null:e.overlays[o.OverlayIndex.INNER].getValidTexture(o.RenderTargetType.Water)}const j=Object.freeze(Object.defineProperty({__proto__:null,build:W,getOverlayNormalTexture:$},Symbol.toStringTag,{value:"Module"}));e.ComponentShader=j,e.build=W,e.getOverlayNormalTexture=$}));