/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../collections/Component/Material/shader/ComponentData.glsl","../../../core/shaderLibrary/util/DoublePrecision.glsl","../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl","../../../core/shaderModules/Float3DrawUniform","../../../core/shaderModules/Float3PassUniform","../../../core/shaderModules/FloatPassUniform","../../../core/shaderModules/interfaces","../../../core/shaderModules/Matrix3DrawUniform","../../../core/shaderModules/Matrix3PassUniform","../../../core/shaderModules/Matrix4PassUniform","../../../core/shaderModules/Texture2DDrawUniform","../../../lib/VertexAttribute"],(function(e,o,t,r,l,a,n,d,i,s,c,m,f){"use strict";function u(e,u){const v=e.vertex;v.include(r.RgbaFloatEncoding),v.uniforms.add(new n.FloatPassUniform("distanceFalloffFactor",(e=>e.distanceFalloffFactor))),v.code.add(d.glsl`float distanceBasedPerspectiveFactor(float distance) {
return clamp(sqrt(distanceFalloffFactor / distance), 0.0, 1.0);
}`),v.uniforms.add(new m.Texture2DDrawUniform("componentDataTex",(e=>e.componentDataTexture))),e.attributes.add(f.VertexAttribute.COMPONENTINDEX,"float"),v.constants.add("componentColorFieldOffset","float",0),v.constants.add("componentOtherFieldOffset","float",1),v.constants.add("componentVerticalOffsetFieldOffset","float",2),v.constants.add("componentFieldCount","float",3),v.constants.add("lineWidthFractionFactor","float",8),v.constants.add("extensionLengthOffset","float",128),v.constants.add("verticalOffsetScale","float",2*o.MAX_ELEVATION_OFFSET),v.code.add(d.glsl`vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
float fieldIndex = componentFieldCount * componentIndex + fieldOffset;
float texSize = float(textureSize(componentDataTex, 0).x);
float colIndex = mod(fieldIndex, texSize);
float rowIndex = floor(fieldIndex / texSize);
return vec2(colIndex, rowIndex) + 0.5;
}
struct ComponentData {
vec4 color;
float lineWidth;
float extensionLength;
float type;
float verticalOffset;
};
ComponentData readComponentData() {
vec2 colorIndex = _componentTextureCoords(componentIndex, componentColorFieldOffset);
vec2 otherIndex = _componentTextureCoords(componentIndex, componentOtherFieldOffset);
vec2 verticalOffsetIndex = _componentTextureCoords(componentIndex, componentVerticalOffsetFieldOffset);
vec4 colorValue = texelFetch(componentDataTex, ivec2(colorIndex), 0);
vec4 otherValue = texelFetch(componentDataTex, ivec2(otherIndex), 0);
float verticalOffset = (rgba2float(texelFetch(componentDataTex, ivec2(verticalOffsetIndex), 0)) - 0.5) * verticalOffsetScale;
return ComponentData(
vec4(colorValue.rgb, colorValue.a * otherValue.w),
otherValue.x * (255.0 / lineWidthFractionFactor),
otherValue.y * 255.0 - extensionLengthOffset,
-(otherValue.z * 255.0) + 0.5,
verticalOffset
);
}`),u.legacy?v.code.add(d.glsl`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):(v.uniforms.add(new i.Matrix3DrawUniform("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel))),v.code.add(d.glsl`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)),u.silhouette?(e.attributes.add(f.VertexAttribute.NORMALA,"vec3"),e.attributes.add(f.VertexAttribute.NORMALB,"vec3"),v.code.add(d.glsl`vec3 worldNormal() {
return _modelToWorldNormal(normalize(normalA + normalB));
}`)):(e.attributes.add(f.VertexAttribute.NORMAL,"vec3"),v.code.add(d.glsl`vec3 worldNormal() {
return _modelToWorldNormal(normal);
}`)),u.legacy?v.code.add(d.glsl`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(v.include(t.DoublePrecision,u),v.include(t.DoublePrecision,u),v.uniforms.add(new s.Matrix3PassUniform("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new i.Matrix3DrawUniform("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.Float3DrawUniform("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL)),new l.Float3DrawUniform("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new a.Float3PassUniform("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new a.Float3PassUniform("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH))),v.code.add(d.glsl`
      void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
        vec3 rotatedModelPosition = transformWorldFromModelRS * modelPos;

        vec3 transformCameraRelativeFromModel = dpAdd(
          transformWorldFromModelTL,
          transformWorldFromModelTH,
          -transformWorldFromViewTL,
          -transformWorldFromViewTH
        );

        worldPos = transformCameraRelativeFromModel + rotatedModelPosition;

        if (verticalOffset != 0.0) {
          vec3 vUp = ${u.spherical?d.glsl`normalize(transformWorldFromModelTL + rotatedModelPosition);`:d.glsl`vec3(0.0, 0.0, 1.0);`}
          worldPos += verticalOffset * vUp;
        }

        viewPos = transformViewFromCameraRelativeRS * worldPos;
      }
    `)),v.uniforms.add(new c.Matrix4PassUniform("transformProjFromView",((e,o)=>o.camera.projectionMatrix))),v.code.add(d.glsl`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`),v.code.add(d.glsl`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function v(o){return o.mode===e.EdgeUtilMode.SKETCH||o.mode===e.EdgeUtilMode.MIXED}function x(o){return o.mode===e.EdgeUtilMode.SOLID||o.mode===e.EdgeUtilMode.MIXED}var F,M;e.EdgeUtilMode=void 0,(F=e.EdgeUtilMode||(e.EdgeUtilMode={}))[F.SOLID=0]="SOLID",F[F.SKETCH=1]="SKETCH",F[F.MIXED=2]="MIXED",F[F.COUNT=3]="COUNT",e.EdgeSilhouette=void 0,(M=e.EdgeSilhouette||(e.EdgeSilhouette={}))[M.REGULAR=0]="REGULAR",M[M.SILHOUETTE=1]="SILHOUETTE",e.EdgeUtil=u,e.usesSketchLogic=v,e.usesSolidLogic=x,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
