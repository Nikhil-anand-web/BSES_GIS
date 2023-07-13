/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","./PooledArray"],(function(t,e,i){"use strict";const s=-3;var n;t.RemoveMode=void 0,(n=t.RemoveMode||(t.RemoveMode={}))[n.ALL=0]="ALL",n[n.SOME=1]="SOME";let r=function(){function t(t,e,i){this.name=t,this._storage=e,this.id=h+++":",this.size=0,this.maxSize=0,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),i&&(this._storage.registerRemoveFunc(this.id,i),this._removeFunc=!0)}var i=t.prototype;return i.destroy=function(){this._storage.clear(this),this._removeFunc&&this._storage.deregisterRemoveFunc(this.id),this._storage.deregister(this),this._storage=null},i.resetHitRate=function(){this._hit=this._miss=0},i.put=function(t,e,i,s=0){this._storage.put(this,t,e,i,s)},i.get=function(t){const e=this._storage.get(this,t);return void 0===e?++this._miss:++this._hit,e},i.pop=function(t){const e=this._storage.pop(this,t);return void 0===e?++this._miss:++this._hit,e},i.updateSize=function(t,e,i){this._storage.updateSize(this,t,e,i)},i.clear=function(){this._storage.clear(this)},i.clearAll=function(){this._storage.clearAll()},i.resetStats=function(){this._storage.resetStats()},e._createClass(t,[{key:"hitRate",get:function(){return this._hit/(this._hit+this._miss)}},{key:"sizeAll",get:function(){return this._storage.size}},{key:"performanceInfo",get:function(){return this._storage.performanceInfo}}]),t}(),o=function(){function n(t=10485760){this._maxSize=t,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new i,this._users=new i}var r=n.prototype;return r.destroy=function(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null},r.register=function(t){this._users.push(t)},r.deregister=function(t){this._users.removeUnordered(t)},r.registerRemoveFunc=function(t,e){this._removeFuncs.push([t,e])},r.deregisterRemoveFunc=function(t){this._removeFuncs.filterInPlace((e=>e[0]!==t))},r.put=function(e,i,n,r,o){i=e.id+i;const h=this._db.get(i);if(h&&(this._size-=h.size,e.size-=h.size,this._db.delete(i),h.entry!==n&&this._notifyRemove(i,h.entry,t.RemoveMode.ALL)),r>this._maxSize)return void this._notifyRemove(i,n,t.RemoveMode.ALL);if(void 0===n)return void console.warn("Refusing to cache undefined entry ");if(!r||r<0)return void console.warn("Refusing to cache entry with invalid size "+r);const _=1+Math.max(o,s)-s;this._db.set(i,{entry:n,size:r,lifetime:_,lives:_}),this._size+=r,e.size+=r,this._checkSizeLimits()},r.updateSize=function(e,i,s,n){i=e.id+i;const r=this._db.get(i);if(r&&r.entry===s){for(this._size-=r.size,e.size-=r.size;n>this._maxSize;){const e=this._notifyRemove(i,s,t.RemoveMode.SOME);if(!(null!=e&&e>0))return void this._db.delete(i);n=e}r.size=n,this._size+=n,e.size+=n,this._checkSizeLimits()}},r.pop=function(t,e){e=t.id+e;const i=this._db.get(e);if(i)return this._size-=i.size,t.size-=i.size,this._db.delete(e),++this._hit,i.entry;++this._miss},r.get=function(t,e){e=t.id+e;const i=this._db.get(e);if(void 0!==i)return this._db.delete(e),i.lives=i.lifetime,this._db.set(e,i),++this._hit,i.entry;++this._miss},r.resetStats=function(){this._hit=this._miss=0,this._users.forAll((t=>t.resetHitRate()))},r.clear=function(e){const i=e.id;this._db.forEach(((e,s)=>{s.startsWith(i)&&(this._size-=e.size,this._db.delete(s),this._notifyRemove(s,e.entry,t.RemoveMode.ALL))})),e.size=0},r.clearAll=function(){this._db.forEach(((e,i)=>this._notifyRemove(i,e.entry,t.RemoveMode.ALL))),this._users.forEach((t=>t.size=0)),this._size=0,this._db.clear()},r._getHitRate=function(){return this._hit/(this._hit+this._miss)},r._notifyRemove=function(t,e,i){let s;return this._removeFuncs.some((n=>{if(t.startsWith(n[0])){const t=n[1](e,i);return"number"==typeof t&&(s=t),!0}return!1})),s},r._checkSizeLimits=function(){if(this._size>this._maxSize)for(const[t,e]of this._db)if(this._purgeItem(t,e),this._size<=.9*this.maxSize)return;this._users.forEach((t=>{if(t.maxSize>0&&t.size>t.maxSize)for(const[e,i]of this._db)if(e.startsWith(t.id)&&(this._purgeItem(e,i,t),t.size<=.9*t.maxSize))return}))},r._purgeItem=function(e,i,s=this._users.find((t=>e.startsWith(t.id)))){if(this._db.delete(e),i.lives<=1){this._size-=i.size,s&&(s.size-=i.size);const n=this._notifyRemove(e,i.entry,t.RemoveMode.SOME);null!=n&&n>0&&(this._size+=n,s&&(s.size+=n),i.lives=i.lifetime,i.size=n,this._db.set(e,i))}else--i.lives,this._db.set(e,i)},e._createClass(n,[{key:"size",get:function(){return this._size}},{key:"maxSize",get:function(){return this._maxSize},set:function(t){this._maxSize=Math.max(t,0),this._checkSizeLimits()}},{key:"performanceInfo",get:function(){const t={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},e={},i=new Array;this._db.forEach(((t,s)=>{const n=t.lifetime;i[n]=(i[n]||0)+t.size,this._users.forAll((i=>{const{id:n,name:r}=i;if(s.startsWith(n)){const i=e[r]||0;e[r]=i+t.size}}))}));const n={};this._users.forAll((t=>{const i=t.name;if("hitRate"in t&&"number"==typeof t.hitRate&&!isNaN(t.hitRate)&&t.hitRate>0){const s=e[i]||0;e[i]=s,n[i]=Math.round(100*t.hitRate)+"%"}else n[i]="0%"}));const r=Object.keys(e);r.sort(((t,i)=>e[i]-e[t])),r.forEach((i=>t[i]=Math.round(e[i]/2**20)+"MB / "+n[i]));for(let o=i.length-1;o>=0;--o){const e=i[o];e&&(t["Priority "+(o+s-1)]=Math.round(e/this._size*100)+"%")}return t}}]),n}(),h=0;t.MIN_PRIORITY=s,t.MemCache=r,t.MemCacheStorage=o,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));