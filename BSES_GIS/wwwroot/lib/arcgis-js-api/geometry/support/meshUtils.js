/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../core/promiseUtils","../Mesh","./meshUtils/georeference","./meshUtils/merge"],(function(e,r,n,t,o,i){"use strict";async function c(r,t,o){const i=await new Promise(((r,n)=>e(["./meshUtils/elevation"],r,n)));return n.throwIfAborted(o),i.create(r,t,o)}async function a(r,n){await r.load();return(await new Promise(((r,n)=>e(["./meshUtils/elevationSampler"],r,n)))).create(r,n)}function s(e,r,n){return o.georeference(e,r,n)}function l(e,r,n){return o.ungeoreference(e,r,n)}function u(e){const r=i.merge(e);return null!=r?new t(r):null}r.createElevationSampler=a,r.createFromElevation=c,r.georeference=s,r.merge=u,r.ungeoreference=l,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
