/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/RibbonVertexPosition.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MarkerSizing.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/TransparencyPassType","../views/3d/webgl-engine/lib/VertexAttribute","../views/3d/webgl-engine/shaders/LineMarkerTechniqueConfiguration","../views/3d/webgl-engine/shaders/RibbonLineTechniqueConfiguration"],(function(e,t,i,n,o,r,a,s,l,d,p,c,g,v,f,u,h,m,S,D,b,x,L,w){"use strict";const y=1;function C(e){const C=new D.ShaderBuilder,{vertex:P,fragment:A}=C,R=e.hasMultipassTerrain&&(e.output===i.ShaderOutput.Color||e.output===i.ShaderOutput.Alpha);C.include(p.PiUtils),C.include(r.RibbonVertexPosition,e),C.include(s.LineStipple,e);const F=e.applyMarkerOffset&&!e.draped;F&&(P.uniforms.add(new h.FloatPassUniform("markerScale",(e=>e.markerScale))),C.include(l.MarkerSizing,{space:L.LineMarkerSpace.World,draped:!1})),e.output===i.ShaderOutput.Depth&&C.include(a.OutputDepth,e),C.include(o.ObjectAndLayerIdColor,e),v.addProjViewLocalOrigin(P,e),P.uniforms.add(new S.Matrix4PassUniform("inverseProjectionMatrix",((e,t)=>t.camera.inverseProjectionMatrix)),new f.Float2PassUniform("nearFar",((e,t)=>t.camera.nearFar)),new h.FloatPassUniform("miterLimit",(e=>"miter"!==e.join?0:e.miterLimit)),new u.Float4PassUniform("viewport",((e,t)=>t.camera.fullViewport))),P.constants.add("LARGE_HALF_FLOAT","float",65500),C.attributes.add(x.VertexAttribute.POSITION,"vec3"),C.attributes.add(x.VertexAttribute.SUBDIVISIONFACTOR,"float"),C.attributes.add(x.VertexAttribute.UV0,"vec2"),C.attributes.add(x.VertexAttribute.AUXPOS1,"vec3"),C.attributes.add(x.VertexAttribute.AUXPOS2,"vec3"),C.varyings.add("vColor","vec4"),C.varyings.add("vpos","vec3"),t.addLinearDepth(C),R&&C.varyings.add("depth","float");const O=e.stippleEnabled&&e.stippleScaleWithLineWidth;O&&C.varyings.add("vLineSizeInv","float");const T=e.capType===w.CapType.ROUND,j=O||T;j&&C.varyings.add("vLineWidth","float");const z=e.innerColorEnabled||T;z&&C.varyings.add("vLineDistance","float");const E=e.stippleEnabled&&T,V=e.falloffEnabled||E;V&&C.varyings.add("vLineDistanceNorm","float"),T&&(C.varyings.add("vSegmentSDF","float"),C.varyings.add("vReverseSegmentSDF","float")),P.code.add(m.glsl`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),P.code.add(m.glsl`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),t.addCalculateLinearDepth(C),P.code.add(m.glsl`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${R?"depth = pos.z;":""}
      linearDepth = calculateLinearDepth(nearFar,pos.z);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),v.addPixelRatio(P,e),P.code.add(m.glsl`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;

      float lineSize = getSize();
      float lineWidth = lineSize * pixelRatio;

      ${j?m.glsl`vLineWidth = lineWidth;`:""}
      ${O?m.glsl`vLineSizeInv = 1.0 / lineSize;`:""}

      // convert sub-pixel coverage to alpha
      if (lineWidth < 1.0) {
        coverage = lineWidth;
        lineWidth = 1.0;
      }else{
        // Ribbon lines cannot properly render non-integer sizes. Round width to integer size if
        // larger than one for better quality. Note that we do render < 1 pixels more or less correctly
        // so we only really care to round anything larger than 1.
        lineWidth = floor(lineWidth + 0.5);
      }

      vec4 pos  = view * vec4(position.xyz, 1.0);
      vec4 prev = view * vec4(auxpos1.xyz, 1.0);
      vec4 next = view * vec4(auxpos2.xyz, 1.0);
  `),F&&P.code.add(m.glsl`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),P.code.add(m.glsl`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`);(e.stippleEnabled||T)&&P.code.add(m.glsl`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${T?m.glsl`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),P.code.add(m.glsl`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),e.roundJoins?P.code.add(m.glsl`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${e.stippleEnabled?m.glsl`min(1.0, subdivisionFactor * ${m.glsl.float((y+2)/(y+1))})`:m.glsl`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):P.code.add(m.glsl`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const I=e.capType!==w.CapType.BUTT;return P.code.add(m.glsl`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${I?m.glsl`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),P.code.add(m.glsl`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

    ${V||z?m.glsl`float lineDistNorm = sign(uv0.y) * pos.w;`:""}

    ${z?m.glsl`vLineDistance = lineWidth * lineDistNorm;`:""}
    ${V?m.glsl`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),T&&P.code.add(m.glsl`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),e.stippleEnabled&&(e.draped?P.uniforms.add(new h.FloatPassUniform("worldToScreenRatio",((e,t)=>1/t.screenToPCSRatio))):P.code.add(m.glsl`vec3 segmentCenter = mix((auxpos2 + position) * 0.5, (position + auxpos1) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),P.code.add(m.glsl`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(auxpos2 - position, position - auxpos1, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),e.draped?P.code.add(m.glsl`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):P.code.add(m.glsl`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),P.uniforms.add(new h.FloatPassUniform("stipplePatternPixelSize",(e=>s.computePixelSize(e)))),P.code.add(m.glsl`
      float patternLength = ${e.stippleScaleWithLineWidth?"lineSize * ":""} stipplePatternPixelSize;

      // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the fragment shader
      vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of joins)
      if (segmentLengthScreenDouble >= 0.001) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1] at the
        // original vertex positions, and slightly outside of that range at the displaced positions
        vec2 stippleDisplacement = pos.xy - segmentOrigin;
        float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen distance
      vStippleDistanceLimits *= pos.w;
      vStippleDistance *= pos.w;

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e038, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e038);
    `)),P.code.add(m.glsl`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${e.wireframe&&!e.draped?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }
  }
  `),R&&C.include(d.multipassTerrainTest,e),C.include(n.SliceDraw,e),A.include(g.ColorConversion),A.code.add(m.glsl`
  void main() {
    discardBySlice(vpos);
    ${R?"terrainDepthTest(gl_FragCoord, depth);":""}
  `),e.wireframe?A.code.add(m.glsl`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(T&&A.code.add(m.glsl`
      float sdf = min(vSegmentSDF, vReverseSegmentSDF);
      vec2 fragmentPosition = vec2(
        min(sdf, 0.0),
        vLineDistance
      ) * gl_FragCoord.w;

      float fragmentRadius = length(fragmentPosition);
      float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

      if (capCoverage < ${m.glsl.float(c.symbolAlphaCutoff)}) {
        discard;
      }
    `),E?A.code.add(m.glsl`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${m.glsl.float(c.symbolAlphaCutoff)}, stippleCoverage);
      `):A.code.add(m.glsl`float stippleAlpha = getStippleAlpha();`),A.uniforms.add(new u.Float4PassUniform("intrinsicColor",(e=>e.color))),e.output!==i.ShaderOutput.ObjectAndLayerIdColor&&A.code.add(m.glsl`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);`),A.code.add(m.glsl`vec4 color = intrinsicColor * vColor;`),e.innerColorEnabled&&(A.uniforms.add(new u.Float4PassUniform("innerColor",(e=>e.innerColor??e.color)),new h.FloatPassUniform("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio))),A.code.add(m.glsl`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),A.code.add(m.glsl`vec4 finalColor = blendStipple(color, stippleAlpha);`),e.falloffEnabled&&(A.uniforms.add(new h.FloatPassUniform("falloff",(e=>e.falloff))),A.code.add(m.glsl`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`))),A.code.add(m.glsl`
    ${e.output===i.ShaderOutput.ObjectAndLayerIdColor?m.glsl`finalColor.a = 1.0;`:""}

    if (finalColor.a < ${m.glsl.float(c.symbolAlphaCutoff)}) {
      discard;
    }

    ${e.output===i.ShaderOutput.Alpha?m.glsl`fragColor = vec4(finalColor.a);`:""}
    ${e.output===i.ShaderOutput.Color?m.glsl`fragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===i.ShaderOutput.Color&&e.transparencyPassType===b.TransparencyPassType.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    ${e.output===i.ShaderOutput.Highlight?m.glsl`fragColor = vec4(1.0);`:""}
    ${e.output===i.ShaderOutput.Depth?m.glsl`outputDepth(linearDepth);`:""}
    ${e.output===i.ShaderOutput.ObjectAndLayerIdColor?m.glsl`outputObjectAndLayerIdColor();`:""}
  }
  `),C}const P=Object.freeze(Object.defineProperty({__proto__:null,RIBBONLINE_NUM_ROUND_JOIN_SUBDIVISIONS:y,build:C},Symbol.toStringTag,{value:"Module"}));e.RIBBONLINE_NUM_ROUND_JOIN_SUBDIVISIONS=y,e.RibbonLine=P,e.build=C}));
