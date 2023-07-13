/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../intl","../core/Handles","../core/maybe","../core/reactiveUtils","../core/timeUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass","../intl/substitute","./Slider","./Widget","./ShadowCast/css","./ShadowCast/ShadowCastState","./ShadowCast/ShadowCastViewModel","./ShadowCast/ShadowCastVisibleElements","./ShadowCast/ShadowVisualizationType","./ShadowCast/components/DiscreteConfigurator","./ShadowCast/components/DurationConfigurator","./ShadowCast/components/ShadowTooltip","./ShadowCast/components/ThresholdConfigurator","./support/componentsUtils","./support/DatePicker","./support/Heading","./support/timeWidgetUtils","./support/TimezonePicker","./support/widgetUtils","./support/decorators/messageBundle","./support/jsxFactory","../intl/date"],(function(e,i,t,o,s,a,n,l,r,d,c,u,p,h,m,v,S,w,y,_,g,C,f,b,T,M,k,z,V,D,x,P,L,O){"use strict";var R;!function(e){e.Slider="slider"}(R||(R={}));const E={hour:"2-digit",minute:"2-digit",timeZone:"UTC"},A=/(.*)\s(.*)/,I={labelFormatFunction:V.formatSliderLabel,min:0,max:1439,steps:15,rangeLabelInputsEnabled:!1,visibleElements:{labels:!1,rangeLabels:!1},tickConfigs:[{mode:"position",values:[0,360,720,1080,1439],labelsVisible:!0,tickCreatedFunction:(e,i,t)=>{i.classList.add(S.CSS.timeRangePrimaryTick),t.classList.add(S.CSS.timeRangePrimaryTickLabel);const o=t.innerText.match(A);o&&(t.innerHTML=`${o[1]}<br><div class="${S.CSS.timeRangeAMPMLabel}">${o[2]}</div>`)}},{mode:"position",values:[120,240,480,600,840,960,1200,1320],tickCreatedFunction:(e,i)=>{i.classList.add(S.CSS.timeRangeSecondaryTick)}}]};let H=function(t){function o(e,i){var o;return(o=t.call(this,e,i)||this).viewModel=null,o.headingLevel=4,o.iconClass=S.CSS.widgetIcon,o.icon=null,o.visibleElements=new _,o._handles=new s,o._defaultViewModel=null,o._timeSlider=new m({...I,container:document.createElement("div")}),o._tooltip=null,o._onTimezoneChange=e=>{o.viewModel.utcOffset=e},o._onDateChange=e=>{o.viewModel.date=e},e?.viewModel||(o._defaultViewModel=new y({view:e?.view}),o.viewModel=o._defaultViewModel),o}i._inherits(o,t);var r=o.prototype;return r.initialize=function(){this._handles.add([n.watch((()=>({viewModel:this.viewModel,slider:this._timeSlider})),(e=>this._connectTimeSlider(e)),n.syncAndInitial),n.watch((()=>({container:a.applySome(this.view,(e=>e.surface)),viewModel:this.viewModel,tooltipVisible:this.visibleElements.tooltip})),(({container:e,viewModel:i,tooltipVisible:t})=>{this._tooltip=a.destroyMaybe(this._tooltip),null!=e&&t&&(this._tooltip=new b.ShadowTooltip({viewModel:i,container:e}))}),n.syncAndInitial),n.watch((()=>({viewModel:this.viewModel,visible:this.visible})),(({viewModel:e,visible:i})=>e.setRunning(i)),n.syncAndInitial)])},r.destroy=function(){this._handles=a.destroyMaybe(this._handles),this._timeSlider=a.destroyMaybe(this._timeSlider),null!=this._defaultViewModel&&this.viewModel!==this._defaultViewModel&&this._defaultViewModel.destroy()},r.loadDependencies=function(){return M.loadCalciteComponents({select:()=>new Promise(((i,t)=>e(["../chunks/calcite-select"],i,t))),option:()=>new Promise(((i,t)=>e(["../chunks/calcite-option"],i,t)))})},r.render=function(){const{visibleElements:e,viewModel:i}=this,t=i.state===w.ShadowCastState.Disabled;return L.tsx("div",{key:this,class:this.classes(S.CSS.base,S.CSS.esriWidget,{[S.CSS.esriWidgetDisabled]:t})},this._renderTimeRangeSection(),e.visualizationOptions&&this._renderVisualizationOptionsSection())},r._connectTimeSlider=function({viewModel:e,slider:i}){if(this._handles.remove(R.Slider),null==i)return;const t=e=>l.convertTime(e,"milliseconds","minutes"),o=e=>l.convertTime(e,"minutes","milliseconds"),s=({index:i,value:t})=>{0===i?e.startTimeOfDay=o(t):e.endTimeOfDay=o(t)};this._handles.add([n.watch((()=>[e.startTimeOfDay,e.endTimeOfDay]),(e=>{i.values=e.map(t)}),n.syncAndInitial),i.on("thumb-change",s),i.on("thumb-drag",s),i.on("segment-drag",(()=>{[e.startTimeOfDay,e.endTimeOfDay]=i.values.map(o)}))],R.Slider)},r._renderTimeRangeSection=function(){const{visibleElements:e}=this;return e.timeRangeSlider||e.datePicker?L.tsx("section",{key:"time-range",class:S.CSS.timeRange},L.tsx(z.Heading,{level:this.headingLevel},this.messages.timeLabel),e.timeRangeSlider&&this._renderTimeRange(),e.datePicker&&this._renderDatePicker()):null},r._renderTimeRange=function(){const{messages:e,viewModel:i,visibleElements:t}=this,{startTimeOfDay:o,endTimeOfDay:s}=i,[a,n]=[o,s].map((e=>O.formatDate(new Date(e),E)));return[L.tsx("div",{key:"time-range-indicator",class:S.CSS.timeRangeIndicator},h.substitute(e.timeRange,{start:a,end:n}),t.timezone&&L.tsx(D.TimezonePicker,{value:i.utcOffset,onChange:this._onTimezoneChange})),L.tsx("div",{key:"time-slider-container",bind:this,afterCreate:this._timeSliderContainerAfterCreate,afterRemoved:this._timeSliderContainerAfterRemoved})]},r._timeSliderContainerAfterCreate=function(e){const i=this._timeSlider?.container;i&&e.appendChild(i)},r._timeSliderContainerAfterRemoved=function(e){const i=this._timeSlider?.container;i&&e.removeChild(i)},r._renderDatePicker=function(){return L.tsx("div",{key:"date-picker",class:S.CSS.datePickerContainer},L.tsx(k,{value:this.viewModel.date,onChange:this._onDateChange}))},r._renderVisualizationOptionsSection=function(){const{headingLevel:e,messages:i,viewModel:t,visibleElements:o}=this,s=o.colorPicker,a=e=>this.classes(t.visualizationType===e?null:S.CSS.visualizationConfigHidden);return L.tsx("section",{key:"visualization",class:S.CSS.visualization},L.tsx(z.Heading,{level:e},i.visualizationLabel),this._renderVisualizationSelect(),L.tsx("div",{key:"threshold-configurator",class:a(g.ShadowVisualizationType.Threshold)},L.tsx(T.ThresholdConfigurator,{options:t.thresholdOptions,colorPickerVisible:s})),L.tsx("div",{key:"duration-configurator",class:a(g.ShadowVisualizationType.Duration)},L.tsx(f.DurationConfigurator,{options:t.durationOptions,colorPickerVisible:s})),L.tsx("div",{key:"discrete-configurator",class:a(g.ShadowVisualizationType.Discrete)},L.tsx(C.DiscreteConfigurator,{options:t.discreteOptions,colorPickerVisible:s})))},r._renderVisualizationSelect=function(){const e=this.messages,i=this.viewModel.visualizationType;return L.tsx("calcite-select",{class:S.CSS.visualizationSelect,key:"visualization-select",label:e.visualizationLabel,bind:this,onCalciteSelectChange:this._onVisualizationTypeChange},[{type:g.ShadowVisualizationType.Threshold,label:e.threshold.label},{type:g.ShadowVisualizationType.Duration,label:e.duration.label},{type:g.ShadowVisualizationType.Discrete,label:e.discrete.label}].map((({type:e,label:t})=>L.tsx("calcite-option",{value:e,selected:e===i},t))))},r._onVisualizationTypeChange=function(e){const i=e.target,t=i.selectedOption?.value;this.viewModel.visualizationType=t??g.ShadowVisualizationType.Threshold},i._createClass(o,[{key:"view",get:function(){return this.viewModel?.view},set:function(e){this.viewModel&&(this.viewModel.view=e)}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(e){this._overrideIfSome("label",e)}},{key:"testData",get:function(){return{tooltip:this._tooltip}}}]),o}(v);t.__decorate([r.property()],H.prototype,"viewModel",void 0),t.__decorate([r.property()],H.prototype,"view",null),t.__decorate([r.property()],H.prototype,"headingLevel",void 0),t.__decorate([r.property()],H.prototype,"iconClass",void 0),t.__decorate([r.property()],H.prototype,"icon",void 0),t.__decorate([r.property()],H.prototype,"label",null),t.__decorate([r.property({type:_,nonNullable:!0})],H.prototype,"visibleElements",void 0),t.__decorate([r.property(),P.messageBundle("esri/widgets/ShadowCast/t9n/ShadowCast")],H.prototype,"messages",void 0),t.__decorate([r.property()],H.prototype,"_defaultViewModel",void 0),t.__decorate([r.property()],H.prototype,"_timeSlider",void 0),t.__decorate([r.property()],H.prototype,"_tooltip",void 0),H=t.__decorate([p.subclass("esri.widgets.ShadowCast")],H);return H}));