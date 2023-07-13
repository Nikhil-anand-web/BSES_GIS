/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function r(e,r,n){if(!r||!e||!e.map)return;const{map:a}=e,i=a.layers.find((e=>e===r));i||a.add(r,n),i&&null!=n&&a.layers.reorder(i,n)}function n(e,r){return e.allLayerViews.find((e=>{const n=e.layer;return n===r||"sublayers"in n&&null!=n.sublayers&&n.sublayers.includes(r)}))}e.addUniqueLayer=r,e.findLayerView=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
