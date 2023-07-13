/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/NestedMap","./Program"],(function(e,t,r,s){"use strict";let o=function(){function e(e){this._rctx=e,this._store=new r.NestedMap}var o=e.prototype;return o.dispose=function(){this._store.forEach((e=>e.forEach((e=>e.dispose())))),this._store.clear()},o.acquire=function(e,t,r,o){const n=this._store.get(e,t);if(null!=n)return n.ref(),n;const c=new s.Program(this._rctx,e,t,r,o);return c.ref(),this._store.set(e,t,c),c},t._createClass(e,[{key:"test",get:function(){let e=0;return this._store.forEach((t=>t.forEach((t=>e+=t.hasGLName?2:1)))),{cachedWebGLObjects:e}}}]),e}();e.ProgramCache=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
