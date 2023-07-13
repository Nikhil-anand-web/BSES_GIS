/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/reactiveUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass","./Widget","./Attribution/AttributionViewModel","./support/decorators/accessibleHandler","./support/decorators/messageBundle","./support/jsxFactory","./support/widgetUtils"],(function(e,t,r,i,o,s,n,c,d,p,a,l,u,_){"use strict";const h="esri-attribution",v={base:`${h} esri-widget`,poweredBy:`${h}__powered-by`,sources:`${h}__sources`,open:`${h}--open`,sourcesOpen:`${h}__sources--open`,link:`${h}__link`,widgetIcon:"esri-icon-description",interactive:"esri-interactive"};let y=function(t){function i(e,r){var i;return(i=t.call(this,e,r)||this)._isOpen=!1,i._attributionTextOverflowed=!1,i._prevSourceNodeHeight=0,i._resizeObserver=new ResizeObserver((e=>e.forEach((({target:e})=>i._checkSourceTextOverflow(e))))),i.iconClass=v.widgetIcon,i.icon=null,i.itemDelimiter=" | ",i.messages=null,i.viewModel=new p,i}e._inherits(i,t);var o=i.prototype;return o.initialize=function(){this.addHandles(r.on((()=>this.viewModel?.items),"change",(()=>this.scheduleRender())))},o.destroy=function(){this._resizeObserver?.disconnect()},o.render=function(){const e={[v.open]:this._isOpen};return u.tsx("div",{bind:this,class:this.classes(v.base,e),dir:"ltr",onclick:this._toggleState,onkeydown:this._toggleState},this.renderSourcesNode(),this.renderPoweredBy())},o.renderPoweredBy=function(){return u.tsx("div",{class:v.poweredBy},"Powered by"," ",u.tsx("a",{class:v.link,href:"http://www.esri.com/",target:"_blank",rel:"noreferrer"},"Esri"))},o.renderSourcesNode=function(){const e=this._isOpen,t=this._isInteractive,r=t?"0":"",{attributionText:i}=this,o={[v.sourcesOpen]:e,[v.interactive]:t};return u.tsx("div",{afterCreate:this._afterSourcesNodeCreate,bind:this,class:this.classes(v.sources,o),innerHTML:i,tabindex:r})},o._afterSourcesNodeCreate=function(e){this._prevSourceNodeHeight=e.clientWidth,this._resizeObserver.observe(e)},o._checkSourceTextOverflow=function(e){let t=!1;const{clientHeight:r,clientWidth:i,scrollWidth:o}=e,s=o>i,n=this._attributionTextOverflowed!==s;if(this._attributionTextOverflowed=s,n&&(t=!0),this._isOpen){const e=r<this._prevSourceNodeHeight;this._prevSourceNodeHeight=r,e&&(this._isOpen=!1,t=!0)}t&&this.scheduleRender()},o._toggleState=function(){this._isInteractive&&(this._isOpen=!this._isOpen)},e._createClass(i,[{key:"_isInteractive",get:function(){return this._isOpen||this._attributionTextOverflowed}},{key:"attributionText",get:function(){return this.viewModel.items.reduce(((e,t)=>(e.includes(t.text)||e.push(t.text),e)),[]).join(this.itemDelimiter)}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(e){this._overrideIfSome("label",e)}},{key:"view",get:function(){return this.viewModel.view},set:function(e){this.viewModel.view=e}}]),i}(d);t.__decorate([i.property()],y.prototype,"_isOpen",void 0),t.__decorate([i.property()],y.prototype,"_isInteractive",null),t.__decorate([i.property()],y.prototype,"_attributionTextOverflowed",void 0),t.__decorate([i.property()],y.prototype,"_prevSourceNodeHeight",void 0),t.__decorate([i.property({readOnly:!0,dependsOn:["viewModel.items.length","itemDelimiter"]})],y.prototype,"attributionText",null),t.__decorate([i.property()],y.prototype,"iconClass",void 0),t.__decorate([i.property()],y.prototype,"icon",void 0),t.__decorate([i.property()],y.prototype,"itemDelimiter",void 0),t.__decorate([i.property()],y.prototype,"label",null),t.__decorate([i.property(),l.messageBundle("esri/widgets/Attribution/t9n/Attribution")],y.prototype,"messages",void 0),t.__decorate([i.property()],y.prototype,"view",null),t.__decorate([i.property({type:p})],y.prototype,"viewModel",void 0),t.__decorate([a.accessibleHandler()],y.prototype,"_toggleState",null),y=t.__decorate([c.subclass("esri.widgets.Attribution")],y);return y}));