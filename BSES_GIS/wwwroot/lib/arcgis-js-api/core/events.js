/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e){return e&&("function"==typeof e.on||"function"==typeof e.addEventListener)}function r(e,r,n){if(!t(e))throw new TypeError("target is not a Evented or EventTarget object");if("on"in e)return e.on(r,n);if(Array.isArray(r)){const t=r.slice();for(const r of t)e.addEventListener(r,n);return{remove(){for(const r of t)e.removeEventListener(r,n)}}}return e.addEventListener(r,n),{remove(){e.removeEventListener(r,n)}}}function n(e,n,o){if(!t(e))throw new TypeError("target is not a Evented or EventTarget object");if("once"in e)return e.once(n,o);const i=r(e,n,(t=>{i.remove(),o.call(e,t)}));return{remove(){i.remove()}}}function o(e,t,n){let o=!1;const i=r(e,t,(t=>{o||n.call(e,t)}));return{resume(){o=!1},pause(){o=!0},remove(){i.remove()}}}const i={Win:"Meta",Scroll:"ScrollLock",Spacebar:" ",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Del:"Delete",Apps:"ContextMenu",Esc:"Escape",Multiply:"*",Add:"+",Subtract:"-",Decimal:".",Divide:"/"};function c({key:e}){return i[e]||e}e.eventKey=c,e.ieKeyNormalizationMap=i,e.isEventTarget=t,e.on=r,e.once=n,e.pausable=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
