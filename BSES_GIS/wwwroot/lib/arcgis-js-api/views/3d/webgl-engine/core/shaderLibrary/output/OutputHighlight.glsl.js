/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/vec4f64","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],(function(e,t,l,g){"use strict";const o=t.fromValues(1,1,0,1),d=t.fromValues(1,0,1,1);function i(e){e.fragment.uniforms.add(new g.Texture2DPassUniform("depthTexture",((e,t)=>t.highlightDepthTexture))),e.fragment.constants.add("occludedHighlightFlag","vec4",o).add("unoccludedHighlightFlag","vec4",d),e.fragment.code.add(l.glsl`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}e.OutputHighlight=i,e.occludedHighlightFlag=o,e.unoccludedHighlightFlag=d,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
