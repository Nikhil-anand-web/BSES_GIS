/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/MemCache","../../../../core/promiseUtils","../../../../chunks/mat3f32","../../../../geometry/support/aaBoundingRect","./TileHandler","./VectorTile","./decluttering/jobsUtil","../../tiling/TileInfoViewPOT","../../tiling/TileKey"],(function(e,t,i,n,o,l,s,r,a,u){"use strict";return function(l){function g(e,t,i,n){var o;return(o=l.call(this,e,t,i)||this)._memCache=n,o._ongoingTileRequests=new Map,o._ongoingRequestToController=new Map,o._tileInfoView=new a(e.tileInfo,e.fullExtent),o}e._inherits(g,l);var c=g.prototype;return c.destroy=function(){e._get(e._getPrototypeOf(g.prototype),"destroy",this).call(this),this._ongoingRequestToController.forEach((e=>e.abort())),this._ongoingRequestToController.clear(),this._ongoingTileRequests.clear()},c.getVectorTile=async function(e,l,a,g){const c=new u(e,l,a,0);let h=this._memCache.get(c.id);if(null!=h)return h.retain(),h;const _=await this._getVectorTileData(c);if(i.throwIfAborted(g),!this._layer)return null;if(h=this._memCache.get(c.id),null!=h)return h.retain(),h;const T=this._layer.tileInfo.getTileBounds(o.create(),c),f=this._tileInfoView.getTileResolution(e);return h=new s.VectorTile(c,f,T[0],T[3],512,512,this._styleRepository,this._memCache),_?(h.setData(_),h.retain(),this._memCache.put(c.id,h,h.memoryUsed,t.MIN_PRIORITY)):h.setData(null),h.neededForCoverage=!0,h.transforms.tileUnitsToPixels=n.fromValues(1/8,0,0,0,1/8,0,0,0,1),r.declutterSingleTile(h),h},c._getVectorTileData=function(e){const t=e.id;if(this._ongoingTileRequests.has(t))return this._ongoingTileRequests.get(t);const i=new AbortController,n={signal:i.signal},o=this._getParsedVectorTileData(e,n).then((e=>(this._ongoingTileRequests.delete(t),this._ongoingRequestToController.delete(t),e))).catch((()=>(this._ongoingTileRequests.delete(t),this._ongoingRequestToController.delete(t),null)));return this._ongoingTileRequests.set(t,o),this._ongoingRequestToController.set(t,i),o},c._getParsedVectorTileData=function(e,t){return this.fetchTileData(e,t).then((i=>this.parseTileData({key:e,data:i},t)))},e._createClass(g)}(l.TileHandler)}));