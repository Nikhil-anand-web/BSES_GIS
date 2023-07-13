/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/promiseUtils","../core/unitUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass","./Widget","./AreaMeasurement3D/AreaMeasurement3DViewModel","./support/decorators/accessibleHandler","./support/decorators/messageBundle","./support/jsxFactory","./support/widgetUtils"],(function(e,t,s,n,i,r,a,o,l,u,c,p,d,m,_){"use strict";const y="esri-area-measurement-3d",v=`${y}__measurement`,b=`${y}__units`,h={buttonDisabled:"esri-button--disabled",base:`${y} esri-widget esri-widget--panel`,container:`${y}__container`,hint:`${y}__hint`,hintText:`${y}__hint-text`,panelError:`${y}__panel--error`,measurement:v,measurementItem:`${v}-item`,measurementItemDisabled:`${v}-item--disabled`,measurementItemTitle:`${v}-item-title`,measurementItemValue:`${v}-item-value`,settings:`${y}__settings`,units:b,unitsLabel:`${b}-label`,unitsSelect:`${b}-select esri-select`,unitsSelectWrapper:`${b}-select-wrapper`,actionSection:`${y}__actions`,newMeasurementButton:`${y}__clear-button esri-button esri-button--primary`,widgetIcon:"esri-icon-measure-area"};let g=function(t){function i(e,s){var n;return(n=t.call(this,e,s)||this).iconClass=h.widgetIcon,n.icon=null,n.viewModel=new c,n}e._inherits(i,t);var r=i.prototype;return r.render=function(){const{messages:e,messagesUnits:t}=this,{supported:s,active:i,measurement:r,state:a,unit:o}=this.viewModel,l="disabled"===a,u="measuring"===a||"measured"===a,c=i&&"ready"===a?m.tsx("section",{key:"esri-area-measurement-3d__hint",class:h.hint},m.tsx("p",{class:h.hintText},e.hint),m.tsx("p",{class:h.hintText},e.snappingDisablePromptAlternate)):null,p=s?null:m.tsx("section",{key:"esri-area-measurement-3d__unsupported",class:h.panelError},m.tsx("p",null,e.unsupported)),d=(t,s,n)=>{switch(s.state){case"available":return m.tsx("div",{key:`${n}-enabled`,class:h.measurementItem},m.tsx("span",{class:h.measurementItemTitle},t),m.tsx("span",{"aria-live":"polite",class:h.measurementItemValue},s.text));case"unavailable":return m.tsx("div",{key:`${n}-disabled`,class:this.classes(h.measurementItem,h.measurementItemDisabled)},m.tsx("span",{class:h.measurementItemTitle},t));case"invalid":return m.tsx("div",{key:`${n}-enabled`,class:h.measurementItem},m.tsx("span",{class:h.measurementItemTitle},t),m.tsx("span",{class:h.measurementItemValue},e.notApplicable))}},_=u&&r?m.tsx("section",{key:"esri-area-measurement-3d__measurement",class:h.measurement},d(e.area,r.area,"area"),d(e.perimeterLength,r.perimeterLength,"perimeter-length")):null,y=`${this.id}__units`,v=m.tsx("label",{class:h.unitsLabel,for:y},e.unit),b=m.tsx("div",{class:h.unitsSelectWrapper},m.tsx("select",{class:h.unitsSelect,id:y,onchange:this._changeUnit,bind:this,value:o},this.viewModel.unitOptions.map((e=>m.tsx("option",{key:e,value:e},n.isMeasurementSystem(e)?t.systems[e]:t.units[e]?.pluralCapitalized))))),g=u?m.tsx("section",{key:"esri-area-measurement-3d__units",class:h.units},v,b):null,w=u?m.tsx("div",{key:"settings",class:h.settings},g):null,x=!s||i&&!u?null:m.tsx("div",{class:h.actionSection},m.tsx("button",{bind:this,class:this.classes(h.newMeasurementButton,l&&h.buttonDisabled),disabled:l,onclick:this._newMeasurement,type:"button"},e.newMeasurement)),M=this.visible?m.tsx("div",{class:h.container},p,c,w,_,x):null;return m.tsx("div",{"aria-label":e.widgetLabel,key:this,class:h.base,role:"presentation"},M)},r._newMeasurement=function(){s.ignoreAbortErrors(this.viewModel.start())},r._changeUnit=function(e){const t=e.target,s=t.options[t.selectedIndex];s&&(this.unit=s.value)},e._createClass(i,[{key:"view",get:function(){return this.viewModel.view},set:function(e){this.viewModel.view=e}},{key:"visible",get:function(){return this.viewModel.visible},set:function(e){this.viewModel.visible=e}},{key:"active",get:function(){return this.viewModel.active}},{key:"analysis",get:function(){return this.viewModel.analysis},set:function(e){this.viewModel.analysis=e}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(e){this._overrideIfSome("label",e)}},{key:"unitOptions",get:function(){return this.viewModel.unitOptions},set:function(e){this.viewModel.unitOptions=e}},{key:"unit",get:function(){return this.viewModel.unit},set:function(e){this.viewModel.unit=e}}]),i}(u);t.__decorate([i.property()],g.prototype,"view",null),t.__decorate([i.property()],g.prototype,"visible",null),t.__decorate([i.property()],g.prototype,"active",null),t.__decorate([i.property({constructOnly:!0,nonNullable:!0})],g.prototype,"analysis",null),t.__decorate([i.property()],g.prototype,"iconClass",void 0),t.__decorate([i.property()],g.prototype,"icon",void 0),t.__decorate([i.property()],g.prototype,"label",null),t.__decorate([i.property(),d.messageBundle("esri/widgets/AreaMeasurement3D/t9n/AreaMeasurement3D")],g.prototype,"messages",void 0),t.__decorate([i.property(),d.messageBundle("esri/core/t9n/Units")],g.prototype,"messagesUnits",void 0),t.__decorate([i.property()],g.prototype,"uiStrings",void 0),t.__decorate([i.property({type:c})],g.prototype,"viewModel",void 0),t.__decorate([i.property()],g.prototype,"unitOptions",null),t.__decorate([i.property()],g.prototype,"unit",null),t.__decorate([p.accessibleHandler()],g.prototype,"_newMeasurement",null),t.__decorate([p.accessibleHandler()],g.prototype,"_changeUnit",null),g=t.__decorate([l.subclass("esri.widgets.AreaMeasurement3D")],g);return g}));
