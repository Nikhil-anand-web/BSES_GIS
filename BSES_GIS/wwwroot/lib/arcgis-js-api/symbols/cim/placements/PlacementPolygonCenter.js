/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/has","../../../geometry/support/boundsUtils","../../../geometry/support/centroid","../../../geometry/support/labelPoint","../CIMPlacements","../enums"],(function(e,t,n,o,s,l,r,i){"use strict";let a=function(){function e(){}return e.local=function(){return null===e.instance&&(e.instance=new e),e.instance},e.prototype.execute=function(e,t,n,o,s){return new c(e,t,n)},t._createClass(e)}();a.instance=null;let c=function(){function e(e,t,n){this._geometryCursor=e,this._offsetX=void 0!==t.offsetX?t.offsetX*n:0,this._offsetY=void 0!==t.offsetY?t.offsetY*n:0,this._method=void 0!==t.method?t.method:i.PlacementPolygonCenterMethod.OnPolygon,this._internalPlacement=new r.Placement}var a=e.prototype;return a.next=function(){const e=this._geometryCursor;return this._geometryCursor=null,e?this._polygonCenter(e):null},a._polygonCenter=function(e){let t=!1;switch(this._method){case i.PlacementPolygonCenterMethod.CenterOfMass:{const n=s.weightedAreaCentroid(e);n&&(this._internalPlacement.setTranslate(n[0]+this._offsetX,n[1]+this._offsetY),t=!0)}break;case i.PlacementPolygonCenterMethod.BoundingBoxCenter:{const n=o.getCursorBoundsXY(e);n&&(this._internalPlacement.setTranslate((n[2]+n[0])/2+this._offsetX,(n[3]+n[1])/2+this._offsetY),t=!0)}break;case i.PlacementPolygonCenterMethod.OnPolygon:default:{let o;o=n("polylabel-placement-enabled")?l.getPolylabelPoint(e):l.labelPointAdapter(e),null!==o&&(this._internalPlacement.setTranslate(o[0]+this._offsetX,o[1]+this._offsetY),t=!0)}}return t?this._internalPlacement:null},t._createClass(e)}();e.PlacementPolygonCenter=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
