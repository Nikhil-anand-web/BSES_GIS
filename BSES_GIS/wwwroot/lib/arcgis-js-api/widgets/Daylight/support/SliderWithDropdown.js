/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../Slider","./SliderWithDropdownViewModel","../../support/TimezonePicker","../../support/widgetUtils","../../support/jsxFactory"],(function(e,o,t,r,n,i,s,l,p,a,c,d){"use strict";const _="esri-slider-with-dropdown",h={label:"esri-slider__label",box:`${_}__box`,boxDropDownOn:`${_}__box--drop-down-on`,boxDropDownOff:`${_}__box--drop-down-off`};let b=function(o){function t(e,t){var r;return(r=o.call(this,e,t)||this).viewModel=new p.SliderWithDropdownViewModel,r.showDropDown=!0,r._labelWidth=0,r._onLabelAfterCreate=e=>{const o="label-size-observer";r.removeHandles(o),r.addHandles(c.onResize(e,(({contentRect:e})=>{r._labelWidth=e.width})),o)},r._getLabelStyles=()=>{if(!r.trackElement)return;const e=r._trackWidth,o=r._labelWidth/2,t=r.getCurrentPosition(),n=t-o,i=t+o;let s=-o;return n<0?s+=-n:i>e&&(s+=e-i),{left:`${s}px`}},r._onTimezoneChange=e=>{r.viewModel.utcOffset=e},r._onTimezonePickerOpen=()=>{r.viewModel.timezonePickerOpen=!0},r._onTimezonePickerClose=()=>{r.viewModel.timezonePickerOpen=!1},r}return e._inherits(t,o),t.prototype.renderThumbLabel=function(o){const{showDropDown:r,viewModel:n}=this;return d.tsx("div",{key:"thumb-label",class:this.classes({[h.box]:!0,[h.label]:!0,[h.boxDropDownOn]:r,[h.boxDropDownOff]:!r}),styles:this._getLabelStyles(),afterCreate:this._onLabelAfterCreate},e._get(e._getPrototypeOf(t.prototype),"renderThumbLabel",this).call(this,o),r&&d.tsx(a.TimezonePicker,{value:n.utcOffset,open:n.timezonePickerOpen,onChange:this._onTimezoneChange,onOpen:this._onTimezonePickerOpen,onClose:this._onTimezonePickerClose}))},e._createClass(t)}(l);o.__decorate([t.property()],b.prototype,"viewModel",void 0),o.__decorate([t.property()],b.prototype,"showDropDown",void 0),o.__decorate([t.property()],b.prototype,"_labelWidth",void 0),b=o.__decorate([s.subclass("esri.widgets.Daylight.support.SliderWithDropdown")],b);return b}));