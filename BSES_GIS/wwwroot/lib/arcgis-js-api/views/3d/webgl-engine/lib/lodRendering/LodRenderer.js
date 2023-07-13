/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/Accessor","../../../../../core/arrayUtils","../../../../../core/Handles","../../../../../core/maybe","../../../../../core/promiseUtils","../../../../../core/accessorSupport/decorators/property","../../../../../core/accessorSupport/ensureType","../../../../../core/has","../../../../../core/accessorSupport/decorators/subclass","../../../../../chunks/mat4f64","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../chunks/vec4f64","../../../support/debugFlags","../../../support/buffer/glUtil","../../../support/buffer/InterleavedLayout","../../core/shaderLibrary/ShaderOutput","../Camera","../DefaultVertexAttributeLocations","../IntersectorInterfaces","../Octree","../RenderSlot","../Util","../VertexAttribute","./InstanceData","./InstanceOctree","./LevelSelector","./LodLevel","./RenderInstanceData","../../materials/internal/MaterialUtil","../../materials/renderers/utils","../../shaders/DefaultMaterialTechnique","../../../../support/Scheduler","../../../../webgl/Util"],(function(e,t,n,a,r,s,i,o,c,l,d,u,h,_,f,p,g,y,m,I,C,R,b,v,D,S,A,E,L,T,O,x,F,V,M,N,U){"use strict";const w=e=>{const t=e.baseBoundingSphere.radius,n=e.levels.map((e=>e.minScreenSpaceRadius));return new T.LevelSelector(t,n)};function k(e,t,n){const a=e.allocateHead();B(t,n,e.view,a)}function B(e,t,n,a){V.encodeDoubleVec3(e.modelOrigin,t,n.modelOriginHi,n.modelOriginLo,a),n.model.copyFrom(a,e.model,t),n.modelNormal.copyFrom(a,e.modelNormal,t),e.color&&n.color&&n.color.copyFrom(a,e.color,t),e.objectAndLayerIdColor&&n.objectAndLayerIdColor&&n.objectAndLayerIdColor.copyFrom(a,e.objectAndLayerIdColor,t),e.featureAttribute&&n.featureAttribute&&n.featureAttribute.copyFrom(a,e.featureAttribute,t)}function H(e){let t=m.newLayout().vec3f(A.VertexAttribute.MODELORIGINHI).vec3f(A.VertexAttribute.MODELORIGINLO).mat3f(A.VertexAttribute.MODEL).mat3f(A.VertexAttribute.MODELNORMAL);return null!=e&&e.includes("featureAttribute")&&(t=t.vec4f(A.VertexAttribute.INSTANCEFEATUREATTRIBUTE)),null!=e&&e.includes("color")&&(t=t.vec4u8(A.VertexAttribute.INSTANCECOLOR)),null!=e&&e.includes("objectAndLayerIdColor")&&(t=t.vec4u8(A.VertexAttribute.INSTANCEOBJECTANDLAYERIDCOLOR)),t}e.LodRenderer=function(e){function n(n,a){var r;return(r=e.call(this,n)||this).type=b.IntersectorType.LOD,r.isGround=!1,r._handles=new s,r._levels=[],r._defaultRenderInstanceData=[new Array],r._highlightRenderInstanceData=[new Array],r._allRenderInstanceData=[r._defaultRenderInstanceData[0],r._highlightRenderInstanceData[0]],r._instanceIndex=0,r._cycleStartIndex=0,r._slicePlane=!1,r._camera=new C.Camera,r._updateCyclesWithStaticCamera=-1,r._needFullCycle=!1,r.slots=[D.RenderSlot.OPAQUE_MATERIAL,D.RenderSlot.TRANSPARENT_MATERIAL],r.canRender=!0,r._instanceData=new E.InstanceData({shaderTransformation:n.shaderTransformation},n.optionalFields),r._handles.add(a.registerTask(N.TaskPriority.LOD_RENDERER,t._assertThisInitialized(r))),r}t._inherits(n,e);var a=n.prototype;return a.initialize=function(){this._instanceBufferLayout=H(this.optionalFields),this._glInstanceBufferLayout=y.glLayout(this._instanceBufferLayout,1),this._handles.add([this._instanceData.events.on("instances-changed",(()=>this._requestUpdateCycle())),this._instanceData.events.on("instance-transform-changed",(({index:e})=>{this._requestUpdateCycle(),this.metadata.notifyGraphicGeometryChanged(e)})),this._instanceData.events.on("instance-visibility-changed",(({index:e})=>{this._requestUpdateCycle(!0),this.metadata.notifyGraphicVisibilityChanged(e)})),this._instanceData.events.on("instance-highlight-changed",(()=>this._requestUpdateCycle(!0)))])},a.destroy=function(){this._handles.destroy()},a.initializeRenderContext=async function(e,t){this._context=e;const n=e.renderContext.rctx,a=await Promise.allSettled(this.symbol.levels.map((a=>(this._defaultRenderInstanceData[0].push(new x.RenderInstanceData(n,this._instanceBufferLayout)),this._highlightRenderInstanceData[0].push(new x.RenderInstanceData(n,this._instanceBufferLayout)),O.LodLevel.create(e,a,t))))),s=a.map((e=>"fulfilled"===e.status?e.value:null)).filter(r.isSome);if(o.isAborted(t)||s.length!==a.length){s.forEach((e=>e.destroy())),o.throwIfAborted(t);for(const e of a)if("rejected"===e.status)throw e.reason}this._levels=s,this._levelSelector=w(this)},a.uninitializeRenderContext=function(){this._invalidateOctree(),this._levels.forEach((e=>e.destroy())),this._defaultRenderInstanceData[0].forEach((e=>e.destroy())),this._highlightRenderInstanceData[0].forEach((e=>e.destroy()))},a.prepareRender=function(e){if(!g.LOD_INSTANCE_RENDERER_DISABLE_UPDATES){if(this._enableLevelSelection){const t=e.bindParameters.contentCamera.equals(this._camera);this._camera.copyFrom(e.bindParameters.contentCamera),t||this._requestUpdateCycle()}this._needFullCycle&&(this.runTask(N.noBudget),this._needFullCycle=!1)}},a.prepareTechniques=function(e){if(!this.baseMaterial.isVisible()||!this.baseMaterial.isVisibleForOutput(e.output))return null;const t=this._getInstanceDatas(e.output);if(!t)return null;const n=new Array;return t.forEach((t=>this.levels.forEach(((a,r)=>{a.components.forEach((a=>n.push(this._beginComponent(e,t[r],a))))})))),n},a.render=function(e,t){const n=this._getInstanceDatas(e.output);if(!n)return;let a=0;e.rctx.bindVAO(),n.forEach((n=>this.levels.forEach(((r,s)=>{r.components.forEach((r=>this._renderComponent(e,t[a++],n[s],r,s)))}))))},a._getInstanceDatas=function(e){const t=e!==I.ShaderOutput.Highlight&&e!==I.ShaderOutput.ShadowHighlight,n=e!==I.ShaderOutput.ShadowExcludeHighlight;return t&&n?this._allRenderInstanceData:t?this._defaultRenderInstanceData:n?this._highlightRenderInstanceData:null},a.intersect=function(e,t,n,a){if(!this.baseMaterial.isVisible()||null==this._octree)return;const r=f.create();_.subtract(r,a,n);const s=r=>{this._instanceData.getCombinedModelTransform(r,G),e.transform.set(G),_.transformMat4(z,n,e.transform.inverse),_.transformMat4(j,a,e.transform.inverse);const s=this._instanceData.getState(r),i=this._instanceData.getLodLevel(r),o=this._levels.length;S.assert(0!=(s&E.StateFlags.ACTIVE),"invalid instance state"),S.assert(i>=0&&i<o,"invaid lod level"),this._levels[i].intersect(e,t,z,j,r,this.metadata,o)};this.baseMaterial.parameters.verticalOffset?this._octree.forEach(s):this._octree.forEachAlongRay(n,r,s)},a.queryDepthRange=function(e){return this._queryDepthRangeOctree(e)},a.notifyShaderTransformationChanged=function(){this._invalidateOctree(),this._requestUpdateCycle()},a._invalidateOctree=function(){this._octreeCached=i.destroyMaybe(this._octreeCached)},a._queryDepthRangeOctree=function(e){if(null==this._octree)return{near:1/0,far:-1/0};const t=e.viewForward,n=this._octree.findClosest(t,v.DepthOrder.FRONT_TO_BACK,e.frustum),a=this._octree.findClosest(t,v.DepthOrder.BACK_TO_FRONT,e.frustum);if(null==n||null==a)return{near:1/0,far:-1/0};const r=e.eye,s=this._instanceData.view;s.boundingSphere.getVec(n,q),_.subtract(q,q,r);const i=_.dot(q,t)-q[3];s.boundingSphere.getVec(a,q),_.subtract(q,q,r);const o=_.dot(q,t)+q[3];return{near:Math.max(e.near,i),far:Math.min(e.far,o)}},a._requestUpdateCycle=function(e=!1){this._updateCyclesWithStaticCamera=-1,this._cycleStartIndex=this._instanceIndex,e&&(this._needFullCycle=!0,this._context.requestRender())},a._startUpdateCycle=function(){this._updateCyclesWithStaticCamera++,this._allRenderInstanceData.forEach((e=>e.forEach((e=>e.startUpdateCycle()))))},a.runTask=function(e){const{_enableLevelSelection:t,_camera:n,_levelSelector:a}=this;this._allRenderInstanceData.forEach((e=>e.forEach((e=>e.beginUpdate()))));const r=this._instanceData,s=r.view;let i=r.size;const o=r.capacity;let c=this._instanceIndex;for(let l=0;l<i&&!e.done;++l){c===this._cycleStartIndex&&this._startUpdateCycle();const l=s.state.get(c);let d=0;if(!(l&E.StateFlags.ALLOCATED)){c=c+1===o?0:c+1,i++;continue}const u=s.lodLevel.get(c);if(l&E.StateFlags.DEFAULT_ACTIVE&&this._defaultRenderInstanceData[0][u].freeTail(),l&E.StateFlags.HIGHLIGHT_ACTIVE&&this._highlightRenderInstanceData[0][u].freeTail(),l&E.StateFlags.REMOVE)r.freeInstance(c);else if(l&E.StateFlags.VISIBLE){let e=0;t&&(s.modelOrigin.getVec(c,P),e=a.selectLevel(P,r.getCombinedMedianScaleFactor(c),n)),d=l&~(E.StateFlags.ACTIVE|E.StateFlags.TRANSFORM_CHANGED),e>=0&&(l&E.StateFlags.HIGHLIGHT?(k(this._highlightRenderInstanceData[0][e],s,c),d|=E.StateFlags.HIGHLIGHT_ACTIVE):(k(this._defaultRenderInstanceData[0][e],s,c),d|=E.StateFlags.DEFAULT_ACTIVE)),s.state.set(c,d),s.lodLevel.set(c,e)}else d=l&~(E.StateFlags.ACTIVE|E.StateFlags.TRANSFORM_CHANGED),s.state.set(c,d);if(null!=this._octreeCached){const e=!!(l&E.StateFlags.ACTIVE),t=!!(d&E.StateFlags.ACTIVE);!e&&t?this._octreeCached.addInstance(c):e&&!t?this._octreeCached.removeInstance(c):e&&t&&l&E.StateFlags.TRANSFORM_CHANGED&&(this._octreeCached.removeInstance(c),this._octreeCached.addInstance(c))}c=c+1===o?0:c+1,e.madeProgress()}this._instanceIndex=c,this._allRenderInstanceData.forEach((e=>e.forEach((e=>e.endUpdate())))),this._context.requestRender()},a._beginComponent=function(e,t,n){const{bindParameters:a,rctx:r,output:s}=e;if(0===t.size||!n.material.requiresSlot(a.slot,e.output))return null;const i=n.glMaterials.load(r,a.slot,s);return null!=i?i.beginSlot(a):null},a._renderComponent=function(e,t,n,a,r){if(!t)return;const{bindParameters:s,rctx:i}=e;i.appleAmdDriverHelper?.resetIndicesType();const o=i.bindTechnique(t,a.material.parameters,s);i.bindVAO(a.vao),t.ensureAttributeLocations(a.vao),o.bindDraw(K,s,a.material.parameters),g.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL&&e.output===I.ShaderOutput.Color&&(o.setUniform4fv("externalColor",W[Math.min(r,W.length-1)]),o.setUniform1i("colorMixMode",F.colorMixModes.replace));const c=i.capabilities.instancing,l=n.capacity,d=n.headIndex,u=n.tailIndex,h=n.firstIndex,_=this._glInstanceBufferLayout,f=(e,r)=>{U.bindVertexBufferLayout(i,R.Default3D,n.buffer,_,e),c.drawArraysInstanced(t.primitiveType,0,a.vertexCount,r-e),U.unbindVertexBufferLayout(i,R.Default3D,n.buffer,_)};a.material.parameters.transparent&&null!=h?d>u?(S.assert(h>=u&&h<=d,"invalid firstIndex"),f(h,d),f(u,h)):d<u&&(h<=d?(S.assert(h>=0&&h<=d,"invalid firstIndex"),f(h,d),f(u,l),f(0,h)):(S.assert(h>=u&&h<=l,"invalid firstIndex"),f(h,l),f(0,d),f(u,h))):d>u?f(u,d):d<u&&(f(0,d),f(u,l)),i.bindVAO(null)},t._createClass(n,[{key:"_enableLevelSelection",get:function(){return this.symbol.levels.length>1}},{key:"levels",get:function(){return this._levels}},{key:"baseBoundingBox",get:function(){return this._levels[this._levels.length-1].boundingBox}},{key:"baseBoundingSphere",get:function(){return this._levels[this._levels.length-1].boundingSphere}},{key:"baseMaterial",get:function(){return this._levels[this._levels.length-1].components[0].material}},{key:"slicePlaneEnabled",get:function(){return this._slicePlane},set:function(e){this._slicePlane=e}},{key:"layerUid",get:function(){return this.metadata.layerUid}},{key:"instanceData",get:function(){return this._instanceData}},{key:"memoryUsage",get:function(){const e={cpu:0,gpu:0};return this._allRenderInstanceData.forEach((t=>t.forEach((t=>{e.cpu+=t.memoryUsage.cpu,e.gpu+=t.memoryUsage.gpu})))),e}},{key:"renderStats",get:function(){const e=this._instanceData.size,t=[];return this._levels.forEach(((e,n)=>{const a=this._allRenderInstanceData[0][n].size+this._allRenderInstanceData[1][n].size,r=e.triangleCount;t.push({renderedInstances:a,renderedTriangles:a*r,trianglesPerInstance:r})})),{totalInstances:e,renderedInstances:t.reduce(((e,t)=>e+t.renderedInstances),0),renderedTriangles:t.reduce(((e,t)=>e+t.renderedTriangles),0),levels:t}}},{key:"needsTransparentPass",get:function(){return this._levels.some((e=>e.components.some((e=>e.material.requiresSlot(D.RenderSlot.TRANSPARENT_MATERIAL,I.ShaderOutput.Color)))))}},{key:"needsHighlight",get:function(){return this._highlightRenderInstanceData[0].some((e=>e.size>0))}},{key:"_octree",get:function(){if(null==this._octreeCached){const e=this._instanceData,t=e.view?.state;if(!t)return null;this._octreeCached=new L.InstanceOctree(e,this.baseBoundingSphere);for(let n=0;n<e.capacity;++n)t.get(n)&E.StateFlags.ACTIVE&&this._octreeCached.addInstance(n)}return this._octreeCached}},{key:"running",get:function(){return this._instanceData.size>0&&this._updateCyclesWithStaticCamera<1}}]),n}(a),n.__decorate([c.property({constructOnly:!0})],e.LodRenderer.prototype,"symbol",void 0),n.__decorate([c.property({constructOnly:!0})],e.LodRenderer.prototype,"optionalFields",void 0),n.__decorate([c.property({constructOnly:!0})],e.LodRenderer.prototype,"metadata",void 0),n.__decorate([c.property({constructOnly:!0})],e.LodRenderer.prototype,"shaderTransformation",void 0),n.__decorate([c.property()],e.LodRenderer.prototype,"_instanceData",void 0),n.__decorate([c.property()],e.LodRenderer.prototype,"_cycleStartIndex",void 0),n.__decorate([c.property({readOnly:!0})],e.LodRenderer.prototype,"_enableLevelSelection",null),n.__decorate([c.property()],e.LodRenderer.prototype,"_updateCyclesWithStaticCamera",void 0),n.__decorate([c.property({readOnly:!0})],e.LodRenderer.prototype,"running",null),e.LodRenderer=n.__decorate([u.subclass("esri.views.3d.webgl-engine.lib.lodRendering.LodRenderer")],e.LodRenderer);const P=f.create(),q=p.create(),G=h.create(),z=f.create(),j=f.create(),W=[p.fromValues(1,0,1,1),p.fromValues(0,0,1,1),p.fromValues(0,1,0,1),p.fromValues(1,1,0,1),p.fromValues(1,0,0,1)],K=new M.DefaultMaterialDrawParameters;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
