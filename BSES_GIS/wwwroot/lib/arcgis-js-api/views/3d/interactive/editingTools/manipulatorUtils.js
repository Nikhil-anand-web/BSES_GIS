/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../support/elevationInfoUtils"],(function(e,n){"use strict";function t(e,t=n.getGraphicEffectiveElevationInfo(e)){return"on-the-ground"!==t.mode&&!(null==e.geometry||!e.geometry.hasZ)}function o(e,n){let t=null;const o=e.events.on("grab-changed",(o=>{null!=t&&(t.remove(),t=null),"start"===o.action?(t=e.disableDisplay(),n&&n(o)):n&&n(o)}));return{remove(){null!=t&&t.remove(),o.remove()}}}e.canMoveZ=t,e.disableDisplayOnGrab=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
