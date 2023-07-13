/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/PooledArray","../../../core/promiseUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../state/helpers/SceneIntersectionHelper","./lib/ChangeSet","./lib/UpdatePolicy","./lib/WebGLLayer","./parts/Model","./parts/RenderView","../../support/Scheduler"],(function(e,t,r,n,i,s,o,d,a,c,y,h,l,u,_,g,m,p){"use strict";e.Stage=function(e){function r(t){var r;return(r=e.call(this,t)||this)._model=new g.Model,r._layers=new i,r._asyncChangeSet=new l.ChangeSet,r._syncChangeSet=new l.ChangeSet,r._layerSyncSet=new Set,r}t._inherits(r,e);var n=r.prototype;return n.initialize=function(){this._set("renderView",new m.RenderView(this)),this._frameTask=this.view.resourceController.scheduler.registerTask(p.TaskPriority.STAGE,this),this.addHandles(this._frameTask)},n.destroy=function(){this.removeAllHandles()},n.add=function(e){this._model.add(e),_.isWebGLLayer(e)&&this._addLayer(e),this.renderView.requestRender()},n.remove=function(e){null==e||this.destroyed||(this._model.remove(e),_.isWebGLLayer(e)&&this._removeLayer(e),this.renderView.requestRender())},n.addMany=function(e){null!=e&&(this._model.addMany(e),this.renderView.requestRender())},n.removeMany=function(e){null!=e&&(this._model?.removeMany(e),this.renderView?.requestRender())},n.load=async function(e,t){null!=e&&(Array.isArray(e)||(e=[e]),await Promise.all(e.filter((e=>null==e.glTexture)).map((e=>this.schedule((()=>this._model.has(e)?e.load(this.renderView.renderingContext):null))),t)))},n.loadImmediate=function(e){return e.load(this.renderView.renderingContext)},n.forEachOfType=function(e,t){this._model.forEachOfType(e,t)},n.handleEvent=function(e,t){this.destroyed||(this._model.dirtySet[e](t),this.renderView.requestRender())},n.runTask=function(e){this._frameTask.processQueue(e),this._commit(e)},n._commit=function(e){const t=this._model.dirtySet;this._asyncChangeSet.empty||e.done||(this.renderer.modify(this._asyncChangeSet,e),this.renderView.requestRender(),e.madeProgress()),this._layers.forAll((r=>{if(e.done)return;const n=this._layerSyncSet.has(r.id)||r.updatePolicy===u.UpdatePolicy.SYNC,i=n?this._syncChangeSet:this._asyncChangeSet;t.commitLayer(r.id,i),this._layerSyncSet.delete(r.id),i.empty||(this.renderer.modify(i,n?p.noBudget:e),this.renderView.requestRender(),e.madeProgress())})),this._syncChangeSet.empty||(this.renderer.modify(this._syncChangeSet,p.noBudget),this.renderView.requestRender(),e.madeProgress()),this._layers.forAll((r=>{e.done||this._layerSyncSet.has(r.id)||r.updatePolicy!==u.UpdatePolicy.ASYNC||(t.commitLayer(r.id,this._asyncChangeSet),this._asyncChangeSet.empty||(this.renderer.modify(this._asyncChangeSet,e),this.renderView.requestRender(),e.madeProgress()))})),this._layerSyncSet.clear(),this.notifyChange("running")},n.commitSyncLayers=function(){const e=this._model.dirtySet;this._layers.forAll((t=>{(this._layerSyncSet.has(t.id)||t.updatePolicy===u.UpdatePolicy.SYNC)&&(e.commitLayer(t.id,this._syncChangeSet),this._layerSyncSet.delete(t.id))}));for(const t of this._layerSyncSet)e.commitLayer(t,this._syncChangeSet);this._layerSyncSet.clear(),this._syncChangeSet.empty||(this.renderer.modify(this._syncChangeSet,p.noBudget),this.renderView.requestRender())},n._commitLayer=function(e){this._model.dirtySet.commitLayer(e.id,this._syncChangeSet),this._layerSyncSet.delete(e.id),this._syncChangeSet.empty||(this.renderer.modify(this._syncChangeSet,p.noBudget),this.renderView.requestRender())},n.schedule=function(e,t){return this._frameTask.schedule(e,t)},n.reschedule=function(e,t){return this._frameTask.reschedule(e,t)},n.syncLayer=function(e){this._layerSyncSet.add(e),this.renderView.requestRender()},n.getObject=function(e){return this._model.getObject(e)},n._addLayer=function(e){this._layers.includes(e)||this._layers.push(e)},n._removeLayer=function(e){this._commitLayer(e),null!=this._layers.removeUnordered(e)&&(this._model.dirtySet.getResidentRenderGeometries(e.id,this._syncChangeSet.removes),this.renderer.modify(this._syncChangeSet,p.noBudget))},n.addRenderPlugin=function(e,t,r){const n=this.renderer.renderPlugins.add(e,t,r),i=()=>{h.isIntersectionHandler(t)&&this.view.sceneIntersectionHelper.addIntersectionHandler(t)};if(s.isPromiseLike(n))return n.then(i);i()},n.removeRenderPlugin=function(e){this.destroyed||(h.isIntersectionHandler(e)&&this.view.sceneIntersectionHelper.removeIntersectionHandler(e),this.renderer.renderPlugins.remove(e))},t._createClass(r,[{key:"viewingMode",get:function(){return this.view.state.viewingMode}},{key:"updating",get:function(){return this.running||this.renderView.updating||this._frameTask.updating}},{key:"renderer",get:function(){return this.renderView?.renderer}},{key:"running",get:function(){return this._model.dirtySet.dirty||!this._asyncChangeSet.empty}},{key:"layers",get:function(){return this._layers}},{key:"performanceInfo",get:function(){return{renderer:this.renderer.performanceInfo,model:this._model.getStats()}}},{key:"test",get:function(){const e=this;return{getCount:t=>e._model.test.content.filter((e=>e.type===t)).length,model:e._model}}}]),r}(n),e.Stage.DebugSettings={endFrameContentValidation:!1},r.__decorate([o.property({constructOnly:!0})],e.Stage.prototype,"view",void 0),r.__decorate([o.property({constructOnly:!0})],e.Stage.prototype,"options",void 0),r.__decorate([o.property({readOnly:!0})],e.Stage.prototype,"viewingMode",null),r.__decorate([o.property({constructOnly:!0})],e.Stage.prototype,"container",void 0),r.__decorate([o.property({readOnly:!0})],e.Stage.prototype,"updating",null),r.__decorate([o.property({constructOnly:!0})],e.Stage.prototype,"_model",void 0),r.__decorate([o.property({autoDestroy:!0})],e.Stage.prototype,"renderView",void 0),r.__decorate([o.property({readOnly:!0})],e.Stage.prototype,"renderer",null),r.__decorate([o.property({readOnly:!0})],e.Stage.prototype,"running",null),e.Stage=r.__decorate([y.subclass("esri.views.3d.webgl-engine.Stage")],e.Stage),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
