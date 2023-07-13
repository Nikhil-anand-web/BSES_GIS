/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../Widget","../../support/widgetUtils","../../support/jsxFactory"],(function(e,t,o,r,l,s,i,n,a,c,p){"use strict";const u="esri-building-level-picker-item",h={container:u,base:`${u}__base`,hover:`${u}--hover`,active:`${u}--active`};e.LevelItem=function(e){function o(t,o){var r;return(r=e.call(this,t,o)||this).active=!1,r.hovering=!1,r.width=0,r.height=0,r.onSelect=()=>{},r.onFocus=()=>{},r.onBlur=()=>{},r._baseElement=null,r}t._inherits(o,e);var r=o.prototype;return r.render=function(){return p.tsx("div",{key:this,bind:this,class:this.classes(h.container,{[h.active]:this.active,[h.hover]:this.hovering}),styles:{height:`${this.height}px`}},this._renderBase())},r.focus=function(){null!=this._baseElement&&this._baseElement.focus()},r._renderBase=function(){const e=this.width,t=.8*this.width;return p.tsx("div",{class:h.base,styles:{width:`${Math.round(e)}px`,height:`${Math.round(e)}px`}},p.tsx("button",{bind:this,class:"rect",styles:{width:`${Math.round(t)}px`,height:`${Math.round(t)}px`},onclick:this.onSelect,onfocus:this.onFocus,onblur:this.onBlur,afterCreate:c.storeNode,"data-node-ref":"_baseElement","aria-label":this.label,title:this.label??"",tabIndex:-1,type:"button"}))},t._createClass(o)}(a),o.__decorate([r.property({nonNullable:!0})],e.LevelItem.prototype,"level",void 0),o.__decorate([r.property({nonNullable:!0})],e.LevelItem.prototype,"active",void 0),o.__decorate([r.property({nonNullable:!0})],e.LevelItem.prototype,"hovering",void 0),o.__decorate([r.property({nonNullable:!0})],e.LevelItem.prototype,"width",void 0),o.__decorate([r.property({nonNullable:!0})],e.LevelItem.prototype,"height",void 0),o.__decorate([r.property({nonNullable:!0})],e.LevelItem.prototype,"onSelect",void 0),o.__decorate([r.property({nonNullable:!0})],e.LevelItem.prototype,"onFocus",void 0),o.__decorate([r.property({nonNullable:!0})],e.LevelItem.prototype,"onBlur",void 0),e.LevelItem=o.__decorate([n.subclass("esri.widgets.BuildingExplorer.BuildingLevelPicker.LevelItem")],e.LevelItem),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));