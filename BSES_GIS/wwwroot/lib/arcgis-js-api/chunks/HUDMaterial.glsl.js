/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./vec2","./vec2f64","./vec4f64","../views/3d/support/engineContent/sdfPrimitives","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl","../views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl","../views/3d/webgl-engine/core/shaderLibrary/hud/HUDOcclusionPass.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/TransparencyPassType","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,o,l,i,r,t,a,s,n,c,d,u,g,p,v,f,b,h,w,x,C,P,m,S,y,z){"use strict";function A(e){const l=new m.ShaderBuilder,A=e.signedDistanceFieldEnabled;if(l.include(c.HUD,e),l.include(a.SliceDraw,e),e.occlusionPass)return l.include(d.HUDOcclusionPass,e),l;const{vertex:F,fragment:D}=l;l.include(b.ScreenSizePerspective),D.include(f.RgbaFloatEncoding),D.include(v.ColorConversion),l.include(g.VisualVariables,e),l.include(s.ObjectAndLayerIdColor,e),l.varyings.add("vcolor","vec4"),l.varyings.add("vtc","vec2"),l.varyings.add("vsize","vec2"),e.binaryHighlightOcclusionEnabled&&l.varyings.add("voccluded","float"),F.uniforms.add(new x.Float4PassUniform("viewport",((e,o)=>o.camera.fullViewport)),new w.Float2PassUniform("screenOffset",((e,l)=>o.set($,2*e.screenOffset[0]*l.camera.pixelRatio,2*e.screenOffset[1]*l.camera.pixelRatio))),new w.Float2PassUniform("anchorPosition",(e=>j(e))),new x.Float4PassUniform("materialColor",(e=>e.color))),h.addPixelRatio(F,e),A&&(F.uniforms.add(new x.Float4PassUniform("outlineColor",(e=>e.outlineColor))),D.uniforms.add(new x.Float4PassUniform("outlineColor",(e=>O(e)?e.outlineColor:i.ZEROS)),new C.FloatPassUniform("outlineSize",(e=>O(e)?e.outlineSize:0)))),e.hasScreenSizePerspective&&(b.addScreenSizePerspective(F),b.addScreenSizePerspectiveAlignment(F)),(e.debugDrawLabelBorder||e.binaryHighlightOcclusionEnabled)&&l.varyings.add("debugBorderCoords","vec4"),l.attributes.add(z.VertexAttribute.UV0,"vec2"),l.attributes.add(z.VertexAttribute.COLOR,"vec4"),l.attributes.add(z.VertexAttribute.SIZE,"vec2"),l.attributes.add(z.VertexAttribute.AUXPOS2,"vec4"),F.code.add(P.glsl`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${e.hasScreenSizePerspective?P.glsl`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:P.glsl`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${e.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${e.occlusionTestEnabled||e.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${e.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const L=P.glsl`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`;e.pixelSnappingEnabled&&F.include(n.AlignPixel);const U=e.pixelSnappingEnabled?A?P.glsl`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:P.glsl`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:P.glsl`posProj += quadOffset;`;F.code.add(P.glsl`
    ${e.occlusionTestEnabled?"if (visible) {":""}
    ${L}
    ${e.vvColor?"vcolor = interpolateVVColor(auxpos2.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${e.output===t.ShaderOutput.ObjectAndLayerIdColor?P.glsl`vcolor.a = 1.0;`:""}

    bool alphaDiscard = vcolor.a < ${P.glsl.float(p.symbolAlphaCutoff)};
    ${A?`alphaDiscard = alphaDiscard && outlineColor.a < ${P.glsl.float(p.symbolAlphaCutoff)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${U}
      gl_Position = posProj;
    }

    vtc = uv;

    ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${e.occlusionTestEnabled?P.glsl`} else { vtc = vec2(0.0);
      ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),D.uniforms.add(new S.Texture2DPassUniform("tex",(e=>e.texture)));const B=e.debugDrawLabelBorder?P.glsl`(isBorder > 0.0 ? 0.0 : ${P.glsl.float(p.defaultMaskAlphaCutoff)})`:P.glsl.float(p.defaultMaskAlphaCutoff),T=P.glsl`
    ${e.debugDrawLabelBorder?P.glsl`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${A?P.glsl`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = ${P.glsl.float(r.DEFAULT_TEX_SIZE)};
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${B} ||
          fillPixelColor.a + outlinePixelColor.a < ${P.glsl.float(p.symbolAlphaCutoff)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        fragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${B}) {
          discard;
        }

        fragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:P.glsl`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${B}) {
            discard;
          }
          fragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${e.debugDrawLabelBorder?P.glsl`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;return e.output===t.ShaderOutput.Alpha&&D.code.add(P.glsl`
      void main() {
        ${T}
        fragColor = vec4(fragColor.a);
      }
      `),e.output===t.ShaderOutput.ObjectAndLayerIdColor&&D.code.add(P.glsl`
      void main() {
        ${T}
        outputObjectAndLayerIdColor();
      }
      `),e.output===t.ShaderOutput.Color&&D.code.add(P.glsl`
    void main() {
      ${T}
      ${e.transparencyPassType===y.TransparencyPassType.FrontFace?"fragColor.rgb /= fragColor.a;":""}
    }
    `),e.output===t.ShaderOutput.Highlight&&(l.include(u.OutputHighlight,e),D.code.add(P.glsl`
    void main() {
      ${T}
      ${e.binaryHighlightOcclusionEnabled?P.glsl`
          if (voccluded == 1.0) {
            fragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            fragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),l}function O(e){return e.outlineColor[3]>0&&e.outlineSize>0}function j(e,l=$){return e.textureIsSignedDistanceField?F(e.anchorPosition,e.distanceFieldBoundingBox,l):o.copy(l,e.anchorPosition),l}function F(e,l,i){null!=l?o.set(i,e[0]*(l[2]-l[0])+l[0],e[1]*(l[3]-l[1])+l[1]):o.set(i,0,0)}const $=l.create(),D=Object.freeze(Object.defineProperty({__proto__:null,build:A,calculateAnchorPosForRendering:j},Symbol.toStringTag,{value:"Module"}));e.HUDMaterial=D,e.build=A,e.calculateAnchorPosForRendering=j}));
