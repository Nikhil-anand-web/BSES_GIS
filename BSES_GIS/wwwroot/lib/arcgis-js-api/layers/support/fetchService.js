/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../support/requestPresets"],(function(e,r){"use strict";async function t(e,t){const c=await r.fetchArcGISServiceJSON(e,t);c.layers=c.layers.filter(s);const a={serviceJSON:c};if((c.currentVersion??0)<10.5)return a;const n=await r.fetchArcGISServiceJSON(e+"/layers",t);return a.layersJSON={layers:n.layers.filter(s),tables:n.tables},a}function s(e){return!e.type||"Feature Layer"===e.type}e.fetchFeatureService=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
