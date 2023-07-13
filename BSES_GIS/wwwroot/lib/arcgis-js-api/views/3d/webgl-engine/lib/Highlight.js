/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../chunks/vec2","../../../../chunks/vec4","../../../../chunks/vec4f64","./DefaultVertexAttributeLocations","./DefaultVertexBufferLayouts","./glUtil3D","./VertexArrayObject","../shaders/HighlightApplyTechnique","../../../../chunks/HighlightBlur.glsl","../shaders/HighlightBlurTechnique","../../../../chunks/HighlightDownsample.glsl","../shaders/HighlightDownsampleTechnique","../shaders/HighlightPassParameters","../../../webgl/BufferObject","../../../webgl/enums","../../../webgl/FramebufferObject","../../../webgl/TextureDescriptor","../../../webgl/Util"],(function(e,t,r,i,s,a,l,o,h,u,p,n,c,_,g,m,b,d,w,v,T){"use strict";const f=32;let M=function(){function e(e,t){this._techniqueRep=e,this._rctx=t,this._viewportToRestore=a.create(),this._passParameters=new m.HighlightPassParameters,this._downsampleDrawParameters=new _.HighlightDownsampleDrawParameters,this._blurDrawParameters=new n.HighlightBlurDrawParameters,this._grid={coverageMipmap:null,vao:null,verticalCellCount:0,horizontalCellCount:0,cellPixelSize:0,mipmapLevels:0,viewportWidth:0,viewportHeight:0}}var M=e.prototype;return M._assertResources=function(){if(this._quadVAO)return;this._quadVAO=h.createQuadVAO(this._rctx);const e=new v.TextureDescriptor;e.wrapMode=d.TextureWrapMode.CLAMP_TO_EDGE,this._blur0Fbo=new w.FramebufferObject(this._rctx,e),this._blur1Fbo=new w.FramebufferObject(this._rctx,e),this._blurTechnique=this._techniqueRep.acquire(c.HighlightBlurTechnique),this._downsampleTechnique=this._techniqueRep.acquire(g.HighlightDownsampleTechnique),this._applyTechnique=this._techniqueRep.acquire(p.HighlightApplyTechnique)},M.dispose=function(){if(this._blurTechnique=r.releaseMaybe(this._blurTechnique),this._downsampleTechnique=r.releaseMaybe(this._downsampleTechnique),this._applyTechnique=r.releaseMaybe(this._applyTechnique),this._grid.coverageMipmap)for(let e=1;e<this._grid.coverageMipmap.length;e++)this._grid.coverageMipmap[e].dispose();this._grid.vao&&this._grid.vao.dispose(),this._quadVAO&&(this._quadVAO.dispose(),this._quadVAO=null),this._blur0Fbo=r.disposeMaybe(this._blur0Fbo),this._blur1Fbo=r.disposeMaybe(this._blur1Fbo)},M.setDefaultOptions=function(e){this._passParameters={...new m.HighlightPassParameters,...e}},M.render=function(e,t,r){this._passParameters.highlightColorTexture=t.colorTexture,this._assertResources();const a=e.camera;s.copy(this._viewportToRestore,a.fullViewport);const l=a.fullWidth,o=a.fullHeight,h=a.pixelRatio,u=Math.ceil(l/h),p=Math.ceil(o/h);this._blur0Fbo.resize(u,p),this._blur1Fbo.resize(u,p);const n=this._rctx;n.bindVAO(this._quadVAO);let c=null;this._gridUpdateResources(t,f),this._gridComputeMipmap(e),this._passParameters.coverageTexture=this._grid.coverageMipmap[this._grid.mipmapLevels].colorTexture,c=this._grid.vao;const _=n.bindTechnique(this._blurTechnique,this._passParameters,e);n.bindVAO(c),n.bindFramebuffer(this._blur0Fbo),n.setViewport(0,0,u,p),n.setClearColor(0,0,0,0),n.clear(d.ClearBufferBit.COLOR_BUFFER_BIT),this._blurDrawParameters.blurInputTexture=t.colorTexture,i.set(this._blurDrawParameters.blurSize,1/u,0),_.bindDraw(this._blurDrawParameters,e,this._passParameters),n.drawArrays(this._blurTechnique.primitiveType,0,T.vertexCount(c,"geometry")),n.bindFramebuffer(this._blur1Fbo),n.clear(d.ClearBufferBit.COLOR_BUFFER_BIT),this._blurDrawParameters.blurInputTexture=this._blur0Fbo.colorTexture,i.set(this._blurDrawParameters.blurSize,0,1/p),_.bindDraw(this._blurDrawParameters,e,this._passParameters),n.drawArrays(this._blurTechnique.primitiveType,0,T.vertexCount(c,"geometry")),n.bindFramebuffer(r),n.setViewport(this._viewportToRestore[0],this._viewportToRestore[1],this._viewportToRestore[2],this._viewportToRestore[3]),this._passParameters.blurColorTexture=this._blur1Fbo.colorTexture,n.bindTechnique(this._applyTechnique,this._passParameters,e),n.drawArrays(this._applyTechnique.primitiveType,0,T.vertexCount(c,"geometry")),n.bindVAO(null)},M._gridUpdateResources=function(e,t){const r=this._rctx,i=this._grid;let s=!1;if(null===i.coverageMipmap&&(i.coverageMipmap=[e],s=!0),i.viewportWidth===e.width&&i.viewportHeight===e.height||(s=!0,i.viewportWidth=e.width,i.viewportHeight=e.height),i.coverageMipmap[0]=e,i.cellPixelSize!==t&&(i.cellPixelSize=t,s=!0),s){for(let e=1;e<i.coverageMipmap.length;e++)i.coverageMipmap[e].dispose();i.mipmapLevels=Math.ceil(Math.log(i.cellPixelSize)*Math.LOG2E),i.coverageMipmap.length=i.mipmapLevels+1;for(let e=0;e<i.mipmapLevels;e++){const t=i.coverageMipmap[e],s=new v.TextureDescriptor(Math.ceil(t.width/2),Math.ceil(t.height/2));s.pixelFormat=d.PixelFormat.RGB,s.dataType=d.PixelType.UNSIGNED_SHORT_5_6_5,s.wrapMode=d.TextureWrapMode.CLAMP_TO_EDGE,i.coverageMipmap[e+1]=new w.FramebufferObject(r,s)}}const a=Math.ceil(e.height/i.cellPixelSize),h=Math.ceil(e.width/i.cellPixelSize);if(!i.vao||i.verticalCellCount!==a||i.horizontalCellCount!==h){i.verticalCellCount=a,i.horizontalCellCount=h;const e=a+1,t=h+1,s=1/a,p=1/h,n=6,c=4,_=new Float32Array(n*c*e*t);let g=0;for(let r=0;r<e;r++)for(let e=0;e<t;e++)_[g]=(e-.5)*p*2-1,_[g+1]=(r-.5)*s*2-1,_[g+2]=e*p,_[g+3]=r*s,_[g+4]=(e+.5)*p*2-1,_[g+5]=(r-.5)*s*2-1,_[g+6]=e*p,_[g+7]=r*s,_[g+8]=(e-.5)*p*2-1,_[g+9]=(r+.5)*s*2-1,_[g+10]=e*p,_[g+11]=r*s,_[g+12]=(e-.5)*p*2-1,_[g+13]=(r+.5)*s*2-1,_[g+14]=e*p,_[g+15]=r*s,_[g+16]=(e+.5)*p*2-1,_[g+17]=(r-.5)*s*2-1,_[g+18]=e*p,_[g+19]=r*s,_[g+20]=(e+.5)*p*2-1,_[g+21]=(r+.5)*s*2-1,_[g+22]=e*p,_[g+23]=r*s,g+=n*c;i.vao&&i.vao.dispose(),i.vao=new u.VertexArrayObject(r,l.Default3D,{geometry:o.Pos2Tex},{geometry:b.BufferObject.createVertex(r,d.Usage.STATIC_DRAW,_)})}},M._gridComputeMipmap=function(e){const t=this._rctx,r=this._grid,s=t.bindTechnique(this._downsampleTechnique,this._passParameters,e);t.bindVAO(this._quadVAO);for(let a=0;a<r.mipmapLevels;a++){t.bindFramebuffer(r.coverageMipmap[a+1]);const l=r.coverageMipmap[a+1].width,o=r.coverageMipmap[a+1].height;this._downsampleDrawParameters.inputTexture=r.coverageMipmap[a].colorTexture,i.set(this._downsampleDrawParameters.invFramebufferDim,1/l,1/o),s.bindDraw(this._downsampleDrawParameters,e,this._passParameters),t.setViewport(0,0,l,o),t.drawArrays(d.PrimitiveType.TRIANGLE_STRIP,0,T.vertexCount(this._quadVAO,"geometry"))}},t._createClass(e,[{key:"gpuMemoryUsage",get:function(){let e=(null!=this._blur0Fbo?this._blur0Fbo.gpuMemoryUsage:0)+(null!=this._blur1Fbo?this._blur1Fbo.gpuMemoryUsage:0);if(this._grid.coverageMipmap)for(const t of this._grid.coverageMipmap)e+=t.gpuMemoryUsage;return e}},{key:"test",get:function(){return{coverage:this._grid.coverageMipmap,blur:[this._blur0Fbo,this._blur1Fbo]}}}]),e}();e.Highlight=M,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));