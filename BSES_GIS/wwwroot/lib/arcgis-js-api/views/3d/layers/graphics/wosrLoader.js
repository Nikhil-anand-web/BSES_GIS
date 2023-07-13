/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../request","../../../../core/asyncUtils","../../../../core/byteSizeEstimations","../../../../core/Error","../../../../core/Logger","../../../../core/NestedMap","../../../../core/promiseUtils","../../../../core/Version","../../../../chunks/vec3f64","../../../../geometry/support/aaBoundingBox","../../../../support/requestImageUtils","../../webgl-engine/lib/Attribute","../../webgl-engine/lib/basicInterfaces","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/Texture","../../webgl-engine/lib/VertexAttribute","../../webgl-engine/materials/DefaultMaterial","../../../webgl/enums"],(function(e,t,r,n,a,s,o,i,l,u,c,p,d,f,m,g,y,b,x){"use strict";const h=s.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function w(e,t){const r=await A(e,t),a=await E(r.textureDefinitions??{},t);let s=0;for(const n in a)if(a.hasOwnProperty(n)){const e=a[n];s+=e?.image?e.image.width*e.image.height*4:0}return{resource:r,textures:a,size:s+n.estimateNestedObjectSize(r)}}async function A(e,n){const a=null!=n&&n.streamDataRequester;if(a)return v(e,a,n);const s=await r.result(t(e,n));if(!0===s.ok)return s.value.data;i.throwIfAbortError(s.error),M(s.error)}async function v(e,t,n){const a=await r.result(t.request(e,"json",n));if(!0===a.ok)return a.value;i.throwIfAbortError(a.error),M(a.error.details.url)}function M(e){throw new a("",`Request for object resource failed: ${e}`)}function T(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(h.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(h.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(h.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(h.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1)}}else h.warn("Indexed geometries must specify faces"),n=!1;break}default:h.warn(`Unsupported topology '${r}'`),n=!1}e.params.material||(h.warn("Geometry requires material"),n=!1);const a=e.params.vertexAttributes;for(const s in a){a[s].values||(h.warn("Geometries with externally defined attributes are not yet supported"),n=!1)}return n}function I(e,t){const r=new Array,n=new Array,a=new Array,s=new o.NestedMap,i=e.resource,c=l.Version.parse(i.version||"1.0","wosr");k.validate(c);const p=i.model.name,x=i.model.geometries,h=i.materialDefinitions??{},w=e.textures;let A=0;const v=new Map;for(let o=0;o<x.length;o++){const e=x[o];if(!T(e))continue;const i=O(e),l=e.params.vertexAttributes,c=[];for(const t in l){const e=l[t],r=e.values;c.push([t,new d.Attribute(r,e.valuesPerElement,!0)])}const p=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)p.push([e,t[e].values])}const M=i.texture,I=w&&w[M];if(I&&!v.has(M)){const{image:e,parameters:t}=I,r=new g.Texture(e,t);n.push(r),v.set(M,r)}const P=v.get(M),E=P?P.id:void 0,k=i.material;let D=s.get(k,M);if(null==D){const e=h[k.substring(k.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=I&&I.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,a=I?U(I.alphaChannelUsage):void 0,o={ambient:u.fromArray(e.diffuse),diffuse:u.fromArray(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:a,textureAlphaCutoff:.33,textureId:E,initTextureTransparent:!0,doubleSided:!0,cullFace:f.CullFaceOptions.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:I?.parameters.preMultiplyAlpha??!1};null!=t&&t.materialParamsMixin&&Object.assign(o,t.materialParamsMixin),D=new b.DefaultMaterial(o),s.set(k,M,D)}a.push(D);const q=new m.Geometry(D,c,p);A+=p.find((e=>e[0]===y.VertexAttribute.POSITION))?.[1].length??0,r.push(q)}return{engineResources:[{name:p,stageResources:{textures:n,materials:a,geometries:r},pivotOffset:i.model.pivotOffset,numberOfVertices:A,lodThreshold:null}],referenceBoundingBox:P(r)}}function P(e){const t=c.empty();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&(c.expandWithVec3(t,r.bbMin),c.expandWithVec3(t,r.bbMax))})),t}async function E(e,t){const r=new Array;for(const s in e){const n=e[s],a=n.images[0].data;if(!a){h.warn("Externally referenced texture data is not yet supported");continue}const o=n.encoding+";base64,"+a,i="/textureDefinitions/"+s,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",u={noUnpackFlip:!0,wrap:{s:x.TextureWrapMode.REPEAT,t:x.TextureWrapMode.REPEAT},preMultiplyAlpha:U(l)!==f.AlphaDiscardMode.Opaque},c=null!=t&&t.disableTextures?Promise.resolve(null):p.requestImage(o,t);r.push(c.then((e=>({refId:i,image:e,parameters:u,alphaChannelUsage:l}))))}const n=await Promise.all(r),a={};for(const s of n)a[s.refId]=s;return a}function U(e){switch(e){case"mask":return f.AlphaDiscardMode.Mask;case"maskAndTransparency":return f.AlphaDiscardMode.MaskBlend;case"none":return f.AlphaDiscardMode.Opaque;default:return f.AlphaDiscardMode.Blend}}function O(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const k=new l.Version(1,2,"wosr");e.createTextureResources=E,e.load=w,e.processLoadResult=I,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
