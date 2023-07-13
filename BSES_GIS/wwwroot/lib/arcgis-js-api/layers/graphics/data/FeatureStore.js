/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../core/Error","../../../core/Evented","../../../core/Logger","../../../geometry/support/aaBoundingBox","../../../geometry/support/aaBoundingRect","../featureConversionUtils","./BoundsStore","./optimizedFeatureQueryEngineAdapter","./utils"],(function(e,t,n,s,r,o,i,u,a,d){"use strict";const h=r.create();return function(){function f(e){this.geometryInfo=e,this._boundsStore=new u.BoundsStore,this._featuresById=new Map,this._markedIds=new Set,this.events=new n,this.featureAdapter=a.optimizedFeatureQueryEngineAdapter}var c=f.prototype;return c.getFullExtent=function(e){if(null==this.fullBounds)return null;const[t,n,s,r]=this.fullBounds;return{xmin:t,ymin:n,xmax:s,ymax:r,spatialReference:d.cleanFromGeometryEngine(e)}},c.add=function(e){this._add(e),this._emitChanged()},c.addMany=function(e){for(const t of e)this._add(t);this._emitChanged()},c.clear=function(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()},c.removeById=function(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null},c.removeManyById=function(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()},c.forEachBounds=function(e,t){for(const n of e){const e=this._boundsStore.get(n.objectId);e&&t(r.fromRect(h,e))}},c.getFeature=function(e){return this._featuresById.get(e)},c.has=function(e){return this._featuresById.has(e)},c.forEach=function(e){this._featuresById.forEach((t=>e(t)))},c.forEachInBounds=function(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))},c.startMarkingUsedFeatures=function(){this._boundsStore.invalidateIndex(),this._markedIds.clear()},c.sweep=function(){let e=!1;this._featuresById.forEach(((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()},c._emitChanged=function(){this.events.emit("changed",void 0)},c._add=function(e){if(!e)return;const n=e.objectId;if(null==n)return void s.getLogger("esri.layers.graphics.data.FeatureStore").error(new t("featurestore:invalid-feature","feature id is missing",{feature:e}));const r=this._featuresById.get(n);let u;if(this._markedIds.add(n),r?(e.displayId=r.displayId,u=this._boundsStore.get(n),this._boundsStore.delete(n)):null!=this.onFeatureAdd&&this.onFeatureAdd(e),null==e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(n,null),void this._featuresById.set(n,e);u=i.getBoundsOptimizedGeometry(null!=u?u:o.create(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=u&&this._boundsStore.set(n,u),this._featuresById.set(n,e)},c._remove=function(e){null!=this.onFeatureRemove&&this.onFeatureRemove(e);const t=e.objectId;return this._markedIds.delete(t),this._boundsStore.delete(t),this._featuresById.delete(t),e},e._createClass(f,[{key:"geometryType",get:function(){return this.geometryInfo.geometryType}},{key:"hasM",get:function(){return this.geometryInfo.hasM}},{key:"hasZ",get:function(){return this.geometryInfo.hasZ}},{key:"numFeatures",get:function(){return this._featuresById.size}},{key:"fullBounds",get:function(){return this._boundsStore.fullBounds}},{key:"storeStatistics",get:function(){let e=0;return this._featuresById.forEach((t=>{null!=t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}}]),f}()}));