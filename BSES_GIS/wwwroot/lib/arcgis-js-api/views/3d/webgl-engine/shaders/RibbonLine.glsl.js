/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../core/shaderLibrary/ForwardLinearDepth.glsl","../core/shaderLibrary/ShaderOutput","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl","../core/shaderLibrary/attributes/RibbonVertexPosition.glsl","../core/shaderLibrary/output/OutputDepth.glsl","../core/shaderLibrary/shading/LineStipple.glsl","../core/shaderLibrary/shading/MarkerSizing.glsl","../core/shaderLibrary/shading/MultipassTerrainTest.glsl","../core/shaderLibrary/shading/PiUtils.glsl","../core/shaderLibrary/util/AlphaCutoff","../core/shaderLibrary/util/ColorConversion.glsl","../core/shaderLibrary/util/View.glsl","../core/shaderModules/Float2PassUniform","../core/shaderModules/Float4PassUniform","../core/shaderModules/FloatPassUniform","../core/shaderModules/interfaces","../core/shaderModules/Matrix4PassUniform","../core/shaderModules/ShaderBuilder","../lib/TransparencyPassType","../lib/VertexAttribute","./LineMarkerTechniqueConfiguration","./RibbonLineTechniqueConfiguration","../../../../chunks/RibbonLine.glsl"],(function(r,e,i,s,a,o,l,t,d,n,u,h,b,c,g,L,y,p,I,M,S,f,N,O,U){"use strict";r.RIBBONLINE_NUM_ROUND_JOIN_SUBDIVISIONS=U.RIBBONLINE_NUM_ROUND_JOIN_SUBDIVISIONS,r.build=U.build,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));