/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/mathUtils","../../../../core/time"],(function(i,e,t,s,l){"use strict";let n=function(){function i(){this._step=_,this._dilation=1,this._firstIdleTime=l.Milliseconds(0)}var n=i.prototype;return n.frame=function(i,e){e?0===this._firstIdleTime&&(this._firstIdleTime=l.Milliseconds(performance.now())):this._firstIdleTime=l.Milliseconds(0);if(!t("disable-feature:high-quality-idle")){const i=e?performance.now()-this._firstIdleTime:0;if(i>=r+c)return this._step=l.Milliseconds(1/0),void(this._dilation=1);this._dilation=i>=r?d:1}else this._dilation=1;const n=s.clamp(i/o,_,u);this._step===1/0?this._step=l.Milliseconds(n):this._step=l.Milliseconds(this._step*a+n*(1-a))},n.clear=function(){this._step=this._firstIdleTime=l.Milliseconds(0)},e._createClass(i,[{key:"value",get:function(){return this._step}},{key:"timeDilation",get:function(){return this._dilation}}]),i}();const o=.5,r=l.Milliseconds(12e4),c=l.Milliseconds(1e4),d=10,a=.9,h=1,f=30,_=l.Milliseconds(1e3/h),u=l.Milliseconds(1e3/f);i.AnimationTimeStep=n,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})}));