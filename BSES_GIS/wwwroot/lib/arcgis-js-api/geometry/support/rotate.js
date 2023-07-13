/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../geometry","../Polygon","../Polyline","../Point","../Multipoint"],(function(n,e,t,s,i){"use strict";function r(n){let e=0,t=0;const s=n.length;let i,r=n[t];for(t=0;t<s-1;t++)i=n[t+1],e+=(i[0]-r[0])*(i[1]+r[1]),r=i;return e>=0}function o(n,e,t,s){const i=[];for(const r of n){const n=r.slice(0);i.push(n);const o=e*(r[0]-s.x)-t*(r[1]-s.y)+s.x,a=t*(r[0]-s.x)+e*(r[1]-s.y)+s.y;n[0]=o,n[1]=a}return i}function a(n,a,c){const{hasM:x,hasZ:f,spatialReference:l}=n,u=a*Math.PI/180,h=Math.cos(u),y=Math.sin(u);if("xmin"in n&&(c=c??n.center,n=new e({spatialReference:l,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})),"paths"in n){c=c??n.extent.center;const e=[];for(const t of n.paths)e.push(o(t,h,y,c));return new t({hasM:x,hasZ:f,spatialReference:l,paths:e})}if("rings"in n){c=c??n.extent.center;const t=[];for(const e of n.rings){const n=r(e),s=o(e,h,y,c);r(s)!==n&&s.reverse(),t.push(s)}return new e({hasM:x,hasZ:f,spatialReference:l,rings:t})}if("x"in n){c=c??n;const e=new s({x:h*(n.x-c.x)-y*(n.y-c.y)+c.x,y:y*(n.x-c.x)+h*(n.y-c.y)+c.y,spatialReference:l});return null!=n.z&&(e.z=n.z),null!=n.m&&(e.m=n.m),e}return"points"in n?(c=c??n.extent.center,new i({hasM:x,hasZ:f,points:o(n.points,h,y,c),spatialReference:l})):null}return a}));