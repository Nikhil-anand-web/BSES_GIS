/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./AlignPixel.glsl","../output/ReadLinearDepth.glsl","../shading/MultipassGeometryTest.glsl","../util/RgbaFloatEncoding.glsl","../../shaderModules/Float2PassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],(function(e,t,r,o,a,i,s,n){"use strict";function l(e,l){const{vertex:p,fragment:c}=e;p.include(t.AlignPixel),l.hasMultipassGeometry&&p.include(o.multipassGeometryTest),l.hasMultipassTerrain&&e.varyings.add("depth","float"),p.code.add(s.glsl`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${l.hasMultipassGeometry?s.glsl`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${l.hasMultipassTerrain?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),l.hasMultipassTerrain&&c.include(r.ReadLinearDepth),l.hasMultipassTerrain&&c.uniforms.add(new n.Texture2DPassUniform("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture)),new i.Float2PassUniform("nearFar",((e,t)=>t.camera.nearFar))),c.include(a.RgbaFloatEncoding),c.code.add(s.glsl`
  void main() {
    fragColor = vec4(1);
    ${l.hasMultipassTerrain?s.glsl`
          // Read the rgba data from the texture linear depth
          vec4 terrainDepthData = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), nearFar);

          // If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          // Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            fragColor.g = 0.5;
          }`:""}
  }
  `)}e.HUDOcclusionPass=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
