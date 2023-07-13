/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../lang","../maybe","./PropertyOrigin"],(function(t,i,e,r){"use strict";return function(){function s(){this._propertyOriginMap=new Map,this._originStores=new Array(r.OriginIdNum),this._values=new Map,this.multipleOriginsSupported=!0}var n=s.prototype;return n.clone=function(t){const e=new s,n=this._originStores[r.OriginId.DEFAULTS];n&&n.forEach(((t,s)=>{e.set(s,i.clone(t),r.OriginId.DEFAULTS)}));for(let s=r.OriginId.SERVICE;s<r.OriginIdNum;s++){const r=this._originStores[s];r&&r.forEach(((r,n)=>{t&&t.has(n)||e.set(n,i.clone(r),s)}))}return e},n.get=function(t,i){const e=void 0===i?this._values:this._originStores[i];return e?e.get(t):void 0},n.keys=function(t){const i=null==t?this._values:this._originStores[t];return i?[...i.keys()]:[]},n.set=function(t,i,s=r.OriginId.USER){let n=this._originStores[s];if(n||(n=new Map,this._originStores[s]=n),n.set(t,i),!this._values.has(t)||e.assumeNonNull(this._propertyOriginMap.get(t))<=s){const e=this._values.get(t);return this._values.set(t,i),this._propertyOriginMap.set(t,s),e!==i}return!1},n.delete=function(t,i=r.OriginId.USER){const e=this._originStores[i];if(!e)return;const s=e.get(t);if(e.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===i){this._values.delete(t);for(let e=i-1;e>=0;e--){const i=this._originStores[e];if(i&&i.has(t)){this._values.set(t,i.get(t)),this._propertyOriginMap.set(t,e);break}}}return s},n.has=function(t,i){const e=void 0===i?this._values:this._originStores[i];return!!e&&e.has(t)},n.revert=function(t,i){for(;i>0&&!this.has(t,i);)--i;const e=this._originStores[i],r=e&&e.get(t),s=this._values.get(t);return this._values.set(t,r),this._propertyOriginMap.set(t,i),s!==r},n.originOf=function(t){return this._propertyOriginMap.get(t)||r.OriginId.DEFAULTS},n.forEach=function(t){this._values.forEach(t)},t._createClass(s)}()}));
