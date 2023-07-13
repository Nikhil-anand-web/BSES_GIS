/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../support/componentsUtils","../support/widgetUtils","../support/jsxFactory","./ValuePickerBaseComponent"],(function(e,t,o,s,r,l,i,a,n,c,u,p){"use strict";const d="esri-value-picker__combobox";let v=function(o){function s(e,t){var s;return(s=o.call(this,e,t)||this).items=null,s.placeholder=null,s.type="combobox",s}t._inherits(s,o);var r=s.prototype;return r.loadDependencies=function(){return n.loadCalciteComponents({combobox:()=>new Promise(((t,o)=>e(["../../chunks/calcite-combobox"],t,o))),"combobox-item":()=>new Promise(((t,o)=>e(["../../chunks/calcite-combobox-item"],t,o)))})},r.render=function(){const{viewModel:e}=this;if(null==e)return u.tsx("div",null);const t=e.values?.[0];return u.tsx("div",{class:d},u.tsx("calcite-combobox",{disabled:e.disabled,label:this.label,maxItems:10,overlayPositioning:"fixed",placeholder:this.placeholder??void 0,selectionMode:"single",onCalciteComboboxChange:t=>{Array.isArray(t.target.value)||(null!=e.values?e.values[0]!==t.target.value&&(e.values=[t.target.value]):e.values=[t.target.value])}},this.items?.map((({value:e,label:o},s)=>u.tsx("calcite-combobox-item",{key:s,selected:e===t,textLabel:o,value:e})))))},r.animate=function(e){this._step(1,e)},r.next=function(){this._step(1)},r.previous=function(){this._step(-1)},r._step=function(e,t=!1){const{viewModel:o,items:s}=this;if(!s?.length||!o)return;if(!o.values)return void(o.values=[s[0].value]);const r=s.findIndex((({value:e})=>e===o.values[0]));if(-1===r)return void(o.values=[s[0].value]);const l=r+e;l<0||l>=s.length?o.loop||t?o.values=[s[1===e?0:s.length-1].value]:"playing"===o.state&&o.pause():o.values=[s[l].value]},t._createClass(s,[{key:"canNext",get:function(){return!(!this.items||!this.viewModel)&&this.items.findIndex((({value:e})=>e===this.viewModel.values?.[0]))!==this.items.length-1}},{key:"canPlay",get:function(){return null!=this.viewModel&&!!this.items?.length}},{key:"canPrevious",get:function(){const{items:e,viewModel:t}=this;return!(!e||!t)&&0!==e.findIndex((({value:e})=>e===t.values?.[0]))}}]),s}(p);o.__decorate([s.property()],v.prototype,"canNext",null),o.__decorate([s.property()],v.prototype,"canPlay",null),o.__decorate([s.property()],v.prototype,"canPrevious",null),o.__decorate([s.property()],v.prototype,"items",void 0),o.__decorate([s.property()],v.prototype,"placeholder",void 0),o.__decorate([s.property()],v.prototype,"type",void 0),v=o.__decorate([a.subclass("esri.widgets.ValuePicker.ValuePickerCombobox")],v);return v}));