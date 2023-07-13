/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./BandArithmeticFunctionArguments","./bandIndexUtils","./BaseRasterFunction"],(function(e,t,s,r,n,a,i,c,o,u){"use strict";const d=new Set(["vari","mtvi2","rtvi-core","evi"]);let p=function(t){function s(){var e;return(e=t.apply(this,arguments)||this).functionName="BandArithmetic",e.functionArguments=null,e.rasterArgumentNames=["raster"],e}e._inherits(s,t);var r=s.prototype;return r._bindSourceRasters=function(){this.outputPixelType=this._getOutputPixelType("f32");const e=this.sourceRasterInfos[0];if(e.bandCount<2)return{success:!1,supportsGPU:!1,error:"band-arithmetic-function: source raster has insufficient amount of raster bands"};const t=e.clone();t.pixelType=this.outputPixelType,t.statistics=null,t.histograms=null,t.bandCount="sultan"===this.functionArguments.method?3:1,t.keyProperties={...t.keyProperties,BandProperties:void 0},this.rasterInfo=t;return{success:!0,supportsGPU:!["custom","gvitm","sultan"].includes(this.functionArguments.method)}},r._processPixels=function(e){const t=e.pixelBlocks?.[0];if(null==t)return t;const{method:s,bandIndexes:r}=this.functionArguments,n=r.split(" ").map((e=>parseFloat(e)));return o.calculateBandIndex(t,{method:s,bandIndexes:n,equation:r})},r._getWebGLParameters=function(){const e=this.functionArguments.bandIndexes.split(" ").map((e=>parseFloat(e)-1));2===e.length&&e.push(0);const t=this.isInputBandIdsSwizzled?[0,1,2]:e;let s,r;const n=new Float32Array(3),{method:a}=this.functionArguments;switch(a){case"gndvi":case"nbr":case"ndbi":case"ndvi":case"ndvi-re":case"ndsi":case"ndmi":case"mndwi":s=o.getBandMatrix3([t[0],t[1],0]),r="ndxi";break;case"ndwi":s=o.getBandMatrix3([t[1],t[0],0]),r="ndxi";break;case"sr":case"sr-re":case"iron-oxide":case"ferrous-minerals":case"clay-minerals":s=o.getBandMatrix3([t[0],t[1],0]),r="sr";break;case"ci-g":case"ci-re":s=o.getBandMatrix3([t[0],t[1],0]),r="ci";break;case"savi":s=o.getBandMatrix3([t[0],t[1],0]),r="savi",n[0]=e[2]+1;break;case"tsavi":s=o.getBandMatrix3([t[0],t[1],0]),r="tsavi",n[0]=e[2]+1,n[1]=e[3]+1,n[2]=e[4]+1;break;case"msavi":s=o.getBandMatrix3([t[0],t[1],0]),r="msavi";break;case"gemi":s=o.getBandMatrix3([t[0],t[1],0]),r="gemi";break;case"pvi":s=o.getBandMatrix3([t[0],t[1],0]),r="tsavi",n[0]=e[2]+1,n[1]=e[3]+1;break;case"vari":s=o.getBandMatrix3([t[0],t[1],t[2]]),r="vari";break;case"mtvi2":s=o.getBandMatrix3([t[0],t[1],t[2]]),r="mtvi2";break;case"rtvi-core":s=o.getBandMatrix3([t[0],t[1],t[2]]),r="rtvicore";break;case"evi":s=o.getBandMatrix3([t[0],t[1],t[2]]),r="evi";break;case"wndwi":s=o.getBandMatrix3([t[0],t[1],0]),r="wndwi",n[0]=e[3]?e[3]+1:.5;break;case"bai":s=o.getBandMatrix3([t[1],t[0],0]),r="bai";break;default:s=o.getBandMatrix3([0,1,2]),r="custom"}return{bandIndexMat3:s,indexType:r,adjustments:n}},r._getInputBandIds=function(e){if("custom"===this.functionArguments.method)return e;const t=this.functionArguments.bandIndexes.split(" ").map((e=>parseFloat(e)-1)),s=e.length,r=t.map((e=>e>=s?s-1:e)),n=d.has(this.functionArguments.method)?3:2,a=r.slice(0,n).map((t=>e[t]));return 2===a.length&&a.push(0),a},e._createClass(s)}(u);t.__decorate([s.property({json:{write:!0,name:"rasterFunction"}})],p.prototype,"functionName",void 0),t.__decorate([s.property({type:c,json:{write:!0,name:"rasterFunctionArguments"}})],p.prototype,"functionArguments",void 0),t.__decorate([s.property()],p.prototype,"rasterArgumentNames",void 0),p=t.__decorate([i.subclass("esri.layers.support.rasterFunctions.BandArithmeticFunction")],p);return p}));