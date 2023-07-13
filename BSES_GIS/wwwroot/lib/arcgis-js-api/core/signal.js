/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","./lang","./accessorSupport/tracking","./accessorSupport/tracking/SimpleObservable"],(function(e,t,i,n,s){"use strict";let l=function(){function e(e,t){this._observable=new s.SimpleObservable,this._value=e,this._equalityFunction=t}return e.prototype.mutate=function(e){e(this._value),this._observable.notify()},t._createClass(e,[{key:"value",get:function(){return n.trackAccess(this._observable),this._value},set:function(e){this._equalityFunction(e,this._value)||(this._value=e,this._observable.notify())}}]),e}();function u(e,t=i.equalsShallow){return new l(e,t)}e.signal=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
