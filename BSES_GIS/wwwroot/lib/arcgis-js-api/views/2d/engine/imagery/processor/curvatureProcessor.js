/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["./utils"],(function(r){"use strict";const t={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/curvature",attributes:new Map([["a_position",0],["a_texcoord",1]])};function e(r,e){const{painter:a,rasterFunction:n}=r,{curvatureType:s}=n.parameters,o=[s];return a.materialManager.getProgram(t,o)}function a(t,e,a){r.setSingleImageTextures(t,e,a),r.setCoordsAndTransforms(e);const{width:n,height:s,resolution:o}=a,{zFactor:i}=t.rasterFunction.parameters;e.setUniform2fv("u_srcImageSize",[n,s]),e.setUniform1f("u_zlFactor",200*i/o/o)}return{createProgram:e,bindTextureAndUniforms:a}}));
