/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../lang","./PropertyOrigin"],(function(e,t,n,i){"use strict";let s=function(){function e(){this._values=new Map,this.multipleOriginsSupported=!1}var s=e.prototype;return s.clone=function(t){const i=new e;return this._values.forEach(((e,s)=>{t&&t.has(s)||i.set(s,n.clone(e))})),i},s.get=function(e){return this._values.get(e)},s.originOf=function(){return i.OriginId.USER},s.keys=function(){return[...this._values.keys()]},s.set=function(e,t){this._values.set(e,t)},s.delete=function(e){this._values.delete(e)},s.has=function(e){return this._values.has(e)},s.forEach=function(e){this._values.forEach(e)},t._createClass(e)}();e.Store=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
