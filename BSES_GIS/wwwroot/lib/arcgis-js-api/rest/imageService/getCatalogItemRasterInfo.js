/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../request","../../geometry/Extent","../../geometry/Point","../../layers/support/RasterInfo","../../layers/support/RasterStorageInfo","../utils"],(function(e,t,i,a,l,s,r){"use strict";async function n(e,n,o){const p=r.parseUrl(e),u=r.encode({...p?.query,f:"json"}),d=r.asValidOptions(u,o),c=`${p?.path}/${n}/info`,f=t(`${c}`,d),g=t(`${c}/keyProperties`,d),m=await Promise.allSettled([f,g]),h="fulfilled"===m[0].status?m[0].value.data:null,y="fulfilled"===m[1].status?m[1].value.data:null;let x=null;h.statistics?.length&&(x=h.statistics.map((e=>({min:e[0],max:e[1],avg:e[2],stddev:e[3]}))));const S=i.fromJSON(h.extent),v=Math.ceil(S.width/h.pixelSizeX-.1),P=Math.ceil(S.height/h.pixelSizeY-.1),b=S.spatialReference,w=new a({x:h.pixelSizeX,y:h.pixelSizeY,spatialReference:b}),k=h.histograms?.length?h.histograms:null,R=new s({origin:h.origin,blockWidth:h.blockWidth,blockHeight:h.blockHeight,firstPyramidLevel:h.firstPyramidLevel,maximumPyramidLevel:h.maxPyramidLevel});return new l({width:v,height:P,bandCount:h.bandCount,extent:S,spatialReference:b,pixelSize:w,pixelType:h.pixelType.toLowerCase(),statistics:x,histograms:k,keyProperties:y,storageInfo:R})}e.getCatalogItemRasterInfo=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
