/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","./types"],(function(r,t,o){"use strict";function e(r,t){const e=o.ParsingErrorMessages[r];return t?e.replaceAll(/\${(.*?)}/g,((r,o)=>t[o]?.toString()??"")):e}let n=function(){function r(r=!1){this.tolerant=r,this.errors=[]}var n=r.prototype;return n.recordError=function(r){this.errors.push(r)},n.tolerate=function(r){if(!this.tolerant)throw r;this.recordError(r)},n.throwError=function(r){throw r.description=r.description??e(r.code,r.data),new o.ParsingError(r)},n.tolerateError=function(r){r.description=r.description??e(r.code,r.data);const t=new o.ParsingError(r);if(!this.tolerant)throw t;this.recordError(t)},t._createClass(r)}();r.ErrorHandler=n,r.formatErrorDescription=e,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
