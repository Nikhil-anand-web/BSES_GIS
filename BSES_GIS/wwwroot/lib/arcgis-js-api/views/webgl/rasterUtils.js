/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/vec2f64","./contextUtils","./enums","./Texture","./TextureDescriptor"],(function(e,t,r,n,i,o){"use strict";function a(e,t,a="nearest",s=!1){const u=!(s&&"u8"===t.pixelType),f=u?n.PixelType.FLOAT:n.PixelType.UNSIGNED_BYTE,m=null==t.pixels||0===t.pixels.length?null:u?t.getAsRGBAFloat():t.getAsRGBA(),c=e.capabilities.textureFloat?.textureFloatLinear,l=new o.TextureDescriptor;return l.width=t.width,l.height=t.height,l.internalFormat=e.type===r.ContextType.WEBGL2&&u?n.SizedPixelFormat.RGBA32F:n.PixelFormat.RGBA,l.samplingMode=!c||"bilinear"!==a&&"cubic"!==a?n.TextureSamplingMode.NEAREST:n.TextureSamplingMode.LINEAR,l.dataType=f,l.wrapMode=n.TextureWrapMode.CLAMP_TO_EDGE,new i.Texture(e,l,m)}function s(e,t){const{spacing:a,offsets:s,coefficients:u,size:[f,m]}=t,c=a[0]>1,l=new o.TextureDescriptor;l.width=c?4*f:f,l.height=m,l.internalFormat=e.type===r.ContextType.WEBGL2?n.SizedPixelFormat.RGBA32F:n.PixelFormat.RGBA,l.dataType=n.PixelType.FLOAT,l.samplingMode=n.TextureSamplingMode.NEAREST,l.wrapMode=n.TextureWrapMode.CLAMP_TO_EDGE;const T=new Float32Array(c?f*m*16:2*s.length);if(c&&null!=u)for(let r=0,n=0;r<u.length;r++)T[n++]=u[r],r%3==2&&(T[n++]=1);else for(let r=0;r<m;r++)for(let e=0;e<f;e++){const t=4*(r*f+e),n=2*(e*m+r);T[t]=s[n],T[t+1]=s[n+1],T[t+3]=-1===s[n]?0:1}return new i.Texture(e,l,T)}function u(e,t){const r=new o.TextureDescriptor;return r.internalFormat=n.PixelFormat.RGBA,r.width=t.length/4,r.height=1,r.samplingMode=n.TextureSamplingMode.NEAREST,r.wrapMode=n.TextureWrapMode.CLAMP_TO_EDGE,new i.Texture(e,r,t)}function f(e,r,n,i=1,o=!0){return{u_flipY:o,u_applyTransform:!!e,u_opacity:i,u_transformSpacing:e?e.spacing:t.ZEROS,u_transformGridSize:e?e.size:t.ZEROS,u_targetImageSize:r,u_srcImageSize:n}}function m(e,t){return{u_colormapOffset:t||0,u_colormapMaxIndex:e?e.length/4-1:0}}function c(e,t){return{u_scale:e,u_offset:t}}function l(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function T(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function p(e,t){const r=e.gl,n=t.glName,i=new Map;if(null==n)return i;const o=r.getProgramParameter(n,r.ACTIVE_UNIFORMS);let a;for(let s=0;s<o;s++)a=r.getActiveUniform(n,s),a&&i.set(a.name,{location:r.getUniformLocation(n,a.name),info:a});return i}function g(e,t,r){Object.keys(r).forEach((n=>{const i=t.get(n)||t.get(n+"[0]");i&&_(e,n,r[n],i)}))}function x(e,t,r,n){r.length===n.length&&(n.some((e=>null==e))||r.some((e=>null==e))||r.forEach(((r,i)=>{t.setUniform1i(r,i),e.bindTexture(n[i],i)})))}function _(e,t,r,i){if(null===i||null==r)return!1;const{info:o}=i;switch(o.type){case n.UniformType.FLOAT:o.size>1?e.setUniform1fv(t,r):e.setUniform1f(t,r);break;case n.UniformType.FLOAT_VEC2:e.setUniform2fv(t,r);break;case n.UniformType.FLOAT_VEC3:e.setUniform3fv(t,r);break;case n.UniformType.FLOAT_VEC4:e.setUniform4fv(t,r);break;case n.UniformType.FLOAT_MAT3:e.setUniformMatrix3fv(t,r);break;case n.UniformType.FLOAT_MAT4:e.setUniformMatrix4fv(t,r);break;case n.UniformType.INT:o.size>1?e.setUniform1iv(t,r):e.setUniform1i(t,r);break;case n.UniformType.BOOL:e.setUniform1i(t,r?1:0);break;case n.UniformType.INT_VEC2:case n.UniformType.BOOL_VEC2:e.setUniform2iv(t,r);break;case n.UniformType.INT_VEC3:case n.UniformType.BOOL_VEC3:e.setUniform3iv(t,r);break;case n.UniformType.INT_VEC4:case n.UniformType.BOOL_VEC4:e.setUniform4iv(t,r);break;default:return!1}return!0}e.createColormapTexture=u,e.createRasterTexture=a,e.createTransformTexture=s,e.getBasicGridUniforms=c,e.getColormapUniforms=m,e.getCommonUniforms=f,e.getShadedReliefUniforms=T,e.getStretchUniforms=l,e.getUniformLocationInfos=p,e.setTextures=x,e.setUniforms=g,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
