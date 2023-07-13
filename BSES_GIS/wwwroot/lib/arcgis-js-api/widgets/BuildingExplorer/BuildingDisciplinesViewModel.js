/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/Collection","../../core/collectionUtils","../../core/Handles","../../core/promiseUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","./support/buildingLayerUtils","./support/LayerTreeNode","./support/layerUtils"],(function(e,t,r,s,o,a,i,l,n,d,c,y,u,h,p){"use strict";let _=function(t){function r(e){var r;return(r=t.call(this,e)||this).root=new h.LayerTreeNode,r.state="disabled",r._handles=new a,r._loadLayers=p.createLoadLayersFunction(),r.layers=new s,r}e._inherits(r,t);var l=r.prototype;return l.initialize=function(){this._handles.add(this.layers.on("change",(()=>this._onLayersChange()))),this._onLayersChange()},l.destroy=function(){this._set("state","disabled"),this._handles.destroy(),this.root.destroy()},l._updateLayerTree=function(){this.root.destroy(),this._set("root",new h.LayerTreeNode({collapsed:!1}));const e=new Map,t=this.layers.length>1?"modelName":"id";return this.layers.forEach((r=>{const s=u.findFullModelSublayer(r);this._addNodesForSublayers(s??r,this.root,e,t)})),this},l._addNodeForLayer=function(e,t,r,s){const o=String(e.get(s)).toLowerCase();if(null==o||e.isEmpty)return;const a=`${t.id}/${o}`;let i=r.get(a);i||(i=new h.LayerTreeNode({id:o,level:t.level+1}),r.set(a,i)),i.layers.push(e),t.children.push(i),this._addNodesForSublayers(e,i,r,s)},l._addNodesForSublayers=function(e,t,r,s){("building-scene"===e.type||"building-group"===e.type&&!e.isEmpty)&&e.sublayers.forEach((e=>this._addNodeForLayer(e,t,r,s)))},l._onLayersChange=async function(){if(this._set("state","loading"),0!==this.layers.length)try{await this._loadLayers(this.layers),this._updateLayerTree(),this._set("state","ready")}catch(e){i.isAbortError(e)||this._set("state","failed")}},e._createClass(r,[{key:"layers",set:function(e){const t=this._get("layers");this._set("layers",o.referenceSetter(e,t))}}]),r}(r);t.__decorate([l.property({readOnly:!0})],_.prototype,"root",void 0),t.__decorate([l.property({type:s,nonNullable:!0})],_.prototype,"layers",null),t.__decorate([l.property({readOnly:!0,nonNullable:!0})],_.prototype,"state",void 0),_=t.__decorate([y.subclass("esri.widgets.BuildingExplorer.BuildingDisciplineViewModel")],_);return _}));