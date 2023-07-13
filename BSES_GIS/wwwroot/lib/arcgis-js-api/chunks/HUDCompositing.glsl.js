/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],(function(e,r,s,n,t,i){"use strict";let a=function(e){function s(){return e.apply(this,arguments)||this}return r._inherits(s,e),r._createClass(s)}(n.NoParameters);function o(){const e=new t.ShaderBuilder;return e.include(s.ScreenSpacePass),e.fragment.uniforms.add(new i.Texture2DPassUniform("tex",(e=>e.texture))),e.fragment.code.add(n.glsl`void main() {
fragColor = vec4(1.0 - texture(tex, uv).a);
}`),e}const l=Object.freeze(Object.defineProperty({__proto__:null,HUDCompositingPassParameters:a,build:o},Symbol.toStringTag,{value:"Module"}));e.HUDCompositing=l,e.HUDCompositingPassParameters=a,e.build=o}));
