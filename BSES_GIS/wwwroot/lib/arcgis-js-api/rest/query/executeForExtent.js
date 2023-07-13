/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../geometry","../utils","./operations/query","../support/Query","../../geometry/Extent"],(function(e,t,r,n,o,u){"use strict";async function c(e,t,c){const a=r.parseUrl(e);return n.executeQueryForExtent(a,o.from(t),{...c}).then((e=>({count:e.data.count,extent:u.fromJSON(e.data.extent)})))}e.executeForExtent=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
