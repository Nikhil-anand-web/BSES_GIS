/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/PooledArray","./RenderOrder"],(function(e,t,n,r){"use strict";let i=function(){function e(){this._queue=new n,this.remove=()=>{}}var r=e.prototype;return r.resetOne=function(e){this._queue.clear(),this._queue.push(e),this._last=void 0},r.reset=function(e=null){this._queue.clear(),null!=e&&this._queue.pushArray(e),this._last=void 0},r.skipSubtree=function(){this._last=void 0},r.next=function(){const e=this._last?.children;return e&&e[0]&&this._queue.pushArray(e),this._last=this._queue.pop(),this._last},t._createClass(e,[{key:"done",get:function(){return 0===this._queue.length&&(!this._last||this._last.isLeaf)}}]),e}(),s=function(){function e(){this._q=new n}var r=e.prototype;return r.reset=function(e){if(this._q.clear(),null!=e){this._q.pushArray(e);for(let e=0;e<this._q.length;++e){const t=this._q.data[e];t.isLeaf||this._q.pushArray(t.children)}}},r.next=function(){return this._q.pop()},t._createClass(e,[{key:"done",get:function(){return 0===this._q.length}}]),e}();function o(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)l(e[n],t);else l(e,t)}function l(e,t){if(t(e),!e.isLeaf)for(const n of e.children)l(n,t)}function u(e,t,n){if(null==t||null==t.fullExtent)return!1;const r=t.fullExtent,i=e.extent;if(n){if(i[0]<r.xmin||i[1]<r.ymin||i[2]>r.xmax||i[3]>r.ymax)return!1}else if(r.xmin>i[2]||r.ymin>i[3]||r.xmax<i[0]||r.ymax<i[1])return!1;const s=e.surface.tilingScheme.levels[e.level].scale,o=t.minScale;if(o>0&&s>1.00000001*o)return!1;const l=t.maxScale;return!(l>0&&s<.99999999*l)}function c(e,t){const n=e.lij,r=t.lij;return n[0]-r[0]||n[1]-r[1]||n[2]-r[2]}function a(e,t,n=null){null==n||0===n.length?e===r.RenderOrder.BACK_TO_FRONT?t.sort(f):t.sort(h):t.sort(((t,r)=>_(t,r,e,n)))}function f(e,t){const n=t.screenDepth-e.screenDepth;if(0!==n)return n;const r=e.lij,i=t.lij;return r[0]-i[0]||r[1]-i[1]||r[2]-i[2]}function h(e,t){const n=e.screenDepth-t.screenDepth;if(0!==n)return n;const r=e.lij,i=t.lij;return r[0]-i[0]||r[1]-i[1]||r[2]-i[2]}function p(e,t,n){const r=e.screenDepth,i=t.screenDepth;return r<i?-n:r>i?n:c(e,t)}function _(e,t,n,r){return d(e,r)===d(t,r)?p(e,t,n):e?n:-n}function d(e,t){for(const n of t)if(e.intersectsExtent(n))return!0;return!1}function y(e,t){const n=e.distanceToPOI-t.distanceToPOI;if(0!==n)return n;const r=e.lij,i=t.lij;return r[0]-i[0]||r[1]-i[1]||r[2]-i[2]}function m(e,t){const n=e.length;for(let r=0;r<n;++r){e.at(r).updateDistanceToPOI(t)}e.sort(y)}function q(e,t,n){let r=1,i=0,s=0;for(;e!==t;)if(r*=.5,i*=.5,s*=.5,1&e.lij[2]&&(i+=.5),0==(1&e.lij[1])&&(s+=.5),null==(e=e.parent))throw new Error("tile was not a descendant of upsampleTile");n.init(t,i,s,r)}function x(e){for(let t=0;t<e.length;t++){const n=e[t],r=n.parent;if(r)for(let e=0;e<4;e++){const t=r.children[e];if(t&&t!==n)return!0}}return!1}function g(e,t){if(!e||!t||e[0]===t[0])return!1;const n=e[0]<t[0],r=n?e:t,i=n?t:e,s=1<<i[0]-r[0];return Math.floor(i[1]/s)===r[1]&&Math.floor(i[2]/s)===r[2]}e.IteratorPostorder=s,e.IteratorPreorder=i,e.compareTiles=p,e.compareTilesByLij=c,e.compareTilesWithStencil=_,e.computeUpsampleInfo=q,e.fallsWithinLayer=u,e.hasLoadableSiblings=x,e.sortTiles=a,e.sortTilesByPOI=m,e.tilesAreRelated=g,e.traverseTilesPreorder=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
