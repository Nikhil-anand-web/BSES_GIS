/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/InputHandler"],(function(e,t,n){"use strict";let i=function(e){function n(t,n){var i;return(i=e.call(this,!0)||this).key=t,i.registerIncoming("key-down",n,(e=>i._handleKeyDown(e))),i}return t._inherits(n,e),n.prototype._handleKeyDown=function(e){e.data.key===this.key&&(this.activate(),e.stopPropagation())},t._createClass(n)}(n.InputHandler);e.SingleKey=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
