/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/Handles","../../../../core/reactiveUtils","../../../../core/scheduling","../../viewpointUtils","../../../input/InputHandler","../../../navigation/gamepadAndKeyboardUtils"],(function(t,e,a,i,n,s,r,o){"use strict";let l=function(t){function r(e){var i;return(i=t.call(this,!0)||this)._view=e,i._frameTask=null,i._watchHandles=new a,i._currentDevice=null,i._transformation={translation:[0,0,0],heading:0,tilt:0,zoom:0},i._handle=i.registerIncoming("gamepad",(t=>i._handleGamePadEvent(t))),i._handle.pause(),i}e._inherits(r,t);var l=r.prototype;return l.onInstall=function(t){e._get(e._getPrototypeOf(r.prototype),"onInstall",this).call(this,t),this._watchHandles.add([i.watch((()=>this._view.navigation.gamepad?.enabled),(t=>{t?(this._handle.resume(),this._frameTask||(this._frameTask=n.addFrameTask({update:t=>this._frameUpdate(t.deltaTime)}))):(this._handle.pause(),this._frameTask&&(this._frameTask.remove(),this._frameTask=null))}),i.initial)])},l.onUninstall=function(){this._watchHandles.removeAll(),this._frameTask&&(this._frameTask.remove(),this._frameTask=null),e._get(e._getPrototypeOf(r.prototype),"onUninstall",this).call(this)},l._handleGamePadEvent=function(t){const e=this._view.navigation.gamepad.device;e&&t.data.device!==e||this._currentDevice&&this._currentDevice!==t.data.device||("end"===t.data.action?(this._currentDevice=null,o.resetTransformation(this._transformation)):(this._currentDevice=t.data.device,o.extractTransformation(t.data,this._view.navigation.gamepad,this._transformation)))},l._frameUpdate=function(t){const e=this._transformation;if(o.isZeroTransformation(e))return;const a=this._view.viewpoint.clone(),i=this._view.navigation.gamepad.velocityFactor,n=h*i*t;s.translateBy(a,a,[e.translation[0]*n,-e.translation[1]*n]);const r=1+e.translation[2]*d*t,l=this._view.constraints.rotationEnabled?-e.heading*c*t:0,_=this._view.size,v=[_[0]/2,_[1]];s.scaleAndRotateBy(a,a,r,l,v,_);const m=this._view.constraints.constrain(a,this._view.viewpoint);this._view.viewpoint=m},e._createClass(r)}(r.InputHandler);const c=.06,h=.7,d=6e-4;t.GamepadNavigation=l,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));