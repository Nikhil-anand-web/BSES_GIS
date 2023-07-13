/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/screenUtils","../../state/controllers/RotateController","../../../input/InputHandler"],(function(e,t,r,n,a){"use strict";let i=function(e){function a(t,r=!1){var n;return(n=e.call(this,!0)||this)._view=t,n._invert=r,n.registerIncoming("vertical-two-finger-drag",(e=>n._handleTwoFinger(e))),n}return t._inherits(a,e),a.prototype._handleTwoFinger=function(e){const t=this._invert?-1:1,a=r.createScreenPointArray(0,e.data.delta*t);switch(e.data.action){case"begin":this._cameraController?.end(),this._cameraController=new n.RotateController({view:this._view,pivot:n.PivotPoint.CENTER}),this._view.state.switchCameraController(this._cameraController),this._cameraController.begin(a);break;case"update":this._cameraController?.update(a);break;case"end":this._cameraController?.end(),this._cameraController=null}},t._createClass(a)}(a.InputHandler);e.TwoFingerTilt=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
