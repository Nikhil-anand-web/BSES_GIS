/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../../chunks/vec2","../../support/QueueProcessor"],(function(e,t,r,s,o,n,i,u,c,a,h){"use strict";function l(e,t){return e.length=0,t.forEach((t=>e.push(t))),e}const p=new Set,y=[],_=new Map,g=[0,0];let d=function(t){function r(e){var r;return(r=t.call(this,e)||this)._keyToItem=new Map,r.concurrency=6,r.strategy="scale-first",r.tileInfoView=null,r}e._inherits(r,t);var o=r.prototype;return o.initialize=function(){const{concurrency:e,process:t,strategy:r}=this;this._queue=new h.QueueProcessor({concurrency:e,process:(e,r)=>{const s=this._keyToItem.get(e);return t(s,{signal:r})},peeker:"scale-first"===r?e=>this._peekByScaleFirst(e):e=>this._peekByCenterFirst(e)})},o.destroy=function(){this.clear(),this._queue=s.destroyMaybe(this._queue)},o.abort=function(e){const t="string"==typeof e?e:e.id;this._queue.abort(t)},o.clear=function(){this._queue.clear(),this._keyToItem.clear(),this.notifyChange("updating")},o.has=function(e){return"string"==typeof e?this._keyToItem.has(e):this._keyToItem.has(e.id)},o.isOngoing=function(e){const t="string"==typeof e?e:e.id;return this.has(t)&&this._queue.isOngoing(t)},o.pause=function(){this._queue.pause()},o.push=function(e){const t=e.key.id;if(this._queue.has(t))return this._queue.get(t);const r=this._queue.push(t),s=()=>{this._keyToItem.delete(t),this.notifyChange("updating")};return this._keyToItem.set(t,e),r.then(s,s),this.notifyChange("updating"),r},o.reset=function(){this._queue.reset()},o.resume=function(){this._queue.resume()},o._peekByScaleFirst=function(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView;let r=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY;e.forEach((e=>{const t=this._keyToItem.get(e),o=this.tileInfoView.getTileScale(t.key);_.has(o)||(_.set(o,[]),r=Math.max(o,r),s=Math.min(o,s)),_.get(o).push(t.key),p.add(o)}));let o=this.state.scale;_.has(o)||(l(y,p),y.sort(((e,t)=>e-t)),o=y.reduce(((e,t)=>Math.abs(t-o)<Math.abs(e-o)?t:e),y[0])),o=Math.min(o,r),o=Math.max(o,s);const n=_.get(o),i=t.getClosestInfoForScale(o),u=i.getColumnForX(this.state.center[0]),c=i.getRowForY(this.state.center[1]);return n.sort(((e,t)=>{const r=i.denormalizeCol(e.col,e.world),s=i.denormalizeCol(t.col,t.world);return Math.sqrt((u-r)*(u-r)+(c-e.row)*(c-e.row))-Math.sqrt((u-s)*(u-s)+(c-t.row)*(c-t.row))})),p.clear(),_.clear(),n[0].id},o._peekByCenterFirst=function(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView,r=this.state.center;let s,o=Number.POSITIVE_INFINITY;return e.forEach((e=>{const n=this._keyToItem.get(e);t.getTileCoords(g,n.key);const i=a.distance(g,r);i<o&&(o=i,s=n.key)})),s.id},e._createClass(r,[{key:"length",get:function(){return this._queue?this._queue.length:0}},{key:"onGoingCount",get:function(){return this._keyToItem.size}},{key:"updating",get:function(){return this.length>0||this.onGoingCount>0}}]),r}(r);t.__decorate([o.property({constructOnly:!0})],d.prototype,"concurrency",void 0),t.__decorate([o.property({constructOnly:!0})],d.prototype,"process",void 0),t.__decorate([o.property()],d.prototype,"state",void 0),t.__decorate([o.property({constructOnly:!0})],d.prototype,"strategy",void 0),t.__decorate([o.property({constructOnly:!0})],d.prototype,"tileInfoView",void 0),t.__decorate([o.property({readOnly:!0})],d.prototype,"updating",null),d=t.__decorate([c.subclass("esri.views.2d.tiling.TileQueue")],d);return d}));