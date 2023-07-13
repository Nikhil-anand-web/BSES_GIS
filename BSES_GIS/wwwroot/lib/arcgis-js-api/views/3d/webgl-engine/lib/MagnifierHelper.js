/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/asyncUtils","../../../../core/Evented","../../../../core/Handles","../../../../core/mathUtils","../../../../core/maybe","../../../../core/reactiveUtils","../../../../core/screenUtils","../../../../core/urlUtils","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../../../support/requestImageUtils","./DefaultVertexBufferLayouts","./glUtil3D","./Program","./VertexAttribute","../shaders/Magnifier.glsl","../../../magnifier/resources","../../../webgl/enums","../../../webgl/renderState","../../../webgl/Texture","../../../webgl/TextureDescriptor"],(function(e,r,t,s,i,a,n,o,l,u,c,p,h,m,_,g,d,f,y,P,T,k,v,S,x,b,M,R){"use strict";e.MagnifierHelper=function(e){function t(){var r;return(r=e.apply(this,arguments)||this)._handles=new n,r._magnifier=null,r._imageSources=null,r._imageLoadTask=null,r._resources=null,r._passParameters=new v.MagnifierPassParameters,r.events=new a,r.attributeLocations=new Map([[k.VertexAttribute.POSITION,0]]),r._tmpScreenPoint=c.createScreenPointArray(),r._tmpRenderPoint=c.createRenderScreenPointArray(),r}r._inherits(t,e);var s=t.prototype;return s.destroy=function(){this._magnifier=null,this._handles.destroy(),null!=this._imageLoadTask&&(this._imageLoadTask.task.abort(),this._imageLoadTask=null),this._disposeResources()},s.render=function(e,r){const t=this._validMagnifier;if(null==t)return;const s=r.camera.pixelRatio,i=Math.ceil(s*t.size);if(this._updateResources(e,i),null==this._resources)return;const a=this._passParameters.textures,n=Math.ceil(1/this._factor*i);a.input.resize(n,n),c.screenPointObjectToArray(t.position,this._tmpScreenPoint);const l=r.camera.screenToRender(this._tmpScreenPoint,this._tmpRenderPoint),u=r.camera.fullWidth,p=r.camera.fullHeight,h=.5*n,m=.5*n;l[0]=o.clamp(l[0],h,u-h-1),l[1]=o.clamp(l[1],m,p-m-1);const _=Math.floor(l[0]-h),g=Math.floor(l[1]-m),d=this._resources.program;d.bindTexture("textureInput",a.input),e.gl.copyTexImage2D(a.input.descriptor.target,0,a.input.descriptor.pixelFormat,_,g,n,n,0),this._passParameters.magnifier=t,e.useProgram(d),d.bindPass(this._passParameters,r),e.bindVAO(this._resources.vao),e.setPipelineState(this._resources.pipelineState),e.drawArrays(x.PrimitiveType.TRIANGLE_STRIP,0,4)},s._updateResourceLoading=function(){const e=this._validMagnifier;if(null==e)return;const r=e.maskUrl,t=e.overlayUrl;null==this._imageLoadTask||this._imageLoadTask.maskUrl===r&&this._imageLoadTask.overlayUrl===t||(this._imageLoadTask.task.abort(),this._imageLoadTask=null,this._imageSources=null),null==this._imageSources&&null==this._imageLoadTask&&(this._imageLoadTask={maskUrl:r,overlayUrl:t,task:i.createTask((async e=>{const s=null==r||null==t?S.loadMagnifierResources(e):null,i=null!=r?f.requestImage(r,{signal:e}):s.then((e=>e.mask)),a=null!=t?f.requestImage(t,{signal:e}):s.then((e=>e.overlay));this._imageSources={mask:await i,overlay:await a},this._disposeResources(),this.events.emit("request-render")}))},this._imageLoadTask.task.promise.then((()=>this.notifyChange("updating")),(()=>this.notifyChange("updating"))))},s._updateResources=function(e,r){if(!this.enabled)return void this._disposeResources();if(null!=this._resources){if(this._passParameters.textures.size!==r){const t=this._createTextureResources(e,r);if(null==t)return void this._disposeResources();this._disposeTextureResources(this._passParameters.textures),this._passParameters.textures=t}return}const t=this._createTextureResources(e,r);null!=t&&(this._resources={program:this._createProgram(e),vao:P.createQuadVAO(e,y.Pos2,this.attributeLocations,0,1),pipelineState:b.makePipelineState({blending:b.simpleBlendingParams(x.BlendFactor.ONE,x.BlendFactor.ONE_MINUS_SRC_ALPHA),depthTest:null,depthWrite:null,colorWrite:b.defaultColorWriteParams})},this._passParameters.textures=t)},s._disposeResources=function(){null!=this._resources&&(this._disposeTextureResources(this._passParameters.textures),this._resources.program.dispose(),this._resources.vao.dispose(),this._resources=null)},s._disposeTextureResources=function(e){e.mask.dispose(),e.overlay.dispose(),e.input.dispose()},s._createTextureResources=function(e,r){if(null==this._imageSources)return null;this._imageSources.overlay.width=r,this._imageSources.overlay.height=r,this._imageSources.mask.width=r,this._imageSources.mask.height=r;const t=new R.TextureDescriptor;t.internalFormat=x.PixelFormat.RGBA,t.wrapMode=x.TextureWrapMode.CLAMP_TO_EDGE,t.flipped=!0,t.preMultiplyAlpha=!p.isSVG(this._imageSources.overlay.src)||!e.driverTest.svgPremultipliesAlpha.result;const s=new M.Texture(e,t,this._imageSources.overlay);t.pixelFormat=t.internalFormat=x.PixelFormat.ALPHA,t.preMultiplyAlpha=!1;const i=new M.Texture(e,t,this._imageSources.mask);t.pixelFormat=t.internalFormat=x.PixelFormat.RGBA,t.flipped=!1;return{input:new M.Texture(e,t),mask:i,overlay:s,size:r}},s._createProgram=function(e){return new T.Program(e,v.build(),this.attributeLocations)},r._createClass(t,[{key:"updating",get:function(){return null==this._imageSources&&null!=this._imageLoadTask&&!this._imageLoadTask.task.finished}},{key:"magnifier",get:function(){return this._magnifier},set:function(e){if(e===this._magnifier)return;this._handles.removeAll(),this._magnifier=e;const r=()=>{this._updateResourceLoading(),this.events.emit("request-render")};null!=this._magnifier&&this._handles.add(u.watch((()=>l.applySome(this._magnifier,(e=>e.version))),r)),r()}},{key:"enabled",get:function(){return null!=this._validMagnifier}},{key:"_validMagnifier",get:function(){return null!=this._magnifier&&this._magnifier.visible&&null!=this._magnifier.position&&this._magnifier.size>0?this._magnifier:null}},{key:"_factor",get:function(){return null!=this._magnifier&&this._magnifier.factor||1}}]),t}(s),t.__decorate([h.property()],e.MagnifierHelper.prototype,"_imageSources",void 0),t.__decorate([h.property()],e.MagnifierHelper.prototype,"_imageLoadTask",void 0),t.__decorate([h.property({readOnly:!0})],e.MagnifierHelper.prototype,"updating",null),e.MagnifierHelper=t.__decorate([d.subclass("esri/views/3d/webgl-engine/lib/MagnifierHelper")],e.MagnifierHelper),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));