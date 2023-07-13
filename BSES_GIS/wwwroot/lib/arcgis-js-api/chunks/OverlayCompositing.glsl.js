/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","../views/3d/terrain/interfaces","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/IntegerPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],(function(e,r,a,n,s,o,i,t,l){"use strict";let d=function(e){function n(){var r;return(r=e.apply(this,arguments)||this).overlayIndex=a.OverlayIndex.INNER,r.opacity=1,r}return r._inherits(n,e),r._createClass(n)}(i.NoParameters);function u(){const e=new t.ShaderBuilder;return e.include(n.ScreenSpacePass),e.fragment.uniforms.add(new l.Texture2DPassUniform("tex",(e=>e.texture))),e.fragment.uniforms.add(new o.IntegerPassUniform("overlayIdx",(e=>e.overlayIndex))),e.fragment.uniforms.add(new s.FloatPassUniform("opacity",(e=>e.opacity))),e.fragment.code.add(i.glsl`void main() {
vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
fragColor = texture(tex, overlayUV) * opacity;
}`),e}const c=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:d,build:u},Symbol.toStringTag,{value:"Module"}));e.OverlayCompositing=c,e.OverlayCompositingPassParameters=d,e.build=u}));
