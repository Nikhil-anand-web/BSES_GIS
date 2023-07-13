/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/mat3f32","../../shaderModules/interfaces","../../shaderModules/Matrix3PassUniform"],(function(r,e,o,a){"use strict";function s(r){r.vertex.uniforms.add(new a.Matrix3PassUniform("colorTextureTransformMatrix",(r=>null!=r.colorTextureTransformMatrix?r.colorTextureTransformMatrix:e.create()))),r.varyings.add("colorUV","vec2"),r.vertex.code.add(o.glsl`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function i(r){r.vertex.uniforms.add(new a.Matrix3PassUniform("normalTextureTransformMatrix",(r=>null!=r.normalTextureTransformMatrix?r.normalTextureTransformMatrix:e.create()))),r.varyings.add("normalUV","vec2"),r.vertex.code.add(o.glsl`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function t(r){r.vertex.uniforms.add(new a.Matrix3PassUniform("emissiveTextureTransformMatrix",(r=>null!=r.emissiveTextureTransformMatrix?r.emissiveTextureTransformMatrix:e.create()))),r.varyings.add("emissiveUV","vec2"),r.vertex.code.add(o.glsl`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function n(r){r.vertex.uniforms.add(new a.Matrix3PassUniform("occlusionTextureTransformMatrix",(r=>null!=r.occlusionTextureTransformMatrix?r.occlusionTextureTransformMatrix:e.create()))),r.varyings.add("occlusionUV","vec2"),r.vertex.code.add(o.glsl`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function u(r){r.vertex.uniforms.add(new a.Matrix3PassUniform("metallicRoughnessTextureTransformMatrix",(r=>null!=r.metallicRoughnessTextureTransformMatrix?r.metallicRoughnessTextureTransformMatrix:e.create()))),r.varyings.add("metallicRoughnessUV","vec2"),r.vertex.code.add(o.glsl`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}r.colorTextureUV=s,r.emissiveTextureUV=t,r.metallicRoughnessTextureUV=u,r.normalTextureUV=i,r.occlusionTextureUV=n,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
