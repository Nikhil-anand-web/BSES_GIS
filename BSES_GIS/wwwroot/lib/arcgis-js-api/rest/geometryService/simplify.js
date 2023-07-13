/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../request","../../core/urlUtils","../../geometry/support/jsonUtils","./utils"],(function(e,t,i,r,s){"use strict";async function o(e,o,n){const u="string"==typeof e?i.urlToObject(e):e,y=o[0].spatialReference,c=r.getJsonType(o[0]),f={...n,query:{...u.query,f:"json",sr:y.wkid??JSON.stringify(y),geometries:JSON.stringify(s.encodeGeometries(o))}},{data:l}=await t(u.path+"/simplify",f);return s.decodeGeometries(l.geometries,c,y)}e.simplify=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
