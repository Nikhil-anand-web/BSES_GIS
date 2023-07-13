/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../geometry/support/spatialReferenceUtils","./TileKey"],(function(t,o,r){"use strict";function i(t,o){return[t,o]}function n(t,o,r){return t[0]=o,t[1]=r,t}function e(t,o,r,i,n){return t[0]=o,t[1]=r,t[2]=i,t[3]=n,t}const s=new r("0/0/0/0");return function(){function r(t,o,r,i,n,e,s,l,u,h,a,c){this.level=t,this.resolution=o,this.scale=r,this.origin=i,this.first=n,this.last=e,this.size=s,this.norm=l,this.worldStart=u,this.worldEnd=h,this.worldSize=a,this.wrap=c}r.create=function(t,e,s=null){const l=o.getInfo(t.spatialReference),u=e.origin||i(t.origin.x,t.origin.y),h=i(t.size[0]*e.resolution,t.size[1]*e.resolution),a=i(-1/0,-1/0),c=i(1/0,1/0),f=i(1/0,1/0);null!=s&&(n(a,Math.max(0,Math.floor((s.xmin-u[0])/h[0])),Math.max(0,Math.floor((u[1]-s.ymax)/h[1]))),n(c,Math.max(0,Math.floor((s.xmax-u[0])/h[0])),Math.max(0,Math.floor((u[1]-s.ymin)/h[1]))),n(f,c[0]-a[0]+1,c[1]-a[1]+1));const{cols:g,rows:m}=e;let w,d,F,z;return!s&&g&&m&&(n(a,g[0],m[0]),n(c,g[1],m[1]),n(f,g[1]-g[0]+1,m[1]-m[0]+1)),t.isWrappable?(w=i(Math.ceil(Math.round((l.valid[1]-l.valid[0])/e.resolution)/t.size[0]),f[1]),d=i(Math.floor((l.origin[0]-u[0])/h[0]),a[1]),F=i(w[0]+d[0]-1,c[1]),z=!0):(d=a,F=c,w=f,z=!1),new r(e.level,e.resolution,e.scale,u,a,c,f,h,d,F,w,z)};var l=r.prototype;return l.normalizeCol=function(t){if(!this.wrap)return t;const o=this.worldSize[0];return t<0?o-1-Math.abs((t+1)%o):t%o},l.denormalizeCol=function(t,o){return this.wrap?this.worldSize[0]*o+t:t},l.getWorldForColumn=function(t){return this.wrap?Math.floor(t/this.worldSize[0]):0},l.getFirstColumnForWorld=function(t){return t*this.worldSize[0]+this.first[0]},l.getLastColumnForWorld=function(t){return t*this.worldSize[0]+this.first[0]+this.size[0]-1},l.getColumnForX=function(t){return(t-this.origin[0])/this.norm[0]},l.getXForColumn=function(t){return this.origin[0]+t*this.norm[0]},l.getRowForY=function(t){return(this.origin[1]-t)/this.norm[1]},l.getYForRow=function(t){return this.origin[1]-t*this.norm[1]},l.getTileBounds=function(t,o,r=!1){s.set(o);const i=r?s.col:this.denormalizeCol(s.col,s.world),n=s.row;return e(t,this.getXForColumn(i),this.getYForRow(n+1),this.getXForColumn(i+1),this.getYForRow(n)),t},l.getTileCoords=function(t,o,r=!1){s.set(o);const i=r?s.col:this.denormalizeCol(s.col,s.world);return Array.isArray(t)?n(t,this.getXForColumn(i),this.getYForRow(s.row)):(t.x=this.getXForColumn(i),t.y=this.getYForRow(s.row)),t},t._createClass(r)}()}));
