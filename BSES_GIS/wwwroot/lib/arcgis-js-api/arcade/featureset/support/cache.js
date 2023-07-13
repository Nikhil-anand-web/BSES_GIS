/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers"],(function(a){"use strict";let e=function(){function e(){this._databaseTypeMetaData={},this._layerInfo={}}var t=e.prototype;return t.clearDatabaseType=function(a){void 0===this._databaseTypeMetaData[a]&&delete this._databaseTypeMetaData[a]},t.getDatabaseType=function(a){return"MUSTBESET"===a||void 0===this._databaseTypeMetaData[a]?null:this._databaseTypeMetaData[a]},t.setDatabaseType=function(a,e){this._databaseTypeMetaData[a]=e},t.getLayerInfo=function(a){return void 0===this._layerInfo[a]?null:this._layerInfo[a]},t.setLayerInfo=function(a,e){this._layerInfo[a]=e},t.clearLayerInfo=function(a){void 0!==this._layerInfo[a]&&delete this._layerInfo[a]},a._createClass(e)}();return e.applicationCache=null,e}));
