/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../geometry","../utils","./operations/queryTopFeatures","../support/TopFeaturesQuery","../../geometry/Extent"],(function(e,t,o,r,n,u){"use strict";async function a(e,t,a){const s=o.parseUrl(e),c=await r.executeQueryForTopExtents(s,n.from(t),{...a});return{count:c.data.count,extent:u.fromJSON(c.data.extent)}}e.executeForTopExtents=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
