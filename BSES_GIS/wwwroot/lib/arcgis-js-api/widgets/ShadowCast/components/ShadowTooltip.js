/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/maybe","../../../core/reactiveUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","./ShadowTooltipContent"],(function(t,e,o,n,i,a,r,c,s,d,l,p){"use strict";t.ShadowTooltip=function(t){function o(e){var o;return(o=t.call(this,e)||this)._updateHandle=null,o._contentContainer=o._createContainer(),o}e._inherits(o,t);var n=o.prototype;return n.initialize=function(){this.container.appendChild(this._contentContainer),this._contentWidget=new p.ShadowTooltipContent({},this._contentContainer),this._updateHandle=a.watch((()=>{const t=this._contentContainer,{screenPoint:e,accumulatedShadowTime:o}=this.viewModel.tooltip;return{contentContainer:t,screenPoint:e,accumulatedShadowTime:o}}),(t=>this._update(t)),a.syncAndInitial)},n.destroy=function(){this._updateHandle=i.removeMaybe(this._updateHandle),this._contentWidget=i.destroyMaybe(this._contentWidget),this.container.contains(this._contentContainer)&&this.container.removeChild(this._contentContainer)},n._update=function({contentContainer:t,screenPoint:e,accumulatedShadowTime:o}){const{style:n}=t;null!=e?(n.display="block",n.transform=`translate(${e.x}px, ${e.y}px)`,this._contentWidget.accumulatedShadowTime=o):n.display="none"},n._createContainer=function(){const t=document.createElement("div"),{style:e}=t;return e.position="absolute",e.top="0",e.left="0",t},e._createClass(o,[{key:"testData",get:function(){return{displayedValue:"none"===this._contentContainer.style.display?null:this._contentWidget.container?.innerText}}}]),o}(n),o.__decorate([r.property()],t.ShadowTooltip.prototype,"viewModel",void 0),o.__decorate([r.property()],t.ShadowTooltip.prototype,"container",void 0),o.__decorate([r.property()],t.ShadowTooltip.prototype,"_contentContainer",void 0),o.__decorate([r.property()],t.ShadowTooltip.prototype,"_contentWidget",void 0),t.ShadowTooltip=o.__decorate([l.subclass("esri.widgets.ShadowCast.components.ShadowTooltip")],t.ShadowTooltip),Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));