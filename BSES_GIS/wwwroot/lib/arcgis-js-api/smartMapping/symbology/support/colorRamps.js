/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../Color","./colors"],(function(n,s,o){"use strict";function t(n){const o=[];for(const t in n){const e=Number(t);if(!isNaN(e)){const r=n[t];o.push({colors:r.map((n=>new s(n))),numClasses:e})}}return{name:n.name,tags:[...n.tags],colors:n.stops.map((n=>new s(n))),colorsForClassBreaks:o}}function e(n){return Array.isArray(n[2]&&n[2][0])}function r(){const n=[];for(const s in o){const r=o[s];e(r)||n.push(t(r))}return n}function c(){const n=[];for(const s in o){const t=o[s];e(t)||n.push(t.name)}return n}function u(n){let s=null;for(const r in o){const c=o[r];if(!e(c)&&c.name===n){s=t(c);break}}return s}function a(n){const{includedTags:s,excludedTags:r}=n;if(!s&&!r)return[];const c=!(s&&s.length),u=!(r&&r.length),a=[];for(const i in o){const n=o[i];if(!e(n)){const o=!!c||s.every((s=>n.tags.includes(s))),e=!u&&r.every((s=>n.tags.includes(s)));o&&!e&&a.push(t(n))}}return a}n.all=r,n.byName=u,n.byTag=a,n.names=c,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));