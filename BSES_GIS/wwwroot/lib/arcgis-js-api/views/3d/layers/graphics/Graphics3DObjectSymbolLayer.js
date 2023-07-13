/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../Color","../../../../core/has","../../../../core/promiseUtils","../../../../core/screenUtils","../../../../core/typedArrayUtil","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4f64","../../../../geometry/projection","../../../../geometry/support/aaBoundingBox","../../../../symbols/support/ObjectSymbol3DLayerResource","../../../../symbols/support/symbolLayerUtils3D","./ElevationAligners","./elevationAlignmentUtils","./ElevationContext","./Graphics3DLodInstanceGraphicLayer","./Graphics3DSymbolLayer","./graphicUtils","./interfaces","./Loadable","./lodResourceUtils","./objectResourceUtils","./pointUtils","./primitiveObjectSymbolUtils","./symbolComplexity","./webStyleUtils","../support/FastSymbolUpdates","../../webgl-engine/lib/basicInterfaces","../../webgl-engine/lib/VertexAttribute","../../webgl-engine/lib/lodRendering/LodRenderer","../../webgl-engine/lib/lodRendering/LodResources","../../webgl-engine/materials/DefaultMaterial","../../webgl-engine/materials/pbrUtils"],(function(e,t,r,s,i,a,o,n,l,c,h,d,u,p,m,y,f,_,b,g,R,P,v,x,S,L,C,E,O,A,U,T,w,F,I,B,D){"use strict";let G=t._createClass((function(e,t,r,s,i,a,o,n,l,c,h,d){this.lodResources=e,this.lodRenderer=t,this.stageResources=r,this.originalMaterialParameters=s,this.resourceSize=i,this.isEsriSymbolResource=a,this.isWosr=o,this.resourceBoundingBox=n,this.symbolSize=l,this.extentPadding=c,this.physicalBasedRenderingEnabled=h,this.pivotOffset=d})),z=function(e){t._inherits(R,e);var l=R.prototype;function R(t,r,s,i){var a;return(a=e.call(this,t,r,s,i)||this)._resources=null,a._optionalFields=new Array,a._instanceIndexToGraphicUid=new Map,a._hasLoadedPBRTextures=!1,a._disposeResourceHandles=new Array,a.skipHighSymbolLodsChanged=!1,a.ensureDrapedStatus(!1),a._hasLoadedPBRTextures=s.physicalBasedRenderingEnabled,a}return l.getCachedSize=function(){const[e,t,r]=null!=this._resources?this._resources.symbolSize:[1,1,1];return{width:e,depth:t,height:r}},l.doLoad=async function(e){if(!this._drivenProperties.size){if(P.validateSymbolLayerSize(this.symbolLayer))throw new Error}if(this._isPrimitive){const t=this.symbolLayer.resource,r=t&&E.isValidPrimitive(t.primitive)?t.primitive:m.defaultPrimitive;this._resources=await this._createResourcesForPrimitive(r,e)}else{const t=await A.getResourceUrlFromSymbolStyle(this.symbol.styleOrigin),r=t?.href??this.symbolLayer.resource.href;this._resources=await this._createResourcesForUrl(r,e)}this.layerOpacityChanged(),this.slicePlaneEnabledChanged(),this.physicalBasedRenderingChanged(),this.complexity=this.computeComplexity()},l._setMaterialTransparencyParams=function(e,t=this.symbolLayer?.material?.color){const r=this._getCombinedOpacity(t),s=r<1||this.needsDrivenTransparentPass;return e.transparent=s,e.opacity=r,e.cullFace=s?T.CullFaceOptions.None:T.CullFaceOptions.Back,e},l._createResourcesForPrimitive=async function(e,t){const i=this.symbolLayer,o=p.create(y.objectSymbolLayerPrimitiveBoundingBox(e)),n=h.fromArray(p.size(o)),l=h.fromArray(y.objectSymbolLayerSizeWithResourceSize(n,i)),u=c.length(l),m=!1,f=!1,_={usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0,mrrFactors:[...D.defaultSchematicMRRFactors],ambient:h.ONES,diffuse:h.ONES,hasSlicePlane:this._context.slicePlaneEnabled,hasSliceHighlight:!1,castShadows:this.symbolLayer.castShadows,offsetTransparentBackfaces:!this.symbolLayer.isPrimitive},b=!!_.usePBR;this._setMaterialTransparencyParams(_);const g=this.symbol;if("point-3d"===g.type&&g.verticalOffset){const{screenLength:e,minWorldLength:t,maxWorldLength:r}=g.verticalOffset;_.verticalOffset={screenLength:a.pt2px(e),minWorldLength:t||0,maxWorldLength:null!=r?r:1/0},_.castShadows=!1}if(this._context.screenSizePerspectiveEnabled&&(_.screenSizePerspective=this._context.sharedResources.screenSizePerspectiveSettings),this._drivenProperties.color)_.externalColor=d.ONES;else{const e=null!=i.material?i.material.color:null,t=null!=e?r.toUnitRGBA(e):d.ONES;_.externalColor=t}this._fastUpdates=U.initFastSymbolUpdatesState(this._context.renderer,this._fastVisualVariableConvertOptions(o,l,n,null)),_.isInstanced=!0,this._fastUpdates?(Object.assign(_,this._fastUpdates.materialParameters),this._optionalFields.push(w.VertexAttribute.FEATUREATTRIBUTE)):this._hasPerInstanceColor()&&(_.hasInstancedColor=!0,this._optionalFields.push(w.VertexAttribute.COLOR)),s("enable-feature:objectAndLayerId-rendering")&&this._optionalFields.push(w.VertexAttribute.OBJECTANDLAYERIDCOLOR);const R=new B.DefaultMaterial(_),P=E.primitiveLodResources(e,R);if(!P)throw new Error(`Unknown object symbol primitive: ${e}`);const v=I.materialsFromLodResources(P).map((e=>({opacity:1,transparent:e.parameters.transparent}))),x=await this._createStageResources(P,b,t),S=await this._createLodRenderer(P,t);return new G(P,S,x,v,n,m,f,o,l,u,b,null)},l._createResourcesForUrl=async function(e,t){const r={materialParamsMixin:{isInstanced:!0,hasSlicePlane:this._context.slicePlaneEnabled,castShadows:this.symbolLayer.castShadows},streamDataRequester:this._context.streamDataRequester,cache:this._context.sharedResources.objectResourceCache};this._fastUpdates=U.initFastSymbolUpdatesState(this._context.renderer,this._fastVisualVariableConvertOptions(null,null,null,null)),this._fastUpdates?(Object.assign(r.materialParamsMixin,this._fastUpdates.materialParameters),this._optionalFields.push(w.VertexAttribute.FEATUREATTRIBUTE)):this._hasPerInstanceColor()&&(r.materialParamsMixin.hasInstancedColor=!0,this._optionalFields.push(w.VertexAttribute.COLOR)),s("enable-feature:objectAndLayerId-rendering")&&this._optionalFields.push(w.VertexAttribute.OBJECTANDLAYERIDCOLOR);const i=this.symbol;if("point-3d"===i.type&&i.verticalOffset){const{screenLength:e,minWorldLength:t,maxWorldLength:s}=i.verticalOffset;r.materialParamsMixin.verticalOffset={screenLength:a.pt2px(e),minWorldLength:t||0,maxWorldLength:null!=s?s:1/0},r.materialParamsMixin.castShadows=!1}r.signal=t,r.usePBR=this._context.physicalBasedRenderingEnabled,r.skipHighLods=this._context.skipHighSymbolLods;const o=r.usePBR,n=await L.fetch(e,r),l=n.isEsriSymbolResource,d=n.isWosr,u=S.makeLodResources(n.lods);u.levels.sort(((e,t)=>e.minScreenSpaceRadius-t.minScreenSpaceRadius));const m=this._context,f=this.symbolLayer.material,_=this._getExternalColorParameters(f),b=this.symbolLayer?.material?.color,g=this._getCombinedOpacity(b,{hasIntrinsicColor:!0}),R=this.needsDrivenTransparentPass,P=I.materialsFromLodResources(u),v=I.materialsFromLodResources(u).map((e=>({opacity:e.parameters.opacity||1,transparent:e.parameters.transparent})));P.forEach((e=>{const t=e.parameters;e.setParameters(_);const r=t.opacity*g,s=r<1||R||t.transparent;e.setParameters({opacity:r,transparent:s}),m.screenSizePerspectiveEnabled&&e.setParameters({screenSizePerspective:m.sharedResources.screenSizePerspectiveSettings})}));const x=n.referenceBoundingBox,C=h.fromArray(p.size(x)),E=h.fromArray(u.levels[0].pivotOffset),O=h.fromArray(y.objectSymbolLayerSizeWithResourceSize(C,this.symbolLayer)),A=c.length(O),T=this._fastUpdates;U.updateFastSymbolUpdatesState(T,this._context.renderer,this._fastVisualVariableConvertOptions(x,O,C,E))&&P.forEach((e=>e.setParameters(T.materialParameters)));const F=await this._createStageResources(u,o,t),B=await this._createLodRenderer(u,t);return new G(u,B,F,v,C,l,d,x,O,A,o,E)},l._addDisposeResource=function(e){this._disposeResourceHandles.push(e)},l._createStageResources=async function(e,t,r){const s=this._context.stage,a=I.materialsFromLodResources(e);t!==this._context.physicalBasedRenderingEnabled&&this.physicalBasedRenderingChanged(),s.addMany(a),this._addDisposeResource((()=>s.removeMany(a)));const o=I.texturesFromLodResources(e);s.addMany(o),this._addDisposeResource((()=>s.removeMany(o))),await s.load(o,r),i.throwIfAborted(r);const n=I.geometriesFromLodResources(e);return s.addMany(n),this._addDisposeResource((()=>s.removeMany(n))),{materials:a,textures:o,geometries:n}},l._createLodRenderer=async function(e,t){const r=this._context.stage,s={layerUid:this._context.layer.uid,graphicUid:e=>this._instanceIndexToGraphicUid.get(e),notifyGraphicGeometryChanged:e=>this._context.notifyGraphicGeometryChanged(this._instanceIndexToGraphicUid.get(e)),notifyGraphicVisibilityChanged:e=>this._context.notifyGraphicVisibilityChanged(this._instanceIndexToGraphicUid.get(e))},i=this._fastUpdates,a=i?{applyTransform:(e,t,r)=>{e.getFeatureAttribute(t,k),n.copy(r,U.evaluateModelTransform(i.materialParameters,k,r))},scaleFactor:(e,t,r)=>{t.getFeatureAttribute(r,k),U.evaluateModelTransformScale(e,i.materialParameters,k)}}:null,o=new F.LodRenderer({symbol:e,optionalFields:this._optionalFields,metadata:s,shaderTransformation:a},this._context.scheduler);return o.slicePlaneEnabled=this._context.slicePlaneEnabled,this._addDisposeResource((()=>{r.removeRenderPlugin(o),o.destroy()})),await r.addRenderPlugin(o.slots,o,t),o},l._getExternalColorParameters=function(e){const t={};return this._drivenProperties.color?t.externalColor=d.ONES:null!=e&&null!=e.color?t.externalColor=r.toUnitRGBA(e.color):(t.externalColor=d.ONES,t.colorMixMode="ignore"),t},l.destroy=function(){t._get(t._getPrototypeOf(R.prototype),"destroy",this).call(this),this._cleanupResources()},l._cleanupResources=function(){this._disposeResourceHandles.forEach((e=>e())),this._disposeResourceHandles.length=0,this._resources=null},l.createGraphics3DGraphic=function(e){const t=e.graphic;if(!this._validateGeometry(t.geometry))return null;const r=C.placePointOnGeometry(t.geometry);if(null==r)return this.logger.warn(`unsupported geometry type for icon symbol: ${t.geometry.type}`),null;const s=this.setGraphicElevationContext(t,new b.ElevationContext),i=e.renderingInfo;return this._createAs3DShape(t,r,i,s,t.uid,e.layer.uid)},l.notifyDestroyGraphicLayer=function(e){this._instanceIndexToGraphicUid.delete(e.instanceIndex)},l.graphicLayerToGraphicId=function(){return 0},l.layerOpacityChanged=function(){if(null==this._resources)return;const e=this._drivenProperties.opacity,t=!this._isPrimitive,r=this._resources.stageResources.materials,s=this._resources.originalMaterialParameters;for(let i=0;i<r.length;i++){const a=r[i],o=this.symbolLayer?.material?.color,n=s[i],l=this._getCombinedOpacity(o,{hasIntrinsicColor:t})*n.opacity,c=l<1||e||n.transparent;a.setParameters({opacity:l,transparent:c}),this._isPrimitive&&a.setParameters({cullFace:c?T.CullFaceOptions.None:T.CullFaceOptions.Back})}},l.layerElevationInfoChanged=function(e,t){return this.updateGraphics3DGraphicElevationInfo(e,t,_.needsElevationUpdates3D)},l.slicePlaneEnabledChanged=function(){if(null==this._resources)return!0;this._resources.lodRenderer.slicePlaneEnabled=this._context.slicePlaneEnabled;for(const e of this._resources.stageResources.materials)e.setParameters({hasSlicePlane:this._context.slicePlaneEnabled});return!0},l.physicalBasedRenderingChanged=function(){if(null==this._resources)return!0;const{stageResources:e,isWosr:t}=this._resources;for(const r of e.materials)this._isPrimitive?r.setParameters({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0}):t||r.setParameters({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!1});return!1!==this._hasLoadedPBRTextures||!0!==this._context.physicalBasedRenderingEnabled||(this._hasLoadedPBRTextures=!0,!1)},l.applyRendererDiff=function(e,t){if(null==this._resources)return v.ApplyRendererDiffResult.RecreateSymbol;const{stageResources:{materials:r},lodRenderer:s,resourceBoundingBox:i,symbolSize:a,resourceSize:o,pivotOffset:n}=this._resources;for(const l in e.diff){if("visualVariables"!==l)return v.ApplyRendererDiffResult.RecreateSymbol;if(!U.updateFastSymbolUpdatesState(this._fastUpdates,t,this._fastVisualVariableConvertOptions(i,a,o,n)))return v.ApplyRendererDiffResult.RecreateSymbol;for(const e of r)e.setParameters(this._fastUpdates.materialParameters);s.notifyShaderTransformationChanged()}return v.ApplyRendererDiffResult.FastUpdate},l.computeComplexity=function(){if(null==this._resources)return t._get(t._getPrototypeOf(R.prototype),"computeComplexity",this).call(this);const e=this._resources.lodResources,r=I.geometriesFromLodLevelResources(e.levels[0]).reduce(((e,t)=>e+t.indices.get(w.VertexAttribute.POSITION).length),0)/3,s=e=>Array.from(e.vertexAttributes.values()).reduce(((e,t)=>e+o.estimateSize(t.data)),0)+Array.from(e.indices.values()).reduce(((e,t)=>e+o.estimateSize(t)),0),i=I.texturesFromLodResources(e).reduce(((e,t)=>e+(t.parameters.encoding&&"image/ktx2"===t.parameters.encoding?t.memoryEstimate:t.memoryEstimate/4)),0)+I.geometriesFromLodResources(e).reduce(((e,t)=>e+s(t)),0);return{primitivesPerFeature:r,primitivesPerCoordinate:0,drawCallsPerFeature:0,estimated:!1,memory:{...O.defaultSymbolLayerMemoryComplexity(this.symbol,this.symbolLayer),resourceBytes:i}}},l._hasLodRenderer=function(){return null!=this._resources},l._createAs3DShape=function(e,t,r,s,i,a){if(!this._hasLodRenderer()||null==this._resources)return null;const o=this.getFastUpdateAttrValues(e),n=this._context.clippingExtent;if(u.projectPointToVector(t,V,this._context.elevationProvider.spatialReference),null!=n&&!p.containsPoint(n,V))return null;const l=this._requiresTerrainElevation(s),c=this._computeGlobalTransform(t,s,j,H),h=this._computeLocalTransform(this._resources,this.symbolLayer,r,M),d=this._resources.lodRenderer.instanceData,m=d.addInstance();this._instanceIndexToGraphicUid.set(m,i),d.setLocalTransform(m,h,!1),d.setGlobalTransform(m,c),o&&d.setFeatureAttribute(m,o),null==this._fastUpdates&&this._hasPerInstanceColor()&&d.setColor(m,P.mixinColorAndOpacity(r.color,r.opacity,255)),null!=this._context.stage.renderView.objectAndLayerIdRenderHelper&&d.setObjectAndLayerIdColor(m,this._context.stage.renderView.objectAndLayerIdRenderHelper.getObjectAndLayerIdColor({graphicUid:i,layerUid:a}));const y=new g(this,m,f.perLodInstanceElevationAligner,s);return l&&(y.alignedSampledElevation=H.sampledElevation),y.needsElevationUpdates=_.needsElevationUpdates3D(s.mode),C.extendPointGraphicElevationContext(y,t,this._context.elevationProvider),y},l._computeGlobalTransform=function(e,t,r,s){return _.evaluateElevationInfoAtPoint(e,this._context.elevationProvider,t,this._context.renderCoordsHelper,s),V[0]=e.x,V[1]=e.y,V[2]=s.z,u.computeTranslationToOriginAndRotation(e.spatialReference,V,r,this._context.renderCoordsHelper.spatialReference),r},l._computeLocalTransform=function(e,t,r,s){return n.identity(s),this._applyObjectRotation(r,!1,s),this._applyObjectRotation(t,!0,s),this._applyObjectScale(e,r,s),this._applyAnchor(e,t,s),s},l._applyObjectScale=function(e,t,r){if(this._fastUpdates?.requiresShaderTransformation)return;const s=this._drivenProperties.size&&t.size?t.size:e.symbolSize,i=P.computeObjectScale(s,e.symbolSize,e.resourceSize,this._context.renderCoordsHelper.unitInMeters);1===i[0]&&1===i[1]&&1===i[2]||n.scale(r,r,i)},l.prepareSymbolLayerPatch=function(e){if("partial"!==e.diff.type)return;const t=e.diff.diff;this._preparePatchTransform(e,t),this._preparePatchColor(e,t)},l.updateGeometry=function(e,t){if(null==this._resources)return!0;const r=t&&C.placePointOnGeometry(t);if(null==r)return!1;const s=this.getGeometryElevationMode(t);return e.elevationContext.mode===s&&(this._computeGlobalTransform(r,e.elevationContext,j,H),this._requiresTerrainElevation(e.elevationContext)&&(e.alignedSampledElevation=H.sampledElevation),this._resources.lodRenderer.instanceData.setGlobalTransform(e.instanceIndex,j,!0),C.extendPointGraphicElevationContext(e,r,this._context.elevationProvider),!0)},l._preparePatchTransform=function(e,t){if(!(t.heading||t.tilt||t.roll||t.width||t.height||t.depth||t.anchor||t.anchorPosition))return;if(null==this._resources)return;const r=(e,t,r)=>(null!=e&&"complete"===e.type?e.newValue:t)??r,s=r(t.heading,this.symbolLayer.heading,0),i=r(t.tilt,this.symbolLayer.tilt,0),a=r(t.roll,this.symbolLayer.roll,0),o=r(t.width,this.symbolLayer.width,void 0),n=r(t.height,this.symbolLayer.height,void 0),l=r(t.depth,this.symbolLayer.depth,void 0),c=r(t.anchor,this.symbolLayer.anchor,void 0),d=r(t.anchorPosition,this.symbolLayer.anchorPosition,void 0);delete t.heading,delete t.tilt,delete t.roll,delete t.width,delete t.height,delete t.depth,delete t.anchor,delete t.anchorPosition;const u={heading:s,tilt:i,roll:a,anchor:c,anchorPosition:d},p=this._resources;this.loadStatus===x.LoadStatus.LOADED&&e.symbolLayerStatePatches.push((()=>{p.symbolSize=h.fromArray(y.objectSymbolLayerSizeWithResourceSize(p.resourceSize,{width:o,height:n,depth:l,isPrimitive:this.symbolLayer.isPrimitive}))})),e.graphics3DGraphicPatches.push(((e,t)=>{const r=this._computeLocalTransform(p,u,t,M),s=e.instanceIndex;p.lodRenderer.instanceData.setLocalTransform(s,r,!0)}))},l._preparePatchColor=function(e,t){if(!t.material||"partial"!==t.material.type)return;const s=t.material.diff;if(!s.color||"complete"!==s.color.type||null==s.color.newValue||null==s.color.oldValue)return;const i=s.color.newValue,a=null!=i?r.toUnitRGBA(i):d.ONES;delete s.color;const o=this._resources;null!=o&&e.graphics3DGraphicPatches.push((e=>{let t;this._hasPerInstanceColor()?(o.lodRenderer.instanceData.setColor(e.instanceIndex,a),t=this._setMaterialTransparencyParams({},i)):t=this._setMaterialTransparencyParams({externalColor:a},i);for(const r of o.stageResources.materials)r.setParameters(t)}))},l._requiresTerrainElevation=function(e){return"absolute-height"!==e.mode},l._applyObjectRotation=function(e,t,r){if(!this._fastUpdates?.requiresShaderTransformation||!t)return P.computeObjectRotation(e.heading,e.tilt,e.roll,r)},l._computeAnchor=function(e,t,r){const s=h.create();switch(r.anchor){case"center":c.copy(s,p.center(e)),c.negate(s,s);break;case"top":{const t=p.center(e);c.set(s,-t[0],-t[1],-e[5]);break}case"bottom":{const t=p.center(e);c.set(s,-t[0],-t[1],-e[2]);break}case"relative":{const t=p.center(e),i=p.size(e),a=r.anchorPosition,o=a?h.fromValues(a.x,a.y,a.z):h.ZEROS;c.multiply(s,i,o),c.add(s,s,t),c.negate(s,s);break}default:null!=t?c.negate(s,t):c.copy(s,h.ZEROS)}return s},l._applyAnchor=function(e,t,r){if(this._fastUpdates?.requiresShaderTransformation)return;const s=this._computeAnchor(e.resourceBoundingBox,e.pivotOffset,t);s&&n.translate(r,r,s)},l._hasPerInstanceColor=function(){return this._drivenProperties.color||this._drivenProperties.opacity},l._fastVisualVariableConvertOptions=function(e,t,r,s){const i=null!=e?h.fromArray(p.size(e)):h.ONES,a=null!=e?this._computeAnchor(e,s,this.symbolLayer):h.ZEROS,o=this._context.renderCoordsHelper.unitInMeters,n=P.computeObjectScale(null!=t?t:void 0,t,r,o),l=h.fromValues(this.symbolLayer.tilt||0,this.symbolLayer.roll||0,this.symbolLayer.heading||0);return new U.ConvertOptions({size:!0,color:!0,rotation:!0,opacity:!1},i,t??h.ONES,o,a,n,l)},t._createClass(R,[{key:"extentPadding",get:function(){return null!=this._resources?this._resources.extentPadding:0}},{key:"_isPrimitive",get:function(){return!this.symbolLayer.resource?.href}},{key:"lodRenderer",get:function(){return this._resources?.lodRenderer}}]),R}(R.Graphics3DSymbolLayer);const V=h.create(),M=l.create(),j=l.create(),k=d.create(),H=new _.SampleElevationInfo;e.Graphics3DObjectSymbolLayer=z,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));