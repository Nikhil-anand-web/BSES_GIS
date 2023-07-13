/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/TransparencyPassType","../views/3d/webgl-engine/lib/VertexAttribute","../views/3d/webgl-engine/materials/PatternStyle"],(function(e,t,o,a,l,r,i,n,s,d,c,g,u,p,v,f,h,m,w,b){"use strict";const S=.70710678118,y=S,C=.08715574274;function T(e){const T=new h.ShaderBuilder,P=e.hasMultipassTerrain&&(e.output===o.ShaderOutput.Color||e.output===o.ShaderOutput.Alpha),{vertex:V,fragment:O,attributes:R,varyings:D}=T;u.addProjViewLocalOrigin(V,e),T.include(l.Transform,e),T.include(r.VertexColor,e),T.include(d.VisualVariables,e),e.draped?V.uniforms.add(new v.FloatPassUniform("worldToScreenRatio",((e,t)=>1/t.screenToPCSRatio))):R.add(w.VertexAttribute.BOUNDINGRECT,"mat3"),R.add(w.VertexAttribute.POSITION,"vec3"),R.add(w.VertexAttribute.UVMAPSPACE,"vec4"),e.vvColor&&R.add(w.VertexAttribute.COLORFEATUREATTRIBUTE,"float"),D.add("vColor","vec4"),D.add("vpos","vec3"),D.add("vuv","vec2"),P&&D.add("depth","float"),V.uniforms.add(new p.Float4PassUniform("uColor",(e=>e.color)));const $=e.style===b.Style.ForwardDiagonal||e.style===b.Style.BackwardDiagonal||e.style===b.Style.DiagonalCross;$&&V.code.add(f.glsl`
      const mat2 rotate45 = mat2(${f.glsl.float(S)}, ${f.glsl.float(-y)},
                                 ${f.glsl.float(y)}, ${f.glsl.float(S)});
    `),e.draped||(u.addCameraPosition(V,e),V.uniforms.add(new v.FloatPassUniform("worldToScreenPerDistanceRatio",((e,t)=>1/t.camera.perScreenPixelRatio))),V.code.add(f.glsl`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),V.code.add(f.glsl`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),V.code.add(f.glsl`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${f.glsl.float(C)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `)),V.code.add(f.glsl`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${$?" * rotate45":""};
      vec2 uvCellOrigin = uvMapSpace.zw ${$?" * rotate45":""};

      ${e.draped?"":f.glsl`
            float distanceToCamera = boundingRectDistanceToCamera();
            float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;
          `}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${f.glsl.float(e.patternSpacing)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `);const A=e.output===o.ShaderOutput.Depth;return A&&(T.include(i.OutputDepth,e),t.addNearFar(T),t.addLinearDepth(T)),V.code.add(f.glsl`
    void main(void) {
      vuv = scaledUV();
      vpos = position;
      ${P?"depth = (view * vec4(vpos, 1.0)).z;":""}
      forwardNormalizedVertexColor();
      ${e.hasVertexColors?"vColor *= uColor;":e.vvColor?"vColor = uColor * interpolateVVColor(colorFeatureAttribute);":"vColor = uColor;"}
      gl_Position = ${A?f.glsl`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:f.glsl`transformPosition(proj, view, vpos);`}
    }
  `),T.include(a.SliceDraw,e),O.include(g.ColorConversion),e.draped&&O.uniforms.add(new v.FloatPassUniform("texelSize",((e,t)=>1/t.camera.pixelRatio))),e.output===o.ShaderOutput.Highlight&&T.include(n.OutputHighlight,e),P&&T.include(s.multipassTerrainTest,e),e.output!==o.ShaderOutput.Highlight&&(O.code.add(f.glsl`
      const float lineWidth = ${f.glsl.float(e.lineWidth)};
      const float spacing = ${f.glsl.float(e.patternSpacing)};
      const float spacingINV = ${f.glsl.float(1/e.patternSpacing)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `),e.draped||O.code.add(f.glsl`const int maxSamples = 5;
float sampleAA(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`)),O.code.add(f.glsl`
    void main() {
      discardBySlice(vpos);
      ${P?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec4 color = vColor;
      color = highlightSlice(color, vpos);

      ${e.output!==o.ShaderOutput.Highlight?f.glsl`color.a *= ${x(e)};`:""}

      ${e.output===o.ShaderOutput.ObjectAndLayerIdColor?f.glsl`color.a = 1.0;`:""}

      if (color.a < ${f.glsl.float(c.symbolAlphaCutoff)}) {
        discard;
      }

      ${e.output===o.ShaderOutput.Alpha?f.glsl`fragColor = vec4(color.a);`:""}

      ${e.output===o.ShaderOutput.Color?f.glsl`fragColor = color; ${e.transparencyPassType===m.TransparencyPassType.Color?"fragColor = premultiplyAlpha(fragColor);":""}`:""}
      ${e.output===o.ShaderOutput.Highlight?f.glsl`outputHighlight();`:""}
      ${e.output===o.ShaderOutput.Depth?f.glsl`outputDepth(linearDepth);`:""};
    }
  `),T}function x(e){function t(t){return e.draped?f.glsl`coverage(vuv.${t}, texelSize)`:f.glsl`sampleAA(vuv.${t})`}switch(e.style){case b.Style.ForwardDiagonal:case b.Style.Horizontal:return t("y");case b.Style.BackwardDiagonal:case b.Style.Vertical:return t("x");case b.Style.DiagonalCross:case b.Style.Cross:return f.glsl`
        1.0 - (1.0 - ${t("x")}) * (1.0 - ${t("y")})
      `;default:return"0.0"}}const P=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:"Module"}));e.Pattern=P,e.build=T}));
