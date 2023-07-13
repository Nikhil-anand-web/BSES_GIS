/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../PopupTemplate","../../core/Error","../../intl/messages","./support/utils"],(function(e,n,i,r,t){"use strict";async function a(e){const{layer:n,renderer:r}=e;await n.load();const t=r||n.renderer;if("unique-value"!==t?.type)throw new i("relationship-popup:invalid-parameters","renderer.type must be 'unique-value'");const a=t.authoringInfo;if(!a||"relationship"!==a.type)throw new i("relationship-popup:invalid-parameters","renderer.authoringInfo.type must be 'relationship'");if(!(a.field1&&a.field1.field&&a.field2&&a.field2.field))throw new i("relationship-popup:invalid-parameters","'field1' and/or 'field2' properties are missing in renderer.authoringInfo");return{layer:n,renderer:t}}async function o(e,i,r="divide"){const{fieldInfos:a,expressionInfos:o}=await t.getFieldAndExpressionInfos({renderer:e,layer:i,normFieldExpressionTemplate:r});return new n({content:await t.getContentFromFieldInfos(i,{fieldInfos:a,expressionInfos:o}),fieldInfos:a,expressionInfos:o})}function s(e){const n=e.authoringInfo;return!(!n?.field1?.normalizationField&&!n?.field2?.normalizationField)}async function l(e){const[{renderer:n,layer:i},t]=await Promise.all([a(e),r.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]),l={name:"relationship",title:t.relationshipPopupTitle,value:await o(n,i)},p=[];return s(n)&&p.push({name:"relationship-percent",title:t.relationshipNormFieldAsPercent,value:await o(n,i,"percentage")}),{primaryTemplate:l,secondaryTemplates:p}}e.getTemplates=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
