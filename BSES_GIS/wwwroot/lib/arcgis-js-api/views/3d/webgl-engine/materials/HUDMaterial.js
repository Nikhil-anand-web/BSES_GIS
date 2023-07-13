/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/mathUtils","../../../../chunks/mat3","../../../../chunks/mat3f64","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec2","../../../../chunks/vec2f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4f64","../../../../core/libs/gl-matrix-2/types/mat4","../../../../geometry/support/aaBoundingRect","../../../../geometry/support/buffer/BufferView","../../support/debugFlags","../../support/buffer/InterleavedLayout","../core/shaderLibrary/ShaderOutput","../core/shaderLibrary/hud/HUD.glsl","../lib/GLTextureMaterial","../lib/Material","../lib/RenderSlot","../lib/screenSizePerspectiveUtils","../lib/Util","../lib/VertexAttribute","./ScaleInfo","./internal/bufferWriterUtils","./internal/MaterialUtil","../../../../chunks/HUDMaterial.glsl","../shaders/HUDMaterialTechnique","../shaders/HUDMaterialTechniqueConfiguration"],(function(e,t,r,i,n,a,s,o,c,l,u,f,d,p,h,g,A,m,S,O,b,x,v,P,V,y,_,I,M,T,C,R){"use strict";let w=function(e){function r(t){var r;return(r=e.call(this,t,new ee)||this)._configuration=new R.HUDMaterialTechniqueConfiguration,r}t._inherits(r,e);var a=r.prototype;return a.getConfiguration=function(e,t){return this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits?O.HUDSpace.Screen:O.HUDSpace.World,this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=this.parameters.isDraped,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=t.slot===v.RenderSlot.OCCLUSION_PIXELS&&this.parameters.occlusionTest&&(e===S.ShaderOutput.Color||e===S.ShaderOutput.Alpha),e===S.ShaderOutput.Color&&(this._configuration.debugDrawLabelBorder=!!A.LABELS_SHOW_BORDER),e===S.ShaderOutput.Highlight&&(this._configuration.binaryHighlightOcclusionEnabled=this.parameters.binaryHighlightOcclusion),this._configuration.depthEnabled=this.parameters.depthEnabled,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.hasMultipassGeometry=t.multipassGeometry.enabled,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration},a.intersect=function(e,t,r,i,a,o){if(!r.options.selectionMode||!r.options.hud||!e.visible)return;const c=this.parameters;let l=1,d=1;if(n.fromMat4(k,t),null!=e.shaderTransformer){const t=e.shaderTransformer(J);l=t[0],d=t[5],z(k)}const p=e.vertexAttributes.get(y.VertexAttribute.POSITION),h=e.vertexAttributes.get(y.VertexAttribute.SIZE),g=e.vertexAttributes.get(y.VertexAttribute.NORMAL),A=e.vertexAttributes.get(y.VertexAttribute.AUXPOS1);V.assert(p.size>=3);const m=r.point,S=r.camera,O=T.calculateAnchorPosForRendering(c);l*=S.pixelRatio,d*=S.pixelRatio;const b="screen"===this.parameters.centerOffsetUnits;for(let n=0;n<p.data.length/p.size;n++){const e=n*p.size;u.set(B,p.data[e],p.data[e+1],p.data[e+2]),u.transformMat4(B,B,t);const i=n*h.size;Q[0]=h.data[i]*l,Q[1]=h.data[i+1]*d,u.transformMat4(B,B,S.viewMatrix);const a=n*A.size;if(u.set(W,A.data[a],A.data[a+1],A.data[a+2]),!b&&(B[0]+=W[0],B[1]+=W[1],0!==W[2])){const e=W[2];u.normalize(W,B),u.subtract(B,B,u.scale(W,W,e))}const x=n*g.size;if(u.set(H,g.data[x],g.data[x+1],g.data[x+2]),this._normalAndViewAngle(H,k,S,Z),this._applyVerticalOffsetTransformationView(B,Z,S,E),S.applyProjection(B,F),F[0]>-1){F[0]=Math.floor(F[0]),F[1]=Math.floor(F[1]),b&&(W[0]||W[1])&&(F[0]+=W[0],0!==W[1]&&(F[1]+=P.applyScaleFactor(W[1],E.factorAlignment)),S.unapplyProjection(F,B)),F[0]+=this.parameters.screenOffset[0],F[1]+=this.parameters.screenOffset[1],P.applyPrecomputedScaleFactor(Q,E.factor,Q);const e=Y*S.pixelRatio;let t=0;if(c.textureIsSignedDistanceField&&(t=c.outlineSize*S.pixelRatio/2),m&&D(m,F[0],F[1],Q,e,t,c,O)){const e=r.ray;if(u.transformMat4(X,B,s.invert(j,S.viewMatrix)),F[0]=m[0],F[1]=m[1],S.unprojectFromRenderScreen(F,B)){const t=f.create();u.copy(t,e.direction);const r=1/u.length(t);u.scale(t,t,r);o(u.distance(e.origin,B)*r,t,-1,!0,1,X)}}}}},a.intersectDraped=function(e,t,r,i,n,a){const s=e.vertexAttributes.get(y.VertexAttribute.POSITION),o=e.vertexAttributes.get(y.VertexAttribute.SIZE),c=this.parameters,l=T.calculateAnchorPosForRendering(c);let u=1,f=1;if(null!=e.shaderTransformer){const t=e.shaderTransformer(J);u=t[0],f=t[5]}u*=e.screenToWorldRatio,f*=e.screenToWorldRatio;const d=K*e.screenToWorldRatio;for(let p=0;p<s.data.length/s.size;p++){const t=p*s.size,r=s.data[t],h=s.data[t+1],g=p*o.size;Q[0]=o.data[g]*u,Q[1]=o.data[g+1]*f;let A=0;c.textureIsSignedDistanceField&&(A=c.outlineSize*e.screenToWorldRatio/2),D(i,r,h,Q,d,A,c,l)&&n(a.dist,a.normal,-1,!1)}},a.createBufferWriter=function(){return new ie(this)},a._normalAndViewAngle=function(e,t,r,i){return p.isMat4(t)&&(t=n.fromMat4(q,t)),u.transformMat3(i.normal,e,t),u.transformMat4(i.normal,i.normal,r.viewInverseTransposeMatrix),i.cosAngle=u.dot(G,$),i},a._updateScaleInfo=function(e,t,r){const i=this.parameters;null!=i.screenSizePerspective?P.precomputeScaleFactor(r,t,i.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minPixelSize=0,e.factor.paddingPixels=0),null!=i.screenSizePerspectiveAlignment?P.precomputeScaleFactor(r,t,i.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minPixelSize=e.factor.minPixelSize,e.factorAlignment.paddingPixels=e.factor.paddingPixels)},a.applyShaderOffsetsView=function(e,t,r,i,n,a,s){const o=this._normalAndViewAngle(t,r,n,Z);return this._applyVerticalGroundOffsetView(e,o,n,s),this._applyVerticalOffsetTransformationView(s,o,n,a),this._applyPolygonOffsetView(s,o,i[3],n,s),this._applyCenterOffsetView(s,i,s),s},a.applyShaderOffsetsNDC=function(e,t,r,i,n){return this._applyCenterOffsetNDC(e,t,r,i),null!=n&&u.copy(n,i),this._applyPolygonOffsetNDC(i,t,r,i),i},a._applyPolygonOffsetView=function(e,t,r,n,a){const s=n.aboveGround?1:-1;let o=Math.sign(r);0===o&&(o=s);const c=s*o;if(this.parameters.shaderPolygonOffset<=0)return u.copy(a,e);const l=i.clamp(Math.abs(t.cosAngle),.01,1),f=1-Math.sqrt(1-l*l)/l/n.viewport[2];return c>0?u.scale(a,e,f):u.scale(a,e,1/f),a},a._applyVerticalGroundOffsetView=function(e,t,r,i){const n=u.length(e),a=r.aboveGround?1:-1,s=.5*r.computeRenderPixelSizeAtDist(n),o=u.scale(B,t.normal,a*s);return u.add(i,e,o),i},a._applyVerticalOffsetTransformationView=function(e,t,r,i){const n=this.parameters;if(!n.verticalOffset||!n.verticalOffset.screenLength){if(n.screenSizePerspective||n.screenSizePerspectiveAlignment){const r=u.length(e);this._updateScaleInfo(i,r,t.cosAngle)}else i.factor.scale=1,i.factorAlignment.scale=1;return e}const a=u.length(e),s=n.screenSizePerspectiveAlignment??n.screenSizePerspective,o=M.verticalOffsetAtDistance(r,a,n.verticalOffset,t.cosAngle,s);return this._updateScaleInfo(i,a,t.cosAngle),u.scale(t.normal,t.normal,o),u.add(e,e,t.normal)},a._applyCenterOffsetView=function(e,t,r){const i="screen"!==this.parameters.centerOffsetUnits;return r!==e&&u.copy(r,e),i&&(r[0]+=t[0],r[1]+=t[1],t[2]&&(u.normalize(H,r),u.add(r,r,u.scale(H,H,t[2])))),r},a._applyCenterOffsetNDC=function(e,t,r,i){const n="screen"!==this.parameters.centerOffsetUnits;return i!==e&&u.copy(i,e),n||(i[0]+=t[0]/r.fullWidth*2,i[1]+=t[1]/r.fullHeight*2),i},a._applyPolygonOffsetNDC=function(e,t,r,i){const n=this.parameters.shaderPolygonOffset;if(e!==i&&u.copy(i,e),n){const e=r.aboveGround?1:-1,a=e*Math.sign(t[3]);i[2]-=(a||e)*n}return i},a.requiresSlot=function(e,t){if(t===S.ShaderOutput.Color||t===S.ShaderOutput.Alpha||t===S.ShaderOutput.Highlight||t===S.ShaderOutput.ObjectAndLayerIdColor){if(e===v.RenderSlot.DRAPED_MATERIAL)return!0;const{drawInSecondSlot:t,occlusionTest:r}=this.parameters;return e===(t?v.RenderSlot.LABEL_MATERIAL:v.RenderSlot.HUD_MATERIAL)||r&&e===v.RenderSlot.OCCLUSION_PIXELS}return!1},a.createGLMaterial=function(e){return new L(e)},a.calculateRelativeScreenBounds=function(e,t,r=h.create()){return U(this.parameters,e,t,r),r[2]=r[0]+e[0],r[3]=r[1]+e[1],r},t._createClass(r)}(x.Material),L=function(e){function r(t){return e.call(this,{...t,...t.material.parameters})||this}t._inherits(r,e);var i=r.prototype;return i.selectProgram=function(e){return this.ensureTechnique(C.HUDMaterialTechnique,e)},i.beginSlot=function(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.selectProgram(e)},t._createClass(r)}(b.GLTextureMaterial);function U(e,t,r,i=N){return c.copy(i,e.anchorPosition),i[0]*=-t[0],i[1]*=-t[1],i[0]+=e.screenOffset[0]*r,i[1]+=e.screenOffset[1]*r,i}function z(e){const t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],s=e[5],o=e[6],c=e[7],l=e[8],u=1/Math.sqrt(t*t+r*r+i*i),f=1/Math.sqrt(n*n+a*a+s*s),d=1/Math.sqrt(o*o+c*c+l*l);return e[0]=t*u,e[1]=r*u,e[2]=i*u,e[3]=n*f,e[4]=a*f,e[5]=s*f,e[6]=o*d,e[7]=c*d,e[8]=l*d,e}function D(e,t,r,i,n,a,s,o){let c=t-n-(o[0]>0?i[0]*o[0]:0),l=c+i[0]+2*n,u=r-n-(o[1]>0?i[1]*o[1]:0),f=u+i[1]+2*n;const d=s.distanceFieldBoundingBox;return s.textureIsSignedDistanceField&&null!=d&&(c+=i[0]*d[0],u+=i[1]*d[1],l-=i[0]*(1-d[2]),f-=i[1]*(1-d[3]),c-=a,l+=a,u-=a,f+=a),e[0]>c&&e[0]<l&&e[1]>u&&e[1]<f}const E=new _.ScaleInfo,N=l.create(),B=f.create(),H=f.create(),F=d.create(),G=f.create(),X=f.create(),k=a.create(),q=a.create(),j=o.create(),W=f.create(),Z={normal:G,cosAngle:0},J=o.create(),Y=1,K=2,Q=[0,0],$=f.fromValues(0,0,1);let ee=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).renderOccluded=x.RenderOccludedFlag.Occlude,t.color=d.fromValues(1,1,1,1),t.texCoordScale=[1,1],t.polygonOffset=!1,t.anchorPosition=l.fromValues(.5,.5),t.screenOffset=[0,0],t.shaderPolygonOffset=1e-5,t.textureIsSignedDistanceField=!1,t.outlineColor=d.fromValues(1,1,1,1),t.outlineSize=0,t.vvSizeEnabled=!1,t.vvSize=null,t.vvColor=null,t.vvOpacity=null,t.vvSymbolAnchor=null,t.vvSymbolRotationMatrix=null,t.hasSlicePlane=!1,t.pixelSnappingEnabled=!0,t.occlusionTest=!0,t.binaryHighlightOcclusion=!0,t.centerOffsetUnits="world",t.drawInSecondSlot=!1,t.depthEnabled=!0,t.isDraped=!1,t}return t._inherits(r,e),t._createClass(r)}(b.GLTextureMaterialBindParameters);const te=m.newLayout().vec3f(y.VertexAttribute.POSITION).vec3f(y.VertexAttribute.NORMAL).vec2f(y.VertexAttribute.UV0).vec4u8(y.VertexAttribute.COLOR).vec2f(y.VertexAttribute.SIZE).vec4f(y.VertexAttribute.AUXPOS1).vec4f(y.VertexAttribute.AUXPOS2),re=te.clone().vec4u8(y.VertexAttribute.OBJECTANDLAYERIDCOLOR);let ie=function(){function e(e){this._material=e,this.vertexBufferLayout=r("enable-feature:objectAndLayerId-rendering")?re:te}var i=e.prototype;return i.elementCount=function(e){return 6*e.indices.get(y.VertexAttribute.POSITION).length},i.write=function(e,t,r,i,n){I.writePosition(r.indices.get(y.VertexAttribute.POSITION),r.vertexAttributes.get(y.VertexAttribute.POSITION).data,e,i.position,n,6),I.writeNormal(r.indices.get(y.VertexAttribute.NORMAL),r.vertexAttributes.get(y.VertexAttribute.NORMAL).data,t,i.normal,n,6);const a=r.vertexAttributes.get(y.VertexAttribute.UV0).data;let s,o,c,l;if(null==a||a.length<4){const e=this._material.parameters;s=0,o=0,c=e.texCoordScale[0],l=e.texCoordScale[1]}else s=a[0],o=a[1],c=a[2],l=a[3];c=Math.min(1.99999,c+1),l=Math.min(1.99999,l+1);let u=r.indices.get(y.VertexAttribute.POSITION).length,f=n;const d=i.uv0;for(let g=0;g<u;++g)d.set(f,0,s),d.set(f,1,o),f+=1,d.set(f,0,c),d.set(f,1,o),f+=1,d.set(f,0,c),d.set(f,1,l),f+=1,d.set(f,0,c),d.set(f,1,l),f+=1,d.set(f,0,s),d.set(f,1,l),f+=1,d.set(f,0,s),d.set(f,1,o),f+=1;I.writeColor(r.indices.get(y.VertexAttribute.COLOR),r.vertexAttributes.get(y.VertexAttribute.COLOR).data,4,i.color,n,6);const p=r.indices.get(y.VertexAttribute.SIZE),h=r.vertexAttributes.get(y.VertexAttribute.SIZE).data;u=p.length;const A=i.size;f=n;for(let g=0;g<u;++g){const e=h[2*p[g]],t=h[2*p[g]+1];for(let r=0;r<6;++r)A.set(f,0,e),A.set(f,1,t),f+=1}if(r.indices.get(y.VertexAttribute.AUXPOS1)&&r.vertexAttributes.get(y.VertexAttribute.AUXPOS1)?I.writeBufferVec4(r.indices.get(y.VertexAttribute.AUXPOS1),r.vertexAttributes.get(y.VertexAttribute.AUXPOS1).data,i.auxpos1,n,6):I.writeBufferVec4Zeros(i.auxpos1,n,6*u),r.indices.get(y.VertexAttribute.AUXPOS2)&&r.vertexAttributes.get(y.VertexAttribute.AUXPOS2)?I.writeBufferVec4(r.indices.get(y.VertexAttribute.AUXPOS2),r.vertexAttributes.get(y.VertexAttribute.AUXPOS2).data,i.auxpos2,n,6):I.writeBufferVec4Zeros(i.auxpos2,n,6*u),null!=r.objectAndLayerIdColor){if(r.indices.get(y.VertexAttribute.POSITION)){const e=r.indices.get(y.VertexAttribute.POSITION).length,t=i.getField(y.VertexAttribute.OBJECTANDLAYERIDCOLOR,g.BufferViewVec4u8);I.writeObjectAndLayerIdColor(r.objectAndLayerIdColor,t,e,n,6)}}},t._createClass(e)}();e.HUDMaterial=w,e.Parameters=ee,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
