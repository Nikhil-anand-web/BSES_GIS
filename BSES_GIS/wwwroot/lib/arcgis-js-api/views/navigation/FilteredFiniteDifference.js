/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers"],(function(t,e){"use strict";let i=function(){function t(t){this._gain=t,this.lastValue=void 0,this.filteredDelta=void 0}var i=t.prototype;return i.update=function(t){if(this.hasLastValue()){const e=this.computeDelta(t);this._updateDelta(e)}this.lastValue=t},i.reset=function(){this.lastValue=void 0,this.filteredDelta=void 0},i.hasLastValue=function(){return void 0!==this.lastValue},i.hasFilteredDelta=function(){return void 0!==this.filteredDelta},i.computeDelta=function(t){return void 0===this.lastValue?NaN:t-this.lastValue},i._updateDelta=function(t){void 0!==this.filteredDelta?this.filteredDelta=(1-this._gain)*this.filteredDelta+this._gain*t:this.filteredDelta=t},e._createClass(t)}();t.FilteredFiniteDifference=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
