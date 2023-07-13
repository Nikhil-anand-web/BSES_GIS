/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../lib/VertexAttribute","./internal/bufferWriterUtils"],(function(e,t,r,u){"use strict";let i=function(){function e(e){this.vertexBufferLayout=e}var i=e.prototype;return i.elementCount=function(e){return e.indices.get(r.VertexAttribute.POSITION).length},i.write=function(e,t,r,i,n){u.writeDefaultAttributes(r,this.vertexBufferLayout,e,t,i,n)},t._createClass(e)}();e.DefaultBufferWriter=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
