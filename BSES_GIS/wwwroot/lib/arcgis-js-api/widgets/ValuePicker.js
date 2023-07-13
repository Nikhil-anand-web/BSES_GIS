/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/reactiveUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass","./Widget","./support/componentsUtils","./support/widgetUtils","./support/decorators/messageBundle","./support/decorators/vmEvent","./support/jsxFactory","./ValuePicker/ValuePickerCollection","./ValuePicker/ValuePickerCombobox","./ValuePicker/ValuePickerLabel","./ValuePicker/ValuePickerSlider","./ValuePicker/ValuePickerViewModel","./ValuePicker/ValuePickerVisibleElements"],(function(e,t,o,i,n,s,a,r,l,c,p,u,d,y,v,h,m,_,b,w,k){"use strict";const g="esri-value-picker",x={actionBar:`${g}__action-bar`,caption:`${g}__caption`,captionBorder:`${g}__caption-border`,captionText:`${g}__caption-text`,disabled:"esri-disabled",separator:`${g}__separator`,widget:"esri-widget",widgetIcon:"esri-icon-play-circled"},f={base:null,key:"type",typeMap:{collection:h,combobox:m,label:_,slider:b}};let P=function(o){function n(e,t){var i;return(i=o.call(this,e,t)||this).caption=null,i.messages=null,i.messagesCommon=null,i.viewModel=new w,i.visibleElements=new k,i}t._inherits(n,o);var s=n.prototype;return s.initialize=function(){this.addHandles([i.on((()=>this.viewModel),"animate",(({first:e})=>{this.component?.animate(e)})),i.on((()=>this.viewModel),"next",(()=>{this.component?.next()})),i.on((()=>this.viewModel),"previous",(()=>{this.component?.previous()}))])},s.loadDependencies=function(){return p.loadCalciteComponents({action:()=>new Promise(((t,o)=>e(["../chunks/calcite-action"],t,o))),"action-bar":()=>new Promise(((t,o)=>e(["../chunks/calcite-action-bar"],t,o)))})},s.next=function(){this.viewModel.next()},s.pause=function(){this.viewModel.pause()},s.play=function(){this.viewModel.play()},s.previous=function(){this.viewModel.previous()},s.render=function(){const{disabled:e,state:t}=this.viewModel,o="playing"===t,i="horizontal"===this.layout,{control:n,pagination:s}=this.messagesCommon,{pause:a,play:r}=n,{previous:l,up:c,next:p,down:u}=s,d=this.visibleElements.playButton&&v.tsx("calcite-action",{active:o,alignment:"center",bind:this,disabled:e||!this.canPlay,icon:o?"pause":"play",key:"play",onclick:o?this.pause:this.play,text:o?a:r}),y=this.visibleElements.previousButton&&v.tsx("calcite-action",{alignment:"center",bind:this,disabled:e||o||!this.canPrevious,icon:i?"chevron-left":"chevron-up",key:"previous",onclick:this.previous,text:i?l:c}),h=this.visibleElements.nextButton&&v.tsx("calcite-action",{alignment:"center",bind:this,disabled:e||o||!this.canNext,icon:i?"chevron-right":"chevron-down",key:"next",onclick:this.next,text:i?p:u}),m=this.caption&&v.tsx("div",{class:x.caption},v.tsx("div",{class:x.captionBorder},v.tsx("div",{class:x.captionText},this.caption))),_="combobox"===this.component?.type||"label"===this.component?.type||"slider"===this.component?.type,b=(d||y||h)&&(m||_)&&v.tsx("div",{class:x.separator}),w=this.component?.render();return v.tsx("div",{"aria-label":this.label,class:this.classes(g,x.widget,`${g}__layout--${this.layout}`,`${g}__type--${this.component?.type}`)},v.tsx("calcite-action-bar",{expandDisabled:!0,layout:this.layout,class:x.actionBar},[d,y,h,b,m,w]))},t._createClass(n,[{key:"canNext",get:function(){return this.component?.canNext??!0}},{key:"canPlay",get:function(){return this.component?.canPlay??!0}},{key:"canPrevious",get:function(){return this.component?.canPrevious??!0}},{key:"component",set:function(e){e&&(e.viewModel??(e.viewModel=this.viewModel)),this._set("component",e)}},{key:"disabled",get:function(){return this.viewModel.disabled},set:function(e){this.viewModel.disabled=e}},{key:"label",get:function(){return this.messages.widgetLabel},set:function(e){this._overrideIfSome("label",e)}},{key:"layout",get:function(){return this.viewModel.layout},set:function(e){this.viewModel.layout=e}},{key:"loop",get:function(){return this.viewModel.loop},set:function(e){this.viewModel.loop=e}},{key:"playRate",get:function(){return this.viewModel.playRate},set:function(e){this.viewModel.playRate=e}},{key:"values",get:function(){return this.viewModel.values},set:function(e){this.viewModel.values=e}}]),n}(c);o.__decorate([n.property()],P.prototype,"canNext",null),o.__decorate([n.property()],P.prototype,"canPlay",null),o.__decorate([n.property()],P.prototype,"canPrevious",null),o.__decorate([n.property()],P.prototype,"caption",void 0),o.__decorate([n.property({types:f,value:null})],P.prototype,"component",null),o.__decorate([n.property()],P.prototype,"disabled",null),o.__decorate([n.property()],P.prototype,"label",null),o.__decorate([n.property()],P.prototype,"layout",null),o.__decorate([n.property()],P.prototype,"loop",null),o.__decorate([n.property(),d.messageBundle("esri/widgets/ValuePicker/t9n/ValuePicker")],P.prototype,"messages",void 0),o.__decorate([n.property(),d.messageBundle("esri/t9n/common")],P.prototype,"messagesCommon",void 0),o.__decorate([n.property()],P.prototype,"playRate",null),o.__decorate([n.property()],P.prototype,"values",null),o.__decorate([n.property(),y.vmEvent(["animate","next","pause","play","previous"])],P.prototype,"viewModel",void 0),o.__decorate([n.property({type:k,nonNullable:!0})],P.prototype,"visibleElements",void 0),P=o.__decorate([l.subclass("esri.widgets.ValuePicker")],P);return P}));