/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers"],(function(t){"use strict";return function(){function e(){this.vertexData=new Map,this.vertexCount=0,this.indexData=[]}var n=e.prototype;return n.clear=function(){this.vertexData.clear(),this.vertexCount=0,this.indexData=[]},n.update=function(t,e,n){for(const a in t)this.vertexData.set(a,t[a]);for(const a in this.vertexData)null===t[a]&&this.vertexData.delete(a);this.vertexCount=e,this.indexData=n},t._createClass(e)}()}));
