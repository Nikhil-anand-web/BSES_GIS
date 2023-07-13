/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../LayerList/support/layerListUtils"],(function(e,r){"use strict";const s=e=>a(e)||t(e),a=e=>{if(!("type"in e))return!1;switch(e.type){case"feature":case"geojson":case"csv":case"graphics":case"wfs":case"map-notes":case"oriented-imagery":case"scene":case"building-scene":return!0;default:return!1}},t=e=>{const a=r.getNormalizedChildLayerProperty(e);if(null!=a&&e.hasOwnProperty(a)&&null!=e[a])for(const r of e[a])if(s(r))return!0;return!1};e.isValidSnappingLayer=s,e.isValidSnappingLayerGroup=t,e.isValidSnappingLayerSource=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
