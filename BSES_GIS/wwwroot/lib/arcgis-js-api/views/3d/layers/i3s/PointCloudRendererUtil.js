/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e){const t=e.renderer,n=t?.type,o=t?.toJSON()??null;let r=null,i=!1;const a=e.attributeStorageInfo;"point-cloud-unique-value"===n||"point-cloud-stretch"===n||"point-cloud-class-breaks"===n?r=u(a,t.field):"point-cloud-rgb"===n?(r=l(a,t.field),i=null!=r):(r=l(a,"RGB"),i=null!=r);let s=null;return t?.colorModulation&&(s=u(a,t.colorModulation.field)),{rendererJSON:o,isRGBRenderer:i,primaryAttribute:r,modulationAttribute:s}}function n(e){const t=e.filters;return t?t.map((t=>({filterJSON:t.toJSON(),attributeInfo:u(e.attributeStorageInfo,t.field)}))):[]}function o(e){const t=e?.pointSizeAlgorithm;return t&&"splat"===t.type?t:null}function r(e){const t=e?.pointSizeAlgorithm;return t&&"fixed-size"===t.type?t:null}function i(e){const t=e?.pointSizeAlgorithm;return!(!t||!t.type)&&"fixed-size"===t.type}function l(e,t){for(const n of e??[])if(n.name===t&&null!=n.attributeValues&&"UInt8"===n.attributeValues.valueType&&3===n.attributeValues.valuesPerElement)return{name:t,storageInfo:n,useElevation:!1};return null}function u(e,t){for(const n of e??[])if(n.name===t){const e="embedded-elevation"===n.encoding;return e?{name:t,storageInfo:null,useElevation:e}:{name:t,storageInfo:n,useElevation:e}}return"elevation"===t?.toLowerCase()?{name:t,storageInfo:null,useElevation:!0}:null}e.getAttributeInfo=u,e.getFilterInfo=n,e.getFixedSizeAlgorithm=r,e.getRendererInfo=t,e.getSplatSizeAlgorithm=o,e.rendererUsesFixedSizes=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));