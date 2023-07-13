/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/Collection","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./GamepadInputDevice"],(function(e,r,o,t,c,s,a,n,p,i){"use strict";let u=function(r){function o(...e){var o;return(o=r.call(this,...e)||this).devices=new t,o.enabledFocusMode="document",o}return e._inherits(o,r),e._createClass(o)}(o);r.__decorate([c.property({type:t.ofType(i),readOnly:!0})],u.prototype,"devices",void 0),r.__decorate([c.property({type:["document","view","none"]})],u.prototype,"enabledFocusMode",void 0),u=r.__decorate([p.subclass("esri.views.input.gamepad.GamepadSettings")],u);return u}));
