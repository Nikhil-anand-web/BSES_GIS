/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../layers/support/PerformanceInfoLayerView","../terrain/terrainUtils"],(function(e,r,a){"use strict";return e._createClass((function(e,s){if(this.layer=null,this.memory=0,this.displayedNumberOfFeatures=0,this.maximumNumberOfFeatures=null,this.totalNumberOfFeatures=null,this.layer=e.layer,this.memory=a.isSurfaceLayerView(e)?s.basemapTerrain.getUsedMemoryForLayerView(e):e.usedMemory,r.isPerformanceInfoLayerView(e)){const r=e.performanceInfo;this.displayedNumberOfFeatures=r.displayedNumberOfFeatures,this.maximumNumberOfFeatures=r.maximumNumberOfFeatures,this.totalNumberOfFeatures=r.totalNumberOfFeatures}}))}));
