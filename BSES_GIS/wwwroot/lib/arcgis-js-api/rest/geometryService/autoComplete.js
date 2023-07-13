/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../geometry","../../request","../utils","./utils","../../geometry/Polygon"],(function(e,t,o,s,i,n){"use strict";async function r(e,t,r,a){const l=t[0].spatialReference,g=s.parseUrl(e),p={...g.query,f:"json",sr:JSON.stringify(l.toJSON()),polygons:JSON.stringify(i.encodeGeometries(t).geometries),polylines:JSON.stringify(i.encodeGeometries(r).geometries)},u=s.asValidOptions(p,a);return o(g.path+"/autoComplete",u).then((({data:e})=>(e.geometries||[]).map((({rings:e})=>new n({spatialReference:l,rings:e})))))}e.autoComplete=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
