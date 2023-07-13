/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../core/has","../../../core/time"],(function(e,a,i){"use strict";let o=function(){function i(){}return i.isValidProfile=function(e){return e in i.profiles},i.getDefaultProfile=function(){return a("esri-iPhone")?"low":"medium"},i.apply=function(e,a){const o=i.profiles[e];a.graphics3D.maxTotalNumberOfFeatures=o.graphics3D.maxTotalNumberOfFeatures,a.graphics3D.maxTotalNumberOfPrimitives=o.graphics3D.maxTotalNumberOfPrimitives,a.graphics3D.polygonLodFactor=o.graphics3D.polygonLodFactor,a.graphics3D.polylineLodFactor=o.graphics3D.polylineLodFactor,a.graphics3D.snapshotAvailable=o.graphics3D.snapshotAvailable,a.graphics3D.skipHighSymbolLods=o.graphics3D.skipHighSymbolLods;const t=a.sceneService.object,r=o.sceneService.object;t.lodFactor=r.lodFactor,t.lodCrossfadeinDuration=r.lodCrossfadeinDuration,t.lodCrossfadeoutDuration=r.lodCrossfadeoutDuration,t.lodCrossfadeUncoveredDuration=r.lodCrossfadeUncoveredDuration,a.sceneService.point.lodFactor=o.sceneService.point.lodFactor,a.sceneService.integratedMesh.lodFactor=o.sceneService.integratedMesh.lodFactor,a.sceneService.pointCloud.lodFactor=o.sceneService.pointCloud.lodFactor,a.sceneService.uncompressedTextureDownsamplingEnabled=o.sceneService.uncompressedTextureDownsamplingEnabled,a.tiledSurface.lodBias=o.tiledSurface.lodBias,a.tiledSurface.angledSplitBias=o.tiledSurface.angledSplitBias,a.tiledSurface.reduceTileLevelDifferences=o.tiledSurface.reduceTileLevelDifferences,a.tiledSurface.textureFadeDuration=o.tiledSurface.textureFadeDuration,a.heatmap.pixelRatio=o.heatmap.pixelRatio,a.heatmap.maxTotalNumberOfFeatures=o.heatmap.maxTotalNumberOfFeatures,a.fadeDuration=o.fadeDuration,a.antialiasingEnabled=o.antialiasingEnabled,a.physicallyBasedRenderingEnabled=o.physicalBasedRenderingEnabled,a.highQualityTransparency=o.highQualityTransparency,a.highResolutionAtmosphere=o.highResolutionAtmosphere,a.reflections=o.reflections,a.ambientOcclusion=o.ambientOcclusion,a.memoryLimit=o.memoryLimit,a.additionalCacheMemory=o.additionalCacheMemory,a.frameRate=o.frameRate,a.maximumPixelRatio=o.maximumPixelRatio},e._createClass(i)}();function t(){const e=!!a("esri-mobile"),o=!!a("ios"),t=i.Milliseconds(400);return{low:{graphics3D:{maxTotalNumberOfFeatures:25e3,maxTotalNumberOfPrimitives:85e4,polygonLodFactor:.5,polylineLodFactor:1,snapshotAvailable:!1,skipHighSymbolLods:!0},heatmap:{pixelRatio:.125,maxTotalNumberOfFeatures:25e3},sceneService:{object:{lodFactor:.2,lodCrossfadeinDuration:i.Milliseconds(0),lodCrossfadeoutDuration:i.Milliseconds(0),lodCrossfadeUncoveredDuration:i.Milliseconds(0)},point:{lodFactor:1},integratedMesh:{lodFactor:.6},pointCloud:{lodFactor:.5},uncompressedTextureDownsamplingEnabled:!0},tiledSurface:{lodBias:-1,angledSplitBias:.5,reduceTileLevelDifferences:!1,textureFadeDuration:i.Milliseconds(0)},fadeDuration:i.Milliseconds(0),antialiasingEnabled:!1,physicalBasedRenderingEnabled:!1,highQualityTransparency:!1,highResolutionAtmosphere:!1,reflections:!1,ambientOcclusion:!1,memoryLimit:200,additionalCacheMemory:0,frameRate:0,maximumPixelRatio:1},medium:{graphics3D:{maxTotalNumberOfFeatures:5e4,maxTotalNumberOfPrimitives:17e5,polygonLodFactor:e?.8:1,polylineLodFactor:e?1.2:1.5,snapshotAvailable:!o,skipHighSymbolLods:!1},heatmap:{pixelRatio:.25,maxTotalNumberOfFeatures:5e4},sceneService:{object:{lodFactor:1,lodCrossfadeinDuration:i.Milliseconds(0),lodCrossfadeoutDuration:i.Milliseconds(0),lodCrossfadeUncoveredDuration:t},point:{lodFactor:1},integratedMesh:{lodFactor:1},pointCloud:{lodFactor:1},uncompressedTextureDownsamplingEnabled:e},tiledSurface:{lodBias:0,angledSplitBias:1,reduceTileLevelDifferences:!a("disable-feature:reduce-map-tile-levels"),textureFadeDuration:t},fadeDuration:t,antialiasingEnabled:!0,physicalBasedRenderingEnabled:!0,highQualityTransparency:!0,highResolutionAtmosphere:!1,reflections:!1,ambientOcclusion:!1,memoryLimit:e?600:750,additionalCacheMemory:e?-100:150,frameRate:0,maximumPixelRatio:1},high:{graphics3D:{maxTotalNumberOfFeatures:5e4,maxTotalNumberOfPrimitives:17e5,polygonLodFactor:e?1.2:2,polylineLodFactor:e?1.2:2,snapshotAvailable:!o,skipHighSymbolLods:!1},heatmap:{pixelRatio:.5,maxTotalNumberOfFeatures:5e4},sceneService:{object:{lodFactor:1,lodCrossfadeinDuration:i.Milliseconds(0),lodCrossfadeoutDuration:i.Milliseconds(0),lodCrossfadeUncoveredDuration:t},point:{lodFactor:1},integratedMesh:{lodFactor:1},pointCloud:{lodFactor:1},uncompressedTextureDownsamplingEnabled:!1},tiledSurface:{lodBias:0,angledSplitBias:1,reduceTileLevelDifferences:!a("disable-feature:reduce-map-tile-levels"),textureFadeDuration:t},fadeDuration:t,antialiasingEnabled:!0,physicalBasedRenderingEnabled:!0,highQualityTransparency:!0,highResolutionAtmosphere:!0,reflections:!0,ambientOcclusion:!0,memoryLimit:e?900:1500,additionalCacheMemory:e?-150:0,frameRate:0,maximumPixelRatio:e?1:1/0}}}o.test={reset(){const e=t();for(const a of Object.keys(e))o.profiles[a]=e[a]}},function(e){e.profiles=t()}(o||(o={}));return o}));
