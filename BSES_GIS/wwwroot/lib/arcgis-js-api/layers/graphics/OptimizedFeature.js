/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers"],(function(t,e){"use strict";let i=function(){function t(t=null,e={},i,s){this.geometry=t,this.attributes=e,this.centroid=i,this.objectId=s,this.displayId=0,this.geohashX=0,this.geohashY=0}return t.prototype.weakClone=function(){const e=new t(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e},e._createClass(t)}();function s(t){return!(null==t.geometry||!t.geometry.coords||!t.geometry.coords.length)}let o=function(t){function i(){return t.apply(this,arguments)||this}return e._inherits(i,t),e._createClass(i)}(i);t.OptimizedFeature=i,t.OptimizedFeatureWithGeometry=o,t.hasGeometry=s,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
