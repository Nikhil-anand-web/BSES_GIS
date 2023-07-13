/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/time"],(function(e,t,i){"use strict";let n=function(){function e(){this.enabled=!0,this._time=i.Milliseconds(0)}return e.prototype.advance=function({deltaTime:e,fixedTime:t}){return null!=t?this._time!==t&&(this._time=t,!0):(this._time=i.Milliseconds(this._time+e),0!==e)},t._createClass(e,[{key:"time",get:function(){return this._time}}]),e}(),s=t._createClass((function(e,t){this.deltaTime=e,this.fixedTime=t}));e.AnimationTimer=n,e.Parameters=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
