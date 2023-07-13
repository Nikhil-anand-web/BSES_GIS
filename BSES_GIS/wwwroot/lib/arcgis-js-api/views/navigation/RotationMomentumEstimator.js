/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","./MomentumEstimator"],(function(t,e,o){"use strict";let n=function(t){function o(e=3,o=.01,n=.95,i=12){return t.call(this,e,o,n,i)||this}return e._inherits(o,t),o.prototype.add=function(t,n){const i=this.value.lastValue;if(null!=i){let e=t-i;for(;e>Math.PI;)e-=2*Math.PI;for(;e<-Math.PI;)e+=2*Math.PI;t=i+e}e._get(e._getPrototypeOf(o.prototype),"add",this).call(this,t,n)},e._createClass(o)}(o.MomentumEstimator);t.RotationMomentumEstimator=n,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
