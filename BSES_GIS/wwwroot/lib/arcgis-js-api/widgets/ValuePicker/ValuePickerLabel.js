/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../support/widgetUtils","../support/jsxFactory","./ValuePickerBaseComponent"],(function(e,t,s,r,o,i,n,l,u,a){"use strict";const c="esri-value-picker__label",p={border:`${c}-border`,text:`${c}-text`};let v=function(t){function s(e,s){var r;return(r=t.call(this,e,s)||this).items=null,r.type="label",r}e._inherits(s,t);var r=s.prototype;return r.render=function(){const{viewModel:e}=this;if(null==e)return u.tsx("div",null);const t=this.items?.find((({value:t})=>t===e.values?.[0]));return u.tsx("div",{class:c},u.tsx("div",{class:p.border},u.tsx("div",{class:p.text},t?.label)))},r.animate=function(e){this._step(1,e)},r.next=function(){this._step(1)},r.previous=function(){this._step(-1)},r._step=function(e,t=!1){const{viewModel:s,items:r}=this;if(!r?.length||!s)return;if(!s.values)return void(s.values=[r[0].value]);const o=r.findIndex((({value:e})=>e===s.values[0]));if(-1===o)return void(s.values=[r[0].value]);const i=o+e;i<0||i>=r.length?s.loop||t?s.values=[r[1===e?0:r.length-1].value]:"playing"===s.state&&s.pause():s.values=[r[i].value]},e._createClass(s,[{key:"canNext",get:function(){return!(!this.items||!this.viewModel)&&this.items.findIndex((({value:e})=>e===this.viewModel.values?.[0]))!==this.items.length-1}},{key:"canPlay",get:function(){return null!=this.viewModel&&!!this.items?.length}},{key:"canPrevious",get:function(){const{items:e,viewModel:t}=this;return!(!e||!t)&&0!==e.findIndex((({value:e})=>e===t.values?.[0]))}}]),s}(a);t.__decorate([s.property()],v.prototype,"canNext",null),t.__decorate([s.property()],v.prototype,"canPlay",null),t.__decorate([s.property()],v.prototype,"canPrevious",null),t.__decorate([s.property()],v.prototype,"items",void 0),t.__decorate([s.property()],v.prototype,"type",void 0),v=t.__decorate([n.subclass("esri.widgets.ValuePicker.ValuePickerLabel")],v);return v}));