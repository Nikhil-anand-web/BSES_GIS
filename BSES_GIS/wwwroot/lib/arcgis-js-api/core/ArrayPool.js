/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","./ObjectPool"],(function(e,n){"use strict";function r(e){e.length=0}let t=function(){function t(e=50,t=50){this._pool=new n(Array,void 0,r,t,e)}var o=t.prototype;return o.acquire=function(){return this._pool.acquire()},o.release=function(e){this._pool.release(e)},o.prune=function(){this._pool.prune(0)},t.acquire=function(){return u.acquire()},t.release=function(e){return u.release(e)},t.prune=function(){u.prune()},e._createClass(t)}();const u=new t(100);return t}));
