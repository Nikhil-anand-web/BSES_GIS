/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../chunks/mat3","../../../../chunks/mat3f32","../../../webgl/BufferObject","../../../webgl/FramebufferObject","../../../../core/arrayUtils","../../../../core/has","../../../webgl/checkWebGLError","../../../webgl/contextUtils","../../../webgl/enums","../../../../chunks/builtins","../../../webgl/GLObjectType","../../../webgl/Texture","../../../webgl/VertexArrayObject","../../engine/DisplayObject","../../../webgl/VertexElementDescriptor"],(function(e,t,r,s,n,a,i,o,c,f,u,h,l,_,g,d,m){"use strict";const b={geometry:[new m.VertexElementDescriptor("a_PositionAndFlags",3,u.DataType.SHORT,0,6)]},v=new Map;v.set("a_PositionAndFlags",0);const p={vsPath:"debug/overlay",fsPath:"debug/overlay",attributes:v};return function(a){function i(e){var t;return(t=a.call(this)||this)._conf=e,t}e._inherits(i,a),i.makeFlags=function(e,t){return e|t<<2};var o=i.prototype;return o._createTransforms=function(){return{dvs:s.create()}},o.doRender=function(e){this._updateTransforms(e),this._ensureResources(e);const{context:t}=e;t.useProgram(this._program),this._program.setUniformMatrix3fv("u_dvsMat3",this.transforms.dvs),this._program.setUniform4fv("u_colors",this._conf.getColors(e)),this._program.setUniform1fv("u_opacities",this._conf.getOpacities(e));const{vertexData:r,indexData:s}=this._conf.getMesh(e);this._vertexBuffer.setData(r),this._indexBuffer.setData(s),t.bindVAO(this._vertexArray),t.setBlendingEnabled(!0),t.setBlendFunction(u.BlendFactor.ONE,u.BlendFactor.ONE_MINUS_SRC_ALPHA),t.setDepthTestEnabled(!1),t.setStencilTestEnabled(!1),t.setColorMask(!0,!0,!0,!0),t.drawElements(u.PrimitiveType.TRIANGLES,s.length,u.DataType.UNSIGNED_INT,0)},o.onDetach=function(){this._vertexArray=t.disposeMaybe(this._vertexArray)},o._updateTransforms=function(e){r.identity(this.transforms.dvs),r.translate(this.transforms.dvs,this.transforms.dvs,[-1,1]),r.scale(this.transforms.dvs,this.transforms.dvs,[2/e.state.size[0],-2/e.state.size[1],1])},o._ensureResources=function(e){const{context:t}=e;this._program||(this._program=e.painter.materialManager.getProgram(p)),this._vertexBuffer||(this._vertexBuffer=n.BufferObject.createVertex(t,u.Usage.STREAM_DRAW)),this._indexBuffer||(this._indexBuffer=n.BufferObject.createIndex(t,u.Usage.STREAM_DRAW)),this._vertexArray||(this._vertexArray=new g.VertexArrayObject(t,v,b,{geometry:this._vertexBuffer},this._indexBuffer))},e._createClass(i)}(d.DisplayObject)}));
