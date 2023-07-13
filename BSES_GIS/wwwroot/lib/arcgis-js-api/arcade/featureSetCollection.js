/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers"],(function(e){"use strict";return function(){function t(){this.declaredRootClass="esri.arcade.featureSetCollection",this._layerById={},this._layerByName={}}var r=t.prototype;return r.add=function(e,t,r){this._layerById[t]=r,this._layerByName[e]=r},r.featureSetByName=async function(e,t=!0,r=["*"]){return void 0===this._layerByName[e]?null:this._layerByName[e]},r.featureSetById=async function(e,t=!0,r=["*"]){return void 0===this._layerById[e]?null:this._layerById[e]},r.castToText=function(e=!1){return"object, FeatureSetCollection"},e._createClass(t)}()}));
