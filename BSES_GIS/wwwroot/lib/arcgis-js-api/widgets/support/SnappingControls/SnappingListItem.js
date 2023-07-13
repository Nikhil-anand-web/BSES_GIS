/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/arrayUtils","../../../core/Collection","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../LayerList/ListItem","../../LayerList/support/layerListUtils","./snappingLayerListUtils"],(function(e,t,r,n,i,p,a,o,s,l,c,u){"use strict";var y;e.SnappingListItem=y=function(e){function r(t){var r;return(r=e.call(this,t)||this).children=new i,r.parent=null,r}t._inherits(r,e);var p=r.prototype;return p._initializeChildLayers=function(e){if(!e)return;const n=e.filter(u.isValidSnappingLayer);t._get(t._getPrototypeOf(r.prototype),"_initializeChildLayers",this).call(this,n)},p._makeChildren=function(e){return e.map((e=>c.canDisplayLayer(e)?new y({layer:e,parent:this,view:this.view,getFeatureSnappingSources:this.getFeatureSnappingSources}):null)).filter(n.isSome).reverse()},t._createClass(r,[{key:"allChildrenEnabled",get:function(){return this.children.every((e=>e.enabled))??!1}},{key:"childLayerIds",get:function(){return this.children.map((e=>e.layer.id)).toArray()}},{key:"enabled",get:function(){return null!=this.featureSource&&this.featureSource.enabled}},{key:"featureSource",get:function(){const{layer:e,getFeatureSnappingSources:t}=this;return t().find((t=>t.layer===e))}},{key:"hasChildrenEnabled",get:function(){return this.children.some((e=>e.enabled))}}]),r}(l),r.__decorate([p.property()],e.SnappingListItem.prototype,"allChildrenEnabled",null),r.__decorate([p.property()],e.SnappingListItem.prototype,"children",void 0),r.__decorate([p.property()],e.SnappingListItem.prototype,"childLayerIds",null),r.__decorate([p.property()],e.SnappingListItem.prototype,"enabled",null),r.__decorate([p.property()],e.SnappingListItem.prototype,"featureSource",null),r.__decorate([p.property({constructOnly:!0})],e.SnappingListItem.prototype,"getFeatureSnappingSources",void 0),r.__decorate([p.property()],e.SnappingListItem.prototype,"hasChildrenEnabled",null),r.__decorate([p.property()],e.SnappingListItem.prototype,"parent",void 0),e.SnappingListItem=y=r.__decorate([s.subclass("esri.widgets.support.SnappingControls.SnappingListItem")],e.SnappingListItem),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));