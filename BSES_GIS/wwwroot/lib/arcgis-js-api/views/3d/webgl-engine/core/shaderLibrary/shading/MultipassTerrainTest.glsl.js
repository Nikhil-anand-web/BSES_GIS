/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../output/ReadLinearDepth.glsl","../../shaderModules/Float2PassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],(function(e,r,a,t,n,i){"use strict";function s(e,r){r.hasMultipassTerrain&&(e.fragment.include(a.ReadLinearDepth),e.fragment.uniforms.add(new i.Texture2DPassUniform("terrainDepthTexture",((e,r)=>r.multipassTerrain.linearDepthTexture))),e.fragment.uniforms.add(new t.Float2PassUniform("nearFar",((e,r)=>r.camera.nearFar))),e.fragment.uniforms.add(new t.Float2PassUniform("inverseViewport",((e,r)=>r.inverseViewport))),e.fragment.code.add(n.glsl`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${r.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}let o=r._createClass((function(){this.enabled=!1,this.cullAboveGround=!1}));e.MultipassTerrainUniforms=o,e.multipassTerrainTest=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
