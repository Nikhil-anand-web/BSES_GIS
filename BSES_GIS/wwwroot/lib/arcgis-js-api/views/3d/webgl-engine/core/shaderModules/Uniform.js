/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../shaderTechnique/BindType"],(function(e,n,t){"use strict";let i=function(){function e(e,n,i,r,l=null){this.name=e,this.type=n,this.arraySize=l,this.bind={[t.BindType.Pass]:null,[t.BindType.Draw]:null},null!=i&&null!=r&&(this.bind[i]=r)}return e.prototype.equals=function(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize},n._createClass(e)}();e.Uniform=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
