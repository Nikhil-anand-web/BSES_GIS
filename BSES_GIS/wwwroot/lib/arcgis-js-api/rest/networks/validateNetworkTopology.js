/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../request","../../core/Error","../utils","./support/ValidateNetworkTopologyResult"],(function(t,e,o,i,a){"use strict";async function s(t,o,s){const r=i.parseUrl(t),n=o.toJSON();o.validationSet&&(n.validationSet=JSON.stringify(o.validationSet));const d={...n,returnEdits:!0,f:"json"},l=i.encode({...r.query,...d}),u=i.asValidOptions(l,{...s,method:"post"}),p=`${r.path}/validateNetworkTopology`,{data:c}=await e(p,u),y=a.fromJSON(c);return y.serviceEdits=y.serviceEdits?.map((t=>({layerId:t.id,editedFeatures:t.editedFeatures})))??[],y}async function r(t,a,s){if(!a.gdbVersion)throw new o("submit-validate-network-topology-job:missing-gdb-version","version is missing");const r=i.parseUrl(t),n=a.toJSON();a.validationSet&&(n.validationSet=JSON.stringify(a.validationSet));const d=i.asValidOptions(r.query,{query:i.encode({...n,returnEdits:!0,async:!0,f:"json"}),...s,method:"post"}),l=`${r.path}/validateNetworkTopology`,{data:u}=await e(l,d);return u?u.statusUrl:null}t.submitValidateNetworkTopologyJob=r,t.validateNetworkTopology=s,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
