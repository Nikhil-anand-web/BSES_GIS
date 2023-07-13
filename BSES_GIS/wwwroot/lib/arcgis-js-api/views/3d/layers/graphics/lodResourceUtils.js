/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../webgl-engine/lib/lodRendering/LodResources"],(function(e,o){"use strict";function s(e){const s=new Array;return e.stageResources.geometries.forEach((n=>{const t=e.stageResources.textures;s.push(new o.LodComponentResources(n,t))})),{components:s,minScreenSpaceRadius:e.lodThreshold??0,pivotOffset:e.pivotOffset}}function n(e){return{levels:e.map((e=>s(e)))}}e.makeLodResources=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
