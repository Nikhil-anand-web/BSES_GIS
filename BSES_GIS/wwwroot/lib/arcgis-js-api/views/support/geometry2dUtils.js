/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../core/mathUtils","../../chunks/vec2","../../chunks/vec2f64"],(function(t,e,n,r){"use strict";function c(t,e){return t[0]*e[1]-t[1]*e[0]}function s(t,e,r){const c=(e[0]-t[0])*(r[1]-t[1])-(e[1]-t[1])*(r[0]-t[0]);return Math.abs(c)/n.distance(e,r)}function o(t,e,r){const c=n.dot(r,e)/n.squaredLength(r);return n.scale(t,r,c)}function a(t,e,r,c,s=r){return n.subtract(y,c,r),n.subtract(h,e,s),o(T,h,y),n.add(t,s,T)}function i(t,e,r,c){n.subtract(y,c,r),n.subtract(h,e,r);const s=n.dot(y,h)/n.squaredLength(y);return s>0?n.scaleAndAdd(t,r,y,s):n.copy(t,r)}function u(t,e,r,c){n.subtract(y,e,r);const s=c/n.length(y);return n.scaleAndAdd(t,r,y,s)}function d(t,n){return a(h,n,t.start,t.end),e.floatEqualAbsolute(h[0],n[0])&&e.floatEqualAbsolute(h[1],n[1])?[r.clone(n)]:[]}function l(t,n,c){return u(h,c,t,n),e.floatEqualAbsolute(h[0],c[0])&&e.floatEqualAbsolute(h[1],c[1])?[r.clone(c)]:[]}function L(e,r){const s=e.start,o=e.end,a=r.start,i=r.end,u=n.subtract(y,o,s),d=n.subtract(b,i,a),l=c(u,d);if(Math.abs(l)<=A)return[];const L=n.subtract(h,s,a),p=c(d,L)/l,f=c(u,L)/l;if(p>=0){if(f>=0||r.type===t.LineType.LINE)return[n.scaleAndAdd(T,s,u,p)]}else if(e.type===t.LineType.LINE&&(f>=0||r.type===t.LineType.LINE))return[n.scaleAndAdd(T,s,u,p)];return[]}function p(e,r,c){const s=[],o=n.subtract(y,e.end,e.start),a=n.subtract(b,e.start,r),i=n.squaredLength(o),u=2*n.dot(o,a),d=u*u-4*i*(n.squaredLength(a)-c*c);if(0===d){const r=-u/(2*i);(e.type===t.LineType.LINE||r>=0)&&s.push(n.scaleAndAdd(T,e.start,o,r))}else if(d>0){const r=Math.sqrt(d),c=(-u+r)/(2*i);(e.type===t.LineType.LINE||c>=0)&&s.push(n.scaleAndAdd(T,e.start,o,c));const a=(-u-r)/(2*i);(e.type===t.LineType.LINE||a>=0)&&s.push(n.scaleAndAdd(h,e.start,o,a))}return s}var f;t.LineType=void 0,(f=t.LineType||(t.LineType={}))[f.RAY=0]="RAY",f[f.LINE=1]="LINE";const A=1e-6,y=r.create(),b=r.create(),h=r.create(),T=r.create();t.cross=c,t.intersectCircleAndPoint=l,t.intersectLineAndPoint=d,t.intersectLineAndRay=L,t.intersectLineLikeAndCircle=p,t.pointToLineDistance=s,t.projectPoint=o,t.projectPointToCircle=u,t.projectPointToLine=a,t.projectPointToRay=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));