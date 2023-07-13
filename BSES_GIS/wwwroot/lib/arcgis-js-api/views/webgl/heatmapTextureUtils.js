/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../core/maybe","./enums"],(function(e,t,r,a){"use strict";function o(e,o){const{textureFloat:l,colorBufferFloat:i}=e.capabilities,n=l?.textureFloat,f=l?.textureFloatLinear,u=l?.textureHalfFloat,s=l?.textureHalfFloatLinear,m=l?.HALF_FLOAT,x=i?.textureFloat,d=i?.textureHalfFloat,p=i?.floatBlend,_=r.unwrapOrThrow(e.driverTest).floatBufferBlend.result;if(!n&&!u)throw new t("heatmap:missing-texture-float","HeatmapRenderer requires WebGL2 or the WebGL1 extension OES_texture_float or OES_texture_half_float.");if(!x&&!d)throw new t("heatmap:missing-color-buffer-float","HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.");if(!(p&&_||d))throw new t("heatmap:missing-float-blend","HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float."+(_?"":" This device claims support for EXT_float_blend, but does not actually support it."));const F=n&&x&&p&&_,b=u&&d,c=f,T=s,h=!!i?.R32F,E=!!i?.R16F;if(F&&(c||!T))return c||o.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."),{dataType:a.PixelType.FLOAT,samplingMode:c?a.TextureSamplingMode.LINEAR:a.TextureSamplingMode.NEAREST,pixelFormat:h?a.PixelFormat.RED:a.PixelFormat.RGBA,internalFormat:h?a.SizedPixelFormat.R32F:a.PixelFormat.RGBA};if(b)return T||o.warnOnce("Missing WebGL extension OES_texture_half_float_linear. Heatmap quality may be reduced."),{dataType:m,samplingMode:T?a.TextureSamplingMode.LINEAR:a.TextureSamplingMode.NEAREST,pixelFormat:E?a.PixelFormat.RED:a.PixelFormat.RGBA,internalFormat:E?a.SizedPixelFormat.R16F:a.PixelFormat.RGBA};throw new t("heatmap:missing-hardware-support","HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.")}e.loadHeatmapTextureConfiguration=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));