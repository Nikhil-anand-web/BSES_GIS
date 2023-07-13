/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../core/Error","../../geometry/support/scaleUtils","../statistics/spatialStatistics","../support/binningUtils","../support/adapters/support/layerUtils"],(function(e,a,n,t,i){"use strict";const s=500,r=1e8,l=1280,o=12,c=30,p=15;async function u(a){const{view:n,sampleSize:r}=a;if(!(a&&n&&a.layer))throw new e("scale-range:missing-parameters","'view' and 'layer' parameters are required");a.forBinning&&t.verifyBinningParams(a,"scale-range");const{layer:l,...o}=a,c=a.forBinning?i.binningCapableLayerTypes:i.featureCapableLayerTypes,p=i.createLayerAdapter(l,c,a.forBinning);if(!p)throw new e("scale-range:invalid-parameters","'layer' must be one of these types: "+i.getLayerTypeLabels(c).join(", "));const u={layerAdapter:p,...o};u.sampleSize=r||s,await n.when();const f=null!=u.signal?{signal:u.signal}:null;return await p.load(f),u}function f(e,a){const n=o,t=l/4,i=c,s=l/4,r=p,u=l/2;let f=0,g=0,y=0,m=0;switch(e){case"point":case"multipoint":{const e=a;f=e.avgMinDistance??0,g=n,y=e.minDistance??0,m=t;break}case"polyline":{const e=a;f=e.avgLength??0,g=i,y=e.minLength??0,m=s;break}case"polygon":{const e=a;f=e.avgSize??0,g=r,y=e.minSize??0,m=u;break}}return{resolutionForMinScale:f>0?f/g:null,resolutionForMaxScale:y>0?y/m:null}}function g(e,n,t){const i=f(e.geometryType,n);return{minScale:a.getScaleForResolution(i.resolutionForMinScale??0,t.spatialReference),maxScale:a.getScaleForResolution(i.resolutionForMaxScale??0,t.spatialReference)}}function y(e,a,n=!0){if(e.constraints&&"effectiveLODs"in e.constraints){const t=e.constraints.effectiveLODs,i=n?t:t.slice(0).reverse();let s=null;for(const e of i)if(!(n?e.scale>a:e.scale<a)){s=e;break}return s}}function m(a,n,t,i){const{view:s,snapToLOD:l,layerAdapter:o}=a;if(l){const e=y(s,n),a=y(s,t,!1);n=e?e.scale:n,t=a?a.scale:t}if(n<t)throw new e("scale-range:invalid","calculated minScale is less than maxScale.");return t>n/2&&(t=Math.floor(t/2)),n>r&&(n=0),"polygon"!==o.geometryType&&(t=0),{minScale:Math.ceil(n),maxScale:Math.floor(t),spatialStatistics:i}}async function S(a){const t=await u(a),{view:i,sampleSize:s,layerAdapter:r,signal:l}=t,o=await r.getSampleFeatures({view:i,sampleSize:s,returnGeometry:!0,signal:l});if(!o?.length)throw new e("scale-range:insufficient-info","No features are available to calculate statistics");const c=await n({features:o,geometryType:r.geometryType}),{minScale:p,maxScale:f}=g(r,c,i);return m(t,p,f,c)}return S}));