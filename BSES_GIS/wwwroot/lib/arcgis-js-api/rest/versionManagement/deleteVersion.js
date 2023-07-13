/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../request","../utils"],(function(e,t,n,o){"use strict";const a=e=>Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"}));async function r(t,r,i){const s=o.parseUrl(t),u=(await new Promise(((t,n)=>e(["../../identity/IdentityManager"],(e=>t(a(e))),n)))).default;await u.getCredential(s.path);const d=r.toJSON(),l=o.asValidOptions(s.query,{query:o.encode({...d,f:"json"}),...i,method:"post"}),c=`${s.path}/delete`,{data:f}=await n(c,l);return f.success}t.deleteVersion=r,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
