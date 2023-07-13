/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/mat4","../../../../chunks/mat4f64","../core/shaderLibrary/ScreenSpacePass.glsl","../core/shaderLibrary/output/ReadLinearDepth.glsl","../core/shaderLibrary/shading/ReadShadowMap.glsl","../core/shaderLibrary/util/CameraSpace.glsl","../core/shaderLibrary/util/RgbaFloatEncoding.glsl","../core/shaderModules/Float2PassUniform","../core/shaderModules/interfaces","../core/shaderModules/Matrix4PassUniform","../core/shaderModules/ShaderBuilder","../core/shaderModules/Texture2DPassUniform","../../../../chunks/ShadowCastAccumulate.glsl"],(function(a,e,r,s,l,o,d,t,u,c,i,h,n,m,S){"use strict";a.ShadowCastAccumulatePassParameters=S.ShadowCastAccumulatePassParameters,a.ShadowCastMaxSamples=S.ShadowCastMaxSamples,a.build=S.build,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})}));
