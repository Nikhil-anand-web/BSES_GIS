/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/vec3","../../../../../chunks/vec3f32","../../../../../chunks/vec3f64"],(function(t,e,o,n,i){"use strict";let c=function(){function t(t){this._low=i.create(),this._high=i.create(),t&&this.set(t)}var n=t.prototype;return n.set=function(t){o.copy(this._low,o.copy(s,t));const e=o.sub(s,t,this._low);o.copy(this._high,e)},n.get=function(t){return o.add(t,this._low,this._high)},n.getLowScaled=function(t){return o.scale(t,this._low,1)},e._createClass(t,[{key:"low",get:function(){return this._low}},{key:"high",get:function(){return this._high}}]),t}();const s=n.create();t.TwoVectorPosition=c,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
