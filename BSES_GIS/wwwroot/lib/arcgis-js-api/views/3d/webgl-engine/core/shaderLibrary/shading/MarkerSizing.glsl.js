/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../support/engineContent/marker","../util/View.glsl","../../shaderModules/FloatPassUniform","../../shaderModules/interfaces","../../../shaders/LineMarkerTechniqueConfiguration"],(function(e,r,a,t,o,n){"use strict";function i(e,i){const{vertex:l,constants:d}=e;d.add("markerSizePerLineWidth","float",r.MARKER_SIZE_PER_LINE_WIDTH),a.addPixelRatio(l,i),null==l.uniforms.get("markerScale")&&l.constants.add("markerScale","float",1),l.code.add(o.glsl`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),i.space===n.LineMarkerSpace.World&&(l.constants.add("maxSegmentLengthFraction","float",.45),l.uniforms.add(new t.FloatPassUniform("perRenderPixelRatio",((e,r)=>r.camera.perRenderPixelRatio))),l.code.add(o.glsl`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}e.MarkerSizing=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
