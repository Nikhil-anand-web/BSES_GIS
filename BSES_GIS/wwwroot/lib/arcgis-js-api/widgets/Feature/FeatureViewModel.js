/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Graphic","../../arcade/featureset/support/FeatureSetQueryInterceptor","../../core/Accessor","../../core/arrayUtils","../../core/Handles","../../core/Identifiable","../../core/Logger","../../core/promiseUtils","../../core/reactiveUtils","../../core/throttle","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/cast","../../core/has","../../core/accessorSupport/decorators/subclass","../../popup/content/TextContent","./FeatureAttachments/FeatureAttachmentsViewModel","./FeatureContent/FeatureContentViewModel","./FeatureExpression/FeatureExpressionViewModel","./FeatureFields/FeatureFieldsViewModel","./FeatureMedia/FeatureMediaViewModel","./FeatureRelationship/FeatureRelationshipViewModel","./support/arcadeFeatureUtils","./support/featureUtils","./support/relatedFeatureUtils"],(function(e,t,r,i,o,n,s,a,l,c,p,u,d,f,h,_,y,m,b,g,I,A,F,M,w,x){"use strict";var v;const C=1,E="content-view-models",T="relationship-view-models",V={attachmentsContent:!0,chartAnimation:!0,customContent:!0,expressionContent:!0,fieldsContent:!0,mediaContent:!0,textContent:!0,relationshipContent:!0};let R=v=function(t){function r(r){var i;return(i=t.call(this,r)||this)._handles=new s,i._error=null,i._featureAbortController=null,i._graphicChangedThrottled=u.throttle(i._graphicChanged,C,e._assertThisInitialized(i)),i._expressionAttributes=null,i._graphicExpressionAttributes=null,i.abilities={...V},i.content=null,i.contentViewModels=[],i.description=null,i.defaultPopupTemplateEnabled=!1,i.formattedAttributes=null,i.lastEditInfo=null,i.relatedInfos=new Map,i.title="",i.view=null,i._isAllowedContentType=t=>{const{abilities:r}=e._assertThisInitialized(i);return"attachments"===t.type&&!!r.attachmentsContent||"custom"===t.type&&!!r.customContent||"fields"===t.type&&!!r.fieldsContent||"media"===t.type&&!!r.mediaContent||"text"===t.type&&!!r.textContent||"expression"===t.type&&!!r.expressionContent||"relationship"===t.type&&!!r.relationshipContent},i._handles.add(p.watch((()=>[i.graphic,i._effectivePopupTemplate,i.abilities]),(()=>i._graphicChangedThrottled()),p.initial)),i}e._inherits(r,t);var i=r.prototype;return i.initialize=function(){this.addHandles(this._graphicChangedThrottled)},i.destroy=function(){this._clear(),this._cancelFeatureQuery(),this._error=null,this._handles.destroy(),this.graphic=null,this._destroyContentViewModels(),this.relatedInfos.clear()},i.castAbilities=function(e){return{...V,...e}},i.setActiveMedia=function(e,t){const r=this.contentViewModels[e];r instanceof A&&r.setActiveMedia(t)},i.nextMedia=function(e){const t=this.contentViewModels[e];t instanceof A&&t.next()},i.previousMedia=function(e){const t=this.contentViewModels[e];t instanceof A&&t.previous()},i.updateGeometry=async function(){const{graphic:e,spatialReference:t,_sourceLayer:r}=this;await(r?.load());const i=r?.objectIdField;if(!i||!e||!r)return;const o=e?.attributes?.[i];if(null==o)return;const n=[o];if(!e.geometry){const i=await w.querySourceLayer({layer:r,graphic:e,outFields:[],objectIds:n,returnGeometry:!0,spatialReference:t}),o=i?.geometry;o&&(e.geometry=o)}},i._clear=function(){this._set("title",""),this._set("content",null),this._set("formattedAttributes",null)},i._graphicChanged=async function(){this._cancelFeatureQuery(),this._error=null,this._clear();const{graphic:e}=this;if(!e)return;const t=new AbortController;this._featureAbortController=t;try{await this._queryFeature({signal:t.signal})}catch(r){c.isAbortError(r)||(this._error=r,l.getLogger(this).error("error","The popupTemplate could not be displayed for this feature.",{error:r,graphic:e,popupTemplate:this._effectivePopupTemplate}))}this._featureAbortController===t&&(this._featureAbortController=null)},i._cancelFeatureQuery=function(){const{_featureAbortController:e}=this;e&&e.abort(),this._featureAbortController=null},i._compileContentElement=function(e,t){return"attachments"===e.type?this._compileAttachments(e,t):"custom"===e.type?this._compileCustom(e,t):"fields"===e.type?this._compileFields(e,t):"media"===e.type?this._compileMedia(e,t):"text"===e.type?this._compileText(e,t):"expression"===e.type?this._compileExpression(e,t):"relationship"===e.type?this._compileRelationship(e,t):void 0},i._compileContent=function(e){if(this._destroyContentViewModels(),this.graphic)return Array.isArray(e)?e.filter(this._isAllowedContentType).map(((e,t)=>this._compileContentElement(e,t))).filter(n.isSome):"string"==typeof e?this._compileText(new y({text:e}),0).text:e},i._destroyContentViewModels=function(){this._handles?.remove(T),this._handles?.remove(E),this.contentViewModels.forEach((e=>e&&!e.destroyed&&e.destroy())),this._set("contentViewModels",[])},i._matchesFeature=function(e,t){const r=e?.graphic?.getObjectId(),i=t?.getObjectId();return null!=r&&null!=i&&r===i},i._setRelatedFeaturesViewModels=function({relatedFeatureViewModels:e,relatedFeatures:t,map:r}){const{view:i,spatialReference:o}=this;t?.filter(Boolean).forEach((t=>{e.find((e=>this._matchesFeature(e,t)))||e.add(new v({abilities:{relationshipContent:!1},map:r,view:i,spatialReference:o,graphic:t}))})),e.forEach((r=>{const i=t?.find((e=>this._matchesFeature(r,e)));i||e.remove(r)}))},i._setExpressionContentVM=function(e,t){const r=this.formattedAttributes,{contentElement:i,contentElementViewModel:o}=e,n=i?.type;o&&n&&("fields"===n&&(this._createFieldsFormattedAttributes({contentElement:i,contentElementIndex:t,formattedAttributes:r}),o.set(this._createFieldsVMParams(i,t))),"media"===n&&(this._createMediaFormattedAttributes({contentElement:i,contentElementIndex:t,formattedAttributes:r}),o.set(this._createMediaVMParams(i,t))),"text"===n&&o.set(this._createTextVMParams(i)))},i._compileRelationship=function(e,t){const{displayCount:r,orderByFields:i,relationshipId:o,title:n,description:s}=e,{_sourceLayer:a,graphic:l,map:c}=this;if(!w.isRelatableFeatureSupportedLayer(a))return;const u=new F({displayCount:r,graphic:l,orderByFields:i,relationshipId:o,layer:a,map:c,...this._compileTitleAndDesc({title:n,description:s})});return this.contentViewModels[t]=u,this._handles.add(p.on((()=>u.relatedFeatures),"change",(()=>this._setRelatedFeaturesViewModels(u))),T),e},i._compileExpression=function(e,t){const{expressionInfo:r}=e,{graphic:i,map:o,spatialReference:n,view:s}=this,a=new g({expressionInfo:r,graphic:i,interceptor:v.interceptor,map:o,spatialReference:n,view:s});return this.contentViewModels[t]=a,this._handles.add(p.watch((()=>a.contentElementViewModel),(()=>this._setExpressionContentVM(a,t)),p.initial),E),e},i._compileAttachments=function(e,t){const{graphic:r}=this,{description:i,title:o}=e;return this.contentViewModels[t]=new m({graphic:r,...this._compileTitleAndDesc({title:o,description:i})}),e},i._compileCustom=function(e,t){const{graphic:r}=this,{creator:i,destroyer:o}=e;return this.contentViewModels[t]=new b({graphic:r,creator:i,destroyer:o}),e},i._compileTitleAndDesc=function({title:e,description:t}){const{_fieldInfoMap:r,_sourceLayer:i,graphic:o,formattedAttributes:n}=this,s=o?.attributes,a=this._expressionAttributes,l=n.global;return{title:w.substituteFieldsInLinksAndAttributes({attributes:s,fieldInfoMap:r,globalAttributes:l,expressionAttributes:a,layer:i,text:e}),description:w.substituteFieldsInLinksAndAttributes({attributes:s,fieldInfoMap:r,globalAttributes:l,expressionAttributes:a,layer:i,text:t})}},i._createFieldsVMParams=function(e,t){const r=this._effectivePopupTemplate,i=this.formattedAttributes,o={...i?.global,...i?.content[t]},n=e?.fieldInfos||r?.fieldInfos,s=n?.filter((({fieldName:e})=>w.isExpressionField(e)||w.isRelatedField(e)||o.hasOwnProperty(e))),a=r?.expressionInfos,{description:l,title:c}=e;return{attributes:o,expressionInfos:a,fieldInfos:s,...this._compileTitleAndDesc({title:c,description:l})}},i._compileFields=function(e,t){const r=e.clone(),i=new I(this._createFieldsVMParams(e,t));return this.contentViewModels[t]=i,r.fieldInfos=i.formattedFieldInfos.slice(0),r},i._createMediaVMParams=function(e,t){const{abilities:r,graphic:i,_fieldInfoMap:o,_effectivePopupTemplate:n,relatedInfos:s,_sourceLayer:a,_expressionAttributes:l}=this,c=this.formattedAttributes,p=i?.attributes??{},{description:u,mediaInfos:d,title:f}=e;return{abilities:{chartAnimation:r.chartAnimation},activeMediaInfoIndex:e.activeMediaInfoIndex||0,attributes:p,isAggregate:i?.isAggregate,layer:a,fieldInfoMap:o,formattedAttributes:{...c?.global,...c?.content[t]},expressionAttributes:l,mediaInfos:d,popupTemplate:n,relatedInfos:s,...this._compileTitleAndDesc({title:f,description:u})}},i._compileMedia=function(e,t){const r=e.clone(),i=new A(this._createMediaVMParams(e,t));return r.mediaInfos=i.formattedMediaInfos.slice(0),this.contentViewModels[t]=i,r},i._createTextVMParams=function(e){const{graphic:t,_fieldInfoMap:r,_sourceLayer:i,_expressionAttributes:o}=this;if(e&&e.text){const n=t?.attributes??{},s=this.formattedAttributes?.global??{};e.text=w.substituteFieldsInLinksAndAttributes({attributes:n,fieldInfoMap:r,globalAttributes:s,expressionAttributes:o,layer:i,text:e.text})}return{graphic:t,creator:e.text}},i._compileText=function(e,t){const r=e.clone();return this.contentViewModels[t]=new b(this._createTextVMParams(r)),r},i._compileLastEditInfo=function(){const{_effectivePopupTemplate:e,_sourceLayer:t,graphic:r}=this;if(!e)return;const{lastEditInfoEnabled:i}=e,o=t?.editFieldsInfo;return i&&o?w.formatEditInfo(o,r?.attributes):void 0},i._compileTitle=function(e){const{_fieldInfoMap:t,_sourceLayer:r,graphic:i,_expressionAttributes:o}=this,n=i?.attributes??{},s=this.formattedAttributes?.global??{};return w.substituteFieldsInLinksAndAttributes({attributes:n,fieldInfoMap:t,globalAttributes:s,expressionAttributes:o,layer:r,text:e})},i._getTitle=async function(){const{_effectivePopupTemplate:e,graphic:t}=this;if(!t)return null;const r=e?.title;return w.graphicCallback(r,{graphic:t})},i._getContent=async function(){const{_effectivePopupTemplate:e,graphic:t}=this;if(!t)return null;const r=e?.content;return w.graphicCallback(r,{graphic:t})},i._queryFeature=async function(e){const{_featureAbortController:t,_sourceLayer:r,graphic:i,_effectivePopupTemplate:o}=this,n=this.map,s=this.view,a=this.spatialReference;if(t!==this._featureAbortController||!i)return;await w.queryUpdatedFeature({graphic:i,popupTemplate:o,layer:r,spatialReference:a},e);const{content:{value:l},title:{value:p}}=await c.eachAlways({content:this._getContent(),title:this._getTitle()}),{expressionAttributes:{value:u}}=await c.eachAlways({checkForRelatedFeatures:this._checkForRelatedFeatures(e),expressionAttributes:M.createCompiledExpressions({expressionInfos:o?.expressionInfos,spatialReference:a,graphic:i,map:n,interceptor:v.interceptor,view:s})});t===this._featureAbortController&&i&&(this._expressionAttributes=u,this._graphicExpressionAttributes={...i.attributes,...u},this._set("formattedAttributes",this._createFormattedAttributes(l)),this._set("title",this._compileTitle(p)),this._set("lastEditInfo",this._compileLastEditInfo()||null),this._set("content",this._compileContent(l)||null))},i._createMediaFormattedAttributes=function({contentElement:e,contentElementIndex:t,formattedAttributes:r}){const{_effectivePopupTemplate:i,graphic:o,relatedInfos:n,_sourceLayer:s,_fieldInfoMap:a,_graphicExpressionAttributes:l}=this;r.content[t]=w.formatAttributes({fieldInfos:i?.fieldInfos,graphic:o,attributes:{...l,...e.attributes},layer:s,fieldInfoMap:a,relatedInfos:n})},i._createFieldsFormattedAttributes=function({contentElement:e,contentElementIndex:t,formattedAttributes:r}){if(e.fieldInfos){const{graphic:i,relatedInfos:o,_sourceLayer:n,_fieldInfoMap:s,_graphicExpressionAttributes:a}=this;r.content[t]=w.formatAttributes({fieldInfos:e.fieldInfos,graphic:i,attributes:{...a,...e.attributes},layer:n,fieldInfoMap:s,relatedInfos:o})}},i._createFormattedAttributes=function(e){const{_effectivePopupTemplate:t,graphic:r,relatedInfos:i,_sourceLayer:o,_fieldInfoMap:n,_graphicExpressionAttributes:s}=this,a=t?.fieldInfos,l={global:w.formatAttributes({fieldInfos:a,graphic:r,attributes:s,layer:o,fieldInfoMap:n,relatedInfos:i}),content:[]};return Array.isArray(e)&&e.forEach(((e,t)=>{"fields"===e.type&&this._createFieldsFormattedAttributes({contentElement:e,contentElementIndex:t,formattedAttributes:l}),"media"===e.type&&this._createMediaFormattedAttributes({contentElement:e,contentElementIndex:t,formattedAttributes:l})})),l},i._checkForRelatedFeatures=function(e){const{graphic:t,_effectivePopupTemplate:r}=this;return this._queryRelatedInfos(t,w.getAllFieldInfos(r),e)},i._queryRelatedInfos=async function(e,t,r){const{relatedInfos:i,_sourceLayer:o}=this;i.clear();const n=null!=o?.associatedLayer?await(o?.associatedLayer.load(r)):o;if(!n||!e)return;const s=t.filter((e=>e&&w.isRelatedField(e.fieldName)));if(!s||!s.length)return;t.forEach((e=>this._configureRelatedInfo(e,n)));const a=await x.queryLayerInfos({relatedInfos:i,layer:n},r);Object.keys(a).forEach((e=>{const t=i.get(e.toString()),r=a[e]?.value;t&&r&&(t.layerInfo=r.data)}));const l=await x.queryRelatedFeatures({graphic:e,relatedInfos:i,layer:n},r);Object.keys(l).forEach((e=>{x.setRelatedFeatures(l[e]?.value,i.get(e.toString()))}))},i._configureRelatedInfo=function(e,t){const{relatedInfos:r}=this,i=x.getRelatedFieldInfo(e.fieldName);if(!i)return;const{layerId:o,fieldName:n}=i;if(!o)return;const s=r.get(o.toString())||x.createRelatedInfo(o,t);s&&(x.updateRelatedInfo({relatedInfo:s,fieldName:n,fieldInfo:e}),this.relatedInfos.set(o,s))},e._createClass(r,[{key:"_effectivePopupTemplate",get:function(){return null!=this.graphic?this.graphic.getEffectivePopupTemplate(this.defaultPopupTemplateEnabled):null}},{key:"_fieldInfoMap",get:function(){return w.createfieldInfoMap(w.getAllFieldInfos(this._effectivePopupTemplate),this._sourceLayer)}},{key:"_sourceLayer",get:function(){return w.getSourceLayer(this.graphic)}},{key:"isTable",get:function(){return this._sourceLayer?.isTable||!1}},{key:"state",get:function(){return this.graphic?this._error?"error":this.waitingForContent?"loading":"ready":"disabled"}},{key:"graphic",set:function(e){this._set("graphic",e?e.clone():null)}},{key:"spatialReference",get:function(){return this.view?.spatialReference??null},set:function(e){this._override("spatialReference",e)}},{key:"map",get:function(){return this.view?.map||null},set:function(e){this._override("map",e)}},{key:"waitingForContent",get:function(){return!!this._featureAbortController}}]),r}(a.IdentifiableMixin(o));R.interceptor=new i.FeatureSetQueryInterceptor(w.preLayerQueryCallback,w.preRequestCallback),t.__decorate([d.property()],R.prototype,"_error",void 0),t.__decorate([d.property()],R.prototype,"_featureAbortController",void 0),t.__decorate([d.property({readOnly:!0})],R.prototype,"_effectivePopupTemplate",null),t.__decorate([d.property({readOnly:!0})],R.prototype,"_fieldInfoMap",null),t.__decorate([d.property({readOnly:!0})],R.prototype,"_sourceLayer",null),t.__decorate([d.property()],R.prototype,"abilities",void 0),t.__decorate([f.cast("abilities")],R.prototype,"castAbilities",null),t.__decorate([d.property({readOnly:!0})],R.prototype,"content",void 0),t.__decorate([d.property({readOnly:!0})],R.prototype,"contentViewModels",void 0),t.__decorate([d.property()],R.prototype,"description",void 0),t.__decorate([d.property({type:Boolean})],R.prototype,"defaultPopupTemplateEnabled",void 0),t.__decorate([d.property({readOnly:!0})],R.prototype,"isTable",null),t.__decorate([d.property({readOnly:!0})],R.prototype,"state",null),t.__decorate([d.property({readOnly:!0})],R.prototype,"formattedAttributes",void 0),t.__decorate([d.property({type:r,value:null})],R.prototype,"graphic",null),t.__decorate([d.property({readOnly:!0})],R.prototype,"lastEditInfo",void 0),t.__decorate([d.property({readOnly:!0})],R.prototype,"relatedInfos",void 0),t.__decorate([d.property()],R.prototype,"spatialReference",null),t.__decorate([d.property({readOnly:!0})],R.prototype,"title",void 0),t.__decorate([d.property()],R.prototype,"map",null),t.__decorate([d.property({readOnly:!0})],R.prototype,"waitingForContent",null),t.__decorate([d.property()],R.prototype,"view",void 0),R=v=t.__decorate([_.subclass("esri.widgets.FeatureViewModel")],R);return R}));
