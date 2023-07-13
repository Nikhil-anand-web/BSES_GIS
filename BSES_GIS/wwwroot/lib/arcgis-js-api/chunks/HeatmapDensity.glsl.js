/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../views/3d/terrain/Overlay","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,t,i,r,a,o,s){"use strict";function d(e){const d=new o.ShaderBuilder,{vertex:l,fragment:u,attributes:n,varyings:c}=d;i.addProjViewLocalOrigin(l,e);const{isAttributeDriven:f,usesHalfFloat:v}=e;return n.add(s.VertexAttribute.POSITION,"vec3"),n.add(s.VertexAttribute.UV0,"vec2"),f&&(n.add(s.VertexAttribute.FEATUREATTRIBUTE,"float"),c.add("attributeValue","float")),v&&d.constants.add("compressionFactor","float",.25),c.add("unitCirclePos","vec2"),l.uniforms.add(new r.FloatPassUniform("radius",(({resolutionForScale:e,searchRadius:i},{camera:r,screenToWorldRatio:a})=>2*i*(0===e?1:e/a)*r.pixelRatio/r.fullViewport[2]/t.OverlayStretch))),l.code.add(a.glsl`
    void main() {
      unitCirclePos = uv0;

      vec4 posProj = proj * (view * vec4(${s.VertexAttribute.POSITION}, 1.0));
      vec4 quadOffset = vec4(unitCirclePos * radius, 0.0, 0.0);

      ${f?a.glsl`attributeValue = ${s.VertexAttribute.FEATUREATTRIBUTE};`:""}
      gl_Position = posProj + quadOffset;
    }
  `),u.code.add(a.glsl`
    void main() {
      float radiusRatioSquared = dot(unitCirclePos, unitCirclePos);
      if (radiusRatioSquared > 1.0) {
        discard;
      }

      float oneMinusRadiusRatioSquared = 1.0 - radiusRatioSquared;
      float density = oneMinusRadiusRatioSquared * oneMinusRadiusRatioSquared ${f?a.glsl` * attributeValue`:""} ${v?a.glsl` * compressionFactor`:""};
      fragColor = vec4(density);
    }
  `),d}const l=Object.freeze(Object.defineProperty({__proto__:null,build:d},Symbol.toStringTag,{value:"Module"}));e.HeatmapDensity=l,e.build=d}));
