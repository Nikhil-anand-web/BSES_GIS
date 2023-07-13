/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Collection","../core/collectionUtils","../core/Logger","../core/promiseUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass","../layers/Layer"],(function(e,r,t,o,s,n,a,i,l,d,c,y,u){"use strict";function p(e,r,t){let o,s;if(e)for(let n=0,a=e.length;n<a;n++){if(o=e.at(n),o?.[r]===t)return o;if("group"===o?.type&&(s=p(o.layers,r,t),s))return s}}const f=e=>{let l=function(e){function t(...t){var s;(s=e.call(this,...t)||this).layers=new o;const a=e=>{e.parent&&"remove"in e.parent&&e.parent.remove(e)},i=e=>{e.parent=r._assertThisInitialized(s),s.layerAdded(e),"elevation"!==e.type&&"base-elevation"!==e.type||n.getLogger(r._assertThisInitialized(s)).error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as an operational layer and will therefore be ignored.`)},l=e=>{e.parent=null,s.layerRemoved(e)};return s.addHandles([s.layers.on("before-add",(e=>a(e.item))),s.layers.on("after-add",(e=>i(e.item))),s.layers.on("after-remove",(e=>l(e.item)))]),s}r._inherits(t,e);var i=t.prototype;return i.destroy=function(){const e=this.layers.toArray();for(const r of e)r.destroy();this.layers.destroy()},i.add=function(e,r){const t=this.layers;if(r=t.getNextIndex(r),e instanceof u){const o=e;o.parent===this?this.reorder(o,r):t.add(o,r)}else a.isPromiseLike(e)?e.then((e=>{this.destroyed||this.add(e,r)})):n.getLogger(this).error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")},i.addMany=function(e,r){const t=this.layers;let o=t.getNextIndex(r);e.slice().forEach((e=>{e.parent!==this?(t.add(e,o),o+=1):this.reorder(e,o)}))},i.findLayerById=function(e){return p(this.layers,"id",e)},i.findLayerByUid=function(e){return p(this.layers,"uid",e)},i.remove=function(e){return this.layers.remove(e)},i.removeMany=function(e){return this.layers.removeMany(e)},i.removeAll=function(){return this.layers.removeAll()},i.reorder=function(e,r){return this.layers.reorder(e,r)},i.layerAdded=function(e){},i.layerRemoved=function(e){},r._createClass(t,[{key:"layers",set:function(e){this._set("layers",s.referenceSetter(e,this._get("layers")))}}]),t}(e);return t.__decorate([i.property()],l.prototype,"layers",null),l=t.__decorate([y.subclass("esri.support.LayersMixin")],l),l};e.LayersMixin=f,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));