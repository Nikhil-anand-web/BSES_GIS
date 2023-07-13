/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function n(e){return t((()=>e.forEach((e=>null!=e&&e.remove()))))}function t(e){return{remove:()=>{e&&(e(),e=void 0)}}}function r(e){return t((()=>{const n=e();null!=n&&n.remove()}))}function o(e){return t((()=>e?.abort()))}function u(e){return t(null!=e?()=>e.destroy():void 0)}function l(e,n){const r=setTimeout(e,n);return t((()=>clearTimeout(r)))}function i(e,n){let r=!1,o=null;return e.then((e=>{r?e.remove():o=e})),t((()=>{r=!0,null!=o?o.remove():null!=n&&(n.abort(),n=null)}))}e.abortHandle=o,e.asyncHandle=i,e.destroyHandle=u,e.handlesGroup=n,e.makeHandle=t,e.refHandle=r,e.timeoutHandle=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
