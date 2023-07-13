/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["require","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../intl","../../core/maybe","../../core/promiseUtils","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/cast","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/subclass","../Widget","./FeatureRelationship/FeatureRelationshipViewModel","./support/FeatureElementInfo","../support/componentsUtils","../support/widgetUtils","../support/decorators/messageBundle","../support/jsxFactory","../../intl/substitute"],(function(e,t,r,i,s,n,o,a,l,d,c,u,h,p,v,m,_,f,g,y){"use strict";const w="esri-feature",b=`${w}-relationship`,F={base:b,esriWidget:"esri-widget",listContainer:`${b}__list`,listItem:`${b}__list-item`,listItemHidden:`${b}__list-item--hidden`,listContainerQuerying:`${b}__list--querying`,featureObserver:`${w}__feature-observer`,stickySpinnerContainer:`${w}__sticky-loading-container`,loadingSpinnerContainer:`${w}__loading-container`,spinner:`${w}__loading-spinner`,iconLoading:"esri-icon-loading-indicator esri-rotating"},I={title:!0,description:!0};let M=function(r){function i(e,t){var i;return(i=r.call(this,e,t)||this)._featureElementInfo=null,i._relatedFeatureIntersectionObserverNode=null,i._relatedFeatureIntersectionObserver=new IntersectionObserver((([e])=>{e?.isIntersecting&&i._increaseFeaturePage()}),{root:window.document}),i.headingLevel=2,i.viewModel=new p,i.messages=null,i.messagesCommon=null,i.visibleElements={...I},i._increaseFeaturePage=()=>{const{state:e,showAllEnabled:t,relatedFeatures:r,featuresPerPage:s,featurePage:n}=i.viewModel;"ready"===e&&t&&r.length>=s*n&&i.viewModel.featurePage++},i}t._inherits(i,r);var a=i.prototype;return a.initialize=function(){this._featureElementInfo=new v,this.addHandles([o.watch((()=>[this.viewModel.description,this.viewModel.title,this.headingLevel]),(()=>this._setupFeatureElementInfo()),o.initial),o.watch((()=>[this.viewModel.state,this.viewModel.showAllEnabled,this._relatedFeatureIntersectionObserverNode]),(()=>this._handleRelatedFeatureObserverChange())),o.on((()=>this.viewModel.relatedFeatureViewModels),"change",(()=>this._setupRelatedFeatureViewModels()))])},a.loadDependencies=function(){return m.loadCalciteComponents({icon:()=>new Promise(((t,r)=>e(["../../chunks/calcite-icon"],t,r))),list:()=>new Promise(((t,r)=>e(["../../chunks/calcite-list"],t,r))),"list-item":()=>new Promise(((t,r)=>e(["../../chunks/calcite-list-item"],t,r))),notice:()=>new Promise(((t,r)=>e(["../../chunks/calcite-notice"],t,r)))})},a.destroy=function(){this._unobserveRelatedFeatureObserver(),this._featureElementInfo=s.destroyMaybe(this._featureElementInfo)},a.castVisibleElements=function(e){return{...I,...e}},a.renderStickyLoading=function(){return"querying"===this.viewModel.state?g.tsx("div",{key:"sticky-loader",class:F.stickySpinnerContainer},this.renderLoadingIcon()):null},a.renderLoadingIcon=function(){return g.tsx("span",{class:this.classes(F.iconLoading,F.spinner)})},a.renderLoading=function(){return g.tsx("div",{key:"loading-container",class:F.loadingSpinnerContainer},this.renderLoadingIcon())},a.renderShowAllIconNode=function(){return g.tsx("calcite-icon",{scale:"s",icon:"list",slot:"content-end"})},a.renderChevronIconNode=function(){const e=_.isRTL(this.container)?"chevron-left":"chevron-right";return g.tsx("calcite-icon",{scale:"s",icon:e,slot:"content-end"})},a.renderRelatedFeature=function(e){const{itemDescriptionFieldName:t}=this.viewModel,r=e.title;e.description=t&&e.formattedAttributes?.global[t];const i="loading"===e.state;return g.tsx("calcite-list-item",{class:this.classes(F.listItem,{[F.listItemHidden]:i}),key:e.uid,label:r,description:e.description??"",onCalciteListItemSelect:()=>this.emit("select-record",{featureViewModel:e})},this.renderChevronIconNode())},a.renderShowAllListItem=function(){return this.displayShowAllButton?g.tsx("calcite-list-item",{key:"show-all-item",label:this.messages?.showAll,description:this.featureCountDescription,onCalciteListItemSelect:()=>this.emit("show-all-records")},this.renderShowAllIconNode()):null},a.renderNoRelatedFeaturesMessage=function(){return g.tsx("calcite-notice",{key:"no-related-features-message",icon:"information",open:!0,kind:"brand",scale:"s",width:"full"},g.tsx("div",{slot:"message"},this.messages?.noRelatedFeatures))},a.renderFeatureObserver=function(){return g.tsx("div",{key:"feature-observer",class:F.featureObserver,bind:this,afterCreate:this._relatedFeatureIntersectionObserverCreated})},a.renderList=function(){const{relatedFeatureViewModels:e}=this.viewModel;return g.tsx("calcite-list",null,e.toArray().map((e=>this.renderRelatedFeature(e))),this.renderShowAllListItem())},a.renderRelatedFeatures=function(){const{displayListItems:e}=this,{state:t}=this.viewModel;return g.tsx("div",{key:"list-container",class:this.classes(F.listContainer,{[F.listContainerQuerying]:"querying"===t})},e?this.renderList():"ready"===t?this.renderNoRelatedFeaturesMessage():null,this.renderStickyLoading(),this.renderFeatureObserver())},a.renderRelationshipNotFound=function(){return g.tsx("calcite-notice",{key:"relationship-not-found",icon:"exclamation-mark-triangle",open:!0,kind:"danger",scale:"s",width:"full"},g.tsx("div",{slot:"message"},this.messages?.relationshipNotFound))},a.render=function(){const{state:e}=this.viewModel;return g.tsx("div",{class:this.classes(F.base,F.esriWidget)},this._featureElementInfo?.render(),"loading"===e?this.renderLoading():"disabled"===e?this.renderRelationshipNotFound():this.renderRelatedFeatures())},a._setupRelatedFeatureViewModels=function(){const{relatedFeatureViewModels:e}=this.viewModel,t="related-feature-viewmodels";this.removeHandles(t),e?.forEach((e=>{this.addHandles(o.watch((()=>[e.title,e.state]),(()=>this.scheduleRender()),o.initial),t)})),this.scheduleRender()},a._setupFeatureElementInfo=function(){const{headingLevel:e,visibleElements:t}=this,r=t.description&&this.description,i=t.title&&this.title;this._featureElementInfo?.set({description:r,title:i,headingLevel:e})},a._handleRelatedFeatureObserverChange=async function(){this._unobserveRelatedFeatureObserver();const{state:e,showAllEnabled:t}=this.viewModel;await n.after(0),this._relatedFeatureIntersectionObserverNode&&"ready"===e&&t&&this._relatedFeatureIntersectionObserver.observe(this._relatedFeatureIntersectionObserverNode)},a._relatedFeatureIntersectionObserverCreated=function(e){this._relatedFeatureIntersectionObserverNode=e},a._unobserveRelatedFeatureObserver=function(){this._relatedFeatureIntersectionObserverNode&&this._relatedFeatureIntersectionObserver.unobserve(this._relatedFeatureIntersectionObserverNode)},t._createClass(i,[{key:"displayShowAllButton",get:function(){const{showAllEnabled:e,featureCount:t,displayCount:r,state:i}=this.viewModel;return!e&&!!t&&"ready"===i&&(t>r||0===r)}},{key:"displayListItems",get:function(){return this.displayShowAllButton||this.viewModel.relatedFeatureViewModels.length>0}},{key:"description",get:function(){return this.viewModel.description},set:function(e){this.viewModel.description=e}},{key:"featureCountDescription",get:function(){const{messages:e}=this,{featureCount:t}=this.viewModel;return y.substitute(e?.numberRecords,{number:t})}},{key:"title",get:function(){return this.viewModel.title},set:function(e){this.viewModel.title=e}}]),i}(h);r.__decorate([a.property()],M.prototype,"_relatedFeatureIntersectionObserverNode",void 0),r.__decorate([a.property({readOnly:!0})],M.prototype,"displayShowAllButton",null),r.__decorate([a.property({readOnly:!0})],M.prototype,"displayListItems",null),r.__decorate([a.property()],M.prototype,"description",null),r.__decorate([a.property({readOnly:!0})],M.prototype,"featureCountDescription",null),r.__decorate([a.property()],M.prototype,"headingLevel",void 0),r.__decorate([a.property()],M.prototype,"title",null),r.__decorate([a.property({type:p})],M.prototype,"viewModel",void 0),r.__decorate([a.property(),f.messageBundle("esri/widgets/Feature/t9n/Feature")],M.prototype,"messages",void 0),r.__decorate([a.property(),f.messageBundle("esri/t9n/common")],M.prototype,"messagesCommon",void 0),r.__decorate([a.property()],M.prototype,"visibleElements",void 0),r.__decorate([l.cast("visibleElements")],M.prototype,"castVisibleElements",null),M=r.__decorate([u.subclass("esri.widgets.Feature.FeatureRelationship")],M);return M}));