/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./mat3","./mat3f64","./mat4f64","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl","../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/TextureTransformUV.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float3PassUniform","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform","../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/TransparencyPassType","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,r,a,o,l,i,s,t,n,d,c,g,u,m,h,v,b,p,w,x,f,y,T,C,P,M,L,O,A,N,S,V,$,E,U,D,F,B,R,_,I,j,z){"use strict";function G(e){const G=new _.ShaderBuilder,{vertex:W,fragment:k,varyings:Y}=G;if($.addProjViewLocalOrigin(W,e),G.include(g.PositionAttribute),Y.add("vpos","vec3"),G.include(A.VisualVariables,e),G.include(d.InstancedDoublePrecision,e),G.include(b.VerticalOffset,e),e.hasColorTextureTransform&&G.include(O.colorTextureUV),e.output===s.ShaderOutput.Color||e.output===s.ShaderOutput.Alpha){e.hasNormalTextureTransform&&G.include(O.normalTextureUV),e.hasEmissionTextureTransform&&G.include(O.emissiveTextureUV),e.hasOcclusionTextureTransform&&G.include(O.occlusionTextureUV),e.hasMetallicRoughnessTextureTransform&&G.include(O.metallicRoughnessTextureUV),$.addCameraPosition(W,e),G.include(c.NormalAttribute,e),G.include(n.Transform,e);const s=e.normalType===c.NormalType.Attribute||e.normalType===c.NormalType.Compressed;s&&e.offsetBackfaces&&G.include(i.Offset),G.include(w.ComputeNormalTexture,e),G.include(v.VertexNormal,e),e.instancedColor&&G.attributes.add(z.VertexAttribute.INSTANCECOLOR,"vec4"),Y.add("vPositionLocal","vec3"),G.include(m.TextureCoordinateAttribute,e),G.include(l.ForwardLinearDepth,e),G.include(u.SymbolColor,e),G.include(h.VertexColor,e),W.uniforms.add(new U.Float4PassUniform("externalColor",(e=>e.externalColor))),Y.add("vcolorExt","vec4"),e.hasMultipassTerrain&&Y.add("depth","float");const t=e.hasModelTransformation;if(t){const e=a.create();W.uniforms.add(new R.Matrix4PassUniform("model",(e=>e.modelTransformation??o.IDENTITY))),W.uniforms.add(new B.Matrix3PassUniform("normalTransform",(a=>(r.normalFromMat4(e,a.modelTransformation??o.IDENTITY),e))))}W.code.add(F.glsl`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${F.glsl.float(N.symbolAlphaCutoff)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          ${t?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${s?F.glsl`vNormalWorld = ${t?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormal(vvLocalNormal(normalModel()))"};`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${s&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?F.glsl`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?F.glsl`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?F.glsl`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?F.glsl`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?F.glsl`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(e.output){case s.ShaderOutput.Alpha:G.include(t.SliceDraw,e),G.include(S.DiscardOrAdjustAlphaPass,e),G.include(T.multipassTerrainTest,e),k.uniforms.add(new D.FloatPassUniform("opacity",(e=>e.opacity)),new D.FloatPassUniform("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&k.uniforms.add(new I.Texture2DPassUniform("tex",(e=>e.texture))),k.include(V.MixExternalColor),k.code.add(F.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?F.glsl`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?F.glsl`colorUV`:F.glsl`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:F.glsl`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?F.glsl`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:F.glsl`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case s.ShaderOutput.Color:G.include(t.SliceDraw,e),G.include(f.EvaluateSceneLighting,e),G.include(x.EvaluateAmbientOcclusion,e),G.include(S.DiscardOrAdjustAlphaPass,e),G.include(e.instancedDoublePrecision?L.ReadShadowMapPass:L.ReadShadowMapDraw,e),G.include(T.multipassTerrainTest,e),$.addCameraPosition(k,e),k.uniforms.add(W.uniforms.get("localOrigin"),new E.Float3PassUniform("ambient",(e=>e.ambient)),new E.Float3PassUniform("diffuse",(e=>e.diffuse)),new D.FloatPassUniform("opacity",(e=>e.opacity)),new D.FloatPassUniform("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&k.uniforms.add(new I.Texture2DPassUniform("tex",(e=>e.texture))),G.include(M.PhysicallyBasedRenderingParameters,e),G.include(P.PhysicallyBasedRendering,e),k.include(V.MixExternalColor),G.include(C.Normals,e),f.addAmbientBoostFactor(k),f.addLightingGlobalFactor(k),y.addMainLightIntensity(k),k.code.add(F.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?F.glsl`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?F.glsl`colorUV`:F.glsl`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:F.glsl`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===c.NormalType.ScreenDerivative?F.glsl`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:F.glsl`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===M.PBRMode.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?F.glsl`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:F.glsl`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?F.glsl`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?F.glsl`normalUV`:"vuv0"});`:F.glsl`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?F.glsl`normalize(posWorld);`:F.glsl`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?F.glsl`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===M.PBRMode.Normal||e.pbrMode===M.PBRMode.Schematic?F.glsl`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?F.glsl`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:F.glsl`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===j.TransparencyPassType.Color?F.glsl`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return G.include(p.DefaultMaterialAuxiliaryPasses,e),G}const W=Object.freeze(Object.defineProperty({__proto__:null,build:G},Symbol.toStringTag,{value:"Module"}));e.DefaultMaterial=W,e.build=G}));
