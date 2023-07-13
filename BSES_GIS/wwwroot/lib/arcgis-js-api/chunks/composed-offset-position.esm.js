/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";
/*!
     * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
     * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
     * v1.4.2
     */function e(t){return i(t)}function n(t){return u(t,"offsetTop")}function o(t){return u(t,"offsetLeft")}function r(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function f(t){const e=new Set;let n=t.getRootNode();for(;n;)e.add(n),n=n.parentNode?n.parentNode.getRootNode():null;return e}function i(t){for(let e=t;e;e=r(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=r(t);e;e=r(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||"none"!==t.filter)return e;if("BODY"===e.tagName)return e}}return null}function u(t,e){let n=t[e],o=i(t);const r=f(t);for(;o&&!r.has(o.getRootNode());)n-=o[e],o=i(o);return n}t.offsetLeft=o,t.offsetParent=e,t.offsetTop=n,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
