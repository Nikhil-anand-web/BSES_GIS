/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../request","../geometry/support/normalizeUtils","./utils","./operations/identify","./support/IdentifyParameters","./support/IdentifyResult"],(function(e,t,r,n,s,o,i){"use strict";async function a(e,o,i){const a=(o=f(o)).geometry?[o.geometry]:[],c=n.parseUrl(e);return c.path+="/identify",r.normalizeCentralMeridian(a).then((e=>{const r=s.identifyToIdentifyRESTParameters(o,{geometry:e&&e[0]}),a=n.encode({...c.query,f:"json",...r}),f=n.asValidOptions(a,i);return t(c.path,f).then(u).then((e=>l(e,o.sublayers)))}))}function u(e){const t=e.data;return t.results=t.results||[],t.exceededTransferLimit=Boolean(t.exceededTransferLimit),t.results=t.results.map((e=>i.fromJSON(e))),t}function f(e){return e=o.from(e)}function l(e,t){if(!t?.length)return e;const r=new Map;function n(e){r.set(e.id,e),e.sublayers&&e.sublayers.forEach(n)}t.forEach(n);for(const s of e.results)s.feature.sourceLayer=r.get(s.layerId);return e}e.identify=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
