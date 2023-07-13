/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../request","../../../../core/maybe","../../../../core/promiseUtils","../../tiling/TileKey"],(function(e,t,i,r,n){"use strict";return function(){function l(e,t){this._tilemap=e,this._tileIndexUrl=t}var s=l.prototype;return s.destroy=function(){this._tilemap=i.destroyMaybe(this._tilemap),this._tileIndexPromise=null},s.fetchTileIndex=async function(e){return this._tileIndexPromise||(this._tileIndexPromise=t(this._tileIndexUrl,{query:{...e?.query}}).then((e=>e.data.index))),this._tileIndexPromise},s.dataKey=function(e,t){const{level:i,row:l,col:s}=e,o=new n(e);return this._tilemap.fetchAvailabilityUpsample(i,l,s,o,t).then((()=>(o.world=e.world,o))).catch((e=>{if(r.isAbortError(e))throw e;return null}))},e._createClass(l)}()}));
