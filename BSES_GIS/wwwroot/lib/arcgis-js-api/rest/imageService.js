/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../geometry","../request","../geometry/support/normalizeUtils","./utils","./support/ImageAngleResult","./support/ImageAreaResult","./support/ImageDistanceResult","./support/ImageHeightResult","./support/ImageIdentifyResult","./support/ImagePixelLocationResult","./support/ImagePointResult","./support/ImageSampleResult","../geometry/SpatialReference"],(function(e,t,n,a,r,o,s,i,l,c,u,m,p,f){"use strict";function g(e){const t=e?.time;if(t&&(null!=t.start||null!=t.end)){const n=[];null!=t.start&&n.push(t.start),null==t.end||n.includes(t.end)||n.push(t.end),e.time=n.join(",")}}async function d(e,t,n){const o=r.parseUrl(e),s=t.geometry?[t.geometry]:[],i=await a.normalizeCentralMeridian(s),l=t.toJSON();g(l);const c=i&&i[0];null!=c&&(l.geometry=c.toJSON());const u=r.encode({...o.query,f:"json",...l});return r.asValidOptions(u,n)}async function y(e,t,a){const s=t.toJSON();null!=s.angleName&&(s.angleName=s.angleName.join(",")),null!=t.point&&t.point.spatialReference?.imageCoordinateSystem&&(s.point.spatialReference=v(t.point.spatialReference)),null!=t.spatialReference&&t.spatialReference.imageCoordinateSystem&&(s.spatialReference=A(t.spatialReference));const i=r.parseUrl(e),l=r.encode({...i.query,f:"json",...s}),c=r.asValidOptions(l,a),{data:u}=await n(`${i.path}/computeAngles`,c);return u.spatialReference=u.spatialReference?null!=u.spatialReference.geodataXform?new f({wkid:0,imageCoordinateSystem:u.spatialReference}):f.fromJSON(u.spatialReference):null,"NaN"===u.north&&(u.north=null),"NaN"===u.up&&(u.up=null),new o(u)}async function S(e,t,a){const o=t.toJSON(),{geometries:s}=t;if(s)for(let n=0;n<s.length;n++)s[n].spatialReference?.imageCoordinateSystem&&(o.geometries.geometries[n].spatialReference=v(s[n].spatialReference));const i=r.parseUrl(e),l=r.encode({...i.query,f:"json",...o}),c=r.asValidOptions(l,a),{data:m}=await n(`${i.path}/computePixelLocation`,c);return u.fromJSON(m)}async function N(e,t,a){const o=await d(e,t,a),s=r.parseUrl(e),{data:i}=await n(`${s.path}/computeStatisticsHistograms`,o),{statistics:l}=i;return l?.length&&l.forEach((e=>{e.avg=e.mean,e.stddev=e.standardDeviation})),{statistics:l,histograms:i.histograms}}async function O(e,t,a){const o=await d(e,t,a),s=r.parseUrl(e),{data:i}=await n(`${s.path}/computeHistograms`,o);return{histograms:i.histograms}}async function R(e,t,o){const s=t.toJSON();g(s),s.outFields?.length&&(s.outFields=s.outFields.join(","));const i=await a.normalizeCentralMeridian(t.geometry),l=i?.[0];null!=l&&(s.geometry=l.toJSON());const c=r.parseUrl(e),u=r.encode({...c.query,f:"json",...s}),m=r.asValidOptions(u,o),{data:f}=await n(`${c.path}/getSamples`,m),d=f?.samples?.map((e=>{const t="NaN"===e.value||""===e.value?null:e.value.split(" ").map((e=>Number(e)));return{...e,pixelValue:t}}));return p.fromJSON({samples:d})}async function J(e,t,o){const s=r.parseUrl(e),i=t.geometry?[t.geometry]:[];return a.normalizeCentralMeridian(i).then((e=>{const a=t.toJSON(),i=e&&e[0];null!=i&&(a.geometry=JSON.stringify(i.toJSON()));const l=r.encode({...s.query,f:"json",...a}),c=r.asValidOptions(l,o);return n(s.path+"/identify",c)})).then((e=>c.fromJSON(e.data)))}async function h(e,t,n){const a=await j(e,t,[t.fromGeometry,t.toGeometry],n);return l.fromJSON(a)}async function w(e,t,n){const a=await j(e,t,[t.geometry],n);return s.fromJSON(a)}async function C(e,t,n){const a=await j(e,t,[t.geometry],n);return m.fromJSON(a)}async function I(e,t,n){const a=await j(e,t,[t.fromGeometry,t.toGeometry],n);return i.fromJSON(a)}async function j(e,t,o,s){const i=r.parseUrl(e),l=await a.normalizeCentralMeridian(o),c=t.toJSON();null!=l[0]&&(c.fromGeometry=JSON.stringify(U(l[0]))),null!=l[1]&&(c.toGeometry=JSON.stringify(U(l[1])));const u=r.encode({...i.query,f:"json",...c}),m=r.asValidOptions(u,s),{data:p}=await n(i.path+"/measure",m);return p}function U(e){const t=e.toJSON();return e.spatialReference?.imageCoordinateSystem&&(t.spatialReference=v(e.spatialReference)),t}function v(e){const{imageCoordinateSystem:t}=e;if(t){const{id:e,referenceServiceName:n}=t;return null!=e?n?{icsid:e,icsns:n}:{icsid:e}:{ics:t}}return e.toJSON()}function A(e,t){const n=v(e),{icsid:a,icsns:r,wkid:o}=n;return null!=a?null==r||t?.toLowerCase().includes("/"+r.toLowerCase()+"/")?`0:${a}`:JSON.stringify(n):o?o.toString():JSON.stringify(n)}e.computeAngles=y,e.computeHistograms=O,e.computePixelSpaceLocations=S,e.computeStatisticsHistograms=N,e.getImageSpatialReferenceJSON=v,e.getImageSpatialReferenceQueryParameter=A,e.getSamples=R,e.identify=J,e.measureAreaAndPerimeter=w,e.measureDistanceAndAngle=I,e.measureHeight=h,e.measurePointOrCentroid=C,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));