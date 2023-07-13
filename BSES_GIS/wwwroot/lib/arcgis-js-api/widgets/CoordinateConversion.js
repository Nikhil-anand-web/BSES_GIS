/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/events","../core/Logger","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/cast","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/subclass","./Widget","./CoordinateConversion/CoordinateConversionViewModel","./CoordinateConversion/support/Conversion","./support/Heading","./support/decorators/accessibleHandler","./support/decorators/messageBundle","./support/jsxFactory","./support/widgetUtils"],(function(e,t,o,i,s,n,r,a,l,c,d,p,u,_,h,v,g){"use strict";const b={base:"esri-coordinate-conversion esri-widget",captureMode:"esri-coordinate-conversion--capture-mode",noBasemap:"esri-coordinate-conversion--no-basemap",popup:"esri-coordinate-conversion__popup",clipboardPopup:"esri-coordinate-conversion__clipboard-popup",conversionList:"esri-coordinate-conversion__conversion-list",conversionRow:"esri-coordinate-conversion__row",coordDisplay:"esri-coordinate-conversion__display",expanded:"esri-coordinate-conversion__conversions-view--expanded",expandDown:"esri-coordinate-conversion__conversions-view--expand-down",expandUp:"esri-coordinate-conversion__conversions-view--expand-up",conversionsView:"esri-coordinate-conversion__conversions-view",primarySelect:"esri-coordinate-conversion__select-primary",rowSelect:"esri-coordinate-conversion__select-row",toolDisplay:"esri-coordinate-conversion__tools",modeToggle:"esri-coordinate-conversion__mode-toggle",rowButton:"esri-coordinate-conversion__row-button",backButton:"esri-coordinate-conversion__back-button",convertButton:"esri-coordinate-conversion__button",convertButtonSpan:"esri-coordinate-conversion__convert-button-span",coordinateInput:"esri-coordinate-conversion__input-coordinate",inputForm:"esri-coordinate-conversion__input-form",inputFormGroup:"esri-coordinate-conversion__input-group",rejectInput:"esri-coordinate-conversion__input-coordinate--rejected",sectionHeading:"esri-coordinate-conversion__heading",patternInput:"esri-coordinate-conversion__pattern-input",settings:"esri-coordinate__settings",settingsFormGroup:"esri-coordinate-conversion__settings-group",settingsFormGroupHorizontal:"esri-coordinate-conversion__settings-group-horizontal",previewCoordinate:"esri-coordinate-conversion__preview-coordinate",disabled:"esri-disabled",input:"esri-input",button:"esri-button",header:"esri-widget__heading",widgetButton:"esri-widget--button",leftArrow:"esri-icon-left-arrow",rightArrow:"esri-icon-right-arrow",captureButton:"esri-icon-map-pin",collapseButton:"esri-icon-up",copyButton:"esri-icon-duplicate",editButton:"esri-icon-edit",esriSelect:"esri-select",expandButton:"esri-icon-down",goToButton:"esri-icon-locate",refresh:"esri-icon-refresh",removeConversion:"esri-icon-close",settingsButton:"esri-icon-settings2"},m={settingsButton:!0,inputButton:!0,captureButton:!0,expandButton:!0},y=750,f=2500;let x=function(t){function s(e,o){var i;return(i=t.call(this,e,o)||this)._popupMessage=null,i._popupTimeoutId=void 0,i._clipboardPopupTimeoutId=void 0,i._coordinateInput=null,i._badInput=!1,i._goToEnabled=!1,i._conversionFormat=null,i._settingsFormat=null,i._previewConversion=null,i._expanded=!1,i._clipboardPopupVisible=!1,i._popupVisible=!1,i._settingsVisible=!1,i._inputVisible=!1,i.headingLevel=4,i.messages=null,i.messagesCommon=null,i.orientation="auto",i.viewModel=new d,i.visibleElements={...m},i}e._inherits(s,t);var n=s.prototype;return n.castVisibleElements=function(e){return{...m,...e}},n.reverseConvert=function(e,t){return this.viewModel.reverseConvert(e,t)},n.render=function(){const e=this.get("viewModel.state"),t="disabled"===e?v.tsx("div",{key:"esri-coordinate__no-basemap"},this.messages?.noBasemap):null,o=!t&&this._inputVisible?this._renderInputForm():null,i=!t&&this._settingsVisible?this._renderSettings():null,s=t||o||i?null:this._renderConversionsView(),n=this._popupVisible?this._renderPopup():null,r={[b.captureMode]:"capture"===this.mode,[b.disabled]:"loading"===e,[b.noBasemap]:"disabled"===e};return v.tsx("div",{class:this.classes(b.base,r)},n,t,s,i,o)},n._addConversion=function(e){const t=e.target,o=C(t.options[t.options.selectedIndex]),i=w(t);if(null==o||null==i)return;const s=new p({format:o});t.options.selectedIndex=0,i>=0?(this.conversions.removeAt(i),this.conversions.add(s,i)):this.conversions.add(s)},n._findSettingsFormat=function(){return this._settingsFormat||this.conversions.reduceRight(((e,t)=>{const o=t.format;return o?.hasDisplayProperties?o:e}),null)||this.formats.find((e=>e.hasDisplayProperties))},n._hidePopup=function(){this._popupTimeoutId&&(clearTimeout(this._popupTimeoutId),this._popupTimeoutId=void 0),this._popupVisible=!1,this._popupMessage=null,this.scheduleRender()},n._hideClipboardPopup=function(){this._clipboardPopupTimeoutId&&(clearTimeout(this._clipboardPopupTimeoutId),this._clipboardPopupTimeoutId=void 0),this._clipboardPopupVisible=!1,this.scheduleRender()},n._onConvertComplete=function(){this._inputVisible=!1,this._coordinateInput.value=""},n._onCopy=function(e){const t=k(e.currentTarget)?.displayCoordinate;null!=t&&(e.clipboardData?.setData("text/plain",t),this._showClipboardPopup(),e.preventDefault())},n._processUserInput=function(e){const t=o.eventKey(e),s=this.viewModel;if("Enter"!==t&&t)this._badInput&&(this._badInput=!1);else{const e=C(this._coordinateInput);if(!e)return;const t=this._coordinateInput.value;this._reverseConvert(t,e).then((e=>{"capture"===this.mode?s.resume():this.mode="capture",this.currentLocation=e,s.setLocation(e),this._onConvertComplete()})).catch((e=>{i.getLogger(this).error(e),this._showPopup(this.messages?.invalidCoordinate),this._badInput=!0}))}},n._reverseConvert=async function(e,t){const o=this.viewModel,s=await t.reverseConvert(e);return this._goToEnabled&&s&&o.goToLocation(s).catch((e=>{i.getLogger(this).warn(e),this._showPopup(this.messages?.locationOffBasemap)})),s},n._setInputFormat=function(e){const t=e.target,o=C(t[t.options.selectedIndex]);null!=o&&(this._conversionFormat=o)},n._setPreviewConversion=function(){const e=this._findSettingsFormat(),t=this.viewModel;if(e){const o=this.conversions.find((t=>t.format===e));this._previewConversion=new p({format:e,position:{location:this.currentLocation,coordinate:o?.position?.coordinate}}),this._previewConversion.position?.coordinate||t.previewConversion(this._previewConversion)}},n._setSettingsFormat=function(e){const t=e.target,o=C(t[t.options.selectedIndex]);null!=o&&(this._settingsFormat=o,this._setPreviewConversion())},n._showClipboardPopup=function(){this._clipboardPopupVisible?clearTimeout(this._clipboardPopupTimeoutId):this._clipboardPopupVisible=!0,this.scheduleRender(),this._popupTimeoutId=setTimeout((()=>{this._popupTimeoutId=void 0,this._hideClipboardPopup()}),y)},n._showPopup=function(e,t=f){this._popupMessage=e,this._popupVisible?clearTimeout(this._popupTimeoutId):this._popupVisible=!0,this.scheduleRender(),this._popupTimeoutId=setTimeout((()=>{this._popupTimeoutId=void 0,this._hidePopup()}),t)},n._toggleGoTo=function(){this._goToEnabled=!this._goToEnabled},n._updateCurrentPattern=function(e){e.stopPropagation();const t=e.target,o=this._findSettingsFormat();o&&(o.currentPattern=t.value)},n._renderConversion=function(e,t){const{messages:o}=this;if(!o)return v.tsx("li",null);const{format:i}=e,s=i?.label??"",n=`${this.id}__list-item-${t}`,r=`${s} ${o.conversionOutputSuffix}`,a=0===t,l=a||this._expanded,c=a?this._renderFirstConversion(e):this._renderTools(t,e,n),d=a&&!e.displayCoordinate?o.noLocation:e.displayCoordinate,p=v.tsx("div",{"aria-label":d,class:b.coordDisplay,"data-conversion":e,role:"listitem",tabindex:"0",title:d??""},d),u=this._renderOptions(this.formats.filter((e=>e!==i)));return l?v.tsx("li",{"aria-label":r,class:b.conversionRow,id:n,key:e,role:"group",title:r,tabindex:"0"},v.tsx("select",{"aria-controls":n,"aria-label":o.selectFormat,class:this.classes(b.esriSelect,b.rowSelect),bind:this,"data-index":t,onchange:this._addConversion,title:o.selectFormat},v.tsx("option",{"aria-label":s,selected:!0,title:s},s.toUpperCase()),u),p,c):null},n._renderCopyButton=function(e){const t=this._clipboardPopupVisible&&this._renderClipboardPopup(),{messagesCommon:o}=this;return o?v.tsx("li",{"aria-label":o.copy,bind:this,class:this.classes(b.widgetButton,b.rowButton),"data-conversion":e,onclick:this._copyCoordinateOutput,onkeydown:this._copyCoordinateOutput,oncopy:this._onCopy,role:"button",tabindex:"0",title:o.copy},t,v.tsx("span",{"aria-hidden":"true",class:b.copyButton})):v.tsx("li",null)},n._renderFirstConversion=function(e){const t=this.id,o={[b.expandButton]:!this._expanded,[b.collapseButton]:this._expanded},{messages:i,messagesCommon:s,multipleConversions:n,visibleElements:r}=this;if(!s||!i)return v.tsx("ul",null);const a="live"===this.mode?i.captureMode:i.liveMode,l=this._expanded?s.collapse:s.expand,c=e.displayCoordinate&&"capture"===this.mode?this._renderCopyButton(e):null,d=n&&r.expandButton&&v.tsx("li",{"aria-controls":`${t}__${b.conversionList}`,"aria-label":l,bind:this,class:b.widgetButton,key:"esri-coordinate-conversion__expand-button",onclick:this._toggleExpand,onkeydown:this._toggleExpand,role:"button",tabindex:"0",title:l},v.tsx("span",{"aria-hidden":"true",class:this.classes(o)})),p=!n&&r.captureButton&&v.tsx("li",{"aria-label":a,bind:this,class:this.classes(b.widgetButton,b.modeToggle),key:"esri-coordinate-conversion__mode-toggle",onclick:this._toggleMode,onkeydown:this._toggleMode,role:"button",tabindex:"0",title:a},v.tsx("span",{"aria-hidden":"true",class:b.captureButton}));return v.tsx("ul",{class:b.toolDisplay},c,d,p)},n._renderInputForm=function(){const e=this._conversionFormat||this.conversions.at(0).format,t=this.formats.findIndex((t=>t.name===e?.name)),o=this.id,i=`${o}__${b.coordinateInput}`,s=`${o}__${b.coordinateInput}__header`,n=this._renderOptions(this.formats,!0,t),r={[b.rejectInput]:this._badInput},{messages:a,messagesCommon:l,headingLevel:c}=this;return l&&a?v.tsx("div",{"aria-labelledby":s,class:b.inputForm,key:"esri-coordinate-conversion__input-form",role:"search"},v.tsx("div",{class:b.sectionHeading},v.tsx("div",{"aria-label":l.back,bind:this,class:this.classes(b.widgetButton,b.backButton),onclick:this._toggleInputVisibility,onkeydown:this._toggleInputVisibility,role:"button",tabindex:"0",title:l.back},this._renderBackIcon()),v.tsx(u.Heading,{level:c,class:b.header,id:s},a.inputCoordTitle)),v.tsx("div",{class:b.inputFormGroup},v.tsx("select",{"aria-controls":i,"aria-label":a.selectFormat,bind:this,class:this.classes(b.esriSelect,b.rowSelect),onchange:this._setInputFormat,title:a.selectFormat},n),v.tsx("input",{afterCreate:g.storeNode,"aria-labelledby":s,"aria-required":"true",bind:this,class:this.classes(b.coordinateInput,b.input,r),"data-format":e,"data-node-ref":"_coordinateInput",id:i,onkeydown:this._processUserInput,placeholder:a.inputCoordTitle,role:"textbox",spellcheck:!1,title:a.inputCoordTitle,type:"text"})),v.tsx("div",{class:b.inputFormGroup},v.tsx("label",{"aria-label":a.goTo},v.tsx("input",{bind:this,checked:this._goToEnabled,onclick:this._toggleGoTo,title:a.goTo,type:"checkbox"}),a.goTo),v.tsx("button",{"aria-label":a.convert,bind:this,class:this.classes(b.convertButton,b.button),onclick:this._processUserInput,title:a.convert,type:"button"},v.tsx("span",{class:b.convertButtonSpan},a.convert)))):v.tsx("div",null)},n._renderConversionsView=function(){const{messages:e}=this;if(!e)return v.tsx("div",null);const t=`${this.id}__${b.conversionList}`,o=this._renderPrimaryTools(),i=this._renderOptions(this.formats),s=this.conversions.map(((e,t)=>this._renderConversion(e,t))).toArray(),n=this._expanded?v.tsx("div",{class:b.conversionRow},v.tsx("select",{"aria-controls":t,"aria-label":e.addConversion,bind:this,class:this.classes(b.esriSelect,b.primarySelect),"data-index":-1,onchange:this._addConversion,title:e.addConversion},v.tsx("option",{disabled:!0,selected:!0,value:""},e.addConversion),i),o):null,r={[b.expanded]:this._expanded,[b.expandUp]:"expand-up"===this.orientation,[b.expandDown]:"expand-down"===this.orientation};return v.tsx("div",{class:this.classes(b.conversionsView,r),key:"esri-coordinate-conversion__main-view"},v.tsx("ul",{"aria-expanded":this._expanded?"true":"false",class:b.conversionList,id:t},s),n)},n._renderOptions=function(e,t,o){const i=this.conversions.at(0),s=i.format?.name;return e.map(((e,n)=>{const r=!(t||!i)&&(s===e.name||this.conversions.map((e=>e.format?.name)).includes(e.name));return v.tsx("option",{"aria-label":e.label,"data-format":e,disabled:r,key:e.name??"unnamed-format",selected:n===o,value:e.label},e.label.toUpperCase())})).toArray()},n._renderPopup=function(){return v.tsx("div",{class:b.popup,role:"alert"},this._popupMessage)},n._renderClipboardPopup=function(){const{messages:e}=this;return e?v.tsx("div",{class:this.classes(b.popup,b.clipboardPopup),role:"alert"},e.copySuccessMessage):v.tsx("div",null)},n._renderPrimaryTools=function(){const{messages:e,visibleElements:t}=this;if(!e)return v.tsx("ul",null);const o="live"===this.mode?e.captureMode:e.liveMode,i=t.inputButton&&v.tsx("li",{bind:this,class:b.widgetButton,onclick:this._toggleInputVisibility,onkeydown:this._toggleInputVisibility,role:"button",tabindex:"0",title:e.inputCoordTitle},v.tsx("span",{"aria-hidden":"true",class:b.editButton})),s=t.captureButton&&v.tsx("li",{bind:this,class:this.classes(b.widgetButton,b.modeToggle),onclick:this._toggleMode,onkeydown:this._toggleMode,role:"button",tabindex:"0",title:o},v.tsx("span",{"aria-hidden":"true",class:b.captureButton})),n=t.settingsButton&&v.tsx("li",{bind:this,class:b.widgetButton,onclick:this._toggleSettingsVisibility,onkeydown:this._toggleSettingsVisibility,role:"button",tabindex:"0",title:e.settingsTitle},v.tsx("span",{"aria-hidden":"true",class:b.settingsButton}));return v.tsx("ul",{class:b.toolDisplay},i,s,n)},n._renderSettings=function(){const e=this.id,t=`${e}__${b.patternInput}`,o=`${e}__${b.patternInput}__header`,i=`${e}__${b.previewCoordinate}`,s=this.formats.filter((e=>e.hasDisplayProperties)),n=this._findSettingsFormat(),r=n?s.indexOf(n):-1,a=this._renderOptions(s,!0,r),l=n?.get("currentPattern"),{messages:c,messagesCommon:d,headingLevel:p}=this;return d&&c?v.tsx("div",{"aria-labelledby":o,class:b.settings,key:"esri-coordinate-conversion__settings"},v.tsx("div",{class:b.sectionHeading},v.tsx("div",{bind:this,class:this.classes(b.widgetButton,b.backButton),onclick:this._toggleSettingsVisibility,onkeydown:this._toggleSettingsVisibility,role:"button",tabindex:"0",title:d.back},this._renderBackIcon()),v.tsx(u.Heading,{level:p,class:b.header,id:o},c.settingsTitle)),v.tsx("div",{class:b.settingsFormGroup},v.tsx("label",{for:t},c.changeCoordinateDisplay),v.tsx("select",{"aria-label":c.selectFormat,class:b.esriSelect,bind:this,onchange:this._setSettingsFormat,title:c.selectFormat},a),v.tsx("div",{class:b.settingsFormGroupHorizontal},v.tsx("input",{"aria-controls":i,bind:this,class:this.classes(b.patternInput,b.input),id:t,oninput:this._updateCurrentPattern,spellcheck:!1,title:c.changeCoordinateDisplay,type:"text",value:l}),v.tsx("div",{"aria-controls":t,bind:this,class:b.widgetButton,onclick:this._setDefaultPattern,onkeydown:this._setDefaultPattern,role:"button",tabindex:"0",title:c.defaultPattern},v.tsx("span",{"aria-hidden":"true",class:b.refresh})))),v.tsx("div",{class:b.settingsFormGroup},v.tsx("label",null,d.preview,v.tsx("div",{class:b.previewCoordinate,id:i,tabindex:"0"},this._previewConversion?.displayCoordinate)))):v.tsx("div",null)},n._renderBackIcon=function(){return v.tsx("span",{"aria-hidden":"true",class:g.isRTL(this.container)?b.rightArrow:b.leftArrow})},n._renderTools=function(e,t,o){const i=t.displayCoordinate&&"capture"===this.mode?this._renderCopyButton(t):null,{messages:s}=this;return s?v.tsx("ul",{class:b.toolDisplay,role:"listitem"},i,v.tsx("li",{"aria-controls":o,"aria-label":s.removeConversion,bind:this,class:this.classes(b.widgetButton,b.rowButton),"data-index":e,key:`${o}__${b.widgetButton}`,onclick:this._removeConversion,onkeydown:this._removeConversion,tabindex:"0",role:"button",title:s.removeConversion},v.tsx("span",{"aria-hidden":"true",class:b.removeConversion}))):v.tsx("ul",null)},n._copyCoordinateOutput=function(e){const t=e.target;if(!("createTextRange"in document.body)){const e=window.getSelection(),o=document.createRange();o.selectNodeContents(t),e?.removeAllRanges(),e?.addRange(o)}document.execCommand("copy")},n._removeConversion=function(e){const t=w(e.currentTarget);null!=t&&this.conversions.removeAt(t)},n._setDefaultPattern=function(e){e.stopPropagation();const t=this._findSettingsFormat();t&&(t.currentPattern=t.get("defaultPattern"))},n._toggleExpand=function(){this._expanded=!this._expanded},n._toggleInputVisibility=function(){this._inputVisible=!this._inputVisible,this._popupVisible&&this._hidePopup(),this._inputVisible?this.viewModel.pause():this.viewModel.resume()},n._toggleMode=function(){this.mode="live"===this.mode?"capture":"live"},n._toggleSettingsVisibility=function(){this._settingsVisible=!this._settingsVisible,this._popupVisible&&this._hidePopup(),this._settingsVisible?(this._setPreviewConversion(),this.viewModel.pause()):this.viewModel.resume()},e._createClass(s,[{key:"conversions",get:function(){return this.viewModel.conversions},set:function(e){this.viewModel.conversions=e}},{key:"currentLocation",get:function(){return this.viewModel.currentLocation},set:function(e){this.viewModel.currentLocation=e}},{key:"formats",get:function(){return this.viewModel.formats},set:function(e){this.viewModel.formats=e}},{key:"goToOverride",get:function(){return this.viewModel.goToOverride},set:function(e){this.viewModel.goToOverride=e}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(e){this._overrideIfSome("label",e)}},{key:"mode",get:function(){return this.viewModel.mode},set:function(e){this.viewModel.mode=e}},{key:"multipleConversions",get:function(){const e=this._get("multipleConversions");return"boolean"!=typeof e||e},set:function(e){!1===e&&(this._expanded=!1,this.conversions.splice(1,this.conversions.length-1)),this._set("multipleConversions",e)}},{key:"locationSymbol",get:function(){return this.viewModel.locationSymbol},set:function(e){this.viewModel.locationSymbol=e}},{key:"storageEnabled",get:function(){return this.viewModel.storageEnabled},set:function(e){this.viewModel.storageEnabled=e}},{key:"storageType",get:function(){return this.viewModel.storageType},set:function(e){this.viewModel.storageType=e}},{key:"view",get:function(){return this.viewModel.view},set:function(e){this.viewModel.view=e}}]),s}(c);function w(e){return e["data-index"]}function C(e){return e["data-format"]}function k(e){return e["data-conversion"]}t.__decorate([s.property()],x.prototype,"conversions",null),t.__decorate([s.property()],x.prototype,"currentLocation",null),t.__decorate([s.property()],x.prototype,"formats",null),t.__decorate([s.property()],x.prototype,"goToOverride",null),t.__decorate([s.property()],x.prototype,"headingLevel",void 0),t.__decorate([s.property()],x.prototype,"label",null),t.__decorate([s.property(),h.messageBundle("esri/widgets/CoordinateConversion/t9n/CoordinateConversion")],x.prototype,"messages",void 0),t.__decorate([s.property(),h.messageBundle("esri/t9n/common")],x.prototype,"messagesCommon",void 0),t.__decorate([s.property()],x.prototype,"mode",null),t.__decorate([s.property()],x.prototype,"orientation",void 0),t.__decorate([s.property()],x.prototype,"multipleConversions",null),t.__decorate([s.property()],x.prototype,"locationSymbol",null),t.__decorate([s.property()],x.prototype,"storageEnabled",null),t.__decorate([s.property()],x.prototype,"storageType",null),t.__decorate([s.property()],x.prototype,"view",null),t.__decorate([s.property({type:d})],x.prototype,"viewModel",void 0),t.__decorate([s.property()],x.prototype,"visibleElements",void 0),t.__decorate([n.cast("visibleElements")],x.prototype,"castVisibleElements",null),t.__decorate([_.accessibleHandler()],x.prototype,"_copyCoordinateOutput",null),t.__decorate([_.accessibleHandler()],x.prototype,"_removeConversion",null),t.__decorate([_.accessibleHandler()],x.prototype,"_setDefaultPattern",null),t.__decorate([_.accessibleHandler()],x.prototype,"_toggleExpand",null),t.__decorate([_.accessibleHandler()],x.prototype,"_toggleInputVisibility",null),t.__decorate([_.accessibleHandler()],x.prototype,"_toggleMode",null),t.__decorate([_.accessibleHandler()],x.prototype,"_toggleSettingsVisibility",null),x=t.__decorate([l.subclass("esri.widgets.CoordinateConversion")],x);return x}));
