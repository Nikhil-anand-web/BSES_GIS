/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers"],(function(e){"use strict";return function(){function t(e,t=30){this.name=e,this._counter=0,this._samples=new Array(t)}return t.prototype.record=function(e){null!=e&&(this._samples[++this._counter%this._samples.length]=e)},e._createClass(t,[{key:"median",get:function(){return this._samples.slice().sort(((e,t)=>e-t))[Math.floor(this._samples.length/2)]}},{key:"average",get:function(){return this._samples.reduce(((e,t)=>e+t),0)/this._samples.length}},{key:"last",get:function(){return this._samples[this._counter%this._samples.length]}}]),t}()}));
