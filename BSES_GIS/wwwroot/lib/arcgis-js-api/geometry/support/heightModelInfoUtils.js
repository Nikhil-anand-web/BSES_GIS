/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../core/has","../../core/Error","../HeightModelInfo","../../layers/support/arcgisLayerUrl"],(function(e,t,n,i,r){"use strict";function o(e,t){if(!e)return null;if(!l(e))return new n("webscene:unsupported-height-model-info","The vertical coordinate system of the scene is not supported",{heightModelInfo:e});const r=e.heightUnit,o=i.deriveUnitFromSR(e,t).heightUnit;return r!==o?new n("webscene:incompatible-height-unit",`The vertical units of the scene (${r}) must match the horizontal units of the scene (${o})`,{verticalUnit:r,horizontalUnit:o}):null}function a(e,t,r){const o=u(e),a=t,l=s(o,a,r);if(o){const t=i.deriveUnitFromSR(o,e.spatialReference).heightUnit;if(!r&&t!==o.heightUnit){const e=new n("layerview:unmatched-height-unit",`The vertical units of the layer must match the horizontal units (${t})`,{horizontalUnit:t});return new n("layerview:unsupported-height-model-info","The vertical coordinate system of the layer is not supported",{heightModelInfo:o,error:e})}}if(!h(e)||l===c.Unsupported)return new n("layerview:unsupported-height-model-info","The vertical coordinate system of the layer is not supported",{heightModelInfo:o});switch(l){case c.Units:{const e=o?.heightUnit||"unknown",t=a?.heightUnit||"unknown",i=new n("layerview:incompatible-height-unit",`The vertical units of the layer (${e}) must match the vertical units of the scene (${t})`,{layerUnit:e,sceneUnit:t});return new n("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:o,sceneHeightModelInfo:a,error:i})}case c.HeightModel:{const e=o?.heightModel||"unknown",t=a?.heightModel||"unknown",i=new n("layerview:incompatible-height-model",`The height model of the layer (${e}) must match the height model of the scene (${t})`,{layerHeightModel:e,sceneHeightModel:t});return new n("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:o,sceneHeightModelInfo:a,error:i})}case c.CRS:{const e=o?.vertCRS||"unknown",t=a?.vertCRS||"unknown",i=new n("layerview:incompatible-vertical-datum",`The vertical datum of the layer (${e}) must match the vertical datum of the scene (${t})`,{layerDatum:e,sceneDatum:t});return new n("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:o,sceneHeightModelInfo:a,error:i})}}return null}function s(e,t,n){if(!l(e)||!l(t))return c.Unsupported;if(null==e||null==t)return c.Ok;if(!n&&e.heightUnit!==t.heightUnit)return c.Units;if(e.heightModel!==t.heightModel)return c.HeightModel;switch(e.heightModel){case"gravity-related-height":return c.Ok;case"ellipsoidal":return e.vertCRS===t.vertCRS?c.Ok:c.CRS;default:return c.Unsupported}}var c;function l(e){return null==e||null!=e.heightModel&&null!=e.heightUnit}function h(e){return"heightModelInfo"in e&&null!=e.heightModelInfo||null!=e.spatialReference||!f(e)}function u(e){const t=e.url?r.parse(e.url):void 0,n=e.spatialReference?.vcsWkid;return!(null==n&&null!=t&&"ImageServer"===t.serverType)&&d(e)&&e.heightModelInfo?e.heightModelInfo:f(e)?i.deriveUnitFromSR(y,e.spatialReference):null}function d(e){return"heightModelInfo"in e}function g(e){if("unknown"===e.type||!("capabilities"in e))return!1;switch(e.type){case"csv":case"feature":case"geojson":case"subtype-group":case"ogc-feature":case"oriented-imagery":case"wfs":case"knowledge-graph-sublayer":return!0;default:return!1}}function f(e){return g(e)?!!(e.capabilities&&e.capabilities.data&&e.capabilities.data.supportsZ):m(e)}function p(e){return null!=e.layers||m(e)||g(e)||d(e)}function m(e){switch(e.type){case"building-scene":case"elevation":case"integrated-mesh":case"point-cloud":case"scene":case"voxel":return!0;case"base-dynamic":case"base-elevation":case"base-tile":case"bing-maps":case"csv":case"dimension":case"geojson":case"feature":case"subtype-group":case"geo-rss":case"graphics":case"group":case"imagery":case"imagery-tile":case"kml":case"knowledge-graph":case"link-chart":case"knowledge-graph-sublayer":case"line-of-sight":case"map-image":case"map-notes":case"media":case"ogc-feature":case"open-street-map":case"oriented-imagery":case"route":case"stream":case"tile":case"unknown":case"unsupported":case"vector-tile":case"video":case"wcs":case"web-tile":case"wfs":case"wms":case"wmts":case null:return!1}return!1}!function(e){e[e.Ok=0]="Ok",e[e.Units=1]="Units",e[e.HeightModel=2]="HeightModel",e[e.CRS=3]="CRS",e[e.Unsupported=4]="Unsupported"}(c||(c={}));const y=new i({heightModel:"gravity-related-height"});e.deriveHeightModelInfoFromLayer=u,e.rejectLayerError=a,e.supportsHeightModelInfo=p,e.validateWebSceneError=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));