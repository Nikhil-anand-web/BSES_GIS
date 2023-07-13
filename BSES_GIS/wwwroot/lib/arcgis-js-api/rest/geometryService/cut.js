/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../geometry","../../request","../../geometry/support/jsonUtils","../utils"],(function(e,t,r,s,n){"use strict";async function i(e,t,i,o){const u=n.parseUrl(e),a=t[0].spatialReference,c={...o,query:{...u.query,f:"json",sr:JSON.stringify(a),target:JSON.stringify({geometryType:s.getJsonType(t[0]),geometries:t}),cutter:JSON.stringify(i)}},g=await r(u.path+"/cut",c),{cutIndexes:y,geometries:f=[]}=g.data;return{cutIndexes:y,geometries:f.map((e=>{const t=s.fromJSON(e);return t.spatialReference=a,t}))}}e.cut=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
