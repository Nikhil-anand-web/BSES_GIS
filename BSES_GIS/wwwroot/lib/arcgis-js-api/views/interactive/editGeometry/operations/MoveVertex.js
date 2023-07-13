/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],(function(t,e){"use strict";let i=function(){function t(t,e,i,n){this._helper=t,this.dx=e,this.dy=i,this.dz=n}var i=t.prototype;return i._move=function(t,e,i,n){this._helper.addDelta(t.pos,e,i,n)},i.apply=function(t){this._move(t,this.dx,this.dy,this.dz)},i.undo=function(t){this._move(t,-this.dx,-this.dy,-this.dz)},i.canAccumulate=function(e){return e instanceof t},i.accumulate=function(t,e){this._move(t,e.dx,e.dy,e.dz)},i.accumulateParams=function(t){this.dx+=t.dx,this.dy+=t.dy,this.dz+=t.dz},e._createClass(t)}();t.MoveVertex=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
