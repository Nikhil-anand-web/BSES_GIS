/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/Collection","../../../core/Handles","../../../core/reactiveUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass"],(function(e,t,i,r,o,l,n,s,a,d,p,c){"use strict";function y(e,t){let i=null;for(const r of e.items){const e=t(r);if(null!=i&&i!==e)return null;i=e}return i}e.LayerTreeNode=function(e){function i(){var t;return(t=e.apply(this,arguments)||this).id="root",t.parent=null,t.children=new o,t.layers=new o,t.level=0,t.collapsed=!0,t._handles=new l,t._childIds=new Set,t._layerUniqueIds=new Set,t}t._inherits(i,e);var r=i.prototype;return r.initialize=function(){this._handles.add([this.layers.on("before-add",(e=>{this._layerUniqueIds.has(e.item.uid)?e.preventDefault():this._layerUniqueIds.add(e.item.uid)})),this.layers.on("after-add",(({item:e})=>{this._handles.add([n.watch((()=>e.visible),(()=>this.notifyChange("visible")),n.initial),n.watch((()=>e.title),(()=>this.notifyChange("title")),n.initial)],e.uid)})),this.layers.on("before-remove",(({item:e})=>{this._handles.remove(e.uid),this.notifyChange("title"),this.notifyChange("visible")})),this.children.on("before-add",(e=>{this._childIds.has(e.item.id)?e.preventDefault():(e.item._set("parent",this),this._childIds.add(e.item.id))}))])},r.destroy=function(){this._handles.destroy(),this.children.forEach((e=>e.destroy()))},r.toggleVisibility=function(e){const t=void 0===e?!this.visible:e;this.layers.forEach((e=>{e.visible=t})),t&&null!=this.parent&&this.parent.toggleVisibility(!0)},r.toggleCollapsed=function(e){this.collapsed=void 0===e?!this.collapsed:e},r.expand=function(){this.collapsed=!1},r.expandAll=function(){this.expand(),this.children.forEach((e=>e.expandAll()))},r.collapse=function(){this.collapsed=!0},r.collapseAll=function(){this.collapse(),this.children.forEach((e=>e.collapseAll()))},r.toggleAllSiblingsVisibility=function(e){const t=void 0===e?!this.visible:e;this.toggleVisibility(t),null!=this.parent&&(this.parent.toggleVisibility(t),this.parent.children.forEach((e=>e.toggleVisibility(t))))},t._createClass(i,[{key:"hasChildren",get:function(){return this.children.length>0}},{key:"isRoot",get:function(){return 0===this.level}},{key:"isLeaf",get:function(){return!this.hasChildren}},{key:"isDiscipline",get:function(){return 1===this.level}},{key:"visible",get:function(){return y(this.layers,(e=>e.visible))}},{key:"title",get:function(){return y(this.layers,(e=>e.title))||this.layers.items.map((e=>e.title)).join(", ")||null}}]),i}(r),i.__decorate([s.property({nonNullable:!0})],e.LayerTreeNode.prototype,"id",void 0),i.__decorate([s.property()],e.LayerTreeNode.prototype,"parent",void 0),i.__decorate([s.property({nonNullable:!0,readOnly:!0})],e.LayerTreeNode.prototype,"children",void 0),i.__decorate([s.property({nonNullable:!0,readOnly:!0})],e.LayerTreeNode.prototype,"layers",void 0),i.__decorate([s.property({nonNullable:!0})],e.LayerTreeNode.prototype,"level",void 0),i.__decorate([s.property({nonNullable:!0})],e.LayerTreeNode.prototype,"collapsed",void 0),i.__decorate([s.property({readOnly:!0})],e.LayerTreeNode.prototype,"hasChildren",null),i.__decorate([s.property({readOnly:!0})],e.LayerTreeNode.prototype,"isRoot",null),i.__decorate([s.property({readOnly:!0})],e.LayerTreeNode.prototype,"isLeaf",null),i.__decorate([s.property({readOnly:!0})],e.LayerTreeNode.prototype,"isDiscipline",null),i.__decorate([s.property({readOnly:!0})],e.LayerTreeNode.prototype,"visible",null),i.__decorate([s.property({readOnly:!0})],e.LayerTreeNode.prototype,"title",null),e.LayerTreeNode=i.__decorate([c.subclass("esri.widgets.BuildingExplorer.support.LayerTreeNode")],e.LayerTreeNode),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
