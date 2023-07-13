/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../core/floatRGBA","../../core/mathUtils"],(function(o,t,e){"use strict";const a=o=>"vertical"===o||"horizontal"===o||"cross"===o||"esriSFSCross"===o||"esriSFSVertical"===o||"esriSFSHorizontal"===o;function r(o,t,r){const i=e.nextPowerOfTwo(Math.ceil(r)),n=a(t)?8*i:16*i,s=2*i;o.width=n,o.height=n;const l=o.getContext("2d");l.strokeStyle="#FFFFFF",l.lineWidth=i,l.beginPath(),"vertical"!==t&&"cross"!==t&&"esriSFSCross"!==t&&"esriSFSVertical"!==t||(l.moveTo(n/2,-s),l.lineTo(n/2,n+s)),"horizontal"!==t&&"cross"!==t&&"esriSFSCross"!==t&&"esriSFSHorizontal"!==t||(l.moveTo(-s,n/2),l.lineTo(n+s,n/2)),"forward-diagonal"!==t&&"diagonal-cross"!==t&&"esriSFSDiagonalCross"!==t&&"esriSFSForwardDiagonal"!==t||(l.moveTo(-s,-s),l.lineTo(n+s,n+s),l.moveTo(n-s,-s),l.lineTo(n+s,s),l.moveTo(-s,n-s),l.lineTo(s,n+s)),"backward-diagonal"!==t&&"diagonal-cross"!==t&&"esriSFSBackwardDiagonal"!==t&&"esriSFSDiagonalCross"!==t||(l.moveTo(n+s,-s),l.lineTo(-s,n+s),l.moveTo(s,-s),l.lineTo(-s,s),l.moveTo(n+s,n-s),l.lineTo(n-s,n+s)),l.stroke();const c=l.getImageData(0,0,o.width,o.height),h=new Uint8Array(c.data);let S;for(let e=0;e<h.length;e+=4)S=h[e+3]/255,h[e]=h[e]*S,h[e+1]=h[e+1]*S,h[e+2]=h[e+2]*S;return[h,o.width,o.height]}function i(o,e){const a="Butt"===e,r="Square"===e,i=!a&&!r;o.length%2==1&&(o=[...o,...o]);const n=15.5,s=2*n;let l=0;for(const t of o)l+=t;const c=Math.round(l*n),h=new Float32Array(c*s),S=.5*n;let m=0,F=0,g=.5,d=!0;for(const t of o){for(m=F,F+=t*n;g<=F;){let o=.5;for(;o<s;){const t=(o-.5)*c+g-.5,e=i?(o-n)*(o-n):Math.abs(o-n);h[t]=d?a?Math.max(Math.max(m+S-g,e),Math.max(g-F+S,e)):e:i?Math.min((g-m)*(g-m)+e,(g-F)*(g-F)+e):r?Math.min(Math.max(g-m,e),Math.max(F-g,e)):Math.min(Math.max(g-m+S,e),Math.max(F+S-g,e)),o++}g++}d=!d}const T=h.length,f=new Uint8Array(4*T);for(let M=0;M<T;++M){const o=(i?Math.sqrt(h[M]):h[M])/n;t.packFloatRGBA(o,f,4*M)}return[f,c,s]}o.rasterizeDash=i,o.rasterizeSimpleFill=r,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));
