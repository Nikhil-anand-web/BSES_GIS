/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../core/has","../../../../core/NestedMap","../../../support/RenderState"],(function(e,t,n,r){"use strict";var i;function a(i=!t("disable-feature:high-quality-idle"),a=null){const o=new n.NestedMap;return i?(o.set(r.RenderState.IDLE,e.RenderFeature.Antialiasing,"low"!==a),o.set(r.RenderState.IDLE,e.RenderFeature.HighResolutionAtmosphere,"low"!==a),o.set(r.RenderState.IDLE,e.RenderFeature.HighQualityTransparency,!0),o.set(r.RenderState.IDLE,e.RenderFeature.SSAO,!0),o.set(r.RenderState.IDLE,e.RenderFeature.WaterReflection,!0),o.set(r.RenderState.IDLE,e.RenderFeature.PhysicalPixelRendering,!t("esri-mobile"))):(o.set(r.RenderState.ANIMATING,e.RenderFeature.HighResolutionShadows,!0),o.set(r.RenderState.INTERACTING,e.RenderFeature.HighResolutionShadows,!0)),o.set(r.RenderState.IDLE,e.RenderFeature.HighResolutionShadows,!0),o.set(r.RenderState.IDLE,e.RenderFeature.HighResolutionVoxel,!0),o}e.RenderFeature=void 0,(i=e.RenderFeature||(e.RenderFeature={}))[i.Antialiasing=0]="Antialiasing",i[i.HighQualityTransparency=1]="HighQualityTransparency",i[i.HighResolutionVoxel=2]="HighResolutionVoxel",i[i.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",i[i.SSAO=4]="SSAO",i[i.WaterReflection=5]="WaterReflection",i[i.HighResolutionShadows=6]="HighResolutionShadows",i[i.PhysicalPixelRendering=7]="PhysicalPixelRendering",e.setupFeatureDefaults=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
