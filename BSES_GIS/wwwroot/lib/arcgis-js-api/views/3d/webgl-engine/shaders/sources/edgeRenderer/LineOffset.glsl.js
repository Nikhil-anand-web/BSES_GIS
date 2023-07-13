/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl","../../../core/shaderModules/FloatDrawUniform","../../../core/shaderModules/interfaces","../../../core/shaderModules/Texture2DDrawUniform","./EdgeUtil.glsl","./UnpackAttributes.glsl"],(function(e,t,r,a,s,l,o,u){"use strict";let n=function(e){function r(){return e.apply(this,arguments)||this}return t._inherits(r,e),t._createClass(r)}(s.NoParameters);function c(e,t){e.include(u.UnpackAttributes,t);const{vertex:n,fragment:c}=e;switch(o.usesSketchLogic(t)&&(n.uniforms.add(new l.Texture2DDrawUniform("strokesTexture",(e=>e.strokesTexture.texture))),n.uniforms.add(new a.FloatDrawUniform("strokesLog2Resolution",(e=>Math.log2(e.strokesTexture.resolution))),new a.FloatDrawUniform("strokeVariants",(e=>e.strokesTexture.variants))),e.varyings.add("vStrokeUV","vec2"),c.uniforms.add(new l.Texture2DDrawUniform("strokesTexture",(e=>e.strokesTexture.texture)),new a.FloatDrawUniform("strokesNormalizationScale",(e=>e.strokesTexture.normalizationScale))),n.code.add(s.glsl`void calculateStyleOutputsSketch(float lineLength, UnpackedAttributes unpackedAttributes) {
vec2 sidenessNorm = unpackedAttributes.sidenessNorm;
float lineIndex = clamp(ceil(log2(lineLength)), 0.0, strokesLog2Resolution);
vStrokeUV = vec2(exp2(lineIndex) * sidenessNorm.y, lineIndex * strokeVariants + variantStroke + 0.5) / vec2(textureSize(strokesTexture, 0));
vStrokeUV.x += variantOffset;
}`),e.fragment.include(r.RgbaFloatEncoding),c.code.add(s.glsl`float calculateLineOffsetSketch() {
float offsetNorm = rgba2float(texture(strokesTexture, vStrokeUV));
return (offsetNorm - 0.5) * strokesNormalizationScale;
}
float calculateLinePressureSketch() {
return rgba2float(texture(strokesTexture, vStrokeUV + vec2(0.0, 0.5)));
}`)),t.mode){case o.EdgeUtilMode.SOLID:n.code.add(s.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes) {}`),c.code.add(s.glsl`float calculateLineOffset() {
return 0.0;
}
float calculateLinePressure() {
return 1.0;
}`);break;case o.EdgeUtilMode.SKETCH:n.code.add(s.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}`),c.code.add(s.glsl`float calculateLineOffset() {
return calculateLineOffsetSketch();
}
float calculateLinePressure() {
return calculateLinePressureSketch();
}`);break;case o.EdgeUtilMode.MIXED:e.varyings.add("vType","float"),n.code.add(s.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
vType = unpackedAttributes.type;
if (unpackedAttributes.type <= 0.0) {
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}
}`),c.code.add(s.glsl`float calculateLineOffset() {
if (vType <= 0.0) {
return calculateLineOffsetSketch();
}
else {
return 0.0;
}
}
float calculateLinePressure() {
if (vType <= 0.0) {
return calculateLinePressureSketch();
}
else {
return 1.0;
}
}`)}}e.LineOffset=c,e.LineOffsetDrawParameters=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
