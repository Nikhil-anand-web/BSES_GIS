/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/PooledArray","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","./depthRange","./Material","./RenderSlot"],(function(e,n,r,t,s,i,o,u,l,a,c,d,h,p){"use strict";function g(e){return"prepareTechnique"in e}function _(e){return"prepareTechniques"in e}e.RenderPluginManager=function(e){function r(n){var r;(r=e.call(this,{})||this)._context=n,r._renderPlugins=new s,r._slots=[];for(let e=0;e<p.RenderSlot.MAX_SLOTS;++e)r._slots[e]=[];return r}n._inherits(r,e);var t=r.prototype;return t.normalizeCtorArgs=function(){return{}},t.add=function(e,n,r){const t=()=>{if(r?.aborted)throw n.uninitializeRenderContext(),i.createAbortError();this._renderPlugins.push(n);for(const r of e)this._slots[r].push(n);this._context.requestRender()},s=n.initializeRenderContext(this._context,r);if(i.isPromiseLike(s))return s.then(t);t(),this.notifyChange("_renderPlugins")},t.remove=function(e){if(null!=this._renderPlugins.removeUnordered(e)){for(let n=0;n<this._slots.length;++n)this._slots[n]=this._slots[n].filter((n=>n!==e));e.uninitializeRenderContext(),this._context.requestRender(),this.notifyChange("_renderPlugins")}},t.prepareRender=function(){this._renderPlugins.forAll((e=>{e.prepareRender&&e.prepareRender(this._context.renderContext)}))},t.updateAnimation=function(e){let n=!1;return this._renderPlugins.forAll((r=>{r.updateAnimation&&(n=r.updateAnimation(e)||n)})),n},t.prepareSlots=function(e){for(const n of e)this._context.renderContext.bindParameters.slot=n,this._slots[n].filter((e=>{e.canRender&&(g(e)&&e.prepareTechnique(this._context.renderContext),_(e)&&e.prepareTechniques(this._context.renderContext))}))},t.render=function(){const e=this._slots[this._context.renderContext.bindParameters.slot],n=new Array;e.filter((e=>{if(!e.canRender)return!1;if(g(e)){const r=e.prepareTechnique(this._context.renderContext);return null!=r&&(n.push(r),!0)}if(_(e)){const r=e.prepareTechniques(this._context.renderContext);return null!=r&&(n.push(r),!0)}return n.push(null),!0})).forEach(((e,r)=>e.render(this._context.renderContext,n[r])))},t.queryDepthRange=function(e){const n=f;return n.near=1/0,n.far=-1/0,this._renderPlugins.forAll((r=>{if(r.queryDepthRange){const t=r.queryDepthRange(e);t&&d.union(n,t,n)}})),n},n._createClass(r,[{key:"updating",get:function(){return this._renderPlugins.some((e=>e.running))}},{key:"needsTransparentPass",get:function(){return this._renderPlugins.some((e=>e.needsTransparentPass))}},{key:"needsHighlight",get:function(){return this._renderPlugins.some((e=>e.needsHighlight))}},{key:"needsLinearDepth",get:function(){return this._renderPlugins.some((e=>e.needsLinearDepth))}},{key:"needsLaserlineWithContrastControl",get:function(){const e=this._slots[p.RenderSlot.LASERLINES_CONTRAST_CONTROL];return!!e&&e.length>0}},{key:"renderOccludedFlags",get:function(){return this._renderPlugins.reduce(((e,n)=>e|n.renderOccludedFlags),h.RenderOccludedFlag.None)}}]),r}(t),r.__decorate([o.property()],e.RenderPluginManager.prototype,"_renderPlugins",void 0),r.__decorate([o.property({readOnly:!0})],e.RenderPluginManager.prototype,"updating",null),e.RenderPluginManager=r.__decorate([c.subclass("esri.views.3d.webgl-engine.lib.RenderPluginManager")],e.RenderPluginManager);const f={near:0,far:0};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
