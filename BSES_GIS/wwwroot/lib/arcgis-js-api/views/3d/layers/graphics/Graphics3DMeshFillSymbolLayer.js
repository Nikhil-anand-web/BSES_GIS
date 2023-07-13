/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../Color","../../../../core/has","../../../../core/mathUtils","../../../../chunks/mat3","../../../../chunks/mat3f64","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4f64","../../../../geometry/projection","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/FloatArray","../../../../geometry/support/Indices","../../../../geometry/support/MeshComponent","../../../../geometry/support/MeshMaterialMetallicRoughness","../../../../geometry/support/MeshTextureTransform","../../../../chunks/vec32","../../../../geometry/support/meshUtils/projection","../../../../layers/graphics/dehydratedFeatures","../../../../layers/graphics/sources/interfaces","../../../ViewingMode","../../glTF/internal/resourceUtils","../../glTF/internal/TextureTransformUtils","./ElevationAligners","./elevationAlignmentUtils","./ElevationContext","./Graphics3DMeshObject3DGraphicLayer","./Graphics3DObject3DGraphicLayer","./Graphics3DSymbolLayer","./MeshFastUpdateProcessor","../support/edgeUtils","../support/symbolColorUtils","../../support/debugFlags","../../webgl-engine/lib/Attribute","../../webgl-engine/lib/basicInterfaces","../../webgl-engine/lib/ContentObjectType","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/Object3D","../../webgl-engine/lib/Texture","../../webgl-engine/lib/VertexAttribute","../../webgl-engine/materials/DefaultMaterial","../../webgl-engine/materials/NativeLineMaterial","../../webgl-engine/materials/pbrUtils","../../../webgl/enums"],(function(e,t,r,n,a,o,i,s,l,c,u,h,f,m,p,d,x,g,T,_,b,y,v,A,C,M,O,P,w,E,R,I,N,F,S,B,U,V,j,L,D,G,$,k,H,W,q){"use strict";const z=["mesh"];let Y=function(e){function n(t,r,n,a){var o;return(o=e.call(this,t,r,n,a)||this)._materialInfoCache=new N.MaterialInfoCache,o._fastUpdateProcessor=new N.MeshFastUpdateProcessor,o._textures=new Map,o.ensureDrapedStatus(!1),o}t._inherits(n,e);var i=n.prototype;return i.doLoad=async function(){B.DRAW_MESH_GEOMETRY_NORMALS&&(this._debugVertexNormalMaterial=new H.NativeLineMaterial({color:[1,0,1,1]}),this._debugFaceNormalMaterial=new H.NativeLineMaterial({color:[0,1,1,1]}))},i.destroy=function(){t._get(t._getPrototypeOf(n.prototype),"destroy",this).call(this),this._context.stage.removeMany(this._materialInfoCache.materials),this._context.stage.removeMany(Array.from(this._textures.values())),this._materialInfoCache.clear(),this._textures.clear(),this._fastUpdateProcessor.destroy(this._context.stage)},i.createGraphics3DGraphic=function(e){const t=e.graphic;if(!this._validateGeometry(t.geometry,z,"fill on mesh-3d"))return null;const r=this.setGraphicElevationContext(t,new w.ElevationContext),n=e.renderingInfo;return this._createAs3DShape(t,n,r,t.uid)},i.onRemoveGraphic=function(e){this._fastUpdateProcessor.onRemoveGraphic(e,this._materialInfoCache,this._context)},i.layerOpacityChanged=function(e,t){const r=this._getLayerOpacity();this._updateMaterialParameters((e=>{e.material.setParameters({layerOpacity:r});const t=e.material.parameters;this._setMaterialTransparentParameter(t,e),e.material.setParameters({transparent:t.transparent})})),e.forEach((e=>{const n=t(e);null!=n&&n.layerOpacityChanged(r,this._context.isAsync)}))},i.layerElevationInfoChanged=function(e,t){return this.updateGraphics3DGraphicElevationInfo(e,t,P.needsElevationUpdates3D)},i.slicePlaneEnabledChanged=function(e,t){return this._updateMaterialParameters((({material:e})=>{e.setParameters({hasSlicePlane:this._context.slicePlaneEnabled})})),e.forEach((e=>{const r=t(e);null!=r&&r.slicePlaneEnabledChanged(this._context.slicePlaneEnabled,this._context.isAsync)})),!0},i.physicalBasedRenderingChanged=function(){const e=this._usePBR();return this._updateMaterialParameters((({material:t})=>t.setParameters({usePBR:e}))),!0},i.updateTransform=function(e,t,r,n){const a=this._context.renderCoordsHelper.spatialReference,o=ne,{origin:i,transform:s}=r;switch(f.computeTranslationToOriginAndRotation(t,c.set(K,i.x,i.y,i.z??0),o,a),n){case v.MeshTransformUpdateAction.EnableFastUpdates:this._fastUpdateProcessor.enable(e,this._materialInfoCache,this._context);break;case v.MeshTransformUpdateAction.DisableFastUpdates:this._fastUpdateProcessor.disable(e,this._materialInfoCache,this._context);break;case v.MeshTransformUpdateAction.UpdateFastLocalOrigin:e.updateFastLocalOrigin(o,s,this._context.localOriginFactory)}const{elevationContext:l}=e;l.centerPointInElevationSR=this._getCenterPointInElevationSR(o);const{elevationProvider:u,renderCoordsHelper:h}=this._context,m=(e,t)=>P.evaluateElevationInfoAtPoint(e,u,l,h,t);return e.alignedSampledElevation=O.perObjectElevationAligner(e,l,u.spatialReference,m,h,o),e.updateTransform(o,s,this._context.isAsync),!0},i._requiresSymbolVertexColors=function(){return this._drivenProperties.color||this._drivenProperties.opacity},i._colorOrTextureUid=function(e){return null==e?"-":e instanceof r?e.toHex():e.contentHash},i._materialPropertiesDefault=function(e,t){const r=this._requiresSymbolVertexColors(),n=!!e.vertexAttributes.color,a=!!e.vertexAttributes.tangent;return{hasSymbolVertexColors:r,hasVertexColors:n,hasVertexTangents:a,uid:`vc:${n},vt:${a},vct${t},svc:${r}`}},i._textureTransformUid=function(e){const{offset:t,scale:r,rotation:n}=e??ie;return`${t[0]},${t[1]},${n},${r[0]},${r[1]}`},i._materialProperties=function(e,t,r){const n=this._materialPropertiesDefault(e,r);if(!t.material)return n;const{color:a,colorTexture:o,colorTextureTransform:i,normalTexture:s,normalTextureTransform:l,doubleSided:c,alphaCutoff:u,alphaMode:h}=t.material,f=this._colorOrTextureUid(a),m=this._colorOrTextureUid(o),p=this._textureTransformUid(i),d=this._colorOrTextureUid(s),x=this._textureTransformUid(l);if(n.color=a,n.colorTexture=o,n.normalTexture=s,n.uid=`${n.uid},cmuid:${f},ctmuid:${m},cttuid:${p},ntmuid:${d},nttuid:${x},ds:${c},ac:${u},am:${h}`,t.material instanceof g){const{metallic:e,roughness:r,metallicRoughnessTexture:a,metallicRoughnessTextureTransform:o,emissiveColor:s,emissiveTexture:c,emissiveTextureTransform:u,occlusionTexture:h,occlusionTextureTransform:f}=t.material,m=this._colorOrTextureUid(a),p=this._textureTransformUid(o),d=this._colorOrTextureUid(s),x=this._colorOrTextureUid(c),g=this._textureTransformUid(u),T=this._colorOrTextureUid(h),_=this._textureTransformUid(f);n.metallic=e,n.roughness=r,n.metallicRoughnessTexture=a,n.emissiveColor=s,n.emissiveTexture=c,n.occlusionTexture=h,n.colorTextureTransform=this._convertTextureTransform(i),n.normalTextureTransform=this._convertTextureTransform(l),n.emissiveTextureTransform=this._convertTextureTransform(u),n.occlusionTextureTransform=this._convertTextureTransform(f),n.metallicRoughnessTextureTransform=this._convertTextureTransform(o),n.uid=`${n.uid},mrm:${e},mrr:${r},mrt:${m},mrtt:${p},emuid:${d},etmuid:${x},ett:${g},otmuid:${T},ott:${_}`}return n},i._convertTextureTransform=function(e){if(!e)return null;const{scale:t,offset:r,rotation:n}=e;return{scale:t,offset:r,rotation:a.deg2rad(n)}},i._setInternalColorValueParameters=function(e,t){t.diffuse=r.toUnitRGB(e),t.opacity=e.a},i._getLoadableTextureResource=function(e){return e.data?e.data:e.url},i._getInternalTextureId=function(e){const t=this._getInternalTexture(e,V.AlphaDiscardMode.Opaque);return null!=t?t.id:null},i._getInternalTexture=function(e,t){const r=this._getLoadableTextureResource(e);if(!r)return null;const n=`${e.contentHash}/${t}`;let a=this._textures.get(n);return a||(a=new G.Texture(C.isEncodedMeshTexture(r)?r.data:r,{mipmap:!0,wrap:this._castTextureWrap(e.wrap),noUnpackFlip:!0,preMultiplyAlpha:!C.isEncodedMeshTexture(r)&&t!==V.AlphaDiscardMode.Opaque,encoding:C.isEncodedMeshTexture(r)&&null!=r.encoding?r.encoding:void 0}),this._textures.set(n,a),this._context.stage.add(a),this._context.stage.loadImmediate(a)),a},i._castTextureWrap=function(e="repeat"){if("string"==typeof e){const t=this._castTextureWrapIndividual(e);return{s:t,t}}return{s:this._castTextureWrapIndividual(e.horizontal),t:this._castTextureWrapIndividual(e.vertical)}},i._castTextureWrapIndividual=function(e){switch(e){case"clamp":return q.TextureWrapMode.CLAMP_TO_EDGE;case"mirror":return q.TextureWrapMode.MIRRORED_REPEAT;default:return q.TextureWrapMode.REPEAT}},i._setInternalMaterialParameters=function(e,t){if(null!=e.color&&this._setInternalColorValueParameters(e.color,t),null!=e.colorTexture){const r=this._getInternalTexture(e.colorTexture,t.textureAlphaMode);null!=r?(t.textureId=r.id,t.textureAlphaPremultiplied=!!r.parameters.preMultiplyAlpha):t.textureId=void 0}null!=e.normalTexture&&(t.normalTextureId=this._getInternalTextureId(e.normalTexture)),null!=e.emissiveColor&&(t.emissiveFactor=r.toUnitRGB(e.emissiveColor)),null!=e.emissiveTexture&&(t.emissiveTextureId=this._getInternalTextureId(e.emissiveTexture)),null!=e.occlusionTexture&&(t.occlusionTextureId=this._getInternalTextureId(e.occlusionTexture)),null!=e.metallicRoughnessTexture&&(t.metallicRoughnessTextureId=this._getInternalTextureId(e.metallicRoughnessTexture)),t.colorTextureTransformMatrix=M.getTransformMatrix(e.colorTextureTransform),t.normalTextureTransformMatrix=M.getTransformMatrix(e.normalTextureTransform),t.occlusionTextureTransformMatrix=M.getTransformMatrix(e.occlusionTextureTransform),t.emissiveTextureTransformMatrix=M.getTransformMatrix(e.emissiveTextureTransform),t.metallicRoughnessTextureTransformMatrix=M.getTransformMatrix(e.metallicRoughnessTextureTransform)},i._setExternalMaterialParameters=function(e){const t=this._drivenProperties.color;let n=null!=this.symbolLayer.material?this.symbolLayer.material.colorMixMode:null;if(t)e.externalColor=h.ONES;else{const t=null!=this.symbolLayer.material?this.symbolLayer.material.color:null;null!=t?e.externalColor=r.toUnitRGBA(t):(n=null,e.externalColor=h.ONES)}n&&(e.colorMixMode=n),e.castShadows=!!this.symbolLayer.castShadows},i._hasTransparentVertexColors=function(e){const t=e.vertexAttributes.color;if(null==t)return!1;for(let r=3;r<t.length;r+=4)if(255!==t[r])return!0;return!1},i._getOrCreateMaterial=function(e,t){const n=t.material?.color,a=t.material?.colorTexture,o=t.material?.alphaMode,i="blend"===o,s=!("opaque"===o)&&(this._hasTransparentVertexColors(e)||null!=n&&n.a<1||null!=a&&a.transparent||i),l=this._materialProperties(e,t,s),c=this._materialInfoCache.byUid(l.uid);if(c)return c.material;const h={uid:l.uid,material:null,isComponentTransparent:s,alphaMode:t.material?t.material.alphaMode:"opaque"},f=W.useSchematicPBR({normalTexture:l.normalTexture,metallicRoughnessTexture:l.metallicRoughnessTexture,metallicFactor:l.metallic,roughnessFactor:l.roughness,emissiveTexture:l.emissiveTexture,emissiveFactor:r.toUnitRGB(l.emissiveColor),occlusionTexture:l.occlusionTexture}),m={usePBR:this._usePBR(),isSchematic:f,hasVertexColors:l.hasVertexColors,hasSymbolColors:l.hasSymbolVertexColors,hasVertexTangents:l.hasVertexTangents,ambient:u.ZEROS,diffuse:u.ONES,opacity:1,doubleSided:!0,doubleSidedType:"winding-order",cullFace:V.CullFaceOptions.None,layerOpacity:this._getLayerOpacity(),hasSlicePlane:this._context.slicePlaneEnabled,initTextureTransparent:!0};m.mrrFactors=f?[...W.defaultSchematicMRRFactors]:[l.metallic,l.roughness,W.defaultAdvancedMRRFactors[2]],t.material&&(m.doubleSided=t.material.doubleSided,m.cullFace=t.material.doubleSided?V.CullFaceOptions.None:V.CullFaceOptions.Back,m.textureAlphaCutoff=t.material.alphaCutoff),this._setExternalMaterialParameters(m),this._setMaterialTransparentParameter(m,h),this._setInternalMaterialParameters(l,m);const p=new k.DefaultMaterial(m);return h.material=p,this._materialInfoCache.set(l.uid,h),this._context.stage.add(p),p},i._usePBR=function(){return this._context.physicalBasedRenderingEnabled},i._setMaterialTransparentParameter=function(e,t){e.transparent=this.needsDrivenTransparentPass||t.isComponentTransparent||e.layerOpacity<1||e.opacity<1||e.externalColor&&e.externalColor[3]<1,"auto"===t.alphaMode?e.textureAlphaMode=e.transparent?V.AlphaDiscardMode.MaskBlend:V.AlphaDiscardMode.Opaque:e.textureAlphaMode="opaque"===t.alphaMode?V.AlphaDiscardMode.Opaque:"mask"===t.alphaMode?V.AlphaDiscardMode.Mask:V.AlphaDiscardMode.Blend},i._addDebugNormals=function(e,t){const r=t.length,n=e.spatialReference.isGeographic?20015077/180:1,a=.1*Math.max(e.extent.width*n,e.extent.height*n,e.extent.zmax-e.extent.zmin),o=[],i=[],s=[],l=[];for(let m=0;m<r;m++){const e=t[m],r=e.vertexAttributes.get($.VertexAttribute.POSITION),n=e.vertexAttributes.get($.VertexAttribute.NORMAL),u=e.indices.get($.VertexAttribute.POSITION),h=e.indices.get($.VertexAttribute.NORMAL),f=r.data,p=n.data;for(let t=0;t<u.length;t++){const e=3*u[t],r=3*h[t];for(let t=0;t<3;t++)o.push(f[e+t]);for(let t=0;t<3;t++)o.push(f[e+t]+p[r+t]*a);if(i.push(i.length),i.push(i.length),t%3==0){this._calculateFaceNormal(f,u,t,ee),this._getFaceVertices(f,u,t,K,Q,X),c.add(K,K,Q),c.add(K,K,X),c.scale(K,K,1/3);for(let e=0;e<3;e++)s.push(K[e]);for(let e=0;e<3;e++)s.push(K[e]+ee[e]*a);l.push(l.length),l.push(l.length)}}}const u=t[0].transformation,h=new L.Geometry(this._debugVertexNormalMaterial,[[$.VertexAttribute.POSITION,new U.Attribute(o,3,!0)]],[[$.VertexAttribute.POSITION,i]],null,j.ContentObjectType.Line);t.push(h),h.transformation=u;const f=new L.Geometry(this._debugFaceNormalMaterial,[[$.VertexAttribute.POSITION,new U.Attribute(s,3,!0)]],[[$.VertexAttribute.POSITION,l]],null,j.ContentObjectType.Line);f.transformation=u,t.push(f)},i._createAs3DShape=function(e,t,r,n){const a=e.geometry;if("mesh"!==a.type)return null;const o=this._createGeometryInfo(a,t,n);if(null==o)return null;const{geometries:i,objectTransformation:s}=o;B.DRAW_MESH_GEOMETRY_NORMALS&&this._addDebugNormals(a,i);const l=new D.Object3D({geometries:i,layerUid:this._context.layer.uid,graphicUid:n});l.transformation=s;const c=F.createMaterial(this.symbolLayer,{opacity:this._getLayerOpacity()}),u=null!=c?new R.Object3DEdgeState(i[0].material,[c],{mergeGeometries:!0,hasSlicePlane:this._context.slicePlaneEnabled}):null,h=new E.Graphics3DMeshObject3DGraphicLayer(this,l,i,null,null,O.perObjectElevationAligner,r,u);this._fastUpdateProcessor.onAddGraphic(),h.needsElevationUpdates=P.needsElevationUpdates3D(r.mode),h.useObjectOriginAsAttachmentOrigin=!0,r.centerPointInElevationSR=this._getCenterPointInElevationSR(l.transformation);const{elevationProvider:f,renderCoordsHelper:m}=this._context,p=(e,t)=>P.evaluateElevationInfoAtPoint(e,f,r,m,t);return h.alignedSampledElevation=O.perObjectElevationAligner(h,r,f.spatialReference,p,m),h},i._getCenterPointInElevationSR=function(e){const t=y.makeDehydratedPoint(0,0,0,null!=this._context.elevationProvider.spatialReference?this._context.elevationProvider.spatialReference:null);return f.projectVectorToDehydratedPoint([e[12],e[13],e[14]],this._context.renderCoordsHelper.spatialReference,t),t},i._createComponentNormals=function(e,t,r,n){switch(r.shading||"flat"){default:case"source":return this._createComponentNormalsSource(e,t,r,n);case"flat":return this._createComponentNormalsFlat(e,n);case"smooth":return this._createComponentNormalsSmooth(e,n)}},i._createComponentNormalsSource=function(e,t,r,n){if(null==t)return this._createComponentNormalsFlat(e,n);let a=!1;if(!r.trustSourceNormals)for(let o=0;o<n.length;o+=3){this._calculateFaceNormal(e,n,o,ee);for(let e=0;e<3;e++){const r=3*n[o+e];K[0]=t[r],K[1]=t[r+1],K[2]=t[r+2],c.dot(ee,K)<0&&(t[r]=-t[r],t[r+1]=-t[r+1],t[r+2]=-t[r+2],a=!0)}}return new Z(t,n,a)},i._createComponentNormalsFlat=function(e,t){const r=p.newFloatArray(t.length),n=new Array(3*t.length);for(let a=0;a<t.length;a+=3){const o=this._calculateFaceNormal(e,t,a,ee);for(let e=0;e<3;e++)r[a+e]=o[e],n[a+e]=a/3}return new Z(r,n,!1)},i._createComponentNormalsSmooth=function(e,t){const r={};for(let o=0;o<t.length;o+=3){const n=this._calculateFaceNormal(e,t,o,ee);for(let e=0;e<3;e++){const a=t[o+e];let i=r[a];i||(i={normal:u.create(),count:0},r[a]=i),c.add(i.normal,i.normal,n),i.count++}}const n=p.newFloatArray(3*t.length),a=new Array(3*t.length);for(let o=0;o<t.length;o++){const e=r[t[o]];1!==e.count&&(c.normalize(e.normal,e.normal),e.count=1);for(let t=0;t<3;t++)n[3*o+t]=e.normal[t];a[o]=o}return new Z(n,a,!1)},i._getFaceVertices=function(e,t,r,n,a,o){const i=3*t[r],s=3*t[r+1],l=3*t[r+2];n[0]=e[i],n[1]=e[i+1],n[2]=e[i+2],a[0]=e[s],a[1]=e[s+1],a[2]=e[s+2],o[0]=e[l],o[1]=e[l+1],o[2]=e[l+2]},i._calculateFaceNormal=function(e,t,r,n){return this._getFaceVertices(e,t,r,K,Q,X),c.subtract(Q,Q,K),c.subtract(X,X,K),c.cross(K,Q,X),c.normalize(n,K),n},i._getOrCreateComponents=function(e){return e.components??oe},i._createPositionBuffer=function(e,t){let r=e.vertexAttributes.position;const n=t.reprojection===se.ECEF?t.transformBeforeProject:null;if(null!=n&&(r=_.transformMat4(new Float64Array(r.length),r,n)),t.reprojection===se.NONE)return t.needsBufferCopy?new Float64Array(r):r;const a=null!=n?r:new Float64Array(r.length);return f.projectBuffer(r,e.spatialReference,0,a,this._context.renderCoordsHelper.spatialReference,0,r.length/3),a},i._createNormalBuffer=function(e,t,r){let n=e.vertexAttributes.normal;if(null==n)return null;const a=r.reprojection===se.ECEF?r.transformBeforeProject:null;null!=a&&(n=b.transformNormal(n,new Float32Array(n.length),a));if("local"===this._context.graphicsCoreOwner.view.viewingMode||r.reprojection===se.NONE)return r.needsBufferCopy&&e.vertexAttributes.normal===n?new Float32Array(n):n;const o=e.vertexAttributes.position,i=null!=a?n:new Float32Array(n.length);return b.projectNormalToPCPF(n,o,t,e.spatialReference,i)},i._createTangentBuffer=function(e,t,r){let n=e.vertexAttributes.tangent;if(null==n)return null;const a=r.reprojection===se.ECEF?r.transformBeforeProject:null;null!=a&&(n=b.transformTangent(n,new Float32Array(n.length),a));if("local"===this._context.graphicsCoreOwner.view.viewingMode||r.reprojection===se.NONE)return r.needsBufferCopy&&e.vertexAttributes.normal===n?new Float32Array(n):n;const o=e.vertexAttributes.position,i=null!=a?n:new Float32Array(n.length);return b.projectTangentToPCPF(n,o,t,e.spatialReference,i)},i._createColorBuffer=function(e){return e.vertexAttributes.color},i._createSymbolColorBuffer=function(e){if(this._requiresSymbolVertexColors()){const t=this._getVertexOpacityAndColor(e),r=S.parseColorMixMode(this.symbolLayer?.material?.colorMixMode),n=new Uint8Array(4);return S.encodeSymbolColor(t,r,n),n}return null},i._createBuffers=function(e,t){const r=e.vertexAttributes&&e.vertexAttributes.position;if(!r)return this.logger.warn("Mesh geometry must contain position vertex attributes"),null;const n=e.vertexAttributes.normal,a=e.vertexAttributes.uv,o=e.vertexAttributes.tangent;if(null!=n&&n.length!==r.length)return this.logger.warn("Mesh normal vertex buffer must contain the same number of elements as the position buffer"),null;if(null!=o&&o.length/4!=r.length/3)return this.logger.warn("Mesh tangent vertex buffer must contain the same number of elements as the position buffer"),null;if(null!=a&&a.length/2!=r.length/3)return this.logger.warn("Mesh uv vertex buffer must contain the same number of elements as the position buffer"),null;const i=this._computeReprojectionInfo(e),s=this._createPositionBuffer(e,i),c=this._createColorBuffer(e),u=this._createSymbolColorBuffer(t),h=this._createNormalBuffer(e,s,i),f=this._createTangentBuffer(e,s,i);return{positionBuffer:s,normalBuffer:h,tangentBuffer:f,uvBuffer:a,colorBuffer:c,symbolColorBuffer:u,objectTransformation:i.reprojection===se.NONE&&null!=i.objectTransformation?i.objectTransformation:this._transformOriginLocal(e,s,h,f),geometryTransformation:i.reprojection===se.NONE&&null!=i.geometryTransformation?i.geometryTransformation:l.create()}},i._computeReprojectionInfo=function(e){const{vertexSpace:t}=e,r=t.isRelative,n=t.isGeoreferenced?this._context.renderCoordsHelper.viewingMode===A.ViewingMode.Local?se.NONE:se.ECEF:se.NONE;if(r){const{origin:r}=t,a=l.create(),o=e.transform?.localMatrix??l.IDENTITY;if(n===se.NONE){f.computeTranslationToOriginAndRotation(e.spatialReference,r,a,this._context.renderCoordsHelper.spatialReference);return{reprojection:n,objectTransformation:a,geometryTransformation:l.clone(o),needsBufferCopy:!1}}const i=s.fromTranslation(l.create(),r);return s.multiply(i,i,o),{reprojection:n,transformBeforeProject:i,needsBufferCopy:!0}}return{reprojection:n,needsBufferCopy:!0}},i._transformOriginLocal=function(e,t,r,n){const a=this._context.renderCoordsHelper.spatialReference,i=e.anchor;J[0]=i.x,J[1]=i.y,J[2]=i.z??0;const c=l.create();return f.computeTranslationToOriginAndRotation(e.spatialReference,J,c,a),s.invert(te,c),_.transformMat4(t,t,te),null==r&&null==n||(o.fromMat4(re,c),o.transpose(re,re),null!=r&&_.transformMat3(r,r,re),null!=n&&_.transformMat3(n,n,re,4)),c},i._validateFaces=function(e,t){const r=e.vertexAttributes.position.length/3,n=t.faces;if(n){let e=-1;for(let t=0;t<n.length;t++){const r=n[t];r>e&&(e=r)}if(r<=e)return this.logger.warn(`Vertex index ${e} is out of bounds of the mesh position buffer`),!1}else if(r%3!=0)return this.logger.warn("Mesh position buffer length must be a multiple of 9 if no component faces are defined (3 values per vertex * 3 vertices per triangle)"),!1;return!0},i._getOrCreateFaces=function(e,t){return t.faces??d.getContinuousIndexArray(e.vertexAttributes.position.length/3)},i._isOutsideClippingArea=function(e){if(!this._context.clippingExtent)return!1;const t=e.vertexAttributes&&e.vertexAttributes.position;if(!t)return!1;const r=this._context.elevationProvider.spatialReference;let n;const a=t.length/3;return null==r||e.spatialReference.equals(r)?n=t:(n=new Float64Array(t.length),f.projectBuffer(e.vertexAttributes.position,e.spatialReference,0,n,r,0,a)),m.empty(ae),m.expandWithBuffer(ae,n,0,a),!m.intersectsClippingArea(ae,this._context.clippingExtent)},i._createGeometryInfo=function(e,t,r){if(!f.canProjectWithoutEngine(e.spatialReference,this._context.graphicsCoreOwner.view.spatialReference))return this.logger.warn("Geometry spatial reference is not compatible with the view"),null;if(this._isOutsideClippingArea(e))return null;const n=this._createBuffers(e,t);if(null==n)return null;const{positionBuffer:a,uvBuffer:o,colorBuffer:i,symbolColorBuffer:s,normalBuffer:l,tangentBuffer:c,objectTransformation:u,geometryTransformation:h}=n,m=this._getOrCreateComponents(e),p=new Array;let x=!1;for(const f of m){if(!this._validateFaces(e,f))return null;const t=this._getOrCreateFaces(e,f);if(0===t.length)continue;const n=this._createComponentNormals(a,l,f,t);n.didFlipNormals&&(x=!0);const u=[[$.VertexAttribute.POSITION,new U.Attribute(a,3,!0)],[$.VertexAttribute.NORMAL,new U.Attribute(n.normals,3,!0)]],m=[[$.VertexAttribute.POSITION,t],[$.VertexAttribute.NORMAL,n.indices]];null!=i&&(u.push([$.VertexAttribute.COLOR,new U.Attribute(i,4,!0)]),m.push([$.VertexAttribute.COLOR,t])),null!=s&&(u.push([$.VertexAttribute.SYMBOLCOLOR,new U.Attribute(s,4,!0)]),m.push([$.VertexAttribute.SYMBOLCOLOR,d.getZeroIndexArray(t.length)])),null!=o&&(u.push([$.VertexAttribute.UV0,new U.Attribute(o,2,!0)]),m.push([$.VertexAttribute.UV0,t])),null!=c&&(u.push([$.VertexAttribute.TANGENT,new U.Attribute(c,4,!0)]),m.push([$.VertexAttribute.TANGENT,t]));const g=this._context.stage.renderView.getObjectAndLayerIdColor({graphicUid:r,layerUid:this._context.layer.uid}),T=this._getOrCreateMaterial(e,f),_=new L.Geometry(T,u,m,null,j.ContentObjectType.Mesh,g);_.transformation=h,p.push(_)}return x&&this.logger.warn("Normals have been automatically flipped to be consistent with the counter clock wise face winding order. It is better to generate mesh geometries that have consistent normals."),{geometries:p,objectTransformation:u}},i._updateMaterialParameters=function(e){this._materialInfoCache.forEachMaterialInfo(e),this._fastUpdateProcessor.forEachMaterialInfo(e),this._fastUpdateProcessor.forEachClonedMaterial(((e,t)=>{t.setParameters(e.parameters)}))},i.test=function(){return{...t._get(t._getPrototypeOf(n.prototype),"test",this).call(this),materials:this._materialInfoCache.materials}},t._createClass(n)}(I.Graphics3DSymbolLayer),Z=t._createClass((function(e,t,r){this.normals=e,this.indices=t,this.didFlipNormals=r}));const J=u.create(),K=u.create(),Q=u.create(),X=u.create(),ee=u.create(),te=l.create(),re=i.create(),ne=l.create(),ae=m.create(),oe=[new x],ie=new T;var se;!function(e){e[e.NONE=0]="NONE",e[e.ECEF=1]="ECEF"}(se||(se={})),e.Graphics3DMeshFillSymbolLayer=Y,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));