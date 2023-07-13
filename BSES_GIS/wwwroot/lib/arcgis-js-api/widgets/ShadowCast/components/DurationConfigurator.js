/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/uuid","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../Widget","../css","../DurationMode","./Label","./LabeledColorPicker","../../support/componentsUtils","../../support/widgetUtils","../../support/decorators/messageBundle","../../support/jsxFactory"],(function(o,e,t,r,s,i,n,a,c,l,u,d,p,b,C,_,h,g,m){"use strict";function y({active:o,label:e,...t}){return m.tsx("calcite-button",{alignment:"center",appearance:o?"solid":"outline",scale:"s",width:"half",...t},e)}e.DurationConfigurator=function(e){function r(o){var t;return(t=e.call(this,o)||this).colorPickerVisible=!0,t._modeSelectorId=`mode-selector-${s.generateUUID()}`,t._colorPickerId=`color-picker-${s.generateUUID()}`,t._onColorChange=o=>{t.options.color=o},t._setContinuous=()=>{t.options.mode=p.DurationMode.Continuous},t._setHourly=()=>{t.options.mode=p.DurationMode.Hourly},t}t._inherits(r,e);var i=r.prototype;return i.loadDependencies=function(){return _.loadCalciteComponents({button:()=>new Promise(((e,t)=>o(["../../../chunks/calcite-button"],e,t))),label:()=>new Promise(((e,t)=>o(["../../../chunks/calcite-label"],e,t)))})},i.render=function(){const o=this._messages.duration,{color:e,mode:t}=this.options;return m.tsx("div",{class:d.DURATION_CONFIGURATOR_CSS.base},m.tsx(b.Label,{for:this._modeSelectorId,label:o.modeLabel},m.tsx("div",{class:d.DURATION_CONFIGURATOR_CSS.radioGroup},m.tsx(y,{active:t===p.DurationMode.Continuous,label:o.continuousLabel,onclick:this._setContinuous}),m.tsx(y,{active:t===p.DurationMode.Hourly,label:o.hourlyLabel,onclick:this._setHourly}))),this.colorPickerVisible&&m.tsx(C.LabeledColorPicker,{id:this._colorPickerId,label:o.colorLabel,value:e,onChange:this._onColorChange}))},t._createClass(r)}(u),r.__decorate([i.property()],e.DurationConfigurator.prototype,"options",void 0),r.__decorate([i.property()],e.DurationConfigurator.prototype,"colorPickerVisible",void 0),r.__decorate([i.property(),g.messageBundle("esri/widgets/ShadowCast/t9n/ShadowCast")],e.DurationConfigurator.prototype,"_messages",void 0),e.DurationConfigurator=r.__decorate([l.subclass("esri.widgets.ShadowCast.components.DurationConfigurator")],e.DurationConfigurator),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
