/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/InputHandler","../../../input/handlers/support"],(function(t,e,i,n){"use strict";let a=function(t){function i(e,i){var n;return(n=t.call(this,!0)||this)._view=e,n.registerIncoming("double-click",i,(t=>n._handleDoubleClick(t,i))),n}return e._inherits(i,t),i.prototype._handleDoubleClick=function(t,e){n.eventMatchesPointerAction(t.data,"primary")&&(t.stopPropagation(),e?this._view.mapViewNavigation.zoomOut([t.data.x,t.data.y]):this._view.mapViewNavigation.zoomIn([t.data.x,t.data.y]))},e._createClass(i)}(i.InputHandler);t.DoubleClickZoom=a,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
