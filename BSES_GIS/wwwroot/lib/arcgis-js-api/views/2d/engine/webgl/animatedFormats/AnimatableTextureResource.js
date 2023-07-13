/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../definitions","./utils"],(function(t,a,i,e){"use strict";let n=function(){function t(t,a,i,n){this._animation=t,this._frameData=null;const s=t=>{this._frameData=t,a.requestRender()};this.frameCount=this._animation.frameDurations.length,this.width=this._animation.width,this.height=this._animation.height,this._playHandle=e.play(this._animation,i,n,s)}var n=t.prototype;return n.destroy=function(){this._playHandle.remove()},n.bindFrame=function(t,a,e){t.bindTexture(a,e),null!=this._frameData&&(a.updateData(0,i.SPRITE_PADDING,i.SPRITE_PADDING,this._frameData.width,this._frameData.height,this._frameData),this._frameData=null)},a._createClass(t)}();t.AnimatableTextureResource=n,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
