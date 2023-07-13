/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../request","../utils","./units"],(function(n,o,e,s){"use strict";async function t(n,t,r){const i={};null!=t.sr&&"object"==typeof t.sr?i.sr=t.sr.wkid||JSON.stringify(t.sr):i.sr=t.sr,i.coordinates=JSON.stringify(t.coordinates);const c=t.conversionType||"mgrs";i.conversionType=s.conversionTypeKebabDict.toJSON(c),i.conversionMode=t.conversionMode,i.numOfDigits=t.numOfDigits,i.rounding=t.rounding,i.addSpaces=t.addSpaces;const a=e.parseUrl(n),d={...a.query,f:"json",...i},u=e.asValidOptions(d,r);return o(a.path+"/toGeoCoordinateString",u).then((({data:n})=>n.strings))}n.toGeoCoordinateString=t,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
