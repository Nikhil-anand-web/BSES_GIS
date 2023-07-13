/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../lib/ContentObjectType","../lib/GridLocalOriginFactory","../lib/ModelDirtySet","../lib/RenderGeometry","../lib/Util","../lib/WebGLLayer"],(function(e,t,o,n,r,i,s,a,c,d,l,u,y,h,f){"use strict";e.Model=function(e){function o(){var o;return(o=e.apply(this,arguments)||this).dirtySet=new u({model:t._assertThisInitialized(o)}),o._content=new Map,o._originFactory=new l.GridLocalOriginFactory(null),o}t._inherits(o,e);var n=o.prototype;return n.getObject=function(e){return this._content.get(e)},n.add=function(e){const t=e.id;h.assert(!this._content.has(t),"Model/Stage already contains object to be added"),this._content.set(t,e),f.isWebGLLayer(e)&&this.dirtySet.layerAdded(e)},n.remove=function(e){h.assert(this._content.has(e.id),"Model/Stage doesn't contain object to be removed"),this._content.delete(e.id),e.unload(),f.isWebGLLayer(e)&&this.dirtySet.layerRemoved(e)},n.addMany=function(e){for(const t of e)null!=t&&(h.assert(!this._content.has(t.id),"Model/Stage already contains object to be added"),this._content.set(t.id,t))},n.removeMany=function(e){for(const t of e)h.assert(this._content.has(t.id),"Model/Stage doesn't contain object to be removed"),this._content.delete(t.id),t.unload()},n.has=function(e){return this._content.has(e.id)},n.forEachOfType=function(e,t){this._content.forEach((o=>{o.type===e&&t(o)}))},n.getRenderGeometry=function(e,t){const{shaderTransformer:o,localOrigin:n}=t,r=new y.RenderGeometry(t,{shaderTransformer:o,castShadow:e.castShadow});return r.updateTransformation((o=>e.getCombinedStaticTransformation(t,o))),r.localOrigin=null!=n?n:this._originFactory.getOrigin(r.boundingSphere),r},n.updateRenderGeometryTransformation=function(e,t,o){if(null==e)return!1;o.updateTransformation((o=>e.getCombinedStaticTransformation(t,o)));const n=this._originFactory.getOrigin(o.boundingSphere);return o.localOrigin!==n},n.getStats=function(){const e={},t=Array.from(this._content.values());for(let o=0;o<d.ContentObjectType.COUNT;++o)e[o]=t.filter((e=>e.type===o)).length;return{contentTypes:e,dirtySet:this.dirtySet.formatDebugInfo()}},t._createClass(o,[{key:"test",get:function(){return{content:Array.from(this._content.values())}}}]),o}(n),o.__decorate([r.property({constructOnly:!0})],e.Model.prototype,"dirtySet",void 0),e.Model=o.__decorate([c.subclass("esri.views.3d.webgl-engine.parts.Model")],e.Model),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));