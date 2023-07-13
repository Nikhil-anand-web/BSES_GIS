/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/vec2f32"],(function(t,i){"use strict";return function(){function e(t,e,h,n){this.center=i.fromValues(t,e),this.centerT=i.create(),this.halfWidth=h/2,this.halfHeight=n/2,this.width=h,this.height=n}var h=e.prototype;return h.clone=function(){return new e(this.x,this.y,this.width,this.height)},h.serialize=function(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t},h.findCollisionDelta=function(t,i=4){const e=Math.abs(t.centerT[0]-this.centerT[0]),h=Math.abs(t.centerT[1]-this.centerT[1]),n=(t.halfWidth+this.halfWidth+i)/e,s=(t.halfHeight+this.halfHeight+i)/h,r=Math.min(n,s);return Math.log2(r)},h.extend=function(t){const i=Math.min(this.xmin,t.xmin),e=Math.min(this.ymin,t.ymin),h=Math.max(this.xmax,t.xmax)-i,n=Math.max(this.ymax,t.ymax)-e,s=i+h/2,r=e+n/2;this.width=h,this.height=n,this.halfWidth=h/2,this.halfHeight=n/2,this.x=s,this.y=r},e.deserialize=function(t){return new e(t.readF32(),t.readF32(),t.readInt32(),t.readInt32())},t._createClass(e,[{key:"x",get:function(){return this.center[0]},set:function(t){this.center[0]=t}},{key:"y",get:function(){return this.center[1]},set:function(t){this.center[1]=t}},{key:"blX",get:function(){return this.center[0]+this.halfWidth}},{key:"blY",get:function(){return this.center[1]+this.halfHeight}},{key:"trX",get:function(){return this.center[0]-this.halfWidth}},{key:"trY",get:function(){return this.center[1]-this.halfHeight}},{key:"xmin",get:function(){return this.x-this.halfWidth}},{key:"xmax",get:function(){return this.x+this.halfWidth}},{key:"ymin",get:function(){return this.y-this.halfHeight}},{key:"ymax",get:function(){return this.y+this.halfHeight}}]),e}()}));
