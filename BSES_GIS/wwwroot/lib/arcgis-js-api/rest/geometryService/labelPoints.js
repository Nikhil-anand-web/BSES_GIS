/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../request","../../geometry/support/jsonUtils","../utils"],(function(e,t,s,n){"use strict";function o(e,o,i){const r=o.map((e=>e.toJSON())),a=o[0].spatialReference,l=n.parseUrl(e),p={...l.query,f:"json",sr:a.wkid??JSON.stringify(a.toJSON()),polygons:JSON.stringify(r)},f=n.asValidOptions(p,i);return t(l.path+"/labelPoints",f).then((({data:e})=>(e.labelPoints||[]).map((e=>s.fromJSON(e).set({spatialReference:a})))))}e.labelPoints=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
