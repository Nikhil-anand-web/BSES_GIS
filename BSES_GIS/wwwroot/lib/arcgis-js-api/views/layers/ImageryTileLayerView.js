/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Graphic","../../core/Error","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../layers/support/commonProperties","../../layers/support/rasterFunctions/rasterProjectionHelper","./support/popupUtils"],(function(e,t,r,o,n,a,i,s,l,p,u,c){"use strict";const y=a=>{let i=function(t){function n(){var e;return(e=t.apply(this,arguments)||this)._rasterFieldPrefix="Raster.",e.layer=null,e.view=null,e.tileInfo=null,e}e._inherits(n,t);var a=n.prototype;return a._getfullExtent=function(){return this.projectFullExtent(this.view.spatialReference)},a.supportsSpatialReference=function(e){return!!this.projectFullExtent(e)},a.projectFullExtent=function(e){const t=this.layer.fullExtent,r=u.getDefaultDatumTransformationForDataset(t,e,!1);return u.projectExtent(t,e,r)},a.fetchPopupFeatures=async function(e,t){const{layer:n}=this;if(!e)throw new o("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:n});const{popupEnabled:a}=n,i=c.getFetchPopupTemplate(n,t);if(!a||null==i)throw new o("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:i});const s=[],{value:l,magdirValue:p,processedValue:u}=await n.identify(e,{timeExtent:this.timeExtent});let y="";if(l&&l.length){y="imagery-tile"===n.type&&n.hasStandardTime()&&null!=l[0]?l.map((e=>n.getStandardTimeValue(e))).join(", "):l.join(", ");const e={ObjectId:0},t="Raster.ServicePixelValue";e[t]=u?.join(", ")??y,e[t+".Raw"]=y;const o=n.rasterInfo.attributeTable;if(null!=o){const{fields:t,features:r}=o,n=t.find((({name:e})=>"value"===e.toLowerCase())),a=n?r.find((e=>String(e.attributes[n.name])===y)):null;if(a)for(const o in a.attributes)if(a.attributes.hasOwnProperty(o)){e[this._rasterFieldPrefix+o]=a.attributes[o]}}const a=n.rasterInfo.dataType;"vector-magdir"!==a&&"vector-uv"!==a||(e["Raster.Magnitude"]=p?.[0],e["Raster.Direction"]=p?.[1]);const i=new r(this.fullExtent.clone(),null,e);i.layer=n,i.sourceLayer=i.layer,s.push(i)}return s},e._createClass(n,[{key:"fullExtent",get:function(){return this._getfullExtent()}},{key:"hasTilingEffects",get:function(){return!!(this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment)}},{key:"datumTransformation",get:function(){return u.getDefaultDatumTransformationForDataset(this.layer.fullExtent,this.view.spatialReference,!0)}}]),n}(a);return t.__decorate([n.property()],i.prototype,"layer",void 0),t.__decorate([n.property(p.combinedViewLayerTimeExtentProperty)],i.prototype,"timeExtent",void 0),t.__decorate([n.property()],i.prototype,"view",void 0),t.__decorate([n.property()],i.prototype,"fullExtent",null),t.__decorate([n.property()],i.prototype,"tileInfo",void 0),t.__decorate([n.property({readOnly:!0})],i.prototype,"hasTilingEffects",null),t.__decorate([n.property()],i.prototype,"datumTransformation",null),i=t.__decorate([l.subclass("esri.views.layers.ImageryTileLayerView")],i),i};return y}));