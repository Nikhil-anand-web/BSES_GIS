/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/arrayUtils"],(function(e,t,n){"use strict";let s=function(){function e(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}var s=e.prototype;return s.addScene=function(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)},s.removeScene=function(e){n.remove(this._scenes,e)},s.forEachScene=function(e){this._scenes.forEach(e)},t._createClass(e)}();e.Asset=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
