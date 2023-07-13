/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../../../chunks/RasterColorizer.glsl","../../webgl/enums","../../webgl/rasterUtils"],(function(e,t,r,s,i,o){"use strict";const n={bandCount:3,outMin:0,outMax:1,minCutOff:[0,0,0],maxCutOff:[255,255,255],factor:[1/255,1/255,1/255],useGamma:!1,gamma:[1,1,1],gammaCorrection:[1,1,1],colormap:null,colormapOffset:null,stretchType:"none",type:"stretch"};let a=function(){function e(e,t,r=null,s=null){this.type="raster-tile",this._memoryUsed=null,this._source=null,this._symbolizerParameters=null,this._bandIds=null,this._interpolation=null,this._dirty=!1,this._transformGrid=null,this.isRendereredSource=!1,this.symbolizerRenderer=null,this.rawPixelData=null,this.lij=null,this.opacity=1,this.lij=e,this.source=t,this.width=r||t.width,this.height=s||t.height}var a=e.prototype;return a.bind=function(e){return!!(this.source&&this.source.pixels&&this.source.pixels.length>0)&&((null==this._rasterTexture||this._dirty)&&this._updateRasterTexture(e,this.bandIds),null!=this._rasterTexture&&(this._updateColormapTexture(e),this.transformGrid&&null==this._transformGridTexture&&(this._transformGridTexture=o.createTransformTexture(e,this.transformGrid))),!0)},a.getUniforms=function(){const{symbolizerParameters:e,transformGrid:t,width:r,height:i,opacity:n}=this,a=o.getCommonUniforms(t,[r,i],[this.source.width,this.source.height],n),l=o.getColormapUniforms(e.colormap,e.colormapOffset),u="stretch"===this.symbolizerParameters.type?o.getStretchUniforms(this.symbolizerParameters):null,h="hillshade"===this.symbolizerParameters.type?o.getShadedReliefUniforms(this.symbolizerParameters):null;return new s.ColorizerUniforms(a,l,u||h,this._rasterTexture,this._transformGridTexture,this._colormapTexture)},a.release=function(){return this._rasterTexture=r.disposeMaybe(this._rasterTexture),this._transformGridTexture=r.disposeMaybe(this._transformGridTexture),this._colormapTexture=r.disposeMaybe(this._colormapTexture),this.source=null,this.transformGrid=null,this.rawPixelData=null,!0},a._updateRasterTexture=function(e,t){const s=this.source?this.source.extractBands(t):null;if(!(s&&s.pixels&&s.pixels.length>0))return void(this._rasterTexture=r.disposeMaybe(this._rasterTexture));const i=null==t&&null==this.bandIds||null!=t&&null!=this.bandIds&&t.join("")===this.bandIds.join("");if(null!=this._rasterTexture&&i)return;this._rasterTexture=r.disposeMaybe(this._rasterTexture);const n=this._getRasterTextureInterpolation(this.interpolation);this._rasterTexture=o.createRasterTexture(e,s,n,this.isRendereredSource||this.hasStretchTypeNone())},a.hasStretchTypeNone=function(){return"stretchType"in this.symbolizerParameters&&"none"===this.symbolizerParameters.stretchType&&!this.symbolizerParameters.useGamma&&"u8"===this.source.pixelType},a._getRasterTextureInterpolation=function(e){return"lut"===this.symbolizerParameters.type||"nearest"===e||"majority"===e||this.isBilinearWithStretchColorRamp?"nearest":"bilinear"},a._updateColormapTexture=function(e){const t=this._colormap,s=this.symbolizerParameters.colormap;return s?t?s.length!==t.length||s.some(((e,r)=>e!==t[r]))?(this._colormapTexture=r.disposeMaybe(this._colormapTexture),this._colormapTexture=o.createColormapTexture(e,s),void(this._colormap=s)):void 0:(this._colormapTexture=o.createColormapTexture(e,s),void(this._colormap=s)):(this._colormapTexture=r.disposeMaybe(this._colormapTexture),void(this._colormap=null))},t._createClass(e,[{key:"source",get:function(){return this._source},set:function(e){this._source=e,this._rasterTexture=r.disposeMaybe(this._rasterTexture),this._memoryUsed=null}},{key:"symbolizerParameters",get:function(){return this.isRendereredSource?{...n,maxCutOff:[1,1,1],factor:[1,1,1]}:this._symbolizerParameters||n},set:function(e){this._symbolizerParameters=e}},{key:"bandIds",get:function(){return this._bandIds},set:function(e){if(null!=e&&e.length>0){this._bandIds&&e.every(((e,t)=>!!this._bandIds?.[t]&&e===this._bandIds[t]))||(this._bandIds=e,this._dirty=!0)}else this._bandIds=null}},{key:"interpolation",get:function(){return this._interpolation||"nearest"},set:function(e){if(this._interpolation=e,null!=this._rasterTexture){const t=this._getRasterTextureInterpolation(e);this._rasterTexture.setSamplingMode("bilinear"===t?i.TextureSamplingMode.LINEAR:i.TextureSamplingMode.NEAREST)}}},{key:"transformGrid",get:function(){return this._transformGrid},set:function(e){this._transformGrid=e,this._transformGridTexture=r.disposeMaybe(this._transformGridTexture),this._memoryUsed=null}},{key:"isBilinearWithStretchColorRamp",get:function(){const{symbolizerParameters:e}=this;return"bilinear"===this.interpolation&&null!=e.colormap&&"stretch"===e.type}},{key:"memoryUsage",get:function(){if(null==this._memoryUsed){const e=[this._rasterTexture,this._transformGridTexture,this._colormapTexture];this._memoryUsed=e.map((e=>null!=e?e.descriptor.width*e.descriptor.height*4:0)).reduce(((e,t)=>e+t),0)}return this._memoryUsed}}]),e}();e.RasterTile=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
