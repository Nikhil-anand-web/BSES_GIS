/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers"],(function(e,t){"use strict";let r=function(){function e(e){this._readFile=e}var r=e.prototype;return r.resolveIncludes=function(e){return this._resolve(e)},r._resolve=function(e,t=new Map){if(t.has(e))return t.get(e);const r=this._read(e);if(!r)throw new Error(`cannot find shader file ${e}`);const n=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let s=n.exec(r);const l=[];for(;null!=s;)l.push({path:s[1],start:s.index,length:s[0].length}),s=n.exec(r);let i=0,o="";return l.forEach((e=>{o+=r.slice(i,e.start),o+=t.has(e.path)?"":this._resolve(e.path,t),i=e.start+e.length})),o+=r.slice(i),t.set(e,o),o},r._read=function(e){return this._readFile(e)},t._createClass(e)}();e.ShaderCompiler=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
