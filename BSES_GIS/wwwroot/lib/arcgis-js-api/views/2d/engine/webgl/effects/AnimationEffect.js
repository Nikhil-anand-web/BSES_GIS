/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/has","../definitions","../VertexStream","./Effect"],(function(e,t,i,n,r,a){"use strict";let o=function(e){function a(){var t;return(t=e.apply(this,arguments)||this).defines=[],t._desc={vsPath:"fx/integrate",fsPath:"fx/integrate",attributes:new Map([["a_position",0]])},t}t._inherits(a,e);var o=a.prototype;return o.dispose=function(){this._quad&&this._quad.dispose()},o.bind=function(){},o.unbind=function(){},o.draw=function(e,t){if(!t?.size)return;const{context:i,renderingOptions:a}=e;this._quad||(this._quad=new r(i,[0,0,1,0,0,1,1,1]));const o=i.getBoundFramebufferObject(),{x:s,y:u,width:f,height:c}=i.getViewport();t.bindTextures(i);const d=t.getBlock(n.ATTRIBUTE_DATA_ANIMATION);if(null==d)return;const l=d.getFBO(i),_=d.getFBO(i,1);i.setViewport(0,0,t.size,t.size),this._computeDelta(e,_,a.labelsAnimationTime),this._updateAnimationState(e,_,l),i.bindFramebuffer(o),i.setViewport(s,u,f,c)},o._computeDelta=function(e,t,r){const{context:a,painter:o,displayLevel:s}=e,u=o.materialManager.getProgram(this._desc,["delta"]);a.bindFramebuffer(t),a.setClearColor(0,0,0,0),a.clear(a.gl.COLOR_BUFFER_BIT),a.useProgram(u);const f=i("featurelayer-animation-enabled")?r:1;u.setUniform1i("u_maskTexture",n.TEXTURE_BINDING_ATTRIBUTE_DATA_0),u.setUniform1i("u_sourceTexture",n.TEXTURE_BINDING_ATTRIBUTE_DATA_1),u.setUniform1f("u_timeDelta",e.deltaTime),u.setUniform1f("u_animationTime",f),u.setUniform1f("u_zoomLevel",Math.round(10*s)),this._quad.draw()},o._updateAnimationState=function(e,t,i){const{context:n,painter:r}=e,a=r.materialManager.getProgram(this._desc,["update"]);n.bindTexture(t.colorTexture,1),n.useProgram(a),a.setUniform1i("u_sourceTexture",1),n.bindFramebuffer(i),n.setClearColor(0,0,0,0),n.clear(n.gl.COLOR_BUFFER_BIT),this._quad.draw()},t._createClass(a)}(a.Effect);e.AnimationEffect=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));