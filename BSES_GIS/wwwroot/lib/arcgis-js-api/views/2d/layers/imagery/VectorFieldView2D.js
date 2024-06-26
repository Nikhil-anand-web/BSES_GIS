/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../Graphic","../../../../request","../../../../core/HandleOwner","../../../../core/reactiveUtils","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../../../geometry/Extent","../../../../layers/support/rasterFunctions/rasterProjectionHelper","../../../../layers/support/rasterFunctions/vectorFieldUtils","../../engine/imagery/RasterVFContainer","./ImageryVFStrategy"],(function(e,t,r,a,i,n,o,s,l,c,p,y,u,d,h,m){"use strict";let x=function(t){function i(){var e;return(e=t.apply(this,arguments)||this).attached=!1,e.container=new h.RasterVFContainer,e.type="imageryVF",e._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},e._fetchpixels=async(t,r,a,i)=>{const n=await e._projectFullExtentPromise,{symbolTileSize:o}=e.layer.renderer,{extent:s,width:l,height:c}=d.snapImageToSymbolTile(t,r,a,o,n);if(null!=n&&!n.intersects(t))return{extent:s,pixelBlock:null};const p={bbox:`${s.xmin}, ${s.ymin}, ${s.xmax}, ${s.ymax}`,exportParametersVersion:e.layer.exportImageServiceParameters.version,symbolTileSize:o,time:JSON.stringify(e.timeExtent||"")};if(e._canReuseVectorFieldData(p)){const t=e.getPixelData();if(null!=t){if(`${t.extent.xmin}, ${t.extent.ymin}, ${t.extent.xmax}, ${t.extent.ymax}`===p.bbox)return t}}const{pixelData:y}=await e.layer.fetchImage(s,l,c,{timeExtent:e.timeExtent,requestAsImageElement:!1,signal:i});e._dataParameters=p;const u=y?.pixelBlock;if(null==u)return{extent:s,pixelBlock:null};return{extent:s,pixelBlock:"vector-uv"===e.layer.rasterInfo.dataType?d.convertVectorFieldData(u,"vector-uv"):u}},e}e._inherits(i,t);var o=i.prototype;return o.attach=function(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new m({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(n.watch((()=>this.layer.renderer),(e=>this._updateSymbolizerParams(e)),n.syncAndInitial),"attach")},o.detach=function(){this._strategy.destroy(),this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.handles.remove("attach"),this._strategy=this.container=this._projectFullExtentPromise=null},o.getPixelData=function(){const e=this.container.children[0]?.rawPixelData;if(this.updating||!e)return null;const{extent:t,pixelBlock:r}=e;return{extent:t,pixelBlock:r}},o.hitTest=function(e){return new r({attributes:{},geometry:e.clone(),layer:this.layer})},o.update=function(e){this._strategy.update(e,this._symbolizerParams)},o.redraw=function(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))},o._canReuseVectorFieldData=function(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,r=this._dataParameters.time===e.time,a=this._dataParameters.symbolTileSize===e.symbolTileSize,i=this._dataParameters.bbox===e.bbox;return t&&r&&a&&i},o._getProjectedFullExtent=async function(e){try{return await u.projectExtent(this.layer.fullExtent,e)}catch(t){try{const t=(await a(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?y.fromJSON(t):null}catch{return null}}},o._updateSymbolizerParams=function(e){"vector-field"===e.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))},e._createClass(i,[{key:"updating",get:function(){return!this.attached||this._strategy.updating}}]),i}(i.HandleOwner);t.__decorate([o.property()],x.prototype,"attached",void 0),t.__decorate([o.property()],x.prototype,"container",void 0),t.__decorate([o.property()],x.prototype,"layer",void 0),t.__decorate([o.property()],x.prototype,"timeExtent",void 0),t.__decorate([o.property()],x.prototype,"type",void 0),t.__decorate([o.property()],x.prototype,"view",void 0),t.__decorate([o.property()],x.prototype,"updating",null),x=t.__decorate([p.subclass("esri.views.2d.layers.imagery.VectorFieldView2D")],x);return x}));
