/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../core/has","../../../../core/mathUtils","./enums","../../webgl-engine/core/material/RenderTexture","../../webgl-engine/core/shaderLibrary/util/AlphaCutoff","../../webgl-engine/core/shaderLibrary/util/EllipsoidMode","../../webgl-engine/lib/basicInterfaces","../../webgl-engine/lib/Texture","../../webgl-engine/materials/pbrUtils","../../../webgl/enums"],(function(e,a,r,t,o,n,s,l,u,i,c){"use strict";function d(e,a){const r=new Map,o=(e,a)=>{if(null==e)return-1;const t=r.get(e.id);if(t)return t.usage|=a,t.id;const o=r.size;return r.set(e.id,{id:o,usage:a}),o},n=a.pbrMetallicRoughness,s=n?.baseColorFactor,u=a.emissiveFactor,c=i.useSchematicPBR({normalTexture:a.normalTexture,emissiveTexture:a.emissiveTexture,emissiveFactor:a.emissiveFactor,occlusionTexture:a.occlusionTexture,metallicRoughnessTexture:n?.metallicRoughnessTexture,metallicFactor:n?.metallicFactor,roughnessFactor:n?.roughnessFactor}),d=c?i.defaultSchematicMRRFactors[0]:n?.metallicFactor??i.defaultAdvancedMRRFactors[0],m=c?i.defaultSchematicMRRFactors[1]:n?.roughnessFactor??i.defaultAdvancedMRRFactors[1],x="mask"===a.alphaMode?t.TextureUsage.Color|t.TextureUsage.AlphaMask:t.TextureUsage.Color,p={baseColorFactor:s?[s[0],s[1],s[2],s[3]]:[1,1,1,1],baseColorTextureId:o(n&&n.baseColorTexture,x),metallicRoughnessTextureId:o(n&&n.metallicRoughnessTexture,t.TextureUsage.MetallicRoughness),metallicFactor:d,roughnessFactor:m},h={alphaMode:a.alphaMode,alphaCutoff:a.alphaCutoff,doubleSided:a.doubleSided,cullFace:"none"===a.cullFace?l.CullFaceOptions.None:"back"===a.cullFace?l.CullFaceOptions.Back:"front"===a.cullFace?l.CullFaceOptions.Front:l.CullFaceOptions.None,normalTextureId:o(a.normalTexture,t.TextureUsage.Normal),emissiveTextureId:o(a.emissiveTexture,t.TextureUsage.Emissive),occlusionTextureId:o(a.occlusionTexture,t.TextureUsage.Occlusion),emissiveFactor:u?[u[0],u[1],u[2]]:[0,0,0],metallicRoughness:p,wrapTextures:!1,hasParametersFromSource:c},f=[];return r.forEach((({usage:a},r)=>{const t=null!=e&&e[r]&&e[r].formats,o=t?g(t.map((({name:e,format:a})=>({name:e,encoding:T[a]})))):[];f.push({id:r,usage:a,encodings:o})})),{material:h,textures:f}}function g(e){return e.sort(((e,a)=>e.encoding-a.encoding))}const T={ktx2:t.TextureEncoding.KTX2,basis:t.TextureEncoding.Basis,dds:t.TextureEncoding.DDS_S3TC,png:t.TextureEncoding.PNG,jpg:t.TextureEncoding.JPG,"ktx-etc2":t.TextureEncoding.KTX_ETC2},m={[l.TextureEncodingMimeType.KTX2_ENCODING]:t.TextureEncoding.Basis,[l.TextureEncodingMimeType.BASIS_ENCODING]:t.TextureEncoding.Basis,[l.TextureEncodingMimeType.DDS_ENCODING]:t.TextureEncoding.DDS_S3TC,"image/png":t.TextureEncoding.PNG,"image/jpg":t.TextureEncoding.JPG,"image/jpeg":t.TextureEncoding.JPG,"image/ktx":t.TextureEncoding.KTX_ETC2};function x(e){const a=e&&e.materialDefinitions?Object.keys(e.materialDefinitions)[0]:null,o=e&&e.textureDefinitions?Object.keys(e.textureDefinitions)[0]:null,n=a?e.materialDefinitions?.[a]:null,s=o?e.textureDefinitions?.[o]:null,u=p();if(null!=n){const e=n.params;e.diffuse&&(u.metallicRoughness.baseColorFactor=[e.diffuse[0],e.diffuse[1],e.diffuse[2],1]),null!=e.doubleSided&&(u.doubleSided=e.doubleSided,u.cullFace=e.doubleSided?l.CullFaceOptions.None:l.CullFaceOptions.Back),"none"!==e.cullFace&&"front"!==e.cullFace&&"back"!==e.cullFace||(u.cullFace="none"===e.cullFace?l.CullFaceOptions.None:"back"===e.cullFace?l.CullFaceOptions.Back:l.CullFaceOptions.Front),e.transparency&&(u.metallicRoughness.baseColorFactor[3]=r.clamp(1-e.transparency,0,1)),(e.useVertexColorAlpha||u.metallicRoughness.baseColorFactor[3]<1)&&(u.alphaMode="blend")}const i=[];if(null!=s){const e=0;!s.wrap||"repeat"!==s.wrap[0]&&"repeat"!==s.wrap[1]||(u.wrapTextures=!0);let a=t.TextureUsage.Color;"rgba"===s.channels&&(u.alphaMode="blend",a|=t.TextureUsage.AlphaMask);const r=s.images.length-1,o=s.images[r],n=e=>e&&e.split("/").pop(),l=Array.isArray(s.encoding)?g(s.encoding.map(((e,a)=>({name:n(o.href[a]),encoding:m[e]||0})))):[{name:n(o.href),encoding:m[s.encoding]||0}];i.push({id:e,usage:a,encodings:l}),u.metallicRoughness.baseColorTextureId=e}return{material:u,textures:i}}const p=()=>({alphaMode:"opaque",alphaCutoff:n.defaultMaskAlphaCutoff,doubleSided:!0,cullFace:l.CullFaceOptions.None,normalTextureId:-1,emissiveTextureId:-1,occlusionTextureId:-1,emissiveFactor:[0,0,0],metallicRoughness:{baseColorFactor:[.8,.8,.8,1],baseColorTextureId:-1,metallicRoughnessTextureId:-1,metallicFactor:0,roughnessFactor:.6},wrapTextures:!1,hasParametersFromSource:!0});function h(e,a,r,o){if(null==e||null==e.data)return null;const n=e.data,s=o.renderingContext.parameters.maxMaxAnisotropy,l=!e.downsampled&&s>1,i=r||!a.wrapTextures?f:F,c=R(e.encoding),d=e.usage&t.TextureUsage.Color?"opaque"===a.alphaMode?3:4:3;return new u.Texture(n,{mipmap:l,maxAnisotropy:s,encoding:c,wrap:i,components:d,noUnpackFlip:!0})}const f={s:c.TextureWrapMode.CLAMP_TO_EDGE,t:c.TextureWrapMode.CLAMP_TO_EDGE},F={s:c.TextureWrapMode.REPEAT,t:c.TextureWrapMode.REPEAT};function C(e,a,u,c,d,g){const T=g.rendererTextureUsage,m=e=>b(c,u,e&T),x=a.metallicRoughness.baseColorFactor,p=r.clamp(a.metallicRoughness.baseColorFactor[3],0,1);e.baseColor=[x[0],x[1],x[2],p],e.hasParametersFromSource=!!a.hasParametersFromSource,e.usePBR=g.usePBR,e.mrrFactors=[a.metallicRoughness.metallicFactor,a.metallicRoughness.roughnessFactor,a.hasParametersFromSource?i.defaultSchematicMRRFactors[2]:i.defaultAdvancedMRRFactors[2]],e.emissiveFactor=a.emissiveFactor,e.isIntegratedMesh=g.isIntegratedMesh,e.textureAlphaCutoff="mask"===a.alphaMode?a.alphaCutoff:n.defaultMaskAlphaCutoff,e.alphaDiscardMode="opaque"===a.alphaMode?l.AlphaDiscardMode.Opaque:"mask"===a.alphaMode?l.AlphaDiscardMode.Mask:l.AlphaDiscardMode.MaskBlend;const h=[],f=m(t.TextureUsage.Color|t.TextureUsage.AlphaMask);null!=f&&(e.baseColorTexture=new o.RenderTexture(d,f),h.push(e.baseColorTexture.loadPromise));const F=m(t.TextureUsage.MetallicRoughness);null!=F&&(e.metallicRoughnessTexture=new o.RenderTexture(d,F),h.push(e.metallicRoughnessTexture.loadPromise));const C=m(t.TextureUsage.Emissive);null!=C&&(e.emissionTexture=new o.RenderTexture(d,C),h.push(e.emissionTexture.loadPromise));const M=m(t.TextureUsage.Occlusion);null!=M&&(e.occlusionTexture=new o.RenderTexture(d,M),h.push(e.occlusionTexture.loadPromise));const E=m(t.TextureUsage.Normal);return null!=E&&(e.normalTexture=new o.RenderTexture(d,E),h.push(e.normalTexture.loadPromise)),e.commonMaterialParameters.hasSlicePlane=g.slicePlaneEnabled,e.commonMaterialParameters.doubleSided=a.doubleSided,e.commonMaterialParameters.cullFace=a.cullFace,e.ellipsoidMode=s.getEllipsoidMode(g.viewSpatialReference),Promise.all(h)}function M(e){const r=!!e.compressedTextureS3TC,o=!!e.compressedTextureETC,n=a("disable-feature:i3s-basis")?0:t.TextureEncoding.Basis|t.TextureEncoding.KTX2,s=t.TextureEncoding.JPG|t.TextureEncoding.PNG,l=n|t.TextureEncoding.DDS_S3TC;return s|(r?l:0)|(o?n:0)}function E(e,a){if(null!=a)return e.find((e=>0!=(e.encoding&a)))}function b(e,a,r){if(null==e||r===t.TextureUsage.None)return null;for(let t=0;t<e.length;t++){const o=e[t];if(null!=o&&0!=(o.usage&r)){const e=a[t];return null!=e?e.id:null}}return null}function R(e){switch(e){case t.TextureEncoding.KTX2:return l.TextureEncodingMimeType.KTX2_ENCODING;case t.TextureEncoding.Basis:return l.TextureEncodingMimeType.BASIS_ENCODING;case t.TextureEncoding.DDS_S3TC:return l.TextureEncodingMimeType.DDS_ENCODING;case t.TextureEncoding.PNG:return"image/png";case t.TextureEncoding.JPG:return"image/jpeg";case t.TextureEncoding.KTX_ETC2:return"image/ktx";default:return""}}e.configureMaterial=C,e.createTexture=h,e.defaultMaterial=p,e.getMaterialAndTextures=d,e.getMaterialAndTexturesFromShared=x,e.getSupportedEncodings=M,e.selectEncoding=E,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
