/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./utils"],(function(t,e){"use strict";function r(t,r){const n="?"===t[t.length-1]?t.slice(0,-1):t;if(null!=r.getItemAt||Array.isArray(r)){const t=parseInt(n,10);if(!isNaN(t))return Array.isArray(r)?r[t]:r.at(t)}const i=e.getProperties(r);return e.isPropertyDeclared(i,n)?i.get(n):r[n]}function n(t,e,i){if(null==t)return t;const o=r(e[i],t);return!o&&i<e.length-1?void 0:i===e.length-1?o:n(o,e,i+1)}function i(t,i,o=0){return"string"!=typeof i||i.includes(".")?n(t,e.pathToArray(i),o):r(i,t)}function o(t,e){return i(t,e)}function u(t,e){return void 0!==i(e,t)}t.exists=u,t.get=o,t.valueOf=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
