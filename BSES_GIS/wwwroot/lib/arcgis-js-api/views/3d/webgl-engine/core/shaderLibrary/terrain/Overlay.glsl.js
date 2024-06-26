/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/vec4f64","../../../../../../geometry/support/aaBoundingRect","../../../../terrain/interfaces","../../../../terrain/Overlay","../../renderPasses/AllRenderPasses","../ShaderOutput","../shading/MainLighting.glsl","../shading/PhysicallyBasedRenderingParameters.glsl","../shading/Water.glsl","../../shaderModules/Float4DrawUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],(function(e,o,r,t,a,l,d,i,n,s,v,c,x){"use strict";var u;function y(e,o){const{vertex:r,fragment:t}=e;r.uniforms.add(new v.Float4DrawUniform("overlayTexOffset",((e,o)=>h(e,o))),new v.Float4DrawUniform("overlayTexScale",((e,o)=>p(e,o)))),t.constants.add("overlayOpacity","float",1),t.uniforms.add(new x.Texture2DPassUniform("ovColorTex",((e,o)=>f(e,o)))),g(e,o)}function g(e,o){o.pbrMode!==n.PBRMode.Water&&o.pbrMode!==n.PBRMode.WaterOnIntegratedMesh&&o.pbrMode!==n.PBRMode.TerrainWithWater||e.include(s.Water,o);const{vertex:r,fragment:t}=e;e.varyings.add("vtcOverlay","vec4"),r.code.add(c.glsl`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`),t.code.add(c.glsl`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),t.code.add(c.glsl`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`),t.code.add(c.glsl`vec4 getOverlayColorTexel(vec4 texCoords) {
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec4 color0 = texelFetch(ovColorTex, ivec2(vec2(texCoords.x * 0.5, texCoords.y)*texDim), 0);
vec4 color1 = texelFetch(ovColorTex, ivec2(vec2(texCoords.z * 0.5 + 0.5, texCoords.w)*texDim), 0);
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),o.pbrMode!==n.PBRMode.Water&&o.pbrMode!==n.PBRMode.WaterOnIntegratedMesh&&o.pbrMode!==n.PBRMode.TerrainWithWater||(i.addMainLightDirection(t),i.addMainLightIntensity(t),t.code.add(c.glsl`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, mainLightDirection, colorInput.rgb, mainLightIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`))}function f(e,o){return 0===o.overlays.length?null:e.identifier===l.RenderPassIdentifier.Material&&e.output===d.ShaderOutput.Color?o.overlays[t.OverlayIndex.INNER].getColorTextureNoRasterImage():e.identifier===l.RenderPassIdentifier.Material&&e.output===d.ShaderOutput.ObjectAndLayerIdColor?o.overlays[t.OverlayIndex.INNER].getColorTexture(a.OverlaySource.ObjectAndLayerIdColor):e.identifier===l.RenderPassIdentifier.Highlight?o.overlays[t.OverlayIndex.INNER].getValidTexture(t.RenderTargetType.Highlight):null}function h(e,o){for(const t of o.overlays){const{index:o,extent:a}=t;r.area(a)>0&&(C[2*o]=e.toMapSpace[0]/r.width(a)-a[0]/r.width(a),C[2*o+1]=e.toMapSpace[1]/r.height(a)-a[1]/r.height(a))}return C}function p(e,o){for(const t of o.overlays){const{index:o,extent:a}=t;r.area(a)>0&&(C[2*o]=e.toMapSpace[2]/r.width(a),C[2*o+1]=e.toMapSpace[3]/r.height(a))}return C}e.OverlayMode=void 0,(u=e.OverlayMode||(e.OverlayMode={}))[u.Disabled=0]="Disabled",u[u.Enabled=1]="Enabled",u[u.EnabledWithWater=2]="EnabledWithWater",u[u.COUNT=3]="COUNT";const C=o.create();e.OverlayIM=y,e.getColorTexture=f,e.overlay=g,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
