/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","./BufferRange"],(function(e,t,i){"use strict";let n=function(e){function i(t,i,n){var r;return(r=e.call(this,i,n)||this).geometry=t,r}return t._inherits(i,e),t._createClass(i,[{key:"isVisible",get:function(){return this.geometry.visible}},{key:"hasHighlights",get:function(){return null!=this.geometry.highlights&&this.isVisible}},{key:"hasOccludees",get:function(){return null!=this.geometry.occludees}}]),i}(i.BufferRange);e.Instance=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
