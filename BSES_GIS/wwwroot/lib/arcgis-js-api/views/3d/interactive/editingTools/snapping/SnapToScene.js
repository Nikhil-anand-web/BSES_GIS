/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../support/elevationInfoUtils","../../../../interactive/dragEventPipeline"],(function(t,n,e,a){"use strict";let i=function(){function t(){this._view=null,this._elevationInfo=null,this._lastDragEvent=null,this._next=null,this._enabled=!1}var i=t.prototype;return i._snap=function(t){const n=null!=this._view?this._view.toMap(t,{exclude:[]}):null;return null!=n&&null!=this._view&&(n.z=e.getZForElevationMode(n,this._view,this._elevationInfo)),n},i.createDragEventPipelineStep=function(t,n){this._view=t,this._elevationInfo=n,this._lastDragEvent=null;const e=new a.EventPipeline;this._next=e;return[t=>{if(this._lastDragEvent="end"!==t.action?{...t}:null,this._enabled){const n=this._snap(t.screenEnd);return null!=n?{action:t.action,mapStart:t.mapStart,mapEnd:n,screenStart:t.screenStart,screenEnd:t.screenEnd}:null}return{action:t.action,mapStart:t.mapStart,mapEnd:t.mapEnd,screenStart:t.screenStart,screenEnd:t.screenEnd}},e]},n._createClass(t,[{key:"enabled",get:function(){return this._enabled},set:function(t){if(this._enabled!==t&&null!=this._lastDragEvent&&null!=this._next){const n=this._lastDragEvent.mapEnd,e=this._snap(this._lastDragEvent.screenEnd);if(null!=e){const a={action:"update",mapStart:this._lastDragEvent.mapStart,mapEnd:!0===t?e:n,screenStart:this._lastDragEvent.screenEnd,screenEnd:this._lastDragEvent.screenEnd};this._next.execute(a)}}this._enabled=t}}]),t}();t.SnapToScene=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));