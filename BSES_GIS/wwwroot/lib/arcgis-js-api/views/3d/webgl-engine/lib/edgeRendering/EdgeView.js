/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/Accessor","../../../../../core/arrayUtils","../../../../../core/Logger","../../../../../core/mathUtils","../../../../../core/maybe","../../../../../core/accessorSupport/decorators/property","../../../../../core/accessorSupport/ensureType","../../../../../core/has","../../../../../core/accessorSupport/decorators/subclass","../../../../../chunks/mat3","../../../../../chunks/mat3f64","../../../../../chunks/mat4f64","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../core/support/WatchUpdatingTracking","../../../../../chunks/sphere","../../../../../chunks/vec33","../../../../ViewingMode","../../collections/Component/Material/shader/ComponentData.glsl","../../core/util/TwoVectorPosition","../GridLocalOriginFactory","../localOriginHelper","../LocalOriginManager","../Object3D","../VertexArrayObject","../VertexAttribute","./bufferLayouts","./edgeBufferWriters","./edgePreprocessing","./EdgeRenderer","./EdgeShaderParameters","./EdgeWorkerHandle","./interfaces","./strokes","./util","../TextureBackedBuffer/BufferManager","../../shaders/sources/edgeRenderer/EdgeUtil.glsl","../../../../webgl/BufferObject","../../../../webgl/enums"],(function(e,t,r,n,s,i,a,o,c,d,l,u,h,g,f,p,m,_,y,b,O,E,w,T,R,v,x,j,C,M,S,A,P,V,B,I,L,D,k,U,N,H){"use strict";function G(e){null!=e&&(e.vao.vertexBuffers.instances.dispose(),e.vao.disposeVAOOnly(),e.vao=null)}function F(e){let t=null,r=null;for(let n=0;n<e.geometries.length;n++){const i=e.geometries[n];if(i.material.supportsEdges){if(t){if(!s.equals(t,i.transformation))return!1}else t=i.transformation;if(r||null==i.localOrigin){if(r&&null!=r.localOrigin&&null!=i.localOrigin&&r.localOrigin.id!==i.localOrigin.id)return!1}else r=i}}return!0}e.EdgeView=function(e){function r(t){var r;return(r=e.call(this,t)||this)._updatingHandles=new _.WatchUpdatingTracking,r._perObjectData=new Map,r._perObjectDataEvictionCache=new Set,r._renderers=new Map,r._gpuMemoryUsage=0,r._workerAbort=new AbortController,r._tmpModelPosition=m.create(),r._localOrigins=new v.LocalOriginManager(new T.GridLocalOriginFactory(t.renderSR)),r}t._inherits(r,e);var n=r.prototype;return n.initialize=function(){this._worker=new B.EdgeWorkerHandle(this.schedule),this._componentColorManager=new k.BufferManager(this.rctx,3);const e=M.VertexLayout.createBuffer(4);for(let t=0;t<4;t++)e.sideness.set(t,0,0===t||3===t?0:1),e.sideness.set(t,1,0===t||1===t?0:1);this._verticesBufferObject=N.BufferObject.createVertex(this.rctx,H.Usage.STATIC_DRAW,e.buffer)},n.destroy=function(){this.destroyed||(this._perObjectData.forEach((e=>this._discardObjectEntry(e))),this._perObjectData.clear(),this._strokesTexture=o.disposeMaybe(this._strokesTexture),this._componentColorManager=o.destroyMaybe(this._componentColorManager),this._workerAbort.abort(),this._worker.destroy(),this._verticesBufferObject=o.disposeMaybe(this._verticesBufferObject),this._renderers.clear(),this._updatingHandles.destroy(),this._set("schedule",re))},n.shouldRender=function(){return this._renderers.size>0},n.addComponentObject=async function(e,t,r,n,s,i,a,o){if(this.hasObject(e))return this.getObjectMemoryUsage(e);let c;const d=new W(new Promise((e=>c=e)),r.center,r.radius);this._perObjectData.set(e,d);const l=await this._updatingHandles.addPromise(this._addComponentGeometry(t,d,n,s,i,a,o));return this.setNeedsRender(),c(),l},n.addOrUpdateObject3D=async function(e,t,r,n){if(this.destroyed)return void i.getLogger(this).warn("Attempt to add an object to a destroyed instance");const s=this._perObjectData.get(e);let a;s?.renderables.length>0&&this._perObjectDataEvictionCache.add(s);const o=e.boundingVolumeWorldSpace.bounds,c=new W(new Promise((e=>a=e)),y.getCenter(o),y.getRadius(o));this._perObjectData.set(e,c);const d=new Array;if(r.mergeGeometries&&e.geometries.length>1&&F(e))d.push(this._addObjectMergedGeometries(e,c,t,r,n));else for(let i=0;i<e.geometries.length;i++){const s=e.geometries[i];s.material.supportsEdges&&d.push(this._addGeometry(e,c,s,t[0],r,n))}await this._updatingHandles.addPromise(Promise.all(d)),this._perObjectDataEvictionCache.delete(c),this._discardObjectEntry(s),this.setNeedsRender(),a()},n._discardObjectEntry=function(e){e&&(e.renderables.length&&(e.renderables.forEach((e=>this._removeRenderable(e))),this.setNeedsRender()),e.loaded=null)},n.hasObject=function(e){return this._perObjectData.has(e)},n.updateAllComponentOpacities=async function(e,t){const r=await this._updatingHandles.addPromise(this._getObjectEntry(e));if(null==r)return;const n=t instanceof Array?e=>t[e]:()=>t;r.renderables.forEach((e=>{const t=e.components.meta.length;for(let r=0;r<t;r++){const t=n(r),s=e.components.meta[r],i=s.index;s.material.opacity=t,e.components.buffer.textureBuffer.setDataElement(i,1,3,255*t)}this._updateTransparency(e)})),this.setNeedsRender()},n.getObjectMemoryUsage=async function(e){const t=await this._getObjectEntry(e);return null!=t?t.renderables.reduce(((e,t)=>e+t.statistics.gpuMemoryUsage),0):0},n.updateAllComponentMaterials=async function(e,t,r,n){const s=e instanceof x.Object3D,i=!!r.hasSlicePlane,a=D.determineRendererType(t),o=P.EdgeRenderer.getKey(a,i,s),c=await this._updatingHandles.addPromise(this._getObjectEntry(e));null!=c&&(c.renderables.forEach((e=>{if(o!==e.rendererKey){const t=this._renderers.get(e.rendererKey),r=this._acquireRenderer(a,i,s);t.removeRenderable(e),--t.refCount,e.rendererKey=o,r.addRenderable(e)}for(let r=0;r<t.length;r++)e.components.meta[r].material=t[r];n&&this._updateComponentBuffer(e.components),this._updateTransparency(e)})),this.setNeedsRender())},n.updateAllVerticalOffsets=async function(e,t){const r=await this._updatingHandles.addPromise(this._getObjectEntry(e));null!=r&&(r.renderables.forEach((e=>{const r=e.components.meta;for(let n=0;n<r.length;n++)e.components.meta[n].verticalOffset=t?.[n]??0;this._updateComponentBuffer(e.components)})),this.setNeedsRender())},n.updateObjectVisibility=async function(e,t){const r=await this._updatingHandles.addPromise(this._getObjectEntry(e));null!=r&&(r.renderables.forEach((e=>e.visible=t)),this.setNeedsRender())},n.removeObject=function(e){const t=this._perObjectData.get(e);t&&(this._perObjectData.delete(e),this._discardObjectEntry(t))},n._getObjectEntry=async function(e){const t=this._perObjectData.get(e);if(!t)throw new Error("no object");return await t.loaded,null==t.loaded?null:t},n.render=function(e,t){if(null==this._componentColorManager)return;this._localOrigins.updateViewMatrices(e.camera.viewMatrix);const r=e.camera.viewInverseTransposeMatrix,n=m.create(),s=new w.TwoVectorPosition;let i=0,a=0;if(this._renderers.forEach((r=>{if(0===r.refCount)this._renderers.delete(r.key),r.dispose();else{let n=!0,s=!0;r.forEachRenderable((t=>{t.visible&&(i+=t.statistics.averageEdgeLength,a++,n&&t.regular&&(r.updateTechnique(e,!1),n=!1),s&&t.silhouette&&(r.updateTechnique(e,!0),s=!1))}),t)}})),this._componentColorManager.garbageCollect(),this._componentColorManager.updateTextures(),0===a)return;const o=40*i/a,c=new V.EdgePassParameters(o,t);p.set(n,r[3],r[7],r[11]),s.set(n),p.copy(c.transformWorldFromViewTH,s.high),p.copy(c.transformWorldFromViewTL,s.low),h.fromMat4(c.transformViewFromCameraRelativeRS,e.camera.viewMatrix),h.transpose(te,c.transformViewFromCameraRelativeRS),h.invert(c.transformNormalViewFromGlobal,te),c.transformProjFromView=e.camera.projectionMatrix,this._updateObjectCameraDistances(e),this._renderers.forEach((t=>{this._renderRegularEdges(t,e,c),this._renderSilhouetteEdges(t,e,c)}))},n._updateTransparency=function(e){const t=D.determineEdgeTransparency(e.components.meta),r=D.determineObjectTransparency(e.components.meta);t===e.edgeTransparency&&r===e.objectTransparency||(e.edgeTransparency=t,e.objectTransparency=r,this._renderers.get(e.rendererKey).setRenderablesDirty())},n._computeModelTransformWithLocalOrigin=function(e,t,r){e.getCombinedShaderTransformation(t,r);const n=null!=t.localOrigin?this._localOrigins.register(t.localOrigin):this._localOrigins.acquire(p.set(this._tmpModelPosition,r[12],r[13],r[14]));return t.localOrigin=n.origin,R.applyToModelMatrix(n.origin.vec3,r),n},n._updateComponentBuffer=function(e){const{meta:t,buffer:r}=e,n=new Uint8Array(4);for(let s=0;s<t.length;s++){const e=t[s].material,i=t[s].index,o=a.clamp(Math.round(e.size*P.LINE_WIDTH_FRACTION_FACTOR),0,255),c=a.clamp(e.extensionLength,-P.EXTENSION_LENGTH_OFFSET,255-P.EXTENSION_LENGTH_OFFSET)+P.EXTENSION_LENGTH_OFFSET,d="solid"===e.type?A.EdgeType.SOLID:A.EdgeType.SKETCH,l=255*e.opacity,u=e.color,h=255*u[0],g=255*u[1],f=255*u[2],p=255*u[3];r.textureBuffer.setData(i,0,h,g,f,p),r.textureBuffer.setData(i,1,o,c,d,l),E.encodeElevationOffset(t[s].verticalOffset,n),r.textureBuffer.setData(i,2,n[0],n[1],n[2],n[3])}},n._createComponentBuffers=function(e){if(null==this._componentColorManager)return null;const t=new Array,r=this._componentColorManager.getBuffer(e.length);for(let s=0;s<e.length;s++){const n=e[s],i=r.acquireIndex();t.push({index:i,verticalOffset:0,material:n})}const n=new q(r,t);return this._updateComponentBuffer(n),n},n._extractEdges=function(e,t,r,n,s,i=s.length){return this._worker.process({data:t,indices:s,indicesLength:i,writerSettings:e,skipDeduplicate:r},this._workerAbort.signal,n)},n._createRenderable=function(e,t,r,n,s){const i=t=>null!=this._verticesBufferObject?new z(new j.VertexArrayObject(this.rctx,M.EdgeShaderAttributeLocations,{vertices:M.glVertexLayout,instances:t===U.EdgeSilhouette.REGULAR?S.RegularEdgeBufferWriter.glLayout:S.SilhouetteEdgeBufferWriter.glLayout},{vertices:this._verticesBufferObject,instances:N.BufferObject.createVertex(this.rctx,H.Usage.STATIC_DRAW,t===U.EdgeSilhouette.REGULAR?e.regular.instancesData.buffer:e.silhouette.instancesData.buffer)}),t===U.EdgeSilhouette.REGULAR?e.regular.lodInfo:e.silhouette.lodInfo):null,a=e.regular.lodInfo.lengths.length>0?i(U.EdgeSilhouette.REGULAR):null,o=e.silhouette.lodInfo.lengths.length>0?i(U.EdgeSilhouette.SILHOUETTE):null,c=(a?.vao.memoryEstimate??0)+(o?.vao.memoryEstimate??0);return new X(a,o,{gpuMemoryUsage:c,externalMemoryUsage:s,averageEdgeLength:e.averageEdgeLength},r,D.determineEdgeTransparency(t.meta),D.determineObjectTransparency(t.meta),t,n)},n._addGeometry=async function(e,t,r,n,s,i){const a=r.vertexAttributes.get(C.VertexAttribute.POSITION),o=r.indices.get(C.VertexAttribute.POSITION),c=f.create(),d=this._computeModelTransformWithLocalOrigin(e,r,c),l=new ee(a,o,c,d);return this._addPositionData(t,l,r.edgeIndicesLength,n,s,i)},n._addPositionData=async function(e,t,r,n,s,i=!1){if(null==e.loaded)return;const a=this._createComponentBuffers([n]);if(null==a||r<=0)return;const o=this._acquireRenderer(n.type,!!s.hasSlicePlane,!0),{modelTransform:c,origin:d}=t,l=t.indices,u=t.position,h=u.data.length/u.size,g=M.EdgeInputBufferLayout.createBuffer(h);for(let m=0;m<h;m++)g.position.set(m,0,u.data[m*u.size]),g.position.set(m,1,u.data[m*u.size+1]),g.position.set(m,2,u.data[m*u.size+2]);D.fillComponenBufferIndices(a.meta,[0,g.componentIndex.count],g.componentIndex);const f=await this._updatingHandles.addPromise(this._extractEdges(o.writerSettings,g,!1,i,l,r));if(null==e.loaded)return;const p=this._createRenderable(f,a,new K(c,d),o.key,!1);e.renderables.push(p),o.addRenderable(p),this._gpuMemoryUsage+=p.statistics.gpuMemoryUsage},n._addComponentGeometry=async function(e,t,r,n,s,i,a){if(null==t.loaded)return 0;const o=this._createComponentBuffers(i);if(null==o)return 0;const c=D.determineRendererType(i),d=this._acquireRenderer(c,a.hasSlicePlane||!1,!1),l=M.EdgeInputBufferLayout.createBuffer(r.length/3);b.copy(l.position.typedBuffer,r,l.position.typedBufferStride,3),D.fillComponenBufferIndices(o.meta,s,l.componentIndex,n);const u=!0,h=d.writerSettings,g=await this._updatingHandles.addPromise(this._extractEdges(h,l,u,!1,n));if(null==t.loaded)return 0;const f=this._createRenderable(g,o,e,d.key,!0);return t.renderables.push(f),d.addRenderable(f),f.statistics.gpuMemoryUsage},n._addObjectMergedGeometries=async function(e,t,r,n,s){const i=new Map;let a=0,o=null,c=0;for(let f=0;f<e.geometries.length;f++){const t=e.geometries[f];if(!t.material.supportsEdges)continue;!o&&t.localOrigin&&(o=t);const r=t.vertexAttributes.get(C.VertexAttribute.POSITION);c+=r.data.length/r.size,a+=t.edgeIndicesLength}const d=c>=65536?Uint32Array:Uint16Array,l=a?new d(a):null,u=[];let h=0;for(let f=0;f<e.geometries.length;f++){const t=e.geometries[f];if(!t.material.supportsEdges)continue;const r=t.vertexAttributes.get(C.VertexAttribute.POSITION),n=t.indices.get(C.VertexAttribute.POSITION);let s=i.get(r.data);if(null==s){s=u.length/3;for(let e=0;e<r.data.length;e+=r.size)u.push(r.data[e]),u.push(r.data[e+1]),u.push(r.data[e+2]);i.set(r.data,s)}if(n)for(let e=0;e<t.edgeIndicesLength;e++)l[h++]=s+n[e]}const g=o||e.geometries[0],p=f.create(),m=this._computeModelTransformWithLocalOrigin(e,g,p);for(let f=0;f<e.geometries.length;f++)e.geometries[f].localOrigin=m.origin;const _=new ee({data:u,size:3},l,p,m);await this._updatingHandles.addPromise(this._addPositionData(t,_,l.length,r[0],n,s))},n._acquireRenderer=function(e,t,r){const n=P.EdgeRenderer.getKey(e,t,r);let s=this._renderers.get(n);return null==this._strokesTexture&&(this._strokesTexture=L.generateStrokesTexture(this.rctx)),s||(s=new P.EdgeRenderer(this.rctx,this.techniqueRepository,{type:e,hasSlicePlane:t,strokesTexture:this._strokesTexture,legacy:r,spherical:this.viewingMode===O.ViewingMode.Global}),this._renderers.set(n,s)),++s.refCount,s},n._removeRenderable=function(e){G(e.regular),G(e.silhouette);const t=this._renderers.get(e.rendererKey);if(t){t.removeRenderable(e),--t.refCount,"origin"in e.transform&&this._localOrigins.release(e.transform.origin),this._gpuMemoryUsage-=e.statistics.externalMemoryUsage?0:e.statistics.gpuMemoryUsage;for(const t of e.components.meta)e.components.buffer.releaseIndex(t.index)}},n._updateObjectCameraDistances=function(e){const t=e.camera.eye,r=e.camera.viewForward,n=m.create(),s=e=>{p.sub(n,e.center,t);const s=p.dot(n,r),i=e.radius,a=s<-i?1/0:s<i?0:s-i;e.renderables.forEach((e=>e.distanceToCamera=a))};this._perObjectData.forEach(s),this._perObjectDataEvictionCache.forEach(s)},n._renderRegularEdges=function(e,t,r){const n=e.bindRegularEdges(r,t),s=r.transparency,i=t.camera.perScreenPixelRatio;e.forEachRenderable((s=>{if(!J(s)||!s.visible)return;const a=$(s.regular.lod.lengths,s.distanceToCamera,i);e.renderRegularEdges(n,s,r,t,a)}),s)},n._renderSilhouetteEdges=function(e,t,r){const n=e.bindSilhouetteEdges(r,t),s=r.transparency,i=t.camera.perScreenPixelRatio;e.forEachRenderable((s=>{if(!Z(s)||!s.visible)return;const a=$(s.silhouette.lod.lengths,s.distanceToCamera,i);e.renderSilhouetteEdges(n,s,r,t,a)}),s)},t._createClass(r,[{key:"updating",get:function(){return this._updatingHandles.updating}},{key:"usedMemory",get:function(){return this._gpuMemoryUsage}},{key:"test",get:function(){return{hasRenderedPrimitives:e=>{let t=!1;const r=e.perScreenPixelRatio,n=(e,n)=>e.forEachRenderable((e=>{e.visible&&!t&&(J(e)&&(t=$(e.regular.lod.lengths,e.distanceToCamera,r)>0),!t&&Z(e)&&(t=$(e.silhouette.lod.lengths,e.distanceToCamera,r)>0))}),n);return this._renderers.forEach((e=>{t||(n(e,I.Transparency.OPAQUE),n(e,I.Transparency.TRANSPARENT))})),t}}}}]),r}(n),r.__decorate([c.property({constructOnly:!0})],e.EdgeView.prototype,"rctx",void 0),r.__decorate([c.property({constructOnly:!0})],e.EdgeView.prototype,"renderSR",void 0),r.__decorate([c.property({constructOnly:!0})],e.EdgeView.prototype,"viewingMode",void 0),r.__decorate([c.property({constructOnly:!0})],e.EdgeView.prototype,"techniqueRepository",void 0),r.__decorate([c.property({constructOnly:!0})],e.EdgeView.prototype,"setNeedsRender",void 0),r.__decorate([c.property({constructOnly:!0})],e.EdgeView.prototype,"schedule",void 0),r.__decorate([c.property({readOnly:!0})],e.EdgeView.prototype,"_updatingHandles",void 0),r.__decorate([c.property({readOnly:!0})],e.EdgeView.prototype,"updating",null),e.EdgeView=r.__decorate([u.subclass("esri.views.3d.webgl-engine.lib.edgeRendering.EdgeView")],e.EdgeView);let W=t._createClass((function(e,t,r){this.center=t,this.radius=r,this.renderables=new Array,this.loaded=e,this.loaded.then((()=>{null!=this.loaded&&(this.loaded=!0)}))})),q=t._createClass((function(e,t){this.buffer=e,this.meta=t})),z=t._createClass((function(e,t){this.vao=e,this.lod=t})),K=t._createClass((function(e,t){this.modelMatrix=e,this.origin=t})),X=t._createClass((function(e,t,r,n,s,i,a,o){this.regular=e,this.silhouette=t,this.statistics=r,this.transform=n,this.edgeTransparency=s,this.objectTransparency=i,this.components=a,this.rendererKey=o,this.distanceToCamera=0,this.visible=!0})),Q=function(e){function r(){return e.apply(this,arguments)||this}return t._inherits(r,e),t._createClass(r)}(X);function J(e){return null!=e.regular}let Y=function(e){function r(){return e.apply(this,arguments)||this}return t._inherits(r,e),t._createClass(r)}(X);function Z(e){return null!=e.silhouette}function $(e,t,r){const n=t*r,i=s.binaryIndexOf(e,n,!0);return-1===i?n<e[0]?e.length:0:e.length-i}let ee=t._createClass((function(e,t,r,n){this.position=e,this.indices=t,this.modelTransform=r,this.origin=n}));const te=g.create(),re=()=>Promise.reject();e.LegacyTransform=K,e.RegularRenderable=Q,e.Renderable=X,e.SilhouetteRenderable=Y,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
