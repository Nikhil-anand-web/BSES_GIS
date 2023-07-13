/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers"],(function(t){"use strict";return function(){function e(t,e,r){this.layerExtent=4096,this._features=[],this.layer=t,this.zoom=e,this._spriteInfo=r,this._filter=t.getFeatureFilter()}var r=e.prototype;return r.pushFeature=function(t){this._filter&&!this._filter.filter(t,this.zoom)||this._features.push(t)},r.hasFeatures=function(){return this._features.length>0},r.getResources=function(t,e,r){},t._createClass(e)}()}));
