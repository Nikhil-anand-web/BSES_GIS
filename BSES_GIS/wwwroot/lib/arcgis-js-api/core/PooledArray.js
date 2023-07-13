/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","./arrayUtils","./HeapSort"],(function(t,i,n){"use strict";const h=1.5,e=1.1;function s(t){t.data.length>h*t.length&&(t.data.length=Math.floor(t.length*e))}return function(){function h(t){this.data=[],this._length=0,this._allocator=void 0,this._deallocator=()=>null,this._shrink=()=>{},this._hint=new i.PositionHint,t&&(t.initialSize&&(this.data=new Array(t.initialSize)),t.allocator&&(this._allocator=t.allocator),void 0!==t.deallocator&&(this._deallocator=t.deallocator),t.shrink&&(this._shrink=()=>s(this)))}var e=h.prototype;return e.toArray=function(){return this.data.slice(0,this.length)},e.filter=function(t){const i=new Array;for(let n=0;n<this._length;n++){const h=this.data[n];t(h)&&i.push(h)}return i},e.at=function(t){if((t=Math.trunc(t)||0)<0&&(t+=this._length),!(t<0||t>=this._length))return this.data[t]},e.includes=function(t,i){const n=this.data.indexOf(t,i);return-1!==n&&n<this.length},e.clear=function(){this.length=0},e.prune=function(){this.clear(),this.data=[]},e.push=function(t){this.data[this._length++]=t},e.pushArray=function(t,i=t.length){for(let n=0;n<i;n++)this.data[this._length++]=t[n]},e.fill=function(t,i){for(let n=0;n<i;n++)this.data[this._length++]=t},e.pushNew=function(){this._allocator&&(this.data[this.length]=this._allocator(this.data[this.length]));const t=this.data[this._length];return++this._length,t},e.unshift=function(t){this.data.unshift(t),this._length++,s(this)},e.pop=function(){if(0===this.length)return;const t=this.data[this.length-1];return this.length=this.length-1,this._shrink(),t},e.remove=function(t){const n=i.indexOf(this.data,t,this.length,this._hint);if(-1!==n)return this.data.splice(n,1),this.length=this.length-1,t},e.removeUnordered=function(t){return this.removeUnorderedIndex(i.indexOf(this.data,t,this.length,this._hint))},e.removeUnorderedIndex=function(t){if(!(t>=this.length||t<0))return this.swapElements(t,this.length-1),this.pop()},e.removeUnorderedMany=function(t,n=t.length,h){this.length=i.removeUnorderedMany(this.data,t,this.length,n,this._hint,h),this._shrink()},e.front=function(){if(0!==this.length)return this.data[0]},e.back=function(){if(0!==this.length)return this.data[this.length-1]},e.swapElements=function(t,i){if(t>=this.length||i>=this.length||t===i)return;const n=this.data[t];this.data[t]=this.data[i],this.data[i]=n},e.sort=function(t){n.sort(this.data,0,this.length,t)},e.iterableSort=function(t){return n.iterableSort(this.data,0,this.length,t)},e.some=function(t,i){for(let n=0;n<this.length;++n)if(t.call(i,this.data[n],n,this.data))return!0;return!1},e.find=function(t,i){for(let n=0;n<this.length;++n){const h=this.data[n];if(t.call(i,h,n))return h}},e.filterInPlace=function(t,i){let n=0;for(let h=0;h<this._length;++h){const e=this.data[h];t.call(i,e,h,this.data)&&(this.data[h]=this.data[n],this.data[n]=e,n++)}if(this._deallocator)for(let h=n;h<this._length;h++)this.data[h]=this._deallocator(this.data[h]);return this._length=n,this._shrink(),this},e.forAll=function(t,i){const n=this.length,h=this.data;for(let e=0;e<n;++e)t.call(i,h[e],e,h)},e.forEach=function(t,i){for(let n=0;n<this.length;++n)t.call(i,this.data[n],n,this.data)},e.map=function(t,i){const n=new Array(this.length);for(let h=0;h<this.length;++h)n[h]=t.call(i,this.data[h],h,this.data);return n},e.reduce=function(t,i){let n=i;for(let h=0;h<this.length;++h)n=t(n,this.data[h],h,this.data);return n},e.has=function(t){const i=this.length,n=this.data;for(let h=0;h<i;++h)if(n[h]===t)return!0;return!1},t._createClass(h,[{key:"length",get:function(){return this._length},set:function(t){if(t>this._length){if(this._allocator){for(;this._length<t;)this.data[this._length++]=this._allocator(this.data[this._length]);return}this._length=t}else{if(this._deallocator)for(let i=t;i<this._length;++i)this.data[i]=this._deallocator(this.data[i]);this._length=t,this._shrink()}}}]),h}()}));