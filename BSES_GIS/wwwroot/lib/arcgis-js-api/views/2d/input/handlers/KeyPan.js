/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/InputHandler"],(function(e,i,n){"use strict";let t=function(e){function n(i,n,t){var a;return(a=e.call(this,!0)||this).view=i,a.keys=n,a._pressed=!1,a._keyMap={[n.left]:"left",[n.right]:"right",[n.up]:"up",[n.down]:"down"},a.registerIncoming("key-down",t,(e=>a._handleKeyDown(e))),a.registerIncoming("key-up",t,(e=>a._handleKeyUp(e))),a.registerIncoming("blur",t,(()=>a._handleBlur())),a}i._inherits(n,e);var t=n.prototype;return t._handleKeyDown=function(e){e.data.repeat||this._handleKey(e,!0)},t._handleKeyUp=function(e){this._handleKey(e,!1)},t._handleBlur=function(){this._pressed&&(this._pressed=!1,this.view.mapViewNavigation.stop())},t._handleKey=function(e,i){const n=this._keyMap[e.data.key];if(this._pressed=null!=n,this._pressed){if(i)switch(this.view.mapViewNavigation.begin(),n){case"left":this.view.mapViewNavigation.continousPanLeft();break;case"right":this.view.mapViewNavigation.continousPanRight();break;case"up":this.view.mapViewNavigation.continousPanUp();break;case"down":this.view.mapViewNavigation.continousPanDown()}else this._pressed=!1,this.view.mapViewNavigation.stop();e.stopPropagation()}},i._createClass(n)}(n.InputHandler);e.KeyPan=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));