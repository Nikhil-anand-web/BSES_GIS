/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../output/ReadLinearDepth.glsl","../../shaderModules/Float2PassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],(function(e,t,r,a,o,s){"use strict";function n(e){e.include(r.ReadLinearDepth),e.uniforms.add(new s.Texture2DPassUniform("geometryDepthTexture",((e,t)=>t.multipassGeometry.linearDepthTexture)),new a.Float2PassUniform("nearFar",((e,t)=>t.camera.nearFar))),e.code.add(o.glsl`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, nearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)}let l=t._createClass((function(){this.enabled=!1}));e.MultipassGeometryUniforms=l,e.multipassGeometryTest=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
