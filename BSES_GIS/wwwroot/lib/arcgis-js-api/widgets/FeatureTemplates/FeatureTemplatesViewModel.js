/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Evented","../../core/HandleOwner","../../core/ObjectPool","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../../layers/support/layerUtils","./TemplateItem","./TemplateItemGroup"],(function(e,t,r,s,o,l,n,a,i,u,p,c,y,m){"use strict";var h;const f=({layer:e})=>({key:e,label:e.title??""}),_=({layer:e})=>({key:e.geometryType,label:e.geometryType??""});let d=h=function(t){function r(e){var r;return(r=t.call(this,e)||this)._itemPool=new o(y),r._groupPool=new o(m),r.filterFunction=null,r.selectedItem=null,r}e._inherits(r,t);var s=r.prototype;return s.initialize=function(){this._get("groupBy")||(this.groupBy="layer")},s.refresh=function(){this.notifyChange("items")},s.select=function(e,{emit:t=!0}={}){const r=this.selectedItem,s=e?.clone()||null;this._set("selectedItem",s),t&&this.emit("select",{item:s,oldItem:r,template:s?.template??null})},s._createItem=function(e,t){const r=this._itemPool.acquire();return r.set({template:e,layer:t}),r},s._createGroup=function(e,t){const r=this._groupPool.acquire();return r.set("label",e),r.items=t,r},s._releasePreviousItems=function(){this._destroyItems(this._get("items"))},s._destroyItems=function(e){if(!e)return;e[0]instanceof y?e.forEach((e=>this._destroyItem(e))):e.forEach((e=>this._destroyGroup(e)))},s._destroyGroup=function(e){e.items.forEach((e=>this._destroyItem(e))),e.items.length=0,this._groupPool.release(e)},s._destroyItem=function(e){e.layer=null,e.template=null,this._itemPool.release(e)},s._ensureGroupByObject=function(e){return"string"==typeof e?{key:e,label:e}:e},e._createClass(r,[{key:"groupBy",set:function(e){if(this._set("groupBy",e),"function"!=typeof e)switch(e){case"layer":this._groupByFunction=f;break;case"geometry":this._groupByFunction=_;break;default:this._groupByFunction=null}else this._groupByFunction=t=>this._ensureGroupByObject(e(t))}},{key:"layers",get:function(){return this._get("layers")},set:function(e){const t="layers";if(this.handles.remove(t),e){const r=()=>this.notifyChange("state");this.handles.add(e.map((e=>l.when((()=>e.loadStatus),r))),t)}this._set("layers",e)}},{key:"state",get:function(){const{layers:e}=this;return e&&0!==e.length?e.some((e=>"loading"===e.loadStatus||"not-loaded"===e.loadStatus))?"loading":"ready":"disabled"}},{key:"_featureTemplatesByLayer",get:function(){if(!this.layers)return new Map;const e=[];for(const t of this.layers)if("subtype-group"===t.type)for(const r of t.sublayers){const t=g(r);e.push([r,t])}else c.isTable(t)||e.push([t,g(t)]);return new Map(e)}},{key:"numberOfFeatureTemplates",get:function(){return Array.from(this._featureTemplatesByLayer.values()).reduce(((e,t)=>e+t.length),0)}},{key:"items",get:function(){if(0===this.numberOfFeatureTemplates)return this._releasePreviousItems(),[];const e=this._featureTemplatesByLayer,t=[],r=null!=this.filterFunction?this.filterFunction:h._nullFilterFunction;for(const[l,n]of e)if(l.loaded||"subtype-sublayer"===l.type&&l.parent?.loaded){const e=c.getEffectiveLayerCapabilities(l)?.operations;if(e?.supportsEditing&&e?.supportsAdd)for(const s of n)t.push({layer:l,template:s,matchesFilter:r({label:s.name})})}if(null==this._groupByFunction){const e=t.filter((({matchesFilter:e})=>e)).map((({template:e,layer:t})=>this._createItem(e,t)));return this._releasePreviousItems(),e}const s=new Map;for(const l of t){const{template:e,layer:t}=l,r=this._groupByFunction({template:e,layer:t}),{key:o,label:n}=null!=r.key?r:h.nullGroupBy;s.has(o)||s.set(o,{label:n,templateItemInfos:[]}),s.get(o)?.templateItemInfos.push(l)}const o=[];for(const l of s.values()){const{label:e,templateItemInfos:t}=l,s=t.filter((({matchesFilter:e})=>e)),n=r({label:e})?t:t.length>0?s:[];if(n.length>0){const t=n.map((({template:e,layer:t})=>this._createItem(e,t)));o.push(this._createGroup(e,t))}}return 1===o.length&&o[0].label===h.nullGroupBy.label?(this._releasePreviousItems(),o[0].items):(this._releasePreviousItems(),o)}}]),r}(s.HandleOwnerMixin(r.EventedAccessor));d.nullGroupBy={key:Symbol(),label:"Other​"},d._nullFilterFunction=e=>!0,t.__decorate([n.property()],d.prototype,"_groupByFunction",void 0),t.__decorate([n.property()],d.prototype,"filterFunction",void 0),t.__decorate([n.property()],d.prototype,"groupBy",null),t.__decorate([n.property()],d.prototype,"layers",null),t.__decorate([n.property()],d.prototype,"state",null),t.__decorate([n.property({readOnly:!0})],d.prototype,"_featureTemplatesByLayer",null),t.__decorate([n.property({readOnly:!0})],d.prototype,"numberOfFeatureTemplates",null),t.__decorate([n.property({readOnly:!0})],d.prototype,"items",null),t.__decorate([n.property({readOnly:!0})],d.prototype,"selectedItem",void 0),d=h=t.__decorate([p.subclass("esri.widgets.FeatureTemplates.FeatureTemplatesViewModel")],d);const g=e=>[..."templates"in e&&Array.isArray(e.templates)?e.templates:[],..."types"in e&&Array.isArray(e.types)?e.types.flatMap((e=>e.templates)):[]];return d}));
