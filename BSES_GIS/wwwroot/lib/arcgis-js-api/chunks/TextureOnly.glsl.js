/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","./vec4f64","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],(function(e,r,s,o,n,l,t,a){"use strict";let i=function(e){function o(){var r;return(r=e.apply(this,arguments)||this).color=s.fromValues(1,1,1,1),r}return r._inherits(o,e),r._createClass(o)}(l.NoParameters);function u(){const e=new t.ShaderBuilder;return e.include(o.ScreenSpacePass),e.fragment.uniforms.add(new a.Texture2DPassUniform("tex",(e=>e.texture)),new n.Float4PassUniform("uColor",(e=>e.color))),e.fragment.code.add(l.glsl`void main() {
vec4 texColor = texture(tex, uv);
fragColor = texColor * uColor;
}`),e}const d=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:i,build:u},Symbol.toStringTag,{value:"Module"}));e.TextureOnly=d,e.TextureOnlyPassParameters=i,e.build=u}));
