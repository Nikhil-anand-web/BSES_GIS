/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/earcut","./coordsUtils","./DoubleArray","./Indices","./meshUtils/deduplicate"],(function(e,n,t,o,r,i){"use strict";function l(t){const l=c(t.rings,t.hasZ,e.CounterClockwiseMode.CCW_IS_HOLE),a=new Array;let u=0,h=0;for(const e of l.polygons){const t=e.count,i=e.index,s=o.doubleSubArray(l.position,3*i,3*t),c=e.holeIndices.map((e=>e-i)),g=r.compactIndices(n.earcut(s,c,3));a.push({position:s,faces:g}),u+=s.length,h+=g.length}const g=s(a,u,h),f=Array.isArray(g.position)?i.deduplicate(g.position,3,{originalIndices:g.faces}):i.deduplicate(g.position.buffer,6,{originalIndices:g.faces});return g.position=o.doubleArrayFrom(new Float64Array(f.buffer)),g.faces=f.indices,g}function s(e,n,t){if(1===e.length)return e[0];const i=o.newDoubleArray(n),l=new Array(t);let s=0,c=0,a=0;for(const o of e){for(let e=0;e<o.position.length;e++)i[s++]=o.position[e];for(const e of o.faces)l[c++]=e+a;a=s/3}return{position:i,faces:r.compactIndices(l)}}function c(n,t,r){const i=n.length,l=new Array(i),s=new Array(i),c=new Array(i);let h=0,g=0,f=0,d=0;for(let e=0;e<i;++e)d+=n[e].length;const p=o.newDoubleArray(3*d);let y=0;for(let o=i-1;o>=0;o--){const d=n[o],C=r===e.CounterClockwiseMode.CCW_IS_HOLE&&u(d);if(C&&1!==i)l[h++]=d;else{let e=d.length;for(let t=0;t<h;++t)e+=l[t].length;const n={index:y,pathLengths:new Array(h+1),count:e,holeIndices:new Array(h)};n.pathLengths[0]=d.length,d.length>0&&(c[f++]={index:y,count:d.length}),y=C?a(d,d.length-1,-1,p,y,d.length,t):a(d,0,1,p,y,d.length,t);for(let o=0;o<h;++o){const e=l[o];n.holeIndices[o]=y,n.pathLengths[o+1]=e.length,e.length>0&&(c[f++]={index:y,count:e.length}),y=a(e,0,1,p,y,e.length,t)}h=0,n.count>0&&(s[g++]=n)}}for(let e=0;e<h;++e){const n=l[e];n.length>0&&(c[f++]={index:y,count:n.length}),y=a(n,0,1,p,y,n.length,t)}return s.length=g,c.length=f,{position:p,polygons:s,outlines:c}}function a(e,n,t,o,r,i,l){r*=3;for(let s=0;s<i;++s){const i=e[n];o[r++]=i[0],o[r++]=i[1],o[r++]=l?i[2]:0,n+=t}return r/3}function u(e){return!t.isClockwise(e,!1,!1)}var h;e.CounterClockwiseMode=void 0,(h=e.CounterClockwiseMode||(e.CounterClockwiseMode={}))[h.NONE=0]="NONE",h[h.CCW_IS_HOLE=1]="CCW_IS_HOLE",e.pathsToTriangulationInfo=c,e.triangulate=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
