/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],(function(t,o){"use strict";let n=function(){function t(){this._operations=[],this._closed=!1}var n=t.prototype;return n.close=function(){this._closed=!0},n.apply=function(){for(const t of this._operations)t.apply()},n.undo=function(){for(let t=this._operations.length-1;t>=0;t--)this._operations[t].undo()},n.accumulate=function(t){if(this._closed)return!1;const o=this._operations.length?this._operations[this._operations.length-1]:null;return o&&o.accumulate(t)||(this._operations.push(t),t.apply()),!0},o._createClass(t)}();t.UndoGroup=n,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
