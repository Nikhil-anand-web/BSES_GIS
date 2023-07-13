/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../../chunks/vec2f64","../../../../webgl/rasterUtils"],(function(t,e){"use strict";const r={vsPath:"raster/common",fsPath:"raster/reproject",attributes:new Map([["a_position",0],["a_texcoord",1]])};function i(t,e){const{painter:i}=t,n=[],{interpolation:s,transformGrid:o}=e,a=!!t.rasterFunction?.parameters?.requireBilinear,c="bilinear"===s?!t.context.capabilities.textureFloat?.textureFloatLinear:a;return"cubic"===s?n.push("bicubic"):c&&n.push("bilinear"),o&&(n.push("applyProjection"),1===o.spacing[0]&&n.push("lookupProjection")),i.materialManager.getProgram(r,n)}function n(r,i,n){const{names:s,textures:o}=n.getTextures({forProcessing:!0});e.setTextures(r.context,i,s,o),i.setUniform1f("u_scale",1),i.setUniform2fv("u_offset",[0,0]),i.setUniform2fv("u_coordScale",[1,1]),i.setUniformMatrix3fv("u_dvsMat3",[2,0,0,0,2,0,-1,-1,0]),i.setUniform1i("u_flipY",0),i.setUniform1f("u_opacity",1);const{width:a,height:c,source:f,transformGrid:u}=n;i.setUniform2fv("u_srcImageSize",[f.width,f.height]),i.setUniform2fv("u_targetImageSize",[a,c]),i.setUniform2fv("u_transformSpacing",u?u.spacing:t.ZEROS),i.setUniform2fv("u_transformGridSize",u?u.size:t.ZEROS)}return{createProgram:i,bindTextureAndUniforms:n}}));
