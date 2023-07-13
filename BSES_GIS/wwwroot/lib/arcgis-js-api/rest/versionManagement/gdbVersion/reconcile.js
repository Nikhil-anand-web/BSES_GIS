/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../request","../../../core/Error","../../utils","./support/ReconcileResult"],(function(e,o,t,i,r){"use strict";async function s(e,s,n,c){if(!s)throw new t("reconcile:missing-guid","guid for version is missing");const u=i.parseUrl(e),a=n.toJSON(),l=i.asValidOptions(u.query,{query:i.encode({...a,f:"json"}),...c,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const d=`${u.path}/versions/${s}/reconcile`,{data:f}=await o(d,l);return r.fromJSON(f)}e.reconcile=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
