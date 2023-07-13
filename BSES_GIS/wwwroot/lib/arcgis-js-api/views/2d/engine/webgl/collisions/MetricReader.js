/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers"],(function(t,e){"use strict";const n=6,s=4294967296;let o=function(){function t(t){this._savedCursor=null,this._savedOffset=null,this._head=t,this._cursor=t}t.from=function(e){return new t(i.from(new Float32Array(e)))};var n=t.prototype;return n.computedMinZoom=function(){return this._cursor.computedMinZoom()},n.setComputedMinZoom=function(t){return this._cursor.setComputedMinZoom(t)},n.boundsComputedAnchorX=function(t){return this._cursor.boundsComputedAnchorX(t)},n.boundsComputedAnchorY=function(t){return this._cursor.boundsComputedAnchorY(t)},n.setBoundsComputedAnchorX=function(t,e){return this._cursor.setBoundsComputedAnchorX(t,e)},n.setBoundsComputedAnchorY=function(t,e){return this._cursor.setBoundsComputedAnchorY(t,e)},n.boundsX=function(t){return this._cursor.boundsX(t)},n.boundsY=function(t){return this._cursor.boundsY(t)},n.boundsWidth=function(t){return this._cursor.boundsWidth(t)},n.boundsHeight=function(t){return this._cursor.boundsHeight(t)},n.link=function(t){if(null!=t._head)return this._cursor.link(t._head)},n.getCursor=function(){return this.copy()},n.copy=function(){const e=new t(this._head?.copy());if(!e._head)return e;let n=e._head,s=e._head._link;for(;s;)n._link=s.copy(),n=s,s=n._link;return e},n.peekId=function(){return this._cursor.peekId()??this._cursor._link.peekId()},n.nextId=function(){const t=this.id;for(;t===this.id;)if(!this.next())return!1;return!0},n.save=function(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset},n.restore=function(){this._savedCursor&&(this._cursor=this._savedCursor),null!=this._savedOffset&&(this._cursor._offset=this._savedOffset)},n.next=function(){if(!this._cursor)return!1;if(!this._cursor.next()){if(!this._cursor._link)return!1;this._cursor=this._cursor._link,this._cursor._offset=0}return!0},n.lookup=function(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor},n.delete=function(t){let e=this._head,n=null;for(;e;){if(e.delete(t))return e.isEmpty()&&null!=n&&(n._link=e._link),!0;n=e,e=e._link}return!1},e._createClass(t,[{key:"id",get:function(){return this._cursor.id}},{key:"baseZoom",get:function(){return this._cursor.baseZoom}},{key:"anchorX",get:function(){return this._cursor.anchorX}},{key:"anchorY",get:function(){return this._cursor.anchorY}},{key:"directionX",get:function(){return this._cursor.directionX}},{key:"directionY",get:function(){return this._cursor.directionY}},{key:"size",get:function(){return this._cursor.size}},{key:"materialKey",get:function(){return this._cursor.materialKey}},{key:"boundsCount",get:function(){return this._cursor.boundsCount}}]),t}(),i=function(){function t(t){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=t}t.from=function(e){return new t(new Float32Array(e))};var o=t.prototype;return o.isEmpty=function(){return this._deletedCount===this.count},o.computedMinZoom=function(){return this._buffer[this._offset+8]},o.setComputedMinZoom=function(t){this._buffer[this._offset+8]=t},o.boundsComputedAnchorX=function(t){return this._buffer[this._offset+10+t*n]},o.boundsComputedAnchorY=function(t){return this._buffer[this._offset+10+t*n+1]},o.setBoundsComputedAnchorX=function(t,e){this._buffer[this._offset+10+t*n]=e},o.setBoundsComputedAnchorY=function(t,e){this._buffer[this._offset+10+t*n+1]=e},o.boundsX=function(t){return this._buffer[this._offset+10+t*n+2]},o.boundsY=function(t){return this._buffer[this._offset+10+t*n+3]},o.boundsWidth=function(t){return this._buffer[this._offset+10+t*n+4]},o.boundsHeight=function(t){return this._buffer[this._offset+10+t*n+5]},o.link=function(t){let e=this;for(;e._link;)e=e._link;e._link=t},o.getCursor=function(){return this.copy()},o.copy=function(){const e=new t(this._buffer);return e._link=this._link,e._offset=this._offset,e._deletedCount=this._deletedCount,e._offsets=this._offsets,e._count=this._count,e},o.peekId=function(){const t=this._offset+10+this.boundsCount*n+0;return t>=this._buffer.length?0:this._buffer[t]},o.next=function(){let t=0;for(;this._offset<this._buffer.length&&t++<100&&(-1===this._offset?this._offset=0:this._offset+=10+this.boundsCount*n,this.id===s););return this.id!==s&&this._offset<this._buffer.length},o.delete=function(t){const e=this._offset,n=this.lookup(t);if(n)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===t;)this.id=4294967295,++this._deletedCount;return this._offset=e,n},o.lookup=function(t){const e=this._offset;if(null==this._offsets.instance){this._offsets.instance=new Map;const t=this.copy();t._offset=-1;let e=0;for(;t.next();)t.id!==e&&(this._offsets.instance.set(t.id,t._offset),e=t.id)}return!!this._offsets.instance.has(t)&&(this._offset=this._offsets.instance.get(t),this.id!==s||(this._offset=e,!1))},o._computeCount=function(){const t=this._offset;let e=0;for(this._offset=-1;this.next();)e++;return this._offset=t,e},e._createClass(t,[{key:"count",get:function(){return this._count||(this._count=this._computeCount()),this._count}},{key:"id",get:function(){return this._buffer[this._offset]},set:function(t){this._buffer[this._offset]=t}},{key:"baseZoom",get:function(){return this._buffer[this._offset+1]}},{key:"anchorX",get:function(){return this._buffer[this._offset+2]}},{key:"anchorY",get:function(){return this._buffer[this._offset+3]}},{key:"directionX",get:function(){return this._buffer[this._offset+4]}},{key:"directionY",get:function(){return this._buffer[this._offset+5]}},{key:"size",get:function(){return this._buffer[this._offset+6]}},{key:"materialKey",get:function(){return this._buffer[this._offset+7]}},{key:"boundsCount",get:function(){return this._buffer[this._offset+9]}}]),t}();t.MetricReader=o,t.MetricReaderNode=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
