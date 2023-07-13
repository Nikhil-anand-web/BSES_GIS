/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../chunks/mat3f32","../brushes","../Container","./ClippingInfo","./enums"],(function(e,t,r,n,s,i,a){"use strict";let o=function(t){function s(){var e;return(e=t.apply(this,arguments)||this).name=e.constructor.name,e}e._inherits(s,t);var o=s.prototype;return o.beforeRender=function(t){e._get(e._getPrototypeOf(s.prototype),"beforeRender",this).call(this,t),this.updateTransforms(t.state)},o._createTransforms=function(){return{dvs:r.create()}},o.doRender=function(e){const t=this.createRenderParams(e),{painter:r,globalOpacity:n,profiler:s,drawPhase:i}=t,o=i===a.WGLDrawPhase.LABEL||i===a.WGLDrawPhase.HIGHLIGHT?1:n*this.computedOpacity;s.recordContainerStart(this.name),r.beforeRenderLayer(t,this._clippingInfos?255:0,o),this.renderChildren(t),r.compositeLayer(t,o),s.recordContainerEnd()},o.renderChildren=function(e){null==this._renderPasses&&(this._renderPasses=this.prepareRenderPasses(e.painter));for(const r of this._renderPasses)try{r.render(e)}catch(t){}},o.createRenderParams=function(e){return e.requireFBO=this.requiresDedicatedFBO,e},o.prepareRenderPasses=function(e){return[e.registerRenderPass({name:"clip",brushes:[n.brushes.clip],target:()=>this._clippingInfos,drawPhase:a.WGLDrawPhase.MAP|a.WGLDrawPhase.LABEL|a.WGLDrawPhase.LABEL_ALPHA|a.WGLDrawPhase.DEBUG|a.WGLDrawPhase.HIGHLIGHT})]},o.updateTransforms=function(e){for(const t of this.children)t.setTransform(e)},o.onAttach=function(){e._get(e._getPrototypeOf(s.prototype),"onAttach",this).call(this),this._updateClippingInfo()},o.onDetach=function(){e._get(e._getPrototypeOf(s.prototype),"onDetach",this).call(this),this._updateClippingInfo()},o._updateClippingInfo=function(){null!=this._clippingInfos&&(this._clippingInfos.forEach((e=>e.destroy())),this._clippingInfos=null);const e=this.stage;if(!e)return;const t=this._clips;null!=t&&t.length&&(this._clippingInfos=t.items.map((t=>i.fromClipArea(e,t)))),this.requestRender()},e._createClass(s,[{key:"clips",set:function(e){this._clips=e,this.children.forEach((t=>t.clips=e)),this._updateClippingInfo()}}]),s}(s.Container);return o}));
