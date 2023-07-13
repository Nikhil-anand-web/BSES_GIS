/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers"],(function(e,t){"use strict";let n=function(){function e(e){this.origin=e,this.buffers=new Array}var n=e.prototype;return n.dispose=function(){this.buffers.forEach((e=>e.vao.dispose())),this.buffers.length=0},n.findBuffer=function(e){return this.buffers.find((t=>t.instances.has(e)))},t._createClass(e)}();e.PerOriginData=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
