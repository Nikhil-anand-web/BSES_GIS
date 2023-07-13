/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../config","../kernel","../core/lang","../core/urlUtils","../support/apiKeyUtils"],(function(e,n,t,r,i,o){"use strict";function l(e,n){return n?{...n,query:{...e??{},...n.query}}:{query:e}}function s(e){return"string"==typeof e?i.urlToObject(e):r.clone(e)}function u(e,n,t){const r={};for(const i in e){if("declaredClass"===i)continue;const o=e[i];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){r[i]=[];for(let e=0;e<o.length;e++)r[i][e]=u(o[e])}else if("object"==typeof o)if(o.toJSON){const e=o.toJSON(t&&t[i]);r[i]=n?e:JSON.stringify(e)}else r[i]=n?o:JSON.stringify(o);else r[i]=o}return r}function f(e,r){return e?o.supportsApiKey(e)&&(r||n.apiKey)?r||n.apiKey:t.id?.findCredential(e)?.token:null}e.asValidOptions=l,e.encode=u,e.getToken=f,e.parseUrl=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
