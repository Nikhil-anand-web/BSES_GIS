/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../request","../../core/Accessor","../../core/ByteSizeUnit","../../core/Error","../../core/handleUtils","../../core/LRUCache","../../core/PooledArray","../../core/promiseUtils","../../core/reactiveUtils","../../core/scheduling","../../core/urlUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./TileKey","./Tilemap"],(function(e,t,i,r,l,a,n,o,s,c,h,p,f,u,m,y,d,v,_,b,T){"use strict";var g;e.TilemapCache=g=function(e){function i(t){var i;return(i=e.call(this,t)||this)._pendingTilemapRequests={},i.request=r,i.size=32,i._prefetchingEnabled=!0,i}t._inherits(i,e);var l=i.prototype;return l.initialize=function(){this._tilemapCache=new s.LRUCache(2*a.ByteSizeUnit.MEGABYTES),this.addHandles([p.watch((()=>{const{layer:e}=this;return[e?.parsedUrl,e?.tileServers,e?.apiKey,e?.customParameters]}),(()=>this._initializeTilemapDefinition()),p.initial)])},l.fetchTilemap=function(e,t,i,r){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new n("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,a=this._tilemapFromCache(e,t,i,l);if(a)return Promise.resolve(a);const o=r&&r.signal;return r={...r,signal:null},new Promise(((e,t)=>{h.onAbort(o,(()=>t(h.createAbortError())));const i=T.tilemapDefinitionId(l);let a=this._pendingTilemapRequests[i];if(!a){a=T.Tilemap.fromDefinition(l,r).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=a,a.then(e,e)}a.then(e,t)}))},l.getAvailability=function(e,t,i){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const r=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return r?r.getAvailability(t,i):"unknown"},l.fetchAvailability=function(e,t,i,r){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(new n("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):this.fetchTilemap(e,t,i,r).catch((e=>e)).then((r=>{if(r instanceof T.Tilemap){const l=r.getAvailability(t,i);if("unavailable"===l)throw new n("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return l}if(h.isAbortError(r))throw r;return"unknown"}))},l.fetchAvailabilityUpsample=function(e,t,i,r,l){r.level=e,r.row=t,r.col=i;const a=this.layer.tileInfo;a.updateTileInfo(r);const n=this.fetchAvailability(e,t,i,l).catch((e=>{if(h.isAbortError(e))throw e;if(a.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r,l);throw e}));return this._fetchAvailabilityUpsamplePrefetch(r.id,e,t,i,l,n),n},l._fetchAvailabilityUpsamplePrefetch=async function(e,t,i,r,l,a){if(!this._prefetchingEnabled||null==e)return;const n=`prefetch-${e}`;if(this.hasHandles(n))return;const s=new AbortController;a.then((()=>s.abort()),(()=>s.abort()));let c=!1;const p=o.makeHandle((()=>{c||(c=!0,s.abort())}));if(this.addHandles(p,n),await f.waitTicks(10,s.signal).catch((()=>{})),c||(c=!0,this.removeHandles(n)),h.isAborted(s))return;const u=new b.TileKey(e,t,i,r),m={...l,signal:s.signal},y=this.layer.tileInfo;for(let o=0;g._prefetches.length<g._maxPrefetch&&y.upsampleTile(u);++o){const e=this.fetchAvailability(u.level,u.row,u.col,m);g._prefetches.push(e);const t=()=>{g._prefetches.removeUnordered(e)};e.then(t,t)}},l._initializeTilemapDefinition=function(){if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:t,customParameters:i}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:u.objectToQuery({...e.query,...i,token:t??e.query?.token}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}},l._tilemapFromCache=function(e,t,i,r){r.level=e,r.row=t-t%this.size,r.col=i-i%this.size;const l=T.tilemapDefinitionId(r);return this._tilemapCache.get(l)},t._createClass(i,[{key:"effectiveMinLOD",get:function(){return this.minLOD??this.layer.tileInfo.lods[0].level}},{key:"effectiveMaxLOD",get:function(){return this.maxLOD??this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}},{key:"test",get:function(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,r)=>!!e._tilemapFromCache(t,i,r,e._tmpTilemapDefinition)}}}]),i}(l),e.TilemapCache._maxPrefetch=4,e.TilemapCache._prefetches=new c({initialSize:g._maxPrefetch}),i.__decorate([m.property({constructOnly:!0})],e.TilemapCache.prototype,"layer",void 0),i.__decorate([m.property({constructOnly:!0})],e.TilemapCache.prototype,"minLOD",void 0),i.__decorate([m.property({constructOnly:!0})],e.TilemapCache.prototype,"maxLOD",void 0),i.__decorate([m.property({constructOnly:!0})],e.TilemapCache.prototype,"request",void 0),i.__decorate([m.property({constructOnly:!0})],e.TilemapCache.prototype,"size",void 0),e.TilemapCache=g=i.__decorate([_.subclass("esri.layers.support.TilemapCache")],e.TilemapCache),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));