/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e){return 32+e.length}function r(e){return 16}function n(e){if(!e)return 0;let n=c;for(const i in e)if(e.hasOwnProperty(i)){const u=e[i];switch(typeof u){case"string":n+=t(u);break;case"number":n+=r();break;case"boolean":n+=4}}return n}function i(e){if(!e)return 0;if(Array.isArray(e))return u(e);let t=c;for(const r in e)e.hasOwnProperty(r)&&(t+=o(e[r]));return t}function u(e){const t=e.length;if(0===t||"number"==typeof e[0])return 32+8*t;let r=a;for(let n=0;n<t;n++)r+=o(e[n]);return r}function o(e){switch(typeof e){case"object":return i(e);case"string":return t(e);case"number":return r();case"boolean":return 4;default:return 8}}function s(e,t){return a+e.length*t}const c=32,a=32;e.estimateAttributesObjectSize=n,e.estimateFixedArraySize=s,e.estimateNestedObjectSize=i,e.estimateNumberByteSize=r,e.estimateStringByteSize=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));