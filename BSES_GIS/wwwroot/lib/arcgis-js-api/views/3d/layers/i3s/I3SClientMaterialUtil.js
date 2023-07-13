/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../Color","../../../../core/Error","../../../../support/requestUtils","../../glTF/internal/resourceUtils","./enums","../../webgl-engine/lib/basicInterfaces","../../webgl-engine/materials/pbrUtils"],(function(e,t,o,a,r,n,s,l){"use strict";async function i(e){const o=[],a=[];if(null==e){return{material:{alphaMode:"opaque",alphaCutoff:.1,doubleSided:!0,cullFace:0,normalTextureId:-1,emissiveTextureId:-1,occlusionTextureId:-1,emissiveFactor:[0,0,0],metallicRoughness:{baseColorFactor:[1,1,1,1],baseColorTextureId:-1,metallicRoughnessTextureId:-1,metallicFactor:0,roughnessFactor:.6000000238418579},wrapTextures:!1,hasParametersFromSource:!0},requiredTextures:o,textureData:a}}const r=d(e);"auto"===e.alphaMode&&console.warn('alphaMode "auto" not supported by I3S PBRMaterial - defaulting to "blend".');return{material:{alphaMode:"auto"===e.alphaMode?"blend":e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,cullFace:e.doubleSided?s.CullFaceOptions.None:s.CullFaceOptions.Back,normalTextureId:await u(e.normalTexture,o,a,n.TextureUsage.Normal),emissiveTextureId:r?await u(e.emissiveTexture,o,a,n.TextureUsage.Emissive):-1,occlusionTextureId:r?await u(e.occlusionTexture,o,a,n.TextureUsage.Occlusion):-1,emissiveFactor:r&&null!=e.emissiveColor?t.toUnitRGB(e.emissiveColor):[0,0,0],metallicRoughness:{baseColorFactor:null!=e.color?t.toUnitRGBA(e.color):[1,1,1,1],baseColorTextureId:await u(e.colorTexture,o,a,n.TextureUsage.Color),metallicRoughnessTextureId:r?await u(e.metallicRoughnessTexture,o,a,n.TextureUsage.MetallicRoughness):-1,metallicFactor:r?e.metallic:0,roughnessFactor:r?e.roughness:0},wrapTextures:!0,hasParametersFromSource:l.useSchematicPBR({normalTexture:e.normalTexture,emissiveTexture:r?e.emissiveTexture:null,emissiveFactor:r?t.toUnitRGB(e.emissiveColor):null,occlusionTexture:r?e.occlusionTexture:null,metallicRoughnessTexture:r?e.metallicRoughnessTexture:null,metallicFactor:r?e.metallic:null,roughnessFactor:r?e.roughness:null})},requiredTextures:o,textureData:a}}async function u(e,t,s,l){if(null==e)return-1;const i=s.length,u=e.data,d=e.url;if(null!=u){if(u instanceof HTMLImageElement||u instanceof HTMLCanvasElement){const e=c(u);return s.push({id:i,usage:l,data:e,encoding:n.TextureEncoding.PNG,downsampled:!1}),t.push({id:i,usage:l,encodings:[{name:void 0,encoding:n.TextureEncoding.PNG}]}),i}if(u instanceof HTMLVideoElement)return-1;if(u instanceof ImageData)throw new o("ImageData textures not supported yet for client side I3S nodes");if(u instanceof r.EncodedMeshTexture)throw new o("EncodedMeshTexture textures not supported yet for client side I3S nodes")}else if(null!=d){const e=new Image;e.src=d;const o=c(await a.loadImageAsync(e,e.src,!1,void 0));return s.push({id:i,usage:l,data:o,encoding:n.TextureEncoding.PNG,downsampled:!1}),t.push({id:i,usage:l,encodings:[{name:void 0,encoding:n.TextureEncoding.PNG}]}),i}return-1}function c(e){const t=1048576,o=4096,a=2;let r=e.width*e.height;if(r>=o){let o=e.width,n=e.height;do{o=Math.ceil(o/a),n=Math.ceil(n/a),r=o*n}while(r>t);const s=document.createElement("canvas");s.width=o,s.height=n;return s.getContext("2d").drawImage(e,0,0,o,n),s}return e}function d(e){return e.hasOwnProperty("metallicRoughnessTexture")}e.convertMeshMaterialToPBRMaterial=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));