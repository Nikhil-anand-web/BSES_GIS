/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers"],(function(e,s){"use strict";const n=e=>e.includes("Brush");let t=function(){function e(){this._names=new Map}var t=e.prototype;return t.begin=function(e){this._names.has(e)||(this._names.set(e,!1),n(e)&&this.record("Esri.FirstDraw"),performance.mark(`Esri.${e}.Start`))},t.end=function(e){this._names.has(e)&&!this._names.get(e)&&(this._names.set(e,!0),performance.mark(`Esri.${e}.End`))},t.record=function(e){this._names.has(e)||(this._names.set(e,!0),performance.mark(`Esri.${e}`))},s._createClass(e)}();e.Timeline=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
