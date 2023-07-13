/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","./nextTick"],(function(t,i,e){"use strict";let s=function(){function t(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}var s=t.prototype;return s.get=function(){return 0===this._itemsPtr&&e.nextTick((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]},s._reset=function(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*h);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0},s._grow=function(){for(let t=0;t<Math.max(8,Math.min(this._items.length,h));t++)this._items.push(this._allocator())},i._createClass(t)}();const h=1024;t.ObjectStack=s,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
