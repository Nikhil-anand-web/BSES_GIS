/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../../chunks/vec2","../../support/QueueProcessor"],(function(e,t,r,o,s,n,i,u,c,a,h){"use strict";function l(e,t){return e.length=0,t.forEach((t=>e.push(t))),e}const p=new Set,y=[],_=new Map,g=[0,0];let d=function(t){function r(e){var r;return(r=t.call(this,e)||this)._keyToItem=new Map,r.concurrency=6,r.strategy="scale-first",r.tileInfoView=null,r}e._inherits(r,t);var s=r.prototype;return s.initialize=function(){const{concurrency:e,process:t}=this;this._queue=new h.QueueProcessor({concurrency:e,process:(e,r)=>{const o=this._keyToItem.get(e);return t(o,{signal:r})},peeker:e=>e.values().next().value})},s.destroy=function(){this.clear(),this._queue=o.destroyMaybe(this._queue)},s.abort=function(e){const t="string"==typeof e?e:e.id;this._queue.abort(t)},s.clear=function(){this._queue.clear(),this._keyToItem.clear(),this.notifyChange("updating")},s.has=function(e){return"string"==typeof e?this._keyToItem.has(e):this._keyToItem.has(e.id)},s.isOngoing=function(e){const t="string"==typeof e?e:e.id;return this.has(t)&&this._queue.isOngoing(t)},s.pause=function(){this._queue.pause()},s.push=function(e,t){const r=e.key.id+"-"+t;if(this.has(r))return this.get(r);const o=this._queue.push(r),s=()=>{this._keyToItem.delete(r),this.notifyChange("updating")};return this._keyToItem.set(r,e),o.then(s,s),this.notifyChange("updating"),o},s.reset=function(){this._queue.reset(),this.notifyChange("updating")},s.resume=function(){this._queue.resume()},s._peekByScaleFirst=function(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView;let r=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY;e.forEach((e=>{const t=this._keyToItem.get(e),s=this.tileInfoView.getTileScale(t.key);_.has(s)||(_.set(s,[]),r=Math.max(s,r),o=Math.min(s,o)),_.get(s).push(t.key),p.add(s)}));let s=this.state.scale;_.has(s)||(l(y,p),y.sort(((e,t)=>e-t)),s=y.reduce(((e,t)=>Math.abs(t-s)<Math.abs(e-s)?t:e),y[0])),s=Math.min(s,r),s=Math.max(s,o);const n=_.get(s),i=t.getClosestInfoForScale(s),u=i.getColumnForX(this.state.center[0]),c=i.getRowForY(this.state.center[1]);return n.sort(((e,t)=>{const r=i.denormalizeCol(e.col,e.world),o=i.denormalizeCol(t.col,t.world);return Math.sqrt((u-r)*(u-r)+(c-e.row)*(c-e.row))-Math.sqrt((u-o)*(u-o)+(c-t.row)*(c-t.row))})),p.clear(),_.clear(),n[0].id},s._peekByCenterFirst=function(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView,r=this.state.center;let o,s=Number.POSITIVE_INFINITY;return e.forEach((e=>{const n=this._keyToItem.get(e);t.getTileCoords(g,n.key);const i=a.distance(g,r);i<s&&(s=i,o=n.key)})),o.id},e._createClass(r,[{key:"length",get:function(){return this._queue?this._queue.length:0}},{key:"onGoingCount",get:function(){return this._keyToItem.size}},{key:"updating",get:function(){return this.length>0||this.onGoingCount>0}}]),r}(r);t.__decorate([s.property({constructOnly:!0})],d.prototype,"concurrency",void 0),t.__decorate([s.property({constructOnly:!0})],d.prototype,"process",void 0),t.__decorate([s.property()],d.prototype,"state",void 0),t.__decorate([s.property({constructOnly:!0})],d.prototype,"strategy",void 0),t.__decorate([s.property({constructOnly:!0})],d.prototype,"tileInfoView",void 0),t.__decorate([s.property({readOnly:!0})],d.prototype,"updating",null),d=t.__decorate([c.subclass("esri.views.2d.tiling.PagedTileQueue")],d);return d}));