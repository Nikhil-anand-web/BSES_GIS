/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../support/arcgisLayerUrl"],(function(e,r){"use strict";function t(e){const t=r.parse(e);if(t){const{serverType:e}=t;return"FeatureServer"===e}return!1}function n(e){const t=r.parse(e);if(t){const{serverType:e}=t;return"ImageServer"===e}return!1}function i(e){return e.includes("https://graph.mapillary.com/images")}e.isFeatureServiceURL=t,e.isImageServiceURL=n,e.isMapillaryURL=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
