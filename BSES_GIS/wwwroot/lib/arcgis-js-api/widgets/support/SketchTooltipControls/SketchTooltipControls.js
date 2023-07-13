/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../Widget","../componentsUtils","../widgetUtils","../decorators/messageBundle","../jsxFactory"],(function(e,o,t,s,r,i,c,l,n,a,p,d,h,u){"use strict";const g={base:"esri-sketch-tooltip-controls",esriWidget:"esri-widget",widgetIcon:"esri-icon-gear"};o.SketchTooltipControls=function(o){function s(e){var t;return(t=o.call(this,e)||this).viewModel=null,t.iconClass=g.widgetIcon,t.icon=null,t._onEnabledChange=e=>{const o=e.target;t.tooltipOptions.enabled=o.checked},t}t._inherits(s,o);var r=s.prototype;return r.loadDependencies=function(){return p.loadCalciteComponents({block:()=>new Promise(((o,t)=>e(["../../../chunks/calcite-block"],o,t))),label:()=>new Promise(((o,t)=>e(["../../../chunks/calcite-label"],o,t))),switch:()=>new Promise(((o,t)=>e(["../../../chunks/calcite-switch"],o,t)))})},r.render=function(){return u.tsx("div",{class:g.base},u.tsx("calcite-block",{heading:"",open:!0},u.tsx("calcite-label",{layout:"inline-space-between"},this.messages?.enabledToggle,u.tsx("calcite-switch",{checked:this.tooltipOptions.enabled,onCalciteSwitchChange:this._onEnabledChange}))))},t._createClass(s,[{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(e){this._overrideIfSome("label",e)}}]),s}(a),s.__decorate([r.property()],o.SketchTooltipControls.prototype,"viewModel",void 0),s.__decorate([r.property()],o.SketchTooltipControls.prototype,"iconClass",void 0),s.__decorate([r.property()],o.SketchTooltipControls.prototype,"icon",void 0),s.__decorate([r.property()],o.SketchTooltipControls.prototype,"label",null),s.__decorate([r.property(),h.messageBundle("esri/widgets/support/SketchTooltipControls/t9n/SketchTooltipControls")],o.SketchTooltipControls.prototype,"messages",void 0),s.__decorate([r.property()],o.SketchTooltipControls.prototype,"tooltipOptions",void 0),o.SketchTooltipControls=s.__decorate([n.subclass("esri.widgets.Editor.components.SketchTooltipControls")],o.SketchTooltipControls),Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));