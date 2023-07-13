/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../request","../../geometry/Extent","../../geometry/Point","../../geometry/SpatialReference","../../layers/support/RasterInfo","../utils","../support/FeatureSet"],(function(e,t,a,l,n,i,s,r){"use strict";async function u(e,u,o){const c=s.parseUrl(e),{rasterFunction:f,sourceJSON:d}=u||{},m=f?JSON.stringify(f.rasterFunctionDefinition||f):null,p=s.encode({...c.query,renderingRule:m,f:"json"}),h=s.asValidOptions(p,o);e=c.path;const g=d||await t(e,h).then((e=>e.data)),S=g.hasRasterAttributeTable?t(`${e}/rasterAttributeTable`,h):null,v=g.hasColormap?t(`${e}/colormap`,h):null,y=g.hasHistograms?t(`${e}/histograms`,h):null,V=g.currentVersion>=10.3?t(`${e}/keyProperties`,h):null,b=g.hasMultidimensions?t(`${e}/multidimensionalInfo`,h):null,x=await Promise.allSettled([S,v,y,V,b]);let D=null;if(g.minValues&&g.minValues.length===g.bandCount){D=[];for(let e=0;e<g.minValues.length;e++)D.push({min:g.minValues[e],max:g.maxValues[e],avg:g.meanValues[e],stddev:g.stdvValues[e]})}const T=a.fromJSON(g.extent),R=Math.ceil(T.width/g.pixelSizeX-.1),O=Math.ceil(T.height/g.pixelSizeY-.1),I=n.fromJSON(g.spatialReference||g.extent.spatialReference),w="fulfilled"===x[0].status&&x[0].value?r.fromJSON(x[0].value.data):null,J="fulfilled"===x[1].status?x[1].value?.data.colormap:null,N="fulfilled"===x[2].status?x[2].value?.data.histograms:null,z="fulfilled"===x[3].status?x[3].value?.data??{}:{},C="fulfilled"===x[4].status?x[4].value?.data.multidimensionalInfo:null;C?.variables?.length&&C.variables.forEach((e=>{e.statistics?.length&&e.statistics.forEach((e=>{e.avg=e.mean,e.stddev=e.standardDeviation}))}));const{defaultVariable:P,serviceDataType:$}=g;P&&P!==z.DefaultVariable&&(z.DefaultVariable=P),$&&$.includes("esriImageServiceDataTypeVector")&&!$.includes(z.DataType)&&(z.DataType=$.replace("esriImageServiceDataType",""));let F=g.noDataValue;return g.noDataValues?.length&&g.noDataValues.some((e=>e!==F))&&(F=g.noDataValues),new i({width:R,height:O,bandCount:g.bandCount,extent:a.fromJSON(g.extent),spatialReference:I,pixelSize:new l({x:g.pixelSizeX,y:g.pixelSizeY,spatialReference:I}),pixelType:g.pixelType.toLowerCase(),statistics:D,attributeTable:w,colormap:J,histograms:N,keyProperties:z,noDataValue:F,multidimensionalInfo:C})}function o(e,t,a){return u(e,{sourceJSON:t},a)}function c(e,t,a){return u(e,{rasterFunction:t},a)}e.fetchServiceRasterInfo=o,e.generateRasterInfo=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));