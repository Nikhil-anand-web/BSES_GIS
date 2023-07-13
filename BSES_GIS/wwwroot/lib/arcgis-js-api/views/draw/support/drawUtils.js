/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../core/mathUtils","../../../geometry/support/aaBoundingRect","../../../geometry/support/boundsUtils","../../../geometry/support/coordsUtils"],(function(t,n,e,o,i){"use strict";function r(t,n,e,o){if(null==o||t.hasZ||(o=void 0),"point"===t.type)return t.x+=n,t.y+=e,t.hasZ&&null!=o&&(t.z+=o),t;if("multipoint"===t.type){const i=t.points;for(let t=0;t<i.length;t++)i[t]=x(i[t],n,e,o);return t}if("extent"===t.type)return t.xmin+=n,t.xmax+=n,t.ymin+=e,t.ymax+=e,null!=o&&(t.zmin??(t.zmin=0),t.zmin+=o,t.zmax??(t.zmax=0),t.zmax+=o),t;const r=i.geometryToCoordinates(t),s="polyline"===t.type?t.paths:t.rings;for(let i=0;i<r.length;i++){const t=r[i];for(let i=0;i<t.length;i++)t[i]=x(t[i],n,e,o)}return"paths"in t?t.paths=s:t.rings=s,t}function s(t,n,e,o,s){const a=t.clone(),m=o.resolution;if("point"===a.type){if(s)r(a,n*m,-e*m);else{const t=o.state.transform,i=o.state.inverseTransform,r=t[0]*a.x+t[2]*a.y+t[4],s=t[1]*a.x+t[3]*a.y+t[5];a.x=i[0]*(r+n)+i[2]*(s+e)+i[4],a.y=i[1]*(r+n)+i[3]*(s+e)+i[5]}return a}if("multipoint"===a.type){if(s)r(a,n*m,-e*m);else{const t=a.points,i=o.state.transform,r=o.state.inverseTransform;for(let o=0;o<t.length;o++){const s=t[o],a=i[0]*s[0]+i[2]*s[1]+i[4],m=i[1]*s[0]+i[3]*s[1]+i[5],l=r[0]*(a+n)+r[2]*(m+e)+r[4],x=r[1]*(a+n)+r[3]*(m+e)+r[5];t[o]=y(s,l,x,void 0)}}return a}if("extent"===a.type){if(s)r(a,n*m,-e*m);else{const t=o.state.transform,i=o.state.inverseTransform,r=t[0]*a.xmin+t[2]*a.ymin+t[4],s=t[1]*a.xmin+t[3]*a.ymin+t[5],m=t[0]*a.xmax+t[2]*a.ymax+t[4],l=t[1]*a.xmax+t[3]*a.ymax+t[5];a.xmin=i[0]*(r+n)+i[2]*(s+e)+i[4],a.ymin=i[1]*(r+n)+i[3]*(s+e)+i[5],a.xmax=i[0]*(m+n)+i[2]*(l+e)+i[4],a.ymax=i[1]*(m+n)+i[3]*(l+e)+i[5]}return a}if(s)r(a,n*m,-e*m);else{const t=i.geometryToCoordinates(a),r="polyline"===a.type?a.paths:a.rings,s=o.state.transform,m=o.state.inverseTransform;for(let o=0;o<t.length;o++){const i=t[o];for(let t=0;t<i.length;t++){const o=i[t],r=s[0]*o[0]+s[2]*o[1]+s[4],a=s[1]*o[0]+s[3]*o[1]+s[5],l=m[0]*(r+n)+m[2]*(a+e)+m[4],x=m[1]*(r+n)+m[3]*(a+e)+m[5];i[t]=y(o,l,x,void 0)}}"paths"in a?a.paths=r:a.rings=r}return a}function a(t,n,r,s){if("point"===t.type){const{x:e,y:o}=t,i=s?s[0]:e,a=s?s[1]:o,m=t.clone(),l=(e-i)*n+i,x=(o-a)*r+a;return m.x=l,m.y=x,m}if("multipoint"===t.type){const a=i.geometryToCoordinates(t),m=e.create(),[l,x,c,u]=o.getRingsOrPathsBounds(m,[a]),p=s?s[0]:(l+c)/2,f=s?s[1]:(u+x)/2,g=t.clone(),h=g.points;for(let t=0;t<h.length;t++){const e=h[t],[o,i]=e,s=(o-p)*n+p,a=(i-f)*r+f;h[t]=y(e,s,a,void 0)}return g}if("extent"===t.type){const{xmin:e,xmax:o,ymin:i,ymax:a}=t,m=s?s[0]:(e+o)/2,l=s?s[1]:(a+i)/2,x=t.clone();if(x.xmin=(e-m)*n+m,x.ymax=(a-l)*r+l,x.xmax=(o-m)*n+m,x.ymin=(i-l)*r+l,x.xmin>x.xmax){const t=x.xmin,n=x.xmax;x.xmin=n,x.xmax=t}if(x.ymin>x.ymax){const t=x.ymin,n=x.ymax;x.ymin=n,x.ymax=t}return x}const a=i.geometryToCoordinates(t),m=e.create(),[l,x,c,u]=o.getRingsOrPathsBounds(m,a),p=s?s[0]:(l+c)/2,f=s?s[1]:(u+x)/2,g=t.clone(),h="polyline"===g.type?g.paths:g.rings;for(let e=0;e<a.length;e++){const t=a[e];for(let o=0;o<t.length;o++){const i=t[o],[s,a]=i,m=(s-p)*n+p,l=(a-f)*r+f;h[e][o]=y(i,m,l,void 0)}}return"paths"in g?g.paths=h:g.rings=h,g}function m(t,n,e,o,i,r){const s=Math.sqrt((e-t)*(e-t)+(o-n)*(o-n));return Math.sqrt((i-t)*(i-t)+(r-n)*(r-n))/s}function l(t,e,o,i=!1){const r=Math.atan2(e.y-o.y,e.x-o.x)-Math.atan2(t.y-o.y,t.x-o.x),s=Math.atan2(Math.sin(r),Math.cos(r));return i?s:n.rad2deg(s)}function x(t,n,e,o){return y(t,t[0]+n,t[1]+e,null!=t[2]&&null!=o?t[2]+o:void 0)}function y(t,n,e,o){const i=[n,e];return t.length>2&&i.push(null!=o?o:t[2]),t.length>3&&i.push(t[3]),i}t.cloneMove=s,t.getRotationAngle=l,t.getScaleRatio=m,t.move=r,t.scale=a,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));