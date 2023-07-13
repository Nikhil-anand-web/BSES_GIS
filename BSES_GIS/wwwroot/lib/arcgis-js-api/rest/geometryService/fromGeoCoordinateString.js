/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../request","../utils","./units"],(function(o,n,r,e){"use strict";async function s(o,s,t){const i={};null!=s.sr&&"object"==typeof s.sr?i.sr=s.sr.wkid||JSON.stringify(s.sr):i.sr=s.sr,i.strings=JSON.stringify(s.strings);const c=s.conversionType||"mgrs";i.conversionType=e.conversionTypeKebabDict.toJSON(c),i.conversionMode=s.conversionMode;const a=r.parseUrl(o),d={...a.query,f:"json",...i},u=r.asValidOptions(d,t);return n(a.path+"/fromGeoCoordinateString",u).then((({data:o})=>o.coordinates))}o.fromGeoCoordinateString=s,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));
