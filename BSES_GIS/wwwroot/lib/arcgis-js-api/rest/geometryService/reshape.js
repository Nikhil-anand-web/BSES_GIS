/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../request","../../geometry/support/jsonUtils","../utils"],(function(e,t,r,s){"use strict";async function o(e,o,n,i){const a=o.spatialReference,p=s.parseUrl(e),y={...p.query,f:"json",sr:JSON.stringify(a.toJSON()),target:JSON.stringify({geometryType:r.getJsonType(o),geometry:o.toJSON()}),reshaper:JSON.stringify(n.toJSON())},f=s.asValidOptions(y,i);return t(p.path+"/reshape",f).then((({data:e})=>r.fromJSON(e.geometry).set({spatialReference:a})))}e.reshape=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
