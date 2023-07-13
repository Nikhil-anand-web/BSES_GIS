/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Error","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./BaseRaster","../rasterFunctions/pixelUtils","../../../rest/support/FeatureSet"],(function(e,t,r,s,a,i,n,o,c,l,p){"use strict";let u=function(t){function s(){var e;return(e=t.apply(this,arguments)||this).datasetFormat="Function",e.tileType="Raster",e.rasterFunction=null,e}e._inherits(s,t);var a=s.prototype;return a.open=async function(e){await this.init();const{rasterFunction:t}=this;this.primaryRasters?.rasters?.length?t.sourceRasters=this.primaryRasters.rasters:(this.primaryRasters=t.getPrimaryRasters(),this.rasterJobHandler&&this.primaryRasters.rasters?.forEach((e=>e.rasterJobHandler=this.rasterJobHandler)));const{rasters:s,rasterIds:a}=this.primaryRasters,i=s.map((t=>t.rasterInfo?void 0:t.open(e)));await Promise.all(i);const n=s.map((({rasterInfo:e})=>e)),o=t.bind({rasterInfos:n,rasterIds:a});if(!o.success||0===n.length)throw new r("raster-function:open",`cannot bind the function: ${o.error??""}`);const c="Table"===t.functionName?t:t.functionArguments?.raster;"Table"===c?.functionName&&(t.rasterInfo.attributeTable=p.fromJSON(c.functionArguments.attributeTableAsRecordSet)),await this.syncJobHandler();const l=n[0];this.hasUniqueSourceStorageInfo=1===n.length||n.slice(1).every((e=>this._hasSameStorageInfo(e,l))),this.set("sourceJSON",s[0].sourceJSON),this.set("rasterInfo",t.rasterInfo)},a.syncJobHandler=async function(){return this.rasterJobHandler?.updateRasterFunction(this.rasterFunction)},a.fetchPixels=async function(e,t,r,s={}){const{rasters:a,rasterIds:i}=this.primaryRasters;let n=!1;const{interpolation:o}=s,c=this.rasterFunction.flatWebGLFunctionChain?.hasSurfaceFunction;!s.requestRawData&&"bilinear"!==o&&c&&(n=1===a.length&&!s.skipRasterFunction,s={...s,interpolation:"bilinear",requestRawData:n});const p=a.map((a=>a.fetchPixels(e,t,r,s))),u=await Promise.all(p),h=u.map((e=>e.pixelBlock)),d=n||s.requestRawData?u.map((e=>e.srcTilePixelSize)):null;if(s.skipRasterFunction||h.every((e=>null==e)))return u[0];const f=u.find((e=>null!=e.pixelBlock))?.extent??e,m=this.rasterJobHandler?await this.rasterJobHandler.process({extent:f,primaryPixelBlocks:h,primaryPixelSizes:d,primaryRasterIds:i}):this.rasterFunction.process({extent:f,primaryPixelBlocks:h,primaryPixelSizes:d,primaryRasterIds:i}),{transformGrid:y}=u[0];if(!n||null==m||null==y)return{...u[0],pixelBlock:m};const b={rows:y.spacing[0],cols:y.spacing[1]};let x;if(this.rasterJobHandler){x=(await this.rasterJobHandler.mosaicAndTransform({srcPixelBlocks:[m],srcMosaicSize:{width:m.width,height:m.height},destDimension:{width:t,height:r},coefs:y.coefficients,sampleSpacing:b,projectDirections:!1,gcsGrid:null,isUV:!1,interpolation:o,alignmentInfo:void 0,blockWidths:null},s)).pixelBlock}else x=l.approximateTransform(m,{width:t,height:r},y.coefficients,b,o);return{extent:e,srcExtent:u[0].srcExtent,pixelBlock:x}},a._hasSameStorageInfo=function(e,t){const{storageInfo:r,pixelSize:s,spatialReference:a,extent:i}=e,{storageInfo:n,pixelSize:o,spatialReference:c,extent:l}=t;return s.x===o.x&&s.y===o.y&&a.equals(c)&&i.equals(l)&&r.blockHeight===n.blockHeight&&r.blockWidth===n.blockWidth&&r.maximumPyramidLevel===n.maximumPyramidLevel},e._createClass(s)}(c);t.__decorate([s.property({type:String,json:{write:!0}})],u.prototype,"datasetFormat",void 0),t.__decorate([s.property()],u.prototype,"tileType",void 0),t.__decorate([s.property()],u.prototype,"rasterFunction",void 0),t.__decorate([s.property()],u.prototype,"primaryRasters",void 0),u=t.__decorate([o.subclass("esri.layers.support.rasterDatasets.FunctionRaster")],u);return u}));