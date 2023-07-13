/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../symbols/support/unitConversionUtils","./featureExpressionInfoUtils"],(function(t,e,n,i){"use strict";let s=function(){function t(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}var s=t.prototype;return s.reset=function(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"},s.addOffsetRenderUnits=function(t){this._renderUnitOffset+=t},s.geometryZWithOffset=function(t,e){const n=this.calculateOffsetRenderUnits(e);return null!=this.featureExpressionInfoContext?n:t+n},s.calculateOffsetRenderUnits=function(t){let e=this._meterUnitOffset;const n=this.featureExpressionInfoContext;return null!=n&&(e+=i.execute(n)*this._metersPerElevationInfoUnit),e/t.unitInMeters+this._renderUnitOffset},s.setFromElevationInfo=function(t){this.mode=t.mode,this.unit=n.supportsUnit(t.unit)?t.unit:"meters",this.offsetElevationInfoUnits=t.offset??0},s.updateFeatureExpressionInfoContext=function(t,e,n){if(null==t)return void(this._featureExpressionInfoContext=null);const s=t&&t.arcade;s&&null!=e&&null!=n?(this._featureExpressionInfoContext=i.clone(t),i.setContextFeature(this._featureExpressionInfoContext,i.createFeature(s.modules,e,n))):this._featureExpressionInfoContext=t},t.fromElevationInfo=function(e){const n=new t;return null!=e&&n.setFromElevationInfo(e),n},e._createClass(t,[{key:"featureExpressionInfoContext",get:function(){return this._featureExpressionInfoContext}},{key:"meterUnitOffset",get:function(){return this._meterUnitOffset}},{key:"unit",get:function(){return this._unit},set:function(t){this._unit=t,this._metersPerElevationInfoUnit=n.getMetersPerUnit(t)}},{key:"requiresSampledElevationInfo",get:function(){return"absolute-height"!==this.mode}},{key:"offsetMeters",set:function(t){this._meterUnitOffset=t,this._renderUnitOffset=0}},{key:"offsetElevationInfoUnits",set:function(t){this._meterUnitOffset=t*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}}]),t}();t.ElevationContext=s,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
