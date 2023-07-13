/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../enums","./BaseBucket","../../webgl/TurboLine"],(function(e,t,i,n){"use strict";const r=65535;let s=function(i){function s(e,r,s,o,u){var f;return(f=i.call(this,e,r,s)||this).type=t.BucketType.LINE,f._tessellationOptions={pixelCoordRatio:8,halfWidth:0,offset:0},f._patternMap=new Map,f.tessellationProperties={_lineVertexBuffer:null,_lineIndexBuffer:null,_ddValues:null},f.tessellationProperties._lineVertexBuffer=o,f.tessellationProperties._lineIndexBuffer=u,f._lineTessellator=new n.LineTessellation(l(f.tessellationProperties),a(f.tessellationProperties),e.canUseThinTessellation),f}e._inherits(s,i);var o=s.prototype;return o.getResources=function(e,t,i){const n=this.layer,r=this.zoom,s=n.getPaintProperty("line-pattern"),l=n.getPaintProperty("line-dasharray"),a=n.getLayoutProperty("line-cap");if(!s&&!l)return;const o=a?.getValue(r)||0,u=a?.isDataDriven,f=s?.isDataDriven,h=l?.isDataDriven;if(f||h)for(const p of this._features)t(f?s.getValue(r,p):this._getDashArrayKey(p,r,n,l,u,a,o));else if(s)t(s.getValue(r));else if(l){const e=l.getValue(r);t(n.getDashKey(e,o))}},o.processFeatures=function(e){this._lineIndexStart=3*this.tessellationProperties._lineIndexBuffer.index,this._lineIndexCount=0;const t=this.layer,i=this.zoom,n=this._features,r=this._tessellationOptions,{hasDataDrivenLine:s,lineMaterial:l}=t;e&&e.setExtent(this.layerExtent);const a=t.getPaintProperty("line-pattern"),o=t.getPaintProperty("line-dasharray"),u=a?.isDataDriven,f=o?.isDataDriven;let h;h=t.getLayoutProperty("line-cap");const p=h?.isDataDriven?h:null,c=p?null:t.getLayoutValue("line-cap",i),g=c||0,y=!!p;h=t.getLayoutProperty("line-join");const d=h?.isDataDriven?h:null,_=d?null:t.getLayoutValue("line-join",i);h=t.getLayoutProperty("line-miter-limit");const x=h?.isDataDriven?h:null,V=x?null:t.getLayoutValue("line-miter-limit",i);h=t.getLayoutProperty("line-round-limit");const P=h?.isDataDriven?h:null,D=P?null:t.getLayoutValue("line-round-limit",i);h=t.getPaintProperty("line-width");const m=h?.isDataDriven?h:null,I=m?null:t.getPaintValue("line-width",i);h=t.getPaintProperty("line-offset");const L=h?.isDataDriven?h:null,B=L?null:t.getPaintValue("line-offset",i);if(u||f){const s=[];for(const r of n){const n=u?a.getValue(i,r):this._getDashArrayKey(r,i,t,o,y,p,g),f=this._spriteInfo[n];if(!f||!f.rect)continue;const h=l.encodeAttributes(r,i,t,f),v=r.getGeometry(e);s.push({ddAttributes:h,page:f.page,cap:p?p.getValue(i,r):c,join:d?d.getValue(i,r):_,miterLimit:x?x.getValue(i,r):V,roundLimit:P?P.getValue(i,r):D,halfWidth:.5*(m?m.getValue(i,r):I),offset:L?L.getValue(i,r):B,geometry:v})}s.sort(((e,t)=>e.page-t.page)),r.textured=!0;for(const{ddAttributes:e,page:t,cap:i,join:n,miterLimit:l,roundLimit:a,halfWidth:o,offset:u,geometry:f}of s)r.capType=i,r.joinType=n,r.miterLimit=l,r.roundLimit=a,r.halfWidth=o,r.offset=u,this._processFeature(f,e,t)}else{if(a){const e=a.getValue(i),t=this._spriteInfo[e];if(!t||!t.rect)return}r.textured=!(!a&&!o),r.capType=c,r.joinType=_,r.miterLimit=V,r.roundLimit=D,r.halfWidth=.5*I,r.offset=B;for(const a of n){const n=s?l.encodeAttributes(a,i,t):null;p&&(r.capType=p.getValue(i,a)),d&&(r.joinType=d.getValue(i,a)),x&&(r.miterLimit=x.getValue(i,a)),P&&(r.roundLimit=P.getValue(i,a)),m&&(r.halfWidth=.5*m.getValue(i,a)),L&&(r.offset=L.getValue(i,a));const o=a.getGeometry(e);this._processFeature(o,n)}}},o.serialize=function(){let e=6;e+=this.layerUIDs.length,e+=this.tessellationProperties._lineVertexBuffer.array.length,e+=this.tessellationProperties._lineIndexBuffer.array.length,e+=3*this._patternMap.size+1;const t=new Uint32Array(e),i=new Int32Array(t.buffer);let n=0;t[n++]=this.type,t[n++]=this.layerUIDs.length;for(let l=0;l<this.layerUIDs.length;l++)t[n++]=this.layerUIDs[l];t[n++]=this._lineIndexStart,t[n++]=this._lineIndexCount;const r=this._patternMap,s=r.size;if(t[n++]=s,s>0)for(const[l,[a,o]]of r)t[n++]=l,t[n++]=a,t[n++]=o;t[n++]=this.tessellationProperties._lineVertexBuffer.array.length;for(let l=0;l<this.tessellationProperties._lineVertexBuffer.array.length;l++)i[n++]=this.tessellationProperties._lineVertexBuffer.array[l];t[n++]=this.tessellationProperties._lineIndexBuffer.array.length;for(let l=0;l<this.tessellationProperties._lineIndexBuffer.array.length;l++)t[n++]=this.tessellationProperties._lineIndexBuffer.array[l];return t.buffer},o._processFeature=function(e,t,i){if(!e)return;const n=e.length;for(let r=0;r<n;r++)this._processGeometry(e[r],t,i)},o._processGeometry=function(e,t,i){if(e.length<2)return;const n=.001;let s,l,a=e[0],o=1;for(;o<e.length;)s=e[o].x-a.x,l=e[o].y-a.y,s*s+l*l<n*n?e.splice(o,1):(a=e[o],++o);if(e.length<2)return;const u=this.tessellationProperties._lineIndexBuffer,f=3*u.index;this._tessellationOptions.initialDistance=0,this._tessellationOptions.wrapDistance=r,this.tessellationProperties._ddValues=t,this._lineTessellator.tessellate(e,this._tessellationOptions);const h=3*u.index-f;if(void 0!==i){const e=this._patternMap,t=e.get(i);t?t[1]+=h:e.set(i,[f+this._lineIndexCount,h])}this._lineIndexCount+=h},o._getDashArrayKey=function(e,t,i,n,r,s,l){const a=r?s.getValue(t,e):l,o=n.getValue(t,e);return i.getDashKey(o,a)},e._createClass(s,[{key:"lineIndexStart",get:function(){return this._lineIndexStart}},{key:"lineIndexCount",get:function(){return this._lineIndexCount}}]),s}(i);const l=e=>(t,i,n,r,s,l,a,o,u,f,h)=>(e._lineVertexBuffer.add(t,i,a,o,n,r,s,l,u,f,h,e._ddValues),e._lineVertexBuffer.index-1),a=e=>(t,i,n)=>{e._lineIndexBuffer.add(t,i,n)};return s}));