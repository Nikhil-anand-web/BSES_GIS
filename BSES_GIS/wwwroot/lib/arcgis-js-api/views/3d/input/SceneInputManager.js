/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/Handles","../../../core/maybe","../../../core/reactiveUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./handlers/DoubleClickZoom","./handlers/DragRotate","./handlers/DragZoom","./handlers/GamepadNavigation","./handlers/KeyboardNavigation","./handlers/MouseWheelZoom","./handlers/PinchAndPanNavigation","./handlers/PointerDownCancelAnimation","./handlers/SingleKeyResetHeading","./handlers/SingleKeyResetTilt","./handlers/TwoFingerTilt","../../input/BrowserEventSource","../../input/InputManager","../../input/handlers/PreventContextMenu","../../input/recognizers/Drag","../../input/recognizers/ImmediateDoubleClick","../../input/recognizers/PointerClickHoldAndDrag","../../input/recognizers/SingleAndDoubleClick","../../input/recognizers/VerticalTwoFingerDrag","../state/controllers/RotateController"],(function(e,t,n,o,r,i,a,s,c,d,p,l,u,g,h,m,y,_,w,D,v,P,A,M,f,T,k,b,R,C,E){"use strict";let z=function(t){function n(){var e;return(e=t.apply(this,arguments)||this)._handles=new o,e}e._inherits(n,t);var a=n.prototype;return a.destroy=function(){this._handles=r.destroyMaybe(this._handles),this.disconnect()},a.disconnect=function(){this.view.viewEvents.disconnect(),this._inputManager=r.destroyMaybe(this._inputManager)},a.connect=function(){const e=this.view;this._source=new A.BrowserEventSource(this.view.surface,e.input);const t=[new k.ImmediateDoubleClick,new b.PointerClickHoldAndDrag,new R.SingleAndDoubleClick,new T.Drag(this.view.navigation),new C.VerticalTwoFingerDrag],n=new M.InputManager({eventSource:this._source,recognizers:t});this._inputManager=n,n.installHandlers("prevent-context-menu",[new f.PreventContextMenu],M.ViewEventPriorities.INTERNAL),this._modeDragPan=new _.PinchAndPanNavigation(e,"primary"),this._modeDragRotate=new u.DragRotate(e,"secondary",E.PivotPoint.CENTER),this._modeDragZoom=new g.DragZoom(e,"tertiary");const o={lookAround:"b",pan:{left:"ArrowLeft",right:"ArrowRight",forward:"ArrowUp",backward:"ArrowDown",up:"u",down:"j",headingLeft:"a",headingRight:"d",tiltUp:"w",tiltDown:"s",zoomIn:"+",zoomOut:"-"},resetHeading:"n",resetTilt:"p"};n.installHandlers("navigation",[new w.PointerDownCancelAnimation(e),new l.DoubleClickZoom(e),new h.GamepadNavigation(e),new m.KeyboardNavigation(e,o.pan),new y.MouseWheelZoom(e),new v.SingleKeyResetTilt(e,o.resetTilt),new D.SingleKeyResetHeading(e,o.resetHeading),new u.DragRotate(e,"primary",E.PivotPoint.EYE,[o.lookAround]),new u.DragRotate(e,"secondary",E.PivotPoint.CENTER,[o.lookAround]),new _.PinchAndPanNavigation(e,"tertiary",[o.lookAround]),this._modeDragRotate,this._modeDragZoom,this._modeDragPan,new P.TwoFingerTilt(e)],M.ViewEventPriorities.INTERNAL),this.view.viewEvents.connect(n),this._updateMode(),this._handles.add(i.watch((()=>this.view.navigation?.browserTouchPanEnabled),(e=>{this._source.browserTouchPanningEnabled=!e}),i.initial))},a._updateMode=function(){const e=this.mode,t=this.primaryDragAction,n=N.get(e)?.get(t);n&&(this._modeDragPan&&(this._modeDragPan.pointerAction=n.pan),this._modeDragRotate&&(this._modeDragRotate.pointerAction=n.rotate),this._modeDragZoom&&(this._modeDragZoom.pointerAction=n.zoom))},e._createClass(n,[{key:"primaryDragAction",get:function(){return this._get("primaryDragAction")},set:function(e){"pan"!==e&&"rotate"!==e||e===this._get("primaryDragAction")||(this._set("primaryDragAction",e),this._updateMode())}},{key:"mode",get:function(){return this._get("mode")},set:function(e){"default"!==e&&"pro"!==e||e===this._get("mode")||(this._set("mode",e),this._updateMode())}},{key:"updating",get:function(){return!!this._inputManager?.updating}},{key:"latestPointerType",get:function(){return this._inputManager?.latestPointerType}},{key:"latestPointerLocation",get:function(){return this._inputManager?.latestPointerLocation}},{key:"multiTouchActive",get:function(){return this._inputManager?.multiTouchActive??!1}},{key:"test",get:function(){return{inputManager:this._inputManager,modeDragPan:this._modeDragPan,modeDragRotate:this._modeDragRotate,modeDragZoom:this._modeDragZoom}}}]),n}(n);t.__decorate([a.property()],z.prototype,"view",void 0),t.__decorate([a.property({value:"pan"})],z.prototype,"primaryDragAction",null),t.__decorate([a.property({value:"default"})],z.prototype,"mode",null),t.__decorate([a.property({readOnly:!0})],z.prototype,"updating",null),t.__decorate([a.property()],z.prototype,"latestPointerType",null),t.__decorate([a.property()],z.prototype,"latestPointerLocation",null),t.__decorate([a.property()],z.prototype,"multiTouchActive",null),t.__decorate([a.property()],z.prototype,"_inputManager",void 0),z=t.__decorate([p.subclass("esri.views.3d.input.SceneInputManager")],z);const N=new Map,S=new Map,Z=new Map;S.set("pan",{pan:"primary",rotate:"secondary",zoom:"tertiary"}),S.set("rotate",{pan:"secondary",rotate:"primary",zoom:"tertiary"}),Z.set("pan",{pan:"primary",rotate:"tertiary",zoom:"secondary"}),Z.set("rotate",{pan:"tertiary",rotate:"primary",zoom:"secondary"}),N.set("default",S),N.set("pro",Z);return z}));
