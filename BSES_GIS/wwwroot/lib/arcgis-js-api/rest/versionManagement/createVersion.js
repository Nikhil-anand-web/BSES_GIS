/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../request","../utils"],(function(e,t,n,r){"use strict";const i=e=>Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"}));async function o(t,o,a){const s=r.parseUrl(t),u=(await new Promise(((t,n)=>e(["../../identity/IdentityManager"],(e=>t(i(e))),n)))).default;await u.getCredential(s.path);const d=o.toJSON(),l=r.asValidOptions(s.query,{query:r.encode({...d,f:"json"}),...a,method:"post"}),c=`${s.path}/create`,{data:f}=await n(c,l),{versionName:p,versionGuid:y,...g}=f.versionInfo;return{...g,versionIdentifier:{name:p,guid:y}}}t.createVersion=o,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
