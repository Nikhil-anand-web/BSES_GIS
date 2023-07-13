/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","./mat4","./mat4f64","./vec3","./vec3f64","../views/3d/terrain/interfaces","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTangent.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/TerrainTexture.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float3PassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],(function(e,r,a,i,o,l,t,n,s,d,c,v,g,m,u,p,h,w,b,y,f,C,O,S,T,x,L,P,M,z,D){"use strict";let N=function(e){function a(){return e.apply(this,arguments)||this}return r._inherits(a,e),r._createClass(a)}(T.OverlayTerrainPassParameters);function F(e){const r=new z.ShaderBuilder,{vertex:i,fragment:l,varyings:N}=r;r.include(g.PositionAttribute),r.include(v.NormalAttribute,e),r.include(m.TextureCoordinateAttribute,e);const F=()=>{r.include(f.NormalUtils,e),i.code.add(P.glsl`vec3 getNormal() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
vec3 n = vec3(normalCompressed + vec2(normalCompressed.x >= 0.0 ? 1.0 : -1.0,
normalCompressed.y >= 0.0 ? 1.0 : -1.0) * min(z, 0.0), z);
return normalize(n);
}`)};x.addProjViewLocalOrigin(i,e),r.include(c.Transform,e);const $=e.overlayMode!==S.OverlayMode.Disabled,W=$&&e.invisible;switch(e.output){case s.ShaderOutput.Color:{r.include(T.TerrainTexture,e),r.include(b.EvaluateSceneLighting,e),$&&r.include(T.OverlayTerrain,{...e,pbrMode:e.pbrMode===C.PBRMode.Terrain?C.PBRMode.TerrainWithWater:C.PBRMode.Water});const s=e.overlayMode===S.OverlayMode.EnabledWithWater;s&&r.include(u.VertexTangent,e),N.add("vnormal","vec3"),N.add("vpos","vec3"),N.add("vup","vec3"),F(),e.screenSizePerspective&&x.addViewNormal(i);const c=e.receiveShadows&&!e.renderOccluded;c&&r.include(n.ForwardLinearDepth,e),e.screenSizePerspective&&(N.add("screenSizeDistanceToCamera","float"),N.add("screenSizeCosAngle","float")),i.code.add(P.glsl`
        void main(void) {
          //Position
          vpos = position;
          vec3 positionWorld = position + localOrigin;
          gl_Position = transformPosition(proj, view, vpos);

          //Normal
          vnormal = getNormal();

          //Up
          vup = getLocalUp(position, localOrigin);

          ${s?P.glsl`forwardVertexTangent(vnormal);`:P.glsl``}

          //Texture UV
          vec2 uv = getUV0();
          forwardTextureCoordinatesWithTransform(uv);
          ${$?P.glsl`setOverlayVTC(uv);`:""}
          ${e.tileBorders?P.glsl`forwardTextureCoordinates();`:""}

          ${e.screenSizePerspective?P.glsl`
          vec3 viewPos = (view * vec4(vpos, 1.0)).xyz;
          screenSizeDistanceToCamera = length(viewPos);
          vec3 viewSpaceNormal = (viewNormal * vec4(normalize(positionWorld), 1.0)).xyz;
          screenSizeCosAngle = abs(viewSpaceNormal.z);`:""}

          ${c?P.glsl`forwardLinearDepth();`:""}

        }
      `),r.include(d.SliceDraw,e),r.include(b.EvaluateSceneLighting,e),r.include(w.EvaluateAmbientOcclusion,e),r.include(O.ReadShadowMapDraw,e),x.addCameraPosition(l,e),b.addAmbientBoostFactor(l),b.addLightingGlobalFactor(l),l.uniforms.add(i.uniforms.get("localOrigin"),new L.Float3PassUniform("viewDirection",((e,r)=>o.normalize(V,o.set(V,r.camera.viewMatrix[12],r.camera.viewMatrix[13],r.camera.viewMatrix[14]))))),s&&l.uniforms.add(new D.Texture2DPassUniform("ovWaterTex",((e,r)=>0===r.overlays.length?null:r.overlays[t.OverlayIndex.INNER].getNormalTexture(e.overlaySource))),new M.Matrix4DrawUniform("view",((e,r)=>a.translate(U,r.camera.viewMatrix,e.origin)))),l.code.add(P.glsl`const float sliceOpacity = 0.2;
float lum(vec3 c) {
return (min(min(c.r, c.g), c.b) + max(max(c.r, c.g), c.b)) * 0.5;
}`),y.addMainLightDirection(l),y.addMainLightIntensity(l),l.code.add(P.glsl`
        void main() {
          vec3 normal = normalize(vnormal);
          float vndl = dot(normal, mainLightDirection);

          float additionalAmbientScale = smoothstep(0.0, 1.0, clamp(vndl*2.5, 0.0, 1.0));
          float shadow = ${e.receiveShadows&&!e.renderOccluded?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

          float ssao = evaluateAmbientOcclusionInverse();
          vec4 tileColor = getTileColor();

          ${$?P.glsl`
              vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
              vec4 overlayColor = overlayOpacity * overlayColorOpaque;
              ${e.invisible?P.glsl`if (overlayColor.a == 0.0) { discard; }`:""}
              vec4 groundColor = tileColor;
              tileColor = tileColor * (1.0 - overlayColor.a) + overlayColor;`:""}

          // If combined alpha is 0 we can discard pixel. The performance impact by having a discard here
          // is neglectable because terrain typically renders first into the framebuffer.
          if(tileColor.a <= 0.0) {
            discard;
          }

          bool sliced = rejectBySlice(vpos);
          if (sliced) {
            tileColor *= sliceOpacity;
          }

          vec3 albedo = tileColor.rgb;

          // heuristic shading function used in the old terrain, now used to add ambient lighting

          vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

          ${e.pbrMode===C.PBRMode.Terrain||e.pbrMode===C.PBRMode.TerrainWithWater?P.glsl`fragColor = vec4(evaluateTerrainLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight, normalize(vpos - cameraPosition), vup), tileColor.a);`:P.glsl`fragColor = vec4(evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight), tileColor.a);`}
          ${s?P.glsl`
              vec4 overlayWaterMask = getOverlayColor(ovWaterTex, vtcOverlay);
              float waterNormalLength = length(overlayWaterMask);
              if (waterNormalLength > 0.95) {
                mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, vnormal);
                vec4 waterOverlayColor = vec4(overlayColor.w > 0.0 ? overlayColorOpaque.xyz/overlayColor.w : vec3(1.0), overlayColor.w);
                vec4 viewPosition = view*vec4(vpos, 1.0);
                vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vpos - cameraPosition), shadow, vnormal, tbnMatrix, viewPosition.xyz,  vpos + localOrigin);
                vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                float opacity = sliced ? sliceOpacity : 1.0;
                // un-gamma the ground color to mix in linear space
                fragColor = mix(groundColor, waterColorNonLinear, waterColorLinear.w) * opacity;
              }`:""}
          ${e.screenSizePerspective?P.glsl`
            float perspectiveScale = screenSizePerspectiveScaleFloat(1.0, screenSizeCosAngle, screenSizeDistanceToCamera, vec4(0.0, 0.0, 0.0, 0.0));
            if (perspectiveScale <= 0.25) {
              fragColor = mix(fragColor, vec4(1.0, 0.0, 0.0, 1.0), perspectiveScale * 4.0);
            }
            else if (perspectiveScale <= 0.5) {
              fragColor = mix(fragColor, vec4(0.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.25) * 4.0);
            }
            else if (perspectiveScale >= 0.99) {
              fragColor = mix(fragColor, vec4(0.0, 1.0, 0.0, 1.0), 0.2);
            }
            else {
              fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.5) * 2.0);
            }`:""}
          ${e.visualizeNormals?e.spherical?P.glsl`
                  vec3 localUp = normalize(vpos + localOrigin);
                  vec3 right = normalize(cross(vec3(0.0, 0.0, 1.0), localUp));
                  vec3 forward = normalize(cross(localUp, right));
                  mat3 tbn = mat3(right, forward, localUp);
                  vec3 tNormal = normalize(normal * tbn);
                  fragColor = vec4(vec3(0.5) + 0.5 * tNormal, 0.0);
              `:P.glsl`
                  vec3 tNormal = normalize(normal);
                  fragColor = vec4(vec3(0.5) + 0.5 * tNormal, 0.0);
              `:""}
          ${e.tileBorders?P.glsl`
              vec2 dVuv = fwidth(vuv0);
              vec2 edgeFactors = smoothstep(vec2(0.0), 1.5 * dVuv, min(vuv0, 1.0 - vuv0));
              float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);
              fragColor = mix(fragColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);`:""}
          fragColor = highlightSlice(fragColor, vpos);
        }
      `)}break;case s.ShaderOutput.Depth:W&&r.include(T.OverlayTerrain,e),r.include(p.OutputDepth,e),n.addLinearDepth(r),n.addNearFar(r),i.code.add(P.glsl`
              void main(void) {
                ${W?P.glsl`setOverlayVTC(getUV0());`:""}
                gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);
              }
          `),l.code.add(P.glsl`
              void main() {
                ${W?P.glsl`if (getCombinedOverlayColor().a == 0.0) { discard; }`:""}
                outputDepth(linearDepth);
              }
          `);break;case s.ShaderOutput.Shadow:case s.ShaderOutput.ShadowHighlight:case s.ShaderOutput.ShadowExcludeHighlight:r.include(p.OutputDepth,e),n.addLinearDepth(r),n.addNearFar(r),i.code.add(P.glsl`void main(void) {
gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);
}`),l.code.add(P.glsl`void main() {
outputDepth(linearDepth);
}`);break;case s.ShaderOutput.Normal:W&&r.include(T.OverlayTerrain,e),N.add("vnormal","vec3"),x.addViewNormal(i),F(),i.code.add(P.glsl`
            void main(void) {
              ${W?P.glsl`setOverlayVTC(getUV0());`:""}
              gl_Position = transformPosition(proj, view, position);
              vnormal = normalize((viewNormal * vec4(getNormal(), 1.0)).xyz);
            }
        `),l.code.add(P.glsl`
            void main() {
              ${W?P.glsl`if (getCombinedOverlayColor().a == 0.0) { discard; }`:""}
              vec3 normal = normalize(vnormal);
              if (gl_FrontFacing == false) {
                normal = -normal;
              }
              fragColor = vec4(vec3(0.5) + 0.5 * normal, 0.0);
            }
        `);break;case s.ShaderOutput.Highlight:$&&r.include(T.OverlayTerrain,e),i.code.add(P.glsl`
          void main() {
            ${$?P.glsl`setOverlayVTC(getUV0());`:""}
            gl_Position = transformPosition(proj, view, position);
          }
        `),r.include(h.OutputHighlight,e),l.code.add(P.glsl`
          void main() {
            ${$?P.glsl`if (getCombinedOverlayColor().a == 0.0) { discard; }`:""}
            outputHighlight();
          }
        `)}return e.output===s.ShaderOutput.ObjectAndLayerIdColor&&(r.include(T.OverlayTerrain,{...e,pbrMode:C.PBRMode.Disabled}),i.code.add(P.glsl`void main(void) {
gl_Position = transformPosition(proj, view, position);
setOverlayVTC(getUV0());
}`),l.code.add(P.glsl`void main() {
fragColor = getOverlayColorTexel(vtcOverlay);
}`)),r}const U=i.create(),V=l.create(),$=Object.freeze(Object.defineProperty({__proto__:null,TerrainPassParameters:N,build:F},Symbol.toStringTag,{value:"Module"}));e.Terrain=$,e.TerrainPassParameters=N,e.build=F}));
