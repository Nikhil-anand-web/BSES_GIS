/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../core/promiseUtils"],(function(t,n,e){"use strict";let r=n._createClass((function(){}));function a(t,n,e){if(t instanceof r&&!(t instanceof o)){const r=new o;return r.fn=t,r.parameterEvaluator=e,r.context=n,r}return t}let i=function(t){function i(n){var e;return(e=t.call(this)||this).fn=n,e}n._inherits(i,t);var l=i.prototype;return l.createFunction=function(t){return(...n)=>this.fn(t,{preparsed:!0,arguments:n})},l.call=function(t,n){return this.fn(t,n)},l.marshalledCall=function(t,n,i,l){return l(t,n,((n,s,c)=>{c=c.map((n=>n instanceof r&&!(n instanceof o)?a(n,t,l):n));const u=this.call(i,{args:c});return e.isPromiseLike(u)?u.then((t=>a(t,i,l))):u}))},n._createClass(i)}(r),o=function(t){function e(){var n;return(n=t.apply(this,arguments)||this).fn=null,n.context=null,n}n._inherits(e,t);var r=e.prototype;return r.createFunction=function(t){return this.fn.createFunction(this.context)},r.call=function(t,n){return this.fn.marshalledCall(t,n,this.context,this.parameterEvaluator)},r.marshalledCall=function(t,n,e){return this.fn.marshalledCall(t,n,this.context,this.parameterEvaluator)},n._createClass(e)}(r);t.ArcadeFunction=r,t.NativeFunction=i,t.ScopeMarshalledFunction=o,t.wrapModuleScopedResponse=a,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
