/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/maybe"],(function(e,t,r){"use strict";let s=function(){function e(){this._result=!1}return e.prototype.dispose=function(){this._program=r.disposeMaybe(this._program)},t._createClass(e,[{key:"result",get:function(){return null!=this._program&&(this._result=this._test(this._program),this.dispose()),this._result}}]),e}();e.WebGLDriverTestModule=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
