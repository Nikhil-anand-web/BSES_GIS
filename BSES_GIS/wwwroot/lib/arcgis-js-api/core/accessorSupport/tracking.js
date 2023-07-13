/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../has","../Logger","./utils","./tracking/Flags"],(function(e,t,n,r,c){"use strict";const s={onObservableAccessed:()=>{},onTrackingEnd:()=>{}},o=[];let i=s;function a(e){i.onObservableAccessed(e)}let l=!1,g=!1;function u(e,t,n){if(l)return p(e,t,n);d(e);const r=t.call(n);return k(),r}function f(e,t){return u(s,e,t)}function p(e,t,r){const c=l;l=!0,d(e);let s=null;try{s=t.call(r)}catch(o){g&&n.getLogger("esri.core.accessorSupport.tracking").error(o)}return k(),l=c,s}function d(e){i=e,o.push(e)}function k(){const e=o.length;if(e>1){const t=o.pop();i=o[e-2],t.onTrackingEnd()}else if(1===e){const e=o.pop();i=s,e.onTrackingEnd()}else i=s}function y(e,t){const n=t.observerObject;if(n.flags&c.Flags.DepTrackingInitialized)return;const r=g;g=!1,n.flags&c.Flags.AutoTracked?p(t,t.metadata.get,e):b(e,t),g=r}const T=[];function b(e,t){const n=t.observerObject;n.flags&c.Flags.ExplicitlyTracking||(n.flags|=c.Flags.ExplicitlyTracking,p(t,(()=>{const n=t.metadata.dependsOn||T;for(const t of n)if("string"!=typeof t||t.includes(".")){const n=r.pathToArray(t);for(let t=0,r=e;t<n.length&&null!=r&&"object"==typeof r;++t)r=A(r,n[t],t!==n.length-1)}else A(e,t,!1)})),n.flags&=~c.Flags.ExplicitlyTracking)}function A(e,t,n){const c="?"===t[t.length-1]?t.slice(0,-1):t;if(null!=e.getItemAt||Array.isArray(e)){const t=parseInt(c,10);if(!isNaN(t))return Array.isArray(e)?e[t]:e.at(t)}const s=r.getProperties(e);if(s){const t=s.propertiesByName.get(c);t&&(a(t.observerObject),y(e,t))}return n?e[c]:void 0}e.initializeDependencyTracking=y,e.runTracked=u,e.runTrackedNoThrow=p,e.runUntracked=f,e.trackAccess=a,e.trackExplicitDependencies=b,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));