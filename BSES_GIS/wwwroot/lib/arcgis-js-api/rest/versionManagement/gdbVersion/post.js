/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../request","../../../core/Error","../../utils","./support/PostResult"],(function(s,t,o,r,e){"use strict";async function i(s,i,n,u){if(!i)throw new o("post:missing-guid","guid for version is missing");const a=r.parseUrl(s),c=n.toJSON();n.rows&&(c.rows=JSON.stringify(n.rows));const p=r.asValidOptions(a.query,{query:r.encode({...c,f:"json"}),...u,method:"post"});i.startsWith("{")&&(i=i.slice(1,-1));const d=`${a.path}/versions/${i}/post`,{data:f}=await t(d,p);return e.fromJSON(f)}s.post=i,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})}));
