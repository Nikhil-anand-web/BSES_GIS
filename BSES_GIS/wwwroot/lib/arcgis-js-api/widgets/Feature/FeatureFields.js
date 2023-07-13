/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../Widget","./FeatureFields/FeatureFieldsViewModel","./support/FeatureElementInfo","../support/uriUtils","../support/widgetUtils","../support/decorators/messageBundle","../support/jsxFactory"],(function(e,t,s,i,r,o,n,l,a,d,u,f,p,c,h){"use strict";const _="esri-feature-fields",y={base:_,fieldHeader:`${_}__field-header`,fieldData:`${_}__field-data`,fieldDataDate:`${_}__field-data--date`,esriTable:"esri-widget__table"};let m=function(t){function i(e,s){var i;return(i=t.call(this,e,s)||this)._featureElementInfo=null,i.viewModel=new d,i.messages=null,i.messagesURIUtils=null,i}e._inherits(i,t);var r=i.prototype;return r.initialize=function(){this._featureElementInfo=new u,this.addHandles(s.watch((()=>[this.viewModel?.description,this.viewModel?.title]),(()=>this._setupFeatureElementInfo()),s.initial))},r.destroy=function(){this._featureElementInfo?.destroy()},r.renderFieldInfo=function(e,t){const{attributes:s}=this.viewModel,i=e.fieldName,r=e.label||i,o=s?null==s[i]?"":s[i]:"",n=!(!e.format||!e.format.dateFormat),l="number"==typeof o&&!n?this._forceLTR(o):f.autoLink(this.messagesURIUtils,o),a={[y.fieldDataDate]:n};return h.tsx("tr",{key:`fields-element-info-row-${i}-${t}`},h.tsx("th",{key:`fields-element-info-row-header-${i}-${t}`,class:y.fieldHeader,innerHTML:r}),h.tsx("td",{key:`fields-element-info-row-data-${i}-${t}`,class:this.classes(y.fieldData,a),innerHTML:l}))},r.renderFields=function(){const{formattedFieldInfos:e}=this.viewModel;return e?.length?h.tsx("table",{class:y.esriTable,summary:this.messages.fieldsSummary},h.tsx("tbody",null,e.map(((e,t)=>this.renderFieldInfo(e,t))))):null},r.render=function(){return h.tsx("div",{class:y.base},this._featureElementInfo?.render(),this.renderFields())},r._setupFeatureElementInfo=function(){const{description:e,title:t}=this;this._featureElementInfo?.set({description:e,title:t})},r._forceLTR=function(e){return`&lrm;${e}`},e._createClass(i,[{key:"attributes",get:function(){return this.viewModel.attributes},set:function(e){this.viewModel.attributes=e}},{key:"description",get:function(){return this.viewModel.description},set:function(e){this.viewModel.description=e}},{key:"expressionInfos",get:function(){return this.viewModel.expressionInfos},set:function(e){this.viewModel.expressionInfos=e}},{key:"fieldInfos",get:function(){return this.viewModel.fieldInfos},set:function(e){this.viewModel.fieldInfos=e}},{key:"title",get:function(){return this.viewModel.title},set:function(e){this.viewModel.title=e}}]),i}(a);t.__decorate([i.property()],m.prototype,"attributes",null),t.__decorate([i.property()],m.prototype,"description",null),t.__decorate([i.property()],m.prototype,"expressionInfos",null),t.__decorate([i.property()],m.prototype,"fieldInfos",null),t.__decorate([i.property()],m.prototype,"title",null),t.__decorate([i.property({type:d,nonNullable:!0})],m.prototype,"viewModel",void 0),t.__decorate([i.property(),c.messageBundle("esri/widgets/Feature/t9n/Feature")],m.prototype,"messages",void 0),t.__decorate([i.property(),c.messageBundle("esri/widgets/support/t9n/uriUtils")],m.prototype,"messagesURIUtils",void 0),m=t.__decorate([l.subclass("esri.widgets.Feature.FeatureFields")],m);return m}));
