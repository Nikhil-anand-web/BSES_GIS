/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],(function(e,r,s,a,t,i,n){"use strict";let o=function(e){function s(){var r;return(r=e.apply(this,arguments)||this).opacity=1,r}return r._inherits(s,e),r._createClass(s)}(t.NoParameters);function l(e){const r=new i.ShaderBuilder;return r.include(s.ScreenSpacePass),r.fragment.uniforms.add(new n.Texture2DPassUniform("tex",(e=>e.texture))),e.hasOpacityFactor&&r.fragment.uniforms.add(new a.FloatPassUniform("opacity",(e=>e.opacity))),r.fragment.code.add(t.glsl`
    void main() {
      fragColor = texture(tex, uv) ${e.hasOpacityFactor?"* opacity":""};
    }`),r}const d=Object.freeze(Object.defineProperty({__proto__:null,CompositingPassParameters:o,build:l},Symbol.toStringTag,{value:"Module"}));e.Compositing=d,e.CompositingPassParameters=o,e.build=l}));
