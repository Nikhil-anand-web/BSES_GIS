/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/reactiveUtils","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../../../layers/support/rasterFunctions/vectorFieldUtils","../../engine/imagery/RasterVFTileContainer","./BaseImageryTileSubView2D"],(function(e,t,i,r,o,s,l,a,n,c,p){"use strict";let y=function(t){function r(){var e;return(e=t.apply(this,arguments)||this)._handle=null,e.type="rasterVF",e}e._inherits(r,t);var o=r.prototype;return o.canUseWebGLForProcessing=function(){return!1},o.fetchTile=async function(e,t){t={...t,interpolation:"nearest",requestProjectedLocalDirections:!0};const i=await this.layer.fetchTile(e.level,e.row,e.col,t);return"vector-magdir"===this.layer.rasterInfo.dataType&&i?.pixelBlock&&(i.pixelBlock=await this.layer.convertVectorFieldData(i.pixelBlock,t)),i},o.updateTileSource=function(e,t){const i=t.symbolizerParams,{tileData:r}=e;r.key=e.key,r.width=this._tileInfoView.tileInfo.size[0],r.height=this._tileInfoView.tileInfo.size[1];const{symbolTileSize:o}=i,{source:s}=t;if(r.offset=this._getTileSymbolOffset(r.key,o),null!=s&&null!=s.pixelBlock){const e={extent:s.extent,pixelBlock:s.pixelBlock};r.rawPixelData=e,r.symbolizerParameters=i,r.source=this._sampleVectorFieldData(s.pixelBlock,i,r.offset)}else{const e=[Math.round((this._tileInfoView.tileInfo.size[0]-r.offset[0])/o),Math.round((this._tileInfoView.tileInfo.size[1]-r.offset[1])/o)],t=this.createEmptyTilePixelBlock(e);r.source=t,r.symbolizerParameters=i}return r.invalidateVAO(),Promise.resolve()},o.updateTileSymbolizerParameters=function(e,t){const i=t.local,{symbolTileSize:r}=i,{tileData:o}=e;o.offset=this._getTileSymbolOffset(o.key,r);const s=o.symbolizerParameters.symbolTileSize;o.symbolizerParameters=i;const l=o.rawPixelData?.pixelBlock;return null!=l&&s!==r&&(o.source=this._sampleVectorFieldData(l,o.symbolizerParameters,o.offset)),Promise.resolve()},o.attach=function(){e._get(e._getPrototypeOf(r.prototype),"attach",this).call(this),this.container=new c.RasterVFTileContainer(this._tileInfoView),this.container.isCustomTilingScheme=this._isCustomTilingScheme,this._updateSymbolType(this.layer.renderer),this._handle=i.watch((()=>this.layer.renderer),(e=>this._updateSymbolType(e)))},o.detach=function(){e._get(e._getPrototypeOf(r.prototype),"detach",this).call(this),this.container.removeAllChildren(),this._handle?.remove(),this._handle=null,this.container=null},o._getTileSymbolOffset=function(e,t){const i=e.col*this._tileInfoView.tileInfo.size[0]%t,r=e.row*this._tileInfoView.tileInfo.size[1]%t;return[i>t/2?t-i:-i,r>t/2?t-r:-r]},o._sampleVectorFieldData=function(e,t,i){const{symbolTileSize:r}=t;return n.sampleVectorField(e,"vector-uv",r,i)},o._updateSymbolType=function(e){"vector-field"===e.type&&(this.container.symbolTypes="wind-barb"===e.style?["scalar","triangle"]:"simple-scalar"===e.style?["scalar"]:["triangle"])},e._createClass(r)}(p.BaseImageryTileSubView2D);t.__decorate([r.property()],y.prototype,"container",void 0),t.__decorate([r.property()],y.prototype,"layer",void 0),t.__decorate([r.property()],y.prototype,"type",void 0),y=t.__decorate([a.subclass("esri.views.2d.layers.imagery.VectorFieldTileView2D")],y);return y}));