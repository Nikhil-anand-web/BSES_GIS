/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/workers/workers","../../../chunks/vec3f64","../ray","../triangle","./ElevationSamplerWorker","../../../layers/support/ElevationSampler"],(function(e,n,t,r,a,l,o,i){"use strict";async function u(e,n){const t=await s(),r=await p.createIndex(e,t);return m(t),new c(e,r,n)}let c=function(e){function t(n,t,r){var a;return(a=e.call(this)||this)._rindex=t,a.demResolution={min:0,max:0},a.spatialReference=n.spatialReference.clone(),a.extent=n.extent.clone(),a.noDataValue=null!=r&&r.noDataValue||0,a}return n._inherits(t,e),t.prototype.elevationAt=function(e,n){let t=Number.NEGATIVE_INFINITY;return a.fromValues([e,n,0],[0,0,-1],E),this._rindex.search({minX:e,maxX:e,minY:n,maxY:n},(e=>{l.intersectRay(e,E,N)&&N[2]>t&&(t=N[2])})),t===Number.NEGATIVE_INFINITY?this.noDataValue:t},n._createClass(t)}(i.ElevationSamplerBase);function s(){return++h,f(),x||(x=t.open("ElevationSamplerWorker").catch((()=>null)),x)}function m(e){--h,null!=e&&0===h&&(I=setTimeout((()=>{e.close(),x=null,I=0}),v))}function f(){I&&(clearTimeout(I),I=0)}const p=new o;let h=0,x=null,I=0;const v=1e4,E=a.fromValues([0,0,0],[0,0,-1]),N=r.create();e.create=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
