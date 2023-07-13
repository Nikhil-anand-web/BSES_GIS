/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./AspectFunctionArguments","./BaseRasterFunction","./surfaceUtils"],(function(t,e,r,s,o,n,i,c,u,p){"use strict";let a=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).functionName="Aspect",t.functionArguments=null,t.rasterArgumentNames=["raster"],t.isGCS=!1,t}t._inherits(r,e);var s=r.prototype;return s._bindSourceRasters=function(){const t=this.sourceRasterInfos[0];this.isGCS=t.spatialReference?.isGeographic??!1,this.outputPixelType=this._getOutputPixelType("f32");const e=t.clone();return e.pixelType=this.outputPixelType,e.statistics=[{min:-1,max:360,avg:180,stddev:30}],e.histograms=null,e.colormap=null,e.attributeTable=null,e.bandCount=1,this.rasterInfo=e,{success:!0,supportsGPU:!0}},s._processPixels=function(t){const e=t.pixelBlocks?.[0];if(null==e)return null;const{extent:r,primaryPixelSizes:s}=t,o=s?.[0],n=o??(r?{x:r.width/e.width,y:r.height/e.height}:{x:1,y:1});return p.aspect(e,{resolution:n})},t._createClass(r)}(u);e.__decorate([r.property({json:{write:!0,name:"rasterFunction"}})],a.prototype,"functionName",void 0),e.__decorate([r.property({type:c,json:{write:!0,name:"rasterFunctionArguments"}})],a.prototype,"functionArguments",void 0),e.__decorate([r.property()],a.prototype,"rasterArgumentNames",void 0),e.__decorate([r.property({json:{write:!0}})],a.prototype,"isGCS",void 0),a=e.__decorate([i.subclass("esri.layers.support.rasterFunctions.AspectFunction")],a);return a}));
