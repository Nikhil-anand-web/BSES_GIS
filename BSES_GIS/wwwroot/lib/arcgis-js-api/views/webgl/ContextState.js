/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","./enums"],(function(e,t,i){"use strict";let l=t._createClass((function(){this.blend=!1,this.blendColor={r:0,g:0,b:0,a:0},this.blendFunction={srcRGB:i.BlendFactor.ONE,dstRGB:i.BlendFactor.ZERO,srcAlpha:i.BlendFactor.ONE,dstAlpha:i.BlendFactor.ZERO},this.blendEquation={mode:i.BlendOperation.ADD,modeAlpha:i.BlendOperation.ADD},this.colorMask={r:!0,g:!0,b:!0,a:!0},this.faceCulling=!1,this.cullFace=i.Face.BACK,this.frontFace=i.CullMode.CCW,this.scissorTest=!1,this.scissorRect={x:0,y:0,width:0,height:0},this.depthTest=!1,this.depthFunction=i.CompareFunction.LESS,this.clearDepth=1,this.depthWrite=!0,this.depthRange={zNear:0,zFar:1},this.viewport=null,this.stencilTest=!1,this.polygonOffsetFill=!1,this.polygonOffset=[0,0],this.stencilFunction={face:i.Face.FRONT_AND_BACK,func:i.CompareFunction.ALWAYS,ref:0,mask:1},this.clearStencil=0,this.stencilWriteMask=1,this.stencilOperation={face:i.Face.FRONT_AND_BACK,fail:i.StencilOperation.KEEP,zFail:i.StencilOperation.KEEP,zPass:i.StencilOperation.KEEP},this.clearColor={r:0,g:0,b:0,a:0},this.program=null,this.vertexBuffer=null,this.indexBuffer=null,this.uniformBuffer=null,this.pixelPackBuffer=null,this.pixelUnpackBuffer=null,this.copyReadBuffer=null,this.copyWriteBuffer=null,this.uniformBufferBindingPoints=new Array,this.readFramebuffer=null,this.drawFramebuffer=null,this.renderbuffer=null,this.activeTexture=0,this.textureUnitMap=new Array,this.vertexArrayObject=null}));e.ContextState=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));