/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../kernel","../../request"],(function(e,t,n){"use strict";function r(e){return s(e)||a(e)}function i(e){return null!=e&&"object"==typeof e&&"type"in e&&"feature"===e.type}function a(e){return"scene"===e?.type}function s(e){const t=e?.type;return"imagery-tile"===t||"tile"===t||"open-street-map"===t||"vector-tile"===t||"web-tile"===t||"wmts"===t}function u(e){const t=e?.type;return"base-tile"===t||"tile"===t||"elevation"===t||"imagery-tile"===t||"base-elevation"===t||"open-street-map"===t||"wcs"===t||"web-tile"===t||"wmts"===t||"vector-tile"===t}function c(e){return null!=e&&"type"in e&&"group"===e.type}const o={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};function l(e){const t=e?.type;return"building-scene"===t||"integrated-mesh"===t||"point-cloud"===t||"scene"===t}function y(e){return"voxel"===e?.type}function f(e){return"imagery-tile"===e?.type}function p(e){return null!=e&&null!=e.parent&&"declaredClass"in e.parent&&"esri.Basemap"===e.parent.declaredClass&&e.parent.baseLayers.includes(e)}function g(e){return"feature"===e?.type&&!e.url&&"memory"===e.source?.type}function d(e){return("feature"===e?.type||"subtype-group"===e?.type)&&"feature-layer"===e.source?.type}function b(e){return"feature"===e?.type&&"feature-layer"===e.source?.type}function L(e){const t=/[:;]/,n=[];let r=!1;if(e&&(e.forEach(((e,i)=>{n.push([i,e]),!r&&t.test(e)&&(r=!0)})),n.length>0)){let e;if(r){const t={};n.forEach((e=>{t[e[0]]=e[1]})),e=JSON.stringify(t)}else{const t=[];n.forEach((e=>{t.push(e[0]+":"+e[1])})),e=t.join(";")}return e}return null}function v(e){if(!e)return;const t=[];return e.forEach(((e,n)=>{t.push('"'+n+'":'+JSON.stringify(e))})),t.length?"{"+t.join(",")+"}":void 0}function m(e){if(e.activeLayer){const t=e.activeLayer.tileMatrixSet;if(t)return t;const n=e.activeLayer.tileMatrixSets;if(n)return n}return null}async function S(e,r){const i=t.id?.findServerInfo(e);if(null!=i?.currentVersion)return i.owningSystemUrl||null;const a=e.toLowerCase().indexOf("/rest/services");if(-1===a)return null;const s=`${e.substring(0,a)}/rest/info`,u=null!=r?r.signal:null,{data:c}=await n(s,{query:{f:"json"},responseType:"json",signal:u});return c?.owningSystemUrl||null}function h(e){if(!("capabilities"in e))return!1;switch(e.type){case"csv":case"feature":case"geojson":case"imagery":case"knowledge-graph-sublayer":case"ogc-feature":case"oriented-imagery":case"scene":case"subtype-group":case"subtype-sublayer":case"wfs":return!0;default:return!1}}function w(e){return null!=e&&"object"==typeof e&&"isTable"in e&&!!e.isTable}function E(e){return h(e)?"effectiveCapabilities"in e?e.effectiveCapabilities:e.capabilities:null}function T(e){if(!("editingEnabled"in e))return!1;switch(e.type){case"csv":case"feature":case"geojson":case"oriented-imagery":case"scene":case"subtype-group":case"subtype-sublayer":return!0;default:return!1}}function j(e){return!!T(e)&&("effectiveEditingEnabled"in e?e.effectiveEditingEnabled:e.editingEnabled)}e.getEffectiveEditingEnabled=j,e.getEffectiveLayerCapabilities=E,e.getOwningPortalUrl=S,e.getTileMaxtrixSetFromActiveLayer=m,e.isBaseLayer=p,e.isBasemap3DSupportedLayer=r,e.isBasemapSupportedTiledLayer=s,e.isFeatureCollectionLayer=g,e.isFeatureLayer=i,e.isFeatureServiceLayer=b,e.isGroupLayer=c,e.isImageryTileLayer=f,e.isLayerWithFeatureLayerSource=d,e.isSceneLayer=a,e.isSceneServiceLayer=l,e.isTable=w,e.isTiledLayer=u,e.isVoxelLayer=y,e.sceneServiceLayerTypeToClassName=o,e.serializeLayerDefinitions=L,e.serializeTimeOptions=v,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
