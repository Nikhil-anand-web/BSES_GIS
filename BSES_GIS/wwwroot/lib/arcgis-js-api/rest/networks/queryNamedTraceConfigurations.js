/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../request","../utils","./support/QueryNamedTraceConfigurationsResult"],(function(t,e,s,r){"use strict";async function a(t,a,n){const o=s.parseUrl(t),i=a.toJSON();a.globalIds&&a.globalIds.length>0&&(i.globalIds=JSON.stringify(a.globalIds)),a.creators&&a.creators.length>0&&(i.creators=JSON.stringify(a.creators)),a.tags&&a.tags.length>0&&(i.tags=JSON.stringify(a.tags)),a.names&&a.names.length>0&&(i.names=JSON.stringify(a.names));const g={...i,f:"json"},l=s.encode({...o.query,...g}),u=s.asValidOptions(l,{...n,method:"post"}),c=`${o.path}/traceConfigurations/query`,{data:f}=await e(c,u);if(!f)return null;return r.fromJSON(f)}t.queryNamedTraceConfigurations=a,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
