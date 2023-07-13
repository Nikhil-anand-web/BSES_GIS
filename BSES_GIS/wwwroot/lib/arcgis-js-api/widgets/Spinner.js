/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/promiseUtils","../core/reactiveUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass","./Widget","./Spinner/SpinnerViewModel","./support/widgetUtils","./support/jsxFactory"],(function(e,i,t,n,o,s,r,l,c,a,p,u,h){"use strict";const d="esri-spinner",v={base:d,spinnerStart:`${d}--start`,spinnerFinish:`${d}--finish`};let w=function(i){function o(e,t){var n;return(n=i.call(this,e,t)||this)._animationDelay=500,n._animationPromise=null,n.viewModel=new p,n}e._inherits(o,i);var s=o.prototype;return s.initialize=function(){this.addHandles(n.watch((()=>this.visible),(e=>this._visibleChange(e))))},s.destroy=function(){this._animationPromise=null},s.show=function(e){const{location:i,promise:t}=e??{};i&&(this.viewModel.location=i),this.visible=!0;const n=()=>this.hide();t&&t.catch((()=>{})).then(n)},s.hide=function(){this.visible=!1},s.render=function(){const{visible:e}=this,{screenLocation:i}=this.viewModel,t=!!i,n=e&&t,o=!e&&t,s={[v.spinnerStart]:n,[v.spinnerFinish]:o},r=this._getPositionStyles();return h.tsx("div",{class:this.classes(v.base,s),styles:r})},s._visibleChange=function(e){if(e)return void(this.viewModel.screenLocationEnabled=!0);const i=t.after(this._animationDelay);this._animationPromise=i,i.catch((()=>{})).then((()=>{this._animationPromise===i&&(this.viewModel.screenLocationEnabled=!1,this._animationPromise=null)}))},s._getPositionStyles=function(){const{screenLocation:e,view:i}=this.viewModel;if(null==i||null==e)return{};const{padding:t}=i;return{left:e.x-t.left+"px",top:e.y-t.top+"px"}},e._createClass(o,[{key:"location",get:function(){return this.viewModel.location},set:function(e){this.viewModel.location=e}},{key:"view",get:function(){return this.viewModel.view},set:function(e){this.viewModel.view=e}},{key:"visible",get:function(){return this.viewModel.visible},set:function(e){this.viewModel.visible=e}}]),o}(a);i.__decorate([o.property()],w.prototype,"location",null),i.__decorate([o.property()],w.prototype,"view",null),i.__decorate([o.property({type:p})],w.prototype,"viewModel",void 0),i.__decorate([o.property()],w.prototype,"visible",null),w=i.__decorate([c.subclass("esri.widgets.Spinner")],w);return w}));