/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","./Projection.glsl","../terrain/TileComposite.glsl","../../shaderModules/BooleanPassUniform","../../shaderModules/Float2PassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],(function(e,o,r,t,c,a,l,s){"use strict";let i=function(e){function r(o,r,t){var c;return(c=e.call(this)||this).common=o,c.u_image=r,c.u_transformGrid=t,c}return o._inherits(r,e),o._createClass(r)}(t.TileCompositePassParameters);function n(e,o){e.include(r.Projection),e.fragment.uniforms.add(new s.Texture2DPassUniform("u_image",(e=>e.u_image)),new c.BooleanPassUniform("u_flipY",(e=>e.common.u_flipY)),new c.BooleanPassUniform("u_applyTransform",(e=>e.common.u_applyTransform)));const{requireBilinearWithNN:t}=o;t&&e.fragment.uniforms.add(new a.Float2PassUniform("u_srcImageSize",(e=>e.common.u_srcImageSize))),e.fragment.code.add(l.glsl`vec2 getPixelLocation(vec2 coords) {
vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;
if (!u_applyTransform) {
return targetLocation;
}
return projectPixelLocation(targetLocation);
}
bool isOutside(vec2 coords){
if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {
return true;
} else {
return false;
}
}`),t?e.fragment.code.add(l.glsl`vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 texelStart = floor(coords * texSize);
vec2 coord0 = texelStart / texSize;
vec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;
vec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;
vec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;
vec4 color0 = texture(sampler, coord0);
vec4 color1 = texture(sampler, coord1);
vec4 color2 = texture(sampler, coord2);
vec4 color3 = texture(sampler, coord3);
vec2 blend = fract(coords * texSize);
vec4 color01 = mix(color0, color1, blend.x);
vec4 color23 = mix(color2, color3, blend.x);
vec4 color = mix(color01, color23, blend.y);
float alpha = floor(color0.a * color1.a * color2.a * color3.a + 0.5);
color = color * alpha + (1.0 - alpha) * texture(sampler, coords);
return color;
}
vec4 getPixel(vec2 pixelLocation) {
return sampleBilinear(u_image, pixelLocation, u_srcImageSize);
}`):e.fragment.code.add(l.glsl`vec4 getPixel(vec2 pixelLocation) {
return texture(u_image, pixelLocation);
}`)}e.Common=n,e.CommonPassParameters=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
