/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","./infoFor3D","./layerUtils"],(function(e,t,i){"use strict";function n(e){return!(!(e&&"object"==typeof e&&"loaded"in e&&e.loaded&&i.getEffectiveLayerCapabilities(e)?.operations?.supportsEditing&&"type"in e)||"editingEnabled"in e&&!i.getEffectiveEditingEnabled(e)||"scene"===e.type&&!o(e))}function o(e){const i=e.infoFor3D;if(!i)return!0;const{supportedFormats:n,queryFormats:o}=i,r=t.getMimeTypeFormatId("model/gltf-binary",n)??t.getFilenameFormatId("glb",n);return null!=r&&o.includes(r)}e.isEditableLayer=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
