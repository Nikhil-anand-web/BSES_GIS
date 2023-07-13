/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/DragEventSeparator","../../../input/InputHandler"],(function(t,n,e,a){"use strict";let i=function(t){function a(n){var a;(a=t.call(this,!0)||this).view=n,a.registerIncoming("drag",(t=>a._handleDrag(t))),a.registerIncoming("pointer-down",(()=>a._stopMomentumNavigation()));const i=a.view.mapViewNavigation;return a._dragEventSeparator=new e.DragEventSeparator({start:(t,n)=>{i.pinch.begin(a.view,n.data),n.stopPropagation()},update:(t,n)=>{i.pinch.update(a.view,n.data),n.stopPropagation()},end:(t,n)=>{i.pinch.end(a.view),n.stopPropagation()},condition:t=>t>=2}),a}n._inherits(a,t);var i=a.prototype;return i._handleDrag=function(t){this._dragEventSeparator.handle(t)},i._stopMomentumNavigation=function(){this.view.mapViewNavigation.pinch.stopMomentumNavigation()},n._createClass(a)}(a.InputHandler);t.PinchRotateAndZoom=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
