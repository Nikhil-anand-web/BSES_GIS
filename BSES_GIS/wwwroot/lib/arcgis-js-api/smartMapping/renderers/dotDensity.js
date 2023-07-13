/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../renderers/ClassBreaksRenderer","../../renderers/DictionaryRenderer","../../renderers/DotDensityRenderer","../../renderers/HeatmapRenderer","../../renderers/PieChartRenderer","../../renderers/Renderer","../../renderers/SimpleRenderer","../../renderers/UniqueValueRenderer","../../renderers/support/jsonUtils","../../core/Error","../../geometry/support/scaleUtils","../../renderers/support/AuthoringInfo","../heuristics/outline","./support/dotDensityUtils","./support/utils","../statistics/spatialStatistics","../statistics/summaryStatisticsForAttributes","../statistics/support/attributeDensity","../support/binningUtils","../support/utils","../support/adapters/support/layerUtils","../symbology/dotDensity"],(function(e,t,r,a,i,n,s,l,o,d,u,p,y,c,m,b,g,f,v,w,h,S,V){"use strict";const T=500;async function D(e){const t=e.view;if(!(e&&e.layer&&t&&e.attributes&&e.attributes.length))throw new u("dot-density-renderer:missing-parameters","'layer', 'view' and 'attributes' parameters are required");if(e.attributes.length>8)throw new u("dot-density-renderer:invalid-parameters","Dot density renderer does not support more than 8 attributes");e.forBinning&&w.verifyBinningParams(e,"dot-density-renderer");const r={...e,view:t,layer:e.layer,attributes:e.attributes},a=[S.LayerType.FeatureLayer,S.LayerType.OGCFeatureLayer,S.LayerType.GeoJSONLayer,S.LayerType.WFSLayer],i=e.forBinning?S.binningCapableLayerTypes:a,n=S.createLayerAdapter(r.layer,i,e.forBinning);if(!n)throw new u("dot-density-renderer:invalid-parameters","'layer' must be one of these types: "+S.getLayerTypeLabels(i).join(", "));r.layer=n,r.dotBlendingEnabled??(r.dotBlendingEnabled=!0),r.dotValueOptimizationEnabled??(r.dotValueOptimizationEnabled=!0);const s=null!=r.signal?{signal:r.signal}:null;await Promise.all([t.when(),n.load(s)]);if("polygon"!==n.geometryType)throw new u("dot-density-renderer:not-supported","Dot density renderer is supported for polygon layers only");const l=[],o=r.attributes;for(const u of o){const e=await h.getFieldsList({field:u.field,valueExpression:u.valueExpression});l.push(...e)}const d=b.verifyBasicFieldValidity(n,l.filter(Boolean),"dot-density-renderer:invalid-parameters");if(d)throw d;return r}async function E(e){let t=e.dotDensityScheme,r=null,a=null;const i=await b.getBasemapInfo(e.basemap,e.view);if(r=null!=i.basemapId?i.basemapId:null,a=null!=i.basemapTheme?i.basemapTheme:null,t)return{scheme:V.cloneScheme(t),basemapId:r,basemapTheme:a};const n=V.getSchemes({basemap:r,numColors:e.attributes.length,basemapTheme:a});return n&&(t=n.primaryScheme,r=n.basemapId,a=n.basemapTheme),{scheme:t,basemapId:r,basemapTheme:a}}async function x(e){const{view:t,layer:r,attributes:a,signal:i}=e,n=await r.getSampleFeatures({view:t,sampleSize:T,returnGeometry:!0,signal:i}),[s,l]=await Promise.all([g({features:n,geometryType:r.geometryType}),f({layer:r,attributes:a,includeZeros:!1,includeNegatives:!1,view:t,signal:i})]),o=null!=s&&"avgSize"in s&&s.avgSize,d=l.avg;if(!o)throw new u("dot-density-renderer:insufficient-info","Average polygon size is invalid");if(!d)throw new u("dot-density-renderer:insufficient-info","Average attribute value is invalid");const y=p.getResolutionForScale(t.scale,t.spatialReference),c=o*o/(y*y)*.1;return{dotValue:m.roundValue(d/c)||1,referenceScale:t.scale,minSliderValue:1,maxSliderValue:m.roundValue(d)}}async function L(e){const{view:t,layer:r,attributes:a,signal:i}=e,n=[];for(const u of a){const e=await h.getFieldsList({field:u.field,valueExpression:u.valueExpression});n.push(...e)}const s=await r.getSampleFeatures({view:t,sampleSize:T,requiredFields:n,returnGeometry:!0,signal:i}),l=await v({features:s,attributes:a,includeZeros:!1,includeNegatives:!1,view:t});if(!l.avgDensity||!l.minDensity||!l.maxDensity)throw new u("dot-density-renderer:insufficient-info","Invalid density values");const o=p.getResolutionForScale(t.scale,t.spatialReference),d=o*o,y=m.roundValue(l.minDensity*d),c=m.roundValue(l.maxDensity*d),b=10;let g=m.roundValue(l.avgDensity*d*b)||1;return g>c&&(g=c),{dotValue:g,referenceScale:t.scale,minSliderValue:y,maxSliderValue:c}}async function F(e){const t=await D(e),r=t.layer,i=r.geometryType,n=await E(t),s=n&&n.scheme;if(!s)throw new u("dot-density-renderer:insufficient-info","Unable to find dot-density scheme");const l=t.view,o={layer:r,view:l,attributes:t.attributes,signal:t.signal},d={layer:t.layer,view:l,signal:t.signal},[p,m]=await Promise.all([t.trueDensity?L(o):x(o),t.outlineOptimizationEnabled?c(d).catch(b.errorCallback):null]),{dotValue:g,referenceScale:f,minSliderValue:v,maxSliderValue:w}=p,h=b.createColors(s.colors,t.attributes.length),S=t.attributes.map(((e,t)=>({field:e.field,valueExpression:e.valueExpression,label:e.label,valueExpressionTitle:e.valueExpressionTitle,color:h[t]}))),V=new a({attributes:S,dotBlendingEnabled:t.dotBlendingEnabled,outline:m?b.getSymbolOutlineFromScheme(s,i,m.opacity):null,dotValue:g,referenceScale:t.dotValueOptimizationEnabled?f:null,legendOptions:t.legendOptions});return m&&m.visualVariables&&m.visualVariables.length&&(V.visualVariables=m.visualVariables.map((e=>e.clone()))),V.authoringInfo=new y({type:"dot-density",minSliderValue:v,maxSliderValue:w}),{renderer:V,dotDensityScheme:s,basemapId:n.basemapId,basemapTheme:n.basemapTheme}}e.createRenderer=F,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));