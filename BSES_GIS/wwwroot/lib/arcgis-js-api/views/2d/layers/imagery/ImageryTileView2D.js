/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../engine/imagery/RasterTileContainer","./BaseImageryTileSubView2D","../support/util"],(function(e,t,r,i,s,n,o,a,l,c){"use strict";let u=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).type="raster",e}e._inherits(r,t);var i=r.prototype;return i.attach=function(){e._get(e._getPrototypeOf(r.prototype),"attach",this).call(this),this.container=new a.RasterTileContainer(this._tileInfoView),this.container.isCustomTilingScheme=this._isCustomTilingScheme,this.updateRasterFunctionParameters()},i.detach=function(){e._get(e._getPrototypeOf(r.prototype),"detach",this).call(this),this.container.removeAllChildren(),this.container=null},i.canUseWebGLForProcessing=function(){const{symbolizer:e}=this.layer,t=e.lookup?.colormapLut?.indexedColormap,r=t&&t.length>this._maxIndexedColormapSize;return this.useWebGLForProcessing&&e.canRenderInWebGL&&!r&&!("majority"===this.layer.interpolation&&c.canUseMajorityInterpolationOnDataSource(this.layer))},i.fetchTile=function(e,t){return this.layer.fetchTile(e.level,e.row,e.col,t)},i.updateRasterFunctionParameters=function(){const{raster:e,type:t}=this.layer,{container:r}=this;if("Function"!==e.datasetFormat||"wcs"===t)return r.rasterFunctionChain=null,r.children.forEach((e=>{const{bitmap:t}=e;t&&(t.suspended=!0,t.processed=!1,t.projected&&(t.invalidateTexture(),t.rasterTexture=null))})),void(this._rasterFunctionState="na");const i=this._rasterFunctionState,{rasterFunction:s,primaryRasters:n}=e,o=s.supportsGPU&&(!n||n.rasters.length<=1),a=o?s.flatWebGLFunctionChain:null,{renderer:l}=this.layer,c=!o||!a?.functions.length||"raster-stretch"===l?.type&&l.dynamicRangeAdjustment||!this.canUseWebGLForProcessing();r.rasterFunctionChain=c?null:a;const u=null==s?"na":r.rasterFunctionChain?"gpu":"cpu";r.children.forEach((e=>{const{bitmap:t}=e;t&&(t.suspended=i!==u,t.processed=!1,t.processedTexture=null)})),this._rasterFunctionState=u},i.updateTileSource=async function(e,t){const r=this._getBandIds(),i=this._getLayerInterpolation(),s=this.canUseWebGLForProcessing(),{source:n,globalSymbolizerParams:o,suspended:a,coords:l,resolution:c}=t,u=this.layerView.hasTilingEffects?o:t.symbolizerParams,{bitmap:p}=e;if([p.x,p.y]=l,p.resolution=c,n&&null!=n&&null!=n.pixelBlock){const e={extent:n.extent,pixelBlock:n.pixelBlock};if(p.rawPixelData=e,s)p.source=n.pixelBlock,p.isRendereredSource=!1;else{const t=await this.layer.applyRenderer(e,"stretch"===o?.type?o:void 0);p.source=t,p.isRendereredSource=!0}p.symbolizerParameters=s?u:null,s?p.transformGrid||(p.transformGrid=n.transformGrid):p.transformGrid=null}else{const e=this.createEmptyTilePixelBlock();p.source=e,p.symbolizerParameters=s?u:null,p.transformGrid=null}p.bandIds=s?r:null,p.width=this._tileInfoView.tileInfo.size[0],p.height=this._tileInfoView.tileInfo.size[1],p.interpolation=i,p.suspended=a,p.invalidateTexture()},i.updateTileSymbolizerParameters=async function(e,t){const{local:r,global:i}=t,s=this._getBandIds(),n=this._getLayerInterpolation(),o=this.canUseWebGLForProcessing(),{bitmap:a}=e,{rawPixelData:l}=a;o||null==l?(a.isRendereredSource&&null!=l&&(a.source=l.pixelBlock),a.isRendereredSource=!1):(a.source=await this.layer.applyRenderer(l,"stretch"===i?.type?i:void 0),a.isRendereredSource=!0),a.symbolizerParameters=o?this.layerView.hasTilingEffects?i:r:null,a.bandIds=o?s:null,a.interpolation=n,a.suspended=!1},i._getLayerInterpolation=function(){const{interpolation:e,renderer:t}=this.layer;if(!t)return e;const r=t.type;return"raster-colormap"===r||"unique-value"===r||"class-breaks"===r?"nearest":"raster-stretch"===t.type&&null!=t.colorRamp?"bilinear"===e||"cubic"===e?"bilinear":"nearest":e},e._createClass(r)}(l.BaseImageryTileSubView2D);t.__decorate([r.property()],u.prototype,"container",void 0),t.__decorate([r.property()],u.prototype,"layer",void 0),t.__decorate([r.property()],u.prototype,"type",void 0),u=t.__decorate([o.subclass("esri.views.2d.layers.imagery.ImageryTileView2D")],u);return u}));
