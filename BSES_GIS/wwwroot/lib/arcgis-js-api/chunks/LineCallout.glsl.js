/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./vec2","./vec2f64","./vec4f64","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl","../views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassGeometryTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,i,r,o,n,l,a,t,d,s,c,g,p,f,v){"use strict";function S(e){const r=new f.ShaderBuilder,{vertex:o,fragment:S}=r;return o.include(l.AlignPixel),r.include(a.HUD,e),r.include(n.SliceDraw,e),r.attributes.add(v.VertexAttribute.UV0,"vec2"),o.uniforms.add(new c.Float4PassUniform("viewport",((e,i)=>i.camera.fullViewport)),new g.FloatPassUniform("lineSize",((e,i)=>e.size>0?Math.max(1,e.size)*i.camera.pixelRatio:0)),new s.Float2PassUniform("pixelToNDC",((e,r)=>i.set(h,2/r.camera.fullViewport[2],2/r.camera.fullViewport[3]))),new g.FloatPassUniform("borderSize",((e,i)=>null!=e.borderColor?i.camera.pixelRatio:0)),new s.Float2PassUniform("screenOffset",((e,r)=>i.set(h,e.screenOffset[0]*r.camera.pixelRatio,e.screenOffset[1]*r.camera.pixelRatio)))),r.varyings.add("coverageSampling","vec4"),r.varyings.add("lineSizes","vec2"),e.hasMultipassGeometry&&r.varyings.add("depth","float"),e.hasScreenSizePerspective&&d.addScreenSizePerspectiveAlignment(o),o.code.add(p.glsl`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 endPoint = projectPositionHUD(projectAux);

      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }
    ${e.occlusionTestEnabled?p.glsl`
      if (!testVisibilityHUD(endPoint)) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }`:""}

    ${e.hasScreenSizePerspective?p.glsl`
      vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
      vec2 screenOffsetScaled = applyScreenSizePerspectiveScaleFactorVec2(screenOffset, perspectiveFactor);
        `:p.glsl`vec2 screenOffsetScaled = screenOffset;`}
      // Add view dependent polygon offset to get exact same original starting point. This is mostly used to get the
      // correct depth value
      vec3 posView = (view * vec4(position, 1.0)).xyz;
      ${e.hasMultipassGeometry?"depth = posView.z;":""}

      applyHUDViewDependentPolygonOffset(auxpos1.w, projectAux.absCosAngle, posView);
      vec4 startPoint = proj * vec4(posView, 1.0);
      // Apply screen offset to both start and end point
      vec2 screenOffsetNorm = screenOffsetScaled * 2.0 / viewport.zw;
      startPoint.xy += screenOffsetNorm * startPoint.w;
      endPoint.xy += screenOffsetNorm * endPoint.w;
      // Align start and end to pixel origin
      vec4 startAligned = alignToPixelOrigin(startPoint, viewport.zw);
      vec4 endAligned = alignToPixelOrigin(endPoint, viewport.zw);
    ${e.depthHudEnabled?e.depthHudAlignStartEnabled?p.glsl`endAligned = vec4(endAligned.xy / endAligned.w * startAligned.w, startAligned.zw);`:p.glsl`startAligned = vec4(startAligned.xy / startAligned.w * endAligned.w, endAligned.zw);`:""}
      vec4 projectedPosition = mix(startAligned, endAligned, uv0.y);
      // The direction of the line in screen space
      vec2 screenSpaceDirection = normalize(endAligned.xy / endAligned.w - startAligned.xy / startAligned.w);
      vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x);
    ${e.hasScreenSizePerspective?p.glsl`
      float lineSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(lineSize, perspectiveFactor);
      float borderSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(borderSize, perspectiveFactor);
        `:p.glsl`
      float lineSizeScaled = lineSize;
      float borderSizeScaled = borderSize;
        `}
      float halfPixelSize = lineSizeScaled * 0.5;

      // Compute full ndc offset, adding 1px padding for doing anti-aliasing and the border size
      float padding = 1.0 + borderSizeScaled;
      vec2 ndcOffset = (-halfPixelSize - padding + uv0.x * (lineSizeScaled + padding + padding)) * pixelToNDC;

      // Offset x/y from the center of the line in screen space
      projectedPosition.xy += perpendicularScreenSpaceDirection * ndcOffset * projectedPosition.w;

      // Compute a coverage varying which we can use in the fragment shader to determine
      // how much a pixel is actually covered by the line (i.e. to anti alias the line).
      // This works by computing two coordinates that can be linearly interpolated and then
      // subtracted to find out how far away from the line edge we are.
      float edgeDirection = (uv0.x * 2.0 - 1.0);

      float halfBorderSize = 0.5 * borderSizeScaled;
      float halfPixelSizeAndBorder = halfPixelSize + halfBorderSize;
      float outerEdgeCoverageSampler = edgeDirection * (halfPixelSizeAndBorder + halfBorderSize + 1.0);

      float isOneSided = float(lineSizeScaled < 2.0 && borderSize < 2.0);

      coverageSampling = vec4(
        // Edge coordinate
        outerEdgeCoverageSampler,

        // Border edge coordinate
        outerEdgeCoverageSampler - halfPixelSizeAndBorder * isOneSided,

        // Line offset
        halfPixelSize - 0.5,

        // Border offset
        halfBorderSize - 0.5 + halfPixelSizeAndBorder * (1.0 - isOneSided)
      );

      lineSizes = vec2(lineSizeScaled, borderSizeScaled);

      gl_Position = projectedPosition;
    }
  `),S.uniforms.add(new c.Float4PassUniform("uColor",(e=>u(e.color))),new c.Float4PassUniform("borderColor",(e=>u(e.borderColor)))),e.hasMultipassGeometry&&(S.include(t.multipassGeometryTest,e),S.uniforms.add(new s.Float2PassUniform("inverseViewport",((e,i)=>i.inverseViewport)))),S.code.add(p.glsl`
    void main() {
      ${e.hasMultipassGeometry?"if( geometryDepthTest(gl_FragCoord.xy * inverseViewport, depth) ){ discard; }":""}

      // Mix between line and border coverage offsets depending on whether we need
      // a border (based on the sidedness).
      vec2 coverage = min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);

      // Mix between border and line color based on the line coverage (conceptually the line blends on top of the
      // border background).
      //
      // Anti-alias by blending final result using the full (including optional border) coverage and the color alpha
      float borderAlpha = uColor.a * borderColor.a * coverage.y;
      float colorAlpha = uColor.a * coverage.x;

      float finalAlpha = mix(borderAlpha, 1.0, colorAlpha);

    ${e.depthHudEnabled?p.glsl`
      if (finalAlpha < 0.01) {
        discard;
      }
      `:p.glsl`
      vec3 finalRgb = mix(borderColor.rgb * borderAlpha, uColor.rgb, colorAlpha);
      fragColor = vec4(finalRgb, finalAlpha);
      `}
  }
  `),r}function u(e){return null!=e?e:o.ZEROS}const h=r.create(),w=Object.freeze(Object.defineProperty({__proto__:null,build:S},Symbol.toStringTag,{value:"Module"}));e.LineCallout=w,e.build=S}));
