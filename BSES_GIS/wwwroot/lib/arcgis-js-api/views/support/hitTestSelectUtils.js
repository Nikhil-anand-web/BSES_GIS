/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";async function e(t,e){if("2d"===t.type)return t.hitTest(e);const n=await t.hitTest(e);if(0===n.results.length)return n;const r=(n.results[0].distance??0)*(1+i),s=n.results.findIndex((t=>(t.distance??0)>r));return-1!==s&&(n.results=n.results.slice(0,s)),n}const i=.05;function n(t){return"graphic"===t?.type}function r(t){return t.find(n)??null}function s(t){return t.filter(n)}t.filterGraphicHits=s,t.findFirstGraphicHit=r,t.hitTestSelectSimilarDistance=e,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
