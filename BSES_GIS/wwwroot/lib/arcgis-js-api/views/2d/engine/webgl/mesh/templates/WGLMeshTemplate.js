/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../geometry/GeometryCursor","../../../../../../symbols/cim/effects/CIMEffectHelper"],(function(e,t,r){"use strict";return function(){function i(){this._materialKey=null}var n=i.prototype;return n.bindFeature=function(e,t,r){},n.write=function(e,i,n,f){if(this._effects&&this._effects.length>0){let n=t.GeometryCursor.fromFeatureSetReaderCIM(i);if(n){n.invertY();const t=r.CIMEffectHelper.executeEffects(this._effects,n,e.tileKey,f.geometryEngine);for(;n=t.next();)n.invertY(),this._write(e,i,f,n)}}else this._write(e,i,f)},n._write=function(e,t,r,i){},e._createClass(i)}()}));
