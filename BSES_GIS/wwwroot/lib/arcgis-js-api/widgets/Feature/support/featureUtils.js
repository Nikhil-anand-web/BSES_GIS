/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports","../../../core/Logger","../../../core/string","../../../intl/date","../../../intl/number","../../../layers/support/fieldUtils","../../../layers/support/layerUtils","../../../popup/support/FieldInfoFormat","../../../support/arcadeOnDemand"],(function(e,t,r,n,i,a,o,l,u){"use strict";const s="esri.widgets.Feature.support.featureUtils",f=t.getLogger(s),c=/href=(""|'')/gi,d=/(\{([^\{\r\n]+)\})/g,p=/\'/g,y=/^\s*expression\//i,m=/(\n)/gi,g=/[\u00A0-\u9999<>\&]/gim,b=/href\s*=\s*(?:\"([^\"]+)\"|\'([^\']+)\')/gi,F=/^(?:mailto:|tel:)/,I="relationships/",h=n.convertDateFormatToIntlOptions("short-date-short-time");function T(e){if(null!=e)return e.get("sourceLayer")||e.get("layer")}async function w(e,t){return"function"==typeof e?e(t):e}function N(e=""){if(e)return!F.test(e.trim().toLowerCase())}function L(e){return!!e&&y.test(e)}function x(e,t){if(!L(t)||!e)return null;const r=t.replace(y,"").toLowerCase();let n=null;return e.some((e=>e.name.toLowerCase()===r&&(n=e,!0))),n}function E(e,t){const r=x(t,e?.fieldName);return r?r.title||null:e?e.label||e.fieldName:null}function R(e,t){const r=t.get(e.toLowerCase());return`{${r&&r.fieldName||e}}`}function A(e){return e.replaceAll(c,"")}function C(e,t){const r=M(t,e);return r?r.name:e}function q(e,t){return e&&e.map((e=>C(e,t)))}function M(e,t){return e&&"function"==typeof e.getField&&t?e.getField(t)??null:null}function D(e){return`${e}`.trim()}function j({attributes:e,globalAttributes:t,layer:r,text:n,expressionAttributes:i,fieldInfoMap:a}){return n?v({formattedAttributes:t,template:k(n,{...t,...i,...e},r),fieldInfoMap:a}):""}function v({formattedAttributes:e,template:t,fieldInfoMap:n}){return D(A(r.replace(r.replace(t,(e=>R(e,n))),e)))}function S(e,t,r=!1){const n=t[e];if("string"==typeof n){const i="%27",a=(r?encodeURIComponent(n):n).replaceAll(p,i);t[e]=a}}function O(e,t=!1){const r={...e};return Object.keys(r).forEach((e=>S(e,r,t))),r}function U(e,t,n){const i=(t=D(t))&&"{"!==t[0];return r.replace(e,O(n,i||!1))}function $(e,t){return e.replaceAll(d,((e,r,n)=>{const i=M(t,n);return i?`{${i.name}}`:r}))}function k(e,t,r){const n=$(e,r);return n?n.replaceAll(b,((e,r,n)=>U(e,r||n,t))):n}function G(e,t){if("string"==typeof e&&t&&null==t.dateFormat&&(null!=t.places||null!=t.digitSeparator)){const t=Number(e);if(!isNaN(t))return t}return e}function P(e){return null!=e&&"object"==typeof e&&"layer"in e&&!!e.layer}function H(e){return null!=e&&"object"==typeof e&&"type"in e&&"map-image"===e.type}function Q(e){return null!=e&&"object"==typeof e&&"fieldsIndex"in e&&"geometryType"in e&&"getField"in e&&"load"in e&&"loaded"in e&&"objectIdField"in e&&"spatialReference"in e&&"type"in e&&"feature"===e.type&&"when"in e}function V(e){return null!=e&&"object"==typeof e&&"createQuery"in e&&"queryFeatureCount"in e&&"queryObjectIds"in e&&"queryRelatedFeatures"in e&&"queryRelatedFeaturesCount"in e&&"relationships"in e}function _(e){return Q(e)&&V(e)}function z(e){return!!e&&"object"==typeof e&&"sourceLayer"in e&&_(e.sourceLayer)}function Z(e,t){const{fieldInfos:r,fieldName:n,preventPlacesFormatting:u,layer:s}=t,f=B(r,n),c=f?.clone(),d=M(s,n);if(c&&!a.isRasterPixelValueField(n)){const t=d?.type;if("date"===t||"date-only"===t||"time-only"===t||"timestamp-offset"===t||c.format?.dateFormat){const r=c.format??new l;if(r.dateFormat??(r.dateFormat="date-only"===t?"short-date":"short-date-short-time"),"number"==typeof e){const t=!P(s)&&o.isFeatureLayer(s)&&s.datesInUnknownTimezone||P(s)&&H(s.layer)&&s.layer.datesInUnknownTimezone;return r.formatDate(e,t)}switch(t){case"date-only":return r.formatDateOnly(e);case"time-only":return r.formatTimeOnly(e);case"timestamp-offset":return r.formatTimestamp(e)}}}const p=c?.format;return"string"==typeof e&&a.isRasterPixelValueField(n)&&p?p.formatRasterPixelValue(e):"string"==typeof(e=G(e,p))||null==e||null==p?te(e):u?i.formatNumber(e,{...i.convertNumberFormatToIntlOptions(p),minimumFractionDigits:0,maximumFractionDigits:20}):p.formatNumber(e)}function B(e,t){if(e&&e.length&&t)return e.find((e=>e.fieldName?.toLowerCase()===t.toLowerCase()))}function J({fieldName:e,graphic:t,layer:r}){if(le(e))return null;if(!r||"function"!=typeof r.getFeatureType)return null;const{typeIdField:n}=r;if(!n||e!==n)return null;const i=r.getFeatureType(t);return i?i.name:null}function K({fieldName:e,value:t,graphic:r,layer:n}){if(le(e))return null;if(!n||"function"!=typeof n.getFieldDomain)return null;const i=r&&n.getFieldDomain(e,{feature:r});return i&&"coded-value"===i.type?i.getName(t):null}function W(e,t){const{creatorField:r,creationDateField:i,editorField:a,editDateField:o}=e;if(!t)return;const l=t[o];if("number"==typeof l){const e=t[a];return{type:"edit",date:n.formatDate(l,h),user:e}}const u=t[i];if("number"==typeof u){const e=t[r];return{type:"create",date:n.formatDate(u,h),user:e}}return null}function X(e,t){const r=new Map;return e?(e.forEach((e=>{const n=C(e.fieldName,t);e.fieldName=n,r.set(n.toLowerCase(),e)})),r):r}function Y(e){const t=[];if(!e)return t;const{fieldInfos:r,content:n}=e;return r&&t.push(...r),n&&Array.isArray(n)?(n.forEach((e=>{if("fields"===e.type){const r=e&&e.fieldInfos;r&&t.push(...r)}})),t):t}function ee(e){return e.replaceAll(g,(e=>`&#${e.charCodeAt(0)};`))}function te(e){return"string"==typeof e?e.replaceAll(m,'<br class="esri-text-new-line" />'):e}function re(e){const{value:t,fieldName:r,fieldInfos:i,fieldInfoMap:a,layer:o,graphic:l}=e;if(null==t)return"";const u=K({fieldName:r,value:t,graphic:l,layer:o});if(u)return u;const s=J({fieldName:r,graphic:l,layer:o});if(s)return s;if(a.get(r.toLowerCase()))return Z(t,{fieldInfos:i||Array.from(a.values()),fieldName:r,layer:o});switch(o?.fieldsIndex?.get(r)?.type){case"date":return n.formatDate(t);case"date-only":return n.formatDateOnly(t);case"time-only":return n.formatTimeOnly(t);case"timestamp-offset":return n.formatTimestamp(t)}return te(t)}function ne({fieldInfos:e,attributes:t,layer:r,graphic:n,fieldInfoMap:i,relatedInfos:a}){const o={};return a?.forEach((t=>fe({attributes:o,relatedInfo:t,fieldInfoMap:i,fieldInfos:e,layer:r}))),t&&Object.keys(t).forEach((a=>{const l=t[a];o[a]=re({fieldName:a,fieldInfos:e,fieldInfoMap:i,layer:r,value:l,graphic:n})})),o}async function ie(e,t){const{layer:r,graphic:n,outFields:i,objectIds:a,returnGeometry:l,spatialReference:u}=e,s=a[0];if("number"!=typeof s&&"string"!=typeof s){const e="Could not query required fields for the specified feature. The feature's ID is invalid.",t={layer:r,graphic:n,objectId:s,requiredFields:i};return f.warn(e,t),null}if(!o.getEffectiveLayerCapabilities(r)?.operations?.supportsQuery){const e="The specified layer cannot be queried. The following fields will not be available.",t={layer:r,graphic:n,requiredFields:i,returnGeometry:l};return f.warn(e,t),null}const c=r.createQuery();c.objectIds=a,c.outFields=i?.length?i:[r.objectIdField],c.returnGeometry=!!l,c.returnZ=!!l,c.returnM=!!l,c.outSpatialReference=u;return(await r.queryFeatures(c,t)).features[0]}async function ae(e){if(!e.expressionInfos?.length)return!1;const t=await u.loadArcade(),{arcadeUtils:{hasGeometryFunctions:r}}=t;return r(e)}async function oe({graphic:e,popupTemplate:t,layer:r,spatialReference:n},i){if(!r||!t)return;if("function"==typeof r.load&&await r.load(i),!e.attributes)return;const o=e.attributes[r.objectIdField];if(null==o)return;const l=[o],u=await t.getRequiredFields(r.fieldsIndex),s=a.featureHasFields(u,e),f=s?[]:u,c=t.returnGeometry||await ae(t);if(s&&!c)return;const d=await ie({layer:r,graphic:e,outFields:f,objectIds:l,returnGeometry:c,spatialReference:n},i);d&&(d.geometry&&(e.geometry=d.geometry),d.attributes&&(e.attributes={...e.attributes,...d.attributes}))}function le(e=""){return!!e&&e.includes(I)}function ue(e){return e?`${I}${e.layerId}/${e.fieldName}`:""}function se({attributes:e,graphic:t,relatedInfo:r,fieldInfos:n,fieldInfoMap:i,layer:a}){e&&t&&r&&Object.keys(t.attributes).forEach((o=>{const l=ue({layerId:r.relation.id.toString(),fieldName:o}),u=t.attributes[o];e[l]=re({fieldName:l,fieldInfos:n,fieldInfoMap:i,layer:a,value:u,graphic:t})}))}function fe({attributes:e,relatedInfo:t,fieldInfoMap:r,fieldInfos:n,layer:i}){e&&t&&(t.relatedFeatures&&t.relatedFeatures&&t.relatedFeatures.forEach((a=>se({attributes:e,graphic:a,relatedInfo:t,fieldInfoMap:r,fieldInfos:n,layer:i}))),t.relatedStatsFeatures&&t.relatedStatsFeatures&&t.relatedStatsFeatures.forEach((a=>se({attributes:e,graphic:a,relatedInfo:t,fieldInfoMap:r,fieldInfos:n,layer:i}))))}const ce=e=>{if(!e)return!1;const t=e.toUpperCase();return t.includes("CURRENT_TIMESTAMP")||t.includes("CURRENT_DATE")||t.includes("CURRENT_TIME")},de=({layer:e,method:t,query:r,definitionExpression:n})=>{if(!e.capabilities?.query?.supportsCacheHint||"attachments"===t)return;const i=null!=r.where?r.where:null,a=null!=r.geometry?r.geometry:null;ce(n)||ce(i)||"extent"===a?.type||"tile"===r.resultType||(r.cacheHint=!0)},pe=({query:e,layer:t,method:r})=>{de({layer:t,method:r,query:e,definitionExpression:`${t.definitionExpression} ${t.serviceDefinitionExpression}`})},ye=({queryPayload:e,layer:t,method:r})=>{de({layer:t,method:r,query:e,definitionExpression:`${t.definitionExpression} ${t.serviceDefinitionExpression}`})};function me(e,t,r){return e&&t&&r?ge(e.allLayers,t,r)||ge(e.allTables,t,r):null}function ge(e,t,r){return e.filter(_).find((e=>e!==t&&e.url===t.url&&e.layerId===r.relatedTableId))}e.applyTextFormattingHTML=te,e.createfieldInfoMap=X,e.findRelatedLayer=me,e.fixTokens=$,e.formatAttributes=ne,e.formatEditInfo=W,e.formatValueToFieldInfo=Z,e.getAllFieldInfos=Y,e.getFieldInfo=B,e.getFieldInfoLabel=E,e.getFixedFieldName=C,e.getFixedFieldNames=q,e.getSourceLayer=T,e.graphicCallback=w,e.htmlEntities=ee,e.isExpressionField=L,e.isFeatureSupportedLayer=Q,e.isGraphicForRelatableFeatureSupportedLayer=z,e.isRelatableFeatureSupportedLayer=_,e.isRelatableLayer=V,e.isRelatedField=le,e.preLayerQueryCallback=pe,e.preRequestCallback=ye,e.querySourceLayer=ie,e.queryUpdatedFeature=oe,e.shouldOpenInNewTab=N,e.substituteAttributes=v,e.substituteFieldsInLinksAndAttributes=j,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
