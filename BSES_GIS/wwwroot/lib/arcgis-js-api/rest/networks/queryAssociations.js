/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../request","../../networks/support/typeUtils","../utils","./support/QueryAssociationsResult"],(function(e,t,o,s,n){"use strict";function r(e){const{returnDeletes:t,elements:s,gdbVersion:n,moment:r}=e.toJSON();return{returnDeletes:t,elements:JSON.stringify(s.map((e=>({globalId:e.globalId,networkSourceId:e.networkSourceId,terminalId:e.terminalId})))),types:JSON.stringify(e.associationTypes.map((e=>o.associationTypeKebabDict.toJSON(e)))),gdbVersion:n,moment:r}}async function i(e,o,i){const a=s.parseUrl(e),u={...r(o),f:"json"},l=s.encode({...a.query,...u}),c=s.asValidOptions(l,{...i,method:"post"}),p=`${a.path}/associations/query`,{data:d}=await t(p,c);if(!d)return null;return n.fromJSON(d)}e.queryAssociations=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
