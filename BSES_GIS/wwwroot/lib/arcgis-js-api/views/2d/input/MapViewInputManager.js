/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/Handles","../../../core/maybe","../../../core/reactiveUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./handlers/DoubleClickZoom","./handlers/DoubleTapDragZoom","./handlers/DragPan","./handlers/DragRotate","./handlers/GamepadNavigation","./handlers/KeyPan","./handlers/KeyRotate","./handlers/KeyZoom","./handlers/MouseWheelZoom","./handlers/PinchAction","../../input/BrowserEventSource","../../input/InputManager","../../input/handlers/PreventContextMenu","../../input/recognizers/DoubleTapDrag","../../input/recognizers/Drag","../../input/recognizers/ImmediateDoubleClick","../../input/recognizers/PointerClickHoldAndDrag","../../input/recognizers/SingleAndDoubleClick"],(function(e,t,n,o,i,r,a,s,c,u,l,p,h,w,d,g,v,y,_,m,D,b,P,k,M,A,f,C,T){"use strict";const z={counter:"Ctrl",pan:{left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown"},zoom:{zoomIn:["=","+"],zoomOut:["-","_"]},rotate:{clockwiseOption1:"a",clockwiseOption2:"A",counterClockwiseOption1:"d",counterClockwiseOption2:"D",resetOption1:"n",resetOption2:"N"}};let E=function(t){function n(){var e;return(e=t.apply(this,arguments)||this)._handles=new o,e}e._inherits(n,t);var a=n.prototype;return a.initialize=function(){const e=()=>this.view?.ready;this._handles.add([r.when((()=>!e()),(()=>this._disconnect())),r.when(e,(()=>this._connect()))])},a.destroy=function(){this._handles=i.destroyMaybe(this._handles),this._disconnect()},a._disconnect=function(){this.view.viewEvents.disconnect(),this._inputManager=i.destroyMaybe(this._inputManager)},a._connect=function(){const e=this.view.surface,t=new b.BrowserEventSource(e,this.view.input),n=[new f.ImmediateDoubleClick,new C.PointerClickHoldAndDrag,new T.SingleAndDoubleClick,new A.Drag(this.view.navigation),new M.DoubleTapDrag],o=new P.InputManager({eventSource:t,recognizers:n});o.installHandlers("prevent-context-menu",[new k.PreventContextMenu],P.ViewEventPriorities.INTERNAL),o.installHandlers("navigation",[new D.PinchRotateAndZoom(this.view),new g.GamepadNavigation(this.view),new m.MouseWheelZoom(this.view),new p.DoubleClickZoom(this.view),new p.DoubleClickZoom(this.view,[z.counter]),new w.DragPan(this.view,"primary"),new v.KeyPan(this.view,z.pan),new _.KeyZoom(this.view,z.zoom),new y.KeyRotate(this.view,z.rotate),new d.DragRotate(this.view,"secondary"),new h.DoubleTapDragZoom(this.view,"touch")],P.ViewEventPriorities.INTERNAL),this.view.viewEvents.connect(o),this._source=t,this._inputManager=o,r.watch((()=>this.view?.navigation?.browserTouchPanEnabled),(e=>{this._source&&(this._source.browserTouchPanningEnabled=!e)}),r.initial)},e._createClass(n,[{key:"latestPointerType",get:function(){return this._inputManager?.latestPointerType}},{key:"latestPointerLocation",get:function(){return this._inputManager?.latestPointerLocation}},{key:"multiTouchActive",get:function(){return this._inputManager?.multiTouchActive??!1}},{key:"test",get:function(){return{inputManager:this._inputManager}}}]),n}(n);t.__decorate([a.property()],E.prototype,"view",void 0),t.__decorate([a.property()],E.prototype,"latestPointerType",null),t.__decorate([a.property()],E.prototype,"latestPointerLocation",null),t.__decorate([a.property()],E.prototype,"multiTouchActive",null),E=t.__decorate([l.subclass("esri.views.2d.input.MapViewInputManager")],E);return E}));
