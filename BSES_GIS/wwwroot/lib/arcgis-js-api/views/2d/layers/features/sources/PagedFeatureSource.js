/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/Error","../../../../../core/Logger","../../../../../core/promiseUtils","./BaseFeatureSource"],(function(e,t,r,a,o,i){"use strict";let s=function(e){function i(t){return e.call(this,t)||this}t._inherits(i,e);var s=i.prototype;return s._fetchDataTile=async function(e){const t=6,i=20,s=this._subscriptions.get(e.key.id);let n=!1,u=0,d=0;const c=(t,r)=>{d--,o.throwIfAborted(s);const a=e.id,i=t.reader,u=t.query;if(!i.exceededTransferLimit){if(n=!0,0!==r&&!i.hasFeatures){const e={id:a,addOrUpdate:i,end:0===d,type:"append"};return s.add({message:e,query:u}),void this._onMessage(e)}const e={id:a,addOrUpdate:i,end:0===d,type:"append"};return s.add({message:e,query:u}),void this._onMessage(e)}const c={id:a,addOrUpdate:i,end:n&&0===d,type:"append"};s.add({message:c,query:u}),this._onMessage(c)};let h=0,l=0;for(;!n&&l++<i;){let i;for(let t=0;t<h+1;t++){const t=u++;d++,i=this._fetchDataTilePage(e,t,s).then((e=>e&&c(e,t))).catch((t=>{if(n=!0,!o.isAbortError(t)){a.getLogger("esri.views.2d.layers.features.sources.PagedFeatureSource").error(new r("mapview-query-error","Encountered error when fetching tile",{tile:e,error:t}));const o={id:e.id,addOrUpdate:null,end:n,type:"append"},i={start:this.pageSize*u,num:this.pageSize,returnExceededLimitFeatures:!0,quantizationParameters:e.getQuantizationParameters()};null!=this.maxRecordCountFactor&&(i.maxRecordCountFactor=this.maxRecordCountFactor);const d=this.createTileQuery(e,i);s.add({message:o,query:d}),this._onMessage(o)}}))}await i,o.throwIfAborted(s),h=Math.min(h+2,t)}},s._fetchDataTilePage=async function(e,t,r){o.throwIfAborted(r);const a=this._queryInfo,i={start:this.pageSize*t,num:this.pageSize,returnExceededLimitFeatures:!0,quantizationParameters:e.getQuantizationParameters()};null!=this.maxRecordCountFactor&&(i.maxRecordCountFactor=this.maxRecordCountFactor);const s=this.createTileQuery(e,i);try{const i=r.signal,n=await this.enqueueQuery({tile:e,query:s,signal:i,depth:t});return o.throwIfAborted(r),n?a!==this._queryInfo?this._fetchDataTilePage(e,t,r):{reader:n,query:s}:null}catch(n){return o.throwIfNotAbortError(n),null}},t._createClass(i)}(i.BaseFeatureSource);e.PagedFeatureSource=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));