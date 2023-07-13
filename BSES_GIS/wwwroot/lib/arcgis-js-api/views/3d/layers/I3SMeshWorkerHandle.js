/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/Logger","../../../core/maybe","../../../core/PooledArray","../../../core/workers/WorkerHandle","../../../geometry/projection","../../../libs/i3s/enums"],(function(e,s,o,t,i,n,r,p){"use strict";let u=function(e){function o(s){return e.call(this,"SceneLayerWorker","process",{process:e=>[e.geometryBuffer],project:e=>[e.positions.buffer],transformNormals:e=>[e.normals.buffer]},s,{hasInitialize:!0})||this}s._inherits(o,e);var t=o.prototype;return t.setModifications=function(e,s,o,t){const i={context:e,modifications:c(s,o,t),isGeodetic:t.isGeographic};this.broadcast(i,"setModifications")},t.setLegacySchema=function(e,s){const o=JSON.stringify(s);this.broadcast({context:e,jsonSchema:o},"setLegacySchema")},t.destroyContext=function(e){return this.broadcast(e,"destroyContext")},t.project=function(e,s){return this.invokeMethod("project",e,s)},t.transformNormals=function(e,s){return this.invokeMethod("transformNormals",e,s)},s._createClass(o)}(n.WorkerHandle);const h=new i({deallocator:null}),a=[0,0,0];function c(e,s,i){h.clear();let n=1/0,u=1/0,c=-1/0,f=-1/0,l=!1;for(const y of s){const e="clip"===y.type?p.ModificationType.Inside:"mask"===y.type?p.ModificationType.Outside:p.ModificationType.Replace,s=t.unwrapOrThrow(y.geometry,"modification.geometry");let d=e=>e;if(s.spatialReference){if(!r.canProjectWithoutEngine(s.spatialReference,i)){o.getLogger("esri.views.3d.layers.I3SMeshWorkerHandle").warn("Can't project modification polygon into layer spatial reference, ignoring modification");continue}d=e=>(r.projectVectorToVector(e,s.spatialReference,a,i),a)}else s.hasZ||(a[2]=0,d=e=>(a[0]=e[0],a[1]=e[1],a));l=l||e===p.ModificationType.Outside,h.push(e),h.push(s.rings.length);for(const o of s.rings){h.push(o.length);for(const e of o){const s=d(e);h.push(s[0]),h.push(s[1]),h.push(s[2]),n=Math.min(n,s[0]),u=Math.min(u,s[1]),c=Math.max(c,s[0]),f=Math.max(f,s[1])}}}if(null!=e)if(l){const s=1e-4;h.push(p.ModificationType.Inside),h.push(2),h.push(4),h.push(n-s),h.push(u-s),h.push(0),h.push(c+s),h.push(u-s),h.push(0),h.push(c+s),h.push(f+s),h.push(0),h.push(n-s),h.push(f+s),h.push(0),h.push(4),h.push(e[0]),h.push(e[1]),h.push(0),h.push(e[2]),h.push(e[1]),h.push(0),h.push(e[2]),h.push(e[3]),h.push(0),h.push(e[0]),h.push(e[3]),h.push(0)}else h.push(p.ModificationType.Outside),h.push(1),h.push(4),h.push(e[0]),h.push(e[1]),h.push(0),h.push(e[2]),h.push(e[1]),h.push(0),h.push(e[2]),h.push(e[3]),h.push(0),h.push(e[0]),h.push(e[3]),h.push(0);h.push(p.ModificationType.Finished);const d=new Float64Array(h.length);for(let o=0;o<h.length;++o)d[o]=h.at(o);return d}e.I3SMeshWorkerHandle=u,e.toWasmModification=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));