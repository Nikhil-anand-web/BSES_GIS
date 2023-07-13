/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../lang","./PropertyOrigin"],(function(i,n,e,t){"use strict";let r=function(){function i(){this._values=new Map,this.multipleOriginsSupported=!1}var r=i.prototype;return r.clone=function(n){const t=new i;return this._values.forEach(((i,r)=>{n&&n.has(r)||t.set(r,e.clone(i.value),i.origin)})),t},r.get=function(i,n){n=this._normalizeOrigin(n);const e=this._values.get(i);return null==n||e?.origin===n?e?.value:void 0},r.originOf=function(i){return this._values.get(i)?.origin??t.OriginId.USER},r.keys=function(i){i=this._normalizeOrigin(i);const n=[...this._values.keys()];return null==i?n:n.filter((n=>this._values.get(n)?.origin===i))},r.set=function(i,n,e){if((e=this._normalizeOrigin(e))===t.OriginId.DEFAULTS){const n=this._values.get(i);if(n&&null!=n.origin&&n.origin>e)return}this._values.set(i,new s(n,e))},r.delete=function(i,n){null!=(n=this._normalizeOrigin(n))&&this._values.get(i)?.origin!==n||this._values.delete(i)},r.has=function(i,n){return null!=(n=this._normalizeOrigin(n))?this._values.get(i)?.origin===n:this._values.has(i)},r.forEach=function(i){this._values.forEach((({value:n},e)=>i(n,e)))},r._normalizeOrigin=function(i){if(null!=i)return i===t.OriginId.DEFAULTS?i:t.OriginId.USER},n._createClass(i)}(),s=n._createClass((function(i,n){this.value=i,this.origin=n}));i.DefaultsStore=r,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})}));
