/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../geometry","./EphemeralBlockCache","../rasterFunctions/rasterProjectionHelper","../../../geometry/Point"],(function(e,t,n,l,o){"use strict";const r=new Map,c=new n;function i(e,t){return null==t?e:`${e}?sliceId=${t}`}function u(e,t){const n={extent:null,rasterInfo:t,cache:new Map},l=r.get(e);return l?(l.push(n),l.length-1):(r.set(e,[n]),0)}function a(e,t){const n=r.get(e);n&&(n[t]=null,n.some((e=>null!=e))||r.delete(e))}function s(e){r.delete(e)}function f(e,t,n){const l=r.get(e);if(!l)return null==t?c.decreaseRefCount(e,n):0;if(null==t||null==l[t])return c.decreaseRefCount(e,n);const o=l[t]?.cache,i=o?.get(n);if(o&&i){if(i.refCount--,0===i.refCount){o.delete(n);for(let e=0;e<l.length;e++)l[e]?.cache.delete(n);i.controller&&i.controller.abort()}return i.refCount}return 0}function m(e,t,n){const l=r.get(e);if(!l)return null==t?c.getBlock(e,n):null;if(null==t||null==l[t]){for(let e=0;e<l.length;e++){const t=l[e]?.cache.get(n);if(t)return t.refCount++,t.block}return c.getBlock(e,n)}const o=l[t]?.cache.get(n);if(o)return o.refCount++,o.block;for(let r=0;r<l.length;r++){if(r===t||!l[r])continue;const e=l[r]?.cache,o=e?.get(n);if(e&&o)return o.refCount++,e.set(n,o),o.block}return null}function x(e,t,n,l,o=null){const i=r.get(e);if(!i)return void(null==t&&c.putBlock(e,n,l,o));if(null==t||null==i[t])return void c.putBlock(e,n,l,o);const u={refCount:1,block:l,isResolved:!1,isRejected:!1,controller:o};l.then((()=>u.isResolved=!0)).catch((()=>u.isRejected=!0)),i[t]?.cache.set(n,u)}function d(e,t,n){const l=r.get(e);l?null!=t&&null!=l[t]?l[t]?.cache.delete(n):c.deleteBlock(e,n):null==t&&c.deleteBlock(e,n)}function h(e,t){const n=r.get(e);return n?n[t]??null:null}function g(e,t,n,r,c,i,u=null){const a=h(e,t);if(!a)return;const s=a.extent,{cache:f,rasterInfo:m}=a;if(s&&s.xmin===n.xmin&&s.xmax===n.xmax&&s.ymin===n.ymin&&s.ymax===n.ymax)return;r=r??0;const x=n.clone().normalize(),{spatialReference:d,transform:g}=m,y=new Set;for(let h=0;h<x.length;h++){const e=x[h];if(e.xmax-e.xmin<=r||e.ymax-e.ymin<=r)continue;let t=l.projectExtent(e,d,u);null!=g&&(t=g.inverseTransform(t));const n=new o({x:r,y:r,spatialReference:e.spatialReference});if(null==c&&!(c=l.projectResolution(n,d,e,u)))return;const{pyramidLevel:a,pyramidResolution:s,excessiveReading:f}=l.snapPyramid(c,m,i||"closest");if(f)return;const{storageInfo:p}=m,{origin:k}=p,R={x:Math.max(0,Math.floor((t.xmin-k.x)/s.x)),y:Math.max(0,Math.floor((k.y-t.ymax)/s.y))},M=Math.ceil((t.xmax-t.xmin)/s.x-.1),B=Math.ceil((t.ymax-t.ymin)/s.y-.1),C=a>0?p.pyramidBlockWidth:p.blockWidth,b=a>0?p.pyramidBlockHeight:p.blockHeight,v=1,j=Math.max(0,Math.floor(R.x/C)-v),w=Math.max(0,Math.floor(R.y/b)-v),I=Math.floor((R.x+M-1)/C)+v,$=Math.floor((R.y+B-1)/b)+v;for(let l=w;l<=$;l++)for(let e=j;e<=I;e++)y.add(`${a}/${l}/${e}`)}f.forEach(((e,t)=>{if(!y.has(t)){const e=f.get(t);(null==e||e.isResolved||e.isRejected)&&f.delete(t)}})),a.extent={xmin:n.xmin,ymin:n.ymin,xmax:n.xmax,ymax:n.ymax}}e.decreaseRefCount=f,e.deleteBlock=d,e.deleteRaster=s,e.getBlock=m,e.getRasterId=i,e.putBlock=x,e.register=u,e.unregister=a,e.update=g,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));