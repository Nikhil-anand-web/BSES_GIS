/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/asyncUtils","../../core/Error","../../core/maybe","../../core/promiseUtils","../../core/unitUtils","../../geometry/Multipoint","../../geometry/Point","../../geometry/Polyline","../../geometry/projection","../../geometry/support/aaBoundingRect","./ElevationSampler","./ElevationTile","./TileKey"],(function(e,t,i,n,o,l,s,a,r,c,u,f,h,p,m){"use strict";let y=function(){function e(){}var a=e.prototype;return a.queryAll=async function(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new n("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const o=d.fromGeometry(t);let l=!1;i&&i.returnSampleInfo||(l=!0);const s={...x,...i,returnSampleInfo:!0},a=await this.query(e[e.length-1],o,s),r=await this._queryAllContinue(e,a,s);return r.geometry=r.geometry.export(),l&&delete r.sampleInfo,r},a.query=async function(e,t,i){if(!e)throw new n("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof d)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new n("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const o={...x,...i},l=new w(e,t.spatialReference,o),s=o.signal;return await e.load({signal:s}),await this._createGeometryDescriptor(l,t,s),await this._selectTiles(l,s),await this._populateElevationTiles(l,s),this._sampleGeometryWithElevation(l),this._createQueryResult(l,s)},a.createSampler=async function(e,t,i){if(!e)throw new n("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new n("elevation-query:invalid-extent","Invalid or undefined extent");const o={...x,...i};return this._createSampler(e,t,o)},a.createSamplerAll=async function(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new n("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new n("elevation-query:invalid-extent","Invalid or undefined extent");const o={...x,...i,returnSampleInfo:!0},l=await this._createSampler(e[e.length-1],t,o);return this._createSamplerAllContinue(e,t,l,o)},a._createSampler=async function(e,t,i,n){const o=i.signal;await e.load({signal:o});const l=t.spatialReference,s=e.tileInfo.spatialReference;l.equals(s)||(await u.initializeProjection([{source:l,dest:s}],{signal:o}),t=u.project(t,s));const a=new g(e,t,i,n);return await this._selectTiles(a,o),await this._populateElevationTiles(a,o),new h.MultiTileElevationSampler(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)},a._createSamplerAllContinue=async function(e,t,i,n){if(e.pop(),!e.length)return i;const o=i.samplers.map((e=>f.fromExtent(e.extent))),l=await this._createSampler(e[e.length-1],t,n,o);if(0===l.samplers.length)return i;const s=i.samplers.concat(l.samplers),a=new h.MultiTileElevationSampler(s,n.noDataValue);return this._createSamplerAllContinue(e,t,a,n)},a._queryAllContinue=async function(e,t,i){const n=e.pop(),l=t.geometry.coordinates,s=t.sampleInfo;o.assertIsSome(s);const a=[],r=[];for(let o=0;o<l.length;o++){const t=s[o];t.demResolution>=0?t.source||(t.source=n):e.length&&(a.push(l[o]),r.push(o))}if(!e.length||0===a.length)return t;const c=t.geometry.clone(a),u=await this.query(e[e.length-1],c,i),f=u.sampleInfo;if(!f)throw new Error("no sampleInfo");return r.forEach(((e,t)=>{l[e].z=u.geometry.coordinates[t].z,s[e].demResolution=f[t].demResolution})),this._queryAllContinue(e,t,i)},a._createQueryResult=async function(e,t){const i=await e.geometry.project(e.outSpatialReference,t);o.assertIsSome(i);const n={geometry:i.export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(n.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null})),n},a._createGeometryDescriptor=async function(e,t,i){let o;const l=e.layer.tileInfo.spatialReference;if(t instanceof d?o=await t.project(l,i):(await u.initializeProjection([{source:t.spatialReference,dest:l}],{signal:i}),o=u.project(t,l)),!o)throw new n("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${l.wkid}'`);e.geometry=d.fromGeometry(o)},a._selectTiles=async function(e,t){"geometry"===e.type&&this._preselectOutsideLayerExtent(e);const i=e.options.demResolution;if("number"==typeof i)this._selectTilesClosestResolution(e,i);else if("finest-contiguous"===i)await this._selectTilesFinestContiguous(e,t);else{if("auto"!==i)throw new n("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}},a._preselectOutsideLayerExtent=function(e){if(null==e.layer.fullExtent)return;const t=new p.ElevationTile(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const n=e.x,o=e.y;(n<i.xmin||n>i.xmax||o<i.ymin||o>i.ymax)&&(e.elevationTile=t)}))},a._selectTilesClosestResolution=function(e,t){const i=this._findNearestDemResolutionLODIndex(e,t);e.selectTilesAtLOD(i)},a._findNearestDemResolutionLODIndex=function(e,t){const{tileInfo:i,tilemapCache:n}=e.layer,o=t/s.getMetersPerUnitForSR(i.spatialReference),l=E(i,n);let a=l[0],r=0;for(let s=1;s<l.length;s++){const e=l[s];Math.abs(e.resolution-o)<Math.abs(a.resolution-o)&&(a=e,r=s)}return r},a._selectTilesFinestContiguous=async function(e,t){const{tileInfo:i,tilemapCache:n}=e.layer,o=_(i,n,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,o,t)},a._selectTilesFinestContiguousAt=async function(e,t,i){const o=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const s=o.tilemapCache,a=e.getTilesToFetch();try{if(s&&!R(s))await l.whenOrAbort(Promise.all(a.map((e=>s.fetchAvailability(e.level,e.row,e.col,{signal:i})))),i);else if(await this._populateElevationTiles(e,i),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new n("elevation-query:has-unavailable-tiles")}catch(r){l.throwIfAbortError(r),await this._selectTilesFinestContiguousAt(e,t-1,i)}},a._populateElevationTiles=async function(e,t){const i=e.getTilesToFetch(),n={},o=e.options.cache,s=e.options.noDataValue,a=i.map((async i=>{if(null==i.id)return;const l=`${e.layer.uid}:${i.id}:${s}`,a=null!=o?o.get(l):null,r=null!=a?a:await e.layer.fetchTile(i.level,i.row,i.col,{noDataValue:s,signal:t});null!=o&&o.put(l,r),n[i.id]=new p.ElevationTile(i,r)}));await l.whenOrAbort(l.eachAlways(a),t),e.populateElevationTiles(n)},a._selectTilesAuto=async function(e,t){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const n=e.layer.tilemapCache;if(!n||R(n))return this._selectTilesAutoPrefetchUpsample(e,t);const o=e.getTilesToFetch(),s={},a=o.map((async e=>{const o=new m.TileKey(null,0,0,0,f.create()),a=await i.result(n.fetchAvailabilityUpsample(e.level,e.row,e.col,o,{signal:t}));!1!==a.ok?null!=e.id&&(s[e.id]=o):l.throwIfAbortError(a.error)}));await l.whenOrAbort(Promise.all(a),t),e.remapTiles(s)},a._reduceTilesForMaximumRequests=function(e){const t=e.layer.tileInfo;let i=0;const n={},o=e=>{null!=e.id&&(e.id in n?n[e.id]++:(n[e.id]=1,i++))},l=e=>{if(null==e.id)return;const t=n[e.id];1===t?(delete n[e.id],i--):n[e.id]=t-1};e.forEachTileToFetch(o,l);let s=!0;for(;s&&(s=!1,e.forEachTileToFetch((n=>{i<=e.options.maximumAutoTileRequests||(l(n),t.upsampleTile(n)&&(s=!0),o(n))}),l),s););},a._selectTilesAutoFinest=function(e){const{tileInfo:t,tilemapCache:i}=e.layer,n=_(t,i,e.options.minDemResolution);e.selectTilesAtLOD(n,e.options.maximumAutoTileRequests)},a._selectTilesAutoPrefetchUpsample=async function(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let n=!1;e.forEachTileToFetch(((e,t)=>{i.upsampleTile(e)?n=!0:t()})),n&&await this._selectTilesAutoPrefetchUpsample(e,t)},a._sampleGeometryWithElevation=function(e){e.geometry.coordinates.forEach((t=>{const i=t.elevationTile;let n=e.options.noDataValue;if(i){const e=i.sample(t.x,t.y);null!=e?n=e:t.elevationTile=null}t.z=n}))},a._extractSampleInfo=function(e){const t=e.layer.tileInfo,i=s.getMetersPerUnitForSR(t.spatialReference);return e.geometry.coordinates.map((n=>{let o=-1;if(n.elevationTile&&n.elevationTile!==e.outsideExtentTile){o=t.lodAt(n.elevationTile.tile.level).resolution*i}return{demResolution:o}}))},t._createClass(e)}(),d=function(){function e(){}var i=e.prototype;return i.export=function(){return this._exporter(this.coordinates,this.spatialReference)},i.clone=function(t){const i=new e;return i.geometry=this.geometry,i.spatialReference=this.spatialReference,i.coordinates=t||this.coordinates.map((e=>e.clone())),i._exporter=this._exporter,i},i.project=async function(e,t){if(this.spatialReference.equals(e))return this.clone();await u.initializeProjection([{source:this.spatialReference,dest:e}],{signal:t});const i=new a({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),n=u.project(i,e);if(!n)return null;const o=this.coordinates.map(((e,t)=>{const i=e.clone(),o=n.points[t];return i.x=o[0],i.y=o[1],i})),l=this.clone(o);return l.spatialReference=e,l},e.fromGeometry=function(t){const i=new e;if(i.geometry=t,i.spatialReference=t.spatialReference,t instanceof e)i.coordinates=t.coordinates.map((e=>e.clone())),i._exporter=(e,i)=>{const n=t.clone(e);return n.spatialReference=i,n};else switch(t.type){case"point":{const e=t,{hasZ:n,hasM:o}=e;i.coordinates=n&&o?[new T(e.x,e.y,e.z,e.m)]:n?[new T(e.x,e.y,e.z)]:o?[new T(e.x,e.y,null,e.m)]:[new T(e.x,e.y)],i._exporter=(e,i)=>t.hasM?new r(e[0].x,e[0].y,e[0].z,e[0].m,i):new r(e[0].x,e[0].y,e[0].z,i);break}case"multipoint":{const e=t,{hasZ:n,hasM:o}=e;i.coordinates=n&&o?e.points.map((e=>new T(e[0],e[1],e[2],e[3]))):n?e.points.map((e=>new T(e[0],e[1],e[2]))):o?e.points.map((e=>new T(e[0],e[1],null,e[2]))):e.points.map((e=>new T(e[0],e[1]))),i._exporter=(e,i)=>t.hasM?new a({points:e.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatiaReference:i}):new a(e.map((e=>[e.x,e.y,e.z])),i);break}case"polyline":{const e=t,n=[],o=[],{hasZ:l,hasM:s}=t;let a=0;for(const t of e.paths)if(o.push([a,a+t.length]),a+=t.length,l&&s)for(const e of t)n.push(new T(e[0],e[1],e[2],e[3]));else if(l)for(const e of t)n.push(new T(e[0],e[1],e[2]));else if(s)for(const e of t)n.push(new T(e[0],e[1],null,e[2]));else for(const e of t)n.push(new T(e[0],e[1]));i.coordinates=n,i._exporter=(e,i)=>{const n=t.hasM?e.map((e=>[e.x,e.y,e.z,e.m])):e.map((e=>[e.x,e.y,e.z])),l=o.map((e=>n.slice(e[0],e[1])));return new c({paths:l,hasM:t.hasM,hasZ:!0,spatialReference:i})};break}}return i},t._createClass(e)}(),T=function(){function e(e,t,i=null,n=null,o=null,l=null){this.x=e,this.y=t,this.z=i,this.m=n,this.tile=o,this.elevationTile=l}return e.prototype.clone=function(){return new e(this.x,this.y,this.z,this.m)},t._createClass(e)}(),v=t._createClass((function(e,t){this.layer=e,this.options=t})),w=function(e){function i(t,i,n){var o;return(o=e.call(this,t,n)||this).outSpatialReference=i,o.type="geometry",o}t._inherits(i,e);var n=i.prototype;return n.selectTilesAtLOD=function(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else{const{tileInfo:t,tilemapCache:i}=this.layer,n=E(t,i)[e].level;this.geometry.coordinates.forEach((e=>e.tile=t.tileAt(n,e.x,e.y)))}},n.allElevationTilesFetched=function(){return!this.geometry.coordinates.some((e=>!e.elevationTile))},n.clearElevationTiles=function(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)},n.populateElevationTiles=function(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile?.id&&(t.elevationTile=e[t.tile.id])},n.remapTiles=function(e){for(const t of this.geometry.coordinates){const i=t.tile?.id;t.tile=i?e[i]:null}},n.getTilesToFetch=function(){const e={},t=[];for(const i of this.geometry.coordinates){const n=i.tile;if(!n)continue;const o=i.tile?.id;i.elevationTile||!o||e[o]||(e[o]=n,t.push(n))}return t},n.forEachTileToFetch=function(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>{t.tile=null}))},t._createClass(i)}(v),g=function(e){function i(t,i,n,o){var l;return(l=e.call(this,t,n)||this).type="extent",l.elevationTiles=[],l._candidateTiles=[],l._fetchedCandidates=new Set,l.extent=i.intersection(t.fullExtent),l.maskExtents=o,l}t._inherits(i,e);var n=i.prototype;return n.selectTilesAtLOD=function(e,t){const i=this._maximumLodForRequests(t),n=Math.min(i,e);n<0?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(n)},n._maximumLodForRequests=function(e){const{tileInfo:t,tilemapCache:i}=this.layer,n=E(t,i);if(!e)return n.length-1;const o=this.extent;if(null==o)return-1;for(let l=n.length-1;l>=0;l--){const i=n[l],s=i.resolution*t.size[0],a=i.resolution*t.size[1];if(Math.ceil(o.width/s)*Math.ceil(o.height/a)<=e)return l}return-1},n.allElevationTilesFetched=function(){return this._candidateTiles.length===this.elevationTiles.length},n.clearElevationTiles=function(){this.elevationTiles.length=0,this._fetchedCandidates.clear()},n.populateElevationTiles=function(e){for(const t of this._candidateTiles){const i=t.id&&e[t.id];i&&(this._fetchedCandidates.add(t),this.elevationTiles.push(i))}},n.remapTiles=function(e){this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles.map((t=>e[t.id])))},n.getTilesToFetch=function(){return this._candidateTiles},n.forEachTileToFetch=function(e,t){const i=this._candidateTiles;this._candidateTiles=[],i.forEach((i=>{if(this._fetchedCandidates.has(i))return void(t&&t(i));let n=!1;e(i,(()=>n=!0)),n?t&&t(i):this._candidateTiles.push(i)})),this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles,t)},n._uniqueNonOverlappingTiles=function(e,t){const i={},n=[];for(const l of e){const e=l.id;e&&!i[e]?(i[e]=l,n.push(l)):t&&t(l)}const o=n.sort(((e,t)=>e.level-t.level));return o.filter(((e,i)=>{for(let n=0;n<i;n++){const i=o[n].extent;if(i&&e.extent&&f.contains(i,e.extent))return t&&t(e),!1}return!0}))},n._selectCandidateTilesCoveringExtentAt=function(e){this._candidateTiles.length=0;const t=this.extent;if(null==t)return;const{tileInfo:i,tilemapCache:n}=this.layer,o=E(i,n)[e],l=i.tileAt(o.level,t.xmin,t.ymin),s=l.extent;if(null==s)return;const a=o.resolution*i.size[0],r=o.resolution*i.size[1],c=Math.ceil((t.xmax-s[0])/a),u=Math.ceil((t.ymax-s[1])/r);for(let f=0;f<u;f++)for(let e=0;e<c;e++){const t=new m.TileKey(null,l.level,l.row-f,l.col+e);i.updateTileInfo(t),this._tileIsMasked(t)||this._candidateTiles.push(t)}},n._tileIsMasked=function(e){return!!this.maskExtents&&this.maskExtents.some((t=>e.extent&&f.contains(t,e.extent)))},t._createClass(i)}(v);function _(e,t,i=0){const n=E(e,t);let o=n.length-1;if(i>0){const t=i/s.getMetersPerUnitForSR(e.spatialReference),l=n.findIndex((e=>e.resolution<t));0===l?o=0:l>0&&(o=l-1)}return o}const x={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};function E(e,t){const i=e.lods;if(R(t)){const{effectiveMinLOD:e,effectiveMaxLOD:n}=t;return i.filter((t=>t.level>=e&&t.level<=n))}return i}function R(e){return null!=e?.tileInfo}e.ElevationQuery=y,e.GeometryDescriptor=d,e.getFinestLodIndex=_,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
