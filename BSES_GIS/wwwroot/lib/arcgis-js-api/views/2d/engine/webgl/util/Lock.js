/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/promiseUtils"],(function(e,r,t){"use strict";let s=function(){function e(){this._resolver=null}var s=e.prototype;return s.isHeld=function(){return!!this._resolver},s.acquire=async function(){this._resolver?(await this._resolver.promise,await this.acquire()):this._resolver=t.createResolver()},s.release=function(){const e=this._resolver;this._resolver=null,e?.resolve()},r._createClass(e)}();async function i(e,r,t){try{await e.acquire(),await r(t),e.release()}catch(s){throw e.release(),s}}e.Lock=s,e.withLock=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
